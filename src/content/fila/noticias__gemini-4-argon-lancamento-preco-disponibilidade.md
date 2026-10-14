---
title: "Gemini 4 Argon: preço, disponibilidade e como usar na API"
description: "Gemini 4 Argon está disponível desde 13/10/2026: US$ 2/US$ 10 por 1M tokens até 30/11, ID gemini-4-argon, janela de 1M e o que muda ao migrar."
pubDate: "2026-10-02"
updatedDate: "2026-10-13"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/gemini-4-argon-lancamento-preco-disponibilidade/"
primaryKeyword: "gemini 4 argon"
draft: false
sources:
  - "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
  - "https://deepmind.google/fairwind-program/"
  - "https://ai.google.dev/gemini-api/docs/pricing"
  - "https://www.vals.ai/benchmarks/vals_index"
  - "https://cwe-bench.com/"
  - "https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release"
  - "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
  - "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/"
  - "https://aistudio.google.com/learn/gemini-4-argon-developer-guide"
  - "https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api"
faq:
  - q: "O que é o Gemini 4 Argon?"
    a: "É o primeiro modelo da geração Gemini 4 do Google, anunciado em 30/09/2026, voltado a engenharia de software de longo prazo, trabalho corporativo (jurídico e financeiro) e defesa cibernética."
  - q: "Já dá para usar o Gemini 4 Argon?"
    a: "Sim. Desde 13 de outubro de 2026 o Argon está disponível no plano pago da Gemini API (AI Studio, Android Studio e Gemini platform), no Google Antigravity para assinantes Ultra e no app Gemini para assinantes Pro e Ultra."
  - q: "Qual é o ID do Gemini 4 Argon na API?"
    a: "`gemini-4-argon`, usado na Interactions API e nos SDKs `google-genai`."
  - q: "Até quando vale o preço promocional do Gemini 4 Argon?"
    a: "Até 30 de novembro de 2026: US$ 2 por 1M tokens de entrada e US$ 10 por 1M de saída. A partir de 1º de dezembro, US$ 4 e US$ 20."
  - q: "Quanto custa o Gemini 4 Argon na API?"
    a: "No lançamento, US$ 2 por 1 milhão de tokens de entrada e US$ 10 por 1 milhão de saída, com 95% de desconto em entrada em cache. Após o período introdutório, US$ 4 e US$ 20."
  - q: "Qual a diferença entre o Gemini 4 Argon e o Gemini 3.1 Pro?"
    a: "O Argon usa uma janela unificada de 1 milhão de tokens (entrada, raciocínio e saída), com saída padrão de 64 mil e long decode para ir além, e é focado em tarefas longas de código e trabalho corporativo. O Gemini 3.1 Pro tem janela de 1M e saída de até 64 mil. Os dois estão disponíveis."
  - q: "O Gemini 4 Argon é melhor que GPT-6 e Claude para programar?"
    a: "Depende da tarefa. O Argon lidera em DeepSWE v1.1 (77,9%), mas fica atrás do GPT-6 Astra e do Claude Opus 5.5 em benchmarks de terminal citados pela VentureBeat."
---

**Atualizado em 13/10/2026:** o Google liberou o **Gemini 4 Argon** para todos. O modelo, anunciado em **30 de setembro de 2026** com acesso restrito a defensores cibernéticos, passou a estar **disponível globalmente em 13 de outubro** no plano pago da Gemini API (Google AI Studio, Android Studio e Gemini platform), no Google Antigravity para assinantes Google AI Ultra e no app Gemini e no AI Mode da Busca para assinantes Pro e Ultra ([blog do Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)).

O que muda na prática: o ID na API é **`gemini-4-argon`**; entrada, raciocínio e saída dividem uma **janela unificada de 1 milhão de tokens**; e o preço introdutório de **US$ 2 por 1M tokens de entrada e US$ 10 por 1M de saída** vale **até 30 de novembro de 2026**. A partir de 1º de dezembro, passa a US$ 4 e US$ 20 ([guia do desenvolvedor](https://aistudio.google.com/learn/gemini-4-argon-developer-guide)).

Para o panorama completo da família (Gemini 3.1 Pro, tiers Flash, preços e benchmarks verificados), veja a página do [Google Gemini](/ferramentas/modelos/google-gemini/).

## O que foi anunciado, em uma tabela

| Item | O que o Google informou | Fonte |
| --- | --- | --- |
| Nome | Gemini 4 Argon | Blog do Google, 30/09/2026 |
| Posicionamento | "Frontier model" para código, trabalho corporativo e defesa cibernética | Blog do Google |
| Janela de contexto | 1M tokens unificados (entrada + raciocínio + saída); saída padrão de 64K | Guia do desenvolvedor, 13/10/2026 |
| Preço introdutório | US$ 2 / 1M input; US$ 10 / 1M output, até 30/11/2026 | Guia do desenvolvedor |
| Cache de entrada | 95% de desconto sobre o preço de input | Blog do Google |
| Preço padrão | US$ 4 / 1M input; US$ 20 / 1M output, a partir de 1/12/2026 | Guia do desenvolvedor |
| Acesso hoje | Plano pago da Gemini API; Antigravity (Ultra); app Gemini e AI Mode (Pro e Ultra); Fairwind sem salvaguardas cibernéticas | Blog do Google, 13/10/2026 |
| Data de disponibilidade geral | 13/10/2026 | Blog do Google |
| ID do modelo na API | `gemini-4-argon` | Guia do desenvolvedor |

**Tokens** são os pedaços de texto (partes de palavras) que o modelo lê e gera; é a unidade de cobrança de praticamente todas as APIs de modelos de linguagem.

## Quem tem acesso desde 13 de outubro

| Público | Onde | Requisito |
| --- | --- | --- |
| Desenvolvedores | Gemini API (Interactions API e SDKs `google-genai`), Google AI Studio, Android Studio | Plano **pago** da Gemini API |
| Assinantes Google AI Ultra | Google Antigravity e AI Studio | Assinatura Ultra |
| Empresas | Gemini for business, API e Antigravity | Contrato Google Cloud |
| Usuários finais | App Gemini e AI Mode na Busca | Assinatura Google AI Pro ou Ultra |
| Defensores cibernéticos | Versão sem salvaguardas cibernéticas | Aprovação no [Fairwind Program](https://deepmind.google/fairwind-program/) |

O Google diz que o lançamento é global, mas não publica lista de países. Conta no nível gratuito da API não aparece entre os públicos com acesso.

## Janela unificada de 1 milhão de tokens: o que isso significa

O dado técnico mais concreto do anúncio é o tamanho da janela. Até aqui, o Gemini 3.1 Pro gerava no máximo 64K tokens por resposta, segundo a própria página de modelos do site, que reflete o model card oficial. No Argon, entrada, raciocínio e saída dividem uma **janela unificada de 1M tokens**; a saída padrão continua em 64K e, para gerar mais que isso, é preciso usar o *long decode* (veja "Como usar na API", abaixo).

O argumento do Google é que, com essa folga, o modelo consegue "pensar a fundo e gerar centenas de milhares de tokens em uma única trajetória". Na prática, isso interessa a tarefas como:

- migrações grandes de código, em que o modelo precisa reescrever muitos arquivos de uma vez;
- geração de relatórios longos a partir de muitos documentos;
- execuções de agentes que acumulam raciocínio e saída ao longo de muitas etapas.

Um **agente de IA** é um sistema em que o modelo decide e executa uma sequência de ações (ler arquivos, rodar comandos, chamar APIs) para cumprir um objetivo, em vez de só responder uma pergunta. Se esse conceito ainda é novo para você, o artigo [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/) explica a base.

Saída longa também tem custo longo: cada 1M tokens de saída custa **US$ 10 no preço introdutório** e **US$ 20 no preço padrão**.

## Preço: lançamento, padrão e comparação

O Google trabalha com dois preços: o introdutório vale **até 30 de novembro de 2026** e o padrão, **a partir de 1º de dezembro** ([guia do desenvolvedor](https://aistudio.google.com/learn/gemini-4-argon-developer-guide)).

| Modelo | Input (US$/1M) | Output (US$/1M) | Observação |
| --- | --- | --- | --- |
| Gemini 4 Argon (introdutório, até 30/11/2026) | 2 | 10 | Cache de input com 95% de desconto |
| Gemini 4 Argon (padrão, a partir de 1/12/2026) | 4 | 20 | Após o período introdutório |
| Gemini 3.1 Pro (≤200K de contexto) | 2 | 12 | Preço da [Gemini API](https://ai.google.dev/gemini-api/docs/pricing), verificado em 24/09/2026 |
| Gemini 3.1 Pro (>200K de contexto) | 4 | 18 | Idem |

Segundo a [VentureBeat](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release), o preço introdutório do Argon equivale a um quinto do preço do GPT-6 Astra (US$ 10/US$ 50) e à metade do Claude Opus 5.5 (US$ 4/US$ 20); no preço padrão, o Argon empata com o Opus 5.5. Esses valores de concorrentes são da reportagem e devem ser conferidos nas páginas de preço de cada empresa antes de qualquer decisão.

### Exemplo de custo por requisição

Cálculo feito a partir dos preços oficiais, para uma requisição com 100 mil tokens de entrada e 20 mil de saída, sem cache:

| Modelo / preço | Entrada | Saída | Total |
| --- | --- | --- | --- |
| Argon (lançamento) | US$ 0,20 | US$ 0,20 | **US$ 0,40** |
| Argon (padrão) | US$ 0,40 | US$ 0,40 | **US$ 0,80** |
| Gemini 3.1 Pro (≤200K) | US$ 0,20 | US$ 0,24 | **US$ 0,44** |

No preço de lançamento, o Argon fica praticamente no mesmo patamar do Gemini 3.1 Pro para esse perfil de uso. No preço padrão, custa cerca do dobro. Quem já usa o 3.1 Pro em produção deve planejar a troca considerando o preço padrão, não o promocional.

A Meta lançou em 12/10 o Muse Wonder, que cobra US$ 4/US$ 20 por 1M tokens — o mesmo valor do Argon no preço padrão ([detalhes](/noticias/muse-wonder-meta-lancamento-preco-api/)).

## Benchmarks divulgados

**Benchmark** é um conjunto padronizado de tarefas usado para medir e comparar modelos. Os números abaixo estão no texto do anúncio oficial:

| Benchmark | Gemini 4 Argon | O que mede |
| --- | --- | --- |
| DeepSWE v1.1 | 77,9% | Engenharia de software real, de longo prazo |
| AutomationBench (Zapier) | 51,3% (1º lugar) | Execução de ponta a ponta em funções de negócio |
| LVBench | 91,7% | Compreensão de vídeos longos |
| CWE-bench v1 | 68% (empate em 1º) | Correção de vulnerabilidades de segurança |

O Google também afirma que o Argon lidera o [Vals Index](https://www.vals.ai/benchmarks/vals_index), que pondera finanças, código, jurídico e tributário pelo peso de cada setor no PIB dos EUA, e que tem desempenho de ponta no Vals Finance Agent v2 e no Harvey's Legal Agent Benchmark.

### Onde o Argon fica atrás

A comparação com concorrentes aparece em gráficos do anúncio. A VentureBeat transcreveu esses gráficos: o Argon lideraria sozinho em 12 de 18 benchmarks, mas ficaria atrás em três testes de código e terminal:

| Benchmark | Gemini 4 Argon | Melhor concorrente |
| --- | --- | --- |
| FrontierSWE v2 | 55,0% | GPT-6 Astra: 65,5% |
| Terminal-Bench Science 0.1 | 57,6% | GPT-6 Astra: 68,1% |
| Terminal-Bench 4.0 | 57,4% | Claude Opus 5.5: 66,4% |

Esses números são da transcrição da VentureBeat, não do texto do Google. A leitura útil para devs: o Argon parece mais forte em tarefas longas de engenharia e de conhecimento corporativo do que em execução agêntica no terminal, onde OpenAI e Anthropic seguem à frente nos testes citados.

Como sempre, benchmark de fornecedor não substitui teste no seu caso de uso. O artigo [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) mostra como montar uma avaliação própria.

## Segurança: o que o Google diz ter feito

O anúncio dedica uma seção inteira às salvaguardas antes da disponibilidade ampla, em quatro frentes:

1. **Mau uso:** o modelo é treinado para recusar pedidos de ataques cibernéticos ou QBRN (químicos, biológicos, radiológicos e nucleares), seguindo o Frontier Safety Framework do Google. A empresa diz monitorar ativações internas do modelo para detectar abuso.
2. **Prompt injection:** ataque em que instruções maliciosas são escondidas no conteúdo que o modelo lê (uma página, um e-mail, um arquivo) para sequestrar o comportamento dele. O Google diz que o Argon lidera o benchmark de injeção indireta da Gray Swan. A VentureBeat reporta taxa de sucesso de ataque de 0,7% para o Argon, contra 1,0% do Claude e 8,5% do GPT-6 Astra.
3. **Desalinhamento:** monitoramento da cadeia de raciocínio e das ações, com interrupção da execução quando o modelo tenta ir além da intenção do usuário.
4. **Sandboxes:** ambientes isolados e selados antes de treinos ou avaliações de alto risco.

Para quem pretende colocar o Argon dentro de agentes com acesso a ferramentas, prompt injection é o risco número um. Robustez maior no benchmark ajuda, mas não elimina a necessidade de limitar permissões e revisar o que o agente executa — o mesmo princípio de [revisão de código com IA sem perder o controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/).

## Casos internos citados pelo Google

O anúncio traz exemplos de uso interno que ajudam a entender o tipo de tarefa para a qual o modelo foi pensado:

- **Migração de C/C++ para Rust:** agentes Argon estão migrando bases de código do Google, de dezenas de milhares de linhas em bibliotecas como re2 e libgav1 até mais de 800 mil linhas no kernel Zircon, do Fuchsia. O Google ressalta que essas reescritas passam por auditoria automatizada e manual antes de ir para produção.
- **libgav1:** agentes substituíram 32 mil linhas de código SIMD por Rust seguro que o compilador vetoriza sozinho; o decodificador resultante roda **2,7x mais rápido** que o port anterior em Rust, com saída de vídeo idêntica.
- **Memória nos data centers:** agentes analisaram telemetria de profiling e aplicaram otimizações que liberaram mais de **300 TiB** de memória, com economia total estimada entre 500 TiB e 1 PiB.
- **Computação quântica:** em um exemplo, o modelo superou em 40% uma referência publicada de otimização de recursos (qubits × portas).
- **Cibersegurança externa:** a Wiz usa o Argon no programa Scan for Good e, segundo o Google, encontrou uma vulnerabilidade crítica em software de saúde usado por hospitais que modelos anteriores não tinham detectado.

São números divulgados pelo próprio Google, sem auditoria independente até agora.

## Comparação com a geração anterior

| Característica | Gemini 3.1 Pro | Gemini 4 Argon |
| --- | --- | --- |
| Status | Disponível na API e no app | Disponível desde 13/10/2026 (plano pago da API) |
| Saída | Até 64K tokens | Padrão de 64K; mais com *long decode* (janela unificada de 1M) |
| Janela de contexto | 1M tokens | 1M tokens unificados (entrada + raciocínio + saída) |
| Preço (input/output, US$/1M) | 2/12 (≤200K) | 2/10 (até 30/11/2026); 4/20 (a partir de 1/12) |
| Foco declarado | Uso geral, multimodal | Código de longo prazo, trabalho corporativo, defesa cibernética |

Dados do Gemini 3.1 Pro conforme a página do [Google Gemini](/ferramentas/modelos/google-gemini/) no misoftware, verificados no model card e na tabela de preços oficial em 24/09/2026.

## Como usar na API

Exemplo oficial do [guia do desenvolvedor](https://aistudio.google.com/learn/gemini-4-argon-developer-guide), com o SDK Python `google-genai`:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-argon",
    input="Build a single-file HTML drum machine and synth using the Web Audio API ...",
    generation_config={
        "thinking_level": "medium"  # "low" | "medium" (padrão) | "high"
    },
)
print(interaction.output_text)
```

O parâmetro **`thinking_level`** controla quanto o modelo "pensa" antes de responder: `high` para depuração complexa e correção de vulnerabilidades, `medium` (padrão) para equilíbrio entre custo e precisão, `low` para classificação e extração rápidas.

### Respostas acima de 64K tokens (*long decode*)

Por padrão, a saída continua limitada a 65.536 tokens. Para ir além, o Google orienta usar `background=True` e definir `max_output_tokens` acima de 65.536 na Interactions API, consultando o status até a geração terminar. Defina o teto com cuidado: no preço padrão, 1M tokens de saída custa US$ 20.

## O que muda ao migrar do Gemini 3.1 Pro

Segundo o guia do Google:

1. **Troque `thinking_budget` por `thinking_level`.** O `thinking_budget` foi descontinuado e retorna aviso.
2. **Remova `temperature`, `top_p` e `top_k`.** O Argon ignora valores personalizados de amostragem e retorna aviso de descontinuação.
3. **Abandone o cache explícito** (`cached_content`). O cache implícito é automático, com 95% de desconto na entrada em cache.
4. **Aumente os timeouts.** Prompts difíceis podem levar vários minutos; o Google sugere `background=True` ou timeout de cliente de 15 a 20 minutos.
5. **Revise limites fixos de 64K** no seu código, que podem cortar respostas longas.

Antes de trocar de modelo em produção, rode o seu conjunto de casos reais ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)). Para comparar o Argon com outras opções para programar, veja o comparativo de [ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/).

## O que ainda não está confirmado

- **Disponibilidade por país:** o Google fala em lançamento global, mas não publica lista; não há menção específica ao Brasil.
- **Preço da versão do Fairwind:** a nota de rodapé diz que os preços se aplicam "ao modelo destinado ao acesso público".
- **Comparações com GPT-6 Astra e Claude Opus 5.5:** vêm de gráficos transcritos pela imprensa. No índice da Artificial Analysis, segundo a VentureBeat, o Argon marca 53, empatado com o GPT-6 Astra e abaixo do Claude Opus 5.5 (58).
- **Outros modelos da família Gemini 4:** o Google diz que "o resto da família" virá depois, sem datas.
