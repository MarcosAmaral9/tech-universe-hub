import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory, getPostBySlug } from "@/data/posts";
import { ArrowLeft, Calculator, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import B3StockTicker from "@/components/B3StockTicker";
import CurrencyWidget from "@/components/CurrencyWidget";
import CryptoWidget from "@/components/CryptoWidget";
import PreciousMetalsWidget from "@/components/PreciousMetalsWidget";
import DynamicSEO from "@/components/DynamicSEO";

const PINNED_SLUG = "calculadoras-financeiras-ativos";
const POSTS_PER_PAGE = 12;

const SUBTOPIC_LABELS: Record<string, string> = {
  calculadoras: "Calculadoras",
  carteira: "Carteira",
  cripto: "Criptomoedas",
  dividas: "Dívidas",
  "economia-domestica": "Economia Doméstica",
  "educacao-financeira": "Educação Financeira",
  etfs: "ETFs",
  fiis: "FIIs",
  "ia-financas": "IA & Finanças",
  impostos: "Impostos",
  planejamento: "Planejamento",
  "renda-fixa": "Renda Fixa",
  "renda-passiva": "Renda Passiva",
  semicondutores: "Semicondutores",
};

const InvestimentosPage = () => {
  const allPosts = getPostsByCategory("invest");
  const pinnedPost = getPostBySlug(PINNED_SLUG);
  const postsWithoutPinned = allPosts.filter((p) => p.slug !== PINNED_SLUG);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const changePage = (newPage: number | ((p: number) => number)) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subtopics = useMemo(() => {
    const set = new Set<string>();
    postsWithoutPinned.forEach((p) => {
      if (p.subtopic) set.add(p.subtopic);
    });
    return Array.from(set).sort((a, b) =>
      (SUBTOPIC_LABELS[a] || a).localeCompare(SUBTOPIC_LABELS[b] || b)
    );
  }, [postsWithoutPinned]);

  const filtered = useMemo(
    () => (activeFilter ? postsWithoutPinned.filter((p) => p.subtopic === activeFilter) : postsWithoutPinned),
    [postsWithoutPinned, activeFilter]
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleFilter = (sub: string | null) => {
    setActiveFilter(sub);
    setPage(1);
  };

  return (
    <>
      <DynamicSEO />
      <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 gap-2 hover:bg-invest/20 active:bg-invest/30">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-invest rounded-full"></div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-invest">Finanças</span>
            <span className="ml-3 text-base font-normal text-muted-foreground align-middle">({allPosts.length} artigos)</span>
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
      {pinnedPost && !activeFilter && (
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

      {/* Widgets - only show when no filter active */}
      {!activeFilter && (
        <>
          <B3StockTicker />
          <CurrencyWidget />
          <PreciousMetalsWidget />
          <CryptoWidget />
        </>
      )}

      {/* Subtopic Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(null)}
          className={activeFilter === null ? "bg-invest hover:bg-invest/90 text-white" : ""}
        >
          Todos ({postsWithoutPinned.length})
        </Button>
        {subtopics.map((sub) => {
          const count = postsWithoutPinned.filter((p) => p.subtopic === sub).length;
          return (
            <Button
              key={sub}
              variant={activeFilter === sub ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilter(sub)}
              className={activeFilter === sub ? "bg-invest hover:bg-invest/90 text-white" : ""}
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
              className={n === page ? "bg-invest hover:bg-invest/90 text-white" : ""}
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

export default InvestimentosPage;
