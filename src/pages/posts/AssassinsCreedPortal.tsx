import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import acPortalImg from "@/assets/assassins-creed-portal.jpg";

const AssassinsCreedPortal = () => {
  const games = [
    { slug: "ac-shadows-japao-feudal", title: "AC Shadows", subtitle: "Japão Feudal (2025)", desc: "O aguardado cenário japonês com Naoe e Yasuke." },
    { slug: "ac-mirage-retorno-raizes-bagda", title: "AC Mirage", subtitle: "Bagdá (2023)", desc: "Retorno às raízes da furtividade clássica." },
    { slug: "ac-valhalla-jornada-epica-eivor", title: "AC Valhalla", subtitle: "Era Viking (2020)", desc: "A jornada épica de Eivor na Inglaterra." },
    { slug: "ac-odyssey-odisseia-grecia", title: "AC Odyssey", subtitle: "Grécia Antiga (2018)", desc: "RPG épico com Kassandra e mitologia grega." },
    { slug: "ac-origins-renascimento-franquia-egito", title: "AC Origins", subtitle: "Egito Antigo (2017)", desc: "A origem da irmandade com Bayek." },
    { slug: "ac-syndicate-revolucao-industrial-londres", title: "AC Syndicate", subtitle: "Londres Vitoriana (2015)", desc: "Os irmãos Frye na Revolução Industrial." },
    { slug: "ac-unity-jogo-frente-tempo-paris", title: "AC Unity", subtitle: "Revolução Francesa (2014)", desc: "A obra-prima técnica em Paris." },
    { slug: "ac-black-flag-melhor-jogo-piratas", title: "AC IV: Black Flag", subtitle: "Era dos Piratas (2013)", desc: "O melhor jogo de piratas já feito." },
    { slug: "ac-3-remastered-revolucao-americana", title: "AC III Remastered", subtitle: "Revolução Americana (2012)", desc: "Connor Kenway entre dois mundos." },
  ];

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <Link to="/geek" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar para Geek
      </Link>

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[21/9]">
        <img src={acPortalImg} alt="Assassin's Creed Portal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Portal Assassin's Creed</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore toda a saga dos Assassinos: das ruas de Bagdá ao Japão Feudal, passando pelo Egito, Grécia e além.
          </p>
        </div>
      </div>

      {/* Games Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Todos os Jogos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link key={game.slug} to={`/post/${game.slug}`} className="group bg-card rounded-xl border border-border p-6 hover:border-purple-500/50 transition-all">
              <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{game.title}</h3>
              <p className="text-sm text-purple-400 mb-2">{game.subtitle}</p>
              <p className="text-sm text-muted-foreground">{game.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssassinsCreedPortal;