// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeInternalLinks from './scripts/rehype-internal-links.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.misoftware.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Rebaixa para texto os links internos cujo destino ainda não foi publicado
  // (hub → spoke ainda na fila). Reativa sozinho quando o spoke entra.
  markdown: {
    rehypePlugins: [rehypeInternalLinks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
