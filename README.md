# misoftware

Publicação editorial de **tecnologia aplicada**: IA, automação, desenvolvimento e
ferramentas para trabalho técnico. Conteúdo útil, verificável e organizado por tópicos.

- **Site canônico:** https://www.misoftware.com.br
- **Mantido por:** IdealTrends

> Documentos de referência: [`ARQUITETURA_MISOFTWARE.md`](ARQUITETURA_MISOFTWARE.md)
> (fonte de verdade do produto) e [`HANDOFF.md`](HANDOFF.md) (estado do desenvolvimento).

---

## Stack

| Camada | Tecnologia |
|---|---|
| Site público | **Astro 5** + TypeScript (estático por padrão) |
| Estilo | **Tailwind v4** (`@tailwindcss/vite`), tokens em `src/styles/global.css` |
| Conteúdo | Markdown em `src/content/` (content collections) |
| Busca | **Pagefind** (índice estático gerado no build) |
| Hospedagem | **Cloudflare Pages + Functions** |
| Regras de borda | Cloudflare Pages Function (`functions/_middleware.ts`) |
| SEO | canonical, Open Graph, JSON-LD, sitemap, RSS, robots |

Fontes: Newsreader (serif) · Inter (sans) · JetBrains Mono (mono).

---

## Como rodar

```bash
npm install                 # instala dependências
npm run dev                 # http://localhost:4321
npm run build               # prebuild(redirects) → astro build → pagefind
```

### Scripts auxiliares

```bash
npm run build:redirects     # regenera functions/redirects.generated.json a partir do CSV
npm run build:og            # regenera public/og-default.png a partir do SVG da marca (sharp)
npm run check:status -- --base <url>   # valida status HTTP (200/301/410) contra o CSV
npm run preview:edge        # build + wrangler pages dev (testa o middleware da borda)
```

> **Windows:** `wrangler pages dev` compila o Worker, mas o runtime `workerd` pode sofrer
> *access violation* com o VC++ Redistributable desatualizado. Nesse caso, valide a borda
> direto num preview deploy do Cloudflare Pages.

---

## Estrutura

```
functions/
  _middleware.ts               # borda: 301 canônico (host/protocolo) + 410 Gone
  redirects.generated.json     # GERADO do CSV — não editar à mão
scripts/
  build-redirects.mjs          # CSV → redirects.generated.json
  build-og.mjs                 # SVG da marca → public/og-default.png
  check-status.mjs             # valida status HTTP contra o CSV
seo/
  misoftware-redirect-map.csv  # fonte única das URLs legadas (410/301)
  misoftware-legacy-url-audit.md
src/
  consts.ts                    # SITE, NAV, SILOS, SOCIAL (fonte única)
  content.config.ts            # coleções: autores, artigos, tutoriais, ferramentas
  content/                     # conteúdo em Markdown (autores/, artigos/, ferramentas/)
  layouts/                     # BaseLayout, PageLayout
  components/                  # BaseHead, Header, Footer, Hero, cards…
  pages/                       # rotas (home, silos, artigos, ferramentas, autores, institucionais)
  styles/global.css            # design system (tokens Tailwind v4)
public/                        # robots.txt, favicon.svg, og-default.png
```

---

## Arquitetura de silos

Cada silo tem uma página-pilar (`/[silo]/`) e clusters próprios, com linking interno
bidirecional. Silos: **IA** (`/ia/`), **Automação** (`/automacao/`),
**Desenvolvimento** (`/desenvolvimento/`) e **Ferramentas** (`/ferramentas/`).
Detalhes em `ARQUITETURA_MISOFTWARE.md §5`.

## Autoria e E-E-A-T

Conteúdo assinado por autores identificados (coleção `autores`), com schema
`Person`/`Organization` e `sameAs` para consolidação de entidade. O campo `author`
dos artigos é uma referência tipada à coleção de autores.

---

## Migração de URLs legadas (camada de borda)

Fluxo com o CSV como fonte única de verdade:

```
seo/misoftware-redirect-map.csv
   ↓ scripts/build-redirects.mjs (npm run build:redirects / prebuild)
functions/redirects.generated.json   (gerado — nunca editar à mão)
   ↓
functions/_middleware.ts   (aplica na borda)
```

Ordem de decisão do middleware (salto único):
1. host/protocolo ≠ canônico → `301` para `https://www.misoftware.com.br` (preserva path+query);
2. path com `301` explícito no mapa → redireciona;
3. path no conjunto `410` → `410 Gone` (corpo de marca + `X-Robots-Tag: noindex`);
4. senão → passa para o site estático.

Ver `ARQUITETURA_MISOFTWARE.md §8` para as regras de decisão e a nota de titularidade.

---

## Anúncios (AdSense)

O site inclui o **script de verificação** do Google AdSense no `<head>` (via
`src/components/BaseHead.astro`) e o arquivo `public/ads.txt`. Publisher:
`ca-pub-9681806666572532`. **Nenhum anúncio é exibido** — apenas verificação de
propriedade.

Para exibir anúncios no futuro existe o componente `src/components/AdSlot.astro`,
**desligado por padrão**. Ele só renderiza quando a variável de ambiente pública
`PUBLIC_ADS_ENABLED` for `"true"`; caso contrário não emite nada.

Como ativar:

1. Definir a variável de ambiente no build/deploy:
   - Local: adicionar `PUBLIC_ADS_ENABLED=true` a um arquivo `.env`.
   - Cloudflare Pages: Settings → Environment variables → `PUBLIC_ADS_ENABLED = true`.
2. Usar o componente onde o anúncio deve aparecer, com o `slot` criado no painel do AdSense:

   ```astro
   ---
   import AdSlot from '@/components/AdSlot.astro';
   ---
   <AdSlot slot="1234567890" format="auto" />
   ```

Com `PUBLIC_ADS_ENABLED` ausente ou diferente de `"true"`, o `<AdSlot>` não gera
`<ins class="adsbygoogle">` nem o `push`, mantendo as páginas limpas.

---

## Licença

Projeto privado da IdealTrends. Todos os direitos reservados.
