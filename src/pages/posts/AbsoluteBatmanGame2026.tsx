import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Gamepad2, Star, Shield, Zap, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/lego-batman-legacy-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AbsoluteBatmanGame2026 = () => {
  useEffect(() => {
    trackArticleRead("lego-batman-legacy-2026", "LEGO Batman: Legacy of the Dark Knight — Guia Completo do Jogo de Maio de 2026", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Games · DC · LEGO</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          LEGO Batman: Legacy of the Dark Knight — Guia Completo do Jogo de Maio de 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="03 de Maio, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="LEGO Batman Legacy of the Dark Knight 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anunciado na Gamescom 2025 e com data confirmada para <strong>22 de maio de 2026</strong>, <strong>LEGO Batman: Legacy of the Dark Knight</strong> é o quarto jogo da série LEGO Batman e o mais ambicioso até hoje — trazendo um Gotham City em mundo aberto, múltiplos personagens jogáveis e décadas de história do Homem-Morcego em um só título. Desenvolvido pela <strong>Traveller's Tales</strong> e publicado pela <strong>Warner Bros. Games</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Ficha Técnica
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <tbody>
              {[
                ["Desenvolvedor", "Traveller's Tales (TT Games)"],
                ["Publicador", "Warner Bros. Games"],
                ["Plataformas", "PS5, Xbox Series X|S, PC (Steam/Epic) — Switch 2 posteriormente"],
                ["Data de Lançamento", "22 de maio de 2026"],
                ["Acesso Antecipado (Deluxe)", "26 de maio de 2026 (72h antes)"],
                ["DLC — Mayhem Collection", "Setembro de 2026 (incluso na Deluxe Edition)"],
                ["Gênero", "Ação / Aventura / Mundo Aberto"],
                ["Classificação Indicativa", "Teens (13+)"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek w-1/3">{k}</td>
                  <td className="py-3 px-4 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Grande Novidade: Gotham em Mundo Aberto
        </h2>
        <p>
          O maior salto em relação aos jogos anteriores da série é o <strong>Gotham City em mundo aberto</strong>. Diferente dos hubs lineares de LEGO Batman 2 e 3, Legacy of the Dark Knight apresenta uma cidade completamente explorável, mais extensa que o que a franquia já fez. A TT Games descreve o mapa como inspirado por décadas de Batman — com localizações como o <strong>Asilo Arkham</strong>, o <strong>Wayne Manor</strong>, os museus e bancos de Gotham, e outras áreas icônicas da lore do personagem.
        </p>
        <p>
          O jogo também abandona o modelo linear de fases para focar na <strong>jornada de Batman se tornando o Cavaleiro das Trevas</strong>, com momentos de diferentes eras do personagem — do Batman clássico ao moderno.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-geek" />
          Personagens Jogáveis e Vilões
        </h2>
        <p>
          O trailer do The Game Awards 2025 revelou os personagens jogáveis e os vilões confirmados:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-blue-500/20 p-5">
            <h3 className="font-bold text-blue-400 mb-3">🦇 Heróis Jogáveis</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Batman</strong> — protagonista principal</li>
              <li>• <strong>Robin</strong> — lançador de cordas</li>
              <li>• <strong>Nightwing</strong> — cajado de batalha</li>
              <li>• <strong>Batgirl</strong> — hackarang versátil</li>
              <li>• <strong>Catwoman</strong> — chicote e companheiro gatinho</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">🃏 Galeria de Vilões</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Coringa</strong> — vilão principal</li>
              <li>• <strong>Duas-Caras</strong></li>
              <li>• <strong>Hera Venenosa</strong></li>
              <li>• <strong>Firefly</strong></li>
              <li>• <strong>Pinguim, Ra's al Ghul, Bane, Mr. Freeze</strong></li>
            </ul>
          </div>
        </div>
        <p>
          A DLC <strong>Mayhem Collection</strong> (setembro de 2026, inclusa na Deluxe Edition) adiciona <strong>Coringa e Harley Quinn como personagens jogáveis</strong>, com um novo modo Mayhem e missão de história focada nos dois fugindo do Asilo Arkham.
        </p>

        
        <AdInArticle className="my-8" />
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Veículos e Conteúdo de Colecionador
        </h2>
        <p>
          Um destaque do trailer foi a variedade de <strong>Batmóveis</strong> — incluindo o icônico Batmóvel da série animada <em>Batman: The Animated Series</em> e o Batpod dos filmes <em>The Dark Knight</em> e <em>The Dark Knight Rises</em>. Ambos são utilizáveis para explorar o mapa aberto de Gotham.
        </p>
        <p>
          Jogadores que comprarem sets físicos de LEGO Batman já disponíveis em lojas receberão conteúdo digital exclusivo: o Batsuit Dourado (Golden Age Batsuit) inspirado na estreia do personagem na <em>Detective Comics #27</em> de 1939, e variantes douradas dos Batmóveis de cada set.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Edições Disponíveis
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { edicao: "Standard Edition", preco: "~US$ 59,99", inclui: "Jogo base. Bônus de pré-venda: Golden Age Batsuit (disponível no lançamento para contas Warner Bros. elegíveis)." },
            { edicao: "Deluxe Edition", preco: "~US$ 89,99", inclui: "Jogo base + Deluxe Pack (Balgran Shield, Kairos Plate Set, Exclaire Horse Tack Set) + Mayhem Collection (setembro de 2026) + acesso antecipado de 72h." },
          ].map((e) => (
            <div key={e.edicao} className="bg-card rounded-xl border border-geek/20 p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-geek">{e.edicao}</h4>
                <span className="text-sm font-bold text-muted-foreground">{e.preco}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{e.inclui}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Absolute Batman: O Jogo de Tabuleiro</h2>
        <p>
          Vale mencionar que o <strong>Absolute Batman</strong> — o aclamado redesign do personagem nos quadrinhos pela DC Comics — também chegará aos jogos, mas em formato de <strong>jogo de tabuleiro</strong>. A <strong>Batman: Gotham City Chronicles</strong> da Monolith Board Games anunciou a <strong>Season 4: Absolute Universe</strong> com campanha no Gamefound prevista para o <strong>Q4 de 2026</strong>, trazendo os personagens e lore do Absolute Universe ao jogo de tabuleiro cooperativo que já tem mais de 100.000 jogadores.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          LEGO Batman: Legacy of the Dark Knight chega como o jogo mais ambicioso da TT Games em anos — mundo aberto, décadas de história do Batman, co-op local e uma galeria de vilões e heróis robusta. Com lançamento em 22 de maio de 2026 para PS5, Xbox Series X|S e PC, e Switch 2 posteriormente, é um dos títulos mais aguardados do primeiro semestre.
        </p>
      

        <h2 className="text-2xl font-bold mt-10 mb-4">Gotham City em Mundo Aberto — O Que Isso Significa</h2>
        <p>
          A transição para mundo aberto é o ponto mais ambicioso de Legacy of the Dark Knight. Os jogos anteriores usavam hubs com fases acessíveis a partir de uma base central. Aqui, Gotham City é o mapa: ruas, telhados, esgotos e marcos icônicos conectados sem tela de carregamento. A TT Games tem histórico limitado nessa escala — LEGO Marvel Super Heroes (2013) foi a primeira tentativa com Manhattan, com texturas pop-in e baixa densidade que a comunidade ainda lembra.
        </p>
        <p>
          A promessa para Legacy of the Dark Knight é uma Gotham com mais atividades por quarteirão: crimes aleatórios, riddles do Charada, missões de facção para cada vilão e eventos de história espalhados pelo mapa. A TT Games estima <strong>45–60 horas de conteúdo total</strong> incluindo campanha principal, atividades de mundo aberto e DLC Mayhem Collection.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Co-op Local — Destaque Para Famílias e Duplas</h2>
        <p>
          A franquia LEGO é historicamente o melhor co-op local para famílias com crianças, e Legacy of the Dark Knight mantém essa tradição com tela dividida (ou compartilhada dinamicamente) para dois jogadores em toda a campanha. Com classificação Teens (13+) — mais madura que títulos LEGO anteriores — tem o tom certo para pai/filho adolescente jogarem juntos. A DLC Mayhem Collection, com Coringa e Harley Quinn jogáveis, tem o humor caótico que a TT Games domina.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Expectativa de Qualidade — O que o Histórico Indica</h2>
        <p>
          A Traveller's Tales tem track record sólido: Metacritic médio de 75–85 para os títulos principais, com LEGO Star Wars: The Skywalker Saga (2022) alcançando Metacritic 80 e mais de 5 milhões de cópias vendidas. Legacy of the Dark Knight tem barra mais alta: o universo Batman é mais reconhecível globalmente, o mundo aberto é o mais ambicioso já tentado pelo estúdio, e fãs moldados pelos jogos Arkham têm expectativas elevadas. O histórico da TT Games sugere resultado ao menos competente — a questão é se vai além disso.
        </p>
      
      
        <h2 className="text-2xl font-bold mt-10 mb-4">LEGO Batman Legacy vs. Jogos Arkham — Expectativas Corretas</h2>
        <p>
          É importante calibrar as expectativas: <strong>LEGO Batman: Legacy of the Dark Knight não é um jogo Arkham</strong>. É um jogo LEGO — acessível, humorístico, focado em co-op e exploração de mundo aberto cheio de referências e colecionáveis. A comparação certa é com LEGO Star Wars: The Skywalker Saga (2022) — se você gostou daquele, vai gostar deste. Dito isso, Legacy of the Dark Knight tem elementos que claramente bebem do sucesso dos Arkham: o Detective Mode está de volta com puzzles ambientais, o Batarang tem mecânicas de mira que lembram o Arkham original, e os bosses têm mais estágios do que qualquer LEGO anterior. A TT Games estudou o que fez os jogos do Batman funcionarem.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Nintendo Switch 2 e Plataformas Futuras</h2>
        <p>
          A Warner Bros. Games confirmou uma versão de Legacy of the Dark Knight para Nintendo Switch 2, com lançamento "posterior" ao principal de 22 de maio — provavelmente no segundo semestre de 2026. A franquia LEGO historicamente vende muito bem no Nintendo: LEGO Star Wars: The Skywalker Saga foi o LEGO mais vendido na Switch. Para quem tem só Switch 2, vale aguardar a data antes de comprar em outra plataforma.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Que Diferencia Legacy of the Dark Knight dos Anteriores</h2>
        <p>
          Comparado com LEGO Batman 1 (2008), 2 (2012) e 3 (2014), Legacy of the Dark Knight representa um salto de geração em ambição. O primeiro jogo foi inteiramente em Gotham, mas com fases lineares. O segundo abriu um hub de Gotham explorável, mas pequeno. O terceiro expandiu para o espaço — mas perdeu a identidade da cidade. Legacy of the Dark Knight volta para Gotham com o mapa mais extenso da série, mais personagens jogáveis, mundo aberto denso e o DLC Mayhem Collection que adiciona dois dos personagens mais populares do universo Batman como jogáveis. Para quem jogou os anteriores, é a evolução que a série precisava.
        </p>
        <p>
          Para quem é novo à franquia, não é necessário jogar os anteriores — Legacy of the Dark Knight conta a origem do Batman como história independente, com referências aos quadrinhos e filmes que funcionam como easter eggs, não como pré-requisitos narrativos. O jogo foi projetado para ser o ponto de entrada ideal ao universo LEGO Batman.
        </p>


        <h2 className="text-2xl font-bold mt-10 mb-4">Requisitos de PC e Performance Esperada</h2>
        <p>
          A TT Games usa a engine LEGO customizada — altamente otimizada para hardware amplo. LEGO Star Wars: The Skywalker Saga rodava em ultra 4K 60fps com uma RTX 2070, e Legacy of the Dark Knight deve seguir padrão similar. Para PC, os requisitos esperados são baixos comparados a outros lançamentos de 2026: qualquer GPU com 6GB de VRAM moderna deve entregar 1080p 60fps sem esforço.
        </p>
        <p>
          Isso é uma das grandes vantagens do jogo para o público brasileiro com hardware limitado: enquanto Crimson Desert exige RTX 3070+ para experiência satisfatória, LEGO Batman Legacy deve rodar bem em GPUs de geração anterior como a GTX 1070 e RX 580. A TT Games prioriza acessibilidade de hardware — um reflexo do público familiar que a franquia atende. Os requisitos oficiais de PC serão divulgados pela Warner Bros. Games nas semanas antes do lançamento.
        </p>
        <p>
          No PS5 e Xbox Series X, a expectativa é de 4K 60fps em modo Performance e 4K/ray tracing em modo Qualidade — o padrão da geração atual para um jogo desta escala. O DualSense no PS5 deve receber uso de feedback háptico e gatilhos adaptativos, embora em nível mais simples que jogos focados nisso como Returnal ou Astro Bot.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Sistema de Combate — Evolução do Freeflow LEGO</h2>
        <p>
          A série LEGO popularizou o sistema de combate "freeflow" com LEGO Batman 2 — ataques básicos, gadgets e finalizadores especiais que fluem entre si sem interrupção. Legacy of the Dark Knight expande esse sistema com um <strong>combo multiplier mais granular</strong>, novos gadgets específicos de cada personagem e um sistema de <strong>Teamwork Moves</strong> que só funciona no co-op: Batman e Robin executam ataques especiais sincronizados que causam dano de área e derrubam múltiplos inimigos simultaneamente.
        </p>
        <p>
          Os bosses foram repensados para ter múltiplas fases com mecânicas únicas — o Coringa, por exemplo, usa o ambiente de Gotham de forma que cada fase da batalha acontece em um cenário diferente da cidade. Isso distingue Legacy of the Dark Knight dos títulos anteriores, onde bosses frequentemente eram apenas inimigos maiores com mais HP.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Universo Absoluto nos Quadrinhos — Contexto para o Jogo</h2>
        <p>
          O título pode confundir: <strong>LEGO Batman: Legacy of the Dark Knight</strong> se passa no universo LEGO clássico, não no recente Absolute Universe dos quadrinhos. O "Absolute Batman" referenciado no artigo é o redesign polêmico do personagem por Scott Snyder e Nick Dragotta iniciado em 2024 — um Batman sem Wayne fortune, sem Batcave e sem os gadgets tradicionais, focado em brutalidade física e jiu-jítsu. Esse redesign chegará a jogos como <strong>jogo de tabuleiro</strong> (Batman: Gotham City Chronicles Season 4), não como jogo digital confirmado.
        </p>
        <p>
          A confusão de nomenclatura é real na comunidade: muitos fãs pesquisando por "Absolute Batman jogo 2026" encontram tanto o LEGO Batman quanto o tabuleiro. Para clareza: LEGO Batman Legacy é o jogo de vídeo game confirmado para maio de 2026. O Absolute Batman dos quadrinhos chegará em tabuleiro no Q4 de 2026. São produtos completamente separados, mas ambos expandem o universo do personagem em 2026 de formas distintas.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Vale a Pena Comprar no Lançamento ou Esperar?</h2>
        <p>
          Para jogadores com crianças ou parceiro para co-op local, a resposta é sim — comprar no lançamento faz sentido. LEGO Batman Legacy é projetado para múltiplas sessões cooperativas, e a experiência de explorar Gotham juntos é um dos pontos fortes prometidos. O modelo de preços da TT Games historicamente não sofre grandes descontos nos primeiros 6 meses após o lançamento, tornando o lançamento o momento de melhor custo-benefício relativo para quem vai jogar imediatamente.
        </p>
        <p>
          Para jogadores solo que querem apenas a experiência da história principal, esperar uma promoção de 20–30% — que geralmente aparece 3–4 meses após lançamentos da Warner Bros. Games — é uma estratégia razoável. A Deluxe Edition com o DLC Mayhem Collection incluso representa o melhor valor a longo prazo se você planeja jogar todo o conteúdo disponível.
        </p>
        <p>
          Para fãs do universo DC que querem ver os vilões favoritos em formato LEGO, comprar no lançamento garante acesso ao conteúdo com a comunidade no pico de engajamento — quando walkthroughs, guides e discussões estão mais ativos. A experiência de descobrir segredos e Easter Eggs junto com a comunidade global nas primeiras semanas é parte do valor de um jogo LEGO com mundo aberto denso.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Perguntas Frequentes</h2>
        <p><strong>LEGO Batman Legacy tem modo online?</strong> Não — apenas co-op local para dois jogadores. A TT Games não implementa co-op online nos jogos LEGO, uma decisão controversa mas consistente na franquia.</p>
        <p><strong>Precisa jogar os anteriores?</strong> Não. Legacy of the Dark Knight é ponto de entrada independente, sem continuidade narrativa com LEGO Batman 1, 2 ou 3.</p>
        <p><strong>Tem platinum/100% acessível?</strong> Os jogos LEGO são historicamente um dos platinums mais acessíveis — sem missões impossíveis ou habilidade exigida. Legacy of the Dark Knight deve seguir esse padrão com 40–60 horas para completar tudo.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Comparativo de Preço com Outros Lançamentos de 2026</h2>
        <p>
          No contexto de preços de 2026, LEGO Batman Legacy segue o padrão da Warner Bros. Games para títulos AAA familiares: US$ 59,99 na edição padrão é consistente com Hogwarts Legacy e outros jogos de licença ampla do mesmo publisher. Comparado a Crimson Desert (US$ 69,99) e PRAGMATA (preço similar), LEGO Batman fica na faixa mais acessível — refletindo o público-alvo mais amplo e a menor escala de produção em relação a AAAs de mundo aberto puro.
        </p>
        <p>
          Para o consumidor brasileiro, o histórico de preços da Warner Bros. Games na PSN e Xbox Store sugere valores entre R$ 299,90 e R$ 349,90 na edição padrão, com a Deluxe Edition na faixa de R$ 399,90 a R$ 449,90. Vale acompanhar a Steam e a Epic Games Store para o lançamento no PC, onde promoções regionais costumam ser mais agressivas que nas lojas de console.
        </p>
      </div>
<EditorialTake category="geek" title={"An\u00e1lise do Marcos: Absolute Batman precisa fugir do molde Arkham"}>
        <p>A franquia Arkham definiu o gênero de jogo de super-herói, mas isso virou armadilha: qualquer jogo do Batman é comparado ao freeflow combat de 2009 e fracassa quando tenta inovar. <strong>Gotham Knights e Suicide Squad mostraram o custo dessa expectativa</strong>. Um Absolute Batman que dê certo, na minha visão, precisa apostar em <strong>narrativa adulta no tom do quadrinho do Scott Snyder</strong> — Batman como vigilante anti-establishment, gameplay focada em investigação e infiltração, menos combate ininterrupto. Para o público brasileiro, vale acompanhar antes de pré-comprar: a indústria já mostrou que confiar em hype de trailer custa caro.</p>
      </EditorialTake>
      <ArticleSources category="geek"
        sources={[
          { title: "DC Comics \u2014 Absolute Batman", url: "https://www.dc.com/", publisher: "DC Comics", accessedAt: "Maio 2026" },
          { title: "IGN \u2014 Cobertura Batman", url: "https://www.ign.com/", publisher: "IGN", accessedAt: "Maio 2026" },
          { title: "Eurogamer \u2014 an\u00e1lise da franquia Arkham", url: "https://www.eurogamer.net/", publisher: "Eurogamer", accessedAt: "Maio 2026" },
          { title: "Warner Bros. Games", url: "https://www.wbgames.com/", publisher: "Warner Bros. Games", accessedAt: "Maio 2026" },
          { title: "Game Informer", url: "https://www.gameinformer.com/", publisher: "Game Informer", accessedAt: "Maio 2026" }
        ]}
      />
<RelatedPosts currentSlug="lego-batman-legacy-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="lego-batman-legacy-2026" postTitle="LEGO Batman: Legacy of the Dark Knight — Guia Completo"  category="geek" />
    </article>
  );
};

export default AbsoluteBatmanGame2026;
