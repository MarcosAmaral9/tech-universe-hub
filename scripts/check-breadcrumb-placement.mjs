/**
 * check-breadcrumb-placement.mjs
 *
 * Garante que o componente Breadcrumb seja renderizado APENAS em
 * `src/components/Layout.tsx`, no topo do <main>. Qualquer outra
 * página/componente que importe ou renderize <Breadcrumb /> quebra o
 * padrão único do site (breadcrumb sempre no topo, acima do título).
 *
 * Falhas comuns detectadas:
 *   - Import de `@/components/Breadcrumb` fora do Layout.
 *   - Uso de `<Breadcrumb` em qualquer arquivo que não seja Layout.tsx.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.resolve(ROOT, "src");
const ALLOWED = path.resolve(SRC, "components/Layout.tsx");
const SELF = path.resolve(SRC, "components/Breadcrumb.tsx");

const errors = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    if (full === ALLOWED || full === SELF) continue;
    const src = fs.readFileSync(full, "utf8");
    if (/from\s+["']@\/components\/Breadcrumb["']/.test(src) ||
        /from\s+["'][^"']*\/Breadcrumb["']/.test(src)) {
      errors.push(`${path.relative(ROOT, full)}: importa Breadcrumb (apenas Layout.tsx pode importar)`);
    }
    if (/<Breadcrumb[\s/>]/.test(src)) {
      errors.push(`${path.relative(ROOT, full)}: renderiza <Breadcrumb /> (apenas Layout.tsx pode renderizar, sempre no topo do <main>)`);
    }
  }
};

walk(SRC);

// Layout.tsx: o Breadcrumb precisa aparecer ANTES de {children}
const layout = fs.readFileSync(ALLOWED, "utf8");
const idxBc = layout.indexOf("<Breadcrumb");
const idxCh = layout.indexOf("{children}");
if (idxBc === -1) {
  errors.push("src/components/Layout.tsx: <Breadcrumb /> ausente — deve estar no topo do <main>");
} else if (idxCh === -1 || idxBc > idxCh) {
  errors.push("src/components/Layout.tsx: <Breadcrumb /> deve aparecer ANTES de {children} (topo da página)");
}

if (errors.length) {
  console.error(`\n❌ Padrão do Breadcrumb violado — ${errors.length} problema(s):`);
  for (const e of errors) console.error(`   - ${e}`);
  console.error(`\n💡 O Breadcrumb é renderizado UMA ÚNICA VEZ, globalmente, no topo do <main> em Layout.tsx.`);
  process.exit(1);
}

console.log(`✅ Breadcrumb: renderizado apenas no topo do Layout.tsx (padrão único respeitado).`);
