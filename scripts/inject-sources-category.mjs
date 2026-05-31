#!/usr/bin/env node
// One-off: injeta `category="..."` em cada <ArticleSources ...> dos posts
// usando o valor encontrado em <EditorialTake category="..."> (ou BackNavigation).
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));

let touched = 0;
let skipped = 0;

for (const f of files) {
  const path = join(DIR, f);
  let src = readFileSync(path, "utf8");

  if (!src.includes("<ArticleSources")) continue;
  if (/<ArticleSources[^>]*\scategory=/.test(src)) {
    skipped++;
    continue;
  }

  const m =
    src.match(/<EditorialTake[^>]*\scategory="(ia|invest|geek|otaku)"/) ||
    src.match(/<BackNavigation[^>]*\scategory="(ia|invest|geek|otaku)"/);
  if (!m) {
    console.warn(`! ${f}: sem categoria detectável, pulando`);
    continue;
  }
  const cat = m[1];

  const next = src.replace(/<ArticleSources(\s|>)/, `<ArticleSources category="${cat}"$1`);
  if (next !== src) {
    writeFileSync(path, next);
    touched++;
  }
}

console.log(`✓ ArticleSources category injetado em ${touched} posts (${skipped} já estavam ok)`);
