import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Moon, Target, Cpu, DollarSign, Laptop, Gamepad2, HelpCircle, Wind, Bomb, BookOpen, MapPin, Shield, Swords, Users, Zap, Crown } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acMirageImg from "@/assets/ac-mirage.jpg";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ACMirage = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Mirage vale a pena em 2026? Review completa do retorno às raízes em Bagdá do século IX, com furtividade clássica, facções, contexto histórico, parkour, ferramentas do assassino, DLCs, requisitos de PC gamer e custo-benefício. */}
      
      {/* Back Button */}
      <Link
        to="/geek/assassins-creed"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Assassin's Creed
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Assassin's Creed
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Mirage em 2026 Vale a Pena? Review Completa, Furtividade Clássica, Bagdá, PC Ideal e Custo-Benefício
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            25 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acMirageImg}
          alt="Assassin's Creed Mirage - Review 2026 furtividade Bagdá PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos explorando mapas colossais na Grécia e Inglaterra, a Ubisoft decidiu atender ao clamor dos 
          fãs clássicos. <strong>Assassin's Creed Mirage</strong> é uma carta de amor ao primeiro jogo da franquia, 
          trocando o combate em campo aberto pela <strong>furtividade nas sombras</strong> e o <strong>parkour 
          frenético</strong> nas ruas de <strong>Bagdá do século IX</strong>. Se você é fã de stealth games 
          e quer experimentar a Era de Ouro do Islã em um <strong>PC gamer</strong>, esta review é para você.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Contexto Histórico:</strong> A Era de Ouro do Islã e Bagdá no século IX</li>
          <li>👉 <strong>Mundo e Geografia:</strong> Os 4 distritos de Bagdá e a região de Alamut</li>
          <li>👉 <strong>Facções e Personagens:</strong> Os Ocultos, a Ordem dos Anciãos e o Califado Abássida</li>
          <li>👉 <strong>Combate e Mecânicas:</strong> Ferramentas do assassino, parkour e social stealth</li>
          <li>👉 <strong>Tempo de Jogo e DLCs:</strong> Quanto tempo para zerar e conteúdo extra</li>
          <li>👉 <strong>Requisitos de PC e Custo-benefício em 2026</strong></li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Bordeaux</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">05/10/2023</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 150 a R$ 200</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Plataformas</div>
              <div className="font-bold">PC, PS4/5, Xbox, iOS</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Perfeito para iniciantes</strong> ou quem sente falta da furtividade clássica. Também disponível no iPhone 15 Pro e iPad.
          </p>
        </div>

        {/* ==================== CONTEXTO HISTÓRICO ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-amber-400" />
          Contexto Histórico: A Era de Ouro do Islã (Século VIII-XIII)
        </h2>

        <p>
          Mirage se passa em <strong>861 d.C.</strong>, durante o auge do <strong>Califado Abássida</strong>, 
          um dos períodos mais fascinantes da história humana. Enquanto a Europa atravessava a chamada 
          "Idade das Trevas", o mundo islâmico vivia sua <strong>Era de Ouro</strong> — um período de 
          avanços extraordinários em ciência, matemática, medicina, astronomia e filosofia.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">📜 O Que Estava Acontecendo em 861 d.C.?</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🏛️ Califado Abássida</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O Califado Abássida governava um território que se estendia do Norte da África até a Ásia Central. 
              Bagdá era a capital e maior cidade do mundo, com mais de <strong>1 milhão de habitantes</strong> — 
              superando Constantinopla e qualquer cidade europeia da época.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">📚 Casa da Sabedoria (Bayt al-Hikma)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A maior biblioteca do mundo antigo. Eruditos de todas as religiões traduziam obras gregas, 
              persas e indianas. O álgebra, o algoritmo e o sistema numérico que usamos hoje nasceram aqui. 
              A palavra "álgebra" vem do matemático <strong>al-Khwarizmi</strong>.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">⚔️ Anarquia em Samarra</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O jogo se passa durante a <strong>"Anarquia em Samarra"</strong> (861-870), quando guardas turcos 
              assassinaram o califa Al-Mutawakkil e mergulharam o império em caos político. Generais militares 
              controlavam os califas como marionetes.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🔬 Ciência e Medicina</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Médicos islâmicos realizavam cirurgias complexas séculos antes da Europa. Astrônomos mapeavam 
              as estrelas com precisão extraordinária. A óptica, a farmacologia e a química modernas têm 
              raízes diretas neste período.
            </p>
          </div>
        </div>

        <div className="my-8 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Curiosidade Histórica:</strong> A palavra "algoritmo" vem do nome do matemático persa 
            <strong> al-Khwarizmi</strong>, que trabalhou na Casa da Sabedoria de Bagdá. Sem ele, não existiriam 
            computadores, inteligência artificial ou programação moderna.
          </p>
        </div>

        {/* ==================== GEOGRAFIA ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-amber-400" />
          Geografia: Explorando Bagdá e Seus Arredores
        </h2>

        <p>
          A Bagdá de Mirage é dividida em <strong>4 grandes distritos</strong>, cada um com identidade visual, 
          social e econômica única. Além da cidade, o jogador explora a <strong>região rural de Wilderness</strong> 
          e a lendária <strong>Fortaleza de Alamut</strong>, berço dos Assassinos históricos.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🏙️ Os Distritos de Bagdá</h3>

        <div className="overflow-x-auto my-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Distrito</TableHead>
                <TableHead>Características</TableHead>
                <TableHead>Locais Notáveis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Karkh</TableCell>
                <TableCell>Bairro comercial e populoso. Mercados vibrantes, artesãos e multidões perfeitas para social stealth.</TableCell>
                <TableCell>Grande Bazar, Porto Fluvial, Oficinas de Artesãos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Harbiyah</TableCell>
                <TableCell>Distrito militar e aristocrático. Guardas pesados, patrulhas frequentes e mansões fortificadas.</TableCell>
                <TableCell>Quartel da Guarda, Palacetes Nobres, Jardins Murados</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Abbasiyah</TableCell>
                <TableCell>Centro intelectual e religioso. Mesquitas, madrassas e a famosa Casa da Sabedoria.</TableCell>
                <TableCell>Casa da Sabedoria, Grande Mesquita, Observatório Astronômico</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cidade Redonda (Round City)</TableCell>
                <TableCell>O coração político de Bagdá. Muralhas concêntricas protegem o palácio do Califa. Acesso restrito.</TableCell>
                <TableCell>Palácio do Califa, Portões Monumentais, Praça Central</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🏔️ Regiões Fora de Bagdá</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏜️ Wilderness (Região Rural)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O deserto e as aldeias ao redor de Bagdá. Caravanas, acampamentos beduínos, ruínas antigas 
              e oásis. Área mais aberta para exploração a cavalo, com missões de investigação e caça a 
              tesouros escondidos.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏰 Fortaleza de Alamut</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A lendária fortaleza dos <strong>Hashashins</strong> (Assassinos históricos), localizada nas 
              montanhas do Irã. No jogo, é a sede dos Ocultos e onde Basim completa seu treinamento. 
              Um dos cenários mais icônicos da franquia.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🏛️ Marcos Históricos Exploráveis</h3>

        <ul className="space-y-2 my-6">
          <li><strong>Grande Mesquita de Bagdá:</strong> Inspirada na Mesquita de Al-Mansur, com minaretes escaláveis e interiores detalhados.</li>
          <li><strong>Casa da Sabedoria:</strong> A biblioteca mais importante do mundo medieval, recriada com estantes de manuscritos e instrumentos científicos.</li>
          <li><strong>Cidade Redonda:</strong> A estrutura circular única de Bagdá, com muralhas concêntricas que protegem o palácio califal.</li>
          <li><strong>Porto do Rio Tigre:</strong> O rio que corta Bagdá e serve como rota de comércio e fuga para Basim.</li>
          <li><strong>Banhos Públicos (Hammam):</strong> Locais de encontro social que podem ser usados para espionagem e assassinatos.</li>
        </ul>

        {/* ==================== REVIEW ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: Mirage Entrega o Prometido?
        </h2>

        <p>
          <strong>Sim</strong> — para quem esperava um jogo focado em <strong>furtividade e assassinatos 
          planejados</strong>. Mirage abandona a estrutura RPG de Valhalla em favor de uma experiência mais 
          linear, curta e focada. Não há níveis de equipamento, não há "loot" infinito, não há 
          diálogos com escolhas múltiplas. É um jogo de <strong>ação-aventura stealth puro</strong>.
        </p>

        <p>
          Acompanhamos a origem de <strong>Basim Ibn Ishaq</strong> (personagem de Valhalla). O jogo foca na 
          sua evolução de ladrão de rua para membro dos <strong>Ocultos</strong> (predecessores dos Assassinos). 
          A narrativa lembra muito a jornada de Altaïr, o protagonista original, e o tom é mais sério e 
          intimista do que os jogos RPG recentes.
        </p>

        <p>
          Se você é fã do AC original de 2007 ou de{" "}
          <Link to="/post/ac-unity-jogo-frente-tempo-paris" className="text-primary hover:underline">
            AC Unity
          </Link>, Mirage vai se sentir como um reencontro com o que fez a franquia ser amada.
        </p>

        {/* ==================== FACÇÕES ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-amber-400" />
          Facções e Forças em Conflito
        </h2>

        <p>
          A Bagdá do século IX é um caldeirão de intrigas políticas, religiosas e militares. Basim 
          navega entre facções poderosas enquanto descobre seu verdadeiro papel na guerra eterna 
          entre liberdade e controle.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 bg-gradient-to-r from-blue-500/10 to-background rounded-xl border border-blue-500/30">
            <h4 className="font-bold mb-2 text-blue-400">🦅 Os Ocultos (The Hidden Ones)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Predecessores da Irmandade dos Assassinos, fundados por <strong>Bayek de Siwa</strong> no Egito 
              (como visto em{" "}
              <Link to="/post/ac-origins-renascimento-franquia-egito" className="text-primary hover:underline">
                AC Origins
              </Link>). Em Bagdá, operam nas sombras liderados pelo <strong>Mestre Roshan</strong>, mentora 
              rigorosa de Basim. Seguem o Credo e utilizam a Fortaleza de Alamut como base principal.
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-r from-red-500/10 to-background rounded-xl border border-red-500/30">
            <h4 className="font-bold mb-2 text-red-400">🔺 A Ordem dos Anciãos (Order of the Ancients)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Predecessores dos Templários. Em Bagdá, infiltraram-se nos mais altos escalões do poder — 
              militares, comerciantes, eruditos e religiosos. Cada membro usa um codinome e máscara. Basim 
              deve investigar, identificar e eliminar cada um deles em missões de assassinato no estilo "Black Box".
            </p>
          </div>
          
          <div className="p-5 bg-gradient-to-r from-yellow-500/10 to-background rounded-xl border border-yellow-500/30">
            <h4 className="font-bold mb-2 text-yellow-400">👑 O Califado Abássida</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O poder oficial de Bagdá, mas em declínio. Os califas são controlados por generais turcos 
              que usam o trono como marionete. A Guarda Califal patrulha as ruas e representa o braço 
              armado da lei — são os principais inimigos no gameplay, com diferentes tipos e níveis de 
              alerta.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-green-500/10 to-background rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">🗡️ Os Ladrões de Bagdá</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A guilda de ladrões onde Basim cresceu antes de se juntar aos Ocultos. Liderada por 
              <strong> Nehal</strong>, amiga de infância de Basim, os ladrões conhecem cada beco e 
              passagem secreta da cidade. Servem como aliados e fonte de informações durante o jogo.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🎭 Personagens Principais</h3>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🗡️</span>
            <span><strong>Basim Ibn Ishaq:</strong> Protagonista. Um ladrão de rua que se torna um 
            dos Ocultos mais habilidosos. Atormentado por visões misteriosas de um djinn (espírito), 
            sua jornada é tanto física quanto espiritual.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">👩‍🏫</span>
            <span><strong>Roshan:</strong> Mentora de Basim e uma das Ocultas mais veteranas. 
            Rigorosa e pragmática, ela ensina a Basim que a paciência é a maior arma de um assassino. 
            Dublada por <strong>Shohreh Aghdashloo</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">👧</span>
            <span><strong>Nehal:</strong> Amiga de infância de Basim e líder dos ladrões. 
            Impulsiva e corajosa, ela representa o passado que Basim tenta deixar para trás, 
            mas que continua a persegui-lo.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🦅</span>
            <span><strong>Enkidu:</strong> A águia companheira de Basim, usada para reconhecimento 
            aéreo. Pode ser abatida por arqueiros em áreas de alto alerta, obrigando o jogador a 
            depender de seus próprios sentidos.</span>
          </li>
        </ul>

        {/* ==================== PARKOUR E BAGDÁ ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wind className="h-7 w-7 text-amber-400" />
          Bagdá: O Cenário Perfeito para Parkour
        </h2>

        <p>
          A cidade foi desenhada como um <strong>playground para assassinos</strong>. Diferente dos 
          mapas enormes de Valhalla e Odyssey, Bagdá é compacta mas extremamente densa — cada rua, 
          telhado e beco foi pensado para oferecer múltiplas rotas de fuga e infiltração.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Design Vertical</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Cada telhado, corda esticada e fardo de feno foi posicionado estrategicamente. Você nunca 
              precisa tocar o chão se não quiser. O parkour herda o sistema de "Parkour Up/Down" de Unity, 
              com animações fluidas e transições suaves.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Moon className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Social Stealth</h4>
            <p className="text-sm text-muted-foreground mb-0">
              IA de multidão aprimorada permite que Basim se misture a grupos de pessoas, sente em 
              bancos, junte-se a monges em procissão ou contrate músicos e mercadores como distração 
              para escapar da guarda califal.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Users className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Interação com NPCs</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Basim pode contratar <strong>Mercadores</strong> (distração móvel), <strong>Músicos</strong> 
              (atraem multidões), <strong>Mercenários</strong> (criam confusão) e <strong>Grupos de Poder</strong> 
              (desbloqueiam acesso a áreas restritas).
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Target className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema de Notoriedade</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Quanto mais crimes você comete, maior sua notoriedade. Guardas passam a reconhecer 
              Basim, e a águia Enkidu pode ser bloqueada por arqueiros. Remova cartazes ou suborne 
              oficiais para reduzir a notoriedade.
            </p>
          </div>
        </div>

        {/* ==================== COMBATE E FERRAMENTAS ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-amber-400" />
          Sistema de Combate: Furtividade Acima de Tudo
        </h2>

        <p>
          O combate de Mirage é deliberadamente <strong>punitivo</strong>. Basim não é um guerreiro 
          viking como Eivor — ele é um assassino. Se você for cercado por mais de 2-3 guardas, 
          as chances de sobrevivência caem drasticamente. O jogo quer que você <strong>evite combate 
          direto</strong> e use furtividade, ferramentas e o ambiente a seu favor.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🥊 Mecânicas de Combate</h3>

        <ul className="space-y-2 my-6">
          <li><strong>Aparar (Parry):</strong> Timing preciso para bloquear ataques e criar aberturas. Ataques vermelhos não podem ser aparados — apenas esquivados.</li>
          <li><strong>Esquiva:</strong> Movimentação rápida para evitar golpes pesados e ataques imbloqueáveis.</li>
          <li><strong>Combos Leves e Pesados:</strong> Combinações de ataques rápidos e fortes com espada.</li>
          <li><strong>Lâmina Oculta:</strong> O instrumento principal. Assassinatos silenciosos instantâneos contra alvos desprevenidos.</li>
          <li><strong>Finalizações:</strong> Ao quebrar a defesa do inimigo, Basim executa finalizações cinematográficas.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bomb className="h-7 w-7 text-amber-400" />
          Ferramentas do Assassino
        </h2>

        <p>
          Em Mirage, o foco está nas <strong>ferramentas</strong>, não em níveis de armas. Cada ferramenta 
          pode ser melhorada e tem múltiplas variantes:
        </p>

        <div className="overflow-x-auto my-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ferramenta</TableHead>
                <TableHead>Uso Principal</TableHead>
                <TableHead>Variantes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">💨 Bombas de Fumaça</TableCell>
                <TableCell>Fuga rápida, quebra de combate, cegar inimigos</TableCell>
                <TableCell>Normal, Veneno (dano em área), Sonífero</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">🗡️ Facas de Arremesso</TableCell>
                <TableCell>Eliminação silenciosa à distância, quebrar lanternas</TableCell>
                <TableCell>Normal, Esquilha (dano em área), Envenenada</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">💤 Dardos Soníferos</TableCell>
                <TableCell>Neutralização não-letal, distrair guardas</TableCell>
                <TableCell>Normal, Berserker (inimigo ataca aliados), Frenesi</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">💣 Armadilhas</TableCell>
                <TableCell>Controle de área, bloquear passagens</TableCell>
                <TableCell>Mina (explosão), Eléctrica (atordoa), Isca (atrai inimigos)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">🦅 Enkidu (Águia)</TableCell>
                <TableCell>Reconhecimento aéreo, marcar inimigos e tesouros</TableCell>
                <TableCell>Pode ser bloqueada por arqueiros em áreas restritas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* ==================== ASSASSIN'S FOCUS ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-amber-400" />
          Assassin's Focus: A Habilidade Definitiva
        </h2>

        <p>
          O <strong>Assassin's Focus</strong> é a mecânica mais cinematográfica de Mirage. Ao acumular 
          assassinatos furtivos, Basim carrega uma barra especial que permite marcar e eliminar 
          <strong> múltiplos alvos em sequência ultra-rápida</strong>, teleportando-se entre eles como 
          uma sombra letal.
        </p>

        <p>
          Esta habilidade representa o ápice da maestria assassina e é essencial para eliminar 
          grupos de guardas sem ser detectado. Recompensa diretamente o jogador que joga de forma 
          furtiva — quanto mais stealth kills, mais rápido o Focus carrega.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Prefere mundo aberto massivo e combate Viking? Confira nossa análise de{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla
            </Link>. Quer ainda mais furtividade urbana? Veja como Paris se compara em{" "}
            <Link to="/post/ac-unity-jogo-frente-tempo-paris" className="text-primary hover:underline">
              AC Unity
            </Link>.
          </p>
        </div>

        {/* ==================== MISSÕES BLACK BOX ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-amber-400" />
          Missões de Assassinato: Investigação e Eliminação
        </h2>

        <p>
          As missões principais de Mirage seguem uma estrutura de <strong>investigação → infiltração → assassinato</strong>. 
          Cada membro da Ordem dos Anciãos requer:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🔍</span>
            <span><strong>Fase de Investigação:</strong> Colete pistas em diferentes distritos — 
            espione conversas, roube documentos, interrogue informantes. Um painel de investigação 
            rastreia suas descobertas até revelar a identidade e localização do alvo.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🗺️</span>
            <span><strong>Fase de Planejamento:</strong> Estude o local do assassinato usando Enkidu. 
            Identifique rotas de entrada, posições de guardas, oportunidades únicas de eliminação 
            e rotas de fuga.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🗡️</span>
            <span><strong>Fase de Execução:</strong> Múltiplas abordagens são possíveis — infiltração 
            pelo telhado, disfarce, uso de aliados, ou o clássico ataque frontal (não recomendado). 
            Oportunidades especiais oferecem finalizações cinematográficas únicas.</span>
          </li>
        </ul>

        {/* ==================== TEMPO DE JOGO ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clock className="h-7 w-7 text-amber-400" />
          Tempo de Jogo: Quanto Tempo para Zerar?
        </h2>

        <div className="overflow-x-auto my-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estilo de Jogo</TableHead>
                <TableHead>Tempo Estimado</TableHead>
                <TableHead>O Que Inclui</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">História Principal</TableCell>
                <TableCell className="text-green-400 font-bold">15-18 horas</TableCell>
                <TableCell>Missões principais e investigações obrigatórias</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">História + Secundárias</TableCell>
                <TableCell className="text-yellow-400 font-bold">25-30 horas</TableCell>
                <TableCell>Contratos, enigmas, coletáveis dos distritos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">100% (Completionist)</TableCell>
                <TableCell className="text-red-400 font-bold">35-40 horas</TableCell>
                <TableCell>Todos os coletáveis, artefatos, equipamentos, desafios</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">+ DLC (New Game+)</TableCell>
                <TableCell className="text-purple-400 font-bold">+15-18 horas</TableCell>
                <TableCell>Nova jornada com todas as ferramentas desbloqueadas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="my-6 p-5 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Mirage é intencionalmente curto</strong> — a Ubisoft projetou o jogo como uma 
            experiência focada de 20-30 horas, em contraste direto com as +100 horas de Valhalla. 
            Para muitos jogadores, isso é um ponto positivo.
          </p>
        </div>

        {/* ==================== DLCs ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-amber-400" />
          DLCs e Conteúdo Adicional
        </h2>

        <div className="overflow-x-auto my-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Conteúdo</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Inclusão</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">New Game+</TableCell>
                <TableCell>Reinicie a história mantendo todas as ferramentas, equipamentos e melhorias. Inimigos mais difíceis.</TableCell>
                <TableCell>Atualização gratuita</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Trajes Legados</TableCell>
                <TableCell>Trajes icônicos de Altaïr, Ezio, Bayek e outros Assassinos clássicos.</TableCell>
                <TableCell>Ubisoft Connect / Deluxe</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Missão Crossover (Valhalla)</TableCell>
                <TableCell>Conexão narrativa com Assassin's Creed Valhalla, expandindo a história de Basim.</TableCell>
                <TableCell>Gratuito (requer Valhalla)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pacote Deluxe</TableCell>
                <TableCell>Trajes exclusivos, montaria e armas temáticas inspiradas no príncipe persa.</TableCell>
                <TableCell>Edição Deluxe</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="my-6 p-5 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Sem grandes expansões:</strong> Diferente de outros ACs, Mirage não recebeu DLCs 
            com histórias adicionais. A Ubisoft optou por focar os recursos em{" "}
            <Link to="/post/ac-shadows-japao-feudal" className="text-primary hover:underline">
              Assassin's Creed Shadows
            </Link>.
          </p>
        </div>

        {/* ==================== REQUISITOS PC ==================== */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Requisitos de PC: Qual Configuração Roda Mirage?
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Sistema Operacional</TableCell>
                <TableCell>Windows 10/11 (64 bits)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Processador</TableCell>
                <TableCell>Ryzen 5 1600 ou Intel Core i7-4790K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Memória RAM</TableCell>
                <TableCell>8 GB (dual channel)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Placa de Vídeo</TableCell>
                <TableCell>GTX 1060 (6 GB) ou RX 570 (4 GB)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Armazenamento</TableCell>
                <TableCell>40 GB — SSD extremamente recomendado para garantir a performance do jogo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1440p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Processador</TableCell>
                <TableCell>Ryzen 5 3600 ou Intel i7-8700K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Memória RAM</TableCell>
                <TableCell>16 GB (dual channel)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Placa de Vídeo</TableCell>
                <TableCell>RTX 2070 (8 GB) ou RX 5700 XT (8 GB)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔶 Configuração Ultra (4K – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Processador</TableCell>
                <TableCell>Ryzen 5 5600X ou Intel i5-11600K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Memória RAM</TableCell>
                <TableCell>16 GB (dual channel)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Placa de Vídeo</TableCell>
                <TableCell>RTX 3080 (10 GB) ou RX 6900 XT (16 GB)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-muted-foreground">
          👉 Mirage é <strong>bem otimizado</strong> comparado a Unity e Valhalla. A maioria dos PCs gamer 
          intermediários roda em 1080p/60 FPS sem problemas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-amber-400" />
          Notebook Gamer Roda Mirage?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>RTX 3050 / 3060 / 4050 ou superior</li>
          <li>Intel Core i7 ou Ryzen 7</li>
          <li>16 GB de RAM</li>
          <li>SSD extremamente recomendado para garantir a performance do jogo</li>
        </ul>

        <p className="text-muted-foreground">
          👉 Mirage também está disponível nativamente no <strong>iPhone 15 Pro e iPad M1+</strong>, 
          tornando-o o primeiro AC jogável em dispositivos móveis Apple.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-amber-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Gráficos superiores em 4K com Ray Tracing</li>
              <li>✔ Promoções frequentes na Steam e Epic</li>
              <li>✔ FPS desbloqueado e suporte ultrawide</li>
              <li>✔ Mods visuais disponíveis</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series X|S</li>
              <li>✔ 60 FPS estável no PS5 e Series X</li>
              <li>✔ DualSense com feedback háptico no PS5</li>
              <li>✔ Sem preocupação com hardware</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Comprar Mirage em 2026?
        </h2>

        <p><strong>Vale a pena</strong> se você:</p>
        <ul>
          <li>Sente falta da furtividade clássica da franquia</li>
          <li>Prefere jogos mais curtos e focados (20-30 horas)</li>
          <li>Quer conhecer a origem de Basim antes de jogar Valhalla</li>
          <li>Está cansado de RPGs com +100 horas de conteúdo repetitivo</li>
          <li>Quer explorar uma Bagdá deslumbrante durante a Era de Ouro do Islã</li>
          <li>Busca gameplay stealth semelhante ao AC original e Unity</li>
        </ul>

        <p><strong>Talvez não seja para você</strong> se:</p>
        <ul>
          <li>Você prefere a liberdade RPG de Odyssey, Origins e Valhalla</li>
          <li>Quer um jogo com +60 horas de conteúdo</li>
          <li>Espera combate intenso estilo hack-and-slash</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
            <li>✓ <strong>iPhone 15 Pro / iPad M1+</strong> (versão nativa iOS)</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 150 a R$ 200 (edição standard)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O retorno às raízes te agradou?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-mirage-retorno-raizes-bagda" />

      {/* Comments */}
      <CommentSection postId="ac-mirage-retorno-raizes-bagda" />
    </article>
  );
};

export default ACMirage;