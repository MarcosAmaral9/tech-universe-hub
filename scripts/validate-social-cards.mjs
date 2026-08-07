/**
 * validate-social-cards.mjs
 *
 * Audita todo HTML pré-renderizado em dist/ garantindo previews corretos
 * (Open Graph / Twitter Cards) e ausência de duplicidade em compartilhamentos:
 *
 *  1. Exatamente 1 <link rel="canonical">, absoluto https, sem query/hash,
 *     sem trailing slash (exceto raiz) e self-referencial (bate com o arquivo).
 *  2. Exatamente 1 ocorrência de cada tag social obrigatória
 *     (og:title, og:description, og:url, og:type, og:image, og:site_name,
 *      og:locale, twitter:card, twitter:title, twitter:description, twitter:image).
 *  3. og:url === canonical (evita atribuição do preview a outra URL).
 *  4. og:image / twitter:image absolutos https e existentes no dist.
 *  5. twitter:card = summary_large_image; og:type válido (website|article).
 *  6. Limites de SERP/preview: título ≤ 60, descrição 50–160 caracteres.
 *
 * Uso: node scripts/validate-social-cards.mjs
 * Exit 0 = ok · Exit 1 = violações (bom para CI/build).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const BASE_URL = "https://viciocode.com";

if (!fs.existsSync(DIST)) {
  console.error("❌ dist/ não encontrado — rode `npm run build` antes.");
  process.exit(1);
}

const REQUIRED = [
  ["property", "og:title"],
  ["property", "og:description"],
  ["property", "og:url"],
  ["property", "og:type"],
  ["property", "og:image"],
  ["property", "og:site_name"],
  ["property", "og:locale"],
  ["name", "twitter:card"],
  ["name", "twitter:title"],
  ["name", "twitter:description"],
  ["name", "twitter:image"],
];

// Arquivos utilitários que não são páginas indexáveis do site.
const SKIP = /^(google[0-9a-f]+\.html|yandex_[0-9a-f]+\.html|offline\.html)$/i;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "assets") continue;
      walk(full, out);
    } else if (entry.name.endsWith(".html") && !SKIP.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const metaMatches = (html, attr, key) =>
  [
    ...html.matchAll(
      new RegExp(`<meta[^>]+${attr}=["']${key.replace(/:/g, ":")}["'][^>]*>`, "gi")
    ),
  ];

const contentOf = (tag) => {
  const m = tag.match(/content="([^"]*)"/i) || tag.match(/content='([^']*)'/i);
  return m ? m[1] : "";
};

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const files = walk(DIST);
const errors = [];
let checked = 0;

for (const file of files) {
  const rel = path.relative(DIST, file).replace(/\\/g, "/");
  const html = fs.readFileSync(file, "utf8");
  const err = (msg) => errors.push(`${rel}: ${msg}`);

  // rota esperada a partir do caminho do arquivo
  const route =
    rel === "index.html" ? "/" : "/" + rel.replace(/\/index\.html$/, "").replace(/\.html$/, "");
  const expectedUrl = route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`;

  // 1. canonical
  const canonicals = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)];
  if (canonicals.length !== 1) {
    err(`${canonicals.length} tags canonical (esperado 1)`);
  } else {
    const href = (canonicals[0][0].match(/href=["']([^"']+)["']/i) || [])[1] || "";
    if (!href.startsWith("https://")) err(`canonical não é https absoluto: ${href}`);
    if (/[?#]/.test(href)) err(`canonical com query/hash: ${href}`);
    if (href !== expectedUrl) err(`canonical não self-referencial: ${href} ≠ ${expectedUrl}`);
  }

  // 2. tags obrigatórias, exatamente uma vez
  const values = {};
  for (const [attr, key] of REQUIRED) {
    const found = metaMatches(html, attr, key);
    if (found.length === 0) err(`falta ${key}`);
    else if (found.length > 1) err(`${key} duplicado (${found.length}x)`);
    if (found.length) values[key] = decode(contentOf(found[0][0]));
  }

  // 3. og:url === canonical
  if (values["og:url"] && values["og:url"] !== expectedUrl) {
    err(`og:url ≠ canonical: ${values["og:url"]} ≠ ${expectedUrl}`);
  }

  // 4. imagens absolutas e existentes
  for (const key of ["og:image", "twitter:image"]) {
    const v = values[key];
    if (!v) continue;
    if (!v.startsWith("https://")) {
      err(`${key} não é URL absoluta https: ${v}`);
      continue;
    }
    const local = path.join(DIST, v.replace(`${BASE_URL}/`, ""));
    if (v.startsWith(`${BASE_URL}/`) && !fs.existsSync(local)) {
      err(`${key} aponta para arquivo inexistente: ${v}`);
    }
  }
  if (values["og:image"] && values["twitter:image"] && values["og:image"] !== values["twitter:image"]) {
    err("og:image e twitter:image divergentes");
  }

  // 5. tipos
  if (values["twitter:card"] && values["twitter:card"] !== "summary_large_image") {
    err(`twitter:card inválido: ${values["twitter:card"]}`);
  }
  if (values["og:type"] && !["website", "article"].includes(values["og:type"])) {
    err(`og:type inválido: ${values["og:type"]}`);
  }

  // 6. limites de preview
  const title = decode(((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "").trim());
  const descTag = metaMatches(html, "name", "description");
  const desc = descTag.length ? decode(contentOf(descTag[0][0])) : "";
  if (descTag.length > 1) err(`meta description duplicada (${descTag.length}x)`);
  if (!title) err("sem <title>");
  else if (title.length > 60) err(`title com ${title.length} chars (>60)`);
  if (!desc) err("sem meta description");
  else if (desc.length < 50 || desc.length > 160)
    err(`description com ${desc.length} chars (fora de 50–160)`);

  checked++;
}

console.log(`🔎 Social cards: ${checked} páginas verificadas em dist/`);
if (errors.length) {
  console.error(`\n❌ ${errors.length} problema(s):`);
  for (const e of errors.slice(0, 80)) console.error("  · " + e);
  if (errors.length > 80) console.error(`  … +${errors.length - 80}`);
  process.exit(1);
}
console.log("✅ Canonical self-referencial + Open Graph/Twitter Cards válidos e sem duplicidade.");
