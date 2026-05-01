import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, AlertTriangle, ChevronRight, Zap, CheckCircle2, Target, PieChart } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import carteiraImg from "@/assets/carteira-investimentos-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
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
    trackArticleRead(
      "carteira-investimentos-iniciantes-2026",
      "Carteira de Investimentos para Iniciantes 2026: Guia Completo",
      "invest"
    );
  }, []);

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
      // Determine result
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
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Carteira de Investimentos para Iniciantes 2026: Monte a Sua do Zero em 5 Passos
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Não sabe por onde começar a investir? Este guia passo a passo mostra como montar uma carteira de investimentos do zero em 2026, com exemplos reais e valores acessíveis.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Fevereiro, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img fetchpriority="high"
          loading="eager"
          decoding="async" src={carteiraImg} alt="Carteira de Investimentos 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            A maior armadilha para quem quer começar a investir é a <strong>paralisia por análise</strong>. Existe tanto conteúdo contraditório na internet que muita gente simplesmente... não faz nada. E aí o dinheiro fica na poupança rendendo menos que a inflação. Em 2026, com <strong>R$ 50 já dá para ter uma carteira diversificada</strong>.
          </p>

          {/* Quiz de perfil */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <PieChart className="inline h-6 w-6 mr-2" />
            Passo 1: Descubra Seu Perfil de Investidor
          </h2>

          <div className="my-8 p-6 bg-card rounded-xl border-2 border-[hsl(var(--invest-color))]/50">
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

          {/* Reserva de Emergência */}
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <Target className="inline h-6 w-6 mr-2" />
            Passo 2: Monte Sua Reserva de Emergência PRIMEIRO
          </h2>

          <p>
            Antes de qualquer investimento, você precisa de <strong>3 a 6 meses de gastos</strong> guardados em local seguro e líquido.
          </p>

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <h3 className="text-lg font-bold mb-3">✅ Checklist: Antes de Investir</h3>
            <div className="space-y-3">
              {[
                "Reserva de emergência de 3-6 meses de gastos",
                "Dívidas de cartão de crédito quitadas",
                "Objetivos financeiros definidos com prazo",
                "Perfil de investidor identificado",
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[hsl(var(--invest-color))]" />
                  <span className="text-muted-foreground">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <p><strong>Onde guardar:</strong> Tesouro Selic (recomendação principal), CDB de liquidez diária em banco digital, ou conta remunerada do Nubank/Inter.</p>

          {/* Passo 3: Objetivos */}
      <AdInArticle />
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 3: Defina Seus Objetivos com Prazo
          </h2>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[hsl(var(--invest-color))]/20">
                  <th className="p-3 text-left font-bold border border-border">Objetivo</th>
                  <th className="p-3 text-left font-bold border border-border">Prazo</th>
                  <th className="p-3 text-left font-bold border border-border">Valor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reserva de emergência", "Imediato", "3-6x gastos mensais"],
                  ["Viagem", "1-2 anos", "R$ 10.000"],
                  ["Entrada apartamento", "5-10 anos", "R$ 80.000"],
                  ["Aposentadoria", "20-30 anos", "R$ 1.000.000+"],
                ].map(([obj, prazo, valor], idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="p-3 border border-border font-semibold">{obj}</td>
                    <td className="p-3 border border-border">{prazo}</td>
                    <td className="p-3 border border-border">{valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Passo 4: Classes de ativos */}
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 4: Entenda as Classes de Ativos
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-card rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-3 text-[hsl(var(--invest-color))]">Renda Fixa (previsível)</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>▶ Tesouro Direto</li>
                <li>▶ CDB, LCI, LCA</li>
                <li>▶ Debêntures</li>
              </ul>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-3 text-[hsl(var(--otaku-color))]">Renda Variável (potencial maior)</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>▶ Ações (Ibovespa)</li>
                <li>▶ Fundos Imobiliários (FIIs)</li>
                <li>▶ ETFs</li>
                <li>▶ Criptomoedas (alta volatilidade!)</li>
              </ul>
            </div>
          </div>

          {/* Passo 5: Carteiras por perfil - Donut Charts */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Passo 5: Modelos de Carteira por Perfil
          </h2>

          <div className="grid md:grid-cols-3 gap-8 my-8">
            <DonutChart segments={portfolios.conservador} label="Conservadora" />
            <DonutChart segments={portfolios.moderado} label="Moderada" />
            <DonutChart segments={portfolios.arrojado} label="Arrojada" />
          </div>

          {/* Corretoras */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Onde Abrir Conta em 2026
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { name: "Nubank (NuInvest)", desc: "Simples, intuitivo, zero taxa", rating: "⭐⭐⭐⭐⭐" },
              { name: "Rico", desc: "Boa plataforma educacional", rating: "⭐⭐⭐⭐" },
              { name: "XP Investimentos", desc: "Mais opções, para quem quer evoluir", rating: "⭐⭐⭐⭐⭐" },
              { name: "Inter", desc: "Integrado com conta corrente", rating: "⭐⭐⭐⭐" },
            ].map((corretora, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <h4 className="font-bold">{corretora.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{corretora.desc}</p>
                <p className="text-sm mt-2">{corretora.rating}</p>
              </div>
            ))}
          </div>

          {/* Regra dos R$ 200/mês - Animated Counter */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            A Regra dos R$ 200/mês
          </h2>

          <p>Parece pouco, mas veja o poder dos <strong>juros compostos</strong>:</p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">10 anos (12% a.a.)</p>
              <AnimatedCounter target={46000} />
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">20 anos (12% a.a.)</p>
              <AnimatedCounter target={192000} duration={2500} />
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">30 anos (12% a.a.)</p>
              <AnimatedCounter target={693000} duration={3000} />
            </div>
          </div>

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(var(--invest-color))] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>O segredo não é quanto você investe. É quanto tempo você mantém investido.</strong>
              </p>
            </div>
          </div>

          {/* Resumo */}
          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <h3 className="text-lg font-bold mb-3">📝 Resumo dos 5 Passos</h3>
            <ul className="space-y-2 text-muted-foreground list-none pl-0">
              <li>▶ <strong>Passo 1:</strong> Descubra seu perfil (conservador, moderado ou arrojado)</li>
              <li>▶ <strong>Passo 2:</strong> Monte a reserva de emergência ANTES de tudo</li>
              <li>▶ <strong>Passo 3:</strong> Defina objetivos com prazos claros</li>
              <li>▶ <strong>Passo 4:</strong> Entenda renda fixa vs variável</li>
              <li>▶ <strong>Passo 5:</strong> Monte a carteira adequada ao seu perfil</li>
            </ul>
          </div>

          {/* Aviso Legal */}
          <div className="my-8 p-6 bg-destructive/10 rounded-xl border border-destructive/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Aviso Legal Importante</h3>
                <p className="text-muted-foreground mb-0">
                  Este artigo tem fins <strong>educativos e informativos</strong>. Investimentos envolvem riscos.
                  Sempre consulte um profissional financeiro certificado. Rentabilidade passada não garante rentabilidade futura.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Qual perfil deu no seu quiz?</h3>
            <p className="text-muted-foreground">Conservador, moderado ou arrojado? Conta nos comentários! 👇</p>
          </div>
        </div>

        <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="carteira-investimentos-iniciantes-2026" />
        <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="carteira-investimentos-iniciantes-2026" />
      </article>
    </>
  );
};

export default CarteiraIniciantes2026;