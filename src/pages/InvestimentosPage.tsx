import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory, getPostBySlug } from "@/data/posts";
import { ArrowLeft, Calculator, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import B3StockTicker from "@/components/B3StockTicker";
import CurrencyWidget from "@/components/CurrencyWidget";
import CryptoWidget from "@/components/CryptoWidget";
import PreciousMetalsWidget from "@/components/PreciousMetalsWidget";

const PINNED_SLUG = "calculadoras-financeiras-ativos";

const InvestimentosPage = () => {
  const allPosts = getPostsByCategory("invest");
  const pinnedPost = getPostBySlug(PINNED_SLUG);
  const posts = allPosts.filter((p) => p.slug !== PINNED_SLUG);

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2 text-invest hover:text-invest">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-invest rounded-full"></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-invest">Finanças</span>
          </h1>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-2xl">
          Dicas de finanças, análises de mercado, criptomoedas e 
          educação financeira para construir seu futuro.
        </p>
        <Link to="/cotacoes" className="inline-block mt-3">
          <Button variant="outline" className="gap-2 border-invest/30 text-invest hover:bg-invest/10">
            <BarChart3 className="h-4 w-4" />
            Ver Cotações Consolidadas
          </Button>
        </Link>
      </div>

      {/* Pinned Featured Post */}
      {pinnedPost && (
        <Link to={`/post/${pinnedPost.slug}`} className="block mb-8 group">
          <div className="relative rounded-2xl overflow-hidden bg-card border-2 border-invest/30 hover:border-invest/60 transition-all shadow-lg hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img
                  src={pinnedPost.image}
                  alt={pinnedPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-invest/15 text-invest text-xs font-bold uppercase tracking-wide">
                    <Calculator className="h-3.5 w-3.5" />
                    Em Destaque
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 group-hover:text-invest transition-colors line-clamp-2">
                  {pinnedPost.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base line-clamp-2 mb-4">
                  {pinnedPost.excerpt}
                </p>
                <span className="text-invest font-semibold text-sm group-hover:underline">
                  Acessar calculadoras →
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* B3 Stock Ticker */}
      <B3StockTicker />

      {/* Currency Widget */}
      <CurrencyWidget />

      {/* Precious Metals Widget */}
      <PreciousMetalsWidget />

      {/* Crypto Widget */}
      <CryptoWidget />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Nenhum artigo encontrado nesta categoria ainda.
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestimentosPage;
