// @ts-check
/**
 * Conjunto de caminhos internos que EXISTEM no site, derivado de src/content/
 * e das rotas fixas. É a fonte de verdade tanto para o plugin que rebaixa links
 * internos ainda-sem-destino (rehype-internal-links) quanto para o
 * scripts/check-links.mjs.
 *
 * Assim, um hub pode linkar para os spokes do cluster desde já: o link só fica
 * ativo quando o spoke é publicado, e vira texto simples enquanto não existe —
 * sem link morto no site e sem editar o hub depois.
 */

import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join, basename } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT = resolve(ROOT, 'src/content');

/** Rotas que sempre existem (páginas fixas + pilares dos silos). */
const ROTAS_FIXAS = [
  '/',
  '/artigos/',
  '/tutoriais/',
  '/comparativos/',
  '/estudos-de-caso/',
  '/ferramentas/',
  '/autores/',
  '/sobre/',
  '/contato/',
  '/privacidade/',
  '/politica-editorial/',
  // pilares dos silos (rota [silo]/index + ferramentas/index existem sempre)
  '/ia/',
  '/automacao/',
  '/desenvolvimento/',
];

/** Coleção → função que transforma o basename (sem .md) em caminho de URL. */
const COLECAO_PARA_ROTA = {
  artigos: (b) => `/artigos/${b}/`,
  tutoriais: (b) => `/tutoriais/${b}/`,
  comparativos: (b) => `/comparativos/${b}/`,
  'estudos-de-caso': (b) => `/estudos-de-caso/${b}/`,
  ferramentas: (b) => `/ferramentas/${b}/`,
  autores: (b) => `/autores/${b}/`,
  // hub: arquivo "<silo>-<clusterSlug>" → /<silo>/<clusterSlug>/
  hubs: (b) => {
    const i = b.indexOf('-');
    return i < 0 ? null : `/${b.slice(0, i)}/${b.slice(i + 1)}/`;
  },
  // pilar: arquivo "<silo>" → /<silo>/ (já coberto pelas rotas fixas)
  pilares: (b) => `/${b}/`,
};

function arquivosMd(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

/** Conjunto de todos os caminhos internos válidos (com barra final). */
export function publishedPaths() {
  const set = new Set(ROTAS_FIXAS);
  for (const [colecao, paraRota] of Object.entries(COLECAO_PARA_ROTA)) {
    for (const arquivo of arquivosMd(join(CONTENT, colecao))) {
      const base = basename(arquivo).replace(/\.mdx?$/, '');
      const rota = paraRota(base);
      if (rota) set.add(rota);
    }
  }
  return set;
}
