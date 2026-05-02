import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Building2, Shield, TrendingUp, BarChart3, PiggyBank, Target } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/fiis-defensivos-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const FIIsDefensivosAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("fiis-defensivos-abril-2026", "FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="FIIs Defensivos Abril 2026 — estratégia de investimento" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com a inflação acima da meta e a Selic ainda em <strong>13,25% ao ano</strong>, o mercado de <strong>Fundos Imobiliários (FIIs)</strong> vive um momento de seleção estratégica. Grandes corretoras como XP e BTG Pactual ajustaram suas carteiras recomendadas para abril com <strong>perfil defensivo</strong>, priorizando fundos de recebíveis (papel) e logística. Neste guia, explicamos o cenário e apresentamos os critérios para montar uma carteira de FIIs resiliente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          O Cenário dos FIIs em Abril de 2026
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "137.520 pts", desc: "IFIX em 01/04/2026" },
            { valor: "+8,3%", desc: "Retorno IFIX 12 meses" },
            { valor: "9,2%", desc: "Dividend Yield médio IFIX" },
            { valor: "R$ 48,5 bi", desc: "Volume negociado no 1T26" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-violet-500/20 p-4 text-center">
              <div className="text-2xl font-bold text-violet-400">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <p>
          O primeiro trimestre de 2026 foi positivo para os FIIs, com o IFIX acumulando alta puxada por fundos de recebíveis (CRIs) que se beneficiam da Selic alta. No entanto, o cenário de inflação persistente e a incerteza geopolítica exigem cautela na seleção de ativos.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />
          O Que É uma Estratégia Defensiva em FIIs?
        </h2>
        <p>
          Uma carteira defensiva de FIIs prioriza:
        </p>
        <ul>
          <li><strong>Previsibilidade de receita:</strong> fundos com contratos longos e inquilinos de alta qualidade</li>
          <li><strong>Proteção contra inflação:</strong> fundos de recebíveis indexados ao IPCA e CDI</li>
          <li><strong>Baixa vacância:</strong> imóveis localizados em regiões premium com demanda estável</li>
          <li><strong>Diversificação:</strong> mix de segmentos para reduzir risco específico</li>
          <li><strong>Liquidez:</strong> fundos com volume de negociação diário acima de R$ 1 milhão</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building2 className="h-7 w-7 text-violet-400" />
          Segmentos de FIIs: Onde Estão as Oportunidades
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Segmento</th>
              <th className="text-left py-3 px-4">Cenário Atual</th>
              <th className="text-left py-3 px-4">DY Médio</th>
              <th className="text-left py-3 px-4">Recomendação</th>
            </tr></thead>
            <tbody>
              {[
                ["Recebíveis (Papel)", "Favorecido pela Selic alta — CRIs indexados ao CDI e IPCA", "11,5%", "⬆️ Overweight"],
                ["Logística / Galpões", "Demanda aquecida por e-commerce, vacância baixa", "8,8%", "⬆️ Overweight"],
                ["Lajes Corporativas", "Recuperação gradual, vacância caindo em SP", "7,2%", "➡️ Neutro"],
                ["Shoppings", "Vendas em alta, mas desaceleração do consumo preocupa", "8,1%", "➡️ Neutro"],
                ["Híbridos / FOFs", "Diversificação automática, mas taxas duplas", "9,4%", "⬇️ Underweight"],
                ["Hotéis / Residencial", "Volátil, dependente de turismo e ciclo imobiliário", "6,5%", "⬇️ Underweight"],
              ].map(([s, c, dy, r]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{s}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{c}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{dy}</td>
                  <td className="py-3 px-4">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          Critérios para Selecionar FIIs Defensivos
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3">✅ Busque</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>P/VP abaixo de 1,05</strong> — evita pagar ágio excessivo</li>
              <li>• <strong>DY acima de 9% ao ano</strong> — rendimento real positivo</li>
              <li>• <strong>Vacância abaixo de 8%</strong> — indica demanda saudável</li>
              <li>• <strong>Contratos longos</strong> — prazo médio de locação acima de 5 anos</li>
              <li>• <strong>Inquilinos de qualidade</strong> — grandes empresas com baixo risco de inadimplência</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">❌ Evite</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>FIIs monoativo</strong> — risco concentrado em um único imóvel</li>
              <li>• <strong>Vacância acima de 20%</strong> — sinal de problemas estruturais</li>
              <li>• <strong>Alavancagem excessiva</strong> — dívida/patrimônio acima de 40%</li>
              <li>• <strong>Liquidez muito baixa</strong> — volume diário abaixo de R$ 300 mil</li>
              <li>• <strong>DY insustentável</strong> — se acima de 15%, pode ser distribuição de capital</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <PiggyBank className="h-7 w-7 text-violet-400" />
          Como os FIIs de Recebíveis se Beneficiam da Selic Alta
        </h2>
        <p>
          Os FIIs de papel (recebíveis) investem em <strong>Certificados de Recebíveis Imobiliários (CRIs)</strong>, que são títulos de dívida de empresas do setor imobiliário. Quando a Selic está alta:
        </p>
        <ul>
          <li>✅ CRIs indexados ao <strong>CDI</strong> pagam mais, pois o CDI acompanha a Selic</li>
          <li>✅ CRIs indexados ao <strong>IPCA</strong> protegem contra inflação E pagam spread</li>
          <li>✅ O rendimento é <strong>isento de IR</strong> para pessoa física (dividendos de FIIs)</li>
          <li>⚠️ Risco: se a Selic cair rápido, os dividendos podem diminuir (para CRIs pós-fixados)</li>
        </ul>
        <div className="not-prose my-4 bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-0">
            💡 <strong>Estratégia:</strong> Monte uma carteira com <strong>60% CRIs IPCA+ e 40% CRIs CDI+</strong>. Se a Selic começar a cair, a parcela IPCA+ mantém rendimento atrativo via spread real. A parcela CDI+ gera caixa forte enquanto os juros permanecem altos.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-violet-400" />
          Modelo de Carteira Defensiva de FIIs
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Segmento</th>
              <th className="text-left py-3 px-4">Alocação</th>
              <th className="text-left py-3 px-4">Objetivo</th>
            </tr></thead>
            <tbody>
              {[
                ["Recebíveis (IPCA+)", "30%", "Proteção contra inflação + spread real"],
                ["Recebíveis (CDI+)", "20%", "Rendimento alto enquanto Selic estiver elevada"],
                ["Logística / Galpões", "20%", "Crescimento + contratos longos + e-commerce"],
                ["Lajes Corporativas", "15%", "Recuperação de vacância + reajuste IPCA"],
                ["Shoppings / Varejo", "10%", "Diversificação + exposição ao consumo"],
                ["Caixa (Selic/CDI)", "5%", "Oportunismo para quedas de mercado"],
              ].map(([s, a, o]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{s}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{a}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Quando Aumentar o Risco?</h2>
        <p>
          A postura defensiva deve ser mantida enquanto a inflação estiver acima de 4% e a Selic acima de 12%. Quando o Banco Central iniciar um ciclo mais agressivo de corte de juros (sinalizado para o 2° semestre de 2026), será o momento de:
        </p>
        <ul>
          <li>📈 Aumentar exposição a <strong>FIIs de tijolo</strong> (lajes, shoppings)</li>
          <li>📉 Reduzir parcela de <strong>recebíveis CDI+</strong> (que rendem menos com Selic baixa)</li>
          <li>🔄 Considerar <strong>FIIs de desenvolvimento</strong> para capturar valorização imobiliária</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Em abril de 2026, a estratégia mais prudente para FIIs é <strong>defensiva mas não paralisante</strong>. Fundos de recebíveis oferecem rendimento atrativo e proteção inflacionária, enquanto logística e lajes bem localizadas adicionam diversificação e potencial de valorização. O segredo é <strong>não tentar acertar o timing perfeito</strong>, mas montar uma carteira resiliente que performe bem em qualquer cenário de juros.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Quais FIIs estão na sua carteira de abril?</h3>
          <p className="text-muted-foreground">Compartilhe nos comentários! 👇</p>
        </div>
      </div>
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="fiis-defensivos-abril-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="fiis-defensivos-abril-2026" postTitle="FIIs Defensivos em Abril de 2026" />
    </article>
  );
};

export default FIIsDefensivosAbril2026;