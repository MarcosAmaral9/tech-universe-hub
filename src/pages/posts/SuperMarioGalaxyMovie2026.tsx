import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Gamepad2, Star, BarChart3, Zap, Shield, Film } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/super-mario-galaxy-movie-2026-bilheteria.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

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
        <AuthorBio category="geek" publishedAt="30 de Abril, 2026" />
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
        <p>
          Esse patamar de bilheteria não surpreende quem acompanha o histórico da Illumination Entertainment, estúdio fundado por Chris Meledandri em 2007 e responsável pela franquia Meu Malvado Favorito/Minions, que sozinha já ultrapassou US$ 4,6 bilhões somados em bilheteria mundial ao longo de seus diversos filmes, segundo dados consolidados pela Box Office Mojo. A Illumination opera com orçamentos de produção historicamente mais enxutos do que rivais como Pixar e DreamWorks Animation, o que torna seus filmes lucrativos mesmo com aberturas proporcionalmente menores — uma vantagem financeira que ajuda a justificar a aposta contínua da Nintendo na parceria, formalizada desde 2018 quando Miyamoto e Meledandri anunciaram juntos o desenvolvimento do primeiro longa de Mario.
        </p>
        <p>
          O elenco de voz do filme de 2023 — que deve se repetir em Galaxy — reuniu nomes de peso de Hollywood: Chris Pratt como Mario, Anya Taylor-Joy como Peach, Charlie Day como Luigi, Jack Black como Bowser, Keegan-Michael Key como Toad e Seth Rogen como Donkey Kong. A escalação gerou debate intenso nas redes sociais quando anunciada em 2021, especialmente em torno do sotaque de Pratt para o encanador italiano, mas o resultado em bilheteria e a recepção do público (CinemaScore A no lançamento original) acabaram silenciando boa parte da crítica inicial. Jack Black, em particular, ganhou notoriedade extra ao lançar a música "Peaches" como parte da trilha sonora do primeiro filme, faixa que viralizou nas plataformas de streaming e acumulou centenas de milhões de execuções.
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
        <p>
          O jogo original, lançado pela Nintendo em novembro de 2007 para o Wii, foi dirigido por Yoshiaki Koizumi e produzido por Shigeru Miyamoto, e é frequentemente apontado por críticos e veículos especializados como o ápice da era 3D de Mario, ao lado de Super Mario 64 e Super Mario Odyssey. O jogo introduziu a manipulação de gravidade em pequenos planetoides esféricos como mecânica central, recebeu nota quase perfeita em diversas publicações da época e venceu o prêmio de Jogo do Ano em premiações como o BAFTA Games Awards de 2008. Sua sequência direta, Super Mario Galaxy 2 (2010), é até hoje um dos jogos mais bem avaliados da história no agregador Metacritic. Essa base sólida no material de origem é o que torna a adaptação cinematográfica tecnicamente viável: diferente de outros jogos de Mario com pouca narrativa, Galaxy já trazia uma estrutura de personagens, cenários e arco emocional (a história de Rosalina contada via livro de estampas dentro do jogo) prontos para serem expandidos em um roteiro de longa-metragem.
        </p>
        <p>
          A escolha de adaptar justamente esse título não foi acidental. Desde o sucesso do primeiro filme em 2023, a Nintendo e a Illumination sinalizaram publicamente — inclusive em entrevistas concedidas por Shigeru Miyamoto à imprensa americana — que pretendiam explorar partes menos óbvias do catálogo Mario em vez de simplesmente repetir a fórmula de Mario Kart e do Reino dos Cogumelos. Galaxy oferecia um cenário visualmente distinto (o espaço, em vez de florestas e castelos), um elenco de apoio querido pelos fãs (os Lumas) e uma personagem, Rosalina, com peso dramático suficiente para sustentar um segundo eixo narrativo ao lado da dupla Mario e Bowser.
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
        <p>
          O sucesso de Mario no cinema também precisa ser entendido dentro da trajetória mais ampla de adaptações de videogame para as telonas, um gênero que historicamente penava com a crítica e o público até meados dos anos 2020. Antes de 2023, filmes como Super Mario Bros. (1993), com Bob Hoskins e John Leguizamo, eram lembrados como fracassos de bilheteria e relação conturbada com o material original — o próprio Hoskins chegou a declarar publicamente, em entrevistas anos depois, que considerava aquele o pior trabalho de sua carreira. A virada começou com produções como Sonic the Hedgehog (2020), que mostrou que era possível equilibrar fidelidade ao público fã com apelo de massa, e se consolidou definitivamente com o filme de Mario de 2023, que se tornou o quinto filme de maior bilheteria daquele ano nos Estados Unidos segundo o ranking anual da Comscore. Esse histórico ajuda a explicar por que estúdios como Sony Pictures (com sua linha de filmes baseados em personagens da Sega e da PlayStation) e a própria Warner Bros. Games passaram a investir pesado em adaptações cinematográficas a partir da segunda metade da década.
        </p>
        <p>
          Do ponto de vista técnico, Galaxy: O Filme manteve a mesma equipe de animação por trás do primeiro longa, incluindo os diretores Aaron Horvath e Michael Jelenic, ambos com histórico prévio em produções da Cartoon Network como Teen Titans Go!. A dupla é conhecida por equilibrar humor pastelão acessível a crianças pequenas com referências mais sutis voltadas a quem cresceu jogando os games da Nintendo nos anos 1990 e 2000 — uma estratégia de "dois públicos simultâneos" que se tornou marca registrada da franquia cinematográfica e ajuda a explicar por que os filmes performam tão bem tanto em sessões dominicais em família quanto entre adultos nostálgicos que assistem sozinhos ou em grupos de amigos.
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
        <p>
          Para a Nintendo, o impacto vai além da bilheteria isolada do filme. A empresa japonesa historicamente trata o cinema como vitrine para vender consoles e jogos: após a estreia do primeiro filme em 2023, a própria Nintendo registrou, em seus relatórios financeiros trimestrais divulgados ao mercado, picos de vendas em jogos clássicos de Mario no eShop e reedições físicas em lojas parceiras nas semanas seguintes ao lançamento nos cinemas. É razoável esperar movimento semelhante com Galaxy, especialmente porque o jogo original de 2007 segue disponível por assinatura no serviço Nintendo Switch Online + Expansion Pack, o que facilita a conversão de espectadores curiosos em jogadores. Esse efeito cruzado entre cinema e games é hoje parte central da estratégia de "Nintendo IP" anunciada publicamente pela empresa em apresentações a investidores, que também incluem o parque temático Super Nintendo World, presente em Osaka, Hollywood e Orlando.
        </p>
      </div>



      <EditorialTake category="geek" title="Análise do Marcos: Opinião do Marcos: Nintendo aprendeu a fórmula">
        <p>A Illumination + Nintendo encontrou o que a Disney perdeu: fidelidade ao material original sem complexo de superioridade autoral. O primeiro Super Mario Bros. Movie (2023) arrecadou <strong>US$ 1,36 bilhão</strong> em bilheteria mundial (Box Office Mojo). No Brasil, foi o filme de animação mais visto do ano. Galaxy tem munição para superar — a estética cósmica do jogo original do Wii é cinematográfica por natureza. O risco é o mesmo de toda sequência: tentar fazer 'maior' quando o público quer 'mais do que funcionou'. Como brasileiro que jogou Galaxy lá em 2007 numa TV de tubo, torço para que Rosalina ganhe os 10 minutos de tela que ela merece.</p>
      </EditorialTake>
      <ArticleSources category="geek"
        sources={[
          { title: "The Super Mario Bros. Movie — Box Office", url: "https://www.boxofficemojo.com/title/tt6718170/", publisher: "Box Office Mojo / IMDb", accessedAt: "Maio 2026" },
          { title: "Nintendo Investor Relations", url: "https://www.nintendo.co.jp/ir/en/index.html", publisher: "Nintendo Co., Ltd.", accessedAt: "Maio 2026" },
          { title: "Illumination — Official Site", url: "https://www.illumination.com/", publisher: "Illumination Entertainment", accessedAt: "Maio 2026" },
          { title: "Universal Pictures — Press", url: "https://www.universalpictures.com/", publisher: "Universal Pictures", accessedAt: "Maio 2026" },
          { title: "Super Mario Galaxy — ficha do jogo original (2007)", url: "https://www.metacritic.com/game/super-mario-galaxy/", publisher: "Metacritic", accessedAt: "Maio 2026" },
          { title: "Illumination Entertainment — perfil do estúdio", url: "https://www.comingsoon.net/studios/illumination", publisher: "Comingsoon.net", accessedAt: "Maio 2026" },
        ]}
      />
<RelatedPosts currentSlug="super-mario-galaxy-movie-2026-bilheteria" />


      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="super-mario-galaxy-movie-2026-bilheteria" postTitle="Super Mario Galaxy: O Filme Abre com US$ 372 Milhões Mundiais"  category="geek" />
    </article>
  );
};

export default SuperMarioGalaxyMovie2026;