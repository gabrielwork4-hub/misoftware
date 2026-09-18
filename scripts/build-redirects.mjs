// @ts-check
/**
 * Gera functions/redirects.generated.json a partir do CSV canônico
 * (seo/misoftware-redirect-map.csv) — FONTE ÚNICA DE VERDADE.
 *
 * NUNCA edite o JSON à mão. Edite o CSV e rode: npm run build:redirects
 *
 * Regras (ver ARQUITETURA §8 e seo/misoftware-legacy-url-audit.md):
 *  - Canonicalização de host/protocolo é feita genericamente no middleware
 *    (qualquer host != www ou protocolo != https → 301 para o canônico).
 *    Os 3 registros "301" do CSV são exatamente esse caso e ficam cobertos.
 *  - Registros "410" viram um conjunto de paths que respondem 410 Gone.
 *  - Paths legados são CASE-SENSITIVE (ex.: /Home/Post/OmniLite).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CSV_PATH = resolve(ROOT, 'seo/misoftware-redirect-map.csv');
const OUT_PATH = resolve(ROOT, 'functions/redirects.generated.json');

const CANONICAL_HOST = 'www.misoftware.com.br';

/** Parser CSV mínimo com suporte a campos entre aspas. */
function parseCsv(text) {
  const rows = [];
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  for (const line of lines) {
    const fields = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        fields.push(cur);
        cur = '';
      } else {
        cur += ch;
      }
    }
    fields.push(cur);
    rows.push(fields);
  }
  return rows;
}

/** Extrai o pathname de uma URL legada, preservando case. */
function toPath(rawUrl) {
  try {
    const u = new URL(rawUrl);
    return u.pathname || '/';
  } catch {
    // Fallback: string já é um path.
    return rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
  }
}

const csv = readFileSync(CSV_PATH, 'utf8');
const rows = parseCsv(csv);
const header = rows.shift();
if (!header || header[0] !== 'url_origem') {
  throw new Error(`Cabeçalho inesperado no CSV: ${header?.join(',')}`);
}

/** @type {Set<string>} */
const goneSet = new Set();
/** @type {{from: string, to: string}[]} */
const redirects301 = [];

for (const [urlOrigem, acao, destino] of rows) {
  const action = (acao || '').trim().toUpperCase();
  if (action === '410') {
    const p = toPath(urlOrigem);
    if (p !== '/') goneSet.add(p);
  } else if (action === '301') {
    // Registros 301 do CSV são canonicalização de raiz — já cobertos pela
    // regra genérica de host/protocolo. Guardamos apenas os que têm um path
    // específico (destino != raiz canônica), para redirect explícito.
    const fromPath = toPath(urlOrigem);
    if (fromPath !== '/' && destino && destino !== `https://${CANONICAL_HOST}/`) {
      redirects301.push({ from: fromPath, to: destino });
    }
  }
  // "200" (URL canônica) é ignorado — é o passthrough natural.
}

const gone = [...goneSet].sort();

const output = {
  _generated: 'NÃO EDITE À MÃO. Gerado por scripts/build-redirects.mjs a partir de seo/misoftware-redirect-map.csv',
  canonicalHost: CANONICAL_HOST,
  canonicalProtocol: 'https',
  redirects: redirects301,
  gone,
};

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(`✓ redirects gerados: ${gone.length} paths 410, ${redirects301.length} redirects 301 explícitos`);
console.log(`  → ${OUT_PATH}`);
