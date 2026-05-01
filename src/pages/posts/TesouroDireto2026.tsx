import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, AlertTriangle, TrendingUp, Shield, Landmark, ChevronRight, Zap, Lock, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import tesouroDiretoImg from "@/assets/tesouro-direto-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const TesouroDireto2026 = () => {
  // Calculator state
  
  // Calculator state
  const [valorInicial, setValorInicial] = useState(1000);
  const [aporteMensal, setAporteMensal] = useState(200);
  const [prazoAnos, setPrazoAnos] = useState(2);
  const [taxaSelic, setTaxaSelic] = useState(13.25);


  const calcularRendimento = () => {
    const taxaMensal = taxaSelic / 100 / 12;
    const meses = prazoAnos * 12;
    let total = valorInicial;
    for (let i = 0; i < meses; i++) {
      total = total * (1 + taxaMensal) + aporteMensal;
    }
    const totalInvestido = valorInicial + aporteMensal * meses;
    const rendimentoBruto = total - totalInvestido;
    const ir = prazoAnos >= 2 ? 0.15 : prazoAnos >= 1 ? 0.175 : 0.225;
    const rendimentoLiquido = rendimentoBruto * (1 - ir);
    return {
      totalBruto: total,
      totalLiquido: totalInvestido + rendimentoLiquido,
      rendimentoLiquido,
      totalInvestido,
      aliquotaIR: ir * 100,
    };
  };

  const resultado = calcularRendimento();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);


  useEffect(() => {
    trackArticleRead("tesouro-direto-2026-guia-completo", "Tesouro Direto em 2026: Ainda Vale a Pena? Guia Completo Atualizado", "invest");
  }, []);
  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Tesouro Direto 2026</span>
        </nav>

        <BackNavigation category="invest" />

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Tesouro Direto em 2026: Ainda Vale a Pena? O Guia Completo Atualizado
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Descubra se o Tesouro Direto ainda é o melhor investimento para iniciantes em 2026. Comparamos taxas, rendimentos e estratégias para você não deixar dinheiro na mesa.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />15 de Fevereiro, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img fetchpriority="high"
          loading="eager"
          decoding="async" src={tesouroDiretoImg} alt="Tesouro Direto 2026 - Guia Completo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introdução */}
          <p className="lead text-xl text-muted-foreground">
            Se você já ouviu falar que "o Tesouro Direto é o investimento mais seguro do Brasil", provavelmente está certo.
            Mas <strong>seguro não significa o melhor</strong>. Em 2026, com a taxa Selic ainda em patamares elevados e novas opções
            surgindo no mercado, é hora de revisar essa crença e entender quando o Tesouro Direto faz sentido — e quando ele pode
            estar te custando dinheiro.
          </p>

          {/* Índice */}
          <div className="my-8 p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-[hsl(var(--invest-color))]" />
              Neste guia você vai aprender:
            </h3>
            <ul className="space-y-2 text-muted-foreground list-none pl-0">
              <li>▶ Os tipos de Tesouro disponíveis em 2026</li>
              <li>▶ Como a Selic impacta cada modalidade</li>
              <li>▶ Comparativo com CDB, LCI e fundos</li>
              <li>▶ Estratégias práticas para montar sua carteira</li>
              <li>▶ Erros que 90% dos iniciantes cometem</li>
            </ul>
          </div>

          {/* O que é */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <Landmark className="h-7 w-7 text-[hsl(var(--invest-color))]" />
            O Que É o Tesouro Direto
          </h2>

          <p>
            O Tesouro Direto é um programa do governo federal que permite ao cidadão comum <strong>emprestar dinheiro
            para o Brasil</strong> em troca de juros. É como ser "credor do governo" — e isso tem um nível de segurança
            impressionante: é <strong>garantido pela União Federal</strong>.
          </p>
          <p>
            Em termos simples: você compra um título, o governo usa esse dinheiro, e depois te devolve com juros.
          </p>

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(var(--invest-color))] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>Por que isso importa em 2026?</strong> Com a inflação ainda pressionada e a Selic rodando acima de 13% ao ano,
                os títulos pós-fixados do Tesouro se tornaram extremamente competitivos. Um Tesouro Selic 2029, por exemplo,
                rende próximo de 100% da Selic com liquidez diária — o que é raro em qualquer mercado do mundo.
              </p>
            </div>
          </div>

          {/* 3 Tipos */}
          <AdLeaderboard className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Os 3 Tipos Principais e Qual Escolher em 2026
          </h2>

          {/* Timeline visual */}
          <div className="grid gap-6 my-8">
            {[
              {
                icon: <Lock className="h-8 w-8" />,
                title: "1. Tesouro Selic (pós-fixado)",
                points: [
                  "Acompanha a taxa Selic diariamente",
                  "Ideal para reserva de emergência",
                  "Liquidez D+1 (dinheiro cai em 1 dia útil)",
                ],
                best: "Quem quer segurança e liquidez",
                color: "hsl(var(--invest-color))",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "2. Tesouro Prefixado",
                points: [
                  "Taxa travada no momento da compra",
                  "Risco de marcação a mercado se vender antes",
                  "Interessante quando a Selic está prestes a cair",
                ],
                best: "Quem acredita que os juros vão diminuir",
                color: "hsl(45 100% 50%)",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "3. Tesouro IPCA+ (híbrido)",
                points: [
                  "Parte da rentabilidade é o IPCA (inflação)",
                  "Parte é uma taxa fixa (ex: IPCA + 6,5% ao ano)",
                  "Protege contra a inflação no longo prazo",
                ],
                best: "Aposentadoria e objetivos de 10+ anos",
                color: "hsl(var(--primary))",
              },
            ].map((tipo, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: tipo.color }} />
                <div className="flex items-start gap-4 pl-4">
                  <div style={{ color: tipo.color }} className="flex-shrink-0 mt-1">{tipo.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{tipo.title}</h3>
                    <ul className="space-y-1 text-muted-foreground mb-3">
      <AdInArticle />
                      {tipo.points.map((p, i) => <li key={i}>• {p}</li>)}
                    </ul>
                    <p className="text-sm font-semibold" style={{ color: tipo.color }}>
                      ⭐ Melhor para: {tipo.best}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabela IR */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            A Tabela de Imposto de Renda
          </h2>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[hsl(var(--invest-color))]/20">
                  <th className="p-3 text-left font-bold border border-border">Prazo do Investimento</th>
                  <th className="p-3 text-left font-bold border border-border">Alíquota de IR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Até 180 dias", "22,5%"],
                  ["De 181 a 360 dias", "20%"],
                  ["De 361 a 720 dias", "17,5%"],
                  ["Acima de 720 dias", "15%"],
                ].map(([prazo, aliquota], idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="p-3 border border-border">{prazo}</td>
                    <td className="p-3 border border-border font-semibold">{aliquota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-[hsl(25,95%,55%)]/10 rounded-xl border border-[hsl(25,95%,55%)]/30">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(25,95%,55%)] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>Dica de ouro:</strong> Sempre calcule o rendimento <strong>líquido</strong>, não bruto.
                Um CDB que rende 110% do CDI pode ser mais vantajoso que um Tesouro Selic dependendo do prazo.
              </p>
            </div>
          </div>

          {/* Comparativo */}
          <AdRectangle className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Comparativo Real: Tesouro vs Concorrentes em 2026
          </h2>

          <p>Imagine <strong>R$ 10.000 investidos por 2 anos</strong> com Selic a 13,25%:</p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { name: "Tesouro Selic", value: "R$ 12.650", icon: "🏛️", highlight: false },
              { name: "CDB 110% CDI", value: "R$ 12.780", icon: "🏦", highlight: false },
              { name: "LCI 90% CDI", value: "R$ 12.820", icon: "✅", highlight: true },
              { name: "Poupança", value: "R$ 11.730", icon: "❌", highlight: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border ${
                  item.highlight
                    ? "border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10"
                    : item.name === "Poupança"
                      ? "border-destructive/30 bg-destructive/5"
                      : "border-border bg-card"
                }`}
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className={`text-2xl font-bold mt-1 ${item.name === "Poupança" ? "text-destructive" : ""}`}>
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">(líquido de IR)</p>
              </div>
            ))}
          </div>

          {/* ⚡ CALCULADORA INTERATIVA */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            🧮 Calculadora: Quanto Rende no Tesouro Selic?
          </h2>

          <div className="my-8 p-6 bg-card rounded-xl border-2 border-[hsl(var(--invest-color))]/50">
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Valor Inicial: {formatCurrency(valorInicial)}
                </label>
                <Slider
                  value={[valorInicial]}
                  onValueChange={(v) => setValorInicial(v[0])}
                  min={100}
                  max={100000}
                  step={100}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Aporte Mensal: {formatCurrency(aporteMensal)}
                </label>
                <Slider
                  value={[aporteMensal]}
                  onValueChange={(v) => setAporteMensal(v[0])}
                  min={0}
                  max={5000}
                  step={50}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Prazo: {prazoAnos} {prazoAnos === 1 ? "ano" : "anos"}
                </label>
                <Slider
                  value={[prazoAnos]}
                  onValueChange={(v) => setPrazoAnos(v[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Taxa Selic: {taxaSelic.toFixed(2)}% ao ano
                </label>
                <Slider
                  value={[taxaSelic]}
                  onValueChange={(v) => setTaxaSelic(v[0])}
                  min={5}
                  max={20}
                  step={0.25}
                  className="w-full"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-4 p-4 bg-muted rounded-xl">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Total Investido</p>
                  <p className="text-lg font-bold">{formatCurrency(resultado.totalInvestido)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Rendimento Líquido</p>
                  <p className="text-lg font-bold text-[hsl(var(--invest-color))]">
                    {formatCurrency(resultado.rendimentoLiquido)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Total Líquido</p>
                  <p className="text-xl font-bold text-[hsl(var(--invest-color))]">
                    {formatCurrency(resultado.totalLiquido)}
                  </p>
                  <p className="text-xs text-muted-foreground">IR: {resultado.aliquotaIR}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estratégia Escada */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Estratégia Inteligente: A Escada do Tesouro
          </h2>

          <p>Uma técnica usada por investidores experientes é montar uma "escada" de vencimentos:</p>

          <div className="flex flex-col gap-4 my-8">
            {[
              { label: "Reserva de emergência", desc: "Tesouro Selic (100% CDI, liquidez total)", pct: 40 },
              { label: "Médio prazo (2-5 anos)", desc: "Tesouro IPCA+ 2029", pct: 35 },
              { label: "Longo prazo (10+ anos)", desc: "Tesouro IPCA+ 2035 ou 2045", pct: 25 },
            ].map((step, idx) => (
              <div key={idx} className="p-4 bg-card rounded-xl border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{step.label}</span>
                  <span className="text-sm text-[hsl(var(--invest-color))] font-bold">{step.pct}%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all duration-1000"
                    style={{ width: `${step.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 5 Erros */}
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(25,95%,55%)] pl-4">
            ⚠️ Os 5 Erros Mais Comuns no Tesouro Direto
          </h2>

          <div className="grid gap-3 my-8">
            {[
              "Vender antes do vencimento sem entender a marcação a mercado",
              "Colocar reserva de emergência em prefixado (perde dinheiro se vender antes)",
              "Ignorar a taxa de custódia da B3 (0,20% ao ano — pequena, mas existe)",
              "Não reinvestir os juros semestrais do IPCA+",
              "Achar que é tudo igual — cada tipo tem risco e objetivo diferente",
            ].map((erro, idx) => (
              <div key={idx} className="p-4 bg-[hsl(25,95%,55%)]/10 rounded-xl border border-[hsl(25,95%,55%)]/20 flex items-start gap-3">
                <span className="text-[hsl(25,95%,55%)] font-bold text-lg flex-shrink-0">#{idx + 1}</span>
                <p className="text-muted-foreground mb-0">{erro}</p>
              </div>
            ))}
          </div>

          {/* Conclusão */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Conclusão: Vale a Pena em 2026?
          </h2>

          <p>
            <strong>Sim, mas com estratégia.</strong> O Tesouro Direto é a base de qualquer carteira sólida,
            especialmente para iniciantes. Em 2026, com juros altos, o Tesouro Selic se destaca para reserva de emergência,
            enquanto o IPCA+ brilha para quem pensa no longo prazo.
          </p>

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <h3 className="text-lg font-bold mb-3">📝 Resumo do Artigo</h3>
            <ul className="space-y-2 text-muted-foreground list-none pl-0">
              <li>▶ O Tesouro Direto é garantido pelo Governo Federal — máxima segurança</li>
              <li>▶ Tesouro Selic é ideal para reserva de emergência com liquidez D+1</li>
              <li>▶ Tesouro IPCA+ protege contra inflação no longo prazo</li>
              <li>▶ Compare sempre o rendimento líquido (após IR) com CDB e LCI</li>
              <li>▶ Comece com R$ 30 — o importante é começar</li>
            </ul>
          </div>

          <p>
            <strong>Próximo passo:</strong> Acesse o site do Tesouro Direto, crie sua conta em uma corretora como
            Nubank, XP ou Rico, e comece com R$ 30. Sim, trinta reais já são suficientes para começar.
          </p>

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
            <h3 className="text-xl font-bold mb-2">Você já investe no Tesouro Direto?</h3>
            <p className="text-muted-foreground">
              Qual tipo é o seu favorito? Selic, Prefixado ou IPCA+? Conta pra gente nos comentários! 👇
            </p>
          </div>
        </div>

        <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="tesouro-direto-2026-guia-completo" />
        <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="tesouro-direto-2026-guia-completo" postTitle="Tesouro Direto em 2026: Ainda Vale a Pena? Guia Completo Atualizado" />
      </article>
    </>
  );
};

export default TesouroDireto2026;