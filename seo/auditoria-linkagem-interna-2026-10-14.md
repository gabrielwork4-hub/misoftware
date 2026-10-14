# Auditoria de linkagem interna e mapa dos pilares — misoftware

**Data:** 14/10/2026 · **Escopo:** as 102 páginas do site, lidas no HTML gerado pelo build desta data (branch `claude/loving-bell-mqpo3k`) e comparadas com `ARQUITETURA_MISOFTWARE.md` e `seo/arquitetura-editorial-clusters.md`. Planilha com uma linha por página: [`linkagem-paginas-2026-10-14.csv`](linkagem-paginas-2026-10-14.csv).

**Como ler os termos.** *Pilar* é a página-mãe de um assunto (`/ia/`, `/automacao/`, `/desenvolvimento/`, `/ferramentas/`). *Hub* é a página de curadoria de um tema dentro do pilar. *Página de apoio* é o artigo, tutorial, comparativo ou ferramenta que pertence a um hub. *Cluster* é o conjunto hub + páginas de apoio. *Link de texto* é o link que alguém escreveu dentro do conteúdo; o oposto são os links automáticos do layout (menu, rodapé, trilha de navegação e cartões de listagem).

## Resumo

**A parte técnica está limpa; o que falta é linkagem escrita no texto.** Nenhum link quebrado, nenhum link para página removida, sitemap e canonical corretos. Mas dos 2.852 links internos do site, só 467 (16%) foram escritos dentro dos conteúdos. Nesses textos, o pilar aponta para todos os hubs, mas o caminho de volta quase não existe: **só 2 de 55 páginas de apoio linkam o pilar no texto**, e **só 12 de 20 hubs**.

| Verificação | Resultado |
|---|---|
| Links quebrados | ✓ 0 de 2.852 |
| Links para URL removida (410) ou redirecionada | ✓ 0 |
| Sitemap, canonical, título único, H1 | ✓ nas 101 páginas indexáveis; nenhuma com `noindex` |
| Profundidade | ✓ tudo a até 3 cliques da home (só `/ferramentas/n8n/` está no 3º) |
| Pilar → hubs, no texto | ✓ 20 de 20 |
| Hub → suas páginas de apoio, no texto | **3 falhas** (webhooks, Cursor, v0) |
| Página de apoio → seu hub, no texto | **✗ 40 de 54** (14 sem volta) |
| Hub → seu pilar, no texto | **✗ 12 de 20** |
| Página de apoio → seu pilar, no texto | **✗ 2 de 55** |
| Páginas sem nenhum link de texto de saída | **5** |
| Pilar Automação recebe link de texto de alguma página | **✗ 0** |
| Tutorial → página da ferramenta usada | **✗ 0 de 6** |
| Regra "artigo → 2 a 4 do mesmo cluster" | 17 de 25 cumprem; 8 têm 0 ou 1 |

**Recomendo** corrigir nesta ordem: (1) as 5 páginas sem links de saída; (2) o caminho de volta das 14 páginas de apoio ao hub; (3) o caminho dos hubs ao pilar; (4) as pontes entre pilares. São ajustes pontuais em textos que já existem; a lista página a página está na seção 6.

## 1. Os pilares, clusterizados

Os 4 pilares reúnem 21 clusters (20 com hub) e 55 páginas de apoio publicadas. Todas as pautas do registro de slugs (`seo/briefs/slug-registry.md`) estão no ar. A tabela mostra, por cluster, se o texto liga as duas pontas da hierarquia. "✓" é completo; "**x/y**" é quantas páginas cumprem.

| Pilar | Cluster | Hub | Apoio | Hub → apoio | Apoio → hub | Hub → pilar | Apoio → pilar |
|---|---|---|---:|:---:|:---:|:---:|:---:|
| IA | Agentes | `/ia/agentes/` | 5 | ✓ | **3/5** | **não** | **0/5** |
| IA | IA local | `/ia/ia-local/` | 3 | ✓ | **2/3** | **não** | **0/3** |
| IA | Modelos de linguagem | `/ia/modelos-de-linguagem/` | 12 | ✓ | ✓ | ✓ | **0/12** |
| IA | Prompt | `/ia/engenharia-de-prompt/` | 3 | ✓ | **2/3** | **não** | **0/3** |
| IA | RAG | `/ia/rag/` | 3 | ✓ | **2/3** | ✓ | **0/3** |
| Automação | Agentes operacionais | `/automacao/agentes-operacionais/` | 1 | ✓ | ✓ | **não** | **0/1** |
| Automação | Integrações | `/automacao/integracoes/` | 2 | **1/2** | **1/2** | **não** | **0/2** |
| Automação | Workflows | `/automacao/workflows/` | 3 | ✓ | ✓ | **não** | **0/3** |
| Automação | n8n | `/automacao/n8n/` | 3 | ✓ | **1/3** | **não** | **0/3** |
| Desenvolvimento | Arquitetura | `/desenvolvimento/arquitetura/` | 2 | ✓ | **1/2** | **não** | **0/2** |
| Desenvolvimento | Back-end | `/desenvolvimento/backend/` | 2 | ✓ | ✓ | ✓ | **0/2** |
| Desenvolvimento | DevOps | `/desenvolvimento/devops/` | 2 | ✓ | ✓ | ✓ | **0/2** |
| Desenvolvimento | Front-end | `/desenvolvimento/frontend/` | 2 | ✓ | **0/2** | ✓ | **0/2** |
| Desenvolvimento | Qualidade | `/desenvolvimento/qualidade/` | 2 | ✓ | ✓ | ✓ | **0/2** |
| Ferramentas | Ferramentas de IA | `/ferramentas/ia-generativa/` | 3 | **2/3** | **1/3** | ✓ | **0/3** |
| Ferramentas | Ferramentas de automação | `/ferramentas/automacao/` | 2 | ✓ | ✓ | ✓ | **0/2** |
| Ferramentas | Ferramentas de dev | `/ferramentas/desenvolvimento/` | 2 | **1/2** | **1/2** | ✓ | **0/2** |
| Ferramentas | Hardware | `/ferramentas/hardware/` | 0 | — | — | ✓ | — |
| Ferramentas | Pesquisa | `/ferramentas/pesquisa/` | 0 | — | — | ✓ | — |
| Ferramentas | Produtividade | `/ferramentas/produtividade/` | 2 | ✓ | ✓ | ✓ | **1/2** |
| Ferramentas | Reviews | *sem hub* | 1 | — | — | — | ✓ |

**Fatos que a tabela revela:**

- **Front-end é o cluster mais frágil.** As duas páginas de apoio (tutorial de Astro e artigo de renderização) não linkam o hub, não linkam uma à outra e não têm nenhum link de texto de saída.
- **Hardware e Pesquisa têm hub sem nenhuma página de apoio publicada.** Reviews tem uma página (`/artigos/como-avaliamos-ferramentas-de-ia/`) e nenhum hub. São pautas P1 ainda por fazer, não erro de linkagem.
- **Os 12 modelos de linguagem pertencem a dois pilares ao mesmo tempo.** O hub está em `/ia/modelos-de-linguagem/`, mas as 12 páginas de modelo ficam em `/ferramentas/modelos/` e a trilha de navegação delas leva a `/ferramentas/`. Elas linkam o hub (12 de 12) e o hub linka todas, mas nenhuma linka `/ia/` no texto nem na trilha de navegação (só o menu global leva a `/ia/`). Isso é uma decisão pendente (seção 4).
- **Os pilares recebem pouco link de texto:** `/ferramentas/` recebe de 8 páginas, `/desenvolvimento/` de 5, `/ia/` de 3 e `/automacao/` de nenhuma. O pilar de Automação só é alcançado pelo menu, pelo rodapé e pela trilha de navegação.

## 2. Onde a linkagem falha

### 2.1 O caminho de volta ao hub e ao pilar

A regra do projeto (§5 da arquitetura) pede "links internos bidirecionais". Na prática, a ida existe e a volta não. Fatos:

- **14 páginas de apoio não linkam o hub do próprio cluster:** webhooks (hub Integrações); os dois tutoriais de n8n (n8n com IA e n8n com webhook) (hub n8n); ADR (hub Arquitetura); tutorial de Astro e artigo de renderização (hub Front-end); comparativo de ferramentas de IA para desenvolvimento e página do Cursor (hub IA generativa); página do v0 (hub Ferramentas de dev); tutorial de agentes e artigo de tipos de agentes (hub Agentes); página do Ollama (hub IA local); avaliar prompts (hub Prompt); tutorial de RAG (hub RAG).
- **8 hubs não linkam o próprio pilar no texto:** Agentes operacionais, Integrações, Workflows e n8n (pilar `/automacao/`); Arquitetura (pilar `/desenvolvimento/`); Agentes, IA local e Prompt (pilar `/ia/`).
- **O pilar é linkado pela trilha de navegação** (automática) de todo artigo, tutorial e comparativo, então a descoberta existe. O que falta é o link escrito, no contexto da frase. **Leitura:** é o link de texto que a própria arquitetura descreve ("artigo → página-pilar do silo e 2–4 conteúdos do mesmo cluster"); a trilha cumpre o papel de navegação, não o de recomendação editorial.

### 2.2 Páginas sem saída, e a mais citada do site é uma delas

**5 páginas não têm nenhum link de texto de saída:** tutorial de RAG, tutorial de Astro, avaliar prompts em produção, ADR e renderização no Astro. Confirmei contra o Markdown de origem: não são falha de leitura, os arquivos não têm link interno.

A que mais pesa é **`/artigos/como-avaliar-prompts-em-producao/`: recebe link de 24 páginas e não manda link para nenhuma**. O leitor que chega por esses links só tem menu, rodapé e trilha de navegação para continuar.

### 2.3 Hubs que deixam de linkar a própria página de apoio

- `/automacao/integracoes/` não linka `/artigos/webhooks-o-que-sao-e-como-projetar/`, que o registro marca como P0 do cluster.
- `/ferramentas/ia-generativa/` não linka `/ferramentas/cursor/`.
- `/ferramentas/desenvolvimento/` não linka `/ferramentas/v0-vercel/`.

### 2.4 Pilar Ferramentas deixa 8 páginas de fora

`/ferramentas/` não linka (em nenhuma zona) 5 comparativos (Cursor vs Windsurf, Obsidian vs Notion, editores de código, ferramentas de IA para desenvolvimento, n8n vs Make vs Zapier), a review do n8n e os guias de gestão de conhecimento e de metodologia de review. Para chegar a eles a partir de `/ferramentas/`, o leitor precisa passar por outra página. A review do n8n é a única página no 3º clique.

### 2.5 Regras do documento de 18/09 que o texto ainda não cumpre

| Regra (`arquitetura-editorial-clusters.md`) | Situação |
|---|---|
| Tutorial aponta para a ferramenta, um explicador e a próxima etapa | **0 de 6** linkam uma página de ferramenta (nem os de n8n, nem o de agentes, nem o de RAG). 2 de 6 linkam um artigo explicador. |
| Comparativo aponta para as entidades comparadas e para o guia de decisão | Parcial. Faltam páginas de entidade para Obsidian, Notion e Windsurf; o comparativo de editores não linka `/ferramentas/cursor/`. |
| Ferramenta aponta para análise, comparativo e tutorial em que é usada | Parcial. `/ferramentas/langchain/` recebe link de 1 página; `/ferramentas/n8n/` de 3. |
| Artigo aponta para 2–4 conteúdos do mesmo cluster | 17 de 25 cumprem. 4 artigos têm 0 links ao próprio cluster; 4 têm 1. |

### 2.6 Pontes entre pilares

O próprio documento diz que cruzar pilar só vale "quando a tarefa os conecta" (agentes de IA ↔ n8n ↔ observabilidade). Nos links de texto, testei 15 relações derivadas das regras do documento de 18/09: **5 existem, 10 faltam**.

| Existe | Falta |
|---|---|
| `/ia/agentes/` ↔ `/automacao/agentes-operacionais/` (os dois sentidos) | `/ia/agentes/` ↔ `/automacao/n8n/` (nenhum sentido) |
| `observabilidade` → `monitoramento-de-workflows` | `monitoramento-de-workflows` → `observabilidade` (volta) |
| `tutoriais/automacao-n8n-com-ia` → hub de prompt | `tutoriais/automacao-n8n-com-ia` → `/ia/agentes/` |
| `/automacao/integracoes/` → `idempotencia` | `idempotencia` → `/automacao/integracoes/` (volta) |
| | `/automacao/workflows/` → `/desenvolvimento/devops/` |
| | `/desenvolvimento/backend/` ↔ `/automacao/integracoes/` (nenhum sentido) |
| | `webhook-polling-fila` → `/desenvolvimento/backend/` |
| | `automacao-assistida-vs-agentes` ↔ `/ia/agentes/` (nenhum sentido) |

No volume, a matriz de links de texto entre pilares mostra Desenvolvimento quase isolado: 7 links de saída para outros pilares, contra 56 de Ferramentas para IA.

| Origem \ Destino | IA | Automação | Desenvolvimento | Ferramentas |
|---|---:|---:|---:|---:|
| IA | 81 | 3 | 4 | 32 |
| Automação | 3 | 41 | 5 | 1 |
| Desenvolvimento | 1 | 6 | 53 | 0 |
| Ferramentas | 56 | 9 | 17 | 75 |

Boa parte dos 56 de Ferramentas para IA vem das páginas de modelo, que repetem o mesmo par de links: o hub de modelos e "avaliar prompts" aparecem nas 12; IA local aparece em 7.

### 2.7 Notícias

As 11 notícias recebem ao menos 1 link de texto, mas 3 recebem só 1: **Claude Sonnet 5.5** (só da página do Claude), **Deno na Cloudflare** (só do hub de back-end) e **Stack Overflow Survey 2026** (só de um comparativo). **Para conferir:** o hub de modelos descreve a linha da Anthropic como "Opus 5.5, Sonnet 5 e Haiku 4.5", e a notícia fala em Sonnet 5.5. Não sei se o hub está defasado ou se são linhas diferentes; precisa de leitura sua.

### 2.8 Âncoras (texto do link)

**Não é problema.** Das 467 âncoras, só 6 são genéricas ("notícia", "detalhes"). A maioria tem 3 a 5 palavras e descreve o destino.

## 3. O que o grafo de links diz sobre os clusters

**Leitura, não fato:** agrupei as 90 páginas de conteúdo só pelos links de texto, sem olhar a classificação declarada (algoritmo de Louvain). Saíram 7 grupos, e todo o site forma um bloco único (nenhuma página isolada). A "modularidade" é 0,58; como regra de bolso, acima de 0,3 já indica grupos reais.

| Grupo | Páginas | O que reúne | Leitura |
|---|---:|---|---|
| 1 | 19 | 10 das 12 páginas de modelo + hub de modelos + cluster Prompt + 4 notícias de modelos | Modelos e prompt andam juntos porque as 12 páginas de modelo citam "avaliar prompts" (Claude e DeepSeek ficam no grupo 4) |
| 2 | 18 | Automação inteira (pilar, 4 hubs e páginas de apoio), ferramentas de automação + artigo de idempotência | Idempotência é do cluster Back-end, mas se comporta como Automação (6 links para ela) |
| 3 | 16 | Desenvolvimento (pilar, 5 hubs e 8 das 10 páginas de apoio) + v0 + notícia do Deno | O grupo mais coeso: 94% das páginas são do mesmo pilar |
| 4 | 13 | Editores de IA, Cursor, Claude, DeepSeek, revisão de código com IA e 5 notícias de ferramentas | Tema "IA para programar" cruza silos; a revisão de código (declarada em Qualidade) vive aqui, não com os outros de Qualidade |
| 5 | 10 | RAG + IA local + Hardware + o pilar `/ia/` | RAG e IA local viram um só núcleo |
| 6 | 7 | Produtividade, Pesquisa, Reviews, IA generativa e o pilar `/ferramentas/` | Núcleo de curadoria de ferramentas |
| 7 | 7 | Agentes (6, com LangChain) + notícia da NVIDIA | Agentes forma um grupo à parte; a ponte para Automação que confirmei é a de Agentes operacionais |

## 4. O que ainda não está decidido

Cada item depende de uma escolha sua; não implementei nenhum.

1. **De qual pilar são as páginas de modelo?** Opção A: manter as URLs em `/ferramentas/modelos/` e passar a linkar `/ia/` no texto e na trilha. Opção B: mover para `/ia/modelos/`, o que exige redirecionamento 301 de 12 URLs. **Recomendo A:** custa menos e não mexe em URL já publicada.
2. **Quais hubs ficam no rodapé?** Hoje só `/ia/engenharia-de-prompt/` e `/ia/modelos-de-linguagem/` aparecem em todas as páginas; os outros 18 hubs não. Não encontrei critério escrito para a escolha.
3. **O link "avaliar prompts" está nas 12 páginas de modelo, e a página de destino não manda link para ninguém.** Isso é intencional? Se for padrão editorial, funciona; se foi copiado, vale variar o destino por contexto.
4. **O pilar `/ferramentas/` deve listar os comparativos?** Hoje só lista hubs e páginas de ferramenta.
5. **Hub de Hardware e de Pesquisa sem páginas de apoio, e cluster Reviews sem hub:** publicar as pautas P1 ou esconder os hubs vazios da navegação até lá?

## 5. Riscos

| Risco | O que mitiga |
|---|---|
| Adicionar link por rotina ("hub e pilar em toda página") vira repetição sem contexto, como o caso de "avaliar prompts" | Inserir cada link na frase onde o assunto aparece; no máximo 1 link de pilar e 1 de hub por página |
| Esta auditoria é estrutural: **não usa tráfego, impressões nem posição**. Não dá para dizer quais páginas rendem mais com link novo | Para priorizar por resultado, precisamos do CSV do Google Search Console (Desempenho > Páginas, 28 dias) ou do acesso ao Ahrefs do site. Sem isso, não há plano de receptoras e doadoras |
| Tratar as regras do documento de 18/09 (por exemplo, "2 a 4 links do mesmo cluster") como se fossem medida de efeito no ranking | São regras editoriais do projeto; nenhuma foi validada com dados. Se houver ajuste em lote, usar grupo de controle e 30 dias de leitura antes de repetir |
| O documento de 18/09 e o site divergiram em alguns pontos (ver seção 7) | Atualizar o registro de slugs antes de usar como checklist |

## 6. O que fazer

Prioridade 1 (caminho de volta e páginas sem saída), do mais para o menos decisivo. As sugestões de destino vêm da coluna "Relações obrigatórias" do documento de 18/09.

**A. As 5 páginas sem nenhum link de texto**

| Página | Adicionar links para |
|---|---|
| `/tutoriais/rag-com-fontes-verificaveis/` | `/ia/rag/`, `/artigos/como-avaliar-sistema-rag/`, `/artigos/estrategias-de-chunking/`, `/ferramentas/langchain/` |
| `/tutoriais/astro-para-site-editorial/` | `/desenvolvimento/frontend/`, `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/`, `/artigos/arquitetura-cms-headless-para-site-editorial/`, `/desenvolvimento/devops/` |
| `/artigos/como-avaliar-prompts-em-producao/` | `/ia/engenharia-de-prompt/`, `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/`, `/artigos/como-avaliar-agentes-de-ia/` |
| `/artigos/como-documentar-decisoes-de-arquitetura-adr/` | `/desenvolvimento/arquitetura/`, `/desenvolvimento/qualidade/`, `/artigos/arquitetura-cms-headless-para-site-editorial/` |
| `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/` | `/desenvolvimento/frontend/`, `/tutoriais/astro-para-site-editorial/` |

**B. As outras 9 páginas de apoio que não voltam ao hub**

| Página | Linkar o hub |
|---|---|
| `/artigos/webhooks-o-que-sao-e-como-projetar/` | `/automacao/integracoes/` |
| `/tutoriais/automacao-n8n-com-ia/`, `/tutoriais/automacao-n8n-webhook-api/` | `/automacao/n8n/` |
| `/comparativos/ferramentas-ia-para-desenvolvimento-de-software/`, `/ferramentas/cursor/` | `/ferramentas/ia-generativa/` |
| `/ferramentas/v0-vercel/` | `/ferramentas/desenvolvimento/` |
| `/tutoriais/como-criar-agente-ia-com-ferramentas/`, `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/` | `/ia/agentes/` |
| `/ferramentas/ollama/` | `/ia/ia-local/` |

**C. Hubs que faltam linkar a própria página de apoio (3):** Integrações → webhooks; IA generativa → Cursor; Ferramentas de dev → v0.

**D. Hubs que faltam linkar o pilar no texto (8):** os quatro hubs de Automação → `/automacao/` (isso também dá ao pilar de Automação os primeiros links de texto); Arquitetura → `/desenvolvimento/`; Agentes, IA local e Prompt → `/ia/`.

Prioridade 2

- **Tutoriais → página da ferramenta:** os 2 de n8n → `/ferramentas/n8n/`; o de agentes e o de RAG → `/ferramentas/langchain/`.
- **Pilar `/ferramentas/`:** acrescentar um bloco "Comparativos e metodologia" com os 8 itens da seção 2.4.
- **Pontes entre pilares:** os 10 itens da tabela 2.6, no máximo 1 link por página.
- **Artigos com 0 ou 1 link ao próprio cluster (8):** ligar a um irmão do mesmo hub. Lista na planilha (coluna `alertas`).
- **Notícias com 1 entrada:** Sonnet 5.5, Deno e Stack Overflow Survey. Para o Deno, o hub de DevOps e o tutorial de Astro são destinos naturais.

Prioridade 3 (dependem da seção 4): páginas de modelo ↔ `/ia/`; critério de rodapé; hubs vazios.

## 7. Fontes e limites

**O que li:** o HTML de todas as 102 páginas do build de 14/10/2026 (`npm run build`), classificando cada link pela zona onde está (menu, rodapé, trilha, texto, cartões de listagem, caixa do autor, perguntas frequentes); o conteúdo em `src/content/`; `ARQUITETURA_MISOFTWARE.md`, `seo/arquitetura-editorial-clusters.md`, `seo/briefs/slug-registry.md` e `functions/redirects.generated.json`. Conferi o leitor de HTML contra o Markdown de origem dos 74 arquivos da coleção `fila`: zero divergência de links.

**O que não li:**

- Dados de busca (Search Console, Ahrefs, DataForSEO). Nada aqui diz o quanto cada link vale.
- O site publicado em produção; analisei o build local da branch. Se algo na produção estiver diferente, esta auditoria não vê.
- O peso de cada zona de link para o Google. Separei texto de menu e de rodapé pela função editorial, não por medida de efeito.

**O que pode ter mudado:** qualquer conteúdo novo publicado depois do build de 14/10/2026 muda os números. O script de análise não está no repositório; posso incluí-lo em `scripts/` se você quiser repetir a auditoria a cada lote de atualização.

**Divergências entre os documentos e o site (para atualizar):**

- O registro de slugs não lista `/ia/modelos-de-linguagem/` nem as 12 páginas de `/ferramentas/modelos/`. Classifiquei essas 13 páginas no cluster "Modelos de linguagem" por decisão minha; o mesmo vale para Cursor (Ferramentas de IA), Ollama (IA local), LangChain (Agentes) e v0 (Ferramentas de dev), que o documento de 18/09 cita só como entidades, sem cluster.
- `ARQUITETURA_MISOFTWARE.md` §5 desenha `/ia/modelos-linguagem/`; o site usa `/ia/modelos-de-linguagem/`. §5 também desenha o silo `/arquivo/`, que não existe no site.
- O documento de 18/09 lista como "existentes, manter" o artigo `ia-generativa-no-fluxo-de-trabalho`, o tutorial `rodar-deepseek-llama-localmente-ollama` e o artigo `raciocinio-estruturado-chain-of-thought`. **Nenhum está no site nem no mapa de redirecionamentos** (`functions/redirects.generated.json`). Não sei se saíram de propósito; preciso que você confirme. Se essas URLs estiveram no ar antes, hoje respondem 404 sem redirecionamento.
- A estrutura de grupos da seção 3 é uma leitura estatística do grafo, não uma regra. Serve para questionar a classificação declarada, não para substituí-la.
