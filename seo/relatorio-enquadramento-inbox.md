# O que falta para enquadrar os 60 conteúdos da fila

Data da validação: 2026-09-19. Escopo: os 60 arquivos de `inbox/` conferidos contra o que o site realmente consegue publicar hoje (`src/content.config.ts`, `src/pages/`) e contra a URL canônica de cada pauta em `seo/briefs/slug-registry.md`.

## Resumo

**Nenhum dos 60 pode ser publicado hoje, e o motivo principal não é editorial — é que o site não tem onde colocar 37 deles.**

| O que verifiquei | Situação |
|---|---|
| Arquivos com lugar pronto no site | **23 de 60** |
| Arquivos que ainda não têm onde ser publicados | **37 de 60** |
| Arquivos que derrubam o build como estão | **60 de 60** |
| Arquivos com aviso interno de revisão no texto público | **60 de 60** |
| Links internos entre conteúdos que funcionam hoje | **3 de 52** |
| Média de tamanho do texto | **181 palavras** |

A validação anterior (`relatorio-validacao-60-conteudos.md`, de 2026-09-18) tratava o bloqueio como editorial: tirar avisos de revisão, conferir preço e fazer revisão humana. Isso está certo, mas incompleto — e num ponto estava errado. Detalho nas seções 1 e 4.

---

## 1. O site não tem onde colocar 37 dos 60

Este é o bloqueio mais caro e o que nenhum relatório anterior registrou. O registro de slugs define seis tipos de URL. O site hoje serve três.

| Tipo de conteúdo | Arquivos | Existe página para isso? |
|---|---|---|
| Artigo (`/artigos/...`) | 23 | **Sim** |
| Review de ferramenta (`/ferramentas/n8n/`) | 1 | Página existe, mas o arquivo está no formato errado |
| Hub de cluster (`/ia/agentes/`, `/desenvolvimento/backend/`…) | 13 | Não |
| Hub de ferramentas (`/ferramentas/ia-generativa/`…) | 6 | Não |
| Comparativo (`/comparativos/...`) | 5 | Não |
| Tutorial (`/tutoriais/...`) | 5 | Não |
| Página-pilar (`/ia/`, `/automacao/`…) | 4 | Página existe, mas ignora o texto |
| Estudo de caso (`/estudos-de-caso/...`) | 1 | Não |
| Sem URL canônica definida | 2 | — |

Três observações que mudam o esforço:

**Tutoriais estão meio-caminho.** O tipo "tutorial" já está descrito em `src/content.config.ts`, mas a pasta que ele leria não existe e não há página que os exiba. O build já avisa isso em toda execução. Custo menor que os outros: falta só a página.

**Comparativos, estudos de caso e hubs não existem em lugar nenhum.** Não estão descritos, não têm pasta e não têm página. São 25 arquivos — o maior lote da fila. Enquadrar esses 25 é criar estrutura nova no site, não mexer em texto.

**O review do n8n parece pronto e não está.** A página de ferramenta já existe e serve Cursor, Ollama e outras. Mas essas fichas são cadastros de produto — nome do fabricante, preço, plataformas, nota, endereço do site. O arquivo `044` foi escrito como artigo de opinião, sem nenhum desses campos. Ou ele vira ficha de produto de verdade, ou é um artigo e deveria estar em `/artigos/`. Como está, não entra em nenhum dos dois.

**As quatro páginas-pilar são uma armadilha silenciosa.** `/ia/`, `/automacao/` e `/desenvolvimento/` já respondem hoje, mas montam a página a partir de uma lista fixa no código e de cards de artigos. O texto que os quatro arquivos da fila escreveram para essas páginas não aparece em lugar algum. Se alguém publicar sem perceber, a página parece pronta e o conteúdo foi jogado fora.

## 2. Os 60 arquivos derrubam o build como estão

Confirmei rodando o build com arquivos da fila dentro do site, um problema por vez. Não é previsão — é erro reproduzido.

| Problema | Arquivos | O que acontece |
|---|---|---|
| Falta a data de publicação | 60 | Build para com "Invalid date" |
| Fontes estão como lista de endereços soltos | 60 | Build para: o site espera nome + endereço por fonte |
| Autor escrito como `Redação` | 24 | Build não acha o autor; **a página inicial e o feed RSS quebram junto** |
| Falta o nível de dificuldade | 5 tutoriais | Build para quando a página de tutorial existir |

O caso do autor é o pior dos quatro porque o estrago passa do arquivo. O autor coletivo do site é cadastrado como `redacao`; 24 arquivos escreveram `Redação`, com acento e maiúscula. O site não trata isso como o mesmo autor. Além da página do conteúdo, o feed RSS para de gerar — ou seja, um arquivo errado tira do ar uma parte do site que já funcionava.

Três campos que a fila preencheu com cuidado — cluster, keyword primária e status — **são descartados em silêncio** quando o conteúdo entra no site. Não dão erro, simplesmente desaparecem. Se esse controle precisa sobreviver à publicação, ele tem que ser previsto no site; hoje só vive nos arquivos de planejamento.

## 3. Todo conteúdo tem aviso interno no texto que o leitor veria

Os 60 arquivos terminam com uma linha de recado para a equipe — "Revisão pendente: adicionar fontes primárias, exemplo testado…". Não é comentário escondido: é texto normal, sai publicado e ainda aparece na busca interna do site.

Todos os 60 também estão marcados como `needs-evidence`, o primeiro estágio do fluxo de sete etapas. Nenhum arquivo passou de estágio desde a geração. Isso é coerente com o que os arquivos são — rascunhos honestos — mas quer dizer que a fila não andou, só foi versionada.

Os 60 repetem o título dentro do corpo do texto. O site já escreve o título no topo da página a partir do cabeçalho do arquivo, então cada página nasceria com o título duas vezes. Não quebra nada, mas é errado para busca e para leitor de tela, e são 60 correções mecânicas.

## 4. Correção do relatório anterior: o problema de profundidade é maior do que estava escrito

O relatório de 2026-09-18 afirmou, na tabela de testes, que "nenhum arquivo está abaixo de 150 palavras" — e na seção seguinte listou 18 arquivos abaixo de 150 palavras. As duas frases se contradizem, e a da tabela é a que está errada.

Medindo de novo, sem contar blocos de código:

| Tamanho do texto | Arquivos |
|---|---|
| Abaixo de 150 palavras | 42 |
| Abaixo de 300 palavras | 52 |
| 300 a 600 palavras | 7 |
| Acima de 600 palavras | 1 |

A média é de 181 palavras. Para comparação, o artigo mais curto já publicado no site tem várias vezes isso.

Isto não é argumento de que texto longo ranqueia melhor. É a constatação de que 52 dos 60 arquivos são **esboços de estrutura**: têm título, subtítulos e as ligações certas entre si, mas ainda não têm o exemplo, o teste, a tabela de decisão ou a ressalva que o plano de validação exige em cada tipo de pauta. O trabalho editorial restante é escrever o conteúdo, não revisá-lo.

## 5. Os links entre conteúdos estão certos e inúteis ao mesmo tempo

Os 102 links internos apontam todos para URLs que existem no registro de slugs — nenhum link inventado, o que é um bom sinal sobre a geração. Mas só 3 dos 52 destinos distintos respondem hoje. Os outros 49 seriam erro 404 no dia da publicação.

Isso não é um defeito dos arquivos: é consequência direta da seção 1. Os links passam a funcionar conforme a estrutura for criada, e a ordem em que a fila for publicada decide quantos 404 ficam abertos no meio do caminho. Publicar por lote temático, como o plano já recomenda, é o que reduz essa janela.

## 6. Duas pautas estão fora do registro

Dois arquivos não casam com nenhuma URL canônica, e dois slugs do registro não têm arquivo. Parecem ser os mesmos pares, com nome divergente:

| Arquivo | Slug do registro sem arquivo |
|---|---|
| `040-ferramentas-ia-desenvolvimento-software` | `/comparativos/ferramentas-ia-para-desenvolvimento-de-software/` |
| `060-hub-rag` | `/tutoriais/rag-com-fontes-verificaveis/` |

O caso de RAG é mais do que nome: `059` e `060` tratam do mesmo assunto, e o registro prevê um hub e um tutorial separados. Precisa de decisão humana sobre qual arquivo é qual — não dá para inferir dos textos com segurança.

---

## O que ainda não está decidido

Não avancei nestes pontos porque a escolha muda o trabalho e é sua, não minha:

1. **Criar a estrutura nova ou reduzir a arquitetura?** Publicar os 60 como planejado exige criar comparativos, estudos de caso, hubs e tutoriais no site. A alternativa é absorver esses tipos dentro de `/artigos/` e aceitar URLs diferentes do registro — mais barato agora, com custo de redirects se voltar atrás depois.
2. **As páginas-pilar passam a ter texto próprio?** Hoje são vitrines automáticas. Se o texto dos quatro arquivos importa, a página precisa mudar; se não importa, os quatro arquivos devem ser descartados de forma explícita, não esquecidos.
3. **Cluster, keyword e status sobrevivem à publicação?** Se sim, é trabalho no site. Se ficam só no planejamento, a validação de slug duplicado e keyword repetida continua sendo conferência manual.
4. **Qual é a data de publicação de cada conteúdo?** Faltando nos 60. Não inventei data porque ela aparece na página, no feed e no schema — e data errada é pior que data ausente.
5. **Quem é o par `059`/`060`?** Conforme a seção 6.

## O que fazer agora

Em ordem, porque cada item destrava o seguinte:

1. **Decidir os itens 1 e 2 acima.** Nada de estrutura deve ser construído antes; é a decisão mais cara da fila.
2. **Corrigir os 24 autores de `Redação` para `redacao`.** Correção mecânica, evita que a publicação de um rascunho tire o feed RSS do ar. Faço isso em minutos se autorizar.
3. **Ajustar as fontes dos 60 para o formato que o site aceita** (nome + endereço por fonte). Também mecânico. Não valida se a fonte é boa — só faz o site aceitar.
4. **Tirar os 60 avisos de revisão do corpo e os 60 títulos duplicados.** Mecânico. Só depois disso os arquivos passam a ser candidatos a revisão de verdade.
5. **Publicar primeiro os 23 artigos**, os únicos com lugar pronto, em lote temático para reduzir 404.
6. **Tratar os 52 arquivos curtos como redação, não revisão**, e estimar o prazo por aí.

Os itens 2, 3 e 4 são os únicos que posso executar sem decisão sua. Somados, eles não aproximam a fila da publicação editorial — eles só param de sabotá-la.

## Limites deste documento

**O que não verifiquei:** nada de fato. Não confirmei preço, versão de ferramenta, limite de plano ou se as fontes citadas sustentam as afirmações. Não testei nenhum comando, snippet ou webhook dos tutoriais. Não avaliei qualidade de texto, voz editorial ou se a pauta atende a intenção de busca. Não conferi dado de busca no Ahrefs nem no Search Console.

**Como medi o que está aqui:** li os 60 arquivos, li o schema e as rotas do site, e reproduzi cada erro de build colocando arquivos da fila dentro do site. Os erros de build, a contagem de links e os números de tamanho são reprodutíveis. A relação entre arquivo e URL canônica foi deduzida pela keyword primária — é a única ponte que existe entre a fila e o registro, e é onde os dois casos da seção 6 apareceram.

**O que envelhece:** a validação vale para o estado do repositório em 2026-09-19. Qualquer mudança em `src/content.config.ts`, em `src/pages/` ou no registro de slugs invalida as contagens das seções 1 e 2.

---

## Anexo: situação arquivo por arquivo

`Destino` é a página que precisa existir para o arquivo ser publicado na URL do registro. `Autor` marca **quebra** quando o valor não corresponde a um autor cadastrado. `Palavras` exclui blocos de código. Todos os 60 também precisam de data de publicação, ajuste de fontes, remoção do aviso de revisão e remoção do título duplicado — não repeti essas quatro colunas.

| Arquivo | Slug canônica | Destino | Autor | Palavras |
|---|---|---|---|---|
| `001-o-que-sao-agentes-de-ia` | `/artigos/o-que-sao-agentes-de-ia/` | artigos | ok | 616 |
| `002-engenharia-de-prompt-o-que-e-e-como-aplicar` | `/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/` | artigos | ok | 599 |
| `003-webhooks-o-que-sao-e-como-projetar` | `/artigos/webhooks-o-que-sao-e-como-projetar/` | artigos | ok | 537 |
| `004-como-mapear-processo-antes-de-automatizar` | `/artigos/como-mapear-processo-antes-de-automatizar/` | artigos | ok | 508 |
| `005-inteligencia-artificial-aplicada` | `/ia/` | pilar /ia/ | ok | 420 |
| `006-hub-agentes-de-ia` | `/ia/agentes/` | hub /ia/agentes/ | ok | 345 |
| `007-hub-ia-local` | `/ia/ia-local/` | hub /ia/ia-local/ | ok | 376 |
| `008-hub-automacao-n8n` | `/automacao/n8n/` | hub /automacao/n8n/ | ok | 335 |
| `009-hub-engenharia-de-prompt` | `/ia/engenharia-de-prompt/` | hub /ia/engenharia-de-prompt/ | ok | 281 |
| `010-automacao-aplicada` | `/automacao/` | pilar /automacao/ | ok | 241 |
| `011-hub-integracoes-de-sistemas` | `/automacao/integracoes/` | hub /automacao/integracoes/ | ok | 213 |
| `012-hub-workflows-operacionais` | `/automacao/workflows/` | hub /automacao/workflows/ | ok | 195 |
| `013-n8n-primeiro-workflow` | `/tutoriais/n8n-primeiro-workflow/` | tutoriais | ok | 124 |
| `014-automacao-n8n-com-ia` | `/tutoriais/automacao-n8n-com-ia/` | tutoriais | ok | 112 |
| `015-automacao-n8n-webhook-api` | `/tutoriais/automacao-n8n-webhook-api/` | tutoriais | ok | 136 |
| `016-webhook-polling-ou-fila` | `/artigos/como-escolher-entre-webhook-polling-e-fila/` | artigos | ok | 136 |
| `017-automacao-pauta-editorial` | `/estudos-de-caso/automacao-de-pauta-editorial/` | estudos-de-caso | ok | 131 |
| `018-monitoramento-workflows` | `/artigos/monitoramento-de-workflows-e-alertas/` | artigos | ok | 126 |
| `019-agentes-operacionais` | `/automacao/agentes-operacionais/` | hub /automacao/agentes-operacionais/ | ok | 127 |
| `020-automacao-assistida-vs-agentes` | `/artigos/automacao-assistida-por-ia-vs-agentes-autonomos/` | artigos | ok | 103 |
| `021-desenvolvimento-de-software` | `/desenvolvimento/` | pilar /desenvolvimento/ | ok | 112 |
| `022-arquitetura-de-software` | `/desenvolvimento/arquitetura/` | hub /desenvolvimento/arquitetura/ | ok | 142 |
| `023-arquitetura-cms-headless` | `/artigos/arquitetura-cms-headless-para-site-editorial/` | artigos | ok | 107 |
| `024-adrs-decisoes-arquitetura` | `/artigos/como-documentar-decisoes-de-arquitetura-adr/` | artigos | ok | 109 |
| `025-frontend` | `/desenvolvimento/frontend/` | hub /desenvolvimento/frontend/ | ok | 134 |
| `026-astro-site-editorial` | `/tutoriais/astro-para-site-editorial/` | tutoriais | ok | 129 |
| `027-ssg-ssr-islands-astro` | `/artigos/renderizacao-estatica-ssr-e-ilhas-no-astro/` | artigos | ok | 107 |
| `028-backend` | `/desenvolvimento/backend/` | hub /desenvolvimento/backend/ | ok | 134 |
| `029-validacao-dados-apis` | `/artigos/validacao-de-dados-em-apis/` | artigos | ok | 127 |
| `030-idempotencia-apis-webhooks` | `/artigos/idempotencia-em-apis-e-webhooks/` | artigos | ok | 133 |
| `031-devops` | `/desenvolvimento/devops/` | hub /desenvolvimento/devops/ | ok | 108 |
| `032-pipelines-cicd-actions-docker` | `/artigos/pipelines-cicd-github-actions-docker/` | artigos | ok | 122 |
| `033-observabilidade-aplicacoes-web` | `/artigos/observabilidade-para-aplicacoes-web/` | artigos | ok | 120 |
| `034-qualidade-software` | `/desenvolvimento/qualidade/` | hub /desenvolvimento/qualidade/ | ok | 110 |
| `035-piramide-testes` | `/artigos/piramide-de-testes-pratica/` | artigos | ok | 128 |
| `036-revisao-codigo-ia` | `/artigos/revisao-de-codigo-com-ia-sem-perder-controle/` | artigos | ok | 119 |
| `037-ferramentas-trabalho-tecnico` | `/ferramentas/` | pilar /ferramentas/ | **quebra** | 174 |
| `038-ferramentas-ia-generativa` | `/ferramentas/ia-generativa/` | hub de ferramentas | **quebra** | 180 |
| `039-melhores-editores-codigo-ia` | `/comparativos/melhores-editores-codigo-ia/` | comparativos | **quebra** | 167 |
| `040-ferramentas-ia-desenvolvimento-software` | `—` | SEM SLUG | **quebra** | 159 |
| `041-ferramentas-desenvolvimento` | `/ferramentas/desenvolvimento/` | hub de ferramentas | **quebra** | 152 |
| `042-cursor-vs-windsurf` | `/comparativos/cursor-vs-windsurf/` | comparativos | **quebra** | 154 |
| `043-ferramentas-automacao` | `/ferramentas/automacao/` | hub de ferramentas | **quebra** | 128 |
| `044-review-n8n` | `/ferramentas/n8n/` | ferramentas (formato errado) | **quebra** | 145 |
| `045-n8n-vs-make-vs-zapier` | `/comparativos/n8n-vs-make-vs-zapier/` | comparativos | **quebra** | 144 |
| `046-ferramentas-produtividade` | `/ferramentas/produtividade/` | hub de ferramentas | **quebra** | 127 |
| `047-obsidian-vs-notion` | `/comparativos/obsidian-vs-notion/` | comparativos | **quebra** | 123 |
| `048-escolher-ferramenta-gestao-conhecimento` | `/artigos/como-escolher-ferramenta-de-gestao-de-conhecimento/` | artigos | **quebra** | 137 |
| `049-ferramentas-pesquisa-tecnica` | `/ferramentas/pesquisa/` | hub de ferramentas | **quebra** | 126 |
| `050-metodologia-review-ferramentas-ia` | `/artigos/como-avaliamos-ferramentas-de-ia/` | artigos | **quebra** | 120 |
| `051-hardware-ia-local` | `/ferramentas/hardware/` | hub de ferramentas | **quebra** | 139 |
| `052-criar-agente-ia-com-ferramentas` | `/tutoriais/como-criar-agente-ia-com-ferramentas/` | tutoriais | **quebra** | 122 |
| `053-tipos-agentes-ia` | `/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/` | artigos | **quebra** | 123 |
| `054-avaliar-agentes-ia` | `/artigos/como-avaliar-agentes-de-ia/` | artigos | **quebra** | 120 |
| `055-escolher-modelo-ia-local` | `/artigos/como-escolher-modelo-ia-local/` | artigos | **quebra** | 119 |
| `056-modelos-ia-local-programacao` | `/comparativos/modelos-ia-local-para-programacao/` | comparativos | **quebra** | 124 |
| `057-tecnicas-engenharia-prompt` | `/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/` | artigos | **quebra** | 118 |
| `058-avaliar-prompts-producao` | `/artigos/como-avaliar-prompts-em-producao/` | artigos | **quebra** | 116 |
| `059-rag-fontes-verificaveis` | `/ia/rag/` | hub /ia/rag/ | **quebra** | 124 |
| `060-hub-rag` | `—` | SEM SLUG | **quebra** | 129 |
