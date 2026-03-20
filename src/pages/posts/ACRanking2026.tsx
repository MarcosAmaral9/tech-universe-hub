import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Trophy, Star, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acPortalImg from "@/assets/assassins-creed-portal.webp";

const ACRanking2026 = () => {
  const ranking = [
    {
      position: 1,
      title: "Assassin's Creed Valhalla",
      slug: "ac-valhalla-jornada-epica-eivor",
      reason: "Épico viking com mais de 100 horas. Perfeito para fãs da série Vikings.",
      year: "2020"
    },
    {
      position: 2,
      title: "Assassin's Creed Shadows",
      slug: "ac-shadows-japao-feudal",
      reason: "O Japão Feudal que sonhamos. Naoe e Yasuke trazem a dualidade perfeita de gameplay.",
      year: "2025",
    },
    {
      position: 3,
      title: "Assassin's Creed Odyssey",
      slug: "ac-odyssey-odisseia-grecia",
      reason: "O maior mundo aberto da série. Kassandra, mitologia grega e batalhas navais épicas.",
      year: "2018"
    },
    {
      position: 4,
      title: "Assassin's Creed IV: Black Flag",
      slug: "ac-black-flag-melhor-jogo-piratas",
      reason: "A combinação perfeita de pirataria e assassinato. Combate naval imbatível até hoje.",
      year: "2013"
    },
    {
      position: 5,
      title: "Assassin's Creed III Remastered",
      slug: "ac-3-remastered-revolucao-americana",
      reason: "A Revolução Americana em 4K. Connor e a introdução das batalhas navais.",
      year: "2012/2019"
    },
    {
      position: 6,
      title: "Assassin's Creed Rogue",
      slug: "ac-rogue-heroi-vilao-templario",
      reason: "Jogar como Templário é refrescante. Navegação no Ártico e a história de Shay.",
      year: "2014"
    },
    {
      position: 7,
      title: "Assassin's Creed Mirage",
      slug: "ac-mirage-retorno-raizes-bagda",
      reason: "Retorno às raízes. Furtividade clássica em Bagdá do século IX.",
      year: "2023"
    },
    {
      position: 8,
      title: "Assassin's Creed Syndicate",
      slug: "ac-syndicate-revolucao-industrial-londres",
      reason: "Londres vitoriana e os irmãos Frye. Carruagens e o gancho de corda são divertidos.",
      year: "2015"
    },
    {
      position: 9,
      title: "Assassin's Creed Origins",
      slug: "ac-origins-renascimento-franquia-egito",
      reason: "O renascimento da franquia. Bayek é um dos melhores protagonistas e o Egito é deslumbrante.",
      year: "2017"
    },
    {
      position: 10,
      title: "Assassin's Creed Unity",
      slug: "ac-unity-jogo-frente-tempo-paris",
      reason: "A obra-prima técnica. Paris é a cidade mais detalhada e o parkour é o melhor da saga.",
      year: "2014"
    }
  ];


  useEffect(() => {
    trackArticleRead("ranking-melhor-assassins-creed-2026", "Ranking: Qual o Melhor Assassin\'s Creed para Jogar em 2026?", "geek");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <BackNavigation category="geek" />

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Ranking
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ranking: Qual o Melhor Assassin's Creed para Jogar em 2026?
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            10 de Fevereiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            10 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          src={acPortalImg}
          alt="Assassin's Creed Ranking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com tantos títulos na franquia, pode ser difícil decidir por onde começar ou qual revisitar. 
          Analisamos todos os jogos disponíveis e criamos o <strong>ranking definitivo</strong> para 
          2026, considerando gráficos, gameplay, história e valor atual.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-400" />
            Critérios de Avaliação
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>✓ <strong>Jogabilidade:</strong> Quão divertido é jogar em 2026?</li>
            <li>✓ <strong>Gráficos:</strong> O jogo envelheceu bem visualmente?</li>
            <li>✓ <strong>História:</strong> A narrativa prende do início ao fim?</li>
            <li>✓ <strong>Valor:</strong> Vale o preço atual considerando o conteúdo?</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-purple-400" />
          O Ranking Definitivo
        </h2>

        <div className="space-y-4 my-8">
          {ranking.map((game) => (
            <Link
              key={game.position}
              to={`/post/${game.slug}`}
              className="block p-4 bg-card rounded-xl border border-border hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  game.position === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                  game.position === 2 ? 'bg-gray-400/20 text-gray-400' :
                  game.position === 3 ? 'bg-amber-600/20 text-amber-600' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {game.position}º
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold group-hover:text-purple-400 transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {game.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{game.reason}</p>
                </div>
                {game.position <= 3 && (
                  <div className="flex-shrink-0">
                    <Star className={`h-5 w-5 ${
                      game.position === 1 ? 'text-yellow-400 fill-yellow-400' :
                      game.position === 2 ? 'text-gray-400 fill-gray-400' :
                      'text-amber-600 fill-amber-600'
                    }`} />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Por Onde Começar?</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🆕 Para Iniciantes</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Comece por <strong>AC Mirage</strong> – é curto, focado e representa bem a essência clássica da franquia.
            </p>
            <Link 
              to="/post/ac-mirage-retorno-raizes-bagda" 
              className="text-sm text-purple-400 hover:underline"
            >
              Ver análise de Mirage →
            </Link>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">⏰ Para Quem Tem Tempo</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Mergulhe em <strong>AC Valhalla</strong> ou <strong>Odyssey</strong> para +100 horas de conteúdo épico.
            </p>
            <Link 
              to="/post/ac-valhalla-jornada-epica-eivor" 
              className="text-sm text-purple-400 hover:underline"
            >
              Ver análise de Valhalla →
            </Link>
          </div>
        </div>

        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🏴‍☠️ Menção Honrosa</h3>
          <p className="text-muted-foreground">
            <strong>Black Flag</strong> continua sendo o melhor jogo de piratas já feito, mesmo após mais 
            de uma década. Se você nunca jogou, está perdendo uma das melhores experiências da história dos games.
          </p>
          <Link 
            to="/post/ac-black-flag-melhor-jogo-piratas" 
            className="inline-block mt-4 text-amber-400 hover:underline"
          >
            Ler análise completa de Black Flag →
          </Link>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Qual é o Seu Favorito?</h2>

        <p>
          Cada jogo da franquia tem seus fãs dedicados. Alguns preferem a furtividade clássica de Unity e 
          Mirage, outros amam os mundos abertos épicos de Odyssey e Valhalla. E tem quem defenda que nada 
          supera as Sea Shanties de Black Flag.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você concorda com nosso ranking?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente qual é o seu Assassin's Creed favorito nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ranking-melhor-assassins-creed-2026" />

      {/* Comments */}
      <CommentSection postId="ranking-melhor-assassins-creed-2026" postTitle="Ranking: Qual o Melhor Assassin\'s Creed para Jogar em 2026?" />
    </article>
  );
};

export default ACRanking2026;
