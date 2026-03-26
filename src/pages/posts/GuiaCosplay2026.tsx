import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Scissors, DollarSign, Users, Palette } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/guia-cosplay-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const GuiaCosplay2026 = () => {

  useEffect(() => {
    trackArticleRead("guia-cosplay-2026-iniciantes", "Guia Definitivo para Começar no Cosplay em 2026", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Guia Definitivo para Começar no Cosplay em 2026: Do Zero à Convenção
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />05 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Guia de Cosplay 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O cosplay deixou de ser nicho e virou fenômeno cultural mainstream. Em 2026, o Brasil conta com mais de 200 convenções anuais e o mercado de materiais supera R$ 500 milhões. Se você sempre quis entrar nesse universo, este guia foi feito para você.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Palette className="h-7 w-7 text-otaku" />
          Escolhendo seu Primeiro Personagem
        </h2>
        <p>
          A escolha do personagem é a decisão mais importante — e também a mais pessoal. Esqueça a pressão de fazer o cosplay mais difícil ou o mais popular. Para iniciantes, a regra de ouro é: <strong>escolha alguém que você ama de verdade</strong>, com um visual que seja viável tecnicamente para seu nível atual.
        </p>
        <p>
          Personagens com roupas simples mas icônicas são perfeitos para começar: Naruto (calça laranja + bandana da folha), Luffy de One Piece (chapéu de palha + camisa vermelha) ou personagens de slice-of-life que usam uniformes escolares.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scissors className="h-7 w-7 text-otaku" />
          Materiais Essenciais e Onde Comprar no Brasil
        </h2>
        <p>
          O <strong>EVA (Etileno Acetato de Vinila)</strong> é o material preferido da comunidade cosplay mundial. Leve, barato, fácil de moldar com pistola de calor e colorir com tintas acrílicas — é a base para armaduras, props e adereços.
        </p>
        <p>
          Para roupas, o tecido mais versátil é o <strong>Oxford</strong> (para roupas mais rígidas) e o <strong>Suplex</strong> (para roupas aderentes). Ferramentas indispensáveis: pistola de calor, ferro de solda, pistola de cola quente, lixa d'água e primer acrílico.
        </p>
        <p>
          O <strong>heatforming</strong> é a técnica de moldar o EVA aquecido sobre o próprio corpo ou formas improvisadas. Para detalhes delicados, a técnica de <strong>contact cement</strong> (cola de contato) permite unir peças de EVA com precisão.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-otaku" />
          Orçamentos Realistas para Cada Nível
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🟢 Iniciante</h4>
            <p className="text-2xl font-bold text-otaku">R$ 100-300</p>
            <p className="text-sm text-muted-foreground mt-2">Roupas simples, props básicos em EVA, peruca de entrada.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <h4 className="font-bold mb-2">🟡 Intermediário</h4>
            <p className="text-2xl font-bold text-otaku">R$ 500-1.500</p>
            <p className="text-sm text-muted-foreground mt-2">Tecidos de qualidade, armaduras elaboradas, LED básico.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/60 text-center">
            <h4 className="font-bold mb-2">🔴 Avançado</h4>
            <p className="text-2xl font-bold text-otaku">R$ 2.000+</p>
            <p className="text-sm text-muted-foreground mt-2">Materiais premium, efeitos especiais, competição.</p>
          </div>
        </div>
        <p className="text-sm italic text-muted-foreground">
          💡 Dica: o custo real de um cosplay é sempre 30% maior que a estimativa inicial. Crie um fundo reserva!
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          Sua Primeira Convenção: O Que Esperar
        </h2>
        <p>
          Antes de sair de casa, vista o cosplay completo por pelo menos 2 horas para identificar desconfortos. Leve cola quente em bastão, agulha e linha na cor do figurino, fita dupla-face e um kit básico de primeiros socorros para o cosplay.
        </p>
        <p>
          Nas convenções, a etiqueta é fundamental: sempre peça permissão antes de fotografar alguém. Respeite os espaços de descanso e seja generoso com elogios — a comunidade cosplay é reconhecida por sua positividade. E prepare-se para fazer amigos que vão durar a vida toda.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Já fez seu primeiro cosplay?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="guia-cosplay-2026-iniciantes" />
      <CommentSection postId="guia-cosplay-2026-iniciantes" postTitle="Guia Definitivo para Começar no Cosplay em 2026" />
    </article>
  );
};

export default GuiaCosplay2026;
