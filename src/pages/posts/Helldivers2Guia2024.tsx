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
import heroImg from "@/assets/helldivers-2-guia-completo-2024.webp";

const SLUG = "helldivers-2-guia-completo-2024";
const TITLE =
  "Helldivers 2 — Guia Completo 2 Anos Depois: 20 Milhões de Cópias, Illuminate, Chegada ao Xbox e o Roadmap 2026";

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
            Helldivers 2 · Arrowhead · PS5 / PC / Xbox · Co-op · Sátira Militar
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
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="19 de Julho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Helldivers 2 guia completo 20 milhões cópias Illuminate Xbox Arrowhead 2026"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>8 de fevereiro de 2024</strong> para PS5 e PC pela{" "}
          <strong>Arrowhead Game Studios</strong> e Sony Interactive Entertainment, o Helldivers 2
          chegou a julho de 2026 com números que redesenharam a categoria de jogos cooperativos:
          segundo a Alinea Analytics (janeiro/2026), o jogo <strong>ultrapassou 20 milhões
          de cópias vendidas</strong> em todas as plataformas — cerca de <strong>US$ 700 milhões
          em receita</strong> — e tornou-se o co-op mais lucrativo da história da Steam. Também
          já rodou <strong>1,6 milhão de cópias no Xbox Series X/S</strong> desde a chegada tardia
          ao console rival em 2025, atingiu <strong>458.709 jogadores simultâneos</strong> no pico
          do lançamento e sobreviveu à polêmica do PSN de maio/2024 que virou caso paradigmático
          na relação publisher-comunidade. Este guia consolida tudo o que importa dois anos depois:
          números reais, as três facções inimigas (incluindo os <strong>Illuminate</strong>
          adicionados em dezembro de 2024), o novo <strong>roadmap 2026</strong> e o estado
          atual do live service.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Os Números Reais Dois Anos Depois
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { label: "Cópias vendidas (todas plataformas)", value: "20 milhões+", sub: "Alinea Analytics · janeiro/2026" },
            { label: "Receita estimada", value: "~US$ 700 mi", sub: "Co-op mais lucrativo da Steam" },
            { label: "Vendas no Xbox Series X/S", value: "1,6 milhão", sub: "Desde o lançamento tardio em 2025" },
            { label: "Pico all-time no Steam", value: "458.709 CCU", sub: "Fevereiro 2024" },
            { label: "Jogadores médios (jul/2026)", value: "~27 mil", sub: "Pico recente: 43.782 (SteamCharts)" },
            { label: "Facções inimigas ativas", value: "3", sub: "Terminids · Automatons · Illuminate" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-geek/30 bg-geek/5 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{s.label}</div>
              <div className="text-2xl font-bold text-geek">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        <p>
          Os números são tão relevantes pelo que significam quanto pela escala bruta: 20 milhões
          de cópias e US$ 700 milhões de receita colocam Helldivers 2 acima de vários AAA
          tradicionais lançados no mesmo período e influenciaram diretamente decisões de outros
          estúdios — o mais citado é o <em>ARC Raiders</em>, cujo estúdio publicamente abandonou
          o modelo free-to-play para adotar o formato pago-uma-vez-e-jogue-para-sempre inspirado
          por Helldivers. O gráfico de jogadores segue a curva típica de live service, com picos
          em cada Warbond (temporada premium) e vales entre lançamentos, mas nunca voltou a
          quedas próximas de zero como muitos jogos-serviço da era pós-2022.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          A Sátira de Starship Troopers como Alicerce
        </h2>
        <p>
          Helldivers 2 é sátira explícita ao militarismo, inspirada em <em>Starship Troopers</em>{" "}
          (1997) de <strong>Paul Verhoeven</strong> — filme que, apesar de comercialmente modesto
          na estreia (US$ 121 milhões contra US$ 105 milhões de orçamento), foi reavaliado como
          crítica ferozmente anti-fascista ao militarismo e à propaganda totalitária, usando a
          estética de filmes de propaganda nazistas e soviéticos de forma irônica. Verhoeven
          cresceu na Holanda ocupada pela Alemanha Nazista, e essa vivência informou tanto{" "}
          <em>Starship Troopers</em> quanto <em>RoboCop</em> (1987).
        </p>
        <p>
          O jogo herda essa ambiguidade como escolha central de design: os jogadores encarnam
          Helldivers da <strong>"Super Terra"</strong>, uma Terra futurística de "Democracia
          Gerenciada" (Managed Democracy) que funciona como Estado autoritário militarista. Os
          vídeos de recrutamento, transmissões de rádio e comunicados oficiais imitam com precisão
          a linguagem de propaganda de regimes autoritários do século XX. Quem entende a referência
          joga com ironia; quem não entende se diverte atirando em insetos gigantes — e ambas as
          leituras são deliberadamente válidas.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-geek" />
          As Três Facções Inimigas: Terminids, Automatons e Illuminate
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              nome: "🐛 Terminids",
              status: "Disponível desde o lançamento (fev/2024)",
              desc: "Facção original — insetos gigantes ao estilo Starship Troopers. Grande volume, dano corpo-a-corpo, tipos pesados como Chargers, Bile Titans e Impalers. Ponto fraco: baixa resistência a fogo (buff do lança-chamas foi um dos highlights de 2026).",
            },
            {
              nome: "🤖 Automatons",
              status: "Disponíveis desde o lançamento (fev/2024)",
              desc: "Facção robótica com estética Terminator/soviética. Munição de longa distância, cobertura, unidades pesadas como Hulks, Tanks e o Factory Strider. Requer loadout anti-armor e uso disciplinado de cobertura.",
            },
            {
              nome: "🛸 Illuminate",
              status: "Adicionados em 12 de dezembro de 2024 (atualização Omens of Tyranny)",
              desc: "Terceira facção, alienígenas psíquicos com escudos de energia, teleporte e naves de invasão urbana. Reintroduzidos oficialmente após 10 meses de teasers no lore. Atualização de março/2026 (Patch 6.1.0) adicionou novos tipos Illuminate e o Warbond Entrenched Division.",
            },
          ].map((f) => (
            <div key={f.nome} className="rounded-xl border border-geek/20 bg-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <div className="font-bold text-geek">{f.nome}</div>
                <div className="text-xs text-muted-foreground">{f.status}</div>
              </div>
              <div className="text-sm text-muted-foreground">{f.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Que Aconteceu Entre 2024 e 2026 — Timeline Real
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            { data: "08/02/2024", evento: "Lançamento em PS5 e PC — 458.709 CCU no Steam, servidores colapsam por dias." },
            { data: "05/2024", evento: "Crise do PSN: Sony tenta forçar vinculação obrigatória de conta PlayStation Network no PC. Comunidade reage em massa; Sony recua em menos de 48h." },
            { data: "12/2024", evento: "Atualização Omens of Tyranny: retorno oficial da facção Illuminate após 10 meses de teasers no lore. Modo urbano jogável." },
            { data: "2025", evento: "Diversos Warbonds (temporadas premium pagas em Super Credits) mantendo curva de engajamento. Correções pesadas de balanceamento após feedback do 'Escalation of Freedom'." },
            { data: "26/08/2025", evento: "Lançamento oficial no Xbox Series X/S — primeira vez que a Sony publica um exclusivo em consoles Microsoft. 1,6M de cópias no Xbox nos primeiros 5 meses." },
            { data: "29/01/2026", evento: "Alinea Analytics confirma 20 milhões de cópias vendidas e ~US$ 700M em receita acumulada." },
            { data: "17/03/2026", evento: "Patch 6.1.0: novos inimigos Illuminate, buff pesado do lança-chamas, Warbond Entrenched Division e primeiro roadmap público oficial da Arrowhead." },
          ].map((t) => (
            <div key={t.data} className="flex gap-4 rounded-xl border border-geek/20 bg-card p-4">
              <div className="text-xs font-mono text-geek shrink-0 w-24 pt-1">{t.data}</div>
              <div className="text-sm text-muted-foreground">{t.evento}</div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-amber-400" />
          A Crise do PSN de Maio/2024: O Caso Que Virou Estudo
        </h2>
        <p>
          Em maio de 2024, três meses após o lançamento, Sony e Arrowhead anunciaram que jogadores
          de PC precisariam vincular conta PSN à Steam para continuar jogando. O problema imediato
          era geográfico: PSN não estava disponível em mais de 170 países, incluindo grande parte
          da América Central, África, Ásia e Europa Oriental. Jogadores desses territórios seriam
          efetivamente banidos de um jogo que compraram legalmente.
        </p>
        <p>
          A reação foi coordenada e brutal: o Steam registrou uma das quedas mais rápidas de
          avaliação de sua história — de "Muito Positivo" para "Negativamente Avassalador" em
          horas — e campanhas de reembolso e mobilização coletiva se espalharam globalmente. Em{" "}
          <strong>menos de 48 horas</strong>, a Sony recuou totalmente. O CEO da Arrowhead,
          Johan Pilestedt, esteve ativo nas redes durante toda a crise, primeiro tentando mediar
          e depois celebrando o recuo. O episódio virou <em>case study</em> repetido em conferências
          da indústria como o exemplo mais bem-sucedido de pressão organizada de consumidores
          revertendo decisão corporativa em anos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-geek" />
          O Roadmap 2026 e a Guerra Galáctica Hoje
        </h2>
        <p>
          Em <strong>março de 2026</strong>, com o Patch 6.1.0, a Arrowhead publicou pela primeira
          vez um <strong>roadmap oficial</strong> — algo inédito na história do jogo, que sempre
          operou por surpresas. O roadmap 2026 lista:
        </p>
        <ul>
          <li>Novos tipos Illuminate espalhados ao longo do ano (o primeiro chegou junto com o 6.1.0);</li>
          <li>Sistema de <em>Exostorms</em> — eventos climáticos planetários que alteram missões dinamicamente;</li>
          <li>Novos Warbonds premium a cada 4–6 semanas, mantendo o formato pago-em-Super-Credits-farmáveis;</li>
          <li>Expansão da Guerra Galáctica com novos setores e planetas jogáveis;</li>
          <li>Retorno de eventos de "Major Order" mais longos, com recompensas persistentes.</li>
        </ul>
        <p>
          A Guerra Galáctica em si — o sistema de conflito persistente controlado em tempo real
          pelo funcionário da Arrowhead apelidado de <strong>"Joel"</strong>, tratado como Dungeon
          Master vivo pela comunidade — segue como o motor narrativo do jogo. Cada missão de cada
          jogador em qualquer plataforma conta para conquistar ou defender planetas no mapa
          galáctico compartilhado. É uma das poucas experiências de "narrativa emergente ao vivo"
          em escala massiva que a indústria já produziu.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Estratagemas: O Vocabulário que Define o Jogo
        </h2>
        <p>
          O sistema de <strong>Estratagemas (Stratagems)</strong> segue sendo o coração mecânico
          do jogo: equipamentos e ataques chamados via sequência de direcionais no controle —
          como cheat codes — que descem do orbital para ajudar a esquadrão. Executar uma sequência
          longa sob fogo inimigo é uma das mecânicas mais tensas do co-op moderno.
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
                ["🔫 Suporte de Armas", "Metralhadoras pesadas, lança-foguetes e canhões automáticos. Requerem ser coletados no ponto de queda — posicionamento vira estratégia."],
                ["💣 Ataques Orbitais", "Bombas de precisão, canhão orbital e salvas de foguetes. Alto dano em área, cooldown longo — para grupos densos ou estruturas."],
                ["🦅 Suporte Aéreo (Eagle)", "Passadas de bombardeio, napalm e foguetes. Recarregam voltando ao navio após usos limitados — gestão importa."],
                ["🛡️ Defesa e Suporte", "Escudos, sentinelas automáticas e torretas de morteiro. Essenciais em missões de defesa e ativação de objetivos."],
                ["🚗 Veículos e Mechs", "Exoesqueletos EXO-45 e EXO-49 e veículos de ressuprimento. Disponibilidade limitada por missão."],
                ["🔥 Novos em 2026", "Buffs do lança-chamas (Patch 6.1.0), novos Estratagemas anti-Illuminate e o Warbond Entrenched Division com foco em defesa entrincheirada."],
              ].map(([cat, desc], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3.5 px-4 font-semibold text-sm break-words">{cat}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-sm break-words">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Dicas Essenciais Para Quem Está Voltando ou Começando em 2026
        </h2>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              titulo: "🔢 Memorize sequências dos Estratagemas favoritos",
              desc: "Sob pressão de combate, ler a sequência falha. Memorize 3 ou 4 de cor — a execução reflexiva salva missões nos níveis altos.",
            },
            {
              titulo: "🎯 Mire nas partes fracas de cada facção",
              desc: "Terminids: barriga e costas. Automatons: cabeça e articulações. Illuminate: gerador do escudo antes do corpo. Dano direcional muda tudo.",
            },
            {
              titulo: "💀 Fogo amigo é intencional — comunique antes de chamar orbital",
              desc: "Bombas orbitais e Eagles atingem aliados com a mesma letalidade. Sempre avise no chat de voz ou texto antes de largar Estratagema de área.",
            },
            {
              titulo: "📦 Colete Samples antes de extrair",
              desc: "Samples raras (roxas) e Super Samples (laranjas, só em Dif. 7+) são a moeda de upgrade da nave. Explore antes de chamar extração — morrer nos segundos finais custa tudo.",
            },
            {
              titulo: "🚀 Chame extração cedo, não no último minuto",
              desc: "O contador leva 2 minutos após ser chamado. Chame com folga — os inimigos escalam agressivamente até a nave chegar.",
            },
            {
              titulo: "⚙️ Suba de Dificuldade gradualmente até 6-7",
              desc: "Dificuldades altas não só adicionam mais inimigos — abrem tipos pesados exclusivos (Bile Titans, Factory Striders, Illuminate Overseers) que exigem loadout anti-armor específico.",
            },
            {
              titulo: "🔥 No patch 6.1.0, o lança-chamas voltou a ser meta",
              desc: "Depois de vários nerfs em 2024–2025, o Flamethrower recebeu buff significativo em março/2026 e virou uma das melhores armas contra hordas Terminid.",
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
          Por Que Helldivers 2 Continua Relevante Dois Anos Depois
        </h2>
        <p>
          A permanência do jogo — 27 mil jogadores médios no Steam em julho de 2026, dois anos e
          meio após o lançamento, sem contar PS5 e Xbox — se explica por uma combinação de
          escolhas que a indústria live service raramente acerta ao mesmo tempo: um gancho
          identitário forte (todos são "soldados da Super Terra"), uma metanarrativa emergente
          real com Joel controlando a Guerra Galáctica, monetização sem battle pass de nível
          pago (Warbonds custam Super Credits farmáveis in-game), CEO ativo e comunicativo, e a
          disciplina de expandir o jogo sem quebrar o núcleo original — a chegada dos Illuminate
          em dezembro de 2024, o lançamento no Xbox em agosto de 2025 e o primeiro roadmap oficial
          em março de 2026 foram todos executados sem os desastres de "Escalation of Freedom"
          que abalaram o jogo no meio de 2024.
        </p>
      </div>

      <EditorialTake
        category="geek"
        title="Análise do Marcos: Helldivers 2 é o modelo de live service que a indústria devia estudar"
      >
        <p>
          Dois anos e meio depois, Helldivers 2 é o exemplo mais claro de que dá para operar um
          jogo-serviço sem apelar para as práticas predatórias que dominaram a categoria entre
          2019 e 2024. 20 milhões de cópias vendidas, US$ 700 milhões de receita, três facções
          ativas, Xbox rodando desde 2025, roadmap público e comunidade ainda coesa em julho de
          2026 — tudo isso com Warbonds pagáveis em moeda farmável, sem battle pass expiratório,
          sem edições de fundador de US$ 100 e sem CEO desaparecendo em crises. A crise do PSN
          de 2024, que naquele momento parecia fim de linha, virou a maior aula pública sobre
          poder de comunidade organizada dos últimos anos. Se você joga cooperativo e ainda não
          entrou, entre; se saiu no meio de 2024 frustrado com nerfs, o Patch 6.1.0 de março de
          2026 é o melhor momento para voltar.
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
            title: "Helldivers 2 sells 20M copies — Alinea Analytics",
            url: "https://alineaanalytics.substack.com/p/helldivers-2-sells-20m-copies",
            publisher: "Alinea Analytics",
            accessedAt: "Julho 2026",
          },
          {
            title: "Helldivers 2 Xbox vs. PS5 Sales Data — 20M Copies",
            url: "https://www.purexbox.com/news/2026/01/helldivers-2-xbox-vs-ps5-sales-data-shared-as-game-reportedly-hits-20-million-copies-sold",
            publisher: "Pure Xbox",
            accessedAt: "Julho 2026",
          },
          {
            title: "Helldivers 2 Patch 6.1.0 — Illuminate, Exostorms and 2026 Roadmap",
            url: "https://egw.news/gaming/news/33277/helldivers-2-march-2026-update-adds-new-illuminate-R-q_U7gQY",
            publisher: "EGW News",
            accessedAt: "Julho 2026",
          },
          {
            title: "Helldivers 2 — SteamCharts (jogadores simultâneos)",
            url: "https://steamcharts.com/app/553850",
            publisher: "SteamCharts",
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
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default Helldivers2Guia2024;
