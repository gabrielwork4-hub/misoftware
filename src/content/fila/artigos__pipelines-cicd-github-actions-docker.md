---
title: "CI/CD com GitHub Actions e Docker: guia"
description: "Como construir um pipeline CI/CD confiável com GitHub Actions e Docker: etapas na ordem certa, imagens mínimas, secrets protegidos e deploy com rollback."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/pipelines-cicd-github-actions-docker/"
primaryKeyword: "pipelines CI/CD GitHub Actions Docker"
draft: false
sources:
  - "https://docs.github.com/en/actions"
  - "https://docs.docker.com/build/"
---

Um pipeline de CI/CD confiável executa as validações certas antes do deploy e deixa rastros suficientes para entender o que foi publicado. O objetivo não é automatizar por automatizar — é dar feedback rápido a quem escreve código e evitar que uma mudança quebrada chegue à produção sem que ninguém veja. GitHub Actions orquestra as etapas; Docker garante que o que roda no CI é o que roda em produção.

## Etapas na ordem que dá feedback rápido

A ordem importa: coloque primeiro o que falha rápido e barato. Um pipeline típico:

1. **lint e checagem de tipos** — segundos, pega erros óbvios;
2. **testes unitários** — rápidos, rodam a cada push;
3. **build** — confirma que compila e empacota;
4. **testes de integração / E2E** — mais lentos, só depois dos rápidos passarem;
5. **deploy** — apenas com tudo verde.

Separar testes rápidos de verificações demoradas mantém o feedback útil — a documentação do [GitHub Actions](https://docs.github.com/en/actions) cobre jobs paralelos e dependências entre etapas. Essa distribuição conversa diretamente com a [pirâmide de testes](/artigos/piramide-de-testes-pratica/).

## Docker: reprodutível e mínimo

Use [build do Docker](https://docs.docker.com/build/) com cache de camadas para acelerar, imagens base mínimas para reduzir superfície de ataque, versões fixadas (não `latest`) para reprodutibilidade e scan de vulnerabilidades como etapa do pipeline. Uma imagem menor e fixada é mais rápida de baixar e mais fácil de auditar.

## Segurança do pipeline

O pipeline tem acesso a segredos e a produção — trate-o como superfície crítica:

- **fixe versões** de actions e imagens (evite tag móvel);
- **limite as permissões** do token ao mínimo necessário;
- **nunca imprima segredos** em log;
- prefira **identidade de curta duração** (OIDC) a credenciais estáticas;
- publique **artefatos imutáveis** e versionados.

## Deploy com rollback definido

Antes de automatizar a entrega, defina o artefato anterior para onde voltar, a condição que dispara o rollback e o responsável por decidir. Deploy sem caminho de volta é aposta. Depois do deploy, confirme pela [observabilidade](/artigos/observabilidade-para-aplicacoes-web/) que o sistema melhorou — não presuma.

## Próximo passo

Este artigo é a implementação do [hub de DevOps](/desenvolvimento/devops/); combine com a [pirâmide de testes](/artigos/piramide-de-testes-pratica/) para decidir o que roda em cada etapa e com [observabilidade](/artigos/observabilidade-para-aplicacoes-web/) para fechar o ciclo.
