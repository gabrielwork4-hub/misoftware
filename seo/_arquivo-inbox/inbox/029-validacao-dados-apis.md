---
title: "Validação de Dados em APIs: schemas e erros"
description: "Projete validação de dados em APIs com schemas, erros consistentes, limites, segurança, versionamento e testes reproduzíveis."
author: gabriel-barboza
category: "Desenvolvimento"
silo: desenvolvimento
cluster: backend
primaryKeyword: "validação de dados em APIs"
status: needs-evidence
sources:
  - "https://spec.openapis.org/oas/latest.html"
  - "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
---
# Validação de Dados em APIs: schemas e erros

Validação é a fronteira entre entrada externa e lógica interna. O endpoint deve rejeitar dados inválidos de forma previsível, segura e explicável.

## Schema
Defina tipos, obrigatoriedade, limites, formatos e valores permitidos. Normalize apenas quando a regra for explícita.

## Erros
Retorne status e mensagem consistentes sem expor detalhes internos. Diferencie entrada inválida, não autorizado, não encontrado e falha do servidor.

## Evolução
Versione mudanças incompatíveis e teste entradas válidas, inválidas e maliciosas.

## Ordem recomendada

Valide formato na borda, regras de negócio no domínio e invariantes no armazenamento. Retorne erros consistentes, sem expor detalhes internos, e mantenha testes para entradas ausentes, extremas, duplicadas e maliciosas.

> Revisão pendente: adicionar implementação em stack definida e suíte de testes.
