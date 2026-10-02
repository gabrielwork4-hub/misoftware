---
title: "GPT-6.1 Sol: lançamento, preço e o que muda na API"
description: "OpenAI lançou o GPT-6.1 Sol em 29/09/2026 no DevDay: mesmo preço do GPT-6 Sol, cache 50% mais barato e desempenho perto do Astra. Veja o que muda."
pubDate: "2026-10-02"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/gpt-6-1-sol-lancamento-preco-o-que-muda/"
primaryKeyword: "gpt-6.1 sol"
draft: false
sources:
  - "https://openai.com/index/introducing-gpt-6-1-sol/"
  - "https://openai.com/index/devday-2026-recap/"
  - "https://developers.openai.com/api/docs/pricing"
  - "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
  - "https://openai.com/index/gpt-6-astra/"
  - "https://deploymentsafety.openai.com/gpt-6-1-sol"
  - "https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006"
  - "https://developers.openai.com/api/docs/guides/ultrafast-mode"
  - "https://www.anthropic.com/claude-sonnet-5-5"
  - "https://vercel.com/changelog"
faq:
  - q: "O que é o GPT-6.1 Sol?"
    a: "É uma atualização do GPT-6 Sol, modelo intermediário da OpenAI para código, agentes e trabalho profissional. Foi lançado em 29/09/2026 no DevDay e, segundo a OpenAI, chega perto do GPT-6 Astra nessas tarefas por um quinto do preço por token do Astra."
  - q: "Quanto custa o GPT-6.1 Sol na API?"
    a: "No nível padrão e em contexto curto, US$ 2 por milhão de tokens de entrada, US$ 0,10 por milhão de tokens de entrada em cache e US$ 10 por milhão de tokens de saída. Nos níveis Batch e Flex, os preços caem pela metade."
  - q: "O GPT-6.1 Sol é mais caro que o GPT-6 Sol?"
    a: "Não. Entrada e saída custam o mesmo, e a entrada em cache ficou 50% mais barata (de US$ 0,20 para US$ 0,10 por milhão de tokens)."
  - q: "O GPT-6.1 Sol já está no ChatGPT?"
    a: "Está no ChatGPT Work e no Codex para os planos Plus, Pro, Business, Enterprise e Edu. Segundo a OpenAI, ele ainda não está disponível no Chat."
  - q: "Qual a diferença entre GPT-6 Astra, Sol e Luna?"
    a: "Astra é o modelo mais capaz e mais caro, indicado para as tarefas mais difíceis. Sol é o intermediário para código e agentes, com melhor custo-benefício. Luna é o mais barato, pensado para alto volume, como classificação e extração."
---

Em 29 de setembro de 2026, durante o DevDay, a OpenAI lançou o **GPT-6.1 Sol**, uma atualização do GPT-6 Sol voltada a código agêntico, uso de computador e trabalho profissional. Segundo o [anúncio oficial](https://openai.com/index/introducing-gpt-6-1-sol/), o modelo chega perto do GPT-6 Astra nessas tarefas cobrando um quinto do preço por token do Astra. Na API, ele se chama `gpt-6.1-sol`.

O que muda na prática: o preço padrão por token **não mudou** em relação ao GPT-6 Sol (US$ 2 de entrada e US$ 10 de saída por milhão de tokens), mas o **cache de entrada caiu pela metade**, de US$ 0,20 para US$ 0,10 por milhão. Para quem roda agentes que reaproveitam o mesmo contexto entre chamadas, é o mesmo orçamento com um modelo mais capaz e uma conta de cache menor. No ChatGPT, o modelo está no ChatGPT Work e no Codex para os planos pagos, mas ainda não aparece no Chat.

## O que a OpenAI anunciou

O GPT-6.1 Sol é o terceiro lançamento da linha GPT-6 em menos de um mês. O GPT-6 Astra veio primeiro, como topo de linha ([OpenAI](https://openai.com/index/gpt-6-astra/)). Em 22/09/2026, a família ganhou o GPT-6 Sol e o GPT-6 Luna ([OpenAI](https://openai.com/index/introducing-gpt-6-sol-and-luna/)). Uma semana depois, o Sol recebeu a versão 6.1.

A lógica de nomes segue a mesma de antes:

- **Astra:** capacidade máxima, para as tarefas mais difíceis.
- **Sol:** código e fluxos agênticos, com melhor relação custo-benefício.
- **Luna:** alto volume e baixo custo, para classificação e extração em escala.

O anúncio do 6.1 foi um entre mais de 20 feitos no DevDay 2026, segundo o [resumo oficial do evento](https://openai.com/index/devday-2026-recap/). Os outros que mais afetam devs estão na seção "O que mais saiu no DevDay", abaixo.

## Preço do GPT-6.1 Sol na API

A tabela abaixo usa a [página oficial de preços da OpenAI](https://developers.openai.com/api/docs/pricing), consultada em 02/10/2026. Valores em dólar por milhão de tokens, no nível padrão e em contexto curto.

| Modelo | Entrada | Entrada em cache | Saída |
| --- | --- | --- | --- |
| GPT-6 Astra | 10,00 | 1,00 | 50,00 |
| **GPT-6.1 Sol** | **2,00** | **0,10** | **10,00** |
| GPT-6 Sol (anterior) | 2,00 | 0,20 | 10,00 |
| GPT-6 Luna | 0,10 | 0,01 | 0,50 |

O preço do GPT-6 Sol em cache vem do anúncio de 22/09, que fala em desconto de 90% na leitura de cache. A própria OpenAI confirma a comparação: o cache do 6.1 é "50% menor que o do GPT-6 Sol" e 95% menor que o preço de entrada padrão.

**Entrada em cache** é a parte do prompt que se repete entre chamadas, como o prompt de sistema, a descrição das ferramentas ou o histórico de um agente. Quando o provedor reaproveita esse trecho, ele cobra uma fração do preço normal.

### Outros níveis de preço

A mesma página lista outros níveis para o `gpt-6.1-sol`:

| Nível | Entrada | Entrada em cache | Saída |
| --- | --- | --- | --- |
| Padrão (contexto curto) | 2,00 | 0,10 | 10,00 |
| Padrão (contexto longo) | 4,00 | 0,20 | 15,00 |
| Batch e Flex (contexto curto) | 1,00 | 0,05 | 5,00 |
| Fast (contexto curto) | 4,00 | 0,20 | 20,00 |

**Batch** é o processamento em lote, sem resposta imediata. **Flex** é um nível mais barato com latência maior. A gravação de cache (_cache write_) custa US$ 2,50 por milhão em contexto curto. A página não informa, no trecho consultado, a partir de quantos tokens um pedido passa a ser cobrado como contexto longo.

Atenção a agregadores: um site de comparação de preços publicou o GPT-6.1 Sol a US$ 1 / US$ 5. Esse valor corresponde ao nível Batch/Flex, não ao padrão. Confira sempre na página oficial.

## Desempenho: o que a OpenAI mostra nos benchmarks

Todos os números abaixo são da OpenAI, no [post de lançamento](https://openai.com/index/introducing-gpt-6-1-sol/). Cada laboratório roda os testes no próprio ambiente, então comparações entre empresas pedem cautela.

| Área | Benchmark | O que a OpenAI relata |
| --- | --- | --- |
| Código | DeepSWE v1.1 | Empata com o GPT-6 Astra a cerca de um quinto do custo; 6,4 pontos acima da melhor marca do GPT-6 Sol |
| Trabalho com PDFs | GDP.pdf | Supera o Claude Opus 5.5 com menos da metade do custo por tarefa |
| Automação de negócios | AutomationBench 1.0.6 | 2,2 pontos acima do Opus 5.5 (esforço médio), a cerca de um terço do custo; 4,8 pontos acima do GPT-6 Sol |
| Uso de computador | OSWorld 2.0 (offline) | 7 pontos acima do GPT-6 Sol; 2,1 pontos abaixo do Astra a cerca de um sétimo do custo |
| Ciência | Terminal-Bench Science 0.1 | Mais que dobra a nota do GPT-6 Sol; US$ 5,47 por tarefa, contra US$ 23,21 do Opus 5.5 e US$ 23,80 do Astra |
| Factualidade | Avaliação interna | Respostas com erro factual caem de 11,4% para 7,7% em esforço baixo |

Três pontos de leitura:

1. **O ganho é medido em custo por tarefa, não só em nota.** A OpenAI compara modelos pelo que eles entregam por dólar gasto em cada nível de esforço de raciocínio.
2. **O Astra continua na frente nas tarefas mais difíceis.** No Terminal-Bench Science, o Astra tem a maior nota (68,1%), e a própria OpenAI recomenda o Astra para pesquisa científica mais exigente.
3. **A avaliação de factualidade é feita com conversas difíceis.** São conversas em que usuários marcaram erro de um modelo anterior, e a OpenAI avisa que elas não representam o uso típico.

O DeepSWE avalia agentes em tarefas longas de engenharia de software em bases de código reais. O OSWorld mede agentes que operam aplicativos de computador. O AutomationBench, da Zapier, testa fluxos de negócio com 47 ferramentas.

## Segurança e alinhamento

Segundo a OpenAI, o GPT-6.1 Sol melhora em relação ao GPT-6 Sol nas avaliações de alinhamento e fica mais próximo do Astra. Um exemplo do post: em um teste em que a ferramenta de busca do agente está quebrada, o 6.1 deixa de avisar o usuário em 2,1% dos casos. O GPT-6 Sol falhava em 4,9%, o Astra em 1,5% e o Luna em 28,7%.

A empresa também diz não ter observado tentativas de contornar o revisor automático de segurança. Os detalhes estão no [adendo ao system card](https://deploymentsafety.openai.com/gpt-6-1-sol). Para quem usa agentes em produção, a recomendação não muda: limites de acesso fora do modelo continuam necessários. A notícia sobre o [NVIDIA OpenShell](/noticias/nvidia-openshell-seguranca-agentes-ia-lancamento/) mostra uma forma de fazer isso.

## Onde o GPT-6.1 Sol está disponível

| Superfície | Situação em 02/10/2026 | Fonte |
| --- | --- | --- |
| API da OpenAI | Disponível como `gpt-6.1-sol` | [OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/) |
| ChatGPT Work e Codex | Plus, Pro, Business, Enterprise e Edu | [OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/) |
| Chat do ChatGPT | Ainda não disponível | [OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/) |
| Vercel AI Gateway | Disponível desde 29/09/2026 | [Vercel changelog](https://vercel.com/changelog) |
| Ultrafast | "Nos próximos dias", sem data | [OpenAI](https://openai.com/index/devday-2026-recap/) |

O anúncio não traz restrição regional para a API. O acesso no Brasil segue as mesmas regras da conta da OpenAI usada para os modelos anteriores.

## Como testar o GPT-6.1 Sol

Quem já usa o GPT-6 Sol pela API só precisa trocar o nome do modelo. O exemplo abaixo segue o formato da documentação oficial da OpenAI para a Responses API, com o SDK de Python:

```python
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-6.1-sol",
    input="Revise esta função e aponte casos de borda não tratados: ...",
)

print(response.output_text)
```

Antes de migrar um fluxo em produção, vale um roteiro curto:

1. **Separe um conjunto de casos reais.** Use 20 a 50 entradas do seu próprio uso, com a resposta esperada. Nota de benchmark não garante acerto na sua tarefa.
2. **Rode os dois modelos lado a lado.** Compare `gpt-6-sol` e `gpt-6.1-sol` com o mesmo prompt e o mesmo nível de esforço.
3. **Meça custo por tarefa, não por token.** Some tokens de entrada, de cache e de saída por caso. Se o seu agente repete muito contexto, a queda do cache aparece aqui.
4. **Confira se o cache está sendo usado.** Mantenha o prefixo do prompt estável (instruções e ferramentas primeiro, dados variáveis no fim) para aproveitar o desconto.

O artigo [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/) detalha como montar esse conjunto de testes.

## Quanto muda na conta: um exemplo

Pense em um agente de código que envia 50 mil tokens de contexto por chamada, dos quais 40 mil se repetem (instruções, ferramentas e arquivos já lidos), e gera 2 mil tokens de saída. Em 1.000 chamadas, com os preços oficiais em contexto curto:

| Item | GPT-6 Sol | GPT-6.1 Sol |
| --- | --- | --- |
| 40 milhões de tokens em cache | US$ 8,00 | US$ 4,00 |
| 10 milhões de tokens de entrada nova | US$ 20,00 | US$ 20,00 |
| 2 milhões de tokens de saída | US$ 20,00 | US$ 20,00 |
| **Total** | **US$ 48,00** | **US$ 44,00** |

A conta é ilustrativa, não inclui gravação de cache e supõe o mesmo número de tokens nos dois modelos. Na prática, o total também depende de quantos tokens cada modelo gasta para resolver a tarefa, o que só o seu teste mostra.

## Como o 6.1 Sol se compara às alternativas

O lançamento saiu um dia depois do Claude Sonnet 5.5, da Anthropic, anunciado em 28/09/2026 ([Anthropic](https://www.anthropic.com/claude-sonnet-5-5)). Os dois disputam o mesmo espaço: modelo intermediário para código e agentes, abaixo do topo de linha de cada empresa.

| | GPT-6.1 Sol | Claude Sonnet 5.5 |
| --- | --- | --- |
| Entrada (US$/1M) | 2,00 | 2,00 |
| Saída (US$/1M) | 10,00 | 10,00 |
| Leitura de cache (US$/1M) | 0,10 | 0,20 |
| Gravação de cache (US$/1M) | 2,50 | 2,50 |
| Nome na API | `gpt-6.1-sol` | `claude-sonnet-5-5` |

Os preços por token são iguais em entrada e saída. A diferença está no cache, mais barato no GPT-6.1 Sol. As empresas publicaram benchmarks diferentes, o que impede uma comparação direta de desempenho com os números oficiais. Para entender a linha da Anthropic, veja a página do [Claude](/ferramentas/modelos/anthropic-claude/); para a visão geral de modelos, o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).

## O que mais saiu no DevDay para devs

O GPT-6.1 Sol foi o anúncio de modelo, mas o DevDay trouxe outras mudanças que afetam quem desenvolve. Todas estão no [resumo oficial](https://openai.com/index/devday-2026-recap/):

- **Codex na nuvem:** o Codex passa a rodar no computador, remotamente pelo celular ou na nuvem, com ambientes de desenvolvimento reutilizáveis. Planos Plus, Pro, Business, Healthcare, Education e Enterprise.
- **Codex CLI renovado:** comando por voz, nova visão `/agents` para acompanhar várias tarefas e melhorias em sessões e _worktrees_. Todos os planos.
- **Code Review no app desktop:** revisão de diffs com o Codex antes de comentar em pull requests do GitHub ou merge requests do GitLab, com revisão automática na nuvem.
- **Codex Security Cloud:** varredura de repositórios do GitHub sob demanda ou agendada, com checagem de novos commits.
- **Agents API com uso de computador:** agentes que operam software pela interface, com execução hospedada pela OpenAI. A API está em beta público, segundo o [fórum oficial de desenvolvedores](https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006).
- **Ultrafast:** nível de velocidade premium, com até 8 vezes mais tokens por segundo no Codex e até 6 vezes na API. Disponível para o GPT-6 Astra; para o 6.1 Sol, "em breve".
- **MCP Events:** suporte à proposta de especificação de eventos do MCP (Model Context Protocol), para que plugins disparem automações quando algo muda em um app conectado.

Para escolher entre agentes de código, o comparativo de [ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/) e o artigo sobre [revisão de código com IA sem perder o controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/) ajudam a decidir o que delegar.

## O que ainda não está confirmado

- **Data do Ultrafast para o 6.1 Sol:** a OpenAI diz "nos próximos dias", sem data e sem preço publicado para esse modelo.
- **Chegada ao Chat do ChatGPT:** o post diz que o modelo "ainda não está disponível no Chat", sem previsão.
- **Janela de contexto:** a página de preços separa contexto curto e longo, mas o anúncio não informa o tamanho máximo da janela nem o limite entre os dois.
- **Notas absolutas em vários benchmarks:** o post traz diferenças em pontos percentuais e custos por tarefa, mas não a nota absoluta do 6.1 Sol em DeepSWE, GDP.pdf, AutomationBench e OSWorld.
- **Futuro do `gpt-6-sol`:** a OpenAI não informou, no material consultado, se ou quando o GPT-6 Sol será descontinuado na API.
