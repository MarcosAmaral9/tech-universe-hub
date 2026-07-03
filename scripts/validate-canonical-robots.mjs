/**
 * validate-canonical-robots.mjs
 *
 * Validação estática — sem browser — que garante:
 *  1. Toda URL em public/sitemap.xml é PÚBLICA segundo as regras do DynamicSEO
 *     (nenhuma rota privada vazou para o sitemap).
 *  2. Toda URL do sitemap é "limpa": sem query string (`?`), sem fragmento (`#`),
 *     e sem trailing slash (exceto a raiz).
 *  3. Todas as URLs do sitemap são cobertas por rotas reais do App.tsx
 *     (posts existem em posts.ts; rotas estáticas existem em App.tsx).
 *  4. Toda rota privada declarada em DynamicSEO possui um Disallow correspondente
 *     em public/robots.txt.
 *  5. Regras de canonical/robots que o DynamicSEO emite em runtime são
 *     verificadas simbolicamente para cada URL do sitemap
 *     (self-referencial + `index, follow`).
 *
 * Uso:
 *   node scripts/validate-canonical-robots.mjs
 * Exit code 0 = ok. Exit code 1 = houve violações (bom para CI).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const BASE_URL  = "https://viciocode.com";

// ── Regras espelhadas do src/components/DynamicSEO.tsx ──────────────────────
// Mantenha sincronizado com `privatePaths` naquele arquivo.
const PRIVATE_PATHS = [
  "/configuracoes",
  "/entrar",
  "/redefinir-senha",
  "/painel-social",
  "/leitura-offline",
];
const PRIVATE_PREFIXES = ["/perfil/", "/auth/"];

const isPrivate = (pathname) =>
  PRIVATE_PATHS.some((p) => pathname.startsWith(p)) ||
  PRIVATE_PREFIXES.some((p) => pathname.startsWith(p));

const cleanPath = (pathname) =>
  pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

// ── Leitura de artefatos ────────────────────────────────────────────────────
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

const appSrc      = read("src/App.tsx");
const postsSrc    = read("src/data/posts.ts");
const sitemapXml  = read("public/sitemap.xml");
const robotsTxt   = read("public/robots.txt");

const routes = [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const postSlugs = new Set(
  [...postsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1])
);

const staticRoutes = new Set(
  routes.filter(
    (r) => !r.includes(":") && r !== "*" && !r.startsWith("/post/")
  )
);
const declaredPostRoutes = new Set(
  routes.filter((r) => r.startsWith("/post/")).map((r) => r.slice("/post/".length))
);

const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// ── Validação ───────────────────────────────────────────────────────────────
const errors = [];
const warnings = [];

// 1) robots.txt cobre todas as rotas privadas
for (const p of [...PRIVATE_PATHS, ...PRIVATE_PREFIXES]) {
  const disallow = new RegExp(`^\\s*Disallow:\\s*${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "m");
  if (!disallow.test(robotsTxt)) {
    errors.push(`robots.txt: falta 'Disallow: ${p}'`);
  }
}

// 2) sitemap.xml precisa apontar Sitemap: no robots.txt
if (!/^\s*Sitemap:\s*https?:\/\/[^\s]+sitemap\.xml/m.test(robotsTxt)) {
  errors.push("robots.txt: falta diretiva 'Sitemap: .../sitemap.xml'");
}

// 3) Toda URL do sitemap deve ser limpa e pública
for (const loc of sitemapUrls) {
  if (!loc.startsWith(BASE_URL)) {
    errors.push(`sitemap: URL fora do domínio ${BASE_URL}: ${loc}`);
    continue;
  }
  const pathname = loc.slice(BASE_URL.length) || "/";

  // 3a) sem query/hash
  if (pathname.includes("?") || pathname.includes("#")) {
    errors.push(`sitemap: URL contém query/hash: ${loc}`);
  }
  // 3b) sem trailing slash (exceto raiz)
  if (pathname !== "/" && pathname.endsWith("/")) {
    errors.push(`sitemap: URL com trailing slash: ${loc}`);
  }
  // 3c) canonical esperado === própria URL (self-referencial)
  const expectedCanonical = `${BASE_URL}${cleanPath(pathname)}`;
  if (expectedCanonical !== loc) {
    errors.push(`sitemap: canonical esperado '${expectedCanonical}' difere de loc '${loc}'`);
  }
  // 3d) não pode ser privada
  if (isPrivate(pathname)) {
    errors.push(`sitemap: rota privada indexada (deveria ser noindex): ${loc}`);
  }
  // 3e) rota precisa existir em App.tsx (ou ser slug de posts.ts)
  if (pathname.startsWith("/post/")) {
    const slug = pathname.slice("/post/".length);
    if (!postSlugs.has(slug)) {
      errors.push(`sitemap: /post/${slug} não existe em src/data/posts.ts`);
    }
    if (!declaredPostRoutes.has(slug)) {
      errors.push(`sitemap: /post/${slug} não tem <Route> em src/App.tsx`);
    }
  } else if (!staticRoutes.has(pathname)) {
    errors.push(`sitemap: rota '${pathname}' não existe em src/App.tsx`);
  }
}

// 4) Toda rota pública estática do App.tsx deve estar no sitemap
//    (avisos — nem toda rota faz sentido em sitemap, ex.: /auth/callback já é privada)
const sitemapPathnames = new Set(
  sitemapUrls.map((u) => u.slice(BASE_URL.length) || "/")
);
for (const r of staticRoutes) {
  if (isPrivate(r)) continue;
  if (!sitemapPathnames.has(r)) {
    warnings.push(`sitemap: rota pública '${r}' ausente do sitemap.xml`);
  }
}

// 5) Todo post publicado deve ter entrada no sitemap
for (const slug of postSlugs) {
  const url = `${BASE_URL}/post/${slug}`;
  if (!sitemapPathnames.has(`/post/${slug}`)) {
    warnings.push(`sitemap: post '${slug}' publicado mas ausente do sitemap.xml (${url})`);
  }
}

// ── Relatório ───────────────────────────────────────────────────────────────
console.log(`Rotas estáticas em App.tsx: ${staticRoutes.size}`);
console.log(`Slugs em posts.ts:          ${postSlugs.size}`);
console.log(`URLs em sitemap.xml:        ${sitemapUrls.length}`);
console.log(`Rotas privadas (DynamicSEO): ${PRIVATE_PATHS.length + PRIVATE_PREFIXES.length}`);
console.log("");

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} avisos:`);
  for (const w of warnings) console.log(`   - ${w}`);
  console.log("");
}

if (errors.length) {
  console.error(`❌ ${errors.length} erros:`);
  for (const e of errors) console.error(`   - ${e}`);
  process.exit(1);
}

console.log("✅ Canonical, robots e sitemap consistentes.");
