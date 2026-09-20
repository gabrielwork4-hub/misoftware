---
title: "Hardware para IA local: como dimensionar sua máquina"
description: "Guia de CPU, GPU, memória, armazenamento e energia para executar modelos de IA localmente."
pubDate: "2026-09-20"
author: "redacao"
silo: "ferramentas"
cluster: "Hardware"
clusterSlug: "hardware"
draft: false
sources:
  - label: "nvidia.com"
    url: "https://www.nvidia.com/en-us/geforce/graphics-cards/"
  - label: "ollama.com"
    url: "https://ollama.com/blog/ollama-is-now-available-as-an-official-docker-image"
---
Executar IA local exige equilibrar tamanho do modelo, quantização, velocidade desejada, orçamento e privacidade. Não existe uma configuração universal.

## Componentes decisivos

Memória da GPU limita o modelo que cabe e influencia a velocidade. RAM ajuda no carregamento e em modelos compartilhados; CPU participa da inferência quando não há GPU; armazenamento rápido reduz espera e energia afeta o custo contínuo.

## Como dimensionar

Comece pelo modelo e pelo contexto necessários, estime memória com folga e valide com um teste real. Compare tokens por segundo, latência inicial, consumo e estabilidade, não apenas especificações de marketing.

## Operação responsável

Mantenha drivers e runtime atualizados, isole serviços, monitore temperatura e proteja os dados processados. Para modelos locais, veja também [como escolher um modelo](/artigos/como-escolher-modelo-ia-local/).

## Dimensione pelo modelo, valide com teste real

O erro clássico ao montar uma máquina para IA local é comprar pela especificação de marketing em vez de dimensionar pela tarefa. Comece ao contrário: escolha o modelo e o tamanho de contexto que a tarefa exige, estime a memória de GPU necessária com folga (a quantização muda muito essa conta) e só então avalie o hardware. Antes de fechar a compra, valide com um teste real — tokens por segundo, tempo até a primeira resposta, consumo de energia e estabilidade sob uso contínuo, não só o pico. Memória de GPU costuma ser o limite que decide qual modelo cabe; RAM, armazenamento rápido e refrigeração definem se a experiência é utilizável no dia a dia. Para a escolha do modelo em si, veja [como escolher um modelo de IA local](/artigos/como-escolher-modelo-ia-local/).

## Dimensionamento por faixa de modelo

Como referência inicial (e sujeita a variação por quantização, contexto e runtime — corte de 2026-09), a memória de GPU é o fator que decide qual modelo cabe. Modelos pequenos, na faixa de 7 a 8 bilhões de parâmetros, costumam rodar de forma utilizável com quantização em placas de 8 GB de VRAM. Modelos médios, de 13 a 14 bilhões, pedem confortavelmente 12 a 16 GB. Modelos grandes, de 30 bilhões para cima, normalmente exigem 24 GB ou mais, ou dividir a carga com a CPU e a RAM ao custo de velocidade. Contexto longo consome memória adicional além do peso do modelo. Por isso a ordem correta é sempre a mesma: parta do modelo e do contexto que a tarefa exige, estime a memória com folga e valide com um teste real antes de comprar.
