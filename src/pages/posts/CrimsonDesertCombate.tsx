import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Sword, Zap, Shield, Cpu, AlertTriangle, TrendingUp, Target } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

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
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert · Combate</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Sistema de Combate e BlackSpace Engine — Como Funciona na Prática
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026 · Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="16 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonCombateImg} alt="Crimson Desert combate sistema BlackSpace Engine" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O combate de Crimson Desert foi um dos aspectos mais elogiados pelas críticas no lançamento em 19 de março de 2026. Construído sobre a <strong>BlackSpace Engine</strong> — a engine proprietária da Pearl Abyss — o sistema prioriza física em tempo real, peso das ações e bosses que exigem leitura de padrões. Após os patches de abril de 2026, vários problemas apontados no lançamento foram corrigidos, tornando a experiência ainda mais sólida.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />O Sistema de Combate: Peso, Física e Profundidade
        </h2>
        <p>
          Crimson Desert usa um sistema de combate em terceira pessoa com foco em ações pesadas e consequentes. Kliff pode usar múltiplas armas — espadas de uma mão, alabardas, armas de duas mãos, cajados — e alternar entre elas durante o combate. Cada arma tem um conjunto próprio de ataques, habilidades especiais e sinergias com o terreno e os inimigos.
        </p>
        <p>
          O aspecto mais citado pelos críticos é a <strong>batalha contra bosses</strong>. Vários veículos compararam encontros específicos a Shadow of the Colossus pelo senso de escala, e a Elden Ring pela exigência de leitura de padrões e punição por erros. A PC Gamer (8/10) descreveu o combate como "intenso, diferente de qualquer coisa que você já jogou antes." A TechRadar (80/100) foi ainda mais enfática: "combate incrível que não se parece com nada que você já jogou anteriormente."
        </p>
        <p>
          O sistema tem duas camadas que trabalham juntas: a camada de execução (combos, esquivas, parries, timing) e a camada de progressão (habilidades desbloqueadas, aprendizado contextual, sinergia de equipamento). Jogadores que entendem apenas a primeira camada têm uma experiência boa — os que dominam as duas têm uma experiência excelente. Isso explica parte da divergência entre avaliações de críticos que passaram 40 horas e jogadores que passaram 150.
        </p>

        <AdLeaderboard className="my-8" />

        <div className="not-prose my-8 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <Sword className="h-6 w-6 text-red-400" />,
              title: "Múltiplas Armas",
              desc: "Kliff alterna entre tipos de armas durante o combate, cada uma com moveset próprio e sinergias distintas. Patch 1.04.00 adicionou galhos de árvore como armas para Kliff e Oongka — opção de dano surpreendentemente efetiva em certas situações.",
            },
            {
              icon: <Zap className="h-6 w-6 text-yellow-400" />,
              title: "Habilidades Especiais",
              desc: "Sistema de habilidades desbloqueadas via progressão e aprendizado contextual. Patch 1.03.00 adicionou Focused Aerial Roll para Kliff, Axiom Force e Nature's Snare para Damiane e Oongka. Cada habilidade muda o potencial do personagem de forma significativa.",
            },
            {
              icon: <Shield className="h-6 w-6 text-blue-400" />,
              title: "Parry e Esquiva",
              desc: "Janelas de parry e esquiva exigem leitura dos inimigos e timing preciso. No Easy (Patch 1.04.00) as janelas são aumentadas; no Hard são reduzidas. Execuções bem-sucedidas de parry abrem oportunidades devastadoras contra qualquer tipo de inimigo.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-5">
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-geek" />Os Bosses de Crimson Desert — O Coração do Combate
        </h2>
        <p>
          Os bosses de Crimson Desert são o ponto mais alto do sistema de combate e também o mais controverso. Projetados para serem desafiantes mesmo para veteranos de Elden Ring e Black Myth: Wukong, cada boss principal tem múltiplas fases, padrões que mudam e exige que o jogador use todas as ferramentas disponíveis.
        </p>
        <p>
          O Game Informer descreveu algumas batalhas como "as mais frustrantes que já encontrei" — uma crítica ao design que não diferenciava entre dificuldade bem calibrada e frustração artificial. Com o Patch 1.04.00 e os modos de dificuldade, parte dessa frustração foi endereçada: no Easy, os bosses têm HP reduzido e menor agressividade, tornando a experiência mais acessível sem eliminar o desafio fundamental de leitura de padrões.
        </p>
        <p>
          Os encontros mais elogiados pela comunidade são os bosses que integram o ambiente ao combate — batalhas em superfícies instáveis, com elementos climáticos ativos ou em espaços que se transformam durante o confronto. Esses momentos são onde a BlackSpace Engine brilha de forma mais visível, criando situações de combate que seriam impossíveis com tecnologia mais tradicional.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-geek" />Críticas ao Sistema — E o Que Foi Resolvido
        </h2>
        <p>
          Apesar dos elogios, o combate recebeu críticas específicas no lançamento. O <strong>sistema de lock-on</strong> foi apontado como problemático por vários críticos — a PC Gamer mencionou "lock-on irritante" como ponto negativo explícito. Em bosses maiores, o lock-on criava problemas de câmera que tornavam certas fases de luta genuinamente difíceis por razões erradas.
        </p>
        <p>
          O <strong>Patch 1.03.00 (abril 2026)</strong> melhorou significativamente o lock-on: agora mantém hard lock-on a maiores distâncias e não aplica lock em bosses muito grandes onde causava confusão de câmera. O resultado é um sistema muito mais responsivo e intuitivo do que no lançamento.
        </p>
        <p>
          Os <strong>controles complexos</strong> também foram endereçados progressivamente. O Patch 1.00.03 ajustou gamepad e teclado/mouse. O Patch 1.03.00 corrigiu controles de Axiom Force no K/M. O <strong>Patch 1.04.00</strong> adicionou presets de controle personalizáveis, com o layout original disponível como "Classic Preset." A experiência com teclado e mouse, que era descrita como "difícil de recomendar" por múltiplos críticos no lançamento, melhorou substancialmente — embora controle ainda seja a recomendação preferida para PC.
        </p>

        <AdInArticle className="my-8" />

        <div className="not-prose my-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
          <h3 className="font-bold text-green-400 mb-3">✅ Melhorias de Combate por Patch</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {[
              ["Patch 1.00.03 (março)", "Ajustes de gamepad e teclado/mouse; baús de armazenamento adicionados"],
              ["Patch 1.01.00 (30/03)", "Otimizações gerais; pico de 276k simultâneos no Steam nesse patch"],
              ["Patch 1.03.00 (abril)", "Lock-on melhorado; Focused Aerial Roll para Kliff; Nature's Snare e Axiom Force adicionados"],
              ["Patch 1.04.00 (22/04)", "Modos Easy/Normal/Hard; presets de controle personalizados; função Lock no inventário; galhos de árvore como armas"],
            ].map(([patch, melhoria]) => (
              <div key={patch} className="flex gap-2">
                <span className="font-medium text-foreground shrink-0">{patch}:</span>
                <span>{melhoria}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-geek" />A BlackSpace Engine: O Que Ela Faz de Diferente
        </h2>
        <p>
          A BlackSpace Engine é uma engine proprietária desenvolvida pela Pearl Abyss especificamente para Crimson Desert. Ela é o diferencial técnico mais significativo do jogo — e o que torna o combate diferente de qualquer outro jogo de mundo aberto disponível em 2026.
        </p>
        <ul>
          <li>
            <strong>Simulação de fluidos em tempo real:</strong> água, lama e líquidos reagem fisicamente ao corpo de Kliff. Em batalhas aquáticas, apenas as partes submersas da armadura ficam molhadas — um nível de simulação raro em jogos AAA. Durante combates em rios ou chuva intensa, o comportamento dos personagens e dos projéteis muda de acordo com o fluido — não é cosmético.
          </li>
          <li>
            <strong>Destruição dinâmica:</strong> estruturas e elementos do cenário se quebram de forma procedural, não com animações pré-fabricadas. Bosses que destroem o ambiente durante combates criam situações únicas em cada tentativa — o mesmo boss pode transformar a arena de forma diferente em cada luta.
          </li>
          <li>
            <strong>Iluminação global e clima dinâmico:</strong> o mundo de Pywel tem ciclos de dia/noite e condições climáticas que afetam tanto a estética quanto o gameplay. Combates noturnos têm visibilidade reduzida; chuva intensa afeta o alcance de projéteis e a mobilidade em superfícies inclinadas.
          </li>
          <li>
            <strong>NPCs com comportamentos dinâmicos:</strong> críticos notaram NPCs realizando construção de pontes e estátuas em tempo real — comportamentos emergentes que não estão vinculados a scripts fixos. Inimigos também respondem ao ambiente de forma mais sofisticada do que a maioria dos jogos AAA.
          </li>
          <li>
            <strong>Escalonamento de GPU amplo:</strong> a engine escala de GTX 1060 (mínimo) até RTX 5070 Ti (ultra). Intel Arc tem suporte básico via patch pós-lançamento, mas permanece instável — aguardar updates completos da Pearl Abyss antes de jogar nessa plataforma.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Requisitos de PC por Nível de Desempenho</h2>
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
                ["Mínimo",       "GTX 1060 / RX 5500 XT",    "i5-8500 / Ryzen 5 2600X",  "1080p 30fps (upscaled de 900p)"],
                ["Recomendado",  "RTX 2080 / RX 6700 XT",    "i5-11600K / Ryzen 5 5600", "1080p 60fps ou 4K 30fps"],
                ["Alto",         "RTX 4070 / RX 7700 XT",    "i5-11600K / Ryzen 5 5600", "1440p 60fps estável"],
                ["Ultra",        "RTX 5070 Ti / RX 9070 XT", "i7-13700K / Ryzen 7 7700", "4K 60fps com ray tracing"],
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
            Todos os tiers requerem: 16 GB RAM, 150 GB SSD, Windows 10 64-bit (22H2 ou posterior). <strong>Intel Arc: suporte básico disponível mas instável</strong> — aguardar updates da Pearl Abyss. Fonte: Pearl Abyss (site oficial) e PCGamesN.
          </p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Dicas de Combate para Novos Jogadores</h2>
        <ul>
          <li><strong>Escolha o modo de dificuldade conscientemente:</strong> Easy não elimina o desafio de combate — apenas torna as janelas de timing mais generosas. É a escolha certa para quem quer focar na exploração sem travar em bosses por horas.</li>
          <li><strong>Observe antes de atacar:</strong> o aprendizado contextual de habilidades exige que Kliff veja o movimento em ação. Inimigos que demonstram ataques especiais podem estar ensinando novas habilidades — priorize observação antes de finalizar.</li>
          <li><strong>Use o lock-on inteligentemente:</strong> após o Patch 1.03.00, o lock-on está muito mais estável. Em bosses grandes, o sistema agora desativa automaticamente onde causaria confusão de câmera — confie no novo comportamento.</li>
          <li><strong>Mantenha múltiplos tipos de arma no inventário:</strong> diferentes inimigos têm fraquezas específicas. Um estilo puramente agressivo pode travar em bosses com alta resistência a dano físico pesado — ter uma arma alternativa disponível abre mais opções.</li>
          <li><strong>Boss rematches:</strong> após morrer, sempre reavalie qual habilidade ou equipamento pode mudar a dinâmica. O sistema de progressão de Crimson Desert foi projetado para que cada boss seja mais fácil com as ferramentas certas — não apenas com mais prática no mesmo setup.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          O combate de Crimson Desert e a tecnologia da BlackSpace Engine continuam sendo os pilares técnicos mais sólidos do jogo. Com os patches de abril — especialmente o 1.03.00 (lock-on aprimorado, novas habilidades) e o 1.04.00 (modos de dificuldade, presets de controle) — a experiência de combate ficou significativamente mais acessível e polida. Para quem busca combate satisfatório e mundo visualmente impressionante, Crimson Desert entrega o prometido. Com 5 milhões de cópias vendidas e suporte ativo, o jogo está numa trajetória de melhoria contínua que justifica a entrada mesmo para quem estava esperando uma versão mais polida.
        </p>
      
        <h2 className="text-2xl font-bold mt-10 mb-4">Análise Comparativa com Outros Sistemas de Combate do Gênero</h2>
        <p>
          Comparando o sistema de combate de Crimson Desert com outros RPGs de ação contemporâneos como Elden Ring e Black Myth: Wukong, fica evidente que a Pearl Abyss optou por abordagem que prioriza fluidez e velocidade sobre o ritmo mais metódico e punitivo característico de soulslikes tradicionais. Essa escolha de design resulta em experiência de combate que recompensa agressividade calculada e leitura rápida de padrões, em vez de paciência extrema e timing preciso de janelas extremamente curtas que definem jogos do gênero Souls clássico.
        </p>
        <p>
          Essa diferenciação filosófica de design não torna Crimson Desert mais fácil necessariamente, mas oferece experiência de combate distinta que atrai público que aprecia ação mais dinâmica sem sacrificar completamente profundidade técnica e necessidade de estratégia adaptativa contra diferentes tipos de inimigos e bosses ao longo da campanha principal do jogo.
        </p>
    
        <p>
          No final, ambas as abordagens de design têm seu mérito e público específico — a escolha da Pearl Abyss simplesmente posiciona Crimson Desert de forma diferenciada dentro do panorama mais amplo de RPGs de ação disponíveis para jogadores em 2026.
        </p>
    
        <h2 className="text-2xl font-bold mt-10 mb-4">O Futuro do Sistema de Combate em Possíveis Sequências</h2>
        <p>
          Caso a Pearl Abyss decida expandir o universo de Pywel através de sequências ou expansões futuras, o sistema de combate estabelecido em Crimson Desert oferece base sólida sobre a qual iterações adicionais poderiam ser construídas. A flexibilidade demonstrada pela equipe de desenvolvimento em responder a feedback através de patches sugere disposição para continuar refinando e expandindo mecânicas de combate baseado em dados reais de como jogadores interagem com o sistema na prática, em vez de assumções de design isoladas do feedback real da comunidade.
        </p>
    </div>

      <EditorialTake category="geek" title="Análise: O Combate de Crimson Desert Merece Mais Crédito do Que Recebeu">
        <p>O debate sobre Crimson Desert se concentrou tanto na narrativa fraca e nos problemas de inventário que o sistema de combate — genuinamente excepcional — acabou subrepresentado na cobertura crítica. Comparar bosses a Shadow of the Colossus não é exagero editorial: há momentos em que a escala, a física e o impacto visual de um confronto em Crimson Desert não têm equivalente direto em nenhum RPG de ação de 2024 ou 2025. <strong>A BlackSpace Engine faz coisas que outras engines simplesmente não fazem ainda</strong> — a simulação de fluidos que afeta o combate em tempo real, a destruição procedural que torna cada arena diferente. Após os patches de controle e dificuldade, o que restou é um sistema de combate que poucos jogos vão conseguir igualar em 2026. Esse ponto merecia destaque maior nos reviews de lançamento.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Crimson Desert Patch Notes 1.03.00 — Lock-on e Novas Habilidades",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=175",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Patch Notes 1.04.00 — Modos de Dificuldade",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=182",
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
            title: "Crimson Desert — PCGamesN (Requisitos de Sistema)",
            url: "https://www.pcgamesn.com/crimson-desert/system-requirements",
            publisher: "PCGamesN",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — Pearl Abyss Site Oficial",
            url: "https://www.crimsondesert.com/",
            publisher: "Pearl Abyss",
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

      <RelatedPosts currentSlug="crimson-desert-combate-blackspace-engine" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-combate-blackspace-engine" postTitle="Crimson Desert: Sistema de Combate e BlackSpace Engine" category="geek" />
    </article>
  );
};

export default CrimsonDesertCombate;
