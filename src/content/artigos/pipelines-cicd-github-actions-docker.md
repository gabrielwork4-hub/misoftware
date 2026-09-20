---
title: "Pipelines CI/CD com GitHub Actions e Docker"
description: "Como montar um pipeline confiável com GitHub Actions e Docker: etapas, cache, segurança de secrets, imagens mínimas e rollback."
pubDate: 2026-02-19
updatedDate: 2026-09-20
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "DevOps"
draft: false
sources:
  - label: "docs.github.com"
    url: "https://docs.github.com/en/actions"
  - label: "docs.docker.com"
    url: "https://docs.docker.com/build/"
---
Um pipeline de CI/CD bem feito tem um objetivo simples: tornar cada mudança pequena, verificada e reversível. Ele executa as validações antes do deploy e deixa rastro suficiente para você saber exatamente o que foi publicado e como voltar atrás. GitHub Actions orquestra as etapas; Docker empacota a aplicação de forma reproduzível. Este guia mostra como montá-los sem os erros que transformam o pipeline num gargalo ou num risco de segurança.

## As etapas, em ordem

Um pipeline mínimo e útil tem uma sequência clara, onde cada etapa que falha interrompe as seguintes:

1. **Lint e formatação** — pega erros óbvios em segundos, antes de gastar tempo com testes.
2. **Testes** — a rede de segurança do comportamento; separe os rápidos dos lentos.
3. **Build** — compila e gera o artefato.
4. **Empacotamento (Docker)** — produz uma imagem imutável e versionada.
5. **Deploy** — publica, com uma condição clara de parada e rollback.

Rode em paralelo o que é independente (lint e testes de pacotes diferentes) e em série o que tem dependência. O objetivo é feedback rápido: um pipeline que leva 40 minutos para dizer que o lint falhou treina a equipe a ignorá-lo.

## Docker: imagens mínimas e reproduzíveis

Uma boa imagem é pequena, previsível e sem excesso. Use builds multi-stage para não carregar ferramentas de compilação na imagem final, parta de uma base mínima, e fixe as versões — tanto da imagem base quanto das dependências. Aproveite o cache de camadas ordenando o Dockerfile do que muda menos (dependências) para o que muda mais (código), para que um commit de código não invalide o cache das dependências. Rode um scan de vulnerabilidades na imagem como parte do pipeline.

## Segurança: o erro mais comum em pipelines

Pipelines são um alvo porque têm acesso a segredos e a produção. Três regras que evitam a maioria dos incidentes:

- **Fixe as versões das actions** por SHA, não por tag móvel — uma tag pode ser reapontada para código malicioso.
- **Limite as permissões do token** ao mínimo necessário (`permissions:` restrito), em vez do padrão amplo.
- **Nunca imprima segredos** em log e prefira identidade de curta duração (OIDC) a chaves de longa duração guardadas como secret.

## Artefatos imutáveis e rollback

Publique artefatos imutáveis — uma imagem com uma tag única (o SHA do commit, por exemplo) que nunca é sobrescrita. Isso garante que "a versão que está em produção" seja uma coisa exata e reproduzível. Antes de qualquer deploy, defina três coisas: qual é o artefato anterior, qual a condição que dispara o rollback e quem é o responsável. Um deploy que não pode ser revertido em minutos não é seguro, por mais testes que tenha passado.

## Mantenha o feedback útil

Separe o pipeline rápido (lint, testes de unidade — roda em todo push) das verificações demoradas (testes de integração pesados, scan completo — roda no merge ou agendado). Assim, o desenvolvedor recebe o sinal essencial em minutos e as checagens caras não travam cada commit.

## Erro comum: o pipeline lento que todos ignoram

Um pipeline que leva quarenta minutos para dar o primeiro sinal treina a equipe a fazer outra coisa enquanto espera — e a ignorar o resultado quando ele chega. O feedback que não é rápido não é usado. A correção não é cortar testes, é ordená-los: rode primeiro o que falha rápido e barato (lint, testes de unidade), em paralelo quando possível, e deixe as verificações caras (integração pesada, scan completo) para uma etapa posterior ou agendada. Cache de dependências e de camadas Docker corta boa parte do tempo. Um pipeline que responde o essencial em poucos minutos é usado; um que demora é contornado.

## Próximo passo

O pipeline entrega; a [observabilidade para aplicações web](/artigos/observabilidade-para-aplicacoes-web/) mostra o que acontece depois. Para a estratégia de testes que roda no pipeline, veja a [pirâmide de testes na prática](/artigos/piramide-de-testes-pratica/). Contexto no [hub de DevOps](/desenvolvimento/devops/).
