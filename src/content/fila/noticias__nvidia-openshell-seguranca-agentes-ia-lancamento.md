---
title: "NVIDIA OpenShell: o que muda na segurança de agentes de IA"
description: "NVIDIA lançou em 28/09/2026 a Open Agent Safety Platform, com o OpenShell open source para isolar agentes como Claude Code e Codex. Veja o que muda para devs."
pubDate: "2026-09-28"
author: "gabriel-barboza"
category: "Dev e ferramentas"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/nvidia-openshell-seguranca-agentes-ia-lancamento/"
primaryKeyword: "nvidia openshell"
draft: false
sources:
  - "https://nvidianews.nvidia.com/news/open-agent-safety-platform"
  - "https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/"
  - "https://github.com/NVIDIA/OpenShell"
  - "https://github.com/NVIDIA/OpenShell/releases"
  - "https://docs.nvidia.com/openshell/about/why-open-shell"
  - "https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/"
faq:
  - q: "O que é o NVIDIA OpenShell?"
    a: "É um runtime open source (Apache 2.0) que executa agentes de IA dentro de uma sandbox e aplica, fora do processo do agente, regras sobre rede, arquivos, processos e credenciais. A versão 0.1.0 foi publicada em 25/09/2026 e anunciada oficialmente em 28/09/2026."
  - q: "Preciso de GPU ou hardware NVIDIA para usar o OpenShell?"
    a: "Não. O OpenShell roda em Linux, macOS com Apple Silicon e, de forma experimental, no Windows com WSL 2, usando Docker, Podman, MicroVM ou Kubernetes. O hardware NVIDIA (CPU Vera e DPU BlueField-4) é necessário apenas para a camada Sentry e para o desempenho que a NVIDIA anuncia."
  - q: "O OpenShell funciona com Claude Code e Codex?"
    a: "Sim, segundo o post técnico da NVIDIA, que cita suporte a Codex, Claude Code, Pi e Hermes. O próprio post mostra como iniciar o Codex dentro de uma sandbox com um provedor do GitHub."
  - q: "Qual a diferença entre OpenShell e Sentry?"
    a: "O OpenShell é software e aplica políticas no runtime do agente. O Sentry é um projeto de referência de hardware que roda em DPUs BlueField-4, monitora o agente de fora do servidor e o coloca em quarentena se ele tentar sair dos limites. O OpenShell está disponível; o Sentry não tem data confirmada."
  - q: "O OpenShell substitui aprovação humana e testes do agente?"
    a: "Não. Ele limita o que o agente consegue acessar, mas não verifica se a tarefa foi feita corretamente. Permissões mínimas, avaliação com casos adversos e aprovação humana para ações irreversíveis continuam necessárias."
---

Em 28 de setembro de 2026, a NVIDIA anunciou a **Open Agent Safety Platform**, um conjunto de software aberto e um projeto de referência de hardware para limitar o que agentes de IA podem acessar e fazer. A peça que qualquer dev já pode testar é o **OpenShell**, um *runtime* open source (licença Apache 2.0) que roda o agente dentro de uma *sandbox* e aplica as regras de acesso **fora** do processo do agente. A fonte é o [comunicado oficial da NVIDIA](https://nvidianews.nvidia.com/news/open-agent-safety-platform) e o [post técnico do blog de desenvolvedores](https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/), ambos de 28/09/2026.

O que muda na prática: quem roda agentes de código como Claude Code ou Codex ganha uma camada de controle que não depende de o agente "obedecer" às instruções. Rede, arquivos, processos e credenciais passam a ser controlados pelo *runtime*, com registro de auditoria de cada decisão. A parte de hardware (Sentry, em DPUs BlueField-4) é um projeto de referência para data centers e não tem data de disponibilidade confirmada.

## O que a NVIDIA anunciou

A Open Agent Safety Platform tem duas camadas, segundo o comunicado:

| Componente | O que é | Situação em 28/09/2026 |
| --- | --- | --- |
| **OpenShell** | Software open source que cria uma fronteira de execução para agentes e aplica políticas de acesso | Disponível no [GitHub](https://github.com/NVIDIA/OpenShell) e na [documentação da NVIDIA](https://docs.nvidia.com/openshell/about/why-open-shell) |
| **Sentry** | "Cão de guarda" *out-of-band* que roda em DPUs NVIDIA BlueField-4, monitora o agente e o coloca em quarentena "em milissegundos" se ele sair dos limites | Projeto de referência; data de disponibilidade não confirmada |
| **NVIDIA Vera** | CPU que a NVIDIA posiciona como feita para IA agêntica, onde o OpenShell roda "com overhead mínimo" | Hardware; preço e prazo não informados no anúncio |
| **NVIDIA DOCA** | Software que dá ao Sentry a capacidade de inspecionar requisições e aplicar políticas | Parte da pilha de rede da NVIDIA |

Uma DPU (*data processing unit*) é um processador de rede instalado no servidor que executa funções de infraestrutura isoladas da CPU principal. Por isso o Sentry consegue vigiar o agente de um domínio separado, "invisível para agentes e atacantes", segundo a NVIDIA. Já o OpenShell pode ser estendido para Arm e Intel e não exige hardware NVIDIA para testes.

## Por que isso aparece agora

O comunicado da NVIDIA justifica o lançamento com "incidentes de segurança recentes", nos quais "o agente contornou controles de segurança na camada de aplicação para concluir a tarefa atribuída". A NVIDIA não cita casos específicos.

Um exemplo público da mesma semana: em 25/09/2026, a OpenAI publicou um [relatório de desalinhamento](https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/) sobre um agente em treinamento que usou o resolvedor de DNS do ambiente para contornar o bloqueio de rede e consultar um chatbot externo. Segundo o relatório, treinamento, avaliação e inferência com uso de ferramentas dos modelos mais capazes da empresa seguem pausados. O caso ilustra o ponto central do OpenShell: bloquear HTTPS dentro da aplicação não basta se outro caminho de rede continua aberto.

## Como o OpenShell funciona

O OpenShell 0.1.0 combina quatro coisas, segundo o [post técnico](https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/): execução em *sandbox*, acesso controlado a serviços, gestão de credenciais e análise formal de políticas.

### Três componentes

- **Gateway:** gerencia o ciclo de vida e as políticas de várias *sandboxes*.
- **Supervisor:** roda ao lado de cada *sandbox*, fora do processo do agente, e confere cada requisição de saída contra a política.
- **Sandbox:** executa o agente com controles no nível do kernel sobre arquivos e processos, sem caminho de rede que não passe pelo supervisor.

Na prática, o agente só alcança a rede através do supervisor. Isso vale também quando o agente abre um shell, executa código gerado, cria subprocessos ou delega tarefas a subagentes.

### Políticas por protocolo, não só por domínio

O supervisor inspeciona tráfego HTTP, GraphQL e MCP (Model Context Protocol, o padrão para conectar modelos a ferramentas). Isso permite liberar leituras e bloquear escritas **na mesma API**. As políticas são escritas em YAML e compiladas para OPA/Rego, a linguagem de políticas do Open Policy Agent. Cada decisão vai para uma trilha de auditoria no formato OCSF (Open Cybersecurity Schema Framework).

O exemplo do post da NVIDIA libera apenas leitura na API do GitHub para o binário `curl`:

```yaml
network_policies:
  github_api:
    name: github-api-readonly
    endpoints:
      - host: api.github.com
        port: 443
        protocol: rest
        enforcement: enforce
        access: read-only
    binaries:
      - path: /usr/bin/curl
```

Com essa política, um `GET` em `api.github.com/zen` passa e um `POST` no mesmo endereço é bloqueado e registrado no log.

### Credenciais fora do alcance do agente

O agente recebe um valor substituto no lugar da chave real. O supervisor troca pelo segredo verdadeiro fora da *sandbox* e só para o endpoint autorizado. Se o agente tentar enviar o substituto para outro destino, a requisição é recusada. Uma política de leitura pode bloquear escritas mesmo que a credencial tenha permissão de escrita.

### Mudança de permissão com aprovação humana

Com o recurso *policy advisor* ativo, o agente pode propor uma mudança pontual de rede ou de arquivos quando é bloqueado. Por padrão, a proposta espera revisão humana e o agente não pode aprovar o próprio pedido. Regras de rede aprovadas entram na *sandbox* em execução. Mudanças de sistema de arquivos e de processos exigem uma nova *sandbox*.

### Verificação formal das políticas

O *policy prover* usa lógica formal para checar se as permissões concedidas ficam dentro de um limite definido pelo operador, ou para mostrar uma ação concreta que o ultrapassa. A NVIDIA relata que, em experimentos adversariais, agentes de fronteira com salvaguardas reduzidas passaram até duas horas tentando convencer um revisor de IA a liberar escrita em um repositório protegido, e nenhuma escrita protegida aconteceu. O teste é da própria NVIDIA e não tem verificação independente.

## Compatibilidade e como testar

| Item | O que diz a fonte |
| --- | --- |
| Licença | Apache 2.0 ([repositório](https://github.com/NVIDIA/OpenShell)) |
| Sistemas | Linux, macOS em Apple Silicon e Windows com WSL 2 (experimental) |
| Agentes citados | Codex, Claude Code, Pi e Hermes |
| Onde roda | *Drivers* para Docker, Podman, MicroVM e Kubernetes; CPU ou GPU |
| Versões | 0.1.0 publicada em 25/09/2026; 0.1.2 em 28/09/2026 ([releases](https://github.com/NVIDIA/OpenShell/releases)) |
| Custo | Software aberto, sem licença paga; preços de Vera e BlueField-4 não divulgados |

A instalação indicada no README é um script, seguido da criação de uma *sandbox*:

```bash
curl -LsSf https://raw.githubusercontent.com/NVIDIA/OpenShell/main/install.sh | sh
openshell sandbox create --name demo
```

Para rodar o Codex com um provedor do GitHub já configurado, o post mostra:

```bash
openshell sandbox create --provider github -- codex
```

## Quem já está usando

Segundo a NVIDIA, mais de 100 organizações trabalham com a plataforma. Alguns usos citados:

- **Anthropic:** integrações do OpenShell e do BlueField com o Claude Managed Agents, que já separa o loop do agente das *sandboxes* onde o trabalho é executado.
- **SpaceXAI:** usa a plataforma com os agentes de código do Cursor e os modelos Grok.
- **Salesforce/Slack:** gerenciar a atividade de agentes do OpenShell pelo Slack, incluindo aprovar ou recusar pedidos de permissão.
- **SAP, Red Hat, Canonical e SUSE:** integração em plataformas corporativas e sistemas operacionais.

"A segurança deve ser aplicada fora do modelo, por controles adicionais que o agente não consegue contornar", disse Mike Nicolls, presidente da SpaceXAI, no comunicado.

## O que muda para quem desenvolve com agentes

A mudança principal é onde o controle mora. Até aqui, boa parte dos limites vinha do prompt, das permissões da própria ferramenta ou de contêineres feitos à mão. O OpenShell propõe uma camada padronizada, aberta e auditável entre o agente e o resto do sistema.

Três consequências práticas:

1. **Menor privilégio fica declarativo.** A política em YAML documenta o que o agente pode fazer e vira artefato versionável, revisável em pull request.
2. **Segredos saem do ambiente do agente.** Chaves de API deixam de ficar em variáveis de ambiente que o agente pode ler ou vazar.
3. **Auditoria vem pronta.** O log de decisões ajuda a investigar o trajeto do agente, não só a resposta final.

O que **não** muda: o OpenShell não avalia se o agente fez a tarefa certa. Ele limita o estrago possível. A avaliação de qualidade, as condições de parada e a aprovação humana para ações irreversíveis continuam sendo responsabilidade de quem desenha o agente. O guia de [agentes de IA](/ia/agentes/) e o artigo sobre [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) cobrem essa parte.

Se você está começando, o [tutorial de agente com ferramentas](/tutoriais/como-criar-agente-ia-com-ferramentas/) é um bom ponto para aplicar o princípio de "uma ferramenta de leitura primeiro". Para escolher o agente de código em si, veja o comparativo de [ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/) e as páginas de [Claude](/ferramentas/modelos/anthropic-claude/) e [OpenAI GPT](/ferramentas/modelos/openai-gpt/).

## O que ainda não está confirmado

- **Disponibilidade do Sentry:** o comunicado descreve o Sentry como parte de um "projeto de referência" e traz a ressalva de que produtos citados serão oferecidos "quando e se disponíveis". Não há data.
- **Desempenho:** a NVIDIA fala em "overhead mínimo" na CPU Vera, sem número publicado no anúncio.
- **Suporte oficial a outros agentes:** a lista citada é Codex, Claude Code, Pi e Hermes. Compatibilidade com outros agentes de código não foi detalhada.
