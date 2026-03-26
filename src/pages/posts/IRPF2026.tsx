import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Zap, AlertTriangle, FileText, CheckCircle, Timer } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import irpfImg from "@/assets/irpf-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const IRPF2026 = () => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  
  // Calculator: simplified vs complete
  const [rendaTributavel, setRendaTributavel] = useState(80000);
  const [despesasSaude, setDespesasSaude] = useState(5000);
  const [despesasEducacao, setDespesasEducacao] = useState(3500);
  const [dependentes, setDependentes] = useState(1);
  const [pgbl, setPgbl] = useState(0);

  // Countdown to May 31, 2026
  const getCountdown = () => {
    const deadline = new Date("2026-05-29T23:59:59");
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const countdown = getCountdown();

  // Calculator logic
  const calcularModelos = () => {
    const deducaoSimplificada = Math.min(rendaTributavel * 0.2, 16754.34);
    const baseSimplificado = rendaTributavel - deducaoSimplificada;

    const deducaoDependentes = dependentes * 2275.08;
    const deducaoEducacaoLimitada = Math.min(despesasEducacao, 3561.50 * (1 + dependentes));
    const deducaoPgblLimitada = Math.min(pgbl, rendaTributavel * 0.12);
    const totalDeducoesCompleto = despesasSaude + deducaoEducacaoLimitada + deducaoDependentes + deducaoPgblLimitada;
    const baseCompleto = rendaTributavel - totalDeducoesCompleto;

    const calcularIR = (base: number) => {
      if (base <= 26963.20) return 0;
      if (base <= 33919.80) return (base - 26963.20) * 0.075;
      if (base <= 45012.60) return 521.74 + (base - 33919.80) * 0.15;
      if (base <= 55976.16) return 2183.18 + (base - 45012.60) * 0.225;
      return 4649.49 + (base - 55976.16) * 0.275;
    };

    return {
      irSimplificado: Math.max(0, calcularIR(baseSimplificado)),
      irCompleto: Math.max(0, calcularIR(baseCompleto)),
      deducaoSimplificada,
      totalDeducoesCompleto,
      melhor: calcularIR(baseCompleto) < calcularIR(baseSimplificado) ? "completo" : "simplificado",
    };
  };

  const resultado = calcularModelos();
  const formatCurrency = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  const toggleDoc = (doc: string) => setCheckedDocs(prev => ({ ...prev, [doc]: !prev[doc] }));

  const documentos = [
    "Informe de Rendimentos (empresa/empregador)",
    "Informe de Rendimentos bancários (CDB, poupança, etc.)",
    "Informe de Rendimentos da corretora (ações, FIIs, cripto)",
    "Comprovantes de despesas médicas (notas fiscais)",
    "Comprovantes de despesas com educação",
    "Recibos de aluguel pago ou recebido",
    "Documentos de compra/venda de imóveis",
    "Comprovante de contribuição ao PGBL",
    "Comprovante de pensão alimentícia judicial",
    "CPF dos dependentes",
  ];

  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;


  useEffect(() => {
    trackArticleRead("irpf-2026-guia-declarar-pagar-menos", "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto", "invest");
  }, []);
  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">IRPF 2026</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto Legalmente
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Tudo que você precisa saber para declarar o Imposto de Renda 2026 corretamente, evitar a malha fina e usar deduções legais para pagar menos IR.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 19 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 16 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <img fetchpriority="high" src={irpfImg} alt="IRPF 2026 Imposto de Renda" className="w-full rounded-2xl mb-8 aspect-video object-cover" loading="eager" />

        {/* Countdown */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-8 text-center">
          <h3 className="flex items-center justify-center gap-2 font-bold text-destructive mb-4">
            <Timer className="h-5 w-5" /> Prazo Final de Entrega do IRPF 2026
          </h3>
          <div className="flex justify-center gap-4">
            {[
              { label: "Dias", value: countdown.days },
              { label: "Horas", value: countdown.hours },
              { label: "Minutos", value: countdown.minutes },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-4 min-w-[80px]">
                <p className="text-3xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Prazo final: 29 de maio de 2026 | Multa por atraso: R$ 165,74 mínimo</p>
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            O Imposto de Renda assombra muita gente, mas a verdade é que a maioria dos problemas com a Receita Federal acontece por <strong>desconhecimento, não má-fé</strong>. Em 2026, com o IRPF cada vez mais cruzando dados com bancos, corretoras, planos de saúde e até iFood, declarar corretamente virou questão de sobrevivência financeira.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mas tem um lado positivo: existem formas <strong>100% legais de pagar menos imposto</strong>. E a maioria das pessoas simplesmente não usa.
          </p>
        </div>

        {/* Quem deve declarar */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Quem é Obrigado a Declarar em 2026?</h2>
          <div className="space-y-3 mb-4">
            {[
              "Recebeu rendimentos tributáveis acima de R$ 30.639,90",
              "Recebeu rendimentos isentos acima de R$ 200.000",
              "Teve ganho de capital na venda de bens",
              "Realizou operações em bolsa de valores",
              "Teve bens no valor acima de R$ 800.000",
              "Recebeu mais de R$ 142.798,50 em atividade rural",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-[hsl(var(--invest-color))]">▶</span> {item}
              </div>
            ))}
          </div>
        </section>

        {/* Deduções */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">As Deduções Que Mais Gente Esquece</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Dependentes", desc: "Cada dependente reduz a base em até R$ 2.275,08/ano. Filhos, cônjuge sem renda, pais dependentes.", icon: "👨‍👩‍👧" },
              { title: "Saúde (SEM LIMITE)", desc: "Consultas, plano de saúde, dentista, psicólogo, fisioterapeuta. Tudo dedutível SEM LIMITE.", icon: "🏥" },
              { title: "Educação", desc: "Limite de R$ 3.561,50/pessoa. Ensino fundamental, médio, graduação e pós. Inglês e cursinho NÃO.", icon: "📚" },
              { title: "PGBL", desc: "Contribuições deduzidas até 12% da renda bruta tributável. Pode gerar restituição significativa.", icon: "💰" },
              { title: "Pensão Alimentícia", desc: "Se paga com base em acordo judicial, o valor total é dedutível.", icon: "⚖️" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <p className="text-2xl mb-2">{item.icon}</p>
                <h3 className="font-bold mb-1 text-[hsl(45,100%,50%)]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist de Documentos */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Checklist de Documentos Necessários</h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">Progresso: {checkedCount}/{documentos.length} documentos</p>
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-[hsl(var(--invest-color))] transition-all" style={{ width: `${(checkedCount / documentos.length) * 100}%` }} />
              </div>
            </div>
            <div className="space-y-3">
              {documentos.map((doc, i) => (
                <label key={i} className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={!!checkedDocs[doc]} onChange={() => toggleDoc(doc)} className="mt-1 accent-[hsl(var(--invest-color))]" />
                  <span className={`text-sm transition-all ${checkedDocs[doc] ? 'text-muted-foreground line-through' : 'text-foreground'}`}>{doc}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Calculadora Simplificado vs Completo */}
        <section className="mb-10">
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Calculadora: Simplificado ou Completo?</h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium block mb-1">Renda Tributável Anual</label>
                <input type="number" value={rendaTributavel} onChange={e => setRendaTributavel(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Despesas com Saúde (anual)</label>
                <input type="number" value={despesasSaude} onChange={e => setDespesasSaude(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Despesas com Educação (anual)</label>
                <input type="number" value={despesasEducacao} onChange={e => setDespesasEducacao(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Número de Dependentes</label>
                <input type="number" value={dependentes} onChange={e => setDependentes(Number(e.target.value))} min={0} max={10} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1">Contribuição PGBL (anual)</label>
                <input type="number" value={pgbl} onChange={e => setPgbl(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className={`rounded-xl p-5 border-2 ${resultado.melhor === 'simplificado' ? 'border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10' : 'border-border bg-muted/50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Simplificado</h3>
                  {resultado.melhor === 'simplificado' && <span className="text-xs bg-[hsl(var(--invest-color))] text-white px-2 py-0.5 rounded-full">Recomendado</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-1">Dedução: {formatCurrency(resultado.deducaoSimplificada)}</p>
                <p className="text-2xl font-bold">IR: {formatCurrency(resultado.irSimplificado)}</p>
              </div>
              <div className={`rounded-xl p-5 border-2 ${resultado.melhor === 'completo' ? 'border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10' : 'border-border bg-muted/50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Completo</h3>
                  {resultado.melhor === 'completo' && <span className="text-xs bg-[hsl(var(--invest-color))] text-white px-2 py-0.5 rounded-full">Recomendado</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-1">Deduções: {formatCurrency(resultado.totalDeducoesCompleto)}</p>
                <p className="text-2xl font-bold">IR: {formatCurrency(resultado.irCompleto)}</p>
              </div>
            </div>
            {resultado.melhor === 'completo' && (
              <p className="text-sm text-[hsl(var(--invest-color))] text-center">
                💡 Você economiza {formatCurrency(resultado.irSimplificado - resultado.irCompleto)} usando o modelo completo!
              </p>
            )}
          </div>
        </section>

        {/* Investimentos e IR */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Investimentos e IR: O Que Declarar</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[hsl(var(--invest-color))]/20">
                  <th className="text-left p-3">Tipo</th>
                  <th className="text-left p-3">Tributação</th>
                  <th className="text-left p-3">Observação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium">Renda Fixa</td><td className="p-3">IR retido na fonte</td><td className="p-3 text-muted-foreground">Apenas informar valores</td></tr>
                <tr><td className="p-3 font-medium">Ações (comum)</td><td className="p-3">15% sobre lucro</td><td className="p-3 text-muted-foreground">Vendas até R$ 20k/mês isentas</td></tr>
                <tr><td className="p-3 font-medium">Ações (day trade)</td><td className="p-3">20% sobre lucro</td><td className="p-3 text-muted-foreground">DARF mensal obrigatório</td></tr>
                <tr><td className="p-3 font-medium">FIIs (dividendos)</td><td className="p-3 text-green-500">Isentos para PF</td><td className="p-3 text-muted-foreground">Ganho na venda: 20%</td></tr>
                <tr><td className="p-3 font-medium">Criptomoedas</td><td className="p-3">Vendas &gt; R$ 35k/mês</td><td className="p-3 text-muted-foreground">Declarar como "outros bens"</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Malha Fina - Alert Boxes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Como Evitar a Malha Fina</h2>
          <div className="space-y-3">
            {[
              "Informações inconsistentes entre o que você declara e o que a empresa/banco informou",
              "Dedução de saúde sem nota fiscal — a Receita cruza com a DMED",
              "Não declarar investimentos — bancos e corretoras informam tudo à Receita",
              "Valor de imóvel divergente do registro municipal (IPTU)",
              "Esquecer rendimento de aluguel",
            ].map((item, i) => (
              <div key={i} className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline de Datas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Prazos Importantes IRPF 2026</h2>
          <div className="space-y-0 relative ml-4">
            <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-border" />
            {[
              { date: "Março 2026", event: "Abertura do programa IRPF 2026", icon: "📂" },
              { date: "Março 2026", event: "Receita disponibiliza declaração pré-preenchida", icon: "📋" },
              { date: "29 Mai 2026", event: "Prazo final de entrega", icon: "⏰" },
              { date: "Junho 2026", event: "Primeiro lote de restituição", icon: "💰" },
              { date: "Jul-Dez 2026", event: "Lotes subsequentes de restituição", icon: "📅" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start pb-6 relative">
                <div className="w-7 h-7 rounded-full bg-[hsl(var(--invest-color))]/20 border-2 border-[hsl(var(--invest-color))] flex items-center justify-center text-xs z-10">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold">{item.date}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">FAQ: Perguntas Mais Comuns</h2>
          <Accordion type="multiple" className="space-y-2">
            {[
              { q: "Posso declarar despesas com saúde do meu dependente?", a: "Sim, desde que o dependente esteja incluído na sua declaração. As despesas médicas são totalmente dedutíveis, sem limite de valor." },
              { q: "Preciso declarar minha conta de criptomoedas?", a: "Sim. Mesmo que não tenha vendido, criptomoedas devem ser declaradas na ficha 'Bens e Direitos' pelo valor de aquisição." },
              { q: "O que acontece se atrasar a declaração?", a: "Multa mínima de R$ 165,74, podendo chegar a 20% do imposto devido. Além disso, seu CPF pode ficar irregular." },
              { q: "Gastos com cursinho e inglês são dedutíveis?", a: "Não. Apenas ensino fundamental, médio, técnico, graduação e pós-graduação são dedutíveis em educação." },
              { q: "Vendi ações com lucro abaixo de R$ 20.000/mês. Preciso pagar IR?", a: "Não. Vendas de ações (operações comuns) até R$ 20.000/mês são isentas. Mas day trade não tem essa isenção." },
              { q: "MEI precisa declarar como pessoa física?", a: "Sim, se você se enquadrar nos critérios de obrigatoriedade. O rendimento do MEI deve ser declarado." },
              { q: "Posso incluir meus pais como dependentes?", a: "Sim, desde que eles sejam economicamente dependentes de você e tenham rendimentos dentro do limite permitido." },
              { q: "FIIs pagam IR sobre dividendos?", a: "Não. Dividendos de FIIs são isentos de IR para pessoa física. Porém, o ganho de capital na venda das cotas é tributado em 20%." },
              { q: "Como declarar aluguel recebido?", a: "Aluguel recebido é rendimento tributável. Deve ser informado mês a mês e, se acima da faixa de isenção, gera carnê-leão." },
              { q: "Qual a diferença entre PGBL e VGBL no IR?", a: "PGBL permite deduzir até 12% da renda bruta no IR. VGBL não tem dedução, mas o IR incide apenas sobre os rendimentos no resgate." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-sm font-bold hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Dica Final */}
        <section className="mb-10">
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5">
            <p className="flex items-start gap-2 text-sm">
              <Zap className="h-5 w-5 text-[hsl(var(--invest-color))] flex-shrink-0 mt-0.5" />
              <span><strong>Dica Final:</strong> Use o Programa IRPF 2026 da Receita Federal com a declaração pré-preenchida. Ele preenche automaticamente muitos campos e reduz erros. Confira cada campo antes de enviar.</span>
            </p>
          </div>
        </section>

        {/* Conclusão */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Prazo final do IRPF 2026: 29 de maio — multa mínima de R$ 165,74 por atraso",
                "Despesas com saúde são dedutíveis SEM LIMITE — guarde todas as notas",
                "PGBL pode reduzir até 12% da base de cálculo — investigue se vale para você",
                "Compare sempre simplificado vs completo — use a calculadora acima",
                "A Receita cruza dados com bancos, corretoras e planos — declare tudo corretamente",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["IRPF 2026", "imposto de renda", "declaração IR", "malha fina", "deduções", "restituição"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation category="invest" />

        <RelatedPosts currentSlug="irpf-2026-guia-declarar-pagar-menos" />
        <CommentSection postId="28" postTitle="IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto" />
      </article>
    </>
  );
};

export default IRPF2026;
