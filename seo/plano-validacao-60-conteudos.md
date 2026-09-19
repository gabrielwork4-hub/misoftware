# Plano de validação e publicação dos 60 conteúdos

## Objetivo

Transformar os 60 rascunhos da pasta `_inbox nova` em conteúdos publicáveis, com evidências verificáveis, exemplos próprios, testes reproduzíveis, revisão editorial e controle de SEO.

## Regra de status

`needs-evidence` → `research` → `draft-reviewed` → `fact-checked` → `seo-reviewed` → `approved`.

Nenhum arquivo avança sem cumprir o gate da etapa atual. O status deve permanecer no frontmatter de cada Markdown.

## Ordem de execução

### Fase 0 — Preparação da base

1. Confirmar o inventário dos 60 arquivos contra `seo/briefs/slug-registry.md`.
2. Criar uma planilha ou índice de controle com slug, intenção, tipo, autor, cluster, responsável, status e data da última revisão.
3. Classificar cada pauta por volatilidade:
   - alta: ferramentas, preços, modelos, hardware e recursos de produto;
   - média: frameworks, APIs, arquitetura e práticas técnicas;
   - baixa: conceitos, métodos e fundamentos.
4. Definir data de corte para toda informação variável.

### Fase 1 — Pesquisa e fontes

Para cada pauta, montar um pacote de evidências:

- 2 a 4 fontes primárias (documentação oficial, especificação, repositório ou publicação original);
- fontes secundárias apenas para contexto, nunca para sustentar a afirmação principal;
- data de acesso e versão do produto, biblioteca ou modelo;
- afirmação suportada por cada fonte;
- indicação explícita de incertezas e limitações.

Prioridade de fontes: documentação oficial > especificação/repositório oficial > artigo técnico original > benchmark reproduzível > imprensa especializada.

Entregável: preencher `sources` e inserir citações junto às afirmações que dependem de evidência.

### Fase 2 — Dados atualizados

Criar uma ficha de atualização para conteúdos voláteis:

- versão testada;
- plano e preço consultados, quando aplicável;
- limites de uso, compatibilidade e disponibilidade regional;
- data da verificação;
- mudança em relação ao brief;
- próxima data de revisão.

Preços, planos e recursos devem ser confirmados em fonte oficial. Não publicar números sem unidade, data e contexto.

### Fase 3 — Exemplos e experiência própria

Cada conteúdo deve ter pelo menos um elemento original adequado ao tipo de pauta:

- tutorial: procedimento testado, saída esperada e erro comum;
- comparativo: matriz com critérios, cenário de uso e método de teste;
- ferramenta: caso de uso, limitações e decisão de adequação;
- conceito: exemplo concreto, diagrama ou aplicação no fluxo;
- estudo de caso: contexto, processo, resultado e ressalvas.

Exemplos gerados por IA precisam ser executados ou marcados como ilustrativos. Código deve ter ambiente, dependências e resultado de teste registrados.

### Fase 4 — Testes técnicos e fact-checking

Executar uma bateria proporcional ao conteúdo:

- links internos e externos;
- comandos e snippets;
- APIs, webhooks e configurações;
- compatibilidade de versões;
- cálculos, tabelas e preços;
- segurança, permissões e privacidade;
- consistência entre título, promessa e conclusão.

Registrar resultado, ambiente, data e responsável. Falhas bloqueiam o avanço para `fact-checked`.

### Fase 5 — Revisão editorial e E-E-A-T

Revisar cada texto pelo teste Quem / Como / Por quê:

- quem assina e por que tem contexto para o tema;
- como o conteúdo foi pesquisado ou testado;
- por que a página existe e qual decisão ajuda o leitor a tomar.

Checar clareza, precisão, redundância, voz editorial, acessibilidade, hierarquia H1-H3, parágrafos escaneáveis e presença de limitações. Eliminar generalidades e afirmações sem suporte.

### Fase 6 — SEO, links e prontidão para citação

Validar:

- slug igual ao registro canônico;
- keyword principal no título, H1 e abertura sem repetição artificial;
- intenção atendida nos primeiros parágrafos;
- 3 a 5 links internos relevantes em textos longos;
- links para fontes autoritativas;
- title, description, canonical e data de atualização;
- respostas diretas, listas, tabelas e definições que possam ser citadas por mecanismos de busca;
- ausência de páginas órfãs e conflitos de keyword.

### Fase 7 — Aprovação e publicação

Dois revisores aprovam conteúdos de alto risco ou alta volatilidade. Antes da publicação:

1. atualizar status para `approved`;
2. confirmar autor, categoria, silo e cluster;
3. revisar links e schema no CMS;
4. registrar data de publicação e próxima revisão;
5. fazer checagem pós-publicação de indexação, renderização e links.

## Fila recomendada

Trabalhar em lotes de 10, preservando a arquitetura:

1. fundamentos de IA e agentes;
2. IA local, prompt e RAG;
3. automação, n8n e integrações;
4. desenvolvimento, arquitetura e front/back-end;
5. DevOps e qualidade;
6. ferramentas, comparativos, produtividade e hardware.

Dentro de cada lote, começar pelos hubs e pilares, depois publicar spokes e comparativos. Isso permite revisar links internos com contexto.

## Controle mínimo por arquivo

```yaml
status: research
sources:
  - url: ""
    accessed: "YYYY-MM-DD"
    supports: ""
tested:
  - scenario: ""
    result: "pass|fail|not-applicable"
    environment: ""
lastReviewed: "YYYY-MM-DD"
nextReview: "YYYY-MM-DD"
reviewer: ""
```

## Critério de pronto

Um conteúdo só está pronto quando a promessa é atendida, as afirmações relevantes têm fonte, os exemplos foram verificados, os elementos técnicos passaram pelos testes, a página possui links internos coerentes e um revisor humano aprovou o texto.

## Rotina posterior

Revisar mensalmente conteúdos de alta volatilidade, trimestralmente ferramentas e integrações e semestralmente fundamentos. Registrar correções relevantes e manter histórico de atualização.
