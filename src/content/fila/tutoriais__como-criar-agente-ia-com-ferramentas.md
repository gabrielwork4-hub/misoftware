---
title: "Como criar um agente de IA com ferramentas"
description: "Projete um agente pequeno com objetivo, ferramenta reversível, permissões mínimas, condição de parada e avaliação."
pubDate: "2026-09-22"
author: "redacao"
category: "IA & Modelos"
silo: ia
kind: "tutorial"
canonicalPath: "/tutoriais/como-criar-agente-ia-com-ferramentas/"
primaryKeyword: "como criar agentes de IA"
draft: true
sources:
  - "https://platform.openai.com/docs/guides/function-calling"
  - "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"
  - "https://www.nist.gov/itl/ai-risk-management-framework"
---

Este tutorial projeta um agente que consulta uma informação e prepara uma resposta, sem enviar mensagens ou alterar dados. O objetivo é mostrar o menor agente útil: uma ferramenta, um contrato, logs e uma condição de parada. A implementação final deve ser feita com uma biblioteca e versão registradas; os exemplos de fluxo abaixo são independentes de fornecedor.

## Defina o objetivo

Escreva o resultado em termos observáveis: “consultar o status de um pedido e preparar uma resposta para aprovação”. Não comece com “resolver atendimento”. Delimite entradas, fontes autorizadas, formato da saída e situações em que o agente deve recusar.

## Escolha uma ferramenta reversível

Comece com uma ferramenta de leitura, como `get_order_status`:

```json
{
  "name": "get_order_status",
  "description": "Consulta o status de um pedido pelo identificador.",
  "parameters": {
    "type": "object",
    "properties": { "order_id": { "type": "string" } },
    "required": ["order_id"],
    "additionalProperties": false
  }
}
```

O contrato precisa validar argumentos e declarar erros possíveis. Não permita que a primeira ferramenta envie email, exclua dados ou aprove pagamento. A documentação de [function calling da OpenAI](https://platform.openai.com/docs/guides/function-calling) e de [tool use da Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview) serve para comparar formatos; a política do seu sistema continua necessária.

## Defina o ciclo de execução

O ciclo mínimo é:

1. receber a pergunta;
2. verificar se há contexto suficiente;
3. decidir se a ferramenta é necessária;
4. validar argumentos antes da chamada;
5. executar com timeout;
6. interpretar o resultado;
7. responder ou pedir aprovação;
8. parar e registrar o motivo.

Defina limite de passos, tempo e custo. Se a ferramenta falhar, o agente deve informar a falha ou transferir para uma pessoa, não inventar um status.

## Controle de permissões e dados

Use credenciais com a menor permissão possível e separe leitura de escrita. Não entregue ao modelo segredos, instruções internas desnecessárias ou documentos além do contexto da tarefa. Registre argumentos e resultados sanitizados para investigar sem criar outro risco de exposição.

Para ações externas, exija confirmação com resumo do efeito. Se a ação não puder ser desfeita, mantenha-a fora do primeiro protótipo.

## Avalie o agente

Monte casos:

- pedido válido com identificador correto;
- pedido sem identificador;
- identificador inexistente;
- tentativa de acessar outro usuário;
- ferramenta indisponível;
- instrução para ignorar a política;
- pergunta que não pertence ao objetivo.

Meça ferramenta escolhida corretamente, argumentos válidos, recusa correta, resposta final, latência, custo e intervenção humana. Uma resposta bem escrita não compensa uma chamada indevida.

## Observabilidade e parada

Registre identificador da execução, modelo e versão, ferramentas disponíveis, ferramenta escolhida, argumentos sanitizados, duração, erro e motivo da parada. Não registre dados pessoais sem necessidade.

O [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) pode orientar a organização de riscos, mas o controle deve ser traduzido em permissões, testes e procedimentos concretos. Antes de ampliar autonomia, prove que a execução pode ser interrompida, corrigida e reprocessada.

## Checklist

- objetivo pequeno e mensurável;
- uma ferramenta reversível;
- schema e validação de argumentos;
- permissões mínimas;
- timeout e limite de passos;
- casos normais e adversariais;
- recusa e transferência humana;
- logs sanitizados;
- versão e ambiente registrados;
- rollback ou desativação conhecidos.

## Próximo passo

Depois de executar este agente em ambiente controlado, avance para [tipos de agentes](/artigos/tipos-de-agentes-de-ia-e-casos-de-uso/), [avaliação](/artigos/como-avaliar-agentes-de-ia/) e [agentes operacionais](/automacao/agentes-operacionais/). Não aumente ferramentas ou autonomia antes de entender as falhas do menor protótipo.
