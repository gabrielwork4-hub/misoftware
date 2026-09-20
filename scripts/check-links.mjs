// @ts-check
/**
 * Verifica os links internos do site JÁ CONSTRUÍDO (dist/): todo href de página
 * interno deve ter uma página correspondente. Roda depois do build.
 *
 * O plugin rehype-internal-links já rebaixa para texto os links cujo destino
 * não existe, então em condições normais isto deve reportar zero. Serve de rede
 * de segurança: pega link quebrado em .astro (fora do Markdown) e regressões.
 *
 * Uso: node scripts/check-links.mjs        (após npm run build)
 * Saída: 0 se não houver link quebrado; 1 caso contrário.
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');

if (!existsSync(DIST)) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}

/** Lista recursiva de arquivos .html em dist/. */
function htmls(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmls(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

/** Uma página interna existe se há /caminho/index.html ou /caminho.html. */
function existePagina(url) {
  const semBarra = url.replace(/\/$/, '');
  return (
    existsSync(join(DIST, url, 'index.html')) ||
    (existsSync(join(DIST, `${semBarra}.html`)) && statSync(join(DIST, `${semBarra}.html`)).isFile())
  );
}

const IGNORAR_EXT = /\.(css|js|png|jpe?g|svg|xml|json|webmanifest|ico|txt|pdf|woff2?)$/i;

const quebrados = new Map();
for (const arquivo of htmls(DIST)) {
  const html = readFileSync(arquivo, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const url = m[1];
    if (url.startsWith('//') || IGNORAR_EXT.test(url)) continue;
    if (!url.endsWith('/')) continue; // só páginas (trailingSlash: always)
    if (!existePagina(url)) {
      const origem = arquivo.replace(DIST, '').replace(/index\.html$/, '');
      if (!quebrados.has(url)) quebrados.set(url, new Set());
      quebrados.get(url).add(origem);
    }
  }
}

if (quebrados.size === 0) {
  console.log('✓ nenhum link interno quebrado em dist/');
  process.exit(0);
}

console.error(`✗ ${quebrados.size} link(s) interno(s) sem página:`);
for (const [url, origens] of [...quebrados].sort()) {
  console.error(`  ${url}  ← ${origens.size} página(s), ex: ${[...origens][0]}`);
}
process.exit(1);
