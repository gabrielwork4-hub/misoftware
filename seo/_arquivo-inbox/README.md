# Arquivo — pipeline inbox → fila (aposentado)

Esta pasta guarda o material de autoria original e o gerador que criou a
coleção `src/content/fila/`. **Não faz parte do build** e serve apenas como
histórico.

## Por que foi arquivado

A partir de setembro/2026, a **fonte única de verdade do conteúdo é
`src/content/fila/`** (a coleção que o Astro renderiza). O fluxo anterior era:

```text
inbox/NNN-*.md  --(normalize-inbox.mjs)-->  src/content/fila/*.md
```

Mantê-lo em paralelo gerava risco de *drift*: editar o inbox não refletia no
site, e editar a fila não voltava para o inbox.

## O que foi salvo antes de arquivar

O `normalize-inbox.mjs` derivava o `silo` do **primeiro segmento da URL**
(`siloFromSlug`). Para spokes (`/artigos/`, `/comparativos/`, `/tutoriais/`,
`/estudos-de-caso/`) esse segmento é o *tipo*, não o silo — então todos caíam
no fallback `desenvolvimento`. O `silo` correto vivia apenas nos arquivos de
`inbox/`.

Antes de arquivar, esses valores corretos foram reconciliados para a `fila`
(15 correções de `silo`/`category`). Uma verificação confirmou que nenhum
arquivo de `inbox/` tinha conteúdo mais rico que sua contraparte na `fila`.

## Conteúdo

- `inbox/` — 60 rascunhos de autoria originais (schema com `status:`).
- `normalize-inbox.mjs` — gerador inbox → fila. Se algum dia for reativado,
  corrigir o `siloFromSlug` para usar o `silo` do frontmatter de origem, não a
  URL.
