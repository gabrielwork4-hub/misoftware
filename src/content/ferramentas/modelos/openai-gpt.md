---
name: "OpenAI GPT"
description: "A família de modelos GPT da OpenAI — a linha GPT-6 (Astra, Sol, Luna) e os modelos de raciocínio da série o, com preços por token verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "OpenAI"
category: "Modelos de IA"
pricing: "Pago por token (API) + ChatGPT"
platforms: ["API", "ChatGPT", "Azure"]
rating: 9.5
url: "https://openai.com"
featured: true
---

A família **GPT** da OpenAI é o conjunto de modelos de linguagem por trás do ChatGPT e da API da OpenAI. Em setembro de 2026 o topo da linha é a geração **GPT-6**, acompanhada dos modelos de raciocínio da **série o**. É o ecossistema mais amplo do mercado: modelos fechados, acessados por API ou pelos produtos ChatGPT, com forte integração de ferramentas.

## Modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [pricing da OpenAI](https://developers.openai.com/api/docs/pricing) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Para quê |
|---|---|---|---|
| GPT-6 Astra | 10 | 50 | Máxima capacidade |
| GPT-6 Sol | 2 | 10 | Código e trabalho agêntico |
| GPT-6 Luna | 0,10 | 0,50 | Alto volume, tarefas focadas |
| GPT-5.6 Sol | 4 | 20 | Geração anterior, capaz |
| GPT-5.5 | 5 | 30 | Contexto < 272k |
| o3 | 2 | 8 | Raciocínio (custo-benefício) |
| o3-pro | 20 | 80 | Raciocínio pesado |

## Lançamento

**GPT-6 Astra** foi anunciado em **8 de setembro de 2026** como o modelo mais capaz e alinhado da OpenAI. Em **22 de setembro de 2026**, a família ganhou **GPT-6 Sol** (recomendado para código e fluxos agênticos) e **GPT-6 Luna** (tarefas de alto volume), a preços por token menores que os da geração GPT-5.6.

## Características de teste

A OpenAI posiciona a série o (o1, o3) para tarefas que exigem raciocínio explícito em várias etapas — matemática, lógica, decisões condicionais — enquanto a linha GPT-6 cobre uso geral, multimodal e agêntico. Os números de benchmark de cada modelo estão nos *system cards* e nas páginas de anúncio oficiais; use-os como referência e confirme no seu próprio conjunto de testes, porque desempenho varia muito por tarefa. O critério que importa é o de [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/): a saída melhorou no *seu* dataset?

## Para quem faz sentido

Vale quando você quer o ecossistema mais completo e integrado — ChatGPT, API madura, ampla oferta de ferramentas e tiers do flagship ao econômico. Para tarefas de alto volume, os tiers "Luna" cortam o custo drasticamente. Se o seu caso é escrever e manter prompts com previsibilidade, comece por [engenharia de prompt](/ia/engenharia-de-prompt/); para comparar com as outras famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
