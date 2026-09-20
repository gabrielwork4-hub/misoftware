# Registro semântico de slugs

Este arquivo é a fonte única para os briefs. Nenhuma pauta deve receber slug diferente durante a redação, migração para o CMS ou publicação.

## Regras

- Usar minúsculas, ASCII, hífens e barra final.
- Remover acentos e palavras vazias sem valor semântico.
- Descrever a entidade e a intenção principal; não tentar colocar todas as keywords no slug.
- Não usar datas, anos, números artificiais, superlativos ou nomes de campanha.
- O tipo de página define o primeiro segmento: `/artigos/`, `/tutoriais/`, `/comparativos/`, `/estudos-de-caso/`, `/ferramentas/` ou `/[silo]/[cluster]/`.
- O slug de um hub identifica o assunto; o slug de um spoke identifica a pergunta ou tarefa específica.
- Variações ortográficas e sinônimos devem ser absorvidos no conteúdo, title e headings, não gerar uma segunda URL.
- Depois de publicado, qualquer mudança exige redirect 301 documentado; o canonical sempre aponta para a versão final.

## Regra de arquitetura

```text
/ia/                         → silo/pilar
/ia/agentes/                 → hub temático
/artigos/o-que-sao-agentes-de-ia/ → explicador
/tutoriais/como-criar-agente-ia-com-ferramentas/ → procedimento
/comparativos/modelos-ia-local-para-programacao/ → decisão entre entidades
/ferramentas/ollama/         → entidade de ferramenta
```

## Registro inicial

| Slug canônica | Tipo | Cluster | Keyword primária | Status |
|---|---|---|---|---|
| `/ia/` | pilar | IA & Modelos | inteligência artificial aplicada | brief pronto |
| `/ia/agentes/` | hub | Agentes | agentes de IA | brief pronto |
| `/artigos/o-que-sao-agentes-de-ia/` | artigo | Agentes | o que são agentes de IA | brief pronto |
| `/tutoriais/como-criar-agente-ia-com-ferramentas/` | tutorial | Agentes | como criar agentes de IA | brief pronto |
| `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/` | artigo | Agentes | tipos de agentes de IA | brief pronto |
| `/artigos/como-avaliar-agentes-de-ia/` | guia | Agentes | avaliar agentes de IA | brief pronto |
| `/ia/ia-local/` | hub | IA local | IA local | brief pronto |
| `/artigos/como-escolher-modelo-ia-local/` | guia | IA local | escolher modelo de IA local | brief pronto |
| `/comparativos/modelos-ia-local-para-programacao/` | comparativo | IA local | modelos de IA local para programação | brief pronto |
| `/ia/engenharia-de-prompt/` | hub | Prompt | engenharia de prompt | brief pronto |
| `/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/` | guia | Prompt | o que é engenharia de prompt | brief pronto |
| `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/` | guia | Prompt | técnicas de engenharia de prompt | brief pronto |
| `/artigos/como-avaliar-prompts-em-producao/` | artigo | Prompt | avaliar prompts em produção | brief pronto |
| `/ia/rag/` | hub | RAG | RAG | brief pronto |
| `/tutoriais/rag-com-fontes-verificaveis/` | tutorial | RAG | RAG com fontes verificáveis | brief pronto |
| `/automacao/` | pilar | Automação | automação aplicada | brief pronto |
| `/automacao/n8n/` | hub | n8n | automação com n8n | brief pronto |
| `/tutoriais/n8n-primeiro-workflow/` | tutorial | n8n | primeiro workflow n8n | brief pronto |
| `/tutoriais/automacao-n8n-com-ia/` | tutorial | n8n | automação n8n com IA | brief pronto |
| `/tutoriais/automacao-n8n-webhook-api/` | tutorial | n8n | automação n8n com webhook e API | brief pronto |
| `/automacao/integracoes/` | hub | Integrações | integrações de sistemas | brief pronto |
| `/artigos/webhooks-o-que-sao-e-como-projetar/` | artigo | Integrações | webhooks | brief pronto |
| `/artigos/como-escolher-entre-webhook-polling-e-fila/` | guia | Integrações | webhook, polling ou fila | brief pronto |
| `/automacao/workflows/` | hub | Workflows | workflows operacionais | brief pronto |
| `/artigos/como-mapear-processo-antes-de-automatizar/` | guia | Workflows | mapeamento de processos | brief pronto |
| `/estudos-de-caso/automacao-de-pauta-editorial/` | case | Workflows | automação de pauta editorial | brief pronto |
| `/artigos/monitoramento-de-workflows-e-alertas/` | artigo | Workflows | monitoramento de workflows | brief pronto |
| `/automacao/agentes-operacionais/` | hub | Agentes operacionais | agentes operacionais | brief pronto |
| `/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/` | comparativo conceitual | Agentes operacionais | automação assistida por IA vs agentes autônomos | brief pronto |
| `/desenvolvimento/` | pilar | Desenvolvimento | desenvolvimento de software | brief pronto |
| `/desenvolvimento/arquitetura/` | hub | Arquitetura | arquitetura de software | brief pronto |
| `/artigos/arquitetura-cms-headless-para-site-editorial/` | guia | Arquitetura | CMS headless para site editorial | brief pronto |
| `/artigos/como-documentar-decisoes-de-arquitetura-adr/` | artigo | Arquitetura | decisões de arquitetura ADR | brief pronto |
| `/desenvolvimento/frontend/` | hub | Front-end | desenvolvimento front-end | brief pronto |
| `/tutoriais/astro-para-site-editorial/` | tutorial | Front-end | Astro para site editorial | brief pronto |
| `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/` | guia | Front-end | SSG, SSR e islands no Astro | brief pronto |
| `/desenvolvimento/backend/` | hub | Back-end | desenvolvimento back-end | brief pronto |
| `/artigos/validacao-de-dados-em-apis/` | guia | Back-end | validação de dados em APIs | brief pronto |
| `/artigos/idempotencia-em-apis-e-webhooks/` | guia | Back-end | idempotência em APIs e webhooks | brief pronto |
| `/desenvolvimento/devops/` | hub | DevOps | DevOps e entrega contínua | brief pronto |
| `/artigos/pipelines-cicd-github-actions-docker/` | artigo existente | DevOps | pipelines CI/CD GitHub Actions Docker | brief pronto |
| `/artigos/observabilidade-para-aplicacoes-web/` | guia | DevOps | observabilidade para aplicações web | brief pronto |
| `/desenvolvimento/qualidade/` | hub | Qualidade | qualidade de software | brief pronto |
| `/artigos/piramide-de-testes-pratica/` | guia | Qualidade | pirâmide de testes | brief pronto |
| `/artigos/revisao-de-codigo-com-ia-sem-perder-controle/` | artigo | Qualidade | revisão de código com IA | brief pronto |
| `/ferramentas/` | pilar/diretório | Ferramentas | ferramentas para trabalho técnico | brief pronto |
| `/ferramentas/ia-generativa/` | hub | Ferramentas de IA | ferramentas de IA generativa | brief pronto |
| `/comparativos/melhores-editores-codigo-ia/` | comparativo | Ferramentas de IA | editores de código com IA | brief pronto |
| `/comparativos/ferramentas-ia-para-desenvolvimento-de-software/` | comparativo | Ferramentas de IA | ferramentas de IA para desenvolvimento | brief pronto |
| `/ferramentas/desenvolvimento/` | hub | Ferramentas de dev | ferramentas para desenvolvimento | brief pronto |
| `/comparativos/cursor-vs-windsurf/` | comparativo | Ferramentas de dev | Cursor vs Windsurf | brief pronto |
| `/ferramentas/automacao/` | hub | Ferramentas de automação | ferramentas de automação | brief pronto |
| `/ferramentas/n8n/` | review | Ferramentas de automação | n8n | brief pronto |
| `/comparativos/n8n-vs-make-vs-zapier/` | comparativo | Ferramentas de automação | n8n vs Make vs Zapier | brief pronto |
| `/ferramentas/produtividade/` | hub | Produtividade | ferramentas de produtividade | brief pronto |
| `/comparativos/obsidian-vs-notion/` | comparativo | Produtividade | Obsidian vs Notion | brief pronto |
| `/artigos/como-escolher-ferramenta-de-gestao-de-conhecimento/` | guia | Produtividade | ferramenta de gestão de conhecimento | brief pronto |
| `/ferramentas/pesquisa/` | hub | Pesquisa | ferramentas de pesquisa técnica | brief pronto |
| `/artigos/como-avaliamos-ferramentas-de-ia/` | metodologia | Reviews | metodologia de review de ferramentas de IA | brief pronto |
| `/ferramentas/hardware/` | hub | Hardware | hardware para IA local | brief pronto |

## Controle antes de publicar

O CMS ou validador deve bloquear a publicação quando houver slug duplicada, keyword primária já usada, ausência de cluster, tipo incompatível com a URL ou alteração de slug sem redirect registrado.
