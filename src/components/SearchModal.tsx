import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/posts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CategoryBadge from "./CategoryBadge";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredPosts = query.length > 0
    ? blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handlePostClick = (slug: string) => {
    navigate(`/post/${slug}`);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-lg animate-fade-in">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Pesquisar artigos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 text-lg"
            autoFocus
          />
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.length > 0 && filteredPosts.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              Nenhum resultado encontrado para "{query}"
            </div>
          )}

          {filteredPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="w-full p-4 flex items-start gap-4 hover:bg-secondary transition-colors text-left border-b border-border last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CategoryBadge category={post.category} size="sm" />
                </div>
                <h3 className="font-semibold text-foreground line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                  {post.excerpt}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="p-3 border-t border-border text-center text-xs text-muted-foreground">
          Pressione <kbd className="px-1.5 py-0.5 bg-secondary rounded text-foreground">ESC</kbd> para fechar
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
