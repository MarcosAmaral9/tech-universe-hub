/**
 * FinanceComparator — comparador interativo de investimentos
 * Embutido nos artigos de finanças para aumentar tempo de sessão
 * Modos: Renda Fixa (CDB vs Tesouro vs Poupança) | ETFs vs FIIs
 */
import { useState, useMemo } from "react";
import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";

type Mode = "renda-fixa" | "etfs";

interface FixedInput {
  valor: number;
  prazo: number;  // meses
  cdi: number;    // % ao ano
  selic: number;  // % ao ano
  ipca: number;   // % ao ano
}

const fmt = (v: number, decimais = 2) =>
  v.toLocaleString("pt-BR", { minimumFractionDigits: decimais, maximumFractionDigits: decimais });

const calcRendimento = (pct: number, meses: number, valor: number) => {
  const mensal = Math.pow(1 + pct / 100, 1 / 12) - 1;
  return valor * Math.pow(1 + mensal, meses);
};

const IR_TABELA = (meses: number) => {
  if (meses <= 6) return 0.225;
  if (meses <= 12) return 0.20;
  if (meses <= 24) return 0.175;
  return 0.15;
};

const RendaFixaComparador = () => {
  const [inp, setInp] = useState<FixedInput>({
    valor: 10000, prazo: 24, cdi: 11.15, selic: 10.75, ipca: 4.5,
  });

  const set = (k: keyof FixedInput) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInp(prev => ({ ...prev, [k]: parseFloat(e.target.value) || 0 }));

  const results = useMemo(() => {
    const { valor, prazo, cdi, selic, ipca } = inp;
    const ir = IR_TABELA(prazo);

    // CDB 100% CDI
    const cdbBruto = calcRendimento(cdi, prazo, valor);
    const cdbLiquido = valor + (cdbBruto - valor) * (1 - ir);

    // Tesouro Selic (sem IOF após 30 dias, IR regressivo)
    const selicBruto = calcRendimento(selic, prazo, valor);
    const selicLiquido = valor + (selicBruto - valor) * (1 - ir);

    // Tesouro IPCA+ 5.5%
    const ipca5Bruto = calcRendimento(ipca + 5.5, prazo, valor);
    const ipca5Liquido = valor + (ipca5Bruto - valor) * (1 - ir);

    // Poupança (70% Selic quando Selic > 8.5%)
    const poupancaTaxa = selic > 8.5 ? selic * 0.7 : 0.5 * 12;
    const poupancaLiquido = calcRendimento(poupancaTaxa, prazo, valor);

    return [
      { nome: `CDB 100% CDI`, liquido: cdbLiquido, bruto: cdbBruto, cor: "bg-blue-500" },
      { nome: `Tesouro Selic`, liquido: selicLiquido, bruto: selicBruto, cor: "bg-green-500" },
      { nome: `IPCA+ 5,5%`, liquido: ipca5Liquido, bruto: ipca5Bruto, cor: "bg-purple-500" },
      { nome: `Poupança`, liquido: poupancaLiquido, bruto: poupancaLiquido, cor: "bg-yellow-500" },
    ].sort((a, b) => b.liquido - a.liquido);
  }, [inp]);

  const melhor = results[0];
  const maxLiquido = Math.max(...results.map(r => r.liquido));

  return (
    <div className="space-y-5">
      {/* Inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {([
          { key: "valor",  label: "Valor investido (R$)", min: 100,  step: 1000 },
          { key: "prazo",  label: "Prazo (meses)",        min: 1,    step: 1    },
          { key: "cdi",    label: "CDI / ano (%)",        min: 0.1,  step: 0.25 },
          { key: "selic",  label: "Selic / ano (%)",      min: 0.1,  step: 0.25 },
          { key: "ipca",   label: "IPCA / ano (%)",       min: 0.1,  step: 0.25 },
        ] as const).map(({ key, label, min, step }) => (
          <div key={key} className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{label}</label>
            <input type="number" min={min} step={step}
              value={inp[key as keyof FixedInput]}
              onChange={set(key as keyof FixedInput)}
              className="w-full px-2.5 py-1.5 text-sm rounded-lg bg-input border border-border focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
        ))}
      </div>

      {/* IR info */}
      <p className="text-xs text-muted-foreground">
        IR aplicado: <strong>{(IR_TABELA(inp.prazo) * 100).toFixed(1)}%</strong> ({inp.prazo <= 6 ? "≤6m" : inp.prazo <= 12 ? "7–12m" : inp.prazo <= 24 ? "13–24m" : ">24m"}) — Poupança isenta.
      </p>

      {/* Results */}
      <div className="space-y-3">
        {results.map((r, i) => (
          <div key={r.nome} className={`rounded-xl p-4 border ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {i === 0 && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold">Melhor</span>}
                <span className="font-semibold text-sm">{r.nome}</span>
              </div>
              <span className="font-bold text-base">R$ {fmt(r.liquido)}</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className={`h-full ${r.cor} rounded-full transition-all`}
                style={{ width: `${(r.liquido / maxLiquido) * 100}%` }} />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Rendimento líquido: <strong className="text-foreground">+R$ {fmt(r.liquido - inp.valor)}</strong></span>
              <span>+{fmt((r.liquido / inp.valor - 1) * 100, 2)}%</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground">
        ⚠️ Simulação educacional. Taxas reais variam. Consulte um assessor de investimentos.
      </p>
    </div>
  );
};

const FinanceComparator = ({ mode = "renda-fixa" }: { mode?: Mode }) => (
  <div className="not-prose my-8 rounded-2xl border border-primary/20 bg-card p-5 sm:p-6 shadow-sm">
    <div className="flex items-center gap-2 mb-5">
      <div className="p-2 rounded-xl bg-primary/10">
        <TrendingUp className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-base">Comparador de Investimentos</h3>
        <p className="text-xs text-muted-foreground">Simule e compare rendimentos em tempo real</p>
      </div>
    </div>
    {mode === "renda-fixa" && <RendaFixaComparador />}
  </div>
);

export default FinanceComparator;
export { RendaFixaComparador };
