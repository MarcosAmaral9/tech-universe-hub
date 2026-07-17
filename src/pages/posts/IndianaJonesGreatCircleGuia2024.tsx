import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Map, BookOpen, Star, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo indiana-jones-great-circle-guia-2024.webp em src/assets/
import heroImg from "@/assets/indiana-jones-great-circle-guia-2024.webp";

const SLUG = "indiana-jones-great-circle-guia-completo-2024";
const TITLE =
  "Indiana Jones and the Great Circle — Guia Completo: A História, a MachineGames, os Cenários Reais e Tudo Que Você Precisa Saber";

const IndianaJonesGreatCircleGuia2024 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Indiana Jones · MachineGames · Bethesda · Aventura · Ação
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
            11 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            17 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Indiana Jones and the Great Circle guia completo MachineGames Bethesda 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>9 de dezembro de 2024</strong> para PC e Xbox Series X|S —
          com versão PS5 chegando em 2025 —,{" "}
          <strong>Indiana Jones and the Great Circle</strong> é o primeiro jogo de grande
          orçamento do personagem em mais de uma década, desenvolvido pela{" "}
          <strong>MachineGames</strong> com licença da Lucasfilm Games e publicado pela
          Bethesda Softworks. Disponível desde o <strong>dia do lançamento no Xbox Game
          Pass</strong>, o jogo recebeu recepção crítica positiva por capturar o espírito
          aventureiro dos filmes originais numa experiência em primeira pessoa que mistura
          exploração, combate com chicote e resolução de puzzles ambientais. Ambientado em{" "}
          <strong>1937</strong> — entre <em>Os Caçadores da Arca Perdida</em> (1981,
          história em 1936) e <em>A Última Cruzada</em> (1989, história em 1938) — é
          narrativamente canônico à franquia e aprofunda o lore com um conceito geográfico
          real: o Grande Círculo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Franquia Indiana Jones: Do Cinema ao Jogo
        </h2>
        <p>
          Indiana Jones é uma criação conjunta de George Lucas e Steven Spielberg, concebida
          durante uma conversa entre os dois diretores em 1977 nas praias do Havaí — ironicamente,
          enquanto Spielberg tentava distrair Lucas da ansiedade sobre o lançamento iminente de
          Star Wars. Lucas propôs uma série de aventura no estilo dos seriados B dos anos 1930
          e 1940, e Spielberg concordou na hora em dirigir. O resultado foi <em>Raiders of the
          Lost Ark</em> (no Brasil, <em>Os Caçadores da Arca Perdida</em>), lançado em junho
          de 1981 com Harrison Ford no papel do arqueólogo-aventureiro Henry Walton Jones Jr.
          — conhecido pelo apelido de infância "Indiana", retirado do nome do cão de estimação
          da família Lucas. O filme foi um sucesso crítico e comercial imediato, arrecadando
          mais de US$ 389 milhões mundialmente com orçamento de aproximadamente US$ 20 milhões,
          e deu origem a três sequências: <em>Temple of Doom</em> (1984), <em>The Last
          Crusade</em> (1989) e <em>Kingdom of the Crystal Skull</em> (2008), além do mais
          recente <em>Dial of Destiny</em> (2023), que marcou a despedida de Harrison Ford
          do papel aos 80 anos.
        </p>
        <p>
          No campo dos videogames, Indiana Jones teve uma presença considerável durante os anos
          1990 e início dos 2000. A LucasArts — divisão de jogos da Lucasfilm, hoje extinta —
          produziu vários títulos aclamados, com destaque para <em>Indiana Jones and the Fate
          of Atlantis</em> (1992), uma aventura gráfica point-and-click que é frequentemente
          citada como um dos melhores jogos do gênero da era, com uma narrativa original
          cuidadosamente integrada ao cânone dos filmes. Após o fechamento da LucasArts em
          2013, quando a Disney adquiriu a Lucasfilm, o licenciamento dos jogos de Indiana
          Jones ficou dormente por anos — até que a Bethesda Softworks e a MachineGames
          anunciaram <em>The Great Circle</em> em janeiro de 2021, gerando expectativa imediata
          tanto pela qualidade do estúdio quanto pela ausência do personagem nos consoles
          por tanto tempo.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          MachineGames: O Estúdio Sueco por Trás do Projeto
        </h2>
        <p>
          A MachineGames é um estúdio de desenvolvimento fundado em 2009 em Uppsala, na Suécia,
          por um grupo de ex-funcionários da Starbreeze Studios — outro estúdio sueco responsável
          por <em>The Chronicles of Riddick: Escape from Butcher Bay</em> (2004), jogo de ação
          em primeira pessoa amplamente elogiado por sua qualidade de design em primeira pessoa.
          A MachineGames foi adquirida pela ZeniMax Media (holding que controla a Bethesda
          Softworks) no mesmo ano de sua fundação, antes mesmo de lançar seu primeiro jogo —
          uma rara aquisição de um estúdio ainda em fase de formação que indica o nível de
          confiança da Bethesda no grupo fundador.
        </p>
        <p>
          O primeiro projeto da MachineGames foi <em>Wolfenstein: The New Order</em> (2014),
          relançamento da famosa franquia de FPS da Bethesda que havia ficado adormecida por
          anos. O jogo surpreendeu a indústria ao combinar a ação frenética esperada de um
          Wolfenstein com uma narrativa surpreendentemente madura — um protagonista com traços
          de PTSD, vilões com profundidade ideológica real e ambientação num mundo alternativo
          onde a Alemanha Nazista venceu a Segunda Guerra Mundial. A recepção foi amplamente
          positiva e estabeleceu a MachineGames como um dos melhores estúdios de FPS narrativo
          da indústria. A sequência, <em>Wolfenstein II: The New Colossus</em> (2017), aprofundou
          ainda mais a abordagem narrativa e é frequentemente citada como um dos jogos mais
          politicamente corajosos da geração. Esse histórico em narrativa de primeira pessoa com
          ambientação da Segunda Guerra Mundial tornou a MachineGames uma escolha quase óbvia
          para Indiana Jones — cuja aventura de 1937 ocorre exatamente no período em que o
          nazismo avançava pela Europa.
        </p>
        <p>
          A ZeniMax Media, controladora da MachineGames, foi adquirida pela Microsoft em março
          de 2021 por aproximadamente US$ 7,5 bilhões — uma das maiores aquisições da história
          da indústria de games até então. Essa mudança de propriedade explica a estratégia de
          lançamento de <em>The Great Circle</em>: disponível no Xbox Game Pass desde o dia um,
          lançado simultaneamente em PC e Xbox Series X|S mas com PS5 chegando depois, o padrão
          típico dos exclusivos temporais de Microsoft.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          O Grande Círculo: O Conceito Geográfico Real
        </h2>
        <p>
          O título <em>The Great Circle</em> não é apenas um nome evocativo — refere-se a um
          conceito geográfico e arqueológico real que serve de MacGuffin central para a narrativa
          do jogo. Na geometria esférica, um "grande círculo" (great circle) é qualquer círculo
          desenhado na superfície de uma esfera cujo centro coincide com o centro da própria
          esfera — na Terra, o equador é o maior exemplo, assim como os meridianos. Navegadores
          usam rotas de grande círculo desde o século XVI porque representam o caminho mais
          curto entre dois pontos na superfície de uma esfera, e sua identificação correta foi
          essencial para a navegação oceânica de longa distância.
        </p>
        <p>
          No contexto arqueológico, existe uma teoria — de validade científica contestada, mas
          fascinante como premissa de ficção científica e aventura — de que vários sítios
          arqueológicos e megalíticos ao redor do mundo estão alinhados ao longo de um mesmo
          grande círculo: Stonehenge (Inglaterra), as pirâmides de Gizé (Egito), Machu Picchu
          (Peru), a ilha de Páscoa, Angkor Wat (Camboja) e outros monumentos antigos caem sobre
          ou muito próximos de uma única linha de grande círculo quando plotados num globo.
          A coincidência matemática desse alinhamento é real — verificável com ferramentas de
          cartografia esférica — embora a explicação científica predominante seja que se trata
          de um padrão emergente de seleção: há tantos sítios arqueológicos pelo mundo que
          encontrar um alinhamento entre qualquer grupo selecionado é estatisticamente provável.
          Para ficção de aventura, porém, a premissa é ouro puro: uma civilização antiga que
          construiu monumentos ao longo de um círculo preciso ao redor do globo, escondendo
          algo de incalculável valor em cada ponto — exatamente o tipo de mistério que Indiana
          Jones foi construído para resolver.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          Os Cenários: Locais Reais Reconstruídos
        </h2>
        <p>
          Uma das qualidades mais elogiadas de <em>The Great Circle</em> é a fidelidade visual
          e arquitetônica com que a MachineGames reconstruiu os locais reais que Indiana Jones
          visita ao longo da aventura. O jogo leva o personagem por uma série de destinos que
          cobrem vários dos pontos do Grande Círculo real — e que oferecem diversidade visual
          e cultural considerável entre si.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Local</th>
                <th className="text-left py-3 px-4 w-1/4 break-words">País / Região</th>
                <th className="text-left py-3 px-4 w-1/2 break-words">Contexto Histórico</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Marshall College", "EUA (Connecticut)", "Base de operações de Indy como professor de arqueologia — inspirada em Yale e outras universidades da Ivy League, onde a série sempre situou o alter ego acadêmico do personagem"],
                ["Vaticano", "Roma, Itália", "Arquivo Secreto do Vaticano (Archivum Secretum Apostolicum Vaticanum), criado em 1612 pelo Papa Paulo V; em 1937 a Igreja mantinha relação tensa com os governos fascistas europeus"],
                ["Gizé / Cairo", "Egito", "Platô de Gizé com as pirâmides e a Grande Esfinge — construídas durante a IV Dinastia do Egito Antigo (c. 2600–2500 a.C.); em 1937 o Egito era protetorado britânico formalmente independente desde 1922"],
                ["Sukhothai", "Tailândia", "Antiga capital do Reino de Sukhothai (séculos XIII–XIV), considerado o primeiro reino unificado tailandês; templos budistas e relevos históricos bem preservados, alguns Patrimônio da UNESCO"],
                ["Madagascar", "África / Oceano Índico", "Ilha do Oceano Índico com biodiversidade única; em 1937 era colônia francesa (Madagascar francesa) — contexto de colonialismo europeu que o jogo usa como pano de fundo político"],
              ].map(([local, pais, contexto], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-xs break-words">{local}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{pais}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{contexto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A escolha do Vaticano como um dos cenários principais é especialmente acertada do ponto
          de vista de design de mundo: o Arquivo Secreto do Vaticano — cujo nome em latim,
          <em>Secretum</em>, significa "privado" ou "reservado" e não literalmente "secreto" no
          sentido conspiratório — contém documentos históricos que remontam ao século VIII e é
          uma das maiores e mais ricas coleções documentais do mundo, com aproximadamente 85
          quilômetros lineares de prateleiras. O acesso foi historicamente restrito a pesquisadores
          credenciados, o que alimentou séculos de especulação popular sobre seu conteúdo —
          exatamente o tipo de mistério que funciona como combustível narrativo para uma aventura
          de Indiana Jones.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Harrison Ford e Troy Baker: Duas Vozes para um Personagem
        </h2>
        <p>
          Um dos aspectos mais discutidos antes do lançamento de <em>The Great Circle</em> foi a
          questão de como representar Indiana Jones digitalmente. Harrison Ford, que interpretou
          o personagem em todos os cinco filmes, tinha 82 anos no momento do lançamento do jogo
          — idade que tornava uma performance de captura de movimento completa impraticável para
          a versão jovem do personagem necessária para uma aventura de ação ambientada em 1937.
          A solução adotada pela MachineGames foi dividir a performance: Harrison Ford gravou
          voz e forneceu sua likeness para o modelo do rosto de Indy, enquanto Troy Baker —
          ator de voz americano com vasto histórico em games, incluindo Joel em <em>The Last
          of Us</em> (2013) e o Coringa em <em>Batman: Arkham Origins</em> (2013) — performou
          o personagem nos momentos de ação e dublagem principal do jogo, capturando o tom e
          as inflexões de Ford com precisão suficiente para que a transição entre as duas
          performances passasse despercebida pela maioria dos jogadores.
        </p>
        <p>
          Esse modelo de colaboração entre ator original e dublador de games não é inédito: a
          franquia de games de <em>The Last of Us</em> usou os atores originais da série de
          TV (Pedro Pascal e Bella Ramsey) para o remake de 2023, enquanto produções anteriores
          frequentemente recorriam a dubladores independentes mesmo quando os atores originais
          eram abordados. No caso de Indiana Jones, a participação ativa de Harrison Ford —
          que raramente se envolve em extensões do franchise fora dos filmes — foi destacada
          pela Lucasfilm Games como indicativo do nível de cuidado e respeito com que a
          MachineGames tratou o material de origem, e foi um dos elementos que ajudou a
          construir confiança do público antes do lançamento.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Sistema de Jogo: Chicote, Câmera e Abordagem Furtiva
        </h2>
        <p>
          <em>The Great Circle</em> é um jogo de ação e aventura em primeira pessoa — uma escolha
          de design que gerou debate antes do lançamento, já que os filmes apresentam Indiana
          Jones sempre em perspectiva de terceira pessoa, e muitos fãs esperavam um jogo de
          câmera externa mais cinematográfico. A MachineGames justificou a escolha pela imersão:
          em primeira pessoa, o jogador literalmente vê as mãos de Indy manipulando o chicote,
          folheando livros de pistas e escalando estruturas — criando uma sensação de presença
          que perspectiva em terceira pessoa raramente oferece. A decisão foi comparada à
          abordagem adotada pela própria Bethesda nos jogos da série Elder Scrolls e Fallout,
          que também operam em primeira pessoa apesar de suas origens em perspectivas diferentes.
        </p>
        <p>
          O chicote é a ferramenta central do jogo e tem usos múltiplos: combate à distância
          para desarmar e atordoar inimigos, travessia para balançar entre plataformas e cruzar
          abismos, manipulação ambiental para puxar objetos e abrir passagens, e interações
          específicas de puzzle que exigem amarrar ou prender elementos do cenário. Esse nível
          de versatilidade transforma o chicote num equivalente funcional ao arpão de Batman
          ou ao gancho de outras franquias de aventura — uma ferramenta que define o vocabulário
          de movimento e interação do jogador com cada ambiente. O sistema de combate em si é
          intencionalmentete menos refinado do que o de um jogo de ação puro: Indy é um arqueólogo
          que briga quando precisa, não um guerreiro treinado, e o jogo recompensa furtividade
          e improvisação sobre confronto direto.
        </p>
        <p>
          O componente de exploração e puzzle é onde o jogo mais se distancia de um shooter
          convencional. Cada área principal contém arquivos, diários, artefatos escondidos e
          passagens secretas que recompensam jogadores que exploram além do caminho óbvio,
          no estilo dos títulos da série Uncharted — inevitável referência dada que Uncharted
          foi abertamente inspirado em Indiana Jones desde seu primeiro jogo em 2007.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Dicas para Quem Está Começando
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "📸 Fotografe tudo com a Câmera de Indy",
              desc: "A câmera fotográfica no inventário de Indy serve para registrar pistas e detalhes de cenário que alimentam o Diário de Campo. Fotografar objetos específicos completa entradas do diário e concede pontos de habilidade extras — não ignore essa mecânica.",
            },
            {
              titulo: "🤫 Priorize furtividade nos primeiros capítulos",
              desc: "Alarmar inimigos em grupos grandes nos cenários iniciais resulta em confrontos difíceis de gerenciar. Indy não é um soldado — cada encontro furtivo bem executado poupa recursos e prepara melhor para os desafios posteriores.",
            },
            {
              titulo: "🎒 Gerencie o inventário antes de entrar em áreas fechadas",
              desc: "Itens curativos e ferramentas de traversal têm slots limitados. Reorganize o inventário antes de entrar em dungeons ou áreas sem retorno — você não vai querer descobrir que está sem suprimentos no meio de um encontro com o boss.",
            },
            {
              titulo: "📖 Leia os documentos encontrados",
              desc: "Os textos nos arquivos e diários não são conteúdo decorativo: frequentemente contêm pistas diretas sobre a localização de segredos e caminhos alternativos que o jogo não sinaliza com marcadores de missão convencionais.",
            },
            {
              titulo: "🪢 Use o chicote para criar rotas de fuga",
              desc: "Em combate aberto, o chicote pode ser usado para prender inimigos momentaneamente e criar janelas de fuga. Nas áreas mais abertas do jogo, desviar de uma briga ruim e reposicionar é sempre uma opção válida — Indy foge com a mesma elegância com que luta.",
            },
            {
              titulo: "🗺️ Explore antes de avançar na história",
              desc: "Cada grande cenário tem colecionáveis, puzzles opcionais e encontros que exigem habilidades desbloqueadas pela progressão. Fazer um pass exploratório antes de acionar o próximo evento de história maximiza o conteúdo acessível.",
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
          Recepção Crítica e Posição na Geração
        </h2>
        <p>
          <em>Indiana Jones and the Great Circle</em> recebeu notas na faixa de 83 a 85 no
          Metacritic nas plataformas de lançamento, com elogios concentrados na fidelidade ao
          tom dos filmes originais, na qualidade da reconstrução dos cenários históricos e na
          performance de Troy Baker como Indiana Jones. As críticas mais frequentes apontaram
          para o sistema de combate como o ponto mais fraco — funcional mas menos refinado do
          que a exploração e os puzzles — e para alguns momentos de inconsistência rítmica na
          segunda metade da campanha.
        </p>
        <p>
          A disponibilidade no Xbox Game Pass desde o dia um teve impacto significativo na
          amplitude de sua audiência: títulos lançados diretamente no serviço de assinatura
          tendem a acumular muito mais jogadores do que suas vendas individuais sugerem,
          e <em>The Great Circle</em> foi consistentemente citado entre os jogos mais jogados
          do catálogo do Game Pass nas semanas seguintes ao lançamento. Para a Lucasfilm
          Games — a divisão da Lucas/Disney responsável por licenciar os jogos da Lucasfilm —
          o sucesso crítico e de audiência do jogo representou validação importante de uma
          estratégia de parceria com estúdios externos de primeira linha, a mesma abordagem
          que também está sendo usada para os jogos de Star Wars em desenvolvimento com outros
          publishers.
        </p>
        <p>
          Para o jogador brasileiro, o contexto histórico rico de cada cenário — do Egito de
          1937 sob influência britânica ao Vaticano durante a ascensão do fascismo italiano
          de Mussolini — transforma <em>The Great Circle</em> numa experiência que tem valor
          educacional genuíno além do entretenimento. A MachineGames demonstrou o mesmo cuidado
          com autenticidade histórica que aplicou nas representações da Segunda Guerra em
          Wolfenstein, e o resultado é um jogo que respeita tanto o legado cinematográfico de
          Indiana Jones quanto os locais reais que recria.
        </p>

      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: Indiana Jones merecia um jogo assim há muito tempo"
      >
        <p>
          Joguei <em>Fate of Atlantis</em> da LucasArts quando criança e nunca entendi por que
          Indiana Jones sumiu dos games por tanto tempo depois do fechamento da LucasArts.{" "}
          <em>The Great Circle</em> chegou como resposta direta a essa ausência — e é uma boa
          resposta. Não é o jogo perfeito: o combate corpo a corpo ainda parece um pouco
          rígido para os padrões de 2024, e o ritmo da segunda metade cai um pouco em relação
          ao começo explosivo no Vaticano. Mas o conjunto é fiel ao personagem de formas que
          importam: Indy improvisa, foge quando não dá para brigar, usa inteligência antes de
          força e tem o sarcasmo de sempre. Troy Baker convenceu completamente. E a MachineGames
          fez com Indiana Jones exatamente o que fez com Wolfenstein: tratou o material de
          origem com seriedade sem perder a diversão. Disponível no Game Pass, não tem motivo
          para adiar.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Indiana Jones and the Great Circle — Site Oficial",
            url: "https://www.indianajonesgame.com/",
            publisher: "Bethesda Softworks / Lucasfilm Games",
            accessedAt: "Julho 2026",
          },
          {
            title: "Indiana Jones and the Great Circle no Steam",
            url: "https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Indiana Jones and the Great Circle Review",
            url: "https://www.ign.com/games/indiana-jones-and-the-great-circle",
            publisher: "IGN",
            accessedAt: "Dezembro 2024",
          },
          {
            title: "Archivum Secretum Apostolicum Vaticanum — Site Oficial",
            url: "https://www.archivioapostolicovaticano.va/",
            publisher: "Santa Sé",
            accessedAt: "Julho 2026",
          },
          {
            title: "MachineGames — Bethesda Studios Profile",
            url: "https://bethesda.net/en/studio/machinegames",
            publisher: "Bethesda Softworks",
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

export default IndianaJonesGreatCircleGuia2024;
