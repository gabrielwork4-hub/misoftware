---
title: "SSG, SSR e ilhas no Astro: qual usar em cada página"
description: "Entenda geração estática, renderização no servidor e ilhas de interatividade no Astro, e como escolher por página."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "Front-end"
draft: false
sources:
  - label: "docs.astro.build"
    url: "https://docs.astro.build/en/concepts/islands/"
  - label: "docs.astro.build"
    url: "https://docs.astro.build/en/guides/on-demand-rendering/"
---
A decisão que mais afeta a performance de um site não é o framework, é como cada página é renderizada. O Astro dá três modos, e o segredo é não escolher um para o site inteiro, e sim o certo para cada página. Este guia explica os três e dá o critério de escolha.

## Os três modos

**SSG (geração estática):** a página é gerada uma vez, no build, e servida como HTML pronto. É o mais rápido para o usuário, o mais barato de hospedar e o mais fácil de indexar, porque o conteúdo já está no HTML. A contrapartida: o conteúdo só muda quando você faz um novo build.

**SSR (renderização sob demanda):** a página é gerada a cada requisição, no servidor. Faz sentido quando o conteúdo depende de quem pede (um painel logado) ou precisa estar sempre fresco (um preço que muda a cada minuto). O custo: um servidor rodando, latência por requisição e uma estratégia de cache para não gerar tudo toda vez.

**Ilhas (islands):** a página é estática, mas trechos específicos ganham interatividade no cliente — uma busca, um filtro, um carrossel. O Astro envia JavaScript só para essas ilhas, com diretivas `client:*` que controlam quando elas hidratam (`client:load`, `client:visible`, `client:idle`). O resto da página continua HTML puro.

## Como escolher, por tipo de página

| Página | Modo | Por quê |
|---|---|---|
| Artigo, hub, página institucional | SSG | Conteúdo estável; velocidade e SEO importam |
| Busca, filtro, comentários | SSG + ilha | Página estática com interação localizada |
| Painel logado, conteúdo por usuário | SSR | Depende da requisição |
| Preço/estoque em tempo real | SSR (com cache curto) | Precisa estar fresco |

Para um site editorial, a resposta é quase sempre SSG com ilhas pontuais. Escolher SSR ou uma SPA pesada para conteúdo que muda pouco é o erro que mais custa em performance e indexação.

## O critério em uma pergunta

Antes de decidir, pergunte: **este conteúdo é o mesmo para todo mundo e muda com que frequência?** Se é o mesmo e muda com o build, é SSG. Se é o mesmo mas tem um pedaço interativo, é SSG com ilha. Se depende de quem pede ou precisa estar sempre atual, é SSR. A pergunta evita a armadilha de tornar tudo dinâmico "por via das dúvidas" — o que paga caro em velocidade sem benefício real.

## Cuidado com hidratação desnecessária

Cada ilha é JavaScript enviado e executado no navegador. Use a diretiva certa: `client:visible` para o que está abaixo da dobra, `client:idle` para o que pode esperar, `client:load` só para o que precisa funcionar imediatamente. Um componente marcado como interativo que não precisava ser é peso morto no carregamento. Meça o tamanho do JavaScript enviado e questione cada ilha: ela justifica o custo?

## Um exemplo concreto: este site

Vale ver a decisão aplicada. Num site editorial como este, os artigos, hubs e páginas-pilar são gerados estaticamente (SSG): o conteúdo muda quando um texto novo é publicado, o que dispara um build — não a cada visita. A busca, que precisa reagir ao que o usuário digita, entra como uma ilha, hidratada só quando a pessoa a aciona. Não há nada que dependa de quem está pedindo, então não há SSR. O resultado é um site que serve HTML pronto em milissegundos, indexa bem e só carrega JavaScript no ponto onde há interação real. A mesma análise — o que é igual para todos, o que muda com o build, o que é interativo — leva à arquitetura certa em qualquer projeto de conteúdo.

## Próximo passo

Para montar o site na prática, siga o [tutorial de Astro para site editorial](/tutoriais/astro-para-site-editorial/). Para o contexto, veja o [hub de front-end](/desenvolvimento/frontend/).
