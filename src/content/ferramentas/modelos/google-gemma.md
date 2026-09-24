---
name: "Google Gemma"
description: "A família Gemma do Google — modelos abertos (Apache 2.0) de 2B a 31B, multimodais, com até 256k de contexto e 140+ idiomas, feitos para rodar localmente. Specs verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Google"
category: "Modelos de IA"
pricing: "Aberto (Apache 2.0) — sem custo de licença"
platforms: ["Self-host", "Hugging Face", "Edge", "Cloud"]
rating: 8.9
url: "https://ai.google.dev/gemma"
featured: true
---

**Gemma** é a família de modelos **abertos** do Google — a contrapartida de peso aberto da linha fechada [Gemini](/ferramentas/modelos/google-gemini/). São os modelos mais capazes que o Google publica com pesos baixáveis (licença Apache 2.0), pensados para rodar **localmente** ou em hardware modesto, com forte "inteligência por parâmetro". A geração atual é a **Gemma 4**.

## Todos os modelos e specs

**Verificado em 24/09/2026** na [visão geral da Gemma 4](https://ai.google.dev/gemma/docs/core) e no [anúncio oficial](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/). Todos sob **Apache 2.0** (uso comercial permitido).

| Modelo | Parâmetros | Contexto | Modalidades |
|---|---|---|---|
| Gemma 4 (2B / 4B) | 2B / 4B | 128k | texto + imagem (+ áudio/vídeo em E2B/E4B) |
| Gemma 4 12B | 12B (unificado) | 256k | texto, imagem, vídeo, áudio |
| Gemma 4 26B | 26B total / 4B ativos (MoE) | 256k | texto + imagem |
| Gemma 4 31B | 31B (denso) | 256k | texto + imagem |

A linha vai do **2B** (roda em hardware bem modesto) ao **31B denso** (topo aberto), com suporte a **140+ idiomas** e **modos de raciocínio configuráveis**.

## Lançamento

A **Gemma 4** é apresentada pelo Google como seus modelos abertos mais inteligentes até então, com foco em raciocínio e trabalho agêntico e melhor relação inteligência/parâmetro. Sucede a Gemma 3 (cujo 27B segue disponível).

## Benchmarks

Resultado citável de ranking público. **Verificado em 24/09/2026** ([anúncio Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)):

- **Gemma 4 31B:** #3 entre os modelos **abertos** no leaderboard de texto do LMArena.
- **Gemma 4 26B (MoE):** #6 entre os abertos no mesmo leaderboard.

O Google também reporta ganhos em benchmarks de código — consulte o [model card](https://ai.google.dev/gemma/docs/core/model_card_4) para os números por benchmark e valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Modalidades e arquitetura

A Gemma 4 combina modelos **densos** (2B, 4B, 31B), um **MoE** (26B com 4B ativos) e um **unificado** de 12B para tarefas multimodais. Entrada de texto e imagem em toda a linha; áudio e vídeo nos modelos E2B, E4B e 12B. Contexto de 128k (pequenos) a 256k (médios).

## Características de teste e limites

- **Inteligência por parâmetro:** o argumento central — desempenho alto para o tamanho, ideal para rodar local ([IA local](/ia/ia-local/)) sem depender de API.
- **Aberto e comercial:** Apache 2.0, pesos no Hugging Face.
- **Multimodal e multilíngue:** imagem/áudio/vídeo (nos modelos indicados) e 140+ idiomas.
- **Limite:** mesmo o 31B fica atrás dos flagships fechados de fronteira em capacidade bruta — a troca é controle, custo e privacidade.

## Para quem faz sentido

Faz sentido para quem quer **rodar um bom modelo localmente** — privacidade, custo previsível e independência de API — do notebook (2B/4B) ao servidor (26B/31B). Combine com [hardware para IA local](/ferramentas/hardware/). Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
