---
name: "Meta Llama"
description: "A família Llama da Meta — modelos abertos (open weights) Llama 4 Scout, Maverick e Behemoth, com arquitetura MoE multimodal, janela de até 10M de tokens e specs verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Meta"
category: "Modelos de IA"
pricing: "Aberto (open weights) — sem custo de licença"
platforms: ["Self-host", "Provedores de inferência", "Cloud"]
rating: 9.0
url: "https://www.llama.com"
featured: true
---

**Llama** é a família de modelos de linguagem da Meta e a única de **peso aberto** (*open weights*) entre as grandes famílias de fronteira: os pesos podem ser baixados e executados no seu próprio ambiente, sob a licença comunitária Llama. A geração atual é a **Llama 4**, com arquitetura *mixture-of-experts* (MoE) e multimodalidade nativa (texto e imagem). É a escolha quando privacidade, controle ou custo em escala pesam mais que ter o topo absoluto de capacidade.

## Todos os modelos e specs

Numa arquitetura MoE, só uma parte dos parâmetros ("ativos") é usada por token — o que reduz o custo de inferência frente ao total de parâmetros. **Verificado em 24/09/2026** no [anúncio oficial da Meta](https://ai.meta.com/blog/llama-4-multimodal-intelligence/).

| Modelo | Ativos | Total | Experts | Contexto | Modalidades | Status |
|---|---|---|---|---|---|---|
| Llama 4 Scout | 17B | 109B | 16 | até 10M | texto + imagem | Aberto |
| Llama 4 Maverick | 17B | 400B | 128 | grande | texto + imagem | Aberto |
| Llama 4 Behemoth | 288B | ~2T | 16 | — | multimodal | Preview |

O **Scout** é enxuto o bastante para caber em uma única GPU de data center; o **Maverick** amplia a capacidade com mais experts; o **Behemoth** (preview) é o modelo-professor de topo.

## Custo

Diferente das famílias fechadas, **Llama não tem preço de licença**: os pesos são gratuitos sob a licença comunitária Llama (confira os termos oficiais antes de uso comercial). O custo real depende de onde você roda — no seu próprio hardware (ver [IA local](/ia/ia-local/) e [hardware para IA local](/ferramentas/hardware/)) ou por um provedor de inferência, que cobra por token a preços que variam por fornecedor.

## Benchmarks

A Meta divulga majoritariamente **comparações qualitativas** para a Llama 4, não uma tabela numérica ampla. **Verificado em 24/09/2026** ([anúncio Llama 4](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)):

- **Maverick:** ELO **1417** no LMArena; posicionado com a melhor relação desempenho/custo da sua classe, superando GPT-4o e Gemini 2.0 Flash em benchmarks amplamente reportados.
- **Scout:** "melhor modelo multimodal da sua classe", à frente de Gemma 3, Gemini 2.0 Flash-Lite e Mistral 3.1.
- **Behemoth (preview):** supera GPT-4.5, Claude Sonnet 3.7 e Gemini 2.0 Pro em vários benchmarks de STEM (MATH-500, GPQA Diamond).

As comparações da Meta usam concorrentes de gerações anteriores — sinal de que a Llama 4 é de um ciclo anterior aos flagships atuais de OpenAI, Anthropic e Google. Para o seu caso, o que decide não é o benchmark do anúncio, e sim o teste na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)).

## Características de teste e limites

- **Abertura e privacidade:** o único da lista que roda no seu ambiente — dado sensível não precisa sair da sua infra.
- **Custo em escala:** sem preço por token do fornecedor; com volume alto, self-hosting pode sair mais barato.
- **Contexto:** o Scout anuncia janela de até 10M de tokens, a maior do grupo.
- **Limite:** exige infraestrutura e operação próprias, e a capacidade de topo tende a ficar atrás dos flagships fechados mais recentes.

## Para quem faz sentido

É a melhor opção quando você precisa de **controle e privacidade**, quer evitar dependência de um fornecedor, ou tem volume alto o bastante para que self-hosting compense — aceitando, em troca, cuidar da infraestrutura. Para rodar modelos localmente, comece por [IA local](/ia/ia-local/); para comparar com as famílias fechadas GPT, Claude e Gemini, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
