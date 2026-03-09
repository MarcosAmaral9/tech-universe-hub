import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-manga-vs-anime.webp";

const MangaVsAnimeAdaptacao = () => {
  const slug = "manga-vs-anime-adaptacao";

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/otaku"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />

        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Mangá vs. Anime: Quando a Adaptação Supera o Original (e Quando Decepciona)
        </h1>

        <p className="text-muted-foreground text-lg">
          Uma análise honesta do que faz um anime funcionar como adaptação — e por que alguns viram decepção coletiva.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            06 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            11 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Comparação visual entre estética de mangá e anime"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Adaptação</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Toda vez que um mangá amado vira anime, a internet entra em colapso. Mas o que realmente define uma boa adaptação?
          Quando o anime amplifica o original — e quando ele comprime arcos, apaga personagens e vira confusão?
        </p>

        <h2>O desafio de adaptar mangá</h2>
        <p>
          Adaptar não é “colorir páginas”. É decidir ritmo, cortes, trilha sonora, direção de atuação e como traduzir
          silêncio e subtexto para tempo real. Uma boa adaptação respeita o tom emocional e entende o medium.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Checklist: 5 critérios de uma boa adaptação</h3>
          <ol className="mb-0">
            <li>
              <strong>Ritmo:</strong> não apressar arcos importantes.
            </li>
            <li>
              <strong>Direção:</strong> storyboard e composição que valorizam a história.
            </li>
            <li>
              <strong>Trilha sonora:</strong> música no timing certo.
            </li>
            <li>
              <strong>Animação:</strong> consistência (não apenas “um episódio lindo”).
            </li>
            <li>
              <strong>Clareza:</strong> o espectador entende sem precisar “explicação no YouTube”.
            </li>
          </ol>
        </div>

        <h2>Quando o anime supera o mangá</h2>
        <p>
          Isso acontece quando a equipe usa o audiovisual para aumentar impacto: coreografias, atuação, música e direção de
          câmera podem tornar cenas memoráveis de um jeito impossível no papel.
        </p>

        <h2>Quando a adaptação decepciona</h2>
        <p>
          O padrão é conhecido: compressão de muitos volumes em poucos episódios, cortes de contexto, personagens secundários
          sumindo e uma narrativa que “salta” de cena em cena. O resultado é frustração para fãs e confusão para novos.
        </p>

        <h2>Como aproveitar os dois meios</h2>
        <p>
          Trate mangá e anime como complementares: o anime traz experiência audiovisual; o mangá aprofunda detalhes e ritmo.
          Para séries longas, o mangá costuma estar à frente — disciplina com spoilers é parte do jogo.
        </p>

        <h2>Conclusão</h2>
        <p>
          A melhor adaptação não é a mais “fiel” cena a cena: é a que entende a alma da obra e faz escolhas inteligentes para
          o formato.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default MangaVsAnimeAdaptacao;
