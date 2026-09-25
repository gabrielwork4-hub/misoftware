---
title: "Validação de Dados em APIs: schemas e erros"
description: "Como projetar validação de dados em APIs: onde validar cada regra, schemas explícitos, erros consistentes e testes para entradas ausentes e extremas."
pubDate: "2026-09-22"
author: "gabriel-barboza"
category: "Desenvolvimento"
silo: desenvolvimento
kind: "artigo"
canonicalPath: "/artigos/validacao-de-dados-em-apis/"
primaryKeyword: "validação de dados em APIs"
draft: false
sources:
  - "https://spec.openapis.org/oas/latest.html"
  - "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
---

Validação é a fronteira entre a entrada externa e a lógica interna. Todo dado que cruza essa fronteira é suspeito até prova em contrário — e o endpoint deve rejeitar o que é inválido de forma previsível, segura e explicável. Validação frouxa não causa só bugs; causa vulnerabilidades, dados corrompidos e falhas que só aparecem semanas depois, longe da causa.

## Valide em camadas, cada regra no seu lugar

Nem toda validação pertence ao mesmo lugar. Distribua as verificações pela camada certa:

| Camada | O que valida | Exemplo |
|---|---|---|
| Borda | formato e tipo | "idade" é um inteiro? |
| Domínio | regra de negócio | idade permite este cadastro? |
| Armazenamento | invariantes | unicidade, integridade referencial |

Validar formato no domínio espalha regras; validar negócio na borda acopla a API à lógica. Cada camada tem sua responsabilidade.

## Schema explícito é a base

Defina tipos, obrigatoriedade, limites, formatos e valores permitidos — e rejeite o que não bate. Especificações como a [OpenAPI](https://spec.openapis.org/oas/latest.html) permitem descrever esse contrato de forma legível por humanos e máquinas. Normalize a entrada (aparar espaços, padronizar caixa) apenas quando a regra for explícita; normalização implícita esconde erros do cliente.

## Erros consistentes, sem vazar detalhes

Um bom erro ajuda o cliente a corrigir sem revelar o interior do sistema. Use [status HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) coerentes e diferencie os casos:

- **400** entrada inválida — diga qual campo e por quê;
- **401 / 403** não autenticado / não autorizado — sem revelar se o recurso existe;
- **404** não encontrado;
- **422** entendido, mas viola regra de negócio;
- **500** falha interna — mensagem genérica, detalhe no log, não na resposta.

Mensagens que expõem stack trace, query ou caminho de arquivo são presente para um atacante.

## Evolua sem quebrar quem consome

Versione mudanças incompatíveis e mantenha uma suíte que teste entradas **válidas, inválidas, ausentes, extremas, duplicadas e maliciosas**. É essa suíte que dá confiança para evoluir. Quando a operação pode se repetir, a validação anda junto da [idempotência](/artigos/idempotencia-em-apis-e-webhooks/).

## Próximo passo

Contrato validado, torne as integrações seguras contra repetição com [idempotência em APIs e webhooks](/artigos/idempotencia-em-apis-e-webhooks/) e instrumente o serviço com [observabilidade](/artigos/observabilidade-para-aplicacoes-web/). Volte ao hub de [back-end](/desenvolvimento/backend/).
