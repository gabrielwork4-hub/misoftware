---
title: "Como avaliar agentes de IA antes de colocar em produção"
description: "Crie uma avaliação reproduzível para agentes de IA com tarefas, critérios de sucesso, segurança, custo e observabilidade."
pubDate: "2026-09-22"
author: "redacao"
category: "IA & Modelos"
silo: ia
kind: "artigo"
canonicalPath: "/artigos/como-avaliar-agentes-de-ia/"
primaryKeyword: "como avaliar agentes de IA"
draft: true
sources:
  - "https://platform.openai.com/docs/guides/function-calling"
  - "https://www.nist.gov/itl/ai-risk-management-framework"
  - "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
---

> Rascunho gerado da fila editorial. Revisar evidências, fontes e links antes de aprovar.

Um agente não deve ser avaliado apenas pela resposta final. Ele pode chegar a uma resposta correta usando uma ferramenta indevida, vazar dados ou gastar um orçamento inteiro. Uma avaliação útil mede resultado, trajetória, segurança e custo em tarefas representativas.

## Defina a tarefa e o limite

Escreva o objetivo em termos observáveis: “consultar o pedido, verificar a política e propor a próxima ação”, não “ser inteligente”. Liste entradas permitidas, ferramentas disponíveis, dados que nunca podem ser acessados e o que exige aprovação humana. Inclua casos fora do escopo e informações conflitantes.

Crie um conjunto versionado de tarefas com resposta esperada ou critérios de aceite. Separe o conjunto usado para ajustar o agente daquele usado para avaliação final. Se a tarefa mudar, registre a versão para não comparar resultados incompatíveis.

## Avalie resultado e trajetória

Meça pelo menos:

- conclusão da tarefa sem intervenção indevida;
- precisão e completude da resposta;
- escolha correta da ferramenta e dos argumentos;
- respeito a permissões e critérios de parada;
- número de passos, latência e tokens;
- custo por execução e taxa de falha recuperável.

Uma execução pode ser considerada parcialmente correta: por exemplo, o agente encontrou o documento certo, mas não citou a seção. Registre o trace completo — entrada, plano, chamadas, resultados, recusas e saída — para que uma pessoa consiga explicar a nota.

## Teste segurança e robustez

Inclua prompt injection no conteúdo recuperado, ferramenta indisponível, timeout, retorno malformado, credencial sem permissão e pedido para apagar dados. O agente deve falhar fechado, pedir confirmação ou oferecer uma alternativa segura. Não coloque credenciais no prompt e valide argumentos no servidor, mesmo que o modelo tenha recebido um schema.

Repita tarefas com pequenas variações de linguagem e ordem de documentos. Um agente que funciona somente com a formulação do benchmark não está pronto para uso real. Para ações irreversíveis, valide simulação e rollback antes de medir autonomia.

## Transforme avaliação em rotina

Rode a suíte a cada mudança de modelo, prompt, ferramenta ou política. Compare baseline, versão candidata e uma execução humana quando existir. Defina um limiar de liberação e um critério de rollback; uma média melhor não compensa uma regressão grave em segurança.

Publique a metodologia junto dos resultados: conjunto de tarefas, datas, versões, orçamento, limitações e exemplos de falha. Isso torna a avaliação auditável e evita prometer capacidade que o teste nunca mediu.
