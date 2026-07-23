import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Crown, BookOpen, Star, Sword, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo metaphor-refantazio-guia-2024.webp em src/assets/
import heroImg from "@/assets/metaphor-refantazio-guia-2024.webp";

const SLUG = "metaphor-refantazio-guia-completo-2024";
const TITLE =
  "Metaphor: ReFantazio — Guia Completo: A Eleição Real, o Sistema de Arquétipos, a Atlus e Por Que É o Melhor JRPG em Anos";

const MetaphorReFantazioGuia2024 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Metaphor: ReFantazio · Atlus · Studio Zero · JRPG · PS5 / PC / Xbox
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
            23 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="23 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Metaphor ReFantazio guia completo Atlus Studio Zero Katsura Hashino 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>11 de outubro de 2024</strong> para PS4, PS5, Xbox Series X|S
          e PC, <strong>Metaphor: ReFantazio</strong> é o primeiro jogo desenvolvido pelo{" "}
          <strong>Studio Zero</strong> — a divisão da Atlus formada por Katsura Hashino,
          o diretor por trás de <em>Persona 3</em>, <em>Persona 4</em> e{" "}
          <em>Persona 5</em>. O resultado é um JRPG de fantasia que alcançou{" "}
          <strong>nota 94 no Metacritic</strong>, tornando-se um dos jogos mais bem avaliados
          de 2024 em qualquer plataforma, e que usa o gênero de fantasia medieval para
          discutir com inteligência e coragem temas que raramente aparecem em videogames
          com esse grau de franqueza: <strong>eleições democráticas, demagogia, o uso
          político do medo e a perseguição de minorias étnicas</strong>. Com um sistema
          de combate que evolui o modelo de Persona, trilha sonora de Shoji Meguro e
          design de personagens de Shigenori Soejima — a mesma equipe que construiu
          Persona 5 —, Metaphor é tanto uma homenagem à tradição dos JRPGs quanto
          uma declaração ambiciosa sobre o mundo real. Este guia cobre tudo: o contexto
          da Atlus, a eleição como mecânica central, o sistema de Arquétipos e como
          começar sem se perder nos sistemas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Atlus e Studio Zero: A Equipe Por Trás do Fenômeno
        </h2>
        <p>
          A Atlus é uma desenvolvedora e publicadora japonesa de videogames fundada em 1986,
          subsidiária da Sega desde 2013. Internacionalmente, é mais conhecida pela franquia
          Shin Megami Tensei e por sua linha de RPGs de nicho que construíram bases de fãs
          devotas ao longo de décadas — uma estratégia de mercado que priorizou consistência
          criativa e identidade de produto acima de volume de vendas, resultando numa empresa
          com catálogo de qualidade extraordinariamente consistente mas, historicamente,
          com alcance de público mais limitado do que publishers maiores.
        </p>
        <p>
          O divisor de águas foi <em>Persona 5</em>, lançado em 2016 no Japão e 2017 no
          Ocidente. O jogo — e sua versão expandida <em>Persona 5 Royal</em> (2019/2020) —
          vendeu mais de 10 milhões de cópias mundialmente, um número sem precedente para
          qualquer título da Atlus e que transformou a empresa de nicho sofisticado em
          criadora de um dos RPGs mais reconhecíveis da geração. Katsura Hashino foi o
          diretor de Persona 3 (2006), Persona 4 (2008), Persona 5 (2016) e Catherine
          (2011) — uma trajetória que o posicionou como um dos designers de RPG mais
          influentes do Japão. Após Persona 5, Hashino foi autorizado pela Atlus a formar
          o Studio Zero dentro da empresa — uma divisão dedicada a projetos originais fora
          da franquia Persona — com o objetivo explícito de criar uma nova franquia com
          a mesma ambição criativa mas num universo completamente novo.
        </p>
        <p>
          Shigenori Soejima, responsável pelo design de personagens de toda a série Persona
          desde Persona 3, e Shoji Meguro, compositor das trilhas sonoras de Persona 3, 4
          e 5 (incluindo o aclamado álbum "Burn My Dread" de P3 e o "Life Will Change"
          de P5 que se tornou viral), também migraram para o Studio Zero, garantindo que
          Metaphor: ReFantazio fosse visualmente e sonoramente reconhecível como produto
          da mesma equipe — mas ambientado num universo de fantasia medieval original em
          vez do Japão contemporâneo das escolas secundárias que definiu Persona. A música
          de Meguro para Metaphor mantém a mistura de gêneros — jazz, rock progressivo,
          elementos orquestrais — que tornou suas composições anteriores inconfundíveis,
          adaptada para o contexto de um reino medieval fantástico.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-geek" />
          A Eleição e a Política do Medo: O Que o Jogo Realmente Diz
        </h2>
        <p>
          A premissa central de Metaphor: ReFantazio é uma eleição real. O rei do Reino de
          Euchronia foi assassinado, e sua última vontade determina que o próximo monarca
          será escolhido através de um processo de eleição popular — qualquer cidadão do
          reino pode se candidatar e concorrer ao trono, independentemente de origem ou
          classe social. O protagonista, um jovem de uma tribo marginalizada chamada Elda
          — perseguida e discriminada pela maioria da população por diferenças físicas
          hereditárias —, decide participar da eleição para quebrar o feitiço que mantém
          o príncipe herdeiro em coma mágico.
        </p>
        <p>
          O que poderia ser apenas uma estrutura narrativa de "underdog vence a eleição"
          se torna, nas mãos de Hashino, uma análise sofisticada dos mecanismos reais
          da política democrática — e de suas vulnerabilidades. Entre os candidatos à eleição
          está Louis Guiabern, um general carismático que usa o medo como principal
          ferramenta política: identificando um inimigo externo comum, prometendo proteção
          a quem o segue e explorando o preconceito da maioria contra os Elda para
          consolidar poder. A construção de Guiabern é deliberadamente inspirada nos
          mecanismos reais do fascismo histórico — o movimento político que emergiu na
          Europa nas décadas de 1920 e 1930 e que utilizou sistematicamente o medo,
          a identificação de bodes expiatórios minoritários e o apelo à grandeza nacional
          perdida como ferramentas de mobilização de massa.
        </p>
        <p>
          Hashino nunca mencionou referências políticas contemporâneas específicas em
          entrevistas — e seria impreciso afirmar que o jogo critica um político real
          específico, já que os mecanismos que ele descreve são históricos e recorrentes
          em culturas e períodos diferentes. O que Metaphor: ReFantazio faz é mais
          preciso e, portanto, mais valioso: descreve a estrutura do populismo de medo
          de forma suficientemente abstrata para ser reconhecível em múltiplos contextos
          históricos e contemporâneos, enquanto permanece concreto o suficiente para que
          o jogador entenda o que está observando. A eleição de Euchronia não é uma
          metáfora de nenhuma eleição específica — é uma metáfora da própria lógica
          eleitoral quando operada sob pressão de medo coletivo e desigualdade estrutural.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          Os Tribos e o Preconceito: A Estrutura Social de Euchronia
        </h2>
        <p>
          O mundo de Euchronia é habitado por oito tribos distintas, cada uma com
          características físicas próprias — orelhas, caudas, armaduras corporais naturais,
          diferenças de tamanho — que funcionam como marcadores visuais de identidade
          tribal, análogos às diferenças étnicas ou raciais no mundo real. A hierarquia
          social do reino é rigorosamente estratificada por tribo: algumas tribos ocupam
          posições de poder e prestígio na corte e nas cidades; outras vivem em condição
          de marginalidade, discriminação aberta e violência cotidiana. Os Elda, a tribo
          do protagonista, ocupam o patamar mais baixo dessa hierarquia — tratados com
          desconfiança e repulsa pela maioria da população, excluídos de estabelecimentos,
          alvo de agressões impunes e portadores de uma marca hereditária que os torna
          imediatamente identificáveis e vulneráveis.
        </p>
        <p>
          Essa construção do mundo não é casual nem meramente temática — tem função
          mecânica direta no jogo. A reputação política do protagonista durante a eleição
          é afetada pelas atitudes das diferentes tribos: convencer eleitores de tribos
          que historicamente desconfiam dos Elda exige trabalho extra de construção de
          relações, enquanto tribos marginalizadas tendem a ser aliadas naturais mas com
          peso político menor na estrutura de poder de Euchronia. O jogo usa sua
          arquitetura de sistemas — a mecânica de eleição, o gerenciamento de tempo
          (herdado diretamente de Persona), as Social Links com personagens de cada
          tribo — para tornar tangível, em termos de gameplay, o que significa tentar
          mudar estruturas de poder num sistema que foi construído para perpetuá-las.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          O Sistema de Arquétipos: A Evolução do Persona
        </h2>
        <p>
          O sistema de combate de Metaphor: ReFantazio é construído sobre o conceito de
          Arquétipos — classes de personagem que podem ser trocadas livremente entre
          os membros do grupo e que determinam habilidades, papel em combate e
          possibilidades de personalização. É a evolução direta do sistema de Personas
          da série homônima, mas com uma diferença estrutural importante: em Persona,
          apenas o protagonista pode trocar de Persona livremente; em Metaphor, todos
          os personagens do grupo têm acesso ao sistema de Arquétipos, o que expande
          exponencialmente as possibilidades de composição e estratégia de grupo.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Arquétipo</th>
                <th className="text-left py-3 px-4 w-1/4 break-words">Função</th>
                <th className="text-left py-3 px-4 w-1/2 break-words">Características</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["⚔️ Seeker", "Atacante físico versátil", "Arquétipo inicial do protagonista — ataques físicos e habilidades de análise de inimigos. Evolui para classes mais especializadas ao nível alto."],
                ["🛡️ Knight", "Tank / Protetor", "Alta defesa, habilidades de provocar inimigos para atacar o Knight em vez dos aliados mais frágeis, contra-ataques. Essencial em batalhas de boss com ataques em área."],
                ["🔥 Mage", "Atacante mágico elementar", "Feitiços elementais (fogo, gelo, raio, vento) com fraquezas exploráveis nos inimigos. Baixa defesa, alta inteligência — posicionamento e ordem de turno são críticos."],
                ["💚 Healer", "Suporte / Cura", "Cura de HP, revive de aliados caídos e buffs defensivos. A classe menos glamorosa mas indispensável em dificuldades mais altas e batalhas longas de múltiplas fases."],
                ["🏹 Gunner", "Atacante físico à distância", "Ataques que ignoram defesa física convencional, habilidades que atingem múltiplos inimigos. Diferente do Mage porque usa recursos físicos em vez de MP."],
                ["🌟 Faker", "Debuffer / Ilusionista", "Redução de atributos de inimigos, habilidades de confusão e manipulação de status. Classe de suporte ofensivo que controla o campo de batalha indiretamente."],
              ].map(([arq, funcao, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-xs break-words">{arq}</td>
                  <td className="py-3 px-4 text-xs break-words text-geek/90">{funcao}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Os Arquétipos são desbloqueados e evoluídos com uma moeda especial chamada
          Magla, obtida em combate e em eventos de história. A árvore de evolução de
          cada Arquétipo é generosa — cada classe tem pelo menos duas ou três evoluções
          que alteram fundamentalmente suas possibilidades — e o sistema incentiva
          experimentar múltiplas combinações em vez de fixar um grupo desde o início.
          Arquétipos também herdam habilidades uns dos outros quando um personagem atinge
          nível suficiente numa classe antes de mudar: um Mage que evolui para uma
          classe de Arquétipo híbrido pode manter feitiços de fogo aprendidos anteriormente,
          criando personagens com combinações de habilidades impossíveis se cada classe
          fosse totalmente isolada.
        </p>
        <p>
          O combate de Metaphor também herda e expande o sistema de "one more" de Persona
          — explorar fraquezas elementais de inimigos concede turnos adicionais ao grupo.
          A camada nova é um sistema de combate em tempo real para encontros de inimigos
          mais fracos no mapa: o jogador pode atacar diretamente no ambiente com o
          protagonista para eliminar inimigos sem entrar na tela de batalha por turno,
          economizando tempo e recursos. Inimigos mais fortes ou que não podem ser
          nocauteados no ataque inicial entram automaticamente no modo de batalha por
          turnos — criando um híbrido que mantém a profundidade estratégica do combate
          por turno para o que realmente importa sem tornar cada encontro aleatório
          um ritual de menus.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Gerenciamento de Tempo e a Eleição como Deadline
        </h2>
        <p>
          Herdado diretamente de Persona, o gerenciamento de tempo é uma das mecânicas
          centrais de Metaphor: ReFantazio. O jogo divide o progresso em dias, e cada
          dia tem um número limitado de ações disponíveis: visitar dungeon, interagir
          com personagens para construir relacionamentos, explorar novos locais ou
          avançar atividades secundárias. A eleição funciona como um deadline concreto:
          cada candidato, incluindo o protagonista, tem dias contados até os eventos
          eleitorais que determinam a popularidade de cada um e, eventualmente, o resultado
          final. Gastar tempo ineficientemente tem custo real — não é apenas uma escolha
          sobre qual conteúdo acessar, mas uma decisão estratégica sobre o que priorizar
          com recursos temporais limitados.
        </p>
        <p>
          A diferença em relação a Persona é que o deadline não é escolar nem calendar
          fixo da vida japonesa — é político e dinâmico. Eventos eleitorais inesperados
          podem alterar o calendário, e ações do protagonista no mundo têm consequências
          visíveis na popularidade relativa dos candidatos ao longo da campanha. Um
          protagonista que resolve crises locais nas regiões do reino, por exemplo, ganha
          apoio político dessas regiões de forma orgânica — o jogo trata a campanha
          eleitoral como uma consequência emergente das ações do jogador no mundo, não
          apenas como medidor abstrato que sobe com missões concluídas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          Dicas Essenciais para Novos Viajantes de Euchronia
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🔗 Priorize Social Links com personagens que oferecem Arquétipos",
              desc: "Diferente de Persona, onde Social Links são primariamente narrativos, em Metaphor vários personagens desbloqueiam novos Arquétipos ao atingir certos níveis de relacionamento. Identifique essas conexões cedo e priorize-as no gerenciamento de tempo.",
            },
            {
              titulo: "⚡ Use o combate em tempo real para inimigos fracos",
              desc: "Atacar inimigos diretamente no mapa em vez de entrar na batalha por turno economiza MP, itens e tempo. Reserve o combate por turno completo para inimigos de nível alto e mini-bosses — os fracos devem ser eliminados no mapa sempre que possível.",
            },
            {
              titulo: "🗺️ Explore cada cidade antes de avançar na história",
              desc: "Cidades têm NPCs com missões secundárias, mercadores com itens exclusivos e conversas que expandem o lore de cada tribo. Avançar na história às vezes bloqueia acesso temporário a regiões — explore completamente antes de cada evento maior.",
            },
            {
              titulo: "📅 Não ignore os prazos eleitorais",
              desc: "O calendário da eleição tem datas fixas em que sua popularidade é avaliada. Chegar despreparado — sem apoio suficiente das regiões relevantes — pode resultar em perda de posição política que é difícil de recuperar nas rodadas seguintes.",
            },
            {
              titulo: "💡 Leia as descrições de habilidades dos Arquétipos antes de mudar",
              desc: "A herança de habilidades entre Arquétipos funciona apenas se o personagem tiver atingido nível suficiente na classe anterior. Mudar de Arquétipo antes de aprender as habilidades que deseja manter é um dos erros mais comuns de iniciantes.",
            },
            {
              titulo: "🎵 Ative o áudio em japonês para a experiência completa",
              desc: "A trilha sonora e o design de voz de Metaphor foram criados primariamente em japonês. A dublagem em inglês é competente, mas a versão japonesa preserva nuances de performance vocal — especialmente nos momentos mais dramáticos — que se perdem parcialmente na tradução.",
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
          <Shield className="h-7 w-7 text-geek" />
          Por Que a Nota 94 No Metacritic É Merecida
        </h2>
        <p>
          Nota 94 no Metacritic é uma raridade estatística. Em toda a história do PS5
          até o lançamento de Metaphor, apenas alguns poucos títulos haviam alcançado
          esse patamar — Astro Bot e Elden Ring entre eles. Para um JRPG original —
          uma nova IP sem o reconhecimento de marca de Final Fantasy ou Persona —
          alcançar esse nível de aprovação crítica universal é extraordinário e indica
          que os avaliadores, historicamente menos familiarizados com o gênero do que
          a base de fãs de nicho, encontraram algo genuinamente excepcional que transcende
          os limites do gênero.
        </p>
        <p>
          O que unificou críticas tão diferentes quanto a do New York Times, da Famitsu
          japonesa e de publicações especializadas em games como IGN e Eurogamer foi
          precisamente a combinação de ambição temática com execução mecânica sólida.
          Metaphor não é um jogo que faz concessões — é longo (entre 70 e 100 horas para
          completionistas), exige envolvimento com seus sistemas e não subestima o jogador
          ao explicar suas metáforas políticas de forma didática. Ao mesmo tempo, é
          imediatamente acessível como ponto de entrada para o gênero JRPG graças ao
          sistema de combate em tempo real que elimina o atrito de batalhas aleatórias
          triviais, e visualmente é um dos jogos mais belos de 2024 graças ao trabalho
          de Soejima e ao design de arte da equipe do Studio Zero.
        </p>
        <p>
          O jogo também representou uma expansão importante para a Atlus fora do Japão
          e do PlayStation: o lançamento simultâneo em Xbox Series X|S foi o primeiro
          lançamento day-one da Atlus numa plataforma Microsoft para um de seus JRPGs
          de grande porte — uma mudança que reflete tanto a estratégia da Sega (controladora
          da Atlus) de ampliar o alcance de seus títulos quanto o reconhecimento de que
          a base de fãs de JRPGs existe em todas as plataformas, e não apenas no
          PlayStation e no PC onde a Atlus historicamente concentrou seus lançamentos.
        </p>
</div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: um JRPG que faz perguntas que o gênero raramente ousa fazer"
      >
        <p>
          Metaphor: ReFantazio me surpreendeu de formas que eu não esperava. Não porque
          fosse um JRPG ruim — conhecendo o histórico de Hashino, eu esperava algo
          competente. Me surpreendeu pelo nível de coragem política da narrativa: o jogo
          não deixa margem para dúvida sobre o que está criticando quando coloca Louis
          Guiabern num palanque usando o medo dos Elda para mobilizar eleitores. É uma
          crítica direta e reconhecível a um padrão político que existe há séculos e que
          continua muito presente em 2024. O fato de a Atlus ter colocado isso no centro
          de um jogo de fantasia com dragões e magia — e que funcione também como pura
          aventura para quem não quer ler a camada política — é um feito criativo
          significativo. O sistema de Arquétipos é o melhor sistema de progressão que
          Hashino já projetou. E a trilha de Meguro é, simplesmente, uma das melhores
          do ano. Para quem gosta de RPG e ainda não jogou: é imperdível.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Metaphor: ReFantazio — Site Oficial Atlus",
            url: "https://atlus.com/metaphor/",
            publisher: "Atlus / Sega",
            accessedAt: "Julho 2026",
          },
          {
            title: "Metaphor: ReFantazio no Steam",
            url: "https://store.steampowered.com/app/2679460/Metaphor_ReFantazio/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "Metaphor: ReFantazio — Metacritic",
            url: "https://www.metacritic.com/game/metaphor-refantazio/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Metaphor: ReFantazio Review",
            url: "https://www.ign.com/games/metaphor-refantazio",
            publisher: "IGN",
            accessedAt: "Outubro 2024",
          },
          {
            title: "Atlus — Perfil e história do estúdio",
            url: "https://atlus.com/",
            publisher: "Atlus / Sega",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default MetaphorReFantazioGuia2024;
