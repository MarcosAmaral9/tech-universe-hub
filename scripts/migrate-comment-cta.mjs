#!/usr/bin/env node
/**
 * Migração one-shot:
 *  1. Remove o bloco CTA solto antes do <EditorialTake/>:
 *     <div className="mt-10 p-6 bg-secondary rounded-xl text-center"> ... </div>
 *  2. Adiciona prop `category="<cat>"` no <CommentSection .../> do mesmo arquivo,
 *     inferindo a categoria a partir de <CategoryBadge category="..."/> ou
 *     trackArticleRead(..., "<cat>").
 *
 * Idempotente: se a div já foi removida ou category já está presente, pula.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const VALID = new Set(["ia", "invest", "geek", "otaku"]);

const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));

let changed = 0;
let removedCta = 0;
let addedCategory = 0;
const warnings = [];

const CTA_RE =
  /\n\s*<div className="mt-10 p-6 bg-secondary rounded-xl text-center">[\s\S]*?<\/div>\s*\n/;

for (const f of files) {
  const path = join(DIR, f);
  let src = readFileSync(path, "utf8");
  const original = src;

  // 1) Remover CTA (apenas 1 ocorrência — formato canônico)
  if (CTA_RE.test(src)) {
    src = src.replace(CTA_RE, "\n");
    removedCta++;
  }

  // 2) Adicionar category no CommentSection (se ainda não tiver)
  const csRe = /<CommentSection\b([^>]*?)\/>/;
  const m = src.match(csRe);
  if (m && !/category=/.test(m[0])) {
    // inferir categoria
    let cat = null;
    const badge = src.match(/<CategoryBadge\s+category="(\w+)"/);
    if (badge && VALID.has(badge[1])) cat = badge[1];
    if (!cat) {
      const track = src.match(/trackArticleRead\([^)]*?,\s*"(\w+)"\s*\)/);
      if (track && VALID.has(track[1])) cat = track[1];
    }
    if (!cat) {
      warnings.push(`${f}: CommentSection sem category= e categoria não inferida`);
    } else {
      src = src.replace(csRe, `<CommentSection${m[1]} category="${cat}" />`);
      addedCategory++;
    }
  }

  if (src !== original) {
    writeFileSync(path, src);
    changed++;
  }
}

console.log(`✓ ${changed} arquivo(s) modificado(s)`);
console.log(`  - CTA removido em ${removedCta}`);
console.log(`  - category= adicionado em ${addedCategory}`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} aviso(s):`);
  for (const w of warnings) console.log("  - " + w);
}
