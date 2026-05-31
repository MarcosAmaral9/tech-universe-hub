import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Sword, Moon, Sun, Leaf, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle, Shield, MapPin } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import acShadowsImg from "@/assets/ac-shadows.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ACShadows = () => {

  useEffect(() => {
    trackArticleRead("ac-shadows-japao-feudal", "Assassin's Creed Shadows em 2026: Review Completa — Japão Feudal, Naoe e Yasuke", "geek");
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
          Assassin's Creed Shadows em 2026 Vale a Pena? Review Completa, Japão Feudal, Naoe, Yasuke, PC Ideal e Custo-Benefício
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />09 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="09 de Fevereiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={acShadowsImg}
          alt="Assassin's Creed Shadows - Review 2026 Japão Feudal Naoe Yasuke PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos de pedidos da comunidade, a Ubisoft finalmente nos leva ao{" "}
          <strong>Japão Feudal do século XVI</strong>. <strong>Assassin's Creed Shadows</strong> não é
          apenas mais um jogo da franquia — é uma <strong>evolução técnica</strong> que redefine como
          interagimos com o mundo aberto, com sistema de estações dinâmicas, iluminação global em
          tempo real e dois protagonistas com mecânicas radicalmente distintas. Exige um{" "}
          <strong>PC gamer</strong> de alta performance, mas entrega uma das experiências mais
          completas que a franquia já produziu.
        </p>

        <p className="text-lg">Neste guia completo de <strong>Assassin's Creed Shadows</strong> você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O Japão Feudal que os fãs sonharam chegou?</strong></li>
          <li>👉 Naoe ou Yasuke: qual protagonista escolher e por quê</li>
          <li>👉 Contexto histórico completo do período Sengoku</li>
          <li>👉 Estações dinâmicas e sistema de iluminação global</li>
          <li>👉 Facções, combate e mecânicas únicas de AC Shadows</li>
          <li>👉 DLCs, tempo de jogo e requisitos de PC em 2026</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><div className="text-sm text-muted-foreground">Desenvolvedora</div><div className="font-bold">Ubisoft Quebec</div></div>
            <div><div className="text-sm text-muted-foreground">Lançamento</div><div className="font-bold">20/03/2025</div></div>
            <div><div className="text-sm text-muted-foreground">Preço Médio 2026</div><div className="font-bold">R$ 250 a R$ 350</div></div>
            <div><div className="text-sm text-muted-foreground">Plataformas</div><div className="font-bold">PC, PS5, Xbox Series X|S</div></div>
            <div><div className="text-sm text-muted-foreground">Tempo (história)</div><div className="font-bold">40–50 horas</div></div>
            <div><div className="text-sm text-muted-foreground">100% Completo</div><div className="font-bold">80–100 horas</div></div>
            <div><div className="text-sm text-muted-foreground">DLCs</div><div className="font-bold">Claws of Awaji + TBA</div></div>
            <div><div className="text-sm text-muted-foreground">GPU Mínima</div><div className="font-bold">RTX 3070 / RX 5700 XT</div></div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>O AC mais tecnologicamente avançado</strong> — exige hardware sério, mas entrega gráficos de geração atual.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-purple-400" />
          Review Geral: Assassin's Creed Shadows é o Melhor AC Já Feito?
        </h2>

        <p>
          <strong>Para muitos fãs, sim.</strong> O Japão Feudal era o cenário mais pedido há décadas,
          e a Ubisoft entregou uma experiência visualmente deslumbrante com mecânicas inovadoras. O
          sistema de dois protagonistas, as estações dinâmicas e a iluminação global em tempo real
          criam algo genuinamente único na franquia.
        </p>

        <p>
          <strong>Shadows</strong> combina o melhor dos dois mundos: a{" "}
          <strong>furtividade clássica</strong> dos primeiros jogos (com Naoe) e o{" "}
          <strong>combate elaborado</strong> da fase RPG moderna (com Yasuke), tudo embalado numa
          ambientação cultural japonesa de tirar o fôlego.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos: Shadows entregou o Japão que merecíamos — e mais">
          <p>
            Joguei <strong>Assassin's Creed Shadows</strong> desde o lançamento e posso dizer com
            convicção: é o AC que mais me fez parar de jogar só para olhar para a tela. A neve
            caindo sobre um telhado de templo com as cerejeiras ao fundo, enquanto Naoe desliza
            silenciosamente entre as sombras criadas por uma tocha — isso é cinema interativo.
          </p>
          <p>
            A dualidade Naoe/Yasuke vai além do gimmick de marketing. Jogar como Yasuke em combate
            aberto e depois trocar para Naoe numa infiltração noturna são experiências tão distintas
            que parecem jogos separados compartilhando o mesmo mundo. Minha única ressalva é o peso
            técnico: se você não tem hardware adequado, considere o console ou espere uma promoção.
          </p>
        </EditorialTake>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          🏯 Contexto Histórico: O Período Sengoku (1467–1615)
        </h2>

        <p>
          <strong>Assassin's Creed Shadows</strong> se passa durante o{" "}
          <strong>período Sengoku</strong> ("Época dos Estados em Guerra"), um dos capítulos mais
          violentos e fascinantes da história japonesa. Entre <strong>1467 e 1615</strong>, o Japão
          era uma nação fragmentada onde dezenas de <strong>daimyōs</strong> (senhores feudais)
          lutavam pelo controle territorial.
        </p>

        <p>
          O jogo se concentra na segunda metade do século XVI, período em que três grandes
          unificadores buscavam consolidar o poder: <strong>Oda Nobunaga</strong>,{" "}
          <strong>Toyotomi Hideyoshi</strong> e <strong>Tokugawa Ieyasu</strong>. Foi uma era de
          alianças traiçoeiras, inovação militar com a introdução das armas de fogo europeias e
          transformação cultural profunda através do contato com os jesuítas portugueses.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">👥 Figuras Históricas em AC Shadows</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Oda Nobunaga</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O "Rei Demônio do Sexto Céu" — líder revolucionário que introduziu armas de fogo
              europeias no combate japonês e destruiu o poder dos monges guerreiros Ikko-ikki.
              <strong> Senhor histórico de Yasuke</strong> na vida real.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Yasuke (Histórico)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O <strong>primeiro samurai não-japonês documentado</strong>. De origem africana
              (possivelmente moçambicana), chegou ao Japão em 1579 como servo do missionário
              Alessandro Valignano e foi recebido por Nobunaga em 1581, tornando-se seu guarda.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Tokugawa Ieyasu</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O paciente estrategista que eventualmente unificaria o Japão após a Batalha de
              Sekigahara (1600) e fundaria o <strong>Xogunato Tokugawa</strong>, inaugurando
              250 anos de relativa paz no Período Edo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Toyotomi Hideyoshi</h4>
            <p className="text-sm text-muted-foreground mb-0">
              De camponês a governante supremo do Japão — uma das ascensões mais improváveis da
              história. Sucedeu Nobunaga após o Incidente de Honnō-ji (1582) e lançou duas
              invasões malsucedidas à Coreia.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-purple-400" />
          A Geografia do Japão Feudal em AC Shadows
        </h3>

        <p>O mapa de <strong>Shadows</strong> recria com fidelidade histórica regiões icônicas do Japão do século XVI:</p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Região</th>
                <th className="text-left py-3 px-4 font-bold">Destaque</th>
                <th className="text-left py-3 px-4 font-bold">Importância Histórica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Quioto</td>
                <td className="py-3 px-4 text-muted-foreground">Capital Imperial</td>
                <td className="py-3 px-4 text-muted-foreground">Sede do Imperador e centro político e cultural do Japão</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Osaka</td>
                <td className="py-3 px-4 text-muted-foreground">Fortaleza de Hideyoshi</td>
                <td className="py-3 px-4 text-muted-foreground">Castelo monumental e principal centro comercial</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Província de Iga</td>
                <td className="py-3 px-4 text-muted-foreground">Terra dos Shinobi</td>
                <td className="py-3 px-4 text-muted-foreground">Berço histórico dos clãs ninja Iga e Kōga mais famosos</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Owari (Nagoya)</td>
                <td className="py-3 px-4 text-muted-foreground">Território de Nobunaga</td>
                <td className="py-3 px-4 text-muted-foreground">Ponto de partida da unificação; Castelo de Nagoya</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Monte Hiei</td>
                <td className="py-3 px-4 text-muted-foreground">Templo Enryaku-ji</td>
                <td className="py-3 px-4 text-muted-foreground">Sede dos monges guerreiros queimada por Nobunaga em 1571</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-purple-400" />
          Dois Protagonistas, Dois Estilos de Jogo Completamente Distintos
        </h2>

        <p>
          A grande inovação de <strong>Shadows</strong> está na escolha e alternância entre dois
          protagonistas com mecânicas, filosofias e arcos narrativos completamente distintos:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-purple-500/30 border">
            <Moon className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">🥷 Naoe (Shinobi)</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Filha de um ninja de Iga, Naoe é a protagonista da furtividade clássica. Ágil,
              silenciosa e letal nas sombras, ela representa a tradição dos Ocultos e usa cada
              elemento do ambiente a seu favor.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ <strong>Furtividade clássica AC</strong> — a melhor desde AC Unity</li>
              <li>✔ Gancho retrátil para travessia ágil</li>
              <li>✔ Arsenal ninja: shurikens, kunais, bombas de fumaça</li>
              <li>✔ Cria e manipula sombras no ambiente</li>
              <li>✔ Assassinatos silenciosos com lâmina oculta</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-amber-500 mb-3" />
            <h4 className="font-bold mb-2">⚔️ Yasuke (Samurai)</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Baseado no lendário samurai africano real que serviu Oda Nobunaga. Yasuke representa
              força, honra e combate direto — uma presença física avassaladora no campo de batalha.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Combate pesado e visceral com katana, naginata e kanabō</li>
              <li>✔ Armaduras samurai completas com diferentes atributos</li>
              <li>✔ Resistência física superior — absorve mais dano</li>
              <li>✔ Habilidades de intimidação e combate em área</li>
              <li>✔ Finalizações cinematográficas únicas</li>
            </ul>
          </div>
        </div>

        <p>
          O jogador pode <strong>alternar livremente</strong> entre Naoe e Yasuke no mundo aberto,
          escolhendo o protagonista ideal para cada missão ou situação. Algumas missões são exclusivas
          de um personagem, forçando você a dominar ambos os estilos ao longo da campanha.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-purple-400" />
          Facções e Forças em Conflito em AC Shadows
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
                <td className="py-3 px-4 font-medium">Clã Oda</td>
                <td className="py-3 px-4 text-muted-foreground">Oda Nobunaga / Owari</td>
                <td className="py-3 px-4 text-muted-foreground">Unificação pela força, inovação militar, centralização do poder</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Os Ocultos (Assassinos)</td>
                <td className="py-3 px-4 text-muted-foreground">Naoe / Sombras de Iga</td>
                <td className="py-3 px-4 text-muted-foreground">Liberdade, equilíbrio, proteção do povo das sombras</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ordem dos Anciões (Templários)</td>
                <td className="py-3 px-4 text-muted-foreground">Secreto — infiltrados</td>
                <td className="py-3 px-4 text-muted-foreground">Controle total através da manipulação dos daimyōs</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Monges Guerreiros (Sōhei)</td>
                <td className="py-3 px-4 text-muted-foreground">Templos budistas do Monte Hiei</td>
                <td className="py-3 px-4 text-muted-foreground">Defesa do poder religioso e autonomia dos templos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Clãs Shinobi (Ninja)</td>
                <td className="py-3 px-4 text-muted-foreground">Iga e Kōga</td>
                <td className="py-3 px-4 text-muted-foreground">Espionagem mercenária — lealdade vendida ao melhor pagador</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-purple-400" />
          Sistema de Combate de AC Shadows
        </h2>

        <p>
          O combate de <strong>Shadows</strong> é o mais refinado da franquia, combinando elementos
          de <strong>Ghost of Tsushima</strong> e <strong>Sekiro</strong> com a identidade própria de AC:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">⚔️ Combate com Katana</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sistema de parry e contra-ataque com timing preciso. Cada tipo de arma — katana,
              wakizashi, naginata, kanabō — possui moveset único e situações ideais de uso estratégico.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🥷 Ferramentas Ninja de Naoe</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Shurikens, kunais, bombas de fumaça, veneno e gancho retrátil. Cada ferramenta pode
              ser aprimorada e combinada em estratégias de infiltração elaboradas.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🛡️ Sistema de Armaduras Samurai</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Yasuke equipa armaduras históricas completas que afetam mobilidade e resistência.
              Armaduras leves permitem mais agilidade; pesadas oferecem proteção máxima.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏯 Infiltração em Castelos</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Castelos japoneses com múltiplos andares e dezenas de rotas de infiltração. Telhados,
              vigas, passagens secretas e fossos oferecem abordagens completamente variadas.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Leaf className="h-7 w-7 text-purple-400" />
          Estações Dinâmicas: A Maior Inovação Técnica de AC Shadows
        </h2>

        <p>
          O novo sistema de <strong>estações do ano dinâmicas</strong> impacta diretamente a
          jogabilidade em cada aspecto e é a maior inovação técnica da franquia desde Unity:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">❄️</span>
            <span><strong>Inverno:</strong> Neve abafa seus passos, mas inimigos veem suas
            pegadas na neve fresca. Lagos congelam criando novos caminhos. A vegetação
            desaparece, eliminando esconderijos naturais que existiam no verão.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🌸</span>
            <span><strong>Primavera:</strong> Cerejeiras em flor criam paisagens
            deslumbrantes. As chuvas da estação abafam sons e criam reflexos na água que podem
            denunciar movimentos furtivos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🌿</span>
            <span><strong>Verão:</strong> Vegetação alta oferece esconderijos que desaparecem
            no outono. Dias mais longos significam menos horas de escuridão para infiltrações,
            mas a floresta densa compensa.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">🍂</span>
            <span><strong>Outono:</strong> Folhas caindo criam sons que revelam posição.
            Paisagens douradas deslumbrantes. A colheita traz mais NPCs às vilas, dificultando
            infiltrações mas oferecendo mais oportunidades de disfarce.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sun className="h-7 w-7 text-purple-400" />
          Sistema de Iluminação Global e Criação de Sombras
        </h2>

        <p>
          <strong>Shadows</strong> introduz um sistema onde você pode{" "}
          <strong>criar suas próprias sombras</strong>. Apagar tochas e destruir fontes de luz são
          mecânicas essenciais para manter Naoe invisível. O sistema funciona em tempo real, com
          sombras projetadas fisicamente a partir de cada fonte de luz no ambiente.
        </p>

        <p>
          Isso significa que a <strong>hora do dia importa estrategicamente</strong>: missões noturnas
          favorecem Naoe com mais sombras naturais, enquanto missões diurnas podem ser mais adequadas
          para o estilo direto de Yasuke. Apagar uma tocha não apenas escurece uma sala — muda
          completamente o ângulo de vigilância de todos os guardas ao redor.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Apreciador de samurais e guerreiros históricos? Confira também nossa análise de{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              AC Valhalla
            </Link>{" "}
            e descubra como a cultura viking se compara à estética japonesa de Shadows.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          ⏱️ Tempo de Jogo de AC Shadows: Quanto Tempo para Zerar?
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Estilo de Jogo</th>
                <th className="text-left py-3 px-4 font-bold">Tempo Estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🎯 História Principal</td>
                <td className="py-3 px-4 text-muted-foreground">40–50 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">📋 História + Missões Secundárias</td>
                <td className="py-3 px-4 text-muted-foreground">60–80 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">🏆 100% (Completionist)</td>
                <td className="py-3 px-4 text-muted-foreground">80–100 horas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">📦 DLCs e Conteúdo Pós-Lançamento de AC Shadows</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Expansão</th>
                <th className="text-left py-3 px-4 font-bold">Conteúdo</th>
                <th className="text-left py-3 px-4 font-bold">Duração Est.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Claws of Awaji</td>
                <td className="py-3 px-4 text-muted-foreground">Nova região (Ilha de Awaji), missões exclusivas e novas armas históricas</td>
                <td className="py-3 px-4 text-muted-foreground">~10–15 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Expansão 2 (TBA)</td>
                <td className="py-3 px-4 text-muted-foreground">A ser anunciada pela Ubisoft</td>
                <td className="py-3 px-4 text-muted-foreground">TBA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-purple-400" />
          Requisitos de PC para AC Shadows: O Mais Pesado da Franquia
        </h2>

        <p className="text-destructive font-bold">
          ⚠️ Sim! Assassin's Creed Shadows é o AC mais exigente já lançado. Prepare seu hardware.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS, Baixo)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 3600 ou Intel Core i7-8700K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB (dual channel obrigatório)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 3070 (8 GB) ou RX 5700 XT (8 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">SSD NVMe extremamente recomendado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1440p – 60 FPS, Alto)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 7 5800X3D ou Intel Core i7-12700K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">32 GB DDR4 (dual channel)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 4070 Ti Super (16 GB) ou RX 7900 XT (20 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔥 Configuração Ultra (4K – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 9 7950X ou Intel Core i9-13900K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">32 GB DDR5</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 4090 (24 GB) ou RX 7900 XTX (24 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-purple-400" />
          Notebook Gamer Roda AC Shadows?
        </h2>

        <p><strong>Com dificuldade.</strong> Apenas <strong>notebooks gamer de ponta</strong>:</p>
        <ul>
          <li>RTX 4060 / 4070 ou superior</li>
          <li>Intel Core i7-12700H ou AMD Ryzen 9</li>
          <li>32 GB de RAM</li>
          <li>SSD NVMe extremamente recomendado</li>
        </ul>
        <p className="text-destructive font-bold">
          ⚠️ Notebooks de entrada não rodarão Shadows adequadamente. Espere 25–35 FPS em qualidade
          baixa com GPUs como RTX 3060 Mobile.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-purple-400" />
          PC ou Console: Qual Vale Mais a Pena para AC Shadows?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos (4K Ultra com Ray Tracing)</li>
              <li>✔ Suporte a mods (futuro)</li>
              <li>✔ Promoções frequentes no Ubisoft Connect</li>
              <li>✘ Requer investimento alto (RTX 4070 Ti+ recomendado)</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console (PS5 / Xbox Series X)</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Apenas PS5 e Xbox Series X|S (não roda em old-gen)</li>
              <li>✔ Otimização garantida (30/60 FPS estável)</li>
              <li>✔ Melhor custo-benefício para hardware</li>
              <li>✔ DualSense com feedback háptico exclusivo no PS5</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-purple-400" />
          Vale a Pena Comprar Assassin's Creed Shadows em 2026?
        </h2>

        <p><strong>Vale a pena</strong> se você:</p>
        <ul>
          <li>✔ Sempre quis um AC ambientado no Japão Feudal</li>
          <li>✔ Tem hardware capaz (RTX 3070 ou superior)</li>
          <li>✔ Gosta de sistemas de furtividade elaborados com Naoe</li>
          <li>✔ Aprecia a cultura, filosofia e estética japonesa</li>
          <li>✔ Quer o AC mais completo tecnicamente em todos os aspectos</li>
        </ul>

        <p><strong>Talvez não valha agora</strong> se:</p>
        <ul>
          <li>✗ Tem GPU abaixo da RTX 3070 — espere uma promoção ou jogue no console</li>
          <li>✗ Prefere jogos mais curtos e lineares (menos de 20 horas)</li>
          <li>✗ Não gosta da fase RPG da franquia moderna</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/20 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar AC Shadows?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Ubisoft Connect, Steam, Epic Games Store</li>
            <li>✓ <strong>PlayStation 5</strong></li>
            <li>✓ <strong>Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio em 2026: R$ 250 a R$ 350 (edição padrão) | R$ 400 a R$ 500 (Gold com Season Pass)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Naoe ou Yasuke: qual protagonista você prefere jogar?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Assassin's Creed Shadows — página oficial Ubisoft Store",
            url: "https://store.ubisoft.com/br/assassin-s-creed-shadows/64f7049b-8ab3-4b11-bc49-ff64e4f0e148.html",
            publisher: "Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Shadows — Steam Store (requisitos e avaliações)",
            url: "https://store.steampowered.com/app/2971760/Assassins_Creed_Shadows/",
            publisher: "Valve / Ubisoft",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Shadows — How Long to Beat",
            url: "https://howlongtobeat.com/game/assassins-creed-shadows",
            publisher: "HowLongToBeat",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Sengoku Period — Britannica",
            url: "https://www.britannica.com/event/Sengoku-period",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Yasuke — the African samurai who served Oda Nobunaga (Britannica)",
            url: "https://www.britannica.com/biography/Yasuke",
            publisher: "Encyclopædia Britannica",
            accessedAt: "Fevereiro 2026",
          },
          {
            title: "Assassin's Creed Shadows — PC Gaming Wiki (requisitos e otimizações)",
            url: "https://www.pcgamingwiki.com/wiki/Assassin%27s_Creed:_Shadows",
            publisher: "PCGamingWiki",
            accessedAt: "Fevereiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="ac-shadows-japao-feudal" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="ac-shadows-japao-feudal" postTitle="Assassin's Creed Shadows em 2026: Review Completa — Japão Feudal, Naoe e Yasuke" />
    </article>
  );
};

export default ACShadows;
