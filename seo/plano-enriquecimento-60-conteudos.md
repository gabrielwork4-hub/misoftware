# Plano de enriquecimento dos 60 conteúdos

## Objetivo

Transformar os 60 rascunhos em páginas que resolvam uma dor concreta do leitor,
cubram a intenção principal, demonstrem conhecimento técnico e fortaleçam os
clusters de IA, Automação, Desenvolvimento e Ferramentas.

O objetivo não é aumentar palavras artificialmente. Uma página só cresce quando
uma nova seção reduz uma dúvida, prova uma afirmação, mostra um procedimento ou
ajuda o leitor a tomar uma decisão.

Os arquivos atuais em `src/content/fila/` são a base de pauta e não a versão
publicável. Todos permanecem `draft: true` até completar os gates abaixo.

## Princípios editoriais

1. **Dor antes de definição.** Os primeiros parágrafos devem deixar claro quem
   está sendo ajudado, qual problema será resolvido e qual resultado é possível.
2. **Resposta antes de contexto.** Entregar uma resposta curta e verificável no
   início; aprofundar depois.
3. **Evidência proporcional à afirmação.** Toda afirmação factual importante
   precisa de fonte, teste próprio ou ser apresentada explicitamente como
   recomendação/inferência.
4. **Experiência demonstrável.** Tutoriais, comparativos e reviews exigem teste,
   cenário, versão e limitações. Não inventar benchmark, preço ou resultado.
5. **Cobertura sem enchimento.** Densidade significa cobrir entidades, relações,
   perguntas e decisões do tópico de modo natural; não repetir a keyword.
6. **Cluster antes da publicação isolada.** Pilar/hub define o mapa; spokes
   resolvem dúvidas específicas; comparativos e ferramentas apoiam decisões.
7. **Transparência.** Declarar autoria, método, data, versão, limitações e o que
   ainda não foi verificado.

## Critério de página pronta

Uma página só pode sair de `draft` quando todos os itens forem verdadeiros:

- atende uma intenção primária identificada no brief;
- responde a pergunta principal nos primeiros 100–150 palavras;
- tem estrutura H1 → H2 → H3 coerente e escaneável;
- contém exemplos, critérios, passos ou evidências adequados ao tipo;
- tem fontes primárias associadas às afirmações relevantes;
- diferencia fato, teste próprio, recomendação e inferência;
- informa data de atualização e versão quando o assunto for volátil;
- possui limitações e riscos explícitos;
- tem autoria e contexto de experiência compatíveis com o assunto;
- não contém o marcador `Revisão pendente`;
- passou por revisão factual, editorial e técnica;
- tem links internos planejados e só será linkada definitivamente após a
  aprovação do conjunto do cluster.

## Metas de profundidade por tipo

As faixas são referências de cobertura, não metas mecânicas de palavras.

| Tipo | Faixa inicial | Deve entregar |
|---|---:|---|
| Pilar | 900–1.400 | mapa do silo, decisões, hubs e próximos caminhos |
| Hub | 700–1.200 | definição operacional, subtemas, critérios e mapa de conteúdos |
| Artigo/guia | 1.200–2.000 | resposta completa, contexto, exemplos, limites e aplicação |
| Tutorial | 1.200–2.200 | pré-requisitos, passos reproduzíveis, saída esperada e troubleshooting |
| Comparativo | 1.500–2.500 | método simétrico, matriz, cenários, custos, limitações e veredito |
| Ferramenta/review | 800–1.500 | adequação, uso, limitações, privacidade, preço e alternativas |
| Estudo de caso | 1.200–2.000 | contexto, método, evidência, resultado, riscos e autorização |

Uma página menor pode ser aprovada quando resolve completamente uma intenção
estreita. Uma página maior deve ser reduzida quando repete contexto sem gerar
decisão ou evidência nova.

## Estrutura obrigatória por página

### Abertura

- promessa clara em uma frase;
- para quem é e para quem não é;
- resposta ou conclusão provisória;
- contexto mínimo necessário;
- data/versão se houver volatilidade.

### Corpo

Cada seção precisa ter uma função registrada no outline:

- explicar um conceito;
- responder uma pergunta;
- demonstrar um procedimento;
- comparar alternativas;
- apresentar evidência;
- explicitar uma limitação;
- orientar a próxima decisão.

### Fechamento

- síntese da decisão ou procedimento;
- limitações e quando não usar a recomendação;
- próximo passo legítimo;
- fontes e data de revisão.

## Enriquecimento por tipo

### Pilares e hubs

Adicionar:

- definição editorial do território;
- problemas que o silo resolve;
- mapa de subtemas e vocabulário do cluster;
- critérios para escolher entre abordagens;
- seção “comece por aqui”;
- bloco de dúvidas recorrentes apenas quando responder perguntas reais;
- resumo de cada conteúdo-filho, com função distinta;
- lacunas conhecidas do cluster.

O hub não deve ser apenas um texto introdutório curto. Ele precisa orientar o
leitor para uma sequência de aprendizagem ou decisão.

### Artigos e guias

Adicionar:

- resposta direta no início;
- modelo mental ou definição operacional;
- exemplo concreto aplicado a trabalho técnico;
- alternativas e trade-offs;
- erros comuns;
- checklist de aplicação;
- seção de limites e quando procurar outra solução;
- fontes específicas para fatos e afirmações técnicas.

### Tutoriais

Adicionar:

- objetivo verificável;
- ambiente, sistema operacional, versões e dependências;
- pré-requisitos;
- passos numerados completos;
- comandos e arquivos necessários;
- resultado esperado após cada etapa relevante;
- validação final;
- erros comuns, diagnóstico e recuperação;
- segurança, permissões e limpeza;
- variações e próximo passo.

Todo tutorial deve ser executado antes de avançar para `fact-checked`.

### Comparativos

Adicionar:

- decisão que o leitor precisa tomar;
- cenário de teste e perfil avaliado;
- critérios com pesos ou justificativa de importância;
- versão, plano, preço e data da consulta;
- matriz comparável, sem critérios exclusivos para um produto;
- pontos fortes, limitações e custos de troca;
- indicação por cenário, não ranking universal;
- metodologia, conflitos e o que não foi testado;
- conclusão condicional: “escolha X se..., escolha Y se...”.

### Ferramentas e reviews

Adicionar:

- problema que a ferramenta resolve;
- para quem serve e para quem não serve;
- fluxo de uso ou caso mínimo;
- integração, exportação, privacidade e dependências;
- limites do plano gratuito/pago;
- preço e data da verificação;
- alternativas reais;
- avaliação editorial separada de descrição do fornecedor;
- evidência do teste ou declaração explícita de que ainda não foi testada.

### Estudo de caso

Adicionar somente com autorização e evidência:

- contexto e problema inicial;
- restrições e alternativas consideradas;
- método executado;
- resultado antes/depois com unidade e período;
- falhas, custos e limitações;
- o que pode ou não ser generalizado;
- autorização para identificar pessoas, empresas e dados.

## Pesquisa e evidências

Cada página deve ter um pacote de pesquisa antes da redação final:

```yaml
sources:
  - url: "https://..."
    accessed: "YYYY-MM-DD"
    supports: "afirmação sustentada pela fonte"
tested:
  - scenario: "cenário executado"
    result: "pass|fail|not-applicable"
    environment: "versão, sistema e dependências"
lastReviewed: "YYYY-MM-DD"
nextReview: "YYYY-MM-DD"
reviewer: ""
```

Prioridade de evidência:

1. documentação, especificação e repositório oficial;
2. artigo técnico ou benchmark original;
3. teste reproduzível próprio;
4. fonte secundária especializada para contexto;
5. opinião editorial, sempre identificada como opinião.

Não usar uma fonte genérica para sustentar uma afirmação específica. Uma página
de n8n, por exemplo, precisa de documentação/versionamento do n8n; uma página de
preço precisa da página oficial de preços consultada na data indicada.

## Densidade e cobertura sem keyword stuffing

Para cada pauta, criar antes do texto um mapa de cobertura:

| Elemento | Pergunta |
|---|---|
| Entidade principal | Sobre o que a página realmente fala? |
| Intenção | O leitor quer entender, executar, comparar ou escolher? |
| Perguntas | Quais dúvidas bloqueiam a decisão? |
| Relações | Com quais conceitos, ferramentas e riscos o tema se conecta? |
| Provas | Quais afirmações precisam de fonte ou teste? |
| Decisão | Que ação o leitor consegue tomar ao terminar? |

Usar a keyword principal no título, H1, abertura e pelo menos uma seção quando
for natural. Variar com termos relacionados, exemplos, verbos e entidades do
cluster. Não definir um percentual rígido de repetição.

## Ondas de trabalho

### Onda 1 — fundação dos clusters

1. `/ia/`
2. `/automacao/`
3. `/desenvolvimento/`
4. `/ferramentas/`
5. hubs de agentes, n8n, arquitetura e ferramentas de IA

Objetivo: criar páginas de orientação suficientemente boas para receber e
distribuir os conteúdos-filhos.

### Onda 2 — fundamentos e resolução de problemas

Artigos sobre agentes, prompt, webhooks, processos, arquitetura, APIs,
idempotência, qualidade e DevOps.

Objetivo: cobrir as perguntas recorrentes e criar exemplos práticos que possam
ser reutilizados em tutoriais e comparativos.

### Onda 3 — tutoriais executáveis

N8n, agentes com ferramentas, Astro, RAG e integrações.

Objetivo: gerar experiência própria verificável, com versões, comandos, saídas e
falhas documentadas.

### Onda 4 — ferramentas e decisões

Reviews, comparativos, produtividade, editores, hardware e automação.

Objetivo: ajudar uma decisão concreta sem ranking genérico ou informação de preço
desatualizada.

### Onda 5 — prova, caso e manutenção

Estudo de caso, metodologia de reviews e páginas que dependem de atualização
frequente.

Objetivo: consolidar confiança e estabelecer a rotina de revisão.

## Fluxo de revisão por lote

Trabalhar em lotes de 5 a 10 páginas, sempre concluindo um pequeno cluster antes
de abrir outro:

1. **Brief e dor:** confirmar leitor, intenção, decisão e outline.
2. **Pesquisa:** reunir fontes, versões, perguntas e lacunas.
3. **Enriquecimento:** reescrever o conteúdo com exemplos e evidências.
4. **Teste/fact-check:** executar comandos, conferir dados e registrar ambiente.
5. **Revisão de valor:** remover generalidades e confirmar que a dor foi resolvida.
6. **Aprovação:** trocar status para `approved` somente após todos os gates.

Linkagem interna e navegação entram depois da aprovação do conteúdo de cada lote,
quando sabemos quais páginas realmente existem e qual é a função de cada uma.

## Checklist de aprovação

### Valor para o leitor

- [ ] consigo descrever a dor resolvida em uma frase;
- [ ] a resposta aparece no início;
- [ ] há pelo menos um exemplo ou procedimento concreto;
- [ ] trade-offs e limitações estão claros;
- [ ] a conclusão orienta uma decisão ou ação.

### Qualidade factual

- [ ] afirmações importantes têm fontes adequadas;
- [ ] versões, preços e datas foram registrados quando aplicável;
- [ ] código e passos foram testados ou marcados como não testados;
- [ ] não há benchmark, depoimento ou experiência inventados;
- [ ] riscos de segurança, privacidade e compatibilidade foram revisados.

### Qualidade editorial

- [ ] título e H1 prometem exatamente o que o texto entrega;
- [ ] headings são descritivos;
- [ ] parágrafos são curtos e escaneáveis;
- [ ] tabelas, listas e código aparecem quando reduzem esforço;
- [ ] o texto não repete a mesma ideia para atingir tamanho;
- [ ] autoria, método e limitações são transparentes.

### SEO e cluster

- [ ] intenção primária está atendida;
- [ ] keyword e entidades aparecem naturalmente;
- [ ] slug corresponde ao registro;
- [ ] não há canibalização com outra URL;
- [ ] fontes e futuras relações internas estão identificadas;
- [ ] schema, title, description e data estão coerentes.

## Ordem imediata recomendada

O primeiro lote deve ser:

1. os quatro pilares;
2. hub de agentes de IA;
3. hub de IA local;
4. hub de n8n;
5. hub de arquitetura de software;
6. artigo “o que são agentes de IA”;
7. artigo de engenharia de prompt;
8. artigo de webhooks;
9. artigo de mapeamento de processos.

Esse lote cria o mapa de navegação e os primeiros conteúdos capazes de responder
às dúvidas principais. Depois dele, tutoriais e comparativos terão contexto e
destinos editoriais claros.

## Decisão de publicação

Enquanto o lote não passar pelo checklist, manter:

```yaml
status: needs-evidence
draft: true
```

Depois da revisão de pesquisa, teste e copy:

```text
needs-evidence → research → draft-reviewed → fact-checked → seo-reviewed → approved
```

Somente `approved` pode sair de `draft`, entrar no sitemap e participar da
linkagem pública definitiva.

## Sistema operacional de produção

### Ficha obrigatória de cada URL

Antes de escrever, criar uma ficha para cada conteúdo. A ficha é a fonte de
decisão da página; o Markdown é apenas a saída publicada.

```yaml
slug: "/artigos/exemplo/"
type: "artigo"
cluster: "agentes"
priority: "P0|P1|P2"
primaryKeyword: ""
searchIntent: "informacional|tutorial|comparativo|comercial"
reader:
  role: ""
  situation: ""
  priorAttempt: ""
pain:
  problem: ""
  risk: ""
  desiredOutcome: ""
decision: "Ao terminar, o leitor consegue..."
promise: ""
nonGoals:
  - ""
outline:
  - heading: ""
    job: "pergunta respondida ou decisão apoiada"
    evidence: "fonte|teste|exemplo|não aplicável"
    format: "texto|lista|tabela|código|diagrama"
sources: []
tests: []
limitations: []
lastReviewed: "YYYY-MM-DD"
nextReview: "YYYY-MM-DD"
owner: ""
reviewer: ""
status: "needs-evidence"
```

### Priorização objetiva

Cada pauta recebe uma nota de 0 a 3 em cinco dimensões:

| Dimensão | 0 | 3 |
|---|---|---|
| Valor da dor | curiosidade | bloqueia uma decisão ou execução |
| Papel no cluster | isolada | pilar/hub que organiza outros conteúdos |
| Evidência disponível | desconhecida | fontes e teste acessíveis |
| Reutilização | pouca | exemplos e critérios reaproveitáveis |
| Volatilidade controlável | muito instável | estável ou com revisão definida |

Prioridade = `valor da dor + papel no cluster + evidência + reutilização -
volatilidade`. Em empate, vem primeiro a página que desbloqueia mais outras.

Não usar volume de busca como critério único. Uma página com menos buscas, mas
que resolve uma dor crítica e sustenta um cluster, pode ter prioridade maior.

### Papéis e gates

Mesmo em uma equipe pequena, separar mentalmente os papéis:

| Papel | Responsabilidade |
|---|---|
| Dono da pauta | dor, escopo, intenção e não-objetivos |
| Pesquisador | fontes, versões, perguntas e lacunas |
| Autor | redação, exemplos e síntese |
| Revisor técnico | teste, precisão, segurança e compatibilidade |
| Revisor editorial | clareza, utilidade, tom e estrutura |
| Publicador | frontmatter, schema, renderização e status |

Uma pessoa pode acumular papéis, mas nenhum conteúdo deve ser aprovado sem uma
segunda leitura para páginas voláteis, comparativos, reviews e cases.

### Cadência por lote

Trabalhar em lotes de cinco páginas:

1. **Dia 1 — seleção e ficha:** fechar dor, intenção, outline e não-objetivos.
2. **Dias 2–3 — pesquisa:** coletar fontes e registrar cada afirmação crítica.
3. **Dias 4–5 — redação:** produzir com exemplos e formato adequado.
4. **Dia 6 — teste/fact-check:** executar procedimentos e corrigir fatos.
5. **Dia 7 — revisão:** aplicar o checklist e registrar pendências.

O lote só avança quando as cinco páginas estão aprovadas ou explicitamente
devolvidas para pesquisa. Não acumular dezenas de rascunhos “quase prontos”.

## Matriz de qualidade por intenção

### Informacional

O leitor precisa sair sabendo explicar o conceito, reconhecer quando ele se
aplica e evitar os erros mais comuns. Exigir definição operacional, exemplo,
limites e fontes.

### Tutorial

O leitor precisa conseguir repetir o procedimento. Exigir ambiente, sequência,
saída esperada, erro comum e recuperação. Se não for executado, não chamar de
tutorial final.

### Comparativa

O leitor precisa escolher sob suas próprias restrições. Exigir critérios
simétricos, cenários, método, data e conclusão condicional.

### Comercial/ferramenta

O leitor precisa saber se a ferramenta é adequada antes de clicar ou pagar.
Exigir adequação, limitações, custo total, privacidade, alternativas e data.

### Pilar/hub

O leitor precisa saber por onde começar e qual caminho seguir. Exigir mapa do
cluster, ordem recomendada e função de cada página-filho.

## Controle de densidade temática

Para evitar textos curtos e também evitar enchimento, revisar cada página em
quatro camadas:

1. **Cobertura:** todas as perguntas e subtópicos do brief foram respondidos?
2. **Relações:** o texto explica dependências, alternativas, riscos e contexto?
3. **Evidência:** cada afirmação crítica tem suporte identificável?
4. **Aplicação:** há exemplo, procedimento, critério ou decisão utilizável?

Uma página só pode ser encurtada quando as quatro camadas continuam intactas.
Uma página só pode ser alongada quando uma camada está incompleta. A métrica de
palavras é um alerta, não o critério de aprovação.

## Entregáveis de cada lote

Ao terminar um lote, salvar:

- fichas editoriais atualizadas;
- fontes com data de acesso e afirmação suportada;
- registro de testes e ambiente;
- texto revisado;
- lista de limitações;
- decisão de aprovação ou bloqueio;
- lista provisória de relações internas para a etapa de linkagem;
- data da próxima revisão.

O lote não está concluído se apenas os arquivos Markdown foram escritos.

## Indicadores do processo

Medir qualidade do processo, não apenas quantidade publicada:

- percentual de páginas com todas as afirmações críticas suportadas;
- percentual de tutoriais executados;
- percentual de comparativos com teste simétrico;
- número de pendências bloqueadoras por lote;
- tempo entre pesquisa e aprovação;
- páginas aprovadas sem retrabalho factual;
- feedback qualitativo de leitores;
- impressões, cliques e consultas novas após publicação.

Não usar “palavras por dia” ou “páginas produzidas” como indicador principal.
Essas métricas incentivam conteúdo artificialmente longo ou superficial.
