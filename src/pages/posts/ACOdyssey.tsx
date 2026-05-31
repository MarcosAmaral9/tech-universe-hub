import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Sword, Ship, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle, Sparkles, Users, MapPin, Shield, BookOpen, Crown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import acOdysseyImg from "@/assets/ac-odyssey.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACOdyssey = () => {

  useEffect(() => {
    trackArticleRead("ac-odyssey-odisseia-grecia", "Assassin's Creed Odyssey em 2026: Review Completa — RPG Épico na Grécia Antiga", "geek");
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
          Assassin's Creed Odyssey em 2026 Vale a Pena? Review Completa, Grécia Antiga, Kassandra, PC Ideal e Custo-Benefício
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="04 de Fevereiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acOdysseyImg}
          alt="Assassin's Creed Odyssey - Review completa 2026 Grécia Antiga Kassandra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se existe um jogo que define a grandeza dos <strong>RPGs de mundo aberto</strong> modernos,
          esse jogo é <strong>Assassin's Creed Odyssey</strong>. Transportando o jogador para o auge
          da <strong>Grécia Antiga</strong> em meio à Guerra do Peloponeso, o título oferece um dos
          maiores mapas já criados na franquia, diálogos com escolhas reais de consequência e batalhas
          contra criaturas mitológicas — tudo perfeito para quem tem um <strong>PC gamer</strong> potente.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed Odyssey</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O maior mundo aberto da franquia ainda vale a pena?</strong></li>
          <li>👉 Kassandra ou Alexios: qual escolher e por quê</li>
          <li>👉 Contexto histórico: Guerra do Peloponeso e figuras reais</li>
          <li>👉 Facções, mitologia grega e o Culto de Kosmos</li>
          <li>👉 DLCs, tempo de jogo e requisitos de PC em 2026</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><div className="text-sm text-muted-foreground">Desenvolvedora</div><div className="font-bold">Ubisoft Quebec</div></div>
            <div><div className="text-sm text-muted-foreground">Lançamento</div><div className="font-bold">05/10/2018</div></div>
            <div><div className="text-sm text-muted-foreground">Preço Médio 2026</div><div className="font-bold">R$ 80 a R$ 150</div></div>
            <div><div className="text-sm text-muted-foreground">Duração Média</div><div className="font-bold">80 a 150 horas</div></div>
            <div><div className="text-sm text-muted-foreground">Plataformas</div><div className="font-bold">PC, PS4/5, Xbox</div></div>
            <div><div className="text-sm text-muted-foreground">Protagonistas</div><div className="font-bold">Kassandra / Alexios</div></div>
            <div><div className="text-sm text-muted-foreground">Escolhas</div><div className="font-bold">9 finais diferentes</div></div>
            <div><div className="text-sm text-muted-foreground">Discovery Tour</div><div className="font-bold">Sim (modo educativo)</div></div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Excelente custo-benefício</strong> para quem quer centenas de horas de conteúdo premium.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-blue-400" />
          Review Geral de AC Odyssey: O Melhor AC para Exploração em 2026?
        </h2>

        <p>
          <strong>Sim</strong> — se você valoriza <strong>liberdade, quantidade de conteúdo e escolhas
          narrativas</strong>. <strong>Odyssey</strong> abandonou a linearidade dos primeiros títulos
          em favor de um RPG massivo onde cada conversa pode mudar o destino de reinos inteiros. É o
          AC que mais se aproxima de um The Witcher 3 em escala e profundidade de sistema.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: Odyssey é o AC que mais divide a comunidade — e o que mais recompensa quem investe tempo">
          <p>
            Joguei mais de 200 horas em <strong>Assassin's Creed Odyssey</strong> entre o jogo base
            e os DLCs, e ainda assim sinto que não vi tudo. Isso é uma bênção e uma maldição: a
            escala é intimidante para quem não tem tempo, mas incrivelmente satisfatória para quem
            mergulha fundo.
          </p>
          <p>
            <strong>Kassandra é obrigatória.</strong> A atuação de Melissanthi Mahut é simplesmente
            superior — ela traz humor, gravidade e humanidade que Alexios simplesmente não consegue
            igualar. O DLC <em>Fate of Atlantis</em> é o melhor de toda a trilogia RPG: visitar o
            Elísio e o Hades com a mitologia grega em plena forma é uma das experiências mais únicas
            que os jogos de mundo aberto já produziram.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-blue-400" />
          Kassandra ou Alexios: Qual Escolher?
        </h2>

        <p>
          Pela primeira vez na série, o jogador escolhe o gênero do protagonista. Embora ambos sigam
          a mesma jornada como <strong>Misthios</strong> (mercenário espartano exilado), a experiência
          é muito diferente:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-blue-500/30 border">
            <h4 className="font-bold mb-3 text-blue-400">⚡ Kassandra (Recomendada)</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li>✔ Atuação de voz de Melissanthi Mahut amplamente elogiada</li>
              <li>✔ Entrega humor, sarcasmo e emoção com muito mais nuance</li>
              <li>✔ É a protagonista "canônica" — Alexios é irmão de Kassandra na história oficial</li>
              <li>✔ Considerada uma das melhores protagonistas femininas dos games</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">⚔️ Alexios</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li>✔ Voz de Michael Antonakos com tom mais grave e sério</li>
              <li>✔ Alguns jogadores preferem para um tom mais solene</li>
              <li>✗ Criticado por atuação menos expressiva nos momentos cômicos</li>
              <li>✗ Não é o protagonista canônico da linha do tempo oficial</li>
            </ul>
          </div>
        </div>

        <p>
          Você é um <strong>descendente direto do Rei Leônidas de Esparta</strong>, carregando o
          fragmento de sua lança lendária. Esta relíquia Isu é a fonte dos seus poderes especiais
          — os <strong>Abilidades do Adestia</strong> — que permitem habilidades sobre-humanas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-blue-400" />
          Contexto Histórico: A Guerra do Peloponeso (431–404 a.C.)
        </h2>

        <p>
          O jogo se passa durante a <strong>Guerra do Peloponeso</strong>, o maior conflito da Grécia
          Antiga entre <strong>Atenas</strong> e <strong>Esparta</strong>. Este período (431–404 a.C.)
          foi marcado por batalhas navais épicas, sitiamentos prolongados, traições políticas e a
          ascensão e queda de líderes lendários.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-blue-400">🏛️ Péricles de Atenas</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Estadista, orador e patrono das artes que transformou Atenas em capital cultural do mundo
              antigo. No jogo, é aliado de Kassandra e peça central das intrigas políticas de sua cidade.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-blue-400">🍷 Sócrates</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O pai da filosofia aparece como NPC que questiona cada decisão moral de Kassandra com
              seus famosos diálogos socráticos — um dos encontros mais fascinantes do jogo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-blue-400">💊 Hipócrates</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O pai da medicina aparece em missões secundárias em Kos, desenvolvendo os princípios
              éticos da medicina que ainda influenciam o Juramento de Hipócrates atual.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-blue-400">🎭 Heródoto</h4>
            <p className="text-sm text-muted-foreground mb-0">
              "O pai da história" acompanha Kassandra em suas viagens, documentando seus feitos e
              fornecendo contexto histórico sobre as regiões que você explora.
            </p>
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-blue-400" />
          Geografia: As 28 Regiões da Grécia em AC Odyssey
        </h2>

        <p>
          O mapa de <strong>Odyssey</strong> cobre aproximadamente <strong>256 km²</strong>, tornando-o
          um dos maiores da história dos videogames. Cada região tem arquitetura, clima, fauna e flora
          únicos da época:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="py-3 px-4 text-left font-bold">Região</th>
                <th className="py-3 px-4 text-left font-bold">Características</th>
                <th className="py-3 px-4 text-left font-bold">Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ática (Atenas)</td>
                <td className="py-3 px-4 text-muted-foreground">Capital intelectual, Acrópolis deslumbrante</td>
                <td className="py-3 px-4 text-muted-foreground">Parthenon, Ágora, Pirâmide de Atenas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Lacônia (Esparta)</td>
                <td className="py-3 px-4 text-muted-foreground">Cidade militar, treinamento físico brutal</td>
                <td className="py-3 px-4 text-muted-foreground">Arena espartana, templo de Ártemis</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Creta</td>
                <td className="py-3 px-4 text-muted-foreground">Ilha mítica com labirinto do Minotauro</td>
                <td className="py-3 px-4 text-muted-foreground">Palácio de Knossos, Labirinto de Dedâlo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Naxos / Paros</td>
                <td className="py-3 px-4 text-muted-foreground">Ilhas em guerra constante, cenário político intenso</td>
                <td className="py-3 px-4 text-muted-foreground">Batalhas de conquista de ilha</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Macedônia</td>
                <td className="py-3 px-4 text-muted-foreground">Norte selvagem, florestas densas, cavalaria</td>
                <td className="py-3 px-4 text-muted-foreground">Conexão com a trama do jovem Alexandre</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-blue-400" />
          Facções e Forças em Conflito em AC Odyssey
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Facção</th>
                <th className="text-left py-3 px-4 font-bold">Líder / Base</th>
                <th className="text-left py-3 px-4 font-bold">Filosofia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Liga de Delos (Atenas)</td>
                <td className="py-3 px-4 text-muted-foreground">Péricles / Atenas</td>
                <td className="py-3 px-4 text-muted-foreground">Democracia, artes, filosofia, comércio marítimo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Liga do Peloponeso (Esparta)</td>
                <td className="py-3 px-4 text-muted-foreground">Rei Pausânias / Esparta</td>
                <td className="py-3 px-4 text-muted-foreground">Disciplina militar absoluta, obediência ao estado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Culto de Kosmos</td>
                <td className="py-3 px-4 text-muted-foreground">Deimos / Secreto</td>
                <td className="py-3 px-4 text-muted-foreground">Controle total através do caos — proto-Templários</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Mercenários (Misthios)</td>
                <td className="py-3 px-4 text-muted-foreground">Sem lealdade fixa</td>
                <td className="py-3 px-4 text-muted-foreground">Dracmas e sobrevivência — sistema de ranking único</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">🔺 O Culto de Kosmos: 42 Membros para Eliminar</h3>
        <p>
          O <strong>Culto de Kosmos</strong> é o arco principal de Odyssey. São <strong>42 membros
          secretos</strong> espalhados por toda a Grécia, cada um usando máscara e codinome animal.
          Para identificá-los, você coleta pistas em diferentes missões e regiões. Eliminar todos
          resulta em um dos melhores finais do jogo — e leva dezenas de horas para completar.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-blue-400" />
          Navegação Naval e Batalhas no Mar Egeu
        </h2>

        <p>
          O navio <strong>Adrestia</strong> é sua base móvel e arma naval. Herdando o espírito de
          Black Flag e Rogue, as batalhas no Mar Egeu são espetaculares:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Personalização do Adrestia</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Melhore casco, remos, catapultas e velas. Recrute tenentes únicos com habilidades
              especiais que ativam durante batalhas navais, como cura em área ou chuva de flechas.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema de Mercenários</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Inspirado no sistema Nemesis de Shadow of Mordor. Caçadores de recompensa com nomes,
              histórias e equipamentos únicos perseguem você com base em suas ações pelo mundo.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-blue-400" />
          Sistema de Combate e Habilidades em AC Odyssey
        </h2>

        <p>
          O combate de <strong>Odyssey</strong> é <strong>totalmente baseado em RPG</strong>, com
          três árvores de habilidades e dezenas de abilities ativas e passivas:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">⚔️</span>
            <span><strong>Guerreiro:</strong> Combate corpo a corpo brutal. O icônico{" "}
            <strong>Chute Espartano</strong> envia inimigos voando de penhascos — uma das mecânicas
            mais satisfatórias da franquia. Também inclui golpes de área e ataques de avanço.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🏹</span>
            <span><strong>Caçador:</strong> Especialização em arco, tiros guiados, chuva de flechas
            e dano crítico. Builds de arqueiro podem eliminar inimigos antes mesmo de serem detectados.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🗡️</span>
            <span><strong>Assassino:</strong> Furtividade total, assassinatos críticos devastadores,
            desaparecimento em combate e dardos envenenados. O estilo que mais lembra o AC clássico.</span>
          </li>
        </ul>

        <p>
          O equipamento possui <strong>5 raridades</strong> (comum, incomum, raro, épico, lendário)
          e pode ser <strong>gravado com bônus permanentes</strong> no ferreiro. Builds híbridas que
          combinam os três estilos são perfeitamente viáveis.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-blue-400" />
          Criaturas Mitológicas: Os Chefes Mais Memoráveis
        </h2>

        <p>
          Um dos grandes destaques de <strong>AC Odyssey</strong> são as batalhas contra
          criaturas diretamente saídas da mitologia grega:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🐍 Medusa</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A górgona de cabelos de serpente e olhar petrificante. Combate épico em seu templo
              em Lesbos — uma das batalhas mais visualmente impressionantes do jogo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🐂 Minotauro</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O monstro do labirinto de Creta. Um combate claustrofóbico e brutalmente difícil
              dentro de um labirinto que você deve explorar antes de enfrentá-lo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🦁 Esfinge</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O guardião enigmático que desafia você com enigmas filosóficos ao invés de combate.
              Uma pausa inteligente no ritmo de ação do jogo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🐗 Ciclope</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Gigantes de um olho só espalhados pelas ilhas. Cada um tem fraquezas específicas
              que exigem abordagens táticas diferentes.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-blue-400" />
          Sistema de Escolhas: 9 Finais Diferentes
        </h2>

        <p>
          Em <strong>Odyssey</strong>, suas decisões importam. O destino da sua família, o destino
          de cidades inteiras e quem vive ou morre depende dos diálogos. São{" "}
          <strong>9 finais diferentes</strong> dependendo das escolhas ao longo da jornada —
          um fator replay altíssimo que incentiva múltiplas campanhas.
        </p>

        <p>
          As escolhas afetam diretamente: o destino de Myrrine (mãe de Kassandra), a relação com
          Deimos (irmão), o destino da família Ionos e o estado final da Grécia após a guerra.
          Nenhum final é "perfeito" — todos têm custos emocionais reais.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Quer saber de onde veio a lâmina oculta e os Ocultos antes de Kassandra? Veja nossa
            análise de{" "}
            <Link to="/post/ac-origins-renascimento-franquia-egito" className="text-primary hover:underline">
              Assassin's Creed Origins
            </Link>{" "}
            e descubra como Bayek fundou a Irmandade.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-blue-400" />
          DLCs de AC Odyssey: Fate of Atlantis é Obrigatório
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">DLC</th>
                <th className="text-left py-3 px-4 font-bold">Conteúdo</th>
                <th className="text-left py-3 px-4 font-bold">Duração</th>
                <th className="text-left py-3 px-4 font-bold">Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Legacy of the First Blade</td>
                <td className="py-3 px-4 text-muted-foreground">Origem da Lâmina Oculta; encontro com Darius (primeiro usuário da lâmina)</td>
                <td className="py-3 px-4 text-muted-foreground">~15 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Conexão direta com as origens dos Assassinos</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">The Fate of Atlantis</td>
                <td className="py-3 px-4 text-muted-foreground">Visite o Elísio (paraíso grego), o Hades (submundo) e a própria Atlântida</td>
                <td className="py-3 px-4 text-muted-foreground">~25 horas</td>
                <td className="py-3 px-4 text-muted-foreground">O melhor DLC da trilogia RPG — mitologia pura</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Discovery Tour: Ancient Greece</td>
                <td className="py-3 px-4 text-muted-foreground">Modo educacional sem combate, com tours guiados por historiadores</td>
                <td className="py-3 px-4 text-muted-foreground">~5 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Gratuito para quem tem o jogo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clock className="h-7 w-7 text-blue-400" />
          Tempo de Jogo de AC Odyssey: Quanto Tempo para Zerar?
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="py-3 px-4 text-left font-bold">Estilo de Jogo</th>
                <th className="py-3 px-4 text-left font-bold">Tempo Estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🎯 História Principal</td>
                <td className="py-3 px-4 text-muted-foreground">40–50 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">📋 História + Secundárias</td>
                <td className="py-3 px-4 text-muted-foreground">80–100 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🏆 100% Completude</td>
                <td className="py-3 px-4 text-muted-foreground">150–200 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">+ DLCs (ambos)</td>
                <td className="py-3 px-4 text-muted-foreground">+40 horas adicionais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-blue-400" />
          Requisitos de PC para AC Odyssey em 2026
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6300 ou Intel Core i5-2400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 660 (2 GB) ou Radeon R9 285</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">46 GB (SSD recomendado)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1080p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Intel Core i7-7700 ou Ryzen 7 1700X</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 1080 (8 GB) ou RX Vega 64</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 Para <strong>4K / 60 FPS</strong> você precisará de uma RTX 3080 / RX 6800 XT ou superior.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-blue-400" />
          Notebook Gamer Roda AC Odyssey?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>RTX 3050 / 3060 ou superior</li>
          <li>Intel Core i7 ou Ryzen 7</li>
          <li>16 GB de RAM</li>
        </ul>
        <p className="text-destructive">
          ⚠️ <strong>Odyssey é exigente — evite configurações de entrada ou notebooks sem GPU dedicada.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Gráficos superiores em 4K</li>
              <li>✔ Promoções frequentes na Steam e Epic</li>
              <li>✔ 60+ FPS com hardware adequado</li>
              <li>✔ Mods de texturas 4K disponíveis</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ 60 FPS estável no PS5 e Series X</li>
              <li>✔ Otimização garantida e estável</li>
              <li>✔ Disponível no PlayStation Plus</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-blue-400" />
          Vale a Pena Comprar Assassin's Creed Odyssey em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Ama RPGs longos com +100 horas de conteúdo de qualidade</li>
          <li>Se interessa por mitologia grega e filosofia antiga</li>
          <li>Quer explorar um mundo aberto gigantesco com liberdade real</li>
          <li>Gosta de sistemas de escolhas com consequências narrativas reais</li>
          <li>Quer aproveitar o DLC Fate of Atlantis — o melhor da trilogia RPG</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/20 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC Odyssey?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio em 2026: R$ 80 a R$ 150 (frequentemente em promoção; edição completa com DLCs: R$ 120–200)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Kassandra ou Alexios? Qual protagonista você prefere?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed Odyssey — página oficial Ubisoft Store",
            url: "https://store.ubisoft.com/br/assassin-s-creed-odyssey/5af240d05cdf9a0cf0d3fb0a.html",
            publisher: "Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Odyssey — Steam Store (requisitos e avaliações)",
            url: "https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Odyssey — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-odyssey",
            publisher: "HowLongToBeat",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Peloponnesian War — Britannica",
            url: "https://www.britannica.com/event/Peloponnesian-War",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Socrates — Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/socrates/",
            publisher: "Stanford University",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Odyssey — PC Gaming Wiki (requisitos e otimizações)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed:_Odyssey",
            publisher: "PCGamingWiki",
            accessedAt: "Fevereiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-odyssey-odisseia-grecia" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-odyssey-odisseia-grecia" postTitle="Assassin's Creed Odyssey em 2026: Review Completa — RPG Épico na Grécia Antiga" />
    </article>
  );
};

export default ACOdyssey;
