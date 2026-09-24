---
title: "Modelos de linguagem (LLMs): panorama e comparação"
description: "O que são LLMs, quem faz os principais modelos, quanto custam por token e como escolher — com uma tabela comparativa verificada em fonte oficial e uma página por família."
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
draft: false
---

Modelos de linguagem (LLMs, de *large language models*) são sistemas treinados para prever texto e, a partir disso, executar tarefas como escrever, resumir, classificar, programar e raciocinar em várias etapas. Escolher um LLM não é procurar "o melhor" em abstrato — é casar a tarefa, o orçamento por token, a janela de contexto e as restrições de privacidade com o modelo certo. Esta página mapeia o ecossistema por família e mantém uma comparação verificada em fonte oficial.

## O que muda de um modelo para outro

Quatro variáveis decidem quase toda escolha prática:

- **Preço por token** — cobrado separadamente para entrada (o que você envia) e saída (o que o modelo gera), quase sempre por milhão de tokens. Saída costuma custar de 3 a 5 vezes mais que entrada.
- **Janela de contexto** — quanto texto o modelo lê de uma vez. Define se um documento grande cabe no prompt ou precisa de [RAG](/ia/rag/).
- **Modalidades** — só texto, ou também imagem, áudio e vídeo.
- **Aberto vs. fechado** — modelo fechado roda só via API do fornecedor; modelo aberto (*open weights*) pode ser baixado e executado localmente, o que muda o cálculo de custo e privacidade (ver [IA local](/ia/ia-local/)).

## Comparação das famílias de fronteira

Preços de entrada/saída por 1 milhão de tokens, do modelo *flagship* de cada família. **Verificado em 24/09/2026 nas páginas oficiais** — preços e modelos mudam rápido; confirme na fonte antes de decidir.

| Família | Criador | Flagship atual | Contexto | Preço in / out (US$/1M) | Aberto? |
|---|---|---|---|---|---|
| [GPT](/ferramentas/modelos/openai-gpt/) | OpenAI | GPT-6 Astra | grande (não detalhado) | 10 / 50 | Não |
| [Claude](/ferramentas/modelos/anthropic-claude/) | Anthropic | Opus 5.5 | 1M | 4 / 20 | Não |
| [Gemini](/ferramentas/modelos/google-gemini/) | Google | Gemini 3.1 Pro | 1M | 2 / 12¹ | Não |
| [Llama](/ferramentas/modelos/meta-llama/) | Meta | Llama 4 (Scout/Maverick) | até 10M² | Sim (open weights) |

¹ Gemini 3.1 Pro cobra por faixa de contexto: US$ 2/1M (entrada até 200k) e US$ 4/1M acima; saída US$ 12/1M (até 200k) e US$ 18/1M acima.
² Llama 4 Scout anuncia janela de até 10M tokens. Sendo aberto, não tem preço de licença — o custo por token depende do provedor de inferência ou do seu próprio hardware.

## As famílias, uma a uma

Cada família tem sua página com lançamento, preços por tier, características de teste e para quem faz sentido:

- **[OpenAI — GPT](/ferramentas/modelos/openai-gpt/):** a linha GPT-6 (Astra/Sol/Luna) mais os modelos de raciocínio da série o. Ecossistema mais amplo e integrado ao ChatGPT.
- **[Anthropic — Claude](/ferramentas/modelos/anthropic-claude/):** Opus 5.5, Sonnet 5 e Haiku 4.5. Forte em código, trabalho agêntico longo e seguir instruções com fidelidade.
- **[Google — Gemini](/ferramentas/modelos/google-gemini/):** família Gemini 3, com contexto de 1M e tiers Flash de baixo custo, integrada ao Google Cloud e ao Workspace.
- **[Meta — Llama](/ferramentas/modelos/meta-llama/):** a única família aberta do grupo. Baixe os pesos e rode no seu ambiente quando privacidade ou custo em escala pesam mais que ter o topo absoluto.

## Como escolher sem se prender à moda

Não existe "melhor LLM" — existe o melhor para a sua tarefa e o seu orçamento. Um roteiro curto:

1. **Comece pela tarefa e pelo critério de aceitação**, não pelo modelo. Classificar chamados e escrever um relatório jurídico pedem tiers diferentes.
2. **Prefira o tier mais barato que passa nos seus testes.** Modelos "mini/flash/luna" resolvem a maioria das tarefas de alto volume por uma fração do custo do flagship.
3. **Meça antes de trocar.** Monte um conjunto de casos reais e compare saída, custo e latência — o mesmo método de [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).
4. **Considere abertura e privacidade.** Se o dado é sensível ou o volume é enorme, um modelo aberto rodando em [IA local](/ia/ia-local/) pode sair melhor que qualquer API.

## Próximo passo

Para o panorama do silo, volte a [como usar inteligência artificial](/ia/). Para transformar a tarefa numa especificação que qualquer modelo executa bem, veja [engenharia de prompt](/ia/engenharia-de-prompt/). Quando a aplicação precisa responder com base nos seus documentos, o caminho é [RAG](/ia/rag/).

Esta página é atualizada por lote conforme novas famílias e versões entram no comparativo.
