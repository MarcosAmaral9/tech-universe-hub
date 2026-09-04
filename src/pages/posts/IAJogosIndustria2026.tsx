import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import {
  Clock, User, Calendar, Gamepad2, Cpu, Bot, ListChecks, HelpCircle, Scale, Wand2,
} from "lucide-react";
import heroImg from "@/assets/ia-jogos-industria-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "ia-jogos-industria-games-2026";
const TITLE = "IA nos Jogos: Do NPC que Conversa ao DLSS — Como a Inteligência Artificial Mudou os Games";

const CASOS = [
  {
    caso: "NVIDIA ACE",
    detalhe: "Conjunto de modelos que dá voz, fala e reação a NPCs em tempo real. Estreou como demo (Kairos, com a Convai) na Computex 2023 e chegou a jogo comercial em PUBG: Ally e no Companion do inZOI, da Krafton.",
    tipo: "NPCs generativos",
  },
  {
    caso: "DLSS (NVIDIA)",
    detalhe: "Reconstrução de imagem por rede neural: renderiza em resolução menor e reconstrói em alta, com geração de quadros a partir do DLSS 3. É o uso de IA que mais afeta a experiência real de quem joga hoje.",
    tipo: "Performance / gráficos",
  },
  {
    caso: "FSR e XeSS",
    detalhe: "Respostas de AMD e Intel ao DLSS. O FSR 4 da AMD passou a usar aprendizado de máquina, e o XeSS da Intel roda em unidades de matriz das GPUs Arc. Os três disputam qualidade de imagem por watt.",
    tipo: "Performance / gráficos",
  },
  {
    caso: "Ubisoft Ghostwriter",
    detalhe: "Ferramenta interna apresentada em 2023 que gera rascunhos de 'barks' — as falas curtas ambientais de NPCs. Os roteiristas escolhem e reescrevem; a Ubisoft posiciona a ferramenta como apoio, não substituição.",
    tipo: "Roteiro assistido",
  },
  {
    caso: "AI Dungeon / Suck Up!",
    detalhe: "Jogos construídos em torno de modelos de linguagem, em que a narrativa ou a persuasão dos NPCs acontece em texto livre. Provam o conceito, mas expõem os limites: incoerência, custo por interação e moderação.",
    tipo: "Jogos nativos de LLM",
  },
  {
    caso: "Steam e a rotulagem de IA",
    detalhe: "Desde 2024, a Valve exige que desenvolvedores declarem uso de IA generativa na ficha do jogo. Milhares de páginas na Steam já trazem o aviso, o que tornou o fenômeno mensurável pela primeira vez.",
    tipo: "Transparência / política",
  },
];

const ANTES_DEPOIS = [
  { tema: "NPC", antes: "Árvores de comportamento e diálogo em menu, escritos linha a linha", agora: "Modelos de linguagem gerando fala com contexto, ainda raros em jogos grandes" },
  { tema: "Gráficos", antes: "Renderização nativa: mais pixels = mais custo", agora: "Upscaling neural e geração de quadros (DLSS, FSR, XeSS) sustentando ray tracing" },
  { tema: "Testes", antes: "QA humano repetindo trechos manualmente", agora: "Bots de teste automatizado varrendo mapas e detectando travamentos" },
  { tema: "Arte", antes: "Concept art e texturas feitas peça por peça", agora: "Geração e variação assistidas, com revisão humana obrigatória em estúdios sérios" },
  { tema: "Dublagem", antes: "Estúdio, elenco e regravação para cada linha", agora: "Voz sintética licenciada, com acordos de consentimento em negociação" },
];

const IAJogosIndustria2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · Tecnologia · Indústria
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA nos Jogos: Do NPC que Conversa ao DLSS — Como a Inteligência Artificial Mudou os Games
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A <strong>IA nos jogos</strong> não começou com o ChatGPT: ela move inimigos desde os anos 1980. O que
          mudou foi o tipo de IA — e o impacto. Hoje ela reconstrói cada quadro que você vê na tela, escreve
          rascunhos de diálogo em estúdios AAA e ameaça (ou promete) NPCs que conversam de verdade. Veja o que já é
          real, o que ainda é demo e o que a indústria decidiu sobre transparência.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />3 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Controle de videogame formado por partículas de rede neural em roxo e verde sobre paisagem de jogo com painéis holográficos de personagens"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            Resumo rápido
          </h2>
          <div className="space-y-2">
            {[
              { k: "Uso mais impactante hoje", v: "upscaling neural (DLSS, FSR, XeSS) — está em quase todo jogo novo" },
              { k: "NPC generativo em jogo real", v: "PUBG: Ally e o Companion do inZOI, com NVIDIA ACE" },
              { k: "Uso em estúdios AAA", v: "rascunhos de falas ambientais, QA automatizado, variação de arte" },
              { k: "Regra de transparência", v: "Steam exige declaração de uso de IA generativa desde 2024" },
              { k: "O que não aconteceu", v: "nenhum AAA lançado com narrativa principal escrita por IA" },
            ].map((item) => (
              <div key={item.k} className="flex gap-2 text-sm md:text-base">
                <span className="font-semibold text-geek min-w-40">{item.k}:</span>
                <span>{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-geek" />
          A IA que sempre esteve lá (e que ninguém chamava de IA)
        </h2>
        <p>
          Os fantasmas de Pac-Man tinham personalidades distintas em 1980. Os inimigos de F.E.A.R. (2005) ficaram
          famosos por flanquear o jogador usando planejamento orientado a objetivos. Os alienígenas de Alien:
          Isolation (2014) trabalham com dois sistemas — um que sabe onde você está e outro que "caça" com
          informação parcial —, produzindo aquela sensação de perseguição inteligente. Nada disso é aprendizado de
          máquina: é <strong>IA simbólica</strong>, regras escritas à mão por designers geniais.
        </p>
        <p>
          Entender isso importa porque a discussão atual mistura duas coisas. Quando alguém diz "a IA vai melhorar
          os inimigos dos jogos", muitas vezes o que faltava não era capacidade computacional, e sim <em>design</em>:
          um inimigo perfeito não é divertido. A IA generativa entra num terreno diferente — produção de conteúdo,
          performance gráfica e ferramentas de desenvolvimento — e é aí que ela realmente virou a mesa.
        </p>

        <h2 className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-geek" />
          O uso que já está no seu PC ou console: reconstrução neural de imagem
        </h2>
        <p>
          Se você joga em PC, provavelmente já ativou IA sem pensar nisso. O DLSS da NVIDIA renderiza o jogo numa
          resolução mais baixa e usa uma rede neural para reconstruir a imagem em alta, ganhando desempenho; a
          partir do DLSS 3, ele também gera quadros intermediários inteiros. AMD e Intel seguiram o caminho com
          FSR e XeSS, e o FSR 4 passou a usar aprendizado de máquina em vez de apenas algoritmos analíticos.
        </p>
        <p>
          O efeito prático é enorme: ray tracing pesado só é viável na maioria das placas por causa dessas técnicas.
          O efeito colateral também: a discussão sobre "quadros falsos", latência de entrada e comparações de
          desempenho que misturam quadros renderizados com quadros gerados. É o único uso de IA em games que
          praticamente todo jogador sente na mão, todo dia.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-geek" />
          Casos reais: o que existe de fato
        </h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-geek/30 text-left">
                <th className="py-2 pr-3 text-geek">Caso</th>
                <th className="py-2 pr-3 text-geek">O que é</th>
                <th className="py-2 text-geek">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {CASOS.map((c) => (
                <tr key={c.caso} className="border-b border-border/50 align-top">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">{c.caso}</td>
                  <td className="py-2 pr-3">{c.detalhe}</td>
                  <td className="py-2 whitespace-nowrap text-muted-foreground">{c.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O NPC que conversa é a promessa mais vendida e a mais difícil de entregar. Os problemas são conhecidos:
          um personagem que pode dizer qualquer coisa pode contradizer o roteiro, revelar informação que deveria
          ser secreta, quebrar o tom da obra ou dizer algo que envergonha o estúdio. Some a isso o custo de rodar
          o modelo (na nuvem, cada palavra tem preço; localmente, cada palavra disputa memória com os gráficos) e
          fica claro por que os primeiros usos comerciais são <em>companheiros</em> — personagens auxiliares, com
          escopo limitado e trilhos bem definidos — e não o vilão principal da campanha.
        </p>

        <h2 className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-geek" />
          Antes e depois: onde a IA realmente entrou na produção
        </h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-geek/30 text-left">
                <th className="py-2 pr-3 text-geek">Área</th>
                <th className="py-2 pr-3 text-geek">Como era</th>
                <th className="py-2 text-geek">Como está</th>
              </tr>
            </thead>
            <tbody>
              {ANTES_DEPOIS.map((r) => (
                <tr key={r.tema} className="border-b border-border/50 align-top">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">{r.tema}</td>
                  <td className="py-2 pr-3 text-muted-foreground">{r.antes}</td>
                  <td className="py-2">{r.agora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-geek" />
          A parte incômoda: empregos, dubladores e a rotulagem na Steam
        </h2>
        <p>
          A indústria de games passou por rodadas duras de demissões entre 2023 e 2025, e a IA virou pararraios do
          debate — ainda que os motivos econômicos sejam mais amplos (custos de produção inflados, juros altos,
          consolidação após aquisições). Onde o vínculo é direto e documentado é na dublagem: o sindicato SAG-AFTRA
          conduziu uma greve específica de <em>videogames</em>, iniciada em julho de 2024, tendo a proteção contra
          réplicas de voz por IA como pauta central, e o acordo alcançado em 2025 estabeleceu exigências de
          consentimento e compensação para o uso de vozes digitais.
        </p>
        <p>
          Do lado do consumidor, a mudança mais concreta veio da Valve. Desde 2024, quem publica na Steam precisa
          informar se e como usou IA generativa — no desenvolvimento (arte, código, áudio criados durante a
          produção) ou em tempo de execução (conteúdo gerado enquanto você joga). A informação aparece na página
          da loja, e o número de jogos com a declaração cresceu de forma acelerada, transformando uma suspeita
          difusa em dado verificável. Foi a primeira vez que o jogador ganhou um filtro real de transparência.
        </p>

        <h2 className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-geek" />
          Quando a IA vira o jogador: a linhagem dos agentes
        </h2>
        <p>
          Há uma segunda história paralela, tão importante quanto a da produção: a da IA que <em>joga</em>. Ela
          começa fora dos videogames, em 1997, quando o Deep Blue da IBM venceu Garry Kasparov no xadrez usando
          busca em árvore e avaliação escrita por humanos. Duas décadas depois, o método mudou de natureza: em
          março de 2016, o AlphaGo, da DeepMind, venceu Lee Sedol por 4 a 1 no Go — um jogo com mais posições
          possíveis do que átomos no universo observável — combinando redes neurais com busca de Monte Carlo. Em
          2017, o AlphaGo Zero aprendeu sozinho, jogando contra si mesmo, sem nenhuma partida humana no treino.
        </p>
        <p>
          A migração para os videogames veio logo depois. O OpenAI Five derrotou a OG, campeã mundial de Dota 2,
          em abril de 2019, numa versão com restrições de heróis e itens. No mesmo ano, o AlphaStar atingiu nível
          Grandmaster em StarCraft II no ladder europeu do Battle.net, jogando com limitações de ações por minuto
          e campo de visão para se aproximar das condições humanas. Em 2022, a Sony publicou na revista Nature o
          GT Sophy, agente que venceu os melhores pilotos de Gran Turismo Sport respeitando a etiqueta de pista —
          um detalhe crucial, porque a parte difícil não era ser rápido, era não ser um motorista sujo. Uma versão
          do Sophy foi disponibilizada aos jogadores de Gran Turismo 7 como adversário opcional.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-geek/30 text-left">
                <th className="py-2 pr-3 text-geek">Marco</th>
                <th className="py-2 pr-3 text-geek">Ano</th>
                <th className="py-2 text-geek">Por que importa</th>
              </tr>
            </thead>
            <tbody>
              {AGENTES.map((a) => (
                <tr key={a.marco} className="border-b border-border/50 align-top">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">{a.marco}</td>
                  <td className="py-2 pr-3 whitespace-nowrap text-muted-foreground">{a.ano}</td>
                  <td className="py-2">{a.porque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O que essa linhagem ensina é contraintuitivo: agentes sobre-humanos existem há anos e quase nunca vão
          para dentro dos jogos comerciais como inimigos. O motivo é de design, não técnico. Um adversário que
          nunca erra frustra; um que erra de forma previsível diverte. Quando o GT Sophy chegou ao Gran Turismo 7,
          ele veio calibrado em níveis de habilidade — ou seja, o trabalho difícil foi <em>piorar</em> a IA de
          maneira convincente.
        </p>

        <h2 className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-geek" />
          Procedural não é generativo: a confusão que mais atrapalha o debate
        </h2>
        <p>
          Boa parte das discussões de fórum tropeça aqui. <strong>Geração procedural</strong> é conteúdo criado por
          algoritmos determinísticos a partir de uma semente: as masmorras de Rogue (1980), as cavernas de
          Minecraft, os 18 quintilhões de planetas de No Man's Sky (2016), os níveis de Hades ou os baralhos de
          Balatro. Nada disso envolve rede neural ou dados de treino — é matemática com regras escritas por
          designers, previsível o suficiente para ser depurada.
        </p>
        <p>
          <strong>IA generativa</strong> é outra coisa: um modelo estatístico treinado em grandes volumes de dados
          que produz texto, imagem, áudio ou vídeo novos. A diferença prática é jurídica e criativa. Um mapa
          procedural não levanta questão de direito autoral nem de consentimento; uma textura gerada por difusão
          levanta as duas. Confundir os dois termos faz jogadores acusarem estúdios injustamente — e faz estúdios
          se esconderem atrás da palavra "procedural" quando o caso é outro.
        </p>
        <p>
          Uma terceira categoria começou a aparecer em 2025 e ainda não tem nome estabelecido: os <em>modelos de
          mundo</em>. A Microsoft Research apresentou o Muse (WHAM), treinado com partidas de Bleeding Edge, da
          Ninja Theory, capaz de gerar sequências jogáveis de vídeo e ações; a Google DeepMind mostrou o Genie 2,
          que cria ambientes interativos a partir de uma única imagem, e o SIMA, agente treinado para seguir
          instruções em linguagem natural dentro de vários jogos comerciais. São pesquisas, não produtos — mas
          apontam para ferramentas de prototipagem, não para substituir engines.
        </p>

        <h2 className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-geek" />
          O que as próprias empresas dizem (e o que os números mostram)
        </h2>
        <p>
          Strauss Zelnick, CEO da Take-Two (Rockstar, 2K), repete em entrevistas que a IA vai ampliar o número de
          criadores e a qualidade, mas não reduzir custos nem substituir talento — e que os grandes êxitos
          continuam vindo de decisões humanas. A Square Enix declarou publicamente, em sua mensagem de início de
          2024, intenção de ser agressiva no uso de IA em desenvolvimento e conteúdo. A Electronic Arts tratou a
          IA como "o próprio núcleo do negócio" em comunicações a investidores em 2024. Já a Nintendo adotou o
          discurso oposto: em assembleia de acionistas de 2024, Shuntaro Furukawa afirmou que a empresa pretende
          seguir entregando valor único e que questões de propriedade intelectual pesam contra o uso de IA
          generativa nos seus jogos.
        </p>
        <p>
          Do lado mensurável, a rotulagem da Steam produziu o primeiro conjunto de dados público sobre o tema: as
          declarações de IA generativa passaram de uma fração marginal do catálogo em 2023 para uma parcela
          expressiva dos lançamentos anuais a partir de 2024, com crescimento concentrado em títulos independentes
          e de baixo orçamento. A leitura honesta é que a IA generativa está mudando primeiro a base da pirâmide —
          jogos pequenos, com equipes de uma a cinco pessoas — e só depois, e de forma pontual, os AAA.
        </p>

        <h2>Como jogar de olho nisso (guia prático)</h2>

        <ul>
          <li><strong>Quer saber se um jogo usou IA?</strong> Role a página da Steam até a seção de divulgação de IA generativa, abaixo da descrição.</li>
          <li><strong>Notou textura estranha ou fala genérica?</strong> Compare com a declaração da loja antes de acusar — muita arte "esquisita" é só terceirização apressada.</li>
          <li><strong>Está perdendo desempenho?</strong> Ative upscaling no modo "qualidade" antes de baixar resolução: o ganho costuma ser maior com menos perda visual.</li>
          <li><strong>Se latência importa (competitivo)?</strong> Prefira upscaling sem geração de quadros e ligue as tecnologias de redução de latência da sua GPU.</li>
        </ul>

        <AdInArticle />

        <h2 className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-geek" />
          Perguntas frequentes
        </h2>

        <h3>Já existe algum jogo grande com NPCs que conversam livremente?</h3>
        <p>
          Existem implementações comerciais em escopo limitado, como o companheiro de IA de PUBG e o Smart Zoi/Companion
          do inZOI, ambos usando tecnologia NVIDIA ACE. Nenhum AAA lançou até agora uma campanha principal em que
          todos os personagens improvisam diálogo livremente — o risco narrativo e o custo ainda inviabilizam.
        </p>

        <h3>DLSS é "trapaça"? Os quadros são falsos?</h3>
        <p>
          Não há trapaça: é uma técnica de reconstrução, como muitas outras que a computação gráfica usa há décadas.
          A crítica legítima é sobre comparações de desempenho que somam quadros gerados aos renderizados sem
          informar a latência resultante — por isso muitos testes hoje medem latência separadamente.
        </p>

        <h3>Como sei se um jogo na Steam usou IA generativa?</h3>
        <p>
          A própria página do jogo traz uma seção de divulgação obrigatória desde 2024, informando se a IA foi
          usada na produção ou durante a execução do jogo. Se não houver a seção, o desenvolvedor declarou que não usou.
        </p>

        <h3>A IA vai reduzir o preço ou o tempo de desenvolvimento dos jogos?</h3>
        <p>
          Até agora, o efeito medido é em produtividade de tarefas específicas (testes, variações de arte, falas
          ambientais), não em preço final. Historicamente, ganhos de eficiência na indústria de games foram
          reinvestidos em escopo maior, não em jogos mais baratos.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          A ironia é boa: o uso de IA que mais mudou a vida do jogador é o menos glamouroso. Ninguém faz thread
          empolgada sobre reconstrução de imagem, mas é o DLSS — e não o NPC falante — que decide se você joga com
          ray tracing ou não.
        </p>
        <p>
          Sobre NPCs generativos, sigo cético no curto prazo por um motivo de design, não de tecnologia: um
          personagem que pode dizer tudo geralmente não diz nada memorável. As melhores falas dos games que amamos
          foram escritas por gente que sabia exatamente quando calar a boca do personagem. A IA entra bem onde há
          volume e pouca autoria — barks, testes, variação. O resto continua sendo ofício.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "NVIDIA ACE — autonomous game characters",
            url: "https://developer.nvidia.com/ace",
            publisher: "NVIDIA Developer",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Steam — AI content disclosure policy",
            url: "https://store.steampowered.com/news/group/4145017/view/3862463747997849618",
            publisher: "Valve / Steam",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Ubisoft Ghostwriter: AI tool for NPC barks",
            url: "https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/ghostwriter-one-of-the-many-tools-ubisoparis-are-using-to-support-game-development",
            publisher: "Ubisoft News",
            accessedAt: "Setembro 2026",
          },
          {
            title: "SAG-AFTRA reaches tentative agreement ending video game strike",
            url: "https://www.sagaftra.org/sag-aftra-reaches-tentative-agreement-interactive-media-agreement",
            publisher: "SAG-AFTRA",
            accessedAt: "Setembro 2026",
          },
          {
            title: "NVIDIA DLSS — deep learning super sampling",
            url: "https://www.nvidia.com/en-us/geforce/technologies/dlss/",
            publisher: "NVIDIA",
            accessedAt: "Setembro 2026",
          },
          {
            title: "AMD FidelityFX Super Resolution (FSR)",
            url: "https://www.amd.com/en/products/graphics/technologies/fidelityfx/super-resolution.html",
            publisher: "AMD",
            accessedAt: "Setembro 2026",
          },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default IAJogosIndustria2026;
