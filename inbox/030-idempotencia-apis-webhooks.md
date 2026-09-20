---
title: "Idempotência em APIs e Webhooks: guia prático"
description: "Evite efeitos duplicados em APIs e webhooks com idempotency keys, retries, concorrência, replay e logs rastreáveis."
slug: "/artigos/idempotencia-em-apis-e-webhooks/"
type: "guia"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "Back-end"
primaryKeyword: "idempotência em APIs e webhooks"
status: "needs-evidence"
sources:
  - "https://docs.stripe.com/api/idempotent_requests"
  - "https://www.rfc-editor.org/rfc/rfc9110"
---
# Idempotência em APIs e Webhooks: guia prático

Uma entrega pode ser repetida quando o produtor não confirma o recebimento. Idempotência garante que repetir a mesma operação não crie novos efeitos indevidos.

## Chave
Use identificador da operação, janela de retenção e registro do resultado. A chave precisa ser validada antes da execução.

## Concorrência
Duas requisições iguais podem chegar juntas. Proteja a gravação e defina o resultado para requisições concorrentes.

## Replay
Retries devem ter limite, backoff e caminho para reprocessamento. Veja [webhooks](/artigos/webhooks-o-que-sao-e-como-projetar/).

## Cenário de falha

Simule uma resposta perdida depois que o efeito foi aplicado. O retry deve reenviar a mesma chave, recuperar o resultado registrado e não criar um segundo efeito. Teste também duas requisições simultâneas com a mesma chave.

> Revisão pendente: incluir exemplo testado com duplicação provocada.
