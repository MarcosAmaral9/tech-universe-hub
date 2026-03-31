/**
 * generate-post-html.mjs
 * Gera um .html estático por post com title/description/og corretos.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT     = path.resolve(__dirname, "..");
const DIST     = path.resolve(ROOT, "dist");
const BASE_URL = "https://viciocode.com";
const SITE     = "VICIO<CODE>";

const postsSource = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const postRegex   = /\{\s*id:\s*"[^"]+",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",[\s\S]*?date:\s*"([^"]+)"/g;

const posts = [];
let m;
while ((m = postRegex.exec(postsSource)) !== null) {
  posts.push({ slug: m[1], title: m[2], excerpt: m[3], date: m[4] });
}
console.log(`Found ${posts.length} posts`);

const indexHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const assetFiles = fs.readdirSync(path.join(DIST, "assets"));

// Strip ALL existing dynamic-per-page meta from index.html once
const stripped = indexHtml
  .replace(/<title>[\s\S]*?<\/title>/g, "")
  .replace(/<meta name="description"[^>]*>/g, "")
  .replace(/<meta property="og:title"[^>]*>/g, "")
  .replace(/<meta property="og:description"[^>]*>/g, "")
  .replace(/<meta property="og:url"[^>]*>/g, "")
  .replace(/<meta property="og:type"[^>]*>/g, "")
  .replace(/<meta property="og:image:alt"[^>]*>/g, "")
  .replace(/<meta name="twitter:title"[^>]*>/g, "")
  .replace(/<meta name="twitter:description"[^>]*>/g, "")
  .replace(/<meta name="twitter:image"[^>]*>/g, "")
  .replace(/<meta property="og:image"[^>]*>/g, "")
  .replace(/<meta property="og:image:width"[^>]*>/g, "")
  .replace(/<meta property="og:image:height"[^>]*>/g, "");

const e = (s) => s.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Cache critical CSS extraction
let _criticalCSS = null;
function extractCriticalCSS(cssHref) {
  if (_criticalCSS !== null) return _criticalCSS;
  try {
    const cssPath = path.join(DIST, cssHref);
    const fullCSS = fs.readFileSync(cssPath, "utf8");
    const parts = [];
    const reset = fullCSS.match(/\*,:before,:after\{[^}]+\}/);
    if (reset) parts.push(reset[0]);
    const root = fullCSS.match(/:root\{[^}]+\}/);
    if (root) parts.push(root[0]);
    for (const dm of fullCSS.matchAll(/\.dark\{[^}]+\}/g)) parts.push(dm[0]);
    const htmlBase = fullCSS.match(/(?:^|[\s,])html\{([^}]+)\}/);
    if (htmlBase) parts.push("html{" + htmlBase[1] + "}");
    const bodyBase = fullCSS.match(/(?:^|[\s,])body\{([^}]+)\}/);
    if (bodyBase) parts.push("body{" + bodyBase[1] + "}");
    parts.push("html{background-color:hsl(0 0% 98%)}html.dark{background-color:hsl(220 25% 6%)}");
    _criticalCSS = parts.join("").replace(/\s{2,}/g, " ").trim();
  } catch(e) {
    _criticalCSS = "";
  }
  return _criticalCSS;
}

for (const post of posts) {
  const dir  = path.join(DIST, "post");
  fs.mkdirSync(dir, { recursive: true });

  const url  = `${BASE_URL}/post/${post.slug}`;
  const CATEGORY_LABELS = { ia: "Inteligência Artificial", invest: "Investimentos", geek: "Geek & Games", otaku: "Otaku" };
  const categoryLabel = CATEGORY_LABELS[post.category] || post.category;
  // Find matching image asset
  const slug = post.slug.replace(/-2026$/, "");
  // Explicit slug→asset-prefix overrides for slugs whose prefix doesn't match the image name
  const SLUG_ASSET_OVERRIDES = {
    "crimson-desert-guia-iniciantes-dicas":         "crimson-desert-iniciantes",
    "crimson-desert-melhores-equipamentos-inicio":  "crimson-desert-equipamentos",
    "tsukimichi-moonlit-fantasy-guia-completo":     "tsukimichi",
    "mugen-gacha-level-9999-traicao-dungeon":       "mugen-gacha",
    "kizoku-tensei-noble-reincarnation-guia":       "kizoku-tensei",
    "hell-mode-gamer-isekai-guia-completo":         "hell-mode",
    "isekai-nonbiri-nouka-farming-life-guia":       "isekai-nonbiri-nouka",
    "maousama-retry-demon-lord-guia-completo":      "maousama-retry",
    "okiraku-ryoushu-territory-defense-guia":       "okiraku-ryoushu",
    "solo-leveling-guia-completo-temporadas":       "solo-leveling",
  };
  const assetPrefix = SLUG_ASSET_OVERRIDES[post.slug] || slug;
  // Match Vite-hashed asset to slug using LONGEST-MATCH semantics.
  // Strips Vite hash suffix (e.g. "crimson-desert-bosses-Cm-pQ51J.webp" → "crimson-desert-bosses")
  // then checks slug.startsWith(base). Longest match wins to prevent cross-matches like
  // "crimson-desert-builds" incorrectly matching "crimson-desert-bosses-guia-chefes".
  let img = undefined;
  let imgBestLen = 0;
  for (const f of assetFiles) {
    if (!/\.(webp|jpg|png)$/.test(f)) continue;
    if (f.startsWith(assetPrefix)) { img = f; break; }
    const parts = f.replace(/\.(webp|jpg|png)$/, "").split("-");
    for (let i = parts.length; i >= 1; i--) {
      const base = parts.slice(0, i).join("-");
      const endsWithNumber = /\d$/.test(base);
      const minLen = endsWithNumber ? 4 : 8;
      if (base.length >= minLen && slug.startsWith(base) && base.length > imgBestLen) {
        imgBestLen = base.length;
        img = f;
        break;
      }
    }
  }
  const ogImg = img ? `${BASE_URL}/assets/${img}` : `${BASE_URL}/og-image.png`;

  const inject = `
    <title>${e(post.title)} | VICIO&lt;CODE&gt;</title>
    <meta name="description" content="${e(post.excerpt)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${e(post.title)}" />
    <meta property="og:description" content="${e(post.excerpt)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${ogImg}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${e(post.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${e(post.title)}" />
    <meta name="twitter:description" content="${e(post.excerpt)}" />
    <meta name="twitter:image" content="${ogImg}" />
    <meta property="article:published_time" content="${post.date}T00:00:00Z" />
    <link rel="preload" as="image" href="${ogImg}" fetchpriority="high" />
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": url,
      "datePublished": post.date + "T00:00:00Z",
      "dateModified": post.date + "T00:00:00Z",
      "image": { "@type": "ImageObject", "url": ogImg, "width": 1200, "height": 630 },
      "author": { "@type": "Organization", "name": "VICIO<CODE>", "url": "https://viciocode.com" },
      "publisher": {
        "@type": "Organization",
        "name": "VICIO<CODE>",
        "url": "https://viciocode.com",
        "logo": { "@type": "ImageObject", "url": "https://viciocode.com/icon-192x192.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "inLanguage": "pt-BR"
    }, null, 0)}</script>
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"VICIO<CODE>","item":"${BASE_URL}"},
        {"@type":"ListItem","position":2,"name":"${categoryLabel}","item":"${BASE_URL}/${post.category}"},
        {"@type":"ListItem","position":3,"name":"${e(post.title)}","item":"${url}"}
      ]
    }, null, 0)}</script>`;

  // Apply critical CSS: make full CSS non-blocking, inline critical styles
  let html = stripped.replace("</head>", `${inject}\n  </head>`);
  
  // Find the blocking CSS link Vite generated and make it non-blocking
  html = html.replace(
    /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/,
    (_, cssHref) => {
      const critical = extractCriticalCSS(cssHref);
      return [
        critical ? `<style id="critical-css">${critical}</style>` : "",
        `<link rel="preload" href="${cssHref}" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
        `<noscript><link rel="stylesheet" href="${cssHref}"></noscript>`,
      ].filter(Boolean).join("\n    ");
    }
  );
  
  fs.writeFileSync(path.join(dir, `${post.slug}.html`), html, "utf8");
}

console.log(`✅ Generated ${posts.length} post HTML files in dist/post/`);
