import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-saude-mental.webp";

const SaudeMentalCulturaOtaku = () => {
  const slug = "saude-mental-cultura-otaku";

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
          Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Ele Isola
        </h1>

        <p className="text-muted-foreground text-lg">
          Uma conversa cuidadosa sobre escapismo, comunidade, sinais de alerta e como manter uma relação saudável com o hobby.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            13 de Março, 2026
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
          alt="Pessoa lendo manga com fones em ambiente calmo, representando bem-estar"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Saúde mental</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Anime pode ser apoio real — e, para algumas pessoas, também pode virar fuga. Essas duas coisas não se contradizem. O
          objetivo aqui é falar com honestidade, sem julgamento.
        </p>

        <h2>Como o anime pode ajudar</h2>
        <p>
          Histórias sobre solidão, luto e superação ajudam a nomear sentimentos e criam sensação de companhia. E a comunidade
          também importa: amizades feitas em eventos e grupos são conexões reais.
        </p>

        <h2>Sinais de alerta: quando o escape vira fuga</h2>
        <ul>
          <li>Perder rotinas básicas e responsabilidades com frequência.</li>
          <li>Isolamento social crescente (sem desejo de reconexão).</li>
          <li>Consumir para anestesiar emoções, não para descansar.</li>
          <li>Trocar totalmente relações humanas por relações fictícias.</li>
        </ul>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Se você estiver em crise</h3>
          <p className="mb-0 text-muted-foreground">
            Buscar ajuda é um ato de coragem. No Brasil, o CVV atende 24h pelo 188.
          </p>
        </div>

        <h2>Consumo crítico e obras problemáticas</h2>
        <p>
          Parte de uma relação saudável é conseguir criticar o que você gosta. O problema não é “gostar de anime”, mas como o
          conteúdo é usado e interpretado — especialmente por pessoas em formação.
        </p>

        <h2>Construindo uma relação saudável com o hobby</h2>
        <p>
          Defina horários, mantenha ao menos uma atividade presencial, e use o hobby como apoio — não substituição do mundo.
        </p>

        <h2>Conclusão</h2>
        <p>
          A cultura otaku, no seu melhor, é criatividade e comunidade. Cuidar de você é parte de continuar curtindo por muitos
          anos.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default SaudeMentalCulturaOtaku;
