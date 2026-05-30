import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BookOpen, MapPin, Shield, Swords, Target, Cpu, DollarSign, Crown, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ac2Img from "@/assets/ac-2-ezio.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AC2Ezio = () => {
  useEffect(() => {
    trackArticleRead("ac-2-ezio-italia-renascentista", "Assassin's Creed II em 2026: Review Completa — Ezio Auditore e a Itália Renascentista", "geek");
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
          Assassin's Creed II em 2026 Vale a Pena? Review Completa — Ezio Auditore e a Itália Renascentista
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />20 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="21 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={ac2Img}
          alt="Assassin's Creed II — Ezio Auditore na Itália Renascentista, Florença ao fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em novembro de 2009, <strong>Assassin's Creed II</strong> é considerado por fãs
          e críticos um dos melhores jogos já feitos. <strong>Ezio Auditore da Firenze</strong> —
          jovem florentino que se torna Assassino após a execução de sua família pelos Pazzi e
          Rodrigo Borgia — é o protagonista mais amado de toda a franquia. A Itália Renascentista
          recriada com fidelidade histórica impressionante foi um salto colossal em relação ao AC1
          e permanece deslumbrante mesmo em 2026.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed II</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>AC II ainda vale a pena em 2026?</strong></li>
          <li>👉 Contexto histórico: a Itália Renascentista e a Conspiração dos Pazzi</li>
          <li>👉 Ezio Auditore — origem, evolução e personagens históricos aliados</li>
          <li>👉 Cidades, mecânicas novas e os Glifos de Subject 16</li>
          <li>👉 DLCs, Ezio Collection e custo-benefício</li>
        </ul>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4">🎮 Informações Rápidas para Decisão de Compra</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              ["Desenvolvedora","Ubisoft Montreal"],["Lançamento","17/11/2009"],
              ["Nota Metacritic","89–91/100"],["Vendas","9+ milhões de cópias"],
            ].map(([k,v]) => (
              <div key={k}><div className="text-muted-foreground">{k}</div><div className="font-bold">{v}</div></div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground text-sm mb-0">
            👉 Considerado o melhor da franquia por muitos fãs. Disponível via{" "}
            <strong>AC: The Ezio Collection</strong> no PS4/PS5, Xbox e PC com gráficos remasterizados.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: AC II Ainda É o Melhor da Franquia em 2026?
        </h2>

        <p>
          Para uma parcela muito significativa dos fãs, <strong>sim</strong>. Após mais de 15 anos,
          <strong> Assassin's Creed II</strong> ainda impressiona pela variedade, pelo personagem
          principal, pela ambientação e pela narrativa. Não é tecnicamente o mais avançado, mas
          é o jogo que melhor equilibra todos os elementos que fazem uma experiência inesquecível.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: AC II é o jogo que fez a franquia ser o que é hoje">
          <p>
            Joguei <strong>Assassin's Creed II</strong> em 2009 e ele ainda está na minha lista
            pessoal dos 10 melhores jogos de todos os tempos. Ezio começa como um garoto rico
            e irresponsável — você passa os primeiros 30 minutos ajudando ele a marcar encontros
            com garotas — e termina como o Assassino mais sábio da história da franquia. Essa
            jornada de crescimento tem poucos rivais nos games.
          </p>
          <p>
            A cena do enforcamento da família Auditore ainda é brutal para assistir. A Ubisoft
            tomou um risco ao não deixar o jogador salvar a família — você só observa impotente.
            Essa escolha de design transforma a vingança de Ezio em algo visceral e pessoal de
            um jeito que poucos jogos conseguem. E depois, quando a <em>Ezio's Family</em> de
            Jesper Kyd toca enquanto você escapa de Florença com a mãe e a irmã... é cinema.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: Itália Renascentista (1476–1499)
        </h2>

        <p>
          O jogo se passa durante o <strong>Renascimento Italiano</strong> — um dos períodos mais
          efervescentes da história humana. Florença, Veneza e Roma eram epicentros de arte,
          política, religião e conspiração. A Itália do século XV não era um país unificado, mas
          uma coleção de cidades-estado rivais — cada uma com sua própria oligarquia, exército
          e agenda de poder.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            ["🌸 Florença dos Médici","Os Médici eram a família mais poderosa de Florença — banqueiros que financiavam papas, reis e artistas. Lorenzo de' Medici ('O Magnífico') é personagem real no jogo, amigo de Ezio e testemunha da Conspiração dos Pazzi."],
            ["🎨 Arte e Arquitetura","Leonardo da Vinci aparece como personagem aliado, decodificando os Codex Pages de Altaïr e criando gadgets para Ezio — incluindo asas voadoras e um canhão. Obras como a Catedral de Santa Maria del Fiore foram recriadas com fidelidade arqueológica."],
            ["⚔️ Conspiração dos Pazzi (1478)","O jogo retrata o evento histórico real: os Pazzi, apoiados pelo Papa Sisto IV, tentaram assassinar Lorenzo e Giuliano de' Medici na Catedral durante a missa de domingo. Giuliano morreu; Lorenzo sobreviveu. O AC2 começa logo após esse evento."],
            ["⛪ Os Bórgias e o Vaticano","Rodrigo Borgia — futuro Papa Alexandre VI — é o vilão central. Os Bórgias eram famosos por simonia, nepotismo e envenenamento de rivais políticos. Rodrigo realmente se tornou papa em 1492, exatamente como no jogo."],
          ].map(([title, desc]) => (
            <div key={title} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Ezio Auditore da Firenze — O Protagonista Mais Amado da Franquia
        </h2>

        <p>
          <strong>Ezio Auditore</strong> começa o jogo como um jovem nobre florentino de 17 anos —
          sedutor, brincalhão e despreocupado. Quando seu pai Giovanni e seus irmãos Federico e
          Petruccio são enforcados em praça pública por acusações falsas, Ezio é forçado a fugir
          com sua mãe Maria e irmã Claudia.
        </p>

        <p>
          Em Villa Auditore, seu tio Mario o treina como Assassino. Ezio não escolhe essa vida —
          ela é imposta a ele pela tragédia. Sua motivação inicial é <strong>vingança</strong>,
          mas ao longo dos 23 anos de jogo (1476–1499) ela evolui para algo maior: a busca pela
          verdade sobre a guerra entre Assassinos e Templários e o legado de Altaïr.
        </p>

        <AdInArticle />

        <div className="not-prose bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-4">
          <p className="font-bold text-amber-400 mb-2 text-sm">🎭 Personagens Históricos no Jogo</p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              ["Leonardo da Vinci","Aliado de Ezio. Decifra Codex Pages e cria armas únicas."],
              ["Lorenzo de' Medici","O Magnífico. Líder de Florença, aliado e amigo de Giovanni."],
              ["Rodrigo Borgia","Vilão principal. Futuro Papa Alexandre VI (personagem histórico real)."],
              ["Nicolau Maquiavel","Aparece brevemente como observador da ascensão de Ezio."],
            ].map(([n,d]) => (
              <div key={n} className="bg-muted/50 rounded-lg p-2">
                <span className="font-bold">{n}</span>
                <span className="text-muted-foreground"> — {d}</span>
              </div>
            ))}
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          As Cidades: Florença, Veneza e Muito Mais
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Localidade</TableHead><TableHead>Período</TableHead><TableHead>Destaques</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Florença","1476–1478","Catedral Santa Maria del Fiore, Palazzo della Signoria, Ponte Vecchio"],
                ["Monteriggioni","Base permanente","Villa Auditore — hub do jogo; melhorada para gerar renda"],
                ["San Gimignano","1478","Cidade de torres medievais; primeiro grande assassinato do jogo"],
                ["Veneza","1481–1486","Gran Canal, Palácio Ducal, pontes; mais parkour vertical e naval"],
                ["Forli","1488","Missões DLC — região costeira, Catarina Sforza"],
                ["Roma (epílogo)","1499","Palácio do Vaticano; confronto final com Rodrigo e a Maçã do Éden"],
              ].map(([c,p,d]) => (
                <TableRow key={c}>
                  <TableCell className="font-medium">{c}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p}</TableCell>
                  <TableCell className="text-sm">{d}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-amber-400" />
          Melhorias em Relação ao AC1: O que Mudou
        </h2>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-4">
          {[
            ["💰 Sistema Econômico","Ezio pode comprar armas, armaduras e melhorar a Villa Auditore para gerar renda passiva. AC1 não tinha economia — você só recuperava itens de inimigos caídos."],
            ["🗡️ Arsenal Expandido","Duas lâminas ocultas, pistola oculta (criada por Leonardo), espadas variadas, armaduras completas e poison blade. AC1 tinha apenas espada e lâmina oculta."],
            ["📜 Codex Pages","Páginas escritas por Altaïr escondidas pelo mundo. Quando reunidas e decifradas por Leonardo, revelam a localização do Cofre do Éden em Roma — conectando as histórias dos dois protagonistas."],
            ["🏰 Villa Auditore","A base de operações — uma villa que pode ser melhorada, tem galeria de arte (com pinturas reais), loja de armas e gera moedas passivamente conforme você investe nela."],
            ["🎭 Missões Variadas","Contratados, ladrões e cortesãs como aliados, missões de corrida, puzzles de tumbas, coleta de glifos com puzzles históricos — variedade muito maior do que AC1."],
            ["🦅 Eagle Vision Melhorada","Pode ser usada enquanto se move (não apenas parado) e revela mais tipos de informação — incluindo inimigos atrás de paredes e interações especiais no ambiente."],
          ].map(([t,d]) => (
            <div key={t} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{t}</h4>
              <p className="text-sm text-muted-foreground mb-0">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Os Glifos e o Segredo dos Precursores
        </h2>

        <p>
          Escondidos em monumentos históricos pelo mundo estão <strong>20 Glifos</strong> deixados
          por Subject 16 — um usuário anterior do Animus. Cada Glifo contém um puzzle histórico
          que revela a história dos <strong>Precursores (Isu)</strong>: a civilização que criou a
          humanidade como escravos e escondeu as Peças do Éden.
        </p>

        <p>
          Ao coletar todos os 20 Glifos, Desmond assiste à "Verdade" — um vídeo mostrando Adão e
          Eva roubando uma Maçã do Éden de seus criadores. No final do jogo, Ezio abre o Cofre do
          Éden no Vaticano e encontra <strong>Minerva</strong> (uma Precursora) que fala diretamente
          com <em>Desmond</em> — não com Ezio. A revelação de que toda a saga de Ezio é um "relay
          station" para uma mensagem destinada a Desmond no século XXI é um dos momentos mais
          memoráveis da narrativa de games.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          Tempo de Jogo e DLCs de AC II
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modo</TableHead><TableHead>Duração</TableHead><TableHead>Detalhes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["História Principal","15–18h","14 sequências de memória narrativa"],
                ["História + Secundárias","25–30h","Contratos, corridas, desafios de parkour"],
                ["100% Completionist","35–45h","Todos os glifos, tumbas, penas e coletáveis"],
                ["DLC: Battle of Forlì","~3h","Sequências 12 e 13 originalmente cortadas"],
                ["DLC: Bonfire of the Vanities","~3h","Florença 1497 — Savonarola e as fogueiras"],
              ].map(([m,d,det]) => (
                <TableRow key={m}>
                  <TableCell className="font-medium">{m}</TableCell>
                  <TableCell className="text-green-400 font-bold">{d}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{det}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Legado e Impacto de AC II
        </h2>

        <p>
          <strong>AC II</strong> vendeu mais de <strong>9 milhões de cópias</strong> em seu
          primeiro mês e ficou entre os jogos mais vendidos de 2009. No Metacritic, recebeu
          <strong> 91/100 no PS3</strong>. A trilha sonora composta por{" "}
          <strong>Jesper Kyd</strong> — especialmente <em>Ezio's Family</em> — tornou-se um
          dos temas mais reconhecidos dos games e continua sendo tocada em concertos ao redor
          do mundo mais de 15 anos depois do lançamento.
        </p>

        <div className="my-8 p-5 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Quer continuar a jornada de Ezio? Leia nossas reviews de{" "}
            <Link to="/post/ac-brotherhood-ezio-roma-borgia" className="text-primary hover:underline">
              AC Brotherhood
            </Link>{" "}
            e{" "}
            <Link to="/post/ac-revelations-ezio-constantinopla" className="text-primary hover:underline">
              AC Revelations
            </Link>{" "}
            — os capítulos finais da trilogia Ezio.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Jogar Assassin's Creed II em 2026?
        </h2>

        <p>
          <strong>Absolutamente sim.</strong> AC II envelheceu muito bem. A narrativa, os
          personagens, a recriação histórica e a variedade de atividades ainda se sustentam
          plenamente em 2026. É jogável via <strong>AC: The Ezio Collection</strong> no
          PS4/PS5, Xbox One/Series e PC — remasterização com gráficos melhorados e as duas
          DLCs incluídas.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC II?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>✓ <strong>PC:</strong> Steam e Ubisoft Connect (via AC: The Ezio Collection)</li>
            <li>✓ <strong>PlayStation 4 / PlayStation 5</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Xbox One / Xbox Series X|S</strong> (AC: The Ezio Collection)</li>
            <li>✓ <strong>Nintendo Switch</strong> (AC: The Ezio Collection)</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground mb-0">
            A <strong>AC: The Ezio Collection</strong> inclui AC2, Brotherhood e Revelations
            remasterizados — a melhor forma de jogar os três em sequência.
          </p>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Ezio é o seu Assassino favorito? 🦅</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed: The Ezio Collection — Steam Store",
            url: "https://store.steampowered.com/app/703550/Assassins_Creed_The_Ezio_Collection/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed II — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-ii",
            publisher: "HowLongToBeat",
            accessedAt: "Março 2026",
          },
          {
            title: "Italian Renaissance — Britannica",
            url: "https://www.britannica.com/event/Italian-Renaissance",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Pazzi Conspiracy — Britannica",
            url: "https://www.britannica.com/event/Pazzi-Conspiracy",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Lorenzo de' Medici — Britannica",
            url: "https://www.britannica.com/biography/Lorenzo-de-Medici",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Março 2026",
          },
          {
            title: "Assassin's Creed II — PCGamingWiki (requisitos e otimizações)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed_II",
            publisher: "PCGamingWiki",
            accessedAt: "Março 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-2-ezio-italia-renascentista" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-2-ezio-italia-renascentista" postTitle="Assassin's Creed II em 2026: Review Completa — Ezio Auditore e a Itália Renascentista" />
    </article>
  );
};

export default AC2Ezio;
