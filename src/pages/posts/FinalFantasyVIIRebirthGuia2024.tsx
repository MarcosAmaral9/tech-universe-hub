import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Star, Map, Zap, Music } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo final-fantasy-vii-rebirth-guia-2024.webp em src/assets/
import heroImg from "@/assets/final-fantasy-vii-rebirth-guia-2024.webp";

const SLUG = "final-fantasy-vii-rebirth-guia-completo-2024";
const TITLE =
  "Final Fantasy VII Rebirth — Guia Completo: O Original de 1997, a Trilogia Remake e Tudo Sobre a Segunda Parte da Saga de Cloud Strife";

const FinalFantasyVIIRebirthGuia2024 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Final Fantasy VII · Square Enix · PS5 · JRPG · Remake Trilogia
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
            19 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="24 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Final Fantasy VII Rebirth guia completo Square Enix trilogia remake Cloud Sephiroth 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>29 de fevereiro de 2024</strong> — um dia bissexto, escolha
          simbólica não acidental — exclusivamente para PS5, <strong>Final Fantasy VII
          Rebirth</strong> é a segunda parte da trilogia de remake do jogo mais influente
          da história dos JRPGs. Desenvolvido e publicado pela <strong>Square Enix</strong>,
          dirigido por Naoki Hamaguchi com direção criativa de Tetsuya Nomura e produção
          de Yoshinori Kitase — diretor do original de 1997 —, o jogo recebeu nota{" "}
          <strong>92 no Metacritic</strong> e é amplamente considerado pela crítica
          especializada como uma das melhores entradas da franquia Final Fantasy em mais
          de uma década. Com mais de <strong>100 mini-games</strong>, regiões de mundo
          aberto de enorme variedade visual, o retorno do mítico Gold Saucer e uma
          narrativa que se distancia deliberadamente do roteiro do original de 1997 de
          formas que dividem e fascinam simultaneamente, Rebirth é um jogo de escala e
          ambição sem precedentes no projeto. Este guia explica o contexto histórico
          do FF7 original, o que mudou na trilogia remake e como aproveitar ao máximo
          a segunda parte dessa saga.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          Final Fantasy VII (1997): Por Que Ainda Importa Quase Trinta Anos Depois
        </h2>
        <p>
          Final Fantasy VII foi lançado em janeiro de 1997 no Japão e em setembro do
          mesmo ano na América do Norte, para PlayStation 1. Desenvolvido pela
          Square Co. (que se fundiria com a Enix em 2003 para formar a Square Enix),
          sob direção de Yoshinori Kitase e produção de Hironobu Sakaguchi — criador
          da própria franquia Final Fantasy em 1987 —, com design de personagens de
          Tetsuya Nomura e trilha sonora de Nobuo Uematsu. O jogo vendeu aproximadamente
          13,3 milhões de cópias ao longo de seu ciclo de vida, tornando-se um dos
          jogos mais vendidos da história do PlayStation 1 e o jogo de RPG de maior
          vendas de sua geração.
        </p>
        <p>
          O impacto de FF7 no mercado ocidental foi particularmente transformador. Antes
          de 1997, os JRPGs (jogos de RPG japoneses) eram populares no Japão mas tinham
          presença limitada no Ocidente, onde dominavam os RPGs ocidentais de PC como
          Baldur's Gate e Diablo. Final Fantasy VII chegou com uma campanha de marketing
          sem precedentes para um JRPG no mercado americano — incluindo anúncios de
          televisão em horário nobre que custaram à Square dezenas de milhões de dólares
          — e provou que o gênero podia competir com qualquer outra categoria em
          vendas e reconhecimento cultural. O jogo introduziu milhões de jogadores
          ocidentais não apenas a Final Fantasy mas ao conceito inteiro de JRPG como
          forma narrativa: histórias longas com personagens desenvolvidos ao longo de
          dezenas de horas, mundos com lore elaborado e trilhas sonoras como experiências
          artísticas independentes.
        </p>
        <p>
          A história de Cloud Strife — ex-soldado da corporação Shinra que se junta ao
          grupo eco-terrorista AVALANCHE para destruir os reatores de Mako que drenam
          a energia vital do planeta — tornou-se uma das narrativas mais estudadas dos
          videogames. A revelação da verdadeira identidade e memórias de Cloud, a morte
          de Aerith Gainsborough (considerada até hoje um dos momentos mais impactantes
          já escritos num videogame), Sephiroth como vilão com motivações que vão além
          do mal convencional e o tema ecológico de exploração corporativa de recursos
          naturais — todos elementos que pareciam extraordinariamente avançados para um
          JRPG de 1997 e que continuam ressoando em 2024. A Nobuo Uematsu compôs para
          o jogo mais de 80 faixas originais, incluindo o tema "One-Winged Angel" de
          Sephiroth — provavelmente a música mais reconhecível da história dos videogames
          ao lado do tema de Super Mario Bros. — e a melancólica "Aerith's Theme" que
          se tornou símbolo da tragédia do personagem.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Trilogia Remake: Uma Decisão de Duas Décadas
        </h2>
        <p>
          O projeto de remake de Final Fantasy VII foi anunciado pela primeira vez de
          forma surpreendente no E3 de 2015, durante uma apresentação da Sony — gerando
          uma das maiores reações de público de qualquer anúncio de videogame na história
          do evento, com o trailer acumulando dezenas de milhões de visualizações nas
          primeiras semanas. O desenvolvimento havia começado anos antes, mas a Square
          Enix manteve o projeto em sigilo durante longo período enquanto trabalhava
          para definir a abordagem criativa.
        </p>
        <p>
          A decisão mais controversa do projeto foi expandir o jogo original — que em
          sua versão de 1997 pode ser completado em aproximadamente 40 horas — em
          uma trilogia de jogos completos, cada um cobrindo uma seção da história
          original. O primeiro jogo, <em>Final Fantasy VII Remake</em>, lançado em
          abril de 2020 para PS4 e depois portado para PS5, cobriu exclusivamente
          a seção de Midgar — as primeiras horas do jogo original, expandidas para
          uma experiência de 35 a 40 horas. A decisão foi recebida com ceticismo inicial
          mas o jogo em si foi muito bem avaliado (nota 87 no Metacritic), e estabeleceu
          um elemento narrativo crucial: o remake não é uma reprodução fiel do original
          mas uma história que reconhece explicitamente a existência do jogo de 1997 e
          deliberadamente desvia de seu roteiro em momentos específicos, abrindo a
          possibilidade de que eventos que os jogadores veteranos conhecem de memória
          não necessariamente se repitam da mesma forma.
        </p>
        <p>
          Yoshinori Kitase, produtor de toda a trilogia e diretor do original de 1997,
          descreveu publicamente essa abordagem como uma forma de garantir que veteranos
          do jogo original também vivessem surpresas genuínas ao jogar o remake — em vez
          de apenas experimentar versões visuais aprimoradas de cenas que já conhecem de
          cor. É uma aposta criativa arriscada que gerou debate intenso na comunidade:
          alguns consideram a liberdade narrativa da trilogia uma traição ao material de
          origem; outros a veem como o único caminho honesto para recriar um jogo de 27
          anos sem resultar num exercício puramente nostálgico sem valor criativo próprio.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          O Que Rebirth Cobre: Das Planícies ao Gold Saucer
        </h2>
        <p>
          Final Fantasy VII Rebirth começa imediatamente após os eventos de Remake —
          com Cloud, Aerith, Tifa, Barret, Red XIII, Yuffie e Cait Sith saindo de
          Midgar em direção ao mundo exterior. Narrativamente, o jogo cobre a seção
          central do jogo original: a perseguição a Sephiroth pelo mundo, passando
          por cidades e regiões que os fãs do original reconhecem — Kalm, Junon,
          Costa del Sol, Corel, o Gold Saucer, Gongaga, Cosmo Canyon, Nibelheim e
          o Templo dos Anciões. Cada uma dessas regiões foi transformada numa área
          de mundo aberto com exploração livre, missões secundárias, colecionáveis
          e atividades opcionais — uma mudança estrutural significativa em relação ao
          Remake, que era mais linear.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/3 break-words">Região</th>
                <th className="text-left py-3 px-4 w-2/3 break-words">O Que a Torna Memorável</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["🌿 Planícies de Kalm", "Primeira área de mundo aberto do jogo — campo verde aberto que marca a saída de Midgar. Serve como tutorial de exploração e apresenta o sistema de Chocobo local."],
                ["🌊 Junon / Costa del Sol", "Junon é cidade portuária militarizada da Shinra com eventos de história marcantes; Costa del Sol é resort de praia com dezenas de mini-games e a introdução do Gold Saucer como destino."],
                ["🎡 Gold Saucer", "O parque de diversões mais famoso dos videogames — presente no original de 1997 e expandido massivamente no Remake. Abriga mais de 30 mini-games próprios incluindo corrida de Chocobo, batalhas em arena e o icônico encontro de encontro do Gold Saucer que determina o 'par' de Cloud na sequência."],
                ["🏔️ Cosmo Canyon", "Casa de Red XIII e centro espiritual da narrativa sobre o Planeta e a Corrente da Vida — o equivalente ecológico do lore de FF7. Cenas de história entre as mais impactantes do jogo."],
                ["🌋 Nibelheim", "Cidade natal de Cloud e Tifa — e cenário do flashback mais importante da história de Cloud com Sephiroth. A sequência de Nibelheim em Rebirth é onde o jogo mais deliberadamente diverge do original."],
                ["🏛️ Templo dos Anciões", "Área final da campanha principal — dungeon com puzzles e a sequência narrativa que define o clímax emocional de Rebirth e que os veteranos do original aguardavam com expectativa e apreensão."],
              ].map(([reg, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold text-sm break-words">{reg}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O Gold Saucer merece destaque especial por representar a maior expansão de
          conteúdo opcional de Rebirth. No original de 1997, o Gold Saucer era uma
          das áreas mais queridas — um parque de diversões absurdamente colorido e
          caloroso que funcionava como alívio cômico em meio à narrativa sombria de
          Shinra e Sephiroth. Em Rebirth, esse espírito foi preservado e amplificado:
          são dezenas de atividades próprias do parque, incluindo o Fort Condor (jogo
          de estratégia em tempo real), o 3D Brawler (jogo de luta estilo arcade),
          o Queen's Blood (jogo de cartas colecionáveis com profundidade de sistema
          própria), corridas de Chocobo e muito mais. Muitos críticos apontaram o
          Gold Saucer como um dos melhores exemplos de design de conteúdo opcional
          num JRPG em anos — cada atividade é um jogo funcional dentro de um jogo
          maior, com sistemas próprios e profundidade suficiente para absorver horas
          de atenção voluntária.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          O Sistema de Combate: Ação e Turno em Harmonia
        </h2>
        <p>
          Final Fantasy VII Rebirth mantém e expande o sistema de combate introduzido
          no Remake de 2020 — um híbrido entre ação em tempo real e combate por turnos
          que foi uma das contribuições mais importantes da trilogia para a evolução
          dos JRPGs como gênero. O combate funciona em dois níveis simultâneos: o
          jogador controla diretamente um dos personagens com ataques físicos e desvios
          em tempo real, enquanto uma barra de ATB (Active Time Battle — herdada dos
          FF clássicos, onde o tempo de preenchimento determina a disponibilidade de
          ações especiais) acumula e permite gastar pontos para usar habilidades,
          magias e itens com efeito mais poderoso mas que pausam temporariamente a
          ação para seleção no menu.
        </p>
        <p>
          Em Rebirth, esse sistema foi aprofundado com o novo mecanismo de Synergy
          Skills: habilidades especiais que envolvem dois personagens simultaneamente,
          com animações combinadas e efeitos únicos que nenhum dos dois pode produzir
          individualmente. Cada dupla de personagens tem seu próprio conjunto de
          Synergy Skills — Cloud e Tifa têm combinações focadas em dano físico
          sincronizado; Aerith e Cloud têm combinações que misturam magia e ataque
          físico; Barret e Red XIII têm combinações de suporte e controle de área.
          O sistema incentiva rotacionar o controle entre os membros do grupo e
          planejar a composição do grupo ativo em função dos Synergy Skills disponíveis
          — uma camada estratégica que recompensa conhecimento dos personagens mais
          do que simples poder de nível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-geek" />
          A Trilha Sonora: Nobuo Uematsu e Quatro Décadas de Final Fantasy
        </h2>
        <p>
          Nobuo Uematsu compôs a trilha original de Final Fantasy VII em 1997 com equipamentos
          de síntese de som características da época — o resultado, apesar das limitações
          técnicas do PlayStation 1, é considerado uma das composições mais expressivas
          da história dos videogames. Para a trilogia remake, a Square Enix optou por uma
          abordagem colaborativa: Uematsu contribui com composições originais e supervisiona,
          enquanto Masashi Hamauzu e Mitsuto Suzuki — compositores que já trabalharam em
          outras entradas da franquia Final Fantasy — ampliam e rearranjo o material.
          O resultado é uma trilha que respeita os temas originais enquanto os reinventa
          para orquestra completa e produção moderna.
        </p>
        <p>
          Nobuo Uematsu é uma figura singular na indústria de games. Nascido em 1959 na
          Prefeitura de Kochi, no Japão, é um músico autodidata que aprendeu teclado
          sozinho e entrou na Square por acaso quando a empresa ainda se chamava
          Denyusha — o que viria a se tornar a Square Co. Desde o Final Fantasy original
          de 1987, Uematsu compôs trilhas para os primeiros nove jogos numerados da
          franquia, além de outros títulos da Square, acumulando um catálogo de mais
          de 1.000 composições para videogames que resultou em turnês de concertos
          orquestrais ao redor do mundo — incluindo os shows "Distant Worlds: Music
          from Final Fantasy", que visitaram dezenas de países incluindo o Brasil,
          onde foram realizadas apresentações em São Paulo e Rio de Janeiro em diferentes
          edições ao longo dos anos 2010. A trilha de Rebirth foi nomeada em múltiplas
          premiações da indústria na categoria de Melhor Trilha Sonora de 2024.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Dicas Essenciais Para Começar Rebirth
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "📖 Jogue o Remake antes — é narrativamente obrigatório",
              desc: "Rebirth começa diretamente após os eventos de Remake de 2020 e assume familiaridade com os personagens, o mundo e a revelação narrativa do final do primeiro jogo. Pular Remake para começar direto em Rebirth resulta em perda significativa de contexto emocional e narrativo.",
            },
            {
              titulo: "🃏 Invista no Queen's Blood cedo",
              desc: "O jogo de cartas Queen's Blood tem progressão e torneios próprios ao longo de todo o mundo de Rebirth. Começar a coletar cartas e participar de partidas cedo evita ter que 'farmar' matches no final do jogo para completar os torneios opcionais.",
            },
            {
              titulo: "🌏 Explore cada região antes de avançar",
              desc: "Cada área de mundo aberto tem missões de Intel, torres de Chocobo e atividades que desbloqueiam itens únicos e habilidades de Materia. Avançar na história às vezes fecha o acesso a regiões anteriores — complete o conteúdo local antes de acionar os próximos eventos de história.",
            },
            {
              titulo: "⚡ Aprenda as Synergy Skills de cada dupla",
              desc: "Synergy Skills têm tempos de recarga longos mas efeitos determinantes em batalhas de boss. Memorizar quais duplas têm Synergies de dano vs. suporte e ativar as certas em momentos de vulnerabilidade do boss maximiza o dano dentro das janelas disponíveis.",
            },
            {
              titulo: "🎯 Use Assessment em novos inimigos",
              desc: "Assim como no Remake, a habilidade Assessment (de Aerith ou outros personagens com habilidade equivalente) revela fraquezas elementais, partes vulneráveis e padrões de ataque de inimigos novos. Usar Assessment no primeiro encontro com cada tipo de inimigo economiza tentativas desnecessárias.",
            },
            {
              titulo: "🎡 Reserve tempo para o Gold Saucer",
              desc: "O Gold Saucer não é conteúdo passageiro — tem torneios, missões e a data de encontro que afeta eventos de história posteriores. Reserve pelo menos duas a três horas na primeira visita para explorar tudo sem pressão de narrativa principal.",
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

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O Paradoxo de Rebirth: Nota 92, Vendas Abaixo das Expectativas
        </h2>
        <p>
          Final Fantasy VII Rebirth recebeu nota 92 no Metacritic — um dos jogos mais
          bem avaliados de 2024 e de toda a geração PS5. E ainda assim a Square Enix,
          em seus relatórios financeiros publicados nos meses seguintes ao lançamento,
          declarou que as vendas do jogo ficaram abaixo das expectativas internas —
          mencionando Rebirth especificamente entre os fatores que contribuíram para
          resultados financeiros decepcionantes em 2024. Esse paradoxo — excelência
          crítica combinada com performance comercial aquém do esperado — gerou debate
          extenso sobre a viabilidade de JRPGs de orçamento AAA no mercado atual.
        </p>
        <p>
          As hipóteses mais discutidas pela comunidade incluem a exclusividade de PS5
          num momento em que a base instalada do console ainda crescia; a divisão da
          história original em três jogos separados, que exige que o jogador compre
          e jogue todos os três para obter a experiência completa da narrativa que
          o original de 1997 oferecia num único título; e a duração do jogo — mais
          de 100 horas para completionistas — num momento em que a disponibilidade
          de tempo dos jogadores adultos é um fator crescentemente relevante nas
          decisões de compra. O caso de Rebirth é um dos estudos mais interessantes
          sobre a relação entre qualidade crítica e performance comercial na indústria
          de games na primeira metade da década de 2020.
        </p>
        <p>
          Para o jogador brasileiro, o preço de entrada em Rebirth — que exige ter
          jogado Remake primeiro — representa um investimento de tempo e dinheiro
          considerável. Mas para quem tem interesse em JRPGs e em narrativas que
          usam o fantástico para discutir temas humanos reais (memória, identidade,
          luto, o custo do progresso tecnológico para o mundo natural), a trilogia
          Final Fantasy VII representa exatamente o tipo de projeto que justifica
          esse investimento.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você está na trilogia de FF7 Remake? ⚔️
          </h3>
          <p className="text-muted-foreground">
            Já chegou em Rebirth? O que achou das mudanças em relação ao original? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o JRPG mais ambicioso de 2024 — com todos os riscos que isso implica"
      >
        <p>
          Final Fantasy VII Rebirth é um jogo que só a Square Enix poderia fazer — e isso
          é tanto um elogio quanto uma observação. Nenhum outro publisher teria a coragem
          (ou o orçamento) de expandir as primeiras seis horas de um jogo de 1997 em
          100 horas de JRPG moderno com mais de 100 mini-games. O resultado é, ao mesmo
          tempo, um dos JRPGs mais generosos em conteúdo que já joguei e um jogo que
          ocasionalmente perde o fio narrativo no meio de tantas atividades paralelas.
          O Gold Saucer poderia ser um jogo separado. O Queen's Blood poderia ser um
          jogo separado. O combate com Synergy Skills é o melhor que a série já teve.
          E a sequência do Templo dos Anciões — para quem conhece o original — é uma
          experiência que dificilmente vai sair da memória. Rebirth não é perfeito,
          mas é o tipo de imperfeição que acontece quando alguém tenta fazer algo muito
          grande. Prefiro isso à mediocridade segura.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Final Fantasy VII Rebirth — Site Oficial Square Enix",
            url: "https://www.finalfantasyviirebirth.com/",
            publisher: "Square Enix",
            accessedAt: "Julho 2026",
          },
          {
            title: "Final Fantasy VII Rebirth no Steam",
            url: "https://store.steampowered.com/app/2909400/FINAL_FANTASY_VII_REBIRTH/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "Final Fantasy VII Rebirth — Metacritic",
            url: "https://www.metacritic.com/game/final-fantasy-vii-rebirth/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "Nobuo Uematsu — Distant Worlds Concerts",
            url: "https://www.ffdistantworlds.com/",
            publisher: "Distant Worlds Music",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Final Fantasy VII Rebirth Review",
            url: "https://www.ign.com/games/final-fantasy-vii-rebirth",
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

export default FinalFantasyVIIRebirthGuia2024;
