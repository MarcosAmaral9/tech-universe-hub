import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, ChevronRight, Zap,
  AlertTriangle, CheckCircle2, ExternalLink, Trash2, Plus,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import sairDividasImg from "@/assets/sair-dividas-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

interface Debt {
  id: number;
  name: string;
  total: number;
  monthlyRate: number;
}

/* ── Debt Planner ────────────────────────────────────────────── */
const DebtPlanner = () => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: 1, name: "Cartão de crédito",  total: 3500, monthlyRate: 12  },
    { id: 2, name: "Crédito pessoal",    total: 8000, monthlyRate: 3.5 },
  ]);
  const [strategy, setStrategy] = useState<"avalanche" | "snowball">("avalanche");

  const addDebt    = () => setDebts([...debts, { id: Date.now(), name: "Nova dívida", total: 1000, monthlyRate: 2 }]);
  const removeDebt = (id: number) => setDebts(debts.filter(d => d.id !== id));
  const updateDebt = (id: number, field: keyof Debt, value: string | number) =>
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: value } : d));

  const sortedDebts = useMemo(() => {
    const sorted = [...debts];
    if (strategy === "avalanche") sorted.sort((a, b) => b.monthlyRate - a.monthlyRate);
    else sorted.sort((a, b) => a.total - b.total);
    return sorted;
  }, [debts, strategy]);

  const totalDebt = debts.reduce((sum, d) => sum + d.total, 0);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Planilha Interativa de Dívidas
      </h3>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setStrategy("avalanche")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${strategy === "avalanche" ? "bg-[hsl(var(--invest-color))] text-background" : "bg-muted text-muted-foreground"}`}
        >
          Avalanche (maior juros primeiro)
        </button>
        <button
          onClick={() => setStrategy("snowball")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${strategy === "snowball" ? "bg-[hsl(var(--invest-color))] text-background" : "bg-muted text-muted-foreground"}`}
        >
          Bola de Neve (menor valor primeiro)
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {debts.map(debt => (
          <div key={debt.id} className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center">
            <input
              value={debt.name}
              onChange={e => updateDebt(debt.id, "name", e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 text-sm"
            />
            <div className="text-center">
              <label className="text-xs text-muted-foreground block">Valor (R$)</label>
              <input
                type="number"
                value={debt.total}
                onChange={e => updateDebt(debt.id, "total", Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-2 py-2 text-sm w-24 text-center"
              />
            </div>
            <div className="text-center">
              <label className="text-xs text-muted-foreground block">Juros/mês %</label>
              <input
                type="number"
                value={debt.monthlyRate}
                step={0.5}
                onChange={e => updateDebt(debt.id, "monthlyRate", Number(e.target.value))}
                className="bg-background border border-border rounded-lg px-2 py-2 text-sm w-20 text-center"
              />
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

      <div className="bg-background rounded-xl p-4">
        <p className="text-sm text-muted-foreground mb-3">
          Total de dívidas:{" "}
          <strong className="text-foreground">R$ {totalDebt.toLocaleString("pt-BR")}</strong>
        </p>
        <h4 className="text-sm font-bold mb-3">
          Ordem de ataque ({strategy === "avalanche" ? "Avalanche — maior juro primeiro" : "Bola de Neve — menor valor primeiro"}):
        </h4>
        {sortedDebts.map((d, i) => {
          const color = d.monthlyRate > 5
            ? "hsl(0,80%,55%)"
            : d.monthlyRate > 2
              ? "hsl(45,100%,50%)"
              : "hsl(var(--invest-color))";
          return (
            <div key={d.id} className="flex items-center gap-3 mb-3">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 shrink-0"
                style={{ borderColor: color, color }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>{d.name}</span>
                  <span style={{ color }}>
                    R$ {d.total.toLocaleString("pt-BR")} ({d.monthlyRate}%/mês)
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${Math.min((d.monthlyRate / 15) * 100, 100)}%`, backgroundColor: color }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Negotiation Calculator ──────────────────────────────────── */
const NegotiationCalc = () => {
  const [debtValue, setDebtValue] = useState(5000);
  const [discount, setDiscount] = useState(40);
  const savings    = debtValue * (discount / 100);
  const finalValue = debtValue - savings;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4">💰 Calculadora de Negociação</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-muted-foreground">
            Valor da dívida:{" "}
            <strong className="text-foreground">R$ {debtValue.toLocaleString("pt-BR")}</strong>
          </label>
          <input
            type="range" min={500} max={50000} step={500}
            value={debtValue} onChange={e => setDebtValue(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">
            Desconto negociado: <strong className="text-foreground">{discount}%</strong>
          </label>
          <input
            type="range" min={10} max={95} step={5}
            value={discount} onChange={e => setDiscount(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[hsl(var(--invest-color))]/10 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground">Você economiza</p>
          <p className="text-2xl font-bold text-[hsl(var(--invest-color))]">
            R$ {savings.toLocaleString("pt-BR")}
          </p>
        </div>
        <div className="bg-background rounded-xl p-4 text-center border border-border">
          <p className="text-xs text-muted-foreground">Valor final a pagar</p>
          <p className="text-2xl font-bold">R$ {finalValue.toLocaleString("pt-BR")}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Descontos reais variam. No Serasa Limpa Nome, as ofertas chegam a 95% de desconto
        para dívidas antigas. Sempre compare antes de aceitar a primeira proposta.
      </p>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────── */
const SairDasDividas2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "sair-das-dividas-2026-plano-acao",
      "Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona",
      "invest"
    );
  }, []);

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              Dívidas · Planejamento Financeiro · Negociação
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Com <strong>73 milhões de brasileiros endividados</strong> e o rotativo do
            cartão cobrando mais de 400% ao ano, sair das dívidas em 2026 exige método —
            não renda alta nem sorte. Este plano de ação passo a passo traz as estratégias
            Avalanche e Bola de Neve, como negociar via Serasa e Desenrola Brasil, e como
            não voltar a se endividar.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 23 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min de leitura</span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            fetchpriority="high"
            src={sairDividasImg}
            alt="Sair das Dívidas em 2026 — plano de ação método avalanche bola de neve"
            className="w-full aspect-video object-cover"
            loading="eager"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            O Brasil tem mais de <strong>73 milhões de pessoas endividadas</strong>, segundo
            o Mapa da Inadimplência da Serasa Experian (maio/2026). O rotativo do cartão
            cobra mais de <strong>400% ao ano</strong>. O cheque especial tem teto de 8%
            ao mês. Mas tem solução — e ela não exige renda alta, diploma ou sorte.{" "}
            <strong>Exige método.</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O primeiro passo — e o mais difícil — é encarar a realidade. Muita gente sabe
            que tem dívidas mas evita colocar no papel porque é doloroso. O problema é que
            sem diagnóstico preciso, qualquer plano vai falhar. Você não pode resolver o
            que não consegue ver.
          </p>
        </div>

        {/* Passo 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 1: Encare a Realidade — Liste TUDO
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Reserve 30 minutos, abra extrato bancário, fatura do cartão, boletos e contratos.
            Liste cada dívida com: credor, valor total, taxa de juros mensal, parcelas
            restantes e se você está negativado. Sem essa visão completa, qualquer esforço
            é gasto às cegas.
          </p>
          <div className="bg-card border border-border rounded-xl p-4 text-sm">
            <p className="font-bold mb-2">📋 O que você precisa levantar:</p>
            <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
              {[
                "Nome do credor (banco, loja, operadora)",
                "Valor total da dívida hoje",
                "Taxa de juros mensal ou anual",
                "Parcelas restantes (se parcelado)",
                "Se está negativado no Serasa/SPC",
                "Se há garantias envolvidas (imóvel, veículo)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[hsl(var(--invest-color))]">▶</span> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Passo 2 */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 2: Classifique Por Urgência — O Termômetro das Dívidas
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Não trate todas as dívidas com a mesma urgência. Juros compostos altos destroem
            qualquer tentativa de quitação se não forem atacados primeiro:
          </p>
          <div className="space-y-3">
            {[
              {
                level: "🔴 Vermelhas — EMERGÊNCIA",
                desc: "Juros acima de 5%/mês (60%+ ao ano)",
                examples: "Cartão rotativo (~400% a.a.), cheque especial (~96% a.a.), agiotas",
                action: "Negocie e quite PRIMEIRO. Cada mês que passa, o saldo dobra em menos de 2 anos.",
                color: "hsl(0,80%,55%)",
              },
              {
                level: "🟡 Amarelas — ATENÇÃO",
                desc: "Juros de 2–5%/mês (24–60% ao ano)",
                examples: "Crédito pessoal sem garantia, carnê de loja, financiamento de eletrodoméstico",
                action: "Ataque depois das vermelhas. Podem ser renegociadas com portabilidade de crédito.",
                color: "hsl(45,100%,50%)",
              },
              {
                level: "🟢 Verdes — GERENCIÁVEIS",
                desc: "Juros abaixo de 2%/mês (menos de 24% ao ano)",
                examples: "Financiamento imobiliário, FIES, consignado público, crédito com garantia",
                action: "Continue pagando normalmente. Não vale sacrificar outras coisas para antecipar.",
                color: "hsl(var(--invest-color))",
              },
            ].map((item, i) => (
              <div key={i} className="border-2 rounded-xl p-5" style={{ borderColor: item.color + "40" }}>
                <h3 className="font-bold mb-1 text-sm" style={{ color: item.color }}>{item.level}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Taxa:</strong> {item.desc} — <em>{item.examples}</em>
                </p>
                <p className="text-xs text-muted-foreground italic">{item.action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Passo 3 — Debt Planner */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 3: Monte Seu Plano de Ataque
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Existem dois métodos comprovados. O <strong>Avalanche</strong> paga menos juros
            no total — ataca a dívida mais cara primeiro. A <strong>Bola de Neve</strong>
            gera mais motivação — quite as menores primeiro para ver progresso rápido. Use
            a planilha interativa abaixo:
          </p>
          <DebtPlanner />
        </section>

        {/* Passo 4 — Negociação */}
        <section className="mb-10">
          <AdRectangle className="my-8" />
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 4: Negocie — Bancos Preferem Receber Algo
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Uma dívida antiga para o banco é uma perda contábil inevitável. Por isso bancos
            e credores aceitam descontos significativos na negociação — especialmente para
            quem oferece pagamento à vista. Nunca aceite a primeira proposta.
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 mb-6">
            <a
              href="https://www.serasa.com.br/limpa-nome-online/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3"
            >
              <span className="text-2xl">🔗</span>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Serasa Limpa Nome</h4>
                <p className="text-xs text-muted-foreground">Descontos de até 95% — dívidas antigas</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
            </a>
            <a
              href="https://www.gov.br/fazenda/pt-br/assuntos/desenrola"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3"
            >
              <span className="text-2xl">🔗</span>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Desenrola Brasil</h4>
                <p className="text-xs text-muted-foreground">Programa oficial do governo — até 3 salários mínimos</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
            </a>
            <a
              href="https://www.acordocerto.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3"
            >
              <span className="text-2xl">🔗</span>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Acordo Certo</h4>
                <p className="text-xs text-muted-foreground">Negociação digital com múltiplos bancos</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
            </a>
            <a
              href="https://www.consumidor.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-[hsl(var(--invest-color))]/50 transition-all flex items-center gap-3"
            >
              <span className="text-2xl">🔗</span>
              <div className="flex-1">
                <h4 className="font-bold text-sm">Consumidor.gov.br</h4>
                <p className="text-xs text-muted-foreground">Reclamações e mediação com empresas</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
            </a>
          </div>

          <NegotiationCalc />

          <AdInArticle />

          {/* Dicas de negociação */}
          <div className="space-y-3 mt-6">
            <h3 className="font-bold text-base">📞 Como negociar na ligação:</h3>
            {[
              "Diga que vai pagar à vista se tiver desconto — credores dão desconto muito maior para pagamento imediato do que parcelado",
              "Não aceite a primeira proposta: diga 'preciso pensar' e peça 24h. Muitas vezes a segunda proposta é melhor",
              "Grave ou anote o nome do atendente, data e proposta feita — exija confirmação por escrito antes de pagar",
              "Portabilidade de crédito é direito: você pode transferir dívida de um banco para outro que ofereça taxa menor — sem custo",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-3">
                <span className="text-[hsl(var(--invest-color))] font-bold shrink-0">{i + 1}.</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Passo 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 5: Aumente a Renda Temporariamente
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Cortar gastos tem limite — mas aumentar a renda temporariamente pode acelerar
            drasticamente o plano de quitação. Foque em atividades com retorno imediato:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: "📦", text: "Venda itens que não usa — Mercado Livre, OLX, enjoei. Uma faxina da casa pode render R$ 500–2.000" },
              { icon: "💻", text: "Freela nos fins de semana — design, redação, programação, tradução, edição de vídeo" },
              { icon: "⏰", text: "Horas extras na empresa ou consultorias na área de expertise" },
              { icon: "🏠", text: "Alugue quarto vago, vaga de garagem ou equipamentos parados" },
              { icon: "🛵", text: "Apps de entrega por algumas semanas — renda imediata sem investimento inicial" },
              { icon: "📚", text: "Dê aulas particulares do que você sabe — idioma, instrumento, matéria escolar" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Armadilha da consolidação */}
        <section className="mb-10">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              A Armadilha do "Consolidar Dívidas"
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Consolidar dívidas (pegar um empréstimo para pagar outros) <strong>só funciona</strong> se
              três condições forem atendidas simultaneamente:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> A taxa do novo empréstimo for significativamente menor que as dívidas consolidadas</li>
              <li className="flex gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> Você não der bens (imóvel, veículo) como garantia — risco de perder patrimônio</li>
              <li className="flex gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> Você cancelar as linhas de crédito antigas depois — senão vai acumular as duas dívidas</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Crédito consignado (desconto em folha) para quem tem esse acesso pode ser uma boa opção — taxas entre 1,5–2% ao mês contra 12–15% do rotativo.
            </p>
          </div>
        </section>

        {/* Depois das dívidas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Depois das Dívidas: Como Não Voltar Para o Ciclo
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Quitar dívidas é 50% do trabalho. A outra metade é não voltar a se endividar.
            O endividamento raramente é só falta de informação — quase sempre tem um
            componente comportamental e emocional:
          </p>
          <div className="space-y-3">
            {[
              "Bloqueie o limite do cartão ou use débito por 3–6 meses — elimine a tentação antes de ter disciplina",
              "Monte uma reserva de emergência mínima de R$ 1.000–3.000 antes de qualquer outro investimento",
              "Entenda o que te levou a se endividar — compras emocionais, pressão social, falta de planejamento",
              "Nunca compre parcelado o que não poderia comprar à vista — parcelas são dívidas disfarcadas",
              "Use a regra das 24 horas: qualquer compra acima de R$ 200 fora do planejamento, espere 24h",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Resumo */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo: Os 5 Passos</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Liste todas as dívidas com credor, valor, taxa e status de negativação",
                "Classifique por cor: vermelho (>5%/mês) → amarelo (2–5%) → verde (<2%)",
                "Use Avalanche (menor custo total) ou Bola de Neve (mais motivação)",
                "Negocie — Serasa, Desenrola Brasil, Acordo Certo, direto com o banco",
                "Aumente a renda temporariamente e não volte ao ciclo com reserva e hábitos novos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[hsl(var(--invest-color))] font-bold shrink-0">{i + 1}.</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Como Negociar Dívidas Antigas: Um Roteiro Prático</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Dívidas com mais de 5 anos costumam ter o maior potencial de desconto na
              negociação, já que muitas vezes já foram baixadas como prejuízo contábil
              pelo credor — significando que qualquer valor recebido, mesmo que pequeno,
              representa lucro líquido para a instituição. Antes de ligar, pesquise o
              valor atualizado da dívida em plataformas como Serasa Limpa Nome, que
              costumam mostrar ofertas de desconto já pré-aprovadas sem necessidade de
              negociação direta.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Ao negociar diretamente com o banco ou financeira, tenha em mãos o valor
              total que você pode pagar à vista — propostas de pagamento integral
              costumam receber descontos significativamente maiores do que propostas
              parceladas. Peça sempre a confirmação por escrito (e-mail ou contrato) antes
              de efetuar qualquer pagamento, e guarde o comprovante de quitação por pelo
              menos 5 anos após a negociação, mesmo depois que a dívida sumir do extrato
              dos birôs de crédito.
            </p>
            <p className="text-sm text-muted-foreground">
              Um erro comum é aceitar a primeira oferta sem questionar. Centrais de
              atendimento costumam ter margem para melhorar a proposta inicial — pedir
              para "pensar" e ligar novamente em outro dia, ou até falar com um atendente
              diferente, frequentemente resulta em condições mais vantajosas do que a
              primeira oferta apresentada.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            O Impacto Psicológico do Endividamento (E Como Lidar Com Ele)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Estar endividado tem um custo que vai além do financeiro: estudos de
            comportamento financeiro associam dívidas crônicas a níveis elevados de
            estresse, ansiedade e até problemas de sono. Reconhecer esse impacto
            emocional, em vez de tratá-lo como fraqueza pessoal, é parte importante do
            processo de recuperação financeira — culpa e vergonha excessivas tendem a
            paralisar a ação, exatamente o oposto do que é necessário para sair do
            ciclo de endividamento.
          </p>
          <p className="text-sm text-muted-foreground">
            Buscar apoio, seja de familiares, amigos de confiança ou até grupos de apoio
            especializados em educação financeira, pode aliviar parte desse peso
            emocional e tornar o processo de quitação mais sustentável. Celebrar pequenas
            vitórias ao longo do caminho — a primeira dívida quitada, o primeiro mês sem
            usar o limite do cartão — ajuda a manter a motivação durante um processo que,
            para a maioria das pessoas, leva de 12 a 36 meses para ser concluído por
            completo.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Vale lembrar que sair das dívidas não é apenas uma questão de força de
            vontade individual — fatores estruturais como juros abusivos do rotativo,
            práticas agressivas de oferta de crédito por parte de instituições financeiras
            e a falta de educação financeira no currículo escolar brasileiro também
            contribuem para o problema em escala nacional. Reconhecer esses fatores
            sistêmicos não isenta a responsabilidade individual sobre o próprio
            orçamento, mas ajuda a entender que o endividamento generalizado da
            população brasileira não é simplesmente uma questão de falta de disciplina
            pessoal de milhões de pessoas — é também resultado de um ambiente financeiro
            que, historicamente, facilitou o acesso a crédito caro sem oferecer educação
            equivalente sobre como usá-lo de forma sustentável.
          </p>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {["sair das dívidas", "quitar dívidas", "método avalanche", "bola de neve", "Serasa", "Desenrola Brasil", "negociação bancária"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation category="invest" />

        <EditorialTake
          category="invest"
          title="Análise do Marcos: dívida não é falta de caráter — é falta de método"
        >
          <p>
            Segundo o Mapa da Inadimplência da Serasa Experian (maio/2026), o Brasil tem
            mais de 73 milhões de inadimplentes. As dívidas mais comuns são cartão de
            crédito (rotativo cobra 400–450% a.a. segundo BCB), cheque especial (teto
            regulamentado em 8% a.m. desde 2020), crédito pessoal sem garantia e contas
            de consumo. O Programa Desenrola Brasil foi estendido em 2024 para CPFs com
            renda até 3 salários mínimos. Portabilidade de crédito é direito garantido
            pela Resolução BCB 4.292/2013 — bancos não podem cobrar tarifa para transferir
            financiamento ativo.
          </p>
          <p className="mt-2">
            Minha análise: o método que comprovadamente funciona é simples na teoria e
            difícil na execução. Liste tudo, negocie as dívidas de juros mais altos primeiro
            (cartão e cheque especial sempre antes de financiamentos longos), corte 100%
            o uso de cartão até zerar e crie reserva mínima de R$ 1.000 paralelamente para
            não recorrer ao rotativo na próxima emergência. O maior erro que vejo é quem
            para de investir e tenta pagar dívida com os juros mais baixos antes de quitar
            as mais caras.{" "}
            <strong>
              Nenhum investimento legal rende 400% ao ano — então essa dívida é sempre
              prioridade absoluta.
            </strong>
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "Mapa da Inadimplência e Renegociação de Dívidas no Brasil",
              url: "https://www.serasa.com.br/limpa-nome-online/blog/mapa-da-inadimplencia-e-renegociacao-de-dividas-no-brasil/",
              publisher: "Serasa Experian",
              accessedAt: "Maio 2026",
            },
            {
              title: "Banco Central — Taxas de Juros das Operações de Crédito",
              url: "https://www.bcb.gov.br/estatisticas/txjuros",
              publisher: "Banco Central do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Desenrola Brasil — Programa de Renegociação de Dívidas",
              url: "https://www.gov.br/fazenda/pt-br/assuntos/desenrola",
              publisher: "Ministério da Fazenda",
              accessedAt: "Maio 2026",
            },
            {
              title: "CONEF — Estratégia Nacional de Educação Financeira: Endividamento",
              url: "https://www.gov.br/fazenda/pt-br/assuntos/conef",
              publisher: "CONEF — Comitê Nacional de Educação Financeira",
              accessedAt: "Maio 2026",
            },
            {
              title: "Resolução BCB 4.292/2013 — Portabilidade de Operações de Crédito",
              url: "https://www.bcb.gov.br/estabilidadefinanceira/portabilidade",
              publisher: "Banco Central do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Procon-SP — Direitos do Consumidor em Renegociação de Dívidas",
              url: "https://www.procon.sp.gov.br/",
              publisher: "Procon-SP",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="sair-das-dividas-2026-plano-acao" />
        <CommentSection
          postId="sair-das-dividas-2026-plano-acao"
          postTitle="Sair das Dívidas em 2026: O Plano de Ação Que Realmente Funciona"
         category="invest" />
      </article>
    </>
  );
};

export default SairDasDividas2026;
