import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/data/posts";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 12;

const GeekPage = () => {
  const posts = getPostsByCategory("geek");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paged = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const changePage = (newPage: number | ((p: number) => number)) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2 hover:bg-geek/20 active:bg-geek/30">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-geek rounded-full"></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Mundo <span className="text-geek">Geek</span>
          </h1>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-2xl">
          Games, tecnologia, cultura pop, filmes, séries e tudo que 
          um verdadeiro geek ama!
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paged.map((post) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <Button
            variant="outline"
            size="icon"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Button
              key={n}
              variant={n === page ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(n)}
              className={n === page ? "bg-geek hover:bg-geek/90 text-white" : ""}
            >
              {n}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default GeekPage;
