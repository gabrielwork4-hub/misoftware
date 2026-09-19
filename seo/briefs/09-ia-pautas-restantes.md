# Briefs de IA — lote de profundidade

Os briefs abaixo seguem o `slug-registry.md`. Todos são spokes: devem linkar para `/ia/` e para o hub correspondente; não criar FAQPage apenas para SEO.

## Content Brief: como criar agentes de IA

### Search Intent
Informacional/tutorial para desenvolvedor iniciante ou intermediário. A SERP recompensa passo a passo; o texto deve mostrar um agente mínimo com ferramenta, limites e logs, não prometer autonomia irrestrita.

### Competitor Analysis
| # | Tipo de concorrente | Cobertura | Gap |
|---|---|---|---|
| 1 | Tutorial de agente | código e framework | pouca governança |
| 2 | Documentação de framework | APIs e componentes | não explica decisão de arquitetura |
| 3 | Guia comercial | exemplos | sem teste reproduzível |

### Content Gaps and Opportunities
- Diferenciar agente de workflow determinístico; incluir diagrama, ferramenta mock e aprovação humana.
- Registrar modelo, versão, prompt, entrada, saída e falhas.

### Winning Outline
**H1:** Como criar um agente de IA com ferramentas  
**URL Slug:** `/tutoriais/como-criar-agente-ia-com-ferramentas/`  
**Target Word Count:** ~2.400 palavras

- Pré-requisitos e arquitetura — 220; lista e diagrama.
- Objetivo, prompt e contrato de saída — 300; keyword secundária “criar agente de IA”.
- Implementação do loop e ferramenta — 700; código comentado.
- Memória, limites e aprovação — 420; tabela de riscos.
- Testes e observabilidade — 420; casos de sucesso/falha.
- Checklist de publicação — 180; FS target.

### Recommended Meta Tags
**Title:** Como criar um agente de IA com ferramentas | misoftware  
**Meta Description:** Aprenda a criar um agente de IA com ferramentas, limites, logs e aprovação humana em um tutorial técnico reproduzível.

### Unique Angle and Information Gain
Exemplo mínimo reproduzível com ferramenta controlada, critérios de parada e logs de execução, incluindo falhas intencionais.

### E-E-A-T Requirements
- Gabriel Barboza; versão de linguagem/framework; repositório ou código completo.
- Fontes oficiais do modelo e framework; data do teste.

### Internal Linking Opportunities
`agentes de IA` → `/ia/agentes/`; `tipos de agentes` → `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/`; `avaliar agentes` → `/artigos/como-avaliar-agentes-de-ia/`; `LangChain` → `/ferramentas/langchain/`.

## Content Brief: tipos de agentes de IA

### Search Intent
Informacional; guia comparativo de arquiteturas para leitores que já conhecem o conceito. Deve responder “qual padrão usar?” e não repetir a definição do artigo principal.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Guia de tipos | taxonomia | sem critério de escolha |
| 2 | Framework blog | exemplos | viés de ferramenta |
| 3 | Lista de agentes | produtos | confunde agente e aplicativo |

### Content Gaps and Opportunities
- Matriz de tipo × autonomia × risco × custo; exemplos técnicos e anti-exemplos.
- Separar single-agent, workflow com LLM, multiagente e agente com supervisão.

### Winning Outline
**H1:** Tipos de agentes de IA e casos de uso  
**URL Slug:** `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/`  
**Target Word Count:** ~1.900 palavras

- Taxonomia curta — 180; FS target.
- Agente reativo e single-agent — 300.
- Planejamento, ferramentas e memória — 360.
- Multiagentes e hierarquia — 360.
- Matriz de escolha por tarefa — 420; tabela.
- Limites e erros de classificação — 180.

### Recommended Meta Tags
**Title:** Tipos de agentes de IA e quando usar cada um | misoftware  
**Meta Description:** Compare tipos de agentes de IA por autonomia, ferramentas, custo e risco para escolher uma arquitetura adequada ao seu caso.

### Unique Angle and Information Gain
Taxonomia operacional com critérios de seleção e exemplos de quando não usar multiagentes.

### E-E-A-T Requirements
Fontes de documentação de frameworks, exemplos executados e revisão de profissional técnico; atualizar quando padrões mudarem.

### Internal Linking Opportunities
`hub de agentes` → `/ia/agentes/`; `criar agente` → `/tutoriais/como-criar-agente-ia-com-ferramentas/`; `avaliar agente` → `/artigos/como-avaliar-agentes-de-ia/`.

## Content Brief: avaliar agentes de IA

### Search Intent
Informacional avançada; o leitor quer medir qualidade antes de colocar agentes em produção. Formato guia/checklist, com rubrica e exemplos de falha.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Guia de avaliação LLM | métricas | pouca operação de agentes |
| 2 | Framework docs | tracing | sem decisão de negócio |
| 3 | Consultoria | governança | pouco reproduzível |

### Content Gaps and Opportunities
- Rubrica tarefa, precisão, segurança, custo, latência, recuperação e intervenção.
- Dataset mínimo, casos adversariais e critério de lançamento/rollback.

### Winning Outline
**H1:** Como avaliar agentes de IA antes da produção  
**URL Slug:** `/artigos/como-avaliar-agentes-de-ia/`  
**Target Word Count:** ~2.100 palavras

- O que medir — 240.
- Montar conjunto de testes — 380.
- Rubrica e métricas — 500; tabela/planilha.
- Segurança, permissões e falhas — 340.
- Custo, latência e observabilidade — 320.
- Gate de produção e atualização — 240; checklist FS target.

### Recommended Meta Tags
**Title:** Como avaliar agentes de IA antes da produção | misoftware  
**Meta Description:** Use uma rubrica prática para avaliar agentes de IA por precisão, segurança, custo, latência, observabilidade e intervenção humana.

### Unique Angle and Information Gain
Modelo de scorecard e conjunto de testes com casos normais, ambíguos e adversariais; publicar planilha ou exemplo real.

### E-E-A-T Requirements
Dados de teste datados, modelo e versão; fontes de avaliação e segurança; revisão técnica identificada.

### Internal Linking Opportunities
`agentes de IA` → `/ia/agentes/`; `prompt em produção` → `/artigos/como-avaliar-prompts-em-producao/`; `observabilidade` → `/artigos/observabilidade-para-aplicacoes-web/`.

## Content Brief: escolher modelo de IA local

### Search Intent
Informacional/comercial; usuário quer escolher modelo e hardware sem depender de ranking genérico.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Lista de modelos | nomes e benchmarks | não reproduz teste local |
| 2 | Tutorial Ollama | instalação | pouca comparação |
| 3 | Fórum técnico | experiência | sem método consistente |

### Content Gaps and Opportunities
- Critérios por tarefa, contexto, quantização, VRAM e licença.
- Tabela de decisão e aviso de que benchmark externo não equivale ao hardware do leitor.

### Winning Outline
**H1:** Como escolher um modelo de IA local  
**URL Slug:** `/artigos/como-escolher-modelo-ia-local/`  
**Target Word Count:** ~1.900 palavras

- O que “melhor” significa — 180.
- Hardware e quantização — 420.
- Modelos por tarefa — 420; tabela.
- Como testar no próprio ambiente — 420.
- Privacidade, licença e atualização — 260.
- Checklist final — 200; FS target.

### Recommended Meta Tags
**Title:** Como escolher um modelo de IA local | misoftware  
**Meta Description:** Escolha um modelo de IA local por tarefa, VRAM, quantização, contexto, licença e desempenho medido no seu próprio computador.

### Unique Angle and Information Gain
Matriz de decisão ligada a testes locais documentados, incluindo consumo e latência por hardware.

### E-E-A-T Requirements
Máquina, sistema, modelo, quantização e data de cada teste; links para licenças e documentação oficial.

### Internal Linking Opportunities
`IA local` → `/ia/ia-local/`; `Ollama` → `/tutoriais/rodar-deepseek-llama-localmente-ollama/`; `modelos para programação` → `/comparativos/modelos-ia-local-para-programacao/`.

## Content Brief: modelos de IA local para programação

### Search Intent
Comercial/informacional; desenvolvedor compara modelos para código. Formato comparativo com tabela e metodologia de teste.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Ranking de LLMs | benchmark | sem ambiente local |
| 2 | Review de modelo | qualidade | sem tarefas comparáveis |
| 3 | Guia de setup | instalação | não decide entre modelos |

### Content Gaps and Opportunities
- Mesmo conjunto de tarefas, hardware, quantização e critérios de correção.
- Separar autocomplete, refatoração, testes, explicação e contexto longo.

### Winning Outline
**H1:** Modelos de IA local para programação: comparação prática  
**URL Slug:** `/comparativos/modelos-ia-local-para-programacao/`  
**Target Word Count:** ~2.400 palavras

- Metodologia e ambiente — 300.
- Critérios e tarefas — 320.
- Tabela comparativa — 520; preço/licença não inventados.
- Resultados por tarefa — 700.
- Qual modelo escolher por hardware — 360.
- Limitações e atualização — 200.

### Recommended Meta Tags
**Title:** Modelos de IA local para programação: comparação | misoftware  
**Meta Description:** Compare modelos de IA local para programação por qualidade, contexto, VRAM, velocidade, licença e desempenho em tarefas reais.

### Unique Angle and Information Gain
Teste próprio reproduzível, com prompts, código de entrada, critérios de correção e ambiente publicados.

### E-E-A-T Requirements
Autor com experiência prática, metodologia pública, data/versão, screenshots ou logs e disclosure de hardware.

### Internal Linking Opportunities
`IA local` → `/ia/ia-local/`; `escolher modelo` → `/artigos/como-escolher-modelo-ia-local/`; `editores com IA` → `/comparativos/melhores-editores-codigo-ia/`; `Ollama` → `/ferramentas/ollama/`.

## Content Brief: técnicas de engenharia de prompt com exemplos

### Search Intent
Informacional/prático; leitor já entende o conceito e quer técnicas aplicáveis. Deve complementar, não duplicar, o guia principal.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Guia de técnicas | lista extensa | pouca priorização |
| 2 | Curso | exercícios | não mostra falhas |
| 3 | Documentação | exemplos | sem contexto técnico |

### Content Gaps and Opportunities
- Antes/depois de prompts em tarefas técnicas; quando cada técnica não funciona.
- Few-shot, decomposição, formato estruturado, delimitação e verificação.

### Winning Outline
**H1:** Técnicas de engenharia de prompt com exemplos práticos  
**URL Slug:** `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/`  
**Target Word Count:** ~2.200 palavras

- Como escolher uma técnica — 180.
- Contexto, papel e restrições — 300.
- Few-shot e exemplos — 320.
- Decomposição e raciocínio estruturado — 360.
- Saída estruturada e validação — 360.
- Iteração, teste e falhas — 420.
- Checklist — 180.

### Recommended Meta Tags
**Title:** Técnicas de engenharia de prompt com exemplos | misoftware  
**Meta Description:** Aplique técnicas de engenharia de prompt com exemplos de few-shot, decomposição, formato estruturado, restrições e validação.

### Unique Angle and Information Gain
Cada técnica terá caso de uso, contraexemplo, custo e critério para decidir quando abandonar a abordagem.

### E-E-A-T Requirements
Exemplos executados por modelo/versão, fontes oficiais e revisão técnica; não afirmar causalidade sem teste.

### Internal Linking Opportunities
`engenharia de prompt` → `/ia/engenharia-de-prompt/`; `guia de prompt` → `/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/`; `avaliar prompts` → `/artigos/como-avaliar-prompts-em-producao/`.

## Content Brief: avaliar prompts em produção

### Search Intent
Informacional avançada; equipes precisam controlar qualidade, custo e regressões de prompts usados em produto.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Guia de prompting | técnicas | não aborda ciclo de vida |
| 2 | Plataforma de avaliação | métricas | viés comercial |
| 3 | Artigo técnico | testes | sem governança editorial |

### Content Gaps and Opportunities
- Definir dataset de casos, rubrica, versão, baseline, regressão e aprovação.
- Explicar quando uma melhoria de qualidade não compensa custo/latência.

### Winning Outline
**H1:** Como avaliar prompts em produção  
**URL Slug:** `/artigos/como-avaliar-prompts-em-producao/`  
**Target Word Count:** ~1.900 palavras

- Prompt como artefato versionado — 260.
- Dataset e casos-limite — 340.
- Rubrica de qualidade — 360.
- Custo, latência e segurança — 300.
- Regressão e aprovação — 360.
- Checklist operacional — 180; FS target.

### Recommended Meta Tags
**Title:** Como avaliar prompts em produção | misoftware  
**Meta Description:** Crie testes, métricas e controle de versões para avaliar prompts em produção sem perder qualidade, segurança e previsibilidade.

### Unique Angle and Information Gain
Modelo de ciclo de vida com baseline, casos-limite e gate de aprovação antes de trocar o prompt.

### E-E-A-T Requirements
Exemplos versionados, modelo e data, fontes de avaliação e revisão de profissional técnico.

### Internal Linking Opportunities
`engenharia de prompt` → `/ia/engenharia-de-prompt/`; `técnicas de prompt` → `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/`; `avaliar agentes` → `/artigos/como-avaliar-agentes-de-ia/`.

## Content Brief: RAG com fontes verificáveis

### Search Intent
Informacional/tutorial; desenvolvedores querem reduzir respostas sem fonte e entender recuperação, chunking e avaliação. A página deve priorizar rastreabilidade, não apenas “chat com documentos”.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Tutorial RAG | pipeline | pouca avaliação factual |
| 2 | Documentação de framework | componentes | complexidade para iniciantes |
| 3 | Artigo de produto | casos | viés e pouca transparência |

### Content Gaps and Opportunities
- Mostrar fonte, trecho recuperado e motivo de resposta insuficiente.
- Definir chunking, metadata, filtros, citações e conjunto de avaliação.

### Winning Outline
**H1:** RAG com fontes verificáveis: arquitetura e tutorial  
**URL Slug:** `/tutoriais/rag-com-fontes-verificaveis/`  
**Target Word Count:** ~2.600 palavras

- Quando RAG é necessário — 220.
- Arquitetura do pipeline — 360; diagrama.
- Ingestão, chunking e metadata — 420.
- Recuperação, reranking e citações — 520.
- Implementação mínima — 620; código comentado.
- Avaliação e falhas — 300.
- Checklist de fontes — 160; FS target.

### Recommended Meta Tags
**Title:** RAG com fontes verificáveis: guia e tutorial | misoftware  
**Meta Description:** Aprenda a construir RAG com chunking, recuperação, citações e avaliação para gerar respostas rastreáveis e reduzir alucinações.

### Unique Angle and Information Gain
Tutorial que exibe evidência recuperada junto da resposta e mede precisão de fonte em um conjunto de perguntas versionado.

### E-E-A-T Requirements
Documentação oficial do framework/modelo, corpus de teste autorizado, versões, logs sem dados sensíveis e revisão técnica.

### Internal Linking Opportunities
`hub de RAG` → `/ia/rag/`; `LangChain` → `/ferramentas/langchain/`; `IA local` → `/ia/ia-local/`; `avaliar agentes` → `/artigos/como-avaliar-agentes-de-ia/`.

## Content Brief: hub de RAG

### Search Intent
Hub informacional para organizar conceito, arquitetura, tutorial e avaliação de RAG. Deve funcionar como índice de trilha e não repetir o tutorial.

### Competitor Analysis
| # | Tipo | Cobertura | Gap |
|---|---|---|---|
| 1 | Documentação de framework | conceitos | navegação fragmentada |
| 2 | Guia de RAG | arquitetura | sem trilha de avaliação |
| 3 | Página de produto | casos | viés comercial |

### Content Gaps and Opportunities
- Separar entender, construir, citar e avaliar.
- Linkar tutorial, LangChain, IA local e engenharia de prompt.

### Winning Outline
**H1:** RAG: guia para respostas com fontes verificáveis  
**URL Slug:** `/ia/rag/`  
**Target Word Count:** ~1.400 palavras

- O que é RAG — 180.
- Quando usar e quando não usar — 240.
- Arquitetura e componentes — 280.
- Tutorial e ferramentas — 260.
- Citações e avaliação — 260.
- Trilha recomendada — 180.

### Recommended Meta Tags
**Title:** RAG: guia para respostas com fontes verificáveis | misoftware  
**Meta Description:** Entenda RAG, recuperação, chunking, citações e avaliação; siga uma trilha prática para construir respostas de IA rastreáveis.

### Unique Angle and Information Gain
Mapa de decisão que conecta arquitetura a evidência e avaliação, cobrindo todos os conteúdos-filhos do cluster.

### E-E-A-T Requirements
Links para documentação primária, atualização por versão e cards apenas para páginas publicadas e testadas.

### Internal Linking Opportunities
`tutorial de RAG` → `/tutoriais/rag-com-fontes-verificaveis/`; `engenharia de prompt` → `/ia/engenharia-de-prompt/`; `LangChain` → `/ferramentas/langchain/`.
