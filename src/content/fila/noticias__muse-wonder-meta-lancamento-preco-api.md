---
title: "Muse Wonder: lançamento, preço na API e o que muda"
description: "Meta lançou o Muse Wonder em 12/10/2026: modelo fechado a US$ 4/US$ 20 por 1M tokens na Meta Model API. Veja preço, benchmarks, limites e o que falta confirmar."
pubDate: "2026-10-13"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/muse-wonder-meta-lancamento-preco-api/"
primaryKeyword: "muse wonder"
draft: false
sources:
  - "https://about.fb.com/news/2026/10/introducing-muse-wonder-models/"
  - "https://research.meta.ai/blog/muse-wonder"
  - "https://research.meta.ai/static/muse-wonder-model-card"
  - "https://www.facebook.com/MetaforDevelopers/posts/muse-wonder-is-available-today-on-meta-model-api-and-in-muse-code-and-muse-wonde/1552628546897475/"
  - "https://dev.meta.ai/docs/overview"
  - "https://dev.meta.ai/docs/pricing-rate-limits"
  - "https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api"
  - "https://openrouter.ai/meta/muse-wonder"
  - "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
faq:
  - q: "O que é o Muse Wonder?"
    a: "É o modelo de IA mais avançado da Meta, lançado em 12/10/2026 pela Meta Superintelligence Labs junto com o Muse Wonder Full. Os dois são voltados a agentes que executam tarefas longas, com memória entre conversas (Active Memory) e persistência quando a tarefa trava (Active Focus)."
  - q: "Quanto custa o Muse Wonder na API?"
    a: "US$ 4 por 1 milhão de tokens de entrada e US$ 20 por 1 milhão de saída na Meta Model API, com entrada em cache a US$ 0,20 por milhão. É o mesmo preço por token do Claude Opus 5.5."
  - q: "Qual a diferença entre Muse Wonder e Muse Wonder Full?"
    a: "O Wonder Full é mais capaz (56 contra 52 no índice da Artificial Analysis), mas só pode ser usado dentro do Muse Code, em planos de US$ 50 e US$ 200 por mês. O Muse Wonder padrão é o único disponível pela API."
  - q: "O Muse Wonder é open source como o Llama?"
    a: "Não. Nem o Muse Wonder nem o Muse Wonder Full têm pesos para download. Eles só rodam na infraestrutura da Meta, pela API ou pelo Muse Code."
  - q: "O Muse Wonder é melhor que Claude e GPT para programar?"
    a: "Depende da tarefa. No SWE-Marathon, de código de longa duração, o Wonder Full lidera (57,5 contra 46,3 do Claude Opus 5.5). No Terminal-Bench 4.0, o Opus 5.5 e o GPT-6 Astra ficam à frente."
---

A Meta lançou em **12 de outubro de 2026** o **Muse Wonder** e o **Muse Wonder Full**, os modelos mais capazes da empresa até agora, segundo o [anúncio oficial no Meta Newsroom](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/) e o [post técnico do Meta AI Research](https://research.meta.ai/blog/muse-wonder). Os dois foram feitos para **agentes pessoais e profissionais**: tarefas longas, que atravessam vários aplicativos e exigem lembrar contexto.

O que muda para quem desenvolve: o **Muse Wonder** já pode ser chamado pela **Meta Model API** a **US$ 4 por 1 milhão de tokens de entrada e US$ 20 por 1 milhão de saída**, o mesmo patamar do Claude Opus 5.5. O **Muse Wonder Full**, a versão mais forte, **não está na API**: só aparece dentro do Muse Code, o assistente de programação da Meta, para assinantes. E nenhum dos dois tem pesos abertos — uma virada em relação à linha Llama, que popularizou modelos que você baixa e roda na própria infraestrutura.

Para o panorama da família Llama e de como a Meta chegou até aqui, veja a página da [Meta (Llama)](/ferramentas/modelos/meta-llama/).

## O que foi anunciado, em uma tabela

| Item | Muse Wonder | Muse Wonder Full | Fonte |
| --- | --- | --- | --- |
| Data | 12/10/2026 | 12/10/2026 | Meta Newsroom |
| Onde usar hoje | Meta Model API e Muse Code | Só Muse Code (assinantes) | Meta Newsroom |
| Preço na API (entrada / saída) | US$ 4 / US$ 20 por 1M tokens | Não oferecido na API | Meta for Developers; VentureBeat |
| Entrada em cache | US$ 0,20 por 1M tokens | — | VentureBeat, citando a tabela de preços da Meta |
| Busca na web via API | US$ 2,50 por 1.000 buscas | — | VentureBeat |
| ID do modelo na API | `muse-wonder-1.0` (reportado) | — | VentureBeat |
| Janela de contexto | ~1M tokens | ~1M tokens | VentureBeat, citando o model card |
| Entradas | Texto, imagem, áudio e vídeo | Texto, imagem, áudio e vídeo | VentureBeat, citando o model card |
| Pesos abertos | Não | Não | VentureBeat |
| No app Muse | "Em breve", primeiro para assinantes | — | Meta Newsroom |

**Tokens** são os pedaços de texto (partes de palavras) que o modelo lê e gera. É a unidade de cobrança de praticamente todas as APIs de modelos de linguagem.

Uma observação de método: a página de preços da Meta Model API não pôde ser lida diretamente nesta apuração. O preço de US$ 4/US$ 20 aparece no [post oficial da Meta for Developers](https://www.facebook.com/MetaforDevelopers/posts/muse-wonder-is-available-today-on-meta-model-api-and-in-muse-code-and-muse-wonde/1552628546897475/) e é repetido pela [VentureBeat](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api) e pela página do modelo no [OpenRouter](https://openrouter.ai/meta/muse-wonder). Os demais itens marcados como "VentureBeat" vêm da reportagem, que cita a documentação e o model card da Meta.

## O que a Meta diz que o Muse Wonder faz de diferente

A Meta organiza o lançamento em torno de dois conceitos.

**Active Memory** é a capacidade de carregar o que importa entre conversas e recuperar os detalhes relevantes para a tarefa atual. Na prática, é memória de longo prazo aplicada ao trabalho do agente, não só ao bate-papo.

**Active Focus** é a capacidade de continuar trabalhando quando a tarefa fica difícil: tentar outro caminho, se recuperar de erros, pedir esclarecimento quando precisa e confirmar antes de executar algo importante.

Um **agente de IA** é um sistema em que o modelo decide e executa uma sequência de ações (abrir páginas, ler arquivos, chamar APIs, rodar código) para cumprir um objetivo. Se o conceito é novo para você, o artigo [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/) explica a base.

Segundo o post de pesquisa, os dois modelos foram treinados no data center Prometheus, da Meta, combinando pré-treino em larga escala com aprendizado por reforço em tarefas longas. A Meta também afirma que o Muse Wonder Full generaliza melhor para tarefas "fora da distribuição" do que a geração anterior, o Muse Spark 1.3, porque parte de modelos-base maiores. É uma afirmação da própria empresa, ilustrada por um gráfico, sem número absoluto no texto.

## Benchmarks: onde o Wonder lidera e onde fica atrás

**Benchmark** é um conjunto padronizado de tarefas usado para medir e comparar modelos.

### O índice independente

A Artificial Analysis, que avalia modelos de forma independente, publicou notas para os dois no seu Intelligence Index, que combina dez avaliações de raciocínio, conhecimento, código e tarefas profissionais. Os números abaixo foram reportados pela [VentureBeat](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api), com link para os perfis da Artificial Analysis:

| Modelo | Intelligence Index (Artificial Analysis) |
| --- | --- |
| Claude Opus 5.5 | 58 |
| **Muse Wonder Full** | **56** |
| Claude Sonnet 5.5 | 56 |
| GPT-6 Astra | 53 |
| Gemini 4 Argon | 53 |
| Claude Fable 5.1 | 53 |
| **Muse Wonder** | **52** |
| Grok 4.6 (raciocínio alto) | 44 |

A leitura útil: o Wonder Full entra no grupo de topo, empatado com o Claude Sonnet 5.5 e atrás apenas do Claude Opus 5.5. O Wonder padrão — o único disponível na API — fica um ponto abaixo do GPT-6 Astra e do Gemini 4 Argon.

### Os números do model card

A Meta publicou uma tabela maior no [model card do Muse Wonder](https://research.meta.ai/static/muse-wonder-model-card). A transcrição abaixo é da VentureBeat, com notas no esforço máximo de raciocínio:

| Benchmark | Wonder Full | Wonder | GPT-6 Astra | Claude Opus 5.5 |
| --- | --- | --- | --- | --- |
| DeepSWE 1.1 (engenharia de software) | **79,0** | 78,8 | 74,1 | 74,2 |
| SWE-Marathon (código de longa duração) | **57,5** | 53,1 | 42,5 | 46,3 |
| Terminal-Bench 4.0-AA | 57,1 | 52,0 | 59,1 | **59,6** |
| AutomationBench-AA (fluxos de negócio) | **45,4** | 39,1 | 41,6 | 41,2 |
| JobBench (tarefas profissionais) | 75,3 | 70,5 | 66,1 | **75,4** |
| Harvey LAB-AA (jurídico) | **13,1** | 10,0 | 8,6 | 4,2 |
| HealthBench Pro | 62,3 | 60,5 | 65,3 | **65,6** |

Três pontos para quem programa:

1. **Código longo é o ponto forte.** No SWE-Marathon, que mede trabalho sustentado em projetos de software, o Wonder Full faz 57,5 contra 46,3 do Opus 5.5. Mesmo o Wonder padrão (53,1) fica à frente dos dois concorrentes na tabela.
2. **No terminal, OpenAI e Anthropic seguem na frente.** No Terminal-Bench 4.0, que testa execução agêntica em linha de comando, o Opus 5.5 (59,6) e o GPT-6 Astra (59,1) superam o Wonder Full (57,1) e, com folga, o Wonder padrão (52,0).
3. **A metodologia mistura fontes.** Segundo a VentureBeat, o model card combina avaliações feitas pela Meta, números informados pelos fornecedores e resultados de terceiros, e algumas comparações de código usam ferramentas diferentes. Não é um teste controlado com todos os modelos nas mesmas condições.

Benchmark de fornecedor não substitui teste no seu caso de uso. O artigo [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) mostra como montar uma avaliação própria.

## Preço: quanto custa usar o Muse Wonder

| Modelo | Entrada (US$/1M) | Saída (US$/1M) | Entrada em cache (US$/1M) |
| --- | --- | --- | --- |
| Muse Spark 1.3 (Meta) | 1,25 | 4,25 | 0,15 |
| **Muse Wonder (Meta)** | **4,00** | **20,00** | **0,20** |
| Claude Opus 5.5 (Anthropic) | 4,00 | 20,00 | 0,20 |
| Gemini 4 Argon — preço introdutório (Google) | 2,00 | 10,00 | 95% de desconto |
| GPT-6 Astra (OpenAI) | 10,00 | 50,00 | 1,00 |
| Muse Wonder Full | Não oferecido na API | — | — |

Preços da Meta e de concorrentes conforme a tabela da VentureBeat (que cita as páginas oficiais e a Artificial Analysis); Gemini 4 Argon conforme o [anúncio do Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/). Preços mudam: confirme na página de cada fornecedor antes de decidir.

Segundo a VentureBeat, a Meta cobra a mesma tarifa por token independentemente de quanto da janela de contexto a requisição usa. Isso é diferente de modelos que sobem o preço acima de certo tamanho de prompt, como o Gemini 3.1 Pro acima de 200 mil tokens.

### Exemplo de custo por requisição

Cálculo feito a partir dos preços acima, para uma requisição com **100 mil tokens de entrada e 20 mil de saída**:

| Cenário | Custo |
| --- | --- |
| Muse Wonder, sem cache | US$ 0,80 |
| Muse Wonder, 90 mil tokens de entrada vindos de cache | US$ 0,46 |
| Muse Spark 1.3, sem cache | US$ 0,21 |
| Claude Opus 5.5, sem cache | US$ 0,80 |
| Gemini 4 Argon (introdutório), sem cache | US$ 0,40 |
| GPT-6 Astra, sem cache | US$ 2,00 |

Preço por token não é o mesmo que custo por tarefa. A Artificial Analysis estima o custo médio de uma tarefa do seu índice em **US$ 4,52 para o Wonder**, contra US$ 5,98 do Opus 5.5 e US$ 3,26 do GPT-6 Astra, porque cada modelo gasta uma quantidade diferente de tokens para resolver o mesmo problema (dado reportado pela VentureBeat). Para agentes que rodam por muito tempo, o volume de tokens pesa mais que a tabela de preços.

### Muse Code: onde está o Wonder Full

O Wonder Full só pode ser usado dentro do **Muse Code**, o assistente de programação da Meta. Segundo a VentureBeat, ele aparece em dois planos:

- **Power Usage:** US$ 50 por mês, com 20 vezes o uso do plano Everyday.
- **Maximum Usage:** US$ 200 por mês, com 80 vezes o uso do plano Everyday.

O preço do plano Everyday não aparece nas fontes consultadas. Na prática, você pode testar o Wonder Full escrevendo código no Muse Code, mas **não pode embuti-lo no seu produto** via API.

## Limites da API e compatibilidade

Segundo a documentação da Meta citada pela VentureBeat:

- **Limites de taxa:** 3.000 requisições e 4 milhões de tokens por minuto.
- **Contexto:** janela de 1 milhão de tokens.
- **Compatibilidade:** a Meta Model API aceita interfaces compatíveis com as SDKs da OpenAI e da Anthropic, o que reduz o trabalho de testar o Wonder num agente que já usa esses formatos.

**Limite de taxa** (rate limit) é o teto de chamadas ou de tokens que a sua conta pode consumir num intervalo. Ele define quantos agentes você consegue rodar em paralelo sem receber erro.

## Dados e privacidade: o detalhe que pode decidir o uso

A Meta oferece dois modos de uso de dados, segundo a VentureBeat:

| Modo | O que acontece com seus dados | Onde se aplica |
| --- | --- | --- |
| **Standard** | O conteúdo enviado não é usado para treinar os modelos | API pay-as-you-go do Wonder (exclusivamente) |
| **Contributor** | Prompts, código, arquivos e respostas podem ser usados para melhorar modelos futuros | **Padrão nas assinaturas do Muse Code** |

Dá para desligar o modo Contributor no Muse Code, mas a mudança vale só para envios futuros. Os termos da Meta proíbem enviar informação confidencial, sensível ou pessoal enquanto se usa um serviço em modo Contributor.

Também existe **retenção zero de dados** (zero data retention) para organizações qualificadas da Model API, com aprovação separada. Segundo a VentureBeat, essa configuração não suporta estado de conversa no servidor, requisições em segundo plano, upload de arquivos nem busca na web embutida. Isso conflita com parte do que a Meta vende como diferencial (memória e agentes de longa duração).

Para quem vai testar o Wonder Full no Muse Code com código da empresa: **confira o modo antes de colar o primeiro arquivo.**

## Comparação com a geração anterior da Meta

| Característica | Llama 4 (Scout/Maverick) | Muse Spark 1.3 | Muse Wonder |
| --- | --- | --- | --- |
| Pesos abertos | Sim (licença comunitária Llama) | Não | Não |
| Onde roda | Na sua infra ou em provedores | Meta Model API | Meta Model API e Muse Code |
| Preço na API Meta (entrada/saída) | — | US$ 1,25 / US$ 4,25 | US$ 4 / US$ 20 |
| Foco declarado | Uso geral, multimodal | Uso geral, custo baixo | Agentes de longa duração |

Dados da Llama 4 conforme a página da [Meta (Llama)](/ferramentas/modelos/meta-llama/) no misoftware; Muse Spark e Muse Wonder conforme a VentureBeat, citando a Meta.

A mudança estratégica é clara: o modelo mais forte da Meta agora é fechado e cobrado por token, como os da OpenAI, Anthropic e Google. Quem escolheu Llama por privacidade ou para rodar localmente continua precisando de modelos abertos — o Muse Wonder não substitui esse uso. Para esse caminho, veja [IA local](/ia/ia-local/).

## Como testar

1. **Crie uma conta na [Meta Model API](https://dev.meta.ai/docs/overview)** e confirme na documentação o ID do modelo (reportado como `muse-wonder-1.0`) e o preço vigente.
2. **Use a compatibilidade com SDKs existentes.** Se o seu agente já fala o formato da OpenAI ou da Anthropic, a troca deve exigir mudar URL base, chave e nome do modelo. Confirme os detalhes na documentação da Meta; não copie configuração de terceiros sem checar.
3. **Monte um conjunto de avaliação com tarefas reais.** Separe de 20 a 50 casos do seu produto e rode no Wonder e no modelo que você usa hoje. O guia [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/) ajuda a estruturar.
4. **Meça custo por tarefa, não por token.** Registre tokens de entrada, saída e cache por execução completa.
5. **Defina um teto de saída.** Com contexto de 1M tokens e saída a US$ 20 por milhão, uma resposta muito longa pesa no orçamento.
6. **Para o Wonder Full, use o Muse Code** — e só depois de verificar o modo de dados (Standard ou Contributor).

Se você ainda está decidindo qual ferramenta de IA usar para programar, o comparativo de [ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/) ajuda a situar as opções.

## Segurança: o que a Meta afirma

A Meta diz que treinou a família Wonder para não compartilhar informação privada sem permissão, recusar pedidos para atos realmente danosos e ainda permitir que equipes de segurança usem o modelo para achar falhas no próprio código. O lançamento segue o Meta Superintelligence Scaling Framework, segundo o Newsroom.

O post de pesquisa traz gráficos de taxa de sucesso de ataques de execução de código não autorizada, violações de privacidade e recusas em biologia e cibersegurança, mas **sem os números no texto**. A Meta diz que um **relatório completo de segurança será publicado "em breve"**.

## O que ainda não está confirmado

- **Preço oficial lido na fonte:** a página de preços da Meta Model API não pôde ser acessada nesta apuração; o valor de US$ 4/US$ 20 vem do post oficial da Meta for Developers e de terceiros.
- **ID do modelo, limites de taxa, janela de 1M e modalidades:** reportados pela VentureBeat a partir da documentação e do model card; confirme na documentação antes de usar em produção.
- **Wonder Full na API:** a Meta não anunciou preço nem data.
- **Preço do plano Everyday do Muse Code:** não informado nas fontes consultadas.
- **Data do Wonder no app Muse:** só "em breve", primeiro para assinantes.
- **Disponibilidade no Brasil:** nenhuma fonte lista países para a Meta Model API ou para o Muse Code.
- **Relatório de segurança completo:** prometido, ainda não publicado.
- **Benchmarks do model card:** misturam avaliações da Meta, de fornecedores e de terceiros.
