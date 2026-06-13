import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Star, Tv, Crown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/kizoku-tensei.webp";

const KizokuTensei = () => {
  useEffect(() => {
    trackArticleRead("kizoku-tensei-noble-reincarnation-guia", "Noble Reincarnation: Guia Completo do Anime 2026", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Fantasia Medieval</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Noble Reincarnation (Kizoku Tensei): O Príncipe Mais Forte — Guia Completo do Anime 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Noble Reincarnation Kizoku Tensei — Noah Ararat décimo terceiro príncipe" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Kizoku Tensei: Megumareta Umare kara Saikyou no Chikara wo Eru</strong> — em inglês <strong>Noble Reincarnation: Born Blessed, So I'll Obtain Ultimate Power</strong> — é o isekai da temporada de inverno 2026 que coloca um protagonista em uma posição raramente vista no gênero: ele nasce privilegiado. Sem a pobreza habitual do isekai típico, Noah Ararat é o décimo terceiro filho do imperador — e o mais poderoso de todos eles, mesmo antes de qualquer treinamento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A série é baseada na light novel escrita por <strong>Nazuna Miki</strong> e ilustrada por <strong>kyo</strong>. A web novel original começou em fevereiro de 2019 na plataforma <em>Shōsetsuka ni Narō</em> e foi adquirida pela <strong>SB Creative</strong>, que a publica sob o selo <em>GA Novel</em> desde setembro de 2019. Dez volumes foram lançados até agosto de 2025 e o décimo primeiro em janeiro de 2026. O mangá, desenhado por <strong>Hisui Hanashima</strong> com roteiro de <strong>Kentaro Kurimoto</strong>, é serializado na plataforma <strong>Manga UP!</strong> (Square Enix) desde dezembro de 2019 — dez volumes publicados até janeiro de 2026.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-otaku" />
          Premissa: O Príncipe Cheat que Nasceu Privilegiado
        </h2>
        <p>
          O protagonista é um homem comum do Japão que, após morrer, é <strong>reencarnado no mesmo mundo de fantasia medieval</strong> como <strong>Noah Ararat</strong> — o décimo terceiro filho do imperador. Diferente da maioria dos isekais, Noah nasce em excelente posição social: família imperial, acesso a educação de elite e recursos abundantes.
        </p>
        <p>
          O detalhe que torna Noah extraordinário: ele possui <strong>cap de nível infinito</strong> e uma habilidade cheat única que permite <strong>absorver e acumular os poderes de qualquer pessoa que sirva a ele</strong>. Quanto mais leais seguidores ele tiver, mais forte ele fica — tornando-o essencialmente ilimitado em potencial de crescimento. Com sua memória da vida anterior e sua habilidade overpowered, Noah se destaca como criança prodigiosa.
        </p>
        <p>
          Porém, por trás da vida glamorosa da aristocracia existem <strong>conspirações, rivalidades pelo trono e lutas de poder</strong> constantes. Noah, apesar de sua posição privilegiada, precisa navegar intrigas políticas enquanto desenvolve seus poderes extraordinários.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Anime (2026)
        </h2>
        <p>
          A adaptação em anime foi anunciada durante o evento <strong>"GA Fes 2025"</strong> em <strong>4 de janeiro de 2025</strong>. É produzida pelo estúdio <strong>CompTown</strong> (em cooperação com a Jumondou) e dirigida por <strong>Michio Fukuda</strong>, com roteiro de <strong>Toshiaki Satō</strong>, design de personagens por <strong>Takashi Kawashima e Ayumi Nishihata</strong>, e música de <strong>Takafumi Wada</strong>. A série estreou em <strong>4 de janeiro de 2026</strong>, prevista para <strong>12 episódios</strong>. A abertura é <strong>"Break off"</strong> pelo grupo <strong>SUPER★DRAGON</strong> e o encerramento <strong>"You'll Be In My Heart ~By My Side~"</strong>. Disponível na <strong>Crunchyroll</strong> e Amazon Prime Video.
        </p>

        
        <AdInArticle className="my-8" />
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Noah Ararat", va:"Karin Nanami", desc:"Protagonista. Décimo terceiro filho do imperador, reencarnado com memórias da vida anterior no Japão. Cap de nível infinito e habilidade de absorver poderes de servos leais. Tratado como prodígio desde a infância pela combinação de seu intelecto de adulto com suas habilidades físicas excepcionais."},
            {name:"Albert Ararat", va:"Kouji Yusa", desc:"Personagem do círculo próximo de Noah — membro da família imperial."},
            {name:"Shirley Grantz", va:"Iori Saeki", desc:"Personagem feminina do elenco principal."},
            {name:"Alichey", va:"Azusa Tachibana", desc:"Personagem feminina do elenco principal."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>
              </div>
      <AdRectangle className="my-8" />
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <p className="font-bold mb-2 text-sm">📅 Status em março de 2026</p>
          <p className="text-sm text-muted-foreground mb-0">
            O anime de <strong>Kizoku Tensei</strong> está em exibição — estreou em 4 de janeiro de 2026 e está em andamento com 12 episódios previstos. Esta é a única temporada confirmada até o momento.
          </p>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">O príncipe mais forte da temporada? 👑</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128081;</span>
          O Sistema de Poder de Noah: Cap Infinito e Absorção de Lealdade
        </h2>
        <p>
          A habilidade central de Noah Ararat é estruturalmente única entre os isekais de "filho de nobre reencarnado". Enquanto séries como <strong>Tearmoon Empire</strong> focam em conhecimento do futuro, Noah tem um sistema de poder que escala com relacionamentos humanos: ele absorve e acumula os poderes de qualquer pessoa que genuinamente sirva a ele com lealdade. Isso cria uma lógica de progressão diferente do isekai típico — Noah não fica mais forte apenas lutando ou treinando, fica mais forte construindo relações de confiança genuína. Cada seguidor que escolhe Noah de forma autêntica, sem coerção, transfere uma fração de seu poder. A série estabelece claramente que lealdade forçada ou comprada não funciona — apenas lealdade genuína contribui para o crescimento de Noah.
        </p>
        <p>
          O cap de nível infinito significa que não há teto teórico para onde Noah pode chegar. Na prática, o crescimento é limitado pelo número e qualidade dos seguidores genuinamente leais — o que injeta um elemento de construção de personagem na progressão de poder. Para um isekai de inverno 2026, esse sistema se destaca pela coerência interna.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127984;</span>
          Política e Conspiração: O Verdadeiro Antagonismo da Série
        </h2>
        <p>
          Diferente de muitos isekais onde o antagonismo vem de vilões declarados, em Kizoku Tensei os maiores obstáculos de Noah são estruturais: a política imperial, os irmãos rivais pelo trono e a desconfiança que um ser de poder absurdo gera mesmo entre aliados potenciais. O décimo terceiro filho do imperador é, por definição, o menos provável de herdar qualquer coisa — isso libera Noah de expectativas imediatas, mas também o torna alvo de qualquer facção que enxerga seu poder crescente como ameaça antes que ele decida ser uma.
        </p>
        <p>
          A série explora o paradoxo: Noah genuinamente não tem ambições políticas iniciais, mas seu simples crescimento o coloca em rota de colisão com quem tem. Os aliados de Noah são, em sua maioria, pessoas que reconhecem sua capacidade antes de entender sua origem — criando dinâmicas de lealdade que a série usa para explorar a diferença entre seguir alguém pelo poder e seguir alguém pela pessoa. Para uma light novel da SB Creative com mais de dez volumes publicados, a construção de cast ao longo do tempo é um dos pontos fortes que o anime tem espaço para desenvolver.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#9876;</span>
          Kizoku Tensei entre os Isekais de Nobre de 2026
        </h2>
        <p>
          O subgênero "nobre reencarnado" floresceu no Narou após o sucesso de <strong>Mushoku Tensei</strong> (2012) e tem dezenas de títulos com premissas similares. O que diferencia as obras dentro do subgênero geralmente é a forma como o autor usa o privilégio aristocrático: como ponto de partida para aventura exterior, como mecanismo político, ou como contraste para desenvolvimento de caráter. Kizoku Tensei usa o privilégio como <em>complicação</em>, não como recurso. Ser o décimo terceiro filho do imperador é mais perigoso do que ser um camponês — há mais pessoas que querem eliminar Noah do que protegê-lo. Para fãs de isekais políticos como <strong>The Genius Prince's Guide to Raising a Nation Out of Debt</strong>, Kizoku Tensei está na mesma família de subgênero.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: Kizoku Tensei inverte o clichê do isekai pobre — com resultados interessantes">
        <p>
          <strong>Kizoku Tensei: Megumareta Umare kara Saikyou no Chikara wo Eru</strong> é uma light novel de <strong>Nazuna Miki</strong> publicada pela <strong>SB Creative</strong> sob o selo <em>GA Novel</em> desde setembro de 2019 — dez volumes até agosto de 2025, décimo primeiro em janeiro de 2026. O mangá é serializado na <strong>Manga UP!</strong> (Square Enix). O anime é produzido pelo <strong>CompTown</strong>, dirigido por <strong>Michio Fukuda</strong>, com 12 episódios que estrearam em <strong>4 de janeiro de 2026</strong>. Disponível na <strong>Crunchyroll</strong> e Amazon Prime Video.
        </p>
        <p>
          O que me chamou atenção em Kizoku Tensei é a inversão da premissa padrão: Noah não começa sem nada. Começa com tudo — família imperial, recursos, educação de elite. O drama não vem da pobreza mas das conspirações ao redor de alguém excessivamente capaz. Esse enquadramento evita a jornada de ascensão do zero que saturou o gênero e entrega algo diferente: gestão de excesso de poder numa estrutura política hostil.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Earth Star Entertainment — Comic Earth Star",
            url: "https://www.comic-earthstar.com/",
            publisher: "Earth Star Entertainment",
            accessedAt: "Maio 2026"
          },
          {
            title: "Oricon — Light Novel Rankings",
            url: "https://www.oricon.co.jp/rank/",
            publisher: "Oricon",
            accessedAt: "Maio 2026"
          },
          {
            title: "MyAnimeList — Database",
            url: "https://myanimelist.net/",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "Anime News Network — Encyclopedia",
            url: "https://www.animenewsnetwork.com/encyclopedia/",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          },
          {
            title: "Comic Natalie — News",
            url: "https://natalie.mu/comic",
            publisher: "Comic Natalie",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="kizoku-tensei-noble-reincarnation-guia" />
      <CommentSection postId="kizoku-tensei-noble-reincarnation-guia" postTitle="Noble Reincarnation (Kizoku Tensei) — Guia Completo"  category="otaku" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default KizokuTensei;
