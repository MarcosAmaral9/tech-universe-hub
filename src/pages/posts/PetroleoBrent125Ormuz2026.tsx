import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Flame, Globe, BarChart3, AlertTriangle, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/petroleo-brent-125-ormuz-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "petroleo-brent-125-bloqueio-ormuz-2026";
const TITLE = "Brent Ultrapassa US$ 125: Bloqueio em Ormuz, Combustível Mais Caro e o Que Fazer com Petrobras (PETR4)";

const PetroleoBrent125Ormuz2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Petróleo · Brent · Ormuz · Geopolítica · PETR4
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Brent Ultrapassa US$ 125: Bloqueio em Ormuz, Combustível Mais Caro e o Que Fazer com Petrobras (PETR4)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Petróleo Brent US$ 125 bloqueio Estreito de Ormuz Trump 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O preço do petróleo bruto Brent <strong>ultrapassou os US$ 125 por barril</strong> (cerca de R$ 624,73) na manhã desta quinta-feira (30/04), após o presidente dos EUA, Donald Trump, sinalizar a empresários da indústria petrolífera que pretende <strong>manter o bloqueio naval aos portos iranianos</strong> na entrada do Estreito de Ormuz. O salto de mais de <strong>6%</strong> no contrato de junho leva o Brent a níveis não vistos desde a crise financeira de 2008. Veja o impacto na inflação, nos combustíveis no Brasil e na sua carteira.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Que Aconteceu — Os Números do Salto
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Brent jun/2026", val: "US$ 125,36", note: "+6,2% no dia (30/04)", icon: "🛢️" },
            { ind: "Brent jul/2026", val: "US$ 113,85", note: "+3,1% — backwardation", icon: "📈" },
            { ind: "WTI (EUA)", val: "US$ 109,38", note: "+2,3% no dia", icon: "🇺🇸" },
            { ind: "Brent pré-guerra", val: "~US$ 70", note: "Antes de fevereiro/2026", icon: "📉" },
          ].map(({ ind, val, note, icon }) => (
            <div key={ind} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-lg mb-0.5">{val}</div>
              <div className="text-xs font-medium mb-0.5">{ind}</div>
              <div className="text-xs text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>
        <p>
          A guerra no Irã está em sua <strong>nona semana</strong>. Os EUA mantêm o bloqueio aos portos iranianos enquanto o Estreito de Ormuz — passagem obrigatória de cerca de 20% do petróleo mundial — permanece fechado. O colapso das negociações entre EUA e Irã e a rejeição de Trump à proposta iraniana de reabertura tiraram do mercado a esperança de retomada rápida dos fluxos.
        </p>
        <blockquote>
          "O colapso das conversas entre EUA e Irã, juntamente com o relato de que o presidente Trump rejeitou a proposta do Irã para a reabertura do Estreito de Ormuz, faz com que o mercado perca a esperança de qualquer retomada rápida nos fluxos de petróleo." — Warren Patterson e Ewa Manthey, estrategistas do ING Bank
        </blockquote>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          O Reflexo Global
        </h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Mercado</th>
              <th className="text-left py-3 px-4">Movimento</th>
              <th className="text-left py-3 px-4">Observação</th>
            </tr></thead>
            <tbody>
              {[
                ["Dólar/Iene", "160,51 ¥", "Maior nível em quase 2 anos — porto seguro"],
                ["Euro/Dólar", "US$ 1,1663", "Recuo frente ao dólar"],
                ["Treasury 10y", "4,42%", "Alta após Fed adiar cortes"],
                ["S&P 500", "-0,1% (24.673)", "Mistos — Visa +8,3%, Starbucks +8,4%"],
                ["Dow Jones", "-0,6% (48.861)", "Pressionado por industriais"],
                ["Nikkei 225", "-1,6% (58.967)", "Maior choque na Ásia"],
                ["Hang Seng", "-1,3% (25.772)", "Sensibilidade ao petróleo"],
                ["Sensex (Índia)", "-1,2%", "Importadora líquida — pressão pesada"],
              ].map(([m, mv, obs]) => (
                <tr key={m} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{m}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{mv}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-invest" />
          O Impacto no Brasil
        </h2>
        <ul>
          <li><strong>Combustíveis</strong> — A disparada já está se refletindo nos preços de gasolina, diesel e GLP. O custo do diesel afeta diretamente o frete de toda a cadeia.</li>
          <li><strong>Construção civil</strong> — Insumos derivados do petróleo (asfalto, plásticos, tintas) e o frete encarecido elevam custos do setor.</li>
          <li><strong>Inflação (IPCA)</strong> — Combustíveis pesam no índice cheio e nos núcleos. O Focus já projeta IPCA de 4,86% para 2026, acima do teto da meta (4,5%).</li>
          <li><strong>Política monetária</strong> — Pressão adicional sobre o Copom, que cortou a Selic para 14,50% no dia anterior (29/04), mas pediu "serenidade e cautela".</li>
          <li><strong>Câmbio</strong> — Dólar a R$ 4,977 (+0,5% em 30/04). Petróleo caro em dólar tende a fortalecer USD, mas o Brasil é exportador líquido — efeito misto.</li>
          <li><strong>Balança comercial</strong> — Brasil exporta cru e importa derivados. Saldo positivo no curto prazo, mas com pressão na refino doméstico.</li>
        </ul>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Fazer com a Carteira
        </h2>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "PETR4 / PETR3", sinal: "🟢 Beneficiada", txt: "Brent acima de US$ 100 amplia margens da Petrobras. Receita em dólar e custo em real. Atenção ao risco político de tabelamento e à política de dividendos. Cenário do petróleo a US$ 125 sustenta dividend yield acima de 13–15% projetado." },
            { tipo: "PRIO3 (PetroRio)", sinal: "🟢 Alavancada", txt: "Empresa pure-play de exploração — alavancada operacional ao Brent. Maior potencial de upside e de queda em correções." },
            { tipo: "RECV3 / RRRP3", sinal: "🟢 Setor favorecido", txt: "Pequenas independentes (juniors) ganham com preços altos. Volatilidade alta — exposição menor." },
            { tipo: "Aéreas (AZUL4, GOLL4)", sinal: "🔴 Prejudicadas", txt: "Combustível é ~30% do custo. Setor altamente exposto. Prefira evitar enquanto Ormuz estiver fechado." },
            { tipo: "Logística e transportes", sinal: "🟡 Cautela", txt: "RAIL3, JSLG3 e CCR3 sofrem com diesel caro, mas têm contratos com reajuste. Atenção a margens." },
            { tipo: "Tesouro IPCA+ longo", sinal: "🟢 Hedge", txt: "Choque do petróleo eleva inflação esperada. NTN-B 2035/2045 protege o poder de compra do investidor." },
            { tipo: "Ouro e dólar", sinal: "🟢 Diversificação", txt: "Em momentos de tensão geopolítica, ouro e dólar atuam como porto seguro. Considere ETFs como GOLD11 e BDRs de mineradoras." },
            { tipo: "Varejo e construção civil", sinal: "🔴 Pressionadas", txt: "Custos de insumos e frete sobem. LREN3, MGLU3, MRVE3 e CURY3 sofrem com margens comprimidas." },
          ].map(({ tipo, sinal, txt }) => (
            <div key={tipo} className="bg-card rounded-xl border border-invest/20 p-4 flex items-start gap-3">
              <span className="text-sm shrink-0 whitespace-nowrap">{sinal}</span>
              <div>
                <h4 className="font-bold text-sm">{tipo}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{txt}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Cenários para os Próximos Meses
        </h2>
        <div className="not-prose my-4 space-y-3">
          {[
            { n: "1", titulo: "🟢 Cenário Otimista — Cessar-fogo e reabertura de Ormuz", desc: "Brent recua para US$ 80–90. Selic acelera cortes (12% no fim de 2026). PETR4 corrige, mas mantém dividendos. Bolsa em alta generalizada." },
            { n: "2", titulo: "🟡 Cenário Base — Conflito prolongado e Brent em US$ 100–125", desc: "Inflação fica acima do teto. Copom para de cortar. Petroleiras seguem favorecidas. Mercado lateralizado, com seletividade alta." },
            { n: "3", titulo: "🔴 Cenário de Estresse — Escalada militar direta EUA-Irã", desc: "Brent acima de US$ 150. Recessão global. Selic pode até subir novamente. Fly-to-quality: dólar, ouro e Tesouro IPCA+ disparam." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-3 bg-card rounded-xl border border-invest/30 p-4">
              <span className="w-7 h-7 rounded-full bg-invest/15 text-invest font-bold flex items-center justify-center shrink-0 text-xs">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está aproveitando o ciclo de alta do petróleo? 🛢️</h3>
          <p className="text-muted-foreground">Conta nos comentários como está se posicionando! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> Reportagem g1/Associated Press (30/04/2026), ING Bank Research, dados de mercado da quinta-feira (30/04). Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} />
    </article>
  );
};

export default PetroleoBrent125Ormuz2026;