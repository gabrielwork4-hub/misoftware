---
title: "Astro para site editorial: tutorial completo"
description: "Construa um site editorial com Astro, content collections, layouts, SEO, sitemap, RSS, busca e deploy reprodutível."
pubDate: "2026-09-20"
author: "gabriel-barboza"
difficulty: "Intermediário"
silo: "desenvolvimento"
tags:
  - "Front-end"
draft: false
---
Um site editorial tem exigências específicas: conteúdo tipado e consistente, páginas rápidas de servir e indexar, metadata correta em cada URL, sitemap, RSS e um fluxo de publicação que não quebre a cada artigo novo. Astro atende bem esse cenário porque gera HTML estático por padrão e só adiciona JavaScript onde há interação real. Este tutorial percorre a montagem de ponta a ponta.

## Antes de começar

Você precisa de Node instalado e familiaridade básica com Markdown e linha de comando. Crie o projeto com o inicializador do Astro e escolha um template mínimo — vamos adicionar as peças conscientemente, não herdar um scaffold cheio de coisas que não entendemos.

## Passo 1 — Modele o conteúdo com collections

O coração de um site editorial é o conteúdo tipado. Defina content collections para cada tipo — artigos, autores, tutoriais, ferramentas — com um schema que valida o frontmatter no build. Assim, um artigo sem título, sem data ou com categoria inválida quebra o build, e não a página em produção. Trate o schema como o contrato do conteúdo: ele documenta o que todo artigo precisa ter e impede que dado malformado chegue ao ar.

## Passo 2 — Separe layouts de componentes

Crie um layout base (o HTML, o head, o header e o footer) e layouts específicos por tipo de página. Componentes — card de artigo, autor, navegação — ficam pequenos e reutilizáveis. A regra: o layout decide a estrutura da página; o componente cuida de um pedaço. Isso mantém a metadata (canonical, Open Graph, breadcrumbs) num lugar só, aplicada a todas as páginas sem repetição.

## Passo 3 — Resolva o SEO técnico no build

Um site editorial vive de ser encontrado. Gere, no build: title e description únicos por página, canonical absoluto, tags Open Graph e Twitter, JSON-LD (Article para os textos, BreadcrumbList para a navegação), sitemap e RSS. Nada disso deve ser manual por página — derive tudo do frontmatter e do layout, para que uma página nova já nasça correta.

## Passo 4 — Escolha a renderização por página

Aqui está a decisão que mais impacta performance. Conteúdo que muda pouco (artigos, hubs) deve ser estático, gerado no build. Interação pontual (uma busca, um menu) entra como ilha, hidratada só quando necessária, com as diretivas `client:*`. Evite transformar o site inteiro em aplicação — para conteúdo, o estático ganha em velocidade e indexação.

## Passo 5 — Ligue a busca

Para busca sem servidor, uma ferramenta como o Pagefind indexa o HTML gerado no fim do build e serve resultados no cliente. Rode-a como passo de pós-build. Comece com a busca funcionando de verdade antes de estilizar o atalho de teclado — o inverso deixa uma interface bonita que não busca nada.

## Passo 6 — Deploy reprodutível

O build precisa rodar igual na sua máquina e no CI. Fixe as versões, mantenha os passos (gerar redirecionamentos, build, pós-build de busca) em scripts versionados e faça o deploy a partir de um ambiente limpo. Um build que só funciona na sua máquina é uma dívida esperando o pior momento.

## Critérios de sucesso

O site gera todas as rotas esperadas, com metadata e sitemap sem erros; os componentes interativos hidratam somente quando necessários; e o build é reproduzível num ambiente limpo. Quando o conteúdo deixar de caber em Markdown, o mesmo shape de dados migra para um CMS headless sem reescrever as páginas.

## Próximo passo

Para a decisão de renderização em profundidade, veja [SSG, SSR e ilhas no Astro](/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/). Para o contexto de arquitetura, o guia de [CMS headless para site editorial](/artigos/arquitetura-cms-headless-para-site-editorial/) e o [hub de front-end](/desenvolvimento/frontend/).
