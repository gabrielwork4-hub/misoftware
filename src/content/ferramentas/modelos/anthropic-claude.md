---
name: "Anthropic Claude"
description: "A família Claude da Anthropic — Opus 5.5, Sonnet 5, Haiku 4.5 e Fable 5.1 — com janela de 1M de tokens, preços por token, datas de lançamento e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Anthropic"
category: "Modelos de IA"
pricing: "Pago por token (API) + Claude.ai"
platforms: ["API", "Claude.ai", "AWS", "Google Cloud", "Azure"]
rating: 9.6
url: "https://www.anthropic.com"
featured: true
---

**Claude** é a família de modelos de linguagem da Anthropic, acessada pela API, pelo Claude.ai e pelas principais nuvens. São modelos **fechados**, reconhecidos por desempenho em código, trabalho agêntico de longo horizonte e fidelidade a instruções. Em setembro de 2026 a linha atual reúne quatro modelos, todos com entrada de texto e imagem, saída em texto, uso de ferramentas e *thinking* adaptativo.

## Todos os modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [documentação oficial da Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Contexto | Saída máx. | Para quê |
|---|---|---|---|---|---|
| Fable 5.1 | 10 | 50 | 1M | 128k | Raciocínio e agêntico exigente |
| Opus 5.5 | 4 | 20 | 1M | 128k | Código longo e trabalho de conhecimento |
| Sonnet 5 | 2 | 10 | 1M | 128k | Melhor equilíbrio velocidade/inteligência |
| Haiku 4.5 | 1 | 5 | 200k | 64k | O mais rápido, quase-fronteira |

A escala vai do **Haiku** (mais rápido e barato) ao **Fable 5.1** (raciocínio de ponta), com **Opus** e **Sonnet** no meio. Modelos anteriores (Opus 5, Opus 4.x, Sonnet 4.x) seguem disponíveis como *legacy*.

## Lançamento

**Claude Opus 5.5** foi anunciado em **22 de setembro de 2026**, abrindo a família Claude 5.5. Segundo a Anthropic, entrega o nível do Fable 5.1 na maior parte do trabalho e custa cerca de **40% menos** para operar que o Opus 5. Está disponível na API, no Claude.ai e nas nuvens AWS, Google Cloud e Azure.

## Benchmarks (Opus 5.5)

Resultados divulgados pela Anthropic para o Opus 5.5. **Verificado em 24/09/2026** ([Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)). Números entre marcas diferentes não são diretamente comparáveis — cada uma roda os testes no próprio ambiente.

| Benchmark | Opus 5.5 | O que mede |
|---|---|---|
| Terminal-Bench 4.0 | 66,4% | Código agêntico em terminal |
| CursorBench 4.0 | 57,8% | Código agêntico |
| Humanity's Last Exam (c/ ferramentas) | 67,7% | Raciocínio multidisciplinar |
| OSWorld 2.0 | 81,8% | Uso de computador (parcial) |
| GDPval-AA v2.1 | 1846 Elo | Trabalho de conhecimento (44 profissões) |
| Chartography (c/ ferramentas) | 89,0% | Leitura de gráficos |

A própria Anthropic observa que, nesse nível de capacidade, "margens de benchmark são um guia menos confiável para diferenças no mundo real" — mais um motivo para validar na sua tarefa.

## Modalidades e arquitetura

Todos os modelos atuais aceitam **texto e imagem** na entrada e produzem texto, com **uso de ferramentas** e **1M de tokens de contexto** (200k no Haiku). O diferencial de operação é o *thinking* adaptativo: o modelo decide quanto "pensar" antes de responder, ajustável por um parâmetro de esforço — útil em tarefas de raciocínio, dispensável em tarefas simples.

## Características de teste e limites

- **Código e agentes:** o ponto mais forte da família — Opus e Fable lideram em benchmarks de código agêntico e trabalho de longo horizonte.
- **Fidelidade a instruções:** Claude tende a seguir o prompt com literalidade; bom para pipelines previsíveis, exige prompts claros.
- **Custo:** Haiku e Sonnet cobrem alto volume barato; reserve Opus/Fable para o que realmente exige a fronteira.
- **Limite:** benchmark não substitui teste próprio — ver [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

## Para quem faz sentido

Boa escolha quando código, agentes que rodam por muitos passos e obediência precisa ao prompt são prioridade — e quando você quer 1M de contexto sem premium. Para tirar mais de qualquer Claude, veja [engenharia de prompt](/ia/engenharia-de-prompt/); para comparar com GPT, Gemini e Llama, o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
