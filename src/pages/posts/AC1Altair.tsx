import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ac1Img from "@/assets/ac-1-altair.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AC1Altair = () => {
  useEffect(() => {
    trackArticleRead("ac-1-altair-terra-santa-1191", "Assassin's Creed 1 em 2026: Review Completa — Altaïr Ibn-La'Ahad e a Terra Santa", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Assassin's Creed
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed 1 em 2026 Vale a Pena? Review Completa — Altaïr Ibn-La'Ahad e a Terra Santa em 1191
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="21 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={ac1Img}
          alt="Assassin's Creed 1 — Altaïr Ibn-La'Ahad na Terra Santa, Damasco ao fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em novembro de 2007, a Ubisoft Montreal lançou um jogo que mudaria os videogames para
          sempre. <strong>Assassin's Creed</strong> apresentou ao mundo{" "}
          <strong>Altaïr Ibn-La'Ahad</strong> — um assassino arrogante que perde tudo e precisa
          reconquistar sua honra nas ruas de Damasco, Acre e Jerusalém durante as Cruzadas de 1191.
          É o marco fundador de uma das franquias mais vendidas da história dos games, e ainda
          merece atenção em 2026 por sua importância histórica e seu lore incomparável.
        </p>

        <p className="text-lg">Neste guia completo do <strong>Assassin's Creed original</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>AC1 ainda vale a pena jogar em 2026?</strong></li>
          <li>👉 Contexto histórico: as Cruzadas e os Assassinos reais</li>
          <li>👉 Altaïr — personagem, missões e o Credo</li>
          <li>👉 As mecânicas que inventaram um gênero</li>
          <li>👉 A Maçã do Éden e o lore dos Precursores</li>
          <li>👉 Onde jogar e custo-benefício em 2026</li>
        </ul>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">🎮 Informações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","13/11/2007"],
              ["Plataformas","PS3, Xbox 360, PC"],["Nota Metacritic","81/100 (PS3)"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 O jogo que fundou a franquia. Disponível no PS3, Xbox 360 e PC. Não disponível
            nas lojas digitais atuais em versão autônoma — incluído na{" "}
            <strong>Assassin's Creed Heritage Collection</strong>.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: AC1 Ainda Vale a Pena em 2026?
        </h2>

        <p>
          <strong>Sim — com ressalvas importantes.</strong> O <strong>Assassin's Creed original</strong>{" "}
          tem missões secundárias extremamente repetitivas: todas as atividades de coleta de
          informações (interrogatório, espionagem, pickpocket) seguem a mesma fórmula sem variação.
          Os 9 assassinatos principais, no entanto, ainda são excelentes — e a apresentação do
          lore dos Precursores e do Animus é inesquecível.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: AC1 é imperfeito, mas fundou algo único">
          <p>
            Joguei o <strong>Assassin's Creed original</strong> no lançamento em 2007 e fiquei
            parado na primeira torre de sincronização por uns 5 minutos só olhando para Damasco
            lá embaixo. Aquela vista — que era impossível em qualquer outro jogo da época —
            capturou algo que vai além da tecnologia gráfica: a sensação de estar
            <em> dentro</em> de um mundo histórico vivo.
          </p>
          <p>
            A repetitividade é real e inegável. Mas quem consegue passar por ela — especialmente
            jogando a história principal sem se perder nas atividades secundárias — encontra um
            dos sistemas de assassinato mais satisfatórios da franquia. Matar Sibrand no porto
            de Acre usando o barco como cobertura continua sendo mais inteligente do que 90% das
            missões dos ACs modernos. A base é sólida; o conteúdo ao redor dela que peca.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: As Cruzadas e a Terra Santa em 1191
        </h2>

        <p>
          O jogo se passa em <strong>1191 d.C.</strong>, durante a{" "}
          <strong>Terceira Cruzada</strong> — um dos conflitos mais complexos e violentos
          da Idade Média. O Rei Ricardo I da Inglaterra ("Coração de Leão") lidera os cruzados
          cristãos. Saladino, sultão ayyúbida, defende Jerusalém com o exército muçulmano.
          Entre eles, a Terra Santa arde em guerra enquanto Assassinos e Templários travam
          sua própria batalha nas sombras.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["⚔️ Terceira Cruzada (1189–1192)","Ricardo I e Filipe II da França tentam recuperar Jerusalém de Saladino, que a havia tomado em 1187. A Batalha de Arsouf (1191) é um dos confrontos históricos centrais do período — o jogo usa esse contexto diretamente na narrativa de Altaïr."],
            ["🕌 A Terra Santa Dividida","Damasco, Acre e Jerusalém eram as três cidades mais estratégicas da região. Acre era o porto principal dos cruzados; Damasco o centro do poder muçulmano; Jerusalém o objetivo final — e mais sagrado — de ambos os lados do conflito."],
            ["🗡️ Os Assassinos Históricos","Os Assassinos de Altaïr são baseados nos Nizaris — uma seita islâmica real liderada pelo 'Velho da Montanha' na Fortaleza de Masyaf (Síria). Usavam assassinatos seletivos como ferramenta política para se defender de exércitos muito maiores."],
            ["📜 Os Templários Reais","A Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão — os Templários históricos — eram uma ordem militar cristã criada em 1119. O jogo os retrata como agentes que buscavam artefatos de tecnologia ancestral para controle de massa."],
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
          Altaïr Ibn-La'Ahad — O Protagonista Original
        </h2>

        <p>
          <strong>Altaïr Ibn-La'Ahad</strong> (que significa "Filho de Nenhum" em árabe) é um
          Assassino de nível máximo no início do jogo — habilidoso, arrogante e irresponsável.
          No prólogo, ele quebra os três principais mandamentos do Credo: age sem misericórdia,
          compromete uma missão por arrogância e expõe a localização da Fortaleza de Masyaf.
          Como punição, o Mestre <strong>Al Mualim</strong> o rebaixa ao nível mais baixo e
          ordena que ele elimine <strong>nove alvos de alto perfil</strong> para redimir-se.
        </p>

        <p>
          A jornada de Altaïr é de redenção e questionamento filosófico crescente. À medida
          que elimina cada alvo e ouve suas últimas palavras, ele percebe que a guerra entre
          Assassinos e Templários é mais complexa do que Al Mualim lhe ensinou — e que o
          próprio mentor esconde segredos sobre a <strong>Maçã do Éden</strong>.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          As Três Cidades: Damasco, Acre e Jerusalém
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cidade</TableHead><TableHead>Contexto Histórico</TableHead><TableHead>Alvos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Damasco","Capital muçulmana. Centro comercial e intelectual. Controlada por Saladino.","3 (incluindo Tamir, traficante de armas)"],
                ["Acre","Porto principal dos Cruzados. Ponto de tensão entre cristãos e muçulmanos.","3 (incluindo Sibrand e Garnier de Naplouse)"],
                ["Jerusalém","A cidade mais sagrada para as três religiões abraâmicas.","3 (incluindo o líder templário local)"],
              ].map(([c,d,n]) => (
                <TableRow key={c}>
                  <TableCell className="font-medium">{c}</TableCell>
                  <TableCell className="text-sm">{d}</TableCell>
                  <TableCell className="text-sm">{n}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-amber-400" />
          O Credo dos Assassinos — Três Mandamentos Fundadores
        </h2>

        <p>O Credo que Altaïr quebra no prólogo é a base filosófica de toda a franquia. AC1 o apresenta pela primeira vez:</p>

        <div className="not-prose space-y-3 my-4">
          {[
            ["1️⃣","Ficar oculto no campo de visão","Os Assassinos não devem chamar atenção. Altaïr mata um civil no prólogo — descumprimento direto e imediato."],
            ["2️⃣","Nunca matar um inocente","A violência deve ser cirúrgica e justificada. Alvos civis comprometem a missão e a honra da Irmandade."],
            ["3️⃣","Nunca comprometer a Irmandade","A identidade e a localização dos Assassinos devem permanecer secretas acima de tudo — Altaïr expôs Masyaf por arrogância."],
          ].map(([num, rule, desc]) => (
            <div key={num} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-xl shrink-0">{num}</span>
              <div>
                <p className="font-bold mb-1">{rule}</p>
                <p className="text-sm text-muted-foreground mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Mecânicas: O que AC1 Inventou para os Videogames
        </h2>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            ["🧗 Parkour Livre","Sistema de escalada intuitivo — pressionar o botão de alta velocidade + direção faz Altaïr escalar qualquer superfície automaticamente. Inédito em 2007 e influência direta em Mirror's Edge, Batman: Arkham e decenas de outros jogos."],
            ["🦅 Eagle Vision","Visão que revela inimigos (vermelho), aliados (azul) e alvos (dourado). Ancestral direto do Instinto do Detetive de Batman, o Sense de The Witcher e muitos outros sistemas similares."],
            ["🤫 Social Stealth","Misturar-se a multidões de monges e sentar em bancos para fugir dos guardas. O primeiro sistema de stealth social da indústria — revolucionário para a época."],
            ["🗡️ Lâmina Oculta","A arma icônica dos Assassinos — uma lâmina retrátil no pulso. Altaïr cortou seu dedo mindinho para usá-la; versões posteriores removeram esse requisito."],
            ["🏙️ Sincronização","Escalar pontos altos para 'sincronizar' o mapa e revelar missões — o DNA de quase todo open world moderno, incluindo Far Cry, Horizon e dezenas de outros."],
            ["📟 Animus","A moldura narrativa sci-fi: Desmond Miles revive as memórias genéticas de seus ancestrais. Permitiu à série explorar qualquer período histórico sem precisar de justificativa narrativa."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-amber-400" />
          A Maçã do Éden e o Lore dos Precursores
        </h2>

        <p>
          A revelação final de <strong>AC1</strong> é uma das mais marcantes dos games: a{" "}
          <strong>Maçã do Éden</strong> é um artefato de uma civilização anterior à humanidade
          (os Precursores / Isu) com poder de controle mental em massa. Al Mualim usava-a para
          controlar seus próprios Assassinos — incluindo Altaïr sem que ele soubesse. A "guerra
          pela liberdade" entre Assassinos e Templários encobre uma disputa por artefatos de
          tecnologia ancestral de imenso poder destrutivo.
        </p>

        <p>
          O jogo também termina com Desmond descobrindo mensagens codificadas nas paredes do
          laboratório moderno — pistas para os eventos de{" "}
          <Link to="/post/ac-2-ezio-italia-renascentista" className="text-primary hover:underline">
            AC2
          </Link>. Esse lore se expande por toda a franquia, conectando todos os títulos
          através das Peças do Éden e da mitologia dos Isu.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Legado: O Jogo que Mudou os Games
        </h2>

        <p>
          <strong>AC1</strong> vendeu <strong>8 milhões de cópias</strong> em seu primeiro ano,
          tornando-se um dos lançamentos mais bem-sucedidos da geração PS3/Xbox 360. Apesar das
          críticas à repetitividade, a recepção geral foi excelente —{" "}
          <strong>81/100 no Metacritic</strong>.
        </p>

        <p>
          O impacto transcendeu as vendas: o sistema de parkour livre influenciou diretamente
          Mirror's Edge (2008), Batman: Arkham Asylum (2009), inFamous (2009) e praticamente
          todos os open worlds que vieram depois. A sincronização de torres virou template da
          indústria — para o bem e para o mal.
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plataforma</TableHead><TableHead>Nota Metacritic</TableHead><TableHead>Vendas Globais</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Xbox 360","81/100","~3M (lançamento)"],
                ["PS3","81/100","~3M (lançamento)"],
                ["PC","79/100","~2M (lançamento)"],
                ["Total (2007)","—","8M de cópias"],
              ].map(([p,n,v]) => (
                <TableRow key={p}>
                  <TableCell className="font-medium">{p}</TableCell>
                  <TableCell>{n}</TableCell>
                  <TableCell>{v}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Jogar Assassin's Creed 1 em 2026?
        </h2>

        <p>
          <strong>Sim — com ressalvas.</strong> AC1 é historicamente importante mas tem{" "}
          <strong>missões secundárias extremamente repetitivas</strong>. Os 9 assassinatos
          principais, no entanto, ainda são excelentes e a apresentação do lore é inesquecível.
        </p>

        <p>
          <strong>Recomendado se:</strong> você quer entender a origem de Altaïr e do lore
          dos Precursores, ou é fã da série e nunca jogou o primeiro.{" "}
          <strong>Não recomendado se:</strong> você quer ação variada — pule direto para{" "}
          <Link to="/post/ac-2-ezio-italia-renascentista" className="text-primary hover:underline">
            AC2
          </Link>.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Altaïr foi o seu Assassino favorito? 🦅</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed (2007) — Metacritic",
            url: "https://www.metacritic.com/game/assassins-creed/",
            publisher: "Metacritic",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed",
            publisher: "HowLongToBeat",
            accessedAt: "Março 2026",
          },
          {
            title: "Third Crusade — Britannica",
            url: "https://www.britannica.com/event/Third-Crusade",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassins (Nizari Ismailis) — Britannica",
            url: "https://www.britannica.com/topic/Assassin-Islamic-sect",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Knights Templar — Britannica",
            url: "https://www.britannica.com/topic/Knights-Templar",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed — PCGamingWiki (requisitos e compatibilidade)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed",
            publisher: "PCGamingWiki",
            accessedAt: "Março 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-1-altair-terra-santa-1191" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-1-altair-terra-santa-1191" postTitle="Assassin's Creed 1 em 2026: Review Completa — Altaïr Ibn-La'Ahad e a Terra Santa" />
    </article>
  );
};

export default AC1Altair;
