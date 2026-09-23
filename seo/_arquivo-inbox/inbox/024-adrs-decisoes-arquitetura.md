---
title: "ADR: como documentar decisões de arquitetura"
description: "Aprenda a criar ADRs com contexto, alternativas, decisão, consequências, status e exemplos aplicados a projetos reais."
author: gabriel-barboza
category: "Desenvolvimento"
silo: desenvolvimento
cluster: arquitetura
primaryKeyword: "decisões de arquitetura ADR"
status: needs-evidence
sources:
  - "https://adr.github.io/"
  - "https://martinfowler.com/articles/architectural-decision-records.html"
---
# ADR: como documentar decisões de arquitetura

Um ADR registra por que uma decisão foi tomada, quais alternativas foram consideradas e que consequências foram aceitas. Ele evita que a equipe repita discussões ou interprete uma escolha antiga sem contexto.

## Estrutura
Inclua título, status, contexto, decisão, alternativas, consequências e data. Escreva para alguém que precisará revisar a escolha no futuro.

## Exemplo
Uma decisão sobre CMS headless pode registrar necessidade de preview, workflow editorial, rebuild e independência da camada de apresentação.

## Manutenção
Quando uma decisão mudar, crie um novo ADR que substitua o anterior. Não apague o histórico.

> Revisão pendente: incluir template copiável e exemplo completo revisado.
