#!/usr/bin/env node
/**
 * Prebuild check de padronização editorial:
 *   - Todo <EditorialTake title="..."/> deve começar com "Análise do Marcos".
 *   - Nenhum post deve sobrescrever `inviteTitle`/`inviteSubtitle` do <CommentSection/>;
 *     o default "Participe da conversa" precisa valer em todo o site.
 *   - Banido o texto "Leitura do VICIO<CODE>" / "Leitura do VICIO&lt;CODE&gt;" em qualquer post.
 *
 * Para corrigir automaticamente: `npm run standardize:editorial`.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/posts";
const errors = [];

for (const f of readdirSync(DIR).filter((x) => x.endsWith(".tsx"))) {
  const src = readFileSync(join(DIR, f), "utf8");

  for (const m of src.matchAll(/<EditorialTake\b[^>]*?\btitle="([^"]*)"/g)) {
    const t = m[1];
    if (!/^Análise do Marcos\b/.test(t)) {
      errors.push(`${f}: EditorialTake title fora do padrão → "${t}"`);
    }
  }

  for (const m of src.matchAll(/<CommentSection\b[\s\S]*?\/>/g)) {
    if (/\binviteTitle=/.test(m[0])) {
      errors.push(`${f}: CommentSection com inviteTitle override (use o default)`);
    }
    if (/\binviteSubtitle=/.test(m[0])) {
      errors.push(`${f}: CommentSection com inviteSubtitle override (use o default)`);
    }
  }

  if (/Leitura do VICIO(<CODE>|&lt;CODE&gt;)/.test(src)) {
    errors.push(`${f}: contém "Leitura do VICIO<CODE>" — substitua por "Análise do Marcos"`);
  }
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} inconsistência(s) editorial(is):`);
  for (const e of errors) console.error("  - " + e);
  console.error(`\nRode: npm run standardize:editorial\n`);
  process.exit(1);
}

console.log("✓ Padrão editorial OK (Análise do Marcos / Participe da conversa)");
