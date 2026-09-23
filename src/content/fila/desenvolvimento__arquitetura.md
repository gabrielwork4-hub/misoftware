---
title: "Arquitetura de software: decisões, padrões e trade-offs"
description: "Aprenda a tomar decisões de arquitetura por contexto, registrar alternativas e desenhar sistemas que possam evoluir e ser operados."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "hub"
canonicalPath: "/desenvolvimento/arquitetura/"
primaryKeyword: "arquitetura de software"
draft: false
sources:
  - "https://www.iso.org/standard/50508.html"
  - "https://c4model.com/"
  - "https://12factor.net/"
---

Arquitetura é o conjunto de decisões que define como um sistema evolui, publica dados, responde a falhas e atende seus usuários. Um diagrama pode representar essas decisões, mas não substitui o motivo pelo qual uma alternativa foi escolhida.

## Comece pelo contexto

Antes de escolher padrão ou tecnologia, registre:

- quem usa o sistema e qual resultado espera;
- volume, latência, disponibilidade e crescimento;
- dados sensíveis e obrigações de segurança;
- capacidade da equipe e prazo;
- custo de operar, alterar e desligar a solução;
- falhas que são aceitáveis e falhas que não podem ocorrer.

Uma arquitetura adequada para um protótipo pode ser inadequada para uma operação crítica. A decisão precisa declarar o horizonte: resolver o experimento atual, sustentar o próximo ano ou reduzir uma dívida específica.

## Limites e contratos

Separe responsabilidades que mudam por motivos diferentes. Defina contratos entre módulos e sistemas: entrada, saída, erros, autenticação, versionamento e propriedade dos dados. Um limite bom reduz acoplamento sem esconder dependências importantes.

Para um site editorial, por exemplo, CMS, banco, build, cache, busca e observabilidade formam uma cadeia. O [modelo C4](https://c4model.com/) pode ajudar a comunicar contexto, containers e componentes; ele não decide sozinho onde os limites devem ficar.

## Monólito, módulos ou serviços?

Um monólito modular costuma ser uma escolha eficiente quando o domínio ainda está sendo entendido, a equipe é pequena e a operação distribuída não é necessária. Separar serviços pode fazer sentido por escala, isolamento, autonomia de deploy ou fronteiras organizacionais, mas adiciona rede, observabilidade, consistência e operação.

Não use “microserviços” como sinônimo de arquitetura madura. Compare custo de mudança, falha e operação para o cenário concreto. Uma solução mais simples, com módulos bem definidos, pode oferecer melhor reversibilidade.

## Registre decisões com ADRs

Use [ADRs](/artigos/como-documentar-decisoes-de-arquitetura-adr/) para registrar contexto, decisão, alternativas e consequências. O documento deve permitir que outra pessoa entenda por que a escolha parecia adequada naquele momento e qual sinal faria o time revisá-la.

Um ADR útil contém:

1. problema e restrições;
2. opções consideradas;
3. decisão adotada;
4. consequências positivas e negativas;
5. riscos e gatilhos de revisão;
6. data e responsáveis.

## Operação faz parte da arquitetura

Inclua logs, métricas, alertas, backups, deploy, rollback e manutenção no desenho inicial. O [Twelve-Factor App](https://12factor.net/) oferece princípios para configuração, dependências e logs, mas cada sistema precisa adaptar a prática ao seu contexto.

Pergunte antes da implementação: onde estão os dados? Como detectar degradação? Como restaurar? O que acontece quando uma dependência cai? Quanto custa manter a solução por mês?

## Próximo passo

Escolha uma decisão atual, desenhe alternativas e registre um ADR. Depois avance para [CMS headless](/artigos/arquitetura-cms-headless-para-site-editorial/) e para as trilhas de [back-end](/desenvolvimento/backend/), [DevOps](/desenvolvimento/devops/) e [qualidade](/desenvolvimento/qualidade/). Arquitetura é uma hipótese que deve ser observada e revisada, não uma cerimônia encerrada no primeiro diagrama.
