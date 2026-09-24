// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://www.misoftware.com.br';

/**
 * Prioridade e frequência de rastreio por tipo de página.
 * Home > pilares > hubs > conteúdo folha > listagens > páginas institucionais.
 */
function ranking(pathname) {
  if (pathname === '/') return { priority: 1.0, changefreq: 'daily' };

  const segments = pathname.replace(/^\/|\/$/g, '').split('/');
  const [first] = segments;
  const depth = segments.length;
  const silos = ['ia', 'automacao', 'desenvolvimento', 'ferramentas'];

  // Pilares de silo: /ia/, /automacao/, ...
  if (depth === 1 && silos.includes(first)) return { priority: 0.9, changefreq: 'weekly' };
  // Hubs dentro de um silo: /ia/rag/, /ferramentas/n8n/, ...
  if (depth === 2 && silos.includes(first)) return { priority: 0.8, changefreq: 'weekly' };

  // Conteúdo folha de alto valor
  if (first === 'comparativos' || first === 'tutoriais' || first === 'estudos-de-caso') {
    return depth === 1 ? { priority: 0.6, changefreq: 'weekly' } : { priority: 0.8, changefreq: 'monthly' };
  }
  // Artigos e diretórios de ferramentas/autores
  if (first === 'artigos' || first === 'ferramentas' || first === 'autores') {
    return depth === 1 ? { priority: 0.6, changefreq: 'weekly' } : { priority: 0.7, changefreq: 'monthly' };
  }
  // Páginas institucionais: sobre, contato, privacidade, política editorial
  return { priority: 0.3, changefreq: 'yearly' };
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Fora do índice: utilitários que não são páginas de conteúdo.
      filter: (page) => !/\/(404|busca|search)\/?$/.test(page),
      serialize(item) {
        const { pathname } = new URL(item.url);
        const { priority, changefreq } = ranking(pathname);
        item.priority = priority;
        item.changefreq = changefreq;
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
