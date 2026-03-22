import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, Building2, CheckCircle2, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/fiis-2026-ainda-vale.webp";

const FIIs2026AindaVale = () => {
  useEffect(() => {
    trackArticleRead("fiis-2026-ainda-vale-investir", "FIIs em 2026: ainda vale a pena investir com a Selic caindo?", "invest");
  }, []);

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
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          FIIs em 2026: ainda vale a pena investir com a Selic caindo?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Com o início do ciclo de queda dos juros, os Fundos Imobiliários voltam ao radar. Entenda o cenário, os setores mais promissores e os cuidados antes de investir.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="FIIs em 2026 - prédios e dividendos" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Com a Selic começando a cair, muita gente está olhando para os Fundos Imobiliários (FIIs) com interesse renovado. E faz sentido: historicamente, o início de um ciclo de queda dos juros é um dos melhores momentos para entrar nesse tipo de ativo.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que são FIIs e por que ficam mais atrativos com juros menores</h2>
        <p className="text-muted-foreground leading-relaxed">
          FIIs são fundos que investem em imóveis ou em títulos ligados ao setor imobiliário. Eles são obrigados por lei a distribuir pelo menos <strong>95% do lucro</strong> aos cotistas todo mês — o famoso "dividendo" isento de Imposto de Renda para pessoa física.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Quando a Selic está em 15%, concorrer com renda fixa é difícil. Com a queda gradual dos juros, os FIIs voltam a chamar atenção porque seus rendimentos mensais ficam relativamente mais atrativos, e as <strong>cotas tendem a se valorizar</strong> conforme os juros caem.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">FIIs de Papel vs. FIIs de Tijolo</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Papel (CRI, LCI)</h3>
            <p className="text-sm text-muted-foreground">Investem em títulos de dívida do setor imobiliário. Com a Selic alta, esses fundos se beneficiam diretamente. No cenário de queda gradual, ainda têm bom desempenho no curto prazo.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-3xl mb-3">🧱</div>
            <h3 className="font-bold mb-2 text-[hsl(var(--invest-color))]">FIIs de Tijolo</h3>
            <p className="text-sm text-muted-foreground">Investem em imóveis físicos: shoppings, lajes corporativas, logística. Mais sensíveis ao ciclo de juros — tendem a se valorizar com mais força quando a queda consolida. Aposta para 1-2 anos à frente.</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          O mercado de FIIs no Brasil movimenta mais de <strong>R$ 200 bilhões</strong> em patrimônio líquido, com dividend yields médios entre 9% e 11% ao ano, conforme dados do setor.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Setores no radar em 2026</h2>
        <div className="space-y-3">
          {[
            "Logística e galpões industriais: demanda crescente por e-commerce e armazenamento",
            "Fundos de recebíveis (papel): ainda bem remunerados enquanto os juros não caem muito",
            "Shoppings e lajes corporativas: começam a se recuperar com a melhora do consumo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <Building2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Cuidados importantes</h2>
        <div className="space-y-3">
          {[
            "Evite FIIs com vacância alta ou carteira de imóveis desvalorizada",
            "Analise o P/VP: comprar abaixo de 1 significa pagar menos do que o fundo vale",
            "Diversifique entre tipos de FII para reduzir risco",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">
            FIIs não são renda fixa. Podem oscilar, ter quedas e distribuições irregulares. Mas para quem quer renda passiva mensal com isenção de IR e exposição ao mercado imobiliário, continuam sendo uma das melhores opções disponíveis no Brasil. Com o ciclo de queda da Selic se consolidando ao longo de 2026, o timing está a favor de quem entrar agora com paciência e visão de médio prazo.
          </p>
          <p className="text-xs text-muted-foreground mt-3 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            Conteúdo informativo. Não constitui recomendação de investimento. Consulte um profissional certificado antes de tomar decisões financeiras.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["FIIs", "fundos imobiliários", "dividendos", "renda passiva", "Selic", "investimentos 2026", "P/VP"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <RelatedPosts currentSlug="fiis-2026-ainda-vale-investir" />
      <CommentSection postId="fiis-2026-ainda-vale-investir" />
    </article>
  );
};

export default FIIs2026AindaVale;
