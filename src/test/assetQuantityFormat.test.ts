import { describe, it, expect } from "vitest";
import { fmtQty, QTY_PLURALS } from "@/pages/posts/CalculadorasFinanceiras";

// Regra pedida pelo Marcos: cripto e câmbio usam "unidade"/"unidades",
// com vírgula para frações e ponto a cada milhar (padrão pt-BR).
describe("fmtQty — unidades de cripto e câmbio", () => {
  it("usa singular com vírgula em frações", () => {
    expect(fmtQty(0.5333, "unidade")).toBe("0,53 unidade");
    expect(fmtQty(0.0025, "unidade")).toBe("0,0025 unidade");
  });

  it("usa plural com ponto de milhar em valores grandes", () => {
    expect(fmtQty(17182.13, "unidade")).toBe("17.182,13 unidades");
    expect(fmtQty(153000, "unidade")).toBe("153.000,00 unidades");
  });

  it("mantém o mesmo tratamento para ações", () => {
    expect(fmtQty(0.5333, "ação")).toBe("0,53 ação");
    expect(fmtQty(17182.13, "ação")).toBe("17.182,13 ações");
  });

  it("não inventa plural no singular nem metáfora de unidade", () => {
    expect(QTY_PLURALS["unidade"]).toBe("unidades");
    expect(fmtQty(1, "unidade")).toBe("1,00 unidade");
    expect(fmtQty(2.5, "g")).toBe("2,50 g");
  });
});
