# Painel visual — produção dos 60 conteúdos

## Fluxo geral

```text
INBOX
  ↓
01. INVENTÁRIO E PRIORIZAÇÃO
  ↓
02. PESQUISA E FONTES
  ↓
03. DADOS ATUALIZADOS
  ↓
04. EXEMPLOS E TESTES
  ↓
05. REVISÃO EDITORIAL / E-E-A-T
  ↓
06. SEO E LINKS INTERNOS
  ↓
07. APROVAÇÃO
  ↓
PUBLICAÇÃO
  ↓
MONITORAMENTO E ATUALIZAÇÃO
```

## Como o painel é apurado

O estado da fila não é preenchido à mão. `npm run inbox:check` lê cada arquivo de
`inbox/`, liga com a linha correspondente de `seo/briefs/slug-registry.md` pela
keyword primária e devolve os números abaixo. Um arquivo só é promovido para o
site quando passa em todos os gates:

```bash
npm run inbox:check     # relatório e gates (não altera nada)
npm run inbox:fix       # grava slug/tipo/cluster/autor no frontmatter
npm run inbox:promote   # move os `approved` para src/content/
```

## Status do projeto

Apuração de 2026-09-20 (`npm run inbox:check`):

| Indicador | Hoje | Meta |
|---|---:|---:|
| Conteúdos no projeto | 60 | 60 |
| Ligados ao slug-registry | 60 | 60 |
| Publicados em `src/content/` | 28 | 60 |
| Na fila (`inbox/`) | 32 | 0 |
| Aprofundados + revisados | 28 | 60 |

**Piloto concluído — cluster Agentes (2026-09-20).** As 5 peças do cluster
(`/ia/agentes/` + `o-que-sao-agentes-de-ia`, `tipos-de-agentes-de-ia-e-casos-de-uso`,
`como-avaliar-agentes-de-ia` e o tutorial `como-criar-agente-ia-com-ferramentas`)
foram aprofundadas para ≥600 palavras com exemplos, tabelas de decisão, modos de
falha e um caso de avaliação concreto; o marcador `Revisão pendente` foi removido,
o status virou `approved` e todas foram promovidas para `src/content/`. O hub
`/ia/agentes/` lista automaticamente os 4 spokes. Build limpo (34 páginas), sem
link interno quebrado exceto `/automacao/agentes-operacionais/` — hub vizinho ainda
na fila, que resolve quando aquele cluster for promovido.

**Onda 1 (fundação) concluída (2026-09-20).** As 4 páginas-pilar (`/ia/`,
`/automacao/`, `/desenvolvimento/`, `/ferramentas/`) e os 17 hubs de todos os
silos foram aprofundados, aprovados e publicados — a malha de navegação de topo
do site está completa. Cada pilar lista automaticamente os hubs do silo; cada
hub lista os spokes do cluster. Com 28/60 publicados, o site tem 51 páginas e
**zero link interno quebrado**: um plugin de build rebaixa para texto os links de
hub → spoke ainda na fila e os reativa sozinho quando o spoke é publicado
(`npm run check:links` é a rede de segurança). Profundidade mínima passou a ser
por tipo — 600 palavras para spokes, 350 para páginas de navegação, cujo trabalho
é rotear.

**Cluster Agentes operacionais publicado (2026-09-20).** O hub
`/automacao/agentes-operacionais/` e o comparativo
`/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/` foram aprofundados
(matriz de risco, matriz comparativa e cenários reais), aprovados e promovidos.
Isso zerou o único link interno pendente do piloto Agentes: **build sem nenhum
link interno quebrado** (36 páginas).

Os 53 restantes seguem bloqueados só por editorial: carregam `Revisão pendente` e
estão abaixo de 600 palavras. A infraestrutura de rotas está completa desde
2026-09-20 (6 famílias de página; "aguardando rota" = 0). O processo por conteúdo
está validado: aprofundar → remover marcador → `status: approved` →
`npm run inbox:promote`.

## Fases de execução

| Fase | Entrega | Gate de passagem | Status |
|---|---|---|---|
| 1. Inventário | mapa dos 60 arquivos, slugs e clusters | nenhum conteúdo fora do registro | ✅ |
| 2. Fontes | fontes primárias e afirmações associadas | toda afirmação relevante sustentada | ⬜ |
| 3. Atualização | versões, preços, limites e datas | dados variáveis com data de corte | ⬜ |
| 4. Exemplos | exemplos, snippets, tabelas ou casos | exemplo executado ou identificado como ilustrativo | ⬜ |
| 5. Testes | validação técnica e fact-checking | sem falhas críticas abertas | ⬜ |
| 6. Editorial | clareza, voz, E-E-A-T e intenção | revisão humana concluída | ⬜ |
| 7. SEO | links, metadata, canonical e estrutura | URL e arquitetura aprovadas | ⬜ |
| 8. Publicação | CMS, schema e pós-publicação | página acessível e monitorada | ⬜ |

## Fila por lote

| Lote | Escopo | Arquivos | Prioridade | Status |
|---|---|---:|---|---|
| 1 | IA, agentes e fundamentos | 10 | alta | ⬜ |
| 2 | IA local, prompts e RAG | 10 | alta | ⬜ |
| 3 | Automação, n8n e integrações | 10 | alta | ⬜ |
| 4 | Desenvolvimento, arquitetura e front/back-end | 10 | média | ⬜ |
| 5 | DevOps e qualidade | 10 | média | ⬜ |
| 6 | Ferramentas, comparativos, produtividade e hardware | 10 | média | ⬜ |

## Cartão de acompanhamento por conteúdo

```text
Slug:
Lote:
Responsável:
Status atual:
Fonte primária:
Data de corte:
Exemplo/teste:
Pendência principal:
Revisor:
Próxima revisão:
```

## Legenda

- ⬜ Não iniciado
- 🔵 Em pesquisa
- 🟡 Em revisão
- 🟢 Aprovado
- ✅ Publicado
- 🔴 Bloqueado

## Regra de avanço

O lote só avança quando os conteúdos do lote anterior estiverem, no mínimo, em `seo-reviewed`. Conteúdos bloqueados permanecem visíveis no painel e recebem uma pendência objetiva, responsável e prazo.
