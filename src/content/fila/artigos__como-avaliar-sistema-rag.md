---
title: "Como avaliar um sistema RAG"
description: "Como medir um sistema RAG separando recuperação e geração: montar um conjunto de avaliação, métricas como recall@k e faithfulness, e detectar a citação que não sustenta a resposta."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/como-avaliar-sistema-rag/"
primaryKeyword: "como avaliar um sistema RAG"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/evals"
  - "https://docs.ragas.io/"
---

Avaliar um sistema RAG pela impressão da resposta final é o erro mais caro do tema. Uma resposta pode parecer ótima e estar apoiada numa fonte que não diz aquilo; ou pode estar correta apesar de o sistema ter recuperado o documento errado. Avaliação útil separa as duas metades da cadeia — **recuperação** e **geração** — e mede cada uma com o seu próprio critério. Sem essa separação, você otimiza no escuro.

Se ainda está montando o pipeline, comece pelo hub de [RAG](/ia/rag/); este guia assume que já existe algo para medir.

## Monte o conjunto de avaliação primeiro

Antes de qualquer métrica, você precisa de um conjunto de perguntas reais com resposta conhecida e, idealmente, com os trechos que deveriam ser recuperados. É trabalhoso, mas é o que transforma "acho que melhorou" em "melhorou 12% na recuperação". Inclua:

- perguntas comuns do uso real;
- perguntas cuja resposta **não** está na base (o sistema deve dizer "não encontrei");
- perguntas ambíguas e com termos diferentes dos documentos;
- casos sensíveis onde uma resposta errada tem custo alto.

## Meça recuperação e geração separadamente

| Camada | Pergunta | Métricas úteis |
|---|---|---|
| Recuperação | os trechos certos apareceram, e no topo? | recall@k, precision@k, MRR |
| Geração | a resposta usa e reflete os trechos? | faithfulness, relevância da resposta |

**Recuperação:** *recall@k* mede se os trechos relevantes estão entre os k recuperados; *precision@k*, quanto do que veio é de fato útil; *MRR* premia trazer o certo nas primeiras posições. Se a recuperação falha, nenhum modelo de geração salva a resposta.

**Geração:** *faithfulness* (fidelidade) mede se cada afirmação da resposta é sustentada pelos trechos recuperados — é o antídoto contra a alucinação com aparência de fonte. A relevância mede se a resposta de fato responde à pergunta. Ferramentas como o Ragas ajudam a automatizar parte disso, inclusive usando um modelo como avaliador, mas trate o avaliador automático como estimativa, não veredito.

## Cace a citação que não sustenta

O pior defeito de um RAG não é errar — é acertar a forma e falhar no fundo: citar um documento que não diz o que a resposta afirma. Isso cria falsa confiança e passa despercebido em revisão superficial. Na avaliação, verifique explicitamente a correspondência entre cada afirmação e o trecho citado, e mantenha esses casos como regressão fixa.

## Transforme em rotina

Rode a suíte a cada mudança de chunking, embeddings, reranking, modelo ou prompt de geração — porque uma melhora numa etapa pode piorar outra. Compare contra um baseline, registre a versão de cada componente e defina um limiar de liberação. É a mesma disciplina de [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/), aplicada à cadeia inteira de recuperação.

## Próximo passo

A maior parte dos ganhos começa na recuperação, e a recuperação começa na divisão dos documentos: veja [estratégias de chunking para RAG](/artigos/estrategias-de-chunking/). Para o desenho completo, volte ao hub de [RAG](/ia/rag/) e ao [tutorial de RAG com fontes verificáveis](/tutoriais/rag-com-fontes-verificaveis/).
