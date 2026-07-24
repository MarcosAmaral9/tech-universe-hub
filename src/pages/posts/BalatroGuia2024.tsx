import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Star, Zap, Trophy, BookOpen, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo balatro-guia-completo-2024.webp em src/assets/
import heroImg from "@/assets/balatro-guia-completo-2024.webp";

const SLUG = "balatro-guia-completo-2024";
const TITLE =
  "Balatro — Guia Completo: O Roguelike de Pôquer Que Conquistou o Mundo, o Dev Anônimo e Como Chegar ao Ante 8";

const BalatraGuia2024 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Balatro · LocalThunk · Indie · Roguelike · Deck Building
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          {TITLE}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            24 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            15 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="24 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Balatro guia completo LocalThunk roguelike pôquer deck building 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>20 de fevereiro de 2024</strong> para PC, com versões para
          consoles chegando em setembro do mesmo ano, <strong>Balatro</strong> é um roguelike
          de construção de deck baseado em mãos de pôquer desenvolvido por uma única pessoa:
          um programador canadense que se identifica publicamente apenas como{" "}
          <strong>LocalThunk</strong> e mantém anonimato completo de identidade até hoje.
          O jogo vendeu mais de <strong>4 milhões de cópias</strong>, foi indicado ao{" "}
          <strong>Jogo do Ano no The Game Awards 2024</strong> — ao lado de Black Myth:
          Wukong, Astro Bot e Elden Ring: Shadow of the Erdtree —, venceu a categoria de{" "}
          <strong>Melhor Jogo Indie</strong> na mesma cerimônia e se tornou um dos casos
          mais fascinantes de sucesso independente da história recente dos videogames. Com
          uma mecânica central que qualquer pessoa que conhece as mãos básicas de pôquer
          pode entender em cinco minutos mas que revela camadas de profundidade estratégica
          ao longo de dezenas de horas, Balatro criou uma espécie nova de dependência
          cognitiva. Este guia explica o jogo, o desenvolvedor, as mecânicas e como
          sobreviver às Blinds mais difíceis.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          LocalThunk: O Desenvolvedor Mais Famoso Anônimo dos Games
        </h2>
        <p>
          LocalThunk é o pseudônimo de um desenvolvedor de software canadense que passou
          aproximadamente dois anos construindo Balatro nas horas fora do seu emprego
          convencional como programador, antes de largar o trabalho fixo para dedicação
          integral ao jogo nos meses finais antes do lançamento. Suas entrevistas —
          concedidas por escrito e áudio, sempre sem revelar nome ou rosto — descrevem
          uma trajetória comum ao desenvolvimento indie de impacto: projeto paralelo que
          começa como experimento pessoal, cresce além das expectativas iniciais e eventualmente
          exige uma decisão sobre quanto apostar nele.
        </p>
        <p>
          A decisão de manter anonimato foi explicada por LocalThunk em declarações públicas
          como motivada por razões de privacidade pessoal e pelo desejo de manter o foco
          sobre o jogo em vez de sobre sua personalidade. Num mercado onde o marketing
          de jogos indie frequentemente depende de construção de persona do desenvolvedor
          nas redes sociais — streamers, conferências, entrevistas em vídeo —, a estratégia
          de LocalThunk foi incomum e, retrospectivamente, desnecessária: Balatro não
          precisou de uma face pública para se vender. O boca a boca orgânico, amplificado
          por streamers do Twitch que transmitiam partidas longas e viciantes ao vivo,
          criou o tipo de marketing que nenhum orçamento de publicidade consegue comprar.
        </p>
        <p>
          O jogo foi desenvolvido na linguagem Lua usando o framework LÖVE — uma ferramenta
          open-source de desenvolvimento de jogos 2D que é popular entre desenvolvedores
          indie de recursos limitados por sua leveza e acessibilidade, mas que raramente
          é usada como base para projetos com alcance comercial da escala de Balatro.
          A escolha técnica reflete a origem do projeto como experimento pessoal: LocalThunk
          usou as ferramentas que conhecia, não as que o mercado considera padrão para
          jogos com ambição comercial. O resultado é um jogo com gráficos deliberadamente
          simples — cartas de baralho estilizadas com efeito visual de néon e brilho —
          cuja economia visual se tornou parte integral da identidade estética do produto.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          A Mecânica Central: Pôquer Como Base de Roguelike
        </h2>
        <p>
          O pôquer é um jogo de cartas com regras estabelecidas no século XIX que hoje
          tem presença global — estima-se que mais de 100 milhões de pessoas jogam pôquer
          regularmente em alguma forma, segundo dados da World Poker Tour. As mãos básicas
          do jogo — par, dois pares, trinca, sequência, flush, full house, quadra e
          straight flush — são hierarquizadas por raridade de ocorrência num baralho
          padrão de 52 cartas, e essa hierarquia é o que Balatro usa como fundação
          mecânica: cada rodada, o jogador escolhe cartas da mão para jogar uma mão
          de pôquer que gera pontos, e precisa acumular pontos suficientes para vencer
          cada "Blind" (nível) antes de ficar sem tentativas.
        </p>
        <p>
          Mas a genialidade de Balatro não está no pôquer em si — está no que o jogo
          coloca em cima dele. Entre cada rodada, o jogador passa por uma loja onde
          pode comprar "Jokers" — cartas especiais que modificam as regras de pontuação
          de formas radicalmente diferentes umas das outras. Um Joker pode multiplicar
          o valor de toda mão de flush por três; outro pode adicionar pontos extras
          cada vez que um Ás é jogado; outro pode converter todas as cartas de paus em
          cartas de ouros para efeitos de contagem; outro pode dobrar o multiplicador
          final se a mão não contiver cartas de copas. Com capacidade para até cinco
          Jokers ativos simultaneamente, e dezenas disponíveis no pool aleatório de
          cada partida, as combinações possíveis entre eles criam um espaço de
          estratégia praticamente infinito dentro de uma mecânica base que qualquer
          pessoa entende em dois minutos.
        </p>
        <p>
          O resultado é um loop de gameplay que combina dois dos sistemas psicológicos
          mais eficazes para criar engajamento sustentado: a aleatoriedade controlada
          dos roguelikes (cada partida diferente, sempre com elementos de sorte mas
          onde decisões importam) com a satisfação de números crescendo de forma
          exponencial — o "escalation satisfaction" que também aparece em jogos idle
          e em simuladores de clicker, onde ver um número crescer geometricamente em
          vez de aritmeticamente cria uma satisfação cognitiva específica. Balatro
          amplifica esse efeito com Jokers que interagem entre si de formas que
          o jogador descobre progressivamente: uma combinação de três Jokers específicos
          pode fazer uma simples mão de par gerar dezenas de milhões de pontos quando
          o meta era algumas centenas de mil, e a descoberta de cada sinergia
          funcionando pela primeira vez é genuinamente eufórica.
        </p>

        <p>
          O framework LÖVE (pronunciado "love") é um projeto open-source lançado originalmente
          em 2008 por desenvolvedores europeus e mantido por uma comunidade voluntária global.
          É escrito em C++ mas expõe uma API em Lua, tornando o desenvolvimento de jogos 2D
          acessível a programadores com conhecimento da linguagem scripting — muito mais simples
          do que C++ puro mas suficientemente poderosa para projetos com sistemas complexos.
          Outros jogos indie notáveis desenvolvidos com LÖVE incluem títulos distribuídos
          em game jams e pequenos projetos de comunidade, mas nenhum havia atingido a escala
          comercial de Balatro antes de 2024. O sucesso do jogo trouxe atenção significativa
          para o framework, com a comunidade LÖVE registrando aumentos expressivos de interesse
          após o lançamento de Balatro — um efeito colateral positivo que provavelmente inspirará
          outros desenvolvedores a explorar a ferramenta para projetos futuros.
        </p>
        <p>
          Outro aspecto relevante do contexto de desenvolvimento de Balatro é a decisão de
          LocalThunk de fechar parceria com a Playstack como distribuidora — uma empresa
          britânica de publicação de jogos indie que auxilia no marketing, localização e
          distribuição em plataformas de console, áreas onde desenvolvedores solo normalmente
          têm menos experiência e recursos. Essa divisão de trabalho — LocalThunk como
          desenvolvedor único responsável por todo o design e código, Playstack como suporte
          de distribuição e visibilidade — é uma das formas mais comuns que desenvolvedores
          indie de sucesso usam para manter controle criativo integral enquanto acessam
          infraestrutura de mercado que seria impossível construir individualmente. O contrato
          específico entre as partes nunca foi divulgado publicamente, mas o modelo em si
          é amplamente discutido na comunidade de desenvolvimento independente como alternativa
          viável ao autofinanciamento total ou à venda de controle criativo para um publisher
          de grande porte.
        </p>
        <p>
          Uma partida de Balatro é dividida em oito <strong>Antes</strong> — etapas de
          dificuldade crescente. Cada Ante contém três Blinds consecutivos: duas Blinds
          comuns (Small e Big) e uma Boss Blind com uma modificação especial que complica
          as regras de alguma forma. Completar todas as oito Antes equivale a "vencer"
          a partida no modo padrão — mas o jogo oferece modos de dificuldade crescente
          e desafios especiais que estendem a profundidade muito além da primeira vitória.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Elemento</th>
                <th className="text-left py-3 px-4 w-3/4 break-words">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["🃏 Jokers", "Cartas especiais com modificadores únicos — o coração do sistema. Até 5 ativos por vez. Interagem entre si criando sinergias que podem multiplicar pontos exponencialmente."],
                ["🃏 Tarots e Planets", "Cartas consumíveis de uso único. Tarots modificam cartas do baralho (mudam naipe, adicionam características especiais). Planets aumentam o nível de mãos específicas, tornando-as mais pontuadoras."],
                ["🎴 Baralhos Especiais", "Cada partida começa com um baralho de 52 cartas mas baralhos especiais desbloqueáveis mudam a composição — baralho sem cartas de ouros, baralho com cartas extras de Ás, baralho com todos os numerais duplicados."],
                ["💰 Economia de Fichas", "Cada partida tem sua própria economia de fichas (moeda) usada na loja entre Blinds. Guardar fichas ao final de cada rodada gera juros na próxima (1 ficha de juros por 5 fichas guardadas, até 5 fichas de juros por rodada)."],
                ["🏆 Boss Blinds", "Cada terceira Blind tem uma modificação especial: cartas viradas de costas até serem jogadas, descarte desativado, certos naipes não contam, entre dezenas de variações. Requerem adaptação de estratégia em tempo real."],
                ["🃏 Vouchers", "Melhorias permanentes para aquela partida compradas na loja — expandem slots de Jokers, aumentam capacidade de mão, reduzem preços da loja. Mudam fundamentalmente o que é possível construir."],
              ].map(([elem, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold text-sm break-words">{elem}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Estratégias Essenciais Para Chegar ao Ante 8
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🎯 Decida sua estratégia de mão no Ante 1",
              desc: "Balatro funciona melhor quando você decide cedo qual mão vai ser sua fonte primária de pontos — Flush, Straight, Full House ou High Card com muitos Jokers de par. Tentar jogar todas as mãos de forma equilibrada raramente chega longe. Identifique os primeiros Jokers comprados e construa em torno deles.",
            },
            {
              titulo: "💵 Sempre guarde fichas para juros",
              desc: "O sistema de juros — 1 ficha por 5 guardadas, até 5 fichas de bônus por rodada — parece modesto mas é transformador ao longo de uma partida completa. Evite gastar fichas até ter o que realmente precisa; acumular juros ao longo de vários Antes dá vantagem econômica significativa nos Antes finais.",
            },
            {
              titulo: "🗑️ Use descartes estrategicamente",
              desc: "Cada Blind começa com 3 descartes disponíveis. Não os use para otimizar pontuação — use para buscar as cartas específicas que completam a mão ou ativam Jokers situacionais. Guardar descartes para a última jogada raramente ajuda; usar cedo para construir a mão ideal geralmente ajuda mais.",
            },
            {
              titulo: "🃏 Priorize Jokers que escalam com o tempo",
              desc: "Jokers que acumulam tokens ao longo da partida (como o Joker que adiciona multiplicador por cada mão de Flush jogada anteriormente) ficam exponencialmente mais fortes nos Antes finais. Jokers de efeito fixo são úteis cedo mas perdem relevância quando os requisitos de pontuação escalam.",
            },
            {
              titulo: "⚠️ Leia a Boss Blind antes de entrar",
              desc: "Cada Boss Blind mostra sua modificação antes de você confirmar a entrada. Algumas modificações invalidam completamente certas estratégias — um Boss que desativa descarte destrói runs que dependem de busca por cartas específicas. Ajuste sua abordagem ou use vouchers/cartas consumíveis para mitigar antes de entrar.",
            },
            {
              titulo: "🔢 Eleve o nível das suas mãos com Planet Cards",
              desc: "Planet Cards aumentam permanentemente os pontos base de mãos específicas para aquela partida. Se sua estratégia depende de Flush, elevar o nível do Flush com Planet Cards várias vezes cria um multiplicador base que Jokers então amplificam. A combinação de mão elevada com Jokers de multiplicação é o caminho para pontuações de bilhões.",
            },
          ].map(({ titulo, desc }) => (
            <div
              key={titulo}
              className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4"
            >
              <span className="text-xl shrink-0">{titulo.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">
                  {titulo.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trophy className="h-7 w-7 text-geek" />
          Por Que Balatro Foi Indicado ao GOTY ao Lado de Titãs de Orçamento AAA
        </h2>
        <p>
          A indicação de Balatro ao Game of the Year no The Game Awards 2024 — ao lado
          de Black Myth: Wukong (um dos lançamentos comerciais mais massivos do ano),
          Final Fantasy VII Rebirth (jogo de orçamento de centenas de milhões de dólares),
          Elden Ring: Shadow of the Erdtree (expansão de um dos jogos mais premiados de
          sua geração) e Astro Bot (eventual vencedor, produção first-party da Sony) —
          foi um reconhecimento que a comunidade indie aguardava mas que poucos haviam
          previsto com tanta clareza antes do lançamento.
        </p>
        <p>
          A presença de Balatro na lista final não foi surpresa para quem havia acompanhado
          sua trajetória no Twitch ao longo de 2024. O jogo se encaixa perfeitamente num
          tipo de conteúdo de streaming: partidas longas onde o jogador narra suas
          decisões, a tensão de uma Boss Blind com pontuação insuficiente, e os momentos
          de euforia quando uma sinergia de Jokers produz um número absurdo são todos
          intrinsecamente watchable de formas que jogos de narrativa linear raramente
          conseguem replicar. Streamers de grande audiência passaram horas ao vivo em
          Balatro, expondo o jogo a audiências que nunca o teriam descoberto por conta
          própria, e a estrutura de sessão relativamente curta (uma partida completa
          dura entre 30 minutos e algumas horas) foi perfeitamente adaptada para o
          formato de stream que o espectador pode entrar no meio sem perder o contexto.
        </p>
        <p>
          A venda de 4 milhões de cópias por um jogo desenvolvido por uma pessoa,
          sem publisher de grande porte, sem campanha de marketing convencional e
          com gráficos propositalmente simples, é um dos dados mais significativos
          da indústria de games independente de 2024. Ela demonstra que o mercado de
          PC — e progressivamente de consoles — tem capacidade de absorver e recompensar
          massivamente projetos de nicho que encontram seu público, especialmente quando
          o modelo de distribuição digital elimina as barreiras físicas que historicamente
          limitavam o alcance de jogos menores. Para desenvolvedores independentes ao
          redor do mundo, Balatro é um dos casos de referência mais poderosos de que
          uma ideia original e bem executada ainda pode competir com qualquer orçamento.
        </p>
        <p>
          Vale notar também que Balatro recebeu classificação PEGI 18 (adulto) em algumas
          regiões europeias — uma decisão controversa de órgãos reguladores que interpretaram
          os elementos de pôquer do jogo como mecânicas de jogo de azar potencialmente
          problemáticas para menores. LocalThunk e a Playstack (distribuidora que ajudou
          na comercialização do jogo) contestaram essa classificação, argumentando que
          Balatro não envolve dinheiro real em nenhuma circunstância e não reproduz
          as dinâmicas econômicas que tornam o jogo de azar problemático. O debate
          levantou questões legítimas sobre como reguladores estão — ou não estão —
          equipados para classificar mecânicas de videogames que usam referências a
          jogos de cartas tradicionais num contexto completamente diferente de apostas.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você já chegou ao Ante 8? ♠️
          </h3>
          <p className="text-muted-foreground">
            Qual é o seu Joker favorito? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o jogo mais viciante de 2024 e o mais difícil de recomendar"
      >
        <p>
          Difícil de recomendar não porque seja ruim — Balatro é excelente — mas porque
          é genuinamente difícil de parar de jogar. Aquele "mais uma partida" que todo
          roguelike tenta criar, Balatro consegue com uma eficiência que não havia visto
          desde o Slay the Spire original. A mecânica de pôquer como base funciona
          porque todo mundo já tem um modelo mental das mãos — você não aprende um
          sistema novo, você descobre o que o jogo adiciona em cima de algo que já
          sabe. E o que ele adiciona é tão bem calibrado que a curva de descoberta
          dura dezenas de horas. LocalThunk fez isso sozinho, em Lua, sem publisher
          relevante, mantendo anonimato completo. 4 milhões de cópias depois, é
          o caso indie mais inspirador dos últimos anos. Vale cada centavo — mas
          não abra antes de dormir.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Balatro no Steam",
            url: "https://store.steampowered.com/app/2379780/Balatro/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "The Game Awards 2024 — Nominees and Winners",
            url: "https://thegameawards.com/nominees",
            publisher: "The Game Awards",
            accessedAt: "Dezembro 2024",
          },
          {
            title: "Balatro — Metacritic",
            url: "https://www.metacritic.com/game/balatro/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "World Poker Tour — History of Poker",
            url: "https://www.wpt.com/",
            publisher: "World Poker Tour",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Balatro Review",
            url: "https://www.ign.com/games/balatro",
            publisher: "IGN",
            accessedAt: "Fevereiro 2024",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default BalatraGuia2024;
