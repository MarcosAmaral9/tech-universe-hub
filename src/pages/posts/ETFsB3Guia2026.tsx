import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/etfs-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const ETFsB3Guia2026 = () => {
  useEffect(() => {
    trackArticleRead("etfs-b3-guia-completo-2026", "ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">ETFs · B3 · Renda Variável</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="ETFs na B3 guia completo 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Os ETFs (Exchange Traded Funds) se tornaram o veículo de investimento mais popular do mundo — e finalmente ganham tração no Brasil. Com mais de <strong>80 ETFs listados na B3 em 2026</strong>, é possível investir no Ibovespa, no S&P 500, em ouro, em empresas de dividendos e até em títulos públicos com uma única ordem de compra.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O que é um ETF e por que ele é diferente
        </h2>
        <p>
          Um ETF é um fundo de investimento negociado em bolsa como se fosse uma ação. Ao comprar uma cota de um ETF, você automaticamente investe em uma <strong>cesta de ativos</strong> que replica um índice de referência. A grande vantagem é a <strong>diversificação instantânea com baixo custo</strong>.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Vantagens dos ETFs</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Diversificação automática com uma única ordem</li>
              <li>• Taxa de administração baixíssima (0,1%–0,5% ao ano)</li>
              <li>• Liquidez: compra e venda a qualquer momento no pregão</li>
              <li>• Transparência: carteira divulgada diariamente</li>
              <li>• Isenção de IR para venda até R$ 20.000/mês (ETFs BR)</li>
              <li>• Acesso a mercados internacionais sem conta no exterior</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-yellow-500/20 p-5">
            <h3 className="font-bold text-yellow-400 mb-3">⚠️ Desvantagens e Pontos de Atenção</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Não supera o índice — apenas replica (tracking error)</li>
              <li>• ETFs internacionais têm IR de 15% sobre ganhos</li>
              <li>• Sem controle sobre os ativos individuais</li>
              <li>• Liquidez pode ser baixa em ETFs menos populares</li>
              <li>• Variação cambial afeta ETFs de exterior</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Os Melhores ETFs da B3 em 2026
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-4">📊 ETFs de Ações Brasileiras</h3>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Ticker</th>
              <th className="text-left py-3 px-4">Nome</th>
              <th className="text-left py-3 px-4">Índice</th>
              <th className="text-left py-3 px-4">Taxa (a.a.)</th>
            </tr></thead>
            <tbody>
              {[
                ["BOVA11", "iShares Ibovespa", "Ibovespa (87 ações)", "0,10%"],
                ["SMAL11", "iShares Small Cap", "SMLL (small caps BR)", "0,50%"],
                ["DIVO11", "iShares Dividendos", "IDIV (maiores pagadoras)", "0,20%"],
                ["HASH11", "Hashdex Nasdaq Crypto", "Criptomoedas (regulado)", "0,85%"],
                ["AGRI11", "BTG Pactual Agro", "Setor agronegócio BR", "0,50%"],
              ].map(([tick, nome, indice, taxa]) => (
                <tr key={tick} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{tick}</td>
                  <td className="py-3 px-4">{nome}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{indice}</td>
                  <td className="py-3 px-4">{taxa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-4">🌐 ETFs Internacionais (acesso via B3)</h3>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Ticker</th>
              <th className="text-left py-3 px-4">Nome</th>
              <th className="text-left py-3 px-4">Índice</th>
              <th className="text-left py-3 px-4">Taxa (a.a.)</th>
              <th className="text-left py-3 px-4">IR sobre ganho</th>
            </tr></thead>
            <tbody>
              {[
                ["IVVB11", "iShares S&P 500", "S&P 500 (500 maiores EUA)", "0,23%", "15%"],
                ["SPY11", "SPDR S&P 500 (BDR)", "S&P 500 via BDR", "0,09%", "15%"],
                ["NASD11", "Invesco Nasdaq-100", "Nasdaq-100 (big techs)", "0,20%", "15%"],
                ["EURP11", "iShares MSCI Europe", "Empresas da Europa", "0,20%", "15%"],
                ["GOLD11", "Trend ETF Ouro", "Ouro (via BDR do GLD)", "0,20%", "15%"],
              ].map(([tick, nome, indice, taxa, ir]) => (
                <tr key={tick} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{tick}</td>
                  <td className="py-3 px-4">{nome}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{indice}</td>
                  <td className="py-3 px-4">{taxa}</td>
                  <td className="py-3 px-4 text-red-400 text-xs font-medium">{ir}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">⚠️ ETFs internacionais não têm isenção de IR de R$ 20.000/mês.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como Declarar ETFs no Imposto de Renda 2026
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "ETFs de ações brasileiras (ex: BOVA11, SMAL11)", regra: "Isenção de IR para vendas até R$ 20.000 no mês. Acima disso, alíquota de 15% sobre o lucro." },
            { titulo: "ETFs de renda fixa (ex: IMAB11, IMA-B)", regra: "Sem isenção. IR na fonte (come-cotas) de 15%–22,5% dependendo do prazo." },
            { titulo: "ETFs internacionais (ex: IVVB11, NASD11)", regra: "IR de 15% sobre qualquer ganho de capital, sem isenção de R$ 20.000." },
            { titulo: "ETFs de criptomoedas (ex: HASH11)", regra: "Tributação como ações (15% sobre ganhos, isenção até R$ 20.000/mês)." },
          ].map(({ titulo, regra }) => (
            <div key={titulo} className="bg-card rounded-xl border border-invest/20 p-4">
              <h4 className="font-bold text-sm mb-1">{titulo}</h4>
              <p className="text-sm text-muted-foreground">{regra}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Como Montar uma Carteira de ETFs em 2026
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { perfil: "🛡️ Conservador", alocacao: [
              { etf: "IMAB11 (IMA-B)", pct: "60%", desc: "Renda fixa indexada ao IPCA" },
              { etf: "BOVA11", pct: "20%", desc: "Ações brasileiras (Ibovespa)" },
              { etf: "IVVB11", pct: "15%", desc: "S&P 500 (diversificação EUA)" },
              { etf: "GOLD11", pct: "5%", desc: "Ouro (proteção geopolítica)" },
            ]},
            { perfil: "⚖️ Moderado", alocacao: [
              { etf: "BOVA11", pct: "30%", desc: "Ações brasileiras" },
              { etf: "IVVB11", pct: "30%", desc: "S&P 500" },
              { etf: "NASD11", pct: "15%", desc: "Big techs americanas" },
              { etf: "DIVO11", pct: "15%", desc: "Dividendos BR" },
              { etf: "GOLD11", pct: "10%", desc: "Ouro" },
            ]},
            { perfil: "🚀 Arrojado", alocacao: [
              { etf: "IVVB11", pct: "35%", desc: "S&P 500" },
              { etf: "NASD11", pct: "25%", desc: "Nasdaq-100 (tech)" },
              { etf: "SMAL11", pct: "20%", desc: "Small caps brasileiras" },
              { etf: "BOVA11", pct: "10%", desc: "Ibovespa" },
              { etf: "HASH11", pct: "10%", desc: "Criptomoedas reguladas" },
            ]},
          ].map(({ perfil, alocacao }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-3">{perfil}</h3>
              <div className="space-y-2">
                {alocacao.map(({ etf, pct, desc }) => (
                  <div key={etf} className="flex items-center gap-3">
                    <div className="w-10 text-right text-xs font-bold text-invest shrink-0">{pct}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2">
                      <div className="bg-invest h-2 rounded-full" style={{ width: pct }} />
                    </div>
                    <div className="text-xs min-w-[80px] font-medium">{etf}</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já investe em ETFs? 📊</h3>
          <p className="text-muted-foreground">Conta nos comentários qual é o seu favorito! 👇</p>
        </div>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este conteúdo é educacional e não constitui recomendação de investimento. Consulte um assessor certificado antes de investir.
        </p>
      </div>

      <RelatedPosts currentSlug="etfs-b3-guia-completo-2026" />
      <CommentSection postId="etfs-b3-guia-completo-2026" postTitle="ETFs na B3 em 2026: Guia Completo para Investir em Fundos de Índice" />
    </article>
  );
};

export default ETFsB3Guia2026;
