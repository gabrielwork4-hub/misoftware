# Backlog de enriquecimento

Peças já publicadas (depth suficiente para ir ao ar) que têm oportunidade de
aprofundamento num segundo momento. Não bloqueiam a produção dos demais silos.

| Página | Oportunidade | Precisa de | Prioridade |
|---|---|---|---|
| `/estudos-de-caso/automacao-de-pauta-editorial/` | Aprofundar o caso: diagrama do fluxo, exemplos concretos, métricas reais quando existirem | Material/decisão do time (dados autorizados, posicionamento público) | a definir |

## Convenção

Quando uma peça publicada merecer enriquecimento mas não agora, registrar aqui
em vez de reabrir o trabalho no meio de um silo. Revisar este backlog ao fim de
cada onda de produção.

## Achados do 360° (hub a hub)

Levantados na análise de intenção/semântica/canibalização/entidades.

### ✅ Concluídos (rodada de backlog)

| Frente | O que foi feito |
|---|---|
| Cluster RAG | Expandido com 2 spokes: [como avaliar um sistema RAG](/artigos/como-avaliar-sistema-rag/) e [estratégias de chunking](/artigos/estrategias-de-chunking/). Registrados no slug-registry; hub relinkado. |
| Hub `/desenvolvimento/arquitetura/` | Adicionada seção de padrões: DDD, hexagonal/clean, event-driven. |
| Hubs de ferramenta (`produtividade`, `desenvolvimento`, `automacao`) | Entidades-âncora nomeadas (Todoist/Notion/Obsidian; Jira/Git/VS Code/GitHub Actions; Zapier/Make/n8n). |
| Estudo de caso `/estudos-de-caso/automacao-de-pauta-editorial/` | Enriquecido por pesquisa: mapeamento às 4 camadas do stack editorial padrão, guardrails ancorados na política oficial do Google (scaled content abuse / supervisão humana) e benchmarks do setor rotulados como referência externa. |
| Termos dos pilares (retarget por dado Ahrefs) | `/ia/`: "inteligência artificial aplicada" (vol 70, parent=graduação) → **"como usar inteligência artificial"** (vol 800, KD 0). `/automacao/`: "automação aplicada" (vol 0) → **"automação de processos"** (vol 1.500, KD 2). `/ferramentas/`: "ferramentas para trabalho técnico" (nulo, SERP=manutenção) → **"ferramentas de ia"** (vol 900, KD 0) com fronteira reforçada para o hub filho generativa. `/desenvolvimento/`: **mantido** "desenvolvimento de software" (2.600, KD 3; alternativas maiores dominadas por curso). URLs inalteradas. |

### ⬜ Pendentes

| Frente | Oportunidade | Precisa de |
|---|---|---|
| Termos dos pilares — validação de volume | **Reconfirmado em 2026-09-24 (Ahrefs BR): os 4 termos vieram idênticos ao baseline** — `/ia/` como usar inteligência artificial 800/KD0; `/automacao/` automação de processos 1.500/KD2; `/desenvolvimento/` desenvolvimento de software 2.600/KD3; `/ferramentas/` ferramentas de ia 900/KD0. Retarget se mantém. Próxima revisão periódica. | Revisão periódica |
| Spokes por parent topic (head terms) | Oportunidades reveladas na reconfirmação: `/ferramentas/` tem parent **"ia gratuito"** (8.400) → avaliar spoke "ferramentas de IA gratuitas". `/automacao/` já é **auto-parent** (head term próprio, melhor posicionado). `/ia/` parent = variante com acento "como usar a inteligência artificial" (1.800), mesma intenção. `/desenvolvimento/` parent = "software" (77.000) amplo demais/dominado por curso → manter termo específico. | Decisão editorial |
| `/estudos-de-caso/automacao-de-pauta-editorial/` | Métricas **internas reais** (tempo pauta→publicação, retrabalho) quando autorizadas — hoje usa benchmarks externos. Diagrama visual opcional. | Dados internos autorizados |
| Hub `/ia/engenharia-de-prompt/` | Seção "Técnicas e seus limites" ainda sobrepõe levemente o spoke — afinar se necessário. | — |
| Cross-silo idempotência | `/automacao/integracoes/` × `/desenvolvimento/backend/` — delimitar ângulos se crescerem. | monitorar |
| Cluster n8n (7 toques) | Monitorar canibalização conforme evoluir. | monitorar |
