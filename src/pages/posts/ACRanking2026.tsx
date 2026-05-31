import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Trophy, Star, Gamepad2, Target, DollarSign } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import acPortalImg from "@/assets/assassins-creed-portal.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACRanking2026 = () => {
  const ranking = [
    {
      position: 1,
      title: "Assassin's Creed IV: Black Flag",
      slug: "ac-black-flag-melhor-jogo-piratas",
      reason: "Perfeito equilíbrio entre história, combate naval imbatível e Sea Shanties inesquecíveis. O AC mais amado por críticos e fãs pela consistência — ainda o melhor jogo de piratas já feito.",
      year: "2013",
      perfil: "Todos os perfis",
    },
    {
      position: 2,
      title: "Assassin's Creed II",
      slug: "ac-2-ezio-italia-renascentista",
      reason: "Ezio Auditore é o protagonista mais carismático da franquia. Itália Renascentista deslumbrante, trilha de Jesper Kyd, Leonardo da Vinci — um dos melhores jogos já feitos.",
      year: "2009",
      perfil: "Iniciantes e veteranos",
    },
    {
      position: 3,
      title: "Assassin's Creed Shadows",
      slug: "ac-shadows-japao-feudal",
      reason: "O Japão Feudal que os fãs sonhavam. Naoe e Yasuke oferecem a dualidade perfeita de furtividade e combate. Tecnicamente o mais avançado da franquia.",
      year: "2025",
      perfil: "PC gamer com hardware potente",
    },
    {
      position: 4,
      title: "Assassin's Creed Odyssey",
      slug: "ac-odyssey-odisseia-grecia",
      reason: "O maior RPG da franquia. Kassandra, mitologia grega, Culto de Kosmos e o DLC Fate of Atlantis tornam este o AC mais completo em conteúdo.",
      year: "2018",
      perfil: "Fãs de RPG com tempo livre",
    },
    {
      position: 5,
      title: "Assassin's Creed Valhalla",
      slug: "ac-valhalla-jornada-epica-eivor",
      reason: "Épico viking com Ravensthorpe, raids e 130+ horas. O DLC Dawn of Ragnarök é o melhor conteúdo adicional da trilogia RPG.",
      year: "2020",
      perfil: "Fãs de Vikings e RPG longo",
    },
    {
      position: 6,
      title: "Assassin's Creed Origins",
      slug: "ac-origins-renascimento-franquia-egito",
      reason: "O renascimento da franquia. Bayek é um dos protagonistas mais humanos da série e o Egito Ptolemaico é deslumbrante. Discovery Tour incluso.",
      year: "2017",
      perfil: "Novos no gênero RPG da série",
    },
    {
      position: 7,
      title: "Assassin's Creed Unity",
      slug: "ac-unity-jogo-frente-tempo-paris",
      reason: "A obra-prima técnica. Paris é a cidade mais detalhada, o parkour com Parkour Down é o melhor da franquia, e Notre-Dame é de tirar o fôlego.",
      year: "2014",
      perfil: "Fãs de parkour e furtividade",
    },
    {
      position: 8,
      title: "Assassin's Creed Mirage",
      slug: "ac-mirage-retorno-raizes-bagda",
      reason: "Retorno às raízes clássicas com furtividade pura em Bagdá. O mais acessível da fase moderna — ideal para quem sente falta do estilo original.",
      year: "2023",
      perfil: "Iniciantes e saudosistas",
    },
    {
      position: 9,
      title: "Assassin's Creed Rogue",
      slug: "ac-rogue-assassino-templario",
      reason: "O AC mais corajoso: você joga como Templário caçando Assassinos. Navegação no Ártico e a história de Shay Cormac conectam toda a Saga Kenway.",
      year: "2014",
      perfil: "Fãs da narrativa e da Saga Kenway",
    },
    {
      position: 10,
      title: "Assassin's Creed Syndicate",
      slug: "ac-syndicate-revolucao-industrial-londres",
      reason: "Londres vitoriana com os irmãos Frye, gancho de corda e o excepcional DLC Jack, o Estripador. O último AC clássico antes da fase RPG.",
      year: "2015",
      perfil: "Fãs da era vitoriana e steampunk",
    },
  ];

  useEffect(() => {
    trackArticleRead("ranking-melhor-assassins-creed-2026", "Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026? Top 10 Definitivo", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Ranking
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026? Top 10 Definitivo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />10 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="10 de Fevereiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acPortalImg}
          alt="Ranking dos melhores jogos Assassin's Creed para jogar em 2026"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com mais de 15 jogos na franquia, decidir por onde começar ou qual revisitar pode ser
          desafiador. Analisamos todos os títulos disponíveis em 2026 considerando jogabilidade,
          narrativa, valor atual e quanto cada jogo envelheceu bem — e criamos o{" "}
          <strong>ranking definitivo dos melhores Assassin's Creed</strong> para jogar agora,
          seja você um iniciante ou um veterano da série.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-400" />
            Critérios de Avaliação do Ranking
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>✓ <strong>Jogabilidade em 2026:</strong> Quão divertido é jogar hoje, com o design datado em perspectiva?</li>
            <li>✓ <strong>Narrativa:</strong> A história prende do início ao fim e tem personagens memoráveis?</li>
            <li>✓ <strong>Valor atual:</strong> Vale o preço considerando o conteúdo e promoções disponíveis?</li>
            <li>✓ <strong>Impacto na franquia:</strong> O jogo trouxe algo único que os outros não têm?</li>
            <li>✓ <strong>Envelhecimento gráfico:</strong> Os visuais ainda são aceitáveis ou impressionantes?</li>
          </ul>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-purple-400" />
          O Ranking Definitivo dos Melhores Assassin's Creed em 2026
        </h2>

        <div className="space-y-4 my-8">
          {ranking.map((game) => (
            <Link
              key={game.position}
              to={`/post/${game.slug}`}
              className="block p-5 bg-card rounded-xl border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  game.position === 1 ? "bg-yellow-500/20 text-yellow-400" :
                  game.position === 2 ? "bg-gray-400/20 text-gray-300" :
                  game.position === 3 ? "bg-amber-600/20 text-amber-500" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {game.position}º
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold group-hover:text-purple-400 transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {game.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{game.reason}</p>
                  <p className="text-xs text-purple-400/70">👤 Ideal para: {game.perfil}</p>
                </div>
                {game.position <= 3 && (
                  <div className="flex-shrink-0">
                    <Star className={`h-5 w-5 ${
                      game.position === 1 ? "text-yellow-400 fill-yellow-400" :
                      game.position === 2 ? "text-gray-400 fill-gray-400" :
                      "text-amber-600 fill-amber-600"
                    }`} />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <AdInArticle />

        <EditorialTake category="geek" title="Análise do Marcos: como montar sua maratona de Assassin's Creed em 2026">
          <p>
            Depois de jogar todos os títulos da franquia, minha conclusão é simples:{" "}
            <strong>não existe um único melhor AC — existe o melhor AC para você agora</strong>.
            Se você tem 20 horas livres, Black Flag é perfeito. Se tem 200 horas, comece pela
            Saga Kenway (Black Flag → Rogue → AC III) e depois parta para a trilogia RPG
            (Origins → Odyssey → Valhalla). Se você quer só o mais moderno e impressionante,
            Shadows entrega exatamente isso.
          </p>
          <p>
            Um aviso importante para quem vai maratonar em 2026: a Ubisoft Connect tem promoções
            recorrentes (Black Friday e Golden Week) que costumam derrubar os preços de Odyssey,
            Origins e Valhalla para R$ 50–80 — ótimo custo-benefício. O{" "}
            <strong>Ubisoft+ Premium (R$ 89,90/mês)</strong> dá acesso a todo o catálogo,
            valendo a pena para quem quer maratonar 2–3 títulos num único mês.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-purple-400" />
          Por Onde Começar? Guia por Perfil de Jogador
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🆕 Para Quem Nunca Jogou</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Comece por <strong>AC Mirage</strong> — é curto (15–20h), focado e representa bem
              a essência clássica da furtividade. Depois vá para <strong>AC II</strong> pela
              história inesquecível de Ezio.
            </p>
            <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-sm text-purple-400 hover:underline">
              Ver análise de Mirage →
            </Link>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">⏰ Para Quem Tem Muito Tempo</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Mergulhe na <strong>trilogia RPG</strong>: Origins → Odyssey → Valhalla. São
              mais de 300 horas de conteúdo premium no Egito, Grécia e Inglaterra Medieval.
            </p>
            <Link to="/post/ac-origins-renascimento-franquia-egito" className="text-sm text-purple-400 hover:underline">
              Começar com Origins →
            </Link>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🏴‍☠️ Fã de Ação e Aventura</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Black Flag</strong> é a escolha perfeita — combate naval imbatível, piratas
              históricos e Sea Shanties que ficam na cabeça para sempre.
            </p>
            <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-sm text-purple-400 hover:underline">
              Ver análise de Black Flag →
            </Link>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🥷 Fã de Furtividade Pura</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>AC Unity</strong> tem o melhor parkour e sistema de infiltração da
              franquia. <strong>AC Shadows</strong> (com Naoe) entrega furtividade moderna
              de altíssimo nível.
            </p>
            <Link to="/post/ac-unity-jogo-frente-tempo-paris" className="text-sm text-purple-400 hover:underline">
              Ver análise de Unity →
            </Link>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trophy className="h-7 w-7 text-purple-400" />
          Ordens de Jogo Recomendadas
        </h2>

        <div className="space-y-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-purple-500/30">
            <h4 className="font-bold mb-3 text-purple-400">📖 Ordem Cronológica da História (Imersão máxima)</h4>
            <ol className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>1. <Link to="/post/ac-origins-renascimento-franquia-egito" className="text-primary hover:underline">AC Origins</Link> (49 a.C.)</li>
              <li>2. <Link to="/post/ac-odyssey-odisseia-grecia" className="text-primary hover:underline">AC Odyssey</Link> (431 a.C. — DLC Legacy of the First Blade)</li>
              <li>3. <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-primary hover:underline">AC Mirage</Link> (861 d.C.)</li>
              <li>4. <Link to="/post/ac-1-altair-terra-santa-1191" className="text-primary hover:underline">AC 1</Link> (1191 d.C.)</li>
              <li>5. <Link to="/post/ac-2-ezio-italia-renascentista" className="text-primary hover:underline">AC II</Link> → <Link to="/post/ac-brotherhood-ezio-roma-borgia" className="text-primary hover:underline">Brotherhood</Link> → <Link to="/post/ac-revelations-ezio-constantinopla" className="text-primary hover:underline">Revelations</Link> (1476–1512)</li>
              <li>6. <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-primary hover:underline">AC Black Flag</Link> → <Link to="/post/ac-rogue-assassino-templario" className="text-primary hover:underline">Rogue</Link> → <Link to="/post/ac-3-remastered-revolucao-americana" className="text-primary hover:underline">AC III</Link> (1715–1783)</li>
              <li>7. <Link to="/post/ac-unity-jogo-frente-tempo-paris" className="text-primary hover:underline">AC Unity</Link> (1789) → <Link to="/post/ac-syndicate-revolucao-industrial-londres" className="text-primary hover:underline">Syndicate</Link> (1868)</li>
              <li>8. <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">AC Valhalla</Link> (873 d.C.) → <Link to="/post/ac-shadows-japao-feudal" className="text-primary hover:underline">Shadows</Link> (1579)</li>
            </ol>
          </div>

          <div className="p-5 bg-card rounded-xl border border-amber-500/30">
            <h4 className="font-bold mb-3 text-amber-400">⚡ Ordem de Qualidade (Do melhor para o mais fraco)</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Black Flag → AC II → Shadows → Odyssey → Valhalla → Origins → Unity → Mirage →
              Rogue → Syndicate → Brotherhood → Revelations → AC III → AC 1
            </p>
            <p className="text-xs text-muted-foreground italic">
              *Ordem subjetiva baseada em avaliações críticas, impacto cultural e jogabilidade em 2026.
            </p>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-amber-400" />
            Custo-Benefício: Melhor Relação Preço/Conteúdo em 2026
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🥇 <strong>Black Flag</strong> — R$ 20–40 em promoções / 50+ horas. Melhor relação da franquia.</p>
            <p>🥈 <strong>AC II</strong> (via Ezio Collection) — R$ 60–100 / 35–45h + Brotherhood + Revelations inclusos.</p>
            <p>🥉 <strong>Odyssey</strong> — R$ 80–120 em promoções / 150+ horas com DLCs. Horas por real imbatível.</p>
            <p>🎯 <strong>Ubisoft+</strong> (R$ 89,90/mês) — acesso a todo o catálogo; vantajoso para maratonar 3+ títulos.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Qual É o Seu Favorito?</h2>

        <p>
          Cada jogo da franquia tem seus fãs dedicados. Alguns preferem a furtividade clássica
          de Unity e Mirage, outros amam os mundos abertos épicos de Odyssey e Valhalla. E tem
          quem defenda que nada supera a emoção das Sea Shanties de Black Flag num pôr do sol
          no Caribe.
        </p>

        <p>
          O que é inegável é que a franquia Assassin's Creed produziu experiências únicas em
          praticamente todos os períodos históricos que tocou — da Terra Santa medieval ao
          Japão Feudal — e continua sendo uma das séries mais importantes dos games.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você concorda com nosso ranking?</h3>
          <p className="text-muted-foreground">
            Conta pra gente qual é o seu Assassin's Creed favorito nos comentários! 👇
          </p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed — Página Oficial Ubisoft Brasil",
            url: "https://www.ubisoft.com/pt-br/game/assassins-creed",
            publisher: "Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Shadows — Metacritic",
            url: "https://www.metacritic.com/game/assassins-creed-shadows/",
            publisher: "Metacritic",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Série Assassin's Creed — How Long to Beat",
            url: "https://howlongtobeat.com/?q=assassin%27s+creed",
            publisher: "HowLongToBeat",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Ubisoft Investor Relations — Q4 FY2025",
            url: "https://www.ubisoft.com/en-us/company/investor-center",
            publisher: "Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Shadows Review — IGN",
            url: "https://www.ign.com/articles/assassins-creed-shadows-review",
            publisher: "IGN",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed IV Black Flag — Metacritic (notas históricas)",
            url: "https://www.metacritic.com/game/assassins-creed-iv-black-flag/",
            publisher: "Metacritic",
            accessedAt: "Fevereiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ranking-melhor-assassins-creed-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ranking-melhor-assassins-creed-2026" postTitle="Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026? Top 10 Definitivo" />
    </article>
  );
};

export default ACRanking2026;
