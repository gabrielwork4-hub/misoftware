// @ts-check
/**
 * Validação automatizada de status HTTP (ARQUITETURA §Fase 0).
 * Lê o CSV canônico e verifica se cada URL responde com o status esperado.
 *
 * Uso:
 *   node scripts/check-status.mjs --base http://localhost:8788
 *   node scripts/check-status.mjs --base https://www.misoftware.com.br
 *
 * Requer o middleware ativo (ex.: `npm run preview:edge`).
 * Sai com código 1 se qualquer status divergir do CSV.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSV_PATH = resolve(__dirname, '..', 'seo/misoftware-redirect-map.csv');

const baseArgIdx = process.argv.indexOf('--base');
const BASE = baseArgIdx !== -1 ? process.argv[baseArgIdx + 1] : 'http://localhost:8788';

function parseCsv(text) {
  const rows = [];
  for (const line of text.split(/\r?\n/).filter(Boolean)) {
    const fields = [];
    let cur = '';
    let q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (q && line[i + 1] === '"') { cur += '"'; i++; } else q = !q;
      } else if (ch === ',' && !q) { fields.push(cur); cur = ''; }
      else cur += ch;
    }
    fields.push(cur);
    rows.push(fields);
  }
  return rows;
}

function toPath(rawUrl) {
  try { return new URL(rawUrl).pathname || '/'; }
  catch { return rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`; }
}

const rows = parseCsv(readFileSync(CSV_PATH, 'utf8'));
rows.shift(); // header

let pass = 0;
let fail = 0;
let skip = 0;
const failures = [];

console.log(`Validando status HTTP contra: ${BASE}\n`);

for (const [urlOrigem, acao] of rows) {
  const action = (acao || '').trim().toUpperCase();
  const expected = Number(action);
  const path = toPath(urlOrigem);

  // Canonicalização de raiz (301 em "/") depende de host/protocolo real;
  // não é reproduzível contra um base local. Pula com aviso.
  if (action === '301' && path === '/') {
    skip++;
    continue;
  }

  const target = new URL(path, BASE).toString();
  let status;
  try {
    const res = await fetch(target, { redirect: 'manual' });
    status = res.status;
  } catch (err) {
    fail++;
    failures.push(`  ✗ ${path} → ERRO de rede: ${err.message}`);
    continue;
  }

  const ok =
    action === '200' ? status === 200 :
    action === '301' ? status === 301 || status === 308 :
    action === '410' ? status === 410 :
    status === expected;

  if (ok) {
    pass++;
  } else {
    fail++;
    failures.push(`  ✗ ${path} → esperado ${action}, recebeu ${status}`);
  }
}

console.log(`Resultado: ${pass} ok, ${fail} falhas, ${skip} pulados (canonicalização de raiz)`);
if (failures.length) {
  console.log('\nFalhas:');
  console.log(failures.join('\n'));
  process.exit(1);
}
console.log('\n✓ Todos os status conferem com o mapa de redirects.');
