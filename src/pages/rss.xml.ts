import rss from '@astrojs/rss';
import { getEntries } from 'astro:content';
import { getPublishedArticles, articleHref } from '@/lib/articles';
import { SITE } from '@/consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getPublishedArticles();

  // Resolve as referências de autor em lote para expor o nome no feed.
  const authors = await getEntries(articles.map((a) => a.data.author));
  const authorName = new Map(authors.map((a) => [a.id, a.data.name]));

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      author: authorName.get(entry.data.author.id) ?? 'Redação misoftware',
      categories: [entry.data.category],
      link: articleHref(entry),
    })),
    customData: `<language>${SITE.locale}</language>`,
  });
}
