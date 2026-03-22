import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import BackNavigation from "@/components/BackNavigation";
import { ArrowLeft } from "lucide-react";
import avatarPortalBannerImg from "@/assets/avatar-portal-banner.webp";
import avatarPandoraImg from "@/assets/avatar-pandora.webp";
import avatarWaterImg from "@/assets/avatar-water-swimming.webp";
import avatarFireImg from "@/assets/avatar-fire.webp";
import avatarGameImg from "@/assets/avatar-game-female.webp";

const AvatarPortal = () => {
  const trilogyCards = [
    { title: "O Início", subtitle: "Avatar (2009)", desc: "O marco zero do 3D e da captura de movimento.", image: avatarPandoraImg, slug: "avatar-2009-filme-revolucionou-tecnologia", btn: "Ver Review" },
    { title: "A Evolução", subtitle: "O Caminho da Água", desc: "A revolução das águas e a nova tribo Metkayina.", image: avatarWaterImg, slug: "avatar-caminho-da-agua-fisica-fluidos", btn: "Ver Review" },
    { title: "O Futuro", subtitle: "Fogo e Cinzas (2025)", desc: "O que esperar da tribo mais sombria de Pandora.", image: avatarFireImg, slug: "avatar-3-fogo-cinzas-lado-sombrio-pandora", btn: "Ver Teoria" },
  ];

  return (
    <div className="min-h-screen">
      <DynamicSEO />
      <BackNavigation category="geek" />

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-aspect-video md:h-[400px] overflow-hidden">
        <img fetchpriority="high" src={avatarPortalBannerImg} alt="Pandora" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container relative h-full flex flex-col justify-end pb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Portal Pandora</h1>
          <p className="text-xl text-white/80 max-w-2xl">Explore o universo de James Cameron, das profundezas do oceano às cinzas dos vulcões.</p>
        </div>
      </section>

      {/* Trilogy Grid */}
      <section className="container py-12">
        <h2 className="font-display text-3xl font-bold mb-8">A Trilogia de James Cameron</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {trilogyCards.map((card) => (
            <div key={card.slug} className="bg-card rounded-xl border border-border overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={card.image} alt={card.subtitle} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-sm text-primary font-medium">{card.title}</span>
                <h3 className="font-display text-xl font-bold mt-1">{card.subtitle}</h3>
                <p className="text-muted-foreground text-sm mt-2">{card.desc}</p>
                <Link to={`/post/${card.slug}`} className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  {card.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Section */}
      <section className="container py-12">
        <div className="bg-gradient-to-br from-green-500/10 to-background rounded-2xl border border-green-500/30 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 aspect-video md:aspect-auto">
              <img src={avatarGameImg} alt="Avatar Frontiers of Pandora" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold mb-4">Viva sua própria jornada em Pandora</h2>
              <p className="text-muted-foreground mb-6">Avatar: Frontiers of Pandora leva os gráficos ao limite tecnológico. Descubra se o seu PC ou Console aguenta essa jornada.</p>
              <Link to="/post/avatar-frontiers-pandora-ubisoft-review" className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors w-fit">
                Análise Técnica do Jogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Comparison Table */}
      <section className="container py-12">
        <h2 className="font-display text-3xl font-bold mb-8">Tecnologia de Captura</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-4 px-6 font-bold">Filme</th>
                <th className="text-left py-4 px-6 font-bold">Principal Inovação</th>
                <th className="text-left py-4 px-6 font-bold">Desafio de Produção</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Avatar 1</td>
                <td className="py-4 px-6 text-muted-foreground">Câmera Virtual em Tempo Real</td>
                <td className="py-4 px-6 text-muted-foreground">Criar o primeiro mundo 100% digital crível</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Avatar 2</td>
                <td className="py-4 px-6 text-muted-foreground">Captura de Performance Subaquática</td>
                <td className="py-4 px-6 text-muted-foreground">Atuar sem respirar por minutos sob a água</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Avatar 3</td>
                <td className="py-4 px-6 text-muted-foreground">Renderização de Fluidos e Partículas (Fogo)</td>
                <td className="py-4 px-6 text-muted-foreground">Simular o comportamento físico de vulcões</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AvatarPortal;
