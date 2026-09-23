---
title: "Astro para Site Editorial: tutorial completo"
description: "Construa um site editorial com Astro, collections, layouts, SEO, sitemap, RSS, busca, imagens, deploy e cache."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "tutorial"
canonicalPath: "/tutoriais/astro-para-site-editorial/"
primaryKeyword: "Astro para site editorial"
draft: true
sources:
  - "https://docs.astro.build/en/getting-started/"
  - "https://docs.astro.build/en/concepts/why-astro/"
  - "https://docs.astro.build/en/guides/content-collections/"
  - "https://docs.astro.build/en/guides/integrations-guide/sitemap/"
  - "https://docs.astro.build/en/guides/rss/"
---

> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.

Um site editorial precisa transformar um arquivo de conteúdo em uma experiência publicável, rastreável e fácil de manter. Neste tutorial, o objetivo não é apenas renderizar Markdown: é criar um pequeno sistema com collections tipadas, layout consistente, SEO técnico, busca e uma rotina de publicação verificável.

## 1. Defina o contrato editorial

Antes de criar componentes, liste os tipos de página e os campos obrigatórios. Um artigo pode exigir `title`, `description`, data, autor, categoria, slug e status de rascunho; uma ferramenta pode exigir URL, indicação de preço e data de revisão. O schema deve rejeitar conteúdo incompleto no build, em vez de deixar o erro aparecer somente no navegador.

Organize os arquivos por intenção editorial (`artigos`, `tutoriais`, `comparativos`) e mantenha componentes fora da collection. Assim, mudar o card ou o cabeçalho não altera o conteúdo e fica mais simples testar os dois separadamente.

## 2. Configure collections e rotas

Crie a collection com o schema do projeto e gere as páginas a partir de `getCollection()`. O slug deve ser determinístico: não dependa de título traduzido ou de um identificador criado em runtime. Para cada página, derive uma única URL canônica e trate o `draft` antes de gerar a rota pública.

No template, componha o fluxo em ordem previsível: breadcrumbs, título, resumo, corpo, fontes, atualização e links relacionados. Um layout compartilhado evita que uma página esqueça canonical, idioma, viewport ou dados de Open Graph.

## 3. Faça metadata e dados estruturados

Centralize `title`, `description`, `canonical`, `og:image` e `article:published_time`. Use JSON-LD apenas quando os dados realmente existirem: `Article` para um texto editorial, `HowTo` para um passo a passo que contém instruções e `BreadcrumbList` para a hierarquia visível. Não invente autor, avaliação ou tempo de execução.

Gere sitemap somente com URLs indexáveis. Páginas de rascunho, resultados internos de busca e rotas de teste devem ficar fora do sitemap e receber `noindex` quando forem acessíveis. Verifique também que a URL informada no sitemap usa o domínio final, não o domínio de preview.

## 4. Adicione RSS, busca e imagens

O RSS deve listar apenas publicações aprovadas e conter título, resumo, data e URL absoluta. Para busca, indexe título, descrição e texto útil; exclua navegação repetida e páginas não publicadas. Se a busca for gerada no build, registre como ela será atualizada depois de uma nova publicação.

Defina dimensões e texto alternativo das imagens no frontmatter. Imagens hero precisam de compressão e versão social previsível; imagens decorativas devem usar alt vazio. Se uma imagem é essencial para entender o passo, a legenda deve explicar o que o leitor precisa observar.

## 5. Publique e teste em ambiente limpo

O pipeline mínimo deve instalar dependências com lockfile, executar validação de conteúdo, gerar o build, conferir sitemap/RSS e publicar o diretório de saída. Antes do domínio final, teste uma página de artigo, uma de tutorial, uma ferramenta, uma página 404 e um rascunho.

Use um checklist de falhas: link interno quebrado, canonical duplicada, data inválida, imagem ausente, script hidratado sem necessidade e URL de preview indexável. O resultado esperado é reproduzível em checkout limpo; se uma etapa depende de segredo, deixe explícito no CI e forneça uma mensagem de erro acionável.

## Critérios de aceite

O tutorial está concluído quando o build falha para frontmatter inválido, gera apenas rotas aprovadas, produz metadata e sitemap coerentes, carrega conteúdo sem JavaScript desnecessário e permite atualizar um artigo sem editar o layout. Registre a versão do Astro e o comando usado no CI para que a próxima manutenção seja comparável.
