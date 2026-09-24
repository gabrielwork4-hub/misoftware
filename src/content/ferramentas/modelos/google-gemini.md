---
name: "Google Gemini"
description: "A família Gemini do Google — Gemini 3.1 Pro e os tiers Flash — com janela de 1M de tokens, preços por token e faixas de contexto verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Google"
category: "Modelos de IA"
pricing: "Pago por token (API) + Gemini app"
platforms: ["API", "Gemini app", "Google Cloud", "Workspace"]
rating: 9.4
url: "https://ai.google.dev"
featured: true
---

**Gemini** é a família de modelos de linguagem do Google, acessada pela API do Google AI, pelo aplicativo Gemini, pelo Google Cloud (Vertex AI) e integrada ao Workspace. Em setembro de 2026 a linha atual é a **família Gemini 3**, com o **Gemini 3.1 Pro** no topo e vários tiers **Flash** de baixo custo. É a opção mais integrada ao ecossistema Google e traz janela de contexto de **1 milhão de tokens**.

## Modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [pricing do Gemini API](https://ai.google.dev/gemini-api/docs/pricing) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Observação |
|---|---|---|---|
| Gemini 3.1 Pro | 2 (≤200k) / 4 (>200k) | 12 (≤200k) / 18 (>200k) | Flagship; cobra por faixa de contexto |
| Gemini 3.8 Flash | 0,75 | 3,75 | Preço promocional até 31/12/2026 (depois 1,50 / 7,50) |
| Gemini 3.5 Flash | 1,50 | 9,00 | Tier Flash anterior |

## Lançamento

A família **Gemini 3** sucede as gerações anteriores; o **Gemini 3.1 Pro** entrou em *preview* por volta de **março de 2026** para validar melhorias antes da disponibilidade geral, mantendo a janela de 1M de tokens da linha. Ao longo de 2026 o Google seguiu lançando tiers Flash (3.5, 3.7, 3.8) e variantes especializadas (imagem, áudio).

## Características de teste

O Google posiciona os tiers **Pro** para as tarefas mais complexas e os tiers **Flash** para alto volume e latência baixa, com preço promocional agressivo. O diferencial mais citado é a **janela de 1M de tokens**, útil para documentos e bases grandes sem recorrer sempre a [RAG](/ia/rag/). Os benchmarks por versão estão nos *model cards* do Google DeepMind — use-os como referência e confirme no seu conjunto de casos ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Para quem faz sentido

Faz sentido para quem já vive no ecossistema Google (Cloud, Workspace) e para quem precisa de contexto muito grande a custo competitivo — os tiers Flash são dos mais baratos entre os modelos fechados. Atenção às **faixas de contexto** do Pro: acima de 200k tokens o preço por token sobe. Para comparar com GPT, Claude e Llama, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
