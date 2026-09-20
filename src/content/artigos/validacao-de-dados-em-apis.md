---
title: "Validação de dados em APIs: guia prático"
description: "Onde validar (borda, domínio, armazenamento), como retornar erros consistentes e como testar entradas inválidas e maliciosas."
pubDate: "2026-09-20"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: "desenvolvimento"
tags:
  - "Back-end"
draft: false
sources:
  - label: "spec.openapis.org"
    url: "https://spec.openapis.org/oas/latest.html"
  - label: "developer.mozilla.org"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
---
Validação é a fronteira entre a entrada externa, que você não controla, e a lógica interna, que precisa de dados confiáveis. Uma API sem validação sólida não é só frágil — é insegura, porque cada dado não verificado é uma suposição que um usuário mal-intencionado pode quebrar. O objetivo deste guia é claro: rejeitar dados inválidos de forma previsível, segura e explicável, sem vazar detalhes internos.

## Valide em três camadas

Um erro comum é concentrar toda a validação num único ponto. Na prática, cada camada valida uma coisa diferente:

- **Na borda (formato):** o payload tem os campos certos, com os tipos, formatos e limites esperados? É a primeira barreira e deve rejeitar rápido, antes de qualquer lógica.
- **No domínio (regra de negócio):** o dado faz sentido para o negócio? Um valor de estoque não pode ser negativo; uma data de entrega não pode ser anterior à do pedido. Formato correto não garante regra correta.
- **No armazenamento (invariantes):** restrições que o banco garante mesmo sob concorrência — unicidade, chaves estrangeiras, não-nulos. É a última linha de defesa contra estados impossíveis.

Pular qualquer camada deixa uma brecha: validar só o formato aceita um pedido de negócio inválido; validar só no código deixa o banco inconsistente sob concorrência.

## Defina o que é válido, explicitamente

Para cada campo, declare tipo, obrigatoriedade, limites (mínimo, máximo, tamanho), formato (data, e-mail, padrão) e valores permitidos quando for um conjunto fechado. Prefira listas de permissão (o que é aceito) a listas de bloqueio (o que é recusado) — é mais seguro enumerar o válido do que tentar prever todo o inválido. Normalize a entrada (remover espaços, padronizar caixa) apenas quando a regra for explícita e documentada; normalização silenciosa esconde bugs.

## Retorne erros consistentes

A resposta de erro é parte do contrato da API. Diferencie claramente os casos com o status HTTP correto: entrada inválida (400/422), não autenticado (401), sem permissão (403), não encontrado (404) e falha do servidor (500). A mensagem deve dizer o que está errado o suficiente para o cliente corrigir — qual campo, qual regra — sem expor detalhes internos como stack traces, nomes de tabela ou consultas. Um formato de erro consistente em toda a API poupa horas de quem a consome.

## Versione mudanças incompatíveis

Adicionar uma validação mais estrita quebra clientes que antes passavam. Trate isso como mudança de contrato: se a nova regra rejeita o que antes era aceito, ela precisa de uma nova versão da API ou de um período de transição comunicado. Relaxar uma regra costuma ser compatível; apertar quase nunca é.

## Teste o que costuma quebrar

Uma suíte de validação decente cobre muito além do caminho feliz:

- entradas **ausentes** (campo obrigatório faltando);
- entradas **extremas** (no limite e além dele — string enorme, número negativo, zero);
- entradas **duplicadas** (a mesma chave chegando duas vezes);
- entradas **maliciosas** (injeção, tipos trocados, payload aninhado profundo).

Cada um desses casos deve produzir o status e a mensagem certos, sem efeito colateral. Uma API que só foi testada com dados bem-comportados falha exatamente onde é mais caro.

## Erro comum: confiar na validação do cliente

A validação no front-end melhora a experiência — avisa o usuário na hora —, mas não é segurança. Qualquer um pode enviar uma requisição direto à API, sem passar pela sua interface, com qualquer payload. Por isso a regra é absoluta: valide sempre no servidor, mesmo quando o cliente já validou. A validação do cliente é conveniência; a do servidor é a que protege os dados e a lógica. Tratar a validação do front-end como suficiente é uma das falhas de segurança mais comuns em aplicações web.

## Próximo passo

Validação anda junto de [idempotência em APIs e webhooks](/artigos/idempotencia-em-apis-e-webhooks/), que protege contra a repetição de operações válidas. Para o contexto, veja o [hub de back-end](/desenvolvimento/backend/).
