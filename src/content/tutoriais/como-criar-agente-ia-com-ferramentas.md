---
title: "Como criar um agente de IA com ferramentas"
description: "Guia para projetar um agente com objetivo, ferramentas, memória, limites e validação."
pubDate: "2026-09-20"
author: "redacao"
difficulty: "Intermediário"
silo: "ia"
tags:
  - "Agentes"
draft: false
---
Um agente combina modelo, instruções, ferramentas e um ciclo de decisão. O projeto começa pelo resultado que precisa ser entregue, não pela escolha do modelo. Este tutorial constrói, passo a passo, um agente pequeno e revisável: um assistente que responde a uma dúvida consultando uma base de procedimentos, sem tomar nenhuma ação irreversível. Os mecanismos de chamada de ferramenta usados aqui seguem o [function calling da OpenAI](https://platform.openai.com/docs/guides/function-calling) e o [tool use da Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview).

## Antes de começar

Você precisa de acesso a um modelo com suporte a chamadas de ferramenta, uma linguagem para orquestrar o ciclo (os exemplos usam pseudocódigo próximo de Python) e uma fonte de dados simples para consultar. Não é necessário nenhum framework de agentes para o primeiro protótipo — o ciclo cabe em poucas dezenas de linhas.

## Passo 1 — Defina o desenho mínimo

Antes de qualquer código, escreva o contrato do agente:

- **Objetivo:** responder a uma dúvida sobre procedimentos internos.
- **Entradas permitidas:** uma pergunta em texto.
- **Ferramentas permitidas:** apenas `buscar_documento`.
- **Formato da saída:** resposta em texto + trecho citado.
- **Critério de parada:** encontrou resposta, ou concluiu que não há.
- **Aprovação:** a resposta é sugerida, nunca enviada automaticamente.

Dê ao agente apenas as permissões necessárias. Um agente que só precisa ler não deve ter uma ferramenta que escreve.

## Passo 2 — Descreva a ferramenta

Cada ferramenta precisa de um contrato claro que o modelo consiga entender: nome, descrição, parâmetros e tipos.

```json
{
  "name": "buscar_documento",
  "description": "Busca trechos relevantes na base de procedimentos internos.",
  "parameters": {
    "type": "object",
    "properties": {
      "consulta": { "type": "string", "description": "Termo ou pergunta" }
    },
    "required": ["consulta"]
  }
}
```

A qualidade dessa descrição afeta diretamente a decisão do modelo. Descrições vagas levam a chamadas erradas.

## Passo 3 — Implemente o ciclo de decisão

O coração do agente é um laço: enviar o estado ao modelo, executar a ferramenta que ele pedir, devolver o resultado e repetir até uma resposta final ou o limite de passos.

```text
para cada passo (até o máximo):
  resposta = modelo(mensagens, ferramentas)
  se resposta pede ferramenta:
    valida os argumentos
    resultado = executa a ferramenta
    adiciona o resultado às mensagens
  senão:
    devolve a resposta final
se estourou o limite:
  devolve "não foi possível concluir"
```

O limite de passos não é opcional: é o que impede loops e custo descontrolado.

## Passo 4 — Valide argumentos e trate erros

Antes de executar qualquer ferramenta, valide os argumentos que o modelo enviou. Se `consulta` vier vazia ou o tipo estiver errado, rejeite a chamada e devolva o erro ao modelo em vez de executar. Cada ferramenta deve ter timeout e um comportamento definido para falha — o agente precisa saber continuar quando uma integração cai.

## Passo 5 — Registre estado suficiente

Guarde o que permite retomar ou investigar a execução: a pergunta, cada ferramenta chamada, os argumentos, o resultado e a resposta proposta. Não guarde dados sensíveis desnecessários. Esse registro é o que transforma uma caixa-preta em algo auditável.

## Passo 6 — Avalie antes de liberar

Teste três classes de cenário:

1. **Normais:** perguntas cuja resposta está na base.
2. **Ambíguos:** perguntas incompletas ou com dois procedimentos possíveis.
3. **Adversariais:** perguntas fora do escopo ou que tentam forçar uma ação não permitida.

Meça conclusão correta, chamadas indevidas de ferramenta, custo, latência e facilidade de intervenção humana. Um agente que acerta os casos normais mas falha silenciosamente nos adversariais não está pronto.

## Erros comuns neste primeiro agente

Três armadilhas aparecem quase sempre. Dar ferramentas demais "por garantia": cada ferramenta a mais é uma decisão a mais que pode dar errado — comece com uma. Confiar no modelo para validar os próprios argumentos: a validação é responsabilidade do seu código, não do prompt. E esquecer o limite de passos durante os testes, o que transforma um bug em uma conta alta. Resolver os três desde o início custa poucas linhas e evita a maior parte dos incidentes.

## Próximo passo

Com o protótipo funcionando, aprofunde a escolha de arquitetura nos [tipos de agentes](/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/) e formalize os testes no [guia de avaliação de agentes](/artigos/como-avaliar-agentes-de-ia/) antes de pensar em produção.
