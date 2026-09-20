---
title: "Arquitetura de Software: decisões, padrões e trade-offs"
description: "Entenda decisões de arquitetura para CMS, dados, cache, publicação, observabilidade e evolução de produtos digitais."
slug: "/desenvolvimento/arquitetura/"
type: "hub"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "Arquitetura"
primaryKeyword: "arquitetura de software"
status: "needs-evidence"
sources:
  - "https://www.iso.org/standard/50508.html"
  - "https://c4model.com/"
---
# Arquitetura de Software: decisões, padrões e trade-offs

Arquitetura é o conjunto de decisões que define como um sistema evolui, publica conteúdo, armazena dados, responde a falhas e atende seus usuários.

## Decida por contexto
Comece por requisitos, restrições, risco e horizonte de mudança. Um padrão só é útil quando resolve um problema real sem adicionar complexidade desnecessária.

## Site editorial
CMS, banco, build, cache, busca, schema e observabilidade formam uma cadeia. O guia de [CMS headless](/artigos/arquitetura-cms-headless-para-site-editorial/) detalha essa decisão.

## Registre escolhas
Use [ADRs](/artigos/como-documentar-decisoes-de-arquitetura-adr/) para registrar contexto, alternativas, decisão e consequências.

## Perguntas de revisão

Quais são os limites do sistema? Onde estão os dados? O que acontece quando um componente falha? Como a solução será operada, atualizada e desativada? Responder antes da implementação evita decisões implícitas difíceis de reverter.

> Revisão pendente: adicionar diagrama próprio e ADR real do projeto.
