import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, TrendingDown, CheckCircle2, AlertTriangle, BarChart3, Target, ArrowDownRight, Percent, Landmark, PiggyBank } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/selic-cair-2026.webp";

const TIMELINE_DATA = [
  { date: "Ago 2023", taxa: 13.25, evento: "Início do ciclo de cortes anterior" },
  { date: "Jan 2024", taxa: 11.75, evento: "Cortes continuam" },
  { date: "Mai 2024", taxa: 10.50, evento: "Último corte antes da pausa" },
  { date: "Set 2024", taxa: 10.75, evento: "Copom volta a subir juros" },
  { date: "Jan 2025", taxa: 13.25, evento: "Ciclo de alta acelerado" },
  { date: "Jun 2025", taxa: 15.00, evento: "Teto do ciclo — Selic estaciona" },
  { date: "Mar 2026", taxa: 14.50, evento: "Primeiro corte do novo ciclo ↓" },
  { date: "Dez 2026*", taxa: 12.25, evento: "Projeção do mercado (Focus)" },
];

const SelicComecaCair2026 = () => {
  const [investido, setInvestido] = useState(10000);

  useEffect(() => {
    trackArticleRead("selic-comeca-cair-2026", "Selic começa a cair: o que muda nos seus investimentos agora?", "invest");
  }, []);

  const rendCDI15 = investido * 0.15 * 0.85; // CDI ~Selic, IR 15% (>720d)
  const rendCDI12 = investido * 0.1225 * 0.85;
  const diferencaAnual = rendCDI15 - rendCDI12;

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Selic em Queda</span>
      </nav>

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Selic começa a cair: o que muda nos seus investimentos agora?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Depois de quase dois anos no maior patamar em duas décadas, a Selic finalmente está em queda. Saiba como se reposicionar antes que a janela se feche.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="Selic em queda 2026 - gráfico descendente" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Depois de passar quase dois anos no maior patamar em duas décadas, a Selic finalmente está em queda. O Comitê de Política Monetária (Copom) do Banco Central confirmou o início do ciclo de cortes para março de 2026, após manter os juros em <strong>15% ao ano</strong> por cinco reuniões consecutivas — o nível mais alto desde julho de 2006.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O mercado financeiro projeta que a Selic chegue a cerca de <strong>12,25% ao final de 2026</strong>, com cortes graduais de 0,50 ponto percentual a cada reunião. Isso muda bastante o jogo para quem tem dinheiro investido — ou quer começar a investir agora.
        </p>

        {/* Ad after 2nd paragraph */}
        <AdLeaderboard />

        {/* Timeline visual */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Linha do tempo da Selic recente</h2>
        <div className="relative space-y-0">
          {TIMELINE_DATA.map((item, i) => (
            <div key={i} className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${i === TIMELINE_DATA.length - 1 ? "bg-[hsl(var(--invest-color))] ring-4 ring-[hsl(var(--invest-color))]/20" : i >= 6 ? "bg-green-500" : "bg-muted-foreground/40"}`} />
                {i < TIMELINE_DATA.length - 1 && <div className="w-0.5 h-8 bg-border" />}
              </div>
              <div className="pb-6 -mt-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-20">{item.date}</span>
                  <span className="font-bold text-sm">{item.taxa}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.evento}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Por que isso importa pra você?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Quando os juros estão altos, investir em renda fixa é quase fácil demais. Qualquer CDB pagando 100% do CDI entregava retornos excelentes sem muito esforço. Com a queda da Selic, esse cenário começa a mudar. Ainda vai levar um tempo para os retornos ficarem menos atrativos, mas <strong>o momento de se reposicionar é agora</strong>, não quando já tiver perdido a janela.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Historicamente, quem se antecipa aos ciclos de queda consegue travar taxas prefixadas muito superiores às que estarão disponíveis seis meses depois. Esse é o conceito de "marcação a mercado" — e ele é o motivo pelo qual tantos investidores experientes estão movimentando suas carteiras agora.
        </p>

        {/* Simulador interativo */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><BarChart3 className="h-6 w-6" /> Simulador: quanto você perde com a queda?</span>
        </h2>
        <div className="bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm text-muted-foreground mb-2">Valor investido em renda fixa pós-fixada (100% CDI):</label>
          <div className="flex items-center gap-3 mb-4">
            {[5000, 10000, 50000, 100000].map(v => (
              <button key={v} onClick={() => setInvestido(v)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${investido === v ? "bg-[hsl(var(--invest-color))] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Selic a 15% (atual)</span>
              </div>
              <p className="text-xl font-bold">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(rendCDI15)}<span className="text-xs text-muted-foreground font-normal"> / ano líquido</span></p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <ArrowDownRight className="h-4 w-4 text-yellow-500" />
                <span className="text-xs text-muted-foreground">Selic a 12,25% (projeção dez/26)</span>
              </div>
              <p className="text-xl font-bold">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(rendCDI12)}<span className="text-xs text-muted-foreground font-normal"> / ano líquido</span></p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
            Diferença de <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(diferencaAnual)}</strong> a menos por ano se ficar apenas no pós-fixado. Simulação simplificada com IR de 15%.
          </p>
        </div>

        <AdRectangle />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que ainda vale a pena na renda fixa?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Enquanto os juros ainda estão em níveis elevados, títulos prefixados e indexados ao IPCA seguem sendo ótimas escolhas. Dados da Anbima mostram que os títulos públicos prefixados de longo prazo foram o investimento de maior rentabilidade da renda fixa em 2025, com o índice IRF-M 1+ avançando <strong>20,07% no ano</strong> — o melhor resultado entre todos os indicadores da entidade naquele período.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O raciocínio é simples: ao travar uma taxa prefixada hoje, você garante um bom retorno mesmo quando os juros caírem mais. O <strong>Tesouro IPCA+</strong> também segue interessante para quem quer proteger o poder de compra no longo prazo.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <Landmark className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Tesouro Prefixado</h3>
            <p className="text-sm text-muted-foreground">Trava a taxa atual. Ideal para quem acredita que os juros vão cair mais. Quanto maior o prazo, maior o potencial de ganho via marcação a mercado.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Target className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Tesouro IPCA+</h3>
            <p className="text-sm text-muted-foreground">Protege contra inflação + juro real. Pagando IPCA + 6% a 7% ao ano, é um dos melhores retornos reais do mundo entre títulos soberanos.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <PiggyBank className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">CDBs Prefixados</h3>
            <p className="text-sm text-muted-foreground">Bancos médios oferecem CDBs prefixados com taxas acima do Tesouro. Risco maior, mas cobertos pelo FGC até R$ 250 mil por CPF/instituição.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que é marcação a mercado?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Muita gente compra Tesouro Direto achando que só vai ganhar se levar até o vencimento. Mas existe uma mecânica poderosa chamada <strong>marcação a mercado</strong>: quando os juros caem, os títulos prefixados que você comprou <em>antes</em> da queda se valorizam — porque ninguém mais consegue comprar títulos com aquela taxa mais alta.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Na prática, isso significa que você pode vender o título antes do vencimento com lucro. Foi exatamente isso que aconteceu em 2023-2024: quem comprou Tesouro Prefixado 2029 no pico dos juros viu ganhos de <strong>mais de 20%</strong> em menos de um ano, muito acima do CDI.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O cenário atual é parecido: com a Selic iniciando um novo ciclo de queda, títulos longos prefixados comprados agora podem se valorizar significativamente nos próximos 12 a 18 meses.
        </p>

        <AdRectangle />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">E a renda variável?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Com a queda dos juros, a tendência é que dinheiro migre gradualmente para a bolsa em busca de rendimentos maiores. <strong>Fundos Imobiliários (FIIs)</strong> e ações de setores sensíveis ao crédito — como construção civil, varejo e educação — costumam ser os primeiros a reagir positivamente quando o ciclo de corte começa.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Isso não significa largar tudo e ir para a renda variável amanhã. Mas vale começar a diversificar aos poucos, especialmente se você tem um horizonte de investimento maior que dois anos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Um dado relevante: nos últimos três ciclos de queda da Selic (2016-2017, 2019-2020, 2023-2024), o Ibovespa acumulou altas médias de <strong>30% a 50%</strong> durante o período de cortes. Passado não é garantia de futuro, mas o padrão é consistente.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como reposicionar sua carteira — passo a passo</h2>
        <div className="space-y-3">
          {[
            "Avalie sua situação atual: quanto você tem em pós-fixado, prefixado, inflação e renda variável?",
            "Reserve 3 a 6 meses de gastos em liquidez diária (Tesouro Selic ou CDB com resgate)",
            "Migre parte do pós-fixado para prefixados longos ou IPCA+ enquanto as taxas ainda estão altas",
            "Considere iniciar posição em FIIs e ETFs de renda variável (BOVA11, IVVB11) com aportes graduais",
            "Reavalie trimestralmente e ajuste conforme o ciclo evolui",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Resumo prático</h2>
        <div className="space-y-3">
          {[
            "Renda fixa prefixada: ainda vale a pena travar taxas agora, antes de caírem mais",
            "Tesouro IPCA+: boa opção para longo prazo e proteção contra inflação",
            "FIIs e ações: começam a ficar mais atrativos com a queda dos juros",
            "Poupança: continue evitando — mesmo com Selic em queda, existem alternativas muito melhores",
            "Marcação a mercado: entender esse conceito pode ser a diferença entre ganhar 10% ou 25% no ano",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>O ciclo está mudando. Quem entender isso antes vai sair na frente. Conteúdo informativo — não constitui recomendação de investimento.</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["Selic", "renda fixa", "investimentos", "Copom", "juros 2026", "tesouro direto", "FIIs", "marcação a mercado", "prefixado", "CDI"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="selic-comeca-cair-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="selic-comeca-cair-2026" />
    </article>
  );
};

export default SelicComecaCair2026;
