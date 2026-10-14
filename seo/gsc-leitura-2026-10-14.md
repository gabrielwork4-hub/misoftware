# Leitura do Search Console e decisão sobre o plano de linkagem — misoftware

**Data:** 14/10/2026 · **Escopo:** exportação do Search Console de `misoftware.com.br` (tipo de pesquisa Web), de **24/09/2026 a 11/10/2026, 18 dias**. O filtro dizia "últimos 16 meses", mas o site só tem dados desde a estreia. Os 7 arquivos originais estão em `seo/gsc/2026-10-14/`; a planilha que cruza cada página com a auditoria de linkagem é [`gsc-paginas-2026-10-14.csv`](gsc-paginas-2026-10-14.csv).

## Resumo

**Os dados ainda não sustentam um plano de páginas receptoras e doadoras, nem um teste de 30 dias com grupo de controle. Recomendo não rodar o teste neste ciclo.** O site soma **6 cliques e 190 impressões em 18 dias**; a página mais vista teve 46 impressões, e a mediana é 2 por página. A única coisa que dá para medir com esse volume é a presença do site na busca, não o efeito de um link.

**Recomendo** seguir com os ajustes estruturais de linkagem que a arquitetura já pede (prioridade 2 da auditoria), que não dependem de dado de busca, e **refazer esta leitura em 14/11/2026**, com 28 dias completos depois das correções de 14/10.

| Indicador | Valor | Fonte |
|---|---|---|
| Período | 24/09 a 11/10/2026 (18 dias) | Gráfico |
| Cliques / impressões | 6 / 190 | Gráfico |
| Páginas com alguma impressão | 68 de 101 | Páginas |
| Páginas com 10 ou mais impressões | 6 | Páginas |
| Páginas com 100 ou mais impressões (mínimo padrão do método) | **0** | Páginas |
| Cliques com consulta identificada | 4, todos da marca ("misoftware") | Consultas |
| País / dispositivo | Brasil 138 impressões (73%); computador 163 (86%) | Países, Dispositivos |

## 1. O que os dados mostram

**Fatos**

- **O site é novo e está começando a aparecer.** As impressões sobem de 2 (26/09) para 28 (06/10) e oscilam entre 2 e 20 depois. Não há tendência clara nesse intervalo.
- **Todos os 4 cliques que vêm com consulta são da marca.** Dos 6 cliques totais, 2 não têm consulta listada (o Search Console esconde consultas raras). A tabela de páginas lista 7 cliques (home 4, `/contato/` 1, `/ferramentas/produtividade/` 1 e o artigo de engenharia de prompt 1) contra 6 no gráfico, pela mesma diferença entre somar por URL e somar por site.
- **A tabela de páginas soma 317 impressões, e o gráfico 190.** A diferença é esperada: o Search Console conta uma busca uma vez para o site e uma vez para cada página que apareceu nela. **Leitura:** em algumas buscas, mais de uma página do misoftware apareceu junta.
- **33 das 101 páginas não aparecem no relatório** (lista no apêndice). Inclui hubs importantes (IA local, RAG, back-end, DevOps, front-end) e o artigo `como-avaliar-agentes-de-ia`, que recebe 13 links de texto. Isso **não prova** que não estejam indexadas: o relatório só lista páginas com impressão. 3 notícias (Deno, Microsoft-Decision-1 e Muse Wonder) foram publicadas entre 11 e 13/10, no fim ou depois da janela; as outras 3 ausentes (Claude Code mods, DeepSeek Harness e Stack Overflow) são de 06/10.
- **Links de texto não explicam quem aparece.** Páginas com impressão recebem em média 4,9 links de texto; páginas sem impressão, 4,3. Com 90 páginas e esse volume, a diferença é pequena demais para concluir qualquer coisa.
- **As notícias de modelos aparecem bem posicionadas cedo:** as 5 notícias com impressão somam 43 impressões, posição média 7,4 e nenhum clique. **Leitura:** a notícia do GPT-6.1 Sol tem 22 impressões, e 5 consultas do relatório citam "gpt-6.1 sol" com operador `site:` ou endereço da OpenAI (por exemplo, `site:openai.com "gpt-6.1 sol"`). Isso parece pesquisa técnica ou automatizada, não leitor, mas não consigo confirmar que elas apontam para essa página.

**Grupos de consulta que vale acompanhar (leitura, não recomendação de ação)**

| Tema | Consultas (impressões, posição) | Página que aparece | Observação |
|---|---|---|---|
| Ferramentas para desenvolvimento de software | 3 variações: 18 (82,7), 14 (83,0), 9 (93,1) | `/ferramentas/desenvolvimento/`: 46 impressões, posição 78,7 | É o maior sinal de demanda fora da marca. O título da página é "Ferramentas para desenvolvimento: stack essencial por etapa" e não contém "software". A página `/comparativos/ferramentas-ia-para-desenvolvimento-de-software/` tem o termo no título; não sei qual das duas o Google escolhe para cada consulta |
| Arquitetura de software | 4 consultas: padrões (11; 89,9), exemplos (2; 81,5), diagrama (2; 65,0), orientada a dados (2; 91,0) | `/desenvolvimento/arquitetura/`: 20 impressões, posição 74,4 | Mesma faixa de posição 50+ |
| Agentes de IA | 8 consultas de "tipo(s) de agente(s)" e "agente de IA": 12 impressões no total, posições de 68 a 100 | `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/` (7; 81,4) e `/ia/agentes/` (21; 30,7) | Várias variações da mesma intenção |
| Avaliação de agentes | "tutorial de avaliação de agente": 12 (11,4) | **Não sei qual página.** `/artigos/como-avaliar-agentes-de-ia/` não aparece no relatório | É a consulta de melhor posição fora da marca |
| CMS headless | "arquitetura headless": 3 (4,3) | `/artigos/arquitetura-cms-headless-para-site-editorial/`: 8 impressões, posição 10,6 | Melhor página de conteúdo em termo exato |

## 2. Triagem pelo método

Apliquei as faixas de posição da skill de linkagem interna às 68 páginas com impressão:

| Faixa de posição | Páginas | Decisão do método |
|---|---:|---|
| 1 a 3 | 2 | Não linkar |
| 4 a 10 | 21 | Reforço externo |
| **10,5 a 20** | **12** | **Receptora, se passar nos critérios** |
| 21 a 50 | 23 | Melhorar conteúdo antes |
| Mais de 50 | 10 | Revisar intenção e conteúdo |

**Nenhuma das 12 candidatas passa nos critérios.** O mínimo padrão é 100 impressões em 28 dias (ajustável ao porte do site); a maior tem 8 em 18 dias. A posição de uma página com 2 impressões é a média de duas aparições, então varia sem relação com qualquer mudança.

| Candidata (faixa 10,5–20) | Impressões | Posição |
|---|---:|---:|
| `/artigos/arquitetura-cms-headless-para-site-editorial/` | 8 | 10,62 |
| `/ferramentas/modelos/meta-llama/` | 4 | 13,25 |
| `/ferramentas/modelos/mistral/` | 3 | 11,0 |
| `/ferramentas/modelos/deepseek/` | 3 | 12,67 |
| `/comparativos/obsidian-vs-notion/` | 3 | 13,67 |
| `/artigos/como-avaliar-sistema-rag/` | 2 | 12,5 |
| `/ferramentas/modelos/qwen/` | 2 | 12,5 |
| `/tutoriais/n8n-primeiro-workflow/` | 2 | 15,5 |
| `/ferramentas/modelos/xai-grok/` | 2 | 16,5 |
| `/artigos/como-avaliar-prompts-em-producao/` | 2 | 17,5 |
| `/artigos/validacao-de-dados-em-apis/` | 2 | 17,5 |
| `/comparativos/modelos-ia-local-para-programacao/` | 2 | 18,5 |

## 3. Por que não montei o plano de links nem o grupo de controle

1. **Volume.** Nenhuma página chega ao mínimo de impressões do método, e com 2 a 8 impressões não existe "posição estável".
2. **Falta o cruzamento página × consulta.** A skill pede a consulta primária de cada receptora (a de mais impressões entre as posições 8 e 20). A exportação traz páginas e consultas em tabelas separadas, então não sei qual página responde por qual consulta.
3. **Falta série por página.** O gráfico é do site inteiro; não dá para ver se a posição de uma página oscila entre semanas.
4. **O controle não tem par.** O teste exige uma página parecida (mesma faixa, mesmo tema, volume semelhante) que não recebe link. Com 2 a 8 impressões por página, qualquer diferença entre as duas é ruído.
5. **O período é anterior às correções.** As 24 páginas da prioridade 1 foram alteradas em 14/10, depois do fim da janela (11/10). Por isso esta exportação serve como **linha de base**: ela mostra o site antes dessas mudanças. Sem controle, ela só permite comparar o site como um todo.

## 4. O que fazer, com datas

| Quando | O quê | Quem |
|---|---|---|
| Agora | Prioridade 2 da auditoria (pontes entre pilares, tutoriais → ferramenta, bloco de comparativos no pilar Ferramentas, notícias com 1 entrada). São regras do projeto, não dependem de dado de busca. | Eu aplico, se você confirmar |
| Até 28/10 | Exportar no Search Console: (a) **Indexação > Páginas** (indexadas, descobertas e não indexadas); (b) para as 5 páginas com mais impressões (`/ferramentas/desenvolvimento/`, `/noticias/gpt-6-1-sol-...`, `/ia/agentes/`, `/desenvolvimento/arquitetura/`, home), o relatório **Consultas** com o filtro de página; (c) confirmar que o sitemap `sitemap-index.xml` está enviado e sem erro | Você |
| **14/11/2026** | Nova exportação com **15/10 a 11/11** (28 dias, já sem o atraso de 3 dias do Search Console). Aí roda a triagem de novo | Você exporta, eu analiso |

**Critério que proponho para começar o teste em 14/11** (meu ajuste, a validar): ao menos 5 páginas na faixa 10,5–20 com 30 ou mais impressões em 28 dias, e para cada uma uma página parecida que não receba links. Abaixo disso, o ganho esperado é menor do que a oscilação normal, e o teste não responde nada.

**Calendário do teste, se o critério for atendido em 14/11:** dia 0 = publicação dos links; leituras nos dias 15 e 30; sem mudança estrutural nas páginas do teste e do controle durante os 30 dias e sem reverter nada se a posição cair entre os dias 10 e 14.

## 5. O que ainda não está decidido

1. **Aplicar a prioridade 2 já, ou esperar?** Recomendo aplicar já: o teste só pode começar depois de 14/11 de qualquer jeito, e as correções valem pela arquitetura, não pelo ranking. Se você preferir, não toco nas páginas candidatas (as 12 da faixa 10,5–20) até a leitura de 14/11.
2. **Usar o Ahrefs para estimar a página de cada consulta?** O Ahrefs conectado aqui pode mapear consulta → URL, como estimativa. Gasta unidades do seu plano e o site é novo, então o dado deve vir incompleto. Não consultei.
3. **Título do hub `/ferramentas/desenvolvimento/`.** Ele não contém "software", e as 3 consultas de maior volume fora da marca têm. É uma decisão de conteúdo, não de links, e a posição é 78: vale checar a página de cada consulta (item 4 do prazo acima) antes de mexer.

## 6. Riscos

| Risco | O que mitiga |
|---|---|
| Tirar conclusão de 190 impressões | Tratar tudo aqui como leitura inicial; decisão só com a exportação de 14/11 |
| Mudar muitas páginas ao mesmo tempo e não saber o que causou cada variação | Registrar a data de cada lote (já registrada no relatório de linkagem e nos commits) |
| Confundir exportação por página com por site | Comparar sempre por dia e por mesma dimensão |
| Número do método tratado como lei | Os limites da skill são heurísticas e não prometem posição, prazo ou tráfego |

## 7. Fontes e limites

**O que li:** os 7 arquivos da exportação, a auditoria de linkagem do mesmo dia (`seo/auditoria-linkagem-interna-2026-10-14.md`) e o inventário de páginas do build de 14/10/2026.

**O que não li:** Indexação de páginas, relatório página × consulta, dados do Ahrefs ou DataForSEO, e o site em produção. O Search Console também omite consultas raras, então 126 das 190 impressões do site aparecem com consulta e 64 não.

**O que pode ter mudado:** a exportação termina em 11/10; o Search Console atrasa cerca de 3 dias. Páginas publicadas ou editadas depois disso não aparecem.

## Apêndice — 33 páginas sem impressão no período

- **hub** (8): `/automacao/agentes-operacionais/`, `/desenvolvimento/backend/`, `/desenvolvimento/devops/`, `/desenvolvimento/frontend/`, `/ferramentas/automacao/`, `/ferramentas/hardware/`, `/ia/ia-local/`, `/ia/rag/`
- **artigo** (6): `/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/`, `/artigos/como-avaliamos-ferramentas-de-ia/`, `/artigos/como-avaliar-agentes-de-ia/`, `/artigos/como-escolher-entre-webhook-polling-e-fila/`, `/artigos/como-escolher-ferramenta-de-gestao-de-conhecimento/`, `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/`
- **noticia** (6): `/noticias/claude-code-mods-lancamento-o-que-muda/`, `/noticias/deepseek-harness-v0-2-app-desktop-o-que-muda/`, `/noticias/deno-cloudflare-deno-deploy-o-que-muda/`, `/noticias/microsoft-decision-1-lancamento-preco-o-que-muda/`, `/noticias/muse-wonder-meta-lancamento-preco-api/`, `/noticias/stack-overflow-developer-survey-2026-resultados/`
- **ferramenta** (5): `/ferramentas/cursor/`, `/ferramentas/modelos/anthropic-claude/`, `/ferramentas/modelos/openai-gpt/`, `/ferramentas/n8n/`, `/ferramentas/v0-vercel/`
- **sistema** (4): `/artigos/`, `/comparativos/`, `/politica-editorial/`, `/tutoriais/`
- **tutorial** (2): `/tutoriais/automacao-n8n-com-ia/`, `/tutoriais/rag-com-fontes-verificaveis/`
- **pilar** (1): `/automacao/`
- **autor** (1): `/autores/gabriel-barboza/`
