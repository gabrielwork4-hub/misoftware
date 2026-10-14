---
name: "Microsoft Phi"
description: "A família Phi da Microsoft — small language models (SLMs) abertos sob MIT, como Phi-4, Phi-4-mini e Phi-4-multimodal, feitos para raciocínio eficiente em hardware modesto. Specs verificados em fonte oficial."
pubDate: 2026-09-24
updatedDate: 2026-10-12
vendor: "Microsoft"
category: "Modelos de IA"
pricing: "Aberto (MIT) — sem custo de licença"
platforms: ["Self-host", "Azure AI", "Hugging Face", "Edge"]
rating: 8.7
url: "https://azure.microsoft.com/products/phi"
featured: true
---

**Phi** é a família de **small language models (SLMs)** da Microsoft: modelos abertos e pequenos, sob licença **MIT**, cuja proposta é entregar raciocínio e código acima do que o tamanho sugere. São feitos para rodar **localmente, no edge ou em Azure AI** com custo baixo — a aposta oposta à dos flagships gigantes. A geração atual é a **Phi-4**.

## Todos os modelos

**Verificado em 24/09/2026** na [página oficial do Phi (Azure)](https://azure.microsoft.com/en-us/products/phi) e nos *model cards* no [Hugging Face](https://huggingface.co/microsoft/phi-4). Todos sob **licença MIT** (uso comercial livre).

| Modelo | Foco | Modalidades |
|---|---|---|
| Phi-4 | SLM de raciocínio (flagship da linha) | texto |
| Phi-4-mini | Ainda menor, com function calling embutido | texto |
| Phi-4-multimodal | 5,6B; fala + visão + texto num só modelo | texto, imagem, áudio |

O **Phi-4-multimodal** unifica reconhecimento e tradução de fala, visão e texto, com vocabulário de 200 mil tokens e suporte a mais de 20 idiomas. O **Phi-4-mini** traz atenção *grouped-query* e chamada de função nativa.

## Lançamento

A linha Phi-4 sucede a Phi-3, ampliando as capacidades de raciocínio e adicionando as variantes **mini** e **multimodal**. A Microsoft mantém a estratégia de publicar os pesos abertos sob MIT a cada geração.

## Benchmarks

A Microsoft avalia o Phi-4 em benchmarks padrão — **MMLU** (conhecimento), **MATH** e **MGSM** (matemática), **GPQA** (ciência), **HumanEval** (código), **DROP** e **SimpleQA**. **Verificado em 24/09/2026** ([Azure — Phi](https://azure.microsoft.com/en-us/products/phi)). Os números por benchmark estão nos *model cards* oficiais; consulte-os e valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)). O argumento recorrente da linha é competir com modelos bem maiores em raciocínio e matemática — impressionante para o tamanho, mas confirme no seu caso.

## Modalidades e arquitetura

O foco é **eficiência**: modelos pequenos, com contexto até 128k na linha Phi-3 (confira o valor por modelo no card da Phi-4). O **Phi-4-multimodal** (5,6B) integra fala, visão e texto numa arquitetura única — raro num modelo tão compacto.

## Características de teste e limites

- **Raciocínio por tamanho:** a proposta central — SLMs que rendem em matemática, código e raciocínio acima do peso, ideais para rodar local ([IA local](/ia/ia-local/)).
- **Aberto e MIT:** licença permissiva, uso comercial livre, pesos no Hugging Face.
- **Multimodal compacto:** fala + visão + texto no Phi-4-multimodal.
- **Limite:** por serem pequenos, ficam atrás dos grandes em tarefas amplas e de contexto muito longo — a troca é custo e portabilidade.

## Para quem faz sentido

Faz sentido para **edge, dispositivos e aplicações locais** onde custo, latência e privacidade importam mais que a capacidade máxima — e para quem já usa Azure. Combine com [hardware para IA local](/ferramentas/hardware/). Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).

## Novidades de outubro/2026: Microsoft-Decision-1 (fora da linha Phi)

Em **9 de outubro de 2026** a Microsoft lançou o **Microsoft-Decision-1**, um *decision model*: em vez de gerar texto, ele recebe uma pergunta e uma lista fechada de opções e devolve uma probabilidade calibrada para cada opção, em JSON. **Ele não faz parte da família Phi.**

| | Phi-4 (família) | Microsoft-Decision-1 |
| --- | --- | --- |
| Função | gerar texto (SLM) | escolher entre opções fixas |
| Base | arquitetura própria | Qwen3.5-9B (Alibaba), pós-treinado |
| Pesos | abertos (MIT) | não divulgados |
| Contexto | conferir no card de cada modelo | 32.768 tokens |
| Preço | gratuito para rodar local | US$ 0,042 por 1M tokens de entrada; saída sem custo |
| Status | disponível | prévia pública no Foundry; também no OpenRouter |

**Verificado em 12/10/2026** no [blog do Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-decision-1-in-microsoft-foundry-for-decision-and-classific/4562742), no [card do modelo](https://ai.azure.com/catalog/models/Microsoft-Decision-1) e no [Command Line](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/).

Pelos números da Microsoft, o Decision-1 tem 83,5% de acurácia média em 36 benchmarks e latência mediana de 85 ms. Ele serve para classificação, roteamento, papel de juiz e guardrails em [agentes](/ia/agentes/); não serve para gerar texto, resumir ou traduzir. Se o seu caso é rodar um modelo pequeno **local**, a resposta continua sendo o Phi; se é tomar milhares de decisões fechadas por minuto na nuvem, vale testar o Decision-1.

Detalhes, benchmarks e o que ainda não está confirmado: [Microsoft-Decision-1: lançamento, preço e o que muda](/noticias/microsoft-decision-1-lancamento-preco-o-que-muda/).
