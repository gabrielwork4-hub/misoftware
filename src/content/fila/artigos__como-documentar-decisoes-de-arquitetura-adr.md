---
title: "ADR: como documentar decisões de arquitetura"
description: "Aprenda a criar ADRs com contexto, alternativas, decisão, consequências, status e exemplos aplicados a projetos reais."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/como-documentar-decisoes-de-arquitetura-adr/"
primaryKeyword: "decisões de arquitetura ADR"
draft: false
sources:
  - "https://adr.github.io/"
  - "https://martinfowler.com/articles/architectural-decision-records.html"
---

Um Architectural Decision Record (ADR) registra por que uma decisão foi tomada, quais alternativas foram consideradas e que consequências foram aceitas. O documento não tenta prever tudo: ele preserva o contexto que se perde quando pessoas, requisitos ou tecnologias mudam.

## Quando criar um ADR

Registre uma decisão quando ela limitar o futuro do sistema, exigir investimento relevante ou for difícil de reverter. Escolher um banco, separar um serviço, adotar um CMS headless ou definir um contrato de eventos são exemplos melhores do que decisões triviais de implementação.

Crie o registro perto do momento da decisão, durante a discussão. Um ADR escrito meses depois tende a racionalizar o resultado e omitir alternativas reais. O status deve dizer se a decisão está proposta, aceita, substituída ou rejeitada.

## Template mínimo

```md
# ADR-0007 — Adotar CMS headless

- Status: aceito
- Data: 2026-09-22

## Contexto
Precisamos de preview editorial e de uma camada de apresentação independente.

## Decisão
Usaremos um CMS headless com webhook de rebuild e conteúdo versionado.

## Alternativas consideradas
Markdown no repositório; CMS acoplado ao frontend; solução headless.

## Consequências
Ganhamos flexibilidade e preview, mas assumimos custo de operação, autenticação e sincronização.

## Revisão
Reavaliar após três meses de publicação e 100 conteúdos migrados.
```

O contexto explica o problema e as restrições, não apenas a solução. A decisão deve ser curta e testável. Liste alternativas que realmente foram discutidas e registre por que não foram escolhidas. Nas consequências, inclua efeitos positivos, riscos, custos e trabalho operacional.

## Como revisar uma decisão

Um ADR não é um contrato imutável. Se o contexto mudar, escreva um novo documento que aponte para o anterior e marque o status antigo como substituído. Não edite o histórico para apagar uma escolha que fazia sentido no momento; a cadeia de decisões é parte da documentação.

Mantenha os arquivos próximos ao código ou em um repositório versionado, use nomes sequenciais e ligue cada ADR a issues, pull requests e métricas relevantes. O link entre decisão e evidência evita que a documentação vire opinião solta.

## Critérios de qualidade

Um ADR útil permite que alguém de fora da discussão responda: qual problema existia, quais opções foram descartadas, quais riscos foram aceitos e quando a decisão deve ser revista? Se essas respostas não aparecem em poucos minutos, reduza o texto narrativo e torne as consequências mais concretas.
