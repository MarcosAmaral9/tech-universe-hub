import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, Calendar, User, AlertTriangle, ChevronRight, Zap, CheckCircle2, Target, PieChart, BookOpen, TrendingUp } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import carteiraImg from "@/assets/carteira-investimentos-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

// Simple donut chart component
const DonutChart = ({ segments, label }: { segments: { name: string; pct: number; color: string }[]; label: string }) => {
  const total = segments.reduce((sum, s) => sum + s.pct, 0);
  let cumulative = 0;
  const size = 180;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} className="transform -rotate-90">
        {segments.map((seg, idx) => {
          const dashLength = (seg.pct / total) * circumference;
          const dashOffset = -(cumulative / total) * circumference;
          cumulative += seg.pct;
          return (
            <circle
              key={idx}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={dashOffset}
              className="transition-all duration-700"
            />
          );
        })}
      </svg>
      <h4 className="font-bold text-center">{label}</h4>
      <div className="space-y-1">
        {segments.map((seg, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: seg.color }} />
            <span className="text-muted-foreground">{seg.name}: {seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated counter
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref}>
      <span className="text-4xl font-bold text-[hsl(var(--invest-color))]">
        R$ {count.toLocaleString("pt-BR")}
      </span>
    </div>
  );
};

const CarteiraIniciantes2026 = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  useEffect(() => {
    trackArticleRead(
      "carteira-investimentos-iniciantes-2026",
      "Carteira de Investimentos para Iniciantes 2026: Guia Completo",
      "invest"
    );
  }, []);

  const quizQuestions = [
    {
      q: "Se você perdesse 20% do seu investimento temporariamente, você:",
      options: [
        { label: "Venderia tudo imediatamente", value: "conservador" },
        { label: "Ficaria ansioso mas aguardaria", value: "moderado" },
        { label: "Compraria mais aproveitando o preço baixo", value: "arrojado" },
      ],
    },
    {
      q: "Qual é seu horizonte de investimento?",
      options: [
        { label: "Menos de 2 anos", value: "conservador" },
        { label: "De 2 a 5 anos", value: "moderado" },
        { label: "Mais de 5 anos", value: "arrojado" },
      ],
    },
    {
      q: "O que é mais importante para você?",
      options: [
        { label: "Segurança acima de tudo", value: "conservador" },
        { label: "Equilíbrio entre segurança e retorno", value: "moderado" },
        { label: "Máximo retorno possível", value: "arrojado" },
      ],
    },
  ];

  const handleQuizAnswer = (value: string) => {
    const newAnswers = [...quizAnswers, value];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts = { conservador: 0, moderado: 0, arrojado: 0 };
      newAnswers.forEach((a) => counts[a as keyof typeof counts]++);
      const result = Object.entries(counts).sort(([, a], [, b]) => b - a)[0][0];
      setQuizResult(result);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const profileInfo: Record<string, { label: string; color: string; desc: string }> = {
    conservador: { label: "Conservador", color: "hsl(var(--invest-color))", desc: "Priorize renda fixa e liquidez. Sua carteira ideal tem 70% em renda fixa." },
    moderado: { label: "Moderado", color: "hsl(45 100% 50%)", desc: "Equilibre risco e retorno. Sua carteira ideal tem 50% renda fixa e 30% variável." },
    arrojado: { label: "Arrojado", color: "hsl(0 84% 60%)", desc: "Maximize retornos com mais exposição a variável. 40% ações + FIIs + ETFs." },
  };

  const portfolios = {
    conservador: [
      { name: "Renda Fixa", pct: 70, color: "hsl(142, 70%, 45%)" },
      { name: "FIIs", pct: 20, color: "hsl(187, 85%, 43%)" },
      { name: "Ações", pct: 10, color: "hsl(280, 75%, 55%)" },
    ],
    moderado: [
      { name: "Renda Fixa", pct: 50, color: "hsl(142, 70%, 45%)" },
      { name: "FIIs + Ações", pct: 30, color: "hsl(187, 85%, 43%)" },
      { name: "ETFs", pct: 10, color: "hsl(280, 75%, 55%)" },
      { name: "Reserva Oportunidade", pct: 10, color: "hsl(45, 100%, 50%)" },
    ],
    arrojado: [
      { name: "Renda Fixa", pct: 30, color: "hsl(142, 70%, 45%)" },
      { name: "Ações + FIIs", pct: 40, color: "hsl(187, 85%, 43%)" },
      { name: "ETFs Internacionais", pct: 20, color: "hsl(280, 75%, 55%)" },
      { name: "Cripto", pct: 10, color: "hsl(25, 95%, 55%)" },
    ],
  };

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Carteira para Iniciantes</span>
        </nav>

        <BackNavigation category="invest" />

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              Educação Financeira · Carteira · Iniciantes
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Carteira de Investimentos para Iniciantes 2026: Monte a Sua do Zero em 5 Passos
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Montar uma <strong>carteira de investimentos para iniciantes em 2026</strong> nunca foi tão acessível — com R$ 50 já dá para diversificar entre Tesouro Direto, CDB e ETFs. Este guia passo a passo mostra como descobrir seu perfil de investidor, definir objetivos, escolher os ativos certos e onde abrir conta, sem precisar de nenhum conhecimento prévio.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Fevereiro, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img
            fetchpriority="high"
            loading="eager"
            decoding="async"
            src={carteiraImg}
            alt="Carteira de Investimentos para Iniciantes 2026 — guia completo passo a passo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            A maior armadilha para quem quer montar uma <strong>carteira de investimentos para iniciantes</strong> é a <strong>paralisia por análise</strong>. Existe tanto conteúdo contraditório na internet que muita gente simplesmente não faz nada — e o dinheiro fica na poupança rendendo menos que a inflação. Em 2026, isso não tem mais desculpa: com <strong>R$ 50 já dá para ter uma carteira diversificada</strong> com proteção do FGC e rendimento acima do CDI.
          </p>

          {/* Passo 1: Perfil — Quiz */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <PieChart className="inline h-6 w-6 mr-2" />
            Passo 1: Descubra Seu Perfil de Investidor
          </h2>
          <p>
            O <strong>perfil de investidor</strong> define qual proporção do seu dinheiro vai para renda fixa (segura, previsível) e renda variável (maior potencial, maior risco). Desde 2023 a CVM exige que corretoras apliquem o suitability — o teste de adequação ao perfil — antes de liberar produtos de risco. Faça o quiz abaixo para descobrir o seu:
          </p>

          <div className="not-prose my-8 p-6 bg-card rounded-xl border-2 border-[hsl(var(--invest-color))]/50">
            {!quizResult ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Pergunta {quizStep + 1} de {quizQuestions.length}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full">
                    <div className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all" style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4">{quizQuestions[quizStep].q}</h3>
                <div className="grid gap-3">
                  {quizQuestions[quizStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(opt.value)}
                      className="p-4 bg-muted hover:bg-[hsl(var(--invest-color))]/20 rounded-xl text-left transition-colors border border-transparent hover:border-[hsl(var(--invest-color))]/50"
                    >
                      <span className="font-semibold">{String.fromCharCode(65 + idx)})</span> {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-4" style={{ color: profileInfo[quizResult].color }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: profileInfo[quizResult].color }}>
                  Perfil: {profileInfo[quizResult].label}
                </h3>
                <p className="text-muted-foreground mb-4">{profileInfo[quizResult].desc}</p>
                <button onClick={resetQuiz} className="text-sm text-[hsl(var(--invest-color))] hover:underline">
                  Refazer quiz →
                </button>
              </div>
            )}
          </div>

          <AdLeaderboard className="my-8" />

          {/* Passo 2: Reserva de Emergência */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <Target className="inline h-6 w-6 mr-2" />
            Passo 2: Monte Sua Reserva de Emergência PRIMEIRO
          </h2>
          <p>
            Antes de qualquer investimento, você precisa de <strong>3 a 6 meses de gastos mensais</strong> guardados em local seguro e com liquidez imediata. Sem isso, qualquer imprevisto — demissão, doença, carro quebrado — vai obrigar você a resgatar investimentos no pior momento, quebrando o ciclo dos juros compostos.
          </p>
          <p>
            <strong>Onde guardar a reserva de emergência:</strong> Tesouro Selic (melhor custo-benefício — liquidez diária com rentabilidade próxima à Selic), CDB de liquidez diária a 100%+ CDI em banco digital, ou conta remunerada do Nubank/Inter. <strong>Nunca</strong> na poupança — o Tesouro Selic rende mais com a mesma segurança.
          </p>

          <div className="not-prose my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <h3 className="text-lg font-bold mb-3">✅ Checklist: Antes de Montar a Carteira</h3>
            <div className="space-y-3">
              {[
                "Reserva de emergência de 3–6 meses de gastos guardada em liquidez diária",
                "Dívidas de cartão de crédito (juros de 400%+) e cheque especial quitadas",
                "Objetivos financeiros definidos com prazo e valor estimado",
                "Perfil de investidor identificado (conservador, moderado ou arrojado)",
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[hsl(var(--invest-color))]" />
                  <span className="text-muted-foreground">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Passo 3: Objetivos */}
          <AdInArticle />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 3: Defina Seus Objetivos com Prazo e Valor
          </h2>
          <p>
            Cada objetivo financeiro tem um <strong>prazo</strong> e exige um <strong>tipo de investimento</strong> diferente. Dinheiro que você vai precisar em 1 ano não pode estar em ações — renda variável precisa de horizonte longo para diluir a volatilidade. Use a tabela abaixo como guia:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="p-3 text-left font-bold">Objetivo</th>
                  <th className="p-3 text-left font-bold">Prazo</th>
                  <th className="p-3 text-left font-bold">Valor ref.</th>
                  <th className="p-3 text-left font-bold">Onde investir</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reserva de emergência", "Imediato", "3–6× gastos/mês", "Tesouro Selic / CDB DI"],
                  ["Viagem ou bem de consumo", "1–2 anos", "R$ 10.000", "CDB / LCI com carência"],
                  ["Entrada imóvel / veículo", "3–7 anos", "R$ 60.000–100.000", "LCI, LCA, Tesouro IPCA+"],
                  ["Aposentadoria / independência", "10–30 anos", "R$ 500.000+", "Ações, ETFs, FIIs, Prev. Privada"],
                ].map(([obj, prazo, valor, onde], idx) => (
                  <tr key={idx} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-3 font-semibold text-xs">{obj}</td>
                    <td className="p-3 text-muted-foreground text-xs">{prazo}</td>
                    <td className="p-3 text-invest font-bold text-xs">{valor}</td>
                    <td className="p-3 text-muted-foreground text-xs">{onde}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AdRectangle className="my-8" />

          {/* Passo 4: Classes de ativos */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <BookOpen className="inline h-6 w-6 mr-2" />
            Passo 4: Entenda as Classes de Ativos
          </h2>
          <p>
            A divisão mais importante na montagem de qualquer carteira de investimentos é entre <strong>renda fixa</strong> e <strong>renda variável</strong>. Cada classe tem seu papel e deve ser usada no contexto certo:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-card rounded-xl border border-emerald-500/30">
              <h3 className="font-bold text-lg mb-3 text-emerald-400">Renda Fixa (previsível)</h3>
              <p className="text-xs text-muted-foreground mb-3">Você sabe quanto vai receber ao final do prazo. Ideal para reserva, objetivos de curto e médio prazo.</p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>▶ Tesouro Direto (Selic, IPCA+, Prefixado)</li>
                <li>▶ CDB, LCI, LCA</li>
                <li>▶ Debêntures incentivadas</li>
                <li>▶ Poupança (pior opção da lista)</li>
              </ul>
            </div>
            <div className="p-5 bg-card rounded-xl border border-purple-500/30">
              <h3 className="font-bold text-lg mb-3 text-purple-400">Renda Variável (potencial maior)</h3>
              <p className="text-xs text-muted-foreground mb-3">Retorno não garantido, mas potencial de ganho real acima da inflação no longo prazo.</p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>▶ Ações (Ibovespa / B3)</li>
                <li>▶ Fundos Imobiliários — FIIs (dividendos mensais)</li>
                <li>▶ ETFs (IVVB11, BOVA11, SMAL11)</li>
                <li>▶ Criptomoedas (alta volatilidade — máx. 5%)</li>
              </ul>
            </div>
          </div>

          {/* Passo 5: Carteiras por perfil */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <TrendingUp className="inline h-6 w-6 mr-2" />
            Passo 5: Modelos de Carteira por Perfil em 2026
          </h2>
          <p>
            Com base no seu perfil identificado no Passo 1, veja abaixo os modelos de carteira recomendados. Todos partem do pressuposto de que a reserva de emergência já está montada e os valores aqui são do <em>patrimônio investível</em> — o dinheiro que pode ficar parado por meses ou anos sem ser necessário:
          </p>

          <div className="not-prose grid md:grid-cols-3 gap-8 my-8">
            <DonutChart segments={portfolios.conservador} label="Conservadora" />
            <DonutChart segments={portfolios.moderado} label="Moderada" />
            <DonutChart segments={portfolios.arrojado} label="Arrojada" />
          </div>

          <div className="not-prose space-y-3 my-6">
            {[
              { perfil: "🟢 Conservador", alocacao: "70% Renda Fixa (Tesouro Selic + CDB) · 20% FIIs · 10% Ações via ETF", desc: "Para quem não tolera volatilidade. Foco em preservação de capital e renda." },
              { perfil: "🟡 Moderado", alocacao: "50% Renda Fixa · 30% FIIs + Ações · 10% ETFs Internacionais · 10% Caixa", desc: "Para quem quer crescimento sem abrir mão de estabilidade. O perfil mais comum." },
              { perfil: "🔴 Arrojado", alocacao: "30% Renda Fixa · 40% Ações + FIIs · 20% ETFs Int. (IVVB11, QQQ via BDR) · 10% Cripto", desc: "Para quem aceita quedas de 30-40% sem desesperar em troca de maior potencial no longo prazo." },
            ].map(({ perfil, alocacao, desc }) => (
              <div key={perfil} className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{perfil}</h3>
                <p className="text-xs text-invest font-medium mb-1">{alocacao}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          {/* Onde abrir conta */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Onde Abrir Conta em 2026: Melhores Corretoras para Iniciantes
          </h2>
          <p>
            A boa notícia é que as principais corretoras do Brasil são gratuitas para abrir e não cobram taxa de custódia para Tesouro Direto e ETFs. A escolha depende mais de interface e conteúdo educacional do que de custo:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {[
              { name: "Nubank (NuInvest)", desc: "Interface simples e intuitiva, CDB de liquidez diária a 100% CDI. Ideal para quem está começando do zero.", rating: "⭐⭐⭐⭐⭐" },
              { name: "XP Investimentos", desc: "Maior plataforma do Brasil. Mais opções de produtos e conteúdo educacional robusto para evoluir na jornada.", rating: "⭐⭐⭐⭐⭐" },
              { name: "Rico", desc: "Boa plataforma educacional, interface amigável. Ideal para iniciantes que querem aprender enquanto investem.", rating: "⭐⭐⭐⭐" },
              { name: "Banco Inter", desc: "Integrado com conta corrente. Praticidade para quem já usa o banco no dia a dia.", rating: "⭐⭐⭐⭐" },
            ].map((corretora, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <h4 className="font-bold">{corretora.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{corretora.desc}</p>
                <p className="text-sm mt-2">{corretora.rating}</p>
              </div>
            ))}
          </div>

          {/* Regra dos R$ 200/mês */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            A Regra dos R$ 200/mês: O Poder dos Juros Compostos
          </h2>
          <p>
            Parece pouco, mas R$ 200 por mês investidos com consistência ao longo dos anos constroem um patrimônio expressivo. A matemática dos <strong>juros compostos</strong> — onde você ganha juros sobre juros — é o maior aliado do investidor iniciante:
          </p>

          <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">10 anos (12% a.a.)</p>
              <AnimatedCounter target={46000} />
              <p className="text-xs text-muted-foreground mt-1">Investido: R$ 24.000</p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">20 anos (12% a.a.)</p>
              <AnimatedCounter target={192000} duration={2500} />
              <p className="text-xs text-muted-foreground mt-1">Investido: R$ 48.000</p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">30 anos (12% a.a.)</p>
              <AnimatedCounter target={693000} duration={3000} />
              <p className="text-xs text-muted-foreground mt-1">Investido: R$ 72.000</p>
            </div>
          </div>

          <div className="not-prose my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(var(--invest-color))] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>O segredo não é quanto você investe. É quanto tempo você mantém investido.</strong> Começar com R$ 50 hoje vale muito mais do que começar com R$ 500 daqui a 2 anos. Consistência supera valor.
              </p>
            </div>
          </div>

          {/* Resumo */}
          <div className="not-prose my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <h3 className="text-lg font-bold mb-3">📝 Resumo dos 5 Passos para Iniciantes</h3>
            <ul className="space-y-2 text-muted-foreground list-none pl-0">
              <li>▶ <strong>Passo 1:</strong> Descubra seu perfil — conservador, moderado ou arrojado</li>
              <li>▶ <strong>Passo 2:</strong> Monte a reserva de emergência ANTES de qualquer investimento</li>
              <li>▶ <strong>Passo 3:</strong> Defina objetivos com prazos e valores estimados</li>
              <li>▶ <strong>Passo 4:</strong> Entenda a diferença entre renda fixa e renda variável</li>
              <li>▶ <strong>Passo 5:</strong> Monte a carteira adequada ao seu perfil e revise a cada 6 meses</li>
            </ul>
          </div>

          {/* Aviso Legal */}
          <div className="not-prose my-8 p-6 bg-destructive/10 rounded-xl border border-destructive/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Aviso Legal Importante</h3>
                <p className="text-muted-foreground mb-0">
                  Este artigo tem fins <strong>educativos e informativos</strong>. Investimentos envolvem riscos e rentabilidade passada não garante resultados futuros. Sempre consulte um profissional financeiro certificado (CFP ou AAI) antes de tomar decisões de investimento.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
            <h3 className="text-xl font-bold mb-2">Qual perfil deu no seu quiz? 📊</h3>
            <p className="text-muted-foreground">Conservador, moderado ou arrojado? Conta nos comentários! 👇</p>
          </div>
        </div>

        <EditorialTake category="invest" title="Análise do Marcos: o maior erro do iniciante não é investir errado — é não investir">
          <p>
            Depois de anos acompanhando leitores que começaram a investir, o padrão é claro: quem começa com qualquer coisa — R$ 50 no Tesouro Selic, um CDB de liquidez diária — e mantém o hábito mensal, chega a um patrimônio relevante em 10 anos. Quem espera ter mais dinheiro para começar a investir "de verdade", simplesmente nunca começa.
          </p>
          <p className="mt-2">
            O quiz de perfil importa, mas não é definitivo — ele muda ao longo da vida. O que não pode mudar é o <strong>hábito do aporte mensal</strong>. Uma carteira imperfeita que cresce todo mês bate qualquer carteira "ideal" que fica parada. Para iniciantes em 2026: <strong>Tesouro Selic para reserva + CDB 100% CDI para o restante da renda fixa + IVVB11 para ter exposição internacional</strong>. Simples, barato e eficiente.
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "Tesouro Direto — Como Funciona e Tipos de Títulos",
              url: "https://www.tesourodireto.com.br/conheca/o-que-e-tesouro-direto.htm",
              publisher: "Tesouro Nacional / Tesouro Direto",
              accessedAt: "Maio 2026",
            },
            {
              title: "FGC — Proteção aos Depositantes e Investidores",
              url: "https://www.fgc.org.br/garantia-fgc/sobre-a-garantia-fgc",
              publisher: "Fundo Garantidor de Créditos (FGC)",
              accessedAt: "Maio 2026",
            },
            {
              title: "Suitability — API CVM nº 30/2021: Perfil do Investidor",
              url: "https://www.gov.br/cvm/pt-br/assuntos/noticias/2021/cvm-atualiza-regras-sobre-suitability",
              publisher: "Comissão de Valores Mobiliários (CVM)",
              accessedAt: "Maio 2026",
            },
            {
              title: "Guia de Fundos de Investimento Imobiliário (FIIs)",
              url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/fundos-de-investimento-imobiliario-fii.htm",
              publisher: "B3 — Bolsa do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "ETFs listados na B3 — Fundos de Índice",
              url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/etf/renda-variavel/etfs-listados.htm",
              publisher: "B3 — Bolsa do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Educação Financeira — Planejamento e Investimentos",
              url: "https://www.investidor.gov.br/menu/Menu_Investidor/planejamento_financeiro/planejamento_financeiro_introducao.html",
              publisher: "CVM — Portal do Investidor",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <BackNavigation category="invest" />
        <RelatedPosts currentSlug="carteira-investimentos-iniciantes-2026" />
        <CommentSection postId="carteira-investimentos-iniciantes-2026" postTitle="Carteira de Investimentos para Iniciantes 2026" />
      </article>
    </>
  );
};

export default CarteiraIniciantes2026;
