import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Star, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo black-myth-wukong-guia-2024.webp em src/assets/
import heroImg from "@/assets/black-myth-wukong-guia-2024.webp";

const SLUG = "black-myth-wukong-guia-completo-2024";
const TITLE =
  "Black Myth: Wukong — Guia Completo: A Jornada ao Oeste, o Studio Game Science e Como Dominar o Rei Macaco";

const BlackMythWukongGuia2024 = () => {
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
            Black Myth · Game Science · Action RPG · Mitologia Chinesa
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
            10 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="10 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Black Myth Wukong guia completo Game Science Jornada ao Oeste 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>20 de agosto de 2024</strong> para PC e PS5,{" "}
          <strong>Black Myth: Wukong</strong> tornou-se o maior lançamento da história dos videogames
          desenvolvido por um estúdio chinês — e um dos eventos mais marcantes do calendário de games
          de toda a década. Com mais de <strong>2,4 milhões de jogadores simultâneos no Steam</strong>{" "}
          no dia do lançamento, quebrando recordes históricos na plataforma, e vendas que ultrapassaram
          10 milhões de cópias nos primeiros três dias, o jogo da Game Science colocou a indústria
          chinesa de games no mapa global de forma irreversível. Baseado em{" "}
          <em>A Jornada ao Oeste</em>, romance clássico chinês do século XVI, é ao mesmo tempo um
          action RPG de combate de bastão rigoroso e um tour de force visual por templos, montanhas
          e florestas de uma China mítica reconstruída com detalhes arqueológicos. Este guia cobre
          a obra original, o estúdio, o sistema de combate e tudo que você precisa saber antes de
          começar sua jornada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />A Obra Original: A Jornada ao Oeste
        </h2>
        <p>
          Para entender Black Myth: Wukong em profundidade, é indispensável conhecer a obra literária
          que o inspirou. <em>A Jornada ao Oeste</em> (西遊記, <em>Xī Yóu Jì</em> em mandarim) é um
          dos quatro grandes romances clássicos da literatura chinesa — ao lado de{" "}
          <em>O Sonho da Câmara Vermelha</em>, <em>À Margem da Água</em> e{" "}
          <em>O Romance dos Três Reinos</em> — e é atribuído ao escritor Wu Cheng'en, publicado por
          volta de 1592 durante a Dinastia Ming. O romance tem 100 capítulos e narra a peregrinação
          do monge budista Tang Sanzang (baseado no monge histórico real Xuanzang, que viveu entre
          602 e 664 d.C.) da China até a Índia em busca de escrituras budistas sagradas, acompanhado
          de três discípulos: Sun Wukong (o Rei Macaco), Zhu Bajie (o Porco) e Sha Wujing (o Monge
          das Areias).
        </p>
        <p>
          Sun Wukong é o personagem central e mais conhecido da obra — e o que inspira diretamente o
          protagonista de Black Myth. Na narrativa original, ele nasce de uma pedra mágica na Montanha
          das Flores e Frutas, aprende artes marciais e magia com um mestre imortal, rouba o bastão
          mágico Ruyi Jingu Bang do Palácio do Dragão (um bastão de ferro que pesa mais de oito
          toneladas e pode encolher até o tamanho de uma agulha), proclama-se "Grande Sábio Igual ao
          Céu" e declara guerra ao próprio Jade Imperador antes de ser aprisionado sob a Montanha das
          Cinco Fases pelo Buda por 500 anos. Sua libertação pelo monge Tang Sanzang e a posterior
          jornada à Índia formam o arco principal dos 100 capítulos do romance. A obra foi adaptada
          inúmeras vezes para televisão, teatro, mangá e anime — a mais famosa adaptação em anime
          sendo o <em>Dragon Ball</em> de Akira Toriyama, que usa Sun Wukong como referência direta
          para o personagem Son Goku, inclusive mantendo o bastão (Nyoibo) e a nuvem voadora
          (Kinto'un) como elementos narrativos centrais.
        </p>
        <p>
          Black Myth: Wukong não conta a mesma história do romance — em vez disso, toma o mundo e
          a mitologia da obra como ponto de partida para uma narrativa original que ocorre após os
          eventos da peregrinação. O protagonista, chamado de "Predestinado" (天命人, Tiānmìng Rén),
          não é Sun Wukong em sua forma original, mas uma figura relacionada que embarca em uma
          jornada para recuperar as Relíquias do Rei Macaco espalhadas pelo mundo — reconstruindo
          gradualmente a história e o legado do personagem através das memórias e encontros ao longo
          dos seis capítulos do jogo.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          A Game Science: Seis Anos de Desenvolvimento
        </h2>
        <p>
          A Game Science foi fundada em 2014 em Shenzhen, na China, por Feng Ji e outros ex-funcionários
          da Tencent Games — a divisão de jogos do conglomerado Tencent, maior empresa de jogos do
          mundo por receita. Feng Ji, diretor criativo de Black Myth: Wukong, havia trabalhado
          anteriormente no popular jogo online chinês <em>Zhengtu Online</em> e depois na Tencent.
          O estúdio começou como subsidiária parcial da Tencent antes de se tornar independente,
          embora a Tencent tenha mantido participação minoritária na empresa — uma estrutura comum
          no ecossistema de games chinês, onde a gigante tecnológica tem participações em centenas
          de estúdios de desenvolvimento ao redor do mundo, incluindo parcelas da Epic Games, Riot
          Games e Supercell.
        </p>
        <p>
          O desenvolvimento de Black Myth: Wukong começou oficialmente por volta de 2018 e se estendeu
          por aproximadamente seis anos — um ciclo longo mesmo pelos padrões de produções AAA ocidentais,
          mas justificado pela escala de ambição técnica do projeto. O primeiro trailer do jogo, divulgado
          em agosto de 2020, causou impacto imediato internacional ao apresentar visuais de altíssima
          qualidade rodando no Unreal Engine 4 com animações de combate fluidas e cenários inspirados
          em arquitetura budista e paisagens da China meridional. O vídeo acumulou dezenas de milhões
          de visualizações nas primeiras semanas, num momento em que a indústria ocidental mal conhecia
          a existência da Game Science — transformando o estúdio do dia para a noite em um dos projetos
          mais aguardados dos anos seguintes. Trailers subsequentes mantiveram o nível de expectativa
          elevado ao revelar progressivamente o sistema de transformações de Wukong, a variedade de
          bosses e a amplitude dos cenários reconstruídos a partir de referências arquitetônicas reais.
        </p>
        <p>
          O jogo foi construído no Unreal Engine 5 na versão final lançada em 2024, após a migração
          do motor durante o desenvolvimento — uma decisão que contribuiu para a qualidade visual
          final mas também para o ciclo de produção prolongado. A Epic Games, desenvolvedora do Unreal
          Engine, chegou a usar Black Myth: Wukong como caso de demonstração das capacidades do UE5
          em apresentações técnicas antes do lançamento, algo que normalmente a empresa faz apenas com
          produções de altíssimo perfil.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          O Sistema de Combate: Bastão, Transformações e Feitiços
        </h2>
        <p>
          Black Myth: Wukong é classificado pela Game Science como um "action RPG de aventura" e o
          sistema de combate reflete essa descrição: mais próximo de um action game fluido do que de
          um Soulslike lento e punitivo, mas com profundidade estratégica suficiente para recompensar
          domínio técnico nas lutas contra bosses mais avançados. O bastão Ruyi Jingu Bang é a arma
          única do jogo — não há sistema de troca de armas — mas sua versatilidade é explorada através
          de três posições (stances) com conjuntos de movimentos completamente diferentes:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              stance: "🌀 Smash Stance (Modo Devastador)",
              desc: "Focado em ataques carregados com dano pesado em área. Requer tempo de carregamento mas recompensa com impacto e atordoamento de inimigos. Ideal contra grupos densos e chefes com armadura pesada.",
            },
            {
              stance: "⚡ Pillar Stance (Modo Poste)",
              desc: "Transforma o bastão num poste gigante para ataques verticais descendentes. Permite combos aéreos e tem excelente alcance. Particularmente eficaz contra inimigos grandes com hitbox elevada.",
            },
            {
              stance: "🎯 Thrust Stance (Modo Lança)",
              desc: "Converte o bastão em ataques rápidos de estocada com alta frequência de golpes. Ideal para interromper ataques de inimigos ágeis e maximizar dano por segundo (DPS) em janelas curtas de vulnerabilidade.",
            },
          ].map(({ stance, desc }) => (
            <div
              key={stance}
              className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4"
            >
              <span className="text-xl shrink-0">{stance.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">
                  {stance.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Além das três stances, o sistema de feitiços é o que diferencia Black Myth dos action games
          mais lineares do gênero. O Predestinado herda as habilidades míticas de Sun Wukong ao longo
          da jornada, incluindo a capacidade de se transformar temporariamente em criaturas derrotadas
          — usando suas formas, ataques e habilidades especiais por um período limitado. Essa mecânica,
          central à mitologia de Sun Wukong no romance original (onde ele pode se transformar em 72
          formas diferentes), é implementada como um sistema de progressão secundária: cada
          transformação tem sua própria barra de recurso, conjunto de ataques e utilidade situacional,
          incentivando experimentação ao longo das dezenas de horas de campanha.
        </p>
        <p>
          Os feitiços de suporte incluem imobilização de inimigos (baseada no poder de Sun Wukong
          de petrificar adversários com seu sopro no romance), duplicatas do personagem para distração
          e dano simultâneo, e o icônico "cabelo de macaco" — em que Sun Wukong transforma pelos de
          seu próprio corpo em clones — aqui implementado como uma habilidade de área que gera
          múltiplos aliados temporários ao mesmo tempo, recurso valioso nas batalhas mais caóticas
          dos capítulos finais.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Os Seis Capítulos e os Cenários Reais
        </h2>
        <p>
          Uma das dimensões menos discutidas de Black Myth: Wukong fora da China é o cuidado com que
          a Game Science reconstruiu digitalmente locais arquitetônicos e paisagísticos reais do país
          como base para os cenários do jogo. Diferente de um fantasy genérico, os ambientes de cada
          capítulo foram desenvolvidos com referência direta a templos budistas e taoistas reais,
          esculturas e relevos históricos de diferentes períodos da história chinesa.
        </p>

        <div className="not-prose my-4 w-full overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Capítulo</th>
                <th className="text-left py-3 px-4 w-1/4 break-words">Ambiente</th>
                <th className="text-left py-3 px-4 w-1/2 break-words">Referência Real</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 — Montanha das Flores e Frutas", "Floresta e cavernas vulcânicas", "Baseada no Monte Huaguo (花果山) do romance; estética inspirada em templos rupestres budistas do sul da China"],
                ["2 — Pântano Amarelo", "Pântanos, torres e ruínas aquáticas", "Referências a arquitetura das Dinastias Tang e Song em regiões alagadas do Yangtze"],
                ["3 — Planície das Nuvens", "Desertos, templos e mirantes elevados", "Inspirado em grutas budistas como Mogao (Dunhuang), Patrimônio da UNESCO"],
                ["4 — Vale dos Ventos", "Vales nevados e fortalezas de montanha", "Referências a templos taoistas do Monte Wudang, na Província de Hubei"],
                ["5 — Maré de Areia", "Deserto com estruturas sepulcrais", "Inspirado em sítios arqueológicos da Rota da Seda no noroeste da China"],
                ["6 — Montanha de Lingyun", "Pináculo celestial e palácio final", "Baseado no Monte Lingshan (靈山) — a Montanha da Montanha do romance — com referências ao Templo de Leshan e seu Buda Gigante"],
              ].map(([cap, amb, ref], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-xs break-words">{cap}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{amb}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Essa conexão com o patrimônio arquitetônico real foi reconhecida pelo próprio governo chinês:
          após o lançamento do jogo, a mídia estatal chinesa e o Ministério da Cultura destacaram Black
          Myth: Wukong como exemplo de "exportação cultural" — um produto que levaria jogadores
          estrangeiros a conhecer e interessar-se pela história e pelos sítios históricos da China.
          Algumas das províncias cujos monumentos serviram de referência ao jogo lançaram campanhas
          de turismo explicitamente vinculadas ao lançamento, com pacotes que incluíam visitas guiadas
          aos templos e grutas que aparecem recriados nos cenários do jogo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O Recorde de Steam e o Impacto Comercial
        </h2>
        <p>
          Os números de lançamento de Black Myth: Wukong foram historicamente significativos mesmo
          pelos padrões da indústria global. No dia 20 de agosto de 2024, o jogo atingiu o pico de
          2,4 milhões de jogadores simultâneos na Steam, tornando-se o segundo jogo com mais jogadores
          simultâneos em toda a história da plataforma até aquele momento — superado apenas pelo
          PlayerUnknown's Battlegrounds (PUBG), que havia estabelecido o recorde em 2018 com
          aproximadamente 3,2 milhões de jogadores simultâneos em seu pico. Para um jogo single-player
          — categoriamente diferente de um battle royale que por definição retém todos os jogadores
          ativos no mesmo momento — o número é ainda mais impressionante, pois indica que uma parcela
          extraordinária dos compradores abriu o jogo simultaneamente no dia do lançamento.
        </p>
        <p>
          A Game Science anunciou que o jogo vendeu mais de 10 milhões de cópias nos primeiros três
          dias após o lançamento, número confirmado em comunicados oficiais do estúdio. Ao longo dos
          meses seguintes, analistas de mercado e publicações especializadas estimaram que as vendas
          totais do jogo ultrapassaram 20 milhões de unidades até o final de 2024, incluindo a versão
          de PS5 lançada posteriormente ao PC. Esses números posicionam Black Myth: Wukong entre os
          jogos single-player mais vendidos de sua geração em tão curto período.
        </p>
        <p>
          O impacto foi sentido além das vendas: no The Game Awards de 2024, o jogo recebeu a premiação
          de Melhor Jogo de Ação, e foi amplamente indicado a Jogo do Ano — categoria que acabou
          vencida por Astro Bot da Team Asobi (Sony). A presença de um estúdio chinês de primeira
          viagem competindo com produções estabelecidas de grandes publishers ocidentais foi um marco
          histórico para a indústria global, e abriu discussões sobre como o mercado de desenvolvimento
          de jogos AAA está se tornando genuinamente multipolar, com centros criativos competitivos
          emergindo fora dos tradicionais polos americano, japonês e europeu.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais para Sua Jornada
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-2/5 break-words">Dica</th>
                <th className="text-left py-3 px-4 w-3/5 break-words">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Explore cada área antes de avançar", "Bosses opcionais dão materiais de crafting raros e fragmentos de memória que expandem o lore da Jornada ao Oeste. Avançar rápido na história deixa conteúdo substancial para trás."],
                ["Invista em uma stance antes de experimentar todas", "Dividir pontos igualmente entre as três stances cria um personagem mediano nas primeiras horas. Domine Smash ou Thrust primeiro — mude depois de entender o ritmo do jogo."],
                ["Use Imobilização em bosses difíceis", "O feitiço de Imobilização (Immobilize) paralisa brevemente inimigos, incluindo muitos bosses. É a habilidade mais subestimada do jogo e pode transformar confrontos frustrantes em duelos gerenciáveis."],
                ["Guanyin's Chalice — use entre brigas, não durante", "A tigela de cura pode ser interrompida por ataques. Use o período de invulnerabilidade pós-esquiva para curar, nunca no meio do combate aberto."],
                ["Crafting de armadura segue os capítulos", "Cada capítulo tem seu próprio set de armadura com bônus temáticos. Não force crafting de sets de capítulos anteriores — o jogo fornece materiais suficientes para sets atuais com exploração moderada."],
                ["Aprenda os padrões de ataque antes de atacar", "Diferente de Soulslikes, Wukong premia agressividade — mas apenas depois de aprender os padrões. Os primeiros dois a três encontros com cada boss são de observação; o combate eficiente vem do terceiro em diante."],
              ].map(([dica, detalhe], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold break-words text-sm">{dica}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{detalhe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Comparação com Soulslikes: É o Mesmo Gênero?
        </h2>
        <p>
          Uma das discussões mais recorrentes em torno de Black Myth: Wukong desde seu lançamento é
          a classificação genérica do jogo. Muitos veículos especializados o descreveram como um
          "Soulslike" — referência ao estilo de game design popularizado pela FromSoftware com Dark
          Souls, Bloodborne e Elden Ring — mas a Game Science e parte da comunidade resistem a essa
          classificação, argumentando que as diferenças são estruturais demais para agrupá-los no
          mesmo gênero.
        </p>
        <p>
          As semelhanças são reais: bosses com padrões de ataque a serem aprendidos por tentativa e
          erro, punição por morte (perda de itens de cura coletados), ausência de mapa convencional
          e uma narrativa fragmentada revelada através de itens e ambientes em vez de cutscenes
          expositivas. No entanto, as diferenças são igualmente substanciais. Black Myth não tem um
          sistema de progressão de atributos com distribuição de pontos — a evolução do personagem
          é linear e determinada pelos materiais coletados, não por escolhas de build. Não há
          multijogador (online ou local). O ritmo de combate é significativamente mais ágil e
          ofensivo do que qualquer Soulslike, mais próximo de God of War ou Devil May Cry em sua
          natureza de action game. E a curva de dificuldade, embora presente e sentida nos capítulos
          finais, é consideravelmente mais acessível do que a de Elden Ring ou Dark Souls 3 —
          especialmente para jogadores que usam eficientemente o sistema de transformações e feitiços.
        </p>
        <p>
          A classificação mais precisa provavelmente é "action RPG de aventura com elementos de
          Soulslike" — termo que a própria Game Science utilizou em materiais de marketing e que
          captura adequadamente a natureza híbrida de um jogo que bebeu claramente da tradição
          FromSoftware sem se submeter integralmente às suas convenções.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você já embarcou na Jornada ao Oeste? 🐒
          </h3>
          <p className="text-muted-foreground">
            Qual capítulo te deu mais trabalho? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o jogo que mudou o que esperamos da indústria chinesa"
      >
        <p>
          Black Myth: Wukong é o tipo de jogo que faz você rever preconceitos. Antes de 2024, a
          maioria dos jogadores ocidentais — e brasileiros — associava games chineses a mobile gacha
          ou clones de jogos já existentes. Wukong não é nenhum dos dois: é um projeto com identidade
          visual fortíssima, sistema de combate com profundidade real e um material de origem (
          <em>A Jornada ao Oeste</em>) que merece ser mais conhecido aqui no Brasil. O jogo tem
          problemas — a câmera em espaços fechados ainda incomoda, e a narrativa é deliberadamente
          opaca para quem não conhece a mitologia de origem — mas o conjunto é impressionante demais
          para ignorar. Para o jogador brasileiro, o preço na Steam BR costuma ser mais acessível do
          que a versão americana graças ao ajuste regional. Vale aproveitar enquanto essa diferença
          ainda existe.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Game Science — Site Oficial de Black Myth: Wukong",
            url: "https://www.heishenhua.com/",
            publisher: "Game Science",
            accessedAt: "Julho 2026",
          },
          {
            title: "Black Myth: Wukong no Steam",
            url: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "The Game Awards 2024 — Winners",
            url: "https://thegameawards.com/",
            publisher: "The Game Awards",
            accessedAt: "Dezembro 2024",
          },
          {
            title: "IGN — Black Myth: Wukong Review",
            url: "https://www.ign.com/games/black-myth-wukong",
            publisher: "IGN",
            accessedAt: "Agosto 2024",
          },
          {
            title: "Fextralife — Black Myth: Wukong Wiki",
            url: "https://blackmythwukong.wiki.fextralife.com/",
            publisher: "Fextralife",
            accessedAt: "Julho 2026",
          },
          {
            title: "A Jornada ao Oeste — Britannica",
            url: "https://www.britannica.com/topic/Journey-to-the-West",
            publisher: "Encyclopædia Britannica",
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

export default BlackMythWukongGuia2024;
