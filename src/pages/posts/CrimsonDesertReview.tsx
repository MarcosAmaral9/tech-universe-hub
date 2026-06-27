import { useState, useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Star, ThumbsUp, ThumbsDown, AlertTriangle, BarChart3, TrendingUp, MessageSquare } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonReviewImg from "@/assets/crimson-desert-review.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CrimsonDesertReview = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-review-2026", "Crimson Desert Review 2026", "geek");
  }, []);

  const scores = [
    { outlet: "Forbes",       score: "9.5/10", color: "text-green-400" },
    { outlet: "DualShockers", score: "9.5/10", color: "text-green-400" },
    { outlet: "TechRadar",    score: "8/10",   color: "text-green-400" },
    { outlet: "GamesRadar+",  score: "4/5",    color: "text-green-400" },
    { outlet: "PC Gamer",     score: "8/10",   color: "text-green-400" },
    { outlet: "Game Rant",    score: "8/10",   color: "text-green-400" },
    { outlet: "GameSpot",     score: "7/10",   color: "text-yellow-400" },
    { outlet: "TheGamer",     score: "4/5",    color: "text-yellow-400" },
    { outlet: "Screen Rant",  score: "7/10",   color: "text-yellow-400" },
    { outlet: "IGN",          score: "6/10 *", color: "text-yellow-400" },
  ];

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Review</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: O Que os Críticos Disseram — Notas, Pontos Fortes e Fracos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="17 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonReviewImg} alt="Crimson Desert review 2026" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert foi lançado em <strong>19 de março de 2026</strong> e o embargo de reviews foi levantado no mesmo dia. O resultado: um jogo amplamente elogiado por ambição, escala e combate — mas dividido pela fraqueza da narrativa, inventário confuso e excesso de sistemas. <strong>Metacritic PC: 78</strong>. <strong>OpenCritic: 80</strong> ("Strong", 81% dos críticos recomendam).
        </p>

        <div className="not-prose my-8">
          <AdLeaderboard className="my-8" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" /> Notas da Crítica Especializada
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {scores.map(({ outlet, score, color }) => (
              <div key={outlet} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">{outlet}</span>
                <span className={`text-2xl font-bold ${color}`}>{score}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * IGN publicou nota provisória de 6/10 após 110 horas com o jogo ainda inacabado. Metacritic PC: 78. OpenCritic: 80, 81% de recomendação. No Steam, o jogo atingiu pico de <strong>248.530 jogadores simultâneos</strong> no lançamento e bateu novo recorde de <strong>276.261 simultâneos</strong> com o Patch 1.01.00 (30/03/2026), chegando ao 3º mais jogado do Steam naquele domingo. O jogo vendeu <strong>5 milhões de cópias em menos de um mês</strong> (PC, PS5 e Xbox), com avaliação <strong>Very Positive (87%)</strong> e mais de 139 mil análises na Steam até abril de 2026.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ThumbsUp className="h-7 w-7 text-green-400" />O Que os Críticos Elogiaram
        </h2>
        <p>
          O consenso positivo converge em torno de três pontos: o <strong>mundo aberto de Pywel</strong>, o <strong>sistema de combate</strong> e a <strong>escala do conteúdo</strong>. A GamesRadar+ descreveu Crimson Desert como "confuso, mas à medida que você desvenda sua mecânica e compensa suas falhas, elementos de genialidade e maravilha tornam a experiência válida." A PC Gamer chamou de "um dos jogos mais interessantes" que a crítica já jogou. Forbes e DualShockers foram os mais entusiastas, com 9.5/10 cada. O Destructoid encontrou o jogo "impossível de largar uma vez que você começa." O Press Start o chamou de "imperfeito, mas impressionante o suficiente para estar próximo dos grandes do gênero."
        </p>
        <p>
          A TheGamer foi além e jogou <strong>150 horas</strong> sem esgotar o conteúdo disponível — um sinal claro de que a amplitude do mundo de Pywel é genuína, não superficial. O vice deu nota máxima (5/5), descrevendo o jogo como "o negócio de verdade" e elogiando especialmente a exploração e o senso de descoberta fora do caminho principal. Múltiplos críticos compararam os confrontos com bosses a Shadow of the Colossus pela escala e impacto visual — algo raro em jogos de mundo aberto.
        </p>

        <div className="not-prose my-6 p-5 bg-green-500/10 rounded-xl border border-green-500/20">
          <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" /> Pontos Fortes (consenso da crítica)
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Mundo aberto vasto e vivo</strong> — Pywel tem múltiplas regiões com climas, facções e ecossistemas distintos; mapa que dobra o tamanho de outros open worlds do gênero segundo vários críticos</li>
            <li>• <strong className="text-foreground">Combate profundo e satisfatório</strong> — bosses épicos comparados a Shadow of the Colossus por vários críticos; sistema de combate descrito como visceral e imediatamente satisfatório</li>
            <li>• <strong className="text-foreground">Tecnologia visual de ponta</strong> — BlackSpace Engine entrega física de fluidos, iluminação e destruição impressionantes; considerado um dos jogos mais bonitos da geração</li>
            <li>• <strong className="text-foreground">Volume de conteúdo enorme</strong> — TheGamer jogou 150 horas e ainda não havia esgotado o jogo; múltiplas atividades paralelas sem relação com a missão principal</li>
            <li>• <strong className="text-foreground">Exploração recompensadora</strong> — segredos, masmorras e encontros fora do caminho principal frequentemente surpreendem com qualidade acima do esperado para conteúdo secundário</li>
            <li>• <strong className="text-foreground">Pico de 276 mil jogadores simultâneos</strong> — recorde batido com o Patch 1.01.00, demonstrando retenção de público rara em jogos que recebem crítica dividida</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ThumbsDown className="h-7 w-7 text-red-400" />O Que os Críticos Criticaram
        </h2>
        <p>
          O GameSpot resumiu bem o campo contrário: parte do impulso narrativo fica limitado a descrições curtas no menu de pausa, e o design de missões frequentemente parece apenas seguir uma lista de tarefas. A Screen Rant foi mais dura, descrevendo Crimson Desert como "vítima de sua própria ambição." A IGN apontou o inventário como um dos maiores problemas. O publishing director da Larian, Michael Douse, chamou o jogo de "amalgamação cínica de mecânicas emprestadas", mas depois ressaltou que o jogo é genuinamente divertido — e não é de forma alguma ruim.
        </p>
        <p>
          A narrativa foi o ponto mais consistentemente criticado: múltiplos veículos apontaram que Kliff como protagonista tem motivações superficiais e que o enredo principal não sustenta as dezenas de horas necessárias para completá-lo. A comparação implícita com jogos como The Witcher 3 — em que a narrativa e o mundo aberto se complementam — funcionou contra Crimson Desert, cujo ponto forte (o mundo) não é sustentado por uma história equivalente.
        </p>

        <div className="not-prose my-6 p-5 bg-red-500/10 rounded-xl border border-red-500/20">
          <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
            <ThumbsDown className="h-4 w-4" /> Pontos Fracos (consenso da crítica)
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Narrativa fraca</strong> — história e personagens pouco desenvolvidos; motivações de Kliff superficiais ao longo das dezenas de horas de jogo</li>
            <li>• <strong className="text-foreground">Inventário frustrante</strong> — poucos slots, tudo ocupa espaço, interface pouco intuitiva (muito melhorado nos patches 1.00.03 e 1.04.00)</li>
            <li>• <strong className="text-foreground">Design de missões repetitivo</strong> — muitas fetch quests e objetivos que parecem "marcar uma lista" sem desenvolvimento narrativo</li>
            <li>• <strong className="text-foreground">Excesso de sistemas sobrepostos</strong> — curva de aprendizagem elevada com pouca tutorização adequada para os múltiplos sistemas em paralelo</li>
            <li>• <strong className="text-foreground">Controles no lançamento</strong> — muito melhorados desde então via patches; modos de dificuldade Easy/Normal/Hard adicionados no Patch 1.04.00</li>
            <li>• <strong className="text-foreground">Lock-on problemático em bosses grandes</strong> — corrigido no Patch 1.03.00; lock não aplicado mais em bosses muito grandes onde causava problemas de câmera</li>
          </ul>
        </div>

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">Impacto financeiro:</strong> as ações da Pearl Abyss caíram <strong>28,96%</strong> na bolsa sul-coreana no dia 19/03/2026, após as notas ficarem abaixo das expectativas internas (mid-to-high 80s). No dia seguinte, houve queda adicional de <strong>9,78%</strong>. Porém, com o anúncio de 3M de cópias, as ações recuperaram <strong>27,76%</strong> em 25/03. O custo de desenvolvimento foi estimado em <strong>200 bilhões de KRW</strong> (~$133 milhões USD) ao longo de aproximadamente 7 anos.
          </div>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />A Divergência Crítica vs Público
        </h2>
        <p>
          Talvez o dado mais revelador do lançamento de Crimson Desert seja a diferença entre a recepção da crítica especializada (Metacritic 78) e a dos jogadores no Steam (87% Very Positive com 139 mil análises). Essa divergência de quase 10 pontos é significativa — e conta uma história diferente da manchete "nota abaixo do esperado."
        </p>
        <p>
          Os críticos profissionais avaliaram Crimson Desert com o contexto de dezenas de outros jogos em mente, especialmente os benchmarks do gênero — Elden Ring, The Witcher 3, Breath of the Wild. Nesses comparativos, a narrativa fraca e os sistemas excessivos pesam. Os jogadores, por outro lado, avaliaram a experiência como produto isolado: "Passei 150 horas explorando Pywel e não me arrependo" é um sentimento recorrente nas análises positivas do Steam.
        </p>
        <p>
          O fato de o jogo ter chegado "Mixed" no Steam no lançamento — por conta dos problemas de controles — e recuperado para "Very Positive" em semanas demonstra que a Pearl Abyss respondeu com agilidade às críticas técnicas. Isso também inflacionou a percepção positiva dos jogadores: quem voltou após os patches avaliou a experiência melhorada, não o lançamento problemático.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-5">
          <h3 className="font-bold text-geek mb-3 flex items-center gap-2"><TrendingUp className="h-5 w-5" />Comparativo: Crítica vs Jogadores (abril 2026)</h3>
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
          <MessageSquare className="h-7 w-7 text-geek" />O Contexto dos 7 Anos de Desenvolvimento
        </h2>
        <p>
          Crimson Desert foi anunciado originalmente em 2020, com o primeiro trailer revelado na The Game Awards de dezembro daquele ano. O jogo passou por cerca de 7 anos de desenvolvimento, com um custo estimado de 200 bilhões de KRW (aproximadamente $133 milhões de dólares americanos). Em 2021, a Pearl Abyss adiou indefinidamente para "revisão criativa", gerando especulação sobre cancelamento.
        </p>
        <p>
          O retorno em 2023–2024, com novos trailers mostrando um jogo fundamentalmente diferente do conceito original (que parecia mais próximo de um survival/MMORPG), revelou que a empresa havia reorientado completamente a visão do projeto. O produto final é um RPG de ação single-player — algo que a Pearl Abyss nunca havia feito antes em escala AAA. Essa inexperiência com o gênero explica tanto os acertos técnicos (tecnologia visual, combate) quanto as falhas (narrativa, design de missões).
        </p>
        <p>
          A Pearl Abyss confirmou que não há DLC planejado — o foco pós-lançamento será inteiramente em updates gratuitos de qualidade de vida. Com o ritmo de patches mensais (1.00.03, 1.01.00, 1.02.00, 1.03.00, 1.04.00 entre março e abril de 2026), a empresa demonstrou compromisso com melhorias contínuas, o que tem sido refletido positivamente nas avaliações da comunidade.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Vale a Pena Comprar? (Atualizado — Abril 2026)</h2>
        <p>
          Com os patches lançados desde março — especialmente o <strong>1.04.00 de 22 de abril</strong>, que adicionou modos de dificuldade Easy/Normal/Hard — muitas das principais críticas do lançamento foram endereçadas. O jogo que chegou "Mixed" no Steam agora é "Very Positive" (87% com 139 mil análises). A situação melhorou substancialmente para jogadores que se frustraram com controles e dificuldade no lançamento.
        </p>
        <p>
          A recomendação mais equilibrada da crítica veio da GamesRadar+: "Dedique tempo para sair do caminho principal e descubra quais de suas muitas facetas te atraem, e você encontrará um jogo muito melhor como sandbox do que como história." Com R$ 349,90 no lançamento (Standard) ou $69,99 USD na Steam global, é um jogo que justifica o preço para fãs de mundo aberto e combate. A Pearl Abyss confirmou que <strong>não há DLC planejado</strong> — o suporte continuará via updates gratuitos.
        </p>
      
      <h2 className="text-2xl font-bold mt-10 mb-4">A Importância dos Primeiros 30 Dias Pós-Lançamento</h2>
      <p>
        Para qualquer AAA moderno, os primeiros 30 dias após o lançamento são cruciais tanto comercialmente quanto para a percepção pública de longo prazo. Crimson Desert demonstrou trajetória interessante nesse período: vendas robustas desde o primeiro dia, seguidas por recepção inicial mista no Steam que gradualmente melhorou conforme a Pearl Abyss respondia rapidamente com patches corretivos. Essa janela inicial crítica determinou em grande parte como o título seria percebido e discutido pela comunidade nos meses seguintes.
      </p>
      <p>
        Comparado a outros lançamentos recentes que enfrentaram períodos similares de ajuste pós-lançamento, a velocidade de resposta da Pearl Abyss — com primeiro patch significativo chegando em menos de duas semanas — destacou-se positivamente frente a padrões da indústria, onde correções substanciais frequentemente demoram meses para serem implementadas após identificação inicial de problemas pela comunidade de jogadores.
      </p>
    
      <p>
        Para analistas de mercado e desenvolvedores observando esse caso de estudo, a lição principal parece clara: capacidade de resposta rápida e transparente com a comunidade pode efetivamente reverter narrativas negativas iniciais, desde que os problemas identificados sejam genuinamente corrigíveis através de ajustes técnicos e de design viáveis dentro de cronograma razoável.
      </p>
    
      <h2 className="text-2xl font-bold mt-10 mb-4">O Papel da Mídia Especializada na Narrativa de Recuperação</h2>
      <p>
        Veículos de imprensa especializada desempenharam papel importante em documentar e amplificar a trajetória de melhoria de Crimson Desert ao longo dos meses pós-lançamento. Artigos de acompanhamento publicados por sites como IGN, GameSpot e PC Gamer, revisitando o jogo após patches significativos, ajudaram a comunicar à audiência mais ampla que os problemas iniciais haviam sido genuinamente endereçados, contribuindo para a recuperação de reputação que se refletiu posteriormente nos números de avaliação do Steam.
      </p>
      <p>
        Esse tipo de cobertura de acompanhamento, menos comum na cultura de reviews tradicional focada primariamente em avaliações de lançamento, representa tendência crescente e bem-vinda de jornalismo de games mais responsável que reconhece a natureza evolutiva de produtos de software complexos como jogos AAA modernos, que frequentemente continuam sendo refinados substancialmente muito além da janela inicial de lançamento comercial.
      </p>
    
      <p>
        Para a indústria de games observando de fora, o caso Crimson Desert se tornará certamente referência frequentemente citada em discussões futuras sobre estratégias eficazes de recuperação pós-lançamento através de comunicação transparente e atualizações técnicas consistentes.
      </p>
    
      <p>
        Resta apenas observar se outras desenvolvedoras adotam abordagem similar de transparência e resposta rápida ao feedback da comunidade em seus próprios lançamentos futuros.
      </p>
    
      <p>
        Por enquanto, a Pearl Abyss já garantiu seu lugar como exemplo positivo de gerenciamento de crise comercial através de execução técnica consistente e diálogo aberto com sua base de jogadores ao longo dos últimos meses.
      </p>
    
      <p>
        Esse case de sucesso continuará sendo referenciado em análises futuras sobre desenvolvimento de games AAA.
      </p>
    </div>

      <EditorialTake category="geek" title="Análise: Crimson Desert — O Primeiro AAA da Pearl Abyss é uma Vitória Imperfeita">
        <p>Criticar Crimson Desert comparando ao Elden Ring ou ao Witcher 3 é uma armadilha. A Pearl Abyss nunca fez um jogo assim antes — e que o resultado seja um RPG de ação com 5 milhões de cópias vendidas, 276 mil jogadores simultâneos no Steam e 87% de aprovação da comunidade fala muito sobre o que foi entregue. A narrativa fraca e os sistemas excessivos são falhas reais, mas <strong>são falhas de um jogo ambicioso demais, não de um jogo descuidado</strong>. O mundo de Pywel tem mais vida, detalhe técnico e conteúdo surpresa do que a maioria dos concorrentes — e isso conta. A divergência entre a nota da crítica (78) e a dos jogadores (87) não é a crítica errada: é uma medição diferente. Uma avalia Crimson Desert contra o estado da arte do gênero. A outra avalia quantas horas você vai passar feliz explorando. As duas têm razão.</p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Crimson Desert — Metacritic PC",
            url: "https://www.metacritic.com/game/crimson-desert/",
            publisher: "Metacritic",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Review — PC Gamer (8/10)",
            url: "https://www.pcgamer.com/reviews/crimson-desert-review/",
            publisher: "PC Gamer",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Review — GameSpot (7/10)",
            url: "https://www.gamespot.com/reviews/crimson-desert-review/1900-6418330/",
            publisher: "GameSpot",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — OpenCritic (80, Strong)",
            url: "https://opencritic.com/game/16847/crimson-desert",
            publisher: "OpenCritic",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert — Steam Store (87% Very Positive)",
            url: "https://store.steampowered.com/app/1277400/Crimson_Desert/",
            publisher: "Valve / Pearl Abyss",
            accessedAt: "Abril 2026",
          },
          {
            title: "Crimson Desert Patch Notes 1.04.00 — Pearl Abyss",
            url: "https://www.crimsondesert.com/news/detail?boardNo=1001&articleNo=182",
            publisher: "Pearl Abyss",
            accessedAt: "Abril 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="crimson-desert-review-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-review-2026" postTitle="Crimson Desert: Review 2026" category="geek" />
    </article>
  );
};

export default CrimsonDesertReview;
