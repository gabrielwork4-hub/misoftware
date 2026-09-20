# HANDOFF — misoftware.com.br

> Estado do desenvolvimento para continuar em outra sessão/conta.
> **Última atualização:** 2026-09-20.
> Leia junto: `ARQUITETURA_MISOFTWARE.md` (fonte de verdade do produto) e
> `seo/misoftware-legacy-url-audit.md` (auditoria de URLs legadas).

---

## 1. Onde paramos (resumo em 30s)

- **Fase 1 (plataforma editorial): base pronta.** Projeto Astro 5 + TypeScript +
  Tailwind v4 com design system fiel à referência `stitch/`, home completa,
  páginas de artigo/ferramenta/silo, SEO técnico (canonical, OG, JSON-LD,
  sitemap, RSS, robots) e busca Pagefind no build.
- **Fase 2a (migração de URLs legadas): implementada.** Camada de borda
  (Cloudflare Pages Function) que canonicaliza host/protocolo (`301`) e responde
  `410 Gone` às 139 rotas legadas, a partir do CSV como fonte única.
- **Decisão fechada:** as rotas técnicas antigas (Omni/OmniCode/OmniLite/OmniView/
  TheLibrary/Bootstrap) vão para `410` — são de terceiros (antiga MI Software /
  Ramon Mendes) e seguem vivas no VS Marketplace / GitHub / sciter.com. **Não há
  Fase 2b de `301` condicional.** Ver nota em `ARQUITETURA §8`.
- **Fase 1b (fila editorial): fila fechada e validada por script.** 60 rascunhos em
  `inbox/`, todos ligados ao `slug-registry.md`, com `npm run inbox:check` como gate
  entre rascunho e site. Nenhum está liberado para publicação ainda — ver §9.

---

## 2. Stack e decisões técnicas tomadas

| Item | Decisão | Motivo |
|---|---|---|
| Framework | **Astro 5 + TypeScript** | Definido na arquitetura; estático por padrão. |
| CSS | **Tailwind v4** (via `@tailwindcss/vite`) | Padrão atual do Astro 5. Tokens no `@theme` de `src/styles/global.css`, derivados de `stitch/.../DESIGN.md`. |
| Fontes | Newsreader (serif) + Inter (sans) + JetBrains Mono | Estética editorial da referência. |
| Conteúdo | **Markdown** em `src/content/` (content collections) | MVP; schema em `src/content.config.ts` espelha os modelos do Directus p/ migração futura sem retrabalho. |
| Hospedagem | **Cloudflare Pages + Functions** | `functions/_middleware.ts` é a "camada de regras de borda" da arquitetura. |
| URL | `trailingSlash: 'always'`, canônico `https://www.misoftware.com.br` | Convenção da arquitetura §6. |

---

## 3. Estrutura de arquivos criada

```
astro.config.mjs · tsconfig.json · package.json · wrangler.toml · .gitignore
functions/
  _middleware.ts               → borda: 301 canônico + 410 Gone
  redirects.generated.json     → GERADO do CSV (não editar à mão)
scripts/
  build-redirects.mjs          → CSV → redirects.generated.json
  build-og.mjs                 → SVG da marca → public/og-default.png (sharp)
  check-status.mjs             → valida status HTTP contra o CSV
  normalize-inbox.mjs          → inbox/ × slug-registry: valida, normaliza e promove (§9)
src/
  consts.ts                    → SITE, NAV, SILOS, SOCIAL (fonte única)
  content.config.ts            → coleções: artigos, tutoriais, ferramentas
  styles/global.css            → tokens Tailwind v4 (@theme)
  layouts/BaseLayout.astro · PageLayout.astro  → PageLayout = prosa institucional
  components/                   → BaseHead, Header, Footer, Hero, QuickTracks,
                                 LatestArticles, ArticleCard, InnovationRadar, Newsletter
  content/artigos/ (6) · ferramentas/ (4) · autores/ (2) ·
    hubs/ · comparativos/ · estudos-de-caso/ · tutoriais/ (vazias: preenchidas por --promote)
  pages/
    index.astro · 404.astro · rss.xml.ts
    artigos/[...id].astro · artigos/index.astro
    ferramentas/[...id].astro · ferramentas/index.astro
    [silo]/index.astro         → páginas-pilar (ia, automacao, desenvolvimento)
    [silo]/[cluster]/index.astro → hubs temáticos (lista os spokes do cluster)
    tutoriais/[...id].astro · tutoriais/index.astro
    comparativos/[...id].astro · comparativos/index.astro
    estudos-de-caso/[...id].astro · estudos-de-caso/index.astro
    autores/index.astro · autores/[slug]/index.astro   → índice + perfil de autor (schema Person)
    sobre/ · politica-editorial/ · privacidade/ · contato/   → institucionais (PageLayout)
public/ robots.txt · favicon.svg
```

> `/ferramentas/` é servida pela rota dedicada do diretório de ferramentas; por
> isso ela é **excluída** da rota dinâmica `[silo]` (ver `src/pages/[silo]/index.astro`).

---

## 4. Como rodar

```bash
npm install                 # já feito nesta máquina
npm run dev                 # site em http://localhost:4321
npm run build               # prebuild(redirects) → astro build → pagefind
npm run build:redirects     # regenera functions/redirects.generated.json do CSV
npm run build:og            # regenera public/og-default.png a partir do SVG da marca
npm run preview:edge        # build + wrangler pages dev (testa o middleware) *ver aviso*
npm run check:status -- --base http://localhost:8788   # valida os 410/301
npm run inbox:check         # gates da fila editorial (ver §9)
npm run inbox:fix           # normaliza o frontmatter da inbox
npm run inbox:promote       # move os aprovados para src/content/
```

### ⚠️ Aviso de ambiente (Windows)

`wrangler pages dev` **compila o Worker com sucesso** ("✨ Compiled Worker
successfully"), mas o runtime `workerd` sofreu **access violation** nesta máquina
Windows (VC++ Redistributable desatualizado). O **código está correto** — o crash
é ambiental. Para validar a borda localmente: atualizar o
[VC++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
**ou** validar direto no **preview deploy do Cloudflare Pages** (recomendado), rodando
`npm run check:status -- --base https://<preview>.pages.dev`.

---

## 5. Como funciona a migração de URLs (o "porquê")

**Fluxo (CSV = fonte única de verdade):**
```
seo/misoftware-redirect-map.csv   ← editar aqui
   ↓ scripts/build-redirects.mjs (npm run build:redirects / prebuild)
functions/redirects.generated.json ← gerado, NUNCA editar à mão
   ↓
functions/_middleware.ts          ← aplica na borda
```

**Ordem de decisão do middleware (garante salto único):**
1. host/protocolo ≠ canônico → `301` direto para `https://www.…` (preserva path+query).
2. path com `301` explícito no mapa → redireciona (hoje vazio).
3. path no conjunto `410` → `410 Gone` (corpo de marca + `X-Robots-Tag: noindex`).
4. senão → passa para o site estático.

**Números atuais:** 139 paths `410`, 0 `301` explícitos (os 3 `301` do CSV são
canonicalização de raiz, cobertos pela regra genérica).

---

## 6. Validado / Não validado

| Item | Status |
|---|---|
| `npm run build` (17 páginas, sitemap, RSS, Pagefind) | ✅ passa |
| Home + rotas renderizam (dev server, 200) | ✅ conferido no navegador |
| `build-redirects.mjs` gera JSON correto (139× 410) | ✅ |
| JSON-LD completo: WebSite, Organization, BlogPosting, Person, **BreadcrumbList** (todo o site) e **SoftwareApplication**+Review (ferramentas) | ✅ auditado no HTML de `dist/` (2026-09-18) |
| SEO on-page: title/description únicos, canonical absoluto, OG/Twitter, sitemap, robots, 1×H1, 404 noindex | ✅ auditado no HTML de `dist/` |
| Middleware **compila** no wrangler | ✅ ("Compiled Worker successfully") |
| Middleware **executa** localmente (workerd) | ❌ bloqueado por VC++ no Windows — validar no preview Cloudflare |
| `check:status` contra a borda | ⏳ pendente (depende do item acima) |
| `inbox:check`: 60/60 ligados ao registry, 0 erros bloqueantes | ✅ (2026-09-20) |
| `inbox:promote`: ciclo completo testado em cópia de trabalho (frontmatter → build → JSON-LD do artigo) | ✅ (2026-09-20) |

---

## 7. Próximos passos sugeridos (em ordem)

1. **Aprofundamento editorial (único bloqueio que resta):** o cluster **Agentes**
   (5 peças) já foi aprofundado, aprovado e publicado como piloto — restam **55**
   na fila, todos abaixo de 600 palavras e com `Revisão pendente`. Não há bloqueio
   de infraestrutura. Fluxo por conteúdo, validado pelo piloto: aprofundar → remover
   `Revisão pendente` → `status: approved` → `npm run inbox:promote`. Próximos
   **onda 1 (fundação) está completa**: 4 pilares + 17 hubs + os clusters
   Agentes e Agentes operacionais = 28/60 publicados. O que resta são os
   **spokes** (onda 2/3): artigos, tutoriais, comparativos, o estudo de caso e o
   review do n8n — 32 na fila. Os hubs já linkam para eles; publicar cada spoke
   ativa o link automaticamente (ver plugin em §9).
3. **Fase 0 — infra:** criar projeto no Cloudflare Pages, conectar repo, configurar
   DNS/SSL para `www.misoftware.com.br` (canônico), fazer 1º preview deploy.
4. **Validar a borda no preview:** `npm run check:status -- --base https://<preview>.pages.dev`
   — deve dar 0 falhas.
5. **Go-live da migração:** apontar o domínio; conferir no Search Console os 410/301.
6. **Fase 1 restante:** Directus + PostgreSQL como CMS; migrar o loader das content
   collections para a API do Directus (o schema já está compatível).
7. **Busca:** ligar o Pagefind na UI (o `Ctrl+K` do header ainda é decorativo).
8. **Fase 3:** endpoint da newsletter + pipeline n8n (pauta → rascunho → revisão).

---

## 8. Pendências / decisões em aberto para o próximo responsável

- **Imagens de capa:** `public/og-default.png` (OG social padrão, 1200×630) **feito
  (2026-09-18)** — gerado por `scripts/build-og.mjs` (`npm run build:og`), SVG da marca →
  PNG via sharp, fontes web-safe para render determinístico. Conserta o card social de todas
  as páginas sem imagem própria. **Pendente (opcional):** capas reais por artigo (hoje usam o
  fallback `m/`); considerar a skill `seo-image-gen` para gerar via IA.
- ~~**Autores:** modelo `/autores/[slug]/`.~~ **Feito (2026-09-18).** Coleção `autores`
  (`src/content/autores/`), com `gabriel-barboza` (Person, `sameAs` → LinkedIn) e `redacao`
  (Organization). O campo `author` dos artigos virou **referência** (`reference('autores')`),
  resolvida em ArticleCard, Hero, RSS e na página do artigo (nome vira link `rel="author"`).
  Schema `Person`/`Organization` com `url` + `sameAs` no `BlogPosting` e no perfil. Rotas
  `/autores/`, `/autores/[slug]/`. Bio de `gabriel-barboza` publicável (Product Owner · 2 anos ·
  marketing digital + IA — confirmado pelo autor). **Enriquecimento futuro (não bloqueia):**
  temas de especialidade, projeto/resultado concreto, mais perfis no `sameAs` (X, GitHub, blog
  de marketing) e avatares (hoje fallback = iniciais).
- ~~**Páginas institucionais:** `/sobre/`, `/politica-editorial/`, `/privacidade/`,
  `/contato/`.~~ **Feito (2026-09-18).** Criadas em `src/pages/{sobre,politica-editorial,
  privacidade,contato}/index.astro`, usando o novo `src/layouts/PageLayout.astro` (prosa
  editorial reutilizável). E-mail de contato centralizado em `SITE.email` (`consts.ts`).
  Build: 21 páginas, todas no sitemap.
- **Git:** repositório ainda **sem commit inicial** (branch `master`, 0 commits).
  Sugestão: primeiro commit com todo o scaffold desta fase.
```

---

## 9. Fila editorial: da inbox para o site

**Fonte única:** `seo/briefs/slug-registry.md` decide slug canônica, tipo de página,
cluster e keyword primária. `inbox/` é fila de rascunho, não conteúdo publicável.

```
seo/briefs/slug-registry.md   ← fonte da verdade (slug, tipo, cluster, keyword)
   ↓ ligação pela keyword primária
inbox/NNN-*.md                ← rascunho + frontmatter
   ↓ scripts/normalize-inbox.mjs
src/content/<colecao>/<slug>.md
```

| Comando | O que faz |
|---|---|
| `npm run inbox:check` | Relatório e gates. Não altera arquivos. Sai com código 1 se houver erro bloqueante. |
| `npm run inbox:fix` | Grava `slug`, `type`, `cluster` e autor normalizado no frontmatter da inbox. Não toca no corpo do texto. |
| `npm run inbox:promote` | Move para `src/content/` só o que passou em todos os gates, convertendo o frontmatter para o schema da coleção. |

**Erros bloqueantes** (impedem o check): keyword fora do registry, slug ou keyword
duplicada, campo obrigatório ausente, autor que não resolve para `src/content/autores/`,
link interno para URL que não existe no registry, linha do registry sem arquivo na fila.

**Gates de promoção** (não quebram o check, mas seguram o arquivo na inbox):
`status` diferente de `approved`, marcador `Revisão pendente` no texto, menos de 600
palavras, ou tipo cuja rota ainda não existe no site.

### Estado em 2026-09-20

- 60/60 arquivos ligados ao registry, 0 erros bloqueantes.
- **Rotas completas (2026-09-20):** todas as 6 famílias de página existem —
  `/[silo]/[cluster]/` (hubs), `/tutoriais/`, `/comparativos/`, `/estudos-de-caso/`,
  além de `/artigos/` e `/ferramentas/`. Coleções `hubs`, `comparativos` e
  `estudos-de-caso` criadas em `content.config.ts`. "aguardando rota" caiu de 32 → 0.
  Pipeline testado ponta a ponta (promote → build) para os quatro tipos novos; o hub
  `/ia/agentes/` lista corretamente os spokes do cluster.
- **Piloto Agentes publicado (2026-09-20):** 5 peças promovidas para `src/content/`
  (`hubs/ia-agentes.md`, 3 artigos e 1 tutorial). `inbox:check` agora reporta
  `5/60 publicados` e trata conteúdo já em `src/content/` como coberto — promover
  tira o arquivo da inbox de propósito, então isso deixou de ser "arquivo faltando".
- **Cluster Agentes operacionais publicado (2026-09-20):** hub
  `/automacao/agentes-operacionais/` + comparativo
  `/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/`. Zerou o link
  interno pendente do piloto: build **sem nenhum link interno quebrado** (36 páginas),
  `7/60 publicados`.
- **Onda 1 (fundação) publicada (2026-09-20):** 4 pilares + 17 hubs, além dos
  clusters Agentes e Agentes operacionais. 28/60 publicados, 51 páginas.
- **Nova infra de linkagem:** `scripts/rehype-internal-links.mjs` rebaixa para
  texto os links internos cujo destino ainda não existe (hub → spoke na fila) e
  os reativa quando o spoke é publicado — o site fica sem link morto durante o
  rollout. `scripts/published-paths.mjs` é a fonte de verdade dos caminhos
  válidos; `npm run check:links` audita o dist/ (rede de segurança).
- **Profundidade mínima por tipo:** 600 palavras para spokes, 350 para páginas
  de navegação (hub/pilar). Documentado no normalize-inbox.
- Restam 32 na fila (só spokes), bloqueados por editorial (marcador +
  profundidade). O que segura a fila agora é só isso (§7 passo 1).
- **Corrigido no registry:** `/ia/rag/` estava com a keyword primária
  `RAG com fontes verificáveis`, a mesma do tutorial `/tutoriais/rag-com-fontes-verificaveis/`
  — canibalização hub–spoke igual à que já havia sido resolvida em agentes e prompt.
  O hub passou para a entidade ampla (`RAG`); o tutorial mantém a intenção específica.
- **Divergência conhecida e aceita:** o rascunho 040 usa
  `ferramentas de IA para desenvolvimento de software` e o registry,
  `ferramentas de IA para desenvolvimento`. É variação da mesma intenção; está
  registrada em `ALIASES` no script, e o registry continua mandando na slug.
