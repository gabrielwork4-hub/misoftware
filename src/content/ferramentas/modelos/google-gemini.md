---
name: "Google Gemini"
description: "A família Gemini do Google — Gemini 4 Argon, Gemini 3.1 Pro e tiers Flash — com preços por token, janela de 1M e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
updatedDate: 2026-10-13
vendor: "Google"
category: "Modelos de IA"
pricing: "Pago por token (API) + Gemini app"
platforms: ["API", "Gemini app", "Google Cloud", "Workspace"]
rating: 9.4
url: "https://ai.google.dev"
featured: true
---

**Gemini** é a família de modelos de linguagem do Google, acessada pela API do Google AI, pelo aplicativo Gemini, pelo Google Cloud (Vertex AI) e integrada ao Workspace. São modelos **fechados**, com o diferencial de **entrada multimodal ampla** (texto, imagem, áudio, vídeo e repositórios inteiros de código) e **janela de 1 milhão de tokens**. Em **13 de outubro de 2026** o Google liberou para todos o **Gemini 4 Argon**, primeiro modelo da geração Gemini 4, que passa a ser o topo da família na API (plano pago) e no app Gemini (assinantes Pro e Ultra). Os tiers **Flash** da família Gemini 3 seguem como opção de baixo custo.

## Novidades de outubro de 2026: Gemini 4 Argon disponível

O Google anunciou o **Gemini 4 Argon** em 30/09/2026, com acesso restrito ao Fairwind Program. Em **13/10/2026** o modelo foi aberto globalmente ([anúncio](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)):

- **API:** plano pago da Gemini API no Google AI Studio e no Android Studio, e no Gemini platform (Google Cloud). ID do modelo: `gemini-4-argon` ([guia do desenvolvedor](https://aistudio.google.com/learn/gemini-4-argon-developer-guide)).
- **Assinantes:** Google AI Ultra no Google Antigravity e no AI Studio; Google AI Ultra e Pro no app Gemini e no AI Mode da Busca.
- **Janela unificada de 1M tokens** para entrada, raciocínio e saída. A saída padrão continua em 64K; para gerar mais, é preciso usar *long decode* (`background=True` e `max_output_tokens` acima de 65.536 na Interactions API).
- **Preço introdutório até 30/11/2026:** US$ 2 por 1M tokens de entrada e US$ 10 por 1M de saída, com 95% de desconto em entrada em cache. **A partir de 1/12/2026:** US$ 4 / US$ 20.
- **Raciocínio ajustável:** parâmetro `thinking_level` (`low`, `medium` — padrão — e `high`), que substitui o `thinking_budget`.
- **Benchmarks divulgados:** DeepSWE v1.1 77,9%; AutomationBench 51,3%; LVBench 91,7%; CWE-bench v1 68%; ERQA 87%.

Migração, preço, quem tem acesso e o que ainda não está confirmado: [Gemini 4 Argon: preço, disponibilidade e como usar na API](/noticias/gemini-4-argon-lancamento-preco-disponibilidade/).

## Todos os modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [pricing do Gemini API](https://ai.google.dev/gemini-api/docs/pricing); Gemini 4 Argon conforme o [guia do desenvolvedor](https://aistudio.google.com/learn/gemini-4-argon-developer-guide), verificado em 13/10/2026. Preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Observação |
|---|---|---|---|
| Gemini 4 Argon | 2 (até 30/11/2026) / 4 (a partir de 1/12) | 10 (até 30/11/2026) / 20 (a partir de 1/12) | Disponível desde 13/10/2026 no plano pago da API; janela unificada de 1M tokens; cache com 95% de desconto |
| Gemini 3.1 Pro | 2 (≤200k) / 4 (>200k) | 12 (≤200k) / 18 (>200k) | Flagship; cobra por faixa de contexto |
| Gemini 3.8 Flash | 0,75 | 3,75 | Promo até 31/12/2026 (depois 1,50 / 7,50) |
| Gemini 3.7 Flash | 0,75 | 3,75 | Promo até 31/12/2026 (depois 1,50 / 7,50) |
| Gemini 3.5 Flash | 1,50 | 9,00 | Tier Flash anterior |

O Google também mantém variantes especializadas da linha 3 (imagem, áudio) fora da tabela de texto. Os tiers **Flash** priorizam latência baixa e custo; o **Pro** mira as tarefas mais complexas.

## Lançamento

A família **Gemini 3** sucede as gerações anteriores; o **Gemini 3.1 Pro** entrou em *preview* por volta de **março de 2026** para validar melhorias antes da disponibilidade geral, mantendo a janela de 1M da linha. Ao longo de 2026 o Google seguiu lançando tiers Flash (3.5, 3.7, 3.8) e variantes de imagem e áudio.

Em **30 de setembro de 2026** o Google anunciou o **Gemini 4 Argon**, primeiro modelo da geração Gemini 4, com liberação em fases: começou por defensores cibernéticos do Fairwind Program e, em **13 de outubro de 2026**, foi aberto para todos ([notícia completa](/noticias/gemini-4-argon-lancamento-preco-disponibilidade/)).

## Benchmarks (Gemini 3.1 Pro)

Resultados do model card oficial. **Verificado em 24/09/2026** ([Gemini 3.1 Pro — model card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-1-pro/)). Números entre marcas diferentes não são diretamente comparáveis.

| Benchmark | Gemini 3.1 Pro | O que mede |
|---|---|---|
| GPQA Diamond | 94,3% | Raciocínio científico pós-graduação |
| SWE-Bench Verified | 80,6% | Engenharia de software |
| Terminal-Bench 2.0 | 68,5% | Código agêntico em terminal |
| ARC-AGI-2 | 77,1% | Raciocínio abstrato |
| Humanity's Last Exam (busca + código) | 51,4% | Raciocínio multidisciplinar |
| τ2-bench (Telecom) | 99,3% | Uso de ferramentas/agêntico |
| MMMU-Pro | 80,5% | Raciocínio multimodal |
| MRCR v2 (1M) | 26,3% | Recuperação em contexto de 1M |

O contraste entre MRCR em 128k (84,9%) e em 1M (26,3%) mostra um limite prático importante: janela grande não significa recuperação perfeita ao longo de todo o contexto.

## Modalidades e arquitetura

O Gemini 3.1 Pro processa **texto, áudio, imagem, vídeo e repositórios de código** na entrada, com **contexto de 1M** e saída de até **64k tokens**. É a família com a entrada multimodal mais ampla do grupo.

O **Gemini 4 Argon** aceita imagens, áudio, vídeo, código e texto na entrada e usa uma **janela unificada de 1M tokens** compartilhada entre entrada, raciocínio e saída, com saída padrão de 64K e *long decode* para ir além. Segundo o guia do Google, o Argon ignora `temperature`, `top_p` e `top_k` e dispensa o cache explícito (o cache implícito é automático). Desde 13/10/2026 é o modelo de topo disponível da família.

## Características de teste e limites

- **Contexto e multimodalidade:** o diferencial mais forte — 1M de tokens e entrada de áudio/vídeo/imagem, útil para documentos e bases grandes sem sempre recorrer a [RAG](/ia/rag/).
- **Custo:** os tiers **Flash** estão entre os mais baratos dos modelos fechados, com preço promocional agressivo.
- **Atenção às faixas:** no Pro, acima de 200k tokens o preço por token sobe; e recuperação em 1M ainda é limitada (ver MRCR acima).
- **Limite:** valide no seu conjunto de casos ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Para quem faz sentido

Faz sentido para quem já vive no ecossistema Google (Cloud, Workspace), para quem precisa de **contexto muito grande** ou **entrada multimodal** (áudio/vídeo) e para alto volume com os tiers Flash. Para comparar com GPT, Claude e Llama, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
