/**
 * gsc-index-report.mjs
 *
 * Consulta a API de Inspeção de URL do Google Search Console para todas as URLs
 * de public/sitemap.xml e gera um relatório com o que está indexado, o que não
 * está e o motivo mais provável de cada caso.
 *
 * Requisitos (variáveis de ambiente, já presentes no ambiente Lovable):
 *   LOVABLE_API_KEY                 — autenticação no gateway
 *   GOOGLE_SEARCH_CONSOLE_API_KEY   — conexão do Search Console
 *
 * Uso:
 *   node scripts/gsc-index-report.mjs            # todas as URLs do sitemap
 *   node scripts/gsc-index-report.mjs --limit 40 # amostra
 *   node scripts/gsc-index-report.mjs --only /ia,/financas
 *
 * Saídas: reports/gsc-index-report.json e reports/gsc-index-report.md
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE_URL = process.env.GSC_SITE_URL || "sc-domain:viciocode.com";

const lovableKey = process.env.LOVABLE_API_KEY;
const gscKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
if (!lovableKey || !gscKey) {
  console.error("❌ Faltam LOVABLE_API_KEY e/ou GOOGLE_SEARCH_CONSOLE_API_KEY.");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${lovableKey}`,
  "X-Connection-Api-Key": gscKey,
  "Content-Type": "application/json",
};

const args = process.argv.slice(2);
const argVal = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const limit = Number(argVal("--limit") || 0);
const only = (argVal("--only") || "").split(",").filter(Boolean);

const sitemap = fs.readFileSync(path.join(ROOT, "public/sitemap.xml"), "utf8");
let urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (only.length) urls = urls.filter((u) => only.some((o) => u.includes(o)));
if (limit > 0) urls = urls.slice(0, limit);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Traduz o veredito do Google para um motivo provável, em português. */
function motivo(res) {
  const r = res?.inspectionResult?.indexStatusResult || {};
  const verdict = r.verdict || "UNKNOWN";
  const coverage = r.coverageState || "";
  const robots = r.robotsTxtState || "";
  const fetchState = r.pageFetchState || "";
  const canonicalOk =
    !r.googleCanonical || !r.userCanonical || r.googleCanonical === r.userCanonical;

  if (verdict === "PASS") return { status: "indexada", motivo: coverage || "Indexada" };
  if (robots === "DISALLOWED")
    return { status: "bloqueada", motivo: "robots.txt está bloqueando o rastreamento desta URL" };
  if (fetchState && fetchState !== "SUCCESSFUL")
    return { status: "erro-fetch", motivo: `Google não conseguiu buscar a página (${fetchState})` };
  if (!canonicalOk)
    return {
      status: "canonical",
      motivo: `Google escolheu outro canonical: ${r.googleCanonical} (declarado: ${r.userCanonical})`,
    };
  if (/Discovered/i.test(coverage))
    return { status: "fila", motivo: "Descoberta, mas ainda não rastreada — fila de rastreamento" };
  if (/Crawled/i.test(coverage))
    return { status: "fila", motivo: "Rastreada, mas ainda não indexada — aguardando avaliação de qualidade/prioridade" };
  if (/not found|404/i.test(coverage)) return { status: "404", motivo: "Página retorna 404 para o Google" };
  if (/redirect/i.test(coverage)) return { status: "redirect", motivo: "URL redireciona para outro endereço" };
  if (/noindex/i.test(coverage)) return { status: "noindex", motivo: "Página marcada como noindex" };
  return { status: "nao-indexada", motivo: coverage || `Sem veredito claro (${verdict})` };
}

async function inspect(url, tentativa = 1) {
  const res = await fetch(`${GATEWAY}/v1/urlInspection/index:inspect`, {
    method: "POST",
    headers,
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE_URL }),
  });
  if (res.status === 429 && tentativa <= 3) {
    const wait = Number(res.headers.get("retry-after") || 30) * 1000;
    console.warn(`  ⏳ limite de requisições; aguardando ${wait / 1000}s…`);
    await sleep(wait);
    return inspect(url, tentativa + 1);
  }
  if (res.status === 403) throw new Error("403 — a conta conectada não tem acesso a esta propriedade");
  if (!res.ok) return { erro: `${res.status}: ${(await res.text()).slice(0, 200)}` };
  return res.json();
}

const resultados = [];
for (const [i, url] of urls.entries()) {
  try {
    const data = await inspect(url);
    if (data.erro) {
      resultados.push({ url, status: "erro-api", motivo: data.erro });
    } else {
      const r = data.inspectionResult?.indexStatusResult || {};
      resultados.push({
        url,
        ...motivo(data),
        coverageState: r.coverageState,
        lastCrawlTime: r.lastCrawlTime,
        googleCanonical: r.googleCanonical,
        userCanonical: r.userCanonical,
        robotsTxtState: r.robotsTxtState,
        sitemaps: r.sitemap?.length || 0,
      });
    }
  } catch (e) {
    resultados.push({ url, status: "erro-api", motivo: String(e.message || e) });
  }
  process.stdout.write(`\r  ${i + 1}/${urls.length} inspecionadas`);
  await sleep(250); // respeita o limite de requisições por minuto
}
console.log("");

const porStatus = resultados.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] || 0) + 1;
  return acc;
}, {});

const outDir = path.join(ROOT, "reports");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "gsc-index-report.json"),
  JSON.stringify({ geradoEm: new Date().toISOString(), site: SITE_URL, porStatus, resultados }, null, 2)
);

const naoIndexadas = resultados.filter((r) => r.status !== "indexada");
const md = [
  `# Relatório de indexação — ${SITE_URL}`,
  ``,
  `Gerado em ${new Date().toISOString()} · ${resultados.length} URLs do sitemap`,
  ``,
  `## Resumo`,
  ``,
  `| Status | URLs |`,
  `| --- | ---: |`,
  ...Object.entries(porStatus)
    .sort((a, b) => b[1] - a[1])
    .map(([s, n]) => `| ${s} | ${n} |`),
  ``,
  `## URLs não indexadas (${naoIndexadas.length})`,
  ``,
  `| URL | Status | Motivo mais provável | Último rastreio |`,
  `| --- | --- | --- | --- |`,
  ...naoIndexadas.map(
    (r) => `| ${r.url} | ${r.status} | ${r.motivo} | ${r.lastCrawlTime || "—"} |`
  ),
  ``,
].join("\n");
fs.writeFileSync(path.join(outDir, "gsc-index-report.md"), md);

console.log(`\nResumo: ${JSON.stringify(porStatus)}`);
console.log(`✅ Relatório salvo em reports/gsc-index-report.md`);
