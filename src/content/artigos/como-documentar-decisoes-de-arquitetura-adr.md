---
title: "Como documentar decisões de arquitetura com ADR"
description: "O que é um ADR, quais campos ele tem, quando escrever um e como manter o histórico de decisões sem apagar o passado."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "Arquitetura"
draft: false
sources:
  - label: "adr.github.io"
    url: "https://adr.github.io/"
  - label: "martinfowler.com"
    url: "https://martinfowler.com/articles/architectural-decision-records.html"
---
Um ADR (Architecture Decision Record) é um registro curto de por que uma decisão de arquitetura foi tomada: qual era o contexto, quais alternativas existiam e quais consequências foram aceitas. Ele resolve um problema que todo time conhece — seis meses depois, ninguém lembra por que o sistema foi feito daquele jeito, e a decisão é ou repetida em discussão, ou desfeita sem entender o que se perde. O ADR preserva o raciocínio, não só o resultado.

## Por que o "porquê" importa mais que o "o quê"

O código mostra o que foi decidido; ele não mostra o que foi rejeitado nem por quê. Sem esse contexto, uma equipe futura olha uma escolha estranha e tem duas reações igualmente ruins: mantê-la por medo ("deve ter um motivo") ou removê-la por ignorância ("isso não faz sentido") — e descobre o motivo quando o problema que ela evitava volta. O ADR documenta o trade-off aceito, para que a decisão possa ser revista com conhecimento, não com adivinhação.

## O que um ADR contém

Um ADR é deliberadamente curto — uma página. Os campos essenciais:

- **Título:** a decisão em uma linha ("Usar CMS headless para o site editorial").
- **Status:** proposto, aceito, substituído.
- **Contexto:** a situação e as forças em jogo (requisitos, restrições, prazos) que tornaram a decisão necessária.
- **Decisão:** o que foi escolhido, de forma direta.
- **Alternativas consideradas:** o que mais estava na mesa e por que não foi escolhido — a parte que mais gente esquece e que mais valor tem depois.
- **Consequências:** o que a decisão torna mais fácil e o que torna mais difícil; os custos aceitos.
- **Data.**

Escreva para uma pessoa que não estava na sala e vai precisar revisar a escolha no futuro.

## Quando escrever um

Nem toda decisão merece um ADR — só as que são caras de reverter ou que alguém vai questionar depois: escolha de banco, de framework, de padrão de integração, de modelo de dados. A regra prática: se a decisão levou mais de uma conversa para ser tomada, ou se envolve um trade-off não óbvio, ela merece um ADR. Decisões triviais e facilmente reversíveis não precisam.

## Um exemplo

Uma decisão sobre adotar CMS headless registraria: o **contexto** (equipe editorial crescendo, necessidade de preview e de workflow de revisão), a **decisão** (headless + site estático), as **alternativas** (CMS tradicional, conteúdo em arquivos Markdown) com o motivo de cada rejeição, e as **consequências** (ganho de independência da apresentação e de fluxo editorial; custo de manter um CMS e orquestrar um build). Quem chegar depois entende não só o que foi feito, mas o que se abriu mão.

## Nunca apague o histórico

Quando uma decisão muda, não edite nem apague o ADR antigo: crie um novo que o substitui e marque o anterior como "substituído por ADR-X". O histórico de decisões é um ativo — mostra como o sistema evoluiu e por quê. Apagar o passado é jogar fora o contexto que evita repetir erros.

## Mantenha os ADRs junto do código

Um ADR só cumpre a função se for encontrado quando alguém questiona a decisão — o que quase sempre acontece com o código aberto na frente. Por isso o melhor lugar para os ADRs é no próprio repositório, versionados junto do código (por convenção, uma pasta `docs/adr/` com arquivos numerados). Assim eles evoluem no mesmo fluxo de revisão das mudanças que descrevem, e ficam a um clique de quem lê o código. Um ADR perdido num wiki que ninguém abre é quase tão inútil quanto não ter escrito. Mantê-los perto do código também torna natural criar um novo ADR na mesma pull request que muda uma decisão.

## Próximo passo

ADRs sustentam as escolhas do [hub de arquitetura](/desenvolvimento/arquitetura/); um caso concreto é a [arquitetura de CMS headless para site editorial](/artigos/arquitetura-cms-headless-para-site-editorial/).
