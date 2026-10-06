---
name: "DeepSeek"
description: "A família DeepSeek — V4-Flash e V4-Pro, modelos abertos (MIT) com raciocínio embutido, contexto de 1M, preços por token entre os mais baixos do mercado e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
updatedDate: 2026-10-06
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

## DeepSeek Harness: o agente de código aberto da DeepSeek

Além dos modelos, a DeepSeek mantém o **DeepSeek Harness** (`dsh`). É um *harness* de agente, ou seja, a camada que transforma um modelo em agente capaz de ler arquivos, rodar comandos e usar ferramentas. Ele tem código aberto sob licença **MIT** e uma arquitetura em que **tudo é plugin**, sobre o framework [Cordis](https://github.com/cordiverse/cordis) ([repositório oficial](https://github.com/deepseek-ai/deepseek-harness)).

| Item | Situação em 06/10/2026 |
| --- | --- |
| Status | Prévia para desenvolvedores, com aviso de mudanças que quebram compatibilidade |
| Última versão | v0.2.1-alpha.1 (03/10/2026, *pre-release*) |
| App desktop | macOS e Windows desde a v0.2.0-rc.2 (29/09/2026), já com o `dsh` embutido |
| Início rápido | `npx @deepseek-ai/dsh web` (Web UI em `127.0.0.1:3080`) |
| Modos | Padrão, Criador, PTC e Mínimo |
| Modelos | Conta DeepSeek, provedores como `anthropic` e `openai`, ou APIs compatíveis (OpenAI Chat Completions, OpenAI Responses, Anthropic Messages). OAuth (ex.: Codex) ainda não é suportado |

Para usar os modelos V4 por meio de um gateway compatível com OpenAI, o guia oficial recomenda `compat.thinkingFormat: deepseek`. Sem isso, o nível `off` não desliga o raciocínio, que fica ativo por padrão ([guia de provedores](https://deepseek-harness.github.io/deepseek-harness/guide/providers)).

**Novidades de outubro de 2026:** app desktop, quatro modos de sessão e camada experimental de compatibilidade com os Mods do Claude Code. Os detalhes estão em [DeepSeek Harness v0.2: app desktop e o que muda](/noticias/deepseek-harness-v0-2-app-desktop-o-que-muda/).

## Para quem faz sentido

É a melhor relação capacidade/custo entre os modelos abertos quando o assunto é **código e raciocínio** — por API baratíssima ou self-host sob MIT. Para quem tem restrição de dados, prefira rodar os pesos localmente. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).

Se você quer um agente de código aberto que já vem integrado aos modelos da DeepSeek, mas também aceita outros provedores, o DeepSeek Harness é o ponto de partida. Ele ainda está em prévia, então trave versões antes de usar em produção.
