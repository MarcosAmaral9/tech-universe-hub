import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/dolar-queda-2026-investir-exterior.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const DolarQueda2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "dolar-queda-2026-investir-exterior",
      "Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior",
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
            Câmbio · Investimentos Externos · BDR · ETF
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Dólar queda 2026 como investir no exterior" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O dólar fechou a semana passada cotado a <strong>R$ 5,01</strong> — a menor cotação em dois anos. No acumulado de 2026, a moeda americana caiu <strong>9,21%</strong> frente ao real. Para o investidor que quer diversificar em ativos internacionais, esse momento é uma janela rara: comprar dólares baratos para investir em empresas americanas que, em dólares, estão em máximas históricas. O paradoxo é real — e exige estratégia para não errar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Por Que o Dólar Está Tão Barato?
        </h2>
        <p>
          A queda do dólar em 2026 é estrutural — não é acidente ou intervenção do Banco Central. São quatro fatores simultâneos:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { fator: "1. Fluxo estrangeiro record no Brasil", desc: "Investidores globais estão comprando ativos brasileiros (bolsa, títulos, imóveis) por conta da Selic real entre os mais altos do mundo e da percepção de que o Brasil é 'emergente com fundamentos'. Essa compra exige vender dólares para comprar reais — apreciando o real.", icon: "🌊" },
            { fator: "2. Petróleo mais barato recentemente", desc: "A reabertura do Estreito de Ormuz pelo Irã derrubou o petróleo ~10% em uma semana. Como o Brasil é exportador líquido de petróleo, menos receita de exportação significa menos dólares entrando — mas o efeito ainda foi dominado pelo fluxo financeiro.", icon: "🛢️" },
            { fator: "3. Dólar fraco globalmente (DXY)", desc: "O índice DXY, que mede o dólar contra uma cesta de moedas globais, está em queda desde o pico de 2025. A desaceleração econômica americana e as expectativas de corte de juros pelo Fed enfraquecem o dólar em todas as moedas.", icon: "📉" },
            { fator: "4. Ceasefire Irã-EUA", desc: "O cessar-fogo frágil na guerra entre EUA e Irã reduziu a aversão ao risco globalmente. Isso beneficia moedas emergentes como o real, que tendem a cair quando há crise geopolítica e subir quando os mercados se acalmam.", icon: "🕊️" },
          ].map(({ fator, desc, icon }) => (
            <div key={fator} className="flex gap-3 bg-card rounded-xl border border-invest/20 p-4">
              <span className="text-xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{fator}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          A Janela de Oportunidade: Comprar Dólar Barato para Investir Caro
        </h2>
        <p>
          O raciocínio é simples: se você acredita que o dólar vai voltar a R$ 5,40–R$ 5,50 (projeção Focus para fim de 2026) e que os ativos americanos continuarão valorizando, <strong>comprar dólares hoje a R$ 5,01 é um duplo benefício</strong>: ganho cambial quando o real se depreciar + ganho dos ativos americanos.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-invest/20 p-6">
          <h3 className="font-bold mb-4 text-sm">📊 Simulação: R$ 10.000 investidos em IVVB11 agora</h3>
          <div className="space-y-3">
            {[
              { cen: "Cenário base (dólar volta a R$ 5,40, S&P sobe 8%)", resultado: "+22% total (8% do S&P + 7,8% cambial + ganho composto)", cor: "text-invest" },
              { cen: "Cenário otimista (dólar vai a R$ 5,60, S&P sobe 15%)", resultado: "+34% total", cor: "text-invest" },
              { cen: "Cenário neutro (dólar fica em R$ 5,10, S&P sobe 8%)", resultado: "+10% apenas do S&P + 1,8% cambial", cor: "text-geek" },
              { cen: "Cenário adverso (dólar cai para R$ 4,80, guerra volta)", resultado: "+8% S&P - 4% cambial = +4% total (ainda positivo em reais)", cor: "text-geek" },
            ].map(({ cen, resultado, cor }) => (
              <div key={cen} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="text-xs text-muted-foreground">{cen}</p>
                <p className={`text-sm font-bold ${cor}`}>{resultado}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">*Simulações aproximadas. Não considera IR (15% sobre ganho em 24+ meses) nem come-cotas de fundos.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
      <AdInArticle />
          As Melhores Formas de Investir no Exterior Pelo Brasil
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Instrumento</th>
              <th className="text-left py-3 px-4">O Que É</th>
              <th className="text-left py-3 px-4">Min. Investimento</th>
              <th className="text-left py-3 px-4">Tributação</th>
            </tr></thead>
            <tbody>
              {[
                ["IVVB11 (ETF S&P 500)", "Replica o S&P 500 em reais. Melhor para exposição ampla a EUA", "R$ 20–50 (1 cota)", "15% sobre ganho (ETF)"],
                ["NASD11 (ETF Nasdaq 100)", "Replica o Nasdaq 100 — foco em big techs", "R$ 20–50 (1 cota)", "15% sobre ganho (ETF)"],
                ["BDRs de empresas individuais", "Recibos de ações estrangeiras (Apple, Google, Nvidia) negociados na B3", "R$ 50–200 (por código)", "15% sobre dividendos, 15% sobre ganho"],
                ["Fundos internacionais (ex: MSCI World)", "Fundos que investem em índices globais — gestão profissional", "R$ 500–R$ 1.000", "Come-cotas semestral (15%)"],
                ["Conta na corretora americana (Interactive Brokers)", "Investir diretamente em dólares em EUA", "US$ 0 (depósito via câmbio)", "DARF mensal acima de R$ 35k ganho"],
                ["Transferência via Wise / câmbio turismo", "Enviar reais e comprar ETFs diretamente nos EUA", "Qualquer valor", "DARF conforme legislação cambial"],
              ].map(([inst, oq, min, trib]) => (
                <tr key={inst} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest text-xs">{inst}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{oq}</td>
                  <td className="py-3 px-4 text-xs">{min}</td>
                  <td className="py-3 px-4 text-xs">{trib}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Quais ETFs Internacionais Estão em Alta Agora
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { etf: "IVVB11 — iShares S&P 500", perf: "+18% em 12 meses (em BRL)", tese: "Exposição a 500 maiores empresas dos EUA. Diversificação instantânea. O mais líquido da categoria na B3.", perfil: "Todos os perfis" },
            { etf: "NASD11 — Nasdaq 100", perf: "+24% em 12 meses (em BRL)", tese: "Concentrado em big techs (Apple, Microsoft, Nvidia, Meta, Alphabet). Alta volatilidade, alto potencial.", perfil: "Moderado a arrojado" },
            { etf: "ACWI11 — MSCI All Country", perf: "+14% em 12 meses (em BRL)", tese: "EUA + Europa + Ásia + Emergentes. Diversificação global máxima. Menor volatilidade.", perfil: "Conservador" },
            { etf: "GOLD11 / Ouro", perf: "+31% em 12 meses (em BRL)", tese: "Ouro disparou com a guerra no Oriente Médio. Hedge contra inflação e geopolítica. Não é exatamente 'exterior' mas é dolarizado.", perfil: "Hedge conservador" },
          ].map(({ etf, perf, tese, perfil }) => (
            <div key={etf} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{etf}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-invest/15 text-invest px-2 py-0.5 rounded-full font-bold">{perf}</span>
                  <span className="text-xs text-muted-foreground">{perfil}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{tese}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Cuidados: O Que Pode Fazer o Dólar Subir de Volta
        </h2>
        <ul>
          <li><strong>Reescalada da guerra Irã-EUA:</strong> O cessar-fogo é frágil. Se os conflitos voltarem, dólar e petróleo disparam e o real deprecia rapidamente. Isso seria ruim para quem ainda não comprou dólares, mas ótimo para quem já está comprado.</li>
          <li><strong>Incerteza eleitoral:</strong> Com o calendário eleitoral de 2026, qualquer pesquisa que mostre disputa acirrada pode pressionar o câmbio. O mercado precifica risco fiscal do candidato e volatilidade eleitoral nas moedas emergentes.</li>
          <li><strong>Saída de capital estrangeiro:</strong> Se o Fed aumentar juros nos EUA inesperadamente, parte do capital que está no Brasil sai para aproveitar o juro americano mais alto — e o dólar sobe.</li>
          <li><strong>Dados fiscais piores:</strong> O déficit público brasileiro está no radar. Qualquer surpresa negativa nas contas do governo pode derrubar o real.</li>
        </ul>
        <p>
          A conclusão prática: <strong>o momento é bom para começar ou ampliar a posição internacional</strong>, mas com sizing adequado ao perfil de risco (10–25% da carteira para perfis moderados) e sem tentar market timing perfeito. O real pode cair mais antes de voltar — e isso seria ainda melhor para quem já está posicionado em dólar.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você investe em ativos dolarizados? 🌎</h3>
          <p className="text-muted-foreground">Conta nos comentários seu portfólio internacional! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>

      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="dolar-queda-2026-investir-exterior" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="dolar-queda-2026-investir-exterior" postTitle="Dólar no Menor Nível em 2 Anos: Como Aproveitar a Queda Cambial para Investir no Exterior" />
    </article>
  );
};

export default DolarQueda2026;