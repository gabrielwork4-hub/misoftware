---
title: "Observabilidade para aplicações web: logs, métricas e traces"
description: "Os três sinais da observabilidade, o que medir por fluxo, como escrever alertas acionáveis e o que nunca registrar."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "DevOps"
draft: false
sources:
  - label: "opentelemetry.io"
    url: "https://opentelemetry.io/docs/"
  - label: "web.dev"
    url: "https://web.dev/articles/vitals"
---
Observabilidade é a capacidade de entender o que está acontecendo dentro de um sistema a partir dos sinais que ele emite — sem precisar adicionar código novo a cada pergunta. A diferença entre monitorar e observar é essa: monitorar responde a perguntas que você já sabia fazer; observar permite responder às que você não previu. Para uma aplicação web, isso transforma uma falha de "o site está estranho" em um diagnóstico concreto.

## Os três sinais

A observabilidade se apoia em três tipos de sinal, complementares:

- **Logs** descrevem eventos discretos: "requisição X falhou às 12h03 com erro Y". São o detalhe, o "o que exatamente aconteceu".
- **Métricas** são medidas agregadas ao longo do tempo: taxa de erro, latência, requisições por segundo. Mostram tendência e respondem "isso está piorando?".
- **Traces** seguem uma requisição por todas as etapas e serviços que ela atravessa. Respondem "onde, no caminho, o tempo foi gasto ou a falha ocorreu?".

Usados juntos, eles se completam: a métrica avisa que a latência subiu, o trace aponta em qual etapa, e o log diz o motivo naquela etapa. Um só dos três deixa lacunas.

## Defina SLOs por fluxo, não médias globais

Meça o que importa para o usuário, por fluxo relevante — disponibilidade, latência e taxa de erro do checkout, da busca, do login. Uma média global esconde o problema: 99% de disponibilidade "no site" pode significar que o checkout, que é 5% do tráfego, está fora do ar. Defina um objetivo (SLO) por fluxo e acompanhe a margem para ele. Para a experiência de front-end, os Core Web Vitals (carregamento, interatividade, estabilidade visual) são as métricas que refletem o que o usuário sente.

## Alertas acionáveis

Um alerta só vale a interrupção se aponta para uma ação. Um bom alerta inclui: o serviço e a versão afetados, o impacto (o que o usuário está sofrendo), a janela (desde quando, com que intensidade) e um link para o procedimento de diagnóstico. Alerte sobre o sintoma que afeta o usuário — a taxa de erro do fluxo passou do limite — não sobre cada exceção interna que o sistema já recupera sozinho. Alerta demais é tão inútil quanto alerta de menos: os dois treinam a equipe a não olhar.

## O que nunca registrar

Observabilidade lida com dados reais, então tem responsabilidade sobre eles. Nunca registre credenciais, tokens, dados pessoais sensíveis ou o conteúdo completo de um payload que os contenha. Registre o identificador de correlação, não o dado em si. Um log que vaza dados sensíveis troca um problema de diagnóstico por um problema de segurança e privacidade — bem pior.

## O runbook fecha o ciclo

Sinais mostram que algo está errado; o runbook diz o que fazer. Documente, por tipo de incidente, os passos de investigação, o procedimento de rollback, como reprocessar (replay) o que ficou pendente e como comunicar. Sem isso, cada incidente é resolvido do zero, sob pressão, por quem estiver disponível.

## Comece pelo mínimo que responde

Não é preciso instrumentar tudo de uma vez — isso gera custo e ruído sem clareza. Comece pelo mínimo que responde às quatro perguntas que importam: o sistema está no ar (disponibilidade)? está rápido (latência)? está falhando (taxa de erro)? e, quando falha, dá para seguir a requisição (um trace com identificador de correlação)? Instrumente primeiro os fluxos críticos — aqueles cuja falha o usuário sente. Só depois amplie para o resto. Observabilidade útil cresce a partir das perguntas reais que você precisou responder num incidente, não de um painel genérico montado antes de qualquer problema.

## Próximo passo

Observabilidade fecha o ciclo do [pipeline de CI/CD](/artigos/pipelines-cicd-github-actions-docker/) e se conecta ao [monitoramento de workflows](/artigos/monitoramento-de-workflows-e-alertas/). Contexto no [hub de DevOps](/desenvolvimento/devops/).
