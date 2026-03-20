import FeaturedCarousel from "@/components/FeaturedCarousel";
import PostCard from "@/components/PostCard";
import { lazy, Suspense } from "react";
const SocialSection = lazy(() => import("@/components/SocialSection"));
import { blogPosts, getPostsByCategory } from "@/data/posts";
import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";

const Index = () => {
  const categoryCounts = {
    ia: getPostsByCategory("ia").length,
    invest: getPostsByCategory("invest").length,
    geek: getPostsByCategory("geek").length,
    otaku: getPostsByCategory("otaku").length,
  };

  const categories = [
    { id: "ia", name: "Inteligência Artificial", color: "text-ia", bgColor: "bg-ia/10", borderColor: "border-ia" },
    { id: "invest", name: "Finanças", color: "text-invest", bgColor: "bg-invest/10", borderColor: "border-invest" },
    { id: "geek", name: "Mundo Geek", color: "text-geek", bgColor: "bg-geek/10", borderColor: "border-geek" },
    { id: "otaku", name: "Mundo Otaku", color: "text-otaku", bgColor: "bg-otaku/10", borderColor: "border-otaku" },
  ];

  return (
    <>
      <DynamicSEO />
      <>
      {/* Hero Carousel */}
      <FeaturedCarousel />

      {/* Categories Section */}
      <section className="container py-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
          Explore por <span className="text-gradient">Categoria</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/${cat.id === "ia" ? "ia" : cat.id === "invest" ? "financas" : cat.id}`}
              className={`p-6 rounded-xl border-2 ${cat.borderColor} ${cat.bgColor} hover:scale-105 transition-all duration-300 text-center card-hover`}
            >
              <span className={`font-display font-bold text-lg ${cat.color}`}>
                {cat.name}
              </span>
              <span className="block text-sm text-muted-foreground mt-1">
                {categoryCounts[cat.id as keyof typeof categoryCounts]} artigos
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts - Show 12 latest posts sorted chronologically */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Últimos <span className="text-gradient">Artigos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...blogPosts]
            .sort((a, b) => new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime())
            .slice(0, 12)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </section>

      {/* Social Section with QR Codes */}
      <section className="container py-8">
        <Suspense fallback={null}><SocialSection /></Suspense>
      </section>
    </>
  </>  
  );
};

export default Index;
