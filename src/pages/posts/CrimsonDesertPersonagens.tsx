import { useState, useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Sword, Wand2, Shield, Zap, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertBuilds = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-builds-guia-2026", "Crimson Desert: Progressão de Kliff e Estilos de Jogo", "geek");
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
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026 · Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonBuildsImg} alt="Crimson Desert builds progressão" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="not-prose my-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Atualizado (24/04/2026):</strong> O Patch 1.04.00 (22 de abril) adicionou <strong>modos de dificuldade Easy/Normal/Hard</strong>, novos galhos de árvore utilizáveis por Kliff e Oongka, a arma exclusiva Sword of Starlight para Damiane e mais habilidades via Patch 1.03.00. As informações abaixo refletem o estado atual do jogo.
          </p>
        </div>

        <p className="lead text-xl text-muted-foreground">
          Em Crimson Desert, você controla <strong>Kliff</strong>, membro dos Greymanes — um grupo de
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
            <strong>Aprendizado contextual:</strong> novas habilidades também são aprendidas observando
            inimigos e NPCs executando os movimentos — mecânica única e elogiada pelos críticos.
          </li>
          <li>
            <strong>Equipamentos:</strong> armaduras e acessórios adicionam bônus e podem direcionar Kliff
            para estilos mais agressivos, defensivos ou híbridos.
          </li>
          <li>
            <strong>Inventário:</strong> o Patch 1.04.00 adicionou função Lock para proteger itens,
            novas abas de categorias e itens de armazenamento adicionais (Kuku Cooler), amenizando muito
            as críticas ao sistema de inventário do lançamento.
          </li>
        </ul>

        <h2>Modos de Dificuldade (Patch 1.04.00)</h2>
        <p>
          O Patch 1.04.00 (22 de abril de 2026) adicionou modos de dificuldade — o pedido mais votado da comunidade. Acessíveis em <strong>Configurações &gt; Jogar</strong>:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { modo: "Easy", cor: "border-green-500/30 bg-green-500/5", desc: "Dano recebido reduzido, inimigos com menos HP e agressividade, janelas de parry e esquiva aumentadas. Ideal para focar na exploração e história." },
            { modo: "Normal", cor: "border-blue-500/30 bg-blue-500/5", desc: "Equivale à dificuldade original do lançamento. A experiência padrão da Pearl Abyss para Crimson Desert." },
            { modo: "Hard", cor: "border-red-500/30 bg-red-500/5", desc: "Combate mais intenso, bosses mais agressivos, janelas de punição menores. Para veteranos do gênero que querem mais desafio." },
          ].map(({ modo, cor, desc }) => (
            <div key={modo} className={`rounded-xl border p-4 ${cor}`}>
              <h3 className="font-bold text-geek mb-2">{modo}</h3>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2>Estilos de Jogo Identificados pelos Críticos</h2>
        <p>
          Com base nas análises de lançamento e na experiência acumulada da comunidade, três abordagens principais emergem naturalmente do sistema:
        </p>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Sword className="h-7 w-7 text-red-400" />,
              title: "Agressivo / DPS",
              color: "border-red-500/30 bg-red-500/5",
              desc: "Foco em armas pesadas de duas mãos e habilidades de alto dano. Alta recompensa contra bosses, mas exige domínio da esquiva para compensar a baixa defesa. Preferido por quem vem de Elden Ring ou Black Myth: Wukong. No Hard Mode, exige muito mais precisão.",
              suitable: "Para: fãs de combate técnico e arriscado",
            },
            {
              icon: <Shield className="h-7 w-7 text-blue-400" />,
              title: "Defensivo / Counter",
              color: "border-blue-500/30 bg-blue-500/5",
              desc: "Combinação de escudo e arma de uma mão com foco em parry e contraataques. Curva de aprendizagem mais suave. Recomendado para quem está iniciando. No Easy Mode, as janelas de parry aumentadas tornam esse estilo especialmente acessível.",
              suitable: "Para: iniciantes ou quem prefere ritmo mais pausado",
            },
            {
              icon: <Wand2 className="h-7 w-7 text-purple-400" />,
              title: "Híbrido / Utilidade",
              color: "border-purple-500/30 bg-purple-500/5",
              desc: "Mistura armas corpo a corpo com habilidades de elemento ou utilitárias. Versátil para diferentes tipos de encontros. Com as novas habilidades de Damiane e Oongka (Patch 1.03.00), esse estilo ficou ainda mais viável com os personagens secundários.",
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

        <h2>A Questão da Dificuldade — Antes e Depois dos Patches</h2>
        <p>
          Múltiplos críticos mencionaram a dificuldade como ponto de divisão. A TheGamer jogou 150 horas
          descrevendo o jogo como "não feito para o jogador casual" e com uma "curva de grind enorme".
          A IGN mencionou "picos de dificuldade severos". No lançamento, o jogo não tinha modo fácil.
        </p>
        <p>
          Com o <strong>Patch 1.04.00 (22 de abril de 2026)</strong>, a Pearl Abyss adicionou os modos Easy, Normal e Hard — resolvendo a principal demanda da comunidade. No Easy, o dano recebido é reduzido, os inimigos têm menos HP e agressividade, e as janelas de parry e esquiva são aumentadas. Boss rematches também estão no roadmap de updates futuros.
        </p>

        <h2>Dicas de Progressão Verificadas</h2>
        <ul>
          <li><strong>Use o modo de dificuldade a seu favor:</strong> com Easy, Normal e Hard disponíveis (Patch 1.04.00), escolha o que melhor combina com sua experiência — você pode mudar a qualquer momento em Configurações &gt; Jogar.</li>
          <li><strong>Expanda o inventário cedo:</strong> priorize quests que desbloqueiam slots de mochila. O Patch 1.04.00 também adicionou a função Lock para proteger itens importantes de venda acidental.</li>
          <li><strong>Use controle:</strong> a PC Gamer e outros críticos recomendam explicitamente jogar com controle em vez de teclado e mouse no PC. O Patch 1.03.00 melhorou os controles de Axiom Force no K/M e adicionou presets personalizados no Patch 1.04.00.</li>
          <li><strong>Explore fora da missão principal:</strong> a GamesRadar+ e a TheGamer concordam que os melhores momentos acontecem fora do caminho principal.</li>
          <li><strong>Guarde Artifacts para Damiane e Oongka:</strong> os Artifacts são compartilhados entre os 3 personagens — não gaste tudo em Kliff antes de os outros serem liberados.</li>
          <li><strong>Invista numa especialização:</strong> o sistema recompensa quem aprofunda um estilo em vez de tentar usar todas as armas igualmente.</li>
        </ul>

      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="crimson-desert-builds-guia-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-builds-guia-2026" postTitle="Crimson Desert: Progressão de Kliff e Estilos de Jogo" />
    </article>
  );
};

export default CrimsonDesertBuilds;
