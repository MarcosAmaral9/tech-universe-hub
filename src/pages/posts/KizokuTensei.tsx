import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
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
      </header>

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

      <RelatedPosts currentSlug="kizoku-tensei-noble-reincarnation-guia" />
      <CommentSection postId="kizoku-tensei-noble-reincarnation-guia" postTitle="Noble Reincarnation (Kizoku Tensei) — Guia Completo" />
    </article>
  );
};

export default KizokuTensei;
