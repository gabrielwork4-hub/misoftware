---
title: "DevOps: CI/CD, deploy e observabilidade"
description: "Aprenda DevOps com CI/CD, ambientes, secrets, cache, deploy, rollback e observabilidade para entregar software com segurança."
slug: "/desenvolvimento/devops/"
type: "hub"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "DevOps"
primaryKeyword: "DevOps e entrega contínua"
status: "needs-evidence"
sources:
  - "https://docs.github.com/en/actions"
  - "https://docs.docker.com/"
---
# DevOps: CI/CD, deploy e observabilidade

DevOps conecta desenvolvimento e operação por automação, feedback e responsabilidade compartilhada. O objetivo é entregar com segurança e recuperar rápido.

## Pipeline
Lint, testes, build, artefatos e deploy devem ter etapas claras. Veja [CI/CD com GitHub Actions e Docker](/artigos/pipelines-cicd-github-actions-docker/).

## Ambientes
Separe desenvolvimento, teste e produção; trate secrets por mecanismo seguro e use permissões mínimas.

## Observabilidade
Monitore logs, métricas, traces e SLOs. Consulte [observabilidade web](/artigos/observabilidade-para-aplicacoes-web/).

## Entrega segura

Automatize build, testes, validações e publicação. Use ambientes separados, segredos protegidos, artefatos versionados e uma condição clara para interromper ou reverter o deploy.

> Revisão pendente: adicionar pipeline e procedimento de rollback reproduzíveis.
