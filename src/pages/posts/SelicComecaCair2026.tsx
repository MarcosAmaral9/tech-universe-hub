import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, TrendingDown, CheckCircle2, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/selic-cair-2026.webp";

const SelicComecaCair2026 = () => {
  useEffect(() => {
    trackArticleRead("selic-comeca-cair-2026", "Selic começa a cair: o que muda nos seus investimentos agora?", "invest");
  }, []);

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
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min de leitura</span>
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

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Por que isso importa pra você?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Quando os juros estão altos, investir em renda fixa é quase fácil demais. Qualquer CDB pagando 100% do CDI entregava retornos excelentes sem muito esforço. Com a queda da Selic, esse cenário começa a mudar. Ainda vai levar um tempo para os retornos ficarem menos atrativos, mas <strong>o momento de se reposicionar é agora</strong>, não quando já tiver perdido a janela.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que ainda vale a pena na renda fixa?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Enquanto os juros ainda estão em níveis elevados, títulos prefixados e indexados ao IPCA seguem sendo ótimas escolhas. Dados da Anbima mostram que os títulos públicos prefixados de longo prazo foram o investimento de maior rentabilidade da renda fixa em 2025, com o índice IRF-M 1+ avançando <strong>20,07% no ano</strong> — o melhor resultado entre todos os indicadores da entidade naquele período.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O raciocínio é simples: ao travar uma taxa prefixada hoje, você garante um bom retorno mesmo quando os juros caírem mais. O <strong>Tesouro IPCA+</strong> também segue interessante para quem quer proteger o poder de compra no longo prazo.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">E a renda variável?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Com a queda dos juros, a tendência é que dinheiro migre gradualmente para a bolsa em busca de rendimentos maiores. <strong>Fundos Imobiliários (FIIs)</strong> e ações de setores sensíveis ao crédito — como construção civil, varejo e educação — costumam ser os primeiros a reagir positivamente quando o ciclo de corte começa.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Isso não significa largar tudo e ir para a renda variável amanhã. Mas vale começar a diversificar aos poucos, especialmente se você tem um horizonte de investimento maior que dois anos.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Resumo prático</h2>
        <div className="space-y-3">
          {[
            "Renda fixa prefixada: ainda vale a pena travar taxas agora, antes de caírem mais",
            "Tesouro IPCA+: boa opção para longo prazo e proteção contra inflação",
            "FIIs e ações: começam a ficar mais atrativos com a queda dos juros",
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
            <span>O ciclo está mudando. Quem entender isso antes vai sair na frente. Conteúdo informativo — não constitui recomendação de investimento.</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["Selic", "renda fixa", "investimentos", "Copom", "juros 2026", "tesouro direto", "FIIs"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <RelatedPosts currentSlug="selic-comeca-cair-2026" />
      <CommentSection postId="selic-comeca-cair-2026" />
    </article>
  );
};

export default SelicComecaCair2026;
