import { useState, useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Sword, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertCombate = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-combate-blackspace-engine", "Crimson Desert: Sistema de Combate e BlackSpace Engine", "geek");
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
          Crimson Desert: Sistema de Combate e BlackSpace Engine — Como Funciona na Prática
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026 · Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonCombateImg} alt="Crimson Desert combate sistema" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O combate de Crimson Desert foi um dos aspectos mais elogiados pelas críticas no lançamento em
          19 de março de 2026. Construído sobre a <strong>BlackSpace Engine</strong> — a engine proprietária
          da Pearl Abyss — o sistema prioriza física em tempo real, peso das ações e bosses que exigem
          leitura de padrões. Após os patches de abril de 2026, vários problemas apontados no lançamento
          — como o lock-on problemático — foram corrigidos, tornando a experiência ainda mais sólida.
        </p>

        <h2>O Sistema de Combate: Peso, Física e Profundidade</h2>
        <p>
          Crimson Desert usa um sistema de combate em terceira pessoa com foco em ações pesadas e consequentes.
          Kliff pode usar múltiplas armas — espadas, alabardas, cajados — e alternar entre elas durante o combate.
          Cada arma tem um conjunto próprio de ataques, habilidades especiais e sinergias com o terreno e os inimigos.
          Com o <strong>Patch 1.03.00</strong>, o mecanismo de lock-on durante batalhas de boss foi melhorado
          significativamente — hard lock-on agora mantido a distâncias maiores, e o lock-on não se aplica mais
          a certos bosses maiores onde causar confusão de câmera.
        </p>

        <AdLeaderboard className="my-8" />

        <p>
          O aspecto mais citado pelos críticos é a <strong>batalha contra bosses</strong>. Vários veículos
          compararam encontros específicos a Shadow of the Colossus pelo senso de escala e a Elden Ring pela
          exigência de leitura de padrões. A PC Gamer (8/10) descreveu o combate como "intenso, diferente
          de qualquer coisa que você já jogou antes." A TechRadar (80/100) foi ainda mais enfática:
          "combate incrível que não se parece com nada que você já jogou anteriormente."
        </p>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Sword className="h-6 w-6 text-red-400" />,
              title: "Múltiplas Armas",
              desc: "Kliff alterna entre diferentes tipos de armas durante o combate, cada uma com moveset próprio e sinergias distintas com o ambiente. Patch 1.04.00 adicionou galhos de árvore como armas para Kliff e Oongka.",
            },
            {
              icon: <Zap className="h-6 w-6 text-yellow-400" />,
              title: "Habilidades Especiais",
              desc: "Sistema de habilidades desbloqueadas via progressão (e aprendizado contextual observando inimigos). Patch 1.03.00 adicionou Focused Aerial Roll para Kliff, Axiom Force e Nature's Snare para Damiane e Oongka.",
            },
            {
              icon: <Shield className="h-6 w-6 text-blue-400" />,
              title: "Parry e Esquiva",
              desc: "Janelas de parry e esquiva exigem leitura dos inimigos. Com os modos de dificuldade (Patch 1.04.00), no Easy as janelas são aumentadas; no Hard são reduzidas. Execuções bem-sucedidas abrem oportunidades devastadoras.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2>Críticas ao Sistema de Combate — E o Que Foi Resolvido</h2>
        <p>
          Apesar dos elogios, o combate recebeu críticas específicas no lançamento. O <strong>sistema de lock-on</strong>
          foi apontado como problemático por vários críticos — a PC Gamer mencionou "lock-on irritante" como
          ponto negativo. O <strong>Patch 1.03.00 (abril 2026)</strong> melhorou significativamente o lock-on:
          agora mantém hard lock-on em maiores distâncias e não aplica lock em bosses muito grandes onde causava
          problemas de câmera.
        </p>
        <p>
          Os <strong>controles complexos</strong> também foram endereçados progressivamente: o Patch 1.00.03
          ajustou gamepad e teclado/mouse, o Patch 1.03.00 corrigiu controles de Axiom Force no K/M e o
          <strong> Patch 1.04.00</strong> adicionou presets de controle personalizáveis (o original disponível
          como "Classic Preset"). A PC Gamer ainda recomenda o uso de controle em detrimento de teclado/mouse no PC,
          mas a experiência com K/M melhorou consideravelmente.
        </p>
        <p>
          A IGN, em sua análise provisória de 6/10 após 110 horas, mencionou "puzzles pouco intuitivos" e
          dificuldades de progressão. Com os modos de dificuldade adicionados em abril, esses problemas
          foram parcialmente atenuados.
        </p>

        <h2>A BlackSpace Engine: O Que Ela Faz de Diferente</h2>
        <p>
          A BlackSpace Engine é uma engine proprietária desenvolvida pela Pearl Abyss especificamente para
          Crimson Desert. Seus principais destaques técnicos, confirmados por análises como a do Digital
          Foundry e Hardware Unboxed, incluem:
        </p>
        <ul>
          <li>
            <strong>Simulação de fluidos em tempo real:</strong> água, lama e líquidos reagem fisicamente
            ao corpo de Kliff. Em batalhas aquáticas, apenas as partes submersas da armadura ficam
            molhadas — um nível de simulação raro em jogos AAA.
          </li>
          <li>
            <strong>Destruição dinâmica:</strong> estruturas e elementos do cenário se quebram de forma
            procedural, não com animações pré-fabricadas.
          </li>
          <li>
            <strong>Iluminação global e clima dinâmico:</strong> o mundo de Pywel tem ciclos de dia/noite
            e condições climáticas que afetam tanto a estética quanto o gameplay.
          </li>
          <li>
            <strong>NPCs com comportamentos dinâmicos:</strong> críticos notaram NPCs realizando construção
            de pontes e estátuas em tempo real — comportamentos emergentes únicos.
          </li>
          <li>
            <strong>Escalonamento de GPU:</strong> a engine escala de GTX 1060 (mínimo) até RTX 5070 Ti
            (ultra). <strong>Intel Arc:</strong> suporte básico foi adicionado via patch pós-lançamento,
            mas ainda instável — aguardar updates completos.
          </li>
        </ul>

        <h2>Requisitos de PC por Nível de Desempenho</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Nível</th>
                <th className="text-left py-3 px-4">GPU</th>
                <th className="text-left py-3 px-4">CPU</th>
                <th className="text-left py-3 px-4">Desempenho alvo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mínimo",       "GTX 1060 / RX 5500 XT",   "i5-8500 / Ryzen 5 2600X",   "1080p 30fps (upscaled de 900p)"],
                ["Recomendado",  "RTX 2080 / RX 6700 XT",   "i5-11600K / Ryzen 5 5600",  "1080p 60fps ou 4K 30fps"],
                ["Alto",         "RTX 4070 / RX 7700 XT",   "i5-11600K / Ryzen 5 5600",  "1440p 60fps"],
                ["Ultra",        "RTX 5070 Ti / RX 9070 XT","i7-13700K / Ryzen 7 7700",  "4K 60fps"],
              ].map(([level, gpu, cpu, perf]) => (
                <tr key={level} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{level}</td>
                  <td className="py-3 px-4 text-muted-foreground">{gpu}</td>
                  <td className="py-3 px-4 text-muted-foreground">{cpu}</td>
                  <td className="py-3 px-4 text-primary text-xs">{perf}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Todos os tiers requerem: 16 GB RAM, 150 GB SSD, Windows 10 64-bit (22H2 ou posterior).
            <strong> Intel Arc: suporte básico disponível mas instável</strong> — aguardar updates da Pearl Abyss.
            Fonte: Pearl Abyss (site oficial) e PCGamesN.
          </p>
        </div>

        <h2>Conclusão</h2>
        <p>
          O combate de Crimson Desert e a tecnologia da BlackSpace Engine continuam sendo os pilares técnicos
          mais sólidos do jogo. Com os patches de abril — especialmente o 1.03.00 (lock-on aprimorado, novas
          habilidades) e o 1.04.00 (modos de dificuldade, presets de controle) — a experiência de combate
          ficou significativamente mais acessível e polida. Para quem busca combate satisfatório e mundo
          visualmente impressionante, Crimson Desert entrega o prometido. Com 5 milhões de cópias vendidas
          e suporte ativo, o jogo está numa trajetória de melhoria contínua.
        </p>
      </div>

      <RelatedPosts currentSlug="crimson-desert-combate-blackspace-engine" />
      <CommentSection postId="crimson-desert-combate-blackspace-engine" postTitle="Crimson Desert: Sistema de Combate e BlackSpace Engine" />
    </article>
  );
};

export default CrimsonDesertCombate;
