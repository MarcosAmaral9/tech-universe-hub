import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, Calendar, User, ChevronRight, Brain, CheckCircle2, AlertTriangle, Smartphone, ShieldAlert, Sparkles, MessageSquare, Calculator, ListChecks } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
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
        <AuthorBio category="invest" />
      </header>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img fetchpriority="high" src={heroImg} alt="Como usar IA para organizar finanças pessoais em 2026 — apps, simulações e limites da inteligência artificial" className="w-full aspect-video object-cover" loading="eager" />
      </div>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="lead text-xl text-muted-foreground">
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

        <h2 className="text-2xl font-bold mt-10 mb-6">Comparativo: Apps de Finanças com IA no Brasil em 2026</h2>
        <p>
          O mercado de controle financeiro pessoal ganhou camada de inteligência artificial em todos os apps líderes. A diferença não está mais apenas em "categorizar automaticamente" — está em insights acionáveis, previsões de gastos e alertas proativos antes que o problema ocorra.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { app: "Nubank (Tuna / IA nativa)", desc: "O assistente de IA do Nubank, em testes desde 2025, analisa padrões de gasto e sugere metas de economia. Integrado ao feed de transações sem precisar exportar dados. Gratuito para clientes.", destaque: "Sem custo extra para correntistas" },
            { app: "Mobills", desc: "Categorização automática de transações com ML, alerta de conta chegando ao limite e relatórios de tendência mensal. Plano gratuito com funcionalidades básicas; Premium ~R$ 19,90/mês.", destaque: "Melhor para controle de cartão" },
            { app: "Olivia", desc: "Focado em Machine Learning para classificação de gastos. Conecta via Open Finance ao banco. Destaque para a funcionalidade de 'modo crise': redirecionamento automático de gastos supérfluos para meta de emergência.", destaque: "Melhor para quem quer automação" },
            { app: "Organizze", desc: "Interface mais simples, IA para sugestão de orçamento baseado em histórico de 3 meses. Popular entre profissionais liberais. Plano gratuito funcional; Pro ~R$ 16,90/mês.", destaque: "Melhor para autônomos e MEI" },
            { app: "Itaú Íon", desc: "Assistente IA integrado ao app do Itaú para análise de portfólio, simulações de investimento e renegociação de dívidas. Exclusivo para correntistas.", destaque: "Melhor integração bancária completa" },
          ].map(({ app, desc, destaque }) => (
            <div key={app} className="bg-card rounded-xl border border-border p-4">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-bold text-sm">{app}</h3>
                <span className="text-xs text-invest font-medium whitespace-nowrap">{destaque}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Como Usar ChatGPT ou Claude para Planejar Suas Finanças: Prompts Prontos</h2>
        <p>
          IA generativa não substitui um planejador financeiro certificado (CFP), mas pode ser uma ferramenta poderosa para organizar ideias, calcular cenários e revisar seu orçamento. Use esses prompts com dados fictícios ou agregados primeiro para testar — nunca insira CPF, senha ou dados de conta real.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "📊 Análise de Orçamento", prompt: '"Tenho renda mensal de R$ [X]. Meus gastos fixos somam R$ [Y]. Gastos variáveis em torno de R$ [Z]. Me ajude a identificar onde posso economizar e quanto precisaria poupar mensalmente para criar uma reserva de emergência de 6 meses em 12 meses."' },
            { titulo: "📈 Simulação de Investimento", prompt: '"Se eu investir R$ [X] por mês em um fundo com rendimento de [Y]% ao ano, qual será meu patrimônio em 5, 10 e 20 anos? Calcule também o impacto do Imposto de Renda no resgate, considerando tabela regressiva."' },
            { titulo: "💳 Análise de Dívida", prompt: '"Tenho 3 dívidas: cartão de crédito R$ [A] a 12% ao mês, empréstimo pessoal R$ [B] a 3% ao mês, e financiamento R$ [C] a 1,2% ao mês. Qual a estratégia mais eficiente para quitar tudo? Compare bola de neve (menor saldo) com avalanche (maior juros)."' },
            { titulo: "🏠 Comprar vs Alugar", prompt: '"Apartamento custa R$ [X], entrada de R$ [Y], financiamento em 30 anos. Aluguel equivalente seria R$ [Z]/mês. Com inflação de [%] ao ano e taxa SELIC projetada de [%], compensa comprar ou alugar e investir a diferença? Simule os dois cenários em 10 anos."' },
          ].map(({ titulo, prompt }) => (
            <div key={titulo} className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-bold text-sm mb-2">{titulo}</h3>
              <p className="text-xs text-muted-foreground font-mono bg-secondary rounded p-2">{prompt}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Open Finance e o Que Muda Para o Consumidor</h2>
        <p>
          O <strong>Open Finance</strong> (antes Open Banking) do Banco Central, em plena operação desde 2022 e expandido em 2025, permite que você autorize o compartilhamento dos seus dados bancários entre diferentes instituições. Na prática: conecte seu histórico do banco A ao app de finanças B, que usa IA para analisar todos os seus dados integrados sem você precisar digitar nada.
        </p>
        <p>
          O benefício imediato é a <strong>portabilidade financeira automatizada</strong>: comparadores de crédito como Bcredi, Creditas e Serasa Crédito usam os dados do Open Finance para buscar a taxa mais baixa disponível no mercado para o seu perfil sem burocracia. O Banco Central reportou que o Open Finance tinha mais de 45 milhões de consentimentos ativos em 2025 — o maior sistema do tipo no mundo em volume de usuários. Para cancelar o compartilhamento a qualquer momento, acesse o aplicativo do seu banco e revogue as permissões em "Open Finance".
        </p>
      </div>

      <div className="flex flex-wrap gap-2 my-8">
        {["IA", "finanças pessoais", "ChatGPT", "Gemini", "planejamento financeiro", "organizar gastos", "investimentos 2026", "controle financeiro", "apps de finanças"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>



      <EditorialTake category="invest" title="Análise do Marcos: IA em finanças pessoais funciona para categorizar, simular e revisar — não para investir por você">
        <p>
          Bancos brasileiros já incorporaram IA em apps populares: Nubank com "Tuna" (assistente em testes), Itaú com "Íon" e Bradesco com "BIA". Segundo o Relatório de Cidadania Financeira 2024 do Banco Central, 87% dos brasileiros adultos têm conta bancária e 76% usam apps de banco mensalmente — o que torna a adoção de IA financeira pessoal uma das mais rápidas do mundo entre economias emergentes.
        </p>
        <p>
          Ferramentas populares de finanças pessoais com IA: Mobills, Organizze e Olivia (esta última usa machine learning para classificar gastos automaticamente). ChatGPT e Claude podem ser usados como copilotos financeiros para simulações e revisão de planilhas — desde que você nunca compartilhe dados sensíveis como CPF, senha ou número de cartão. Para investimentos, evite seguir recomendação cega de modelos generalistas; eles não conhecem seu perfil de risco nem a tributação brasileira (IR sobre renda fixa, come-cotas em fundos, isenção em LCI/LCA até R$ 35 mil/mês de venda em ações).
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "Banco Central — Relatório de Cidadania Financeira 2024", url: "https://www.bcb.gov.br/cidadaniafinanceira/relatoriocidadania", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        { title: "Receita Federal — Tributação de Investimentos", url: "https://www.gov.br/receitafederal/pt-br", publisher: "Receita Federal", accessedAt: "Maio 2026" },
        { title: "ANBIMA — Educação Financeira", url: "https://www.anbima.com.br/pt_br/educar/", publisher: "ANBIMA", accessedAt: "Maio 2026" },
        { title: "Mobills — App de Controle Financeiro com IA", url: "https://www.mobills.com.br/", publisher: "Mobills", accessedAt: "Maio 2026" },
        { title: "CVM — Portal do Investidor", url: "https://www.investidor.gov.br/", publisher: "CVM", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-para-financas-pessoais-2026" />
      <CommentSection category="invest" postId="ia-para-financas-pessoais-2026" postTitle="Como usar IA para organizar suas finanças em 2026" />
    </article>
  );
};

export default IAFinancasPessoais2026;
