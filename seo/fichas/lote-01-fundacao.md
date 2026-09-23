# Lote 01 — Fundação dos clusters

Status do lote: `research`

Objetivo: transformar os quatro pilares e o hub de agentes em páginas de
orientação que expliquem o território, ajudem o leitor a escolher uma trilha e
preparem os conteúdos-filhos.

## Critério de saída do lote

As cinco páginas só avançam quando:

- a promessa de cada página estiver clara nos primeiros parágrafos;
- cada silo tiver um mapa de decisão e uma ordem de entrada;
- os hubs-filhos estiverem descritos sem criar conteúdo duplicado;
- existirem fontes primárias específicas para conceitos e recomendações;
- o texto tiver pelo menos um exemplo aplicado e uma seção de limites;
- todas as URLs-filhas do registro estiverem conferidas;
- não houver marcador `Revisão pendente`.

## 1. Pilar `/ia/`

**Keyword principal:** inteligência artificial aplicada  
**Intenção:** informacional + orientação de trilha  
**Leitor:** pessoa técnica ou líder de operação que sabe que quer aplicar IA,
mas não sabe escolher entre prompt, workflow, agente, modelo local ou RAG.  
**Dor:** começar pela ferramenta e acabar com custo, risco e resultado difícil de
medir.  
**Decisão:** qual trilha estudar e qual nível de autonomia é adequado ao caso.

### Promessa

“Escolha a arquitetura de IA adequada ao seu problema, começando pelo menor
nível de complexidade que entrega resultado verificável.”

### Não-objetivos

- não listar todas as ferramentas de IA do mercado;
- não prometer ganhos genéricos de produtividade;
- não substituir os hubs por resumos rasos.

### Outline

1. **Resposta curta:** IA aplicada é decisão sobre tarefa, contexto, modelo,
   ferramenta, avaliação e supervisão — não apenas escolha de modelo.
2. **Quando usar IA:** tarefas de classificação, transformação, síntese,
   recuperação e decisão assistida.
3. **Mapa de decisão:** regra determinística → etapa com IA → workflow com IA →
   agente; critérios de autonomia, risco e reversibilidade.
4. **Trilhas do silo:** agentes, IA local, prompt e RAG; para cada uma,
   problema atendido, pré-requisito e próximo conteúdo.
5. **Como avaliar:** qualidade, custo, latência, privacidade, observabilidade,
   intervenção humana e falhas.
6. **Exemplo aplicado:** processo técnico com classificação, aprovação e
   registro de evidências.
7. **Limites e riscos:** alucinação, vazamento, permissões, dependência de
   fornecedor e regressão de qualidade.
8. **Próximo passo:** escolher uma trilha e executar um teste pequeno.

### Evidências necessárias

- documentação oficial sobre uso de ferramentas e chamadas estruturadas;
- fontes oficiais para limites de cada arquitetura citada;
- exemplo próprio com entradas, critérios de aceitação e intervenção humana;
- data de revisão para recursos de modelos e ferramentas.

## 2. Pilar `/automacao/`

**Keyword principal:** automação aplicada  
**Intenção:** informacional + decisão de arquitetura  
**Leitor:** profissional técnico ou operacional tentando reduzir trabalho manual
sem criar um fluxo frágil.  
**Dor:** automatizar uma tarefa isolada sem entender eventos, exceções, dono,
segurança e recuperação.  
**Decisão:** usar regra, integração, workflow com IA ou agente e como operar.

### Promessa

“Projete automações que possam ser observadas, corrigidas e recuperadas quando
o caminho normal falhar.”

### Outline

1. **Resposta curta:** automatizar é modelar processo, entradas, regras,
   exceções, saída, dono e métrica.
2. **Diagnóstico antes da ferramenta:** frequência, variabilidade, risco,
   reversibilidade e custo do erro.
3. **Níveis de automação:** regra, integração, workflow, IA em etapa e agente.
4. **Fundamentos de produção:** autenticação, idempotência, retries, timeout,
   filas, logs, alertas e rollback.
5. **Trilhas:** n8n, integrações, workflows, agentes operacionais e webhooks.
6. **Exemplo aplicado:** entrada por webhook, validação, processamento,
   aprovação e notificação.
7. **Como medir:** tempo, erro, retrabalho, custo, latência e volume.
8. **Limites:** quando manter processo manual ou semiautomático.

### Evidências necessárias

- documentação oficial de n8n e dos protocolos citados;
- exemplo testado com falha provocada e recuperação;
- referências de idempotência, webhooks, filas e autenticação;
- critérios de segurança e permissões do ambiente usado.

## 3. Pilar `/desenvolvimento/`

**Keyword principal:** desenvolvimento de software  
**Intenção:** informacional + orientação de sistema de entrega  
**Leitor:** pessoa desenvolvedora, líder técnico ou profissional migrando de
implementação pontual para entrega sustentável.  
**Dor:** tratar arquitetura, código, testes, deploy e observabilidade como
assuntos separados e descobrir problemas apenas em produção.  
**Decisão:** qual trilha técnica seguir e quais controles mínimos aplicar.

### Promessa

“Organize decisões de software do requisito ao monitoramento, escolhendo o
nível de rigor adequado ao risco do sistema.”

### Outline

1. **Resposta curta:** desenvolvimento é um sistema de decisões e feedback,
   não apenas escrita de código.
2. **Mapa do ciclo:** problema, arquitetura, dados, implementação, testes,
   entrega, observabilidade e evolução.
3. **Trilhas:** arquitetura, front-end, back-end, DevOps e qualidade.
4. **Como escolher profundidade:** risco, criticidade, equipe, prazo e custo de
   manutenção.
5. **Exemplo aplicado:** mudança pequena passando por contrato, teste, deploy e
   rollback.
6. **Checklist de entrega:** requisito aceito, revisão, testes, logs, alertas,
   documentação e plano de recuperação.
7. **Erros recorrentes:** abstração prematura, ausência de testes, deploy manual,
   segredo exposto e métrica inexistente.
8. **Próximo passo:** escolher a trilha correspondente à decisão atual.

### Evidências necessárias

- documentação oficial das tecnologias quando mencionadas;
- referências de arquitetura, testes e entrega contínua;
- exemplos de decisão ou ADR do próprio projeto, quando autorizados;
- distinção clara entre princípio geral e recomendação editorial.

## 4. Pilar `/ferramentas/`

**Keyword principal:** ferramentas para trabalho técnico  
**Intenção:** comercial investigativa + decisão  
**Leitor:** pessoa responsável por escolher ferramentas para desenvolvimento,
automação, documentação ou produtividade.  
**Dor:** acumular produtos, pagar por recursos não usados e criar dependência ou
trabalho manual entre sistemas.  
**Decisão:** qual ferramenta testar, com quais critérios e quais riscos aceitar.

### Promessa

“Escolha ferramentas pelo problema e pelo fluxo de trabalho, não pelo volume de
recursos ou popularidade.”

### Outline

1. **Resposta curta:** uma ferramenta é adequada quando resolve uma etapa,
   integra-se ao fluxo e tem custo/risco aceitáveis.
2. **Mapa por problema:** desenvolvimento, automação, IA, produtividade,
   pesquisa, documentação, observabilidade e hardware.
3. **Critérios:** aderência, aprendizado, colaboração, API, exportação,
   privacidade, controle de acesso, suporte e custo total.
4. **Método de piloto:** tarefa recorrente, baseline, duração, métricas e
   condição de parada.
5. **Trilhas:** hubs de desenvolvimento, automação, IA generativa,
   produtividade, pesquisa e hardware.
6. **Exemplo de decisão:** comparar duas opções para uma tarefa delimitada.
7. **Limites:** lock-in, mudança de preço, dependência de nuvem, dados e
   disponibilidade regional.
8. **Próximo passo:** selecionar uma ferramenta e executar um piloto.

### Evidências necessárias

- páginas oficiais de preço, recursos, privacidade e documentação;
- data e região da consulta;
- protocolo de teste reutilizável para reviews e comparativos;
- declaração de conflito ou ausência de patrocínio.

## 5. Hub `/ia/agentes/`

**Keyword principal:** agentes de IA  
**Intenção:** informacional + tutorial progressivo  
**Leitor:** pessoa que considera usar agentes, mas ainda confunde agente,
chatbot, workflow e automação determinística.  
**Dor:** adicionar autonomia e ferramentas sem saber controlar permissões,
falhas, custo, qualidade e intervenção humana.  
**Decisão:** quando um agente é necessário, qual padrão usar e como começar com
segurança.

### Promessa

“Entenda quando um agente faz sentido e siga uma trilha para construir, avaliar
e operar um agente pequeno e observável.”

### Outline

1. **Resposta curta:** agente interpreta objetivo, escolhe ações e usa
   ferramentas dentro de limites; nem todo workflow precisa disso.
2. **Agente vs. chatbot vs. workflow:** tabela com autonomia, memória,
   ferramentas, previsibilidade e risco.
3. **Componentes:** modelo, instruções, contexto, ferramentas, memória,
   política, observabilidade e aprovação.
4. **Quando não usar:** regras estáveis, ação irreversível, dados insuficientes
   ou ausência de avaliação.
5. **Trilha de construção:** tarefa pequena, uma ferramenta, logs, casos de
   recusa e rollback.
6. **Tipos e padrões:** reativo, planejamento, hierárquico e workflow com IA;
   apresentar critérios, não taxonomia ornamental.
7. **Avaliação:** qualidade, segurança, custo, latência, cobertura e intervenção.
8. **Operação:** permissões mínimas, aprovação humana, monitoramento e rollout.
9. **Próximos conteúdos:** conceito, tutorial, tipos, avaliação e agentes
   operacionais.

### Evidências necessárias

- documentação oficial de tool use/function calling;
- definição explícita do que foi testado e em qual versão;
- exemplo com ferramenta reversível e registro de execução;
- casos de recusa, erro e intervenção humana;
- fontes para segurança, avaliação e limites de autonomia.

## Próximas ações do lote

1. Pesquisar e registrar as fontes específicas de cada ficha.
2. Confirmar os links-filhos realmente existentes no registro.
3. Reescrever as cinco páginas seguindo os outlines acima.
4. Criar pelo menos um exemplo próprio por página.
5. Revisar afirmações, limites, data e versão.
6. Só depois preparar a linkagem interna definitiva.
