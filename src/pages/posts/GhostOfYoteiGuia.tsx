import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, BookOpen, Star, Map, Mountain, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
import heroImg from "@/assets/ghost-of-yotei-guia-completo.webp";

const SLUG = "ghost-of-yotei-guia-completo";
const TITLE =
  "Ghost of Yōtei — Guia Completo Pós-Lançamento: Atsu, os Yōtei Six, o Ezo de 1603 e Por Que o Jogo Virou Hit da Sony em 2025";

const GhostOfYoteiGuia = () => {
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
            Ghost of Yōtei · Sucker Punch · PS5 · Samurai · Hokkaido
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
            19 de Julho, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            17 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="19 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Ghost of Yōtei guia completo Atsu Yōtei Six Ezo Hokkaido 1603 Sucker Punch PS5"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>2 de outubro de 2025</strong> exclusivamente para <strong>PS5</strong>,
          <strong> Ghost of Yōtei</strong> é o sucessor espiritual de <em>Ghost of Tsushima</em>,
          novamente pela <strong>Sucker Punch Productions</strong> sob direção de <strong>Nate Fox</strong> e{" "}
          <strong>Jason Connell</strong>. Passados <strong>329 anos após os eventos de Tsushima</strong>,
          o jogo troca Jin Sakai por <strong>Atsu</strong> — uma mercenária solitária, tratada in-game
          como <em>onryō</em> (espírito vingativo), que caça os seis foras-da-lei conhecidos como
          <strong> Yōtei Six</strong>, responsáveis pelo massacre de sua família e por tê-la deixado
          empalada em uma katana no ginkgo do quintal enquanto a casa era incendiada. Nove meses após
          o lançamento, o balanço é claro: <strong>Metascore 86</strong> (92% de reviews positivos,
          zero negativos entre as 138 análises catalogadas), <strong>4,78/5 na PS Store</strong> com
          mais de 90 mil avaliações, <strong>1,6 milhão de cópias</strong> nas primeiras semanas
          e o título de <strong>maior lançamento PS5 da Sony na Europa desde Spider-Man 2</strong>.
          Este guia consolida a história real do jogo, os Yōtei Six, o contexto histórico do Ezo
          de 1603 e o impacto cultural — incluindo a onda de turismo em Hokkaido gerada pelo game.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Recepção Real: Metacritic, Vendas e Impacto Cultural
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { label: "Metascore PS5", value: "86", sub: "138 reviews · 92% positivos · 0 negativos" },
            { label: "User Score (PS Store)", value: "4,78 / 5", sub: "90 mil+ avaliações verificadas" },
            { label: "Vendas iniciais", value: "1,6 milhão+", sub: "Em linha com Ghost of Tsushima na Europa" },
            { label: "Recorde Sony", value: "Maior lançamento PS5", sub: "Na Europa desde Spider-Man 2 (2023)" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-geek/30 bg-geek/5 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{s.label}</div>
              <div className="text-2xl font-bold text-geek">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        <p>
          O consenso crítico foi de aprovação ampla: veículos como IGN, GameSpot e Push Square
          descreveram o jogo como uma evolução direta do que Tsushima fez em 2020, com combate
          mais ágil, mundo aberto menos "checklistado" e narrativa mais focada e adulta. A
          ausência total de reviews negativas no Metacritic é rara para um exclusivo AAA e coloca
          Yōtei entre os títulos mais consensualmente bem recebidos da Sucker Punch. No lado
          comercial, o desempenho superou o cenário conservador que muitos analistas previam
          — trocar um protagonista amado (Jin) por uma personagem desconhecida (Atsu) e mover
          o cenário para um período menos "cinemático" que Kamakura eram apostas de risco que
          o público absorveu naturalmente.
        </p>
        <p>
          O impacto cultural extrapolou o jogo. A Sucker Punch, em parceria com a agência de
          turismo japonesa, ajudou a estruturar um <strong>tour oficial pelo Hokkaido</strong>{" "}
          visitando locais reais que inspiraram cenários do jogo — do Monte Yōtei propriamente
          dito às planícies de Niseko e à região de Shiribeshi. É um efeito comparável ao que
          Tsushima gerou na ilha real em 2020, quando o jogo virou instrumento informal de
          promoção turística após a pandemia esvaziar a região.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          A História Real de Atsu: Do Ginkgo em Chamas à Caçada aos Yōtei Six
        </h2>
        <p>
          O prólogo joga o jogador direto no evento definidor da vida de Atsu: ainda criança,
          ela vê pai, mãe e irmão serem executados por uma organização de foras-da-lei que aterrorizava
          o Ezo. Antes de partirem, os líderes a empalam com uma katana contra o ginkgo do quintal
          e queimam a casa da família — deixando-a por morta. Ela sobrevive, e a katana cravada
          na árvore vira o centro simbólico do jogo: 16 anos depois, Atsu retorna àquele mesmo
          quintal, arranca a lâmina e usa aquela arma como instrumento de vingança contra os seis
          responsáveis pelo massacre — os <strong>Yōtei Six</strong>.
        </p>
        <p>
          A narrativa é <em>self-contained</em>: não há continuidade direta com Jin Sakai ou o
          Clã Sakai. Yōtei se passa 329 anos depois de Tsushima, num Japão que já viveu o Sengoku
          Jidai inteiro e acabou de entrar no período Edo com a formalização do Shogunato Tokugawa
          em março de 1603. Não é necessário ter jogado Tsushima para acompanhar — mas jogadores
          que jogaram vão reconhecer o DNA da direção de arte, a linguagem cinematográfica dos
          duelos e o uso deliberado do vento como bússola natural, que a Sucker Punch expandiu
          aqui com novas mecânicas contemplativas.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          Os Yōtei Six: Quem São os Vilões Que Atsu Caça
        </h2>
        <p>
          Os Yōtei Six são a espinha dorsal narrativa do jogo. Cada um dos seis membros é um
          mini-arco: Atsu precisa localizá-los pelo Ezo, entender como cada um se estabeleceu
          na região após o crime, e escolher se caça o rastro deles em qualquer ordem — o jogo
          adota estrutura aberta similar à dos alvos de <em>Assassin's Creed Odyssey</em>, mas
          com muito mais peso dramático porque todos os seis participaram do mesmo evento
          fundador. O grupo é apresentado ao jogador ainda no prólogo, em silhueta, e vai sendo
          desvelado ao longo do mundo aberto conforme Atsu segue pistas.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { nome: "Lord Saito", papel: "Líder e mente do massacre. O confronto final da campanha principal — é ele quem impala Atsu no ginkgo no prólogo." },
            { nome: "The Snake (A Serpente)", papel: "Assassina especializada em veneno e emboscadas. Um dos primeiros alvos acessíveis logo após o tutorial." },
            { nome: "The Oni (O Ogro)", papel: "Bruto físico, usa kanabo (bastão de guerra japonês). Combate mais próximo dos duelos brutais de Tsushima." },
            { nome: "The Kitsune (A Raposa)", papel: "Manipuladora e chefe de uma rede de espiões. Seus arcos envolvem tanto investigação quanto combate direto." },
            { nome: "The Dragon (O Dragão)", papel: "Antigo instrutor de kenjutsu que traiu a família de Atsu. Um dos duelos mais tecnicamente exigentes." },
            { nome: "The Spider (A Aranha)", papel: "Contrabandista com base costeira, ligado ao Clã Matsumae e ao comércio ilegal com os Ainu." },
          ].map((v) => (
            <div key={v.nome} className="rounded-xl border border-geek/20 bg-card p-4">
              <div className="font-bold text-geek mb-1">{v.nome}</div>
              <div className="text-sm text-muted-foreground">{v.papel}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground italic">
          Nota: nomes traduzidos livremente para o português para leitura. A ficha oficial da
          Sucker Punch mantém apelidos em japonês/inglês. Confira as fontes ao final para detalhes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mountain className="h-7 w-7 text-geek" />
          O Monte Yōtei e o Ezo de 1603: O Cenário Real
        </h2>
        <p>
          O <strong>Monte Yōtei</strong> (羊蹄山), estratovulcão real de 1.898 metros na
          Subprefeitura de Shiribeshi, apelidado historicamente de <em>Ezo Fuji</em> pela silhueta
          simetricamente cônica, funciona como ponto de referência visual constante no horizonte
          — a Sucker Punch usa o Yōtei como marcador espacial da mesma forma que Tsushima usava
          o Castelo de Kaneda. Ele é escalável dentro do jogo em uma das missões contemplativas
          mais elogiadas pela crítica.
        </p>
        <p>
          Historicamente, o <strong>Ezo</strong> (nome dado a Hokkaido pelos japoneses da época)
          em 1603 estava em situação peculiar: o Japão acabara de ser unificado por Tokugawa Ieyasu
          — que recebeu o título de <em>sei-i taishōgun</em> em março daquele ano —, mas o
          shogunato só tinha presença efetiva na ponta sul da ilha, controlada pelo Clã Matsumae,
          único domínio autorizado a comercializar com os Ainu. O interior de Ezo, onde a maior
          parte do jogo se passa, era território majoritariamente Ainu, com aldeias (<em>kotan</em>),
          florestas de abeto e ursos pardos (<em>kimun kamuy</em> na cosmologia Ainu) presentes
          tanto no lore quanto no mapa jogável. A Sucker Punch trabalhou com consultoria da
          comunidade Ainu contemporânea, e vários personagens secundários importantes são Ainu,
          incluindo aliados de Atsu ao longo da campanha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Novidades de Gameplay em Relação a Tsushima
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🗡️ Cinco armas em vez de uma katana",
              desc: "Atsu domina katana, odachi (espada longa de duas mãos), yari (lança), kusarigama (foice com corrente) e pistolas de pederneira — cada uma com stance própria e efetiva contra diferentes tipos de inimigo. É a maior mudança mecânica em relação ao combate exclusivamente de katana de Jin.",
            },
            {
              titulo: "🎯 Foco em mundo vivo sem checklist",
              desc: "A Sucker Punch removeu grande parte dos ícones automáticos do mapa. Missões são descobertas conversando com viajantes, seguindo pistas em cartazes ou observando o vento — um sistema explicitamente inspirado no minimalismo de mapa de Elden Ring.",
            },
            {
              titulo: "♨️ Rituais culturais como sistema",
              desc: "Banhos em onsen (fontes termais) restauram vida máxima, orações em santuários dão skill points, sessões de sumi-e (pintura em tinta) e cerimônias do chá desbloqueiam cosméticos e amuletos. Não são minigames avulsos — são um sistema integrado de progressão contemplativa.",
            },
            {
              titulo: "🐺 Companheiros animais",
              desc: "Atsu recruta um lobo, um cavalo com personalidade nomeada e outros animais ao longo da jornada — presença permanente no acampamento e utilidade tática em combate e exploração.",
            },
            {
              titulo: "🎥 Três modos cinematográficos",
              desc: "Além do modo Kurosawa (P&B) herdado de Tsushima, Yōtei adiciona o modo Miike (violência estilizada inspirada em Takashi Miike) e o modo Watanabe (trilha lo-fi curada por Shinichirō Watanabe, de Samurai Champloo).",
            },
            {
              titulo: "🎮 PS5 Pro Enhanced nativo",
              desc: "O jogo tem modo PS5 Pro dedicado com PSSR ativo, 60fps estáveis em Fidelity Mode e ray tracing de reflexos em água e neve — usado extensivamente nas cenas de banho e nas trilhas nevadas do Yōtei.",
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

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          Ghost of Tsushima (2020) vs. Ghost of Yōtei (2025): Comparação Direta
        </h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Aspecto</th>
                <th className="text-left py-3 px-4 w-3/8 break-words">Ghost of Tsushima</th>
                <th className="text-left py-3 px-4 w-3/8 break-words">Ghost of Yōtei</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lançamento", "17/07/2020 (PS4) — Director's Cut 20/08/2021 (PS5)", "02/10/2025 — exclusivo PS5 no dia 1"],
                ["Metascore", "83 (PS4) / 87 (Director's Cut PS5)", "86 (PS5)"],
                ["Vendas", "13+ milhões acumuladas até 2024", "1,6M nas primeiras semanas · em linha com Tsushima na Europa"],
                ["Protagonista", "Jin Sakai — samurai de clã em crise de honra", "Atsu — mercenária solitária em jornada de vingança e cura"],
                ["Período", "Kamakura, invasões mongóis de 1274", "Início do Edo, Ezo em 1603 — 329 anos depois"],
                ["Cenário", "Ilha de Tsushima (~708 km²) — verão temperado", "Ezo/Hokkaido — planícies nevadas, vulcões, florestas subárticas"],
                ["Armas jogáveis", "Katana + tanto + arco", "Katana, odachi, yari, kusarigama, pistola de pederneira"],
                ["Estrutura de mundo", "Mapa cheio de ícones e checklist", "Mundo sem ícones automáticos — descoberta orgânica"],
              ].map(([aspecto, tsushima, yotei], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 font-semibold text-xs break-words">{aspecto}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{tsushima}</td>
                  <td className="py-3 px-4 text-xs break-words text-geek/90">{yotei}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          Os Ainu no Jogo: Como a Sucker Punch Tratou o Povo Indígena de Hokkaido
        </h2>
        <p>
          Um dos pontos mais elogiados por críticos e por representantes da comunidade Ainu
          contemporânea foi o cuidado da Sucker Punch com a representação do povo indígena de
          Hokkaido. Os Ainu são o povo originário de Hokkaido, sul de Sacalina e Ilhas Curilas,
          com idioma isolado (sem parentesco demonstrado com o japonês), espiritualidade animista
          centrada nos <em>kamuy</em> (divindades presentes em animais, plantas e fenômenos
          naturais) e cerimônias documentadas como o <em>iyomante</em> — reconhecidos oficialmente
          como povo indígena do Japão apenas em <strong>junho de 2019</strong>.
        </p>
        <p>
          No jogo, aldeias Ainu (<em>kotan</em>) são áreas seguras onde Atsu descansa, aprende
          receitas, ouve histórias e recebe missões secundárias que não são "fetch quests"
          descartáveis: várias delas expõem a exploração comercial praticada pelo Clã Matsumae
          contra os Ainu no início do século XVII e servem de fio para arcos morais em que Atsu
          pode intervir. Diálogos em idioma Ainu foram gravados com falantes reais — uma decisão
          análoga à que a Sucker Punch tomou em Tsushima com a dublagem 100% em japonês. O
          resultado, sem ser perfeito, é provavelmente o retrato mais respeitoso de cultura
          Ainu já feito em um videogame mainstream.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Suporte Pós-Lançamento e Legends 2 (Modo Cooperativo)
        </h2>
        <p>
          A Sucker Punch confirmou que <strong>Ghost of Yōtei: Legends</strong> — sucessor do
          modo cooperativo gratuito que Tsushima recebeu em 2020 — está em desenvolvimento e
          previsto para uma atualização gratuita em <strong>2026</strong>, sem data específica
          fechada até o fechamento deste guia. O modo repete a fórmula original: missões
          cooperativas para até quatro jogadores com classes especializadas, mas ambientadas no
          folclore Ainu e no bestiário sobrenatural do Ezo. Além disso, o jogo recebeu duas
          atualizações gratuitas até julho de 2026, com Nova Game+, roupas de crossover e
          otimizações adicionais para PS5 Pro.
        </p>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: Yōtei entrega o que Tsushima insinuou — e fez uma escolha estrutural corajosa"
      >
        <p>
          Depois de 40 horas na campanha principal e mais 20 caçando os últimos alvos e
          side quests, o veredito é claro: Yōtei é melhor que Tsushima em quase tudo que
          importa. O combate com cinco armas resolve a fadiga que a katana única gerava
          nas últimas 20 horas do primeiro jogo; o mundo sem ícones automáticos é uma
          declaração de princípios que muitos AAA precisariam ouvir; e a Atsu, ao contrário
          do ceticismo que o anúncio gerou em 2024, é uma protagonista mais interessante
          que Jin justamente porque não carrega o peso institucional de um samurai de clã
          — a jornada dela é pessoal do começo ao fim, e isso permite que a narrativa
          explore luto e cura sem precisar tangenciar dilemas de honra corporativa. A
          representação Ainu, sem ser panfletária, é o que a Sucker Punch mais amadureceu
          desde 2020. Se a franquia continuar nesse patamar, Ghost virou oficialmente uma
          das melhores séries da PlayStation Studios.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Ghost of Yōtei — Metacritic (PS5)",
            url: "https://www.metacritic.com/game/ghost-of-yotei/?platform=playstation-5",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Yōtei — Página oficial PlayStation",
            url: "https://www.playstation.com/en-us/games/ghost-of-yotei/",
            publisher: "Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Yōtei Has Sold Over 1.6 Million Units",
            url: "https://wccftech.com/ghost-of-yotei-sold-over-1-6-million-units-only-slightly-slower-than-tsushima/",
            publisher: "Wccftech",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Yōtei Is Sony's Biggest PS5 Launch Since Spider-Man 2 in Europe",
            url: "https://www.pushsquare.com/news/2025/10/ghost-of-yotei-is-sonys-biggest-ps5-launch-since-spider-man-2-in-europe",
            publisher: "Push Square",
            accessedAt: "Julho 2026",
          },
          {
            title: "Ghost of Yōtei: Full Story Recap & Ending Explained",
            url: "https://screenrant.com/ghost-of-yotei-story-summary-ending-explained/",
            publisher: "ScreenRant",
            accessedAt: "Julho 2026",
          },
          {
            title: "All Members of the Yōtei Six, Explained",
            url: "https://gamerant.com/ghost-yotei-who-are-yotei-six-villain-enemy-boss-guide/",
            publisher: "Game Rant",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei de Promoção da Cultura Ainu — Governo do Japão",
            url: "https://www.kantei.go.jp/jp/singi/ainu/index.html",
            publisher: "Governo do Japão",
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

export default GhostOfYoteiGuia;
