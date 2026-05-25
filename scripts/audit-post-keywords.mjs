#!/usr/bin/env node
/**
 * Auditoria de SEO + E-E-A-T para todos os posts.
 *
 * Para cada post em src/data/posts.ts:
 *   - Resolve a keyword principal (overrides + heurística do título).
 *   - Lê o .tsx correspondente (mapeado via trackArticleRead("slug", ...)).
 *   - Verifica:
 *       • Keyword em <h1>, primeiro <p> após <h1>, excerpt
 *       • Keyword em PAGE_META (title, description, keywords)
 *       • Presença de AuthorBio, ArticleSources (≥5 itens), EditorialTake / "Análise do Marcos"
 *       • Contagem aproximada de palavras (>= 1500)
 *
 * Saídas:
 *   .lovable/audit-seo-eeat.md
 *   .lovable/audit-seo-eeat.json
 */
import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Helpers ───────────────────────────────────────────────────────────
const STOPWORDS = new Set([
  "a","o","as","os","de","do","da","dos","das","e","em","no","na","nos","nas",
  "um","uma","uns","umas","para","por","com","sem","ao","aos","à","às","que",
  "como","ou","mais","menos","já","muito","muitos","muita","muitas","ser","é",
  "são","foi","será","ter","tem","têm","guia","completo","sobre","2025","2026",
  "review","análise","vs","x","the","melhor","melhores","tudo"
]);

const KEYWORD_OVERRIDES = {
  "gpt-5-ia-trabalhador-digital-autonomo-2026": "GPT-5.4",
  "berkshire-hathaway-greg-abel-2026-sem-buffett": "Berkshire Hathaway",
  "elden-ring-nightreign-guia-completo-2026": "Elden Ring Nightreign",
  "kaiju-no-8-temporada-2-guia-arco-final-2026": "Kaiju No. 8",
  "pnad-desemprego-61-marco-2026": "PNAD",
  "copom-selic-1450-corte-abril-2026": "Copom Selic",
  "petroleo-brent-77-dolares-guerra-ira-2026": "petróleo Brent",
  "anthropic-claude-5-2026": "Anthropic Claude 5",
  "magnificent-seven-2026": "Magnificent Seven",
  "super-mario-galaxy-filme-2026": "Super Mario Galaxy",
  "solo-leveling-guia-completo-temporadas": "Solo Leveling",
  "tsukimichi-moonlit-fantasy-guia-completo": "Tsukimichi Moonlit Fantasy",
  "mugen-gacha-level-9999-traicao-dungeon": "Mugen Gacha",
  "kizoku-tensei-noble-reincarnation-guia": "Kizoku Tensei",
  "hell-mode-gamer-isekai-guia-completo": "Hell Mode",
  "isekai-nonbiri-nouka-farming-life-guia": "Isekai Nonbiri Nouka",
  "maousama-retry-demon-lord-guia-completo": "Maou-sama Retry",
  "okiraku-ryoushu-territory-defense-guia": "Okiraku Ryoushu",
};

const CATEGORY_FALLBACK = {
  ia: "inteligência artificial",
  invest: "investimentos",
  geek: "cultura geek",
  otaku: "anime",
};

const norm = (s) =>
  (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const tokenize = (s) =>
  norm(s).replace(/[^a-z0-9\s.+-]/g, " ").split(/\s+/).filter((w) => w && !STOPWORDS.has(w));

const contains = (h, k) => {
  const hay = norm(h);
  const kwTokens = norm(k).split(/\s+/).filter(Boolean);
  if (!kwTokens.length) return false;
  // exato OU todos os tokens presentes
  if (hay.includes(norm(k))) return true;
  return kwTokens.every((t) => hay.includes(t));
};

function primaryKeyword(post) {
  if (KEYWORD_OVERRIDES[post.slug]) return KEYWORD_OVERRIDES[post.slug];
  const slugTokens = post.slug.split("-").filter((t) => t && !STOPWORDS.has(t) && !/^\d+$/.test(t));
  if (slugTokens.length >= 2) return slugTokens.slice(0, Math.min(3, slugTokens.length)).join(" ");
  const cut = post.title.split(/[:\-—|]/)[0].trim();
  const tokens = tokenize(cut);
  if (!tokens.length) return CATEGORY_FALLBACK[post.category];
  return tokens.slice(0, Math.min(4, Math.max(2, tokens.length))).join(" ");
}

// ── Parse posts.ts ────────────────────────────────────────────────────
async function parsePosts() {
  const src = await readFile(join(ROOT, "src/data/posts.ts"), "utf8");
  const objBlocks = src.split(/\n  \{\n/).slice(1); // splits per object
  const posts = [];
  for (const blk of objBlocks) {
    const get = (key) => {
      const re = new RegExp(`^\\s{4}${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`, "m");
      const m = blk.match(re);
      return m ? m[1].replace(/\\"/g, '"').replace(/\\'/g, "'") : "";
    };
    const slug = get("slug");
    if (!slug) continue;
    posts.push({
      slug,
      title: get("title"),
      excerpt: get("excerpt"),
      category: get("category"),
      subtopic: get("subtopic"),
    });
  }
  return posts;
}

// ── Map slug → .tsx file ──────────────────────────────────────────────
async function buildSlugMap() {
  const dir = join(ROOT, "src/pages/posts");
  const files = await readdir(dir);
  const map = {};
  for (const f of files) {
    if (!f.endsWith(".tsx")) continue;
    const txt = await readFile(join(dir, f), "utf8");
    let slug = null;
    const literal = txt.match(/trackArticleRead\(\s*["']([^"']+)["']/);
    if (literal) slug = literal[1];
    if (!slug) {
      const v = txt.match(/const\s+(?:SLUG|POST_SLUG)\s*=\s*["']([^"']+)["']/);
      if (v) slug = v[1];
    }
    if (slug) map[slug] = f;
  }
  return map;
}

// ── Read PAGE_META from DynamicSEO ────────────────────────────────────
async function parsePageMeta() {
  const src = await readFile(join(ROOT, "src/components/DynamicSEO.tsx"), "utf8");
  // Extract block between `const PAGE_META` and the matching `};`
  const start = src.indexOf("const PAGE_META");
  const body = src.slice(start);
  const map = {};
  const re = /"(\/post\/[^"]+)":\s*\{\s*title:\s*"((?:\\.|[^"\\])*)",\s*description:\s*"((?:\\.|[^"\\])*)",\s*keywords:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const slug = m[1].replace("/post/", "");
    map[slug] = { title: m[2], description: m[3], keywords: m[4] };
  }
  return map;
}

// ── Audit one post ────────────────────────────────────────────────────
function auditOne(post, file, source, meta) {
  const keyword = primaryKeyword(post);
  const result = {
    slug: post.slug,
    file,
    keyword,
    category: post.category,
    checks: {},
    bucket: "OK",
    issues: [],
  };

  // H1
  const h1Match = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, " ") : "";
  result.checks.h1 = contains(h1Text, keyword);

  // Lead/intro: first <p> with className containing 'lead', or first <p> after </h1>
  let leadText = "";
  const leadMatch =
    source.match(/<p[^>]*className="lead[^"]*"[^>]*>([\s\S]*?)<\/p>/) ||
    source.match(/<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/) ||
    source.match(/className="prose[^"]*"[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/);
  if (leadMatch) leadText = leadMatch[1].replace(/<[^>]+>/g, " ");
  result.checks.intro = contains(leadText, keyword);

  // Excerpt
  result.checks.excerpt = contains(post.excerpt, keyword);

  // PAGE_META
  const pm = meta[post.slug];
  result.checks.pageMetaExists = Boolean(pm);
  result.checks.metaTitle = pm ? contains(pm.title, keyword) : false;
  result.checks.metaDescription = pm ? contains(pm.description, keyword) : false;
  result.checks.metaKeywords = pm ? contains(pm.keywords, keyword) : false;

  // E-E-A-T
  result.checks.hasAuthorBio = /AuthorBio/.test(source);
  const sourcesMatch = source.match(/<ArticleSources[^>]*sources=\{(\[[\s\S]*?\])\s*\}/);
  let sourcesCount = 0;
  if (sourcesMatch) {
    sourcesCount = (sourcesMatch[1].match(/url:\s*"/g) || []).length;
  }
  result.checks.articleSourcesCount = sourcesCount;
  result.checks.hasArticleSources = sourcesCount >= 5;
  result.checks.hasEditorial =
    /EditorialTake/.test(source) || /Análise do Marcos/.test(source);

  // Word count (approx) — slice from first `className="prose` to first
  // <NewsletterSignup / <ArticleSources / <RelatedPosts / </article>
  const proseStart = source.indexOf('className="prose');
  let proseEnd = source.length;
  for (const marker of ["<NewsletterSignup", "<ArticleSources", "<RelatedPosts", "<CommentSection", "</article"]) {
    const idx = source.indexOf(marker, proseStart >= 0 ? proseStart : 0);
    if (idx > 0 && idx < proseEnd) proseEnd = idx;
  }
  const proseBlob = proseStart >= 0 ? source.slice(proseStart, proseEnd) : source;
  const text = proseBlob.replace(/<[^>]+>/g, " ").replace(/\{[^}]*\}/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  result.checks.wordCount = words;
  result.checks.has1500Words = words >= 1500;

  // ── Classify bucket ───────────────────────────────────────────────
  const seoFail =
    !result.checks.pageMetaExists ||
    !result.checks.metaTitle ||
    !result.checks.metaDescription ||
    !result.checks.metaKeywords ||
    !result.checks.h1 ||
    !result.checks.intro ||
    !result.checks.excerpt;
  const eeatFail =
    !result.checks.hasAuthorBio ||
    !result.checks.hasArticleSources ||
    !result.checks.hasEditorial;
  const contentFail = !result.checks.has1500Words;

  const failCount = [seoFail, eeatFail, contentFail].filter(Boolean).length;
  if (failCount === 0) result.bucket = "OK";
  else if (failCount >= 2) result.bucket = "D";
  else if (contentFail) result.bucket = "C";
  else if (eeatFail) result.bucket = "B";
  else result.bucket = "A";

  // Issue list
  if (!result.checks.pageMetaExists) result.issues.push("sem PAGE_META manual");
  if (result.checks.pageMetaExists && !result.checks.metaTitle) result.issues.push("keyword ausente em meta title");
  if (result.checks.pageMetaExists && !result.checks.metaDescription) result.issues.push("keyword ausente em meta description");
  if (result.checks.pageMetaExists && !result.checks.metaKeywords) result.issues.push("keyword ausente em meta keywords");
  if (!result.checks.h1) result.issues.push("keyword ausente em <h1>");
  if (!result.checks.intro) result.issues.push("keyword ausente na introdução");
  if (!result.checks.excerpt) result.issues.push("keyword ausente em excerpt");
  if (!result.checks.hasAuthorBio) result.issues.push("sem AuthorBio");
  if (!result.checks.hasArticleSources)
    result.issues.push(`ArticleSources com ${sourcesCount} fonte(s) (mínimo 5)`);
  if (!result.checks.hasEditorial) result.issues.push("sem Análise do Marcos / EditorialTake");
  if (!result.checks.has1500Words) result.issues.push(`apenas ~${words} palavras (mínimo 1500)`);

  return result;
}

// ── Main ──────────────────────────────────────────────────────────────
const [posts, slugMap, pageMeta] = await Promise.all([
  parsePosts(),
  buildSlugMap(),
  parsePageMeta(),
]);

const reports = [];
const missingFiles = [];
for (const p of posts) {
  const file = slugMap[p.slug];
  if (!file) {
    missingFiles.push(p.slug);
    continue;
  }
  const src = await readFile(join(ROOT, "src/pages/posts", file), "utf8");
  reports.push(auditOne(p, file, src, pageMeta));
}

const counts = { OK: 0, A: 0, B: 0, C: 0, D: 0 };
reports.forEach((r) => counts[r.bucket]++);

// ── Write outputs ────────────────────────────────────────────────────
await mkdir(join(ROOT, ".lovable"), { recursive: true });

await writeFile(
  join(ROOT, ".lovable/audit-seo-eeat.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), counts, missingFiles, reports }, null, 2)
);

const byBucket = (b) => reports.filter((r) => r.bucket === b);

const renderTable = (rows) =>
  `| Slug | Keyword | Palavras | Fontes | Issues |\n|---|---|---:|---:|---|\n` +
  rows
    .map(
      (r) =>
        `| \`${r.slug}\` | ${r.keyword} | ${r.checks.wordCount} | ${r.checks.articleSourcesCount} | ${r.issues.join("; ") || "—"} |`
    )
    .join("\n");

// Cross-cutting counts (mais úteis que buckets para priorização)
const has = (k) => reports.filter((r) => r.checks[k]).length;
const missing = {
  pageMeta: reports.filter((r) => !r.checks.pageMetaExists),
  metaKeyword: reports.filter((r) => r.checks.pageMetaExists && (!r.checks.metaTitle || !r.checks.metaDescription || !r.checks.metaKeywords)),
  h1: reports.filter((r) => !r.checks.h1),
  intro: reports.filter((r) => !r.checks.intro),
  excerpt: reports.filter((r) => !r.checks.excerpt),
  authorBio: reports.filter((r) => !r.checks.hasAuthorBio),
  sources: reports.filter((r) => !r.checks.hasArticleSources),
  editorial: reports.filter((r) => !r.checks.hasEditorial),
  words: reports.filter((r) => !r.checks.has1500Words).sort((a, b) => a.checks.wordCount - b.checks.wordCount),
};

const list = (arr, max = 999) =>
  arr.slice(0, max).map((r) => `- \`${r.slug}\` (${r.checks.wordCount}w, ${r.checks.articleSourcesCount} fontes) — ${r.issues.join("; ")}`).join("\n") || "—";

const md = `# Auditoria SEO + E-E-A-T

Gerado em ${new Date().toLocaleString("pt-BR")}.

## Resumo executivo

- **Total auditado:** ${reports.length} posts (${missingFiles.length} sem .tsx mapeado)
- **PAGE_META manual presente:** ${has("pageMetaExists")} / ${reports.length}
- **Keyword no `<h1>`:** ${has("h1")} / ${reports.length}
- **Keyword na introdução:** ${has("intro")} / ${reports.length}
- **Keyword no excerpt:** ${has("excerpt")} / ${reports.length}
- **AuthorBio:** ${has("hasAuthorBio")} / ${reports.length}
- **ArticleSources (≥5 fontes):** ${has("hasArticleSources")} / ${reports.length}
- **EditorialTake / Análise do Marcos:** ${has("hasEditorial")} / ${reports.length}
- **Conteúdo ≥1500 palavras:** ${has("has1500Words")} / ${reports.length}

${missingFiles.length ? `### Slugs sem .tsx mapeado (corrigir trackArticleRead)\n\n${missingFiles.map((s) => `- \`${s}\``).join("\n")}\n` : ""}

## Plano de levas sugerido

1. **Levas SEO (rápidas, ~10 posts/leva)** — Adicionar PAGE_META + garantir keyword em h1/intro/excerpt para os ${missing.pageMeta.length} posts sem meta manual.
2. **Levas Fontes (3 posts/leva)** — Adicionar 5ª fonte oficial verificável para os ${missing.sources.length} posts com <5 fontes.
3. **Levas Análise (5 posts/leva)** — Adicionar bloco "Análise do Marcos" para os ${missing.editorial.length} posts sem editorial.
4. **Levas Expansão (2 posts/leva)** — Reescrever os ${missing.words.length} posts <1500 palavras, começando pelos mais curtos.

---

## 1) Posts sem PAGE_META manual — ${missing.pageMeta.length}

${list(missing.pageMeta)}

## 2) Posts com PAGE_META incompleto (keyword ausente em title/desc/keywords) — ${missing.metaKeyword.length}

${list(missing.metaKeyword)}

## 3) Posts com keyword ausente no \`<h1>\` — ${missing.h1.length}

${list(missing.h1)}

## 4) Posts com keyword ausente na introdução — ${missing.intro.length}

${list(missing.intro)}

## 5) Posts com keyword ausente no excerpt — ${missing.excerpt.length}

${list(missing.excerpt)}

## 6) Posts sem AuthorBio — ${missing.authorBio.length}

${list(missing.authorBio)}

## 7) Posts com menos de 5 fontes em ArticleSources — ${missing.sources.length}

${list(missing.sources)}

## 8) Posts sem "Análise do Marcos" / EditorialTake — ${missing.editorial.length}

${list(missing.editorial)}

## 9) Posts com menos de 1500 palavras (ordenados por menor) — ${missing.words.length}

${list(missing.words)}
`;

await writeFile(join(ROOT, ".lovable/audit-seo-eeat.md"), md);

console.log("AUDIT DONE");
console.log("Counts:", counts);
console.log("Missing files:", missingFiles.length);

