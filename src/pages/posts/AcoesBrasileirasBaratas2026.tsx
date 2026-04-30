import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, DollarSign, Lightbulb, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/acoes-brasileiras-baratas-valuation-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const AcoesBrasileirasBaratas2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "acoes-brasileiras-baratas-valuation-2026",
      "Ibovespa em Recordes mas Ações Brasileiras Ainda Estão Baratas: O Paradoxo de Abril de 2026",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Bolsa · Ações · Valuation · Oportunidades
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ibovespa em Recordes mas Ações Brasileiras Ainda Estão Baratas: O Paradoxo de Abril de 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Ibovespa recordes ações brasileiras baratas valuation 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O Ibovespa renovando recordes históricos acima dos 195 mil pontos pode parecer o momento errado para comprar ações brasileiras. Mas os números de valuation contam uma história diferente: o mercado brasileiro ainda negocia a <strong>múltiplos historicamente baixos</strong> — abaixo da média de 10 anos em P/L, P/VP e dividend yield. Como um índice pode estar em máxima histórica e as ações ainda estarem baratas ao mesmo tempo? Este artigo explica o paradoxo e mostra as oportunidades concretas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Paradoxo: Máxima de Pontos, Mínima de Múltiplos
        </h2>
        <p>
          Quando o Ibovespa chega a um novo recorde de pontos, o instinto do investidor é pensar que "está caro". Mas <strong>pontos do índice não são valuation</strong>. O Ibovespa em pontos reflete o preço nominal das ações — que sobe com o tempo simplesmente porque as empresas ficam maiores e a economia cresce (e a inflação eleva os preços nominalmente).
        </p>
        <p>
          O que realmente importa é o <strong>múltiplo</strong>: quanto você está pagando pelos lucros, pelo patrimônio ou pelos dividendos de cada empresa. E em abril de 2026, esses múltiplos estão baixos:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Métrica</th>
              <th className="text-left py-3 px-4">Ibovespa Hoje</th>
              <th className="text-left py-3 px-4">Média Histórica (10 anos)</th>
              <th className="text-left py-3 px-4">S&P 500 (EUA)</th>
              <th className="text-left py-3 px-4">Conclusão</th>
            </tr></thead>
            <tbody>
              {[
                ["P/L (Preço/Lucro)", "~8,5×", "~12×", "~22×", "Brasil 30% abaixo da média histórica"],
                ["P/VP (Preço/Patrimônio)", "~1,5×", "~1,9×", "~4,5×", "EUA paga 3× mais por cada R$ de patrimônio"],
                ["Dividend Yield", "~6,5%", "~4,8%", "~1,5%", "Brasil paga 4× mais dividendos que EUA"],
                ["EV/EBITDA", "~5,5×", "~7×", "~15×", "Brasil significativamente mais barato por EBITDA"],
              ].map(([met, hj, hist, sp, conc]) => (
                <tr key={met} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{met}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{hj}</td>
                  <td className="py-3 px-4 text-xs">{hist}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{sp}</td>
                  <td className="py-3 px-4 text-xs text-green-400">{conc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Estimativas com base em relatórios de XP Investimentos, BTG Pactual e Goldman Sachs — abril de 2026.</p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-invest" />
          Por Que Estão Baratas? Os 3 Motivos Estruturais
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "🏦 Selic alta por muito tempo comprimiu múltiplos", desc: "Com Selic a 15% durante 2025, investidores podiam ter retorno real de ~10% a.a. sem risco em renda fixa. Por que arriscar em ações por dividendo de 6,5%? Isso forçou o desconto nos preços das ações. Agora que a Selic começa a cair, esse desconto começa a ser revertido — mas ainda está incompleto." },
            { titulo: "📅 Incerteza eleitoral de 2026 deprime valuations", desc: "O mercado precifica risco político. Com eleições presidenciais em outubro de 2026, parte dos investidores estrangeiros aguarda a definição do cenário político antes de aumentar posições em Brasil. Isso mantém os múltiplos artificialmente baixos — e cria oportunidade para quem entra antes da definição." },
            { titulo: "🌍 Mercados emergentes fora de moda globalmente", desc: "Nos últimos 5 anos, o capital global fluiu para tecnologia americana (Magnificent 7). Com valuations do S&P 500 em 22× lucros vs 8,5× no Ibovespa, o diferencial nunca foi tão grande. Quando o capital global começar a buscar diversificação — como analistas do Goldman projetam para 2026–2027 — o Brasil está na posição de receber fluxos relevantes." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="flex gap-3 bg-card rounded-xl border border-invest/20 p-4">
              <span className="text-xl shrink-0">{titulo.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo.split(" ").slice(1).join(" ")}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
      <AdInArticle />
          As Ações Mais Baratas por Setor em Abril de 2026
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { setor: "🏦 Bancos (ITUB4, BBAS3, BBDC4)", pl: "P/L: 6–8×", dy: "DY: 7–10%", tese: "Bancos brasileiros estão entre os mais rentáveis do mundo (ROE acima de 20%) e negociam como se fossem quebrar. Com Selic caindo, espansão de crédito acelera. BBAS3 paga dividendo de quase 10% a.a.", risco: "Inadimplência se economia desacelerar" },
            { setor: "⚡ Utilities — Energia e Saneamento (EQTL3, ENGI11, SBSP3)", pl: "P/L: 10–14×", dy: "DY: 5–7%", tese: "Empresas de energia e saneamento têm receita previsível atrelada à inflação, dividendos altos e regulação favorável. Funcionam como 'títulos de renda fixa com upside'. Com Selic caindo, ficam mais atraentes.", risco: "Regulação e reajustes tarifários abaixo da inflação" },
            { setor: "🛢️ Petróleo (PETR4, PRIO3)", pl: "P/L: 4–6×", dy: "DY: 8–15%", tese: "Com petróleo acima de US$ 90 por causa do conflito no Oriente Médio, as margens da Petrobras e da PRIO estão excepcionais. PETR4 negocia a ~4× lucros e paga dividendos extraordinários recorrentes.", risco: "Queda do petróleo se houver acordo de paz firme" },
            { setor: "🏗️ Construção civil — segmento econômico (MRVE3, CURY3, DIRR3)", pl: "P/L: 8–12×", dy: "DY: 4–6%", tese: "Déficit habitacional brasileiro de ~8 milhões de unidades. MCMV (Minha Casa Minha Vida) garante demanda subsidiada. Queda da Selic barateia financiamento. Construtoras do segmento popular têm landbank extenso e crescimento de dois dígitos.", risco: "Selic cair mais lentamente que o esperado" },
            { setor: "🌿 Agronegócio (SLCE3, AGRO3, SMTO3)", pl: "P/L: 6–10×", dy: "DY: 4–6%", tese: "Brasil é o maior exportador mundial de soja, milho, carne e café. Dólar forte beneficia as exportadoras. Com guerra no Oriente Médio elevando commodities, margens seguem sólidas. AGRO3 é a mais diversificada.", risco: "Clima adverso e queda de commodities agrícolas" },
          ].map(({ setor, pl, dy, tese, risco }) => (
            <div key={setor} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-sm">{setor}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-invest/15 text-invest px-2 py-0.5 rounded-full font-bold">{pl}</span>
                  <span className="text-xs bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-bold">{dy}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{tese}</p>
              <p className="text-xs text-amber-400">⚠️ Risco: {risco}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Carteira Sugerida: 5 Ações Baratas para Abril de 2026
        </h2>
        <div className="not-prose my-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
          <p className="text-xs text-muted-foreground"><strong>⚠️ Aviso importante:</strong> Esta não é uma recomendação de investimento. Ações individuais envolvem risco de perda do capital. Consulte um analista certificado (CNPI) antes de investir. Rentabilidade passada não garante resultado futuro.</p>
        </div>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Ticker</th>
              <th className="text-left py-3 px-4">Empresa</th>
              <th className="text-left py-3 px-4">P/L est. 2026</th>
              <th className="text-left py-3 px-4">DY est. 2026</th>
              <th className="text-left py-3 px-4">Tese principal</th>
            </tr></thead>
            <tbody>
              {[
                ["BBAS3", "Banco do Brasil", "~5,5×", "~9,5%", "Dividendo extraordinário + P/L mais baixo entre grandes bancos"],
                ["PETR4", "Petrobras PN", "~4,5×", "~12%", "Petróleo alto + dividendos recorrentes + queda do dólar beneficia"],
                ["EQTL3", "Equatorial Energia", "~12×", "~5,5%", "Crescimento via concessões + receita previsível + expansão saneamento"],
                ["CURY3", "Cury Construtora", "~9×", "~5,5%", "MCMV crescendo + ROE acima de 30% + menor custo do setor"],
                ["SLCE3", "SLC Agrícola", "~8×", "~5%", "Maior produtora de grãos listada na B3 + exposição ao dólar"],
              ].map(([tick, emp, pl, dy, tese]) => (
                <tr key={tick} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{tick}</td>
                  <td className="py-3 px-4 text-xs font-medium">{emp}</td>
                  <td className="py-3 px-4 text-xs font-bold">{pl}</td>
                  <td className="py-3 px-4 text-green-400 font-bold text-xs">{dy}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{tese}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Os Riscos que Podem Manter as Ações Baratas por Mais Tempo
        </h2>
        <ul>
          <li><strong>Risco fiscal e eleitoral:</strong> Se a disputa presidencial de outubro 2026 gerar incerteza sobre o rumo fiscal do próximo governo, o mercado pode corrigir independente do valuation.</li>
          <li><strong>Selic caindo mais lentamente:</strong> Se o Copom pausar os cortes por inflação, o custo de oportunidade da renda fixa permanece alto e o fluxo para ações atrasa.</li>
          <li><strong>Crise global:</strong> Uma recessão nos EUA ou China afeta exportações brasileiras e aversão ao risco global — colocando pressão nos emergentes.</li>
          <li><strong>Câmbio:</strong> Uma reversão do real (dólar voltando a R$ 5,80+) pressionaria a inflação e poderia forçar o BC a pausar cortes.</li>
        </ul>
        <p>
          A combinação de valuation baixo + queda de juros + commodities elevadas cria uma tese favorável para a bolsa brasileira em 2026. Mas o mercado pode ficar barato por mais tempo do que o investidor consegue ficar paciente — especialmente com o risco eleitoral no horizonte. A estratégia mais robusta é o <strong>aporte gradual mensal</strong>, aproveitando as volatilidades para reduzir o preço médio ao longo do ano.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está comprando ações brasileiras agora? 📈</h3>
          <p className="text-muted-foreground">Qual setor você prefere? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="acoes-brasileiras-baratas-valuation-2026" />
      <CommentSection postId="acoes-brasileiras-baratas-valuation-2026" postTitle="Ibovespa em Recordes mas Ações Brasileiras Ainda Estão Baratas" />
    </article>
  );
};

export default AcoesBrasileirasBaratas2026;