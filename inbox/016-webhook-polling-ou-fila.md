---
title: "Webhook, polling ou fila: como escolher"
description: "Compare webhook, polling e fila por latência, volume, falhas, reprocessamento e custo."
slug: "/artigos/como-escolher-entre-webhook-polling-e-fila/"
type: "guia"
author: "gabriel-barboza"
category: "Automação"
silo: "automacao"
cluster: "Integrações"
primaryKeyword: "webhook, polling ou fila"
status: "needs-evidence"
sources:
  - "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
  - "https://opentelemetry.io/docs/concepts/signals/"
---
# Webhook, polling ou fila: como escolher

Escolha o transporte a partir do comportamento do processo. Webhook reduz consultas quando o produtor pode emitir eventos; polling é simples quando só existe consulta; fila desacopla sistemas e absorve picos.

## Critérios
Compare latência, volume, disponibilidade, ordenação, replay, custo e capacidade da equipe.

## Decisão
Use webhook para eventos claros, polling para fontes sem notificações confiáveis e fila para processamento assíncrono, picos ou múltiplos consumidores.

## Operação
Qualquer escolha precisa de timeout, retry, idempotência, logs e alerta. Veja o [hub de integrações](/automacao/integracoes/).

## Matriz rápida

Use webhook quando o produtor pode emitir eventos e a latência importa. Use polling quando só existe consulta ou quando a simplicidade é prioridade. Use fila para absorver picos, desacoplar consumidores e permitir reprocessamento.

> Revisão pendente: validar exemplos e inserir tabela comparativa.
