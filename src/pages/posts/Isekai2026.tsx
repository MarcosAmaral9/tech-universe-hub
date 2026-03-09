import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-isekai-2026.webp";

const Isekai2026 = () => {
  const slug = "isekai-2026-por-que-domina";

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
          Isekai em 2026: Por Que o Gênero Mais Criticado do Anime Continua Dominando
        </h1>

        <p className="text-muted-foreground text-lg">
          Clichês, críticas justas e as obras que transcendem a fórmula — por que o público ainda atravessa o portal.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            10 de Março, 2026
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
          alt="Portal mágico em uma rua noturna representando o gênero isekai"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Isekai</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Protagonista morre, renasce, ganha poder absurdo e vira “especial”. Você já viu isso — e talvez até goste. O isekai é
          criticado, parodiado e… ainda assim, domina.
        </p>

        <h2>O que define isekai (e de onde vem)</h2>
        <p>
          Isekai (異世界) é o gênero de “outro mundo” — por morte, portal, invocação ou jogo. As raízes são antigas, mas a
          explosão moderna consolidou uma linguagem própria: status, habilidades, guildas, classes.
        </p>

        <h2>A crítica justa: problemas reais</h2>
        <ul>
          <li>Protagonista OP sem risco real reduz tensão.</li>
          <li>Harém e personagens sem autonomia viram repetição cansativa.</li>
          <li>Mundo “RPG genérico” copia e cola o mesmo template.</li>
        </ul>

        <h2>As obras que transcendem o gênero</h2>
        <p>
          Mesmo dentro da fórmula, algumas séries elevam a barra: foco em consequência emocional, crescimento psicológico e
          worldbuilding consistente.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Por que o público ainda consome</h3>
          <p className="mb-0 text-muted-foreground">
            Isekai é fantasia de recomeço e reconhecimento: começar do zero, ser visto, ter agência. Em tempos de pressão e
            ansiedade, isso vira escapismo poderoso.
          </p>
        </div>

        <h2>Para onde vai o isekai em 2026</h2>
        <p>
          O mercado tende a filtrar os mais genéricos e premiar propostas com identidade. Sátiras e meta-críticas indicam um
          gênero amadurecendo.
        </p>

        <h2>Conclusão</h2>
        <p>
          Isekai não vai morrer — vai se diversificar. O truque é separar a “fórmula preguiçosa” do isekai que tem algo a
          dizer.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default Isekai2026;
