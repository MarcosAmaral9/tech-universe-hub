import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import crimsonHeroImg from "@/assets/crimson-desert-hero.webp";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";
import crimsonCombateImg from "@/assets/crimson-desert-combate.webp";
import crimsonReviewImg from "@/assets/crimson-desert-review.webp";
import crimsonBuildsImg from "@/assets/crimson-desert-builds.webp";

const CrimsonDesertPanel = () => {
  const articles = [
    {
      slug: "crimson-desert-guia-completo",
      title: "Guia Completo",
      subtitle: "RPG Mais Esperado de 2026",
      desc: "Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss.",
      image: crimsonGuiaImg,
      btn: "Ver Guia",
    },
    {
      slug: "crimson-desert-combate-blackspace-engine",
      title: "Sistema de Combate",
      subtitle: "BlackSpace Engine",
      desc: "Análise aprofundada das mecânicas de combate, chefes épicos, montarias e tecnologia.",
      image: crimsonCombateImg,
      btn: "Ver Análise",
    },
    {
      slug: "crimson-desert-review-2026",
      title: "Review Pós-Lançamento",
      subtitle: "Nota 9.2 — Excepcional",
      desc: "Análise completa após 60+ horas: gameplay, narrativa, performance técnica e veredito final.",
      image: crimsonReviewImg,
      btn: "Ver Review",
    },
    {
      slug: "crimson-desert-builds-guia-2026",
      title: "Guia de Builds",
      subtitle: "As Melhores Combinações",
      desc: "Descubra as builds mais poderosas, árvores de habilidades e combinações elementais para dominar Pywel.",
      image: crimsonBuildsImg,
      btn: "Ver Builds",
    },
  ];

  return (
    <div className="min-h-screen">
      <Link to="/geek" className="container inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mt-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Geek
      </Link>

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img fetchpriority="high" src={crimsonHeroImg} alt="Crimson Desert" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="container relative h-full flex flex-col justify-end pb-12">
          <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Especial · Games</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Crimson Desert</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Tudo sobre o RPG de mundo aberto da Pearl Abyss — história, gameplay, sistema de combate e o que torna Pywel um dos mundos mais ambiciosos de 2026.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponível — 19 de março de 2026
            </span>
            <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">PC · PS5 · Xbox Series X|S</span>
            <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">Pearl Abyss</span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container py-12">
        <h2 className="font-display text-3xl font-bold mb-8">Artigos do Especial</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.slug} className="bg-card rounded-xl border border-border overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-sm text-red-400 font-medium">{article.title}</span>
                <h3 className="font-display text-xl font-bold mt-1">{article.subtitle}</h3>
                <p className="text-muted-foreground text-sm mt-2">{article.desc}</p>
                <Link to={`/post/${article.slug}`} className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  {article.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Info Table */}
      <section className="container py-12">
        <h2 className="font-display text-3xl font-bold mb-8">Ficha Técnica</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-4 px-6 font-bold">Detalhe</th>
                <th className="text-left py-4 px-6 font-bold">Informação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Desenvolvedor</td>
                <td className="py-4 px-6 text-muted-foreground">Pearl Abyss</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Engine</td>
                <td className="py-4 px-6 text-muted-foreground">BlackSpace Engine</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Gênero</td>
                <td className="py-4 px-6 text-muted-foreground">RPG de Ação / Mundo Aberto</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Plataformas</td>
                <td className="py-4 px-6 text-muted-foreground">PC, PS5, Xbox Series X|S, macOS</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Lançamento</td>
                <td className="py-4 px-6 text-muted-foreground">19 de março de 2026</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Mapa</td>
                <td className="py-4 px-6 text-muted-foreground">82 km² — 5 regiões distintas</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-4 px-6 font-medium">Preço</td>
                <td className="py-4 px-6 text-muted-foreground">R$ 249,90 (PC) / R$ 299,90 (Console)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CrimsonDesertPanel;
