---
name: "Cohere Command"
description: "A família Command da Cohere — Command A+ (MoE aberto, Apache 2.0), Command A, Reasoning, Vision e Translate — focada em uso empresarial, RAG e multilíngue, verificada em fonte oficial."
pubDate: 2026-09-24
vendor: "Cohere"
category: "Modelos de IA"
pricing: "Aberto (Apache 2.0) + API paga"
platforms: ["Self-host", "API (Cohere)", "Hugging Face", "Cloud"]
rating: 8.9
url: "https://cohere.com"
featured: true
---

**Command** é a família de modelos da **Cohere**, voltada para **uso empresarial**: RAG, uso de ferramentas, agentes e forte capacidade multilíngue. O flagship atual, **Command A+**, é o primeiro modelo *mixture-of-experts* (MoE) da Cohere e é **aberto sob licença Apache 2.0** — pode ser baixado do Hugging Face e rodado no próprio ambiente, um trunfo para "IA soberana" e dados sensíveis.

## Todos os modelos

**Verificado em 24/09/2026** na [documentação da Cohere](https://docs.cohere.com/docs/models) e no [anúncio do Command A+](https://cohere.com/blog/command-a-plus).

| Modelo | Contexto | Aberto? | Para quê |
|---|---|---|---|
| Command A+ (05-2026) | 128k | Sim (Apache 2.0) | Flagship MoE: visão + raciocínio + tradução + agêntico |
| Command A (03-2025) | 256k | Sim (Apache 2.0) | Uso de ferramentas, RAG, multilíngue |
| Command A Reasoning (08-2025) | 256k | — | 1º modelo de raciocínio da Cohere |
| Command A Vision (07-2025) | 128k | — | Gráficos, Q&A de documentos, OCR |
| Command A Translate (08-2025) | 8k | — | Tradução em 23 idiomas |
| North Mini Code | 256k | — | Código agêntico |

O **Command A+** tem **25B de parâmetros ativos** (218B no total, MoE) e amplia a cobertura multilíngue de 23 para **48 idiomas**.

## Preço

Os modelos abertos (Command A+, Command A) têm **custo zero de licença** para self-host — você paga só a infraestrutura. Para a API da Cohere, os preços por token estão na [pricing oficial](https://cohere.com/pricing) (a linha legada Command R+ ficava em torno de US$ 2,50/1M entrada e US$ 10/1M saída; confirme os valores atuais na fonte).

## Lançamento

O **Command A+** foi lançado em **maio de 2026** como o primeiro MoE multimodal da Cohere, com pesos abertos no Hugging Face em várias quantizações. A linha Command A (2025) segue disponível.

## Benchmarks

A Cohere posiciona o Command A+ com ganhos em raciocínio visual (CharXiv) frente ao Command A Vision e forte capacidade multilíngue. Os números por benchmark estão no anúncio e no model card oficiais — trate-os como referência e valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)); benchmarks entre marcas diferentes não são diretamente comparáveis.

## Características de teste e limites

- **Empresarial e RAG:** projetada para uso de ferramentas, recuperação e agentes em contexto corporativo.
- **Multilíngue e soberania:** 48 idiomas e pesos abertos (Apache 2.0), bom para requisitos de residência de dados.
- **Especialistas:** modelos dedicados a visão, tradução e código.
- **Limite:** menos presente no uso geral/consumidor que OpenAI, Google ou Anthropic; foco claramente B2B.

## Para quem faz sentido

Faz sentido para **empresas** que precisam de RAG, multilíngue, tradução e controle de dados — com a opção de rodar os pesos abertos internamente. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/); para rodar localmente, [IA local](/ia/ia-local/).
