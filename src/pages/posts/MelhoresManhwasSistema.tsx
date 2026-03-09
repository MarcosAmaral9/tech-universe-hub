import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, Target, Trophy, Gamepad2, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import systemManhwaImg from "@/assets/system-manhwa-hero.webp";

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

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/otaku"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

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
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
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
          <div className="p-5 bg-card rounded-xl border border-accent/30">
            <h4 className="font-bold mb-2 text-accent">⚔️ Para Artes Marciais</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Nano Machine</strong> combina tecnologia futurista com o mundo murim 
              de forma brilhante.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual desses é o seu favorito? Esqueci de algum?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente qual manhwa de sistema você mais gosta e nos indica 
            outros que deveriam estar na lista! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="10-melhores-manhwas-sistema-2026" />
      <CommentSection postId="10-melhores-manhwas-sistema-2026" />
    </article>
  );
};

export default MelhoresManhwasSistema;
