---
title: "Engenharia de prompt: o que é e como aplicar no trabalho técnico"
description: "Aprenda a estruturar prompts com contexto, restrições, exemplos, formato de saída e critérios de avaliação para tarefas técnicas."
slug: "/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/"
type: "guia"
author: "gabriel-barboza"
category: "Engenharia de Prompt"
silo: "ia"
cluster: "Prompt"
primaryKeyword: "o que é engenharia de prompt"
status: "needs-evidence"
sources:
  - "https://platform.openai.com/docs/guides/prompt-engineering"
  - "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
---

# Engenharia de prompt: o que é e como aplicar no trabalho técnico

Engenharia de prompt é o processo de transformar uma tarefa em uma instrução clara, testável e adequada ao modelo usado. Um prompt melhor não garante uma resposta verdadeira; ele reduz ambiguidades, define o formato esperado e facilita a avaliação do resultado. As orientações oficiais da [OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) e da [Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) tratam prompts como parte de um processo de especificação e avaliação, não como uma fórmula mágica.

## O que um prompt bem projetado resolve

Um prompt deve ajudar o modelo a entender quatro coisas: o que precisa ser feito, qual contexto está disponível, quais limites devem ser respeitados e como a resposta será avaliada. Sem isso, a mesma solicitação pode produzir respostas inconsistentes.

O objetivo não é escrever a instrução mais longa possível. É fornecer informação suficiente para reduzir decisões implícitas e tornar o resultado comparável entre execuções.

## Os seis blocos de uma instrução testável

### 1. Tarefa

Use um verbo observável: classificar, resumir, extrair, comparar, revisar ou gerar. Evite instruções vagas como “faça algo bom”.

### 2. Contexto

Informe para quem é a resposta, quais dados podem ser usados e quais informações estão fora do escopo.

### 3. Restrições

Defina limites de tamanho, linguagem, fontes, segurança ou formato. Restrições devem ser verificáveis.

### 4. Exemplos

Quando a tarefa tiver padrão específico, exemplos de entrada e saída ajudam a reduzir interpretações diferentes. O exemplo precisa representar o caso real, não apenas o caso perfeito.

### 5. Formato de saída

Se o resultado será processado por software, descreva campos, tipos e regras de preenchimento. Um formato estruturado torna os erros mais fáceis de detectar.

### 6. Critério de aceitação

Explique como saberemos que a resposta está correta. Se o modelo não tiver evidência suficiente, a saída deve declarar a incerteza em vez de inventar.

## Exemplo de transformação

Uma instrução vaga seria: “Analise este artigo”. Uma versão mais útil seria: “Identifique a tese, liste três afirmações verificáveis, associe cada uma a uma fonte fornecida e marque como ‘não verificada’ qualquer afirmação sem evidência. Responda em uma tabela com afirmação, fonte e status”.

A segunda versão não elimina o erro, mas define um procedimento de análise que pode ser testado e revisado.

## Como avaliar um prompt

Monte um conjunto pequeno de casos: exemplos comuns, entradas incompletas, casos ambíguos e casos que deveriam ser recusados. Compare a resposta com uma rubrica e registre modelo, versão, prompt, dados e custo.

Um prompt só deve ser considerado melhor quando melhora o resultado sem aumentar o custo ou o risco de forma desproporcional.

## Erros frequentes

- pedir conhecimento atualizado sem fornecer fonte;
- misturar várias tarefas sem definir prioridade;
- exigir precisão sem explicar o que conta como correto;
- usar exemplos que não representam o uso real;
- confiar no tom confiante como prova de qualidade.

## Exemplo de prompt operacional

Em vez de escrever “resuma este documento”, especifique a tarefa:

```text
Tarefa: resumir o documento para uma pessoa que precisa decidir se deve aprovar o projeto.
Contexto: preserve riscos, dependências, custos e decisões pendentes.
Formato: quatro tópicos, cada um com no máximo duas frases; termine com uma recomendação e o nível de confiança.
Regra: não invente dados. Quando a informação não estiver no documento, escreva “não informado”.
```

Esse formato torna a saída mais fácil de comparar e revisar. Ainda assim, o resultado precisa ser conferido contra o documento original.

## Checklist de um prompt pronto

- o objetivo está escrito como uma ação observável;
- o contexto necessário foi separado da instrução;
- o formato da resposta é verificável;
- há regra para incerteza e dados ausentes;
- existem exemplos representativos;
- o prompt foi testado com entradas normais e difíceis.

## Próximo passo

Veja a [trilha de Engenharia de Prompt](/ia/engenharia-de-prompt/), pratique com [técnicas e exemplos](/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/) e aprenda a [avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

> Revisão pendente: validar exemplos com modelos identificados e adicionar fontes primárias.
