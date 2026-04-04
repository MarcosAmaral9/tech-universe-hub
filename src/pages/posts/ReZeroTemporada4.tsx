import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, BookOpen, Users, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/rezero-temporada-4-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const ReZeroTemporada4 = () => {
  useEffect(() => {
    trackArticleRead("rezero-temporada-4-guia-2026", "Re:ZERO Temporada 4: Tudo Sobre a Nova Temporada na Crunchyroll", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">Anime · Isekai</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Re:ZERO Temporada 4: Tudo Sobre a Nova Temporada que Estreia em Abril na Crunchyroll
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Re:ZERO Temporada 4" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A espera acabou. Re:ZERO — Starting Life in Another World retorna com sua quarta temporada em 8 de abril de 2026 na Crunchyroll. Subaru Natsuki enfrenta o arco mais sombrio e emocionalmente devastador da série. Aqui está tudo que você precisa saber antes de assistir.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Data de Estreia e Formato
        </h2>
        <p>
          A <strong>Temporada 4</strong> de Re:ZERO estreia em <strong>8 de abril de 2026</strong> na Crunchyroll com simulcast global. O estúdio White Fox retorna na produção, mantendo a equipe criativa que estabeleceu a identidade visual da série desde 2016.
        </p>
        <p>
          A temporada adaptará o <strong>Arco 6 da light novel</strong> de Tappei Nagatsuki — o arco da Torre de Plêiades (Pleiades Watchtower). Com estimativa de 25 episódios divididos em duas cours, o arco é considerado pelos leitores da novel como o mais intenso da série.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">08/04</p>
            <p className="text-sm text-muted-foreground mt-1">Data de estreia</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">25 eps</p>
            <p className="text-sm text-muted-foreground mt-1">Estimativa (2 cours)</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">Arco 6</p>
            <p className="text-sm text-muted-foreground mt-1">Torre de Plêiades</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          O que Esperar do Arco 6: Torre de Plêiades
        </h2>
        <p>
          <strong>Atenção: spoilers leves da premissa do arco, sem revelações de plot twists.</strong>
        </p>
        <p>
          O Arco 6 leva Subaru, Emilia e o grupo até a <strong>Torre de Plêiades</strong>, uma estrutura misteriosa localizada nas Areias de Augria, no extremo sul de Lugunica. A missão: encontrar uma forma de curar Rem, que permanece em sono profundo desde o final do Arco 3.
        </p>
        <p>
          O arco é famoso entre os leitores por <strong>desconstruir completamente o protagonista</strong>. Subaru enfrenta desafios que vão além de morte e sofrimento físico — sua própria identidade é posta à prova de formas que nunca vimos na série. Os fãs descrevem o Arco 6 como "o arco que faz você questionar tudo que achava saber sobre Re:ZERO".
        </p>
        <p>
          A Torre é habitada por guardiões que testam os visitantes em três andares, cada um representando um aspecto diferente: <strong>memória, coragem e sabedoria</strong>. Os desafios de cada andar estão diretamente conectados aos traumas e limitações de cada personagem do grupo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          Novos Personagens Confirmados
        </h2>
        <p>
          O elenco da temporada 4 traz novos nomes ao cast de voz:
        </p>
        <ul>
          <li><strong>Shaula</strong> — a guardiã da Torre de Plêiades, uma personagem excêntrica e enérgica que esconde segredos profundos sobre a história do mundo de Re:ZERO</li>
          <li><strong>Reid Astrea</strong> — o lendário Primeiro Espada Santo, ancestral de Reinhard, que aparece de forma inesperada na Torre</li>
          <li><strong>Meili Portroute</strong> — a jovem domadora de monstros retorna com um papel expandido e desenvolvimento significativo</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Por que Re:ZERO Continua Relevante em 2026
        </h2>
        <p>
          Em uma era dominada por isekai genéricos de power fantasy, Re:ZERO se mantém como a antítese do gênero. Subaru não é overpowered — é um adolescente comum que sofre, falha e precisa aprender com cada morte. O "Return by Death" não é um power-up; é uma maldição que causa trauma cumulativo real.
        </p>
        <p>
          A série de Tappei Nagatsuki é uma das light novels mais vendidas no Japão, com mais de <strong>13 milhões de cópias</strong>. A terceira temporada (2024) revitalizou o interesse global, e a quarta chega com expectativas altíssimas.
        </p>
        <p>
          Para quem quer se preparar, a recomendação é reassistir pelo menos os últimos 5 episódios da Temporada 3, que estabelecem a transição para o Arco 6 e apresentam elementos cruciais que terão payoff na Temporada 4.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Recapitulação Rápida: Onde Paramos</h2>
        <p>
          A Temporada 3 adaptou o Arco 5 (A Star That Remains), focado no ataque à cidade de Priestella por um grupo de Arcebispos do Culto da Bruxa. O arco trouxe batalhas épicas, revelações sobre os Pecados Capitais e um dos confrontos mais emocionantes entre Subaru e os vilões da série.
        </p>
        <p>
          No final da T3, o grupo se reorganiza após as perdas e decide que a próxima etapa é ir à Torre de Plêiades — tanto para curar Rem quanto para buscar respostas sobre o Culto da Bruxa e as Autoridades.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual seu arco favorito de Re:ZERO?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 💙👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="rezero-temporada-4-guia-2026" />
      <CommentSection postId="rezero-temporada-4-guia-2026" postTitle="Re:ZERO Temporada 4: Guia Completo" />
    </article>
  );
};

export default ReZeroTemporada4;
