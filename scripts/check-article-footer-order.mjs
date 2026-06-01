#!/usr/bin/env node
/**
 * Prebuild check: garante que todo post que usa <EditorialTake/> também
 * renderize <ArticleSources/>, <RelatedPosts/> e <CommentSection/> na ordem:
 *   EditorialTake → ArticleSources → RelatedPosts → CommentSection
 *
 * Falha o build se algum post estiver fora do padrão.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const REQUIRED = ["EditorialTake", "ArticleSources", "RelatedPosts", "CommentSection"];
const EXPECTED = REQUIRED.join(" → ");

const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));
const errors = [];
let checked = 0;
let skipped = 0;

for (const f of files) {
  // Pula páginas do tipo Portal (índices/hubs, não são artigos)
  if (/Portal\.tsx$/.test(f)) {
    skipped++;
    continue;
  }
  const src = readFileSync(join(DIR, f), "utf8");

  // Heurística extra: pula arquivos que claramente são hubs/índices
  // (renderizam listas de artigos via <Link to={`/post/...`}> e não têm conteúdo editorial)
  const isHub =
    !src.includes("<EditorialTake") &&
    !src.includes("<ArticleSources") &&
    /to=\{`\/post\//.test(src);
  if (isHub) {
    skipped++;
    continue;
  }

  if (!src.includes("<EditorialTake")) continue; // post sem rodapé editorial
  checked++;

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
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} post(s) fora do padrão do rodapé editorial`);
  console.error(`  Esperado: ${EXPECTED}\n`);
  for (const e of errors) console.error("  - " + e);
  console.error("");
  process.exit(1);
}

console.log(`✓ Rodapé editorial padronizado em todos os posts (${EXPECTED})`);
