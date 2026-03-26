import { useState, useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Sword, Wand2, Shield, Zap, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const CrimsonDesertBuilds = () => {
  useEffect(() => {
    trackArticleRead(
      "crimson-desert-builds-guia-2026",
      "Crimson Desert: Progressão de Kliff e Estilos de Jogo",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Sistema de Progressão de Kliff e Estilos de Jogo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonBuildsImg} alt="Crimson Desert builds progressão" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Nota de atualização (19/03/2026):</strong> Crimson Desert
            acabou de ser lançado. As informações sobre progressão e estilos de jogo disponíveis aqui são
            baseadas em previews oficiais, análises de críticos profissionais que jogaram a versão completa
            e notas de patch do lançamento. Guias detalhados de builds serão atualizados conforme a
            comunidade explora o jogo.
          </p>
        </div>

        <p className="lead text-xl text-muted-foreground">
          Em Crimson Desert, você controla <strong>Kliff</strong>, líder dos Greymanes — um grupo de
          mercenários. Ao contrário de RPGs com classes rígidas, Kliff pode usar e desenvolver múltiplos
          tipos de armas, mas o sistema de habilidades recompensa especialização ao longo do jogo.
        </p>

        <AdLeaderboard className="my-8" />

        <h2>Como Funciona a Progressão</h2>
        <p>
          Com base nas análises de críticos que completaram dezenas a centenas de horas, o sistema de
          progressão de Kliff funciona assim:
        </p>
        <ul>
          <li>
            <strong>Armas e estilos:</strong> Kliff tem acesso a diferentes categorias de armas (espadas de
            uma mão, armas de duas mãos, cajados, entre outras). Cada categoria tem um conjunto de
            habilidades desbloqueáveis independente.
          </li>
          <li>
            <strong>Habilidades ativas e passivas:</strong> ao usar uma arma repetidamente e completar
            determinados desafios ou missões, Kliff desbloqueia habilidades que alteram fundamentalmente
            como aquele tipo de arma funciona.
          </li>
          <li>
            <strong>Equipamentos:</strong> armaduras e acessórios adicionam bônus e podem direcionar Kliff
            para estilos mais agressivos, defensivos ou híbridos.
          </li>
          <li>
            <strong>Inventário limitado:</strong> um dos pontos mais criticados — Kliff começa com poucos
            slots de mochila. Ampliar o inventário requer completar missões secundárias específicas ou
            comprar extensões em mercadores.
          </li>
        </ul>

        <h2>Estilos de Jogo Identificados pelos Críticos</h2>
        <p>
          Com base nas análises de lançamento, três abordagens principais emergem naturalmente do sistema:
        </p>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Sword className="h-7 w-7 text-red-400" />,
              title: "Agressivo / DPS",
              color: "border-red-500/30 bg-red-500/5",
              desc: "Foco em armas pesadas de duas mãos e habilidades de alto dano. Alta recompensa contra bosses, mas exige domínio da esquiva para compensar a baixa defesa. Preferido por quem vem de Elden Ring ou Black Myth: Wukong.",
              suitable: "Para: fãs de combate técnico e arriscado",
            },
            {
              icon: <Shield className="h-7 w-7 text-blue-400" />,
              title: "Defensivo / Counter",
              color: "border-blue-500/30 bg-blue-500/5",
              desc: "Combinação de escudo e arma de uma mão com foco em parry e contraataques. Curva de aprendizagem mais suave. Permite errar mais sem ser punido tão duramente. Recomendado para quem está iniciando.",
              suitable: "Para: iniciantes no gênero ou quem prefere ritmo mais pausado",
            },
            {
              icon: <Wand2 className="h-7 w-7 text-purple-400" />,
              title: "Híbrido / Utilidade",
              color: "border-purple-500/30 bg-purple-500/5",
              desc: "Mistura armas corpo a corpo com habilidades de elemento ou utilitárias. Versátil para diferentes tipos de encontros mas exige maior domínio do inventário e do sistema de habilidades para ser eficaz.",
              suitable: "Para: jogadores experientes que querem versatilidade",
            },
          ].map(({ icon, title, color, desc, suitable }) => (
            <div key={title} className={`rounded-xl border p-5 ${color}`}>
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{desc}</p>
              <p className="text-xs text-primary font-medium">{suitable}</p>
            </div>
          ))}
        </div>

        <h2>A Questão da Dificuldade</h2>
        <p>
          Múltiplos críticos mencionaram a dificuldade como ponto de divisão. A TheGamer jogou 150 horas
          descrevendo o jogo como "não feito para o jogador casual" e com uma "curva de grind enorme
          porém insaciável." A IGN mencionou "picos de dificuldade severos" e a necessidade de gerenciar
          as habilidades de Kliff ativamente para progredir.
        </p>
        <p>
          Há opções de acessibilidade que reduzem a dificuldade de combate, mas o jogo não tem um modo
          "fácil" tradicional — o foco é em combate exigente como parte central da experiência.
        </p>

        <h2>Dicas de Progressão Verificadas</h2>
        <ul>
          <li><strong>Expanda o inventário cedo:</strong> priorize as missões secundárias que desbloqueiam slots de mochila — o inventário limitado é o maior fator de frustração relatado.</li>
          <li><strong>Use controle:</strong> a PC Gamer e outros críticos recomendam explicitamente jogar com controle em vez de teclado e mouse no PC.</li>
          <li><strong>Explore fora da missão principal:</strong> a GamesRadar+ e a TheGamer concordam que os melhores momentos do jogo acontecem fora do caminho principal.</li>
          <li><strong>Invista numa especialização:</strong> o sistema recompensa quem aprofunda um estilo de jogo em vez de tentar usar todas as armas igualmente.</li>
        </ul>

      </div>

      <RelatedPosts currentSlug="crimson-desert-builds-guia-2026" />
      <CommentSection
        postId="crimson-desert-builds-guia-2026"
        postTitle="Crimson Desert: Progressão de Kliff e Estilos de Jogo"
      />
    </article>
  );
};

export default CrimsonDesertBuilds;
