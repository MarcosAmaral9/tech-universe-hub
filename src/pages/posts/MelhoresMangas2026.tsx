import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, BookOpen, Star, Sparkles, GraduationCap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/melhores-mangas-2026.webp";

const MelhoresMangas2026 = () => {

  useEffect(() => {
    trackArticleRead("melhores-mangas-ler-2026", "Os Melhores Mangás Para Ler em 2026: Guia por Gênero", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os Melhores Mangás Para Ler em 2026: Guia por Gênero e Nível de Experiência
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />12 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Melhores Mangás 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com milhares de títulos disponíveis, entrar no mundo do mangá pode ser intimidador. Por onde começar? O que ler depois de Naruto e Dragon Ball? Este guia foi construído para orientar leitores de todos os perfis.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Entendendo as Categorias de Mangá
        </h2>
        <p>
          <strong>Shonen</strong> (少年) é o mais popular. <strong>Shojo</strong> (少女) inclui obras como Fruits Basket e Nana. <strong>Seinen</strong> (青年) e <strong>Josei</strong> (女性) oferecem narrativas mais maduras: Berserk, Vagabond, Dungeon Meshi. Conhecer essas categorias ajuda a encontrar o conteúdo certo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-otaku" />
          Para Iniciantes: Por Onde Começar
        </h2>
        <p>
          Para uma primeira experiência completa: <strong>Fullmetal Alchemist</strong> (27 volumes, autocontido), <strong>Death Note</strong> (12 volumes, thriller tenso) e <strong>Yotsubato!</strong> (slice-of-life reconfortante). Cada um oferece algo único e acessível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Para Leitores Intermediários
        </h2>
        <p>
          <strong>Vagabond</strong> (Takehiko Inoue) é uma obra de arte — reimaginação de Miyamoto Musashi com arte absolutamente estonteante. <strong>Berserk</strong> de Kentaro Miura é a obra mais densa do dark fantasy. <strong>Vinland Saga</strong> combina história viking com reflexões sobre guerra e redenção. <strong>Chainsaw Man</strong> e <strong>Jujutsu Kaisen</strong> representam o melhor do shonen moderno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          Para Veteranos: Os Tesouros Escondidos
        </h2>
        <p>
          <strong>Punpun</strong> (Inio Asano) é uma exploração devastadoramente honesta de saúde mental. <strong>Homunculus</strong> explora neurociência e percepção de realidade. <strong>Nausicaä</strong> de Hayao Miyazaki vai muito além do filme. <strong>A Silent Voice</strong> é uma das obras mais emotivas sobre bullying e redenção já escritas.
        </p>
        <p>
          Em 2026, <strong>Frieren: Beyond Journey's End</strong> continua sua publicação no Brasil pela Panini. <strong>Blue Period</strong> chegou completo e é uma das obras mais inspiradoras dos últimos anos. Fique de olho nos announcements da Panini, JBC e Newpop!
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual mangá mudou sua vida?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="melhores-mangas-ler-2026" />
      <CommentSection postId="melhores-mangas-ler-2026" postTitle="Os Melhores Mangás Para Ler em 2026: Guia por Gênero" />
    </article>
  );
};

export default MelhoresMangas2026;
