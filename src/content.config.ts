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
      coverImage: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const fila = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/fila' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: reference('autores'),
    category: z.string(),
    silo: z.enum(['ia', 'automacao', 'desenvolvimento', 'ferramentas']),
    kind: z.enum(['artigo', 'hub', 'tutorial', 'comparativo', 'estudo-de-caso', 'ferramenta', 'pilar']),
    canonicalPath: z.string(),
    primaryKeyword: z.string(),
    coverImage: z.string().optional(),
    sources: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { autores, ferramentas, fila };
