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

export const collections = { autores, artigos, tutoriais, ferramentas };
