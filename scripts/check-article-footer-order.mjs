#!/usr/bin/env node
/**
 * Prebuild check do rodapé editorial. Garante:
 *  1. Ordem fixa: EditorialTake → ArticleSources → RelatedPosts → CommentSection
 *  2. Nenhum resquício da antiga div CTA solta
 *     (className="mt-10 p-6 bg-secondary rounded-xl text-center")
 *  3. <CommentSection .../> com prop category="..." em posts editoriais
 *
 * Pula Portals (índices) e hubs (sem EditorialTake/ArticleSources, com Links /post/).
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const REQUIRED = ["EditorialTake", "ArticleSources", "RelatedPosts", "CommentSection"];
const EXPECTED = REQUIRED.join(" → ");
const LEGACY_CTA = /className="mt-10 p-6 bg-secondary rounded-xl text-center"/;

const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));
const errors = [];
let checked = 0;
let skipped = 0;

for (const f of files) {
  if (/Portal\.tsx$/.test(f)) {
    skipped++;
    continue;
  }
  const src = readFileSync(join(DIR, f), "utf8");

  const isHub =
    !src.includes("<EditorialTake") &&
    !src.includes("<ArticleSources") &&
    /to=\{`\/post\//.test(src);
  if (isHub) {
    skipped++;
    continue;
  }

  if (!src.includes("<EditorialTake")) continue;
  checked++;

  // 1) Ordem
  const positions = REQUIRED.map((c) => ({ c, pos: src.indexOf(`<${c}`) }));
  const missing = positions.filter((p) => p.pos === -1).map((p) => p.c);
  if (missing.length) {
    errors.push(`${f}: faltando ${missing.join(", ")}`);
    continue;
  }
  const order = [...positions].sort((a, b) => a.pos - b.pos).map((p) => p.c).join(" → ");
  if (order !== EXPECTED) {
    errors.push(`${f}: ordem incorreta — ${order}`);
  }

  // 2) CTA legado
  if (LEGACY_CTA.test(src)) {
    errors.push(`${f}: contém div CTA legada (mt-10 p-6 bg-secondary rounded-xl text-center) — o convite agora vive dentro do <CommentSection/>`);
  }

  // 3) category= no CommentSection
  const cs = src.match(/<CommentSection\b([^>]*?)\/>/);
  if (cs && !/category=/.test(cs[0])) {
    errors.push(`${f}: <CommentSection/> sem prop category="ia|invest|geek|otaku"`);
  }
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} post(s) fora do padrão do rodapé editorial`);
  console.error(`  Esperado: ${EXPECTED}\n`);
  for (const e of errors) console.error("  - " + e);
  console.error("");
  process.exit(1);
}

console.log(
  `✓ Rodapé editorial padronizado em ${checked} post(s) (${EXPECTED}) — ${skipped} portal/hub ignorados`,
);
