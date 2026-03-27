import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
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
      </header>

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

      <RelatedPosts currentSlug="okiraku-ryoushu-territory-defense-guia" />
      <CommentSection postId="okiraku-ryoushu-territory-defense-guia" postTitle="Easygoing Territory Defense (Okiraku Ryoushu) — Guia Completo" />
    </article>
  );
};

export default OkirakuRyoushu;
