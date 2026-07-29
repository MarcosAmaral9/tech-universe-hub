/**
 * verify-sitemap-urls.mjs — roda depois do build.
 *
 * Garante que:
 *  1. Toda URL do sitemap é HTTPS, sem query string, sem fragmento e sem duplicata.
 *  2. Toda URL do sitemap tem um arquivo HTML correspondente em dist/
 *     (o .htaccess serve `<caminho>.html` antes do fallback SPA).
 *  3. Todo HTML gerado tem canonical self-referencial em HTTPS e não tem `noindex`.
 *
 * Falha o build (exit 1) em qualquer violação — é o que impede que uma página
 * pública vá para produção sem condições de ser indexada.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist");
const BASE_URL = "https://viciocode.com";

const errors = [];
const sitemap = fs.readFileSync(path.resolve(ROOT, "public/sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// ── 1. Higiene das URLs ──────────────────────────────────────────────────────
const seen = new Set();
for (const loc of locs) {
  if (!loc.startsWith("https://")) errors.push(`URL não-HTTPS no sitemap: ${loc}`);
  if (!loc.startsWith(BASE_URL)) errors.push(`URL fora do domínio canônico: ${loc}`);
  if (loc.includes("?")) errors.push(`URL com query string no sitemap: ${loc}`);
  if (loc.includes("#")) errors.push(`URL com fragmento no sitemap: ${loc}`);
  if (loc !== `${BASE_URL}/` && loc.endsWith("/")) errors.push(`URL com barra final: ${loc}`);
  if (seen.has(loc)) errors.push(`URL duplicada no sitemap: ${loc}`);
  seen.add(loc);
}

// ── 2. Arquivo HTML correspondente ───────────────────────────────────────────
const fileFor = (loc) => {
  const p = loc.replace(BASE_URL, "");
  return p === "/" || p === "" ? path.join(DIST, "index.html") : path.join(DIST, `${p.slice(1)}.html`);
};

const htmlFiles = [];
for (const loc of locs) {
  const file = fileFor(loc);
  if (!fs.existsSync(file)) {
    errors.push(`Sem HTML pré-renderizado para ${loc} (esperado ${path.relative(ROOT, file)})`);
    continue;
  }
  htmlFiles.push({ loc, file });
}

// ── 3. Canonical e robots de cada HTML ───────────────────────────────────────
for (const { loc, file } of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const canonicals = [...html.matchAll(/<link[^>]+rel="canonical"[^>]*>/g)].map((m) => m[0]);
  if (canonicals.length === 0) {
    errors.push(`Sem canonical: ${path.relative(ROOT, file)}`);
    continue;
  }
  if (canonicals.length > 1) {
    errors.push(`Mais de um canonical (${canonicals.length}): ${path.relative(ROOT, file)}`);
  }
  const href = canonicals[0].match(/href="([^"]+)"/)?.[1] ?? "";
  const expected = loc.endsWith("/") ? loc : loc;
  if (href !== expected) {
    errors.push(`Canonical não self-referencial em ${path.relative(ROOT, file)}: ${href} ≠ ${expected}`);
  }
  if (!href.startsWith("https://")) {
    errors.push(`Canonical não-HTTPS em ${path.relative(ROOT, file)}: ${href}`);
  }
  if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) {
    errors.push(`Página pública marcada como noindex: ${path.relative(ROOT, file)}`);
  }
  if (/(src|href)="http:\/\//.test(html)) {
    errors.push(`Recurso em HTTP (conteúdo misto) em ${path.relative(ROOT, file)}`);
  }
}

console.log(`URLs no sitemap: ${locs.length}`);
console.log(`HTMLs verificados: ${htmlFiles.length}`);

if (errors.length) {
  console.error(`\n❌ ${errors.length} problema(s) de indexação/HTTPS:`);
  for (const err of errors.slice(0, 40)) console.error(`  • ${err}`);
  if (errors.length > 40) console.error(`  … e mais ${errors.length - 40}`);
  process.exit(1);
}

console.log("✅ Sitemap, canonicals e HTTPS consistentes em todas as páginas.");
