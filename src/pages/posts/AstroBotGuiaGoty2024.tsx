import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Star, Gamepad2, Trophy, Heart, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
// ⚠️ Adicionar o arquivo astro-bot-guia-goty-2024.webp em src/assets/
import heroImg from "@/assets/astro-bot-guia-goty-2024.webp";

const SLUG = "astro-bot-guia-goty-2024";
const TITLE =
  "Astro Bot — O Jogo do Ano de 2024: Guia Completo, Cameos PlayStation e Por Que É o Melhor Plataforma em Décadas";

const AstroBotGuiaGoty2024 = () => {
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
            Astro Bot · Team Asobi · PS5 · Plataforma · GOTY 2024
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
            16 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Astro Bot guia completo GOTY 2024 Team Asobi PS5 cameos PlayStation"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>6 de setembro de 2024</strong> exclusivamente para PS5,{" "}
          <strong>Astro Bot</strong> venceu o prêmio de <strong>Jogo do Ano no The Game Awards
          2024</strong> — derrotando concorrentes do peso de Black Myth: Wukong, Elden Ring: Shadow
          of the Erdtree e Balatro. Desenvolvido pela Team Asobi, estúdio interno da Sony Interactive
          Entertainment baseado em Tóquio, o jogo alcançou nota <strong>94 no Metacritic</strong>,
          tornando-se um dos títulos mais bem avaliados da história do PS5. É uma celebração dos{" "}
          <strong>30 anos de PlayStation</strong> embalada num jogo de plataforma 3D com mais de 150
          cameos de personagens icônicos da história da Sony — e o melhor representante do gênero
          desde Super Mario Odyssey em 2017. Este guia explica por que o jogo importa, como foi
          feito e o que você vai encontrar do primeiro ao último nível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Team Asobi: A História do Estúdio por Trás do GOTY
        </h2>
        <p>
          A Team Asobi tem uma origem que poucos jogadores conhecem. O estúdio é o herdeiro direto
          do Japan Studio, a divisão japonesa interna da Sony Interactive Entertainment que durante
          mais de duas décadas foi responsável por algumas das franquias mais queridas da empresa —
          incluindo Ape Escape, LocoRoco, Patapon, Gravity Rush e Ico. O Japan Studio foi fechado
          pela Sony em abril de 2021, numa reestruturação que gerou forte reação negativa da
          comunidade por encerrar um estúdio com quase 25 anos de histórico criativo. A Team Asobi,
          que havia surgido como uma divisão interna do Japan Studio focada em experiências de
          tecnologia e inovação de controle, foi preservada e transformada em estúdio independente
          dentro da estrutura da Sony — o único sobrevivente direto do Japan Studio na forma de
          uma unidade criativa autônoma.
        </p>
        <p>
          O diretor da Team Asobi é Nicolas Doucet, engenheiro de software franco-japonês que se
          juntou à Sony Interactive Entertainment nos anos 2000 e foi escalado progressivamente para
          papéis de liderança criativa dentro do Japan Studio. Doucet foi o produtor e mais tarde
          diretor da série Astro, que começou como uma demonstração técnica chamada The Playroom
          (2013, PS4) e The Playroom VR (2016, PS VR) antes de ganhar o primeiro jogo standalone
          com Astro Bot: Rescue Mission (2018), um exclusivo de PlayStation VR amplamente considerado
          um dos melhores jogos de realidade virtual já lançados — com nota 90 no Metacritic numa
          plataforma que raramente recebia críticas tão positivas. O sucesso de Rescue Mission
          estabeleceu Astro Bot como personagem com potencial além do VR, abrindo caminho para
          Astro's Playroom em 2020.
        </p>
        <p>
          Astro's Playroom merece menção especial porque sua existência direta explica o nível de
          polimento de Astro Bot em 2024. Lançado como jogo pré-instalado em todos os PS5 do mundo
          em novembro de 2020, Playroom foi projetado primariamente como demonstração das
          funcionalidades do novo controle DualSense — feedback háptico, gatilhos adaptativos,
          microfone e alto-falante integrados. O que ninguém esperava era que o jogo em si,
          concebido como material de demonstração gratuito, acabaria sendo tão bem executado que
          receberia notas altíssimas da crítica e ganharia o amor genuíno dos jogadores, que passaram
          a pedir um jogo completo no mesmo estilo. Astro Bot de 2024 é a resposta direta a esse pedido.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trophy className="h-7 w-7 text-geek" />
          30 Anos de PlayStation: A Celebração Embutida no Jogo
        </h2>
        <p>
          O PlayStation original foi lançado no Japão em 3 de dezembro de 1994 — tornando 2024 o
          ano do 30º aniversário da marca. Não foi coincidência que Astro Bot chegasse precisamente
          nesse ano: o jogo foi construído explicitamente como uma celebração da história do
          PlayStation, com mais de 150 personagens de jogos icônicos da plataforma escondidos em
          estátuas dentro dos níveis, esperando para serem resgatados pelo jogador e transportados
          de volta à nave principal, onde formam uma galeria crescente de representantes de cada
          geração do console.
        </p>
        <p>
          Os cameos abrangem todas as cinco gerações de PlayStation de forma deliberada. Do PS1
          estão presentes referências a franquias como Crash Bandicoot (que teve sua origem como
          mascote não oficial da plataforma antes de migrar para a Activision), Spyro the Dragon,
          PaRappa the Rapper e MediEvil. Do PS2 aparecem personagens de Jak and Daxter, Ratchet
          e Clank (cujos primeiros jogos foram desenvolvidos pela Insomniac Games para PS2),
          Sly Cooper e Shadow of the Colossus — considerado por muitos críticos e pela comunidade
          um dos jogos mais artisticamente relevantes da história dos videogames, desenvolvido pelo
          Team Ico de Fumito Ueda. Do PS3 e PS4 chegam representantes de The Last of Us, God of War,
          Uncharted, Horizon Zero Dawn, Bloodborne, Ghost of Tsushima e Spider-Man. A curadoria
          inclui franquias third-party que definiram gerações de PlayStation, como Metal Gear Solid
          (de Hideo Kojima, cujo relacionamento com a Sony é parte da própria história do PS1) e
          Final Fantasy VII — cuja versão original de 1997 para PS1 foi um dos títulos que
          estabeleceu o console como plataforma dominante daquela geração.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 w-1/4 break-words">Geração</th>
                <th className="text-left py-3 px-4 w-3/4 break-words">Exemplos de Cameos Notáveis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PS1 (1994–2000)", "PaRappa the Rapper, MediEvil, Spyro, Crash Bandicoot, Tomba, Jumping Flash"],
                ["PS2 (2000–2006)", "Jak & Daxter, Ratchet & Clank, Sly Cooper, Shadow of the Colossus, Ico, God of War (origem)"],
                ["PS3 (2006–2013)", "Uncharted (Drake), LittleBigPlanet (Sackboy), Demon's Souls, Heavy Rain, Killzone"],
                ["PS4 (2013–2020)", "The Last of Us (Joel & Ellie), Bloodborne, Horizon (Aloy), Ghost of Tsushima, Spider-Man"],
                ["PS5 (2020–)", "Astro's Playroom, Returnal (Selene), Ratchet & Clank: Rift Apart, Demon's Souls Remake"],
              ].map(([gen, cameos], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold text-sm break-words">{gen}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{cameos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Essa dimensão histórica transforma Astro Bot em algo mais do que um jogo de plataforma
          convencional: é um documento interativo da história de 30 anos de uma plataforma, onde
          o prazer do reconhecimento — a reação de "ei, é o Nathan Drake!" ao encontrar uma estátua
          escondida — se soma ao prazer mecânico do jogo em si. Para jogadores mais jovens que
          nunca tiveram contato com a maioria dessas franquias, o jogo funciona como descoberta;
          para veteranos de uma ou mais gerações de PlayStation, funciona como nostalgia cuidadosamente
          curada por pessoas que claramente amam o material de origem.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          O DualSense como Ferramenta Narrativa
        </h2>
        <p>
          Nenhum outro jogo explorou o DualSense do PS5 com a profundidade que a Team Asobi aplicou
          em Astro Bot — nem mesmo os exclusivos Sony de maior orçamento lançados desde 2020. O
          controle DualSense foi lançado com o PS5 em novembro de 2020 com duas funcionalidades
          centrais: feedback háptico (vibração de alta resolução que simula texturas e impactos com
          precisão muito maior do que os motores de vibração convencionais) e gatilhos adaptativos
          (que oferecem resistência variável e podem simular a tensão de uma corda de arco, o
          engatilhar de uma arma ou a aderência ao segurar uma superfície úmida). Nos primeiros
          quatro anos do PS5, a maioria dos jogos usou essas funcionalidades de forma superficial
          ou simplesmente as ignorou — especialmente títulos multiplataforma que precisam funcionar
          igualmente bem em controles sem essas capacidades.
        </p>
        <p>
          Em Astro Bot, o DualSense é parte integrante do design de cada nível. Quando Astro caminha
          sobre neve, o háptico simula a textura granulada sob os pés. Quando ele aterra num trampolim,
          os gatilhos oferecem resistência crescente conforme a mola comprime. Quando o personagem
          usa as luvas de boxe (um dos power-ups do jogo), os gatilhos travam parcialmente para
          simular a resistência do soco. Quando chuva cai sobre o cenário, o háptico reproduz
          padrões de gotículas distribuídas pela superfície do controle de forma que o jogador
          consegue distinguir onde a chuva está batendo no cenário — esquerda, direita, frente.
          São detalhes que parecem pequenos na descrição mas que, na prática, criam uma sensação de
          presença e imersão que nenhuma outra tecnologia de controle disponível no mercado
          consegue replicar da mesma forma.
        </p>
        <p>
          O alto-falante integrado ao DualSense também recebe uso criativo constante: Astro "fala"
          diretamente pelo controle em momentos específicos, criando a ilusão de que o personagem
          está fisicamente na mão do jogador em vez de na tela à frente. É um truque simples mas
          consistentemente eficaz, especialmente em níveis onde Astro fica preso dentro do próprio
          DualSense — situação que o jogo usa como premissa narrativa e mecânica em pelo menos um
          dos mundos da campanha.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Estrutura do Jogo: Mundos, Níveis e Segredos
        </h2>
        <p>
          Astro Bot organiza sua campanha em cinco galáxias temáticas, cada uma com múltiplos
          planetas navegáveis e um boss de fim de mundo, mais um conjunto de níveis especiais
          desbloqueados progressivamente ao longo da jornada. A estrutura remete diretamente aos
          melhores jogos de plataforma 3D da era Super Mario 64 e Banjo-Kazooie — hub central
          com planetas acessíveis, cada planeta com objetivos primários e secundários de coleta,
          segredos escondidos que requerem habilidades específicas para acessar e bosses com
          padrões de ataque a serem aprendidos em fases crescentes de dificuldade.
        </p>
        <p>
          O total de conteúdo é generoso para o gênero: aproximadamente 50 níveis principais mais
          um conjunto considerável de fases bônus e desafios de habilidade desbloqueados com os
          robôs resgatados. A duração média para completar a campanha principal é de 8 a 12 horas
          para quem foca nos objetivos principais, expandindo para 15 a 20 horas para quem busca
          100% de conclusão — número alto o suficiente para satisfazer jogadores exigentes sem
          se estender além do ponto em que a experiência perderia densidade. A Team Asobi foi
          elogiada especificamente pela ausência de padding: cada nível apresenta pelo menos uma
          ideia nova de gameplay, e nenhum conceito é esticado além do ponto de satisfação.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-geek" />
          Dicas para Aproveitar ao Máximo
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🔍 Olhe para cima em todo nível",
              desc: "A maioria das estátuas de cameos e dos Bots escondidos está em plataformas elevadas ou atrás de elementos de cenário que exigem olhar ativamente para cima e ao redor. O jogo nunca guia o jogador diretamente até eles.",
            },
            {
              titulo: "🐾 Use o latido do cachorro para revelar segredos",
              desc: "O power-up de cachorro (Dog) tem um latido que revela passagens ocultas e interações escondidas no cenário. Em níveis onde ele aparece, latir em paredes suspeitas regularmente é essencial para 100%.",
            },
            {
              titulo: "🌀 Os boss rematches valem prêmios extras",
              desc: "Após derrotar cada boss uma vez, versões mais difíceis dos mesmos são desbloqueadas no hub central. Completar essas rematches concede Bots bônus e é necessário para obter 100% de conclusão.",
            },
            {
              titulo: "🎮 Jogue com fone de ouvido conectado ao controle",
              desc: "O jack de 3,5mm do DualSense roda áudio direto do controle — incluindo a voz do Astro e efeitos sonoros específicos que saem pelo controle e não pela TV. Com fone plugado, a imersão háptica e sonora aumenta consideravelmente.",
            },
            {
              titulo: "⭐ Explore o hub entre mundos",
              desc: "A nave central onde os Bots resgatados vivem cresce constantemente e esconde interações secretas, mini-puzzles e referências a jogos PlayStation que só aparecem depois de um número específico de robôs resgatados.",
            },
            {
              titulo: "🏆 Não pule os níveis de desafio",
              desc: "As Speedrun Challenges e os Challenge Levels de alta dificuldade desbloqueados no segundo terço do jogo são onde a Team Asobi testa o vocabulário mecânico construído ao longo da campanha — e onde o jogo mais se aproxima de dificuldade genuína.",
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
          <Zap className="h-7 w-7 text-geek" />
          Por Que o GOTY 2024 Surpreendeu Tanta Gente
        </h2>
        <p>
          Quando a lista de indicados ao Jogo do Ano no The Game Awards 2024 foi divulgada, Astro Bot
          estava ao lado de nomes como Black Myth: Wukong (o fenômeno comercial do ano), Elden Ring:
          Shadow of the Erdtree (expansão standalone do GOTY de 2022), Balatro (o roguelike de cartas
          que se tornou um vício cultural), Final Fantasy VII Rebirth e Metaphor: ReFantazio. A vitória
          de Astro Bot nessa disputa foi amplamente celebrada pela crítica especializada mas também
          surpreendeu parte do público, especialmente os fãs de Black Myth: Wukong — que, pelos
          números de vendas e jogadores simultâneos, parecia o favorito popular.
        </p>
        <p>
          O The Game Awards, fundado pelo jornalista Geoff Keighley em 2014 após o fim do Spike
          Video Game Awards, utiliza um sistema de votação misto: um júri de críticos e jornalistas
          especializados de veículos ao redor do mundo tem peso de 90% na decisão final, com os
          10% restantes determinados pelo voto popular online. Esse modelo explica por que jogos
          com apelo crítico unânime frequentemente vencem sobre fenômenos de vendas: a qualidade
          de execução percebida por especialistas pesa mais do que popularidade comercial bruta.
          No caso de Astro Bot, o consenso crítico foi praticamente unânime — nota 94 no Metacritic
          é um dos resultados mais altos de qualquer jogo de qualquer plataforma em anos — enquanto
          Black Myth: Wukong, apesar de sua recepção popular massiva, acumulou notas críticas na
          faixa de 82 a 84, mais modestas por padrão de GOTY histórico.
        </p>
        <p>
          Há uma dimensão adicional que a comunidade discutiu amplamente após o anúncio: a alegria
          como critério de avaliação. Num ano em que vários dos jogos mais ambiciosos e aclamados
          foram experiências emocionalmente pesadas — Elden Ring com sua melancolia épica, Final
          Fantasy VII Rebirth com sua narrativa emocional sobre luto e memória — Astro Bot representou
          algo diferente: pura alegria de jogar, sem peso, sem drama, sem mensagem social. A Team Asobi
          fez um jogo que sorri para o jogador do início ao fim, e em 2024 isso se revelou não um
          defeito de ambição mas uma virtude rara que a comunidade reconheceu e celebrou.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Astro Bot vs. Super Mario Odyssey: A Comparação Inevitável
        </h2>
        <p>
          Desde o lançamento, Astro Bot foi comparado inevitavelmente a Super Mario Odyssey (2017)
          — o jogo de plataforma 3D que até então era apontado como referência máxima do gênero e
          que, curiosamente, também chegou num momento em que a Nintendo estava celebrando o
          aniversário de Mario. As comparações são justas em alguns aspectos e imprecisas em outros.
          Ambos compartilham a filosofia de apresentar uma ideia nova de gameplay em praticamente
          cada novo nível, a estrutura de hub central com mundos navegáveis, e a decisão de priorizar
          variedade e surpresa sobre dificuldade elevada. Ambos alcançaram notas críticas muito altas
          (Odyssey tem 97 no Metacritic, Astro Bot 94) e foram reconhecidos como marcos do gênero
          no momento de seus lançamentos.
        </p>
        <p>
          As diferenças são igualmente relevantes. Odyssey é um jogo maior em escala — mais mundos,
          mais Luas para coletar, mais horas de conteúdo — enquanto Astro Bot é mais denso e
          verticalmente mais profundo em cada nível individual. Odyssey usa o chapéu Cappy como
          mecânica central única que se expande progressivamente; Astro Bot usa uma rotação constante
          de power-ups diferentes que raramente repetem o mesmo conceito duas vezes. E Astro Bot
          tem, obviamente, a dimensão do DualSense — uma vantagem de plataforma que Odyssey não
          tem equivalente no Joy-Con do Switch, por mais criativo que Nintendo também tenha sido
          com seu próprio controle em outros títulos. O resultado é que não é necessário declarar
          um superior ao outro: são os dois melhores representantes do gênero de sua geração, em
          plataformas diferentes, com propostas que se complementam mais do que competem.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">
            Você já jogou Astro Bot? Qual foi o cameo que mais te surpreendeu? 🤖
          </h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: às vezes o melhor jogo do ano é o mais feliz"
      >
        <p>
          Fui cético com Astro Bot antes de jogar. Um jogo de plataforma com mascote Sony pareceu,
          na prévia, algo seguro demais para ser genuinamente o melhor de 2024. Errei feio. Astro
          Bot é um dos jogos mais bem construídos que joguei nos últimos dez anos — não porque seja
          revolucionário em conceito, mas porque cada centímetro de cada nível foi desenhado com
          intenção e cuidado que raramente se vê em produções de qualquer orçamento. A Team Asobi
          fez um jogo que respeita o tempo do jogador, apresenta ideias novas sem nunca overstay sua
          entrada e usa o hardware do PS5 de formas que nenhum outro título conseguiu replicar com
          a mesma elegância. Para quem tem PS5 e ainda não jogou: não tem desculpa. E para quem
          ainda não tem PS5, Astro Bot é, sozinho, um argumento sólido para considerar o console.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Team Asobi — Perfil oficial Sony",
            url: "https://www.playstation.com/en-us/corporate/about/studios/team-asobi/",
            publisher: "Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Astro Bot — PS5 Games",
            url: "https://www.playstation.com/en-us/games/astro-bot/",
            publisher: "Sony Interactive Entertainment",
            accessedAt: "Julho 2026",
          },
          {
            title: "Astro Bot — Metacritic",
            url: "https://www.metacritic.com/game/astro-bot/",
            publisher: "Metacritic",
            accessedAt: "Julho 2026",
          },
          {
            title: "The Game Awards 2024 — Winners & Nominees",
            url: "https://thegameawards.com/nominees",
            publisher: "The Game Awards",
            accessedAt: "Dezembro 2024",
          },
          {
            title: "IGN — Astro Bot Review",
            url: "https://www.ign.com/games/astro-bot",
            publisher: "IGN",
            accessedAt: "Setembro 2024",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default AstroBotGuiaGoty2024;
