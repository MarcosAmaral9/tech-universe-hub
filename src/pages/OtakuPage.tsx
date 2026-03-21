import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/data/posts";
import tensuraPortalImg from "@/assets/tensura-portal-banner.webp";
import overlordPortalImg from "@/assets/overlord-portal-banner.webp";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Subtopic } from "@/types/blog";
import DynamicSEO from "@/components/DynamicSEO";

const POSTS_PER_PAGE = 12;

const SUBTOPIC_LABELS: Record<string, string> = {
  anime: "Animes",
  manga: "Mangás",
  manhwa: "Manhwas",

  cosplay: "Cosplay",
  cultura: "Cultura",
  idiomas: "Idiomas",
  generos: "Gêneros",
  games: "Games",
  collectibles: "Colecionáveis",
  "saude-mental": "Saúde Mental",
  tensura: "TenSura",
  overlord: "Overlord",
};

const OtakuPage = () => {
  const allPosts = getPostsByCategory("otaku");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const changePage = (newPage: number | ((p: number) => number)) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Extract available subtopics from posts
  const subtopics = useMemo(() => {
    const set = new Set<string>();
    allPosts.forEach((p) => {
      if (p.subtopic) set.add(p.subtopic);
    });
    return Array.from(set).sort((a, b) =>
      (SUBTOPIC_LABELS[a] || a).localeCompare(SUBTOPIC_LABELS[b] || b)
    );
  }, [allPosts]);

  // Filtered posts
  const filtered = useMemo(
    () => (activeFilter ? allPosts.filter((p) => p.subtopic === activeFilter) : allPosts),
    [allPosts, activeFilter]
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleFilter = (sub: string | null) => {
    setActiveFilter(sub);
    setPage(1);
  };

  return (
    <>
      <DynamicSEO />
      <div className="container py-8 md:py-10">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2 hover:bg-otaku/20 active:bg-otaku/30">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-otaku rounded-full"></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Mundo <span className="text-otaku">Otaku</span>
            <span className="ml-3 text-base font-normal text-muted-foreground align-middle">({allPosts.length} artigos)</span>
          </h1>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl">
          Mangas, manhwas, manhuas, animes e tudo sobre a cultura otaku.
          Recomendações, reviews e novidades do mundo dos quadrinhos asiáticos!
        </p>
      </div>

      {/* Special Portals - only when no filter active */}
      {!activeFilter && (
        <div className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
            📺 Painéis Especiais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/otaku/tensura" className="group relative rounded-xl overflow-hidden aspect-video border border-border block">
              <img src={tensuraPortalImg} alt="TenSura" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded-full font-bold mb-2 inline-block">🟦 Isekai</span>
                <h3 className="font-display text-xl font-bold text-white">TenSura</h3>
                <p className="text-white/70 text-sm">Rimuru Tempest e a Federação Jura-Tempest — T4 em abril 2026.</p>
              </div>
            </Link>
            <Link to="/otaku/overlord" className="group relative rounded-xl overflow-hidden aspect-video border border-border block">
              <img src={overlordPortalImg} alt="Overlord" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded-full font-bold mb-2 inline-block">💀 Isekai</span>
                <h3 className="font-display text-xl font-bold text-white">Overlord</h3>
                <p className="text-white/70 text-sm">Ainz Ooal Gown e Nazarick — filme Sacred Kingdom (2024).</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Subtopic Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(null)}
          className={activeFilter === null ? "bg-otaku hover:bg-otaku/90 text-white" : ""}
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
              className={activeFilter === sub ? "bg-otaku hover:bg-otaku/90 text-white" : ""}
            >
              {SUBTOPIC_LABELS[sub] || sub} ({count})
            </Button>
          );
        })}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paged.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
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
              className={n === page ? "bg-otaku hover:bg-otaku/90 text-white" : ""}
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

export default OtakuPage;
