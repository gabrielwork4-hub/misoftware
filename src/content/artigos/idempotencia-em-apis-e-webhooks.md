---
title: "Idempotência em APIs e webhooks: guia prático"
description: "O que é idempotência, como implementar chave de idempotência, tratar concorrência e reprocessar sem duplicar efeitos."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "Back-end"
draft: false
sources:
  - label: "docs.stripe.com"
    url: "https://docs.stripe.com/api/idempotent_requests"
  - label: "developer.mozilla.org"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
---
Idempotência é a propriedade de uma operação que pode ser repetida sem mudar o resultado além da primeira vez. Numa integração, ela é o que impede que uma reentrega de webhook vire uma cobrança dobrada, ou que um clique duplo crie dois pedidos. Não é um detalhe avançado: é o requisito básico de qualquer operação que produz efeito e pode ser chamada mais de uma vez — o que, na prática, é quase toda operação sob rede.

## Por que a repetição acontece

Redes falham no pior momento: o efeito é aplicado, mas a resposta se perde no caminho de volta. Do ponto de vista de quem chamou, a operação "falhou", então ele repete. Webhooks são reenviados pelo mesmo motivo — o produtor não recebeu o 200 no tempo esperado. Você não pode evitar a repetição; pode apenas torná-la segura. Vale notar que alguns métodos HTTP já são idempotentes por definição (GET, PUT, DELETE), enquanto POST não é — e é justamente o POST que costuma criar efeitos.

## A chave de idempotência

O mecanismo central é uma chave que identifica unicamente a intenção da operação. Em webhooks, é o identificador do evento; em APIs, é uma chave que o cliente gera e envia num header. O servidor a usa assim:

1. Recebe a requisição com a chave.
2. Verifica se já processou aquela chave.
3. Se **não**, executa o efeito e grava o resultado associado à chave.
4. Se **sim**, não executa de novo — retorna o resultado já gravado.

O ponto crítico: a verificação e a gravação precisam acontecer antes (ou junto) do efeito, não depois. Verificar a chave e só então, num segundo momento, aplicar o efeito abre uma janela onde duas requisições passam pela verificação antes de qualquer uma gravar.

## Concorrência: o caso que quebra implementações ingênuas

Duas requisições com a mesma chave podem chegar ao mesmo tempo. Se ambas lerem "ainda não processei" antes de qualquer uma gravar, ambas executam o efeito — exatamente o que a idempotência deveria evitar. A proteção vem do armazenamento: use uma restrição de unicidade na chave (um índice único no banco) ou um lock, de modo que a segunda gravação falhe e o segundo processamento seja abortado. Definir o comportamento para requisições concorrentes é o que separa uma implementação que funciona no teste de uma que funciona sob carga real.

## Retenção e limpeza

A chave não precisa viver para sempre. Defina uma janela de retenção coerente com o tempo máximo de retry do produtor (horas ou dias, não anos) e limpe as chaves antigas. Guardar o resultado associado à chave permite responder a uma reentrega tardia com a mesma resposta original, em vez de um erro.

## Cenário de teste que você deve rodar

Simule o pior caso: aplique o efeito, descarte a resposta e reenvie a requisição com a mesma chave. O sistema deve reconhecer a chave, recuperar o resultado gravado e **não** criar um segundo efeito. Depois, teste duas requisições simultâneas com a mesma chave e confirme que apenas uma produz efeito. Se esses dois testes passam, sua operação é idempotente de verdade — e não só no caminho feliz. Um terceiro teste vale para efeitos com valor: reenvie a mesma chave com um corpo ligeiramente diferente e decida o comportamento — a maioria das implementações robustas ignora o novo corpo e retorna o resultado original, tratando a chave, não o payload, como a identidade da operação.

## Próximo passo

Para o desenho de eventos, veja [webhooks: o que são e como projetar](/artigos/webhooks-o-que-sao-e-como-projetar/); para a implementação, o [tutorial de webhook e API no n8n](/tutoriais/automacao-n8n-webhook-api/). Para o contexto, o [hub de back-end](/desenvolvimento/backend/).
