import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleções de conteúdo — espelham os modelos do CMS (ARQUITETURA §4).
 * No MVP o conteúdo vive em Markdown; a migração para Directus preserva
 * este mesmo shape de dados via loader.
 */

const autores = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/autores' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Cargo/especialidade — reforça E-E-A-T (ARQUITETURA §4/§9) */
      role: z.string(),
      /** Person = pessoa física; Organization = byline coletiva (ex.: Redação) */
      entity: z.enum(['Person', 'Organization']).default('Person'),
      /** Bio curta para cards e cabeçalho; a bio longa vai no corpo do arquivo */
      bio: z.string().optional(),
      avatar: image().optional(),
      /** Perfis externos para consolidação de entidade (schema `sameAs`) */
      sameAs: z.array(z.string().url()).default([]),
      /** Organização/afiliação exibida no perfil */
      org: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference('autores'),
      category: z.enum([
        'IA & Modelos',
        'Automação',
        'Desenvolvimento',
        'Ferramentas',
        'Engenharia de Prompt',
        'Produtividade',
        'Reviews & Hardware',
      ]),
      silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      readingTime: z.number().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

const tutoriais = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutoriais' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference('autores'),
      difficulty: z.enum(['Iniciante', 'Intermediário', 'Avançado']),
      prerequisites: z.array(z.string()).default([]),
      silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/**
 * Comparativos — decisão entre entidades (Cursor vs Windsurf, n8n vs Make…).
 * Mesmo shape editorial dos artigos; a intenção é comercial/decisão.
 */
const comparativos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparativos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference('autores'),
      category: z.string(),
      silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

/** Estudos de caso — prova e resultado de uma aplicação real. */
const estudosDeCaso = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/estudos-de-caso' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference('autores'),
      category: z.string(),
      silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

/**
 * Hubs temáticos — páginas de cluster em `/[silo]/[cluster]/`. Cada hub é a
 * entrada de uma trilha e lista os spokes do próprio cluster (ARQUITETURA §5).
 * `silo` + `clusterSlug` formam a URL; `cluster` é o rótulo humano que casa
 * com a `tag` dos spokes.
 */
const hubs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hubs' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: reference('autores'),
      silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
      cluster: z.string(),
      clusterSlug: z.string(),
      draft: z.boolean().default(false),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

const ferramentas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ferramentas' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      vendor: z.string().optional(),
      category: z.string(),
      pricing: z.string(),
      platforms: z.array(z.string()).default([]),
      rating: z.number().min(0).max(10).optional(),
      url: z.string().url().optional(),
      logo: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

// As chaves são os nomes usados em getCollection(...) e, no pipeline de
// promoção, também o nome do diretório em src/content/. Por isso 'estudos-de-caso'
// usa a forma com hífen (igual à pasta), não camelCase.
export const collections = {
  autores,
  artigos,
  tutoriais,
  comparativos,
  'estudos-de-caso': estudosDeCaso,
  hubs,
  ferramentas,
};
