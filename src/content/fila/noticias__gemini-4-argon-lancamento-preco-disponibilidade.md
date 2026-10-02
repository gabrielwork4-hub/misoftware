---
title: "Gemini 4 Argon: lançamento, preço e quando chega a devs"
description: "Google anunciou o Gemini 4 Argon em 30/09/2026: saída de 1M tokens, US$ 2/US$ 10 por 1M tokens no preço de lançamento e acesso inicial restrito ao Fairwind."
pubDate: "2026-10-02"
author: "gabriel-barboza"
category: "Modelos e labs de IA"
silo: ia
kind: "noticia"
canonicalPath: "/noticias/gemini-4-argon-lancamento-preco-disponibilidade/"
primaryKeyword: "gemini 4 argon"
draft: false
sources:
  - "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
  - "https://deepmind.google/fairwind-program/"
  - "https://ai.google.dev/gemini-api/docs/pricing"
  - "https://www.vals.ai/benchmarks/vals_index"
  - "https://cwe-bench.com/"
  - "https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release"
faq:
  - q: "O que é o Gemini 4 Argon?"
    a: "É o primeiro modelo da geração Gemini 4 do Google, anunciado em 30/09/2026, voltado a engenharia de software de longo prazo, trabalho corporativo (jurídico e financeiro) e defesa cibernética."
  - q: "Já dá para usar o Gemini 4 Argon?"
    a: "Não para a maioria. Em 2 de outubro de 2026 o acesso está restrito a defensores cibernéticos do Fairwind Program; clientes pagos da API e assinantes do Google AI Ultra serão os primeiros na expansão, sem data definida."
  - q: "Quanto custa o Gemini 4 Argon na API?"
    a: "No lançamento, US$ 2 por 1 milhão de tokens de entrada e US$ 10 por 1 milhão de saída, com 95% de desconto em entrada em cache. Após o período introdutório, US$ 4 e US$ 20."
  - q: "Qual a diferença entre o Gemini 4 Argon e o Gemini 3.1 Pro?"
    a: "O Argon gera até 1 milhão de tokens de saída, contra 64 mil do Gemini 3.1 Pro, e é focado em tarefas longas de código e trabalho corporativo. O 3.1 Pro está disponível hoje; o Argon ainda não."
  - q: "O Gemini 4 Argon é melhor que GPT-6 e Claude para programar?"
    a: "Depende da tarefa. O Argon lidera em DeepSWE v1.1 (77,9%), mas fica atrás do GPT-6 Astra e do Claude Opus 5.5 em benchmarks de terminal citados pela VentureBeat."
---

O Google anunciou em **30 de setembro de 2026** o **Gemini 4 Argon**, primeiro modelo da geração Gemini 4. O anúncio, assinado por Koray Kavukcuoglu (SVP do Google DeepMind e Chief AI Architect do Google), posiciona o Argon como o novo modelo de fronteira da empresa para engenharia de software de longo prazo, trabalho corporativo (jurídico e financeiro) e defesa cibernética ([blog oficial do Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)).

O que muda na prática: o limite de **saída sobe de 64 mil para 1 milhão de tokens**, o preço de lançamento na API foi definido em **US$ 2 por 1M tokens de entrada e US$ 10 por 1M de saída**, e — ponto mais importante para quem desenvolve — **o modelo ainda não está aberto ao público**. Neste momento ele está sendo liberado apenas para defensores cibernéticos do Fairwind Program; clientes pagos da API e assinantes do Google AI Ultra serão os primeiros da fila quando houver expansão, sem data anunciada.

Para o panorama completo da família (Gemini 3.1 Pro, tiers Flash, preços e benchmarks verificados), veja a página do [Google Gemini](/ferramentas/modelos/google-gemini/).

## O que foi anunciado, em uma tabela

| Item | O que o Google informou | Fonte |
| --- | --- | --- |
| Nome | Gemini 4 Argon | Blog do Google, 30/09/2026 |
| Posicionamento | "Frontier model" para código, trabalho corporativo e defesa cibernética | Blog do Google |
| Limite de saída | 1M tokens (antes: 64K) | Blog do Google |
| Janela de entrada | Não informada no anúncio | — |
| Preço de lançamento | US$ 2 / 1M input; US$ 10 / 1M output | Blog do Google |
| Cache de entrada | 95% de desconto sobre o preço de input | Blog do Google |
| Preço após o período introdutório | US$ 4 / 1M input; US$ 20 / 1M output | Nota de rodapé do blog |
| Acesso hoje | Defensores cibernéticos do Fairwind Program | Blog do Google |
| Próximos a receber | Clientes pagos da API e assinantes Google AI Ultra | Blog do Google |
| Data de disponibilidade geral | Não anunciada ("as soon as possible") | Blog do Google |
| ID do modelo na API | Não publicado | — |

**Tokens** são os pedaços de texto (partes de palavras) que o modelo lê e gera; é a unidade de cobrança de praticamente todas as APIs de modelos de linguagem.

## Por que o acesso é restrito

O Google diz que liberar capacidades nesse nível "exige uma abordagem em fases". A empresa afirma participar do processo voluntário do governo dos EUA de acesso prévio a modelos antes do lançamento e que vai coletar feedback de testadores enquanto ajusta as salvaguardas.

O primeiro grupo com acesso é formado por **defensores cibernéticos** do [Fairwind Program](https://deepmind.google/fairwind-program/), programa do Google DeepMind voltado a governos e empresas que fazem defesa proativa. Um detalhe relevante: para esses parceiros confiáveis e para as equipes internas, o Google diz que vai liberar o Argon **sem as proteções cibernéticas** que limitariam o modelo, para que eles usem toda a capacidade de encontrar e corrigir vulnerabilidades.

Para o desenvolvedor comum, isso significa que **não dá para testar o Argon hoje** pelo Google AI Studio, pela Gemini API ou pelo app Gemini. Qualquer tutorial que mostre chamada ao modelo neste momento depende de acesso que a maioria não tem.

## Saída de 1 milhão de tokens: o que isso significa

O dado técnico mais concreto do anúncio é o limite de saída. Até aqui, o Gemini 3.1 Pro gerava no máximo 64K tokens por resposta, segundo a própria página de modelos do site, que reflete o model card oficial. O Argon passa a aceitar **até 1M tokens de saída**.

O argumento do Google é que, com essa folga, o modelo consegue "pensar a fundo e gerar centenas de milhares de tokens em uma única trajetória". Na prática, isso interessa a tarefas como:

- migrações grandes de código, em que o modelo precisa reescrever muitos arquivos de uma vez;
- geração de relatórios longos a partir de muitos documentos;
- execuções de agentes que acumulam raciocínio e saída ao longo de muitas etapas.

Um **agente de IA** é um sistema em que o modelo decide e executa uma sequência de ações (ler arquivos, rodar comandos, chamar APIs) para cumprir um objetivo, em vez de só responder uma pergunta. Se esse conceito ainda é novo para você, o artigo [o que são agentes de IA](/artigos/o-que-sao-agentes-de-ia/) explica a base.

Saída longa também tem custo longo. Uma resposta que use o limite inteiro de 1M tokens custaria **US$ 10 no preço de lançamento** e **US$ 20 no preço padrão**, só na parte de saída.

## Preço: lançamento, padrão e comparação

O anúncio traz dois preços. O introdutório vale "no lançamento"; depois, segundo a nota de rodapé, passa a valer o padrão. O Google **não informou quanto tempo dura o período introdutório**.

| Modelo | Input (US$/1M) | Output (US$/1M) | Observação |
| --- | --- | --- | --- |
| Gemini 4 Argon (lançamento) | 2 | 10 | Cache de input com 95% de desconto |
| Gemini 4 Argon (padrão) | 4 | 20 | Após o período introdutório |
| Gemini 3.1 Pro (≤200K de contexto) | 2 | 12 | Preço da [Gemini API](https://ai.google.dev/gemini-api/docs/pricing), verificado em 24/09/2026 |
| Gemini 3.1 Pro (>200K de contexto) | 4 | 18 | Idem |

Segundo a [VentureBeat](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release), o preço introdutório do Argon equivale a um quinto do preço do GPT-6 Astra (US$ 10/US$ 50) e à metade do Claude Opus 5.5 (US$ 4/US$ 20); no preço padrão, o Argon empata com o Opus 5.5. Esses valores de concorrentes são da reportagem e devem ser conferidos nas páginas de preço de cada empresa antes de qualquer decisão.

### Exemplo de custo por requisição

Cálculo feito a partir dos preços oficiais, para uma requisição com 100 mil tokens de entrada e 20 mil de saída, sem cache:

| Modelo / preço | Entrada | Saída | Total |
| --- | --- | --- | --- |
| Argon (lançamento) | US$ 0,20 | US$ 0,20 | **US$ 0,40** |
| Argon (padrão) | US$ 0,40 | US$ 0,40 | **US$ 0,80** |
| Gemini 3.1 Pro (≤200K) | US$ 0,20 | US$ 0,24 | **US$ 0,44** |

No preço de lançamento, o Argon fica praticamente no mesmo patamar do Gemini 3.1 Pro para esse perfil de uso. No preço padrão, custa cerca do dobro. Quem já usa o 3.1 Pro em produção deve planejar a troca considerando o preço padrão, não o promocional.

## Benchmarks divulgados

**Benchmark** é um conjunto padronizado de tarefas usado para medir e comparar modelos. Os números abaixo estão no texto do anúncio oficial:

| Benchmark | Gemini 4 Argon | O que mede |
| --- | --- | --- |
| DeepSWE v1.1 | 77,9% | Engenharia de software real, de longo prazo |
| AutomationBench (Zapier) | 51,3% (1º lugar) | Execução de ponta a ponta em funções de negócio |
| LVBench | 91,7% | Compreensão de vídeos longos |
| CWE-bench v1 | 68% (empate em 1º) | Correção de vulnerabilidades de segurança |

O Google também afirma que o Argon lidera o [Vals Index](https://www.vals.ai/benchmarks/vals_index), que pondera finanças, código, jurídico e tributário pelo peso de cada setor no PIB dos EUA, e que tem desempenho de ponta no Vals Finance Agent v2 e no Harvey's Legal Agent Benchmark.

### Onde o Argon fica atrás

A comparação com concorrentes aparece em gráficos do anúncio. A VentureBeat transcreveu esses gráficos: o Argon lideraria sozinho em 12 de 18 benchmarks, mas ficaria atrás em três testes de código e terminal:

| Benchmark | Gemini 4 Argon | Melhor concorrente |
| --- | --- | --- |
| FrontierSWE v2 | 55,0% | GPT-6 Astra: 65,5% |
| Terminal-Bench Science 0.1 | 57,6% | GPT-6 Astra: 68,1% |
| Terminal-Bench 4.0 | 57,4% | Claude Opus 5.5: 66,4% |

Esses números são da transcrição da VentureBeat, não do texto do Google. A leitura útil para devs: o Argon parece mais forte em tarefas longas de engenharia e de conhecimento corporativo do que em execução agêntica no terminal, onde OpenAI e Anthropic seguem à frente nos testes citados.

Como sempre, benchmark de fornecedor não substitui teste no seu caso de uso. O artigo [como avaliar agentes de IA](/artigos/como-avaliar-agentes-de-ia/) mostra como montar uma avaliação própria.

## Segurança: o que o Google diz ter feito

O anúncio dedica uma seção inteira às salvaguardas antes da disponibilidade ampla, em quatro frentes:

1. **Mau uso:** o modelo é treinado para recusar pedidos de ataques cibernéticos ou QBRN (químicos, biológicos, radiológicos e nucleares), seguindo o Frontier Safety Framework do Google. A empresa diz monitorar ativações internas do modelo para detectar abuso.
2. **Prompt injection:** ataque em que instruções maliciosas são escondidas no conteúdo que o modelo lê (uma página, um e-mail, um arquivo) para sequestrar o comportamento dele. O Google diz que o Argon lidera o benchmark de injeção indireta da Gray Swan. A VentureBeat reporta taxa de sucesso de ataque de 0,7% para o Argon, contra 1,0% do Claude e 8,5% do GPT-6 Astra.
3. **Desalinhamento:** monitoramento da cadeia de raciocínio e das ações, com interrupção da execução quando o modelo tenta ir além da intenção do usuário.
4. **Sandboxes:** ambientes isolados e selados antes de treinos ou avaliações de alto risco.

Para quem pretende colocar o Argon dentro de agentes com acesso a ferramentas, prompt injection é o risco número um. Robustez maior no benchmark ajuda, mas não elimina a necessidade de limitar permissões e revisar o que o agente executa — o mesmo princípio de [revisão de código com IA sem perder o controle](/artigos/revisao-de-codigo-com-ia-sem-perder-controle/).

## Casos internos citados pelo Google

O anúncio traz exemplos de uso interno que ajudam a entender o tipo de tarefa para a qual o modelo foi pensado:

- **Migração de C/C++ para Rust:** agentes Argon estão migrando bases de código do Google, de dezenas de milhares de linhas em bibliotecas como re2 e libgav1 até mais de 800 mil linhas no kernel Zircon, do Fuchsia. O Google ressalta que essas reescritas passam por auditoria automatizada e manual antes de ir para produção.
- **libgav1:** agentes substituíram 32 mil linhas de código SIMD por Rust seguro que o compilador vetoriza sozinho; o decodificador resultante roda **2,7x mais rápido** que o port anterior em Rust, com saída de vídeo idêntica.
- **Memória nos data centers:** agentes analisaram telemetria de profiling e aplicaram otimizações que liberaram mais de **300 TiB** de memória, com economia total estimada entre 500 TiB e 1 PiB.
- **Computação quântica:** em um exemplo, o modelo superou em 40% uma referência publicada de otimização de recursos (qubits × portas).
- **Cibersegurança externa:** a Wiz usa o Argon no programa Scan for Good e, segundo o Google, encontrou uma vulnerabilidade crítica em software de saúde usado por hospitais que modelos anteriores não tinham detectado.

São números divulgados pelo próprio Google, sem auditoria independente até agora.

## Comparação com a geração anterior

| Característica | Gemini 3.1 Pro | Gemini 4 Argon |
| --- | --- | --- |
| Status | Disponível na API e no app | Acesso restrito (Fairwind) |
| Saída máxima | 64K tokens | 1M tokens |
| Contexto de entrada | 1M tokens | Não informado |
| Preço (input/output, US$/1M) | 2/12 (≤200K) | 2/10 (lançamento); 4/20 (padrão) |
| Foco declarado | Uso geral, multimodal | Código de longo prazo, trabalho corporativo, defesa cibernética |

Dados do Gemini 3.1 Pro conforme a página do [Google Gemini](/ferramentas/modelos/google-gemini/) no misoftware, verificados no model card e na tabela de preços oficial em 24/09/2026.

## Como se preparar enquanto o acesso não abre

Não há como chamar o Argon hoje sem estar no Fairwind. O que dá para fazer agora:

1. **Confirme se sua conta é paga na Gemini API.** O Google disse que clientes pagos da API estão entre os primeiros da expansão. Conta no nível gratuito provavelmente não entra na primeira leva.
2. **Monte um conjunto de avaliação com tarefas reais.** Separe 20 a 50 casos do seu produto (bugs reais, PRs, documentos) para comparar Argon, Gemini 3.1 Pro e o modelo que você usa hoje assim que o acesso abrir. O guia [como avaliar prompts em produção](/artigos/como-avaliar-prompts-em-producao/) ajuda a estruturar.
3. **Revise limites de custo.** Com saída de até 1M tokens, uma única chamada mal configurada pode custar até US$ 20 só de saída no preço padrão. Defina o máximo de tokens de saída explicitamente.
4. **Mapeie onde prompt injection pode entrar** nos seus fluxos com ferramentas antes de dar mais autonomia ao modelo.

Para comparar alternativas já disponíveis para programação, veja o comparativo de [ferramentas de IA para desenvolvimento de software](/comparativos/ferramentas-ia-para-desenvolvimento-de-software/).

## O que ainda não está confirmado

- **Data de disponibilidade** para desenvolvedores, empresas e consumidores: o Google só diz "o mais rápido possível".
- **Duração do preço introdutório:** não informada.
- **ID do modelo na API** e disponibilidade no Vertex AI e no Google AI Studio: não publicados.
- **Janela de contexto de entrada:** o anúncio fala só do limite de saída.
- **Disponibilidade no Brasil** (app Gemini e plano Google AI Ultra): não há menção a países.
- **Comparações com GPT-6 Astra e Claude Opus 5.5:** vêm dos gráficos do anúncio transcritos pela imprensa; a tabela completa com números de concorrentes não está no texto oficial.
- **Outros modelos da família Gemini 4** (por exemplo, versões Flash): não foram anunciados.
