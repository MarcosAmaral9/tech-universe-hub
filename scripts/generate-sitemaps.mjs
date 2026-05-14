/**
 * generate-sitemaps.mjs
 * Regenera public/sitemap.xml e public/sitemap-images.xml a partir de src/data/posts.ts.
 * Roda no `prebuild` para manter sempre em sincronia com os posts publicados.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT     = path.resolve(__dirname, "..");
const BASE_URL = "https://viciocode.com";

const today = new Date().toISOString().slice(0, 10);

// ── Páginas estáticas com prioridade/changefreq diferenciadas ───────────────
const STATIC_PAGES = [
  { path: "/",                   changefreq: "daily",   priority: "1.0" },
  { path: "/ia",                 changefreq: "daily",   priority: "0.9" },
  { path: "/financas",           changefreq: "daily",   priority: "0.9" },
  { path: "/geek",               changefreq: "daily",   priority: "0.9" },
  { path: "/otaku",              changefreq: "daily",   priority: "0.9" },
  { path: "/cotacoes",           changefreq: "daily",   priority: "0.9" },
  { path: "/historico-cotacoes", changefreq: "weekly",  priority: "0.6" },
  { path: "/arquivo",            changefreq: "weekly",  priority: "0.6" },
  // Geek/Otaku subpages
  { path: "/geek/avatar",            changefreq: "weekly", priority: "0.8" },
  { path: "/geek/assassins-creed",   changefreq: "weekly", priority: "0.8" },
  { path: "/geek/crimson-desert",    changefreq: "weekly", priority: "0.8" },
  { path: "/otaku/tensura",          changefreq: "weekly", priority: "0.8" },
  { path: "/otaku/overlord",         changefreq: "weekly", priority: "0.8" },
  // Regiões Crimson Desert
  { path: "/regiao/pailune",        changefreq: "weekly", priority: "0.8" },
  { path: "/regiao/hernand",        changefreq: "weekly", priority: "0.8" },
  { path: "/regiao/demeniss",       changefreq: "weekly", priority: "0.8" },
  { path: "/regiao/delesyia",       changefreq: "weekly", priority: "0.8" },
  { path: "/regiao/crimson-desert", changefreq: "weekly", priority: "0.8" },
  // Páginas legais / institucionais
  { path: "/sobre",            changefreq: "yearly", priority: "0.3" },
  { path: "/contato",          changefreq: "yearly", priority: "0.3" },
  { path: "/privacidade",      changefreq: "yearly", priority: "0.3" },
  { path: "/termos",           changefreq: "yearly", priority: "0.3" },
  { path: "/politica-conteudo",changefreq: "yearly", priority: "0.3" },
  { path: "/instalar",         changefreq: "yearly", priority: "0.3" },
];

// ── Lê posts.ts via regex (mesmo formato do generate-post-html.mjs) ─────────
const postsSource = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const postRegex = /\{\s*id:\s*"[^"]+",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",[\s\S]*?date:\s*"([^"]+)"/g;

const posts = [];
let m;
while ((m = postRegex.exec(postsSource)) !== null) {
  posts.push({ slug: m[1], title: m[2], excerpt: m[3], date: m[4] });
}
console.log(`Found ${posts.length} posts`);

// ── XML helpers ─────────────────────────────────────────────────────────────
const xmlEscape = (s) => s
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

// ── sitemap.xml ─────────────────────────────────────────────────────────────
const urls = [];
for (const p of STATIC_PAGES) {
  urls.push(`  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);
}
for (const post of posts) {
  urls.push(`  <url>
    <loc>${BASE_URL}/post/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Sitemap do VICIO<CODE> — viciocode.com
  Gerado automaticamente em: ${today}
  Total de URLs: ${STATIC_PAGES.length + posts.length} (${STATIC_PAGES.length} páginas + ${posts.length} posts)
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
fs.writeFileSync(path.resolve(ROOT, "public/sitemap.xml"), sitemap, "utf8");
console.log(`✅ sitemap.xml escrito (${STATIC_PAGES.length + posts.length} URLs)`);

// ── sitemap-images.xml ──────────────────────────────────────────────────────
const imageUrls = posts.map((post) => {
  const truncTitle   = post.title.slice(0, 80);
  const truncCaption = `Artigo VicioCode: ${post.title}`.slice(0, 100);
  const imgUrl = `${BASE_URL}/assets/${post.slug}.webp`;
  return `  <url>
    <loc>${BASE_URL}/post/${post.slug}</loc>
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${xmlEscape(truncTitle)}</image:title>
      <image:caption>${xmlEscape(truncCaption)}</image:caption>
    </image:image>
  </url>`;
}).join("\n");

const imagesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageUrls}
</urlset>
`;
fs.writeFileSync(path.resolve(ROOT, "public/sitemap-images.xml"), imagesSitemap, "utf8");
console.log(`✅ sitemap-images.xml escrito (${posts.length} imagens)`);
