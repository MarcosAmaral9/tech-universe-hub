import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-aprender-japones-anime-2026.webp";

const AprenderJaponesAnime2026 = () => {
  const slug = "aprender-japones-assistindo-anime-2026";

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
          Como Aprender Japonês Assistindo Anime: O Método que Funciona em 2026
        </h1>

        <p className="text-muted-foreground text-lg">
          Técnicas, rotina e ferramentas para transformar o anime em prática real — sem romantizar “fluência em 3 meses”.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            09 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            13 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Mesa de estudos com flashcards e notebook para aprender japonês assistindo anime"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Japonês</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Aprender japonês assistindo anime funciona — desde que você use o anime como <em>imersão</em> e não como substituto do
          estudo. Em 2026, ferramentas modernas deixam o processo mais simples e mensurável.
        </p>

        <h2>O que o anime pode (e não pode) ensinar</h2>
        <p>
          Anime ajuda muito em <strong>listening</strong>, vocabulário em contexto e motivação. Mas não resolve sozinho: escrita
          (hiragana/katakana/kanji) e gramática precisam de estudo dedicado.
        </p>

        <h2>Imersão e SRS: o combo que dá resultado</h2>
        <p>
          Abordagens como imersão progressiva + SRS (repetição espaçada) são as mais consistentes. O objetivo é coletar
          palavras reais do conteúdo e revisar diariamente.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Rotina semanal simples</h3>
          <ul className="mb-0">
            <li>
              <strong>Diário:</strong> 20–30 min de reviews (SRS).
            </li>
            <li>
              <strong>Diário:</strong> 1 episódio com legendas em japonês (quando possível).
            </li>
            <li>
              <strong>3x/semana:</strong> leitura fácil (mangá no seu nível).
            </li>
            <li>
              <strong>1x/semana:</strong> output (falar/escrever), mesmo errado.
            </li>
          </ul>
        </div>

        <h2>Conteúdo recomendado por nível</h2>
        <p>
          Para iniciantes, prefira falas claras e vocabulário cotidiano. Evite ação intensa no começo: fala rápida e termos
          inventados atrapalham.
        </p>

        <h2>Conclusão</h2>
        <p>
          Constância vence intensidade: 30 minutos diários por meses batem maratonas ocasionais. Use o anime como combustível —
          e mantenha o estudo estruturado.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default AprenderJaponesAnime2026;
