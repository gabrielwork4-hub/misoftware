---
name: "OpenAI GPT"
description: "A família de modelos GPT da OpenAI — linha GPT-6 (Astra, Sol, Luna), GPT-5.6, GPT-5.5 e os modelos de raciocínio da série o — com preços por token e benchmarks verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "OpenAI"
category: "Modelos de IA"
pricing: "Pago por token (API) + ChatGPT"
platforms: ["API", "ChatGPT", "Azure"]
rating: 9.5
url: "https://openai.com"
featured: true
---

A família **GPT** da OpenAI é o conjunto de modelos de linguagem por trás do ChatGPT e da API da OpenAI. São modelos **fechados** (acessados por API ou pelos produtos ChatGPT), com o ecossistema de ferramentas mais amplo do mercado. Em setembro de 2026 a linha se organiza em três blocos: a geração **GPT-6** (topo), a geração anterior **GPT-5.6/5.5** e os modelos de raciocínio da **série o**.

## Todos os modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 24/09/2026** na [pricing oficial da OpenAI](https://developers.openai.com/api/docs/pricing) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Para quê |
|---|---|---|---|
| GPT-6 Astra | 10 | 50 | Máxima capacidade, alinhamento |
| GPT-6 Sol | 2 | 10 | Código e trabalho agêntico |
| GPT-6 Luna | 0,10 | 0,50 | Alto volume, tarefas focadas |
| GPT-5.6 Sol | 4 | 20 | Geração anterior, capaz |
| GPT-5.6 Terra | 2 | 12 | Intermediário 5.6 |
| GPT-5.6 Luna | 0,20 | 1,20 | Econômico 5.6 |
| GPT-5.5 | 5 | 30 | Contexto até 272k |
| o1 | 15 | 60 | Raciocínio (1ª geração) |
| o1-pro | 150 | 600 | Raciocínio máximo |
| o3 | 2 | 8 | Raciocínio custo-benefício |
| o3-pro | 20 | 80 | Raciocínio pesado |
| o3-mini | 1,10 | 4,40 | Raciocínio econômico |

A nomenclatura da linha GPT-6 segue três nomes: **Astra** (capacidade máxima), **Sol** (código/agêntico) e **Luna** (alto volume, mais barato) — o mesmo padrão se repete em GPT-5.6.

## Lançamento

**GPT-6 Astra** foi anunciado em **8 de setembro de 2026** como o modelo mais capaz e alinhado da OpenAI. Em **22 de setembro de 2026**, a família ganhou **GPT-6 Sol** (código e fluxos agênticos) e **GPT-6 Luna** (alto volume), a preços por token menores que os da geração GPT-5.6.

## Benchmarks (GPT-6 Astra)

Resultados divulgados pela OpenAI para o flagship. **Verificado em 24/09/2026** ([GPT-6 Astra](https://openai.com/index/gpt-6-astra/), system card). Compare com cautela: cada fornecedor roda os testes no seu próprio ambiente, então números entre marcas diferentes não são diretamente comparáveis.

| Benchmark | GPT-6 Astra | O que mede |
|---|---|---|
| GPQA Diamond | 96,0% | Raciocínio científico nível pós-graduação |
| DeepSWE v1.1 | 74% | Engenharia de software (recorde à época) |
| Terminal-Bench 4.0 | 57,9% | Código agêntico em terminal |

A OpenAI destaca a **eficiência**: no Terminal-Bench 4.0, Astra atinge 57,9% com custo por tarefa estimado menor que o de concorrentes diretos.

## Modalidades e arquitetura

As linhas GPT-6 e GPT-5.6 aceitam **texto e imagem** na entrada (visão), com saída em texto. A janela de contexto não é detalhada na pricing oficial para toda a linha; o GPT-5.5 é documentado com contexto de **até 272k tokens**. A série **o** (o1, o3) é otimizada para raciocínio explícito em várias etapas — o modelo "pensa" antes de responder, ao custo de mais tokens e latência.

## Características de teste e limites

- **Uso geral e agêntico:** a linha GPT-6 cobre a maioria das tarefas; **Sol** é o recomendado para código e agentes.
- **Raciocínio:** para matemática, lógica e decisões condicionais, a série o costuma render mais que os modelos GPT de mesmo preço — mas infla custo em tarefas simples.
- **Alto volume:** os tiers **Luna** cortam o custo em uma ordem de grandeza; ideais para classificação e extração em escala.
- **Limite:** benchmark alto não garante acerto na *sua* tarefa. Valide no seu conjunto de casos, como em [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

## Para quem faz sentido

Vale quando você quer o ecossistema mais completo — ChatGPT, API madura, ampla oferta de ferramentas e tiers do flagship ao econômico. Para escrever e manter prompts com previsibilidade, comece por [engenharia de prompt](/ia/engenharia-de-prompt/); para comparar com Claude, Gemini e Llama, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
