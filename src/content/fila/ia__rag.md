---
title: "RAG: recuperação aumentada por geração com fontes confiáveis"
description: "Hub sobre RAG: quando usar, os componentes do sistema, onde ele falha e como evoluir da prova de conceito para uma operação com citações auditáveis."
pubDate: "2026-09-22"
author: "redacao"
category: "IA & Modelos"
silo: ia
kind: "hub"
canonicalPath: "/ia/rag/"
primaryKeyword: "RAG"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/retrieval"
  - "https://docs.anthropic.com/en/docs/build-with-claude/embeddings"
---

RAG (recuperação aumentada por geração) permite que um modelo responda usando documentos recuperados no momento da consulta, em vez de depender só do que aprendeu no treinamento. É a abordagem certa quando a resposta precisa refletir conhecimento próprio, atualizado ou auditável — uma base de políticas internas, um catálogo, uma documentação técnica que muda toda semana.

RAG não é a solução para todo problema. Se a informação é estável e cabe no contexto, colocá-la direto no prompt é mais simples. RAG ganha valor quando a base é grande demais para o contexto, muda com frequência ou exige que cada afirmação tenha uma fonte rastreável.

## Componentes do sistema

Um sistema de RAG é uma cadeia, e a qualidade final é limitada pelo elo mais fraco:

1. **Ingestão e limpeza:** extrair texto útil das fontes, remover ruído e duplicatas.
2. **Divisão (chunking):** quebrar documentos em trechos coerentes, com metadados de origem.
3. **Embeddings e índice:** transformar trechos em vetores e armazená-los em um banco vetorial (como pgvector, Chroma ou Pinecone) para busca por similaridade.
4. **Recuperação:** encontrar os trechos mais relevantes para a pergunta.
5. **Reranking:** reordenar os candidatos por relevância real antes de gerar.
6. **Geração com citação:** responder usando os trechos e apontando de onde veio cada afirmação.

Metadados e controle de versão importam tanto quanto o modelo. Sem saber de qual documento e de qual versão veio um trecho, não há como auditar a resposta nem corrigir a fonte.

## Onde o RAG falha

A maioria dos problemas não está no modelo de linguagem, e sim na recuperação:

- **Chunking ruim:** trechos que cortam uma ideia no meio recuperam contexto incompleto.
- **Busca imprecisa:** a pergunta e o documento usam palavras diferentes para a mesma ideia.
- **Documentos desatualizados:** a base contém versões antigas que contradizem as atuais.
- **Contexto excessivo:** enfiar trechos demais dilui o que importa e aumenta custo.
- **Citação sem correspondência:** a resposta cita uma fonte que não sustenta a afirmação — o pior caso, porque cria falsa confiança.

## Como evoluir

Não comece otimizando embeddings. Comece com um conjunto de perguntas reais com respostas conhecidas e meça duas coisas separadamente: a **recuperação** (os trechos certos apareceram? — métricas como *recall@k* ajudam) e a **resposta** (o modelo usou bem o que recebeu? — é a *fidelidade*, ou faithfulness, da resposta às fontes). Só então ajuste uma variável por vez — chunking, filtros de metadados, busca híbrida (semântica + palavra-chave), reranking ou modelo — e confira se a métrica melhorou.

Frameworks como LangChain e LlamaIndex oferecem blocos prontos para montar esse pipeline, mas eles não dispensam a avaliação: a qualidade continua limitada pelo elo mais fraco da cadeia. O [tutorial de RAG com fontes verificáveis](/tutoriais/rag-com-fontes-verificaveis/) detalha o procedimento passo a passo, com foco em citações que correspondem ao texto de origem.

## Trilha deste cluster

1. entenda o papel do RAG dentro de [IA aplicada](/ia/);
2. siga o [tutorial de RAG com fontes verificáveis](/tutoriais/rag-com-fontes-verificaveis/) para montar a primeira versão;
3. ajuste o elo mais frequente de falha com [estratégias de chunking para RAG](/artigos/estrategias-de-chunking/);
4. meça o resultado com [como avaliar um sistema RAG](/artigos/como-avaliar-sistema-rag/);
5. se a base roda localmente, veja [como escolher um modelo de IA local](/artigos/como-escolher-modelo-ia-local/) e a ferramenta [Ollama](/ferramentas/ollama/).

O próximo passo não é adotar um banco vetorial mais sofisticado. É medir recuperação e resposta em perguntas reais e resolver o elo mais fraco da cadeia.
