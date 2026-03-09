import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-animes-2026.webp";

const AnimesMaisAguardados2026 = () => {
  const slug = "animes-mais-aguardados-2026";

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
          Os 10 Animes Mais Aguardados de 2026: O Que Vai Dominar as Telas Este Ano
        </h1>

        <p className="text-muted-foreground text-lg">
          Do retorno de clássicos às novas apostas dos grandes estúdios — guia completo para não perder nenhum lançamento.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            04 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            10 min de leitura
          </span>
        </div>

        <div className="mt-4">
          <ShareWhatsApp />
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={heroImg}
          alt="Cidade neon à noite simbolizando os animes mais aguardados de 2026"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Animes 2026</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Se você é fã de anime, 2026 promete ser um dos anos mais épicos da história da animação japonesa. Com o crescimento
          global do gênero e estúdios apostando alto, o resultado é uma temporada recheada de continuações gigantes e apostas
          originais.
        </p>

        <h2>Por que 2026 é um ano histórico para o anime</h2>
        <p>
          O mercado global de anime segue em expansão, o que se traduz em orçamentos maiores, colaborações internacionais e
          adaptações aguardadas há anos. Além disso, ferramentas modernas de produção (incluindo automação em etapas técnicas)
          ajudam estúdios menores a entregar qualidade que antes era privilégio dos grandes.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">O que observar nas temporadas</h3>
          <ul className="mb-0">
            <li>
              <strong>Simulcast e janelas de lançamento:</strong> o timing muda tudo para evitar spoilers.
            </li>
            <li>
              <strong>Qualidade de direção:</strong> bons diretores elevam até obras simples.
            </li>
            <li>
              <strong>Estúdio + equipe:</strong> composição, storyboard e animação chave são determinantes.
            </li>
            <li>
              <strong>Trilha sonora e dublagem original:</strong> podem transformar o impacto emocional.
            </li>
          </ul>
        </div>

        <h2>Os títulos que você não pode perder</h2>
        <p>
          Entre os mais aguardados, há sequências de franquias enormes, novas temporadas de obras queridas e produções
          originais com ambição de “anime do ano”. Mais importante do que tentar ver tudo é montar uma lista realista.
        </p>

        <h3>Como acompanhar sem perder nada</h3>
        <p>
          Para organizar sua fila, use listas e alertas em plataformas como MyAnimeList, AniList e Kitsu. Comunidades no
          Discord e no Reddit ajudam a acompanhar discussões sem spoilers — desde que você siga os flairs e regras.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-border">
          <h3 className="mt-0">Estratégia simples (e econômica) de streaming</h3>
          <p className="mb-0 text-muted-foreground">
            Assine serviços principais nos picos de temporada (início de ano e meio do ano) e pause nos meses mais fracos —
            você acompanha os lançamentos sem pagar 12 meses.
          </p>
        </div>

        <h2>Tendências visuais e narrativas de 2026</h2>
        <p>
          Protagonistas mais complexos emocionalmente, arcos de personagens secundários melhor escritos e escolhas visuais mais
          intencionais (paletas limitadas, contraste planejado e direção de arte forte) aparecem com frequência em produções
          que buscam destaque.
        </p>

        <h2>Conclusão: monte sua lista agora</h2>
        <p>
          Com tanto conteúdo, curadoria vira habilidade: escolha 3 a 5 séries por temporada, participe das discussões e,
          principalmente, divirta-se.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default AnimesMaisAguardados2026;
