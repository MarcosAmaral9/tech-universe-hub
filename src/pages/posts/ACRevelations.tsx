import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import acRevImg from "@/assets/ac-revelations.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACRevelations = () => {
  useEffect(() => {
    trackArticleRead("ac-revelations-ezio-constantinopla", "Assassin's Creed Revelations em 2026: Review Completa — Ezio em Constantinopla e o Fim de Altaïr", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Assassin's Creed</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Revelations em 2026 Vale a Pena? Review Completa — Ezio em Constantinopla e o Legado de Altaïr
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="21 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acRevImg}
          alt="Assassin's Creed Revelations — Ezio em Constantinopla, Torre de Galata ao fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em novembro de 2011, <strong>Assassin's Creed Revelations</strong> é o
          encerramento da trilogia Ezio e, simultaneamente, a conclusão da história de Altaïr
          Ibn-La'Ahad. Ezio, agora com 52 anos, viaja até Masyaf para encontrar a Biblioteca
          de Altaïr — e em <strong>Constantinopla</strong> descobre uma conspiração que une
          os legados dos dois Assassinos mais icônicos da franquia numa despedida emocionante.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed Revelations</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Revelations ainda vale a pena em 2026?</strong></li>
          <li>👉 Contexto histórico: Constantinopla otomana e os Selos de Altaïr</li>
          <li>👉 Novas mecânicas: gancho-lâmina, craft de bombas e tower defense</li>
          <li>👉 Sofia Sartor e o adeus emotivo de Ezio</li>
          <li>👉 DLC The Lost Archive, Ezio Collection e custo-benefício</li>
        </ul>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4">🎮 Informações Rápidas para Decisão de Compra</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","15/11/2011"],
              ["Nota Metacritic","80/100 (PS3)"],["Vendas","7,5 milhões de cópias"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 O encerramento da trilogia Ezio. Disponível via{" "}
            <strong>AC: The Ezio Collection</strong> no PS4/PS5, Xbox e PC.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: AC Revelations Vale a Pena em 2026?
        </h2>

        <p>
          <strong>Sim — especialmente como conclusão da trilogia.</strong> Se você jogou
          AC2 e Brotherhood, <strong>Revelations</strong> é essencial para fechar o arco
          de Ezio e Altaïr. A sensação de ver os dois protagonistas chegando ao fim de suas
          jornadas é incomparável na franquia. É o jogo mais emotivo dos três — não o mais
          inovador, mas certamente o mais maduro narrativamente.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: Revelations é a despedida que Ezio e Altaïr mereciam">
          <p>
            Quando finalmente abri a Biblioteca de Altaïr com Ezio em{" "}
            <strong>Revelations</strong> e ouvi o discurso final de Ezio para Desmond (e para
            o jogador), precisei pausar o jogo. Mais de 60 horas de jornada com Ezio — desde
            sua adolescência em AC2 — condensadas num único momento de despedida. A Ubisoft
            raramente acerta emocionalmente assim.
          </p>
          <p>
            O sistema de craft de bombas é subestimado. Com tempo, você descobre combinações
            absurdamente criativas — bombas de atração que grudam guardas em paredes, granadas
            que fingem ser civis e explodem no meio de patrulhas. É o sistema de furtividade
            mais versátil dos três jogos da trilogia. O tower defense é irritante, concordo,
            mas ocorre raramente o suficiente para não arruinar a experiência.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: Constantinopla (1511–1512)
        </h2>

        <p>
          O jogo se passa em <strong>Constantinopla de 1511</strong> — capital do{" "}
          <strong>Império Otomano</strong> sob o sultão <strong>Bayezid II</strong>, às
          vésperas de uma guerra de sucessão entre seus filhos <strong>Selim</strong> e{" "}
          <strong>Ahmet</strong>. Após a queda de Constantinopla em 1453 para Mehmet II,
          a cidade havia sido transformada na capital do maior império islâmico do mundo.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["🕌 Constantinopla Otomana","A ex-capital do Império Bizantino (renomeada Istambul só em 1930). Em 1511, era uma das cidades mais ricas do mundo — cruzamento estratégico das rotas comerciais entre Europa e Ásia."],
            ["⚔️ Guerra de Sucessão Otomana","Bayezid II estava velho e enfraquecido. Seus filhos Selim (brutal, militar) e Ahmet (diplomático) disputavam o trono com espadas. Selim venceria em 1512 — e o personagem Ahmet é o antagonista principal do jogo."],
            ["🏰 Kapadokya Subterrânea","Cidade subterrânea real na Turquia central, usada historicamente por comunidades cristãs para se esconder de perseguições. No jogo, é uma fortaleza Templária que Ezio deve infiltrar."],
            ["📜 Os Selos de Altaïr","Masyaf, na Síria — a fortaleza histórica dos Hashashins (Assassinos reais) — aparece em flashbacks jogáveis ambientados no século XIII, revelando os últimos 60 anos da vida de Altaïr como Mestre Assassino."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Ezio aos 52 e Altaïr aos 82 — Dois Legados em Um Jogo
        </h2>

        <p>
          <strong>Revelations</strong> é único na franquia por ter{" "}
          <strong>dois protagonistas principais</strong>: Ezio no presente do jogo (1511),
          e Altaïr em flashbacks que revelam os últimos 30 anos de sua vida (1191–1228).
          Através de selos escondidos na Biblioteca de Masyaf, Ezio — e o jogador —
          testemunha a vida de Altaïr após os eventos de AC1:
        </p>

        <div className="not-prose space-y-3 my-4">
          {[
            ["Selo 1 — 1191","Altaïr retorna de Jerusalém com a Maçã. Al Mualim é revelado como traidor — o próprio líder dos Assassinos tentava usar a Maçã para controle total da Irmandade."],
            ["Selo 2 — 1205","A invasão Mongol ameaça Masyaf. Altaïr usa a Maçã para repelir o exército — mas as consequências são trágicas para sua família mais próxima."],
            ["Selo 3 — 1247","Altaïr, exilado por décadas, retorna para recuperar a liderança dos Assassinos. Sua autoridade foi deturpada por Abbas, seu antigo rival de infância."],
            ["Selo 4 — 1257","Altaïr, ancião de 92 anos, enfrenta a invasão Mongol de Hulagu Khan. Sela a Biblioteca com a Maçã dentro — para que ninguém mais possa abusar de seu poder destrutivo."],
          ].map(([seal, desc]) => (
            <div key={seal} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-amber-400 font-bold shrink-0 text-sm w-28">{seal}</span>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <p>
          O último flashback — Altaïr com 92 anos, o último na Biblioteca, a Maçã nas mãos,
          a porta fechando lentamente — é um dos momentos mais emotivos de toda a franquia.
          Não há combate, não há ação: apenas a silenciosa dignidade de um homem que viveu
          uma vida extraordinária chegando ao seu fim.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          Constantinopla: Os Quatro Distritos
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Distrito</TableHead><TableHead>Características</TableHead><TableHead>Destaque</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Constantino","Coração comercial, densamente populado, ruído constante","Grand Bazaar, Mercado das Especiarias"],
                ["Beyazid","Sede do poder otomano e intelectual da cidade","Mesquita de Beyazid, Universidade"],
                ["Imperial","Bairro mais rico, aristocrático, proteção pesada","Topkapi (palácio), Hagia Sophia"],
                ["Galata","Bairro genovês do outro lado do Corno de Ouro","Torre de Galata, docas comerciais"],
              ].map(([d,c,m]) => (
                <TableRow key={d}>
                  <TableCell className="font-medium">{d}</TableCell>
                  <TableCell className="text-sm">{c}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{m}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-amber-400" />
          Novas Mecânicas de AC Revelations
        </h2>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            ["🪝 Gancho-Lâmina","Ezio ganha uma lâmina com gancho que permite escalar superfícies verticais com velocidade e criar tirolesas improvisadas entre telhados — muda significativamente o ritmo de mobilidade comparado aos jogos anteriores."],
            ["💣 Craft de Bombas","Sistema de criação de bombas com três componentes: invólucro (efeito), pólvora (alcance) e recheio (tipo de dano). Dezenas de combinações para stealth, fuga e combate direto."],
            ["🗼 Defesa de Quartéis","Mini-jogo de tower defense quando Templários tentam retomar quartéis conquistados. Único no gênero para a franquia — missão de estratégia em tempo real (controverso entre fãs)."],
            ["🏪 Rede Expandida","Agora Ezio pode abrir lojas e pontos de rota de fuga em toda Constantinopla, além de gerenciar a rede de Assassinos recrutados como em Brotherhood."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{t}</h4>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-amber-400" />
          Sofia Sartor — A Companheira Mais Bem Escrita da Trilogia
        </h2>

        <p>
          Uma das adições mais bem-recebidas de <strong>Revelations</strong> é{" "}
          <strong>Sofia Sartor</strong> — uma livraria veneziana em Constantinopla que se
          torna a principal aliada e interesse amoroso de Ezio. Sua relação é desenvolvida
          com maturidade rara para jogos da época: dois adultos de meia-idade, cada um com
          sua própria história, construindo algo genuíno.
        </p>

        <p>
          A dinâmica entre Ezio e Sofia recebe mais atenção narrativa e desenvolvimento
          genuíno do que qualquer relação romântica anterior da série — uma das razões
          pelas quais o final de Revelations é tão emocionalmente impactante.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          O Final da Trilogia e o Adeus de Ezio
        </h2>

        <p>
          Ao abrir a Biblioteca de Altaïr, Ezio não encontra armas ou segredos de combate —
          encontra apenas o esqueleto de Altaïr em sua cadeira, com a Maçã do Éden. E uma
          mensagem gravada de Altaïr endereçada a Desmond Miles.
        </p>

        <p>
          Juno então fala com Desmond, revelando a localização do Templo dos Precursores.
          Ezio, compreendendo que toda sua vida foi um veículo para entregar essa mensagem,
          faz seu discurso mais emotivo: ele não fala mais com Desmond — ele fala com o jogador.
        </p>

        <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-4">
          <p className="font-bold text-amber-400 mb-2 text-sm">💬 Ezio (tradução livre do discurso final)</p>
          <p className="text-sm text-muted-foreground italic mb-0">
            "Eu não sei o que espera de você no fim. Mas sei que você não está sozinho.
            Eu também estava sozinho uma vez. (...) Tome tempo para descobrir o que vale a pena guardar."
          </p>
        </div>

        <div className="my-8 p-5 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Quer começar a trilogia do zero? Leia nossa review de{" "}
            <Link to="/post/ac-2-ezio-auditore-renascimento" className="text-primary hover:underline">
              AC2 — a origem de Ezio
            </Link>{" "}
            e de{" "}
            <Link to="/post/ac-brotherhood-ezio-roma-borgia" className="text-primary hover:underline">
              AC Brotherhood
            </Link>{" "}
            antes de jogar Revelations.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Tempo de Jogo e DLC de AC Revelations
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modo</TableHead><TableHead>Duração</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["História Principal","12–15 horas"],
                ["História + Secundárias","20–25 horas"],
                ["100% Completionist","30–40 horas"],
                ["DLC: The Lost Archive","~3 horas (história de Clay / Subject 16)"],
              ].map(([m,d]) => (
                <TableRow key={m}>
                  <TableCell className="font-medium">{m}</TableCell>
                  <TableCell className="font-bold text-green-400">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p>
          <strong>Revelations</strong> recebeu <strong>80/100 no Metacritic</strong> —
          a nota mais baixa da trilogia, refletindo certa fadiga da fórmula após três jogos
          consecutivos com Ezio. No entanto, foi amplamente elogiado pela conclusão emocional
          dos dois protagonistas. A DLC <em>The Lost Archive</em> narra a história de Subject 16
          (Clay Kaczmarek) em puzzles 3D únicos — conteúdo de lore avançado muito apreciado
          por fãs da mitologia da franquia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Jogar AC Revelations em 2026?
        </h2>

        <p>
          <strong>Sim — especialmente como conclusão.</strong> Se você jogou AC2 e Brotherhood,
          <strong> Revelations</strong> é essencial para fechar o arco de Ezio e Altaïr. A
          sensação de ver os dois protagonistas chegando ao fim de suas jornadas é incomparável.
          Disponível na <strong>AC: The Ezio Collection</strong> com AC2, Brotherhood e
          Revelations remasterizados — a melhor forma de jogar os três em sequência.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC Revelations?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>✓ <strong>PC:</strong> Steam e Ubisoft Connect (via AC: The Ezio Collection)</li>
            <li>✓ <strong>PlayStation 4 / PlayStation 5</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Xbox One / Xbox Series X|S</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Nintendo Switch</strong> (AC: The Ezio Collection)</li>
          </ul>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual foi a revelação mais marcante para você? 🕌</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Assassin's Creed: The Ezio Collection — Steam Store",
            url: "https://store.steampowered.com/app/703550/Assassins_Creed_The_Ezio_Collection/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed Revelations — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-revelations",
            publisher: "HowLongToBeat",
            accessedAt: "Março 2026",
          },
          {
            title: "Ottoman Empire — Britannica",
            url: "https://www.britannica.com/place/Ottoman-Empire",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Constantinople — Britannica",
            url: "https://www.britannica.com/place/Constantinople",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Selim I — Britannica",
            url: "https://www.britannica.com/biography/Selim-I",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed Revelations — PCGamingWiki (requisitos)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed:_Revelations",
            publisher: "PCGamingWiki",
            accessedAt: "Março 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-revelations-ezio-constantinopla" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-revelations-ezio-constantinopla" postTitle="Assassin's Creed Revelations em 2026: Review Completa — Ezio em Constantinopla e o Legado de Altaïr" />
    </article>
  );
};

export default ACRevelations;
