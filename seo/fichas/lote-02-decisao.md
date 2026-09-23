# Lote 02 — Hubs de decisão

Status do lote: `research`

Objetivo: criar páginas que ajudem o leitor a escolher uma abordagem antes de
entrar em tutoriais, artigos detalhados ou comparativos.

## 1. `/ia/ia-local/` — hub de IA local

**Dor:** querer privacidade, controle ou menor custo recorrente sem saber se o
hardware e o modelo atendem à tarefa.  
**Decisão:** usar modelo local, serviço hospedado ou arquitetura híbrida.

### Estrutura

1. resposta curta: quando IA local é uma boa hipótese;
2. privacidade, disponibilidade, custo e controle;
3. hardware: memória, GPU, armazenamento e latência;
4. modelo, quantização, contexto e qualidade na tarefa;
5. local vs. hospedado vs. híbrido;
6. piloto mínimo e conjunto de testes;
7. riscos: atualização, segurança, licença e manutenção;
8. trilha para escolha de modelo e programação local.

### Evidências

- documentação oficial dos runtimes e modelos citados;
- requisitos de hardware e licenças consultados na data;
- benchmark próprio ou declaração clara de que não foi executado;
- exemplo de tarefa com critérios de aceitação.

## 2. `/automacao/n8n/` — hub de n8n

**Dor:** começar a criar workflows sem entender gatilhos, credenciais, erros,
reprocessamento e operação.  
**Decisão:** quando n8n atende ao caso e como começar com segurança.

### Estrutura

1. o que o n8n resolve e o que não resolve;
2. cloud vs. self-hosted e responsabilidades de operação;
3. primeiro workflow com evento, validação e saída;
4. credenciais, ambientes e segredos;
5. webhooks, APIs, filas, retries e idempotência;
6. logs, alertas, reprocessamento e ownership;
7. IA dentro do workflow sem delegar controle;
8. critérios para escolher n8n, Make, Zapier ou código.

### Evidências

- documentação da versão testada;
- workflow executado e exportável;
- falhas provocadas e resultado observado;
- limites, preços e recursos consultados em páginas oficiais.

## 3. `/desenvolvimento/arquitetura/` — hub de arquitetura

**Dor:** escolher padrões e tecnologias antes de entender restrições, ou registrar
decisões sem explicar consequências.  
**Decisão:** qual estrutura, limite e trade-off são adequados ao sistema.

### Estrutura

1. arquitetura como decisões e consequências;
2. requisitos funcionais, não funcionais e riscos;
3. modularidade, contratos, dados e integração;
4. monólito, modular monolith, serviços e eventos;
5. consistência, disponibilidade, latência e custo;
6. ADR: contexto, alternativas, decisão e consequências;
7. diagramas que ajudam a operar e mudar o sistema;
8. trilhas para front-end, back-end, DevOps e qualidade.

### Evidências

- referências técnicas primárias;
- ADR real ou exemplo explicitamente fictício;
- diagrama próprio com limites e fluxo;
- análise de trade-offs em cenário concreto.

## 4. `/ia/engenharia-de-prompt/` — hub de prompt

**Dor:** prompts que funcionam em uma demonstração e falham quando mudam os
dados, o modelo ou o formato esperado.  
**Decisão:** como especificar, testar e manter prompts como parte do sistema.

### Estrutura

1. prompt como contrato de tarefa;
2. contexto, instruções, restrições e formato;
3. exemplos e critérios de aceitação;
4. decomposição, saída estruturada e validação;
5. testes com casos normais, borda e recusa;
6. regressão quando muda modelo ou contexto;
7. custo, latência, segurança e dados sensíveis;
8. trilha para avaliação em produção.

### Evidências

- documentação oficial do modelo quando houver recurso específico;
- conjunto de casos e resultados antes/depois;
- exemplos testados, não apenas ilustrativos;
- limites de generalização declarados.

## 5. `/automacao/integracoes/` — hub de integrações

**Dor:** sistemas conectados que duplicam eventos, perdem mensagens ou falham sem
diagnóstico.  
**Decisão:** qual transporte, contrato e estratégia de recuperação usar.

### Estrutura

1. integração como contrato entre sistemas;
2. API, webhook, polling e fila: quando usar cada um;
3. autenticação, autorização e validação;
4. idempotência, ordenação, retries e dead letter;
5. timeout, rate limit e backoff;
6. observabilidade e correlação;
7. segurança e proteção de dados;
8. checklist de produção e recuperação.

### Evidências

- especificações/documentação dos protocolos citados;
- exemplo com evento duplicado e dependência indisponível;
- código ou configuração executada;
- limites e comportamento documentados pelo fornecedor.

## Gate do lote

Cada hub precisa ter um exemplo concreto, um mapa de decisão, pelo menos três
fontes adequadas, critérios de atualização e uma lista de conteúdos-filhos que
será conferida antes da etapa de linkagem.
