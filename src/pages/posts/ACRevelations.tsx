import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import acRevImg from "@/assets/ac-revelations.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const ACRevelations = () => {
  useEffect(() => {
    trackArticleRead("ac-revelations-ezio-constantinopla", "Assassin's Creed Revelations: Ezio em Constantinopla e o Legado de Altaïr", "geek");
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
          Assassin's Creed Revelations: Ezio em Constantinopla, o Legado de Altaïr e o Fim de uma Era
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async" src={acRevImg} alt="Assassin's Creed Revelations — Ezio em Constantinopla" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em novembro de 2011, <strong>Assassin's Creed Revelations</strong> é o encerramento da trilogia Ezio e, simultaneamente, a conclusão da história de Altaïr Ibn-La'Ahad. Ezio, agora com 52 anos, viaja até Masyaf para encontrar a Biblioteca de Altaïr — e em Constantinopla descobre uma conspiração que une os legados dos dois Assassinos mais icônicos da franquia.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4">🎮 Informações Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","15/11/2011"],
              ["Plataformas","PS3, Xbox 360, PC"],["Nota Metacritic","80/100 (PS3)"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 O encerramento da trilogia Ezio. Vendeu <strong>7,5 milhões de cópias</strong>. Disponível via <strong>AC: The Ezio Collection</strong> no PS4/PS5, Xbox e PC.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: Constantinopla (1511–1512)
        </h2>
        <p>
          O jogo se passa em <strong>Constantinopla de 1511</strong> — capital do <strong>Império Otomano</strong> sob o sultão <strong>Bayezid II</strong>, às vésperas de uma guerra de sucessão entre seus filhos <strong>Selim</strong> e <strong>Ahmet</strong>. Após a queda de Constantinopla em 1453 para Mehmet II, a cidade havia sido transformada na capital do maior império islâmico do mundo.
        </p>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["🕌 Constantinopla Otomana","A ex-capital do Império Bizantino, renomeada (Istambul somente em 1930). Em 1511, era uma das cidades mais ricas do mundo — cruzamento das rotas comerciais entre Europa e Ásia."],
            ["⚔️ Guerra de Sucessão","Bayezid II estava velho. Seus filhos Selim (brutal e ambicioso) e Ahmet (mais diplomático) disputavam o trono. Selim venceria em 1512 e se tornaria Selim I — o personagem Ahmet é o antagonista do jogo."],
            ["🏰 Kapadokya Subterrânea","Revelations apresenta Kapadokya — cidade subterrânea real na Turquia central, usada historicamente por comunidades cristãs para se esconder. No jogo, é uma fortaleza Templária."],
            ["📜 O Legado de Altaïr","Masyaf, na Síria — a fortaleza dos Assassinos históricos — aparece em flashbacks jogáveis ambientados no século XIII, mostrando os últimos anos de Altaïr como Mestre Assassino."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Ezio aos 52 e Altaïr aos 82 — Dois Legados
        </h2>
        <p>
          Revelations é único na franquia por ter <strong>dois protagonistas principais</strong>: Ezio no presente do jogo (1511), e Altaïr em flashbacks que revelam os últimos 30 anos de sua vida (1191–1228). Através de selos escondidos por Altaïr na Biblioteca de Masyaf, Ezio — e o jogador — testemunha a vida de Altaïr após AC1:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            ["Sello 1 — 1191","Altaïr retorna de Jerusalém com a Maçã. Al Mualim é revelado como traidor — o próprio líder dos Assassinos tentava usar a Maçã para controle total."],
            ["Sello 2 — 1205","A invasão Mongol ameaça Masyaf. Altaïr usa a Maçã para repelir o exército — mas as consequências são trágicas para sua família."],
            ["Sello 3 — 1247","Altaïr, exilado, retorna para recuperar a liderança dos Assassinos. Sua autoridade foi deturpada por Abbas, seu antigo rival."],
            ["Sello 4 — 1257","Altaïr, ancião, enfrenta a invasão Mongol de Hulagu Khan. Sela a Biblioteca e se tranca dentro, com a Maçã, para que ninguém mais possa abusar de seu poder."],
          ].map(([seal, desc]) => (
            <div key={seal} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
              <span className="text-amber-400 font-bold shrink-0 text-sm w-28">{seal}</span>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          O último flashback — Altaïr com 92 anos, o último da Biblioteca, a Maçã nas mãos, a porta fechando — é um dos momentos mais emotivos de toda a franquia.
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
                ["Constantino","Coração comercial, densamente populado","Grand Bazaar, Mercado das Especiarias"],
                ["Beyazid","Sede do poder otomano e intelectual","Mesquita de Beyazid, Universidade"],
                ["Imperial","Bairro mais rico, aristocrático","Topkapi (palácio), Hagia Sophia"],
                ["Galata","Bairro genovês, porto principal","Torre de Galata, docas comerciais"],
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
          Novas Mecânicas: Gancho e Bombas
        </h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            ["🪝 Gancho-Lâmina","Ezio ganha uma lâmina com gancho que permite escalar superfícies verticais com velocidade e criar tirolesas improvisadas entre telhados. Muda significativamente a mobilidade."],
            ["💣 Craft de Bombas","Sistema de criação de bombas com três componentes: invólucro (efeito), pólvora (alcance) e recheio (tipo de dano). Dezenas de combinações para stealth, fuga e combate."],
            ["🗼 Defesa de Quartéis","Mini-jogo de tower defense quando os Templários tentam retomar quartéis conquistados. Único no gênero para a franquia — missão de estratégia em tempo real."],
            ["🏪 Rede de Assassinos","Expanded: agora Ezio pode abrir lojas e pontos de rota de fuga em toda Constantinopla, além de gerenciar Assassinos recrutados como em Brotherhood."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{t}</h4>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-amber-400" />
          Sofia Sartor — A Companheira de Ezio
        </h2>
        <p>
          Uma das adições mais bem-recebidas de Revelations é <strong>Sofia Sartor</strong> — uma livraria veneziana em Constantinopla que se torna a principal aliada e interesse amoroso de Ezio. Sua relação é desenvolvida com maturidade rara para jogos da época: dois adultos de meia-idade, cada um com sua própria história, construindo algo genuíno.
        </p>
        <p>
          Dublada por <strong>Cas Anvar</strong> (Ezio) e <strong>Elaine Cassidy</strong> (Sofia) em inglês, a dinâmica entre os dois personagens recebe mais atenção narrativa do que qualquer relação romântica anterior da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          O Final da Trilogia e o Adeus de Ezio
        </h2>
        <p>
          Ao abrir a Biblioteca de Altaïr, Ezio não encontra armas ou segredos de combate — encontra apenas o esqueleto de Altaïr em sua cadeira, com a Maçã do Éden. E uma <strong>mensagem gravada de Altaïr para qualquer Assassino que vier depois</strong> — mas especificamente endereçada a Desmond Miles.
        </p>
        <p>
          Juno (Precursora) então fala com Desmond, revelando a localização do Templo dos Precursores em Nova York. Ezio, compreendendo que toda sua vida foi um veículo para entregar essa mensagem, faz seu discurso mais emotivo da trilogia: ele não fala mais com Desmond — fala com o jogador.
        </p>
        <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-4">
          <p className="font-bold text-amber-400 mb-2 text-sm">💬 Citação de Ezio (tradução livre)</p>
          <p className="text-sm text-muted-foreground italic mb-0">"Eu não sei o que espera de você no fim. Mas sei que você não está sozinho. Eu também estava sozinho uma vez. (...) Tome tempo para descobrir o que vale a pena guardar."</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Tempo de Jogo e Legado
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
                ["História Principal","12-15 horas"],
                ["História + Secundárias","20-25 horas"],
                ["100% Completionist","30-40 horas"],
                ["DLC: The Lost Archive","~3 horas (história de Clay Kaczmarek)"],
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
          Revelations recebeu <strong>80/100 no Metacritic</strong> — a nota mais baixa da trilogia, refletindo certa fadiga da fórmula após três jogos consecutivos com Ezio. No entanto, foi amplamente elogiado pela conclusão emocional dos dois protagonistas e pela ambientação de Constantinopla. A DLC <em>The Lost Archive</em> narra a história de Subject 16 (Clay Kaczmarek) em puzzles 3D — conteúdo de lore avançado muito apreciado por fãs.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Jogar em 2026?
        </h2>
        <p><strong>Sim — especialmente como conclusão.</strong> Se você jogou AC2 e Brotherhood, Revelations é essencial para fechar o arco de Ezio e Altaïr. A sensação de ver os dois protagonistas chegando ao fim de suas jornadas é incomparável na franquia.</p>
        <p>Disponível na <strong>AC: The Ezio Collection</strong> com AC2, Brotherhood e Revelations remasterizados — a melhor forma de jogar os três em sequência.</p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual foi a revelação mais marcante para você? 🕌</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="ac-revelations-ezio-constantinopla" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-revelations-ezio-constantinopla" postTitle="Assassin's Creed Revelations — Ezio em Constantinopla" />
    </article>
  );
};

export default ACRevelations;