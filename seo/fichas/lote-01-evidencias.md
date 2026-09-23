# Lote 01 — pacote de evidências

Data da consulta: 2026-09-22

Este arquivo registra as fontes consultadas para a primeira rodada de
enriquecimento. A fonte sustenta somente as afirmações indicadas; ela não
substitui teste do fluxo específico do site.

## IA e agentes

| Fonte | Uso no lote | Estado |
|---|---|---|
| [OpenAI — Function calling](https://platform.openai.com/docs/guides/function-calling) | chamadas estruturadas de ferramentas e argumentos | consultada |
| [Anthropic — Tool use](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview) | definição de uso de ferramentas e ciclo de execução | consultada |
| [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | organização de riscos, governança e limitações | consultada |
| [Google — Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | orientação people-first para o pilar editorial | registrada; revisar na copy final |

Pendências antes de `fact-checked`:

- confirmar qual exemplo próprio será executado;
- registrar modelo, versão, prompt, ferramenta e conjunto de casos;
- separar no texto o que é princípio geral do que foi testado pela redação.

## Automação

| Fonte | Uso no lote | Estado |
|---|---|---|
| [n8n Docs](https://docs.n8n.io/) | workflows, credenciais e operação da plataforma | consultada |
| [MDN — HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) | semântica geral de métodos HTTP e integrações | consultada |
| [OWASP API Security](https://owasp.org/www-project-api-security/) | riscos e controles de segurança de APIs | URL registrada; validar acesso na revisão |

Pendências antes de `fact-checked`:

- executar um workflow com entrada válida, inválida, duplicada e timeout;
- registrar como o retry e o reprocessamento são tratados;
- adicionar documentação da versão do n8n usada no exemplo.

## Desenvolvimento

| Fonte | Uso no lote | Estado |
|---|---|---|
| [Twelve-Factor App](https://12factor.net/) | configuração, dependências, logs e ambientes | consultada |
| [Martin Fowler — Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) | relação entre testes unitários, integração e ponta a ponta | consultada |
| [GitHub Docs — About Git](https://docs.github.com/en/get-started/using-git/about-git) | histórico, colaboração, branches e revisão | consultada |

Pendências antes de `fact-checked`:

- substituir exemplos genéricos por uma mudança real e autorizada do projeto;
- explicitar que a pirâmide é heurística, não proporção universal;
- conferir links de cada trilha do silo.

## Ferramentas

| Fonte | Uso no lote | Estado |
|---|---|---|
| [GitHub Docs — About Git](https://docs.github.com/en/get-started/using-git/about-git) | histórico, portabilidade e colaboração | consultada |
| [Twelve-Factor App](https://12factor.net/) | critérios de operação e configuração | consultada |
| [OWASP Top 10](https://owasp.org/www-project-top-ten/) | riscos gerais de aplicações web | consultada |

Pendências antes de `fact-checked`:

- não publicar preço ou recurso sem página oficial, plano, região e data;
- selecionar uma tarefa-piloto real para o exemplo da matriz;
- declarar ausência de patrocínio ou conflito de interesse.

## Hub de agentes

As fontes de IA e risco acima também sustentam o hub de agentes. Antes da
aprovação, o exemplo precisa registrar uma ferramenta reversível, permissões
mínimas, condição de parada, casos de recusa e caminho de intervenção humana.

## Regras de uso

- fontes oficiais sustentam conceitos e especificações;
- resultados próprios só entram como experiência quando executados e registrados;
- informação variável recebe data e versão;
- fonte genérica não é usada para provar uma afirmação específica;
- falha de acesso ou documentação incompleta vira limitação explícita, não
  suposição.
