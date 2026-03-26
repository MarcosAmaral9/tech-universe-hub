import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ac1Img from "@/assets/ac-1-altair.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const AC1Altair = () => {
  useEffect(() => {
    trackArticleRead("ac-1-altair-terra-santa-1191", "Assassin's Creed 1: O Início da Lenda — Altaïr e a Terra Santa em 1191", "geek");
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
          Assassin's Creed (2007): O Início da Lenda — Altaïr Ibn-La'Ahad e a Terra Santa em 1191
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={ac1Img} alt="Assassin's Creed 1 — Altaïr na Terra Santa 1191" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em novembro de 2007, a Ubisoft Montreal lançou um jogo que mudaria os games para sempre. <strong>Assassin's Creed</strong> apresentou ao mundo Altaïr Ibn-La'Ahad — um assassino arrogante que perde tudo e precisa reconquistar sua honra nas ruas de Damasco, Acre e Jerusalém durante as Cruzadas de 1191. Um marco que fundou uma das franquias mais vendidas da história.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">🎮 Informações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","13/11/2007"],
              ["Plataformas","PS3, Xbox 360, PC"],["Gênero","Ação-Aventura / Stealth"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 O jogo que fundou a franquia. Disponível no PS3, Xbox 360 e PC. Não disponível nas lojas digitais atuais em versão autônoma — incluído na coletânea <strong>Assassin's Creed Heritage Collection</strong>.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: As Cruzadas e a Terra Santa em 1191
        </h2>
        <p>
          O jogo se passa em <strong>1191 d.C.</strong>, durante a <strong>Terceira Cruzada</strong> — um dos conflitos mais complexos e violentos da Idade Média. O Rei Ricardo I da Inglaterra ("Coração de Leão") lidera os cruzados cristãos. Saladino, sultão ayyúbida, defende Jerusalém com o exército muçulmano. Entre eles, a Terra Santa arde em guerra.
        </p>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["⚔️ Terceira Cruzada (1189-1192)","Ricardo I e Filipe II da França tentam recuperar Jerusalém de Saladino, que a havia tomado em 1187. Batalha de Arsouf (1191) é um dos confrontos centrais do período — o jogo usa esse contexto."],
            ["🕌 A Terra Santa Dividida","Damasco, Acre e Jerusalém eram as três cidades mais estratégicas da região. Acre era o porto principal dos cruzados; Damasco o centro do poder muçulmano; Jerusalém o objetivo final de ambos."],
            ["🗡️ Os Assassinos Históricos","Os Assassinos de Altaïr são baseados nos Nizaris — uma seita islâmica real liderada pelo 'Velho da Montanha' na Fortaleza de Masyaf (Síria). Usavam assassinatos seletivos como ferramenta política."],
            ["📜 Os Templários Reais","A Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão — os Templários históricos — eram uma ordem militar cristã criada em 1119 para proteger peregrinos. O jogo os retrata como agentes de controle."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Altaïr Ibn-La'Ahad — O Protagonista
        </h2>
        <p>
          <strong>Altaïr Ibn-La'Ahad</strong> (que significa "Filho de Nenhum" em árabe) é um Assassino de nível máximo no início do jogo — habilidoso, arrogante e irresponsável. No prólogo, ele quebra os três principais mandamentos do Credo dos Assassinos: age sem misericórdia, compromete uma missão por arrogância e expõe a localização da Fortaleza de Masyaf aos Templários. Como punição, o Mestre Assassino <strong>Al Mualim</strong> o rebaixa ao nível mais baixo e ordena que ele resgate sua honra eliminando <strong>nove alvos de alto perfil</strong> espalhados pela Terra Santa.
        </p>
        <p>
          A jornada de Altaïr é de redenção e questionamento. À medida que elimina cada alvo e ouve suas últimas palavras, ele começa a perceber que a guerra entre Assassinos e Templários é mais complexa do que Al Mualim lhe ensinou. O que parecia uma questão de liberdade versus controle revela-se uma luta pelo poder de uma relíquia de tecnologia ancestral: a <strong>Maçã do Éden</strong>.
        </p>
        <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-4">
          <p className="font-bold text-amber-400 mb-1 text-sm">🎭 Dublagem original</p>
          <p className="text-sm text-muted-foreground mb-0">Altaïr é dublado por <strong>Philip Shahbaz</strong> em inglês — uma voz marcante que definiu o personagem. Curiosamente, Desmond Miles (o protagonista moderno) é dublado por <strong>Nolan North</strong>, que se tornaria um dos atores de voz mais prolíficos dos games.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          As Três Cidades: Damasco, Acre e Jerusalém
        </h2>
        <p>
          O jogo divide o mundo em três cidades principais, cada uma com distritos pobres, de classe média e ricos — além do campo entre elas (Kingdom) e a Fortaleza de Masyaf.
        </p>
        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cidade</TableHead><TableHead>Contexto Histórico</TableHead><TableHead>Número de Alvos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Damasco","Capital muçulmana. Centro comercial e intelectual. Controlada por Saladino.","3 (incluindo Tamir, traficante de armas)"],
                ["Acre","Porto principal dos Cruzados. Ponto de tensão entre cristãos e muçulmanos.","3 (incluindo Sibrand e Garnier de Naplouse)"],
                ["Jerusalém","A cidade mais sagrada para as três religiões abraâmicas. Palco da batalha final.","3 (incluindo o líder dos Templários Locais)"],
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
          O Credo dos Assassinos — Três Mandamentos
        </h2>
        <p>
          O Credo que Altaïr quebra no prólogo é a base filosófica de toda a franquia. AC1 o apresenta pela primeira vez:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            ["1️⃣","Ficar oculto no campo de visão", "Os Assassinos não devem chamar atenção. Altaïr mata um civil no prólogo — descumprimento direto."],
            ["2️⃣","Nunca matar um inocente","A violência deve ser cirúrgica e justificada. Alvos civis comprometem a missão e a honra."],
            ["3️⃣","Nunca comprometer a Irmandade","A identidade e a localização dos Assassinos devem permanecer secretas acima de tudo."],
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
        <p>
          No final do jogo, Altaïr questiona o próprio Credo — e Al Mualim o confronta com a maior revelação: <em>nada é verdade, tudo é permitido</em> não é uma licença para o caos, mas um lembrete de que a realidade é construída pela percepção humana, e que os Assassinos devem usar essa liberdade com sabedoria.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Mecânicas: O que AC1 Inventou para os Games
        </h2>
        <p>
          AC1 introduziu ou popularizou mecânicas que se tornaram padrão na indústria:
        </p>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            ["🧗 Parkour Livre","Sistema de escalada intuitivo — pressionar o botão de alta velocidade + direção faz Altaïr escalar qualquer superfície automaticamente. Inédito em 2007."],
            ["🦅 Eagle Vision","Visão que revela inimigos (vermelho), aliados (azul) e alvos (dourado). Ancestral do Instinto do Detetive de Batman e muitos outros sistemas."],
            ["🤫 Social Stealth","Misturar-se a multidões de monges e sentados em bancos para fugir dos guardas. O primeiro sistema de stealth social da indústria."],
            ["🗡️ Lâmina Oculta","A arma icônica dos Assassinos — uma lâmina retrátil no pulso. Altaïr cortou seu dedo mindinho para usá-la; versões posteriores não exigiram isso."],
            ["🏙️ Sincronização","Escalar pontos altos para 'sincronizar' o mapa e revelar missões — o DNA de quase todo open world moderno, incluindo Far Cry e Horizon."],
            ["📟 Animus","A moldura narrativa sci-fi: Desmond Miles, no presente, revive as memórias genéticas de seus ancestrais. Permitiu à série explorar qualquer período histórico."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          Sistema de Combate: Elegante e Punitivo
        </h2>
        <p>
          O combate de AC1 é baseado em <strong>contra-ataques</strong> — atacar diretamente um grupo de inimigos resulta em morte rápida. O jogador deve esperar o inimigo atacar e acionar o contra-ataque no momento certo, o que resulta em animações cinematográficas de execução. É um sistema simples mas elegante que recompensa paciência.
        </p>
        <p>
          Altaïr começa com apenas uma espada curta e a lâmina oculta. Ao completar missões e reconquistar o favor de Al Mualim, ele recupera progressivamente suas habilidades: espada longa, lâmina oculta, facas de arremesso, punho de combate e armadura completa.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-amber-400" />
          A Maçã do Éden e o Legado Narrativo
        </h2>
        <p>
          A revelação final de AC1 é uma das mais marcantes da história dos games: a <strong>Maçã do Éden</strong> é um artefato de uma civilização anterior à humanidade (os Precursores / Isu) com poder de controle mental em massa. Al Mualim usava-a para controlar seus próprios Assassinos — incluindo Altaïr. A "guerra pela liberdade" entre Assassinos e Templários encobre uma disputa por artefatos tecnológicos de imenso poder.
        </p>
        <p>
          Esse lore se expande por toda a franquia: as Peças do Éden aparecem em cada jogo subsequente. AC1 também termina com Desmond descobrindo mensagens codificadas nas paredes do laboratório moderno — pistas para os eventos de AC2.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Legado: O Jogo que Mudou os Games
        </h2>
        <p>
          AC1 vendeu <strong>8 milhões de cópias</strong> em seu primeiro ano, tornando-se um dos lançamentos mais bem-sucedidos da geração PS3/Xbox 360. Apesar das críticas à repetitividade das missões secundárias (todas seguiam o mesmo padrão de interrogatório/espionagem/confronto), a recepção geral foi excelente — <strong>81/100 no Metacritic</strong> para o PS3.
        </p>
        <p>
          O impacto transcendeu as vendas: o sistema de parkour livre influenciou diretamente <em>Mirror's Edge</em> (2008), <em>Batman: Arkham Asylum</em> (2009), <em>inFamous</em> (2009) e praticamente todos os open worlds que vieram depois. A sincronização de torres virou template da indústria — para o bem e para o mal.
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
          Vale a Pena Jogar AC1 em 2026?
        </h2>
        <p><strong>Sim — com ressalvas</strong>. AC1 é historicamente importante mas tem <strong>missões secundárias extremamente repetitivas</strong>: todas as atividades de coleta de informações (interrogatório, espionagem, pickpocket) seguem a mesma fórmula sem variação. Os 9 assassinatos principais, no entanto, ainda são excelentes e a apresentação da lore é inesquecível.</p>
        <p><strong>Recomendado se:</strong> você quer entender a origem de Altaïr e do lore dos Precursores, ou é fã da série e nunca jogou o primeiro. <strong>Não recomendado se:</strong> você quer ação variada — pule direto para AC2.</p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Altaïr foi o seu favorito? 🦅</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="ac-1-altair-terra-santa-1191" />
      <CommentSection postId="ac-1-altair-terra-santa-1191" postTitle="Assassin's Creed 1 — Altaïr e a Terra Santa em 1191" />
    </article>
  );
};

export default AC1Altair;
