import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Gamepad2, Star, Cpu } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/dragon-age-veilguard-review-2026.webp";

const DragonAgeVeilguard2026 = () => {
  useEffect(() => {
    trackArticleRead("dragon-age-veilguard-review-2026", "Dragon Age: The Veilguard — A BioWare Voltou? Review Completo 2026", "geek");
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
        Dragon Age: The Veilguard — A BioWare Voltou? Review Completo 2026
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={heroImg} alt="Dragon Age: The Veilguard — review 2026" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Dez anos após Dragon Age: Inquisition, a BioWare lançou <strong>Dragon Age: The Veilguard</strong> em outubro de 2024. O jogo chegou depois de um desenvolvimento turbulento de quase uma década, múltiplas mudanças de direção criativa e a saída de veteranos importantes do estúdio. O resultado foi um jogo que dividiu a comunidade — e este é um balanço honesto passados meses do lançamento.
      </p>

      <div className="not-prose my-8 p-5 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-purple-400" />Ficha Técnica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            ["Desenvolvedor", "BioWare"],
            ["Publicador", "EA"],
            ["Lançamento", "31/10/2024"],
            ["Gênero", "RPG de Ação"],
            ["Plataformas", "PC, PS5, Xbox Series X|S"],
            ["Preço 2026", "~R$ 150–200 (Steam/EA App)"],
          ].map(([k, v]) => (
            <div key={k}><div className="text-xs text-muted-foreground">{k}</div><div className="font-semibold">{v}</div></div>
          ))}
        </div>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Star className="h-7 w-7 text-purple-400" />O Que Funcionou
      </h2>
      <p>The Veilguard foi bem recebido pela crítica especializada — Metacritic PC: 83, PS5: 82 — com elogios específicos ao combate e ao design visual. A BioWare entregou um sistema de combate em tempo real fluido, com habilidades especializáveis e cooperação com os companheiros de forma mais dinâmica do que em Inquisition.</p>
      <p>Os companheiros — o coração emocional de qualquer RPG da BioWare — foram descritos como bem escritos individualmente, com arcos pessoais que funcionam. Bellara, Harding e Neve foram os mais elogiados pelos jogadores.</p>
      <p>Visualmente, The Veilguard é deslumbrante. Os ambientes de Thedas são os mais belos já renderizados na franquia, com iluminação de alto nível e design de personagens detalhado.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">O Que Desapontou</h2>
      <p>A comunidade de fãs de longa data da franquia teve críticas mais duras. Os principais pontos:</p>
      <ul>
        <li><strong>Profundidade de RPG reduzida:</strong> em comparação com Origins (2009) e mesmo Inquisition, as escolhas têm menos peso. O jogo é mais linear do que os anteriores.</li>
        <li><strong>Importação de saves anterior não disponível:</strong> diferente de Dragon Age Keep (que permitia definir o estado do mundo anterior ao jogar Inquisition), Veilguard não incorporou decisões dos jogos anteriores de forma significativa.</li>
        <li><strong>Tom inconsistente:</strong> alguns críticos notaram que o jogo oscilava entre drama sério e leveza casual de forma que quebrava a imersão em momentos-chave.</li>
        <li><strong>Loghain e a ausência de peso narrativo:</strong> fãs de Origins sentiram que o jogo não honrou adequadamente a herança narrativa da franquia.</li>
      </ul>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Cpu className="h-7 w-7 text-purple-400" />Performance e PC
      </h2>
      <p>The Veilguard foi elogiado pelo estado técnico no lançamento — raro para um AAA em 2024. O jogo rodava bem na maioria dos PCs com configuração média, sem os problemas de launch que afetaram jogos como The Last of Us Parte I no PC.</p>
      <div className="not-prose my-4 grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-bold mb-3">Mínimo</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: RX 5700 / RTX 2070</li>
            <li>⚡ CPU: Ryzen 5 3600 / Core i7-8700</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD: 100 GB</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-purple-500/20 p-5">
          <h3 className="font-bold mb-3 text-purple-400">Recomendado</h3>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>🖥️ GPU: RX 6800 XT / RTX 3080</li>
            <li>⚡ CPU: Ryzen 7 5800X</li>
            <li>💾 RAM: 16 GB</li>
            <li>💿 SSD NVMe: 100 GB</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Vale a Pena em 2026?</h2>
      <p>Dragon Age: The Veilguard é um bom jogo de ação-RPG que não é um grande Dragon Age. Se você quer entrar na franquia pela primeira vez, é uma porta de entrada visualmente deslumbrante e acessível. Se você é fã de Origins e Inquisition esperando aquela profundidade narrativa épica, prepare as expectativas.</p>
      <p>Em 2026, o jogo pode ser encontrado por R$ 100–150 em promoções da EA. A esse preço, com 40–60 horas de conteúdo sólido, é uma compra razoável para quem aprecia o gênero.</p>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Qual é seu Dragon Age favorito?</h3>
        <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
      </div>
    </div>
    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "Baldur's Gate 3", href: "/post/baldurs-gate-3-review-2026", desc: "O RPG que definiu a geração — compare com Veilguard" },
          { label: "Ranking dos melhores RPGs de ação", href: "/post/ranking-melhor-assassins-creed-2026" },
        ]}
      />
      <RelatedPosts currentSlug="dragon-age-veilguard-review-2026" />
    <CommentSection postId="dragon-age-veilguard-review-2026" postTitle="Dragon Age: The Veilguard — Review 2026" />
  </article>
);
};

export default DragonAgeVeilguard2026;
