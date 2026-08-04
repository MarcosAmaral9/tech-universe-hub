/**
 * generate-feeds.mjs
 * Gera feeds RSS 2.0 estáticos a partir de src/data/posts.ts:
 *   public/feed.xml                → todos os posts (últimos 50)
 *   public/feed/<categoria>.xml    → ia | financas | geek | otaku
 *   public/feed/tag/<tag>.xml      → um por subtópico usado
 * Roda no `prebuild`, junto de generate-sitemaps.mjs.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://viciocode.com";
const SITE = "VICIO<CODE>";
const MAX_ITEMS = 50;

const CATEGORY_FEED_PATH = { ia: "ia", invest: "financas", geek: "geek", otaku: "otaku" };
const CATEGORY_NAME = {
  ia: "Inteligência Artificial",
  invest: "Finanças & Investimentos",
  geek: "Geek & Games",
  otaku: "Otaku",
};

const xmlEscape = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// ── Parser dos posts ────────────────────────────────────────────────────────
const source = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const blocks = source.split(/\n\s{2,4}\{\s*\n(?=\s*id:\s*")/).slice(1);

const field = (block, name) => {
  const m = block.match(new RegExp(`${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, " ") : undefined;
};

const posts = [];
for (const block of blocks) {
  const slug = field(block, "slug");
  const title = field(block, "title");
  const date = field(block, "date");
  if (!slug || !title || !date) continue;
  posts.push({
    slug,
    title,
    excerpt: field(block, "excerpt") ?? "",
    date,
    category: field(block, "category"),
    subtopic: field(block, "subtopic") ?? null,
  });
}
posts.sort((a, b) => (a.date < b.date ? 1 : -1));
console.log(`Feeds: ${posts.length} posts lidos de posts.ts`);

const rfc822 = (d) => new Date(`${d}T12:00:00Z`).toUTCString();

function buildFeed({ title, description, feedPath, items }) {
  const selfUrl = `${BASE_URL}${feedPath}`;
  const body = items
    .slice(0, MAX_ITEMS)
    .map((p) => {
      const url = `${BASE_URL}/post/${p.slug}`;
      const img = `${BASE_URL}/assets/${p.slug}.webp`;
      return `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${xmlEscape(p.excerpt)}</description>
      <category>${xmlEscape(CATEGORY_NAME[p.category] ?? "Blog")}</category>
      <enclosure url="${img}" type="image/webp" length="0" />
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(title)}</title>
    <link>${BASE_URL}</link>
    <description>${xmlEscape(description)}</description>
    <language>pt-BR</language>
    <lastBuildDate>${items[0] ? rfc822(items[0].date) : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />
${body}
  </channel>
</rss>
`;
}

const write = (relPath, xml) => {
  const abs = path.resolve(ROOT, "public" + relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, xml, "utf8");
};

// Feed geral
write(
  "/feed.xml",
  buildFeed({
    title: `${SITE} — todos os artigos`,
    description: "IA, investimentos, cultura geek e otaku — novos artigos do VICIO<CODE>.",
    feedPath: "/feed.xml",
    items: posts,
  })
);

// Feeds por categoria
let catCount = 0;
for (const [cat, seg] of Object.entries(CATEGORY_FEED_PATH)) {
  const items = posts.filter((p) => p.category === cat);
  if (items.length === 0) continue;
  write(
    `/feed/${seg}.xml`,
    buildFeed({
      title: `${SITE} — ${CATEGORY_NAME[cat]}`,
      description: `Novos artigos de ${CATEGORY_NAME[cat]} no VICIO<CODE>.`,
      feedPath: `/feed/${seg}.xml`,
      items,
    })
  );
  catCount++;
}

// Feeds por tag/subtópico
const tags = [...new Set(posts.map((p) => p.subtopic).filter(Boolean))].sort();
for (const tag of tags) {
  const items = posts.filter((p) => p.subtopic === tag);
  write(
    `/feed/tag/${tag}.xml`,
    buildFeed({
      title: `${SITE} — tag ${tag}`,
      description: `Novos artigos marcados com "${tag}" no VICIO<CODE>.`,
      feedPath: `/feed/tag/${tag}.xml`,
      items,
    })
  );
}

console.log(`✅ Feeds gerados: 1 geral + ${catCount} categorias + ${tags.length} tags`);
