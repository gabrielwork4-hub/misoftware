---
name: "DeepSeek"
description: "A família DeepSeek — V4-Flash e V4-Pro, modelos abertos (MIT) com raciocínio embutido, contexto de 1M, preços por token entre os mais baixos do mercado e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "DeepSeek"
category: "Modelos de IA"
pricing: "Aberto (MIT) + API muito barata"
platforms: ["Self-host", "API", "Hugging Face"]
rating: 9.1
url: "https://www.deepseek.com"
featured: true
---

A **DeepSeek** é a desenvolvedora chinesa que popularizou modelos de fronteira **abertos e baratos**. A geração atual, **V4**, unifica as linhagens anterior de uso geral (série V) e de raciocínio (série R) num só modelo com modos "thinking" e "non-thinking". Os pesos são publicados sob licença **MIT** (uso comercial liberado), e a API está entre as mais baratas do mercado.

## Todos os modelos e preços

Preços por 1M de tokens. A DeepSeek pratica **preço variável por horário** (pico × fora de pico). **Verificado em 24/09/2026** na [pricing oficial](https://api-docs.deepseek.com/quick_start/pricing) e nos *model cards* no [Hugging Face](https://huggingface.co/deepseek-ai) — confirme na fonte.

| Modelo | Input (fora de pico / pico) | Output (fora de pico / pico) | Parâmetros | Contexto | Aberto? |
|---|---|---|---|---|---|
| DeepSeek-V4-Flash | US$ 0,15 / 0,30 | US$ 0,60 / 1,20 | 284B | 1M | Sim (MIT) |
| DeepSeek-V4-Pro | US$ 0,66 / 1,32 | US$ 1,98 / 3,96 | 1,6T | 1M | Sim (no HF) |

O **Flash** ainda tem visão (entrada de imagem); o **Pro** foca texto de máxima capacidade. Horário de pico: 01:00–04:00 e 06:00–10:00 UTC, dias úteis.

## Lançamento

A **V4** foi planejada para março de 2026 e liberada ao longo do ano; a build **V4-Flash-0731** publicou os pesos no Hugging Face sob MIT em **31 de julho de 2026**. A grande mudança da geração é unificar general-purpose e raciocínio num modelo só.

## Benchmarks

Resultados divulgados para a V4. **Verificado em 24/09/2026** ([DeepSeek no Hugging Face](https://huggingface.co/deepseek-ai) e documentação). Benchmarks entre marcas diferentes não são diretamente comparáveis.

| Benchmark | V4-Pro | V4-Flash | O que mede |
|---|---|---|---|
| GPQA Diamond | 90,1 | 88,1 | Raciocínio científico pós-graduação |
| SWE-bench Verified | 80,6 | 79 | Engenharia de software |
| GSM8K | 92,6 | — | Matemática escolar |

Números fortes para modelos abertos — especialmente em código (SWE-bench) e raciocínio (GPQA), a preços muito abaixo dos flagships fechados.

## Modalidades e arquitetura

A V4 usa arquitetura eficiente com **contexto de 1M** e **raciocínio embutido** (ativável por modo). O **Flash** (284B) aceita imagem; o **Pro** (1,6T) prioriza capacidade textual. Por serem abertos sob MIT, podem rodar no seu ambiente sem restrição comercial.

## Características de teste e limites

- **Custo-benefício extremo:** entre os preços por token mais baixos do mercado, com desempenho de fronteira em código e raciocínio.
- **Abertura:** licença MIT permite self-host e uso comercial livre.
- **Atenção a dados:** por ser um serviço com hospedagem na China, avalie residência e retenção de dados antes de enviar informação sensível pela API — ou rode os pesos abertos no seu ambiente ([IA local](/ia/ia-local/)).
- **Limite:** valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Para quem faz sentido

É a melhor relação capacidade/custo entre os modelos abertos quando o assunto é **código e raciocínio** — por API baratíssima ou self-host sob MIT. Para quem tem restrição de dados, prefira rodar os pesos localmente. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
