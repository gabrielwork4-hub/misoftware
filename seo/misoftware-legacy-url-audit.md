# Auditoria de URLs legadas — misoftware.com.br

Data da coleta: 17/09/2026  
Fonte: Ahrefs Site Explorer (dados ao vivo; confiança 1,00)

## Diagnóstico atual

- Ahrefs registra **516 backlinks ativos** de **383 domínios de referência**; no histórico completo, são **3.647 backlinks** de **794 domínios**.
- O domínio não tem palavras-chave orgânicas, tráfego orgânico ou páginas rastreadas pelo Ahrefs no momento da coleta.
- A busca `site:misoftware.com.br` não retornou páginas. Portanto, não há arquitetura indexada atual a preservar; existe, porém, uma arquitetura legada de URLs que precisa receber uma decisão explícita no lançamento.

## Leitura de risco

O perfil de backlinks contém uma grande concentração de páginas automáticas de SEO (`*.shop`, `*.store`, `*.xyz`), quase todas sem tráfego e `nofollow`. Esses links não devem orientar conteúdo, redirecionamentos ou estratégia de autoridade.

Há sinais legítimos ligados ao antigo ecossistema de software: referências de GitHub/SciterSharp, Visual Studio Marketplace e Libraries.io para OmniCode, OmniLite, OmniView e SciterSharp. Eles são a única parcela que merece uma investigação de conteúdo e titularidade antes de qualquer recuperação.

## Famílias de URL legadas detectadas

### Núcleo técnico antigo — avaliar para preservação

As rotas abaixo aparecem no histórico de backlinks e representam o antigo produto/blog técnico. Manter a mesma rota só é indicado se houver direito de reutilizar ou recriar o conteúdo correspondente.

```text
/Bootstrap
/Bootstrap/Download
/Bootstrap/Templates
/Omni
/OmniCode
/OmniCode/Changelog
/Home/Tag/Wednesday%20CODE
/Home/Tag/Wednesday+CODE

/Home/Post/ATCommander
/Home/Post/Antlr4Code
/Home/Post/FDVideo
/Home/Post/FrontExperiments
/Home/Post/IconBundler
/Home/Post/Many-updates
/Home/Post/OSX_Buttons
/Home/Post/OmniCode-V1.1
/Home/Post/OmniCode2
/Home/Post/OmniCodeV1-2
/Home/Post/OmniCodeV1-3
/Home/Post/OmniLite
/Home/Post/OmniLite-OpenSource
/Home/Post/OmniV1-4
/Home/Post/OmniV22
/Home/Post/OmniView
/Home/Post/OpenWeatherMap_StatiosExplorer
/Home/Post/Outpost-2-Divided-Destiny
/Home/Post/Samples4005
/Home/Post/SciterEvents
/Home/Post/SciterSharp
/Home/Post/SciterSharp2
/Home/Post/SciterSharpForums
/Home/Post/Search-text-UI
/Home/Post/SurveyPrize
/Home/Post/TAB-AutoCall
/Home/Post/TheForce
/Home/Post/TheLibrary
/Home/Post/WednesdayCODE-Intro
/Home/Post/WednesdayCODE1
/Home/Post/WednesdayCODE2
/Home/Post/WednesdayCODE3
/Home/Post/WednesdayCODE4
/Home/Post/WednesdayCODE5
/Home/Post/WinForms-Sciter
/Home/Post/vivus-tis

/Post/ATCommander
/Post/AjaxLoaders
/Post/Antlr4Code
/Post/Bachelor-papers
/Post/BobSticker
/Post/CSSCtrlSpace
/Post/CardStack
/Post/ChamferJS
/Post/ChinaFix
/Post/DesignArsenal
/Post/FDVideo
/Post/FontDrop
/Post/GoingMultiplatform
/Post/HtmlView
/Post/IconBundler
/Post/IconDrop
/Post/IconDropSourceCode
/Post/Inauguration
/Post/LibraryOSX
/Post/Many-updates
/Post/NativeBehaviors
/Post/OctoDeskdex
/Post/Omni2
/Post/OmniCode2
/Post/OmniCodeV1-2
/Post/OmniCodeV1-3
/Post/OmniCodeV1-4
/Post/OmniFiddler
/Post/OmniLite
/Post/OmniV1-4
/Post/OmniV1-5
/Post/OmniView
/Post/OmniViewUpdate
/Post/OpenWeatherMap_StatiosExplorer
/Post/OpenWeatherMap_WeatherData
/Post/Plenty-updates
/Post/Samples4005
/Post/Sciter-Bootstrap
/Post/SciterEvents
/Post/SciterSharp
/Post/SciterSharp2
/Post/SciterSharpForums
/Post/SciterSharpWalkthrough
/Post/SciterTrick
/Post/Search-text-UI
/Post/SurveyWinner
/Post/TIScriptCtrlSpace
/Post/TheForce
/Post/TheLibrary
/Post/VS2017
/Post/WednesdayCODE1
/Post/WednesdayCODE2
/Post/WednesdayCODE3
/Post/WednesdayCODE4
/Post/WednesdayCODE5
/Post/WinAPI_CS_Wrappers
/Post/WinForms-Sciter
/Post/vivus-tis
```

### Arquivos técnicos

```text
/Content/BlogCDN/WedCODE4-chart.png
/Content/BlogCDN/story.pdf
```

Não redirecionar para a home. Se os arquivos puderem ser recuperados e houver direito de uso, restaurá-los no mesmo caminho; caso contrário, responder `410 Gone`.

### WordPress posterior, sem aderência ao novo projeto

Foram detectadas páginas de empregos, limpeza, PHP genérico, categorias e paginação, incluindo `/2024/12/`, `/2025/04/`, `/author/fabricio/`, `/category/*`, `/page/*`, `/feed/`, `/comments/feed/`, `/wp-admin/install.php` e posts como `/acompanhante-de-idosos/` e `/vagas-no-mcdonalds/`.

Essas URLs não têm relação com a proposta editorial de tecnologia. Devem receber `410 Gone`; nunca `301` para a home, artigos ou páginas de categoria da nova misoftware.

## Mapa de decisão para o lançamento

| Grupo | Resposta inicial | Condição para mudar a decisão |
|---|---|---|
| `http`, `https`, `www` e sem `www` na raiz | 301 para uma única URL canônica | Definir canônico antes do deploy |
| URLs Omni/SciterSharp/Wednesday CODE/Post | 410 temporariamente na primeira versão | Restaurar no mesmo caminho ou redirecionar à página tecnicamente equivalente, após confirmar titularidade e conteúdo |
| Arquivos `BlogCDN` | 410 | Restaurar o ativo original ou equivalente com direito de uso |
| WordPress de empregos/PHP/categorias | 410 permanente | Nenhuma; são irrelevantes ou potencialmente spam |
| `/wp-admin/install.php` | 404/410 e sem WordPress exposto | Nenhuma |

## Referências ativas de maior interesse

- GitHub (`ramon-mendes/SciterSharp`) aponta para rotas Omni e Wednesday CODE.
- Visual Studio Marketplace aponta para `/OmniCode/Changelog`.
- Libraries.io aponta para `/Home/Post/OmniLite`.

São referências `nofollow`; elas não justificam herdar autoridade por si só, mas demonstram que a identidade histórica do domínio está ligada a software e podem embasar uma página de contexto/arquivo se houver base legal e editorial.

## Próxima etapa obrigatória

Antes de publicar o blog, definir o domínio canônico e instalar uma camada de regras de borda para `301` canônicos e `410` seletivos. Só depois de verificar a titularidade do acervo antigo devemos criar redirects específicos para conteúdos técnicos legados.

## Decisão por URL/família

### Aplicar 301 no lançamento

| Origem | Destino | Motivo |
|---|---|---|
| `http://misoftware.com.br/` | `https://www.misoftware.com.br/` | Consolida variante de protocolo e host. |
| `https://misoftware.com.br/` | `https://www.misoftware.com.br/` | Consolida a raiz que concentra a maior parte das referências históricas. |
| `http://www.misoftware.com.br/` | `https://www.misoftware.com.br/` | Consolida protocolo. |

Esses são os únicos `301` seguros sem depender de conteúdo legado: tratam exclusivamente a identidade do domínio e levam para uma home editorial real.

### Candidatas a 301 condicional

Não ativar esses redirecionamentos antes de publicar destinos equivalentes e confirmar direito de uso do acervo anterior.

| URL legada | Destino proposto | Evidência ativa |
|---|---|---|
| `/Omni` | `/arquivo/omni` | Referência no GitHub. |
| `/OmniCode` | `/arquivo/omnicode` | Referência em espelho técnico. |
| `/OmniCode/Changelog` | `/arquivo/omnicode/changelog` | Referência no Visual Studio Marketplace. |
| `/Home/Post/OmniLite` | `/arquivo/omnilite` | Referência em Libraries.io. |

Os quatro backlinks são `nofollow`, mas vêm de superfícies legítimas e podem gerar visitas qualificadas. O valor aqui é continuidade e experiência do usuário, não promessa de transferência de autoridade.

### Aplicar 410

- Todas as URLs de WordPress posterior: empregos, limpeza, PHP genérico, categorias, autores, paginação, feeds e páginas de política antigas.
- `/wp-admin/install.php`.
- Os arquivos `BlogCDN` caso não possam ser restaurados com o arquivo original e direito de uso.
- As demais rotas técnicas (`/Post/*`, `/Home/Post/*`, `/Bootstrap*`) até que exista prova de titularidade e uma página editorial equivalente.

`410` comunica remoção intencional, impede que conteúdo irrelevante seja redirecionado para o novo blog e reduz o risco de o domínio herdar sinais temáticos incompatíveis.
