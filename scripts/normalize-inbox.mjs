/**
 * normalize-inbox.mjs — normalizador da fila editorial (inbox/) para o CMS.
 *
 * Fonte de verdade da classificação: seo/briefs/slug-registry.md.
 * O join entre cada arquivo de inbox/ e o registro é feito pela `primaryKeyword`.
 *
 * Uso:
 *   node scripts/normalize-inbox.mjs            # dry-run: só relatório (padrão)
 *   node scripts/normalize-inbox.mjs --apply    # escreve conteúdos aprovados
 *   node scripts/normalize-inbox.mjs --apply-all # escreve os 60 como rascunhos
 *
 * Regras (ARQUITETURA §4/§8/§10):
 * - `--apply` migra apenas conteúdos com `status: approved`.
 * - `--apply-all` migra todos como `draft: true`, sem publicação/indexação.
 * - O 1º segmento da slug canônica define o tipo/rota.
 * - `sources` (lista de URLs) vira lista de { label, url }.
 * - Remove o H1 do corpo (o template já renderiza o título).
 * - `pubDate` = data da migração (aprovação).
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INBOX = join(ROOT, 'inbox');
const REGISTRY = join(ROOT, 'seo', 'briefs', 'slug-registry.md');
const APPLY = process.argv.includes('--apply');
const APPLY_ALL = process.argv.includes('--apply-all');

const norm = (s) =>
  (s ?? '')
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/["']/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** Parser mínimo do frontmatter YAML usado nos arquivos de inbox/. */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const [, fm, body] = m;
  const data = {};
  let key = null;
  for (const line of fm.split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (kv) {
      key = kv[1];
      const val = kv[2].trim();
      data[key] = val === '' ? [] : val.replace(/^["']|["']$/g, '');
    } else {
      const item = line.match(/^\s*-\s*(.+)$/);
      if (item && key) {
        if (!Array.isArray(data[key])) data[key] = [];
        data[key].push(item[1].trim().replace(/^["']|["']$/g, ''));
      }
    }
  }
  return { data, body };
}

/** Lê a tabela do slug-registry.md e devolve linhas por keyword normalizada. */
function parseRegistry() {
  const raw = readFileSync(REGISTRY, 'utf8');
  const rows = new Map();
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\|\s*`([^`]+)`\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|\s*([^|]+)\|/);
    if (!m) continue;
    const [, slug, tipo, cluster, keyword, status] = m.map((x) => x && x.trim());
    rows.set(norm(keyword), { slug, tipo, cluster, keyword, status });
  }
  return rows;
}

/** Deriva o bucket/rota a partir do Tipo do registro (e da slug). */
function bucketOf(tipo, slug) {
  const t = norm(tipo);
  if (t === 'pilar' || t.startsWith('pilar')) return 'pilar';
  if (t === 'hub') return 'hub';
  if (t === 'tutorial') return 'tutorial';
  if (t === 'comparativo') return 'comparativo';
  if (t === 'case') return 'estudo-de-caso';
  if (t === 'review') return 'ferramenta';
  // artigo, guia, metodologia, artigo existente, comparativo conceitual…
  if (slug.startsWith('/artigos/')) return 'artigo';
  if (slug.startsWith('/tutoriais/')) return 'tutorial';
  if (slug.startsWith('/comparativos/')) return 'comparativo';
  if (slug.startsWith('/estudos-de-caso/')) return 'estudo-de-caso';
  return 'artigo';
}

function yamlQuote(value) {
  return JSON.stringify(String(value ?? ''));
}

function slugPath(slug) {
  return slug.replace(/^\/+|\/+$/g, '');
}

function siloFromSlug(slug) {
  const segment = slugPath(slug).split('/')[0];
  return ['ia', 'automacao', 'desenvolvimento', 'ferramentas'].includes(segment)
    ? segment
    : 'desenvolvimento';
}

function categoryFor(bucket, silo) {
  if (silo === 'ia') return 'IA & Modelos';
  if (silo === 'automacao') return 'Automação';
  if (silo === 'ferramentas') return 'Ferramentas';
  if (bucket === 'comparativo' || bucket === 'ferramenta') return 'Ferramentas';
  return 'Desenvolvimento';
}

function outputPath(row) {
  const safe = slugPath(row.slug).replace(/\//g, '__');
  return join(ROOT, 'src', 'content', 'fila', `${safe}.md`);
}

function renderDraft(row, source) {
  const { data, body } = parseFrontmatter(source);
  const title = data.title || row.keyword;
  const description = data.description || `${title} — conteúdo editorial misoftware.`;
  const pubDate = data.pubDate || new Date().toISOString().slice(0, 10);
  const sources = Array.isArray(data.sources) ? data.sources : [];
  const sourceYaml = sources.length
    ? `sources:\n${sources.map((url) => `  - ${yamlQuote(url)}`).join('\n')}`
    : 'sources: []';
  const bodyWithoutH1 = body.replace(/^\s*#\s+[^\n]+\n+/, '').trim();
  return `---\n` +
    `title: ${yamlQuote(title)}\n` +
    `description: ${yamlQuote(description)}\n` +
    `pubDate: ${yamlQuote(pubDate)}\n` +
    `author: "redacao"\n` +
    `category: ${yamlQuote(categoryFor(row.bucket, siloFromSlug(row.slug)))}\n` +
    `silo: ${siloFromSlug(row.slug)}\n` +
    `kind: ${yamlQuote(row.bucket)}\n` +
    `canonicalPath: ${yamlQuote(row.slug)}\n` +
    `primaryKeyword: ${yamlQuote(row.keyword)}\n` +
    `draft: true\n` +
    `${sourceYaml}\n` +
    `---\n\n` +
    `> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.\n\n` +
    bodyWithoutH1 + '\n';
}

const registry = parseRegistry();
const files = readdirSync(INBOX).filter((f) => /^\d+.*\.md$/.test(f)).sort();

const buckets = {};
const unmatched = [];
const rows = [];

for (const file of files) {
  const raw = readFileSync(join(INBOX, file), 'utf8');
  const { data } = parseFrontmatter(raw);
  const reg = registry.get(norm(data.primaryKeyword));
  if (!reg) {
    unmatched.push({ file, primaryKeyword: data.primaryKeyword ?? '(vazio)' });
    continue;
  }
  const bucket = bucketOf(reg.tipo, reg.slug);
  buckets[bucket] = (buckets[bucket] ?? 0) + 1;
  rows.push({
    file,
    bucket,
    slug: reg.slug,
    status: data.status ?? '?',
    keyword: reg.keyword,
  });
}

// Relatório
console.log(`\n=== normalize-inbox (dry-run) ===`);
console.log(`Arquivos em inbox/: ${files.length} | linhas no registry: ${registry.size}\n`);

console.log(`Distribuição por tipo (via registry):`);
for (const [b, n] of Object.entries(buckets).sort((a, b2) => b2[1] - a[1])) {
  console.log(`  ${String(n).padStart(3)}  ${b}`);
}

const approved = rows.filter((r) => norm(r.status) === 'approved');
console.log(`\nStatus: ${rows.length} classificados | ${approved.length} approved (migráveis agora)`);

if (unmatched.length) {
  console.log(`\n⚠️  Sem correspondência no registry (${unmatched.length}):`);
  for (const u of unmatched) console.log(`   ${u.file}  ← primaryKeyword: "${u.primaryKeyword}"`);
}

console.log(`\nMapa arquivo → tipo → slug canônica:`);
for (const r of rows) {
  console.log(`  ${r.file.padEnd(50)} ${r.bucket.padEnd(14)} ${r.slug}`);
}

if (APPLY || APPLY_ALL) {
  const eligible = APPLY_ALL ? rows : approved;
  const outDir = join(ROOT, 'src', 'content', 'fila');
  mkdirSync(outDir, { recursive: true });
  for (const row of eligible) {
    const source = readFileSync(join(INBOX, row.file), 'utf8');
    writeFileSync(outputPath(row), renderDraft(row, source), 'utf8');
  }
  console.log(`\n✓ ${eligible.length} rascunhos gerados em src/content/fila/`);
}
