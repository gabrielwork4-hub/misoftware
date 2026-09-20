---
title: "RAG com fontes verificáveis: como construir respostas auditáveis"
description: "Tutorial para recuperar documentos, citar evidências e reduzir respostas sem suporte em aplicações com RAG."
slug: "/tutoriais/rag-com-fontes-verificaveis/"
type: "tutorial"
author: "redacao"
category: "IA & Modelos"
silo: "ia"
cluster: "RAG"
primaryKeyword: "RAG com fontes verificáveis"
status: "needs-evidence"
sources:
  - "https://docs.pinecone.io/guides/get-started/overview"
  - "https://platform.openai.com/docs/guides/retrieval"
---

# RAG com fontes verificáveis: como construir respostas auditáveis

RAG combina recuperação de documentos com geração de resposta. A qualidade depende tanto da busca quanto da capacidade de mostrar por que uma afirmação foi feita.

## Pipeline

Prepare documentos, preserve metadados, divida trechos com contexto e indexe-os. Na consulta, recupere candidatos, filtre por relevância e envie ao modelo apenas o contexto necessário.

## Evidência

Exija citações com documento, seção e endereço estável. Se não houver suporte suficiente, o sistema deve admitir a lacuna em vez de preencher com invenção.

## Avaliação

Teste recuperação, precisão da citação, completude e resistência a documentos conflitantes. Registre versão do índice e dos documentos para reproduzir a resposta.

> Revisão pendente: incluir implementação, conjunto de testes e fontes oficiais.
