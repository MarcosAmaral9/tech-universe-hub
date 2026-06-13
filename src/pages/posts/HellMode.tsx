import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import { Clock, User, Calendar, BookOpen, Star, Tv, Gamepad2, Swords, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/hell-mode.webp";

const HellMode = () => {
  useEffect(() => {
    trackArticleRead(
      "hell-mode-gamer-isekai-guia-completo",
      "Hell Mode: O Gamer no Isekai com Dificuldade Máxima — Guia Completo",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Isekai · Gamer · Invocador
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Hell Mode: O Gamer Viciado em Desafios Domina o Isekai — Guia Completo do Anime 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Hell Mode anime 2026 — Allen o Invocador no mundo de dificuldade máxima"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Hell Mode: Yarikomizuki no Gamer wa Hai Settei no Isekai de Musou Suru</strong> — em inglês <strong>Hell Mode: The Hardcore Gamer Dominates in Another World with Garbage Balancing</strong> — é o isekai para fãs de MMORPGs que sempre quiseram ver um jogador completamente viciado em dificuldade máxima enfrentar um mundo sem guias online. O anime, produzido pela <strong>Yokohama Animation Laboratory</strong>, estreou em <strong>janeiro de 2026</strong> na temporada de inverno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Hamuo</strong>, com ilustrações de <strong>Mo</strong>, e começou a ser serializada em novembro de 2019 na plataforma <em>Shōsetsuka ni Narō</em>. A <strong>Earth Star Entertainment</strong> adquiriu os direitos e publica a light novel desde julho de 2020 pelo selo <em>Earth Star Novel</em> — treze volumes lançados até janeiro de 2026. O mangá, com arte de <strong>Enji Tetta</strong>, é serializado no site <em>Comic Earth Star</em> desde outubro de 2020, com treze volumes coletados. A <strong>J-Novel Club</strong> (e a <strong>Yen Press</strong> para versões físicas) licenciou a série em inglês.
        </p>
        <p>
          Hell Mode acumulou dezenas de milhões de visualizações no Shōsetsuka ni Narō antes mesmo da publicação da light novel física — um padrão comum às séries que viraram anime nessa geração, como TenSura e Overlord. A premissa de um jogador hardcode se destacou entre os isekais da plataforma por focar no aspecto de <em>otimização</em> e <em>grind</em> de forma mais rigorosa do que a maioria dos títulos do gênero.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-otaku" />
          Premissa: Um Gamer de 35 Anos Escolhe o Inferno
        </h2>
        <p>
          <strong>Kenichi Yamada</strong> é um trabalhador de escritório de 35 anos que passou a vida inteira jogando MMORPGs exigentes — o tipo de jogo punitivo que a maioria das pessoas abandona, mas que ele ama exatamente por isso. Quando o seu jogo favorito fecha os servidores, ele encontra um jogo misterioso sem nome que promete um desafio incomparável. Sem hesitar, seleciona a dificuldade <strong>"Hell Mode"</strong> e escolhe a classe <strong>Invocador</strong> — ainda em beta e considerada incompleta.
        </p>
        <p>
          O que acontece a seguir: ele é reencarnado no mundo do jogo como um <strong>bebê chamado Allen</strong>, filho primogênito de uma família de <strong>servos (serfs)</strong>. Allen nasce com todas as memórias de Kenichi, mas sem guias, walkthroughs ou fóruns para consultar. Precisa descobrir sozinho como a classe Invocador funciona — e fazer isso <strong>grindando centenas de horas de experiência</strong>, como qualquer bom gamer de carteirinha faria.
        </p>
        <p>
          A particularidade cruel do Hell Mode: Allen precisa de <strong>100 vezes mais experiência</strong> que um personagem normal para subir de nível. Uma pessoa normal no Nível 10 equivale a Allen no Nível 1000 em termos de experiência acumulada. Mas as recompensas também são proporcionalmente maiores — cada nível alcançado por Allen representa um salto de poder muito superior ao de qualquer personagem padrão. É uma aposta de longo prazo que exige disciplina e paciência absolutas.
        </p>
        <p>
          O que torna Hell Mode diferente dos isekais de "protagonista overpowered" é que Allen não nasce forte. Ele <em>se torna</em> forte através de um processo sistemático de grind que o anime mostra com uma honestidade incomum no gênero. A infância de Allen como servo — anos de trabalho duro, caça de animais na floresta para acumular experiência, e estudo meticuloso das regras do novo mundo — ocupa uma parte significativa da narrativa antes que ele sequer chegue à adolescência.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Anime de 2026
        </h2>
        <p>
          A adaptação foi produzida pela <strong>Yokohama Animation Laboratory</strong> e dirigida por <strong>Masato Tamagawa</strong>, com design de personagens de <strong>Kei Tsushima</strong> e música de <strong>Shuuichirou Fukuhiro</strong>. A série estreou em <strong>janeiro de 2026</strong> na temporada de inverno. Está disponível na plataforma <strong>HIDIVE</strong> (Sentai Filmworks) e na <strong>Amazon Prime Video</strong>.
        </p>
        <p>
          O elenco de vozes inclui <strong>Mutsumi Tamura</strong> como Allen — escolha que agradou a comunidade por capturar bem a dualidade do personagem: a frieza analítica do gamer experiente e a calidez genuína de alguém que se importa profundamente com as pessoas ao redor. <strong>Takaaki Torashima, Takaaki Uchino e Mayu Iizuka</strong> aparecem em papéis de suporte.
        </p>
        <p>
          A Yokohama Animation Laboratory é um estúdio relativamente novo no cenário de anime — Hell Mode é um de seus projetos de maior visibilidade. A qualidade de animação nos episódios iniciais foi bem recebida pela comunidade, especialmente nas sequências de dungeon que exigem coordenação entre as diferentes invocações de Allen.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {
              name: "Allen (Yamada Kenichi)",
              va: "Mutsumi Tamura",
              desc: "Protagonista. Gamer veterano de 35 anos reencarnado como servo. Aborda o novo mundo como um MMORPG — anota tudo em seu grimório, calcula eficiências de XP e trata cada batalha como um puzzle de otimização. Apesar da frieza analítica, é profundamente compassivo: seu sacrifício inicial para melhorar a vida de sua família demonstra que 'gamer logic' é muitas vezes uma máscara para altruísmo genuíno. Líder do grupo 'No-life Gamers'.",
            },
            {
              name: "Kurena",
              va: "—",
              desc: "Amiga de infância de Allen na vila de Kurena. Possui talentos extraordinários de combate físico desde muito jovem. Reencontrada por Allen na Academia, torna-se membro central do grupo No-life Gamers. Seu desenvolvimento como guerreira acompanha o crescimento de Allen como invocador — os dois se complementam em combate.",
            },
            {
              name: "Cecil Granvelle",
              va: "—",
              desc: "Filha do Barão Granvelle — a família nobre para quem Allen trabalha como servo durante a infância. Mágica talentosa que une-se ao grupo quando Allen entra na Academia. Representa a tensão de classe da série: Cecil cresceu acima de Allen na hierarquia social, mas ambos se tornam parceiros iguais.",
            },
            {
              name: "Dogora",
              va: "—",
              desc: "Companheiro de Allen na Academia — guerreiro de força bruta que complementa a estratégia de Allen. Seu entusiasmo e abordagem direta contrastam com o estilo metódico do protagonista, criando dinâmica de grupo mais equilibrada.",
            },
          ].map((p) => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                {p.va !== "—" && (
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-otaku" />
          O Sistema de Invocação e a Progressão de Allen
        </h2>
        <p>
          A classe Invocador de Allen permite invocar criaturas de diferentes tipos — pássaros, bestas, insetos, plantas, peixes — cada uma com habilidades específicas. Inicialmente Allen nomeia suas invocações por letras (Pássaro A, Besta B), mas conforme evolui ganha invocações de rank mais alto com poderes mais expressivos. Diferente de personagens convencionais que lutam diretamente, Allen é um <strong>general estratégico</strong>: usa suas invocações para maximizar a eficiência em dungeons e batalhas enquanto ele próprio coleta experiência e otimiza o sistema.
        </p>
        <p>
          O sistema de grimório é central para a classe. Allen documenta cada descoberta sobre suas invocações — suas habilidades, pontos fortes, custos de mana e aplicações em combate. Esse detalhe narrativo funciona tanto como worldbuilding (o leitor/espectador aprende o sistema junto com Allen) quanto como caracterização: mostra que Allen pensa no mundo novo com a mesma metodologia obsessiva de um gamer dedicado fazendo notas num fórum.
        </p>
        <p>
          À medida que Allen sobe de rank, as invocações disponíveis se tornam progressivamente mais poderosas. As de rank mais alto não são apenas mais fortes em combate — elas têm habilidades passivas que Allen pode ativar permanentemente, transformando cada ciclo de grind em um upgrade real de capacidade. É um sistema de progressão que recompensa o planejamento de longo prazo em vez de picos de poder pontuais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-otaku" />
          A Narrativa em Arcos: Do Servo à Academia e Além
        </h2>
        <p>
          A narrativa de Hell Mode se divide em arcos bem demarcados, cada um cobrindo uma fase distinta da vida de Allen:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            {
              arco: "🌾 Arco do Servo",
              desc: "Allen nasce e cresce na vila de Kurena como filho de servos. Aprende as regras básicas do mundo, começa a grind de experiência em segredo (caçando animais na floresta à noite após as obrigações diárias) e desenvolve sua relação com Kurena. Cobre a infância e adolescência de Allen antes de ele entrar no serviço da família Granvelle.",
            },
            {
              arco: "🏰 Arco da Família Granvelle",
              desc: "Allen é promovido a criado da família do Barão Granvelle, onde conhece Cecil. Sua competência chama atenção — e também levanta suspeitas. O arco explora a tensão de um servo com inteligência e capacidades muito acima do esperado numa sociedade hierárquica rígida.",
            },
            {
              arco: "🎓 Arco da Academia",
              desc: "Allen, Cecil, Kurena e novos aliados entram na Academia de cavaleiros e magos. É aqui que o grupo No-life Gamers se forma como unidade coesa. As dungeons da Academia são o primeiro grande teste do sistema de invocação de Allen em escala maior.",
            },
            {
              arco: "🌿 Arco de Rohzenheim",
              desc: "O reino élfico de Rohzenheim é atacado pelo exército do Lorde Demônio. Allen e seus aliados partem em auxílio — e é nesse arco que a escala da ameaça do Lorde Demônio se torna clara. É o arco de maior escopo da série até o ponto coberto pelo anime de 2026.",
            },
          ].map(({ arco, desc }) => (
            <div key={arco} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{arco}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Hell Mode no Contexto dos Isekais de Gamer
        </h2>
        <p>
          O subgênero "gamer isekai" — onde o protagonista usa mecânicas de jogo explicitamente — existe há muito tempo, mas ganhou impulso significativo com obras como Overlord (2012, LN), Log Horizon (2011, LN) e Sword Art Online (2009, LN). Hell Mode se posiciona numa vertente específica desse subgênero: o foco não é no protagonista que já domina o sistema, mas no <em>processo</em> de dominar um sistema novo sem manual de instruções.
        </p>
        <p>
          A comparação mais direta é com <strong>Mushoku Tensei</strong> — não pela premissa, mas pela estrutura narrativa que mostra o crescimento do protagonista desde o nascimento, com paciência rara para mostrar anos de esforço antes de qualquer resultado significativo. Ambas as séries resistem à tentação de comprimir a progressão para chegar logo à ação. Essa escolha afasta uma parte do público acostumada a ritmo mais acelerado, mas cria uma recompensa emocional maior quando os marcos finalmente chegam.
        </p>

        <div className="not-prose bg-card border border-border rounded-xl p-5 my-6">
          <h3 className="font-bold mb-3 text-sm">📊 Status da franquia (março 2026)</h3>
          <div className="space-y-1.5">
            {[
              ["Light Novel (Earth Star)", "13 volumes publicados — em andamento"],
              ["Mangá (Comic Earth Star)", "13 volumes — em andamento (arte: Enji Tetta)"],
              ["Anime", "Estreou jan 2026 — Yokohama Animation Lab — HIDIVE / Prime Video"],
              ["Licença inglês (LN)", "J-Novel Club / Yen Press (físico)"],
              ["Temporada 2", "Sem anúncio oficial até março 2026"],
            ].map(([item, status]) => (
              <div key={item} className="flex gap-3 text-xs">
                <span className="font-bold w-44 shrink-0">{item}</span>
                <span className="text-muted-foreground">{status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você escolheria Hell Mode? 🎮</h3>
          <p className="text-muted-foreground">100x mais XP necessário em troca de recompensas proporcionalmente maiores — vale a pena? Conta nos comentários! 👇</p>
        </div>
      </div>

      <EditorialTake category="otaku" title="Análise do Marcos: Hell Mode acerta onde a maioria dos isekais de gamer erra">
        <p>
          Hell Mode, escrito por Hamuo e publicado originalmente no Shōsetsuka ni Narō a partir de novembro de 2019, é um dos poucos isekais de gamer que leva a sério a premissa de jogar no modo difícil. A Earth Star Entertainment publica a light novel desde julho de 2020 — treze volumes lançados até o início de 2026. O anime pela Yokohama Animation Laboratory estreou em janeiro de 2026 no HIDIVE e Prime Video.
        </p>
        <p>
          O que o diferencia: Allen não é forte porque o destino quis. Ele é forte porque grindou 100 vezes mais do que qualquer personagem normal precisaria. Esse detalhe muda completamente o tom da série — cada conquista tem peso real, cada nível de evolução foi pago com horas de esforço mostradas em tela. Para isekais do pós-2020 que viram o protagonista "nascido op" se tornar clichê cansativo, Hell Mode oferece a alternativa mais honesta: <strong>mérito, não sorte</strong>. Para T2, sem anúncio oficial até março de 2026.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Hell Mode — Earth Star Entertainment (site oficial)",
            url: "https://www.earthstar-ent.com/",
            publisher: "Earth Star Entertainment",
            accessedAt: "Março 2026"
          },
          {
            title: "Hell Mode — MyAnimeList",
            url: "https://myanimelist.net/anime/58562/Hell_Mode__Yarikomi_Suki_no_Gamer_wa_Hai_Settei_no_Isekai_de_Musou_Suru",
            publisher: "MyAnimeList",
            accessedAt: "Março 2026"
          },
          {
            title: "Hell Mode — HIDIVE",
            url: "https://www.hidive.com/stream/hell-mode-the-hardcore-gamer-dominates-in-another-world-with-garbage-balancing",
            publisher: "HIDIVE / Sentai Filmworks",
            accessedAt: "Março 2026"
          },
          {
            title: "Hell Mode — J-Novel Club (light novel em inglês)",
            url: "https://j-novel.club/series/hell-mode",
            publisher: "J-Novel Club",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime News Network — Hell Mode encyclopedia entry",
            url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=26869",
            publisher: "Anime News Network",
            accessedAt: "Março 2026"
          },
          {
            title: "Comic Earth Star — Hell Mode mangá (Enji Tetta)",
            url: "https://comic-earthstar.jp/",
            publisher: "Comic Earth Star / Earth Star Entertainment",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="hell-mode-gamer-isekai-guia-completo" />
      <CommentSection
        postId="hell-mode-gamer-isekai-guia-completo"
        postTitle="Hell Mode: O Gamer no Isekai com Dificuldade Máxima"
        category="otaku"
      />
    </article>
  );
};

export default HellMode;
