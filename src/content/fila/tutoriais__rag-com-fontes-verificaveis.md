---
title: "RAG com fontes verificáveis: como construir respostas auditáveis"
description: "Tutorial para recuperar documentos, citar evidências e reduzir respostas sem suporte em aplicações com RAG."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: ia
kind: "tutorial"
canonicalPath: "/tutoriais/rag-com-fontes-verificaveis/"
primaryKeyword: "RAG com fontes verificáveis"
draft: false
sources:
  - "https://docs.pinecone.io/guides/get-started/overview"
  - "https://platform.openai.com/docs/guides/retrieval"
  - "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
---

RAG combina recuperação de documentos com geração de resposta, mas não transforma automaticamente um modelo em fonte confiável. A aplicação precisa provar de onde veio cada afirmação, controlar documentos desatualizados e responder com uma lacuna explícita quando a busca não sustenta a pergunta.

## 1. Prepare documentos com identidade

Comece definindo quais fontes são autorizadas e quem pode atualizá-las. Extraia o texto preservando título, seção, URL, data de validade, idioma e permissões. Remova duplicatas sem apagar a versão: dois documentos visualmente iguais podem ter políticas diferentes.

Divida o conteúdo em trechos que mantenham uma ideia completa. Um chunk muito curto perde contexto; um muito longo traz ruído e aumenta custo. Guarde `document_id`, `chunk_id`, posição no documento e uma versão do parser. Esses metadados serão usados na citação e para reindexar somente o que mudou.

## 2. Monte a recuperação em etapas

Na consulta, normalize a pergunta sem alterar sua intenção e recupere um conjunto de candidatos. Combine busca semântica com termos exatos quando nomes, códigos ou versões forem importantes. Depois, filtre por permissão, idioma e validade; se houver muitos candidatos, reranqueie e envie ao modelo somente o contexto necessário.

Defina um limiar de confiança antes da geração. Abaixo dele, retorne “não encontrei suporte suficiente” e ofereça a fonte ou uma pergunta de esclarecimento. Não use a resposta do modelo como sinal de que a recuperação funcionou.

## 3. Force citações verificáveis

Peça uma resposta estruturada com afirmações e referências. Cada referência deve apontar para `document_id`, seção, trecho e URL estável; a interface pode exibir a citação ao lado da frase, não apenas em um bloco no final. Valide no servidor se o trecho citado realmente está entre os documentos recuperados.

Quando documentos discordarem, mostre a diferença e a data de cada versão. Nunca silencie um conflito apenas porque uma fonte tem embedding mais parecido. Para dados sensíveis, aplique autorização novamente na hora de apresentar a citação, pois o índice não deve virar um canal de vazamento.

## 4. Avalie antes de liberar

Monte um conjunto de perguntas reais com resposta esperada, documentos relevantes e trechos que não deveriam ser usados. Meça recuperação do documento correto, precisão da citação, cobertura das afirmações, taxa de “sem evidência” e latência. Inclua casos de documento conflitante, prompt injection no texto recuperado, pergunta fora do escopo e documento expirado.

Registre versão do índice, modelo, prompt, filtros, IDs recuperados e decisão final. Isso permite reproduzir uma resposta e comparar uma troca de chunking ou modelo sem confundir melhoria de geração com melhoria de busca.

## 5. Operação e checklist

Crie uma rotina de reindexação incremental, monitore falhas de ingestão e ofereça uma forma de retirar uma fonte rapidamente. Faça revisão humana para respostas de alto impacto. Antes de publicar, confirme que (1) toda afirmação factual tem suporte ou é marcada como incerta, (2) links abrem a fonte correta, (3) permissões são aplicadas no retrieval e na exibição e (4) o comportamento fora do escopo está coberto por teste.

Um RAG útil não é o que sempre responde; é o que ajuda o usuário a verificar, corrige o caminho quando não encontra evidência e deixa um rastro suficiente para auditoria.
