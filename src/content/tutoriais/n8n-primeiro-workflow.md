---
title: "Primeiro workflow no n8n: tutorial do zero"
description: "Crie um workflow no n8n com trigger, dados, validação, credenciais, erros e publicação."
pubDate: "2026-09-20"
author: "gabriel-barboza"
difficulty: "Intermediário"
silo: "automacao"
tags:
  - "n8n"
draft: false
---
O objetivo deste tutorial não é impressionar com um fluxo complexo, e sim aprender a construir um workflow que você consegue observar, testar e recuperar. Vamos montar algo pequeno de ponta a ponta: receber uma entrada, transformar os dados, validar o resultado e produzir uma saída — o esqueleto de quase toda automação útil.

## Antes de começar

Você precisa de uma instância do n8n (a nuvem oficial ou uma local via Docker), uma credencial de teste para o serviço de saída (nunca a de produção) e clareza sobre o resultado esperado. Escreva em uma frase o que o fluxo deve fazer: "quando chegar X, transformar em Y e enviar para Z". Sem essa frase, o workflow vira uma coleção de nós sem critério de sucesso.

## Passo 1 — Escolha o trigger

Todo workflow começa por um evento. Para o primeiro, use um trigger manual ou um nó de agenda (Schedule) — eles são previsíveis e fáceis de testar. Deixe webhooks e triggers de apps para depois, quando o ciclo básico já estiver claro. Execute o trigger uma vez e observe o painel de execução: é ali que você vai depurar tudo.

## Passo 2 — Inspecione o payload

Antes de transformar qualquer coisa, olhe o dado que entrou. O n8n mostra a saída de cada nó em JSON. Entenda a estrutura real — nomes de campos, tipos, o que pode vir vazio — em vez de supor. A maior parte dos bugs de automação nasce de uma suposição errada sobre o formato da entrada.

## Passo 3 — Transforme os campos

Adicione um nó de transformação (Edit Fields / Set, ou um nó de código para casos mais complexos) e produza apenas os campos que a saída precisa. Mantenha a transformação enxuta e nomeada com clareza. Se precisar de lógica, prefira uma expressão simples e legível a um bloco de código que ninguém vai entender em três meses.

## Passo 4 — Valide antes de agir

Insira uma verificação antes do nó que produz efeito. Um nó IF (ou Filter) que barra entradas vazias, incompletas ou fora do formato esperado evita que lixo chegue ao serviço final. Defina explicitamente o que acontece com o que não passa: descartar, registrar ou encaminhar para revisão. Teste com três entradas de propósito: uma válida, uma vazia e uma malformada.

## Passo 5 — Produza a saída com credenciais seguras

Configure o nó de saída (enviar um e-mail, gravar numa planilha, chamar uma API) usando uma credencial de teste. Nunca exponha segredos reais em capturas de tela ou exemplos. Rode o fluxo completo e confirme, no destino, que o resultado chegou como esperado.

## Passo 6 — Prepare a operação

Um workflow só está pronto quando existe forma segura de recuperar uma falha. Antes de publicar, configure: timeout nos nós externos, uma política de retry limitada, log suficiente para investigar, um alerta quando o fluxo falhar e um responsável nomeado. Provoque uma falha de propósito — derrube a credencial ou envie um payload inválido — e confirme que o fluxo se comporta como você definiu.

## Erros comuns no primeiro workflow

- **Testar só o caminho feliz:** o fluxo quebra na primeira entrada inesperada.
- **Segredos no lugar errado:** use o cofre de credenciais do n8n, nunca campos de texto.
- **Sem log:** quando falha, ninguém sabe por quê. Registre o suficiente para reconstruir a execução.

## Próximo passo

Com o esqueleto funcionando, avance para [automação n8n com IA](/tutoriais/automacao-n8n-com-ia/) e [webhook e API no n8n](/tutoriais/automacao-n8n-webhook-api/). Para o contexto de operação, veja o [hub de n8n](/automacao/n8n/) e o guia de [workflows operacionais](/automacao/workflows/).
