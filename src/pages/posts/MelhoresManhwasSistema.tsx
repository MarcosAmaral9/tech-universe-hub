import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { ArrowLeft, Clock, Calendar, User, Target, Trophy, Gamepad2, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import systemManhwaImg from "@/assets/system-manhwa-hero.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const MelhoresManhwasSistema = () => {
  const manhwas = [
    {
      rank: 1,
      title: "Solo Leveling",
      sinopse: "Sung Jin-Woo é o caçador mais fraco da humanidade até receber um sistema misterioso que lhe permite evoluir infinitamente, tornando-se o caçador mais poderoso do mundo.",
      porqueLer: "Arte impecável, ação intensa, evolução satisfatória",
      status: "Finalizado",
      capitulos: "179 capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 2,
      title: "Omniscient Reader's Viewpoint",
      sinopse: "Kim Dokja é o único leitor que terminou um webnovel de 3.149 capítulos. Quando esse romance se torna realidade apocalíptica, ele é o único que conhece o final.",
      porqueLer: "Enredo genial, metanarrativa única, personagens complexos",
      status: "Finalizado",
      capitulos: "210+ capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 3,
      title: "The Beginning After The End",
      sinopse: "O Rei Grey reencarna como Arthur Leywin em um mundo de magia. Com memórias de sua vida passada como rei guerreiro, ele busca uma segunda chance para viver diferente.",
      porqueLer: "Arte espetacular, worldbuilding rico, desenvolvimento emocional",
      status: "Em lançamento",
      capitulos: "200+ capítulos",
      ondeLer: "Tapas"
    },
    {
      rank: 4,
      title: "Return of the Disaster-Class Hero",
      sinopse: "Um herói traído por seus companheiros retorna 20 anos depois com poder imenso e uma sede de vingança. Agora ele vai acertar as contas com todos que o abandonaram.",
      porqueLer: "Protagonista carismático, humor negro, vingança satisfatória",
      status: "Em lançamento",
      capitulos: "120+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 5,
      title: "Nano Machine",
      sinopse: "Um descendente do futuro injeta nanomáquinas em seu ancestral. Com essa tecnologia avançada, Cheon Yeo-Woon transforma seu destino no brutal mundo das artes marciais.",
      porqueLer: "Fusão sci-fi com murim, sistema inteligente, ação tática",
      status: "Em lançamento",
      capitulos: "190+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 6,
      title: "Second Life Ranker",
      sinopse: "Yeon-Woo descobre que seu irmão gêmeo foi traído e assassinado na misteriosa Torre. Ele decide entrar na Torre para vingar seu irmão e descobrir a verdade.",
      porqueLer: "Sistema de poder interessante, vingança bem executada",
      status: "Em lançamento",
      capitulos: "170+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 7,
      title: "Leveling With The Gods",
      sinopse: "Kim YuWon, um dos maiores rankers da Torre, volta no tempo para antes da catástrofe. Ele conhece todos os segredos e vai usar esse conhecimento a seu favor.",
      porqueLer: "Protagonista estratégico, mitologia rica, power-ups satisfatórios",
      status: "Em lançamento",
      capitulos: "130+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 8,
      title: "Reaper of the Drifting Moon",
      sinopse: "Pyo-Wol é sequestrado e forçado a se tornar um assassino através de treinamento brutal. Após anos de tortura, ele escapa e busca descobrir quem o transformou nisso.",
      porqueLer: "Atmosfera sombria, protagonista calculista, murim realista",
      status: "Em lançamento",
      capitulos: "110+ capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 9,
      title: "I Grow Stronger By Eating",
      sinopse: "Kim Sihoon ganha a habilidade única de ficar mais forte comendo monstros. Quanto mais raro e poderoso o monstro, mais poder ele absorve para si.",
      porqueLer: "Conceito único e divertido, humor leve, evolução constante",
      status: "Em lançamento",
      capitulos: "100+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 10,
      title: "Player Who Can't Level Up",
      sinopse: "Kim GiGyu se tornou um Player, mas descobriu que não consegue subir de nível como os outros. Anos depois, ele desbloqueia um poder único que muda absolutamente tudo.",
      porqueLer: "Reviravolta interessante, sistema único, ação sólida",
      status: "Finalizado",
      capitulos: "150+ capítulos",
      ondeLer: "Webtoon, Tapas"
    }
  ];


  useEffect(() => {
    trackArticleRead("10-melhores-manhwas-sistema-2026", "Os 10 melhores Manhwas de \'Sistema\' para ler em 2026", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Ranking
          </span>
        </div>
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os 10 Melhores Manhwas de Sistema Para Ler em 2026: Ranking Definitivo
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            27 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async"
          src={systemManhwaImg}
          alt="Melhores Manhwas de Sistema 2026 - Solo Leveling e mais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Os manhwas de <strong>"Sistema"</strong> são aqueles onde o protagonista enxerga janelas 
          de status, níveis, habilidades e missões – como em um videogame RPG! Esse gênero explodiu 
          após o sucesso massivo de <strong>Solo Leveling</strong>, e desde então dezenas de obras 
          incríveis surgiram.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-otaku/10 to-background rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-otaku" />
            O Que Define um Manhwa de Sistema?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>✓ <strong>Status Window:</strong> Janela mostrando atributos do personagem</div>
            <div>✓ <strong>Níveis:</strong> Progressão numérica de poder</div>
            <div>✓ <strong>Missões/Quests:</strong> Objetivos que concedem recompensas</div>
            <div>✓ <strong>Skills:</strong> Habilidades que podem ser desbloqueadas</div>
            <div>✓ <strong>Inventário:</strong> Sistema de itens e equipamentos</div>
            <div>✓ <strong>Evolução:</strong> Protagonista fica progressivamente mais forte</div>
          </div>
        </div>

        <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border-l-4 border-primary">
          <p className="text-xl font-semibold m-0 flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            Esta lista contém obras finalizadas e outras em lançamento que prometem ser os próximos grandes hits!
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trophy className="h-7 w-7 text-yellow-400" />
          O Ranking Definitivo
        </h2>

        <div className="space-y-6 my-8">
          {manhwas.map((manhwa) => (
            <div 
              key={manhwa.rank} 
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${
                  manhwa.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                  manhwa.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                  manhwa.rank === 3 ? 'bg-amber-600/20 text-amber-600' :
                  'bg-muted text-muted-foreground'
                }`}>
                  #{manhwa.rank}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{manhwa.title}</h3>
                    {manhwa.rank <= 3 && (
                      <Star className={`h-5 w-5 ${
                        manhwa.rank === 1 ? 'text-yellow-400 fill-yellow-400' :
                        manhwa.rank === 2 ? 'text-gray-400 fill-gray-400' :
                        'text-amber-600 fill-amber-600'
                      }`} />
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{manhwa.sinopse}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground block">Por que ler:</span>
                      <span className="font-medium">{manhwa.porqueLer}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Status:</span>
                      <span className={`font-medium ${
                        manhwa.status === "Finalizado" ? "text-invest" : "text-primary"
                      }`}>
                        {manhwa.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Capítulos:</span>
                      <span className="font-medium">{manhwa.capitulos}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Onde ler:</span>
                      <span className="font-medium">{manhwa.ondeLer}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <AdLeaderboard className="my-8" />

        
<h2 className="text-2xl font-bold mt-10 mb-6">Por Onde Começar?</h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-yellow-500/30">
            <h4 className="font-bold mb-2 text-yellow-400">🏆 O Clássico Obrigatório</h4>
            <p className="text-sm text-muted-foreground">
              Comece por <strong>Solo Leveling</strong>. É o padrão ouro do gênero e definiu 
              o que esperamos de manhwas de sistema.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-primary/30">
            <h4 className="font-bold mb-2 text-primary">📚 Para Histórias Profundas</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Omniscient Reader's Viewpoint</strong> oferece a narrativa mais complexa 
              e inteligente do gênero.
            </p>
          </div>
      <AdInArticle />
          <div className="p-5 bg-card rounded-xl border border-accent/30">
            <h4 className="font-bold mb-2 text-accent">⚔️ Para Artes Marciais</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Nano Machine</strong> combina tecnologia futurista com o mundo murim 
              de forma brilhante.
            </p>
          </div>
        </div>
      </div>

            
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127918;</span>
          O Que é o "Sistema" no Manhwa: A Mecânica que Dominou o Gênero
        </h2>
        <p>
          O "sistema" em manhwas de sistema refere-se a uma interface de progressão visível — semelhante aos menus de um RPG — que o protagonista (e apenas ele, na maioria dos títulos) consegue ver e usar. Notificações aparecem no campo de visão do personagem: "[Nível Aumentado]", "[Nova Habilidade Adquirida]", "[Quest Disponível]". Esse dispositivo narrativo cumpre duas funções simultâneas: mostrar ao leitor a progressão de poder de forma visual e concreta, e criar um senso de gamificação que ativa os mesmos mecanismos de satisfação dos jogos de RPG.
        </p>
        <p>
          A origem do tropo "sistema" em manhwa tem raízes no gênero de "web novel" chinesa (especialmente o Wuxia moderno), mas a forma webtoon coreana o aperfeiçoou visualmente. O scroll vertical do webtoon permite revelar uma notificação de sistema como uma virada dramática — o leitor desce na tela e encontra a interface de status no momento exato de impacto máximo. Essa coordenação entre narrativa e formato de leitura é um dos motivos pelos quais manhwas de sistema funcionam melhor na tela do que impressos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128218;</span>
          Guia de Entrada: Os 5 Melhores Manhwas de Sistema para Começar
        </h2>
        <p>
          <strong>Solo Leveling</strong> (Chugong / DUBU, Kakao — finalizado, 179 capítulos): o ponto de entrada obrigatório. Sung Jinwoo parte do mais fraco caçador para o mais forte do mundo. Arte de DUBU é referência absoluta em manhwa de ação. Anime pela A-1 Pictures disponível na Crunchyroll. <strong>Omniscient Reader's Viewpoint</strong> (Sing N Song, Kakao — finalizado, 551 capítulos): considerado por muitos leitores o melhor manhwa em construção narrativa — Kim Dokja é o único leitor de um webnovel que se torna realidade. Metanarrativa sobre leitura e heroísmo que transcende o subgênero.
        </p>
        <p>
          <strong>The Beginning After the End</strong> (TurtleMe, Tapas — em andamento): reencarnação de um rei poderoso como bebê num mundo de magia. Um dos manhwas mais lidos do Tapas, com mais de 170 capítulos e arte que evoluiu substancialmente ao longo da serialização. <strong>Leveling With The Gods</strong> (Ro Yun, KakaoPage — em andamento): Kim YuWoo regride ao passado para evitar o Ragnarok. Sistema de Tower of God misturado com mitologia nórdica e grega. <strong>Second Life Ranker</strong> (Nong Nong, KakaoPage — em andamento): Yeon-woo descobre o diário do irmão morto e entra na Torre para se vingar. Progressão de poder bem calculada e sistema de habilidades diversificado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127760;</span>
          Onde Ler Manhwas de Sistema Legalmente no Brasil
        </h2>
        <p>
          A plataforma <strong>Webtoon</strong> (webtoons.com — app gratuito) tem o maior catálogo de manhwa com suporte parcial em português e modelo freemium que permite acesso à maioria dos títulos sem pagamento. O <strong>Tapas</strong> (tapas.io) tem catálogo complementar com alguns títulos exclusivos como The Beginning After the End. O <strong>KakaoPage</strong> e o <strong>Kakao Webtoon</strong> têm o maior catálogo em coreano mas com seleção crescente em inglês — necessário para acessar títulos como Solo Leveling na plataforma original.
        </p>
        <p>
          Para o público brasileiro que prefere português, scanlations em PT-BR de vários manhwas de sistema estão disponíveis no <strong>MangaDex</strong> feitas por grupos de tradução voluntária. Alguns títulos como Solo Leveling têm edição física em português pela <strong>Panini</strong> — os volumes físicos têm qualidade de impressão excelente e são uma forma de apoiar a publicação oficial no Brasil. A chegada do anime de Solo Leveling acelerou o interesse das editoras brasileiras em manhwa, e é provável que mais títulos do subgênero ganhem edições nacionais até 2027.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: o manhwa de sistema popularizou algo que o mangá nunca soube fazer bem">
        <p>
          O subgênero manhwa de sistema — protagonista que recebe uma interface de jogo visível com stats, níveis e habilidades — é uma criação essencialmente coreana que influenciou o isekai japonês de forma profunda a partir de 2019. <strong>Solo Leveling</strong> de Chugong, com arte de DUBU, foi o título que transformou o formato de nicho em fenômeno global: o manhwa acumulou mais de 14,4 bilhões de visualizações na plataforma Kakao antes do encerramento em dezembro de 2021. O anime da A-1 Pictures em 2024 e o filme ReAwakening (novembro de 2024) consolidaram a franquia internacionalmente.
        </p>
        <p>
          O que o manhwa de sistema faz melhor do que o isekai japonês de level-up é <strong>a visualização do progresso</strong>. As interfaces de jogo em full color, com fontes estilizadas e efeitos visuais que representam a evolução do personagem, são pensadas para o formato webtoon scroll — cada tela do smartphone é uma revelação cinematográfica. Títulos como <strong>Omniscient Reader's Viewpoint</strong> e <strong>The Beginning After the End</strong> levam essa linguagem visual além do simples level-up e criam sistemas narrativos onde o próprio formato do manhwa é parte da experiência.
        </p>
      </EditorialTake>

            <ArticleSources category="otaku"
        sources={[
          {
            title: "Webtoon (Naver) — Catálogo Oficial PT-BR",
            url: "https://www.webtoons.com/pt/",
            publisher: "Webtoon (Naver)",
            accessedAt: "Maio 2026"
          },
          {
            title: "Tappytoon — Catálogo PT-BR",
            url: "https://www.tappytoon.com/pt",
            publisher: "Tappytoon",
            accessedAt: "Maio 2026"
          },
          {
            title: "Kakao Page — Webtoons & Web Novels",
            url: "https://page.kakao.com/",
            publisher: "Kakao Page",
            accessedAt: "Maio 2026"
          },
          {
            title: "Anime News Network — Solo Leveling",
            url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=27987",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          },
          {
            title: "Naver Financial Reports 2025",
            url: "https://www.navercorp.com/en/investment/businessReport",
            publisher: "Naver Financial Reports 2025",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="10-melhores-manhwas-sistema-2026" />
      <CommentSection postId="10-melhores-manhwas-sistema-2026" postTitle="Os 10 melhores Manhwas de \'Sistema\' para ler em 2026"  category="otaku" />
    </article>
  );
};

export default MelhoresManhwasSistema;