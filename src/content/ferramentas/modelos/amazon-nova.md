---
name: "Amazon Nova"
description: "A família Amazon Nova — Micro, Lite, Pro e Premier, mais a geração Nova 2 — modelos multimodais focados em custo-benefício e integração ao AWS, com preços e contexto verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Amazon"
category: "Modelos de IA"
pricing: "Pago por token (AWS Bedrock)"
platforms: ["AWS Bedrock", "API"]
rating: 8.8
url: "https://aws.amazon.com/ai/generative-ai/nova/"
featured: true
---

**Amazon Nova** é a família própria de modelos da AWS, oferecida pelo **Amazon Bedrock**. O posicionamento é claro: **custo-benefício e integração nativa ao ecossistema AWS**, com modelos multimodais (texto, imagem e vídeo na entrada) organizados em tiers do mais barato ao mais capaz. É a escolha natural para quem já opera na AWS.

## Todos os modelos e preços

Preços por 1M de tokens (inferência cross-region padrão). **Verificado em 24/09/2026** na [pricing do Amazon Bedrock](https://aws.amazon.com/bedrock/pricing/) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Contexto | Para quê |
|---|---|---|---|---|
| Nova Micro | 0,08 | 0,24 | — | O mais rápido e barato (texto) |
| Nova Lite | 0,30 | 1,20 | — | Multimodal econômico |
| Nova Pro | 0,80 | 3,20 | 300k | Multimodal equilibrado |
| Nova Premier | 1,20 | 4,80 | 1M | O mais capaz; professor para distilação |

A AWS oferece ainda tiers de faturamento **Priority** (+75%) e **Flex** (−50%) sobre o padrão. A geração **Nova 2** já traz variantes como **Nova 2 Lite** (raciocínio rápido) e **Nova 2 Sonic** (voz), além de modelos de geração de imagem (Canvas) e vídeo (Reel) fora da linha de "entendimento".

## Lançamento

A linha Nova foi introduzida pela AWS como família própria de *foundation models* com foco em preço/desempenho; o **Nova Premier** é o topo, com **1M de tokens de contexto** (equivalente a 1M de texto, 500 imagens ou 90 min de vídeo). Ao longo de 2026 a AWS avançou para a geração **Nova 2**.

## Benchmarks

A AWS publica os resultados nos *technical reports* oficiais ([Amazon Science](https://www.amazon.science/publications/the-amazon-nova-family-of-models-technical-report-and-model-card)). O posicionamento destacado é desempenho forte em **contexto longo** e **vídeo** (ex.: LVBench para QA de vídeo longo) com preço competitivo. Consulte o relatório para os números por benchmark e valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)); benchmarks entre marcas diferentes não são diretamente comparáveis.

## Modalidades e arquitetura

Os modelos de "entendimento" aceitam **texto, imagem e vídeo** na entrada, com saída em texto. O **Premier** chega a **1M de contexto** e serve também de "professor" para distilar modelos menores; o **Pro** processa até **300k**. Micro e Lite priorizam custo e latência.

## Características de teste e limites

- **Preço/desempenho e AWS:** dos mais baratos do mercado nos tiers Micro/Lite, com integração nativa ao Bedrock e demais serviços AWS.
- **Contexto e vídeo:** Premier com 1M de tokens e forte em compreensão de vídeo longo.
- **Limite:** disponível essencialmente dentro do ecossistema AWS/Bedrock; capacidade de topo tende a ficar atrás dos flagships de fronteira mais recentes.

## Para quem faz sentido

Faz sentido para quem **já opera na AWS** e quer custo baixo, multimodalidade e contexto grande sem sair do Bedrock. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
