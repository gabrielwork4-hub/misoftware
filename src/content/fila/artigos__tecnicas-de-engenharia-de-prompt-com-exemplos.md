---
title: "Técnicas de engenharia de prompt com exemplos"
description: "Técnicas práticas de engenharia de prompt — estrutura, exemplos, decomposição e saídas verificáveis — com quando usar cada uma e como medir se funcionou."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Engenharia de Prompt"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/"
primaryKeyword: "técnicas de engenharia de prompt"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/prompt-engineering"
  - "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
---

Um bom prompt reduz ambiguidade e deixa claro como a resposta será usada. A técnica existe para servir a esse objetivo — não para produzir instruções longas por si sós. Prompt inflado costuma piorar o resultado: enterra o pedido real em regras que competem entre si. Este guia reúne técnicas com o critério que mais importa: quando cada uma vale a pena e como saber se ela melhorou algo.

Se você ainda quer o panorama do tema, comece por [o que é engenharia de prompt e como aplicar](/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/). Aqui o foco é a prática.

## Estrutura: separe tarefa, contexto e formato

A técnica base é declarar cinco coisas explicitamente: a tarefa, o contexto, as restrições, os critérios de qualidade e o formato de saída. Separar os dados da instrução evita que o modelo confunda o que deve processar com o que deve seguir.

> Tarefa: classifique o chamado abaixo em uma categoria.
> Categorias permitidas: cobrança, técnico, cancelamento.
> Regras: se não houver certeza, use "indefinido". Responda só com a categoria.
> Chamado: "minha fatura veio com valor errado este mês"

O ganho não está em ser educado com o modelo, está em remover interpretações possíveis. Quando o formato é difícil de descrever em palavras, mostre em vez de explicar.

## Exemplos (few-shot): mostre o padrão

Quando a saída tem um formato específico ou um estilo difícil de verbalizar, incluir de um a três exemplos de entrada e saída ensina o padrão melhor que qualquer descrição. Use exemplos quando:

- o formato precisa ser exato (JSON, planilha, marcação);
- há um estilo ou tom a imitar;
- a tarefa tem casos ambíguos que você quer padronizar.

Evite exemplos quando a tarefa é simples — eles gastam contexto e podem enviesar a resposta para os casos mostrados. Garanta que os exemplos cubram também o caso de recusa ("dado insuficiente"), senão o modelo aprende que sempre deve responder.

## Decomposição: quebre o raciocínio em etapas

Para tarefas com várias etapas dependentes, pedir a resposta direta produz erros silenciosos. Peça que o modelo trabalhe por partes — extrair os dados, depois calcular, depois formatar — ou divida em prompts encadeados, cada um com uma responsabilidade. Prompts menores e verificáveis são mais fáceis de depurar que um único prompt gigante que ora acerta, ora não.

## Chain-of-thought: peça o raciocínio quando ele reduz erro

Chain-of-thought (cadeia de raciocínio) é pedir que o modelo exponha os passos antes da resposta final, em vez de saltar direto para a conclusão. Em tarefas que exigem raciocínio — cálculo, lógica em várias etapas, decisões com condições — tornar o raciocínio explícito costuma reduzir erros, porque o modelo não precisa resolver tudo "de cabeça" em um único passo.

O custo é real: mais tokens, mais latência e uma resposta mais longa para processar. Por isso a técnica **não** compensa em tarefas simples (classificar, extrair um campo), onde só infla a saída. Dois cuidados práticos:

- **separe o raciocínio da resposta final** — peça o passo a passo e, depois, um campo estruturado com a conclusão, para o seu código consumir só o que precisa;
- em **modelos de raciocínio** mais recentes, que já pensam internamente antes de responder, pedir cadeia de raciocínio explícita pode ser redundante — teste se ajuda ou apenas encarece.

Como toda técnica deste guia, o critério é o mesmo: chain-of-thought reduziu o erro no seu conjunto de testes? Se não, é só custo.

## Saídas verificáveis: projete para conferir

A técnica mais subestimada é escrever o prompt de forma que a saída possa ser validada por código, não só lida por uma pessoa. Peça um formato estruturado, defina um campo de confiança ou de "não sei", e valide o retorno antes de usar. Isso transforma "parece certo" em "passou na verificação".

As referências oficiais de [prompt engineering da OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) e da [Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) trazem variações dessas técnicas, mas o critério de escolha é sempre o mesmo: a técnica reduziu erro no seu conjunto de testes?

## Itere com uma variável por vez

Comece simples, rode contra entradas variadas e registre as falhas. Ao ajustar, mude uma coisa de cada vez — assim você sabe o que realmente melhorou o resultado, em vez de acumular mudanças que se anulam. Em produção, versione os prompts, valide as saídas automaticamente quando possível e mantenha um fallback; nunca inclua segredos ou dados pessoais sem necessidade.

## Próximo passo

Definidas as técnicas, o passo seguinte é medir: o guia de [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/) mostra como montar um conjunto de avaliação e acompanhar regressões. Para o contexto do cluster, volte ao hub de [engenharia de prompt](/ia/engenharia-de-prompt/).
