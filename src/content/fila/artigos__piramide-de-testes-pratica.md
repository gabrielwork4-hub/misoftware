---
title: "Pirâmide de Testes na Prática: guia completo"
description: "Entenda testes unitários, integração e E2E e monte uma estratégia equilibrada por risco, velocidade e custo de manutenção."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/piramide-de-testes-pratica/"
primaryKeyword: "pirâmide de testes"
draft: true
sources:
  - "https://martinfowler.com/articles/practical-test-pyramid.html"
---

> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.

A pirâmide sugere mais testes rápidos e isolados, menos testes amplos e caros. É uma heurística para equilibrar feedback e confiança, não uma regra fixa.

## Camadas
Unitários verificam comportamento isolado; integração verifica componentes juntos; E2E verifica um fluxo completo.

## Escolha por risco
Use E2E em jornadas críticas, integração em contratos e unitários em regras de negócio. Meça tempo, flakiness e manutenção.

## CI
Execute feedback rápido primeiro e bloqueie publicação quando falhas relevantes permanecerem.

## Distribuição prática

Use muitos testes unitários rápidos, uma camada menor de integração e poucos testes de ponta a ponta para jornadas críticas. A proporção deve refletir o risco e o custo de manutenção do produto.

> Revisão pendente: inserir matriz e exemplos executáveis.
