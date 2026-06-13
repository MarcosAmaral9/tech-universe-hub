import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Star, Tv, Swords } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/mugen-gacha.webp";

const MugenGacha = () => {
  useEffect(() => {
    trackArticleRead("mugen-gacha-level-9999-traicao-dungeon", "My Gift Lvl 9999 Unlimited Gacha: Traição, Vingança e Nível 9999", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Fantasia · Vingança</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          My Gift Lvl 9999 Unlimited Gacha: Traído no Fundo da Dungeon — Guia Completo do Anime 2025
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="My Gift Lvl 9999 Unlimited Gacha — Light e suas companheiras" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com o título japonês completo <strong>Shinjiteita Nakamatachi ni Dungeon Okuchi de Korosarekaketa ga Gift "Mugen Gacha" de Level 9999 no Nakamatachi wo Te ni Irete Moto Party Member to Sekai ni Fukushuu &amp; "Zamaa!" Shimasu!</strong> — simplificado em inglês como <strong>My Gift Lvl 9999 Unlimited Gacha</strong> — o anime estreou em 2025 trazendo uma das histórias de traição e vingança mais viscerais do gênero isekai. Produzido pelo <strong>J.C.Staff</strong>, o anime chegou ao catálogo do HIDIVE e conquistou fãs de revenge fantasy ao redor do mundo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Manga
        </h2>
        <p>
          A série é baseada em uma <strong>light novel japonesa</strong> adaptada para manga. O anime foi anunciado em <strong>15 de novembro de 2024</strong> e revelado como série de televisão produzida pelo <strong>J.C.Staff</strong>, dirigida por <strong>Katsushi Sakurabi</strong>, com roteiros de <strong>Hiroshi Ōnogi</strong>, design de personagens de <strong>Yukie Suzuki</strong> e música de <strong>Ryo Takahashi</strong>. A série foi ao ar de <strong>3 de outubro a 19 de dezembro de 2025</strong> na Tokyo MX e outras emissoras. A abertura é <strong>"Sen yori Kaminari ya, Sarariya Takaki"</strong> performada por <strong>Tei</strong> e o encerramento <strong>"Shirogarasu"</strong> por <strong>Nowlu</strong>. A <strong>Sentai Filmworks</strong> licenciou a série para a América do Norte, Austrália e Ilhas Britânicas, disponível no <strong>HIDIVE</strong>. A <strong>Muse Communication</strong> distribuiu no Sudeste Asiático.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-otaku" />
          História: A Traição no Fundo do Abismo
        </h2>
      <AdInArticle />
        <p>
          O mundo da série foi criado por um Deus que formou <strong>nove raças</strong> — sendo os humanos a mais fraca e ridicularizada entre todas. <strong>Light</strong>, um jovem humano, é convidado a fazer parte da <strong>"Assembleia das Raças"</strong> — um grupo formado por membros das nove raças, algo extremamente raro para um humano. Feliz com essa oportunidade única, Light se dedica completamente ao grupo.
        </p>
        <p>
          Sua lealdade, porém, é respondida com traição: seus companheiros o abandonam no lugar mais perigoso do mundo — o <strong>Abismo</strong>, a dungeon mais profunda e mortal do reino — para morrer. Sozinho no fundo, cercado por monstros carnívoros, Light recorre ao único poder que possui: o dom chamado <strong>"Gacha Ilimitada"</strong> (Mugen Gacha).
        </p>
        <p>
          Anteriormente, o dom só produzia itens inúteis. Mas nessa situação extrema, de seu Gacha emerge <strong>Mei</strong> — uma guerreira de nível 9999 usando uniforme de empregada doméstica. Com o tempo, Light convoca cada vez mais guerreiras de nível máximo, constrói um reino próprio no Abismo e evolui ele mesmo para o nível 9999. <strong>Três anos depois</strong>, com um exército de companheiras de elite juradas a ele, Light ascende à superfície com um único objetivo: vingança.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Light", va:"Nina Tamaki", desc:"Protagonista humano. Puro, leal e inicialmente ingênuo, sofre uma das traições mais brutais do gênero. Após três anos no Abismo, emerge transformado — ainda com sua bondade fundamental, mas agora com poder absoluto e determinação inabalável para responsabilizar seus traidores."},
            {name:"Mei", va:"—", desc:"Primeira invocação do Gacha de Light — uma guerreira de nível 9999 em uniforme de empregada doméstica. Extremamente poderosa e leal a Light, representa o começo da transformação do protagonista de vítima a soberano."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                {p.va !== "—" && <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>}
              </div>
      <AdRectangle className="my-8" />
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Recepção e Onde Assistir
        </h2>
        <p>
          O anime foi bem recebido pelo público fã do subgênero <strong>revenge isekai</strong> — histórias centradas em protagonistas traídos que constroem poder para se vingar. A premissa direto ao ponto, o desenvolvimento visual das invocações e o senso de satisfação progressiva da narrativa de vingança (o famoso <em>zamaа!</em> — expressão japonesa para "veja você agora!") conquistaram a audiência. Como de março de 2026, <strong>nenhuma segunda temporada foi anunciada oficialmente</strong>.
        </p>
        <p>
          Disponível no <strong>HIDIVE</strong> para América do Norte, Austrália e Reino Unido, e via <strong>Muse Communication</strong> no Sudeste Asiático.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Vingança servida fria — ou quente? 🎲</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#9889;</span>
          O Subgênero Revenge Isekai e Onde Mugen Gacha se Posiciona
        </h2>
        <p>
          O revenge isekai — centrado em protagonistas traídos que retornam para se vingar — é um dos subgêneros mais populares da ficção japonesa contemporânea. Obras como <strong>Tate no Yuusha no Nariagari</strong> pavimentaram o gênero com fórmulas que Mugen Gacha segue de perto: protagonista inocente sofre injustiça extrema, acumula poder durante isolamento, e retorna para confrontar os responsáveis com força avassaladora. O que distingue Mugen Gacha dentro desse subgênero é a mecânica central: o sistema de gacha — familiar ao público de jogos mobile japoneses — como único recurso de Light no momento mais desesperado. A habilidade, anteriormente inútil por produzir apenas itens comuns, se transforma em recurso ilimitado quando ativada no fundo do Abismo.
        </p>
        <p>
          A narrativa de vingança progressiva é o motor emocional que mantém o público engajado episódio a episódio. Light não só se vinga dos traidores; ele constrói um sistema alternativo ao deles, tornando-os gradualmente irrelevantes em vez de simplesmente destruí-los. Essa distinção sutil de abordagem é o que separa Mugen Gacha das obras mais agressivas do subgênero.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128101;</span>
          As Aliadas de Nível 9999: Como o Gacha Cria o Grupo
        </h2>
        <p>
          O grupo de Light cresce através das invocações do Gacha Ilimitada, e cada personagem convocada chega com lealdade absoluta — contrastando diretamente com a traição sofrida. As guerreiras invocadas são sempre de nível máximo (9999), mas têm personalidades distintas que vão além da função de "aliada poderosa". <strong>Mei</strong> é a primeira convocada — uma guerreira com uniforme de empregada doméstica, estética incomum para uma elite que a série usa conscientemente para humor de contraste. As outras aliadas ampliam o repertório de habilidades de Light, criando uma party artificialmente balanceada que o sistema de gacha torna narrativamente justificável.
        </p>
        <p>
          A tensão dramática não vem da incerteza sobre se as aliadas serão leais — é garantida pelo sistema — mas de como Light dirige e protege esse grupo enquanto avança em direção à superfície e eventualmente ao confronto com seus ex-companheiros. A série é honesta sobre ser power fantasy: o prazer não é a incerteza, mas a progressão inexorável em direção à satisfação narrativa prometida desde o episódio 1.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127758;</span>
          O Mundo: Estrutura Social e a Hierarquia das Raças
        </h2>
        <p>
          O mundo de Mugen Gacha é construído sobre uma hierarquia rígida de raças — humanos, elfos, beastmen e demônios — onde a posição social determina acesso a recursos e proteção legal. Light, como humano sem habilidade reconhecida, estava no estrato mais vulnerável antes de sua queda no Abismo. Esse sistema de classes contribui para a credibilidade da traição: numa sociedade onde valor é medido por habilidade de combate, um companheiro sem poder é um fardo descartável.
        </p>
        <p>
          A ironia que a série desenvolve é que Light, agora com acesso ilimitado a aliadas de nível máximo de múltiplas raças, transcende a hierarquia que o descartou. Ele não pertence mais a nenhuma categoria do sistema — é o topo de facto enquanto o sistema finge que ele não existe. Esse posicionamento narrativo permite explorar o contraste entre poder real e reconhecimento social sem precisar resolver o conflito diretamente nos primeiros arcos.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: Mugen Gacha entrega o que promete — e não mais que isso">
        <p>
          O anime <strong>My Gift Lvl 9999 Unlimited Gacha</strong> foi produzido pelo <strong>J.C.Staff</strong>, dirigido por Katsushi Sakurabi, com roteiros de Hiroshi Ōnogi e música de Ryo Takahashi. Foi ao ar de <strong>3 de outubro a 19 de dezembro de 2025</strong> na Tokyo MX. Licenciado pela <strong>Sentai Filmworks</strong> para o HIDIVE e pela <strong>Muse Communication</strong> no Sudeste Asiático. Até maio de 2026, nenhuma segunda temporada foi anunciada.
        </p>
        <p>
          O revenge isekai tem uma fórmula testada e Mugen Gacha a segue com competência — traição, isolamento, acúmulo de poder, retorno. O que diferencia a obra de concorrentes diretos como <em>Tate no Yuusha</em> é a mecânica do gacha como sistema de progressão: a invocação aleatória de aliadas cria um elemento de surpresa na construção do grupo de Light. Para quem já assistiu Shield Hero e quer algo no mesmo espírito com premissa mais extrema, é uma escolha coerente.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Hifumi Shobo — Site oficial",
            url: "https://hifumi.co.jp/",
            publisher: "Hifumi Shobo",
            accessedAt: "Maio 2026"
          },
          {
            title: "MyAnimeList — Mugen no Gacha",
            url: "https://myanimelist.net/anime/50264/Yarinaoshi_Reijou_wa",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "ComicWalker — Kadokawa",
            url: "https://comic-walker.com/",
            publisher: "ComicWalker",
            accessedAt: "Maio 2026"
          },
          {
            title: "Crunchyroll — My Gift LVL 9999",
            url: "https://www.crunchyroll.com/series/GG5H5XQ5R/my-unique-skill-makes-me-op-even-at-level-1",
            publisher: "Crunchyroll",
            accessedAt: "Maio 2026"
          },
          {
            title: "Tentai Books — Catalog",
            url: "https://tentaibooks.com/",
            publisher: "Tentai Books",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="mugen-gacha-level-9999-traicao-dungeon" />
      <CommentSection postId="mugen-gacha-level-9999-traicao-dungeon" postTitle="My Gift Lvl 9999 Unlimited Gacha — Traição no Fundo da Dungeon"  category="otaku" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default MugenGacha;