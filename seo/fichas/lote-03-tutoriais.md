# Lote 03 — Tutoriais executáveis

Status do lote: `draft-reviewed`

Objetivo: transformar tutoriais conceituais em procedimentos que uma pessoa
consiga repetir, validar e recuperar quando algo der errado.

## Critério de aprovação

Nenhum tutorial sai de `draft` sem:

- ambiente e versão registrados;
- pré-requisitos claros;
- procedimento executado do início ao fim;
- saída esperada conferida;
- pelo menos um erro provocado;
- logs ou screenshots sanitizados;
- instrução de rollback, limpeza ou desativação;
- fontes oficiais da ferramenta e do protocolo;
- declaração do que não foi testado.

## Tutoriais do lote

| URL | Função | Evidência obrigatória |
|---|---|---|
| `/tutoriais/n8n-primeiro-workflow/` | ensinar trigger, validação, transformação e erro | workflow exportável e execução válida/inválida |
| `/tutoriais/automacao-n8n-com-ia/` | adicionar IA a uma etapa controlada | modelo, versão, schema, custo e casos de recusa |
| `/tutoriais/automacao-n8n-webhook-api/` | conectar evento e API com segurança | endpoint de teste, assinatura, duplicação e timeout |
| `/tutoriais/como-criar-agente-ia-com-ferramentas/` | criar agente pequeno e reversível | ferramenta, permissões, logs e condição de parada |
| `/tutoriais/astro-para-site-editorial/` | construir página editorial com Astro | versão, comandos, build e resultado renderizado |
| `/tutoriais/rag-com-fontes-verificaveis/` | recuperar fonte e responder com atribuição | corpus, chunking, casos sem resposta e citações |

## Protocolo de teste

Para cada tutorial, registrar:

```yaml
tested:
  date: "YYYY-MM-DD"
  environment: "OS, runtime, ferramenta e versão"
  input: "fixture ou descrição sanitizada"
  expected: "resultado esperado"
  observed: "resultado observado"
  failureCases:
    - "caso inválido executado"
  status: "pass|fail|blocked"
  notes: "limitações e diferenças"
```

## Ordem de execução

1. primeiro workflow no n8n;
2. webhook e API;
3. n8n com IA;
4. agente com ferramenta;
5. Astro editorial;
6. RAG com fontes verificáveis.

A ordem começa por automação determinística, adiciona integração e só depois
introduz autonomia e recuperação de informação. Cada tutorial deve reutilizar
conceitos já explicados nos hubs, sem repetir uma introdução inteira.

## Qualidade da experiência

O leitor deve saber, antes de executar:

- o que será construído;
- quanto tempo e quais recursos são necessários;
- quais partes são seguras para teste;
- onde inserir seus próprios dados;
- como reconhecer sucesso;
- como desfazer o que foi feito.

Não esconder pré-requisitos, custos, limites ou etapas manuais. Um tutorial que
funciona apenas no ambiente do autor deve ser reclassificado como demonstração.
