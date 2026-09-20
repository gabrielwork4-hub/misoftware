---
title: "Como avaliar prompts em produção"
description: "Por que um prompt é parte do sistema, como montar conjunto de avaliação e rubrica, e como fazer rollout com regressão e monitoramento."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Engenharia de Prompt"
silo: "ia"
tags:
  - "Prompt"
draft: false
sources:
  - label: "platform.openai.com"
    url: "https://platform.openai.com/docs/guides/evals"
  - label: "docs.anthropic.com"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
---
Um prompt em produção não é uma frase: é um componente de um sistema que decide custo, tom, formato e segurança a cada chamada. Alterá-lo "só para melhorar uma palavra" pode mudar tudo isso de uma vez, sem aviso. Avaliar prompts é o que transforma essa mudança arriscada num processo controlado — o mesmo cuidado que você teria ao alterar qualquer código que roda para clientes.

## Por que "parece melhor" não basta

Testar um prompt novo em dois ou três exemplos e achar que "ficou melhor" é enganoso: você viu o caminho feliz, não os casos difíceis nem a distribuição real das entradas. Um prompt pode melhorar o caso comum e piorar silenciosamente os casos de borda, ou manter a qualidade e dobrar o custo. Avaliação sistemática é o que revela esses efeitos antes que o usuário os sinta.

## Passo 1 — Monte um conjunto de avaliação

Colete exemplos reais, anonimizados, que representem o uso de verdade — incluindo os incômodos. Para cada um, defina a saída esperada ou os critérios do que seria uma boa resposta. Cubra quatro classes: casos comuns, entradas incompletas, casos ambíguos e casos que **deveriam ser recusados** (pedidos fora de escopo, tentativas de fuga). Esse conjunto vira um ativo permanente, que roda a cada mudança de prompt, modelo ou ferramenta.

## Passo 2 — Defina uma rubrica

Avalie cada resposta contra critérios explícitos, não pela impressão geral. Uma rubrica típica mede: precisão (o conteúdo está correto?), completude (cobriu o que importava?), estilo/tom (adequado ao público?) e segurança (recusou o que deveria, sem vazar dado?). Uma rubrica torna a avaliação repetível e permite comparar duas versões de prompt de forma justa — pela mesma régua.

## Passo 3 — Versione tudo que afeta o resultado

O comportamento não depende só do prompt: modelo, versão do modelo, parâmetros (temperatura, limites) e ferramentas disponíveis também mudam a saída. Versione todos eles juntos. Sem isso, você não consegue saber se a regressão de ontem veio do seu prompt novo ou de uma atualização do modelo do provedor.

## Passo 4 — Rode regressão antes do rollout

Antes de trocar o prompt em produção, rode-o contra o conjunto de avaliação e compare com a versão atual — a regressão. Se a nova versão melhora os casos-alvo sem piorar os demais nem estourar o custo, ela passa. Para mudanças de impacto, faça lançamento gradual (uma fração do tráfego primeiro), observando os números antes de ampliar.

## Passo 5 — Monitore em produção

Avaliação não termina no rollout. Acompanhe, em produção: taxa de falha, latência, custo, feedback dos usuários e a distribuição das entradas (que pode mudar e sair do que você testou). Alertas devem apontar **mudança de comportamento** — a taxa de recusa caiu, o custo médio subiu — e não só indisponibilidade. Um prompt que era bom pode degradar quando o tipo de entrada muda ou o modelo é atualizado pelo provedor.

## Um exemplo do que a regressão pega

Vale ver o valor concreto. Suponha que você reescreve o prompt de um classificador de suporte para "ficar mais educado". Nos dois exemplos que você testou à mão, ficou ótimo. Rodado contra o conjunto de avaliação, porém, a regressão mostra que a nova versão passou a recusar 8% dos casos válidos como "fora de escopo" — o tom mais cauteloso mudou o comportamento de decisão. Sem a regressão, isso só apareceria semanas depois, como reclamação de usuários. Com ela, apareceu antes do rollout. Esse é o trabalho da avaliação: transformar um efeito colateral invisível em um número que você vê antes de publicar.

## Próximo passo

Para a base, veja [o que é engenharia de prompt](/artigos/engenharia-de-prompt-o-que-e-e-como-aplicar/) e as [técnicas com exemplos](/artigos/tecnicas-de-engenharia-de-prompt-com-exemplos/). Quando o prompt vira parte de um agente, os mesmos princípios aparecem no [guia de avaliação de agentes](/artigos/como-avaliar-agentes-de-ia/). Contexto na [trilha de engenharia de prompt](/ia/engenharia-de-prompt/).
