import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/bitcoin-2026-vale-comprar.webp";

const Bitcoin2026ValeComprar = () => {
  useEffect(() => {
    trackArticleRead("bitcoin-2026-vale-comprar", "Bitcoin em 2026: vale comprar agora ou esperar?", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Bitcoin 2026</span>
      </nav>

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Bitcoin em 2026: vale comprar agora ou esperar?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          O Bitcoin corrigiu forte após o recorde de US$ 125 mil em 2025 e agora ronda os US$ 70-73 mil. Entenda o cenário e se faz sentido investir agora.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="Bitcoin 2026 - gráfico de volatilidade" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Se você acompanha o mercado cripto, já sabe que 2026 não está sendo aquele rali explosivo que alguns analistas prometiam. Mas também está longe de ser um "inverno cripto". O Bitcoin está hoje cotado em torno de <strong>US$ 70 mil a 73 mil</strong>, após ter batido o recorde histórico de US$ 125 mil em 2025 — e depois corrigido forte.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que rolou com o Bitcoin em 2025 e 2026</h2>
        <p className="text-muted-foreground leading-relaxed">
          Em 2025, o Bitcoin fez história ao atingir <strong>US$ 125 mil</strong>, impulsionado pelo enorme fluxo de capital institucional via ETFs americanos, pelo halving de abril de 2024 e pelo ambiente político favorável nos EUA. Mas a euforia não durou para sempre. Com incertezas geopolíticas e um ambiente macroeconômico mais tenso no início de 2026, o BTC sofreu uma correção significativa, chegando a rondar os US$ 80 mil no pico da crise das tarifas, antes de se estabilizar na faixa atual dos US$ 70 mil.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Em reais, isso representa aproximadamente <strong>R$ 380 mil por Bitcoin</strong> — ainda um número expressivo.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O mercado institucional segue comprando</h2>
        <p className="text-muted-foreground leading-relaxed">
          Uma das mudanças mais importantes dos últimos dois anos é que o Bitcoin deixou de ser só um ativo especulativo para virar pauta de grandes fundos e empresas. A demanda institucional por Bitcoin permaneceu robusta em 2026, com ETFs de Bitcoin nos EUA registrando entradas líquidas constantes mesmo durante as quedas.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Isso reduz (mas não elimina) a volatilidade extrema que marcou os ciclos anteriores. Analistas da área comparam os movimentos atuais com ciclos passados: em 2018, o Bitcoin caiu 80%. Uma queda de 30% hoje, como a que aconteceu, <em>"não pode nem ser considerada o início de um movimento acentuado"</em>, como resumiu Alexandre Vasarhelyi, fundador da B2V Crypto.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Vale comprar agora?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A resposta honesta é: <strong>depende do seu perfil e do tamanho da posição</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Para quem ainda não tem exposição a cripto, uma alocação pequena — entre 1% e 5% da carteira — é uma forma de participar do potencial de valorização sem se expor demais ao risco. Para quem já tem posição, o momento de correção pode ser visto como acumulação.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O que especialistas alertam é contra a estratégia de apostar tudo esperando um "rali até US$ 200 mil". O mercado cripto continua sendo o mais volátil do mundo.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Pontos de atenção</h2>
        <div className="space-y-3">
          {[
            "Regulação avançando: vários países estão finalizando regulamentações para ativos digitais em 2026, o que pode trazer mais estabilidade — mas também mais controle",
            "ETFs de Bitcoin: continuam sendo o caminho mais prático para investidores brasileiros acessarem o ativo com segurança (via corretoras como a B3)",
            "Correlação com o mercado: em momentos de crise, o Bitcoin ainda cai junto com ações de risco",
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
            <span>O Bitcoin não morreu. Mas também não é milagre. Entenda o risco antes de entrar. Conteúdo informativo — não constitui recomendação de investimento.</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["Bitcoin", "criptomoedas", "BTC", "ETF Bitcoin", "investimentos 2026", "halving", "cripto"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <RelatedPosts currentSlug="bitcoin-2026-vale-comprar" />
      <CommentSection postId="bitcoin-2026-vale-comprar" />
    </article>
  );
};

export default Bitcoin2026ValeComprar;
