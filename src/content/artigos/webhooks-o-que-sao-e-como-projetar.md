---
title: "Webhooks: o que são e como projetar integrações confiáveis"
description: "Entenda webhooks e projete integrações com contrato de evento, autenticação, idempotência, retries e observabilidade."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Automação"
silo: "automacao"
tags:
  - "Integrações"
draft: false
sources:
  - label: "docs.stripe.com"
    url: "https://docs.stripe.com/webhooks"
  - label: "developer.mozilla.org"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"
---
Um webhook é uma notificação enviada por um sistema quando um evento acontece. Em vez de perguntar repetidamente se algo mudou, o consumidor fornece um endpoint e recebe uma requisição quando há uma atualização. A documentação de [webhooks da Stripe](https://docs.stripe.com/webhooks) é uma referência prática para tratar assinaturas, reentrega e validação de eventos.

Essa simplicidade aparente esconde decisões importantes: como autenticar, como validar o payload, o que fazer quando a entrega se repete e como reprocessar um evento que falhou.

## Webhook, polling e WebSocket

Webhooks são úteis quando o produtor consegue avisar o consumidor e a entrega pode ser assíncrona. Polling é mais simples quando não existe mecanismo de evento, mas pode gerar chamadas desnecessárias. WebSocket mantém uma conexão aberta e faz sentido quando há comunicação contínua e baixa latência.

A escolha deve considerar volume, latência, tolerância a atraso, necessidade de resposta imediata e capacidade de replay. Não existe um transporte universalmente melhor.

## O contrato de um webhook

Um contrato mínimo deve definir:

- nome e versão do evento;
- identificador único;
- horário de ocorrência;
- entidade afetada;
- schema do payload;
- assinatura ou mecanismo de autenticação;
- comportamento esperado da resposta;
- política de retry e expiração.

O endpoint deve validar o payload antes de executar efeitos. Um campo inesperado não deve causar falha silenciosa nem ser aceito sem uma decisão explícita de compatibilidade.

## Duplicação e idempotência

O produtor pode reenviar um evento porque não recebeu uma resposta no tempo esperado. O consumidor precisa guardar o identificador do evento ou uma chave de idempotência e decidir o que fazer quando ele aparecer novamente.

A operação deve ser segura para repetição. Se o evento cria um registro, a segunda entrega deve encontrar o registro existente ou atualizar o mesmo estado, em vez de criar um efeito duplicado.

## Falhas e observabilidade

Defina timeout, número de tentativas, intervalo entre retries e destino para eventos que não foram processados. Registre o identificador do evento, a correlação, o status, o tempo de execução e o motivo da falha, sem armazenar segredos ou dados desnecessários.

Um alerta acionável deve indicar qual fluxo falhou, quantas vezes, qual evento está pendente e qual procedimento de recuperação deve ser seguido.

## Exemplo de contrato de evento

Um evento de pagamento pode carregar um identificador único, o tipo do evento, a data de criação e os dados mínimos para processamento. O consumidor deve validar a assinatura, conferir o schema e registrar o identificador antes de executar qualquer efeito externo.

```json
{
  "id": "evt_123",
  "type": "payment.completed",
  "created_at": "2026-09-18T12:00:00Z",
  "data": { "order_id": "ord_456" }
}
```

O exemplo é ilustrativo: o formato real deve seguir o contrato do provedor. O ponto central é separar metadados de evento, dados de negócio e mecanismo de autenticação.

## Segurança e versionamento

Duas decisões separam um webhook amador de um confiável. A primeira é a autenticação: valide a assinatura de todo evento antes de processá-lo. A maioria dos provedores assina o payload com um segredo compartilhado; o consumidor recalcula a assinatura e compara. Sem isso, qualquer um que descubra a URL do endpoint pode injetar eventos falsos. A segunda é o versionamento: o formato de um evento muda com o tempo, e um consumidor que assume o formato de hoje quebra quando o provedor adiciona ou renomeia um campo. Inclua a versão no contrato, decida explicitamente o que fazer com campos desconhecidos (ignorar de forma segura, em vez de falhar) e documente por quanto tempo a versão anterior continua sendo enviada. Tratar o evento como um contrato versionado é o que permite evoluir a integração sem quebrar quem depende dela.

## Checklist antes da produção

1. O endpoint valida assinatura e schema?
2. O evento pode ser repetido com segurança?
3. Existe timeout e retry definido?
4. Há logs e correlação suficientes?
5. É possível reprocessar sem duplicar efeitos?
6. O contrato possui versão e documentação?

Para implementar o fluxo, veja o [tutorial de webhook e API no n8n](/tutoriais/automacao-n8n-webhook-api/). Para escolher o transporte, consulte [webhook, polling ou fila](/artigos/como-escolher-entre-webhook-polling-e-fila/).

