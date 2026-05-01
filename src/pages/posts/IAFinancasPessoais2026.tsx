import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, Calendar, User, ChevronRight, Brain, CheckCircle2, AlertTriangle, Smartphone, ShieldAlert, Sparkles, MessageSquare, Calculator, ListChecks } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/ia-financas-pessoais-2026.webp";

const FERRAMENTAS = [
  { nome: "ChatGPT / Gemini", tipo: "Assistentes de IA", uso: "Análise de extratos, simulações, dúvidas financeiras personalizadas", custo: "Gratuito (versão básica)" },
  { nome: "Organizze", tipo: "App de finanças", uso: "Controle de gastos com categorização automática por IA", custo: "Freemium" },
  { nome: "Mobills", tipo: "App de finanças", uso: "Planejamento financeiro, metas e alertas inteligentes", custo: "Freemium" },
  { nome: "Cora / Neon", tipo: "Bancos digitais", uso: "Categorização automática e insights de gastos via IA", custo: "Gratuito" },
  { nome: "Planilhas + IA", tipo: "DIY", uso: "Google Sheets com Gemini integrado para análise de dados financeiros", custo: "Gratuito" },
];

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
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min de leitura</span>
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
        <p className="text-muted-foreground leading-relaxed">
          Segundo pesquisa da Febraban, <strong>67% dos brasileiros</strong> consideram que não têm controle adequado sobre seus gastos mensais. A IA pode ser a ferramenta que faltava para mudar esse cenário — sem planilhas complicadas e sem precisar virar contador.
        </p>

        <AdLeaderboard />

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA pode fazer pelas suas finanças</h2>
        <p className="text-muted-foreground leading-relaxed">Ferramentas de IA já conseguem hoje:</p>
        <div className="space-y-3">
          {[
            { icon: <ListChecks className="h-5 w-5" />, text: "Categorizar gastos automaticamente a partir do extrato do banco ou cartão de crédito" },
            { icon: <Sparkles className="h-5 w-5" />, text: "Identificar padrões de consumo e alertar quando você está gastando mais do que o normal em alguma categoria" },
            { icon: <Calculator className="h-5 w-5" />, text: "Simular cenários de investimento com base no seu perfil e nos dados do mercado atual" },
            { icon: <MessageSquare className="h-5 w-5" />, text: "Responder dúvidas financeiras de forma personalizada, sem precisar pagar uma hora de consultoria" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Ferramentas disponíveis em 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">Ferramenta</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Tipo</th>
      <AdInArticle />
                <th className="text-left p-3 text-muted-foreground font-medium">Uso principal</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Custo</th>
              </tr>
            </thead>
            <tbody>
              {FERRAMENTAS.map((f, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 font-medium">{f.nome}</td>
                  <td className="p-3 text-xs text-muted-foreground">{f.tipo}</td>
                  <td className="p-3 text-xs text-muted-foreground">{f.uso}</td>
                  <td className="p-3 text-xs font-medium text-green-500">{f.custo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Como funciona na prática?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Você pode, por exemplo, colar seu extrato bancário em um chat de IA e pedir para ele identificar onde você está gastando mais, sugerir onde cortar e simular quanto você teria daqui a 12 meses se guardasse R$ 500 por mês com rendimento de CDI.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Não é magia — é <strong>análise de dados aplicada ao seu dia a dia</strong>. E funciona.
        </p>

        <AdRectangle />

        {/* Exemplo prático com prompt */}
        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Exemplo: prompt para analisar seus gastos</h2>
        <div className="bg-card border border-border rounded-2xl p-6">
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Copie e cole este prompt no ChatGPT ou Gemini:</p>
          <div className="bg-muted rounded-xl p-4 font-mono text-xs text-muted-foreground leading-relaxed">
            <p>"Analise meus gastos do mês abaixo e me diga:</p>
            <p>1. Qual categoria eu mais gastei?</p>
            <p>2. Onde posso cortar sem perder qualidade de vida?</p>
            <p>3. Se eu economizar 20% dos gastos variáveis, quanto terei em 12 meses investindo a 100% do CDI (Selic a 14,5%)?</p>
            <br />
            <p>[Cole aqui seu extrato ou lista de gastos]"</p>
          </div>
          <p className="text-xs text-muted-foreground mt-3">💡 Dica: exporte o extrato como CSV pelo app do banco e cole direto no chat. A IA estrutura e analisa em segundos.</p>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Casos de uso avançados</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <Calculator className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Simulação de aposentadoria</h3>
            <p className="text-sm text-muted-foreground">Peça para a IA calcular quanto você precisa investir por mês para se aposentar em X anos, considerando inflação, taxa de juros e estilo de vida desejado.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Smartphone className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Comparação de produtos</h3>
            <p className="text-sm text-muted-foreground">Compare CDB vs Tesouro vs LCI informando prazos, taxas e alíquotas. A IA calcula o rendimento líquido real de cada um.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Brain className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Planejamento de metas</h3>
            <p className="text-sm text-muted-foreground">Defina metas (viagem, carro, reserva) e peça para a IA criar um plano mensal de aportes com projeção realista de prazos.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <Sparkles className="h-8 w-8 text-[hsl(var(--invest-color))] mb-3" />
            <h3 className="font-bold mb-2">Revisão de assinaturas</h3>
            <p className="text-sm text-muted-foreground">Liste todas as suas assinaturas e peça para a IA identificar sobreposições, serviços pouco usados e quanto você economizaria cancelando.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">O que a IA não faz (ainda)</h2>
        <p className="text-muted-foreground leading-relaxed">
          Importante deixar claro: IA não substitui um planejador financeiro certificado para decisões complexas, como planejamento de aposentadoria, herança ou escolha de produtos de investimento específicos. Para isso, ainda vale buscar um profissional.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A IA também pode cometer erros em cálculos complexos ou não considerar particularidades fiscais da sua situação. Use como ferramenta de apoio, não como oráculo financeiro.
        </p>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <span className="flex items-center gap-2"><ShieldAlert className="h-6 w-6" /> Cuidados com privacidade</span>
        </h2>
        <div className="space-y-3">
          {[
            "Nunca insira número de conta, agência, senhas ou tokens de acesso em ferramentas de IA",
            "Prefira copiar apenas valores e categorias, sem dados pessoais identificáveis",
            "Use ferramentas com política clara de não treinamento com seus dados (ChatGPT Plus, Gemini Advanced)",
            "Para dados sensíveis, considere usar modelos locais (Llama, Mistral) que rodam no seu computador",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <ShieldAlert className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4">Por onde começar? Passo a passo</h2>
        <div className="space-y-3">
          {[
            "Liste suas receitas e despesas mensais — pode ser numa planilha simples ou no app do banco",
            "Escolha uma ferramenta: um app de finanças pessoais com IA ou um assistente como ChatGPT/Gemini",
            "Faça sua primeira análise: cole o extrato e peça insights. O resultado vai te surpreender.",
            "Defina uma meta concreta: quitar dívida, montar reserva de emergência ou começar a investir",
            "Acompanhe mensalmente e ajuste conforme necessário — consistência importa mais que perfeição",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--invest-color))] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">
            Com Selic ainda alta e inflação controlada, 2026 é um bom momento para colocar as finanças em ordem. A IA pode ser sua aliada nisso — gratuita, disponível 24h e sem julgamento.
          </p>
          <p className="text-xs text-muted-foreground mt-3 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            Conteúdo informativo. Resultados de IA podem conter imprecisões. Sempre valide cálculos importantes com um profissional.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["IA", "finanças pessoais", "ChatGPT", "Gemini", "planejamento financeiro", "organizar gastos", "investimentos 2026", "controle financeiro", "apps de finanças"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="ia-para-financas-pessoais-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="ia-para-financas-pessoais-2026" />
    </article>
  );
};

export default IAFinancasPessoais2026;