---
title: "Claude Sonnet 5.5: lançamento, preço e o que muda"
description: "A Anthropic lançou o Claude Sonnet 5.5 em 28/09/2026: mesmo preço do Sonnet 5, 30% mais rápido, 70,6% no Terminal-Bench 4.0 e mudanças na API. Veja o que muda."
pubDate: "2026-09-29"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ferramentas
kind: "noticia"
canonicalPath: "/noticias/claude-sonnet-5-5-lancamento-preco-o-que-muda/"
primaryKeyword: "claude sonnet 5.5"
draft: false
sources:
  - "https://www.anthropic.com/claude-sonnet-5-5"
  - "https://platform.claude.com/docs/en/models/sonnet-5-5/migration-guide"
  - "https://platform.claude.com/docs/en/about-claude/models/overview"
  - "https://www.anthropic.com/claude-sonnet-5-5-system-card"
  - "https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot/"
  - "https://openai.com/index/introducing-gpt-6-1-sol/"
faq:
  - q: "Quando o Claude Sonnet 5.5 foi lançado?"
    a: "Em 28 de setembro de 2026, pela Anthropic. No mesmo dia, o GitHub liberou o modelo no Copilot."
  - q: "Quanto custa o Claude Sonnet 5.5 na API?"
    a: "US$ 2 por milhão de tokens de entrada, US$ 10 por milhão de saída, US$ 0,20 por milhão em leitura de cache e US$ 2,50 em escrita de cache. É o mesmo preço do Sonnet 5."
  - q: "Qual a diferença entre Claude Sonnet 5.5 e Opus 5.5?"
    a: "O Sonnet 5.5 custa metade por token (US$ 2/US$ 10 contra US$ 4/US$ 20) e é mais rápido. O Opus 5.5 tem notas maiores na maioria dos benchmarks e, segundo a Anthropic, continua melhor em trabalho complexo e aberto. O Sonnet 5.5 venceu o Opus 5.5 no Terminal-Bench 4.0."
  - q: "Vale a pena trocar o Sonnet 5 pelo Sonnet 5.5?"
    a: "Pelos dados da Anthropic, sim: mesmo preço por token, menos tokens por tarefa e notas maiores em todos os testes publicados. Antes, confira as mudanças de API (between_tools, tool_choice, computer use) e meça o custo na sua própria carga."
  - q: "O Claude Sonnet 5.5 está no GitHub Copilot?"
    a: "Sim. Está disponível de forma geral desde 28/09/2026 nos planos Pro, Pro+, Max, Business e Enterprise. Em empresas, o administrador precisa habilitar o modelo."
---

A Anthropic lançou o **Claude Sonnet 5.5** em **28 de setembro de 2026**. É o segundo modelo da família Claude 5.5, depois do Opus 5.5, e substitui o Sonnet 5 como opção intermediária da linha. O preço não muda (US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída), mas a Anthropic afirma que o modelo gera respostas **mais de 30% mais rápido** e custa **até 30% menos por tarefa**, porque precisa de menos tokens para chegar ao mesmo resultado ([anúncio oficial](https://www.anthropic.com/claude-sonnet-5-5)).

Na prática, o que muda para quem desenvolve: o salto em código agêntico é grande (70,6% no Terminal-Bench 4.0, contra 10,3% do Sonnet 5), o modelo já está no GitHub Copilot e em todas as nuvens, e a API traz **mudanças que quebram código existente**, como o fim de `thinking: {"type": "disabled"}` e de `tool_choice` forçado. Quem migrar sem ler o guia vai receber erros 400.

A página evergreen com todos os modelos, preços e limites da família continua sendo a de [Claude, da Anthropic](/ferramentas/modelos/anthropic-claude/). Esta notícia cobre o lançamento e o que ele muda agora.

## O que é o Claude Sonnet 5.5

O Sonnet é a linha intermediária da Anthropic: fica entre o Haiku (mais barato e rápido) e o Opus (mais capaz). Segundo a Anthropic, o Sonnet 5.5 é mais forte em "tarefas cotidianas bem delimitadas": corrigir bugs, criar documentos, slides e planilhas, e trabalho de interface. Para trabalho aberto e complexo, que exige julgamento sustentado, a própria empresa diz que o **Opus 5.5 continua claramente superior**.

A família 5.5 fica assim, segundo o anúncio:

- **Claude Opus 5.5**: anunciado em 22/09/2026, voltado a trabalho complexo.
- **Claude Sonnet 5.5**: lançado em 28/09/2026, voltado a velocidade e custo.
- **Claude Haiku 5.5**: prometido "nas próximas semanas", sem data definida.

## Especificações e preço

A tabela reúne os dados publicados pela Anthropic no anúncio e na [visão geral de modelos da documentação](https://platform.claude.com/docs/en/about-claude/models/overview).

| Item | Claude Sonnet 5.5 | Claude Opus 5.5 |
| --- | --- | --- |
| ID na API | `claude-sonnet-5-5` | — |
| Entrada (US$/1M tokens) | 2 | 4 |
| Saída (US$/1M tokens) | 10 | 20 |
| Leitura de cache (US$/1M) | 0,20 | 0,20 |
| Escrita de cache (US$/1M) | 2,50 | 5 |
| Janela de contexto | 1M tokens | 1M tokens |
| Saída máxima | 128k tokens | 128k tokens |
| Corte de conhecimento | junho de 2026 | — |
| Raciocínio | adaptativo | adaptativo |

*Janela de contexto* é quanto texto o modelo consegue considerar de uma vez numa requisição. *Cache* de prompt é o recurso que reaproveita trechos repetidos (como um system prompt longo) cobrando bem menos por eles.

O preço por token é idêntico ao do Sonnet 5. A redução de custo vem do uso de menos tokens por tarefa, não de desconto na tabela. A Anthropic não publica preço em reais; a cobrança da API é em dólar.

O modelo está disponível na plataforma da Anthropic, no Claude.ai e nas nuvens **AWS, Google Cloud e Microsoft Azure**, com opção de retenção zero de dados (*zero data retention*), como já acontecia com o Opus 5.5 e o Sonnet 5.

## Benchmarks: Sonnet 5.5 contra Sonnet 5, Opus 5.5 e GPT-6 Sol

Números divulgados pela Anthropic no anúncio. Cada fornecedor roda os testes no próprio ambiente, então comparações entre marcas pedem cautela.

| Benchmark | Sonnet 5.5 | Sonnet 5 | Opus 5.5 | GPT-6 Sol |
| --- | --- | --- | --- | --- |
| Terminal-Bench 4.0 (código agêntico em terminal) | 70,6% | 10,3% | 66,4% | — |
| FrontierCode 1.1 (código que seria aceito em merge) | 46,2% (Max) / 52,1% (Xhigh) | 42,4% | 54,4% | 49,3% |
| CursorBench 4.0 (tarefas reais do Cursor) | 55,5% | 34,1% | 57,8% | — |
| GDPval-AA v2.1 (trabalho de conhecimento, Elo) | 1844 | 1449 | 1846 | 1487 |
| AA-Briefcase v1.1 (tarefas longas, Elo) | 1811 | 1359 | 1822 | 1483 |
| Humanity's Last Exam (com ferramentas) | 64,5% | 54,9% | 67,7% | — |
| OSWorld 2.1 (uso de computador, parcial) | 80,1% | 57,0% | 81,8% | — |
| Chartography (leitura de gráficos, sem ferramentas) | 61,6% | 15,6% | 64,4% | 53,6% |

Três pontos para ler a tabela com cuidado:

1. **O Sonnet 5.5 passou o Opus 5.5 no Terminal-Bench 4.0** (70,6% contra 66,4%, este último no esforço Xhigh), mas fica abaixo dele em quase todo o resto.
2. **No FrontierCode, o esforço Max pontuou menos que o Xhigh.** A Anthropic explica que, no Max, o modelo acionou mais vezes a skill de revisão de código do Claude Code, o que gerou timeouts ou edições fora do escopo, e o benchmark penaliza mudanças além da tarefa.
3. **A comparação é com o GPT-6 Sol, não com o GPT-6.1 Sol.** A OpenAI lançou o GPT-6.1 Sol em 29/09/2026, um dia depois, pelo mesmo preço de tabela (US$ 2/US$ 10). Ainda não há comparação publicada entre os dois; veja a [página da família GPT](/ferramentas/modelos/openai-gpt/).

A Anthropic também afirma que, em vários testes, o Sonnet 5.5 no esforço Low ou Medium supera a melhor nota do Sonnet 5 por cerca de um décimo do custo por tarefa.

## O que muda para quem programa

### Mais rápido e com menos chamadas de ferramenta

O ganho que as empresas parceiras mais citam é eficiência. Alguns números relatados no anúncio (dados das próprias empresas, não auditados):

- **Base44**: em 118 builds de apps, o Sonnet 5.5 chegou ao nível do Opus 5 com média de 3,6 iterações por build, contra 7,7 do Opus 5.
- **Balyasny Asset Management**: em 2.441 tarefas de finanças, usou cerca de 121 mil tokens por resposta, contra 497 mil do Sonnet 5.
- **Box**: 2,4 vezes mais rápido e 12% menos tokens no total que o modelo anterior.
- **Slack**: cerca de 14% menos tokens de saída nas avaliações offline do Slackbot, sem mudar os prompts.
- **Lovable**: um terço a menos de chamadas de ferramenta e cerca de metade das execuções de shell por tarefa.

### Já está no GitHub Copilot

O GitHub anunciou em 28/09/2026 que o Claude Sonnet 5.5 está **disponível de forma geral no Copilot** para os planos Pro, Pro+, Max, Business e Enterprise, em IDEs como Visual Studio e JetBrains. Em planos corporativos, o administrador precisa liberar o modelo pela política de modelos ([GitHub Changelog](https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot/)). Para comparar editores e agentes com IA, veja [melhores editores de código com IA](/comparativos/melhores-editores-codigo-ia/).

### Esforço padrão diferente em cada superfície

O *esforço* (*effort*) é o parâmetro que controla quanto o modelo raciocina antes de responder. No Claude Code e nos apps do Claude, o padrão é **Medium**; na API (Claude Platform), o padrão é **High**. O Sonnet 5.5 tem cinco níveis: `low`, `medium`, `high`, `xhigh` e `max`. A documentação avisa que os níveis foram **recalibrados**: o mesmo nível não produz a mesma quantidade de raciocínio que no Sonnet 5. Se você usa o Claude Code no dia a dia, o [limite de uso de 5 horas mudou há poucos dias](/noticias/claude-code-limite-de-uso-5-horas-parada-controlada/), e o esforço afeta quanto da cota cada tarefa consome.

## Mudanças na API que quebram código

Esta é a parte que exige atenção antes de trocar o ID do modelo. Tudo abaixo vem do [guia de migração oficial](https://platform.claude.com/docs/en/models/sonnet-5-5/migration-guide).

### 1. `thinking: disabled` deixou de existir

No Sonnet 5.5, uma requisição sem o campo `thinking` roda com raciocínio adaptativo. Enviar `thinking: {"type": "disabled"}` retorna **erro 400**. Para rodar sem raciocínio prévio, o novo valor é `between_tools`, aceito só nos esforços `low`, `medium` e `high`:

```python
client.messages.create(
    model="claude-sonnet-5-5",
    max_tokens=16000,
    thinking={"type": "between_tools"},
    output_config={"effort": "high"},
    messages=[{"role": "user", "content": "..."}],
)
```

Com `between_tools`, o esforço não pode mudar no meio da conversa.

### 2. `tool_choice` forçado não é aceito

`tool_choice` do tipo `any` ou `tool` retorna erro 400. A saída é usar `{"type": "auto"}` com a ferramenta marcada como `strict: true` e dizer no prompt quando chamá-la. No Amazon Bedrock, as saídas estruturadas (que incluem ferramentas `strict`) não estão disponíveis para o Sonnet 5.5; lá, use `auto` sem `strict` e valide a entrada no seu código.

### 3. Uso de computador muda de versão

Na API da Anthropic e no Google Cloud, o uso de computador (*computer use*) só funciona pelo `computer_toolset_20260801`. Quem envia `computer_20251124` recebe erro 400 nessas plataformas.

### 4. Conversas precisam ser só de acréscimo

Os blocos de raciocínio do Sonnet 5.5 são assinados sobre a conversa anterior. Em contas criadas a partir de 31/08/2026, reenviar um bloco depois de editar o histórico gera erro 400. A orientação é manter a conversa *append-only* e usar mensagens de sistema no meio da conversa para mudar instruções. Os blocos também ficam presos à conta que os gerou.

### 5. Outras mudanças

- O prompt mínimo para cache caiu de 1.024 para **512 tokens**.
- O texto que o modelo escreve entre chamadas de ferramenta passa a vir em blocos `thinking`, vazios no modo padrão. Interfaces que mostravam essas notas vão ficar "mudas" sem ajuste.
- Quem vem do Sonnet 4.6 ou anterior: parâmetros `temperature`, `top_p` e `top_k` diferentes do padrão dão erro, e o mesmo texto gera **cerca de 30% mais tokens**, porque o tokenizador é o do Sonnet 5.

## Segurança: salvaguardas de cibersegurança e fallback

Como as capacidades de cibersegurança do Sonnet 5.5 são comparáveis às do Opus 5, este é o primeiro Sonnet lançado com salvaguardas de cibersegurança. Tarefas de segurança de maior risco **caem visivelmente para o Sonnet 5**. Corrigir bugs no seu próprio código segue liberado, segundo a Anthropic.

Na API, recusas voltam com `stop_reason: "refusal"` e uma categoria (`cyber`, `bio`, `frontier_llm`, `reasoning_extraction` ou `general_harms`). O *fallback* no servidor (beta, só na API da Anthropic) refaz no Sonnet 5 apenas as recusas `cyber` e `frontier_llm`. Quem trabalha com segurança defensiva pode pedir acesso ao Cyber Verification Program.

O modelo também é o primeiro Sonnet com classificadores contra *destilação*, que é a extração em massa das capacidades de um modelo por meio de contas falsas. A maioria dos desenvolvedores não deve notar diferença, segundo a Anthropic, exceto quem move conversas entre contas.

## Como testar o Claude Sonnet 5.5

1. **Na API:** troque o modelo para `claude-sonnet-5-5`, remova `thinking: disabled` e `tool_choice` forçado, e leia as respostas pelo `type` de cada bloco (a resposta pode começar com um bloco `thinking`, então `content[0].text` quebra).
2. **Refaça a varredura de esforço:** a documentação recomenda começar em `high`; para código agêntico com tarefas bem especificadas, `medium`; para chat e baixa latência, `medium` ou `low`.
3. **Recalcule custo:** rode um lote representativo das suas tarefas e compare tokens por tarefa com o Sonnet 5. O ganho de "até 30%" é medição da Anthropic; o seu número depende da carga.
4. **No Copilot ou no Claude Code:** selecione o modelo e rode as mesmas tarefas que você já usa como referência. Um método simples está em [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

## O que ainda não está confirmado

- **Comparação com o GPT-6.1 Sol:** não há benchmark publicado entre os dois; os números da Anthropic usam o GPT-6 Sol e, em alguns testes, o GPT-5.6 Sol.
- **Data do Claude Haiku 5.5:** a Anthropic diz apenas "nas próximas semanas".
- **Aposentadoria do Sonnet 5:** o anúncio não informa quando o Sonnet 5 sai de linha; ele segue sendo o destino do fallback de segurança.
- **Planos do Claude.ai:** o anúncio não detalha em quais planos (inclusive o gratuito) o Sonnet 5.5 aparece como padrão.
- **Efeito de um bug em saídas estruturadas:** a Anthropic informa que a Artificial Analysis rodou GDPval-AA e AA-Briefcase numa versão pré-lançamento com um bug que podia degradar respostas com saídas estruturadas, já corrigido; o efeito na nota "provavelmente é pequeno".
