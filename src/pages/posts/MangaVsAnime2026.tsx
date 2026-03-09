import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, BookOpen, Tv, ThumbsUp, ThumbsDown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/manga-vs-anime-2026.webp";

const MangaVsAnime2026 = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link to="/otaku" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Mangá vs. Anime: Quando a Adaptação Supera o Original (e Quando Decepciona)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />06 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={heroImg} alt="Mangá vs Anime 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Toda vez que um mangá amado ganha uma adaptação em anime, a internet entra em colapso. Mas o que realmente define uma boa adaptação? Quando o anime supera as páginas em preto e branco — e quando entrega uma decepção coletiva?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          O Desafio de Adaptar Mangá
        </h2>
        <p>
          Adaptar mangá para anime vai além de "desenhar e colorir as páginas". O diretor precisa tomar decisões que o mangaká nunca enfrentou: quanto tempo dedicar a cada cena? Que música colocar naquele momento silencioso? Como mostrar a passagem do tempo quando não há caixas de narração?
        </p>
        <p>
          <strong>Fullmetal Alchemist Brotherhood</strong> é frequentemente citado como a adaptação perfeita porque o diretor Yasuhiro Irie entendeu o tom emocional de cada capítulo e soube usar música, timing e voice acting para amplificá-lo. Já a infame adaptação de <strong>Tokyo Ghoul</strong> a partir da segunda temporada mostrou o que acontece quando essas decisões são delegadas ao segundo plano.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ThumbsUp className="h-7 w-7 text-otaku" />
          Casos em que o Anime Supera o Mangá
        </h2>
        <p>
          Sim, isso acontece. <strong>Cowboy Bebop</strong> não tem mangá original — mas o anime original de Shinichiro Watanabe se tornou um dos mais influentes da história. <strong>Demon Slayer</strong> é outro exemplo: a arte de Koyoharu Gotouge é expressiva, mas as sequências de luta ganham uma dimensão completamente nova quando o Ufotable adiciona seus efeitos visuais característicos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ThumbsDown className="h-7 w-7 text-otaku" />
          Quando a Adaptação Decepciona
        </h2>
        <p>
          <strong>Tokyo Ghoul :re</strong> é o exemplo clássico de adaptação que destruiu uma narrativa rica. O mangá original de Sui Ishida é uma obra de arte com camadas de simbolismo. A adaptação tentou comprimir arcos inteiros em poucos episódios, resultando em saltos narrativos confusos.
        </p>
        <p>
          <strong>Berserk 2016/2017</strong> merece menção honrosa pelo uso controverso de CGI em uma obra celebrada justamente pela qualidade artística do mangá de Kentaro Miura.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O que Faz uma Adaptação Funcionar
        </h2>
        <p>
          Princípios comuns revelados por diretores: respeito ao tom emocional do original, liberdade para expandir onde necessário, e equipe de animadores apaixonados pelo material.
        </p>
        <p>
          A escolha da trilha sonora é subestimada. <strong>Yoko Kanno</strong> em Cowboy Bebop, <strong>Hiroyuki Sawano</strong> em Attack on Titan, <strong>Yuki Kajiura</strong> em Fate/Zero — esses compositores entenderam a alma de cada obra e criaram músicas que existem em simbiose com as imagens.
        </p>
        <p>
          A melhor abordagem é tratar mangá e anime como obras complementares, não concorrentes. Assista o anime primeiro se quiser a experiência audiovisual completa sem spoilers — depois leia o mangá para aprofundar nos detalhes.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Mangá ou Anime: qual você prefere?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="manga-vs-anime-adaptacao-2026" />
      <CommentSection postId="manga-vs-anime-adaptacao-2026" />
    </article>
  );
};

export default MangaVsAnime2026;
