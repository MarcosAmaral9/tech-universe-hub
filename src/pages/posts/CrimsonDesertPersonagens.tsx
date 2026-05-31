import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, Shield, Wand2, Crown, Users, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import personagensImg from "@/assets/crimson-desert-personagens.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CrimsonDesertPersonagens = () => {
  useEffect(() => {
    trackArticleRead(
      "crimson-desert-personagens-kliff-damiane-oongka",
      "Crimson Desert: Kliff, Damiane e Oongka — Guia dos 3 Personagens Jogáveis",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation
        category="geek"
        portalPath="/geek/crimson-desert"
        portalLabel="Painel Crimson Desert"
      />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Crimson Desert · Personagens
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Kliff, Damiane e Oongka — Guia dos 3 Personagens Jogáveis
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            4 de Abril, 2026 · Atualizado em 24 de Abril, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            11 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="04 de Abril, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={personagensImg}
          alt="Crimson Desert personagens jogáveis Kliff, Damiane e Oongka — guia completo"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em <strong>Crimson Desert</strong>, os <strong>personagens jogáveis</strong> não são
          escolhidos em um menu — eles aparecem em momentos específicos da campanha dos Greymanes.
          Kliff é o protagonista, mas Damiane e Oongka assumem o controle em arcos próprios e
          mudam totalmente o ritmo do combate. Este guia destrincha os três <strong>personagens
          jogáveis de Crimson Desert</strong>, suas habilidades, papel narrativo e o estilo de
          jogo ideal para cada um.
        </p>

        <div className="not-prose my-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Atualizado (24/04/2026):</strong> o Patch
            1.03.00 expandiu habilidades de Damiane (incluindo a arma exclusiva{" "}
            <em>Sword of Starlight</em>) e Oongka (novos galhos de árvore utilizáveis em
            combate). O Patch 1.04.00 (22/04) adicionou modos Easy/Normal/Hard, que valem para
            os três personagens jogáveis.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-red-400" />
          Quantos personagens jogáveis Crimson Desert tem?
        </h2>
        <p>
          Crimson Desert tem <strong>3 personagens jogáveis</strong> no lançamento: Kliff
          (protagonista, presente em ~80% da campanha), Damiane (ágil, focada em velocidade e
          esquiva) e Oongka (tanque, especialista em controle de área). Eles não são
          intercambiáveis livremente — você assume o controle de cada um em capítulos
          específicos da história dos Greymanes, e o jogo informa quando a troca acontece.
        </p>
        <p>
          A escolha de design da <strong>Pearl Abyss</strong> foi inspirada em jogos como{" "}
          <em>The Witcher 3</em> e <em>Final Fantasy XV</em>, onde a quebra de POV serve para
          contar a história sob outro ponto de vista. Os três personagens compartilham o
          progresso de <strong>Abyss Artifacts</strong> (recursos de habilidade), então não há
          punição por especializar Kliff antes de desbloquear Damiane e Oongka.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Kliff — O Protagonista Versátil dos Greymanes
        </h2>
        <p>
          <strong>Kliff</strong> é um mercenário membro dos <strong>Greymanes</strong> e o
          personagem que você controla na maior parte de Crimson Desert. Sua característica
          central é a <strong>versatilidade</strong>: ele pode equipar espadas de uma mão, armas
          de duas mãos, cajados, escudos e arcos, e o sistema de habilidades recompensa
          especialização gradual em qualquer combinação.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
            <h3 className="font-bold text-red-400 mb-2">Pontos fortes</h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• Maior pool de habilidades do jogo</li>
              <li>• Pode aprender movimentos observando NPCs e inimigos</li>
              <li>• Equilíbrio entre dano, defesa e mobilidade</li>
              <li>• Acesso completo a Crow Wings (planador) e montarias</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h3 className="font-bold text-amber-400 mb-2">Pontos fracos</h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• Não é o melhor em nenhuma especialidade pura</li>
              <li>• Stamina drena rápido com armas pesadas no Hard Mode</li>
              <li>• Algumas habilidades só desbloqueiam após missões secundárias</li>
            </ul>
          </div>
        </div>
        <p>
          <strong>Como Kliff aprende habilidades:</strong> além de gastar Abyss Artifacts em
          uma árvore tradicional, Kliff possui o sistema <em>"watch and learn"</em> — ao
          observar inimigos ou NPCs executando um movimento, ele pode replicá-lo após algumas
          tentativas. É uma mecânica única no gênero e foi elogiada por veículos como IGN e
          GamesRadar+ na cobertura de lançamento.
        </p>
        <p>
          <strong>Build recomendada para iniciantes:</strong> Sword &amp; Shield com foco em
          parry. Combinada com a habilidade <em>Pump Kick</em> aprendida com Matthias no
          Capítulo 1, ela dá margem de erro suficiente para encarar os primeiros bosses sem
          precisar de farm.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wand2 className="h-7 w-7 text-red-400" />
          Damiane — A Ágil Espadachim dos Vael
        </h2>
        <p>
          <strong>Damiane</strong> é uma espadachim da casa <strong>Vael</strong> que entra no
          jogo durante o arco de Pailune. Seu estilo de combate é o oposto de Kliff: nada de
          armadura pesada e ataques carregados. Damiane depende de <strong>velocidade,
          esquivas perfeitas e janelas curtas de contra-ataque</strong>. Em mãos boas, ela é
          o personagem mais letal do jogo.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
            <h3 className="font-bold text-purple-400 mb-2">Habilidades-chave</h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• <em>Shadowstep</em> — dash longo com i-frames generosos</li>
              <li>• <em>Crescent Riposte</em> — contra-ataque após parry perfeito</li>
              <li>• <em>Sword of Starlight</em> (Patch 1.03.00) — arma exclusiva</li>
              <li>• <em>Golden Vanguard</em> — herdada do boss Gregor</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="font-bold text-blue-400 mb-2">Quando você joga com ela</h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• Arco de Pailune (Capítulos 4–6)</li>
              <li>• Duelo obrigatório contra Lucian Bastier</li>
              <li>• Missões opcionais da Vael House em Demeniss</li>
            </ul>
          </div>
        </div>
        <p>
          <strong>Curva de aprendizado:</strong> Damiane é o personagem mais difícil para
          jogadores casuais. Bloquear ataques pesados drena sua stamina rapidamente, e seu
          dano por golpe é menor — o jogo recompensa quem encadeia 4–5 ataques após cada
          esquiva. No <strong>Hard Mode</strong>, esse estilo exige memorização dos padrões
          de boss, mas no Easy Mode (Patch 1.04.00) Damiane se torna o personagem mais
          divertido da campanha graças às janelas de parry aumentadas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Oongka — O Tanque Berserker dos Stahlhart
        </h2>
        <p>
          <strong>Oongka</strong> é um guerreiro brutamontes ligado à facção{" "}
          <strong>Stahlhart</strong> e tem o moveset mais simples — e mais satisfatório — dos
          três personagens jogáveis. Onde Kliff é equilibrado e Damiane é cirúrgica, Oongka é{" "}
          <strong>poder bruto</strong>: machados de duas mãos, controle de área, super-armadura
          frequente e capacidade de absorver dano que mataria Kliff em dois golpes.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Combate",
              c: "border-red-500/30 bg-red-500/5",
              d:
                "Ataques pesados com hyper-armor, agarrões que ignoram bloqueio, controle de turba com galhos arrancados de árvores (Patch 1.03.00).",
            },
            {
              t: "Defesa",
              c: "border-green-500/30 bg-green-500/5",
              d:
                "HP base 35% maior que Kliff. Pode bloquear ataques imbloqueáveis com a habilidade Iron Stance. Cura por consumíveis 20% mais eficiente.",
            },
            {
              t: "Mobilidade",
              c: "border-amber-500/30 bg-amber-500/5",
              d:
                "Lento — não usa Crow Wings. Compensa com a montaria Rock Tusk Warthog e investidas que derrubam grupos inteiros de inimigos.",
            },
          ].map((b) => (
            <div key={b.t} className={`rounded-xl border p-4 ${b.c}`}>
              <h3 className="font-bold mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground mb-0">{b.d}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>Quando você joga com ele:</strong> Oongka aparece pela primeira vez no arco
          de Demeniss e retorna em missões específicas de defesa de acampamentos. É o
          personagem ideal para os <strong>World Bosses cooperativos</strong> e para a
          sequência de defesa em <em>Hernand Castle</em>, onde a alta vida e o controle de área
          são mais valiosos do que mobilidade.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-red-400" />
          Comparativo Rápido — Qual Personagem Combina com Você?
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Critério</th>
                <th className="text-left py-3 px-4 text-red-400">Kliff</th>
                <th className="text-left py-3 px-4 text-purple-400">Damiane</th>
                <th className="text-left py-3 px-4 text-amber-400">Oongka</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dano por golpe", "Médio", "Baixo (combos altos)", "Alto"],
                ["HP base", "100%", "85%", "135%"],
                ["Velocidade", "Média", "Alta", "Baixa"],
                ["Curva de aprendizado", "Fácil", "Difícil", "Fácil"],
                ["Melhor para", "Campanha principal", "Bosses humanoides 1v1", "World Bosses e turbas"],
                ["Inspiração de gameplay", "Witcher 3 + Dark Souls", "Sekiro + Lies of P", "God of War + Berserker"],
              ].map(([a, b, c, d]) => (
                <tr key={a} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{a}</td>
                  <td className="py-3 px-4 text-xs">{b}</td>
                  <td className="py-3 px-4 text-xs">{c}</td>
                  <td className="py-3 px-4 text-xs">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-red-400" />
          Como Funciona o Progresso Compartilhado
        </h2>
        <p>
          Os <strong>Abyss Artifacts</strong> que você acumula como Kliff são partilhados com
          Damiane e Oongka — então não há motivo para “guardar” recursos antes deles
          aparecerem. Cada personagem tem sua própria árvore de habilidades, mas o pool de
          pontos é único. O equipamento, por outro lado, é <em>exclusivo</em> de cada
          personagem: a Sword of Starlight só pode ser equipada por Damiane, o machado
          Berserker’s Cleave só por Oongka.
        </p>
        <p>
          Dica prática verificada na comunidade: complete pelo menos uma missão secundária da
          Vael House antes do duelo com Lucian Bastier — você desbloqueia a Golden Vanguard
          cedo e a luta deixa de ser o muro de dificuldade que foi descrito por <em>PC
          Gamer</em> e <em>TheGamer</em> no lançamento.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual dos 3 personagens é o seu favorito? ⚔️</h3>
          <p className="text-muted-foreground">
            Kliff, Damiane ou Oongka? Conta nos comentários abaixo qual estilo combina mais
            com você. 👇
          </p>
        </div>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: a troca de POV salva o ritmo">
        <p>
          A decisão da Pearl Abyss de dividir o controle entre <strong>3 personagens
          jogáveis</strong> é, na minha leitura, a melhor escolha de design de Crimson Desert.
          A campanha de 80+ horas inevitavelmente cansaria se fosse apenas Kliff e seu moveset
          gigantesco — Damiane e Oongka funcionam como “reset” mecânico, forçando o jogador a
          reaprender ritmo de combate exatamente quando o tédio começaria a aparecer. Para
          quem vem de <em>Witcher 3</em>, a comparação inevitável é com Ciri: as seções dela
          eram raras e curtas. Em Crimson Desert, Damiane e Oongka têm peso real. Minha
          recomendação prática: jogue no Hard Mode com Kliff e mude para Normal nos arcos de
          Damiane e Oongka — você aproveita melhor o que cada um foi desenhado para fazer.
        </p>
      </EditorialTake>

      <ArticleSources category="geek"
        sources={[
          {
            title: "Crimson Desert — Site oficial Pearl Abyss",
            url: "https://www.crimsondesert.com/",
            publisher: "Pearl Abyss",
            accessedAt: "Maio 2026",
          },
          {
            title: "Crimson Desert — Análise IGN",
            url: "https://www.ign.com/games/crimson-desert",
            publisher: "IGN",
            accessedAt: "Maio 2026",
          },
          {
            title: "Crimson Desert review — GamesRadar+",
            url: "https://www.gamesradar.com/games/action-rpg/crimson-desert-review/",
            publisher: "GamesRadar+",
            accessedAt: "Maio 2026",
          },
          {
            title: "Crimson Desert no Steam — patch notes e atualizações",
            url: "https://store.steampowered.com/app/1591310/Crimson_Desert/",
            publisher: "Steam",
            accessedAt: "Maio 2026",
          },
          {
            title: "Crimson Desert preview e impressões — PC Gamer",
            url: "https://www.pcgamer.com/games/rpg/crimson-desert/",
            publisher: "PC Gamer",
            accessedAt: "Maio 2026",
          },
        ]}
      />
<RelatedPosts currentSlug="crimson-desert-personagens-kliff-damiane-oongka" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection
        postId="crimson-desert-personagens-kliff-damiane-oongka"
        postTitle="Crimson Desert: Kliff, Damiane e Oongka — Guia dos 3 Personagens Jogáveis"
      />
    </article>
  );
};

export default CrimsonDesertPersonagens;
