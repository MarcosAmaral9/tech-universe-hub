import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/data/posts";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import OfflineFilterButton from "@/components/OfflineFilterButton";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";

const POSTS_PER_PAGE = 12;

const SUBTOPIC_LABELS: Record<string, string> = {
  agentes: "Agentes",
  apps: "Apps",
  comparativos: "Comparativos",
  criatividade: "Criatividade",
  dublagem: "Dublagem",
  educacao: "Educação",
  games: "Games",
  privacidade: "Privacidade",
  regulacao: "Regulação",
  renda: "Renda",
  saude: "Saúde",
  seguranca: "Segurança",
  trabalho: "Trabalho",
  tutorial: "Tutorial",
};

const IAPage = () => {
  const allPosts = getPostsByCategory("ia");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [offlineOnly, setOfflineOnly] = useState(false);
  const [page, setPage] = useState(1);
  const { isCached } = useOfflinePosts();

  const changePage = (newPage: number | ((p: number) => number)) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subtopics = useMemo(() => {
    const set = new Set<string>();
    allPosts.forEach((p) => {
      if (p.subtopic) set.add(p.subtopic);
    });
    return Array.from(set).sort((a, b) =>
      (SUBTOPIC_LABELS[a] || a).localeCompare(SUBTOPIC_LABELS[b] || b)
    );
  }, [allPosts]);

  const filtered = useMemo(() => {
    let list = activeFilter ? allPosts.filter((p) => p.subtopic === activeFilter) : allPosts;
    if (offlineOnly) list = list.filter((p) => isCached(p.slug));
    return list;
  }, [allPosts, activeFilter, offlineOnly, isCached]);

  const offlineCount = useMemo(() => {
    const base = activeFilter ? allPosts.filter((p) => p.subtopic === activeFilter) : allPosts;
    return base.filter((p) => isCached(p.slug)).length;
  }, [allPosts, activeFilter, isCached]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleFilter = (sub: string | null) => {
    setActiveFilter(sub);
    setOfflineOnly(false);
    setPage(1);
  };

  const handleToggleOffline = () => {
    setOfflineOnly((v) => !v);
    setPage(1);
  };

  return (
    <>
      <DynamicSEO />
      <div className="container py-8 md:py-10">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2 hover:bg-ia/20 active:bg-ia/30">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-ia rounded-full"></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Inteligência <span className="text-ia">Artificial</span>
            <span className="ml-3 text-base font-normal text-muted-foreground align-middle">({allPosts.length} artigos)</span>
          </h1>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-2xl">
          As últimas novidades sobre IA, machine learning, ChatGPT e as tecnologias 
          que estão transformando o mundo.
        </p>
      </div>

      {/* Subtopic Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(null)}
          className={activeFilter === null ? "bg-ia hover:bg-ia/90 text-white" : ""}
        >
          Todos ({allPosts.length})
        </Button>
        {subtopics.map((sub) => {
          const count = allPosts.filter((p) => p.subtopic === sub).length;
          return (
            <Button
              key={sub}
              variant={activeFilter === sub ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilter(sub)}
              className={activeFilter === sub ? "bg-ia hover:bg-ia/90 text-white" : ""}
            >
              {SUBTOPIC_LABELS[sub] || sub} ({count})
            </Button>
          );
        })}
        <OfflineFilterButton
          active={offlineOnly}
          onToggle={handleToggleOffline}
          activeClass="bg-ia"
          count={offlineCount}
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {paged.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Nenhum artigo encontrado nesta categoria ainda.
          </p>
        </div>
      )}

      <AdInArticle className="my-8" />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <Button
            variant="outline"
            size="icon"
            disabled={page === 1}
            onClick={() => changePage((p) => p - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Button
              key={n}
              variant={n === page ? "default" : "outline"}
              size="sm"
              onClick={() => changePage(n)}
              className={n === page ? "bg-ia hover:bg-ia/90 text-white" : ""}
            >
              {n}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={page === totalPages}
            onClick={() => changePage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  </>  
  );
};

export default IAPage;
