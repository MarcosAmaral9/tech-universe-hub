#!/usr/bin/env node
/**
 * Audita cada post editorial e garante:
 *  1. <EditorialTake category="..."> presente
 *  2. <ArticleSources ... /> presente com >=5 fontes
 *  3. <AuthorBio ... /> presente
 *  4. <CommentSection category="..."> presente
 *  5. Ordem: EditorialTake -> ArticleSources -> RelatedPosts -> CommentSection
 *  6. Nenhum componente Ad* dentro de blocos .map(...)
 *  7. EditorialTake vem sempre DEPOIS do conteúdo principal do artigo
 *     e ANTES de ArticleSources.
 *
 * Portais/hubs (sem EditorialTake e com links `/post/`) são ignorados.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const REQUIRED = ["EditorialTake", "ArticleSources", "RelatedPosts", "CommentSection"];
const errors = [];
let checked = 0;
let skipped = 0;

function countSources(src) {
  // Encontra o bloco sources={[ ... ]} do ArticleSources (ou ArticleFooter)
  // e conta objetos { ... } de primeiro nível.
  const patterns = [/sources=\{\[([\s\S]*?)\]\}/g];
  let max = 0;
  for (const re of patterns) {
    for (const m of src.matchAll(re)) {
      const body = m[1];
      let depth = 0;
      let count = 0;
      for (let i = 0; i < body.length; i++) {
        const c = body[i];
        if (c === "{") {
          if (depth === 0) count++;
          depth++;
        } else if (c === "}") depth--;
      }
      if (count > max) max = count;
    }
  }
  return max;
}

function hasAdInsideMap(src) {
  const re = /\.map\s*\(/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    let i = m.index + m[0].length;
    let depth = 1;
    const start = i;
    let str = null; // '"' | "'" | '`'
    while (i < src.length && depth > 0) {
      const c = src[i];
      const p = src[i - 1];
      if (str) {
        if (c === str && p !== "\\") str = null;
      } else if (c === '"' || c === "'" || c === "`") {
        str = c;
      } else if (c === "(") depth++;
      else if (c === ")") depth--;
      i++;
    }
    const body = src.slice(start, i - 1);
    if (/<Ad[A-Z][A-Za-z0-9]*\b/.test(body)) return true;
  }
  return false;
}

for (const f of readdirSync(DIR).filter((x) => x.endsWith(".tsx"))) {
  if (/Portal\.tsx$/.test(f)) { skipped++; continue; }
  const src = readFileSync(join(DIR, f), "utf8");

  const isHub =
    !src.includes("<EditorialTake") &&
    !src.includes("<ArticleSources") &&
    /to=\{`\/post\//.test(src);
  if (isHub) { skipped++; continue; }

  const usesFooter = src.includes("<ArticleFooter");
  if (!src.includes("<EditorialTake") && !usesFooter) continue;

  checked++;
  const missing = [];

  // 1-4 presença
  const posET = src.indexOf("<EditorialTake");
  const posAS = src.indexOf("<ArticleSources");
  const posRP = src.indexOf("<RelatedPosts");
  const posCS = src.indexOf("<CommentSection");
  const posAB = src.indexOf("<AuthorBio");

  if (usesFooter) {
    // ArticleFooter cobre ET/AS/RP/CS; valida AuthorBio à parte.
    if (posAB === -1) missing.push("AuthorBio");
    if (missing.length) errors.push(`${f}: faltando ${missing.join(", ")}`);
    continue;
  }

  if (posET === -1) missing.push("EditorialTake");
  if (posAS === -1) missing.push("ArticleSources");
  if (posRP === -1) missing.push("RelatedPosts");
  if (posCS === -1) missing.push("CommentSection");
  if (posAB === -1) missing.push("AuthorBio");
  if (missing.length) { errors.push(`${f}: faltando ${missing.join(", ")}`); continue; }

  // 1) category em EditorialTake
  const etTag = src.match(/<EditorialTake\b[^>]*>/);
  if (!etTag || !/\bcategory=/.test(etTag[0])) {
    errors.push(`${f}: <EditorialTake> sem prop category`);
  }

  // 4) category em CommentSection
  const csTag = src.match(/<CommentSection\b[^>]*\/?>/);
  if (!csTag || !/\bcategory=/.test(csTag[0])) {
    errors.push(`${f}: <CommentSection> sem prop category`);
  }

  // 5) Ordem
  const order = [
    ["EditorialTake", posET],
    ["ArticleSources", posAS],
    ["RelatedPosts", posRP],
    ["CommentSection", posCS],
  ];
  for (let i = 1; i < order.length; i++) {
    if (order[i][1] < order[i - 1][1]) {
      errors.push(`${f}: ordem incorreta (${order[i - 1][0]} depois de ${order[i][0]})`);
      break;
    }
  }

  // 2) >=5 fontes
  const n = countSources(src);
  if (n < 5) errors.push(`${f}: ArticleSources tem ${n} fontes (<5)`);

  // 6) Ads dentro de .map
  if (hasAdInsideMap(src)) errors.push(`${f}: componente <Ad*/> dentro de .map()`);

  // 7) EditorialTake após conteúdo principal (não vem antes do primeiro <h2/<p>/prose)
  const firstContent = Math.min(
    ...["<h2", "<h3", "<p ", "<p>", 'className="lead"', "prose"].map((t) => {
      const p = src.indexOf(t);
      return p === -1 ? Number.MAX_SAFE_INTEGER : p;
    }),
  );
  if (firstContent !== Number.MAX_SAFE_INTEGER && posET < firstContent) {
    errors.push(`${f}: <EditorialTake> aparece antes do conteúdo do artigo`);
  }
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} problema(s) em ${checked} post(s) analisado(s) (${skipped} ignorados)`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(`✓ Estrutura editorial OK em ${checked} posts (${skipped} portais/hubs ignorados)`);
