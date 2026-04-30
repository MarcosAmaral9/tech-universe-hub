import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, Building2, CheckCircle2, AlertTriangle, TrendingUp, Percent, BarChart3, PiggyBank, ShieldAlert } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/fiis-2026-ainda-vale.webp";

const SETORES_FII = [
  { setor: "Logística / Galpões", dy: "9-11%", pvp: "0,85-0,95", tendencia: "↑ Alta", destaque: true },
  { setor: "Recebíveis (Papel)", dy: "11-14%", pvp: "0,95-1,05", tendencia: "→ Estável", destaque: false },
  { setor: "Shoppings", dy: "7-9%", pvp: "0,80-0,92", tendencia: "↑ Recuperação", destaque: true },
  { setor: "Lajes Corporativas", dy: "8-10%", pvp: "0,70-0,85", tendencia: "↑ Início de recuperação", destaque: false },
  { setor: "Híbridos / FOFs", dy: "9-12%", pvp: "0,85-1,00", tendencia: "→ Estável", destaque: false },
];

const FIIs2026AindaVale = () => {
  const [aporte, setAporte] = useState(1000);
  const dy = 0.10; // 10% DY médio

  useEffect(() => {
    trackArticleRead("fiis-2026-ainda-vale-investir", "FIIs em 2026: ainda vale a pena investir com a Selic caindo?", "invest");
  }, []);

  const rendMensal = (aporte * dy) / 12;
  const rend5anos = aporte * Math.pow(1 + dy, 5) - aporte; // sem reinvestimento de dividendos, simplificado
  const fmt = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  return (
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
          FIIs em 2026: ainda vale a pena investir com a Selic caindo?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Com o início do ciclo de queda dos juros, os Fundos Imobiliários voltam ao radar. Entenda o cenário, os setores mais promissores e os cuidados antes de investir.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="FIIs em 2026 - prédios e dividendos" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Com a Selic começando a cair, muita gente está olhando para os Fundos Imobiliários (FIIs) com interesse renovado. E faz sentido: historicamente, o início de um ciclo de queda dos juros é um dos melhores momentos para entrar nesse tipo de ativo.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          No último ciclo de cortes (2023-2024), o IFIX — índice que reúne os principais FIIs da B3 — valorizou cerca de <strong>15% em 12 meses</strong>, além dos dividendos distribuídos no período. O cenário atual tem potencial semelhante.
        </p>

        <AdLeaderboard />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que são FIIs e por que ficam mais atrativos com juros menores</h2>
        <p className="text-muted-foreground leading-relaxed">
          FIIs são fundos que investem em imóveis ou em títulos ligados ao setor imobiliário. Eles são obrigados por lei a distribuir pelo menos <strong>95% do lucro</strong> aos cotistas todo mês — o famoso "dividendo" isento de Imposto de Renda para pessoa física.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Quando a Selic está em 15%, concorrer com renda fixa é difícil. Com a queda gradual dos juros, os FIIs voltam a chamar atenção porque seus rendimentos mensais ficam relativamente mais atrativos, e as <strong>cotas tendem a se valorizar</strong> conforme os juros caem.
        </p>

        {/* Vantagens dos FIIs */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <PiggyBank className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
            <h3 className="font-bold mb-1">Renda Mensal</h3>
            <p className="text-xs text-muted-foreground">Dividendos pagos todo mês, direto na conta da corretora. Isentos de IR para pessoa física.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <Building2 className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
            <h3 className="font-bold mb-1">Acesso ao Imobiliário</h3>
            <p className="text-xs text-muted-foreground">Invista em shoppings, galpões e escritórios a partir de ~R$ 10 por cota, sem burocracia de imóvel.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 text-center">
            <TrendingUp className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />
      <AdInArticle />
            <h3 className="font-bold mb-1">Valorização</h3>
            <p className="text-xs text-muted-foreground">Além dos dividendos, as cotas podem se valorizar — especialmente em ciclos de queda de juros.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">FIIs de Papel vs. FIIs de Tijolo</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Papel (CRI, LCI)</h3>
            <p className="text-sm text-muted-foreground">Investem em títulos de dívida do setor imobiliário. Com a Selic alta, esses fundos se beneficiam diretamente. No cenário de queda gradual, ainda têm bom desempenho no curto prazo.</p>
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground"><strong>Melhor para:</strong> quem prioriza dividendos altos agora e aceita que o DY vai diminuir conforme os juros caem.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">🧱</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Tijolo</h3>
            <p className="text-sm text-muted-foreground">Investem em imóveis físicos: shoppings, lajes corporativas, logística. Mais sensíveis ao ciclo de juros — tendem a se valorizar com mais força quando a queda consolida.</p>
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground"><strong>Melhor para:</strong> quem pensa no médio/longo prazo e quer ganhar com valorização das cotas + dividendos crescentes.</p>
            </div>
          </div>
        </div>

        <AdRectangle />

        {/* Tabela de setores */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Panorama dos setores em 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">Setor</th>
                <th className="text-left p-3 text-muted-foreground font-medium">DY médio</th>
                <th className="text-left p-3 text-muted-foreground font-medium">P/VP</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Tendência</th>
              </tr>
            </thead>
            <tbody>
              {SETORES_FII.map((s, i) => (
                <tr key={i} className={`border-b border-border ${s.destaque ? "bg-[hsl(var(--invest-color))]/5" : ""}`}>
                  <td className="p-3 font-medium">{s.setor}</td>
                  <td className="p-3 text-green-500 font-mono text-xs">{s.dy}</td>
                  <td className="p-3 font-mono text-xs">{s.pvp}</td>
                  <td className="p-3 text-xs text-muted-foreground">{s.tendencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">DY = Dividend Yield (rendimento em dividendos / preço da cota). P/VP = Preço sobre Valor Patrimonial. Dados aproximados de março/2026.</p>

        {/* Simulador */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><BarChart3 className="h-6 w-6" /> Simulador de renda passiva com FIIs</span>
        </h2>
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm text-muted-foreground mb-2">Quanto você investiria em FIIs?</label>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {[1000, 5000, 10000, 50000, 100000].map(v => (
              <button key={v} onClick={() => setAporte(v)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${aporte === v ? "bg-[hsl(var(--invest-color))] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {fmt(v)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <Percent className="h-5 w-5 text-[hsl(var(--invest-color))] mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">DY médio estimado</p>
              <p className="text-xl font-bold">10% a.a.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
              <PiggyBank className="h-5 w-5 text-green-500 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Renda mensal estimada</p>
              <p className="text-xl font-bold text-green-500">{fmt(rendMensal)}</p>
              <p className="text-xs text-muted-foreground">isento de IR</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <TrendingUp className="h-5 w-5 text-[hsl(var(--invest-color))] mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Valorização potencial (5 anos)*</p>
              <p className="text-xl font-bold">{fmt(rend5anos)}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
            * Simulação simplificada com DY de 10% a.a. sem reinvestimento. Resultados reais podem variar significativamente.
          </p>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como analisar um FII antes de comprar</h2>
        <div className="space-y-3">
          {[
            { titulo: "P/VP (Preço sobre Valor Patrimonial)", desc: "Abaixo de 1,0 = você está pagando menos do que o fundo vale. Acima de 1,0 = está pagando um prêmio. Ideal: entre 0,85 e 1,00." },
            { titulo: "Dividend Yield (DY)", desc: "Rendimento anual em dividendos / preço da cota. Compare com a Selic: se o DY líquido supera o CDI líquido, o FII está competitivo." },
            { titulo: "Vacância", desc: "Percentual de imóveis vazios no fundo. Vacância alta = menos receita = dividendos menores. Evite FIIs com vacância acima de 15%." },
            { titulo: "Gestão e histórico", desc: "Gestores com bom track record fazem diferença. Verifique se o fundo manteve dividendos estáveis nos últimos 12-24 meses." },
            { titulo: "Liquidez", desc: "Volume médio diário de negociação. FIIs com baixo volume podem ter spreads altos e dificuldade de venda." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-1 text-[hsl(var(--invest-color))]">{item.titulo}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Setores no radar em 2026</h2>
        <div className="space-y-3">
          {[
            "Logística e galpões industriais: demanda crescente por e-commerce e armazenamento — vacância historicamente baixa",
            "Fundos de recebíveis (papel): ainda bem remunerados enquanto os juros não caem muito. Boa opção de transição.",
            "Shoppings e lajes corporativas: começam a se recuperar com a melhora do consumo e retorno ao trabalho presencial",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <Building2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><ShieldAlert className="h-6 w-6" /> Cuidados importantes</span>
        </h2>
        <div className="space-y-3">
          {[
            "Evite FIIs com vacância alta ou carteira de imóveis desvalorizada — dividendo alto pode ser armadilha se a cota está despencando",
            "Analise o P/VP: comprar abaixo de 1 significa pagar menos do que o fundo vale. Mas P/VP muito baixo pode indicar problemas",
            "Diversifique entre tipos de FII para reduzir risco — não concentre tudo em um setor ou gestor",
            "FIIs não têm garantia do FGC — diferente de CDBs e LCIs, não existe proteção contra calote",
            "Ganho de capital na venda de cotas é tributado em 20% — só os dividendos mensais são isentos",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como começar a investir em FIIs</h2>
        <div className="space-y-3">
          {[
            "Abra conta em uma corretora (XP, Rico, Clear, NuInvest — todas oferecem FIIs sem taxa de corretagem)",
            "Estude 3-5 FIIs de setores diferentes antes de comprar. Use sites como FundsExplorer e Status Invest para análise",
            "Comece com aportes pequenos e vá aumentando conforme ganha confiança e entendimento",
            "Reinvista os dividendos nos primeiros anos para acelerar o efeito dos juros compostos",
            "Reavalie sua carteira de FIIs trimestralmente — acompanhe relatórios gerenciais dos fundos",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">
            FIIs não são renda fixa. Podem oscilar, ter quedas e distribuições irregulares. Mas para quem quer renda passiva mensal com isenção de IR e exposição ao mercado imobiliário, continuam sendo uma das melhores opções disponíveis no Brasil. Com o ciclo de queda da Selic se consolidando ao longo de 2026, o timing está a favor de quem entrar agora com paciência e visão de médio prazo.
          </p>
          <p className="text-xs text-muted-foreground mt-3 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            Conteúdo informativo. Não constitui recomendação de investimento. Consulte um profissional certificado antes de tomar decisões financeiras.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["FIIs", "fundos imobiliários", "dividendos", "renda passiva", "Selic", "investimentos 2026", "P/VP", "IFIX", "tijolo", "papel"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <RelatedPosts currentSlug="fiis-2026-ainda-vale-investir" />
      <CommentSection postId="fiis-2026-ainda-vale-investir" />
    </article>
  );
};

export default FIIs2026AindaVale;