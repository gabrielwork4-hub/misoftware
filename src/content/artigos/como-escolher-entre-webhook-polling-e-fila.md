---
title: "Webhook, polling ou fila: como escolher"
description: "Um guia de decisão entre webhook, polling e fila por latência, volume, disponibilidade, ordenação e replay — com cenários reais."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Automação"
silo: "automacao"
tags:
  - "Integrações"
draft: false
sources:
  - label: "developer.mozilla.org"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
  - label: "docs.stripe.com"
    url: "https://docs.stripe.com/webhooks"
---
Quando dois sistemas precisam se comunicar, a primeira decisão não é qual ferramenta usar, e sim como a informação vai trafegar. Webhook, polling e fila resolvem o mesmo problema — mover um evento de um lugar para outro — mas com trade-offs muito diferentes de latência, custo e confiabilidade. Escolher errado aqui é caro: gera chamadas desnecessárias, eventos perdidos ou um sistema que trava sob carga. O guia parte do comportamento do processo, não da moda.

## As três abordagens

**Webhook** é o produtor avisando o consumidor quando algo acontece: você registra um endpoint e recebe uma requisição a cada evento. Elimina consultas repetidas e entrega baixa latência, mas exige um endpoint sempre disponível e um plano para reentrega.

**Polling** é o consumidor perguntando ao produtor, em intervalos, se algo mudou. É a abordagem mais simples e funciona mesmo quando o produtor não oferece eventos — ao custo de chamadas que na maior parte das vezes não trazem novidade, e de uma latência limitada pelo intervalo.

**Fila** coloca uma camada entre produtor e consumidor: o produtor publica mensagens, o consumidor processa no seu ritmo. Desacopla os dois sistemas, absorve picos e permite reprocessamento — em troca de mais infraestrutura e de latência adicional.

## Critérios de decisão

Avalie cada opção contra o que o processo realmente exige:

| Critério | Webhook | Polling | Fila |
|---|---|---|---|
| Latência | Baixa | Limitada pelo intervalo | Baixa a média |
| Custo de chamadas | Baixo | Alto (consultas vazias) | Médio (infra) |
| Produtor precisa emitir evento? | Sim | Não | Sim (publica) |
| Absorve pico de volume | Mal | Mal | Bem |
| Múltiplos consumidores | Difícil | Fácil | Fácil |
| Reprocessamento (replay) | Depende do produtor | Natural | Natural |

## Como decidir, por cenário

- **Um pagamento foi aprovado e você precisa reagir rápido:** webhook. O evento é claro, o produtor emite e a latência importa.
- **Um sistema legado sem eventos, que só oferece uma consulta de "novidades desde X":** polling. Não há alternativa, e a simplicidade vence.
- **Milhares de eventos em rajada, ou vários serviços que precisam do mesmo evento:** fila. Ela absorve o pico e entrega a todos os consumidores sem acoplar o produtor a cada um.

Muitos sistemas maduros combinam os três: um webhook recebe o evento na borda e publica numa fila, que vários consumidores processam no próprio ritmo. Isso junta a baixa latência do webhook com a resiliência da fila.

## O que vale para qualquer escolha

Independentemente do transporte, a operação exige os mesmos cuidados: timeout, retry com backoff limitado, idempotência (para que uma reentrega não duplique efeito), logs com identificador de correlação e alertas acionáveis. Trocar de transporte não elimina esses requisitos — só muda onde eles são aplicados. Se você não tem esses controles, o problema não é a escolha entre webhook, polling e fila; é a falta de uma base de integração confiável.

## Erro comum: polling agressivo

O erro mais frequente com polling é consultar com frequência alta "para não perder nada", gerando milhares de chamadas que quase sempre voltam vazias. Isso desperdiça recurso dos dois lados e ainda pode esbarrar em limites de taxa do produtor, que passa a recusar as consultas justamente quando há novidade. Se a latência exigida é de segundos e o volume é alto, isso é um sinal de que polling é o transporte errado — o caso pede webhook ou fila. Quando polling é mesmo a única opção, ajuste o intervalo ao tempo real de tolerância do processo e use uma marca incremental (consultar só "o que mudou desde a última vez") em vez de reler tudo a cada ciclo.

## Próximo passo

Para o desenho detalhado de eventos, veja [webhooks: o que são e como projetar](/artigos/webhooks-o-que-sao-e-como-projetar/) e [idempotência em APIs e webhooks](/artigos/idempotencia-em-apis-e-webhooks/). Para o contexto, o [hub de integrações](/automacao/integracoes/).
