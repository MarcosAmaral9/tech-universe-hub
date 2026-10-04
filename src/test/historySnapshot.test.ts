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
  });

  it("só publica o snapshot quando todos os 24 ativos estão completos", () => {
    expect(api).toContain("'b3' => VC_BACKFILL_B3");
    expect(api).toContain("'crypto' => array_keys(VC_BACKFILL_CRYPTO)");
    expect(api).toContain("'currency' => array_values(VC_BACKFILL_CURRENCIES)");
    expect(api).toContain("'metal' => ['XAU', 'XAG']");
    expect(api).toContain("if (!$asset['complete']) return null;");
  });
});