// @ts-check
/**
 * Valida, normaliza e promove a fila editorial de `inbox/` usando
 * seo/briefs/slug-registry.md como FONTE ÚNICA DE VERDADE.
 *
 * O registry define slug canônica, tipo de página, cluster e keyword primária.
 * Um arquivo da inbox é ligado a uma linha do registry pela **keyword primária**
 * (com apelidos explícitos em ALIASES para os casos em que o rascunho encurtou
 * a keyword). Nada aqui inventa slug: se a keyword não casa, o arquivo é erro.
 *
 * Uso:
 *   node scripts/normalize-inbox.mjs                  relatório (dry-run)
 *   node scripts/normalize-inbox.mjs --json           relatório em JSON
 *   node scripts/normalize-inbox.mjs --fix            grava slug/tipo/autor/status normalizados em inbox/
 *   node scripts/normalize-inbox.mjs --promote        move os `approved` para src/content/<colecao>/
 *   node scripts/normalize-inbox.mjs --promote --date 2026-09-20   pubDate usado na promoção
 *
 * Saída de status: 0 = sem erros bloqueantes; 1 = há erros.
 * Avisos (⚠) não bloqueiam o comando, mas bloqueiam a promoção do arquivo.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INBOX_DIR = resolve(ROOT, 'inbox');
const REGISTRY_PATH = resolve(ROOT, 'seo/briefs/slug-registry.md');
const CONTENT_DIR = resolve(ROOT, 'src/content');

/**
 * Keywords de rascunho que apontam para uma linha do registry com keyword
 * diferente. Cada entrada é uma decisão editorial consciente, não um atalho:
 * o registry continua sendo quem manda na slug.
 */
const ALIASES = new Map([
  ['ferramentas de ia para desenvolvimento de software', 'ferramentas de ia para desenvolvimento'],
]);

/** Autor do frontmatter → slug da coleção `autores`. */
const AUTORES = new Map([
  ['gabriel-barboza', 'gabriel-barboza'],
  ['redacao', 'redacao'],
  ['redação', 'redacao'],
]);

/**
 * Tipo declarado no registry → destino no site.
 *
 * `collection` = coleção de conteúdo do Astro que recebe o arquivo na promoção.
 * `route` = rota que renderiza a URL. `null` nos dois casos significa que a
 * infraestrutura ainda não existe — o conteúdo fica na inbox até existir.
 */
const DESTINOS = new Map([
  ['pilar', { collection: null, route: 'src/pages/[silo]/index.astro' }],
  ['pilar/diretório', { collection: null, route: 'src/pages/ferramentas/index.astro' }],
  ['hub', { collection: null, route: null }],
  ['artigo', { collection: 'artigos', route: 'src/pages/artigos/[...id].astro' }],
  ['artigo existente', { collection: 'artigos', route: 'src/pages/artigos/[...id].astro' }],
  ['guia', { collection: 'artigos', route: 'src/pages/artigos/[...id].astro' }],
  ['metodologia', { collection: 'artigos', route: 'src/pages/artigos/[...id].astro' }],
  ['comparativo conceitual', { collection: 'artigos', route: 'src/pages/artigos/[...id].astro' }],
  ['tutorial', { collection: 'tutoriais', route: null }],
  ['comparativo', { collection: 'comparativos', route: null }],
  ['case', { collection: 'estudos-de-caso', route: null }],
  ['review', { collection: 'ferramentas', route: 'src/pages/ferramentas/[...id].astro' }],
]);

/** Campos exigidos no frontmatter de todo arquivo da inbox. */
const CAMPOS_OBRIGATORIOS = [
  'title',
  'description',
  'author',
  'category',
  'silo',
  'cluster',
  'primaryKeyword',
  'status',
  'sources',
];

const STATUS_VALIDOS = ['draft', 'needs-evidence', 'review', 'approved'];

/** Rotas institucionais que podem ser alvo de link interno sem estar no registry. */
const ROTAS_FIXAS = new Set([
  '/',
  '/artigos/',
  '/ferramentas/',
  '/tutoriais/',
  '/comparativos/',
  '/estudos-de-caso/',
  '/autores/',
  '/sobre/',
  '/contato/',
  '/privacidade/',
  '/politica-editorial/',
]);

const MARCADOR_REVISAO = /Revisão pendente/;
const MIN_PALAVRAS = 600;

// ---------------------------------------------------------------- frontmatter

/**
 * Parser de frontmatter mínimo: escalares e listas simples (`- item`),
 * que é tudo que a inbox usa. Mantém a ordem original das chaves.
 */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: null, body: raw };
  const data = {};
  let chaveLista = null;
  for (const linha of m[1].split(/\r?\n/)) {
    if (!linha.trim()) continue;
    const item = linha.match(/^\s*-\s+(.*)$/);
    if (item && chaveLista) {
      data[chaveLista].push(unquote(item[1]));
      continue;
    }
    const par = linha.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!par) continue;
    const [, chave, valor] = par;
    if (valor.trim() === '') {
      chaveLista = chave;
      data[chave] = [];
    } else {
      chaveLista = null;
      data[chave] = unquote(valor);
    }
  }
  return { data, body: m[2] };
}

function unquote(valor) {
  const v = valor.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

function yamlString(valor) {
  return `"${String(valor).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

/** Serializa frontmatter na ordem informada; listas viram blocos `- item`. */
function stringifyFrontmatter(entradas) {
  const linhas = [];
  for (const [chave, valor] of entradas) {
    if (valor === undefined || valor === null) continue;
    if (Array.isArray(valor)) {
      linhas.push(`${chave}:`);
      for (const item of valor) linhas.push(`  - ${yamlString(item)}`);
    } else if (typeof valor === 'boolean' || typeof valor === 'number') {
      linhas.push(`${chave}: ${valor}`);
    } else {
      linhas.push(`${chave}: ${yamlString(valor)}`);
    }
  }
  return `---\n${linhas.join('\n')}\n---\n`;
}

// -------------------------------------------------------------------- registry

/** Lê a tabela "Registro inicial" de slug-registry.md. */
function lerRegistry() {
  const texto = readFileSync(REGISTRY_PATH, 'utf8');
  const linhas = [
    ...texto.matchAll(/^\|\s*`(\/[^`]+)`\s*\|([^|]+)\|([^|]+)\|([^|]+)\|/gm),
  ].map((m) => ({
    slug: m[1].trim(),
    tipo: m[2].trim().toLowerCase(),
    cluster: m[3].trim(),
    keyword: m[4].trim(),
  }));

  const porKeyword = new Map();
  const duplicadas = [];
  for (const linha of linhas) {
    const chave = normalizarKeyword(linha.keyword);
    if (porKeyword.has(chave)) duplicadas.push(linha.keyword);
    porKeyword.set(chave, linha);
  }
  return { linhas, porKeyword, duplicadas };
}

function normalizarKeyword(valor) {
  return valor.toLowerCase().normalize('NFC').replace(/\s+/g, ' ').trim();
}

/** Último segmento da slug canônica — nome do arquivo na coleção. */
function slugFinal(slug) {
  const partes = slug.split('/').filter(Boolean);
  return partes[partes.length - 1];
}

// ------------------------------------------------------------------- análise

function contarPalavras(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`|-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Links internos absolutos usados no corpo (`](/algo/)`). */
function extrairLinksInternos(body) {
  return [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]);
}

function analisar() {
  const registry = lerRegistry();
  const slugsRegistry = new Set(registry.linhas.map((l) => l.slug));
  const arquivos = readdirSync(INBOX_DIR)
    .filter((f) => /^\d{3}-.*\.md$/.test(f))
    .sort();

  const itens = [];
  const erros = [];
  const avisos = [];
  const keywordsVistas = new Map();
  const slugsVistas = new Map();

  for (const arquivo of arquivos) {
    const caminho = join(INBOX_DIR, arquivo);
    const raw = readFileSync(caminho, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const item = {
      arquivo,
      ordem: Number(arquivo.slice(0, 3)),
      slug: null,
      tipo: null,
      cluster: null,
      keyword: data?.primaryKeyword ?? null,
      status: data?.status ?? null,
      autor: null,
      destino: null,
      palavras: contarPalavras(body),
      erros: [],
      avisos: [],
    };
    itens.push(item);

    if (!data) {
      item.erros.push('frontmatter ausente ou malformado');
      continue;
    }

    for (const campo of CAMPOS_OBRIGATORIOS) {
      const valor = data[campo];
      if (valor === undefined || valor === '' || (Array.isArray(valor) && valor.length === 0)) {
        item.erros.push(`campo obrigatório ausente: ${campo}`);
      }
    }

    // Ligação com o registry pela keyword primária.
    const keywordBruta = normalizarKeyword(item.keyword ?? '');
    const keywordRegistry = ALIASES.get(keywordBruta) ?? keywordBruta;
    const linha = registry.porKeyword.get(keywordRegistry);
    if (!linha) {
      item.erros.push(`keyword "${item.keyword}" não existe no slug-registry`);
    } else {
      item.slug = linha.slug;
      item.tipo = linha.tipo;
      item.cluster = linha.cluster;
      const destino = DESTINOS.get(linha.tipo);
      if (!destino) {
        item.erros.push(`tipo "${linha.tipo}" sem destino mapeado`);
      } else {
        item.destino = destino;
        if (!destino.route) {
          item.avisos.push(
            `rota de "${linha.tipo}" ainda não existe no site (${linha.slug})`,
          );
        }
      }

      const anterior = slugsVistas.get(linha.slug);
      if (anterior) item.erros.push(`slug ${linha.slug} já usada por ${anterior}`);
      else slugsVistas.set(linha.slug, arquivo);
    }

    const anteriorKw = keywordsVistas.get(keywordBruta);
    if (anteriorKw) item.erros.push(`keyword primária duplicada com ${anteriorKw}`);
    else keywordsVistas.set(keywordBruta, arquivo);

    // Autor precisa resolver para um slug da coleção `autores`.
    const autor = AUTORES.get(normalizarKeyword(String(data.author ?? '')));
    if (!autor) item.erros.push(`autor "${data.author}" não resolve para src/content/autores/`);
    else {
      item.autor = autor;
      if (!existsSync(join(CONTENT_DIR, 'autores', `${autor}.md`))) {
        item.erros.push(`autor "${autor}" não tem arquivo em src/content/autores/`);
      }
    }

    if (item.status && !STATUS_VALIDOS.includes(item.status)) {
      item.erros.push(`status "${item.status}" fora de ${STATUS_VALIDOS.join(' | ')}`);
    }

    // Links internos precisam apontar para slug do registry ou rota fixa.
    for (const link of extrairLinksInternos(body)) {
      const alvo = link.split('#')[0];
      if (!slugsRegistry.has(alvo) && !ROTAS_FIXAS.has(alvo)) {
        item.erros.push(`link interno fora do registry: ${alvo}`);
      }
    }

    // Gates editoriais: não bloqueiam o check, bloqueiam a promoção.
    if (MARCADOR_REVISAO.test(body)) item.avisos.push('contém marcador "Revisão pendente"');
    if (item.palavras < MIN_PALAVRAS) {
      item.avisos.push(`profundidade baixa (${item.palavras} palavras, mínimo ${MIN_PALAVRAS})`);
    }
    if (item.status !== 'approved') item.avisos.push(`status "${item.status}" (promoção exige approved)`);

    for (const e of item.erros) erros.push(`${arquivo}: ${e}`);
    for (const a of item.avisos) avisos.push(`${arquivo}: ${a}`);
  }

  // Cobertura: toda linha do registry precisa de um arquivo na fila.
  const semArquivo = registry.linhas.filter((l) => !slugsVistas.has(l.slug));
  for (const linha of semArquivo) erros.push(`registry sem arquivo na inbox: ${linha.slug}`);
  for (const kw of registry.duplicadas) erros.push(`registry com keyword duplicada: ${kw}`);

  return { registry, itens, erros, avisos, semArquivo };
}

// ---------------------------------------------------------------------- --fix

/**
 * Reescreve o frontmatter da inbox no formato canônico, gravando a ligação
 * com o registry (`slug`, `type`, `cluster`) e normalizando autor/silo/status.
 * Não toca no corpo do texto.
 */
function corrigir(itens) {
  let alterados = 0;
  for (const item of itens) {
    if (!item.slug || !item.autor) continue; // sem ligação confiável, não mexe
    const caminho = join(INBOX_DIR, item.arquivo);
    const raw = readFileSync(caminho, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    if (!data) continue;

    const entradas = [
      ['title', data.title],
      ['description', data.description],
      ['slug', item.slug],
      ['type', item.tipo],
      ['author', item.autor],
      ['category', data.category],
      ['silo', data.silo],
      ['cluster', item.cluster],
      ['primaryKeyword', data.primaryKeyword],
      ['status', item.status],
      ['sources', data.sources],
    ];
    const novo = stringifyFrontmatter(entradas) + body;
    if (novo !== raw) {
      writeFileSync(caminho, novo, 'utf8');
      alterados++;
    }
  }
  return alterados;
}

// ------------------------------------------------------------------ --promote

/** Rótulo legível para a fonte, derivado do host. */
function rotuloFonte(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** Monta o frontmatter da coleção de destino a partir do da inbox. */
function frontmatterDestino(item, data, dataPub) {
  const fontes = (Array.isArray(data.sources) ? data.sources : []).map((url) => ({
    label: rotuloFonte(url),
    url,
  }));

  if (item.destino.collection === 'artigos') {
    return [
      ['title', data.title],
      ['description', data.description],
      ['pubDate', dataPub],
      ['author', item.autor],
      ['category', data.category],
      ['silo', data.silo],
      ['tags', [item.cluster]],
      ['draft', false],
      ['sources', fontes],
    ];
  }
  if (item.destino.collection === 'tutoriais') {
    return [
      ['title', data.title],
      ['description', data.description],
      ['pubDate', dataPub],
      ['author', item.autor],
      ['difficulty', data.difficulty ?? 'Intermediário'],
      ['silo', data.silo],
      ['tags', [item.cluster]],
      ['draft', false],
    ];
  }
  return null;
}

/**
 * `sources` da coleção `artigos` é lista de objetos — o serializador simples
 * só cobre escalares e listas de string, então esse caso é montado à mão.
 */
function serializarDestino(entradas) {
  const linhas = ['---'];
  for (const [chave, valor] of entradas) {
    if (chave === 'sources') {
      linhas.push('sources:');
      for (const fonte of valor) {
        linhas.push(`  - label: ${yamlString(fonte.label)}`);
        linhas.push(`    url: ${yamlString(fonte.url)}`);
      }
    } else if (Array.isArray(valor)) {
      linhas.push(`${chave}:`);
      for (const v of valor) linhas.push(`  - ${yamlString(v)}`);
    } else if (typeof valor === 'boolean') {
      linhas.push(`${chave}: ${valor}`);
    } else {
      linhas.push(`${chave}: ${yamlString(valor)}`);
    }
  }
  linhas.push('---', '');
  return linhas.join('\n');
}

/**
 * Move para src/content/ os arquivos aprovados e sem pendência editorial.
 * Tudo que tem erro, aviso, destino inexistente ou status != approved fica.
 */
function promover(itens, dataPub) {
  const promovidos = [];
  const retidos = [];
  for (const item of itens) {
    const bloqueios = [...item.erros, ...item.avisos];
    if (bloqueios.length > 0) {
      retidos.push({ arquivo: item.arquivo, motivo: bloqueios[0] });
      continue;
    }
    if (!item.destino?.collection) {
      retidos.push({ arquivo: item.arquivo, motivo: `tipo "${item.tipo}" não vai para coleção` });
      continue;
    }

    const caminho = join(INBOX_DIR, item.arquivo);
    const { data, body } = parseFrontmatter(readFileSync(caminho, 'utf8'));
    const entradas = frontmatterDestino(item, data, dataPub);
    if (!entradas) {
      retidos.push({ arquivo: item.arquivo, motivo: `coleção "${item.destino.collection}" sem mapeamento` });
      continue;
    }

    const destinoDir = join(CONTENT_DIR, item.destino.collection);
    const destino = join(destinoDir, `${slugFinal(item.slug)}.md`);
    if (existsSync(destino)) {
      retidos.push({ arquivo: item.arquivo, motivo: `destino já existe: ${destino}` });
      continue;
    }

    // O H1 do rascunho sai: o layout já renderiza o título do frontmatter.
    const corpo = body.replace(/^\s*#\s+.*\r?\n+/, '');
    mkdirSync(destinoDir, { recursive: true });
    writeFileSync(destino, serializarDestino(entradas) + corpo, 'utf8');
    rmSync(caminho);
    promovidos.push({ arquivo: item.arquivo, destino, slug: item.slug });
  }
  return { promovidos, retidos };
}

// ------------------------------------------------------------------ relatório

function relatorio({ itens, erros, avisos }) {
  const porTipo = new Map();
  for (const item of itens) {
    const chave = item.tipo ?? '(sem tipo)';
    porTipo.set(chave, (porTipo.get(chave) ?? 0) + 1);
  }

  console.log(`\nFila editorial — ${itens.length} arquivos em inbox/\n`);
  console.log('Tipo                     Qtd  Destino');
  console.log('-----------------------  ---  ----------------------------------------');
  for (const [tipo, qtd] of [...porTipo].sort()) {
    const destino = DESTINOS.get(tipo);
    const alvo = destino?.route
      ? `${destino.collection ?? '—'} · rota ok`
      : `${destino?.collection ?? '—'} · ROTA AUSENTE`;
    console.log(`${tipo.padEnd(23)}  ${String(qtd).padStart(3)}  ${alvo}`);
  }

  const semRota = itens.filter((i) => i.destino && !i.destino.route);
  const prontos = itens.filter((i) => i.erros.length === 0 && i.avisos.length === 0);
  const comMarcador = itens.filter((i) => i.avisos.some((a) => a.includes('Revisão pendente')));
  const rasos = itens.filter((i) => i.palavras < MIN_PALAVRAS);

  console.log('\nGates');
  console.log(`  ligados ao registry ....... ${itens.filter((i) => i.slug).length}/${itens.length}`);
  console.log(`  com marcador de revisão ... ${comMarcador.length}`);
  console.log(`  abaixo de ${MIN_PALAVRAS} palavras .... ${rasos.length}`);
  console.log(`  aguardando rota no site ... ${semRota.length}`);
  console.log(`  prontos para promover ..... ${prontos.length}`);

  if (erros.length) {
    console.log(`\n✗ ${erros.length} erro(s) bloqueante(s):`);
    for (const e of erros) console.log(`  - ${e}`);
  } else {
    console.log('\n✓ nenhum erro bloqueante');
  }

  if (avisos.length) {
    console.log(`\n⚠ ${avisos.length} aviso(s) — bloqueiam a promoção, não o check:`);
    console.log(`  - ${comMarcador.length}× marcador "Revisão pendente" no texto`);
    console.log(`  - ${rasos.length}× abaixo de ${MIN_PALAVRAS} palavras`);
    console.log(`  - ${itens.filter((i) => i.status !== 'approved').length}× status diferente de "approved"`);
    console.log(`  - ${semRota.length}× tipo de página sem rota no site`);
  }
  console.log('');
}

// ----------------------------------------------------------------------- main

const args = process.argv.slice(2);
const flag = (nome) => args.includes(nome);
const valor = (nome) => {
  const i = args.indexOf(nome);
  return i >= 0 ? args[i + 1] : undefined;
};

const analise = analisar();

if (flag('--fix')) {
  const alterados = corrigir(analise.itens);
  console.log(`--fix: ${alterados} arquivo(s) normalizado(s) em inbox/`);
}

if (flag('--promote')) {
  const dataPub = valor('--date') ?? new Date().toISOString().slice(0, 10);
  const { promovidos, retidos } = promover(analise.itens, dataPub);
  console.log(`--promote: ${promovidos.length} promovido(s), ${retidos.length} retido(s)`);
  for (const p of promovidos) console.log(`  → ${p.slug}`);
}

if (flag('--json')) {
  console.log(JSON.stringify(analise.itens, null, 2));
} else if (!flag('--fix') && !flag('--promote')) {
  relatorio(analise);
}

process.exit(analise.erros.length > 0 ? 1 : 0);
