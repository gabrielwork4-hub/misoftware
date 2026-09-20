---
title: "Técnicas de engenharia de prompt com exemplos"
description: "Few-shot, decomposição, saída estruturada e delimitação: quando cada técnica ajuda, com exemplos e o custo de cada uma."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Engenharia de Prompt"
silo: "ia"
tags:
  - "Prompt"
draft: false
sources:
  - label: "platform.openai.com"
    url: "https://platform.openai.com/docs/guides/prompt-engineering"
  - label: "docs.anthropic.com"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
---
Técnica de prompt não é truque: cada uma resolve um tipo específico de ambiguidade, e cada uma tem um custo. Usar a técnica certa reduz o erro; empilhar técnicas sem critério só aumenta o tamanho do prompt, o custo por chamada e a chance de instruções conflitantes. Este guia mostra as quatro técnicas que resolvem a maior parte dos casos, quando cada uma ajuda e o que ela cobra.

## Delimite dados e instrução

O erro mais comum é misturar a instrução com o conteúdo a ser processado, e o modelo confunde os dois — chega a "obedecer" a um texto que era só dado. Separe-os com delimitadores claros:

```text
Instrução: classifique o comentário abaixo como positivo, neutro ou negativo.
Comentário:
"""
{texto do usuário}
"""
```

Custo: quase nenhum. Benefício: alto, e é a primeira defesa contra injeção de prompt. Faça sempre.

## Peça saída estruturada

Se a resposta vai ser lida por software — ou até por você, para comparar —, peça um formato fixo (JSON, tabela) com campos definidos, em vez de texto livre. Isso torna o erro detectável: um campo faltando é óbvio, uma frase ambígua não.

```text
Responda apenas em JSON: {"categoria": "...", "confianca": 0-1, "motivo": "..."}
```

Custo: o modelo às vezes escapa do formato — combine com validação no seu código. Benefício: resultado comparável e processável.

## Use exemplos (few-shot) quando o padrão é difícil de descrever

Quando a tarefa tem um padrão que é mais fácil mostrar do que explicar, inclua um ou dois exemplos de entrada e saída. O exemplo precisa representar o caso real, não o caso perfeito — um exemplo idealizado ensina o modelo a lidar só com o fácil.

Custo: cada exemplo consome contexto (tokens) e pode enviesar o modelo para o formato do exemplo. Use poucos e representativos. Se a instrução direta já funciona, não adicione exemplos.

## Decomponha tarefas complexas

Uma tarefa com várias etapas (extrair, depois comparar, depois recomendar) costuma sair melhor quando você pede as etapas explicitamente, ou até as separa em chamadas distintas. Pedir tudo de uma vez numa instrução vaga produz respostas inconsistentes.

Custo: mais etapas significam mais chamadas ou prompts mais longos — e nem toda tarefa precisa disso. Decomponha quando a tarefa realmente tem partes; não transforme um resumo simples num procedimento de cinco passos.

## Como escolher e ajustar

Comece com o prompt mais simples que pode funcionar e só adicione técnica quando um caso real falhar. Ao ajustar, **mude uma variável por vez** — se você troca a instrução e adiciona exemplos ao mesmo tempo, não saberá o que melhorou. Teste com entradas variadas (normais, incompletas, adversariais), registre as falhas e compare. A técnica que não melhora um caso de teste real não está ajudando, só encompridando o prompt.

## Cuidados de produção

Versione os prompts como código, valide as saídas automaticamente quando possível e mantenha um comportamento de fallback para quando a saída não cumprir o contrato. Nunca coloque segredos ou dados pessoais no prompt sem necessidade — o que entra no prompt pode ser registrado em log ou retido pelo provedor.

## Combinando técnicas sem exagero

As técnicas se somam bem quando cada uma resolve uma ambiguidade diferente. Um prompt maduro de classificação costuma usar três juntas: delimitação (separar o texto do usuário da instrução), saída estruturada (JSON com a categoria) e, se o padrão for sutil, um ou dois exemplos. Isso é combinar com propósito. O exagero é diferente: empilhar cinco técnicas "por garantia" num prompt que a instrução simples já resolvia. O sinal de excesso é um prompt longo cujo resultado não melhora quando você remove uma parte. Teste removendo — se a qualidade se mantém sem a técnica, ela era peso, não ajuda.

## Próximo passo

Para a fundação, veja [o que é engenharia de prompt](/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/); para levar à produção, [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/). Contexto na [trilha de engenharia de prompt](/ia/engenharia-de-prompt/).
