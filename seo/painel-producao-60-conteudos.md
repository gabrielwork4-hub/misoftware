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

## Status do projeto

| Indicador | Estado inicial | Meta |
|---|---:|---:|
| Conteúdos na fila | 60 | 60 |
| Com fontes verificadas | 0 | 60 |
| Com dados atualizados | 0 | 60 |
| Com exemplos/testes | 0 | 60 |
| Revisados editorialmente | 0 | 60 |
| Revisados em SEO | 0 | 60 |
| Aprovados | 0 | 60 |
| Publicados | 0 | 60 |

## Fases de execução

| Fase | Entrega | Gate de passagem | Status |
|---|---|---|---|
| 1. Inventário | mapa dos 60 arquivos, slugs e clusters | nenhum conteúdo fora do registro | ⬜ |
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
