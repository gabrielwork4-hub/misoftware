---
title: "Observabilidade para Aplicações Web: guia prático"
description: "Logs, métricas e traces sem virar ruído: os três sinais, SLOs por fluxo, alertas acionáveis e runbooks para transformar falha em diagnóstico rápido."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/observabilidade-para-aplicacoes-web/"
primaryKeyword: "observabilidade para aplicações web"
draft: false
sources:
  - "https://opentelemetry.io/docs/"
  - "https://web.dev/articles/vitals"
---

Observabilidade é a capacidade de inferir o estado interno de um sistema a partir dos sinais que ele emite. A diferença entre monitoramento e observabilidade é a pergunta que você consegue responder: monitoramento diz "algo está errado"; observabilidade diz "o quê, onde e por quê". O objetivo prático é reduzir o tempo entre uma falha acontecer e alguém entender a causa.

## Os três sinais

Cada sinal responde uma pergunta diferente, e você precisa dos três:

| Sinal | Responde | Bom para |
|---|---|---|
| **Métricas** | quanto? qual a tendência? | alertar sobre agregados (latência, erro) |
| **Logs** | o que aconteceu neste evento? | investigar um caso específico |
| **Traces** | por onde passou a requisição? | achar o gargalo entre serviços |

Padrões abertos como o [OpenTelemetry](https://opentelemetry.io/docs/) permitem instrumentar uma vez e enviar para diferentes destinos, sem prender o código a um fornecedor.

## SLOs: meça o que o usuário sente

Não monitore tudo — monitore o que importa para quem usa. Defina SLOs (objetivos de nível de serviço) por fluxo relevante: disponibilidade, latência (p95, p99) e taxa de erro. Para aplicações web, os [Core Web Vitals](https://web.dev/articles/vitals) trazem a perspectiva de experiência real do usuário. Um SLO dá um critério objetivo para "está bom o suficiente?" e para quando acionar um alerta.

## Alerta acionável ou não é alerta

Todo alerta precisa levar a uma ação imediata. Um bom alerta inclui: **serviço, versão, impacto, janela de tempo e link para o runbook**. Alerta que dispara para cada oscilação treina a equipe a ignorá-lo — prefira poucos alertas ligados a sintomas que o usuário percebe. Este é o mesmo princípio aplicado a fluxos de automação em [monitoramento de workflows e alertas](/artigos/monitoramento-de-workflows-e-alertas/).

## Runbooks transformam pânico em procedimento

Para cada alerta, documente investigação, rollback, replay e comunicação. Um runbook é o que permite que qualquer pessoa de plantão — não só quem escreveu o código — responda a um incidente. E nunca registre credenciais ou dados sensíveis nos sinais: observabilidade também é superfície de vazamento.

## Próximo passo

Observabilidade fecha o ciclo de entrega — conecte-a ao [CI/CD](/artigos/pipelines-cicd-github-actions-docker/) para saber se cada deploy melhorou ou piorou o sistema. Volte ao hub de [DevOps](/desenvolvimento/devops/).
