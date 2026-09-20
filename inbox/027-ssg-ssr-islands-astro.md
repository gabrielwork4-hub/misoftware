---
title: "SSG, SSR e Islands no Astro: como escolher"
description: "Compare SSG, SSR e Islands no Astro por performance, SEO, cache e interatividade para escolher a arquitetura certa."
slug: "/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/"
type: "guia"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "Front-end"
primaryKeyword: "SSG, SSR e Islands no Astro"
status: "needs-evidence"
sources:
  - "https://docs.astro.build/en/concepts/islands/"
  - "https://docs.astro.build/en/guides/server-side-rendering/"
---
# SSG, SSR e Islands no Astro: como escolher

SSG gera páginas no build; SSR gera respostas sob demanda; Islands adiciona interatividade apenas onde ela é necessária. A escolha deve acompanhar o comportamento da página.

## Site editorial
Artigos, hubs e páginas de ferramenta geralmente se beneficiam de geração estática, cache forte e build previsível.

## Quando usar SSR
Use SSR quando dados precisam ser personalizados ou consultados em tempo de requisição. Avalie custo operacional e cache antes de adotar.

## Islands
Use islands para busca, filtros ou interação localizada, sem transformar a página inteira em aplicação cliente.

> Revisão pendente: adicionar benchmark e exemplos de código.
