// @ts-check
/**
 * Validação de conteúdo antes de publicar.
 * Checa links internos, frontmatter, duplicidade e blocos que o layout já gera.
 *
 * Uso:
 *   node scripts/validate-content.mjs             # checagens locais
 *   node scripts/validate-content.mjs --external  # + status HTTP das URLs externas
 *
 * Sai com código 1 se houver qualquer erro.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'src/content');
const EXTERNAL = process.argv.includes('--external');

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') || p.endsWith('.mdx') ? [p] : [];
  });
}

function parse(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: '', body: text, text };
  return { fm: m[1], body: m[2], text };
}

const fmValue = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};

// --- 1. Mapa de rotas válidas -------------------------------------------
const routes = new Set(['/']);
const fila = walk(join(CONTENT, 'fila'));
const canon = new Map();
for (const f of fila) {
  const { fm } = parse(f);
  const c = fmValue(fm, 'canonicalPath');
  const rel = relative(ROOT, f);
  if (!c) { err(rel, 'sem canonicalPath'); continue; }
  if (canon.has(c)) err(rel, `canonicalPath duplicado de ${canon.get(c)}: ${c}`);
  canon.set(c, rel);
  routes.add(c);
}
for (const f of walk(join(CONTENT, 'ferramentas'))) {
  const rel = relative(join(CONTENT, 'ferramentas'), f).replace(/\.mdx?$/, '');
  routes.add(`/ferramentas/${rel}/`);
}
for (const f of walk(join(CONTENT, 'tutoriais'))) {
  routes.add(`/tutoriais/${relative(join(CONTENT, 'tutoriais'), f).replace(/\.mdx?$/, '')}/`);
}
for (const f of walk(join(CONTENT, 'autores'))) {
  routes.add(`/autores/${relative(join(CONTENT, 'autores'), f).replace(/\.mdx?$/, '')}/`);
}
// páginas estáticas em src/pages
const pagesDir = join(ROOT, 'src/pages');
for (const name of readdirSync(pagesDir)) {
  const p = join(pagesDir, name);
  if (statSync(p).isDirectory()) {
    routes.add(`/${name}/`);
    for (const sub of readdirSync(p)) {
      if (/^\[/.test(sub)) continue;
      const base = sub.replace(/\.astro$/, '');
      if (base !== 'index') routes.add(`/${name}/${base}/`);
    }
  } else if (name.endsWith('.astro') && !/^\[|^404|^index/.test(name)) {
    routes.add(`/${name.replace(/\.astro$/, '')}/`);
  }
}

// --- 2. Checagens por arquivo ---------------------------------------------
const REQUIRED_FILA = ['title', 'description', 'pubDate', 'author', 'category', 'silo', 'kind', 'canonicalPath', 'primaryKeyword'];
const SILOS = ['ia', 'automacao', 'desenvolvimento', 'ferramentas'];
const KINDS = ['artigo', 'hub', 'tutorial', 'comparativo', 'estudo-de-caso', 'ferramenta', 'pilar', 'noticia'];
const isDate = (v) => v && !Number.isNaN(Date.parse(v));
const externalUrls = new Map();

const files = [...fila, ...walk(join(CONTENT, 'ferramentas')), ...walk(join(CONTENT, 'tutoriais'))];
for (const f of files) {
  const rel = relative(ROOT, f);
  const { fm, body } = parse(f);
  const isFila = f.includes('/fila/');

  if (isFila) {
    for (const k of REQUIRED_FILA) if (!fmValue(fm, k)) err(rel, `frontmatter sem "${k}"`);
    const silo = fmValue(fm, 'silo');
    if (silo && !SILOS.includes(silo)) err(rel, `silo inválido: ${silo}`);
    const kind = fmValue(fm, 'kind');
    if (kind && !KINDS.includes(kind)) err(rel, `kind inválido: ${kind}`);
    const c = fmValue(fm, 'canonicalPath');
    if (c) {
      const expected = c.replace(/^\/|\/$/g, '').split('/').join('__') + '.md';
      if (!f.endsWith(`/${expected}`) && !/^\/[^/]+\/$/.test(c)) {
        warn(rel, `nome do arquivo não bate com canonicalPath (esperado ${expected})`);
      }
      if (kind === 'noticia' && !c.startsWith('/noticias/')) err(rel, 'notícia fora de /noticias/');
    }
    const author = fmValue(fm, 'author');
    if (author && !existsSync(join(CONTENT, 'autores', `${author}.md`))) err(rel, `autor inexistente: ${author}`);
    if (fmValue(fm, 'draft') === 'true') warn(rel, 'draft: true (não será publicado)');
    const upd = fmValue(fm, 'updatedDate');
    if (upd && !isDate(upd)) err(rel, `updatedDate inválida: ${upd}`);
  }
  const pub = fmValue(fm, 'pubDate');
  if (!isDate(pub)) err(rel, `pubDate inválida: ${pub}`);
  const desc = fmValue(fm, 'description') ?? '';
  if (desc.length > 170) warn(rel, `description com ${desc.length} caracteres (>170)`);

  // blocos que o layout já gera
  if (/```json[\s\S]*?"@context"/.test(body)) err(rel, 'JSON-LD no corpo (o layout já gera o schema)');
  if (isFila && /^## (Fontes|Perguntas frequentes)\s*$/m.test(body)) err(rel, 'seção "Fontes"/"Perguntas frequentes" no corpo (use sources/faq no frontmatter)');
  if (isFila && /^# [^#]/m.test(body.replace(/```[\s\S]*?```/g, ''))) err(rel, 'H1 no corpo (o layout renderiza o título)');

  // links (corpo + frontmatter/FAQ)
  const text = fm + '\n' + body;
  for (const m of text.matchAll(/\]\((\/[^)\s]*)\)/g)) {
    const [path, hash] = m[1].split('#');
    const clean = path.split('?')[0];
    if (/\.\w{2,5}$/.test(clean)) {
      if (!existsSync(join(ROOT, 'public', clean))) err(rel, `arquivo estático inexistente: ${clean}`);
      continue;
    }
    const norm = clean.endsWith('/') ? clean : clean + '/';
    if (!routes.has(norm)) err(rel, `link interno quebrado: ${m[1]}`);
    else if (hash && canon.has(norm)) {
      // âncora: só confere para páginas da fila
      const target = parse(join(ROOT, canon.get(norm))).body;
      const slugs = [...target.matchAll(/^#{2,4}\s+(.+)$/gm)].map((h) => h[1]);
      if (!slugs.length) warn(rel, `âncora ${m[1]} não verificável`);
    }
  }
  for (const m of text.matchAll(/https?:\/\/[^\s)"'<>\]]+/g)) {
    const u = m[0].replace(/[.,;:]+$/, '');
    if (u.startsWith('http://') && !/localhost|127\.0\.0\.1/.test(u)) warn(rel, `link http (não https): ${u}`);
    if (!externalUrls.has(u)) externalUrls.set(u, rel);
  }
}

// --- 3. Links externos (opcional) -----------------------------------------
if (EXTERNAL) {
  const proxy = !!process.env.HTTPS_PROXY;
  let checked = 0;
  for (const [url, rel] of externalUrls) {
    if (/localhost|127\.0\.0\.1|example\.com/.test(url)) continue;
    try {
      let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (res.status === 405 || res.status === 403) res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
      checked++;
      if (res.status >= 400) (res.status === 403 || res.status === 429 ? warn : err)(rel, `externo ${res.status}: ${url}`);
    } catch (e) {
      warn(rel, `externo não verificado (${e.cause?.code ?? e.name}): ${url}`);
    }
  }
  console.log(`Externos verificados: ${checked}/${externalUrls.size}${proxy ? ' (via proxy)' : ''}`);
}

console.log(`Páginas/rotas conhecidas: ${routes.size} · arquivos checados: ${files.length}`);
for (const w of warnings) console.log(`AVISO  ${w}`);
for (const e of errors) console.log(`ERRO   ${e}`);
console.log(errors.length ? `\n✗ ${errors.length} erro(s)` : '\n✓ conteúdo válido');
process.exit(errors.length ? 1 : 0);
