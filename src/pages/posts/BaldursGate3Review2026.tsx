import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Gamepad2, Star, Cpu, Monitor } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/baldurs-gate-3-review-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const BaldursGate3Review2026 = () => {
  useEffect(() => {
    trackArticleRead("baldurs-gate-3-review-2026", "Baldur\'s Gate 3 em 2026: Ainda o Melhor RPG da Geração?", "geek");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation category="geek" />
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="geek" size="lg" />
        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Games · RPG</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Baldur's Gate 3 em 2026: Ainda o Melhor RPG da Geração?
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Baldur's Gate 3 — review 2026" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Lançado pela Larian Studios em agosto de 2023, <strong>Baldur's Gate 3</strong> foi o jogo que redefiniu o que um RPG pode ser. Em 2026, com mais de 20 milhões de cópias vendidas e ainda na lista dos mais jogados do Steam, a pergunta é legítima: ele ainda vale a pena comprar?
      </p>

      <div className="not-prose my-8 p-5 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-purple-400" />Ficha Técnica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            ["Desenvolvedor", "Larian Studios"],
            ["Lançamento", "03/08/2023 (PC) · 06/09/2023 (PS5)"],
            ["Gênero", "RPG Tático Turn-Based"],
            ["Baseado em", "D&D 5ª Edição"],
            ["Duração", "100–200h (main + side)"],
            ["Preço 2026", "~R$ 200–250 (Steam, com desconto frequente)"],
          ].map(([k, v]) => (
            <div key={k}><div className="text-xs text-muted-foreground">{k}</div><div className="font-semibold">{v}</div></div>
          ))}
        </div>
      </div>

      <AdLeaderboard className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Star className="h-7 w-7 text-purple-400" />Por que BG3 ainda é excepcional
      </h2>
      <p>Baldur's Gate 3 ganhou o GOTY (Game of the Year) no The Game Awards 2023 com votação quase unânime da crítica — Metacritic PC: 96, PS5: 97. Esses números se mantêm relevantes em 2026 por uma razão simples: a Larian continuou atualizando o jogo.</p>
      <p>Em 2024 e 2025, a Larian lançou atualizações gratuitas que adicionaram o modo fotografia, novos finais alternativos, melhorias de performance e suporte a controller aprimorado. Em março de 2025, o Patch 8 adicionou subclasses novas para todas as 12 classes originais — conteúdo gratuito que seria DLC pago em qualquer outra empresa.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">O Que Torna BG3 Diferente</h2>
      <ul>
        <li><strong>Reatividade sem precedentes:</strong> o mundo responde a quase toda ação do jogador. NPCs lembram do que você fez. Decisões têm peso real.</li>
        <li><strong>Co-op para 4 jogadores:</strong> a campanha inteira pode ser jogada em co-op local (split-screen no PS5) ou online. Funciona surpreendentemente bem.</li>
        <li><strong>Combate tático profundo:</strong> baseado em D&D 5e, com posicionamento, vantagem/desvantagem, magias com interações ambientais (fogo + óleo, por exemplo).</li>
        <li><strong>Escrita de personagens:</strong> os companheiros Shadowheart, Astarion, Lae'zel e os demais foram eleitos entre os melhores personagens da história dos games por diversas publicações.</li>
        <li><strong>Liberdade absurda:</strong> há múltiplas soluções para quase todos os problemas — combate, furtividade, diplomacia, ou jogar tudo pro alto.</li>
      </ul>

      <AdRectangle className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Cpu className="h-7 w-7 text-purple-400" />Requisitos de PC em 2026
      </h2>
      <div className="not-prose my-4 grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-bold mb-3">Mínimo</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: GTX 970 / RX 480 (8GB VRAM)</li>
            <li>⚡ CPU: Core i7-8700K / Ryzen 5 3600</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD: 150 GB</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-purple-500/20 p-5">
          <h3 className="font-bold mb-3 text-purple-400">Recomendado</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: RTX 2060 Super / RX 5700 XT</li>
            <li>⚡ CPU: Ryzen 5 5600X</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD NVMe: 150 GB</li>
          </ul>
        </div>
      </div>
      <p>O jogo roda bem em hardware de meados de 2020. Com uma RTX 3070 ou equivalente, é possível jogar em 1440p Ultra com framerate estável acima de 60fps.</p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
        <Monitor className="h-7 w-7 text-purple-400" />Vale Comprar em 2026?
      </h2>
      <p>Baldur's Gate 3 entra em promoção com frequência na Steam, Epic e PS Store — é comum ver descontos de 30–40% em períodos de sale. Ao preço completo (~R$ 250), ainda é um dos melhores custo-benefícios em games: são facilmente 100 horas de conteúdo único na primeira gameplay.</p>
      <p>Se você gosta de RPGs com profundidade — seja o estilo Divinity Original Sin 2, Dragon Age Origins ou The Witcher 3 — Baldur's Gate 3 provavelmente é o melhor jogo que você vai jogar esta geração.</p>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Qual foi sua build favorita em BG3?</h3>
        <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
      </div>
    </div>
    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "Dragon Age: The Veilguard", href: "/post/dragon-age-veilguard-review-2026", desc: "O outro grande RPG do momento" },
          { label: "AC Valhalla", href: "/post/ac-valhalla-jornada-epica-eivor", desc: "Outro RPG de mundo aberto com tema nórdico" },
          { label: "Todos os artigos Geek", href: "/geek" },
        ]}
      />
      <RelatedPosts currentSlug="baldurs-gate-3-review-2026" />
    <CommentSection postId="baldurs-gate-3-review-2026" postTitle="Baldur's Gate 3 em 2026" />
  </article>
);
};

export default BaldursGate3Review2026;
