import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, SILOS } from '@/consts';

export const prerender = true;

/** Rótulo legível por tipo de conteúdo. */
const KIND_LABEL: Record<string, string> = {
  pilar: 'Pilar',
  hub: 'Hub',
  comparativo: 'Comparativo',
  tutorial: 'Tutorial',
  artigo: 'Guia',
  'estudo-de-caso': 'Estudo de caso',
  ferramenta: 'Ferramenta',
};

/** Ordem de apresentação dentro de cada silo (do mais estrutural ao mais específico). */
const KIND_ORDER = ['pilar', 'hub', 'comparativo', 'tutorial', 'artigo', 'estudo-de-caso', 'ferramenta'];

const abs = (path: string) => new URL(path, SITE.url).href;

export const GET: APIRoute = async () => {
  const pecas = (await getCollection('fila', ({ data }) => data.draft === false)).sort(
    (a, b) => KIND_ORDER.indexOf(a.data.kind) - KIND_ORDER.indexOf(b.data.kind) || a.data.title.localeCompare(b.data.title, 'pt-BR'),
  );

  const linha = (title: string, path: string, note: string, kind?: string) => {
    const tag = kind ? `[${KIND_LABEL[kind] ?? kind}] ` : '';
    return `- [${title}](${abs(path)}): ${tag}${note}`;
  };

  const secoes = SILOS.map(({ slug, label, description }) => {
    const itens = pecas.filter((p) => p.data.silo === slug);
    const linhas = itens.map((p) => linha(p.data.title, p.data.canonicalPath, p.data.description, p.data.kind));
    return `## ${label}\n\n${description}\n\n${linhas.join('\n')}`;
  });

  const institucional = [
    linha('Sobre', '/sobre/', 'Quem publica, metodologia e critérios editoriais.'),
    linha('Política editorial', '/politica-editorial/', 'Como o conteúdo é produzido, verificado e atualizado.'),
    linha('Contato', '/contato/', 'Fale com a redação.'),
  ].join('\n');

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.tagline} ${SITE.title}. Conteúdo em português (pt-BR), organizado em quatro silos: IA aplicada, automação, desenvolvimento e ferramentas. Cada peça cita fontes primárias e prioriza clareza verificável — pensado para ser lido por pessoas e por motores de resposta.

${secoes.join('\n\n')}

## Institucional

${institucional}

## Recursos

- [Sitemap](${abs('/sitemap-index.xml')}): índice completo de URLs indexáveis.
- [Feed RSS](${abs('/rss.xml')}): últimas publicações.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
