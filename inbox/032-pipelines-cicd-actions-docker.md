---
title: "CI/CD com GitHub Actions e Docker: guia"
description: "Construa pipelines CI/CD com GitHub Actions e Docker usando cache, testes paralelos, secrets, deploy e rollback seguro."
slug: "/artigos/pipelines-cicd-github-actions-docker/"
type: "artigo existente"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
cluster: "DevOps"
primaryKeyword: "pipelines CI/CD GitHub Actions Docker"
status: "needs-evidence"
sources:
  - "https://docs.github.com/en/actions"
  - "https://docs.docker.com/build/"
---
# CI/CD com GitHub Actions e Docker: guia

Um pipeline confiável executa validações antes do deploy e deixa rastros suficientes para entender o que foi publicado.

## Etapas
Execute lint, testes, build e empacotamento em sequência ou paralelo conforme dependências.

## Docker
Use cache de camadas, imagens mínimas, versões fixadas e scan de vulnerabilidades.

## Segurança
Restrinja permissions, proteja secrets e prefira identidade de curta duração quando disponível.

## Rollback
Defina artefato anterior, condição de rollback e responsável. Veja o [hub DevOps](/desenvolvimento/devops/).

## Proteções do pipeline

Fixe versões de actions e imagens, limite permissões do token, não imprima segredos e publique artefatos imutáveis. Separe testes rápidos de verificações demoradas para manter feedback útil.

> Revisão pendente: atualizar workflow existente com versões testadas.
