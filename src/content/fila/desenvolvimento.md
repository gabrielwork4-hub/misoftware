---
title: "Desenvolvimento de software: arquitetura e entrega prática"
description: "Organize arquitetura, front-end, back-end, DevOps e qualidade para construir e entregar software confiável."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "pilar"
canonicalPath: "/desenvolvimento/"
primaryKeyword: "desenvolvimento de software"
draft: true
sources:
  - "https://12factor.net/"
  - "https://martinfowler.com/articles/practical-test-pyramid.html"
  - "https://docs.github.com/en/get-started/using-git/about-git"
---

Desenvolvimento de software é um sistema de decisões: entender o problema, modelar dados, escolher arquitetura, escrever código, testar, entregar e observar. Quando essas etapas ficam separadas, o time descobre tarde que uma decisão aparentemente local criou custo de manutenção, risco operacional ou dificuldade de recuperação.

## O mapa do trabalho

Comece pela mudança que precisa ser entregue e pelo risco de ela falhar. A partir daí, percorra o ciclo:

1. requisito e critério de aceite;
2. arquitetura e trade-offs;
3. contrato de dados e integração;
4. implementação pequena e revisável;
5. testes proporcionais ao risco;
6. deploy reproduzível;
7. logs, métricas e alertas;
8. feedback e evolução.

O ciclo não precisa ser pesado em toda alteração. Uma correção de texto e uma mudança em pagamentos não merecem o mesmo nível de controle. O importante é tornar a decisão proporcional e explícita.

## Escolha a trilha certa

### Arquitetura

Use esta trilha quando o problema é separar responsabilidades, definir limites, escolher comunicação ou registrar consequências. Um diagrama não substitui uma decisão: registre também alternativas descartadas e o motivo.

### Front-end

Comece pela experiência, estados de carregamento e erro, acessibilidade e contrato com o back-end. Performance é uma propriedade do fluxo inteiro, não apenas do bundle.

### Back-end

Defina entrada, saída, autenticação, autorização, validação, timeouts, retries, idempotência e comportamento de indisponibilidade. Uma API útil também explica seus erros.

### DevOps

Automatize validação, build e publicação com artefatos rastreáveis. O modelo [Twelve-Factor](https://12factor.net/) é uma referência para configuração, logs, dependências e ambientes, mas deve ser adaptado ao contexto do sistema.

### Qualidade

Teste a pirâmide de riscos: muitos testes rápidos para regras locais, testes de integração para contratos e poucos testes de ponta a ponta para fluxos críticos. A [practical test pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) ajuda a discutir equilíbrio, não a prescrever uma quantidade universal.

## Uma mudança pequena, entregue com segurança

Considere adicionar uma validação em uma API. Antes do código, escreva entradas aceitas, inválidas e extremas. Depois implemente a regra no domínio, acrescente testes unitários e de integração, atualize o contrato, revise o tratamento de erro e publique atrás de uma forma de rollback.

Após o deploy, confirme logs e métricas do caminho alterado. Se a validação bloquear casos legítimos, o time precisa conseguir identificar a entrada, reverter a versão ou desativar a mudança sem editar dados manualmente.

## Colaboração e rastreabilidade

Versionamento registra quem mudou o quê, quando e por quê. No fluxo com Git, branches e pull requests permitem revisar uma mudança antes de integrá-la. A documentação do [GitHub sobre Git](https://docs.github.com/en/get-started/using-git/about-git) explica o modelo de histórico e colaboração; a prática do time deve definir revisão, proteção de branch e convenções.

## Checklist de entrega

- requisito e critério de aceite compreendidos;
- risco e impacto identificados;
- contrato e validações definidos;
- testes adequados ao risco executados;
- revisão de código concluída;
- logs e métricas disponíveis;
- deploy reproduzível;
- rollback ou recuperação documentados;
- mudança observada depois da publicação.

## Próximo passo

Escolha a decisão que está bloqueando o trabalho atual e entre pela trilha de [arquitetura](/desenvolvimento/arquitetura/), [front-end](/desenvolvimento/frontend/), [back-end](/desenvolvimento/backend/), [DevOps](/desenvolvimento/devops/) ou [qualidade](/desenvolvimento/qualidade/). O objetivo do silo é reduzir incerteza em cada etapa, não adicionar cerimônia.
