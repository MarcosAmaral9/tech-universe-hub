import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, Calendar, User, BookOpen, Target, Globe, BarChart3, Star, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DiferencaMangasManhuas = () => {
  useEffect(() => {
    trackArticleRead(
      "diferenca-mangas-manhuas-manhwas",
      "Manga vs Manhwa vs Manhua: Guia Completo das Diferenças e Melhores Obras",
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
            Mangá · Manhwa · Manhua · Quadrinhos Asiáticos
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Manga vs Manhwa vs Manhua: Guia Completo das Diferenças e Melhores Obras de Cada Tipo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />02 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="02 de Fevereiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={mangaManhwaManhuaImg}
          alt="Diferença entre manga manhwa e manhua — guia completo com exemplos e onde ler"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você é fã de histórias em quadrinhos asiáticas, já se deparou com os termos <strong>Manga</strong>, <strong>Manhua</strong> e <strong>Manhwa</strong>. Apesar de todos serem quadrinhos, cada formato tem características únicas que refletem a cultura, tradições e indústria de seu país de origem — Japão, China e Coreia do Sul, respectivamente. Este guia explica as diferenças técnicas, culturais e de gênero entre os três formatos, com exemplos concretos e onde ler cada um legalmente no Brasil.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-otaku/10 to-background rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-otaku" />
            Resumo Rápido: Manga × Manhwa × Manhua
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-otaku block mb-1">Manga 🇯🇵</strong>
              <p className="text-muted-foreground text-xs mb-0">Japão · Preto e branco · Leitura direita → esquerda · Publicação em revista (semanal/mensal)</p>
            </div>
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-otaku block mb-1">Manhwa 🇰🇷</strong>
              <p className="text-muted-foreground text-xs mb-0">Coreia do Sul · Full color · Leitura esquerda → direita · Formato webtoon (scroll vertical)</p>
            </div>
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-otaku block mb-1">Manhua 🇨🇳</strong>
              <p className="text-muted-foreground text-xs mb-0">China · Full color · Leitura esquerda → direita · Plataformas digitais chinesas</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Manga 🇯🇵: A Origem Japonesa e o Padrão Global
        </h2>
        <p>
          <strong>Manga</strong> é o termo japonês para histórias em quadrinhos — mas no contexto internacional, refere-se especificamente às obras produzidas no Japão no estilo japonês. Com mais de 100 anos de história e um mercado que movimenta bilhões de dólares anuais, o mangá japonês estabeleceu os padrões que influenciam todos os outros formatos asiáticos.
        </p>
        <p>
          Características técnicas do mangá: leitura da <strong>direita para a esquerda</strong> (seguindo a tradição japonesa de escrita), publicação originalmente em <strong>preto e branco</strong> em revistas como Weekly Shonen Jump, e depois compilado em volumes tankobon. A arte tem estilo característico com olhos expressivos, speed lines para dinamismo e uso sofisticado do silêncio (espaço em branco) para criar ritmo.
        </p>

        <div className="not-prose my-8 p-6 bg-card rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold text-otaku mb-4">📖 Exemplos Essenciais de Mangá Japonês</h3>
          <div className="space-y-3">
            {[
              { titulo: "One Piece — Eiichiro Oda", genero: "Shonen / Aventura", status: "Em andamento (fase final)", capitulos: "+1.100", onde: "Manga Plus, Panini Brasil (físico)", porque: "O mangá mais vendido da história. Worldbuilding épico com 25 anos de consistência narrativa." },
              { titulo: "Fullmetal Alchemist — Hiromu Arakawa", genero: "Shonen / Aventura/Filosófico", status: "Finalizado (27 volumes)", capitulos: "108", onde: "JBC Brasil, Manga Plus", porque: "Narrativa perfeita de início ao fim. Um dos mais bem construídos de todos os tempos." },
              { titulo: "Berserk — Kentaro Miura", genero: "Seinen / Dark Fantasy", status: "Em andamento (continuação por Mori)", capitulos: "370+", onde: "Panini Brasil, Dark Horse (digital)", porque: "Arte mais detalhada da história do mangá. O padrão do dark fantasy." },
            ].map(({ titulo, genero, status, capitulos, onde, porque }) => (
              <div key={titulo} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-0.5">
                  <p className="font-bold text-xs text-otaku">{titulo}</p>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{genero}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-0.5">{porque}</p>
                <p className="text-xs text-muted-foreground"><span className="font-bold">Status:</span> {status} · <span className="font-bold">Caps:</span> {capitulos} · <span className="font-bold">Onde:</span> {onde}</p>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Manhwa 🇰🇷: A Revolução Coreana do Webtoon
        </h2>
        <p>
          <strong>Manhwa</strong> são os quadrinhos sul-coreanos — e representam a maior inovação de formato na história dos quadrinhos asiáticos desde o próprio mangá japonês. A Coreia do Sul revolucionou a indústria com o formato <strong>webtoon</strong>: histórias em scroll vertical, com full color e projetadas para leitura em smartphones. Esse formato eliminou a barreira de entrada de "ler ao contrário" do mangá e atraiu uma geração inteira de novos leitores globais.
        </p>
        <p>
          O gênero dominante no manhwa é o <strong>"sistema" ou "regressor"</strong> — protagonistas que ganham poderes ou retornam ao passado com conhecimento do futuro. Solo Leveling, o maior sucesso do formato, foi o título que popularizou o manhwa globalmente e foi o precursor de uma onda que ainda está em pleno vigor em 2026.
        </p>

        <div className="not-prose my-8 p-6 bg-card rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold text-otaku mb-4">📖 Exemplos Essenciais de Manhwa Coreano</h3>
          <div className="space-y-3">
            {[
              { titulo: "Solo Leveling — Chugong & DUBU", genero: "Ação / Sistema / Fantasia", status: "Finalizado (179 capítulos)", onde: "Webtoon, Tapas, Kakao", porque: "O manhwa que popularizou o formato globalmente. Arte de DUBU é extraordinária. Anime pela A-1 Pictures em 2024." },
              { titulo: "Tower of God — SIU (Rachel Manhwa)", genero: "Fantasia / Aventura", status: "Em andamento (600+ caps)", onde: "Webtoon (gratuito)", porque: "Um dos manhwas mais complexos em worldbuilding. Décadas de serialização com fandom global enorme." },
              { titulo: "Omniscient Reader's Viewpoint — Sing N Song", genero: "Isekai / Sistema / Ficção", status: "Finalizado (551 capítulos)", onde: "Kakao / Tapas", porque: "Considerado por muitos o melhor manhwa já escrito. Metanarrativa sobre leitura e protagonismo." },
            ].map(({ titulo, genero, status, onde, porque }) => (
              <div key={titulo} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-0.5">
                  <p className="font-bold text-xs text-otaku">{titulo}</p>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{genero}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-0.5">{porque}</p>
                <p className="text-xs text-muted-foreground"><span className="font-bold">Status:</span> {status} · <span className="font-bold">Onde:</span> {onde}</p>
              </div>
            ))}
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Manhua 🇨🇳: A Tradição Chinesa e o Gênero Xianxia
        </h2>
        <p>
          <strong>Manhua</strong> são os quadrinhos chineses — e têm uma identidade muito distinta dos outros dois formatos. O gênero dominante é o <strong>Xianxia</strong> (仙侠 — literalmente "herói imortal") e o <strong>Wuxia</strong> (武俠 — "herói marcial"), que combinam artes marciais, filosofia taoísta, hierarquias de poder (cultivo) e um sistema de progressão único que normalmente envolve anos ou séculos de treinamento.
        </p>
        <p>
          O manhua é consumido principalmente através de plataformas digitais chinesas como Bilibili Comics, Webnovel e Kuaikan Manhua. O acesso no Brasil é mais limitado do que o mangá ou o manhwa — mas plataformas como Tapas e algumas traduções de fãs (fan translations) tornaram os títulos mais populares acessíveis globalmente.
        </p>

        <div className="not-prose my-8 p-6 bg-card rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold text-otaku mb-4">📖 Exemplos Essenciais de Manhua Chinês</h3>
          <div className="space-y-3">
            {[
              { titulo: "Tales of Demons and Gods — Mad Snail", genero: "Xianxia / Reencarnação", status: "Em andamento (450+ caps)", onde: "Webnovel, Tapas", porque: "Um dos manhuas mais populares globalmente. Nie Li retorna ao passado com todo o conhecimento do futuro." },
              { titulo: "Martial Peak — Momo", genero: "Wuxia / Cultivo Marcial", status: "Em andamento (3.000+ caps)", onde: "Webnovel, Bilibili Comics", porque: "Um dos manhuas mais longos e populares. Yang Kai começa como o discípulo mais fraco e ascende ao topo." },
              { titulo: "Battle Through the Heavens — Tiantang Tu Dou", genero: "Xianxia / Fantasia", status: "Finalizado (1.000+ caps)", onde: "Webnovel, adaptação anime disponível", porque: "Clássico do gênero com adaptação anime em múltiplas temporadas. Xiao Yan perdendo e recuperando seus poderes." },
            ].map(({ titulo, genero, status, onde, porque }) => (
              <div key={titulo} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-0.5">
                  <p className="font-bold text-xs text-otaku">{titulo}</p>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{genero}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-0.5">{porque}</p>
                <p className="text-xs text-muted-foreground"><span className="font-bold">Status:</span> {status} · <span className="font-bold">Onde:</span> {onde}</p>
              </div>
            ))}
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Comparação Técnica Completa
        </h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Característica</th>
                <th className="text-left py-3 px-4 font-bold">Manga 🇯🇵</th>
                <th className="text-left py-3 px-4 font-bold">Manhwa 🇰🇷</th>
                <th className="text-left py-3 px-4 font-bold">Manhua 🇨🇳</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Direção de Leitura", "Direita → Esquerda", "Esquerda → Direita", "Esquerda → Direita"],
                ["Cores", "Preto e branco (regra geral)", "Full color (webtoon)", "Full color"],
                ["Formato Padrão", "Páginas em revista + tankobon", "Scroll vertical digital", "Digital (plataformas CN)"],
                ["Temas Dominantes", "Shonen, Seinen, Slice of Life, Isekai", "Sistema, Regressão, Romance", "Xianxia, Wuxia, Cultivo"],
                ["Plataformas BR", "Manga Plus, Panini, JBC", "Webtoon, Tapas, Kakao", "Tapas, Webnovel (inglês)"],
                ["Mercado Global", "Dominante — US$ 3 bi+ exportações", "Em crescimento acelerado", "Limitado fora da Ásia"],
                ["Adaptações Anime", "Vastíssimo histórico", "Solo Leveling, Tower of God", "Muito limitadas"],
              ].map(([carac, manga, manhwa, manhua]) => (
                <tr key={carac as string} className="border-b border-border">
                  <td className="py-3 px-4 font-bold text-xs">{carac}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{manga}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{manhwa}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{manhua}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Qual Escolher Para Começar?
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { tipo: "📚 Para Histórias Clássicas", rec: "Manga Japonês", motivo: "Décadas de obras-primas consolidadas. FMA, One Piece, Berserk, Death Note — histórico inigualável de qualidade narrativa e artística.", inicio: "Comece com FMA Brotherhood ou Death Note (12 vols, completo e disponível)" },
            { tipo: "🎨 Para Arte Colorida e Webtoon", rec: "Manhwa Coreano", motivo: "Full color, formato mobile-first, gêneros frescos como Sistema/Regressão. Solo Leveling prova que o formato pode rivalizar com qualquer outro.", inicio: "Comece com Solo Leveling no Webtoon (gratuito, 179 caps, finalizado)" },
            { tipo: "⚡ Para Maratonas Épicas", rec: "Manhua Chinês", motivo: "Narrativas de cultivo marcial com centenas ou milhares de capítulos. Ideal para quem quer mergulhar em um universo por meses.", inicio: "Comece com Tales of Demons and Gods (protagonista inteligente, narrativa de regressão)" },
          ].map(({ tipo, rec, motivo, inicio }) => (
            <div key={tipo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1">{tipo}</h3>
              <p className="text-sm font-bold text-otaku mb-1">→ {rec}</p>
              <p className="text-xs text-muted-foreground mb-2">{motivo}</p>
              <p className="text-xs bg-otaku/10 text-otaku px-2 py-1 rounded-md">💡 {inicio}</p>
            </div>
          ))}
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: manga, manhwa e manhua não competem — se complementam">
          <p>
            Li a primeira edição de One Piece em 1997 e hoje leio manhwa semanal no Webtoon. O que mais me impressiona é que o crescimento do manhwa coreano não cannibalizou o mercado do mangá japonês — <strong>os dois crescem simultaneamente</strong> porque atendem públicos ligeiramente diferentes e com formatos distintos.
          </p>
          <p>
            O mangá tem o peso histórico e a profundidade artística que 100 anos de indústria criam. O manhwa tem a inovação do formato webtoon e gêneros que o mangá nunca explorou tão bem. O manhua tem um nicho de fãs apaixonados pelo gênero Xianxia que nenhum outro formato preenche da mesma forma. <strong>Não existe um formato superior — existe o formato certo para o que você quer ler naquele momento.</strong> E se você só lê um dos três, está perdendo muito.
          </p>
        </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual formato é o seu favorito? 📚🇯🇵🇰🇷🇨🇳</h3>
          <p className="text-muted-foreground">Manga, manhwa ou manhua — conta nos comentários qual você mais lê e por quê! 👇</p>
        </div>
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Manga Plus by Shueisha — plataforma oficial de mangá japonês",
            url: "https://mangaplus.shueisha.co.jp/",
            publisher: "Shueisha",
            accessedAt: "Fevereiro 2026"
          },
          {
            title: "Webtoon — plataforma oficial de manhwa coreano",
            url: "https://www.webtoons.com/",
            publisher: "Naver / WEBTOON Entertainment",
            accessedAt: "Fevereiro 2026"
          },
          {
            title: "Tapas — plataforma de manhwa e webtoon em inglês",
            url: "https://tapas.io/",
            publisher: "Tapas Media",
            accessedAt: "Fevereiro 2026"
          },
          {
            title: "Webnovel — plataforma de manhua e light novel chinesa",
            url: "https://www.webnovel.com/",
            publisher: "Qidian / Webnovel",
            accessedAt: "Fevereiro 2026"
          },
          {
            title: "Panini Brasil — distribuição oficial de mangá no Brasil",
            url: "https://panini.com.br/mangas",
            publisher: "Panini Comics Brasil",
            accessedAt: "Fevereiro 2026"
          },
          {
            title: "Anime News Network — cobertura de adaptações anime de manhwa",
            url: "https://www.animenewsnetwork.com/",
            publisher: "Anime News Network",
            accessedAt: "Fevereiro 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="diferenca-mangas-manhuas-manhwas" />
      <CommentSection postId="diferenca-mangas-manhuas-manhwas" postTitle="Manga vs Manhwa vs Manhua: Guia Completo das Diferenças e Melhores Obras" />
    </article>
  );
};

export default DiferencaMangasManhuas;
