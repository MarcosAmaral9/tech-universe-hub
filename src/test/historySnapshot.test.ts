import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const page = readFileSync("src/pages/HistoricoCotacoesPage.tsx", "utf8");
const api = readFileSync("public/api.php", "utf8");

describe("histórico público pré-calculado", () => {
  it("faz uma única leitura agregada e não consulta ativos individualmente", () => {
    expect(page.match(/fetch\(/g)).toHaveLength(1);
    expect(page).toContain('/api.php?action=history_snapshot');
    expect(page).not.toContain('/api.php?action=history&type=');
  });

  it("não inicia preenchimento durante uma leitura pública", () => {
    const publicHistory = api.slice(
      api.indexOf("if ($method === 'GET' && $action === 'history')"),
      api.indexOf("// ─── GET: endpoint unificado"),
    );
    expect(publicHistory).not.toContain("runBackfillStep(");
    expect(publicHistory).toContain("'backfilling' => false");
    const publicMarketCache = api.slice(
      api.indexOf("if ($method === 'GET' && $action === 'all')"),
      api.indexOf("// ─── GET: histórico múltiplo"),
    );
    expect(publicMarketCache).not.toContain("httpGet(");
  });

  it("só publica o snapshot quando todos os 24 ativos estão completos", () => {
    expect(api).toContain("'b3' => VC_BACKFILL_B3");
    expect(api).toContain("'crypto' => array_keys(VC_BACKFILL_CRYPTO)");
    expect(api).toContain("'currency' => array_values(VC_BACKFILL_CURRENCIES)");
    expect(api).toContain("'metal' => ['XAU', 'XAG']");
    expect(api).toContain("if (!$asset['complete']) return null;");
  });
});
describe("histórico de 1 ano via token do servidor", () => {
  it("usa a brapi com 1 ano e token do servidor como fonte principal da B3", () => {
    const b3 = api.slice(api.indexOf("function backfillB3("), api.indexOf("// Fallback gratuito"));
    expect(b3).toContain("range=1y&interval=1d");
    expect(b3).toContain("$GLOBALS['BRAPI_TOKEN']");
    expect(b3.indexOf("brapi.dev")).toBeLessThan(b3.indexOf("alphavantage"));
  });
  it("busca até ~240 pregões na B3 e 360 dias nos demais", () => {
    expect(api).toContain("const VC_TARGET_B3_POINTS = 240;");
    expect(api).toContain("const VC_TARGET_DAILY_POINTS = 360;");
  });
  it("status do progresso exige o segredo do cron", () => {
    const s = api.slice(api.indexOf("$action === 'history_status'"));
    expect(s.slice(0, 200)).toContain("requireCronSecret();");
  });
});
