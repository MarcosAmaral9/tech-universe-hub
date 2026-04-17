import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import heroCotacoes from "@/assets/cotacoes-tempo-real.webp";
import heroHistorico from "@/assets/historico-cotacoes.webp";
import { getPostsByCategory, getPostBySlug } from "@/data/posts";
import { ArrowLeft, Calculator, BarChart3, ChevronLeft, ChevronRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import OfflineFilterButton from "@/components/OfflineFilterButton";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";

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
  const [offlineOnly, setOfflineOnly] = useState(false);
  const [page, setPage] = useState(1);
  const { isCached } = useOfflinePosts();

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

  const filtered = useMemo(() => {
    let list = activeFilter ? postsWithoutPinned.filter((p) => p.subtopic === activeFilter) : postsWithoutPinned;
    if (offlineOnly) list = list.filter((p) => isCached(p.slug));
    return list;
  }, [postsWithoutPinned, activeFilter, offlineOnly, isCached]);

  const offlineCount = useMemo(() => {
    const base = activeFilter ? postsWithoutPinned.filter((p) => p.subtopic === activeFilter) : postsWithoutPinned;
    return base.filter((p) => isCached(p.slug)).length;
  }, [postsWithoutPinned, activeFilter, isCached]);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Link to="/cotacoes" className="group block">
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-56 border border-invest/30 hover:border-invest/60 transition-all shadow-md hover:shadow-xl">
              <img src={heroCotacoes} alt="Cotações em Tempo Real" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center p-6 md:p-8">
                <div>
                  <span className="text-invest font-bold text-xs uppercase tracking-widest mb-1 block">Mercado ao Vivo</span>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-white flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-invest" />
                    Cotações em Tempo Real
                  </h3>
                  <p className="text-white/60 text-sm mt-2">B3, Cripto, Câmbio e Metais</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/historico-cotacoes" className="group block">
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-56 border border-invest/30 hover:border-invest/60 transition-all shadow-md hover:shadow-xl">
              <img src={heroHistorico} alt="Histórico de Cotações" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center p-6 md:p-8">
                <div>
                  <span className="text-invest font-bold text-xs uppercase tracking-widest mb-1 block">Análise</span>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-white flex items-center gap-2">
                    <History className="h-6 w-6 text-invest" />
                    Histórico de Cotações
                  </h3>
                  <p className="text-white/60 text-sm mt-2">Gráficos e tendências de preço</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Pinned Featured Post */}
      {pinnedPost && !activeFilter && (
        <Link to={`/post/${pinnedPost.slug}`} className="block mb-8 group">
          <div className="relative rounded-2xl overflow-hidden h-48 md:h-56 border-2 border-invest/50 hover:border-invest transition-all shadow-lg hover:shadow-2xl ring-2 ring-invest/20">
            <img
              src={pinnedPost.image}
              alt={pinnedPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent flex items-center p-6 md:p-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-invest/20 text-invest text-xs font-bold uppercase tracking-widest mb-2 backdrop-blur-sm border border-invest/30">
                  <Calculator className="h-3.5 w-3.5" />
                  ⭐ Destaque
                </span>
                <h3 className="font-display text-xl md:text-3xl font-bold text-white flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-invest" />
                  {pinnedPost.title}
                </h3>
                <p className="text-white/60 text-sm mt-2 max-w-md line-clamp-2">{pinnedPost.excerpt}</p>
              </div>
            </div>
          </div>
        </Link>
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
        <OfflineFilterButton
          active={offlineOnly}
          onToggle={handleToggleOffline}
          activeClass="bg-invest"
          count={offlineCount}
        />
      </div>
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
