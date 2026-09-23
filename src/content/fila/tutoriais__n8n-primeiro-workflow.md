---
title: "Primeiro workflow no n8n: tutorial do zero"
description: "Crie um workflow pequeno no n8n com trigger, transformação, validação, saída observável e tratamento de falhas."
pubDate: "2026-09-22"
author: "redacao"
category: "Automação"
silo: automacao
kind: "tutorial"
canonicalPath: "/tutoriais/n8n-primeiro-workflow/"
primaryKeyword: "primeiro workflow n8n"
draft: false
sources:
  - "https://docs.n8n.io/getting-started/"
  - "https://docs.n8n.io/flow-logic/error-handling/"
---

Este tutorial cria um workflow pequeno para receber uma entrada de teste, validar os campos, transformar um valor e produzir uma saída que possa ser conferida. O objetivo é aprender o ciclo de execução e recuperação; não conectar um processo crítico no primeiro dia.

Antes de começar, escolha uma instalação de teste, registre a versão que será usada e não coloque credenciais reais em screenshots ou dados de exemplo. O fluxo deve ser repetível sem enviar mensagens, cobrar serviços ou alterar dados de produção.

## Resultado esperado

Ao final, o workflow deve:

- receber um objeto com `name` e `email`;
- recusar entrada sem os campos obrigatórios;
- normalizar o nome e validar o formato básico do email;
- retornar um objeto com `valid`, `name` e `reason`;
- registrar uma execução que possa ser investigada.

## 1. Crie o trigger

Abra um workflow novo e use um trigger manual ou equivalente de teste. Insira uma entrada mínima:

```json
{
  "name": "Ana Silva",
  "email": "ana@example.com"
}
```

Execute somente o trigger e inspecione o payload recebido. Confirme nomes, tipos e o caminho em que os dados ficam disponíveis para o próximo nó. Se o payload já chega diferente do contrato, corrija o contrato antes de adicionar lógica.

## 2. Valide antes de transformar

Adicione uma etapa que confirme `name` e `email`. Teste três entradas: válida, sem email e com email inválido. A saída de validação deve ser explícita:

```json
{
  "valid": false,
  "reason": "email ausente"
}
```

Não continue para a etapa de efeito quando `valid` for `false`. Essa separação evita que uma transformação esconda a causa do erro.

## 3. Transforme o dado

Para uma entrada válida, remova espaços extras do nome e normalize a forma que será usada na saída. Mantenha o valor original quando ele for necessário para auditoria. Uma transformação deve ser determinística e fácil de testar; não use IA para uma regra simples.

## 4. Inspecione a execução

Execute o caminho válido e o inválido. Registre entrada, saída, tempo e erro sem incluir segredo ou dado pessoal desnecessário. Nomeie o workflow com sua finalidade e documente o contrato no próprio projeto.

## 5. Trate falhas

Antes de publicar, provoque uma falha: retire um campo, produza um valor inesperado ou interrompa uma dependência de teste. Confirme que a execução aparece como falha, que existe alerta ou responsável e que o workflow pode ser reexecutado sem duplicar efeito.

O [tratamento de erros do n8n](https://docs.n8n.io/flow-logic/error-handling/) deve ser conferido para a versão instalada. Retry só é seguro quando a operação é idempotente ou não produz efeito externo.

## 6. Checklist de publicação

- trigger e contrato documentados;
- entrada inválida testada;
- saída esperada conferida;
- credenciais de teste separadas;
- logs sem segredos;
- erro provocado e observado;
- responsável definido;
- rollback ou desativação conhecidos.

## Próximo passo

Depois deste fluxo, avance para [webhook e API](/tutoriais/automacao-n8n-webhook-api/) e para o [hub de n8n](/automacao/n8n/). Só conecte sistemas reais quando o caminho de erro e o reprocessamento estiverem documentados.
