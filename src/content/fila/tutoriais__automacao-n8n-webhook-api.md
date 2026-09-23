---
title: "Automação n8n com webhook e API: tutorial completo"
description: "Integre webhook e API no n8n com contrato, validação, autenticação, idempotência, retries e testes de falha."
pubDate: "2026-09-22"
author: "redacao"
category: "Automação"
silo: automacao
kind: "tutorial"
canonicalPath: "/tutoriais/automacao-n8n-webhook-api/"
primaryKeyword: "automação n8n com webhook e API"
draft: true
sources:
  - "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/"
  - "https://docs.n8n.io/integrations/"
  - "https://docs.stripe.com/webhooks"
---

Este tutorial desenha um fluxo em que um webhook recebe um evento, valida a entrada, evita duplicação e chama uma API de teste. O exemplo não deve usar um endpoint de produção até que assinatura, autenticação, limites e recuperação tenham sido verificados.

## Contrato do evento

Defina método, caminho, identificador, timestamp, schema e resposta. Um evento de teste pode ser:

```json
{
  "id": "evt_123",
  "type": "ticket.created",
  "data": { "ticketId": "t_456", "priority": "high" }
}
```

O identificador precisa ser estável. Ele será usado para reconhecer a mesma entrega caso o produtor tente novamente.

## 1. Configure o webhook

Crie um nó Webhook no n8n e escolha o método exigido pelo produtor. Use a URL de teste enquanto desenvolve e confirme o payload recebido com uma ferramenta controlada. A documentação do [Webhook node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/) deve ser conferida na versão instalada, pois opções e respostas podem mudar.

Não considere o evento autenticado apenas porque chegou ao endpoint. Valide assinatura, timestamp ou segredo conforme o contrato do produtor. Não registre o segredo nem o payload completo quando houver dados pessoais.

## 2. Valide e normalize

Antes de chamar a API, verifique `id`, `type` e os campos de `data`. Rejeite campos ausentes com erro explícito. Normalize apenas o necessário e preserve o identificador original para correlação.

Teste pelo menos:

- evento válido;
- evento sem `id`;
- tipo desconhecido;
- payload malformado;
- assinatura ausente ou inválida.

## 3. Evite duplicação

Consulte um armazenamento de execução ou mecanismo de idempotência pela chave `id`. Se o evento já foi concluído, devolva uma resposta segura sem chamar a API novamente. Se estiver em processamento, escolha entre aguardar, rejeitar temporariamente ou enfileirar.

Uma chave de idempotência só funciona se o efeito externo também respeitá-la ou se você registrar o estado antes de executá-lo. Teste o cenário em que a API responde sucesso, mas a resposta se perde antes do n8n salvar o resultado.

## 4. Chame a API de teste

Use credenciais de teste e envie somente os campos necessários. Configure timeout e trate separadamente respostas de validação, autenticação, limite e indisponibilidade. Não repita automaticamente erros permanentes.

Registre um identificador de correlação, status e tempo. A resposta ao webhook deve informar se o evento foi aceito ou rejeitado; não prometa processamento concluído se o trabalho for assíncrono.

## 5. Retry e recuperação

Retry limitado com backoff pode resolver falha transitória. Ele não deve transformar timeout em múltiplos efeitos. Defina o máximo de tentativas, o intervalo e o destino de eventos que continuam falhando. Crie alerta e procedimento de replay com a mesma proteção de idempotência.

Provoque timeout, resposta 5xx, credencial inválida e evento duplicado. Em cada caso, anote status observado, log gerado, alerta e ação do responsável.

## Checklist

- contrato e assinatura documentados;
- payload validado antes do efeito;
- chave idempotente registrada;
- credencial de teste usada;
- timeout e retry limitados;
- respostas permanentes não são repetidas;
- replay seguro definido;
- logs sanitizados e correlacionáveis;
- falhas executadas em teste.

## Próximo passo

Compare esta implementação com o guia de [webhooks](/artigos/webhooks-o-que-sao-e-como-projetar/), [idempotência](/artigos/idempotencia-em-apis-e-webhooks/) e o [hub de integrações](/automacao/integracoes/). O tutorial só deve ser promovido depois que o endpoint de teste e os cenários de falha forem executados.
