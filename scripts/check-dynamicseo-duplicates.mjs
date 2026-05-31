#!/usr/bin/env node
// Prebuild check: ensures PAGE_META in src/components/DynamicSEO.tsx
// has no duplicate top-level keys. Fails the build with a clear error.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const FILE = resolve("src/components/DynamicSEO.tsx");

let source;
try {
  source = readFileSync(FILE, "utf8");
} catch (err) {
  console.error(`[check-dynamicseo-duplicates] Cannot read ${FILE}: ${err.message}`);
  process.exit(1);
}

const lines = source.split("\n");
const keyPattern = /^  "([^"]+)":\s*\{/;

let inPageMeta = false;
const seen = new Map(); // key -> first line number (1-based)
const duplicates = []; // { key, first, dup }

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!inPageMeta) {
    if (line.includes("const PAGE_META")) inPageMeta = true;
    continue;
  }
  const m = keyPattern.exec(line);
  if (m) {
    const key = m[1];
    const lineNo = i + 1;
    if (seen.has(key)) {
      duplicates.push({ key, first: seen.get(key), dup: lineNo });
    } else {
      seen.set(key, lineNo);
    }
  }
}

if (duplicates.length > 0) {
  console.error(
    `\n✗ DynamicSEO PAGE_META contains ${duplicates.length} duplicate key(s):\n`
  );
  for (const { key, first, dup } of duplicates) {
    console.error(`  • "${key}" — first defined at line ${first}, duplicated at line ${dup}`);
  }
  console.error(
    `\nFix: remove the duplicate entries in src/components/DynamicSEO.tsx before building.\n`
  );
  process.exit(1);
}

console.log(`✓ DynamicSEO PAGE_META: ${seen.size} unique keys, no duplicates.`);
