import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Star, TrendingUp, Sparkles } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/temporada-animes-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const TemporadaAnimesAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("temporada-animes-abril-2026", "Temporada de Animes Abril 2026: Guia Completo dos Melhores Lançamentos", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">Anime · Temporada Spring</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Temporada de Animes Abril 2026: Guia Completo dos Melhores Lançamentos da Spring Season
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Temporada de Animes Abril 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Spring Season 2026 é uma das mais empolgantes dos últimos anos. Com retornos de peso como Re:ZERO T4 e That Time I Got Reincarnated as a Slime T4, além de estreias promissoras, montamos o guia definitivo para você não perder nada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Os 5 Animes Mais Aguardados
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">1. Re:ZERO — Starting Life in Another World T4</h3>
        <p>
          <strong>Estreia:</strong> 8 de abril | <strong>Estúdio:</strong> White Fox | <strong>Onde:</strong> Crunchyroll
        </p>
        <p>
          O retorno mais aguardado da temporada. Subaru e o grupo viajam à Torre de Plêiades no Arco 6 — considerado o mais intenso da light novel. Após o sucesso da T3 em 2024, as expectativas estão altíssimas. A série é conhecida por subverter as convenções do isekai, e o Arco 6 promete levar isso ao extremo.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">2. That Time I Got Reincarnated as a Slime T4</h3>
        <p>
          <strong>Estreia:</strong> abril 2026 | <strong>Estúdio:</strong> 8bit | <strong>Onde:</strong> Crunchyroll
        </p>
        <p>
          Rimuru Tempest retorna com a adaptação do arco do Torneio dos Dez Grandes Santos Demônios. A Federação Jura-Tempest enfrenta ameaças políticas e militares em escala continental. TenSura continua sendo um dos isekai mais populares do mundo, e a T4 chega após o filme Scarlet Bond consolidar a franquia em 2024.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">3. Gals Can't Be Kind to Otaku!?</h3>
        <p>
          <strong>Estreia:</strong> 8 de abril | <strong>Onde:</strong> Crunchyroll
        </p>
        <p>
          Adaptação do mangá de comédia romântica que explora a relação entre uma gal extrovertida e um otaku introvertido. O mangá original de Norishiro-chan e Uozumi Sakana é publicado pela Comic Zenon (Coamix) e acumula milhões de leitores. A premissa parece clichê, mas a execução tem surpreendido pela naturalidade dos diálogos.
        </p>

        <AdLeaderboard className="my-8" />

        <h3 className="text-xl font-bold mt-6 mb-3">4. Haibara's Teenage New Game+</h3>
        <p>
          <strong>Estreia:</strong> abril 2026
        </p>
        <p>
          E se você pudesse reviver a adolescência com todas as suas memórias intactas? Essa é a premissa deste anime baseado na light novel que conquistou o Japão. Haibara, um adulto frustrado, ganha uma segunda chance de viver o ensino médio — mas descobre que mudar o passado traz consequências inesperadas.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">5. Dr. STONE: Science Future (Final Season)</h3>
        <p>
          <strong>Estúdio:</strong> TMS Entertainment | <strong>Onde:</strong> Crunchyroll
        </p>
        <p>
          A conclusão épica da jornada de Senku para reconstruir a civilização. O arco final adapta os últimos capítulos do mangá de Riichiro Inagaki e Boichi, incluindo a corrida espacial e o confronto final com Why-man. Os fãs que acompanham desde 2019 terão finalmente o encerramento que a série merece.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Tabela Completa: Principais Animes da Spring 2026
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3">Anime</th>
                <th className="text-left p-3">Gênero</th>
                <th className="text-left p-3">Tipo</th>
                <th className="text-left p-3">Onde Assistir</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Re:ZERO T4</td><td className="p-3">Isekai / Drama</td><td className="p-3">Continuação</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">TenSura T4</td><td className="p-3">Isekai / Fantasia</td><td className="p-3">Continuação</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Gals Can't Be Kind to Otaku!?</td><td className="p-3">Comédia Romântica</td><td className="p-3">Estreia</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Haibara's Teenage New Game+</td><td className="p-3">Drama / Romance</td><td className="p-3">Estreia</td><td className="p-3">A confirmar</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Dr. STONE: Science Future</td><td className="p-3">Aventura / Sci-fi</td><td className="p-3">Final</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Kaiju No. 8 T2</td><td className="p-3">Ação / Sci-fi</td><td className="p-3">Continuação</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">Fairy Tail: 100 Years Quest T2</td><td className="p-3">Ação / Fantasia</td><td className="p-3">Continuação</td><td className="p-3">Crunchyroll</td></tr>
              <tr className="border-b border-border/50"><td className="p-3 font-medium">The Apothecary Diaries T2</td><td className="p-3">Mistério / Drama</td><td className="p-3">Continuação</td><td className="p-3">Crunchyroll</td></tr>
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          Continuações para Ficar de Olho
        </h2>
        <p>
          <strong>Kaiju No. 8 Temporada 2</strong> retorna após o sucesso estrondoso da primeira temporada. O anime de monstros da Production I.G conquistou audiências globais e a T2 promete escalar o conflito com novos Kaiju e revelações sobre o passado de Kafka Hibeno.
        </p>
        <p>
          <strong>The Apothecary Diaries Temporada 2</strong> (Kusuriya no Hitorigoto) continua a história de Maomao na corte imperial. A primeira temporada foi um dos animes mais bem avaliados de 2024, e a T2 adapta o arco onde Maomao se envolve em intrigas políticas ainda mais perigosas.
        </p>
        <p>
          <strong>Fairy Tail: 100 Years Quest T2</strong> mantém a nostalgia viva para os fãs da franquia, com o grupo de Natsu enfrentando os Deuses Dragão em uma aventura que homenageia os melhores momentos do original.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          Apostas da Temporada: Estreias para Descobrir
        </h2>
        <p>
          Além dos grandes nomes, vale ficar de olho em estreias originais. <strong>Gals Can't Be Kind to Otaku!?</strong> tem potencial para ser a surpresa da temporada no gênero rom-com, e <strong>Haibara's Teenage New Game+</strong> traz uma premissa de "segunda chance" que pode agradar fãs de ReLife e ReLIFE.
        </p>
        <p>
          A Spring 2026 também marca o retorno de produções que estavam em hiato. Com tantas opções, o recomendado é assistir os 3 primeiros episódios de cada série que chamar sua atenção antes de definir sua watchlist definitiva da temporada.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Quais animes da Spring 2026 estão na sua lista?</h3>
          <p className="text-muted-foreground">Compartilha a sua watchlist nos comentários! 🌸👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="temporada-animes-abril-2026" />
      <CommentSection postId="temporada-animes-abril-2026" postTitle="Temporada de Animes Abril 2026: Guia Completo" />
    </article>
  );
};

export default TemporadaAnimesAbril2026;
