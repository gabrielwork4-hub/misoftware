---
title: "Claude Code ganha mods: o que são e o que muda"
description: "Em 01/10/2026 a Anthropic lançou os mods do Claude Code: funções em JavaScript ou TypeScript que reescrevem prompts, tool calls e a interface. Veja o que muda."
pubDate: "2026-10-06"
author: "gabriel-barboza"
category: "Dev e ferramentas"
silo: ferramentas
kind: "noticia"
canonicalPath: "/noticias/claude-code-mods-lancamento-o-que-muda/"
primaryKeyword: "claude code mods"
draft: false
sources:
  - "https://claude.com/blog/claude-code-mods"
  - "https://code.claude.com/docs/en/plugins/mods/overview"
  - "https://code.claude.com/docs/en/plugins/mods/admin"
  - "https://github.com/anthropics/claude-code/tree/main/mods"
faq:
  - q: "O que são mods do Claude Code?"
    a: "São plugins com funções em JavaScript ou TypeScript que rodam dentro do próprio Claude Code e reagem a eventos como chamadas de ferramenta, prompts enviados e partes da interface desenhadas. Um mod pode observar, alterar ou assumir o evento."
  - q: "Qual versão do Claude Code é necessária para usar mods?"
    a: "No terminal, a v2.1.287 ou superior. O app Desktop traz uma cópia própria do Claude Code, e os mods funcionam nele a partir da v2.1.286. Os mods vêm ligados por padrão."
  - q: "Mods são seguros? Rodam em sandbox?"
    a: "Não rodam em sandbox. Um mod tem as mesmas permissões do usuário: lê e grava arquivos, inicia processos, faz requisições de rede e vê cada prompt e chamada de ferramenta. Instale só de fontes confiáveis e liste o que o mod faz com claude plugin validate antes de instalar."
  - q: "Como uma empresa bloqueia mods instalados por usuários?"
    a: "Com a opção allowManagedModsOnly do guarda embutido (cc-plugin-sec-default), definida nas managed settings. Com ela, só carregam os mods da própria organização e os embutidos no Claude Code."
  - q: "Mods substituem hooks, skills e servidores MCP?"
    a: "Não. Os hooks de settings continuam funcionando e não foram descontinuados. A diferença é que o mod roda dentro do Claude Code e pode desenhar interface, algo que hooks, skills e MCP não fazem."
---

Em **1º de outubro de 2026**, a Anthropic lançou os **mods** do Claude Code: funções em JavaScript ou TypeScript que mudam o comportamento do agente por dentro. Um mod pode reescrever um prompt antes de ele chegar ao modelo, bloquear ou alterar uma chamada de ferramenta, aprovar ou negar um pedido de permissão e desenhar interface própria. Eles funcionam no CLI e no Code do app Desktop ([anúncio oficial](https://claude.com/blog/claude-code-mods), [documentação](https://code.claude.com/docs/en/plugins/mods/overview)).

O que muda na prática: os mods chegam **ligados por padrão** no Claude Code v2.1.287 ou superior e, por rodarem sem sandbox, trazem uma decisão de segurança para quem usa e para quem administra o agente em equipe. Para o contexto geral de modelos, preços e limites do agente, veja a página de [Claude, da Anthropic](/ferramentas/modelos/anthropic-claude/).

## O que é um mod

Um mod é um **plugin** cujo código registra funções que o Claude Code chama quando um evento acontece. Os exemplos citados pela Anthropic são uma chamada de ferramenta, um prompt enviado e uma parte da interface sendo desenhada. A função pode **observar** o evento, **reescrevê-lo** ou **assumir** o tratamento, de modo que o comportamento normal não rode ([visão geral dos mods](https://code.claude.com/docs/en/plugins/mods/overview)).

Com uma função, um mod pode, segundo o anúncio:

- reescrever um prompt antes de ele chegar ao modelo;
- bloquear, reescrever ou repetir uma chamada de ferramenta;
- aprovar ou negar um pedido de permissão;
- remover segredos da saída de uma ferramenta antes de o Claude ler;
- editar ou trocar partes da interface, como o resultado de uma ferramenta, e criar painéis, botões e comandos `/` próprios.

Quando vários mods escutam o mesmo evento, rodam na ordem em que são carregados. Você também pode pedir ao próprio Claude Code que escreva, instale e recarregue um mod na sessão.

## Mods, hooks, skills e MCP

Hooks de settings, skills e servidores MCP já existiam, e a Anthropic diz que nenhum foi descontinuado. A diferença está em onde cada um roda e no que consegue mudar ([comparação na documentação](https://code.claude.com/docs/en/plugins/mods/overview#compare-mods-settings-hooks-skills-and-mcp-servers)).

| | Mod | Hook de settings | Skill | Servidor MCP |
| --- | --- | --- | --- | --- |
| O que é | Funções em um plugin, chamadas dentro do processo do Claude Code | Comando de shell, requisição HTTP ou prompt em um evento de ciclo de vida | Arquivo `SKILL.md` com instruções | Processo ou serviço externo que dá ferramentas ao Claude |
| Desenha na interface | Sim | Não | Não | Não |
| O que você escreve | JavaScript ou TypeScript | Um script e uma entrada no `settings.json` | Markdown | Um servidor em qualquer linguagem |

Em resumo, escolha um mod quando precisar de painel, comando próprio ou de reescrever um evento. Se um hook, uma skill ou um MCP já resolve, ele continua sendo a opção mais simples.

## Como instalar e quais versões

- **Versão:** no terminal, use o Claude Code v2.1.287 ou superior. No app Desktop, os mods funcionam a partir da v2.1.286, porque ele traz sua própria cópia do Claude Code.
- **Instalação:** o mod se instala como plugin, informando o nome, um `@` e o marketplace, por exemplo `/plugin install nome@marketplace` (ou `claude plugin install` no shell).
- **Desligar:** desative o plugin em `/plugin`, inicie com `--safe-mode` para uma sessão sem mods ou defina `"disableAllHooks": true` em `~/.claude/settings.json` para todas as sessões.
- **Onde desenha:** hooks rodam em qualquer sessão que carrega o plugin, mas painéis e telas próprias só aparecem no terminal e no app Desktop. Na extensão do VS Code, em `claude -p` e em sessões na nuvem, os hooks rodam e a interface não aparece.

Alguns recursos do próprio Claude Code já são mods embutidos, como o `/diff`, que agora pode ser desligado ou substituído em `/plugin`. A Anthropic diz que pretende mover mais recursos nativos para mods ao longo do tempo.

## O que muda na segurança

Esta é a parte que exige atenção. **Mods não rodam em sandbox.** Um mod tem o mesmo acesso à máquina que o Claude Code e pode ler e gravar arquivos, iniciar programas, fazer requisições de rede, ler variáveis de ambiente e arquivos de configuração (onde podem estar chaves de API), ver cada prompt e cada chamada de ferramenta e aprovar uma chamada antes de você ser perguntado. Se você usa o sandbox do Claude Code, ele isola os comandos Bash que o Claude executa, mas **um processo iniciado por um mod roda fora dele** ([o que um mod alcança](https://code.claude.com/docs/en/plugins/mods/overview#what-a-mod-can-reach)).

Antes de instalar, vale listar o que o mod faz sem executá-lo. Clone o plugin e rode, no shell:

```bash
claude plugin validate ./nome-do-mod
```

A saída traz uma linha `hooks:` (eventos que o mod recebe) e uma `calls:` (métodos da API que o código chama, como `$.fs.write`, `$.process.run` ou `$.http.fetch`). É o equivalente de ler as permissões de um app antes de instalá-lo. Para reforçar a revisão de código gerado por agentes no seu time, veja [revisão de código com IA sem perder o controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/).

## Para equipes e empresas

Como o mod é um plugin, os controles de plugin que a empresa já tem se aplicam, como listas de marketplaces permitidos. Em planos Team e Enterprise, e em qualquer máquina com managed settings, um mod embutido chamado `sec-default` carrega primeiro e impede que mods instalados por usuários façam coisas arriscadas, como passar por cima das regras de `deny` e dos hooks gerenciados ([administração de mods](https://code.claude.com/docs/en/plugins/mods/admin)).

Para impedir que mods de usuários carreguem, o administrador define a opção `allowManagedModsOnly` no guarda embutido, dentro das managed settings:

```json
{
  "pluginConfigs": {
    "cc-plugin-sec-default@builtin": {
      "options": { "allowManagedModsOnly": true }
    }
  }
}
```

Com isso, só carregam os mods da própria organização e os embutidos. Os hooks de settings, as status lines e o `/goal` dos usuários continuam funcionando. A Anthropic também cita usos para equipes, como mostrar o status do CI/CD em um painel ao lado da conversa, exigir confirmação antes de qualquer comando que toque na configuração de produção e manter um log de auditoria de tudo que os outros mods fazem.

## Por que isso importa para quem desenvolve

- **Personalização sem esperar o fornecedor.** Hooks não conseguem reescrever eventos nem desenhar interface. Os mods conseguem, o que abre espaço para ferramentas de equipe em cima do agente.
- **Novo item na revisão de segurança.** Plugins com mods passam a ser código executável com as permissões do usuário. Trate-os como qualquer dependência: confira a origem e rode o `plugin validate`.
- **Outros agentes já olham para o formato.** O DeepSeek Harness adicionou uma camada experimental de compatibilidade com a API de mods, conforme a nossa notícia sobre o [DeepSeek Harness v0.2](/noticias/deepseek-harness-v0-2-app-desktop-o-que-muda/). A própria DeepSeek diz que não promete compatibilidade completa.
- **Limites do agente continuam valendo.** Mods mudam o comportamento do agente, mas não os limites de uso do plano. Veja como funciona em [Claude Code muda limite de uso de 5 horas](/noticias/claude-code-limite-de-uso-5-horas-parada-controlada/).

## O que ainda não está confirmado

- **Disponibilidade por plano:** a documentação descreve o comportamento do guarda em Team, Enterprise, API key, Amazon Bedrock, Google Cloud e Microsoft Foundry, mas não comparamos plano a plano o que está liberado.
- **Mods no app Desktop com WSL:** segundo a documentação, sessões WSL no app Desktop não têm plugins e, portanto, não rodam mods.
- **Mais recursos como mods:** a Anthropic diz que pretende migrar mais recursos nativos, sem listar quais nem datas.
- **Ecossistema:** o anúncio fala em distribuir mods pelo diretório de plugins do Claude. Não avaliamos a qualidade nem a quantidade de mods disponíveis.
