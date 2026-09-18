/**
 * Cloudflare Pages Function middleware — camada de regras de borda.
 * (ARQUITETURA §2 "Regras de borda" e §8 "Arquitetura de URLs legadas".)
 *
 * Ordem de decisão (garante salto ÚNICO):
 *   1. Canonicalização de host/protocolo → 301 direto para https://www.…
 *   2. Redirect 301 explícito (path legado → destino) — se houver no mapa.
 *   3. Path no conjunto 410 → 410 Gone.
 *   4. Senão → passa para o site estático.
 *
 * O mapa vem de redirects.generated.json, gerado a partir do CSV canônico.
 * Decisão registrada (2026-09-17): as rotas técnicas legadas (Omni, OmniCode,
 * OmniLite, OmniView, TheLibrary, Bootstrap) respondem 410 — o ecossistema
 * pertence à antiga MI Software (Ramon Mendes) e segue vivo no VS Marketplace,
 * GitHub e sciter.com; a nova misoftware não detém titularidade.
 */

import redirectMap from './redirects.generated.json';

interface RedirectMap {
  canonicalHost: string;
  canonicalProtocol: string;
  redirects: { from: string; to: string }[];
  gone: string[];
}

const map = redirectMap as unknown as RedirectMap;

const goneSet = new Set(map.gone);
const redirectByPath = new Map(map.redirects.map((r) => [r.from, r.to]));

/** Decodifica com fallback seguro (paths legados podem ter % ou +). */
function safeDecode(path: string): string {
  try {
    return decodeURIComponent(path.replace(/\+/g, '%20'));
  } catch {
    return path;
  }
}

/** Verifica se o path (ou sua variante decodificada) está em 410. */
function isGone(pathname: string): boolean {
  if (goneSet.has(pathname)) return true;
  const decoded = safeDecode(pathname);
  return decoded !== pathname && goneSet.has(decoded);
}

const GONE_BODY = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>410 — Conteúdo removido | misoftware</title>
<meta name="robots" content="noindex"></head>
<body style="font-family:system-ui,sans-serif;max-width:40rem;margin:6rem auto;padding:0 1.25rem;color:#0d1117">
<p style="font-family:monospace;color:#0062d2;font-weight:600;letter-spacing:.1em">HTTP 410 · GONE</p>
<h1 style="font-size:1.75rem;font-weight:600">Este conteúdo não existe mais aqui.</h1>
<p style="color:#475569;line-height:1.6">A página que você procurava foi removida permanentemente.
<a href="/" style="color:#0062d2">Ir para a página inicial da misoftware →</a></p>
</body></html>`;

export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. Canonicalização de host/protocolo (salto único).
  const needsHost = url.hostname !== map.canonicalHost;
  const needsProto = url.protocol !== `${map.canonicalProtocol}:`;
  if (needsHost || needsProto) {
    const target = new URL(url.toString());
    target.protocol = `${map.canonicalProtocol}:`;
    target.hostname = map.canonicalHost;
    target.port = '';
    return Response.redirect(target.toString(), 301);
  }

  // 2. Redirect 301 explícito (path legado → destino).
  const explicit = redirectByPath.get(url.pathname);
  if (explicit) {
    const target = explicit.startsWith('http')
      ? explicit
      : new URL(explicit, url.origin).toString();
    return Response.redirect(target, 301);
  }

  // 3. 410 Gone para rotas legadas descartadas.
  if (isGone(url.pathname)) {
    return new Response(GONE_BODY, {
      status: 410,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex',
        'cache-control': 'public, max-age=3600',
      },
    });
  }

  // 4. Passa para o site estático.
  return next();
};
