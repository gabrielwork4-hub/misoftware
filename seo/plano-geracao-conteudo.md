# Plano de geração de conteúdo — misoftware

## Objetivo

Transformar cada brief aprovado em um conteúdo publicável que resolva uma dor real do visitante, cubra sua intenção de busca, fortaleça o cluster e seja verificável por uma pessoa, por buscadores e por sistemas de resposta de IA.

O conteúdo só é considerado pronto quando passa pelos gates editoriais, factuais, SEO e técnicos. Geração de rascunho não equivale a publicação.

## Unidade de trabalho

Cada pauta será tratada como um pacote editorial:

```text
slug-registry
  → brief aprovado
  → pesquisa e fontes
  → hipótese de dor/persona
  → outline aprovado
  → rascunho Markdown
  → revisão factual e técnica
  → revisão editorial/SEO
  → publicação
  → monitoramento e atualização
```

## Ordem de execução

### Onda 1 — fundação e autoridade

Pilares e hubs de IA, Automação, Desenvolvimento e Ferramentas, seguidos dos explicadores-base. Objetivo: criar a malha de navegação e dar contexto aos spokes.

### Onda 2 — resolução de problemas

Tutoriais de agentes, IA local, RAG, n8n, APIs, webhooks, Astro, CI/CD e testes. Objetivo: atender visitantes com intenção prática e gerar evidência própria.

### Onda 3 — decisão comercial

Comparativos, reviews e metodologia de ferramentas. Objetivo: ajudar o leitor a escolher, sem ranking genérico nem recomendação sem teste.

### Onda 4 — prova e atualização

Estudos de caso, resultados, limites, atualizações de versão, preço e hardware. Objetivo: consolidar confiança e manter o cluster vivo.

Dentro de cada onda, publicar primeiro o hub/pilar, depois os conteúdos-filhos na ordem do `slug-registry.md`.

## Pipeline detalhado

### 1. Intake da pauta

Entrada obrigatória: slug canônica, keyword primária, cluster, tipo, prioridade, autor, data desejada e brief aprovado.

Bloqueios: slug duplicada, keyword já atribuída a outra URL, cluster ausente, tipo incompatível ou fonte de pauta não registrada.

### 2. Pesquisa e fontes

Produzir um pacote de pesquisa antes da redação:

- 3–8 fontes primárias ou técnicas relevantes;
- dados e datas que sustentem afirmações;
- concorrentes observados e lacunas;
- versões/preços/ambiente quando houver ferramenta;
- perguntas reais do visitante;
- lista de afirmações que exigem validação.

Para tutoriais, o procedimento precisa ser executado. Para comparativos, todos os produtos devem ser testados com critérios simétricos. Para estudos de caso, evidências e autorização são obrigatórias.

### 3. Mapa da dor do visitante

Antes do outline, registrar:

- quem é o leitor;
- o que ele tentou ou teme;
- qual decisão precisa tomar;
- qual risco existe se escolher errado;
- qual resultado mínimo o conteúdo deve entregar;
- qual próximo passo é legítimo.

O primeiro bloco do texto deve responder à pergunta central ou declarar a decisão que será resolvida. A definição enciclopédica só entra quando realmente reduz a incerteza.

### 4. Geração do outline

O outline deve conter H1, H2/H3, função de cada seção, palavras-alvo, evidência necessária, formato (tabela, código, checklist, diagrama) e link interno planejado.

Gate: nenhuma seção pode existir apenas para aumentar tamanho; cada uma precisa responder uma pergunta, provar uma afirmação ou orientar uma decisão.

### 5. Geração do rascunho

O gerador recebe somente contexto aprovado:

- brief completo;
- mapa da dor;
- fontes e notas de pesquisa;
- outline;
- links internos autorizados;
- regras de autoria e tom;
- status de teste e limitações.

Saída obrigatória:

```text
frontmatter válido
H1 único
conteúdo em Markdown
links internos reais
fontes associadas às afirmações
bloco de limitações
data e versão quando aplicável
perguntas em aberto para revisão
```

O gerador não deve inventar benchmarks, depoimentos, preços, resultados, citações, fontes ou experiências em primeira pessoa.

### 6. Revisão factual e técnica

Verificar cada afirmação relevante contra sua fonte. Em tutoriais, repetir o procedimento; em código, rodar ou marcar claramente o que não foi executado. Em ferramentas, registrar versão, plano, plataforma, limitações e data.

Classificar problemas:

- **Bloqueador:** fonte ausente, instrução insegura, código quebrado, slug errada ou afirmação inventada;
- **Alta:** erro técnico, comparação assimétrica ou ausência de evidência central;
- **Média:** seção rasa, link ausente ou exemplo insuficiente;
- **Baixa:** estilo, concisão ou melhoria visual.

### 7. Revisão de copy e experiência

O revisor deve confirmar:

- promessa compreensível em poucos segundos;
- dor tratada logo no início;
- progressão lógica;
- linguagem direta e sem jargão desnecessário;
- tabelas/checklists quando reduzem esforço;
- conclusão que ajuda a decidir;
- CTA editorial coerente com a etapa do leitor;
- nenhuma promessa maior que a evidência.

### 8. Revisão SEO e cluster

Validar title, description, H1, slug, intenção, headings, alt text, canonical, schema, links internos, âncoras, página-pilar e ausência de canibalização.

Cada spoke deve apontar ao pilar/hub e receber links de volta. Comparativos devem apontar para as entidades comparadas. Tutoriais devem apontar para ferramenta, conceito e próximo passo.

### 9. Publicação

Publicar somente após status `aprovado`. O build deve validar frontmatter, referências de autor, coleção, links e metadados. A publicação deve gerar sitemap/RSS/schema e registrar data de publicação e revisão.

### 10. Monitoramento e atualização

Após publicar, acompanhar:

- indexação e cobertura;
- impressões, cliques, CTR e posição;
- consultas novas e lacunas;
- cliques internos e páginas órfãs;
- mudanças de versão/preço/documentação;
- feedback e erros reportados;
- citações e menções em sistemas de IA, quando mensurável.

Revisar por evento (mudança factual) ou por janela (conteúdo sem atualização após o período definido no CMS). Preservar slug; mudança exige 301.

## Prompts operacionais

### Prompt de pesquisa

“Mapeie a dor do visitante para esta pauta, liste perguntas que precisam ser respondidas, reúna fontes primárias, separe fatos de inferências e indique toda afirmação que exige teste ou confirmação. Não invente dados.”

### Prompt de outline

“Com base no brief e na pesquisa aprovados, construa uma estrutura que leve o leitor da dúvida à decisão. Para cada seção informe função, palavra-alvo, evidência, formato e link interno. Remova seções que não entreguem valor.”

### Prompt de redação

“Escreva o rascunho usando somente o brief, fontes, testes e outline fornecidos. Resolva a dor declarada no início, explique trade-offs, mostre passos ou critérios quando aplicável, cite fontes e declare limitações. Não invente fatos, resultados, preços, experiências ou referências.”

### Prompt de revisão

“Audite o texto por factualidade, segurança, clareza, intenção, originalidade, links, slug, metadata e cobertura do brief. Liste problemas por severidade, proponha correção e marque qualquer ponto que exige validação humana.”

## Modelo de status editorial

```text
ideia
→ selecionada
→ pesquisa em andamento
→ brief pronto
→ outline pronto
→ rascunho gerado
→ revisão factual
→ revisão editorial
→ aprovado
→ agendado
→ publicado
→ monitorando
→ atualização necessária
```

## Critérios de pronto

Um conteúdo só pode ir para `aprovado` quando:

- responde à dor principal;
- cumpre o brief e a intenção;
- tem fontes suficientes e rastreáveis;
- não possui afirmação factual sem tratamento;
- passou pelo teste técnico quando aplicável;
- possui links internos do cluster;
- tem autor, data, atualização e metadata;
- não compete com outra URL;
- declara limitações e conflitos;
- está pronto para revisão humana final.

## Métricas do programa

| Frente | Indicador |
|---|---|
| Produção | briefs aprovados → textos publicados |
| Qualidade | bloqueadores por texto e retrabalho por peça |
| Utilidade | conclusão de leitura, cliques no próximo passo e feedback |
| SEO | indexação, impressões, cliques, CTR e posição por cluster |
| Autoridade | links, menções e citações qualificadas |
| Atualização | tempo entre mudança factual e correção publicada |
| Governança | textos publicados após revisão humana |

## Implementação técnica pendente

- Criar no Directus as entidades e status deste plano.
- Implementar rotas de tutorial, comparativo, estudo de caso e hubs aninhados.
- Criar os prompts como templates versionados.
- Conectar n8n ao CMS para pesquisa, brief, rascunho e revisão.
- Criar validadores de frontmatter, slug, keyword, links e fontes.
- Ligar Pagefind à interface e ativar newsletter/analytics.
- Registrar histórico de atualização e scorecard por conteúdo.
