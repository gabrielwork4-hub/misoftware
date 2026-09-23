---
title: "Automação n8n com IA: workflow seguro e rastreável"
description: "Use IA em um workflow n8n com saída estruturada, validação, aprovação humana, logs e controle de custos."
pubDate: "2026-09-22"
author: "redacao"
category: "Automação"
silo: automacao
kind: "tutorial"
canonicalPath: "/tutoriais/automacao-n8n-com-ia/"
primaryKeyword: "automação n8n com IA"
draft: true
sources:
  - "https://docs.n8n.io/advanced-ai/"
  - "https://docs.n8n.io/"
  - "https://platform.openai.com/docs/guides/structured-outputs"
---

Este tutorial adiciona IA a uma única etapa de um workflow n8n para classificar uma solicitação e produzir uma saída estruturada. A IA não enviará mensagens nem alterará dados: uma etapa posterior valida o resultado e encaminha casos ambíguos para aprovação humana.

## O que será construído

Entrada:

```json
{
  "id": "ticket_123",
  "text": "Não consigo acessar minha conta desde ontem"
}
```

Saída esperada:

```json
{
  "category": "access",
  "priority": "high",
  "confidence": 0.86,
  "needs_review": false,
  "reason": "bloqueio de acesso informado"
}
```

Os valores do exemplo são ilustrativos. Antes de publicar, defina categorias, limiar de revisão e conjunto de casos reais.

## 1. Prepare o workflow

Comece com um trigger manual e dados sanitizados. Registre modelo, versão, parâmetros, custo estimado e data do teste. Separe credenciais de desenvolvimento e produção.

Antes de chamar o modelo, valide `id` e `text`. Rejeite entrada vazia e limite tamanho para evitar custo inesperado. Não envie segredo, token ou dado pessoal que não seja necessário para a classificação.

## 2. Especifique a tarefa

O prompt deve informar objetivo, categorias válidas, formato, critérios de dúvida e comportamento para informação insuficiente. Diga explicitamente que o modelo não pode inventar campos nem executar ações.

Use saída estruturada quando o provedor e o nó suportarem esse recurso. Schema reduz erros de formato, mas não prova que a categoria está correta. A validação de significado continua sendo responsabilidade do workflow.

## 3. Valide a resposta

Depois da etapa de IA, valide:

- `category` pertence ao conjunto permitido;
- `priority` é válida;
- `confidence` está entre 0 e 1;
- `reason` não contém segredo ou dado desnecessário;
- `needs_review` é verdadeiro quando faltam dados ou a confiança está abaixo do limiar.

Se a saída não passar no schema, não tente corrigir silenciosamente. Registre a falha e envie para revisão ou para uma rota de erro.

## 4. Encaminhe com aprovação

Somente classificações válidas e dentro do limite de confiança podem seguir para um próximo passo automatizado. Casos ambíguos devem criar uma tarefa de revisão com entrada, saída e motivo, sem executar efeitos externos.

Uma aprovação humana não deve ser apenas um botão sem contexto. Mostre o texto original sanitizado, a decisão sugerida, a justificativa e a ação que será executada.

## 5. Registre custos e qualidade

Para cada execução, armazene identificador, modelo, versão, latência, tokens/custo quando disponível, resultado da validação e decisão humana. Não guarde o texto completo se não for necessário.

Monte uma avaliação com casos comuns, ambíguos, incompletos e adversariais. Compare com uma regra simples ou fila manual. Só afirme ganho quando qualidade, tempo e custo melhorarem no conjunto relevante.

## 6. Falhas que precisam ser testadas

- modelo indisponível;
- resposta fora do schema;
- categoria desconhecida;
- confiança alta com justificativa incoerente;
- entrada duplicada;
- limite de custo excedido;
- tentativa de prompt injection no texto recebido.

Para cada falha, registre se houve retry, fallback, alerta e encaminhamento humano. O [guia de IA avançada do n8n](https://docs.n8n.io/advanced-ai/) deve ser conferido junto com a documentação do modelo usado.

## Checklist

- tarefa variável realmente exige IA;
- entrada sanitizada e limitada;
- saída estruturada e validada;
- casos ambíguos encaminhados;
- nenhuma ação irreversível automática;
- modelo e versão registrados;
- custo e latência observados;
- casos de falha executados;
- alternativa sem IA comparada.

## Próximo passo

Depois deste experimento, avance para [agentes operacionais](/automacao/agentes-operacionais/) somente se a etapa de IA já tiver avaliação e limites claros. Para fundamentos, consulte a [engenharia de prompt](/ia/engenharia-de-prompt/).
