import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Star, Tv, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/okiraku-ryoushu.webp";

const OkirakuRyoushu = () => {
  useEffect(() => {
    trackArticleRead("okiraku-ryoushu-territory-defense-guia", "Easygoing Territory Defense: Van e a Magia de Produção — Guia Completo", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Construção · Defesa</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Easygoing Territory Defense (Okiraku Ryoushu): Van e a Magia de Produção — Guia Completo do Anime 2026
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
        <img fetchpriority="high" src={heroImg} alt="Easygoing Territory Defense Okiraku Ryoushu — Van e sua vila fortaleza" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Okiraku Ryoushu no Tanoshii Ryouchi Bouei</strong> — <strong>Easygoing Territory Defense by the Optimistic Lord</strong> em inglês — é o isekai de construção e defesa de território da temporada de inverno 2026. Com mais de <strong>1 milhão de cópias em circulação</strong> e o terceiro lugar no ranking de 2022 do Next Light Novel Awards, a série acompanha Van — um nobre reencarnado com a "inútil" Magia de Produção — transformando um vilarejo esquecido na mais poderosa fortaleza do reino.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Sou Akaike</strong>, com ilustrações de <strong>Kururi</strong>, e começou a ser serializada em maio de 2020 na plataforma <em>Shōsetsuka ni Narō</em>. A <strong>Overlap</strong> adquiriu a série e publica a light novel desde setembro de 2021 pelo selo <em>Overlap Novels</em> — sete volumes lançados até janeiro de 2025 e o sexto volume em janeiro de 2026. O mangá, desenhado por <strong>Maro Aoiro</strong>, é serializado no <em>Comic Gardo</em> (Overlap) desde agosto de 2021, com sete volumes coletados até abril de 2025. A <strong>Seven Seas Entertainment</strong> publica tanto a light novel quanto o mangá em inglês.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          História: A Magia "Inútil" que Muda Tudo
        </h2>
        <p>
          <strong>Van</strong>, quarto filho de um poderoso marquês, tem apenas dois anos quando recupera as memórias de sua vida anterior como trabalhador de escritório no Japão. Com o cérebro de adulto em um corpo infantil, é naturalmente considerado um prodígio — até manifestar sua habilidade mágica aos oito anos.
        </p>
        <p>
          Em uma família que valoriza exclusivamente a <strong>magia ofensiva</strong>, a habilidade de Van é a pior possível: <strong>Magia de Produção</strong> — uma habilidade de artesanato e criação, sem valor em batalha. Seu decepcionado pai o exila para administrar um <strong>vilarejo esquecido nas fronteiras do reino</strong>, praticamente em ruínas.
        </p>
        <p>
          Mas Van é diferente dos outros nobres: com o conhecimento acumulado de sua vida anterior e um olhar otimista sobre a situação, ele <strong>vê o potencial imenso</strong> daquele vilarejo abandonado. Usando a Magia de Produção de formas criativas que ninguém havia imaginado — construindo muralhas, criando armas e equipamentos superiores, desenvolvendo infraestrutura urbana — Van transforma metodicamente o vilarejo insignificante na <strong>mais poderosa cidade-fortaleza do mundo</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Anime (2026)
        </h2>
        <p>
          A adaptação foi anunciada durante o evento <strong>"Great Overlap Bunko All-Star Gathering Special 2025"</strong> em <strong>20 de abril de 2025</strong>. É produzida pelo estúdio <strong>NAZ</strong> e dirigida por <strong>Tetsuya Tatamitani</strong>, com <strong>Takayuki Kuriyama</strong> como diretor supervisor, roteiro de <strong>Yutaka Yasunaga</strong>, design de personagens de <strong>Shingo Nakamura</strong> e música de <strong>Kana Utatane</strong>. A série estreou em <strong>10 de janeiro de 2026</strong> na Tokyo MX e outras emissoras, prevista para <strong>12 episódios</strong>. A abertura é <strong>"Okirakuze~shon"</strong> (おきらくぜ～しょん) por <strong>Rei Nakashima</strong>, e o encerramento <strong>"Make It"</strong> por <strong>Nonoka Ōbuchi</strong>. A <strong>Crunchyroll</strong> transmite a série internacionalmente e a <strong>Muse Communication</strong> no Sudeste Asiático.
        </p>

        
        <AdInArticle className="my-8" />
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Van", desc:"Protagonista. Quarto filho do marquês, reencarnado com memórias de trabalhador japonês. Otimista, criativo e determinado, vê possibilidade onde os outros veem insignificância. A 'magia inútil' em suas mãos torna-se a ferramenta que redefine o que significa ser poderoso. Lidera com bondade, não com força — e inspira lealdade genuína em todos que o cercam."},
            {name:"Épsilon (Eps)", desc:"Servo pessoal de Van — uma das primeiras aliadas que ele recruta no vilarejo. Representa os habitantes originais que depositam confiança no novo senhor."},
            {name:"Butler do Pai (Gerência do Território)", desc:"O mordomo enviado pelo pai de Van para supervisionar o território — e que progressivamente percebe que o jovem senhor é extraordinariamente mais capaz do que qualquer nobre que já conheceu."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <h4 className="font-bold mb-2">{p.name}</h4>
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <AdRectangle className="my-8" />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <p className="font-bold mb-2 text-sm">📅 Status em março de 2026</p>
          <p className="text-sm text-muted-foreground mb-0">
            <strong>Okiraku Ryoushu</strong> estreou em 10 de janeiro de 2026 e está em andamento com 12 episódios previstos. Disponível no <strong>Crunchyroll</strong> com legenda e dublagem para múltiplos idiomas.
          </p>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Construção ou batalha — qual prefere no isekai? 🏰</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128296;</span>
          A Magia de Produção: Por Que Artesanato É Tática de Defesa
        </h2>
        <p>
          A Magia de Produção de Van parece inútil em batalha direta — e é exatamente essa percepção que a série subverte sistematicamente. Em vez de conjurar fogo ou invocar monstros, Van usa sua habilidade para criar: muralhas mais resistentes que qualquer pedreira humana poderia produzir, armas de qualidade que superam os melhores ferreiros do reino, e infraestrutura que transforma um vilarejo em declínio numa fortaleza autossuficiente. A lógica tática é simples mas elegante: defesa mais eficiente é aquela que não precisa ser testada. Van não cria um exército — cria um território tão bem protegido que atacá-lo representa custo estratégico inaceitável para qualquer inimigo.
        </p>
        <p>
          O conhecimento da vida anterior de Van — de gerente de escritório japonês — é menos sobre tecnologia e mais sobre gestão. Ele sabe organizar prioridades, delegar tarefas de acordo com habilidades individuais e planejar infraestrutura a longo prazo. Numa sociedade de fantasia onde a maioria dos nobres pensa taticamente (batalhas imediatas), Van pensa estrategicamente (o que torna o território invulnerável em cinco anos). Essa diferença de perspectiva é o verdadeiro "cheat" da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128737;</span>
          Os Aliados de Van e a Dinâmica do Território
        </h2>
        <p>
          O vilarejo exilado de Van começa com habitantes resistentes — pessoas que ficaram porque não tinham para onde ir, não por lealdade. A transformação desse grupo desgastado em uma comunidade coesa é um dos arcos mais satisfatórios da série, porque não é tratada como automática. Os personagens que se tornam aliados de Van têm razões específicas para confiar nele: uma aldeã que desconfia de nobres por experiência passada, um cavaleiro enviado para "vigiar" Van que gradualmente reconhece sua competência, guerreiros mercenários que ficam porque Van é o cliente mais honesto que já tiveram. Cada relação tem textura própria. O ritmo é deliberadamente slow — a construção do território ocupa meses internos à história, e a série não teme mostrar o processo iterativo: algo falha, Van ajusta, tenta de novo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127758;</span>
          Okiraku Ryoushu entre os Isekais de Construção de Território
        </h2>
        <p>
          O subgênero de isekais focados em construção de território cresceu muito desde o sucesso de <strong>TenSura</strong> e <strong>Overlord</strong>. Em 2026, títulos como <strong>Okiraku Ryoushu</strong>, <strong>Hell Mode</strong> e <strong>Kizoku Tensei</strong> competem pela atenção do público na temporada de inverno — cada um com proposta distinta dentro do subgênero. O que posiciona Okiraku Ryoushu de forma única é o foco quase exclusivo no aspecto de infraestrutura e artesanato em vez de combate. Enquanto TenSura constrói uma nação diplomática com exércitos poderosos e Overlord constrói uma dominação pelo terror, Van constrói uma fortaleza pela competência técnica e pela confiança que ganha um trabalhador por vez.
        </p>
        <p>
          Para o público que gosta de detalhes de construção e progressão orgânica de comunidade — mais próximo de um colony-building game do que de um RPG — Okiraku Ryoushu é uma das séries mais satisfatórias do catálogo atual de isekais. O estúdio NAZ, responsável pela produção, tem no currículo títulos como <strong>Id:Invaded</strong> (2020) e <strong>Hamatora</strong> (2014), com experiência em narrativas mais contidas e focadas — um fit razoável para o material de Sou Akaike.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: Van é o isekai-builder mais criativo da temporada de inverno 2026">
        <p>
          <strong>Okiraku Ryoushu no Tanoshii Ryouchi Bouei</strong> é uma light novel de <strong>Sou Akaike</strong>, publicada pela <strong>Overlap</strong> sob o selo <em>Overlap Novels</em> desde setembro de 2021 — sete volumes publicados. O mangá, com arte de <strong>Maro Aoiro</strong>, é serializado no <em>Comic Gardo</em> (Overlap). A <strong>Seven Seas Entertainment</strong> licencia light novel e mangá em inglês. O anime é produzido pelo estúdio <strong>NAZ</strong>, dirigido por <strong>Tetsuya Tatamitani</strong>, e estreou em <strong>10 de janeiro de 2026</strong> com 12 episódios. Disponível na <strong>Crunchyroll</strong>.
        </p>
        <p>
          O que diferencia Okiraku Ryoushu de outros isekais de construção de território é o otimismo estrutural — Van nunca trata a Magia de Produção como maldição, apenas como ferramenta que outros não souberam usar. Para quem gostou de <em>Honzuki no Gekokujou</em> (Ascendance of a Bookworm) pela construção detalhada de mundo, Okiraku Ryoushu está na mesma família — com ritmo mais leve e menos carga emocional.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Earth Star Novel — Site oficial",
            url: "https://www.earthstar-ent.com/",
            publisher: "Earth Star Novel",
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
            url: "https://www.animenewsnetwork.com/",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          },
          {
            title: "Comic Earth Star — Site oficial",
            url: "https://www.comic-earthstar.com/",
            publisher: "Comic Earth Star",
            accessedAt: "Maio 2026"
          },
          {
            title: "EMT Squared — Site oficial",
            url: "https://emtsquared.co.jp/",
            publisher: "EMT Squared",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="okiraku-ryoushu-territory-defense-guia" />
      <CommentSection postId="okiraku-ryoushu-territory-defense-guia" postTitle="Easygoing Territory Defense (Okiraku Ryoushu) — Guia Completo"  category="otaku" />
      <AdLeaderboard className="my-8" />
    </article>
  );
};

export default OkirakuRyoushu;
