import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Target, Sword, Shield, Flame, Cpu, Gamepad2, Mountain } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";

const CrimsonDesertCombate = () => {

  useEffect(() => {
    trackArticleRead("crimson-desert-combate-blackspace-engine", "Crimson Desert: Como o Sistema de Combate e a BlackSpace Engine Mudam Tudo", "geek");
  }, []);
  const goBack = useSmartBack("/geek/crimson-desert");
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Crimson Desert
      </button>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            Análise
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Como o Sistema de Combate e a BlackSpace Engine Mudam Tudo
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Uma análise aprofundada das mecânicas de combate, chefes épicos, montarias e a tecnologia por trás do visual impressionante
        </p>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            16 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            9 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonCombateImg}
          alt="Crimson Desert - Sistema de Combate BlackSpace Engine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Desde os primeiros trailers, Crimson Desert chamou atenção não só pelo visual estonteante, mas pela promessa de um combate que vai além do RPG convencional. Com a chegada do lançamento em 19 de março de 2026, vamos analisar em detalhe o que faz o sistema de batalha da Pearl Abyss ser um dos mais discutidos da geração.
        </p>

        {/* Combat Pillars */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-400" />
            Os Três Pilares do Combate
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Habilidade</strong>
              <p className="text-muted-foreground mb-0 mt-1">Execução precisa de combos e sequências de ataque que recompensam a maestria.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Timing</strong>
              <p className="text-muted-foreground mb-0 mt-1">Janelas de ataque, esquivas perfeitas e contra-ataques com frames precisos.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Posição</strong>
              <p className="text-muted-foreground mb-0 mt-1">Usar o ambiente, flanquear inimigos e controlar o espaço do campo de batalha.</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          O Núcleo do Combate
        </h2>

        <p>
          O combate de Crimson Desert foi construído para exigir habilidade real. Diferente de RPGs que permitem apertar botões repetidamente com sucesso garantido, aqui cada encontro exige que o jogador leia os padrões inimigos, identifique janelas de ataque e tome decisões táticas em frações de segundo.
        </p>
        <p>
          Kliff possui acesso a um sistema de combos extenso que combina ataques rápidos, ataques pesados, defesas ativas e contra-ataques. As sequências podem ser adaptadas dependendo da arma equipada, e a progressão de personagem permite especializar o estilo de luta — seja um guerreiro brutal corpo a corpo, ou um lutador ágil com movimentos evasivos. A Pearl Abyss confirmou habilidades especiais ligadas ao Abismo, mas detalhes completos serão revelados no jogo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-orange-400" />
          Ataques Elementais e Personalização de Armas
        </h2>

        <p>
          Uma das mecânicas mais espetaculares é o sistema de ataques elementais. Armas podem ser imbuídas com diferentes elementos — fogo, gelo, relâmpago e mais — alterando não apenas o dano causado, mas também os efeitos visuais e as reações dos inimigos.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-5 w-5 text-orange-400" />
              <h4 className="font-bold text-orange-400 mb-0">Fogo</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Causa dano contínuo (DoT) e pode tornar inimigos mais agressivos e imprevisíveis — risco e recompensa.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Mountain className="h-5 w-5 text-blue-400" />
              <h4 className="font-bold text-blue-400 mb-0">Gelo</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              Congela inimigos temporariamente, tornando-os vulneráveis a ataques físicos devastadores.
            </p>
          </div>
        </div>

        <p>
          O sistema de progressão profundo permite personalizar cada aspecto do conjunto de habilidades de Kliff, escolhendo entre diferentes ramos de evolução que afetam tanto a eficiência em combate quanto a interação com o mundo aberto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-red-400" />
          Chefes Colossais: Os Momentos Mais Épicos do Jogo
        </h2>

        <p>
          As batalhas contra chefes são, segundo todos os previews, o ápice da experiência. A Pearl Abyss mostrou confrontos de escala monumental — dragões mecânicos que exigem estratégias complexas, cavaleiros amaldiçoados com padrões de ataque elaborados, e a bruxa Maria, revelada no The Game Awards 2024.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Gamepad2 className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Identidade Única</h4>
            <p className="text-sm text-muted-foreground">
              Cada boss possui visual e mecânica próprios, exigindo adaptação total do loadout e estratégia.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Fases Múltiplas</h4>
            <p className="text-sm text-muted-foreground">
              Dinâmica da batalha muda completamente à medida que a saúde do chefe diminui.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Vulnerabilidades</h4>
            <p className="text-sm text-muted-foreground">
              Alguns chefes só podem ser danificados por determinados elementos ou condições especiais.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Montarias: Cavalos, Dragões e Muito Mais
        </h2>

        <p>
          A exploração de Pywel é enriquecida por um sistema de montarias diversificado. Cavalos são o meio de transporte principal e possuem mecânicas de combate específicas — Kliff pode atacar, esquivar e usar habilidades especiais enquanto está montado.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          Voar sobre Pywel em um dragão não é apenas uma fantasia estética; é uma mecânica integrada que revela novos pontos de interesse acessíveis apenas por via aérea.
        </blockquote>

        <p>
          Em momentos específicos da narrativa e do mundo aberto, o jogador também terá acesso a dragões e mechas — criaturas e máquinas de guerra que transformam completamente a escala da exploração e do combate.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-red-400" />
          A BlackSpace Engine: A Tecnologia por Trás do Visual
        </h2>

        <p>
          A BlackSpace Engine é a evolução direta do motor gráfico usado em Black Desert Online, totalmente reconstruído para lidar com os desafios de um RPG solo de mundo aberto em escala colossal. A engine suporta simulações físicas avançadas, iluminação dinâmica em tempo real, vegetação procedural e sistemas de clima que afetam tanto o visual quanto o gameplay.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Cpu className="h-6 w-6 text-red-400" />
            Capacidades Técnicas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">Console</strong>
              <p className="text-muted-foreground mb-0 mt-1">Ray tracing, altas taxas de frame e tempo de carregamento praticamente nulo no PS5 e Xbox Series X/S.</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-red-400">PC</strong>
              <p className="text-muted-foreground mb-0 mt-1">Tecnologias de upscaling modernas garantem performance excelente mesmo em configurações medianas.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            Crimson Desert não é apenas visualmente impressionante — é um sistema de combate complexo, montarias diversificadas, chefes memoráveis e uma camada estratégica de construção de fortalezas que trabalham juntos para criar uma experiência RPG completa. A BlackSpace Engine garante que tudo isso seja apresentado com uma fidelidade visual que redefine o padrão da geração.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-combate-blackspace-engine" />
      <CommentSection postId="crimson-desert-combate-blackspace-engine" />
    </article>
  );
};

export default CrimsonDesertCombate;
