import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Zap, AlertTriangle, CheckCircle2, ExternalLink, Trash2, Plus } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import sairDividasImg from "@/assets/sair-dividas-2026.webp";

interface Debt {
  id: number;
  name: string;
  total: number;
  monthlyRate: number;
}

// Debt Planner
const DebtPlanner = () => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: 1, name: "Cartão de crédito", total: 3500, monthlyRate: 12 },
    { id: 2, name: "Crédito pessoal", total: 8000, monthlyRate: 3.5 },
  ]);
  const [strategy, setStrategy] = useState<"avalanche" | "snowball">("avalanche");

  const addDebt = () => setDebts([...debts, { id: Date.now(), name: "Nova dívida", total: 1000, monthlyRate: 2 }]);
  const removeDebt = (id: number) => setDebts(debts.filter(d => d.id !== id));
  const updateDebt = (id: number, field: keyof Debt, value: string | number) => {
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const sortedDebts = useMemo(() => {
    const sorted = [...debts];
    if (strategy === "avalanche") sorted.sort((a, b) => b.monthlyRate - a.monthlyRate);
    else sorted.sort((a, b) => a.total - b.total);
    return sorted;
  }, [debts, strategy]);

  const totalDebt = debts.reduce((sum, d) => sum + d.total, 0);


  useEffect(() => {
    trackArticleRead("sair-das-dividas-2026-plano-acao", "Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona", "invest");
  }, []);
  const goBack = useSmartBack("/financas");
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Planilha Interativa de Dívidas
      </h3>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setStrategy("avalanche")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${strategy === "avalanche" ? "bg-[hsl(var(--invest-color))] text-background" : "bg-muted text-muted-foreground"}`}>
          Avalanche (maior juros primeiro)
        </button>
        <button onClick={() => setStrategy("snowball")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${strategy === "snowball" ? "bg-[hsl(var(--invest-color))] text-background" : "bg-muted text-muted-foreground"}`}>
          Bola de Neve (menor valor primeiro)
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {debts.map((debt) => (
          <div key={debt.id} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center">
            <input value={debt.name} onChange={e => updateDebt(debt.id, "name", e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 text-sm" />
            <div className="text-center">
              <label className="text-xs text-muted-foreground block">Valor</label>
              <input type="number" value={debt.total} onChange={e => updateDebt(debt.id, "total", Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-2 py-2 text-sm w-24 text-center" />
            </div>
            <div className="text-center">
              <label className="text-xs text-muted-foreground block">Juros/mês</label>
              <input type="number" value={debt.monthlyRate} step={0.5} onChange={e => updateDebt(debt.id, "monthlyRate", Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-2 py-2 text-sm w-20 text-center" />
            </div>
            <button onClick={() => removeDebt(debt.id)} className="text-destructive hover:text-destructive/80 p-2">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <button onClick={addDebt} className="flex items-center gap-2 text-sm text-[hsl(var(--invest-color))] hover:underline mb-4">
        <Plus className="h-4 w-4" /> Adicionar dívida
      </button>

      {/* Thermometer */}
      <div className="bg-background rounded-xl p-4 mb-4">
        <p className="text-sm text-muted-foreground mb-2">Total de dívidas: <strong className="text-foreground">R$ {totalDebt.toLocaleString("pt-BR")}</strong></p>
        <h4 className="text-sm font-bold mb-2">Ordem de ataque ({strategy === "avalanche" ? "Avalanche" : "Bola de Neve"}):</h4>
        {sortedDebts.map((d, i) => {
          const color = d.monthlyRate > 5 ? "hsl(0,80%,55%)" : d.monthlyRate > 2 ? "hsl(45,100%,50%)" : "hsl(var(--invest-color))";
          return (
            <div key={d.id} className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2" style={{ borderColor: color, color }}>{i + 1}</span>
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span>{d.name}</span>
                  <span style={{ color }}>R$ {d.total.toLocaleString("pt-BR")} ({d.monthlyRate}%/mês)</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full mt-1">
                  <div className="h-full rounded-full" style={{ width: `${Math.min((d.monthlyRate / 15) * 100, 100)}%`, backgroundColor: color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Negotiation Calculator
const NegotiationCalc = () => {
  const [debtValue, setDebtValue] = useState(5000);
  const [discount, setDiscount] = useState(40);
  const savings = debtValue * (discount / 100);
  const finalValue = debtValue - savings;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4">💰 Calculadora de Negociação</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-muted-foreground">Valor da dívida: <strong className="text-foreground">R$ {debtValue.toLocaleString("pt-BR")}</strong></label>
          <input type="range" min={500} max={50000} step={500} value={debtValue} onChange={e => setDebtValue(Number(e.target.value))} className="w-full mt-2" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Desconto negociado: <strong className="text-foreground">{discount}%</strong></label>
          <input type="range" min={10} max={95} step={5} value={discount} onChange={e => setDiscount(Number(e.target.value))} className="w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[hsl(var(--invest-color))]/10 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground">Você economiza</p>
          <p className="text-2xl font-bold text-[hsl(var(--invest-color))]">R$ {savings.toLocaleString("pt-BR")}</p>
        </div>
        <div className="bg-background rounded-xl p-4 text-center border border-border">
          <p className="text-xs text-muted-foreground">Valor final a pagar</p>
          <p className="text-2xl font-bold">R$ {finalValue.toLocaleString("pt-BR")}</p>
        </div>
      </div>
    </div>
  );
};

const SairDasDividas2026 = () => {

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Sair das Dívidas</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Endividado e sem ver saída? Este plano de ação passo a passo foi criado para a realidade brasileira de 2026, com estratégias para quitar dívidas mesmo com juros altíssimos.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 23 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img fetchpriority="high" src={sairDividasImg} alt="Sair das Dívidas 2026" className="w-full aspect-video object-cover" loading="eager" />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            O Brasil tem mais de <strong>70 milhões de pessoas endividadas</strong>. O rotativo do cartão cobra mais de 400% ao ano. O cheque especial passa de 150%. Mas tem solução — e ela não exige renda alta, diploma ou sorte. <strong>Exige método.</strong>
          </p>
        </div>

        {/* Step 1: Face Reality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Passo 1: Encare a Realidade</h2>
          <p className="text-muted-foreground mb-4 text-sm">Liste TODAS as suas dívidas. Muita gente evita esse momento porque é doloroso. Mas você não pode resolver o que não enxerga.</p>
        </section>

        {/* Step 2: Classify */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Passo 2: Classifique Por Urgência</h2>
          <div className="space-y-3">
            {[
              { level: "🔴 Vermelhas", desc: "Juros acima de 5%/mês", examples: "Cartão rotativo, cheque especial", color: "hsl(0,80%,55%)" },
              { level: "🟡 Amarelas", desc: "Juros de 2-5%/mês", examples: "Crédito pessoal, carnê de loja", color: "hsl(45,100%,50%)" },
              { level: "🟢 Verdes", desc: "Juros abaixo de 2%/mês", examples: "Financiamento imobiliário, FIES", color: "hsl(var(--invest-color))" },
            ].map((item, i) => (
              <div key={i} className="border-2 rounded-xl p-4" style={{ borderColor: item.color + "40" }}>
                <h3 className="font-bold mb-1" style={{ color: item.color }}>{item.level}</h3>
                <p className="text-sm text-muted-foreground">{item.desc} — <em>{item.examples}</em></p>
              </div>
            ))}
          </div>
        </section>

        {/* Debt Planner */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Passo 3: Monte Seu Plano de Ataque</h2>
          <DebtPlanner />
        </section>

        {/* Step 4: Negotiate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Passo 4: Negocie</h2>
          <p className="text-muted-foreground mb-4 text-sm">Bancos preferem receber algo do que perder tudo. Nunca aceite a primeira proposta.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <a href="https://www.serasa.com.br/limpa-nome-online/" target="_blank" rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3">
              <span className="text-2xl">🔗</span>
              <div>
                <h4 className="font-bold text-sm">Serasa Limpa Nome</h4>
                <p className="text-xs text-muted-foreground">Descontos de até 95%</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>
            <a href="https://www.acordocerto.com.br" target="_blank" rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3">
              <span className="text-2xl">🔗</span>
              <div>
                <h4 className="font-bold text-sm">Acordo Certo</h4>
                <p className="text-xs text-muted-foreground">Negociação com bancos</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
            </a>
          </div>
          <NegotiationCalc />
        </section>

        {/* Step 5: Increase income */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Passo 5: Aumente a Renda Temporariamente</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: "📦", text: "Venda itens que não usa (Mercado Livre, OLX)" },
              { icon: "💻", text: "Freela nos fins de semana" },
              { icon: "⏰", text: "Horas extras na empresa" },
              { icon: "🏠", text: "Alugue quarto vago ou vaga de garagem" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Trap */}
        <section className="mb-10">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              A Armadilha do "Consolidar Dívidas"
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Só funciona SE: a nova taxa for significativamente menor, você não der bens como garantia, e fechar as linhas de crédito antigas depois.</p>
          </div>
        </section>

        {/* After debts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Depois das Dívidas: Como Não Voltar</h2>
          <div className="space-y-3">
            {[
              "Delete a fatura de crédito do limite — use débito por 6 meses",
              "Monte reserva de emergência antes de qualquer investimento",
              "Entenda o que te levou a se endividar (psicologia, não falta de informação)",
              "Nunca compre parcelado o que não teria dinheiro para comprar à vista",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Liste todas as dívidas e classifique por urgência (juros)",
                "Use Avalanche para dívidas caras e Bola de Neve para motivação",
                "Negocie — bancos preferem receber algo do que perder tudo",
                "Aumente a renda temporariamente para acelerar a quitação",
                "Depois de quitar, monte reserva de emergência antes de investir",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {["sair das dívidas", "quitar dívidas", "negociação", "planejamento financeiro", "finanças pessoais"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Finanças
      </button>

        <RelatedPosts currentSlug="sair-das-dividas-2026-plano-acao" />
        <CommentSection postId="32" />
      </article>
    </>
  );
};

export default SairDasDividas2026;
