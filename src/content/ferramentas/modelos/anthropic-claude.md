---
name: "Anthropic Claude"
description: "A família Claude da Anthropic — Opus 5.5, Sonnet 5 e Haiku 4.5 — com janela de 1M de tokens, preços por token e datas de lançamento verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Anthropic"
category: "Modelos de IA"
pricing: "Pago por token (API) + Claude.ai"
platforms: ["API", "Claude.ai", "AWS", "Google Cloud", "Azure"]
rating: 9.6
url: "https://www.anthropic.com"
featured: true
---

**Claude** é a família de modelos de linguagem da Anthropic, acessada pela API, pelo Claude.ai e pelas principais nuvens. Em setembro de 2026 a linha atual reúne **Opus 5.5** (topo), **Sonnet 5** (equilíbrio) e **Haiku 4.5** (rápido), além do **Fable 5.1** para raciocínio mais exigente. É reconhecida por desempenho em código, trabalho agêntico de longo horizonte e fidelidade a instruções.

## Modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [documentação oficial da Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Contexto | Para quê |
|---|---|---|---|---|
| Fable 5.1 | 10 | 50 | 1M | Raciocínio e trabalho agêntico exigente |
| Opus 5.5 | 4 | 20 | 1M | Código longo e trabalho de conhecimento |
| Sonnet 5 | 2 | 10 | 1M | Melhor equilíbrio velocidade/inteligência |
| Haiku 4.5 | 1 | 5 | 200k | O mais rápido, quase-fronteira |

## Lançamento

**Claude Opus 5.5** foi anunciado em **22 de setembro de 2026**, abrindo a família Claude 5.5. Segundo a Anthropic, ele entrega o nível do Fable 5.1 na maior parte do trabalho e custa cerca de **40% menos** para operar que o Opus 5. Está disponível na API, no Claude.ai e nas nuvens AWS, Google Cloud e Azure.

## Características de teste

A Anthropic posiciona **Opus** para trabalho agêntico e de conhecimento de ponta, **Sonnet** para o melhor custo/velocidade e **Haiku** para o menor custo com inteligência próxima da fronteira. Todos os modelos atuais suportam texto e imagem na entrada, saída em texto, múltiplos idiomas e uso de ferramentas, com **janela de 1M de tokens** (200k no Haiku) e *thinking* adaptativo. Os benchmarks por modelo estão nos *model cards* e *system cards* oficiais — trate-os como referência e valide no seu conjunto de casos, como em [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

## Para quem faz sentido

Boa escolha quando código, agentes que rodam por muitos passos e obediência precisa ao prompt são prioridade — e quando você quer 1M de contexto sem premium. O tier Haiku resolve alto volume barato; o Sonnet é o "meio" que atende a maioria das aplicações. Para o panorama e a comparação com GPT, Gemini e Llama, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/); para tirar mais de qualquer Claude, [engenharia de prompt](/ia/engenharia-de-prompt/).
