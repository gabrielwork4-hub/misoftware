---
title: "DevOps: CI/CD, deploy e observabilidade"
description: "Aprenda DevOps com CI/CD, ambientes, secrets, cache, deploy, rollback e observabilidade para entregar software com segurança."
pubDate: "2026-09-20"
author: "gabriel-barboza"
silo: "desenvolvimento"
cluster: "DevOps"
clusterSlug: "devops"
draft: false
sources:
  - label: "docs.github.com"
    url: "https://docs.github.com/en/actions"
  - label: "docs.docker.com"
    url: "https://docs.docker.com/"
---
DevOps conecta desenvolvimento e operação por automação, feedback e responsabilidade compartilhada. O objetivo é entregar com segurança e recuperar rápido.

## Pipeline
Lint, testes, build, artefatos e deploy devem ter etapas claras. Veja [CI/CD com GitHub Actions e Docker](/artigos/pipelines-cicd-github-actions-docker/).

## Ambientes
Separe desenvolvimento, teste e produção; trate secrets por mecanismo seguro e use permissões mínimas.

## Observabilidade
Monitore logs, métricas, traces e SLOs. Consulte [observabilidade web](/artigos/observabilidade-para-aplicacoes-web/).

## Entrega segura

Automatize build, testes, validações e publicação. Use ambientes separados, segredos protegidos, artefatos versionados e uma condição clara para interromper ou reverter o deploy.

## Recuperar rápido vale mais que nunca falhar

A métrica que melhor descreve um bom sistema de entrega não é "quantas vezes falhou", e sim "quão rápido voltou ao normal". Perseguir zero falhas leva a processos lentos e medrosos; investir em recuperação rápida leva a entregas frequentes e seguras. Na prática: automatize o pipeline (lint, testes, build, deploy) para que a mudança seja pequena e rastreável, separe ambientes, proteja secrets, versione artefatos e — o mais importante — tenha um caminho de rollback testado. Um deploy que não pode ser revertido em minutos não é um deploy seguro, por mais testes que tenha passado antes.

## Um pipeline mínimo, etapa por etapa

Um pipeline de entrega não precisa ser complexo para ser seguro. O mínimo útil tem cinco etapas em ordem: lint (estilo e erros óbvios), testes (o comportamento esperado), build (o artefato que vai rodar), publicação em um ambiente de teste e, só então, deploy em produção com uma condição clara de parada. Cada etapa que falha interrompe as seguintes, então um erro é pego cedo e barato. Separe os ambientes de desenvolvimento, teste e produção, trate secrets por um mecanismo seguro com permissões mínimas e versione os artefatos para saber exatamente o que está em produção. O guia de [CI/CD com GitHub Actions e Docker](/artigos/pipelines-cicd-github-actions-docker/) monta esse pipeline na prática, e a [observabilidade](/artigos/observabilidade-para-aplicacoes-web/) fecha o ciclo mostrando o que acontece depois do deploy.

## O que observar em produção

Observabilidade útil não é acumular gráficos, é responder rápido a "está tudo bem?". Quatro sinais cobrem a maioria dos problemas: latência (as respostas estão dentro do esperado?), tráfego (o volume mudou de forma anormal?), erros (a taxa de falha subiu?) e saturação (algum recurso — CPU, memória, fila — está perto do limite?). Defina um alvo para cada um (um SLO) e alerte quando ele for ameaçado, não depois que o cliente reclamou. Um alerta que ninguém sabe o que fazer com ele é ruído; um bom alerta aponta o sinal, o impacto e o próximo passo.
