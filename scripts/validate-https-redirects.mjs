/**
 * validate-https-redirects.mjs
 *
 * Valida no servidor de produção que:
 *   1. http://viciocode.com/        → 301 → https://viciocode.com/   (salto único)
 *   2. http://www.viciocode.com/    → 301 → https://viciocode.com/   (salto único)
 *   3. https://www.viciocode.com/   → 301 → https://viciocode.com/
 *   4. https://viciocode.com/       → 200 + cabeçalho HSTS
 *   5. Uma URL interna com barra final → 301 sem a barra
 *   6. robots.txt e sitemap.xml respondem 200 em HTTPS
 *
 * Uso: node scripts/validate-https-redirects.mjs [--base https://viciocode.com]
 * Exit 0 = tudo certo; exit 1 = alguma checagem falhou (bom para CI/pós-deploy).
 */
const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = baseArg >= 0 ? args[baseArg + 1] : "https://viciocode.com";
const HOST = new URL(BASE).host;

const erros = [];
const ok = [];

async function head(url) {
  const res = await fetch(url, { method: "HEAD", redirect: "manual" });
  return { status: res.status, location: res.headers.get("location"), headers: res.headers };
}

async function esperaRedirect(url, destino) {
  try {
    const { status, location } = await head(url);
    if (status !== 301 && status !== 308) {
      erros.push(`${url}: esperado 301, recebeu ${status}${location ? ` → ${location}` : ""}`);
      return;
    }
    const loc = location?.replace(/\/$/, "");
    const alvo = destino.replace(/\/$/, "");
    if (loc !== alvo) {
      erros.push(`${url}: redireciona para ${location}, esperado ${destino}`);
      return;
    }
    // salto único: o destino já deve responder 200
    const segundo = await head(destino);
    if (segundo.status >= 300 && segundo.status < 400) {
      erros.push(`${url}: cadeia de redirects (${destino} → ${segundo.location})`);
      return;
    }
    ok.push(`${url} → ${destino} (301, salto único)`);
  } catch (e) {
    erros.push(`${url}: falha na requisição — ${e.message}`);
  }
}

await esperaRedirect(`http://${HOST}/`, `${BASE}/`);
await esperaRedirect(`http://www.${HOST}/`, `${BASE}/`);
await esperaRedirect(`https://www.${HOST}/`, `${BASE}/`);

// HSTS na raiz
try {
  const { status, headers } = await head(`${BASE}/`);
  if (status !== 200) erros.push(`${BASE}/: esperado 200, recebeu ${status}`);
  const hsts = headers.get("strict-transport-security");
  if (!hsts) {
    erros.push(`${BASE}/: cabeçalho Strict-Transport-Security ausente`);
  } else if (!/max-age=(\d+)/.test(hsts) || Number(hsts.match(/max-age=(\d+)/)[1]) < 31536000) {
    erros.push(`${BASE}/: HSTS com max-age insuficiente (${hsts})`);
  } else {
    ok.push(`HSTS presente: ${hsts}`);
  }
} catch (e) {
  erros.push(`${BASE}/: falha na requisição — ${e.message}`);
}

// Barra final
try {
  const { status, location } = await head(`${BASE}/financas/`);
  if (status === 301 && location?.replace(/\/$/, "") === `${BASE}/financas`) {
    ok.push(`/financas/ → /financas (301)`);
  } else {
    erros.push(`/financas/: esperado 301 para ${BASE}/financas, recebeu ${status} ${location || ""}`);
  }
} catch (e) {
  erros.push(`/financas/: falha na requisição — ${e.message}`);
}

// Arquivos de SEO
for (const p of ["/robots.txt", "/sitemap.xml", "/sitemap-images.xml"]) {
  try {
    const { status } = await head(`${BASE}${p}`);
    if (status === 200) ok.push(`${p} responde 200`);
    else erros.push(`${p}: esperado 200, recebeu ${status}`);
  } catch (e) {
    erros.push(`${p}: falha na requisição — ${e.message}`);
  }
}

for (const o of ok) console.log(`✅ ${o}`);
if (erros.length) {
  console.error(`\n❌ ${erros.length} problema(s):`);
  for (const e of erros) console.error(`  • ${e}`);
  process.exit(1);
}
console.log("\n✅ HTTPS, www→raiz e HSTS validados em produção.");
