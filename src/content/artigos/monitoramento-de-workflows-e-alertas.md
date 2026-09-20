---
title: "Monitoramento de workflows: métricas e alertas"
description: "O que medir num workflow em produção, quais alertas criar e como escrever um runbook que transforma incidente em rotina."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Automação"
silo: "automacao"
tags:
  - "Workflows"
draft: false
sources:
  - label: "sre.google"
    url: "https://sre.google/sre-book/monitoring-distributed-systems/"
  - label: "opentelemetry.io"
    url: "https://opentelemetry.io/docs/"
---
Um workflow em produção sem monitoramento é uma aposta: você só descobre que ele parou quando um cliente reclama. Monitorar é responder, a qualquer momento, a quatro perguntas — ele executou? quanto demorou? onde falhou? como recuperar? Este guia mostra o que medir, o que alertar e como escrever o runbook que transforma uma falha em rotina, e não em investigação do zero.

## O que medir

Nem tudo que dá para medir vale um gráfico. Para a maioria dos workflows, seis métricas cobrem o essencial:

- **Taxa de sucesso:** execuções concluídas sobre o total. É o sinal de saúde mais direto.
- **Duração:** quanto tempo do trigger ao fim. Uma subida gradual costuma anteceder uma falha.
- **Retries:** quantas execuções precisaram repetir. Muito retry é um problema mascarado, não resolvido.
- **Idade da fila:** há quanto tempo o item mais antigo espera. Cresce antes de a taxa de sucesso cair.
- **Erro por etapa:** onde no fluxo as falhas se concentram.
- **Custo por execução:** especialmente quando há chamadas pagas (APIs, modelos de IA).

Defina um alvo para cada uma por tipo de fluxo — o que é aceitável para um relatório noturno não é para um pagamento em tempo real.

## Logs que servem para investigar

Métricas dizem que algo está errado; logs dizem o quê. Para cada execução, registre um identificador de correlação (que segue o item por todas as etapas), a etapa atual, o status e o erro sanitizado. Nunca registre credenciais ou dados sensíveis desnecessários. O teste de um bom log: dado um item que falhou ontem, você consegue reconstruir exatamente o que aconteceu com ele? Se não, o log está incompleto.

## Alertas que valem a interrupção

Um alerta que ninguém sabe o que fazer com ele vira ruído, e ruído treina a equipe a ignorar alertas. Um bom alerta dispara sobre um sintoma que importa (a taxa de sucesso caiu abaixo do alvo, a fila passou de um limite, o custo estourou o teto) e não sobre cada falha isolada, que muitas vezes o retry já resolve. Alerte sobre a tendência e o impacto, não sobre o evento único.

## O runbook: o que transforma incidente em rotina

Cada alerta deve apontar para um runbook — um documento curto que responde: qual o impacto disso? quem é o responsável? como diagnosticar? como recuperar (inclusive como reprocessar com segurança os itens afetados)? Um workflow com runbook transforma uma falha às sextas-feiras em uma sequência de passos conhecidos; sem ele, a mesma falha vira uma investigação improvisada, feita sob pressão por quem estiver disponível.

## Um exemplo de alerta bem formado

> **Alerta:** taxa de sucesso do fluxo "faturamento" abaixo de 95% nos últimos 15 min.
> **Impacto:** faturas podem não estar sendo emitidas.
> **Responsável:** time de faturamento (on-call).
> **Diagnóstico:** verificar o erro por etapa; a etapa "emitir nota" concentra as falhas?
> **Recuperação:** reprocessar a fila de falha após confirmar a disponibilidade da API fiscal.

Esse formato — sintoma, impacto, dono, diagnóstico, recuperação — é o que separa um alerta que resolve de um que só assusta.

## Erro comum: alertar em excesso

Times novos em monitoramento costumam alertar sobre tudo — cada falha isolada, cada retry, cada pico momentâneo. O resultado é fadiga de alerta: quando tudo dispara, nada é urgente, e o alerta que importava se perde no meio. Prefira poucos alertas sobre sintomas que afetam o resultado a muitos alertas sobre eventos internos que o próprio sistema já recupera. Uma regra prática: se um alerta disparou e a ação correta foi "não fazer nada", ele não deveria existir.

## Próximo passo

Para o desenho do fluxo em si, veja o [hub de workflows operacionais](/automacao/workflows/); para a observabilidade da aplicação por trás dele, [observabilidade para aplicações web](/artigos/observabilidade-para-aplicacoes-web/).
