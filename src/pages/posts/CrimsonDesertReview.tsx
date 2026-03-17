import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Target, Star, Sword, Shield, Map, Cpu, Gamepad2, Trophy } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonReviewImg from "@/assets/crimson-desert-review.webp";

const CrimsonDesertReview = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/geek/crimson-desert"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Crimson Desert
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Review
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert Review: O RPG Que Redefiniu o Mundo Aberto em 2026
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Análise completa após 60+ horas: gameplay, narrativa, performance técnica e veredito final
        </p>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            17 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            15 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonReviewImg}
          alt="Crimson Desert Review - RPG Mundo Aberto 2026"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos de expectativa e trailers que prometiam revolucionar o gênero RPG de mundo aberto, <strong>Crimson Desert finalmente chegou</strong>. Depois de mais de 60 horas explorando o continente de Pywel, enfrentando chefes colossais e desvendando os mistérios do Abismo, posso afirmar: a Pearl Abyss entregou algo verdadeiramente especial.
        </p>

        {/* Score Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-red-400" />
            Veredito Final
          </h3>
          <div className="flex items-center gap-6 mb-4">
            <div className="text-6xl font-black text-red-400">9.2</div>
            <div>
              <p className="font-bold text-lg mb-1">Excepcional</p>
              <p className="text-sm text-muted-foreground mb-0">Uma experiência RPG monumental que eleva o padrão do gênero com combate visceral, mundo vivo e narrativa cinematográfica inesquecível.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="p-3 bg-card rounded-lg border border-border text-center">
              <span className="text-red-400 font-bold text-lg">9.5</span>
              <p className="text-muted-foreground mb-0 text-xs mt-1">Combate</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border text-center">
              <span className="text-red-400 font-bold text-lg">9.0</span>
              <p className="text-muted-foreground mb-0 text-xs mt-1">História</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border text-center">
              <span className="text-red-400 font-bold text-lg">9.4</span>
              <p className="text-muted-foreground mb-0 text-xs mt-1">Visuais</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border text-center">
              <span className="text-red-400 font-bold text-lg">8.8</span>
              <p className="text-muted-foreground mb-0 text-xs mt-1">Performance</p>
            </div>
          </div>
        </div>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-red-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div><strong>Desenvolvedor:</strong> Pearl Abyss</div>
            <div><strong>Engine:</strong> BlackSpace Engine</div>
            <div><strong>Gênero:</strong> RPG de Ação / Mundo Aberto</div>
            <div><strong>Plataformas:</strong> PC, PS5, Xbox Series X|S, macOS</div>
            <div><strong>Lançamento:</strong> 19 de março de 2026</div>
            <div><strong>Preço:</strong> R$ 249,90 (PC) / R$ 299,90 (Console)</div>
            <div><strong>Tempo para Zerar:</strong> ~35h (história principal)</div>
            <div><strong>100% Completar:</strong> ~80-100h</div>
            <div><strong>Modo:</strong> Single-player exclusivo</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-red-400" />
          Primeiras Impressões: O Impacto de Pywel
        </h2>

        <p>
          A primeira hora de Crimson Desert é uma masterclass em introdução narrativa. O jogo não perde tempo com tutoriais genéricos — você é jogado direto no coração da história de Kliff e dos Greymanes, com uma sequência cinemática que rivaliza com as melhores produções de Hollywood. A transição entre cutscene e gameplay é tão fluida que por vezes não se percebe onde uma termina e a outra começa.
        </p>
        <p>
          A abertura culmina na emboscada dos Black Bears, um momento de tensão brutal que estabelece o tom da narrativa: <strong>ninguém está seguro, as decisões têm peso e a sobrevivência em Pywel é conquistada, não garantida</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Map className="h-7 w-7 text-red-400" />
          O Mundo Aberto: 82 km² de Surpresas
        </h2>

        <p>
          O mapa de Pywel é <strong>genuinamente impressionante</strong>. Ao contrário de muitos mundos abertos que inflam sua área com espaço vazio, cada região de Crimson Desert tem propósito. As cinco regiões — das planícies verdes ao Abismo etéreo — oferecem uma diversidade visual e mecânica que mantém a exploração fresca por dezenas de horas.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-red-400">Planícies de Oreha</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Vastas pradarias com acampamentos mercenários, fauna selvagem e ruínas misteriosas. O ponto de partida que já impressiona pela escala.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-red-400">Deserto de Starvon</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Areias escaldantes escondendo civilizações perdidas e criaturas ancestrais. As tempestades de areia afetam gameplay e visibilidade.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-red-400">Cidade de Shapur</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A maior cidade do jogo, com NPCs que seguem rotinas dinâmicas, mercados, tavernas e uma economia viva que reage às ações do jogador.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-red-400">O Abismo</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Uma dimensão sobrenatural acessível em momentos específicos. Gravidade alterada, criaturas eldritch e visuais de tirar o fôlego.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Combate: O Melhor da Geração
        </h2>

        <p>
          Se há um aspecto onde Crimson Desert realmente brilha acima de qualquer concorrente, é no <strong>sistema de combate</strong>. A Pearl Abyss trouxe toda a expertise de Black Desert Online e a elevou a um novo patamar. Cada golpe tem peso, cada esquiva exige timing, e cada encontro com um inimigo pode ser a diferença entre vitória gloriosa e derrota humilhante.
        </p>
        <p>
          O sistema de combos é extenso mas acessível — botões simples criam combinações que se tornam mais complexas conforme o jogador evolui suas habilidades. A transição entre combate a pé e montado é fluida e intuitiva, algo que poucos jogos conseguiram acertar.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          O combate de Crimson Desert é o que acontece quando os desenvolvedores de um MMO focam toda sua energia em uma experiência single-player. O resultado é simplesmente devastador.
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Chefes: Momentos que Definem uma Geração
        </h2>

        <p>
          As batalhas contra chefes são, sem exagero, as melhores que já experienciei em um RPG de ação. Cada boss é um espetáculo visual e mecânico: o dragão mecânico Ignathor exige 20+ minutos de combate estratégico com múltiplas fases; a bruxa Maria utiliza manipulação gravitacional; o cavaleiro corrompido Varnoth obriga o jogador a usar o ambiente a seu favor.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Gamepad2 className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">15 Chefes Principais</h4>
            <p className="text-sm text-muted-foreground">
              Cada um com identidade visual e mecânica única, exigindo adaptação total do loadout e estratégia.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">30+ Mini-bosses</h4>
            <p className="text-sm text-muted-foreground">
              Espalhados pelo mundo aberto, cada um guardando recompensas exclusivas e lore adicional.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Trophy className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Modo Desafio</h4>
            <p className="text-sm text-muted-foreground">
              Relutar chefes em dificuldade aumentada após completar a história, com recompensas cosméticas exclusivas.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-red-400" />
          Performance Técnica e Requisitos
        </h2>

        <p>
          A BlackSpace Engine é um prodígio técnico. No PS5, o jogo mantém 60fps estáveis no modo performance e oferece ray tracing no modo qualidade a 30fps. No PC, a otimização é surpreendentemente boa — uma RTX 3070 roda o jogo em configurações altas a 1440p/60fps sem problemas.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Cpu className="h-6 w-6 text-red-400" />
            Requisitos de PC
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-red-400 mb-2">Mínimos</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li><strong>CPU:</strong> Intel i5-10400 / Ryzen 5 3600</li>
                <li><strong>GPU:</strong> GTX 1660 Super / RX 5600 XT</li>
                <li><strong>RAM:</strong> 16 GB</li>
                <li><strong>Armazenamento:</strong> 80 GB SSD</li>
                <li><strong>OS:</strong> Windows 10 64-bit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-400 mb-2">Recomendados</h4>
              <ul className="space-y-1 text-muted-foreground list-none pl-0">
                <li><strong>CPU:</strong> Intel i7-12700K / Ryzen 7 5800X</li>
                <li><strong>GPU:</strong> RTX 3070 / RX 6800 XT</li>
                <li><strong>RAM:</strong> 32 GB</li>
                <li><strong>Armazenamento:</strong> 80 GB NVMe SSD</li>
                <li><strong>OS:</strong> Windows 11 64-bit</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Pontos Positivos e Negativos</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-5 bg-green-500/10 rounded-xl border border-green-500/30">
            <h4 className="font-bold text-green-400 mb-3">👍 Prós</h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-none pl-0">
              <li>✅ Sistema de combate excepcional — o melhor da geração</li>
              <li>✅ Mundo aberto denso e recompensador</li>
              <li>✅ Narrativa cinematográfica envolvente</li>
              <li>✅ Chefes memoráveis com mecânicas únicas</li>
              <li>✅ BlackSpace Engine tecnicamente impressionante</li>
              <li>✅ Trilha sonora épica e atmosférica</li>
            </ul>
          </div>
          <div className="p-5 bg-red-500/10 rounded-xl border border-red-500/30">
            <h4 className="font-bold text-red-400 mb-3">👎 Contras</h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-none pl-0">
              <li>❌ Alguns diálogos secundários menos polidos</li>
              <li>❌ Sistema de crafting poderia ser mais profundo</li>
              <li>❌ Poucos bugs menores no lançamento (já corrigidos)</li>
              <li>❌ Ausência de New Game+ no lançamento</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            Crimson Desert é, sem hesitação, um dos melhores RPGs de ação já criados. A Pearl Abyss entregou uma experiência que combina combate visceral de classe mundial, um mundo aberto genuinamente fascinante e uma narrativa que prende do início ao fim. Pequenas imperfeições não diminuem o que é uma conquista monumental para o gênero. Se você é fã de RPGs de ação, Crimson Desert é <strong>obrigatório</strong>.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-review-2026" />
      <CommentSection postId="crimson-desert-review-2026" />
    </article>
  );
};

export default CrimsonDesertReview;
