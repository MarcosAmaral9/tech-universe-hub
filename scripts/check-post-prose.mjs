#!/usr/bin/env node
/**
 * Audita o tamanho da prosa dos posts editoriais.
 * Imprime relatório de posts abaixo de MIN_WORDS (padrão 1400).
 * Não falha o build — é informativo (use `--strict` para falhar).
 *
 * Heurística: remove JSX tags e expressões `{...}` rasas, sobrando o
 * texto literal dentro dos elementos. Margem de ~±5%.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const MIN = 1400;
const strict = process.argv.includes("--strict");

const files = readdirSync(DIR).filter(f => f.endsWith(".tsx") && !/Portal\.tsx$/.test(f));
const low = [];

for (const f of files) {
  const src = readFileSync(join(DIR, f), "utf8");
  if (!src.includes("<EditorialTake")) continue; // ignora hubs sem editorial
  let txt = src.replace(/<[^>]+>/g, " ").replace(/\{[^{}]*\}/g, " ");
  const words = txt.match(/[A-Za-zÀ-ÿ']+/g) ?? [];
  if (words.length < MIN) low.push({ f, n: words.length });
}

low.sort((a, b) => a.n - b.n);

if (low.length === 0) {
  console.log(`✓ Todos os posts editoriais têm ≥ ${MIN} palavras de prosa.`);
  process.exit(0);
}

console.log(`\n⚠ ${low.length} post(s) com menos de ${MIN} palavras de prosa:`);
for (const { f, n } of low) console.log(`  ${String(n).padStart(5)}  ${f}`);

if (strict) {
  console.error(`\n✗ Falha estrita: posts abaixo do mínimo.`);
  process.exit(1);
}
