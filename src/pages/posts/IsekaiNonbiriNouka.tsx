import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Star, Tv, Leaf } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/isekai-nonbiri-nouka.webp";

const IsekaiNonbiriNouka = () => {
  useEffect(() => {
    trackArticleRead("isekai-nonbiri-nouka-farming-life-guia", "Farming Life in Another World: Guia Completo do Anime", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Slice of Life · Fazenda</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Farming Life in Another World (Isekai Nonbiri Nouka): A Vida na Fazenda do Outro Mundo — Guia Completo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Farming Life in Another World — Hiraku e suas companheiras na fazenda" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Isekai Nonbiri Nouka</strong> — <strong>Farming Life in Another World</strong> em inglês — é o isekai para quem prefere a paz de uma horta bem cuidada à adrenalina de dungeons perigosas. Com uma premissa simples e reconfortante, a série segue Hiraku Machio, um homem que recebe uma segunda chance de vida e decide usá-la cultivando a terra em um mundo de fantasia. A Temporada 1 foi ao ar em 2023 e uma Temporada 2 está confirmada para abril de 2026.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Kinosuke Naito</strong>, com ilustrações de <strong>Yasumo</strong>, e serializada online na plataforma <em>Shōsetsuka ni Narō</em> desde dezembro de 2016. A <strong>Enterbrain</strong> adquiriu a série e publica a light novel desde outubro de 2017 — vinte volumes lançados. O mangá, desenhado por <strong>Yasuyuki Tsurugi</strong>, é serializado na revista <strong>Monthly Dragon Age</strong> (Fujimi Shobo) desde novembro de 2017, com 16 volumes coletados até março de 2026. Um mangá spin-off de quatro painéis, <em>Isekai Nonbiri Nōka no Nichijō</em>, também é publicado no Monthly Dragon Age desde julho de 2022, com sete volumes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Leaf className="h-7 w-7 text-otaku" />
          História: Uma Segunda Chance para Cultivar
        </h2>
        <p>
          <strong>Hiraku Machio</strong> passou os últimos anos de sua vida confinado a um leito de hospital com uma doença terminal, morrendo aos 39 anos. Com pena da vida injusta que levou, um ser divino lhe dá uma segunda chance: ser reencarnado em um mundo de fantasia, com saúde e juventude restauradas. Hiraku tem apenas um pedido simples para sua nova vida — <strong>cultivar a terra</strong>.
        </p>
        <p>
          Atendendo ao desejo, o ser divino presenteia Hiraku com a <strong>"Ferramenta Universal de Fazenda" (All-Purpose Farming Tool)</strong> — um implemento mágico que pode se transformar em qualquer ferramenta agrícola necessária. Hiraku é então transportado para uma floresta aparentemente distante de qualquer civilização.
        </p>
        <p>
          Sozinho no começo, Hiraku começa do zero — desbravando a floresta, preparando o solo e plantando. Com o tempo, seres não-humanos começam a aparecer: <strong>vampiras, elfas, anjas e até dragões</strong> são atraídos pela sua fazenda próspera e pelo ambiente acolhedor que ele cria. Sua propriedade cresce organicamente de uma pequena roça para uma <strong>vila vibrante e diversa</strong>, onde raças que normalmente não convivem encontram harmonia ao redor da agricultura.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Zero-G (2023)
        </h2>
        <p>
          A adaptação anime foi anunciada em março de 2022 e revelada como série de televisão produzida pelo estúdio <strong>Zero-G</strong> e dirigida por <strong>Ryōichi Kuraya</strong>, com roteiros de <strong>Touko Machida</strong>, design de personagens de <strong>Yoshiko Saitō</strong> e música de <strong>Yasuharu Takanashi</strong> (em colaboração com <strong>Johannes Nilsson</strong>). A série foi ao ar de <strong>6 de janeiro a 24 de março de 2023</strong> na AT-X e outras emissoras. A abertura é <strong>"Flower Ring"</strong> pelas cantoras <strong>Shino Shimoji e Aya Suzaki</strong>, e o encerramento é <strong>"Feel the Winds"</strong> pela VTuber <strong>Hizuki Yui</strong>.
        </p>
        <p>
          A Temporada 1 acompanha os primeiros capítulos da história — a chegada de Hiraku ao mundo, o desbravamento da floresta, e os encontros iniciais com seus primeiros companheiros e habitantes da fazenda em crescimento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Confirmada para Abril de 2026
        </h2>
        <p>
          Em agosto de 2025, foi anunciada a produção de uma <strong>segunda temporada</strong>. Em janeiro de 2026, o primeiro vídeo promocional da T2 foi divulgado com novas adições ao elenco, membros de staff atualizados e as músicas temáticas. A Temporada 2 está confirmada para <strong>estrear em abril de 2026</strong>. Além do anime, um <strong>jogo mobile</strong> baseado na série também foi anunciado em agosto de 2025.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Hiraku Machio (牧場主ヒラク)", va:"Atsushi Abe", desc:"Protagonista. Homem de 39 anos que morreu de doença terminal e recebeu uma segunda chance. Gentil, trabalhador e paciente, Hiraku trata cada novo morador da fazenda como parte da família. Sem ambições de poder ou riqueza — quer apenas cultivar a terra e viver em paz com seus entes queridos."},
            {name:"Loo (ルー)", va:"Asami Seto", desc:"Uma vampira de linhagem nobre que se torna uma das primeiras companheiras de Hiraku. Altamente inteligente e versada em magia, ela contribui com seus conhecimentos enquanto se adapta à vida rural."},
            {name:"Tier (ティア)", va:"Azumi Waki", desc:"Uma anja que se junta à fazenda. Representa a convivência harmoniosa entre raças celestiais e o ambiente acolhedor que Hiraku cria."},
            {name:"Elf Village Leader", va:"—", desc:"Liderança das elfas que vizinham a fazenda de Hiraku, representando a relação progressiva entre a fazenda e as comunidades ao redor."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                {p.va !== "—" && <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>}
              </div>
      <AdRectangle className="my-8" />
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Leaf className="h-7 w-7 text-otaku" />
          Onde Assistir
        </h2>
        <p>
          A Temporada 1 está disponível no <strong>Amazon Prime Video</strong>, <strong>HIDIVE</strong>, e <strong>Hulu</strong>. A dublagem em inglês também está disponível. A Temporada 2 está confirmada para abril de 2026 — verifique as plataformas para disponibilidade regional.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Vida de fazenda no isekai — relaxante ou entediante? 🌾</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="isekai-nonbiri-nouka-farming-life-guia" />
      <NewsletterSignup variant="modal" categories={["otaku"]} showAfterMs={60000} />
      <CommentSection postId="isekai-nonbiri-nouka-farming-life-guia" postTitle="Farming Life in Another World — Guia Completo" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default IsekaiNonbiriNouka;
