import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, DollarSign, Lightbulb, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import heroImg from "@/assets/berkshire-hathaway-greg-abel-2026-sem-buffett.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const BerkshireAbelMeeting2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "berkshire-hathaway-greg-abel-2026-sem-buffett",
      "Berkshire Hathaway 2026: Greg Abel Assume, US$ 397 Bilhões em Caixa e a Era Pós-Buffett Começa",
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
            Berkshire · Greg Abel · Buffett · Investimentos
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Berkshire Hathaway 2026: Greg Abel Assume, US$ 397 Bilhões em Caixa e a Era Pós-Buffett Começa
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" publishedAt="04 de Maio, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" src={heroImg} alt="Berkshire Hathaway 2026 Greg Abel primeiro meeting CEO sem Warren Buffett" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          No dia 2 de maio de 2026, a Berkshire Hathaway realizou o <strong>primeiro encontro anual de acionistas da era pós-Buffett</strong>. Com o tema "The Legacy Continues", o novo CEO <strong>Greg Abel</strong> presidiu a reunião no CHI Health Center em Omaha — a mesma arena que por décadas foi palco das sabedorias de Warren Buffett e Charlie Munger. Abel chegou com números impressionantes: <strong>lucro que mais que dobrou no Q1</strong> e um caixa histórico de <strong>US$ 397 bilhões</strong>. Mas Buffett, que passou o bastão em janeiro de 2026, ainda esteve presente — desta vez na plateia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Números que Abel Apresentou: Q1 2026
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "US$ 397B", desc: "Caixa + Treasuries em 31/03/2026 — alta de 6,5% vs dez/25", icon: "💰" },
            { num: "2×", desc: "O lucro do Q1 2026 mais que dobrou vs Q1 2025", icon: "📈" },
            { num: "60 anos", desc: "Jersey de Buffett levantada às rafters — comemorando 60 anos como CEO", icon: "🏆" },
            { num: "~50%", desc: "Arena estava pouco mais da metade cheia — queda vs 40.000 da era Buffett", icon: "👥" },
          ].map(({ num, desc, icon }) => (
            <div key={num} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-xl mb-1">{num}</div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          O lucro que mais que dobrou reflete principalmente a valorização do portfólio de investimentos — um fenômeno contábil que flutua com os mercados, não necessariamente o desempenho operacional das subsidiárias. Abel foi cuidadoso em distinguir os dois: os negócios operacionais da Berkshire — ferroviária BNSF, utilities, seguros — tiveram crescimento sólido mas não espetacular, com a guerra no Oriente Médio criando pressão nos custos de combustível do BNSF.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Caixa de US$ 397 Bilhões: A Maior Fortaleza do Capitalismo
        </h2>
        <p>
          O número mais comentado desta semana não é o lucro — é o <strong>caixa de US$ 397,4 bilhões</strong>. Para contexto: o PIB da Argentina é de aproximadamente US$ 640 bilhões. A Berkshire sozinha tem 62% do PIB argentino guardado em caixa e Treasuries americanas.
        </p>
        <p>
          Abel foi diretamente questionado sobre por que não está investindo este dinheiro. Sua resposta sinalizou total continuidade com a filosofia de Buffett:
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-invest/30 p-5">
          <p className="text-sm italic text-muted-foreground mb-2">"One of our greatest strengths at Berkshire is patience and being disciplined at allocating our capital. We're not anxious to deploy capital into subpar opportunities."</p>
          <p className="text-xs text-invest font-medium">— Greg Abel, CEO Berkshire Hathaway, 2 de maio de 2026</p>
        </div>
        <div className="not-prose my-6 space-y-3">
          {[
            { q: "Por que não comprar ações da bolsa?", a: "Com o S&P 500 em múltiplos elevados (22× lucros) e a Berkshire tendo recomprado suas próprias ações em março de 2026, Abel sinalizou que as valuations atuais do mercado não justificam deploy massivo de capital. 'Paciência é uma vantagem competitiva', disse Abel." },
            { q: "Por que não fazer uma grande aquisição?", a: "Abel descartou explicitamente qualquer intenção de desmembrar a Berkshire ou fazer aquisições que distorçam a estrutura do conglomerado. A última grande aquisição foi a Alleghany (seguradora) em 2022 por US$ 11,6 bilhões. No cenário de juros elevados, pagar múltiplos altos por negócios não faz sentido." },
            { q: "Por que não distribuir dividendos?", a: "Berkshire historicamente não paga dividendos — reinveste o caixa. Abel reafirmou que Berkshire 'não será refém de ninguém' graças ao caixa, e que a liquidez imensa é uma vantagem em crises quando ativos ficam baratos." },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card rounded-xl border border-invest/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-invest">❓ {q}</h3>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-invest" />
          O Deepfake de Buffett e a Lição Sobre IA
        </h2>
        <p>
          O momento mais marcante do meeting não foi sobre finanças — foi sobre inteligência artificial. Abel <strong>abriu a sessão de perguntas com um deepfake de Warren Buffett</strong> projetado nas telas gigantes da arena. Um Buffett virtualizado, de terno, perguntou ao vivo por que investidores deveriam continuar segurando ações da Berkshire a longo prazo.
        </p>
        <p>
          O objetivo foi demonstrar — de forma visceral para 20.000 acionistas — os riscos reais da IA. Após o vídeo, o verdadeiro Buffett (na plateia) comentou: <strong>"It's scary"</strong>. Ele disse que a IA poderia criar um deepfake convincente do líder de um país com armas nucleares — um risco existencial que vai muito além do mercado financeiro.
        </p>
        <p>
          Abel reforçou a posição da Berkshire sobre IA: a empresa está avaliando como usar a tecnologia para gerar valor real, mas <strong>"não vai usar IA pelo simples ato de usar IA"</strong>. Uma postura que contrasta com o frenesi de capex de US$ 600B+ dos gigantes de tech — e que reflete a filosofia de investimento baseada em valor, não em momentum.
        </p>

        <AdRectangle className="my-8" />

        
        <EditorialTake category="invest" title="Análise do Marcos: por que o investidor brasileiro deveria olhar">
          <p>
            O caixa de US$ 397 bilhões da Berkshire não é só "Buffett conservador" — é uma posição
            tática que comunica algo ao mercado global: <strong>quem comprou na alta de 2024–2025 vai
            sofrer se os juros americanos demorarem a cair</strong>. Para o investidor brasileiro, isso
            tem dois recados práticos: (1) renda fixa em dólar via Tesouro IPCA+ ou ETFs como IVVB11
            continua atrativa enquanto os EUA mantêm Treasuries acima de 4%; e (2) a sucessão suave em
            uma das maiores empresas do mundo é um lembrete de que governança importa mais que carisma —
            algo que nossas próprias estatais ainda não aprenderam.
          </p>
        </EditorialTake>

<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          A Era Abel: O Que Muda e O Que Permanece
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3 text-sm">✅ O Que Abel Prometeu Manter</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Estrutura de conglomerado — sem desmembrar subsidiárias</li>
              <li>• CEOs das subsidiárias com autonomia total (não interferência de Omaha)</li>
              <li>• Disciplina de alocação de capital — não comprar por comprar</li>
              <li>• Cultura de longo prazo — sem pressão de resultados trimestrais</li>
              <li>• Buffett como Chairman do Conselho — sua voz continua presente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3 text-sm">⚡ O Que Abel Vai Fazer Diferente</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Supervisão mais próxima das subsidiárias do que Buffett fazia</li>
              <li>• Maior foco em utilidades e energia (sua área de expertise)</li>
              <li>• Menor perfil público — Abel é engenheiro, não orador natural como Buffett</li>
              <li>• Avaliação ativa do uso de IA nas operações das subsidiárias</li>
              <li>• Recompra de ações acelerada — Berkshire voltou a recomprar em março 2026</li>
            </ul>
          </div>
        </div>
        <p>
          Buffett deu sua bênção pública mais clara até agora: <em>"Greg is doing everything I did and then some, and he's doing it better in all cases"</em>. Para qualquer mercado financeiro, a afirmação do maior investidor da história sobre seu sucessor é o melhor endorsement possível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          O Que Isso Significa para o Investidor Brasileiro
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { pergunta: "📈 Devo comprar BERK34 (BDR da Berkshire)?", resposta: "BERK34 é o BDR da classe B da Berkshire na B3. Com o lucro dobrando no Q1, a transição de CEO bem-recebida e US$ 397B em caixa para ser alocado quando surgirem oportunidades, a tese de longo prazo permanece. O risco principal é a ausência do 'fator Buffett' que atraía premium de valuation." },
            { pergunta: "🏦 O que o caixa da Berkshire diz sobre o mercado?", resposta: "A Berkshire acumular US$ 397B em caixa sem investir é um sinal relevante: o maior investidor do mundo está dizendo que não encontra ativos baratos suficientes para comprar agora. Isso não é causa de pânico, mas sugere que quem compra S&P 500 no patamar atual deve estar consciente dos múltiplos elevados." },
            { pergunta: "💡 Lição de investimento da era Abel", resposta: "A continuidade da filosofia Berkshire reforça princípios atemporais: paciência, disciplina, não perseguir tendências (nem IA sem propósito), focar em qualidade dos negócios e ter caixa para agir quando outros estão desesperados. Isso se aplica à carteira de qualquer investidor — do Brasil ou do mundo." },
          ].map(({ pergunta, resposta }) => (
            <div key={pergunta} className="bg-card rounded-xl border border-invest/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-invest">{pergunta}</h3>
              <p className="text-sm text-muted-foreground">{resposta}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você investe ou seguiria a filosofia da Berkshire Hathaway? 📊</h3>
          <p className="text-muted-foreground">O que achou da primeira reunião de Abel? Conta nos comentários! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado antes de tomar decisões financeiras.
        </p>
      </div>

      <ArticleSources
        sources={[
          { title: "Berkshire Hathaway — Annual & Quarterly Reports", url: "https://www.berkshirehathaway.com/reports.html", publisher: "Berkshire Hathaway Inc.", accessedAt: "Maio 2026" },
          { title: "Letters from Warren E. Buffett to Berkshire Shareholders", url: "https://www.berkshirehathaway.com/letters/letters.html", publisher: "Berkshire Hathaway Inc.", accessedAt: "Maio 2026" },
          { title: "BRK.A — historical filings and 10-K", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067983", publisher: "U.S. Securities and Exchange Commission", accessedAt: "Maio 2026" },
          { title: "CNBC — Warren Buffett coverage", url: "https://www.cnbc.com/warren-buffett/", publisher: "CNBC", accessedAt: "Maio 2026" },
        ]}
      />
      <NewsletterSignup variant="inline" categories={["invest"]} />


      <RelatedPosts currentSlug="berkshire-hathaway-greg-abel-2026-sem-buffett" />


      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="berkshire-hathaway-greg-abel-2026-sem-buffett" postTitle="Berkshire Hathaway 2026: Greg Abel Assume, US$ 397 Bilhões em Caixa e a Era Pós-Buffett Começa" />
    </article>
  );
};

export default BerkshireAbelMeeting2026;