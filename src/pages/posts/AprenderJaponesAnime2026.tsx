import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Languages, BookOpen, Headphones, ListChecks } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/aprender-japones-anime-2026.webp";

const AprenderJaponesAnime2026 = () => {

  useEffect(() => {
    trackArticleRead("aprender-japones-anime-2026", "Como Aprender Japonês Assistindo Anime em 2026", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation categoryPath="/otaku" categoryLabel="Otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Como Aprender Japonês Assistindo Anime: O Método que Funciona em 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />09 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Aprender Japonês com Anime 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Aprender japonês assistindo anime não é mito — é um método que funciona, desde que você entenda suas limitações e saiba como aplicá-lo corretamente. Com ferramentas de IA e apps adaptativos de 2026, nunca foi tão fácil usar o que você ama para se tornar fluente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Languages className="h-7 w-7 text-otaku" />
          O Que o Anime Pode (e Não Pode) Ensinar
        </h2>
        <p>
          O anime é excelente para desenvolver <strong>compreensão auditiva</strong>, ampliar vocabulário em contexto e criar associações emocionais com o idioma. Quando você ouve "nakama" no One Piece durante um momento épico, a palavra se grava na memória de forma diferente.
        </p>
        <p>
          O que o anime <strong>não ensina bem</strong>: keigo (linguagem formal), escrita (kanji, hiragana, katakana) e gramática estrutural. Use o anime como suplemento poderoso, não como substituto para estudo sistemático.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Headphones className="h-7 w-7 text-otaku" />
          O Método AJATT e Imersão Total
        </h2>
        <p>
          <strong>AJATT</strong> (All Japanese All The Time) usa a imersão total como estratégia principal: troca o idioma do celular, assiste anime somente em japonês (sem legendas), lê mangá no original. A versão moderna, <strong>Refold</strong>, começa com imersão compreensível e usa SRS com Anki para consolidar vocabulário.
        </p>
        <p>
          Resultado típico: iniciantes chegam a leitura básica de manga em <strong>1-2 anos</strong> de prática consistente diária de 1-2 horas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Ferramentas Essenciais de 2026
        </h2>
        <p>
          <strong>Anki</strong> continua sendo o rei dos flashcards SRS. <strong>Japanese: The Game</strong> gamifica o aprendizado de kanji de forma eficaz. <strong>Yomitan</strong> (extensão de browser) permite tradução instantânea e se integra com o Anki automaticamente.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Animes Recomendados por Nível</h3>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-green-500">🟢 Iniciante</h4>
            <p className="text-sm text-muted-foreground">Shirokuma Cafe, Doraemon, Yotsubato! (mangá)</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30">
            <h4 className="font-bold mb-2 text-yellow-500">🟡 Intermediário</h4>
            <p className="text-sm text-muted-foreground">Toradora, Clannad, Oregairu</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/60">
            <h4 className="font-bold mb-2 text-red-500">🔴 Avançado</h4>
            <p className="text-sm text-muted-foreground">Monogatari Series — o santo graal dos aprendizes</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ListChecks className="h-7 w-7 text-otaku" />
          Montando Sua Rotina Semanal
        </h2>
        <p>
          Uma rotina eficaz combina: <strong>20-30 min</strong> diários de Anki, <strong>1-2 episódios</strong> com legendas em japonês, <strong>15-20 min</strong> de leitura de mangá, e sessões semanais de output (falar ou escrever em japonês).
        </p>
        <p>
          A constância supera a intensidade. <strong>30 minutos todos os dias é infinitamente melhor que 5 horas no fim de semana.</strong> Use o anime como recompensa ao final das sessões de Anki.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Já tentou aprender japonês com anime?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="aprender-japones-anime-2026" />
      <CommentSection postId="aprender-japones-anime-2026" postTitle="Como Aprender Japonês Assistindo Anime em 2026" />
    </article>
  );
};

export default AprenderJaponesAnime2026;
