#!/usr/bin/env node
/**
 * Padronização automática:
 *   1. <EditorialTake ... title="..."> deve começar com "Análise do Marcos".
 *      - "Leitura do VICIO<CODE>" / "Leitura do VICIO&lt;CODE&gt;"  →  "Análise do Marcos"
 *      - "Análise: <X>"                                            →  "Análise do Marcos: <X>"
 *      - "Análise do autor[: ...]"                                 →  "Análise do Marcos[: ...]"
 *      - Título ausente: nada a fazer (componente já default'a "Análise do Marcos")
 *   2. <CommentSection ... inviteTitle="..." />: remove o override
 *      (o default do componente já é "Participe da conversa").
 *
 * Idempotente. Roda como `npm run standardize:editorial`.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));

let changed = 0;
const fixed = { leitura: 0, analiseCurta: 0, analiseAutor: 0, inviteTitle: 0 };

for (const f of files) {
  const path = join(DIR, f);
  let src = readFileSync(path, "utf8");
  const before = src;

  // 1) Normalizar titles do EditorialTake
  src = src.replace(
    /(<EditorialTake\b[^>]*?\btitle=")([^"]*)(")/g,
    (_m, pre, title, post) => {
      let t = title;
      if (/^Leitura do VICIO(<CODE>|&lt;CODE&gt;)\s*$/i.test(t)) {
        fixed.leitura++;
        t = "Análise do Marcos";
      } else if (/^Análise do autor(\b|:)/i.test(t)) {
        fixed.analiseAutor++;
        t = t.replace(/^Análise do autor/i, "Análise do Marcos");
      } else if (/^Análise:\s*/i.test(t)) {
        fixed.analiseCurta++;
        t = t.replace(/^Análise:\s*/i, "Análise do Marcos: ");
      } else if (!/^Análise do Marcos\b/i.test(t)) {
        // título customizado sem prefixo padrão — força prefixo
        fixed.analiseCurta++;
        t = `Análise do Marcos: ${t}`;
      }
      return pre + t + post;
    },
  );

  // 2) Remover overrides de inviteTitle no CommentSection
  src = src.replace(
    /<CommentSection\b([\s\S]*?)\/>/g,
    (full, attrs) => {
      if (!/inviteTitle=/.test(attrs)) return full;
      fixed.inviteTitle++;
      const cleaned = attrs
        .replace(/\s*inviteTitle="[^"]*"/g, "")
        .replace(/\s*inviteSubtitle="[^"]*"/g, "");
      return `<CommentSection${cleaned}/>`;
    },
  );

  if (src !== before) {
    writeFileSync(path, src);
    changed++;
  }
}

console.log(`✓ ${changed} arquivo(s) modificado(s)`);
console.log(`  - "Leitura do VICIO<CODE>" → "Análise do Marcos": ${fixed.leitura}`);
console.log(`  - "Análise: X" → "Análise do Marcos: X": ${fixed.analiseCurta}`);
console.log(`  - "Análise do autor" → "Análise do Marcos": ${fixed.analiseAutor}`);
console.log(`  - inviteTitle removido: ${fixed.inviteTitle}`);
