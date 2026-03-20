import { Link } from "react-router-dom";
import BackNavigation from "@/components/BackNavigation";
import { ArrowLeft } from "lucide-react";
import acPortalImg from "@/assets/assassins-creed-portal.webp";
import acShadowsImg from "@/assets/ac-shadows.webp";
import acMirageImg from "@/assets/ac-mirage.webp";
import acValhallaImg from "@/assets/ac-valhalla.webp";
import acOdysseyImg from "@/assets/ac-odyssey.webp";
import acOriginsImg from "@/assets/ac-origins.webp";
import acSyndicateImg from "@/assets/ac-syndicate.webp";
import acUnityImg from "@/assets/ac-unity.webp";
import acRogueImg from "@/assets/ac-rogue.webp";
import acBlackFlagImg from "@/assets/ac-black-flag.webp";
import ac3Img from "@/assets/ac-3.webp";

const AssassinsCreedPortal = () => {
  const games = [
    { slug: "ac-shadows-japao-feudal", title: "AC Shadows", subtitle: "Japão Feudal (2025)", desc: "O aguardado cenário japonês com Naoe e Yasuke.", image: acShadowsImg },
    { slug: "ac-mirage-retorno-raizes-bagda", title: "AC Mirage", subtitle: "Bagdá (2023)", desc: "Retorno às raízes da furtividade clássica.", image: acMirageImg },
    { slug: "ac-valhalla-jornada-epica-eivor", title: "AC Valhalla", subtitle: "Era Viking (2020)", desc: "A jornada épica de Eivor na Inglaterra.", image: acValhallaImg },
    { slug: "ac-odyssey-odisseia-grecia", title: "AC Odyssey", subtitle: "Grécia Antiga (2018)", desc: "RPG épico com Kassandra e mitologia grega.", image: acOdysseyImg },
    { slug: "ac-origins-renascimento-franquia-egito", title: "AC Origins", subtitle: "Egito Antigo (2017)", desc: "A origem da irmandade com Bayek.", image: acOriginsImg },
    { slug: "ac-syndicate-revolucao-industrial-londres", title: "AC Syndicate", subtitle: "Londres Vitoriana (2015)", desc: "Os irmãos Frye na Revolução Industrial.", image: acSyndicateImg },
    { slug: "ac-unity-jogo-frente-tempo-paris", title: "AC Unity", subtitle: "Revolução Francesa (2014)", desc: "A obra-prima técnica em Paris.", image: acUnityImg },
    { slug: "ac-rogue-assassino-templario", title: "AC Rogue", subtitle: "Atlântico Norte (2014)", desc: "Jogue como Templário pela primeira vez.", image: acRogueImg },
    { slug: "ac-black-flag-melhor-jogo-piratas", title: "AC IV: Black Flag", subtitle: "Era dos Piratas (2013)", desc: "O melhor jogo de piratas já feito.", image: acBlackFlagImg },
    { slug: "ac-3-remastered-revolucao-americana", title: "AC III Remastered", subtitle: "Revolução Americana (2012)", desc: "Connor Kenway entre dois mundos.", image: ac3Img },
  ];

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <BackNavigation category="geek" />

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[21/9]">
        <img fetchpriority="high" src={acPortalImg} alt="Assassin's Creed Portal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">Portal Assassin's Creed</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore toda a saga dos Assassinos: das ruas de Bagdá ao Japão Feudal, passando pelo Egito, Grécia e além.
          </p>
        </div>
      </div>

      {/* Ranking Link */}
      <div className="mb-12 p-6 bg-gradient-to-br from-purple-500/20 to-background rounded-xl border border-purple-500/30">
        <h3 className="text-xl font-bold mb-2">🏆 Qual o Melhor Assassin's Creed?</h3>
        <p className="text-muted-foreground mb-4">Confira nosso ranking definitivo com todos os jogos da franquia para 2026.</p>
        <Link to="/post/ranking-melhor-assassins-creed-2026" className="text-purple-400 hover:underline font-medium">
          Ver Ranking Completo →
        </Link>
      </div>

      {/* Games Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Todos os Jogos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link key={game.slug} to={`/post/${game.slug}`} className="group bg-card rounded-xl border border-border overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={game.image} alt={game.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{game.title}</h3>
                <p className="text-sm text-purple-400 mb-2">{game.subtitle}</p>
                <p className="text-sm text-muted-foreground">{game.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssassinsCreedPortal;
