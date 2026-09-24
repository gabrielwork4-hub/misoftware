import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_IMG = path.resolve(ROOT, 'public/images');
const BRAIN_DIR = 'C:/Users/gabriel.garcia/.gemini/antigravity/brain/010ad38b-2758-4001-8099-d3bbece3f86d';

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Ensure output directories exist
const DIRS = [
  'hero',
  'silos',
  'hubs',
  'ferramentas',
  'autores',
  'artigos',
  'institucional',
];

for (const dir of DIRS) {
  fs.mkdirSync(path.join(PUBLIC_IMG, dir), { recursive: true });
}

console.log('✓ Diretórios de imagens inicializados');

// 1. Process Master AI Generated Images to WebP
const aiImages = [
  {
    srcPattern: /hero_editorial_cover.*\.jpg$/,
    out: path.join(PUBLIC_IMG, 'hero/hero-editorial.webp'),
    width: 1200,
    height: 675,
  },
  {
    srcPattern: /silo_ia_cover.*\.jpg$/,
    out: path.join(PUBLIC_IMG, 'silos/ia.webp'),
    width: 1200,
    height: 675,
  },
  {
    srcPattern: /silo_automacao_cover.*\.jpg$/,
    out: path.join(PUBLIC_IMG, 'silos/automacao.webp'),
    width: 1200,
    height: 675,
  },
  {
    srcPattern: /silo_desenvolvimento_cover.*\.jpg$/,
    out: path.join(PUBLIC_IMG, 'silos/desenvolvimento.webp'),
    width: 1200,
    height: 675,
  },
  {
    srcPattern: /silo_ferramentas_cover.*\.jpg$/,
    out: path.join(PUBLIC_IMG, 'silos/ferramentas.webp'),
    width: 1200,
    height: 675,
  },
];

const brainFiles = fs.existsSync(BRAIN_DIR) ? fs.readdirSync(BRAIN_DIR) : [];

for (const item of aiImages) {
  const match = brainFiles.find((f) => item.srcPattern.test(f));
  if (match) {
    const srcPath = path.join(BRAIN_DIR, match);
    await sharp(srcPath)
      .resize(item.width, item.height, { fit: 'cover', position: 'center' })
      .webp({ quality: 82, effort: 6 })
      .toFile(item.out);
    const stat = fs.statSync(item.out);
    console.log(`✓ Processada capa WebP: ${path.basename(item.out)} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

// 2. Generate Official Brand Vector Logos for Tools and LLMs
const tools = [
  {
    id: 'cursor',
    name: 'Cursor',
    color: '#0062d2',
    desc: 'AI Code Editor',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.6)">
        <polygon points="0,-24 20,-12 0,0 -20,-12" fill="#93c5fd"/>
        <polygon points="-20,-12 0,0 0,24 -20,12" fill="#3b82f6"/>
        <polygon points="0,0 20,-12 20,12 0,24" fill="#1d4ed8"/>
        <polygon points="0,-3 7,11 0,8 -7,11" fill="#ffffff"/>
      </g>
    `,
  },
  {
    id: 'ollama',
    name: 'Ollama',
    color: '#059669',
    desc: 'Local LLM Runner',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.4)" fill="#ffffff">
        <path d="M -12,24 C -12,18 -14,10 -14,-4 C -14,-18 -6,-28 6,-28 C 12,-28 16,-24 18,-18 C 19,-15 22,-12 24,-6 C 25,2 20,8 18,14 C 16,18 18,24 18,24 L 12,24 C 12,18 10,14 10,8 C 10,2 12,-4 10,-10 C 8,-16 2,-20 -2,-20 C -8,-20 -10,-12 -10,-2 C -10,8 -8,16 -6,24 Z" />
        <circle cx="12" cy="-14" r="2.5" fill="#0d1117"/>
        <polygon points="8,-28 14,-36 17,-28" fill="#ffffff"/>
      </g>
    `,
  },
  {
    id: 'langchain',
    name: 'LangChain',
    color: '#00A67E',
    desc: 'Agent Framework',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.4)">
        <path d="M -18,16 C -18,4 -10,-14 6,-24 C 6,-24 14,-18 12,-4 C 10,8 2,16 -18,16 Z" fill="#00A67E"/>
        <path d="M 6,-24 C 14,-18 24,-12 24,-2 C 24,6 18,14 12,18 C 12,-4 10,-18 6,-24 Z" fill="#1C3C3C"/>
        <polygon points="12,-4 26,-8 18,4" fill="#F48120"/>
        <circle cx="6" cy="-8" r="3.5" fill="#ffffff"/>
        <circle cx="7" cy="-8" r="1.8" fill="#0d1117"/>
      </g>
    `,
  },
  {
    id: 'v0-vercel',
    name: 'v0 (Vercel)',
    color: '#ffffff',
    desc: 'Generative UI',
    svgGraphic: `
      <g transform="translate(128, 105)">
        <polygon points="0,-28 32,24 -32,24" fill="#ffffff"/>
        <text x="0" y="48" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">v0</text>
      </g>
    `,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    color: '#10a37f',
    desc: 'OpenAI Assistant',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.3)" stroke="#10a37f" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 0,-26 C 12,-26 22,-18 24,-6 C 26,6 18,18 8,24 L -12,24 C -22,24 -26,14 -24,4 C -22,-6 -14,-14 0,-14"/>
        <path d="M -22,-10 C -22,-22 -12,-26 0,-26 C 12,-26 22,-18 22,-6"/>
        <circle cx="0" cy="0" r="4" fill="#10a37f"/>
      </g>
    `,
  },
  {
    id: 'claude',
    name: 'Claude',
    color: '#d97757',
    desc: 'Anthropic AI',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.3)" fill="#d97757">
        <path d="M -4,-28 C -4,-28 4,-28 4,-28 C 4,-12 12,-4 28,-4 C 28,-4 28,4 28,4 C 12,4 4,12 4,28 C 4,28 -4,28 -4,28 C -4,12 -12,4 -28,4 C -28,4 -28,-4 -28,-4 C -12,-4 -4,-12 -4,-28 Z"/>
        <circle cx="0" cy="0" r="4" fill="#fbf7f4"/>
      </g>
    `,
  },
  {
    id: 'gemini',
    name: 'Gemini',
    color: '#4e88f5',
    desc: 'Google DeepMind',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.3)">
        <defs>
          <linearGradient id="gem-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4e88f5"/>
            <stop offset="50%" stop-color="#7c5cfc"/>
            <stop offset="100%" stop-color="#db74d7"/>
          </linearGradient>
        </defs>
        <path d="M 0,-30 C 0,-8 8,0 30,0 C 8,0 0,8 0,30 C 0,8 -8,0 -30,0 C -8,0 0,-8 0,-30 Z" fill="url(#gem-logo-grad)"/>
      </g>
    `,
  },
  {
    id: 'n8n',
    name: 'n8n',
    color: '#ea4b71',
    desc: 'Workflow Automation',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.3)">
        <path d="M -24,8 C -24,0 -16,-6 -8,-6 C 0,-6 8,0 8,8 C 8,16 16,22 24,22 C 32,22 40,16 40,8" fill="none" stroke="#ea4b71" stroke-width="5" stroke-linecap="round"/>
        <path d="M -24,-8 C -24,-16 -16,-22 -8,-22 C 0,-22 8,-16 8,-8" fill="none" stroke="#ea4b71" stroke-width="5" stroke-linecap="round"/>
        <circle cx="-24" cy="8" r="4.5" fill="#ff6d5a"/>
        <circle cx="-8" cy="-6" r="4.5" fill="#ff6d5a"/>
        <circle cx="8" cy="8" r="4.5" fill="#ff6d5a"/>
        <circle cx="24" cy="22" r="4.5" fill="#ff6d5a"/>
      </g>
    `,
  },
  {
    id: 'notion',
    name: 'Notion',
    color: '#ffffff',
    desc: 'Connected Workspace',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.2)">
        <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#ffffff"/>
        <path d="M -14,-14 L -6,-14 L 6,10 L 6,-14 L 14,-14 L 14,14 L 6,14 L -6,-10 L -6,14 L -14,14 Z" fill="#000000"/>
      </g>
    `,
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    color: '#705dcf',
    desc: 'Knowledge Base',
    svgGraphic: `
      <g transform="translate(128, 105) scale(1.2)">
        <polygon points="0,-28 18,-10 12,24 -12,24 -18,-10" fill="#705dcf"/>
        <polygon points="0,-28 0,16 12,24 18,-10" fill="#8a75e8"/>
        <polygon points="0,-28 0,16 -12,24 -18,-10" fill="#5845b5"/>
        <polygon points="0,-28 10,-6 0,16 -10,-6" fill="#ab9df2"/>
      </g>
    `,
  },
];

for (const t of tools) {
  const svg = `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="48" fill="#0d1117"/>
    <rect x="8" y="8" width="240" height="240" rx="40" fill="none" stroke="${t.color}" stroke-width="2.5" stroke-opacity="0.35"/>
    <circle cx="128" cy="105" r="54" fill="${t.color}" fill-opacity="0.12"/>
    ${t.svgGraphic}
    <text x="128" y="195" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" fill="#f8fafc" text-anchor="middle">${escapeXml(t.name)}</text>
    <text x="128" y="220" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="500" fill="#94a3b8" text-anchor="middle">${escapeXml(t.desc)}</text>
  </svg>`;

  const out = path.join(PUBLIC_IMG, `ferramentas/${t.id}.webp`);
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(out);
  console.log(`✓ Logo oficial gerado: ${t.id}.webp`);
}

// 3. Generate Author Avatars
const authors = [
  {
    id: 'gabriel-barboza',
    name: 'Gabriel Barboza',
    role: 'Product Owner & AI Specialist',
    initials: 'GB',
    bg: '#0048d1',
  },
  {
    id: 'redacao',
    name: 'Redação misoftware',
    role: 'Equipe Editorial Técnica',
    initials: 'MS',
    bg: '#1e293b',
  },
];

for (const a of authors) {
  const svg = `<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="grad-${a.id}" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${a.bg}" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <circle cx="128" cy="128" r="128" fill="url(#grad-${a.id})"/>
    <circle cx="128" cy="128" r="124" fill="none" stroke="#60a5fa" stroke-width="2" stroke-opacity="0.3"/>
    <text x="128" y="142" font-family="'JetBrains Mono', Consolas, monospace" font-size="76" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${escapeXml(a.initials)}</text>
  </svg>`;

  const out = path.join(PUBLIC_IMG, `autores/${a.id}.webp`);
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(out);
  console.log(`✓ Avatar gerado: ${a.id}.webp`);
}

// 4. Generate Thematic Topic Illustrations (NO SEO JARGON, NO DR, NO EEAT)
const filaDir = path.resolve(ROOT, 'src/content/fila');
const filaFiles = fs.readdirSync(filaDir).filter((f) => f.endsWith('.md'));

// Silo Base Colors
const SILO_THEMES = {
  ia: {
    accent: '#0062d2',
    accentLight: '#60a5fa',
    badgeBg: '#0f294d',
    gridColor: '#1e293b',
    label: 'INTELIGÊNCIA ARTIFICIAL',
  },
  automacao: {
    accent: '#059669',
    accentLight: '#34d399',
    badgeBg: '#064e3b',
    gridColor: '#1e293b',
    label: 'AUTOMAÇÃO & WORKFLOWS',
  },
  desenvolvimento: {
    accent: '#7c3aed',
    accentLight: '#a78bfa',
    badgeBg: '#3b0764',
    gridColor: '#1e293b',
    label: 'ENGENHARIA DE SOFTWARE',
  },
  ferramentas: {
    accent: '#d97706',
    accentLight: '#fbbf24',
    badgeBg: '#451a03',
    gridColor: '#1e293b',
    label: 'FERRAMENTAS & BENCHMARKS',
  },
};

/**
 * Topic Specific Diagram Generator based on Subject Keywords
 */
function getTopicIllustration(slug, title, theme) {
  const s = (slug + ' ' + title).toLowerCase();
  const acc = theme.accent;
  const light = theme.accentLight;

  // 1. RAG & Vector Embeddings
  if (s.includes('rag') || s.includes('chunking') || s.includes('embedding') || s.includes('vetor')) {
    return `
      <!-- RAG / Vector Space Illustration -->
      <g stroke="${acc}" stroke-width="1.5" stroke-opacity="0.4" fill="none">
        <circle cx="880" cy="280" r="140" stroke-dasharray="4 4" />
        <circle cx="880" cy="280" r="80" />
        <line x1="720" y1="280" x2="1040" y2="280" />
        <line x1="880" y1="120" x2="880" y2="440" />
        <line x1="770" y1="170" x2="990" y2="390" />
        <line x1="770" y1="390" x2="990" y2="170" />
      </g>
      <!-- Documents & Vectors -->
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <rect x="700" y="160" width="70" height="85" rx="8" />
        <rect x="990" y="310" width="70" height="85" rx="8" />
        <rect x="740" y="340" width="70" height="85" rx="8" stroke="${acc}" />
        <circle cx="880" cy="280" r="28" fill="${acc}" stroke="#ffffff" stroke-width="3" />
      </g>
      <g fill="${light}">
        <circle cx="840" cy="220" r="6" />
        <circle cx="930" cy="230" r="7" fill="#ffffff" />
        <circle cx="820" cy="330" r="6" />
        <circle cx="940" cy="320" r="7" fill="#ffffff" />
        <circle cx="880" cy="180" r="5" />
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" text-anchor="middle">
        <text x="880" y="284">RAG</text>
        <text x="735" y="205" fill="${light}">DOC</text>
        <text x="1025" y="355" fill="${light}">CTX</text>
        <text x="775" y="385">CHUNK</text>
      </g>
    `;
  }

  // 2. Agents & Autonomy
  if (s.includes('agente') || s.includes('agent') || s.includes('autonom')) {
    return `
      <!-- AI Agent Decision Loop -->
      <g stroke="${acc}" stroke-width="2.5" stroke-opacity="0.5" fill="none">
        <path d="M 880 140 C 990 140, 1050 200, 1050 280 C 1050 360, 990 420, 880 420 C 770 420, 710 360, 710 280 C 710 200, 770 140, 880 140" stroke-dasharray="6 6"/>
        <line x1="880" y1="210" x2="880" y2="350" stroke="${light}" />
        <line x1="810" y1="280" x2="950" y2="280" stroke="${light}" />
      </g>
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <circle cx="880" cy="140" r="36" fill="${acc}" stroke="#ffffff" stroke-width="2"/>
        <circle cx="1050" cy="280" r="32" />
        <circle cx="880" cy="420" r="32" />
        <circle cx="710" cy="280" r="32" />
        <circle cx="880" cy="280" r="22" fill="#090d16" stroke="${acc}"/>
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">
        <text x="880" y="144">PERCEIVE</text>
        <text x="1050" y="284">PLAN</text>
        <text x="880" y="424">ACT</text>
        <text x="710" y="284">REFLECT</text>
        <text x="880" y="284" fill="${light}">LLM</text>
      </g>
    `;
  }

  // 3. Prompt Engineering
  if (s.includes('prompt') || s.includes('engenharia-de-prompt')) {
    return `
      <!-- Prompt Architecture & Chain of Thought -->
      <g fill="#0f172a" stroke="${acc}" stroke-width="2">
        <rect x="680" y="140" width="380" height="70" rx="12" stroke="${light}"/>
        <rect x="720" y="240" width="300" height="60" rx="12" />
        <rect x="760" y="330" width="220" height="60" rx="12" stroke="${light}"/>
        <rect x="810" y="415" width="120" height="45" rx="10" fill="${acc}" stroke="#ffffff"/>
      </g>
      <g stroke="${light}" stroke-width="2" stroke-opacity="0.6" fill="none">
        <line x1="870" y1="210" x2="870" y2="240" />
        <line x1="870" y1="300" x2="870" y2="330" />
        <line x1="870" y1="390" x2="870" y2="415" />
      </g>
      <g fill="#f8fafc" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" text-anchor="middle">
        <text x="870" y="180" fill="${light}">SYSTEM DIRECTIVE &amp; CONTEXT</text>
        <text x="870" y="275">CHAIN-OF-THOUGHT REASONING</text>
        <text x="870" y="365">FEW-SHOT EXAMPLES</text>
        <text x="870" y="442" fill="#ffffff">STRUCTURED OUT</text>
      </g>
    `;
  }

  // 4. n8n & Workflow Automation
  if (s.includes('n8n') || s.includes('workflow') || s.includes('automacao') || s.includes('processo')) {
    return `
      <!-- Workflow Nodes Flow with Official n8n Mark -->
      <g stroke="${acc}" stroke-width="2.5" stroke-opacity="0.6" fill="none">
        <path d="M 660 270 L 750 270 L 800 180 L 910 180 L 960 270 L 1070 270" />
        <path d="M 750 270 L 800 360 L 910 360 L 960 270" />
      </g>
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <rect x="620" y="235" width="70" height="70" rx="16" />
        <rect x="770" y="145" width="80" height="70" rx="16" stroke="${light}" />
        <rect x="770" y="325" width="80" height="70" rx="16" />
        <rect x="890" y="145" width="80" height="70" rx="16" />
        <rect x="890" y="325" width="80" height="70" rx="16" stroke="${light}" />
        <rect x="1050" y="235" width="70" height="70" rx="16" fill="${acc}" stroke="#ffffff" />
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" text-anchor="middle">
        <text x="655" y="276">TRIGGER</text>
        <text x="810" y="186" fill="${light}">WEBHOOK</text>
        <text x="810" y="366">TRANSFORM</text>
        <text x="930" y="186">AI NODE</text>
        <text x="930" y="366" fill="${light}">FILTER</text>
        <text x="1085" y="276">OUTPUT</text>
      </g>
    `;
  }

  // 5. Webhooks & APIs / Idempotency
  if (s.includes('webhook') || s.includes('api') || s.includes('idempotencia') || s.includes('polling') || s.includes('fila')) {
    return `
      <!-- Webhooks, APIs & Events -->
      <g stroke="${acc}" stroke-width="2" stroke-opacity="0.4" fill="none">
        <circle cx="880" cy="270" r="120" stroke-dasharray="5 5" />
        <path d="M 680 270 L 800 270 M 960 270 L 1080 270" stroke-width="3" stroke="${light}"/>
      </g>
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <rect x="640" y="220" width="100" height="100" rx="16" />
        <circle cx="880" cy="270" r="55" fill="${acc}" stroke="#ffffff" stroke-width="3"/>
        <rect x="1020" y="220" width="100" height="100" rx="16" />
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" text-anchor="middle">
        <text x="690" y="265">EVENT</text>
        <text x="690" y="285" fill="${light}">EMITTER</text>
        <text x="880" y="265">POST</text>
        <text x="880" y="285" font-size="10">IDEMPOTENT</text>
        <text x="1070" y="265">CONSUMER</text>
        <text x="1070" y="285" fill="${light}">200 OK</text>
      </g>
    `;
  }

  // 6. CI/CD, Docker & DevOps
  if (s.includes('ci/cd') || s.includes('pipeline') || s.includes('docker') || s.includes('devops') || s.includes('deploy')) {
    return `
      <!-- CI/CD Pipeline Flow -->
      <g stroke="${acc}" stroke-width="2.5" stroke-opacity="0.6" fill="none">
        <line x1="680" y1="270" x2="1080" y2="270" />
      </g>
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <circle cx="700" cy="270" r="36" />
        <circle cx="820" cy="270" r="36" />
        <circle cx="940" cy="270" r="36" />
        <circle cx="1060" cy="270" r="36" fill="${acc}" stroke="#ffffff" />
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">
        <text x="700" y="274">BUILD</text>
        <text x="820" y="274" fill="${light}">TEST</text>
        <text x="940" y="274">DOCKER</text>
        <text x="1060" y="274">DEPLOY</text>
      </g>
      <g stroke="${light}" stroke-width="1.5" stroke-dasharray="3 3" fill="none">
        <path d="M 700 220 L 700 170 L 1060 170 L 1060 220" />
      </g>
      <text x="880" y="160" font-family="'JetBrains Mono', monospace" font-size="12" fill="${light}" text-anchor="middle">AUTOMATED PIPELINE VALIDATION</text>
    `;
  }

  // 7. Software Architecture & ADRs / Hexagonal
  if (s.includes('arquitetura') || s.includes('adr') || s.includes('hexagonal') || s.includes('clean') || s.includes('backend')) {
    return `
      <!-- Hexagonal / Clean Architecture -->
      <g fill="#0f172a" stroke="${acc}" stroke-width="2">
        <polygon points="880,120 1020,195 1020,345 880,420 740,345 740,195" stroke="${light}"/>
        <polygon points="880,165 975,217 975,322 880,375 785,322 785,217" stroke="${acc}"/>
        <circle cx="880" cy="270" r="45" fill="${acc}" stroke="#ffffff" stroke-width="2"/>
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" text-anchor="middle">
        <text x="880" y="265">CORE</text>
        <text x="880" y="285" fill="#f8fafc">DOMAIN</text>
        <text x="880" y="200" fill="${light}">APPLICATION SERVICES</text>
        <text x="880" y="395" fill="${light}">ADAPTERS &amp; PORTS</text>
      </g>
    `;
  }

  // 8. Testing & Quality
  if (s.includes('teste') || s.includes('qualidade') || s.includes('piramide')) {
    return `
      <!-- Testing Pyramid -->
      <g fill="#0f172a" stroke="${light}" stroke-width="2">
        <polygon points="880,140 820,230 940,230" fill="${acc}" stroke="#ffffff"/>
        <polygon points="810,245 750,335 1010,335 950,245" stroke="${light}"/>
        <polygon points="740,350 670,440 1090,440 1020,350" stroke="${acc}"/>
      </g>
      <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" text-anchor="middle">
        <text x="880" y="205">E2E</text>
        <text x="880" y="295" fill="${light}">INTEGRATION</text>
        <text x="880" y="405">UNIT TESTS</text>
      </g>
    `;
  }

  // 9. Editors, Comparison & Tools (Cursor, Ollama, Obsidian, etc.)
  return `
    <!-- Dual IDE / Code Comparison & Analysis -->
    <g fill="#0f172a" stroke="${acc}" stroke-width="2">
      <rect x="670" y="150" width="200" height="250" rx="14" stroke="${light}"/>
      <rect x="890" y="150" width="200" height="250" rx="14" stroke="${acc}"/>
    </g>
    <g fill="${light}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">
      <circle cx="700" cy="180" r="5" fill="#ef4444" />
      <circle cx="715" cy="180" r="5" fill="#eab308" />
      <circle cx="730" cy="180" r="5" fill="#22c55e" />
      
      <circle cx="920" cy="180" r="5" fill="#ef4444" />
      <circle cx="935" cy="180" r="5" fill="#eab308" />
      <circle cx="950" cy="180" r="5" fill="#22c55e" />

      <rect x="695" y="210" width="130" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>
      <rect x="695" y="230" width="90" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>
      <rect x="695" y="250" width="150" height="8" rx="3" fill="${acc}"/>
      <rect x="695" y="270" width="110" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>

      <rect x="915" y="210" width="140" height="8" rx="3" fill="${acc}"/>
      <rect x="915" y="230" width="100" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>
      <rect x="915" y="250" width="120" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>
      <rect x="915" y="270" width="150" height="8" rx="3" fill="${light}" fill-opacity="0.3"/>
    </g>
    <g fill="#ffffff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" text-anchor="middle">
      <text x="770" y="370">SPEC A</text>
      <text x="990" y="370" fill="${light}">SPEC B</text>
    </g>
  `;
}

let generatedCount = 0;

for (const file of filaFiles) {
  const filePath = path.join(filaDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/) || content.match(/title:\s*'([^']+)'/) || content.match(/title:\s*([^\r\n]+)/);
  const siloMatch = content.match(/silo:\s*(\w+)/);
  const categoryMatch = content.match(/category:\s*"([^"]+)"/) || content.match(/category:\s*'([^']+)'/) || content.match(/category:\s*([^\r\n]+)/);

  const title = titleMatch ? titleMatch[1].replace(/^["']|["']$/g, '') : 'misoftware';
  const silo = siloMatch ? siloMatch[1].trim() : 'desenvolvimento';
  const category = categoryMatch ? categoryMatch[1].replace(/^["']|["']$/g, '').trim() : silo;

  const theme = SILO_THEMES[silo] || SILO_THEMES.desenvolvimento;
  const slug = file.replace(/\.md$/, '');
  const outPath = path.join(PUBLIC_IMG, `artigos/${slug}.webp`);

  const words = title.split(' ');
  let line1 = '';
  let line2 = '';
  for (const w of words) {
    if ((line1 + ' ' + w).length < 30 && !line2) {
      line1 += (line1 ? ' ' : '') + w;
    } else {
      line2 += (line2 ? ' ' : '') + w;
    }
  }
  if (line2.length > 36) {
    line2 = line2.slice(0, 33) + '...';
  }

  const illustration = getTopicIllustration(slug, title, theme);

  const svg = `<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow-${slug}" cx="75%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="${theme.accent}" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#080b11" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid-${slug}" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${theme.gridColor}" stroke-width="1" stroke-opacity="0.35"/>
      </pattern>
    </defs>

    <!-- Fundo Base Limpo -->
    <rect width="1200" height="675" fill="#080b11"/>
    <rect width="1200" height="675" fill="url(#grid-${slug})"/>
    <rect width="1200" height="675" fill="url(#glow-${slug})"/>

    <!-- Barra Topo de Acento Editorial -->
    <rect x="0" y="0" width="1200" height="5" fill="${theme.accent}"/>

    <!-- Ilustração Temática Específica do Assunto -->
    ${illustration}

    <!-- Tag da Categoria Editorial Limpa -->
    <g transform="translate(80, 80)">
      <rect width="40" height="40" rx="10" fill="${theme.accent}"/>
      <text x="20" y="27" font-family="'JetBrains Mono', Consolas, monospace" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">m/</text>
      
      <rect x="54" y="5" width="240" height="30" rx="8" fill="${theme.badgeBg}" stroke="${theme.accent}" stroke-width="1"/>
      <text x="68" y="25" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="${theme.accentLight}" letter-spacing="1">${escapeXml(theme.label)}</text>
    </g>

    <!-- Subcategoria -->
    <text x="80" y="235" font-family="'JetBrains Mono', monospace" font-size="15" font-weight="600" fill="${theme.accentLight}">[ ${escapeXml(category.toUpperCase())} ]</text>

    <!-- Título do Assunto -->
    <text x="80" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="600" fill="#ffffff">${escapeXml(line1)}</text>
    ${line2 ? `<text x="80" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-weight="600" fill="#cbd5e1">${escapeXml(line2)}</text>` : ''}

    <!-- Rodapé Editorial Limpo (Sem SEO, Sem DR, Sem EEAT) -->
    <line x1="80" y1="565" x2="1120" y2="565" stroke="#1e293b" stroke-width="1.5"/>
    <text x="80" y="605" font-family="'JetBrains Mono', monospace" font-size="14" fill="#64748b">misoftware.com.br — tecnologia aplicada na prática</text>
  </svg>`;

  await sharp(Buffer.from(svg)).webp({ quality: 84 }).toFile(outPath);
  generatedCount++;
}

console.log(`✓ Geradas ${generatedCount} capas temáticas WebP limpas (sem jargões de SEO) para todos os artigos`);
