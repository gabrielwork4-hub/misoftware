---
title: "Pirâmide de testes na prática: proporção por risco"
description: "O que são testes de unidade, integração e ponta a ponta, como equilibrar a proporção por risco e evitar testes lentos e frágeis."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "Qualidade"
draft: false
sources:
  - label: "martinfowler.com"
    url: "https://martinfowler.com/articles/practical-test-pyramid.html"
  - label: "google.github.io"
    url: "https://google.github.io/eng-practices/"
---
A pirâmide de testes é uma heurística simples: muitos testes rápidos e isolados na base, menos testes amplos e caros no topo. Não é uma regra fixa nem uma meta de cobertura — é uma forma de equilibrar duas coisas em tensão, feedback rápido e confiança no sistema inteiro. Entender o porquê de cada camada evita os dois extremos que custam caro: testar de menos e quebrar em produção, ou testar de mais no lugar errado e ter uma suíte lenta e frágil que ninguém confia.

## As três camadas

**Testes de unidade** verificam uma peça isolada — uma função, uma regra de negócio — sem tocar banco, rede ou outros módulos. São rápidos (milissegundos), estáveis e baratos de manter. Formam a base porque dão o feedback mais imediato: um erro de lógica aparece em segundos.

**Testes de integração** verificam peças trabalhando juntas — o código com o banco, com uma fila, com uma API. São mais lentos e mais sujeitos a falha por causa das dependências, mas pegam o que a unidade não vê: contratos entre componentes, queries erradas, serialização.

**Testes de ponta a ponta (E2E)** exercitam um fluxo completo pela interface real, como um usuário faria. Dão a maior confiança de que "funciona de verdade" e são os mais lentos, caros e propensos a intermitência (flakiness). Ficam no topo — poucos, nas jornadas que não podem quebrar.

## Escolha a camada pelo que você quer garantir

| Você quer garantir… | Camada |
|---|---|
| Uma regra de negócio está correta | Unidade |
| Dois componentes se entendem (código ↔ banco/API) | Integração |
| Uma jornada crítica funciona de ponta a ponta | E2E |

Testar uma regra de negócio via E2E é lento e frágil; testar um fluxo completo só com unidades dá falsa confiança. Cada garantia tem a camada mais barata que a entrega.

## Proporção por risco, não por dogma

A "pirâmide" descreve a proporção típica, mas a decisão real é de risco: teste com mais profundidade o que é crítico, irreversível ou difícil de observar em produção — pagamento, autenticação, perda de dados. Um formulário secundário não merece a mesma cobertura que o checkout. Meça, além da cobertura, três coisas que dizem se a suíte está saudável: o tempo total (feedback lento é ignorado), o flakiness (testes que falham sem motivo destroem a confiança em todos) e o custo de manutenção (testes que quebram a cada refatoração podem estar acoplados demais ao "como", não ao "o quê").

## Ordene por velocidade no pipeline

Rode primeiro o que dá feedback rápido — unidade e lint — e só depois as camadas caras. Bloqueie a publicação quando falhas relevantes permanecerem, mas não deixe uma jornada E2E intermitente travar todo commit; separe-a numa etapa própria. O objetivo é que o desenvolvedor saiba em minutos se quebrou algo básico, e o merge só aconteça com as garantias que importam verdes.

## Anti-padrão: testar o "como" em vez do "o quê"

O teste que mais atrapalha é o que se acopla à implementação. Quando um teste verifica os passos internos — que tal função foi chamada nesta ordem, com estes argumentos — ele quebra a cada refatoração, mesmo quando o comportamento continua correto. O resultado é uma suíte que pune a melhoria do código em vez de proteger o usuário. Teste o comportamento observável: dada esta entrada, o resultado é este; dado este erro, a resposta é aquela. Um bom teste sobrevive a uma refatoração que não muda o comportamento e falha quando o comportamento muda. Se ele faz o contrário, está testando o "como", não o "o quê".

## Próximo passo

Testes andam com [revisão de código com IA sem perder controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/) e rodam dentro do [pipeline de CI/CD](/artigos/pipelines-cicd-github-actions-docker/). Contexto no [hub de qualidade](/desenvolvimento/qualidade/).
