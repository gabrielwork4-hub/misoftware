# Painel visual — produção dos 60 conteúdos

> **Atualizado:** execução por **silo**, publicando cluster completo. Fonte única
> de verdade do conteúdo: `src/content/fila/`. O `inbox/` foi arquivado em
> `seo/_arquivo-inbox/`. Listagens (home, `/artigos/`, silos, RSS) leem da `fila`
> via `src/lib/articles.ts`.

## Status do projeto

| Indicador | Estado atual | Meta |
|---|---:|---:|
| Conteúdos na fila | 60 | 60 |
| Com estrutura correta (silo/cluster/URL) | 60 | 60 |
| Redigidos em profundidade publicável | **60** | 60 |
| Publicados (`draft:false`, indexáveis no build) | **60** | 60 |
| Reviews de entidade de ferramenta | 4 | 4 |
| Revisados editorialmente por humano | **60** | 60 |
| Deployados em produção | 0 | 60 |

> ⚠️ "Publicado" = `draft:false` no build (sai do `noindex`). **Nada foi
> deployado ainda.** Revisão editorial humana concluída em 2026-09-24; deploy
> é o próximo (e último) gate.

> **Escopo:** o plano nasceu com 60 conteúdos. O cluster RAG foi expandido com 2
> spokes novos (`/artigos/como-avaliar-sistema-rag/` e `/artigos/estrategias-de-chunking/`),
> totalizando **62**. Registrados no `slug-registry.md`.

## Progresso por silo — ✅ todos completos

| Silo | Peças | Faixa (palavras) | Publicação |
|---|---:|---|---|
| IA & Modelos | 17 | 400–901w | ✅ publicado |
| Automação | 14 | 389–595w | ✅ publicado |
| Desenvolvimento | 16 | 309–585w | ✅ publicado |
| Ferramentas | 15 + 4 entidades | 244–535w | ✅ publicado |

## Trabalho estrutural concluído

- **Bug de silo corrigido:** 15 spokes vinham com `silo` errado (fallback do
  gerador). Reconciliado a partir do `inbox/` antes de arquivá-lo.
- **Arquitetura de publicação (Opção A):** coleção `artigos` (stubs) removida;
  listagens unificadas na `fila`; 5 URLs legado off-plan eliminadas.
- **4 reviews de entidade** (cursor, ollama, langchain, v0) transformadas de
  stubs (11–17w) em reviews reais (244–265w).
- **Upgrade de segurança:** astro 5→7, sharp e esbuild (0 vulnerabilidades).
- **Backlog de enriquecimento:** ver `seo/backlog-enriquecimento.md`.

## Próxima fase — deploy

Revisão editorial humana concluída para os 62 conteúdos. Próximo gate: deploy
em produção.

## Legenda

- ⬜ Não iniciado · 🔵 Em produção · 🟡 Publicado, aguardando revisão humana
- ✅ Publicado no build · 🚀 Deployado

## Regra de avanço

Peças publicadas que merecem aprofundamento vão para o backlog de enriquecimento
(`seo/backlog-enriquecimento.md`), sem bloquear a revisão dos demais clusters.
