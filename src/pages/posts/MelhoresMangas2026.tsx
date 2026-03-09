import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-melhores-mangas-2026.webp";

const MelhoresMangas2026 = () => {
  const slug = "melhores-mangas-para-ler-2026";

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
          Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível de Experiência
        </h1>

        <p className="text-muted-foreground text-lg">
          Curadoria do iniciante ao veterano: por onde começar, o que ler depois e como escolher seu próximo vício.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            12 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            14 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Canto de leitura com pilha de mangás representando guia de leitura"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Mangás</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Com milhares de títulos disponíveis, entrar no mundo do mangá pode ser intimidador. Este guia organiza recomendações
          por perfil: iniciante, intermediário e veterano.
        </p>

        <h2>Entendendo categorias (além de “gêneros”)</h2>
        <p>
          Muitas classificações são por público-alvo editorial (shonen, shojo, seinen, josei). Isso não limita quem pode
          gostar — mas ajuda a achar o tom certo para você.
        </p>

        <h2>Para iniciantes: por onde começar</h2>
        <p>
          A entrada mais fácil é pelo que você já ama no anime. Quer algo completo e autocontido? Prefira séries com poucos
          volumes ou histórias fechadas.
        </p>

        <h2>Intermediário: expandindo horizontes</h2>
        <p>
          Depois de algumas séries, explore estilos e temas: histórias mais maduras, experimentais ou com foco em arte e ritmo.
        </p>

        <h2>Veteranos: tesouros escondidos</h2>
        <p>
          Obras menos mainstream costumam ter propostas mais ousadas e densas — ótimas para quem já leu “o básico” e quer algo
          que te tire da zona de conforto.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Como escolher sua próxima leitura</h3>
          <ul className="mb-0">
            <li>
              <strong>Tempo:</strong> quer algo curto ou longo?
            </li>
            <li>
              <strong>Tom:</strong> leve, épico, psicológico, romântico?
            </li>
            <li>
              <strong>Status:</strong> completo, em andamento ou hiatus?
            </li>
            <li>
              <strong>Disponibilidade:</strong> físico, digital, oficial.
            </li>
          </ul>
        </div>

        <h2>Conclusão</h2>
        <p>
          2026 está ótimo para leitores: mais títulos, mais acesso e mais diversidade. O importante é encontrar a obra que
          conversa com você agora.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default MelhoresMangas2026;
