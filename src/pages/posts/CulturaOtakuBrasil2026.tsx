import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-cultura-brasil-2026.webp";

const CulturaOtakuBrasil2026 = () => {
  const slug = "cultura-otaku-brasil-2026";

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
          Cultura Otaku no Brasil 2026: Como Virou uma das Maiores Comunidades do Mundo
        </h1>

        <p className="text-muted-foreground text-lg">
          Da década de 90 ao streaming: a trajetória, os números e os desafios de uma comunidade gigante.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            07 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Público em convenção representando a cultura otaku no Brasil"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Cultura Otaku</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          O Brasil se tornou um dos maiores mercados consumidores de mangá e anime fora do Japão. O que começou com TV aberta,
          virou comunidade na internet — e hoje movimenta eventos, comércio, creators e uma economia própria.
        </p>

        <h2>Os anos 90: o começo de tudo</h2>
        <p>
          A porta de entrada foi a TV. Séries como Cavaleiros do Zodíaco, Dragon Ball Z e Sailor Moon criaram gerações de fãs
          e mostraram que “desenho japonês” era mais do que passatempo infantil.
        </p>

        <h2>Anos 2000: comunidade e internet</h2>
        <p>
          A internet democratizou o acesso. Fansubs (com todas as polêmicas) formaram público e, com o tempo, muitos
          profissionais de localização vieram justamente desse ecossistema.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Três viradas que mudaram o jogo</h3>
          <ul className="mb-0">
            <li>
              <strong>Eventos massivos:</strong> convenções viraram “datas do calendário”.
            </li>
            <li>
              <strong>Streaming:</strong> acesso fácil e lançamento rápido.
            </li>
            <li>
              <strong>Creator economy:</strong> criadores em português puxaram a nova geração.
            </li>
          </ul>
        </div>

        <h2>O mercado hoje: números que impressionam</h2>
        <p>
          Editoras publicam dezenas de títulos em paralelo, o licenciamento acelera e o consumo de merchandise cresce. O
          “otaku brasileiro” também virou produtor de conteúdo: análises, edits, recomendações e comunidades definem o que
          “hype” e o que “flopou”.
        </p>

        <h2>Desafios e futuro</h2>
        <p>
          Com crescimento, aparecem debates sobre representatividade, assédio em eventos, consumo consciente e o equilíbrio
          entre hobby e compulsão. O futuro aponta para integração total: gostar de anime é simplesmente normal.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default CulturaOtakuBrasil2026;
