/**
 * check-read-next.mjs
 * Garante que TODO artigo tenha um "artigo anterior" e um "próximo artigo"
 * na aba "Leia a seguir", usando os ids de src/data/posts.ts.
 *
 * Regras validadas:
 *  1. Todo post precisa de id numérico único.
 *  2. Toda categoria com posts precisa de >= 2 posts (navegação circular),
 *     senão o ReadNext depende do fallback global — que é avisado aqui.
 *  3. O fallback global só funciona se o site tiver >= 2 posts no total.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");

const re = /\{\s*id:\s*"([^"]+)",\s*slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g;
const posts = [];
let m;
while ((m = re.exec(src)) !== null) {
  posts.push({ id: m[1], slug: m[2], category: m[3] });
}

const errors = [];
const warnings = [];

if (posts.length < 2) errors.push("Menos de 2 posts no total: ReadNext não consegue montar anterior/próximo.");

const seenId = new Map();
const seenSlug = new Map();
for (const p of posts) {
  if (!/^\d+$/.test(p.id)) errors.push(`Post "${p.slug}" tem id não numérico ("${p.id}").`);
  if (seenId.has(p.id)) errors.push(`id duplicado "${p.id}": ${seenId.get(p.id)} e ${p.slug}.`);
  seenId.set(p.id, p.slug);
  if (seenSlug.has(p.slug)) errors.push(`slug duplicado "${p.slug}".`);
  seenSlug.set(p.slug, true);
}

const byCategory = posts.reduce((acc, p) => {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});

for (const [cat, list] of Object.entries(byCategory)) {
  if (list.length < 2) {
    warnings.push(
      `Categoria "${cat}" tem apenas ${list.length} post(s) — ReadNext usará o fallback global para: ${list
        .map((p) => p.slug)
        .join(", ")}.`,
    );
  }
}

console.log(`check-read-next: ${posts.length} posts, ${Object.keys(byCategory).length} categorias`);
for (const w of warnings) console.warn(`⚠️  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`❌ ${e}`);
  process.exit(1);
}
console.log("✅ Todos os artigos têm anterior e próximo garantidos.");
