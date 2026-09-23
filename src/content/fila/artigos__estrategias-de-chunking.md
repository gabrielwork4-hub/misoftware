---
title: "Estratégias de chunking para RAG"
description: "Como dividir documentos para RAG: tamanho e sobreposição, chunking por estrutura vs tamanho fixo, o papel dos metadados e como escolher a estratégia medindo a recuperação."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/estrategias-de-chunking/"
primaryKeyword: "estratégias de chunking"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/retrieval"
  - "https://docs.anthropic.com/en/docs/build-with-claude/embeddings"
---

Chunking é a decisão de como quebrar seus documentos em trechos antes de indexá-los — e é, na prática, onde a qualidade de um RAG se ganha ou se perde. Um trecho que corta uma ideia no meio recupera contexto incompleto; um trecho grande demais dilui o que importa e desperdiça contexto. Como o [hub de RAG](/ia/rag/) resume, a cadeia vale pelo elo mais fraco, e o chunking costuma ser esse elo.

## Tamanho e sobreposição

As duas variáveis básicas são o **tamanho** do trecho e a **sobreposição** entre trechos vizinhos:

- **Trechos pequenos** dão recuperação precisa (o vetor representa uma ideia só), mas podem perder o contexto ao redor.
- **Trechos grandes** preservam contexto, mas misturam vários assuntos num vetor só, o que piora a busca por similaridade e aumenta custo.
- **Sobreposição** (repetir um pedaço do fim de um trecho no início do próximo) evita cortar uma ideia exatamente na fronteira — ao custo de alguma redundância no índice.

Não existe número universal. O tamanho certo depende do tipo de documento e do tipo de pergunta; a única forma de saber é medir.

## Divida pela estrutura, não só pelo tamanho

Cortar a cada N caracteres é simples, mas ignora a lógica do documento. Estratégias melhores respeitam a estrutura:

| Estratégia | Como divide | Bom para |
|---|---|---|
| Tamanho fixo | a cada N tokens/caracteres | texto uniforme, baseline rápido |
| Por estrutura | por parágrafo, seção ou heading | documentação, artigos, manuais |
| Recursiva | tenta seções, depois parágrafos, depois frases | conteúdo misto |
| Semântica | agrupa frases por similaridade de significado | texto denso sem estrutura clara |

Para conteúdo com títulos e seções (o caso mais comum em documentação técnica), dividir por estrutura quase sempre supera o tamanho fixo, porque cada trecho corresponde a uma unidade de sentido.

## Metadados são parte do chunk

Um trecho sem procedência é difícil de auditar e de filtrar. Guarde, junto de cada chunk, a origem (documento, seção, versão, data) e qualquer atributo que permita filtrar a busca — por produto, por idioma, por período. Isso habilita recuperação mais precisa e é o que torna possível a citação rastreável que separa um RAG confiável de um gerador de texto convincente.

## Escolha medindo, não adivinhando

Chunking é a variável que mais afeta a recuperação, então trate-a como hipótese a testar. Fixe o resto do pipeline, varie uma estratégia por vez e compare com o conjunto de avaliação — o método está em [como avaliar um sistema RAG](/artigos/como-avaliar-sistema-rag/). Uma mudança de chunking que melhora umas perguntas pode piorar outras; é a medição que revela o trade-off.

## Próximo passo

Com a estratégia de divisão definida, meça o efeito com [como avaliar um sistema RAG](/artigos/como-avaliar-sistema-rag/), monte o fluxo completo no [tutorial de RAG com fontes verificáveis](/tutoriais/rag-com-fontes-verificaveis/) e volte ao hub de [RAG](/ia/rag/).
