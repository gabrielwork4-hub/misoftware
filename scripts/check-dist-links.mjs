// @ts-check
/**
 * Confere links internos no HTML gerado (dist/). Rodar depois de `npm run build`.
 * Uso: node scripts/check-dist-links.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
const htmls = walk(DIST);
const pages = new Set(htmls.map((f) => {
  const r = '/' + relative(DIST, f);
  return r.endsWith('index.html') ? r.slice(0, -'index.html'.length) : r;
}));
const broken = new Map();
for (const f of htmls) {
  for (const [, u] of readFileSync(f, 'utf8').matchAll(/href="(\/[^"#?]*)/g)) {
    if (u.startsWith('//') || u.startsWith('/pagefind') || u.startsWith('/_astro')) continue;
    const ok = /\.\w{2,5}$/.test(u) ? existsSync(join(DIST, u)) : pages.has(u.endsWith('/') ? u : u + '/');
    if (!ok) broken.set(u, (broken.get(u) ?? 0) + 1);
  }
}
for (const [u, n] of broken) console.log(`QUEBRADO ${u} (${n} páginas)`);
console.log(broken.size ? `\n✗ ${broken.size} link(s) interno(s) quebrado(s)` : `✓ ${htmls.length} páginas, nenhum link interno quebrado`);
process.exit(broken.size ? 1 : 0);
