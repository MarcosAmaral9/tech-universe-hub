import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, Shield, AlertTriangle, PiggyBank, BarChart3, Target } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/inflacao-proteger-investimentos-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const InflacaoProtegerInvestimentos2026 = () => {
  useEffect(() => {
    trackArticleRead("inflacao-proteger-investimentos-2026", "Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Inflação 2026 — como proteger seus investimentos" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Boletim Focus</strong> de 30 de março de 2026 trouxe más notícias para quem acompanha a inflação: a projeção do IPCA para 2026 subiu de <strong>4,17% para 4,31%</strong>, acima da meta de 3,0% com tolerância de 1,5 ponto percentual. Para 2027, a expectativa subiu para 3,84%. Com a guerra no Oriente Médio pressionando commodities, proteger o poder de compra dos seus investimentos nunca foi tão importante.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-amber-400" />
          Por Que a Inflação Está Subindo?
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { fator: "Guerra no Oriente Médio", impacto: "Alta do petróleo pressiona combustíveis e transporte. O barril de Brent opera acima de US$ 90 desde fevereiro.", icon: "⛽" },
            { fator: "Dólar pressionado", impacto: "Com o cenário geopolítico, o dólar oscila entre R$ 5,50 e R$ 5,70, encarecendo importações.", icon: "💵" },
            { fator: "Alimentos em alta", impacto: "Seca no Sul e excesso de chuvas no Norte prejudicaram safras, com alta de 6,2% nos alimentos nos últimos 12 meses.", icon: "🍞" },
            { fator: "Serviços resilientes", impacto: "A inflação de serviços segue acima de 5%, impulsionada por reajustes salariais e planos de saúde.", icon: "📋" },
          ].map((item) => (
            <div key={item.fator} className="bg-card rounded-xl border border-amber-500/20 p-4 flex gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-amber-400 mb-1">{item.fator}</h4>
                <p className="text-sm text-muted-foreground mb-0">{item.impacto}</p>
              </div>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          O Cenário Macroeconômico em Números
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Indicador</th>
              <th className="text-left py-3 px-4">Atual</th>
              <th className="text-left py-3 px-4">Projeção Fim 2026</th>
              <th className="text-left py-3 px-4">Projeção 2027</th>
            </tr></thead>
            <tbody>
              {[
                ["IPCA (inflação)", "4,31% (12m)", "4,31%", "3,84%"],
                ["Selic (taxa básica)", "13,25%", "12,50%", "10,50%"],
                ["PIB (crescimento)", "2,8% (2025)", "2,1%", "2,3%"],
                ["Dólar (câmbio)", "R$ 5,60", "R$ 5,45", "R$ 5,30"],
                ["Ibovespa", "137.500 pts", "145.000 pts", "—"],
              ].map(([ind, atual, proj26, proj27]) => (
                <tr key={ind} className="border-t border-border">
                  <td className="py-3 px-4 font-bold">{ind}</td>
                  <td className="py-3 px-4 text-amber-400">{atual}</td>
                  <td className="py-3 px-4">{proj26}</td>
                  <td className="py-3 px-4 text-muted-foreground">{proj27}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Fonte: Boletim Focus/BCB — 30 de março de 2026</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />
          5 Estratégias para Proteger Seus Investimentos
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">1. Tesouro IPCA+ (NTN-B)</h3>
        <p>
          O <strong>Tesouro IPCA+</strong> é o investimento mais direto contra a inflação. Ele paga a variação do IPCA + uma taxa prefixada. Em abril de 2026, os títulos estão pagando <strong>IPCA + 6,8% ao ano</strong> para vencimentos em 2035 — um rendimento real historicamente alto.
        </p>
        <div className="not-prose my-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-0">
            💡 <strong>Dica:</strong> Para quem investe a longo prazo (aposentadoria, educação dos filhos), o Tesouro IPCA+ 2045 com juros semestrais pode ser ideal. Você protege o capital contra inflação E recebe renda periódica.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">2. CDBs e LCIs/LCAs Indexados ao IPCA</h3>
        <p>
          Bancos médios estão oferecendo CDBs atrelados ao IPCA com taxas de até <strong>IPCA + 8,5% ao ano</strong> para prazos de 3+ anos. LCIs e LCAs com indexação ao IPCA têm a vantagem adicional de <strong>isenção de Imposto de Renda</strong> para pessoa física.
        </p>

        <AdRectangle className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-3">3. Fundos Imobiliários (FIIs) de Tijolo</h3>
        <p>
          FIIs de lajes corporativas e galpões logísticos tendem a se beneficiar da inflação, pois os <strong>contratos de aluguel são reajustados pelo IPCA ou IGP-M</strong>. Com o IFIX acumulando alta de 8,3% nos últimos 12 meses e dividend yield médio de 9,2%, os FIIs continuam sendo uma boa proteção.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">4. Ações de Setores Defensivos</h3>
        <p>
          Empresas de <strong>utilidades públicas</strong> (energia, saneamento) e <strong>bancos</strong> tendem a performar bem em cenários inflacionários. Suas receitas são indexadas à inflação (tarifas reajustadas) e os bancos lucram mais com juros altos.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Por que protege contra inflação</th>
              <th className="text-left py-3 px-4">Exemplos</th>
            </tr></thead>
            <tbody>
              {[
                ["Energia Elétrica", "Tarifas reajustadas pelo IPCA anualmente", "EGIE3, TAEE11, ENGI11"],
                ["Saneamento", "Receitas indexadas a índices de preço", "SAPR11, SBSP3"],
                ["Bancos", "Spread bancário aumenta com Selic alta", "ITUB4, BBDC4, BBAS3"],
                ["Seguradoras", "Prêmios reajustados + float investido em renda fixa", "BBSE3, CXSE3"],
              ].map(([s, p, e]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-emerald-400">{s}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{p}</td>
                  <td className="py-3 px-4">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">5. Dólar e Ouro como Hedge</h3>
        <p>
          Em cenários de inflação persistente, ter uma <strong>exposição de 5-10% da carteira em dólar</strong> (via ETFs como IVVB11 ou fundos cambiais) e <strong>2-5% em ouro</strong> (via GOLD11 ou fundos de ouro) pode proteger contra a desvalorização do real.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <PiggyBank className="h-7 w-7 text-violet-400" />
          O Que NÃO Fazer em Cenário de Inflação Alta
        </h2>
        <ul>
          <li>❌ <strong>Deixar dinheiro parado na poupança</strong> — a poupança rende ~9,28% ao ano, abaixo de CDBs e Tesouro</li>
          <li>❌ <strong>Investir tudo em prefixado curto</strong> — se a inflação subir mais, o rendimento real será negativo</li>
          <li>❌ <strong>Ignorar a diversificação</strong> — concentrar em um único ativo amplia o risco</li>
          <li>❌ <strong>Comprar dólar no pânico</strong> — câmbio é volátil; faça aportes regulares, não tudo de uma vez</li>
          <li>❌ <strong>Esquecer da reserva de emergência</strong> — antes de proteger contra inflação, tenha 6 meses de gastos em Tesouro Selic</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-violet-400" />
          Modelo de Carteira Defensiva para Inflação Alta
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Classe</th>
              <th className="text-left py-3 px-4">Alocação sugerida</th>
              <th className="text-left py-3 px-4">Produto</th>
            </tr></thead>
            <tbody>
              {[
                ["Renda Fixa IPCA+", "35-40%", "Tesouro IPCA+ 2035, CDBs IPCA+"],
                ["Renda Fixa Pós-fixada", "20-25%", "Tesouro Selic, CDB 100% CDI (reserva)"],
                ["FIIs", "15-20%", "FIIs de tijolo (logística, lajes)"],
                ["Ações Defensivas", "10-15%", "Utilidades, bancos, seguradoras"],
                ["Hedge (Dólar + Ouro)", "5-10%", "IVVB11, GOLD11, fundos cambiais"],
              ].map(([c, a, p]) => (
                <tr key={c} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{c}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{a}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          A inflação acima da meta não é motivo para pânico, mas exige <strong>posicionamento estratégico</strong>. Títulos indexados ao IPCA, FIIs de tijolo e ações de setores defensivos formam o tripé de proteção mais eficiente para o investidor brasileiro em 2026. O mais importante: <strong>não deixe seu dinheiro parado</strong> — a inflação come o poder de compra silenciosamente.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Como você está protegendo seus investimentos da inflação?</h3>
          <p className="text-muted-foreground">Compartilhe sua estratégia nos comentários! 👇</p>
        </div>
      </div>
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="inflacao-proteger-investimentos-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="inflacao-proteger-investimentos-2026" postTitle="Inflação Acima da Meta em 2026" />
    </article>
  );
};

export default InflacaoProtegerInvestimentos2026;