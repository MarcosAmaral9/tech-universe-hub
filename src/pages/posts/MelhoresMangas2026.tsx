import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Star, Sparkles, GraduationCap, BarChart3, Zap, Trophy } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/melhores-mangas-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const MelhoresMangas2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "melhores-mangas-ler-2026",
      "Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível de Experiência",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Mangá · Guia · Gêneros · Recomendações
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os Melhores Mangás Para Ler em 2026: Guia Completo por Gênero e Nível de Experiência
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />12 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="12 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Melhores mangás para ler em 2026 — guia por gênero, shonen, seinen, shojo e iniciantes"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com mais de 90 mil títulos publicados ao longo da história e centenas de novidades a cada ano, saber <strong>quais mangás ler em 2026</strong> pode ser esmagador. Por onde começar? O que vale maratonar depois de Naruto e Dragon Ball? Quais novidades não podem passar em branco? Este guia mapeia os melhores títulos por gênero e nível de experiência — de quem nunca abriu um mangá até o veterano que quer descobrir tesouros escondidos além dos hits mainstream.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Entendendo as Categorias de Mangá Antes de Escolher
        </h2>
        <p>
          As categorias de mangá no Japão são definidas pelo público-alvo, não pelo gênero narrativo — e isso é a chave para entender por que Berserk (terror/fantasia) e Vagabond (histórico) são ambos "Seinen", enquanto One Piece e Demon Slayer são "Shonen":
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Categoria</th>
                <th className="text-left py-3 px-4">Público-alvo</th>
                <th className="text-left py-3 px-4">Características</th>
                <th className="text-left py-3 px-4">Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Shonen (少年)", "Meninos 8–18 anos", "Ação, amizade, crescimento pessoal, aventura, superpoderes", "One Piece, Naruto, Demon Slayer, JJK, Kaiju No. 8"],
                ["Shojo (少女)", "Meninas 8–18 anos", "Romance, relacionamentos, emoções, arte mais expressiva", "Fruits Basket, Sailor Moon, Nana, Skip Beat"],
                ["Seinen (青年)", "Homens 18+", "Narrativas complexas, violência realista, temas adultos, ambiguidade moral", "Berserk, Vagabond, Chainsaw Man, Dungeon Meshi"],
                ["Josei (女性)", "Mulheres 18+", "Romance adulto, slice-of-life maduro, relacionamentos realistas", "Nana (também josei), Chihayafuru, His and Her Circumstances"],
                ["Kodomomuke", "Crianças até 10 anos", "Aventura leve, humor, personagens animais, didático", "Doraemon, Pokémon Adventures, Chibi Maruko-chan"],
              ].map(([cat, pub, carac, ex]) => (
                <tr key={cat as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku text-xs">{cat}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{pub}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{carac}</td>
                  <td className="py-3 px-4 text-xs">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-otaku" />
          Para Iniciantes: Os Melhores Mangás por Onde Começar
        </h2>
        <p>
          A escolha do primeiro mangá é crucial — um título ruim pode criar preconceito; um bom pode abrir uma porta para anos de leitura. Critérios para indicações de iniciantes: narrativa autocontida (ou com fim satisfatório), arte clara, tradução disponível no Brasil:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "📖 Fullmetal Alchemist — Hiromu Arakawa", volumes: "27 volumes (completo)", genero: "Shonen / Aventura / Ficção Científica", porque: "Narrativa magistral com início, meio e fim satisfatórios. Um dos poucos mangás onde o anime e o mangá são ambos perfeitos. Aborda alquimia, guerra, perda e redenção com inteligência rara. Publicado pela JBC no Brasil.", nota: "9,9/10 no MyAnimeList (mangá)" },
            { titulo: "🎯 Death Note — Tsugumi Ohba & Takeshi Obata", volumes: "12 volumes (completo)", genero: "Shonen / Suspense Psicológico", porque: "Thriller de gato e rato entre gênios. Ritmo perfeito, arte impecável, dilemas morais reais. Fácil de recomendar para quem gosta de suspense mas nunca leu mangá. Publicado pela JBC.", nota: "8,9/10 MyAnimeList" },
            { titulo: "🌿 Yotsubato! — Kiyohiko Azuma", volumes: "15 volumes (em andamento)", genero: "Slice-of-life / Kodomomuke", porque: "Uma criança de 5 anos descobrindo o mundo. Sem conflito, sem vilão — apenas momentos cotidianos belíssimos. Reconfortante como poucos mangás. Bonus: é o mangá número 1 recomendado para aprender japonês.", nota: "8,5/10 MyAnimeList" },
            { titulo: "👊 Demon Slayer — Koyoharu Gotouge", volumes: "23 volumes (completo)", genero: "Shonen / Ação / Fantasia", porque: "Arte visual extraordinária, combates com sistema de 'Respirações' bem construído, jornada emocional de Tanjiro genuinamente comovente. Completo e rápido de maratonar — ideal para iniciantes.", nota: "8,5/10 MyAnimeList" },
          ].map(({ titulo, volumes, genero, porque, nota }) => (
            <div key={titulo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-otaku">{titulo}</h3>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{nota}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-0.5"><span className="font-bold">Gênero:</span> {genero} · <span className="font-bold">Tamanho:</span> {volumes}</p>
              <p className="text-xs text-muted-foreground">{porque}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Para Leitores Intermediários: O Salto de Qualidade
        </h2>
        <p>
          Você já leu os clássicos shonen e quer aprofundar. É o momento de explorar o seinen — narrativas mais densas, arte mais experimental, temas adultos tratados com seriedade. Também é hora de descobrir o melhor do shonen moderno além dos títulos óbvios:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "⚔️ Vagabond — Takehiko Inoue", volumes: "37 volumes (hiato)", genero: "Seinen / Histórico / Filosófico", porque: "Reimaginação de Miyamoto Musashi com a arte mais impressionante da história do mangá. Cada página é uma obra de arte em sumi-e. Aborda beleza da luta, morte e o caminho do guerreiro. Publicado pela Panini.", destaque: "Obra-prima absoluta — leitura obrigatória para qualquer leitor sério" },
            { titulo: "🐉 Berserk — Kentaro Miura", volumes: "42+ volumes (em andamento com Kouji Mori)", genero: "Seinen / Dark Fantasy / Horror", porque: "A obra definitiva do dark fantasy. Guts é um dos personagens mais bem construídos da ficção. Aviso: violência extrema e conteúdo perturbador — não é para todos. Arte inacreditável. Miura faleceu em 2021; continuação por Kouji Mori.", destaque: "9,5/10 no MyAnimeList — o mais alto de qualquer mangá longo" },
            { titulo: "⛵ Vinland Saga — Makoto Yukimura", volumes: "30+ volumes (em andamento)", genero: "Seinen / Histórico / Drama", porque: "Começa como épico de vikings e evolui para questionamento profundo sobre guerra, escravidão e redenção. Thorfinn é um dos arcos de personagem mais bem escritos do mangá moderno. JBC no Brasil.", destaque: "Anime da MAPPA é excelente; o mangá vai ainda mais fundo" },
            { titulo: "🪚 Chainsaw Man — Tatsuki Fujimoto", volumes: "Parte 1 completa (11 vols) + Parte 2 em andamento", genero: "Shonen / Horror / Dark Comedy", porque: "Fujimoto desconstruiu o shonen de formas que ninguém esperava. Denji é um protagonista genuinamente diferente — movido por desejos básicos, não por nobres missões. Violento, surpreendente e hilário ao mesmo tempo.", destaque: "Parte 2 mais divisiva mas igualmente fascinante" },
          ].map(({ titulo, volumes, genero, porque, destaque }) => (
            <div key={titulo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{titulo}</h3>
              <p className="text-xs text-muted-foreground mb-0.5"><span className="font-bold">Gênero:</span> {genero} · <span className="font-bold">Tamanho:</span> {volumes}</p>
              <p className="text-xs text-muted-foreground mb-1">{porque}</p>
              <p className="text-xs bg-otaku/10 text-otaku px-2 py-0.5 rounded-full inline-block">💡 {destaque}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          Para Veteranos: Os Tesouros Fora do Radar
        </h2>
        <p>
          Você já leu Berserk, Vagabond e Vinland Saga. Está pronto para sair completamente do radar mainstream e descobrir obras que redefinirão sua relação com o mangá:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "💔 Oyasumi Punpun — Inio Asano", volumes: "13 volumes (completo)", aviso: "⚠️ Conteúdo adulto perturbador", porque: "A exploração mais honesta e dolorosa de saúde mental, trauma e crescimento já feita em mangá. Punpun é representado como um pássaro abstrato — e isso diz tudo sobre como ele se vê. Não é para todo momento emocional. Publicado pela Newpop." },
            { titulo: "🧠 Homunculus — Hideo Yamamoto", volumes: "15 volumes (completo)", aviso: "⚠️ Adulto / Perturbador", porque: "Um mendigo que passa por uma cirurgia experimental e começa a ver 'homunculi' nas pessoas — manifestações visuais de seus traumas psíquicos. Psicologia, filosofia e arte surreal. Poucos mangás exploram a percepção de realidade com tanta profundidade." },
            { titulo: "🌊 Nausicaä do Vale do Vento — Hayao Miyazaki", volumes: "7 volumes (completo)", aviso: "", porque: "O mangá que inspirou a Ghibli é muito mais complexo que o filme. Miyazaki levou 12 anos para completar os 7 volumes. Nausicaä do mangá é uma das heroínas mais ambíguas e fascinantes da ficção japonesa." },
            { titulo: "🎨 Blue Period — Tsubasa Yamaguchi", volumes: "17 volumes (em andamento)", aviso: "", porque: "Um jovem delinquente descobre a paixão por arte e tenta ingressar em Geidai — a Tokyo University of the Arts. O mangá mais inspirador sobre processo criativo e escolha de carreira dos últimos anos. Panini Brasil." },
          ].map(({ titulo, volumes, aviso, porque }) => (
            <div key={titulo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-otaku">{titulo}</h3>
                {aviso && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full shrink-0 ml-2">{aviso}</span>}
              </div>
              <p className="text-xs text-muted-foreground mb-0.5"><span className="font-bold">Tamanho:</span> {volumes}</p>
              <p className="text-xs text-muted-foreground">{porque}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trophy className="h-7 w-7 text-otaku" />
          Os Melhores Mangás de 2026: Novidades e Continuações
        </h2>
        <p>
          O cenário de 2026 é marcado por grandes finais e por novos títulos da Weekly Shonen Jump tomando os espaços deixados por JJK (encerrado em 2024) e My Hero Academia (encerrado em agosto de 2024):
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { titulo: "🔫 Sakamoto Days", desc: "Hitman aposentado que virou dono de mercadinho. Humor e ação em equilíbrio perfeito. Um dos favoritos da Jump em 2025–2026 com serialização crescente.", status: "Em serialização — Jump" },
            { titulo: "⚗️ Kagurabachi", desc: "O shonen que mais cresceu na Jump em 2024. Protagonista esculpidor de katanas mágicas. Arte impressionante, ritmo de ação frenético, aposta no sucesso de 2026.", status: "Em serialização — Jump" },
            { titulo: "🌸 Frieren: Beyond Journey's End", desc: "Publicação continuando no Brasil pela Panini. A elfa que sobreviveu ao herói e agora explora o que foi perdido. Obra do nível de FMA em execução narrativa.", status: "Panini Brasil — em andamento" },
            { titulo: "🌙 Dandadan", desc: "Aliens, paranormal, romance e humor absurdo. Um dos animes de 2024 que gerou mais discussão — o mangá vai ainda mais longe. Acesso via Manga Plus.", status: "Em serialização — Jump+" },
          ].map(({ titulo, desc, status }) => (
            <div key={titulo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{titulo}</h3>
              <p className="text-xs text-muted-foreground mb-1">{desc}</p>
              <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">📅 {status}</span>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Onde Ler Mangá Legalmente no Brasil
        </h2>

        <div className="not-prose my-6 space-y-2">
          {[
            { plat: "📱 Manga Plus (Shueisha)", acesso: "Gratuito — app e browser", desc: "Títulos da Shueisha (Jump, Jump+) em inglês e espanhol no mesmo dia do Japão. One Piece, JJK, Kaiju No. 8, Dandadan, Sakamoto Days, Kagurabachi. Melhor opção gratuita legal." },
            { plat: "📚 Panini / JBC / Newpop (físico)", acesso: "R$ 30–60 por volume", desc: "Compra de volumes físicos nas melhores editoras brasileiras. Ideal para colecionar. Disponível na Amazon Brasil, Livraria Cultura e lojas especializadas." },
            { plat: "🌐 ComiXology / Amazon Kindle", acesso: "R$ 10–25 por volume digital", desc: "Versões digitais de muitos títulos em português. Conveniente para quem não quer volume físico." },
          ].map(({ plat, acesso, desc }) => (
            <div key={plat} className="flex gap-3 items-start bg-card rounded-xl border border-otaku/20 p-3">
              <div>
                <p className="font-bold text-xs text-otaku">{plat} <span className="text-muted-foreground font-normal">· {acesso}</span></p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: 2026 é o ano dos finais e dos novos clássicos">
          <p>
            Jujutsu Kaisen encerrou em setembro de 2024 (capítulo 271, Shueisha) e My Hero Academia teve seu capítulo final em agosto de 2024. Esses encerramentos abrem espaço para <strong>Sakamoto Days, Kagurabachi e Astro Royale ocuparem a capa da Weekly Shonen Jump</strong> — e o Brasil está acompanhando em tempo real graças ao Manga Plus e à rapidez das editoras nacionais.
          </p>
          <p>
            Para o leitor brasileiro, o cenário é o melhor da história: Panini publica simultaneamente JJK, Chainsaw Man e One Piece; JBC mantém Naruto e Berserk; e o Manga Plus oferece catálogo legal gratuito em inglês. A pirataria perdeu o argumento da indisponibilidade. <strong>Minha recomendação: comece pelo gênero, não pela hype.</strong> Quem gosta de seinen denso encontra ouro em Vagabond, Vinland Saga e 20th Century Boys; quem busca shonen moderno deve testar Kaiju No. 8 e Dandadan antes de embarcar em finais longos como One Piece (110+ volumes).
          </p>
        </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual mangá mudou sua vida? 📚</h3>
          <p className="text-muted-foreground">Conta nos comentários — adoro saber quais obras marcaram gerações diferentes de leitores! 👇</p>
        </div>
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Shueisha — Weekly Shonen Jump e Manga Plus",
            url: "https://mangaplus.shueisha.co.jp/",
            publisher: "Shueisha / Manga Plus",
            accessedAt: "Março 2026"
          },
          {
            title: "Panini Brasil — catálogo de mangás",
            url: "https://panini.com.br/mangas",
            publisher: "Panini Comics Brasil",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime News Network — Jujutsu Kaisen final chapter 271",
            url: "https://www.animenewsnetwork.com/news/2024-09-29/jujutsu-kaisen-manga-ends-with-271st-chapter",
            publisher: "Anime News Network",
            accessedAt: "Março 2026"
          },
          {
            title: "MyAnimeList — Manga Rankings e Reviews",
            url: "https://myanimelist.net/topmanga.php",
            publisher: "MyAnimeList",
            accessedAt: "Março 2026"
          },
          {
            title: "JBC Editora — catálogo de mangás e light novels",
            url: "https://www.jbc.com.br/",
            publisher: "JBC Editora",
            accessedAt: "Março 2026"
          },
          {
            title: "Newpop Editora — catálogo de mangás",
            url: "https://www.newpop.com.br/",
            publisher: "Newpop Editora",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="melhores-mangas-ler-2026" />
      <CommentSection postId="melhores-mangas-ler-2026" postTitle="Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível de Experiência"  category="otaku" />
    </article>
  );
};

export default MelhoresMangas2026;
