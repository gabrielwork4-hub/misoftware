import { getCollection, type CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'fila'>;

/**
 * Tipos de conteúdo "de leitura" que aparecem em listagens editoriais.
 * Hubs e pilares têm páginas de silo próprias; `ferramenta` vive na coleção
 * `ferramentas`. A fonte única de verdade do conteúdo é a coleção `fila`.
 */
const READING_KINDS = new Set(['artigo', 'tutorial', 'comparativo', 'estudo-de-caso']);

/** Peças editoriais publicadas (não-draft), mais recentes primeiro. */
export async function getPublishedArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection(
    'fila',
    ({ data }) => !data.draft && READING_KINDS.has(data.kind),
  );
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** URL canônica da peça — a rota real, não o id derivado do nome do arquivo. */
export function articleHref(entry: ArticleEntry): string {
  return entry.data.canonicalPath;
}
