---
title: "DeepSeek Harness v0.2: app desktop e o que muda"
description: "DeepSeek Harness v0.2 ganha app desktop para macOS e Windows, quatro modos de sessão e camada experimental para Mods do Claude Code. Veja o que muda."
pubDate: "2026-10-06"
author: "gabriel-barboza"
category: "Dev e ferramentas"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/deepseek-harness-v0-2-app-desktop-o-que-muda/"
primaryKeyword: "deepseek harness"
draft: false
sources:
  - "https://github.com/deepseek-ai/deepseek-harness"
  - "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1"
  - "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2"
  - "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.1"
  - "https://www.deepseek.com/en/harness/"
  - "https://deepseek-harness.github.io/deepseek-harness/guide/providers"
  - "https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md"
  - "https://github.com/cordiverse/cordis"
  - "https://arxiv.org/abs/2608.25512"
  - "https://www.marktechpost.com/2026/10/03/deepseek-harness-v0-2-brings-official-desktop-apps-to-its-open-source-agent-harness/"
  - "https://github.com/anthropics/claude-code/blob/main/LICENSE.md"
  - "https://github.com/openai/codex/blob/main/LICENSE"
faq:
  - q: "O que é o DeepSeek Harness?"
    a: "É o agente de código aberto (licença MIT) da DeepSeek AI, também chamado de dsh. Ele transforma um modelo de linguagem em agente capaz de ler arquivos, rodar comandos e usar ferramentas. Sua arquitetura trata tudo como plugin, inclusive o loop do agente."
  - q: "O DeepSeek Harness tem app para desktop?"
    a: "Sim. Desde a v0.2.0-rc.2 (29/09/2026), há apps para macOS e Windows que já trazem o comando dsh, sem exigir instalar Node.js ou pnpm à parte. A página oficial oferece o download para macOS com Apple Silicon."
  - q: "O DeepSeek Harness funciona com Claude ou GPT?"
    a: "Sim. Além dos modelos da conta DeepSeek, o guia oficial permite adicionar provedores como anthropic e openai com chave de API, ou qualquer endpoint compatível com OpenAI Chat Completions, OpenAI Responses ou Anthropic Messages. Login via OAuth, como o do Codex, ainda não é suportado."
  - q: "O DeepSeek Harness roda os Mods do Claude Code?"
    a: "Só de forma experimental. A v0.2.1-alpha.1 traz uma camada de compatibilidade cujo objetivo declarado é testar se a API de Mods é um subconjunto dos plugins do dsh. Não é compatibilidade completa."
  - q: "O DeepSeek Harness é gratuito?"
    a: "O software é de código aberto sob licença MIT. O custo vem do modelo que você usa: créditos da conta DeepSeek ou a chave de API de outro provedor."
---

A DeepSeek levou o **DeepSeek Harness** (`dsh`), seu agente de código aberto, para a série **v0.2**, que traz app desktop oficial para macOS e Windows. A versão mais recente, **v0.2.1-alpha.1**, foi publicada no GitHub em **3 de outubro de 2026**. Ela adiciona uma **camada experimental de compatibilidade com os Mods do Claude Code**, um atalho para o próprio agente criar plugins e uma mudança que quebra compatibilidade para quem já escreveu extensões ([release notes no GitHub](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1)).

Na prática, o app desktop já traz o comando `dsh` embutido. Quem baixa o instalador não precisa mais instalar Node.js nem pnpm à parte ([notas da v0.2.0-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2)). O projeto continua em **prévia para desenvolvedores**, e a própria DeepSeek avisa no README que "haverá mudanças que quebram compatibilidade" ([README oficial](https://github.com/deepseek-ai/deepseek-harness)).

Esta notícia cobre o que foi lançado e o que muda para quem usa ou avalia agentes de código. A visão geral da família de modelos da DeepSeek, com preços e benchmarks, fica na nossa página [DeepSeek: modelos, preços e benchmarks](/ferramentas/modelos/deepseek/).

## O que é o DeepSeek Harness, em uma frase

Um **harness de agente** é a camada de software que envolve um modelo de linguagem e o transforma em agente. Ela lê arquivos, executa comandos, chama ferramentas e mantém o plano de trabalho. O DeepSeek Harness é esse tipo de camada, de código aberto e mantido pela DeepSeek AI. Ele segue uma arquitetura em que **tudo é plugin** e roda sobre o framework [Cordis](https://github.com/cordiverse/cordis), cujo desenho é descrito no artigo *A Programming Paradigm for Spatiotemporal Composability* ([arXiv 2608.25512](https://arxiv.org/abs/2608.25512)).

"Tudo é plugin" quer dizer que o adaptador de modelo, o registro de ferramentas e até o loop do agente são peças que dá para trocar. Para quem chega agora ao tema, o artigo [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/) explica os conceitos de base.

## Linha do tempo da série v0.2

| Versão | Data (GitHub, UTC) | Destaques |
| --- | --- | --- |
| v0.2.0-rc.1 | 28/09/2026 | Primeiro release candidate da série 0.2; busca na web sem chave extra para quem usa modelos da conta DeepSeek; diagnóstico de permissões no sandbox do Windows |
| v0.2.0-rc.2 | 29/09/2026 | App desktop para macOS e Windows passa a gerenciar e instalar o comando `dsh` pela barra de menus, sem Node ou pnpm separados; busca no seletor de modelos |
| v0.2.1-alpha.1 | 03/10/2026 | Camada experimental de compatibilidade com Claude Code Mods; botão "Deixar o Agent criar um plugin"; flag `--public-url`; pacote opcional de ferramentas de desenvolvedor; mudanças que quebram compatibilidade |

Fontes: [releases do repositório](https://github.com/deepseek-ai/deepseek-harness/releases), [v0.2.0-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.1), [v0.2.0-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2) e [v0.2.1-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1).

## O que mudou na prática

### App desktop com o `dsh` embutido

Até a série 0.1, o caminho principal era rodar o Web UI pelo terminal. Agora, segundo as notas da v0.2.0-rc.2, os apps desktop de macOS e Windows gerenciam e instalam o comando `dsh` pela barra de menus e cuidam dos plugins **sem exigir Node.js ou pnpm à parte**. A página oficial do produto oferece o download para macOS (Apple Silicon) e diz que o Harness está em "prévia pública no mundo todo e com código aberto" ([deepseek.com/harness](https://www.deepseek.com/en/harness/)).

O app reúne quatro frentes de uso: trabalho com documentos, planilhas e slides; código (explorar repositórios, corrigir bugs, rodar testes); pesquisa com citação de fontes; e tarefas em segundo plano ([página oficial](https://www.deepseek.com/en/harness/)).

### Quatro modos de sessão

As notas da v0.2.1-alpha.1 citam quatro modos:

- **Padrão (Standard)**: uso geral. Passou a ser o padrão embutido; sessões antigas mantêm o modo que já tinham.
- **Criador (Creator)**: você descreve um plugin no chat e o agente escreve e instala esse plugin.
- **PTC (programmatic tool calling)**: o agente chama ferramentas escrevendo código, em vez de uma chamada por vez.
- **Mínimo (Minimal)**: o loop mais enxuto. Lembretes e tarefas automatizadas não ficam disponíveis nesse modo nem em subagentes.

### Plugins criados pelo próprio agente

A gestão de plugins ganhou o botão **"Deixar o Agent criar um plugin"**. Ele abre o modo Criador, guarda o rascunho e só começa a trabalhar quando você envia o pedido. Na página oficial, a DeepSeek mostra o agente montando um plugin de timer Pomodoro: ele lê a skill de desenvolvimento de plugins do Cordis, escreve o `package.json` e o `client.js` e instala o pacote pelo `plugin_manager` ([deepseek.com/harness](https://www.deepseek.com/en/harness/)).

### Compatibilidade experimental com os Mods do Claude Code

Este é o item que mais chamou atenção. A v0.2.1-alpha.1 adiciona uma **camada experimental de compatibilidade com os Mods do Claude Code**, o sistema de plugins do agente da Anthropic. As notas deixam o objetivo bem delimitado. A ideia é "verificar se as capacidades da API de Mods do Claude Code são, de forma geral, um subconjunto do que os plugins do DeepSeek Harness fazem", e não "oferecer aos usuários compatibilidade completa e prática" ([release notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1)).

Em outras palavras, não conte com rodar seus Mods do Claude Code no `dsh` sem ajustes. Para entender o que são os mods e o que muda na segurança, veja [Claude Code ganha mods: o que são e o que muda](/noticias/claude-code-mods-lancamento-o-que-muda/).

### Tarefas automatizadas viram recurso nativo

Na rc.1, as tarefas automatizadas eram um pacote opcional de plugin. Na v0.2.1-alpha.1, viraram recurso embutido no Web UI. Na página oficial, a DeepSeek mostra um exemplo de agendamento semanal feito pela ferramenta `schedule_create`:

```json
{
  "prompt": "Summarize this week's project notes in a weekly report.",
  "title": "Weekly project report",
  "weekly": {"time":"17:00:00","time_zone":"Asia/Shanghai","weekdays":[5]}
}
```

### Ferramentas de desenvolvedor e acesso remoto

A alpha.1 traz um **pacote opcional de ferramentas de desenvolvedor**. Ele inclui logs brutos de sessão, navegação nos dois sentidos entre os grupos do chat e a conversa, e diagnóstico do host embutido (a interface desse DevTools está em inglês). Também ganhou a flag `--public-url`, que define o endereço público do Web UI, inclusive atrás de proxy reverso com prefixo de caminho.

## O que quebra se você já usa o `dsh`

Quem escreveu plugins ou perfis personalizados precisa revisar três pontos antes de atualizar ([release notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1)):

1. **Remoção dos plugins de runtime `invariant`** e dos exports `./invariant` de cada pacote. Extensões e perfis que usavam esses pontos de diagnóstico precisam ser adaptados.
2. **Plugins em subcaminho não leem mais um `package.json` próprio**. O texto exibido e os ícones agora precisam vir dos exports do subcaminho correspondente.
3. **A barra de estatísticas do compositor foi dividida** em duas entradas, `activity` e `usage`. Plugins que substituíam a linha `stats` antiga precisam atualizar o ID registrado.

Vale lembrar que a alpha.1 é marcada como *pre-release* no GitHub. Para uso diário, a escolha mais conservadora é ficar na série rc e acompanhar o changelog.

## Como testar

O README oficial dá dois caminhos para rodar o Harness fora do app desktop ([README](https://github.com/deepseek-ai/deepseek-harness)):

**Via npm (precisa de Node.js):**

```bash
npx @deepseek-ai/dsh web
```

O comando sobe o Web UI em `http://127.0.0.1:3080` e abre o navegador. Em sessões SSH, ele só imprime o endereço. Use `--no-open` para subir o servidor sem abrir o navegador.

**A partir do código-fonte:**

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

Antes de rodar, a DeepSeek pede que você leia o [aviso de segurança (SAFETY.md)](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md). É um bom hábito com qualquer agente que executa comandos na sua máquina. Para revisar o que o agente altera, vale ler também [como revisar código com IA sem perder o controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/).

## Não é só para modelos da DeepSeek

Você pode entrar com uma conta DeepSeek ou informar uma chave de API. O guia oficial de provedores também permite adicionar provedores de terceiros que já vêm no catálogo do `dsh`, como `anthropic`, `openai`, `moonshotai` (Kimi) e `zai` (GLM). Além disso, aceita um **modelo de API personalizado** com um destes três protocolos: OpenAI Chat Completions, OpenAI Responses e Anthropic Messages ([guia de provedores](https://deepseek-harness.github.io/deepseek-harness/guide/providers)).

Provedores que usam login via OAuth, como o Codex, **ainda não são suportados**, segundo o mesmo guia. A configuração avançada fica em `$DSH_HOME/profiles/<profile>/cordis.patch.yml`. Este é o exemplo oficial de um gateway compatível com OpenAI:

```yaml
- id: llm-pi-ai
  config:
    providers:
      my-gateway:
        apiKeyEnv: GATEWAY_API_KEY
        api: openai-completions
        baseURL: https://gateway.example/v1
        models:
          - id: legacy-chat
          - id: vision-preview
            input: [text, image]
```

O guia traz um detalhe útil para quem usa a família V4 por meio de gateway. Os modelos V4 "pensam" por padrão. Para que o nível `off` de fato desligue o raciocínio, é preciso definir `compat.thinkingFormat: deepseek`. Os modelos e preços da V4 estão na página [DeepSeek](/ferramentas/modelos/deepseek/).

Como o protocolo personalizado aceita qualquer URL compatível com OpenAI, em tese dá para apontar o `dsh` para um servidor local. **Isso não está documentado pela DeepSeek como caso de uso e não foi testado por nós.** Se o seu objetivo é rodar tudo localmente, comece pelo hub de [IA local](/ia/ia-local/).

## DeepSeek Harness, Claude Code e Codex lado a lado

| Item | DeepSeek Harness v0.2 | Claude Code | OpenAI Codex |
| --- | --- | --- | --- |
| Licença | MIT ([LICENSE](https://github.com/deepseek-ai/deepseek-harness/blob/master/LICENSE)) | Proprietária ([LICENSE.md](https://github.com/anthropics/claude-code/blob/main/LICENSE.md)) | Apache-2.0 ([LICENSE](https://github.com/openai/codex/blob/main/LICENSE)) |
| Status | Prévia para desenvolvedores | Disponibilidade geral | Disponibilidade geral |
| Modelos | Conta DeepSeek, provedores de catálogo e APIs compatíveis | Modelos Claude | Login ChatGPT ou chave de API OpenAI |
| Extensão | Tudo é plugin, inclusive o loop do agente | Plugins e Mods | MCP, plugins e skills |
| Início rápido | `npx @deepseek-ai/dsh web` | Instalador oficial | `npm install -g @openai/codex` |

A tabela compara arquitetura e licença, não qualidade. Para escolher uma ferramenta de código com IA para o seu time, use os critérios do nosso [comparativo de ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/).

## Por que isso importa para devs

- **Código aberto e permissivo.** A licença MIT permite estudar, adaptar e embutir o harness em produtos. Isso é raro entre agentes de código de grandes laboratórios.
- **Repositório popular.** No momento da apuração, o projeto tinha cerca de **244,5 mil estrelas e 29,3 mil forks** no GitHub ([repositório](https://github.com/deepseek-ai/deepseek-harness)). Por isso, vale acompanhar o ecossistema de plugins com a tag [`dsh-plugin`](https://github.com/topics/dsh-plugin).
- **Base para o seu próprio agente.** Como o loop do agente é um plugin, o `dsh` serve de ponto de partida para quem quer [criar um agente de IA com ferramentas](/tutoriais/como-criar-agente-ia-com-ferramentas/) sem começar do zero.
- **Risco de prévia.** As mudanças que quebram compatibilidade em uma alpha mostram que a API de plugins ainda está mudando. Para produção, trave versões.

## O que ainda não está confirmado

- **Data de versão estável (1.0)**: a DeepSeek não divulgou.
- **App desktop para Linux**: as notas citam desktop para macOS e Windows. No Linux, o caminho documentado é o `npx` ou a compilação a partir do código-fonte.
- **Benchmarks com o Harness**: a MarkTechPost informa que, segundo o changelog da API da DeepSeek, os testes de agente de código foram rodados no modo mínimo do Harness, com 82,7 pontos do DeepSeek-V4-Flash-0731 no Terminal Bench 2.1 ([MarkTechPost](https://www.marktechpost.com/2026/10/03/deepseek-harness-v0-2-brings-official-desktop-apps-to-its-open-source-agent-harness/)). **Não conferimos esse número direto na fonte primária.**
- **Grau real de compatibilidade com Mods do Claude Code**: a própria DeepSeek diz que a camada é experimental e não promete compatibilidade completa.
