---
title: "Modelos de linguagem (LLMs): panorama e comparação"
description: "O que são LLMs, quem faz os principais modelos, quanto custam por token e como escolher — com tabela comparativa verificada em fonte oficial."
pubDate: "2026-09-24"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: ia
kind: "hub"
canonicalPath: "/ia/modelos-de-linguagem/"
primaryKeyword: "modelos de linguagem"
sources:
  - "https://platform.claude.com/docs/en/about-claude/models/overview"
  - "https://developers.openai.com/api/docs/pricing"
  - "https://ai.google.dev/gemini-api/docs/pricing"
  - "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
  - "https://docs.mistral.ai/getting-started/models/models_overview/"
  - "https://api-docs.deepseek.com/quick_start/pricing"
  - "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-max-its-largest-and-most-capable-flagship-model-to-date_603420"
  - "https://docs.x.ai/docs/models"
  - "https://docs.cohere.com/docs/models"
  - "https://aws.amazon.com/bedrock/pricing/"
  - "https://ai.google.dev/gemma/docs/core"
  - "https://azure.microsoft.com/en-us/products/phi"
draft: false
faq:
  - q: "Qual é o melhor modelo de linguagem hoje?"
    a: >-
      Não existe "melhor LLM" em abstrato — existe o melhor para a sua tarefa e
      o seu orçamento. Classificar chamados em alto volume e redigir um parecer
      jurídico pedem tiers diferentes. A tabela desta página é uma fotografia
      para comparar preço, contexto e abertura; a decisão vem de rodar os seus
      casos reais e escolher o tier mais barato que passa nos seus testes.
  - q: "O modelo mais caro é sempre o melhor?"
    a: >-
      Não. Os tiers intermediários (linhas "mini", "flash" ou equivalentes)
      resolvem a maioria das tarefas de alto volume por uma fração do custo do
      flagship. Suba de tier só quando um caso concreto reprovar no seu conjunto
      de testes — pagar pelo topo "por garantia" costuma ser desperdício.
  - q: "Devo usar um modelo aberto ou fechado?"
    a: >-
      Modelo fechado roda só via API do fornecedor e costuma entregar o topo de
      capacidade sem você gerir infraestrutura. Modelo aberto (open weights)
      pode ser baixado e executado no seu ambiente, o que muda o cálculo a favor
      de privacidade e de custo em escala. Se o dado é sensível ou o volume é
      enorme, um aberto rodando em IA local pode sair melhor que qualquer API.
  - q: "Preciso de uma janela de contexto de 1 milhão de tokens?"
    a: >-
      Quase nunca. A maioria das tarefas cabe com folga em janelas bem menores,
      e contexto gigante custa mais caro por chamada. Quando a aplicação precisa
      responder com base em muitos documentos, montar um RAG que envia só os
      trechos relevantes costuma sair melhor e mais barato do que despejar tudo
      num contexto enorme.
  - q: "Posso confiar nos preços desta tabela?"
    a: >-
      Trate-os como referência verificada na data indicada, não como cotação
      em tempo real — preços e modelos mudam rápido nesse mercado, com faixas
      por volume de contexto e horários de pico em alguns fornecedores. Antes de
      fechar orçamento, confirme o valor atual na página oficial do modelo
      escolhido.
---

Modelos de linguagem (LLMs, de *large language models*) são sistemas treinados para prever texto e, a partir disso, executar tarefas como escrever, resumir, classificar, programar e raciocinar em várias etapas. Escolher um LLM não é procurar "o melhor" em abstrato — é casar a tarefa, o orçamento por token, a janela de contexto e as restrições de privacidade com o modelo certo. Esta página mapeia o ecossistema por família e mantém uma comparação verificada em fonte oficial.

## O que muda de um modelo para outro

Quatro variáveis decidem quase toda escolha prática:

- **Preço por token** — cobrado separadamente para entrada (o que você envia) e saída (o que o modelo gera), quase sempre por milhão de tokens. Saída costuma custar de 3 a 5 vezes mais que entrada.
- **Janela de contexto** — quanto texto o modelo lê de uma vez. Define se um documento grande cabe no prompt ou precisa de [RAG](/ia/rag/).
- **Modalidades** — só texto, ou também imagem, áudio e vídeo.
- **Aberto vs. fechado** — modelo fechado roda só via API do fornecedor; modelo aberto (*open weights*) pode ser baixado e executado localmente, o que muda o cálculo de custo e privacidade (ver [IA local](/ia/ia-local/)).

## Comparação das principais famílias

Preços de entrada/saída por 1 milhão de tokens, do modelo *flagship* de cada família. As fechadas de fronteira aparecem primeiro; depois, as principais desafiantes abertas e regionais. **Verificado em 24/09/2026 nas páginas oficiais** — preços e modelos mudam rápido; confirme na fonte antes de decidir.

| Família | Criador | Flagship | Contexto | Preço in / out (US$/1M) | Aberto? |
|---|---|---|---|---|---|
| [GPT](/ferramentas/modelos/openai-gpt/) | OpenAI | GPT-6 Astra | grande | 10 / 50 | Não |
| [Claude](/ferramentas/modelos/anthropic-claude/) | Anthropic | Opus 5.5 | 1M | 4 / 20 | Não |
| [Gemini](/ferramentas/modelos/google-gemini/) | Google | Gemini 3.1 Pro | 1M | 2 / 12¹ | Não |
| [Grok](/ferramentas/modelos/xai-grok/) | xAI | Grok 4.7 | 500k | 2 / 6⁶ | Não |
| [Nova](/ferramentas/modelos/amazon-nova/) | Amazon | Nova Premier | 1M | 1,20 / 4,80 | Não |
| [Llama](/ferramentas/modelos/meta-llama/) | Meta | Llama 4 | até 10M² | self-host³ | Sim |
| [Mistral](/ferramentas/modelos/mistral/) | Mistral AI | Mistral Large 3 | ver card | 0,5 / 1,5 | Sim |
| [DeepSeek](/ferramentas/modelos/deepseek/) | DeepSeek | V4-Pro | 1M | 0,66 / 1,98⁴ | Sim |
| [Qwen](/ferramentas/modelos/qwen/) | Alibaba | Qwen3.8-Max | até 1M | API⁵ | Parcial⁵ |
| [Command](/ferramentas/modelos/cohere-command/) | Cohere | Command A+ | 128k | self-host³ | Sim |
| [Gemma](/ferramentas/modelos/google-gemma/) | Google | Gemma 4 (31B) | até 256k | self-host³ | Sim |
| [Phi](/ferramentas/modelos/microsoft-phi/) | Microsoft | Phi-4 | até 128k⁷ | self-host³ | Sim |

¹ Gemini 3.1 Pro cobra por faixa de contexto: US$ 2/1M (entrada até 200k) e US$ 4/1M acima; saída US$ 12/1M (até 200k) e US$ 18/1M acima.
² Llama 4 Scout anuncia janela de até 10M tokens.
³ Modelos abertos (Llama, Mistral, Cohere Command, Gemma, Phi) não têm preço de licença: o custo depende do provedor de inferência ou do seu próprio hardware.
⁴ DeepSeek: preço fora de pico; no horário de pico é o dobro.
⁵ Qwen3.8-Max (fechado) é acessado pela API da Alibaba Cloud; a linha 3.6 é aberta e gratuita para self-host — por isso "Parcial".
⁶ Grok 4.7 sobe para US$ 4/12 acima de 200k tokens de contexto.
⁷ Phi: contexto de até 128k na linha Phi-3; confira o valor por modelo no card da Phi-4.

## As famílias, uma a uma

Cada família tem sua página com lançamento, preços por tier, características de teste e para quem faz sentido:

- **[OpenAI — GPT](/ferramentas/modelos/openai-gpt/):** a linha GPT-6 (Astra/Sol/Luna) mais os modelos de raciocínio da série o. Ecossistema mais amplo e integrado ao ChatGPT.
- **[Anthropic — Claude](/ferramentas/modelos/anthropic-claude/):** Opus 5.5, Sonnet 5 e Haiku 4.5. Forte em código, trabalho agêntico longo e seguir instruções com fidelidade.
- **[Google — Gemini](/ferramentas/modelos/google-gemini/):** família Gemini 3, com contexto de 1M e tiers Flash de baixo custo, integrada ao Google Cloud e ao Workspace.
- **[Meta — Llama](/ferramentas/modelos/meta-llama/):** família aberta (open weights) com arquitetura MoE e contexto de até 10M. Baixe os pesos e rode no seu ambiente quando privacidade ou custo em escala pesam mais que o topo absoluto.
- **[Mistral AI](/ferramentas/modelos/mistral/):** a desenvolvedora europeia com a estratégia mais aberta — generalistas sob Apache 2.0/MIT, do compacto Ministral ao Large 3.
- **[DeepSeek](/ferramentas/modelos/deepseek/):** modelos abertos (MIT) com raciocínio embutido e a melhor relação capacidade/custo em código, por API baratíssima ou self-host.
- **[Alibaba — Qwen](/ferramentas/modelos/qwen/):** combina flagship fechado (Qwen3.8-Max) e linha aberta (3.6), forte em multimodal e multilíngue.
- **[xAI — Grok](/ferramentas/modelos/xai-grok/):** flagship fechado (Grok 4.7) com integração ao X e acesso a dados em tempo real.
- **[Amazon Nova](/ferramentas/modelos/amazon-nova/):** os modelos próprios da AWS, multimodais e focados em preço/desempenho dentro do Bedrock.
- **[Cohere — Command](/ferramentas/modelos/cohere-command/):** foco empresarial (RAG, multilíngue), com o flagship Command A+ aberto sob Apache 2.0.
- **[Google — Gemma](/ferramentas/modelos/google-gemma/):** os modelos abertos do Google (2B a 31B), compactos e multimodais, feitos para rodar localmente.
- **[Microsoft — Phi](/ferramentas/modelos/microsoft-phi/):** *small language models* abertos (MIT) que priorizam raciocínio eficiente em hardware modesto e no edge.

## Como escolher sem se prender à moda

Não existe "melhor LLM" — existe o melhor para a sua tarefa e o seu orçamento. Um roteiro curto:

1. **Comece pela tarefa e pelo critério de aceitação**, não pelo modelo. Classificar chamados e escrever um relatório jurídico pedem tiers diferentes.
2. **Prefira o tier mais barato que passa nos seus testes.** Modelos "mini/flash/luna" resolvem a maioria das tarefas de alto volume por uma fração do custo do flagship.
3. **Meça antes de trocar.** Monte um conjunto de casos reais e compare saída, custo e latência — o mesmo método de [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).
4. **Considere abertura e privacidade.** Se o dado é sensível ou o volume é enorme, um modelo aberto rodando em [IA local](/ia/ia-local/) pode sair melhor que qualquer API.

## Próximo passo

Para o panorama do silo, volte a [como usar inteligência artificial](/ia/). Para transformar a tarefa numa especificação que qualquer modelo executa bem, veja [engenharia de prompt](/ia/engenharia-de-prompt/). Quando a aplicação precisa responder com base nos seus documentos, o caminho é [RAG](/ia/rag/).

Esta página é atualizada por lote conforme novas famílias e versões entram no comparativo.
