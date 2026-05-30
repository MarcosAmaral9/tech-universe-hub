import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, ChevronRight, TrendingDown,
  CheckCircle2, AlertTriangle, BarChart3, Target,
  ArrowDownRight, Percent, Landmark, PiggyBank,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
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
    trackArticleRead(
      "selic-comeca-cair-2026",
      "Selic Começa a Cair em 2026: O Que Muda nos Seus Investimentos Agora?",
      "invest"
    );
  }, []);

  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
  const rendCDI15  = investido * 0.15   * 0.85;
  const rendCDI12  = investido * 0.1225 * 0.85;
  const diferenca  = rendCDI15 - rendCDI12;

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Selic em Queda 2026</span>
      </nav>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Selic · Renda Fixa · Copom · Reposicionamento
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Selic Começa a Cair em 2026: O Que Muda nos Seus Investimentos Agora?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Depois de quase dois anos no maior patamar em duas décadas, a{" "}
          <strong>Selic começou a cair em 2026</strong>. Saiba como reposicionar sua
          carteira — prefixado, IPCA+, FIIs e ações — antes que a janela de oportunidade
          se feche.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Selic começa a cair 2026 — como reposicionar investimentos no ciclo de queda"
          className="w-full aspect-video object-cover"
          loading="eager"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Depois de passar quase dois anos no maior patamar em duas décadas, a{" "}
          <strong>Selic finalmente começou a cair em 2026</strong>. O Comitê de Política
          Monetária (Copom) do Banco Central confirmou o início do ciclo de cortes em
          março de 2026, após manter os juros em <strong>15% ao ano</strong> por cinco
          reuniões consecutivas — o nível mais alto desde julho de 2006.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O mercado financeiro projeta que a Selic chegue a cerca de{" "}
          <strong>12,25% ao final de 2026</strong>, com cortes graduais de 0,50 ponto
          percentual a cada reunião. Isso muda bastante o jogo para quem tem dinheiro
          investido — ou quer começar agora. Quem se antecipa ao ciclo de queda consegue
          travar taxas prefixadas muito superiores às que estarão disponíveis seis meses
          depois. Esse é o conceito de <strong>marcação a mercado</strong>.
        </p>

        <AdLeaderboard />

        {/* Timeline */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2">
            <TrendingDown className="h-6 w-6" /> Linha do Tempo da Selic
          </span>
        </h2>
        <div className="not-prose relative space-y-0">
          {TIMELINE_DATA.map((item, i) => (
            <div key={i} className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                  i === TIMELINE_DATA.length - 1
                    ? "bg-[hsl(var(--invest-color))] ring-4 ring-[hsl(var(--invest-color))]/20"
                    : i >= 6
                      ? "bg-green-500"
                      : "bg-muted-foreground/40"
                }`} />
                {i < TIMELINE_DATA.length - 1 && <div className="w-0.5 h-8 bg-border" />}
              </div>
              <div className="pb-6 -mt-0.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-20">{item.date}</span>
                  <span className="font-bold text-sm">{item.taxa}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.evento}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground not-prose">
          * Projeção mediana do Boletim Focus (Banco Central do Brasil), maio/2026.
        </p>

        {/* Por que importa */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Por Que Isso Importa Para Você?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Quando os juros estão altos, investir em renda fixa é quase fácil demais. Qualquer
          CDB pagando 100% do CDI entregava retornos excelentes sem muito esforço. Com a
          queda da Selic, esse cenário começa a mudar —{" "}
          <strong>o momento de se reposicionar é agora</strong>, não quando a queda já
          tiver acontecido. A janela de oportunidade para travar taxas altas nos prefixados
          e IPCA+ longos está aberta, mas fecha gradualmente a cada corte do Copom.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O padrão histórico é claro: nos últimos três ciclos de queda da Selic
          (2016–2017, 2019–2020 e 2023–2024), o Ibovespa acumulou altas médias de{" "}
          <strong>30% a 50%</strong> durante o período de cortes, e o Tesouro IPCA+ longo
          entregou retornos anuais na casa de 20–25% via marcação a mercado. Passado não é
          garantia, mas o padrão é consistente o suficiente para não ignorar.
        </p>

        {/* Simulador */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" /> Simulador: Quanto Você Perde no Pós-Fixado?
          </span>
        </h2>
        <div className="not-prose bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm text-muted-foreground mb-2">
            Valor investido em renda fixa pós-fixada (100% CDI):
          </label>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {[5000, 10000, 50000, 100000].map(v => (
              <button
                key={v}
                onClick={() => setInvestido(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  investido === v
                    ? "bg-[hsl(var(--invest-color))] text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {fmt(v).replace(",00", "")}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Selic a 15% (ciclo atual)</span>
              </div>
              <p className="text-xl font-bold">
                {fmt(rendCDI15)}
                <span className="text-xs text-muted-foreground font-normal"> / ano líquido</span>
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <ArrowDownRight className="h-4 w-4 text-yellow-500" />
                <span className="text-xs text-muted-foreground">Selic a 12,25% (projeção dez/26)</span>
              </div>
              <p className="text-xl font-bold">
                {fmt(rendCDI12)}
                <span className="text-xs text-muted-foreground font-normal"> / ano líquido</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
            Diferença de <strong className="text-foreground">{fmt(diferenca)}</strong> a
            menos por ano se ficar apenas no pós-fixado. Simulação com IR de 15% (&gt;720 dias).
          </p>
        </div>

        <AdInArticle />

        {/* O que vale na renda fixa */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          O Que Ainda Vale na Renda Fixa?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Enquanto os juros ainda estão em níveis elevados, títulos prefixados e indexados
          ao IPCA seguem sendo ótimas escolhas. Dados da ANBIMA mostram que os títulos
          públicos prefixados de longo prazo foram o investimento de maior rentabilidade
          da renda fixa em 2025, com o índice IRF-M 1+ avançando{" "}
          <strong>20,07% no ano</strong> — o melhor resultado entre todos os indicadores
          de renda fixa no período. A lógica é simples: ao travar uma taxa prefixada hoje,
          você garante o bom retorno mesmo quando os juros caírem mais.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Landmark className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />,
              titulo: "Tesouro Prefixado",
              desc: "Trava a taxa atual. Ideal para quem acredita que os juros vão cair mais. Quanto maior o prazo, maior o potencial de ganho via marcação a mercado.",
            },
            {
              icon: <Target className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />,
              titulo: "Tesouro IPCA+",
              desc: "Protege contra inflação + juro real. Pagando IPCA + 6% a 7% ao ano, é um dos melhores retornos reais disponíveis entre títulos soberanos no mundo.",
            },
            {
              icon: <PiggyBank className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />,
              titulo: "CDBs Prefixados",
              desc: "Bancos médios oferecem CDBs prefixados acima do Tesouro. Risco maior, mas cobertos pelo FGC até R$ 250 mil por CPF/instituição.",
            },
          ].map(({ icon, titulo, desc }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-5">
              {icon}
              <h3 className="font-bold mb-2">{titulo}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle />

        {/* Marcação a mercado */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          O Que É Marcação a Mercado? (E Por Que Importa Agora)
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Muita gente compra Tesouro Direto achando que só vai ganhar se levar até o
          vencimento. Mas existe uma mecânica poderosa chamada{" "}
          <strong>marcação a mercado</strong>: quando os juros caem, os títulos prefixados
          que você comprou <em>antes</em> da queda se valorizam — porque ninguém mais
          consegue comprar títulos com aquela taxa alta.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Na prática, isso significa que você pode vender o título antes do vencimento com
          lucro. Foi exatamente isso que aconteceu em 2023–2024: quem comprou Tesouro
          Prefixado 2029 no pico dos juros viu ganhos de <strong>mais de 20%</strong> em
          menos de um ano — muito acima do CDI no período.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O cenário atual é parecido: com a Selic iniciando um novo ciclo de queda, títulos
          longos prefixados e IPCA+ comprados agora podem se valorizar significativamente
          nos próximos 12 a 18 meses. O risco: se o Copom pausar os cortes ou inverter o
          ciclo, os títulos prefixados longos caem de preço — o que só importa se você
          precisar vender antes do vencimento.
        </p>

        {/* Renda variável */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          E a Renda Variável? FIIs e Ações no Ciclo de Queda
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Com a queda dos juros, a tendência é que dinheiro migre gradualmente para a bolsa
          em busca de rendimentos maiores. <strong>Fundos Imobiliários (FIIs)</strong> e
          ações de setores sensíveis ao crédito — construção civil, varejo, educação,
          saúde — costumam ser os primeiros a reagir positivamente quando o ciclo de corte
          começa. As cotas de FIIs de tijolo (logística, shoppings) estão com P/VP abaixo
          de 1,0 em muitos casos — desconto que tende a fechar conforme os juros recuam.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Isso não significa largar tudo e migrar para a renda variável amanhã. Mas vale
          começar a diversificar aos poucos com ETFs como BOVA11 e IVVB11, especialmente
          para quem tem horizonte de investimento maior que dois anos. A recomendação é
          aportes graduais mensais — não mover tudo de uma vez.
        </p>

        {/* Como reposicionar */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Como Reposicionar Sua Carteira — Passo a Passo
        </h2>
        <div className="space-y-3">
          {[
            "Avalie sua situação atual: quanto você tem em pós-fixado, prefixado, IPCA+ e renda variável?",
            "Mantenha reserva de emergência intacta em Tesouro Selic ou CDB de liquidez diária — não mexa",
            "Migre parte do pós-fixado para prefixados longos (Tesouro 2029+) ou IPCA+ enquanto as taxas ainda estão altas",
            "Inicie posição em FIIs de tijolo com P/VP abaixo de 1,0 e ETFs de bolsa com aportes mensais graduais",
            "Reavalie trimestralmente e ajuste conforme o ciclo de queda evolui — cada corte do Copom muda o cenário",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Resumo */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Resumo: O Que Fazer Com a Selic Caindo
        </h2>
        <div className="space-y-3">
          {[
            "Renda fixa prefixada e IPCA+: ainda vale a pena travar taxas altas agora, antes que os cortes reduzam as ofertas",
            "Tesouro IPCA+ 2035–2045: potencial de valorização de 20–25% via marcação a mercado se os cortes se confirmarem",
            "FIIs de tijolo: começam a ficar mais atrativos com a queda — P/VP abaixo de 1,0 é oportunidade de entrada",
            "Ações/ETFs: aportes graduais em BOVA11, IVVB11 para quem tem horizonte de 2+ anos",
            "Poupança: continue evitando — mesmo com Selic em queda, existem alternativas muito melhores",
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
            <span>
              O ciclo está mudando. Quem entender isso antes vai sair na frente. Conteúdo
              informativo — não constitui recomendação de investimento. Consulte um
              profissional certificado antes de tomar decisões.
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {[
          "Selic", "renda fixa", "investimentos", "Copom", "juros 2026",
          "tesouro direto", "FIIs", "marcação a mercado", "prefixado", "CDI",
        ].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      <BackNavigation category="invest" />

      <EditorialTake
        category="invest"
        title="Análise do Marcos: ciclo de queda da Selic é a janela mais previsível do mercado"
      >
        <p>
          Acompanhamento via Atas e Relatórios Trimestrais de Inflação do Copom (Banco
          Central): em ciclos de queda da Selic, prefixados e Tesouro IPCA+ longos tendem
          a se valorizar pela marcação a mercado (queda do yield), enquanto pós-fixados
          passam a render menos em termos absolutos. Quedas previstas pelo Boletim Focus
          geralmente já estão parcialmente precificadas nos vencimentos longos, mas a
          dinâmica de marcação ainda favorece quem compra antes dos cortes.
        </p>
        <p className="mt-2">
          Histórico relevante: no ciclo de queda 2017–2018 (Selic de 14,25% para 6,5%),
          o Tesouro IPCA+ 2035 valorizou aproximadamente 60% em 24 meses (incluindo
          cupons). O Ibovespa subiu mais de 70% no mesmo período. Minha estratégia para
          o ciclo atual: manter reserva em Tesouro Selic (intocável),{" "}
          <strong>travar parte em IPCA+ longo (2035–2045)</strong> para capturar marcação
          a mercado, e aumentar gradualmente exposição em bolsa via BOVA11/SMAL11 e FIIs
          de tijolo descontados. Cuidado obrigatório: vender Tesouro IPCA+ antes do
          vencimento expõe à marcação negativa se o Copom pausar ou reverter os cortes —
          esse risco é real e deve ser dimensionado no tamanho da posição.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Atas das Reuniões do Copom — Banco Central",
            url: "https://www.bcb.gov.br/publicacoes/atascopom",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Boletim Focus — Expectativas de Mercado (Selic, IPCA)",
            url: "https://www.bcb.gov.br/publicacoes/focus",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tesouro Direto — Marcação a Mercado: Como Funciona",
            url: "https://www.tesourodireto.com.br/conteudo-educacional/marcacao-a-mercado.htm",
            publisher: "Tesouro Nacional / Tesouro Direto",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Índices de Renda Fixa: IRF-M, IMA-B e Rentabilidades",
            url: "https://www.anbima.com.br/pt_br/informar/relatorios/mercado-de-capitais/indices/",
            publisher: "ANBIMA",
            accessedAt: "Maio 2026",
          },
          {
            title: "B3 — Ibovespa: Histórico e Estatísticas",
            url: "https://www.b3.com.br/pt_br/market-data-e-indices/indices/indices-amplos/indice-ibovespa-ibovespa-estatisticas-historicas.htm",
            publisher: "B3 — Bolsa do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Relatório de Inflação — Copom: Projeções e Cenário Macroeconômico",
            url: "https://www.bcb.gov.br/publicacoes/ri",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="selic-comeca-cair-2026" />
      <CommentSection postId="selic-comeca-cair-2026" postTitle="Selic Começa a Cair em 2026: O Que Muda nos Seus Investimentos Agora?" />
    </article>
  );
};

export default SelicComecaCair2026;
