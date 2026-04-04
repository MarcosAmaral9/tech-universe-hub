import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Sword, Shield, Zap, Star, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/crimson-desert-personagens.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertPersonagens = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-personagens-kliff-damiane-oongka", "Crimson Desert: Kliff, Damiane e Oongka — Guia dos 3 Personagens Jogáveis", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">RPG · Personagens · Guia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Kliff, Damiane e Oongka — Guia Completo dos 3 Personagens Jogáveis
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert personagens Kliff Damiane Oongka" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert oferece <strong>3 personagens jogáveis</strong> — Kliff, Damiane e Oongka — cada um com estilo de combate único. Embora Kliff seja o protagonista principal e o mais utilizado, os outros dois entram em momentos específicos da campanha e oferecem mecânicas completamente diferentes.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          Kliff — O Protagonista dos Greymanes
        </h2>
        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-geek text-lg mb-1">Kliff MacDuff</h3>
              <p className="text-sm text-muted-foreground mb-3">Líder dos Greymanes · Mercenário veterano · Estilo versátil</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="font-bold">Tipo:</span> Versátil (ataque + defesa)</div>
                <div><span className="font-bold">Arma:</span> Espada + combate corpo a corpo</div>
                <div><span className="font-bold">Especialidade:</span> Combos encadeados</div>
                <div><span className="font-bold">Dificuldade:</span> ★★★☆☆</div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Kliff é o personagem principal da história e o único controlável durante a maior parte do jogo. Líder dos Greymanes, é descrito pelos críticos como um personagem com "voz grave e sazonal, lembrando Geralt de The Witcher, mas com mais vulnerabilidade". Seu estilo de combate é o mais versátil: pode encadear combos com a espada, executar agarrões (inclusive suplex), lutar a cavalo e usar habilidades aprendidas observando inimigos e NPCs.
        </p>
        <p>
          O sistema de progressão de Kliff não usa XP tradicional. Ele melhora por <strong>Abyss Artifacts</strong> (que desbloqueiam habilidades) e refinamento de equipamentos. Novas habilidades também são aprendidas observando inimigos e NPCs executando os movimentos — o jogo descreve isso como "aprendizado contextual".
        </p>
        <ul>
          <li><strong>Combos terrestres:</strong> encadeamentos de espada com finalização em golpe descendente ou arremesso</li>
          <li><strong>Grappling:</strong> agarrões e suplex que servem como interrupção de ataques e reposicionamento</li>
          <li><strong>Combate a cavalo:</strong> Kliff mantém capacidade ofensiva total enquanto montado</li>
          <li><strong>Crow Wings:</strong> sistema de voo/planagem desbloqueado mais tarde no jogo</li>
          <li><strong>Culinária e cura:</strong> Kliff cura apenas com comida — cozinhar em fogueiras é essencial para bosses</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Damiane — A Personagem Ágil
        </h2>
        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-6">
          <div className="flex-1">
            <h3 className="font-bold text-geek text-lg mb-1">Damiane</h3>
            <p className="text-sm text-muted-foreground mb-3">Greymane · Combate ágil · Especialista em velocidade</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="font-bold">Tipo:</span> Agilidade / DPS rápido</div>
              <div><span className="font-bold">Arma:</span> Adagas / ataques rápidos</div>
              <div><span className="font-bold">Especialidade:</span> Mobilidade e evasão</div>
              <div><span className="font-bold">Dificuldade:</span> ★★★★☆</div>
            </div>
          </div>
        </div>
        <p>
          Damiane é a personagem jogável mais ágil de Crimson Desert. Ela aparece em seções específicas da campanha de Kliff e tem um estilo de jogo radicalmente diferente: enquanto Kliff usa força bruta e versatilidade, Damiane depende de <strong>velocidade, evasão e golpes precisos</strong>. Sua curva de aprendizado é mais íngreme, mas recompensa jogadores que dominam o timing.
        </p>
        <p>
          As seções com Damiane são frequentemente comparadas a jogos como Sekiro pelos críticos — exigem posicionamento e ritmo, mas com um estilo visual mais fluido e acrobático do que o combate pesado de Kliff.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Oongka — O Tanque Devastador
        </h2>
        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-6">
          <div className="flex-1">
            <h3 className="font-bold text-geek text-lg mb-1">Oongka</h3>
            <p className="text-sm text-muted-foreground mb-3">Greymane · Tanque · Ataques de área devastadores</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="font-bold">Tipo:</span> Tanque / área</div>
              <div><span className="font-bold">Arma:</span> Armas pesadas / ataques amplos</div>
              <div><span className="font-bold">Especialidade:</span> Controle de grupos</div>
              <div><span className="font-bold">Dificuldade:</span> ★★☆☆☆</div>
            </div>
          </div>
        </div>
        <p>
          Oongka é o personagem mais "tanky" dos três — descrito pela equipe da Fextralife como aquele que "desfere ataques amplos e devastadores". Ele é ideal para situações com múltiplos inimigos, onde sua cobertura de área limpa grupos de forma eficiente. Em troca, é mais lento que Kliff e Damiane, exigindo um estilo de jogo mais paciente.
        </p>
        <p>
          As seções com Oongka são geralmente associadas a batalhas em larga escala — encontros onde há muitos inimigos simultâneos e o controle de área é mais valioso do que velocidade ou versatilidade.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-geek" />
          Os Greymanes: O Núcleo Emocional do Jogo
        </h2>
        <p>
          A história gira em torno da reconstrução dos Greymanes após um massacre promovido pelos Black Bears — um grupo mercenário rival. Além dos 3 personagens jogáveis, Kliff busca reunir os membros sobreviventes: <strong>Yann</strong> e <strong>Naira</strong> são companheiros centrais na narrativa, embora não sejam controláveis pelo jogador.
        </p>
        <p>
          O Game Informer notou que "o único núcleo emocional verdadeiro do jogo está na reunião dos Greymanes" — sendo as missões relacionadas a isso as mais bem desenvolvidas narrativamente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Dicas para Cada Personagem
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { char: "Kliff", dica: "Invista cedo em Abyss Artifacts que melhoram cura e stamina. O sistema de culinária é essencial — prepare alimentos antes de cada boss. Aprenda habilidades observando inimigos no início do jogo, antes de avançar para áreas difíceis.", cor: "border-blue-500/30 bg-blue-500/5" },
            { char: "Damiane", dica: "Foque em dominar o timing de evasão antes de tentar combos longos. Ela tem menos saúde que Kliff, então a previsão de ataques inimigos é fundamental. Use o ambiente para reposicionamento rápido.", cor: "border-green-500/30 bg-green-500/5" },
            { char: "Oongka", dica: "Posicione-se no centro de grupos inimigos para maximizar o dano de área. Não tente evadir como Kliff — Oongka é projetado para absorver e contra-atacar. Priorize habilidades de knockdown para controlar o campo.", cor: "border-amber-500/30 bg-amber-500/5" },
          ].map((item) => (
            <div key={item.char} className={`rounded-xl border p-5 ${item.cor}`}>
              <h4 className="font-bold text-geek mb-2">{item.char}</h4>
              <p className="text-sm text-muted-foreground mb-0">{item.dica}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Os três personagens jogáveis de Crimson Desert oferecem estilos bem distintos que mantêm o jogo variado ao longo das 40-50 horas da campanha. Kliff é o mais completo para a maioria dos jogadores, mas as seções com Damiane e Oongka são momentos bem-vindos de variedade. A Pearl Abyss indicou que atualizações pós-lançamento podem expandir as seções jogáveis com esses personagens.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual personagem você mais gostou de jogar? 🗡️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-personagens-kliff-damiane-oongka" />
      <CommentSection postId="crimson-desert-personagens-kliff-damiane-oongka" postTitle="Crimson Desert: Kliff, Damiane e Oongka — Guia dos 3 Personagens Jogáveis" />
    </article>
  );
};

export default CrimsonDesertPersonagens;
