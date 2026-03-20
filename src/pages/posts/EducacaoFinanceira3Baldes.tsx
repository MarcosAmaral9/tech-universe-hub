import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Zap, Brain, Smartphone, CheckCircle2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import metodo3BaldesImg from "@/assets/metodo-3-baldes.webp";

// Bucket Calculator
const BucketCalculator = () => {
  const [salary, setSalary] = useState(3000);
  const necessidades = salary * 0.55;
  const investimentos = salary * 0.25;
  const qualidade = salary * 0.20;


  useEffect(() => {
    trackArticleRead("educacao-financeira-metodo-3-baldes", "Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo", "invest");
  }, []);
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Calculadora dos 3 Baldes
      </h3>
      <label className="text-sm text-muted-foreground mb-2 block">Seu salário mensal: <strong className="text-foreground">R$ {salary.toLocaleString("pt-BR")}</strong></label>
      <Slider min={1000} max={30000} step={100} value={[salary]} onValueChange={v => setSalary(v[0])} className="mb-6" />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Necessidades (55%)", value: necessidades, color: "hsl(var(--invest-color))", emoji: "🏠" },
          { label: "Investimentos (25%)", value: investimentos, color: "hsl(45,100%,50%)", emoji: "📈" },
          { label: "Qualidade de Vida (20%)", value: qualidade, color: "hsl(280,100%,65%)", emoji: "🎉" },
        ].map((b, i) => (
          <div key={i} className="text-center p-4 rounded-xl border border-border bg-background">
            <div className="text-3xl mb-2">{b.emoji}</div>
            <div className="text-xs text-muted-foreground mb-1">{b.label}</div>
            <div className="text-2xl font-bold" style={{ color: b.color }}>R$ {b.value.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Behavior Quiz
const BehaviorQuiz = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const questions = [
    { q: "Quando recebe o salário, você:", a: ["Paga as contas e gasta o resto", "Guarda um pouco e gasta o resto", "Investe primeiro e vive com o que sobra"] },
    { q: "Compra não planejada de R$ 300:", a: ["Compro na hora", "Penso um pouco mas compro", "Espero 24h antes de decidir"] },
    { q: "Fim do mês:", a: ["Sempre no vermelho", "Empata", "Sempre sobra algo"] },
    { q: "Investimentos:", a: ["Não invisto nada", "Só poupança", "Tenho carteira diversificada"] },
    { q: "Controle financeiro:", a: ["Não faço nenhum", "Anoto às vezes", "Uso app ou planilha todo mês"] },
  ];

  const result = useMemo(() => {
    if (answers.length < 5) return null;
    const score = answers.reduce((a, b) => a + b, 0);
    if (score <= 5) return { title: "Gastador Impulsivo 🔴", desc: "Você precisa urgentemente do Método dos 3 Baldes. A boa notícia: é o perfil que mais se beneficia dele!" };
    if (score <= 10) return { title: "Em Transição 🟡", desc: "Você tem noções mas falta sistema. Os 3 Baldes vão organizar o que já está quase funcionando." };
    return { title: "Disciplinado 🟢", desc: "Você já tem bons hábitos! Os 3 Baldes podem otimizar ainda mais sua distribuição." };
  }, [answers]);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Brain className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Teste de Comportamento Financeiro
      </h3>
      {questions.map((q, qi) => (
        <div key={qi} className="mb-4">
          <p className="text-sm font-medium mb-2">{qi + 1}. {q.q}</p>
          <div className="grid gap-2">
            {q.a.map((a, ai) => (
              <button key={ai} onClick={() => { const n = [...answers]; n[qi] = ai; setAnswers(n); }}
                className={`text-left text-sm px-4 py-2 rounded-lg border transition-all ${answers[qi] === ai ? "border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10" : "border-border hover:border-muted-foreground"}`}>
                {a}
              </button>
            ))}
          </div>
        </div>
      ))}
      {result && (
        <div className="mt-4 p-4 rounded-xl bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30">
          <h4 className="font-bold text-lg">{result.title}</h4>
          <p className="text-sm text-muted-foreground">{result.desc}</p>
        </div>
      )}
    </div>
  );
};

const EducacaoFinanceira3Baldes = () => {

  const timelineSteps = [
    { period: "Mês 1-3", title: "Mapeamento", desc: "Ajuste inicial. Vai ser desconfortável." },
    { period: "Mês 3-6", title: "Automático", desc: "Sistema funciona. Você para de pensar em dinheiro." },
    { period: "Mês 6-12", title: "Reserva", desc: "Reserva de emergência formada." },
    { period: "Ano 2-3", title: "Crescimento", desc: "Juros compostos fazem diferença visível." },
    { period: "Ano 5", title: "Liberdade", desc: "Posição financeira top 20%." },
  ];

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Método dos 3 Baldes</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Educação Financeira Para Quem Sempre Gastou Tudo: O Método dos 3 Baldes
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Se você chega no fim do mês sem dinheiro, este artigo é para você. O Método dos 3 Baldes é simples, funciona para qualquer salário e transforma sua relação com o dinheiro.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 21 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 11 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img fetchpriority="high" src={metodo3BaldesImg} alt="Método dos 3 Baldes - Educação Financeira" className="w-full aspect-video object-cover" loading="eager" />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Existe uma mentira que o sistema financeiro te vende: que você precisa ganhar mais para economizar. <strong>Não é verdade.</strong> A maioria dos problemas financeiros não é de renda — é de comportamento. E comportamento pode ser mudado com o sistema certo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O Método dos 3 Baldes é inspirado nas pesquisas de finanças comportamentais e adaptado para a realidade brasileira de 2026.
          </p>
        </div>

        {/* Ciência */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Por Que Você Gasta Tudo Que Ganha</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Adaptação Hedônica", desc: "Seu cérebro se adapta ao conforto. Salário sobe? Gastos sobem junto.", emoji: "🧠" },
              { title: "Mental Accounting", desc: "Salário é 'sagrado', bônus é para gastar. Dinheiro é dinheiro.", emoji: "💰" },
              { title: "Viés do Presente", desc: "Prazer imediato > recompensa futura. Por isso largar o café caro é difícil.", emoji: "⏰" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold mb-2 text-[hsl(45,100%,50%)]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O Método */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">O Método dos 3 Baldes</h2>
          <div className="space-y-4 mb-6">
            {[
              { balde: "Balde 1: NECESSIDADES", pct: "50-60%", desc: "Moradia, alimentação, transporte, contas obrigatórias. Se está acima de 60%, você tem um problema estrutural.", color: "hsl(var(--invest-color))" },
              { balde: "Balde 2: INVESTIMENTOS", pct: "20-30%", desc: "Sagrado. Primeiro a ser preenchido. Configure transferência automática no dia do salário.", color: "hsl(45,100%,50%)" },
              { balde: "Balde 3: QUALIDADE DE VIDA", pct: "10-20%", desc: "Lazer, restaurantes, Netflix. Gaste TUDO sem culpa. Quando acabou, acabou.", color: "hsl(280,100%,65%)" },
            ].map((item, i) => (
              <div key={i} className="bg-card border-2 rounded-xl p-5" style={{ borderColor: item.color + "40" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold" style={{ color: item.color }}>{item.balde}</h3>
                  <span className="text-2xl font-bold" style={{ color: item.color }}>{item.pct}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <BucketCalculator />

        {/* Implementation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Como Implementar em 3 Passos</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Mapeie", desc: "Anote TODOS os gastos do último mês. Use o extrato do banco, não a memória — ela mente." },
              { step: "2", title: "Categorize", desc: "Classifique cada gasto em Necessidade, Investimento ou Qualidade de Vida." },
              { step: "3", title: "Automatize", desc: "No dia do salário: X% vai para investimento, X% fica para gastos fixos, o resto é para curtir." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--invest-color))]/20 border-2 border-[hsl(var(--invest-color))] flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h4 className="font-bold text-[hsl(45,100%,50%)]">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 24h Rule */}
        <section className="mb-10">
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
              A Regra dos 24 Horas
            </h3>
            <p className="text-sm text-muted-foreground">
              Antes de qualquer compra acima de <strong>R$ 200</strong> fora do planejamento: espere 24 horas. Você vai descobrir que <strong>70% das vontades passam sozinhas</strong>. As que ficam geralmente valem a pena.
            </p>
          </div>
        </section>

        {/* Apps */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Ferramentas de Controle Financeiro 2026</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Mobills", desc: "Melhor app brasileiro de controle financeiro", icon: "📱" },
              { name: "Organizze", desc: "Ótimo para famílias", icon: "👨‍👩‍👧‍👦" },
              { name: "Planilha do Google", desc: "Se você prefere controle manual", icon: "📊" },
              { name: "Notion", desc: "Para quem é nerd e quer customizar tudo", icon: "🔧" },
            ].map((app, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                <span className="text-3xl">{app.icon}</span>
                <div>
                  <h4 className="font-bold">{app.name}</h4>
                  <p className="text-sm text-muted-foreground">{app.desc}</p>
                </div>
                <Smartphone className="h-4 w-4 text-muted-foreground ml-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* Behavior Quiz */}
        <BehaviorQuiz />

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Linha do Tempo Realista</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[hsl(var(--invest-color))]/30" />
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative pl-12 pb-6">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[hsl(var(--invest-color))] border-4 border-background" />
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-[hsl(var(--invest-color))] font-mono">{step.period}</span>
                  <h4 className="font-bold text-[hsl(45,100%,50%)]">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
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
                "Problemas financeiros são 80% comportamento, 20% conhecimento",
                "O Método dos 3 Baldes: Necessidades (55%), Investimentos (25%), Qualidade de Vida (20%)",
                "Automatize tudo — tire o esforço da equação",
                "A Regra dos 24h elimina 70% das compras impulsivas",
                "Em 5 anos, você estará numa posição financeira que 80% das pessoas nunca alcançam",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["educação financeira", "método 3 baldes", "organizar finanças", "guardar dinheiro", "finanças pessoais"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation categoryPath="/financas" categoryLabel="Finanças" />

        <RelatedPosts currentSlug="educacao-financeira-metodo-3-baldes" />
        <CommentSection postId="30" postTitle="Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo" />
      </article>
    </>
  );
};

export default EducacaoFinanceira3Baldes;
