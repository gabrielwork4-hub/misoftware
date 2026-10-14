---
title: "Deno entra na Cloudflare: o que muda no Deno Deploy"
description: "Em 9/10/2026 o time do Deno entrou na Cloudflare: o Deno Deploy encerra em seis meses e o runtime terá um ano de correções. Veja prazos e como migrar."
pubDate: "2026-10-11"
author: "gabriel-barboza"
category: "Dev e ferramentas"
silo: desenvolvimento
kind: "noticia"
canonicalPath: "/noticias/deno-cloudflare-deno-deploy-o-que-muda/"
primaryKeyword: "deno deploy"
draft: false
sources:
  - "https://deno.com/blog/cloudflare"
  - "https://blog.cloudflare.com/deno-joins-cloudflare/"
  - "https://celld.dev/"
  - "https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/"
  - "https://docs.deno.com/runtime/fundamentals/http_server/"
  - "https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/"
  - "https://docs.astro.build/en/guides/deploy/deno/"
  - "https://github.com/cloudflare/workerd"
faq:
  - q: "O Deno vai acabar?"
    a: "Não imediatamente. O runtime recebe correções de bugs e segurança por mais um ano. Depois disso, a empresa encerra o desenvolvimento, mas o código continua open source (licença MIT) e a comunidade pode mantê-lo."
  - q: "Quando o Deno Deploy será desligado?"
    a: "O anúncio de 9 de outubro de 2026 fala em seis meses de operação, o que aponta para cerca de abril de 2027. A data exata não foi publicada."
  - q: "Para onde migrar uma aplicação do Deno Deploy?"
    a: "O destino oficial é o Cloudflare Workers, com apoio de migração para clientes pagantes. Também é possível auto-hospedar o workerd ou o celld, ou usar outro serviço que rode o runtime Deno enquanto ele tiver suporte."
  - q: "O JSR vai continuar funcionando?"
    a: "Sim. O registro JSR continua operando, com a infraestrutura migrando para a Cloudflare."
  - q: "O que é o celld?"
    a: "É um daemon open source criado pelo time do Deno que roda aplicações do Cloudflare Workers, incluindo Durable Objects, KV, Queues, D1 e R2, em servidores próprios, usando um bucket de armazenamento de objetos para guardar o estado."
---

Em 9 de outubro de 2026, Ryan Dahl, criador do Node.js e do Deno, anunciou que **toda a equipe do Deno está entrando na Cloudflare**. O anúncio saiu ao mesmo tempo no [blog do Deno](https://deno.com/blog/cloudflare) e no [blog da Cloudflare](https://blog.cloudflare.com/deno-joins-cloudflare/), em texto assinado por Dahl e por Kenton Varda, arquiteto do Cloudflare Workers.

O que muda na prática: o **Deno Deploy deixa de operar em seis meses**, o **runtime Deno recebe só correções de bugs e de segurança por mais um ano** (com releases mensais) e depois sai do desenvolvimento da empresa. O registro de pacotes **JSR continua no ar**, com a infraestrutura migrando para a Cloudflare. O foco do time passa a ser o **celld**, um servidor auto-hospedado compatível com Workers e Durable Objects, que será fundido ao **workerd**, o runtime open source da Cloudflare.

Se você roda aplicações no Deno Deploy, o relógio começou a contar. Se usa o Deno apenas como runtime local ou em CI, há mais tempo, mas a decisão de longo prazo também precisa ser tomada. Abaixo, o que foi confirmado, o que ainda não foi e como planejar a migração.

## O que foi anunciado em 9 de outubro de 2026

O post de Dahl no blog do Deno lista quatro compromissos concretos ([fonte](https://deno.com/blog/cloudflare)):

- **Runtime Deno:** suporte por mais um ano, com releases mensais de correção de bugs e segurança. Depois disso, a empresa encerra o desenvolvimento. O código continua open source e a comunidade pode assumir a manutenção.
- **Deno Deploy:** continua operando por seis meses e depois é desligado. Clientes pagantes terão suporte para migrar para o Cloudflare Workers.
- **JSR:** o registro de pacotes JavaScript/TypeScript continua operando, com a infraestrutura indo para a Cloudflare.
- **rusty_v8:** a biblioteca que liga o motor V8 ao Rust continua mantida, com trabalho para integrá-la ao workerd.

Dahl resume a decisão assim: o time vai concentrar o desenvolvimento futuro na plataforma compartilhada com a Cloudflare, em vez de manter um runtime e um serviço de hospedagem separados. Ele mesmo reconhece que é "uma mudança com consequências" para quem construiu em cima do Deno.

Os valores do negócio não foram divulgados, segundo a cobertura do [The New Stack](https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/).

## Linha do tempo: o que acontece com cada produto

A tabela abaixo junta o que as duas fontes oficiais dizem. Os prazos contam a partir de 9 de outubro de 2026, porque nenhuma das fontes publicou uma data exata de desligamento.

| Produto | O que é | Situação anunciada | Prazo estimado |
| --- | --- | --- | --- |
| Deno (runtime) | Runtime JavaScript/TypeScript criado por Ryan Dahl | Só correções de bugs e segurança, releases mensais | Cerca de out/2027 (1 ano) |
| Deno Deploy | Hospedagem serverless do Deno | Encerramento, com apoio de migração para clientes pagantes | Cerca de abr/2027 (6 meses) |
| JSR | Registro de pacotes JS/TS | Continua, infraestrutura vai para a Cloudflare | Sem data de fim |
| rusty_v8 | Bindings Rust para o V8 | Continua, com integração ao workerd | Sem data de fim |
| celld | Daemon auto-hospedado compatível com Workers | Ideias e código serão fundidos ao workerd | "Próximos meses" |
| workerd | Runtime open source do Cloudflare Workers | Ganha suporte de primeira classe para auto-hospedagem | "Próximos meses" |

As datas em "Prazo estimado" são cálculo nosso a partir dos períodos anunciados ("um ano", "seis meses"). Trate-as como referência, não como data oficial.

## O que é o celld e por que ele motivou o acordo

O **celld** é um daemon (um processo que roda em segundo plano no servidor) open source lançado pelo time do Deno em agosto de 2026. Ele roda uma aplicação escrita para o Cloudflare Workers em máquinas próprias, incluindo os **Durable Objects**.

Um Durable Object, na definição de Dahl, é um "singleton distribuído com um banco SQLite": um pequeno servidor endereçável por nome, com execução JavaScript de thread única e banco relacional próprio. Na prática, isso permite fatiar dados e conexões WebSocket por objeto (por exemplo, um objeto por sala de chat) e escalar sem montar a coordenação na mão ([fonte](https://blog.cloudflare.com/deno-joins-cloudflare/)).

O workerd, runtime do Workers aberto pela Cloudflare em 2022, já permitia auto-hospedar Workers. A lacuna, admitida pelo próprio Varda, era que os Durable Objects no workerd funcionam em **instância única**: bons para teste local, mas sem escala. O celld resolve justamente essa parte. Segundo Dahl, ele é um único binário em Rust cuja única dependência externa é um bucket de armazenamento de objetos.

### Características publicadas pelo projeto

Os números abaixo vêm da página oficial do [celld](https://celld.dev/), medidos pelo próprio projeto (benchmark não independente):

| Métrica | Valor informado |
| --- | --- |
| Tamanho do executável | 58 MB (estático) |
| Latência de escrita durável (um nó, mesma região) | ~90 ms |
| Failover após perda de nó, sem perda de escrita | ~20 s |
| Requisição sem estado, p50 / p99 | 0,2 / 0,3 ms (laptop Apple M, loopback) |
| RAM por célula residente | 0,47 MB |
| Células residentes por nó de 8 GB | 2.500 |
| Custo por célula residente/mês | ~US$ 0,02 |

O projeto também publica uma comparação de custo com os Durable Objects da Cloudflare. Com 10 células residentes, os Durable Objects saem mais baratos (US$ 42 contra US$ 49 por mês). A partir de 100 células, o celld fica mais barato na conta do próprio projeto, que considera nós de US$ 48 com 8 GB e exclui tráfego e operações de bucket.

### Serviços compatíveis

Segundo a documentação, o celld suporta Workers, Durable Objects, KV, Queues, D1, R2, Workflows, Cron Triggers, arquivos estáticos e Dynamic Workers. Containers estão em fase experimental. Ficam fora tudo o que depende da rede da Cloudflare, das GPUs ou da fazenda de navegadores. O comando `celld deploy` lê o `wrangler.json` existente e para quando encontra uma chave desconhecida, em vez de ignorá-la ([fonte](https://celld.dev/)).

## Por que a Cloudflare quer o Workers fora da própria rede

A parte mais interessante do anúncio é o argumento de Kenton Varda sobre **lock-in** (a dependência de um único fornecedor). Ele rebate a ideia de que o Workers é diferente para prender clientes: diz que o Workers é diferente porque o modelo é melhor, e que o lock-in "atrapalha" a Cloudflare. Como exemplo, cita que clientes como a Shopify só aceitaram usar o Workers for Platforms depois que o runtime foi aberto ([fonte](https://blog.cloudflare.com/deno-joins-cloudflare/)).

Varda também admite que a Cloudflare "não fez um bom trabalho" construindo o ecossistema em volta do workerd e que quase ninguém sabe que é possível rodá-lo em produção. Ao The New Stack, ele resumiu a lógica comercial: se o modelo for exclusivo da Cloudflare, o mercado endereçável encolhe; fazê-lo funcionar bem em qualquer provedor acaba beneficiando a própria empresa ([fonte](https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/)).

O plano anunciado é que Ryan Dahl e Bert Belder liderem um esforço para tornar a auto-hospedagem do workerd uma forma oficial e suportada de rodar apps no modelo Workers, incorporando código e ideias do celld. Mais anúncios estão prometidos "nos próximos meses".

## O que muda para quem usa Deno Deploy

Este é o grupo com o prazo mais curto: seis meses. A recomendação prática é tratar a migração como um projeto agora, não no último mês.

### Checklist de migração

1. **Inventarie o que roda no Deploy:** projetos, domínios, variáveis de ambiente, cron jobs e uso de APIs específicas do Deno (como `Deno.serve`, `Deno.env` e Deno KV).
2. **Escolha o destino:** Cloudflare Workers (destino oficial, com apoio para clientes pagantes), workerd ou celld auto-hospedados, ou outra hospedagem que rode o runtime Deno enquanto ele tiver suporte.
3. **Mapeie as APIs:** APIs do Deno não existem no Workers. Liste cada uso e o equivalente no destino.
4. **Recrie o pipeline:** ajuste o CI/CD para o novo alvo de deploy. Se você ainda não tem um pipeline com etapas claras, veja nosso guia de [CI/CD com GitHub Actions e Docker](/artigos/pipelines-cicd-github-actions-docker/).
5. **Teste com tráfego real antes da virada:** compare latência, erros e custo. Uma estratégia canary (liberar para uma fração do tráfego) reduz o risco. Mais sobre isso no hub de [DevOps](/desenvolvimento/devops/).
6. **Garanta observabilidade no destino:** logs, métricas e alertas precisam estar prontos antes do corte. Veja [observabilidade para aplicações web](/artigos/observabilidade-para-aplicacoes-web/).

### Exemplo: de `Deno.serve` para um Worker

O formato de entrada muda. No Deno, um servidor HTTP mínimo usa `Deno.serve`, conforme a [documentação do Deno](https://docs.deno.com/runtime/fundamentals/http_server/):

```ts
// main.ts (Deno / Deno Deploy)
Deno.serve((req: Request) => {
  return new Response("Olá do Deno");
});
```

No Cloudflare Workers, o ponto de entrada é um módulo que exporta um handler `fetch`, conforme a [documentação do Workers](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/):

```ts
// src/index.ts (Cloudflare Workers / workerd / celld)
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Olá do Worker");
  },
};
```

A configuração vai para o `wrangler.json`, o mesmo arquivo que o `celld deploy` lê:

```json
{
  "name": "minha-app",
  "main": "src/index.ts",
  "compatibility_date": "2026-10-01"
}
```

Os dois runtimes usam as APIs web padrão (`Request`, `Response`, `fetch`), então a lógica de negócio costuma migrar com poucas mudanças. O trabalho maior está nas APIs proprietárias, no armazenamento e na configuração.

## O que muda para quem usa o runtime Deno

Quem usa o Deno localmente, em scripts ou em CI tem cerca de um ano de correções garantidas. Depois disso, há dois caminhos possíveis:

- **Manutenção pela comunidade:** o runtime continua sob licença MIT e Dahl diz que "qualquer um" pode levá-lo adiante. Ao The New Stack, ele citou o io.js como precedente de fork comunitário ([fonte](https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/)).
- **Migração para outro runtime:** Node.js, Bun ou o próprio modelo Workers, dependendo do caso.

Para quem publica bibliotecas no **JSR**, a mudança é menor: o registro continua operando. Se o seu projeto Astro faz deploy no Deno, vale revisar o destino: a [documentação do Astro](https://docs.astro.build/en/guides/deploy/deno/) tem um guia de deploy com Deno, e nosso tutorial de [Astro para site editorial](/tutoriais/astro-para-site-editorial/) mostra outras opções de publicação.

## Deno, Node.js e Bun: o mapa dos runtimes depois do anúncio

Com a mudança, os três principais runtimes JavaScript de servidor passam a ter donos bem diferentes:

| Runtime | Situação em outubro de 2026 | Fonte |
| --- | --- | --- |
| Node.js | Projeto da OpenJS Foundation, sem mudança anunciada | [OpenJS Foundation](https://openjsf.org/projects) |
| Deno | Time na Cloudflare; runtime com 1 ano de correções e depois aberto à comunidade | [Deno](https://deno.com/blog/cloudflare) |
| Bun | Adquirido pela Anthropic; o The New Stack registra insatisfação de parte dos devs após a aquisição | [The New Stack](https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/) |

Para quem escolhe a stack de um back-end novo, o critério deixa de ser só desempenho e recursos e passa a incluir governança: quem mantém, com que incentivo e por quanto tempo. Nosso hub de [desenvolvimento back-end](/desenvolvimento/backend/) reúne os princípios para tomar essa decisão sem depender de um único fornecedor.

## A conexão com agentes de IA

Dahl dedica um trecho do anúncio à IA. Segundo ele, a necessidade de abstrações melhores é "especialmente aguda" com IA, e os Durable Objects reúnem o que um **harness de agente** (a camada que executa o loop do agente, guarda estado e chama ferramentas) precisa: execução serverless barata, estado persistente, WebSockets e uma interface JavaScript de alto nível. É por isso, diz ele, que o celld se concentra nos Durable Objects ([fonte](https://deno.com/blog/cloudflare)).

O argumento faz sentido para quem roda agentes de longa duração: cada sessão de agente pode virar um objeto com estado próprio, endereçável e isolado. Para entender as peças de um agente, veja nosso hub de [agentes de IA](/ia/agentes/).

## O que ainda não está confirmado

- **Data exata de desligamento do Deno Deploy:** só foi informado "seis meses". Não há data oficial.
- **Data exata do fim do suporte ao runtime:** só foi informado "mais um ano".
- **Migração do Deno KV:** as fontes oficiais não dizem se haverá ferramenta de migração do Deno KV para KV, D1 ou Durable Objects.
- **Apoio de migração para contas gratuitas:** o apoio anunciado é para clientes pagantes. Não há informação sobre usuários do plano gratuito.
- **Futuro do Fresh:** o framework web do Deno não é citado em nenhuma das fontes oficiais.
- **Valor da aquisição:** não divulgado.
- **Cronograma da fusão celld + workerd:** prometido para "os próximos meses", sem versões ou datas.
