---
title: "Microsoft-Decision-1: lançamento, preço e o que muda"
description: "Microsoft lançou o Decision-1, modelo que escolhe entre opções fixas em vez de gerar texto. Veja preço, benchmarks, latência e quando usar em agentes."
pubDate: "2026-10-12"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/microsoft-decision-1-lancamento-preco-o-que-muda/"
primaryKeyword: "microsoft-decision-1"
draft: false
sources:
  - "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-decision-1-in-microsoft-foundry-for-decision-and-classific/4562742"
  - "https://commandline.microsoft.com/microsoft-decision-1-model-foundry/"
  - "https://ai.azure.com/catalog/models/Microsoft-Decision-1"
  - "https://openrouter.ai/microsoft/microsoft-decision-1"
  - "https://www.marktechpost.com/2026/10/09/microsoft-ai-releases-microsoft-decision-1-a-qwen3-5-9b-decision-scoring-model/"
faq:
  - q: "O que é o Microsoft-Decision-1?"
    a: "É um modelo de decisão da Microsoft, lançado em 9 de outubro de 2026, que escolhe entre opções predefinidas e devolve uma probabilidade calibrada para cada uma, em JSON. Ele não gera texto livre."
  - q: "Quanto custa o Microsoft-Decision-1?"
    a: "US$ 0,042 por milhão de tokens de entrada nas implantações Datazone dos EUA e da UE, segundo a Microsoft. Os tokens de saída não são cobrados."
  - q: "O Microsoft-Decision-1 faz parte da família Phi?"
    a: "Não. Ele foi construído sobre o Qwen3.5-9B, da Alibaba, e não tem pesos abertos divulgados. A família Phi é a linha de modelos pequenos e abertos da Microsoft sob licença MIT."
  - q: "Para que serve um decision model?"
    a: "Para tarefas com resposta fechada: classificar pedidos, rotear para o modelo ou ferramenta certa, verificar se uma resposta atende a um critério e decidir se um fluxo continua, para ou vai para revisão humana."
  - q: "Posso usar o Microsoft-Decision-1 com o SDK da OpenAI?"
    a: "Não pelo endpoint de chat. No OpenRouter, o modelo funciona pela Decisions API, e a página do modelo avisa que SDKs de *chat completions* não funcionam com ele. No Foundry, a implantação segue o fluxo do catálogo de modelos."
---

A Microsoft lançou em 9 de outubro de 2026 o **Microsoft-Decision-1**, um modelo que não gera texto: ele recebe uma situação, uma pergunta e uma lista fechada de opções, e devolve uma probabilidade calibrada para cada opção, em JSON, numa única passada. O anúncio saiu no [blog do Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-decision-1-in-microsoft-foundry-for-decision-and-classific/4562742) e no [Command Line, blog técnico da Microsoft](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/).

O que muda para quem constrói agentes e automações: passos de classificação, roteamento, verificação e controle de fluxo, que hoje costumam ir para um LLM generalista, ganham um modelo dedicado que custa **US$ 0,042 por milhão de tokens de entrada, com saída sem custo**, e que a Microsoft mede em **85 ms de latência mediana**. O modelo está em **prévia pública** no catálogo do Microsoft Foundry e também aparece no [OpenRouter](https://openrouter.ai/microsoft/microsoft-decision-1).

## O que é o Microsoft-Decision-1

O Microsoft-Decision-1 é um **decision model** (modelo de decisão): um modelo treinado para escolher entre respostas predefinidas, e não para escrever respostas abertas. Segundo a Microsoft, ele foi construído sobre o **Qwen3.5-9B**, modelo aberto da Alibaba, e passou por pós-treinamento para pontuar opções em uma única passada.

Na prática, o modelo responde perguntas do tipo "sim ou não", múltipla escolha, nota em escala, classificação em categorias e checagem por rubrica. O [card do modelo no Foundry](https://ai.azure.com/catalog/models/Microsoft-Decision-1) lista seis usos previstos:

- avaliação de saídas de IA (o papel de "juiz");
- classificação e roteamento;
- guardrails de agentes (barreiras que bloqueiam ou desviam ações);
- triagem de segurança de conteúdo;
- relevância de busca e de documentos;
- automação baseada em confiança (agir sozinho só acima de um limiar de probabilidade).

Um ponto importante: o modelo **não gera explicações nem justificativas**. Ele devolve as opções com suas probabilidades, e a lógica do que fazer com elas fica na sua aplicação.

## Especificações confirmadas

| Item | Valor | Fonte |
|---|---|---|
| Data de lançamento | 9/10/2026 | Blog do Foundry, OpenRouter |
| Base | Qwen3.5-9B (pós-treinado) | Blog do Foundry, Command Line |
| Janela de contexto | 32.768 tokens | Card no Foundry |
| Entrada / saída | texto / JSON | Card no Foundry |
| Modalidades | só texto | Card no Foundry |
| Status | prévia pública | Blog do Foundry, card no Foundry |
| Preço de entrada | US$ 0,042 por 1M tokens (Datazone EUA e UE) | Blog do Foundry |
| Preço de saída | sem custo ("N/A" na tabela da Microsoft) | Blog do Foundry, OpenRouter |
| Onde usar | Microsoft Foundry e OpenRouter | Command Line |
| Pesos abertos | não divulgados | não confirmado em fonte primária |

A tabela de preços do blog do Foundry mostra o mesmo valor para as implantações *US Datazone* e *EU Datazone*. A Microsoft não publicou preço específico para outras regiões.

## Benchmarks divulgados pela Microsoft

Os números abaixo são da própria Microsoft, publicados no [Command Line](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/). A empresa diz ter avaliado o modelo em **36 benchmarks**, somando **147.137 perguntas** mantidas fora do treino.

| Modelo | Acurácia média | Calibração | Latência p50 |
|---|---|---|---|
| **Microsoft-Decision-1** | **83,5%** | 92,2 | **85 ms** |
| Jev 1.13.0 | 82,3% | 93,7 | 240 ms |
| Quyet-1.0-Large | 81,9% | 93,1 | 380 ms |
| Surogate Rune 26B-A4B | 79,7% | 91,8 | 380 ms |
| GPT-6 Luna Decisions | 79,4% | 89,9 | 300 ms |
| deck-31B | 77,8% | 83,5 | 400 ms |
| H2O-Lightning-4B v1.1 | 77,2% | 91,8 | 210 ms |
| Strands-Decider 2B | 54,8% | — | — |
| GPT-6 Sol | — | — | 3,01 s |

Três leituras rápidas da tabela:

1. **Acurácia:** o Decision-1 lidera na média, mas a vantagem sobre o segundo colocado (Jev 1.13.0) é de 1,2 ponto percentual.
2. **Calibração:** calibração mede se a probabilidade que o modelo diz ter bate com a taxa real de acerto. Aqui o Decision-1 **não lidera**: Jev 1.13.0 (93,7) e Quyet-1.0-Large (93,1) ficam à frente. Isso pesa se você pretende automatizar decisões com base em limiar de confiança.
3. **Latência:** o p50 de 85 ms e o p95 de 125 ms são o argumento mais forte. A Microsoft diz que isso é 4,5 vezes mais rápido que o Quyet-1.0-Large e 35 vezes mais rápido que o GPT-6 Sol.

A Microsoft também informa que o modelo muda de decisão em **1,3% das perturbações**, na média de oito tipos de perturbação, e que não mudou nenhuma vez quando as descrições das opções foram parafraseadas, invertidas ou embaralhadas. Em segurança, o modelo foi testado em **5.250 requisições de 11 benchmarks** (conteúdo nocivo, *jailbreak* e *prompt injection*); a empresa diz que ele recusou os comportamentos nocivos, mas não publicou uma nota numérica.

### Ressalva sobre a comparação de latência

A Microsoft afirma que os números dos concorrentes usam a mediana ajustada do JevBench v1.6.1. Segundo reportagem do [MarkTechPost](https://www.marktechpost.com/2026/10/09/microsoft-ai-releases-microsoft-decision-1-a-qwen3-5-9b-decision-scoring-model/), o card do H2O-Lightning-4B contesta a comparação: diz que o ajuste dobra o tempo medido e soma 0,15 s, e que a mediana medida do modelo da H2O é de 29 ms, não 210 ms. Não verificamos essa contestação diretamente no card da H2O; trate a comparação de latência entre fornecedores como **não confirmada de forma independente**.

## Casos de uso internos citados pela Microsoft

A Microsoft citou testes dentro da própria empresa:

- **Xbox Research:** classificou mais de 10 mil comentários e avaliações abertos em temas definidos pelos pesquisadores. O Command Line diz que o modelo rodou **mais de 14 vezes mais rápido e 200 vezes mais barato** que o GPT-6 Sol, com qualidade competitiva. Em escala de 1 milhão de textos, a estimativa da Microsoft é de cerca de **US$ 2.434 com GPT-6 Sol contra cerca de US$ 11 com o Decision-1**.
- **Copilot:** times avaliaram o modelo para medir a qualidade das respostas do Copilot.
- **Microsoft Discovery:** uso para replanejamento adaptativo.

Há uma divergência entre as duas fontes da Microsoft. O blog do Foundry descreve o caso do Xbox como "qualidade competitiva com o GPT-5, rodando 80 a 100 vezes mais rápido", enquanto o Command Line fala em "14 vezes mais rápido" e compara com o GPT-6 Sol. Os dois textos são da Microsoft; até a publicação desta notícia, a empresa não havia esclarecido a diferença.

## O que muda para quem constrói agentes e automações

A tese da Microsoft é que boa parte das chamadas de um sistema com IA não são geração de texto, e sim decisões: para onde mandar o pedido, qual ferramenta chamar, se a resposta passa no critério de qualidade, se o fluxo continua, tenta de novo, para ou vai para revisão humana.

Hoje é comum usar o mesmo LLM grande para tudo isso. O Decision-1 propõe separar as camadas:

| Etapa do sistema | Tipo de modelo sugerido | Exemplo |
|---|---|---|
| Entender e redigir | LLM generativo | escrever a resposta ao cliente |
| Planejar e raciocinar | modelo de raciocínio | quebrar uma tarefa em passos |
| Decidir entre opções fixas | decision model | classificar o pedido como cobrança, problema técnico ou acesso à conta |

O exemplo do último item é o mesmo que a Microsoft usa no anúncio: um sistema de suporte que classifica o pedido em uma de três categorias, ou um agente que avalia uma resposta contra uma rubrica e decide se aceita, revisa ou pede revisão.

Se você já trabalha com [agentes de IA](/ia/agentes/), o encaixe mais direto é no papel de **juiz** (o padrão conhecido como *LLM as a judge*) e de **roteador**. Como o modelo devolve probabilidades, dá para definir limiares: acima de 0,9 o fluxo segue sozinho, abaixo disso vai para revisão. A própria Microsoft recomenda validar a calibração com os seus dados antes de automatizar com base nesses limiares; o roteiro do artigo [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) ajuda a definir esses critérios. Para comparar com os modelos generativos que fariam o mesmo papel, veja o hub de [modelos de linguagem](/ia/modelos-de-linguagem/).

## Limites e usos fora de escopo

O card do Foundry é explícito sobre o que o modelo **não** faz:

- geração de texto, perguntas abertas, conversa, tradução e resumo;
- tarefas sem uma pergunta fechada e um conjunto definido de opções;
- tarefas que exigem conhecimento que não está na entrada;
- servir como **único** decisor automatizado em decisões importantes sobre pessoas (crédito, emprego, moradia, seguro, educação, saúde, direitos legais);
- vigilância, criação de perfis, rastreamento de indivíduos e supressão de discurso lícito.

Também é só texto: não aceita nem produz imagem, áudio ou vídeo.

Segundo a listagem do OpenRouter, os pesos do modelo são atualizados continuamente, enquanto o formato da API permanece o mesmo. Na prática, isso significa que o comportamento pode mudar sem troca de versão; vale manter um conjunto de casos de teste e rodá-lo periodicamente.

## Como testar

1. **No Foundry:** abra o [Microsoft-Decision-1 no catálogo do Foundry](https://ai.azure.com/catalog/models/Microsoft-Decision-1), implante na sua assinatura e teste no *playground*. O blog da Microsoft orienta configurar as variáveis `FOUNDRY_BASE_URL`, `FOUNDRY_API_KEY` e `FOUNDRY_MODEL` e manter as credenciais fora do código.
2. **No OpenRouter:** o modelo roda pela **Decisions API** do OpenRouter, não pelo endpoint de *chat completions* compatível com a OpenAI. Segundo a página do modelo, SDKs de chat não funcionam com ele. O OpenRouter lista um único provedor (Azure), com latência p50 de 0,23 s.
3. **Monte um conjunto rotulado:** a recomendação da Microsoft é comparar acurácia (incluindo casos ambíguos), latência sob o tráfego esperado e custo por decisão concluída, usando exemplos reais do seu fluxo. Para estruturar esse teste, o método do artigo [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/) se aplica quase sem mudança.

A Microsoft não publicou, até agora, um exemplo completo de requisição e resposta da API no texto do anúncio; o bloco de código do blog do Foundry está vazio na versão publicada. Por isso não reproduzimos aqui um formato de chamada.

## Como o Decision-1 se relaciona com o Phi e o Qwen

O Decision-1 **não faz parte da família Phi**, a linha de modelos pequenos e abertos da Microsoft sob licença MIT que acompanhamos na página [Microsoft Phi](/ferramentas/modelos/microsoft-phi/). As diferenças principais:

| | Phi-4 (família) | Microsoft-Decision-1 |
|---|---|---|
| Função | gerar texto (SLM) | escolher entre opções fixas |
| Base | arquitetura própria da Microsoft | Qwen3.5-9B, da Alibaba |
| Pesos | abertos (MIT) | não divulgados |
| Onde roda | local, edge ou nuvem | Foundry e OpenRouter |

O fato de a base ser o Qwen3.5-9B reforça o peso dos modelos abertos da Alibaba como ponto de partida para modelos especializados (veja a página do [Qwen](/ferramentas/modelos/qwen/)). A Microsoft diz que futuras versões do Decision-1 serão reconstruídas sobre modelos da OpenAI e sobre os modelos MAI, da própria Microsoft.

## O que ainda não está confirmado

- **Data de disponibilidade geral (GA):** o blog do Foundry e o card falam em prévia pública. Reportagens que descrevem o modelo como "geralmente disponível" não batem com a fonte primária.
- **Número de parâmetros do modelo final:** a Microsoft cita a base (Qwen3.5-9B), mas não detalha o tamanho após o pós-treinamento.
- **Licença:** o card do Foundry não informa licença; não há pesos para download anunciados.
- **Contestação de latência da H2O:** relatada pelo MarkTechPost, sem verificação direta nossa.
- **Divergência no caso do Xbox:** "80 a 100 vezes mais rápido que o GPT-5" (blog do Foundry) contra "14 vezes mais rápido que o GPT-6 Sol" (Command Line).
- **Disponibilidade em regiões fora dos Datazones dos EUA e da UE**, incluindo Brasil: não informada.
