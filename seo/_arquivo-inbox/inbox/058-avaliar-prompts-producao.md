---
title: "Como avaliar prompts em produção"
description: "Método para medir prompts com casos reais, critérios de qualidade, regressão e observabilidade."
author: "Redação"
category: "Engenharia de Prompt"
silo: "ia"
cluster: "Prompt"
primaryKeyword: "avaliar prompts em produção"
status: "needs-evidence"
sources:
  - "https://platform.openai.com/docs/guides/evals"
---

# Como avaliar prompts em produção

Prompt em produção é parte de um sistema. Alterá-lo sem avaliação pode mudar custo, tom, formato e segurança de uma só vez.

## Crie uma avaliação

Colete exemplos anonimizados, defina saída esperada e use uma rubrica para precisão, completude, estilo e segurança. Inclua casos difíceis e respostas que devem ser recusadas.

## Controle de mudanças

Versione prompt, modelo, parâmetros e ferramentas. Rode uma amostra de regressão antes do rollout e faça lançamento gradual quando o impacto for relevante.

## Observabilidade

Acompanhe falhas, latência, custo, feedback e distribuição de entradas. Alertas devem apontar mudança de comportamento, não apenas indisponibilidade.

> Revisão pendente: anexar esquema de dataset e métricas com fontes técnicas.
