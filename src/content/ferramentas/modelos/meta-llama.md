---
name: "Meta: Llama (aberto) e Muse (fechado) — modelos e preços"
description: "Os modelos da Meta: Llama 4 de peso aberto (Scout, Maverick, Behemoth) e a família fechada Muse, com Muse Wonder a US$ 4/US$ 20 por 1M tokens. Specs verificados."
pubDate: 2026-09-24
updatedDate: 2026-10-13
vendor: "Meta"
category: "Modelos de IA"
pricing: "Llama aberto (sem custo de licença) + Muse pago por token (Meta Model API)"
platforms: ["Self-host", "Provedores de inferência", "Cloud", "Meta Model API"]
rating: 9.0
url: "https://www.llama.com"
featured: true
---

**Llama** é a família de modelos de linguagem da Meta e a única de **peso aberto** (*open weights*) entre as grandes famílias de fronteira: os pesos podem ser baixados e executados no seu próprio ambiente, sob a licença comunitária Llama. A geração atual é a **Llama 4**, com arquitetura *mixture-of-experts* (MoE) e multimodalidade nativa (texto e imagem). É a escolha quando privacidade, controle ou custo em escala pesam mais que ter o topo absoluto de capacidade.

## Novidades de outubro de 2026: Muse Wonder, a família fechada da Meta

Além da linha aberta Llama, a Meta mantém desde 2026 a família **Muse**, desenvolvida pela Meta Superintelligence Labs (MSL). Os modelos Muse são **fechados**: não há pesos para download, e o acesso é pela **Meta Model API** (cobrança por token), pelo assistente de programação **Muse Code** ou pelo app **Muse**.

Em **12/10/2026** a Meta lançou o **Muse Wonder** e o **Muse Wonder Full**, seus modelos mais capazes até agora, focados em agentes que executam tarefas longas ([anúncio oficial](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/)):

| Modelo | Status | Onde usar | Preço na API (entrada/saída, US$/1M) |
| --- | --- | --- | --- |
| Muse Wonder | Disponível | Meta Model API e Muse Code | 4 / 20 (cache: 0,20) |
| Muse Wonder Full | Disponível | Só Muse Code (planos de US$ 50 e US$ 200/mês) | Não oferecido na API |
| Muse Spark 1.3 | Disponível | Meta Model API | 1,25 / 4,25 (cache: 0,15) |

Preços conforme a Meta for Developers e a tabela da [VentureBeat](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api), que cita a página de preços da Meta; confirme na [Meta Model API](https://dev.meta.ai/docs/overview) antes de decidir.

No Intelligence Index da Artificial Analysis, o Wonder Full marcou 56 e o Wonder, 52 — contra 58 do Claude Opus 5.5 e 53 do GPT-6 Astra e do Gemini 4 Argon (números reportados pela VentureBeat).

Para quem escolhe entre as duas famílias: **Llama** continua sendo o caminho para rodar o modelo na sua infraestrutura; **Muse** é o caminho para capacidade de fronteira, pagando por token e aceitando que os dados passem pela Meta.

Detalhes, benchmarks, modos de privacidade e o que ainda não está confirmado: [Muse Wonder: lançamento, preço na API e o que muda](/noticias/muse-wonder-meta-lancamento-preco-api/).

## Todos os modelos e specs

Numa arquitetura MoE, só uma parte dos parâmetros ("ativos") é usada por token — o que reduz o custo de inferência frente ao total de parâmetros. **Verificado em 24/09/2026** no [anúncio oficial da Meta](https://ai.meta.com/blog/llama-4-multimodal-intelligence/).

| Modelo | Ativos | Total | Experts | Contexto | Modalidades | Status |
|---|---|---|---|---|---|---|
| Llama 4 Scout | 17B | 109B | 16 | até 10M | texto + imagem | Aberto |
| Llama 4 Maverick | 17B | 400B | 128 | grande | texto + imagem | Aberto |
| Llama 4 Behemoth | 288B | ~2T | 16 | — | multimodal | Preview |

O **Scout** é enxuto o bastante para caber em uma única GPU de data center; o **Maverick** amplia a capacidade com mais experts; o **Behemoth** (preview) é o modelo-professor de topo.

## Custo

Os modelos **Llama não têm preço de licença**: os pesos são gratuitos sob a licença comunitária Llama (confira os termos oficiais antes de uso comercial). Já os modelos **Muse** são cobrados por token na Meta Model API — o Muse Wonder custa US$ 4 por 1M tokens de entrada e US$ 20 por 1M de saída ([detalhes](/noticias/muse-wonder-meta-lancamento-preco-api/)). O custo real do Llama depende de onde você roda — no seu próprio hardware (ver [IA local](/ia/ia-local/) e [hardware para IA local](/ferramentas/hardware/)) ou por um provedor de inferência, que cobra por token a preços que variam por fornecedor.

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

Se você precisa de capacidade de fronteira da Meta e não de pesos abertos, a família **Muse** (Muse Wonder na API, Muse Wonder Full no Muse Code) é a alternativa — fechada e paga por token, como GPT, Claude e Gemini.
