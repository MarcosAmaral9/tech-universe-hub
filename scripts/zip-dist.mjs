/**
 * zip-dist.mjs
 * Empacota dist/ inteiro em viciocode-dist.zip na raiz do projeto,
 * pronto para upload no Gerenciador de Arquivos da Hostinger (public_html).
 * Preserva .htaccess e arquivos ocultos.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist");
const OUT  = path.resolve(ROOT, "viciocode-dist.zip");

if (!fs.existsSync(DIST)) {
  console.error("❌ dist/ não existe. Rode 'npm run build' primeiro.");
  process.exit(1);
}
if (fs.existsSync(OUT)) fs.unlinkSync(OUT);

try {
  // -r recursivo, incluindo arquivos ocultos (.htaccess). Rodamos DE dentro
  // de dist/ para que o zip contenha os arquivos na raiz (não a pasta dist/).
  execSync(`cd "${DIST}" && zip -r -q "${OUT}" .`, { stdio: "inherit" });
  const size = (fs.statSync(OUT).size / 1024 / 1024).toFixed(2);
  console.log(`✅ ${path.relative(ROOT, OUT)} criado (${size} MB)`);
  console.log(`   Faça upload no Gerenciador de Arquivos da Hostinger em public_html/ e extraia.`);
} catch (e) {
  console.error("❌ Falha ao empacotar. O comando 'zip' está instalado? (macOS/Linux)");
  console.error("   Windows: use 'npm run deploy:ftp' ou o GitHub Action.");
  process.exit(1);
}
