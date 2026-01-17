import FeaturedCarousel from "@/components/FeaturedCarousel";
import PostCard from "@/components/PostCard";
import { blogPosts } from "@/data/posts";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    { id: "ia", name: "Inteligência Artificial", color: "text-ia", bgColor: "bg-ia/10", borderColor: "border-ia" },
    { id: "invest", name: "Investimentos", color: "text-invest", bgColor: "bg-invest/10", borderColor: "border-invest" },
    { id: "geek", name: "Mundo Geek", color: "text-geek", bgColor: "bg-geek/10", borderColor: "border-geek" },
    { id: "otaku", name: "Mundo Otaku", color: "text-otaku", bgColor: "bg-otaku/10", borderColor: "border-otaku" },
  ];

  return (
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
              to={`/${cat.id === "ia" ? "ia" : cat.id === "invest" ? "investimentos" : cat.id}`}
              className={`p-6 rounded-xl border-2 ${cat.borderColor} ${cat.bgColor} hover:scale-105 transition-all duration-300 text-center card-hover`}
            >
              <span className={`font-display font-bold text-lg ${cat.color}`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Últimos <span className="text-gradient">Artigos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
              Não perca nenhuma novidade!
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Acompanhe as últimas tendências em tecnologia, investimentos e cultura pop.
            </p>
            <Button size="lg" className="gap-2 glow-effect">
              Explorar Conteúdo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
