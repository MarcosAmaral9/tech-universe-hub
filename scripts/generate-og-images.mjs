/**
 * generate-og-images.mjs
 * Gera uma versão leve (JPEG 1200x630, alvo < 300 KB) da capa de cada post
 * em dist/assets/og/<slug>.jpg.
 *
 * Motivo: o WhatsApp (e outros crawlers de pré-visualização de link) não
 * executam JavaScript e têm limite de tamanho/formato para a imagem de
 * og:image — WebP de vários MB não gera prévia. O JPEG leve garante que a
 * capa do artigo apareça ao compartilhar o link.
 *
 * Roda no build ANTES de generate-post-html.mjs, que aponta og:image para
 * estes arquivos quando existem.
 */
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist");
const SRC_ASSETS = path.resolve(ROOT, "src/assets");
const OUT_DIR = path.join(DIST, "assets", "og");
const MAX_BYTES = 290 * 1024; // alvo: abaixo de ~300 KB

const postsSource = fs.readFileSync(path.resolve(ROOT, "src/data/posts.ts"), "utf8");
const postRegex =
  /\{\s*id:\s*"[^"]+",\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",[\s\S]*?date:\s*"([^"]+)"/g;
const slugs = [];
let m;
while ((m = postRegex.exec(postsSource)) !== null) slugs.push(m[1]);

// Mesma lógica de casamento slug→capa de generate-post-html.mjs
const SLUG_ASSET_OVERRIDES = {
  "crimson-desert-guia-iniciantes-dicas": "crimson-desert-iniciantes",
  "crimson-desert-melhores-equipamentos-inicio": "crimson-desert-equipamentos",
  "tsukimichi-moonlit-fantasy-guia-completo": "tsukimichi",
  "mugen-gacha-level-9999-traicao-dungeon": "mugen-gacha",
  "kizoku-tensei-noble-reincarnation-guia": "kizoku-tensei",
  "hell-mode-gamer-isekai-guia-completo": "hell-mode",
  "isekai-nonbiri-nouka-farming-life-guia": "isekai-nonbiri-nouka",
  "maousama-retry-demon-lord-guia-completo": "maousama-retry",
  "okiraku-ryoushu-territory-defense-guia": "okiraku-ryoushu",
  "solo-leveling-guia-completo-temporadas": "solo-leveling",
};

const srcFiles = fs.readdirSync(SRC_ASSETS).filter((f) => /\.(webp|jpg|png)$/.test(f));

function findHero(slug) {
  const short = slug.replace(/-2026$/, "");
  const prefix = SLUG_ASSET_OVERRIDES[slug] || short;
  let best;
  let bestLen = 0;
  for (const f of srcFiles) {
    if (f.startsWith(prefix)) return f;
    const base = f.replace(/\.(webp|jpg|png)$/, "");
    const endsWithNumber = /\d$/.test(base);
    const minLen = endsWithNumber ? 4 : 8;
    if (base.length >= minLen && short.startsWith(base) && base.length > bestLen) {
      bestLen = base.length;
      best = f;
    }
  }
  return best;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let generated = 0;
let skipped = 0;
let missing = 0;

for (const slug of slugs) {
  const hero = findHero(slug);
  if (!hero) {
    missing++;
    continue;
  }
  const src = path.join(SRC_ASSETS, hero);
  const out = path.join(OUT_DIR, `${slug}.jpg`);

  // Incremental: só regenera se a capa for mais nova que o JPEG
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) {
    skipped++;
    continue;
  }

  // 1200x630 cover, sem metadados; reduz qualidade até ficar abaixo do alvo
  for (const quality of [82, 70, 58]) {
    execFileSync("magick", [
      src,
      "-resize", "1200x630^",
      "-gravity", "center",
      "-extent", "1200x630",
      "-strip",
      "-quality", String(quality),
      out,
    ]);
    if (fs.statSync(out).size <= MAX_BYTES) break;
  }
  generated++;
}

console.log(
  `✅ OG images: ${generated} geradas, ${skipped} já atualizadas, ${missing} sem capa (fallback og-image.png)`
);
