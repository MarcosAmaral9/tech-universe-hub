/**
 * verify-build-output.mjs
 *
 * Guardião do deploy. Roda no fim do `npm run build` e FALHA (exit 1) se
 * qualquer arquivo essencial estiver ausente ou corrompido em `dist/`.
 * Impede que uploads incompletos para a Hostinger cheguem em produção
 * sem `dist/post/<slug>.html`, causando o problema de indexação parcial
 * que já vimos no Google Search Console.
 *
 * Checagens:
 *  1. dist/index.html existe e tem <title> + <meta description> não-genéricos.
 *  2. dist/sitemap.xml, dist/sitemap-images.xml e dist/robots.txt existem
 *     e o sitemap.xml carrega TODAS as URLs esperadas (rotas + posts).
 *  3. dist/post/<slug>.html existe para TODO post em src/data/posts.ts
 *     e cada arquivo tem <title>, <link rel="canonical"> e og:url próprios
 *     (não o boilerplate herdado do index.html).
 *  4. dist/.htaccess existe (SPA fallback + HTTPS).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const DIST      = path.resolve(ROOT, "dist");
const BASE_URL  = "https://viciocode.com";

const errors = [];

// ── Helpers ────────────────────────────────────────────────────────────────
const exists = (rel) => fs.existsSync(path.join(DIST, rel));
const read   = (rel) => fs.readFileSync(path.join(DIST, rel), "utf8");

// ── 1) index.html + arquivos raiz ─────────────────────────────────────────
for (const f of ["index.html", "sitemap.xml", "sitemap-images.xml", "robots.txt", ".htaccess"]) {
  if (!exists(f)) errors.push(`dist/${f} ausente`);
}

// ── 2) Slugs em posts.ts ──────────────────────────────────────────────────
const postsSrc = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const slugs = [...postsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
console.log(`📚 ${slugs.length} posts declarados em src/data/posts.ts`);

// ── 3) dist/post/<slug>.html deve existir e ter meta próprio ──────────────
let missing = 0;
let generic = 0;
for (const slug of slugs) {
  const rel = `post/${slug}.html`;
  if (!exists(rel)) {
    errors.push(`dist/${rel} AUSENTE — Googlebot cairá no SPA fallback e verá meta genérico`);
    missing++;
    continue;
  }
  const html = read(rel);
  const canonical = `${BASE_URL}/post/${slug}`;
  const checks = [
    { re: new RegExp(`<link rel="canonical" href="${canonical.replace(/[/.]/g, "\\$&")}"`), msg: "canonical" },
    { re: new RegExp(`<meta property="og:url" content="${canonical.replace(/[/.]/g, "\\$&")}"`), msg: "og:url" },
    { re: /<title>[^<]{10,}<\/title>/,                                                     msg: "title não-vazio" },
    { re: /<meta name="description" content="[^"]{20,}"/,                                  msg: "description ≥20 chars" },
  ];
  for (const c of checks) {
    if (!c.re.test(html)) {
      errors.push(`dist/${rel}: falta ${c.msg}`);
      generic++;
      break;
    }
  }
}

// ── 4) index.html não pode ter títulos default do Lovable ─────────────────
if (exists("index.html")) {
  const idx = read("index.html");
  if (/<title>\s*Lovable(?:\s+App|\s+Generated)?/i.test(idx)) {
    errors.push("dist/index.html: <title> ainda contém boilerplate 'Lovable App'");
  }
  if (/content="Lovable Generated Project"/i.test(idx)) {
    errors.push("dist/index.html: description ainda é 'Lovable Generated Project'");
  }
}

// ── 5) sitemap.xml precisa conter todos os posts ──────────────────────────
if (exists("sitemap.xml")) {
  const sm = read("sitemap.xml");
  const smUrls = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  let smMissing = 0;
  for (const slug of slugs) {
    const loc = `${BASE_URL}/post/${slug}`;
    if (!smUrls.has(loc)) { errors.push(`sitemap.xml: falta ${loc}`); smMissing++; }
  }
  console.log(`🗺️  sitemap.xml lista ${smUrls.size} URLs (posts faltando: ${smMissing})`);
}

// ── Relatório ──────────────────────────────────────────────────────────────
console.log(`✓ Posts com HTML pré-renderizado: ${slugs.length - missing}/${slugs.length}`);
if (generic) console.log(`⚠️  ${generic} arquivo(s) sem meta próprio (fallback genérico)`);

if (errors.length) {
  console.error(`\n❌ Build inválido — ${errors.length} problema(s):`);
  for (const e of errors.slice(0, 40)) console.error(`   - ${e}`);
  if (errors.length > 40) console.error(`   ... e mais ${errors.length - 40}`);
  console.error(`\n💡 Rode 'npm run build' de novo do zero. NÃO faça upload de dist/ para a Hostinger neste estado.`);
  process.exit(1);
}

console.log(`\n✅ dist/ pronto para deploy — todos os ${slugs.length} posts têm HTML pré-renderizado.`);
