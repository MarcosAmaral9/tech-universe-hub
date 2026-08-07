/**
 * generate-page-html.mjs
 * Gera um .html estático para TODA rota pública indexável que não seja post
 * nem região (essas já são geradas por generate-post-html.mjs).
 *
 * Motivo: o site é uma SPA sem SSR. Sem estes arquivos, o Googlebot (e qualquer
 * crawler que não execute JS) recebe o index.html genérico em /ia, /tag/fiis,
 * /autor/marcos-amaral etc. — mesmo título, mesma descrição e canonical da home.
 * Isso é a principal causa de "página descoberta, mas não indexada".
 *
 * Fonte das URLs: public/sitemap.xml (gerado no prebuild).
 * Fonte dos metadados: PAGE_META de src/components/DynamicSEO.tsx +
 * SUBTOPIC_LABELS de src/lib/subtopics.ts (para os hubs /tag/:slug).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist");
const BASE_URL = "https://viciocode.com";
const SITE = "VICIO&lt;CODE&gt;";
const OG_DEFAULT = `${BASE_URL}/og-image.png`;

const e = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── 1. URLs do sitemap ───────────────────────────────────────────────────────
const sitemap = fs.readFileSync(path.resolve(ROOT, "public/sitemap.xml"), "utf8");
const allPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(BASE_URL, ""))
  .filter((p) => p !== "/" && !p.startsWith("/post/") && !p.startsWith("/regiao/"));

// ── 2. PAGE_META de DynamicSEO.tsx ───────────────────────────────────────────
const seoSource = fs.readFileSync(path.resolve(ROOT, "src/components/DynamicSEO.tsx"), "utf8");
const metaRegex =
  /"(\/[^"]*)":\s*\{\s*title:\s*"((?:[^"\\]|\\.)*)",\s*description:\s*"((?:[^"\\]|\\.)*)",/g;
const PAGE_META = {};
let mm;
while ((mm = metaRegex.exec(seoSource)) !== null) {
  PAGE_META[mm[1]] = {
    title: mm[2].replace(/\\"/g, '"'),
    description: mm[3].replace(/\\"/g, '"'),
  };
}

// ── 3. Rótulos de subtópicos + contagem de posts por tag ─────────────────────
const subSource = fs.readFileSync(path.resolve(ROOT, "src/lib/subtopics.ts"), "utf8");
const SUBTOPIC_LABELS = {};
for (const m of subSource.matchAll(/^\s{2}"?([a-z0-9-]+)"?:\s*"([^"]+)",/gm)) {
  SUBTOPIC_LABELS[m[1]] = m[2];
}

const postsSource = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const tagCount = {};
for (const m of postsSource.matchAll(/subtopic:\s*"([^"]+)"/g)) {
  tagCount[m[1]] = (tagCount[m[1]] ?? 0) + 1;
}

// ── 4. index.html limpo das metatags dinâmicas ───────────────────────────────
const indexHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const stripped = indexHtml
  .replace(/<title>[\s\S]*?<\/title>/g, "")
  .replace(/<meta name="description"[^>]*>/g, "")
  .replace(/<link rel="canonical"[^>]*>/g, "")
  .replace(/<meta property="og:title"[^>]*>/g, "")
  .replace(/<meta property="og:description"[^>]*>/g, "")
  .replace(/<meta property="og:url"[^>]*>/g, "")
  .replace(/<meta property="og:type"[^>]*>/g, "")
  .replace(/<meta name="twitter:title"[^>]*>/g, "")
  .replace(/<meta name="twitter:description"[^>]*>/g, "")
  // Evita duplicidade de imagem social: o bloco injetado abaixo define og:image/twitter:image.
  .replace(/<meta property="og:image"[^>]*>/g, "")
  .replace(/<meta property="og:image:width"[^>]*>/g, "")
  .replace(/<meta property="og:image:height"[^>]*>/g, "")
  .replace(/<meta property="og:image:alt"[^>]*>/g, "")
  .replace(/<meta name="twitter:card"[^>]*>/g, "")
  .replace(/<meta name="twitter:image"[^>]*>/g, "")
  .replace(/<meta name="twitter:image:alt"[^>]*>/g, "");

const metaFor = (p) => {
  if (PAGE_META[p]) return PAGE_META[p];
  if (p.startsWith("/tag/")) {
    const slug = p.slice(5);
    const label = SUBTOPIC_LABELS[slug] ?? slug;
    const n = tagCount[slug] ?? 0;
    return {
      title: `${label}: todos os artigos`,
      description: `${n} artigo${n === 1 ? "" : "s"} sobre ${label} no VICIO<CODE> — análises, guias e notícias apuradas em fontes oficiais.`,
    };
  }
  return null;
};

let written = 0;
const missing = [];


// Limites de SERP: título ≤ 60 chars (com sufixo de marca) e descrição ≤ 160.
function clamp(text, max) {
  if (!text) return text;
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const sp = cut.lastIndexOf(" ");
  return (sp > max * 0.6 ? cut.slice(0, sp) : cut).replace(/[\s,;:.\-—|]+$/, "") + "…";
}

for (const p of allPaths) {
  const meta = metaFor(p);
  if (!meta) {
    missing.push(p);
    continue;
  }
  const url = `${BASE_URL}${p}`;
  const titleRaw = clamp(meta.title, 60 - " | VICIO<CODE>".length);
  const descRaw = clamp(meta.description, 160);
  const title = e(titleRaw);
  const desc = e(descRaw);
  const isTag = p.startsWith("/tag/");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": isTag ? "CollectionPage" : "WebPage",
    name: titleRaw,
    description: descRaw,
    url,
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", name: "VICIO<CODE>", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "VICIO<CODE>",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512x512.png` },
    },
  };

  const inject = `
    <title>${title} | ${SITE}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${OG_DEFAULT}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${OG_DEFAULT}" />
    <meta name="twitter:image:alt" content="${title}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;

  const html = stripped.replace("</head>", `${inject}\n  </head>`);
  const outFile = path.join(DIST, `${p.replace(/^\//, "")}.html`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
  written++;
}

// ── 5. Home: garante canonical self-referencial no index.html ────────────────
if (!/<link rel="canonical"/.test(indexHtml)) {
  fs.writeFileSync(
    path.join(DIST, "index.html"),
    indexHtml.replace("</head>", `  <link rel="canonical" href="${BASE_URL}/" />\n</head>`),
    "utf8"
  );
  console.log("✅ canonical adicionado a dist/index.html");
}

console.log(`✅ Generated ${written} page HTML files (rotas estáticas + tags)`);
if (missing.length) {
  console.error(`❌ Sem metadados em DynamicSEO para: ${missing.join(", ")}`);
  process.exit(1);
}
