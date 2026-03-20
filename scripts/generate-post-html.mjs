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

for (const post of posts) {
  const dir  = path.join(DIST, "post");
  fs.mkdirSync(dir, { recursive: true });

  const url  = `${BASE_URL}/post/${post.slug}`;
  // Find matching image asset
  const slug = post.slug.replace(/-2026$/, "");
  const img  = assetFiles.find(f => f.startsWith(slug) && /\.(webp|jpg|png)$/.test(f));
  const ogImg = img ? `${BASE_URL}/assets/${img}` : `${BASE_URL}/og-image.jpg`;

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
    }, null, 0)}</script>`;

  const html = stripped.replace("</head>", `${inject}\n  </head>`);
  fs.writeFileSync(path.join(dir, `${post.slug}.html`), html, "utf8");
}

console.log(`✅ Generated ${posts.length} post HTML files in dist/post/`);
