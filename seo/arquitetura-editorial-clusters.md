# Arquitetura editorial e mapa de pautas — misoftware

> Status: proposta para validação editorial.  
> Data: 18/09/2026.  
> Escopo: IA, automação, desenvolvimento e ferramentas; não inclui as URLs legadas, que permanecem em `410` conforme a decisão registrada em `ARQUITETURA_MISOFTWARE.md`.

## Decisões fechadas

- A URL pública é determinada pelo **tipo de conteúdo**, não pela categoria: artigos em `/artigos/`, guias práticos em `/tutoriais/`, comparações em `/comparativos/`, ferramentas em `/ferramentas/` e hubs em `/[silo]/[cluster]/`.
- Silo é a navegação primária. Categoria é uma classificação editorial e não cria arquivo indexável no MVP. Tags são auxiliares e também não criam páginas indexáveis.
- Cada pauta recebe uma única keyword primária e um único destino. Variações de mesma intenção são absorvidas na mesma página para prevenir canibalização.
- Página-pilar e hub são páginas de curadoria e síntese, não artigos genéricos pensados para competir por termos amplos.
- Autor recomendado: Gabriel Barboza para testes, tutoriais, comparativos e análises com experiência própria; Redação para explicadores e curadoria com revisão técnica identificada.

## Inventário atual e lacunas

| URL/conteúdo atual | Papel no novo mapa | Decisão |
|---|---|---|
| `/ia/` | Pilar de IA | Manter; ampliar para os hubs abaixo. |
| `/automacao/` | Pilar de automação | Manter; ampliar para os hubs abaixo. |
| `/desenvolvimento/` | Pilar de desenvolvimento | Manter; ampliar para os hubs abaixo. |
| `/ferramentas/` | Diretório e pilar de ferramentas | Manter; reorganizar a curadoria por casos de uso. |
| `ia-generativa-no-fluxo-de-trabalho` | Artigo de entrada do silo IA | Atualizar e linkar para agentes, IA local e automação assistida. |
| `rodar-deepseek-llama-localmente-ollama` + `/ferramentas/ollama/` | Tutorial e entidade do cluster IA local | Manter; tornar referência do hub `/ia/ia-local/`. |
| `raciocinio-estruturado-chain-of-thought` | Spoke de prompting | Manter; revisar para separar raciocínio estruturado de engenharia de prompt aplicada. |
| `pipelines-cicd-github-actions-docker` | Spoke DevOps | Manter; incluir no hub `/desenvolvimento/devops/`. |
| `melhores-editores-codigo-ia-comparados` + `/ferramentas/cursor/` | Comparativo e entidade do cluster de desenvolvimento com IA | Manter; normalizar como `/comparativos/.../` quando a rota existir, com `301` da URL publicada se necessário. |
| `segundo-cerebro-obsidian-vs-notion` | Comparativo de produtividade | Manter; conectar ao hub de gestão de conhecimento. |
| `/ferramentas/langchain/` e `/ferramentas/v0-vercel/` | Entidades de ferramenta | Manter; acrescentar páginas de uso real, alternativas e integrações antes de escalar o diretório. |

## Evidência de demanda usada nesta priorização

Dados Ahrefs, Brasil, coletados em 18/09/2026 (dados ao vivo; confiança 1,00):

| Tema | Volume/mês | KD | Leitura editorial |
|---|---:|---:|---|
| `agentes de ia` | 3.400 | 17 | Pilar temático viável; há subintenções claras de conceito, criação, tipos e casos de uso. |
| `engenharia de prompt` | 3.700 | 6 | Oportunidade inicial forte; concentrar conceito, técnicas e exemplos em vez de páginas sobre cursos. |
| `desenvolvimento de software` | 2.600 | 2 | Tema amplo, útil como hub; focar os spokes no processo, arquitetura, qualidade e entrega. |
| `ia local` | 300 | n/d | Demanda pequena, porém altamente aderente ao posicionamento e às entidades já publicadas. |
| `ferramentas de ia` | 900 | 0 | Curadoria comercial/informacional; evitar lista genérica e segmentar por trabalho técnico. |
| `n8n` | 171.000 | 56 | Termo de marca muito concorrido; entrar por tutoriais, integrações e casos de uso, não por uma página genérica. |

Termos como `inteligência artificial` (294 mil/mês), `automação` (17 mil), `produtividade` (10 mil) e `desenvolvimento web` (4,4 mil) são excessivamente abrangentes ou misturam intenções. São adequados para navegação/entidade, não para orientar uma única pauta de aquisição.

## Mapa de URLs e pautas

Legenda: **P0** = primeira onda (publicar antes dos demais spokes); **P1** = segunda onda; **E** = entidade/diretório. Todas as URLs abaixo são novas, salvo indicação de “existente”.

### 1. IA & Modelos — silo `/ia/`

| Prioridade | URL | Tipo | Categoria | Pauta / intenção primária | Relações obrigatórias |
|---|---|---|---|---|---|
| P0 | `/ia/` | Página-pilar | IA & Modelos | IA aplicada ao trabalho técnico: mapa de modelos, agentes, IA local, RAG e prompting. | Todos os hubs IA; artigos-base existentes. |
| P0 | `/ia/agentes/` | Hub | IA & Modelos | Como agentes de IA funcionam, limites, componentes, quando usar e mapa de casos. | `/artigos/o-que-sao-agentes-de-ia/`, criação, avaliação e n8n. |
| P0 | `/artigos/o-que-sao-agentes-de-ia/` | Artigo explicador | IA & Modelos | “O que são agentes de IA”: arquitetura, autonomia, memória, ferramentas e supervisão. | Hub agentes; casos e avaliação. |
| P0 | `/tutoriais/como-criar-agente-ia-com-ferramentas/` | Tutorial | IA & Modelos | Criar um agente simples com ferramentas, limites e logs. | Hub agentes; LangChain; avaliação. |
| P1 | `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/` | Artigo | IA & Modelos | Tipos de agentes e onde cada padrão falha ou faz sentido. | Hub agentes; tutorial; automação. |
| P1 | `/artigos/como-avaliar-agentes-de-ia/` | Guia | IA & Modelos | Critérios de qualidade: tarefa, precisão, custo, latência, segurança e intervenção humana. | Hub agentes; RAG; estudos de caso futuros. |
| P0 | `/ia/ia-local/` | Hub | IA & Modelos | Guia de decisão para executar modelos localmente: privacidade, hardware, modelos e stack. | Tutorial Ollama existente; ferramenta Ollama; comparativo de hardware. |
| P0 | `/tutoriais/rodar-deepseek-llama-localmente-ollama/` | Tutorial existente | IA & Modelos | Instalação, VRAM e API local. | Hub IA local; Ollama; guia de hardware. |
| P1 | `/artigos/como-escolher-modelo-ia-local/` | Guia de decisão | IA & Modelos | Como escolher modelo, quantização e hardware por caso de uso. | Hub IA local; Ollama; hardware. |
| P1 | `/comparativos/modelos-ia-local-para-programacao/` | Comparativo | Reviews & Hardware | Modelos locais para código: contexto, hardware, velocidade e qualidade. | IA local; Ollama; editores de código. |
| P0 | `/ia/engenharia-de-prompt/` | Hub | Engenharia de Prompt | Método para projetar prompts testáveis: contexto, instruções, exemplos, formato e avaliação. | Artigo CoT existente; técnicas e biblioteca. |
| P0 | `/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/` | Guia | Engenharia de Prompt | Conceito, processo e checklist aplicável ao trabalho técnico. | Hub prompting; técnicas; exemplos. |
| P1 | `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/` | Guia prático | Engenharia de Prompt | Few-shot, decomposição, estrutura de saída e iteração — com exemplos verificáveis. | Hub prompting; CoT existente. |
| P1 | `/artigos/como-avaliar-prompts-em-producao/` | Artigo | Engenharia de Prompt | Conjunto de testes, critérios de aceitação, regressão e custo de prompts. | Hub prompting; avaliação de agentes. |
| P1 | `/ia/rag/` | Hub | IA & Modelos | RAG com fontes verificáveis: arquitetura, recuperação, citações e avaliação. | Tutorial de RAG; avaliação; IA local. |
| P1 | `/tutoriais/rag-com-fontes-verificaveis/` | Tutorial | IA & Modelos | Construir RAG mínimo com citações, chunking, filtros e avaliação. | Hub RAG; LangChain; avaliação. |

### 2. Automação — silo `/automacao/`

| Prioridade | URL | Tipo | Categoria | Pauta / intenção primária | Relações obrigatórias |
|---|---|---|---|---|---|
| P0 | `/automacao/` | Página-pilar | Automação | Como automatizar operações com segurança: workflows, integrações, webhooks e IA assistida. | Todos os hubs automação; entidades n8n. |
| P0 | `/automacao/n8n/` | Hub | Automação | Mapa de automações com n8n: escolhas de arquitetura, self-hosting, credenciais e observabilidade. | Tutoriais n8n; ferramenta n8n; agentes. |
| P0 | `/tutoriais/n8n-primeiro-workflow/` | Tutorial | Automação | Primeiro workflow no n8n: trigger, dados, tratamento de erro e publicação. | Hub n8n; webhooks; observabilidade. |
| P0 | `/tutoriais/automacao-n8n-com-ia/` | Tutorial | Automação | Workflow n8n com IA, revisão humana e rastreabilidade. | Hub n8n; agentes; prompting. |
| P1 | `/tutoriais/automacao-n8n-webhook-api/` | Tutorial | Automação | Receber webhook, validar payload, idempotência e responder por API. | Hub n8n; integrações. |
| P0 | `/automacao/integracoes/` | Hub | Automação | Como desenhar integrações confiáveis entre APIs, eventos, filas e sistemas. | Webhooks; n8n; processos. |
| P0 | `/artigos/webhooks-o-que-sao-e-como-projetar/` | Guia | Automação | Webhooks, assinaturas, retries, idempotência e observabilidade. | Hub integrações; tutorial n8n webhook. |
| P1 | `/artigos/como-escolher-entre-webhook-polling-e-fila/` | Guia de decisão | Automação | Quando usar webhook, polling ou fila — critérios técnicos e operacionais. | Hub integrações; desenvolvimento backend. |
| P0 | `/automacao/workflows/` | Hub | Automação | Workflow operacional: descoberta, exceções, aprovações, métricas e manutenção. | Pautas de processo e monitoramento. |
| P0 | `/artigos/como-mapear-processo-antes-de-automatizar/` | Guia | Automação | Mapeamento de processo, exceções, dono e métrica antes da automação. | Hub workflows; caso editorial. |
| P1 | `/estudos-de-caso/automacao-de-pauta-editorial/` | Estudo de caso | Automação | Pauta → briefing → revisão → agendamento, com evidências e intervenção humana. | Hub workflows; n8n; política editorial. |
| P1 | `/artigos/monitoramento-de-workflows-e-alertas/` | Artigo | Automação | SLIs, logs, alertas, retries e runbooks para automações. | Hub workflows; DevOps. |
| P1 | `/automacao/agentes-operacionais/` | Hub | Automação | Onde agentes acrescentam valor a workflows e onde a aprovação humana é obrigatória. | Agentes IA; n8n; governança. |
| P1 | `/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/` | Comparativo conceitual | Automação | Diferenças de autonomia, risco, custo e governança. | Hub agentes operacionais; IA/agentes. |

### 3. Desenvolvimento — silo `/desenvolvimento/`

| Prioridade | URL | Tipo | Categoria | Pauta / intenção primária | Relações obrigatórias |
|---|---|---|---|---|---|
| P0 | `/desenvolvimento/` | Página-pilar | Desenvolvimento | Sistema de entrega de software: arquitetura, front-end, back-end, DevOps e qualidade. | Todos os hubs desenvolvimento. |
| P0 | `/desenvolvimento/arquitetura/` | Hub | Desenvolvimento | Decisões de arquitetura para produtos e sites editoriais: componentes, CMS, dados, cache e evolução. | Astro; CMS headless; observabilidade. |
| P0 | `/artigos/arquitetura-cms-headless-para-site-editorial/` | Guia | Desenvolvimento | Arquitetura CMS headless: modelo de conteúdo, preview, webhooks e publicação. | Hub arquitetura; Directus (futuro); automação editorial. |
| P1 | `/artigos/como-documentar-decisoes-de-arquitetura-adr/` | Artigo | Desenvolvimento | ADRs práticos: contexto, alternativas, decisão e consequência. | Hub arquitetura; qualidade. |
| P0 | `/desenvolvimento/frontend/` | Hub | Desenvolvimento | Front-end moderno: performance, renderização, acessibilidade e componentes. | Astro; IA para desenvolvimento. |
| P0 | `/tutoriais/astro-para-site-editorial/` | Tutorial | Desenvolvimento | Construir site editorial com Astro, conteúdo, SEO e deploy. | Hub front-end; arquitetura; DevOps. |
| P1 | `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/` | Guia de decisão | Desenvolvimento | Escolher SSG, SSR e islands sem degradar desempenho. | Hub front-end; tutorial Astro. |
| P0 | `/desenvolvimento/backend/` | Hub | Desenvolvimento | APIs e serviços confiáveis: contratos, validação, autenticação e integração. | Webhooks; filas; qualidade. |
| P0 | `/artigos/validacao-de-dados-em-apis/` | Guia | Desenvolvimento | Validação de entrada, schemas, erros e contratos de API. | Hub backend; webhooks; testes. |
| P1 | `/artigos/idempotencia-em-apis-e-webhooks/` | Guia | Desenvolvimento | Projetar operações repetíveis e seguras. | Hub backend; automação/integracoes. |
| P0 | `/desenvolvimento/devops/` | Hub | Desenvolvimento | Entrega contínua, ambientes, secrets, cache e observabilidade. | CI/CD existente; monitoring; automação. |
| P0 | `/artigos/pipelines-cicd-github-actions-docker/` | Artigo existente | Desenvolvimento | Pipeline da validação ao deploy. | Hub DevOps; qualidade; observabilidade. |
| P1 | `/artigos/observabilidade-para-aplicacoes-web/` | Guia | Desenvolvimento | Logs, métricas, traces e alertas orientados a diagnóstico. | Hub DevOps; automação/workflows. |
| P0 | `/desenvolvimento/qualidade/` | Hub | Desenvolvimento | Qualidade de software: testes, revisão, segurança e critérios de aceite. | Testes; validação; CI/CD. |
| P1 | `/artigos/piramide-de-testes-pratica/` | Guia | Desenvolvimento | Testes unitários, integração e E2E com critérios de uso. | Hub qualidade; CI/CD. |
| P1 | `/artigos/revisao-de-codigo-com-ia-sem-perder-controle/` | Artigo | Desenvolvimento | Uso de IA em code review: riscos, checklist e aprovação humana. | Hub qualidade; ferramentas/editor. |

### 4. Ferramentas — silo `/ferramentas/`

| Prioridade | URL | Tipo | Categoria | Pauta / intenção primária | Relações obrigatórias |
|---|---|---|---|---|---|
| P0 | `/ferramentas/` | Diretório-pilar | Ferramentas | Curadoria por problema resolvido, com metodologia de teste e filtros. | Todos os hubs ferramentas; páginas de entidade. |
| P0 | `/ferramentas/ia-generativa/` | Hub/diretório | Ferramentas | Ferramentas de IA para pesquisa, escrita, código e automação, com recortes por caso de uso. | Reviews; IA/modelos; prompting. |
| P0 | `/comparativos/melhores-editores-codigo-ia/` | Comparativo | Ferramentas | Editores de código com IA: testes reproduzíveis, preço, privacidade, contexto e multi-arquivo. | Cursor; desenvolvimento; IA local. |
| P1 | `/comparativos/ferramentas-ia-para-desenvolvimento-de-software/` | Comparativo | Ferramentas | Ferramentas para planejamento, código, testes e revisão — segmentadas por etapa. | Desenvolvimento; reviews individuais. |
| P0 | `/ferramentas/desenvolvimento/` | Hub/diretório | Ferramentas | Seleção de IDEs, frameworks, observabilidade, deploy e bibliotecas. | Cursor, LangChain, V0; comparativos. |
| P1 | `/ferramentas/langchain/` | Entidade existente | Ferramentas | Atualizar com uso, limitações, alternativas e exemplos. | RAG; agentes; tutorial. |
| P1 | `/comparativos/cursor-vs-windsurf/` | Comparativo | Ferramentas | Cursor vs Windsurf para trabalho real em repositórios. | Cursor; editores de código. |
| P0 | `/ferramentas/automacao/` | Hub/diretório | Ferramentas | Ferramentas para conectar sistemas, coordenar processos e monitorar execuções. | n8n; workflows; integrações. |
| P1 | `/ferramentas/n8n/` | Entidade/review | Ferramentas | Review técnico do n8n: hospedagem, custo, segurança, limites e casos de uso. | Hub n8n; tutoriais. |
| P1 | `/comparativos/n8n-vs-make-vs-zapier/` | Comparativo | Ferramentas | Escolha por integrações, governança, custo e complexidade. | Ferramentas automação; automação/integracoes. |
| P0 | `/ferramentas/produtividade/` | Hub/diretório | Produtividade | Ferramentas de foco, notas, documentação e gestão de conhecimento para trabalho técnico. | Obsidian/Notion; segundo cérebro. |
| P0 | `/comparativos/obsidian-vs-notion/` | Comparativo | Produtividade | Segundo cérebro: privacidade, colaboração, estrutura e busca. | Hub produtividade; entidades Obsidian e Notion (novas). |
| P1 | `/artigos/como-escolher-ferramenta-de-gestao-de-conhecimento/` | Guia de decisão | Produtividade | Critérios para escolher ferramenta de conhecimento sem comparação superficial. | Hub produtividade; Obsidian vs Notion. |
| P1 | `/ferramentas/pesquisa/` | Hub/diretório | Ferramentas | Ferramentas de pesquisa, documentação e verificação técnica. | RAG; produtividade; metodologia editorial. |
| P1 | `/artigos/como-avaliamos-ferramentas-de-ia/` | Metodologia | Reviews & Hardware | Critérios públicos de review: cenários, versão, preço, privacidade, limitações e conflitos. | Todo diretório de ferramentas; política editorial. |
| P1 | `/ferramentas/hardware/` | Hub/diretório | Reviews & Hardware | Hardware para IA local: VRAM, memória, consumo e adequação por carga. | IA local; comparativo de modelos. |

## Distribuição por entidade editorial

| Entidade | Páginas que a representam | Regra |
|---|---|---|
| Silo | 4 pilares: `/ia/`, `/automacao/`, `/desenvolvimento/`, `/ferramentas/` | Uma página indexável por silo. |
| Cluster | 16 hubs temáticos | Hub é uma página curada e linka para 3–6 páginas de apoio. |
| Artigo/guia | Explicadores, decisões e métodos | Uma keyword primária por URL. |
| Tutorial | Procedimento reproduzível | Deve conter pré-requisitos, versão, passos, erros comuns e resultado verificável. |
| Comparativo/review | Decisão comercial ou de ferramenta | Deve declarar metodologia, versão/teste, critérios e data de atualização. |
| Ferramenta | Página de entidade | Só publicar quando houver análise real e pelo menos um caso de uso ou relação contextual. |
| Estudo de caso | Resultado aplicado | Exige evidência, método e autorização quando aplicável. |
| Autor | Gabriel Barboza ou Redação | Byline, data e fontes obrigatórios em todas as peças. |

## Regras de ligação e não canibalização

1. Cada spoke aponta para seu hub e para a página-pilar do silo; o hub aponta de volta para todos os spokes prioritários.
2. Todo tutorial deve apontar para: uma entidade de ferramenta, um explicador conceitual e a próxima etapa do fluxo.
3. Todo comparativo aponta para as entidades comparadas e para o guia de decisão do cluster.
4. Entre silos, só há links quando a tarefa os conecta de fato: por exemplo, agentes de IA ↔ automação com n8n ↔ observabilidade.
5. Não criar artigos independentes para variações como “o que são agentes de IA” e “agentes de IA o que são”; ambas pertencem à mesma URL. O mesmo vale para “engenharia de prompt” e “o que é engenharia de prompt”.
6. Evitar conteúdo de intenção educacional/comercial fora do escopo editorial, como cursos, faculdades, vagas, salários, CNAE ou listões de ferramentas sem teste.

## Ordem de produção sugerida

### Onda 0 — fundação de templates e rotas

Implementar as rotas de tutorial, comparativo e estudo de caso já previstas na arquitetura, além dos hubs aninhados `/[silo]/[cluster]/`. Definir campos obrigatórios de fontes, data de atualização, metodologia de review e relacionamentos internos no CMS.

### Onda 1 — autoridade inicial (16 peças, incluindo existentes atualizadas)

1. Pilares dos quatro silos e hubs: agentes, IA local, engenharia de prompt, n8n, integrações, workflows, arquitetura, front-end, backend, DevOps, qualidade, IA generativa, desenvolvimento, automação e produtividade.
2. “O que são agentes de IA”.
3. “Engenharia de prompt: o que é e como aplicar”.
4. “Como mapear um processo antes de automatizar”.
5. “Webhooks: o que são e como projetar”.
6. “Arquitetura CMS headless para site editorial”.
7. “Astro para site editorial”.
8. “Validação de dados em APIs”.
9. “Como avaliamos ferramentas de IA”.
10. Atualizar os conteúdos existentes sobre Ollama, CI/CD, Chain-of-Thought, editores de código e Obsidian vs Notion com links do cluster.

### Onda 2 — profundidade e decisão

Publicar os tutoriais de agentes, n8n e RAG; comparativos de modelos locais, editores e plataformas de automação; avaliação de agentes/prompts; observabilidade; testes; e o estudo de caso editorial.

## Critério de confirmação antes dos briefings

Esta arquitetura está pronta para briefing quando forem confirmadas três escolhas editoriais:

1. O foco inicial é **trabalho técnico para profissionais e times**, e não conteúdo para cursos, carreira ou público generalista.
2. O n8n é tratado como entidade prioritária, mas a estratégia de aquisição será baseada em casos de uso e tutoriais, não na disputa do termo genérico.
3. Comparativos e reviews terão teste próprio e data de atualização; sem isso, a pauta entra como guia de decisão, não review.

Com a aprovação, o próximo artefato deve ser uma fila de briefs da Onda 1, começando pelos quatro conteúdos de maior efeito de cluster: agentes de IA, engenharia de prompt, webhooks e mapeamento de processos.
