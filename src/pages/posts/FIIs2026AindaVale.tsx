import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, ChevronRight, Building2, AlertTriangle,
  TrendingUp, Percent, BarChart3, PiggyBank, ShieldAlert, CheckCircle2,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import heroImg from "@/assets/fiis-2026-ainda-vale.webp";

const SETORES_FII = [
  { setor: "Logística / Galpões",  dy: "9–11%",  pvp: "0,85–0,95", tendencia: "↑ Alta",                 destaque: true  },
  { setor: "Recebíveis (Papel)",   dy: "11–14%", pvp: "0,95–1,05", tendencia: "→ Estável",              destaque: false },
  { setor: "Shoppings",            dy: "7–9%",   pvp: "0,80–0,92", tendencia: "↑ Recuperação",          destaque: true  },
  { setor: "Lajes Corporativas",   dy: "8–10%",  pvp: "0,70–0,85", tendencia: "↑ Início de recuperação",destaque: false },
  { setor: "Híbridos / FOFs",      dy: "9–12%",  pvp: "0,85–1,00", tendencia: "→ Estável",              destaque: false },
];

const FIIs2026AindaVale = () => {
  const [aporte, setAporte] = useState(10000);
  const dy = 0.10;

  useEffect(() => {
    trackArticleRead(
      "fiis-2026-ainda-vale-investir",
      "FIIs em 2026: ainda vale a pena investir com a Selic caindo?",
      "invest"
    );
  }, []);

  const rendMensal = (aporte * dy) / 12;
  const rend5anosComReinvest = aporte * Math.pow(1 + dy, 5) - aporte;
  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

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
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            FIIs · Selic · Renda Passiva
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          FIIs em 2026: ainda vale a pena investir com a Selic caindo?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Os <strong>FIIs em 2026</strong> voltam ao centro das atenções com o início do ciclo de corte da Selic. Historicamente, o momento em que os juros começam a cair é um dos melhores pontos de entrada em fundos imobiliários — cotas descontadas, dividendos ainda altos e tendência de valorização à frente. Mas qual tipo de FII se beneficia mais agora, quais setores estão no radar e o que evitar?
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="FIIs em 2026 com Selic caindo — ainda vale a pena investir?"
          className="w-full aspect-video object-cover"
          loading="eager"
        />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Com a Selic iniciando um ciclo de queda gradual, muita gente está olhando para os <strong>FIIs em 2026</strong> com interesse renovado — e faz sentido. Historicamente, o início de um ciclo de cortes é um dos melhores momentos para entrar em fundos imobiliários: as cotas costumam estar descontadas após o período de juros altos e os dividendos mensais ganham atratividade relativa conforme o CDI recua.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          No último ciclo de cortes da Selic entre 2023 e 2024, o IFIX — índice que reúne os principais FIIs da B3 — valorizou cerca de <strong>15% em 12 meses</strong>, além dos dividendos distribuídos no período. O cenário atual tem potencial semelhante, mas exige seletividade: não é qualquer FII que vai performar bem nesse ambiente.
        </p>

        <AdLeaderboard />

        {/* Por que ficam mais atrativos */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Por que FIIs ficam mais atrativos quando os juros caem
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          FIIs são fundos obrigados por lei a distribuir pelo menos <strong>95% do lucro semestral</strong> aos cotistas — o famoso "dividendo mensal" isento de Imposto de Renda para pessoa física. Quando a Selic estava a 13,75–15%, concorrer com a renda fixa era difícil: por que aceitar 9% de DY em FII com risco de mercado se o Tesouro Selic pagava 13% com liquidez diária? Com a queda gradual dos juros, essa equação muda:
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-4">
          {[
            { icon: <PiggyBank className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />, titulo: "Dividendos Mensais Isentos de IR", desc: "Os rendimentos distribuídos mensalmente por FIIs são isentos de IR para pessoa física — vantagem que não existe em CDB ou Tesouro Direto." },
            { icon: <Building2 className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />, titulo: "Valorização das Cotas", desc: "Com juros mais baixos, o prêmio exigido pelo investidor para aceitar risco imobiliário cai — isso sobe o preço das cotas, gerando ganho de capital além dos dividendos." },
            { icon: <TrendingUp className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-3" />, titulo: "Aluguéis Reajustados pelo IPCA", desc: "Contratos de imóveis são reajustados pela inflação. Em cenários onde o IPCA supera o CDI, os FIIs de tijolo se saem melhor que renda fixa pós-fixada." },
          ].map((c, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
              {c.icon}
              <h3 className="font-bold mb-1 text-sm">{c.titulo}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Papel vs Tijolo */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          FIIs de Papel vs. FIIs de Tijolo: quem se beneficia mais em 2026?
        </h2>
        <div className="not-prose grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Papel (CRI, LCI)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Investem em títulos de dívida do setor imobiliário indexados ao CDI ou IPCA. Com Selic ainda elevada no curto prazo de 2026, esses fundos seguem bem remunerados, mas o DY vai recuar conforme os juros caem ao longo do ano.
            </p>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground"><strong>Melhor para:</strong> quem prioriza dividendos altos agora e aceita que a rentabilidade vai diminuir no médio prazo com a queda dos juros.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">🧱</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Tijolo (Logística, Shoppings, Lajes)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Possuem imóveis físicos. Mais sensíveis ao ciclo de juros — tendem a se valorizar com mais força quando a queda da Selic se consolida. Muitas cotas ainda estão com P/VP abaixo de 1,0 em 2026 — oportunidade de comprar ativo com desconto.
            </p>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground"><strong>Melhor para:</strong> quem pensa no médio/longo prazo e quer ganhar com valorização das cotas + dividendos crescentes conforme vacância cai.</p>
            </div>
          </div>
        </div>

        <AdRectangle />

        {/* Tabela de setores */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Panorama dos setores de FIIs em 2026
        </h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 font-bold">Setor</th>
                <th className="text-left p-3 font-bold">DY médio</th>
                <th className="text-left p-3 font-bold">P/VP</th>
                <th className="text-left p-3 font-bold">Tendência</th>
              </tr>
            </thead>
            <tbody>
              {SETORES_FII.map((s, i) => (
                <tr key={i} className={`border-t border-border ${s.destaque ? "bg-[hsl(var(--invest-color))]/5" : ""}`}>
                  <td className="p-3 font-medium">{s.destaque ? "⭐ " : ""}{s.setor}</td>
                  <td className="p-3 text-green-500 font-mono text-xs font-bold">{s.dy}</td>
                  <td className="p-3 font-mono text-xs">{s.pvp}</td>
                  <td className="p-3 text-xs text-muted-foreground">{s.tendencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">DY = Dividend Yield (rendimento em dividendos / preço da cota). P/VP = Preço sobre Valor Patrimonial. Dados aproximados de março/2026. Consulte as fontes antes de investir.</p>
        </div>

        {/* Simulador */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><BarChart3 className="h-6 w-6" /> Simulador de renda passiva com FIIs</span>
        </h2>
        <div className="not-prose bg-card border border-border rounded-2xl p-6">
          <label className="block text-sm text-muted-foreground mb-2">Quanto você investiria em FIIs?</label>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {[1000, 5000, 10000, 50000, 100000].map(v => (
              <button
                key={v}
                onClick={() => setAporte(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  aporte === v
                    ? "bg-[hsl(var(--invest-color))] text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
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
              <p className="text-xs text-muted-foreground">Valorização acum. (5 anos)*</p>
              <p className="text-xl font-bold">{fmt(rend5anosComReinvest)}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
            * Simulação com DY constante de 10% a.a. sem reinvestimento de dividendos. Resultados reais podem variar significativamente.
          </p>
        </div>

        <AdInArticle />

        {/* Como analisar */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Como analisar um FII antes de comprar em 2026
        </h2>
        <div className="not-prose space-y-3">
          {[
            { titulo: "P/VP (Preço sobre Valor Patrimonial)", desc: "Abaixo de 1,0 = você está comprando R$ 1 de ativo por menos de R$ 1 — desconto real. Acima de 1,20 = prêmio de mercado. Para FII de tijolo, a faixa ideal de entrada é entre 0,85 e 1,00 em 2026." },
            { titulo: "Dividend Yield (DY)", desc: "Rendimento anual em dividendos / preço da cota. Compare com o CDI líquido de IR: se o DY supera o retorno líquido da renda fixa E tem potencial de valorização da cota, o FII está competitivo." },
            { titulo: "Vacância Física e Financeira", desc: "Vacância física acima de 15% é alerta amarelo. Acima de 25% é alerta vermelho. Verifique tendência: vacância caindo é mais importante que o número absoluto — significa que o problema está sendo resolvido." },
            { titulo: "Gestão e Histórico de Distribuições", desc: "Gestores com bom track record fazem diferença decisiva. Verifique se o fundo manteve dividendos estáveis nos últimos 12–24 meses — cortes frequentes indicam problemas estruturais." },
            { titulo: "Liquidez Diária", desc: "Volume médio diário acima de R$ 1 milhão garante que você consegue vender sem impactar o preço. Evite FIIs com menos de R$ 300 mil/dia de volume." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-1 text-[hsl(var(--invest-color))]">{item.titulo}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Setores no radar */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Setores no radar em 2026
        </h2>
        <div className="not-prose space-y-3">
          {[
            { icon: <Building2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />, item: "Logística e galpões industriais: demanda crescente pelo e-commerce e nearshoring impulsiona contratos longos com vacância historicamente baixa. Principal aposta de gestoras como Kinea e BTG." },
            { icon: <Building2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />, item: "Fundos de recebíveis (Papel): ainda bem remunerados enquanto os juros não caem muito. Boa opção de transição para quem quer dividendos altos agora mas planeja migrar para tijolo no médio prazo." },
            { icon: <Building2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />, item: "Shoppings premium e lajes corporativas: começam a se recuperar com melhora do consumo, retorno ao trabalho presencial e P/VP ainda abaixo de 1,0 — desconto histórico em ativos de qualidade." },
          ].map(({ icon, item }, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              {icon}
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Cuidados */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><ShieldAlert className="h-6 w-6" /> Cuidados importantes antes de investir em FIIs</span>
        </h2>
        <div className="not-prose space-y-3">
          {[
            "DY alto isoladamente pode ser armadilha: verifique sempre se o dividendo alto não é consequência de uma cota que despencou ou de distribuição de patrimônio (que não é receita recorrente)",
            "FIIs não têm garantia do FGC — diferente de CDBs e LCIs, não existe proteção contra problemas no fundo ou nos imóveis",
            "Ganho de capital na venda de cotas é tributado em 20% — somente os dividendos mensais distribuídos são isentos de IR para pessoa física",
            "Concentração em um único setor ou gestora aumenta o risco específico. Diversifique entre pelo menos 3 setores e 2–3 gestoras diferentes",
            "Leia o Relatório Gerencial mensal antes de comprar — gestoras sérias publicam mensalmente com dados de vacância, contratos e perspectivas",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* Como começar */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          Como começar a investir em FIIs hoje
        </h2>
        <div className="not-prose space-y-3">
          {[
            "Abra conta em uma corretora com corretagem zero para FIIs: XP, Rico, Clear, NuInvest e BTG oferecem FIIs sem custo por operação",
            "Estude 3–5 FIIs de setores diferentes antes de comprar. Use Funds Explorer, Status Invest e Clube FII para comparar indicadores",
            "Comece com aportes pequenos — R$ 500 a R$ 1.000 — e vá aumentando conforme entende melhor cada fundo",
            "Reinvista os dividendos mensais nos primeiros anos para acelerar o efeito dos juros compostos no patrimônio",
            "Reavalie a carteira trimestralmente: acompanhe os relatórios gerenciais e ajuste se os fundamentos mudarem",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="not-prose bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">
            FIIs não são renda fixa e podem oscilar, ter quedas e distribuições irregulares. Mas para quem quer renda passiva mensal com isenção de IR e exposição ao mercado imobiliário, continuam sendo uma das melhores opções disponíveis no Brasil. Com o ciclo de queda da Selic se consolidando ao longo de 2026, o timing está a favor de quem entrar agora com paciência e visão de médio prazo.
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

      <EditorialTake category="invest" title="Análise do Marcos: o melhor momento de entrada em FIIs raramente fica anunciado">
        <p>
          Historicamente, os maiores ganhos em FIIs vêm de quem entrou no pior momento do sentimento de mercado — quando todo mundo estava falando que "FII não presta com Selic a 13%". Estamos vendo exatamente esse cenário em 2026: cotas de logística e shoppings premium com P/VP entre 0,80 e 0,90, dividendos isentos competitivos e um ciclo de queda de juros pela frente.
        </p>
        <p className="mt-2">
          Meu posicionamento pessoal para 2026: <strong>60% em FIIs de tijolo</strong> (logística e shoppings premium) aproveitando o desconto, <strong>30% em Papel</strong> (CRI/IPCA+) para sustentar o dividendo no curto prazo enquanto o tijolo se recupera, e <strong>10% em FOFs</strong> para diversificação de gestora com gestão profissional. O prazo ideal para sentir o efeito da queda de juros nas cotas: 18 a 36 meses. Quem não tem esse horizonte deve priorizar renda fixa.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Boletim Mensal de Fundos de Investimento Imobiliário — B3",
            url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/fundos-de-investimentos/fii/",
            publisher: "B3 — Bolsa do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Nota de Imprensa Copom — Decisão sobre Taxa Selic",
            url: "https://www.bcb.gov.br/publicacoes/notaaimprensaselicmercadoaberto",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Lei nº 8.668/1993 — FIIs: distribuição obrigatória de 95% dos lucros",
            url: "https://www.planalto.gov.br/ccivil_03/leis/L8668.htm",
            publisher: "Presidência da República",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tributação de FIIs — Isenção de IR sobre Dividendos para PF",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Funds Explorer — Ranking e Indicadores de FIIs",
            url: "https://www.fundsexplorer.com.br/",
            publisher: "Funds Explorer",
            accessedAt: "Maio 2026",
          },
          {
            title: "Clube FII — IFIX, Dividendos e Análise de Fundos Imobiliários",
            url: "https://www.clubefii.com.br/",
            publisher: "Clube FII",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="fiis-2026-ainda-vale-investir" />
      <CommentSection
        postId="fiis-2026-ainda-vale-investir"
        postTitle="FIIs em 2026: ainda vale a pena investir com a Selic caindo?"
      />
    </article>
  );
};

export default FIIs2026AindaVale;
