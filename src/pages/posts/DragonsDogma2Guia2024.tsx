import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, Star, Shield, Map, Zap, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo dragons-dogma-2-guia-2024.webp em src/assets/
import heroImg from "@/assets/dragons-dogma-2-guia-2024.webp";

const SLUG = "dragons-dogma-2-guia-completo-2024";
const TITLE =
  "Dragon's Dogma 2 — Guia Completo: Os 12 Anos de Espera de Itsuno, o Sistema de Pawns, as 10 Vocações e Tudo Que Você Precisa Saber";

const DragonsDogma2Guia2024 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Dragon's Dogma 2 · Capcom · PS5 / Xbox / PC · Action RPG · Mundo Aberto
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
            17 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="24 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Dragon's Dogma 2 guia completo Capcom Hideaki Itsuno Pawns vocações 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>22 de março de 2024</strong> para PS5, Xbox Series X|S e PC,{" "}
          <strong>Dragon's Dogma 2</strong> chegou depois de uma espera de{" "}
          <strong>12 anos</strong> — e seu diretor, <strong>Hideaki Itsuno</strong>, admitiu
          publicamente que ameaçou deixar a Capcom se o sequel não fosse aprovado. O resultado
          dessa persistência é um RPG de ação de mundo aberto que recebeu nota{" "}
          <strong>87 no Metacritic</strong> e que oferece uma das experiências de exploração
          mais orgânicas e imprevisíveis do gênero: sem fast travel convencional, com um
          sistema de companheiros de IA chamado <strong>Pawns</strong> que pode ser
          compartilhado online com outros jogadores, e monstros que existem como ameaças
          genuínas no mundo em vez de encontros balanceados para o nível do jogador.
          O jogo também foi alvo de polêmica por microtransações no lançamento — mas
          a qualidade do conteúdo base sobreviveu ao ruído. Este guia cobre tudo:
          a história de Itsuno, as 10 vocações, o sistema de Pawns e como começar
          sem cometer os erros clássicos de iniciantes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Hideaki Itsuno e os 12 Anos de Espera
        </h2>
        <p>
          Hideaki Itsuno é um dos diretores mais respeitados da Capcom, com uma carreira
          que inclui a direção de <em>Devil May Cry 3: Dante's Awakening</em> (2005),{" "}
          <em>Devil May Cry 4</em> (2008) e <em>Devil May Cry 5</em> (2019) — três dos
          jogos de ação mais influentes da história do gênero. Em 2012, Itsuno dirigiu
          o Dragon's Dogma original para PS3 e Xbox 360, um RPG de ação de mundo aberto
          que construiu um dos sistemas de combate mais dinâmicos da sua geração — permitindo
          que jogadores escalassem fisicamente criaturas gigantes como grifos e quimeras
          para atacar pontos vulneráveis específicos, mecânica que antecipou em anos o
          que jogos como Shadow of the Colossus e Monster Hunter World fariam de formas
          diferentes. Dragon's Dogma original vendeu razoavelmente bem e recebeu uma
          expansão, <em>Dragon's Dogma: Dark Arisen</em> (2013), mas nunca alcançou o
          nível de sucesso comercial que justificasse imediatamente uma sequência pelo
          critério financeiro padrão da Capcom.
        </p>
        <p>
          Itsuno passou os doze anos seguintes dirigindo outros projetos enquanto
          continuava a propor Dragon's Dogma 2 internamente. Em entrevistas concedidas
          após o anúncio do sequel em 2022, ele declarou publicamente que havia condicionado
          sua permanência na Capcom à aprovação do projeto — uma declaração notável pela
          raridade com que diretores de estúdios japoneses fazem esse tipo de afirmação
          publicamente, onde a cultura corporativa tende a priorizar harmonia interna
          sobre expressão de conflitos. A aprovação finalmente veio, e com ela a decisão
          de usar o RE Engine — o motor proprietário da Capcom que havia transformado a
          qualidade visual e de desempenho de títulos como Resident Evil 7, Resident Evil
          Village, Monster Hunter Wilds e Devil May Cry 5 — para construir o mundo de
          Dragon's Dogma 2 do zero.
        </p>
        <p>
          O RE Engine é uma das tecnologias de desenvolvimento de jogos mais versáteis
          do Japão atual: originalmente projetado para os games de horror de Resident
          Evil, foi adaptado para ação de terceira pessoa em Devil May Cry 5, para mundo
          aberto massivo em Monster Hunter Wilds e agora para RPG de mundo aberto em
          Dragon's Dogma 2, demonstrando uma flexibilidade técnica que permite à Capcom
          reutilizar conhecimento e ferramentas entre projetos muito diferentes em vez
          de reconstruir pipelines técnicos para cada novo gênero que o estúdio decide
          explorar.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-geek" />
          O Sistema de Pawns: A Mecânica Mais Original do Jogo
        </h2>
        <p>
          O sistema de Pawns é a contribuição mais única de Dragon's Dogma à linguagem
          dos RPGs de ação — e foi preservado e expandido em DD2. Pawns são companheiros
          de inteligência artificial que acompanham o jogador ao longo de toda a jornada.
          O jogador cria seu Pawn Principal (Main Pawn) com o mesmo nível de customização
          do protagonista — aparência, voz, classe e personalidade de combate —, e pode
          recrutar dois Pawns adicionais criados por outros jogadores via conexão online.
          Quando você compartilha seu Main Pawn online, outros jogadores ao redor do mundo
          podem recrutá-lo para suas próprias aventuras, e o Pawn retorna trazendo
          conhecimento acumulado — informações sobre monstros derrotados, localizações
          de itens e estratégias de dungeon que o jogador que o emprestou não havia
          descoberto ainda.
        </p>
        <p>
          Esse sistema de Pawns como entidades vivas que circulam entre partidas de
          diferentes jogadores cria uma dimensão de experiência compartilhada que não
          tem equivalente direto em outros RPGs do mercado. Um Pawn que foi muito
          recrutado por outros jogadores chega de volta com "Rift Crystals" (moeda
          especial usada para recrutar Pawns de alto nível) e carrega experiências
          de combate que se manifestam em comentários durante a batalha — um Pawn que
          foi recrutado por jogadores que enfrentaram muitas Quimeras, por exemplo,
          pode sugerir estratégias específicas para a criatura mesmo que o jogador
          dono nunca a tenha encontrado ainda. É uma forma de jogabilidade cooperativa
          assíncrona que funciona de forma completamente diferente do co-op convencional:
          você nunca joga com outro jogador em tempo real, mas as escolhas e descobertas
          de outros jogadores influenciam sua experiência de formas tangíveis e
          imprevisíveis.
        </p>
        <p>
          A personalidade dos Pawns também é configurável em três dimensões: Combat
          (como o Pawn prioriza combate — agressivo, defensivo ou equilibrado),
          Inclination (como se comporta em diferentes situações — protetor do líder,
          caçador de inimigos, suporte à distância) e uma terceira dimensão de
          comunicação verbal que determina com que frequência o Pawn comenta durante
          a exploração e o combate. Pawns que comentam demais são fonte de frustração
          humorada na comunidade do jogo, especialmente porque seus comentários às vezes
          chegam com atraso de timing em relação aos eventos que descrevem.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          As 10 Vocações: Guia Completo de Classes
        </h2>
        <p>
          Dragon's Dogma 2 oferece dez vocações (classes) para o Arisen (o protagonista),
          divididas em vocações básicas disponíveis desde o início e vocações avançadas
          desbloqueadas progressivamente ao longo da campanha. Cada vocação define
          completamente o estilo de jogo — as habilidades, as armas disponíveis e
          a forma como o personagem se move em combate.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Vocação</th>
                <th className="text-left py-3 px-4 w-1/4 break-words">Tipo</th>
                <th className="text-left py-3 px-4 w-1/2 break-words">Perfil de Jogo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["⚔️ Fighter", "Básica", "Espada e escudo — ataque e defesa equilibrados. Melhor entrada para iniciantes com parry e contra-ataques que recompensam timing. Alta sobrevivência."],
                ["🗡️ Thief", "Básica", "Adagas duplas com foco em velocidade, esquiva e dano em pontos fracos. Alta mobilidade permite escalar monstros mais facilmente. Baixa defesa — high risk, high reward."],
                ["🏹 Archer", "Básica", "Arco com ataques à distância e habilidades de flecha elementais. Essencial para ataques em pontos vulneráveis elevados de monstros grandes. Requer boa gestão de distância."],
                ["✨ Mage", "Básica", "Magia de suporte — cura, buffs elementais e habilidades de proteção. O único curador do jogo; partidas sem Mage no grupo precisam depender de consumíveis para recuperação de HP."],
                ["🔥 Sorcerer", "Básica", "Magia ofensiva de alta potência com tempo de conjuração longo. Os feitiços mais poderosos do jogo em dano bruto mas exige proteção do grupo para conjurar sem interrupção."],
                ["🗡️🛡️ Warrior", "Avançada", "Espadão de duas mãos com ataques pesados de área. Dano massivo por golpe, movimento lento — ideal contra grupos densos de inimigos humanoides."],
                ["🌀 Mystic Spearhand", "Avançada", "Lança mágica que combina ataques físicos e telecinese — pode manipular inimigos e objetos no ambiente. A mais criativa mecanicamente das avançadas."],
                ["🎯 Magick Archer", "Avançada", "Arco mágico com flechas que perseguem automaticamente alvos frágeis e ricocheteiam entre inimigos. Extremamente eficaz contra grupos e inimigos com múltiplos pontos fracos."],
                ["🎭 Trickster", "Avançada", "Foca em ilusões e manipulação de campo — cria clones, distrai inimigos e usa o ambiente. Não causa dano diretamente; vive de fazer os próprios Pawns e inimigos lutarem entre si."],
                ["⚡ Warfarer", "Avançada", "Usa qualquer arma do jogo simultaneamente — máxima versatilidade ao custo de crescimento de habilidades mais lento. Para quem quer experimentar todas as classes numa só."],
              ].map(([voc, tipo, desc], i) => (
                <tr key={i} className={`border-t border-border${tipo === "Avançada" ? " bg-geek/5" : ""}`}>
                  <td className="py-3 px-4 font-semibold text-xs break-words">{voc}</td>
                  <td className={`py-3 px-4 text-xs font-medium ${tipo === "Avançada" ? "text-geek" : "text-muted-foreground"}`}>{tipo}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Uma particularidade importante: <strong>Pawns não podem usar todas as vocações</strong>
          — apenas Fighter, Thief, Archer, Mage e Sorcerer estão disponíveis para os
          companheiros de IA. As cinco vocações avançadas (Warrior, Mystic Spearhand,
          Magick Archer, Trickster e Warfarer) são exclusivas do Arisen, o que cria
          uma distinção mecânica clara entre o protagonista e seus companheiros e garante
          que certas combinações de poder só sejam acessíveis ao jogador. A composição
          ideal de grupo para a maioria dos contextos é Fighter ou Warrior (proteção),
          Mage (cura), Sorcerer ou Archer (dano à distância) e a vocação do Arisen
          escolhida pelo jogador.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          O Mundo Sem Fast Travel Convencional
        </h2>
        <p>
          Uma das decisões de design mais debatidas de Dragon's Dogma 2 é a ausência
          de fast travel convencional no início do jogo. Diferente da grande maioria
          dos RPGs de mundo aberto modernos, que oferecem viagem rápida por mapa
          desbloqueado progressivamente, DD2 exige que o jogador percorra o mundo a
          pé ou de carroça (oxcart) entre destinos — uma escolha deliberada que Itsuno
          defendeu em entrevistas como central à experiência de "exploração como aventura
          genuína" que o jogo busca criar.
        </p>
        <p>
          O sistema de fast travel limitado que existe no jogo usa itens chamados
          Ferrystones (consumíveis) em combinação com Portcrystals (pontos de teleporte
          fixos que o jogador pode posicionar em qualquer local do mapa). O número
          de Portcrystals disponíveis gratuitamente no jogo base é propositalmente
          baixo, forçando o jogador a escolher com cuidado onde posicioná-los —
          criando uma decisão estratégica de gestão de recursos que ressalta o peso
          de cada localização no mundo. Ferrystones podem ser compradas em mercadores
          mas têm preço significativo dentro da economia do jogo.
        </p>
        <p>
          Essa filosofia de design — que prioriza a jornada sobre a chegada — é
          diretamente responsável por alguns dos momentos mais memoráveis que Dragon's
          Dogma 2 proporciona: a viagem de carroça que é atacada por um grifo no meio
          do caminho, o grupo que encontra uma Quimera à noite numa estrada que parecia
          segura, a perseguição a uma Harpia que roubou um item do inventário. Nenhum
          desses eventos acontece em fast travel. São emergências geradas pela
          impossibilidade de evitar o mundo — e são exatamente o tipo de história
          que os jogadores contam uns aos outros depois de terminar o jogo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Dicas Essenciais Para Novos Arisens
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🌙 Nunca viaje à noite sem lanternas e consumíveis",
              desc: "Inimigos noturnos são significativamente mais fortes do que os diurnos nas mesmas regiões. Lanternas são obrigatórias para visibilidade e a maioria dos encontros noturnos foi projetada para ser evitada, não enfrentada nos primeiros níveis.",
            },
            {
              titulo: "📦 Gerencie o peso do inventário constantemente",
              desc: "Peso excessivo reduz a velocidade de movimento e a stamina disponível para escalada e esquiva — as mecânicas mais importantes de combate contra criaturas grandes. Deposite itens em cofres de abrigo regularmente e não acumule materiais de crafting que não vai usar.",
            },
            {
              titulo: "🧗 Escale os monstros grandes em vez de atacar os pés",
              desc: "Grifos, Ciclopes e Drakes têm pontos fracos no topo do corpo inacessíveis a pé. Subir neles (o Thief faz isso melhor, mas todas as classes conseguem) e atacar a cabeça ou as asas é a forma mais eficiente de derrotá-los e frequentemente a única forma prática de impedi-los de fugir.",
            },
            {
              titulo: "💎 Posicione Portcrystals em locais de missão, não em cidades",
              desc: "Cidades têm Ferrystones disponíveis para compra regularmente. Locais de missão remotos — especialmente dungeons de missão única — valem muito mais como posições de Portcrystal porque você não vai querer percorrer o mesmo caminho longo duas vezes.",
            },
            {
              titulo: "🧩 Fale com todos os NPCs nas cidades",
              desc: "Dragon's Dogma 2 não tem um marcador de missão claro para muitas quests secundárias — elas são iniciadas por conversas com NPCs específicos que não são marcados no mapa. Ignorar NPCs significa perder conteúdo que não vai reaparecer.",
            },
            {
              titulo: "🦁 Cuide do seu Main Pawn como um investimento",
              desc: "Pawns bem equipados e com vocações úteis são mais recrutados por outros jogadores online, gerando Rift Crystals passivamente. Investir em equipamento e conhecimento do seu Main Pawn tem retorno financeiro real dentro da economia do jogo.",
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
          A Polêmica das Microtransações e Como Lê-la Corretamente
        </h2>
        <p>
          No dia do lançamento de Dragon's Dogma 2, a Capcom disponibilizou na loja
          digital uma série de DLCs pagos que incluíam Portcrystals, Ferrystones
          e outros itens de conveniência disponíveis dentro do próprio jogo base através
          de exploração e compras de mercadores. A reação da comunidade foi imediata e
          negativa: as avaliações no Steam caíram para "Mista" nas primeiras horas após
          o lançamento, num padrão de review bombing semelhante ao que havia ocorrido
          com Helldivers 2 alguns meses antes, mas com uma diferença importante de
          contexto.
        </p>
        <p>
          A diferença entre a situação de DD2 e casos genuinamente problemáticos de
          microtransações agressivas em outros jogos é que nenhum dos itens vendidos
          como DLC pago em Dragon's Dogma 2 era exclusivo do DLC — todos podiam ser
          obtidos integralmente dentro do jogo sem qualquer pagamento adicional. A Capcom
          estava vendendo conveniência, não conteúdo bloqueado. Essa distinção importa
          não porque tornou as microtransações uma boa prática de design — a maioria
          das críticas sobre a filosofia de vender acesso facilitado a mecânicas de
          um jogo de preço integral segue válida — mas porque a qualidade do jogo
          base era completamente independente de qualquer compra adicional. Jogadores
          que compraram Dragon's Dogma 2 por seu preço integral e nunca tocaram nos
          DLCs tiveram acesso à experiência completa que Itsuno projetou.
        </p>
        <p>
          O ruído em torno das microtransações afetou temporariamente a percepção pública
          do jogo mas não sua avaliação crítica especializada: a nota de 87 no Metacritic
          reflete a avaliação do jogo base, e as críticas mais aprofundadas publicadas
          semanas após o lançamento — quando o debate inicial havia se acalmado —
          convergiram para uma avaliação positiva da experiência de mundo aberto, do
          sistema de combate contra criaturas grandes e da originalidade do sistema
          de Pawns. O jogo vendeu bem o suficiente para que a Capcom declarasse
          satisfação com seu desempenho comercial nos relatórios financeiros subsequentes.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Já encontrou um Grifo na estrada? 🦅
          </h3>
          <p className="text-muted-foreground">
            Qual é sua vocação favorita em Dragon's Dogma 2? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: doze anos de espera e valeu cada um deles"
      >
        <p>
          Joguei Dragon's Dogma original quando saiu em 2012 e fiquei chateado que nunca
          recebeu uma sequência à altura. Doze anos depois, Dragon's Dogma 2 entregou
          exatamente o que eu esperava — e algumas coisas que não esperava. O sistema
          de Pawns é ainda mais interessante agora que a base de jogadores é maior e
          os Pawns chegam carregados de conhecimento genuíno sobre criaturas que você
          ainda não encontrou. O mundo sem fast travel convencional me irritou nas
          primeiras horas e me fez apreciar cada chegada a um novo local nas horas
          seguintes — porque eu havia percorrido o caminho. A polêmica das microtransações
          foi barulho real sobre uma prática questionável mas que não afetou em nada
          a experiência de jogo para quem simplesmente ignorou os DLCs. E Itsuno fez
          o jogo que queria fazer — doze anos de espera, ameaça de saída incluída.
          Esse tipo de comprometimento criativo raramente produz resultados medíocres,
          e DD2 não é medíocre em nenhuma dimensão que importa.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Dragon's Dogma 2 — Site Oficial Capcom",
            url: "https://www.dragonsdogma.com/2/en-us/",
            publisher: "Capcom",
            accessedAt: "Julho 2026",
          },
          {
            title: "Dragon's Dogma 2 no Steam",
            url: "https://store.steampowered.com/app/2054970/Dragons_Dogma_2/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "Dragon's Dogma 2 — Metacritic",
            url: "https://www.metacritic.com/game/dragons-dogma-2/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Dragon's Dogma 2 Review",
            url: "https://www.ign.com/games/dragons-dogma-2",
            publisher: "IGN",
            accessedAt: "Março 2024",
          },
          {
            title: "Capcom — RE Engine: tecnologia do estúdio",
            url: "https://www.capcom.co.jp/rd/engine.html",
            publisher: "Capcom",
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

export default DragonsDogma2Guia2024;
