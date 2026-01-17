import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";

import systemManhwaImg from "@/assets/system-manhwa-hero.jpg";

const MelhoresManhwasSistema = () => {
  const manhwas = [
    {
      rank: 1,
      title: "Solo Leveling",
      sinopse: "Sung Jin-Woo é o caçador mais fraco da humanidade até receber um sistema misterioso que lhe permite evoluir infinitamente.",
      porqueLer: "Arte impecável, ação intensa, evolução satisfatória do protagonista",
      status: "Finalizado",
      capitulos: "179 capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 2,
      title: "Omniscient Reader's Viewpoint",
      sinopse: "Kim Dokja é o único leitor que terminou um webnovel de 3.149 capítulos. Quando esse romance se torna realidade, ele é o único que conhece o final.",
      porqueLer: "Enredo genial, personagens complexos, metanarrativa única",
      status: "Finalizado",
      capitulos: "210+ capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 3,
      title: "The Beginning After The End",
      sinopse: "O Rei Grey reencarna como Arthur Leywin em um mundo de magia. Com memórias de sua vida passada, ele busca uma nova chance.",
      porqueLer: "Arte espetacular, worldbuilding rico, desenvolvimento emocional profundo",
      status: "Em lançamento",
      capitulos: "200+ capítulos",
      ondeLer: "Tapas"
    },
    {
      rank: 4,
      title: "Return of the Disaster-Class Hero",
      sinopse: "Um herói traído por seus companheiros retorna 20 anos depois com poder imenso para buscar vingança.",
      porqueLer: "Protagonista carismático, humor negro, ação épica",
      status: "Em lançamento",
      capitulos: "120+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 5,
      title: "Nano Machine",
      sinopse: "Um descendente do futuro injeta nanomáquinas em seu ancestral. Com essa tecnologia, Cheon Yeo-Woon transforma seu destino no mundo das artes marciais.",
      porqueLer: "Fusão sci-fi com murim, sistema inteligente, ação tática",
      status: "Em lançamento",
      capitulos: "190+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 6,
      title: "Second Life Ranker",
      sinopse: "Yeon-Woo descobre que seu irmão gêmeo foi traído e morto na Torre. Ele decide entrar na Torre para vingar seu irmão.",
      porqueLer: "Sistema de poder interessante, vingança satisfatória, combates épicos",
      status: "Em lançamento",
      capitulos: "170+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 7,
      title: "Leveling With The Gods",
      sinopse: "Kim YuWon, um dos maiores rankers, volta no tempo para antes da Torre aparecer. Ele conhece todos os segredos e vai usar isso a seu favor.",
      porqueLer: "Protagonista estratégico, mitologia interessante, power-ups satisfatórios",
      status: "Em lançamento",
      capitulos: "130+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 8,
      title: "Reaper of the Drifting Moon",
      sinopse: "Pyo-Wol é sequestrado e forçado a se tornar um assassino. Após anos de treinamento brutal, ele escapa e busca descobrir quem o transformou nisso.",
      porqueLer: "Atmosfera sombria, protagonista calculista, artes marciais realistas",
      status: "Em lançamento",
      capitulos: "110+ capítulos",
      ondeLer: "Webtoon, Tapas"
    },
    {
      rank: 9,
      title: "I Grow Stronger By Eating",
      sinopse: "Kim Sihoon ganha a habilidade de ficar mais forte comendo monstros. Quanto mais raro o monstro, mais poder ele absorve.",
      porqueLer: "Conceito único, humor leve, evolução constante",
      status: "Em lançamento",
      capitulos: "100+ capítulos",
      ondeLer: "Webtoon"
    },
    {
      rank: 10,
      title: "Player Who Can't Level Up",
      sinopse: "Kim GiGyu se tornou um Player, mas descobriu que não pode subir de nível. Anos depois, ele desbloqueia um poder único que muda tudo.",
      porqueLer: "Reviravolta interessante, sistema único, ação sólida",
      status: "Finalizado",
      capitulos: "150+ capítulos",
      ondeLer: "Webtoon, Tapas"
    }
  ];

  return (
    <article className="container max-w-4xl py-8">
      {/* Back button */}
      <Link to="/otaku">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Otaku
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os 10 melhores Manhwas de "Sistema" para ler em 2026
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            MVTECH
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            15 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            8 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={systemManhwaImg}
          alt="Manhwas de Sistema"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introdução */}
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Os manhwas de <strong>"Sistema"</strong> são aqueles onde o protagonista enxerga 
            janelas de status, níveis, habilidades e missões — como em um videogame! 
            Esse gênero explodiu após o sucesso massivo de <strong>Solo Leveling</strong>, 
            e desde então dezenas de obras incríveis surgiram.
          </p>
        </section>

        {/* O Gancho */}
        <section className="mb-10 p-6 bg-gradient-to-r from-otaku/10 to-primary/10 rounded-xl border-l-4 border-primary">
          <p className="text-xl font-semibold text-foreground m-0">
            🎮 Esta lista contém obras finalizadas e outras que estão começando agora e prometem ser o próximo grande hit!
          </p>
        </section>

        {/* Lista de Manhwas */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
            A Lista Definitiva
          </h2>
          
          <div className="space-y-6">
            {manhwas.map((manhwa) => (
              <div key={manhwa.rank} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">#{manhwa.rank}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {manhwa.title}
                    </h3>
                    
                    <p className="text-foreground mb-4">
                      <strong>Sinopse:</strong> {manhwa.sinopse}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground block">Por que ler:</span>
                        <span className="text-foreground font-medium">{manhwa.porqueLer}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Status:</span>
                        <span className={`font-medium ${manhwa.status === "Finalizado" ? "text-invest" : "text-primary"}`}>
                          {manhwa.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Capítulos:</span>
                        <span className="text-foreground font-medium">{manhwa.capitulos}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Onde ler:</span>
                        <span className="text-foreground font-medium">{manhwa.ondeLer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-8 bg-gradient-to-r from-otaku/20 via-primary/20 to-accent/20 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            🗣️ Qual desses é o seu favorito? Esqueci de algum?
          </h3>
          <p className="text-lg text-muted-foreground">
            Comenta aqui embaixo qual manhwa de sistema você mais gosta e me indica 
            outros que você acha que deveriam estar na lista!
          </p>
        </section>
      </div>

      {/* Comments */}
      <CommentSection postId="10-melhores-manhwas-sistema-2026" />
    </article>
  );
};

export default MelhoresManhwasSistema;
