---
title: "Idempotência em APIs e Webhooks: guia prático"
description: "Como evitar efeitos duplicados com idempotency keys, concorrência, retries com backoff e replay seguro — o que muda entre repetir leitura e cobrança."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/idempotencia-em-apis-e-webhooks/"
primaryKeyword: "idempotência em APIs e webhooks"
draft: false
sources:
  - "https://docs.stripe.com/api/idempotent_requests"
  - "https://www.rfc-editor.org/rfc/rfc9110"
---

Idempotência é a propriedade de uma operação que, repetida com a mesma entrada, produz o mesmo resultado sem novos efeitos. Ela importa porque, em sistemas distribuídos, a repetição é inevitável: o cliente não recebeu a resposta, o timeout disparou, o webhook foi reentregue. Sem idempotência, cada retry vira um efeito extra — uma segunda cobrança, um e-mail duplicado, dois pedidos idênticos.

Nem toda operação precisa de esforço extra. Ler um recurso já é naturalmente idempotente; segundo a [semântica HTTP (RFC 9110)](https://www.rfc-editor.org/rfc/rfc9110), `GET`, `PUT` e `DELETE` são idempotentes por definição, enquanto `POST` normalmente não é. O trabalho concentra-se nas operações que criam ou alteram estado.

## A chave de idempotência

O padrão central é a **idempotency key**: o cliente envia um identificador único da operação, e o servidor guarda a associação entre a chave e o resultado. A implementação de referência é a das [requisições idempotentes da Stripe](https://docs.stripe.com/api/idempotent_requests). O ciclo é:

1. recebe a requisição com a chave;
2. a chave já existe? retorna o resultado registrado, sem reexecutar;
3. é nova? executa, registra chave + resultado dentro da mesma transação;
4. define uma janela de retenção para a chave.

A validação da chave precisa acontecer **antes** de executar o efeito, não depois.

## Concorrência: duas iguais ao mesmo tempo

O caso difícil não é a repetição sequencial — é a simultânea. Duas requisições com a mesma chave podem chegar juntas, ambas verem "chave inexistente" e ambas executarem. Proteja a gravação com uma restrição de unicidade no armazenamento ou um lock: a segunda tentativa deve falhar de forma controlada e recuperar o resultado da primeira, não criar um segundo efeito.

## Retries e replay com limite

Retries precisam de limite de tentativas e backoff (espera crescente) para não amplificar uma falha em uma tempestade de requisições. Para webhooks, isso se conecta diretamente ao contrato de evento — o consumidor guarda o identificador do evento e trata a reentrega. Veja [webhooks: o que são e como projetar](/artigos/webhooks-o-que-sao-e-como-projetar/).

## Teste provocando a falha

Não confie que funciona — provoque a duplicação. Simule uma resposta perdida **depois** que o efeito foi aplicado: o retry deve reenviar a mesma chave, recuperar o resultado registrado e não criar um segundo efeito. Teste também duas requisições simultâneas com a mesma chave e confirme que apenas uma produz efeito.

## Próximo passo

Idempotência é parte da resiliência de integrações — combine com a decisão de transporte em [webhook, polling ou fila](/artigos/como-escolher-entre-webhook-polling-e-fila/) e com [observabilidade](/artigos/observabilidade-para-aplicacoes-web/) para detectar reentregas. Volte ao hub de [back-end](/desenvolvimento/backend/).
