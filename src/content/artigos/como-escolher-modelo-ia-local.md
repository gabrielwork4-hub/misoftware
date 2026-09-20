---
title: "Como escolher um modelo de IA local"
description: "Escolha um modelo local pela tarefa, hardware, licença e qualidade — com um método de teste objetivo em vez de tamanho ou popularidade."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "IA & Modelos"
silo: "ia"
tags:
  - "IA local"
draft: false
sources:
  - label: "ollama.com"
    url: "https://ollama.com/library"
  - label: "huggingface.co"
    url: "https://huggingface.co/docs/hub/models-the-hub"
---
O modelo local certo não é o maior, o mais novo nem o mais comentado: é o que resolve a sua tarefa dentro dos limites de hardware, licença e qualidade aceitável. Escolher por benchmark genérico ou por popularidade é como comprar um carro pela velocidade máxima sem olhar se cabe na garagem. Este guia dá um método para decidir com base no seu caso, e não no hype do mês.

## Passo 1 — Defina a tarefa antes do modelo

A tarefa determina quase tudo. Você precisa conversar, resumir, gerar código, extrair dados estruturados ou interpretar imagens? Cada uma tem exigências diferentes de tamanho de contexto, idioma, formato de saída e latência. Um modelo excelente para código pode ser medíocre para resumir em português; um ótimo para chat pode falhar em extração estruturada. Escreva a tarefa e seus requisitos antes de olhar qualquer modelo.

## Passo 2 — Conheça as três restrições

Três limites cercam a escolha:

- **Hardware:** a memória de GPU (VRAM) decide qual modelo cabe, e a quantização muda muito essa conta. Sem GPU adequada, a inferência na CPU é lenta.
- **Licença:** nem todo modelo "aberto" permite uso comercial. Leia os termos, a origem dos pesos e as restrições de uso — isso é um requisito, não um detalhe.
- **Qualidade aceitável:** defina o mínimo que a tarefa tolera. Perfeição raramente é necessária; consistência quase sempre é.

## Passo 3 — Teste com o seu material

Aqui está a parte que a maioria pula. Não confie em ranking: monte um conjunto pequeno de exemplos reais, anonimizados, e uma rubrica objetiva (o que conta como resposta boa). Rode dois ou três candidatos contra exatamente os mesmos casos e meça:

- **Qualidade** no seu idioma e domínio, pela rubrica.
- **Velocidade** (tokens por segundo, tempo até a primeira resposta).
- **Memória** consumida — cabe com folga no seu hardware?
- **Estabilidade** sob entradas difíceis (texto longo, formato inesperado).

O modelo que ganha no seu teste pode não ser o que lidera o benchmark público — e é o seu teste que importa.

## Passo 4 — Verifique runtime e quantização

O mesmo modelo vem em várias quantizações (versões comprimidas que trocam um pouco de qualidade por muito menos memória). Confirme qual quantização cabe no seu hardware e é compatível com o runtime que você vai usar. Uma quantização agressiva pode economizar VRAM ao custo de qualidade perceptível — teste a versão que você realmente vai rodar, não a versão completa.

## Passo 5 — Planeje o ciclo de vida

Escolher o modelo é o começo. Planeje a operação: como você vai atualizar quando sair uma versão melhor, como monitorar a qualidade ao longo do tempo e como remover um modelo que não serve mais. Um modelo local não é uma decisão única — é um componente que exige manutenção, como qualquer dependência.

## Ponto de partida por tarefa

Como orientação inicial (a validar sempre com o seu teste, e sujeita à evolução rápida dos modelos — corte de 2026-09): para chat e resumo em português, modelos na faixa de 7 a 14 bilhões de parâmetros costumam dar um equilíbrio razoável entre qualidade e hardware acessível. Para geração de código, vale priorizar modelos treinados especificamente para código, mesmo que menores, em vez de um modelo geral maior. Para extração estruturada, o que importa é a aderência ao formato pedido, que se testa melhor do que se prevê. Trate esses pontos como ponto de partida da sua avaliação, não como resposta — o modelo certo é o que passa no seu conjunto de testes.

## Próximo passo

Para o contexto e o hardware, veja o [hub de IA local](/ia/ia-local/) e o [hub de hardware para IA local](/ferramentas/hardware/). Para código especificamente, o comparativo de [modelos de IA local para programação](/comparativos/modelos-ia-local-para-programacao/).
