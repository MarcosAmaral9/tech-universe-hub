import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/otaku-jogos-anime-2026.webp";

const MelhoresJogosAnime2026 = () => {
  const slug = "melhores-jogos-anime-2026";

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
          Os Melhores Jogos de Anime de 2026: Do RPG ao Fighting Game
        </h1>

        <p className="text-muted-foreground text-lg">
          Cel-shading, cena competitiva, gachas narrativos e J-RPG: o que vale seu tempo (e seu dinheiro) em 2026.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            08 de Março, 2026
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
          alt="Controle de videogame com luzes neon representando jogos de anime"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">
          Palavra-chave: <strong>Jogos de Anime</strong>
        </p>

        <p className="lead text-xl text-muted-foreground">
          Em 2026, a linha entre “jogo de anime” e “jogo mainstream” ficou cada vez menor. Ainda assim, quem busca a
          experiência otaku encontra um catálogo enorme — do competitivo ao narrativo.
        </p>

        <h2>O estado do mercado</h2>
        <p>
          Franquias populares consolidaram fórmulas: gráficos cel-shading, trilha semelhante ao anime e sistemas acessíveis
          com profundidade. Ao mesmo tempo, gachas e liveservices dominam o faturamento — o que exige atenção a monetização.
        </p>

        <h2>Fighting games: a cena competitiva</h2>
        <p>
          O gênero continua forte porque traduz bem a fantasia de poder e as lutas icônicas. O ponto-chave é o balanceamento
          e o suporte pós-lançamento.
        </p>

        <h2>RPGs e aventura: mergulho total</h2>
        <p>
          Se você quer worldbuilding, sistemas de progressão e história longa, J-RPGs e action RPGs são o caminho. Avalie
          sempre: duração, repetição e qualidade do endgame.
        </p>

        <div className="my-8 p-6 bg-secondary rounded-xl border border-border">
          <h3 className="mt-0">Como escolher seu próximo jogo</h3>
          <ul className="mb-0">
            <li>
              <strong>Você quer competição?</strong> vá de fighting.
            </li>
            <li>
              <strong>Você quer história?</strong> priorize RPG/visual novel.
            </li>
            <li>
              <strong>Você quer grind?</strong> gacha pode funcionar, mas defina limite de gasto.
            </li>
            <li>
              <strong>Você quer co-op?</strong> procure foco em multiplayer e comunidade ativa.
            </li>
          </ul>
        </div>

        <h2>Dicas para montar sua biblioteca (gastando menos)</h2>
        <p>
          Promoções em bundles, assinaturas como PS Plus/Game Pass e esperar patches iniciais podem cortar o preço e evitar
          frustrações de lançamento.
        </p>

        <h2>Conclusão</h2>
        <p>
          O melhor jogo de anime de 2026 é o que encaixa no seu estilo: competitivo, narrativo ou colecionável.
        </p>
      </div>

      <RelatedPosts currentSlug={slug} />
      <CommentSection postId={slug} />
    </article>
  );
};

export default MelhoresJogosAnime2026;
