---
name: "Anthropic Claude"
description: "Família Claude da Anthropic (Opus 5.5, Sonnet 5.5, Haiku 4.5 e Fable 5.1): preços por token, benchmarks, contexto de 1M e como funcionam os limites do Claude Code"
pubDate: 2026-09-24
updatedDate: 2026-09-29
vendor: "Anthropic"
category: "Modelos de IA"
pricing: "Pago por token (API) + Claude.ai"
platforms: ["API", "Claude.ai", "AWS", "Google Cloud", "Azure"]
rating: 9.6
url: "https://www.anthropic.com"
featured: true
---

**Claude** é a família de modelos de linguagem da Anthropic, acessada pela API, pelo Claude.ai e pelas principais nuvens. São modelos **fechados**, reconhecidos por desempenho em código, trabalho agêntico de longo horizonte e fidelidade a instruções. Em setembro de 2026 a linha atual reúne quatro modelos, todos com entrada de texto e imagem, saída em texto, uso de ferramentas e *thinking* adaptativo.

## Todos os modelos e preços

Preços de entrada/saída por 1 milhão de tokens. **Verificado em 29/09/2026** na [documentação oficial da Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview) — preços mudam; confirme na fonte.

| Modelo | Input (US$/1M) | Output (US$/1M) | Contexto | Saída máx. | Para quê |
|---|---|---|---|---|---|
| Fable 5.1 | 10 | 50 | 1M | 128k | Raciocínio e agêntico exigente |
| Opus 5.5 | 4 | 20 | 1M | 128k | Código longo e trabalho de conhecimento |
| Sonnet 5.5 | 2 | 10 | 1M | 128k | Rápido e barato para tarefas bem delimitadas e código |
| Haiku 4.5 | 1 | 5 | 200k | 64k | O mais rápido, quase-fronteira |

A escala vai do **Haiku** (mais rápido e barato) ao **Fable 5.1** (raciocínio de ponta), com **Opus** e **Sonnet** no meio. Modelos anteriores (Sonnet 5, Opus 5, Opus 4.x, Sonnet 4.x) seguem disponíveis como *legacy*.

## Lançamento

**Claude Opus 5.5** foi anunciado em **22 de setembro de 2026**, abrindo a família Claude 5.5. Segundo a Anthropic, entrega o nível do Fable 5.1 na maior parte do trabalho e custa cerca de **40% menos** para operar que o Opus 5. Está disponível na API, no Claude.ai e nas nuvens AWS, Google Cloud e Azure.

**Claude Sonnet 5.5** foi lançado em **28 de setembro de 2026**, como segundo modelo da família Claude 5.5. Mantém o preço do Sonnet 5 (US$ 2/US$ 10 por milhão de tokens; cache: US$ 0,20 leitura e US$ 2,50 escrita), mas, segundo a Anthropic, gera respostas mais de 30% mais rápido e custa até 30% menos por tarefa por usar menos tokens. Marcou 70,6% no Terminal-Bench 4.0, acima do Opus 5.5 nesse teste, e 55,5% no CursorBench 4.0 ([anúncio oficial](https://www.anthropic.com/claude-sonnet-5-5)). O ID na API é `claude-sonnet-5-5`, e a migração tem mudanças que quebram código (`thinking: disabled` e `tool_choice` forçado passam a dar erro 400). O **Claude Haiku 5.5** foi prometido para "as próximas semanas", sem data. Detalhes, benchmarks e checklist de migração: [Claude Sonnet 5.5: lançamento, preço e o que muda](/noticias/claude-sonnet-5-5-lancamento-preco-o-que-muda/).

## Claude Code e disponibilidade em ferramentas de código (setembro de 2026)

O **Claude Code** é o agente de código da Anthropic: roda no terminal e em IDEs (VS Code, Cursor e outros forks do VS Code, e JetBrains) e usa os modelos Claude para ler o repositório, editar arquivos e executar comandos. Nos planos **Pro** e **Max**, o uso do Claude Code e do Claude (web, desktop e celular) conta contra **o mesmo limite**, segundo a [central de ajuda da Anthropic](https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan). O comando `/status` mostra quanto resta da cota.

**Novidade de 25/09/2026:** ao atingir o limite de sessão de 5 horas no meio de uma tarefa, o Claude Code agora tenta encontrar um ponto de parada controlado em vez de cortar no meio de uma edição, usando uma cota pequena e fixa retirada do limite semanal. Durante a implantação, vale uma vez por semana no plano Pro e toda vez que o limite é atingido nos planos Max e Team Premium ([anúncio oficial](https://x.com/ClaudeDevs/status/2103561342057943314)). Detalhes e o que muda na prática: [Claude Code muda limite de uso de 5 horas](/noticias/claude-code-limite-de-uso-5-horas-parada-controlada/).

**Opus 5.5 no GitHub Copilot:** desde 22/09/2026, o Claude Opus 5.5 está disponível no GitHub Copilot para os planos Pro+, Max, Business e Enterprise ([GitHub Changelog](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/)). Para comparar editores e agentes, veja [melhores editores de código com IA](/comparativos/melhores-editores-codigo-ia/).

**Sonnet 5.5 no GitHub Copilot:** desde 28/09/2026, o Claude Sonnet 5.5 está disponível de forma geral no GitHub Copilot para os planos Pro, Pro+, Max, Business e Enterprise; em planos corporativos, o administrador precisa habilitar o modelo ([GitHub Changelog](https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot/)). No Claude Code e nos apps, o esforço padrão do Sonnet 5.5 é Medium; na API, High.

## Benchmarks (Opus 5.5)

Resultados divulgados pela Anthropic para o Opus 5.5. **Verificado em 24/09/2026** ([Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)). Números entre marcas diferentes não são diretamente comparáveis — cada uma roda os testes no próprio ambiente.

| Benchmark | Opus 5.5 | O que mede |
|---|---|---|
| Terminal-Bench 4.0 | 66,4% | Código agêntico em terminal |
| CursorBench 4.0 | 57,8% | Código agêntico |
| Humanity's Last Exam (c/ ferramentas) | 67,7% | Raciocínio multidisciplinar |
| OSWorld 2.1 | 81,8% | Uso de computador (parcial) |
| GDPval-AA v2.1 | 1846 Elo | Trabalho de conhecimento (44 profissões) |
| Chartography (c/ ferramentas) | 89,0% | Leitura de gráficos |

A própria Anthropic observa que, nesse nível de capacidade, "margens de benchmark são um guia menos confiável para diferenças no mundo real" — mais um motivo para validar na sua tarefa.

### Sonnet 5.5 contra Opus 5.5

Dados da Anthropic, **verificados em 29/09/2026** ([Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)).

| Benchmark | Sonnet 5.5 | Opus 5.5 |
| --- | --- | --- |
| Terminal-Bench 4.0 | 70,6% | 66,4% |
| CursorBench 4.0 | 55,5% | 57,8% |
| Humanity's Last Exam (c/ ferramentas) | 64,5% | 67,7% |
| OSWorld 2.1 (parcial) | 80,1% | 81,8% |
| GDPval-AA v2.1 | 1844 Elo | 1846 Elo |

Pelo preço por token, o Sonnet 5.5 custa metade do Opus 5.5. A Anthropic ainda recomenda o Opus para trabalho complexo e aberto.

## Modalidades e arquitetura

Todos os modelos atuais aceitam **texto e imagem** na entrada e produzem texto, com **uso de ferramentas** e **1M de tokens de contexto** (200k no Haiku). O diferencial de operação é o *thinking* adaptativo: o modelo decide quanto "pensar" antes de responder, ajustável por um parâmetro de esforço — útil em tarefas de raciocínio, dispensável em tarefas simples.

## Características de teste e limites

- **Código e agentes:** o ponto mais forte da família — Opus e Fable lideram em benchmarks de código agêntico e trabalho de longo horizonte.
- **Fidelidade a instruções:** Claude tende a seguir o prompt com literalidade; bom para pipelines previsíveis, exige prompts claros.
- **Custo:** Haiku e Sonnet cobrem alto volume barato; reserve Opus/Fable para o que realmente exige a fronteira.
- **Limite:** benchmark não substitui teste próprio — ver [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/).

## Para quem faz sentido

Boa escolha quando código, agentes que rodam por muitos passos e obediência precisa ao prompt são prioridade — e quando você quer 1M de contexto sem premium. Para tirar mais de qualquer Claude, veja [engenharia de prompt](/ia/engenharia-de-prompt/); para comparar com GPT, Gemini e Llama, o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
