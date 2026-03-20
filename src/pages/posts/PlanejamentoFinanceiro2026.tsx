import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Target, CheckCircle2, CalendarDays } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import planejamentoImg from "@/assets/planejamento-financeiro-2026.webp";

// SMART Goal Builder
const SmartGoalBuilder = () => {
  const [specific, setSpecific] = useState("");
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");

  const monthsLeft = useMemo(() => {
    if (!deadline) return 0;
    const target = new Date(deadline + "T12:00:00");
    const now = new Date();
    const diff = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
    return Math.max(diff, 1);
  }, [deadline]);

  const monthlyAmount = value && monthsLeft ? (Number(value) / monthsLeft) : 0;


  useEffect(() => {
    trackArticleRead("planejamento-financeiro-2026-metas", "Planejamento Financeiro Para 2026: Como Definir Metas e Alcançá-las", "invest");
  }, []);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Criador de Meta SMART
      </h3>
      <div className="space-y-3 mb-4">
        <div>
          <label className="text-sm text-muted-foreground">O que você quer alcançar? (Específico)</label>
          <input value={specific} onChange={e => setSpecific(e.target.value)} placeholder="Ex: Reserva de emergência"
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground">Valor em R$ (Mensurável)</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="15000"
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Prazo (Temporal)</label>
            <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1" />
          </div>
        </div>
      </div>

      {specific && value && deadline && (
        <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-4">
          <p className="text-sm font-bold mb-2 text-[hsl(var(--invest-color))]">Sua Meta SMART:</p>
          <p className="text-sm text-muted-foreground">
            "Quero ter <strong>R$ {Number(value).toLocaleString("pt-BR")}</strong> para <strong>{specific}</strong> até <strong>{new Date(deadline + "T12:00:00").toLocaleDateString("pt-BR")}</strong>, guardando <strong>R$ {monthlyAmount.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/mês</strong>."
          </p>
        </div>
      )}
    </div>
  );
};

// Day Counter
const DayCounter = () => {
  const now = new Date();
  const endOfYear = new Date(2026, 11, 31);
  const startOfYear = new Date(2026, 0, 1);
  const totalDays = Math.ceil((endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  const daysPassed = Math.ceil((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  const daysLeft = Math.max(totalDays - daysPassed, 0);
  const progress = Math.min((daysPassed / totalDays) * 100, 100);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-center">
      <CalendarDays className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-2" />
      <p className="text-sm text-muted-foreground mb-1">Dias restantes em 2026:</p>
      <p className="text-4xl font-bold text-[hsl(var(--invest-color))]">{daysLeft}</p>
      <div className="w-full h-3 bg-muted rounded-full mt-3 overflow-hidden">
        <div className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{progress.toFixed(0)}% do ano já passou</p>
    </div>
  );
};

// Category Checklist
const GoalChecklist = () => {
  const categories = [
    { name: "Proteção", items: ["Reserva de emergência completa", "Seguro de vida (se tiver dependentes)", "Plano de saúde adequado"] },
    { name: "Eliminar Dívidas", items: ["Quitar cartão de crédito", "Limpar nome no Serasa", "Renegociar parcelas"] },
    { name: "Médio Prazo (1-5 anos)", items: ["Viagem dos sonhos", "Troca de carro", "Curso de especialização"] },
    { name: "Longo Prazo (5+ anos)", items: ["Aposentadoria", "Imóvel próprio", "Independência financeira"] },
    { name: "Legado", items: ["Herança para filhos", "Impacto social", "Empresa familiar"] },
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem("goal-checklist-2026") || "{}"); } catch { return {}; }
  });

  const toggle = (key: string) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    localStorage.setItem("goal-checklist-2026", JSON.stringify(next));
  };

  const totalItems = categories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-2">✅ Checklist de Metas 2026</h3>
      <p className="text-xs text-muted-foreground mb-4">{checkedCount}/{totalItems} concluídas — progresso salvo automaticamente</p>
      <div className="w-full h-2 bg-muted rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all" style={{ width: `${(checkedCount / totalItems) * 100}%` }} />
      </div>
      {categories.map((cat) => (
        <div key={cat.name} className="mb-4">
          <h4 className="text-sm font-bold text-[hsl(45,100%,50%)] mb-2">{cat.name}</h4>
          {cat.items.map((item) => {
            const key = `${cat.name}-${item}`;
            return (
              <button key={key} onClick={() => toggle(key)} className="flex items-center gap-2 w-full text-left py-1.5 text-sm">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${checked[key] ? "bg-[hsl(var(--invest-color))] border-[hsl(var(--invest-color))]" : "border-muted-foreground"}`}>
                  {checked[key] && <CheckCircle2 className="h-3 w-3 text-background" />}
                </div>
                <span className={checked[key] ? "line-through text-muted-foreground" : "text-foreground"}>{item}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const PlanejamentoFinanceiro2026 = () => {

  const yearlyRoadmap = [
    { month: "Jan", action: "Levantamento completo: quanto ganho, gasto, devo", icon: "📊" },
    { month: "Fev", action: "Corte de gastos e renegociação de contratos", icon: "✂️" },
    { month: "Mar", action: "Sistema automático funcionando", icon: "⚙️" },
    { month: "Abr-Set", action: "Execução e acompanhamento mensal", icon: "📈" },
    { month: "Out", action: "Revisão semestral. O que funcionou?", icon: "🔍" },
    { month: "Nov-Dez", action: "Preparação para 2027: IRPF, 13º, estratégia", icon: "🎯" },
  ];

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Planejamento Financeiro 2026</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Chega de começar o ano com as mesmas metas financeiras. Aprenda o método científico para definir e alcançar objetivos financeiros em 2026.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 24 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 11 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img fetchpriority="high" src={planejamentoImg} alt="Planejamento Financeiro 2026" className="w-full aspect-video object-cover" loading="eager" />
        </div>

        {/* Day Counter */}
        <DayCounter />

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Pesquisas mostram que <strong>92% das pessoas abandonam suas resoluções de ano novo até fevereiro</strong>. O problema quase nunca é falta de vontade — é falta de método.
          </p>
        </div>

        {/* Why goals fail */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Por Que Suas Metas Falham</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "Metas vagas", desc: "'Economizar mais' não é meta. É desejo." },
              { title: "Sem sistema", desc: "Metas funcionam com processos, não força de vontade." },
              { title: "Muito ambiciosas", desc: "Metas impossíveis geram abandono rápido." },
              { title: "Sem acompanhamento", desc: "O que não é medido não é gerenciado." },
            ].map((item, i) => (
              <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SMART Goal Builder */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Crie Sua Meta SMART</h2>
          <SmartGoalBuilder />
        </section>

        {/* Yearly Roadmap */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Roadmap do Ano 2026</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[hsl(var(--invest-color))]/30" />
            {yearlyRoadmap.map((step, i) => (
              <div key={i} className="relative pl-12 pb-6">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[hsl(var(--invest-color))] border-4 border-background" />
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.icon}</span>
                    <span className="text-xs text-[hsl(var(--invest-color))] font-mono font-bold">{step.month}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goal Checklist */}
        <GoalChecklist />

        {/* Mindset */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">A Mentalidade Que Funciona</h2>
          <div className="space-y-3">
            {[
              "Automatizar tudo o que for possível (tire o esforço da equação)",
              "Criar fricção para gastos ruins (delete apps, remova cartão salvo)",
              "Criar facilidade para comportamentos bons",
              "Celebrar pequenas vitórias (meta atingida = comemoração planejada)",
              "Encontrar uma comunidade (fórums, grupos, parceiro de accountability)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <span className="text-[hsl(var(--invest-color))] font-bold">{i + 1}.</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold mb-3">O melhor momento para começar era ontem.</h2>
            <p className="text-lg text-muted-foreground">O segundo melhor momento é <strong className="text-[hsl(var(--invest-color))]">agora</strong>.</p>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "92% das resoluções falham por falta de método, não de vontade",
                "Use metas SMART: Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais",
                "Siga o roadmap mensal para manter consistência o ano todo",
                "Automatize comportamentos bons e crie fricção para os ruins",
                "Finanças pessoais são 80% comportamento e 20% conhecimento",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {["planejamento financeiro", "metas 2026", "educação financeira", "economizar dinheiro", "organização"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation categoryPath="/financas" categoryLabel="Finanças" />

        <RelatedPosts currentSlug="planejamento-financeiro-2026-metas" />
        <CommentSection postId="33" postTitle="Planejamento Financeiro Para 2026: Como Definir Metas e Alcançá-las" />
      </article>
    </>
  );
};

export default PlanejamentoFinanceiro2026;
