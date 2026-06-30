import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Sword, Wand2, Shield, Zap, AlertTriangle, BookOpen, Target, TrendingUp } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

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
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert · Guia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Sistema de Progressão de Kliff e Estilos de Jogo — Guia Completo 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026 · Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="17 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonBuildsImg} alt="Crimson Desert builds progressão de Kliff 2026" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="not-prose my-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Atualizado (24/04/2026):</strong> O Patch 1.04.00 (22 de abril) adicionou <strong>modos de dificuldade Easy/Normal/Hard</strong>, novos galhos de árvore utilizáveis por Kliff e Oongka, a arma exclusiva Sword of Starlight para Damiane e mais habilidades via Patch 1.03.00. As informações abaixo refletem o estado atual do jogo.
          </p>
        </div>

        <p className="lead text-xl text-muted-foreground">
          Em Crimson Desert, você controla <strong>Kliff</strong>, membro dos Greymanes — um grupo de mercenários que opera no continente de Pywel. Ao contrário de RPGs com classes rígidas, Kliff pode usar e desenvolver múltiplos tipos de armas, mas o sistema de habilidades recompensa especialização ao longo do jogo. Entender como a progressão funciona é a chave para aproveitar o combate ao máximo.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />Como Funciona a Progressão de Kliff
        </h2>
        <p>
          O sistema de progressão de Crimson Desert foge dos padrões tradicionais de RPG. Não há pontos de experiência simples que sobem um nível geral — o desenvolvimento de Kliff é segmentado por habilidade e arma, exigindo investimento ativo do jogador em um estilo de luta específico.
        </p>
        <ul>
          <li>
            <strong>Armas e estilos:</strong> Kliff tem acesso a diferentes categorias de armas — espadas de uma mão, armas de duas mãos, cajados, entre outras. Cada categoria tem um conjunto de habilidades desbloqueáveis independente. Usar uma arma repetidamente não só familiariza com os movimentos, como também desbloqueia progressivamente novas habilidades ativas e passivas para aquele tipo específico.
          </li>
          <li>
            <strong>Habilidades ativas e passivas:</strong> ao completar desafios ou missões específicas relacionadas a um tipo de arma, Kliff desbloqueia habilidades que alteram fundamentalmente como aquele estilo de combate funciona. Uma passiva de armas de duas mãos pode aumentar o dano de golpes carregados em 30% — o que muda completamente a viabilidade do estilo em combates longos.
          </li>
          <li>
            <strong>Aprendizado contextual:</strong> novas habilidades também são aprendidas observando inimigos e NPCs executando movimentos durante combates ou eventos do mundo. Essa mecânica única foi destacada como um dos diferenciais mais interessantes do jogo. Na prática, vale a pena evitar matar inimigos imediatamente se eles estiverem exibindo movimentos que Kliff ainda não possui.
          </li>
          <li>
            <strong>Equipamentos e armaduras:</strong> armaduras e acessórios adicionam bônus passivos que direcionam Kliff para estilos mais agressivos, defensivos ou híbridos. A progressão de equipamentos é paralela à de habilidades — um personagem com habilidades de DPS mas equipamento defensivo terá desempenho comprometido.
          </li>
          <li>
            <strong>Inventário e Artifacts:</strong> o Patch 1.04.00 adicionou função Lock para proteger itens importantes de venda ou descarte acidental, novas abas de categorias e o Kuku Cooler como item de armazenamento adicional. Os Artifacts são compartilhados entre Kliff, Damiane e Oongka — planeje o uso com cuidado antes de especializar em um único personagem.
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-geek" />Modos de Dificuldade (Patch 1.04.00)
        </h2>
        <p>
          O Patch 1.04.00 (22 de abril de 2026) foi o mais aguardado pela comunidade — o pedido mais votado desde o lançamento. Os três modos estão acessíveis em <strong>Configurações &gt; Jogar</strong> e podem ser alterados a qualquer momento durante a jornada.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { modo: "Easy", cor: "border-green-500/30 bg-green-500/5", textCor: "text-green-400", desc: "Dano recebido reduzido, inimigos com menos HP e agressividade, janelas de parry e esquiva aumentadas. Ideal para focar na exploração e história sem punição excessiva. Recomendado para quem vem de jogos de ação mais casuais." },
            { modo: "Normal", cor: "border-blue-500/30 bg-blue-500/5", textCor: "text-blue-400", desc: "Equivale à dificuldade original do lançamento. A experiência padrão da Pearl Abyss para Crimson Desert — exigente nos bosses, recompensadora quando o combate é dominado. Para a maioria dos jogadores de RPG de ação." },
            { modo: "Hard", cor: "border-red-500/30 bg-red-500/5", textCor: "text-red-400", desc: "Combate mais intenso, bosses mais agressivos e com mais HP, janelas de punição menores. Para veteranos de Elden Ring, Sekiro e Black Myth: Wukong que querem o máximo de desafio em cada confronto." },
          ].map(({ modo, cor, textCor, desc }) => (
            <div key={modo} className={`rounded-xl border p-4 ${cor}`}>
              <h3 className={`font-bold mb-2 ${textCor}`}>{modo}</h3>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />Os 3 Estilos de Jogo Identificados pela Comunidade
        </h2>
        <p>
          Com base nas análises de lançamento, centenas de horas de gameplay da comunidade e o metagame consolidado até abril de 2026, três abordagens principais emergem naturalmente do sistema de progressão de Crimson Desert:
        </p>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Sword className="h-7 w-7 text-red-400" />,
              title: "Agressivo / DPS",
              color: "border-red-500/30 bg-red-500/5",
              desc: "Foco em armas pesadas de duas mãos e habilidades de alto dano. Alta recompensa contra bosses, mas exige domínio da esquiva para compensar a baixa defesa passiva. Preferido por quem vem de Elden Ring ou Black Myth: Wukong. No Hard Mode, exige precisão técnica elevada — uma janela de esquiva perdida contra um boss pode ser fatal.",
              suitable: "Para: fãs de combate técnico e arriscado",
              patches: "Melhorado: Patch 1.03.00 adicionou Focused Aerial Roll para Kliff, ampliando opções de esquiva aérea.",
            },
            {
              icon: <Shield className="h-7 w-7 text-blue-400" />,
              title: "Defensivo / Counter",
              color: "border-blue-500/30 bg-blue-500/5",
              desc: "Combinação de escudo e arma de uma mão com foco em parry e contraataques devastadores. Curva de aprendizagem mais suave — errar um parry custa mais do que errar uma esquiva. No Easy Mode, as janelas de parry aumentadas tornam esse estilo especialmente acessível para iniciantes. Recomendado para quem está começando ou prefere ritmo mais pausado.",
              suitable: "Para: iniciantes ou quem prefere ritmo mais pausado",
              patches: "Melhorado: janelas de parry maiores no Easy Mode (Patch 1.04.00).",
            },
            {
              icon: <Wand2 className="h-7 w-7 text-purple-400" />,
              title: "Híbrido / Utilidade",
              color: "border-purple-500/30 bg-purple-500/5",
              desc: "Mistura armas corpo a corpo com habilidades de elemento ou utilitárias. Versátil para diferentes tipos de encontros — excelente para exploração onde o tipo de inimigo varia constantemente. Com as novas habilidades de Damiane (Nature's Snare) e Oongka (Axiom Force) adicionadas no Patch 1.03.00, esse estilo ficou ainda mais viável quando os personagens secundários são utilizados em conjunto.",
              suitable: "Para: jogadores experientes que querem versatilidade máxima",
              patches: "Melhorado: novos galhos de habilidade para Kliff e Oongka (Patch 1.04.00).",
            },
          ].map(({ icon, title, color, desc, suitable, patches }) => (
            <div key={title} className={`rounded-xl border p-5 ${color}`}>
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{desc}</p>
              <p className="text-xs text-primary font-medium mb-2">{suitable}</p>
              <p className="text-xs text-muted-foreground italic">{patches}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-geek" />Damiane e Oongka — Os Personagens Secundários
        </h2>
        <p>
          Kliff não é o único personagem controlável em Crimson Desert. Ao avançar na campanha, Damiane e Oongka tornam-se disponíveis — cada um com seu próprio conjunto de habilidades, estilo de combate e linha de progressão paralela.
        </p>
        <p>
          <strong>Damiane</strong> é uma guerreira especializada em ataques rápidos e precisos. O Patch 1.03.00 adicionou Nature's Snare, uma habilidade que imobiliza grupos de inimigos. O Patch 1.04.00 acrescentou a <strong>Sword of Starlight</strong>, uma arma exclusiva para Damiane que amplia significativamente suas opções de dano único contra bosses. Se você planeja usar Damiane como personagem principal em determinados encontros, vale guardar alguns Artifacts para ela em vez de concentrar tudo em Kliff.
        </p>
        <p>
          <strong>Oongka</strong> é um personagem focado em força bruta e controle de área. Com o Patch 1.03.00, ganhou o Axiom Force — um ataque de área que empurra inimigos e cria espaço. O Patch 1.04.00 adicionou galhos de árvore como arma utilizável para Oongka (e Kliff), abrindo novas combinações de moveset. A alternância entre os três personagens durante explorações longas permite usar o que melhor se encaixa em cada tipo de encontro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Dicas de Progressão Verificadas pela Comunidade</h2>
        <ul>
          <li><strong>Escolha o modo de dificuldade certo desde o início:</strong> com Easy, Normal e Hard disponíveis (Patch 1.04.00), a decisão muda completamente a experiência. Easy é recomendado para quem quer focar na exploração; Normal para a experiência completa; Hard apenas para veteranos do gênero com muita paciência para bosses.</li>
          <li><strong>Expanda o inventário o quanto antes:</strong> priorize quests que desbloqueiam slots adicionais de mochila. Use a função Lock (Patch 1.04.00) para proteger equipamentos e Artifacts importantes de venda acidental.</li>
          <li><strong>Use controle no PC:</strong> múltiplos críticos — incluindo PC Gamer e GameSpot — recomendam explicitamente jogar com controle em vez de teclado e mouse no PC. O Patch 1.04.00 adicionou presets de controle personalizáveis (o layout original disponível como "Classic Preset").</li>
          <li><strong>Explore fora da missão principal:</strong> a GamesRadar+ e a TheGamer concordam que os melhores momentos de Crimson Desert acontecem fora do caminho principal. Eventos aleatórios, masmorras secretas e encontros de boss opcionais frequentemente entregam recompensas e habilidades exclusivas.</li>
          <li><strong>Reserve Artifacts para todos os personagens:</strong> os Artifacts são compartilhados — não gaste tudo em Kliff antes de Damiane e Oongka serem liberados. Planejar a distribuição com antecedência evita ter que regredir o progresso de Kliff para equipar os demais.</li>
          <li><strong>Invista numa especialização antes de diversificar:</strong> o sistema recompensa quem aprofunda um estilo antes de tentar todas as armas. Dominar completamente um moveset — com suas passivas e habilidades desbloqueadas — é mais eficiente que ter acesso superficial a todos os estilos.</li>
          <li><strong>Observe os inimigos antes de matar:</strong> o aprendizado contextual de habilidades exige que Kliff testemunhe o movimento em ação. Resistir ao impulso de finalizar inimigos imediatamente pode desbloquear habilidades que de outra forma exigiriam missões específicas.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">A Evolução do Sistema Após os Patches</h2>
        <p>
          A progressão de Crimson Desert ficou significativamente mais acessível após os patches de abril. No lançamento, a principal reclamação era a ausência de modo fácil — o jogo tinha apenas uma dificuldade, e certos bosses eram descritos por múltiplos críticos como "frustrantes ao ponto da exasperação." O Game Informer classificou algumas batalhas como "as mais frustrantes que já encontrei."
        </p>
        <p>
          Com o Patch 1.04.00, esse cenário mudou: a dificuldade é agora completamente ajustável a qualquer momento. Mais do que isso, os sistemas de inventário — que foram uma das críticas mais consistentes no lançamento — foram ampliados com novas abas, função Lock e itens de armazenamento adicionais. A Pearl Abyss demonstrou disposição genuína em escutar a comunidade, o que também se reflete no movimento de "Mostly Positive" para "Very Positive" no Steam ao longo de abril.
        </p>
      
        <h2 className="text-2xl font-bold mt-10 mb-4">Builds Avançadas Para Conteúdo de Endgame</h2>
        <p>
          Para jogadores que completaram a campanha principal e buscam desafios adicionais em conteúdo de endgame, builds especializadas que maximizam sinergia entre habilidades de Kliff, equipamentos de raridade superior e Abyss Gears específicos tornam-se essenciais para enfrentar os encontros mais desafiadores disponíveis. A comunidade identificou combinações particularmente eficazes que exploram interações entre passivas de diferentes árvores de habilidade, criando builds híbridas que superam significativamente abordagens mais convencionais de especialização única.
        </p>
        <p>
          Vale ressaltar que builds de endgame frequentemente exigem investimento considerável de tempo em farming de materiais raros e Abyss Artifacts específicos, tornando-as objetivos de longo prazo mais adequados para jogadores dedicados que já dominaram fundamentos básicos do sistema de combate e progressão do jogo.
        </p>
    
        <p>
          Para a maioria dos jogadores que apenas buscam completar a campanha principal sem desafios extremos, builds mais simples e diretas continuam perfeitamente viáveis — a complexidade de endgame é opcional, reservada para quem busca extrair o máximo de profundidade estratégica que o sistema de progressão de Kliff oferece.
        </p>
    
        <h2 className="text-2xl font-bold mt-10 mb-4">A Filosofia de Design Por Trás do Sistema de Progressão</h2>
        <p>
          Analisando o sistema de progressão de Kliff em perspectiva mais ampla, fica evidente que a Pearl Abyss optou por abordagem que recompensa experimentação e adaptação contínua, em vez de permitir que jogadores encontrem uma única build "definitiva" e a mantenham inalterada durante toda a campanha. Essa filosofia de design, embora possa frustrar inicialmente jogadores acostumados com sistemas mais rígidos de especialização permanente, oferece em troca flexibilidade valiosa para responder a diferentes desafios conforme surgem ao longo da extensa jornada através de Pywel.
        </p>
        <p>
          Para jogadores que apreciam esse tipo de sistema mais fluido e adaptativo, Crimson Desert oferece uma das experiências de progressão de personagem mais satisfatórias disponíveis no gênero atualmente, recompensando curiosidade e disposição para experimentar combinações diferentes de habilidades e equipamentos conforme a jornada avança.
        </p>
    
        <p>
          Independentemente do nível de complexidade que você busca, há espaço suficiente dentro do sistema de progressão de Crimson Desert para acomodar tanto jogadores casuais quanto entusiastas dedicados de otimização de build avançada.
        </p>
    
        <p>
          A flexibilidade do sistema garante que sempre haverá uma abordagem adequada para cada estilo individual de jogo dentro do vasto universo de Pywel.
        </p>
    </div>

      <EditorialTake category="geek" title="Análise do Marcos: O Sistema de Progressão de Crimson Desert é Mais Profundo do que Parece">
        <p>A primeira impressão do sistema de progressão de Crimson Desert pode ser avassaladora — muitos sistemas, pouca tutorização, inventário caótico. Mas por baixo da complexidade existe uma coerência de design que recompensa paciência. <strong>O aprendizado contextual ao observar inimigos é uma das mecânicas mais originais de um RPG de ação em anos</strong> — e raramente mencionada nos reviews que focaram nos problemas de controle do lançamento. A decisão de não fixar Kliff numa classe rígida, permitindo que o jogador descubra seu próprio estilo organicamente, é corajosa para um primeiro AAA single-player da Pearl Abyss. Os patches melhoraram o acesso, mas a arquitetura do sistema sempre foi sólida. Quem der tempo ao jogo vai encontrar uma curva de aprendizado que tem mais em comum com Elden Ring do que com as aparências iniciais sugerem.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Crimson Desert Patch Notes 1.04.00 — Modos de Dificuldade e Novidades",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=182",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Patch Notes 1.03.00 — Novas Habilidades",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=175",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Review — PC Gamer (8/10)",
            url: "https://www.pcgamer.com/reviews/crimson-desert-review/",
            publisher: "PC Gamer",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Review — GamesRadar+ (4/5)",
            url: "https://www.gamesradar.com/games/action-rpg/crimson-desert-review/",
            publisher: "GamesRadar+",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — Steam Store",
            url: "https://store.steampowered.com/app/1277400/Crimson_Desert/",
            publisher: "Valve / Pearl Abyss",
            accessedAt: "Abril 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="crimson-desert-builds-guia-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-builds-guia-2026" postTitle="Crimson Desert: Progressão de Kliff e Estilos de Jogo" category="geek" />
    </article>
  );
};

export default CrimsonDesertBuilds;
