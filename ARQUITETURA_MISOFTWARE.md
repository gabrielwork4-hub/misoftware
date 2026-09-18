# Arquitetura de desenvolvimento — misoftware

> Documento-base para orientar produto, SEO, conteúdo, automação e migração de URLs.
> Atualizar este arquivo sempre que uma decisão estrutural mudar.

## 1. Objetivo do produto

A misoftware será uma publicação editorial de tecnologia aplicada: IA, automação, desenvolvimento e ferramentas para trabalho técnico. O ativo deve construir autoridade própria por meio de conteúdo útil, verificável e organizado por tópicos; conexões com projetos sob gestão só ocorrerão quando houver relevância editorial explícita.

## 2. Stack aprovada

| Camada | Tecnologia | Responsabilidade |
|---|---|---|
| Site público | Astro + TypeScript | Renderização rápida, páginas editoriais, SEO e componentes |
| CMS | Directus | Pautas, conteúdo, autores, revisões, taxonomias e API |
| Banco de dados | PostgreSQL | Dados do CMS, workflow, fontes e histórico |
| Automação | n8n | Pauta → briefing → rascunho → revisão → publicação → atualização |
| Mídia | Cloudflare R2 | Imagens, PDFs, ativos de arquivo e uploads |
| Hospedagem | Cloudflare Pages | Deploy do Astro e cache global |
| Regras de borda | Cloudflare Worker | Canonicalização, redirects, 410 e observabilidade de rotas legadas |
| Busca | Pagefind | Busca estática, local e rápida no conteúdo publicado |
| Métricas | GA4 + Google Search Console | Tráfego, cobertura, desempenho e indexação |

### Princípios técnicos

- Gerar páginas estáticas por padrão; usar SSR apenas onde houver necessidade real.
- Conteúdo publicado deve possuir URL estável, data de publicação, data de atualização, autor e categoria.
- Uma alteração no CMS deve gerar rebuild/deploy controlado via webhook.
- O workflow editorial deve registrar fonte, revisor e status de publicação.
- Todos os redirects devem ocorrer em um único salto para o destino final.

## 3. Fluxo de dados e publicação

```text
Fontes aprovadas e pautas
        ↓
n8n: coleta, classificação e briefing
        ↓
Directus: rascunho → revisão → aprovado → agendado
        ↓
Astro: build de conteúdo, sitemap, RSS e schema
        ↓
Cloudflare Pages + Worker
        ↓
Usuário, buscadores e ferramentas de IA
```

## 4. Modelos de conteúdo no CMS

| Modelo | URL | Campos mínimos |
|---|---|---|
| Artigo | `/artigos/[slug]/` | título, resumo, corpo, autor, categoria, tags, fontes, data |
| Tutorial | `/tutoriais/[slug]/` | dificuldade, pré-requisitos, passos, código, materiais |
| Ferramenta | `/ferramentas/[slug]/` | fabricante, categoria, preço, plataformas, análise, nota |
| Comparativo | `/comparativos/[slug]/` | entidades comparadas, critérios, conclusão, atualização |
| Estudo de caso | `/estudos-de-caso/[slug]/` | contexto, método, resultado, evidências, autorização |
| Autor | `/autores/[slug]/` | bio, especialidade, perfil e artigos publicados |
| Página-pilar | `/[silo]/` | introdução, subtemas, artigos prioritários e FAQ editorial |
| Arquivo técnico | `/arquivo/[slug]/` | contexto histórico, fontes, titularidade, links relacionados |

## 5. Arquitetura de silos

Cada silo possui uma página-pilar, clusters próprios, links internos bidirecionais e uma regra: um conteúdo tem uma categoria primária.

```text
Home
├── /ia/
│   ├── /ia/modelos-linguagem/
│   ├── /ia/agentes/
│   ├── /ia/ia-local/
│   └── /ia/engenharia-de-prompt/
├── /automacao/
│   ├── /automacao/n8n/
│   ├── /automacao/integracoes/
│   ├── /automacao/workflows/
│   └── /automacao/agentes-operacionais/
├── /desenvolvimento/
│   ├── /desenvolvimento/arquitetura/
│   ├── /desenvolvimento/frontend/
│   ├── /desenvolvimento/backend/
│   ├── /desenvolvimento/devops/
│   └── /desenvolvimento/qualidade/
├── /ferramentas/
│   ├── /ferramentas/ia-generativa/
│   ├── /ferramentas/desenvolvimento/
│   ├── /ferramentas/produtividade/
│   ├── /ferramentas/automacao/
│   └── /ferramentas/pesquisa/
└── /arquivo/
    ├── /arquivo/omni/
    ├── /arquivo/omnicode/
    ├── /arquivo/omnilite/
    ├── /arquivo/omniview/
    ├── /arquivo/the-library/
    └── /arquivo/bootstrap/
```

### Regras de linking interno

- Artigo → página-pilar do silo e 2–4 conteúdos do mesmo cluster.
- Página-pilar → conteúdos mais completos, atualizados e com maior intenção de busca.
- Tutorial → ferramenta, artigo conceitual e guia seguinte da trilha.
- Ferramenta → análise, comparativo e tutorial em que a ferramenta é realmente usada.
- Estudo de caso → apenas conteúdos que expliquem o método aplicado.
- Evitar links forçados entre silos sem relação de contexto.

## 6. Convenções de URL e slugs

### Convenções globais

- Canônico público: `https://www.misoftware.com.br/`.
- URLs minúsculas, sem acentos, sem datas e com barra final.
- Slug sem palavras vazias quando elas não alterarem intenção de busca.
- Nunca alterar slug publicado sem registrar redirect `301`.
- Usar uma única categoria primária; tags não criam páginas indexáveis no MVP.

### Padrões

| Tipo | Padrão | Exemplo |
|---|---|---|
| Página-pilar | `/[silo]/` | `/automacao/` |
| Artigo | `/artigos/[slug]/` | `/artigos/agentes-de-ia-para-operacoes/` |
| Tutorial | `/tutoriais/[slug]/` | `/tutoriais/automacao-n8n-com-ia/` |
| Ferramenta | `/ferramentas/[slug]/` | `/ferramentas/cursor/` |
| Comparativo | `/comparativos/[slug]/` | `/comparativos/cursor-vs-windsurf/` |
| Estudo de caso | `/estudos-de-caso/[slug]/` | `/estudos-de-caso/automacao-de-triagem/` |
| Autor | `/autores/[slug]/` | `/autores/gabriel-garcia/` |
| Arquivo | `/arquivo/[slug]/` | `/arquivo/omnicode/` |

## 7. Clusters iniciais

### IA aplicada

- Pilar: `/ia/`
- Clusters: agentes, modelos locais, RAG, engenharia de prompt, governança e avaliação.
- Conteúdos iniciais: agentes no fluxo de desenvolvimento; Ollama em ambiente local; RAG com fontes verificáveis; critérios para avaliar modelos.

### Automação

- Pilar: `/automacao/`
- Clusters: n8n, webhooks, integrações, processos internos, automação assistida por IA.
- Conteúdos iniciais: automação de pauta editorial; workflow de aprovação; monitoramento de links quebrados; integrações entre CMS e analytics.

### Desenvolvimento

- Pilar: `/desenvolvimento/`
- Clusters: arquitetura de software, front-end, back-end, DevOps, qualidade e observabilidade.
- Conteúdos iniciais: Astro para sites editoriais; arquitetura CMS headless; validação de dados; deploy e cache de conteúdo.

### Ferramentas

- Pilar: `/ferramentas/`
- Clusters: IA, desenvolvimento, produtividade, automação e pesquisa.
- Conteúdos iniciais: Directus, n8n, Astro, Cursor, Ollama e ferramentas de observabilidade.

## 8. Arquitetura de URLs legadas

O inventário operacional está em `seo/misoftware-redirect-map.csv` e a análise em `seo/misoftware-legacy-url-audit.md`.

### Regras de decisão

| Tipo de URL antiga | Ação |
|---|---|
| Raiz em variantes de host/protocolo | `301` direto para a URL canônica |
| Omni, OmniCode, OmniLite, OmniView, TheLibrary e Bootstrap com referências técnicas | `410 Gone` — **decisão fechada em 2026-09-17** (ver nota abaixo) |
| WordPress de vagas, limpeza, PHP genérico, categorias, feeds e paginação | `410 Gone` |
| Sistema/instalação WordPress | `404` ou `410` |
| Arquivo antigo sem ativo ou direito de uso | `410 Gone` |

> **Nota de decisão (2026-09-17) — rotas técnicas legadas → `410`.**
> A verificação ao vivo dos backlinks (GitHub `ramon-mendes/SciterSharp`, VS
> Marketplace, Libraries.io, sciter.com) confirmou que Omni, OmniCode, OmniLite,
> OmniView, TheLibrary e Bootstrap pertencem à **antiga MI Software (Ramon Mendes)**
> e **seguem vivos** nesses destinos oficiais. A nova misoftware (IdealTrends) **não
> detém titularidade**. Criar páginas `/arquivo/*` seria enganoso (sugeriria posse),
> redundante (o conteúdo já vive no lugar certo) e sem ganho de SEO (backlinks
> `nofollow`). Portanto **não haverá Fase 2b de `301` condicional**: as 16 rotas antes
> `PENDENTE` foram reclassificadas para `410` no CSV. A regra de borda foi implementada
> em `functions/_middleware.ts` (lê `functions/redirects.generated.json`, gerado do CSV).

### Ordem de implantação

1. Publicar home e URL canônica.
2. ~~Criar as páginas de arquivo técnico prioritárias.~~ **Cancelado** (titularidade de terceiros — ver nota).
3. ~~Validar propriedade/direito de uso do conteúdo antigo.~~ **Concluído**: é de terceiros.
4. ~~Ativar `301` das URLs técnicas para páginas equivalentes.~~ **Cancelado** — vão para `410`.
5. Ativar `410` do lote irrelevante (agora inclui as rotas técnicas). ✅ implementado na borda.
6. Rastrear 404, hits em rotas legadas e cobertura no Search Console. ⏳ após deploy.

### Implementação da camada de borda (Fase 2a — feita)

- `seo/misoftware-redirect-map.csv` — fonte única de verdade (147× `410`, 3× `301`, 1× `200`).
- `scripts/build-redirects.mjs` — gera `functions/redirects.generated.json` a partir do CSV (`npm run build:redirects`, roda também no `prebuild`).
- `functions/_middleware.ts` — Cloudflare Pages Function: canonicaliza host/protocolo (`301` de salto único), aplica `410 Gone` com corpo de marca + `X-Robots-Tag: noindex`.
- `scripts/check-status.mjs` — validador automático de status HTTP contra o CSV (`npm run check:status -- --base <url>`).

## 9. SEO técnico obrigatório

- `sitemap.xml` segmentado por conteúdo.
- `robots.txt` e canonical em todas as páginas indexáveis.
- RSS de artigos e atualizações editoriais.
- Schema: `Organization`, `WebSite`, `Article`/`BlogPosting`, `BreadcrumbList` e `Person`.
- Open Graph, Twitter Cards, imagem social e metadados por página.
- Página de política editorial, política de correções, autores e critérios de review.
- Monitoramento de respostas `200`, `301`, `404` e `410` após o lançamento.

## 10. Workflow de automação editorial

```text
Fonte aprovada
→ seleção de pauta
→ cluster e intenção de busca
→ briefing estruturado
→ rascunho assistido por IA
→ verificação de fatos, fontes e links
→ revisão humana
→ publicação agendada
→ monitoramento e atualização
```

### Guardrails

- IA não publica diretamente.
- Estudos de caso exigem autorização e evidências.
- Links para projetos geridos exigem relação editorial real e contexto.
- Conteúdo patrocinado ou parceiro deve ser identificado.
- Atualizações devem preservar URL ou gerar `301` documentado.

## 11. Backlog por fase

### Fase 0 — Migração e infraestrutura

- [ ] DNS, SSL, host canônico e Cloudflare configurados.
- [ ] Worker com canonicalização e mapa de redirects.
- [ ] Search Console e GA4 conectados.
- [ ] Páginas de arquivo técnico priorizadas.
- [ ] Validação automatizada de status HTTP.

### Fase 1 — Plataforma editorial

- [ ] Projeto Astro e design system implementados.
- [ ] Directus e PostgreSQL configurados.
- [ ] Modelos de conteúdo e workflow de revisão criados.
- [ ] Home, página-pilar, artigo, tutorial, ferramenta, autor e arquivo prontos.
- [ ] Sitemap, RSS, schema e metadados prontos.

### Fase 2 — Conteúdo e clusters

- [ ] Páginas-pilar dos quatro silos publicadas.
- [ ] Conteúdos-base para cada cluster publicados.
- [ ] Estratégia de links internos validada.
- [ ] Diretório inicial de ferramentas publicado.

### Fase 3 — Automação e escala

- [ ] n8n conectado ao CMS.
- [ ] Pipeline de pauta e briefing criado.
- [ ] Revisão e agendamento controlados.
- [ ] Alertas de links quebrados, queda de tráfego e conteúdo desatualizado.

## 12. Indicadores de sucesso

| Frente | Indicador |
|---|---|
| Migração | hits em 404, cobertura de redirects, URLs indexadas |
| Conteúdo | impressões, cliques, posições e CTR por cluster |
| Autoridade | domínios de referência relevantes, menções e páginas citadas |
| Produto | inscrições, recorrência, leitura e uso da busca |
| Qualidade | tempo de atualização, revisão concluída e fontes verificadas |

