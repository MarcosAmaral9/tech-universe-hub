import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, TrendingUp, Star, BarChart3, MessageSquare, Globe, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/crimson-desert-vendas-review.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CrimsonDesertVendasReview = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-vendas-review-completo-2026", "Crimson Desert: 5 Milhões de Cópias, Metacritic 78 e Review Completo", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Review · Análise · Vendas</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: 5 Milhões de Cópias, Metacritic 78 e Tudo que a Crítica Disse
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="04 de Abril, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert review vendas Metacritic 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert foi lançado em 19 de março de 2026 e se tornou um dos maiores lançamentos do ano: <strong>2 milhões de cópias nas primeiras 24 horas</strong>, <strong>3 milhões no quinto dia</strong> e <strong>5 milhões em menos de um mês</strong> (anunciado em 15 de abril). As notas da crítica ficaram abaixo da hype — <strong>Metacritic 78</strong> e <strong>OpenCritic 80</strong> — mas os jogadores responderam de forma muito mais positiva. Este artigo reúne os dados de vendas, as análises críticas e a perspectiva dos jogadores para uma visão completa do fenômeno Crimson Desert.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-geek" />Os Números do Lançamento
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "78", desc: "Metacritic (PC)" },
            { valor: "80", desc: "OpenCritic (81% recomendam)" },
            { valor: "87%", desc: "Steam Very Positive (+139k análises)" },
            { valor: "5M+", desc: "Cópias vendidas em menos de 1 mês" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-geek/20 p-4 text-center">
              <div className="text-3xl font-bold text-geek">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="not-prose my-6 p-4 bg-geek/10 border border-geek/30 rounded-xl text-sm text-muted-foreground">
          <strong className="text-foreground">📈 Linha do tempo de vendas:</strong> 2M em 24h → 3M em 5 dias (24/03) → 4M em ~2 semanas (início de abril) → 5M em 26 dias (15/04/2026). A Pearl Abyss confirmou que todos os números são sell-through (vendas reais, não apenas remessas). O jogo permaneceu no top 10 de best-sellers da Steam e das lojas PlayStation e Xbox desde o lançamento. No Steam, o pico de jogadores simultâneos atingiu <strong>276.261</strong> com o Patch 1.01.00 em 30 de março — 3º mais jogado naquele domingo.
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-amber-400" />O Que a Crítica Elogiou
        </h2>
        <p>
          O consenso elogioso da crítica converge em três pilares: o mundo aberto de Pywel, o sistema de combate e a escala do conteúdo disponível. A Forbes (9.5/10) e o DualShockers (9.5/10) foram os veículos mais entusiastas, seguidos por PC Gamer (8/10), TechRadar (8/10) e Game Rant (8/10). O Vice deu nota máxima (5/5), descrevendo o jogo como "o negócio de verdade" e elogiando especialmente a liberdade de exploração fora do caminho principal.
        </p>
        <p>
          O aspecto mais citado foi a <strong>batalha contra bosses</strong>: múltiplos críticos compararam encontros específicos a Shadow of the Colossus pela escala e impacto visual, e a Elden Ring pela exigência de leitura de padrões. A TheGamer jogou 150 horas sem esgotar o conteúdo disponível — uma das análises mais longas publicadas sobre qualquer jogo em 2026. A BlackSpace Engine, desenvolvida internamente pela Pearl Abyss, foi consistentemente elogiada pela simulação de física de fluidos, destruição dinâmica e iluminação global.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { aspecto: "Combate", desc: "Praticamente unânime: o sistema de combate de Kliff é o ponto mais forte. GameSpot escreveu que Kliff golpeia com ferocidade visceral imediatamente satisfatória. A variedade de combos, agarrões, combate a cavalo e o sistema de aprendizado contextual receberam elogios unânimes.", nota: "🏆 Ponto forte" },
            { aspecto: "Mundo Aberto e Gráficos", desc: "Pywel foi descrito por múltiplos críticos como tecnicamente deslumbrante — 'marvel visual e técnico em cada curva', segundo o Game Informer. O mundo é renderizado como uma única localização sem telas de carregamento entre regiões, algo tecnicamente notável para um mapa desse tamanho.", nota: "🏆 Ponto forte" },
            { aspecto: "Exploração", desc: "Vice deu 5/5 elogiando o 'sandbox de tirar o fôlego'. O DualShockers (9.5/10) chamou de 'um dos melhores jogos de mundo aberto do mercado'. Eventos aleatórios, masmorras secretas e encontros opcionais frequentemente surpreendem com qualidade acima da média.", nota: "🏆 Ponto forte" },
            { aspecto: "Conteúdo", desc: "O volume de atividades — bandit camps, caça, pesca, culinária, puzzles, Abyss, stealth, lore via Knowledge Helm — impressionou críticos e jogadores. A TheGamer reportou 80-150 horas de conteúdo sem zerar a campanha principal.", nota: "👍 Positivo" },
          ].map((item) => (
            <div key={item.aspecto} className="bg-card rounded-xl border border-emerald-500/20 p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-emerald-400">{item.aspecto}</h4>
                <span className="text-xs">{item.nota}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-amber-400" />O Que a Crítica Criticou
        </h2>
        <p>
          A narrativa foi o ponto mais consistentemente criticado: múltiplos veículos apontaram que Kliff como protagonista tem motivações superficiais e que o enredo principal não sustenta as dezenas de horas necessárias para completá-lo. O GameSpot (7/10) resumiu: grande parte do impulso narrativo fica limitado a descrições curtas no menu de pausa, e o design de missões frequentemente parece apenas seguir uma lista de tarefas.
        </p>
        <p>
          O publishing director da Larian, Michael Douse, fez comentário crítico chamando o jogo de "amalgamação cínica de mecânicas emprestadas", mas depois ressaltou que o jogo é "genuinamente divertido" — uma avaliação que captura bem a divisão da crítica: o jogo impressiona na execução mesmo quando decepciona na originalidade conceitual.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { aspecto: "Narrativa", desc: "A história de Kliff e os Greymanes foi o ponto mais polarizador. Game Informer disse que falta uma narrativa significativa. GameSpot escreveu que a história não é ruim, mas também não é particularmente cativante. Eventos e personagens são mencionados sem contexto adequado no fluxo da campanha.", nota: "⚠️ Crítica comum" },
            { aspecto: "Controles", desc: "Os controles foram o maior problema técnico de lançamento — tanto no gamepad quanto no teclado/mouse. A Pearl Abyss respondeu com patches progressivos (1.00.03, 1.02.00, 1.03.00, 1.04.00), melhorando continuamente. O Patch 1.04.00 adicionou presets de controle personalizados.", nota: "✅ Muito melhorado nos patches" },
            { aspecto: "Gestão de Inventário", desc: "A falta de baús de armazenamento inicialmente (adicionados em 1.00.03 e expandidos em patches posteriores) causou frustração. O Patch 1.04.00 adicionou função 'Lock' para itens, novas abas de categorias e o Kuku Cooler, facilitando muito a organização.", nota: "✅ Amplamente resolvido" },
            { aspecto: "Dificuldade", desc: "O Game Informer classificou as batalhas de boss como 'algumas das mais frustrantes que já encontrei'. Após muito feedback, o Patch 1.04.00 adicionou modos de dificuldade oficiais: Easy, Normal e Hard, atendendo ao pedido mais votado da comunidade desde o lançamento.", nota: "✅ Resolvido no Patch 1.04.00" },
          ].map((item) => (
            <div key={item.aspecto} className="bg-card rounded-xl border border-amber-500/20 p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-amber-400">{item.aspecto}</h4>
                <span className="text-xs">{item.nota}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MessageSquare className="h-7 w-7 text-geek" />O Que os Jogadores Disseram (Steam e Metacritic)
        </h2>
        <p>
          A recepção dos jogadores foi muito mais positiva que a da crítica — e melhorou significativamente com os patches. No lançamento, o Steam mostrava rating "Mixed", que subiu para "Mostly Positive" já na primeira semana e chegou a <strong>"Very Positive" (87% de aprovação) com mais de 139 mil análises</strong> em abril. No Metacritic, usuários definiram o jogo como "um diamante bruto" — uma expressão que captura bem tanto o potencial quanto as imperfeições do lançamento.
        </p>
        <p>
          A divergência entre crítica (Metacritic 78) e jogadores (Steam 87%) é a maior história do lançamento: ambos estão certos, mas medem coisas diferentes. Críticos avaliaram Crimson Desert contra os benchmarks do gênero — Elden Ring, The Witcher 3, Breath of the Wild. Jogadores avaliaram quantas horas passaram felizes explorando Pywel. As duas métricas são válidas e não se contradizem — simplesmente respondem perguntas diferentes.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-5">
          <h3 className="font-bold text-geek mb-3">📊 Comparativo: Crítica vs Jogadores (abril 2026)</h3>
          <div className="space-y-3">
            {[
              { label: "Metacritic (críticos)", valor: 78, max: 100 },
              { label: "OpenCritic", valor: 80, max: 100 },
              { label: "Steam (usuários) — Very Positive", valor: 87, max: 100 },
              { label: "Metacritic User Score", valor: 82, max: 100 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-bold text-geek">{item.valor}/100</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-geek rounded-full" style={{ width: `${item.valor}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-geek" />O Impacto Financeiro e o Contexto de Mercado
        </h2>
        <p>
          As ações da Pearl Abyss caíram <strong>28,96%</strong> na bolsa sul-coreana no dia 19 de março de 2026, após as notas ficarem abaixo das expectativas internas (mid-to-high 80s). No dia seguinte, houve queda adicional de <strong>9,78%</strong>. Porém, com o anúncio de 3 milhões de cópias em 25 de março, as ações recuperaram <strong>27,76%</strong>.
        </p>
        <p>
          O custo de desenvolvimento foi estimado em <strong>200 bilhões de KRW</strong> (~$133 milhões USD) ao longo de aproximadamente 7 anos. Com 5 milhões de cópias vendidas a uma média de $60-70 USD, a receita bruta estimada supera $300 milhões USD — o que faz de Crimson Desert um sucesso financeiro expressivo, independentemente das notas abaixo do esperado internamente.
        </p>
        <p>
          O contexto de mercado é importante: em 2026, as maiores franquias AAA — GTA VI ainda sem data, Zelda sem novo título confirmado — deixaram um vácuo no segmento de RPG de ação de alto orçamento. Crimson Desert chegou num momento de apetite elevado por novos mundos para explorar, o que explica parte de seu sucesso comercial mesmo com notas medianas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-geek" />Crimson Desert Vale a Pena em Abril de 2026?
        </h2>
        <p>
          Com os patches pós-lançamento — especialmente o <strong>1.04.00</strong> de 22 de abril — as principais queixas técnicas e de acessibilidade foram endereçadas. Modos de dificuldade Easy/Normal/Hard, novos pets, presets de controle, arma exclusiva para Damiane, função Lock no inventário e novas habilidades para os 3 personagens tornam o jogo muito mais acessível do que no lançamento.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><ThumbsUp className="h-4 w-4" />Compre se você...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Aprecia combates viscerais e satisfatórios</li>
              <li>• Quer um mundo aberto enorme para explorar com dezenas de horas de conteúdo lateral</li>
              <li>• Não se importa com história mais simples em troca de gameplay sólido</li>
              <li>• Tem paciência para a curva de aprendizado (ou jogue no Easy)</li>
              <li>• Gosta de grindar, construir personagem e melhorar progressivamente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3 flex items-center gap-2"><ThumbsDown className="h-4 w-4" />Considere se você...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Prioriza narrativa rica e personagens profundos acima de tudo</li>
              <li>• Tem baixa tolerância a sistemas complexos e inventário extenso</li>
              <li>• Usa GPU Intel Arc (suporte básico disponível, mas ainda instável)</li>
              <li>• Prefere esperar mais patches ou promoções de fim de ano</li>
              <li>• Busca experiência equivalente a The Witcher 3 em qualidade narrativa</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Crimson Desert não foi o "próximo Zelda" que a hype prometia, mas é um RPG de ação ambicioso que melhorou consideravelmente desde o lançamento. Com <strong>5 milhões de cópias vendidas</strong>, suporte ativo com patches frequentes e avaliação "Very Positive" no Steam (87%), o jogo demonstrou que vendas e satisfação dos jogadores podem divergir completamente das notas da crítica especializada. A Pearl Abyss confirmou que não há DLC planejado — o foco é em updates de qualidade de vida, com cronograma de patches mensais mantido consistentemente desde março.
        </p>
      
      <h2 className="text-2xl font-bold mt-10 mb-4">Análise Detalhada do Sistema de Combate</h2>
      <p>
        O sistema de combate de Crimson Desert, construído sobre a BlackSpace Engine proprietária da Pearl Abyss, oferece uma das experiências mais viscerais e tecnicamente impressionantes do gênero de RPG de ação em 2026. A combinação de física realista, múltiplas armas com movesets distintos e o sistema único de aprendizado contextual de habilidades — onde Kliff aprende novos movimentos observando inimigos em combate — cria uma profundidade que poucos jogos do gênero conseguem replicar.
      </p>
      <p>
        Críticos especializados destacaram consistentemente os confrontos com bosses como o ponto mais alto da experiência de combate, com comparações frequentes a Shadow of the Colossus pela escala e impacto visual dos encontros. A evolução do sistema através dos patches pós-lançamento — especialmente as melhorias de lock-on no Patch 1.03.00 — demonstrou comprometimento da Pearl Abyss em refinar continuamente a experiência principal do jogo.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">O Mundo de Pywel Como Personagem Próprio</h2>
      <p>
        Um dos aspectos mais elogiados unanimemente por críticos e jogadores é a sensação de vivacidade do mundo de Pywel. Com 80 a 110 km² de área explorável dividida em cinco regiões distintas — cada uma com identidade visual, climática e cultural própria — o mundo funciona quase como personagem independente da narrativa principal, recompensando exploração com conteúdo de qualidade surpreendente mesmo em áreas consideradas "secundárias" pela estrutura de missões.
      </p>
      <p>
        A TheGamer, em sua análise extensa de 150 horas de gameplay, destacou especificamente como eventos aleatórios e encontros não-scriptados frequentemente superavam em qualidade missões da campanha principal — um testemunho da atenção ao detalhe que a equipe de design de mundo da Pearl Abyss dedicou a cada canto do mapa, mesmo em áreas que a maioria dos jogadores casuais nunca chegaria a visitar completamente.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Perspectivas Para o Futuro do Título</h2>
      <p>
        Com a confirmação de que não haverá DLC pago — apenas atualizações gratuitas de qualidade de vida — a Pearl Abyss sinaliza estratégia de longo prazo focada em maximizar satisfação da base atual de jogadores em vez de monetização adicional imediata. Essa abordagem, embora limite receita potencial a curto prazo, tem se mostrado eficaz para construir lealdade de comunidade e boca a boca positivo que pode beneficiar vendas continuadas e futuras entradas na franquia, caso a Pearl Abyss decida expandir o universo de Pywel em projetos subsequentes.
      </p>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">Comparando Crimson Desert com Outros Lançamentos de Mundo Aberto Recentes</h2>
      <p>
        No contexto mais amplo de RPGs de mundo aberto lançados na primeira metade de 2026, Crimson Desert se destaca pela escala de seu mapa e pela qualidade técnica visual, mesmo enfrentando críticas legítimas sobre profundidade narrativa que jogos como Baldur's Gate 3 ou mesmo entradas anteriores da franquia The Witcher conseguiram entregar de forma mais consistente. Essa comparação não diminui os méritos técnicos do título, mas contextualiza adequadamente onde Crimson Desert se posiciona no espectro de prioridades de design entre diferentes desenvolvedoras do gênero.
      </p>
      <p>
        Para jogadores que valorizam primariamente exploração, combate satisfatório e impacto visual acima de narrativa profunda, Crimson Desert oferece uma das experiências mais completas disponíveis atualmente. Para quem prioriza história e desenvolvimento de personagens como elemento central da experiência de RPG, outros títulos do mercado atual podem satisfazer melhor essas expectativas específicas — uma diferenciação importante que ajuda potenciais compradores a calibrar adequadamente suas próprias prioridades antes da decisão de compra.
      </p>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">Considerações Finais Sobre o Fenômeno Comercial</h2>
      <p>
        O caso de Crimson Desert demonstra que sucesso comercial massivo e recepção crítica mediana podem coexistir sem contradição quando o produto entrega experiência genuinamente satisfatória para seu público-alvo específico, independentemente de não atingir excelência em todos os aspectos avaliados pela crítica especializada tradicional. Para a Pearl Abyss, esse primeiro grande experimento em RPG single-player AAA representa fundação sólida sobre a qual experiências futuras da empresa podem ser construídas com aprendizados valiosos sobre o que funcionou e o que precisa de refinamento.
      </p>
    
      <p>
        À medida que mais patches forem lançados ao longo de 2026, é provável que a percepção geral do título continue melhorando, consolidando ainda mais a posição de Crimson Desert como um dos lançamentos comercialmente mais bem-sucedidos do ano, independentemente das ressalvas críticas iniciais sobre profundidade narrativa.
      </p>
    
      <p>
        Para investidores e analistas acompanhando o desempenho de longo prazo da Pearl Abyss, os próximos trimestres serão decisivos para confirmar se este sucesso comercial inicial se traduz em sustentabilidade financeira duradoura para a empresa sul-coreana no competitivo mercado global de RPGs de ação.
      </p>
    
      <p>
        Por ora, os números falam por si: cinco milhões de cópias, avaliação Very Positive e uma comunidade de jogadores engajada são resultados que qualquer estúdio gostaria de replicar em seus próprios lançamentos futuros.
      </p>
    </div>

      <EditorialTake category="geek" title="Análise: Crimson Desert Prova que Metacritic Não é Tudo">
        <p>O lançamento de Crimson Desert vai entrar nos livros de história dos games como estudo de caso da divergência entre crítica e público. Um Metacritic 78 que gera 5 milhões de cópias vendidas, 276 mil jogadores simultâneos e 87% de aprovação no Steam conta uma história que notas numéricas não conseguem capturar. <strong>O jogo não é perfeito — a narrativa é fraca e os sistemas inicialmente caóticos são reclamações legítimas</strong>. Mas Crimson Desert entregou algo que muitos AAAs perfeitos tecnicamente não conseguem: a sensação de explorar um mundo que parece vivo, de combater inimigos que exigem respeito, de descobrir algo inesperado ao virar cada curva de Pywel. A Pearl Abyss respondeu com patches rápidos e efetivos. O resultado, em abril de 2026, é um jogo substancialmente melhor do que saiu no lançamento — e o número de jogadores continuando a jogar sugere que Pywel tem muito mais a oferecer do que os primeiros reviews indicaram.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Crimson Desert — Metacritic PC (78)",
            url: "https://www.metacritic.com/game/crimson-desert/",
            publisher: "Metacritic",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — Steam Store (Very Positive, 87%)",
            url: "https://store.steampowered.com/app/1277400/Crimson_Desert/",
            publisher: "Valve / Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Atinge 5 Milhões de Cópias — Pearl Abyss",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=179",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Patch Notes 1.04.00",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=182",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — OpenCritic (80, Strong)",
            url: "https://opencritic.com/game/16847/crimson-desert",
            publisher: "OpenCritic",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Review — Forbes (9.5/10)",
            url: "https://www.forbes.com/sites/games/2026/03/19/crimson-desert-review/",
            publisher: "Forbes",
            accessedAt: "Abril 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="crimson-desert-vendas-review-completo-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-vendas-review-completo-2026" postTitle="Crimson Desert: 5 Milhões de Cópias, Metacritic 78 e Review Completo" category="geek" />
    </article>
  );
};

export default CrimsonDesertVendasReview;
