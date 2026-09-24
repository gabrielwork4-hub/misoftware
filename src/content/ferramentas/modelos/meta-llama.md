---
name: "Meta Llama"
description: "A família Llama da Meta — modelos abertos (open weights) Llama 4 Scout, Maverick e Behemoth, com arquitetura MoE multimodal e janela de até 10M de tokens."
pubDate: 2026-09-24
vendor: "Meta"
category: "Modelos de IA"
pricing: "Aberto (open weights) — sem custo de licença"
platforms: ["Self-host", "Provedores de inferência", "Cloud"]
rating: 9.0
url: "https://www.llama.com"
featured: true
---

**Llama** é a família de modelos de linguagem da Meta e a única de peso aberto (*open weights*) entre as grandes famílias de fronteira: os pesos podem ser baixados e executados no seu próprio ambiente. A geração atual é a **Llama 4**, com arquitetura *mixture-of-experts* (MoE) e multimodalidade nativa. É a escolha quando privacidade, controle ou custo em escala pesam mais que ter o topo absoluto de capacidade.

## Modelos

Llama 4 usa MoE — só uma parte dos parâmetros ("ativos") é usada por token, o que reduz o custo de inferência. **Verificado em 24/09/2026** no [anúncio oficial da Meta](https://ai.meta.com/blog/llama-4-multimodal-intelligence/).

| Modelo | Parâmetros ativos | Experts | Contexto | Status |
|---|---|---|---|---|
| Llama 4 Scout | 17B | 16 | até 10M | Aberto |
| Llama 4 Maverick | 17B | 128 | grande | Aberto |
| Llama 4 Behemoth | 288B (~2T total) | 16 | — | Preview |

## Custo

Diferente das famílias fechadas, **Llama não tem preço de licença**: os pesos são gratuitos sob a licença Llama. O custo real depende de onde você roda — no seu próprio hardware (ver [IA local](/ia/ia-local/) e [hardware para IA local](/ferramentas/hardware/)) ou por um provedor de inferência, que cobra por token a preços que variam por fornecedor. Confirme os termos da licença Llama antes de uso comercial.

## Características de teste

A Meta posiciona **Scout** como o melhor modelo multimodal da sua classe cabendo em uma única GPU de data center, e **Maverick** como o melhor multimodal da sua faixa; **Behemoth** (preview) mira o topo em benchmarks de STEM. O maior diferencial prático é a **janela de até 10M de tokens** do Scout e o fato de rodar no seu ambiente. Como sempre, trate os números do anúncio como referência e valide no seu conjunto de casos ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Para quem faz sentido

É a melhor opção quando você precisa de **controle e privacidade** (dado sensível que não deve sair do seu ambiente), quer evitar dependência de um fornecedor, ou tem volume alto o bastante para que self-hosting saia mais barato que pagar por token. Exige, em troca, infraestrutura e operação. Para comparar com as famílias fechadas GPT, Claude e Gemini, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/); para rodar modelos localmente, comece por [IA local](/ia/ia-local/).
