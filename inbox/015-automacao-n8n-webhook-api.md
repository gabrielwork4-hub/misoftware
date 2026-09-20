---
title: "Automação n8n com webhook e API: tutorial completo"
description: "Integre webhook e API no n8n com validação, autenticação, idempotência, retries e testes de falha."
slug: "/tutoriais/automacao-n8n-webhook-api/"
type: "tutorial"
author: "gabriel-barboza"
category: "Automação"
silo: "automacao"
cluster: "n8n"
primaryKeyword: "automação n8n com webhook e API"
status: "needs-evidence"
sources:
  - "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/"
  - "https://docs.n8n.io/integrations/"
---
# Automação n8n com webhook e API: tutorial completo

Um webhook inicia o fluxo; uma chamada de API produz o efeito. Entre os dois, valide o payload, autentique a requisição e prepare uma resposta segura.

## Contrato
Defina evento, identificador, schema, assinatura, timeout e resposta. Rejeite entradas inválidas antes de chamar a API.

## Repetição
Use chave de idempotência, retry limitado e registro de execução. Teste duplicação e indisponibilidade do serviço.

## Recuperação
Crie alerta, fila de falha e procedimento de replay. Consulte [webhooks](/artigos/webhooks-o-que-sao-e-como-projetar/) e [idempotência](/artigos/idempotencia-em-apis-e-webhooks/).

## Sequência recomendada

Receba o evento, responda dentro do timeout, valide assinatura e schema, verifique a chave idempotente e só então chame a API. Registre correlação, status e possibilidade de reprocessamento. Para efeitos irreversíveis, use aprovação ou compensação.

> Revisão pendente: adicionar endpoint de teste, configuração exportável e logs sanitizados.
