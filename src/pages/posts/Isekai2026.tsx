import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Sparkles, AlertTriangle, Star, TrendingUp } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/isekai-2026.webp";

const Isekai2026 = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link to="/otaku" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Isekai em 2026: Por Que o Gênero Mais Criticado do Anime Continua Dominando
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />10 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Isekai em 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Protagonista morre atropelado por um caminhão. Acorda em outro mundo. É imediatamente reconhecido como especial. Se você rolou os olhos — provavelmente já assistiu mais de dez isekais. O gênero é simultaneamente o mais ridicularizado e o mais consumido do anime moderno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          O Que Define o Isekai e de Onde Ele Vem
        </h2>
        <p>
          Isekai (異世界, literalmente "mundo diferente") é o gênero onde o protagonista é transportado para outro mundo. O gênero tem raízes antigas: <strong>Alice no País das Maravilhas</strong> e <strong>O Mágico de Oz</strong> são isekais avant la lettre. A explosão aconteceu com <strong>Sword Art Online</strong> em 2012 e se consolidou com Re:Zero, KonoSuba e That Time I Got Reincarnated as a Slime.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-otaku" />
          A Crítica Justa: Problemas Reais do Gênero
        </h2>
        <p>
          A crítica não é sem fundamento. O protagonista "overpowered" (OP) remove a tensão dramática. O harém de personagens femininas sem autonomia é uma crítica legítima. A fórmula "mundo de RPG com status na tela" se repetiu tantas vezes que virou paródia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          As Obras que Transcendem o Gênero
        </h2>
        <p>
          <strong>Re:Zero</strong> quebrou o molde ao mostrar que a morte do protagonista tem consequências emocionais devastadoras. Subaru não é OP — ele sofre, falha e carrega traumas reais. A série é um estudo de PTSD embrulhado em fantasia.
        </p>
        <p>
          <strong>Mushoku Tensei</strong> divide opiniões, mas é inegavelmente uma das construções de mundo mais ricas do gênero. <strong>Frieren: Beyond Journey's End</strong> é o isekai invertido: uma elfa que reflete sobre o significado de 1000 anos de vida. Ganhou o Grand Prize no Manga Taisho de 2021.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          Por Que o Público Continua Consumindo
        </h2>
        <p>
          O gênero oferece a fantasia de escapismo total: "como seria eu em outro mundo, começando do zero, com todo o conhecimento que tenho". É uma fantasia de recomeço e reconhecimento. No contexto socioeconômico japonês de pressão intensa, essa fantasia ressoa de forma poderosa.
        </p>
        <p>
          O isekai não vai morrer — vai se diversificar. <strong>KonoSuba</strong> e <strong>Cautious Hero</strong> são sátiras que amam o que criticam. Essa auto-consciência aponta para uma evolução criativa genuína.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual seu isekai favorito?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="isekai-2026-genero-domina" />
      <CommentSection postId="isekai-2026-genero-domina" />
    </article>
  );
};

export default Isekai2026;
