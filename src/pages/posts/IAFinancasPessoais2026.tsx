import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, Brain, CheckCircle2, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-financas-pessoais-2026.webp";

const IAFinancasPessoais2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-para-financas-pessoais-2026", "Como usar IA para organizar suas finanças em 2026", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">IA e Finanças Pessoais</span>
      </nav>

      <header className="mb-8">
        <div className="flex gap-2">
          <CategoryBadge category="invest" size="lg" />
          <CategoryBadge category="ia" size="lg" />
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
          Como usar IA para organizar suas finanças em 2026
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Ferramentas de inteligência artificial já conseguem categorizar gastos, simular investimentos e responder dúvidas financeiras personalizadas. Veja como começar.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Mar 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 4 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="IA e finanças pessoais 2026" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Você provavelmente já usa IA no trabalho ou pra criar conteúdo. Mas você já pensou em usar inteligência artificial para cuidar do seu bolso? Em 2026, isso virou realidade acessível — e quem ainda não experimentou está deixando dinheiro (e tempo) na mesa.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA pode fazer pelas suas finanças</h2>
        <p className="text-muted-foreground leading-relaxed">Ferramentas de IA já conseguem hoje:</p>
        <div className="space-y-3">
          {[
            "Categorizar gastos automaticamente a partir do extrato do banco ou cartão de crédito",
            "Identificar padrões de consumo e alertar quando você está gastando mais do que o normal em alguma categoria",
            "Simular cenários de investimento com base no seu perfil e nos dados do mercado atual",
            "Responder dúvidas financeiras de forma personalizada, sem precisar pagar uma hora de consultoria",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <Brain className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Aplicativos como Organizze, Mobills e GuiaBolso já incorporaram funcionalidades de IA nos últimos anos. Mas o uso de assistentes como ChatGPT ou Gemini para planejamento financeiro pessoal cresceu muito.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como funciona na prática?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Você pode, por exemplo, colar seu extrato bancário em um chat de IA e pedir para ele identificar onde você está gastando mais, sugerir onde cortar e simular quanto você teria daqui a 12 meses se guardasse R$ 500 por mês com rendimento de CDI.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Não é magia — é <strong>análise de dados aplicada ao seu dia a dia</strong>. E funciona.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA não faz (ainda)</h2>
        <p className="text-muted-foreground leading-relaxed">
          Importante deixar claro: IA não substitui um planejador financeiro certificado para decisões complexas, como planejamento de aposentadoria, herança ou escolha de produtos de investimento específicos. Para isso, ainda vale buscar um profissional.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Também é fundamental cuidar da <strong>privacidade dos dados financeiros</strong>. Evite inserir número de conta, senhas ou documentos em ferramentas que não têm política clara de proteção de dados.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Por onde começar?</h2>
        <div className="space-y-3">
          {[
            "Liste suas receitas e despesas mensais — pode ser numa planilha simples",
            "Escolha uma ferramenta: um app de finanças pessoais ou um assistente de IA",
            "Defina uma meta: quitar dívida, montar reserva de emergência ou começar a investir",
            "Acompanhe mensalmente e ajuste conforme necessário",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">
            Com Selic ainda alta e inflação controlada, 2026 é um bom momento para colocar as finanças em ordem. A IA pode ser sua aliada nisso.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["IA", "finanças pessoais", "ChatGPT", "planejamento financeiro", "organizar gastos", "investimentos 2026"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <RelatedPosts currentSlug="ia-para-financas-pessoais-2026" />
      <CommentSection postId="ia-para-financas-pessoais-2026" />
    </article>
  );
};

export default IAFinancasPessoais2026;
