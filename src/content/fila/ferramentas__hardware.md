---
title: "Hardware para IA local: como dimensionar sua máquina"
description: "Como dimensionar CPU, GPU, memória e armazenamento para rodar modelos de IA localmente — começando pelo modelo que você quer usar, não pela ficha técnica da placa."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Ferramentas"
silo: ferramentas
kind: "hub"
canonicalPath: "/ferramentas/hardware/"
primaryKeyword: "hardware para IA local"
draft: false
sources:
  - "https://ollama.com/library"
  - "https://developer.nvidia.com/cuda-gpus"
faq:
  - q: "Quanta VRAM eu preciso para rodar IA local?"
    a: >-
      Depende do tamanho do modelo, da quantização e do contexto que você quer —
      não há um número único. A memória da GPU (VRAM) é o gargalo número um:
      estime a memória do modelo escolhido com folga e só então escolha a placa.
      Um modelo quantizado ocupa menos VRAM ao custo de alguma precisão, e é
      isso que costuma viabilizar rodar em placas acessíveis.
  - q: "Dá para rodar IA local sem placa de vídeo dedicada?"
    a: >-
      Dá, para modelos pequenos, usando CPU e RAM — funciona, mas é mais lento.
      A RAM ajuda no carregamento e quando não há GPU suficiente; para uso
      frequente ou modelos maiores, a VRAM é o que define se roda com folga. Se
      não tem GPU dedicada, comece com modelos pequenos quantizados e meça se a
      velocidade é aceitável para a sua tarefa.
  - q: "Como sei se o hardware aguenta antes de comprar?"
    a: >-
      Especificação de marketing não prevê desempenho no seu caso — valide com
      teste real. Depois de estimar a memória, compare tokens por segundo,
      latência inicial, consumo e estabilidade sob uso prolongado. Catálogos
      como a biblioteca do Ollama indicam requisitos aproximados por modelo, e a
      lista de GPUs com CUDA ajuda a checar compatibilidade antes da compra.
  - q: "Vale a pena montar uma máquina ou usar a nuvem?"
    a: >-
      Montar compensa quando privacidade, uso frequente ou custo previsível
      pesam mais — mas some à conta energia, refrigeração e manutenção, não só a
      placa. A nuvem compensa para modelos muito grandes, picos de uso ou quando
      você não quer operar infraestrutura. A máquina certa é a menor que roda o
      seu modelo com folga, não a mais parruda do catálogo.
---

Rodar IA localmente é um exercício de equilíbrio entre tamanho do modelo, quantização, velocidade desejada, orçamento e privacidade. Não existe configuração universal — a máquina certa é a menor que roda o seu modelo com folga. O erro comum é comprar hardware pela ficha técnica e depois descobrir que o modelo desejado não cabe na memória, ou que cabe mas roda lento demais para ser útil.

## Comece pelo modelo, não pela placa

A ordem correta é inversa à intuição: primeiro decida qual modelo e qual tamanho de contexto você precisa (veja [como escolher um modelo de IA local](/artigos/como-escolher-modelo-ia-local/)), estime a memória necessária **com folga**, e só então escolha o hardware. Um modelo quantizado ocupa menos memória ao custo de alguma precisão — essa troca costuma ser o que viabiliza rodar em placas acessíveis.

## Os componentes decisivos

| Componente | Papel | Por que importa |
|---|---|---|
| Memória da GPU (VRAM) | limita o modelo que cabe | é o gargalo número um |
| RAM | carregamento e modelos compartilhados | ajuda quando não há GPU suficiente |
| CPU | inferência sem GPU | mais lenta, mas viável para modelos pequenos |
| Armazenamento (SSD) | leitura dos pesos | reduz espera no carregamento |
| Energia/refrigeração | custo contínuo e estabilidade | afeta conta de luz e vida útil |

## Dimensione com teste real

Especificação de marketing não prevê desempenho no seu caso. Depois de estimar, valide com um teste real: compare **tokens por segundo**, latência inicial, consumo e estabilidade sob uso prolongado. Catálogos como a [biblioteca do Ollama](https://ollama.com/library) indicam requisitos aproximados por modelo, e a lista de [GPUs com CUDA](https://developer.nvidia.com/cuda-gpus) ajuda a checar compatibilidade.

## Operação responsável

Mantenha drivers e runtime atualizados, isole serviços, monitore temperatura e proteja os dados processados localmente. Rodar na sua máquina resolve privacidade, mas transfere para você a responsabilidade de operar.

## Trilha deste cluster

Escolha o modelo em [como escolher um modelo de IA local](/artigos/como-escolher-modelo-ia-local/), rode com [Ollama](/ferramentas/ollama/), compare opções para código em [modelos de IA local para programação](/comparativos/modelos-ia-local-para-programacao/) e volte ao [diretório de ferramentas](/ferramentas/).
