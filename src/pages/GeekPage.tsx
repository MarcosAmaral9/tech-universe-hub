import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/data/posts";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import crimsonDesertHeroImg from "@/assets/crimson-desert-hero.webp";
import avatarPortalBannerImg from "@/assets/avatar-portal-banner.webp";
import acPortalImg from "@/assets/assassins-creed-portal.webp";

const POSTS_PER_PAGE = 12;

const SUBTOPIC_LABELS: Record<string, string> = {
  "assassins-creed": "Assassin's Creed",
  avatar: "Avatar",
  "crimson-desert": "Crimson Desert",
  games: "Games",
  vikings: "Vikings",
};

interface SpecialPortalCardProps {
  to: string;
  image: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
}

const SpecialPortalCard = ({ to, image, title, description, badge, badgeColor }: SpecialPortalCardProps) => (
  <Link
    to={to}
    className="group relative rounded-2xl overflow-hidden border border-border hover:border-geek/50 transition-all duration-300 hover:shadow-lg hover:shadow-geek/10"
  >
    <div className="relative h-44 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-foreground group-hover:text-geek transition-colors text-lg">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{description}</p>
      <span className="text-geek text-xs font-semibold mt-3 inline-block group-hover:translate-x-1 transition-transform">
        Ver painel completo →
      </span>
    </div>
  </Link>
);

const GeekPage = () => {
  const allPosts = getPostsByCategory("geek");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);

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

  const filtered = useMemo(
    () => (activeFilter ? allPosts.filter((p) => p.subtopic === activeFilter) : allPosts),
    [allPosts, activeFilter]
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
      <div className="container py-8 md:py-10">
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
            <span className="ml-3 text-base font-normal text-muted-foreground align-middle">({allPosts.length} artigos)</span>
          </h1>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-2xl">
          Games, tecnologia, cultura pop, filmes, séries e tudo que 
          um verdadeiro geek ama!
        </p>
      </div>

      {/* Special Portals - only show when no filter */}
      {!activeFilter && (
        <div className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
            🎮 Painéis Especiais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SpecialPortalCard
              to="/geek/crimson-desert"
              image={crimsonDesertHeroImg}
              title="Crimson Desert"
              description="RPG de mundo aberto da Pearl Abyss — guias, análises de combate e tudo sobre Pywel."
              badge="🗡️ Novo"
              badgeColor="bg-red-900/80 text-red-300 border border-red-700/50"
            />
            <SpecialPortalCard
              to="/geek/assassins-creed"
              image={acPortalImg}
              title="Assassin's Creed"
              description="Portal completo da franquia — reviews, rankings e análises de todos os jogos."
              badge="⚔️ Especial"
              badgeColor="bg-amber-900/80 text-amber-300 border border-amber-700/50"
            />
            <SpecialPortalCard
              to="/geek/avatar"
              image={avatarPortalBannerImg}
              title="Universo Avatar"
              description="Filmes, tecnologia e o jogo Frontiers of Pandora — tudo sobre o universo de Pandora."
              badge="🌿 Especial"
              badgeColor="bg-cyan-900/80 text-cyan-300 border border-cyan-700/50"
            />
          </div>
        </div>
      )}

      {/* Subtopic Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(null)}
          className={activeFilter === null ? "bg-geek hover:bg-geek/90 text-white" : ""}
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
              className={activeFilter === sub ? "bg-geek hover:bg-geek/90 text-white" : ""}
            >
              {SUBTOPIC_LABELS[sub] || sub} ({count})
            </Button>
          );
        })}
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
              className={n === page ? "bg-geek hover:bg-geek/90 text-white" : ""}
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

export default GeekPage;
