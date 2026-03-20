import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Zap, Building2, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import fiisImg from "@/assets/fiis-2026.webp";

// FII Simulator
const FIISimulator = () => {
  const [targetIncome, setTargetIncome] = useState(500);
  const [dy, setDy] = useState(9);
  const needed = (targetIncome * 12) / (dy / 100);


  useEffect(() => {
    trackArticleRead("fiis-2026-melhores-fundos-imobiliarios", "FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar", "invest");
  }, []);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Simulador: Quanto Investir em FIIs?
      </h3>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground">Renda mensal desejada: <strong className="text-foreground">R$ {targetIncome.toLocaleString("pt-BR")}</strong></label>
          <Slider min={100} max={5000} step={50} value={[targetIncome]} onValueChange={v => setTargetIncome(v[0])} className="mt-2" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Dividend Yield anual: <strong className="text-foreground">{dy}%</strong></label>
          <Slider min={5} max={15} step={0.5} value={[dy]} onValueChange={v => setDy(v[0])} className="mt-2" />
        </div>
      </div>
      <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5 text-center">
        <p className="text-sm text-muted-foreground mb-1">Patrimônio necessário em FIIs:</p>
        <p className="text-3xl font-bold text-[hsl(var(--invest-color))]">R$ {needed.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
        <p className="text-xs text-muted-foreground mt-2">Para receber R$ {targetIncome}/mês com DY de {dy}%</p>
      </div>
    </div>
  );
};

// Sector Tiles
const SectorTiles = () => {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const sectors = [
    { name: "Logística", icon: "📦", desc: "E-commerce em crescimento. Demanda por centros de distribuição segue alta.", outlook: "🟢 Positivo" },
    { name: "Papel (CRI)", icon: "📄", desc: "Selic elevada = rendimentos atrativos indexados ao CDI/IPCA.", outlook: "🟢 Positivo" },
    { name: "Hospitais", icon: "🏥", desc: "Setor defensivo, contratos longos. Menos volatilidade.", outlook: "🟢 Positivo" },
    { name: "Lajes Corp.", icon: "🏢", desc: "Recuperação gradual do presencial. Escritórios premium em destaque.", outlook: "🟡 Neutro" },
    { name: "Shoppings", icon: "🛍️", desc: "Varejo sob pressão com juros altos. Seletividade é chave.", outlook: "🟡 Neutro" },
    { name: "Híbridos", icon: "🔄", desc: "Combinam papel e tijolo. Boa opção para diversificação simples.", outlook: "🟢 Positivo" },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {sectors.map((s) => (
          <button key={s.name} onClick={() => setActiveSector(activeSector === s.name ? null : s.name)}
            className={`p-4 rounded-xl border text-center transition-all ${activeSector === s.name ? "border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10" : "border-border bg-card hover:border-muted-foreground"}`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-sm font-bold">{s.name}</div>
          </button>
        ))}
      </div>
      {activeSector && (() => {
        const s = sectors.find(x => x.name === activeSector);
        if (!s) return null;
        return (
          <div className="bg-card border border-border rounded-xl p-4 animate-in fade-in">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold">{s.icon} {s.name}</h4>
              <span className="text-sm">{s.outlook}</span>
            </div>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        );
      })()}
    </div>
  );
};

// Glossary
const GlossaryItem = ({ term, definition }: { term: string; definition: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left bg-card border border-border rounded-lg p-3 hover:border-[hsl(var(--invest-color))]/50 transition-all">
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm">{term}</span>
        <span className="text-muted-foreground text-xs">{open ? "▲" : "▼"}</span>
      </div>
      {open && <p className="text-sm text-muted-foreground mt-2">{definition}</p>}
    </button>
  );
};

const FIIs2026 = () => {

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">FIIs 2026</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Fundos Imobiliários (FIIs) em 2026: Os Melhores, Como Analisar e Erros Que Te Custam Dinheiro
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Guia completo de FIIs para 2026. Saiba como escolher os melhores fundos imobiliários, analisar indicadores e construir uma carteira que paga dividendos mensais.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img fetchpriority="high" src={fiisImg} alt="Fundos Imobiliários FIIs 2026" className="w-full aspect-video object-cover" loading="eager" />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Fundos Imobiliários são o investimento favorito do brasileiro que quer renda passiva. A combinação de <strong>rendimentos mensais isentos de IR</strong>, acessibilidade (uma cota pode custar R$ 10) e diversificação imobiliária faz dos FIIs uma das melhores opções em 2026.
          </p>
        </div>

        {/* 3 Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Os 3 Tipos de FIIs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { type: "Papel (CRI/CRA)", desc: "Investem em certificados de recebíveis. Mais defensivos em juros altos.", pros: "Rendimentos altos com Selic alta", cons: "Sem imóvel físico, risco de crédito", icon: "📄" },
              { type: "Tijolo", desc: "Possuem imóveis físicos: shoppings, galpões, lajes corporativas.", pros: "Valorização patrimonial real", cons: "Vacância afeta dividendos", icon: "🧱" },
              { type: "Híbridos", desc: "Combinam papel e tijolo. Diversificação em um único fundo.", pros: "Equilíbrio entre segurança e crescimento", cons: "Menos especializado", icon: "🔄" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-[hsl(45,100%,50%)]">{item.type}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <p className="text-xs"><span className="text-[hsl(var(--invest-color))]">✓</span> {item.pros}</p>
                <p className="text-xs"><span className="text-destructive">✕</span> {item.cons}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Indicadores Essenciais</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <GlossaryItem term="Dividend Yield (DY)" definition="Quanto o fundo pagou de dividendos nos últimos 12 meses em relação ao preço da cota. DY acima de 9-10% é competitivo em 2026." />
            <GlossaryItem term="P/VP (Preço/Valor Patrimonial)" definition="Compara preço de mercado com valor real dos ativos. P/VP < 1,0 = oportunidade. P/VP > 1,2 = prêmio de mercado." />
            <GlossaryItem term="Vacância" definition="% de imóveis desocupados. Abaixo de 5% é excelente. Acima de 15% é preocupante." />
            <GlossaryItem term="Liquidez Diária" definition="Volume médio negociado por dia. Fundos com baixa liquidez são difíceis de vender." />
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Setores em Destaque 2026</h2>
          <SectorTiles />
        </section>

        {/* Simulator */}
        <FIISimulator />

        {/* Portfolio Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Como Montar Sua Carteira de FIIs</h2>
          <div className="space-y-3">
            {[
              "Mínimo de 8-10 FIIs para diluir risco específico",
              "Diversifique entre setores diferentes",
              "Misture papel e tijolo para equilibrar cenários",
              "Prefira gestoras grandes com histórico (Kinea, CSHG, BTG, RBR)",
              "Reinvista os dividendos nos primeiros anos",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Common Errors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Os Erros Mais Comuns</h2>
          <div className="space-y-4">
            {[
              { title: "Olhar só o Dividend Yield", desc: "DY de 15% pode significar que a cota despencou, não que paga mais." },
              { title: "Ignorar qualidade dos imóveis", desc: "Galpão de primeira linha é muito diferente de imóvel de terceira categoria." },
              { title: "Não verificar contratos", desc: "Contratos atípicos (com multa pesada) são mais seguros que típicos." },
              { title: "Vender na queda por pânico", desc: "Se os fundamentos são bons, queda no preço é oportunidade de compra." },
            ].map((item, i) => (
              <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 flex items-start gap-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
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
                "FIIs pagam dividendos mensais isentos de IR para pessoa física",
                "3 tipos: Papel, Tijolo e Híbridos — cada um para um cenário",
                "Analise DY, P/VP, Vacância e Liquidez antes de investir",
                "Logística e Papel são os setores mais atrativos em 2026",
                "Diversifique em 8-10 fundos e reinvista dividendos no início",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {["FIIs", "fundos imobiliários", "dividendos", "renda passiva", "investimentos 2026"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation categoryPath="/financas" categoryLabel="Finanças" />

        <RelatedPosts currentSlug="fiis-2026-melhores-fundos-imobiliarios" />
        <CommentSection postId="31" postTitle="FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar" />
      </article>
    </>
  );
};

export default FIIs2026;
