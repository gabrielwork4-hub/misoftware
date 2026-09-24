---
name: "Mistral AI"
description: "A família de modelos da Mistral AI — Medium 3.5, Small 4, Large 3, Ministral 3 e Codestral — em sua maioria open-weight (Apache 2.0), com preços e licenças verificados em fonte oficial."
pubDate: 2026-09-24
vendor: "Mistral AI"
category: "Modelos de IA"
pricing: "Aberto (maioria) + API paga"
platforms: ["Self-host", "API (La Plateforme)", "Cloud"]
rating: 9.0
url: "https://mistral.ai"
featured: true
---

A **Mistral AI** é a principal desenvolvedora europeia de modelos de linguagem e adotou uma estratégia fortemente **open-weight**: seus modelos generalistas atuais são publicados sob licenças abertas (Apache 2.0 ou Modified MIT), o que permite baixar os pesos e rodar no próprio ambiente, além do acesso por API. É uma alternativa de custo-benefício e soberania de dados frente às famílias fechadas.

## Todos os modelos e licenças

**Verificado em 24/09/2026** na [visão geral de modelos](https://docs.mistral.ai/getting-started/models/models_overview/) e na [pricing da Mistral](https://mistral.ai/pricing) — preços e modelos mudam; confirme na fonte.

| Modelo | Licença | Tipo | Aberto? |
|---|---|---|---|
| Mistral Medium 3.5 | Modified MIT | Multimodal frontier (agêntico/código) | Sim |
| Mistral Large 3 | Apache 2.0 | Generalista multimodal SOTA | Sim |
| Mistral Small 4 | Apache 2.0 | Híbrido (instruct + raciocínio + código) | Sim |
| Ministral 3 (3B/8B/14B) | Apache 2.0 | Compactos texto + visão | Sim |
| Codestral | Premier (pago) | Especializado em código | Não |

**Preço da API:** a Mistral cobra por token separando entrada e saída. Exemplo oficial: **Mistral Large — US$ 0,50/1M (entrada) e US$ 1,50/1M (saída)**. Como os modelos generalistas são abertos, o custo alternativo é **zero de licença** para self-host (você paga só a infraestrutura).

## Lançamento

A linha atual reúne a geração Medium 3.5 / Small 4 / Large 3, com os compactos Ministral 3 e o Codestral especializado em código. A Mistral mantém o padrão de liberar os pesos dos generalistas sob licença aberta a cada geração.

## Benchmarks

A Mistral posiciona **Medium 3.5** como modelo de fronteira para uso agêntico e código, e **Large 3** como generalista multimodal de estado da arte aberto. Os números por modelo estão nos *model cards* oficiais — trate-os como referência e valide na sua tarefa ([como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/)), lembrando que benchmarks entre marcas diferentes não são diretamente comparáveis.

## Modalidades e arquitetura

Os modelos generalistas atuais são **multimodais** (texto + visão). O **Small 4** é descrito como híbrido, unificando instrução, raciocínio e código num só modelo. A família cobre do compacto **Ministral 3** (3B a 14B, para rodar em hardware modesto) ao **Large 3** de topo.

## Características de teste e limites

- **Abertura real:** dos grandes fornecedores fechados, a Mistral é a que mais publica pesos abertos com licença permissiva (Apache 2.0) — bom para privacidade, soberania de dados e custo em escala.
- **Custo:** entre os mais baratos por token quando via API; grátis de licença para self-host.
- **Limite:** a capacidade de topo tende a ficar atrás dos flagships fechados mais recentes de OpenAI, Anthropic e Google.

## Para quem faz sentido

Faz sentido para quem quer **modelo aberto europeu**, controle de dados e custo baixo — seja por API barata, seja rodando localmente ([IA local](/ia/ia-local/)). O Codestral atende quem foca em completar código. Para comparar com as demais famílias, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).
