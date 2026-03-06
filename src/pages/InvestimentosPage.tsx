import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/data/posts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import B3StockTicker from "@/components/B3StockTicker";
import CurrencyWidget from "@/components/CurrencyWidget";
import CryptoWidget from "@/components/CryptoWidget";

const InvestimentosPage = () => {
  const posts = getPostsByCategory("invest");

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2">
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
      </div>

      {/* B3 Stock Ticker */}
      <B3StockTicker />

      {/* Currency Widget */}
      <CurrencyWidget />

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
