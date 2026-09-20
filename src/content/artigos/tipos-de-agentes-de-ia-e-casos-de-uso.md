---
title: "Tipos de agentes de IA e casos de uso"
description: "Entenda agentes reativos, planejadores, cooperativos e operacionais para escolher a arquitetura adequada."
pubDate: "2026-09-20"
author: "redacao"
category: "IA & Modelos"
silo: "ia"
tags:
  - "Agentes"
draft: false
sources:
  - label: "platform.openai.com"
    url: "https://platform.openai.com/docs/guides/function-calling"
  - label: "docs.anthropic.com"
    url: "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"
---
Nem toda automação precisa de autonomia. Classificar o agente pelo tipo de decisão que ele toma e pelo risco do ambiente em que opera ajuda a evitar complexidade desnecessária. Escolher a arquitetura errada é caro nos dois sentidos: um agente simples demais não resolve o problema, e um agente complexo demais fica impossível de testar e manter.

## Um espectro, não caixas fechadas

Os tipos abaixo formam um espectro de autonomia crescente. A regra que atravessa todos eles: o grau de autonomia deve acompanhar o risco. As chamadas de ferramenta que sustentam quase todas essas arquiteturas seguem padrões descritos no [function calling da OpenAI](https://platform.openai.com/docs/guides/function-calling) e no [tool use da Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview).

### Agentes reativos

Respondem a um evento com uma ação, sem manter um plano de longo prazo. São previsíveis e fáceis de testar. Exemplo: um agente que recebe um e-mail de suporte, classifica o assunto e roteia para a fila certa. Se a tarefa se resume a "dado X, faça Y", este é o tipo mais barato e mais seguro.

### Agentes com ferramentas

Consultam sistemas externos — bancos, APIs, arquivos — para completar a tarefa. A decisão principal é *qual* ferramenta usar e *com quais argumentos*. Exemplo: um assistente que responde a uma dúvida buscando na base de conhecimento e citando a fonte. É o ponto de partida da maioria dos projetos úteis.

### Agentes planejadores

Quebram um objetivo em etapas e executam uma sequência, ajustando o plano conforme os resultados. Ganham poder e perdem previsibilidade. Exemplo: um agente de pesquisa que decide quais fontes consultar, lê os resultados e decide se precisa de mais uma rodada. Só compensa quando a tarefa tem muitas etapas e contexto variável.

### Arquiteturas multiagente

Dividem responsabilidades entre agentes especializados — um coordena, outros executam. Adicionam custo de orquestração e novos modos de falha (agentes que discordam, mensagens perdidas). Raramente são o ponto de partida certo: só valem quando um único agente já foi bem testado e o gargalo é claramente a divisão de responsabilidades.

### Agentes operacionais

Não são um tipo à parte de arquitetura, mas um recorte por contexto: qualquer um dos tipos acima, quando atua dentro de um processo real e com efeitos sobre sistemas ou pessoas. O que muda é o peso dos limites — permissões, aprovação humana e logs deixam de ser detalhe e passam a definir se o agente pode operar. Arquiteturas multiagente também são chamadas de cooperativas quando os agentes negociam ou dividem uma tarefa em vez de apenas repassá-la. Esse recorte operacional é aprofundado no cluster de [agentes operacionais](/automacao/agentes-operacionais/).

## Como escolher por tarefa

| Característica da tarefa | Tipo indicado |
|---|---|
| "Dado X, faça sempre Y" | Reativo |
| Precisa consultar um sistema | Com ferramentas |
| Muitas etapas, ordem variável | Planejador |
| Responsabilidades muito distintas e já validadas | Multiagente |

Use um agente simples para classificação e roteamento. Reserve planejamento e coordenação para problemas com muitas etapas, contexto variável e benefício comprovado. Na dúvida, comece pelo tipo mais simples que resolve — é mais fácil subir de complexidade do que descer.

## Limites que valem para todos

Independentemente do tipo, defina permissões, orçamento por execução, tempo máximo, fontes aceitas e pontos de aprovação. Um fallback determinístico é essencial quando a execução falha: o agente precisa ter um caminho seguro para "não consegui concluir" em vez de insistir ou inventar. Quanto mais autônomo o tipo escolhido, mais rígidos precisam ser esses limites.

## Próximo passo

Para colocar a mão na massa, siga o [tutorial de criação de agente com ferramentas](/tutoriais/como-criar-agente-ia-com-ferramentas/). Antes de produção, aplique o [guia de avaliação de agentes](/artigos/como-avaliar-agentes-de-ia/). Para revisar os fundamentos, volte a [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/).
