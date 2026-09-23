---
title: "SSG, SSR e Islands no Astro: como escolher"
description: "Compare SSG, SSR e Islands no Astro por performance, SEO, cache e interatividade para escolher a arquitetura certa."
pubDate: "2026-09-22"
author: "redacao"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/"
primaryKeyword: "SSG, SSR e islands no Astro"
draft: true
sources:
  - "https://docs.astro.build/en/concepts/islands/"
  - "https://docs.astro.build/en/guides/server-side-rendering/"
---

> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.

No Astro, SSG gera HTML no build, SSR gera a resposta sob demanda e Islands adiciona JavaScript apenas aos componentes interativos. Eles não são escolhas excludentes: um site pode usar SSG para o conteúdo editorial, SSR em uma área personalizada e islands para busca ou filtros.

## SSG: o padrão para conteúdo previsível

Na geração estática, a página é produzida antes da requisição e pode ser servida por CDN. Isso reduz dependências em runtime, simplifica cache e deixa o resultado fácil de auditar. É uma boa escolha para artigos, hubs, páginas de ferramenta e documentação que mudam por publicação.

O custo aparece no build: uma alteração precisa regenerar a rota e, dependendo do deploy, invalidar o cache. Planeje webhook de rebuild ou revalidação quando o conteúdo vier de CMS. Não use SSG para esconder dados que deveriam ser personalizados por usuário.

## SSR: dados no momento do acesso

SSR faz sentido quando a resposta depende de sessão, região, permissão ou dados que não podem esperar pelo próximo build. O servidor pode consultar uma API e montar o HTML atualizado, mas isso adiciona latência, observabilidade, custo e superfície de falha.

Antes de escolher SSR, responda: o dado realmente precisa ser atual? Pode existir uma versão cacheada? O provedor de hospedagem suporta o runtime e seus limites? Defina timeout, fallback e política de cache; sem isso, uma API lenta derruba a experiência inteira.

## Islands: interatividade localizada

Uma island hidrata somente o componente que precisa responder a eventos. O restante permanece HTML, sem transformar o site inteiro em uma aplicação cliente. Use-a para busca instantânea, filtros, abas, calculadoras e formulários com estado local.

Escolha a diretiva de hidratação conforme a necessidade: carregamento imediato, quando entrar na viewport ou somente quando o navegador estiver ocioso. Evite hidratar um menu estático, um card ou um texto que não reage a interação. Cada island deve ter um limite claro de estado e uma estratégia para funcionar sem JavaScript quando possível.

## Matriz de decisão

| Necessidade | Escolha inicial | Motivo |
| --- | --- | --- |
| Artigo e landing page | SSG | Cache forte e build reproduzível |
| Dashboard por usuário | SSR | Dados dependem de sessão |
| Busca e filtros locais | SSG + island | HTML rápido com interação pontual |
| Conteúdo de CMS | SSG + rebuild | Publicação explícita e auditável |

Comece pelo modelo mais simples que satisfaz o requisito. Meça tempo até o conteúdo, JavaScript enviado, taxa de erro e custo de execução. Só mova uma rota para SSR quando houver uma necessidade concreta, e registre a decisão no ADR do projeto.
