/**
 * Gera a imagem OG padrão da marca (public/og-default.png), usada como prévia
 * social de fallback em toda página sem imagem própria (ver BaseHead.astro e
 * SITE.defaultOgImage em src/consts.ts).
 *
 * Fonte única: o SVG abaixo. Rode com `npm run build:og` após ajustar o design.
 * Usa fontes web-safe (Georgia/Segoe UI/Consolas) para render determinístico via
 * sharp, sem depender das fontes do brand instaladas no sistema.
 *
 * Formato: 1200×630 (padrão Open Graph / Twitter summary_large_image).
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/og-default.png');

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="82%" cy="12%" r="75%">
      <stop offset="0%" stop-color="#0062d2" stop-opacity="0.50"/>
      <stop offset="55%" stop-color="#08356f" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#0d1117" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0d1117"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="${W}" height="8" fill="#0062d2"/>

  <!-- Lockup da marca -->
  <g transform="translate(80,86)">
    <rect width="84" height="84" rx="18" fill="#0062d2"/>
    <text x="42" y="57" font-family="Consolas, 'Courier New', monospace" font-size="40" font-weight="700" fill="#ffffff" text-anchor="middle">m/</text>
    <text x="108" y="57" font-family="'Segoe UI', Arial, sans-serif" font-size="42" font-weight="700" fill="#ffffff">misoftware</text>
  </g>

  <!-- Manchete editorial -->
  <text x="80" y="332" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" fill="#ffffff">Tecnologia aplicada,</text>
  <text x="80" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" font-style="italic" fill="#53a8ff">na prática rigorosa.</text>

  <!-- Silos -->
  <text x="80" y="502" font-family="'Segoe UI', Arial, sans-serif" font-size="30" fill="#94a3b8">IA · Automação · Desenvolvimento · Ferramentas</text>

  <!-- URL -->
  <text x="80" y="576" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#53a8ff">www.misoftware.com.br</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log(`✓ OG gerado: ${OUT}`);
