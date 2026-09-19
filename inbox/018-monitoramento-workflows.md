---
title: "Monitoramento de Workflows: métricas e alertas"
description: "Monitore workflows com métricas, logs, alertas, SLOs, retries e runbooks de diagnóstico."
author: gabriel-barboza
category: "Automação"
silo: automacao
cluster: workflows
primaryKeyword: "monitoramento de workflows"
status: needs-evidence
sources:
  - "https://opentelemetry.io/docs/"
  - "https://sre.google/sre-book/monitoring-distributed-systems/"
---
# Monitoramento de Workflows: métricas e alertas

Monitorar um workflow é saber se ele executou, quanto demorou, onde falhou e como recuperar. Um painel sem ação associada apenas aumenta ruído.

## Métricas
Registre volume, sucesso, falha, latência, retries, fila pendente e custo. Defina limites por tipo de fluxo.

## Logs
Use identificador de correlação, etapa, status e erro sanitizado. Não registre credenciais ou dados desnecessários.

## Runbook
Cada alerta deve indicar impacto, responsável, passo de diagnóstico e procedimento de replay. Consulte [workflows operacionais](/automacao/workflows/).

## Métricas essenciais

Monitore taxa de sucesso, duração, retries, idade da fila, erro por etapa e custo por execução. Cada alerta precisa apontar para um runbook com responsável, diagnóstico e ação de recuperação.

> Revisão pendente: inserir exemplo de dashboard e SLOs testados.
