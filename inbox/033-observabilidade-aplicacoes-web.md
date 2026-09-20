---
title: "Observabilidade para Aplicações Web: guia prático"
description: "Implemente observabilidade em aplicações web com logs, métricas, traces, SLOs, alertas acionáveis e runbooks."
slug: "/artigos/observabilidade-para-aplicacoes-web/"
type: "guia"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "DevOps"
primaryKeyword: "observabilidade para aplicações web"
status: "needs-evidence"
sources:
  - "https://opentelemetry.io/docs/"
  - "https://web.dev/articles/vitals"
---
# Observabilidade para Aplicações Web: guia prático

Observabilidade é a capacidade de inferir o estado de um sistema a partir de seus sinais. Ela transforma uma falha em diagnóstico possível.

## Sinais
Logs descrevem eventos, métricas mostram comportamento agregado e traces conectam etapas de uma requisição.

## SLOs
Defina disponibilidade, latência e taxa de erro por fluxo relevante. Alerta deve indicar impacto e ação.

## Runbooks
Documente investigação, rollback, replay e comunicação. Não registre dados sensíveis sem necessidade.

## Sinais e contexto

Combine métricas para tendência, logs para detalhes e traces para seguir uma requisição. Um alerta deve incluir serviço, versão, impacto, janela e link para o procedimento de diagnóstico.

> Revisão pendente: adicionar stack, dashboard e exemplo de incidente.
