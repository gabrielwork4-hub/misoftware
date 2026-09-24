---
title: "Como avaliar prompts de IA em produção"
description: "Monte uma avaliação contínua de prompts com dataset, métricas, versionamento, custo, segurança e revisão humana."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Engenharia de Prompt"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/como-avaliar-prompts-em-producao/"
primaryKeyword: "avaliar prompts em produção"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/evals"
  - "https://platform.openai.com/docs/guides/prompt-engineering"
  - "https://www.nist.gov/itl/ai-risk-management-framework"
---

Um prompt que parece bom em três exemplos pode falhar quando muda o idioma, o formato do dado ou a intenção do usuário. Em produção, a avaliação deve comparar versões do prompt contra casos reais, medir a saída e registrar custo, latência e riscos.

## Monte o dataset certo

Colete amostras representativas com consentimento e remova dados pessoais antes de armazenar. Inclua casos frequentes, limites conhecidos, entradas vazias, ambiguidades e tentativas de instrução indevida. Para cada exemplo, registre o comportamento esperado ou uma rubrica que um avaliador consiga aplicar.

Separe um conjunto de desenvolvimento de um conjunto de validação. Se todos os exemplos forem usados para ajustar o prompt, a nota deixa de representar o comportamento em situações novas. Versione dataset, critérios e modelo junto com o prompt.

## Escolha métricas observáveis

Defina a métrica conforme a tarefa. Extração pode exigir schema válido e campos completos; classificação pode medir precisão por classe; resposta aberta pode usar uma rubrica de factualidade, relevância e tom. Meça também tokens, latência, custo, recusas corretas e taxa de fallback.

Não confunda fluência com correção. Para fatos importantes, use referência verificável ou revisão humana. Em avaliações automáticas, calibre o avaliador com exemplos e faça amostragem manual para detectar notas inconsistentes.

## Versione e compare

Trate prompt como código: nomeie versões, descreva a mudança e guarde o resultado da suíte. Rode a versão atual e a candidata no mesmo conjunto, com parâmetros e modelo registrados. Uma melhoria média pode esconder regressão em um segmento; compare por intenção, idioma, cliente e nível de risco.

Faça rollout gradual quando a aplicação permitir. Mantenha uma forma de voltar ao prompt anterior e registre qual versão gerou cada resposta. Não edite um prompt em produção sem deixar o motivo e o horário da mudança.

## Observe segurança e deriva

Monitore entradas que tentam sobrescrever instruções, pedir dados fora da permissão ou induzir o modelo a chamar uma ferramenta perigosa. Delimite conteúdo externo, valide saídas no servidor e mantenha a decisão final fora do texto livre quando houver efeito operacional.

Reavalie quando mudar modelo, fonte, idioma, política ou formato de entrada. A distribuição de perguntas também muda com o tempo; uma suíte fixa não substitui amostras recentes e revisão de incidentes.

## Critério de liberação

Libere uma versão somente quando a qualidade mínima, o custo máximo e os limites de segurança estiverem explícitos. Documente casos em que o sistema deve dizer “não sei” e acompanhe as falhas depois do deploy. O objetivo não é encontrar o prompt perfeito, mas criar um ciclo que detecta regressões antes que elas virem problema para o usuário.
