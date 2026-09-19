# Relatório de validação — 60 conteúdos

Data da execução: 2026-09-18

## Resultado executivo

**Status geral: bloqueado para publicação automática.**

Os 60 arquivos existem e possuem frontmatter completo e fontes registradas, mas ainda há pendências editoriais que precisam ser resolvidas antes do upload.

## Testes executados

| Teste | Resultado | Observação |
|---|---|---|
| Inventário | ✅ Passou | 60 arquivos Markdown encontrados |
| Frontmatter obrigatório | ✅ Passou | Título, descrição, autor, categoria, silo, cluster, keyword, status e fontes presentes |
| Fontes registradas | ✅ Passou | 60/60 arquivos possuem fontes no frontmatter |
| Links internos | ✅ Passou no registro | 102 links encontrados e todos correspondem a slugs do registro |
| Keyword primária | ✅ Passou | Keywords dos 60 arquivos estão distintas após ajuste hub–spoke |
| Profundidade mínima | ✅ Passou no teste mecânico | nenhum arquivo está abaixo de 150 palavras; ainda é necessária revisão de profundidade por intenção |
| Marcadores de revisão | ⚠️ Bloqueado | 60 arquivos ainda contêm `Revisão pendente` |
| Formatação Git | ✅ Passou | `git diff --check` sem erros nos arquivos produzidos |

## Ajuste hub–spoke realizado

As páginas de conceito receberam keywords mais específicas (`o que são agentes de IA` e `o que é engenharia de prompt`), enquanto os hubs permanecem com a entidade ampla. A relação interna foi preservada sem duplicar a intenção principal.

## Conteúdos abaixo de 150 palavras

015, 016, 017, 018, 019, 021, 022, 025, 026, 028, 029, 030, 031, 032, 033, 034, 035 e 036.

Esse teste não define ranking por contagem de palavras. Ele sinaliza que esses textos provavelmente ainda estão em formato de rascunho e precisam de exemplos, evidências, limitações e cobertura da intenção.

## Gate para liberar o upload

1. Fazer revisão de profundidade conforme a intenção de busca, mesmo com o teste mínimo de palavras aprovado.
2. Substituir todos os marcadores `Revisão pendente` por verificações concluídas ou pendências registradas fora do texto público.
3. Confirmar os 102 links internos no ambiente do CMS.
4. Confirmar canonical e metadata no CMS.
5. Executar fact-check dos preços, versões, APIs e ferramentas.
6. Fazer revisão humana final e mudar o status para `approved`.

Até esses itens serem concluídos, os arquivos devem permanecer na área de revisão e não ser publicados diretamente.
