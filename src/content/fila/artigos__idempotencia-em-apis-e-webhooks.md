---
title: "Idempotência em APIs e Webhooks: guia prático"
description: "Evite efeitos duplicados em APIs e webhooks com idempotency keys, retries, concorrência, replay e logs rastreáveis."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/idempotencia-em-apis-e-webhooks/"
primaryKeyword: "idempotência em APIs e webhooks"
draft: true
sources:
  - "https://docs.stripe.com/api/idempotent_requests"
  - "https://www.rfc-editor.org/rfc/rfc9110"
---

> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.

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
