import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Star, Map, Shield, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo ghost-of-tsushima-guia-completo.webp em src/assets/
import heroImg from "@/assets/ghost-of-tsushima-guia-completo.webp";

const SLUG = "ghost-of-tsushima-guia-completo";
const TITLE =
  "Ghost of Tsushima — Guia Completo: A Invasão Mongol de 1274, a Sucker Punch, os Quatro Estilos de Combate e Tudo Sobre o Fantasma de Tsushima";

const GhostOfTsushimaGuia = () => {
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
            Ghost of Tsushima · Sucker Punch · PS4 / PS5 / PC · Samurai · Ação
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
            19 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Ghost of Tsushima guia completo Jin Sakai invasão mongol 1274 Sucker Punch"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>17 de julho de 2020</strong> para PS4 e expandido na{" "}
          <strong>Director's Cut</strong> em agosto de 2021 para PS4 e PS5 — e finalmente
          chegando ao <strong>PC em maio de 2024</strong> —, <em>Ghost of Tsushima</em> é
          um dos jogos mais bonitos já feitos, uma homenagem sincera ao cinema samurai japonês
          e uma das maiores surpresas criativas da Sucker Punch Productions, estúdio de Seattle
          historicamente associado às franquias Sly Cooper e inFamous. Ambientado durante a{" "}
          <strong>primeira invasão mongol do Japão em 1274</strong>, o jogo acompanha Jin Sakai,
          samurai que abandona o código de honra de seu clã para se tornar o Fantasma —
          guerrilheiro furtivo que usa táticas proibidas para defender Tsushima. Com mais de{" "}
          <strong>9 milhões de cópias vendidas</strong>, Modo Kurosawa que homenageia o maior
          cineasta japonês de todos os tempos e uma adaptação cinematográfica em desenvolvimento
          por Chad Stahelski (diretor de John Wick), este guia cobre tudo: história real, o
          estúdio, o sistema de combate e como aproveitar ao máximo cada versão disponível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          A Invasão Mongol de 1274: A História Real por Trás do Jogo
        </h2>
        <p>
          O evento histórico que serve de ponto de partida para <em>Ghost of Tsushima</em> é
          real e bem documentado. Em novembro de 1274, Kublai Khan — neto de Gêngis Khan e
          imperador da Dinastia Yuan, que controlava a China, a Coreia e vastos territórios
          da Ásia Central — ordenou a primeira tentativa de invasão do Japão. A frota de
          ataque era composta por aproximadamente 900 embarcações e entre 30.000 e 40.000
          soldados, recrutados principalmente entre guerreiros mongóis e tropas auxiliares
          coreanas da Dinastia Goryeo, que havia sido conquistada pelo Império Mongol décadas
          antes. A campanha ficou conhecida na historiografia japonesa como a Invasão Bun'ei,
          nome retirado do período imperial japonês correspondente.
        </p>
        <p>
          Tsushima, o arquipélago onde o jogo se passa, é uma ilha real localizada no Estreito
          da Coreia, entre a ilha de Kyushu (a mais ao sul das ilhas principais do Japão) e
          a Península Coreana — geograficamente o primeiro obstáculo natural de qualquer
          invasão vinda do continente asiático em direção ao Japão. Sua posição estratégica
          tornou-a alvo imediato da frota de Kublai Khan antes de avançar em direção a Kyushu
          e ao arquipélago principal. Os defensores de Tsushima em 1274 eram significativamente
          superados em número: estimativas históricas apontam para algumas centenas de guerreiros
          samurais contra dezenas de milhares de invasores. A batalha real de Tsushima durou
          pouco — os defensores foram dizimados. A invasão avançou para Kyushu mas foi
          eventualmente forçada a recuar por uma tempestade que danificou severamente a frota
          mongol, permitindo que as forças japonesas se reorganizassem.
        </p>
        <p>
          Kublai Khan ordenou uma segunda invasão em 1281, a Invasão Kōan, com uma força
          ainda maior — estimada em até 140.000 soldados e 4.400 embarcações, embora números
          exatos sejam debatidos por historiadores. Essa segunda invasão foi repelida de forma
          muito mais definitiva: uma grande tempestade — possivelmente um tufão — destruiu
          grande parte da frota mongol ancorada na baía de Hakata, na costa de Kyushu,
          causando baixas catastróficas. Os japoneses chamaram essa tempestade de{" "}
          <em>kamikaze</em> (神風), literalmente "vento divino" — uma palavra que séculos
          depois seria reutilizada de forma muito diferente durante a Segunda Guerra Mundial
          para designar pilotos que realizavam missões suicidas. O fracasso das duas invasões
          mongolas foi interpretado pelos japoneses como proteção divina, consolidando a
          crença na natureza especial do arquipélago japonês. O jogo de 2020 é ambientado
          exclusivamente durante a primeira invasão, de 1274, mas a lenda dos kamikaze
          permeia o background cultural que o contexto histórico traz.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Sucker Punch Productions: De Sly Cooper ao Samurai
        </h2>
        <p>
          A Sucker Punch Productions foi fundada em 1997 em Bellevue, Washington, por um
          grupo de ex-funcionários da Microsoft que decidiram entrar no mercado de
          desenvolvimento de games. O estúdio ganhou reconhecimento com a trilogia Sly
          Cooper para PlayStation 2 — jogos de plataforma e furtividade protagonizados por
          um guaxinim ladrão que combinavam estética de cartoon com mecânicas de stealth
          acessíveis e humor consistente. A série foi um sucesso comercial e crítico nos
          anos 2000, com os três primeiros jogos vendendo coletivamente mais de 10 milhões
          de cópias na plataforma.
        </p>
        <p>
          A transição de Sly Cooper para inFamous, lançado em 2009 para PS3, foi uma mudança
          radical de gênero e tom: de plataforma cartoon para open world de super-heróis com
          sistema de karma moral. inFamous e sua sequência inFamous 2 (2011) consolidaram a
          Sucker Punch como um estúdio capaz de construir mundos abertos de qualidade e
          narrativas com escolhas morais significativas — experiência que se revelou diretamente
          aplicável à construção do mundo de Tsushima. A Sony adquiriu a Sucker Punch em
          2011, incorporando-a à rede de PlayStation Studios e garantindo exclusividade
          para suas produções futuras. inFamous: Second Son (2014), lançado como título de
          vitrine para o PS4, foi o último jogo da franquia antes de <em>Ghost of Tsushima</em>
          entrar em desenvolvimento — um período de aproximadamente seis anos em que o
          estúdio trabalhou exclusivamente no projeto samurai, a maior mudança de escopo e
          ambição de sua história.
        </p>
        <p>
          O desenvolvimento de <em>Ghost of Tsushima</em> envolveu pesquisa histórica e
          cultural extensiva: a equipe da Sucker Punch realizou visitas à ilha real de
          Tsushima, consultou historiadores especializados no Japão feudal e no período
          medieval japonês e trabalhou com consultores culturais japoneses para garantir
          que a representação dos costumes, vestimentas, arquitetura e código de conduta
          samurai fossem fiéis ao período retratado. O resultado dessa pesquisa é visível
          em detalhes que vão da curvatura específica das katanas ao design dos mon (brasões
          de clã) que aparecem em armaduras e estandartes ao longo do jogo. A resposta
          do governo japonês foi notável: a Prefeitura de Tsushima chegou a emitir um
          comunicado público de reconhecimento e gratidão pela forma respeitosa com que
          o jogo representou a ilha e sua história.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          Os Quatro Estilos de Combate: Pedra, Água, Vento e Lua
        </h2>
        <p>
          O sistema de combate de <em>Ghost of Tsushima</em> é construído em torno de quatro
          "Posturas" (Stances) que Jin desbloqueia progressivamente ao longo da campanha,
          cada uma desenvolvida especificamente para combater um tipo de inimigo mongol
          diferente. A mecânica central é de confronto direto com katana, executado através
          de ataques leves, ataques pesados, esquivas e parry — mas a eficiência de cada
          stance varia radicalmente dependendo do tipo de oponente enfrentado, criando uma
          camada de decisão estratégica antes e durante cada combate.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              stance: "🗡️ Postura da Pedra (Stone Stance)",
              eficaz: "Espadachins mongóis",
              desc: "A postura inicial de Jin — ataques rápidos e diretos com a katana, sem mecânicas especiais de abertura. É eficaz contra inimigos com espada porque o ritmo de ataque interrompe seus combos. A primeira postura desbloqueada e a base sobre a qual as demais são construídas.",
            },
            {
              stance: "💧 Postura da Água (Water Stance)",
              eficaz: "Inimigos com escudo",
              desc: "Desenvolvida para quebrar a guarda de guerreiros que usam escudos grandes — o ataque pesado da postura derruba ou desvia o escudo, abrindo o inimigo para seguimento. Animação mais lenta e deliberada que reflete a superação de força bruta com técnica.",
            },
            {
              stance: "🌀 Postura do Vento (Wind Stance)",
              eficaz: "Lanceiros e guerreiros com armas de haste",
              desc: "Permite a Jin desviar de ataques de lança e contra-atacar imediatamente na mesma animação — uma resposta direta ao alcance superior das armas de haste. É a postura que mais exige timing preciso mas entrega o maior dano por troca em oponentes de lança.",
            },
            {
              stance: "🌙 Postura da Lua (Moon Stance)",
              eficaz: "Brutos e inimigos com armas pesadas",
              desc: "Desenvolvida contra inimigos grandes com maças, martelos e machados — ataques de área com katana que atingem múltiplos pontos do corpo de oponentes de tamanho maior. Lenta e poderosa, ideal para derrubar brutos antes que suas ataques devastadores acertem.",
            },
          ].map(({ stance, eficaz, desc }) => (
            <div
              key={stance}
              className="bg-card rounded-xl border border-geek/20 p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{stance.split(" ")[0]}</span>
                <h3 className="font-bold text-sm">
                  {stance.split(" ").slice(1).join(" ")}
                </h3>
                <span className="ml-auto text-xs text-geek font-medium bg-geek/10 px-2 py-0.5 rounded-full">
                  Eficaz vs. {eficaz}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p>
          As posturas são complementadas pelo arsenal de técnicas do "Fantasma" — as habilidades
          furtivas e não convencionais que Jin desenvolve ao longo da narrativa ao abandonar
          progressivamente o código de honra samurai. Bombas de fumaça para escapar ou distrair
          grupos, kunai para interromper ataques à distância, bombas de pólvora negra para dano
          em área e veneno para envenenar grupos de inimigos são contrapostos moralmente ao
          combate aberto da katana: as técnicas do Fantasma são eficientes mas representam
          a desonra de Jin aos olhos de seu clã e de seu tio Lord Shimura. Essa tensão entre
          eficiência e honra é o coração temático do jogo, refletida mecanicamente na existência
          paralela dos dois sistemas de combate.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          O Mundo Aberto e a Filosofia do Vento Guia
        </h2>
        <p>
          Uma das escolhas de design mais comentadas e elogiadas de <em>Ghost of Tsushima</em>
          é a substituição do minimapa convencional por um sistema de vento guia: em vez de
          uma seta ou marcador na tela apontando o destino da missão, o jogador invoca o
          vento (com um gesto no touchpad do controle DualShock 4 / DualSense) e o vento
          sopra visualmente na direção do próximo objetivo. O vento move folhas, galhos e
          flores na direção certa — criando uma linguagem de navegação que se integra ao
          mundo visual em vez de sobrepor uma interface sobre ele.
        </p>
        <p>
          Essa filosofia de "menos HUD" se estende a outros sistemas do jogo: não há contador
          de inimigos na tela durante stealth, pontos de interesse são revelados por sons e
          detalhes ambientais em vez de ícones do mapa, e a câmera frequentemente enquadra
          as cenas de forma cinematográfica em vez de utilitária. A Sucker Punch claramente
          se inspirou no cinema samurai clássico — especialmente nos filmes de Akira Kurosawa
          — para criar uma experiência que parece mais uma película do que um game convencional.
          A ilha de Tsushima no jogo é dividida em três regiões principais: Izuhara ao sul
          (a área inicial), Toyotama no centro e Kamiagata ao norte, cada uma com visuais
          distintos que vão de florestas de bambu e campos de flores de cerejeira a planícies
          nevadas e costas tempestuosas.
        </p>
        <p>
          O mapa é pontuado por santuários xintoístas nas montanhas (acessíveis por escaladas
          opcionais que recompensam com amuletos e cosméticos), banhos termais que aumentam
          o HP máximo, zonas de composição de haiku que concedem peças de headgear e
          acampamentos mongóis que podem ser libertados para restaurar a presença japonesa
          na região. Cada um desses sistemas opcionais evita a sensação de "checklist" que
          afeta muitos open worlds ao apresentar os conteúdos de forma orgânica — um torii
          vermelho na distância indica um santuário, uma coluna de fumaça indica um vilarejo
          em chamas, macacos dourados aparecem ocasionalmente para guiar Jin até santuários
          escondidos sem uma missão formal sendo ativada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          O Modo Kurosawa: Uma Homenagem ao Maior Cineasta Japonês
        </h2>
        <p>
          Uma das funcionalidades mais amadas de <em>Ghost of Tsushima</em> é o Modo Kurosawa,
          um filtro visual opcional que converte toda a experiência para preto e branco com grão
          de película, acompanhado de áudio em japonês — mesmo para jogadores que normalmente
          jogariam em inglês. O modo é uma homenagem explícita a Akira Kurosawa (1910–1998),
          o cineasta japonês amplamente considerado um dos maiores diretores da história do
          cinema mundial.
        </p>
        <p>
          Kurosawa dirigiu 30 filmes ao longo de cinco décadas, e seus trabalhos definiram
          visualmente o que o Ocidente imagina quando pensa em samurais e no Japão feudal.
          <em>Rashomon</em> (1950) venceu o Leão de Ouro no Festival de Veneza e o Oscar
          honorário, sendo o primeiro filme japonês a receber reconhecimento internacional
          massivo no pós-guerra. <em>Sete Samurais</em> (1954) é frequentemente listado entre
          os maiores filmes de todos os tempos e foi adaptado diretamente para o Faroeste
          americano em <em>Os Sete Magnificos</em> (1960). <em>Yojimbo</em> (1961) inspirou
          Sergio Leone a criar <em>Por um Punhado de Dólares</em> (1964), obra fundadora do
          Spaghetti Western. <em>Kagemusha</em> (1980) e <em>Ran</em> (1985), seus últimos
          grandes épicos samurai, foram financiados parcialmente por Francis Ford Coppola e
          George Lucas — tão profunda era a admiração da geração Spielberg/Lucas pelo mestre
          japonês. A influência de Kurosawa sobre o cinema de ação e aventura ocidental é
          incalculável, e ao criar o Modo que leva seu nome, a Sucker Punch reconheceu
          explicitamente essa cadeia de influências que chegou até o próprio gênero de jogos
          de samurai.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais: Do Iniciante ao 100%
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-2/5 break-words">Dica</th>
                <th className="text-left py-3 px-4 w-3/5 break-words">Por Que Importa</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Desbloqueie todas as posturas antes de avançar na história", "As Quatro Posturas são encontradas em acampamentos mongóis específicos pelo mapa. Procurá-las cedo transforma os combates do segundo e terceiro atos de desafios frustrantes em encontros gerenciáveis."],
                ["Use o Modo Foto para explorar o mapa", "O Modo Foto do jogo tem uma função de zoom poderosa que revela detalhes de pontos de interesse no horizonte antes de chegar até eles — torii de santuários, fumaça de acampamentos, torres de vigia."],
                ["Siga raposas douradas para ofendas", "Raposas (kitsune) douradas aparecem nos arredores de santuários xintoístas e guiam Jin até eles se seguidas. Cada santuário concede amuletos que melhoram habilidades específicas — priorizá-los cedo faz diferença."],
                ["O parry não é obrigatório mas muda tudo", "O Perfect Parry (bloco no último momento) interrompe o ataque do inimigo e abre uma janela de contra-ataque. Ignorar o parry e só esquivar funciona, mas dominar o timing transforma Jin de sobrevivente em duelista."],
                ["Equipe amuletos antes de cada tipo de missão", "O sistema de amuletos tem slots limitados. Antes de uma missão furtiva, equipe amuletos de stealth; antes de uma batalha em campo aberto, troque para combate. A troca é gratuita e instantânea no menu."],
                ["A missão da Ilha Iki vale jogar com atenção", "A expansão Iki Island da Director's Cut (2021) contém algumas das melhores missões e a revelação mais impactante da história de Jin — não trate como conteúdo secundário a ignorar."],
                ["Liberte acampamentos para recuperar acessos", "Cada acampamento mongol libertado restaura vendedores, locais de treinamento e missões secundárias na região. Liberar acampamentos no começo de cada região é mais eficiente do que fazê-lo depois."],
              ].map(([dica, motivo], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold break-words text-sm">{dica}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Director's Cut, PC e o Futuro do Franchise
        </h2>
        <p>
          A Director's Cut de <em>Ghost of Tsushima</em>, lançada em agosto de 2021, adicionou
          a expansão Ilha Iki — uma nova área do tamanho de aproximadamente um terço do mapa
          principal, com nova história centrada no passado do pai de Jin, novos inimigos, novas
          mecânicas de jogo e um arco narrativo que aprofunda a psicologia do protagonista de
          formas que o jogo base não havia explorado. A Ilha Iki é geralmente considerada pela
          comunidade como conteúdo de qualidade igual ou superior a partes do jogo principal
          — um caso raro de DLC que justifica plenamente seu preço. A Director's Cut também
          incluiu melhorias técnicas para PS5: taxa de quadros de 60fps, tempos de carregamento
          reduzidos, feedback háptico e gatilhos adaptativos do DualSense e resolução 4K.
        </p>
        <p>
          A chegada ao PC em maio de 2024, realizada pela Nixxes Software (estúdio holandês
          especializado em ports de PlayStation para PC, adquirido pela Sony em 2021),
          incluiu todo o conteúdo da Director's Cut mais suporte a resoluções ultra-wide,
          framerates desbloqueados acima de 60fps e integração com Steam Achievements.
          O port foi considerado tecnicamente sólido pela crítica especializada — beneficiando
          dos projetos anteriores da Nixxes em ports como Marvel's Spider-Man e Ratchet &
          Clank: Rift Apart para PC.
        </p>
        <p>
          Quanto ao futuro da franquia, a Sony Pictures anunciou uma adaptação cinematográfica
          de <em>Ghost of Tsushima</em> dirigida por Chad Stahelski — o cineasta americano
          responsável por toda a franquia John Wick, conhecido por coreografias de ação de
          altíssima qualidade e atenção ao detalhe estético de cenas de luta. Stahelski é
          também um admirador declarado do cinema de Kurosawa, o que torna sua escalação
          particularmente adequada para uma adaptação de um jogo que já nasceu como homenagem
          ao cinema japonês. O filme estava em fase de desenvolvimento ativo até o momento
          desta publicação, com a produção prevista para começar após o término dos compromissos
          de Stahelski com outros projetos.
        </p>
        <p>
          Um segundo jogo da série, ou sequência direta de <em>Ghost of Tsushima</em>, não
          foi oficialmente confirmado pela Sucker Punch ou pela Sony até a data de publicação
          deste artigo — mas o sucesso comercial da franquia (mais de 9 milhões de cópias
          vendidas somando todas as versões) e a posição do estúdio dentro da rede de
          PlayStation Studios tornam a continuidade da série altamente provável segundo
          analistas do setor.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Qual Versão Jogar em 2026?
        </h2>

        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4">Versão</th>
                <th className="text-left py-3 px-4 w-1/4">Plataforma</th>
                <th className="text-left py-3 px-4 w-1/2">O Que Inclui</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ghost of Tsushima (base)", "PS4", "Jogo base completo. Perfeitamente jogável mas sem expansão de Iki Island e sem upgrades de PS5."],
                ["Director's Cut", "PS4 / PS5", "Jogo base + Ilha Iki + conteúdo extra. PS5 adiciona 60fps, haptics, 4K. A versão recomendada para quem tem PS4 ou PS5."],
                ["PC (Steam / Epic)", "PC", "Director's Cut completa com todos os DLCs cosméticos, suporte a ultrawide e framerate desbloqueado. Melhor versão técnica disponível."],
              ].map(([versao, plat, desc], i) => (
                <tr key={i} className={`border-t border-border${i === 1 ? " bg-primary/5" : ""}`}>
                  <td className={`py-3.5 px-4 text-sm break-words${i === 1 ? " font-bold text-primary" : " font-semibold"}`}>{versao}{i === 1 && <span className="ml-2 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">✓ Recomendada</span>}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm">{plat}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: o jogo que me fez estudar história japonesa de verdade"
      >
        <p>
          <em>Ghost of Tsushima</em> entrou na minha vida num momento em que eu precisava
          de exatamente o que ele oferece: um mundo lindo para explorar sem pressa, um
          personagem com conflito moral genuíno e um sistema de combate que parece teatro
          quando funciona bem. O Modo Kurosawa foi o que me fez descobrir <em>Sete Samurais</em>
          — assisti logo depois de terminar o jogo e entendi de onde toda aquela gramática
          visual veio. O que me impressiona ao revisitar o jogo em 2026 é o quanto ele
          envelheceu bem: visualmente ainda está entre os mais bonitos já feitos, e o
          design de mundo sem minimapa invasivo parece cada vez mais inteligente conforme
          outros open worlds continuam sobrecarregando a tela com ícones. A Director's Cut
          com Ilha Iki é a versão definitiva — e o arco do pai de Jin no DLC é melhor do
          que eu esperava. Se você tem PS5 ou PC e ainda não jogou, corrija isso agora.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Ghost of Tsushima — Site Oficial PlayStation",
            url: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
            publisher: "Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Tsushima no Steam",
            url: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/",
            publisher: "Valve / Steam",
            accessedAt: "Julho 2026",
          },
          {
            title: "A Invasão Mongol do Japão (1274) — Britannica",
            url: "https://www.britannica.com/event/Mongol-invasions-of-Japan",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Akira Kurosawa — Filmografia e Biografia",
            url: "https://www.britannica.com/biography/Kurosawa-Akira",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Tsushima — Metacritic",
            url: "https://www.metacritic.com/game/ghost-of-tsushima/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "Sucker Punch Productions — PlayStation Studios",
            url: "https://www.playstation.com/en-us/corporate/about/studios/sucker-punch-productions/",
            publisher: "Sony Interactive Entertainment",
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

export default GhostOfTsushimaGuia;
