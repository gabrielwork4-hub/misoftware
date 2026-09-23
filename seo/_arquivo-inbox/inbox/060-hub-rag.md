---
title: "RAG: recuperação aumentada por geração com fontes confiáveis"
description: "Hub sobre RAG, arquitetura de recuperação, qualidade de contexto, citações e operação."
author: "Redação"
category: "IA & Modelos"
silo: "ia"
cluster: "RAG"
primaryKeyword: "RAG"
status: "needs-evidence"
sources:
  - "https://platform.openai.com/docs/guides/retrieval"
  - "https://docs.pinecone.io/guides/get-started/overview"
---

# RAG: recuperação aumentada por geração com fontes confiáveis

RAG permite que um modelo responda usando documentos recuperados no momento da consulta. É útil quando a resposta precisa refletir conhecimento próprio, atualizado ou auditável.

## Componentes do sistema

O fluxo inclui ingestão, limpeza, divisão de documentos, embeddings, índice, recuperação, reranking e geração. Metadados e controle de versão são tão importantes quanto o modelo.

## Onde falha

Trechos mal divididos, busca imprecisa, documentos desatualizados e contexto excessivo produzem respostas fracas. Citações sem correspondência também criam falsa confiança.

## Como evoluir

Comece com um conjunto de perguntas reais, meça recuperação e resposta, e só então ajuste chunking, filtros ou modelo. O tutorial de [RAG com fontes verificáveis](/tutoriais/rag-com-fontes-verificaveis/) detalha o procedimento.

> Revisão pendente: incluir diagrama, fontes primárias e critérios de benchmark.
