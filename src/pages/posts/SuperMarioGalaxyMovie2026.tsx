import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, BarChart3, Zap, Shield, Film } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/super-mario-galaxy-movie-2026-bilheteria.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const SuperMarioGalaxyMovie2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "super-mario-galaxy-movie-2026-bilheteria",
      "Super Mario Galaxy: O Filme Abre com US$ 372 Milhões Mundiais — Review e Análise",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Nintendo · Filme · Cinema · Illumination
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Super Mario Galaxy: O Filme Abre com US$ 372 Milhões Mundiais — Review Completo e o Futuro do Nintendo Cinematic Universe
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />30 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Super Mario Galaxy O Filme 2026 bilheteria US$372 milhões abertura" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          The Super Mario Bros. Movie (2023) abriu com US$ 377 milhões mundiais e se tornou o segundo filme de videogame mais rentável da história. <strong>Super Mario Galaxy: O Filme</strong> chegou perto: <strong>US$ 372 milhões</strong> no fim de semana de estreia — a segunda maior abertura da franquia e um dos 10 maiores inícios de 2026. Com Mario, Rosalina e os Lumas embarcando numa aventura espacial épica produzida pela Illumination em parceria com a Nintendo, o filme já é oficialmente um blockbuster. Este artigo reúne review, números de bilheteria e o que os resultados significam para o Nintendo Cinematic Universe.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Os Números da Abertura: US$ 372 Milhões Mundiais
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "US$ 372M", desc: "Bilheteria mundial no fim de semana de estreia", icon: "🌍" },
            { num: "US$ 142M", desc: "Apenas nos EUA e Canadá (abertura doméstica)", icon: "🇺🇸" },
            { num: "US$ 230M", desc: "Internacional — incluindo US$ 48M no Japão", icon: "🌏" },
            { num: "#2", desc: "Segunda maior abertura da franquia Mario (o 1º foi US$ 377M em 2023)", icon: "🏆" },
          ].map(({ num, desc, icon }) => (
            <div key={num} className="bg-card rounded-xl border border-geek/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-geek text-xl mb-1">{num}</div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          A abertura de US$ 372 milhões coloca Super Mario Galaxy: O Filme como o maior lançamento de animação de 2026 até agora, superando o Moana 2 (US$ 326M em 2024) e rivaliza com o histórico de qualquer filme animado. O desempenho é especialmente impressionante considerando que o primeiro filme ainda era recente na memória do público — normalmente, sequências perdem 20–30% da abertura. Galaxy está apenas 1,3% abaixo do original.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-geek" />
          História: Mario no Espaço — O Que o Filme Conta
        </h2>
        <p>
          Super Mario Galaxy: O Filme é uma adaptação livre do jogo homônimo de 2007 para o Wii — considerado por muitos o melhor jogo de Mario de todos os tempos e frequentemente citado como um dos 10 jogos mais influentes da história dos videogames.
        </p>
        <p>
          No filme, <strong>Peach é capturada por Bowser durante um festival estelar</strong> e levada ao espaço em seu Observatory Galáctico voador. Mario, perseguindo Bowser, acaba sendo lançado ao espaço e encontra <strong>Rosalina e os Lumas</strong> — guardiões das galáxias. Com a ajuda deles, Mario viaja de galáxia em galáxia coletando Power Stars para enfrentar Bowser no Grand Observatory.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { personagem: "⭐ Rosalina", desc: "O grande acréscimo do elenco. A guardiã das galáxias tem um arco emocional próprio — revelando a história trágica de como chegou ao espaço, paralela à busca de Mario. Considerada o destaque emocional do filme.", voz: "Dublagem US: Florence Pugh" },
            { personagem: "🌟 Lumas", desc: "As estrelinhas do jogo original ganham vida na animação 3D. Cada Luma tem personalidade distinta — os pequenos se tornaram os personagens favoritos do público segundo pesquisas de saída de cinema.", voz: "Animação original — sem dublagem" },
            { personagem: "🎪 Bowser", desc: "Jack Black retorna ao papel e está ainda mais aprimorado. Desta vez Bowser tem motivação mais clara — quer tornar o espaço um império pessoal — e cenas de comédia que rivalizam com o primeiro filme.", voz: "Jack Black" },
            { personagem: "🔴 Mario", desc: "Chris Pratt retorna — e desta vez com menos polêmica. O personagem tem maior desenvolvimento emocional ao longo do filme, especialmente nas cenas com Rosalina sobre família e pertencimento.", voz: "Chris Pratt" },
          ].map(({ personagem, desc, voz }) => (
            <div key={personagem} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{personagem}</h3>
              <p className="text-xs text-muted-foreground mb-1">{desc}</p>
              <p className="text-xs text-geek/70">{voz}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Review: O Que a Crítica Disse
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📊 Notas da Crítica</h3>
            <div className="space-y-2">
              {[
                { site: "Rotten Tomatoes (críticos)", nota: "82%", comp: "O 1º tinha 59%" },
                { site: "Rotten Tomatoes (público)", nota: "96%", comp: "Muito amado" },
                { site: "Metacritic", nota: "71/100", comp: "vs 46 do 1º filme" },
                { site: "CinemaScore", nota: "A", comp: "Excelente" },
                { site: "IGN", nota: "8/10", comp: "\"Espetacular\"" },
              ].map(({ site, nota, comp }) => (
                <div key={site} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground text-xs">{site}</span>
                  <div className="text-right">
                    <span className="font-bold text-geek">{nota}</span>
                    <span className="text-xs text-muted-foreground ml-1">({comp})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3 text-sm">✅ O Que a Crítica Elogiou</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Animação visual extraordinária — as galáxias são deslumbrantes</li>
              <li>• Arco emocional de Rosalina — profundidade que o 1º filme não tinha</li>
              <li>• Referências ao jogo original bem executadas sem alienar quem não jogou</li>
              <li>• Trilha sonora de Brian Tyler combinando os temas clássicos com orquestra</li>
              <li>• Humor equilibrado — funciona para crianças E adultos</li>
            </ul>
          </div>
        </div>
        <div className="not-prose my-4 bg-card rounded-xl border border-amber-500/20 p-5">
          <h3 className="font-bold text-amber-400 mb-3 text-sm">⚠️ O Que a Crítica Criticou</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>• Ritmo acelerado demais na primeira metade — cenas não respiram</li>
            <li>• Luigi tem papel muito pequeno — decepção para fãs do personagem</li>
            <li>• Villain de apoio (além de Bowser) pouco desenvolvido</li>
            <li>• Alguns críticos sentiram que a profundidade emocional compete com o entretenimento puro sem vencer em nenhum</li>
          </ul>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Nintendo Cinematic Universe: O Que Vem a Seguir
        </h2>
        <p>
          Com US$ 372 milhões na abertura e a Illumination/Universal claramente planejando uma franquia, o Nintendo Cinematic Universe ganhou tração real. O que já está confirmado e o que se especula:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { projeto: "🎮 Super Mario Galaxy: O Filme", status: "✅ Em cartaz agora", desc: "Abertura de US$ 372M — projeção de US$ 900M–US$ 1,2B total em bilheteria mundial se mantiver o ritmo do primeiro." },
            { projeto: "🔗 Crossover Zelda/Mario", status: "💬 Rumores fortes", desc: "Desde que o Switch 2 foi anunciado com Zelda Ocarina Remake, especulações sobre um crossover cinematográfico cresceram. Nenhuma confirmação oficial — mas a cena pós-créditos de Galaxy 'sugere' presença de um personagem misterioso de outro universo Nintendo." },
            { projeto: "🌸 Donkey Kong: O Filme", status: "📢 Em desenvolvimento", desc: "Confirmado pela Universal/Illumination para 2027. Seth Rogen retorna ao papel de Donkey Kong. Deve funcionar como spinoff paralelo à continuidade de Mario." },
            { projeto: "🎵 Kirby: O Filme", status: "🔜 Em desenvolvimento", desc: "Anunciado silenciosamente durante a Gamescom 2025. Sem data, mas com teaser conceitual mostrado para exibidores em Las Vegas. Estilo visual mais voltado para o público infantil." },
          ].map(({ projeto, status, desc }) => (
            <div key={projeto} className="bg-card rounded-xl border border-geek/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{projeto}</h3>
                <span className="text-xs text-geek font-medium">{status}</span>
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Assistir? Análise por Perfil
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Vai adorar se...", items: ["Jogou Super Mario Galaxy no Wii ou Switch — as referências são precisas e emocionantes", "Tem filhos entre 5 e 12 anos — animação e humor funcionam perfeitamente para essa faixa", "Amou o primeiro filme — Galaxy entrega mais do mesmo com profundidade maior", "Curte Rosalina como personagem — ela tem o melhor arco emocional do filme"], cor: "border-green-500/30" },
            { perfil: "⚠️ Pode decepcionar se...", items: ["Esperava Luigi como protagonista ou co-protagonista", "Prefere filmes de animação com mais desenvolvimento de mundo e menos ritmo acelerado", "Detesta Chris Pratt como Mario — ele continua como Mario", "Não gosta de filmes 'família' com mensagens explícitas sobre amor e pertencimento"], cor: "border-yellow-500/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já assistiu Super Mario Galaxy: O Filme? ⭐</h3>
          <p className="text-muted-foreground">O que achou? Deixa nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="super-mario-galaxy-movie-2026-bilheteria" />
      <CommentSection postId="super-mario-galaxy-movie-2026-bilheteria" postTitle="Super Mario Galaxy: O Filme Abre com US$ 372 Milhões Mundiais" />
    </article>
  );
};

export default SuperMarioGalaxyMovie2026;
