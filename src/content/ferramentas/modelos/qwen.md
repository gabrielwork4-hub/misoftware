---
name: "Alibaba Qwen"
description: "A família Qwen da Alibaba — o flagship fechado Qwen3.8-Max e os modelos abertos da linha 3.6 — com contexto de até 1M, arquitetura MoE e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Alibaba"
category: "Modelos de IA"
pricing: "Aberto (linha 3.6) + API (Alibaba Cloud)"
platforms: ["Self-host", "Alibaba Cloud Model Studio", "Hugging Face"]
rating: 9.0
url: "https://qwen.ai"
featured: true
---

**Qwen** é a família de modelos da Alibaba e uma das mais completas do ecossistema aberto: combina um **flagship proprietário** (Qwen3.8-Max, acessado por API) com uma linha de **modelos abertos** (série 3.6, com pesos no Hugging Face e no ModelScope). Cobre desde modelos densos compactos até um MoE de escala massiva, com forte desempenho em código e tarefas multilíngues.

## Todos os modelos e specs

**Verificado em 24/09/2026** no [anúncio do Qwen3.8-Max (Alibaba Cloud)](https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-max-its-largest-and-most-capable-flagship-model-to-date_603420) e no [blog oficial Qwen](https://qwen.ai/blog?id=qwen3.6-27b).

| Modelo | Parâmetros | Contexto | Aberto? | Acesso |
|---|---|---|---|---|
| Qwen3.8-Max | 2,4T total / 95B ativos (MoE) | até 1M | Não | API Alibaba Cloud |
| Qwen3.6-35B-A3B | 35B (MoE) | grande | Sim | HF / ModelScope / API (qwen3.6-flash) |
| Qwen3.6-27B | 27B (denso) | 262k nativo / até ~1M | Sim | HF / ModelScope |

O **3.8-Max** é o topo proprietário; a **linha 3.6** entrega os pesos abertos para self-host — inclusive um 27B denso que roda em hardware acessível.

## Lançamento

O **Qwen3.8-Max** foi anunciado em **agosto de 2026** como o maior e mais capaz modelo da Alibaba até então. Os abertos **Qwen3.6-27B** (abril de 2026) e **Qwen3.6-35B-A3B** vieram antes, consolidando a estratégia de manter aberto e fechado em paralelo.

## Benchmarks (Qwen3.8-Max)

Resultados divulgados pela Alibaba para o flagship. **Verificado em 24/09/2026** ([Alibaba Cloud](https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-max-its-largest-and-most-capable-flagship-model-to-date_603420)). Benchmarks entre marcas diferentes não são diretamente comparáveis.

| Benchmark | Qwen3.8-Max | O que mede |
|---|---|---|
| PaperBench | 93,0 | Pesquisa/leitura de artigos |
| GPQA Diamond | 92,6 | Raciocínio científico pós-graduação |
| OSWorld | 86,1 | Uso de computador |
| BabyVision | 82,0 | Raciocínio visual |

A Alibaba reporta ainda 5º lugar no Text Arena e 2º no Vision Arena — sinal de força em tarefas multimodais.

## Modalidades e arquitetura

O **Qwen3.8-Max** usa **MoE esparso** (2,4T totais, mas só 95B ativos por token) com atenção híbrida, equilibrando escala e eficiência de inferência, e **contexto de até 1M**. A linha aberta 3.6 vai de um **27B denso** (fácil de rodar) a um **35B MoE** — boa cobertura para self-host.

## Características de teste e limites

- **Aberto e fechado:** você escolhe entre o topo por API (3.8-Max) ou pesos abertos para rodar no seu ambiente (3.6).
- **Multimodal e multilíngue:** forte em visão e em idiomas além do inglês.
- **Atenção a dados:** para a API (Alibaba Cloud), avalie residência e retenção antes de enviar dado sensível — ou use os pesos abertos localmente ([IA local](/ia/ia-local/)).
- **Limite:** valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Para quem faz sentido

Faz sentido para quem quer **flexibilidade entre aberto e fechado** na mesma família, precisa de bom desempenho multilíngue/multimodal, ou quer um modelo aberto denso (27B) que rode em hardware modesto. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
