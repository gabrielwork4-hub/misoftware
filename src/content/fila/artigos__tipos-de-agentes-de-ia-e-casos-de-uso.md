---
title: "Tipos de agentes de IA e casos de uso"
description: "Entenda agentes reativos, planejadores, com ferramentas e multiagente — e escolha a arquitetura pelo tipo de decisão e pelo risco da tarefa."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/"
primaryKeyword: "tipos de agentes de IA"
draft: false
sources:
  - "https://platform.openai.com/docs/guides/function-calling"
  - "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"
---

Não existe um "agente de IA" único: existem tipos de agentes de IA que variam pela forma como o sistema decide o próximo passo e pelo risco que essa decisão carrega. Classificar o agente por esses dois eixos — tipo de decisão e risco do ambiente — evita o erro mais comum: dar autonomia a uma tarefa que um workflow determinístico resolveria com menos custo e menos superfície de falha.

Antes de escolher um tipo, vale confirmar o conceito base: um agente recebe um objetivo, interpreta contexto, escolhe uma ação, usa ferramentas e observa o resultado. Se essa definição ainda não está clara, comece por [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/).

## As quatro categorias úteis na prática

| Tipo | Como decide | Melhor uso | Risco principal |
|---|---|---|---|
| **Reativo** | responde a um evento com uma ação direta | classificação, roteamento, resposta a gatilho | tratar exceções demais como regra |
| **Planejador** | quebra um objetivo em etapas antes de agir | tarefas com várias etapas dependentes | plano longo que erra cedo e propaga |
| **Com ferramentas** | escolhe qual sistema consultar ou alterar | ler pedidos, chamar APIs, transformar dados | permissão excessiva, efeito colateral |
| **Multiagente** | divide responsabilidades entre papéis | problemas com sub-domínios distintos | coordenação difícil de observar |

Essas categorias não são exclusivas. Um agente de atendimento pode ser reativo na entrada, usar ferramentas para consultar um pedido e acionar um planejador só quando o caso exige várias etapas. O ponto é declarar qual comportamento você está autorizando em cada momento.

## Escolha pelo tipo de tarefa

Comece pelo comportamento mais simples que resolve o problema:

- **Roteamento e triagem:** um agente reativo com uma ferramenta de leitura basta. Não adicione planejamento.
- **Extração e transformação:** uma etapa de IA com validação de saída costuma ser suficiente — muitas vezes nem é um agente.
- **Execução com várias etapas:** um planejador com ferramentas reversíveis e ponto de aprovação faz sentido quando o caminho varia caso a caso.
- **Domínios separados:** a divisão multiagente ajuda quando cada papel tem contexto e permissões próprios, não apenas para "parecer" mais sofisticado.

O grau de autonomia deve acompanhar o risco, não a ambição do projeto. Uma ação reversível e de baixo impacto (rascunhar uma resposta) tolera mais liberdade; uma ação irreversível (emitir um estorno) exige aprovação e limites rígidos.

## Limites que todo tipo precisa declarar

Independentemente da categoria, o desenho mínimo declara permissões, orçamento, tempo máximo, fontes aceitas e pontos de aprovação humana. Um fallback determinístico — o que acontece quando o agente falha ou recusa — é obrigatório, não opcional. As documentações de [function calling da OpenAI](https://platform.openai.com/docs/guides/function-calling) e [tool use da Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview) ajudam a estruturar as chamadas, mas não substituem os testes no seu domínio.

## Próximo passo

Definido o tipo, o passo seguinte é medir se ele é confiável: use o guia de [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) para montar uma suíte com casos normais e adversos, e siga o [tutorial de criação de agente com ferramentas](/tutoriais/como-criar-agente-ia-com-ferramentas/) para um primeiro protótipo reversível. Para aplicações operacionais, veja [agentes operacionais](/automacao/agentes-operacionais/).
