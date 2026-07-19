import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Zap, BookOpen, Star, Shield, Map, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo helldivers-2-guia-completo-2024.webp em src/assets/
import heroImg from "@/assets/helldivers-2-guia-completo-2024.webp";

const SLUG = "helldivers-2-guia-completo-2024";
const TITLE =
  "Helldivers 2 — Guia Completo: A Sátira de Starship Troopers, a Polêmica do PSN e Como Sobreviver à Democracia Gerenciada";

const Helldivers2Guia2024 = () => {
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
            Helldivers 2 · Arrowhead · PS5 / PC · Co-op · Sátira Militar
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
            12 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            17 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="12 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Helldivers 2 guia completo Arrowhead Starship Troopers sátira guerra galáctica 2024"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>8 de fevereiro de 2024</strong> para PS5 e PC,{" "}
          <strong>Helldivers 2</strong> se tornou o maior fenômeno multiplayer cooperativo
          do ano — e um dos lançamentos mais surpreendentes da história da Sony Interactive
          Entertainment. Desenvolvido pela <strong>Arrowhead Game Studios</strong>, estúdio
          sueco de tamanho médio com histórico de jogos de nicho, o jogo atingiu{" "}
          <strong>458.709 jogadores simultâneos no Steam</strong> no pico do lançamento e
          vendeu mais de <strong>12 milhões de cópias nas primeiras doze semanas</strong> —
          números que ninguém, incluindo a própria Sony, havia previsto. Uma sátira explícita
          ao militarismo e à propaganda patriótica inspirada no filme <em>Starship Troopers</em>{" "}
          de Paul Verhoeven (1997), com um sistema de guerra galáctica controlado em tempo
          real por um funcionário da Arrowhead apelidado de "Joel" pela comunidade, e
          protagonista de uma das maiores polêmicas de relações entre publisher e jogadores
          da história recente dos games. Este guia explica tudo: a inspiração cinematográfica,
          o estúdio, como funciona a guerra galáctica e o que a crise do PSN de maio de 2024
          ensinou à indústria.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          A Inspiração: Starship Troopers e a Sátira que Poucos Entenderam
        </h2>
        <p>
          Para compreender Helldivers 2 em profundidade, é indispensável conhecer sua fonte
          primária de inspiração: <em>Starship Troopers</em> (1997), filme de ficção científica
          dirigido pelo cineasta holandês Paul Verhoeven. O filme é baseado no romance homônimo
          de Robert A. Heinlein (1959), mas a adaptação de Verhoeven subverte radicalmente
          o tom da obra original: enquanto Heinlein escreveu um romance que muitos intérpretes
          leram como defesa do militarismo e da meritocracia militar, Verhoeven transformou
          a história numa sátira ferozmente anti-fascista disfarçada de blockbuster de ação.
          O cineasta, que cresceu na Holanda ocupada pela Alemanha Nazista durante a Segunda
          Guerra Mundial e vivenciou de perto os mecanismos de propaganda de um regime
          totalitário, construiu <em>Starship Troopers</em> como uma crítica visual ao
          patriotismo vazio, à glorificação da guerra e à desumanização do inimigo — usando
          a estética e a linguagem dos filmes de propaganda nazistas e soviéticos de forma
          deliberada e irônica.
        </p>
        <p>
          O filme foi um fracasso comercial relativo no lançamento — custou aproximadamente
          US$ 105 milhões e arrecadou cerca de US$ 121 milhões mundialmente, resultado
          modesto para um blockbuster de ciência científica da época — em parte porque grande
          parte do público norte-americano assistiu ao filme sem perceber a sátira, interpretando-o
          como exatamente o tipo de glorificação militar que ele pretendia criticar. Essa
          ambiguidade intencional é uma das marcas de Verhoeven, que usou a mesma abordagem
          em <em>RoboCop</em> (1987) — uma crítica ao capitalismo corporativo e à brutalidade
          policial embalada como filme de ação de entretenimento. Com o tempo, <em>Starship
          Troopers</em> ganhou reconhecimento crítico crescente como obra de sátira sofisticada,
          e é hoje considerado um dos filmes de ficção científica mais relevantes dos anos 1990.
        </p>
        <p>
          Helldivers 2 herda essa ambiguidade deliberada como escolha de design central.
          Os jogadores controlam "Helldivers" — soldados de élite da "Super Terra" (Super
          Earth), uma Terra futurística governada por uma "Democracia Gerenciada" (Managed
          Democracy) que na prática funciona como um Estado autoritário militarista com
          propaganda constante, cidadania restrita a quem serve na guerra e um sistema político
          onde "votar" significa ratificar as decisões já tomadas pelos líderes. A propaganda
          in-game — nos vídeos de recrutamento que abrem o jogo, nas transmissões de rádio
          durante as missões, nos comunicados oficiais da "Super Terra" — imita com precisão
          cirúrgica a linguagem e a estética da propaganda real de regimes autoritários do
          século XX. O jogador que entende a referência joga com um sorriso sardônico; o
          que não entende simplesmente se diverte atirando em insetos gigantes. Ambas as
          experiências são válidas — e essa dupla leitura é exatamente o que Verhoeven
          planejou para <em>Starship Troopers</em> 27 anos antes.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Arrowhead Game Studios: Do Nicho ao Fenômeno Global
        </h2>
        <p>
          A Arrowhead Game Studios foi fundada em 2009 em Estocolmo, na Suécia, por Johan
          Pilestedt e um grupo de colegas que se conheceram durante o desenvolvimento de
          projetos estudantis e independentes. O estúdio lançou seu primeiro jogo, <em>Magicka</em>,
          em janeiro de 2011 — um jogo cooperativo de ação e humor que combinava magia com
          um sistema de combinação de elementos completamente caótico e deliberadamente
          propenso a fogo amigo entre os jogadores. <em>Magicka</em> foi um sucesso indie
          inesperado, vendendo mais de um milhão de cópias rapidamente e gerando múltiplas
          expansões e uma sequência, estabelecendo a identidade criativa do estúdio: jogos
          cooperativos com sistemas emergentes de caos controlado e humor auto-consciente.
        </p>
        <p>
          O Helldivers original, lançado em 2015 para PS3, PS4 e PC, foi um jogo de tiro
          cooperativo com perspectiva top-down (câmera de cima) onde quatro jogadores
          combatiam ondas de inimigos em planetas diferentes, com o mesmo sistema de fogo
          amigo — bombas e projéteis atingem aliados tanto quanto inimigos — que se tornaria
          marca registrada da série. O jogo teve boa recepção crítica mas audiência limitada,
          na faixa de nicho que a Arrowhead havia conquistado com <em>Magicka</em>. Helldivers 2
          partiu do mesmo conceito mas mudou a perspectiva de câmera para terceira pessoa
          (shoulder-cam), expandiu massivamente a escala dos cenários, aprofundou o sistema
          de Estratagemas e adicionou o sistema de guerra galáctica em tempo real — mudanças
          que transformaram um jogo de nicho numa experiência com apelo muito mais amplo.
        </p>
        <p>
          No momento do lançamento de Helldivers 2, a Arrowhead tinha aproximadamente
          100 funcionários — um estúdio de tamanho médio para os padrões da indústria,
          mas pequeno para lidar com a escala do sucesso que o jogo gerou. Os servidores
          entraram em colapso nos primeiros dias por incapacidade de suportar o volume
          de jogadores simultâneos, e o CEO Johan Pilestedt tornou-se uma presença constante
          nas redes sociais, comunicando diretamente com a comunidade sobre o status dos
          servidores, as correções em andamento e os planos de expansão de capacidade —
          uma transparência que contrastou fortemente com a postura corporativa distante
          típica de publishers maiores e que contribuiu para a fidelidade da comunidade
          ao longo dos meses seguintes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          A Guerra Galáctica: Joel, o GM Humano por Trás do Conflito
        </h2>
        <p>
          Um dos elementos mais criativos e discutidos de Helldivers 2 é seu sistema de
          guerra galáctica — chamado de Galactic War — que funciona como um conflito
          persistente e em tempo real afetado pelas ações coletivas de todos os jogadores
          simultaneamente em todos os servidores do mundo. Cada missão completada por cada
          jogador em qualquer planeta conta para a conquista ou defesa daquele território
          no mapa galáctico geral; se a comunidade global foca esforços em libertar um
          planeta específico, ele é conquistado; se negligencia um setor, os inimigos avançam.
          O sistema cria uma camada de propósito coletivo que transforma cada sessão individual
          numa contribuição para um esforço de guerra compartilhado com milhões de outras
          pessoas simultaneamente.
        </p>
        <p>
          Mas o elemento que realmente tornou o sistema lendário foi a revelação de que existe
          um funcionário da Arrowhead — apelidado pela comunidade de <strong>"Joel"</strong>,
          referência a um game master de RPG de mesa — cujo trabalho é literalmente controlar
          os eventos da guerra galáctica em tempo real, tomando decisões narrativas sobre
          quando os inimigos contra-atacam, quais planetas entram em crise, quando eventos
          especiais são ativados e como a história da guerra evolui em resposta às ações
          dos jogadores. Joel é, em essência, um Dungeon Master profissional para um jogo
          ao vivo com dezenas de milhões de participantes — uma posição criativa sem
          precedentes na indústria de games mainstream.
        </p>
        <p>
          A comunidade desenvolveuu uma relação quase mítica com Joel: celebrando quando
          ele lhes concedia vitórias épicas, expressando frustração criativa quando ele
          ativava eventos punitivos, e desenvolvendo teorias e especulações sobre suas
          intenções narrativas como se fosse um personagem do próprio lore do jogo. Essa
          dinâmica — a interseção entre narrativa emergente gerada por jogadores e design
          narrativo deliberado por um ser humano nos bastidores — é uma das experiências
          de jogo mais originais que a indústria produziu em anos, e representa uma
          direção interessante para o futuro dos jogos como serviço que vai além dos
          sistemas de temporadas e battle passes convencionais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Sistema de Estratagemas: O Vocabulário de Helldivers
        </h2>
        <p>
          O sistema de Estratagemas (Stratagems) é a mecânica central que diferencia
          Helldivers 2 de outros co-op shooters do mercado. Estratagemas são equipamentos,
          suporte e armamento pesado que o jogador chama durante a missão através de uma
          sequência de direcionais no controle — como uma combinação de cheat code —
          lançando uma baliza que convoca o item do espaço orbital acima do planeta.
          A execução bem-sucedida de uma sequência longa de direcionais sob fogo inimigo
          é uma das mecânicas mais tensas e satisfatórias do jogo.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/3 break-words">Categoria</th>
                <th className="text-left py-3 px-4 w-2/3 break-words">Exemplos e Uso</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["🔫 Suporte de Armas", "Metralhadoras pesadas, lança-foguetes e canhões automáticos entregues em caixas de suporte. Requerem ser coletados no ponto de queda e têm munição limitada — posicionamento de queda é estratégico."],
                ["💣 Ataques Orbitais", "Bombas de alta precisão, ataques de canhão orbital e salvas de foguetes chamados diretamente do navio acima. Alto dano em área mas cooldown longo — reservados para grupos densos ou objetivos estruturais."],
                ["🦅 Suporte Aéreo", "Eagles (aeronaves) que realizam passadas de bombardeio, napalm e foguetes sobre coordenadas marcadas. Recarregam voltando ao navio após um número fixo de usos — gestão do reabastecimento é parte da estratégia."],
                ["🛡️ Defesa e Suporte", "Escudos de barreira, sentinelas automáticas de metralhadora e torretas de morteiro que defendem posições. Essenciais em missões de defesa ou de ativação de objetivos onde o grupo precisa segurar uma área."],
                ["🚗 Veículos e Equipamentos", "Exoesqueletos Mechs de combate pesado, veículos de ressuprimento e equipamentos de missão específicos. Os Mechs são os Estratagemas mais poderosos disponíveis mas têm disponibilidade limitada por missão."],
              ].map(([cat, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold text-sm break-words">{cat}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A profundidade do sistema de Estratagemas também é onde a dimensão cooperativa
          do jogo se manifesta mais claramente: diferentes jogadores em um grupo de quatro
          podem especializar seus loadouts em funções complementares — um foca em suporte
          anti-tanque, outro em defesa de área, outro em suporte de infantaria e outro
          em mobilidade e resgate. Essa especialização não é obrigatória mas é frequentemente
          a diferença entre missões de dificuldade alta completadas com elegância e as
          mesmas missões terminando em caos de fogo amigo e mortes em cadeia.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-amber-400" />
          A Crise do PSN: A Maior Vitória dos Consumidores em Anos
        </h2>
        <p>
          Em maio de 2024, aproximadamente três meses após o lançamento, a Sony Interactive
          Entertainment e a Arrowhead anunciaram uma mudança na política de acesso ao jogo
          no PC: a partir de uma data específica, jogadores de PC seriam obrigados a vincular
          uma conta PlayStation Network (PSN) à sua conta Steam para continuar jogando
          Helldivers 2. A mudança havia sido mencionada nos termos de serviço originais do
          jogo mas não era aplicada — a exigência havia sido adiada no lançamento, após
          problemas de servidores, e muitos jogadores a tinham ignorado ou desconhecido.
        </p>
        <p>
          O problema imediato era geográfico: o serviço PSN da Sony não está disponível
          em todos os países do mundo. Na época do anúncio, havia mais de 170 países onde
          criar uma conta PSN era impossível — incluindo nações da América Latina, África,
          Ásia e Europa Oriental. Jogadores nesses países que haviam comprado Helldivers 2
          na Steam por preço integral estariam, na prática, sendo banidos do jogo que
          legalmente compraram, por incapacidade de cumprir um requisito que não era
          tecnicamente possível em seus territórios. O Brasil, especificamente, é um
          dos países onde o PSN tem disponibilidade, mas grande parte da América Central,
          partes da América do Sul e numerosos países africanos e asiáticos não tinham acesso.
        </p>
        <p>
          A reação da comunidade foi imediata e coordenada. O jogo recebeu uma onda massiva
          de avaliações negativas na Steam — o sistema de reviews caiu de "Muito Positivo"
          para "Negativamente Avassalador" (Overwhelmingly Negative) em questão de horas,
          um dos colapsos de avaliação mais rápidos já registrados na plataforma para um
          jogo de tal escala. Ao mesmo tempo, players de países afetados iniciaram campanhas
          de pedidos de reembolso e comunicados coletivos nas redes sociais. A pressão foi
          global e organizada de forma que raramente se vê em resposta a decisões de publishers.
        </p>
        <p>
          O desfecho foi histórico: em menos de 48 horas após o anúncio da mudança, a Sony
          recuou completamente. A exigência de conta PSN para PC foi cancelada, e a empresa
          emitiu um comunicado reconhecendo que a medida havia gerado "frustração e preocupação
          legítimas" entre os jogadores. O CEO da Arrowhead, Johan Pilestedt, foi ativo nas
          redes sociais ao longo de toda a crise — inicialmente tentando mediar, depois
          celebrando publicamente a reversão da Sony como uma vitória para a comunidade.
          O episódio é frequentemente citado como um dos exemplos mais claros e bem-sucedidos
          de pressão organizada de consumidores revertendo uma decisão corporativa na indústria
          de games, e estabeleceu um precedente importante: publishers que tentam aplicar
          requisitos retroativos a jogos já vendidos enfrentam resistência organizada de uma
          comunidade cada vez mais consciente de seus direitos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais Para Novos Helldivers
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🔢 Memorize as sequências dos seus Estratagemas favoritos",
              desc: "Tentar ler a sequência de botões durante um combate intenso é receita para falhar na hora errada. Memorize de cor os três ou quatro Estratagemas que usa mais — a execução reflexiva faz toda a diferença em situações de pressão.",
            },
            {
              titulo: "🎯 Mire nas partes fracas dos inimigos",
              desc: "Os Terminids têm exoesqueleto que resiste a dano frontal — mire na barriga ou nas costas expostas. Os Automatons têm cabeças de vidro e juntas vulneráveis. Dano direcional reduz drasticamente o número de balas necessárias para eliminar cada tipo.",
            },
            {
              titulo: "💀 O fogo amigo é real — sempre verifique a linha de tiro",
              desc: "Estratagemas de área (bombas orbitais, Eagles) atingem aliados com a mesma letalidade que inimigos. Comunique antes de chamar suporte de área e verifique onde seus aliados estão. Mortes por fogo amigo não são punição — são mecânica intencional do design.",
            },
            {
              titulo: "📦 Colete amostras de missões anteriores antes de extrair",
              desc: "Amostras (Samples) são moeda de upgrade da nave e de melhorias de Estratagemas. Procure pelo mapa antes de chamar a extração — especialmente Samples Raras (cor roxa) e Super Samples (cor laranja, só em Dificuldade 7+).",
            },
            {
              titulo: "🚀 Chame a extração cedo, não espere o último segundo",
              desc: "O contador de extração leva 2 minutos após ser chamado. Chame a extração quando restar tempo suficiente — não quando o objetivo acabar. Os inimigos aumentam progressivamente até a nave chegar, e morrer nos últimos segundos faz perder as Samples coletadas.",
            },
            {
              titulo: "⚙️ Suba para Dificuldade 6-7 gradualmente",
              desc: "As Dificuldades mais altas não aumentam apenas o número de inimigos — mudam quais tipos de inimigos aparecem, incluindo variantes pesadas que exigem Estratagemas anti-tanque específicos. Subir cedo demais sem o equipamento certo é frustração garantida.",
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
          Por Que Helldivers 2 Foi o Fenômeno que Ninguém Previu
        </h2>
        <p>
          Retrospectivamente, o sucesso de Helldivers 2 parece óbvio — mas nenhum analista
          ou executivo de publisher havia antecipado sua escala. A Sony não preparou
          infraestrutura de servidores adequada para o volume de jogadores que chegou;
          a Arrowhead não havia escalado sua equipe de suporte para lidar com dezenas de
          milhões de jogadores; e a janela de lançamento — fevereiro, historicamente mês
          tranquilo no calendário de games — foi escolhida exatamente por parecer segura
          para um jogo de nicho. Nada disso se confirmou.
        </p>
        <p>
          O fenômeno Helldivers 2 funcionou por uma combinação de fatores que raramente
          se alinham: um gancho de sátira inteligente que criou identidade de comunidade
          instantânea (todos são soldados da "Super Terra" lutando pela "Liberdade"), um
          sistema emergente de guerra galáctica que fornecia propósito coletivo renovável
          indefinidamente, um CEO ativo nas redes sociais que humanizou o estúdio durante
          crises de servidor, e um modelo de progressão sem battle pass de nível pago que
          reduziu a resistência de jogadores céticos com jogos live-service. O resultado foi
          uma comunidade extraordinariamente coesa que manteve o engajamento por meses muito
          além do típico pico-e-queda de lançamentos de jogos online, e que respondeu à
          crise do PSN com a organização de uma comunidade que se sentia genuinamente
          proprietária de algo que amava — não apenas cliente de um serviço.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Pela Liberdade! Você é um Helldiver? 🚀
          </h3>
          <p className="text-muted-foreground">
            Qual é seu Estratagema favorito? Conta nos comentários! 👇
          </p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o melhor jogo cooperativo desde Left 4 Dead 2"
      >
        <p>
          Eu não esperava que Helldivers 2 me prendesse tanto. Co-op shooters são um gênero
          que eu consigo apreciar mas raramente me faço dependente — e Helldivers fez exatamente
          isso. A sátira de <em>Starship Troopers</em> funciona porque é consistente em tudo:
          nos menus, nos vídeos de propaganda, nas transmissões durante as missões, na linguagem
          dos comunicados oficiais da "Super Terra". É humor que não cansa porque tem inteligência
          por trás. O sistema de guerra galáctica com Joel no controle criou o tipo de narrativa
          emergente que nenhum roteirista poderia escrever sozinho — porque depende das decisões
          de milhões de pessoas em tempo real. E a crise do PSN, apesar de toda a raiva que
          causou na época, acabou sendo uma das histórias mais interessantes da relação entre
          comunidade de jogadores e publishers em anos: a Sony recuou, e o precedente importa.
          Se você joga cooperativo e ainda não experimentou Helldivers 2, corrija isso.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Helldivers 2 — Site Oficial",
            url: "https://www.helldivers.com/",
            publisher: "Arrowhead Game Studios / Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Helldivers 2 no Steam",
            url: "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "Starship Troopers (1997) — Paul Verhoeven",
            url: "https://www.britannica.com/topic/Starship-Troopers-film-1997",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Arrowhead Game Studios — Sobre o estúdio",
            url: "https://www.arrowheadgamestudios.com/",
            publisher: "Arrowhead Game Studios",
            accessedAt: "Julho 2026",
          },
          {
            title: "IGN — Helldivers 2 Review",
            url: "https://www.ign.com/games/helldivers-2",
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

export default Helldivers2Guia2024;
