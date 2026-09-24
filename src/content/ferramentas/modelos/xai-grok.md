---
name: "xAI Grok"
description: "A família Grok da xAI — Grok 4.7 e as versões 4.x — modelos fechados com contexto de 500k a 1M, integração ao X e preços por token verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "xAI"
category: "Modelos de IA"
pricing: "Pago por token (API) + Grok no X"
platforms: ["API", "X (Twitter)", "Grok app"]
rating: 9.0
url: "https://x.ai"
featured: true
---

**Grok** é a família de modelos de linguagem da **xAI**, acessada pela API, pelo aplicativo Grok e integrada à rede **X**. São modelos **fechados**, posicionados para código, tarefas agênticas e trabalho de conhecimento, com um diferencial de origem: acesso a dados em tempo real do X. Em setembro de 2026 o topo da linha é o **Grok 4.7**.

## Todos os modelos e preços

Preços por 1M de tokens (o preço sobe acima de 200k tokens de contexto). **Verificado em 24/09/2026** na [documentação da xAI](https://docs.x.ai/docs/models) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Contexto | Para quê |
|---|---|---|---|---|
| Grok 4.7 | 2 (<200k) / 4 | 6 (<200k) / 12 | 500k | Flagship: código, agêntico, conhecimento |
| Grok 4.6 | 2 / 4 | 6 / 12 | 500k | Geração anterior |
| Grok 4.5 | 2 / 4 | 6 / 12 | 500k | Geração anterior |
| Grok 4.3 | 1,25 / 2,50 | 2,50 / 5 | 1M | Econômico, contexto maior |
| Grok 4.20 | 1,25 / 2,50 | 2,50 / 5 | 1M | Raciocínio/não-raciocínio |
| Grok Build 0.1 | 1 / 2 | 2 / 4 | 256k | Especializado em código |

Imagem, vídeo e voz são tratados por APIs separadas; os modelos de texto acima aceitam **texto e imagem** na entrada, com saída em texto.

## Lançamento

O **Grok 4.7** teve o model card revisado em **21 de setembro de 2026**, posicionado como o modelo mais capaz da xAI para código, agentes e conhecimento, com **500k de contexto** e sem limite de tokens de saída. As versões 4.3/4.20 oferecem contexto de 1M a preço menor.

## Benchmarks

A xAI publica os resultados no [model card oficial do Grok 4.7](https://x.ai) (revisão 21/09/2026). Não foi possível extrair a tabela numérica completa da fonte no momento da verificação — consulte o model card para os números por benchmark, e trate-os como referência: benchmarks entre marcas diferentes não são diretamente comparáveis e o que decide é o teste na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Modalidades e arquitetura

Entrada de **texto e imagem**, saída em texto, **contexto de 500k** (1M nas versões 4.3/4.20). O diferencial mais citado é a **integração com o X**: acesso a conteúdo e dados em tempo real da rede, útil para tarefas que dependem de informação recente.

## Características de teste e limites

- **Dados em tempo real:** a integração com o X é o diferencial frente aos concorrentes fechados.
- **Contexto amplo:** 500k a 1M de tokens, competitivo com os flagships.
- **Limite:** ecossistema de ferramentas mais novo e menor que o da OpenAI; e conteúdo em tempo real do X exige atenção a viés e verificação da fonte.

## Para quem faz sentido

Faz sentido para quem quer um flagship fechado com **acesso a dados atuais do X** e contexto amplo, ou já usa o Grok dentro da rede. Para comparar com GPT, Claude, Gemini e as famílias abertas, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
