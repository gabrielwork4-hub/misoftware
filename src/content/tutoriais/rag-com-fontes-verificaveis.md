---
title: "RAG com fontes verificáveis: como construir respostas auditáveis"
description: "Tutorial para recuperar documentos, citar evidências e reduzir respostas sem suporte em aplicações com RAG."
pubDate: "2026-09-20"
author: "redacao"
difficulty: "Intermediário"
silo: "ia"
tags:
  - "RAG"
draft: false
---
RAG (geração aumentada por recuperação) faz um modelo responder usando documentos recuperados no momento da pergunta. O valor não está só em acertar a resposta, e sim em mostrar de qual documento ela veio. Este tutorial monta um pipeline em que cada afirmação relevante carrega uma citação verificável — e o sistema admite quando não sabe, em vez de inventar.

## Antes de começar

Você precisa de uma base de documentos que possa citar (procedimentos, artigos, documentação), um modelo de embeddings para indexar, um índice vetorial e um modelo de geração. Não precisa de um framework pesado para a primeira versão — o pipeline cabe em poucas etapas explícitas, e entender cada uma vale mais que esconder tudo atrás de uma abstração.

## Passo 1 — Prepare e divida os documentos

A qualidade do RAG é decidida aqui, antes de qualquer modelo. Limpe os documentos (remova ruído, navegação, duplicatas) e divida-os em trechos (chunks) que preservem contexto: grandes demais diluem a relevância, pequenos demais perdem o sentido. Guarde metadados com cada trecho — documento de origem, seção, versão e um endereço estável (URL ou âncora). Esses metadados são o que torna a citação possível depois.

## Passo 2 — Gere embeddings e indexe

Transforme cada trecho em um vetor com o modelo de embeddings e armazene no índice vetorial junto com os metadados. Registre a versão do modelo de embeddings usado: trocar o modelo depois exige reindexar, e misturar vetores de modelos diferentes degrada a busca silenciosamente.

## Passo 3 — Recupere e filtre

Na consulta, transforme a pergunta em vetor e busque os trechos mais próximos. Não envie todos ao modelo: recupere um conjunto de candidatos, filtre por relevância (um limiar de similaridade) e, quando útil, aplique um reranking para colocar a melhor evidência no topo. Envie ao modelo apenas o contexto necessário — contexto excessivo aumenta custo e dilui a atenção do modelo no que importa.

## Passo 4 — Exija citação, permita a lacuna

No prompt de geração, instrua o modelo a responder usando somente o contexto fornecido e a citar, em cada afirmação relevante, o documento e a seção de origem. E — tão importante quanto — instrua-o a dizer que não encontrou suporte suficiente quando o contexto não cobrir a pergunta. Um RAG que sempre responde é um RAG que inventa; a admissão da lacuna é uma feature, não uma falha.

## Passo 5 — Verifique as citações

Uma citação que não corresponde ao texto cria falsa confiança — é pior que não citar. Adicione uma verificação: o trecho citado realmente contém o que a resposta afirma? Para afirmações críticas, essa checagem pode ser automática (o trecho citado está entre os recuperados?) e, em casos sensíveis, revisada por uma pessoa.

## Passo 6 — Avalie recuperação e geração separadamente

Monte um conjunto de perguntas reais com a resposta e a fonte esperadas. Meça duas coisas distintas: a recuperação trouxe o trecho certo? e a resposta usou corretamente o que foi recuperado? Separar os dois é essencial — uma resposta ruim quase sempre começa numa recuperação ruim, e otimizar o modelo não conserta um índice que trouxe o trecho errado. Registre a versão do índice e dos documentos para reproduzir qualquer resposta.

## Onde o RAG falha

Trechos mal divididos, busca imprecisa, documentos desatualizados no índice e contexto excessivo produzem respostas fracas. Revise o índice quando os documentos-fonte mudarem — um RAG apontando para uma versão antiga responde com confiança o que já não é verdade.

## Próximo passo

Para o contexto e a arquitetura, veja o [hub de RAG](/ia/rag/). Como o prompt de geração define o comportamento de citação, vale também a [trilha de engenharia de prompt](/ia/engenharia-de-prompt/).
