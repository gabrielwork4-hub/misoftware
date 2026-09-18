/**
 * Constantes globais do site — fonte única de verdade para metadados,
 * navegação e taxonomia de silos (ver ARQUITETURA_MISOFTWARE.md §5).
 */

export const SITE = {
  name: 'misoftware',
  url: 'https://www.misoftware.com.br',
  title: 'misoftware — Engenharia de Software, Modelos & Prática Técnica',
  description:
    'Publicação editorial de tecnologia aplicada: IA, automação, desenvolvimento e ferramentas para trabalho técnico. Conteúdo útil, verificável e organizado por tópicos.',
  tagline: 'Ideias. Ferramentas. Resultados.',
  locale: 'pt-BR',
  author: 'Redação misoftware',
  defaultOgImage: '/og-default.png',
  publisher: 'IdealTrends',
  email: 'contato@misoftware.com.br',
} as const;

/** Navegação primária do cabeçalho */
export const NAV: { label: string; href: string }[] = [
  { label: 'Início', href: '/' },
  { label: 'IA', href: '/ia/' },
  { label: 'Automação', href: '/automacao/' },
  { label: 'Desenvolvimento', href: '/desenvolvimento/' },
  { label: 'Ferramentas', href: '/ferramentas/' },
];

/** Silos editoriais (páginas-pilar) */
export const SILOS = [
  {
    slug: 'ia',
    label: 'IA aplicada',
    description:
      'Agentes, modelos locais, RAG, engenharia de prompt, governança e avaliação.',
  },
  {
    slug: 'automacao',
    label: 'Automação',
    description:
      'n8n, webhooks, integrações, processos internos e automação assistida por IA.',
  },
  {
    slug: 'desenvolvimento',
    label: 'Desenvolvimento',
    description:
      'Arquitetura de software, front-end, back-end, DevOps, qualidade e observabilidade.',
  },
  {
    slug: 'ferramentas',
    label: 'Ferramentas',
    description:
      'IA generativa, desenvolvimento, produtividade, automação e pesquisa.',
  },
] as const;

export const SOCIAL = {
  twitter: 'https://x.com/misoftware',
  github: 'https://github.com/misoftware',
  rss: '/rss.xml',
} as const;
