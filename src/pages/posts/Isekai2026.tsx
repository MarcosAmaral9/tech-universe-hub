import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, Sparkles, AlertTriangle, Star, TrendingUp } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/isekai-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const Isekai2026 = () => {

  useEffect(() => {
    trackArticleRead("isekai-2026-genero-domina", "Isekai 2026: Por Que o Gênero Mais Criticado do Anime Ainda Domina", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Isekai em 2026: Por Que o Gênero Mais Criticado do Anime Continua Dominando
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />10 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Isekai em 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Protagonista morre atropelado por um caminhão. Acorda em outro mundo. É imediatamente reconhecido como especial. Se você rolou os olhos — provavelmente já assistiu mais de dez isekais. O gênero é simultaneamente o mais ridicularizado e o mais consumido do anime moderno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          O Que Define o Isekai e de Onde Ele Vem
        </h2>
        <p>
          Isekai (異世界, literalmente "mundo diferente") é o gênero onde o protagonista é transportado para outro mundo. O gênero tem raízes antigas: <strong>Alice no País das Maravilhas</strong> e <strong>O Mágico de Oz</strong> são isekais avant la lettre. A explosão aconteceu com <strong>Sword Art Online</strong> em 2012 e se consolidou com Re:Zero, KonoSuba e That Time I Got Reincarnated as a Slime.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-otaku" />
          A Crítica Justa: Problemas Reais do Gênero
        </h2>
        <p>
          A crítica não é sem fundamento. O protagonista "overpowered" (OP) remove a tensão dramática. O harém de personagens femininas sem autonomia é uma crítica legítima. A fórmula "mundo de RPG com status na tela" se repetiu tantas vezes que virou paródia.
        </p>

      <AdInArticle />
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          As Obras que Transcendem o Gênero
        </h2>
        <p>
          <strong>Re:Zero</strong> quebrou o molde ao mostrar que a morte do protagonista tem consequências emocionais devastadoras. Subaru não é OP — ele sofre, falha e carrega traumas reais. A série é um estudo de PTSD embrulhado em fantasia.
        </p>
        <p>
          <strong>Mushoku Tensei</strong> divide opiniões, mas é inegavelmente uma das construções de mundo mais ricas do gênero. <strong>Frieren: Beyond Journey's End</strong> é o isekai invertido: uma elfa que reflete sobre o significado de 1000 anos de vida. Ganhou o Grand Prize no Manga Taisho de 2021.
        </p>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          Por Que o Público Continua Consumindo
        </h2>
        <p>
          O gênero oferece a fantasia de escapismo total: "como seria eu em outro mundo, começando do zero, com todo o conhecimento que tenho". É uma fantasia de recomeço e reconhecimento. No contexto socioeconômico japonês de pressão intensa, essa fantasia ressoa de forma poderosa.
        </p>
        <p>
          O isekai não vai morrer — vai se diversificar. <strong>KonoSuba</strong> e <strong>Cautious Hero</strong> são sátiras que amam o que criticam. Essa auto-consciência aponta para uma evolução criativa genuína.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual seu isekai favorito?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>
      <section className="my-10">
        <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Análise do Marcos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Segundo levantamentos da Anime News Network e MyAnimeList, isekai representa o gênero com mais lançamentos por temporada desde 2018 — em torno de 6-10 títulos isekai por season, equivalente a 15-25% da grade total. A Shōsetsuka ni Narō (plataforma de web novels japonesa) é o principal pipeline.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Lançamentos 2025-2026 confirmados: 'Re:Zero Temporada 3' (White Fox, 2024-2025), 'Mushoku Tensei Temporada 2 Parte 2' (Studio Bind, 2024) e 'That Time I Got Reincarnated as a Slime Temporada 3' (8bit, 2024). A bilheteria do filme 'Sword Art Online Progressive: Aria of a Starless Night' superou US$ 18 milhões globalmente.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Minha análise: o gênero não morre porque entrega três fantasias testadas — escape, progressão clara (números, níveis, classes) e protagonista que finalmente é reconhecido. O que separa um isekai relevante de um esquecível em 2026 é world-building original e estakes emocionais reais (Frieren, Mushoku Tensei, Re:Zero) versus power fantasy preguiçosa.</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold mb-4">Fontes consultadas</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://myanimelist.net/anime/genre/62/Isekai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">MyAnimeList — Top Isekai ↗</a></li>
            <li><a href="https://www.animenewsnetwork.com/search?q=isekai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Anime News Network — Isekai Articles ↗</a></li>
            <li><a href="https://syosetu.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Shōsetsuka ni Narō ↗</a></li>
            <li><a href="https://www.crunchyroll.com/videos/anime/genres/isekai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Crunchyroll — Isekai ↗</a></li>
            <li><a href="https://www.boxofficemojo.com/genre/sg100/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Box Office Mojo — Anime Films ↗</a></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Última verificação dos links: maio de 2026.
          </p>
        </div>
      </section>


      <RelatedPosts currentSlug="isekai-2026-genero-domina" />
      <CommentSection postId="isekai-2026-genero-domina" postTitle="Isekai 2026: Por Que o Gênero Mais Criticado do Anime Ainda Domina" />
    </article>
  );
};

export default Isekai2026;