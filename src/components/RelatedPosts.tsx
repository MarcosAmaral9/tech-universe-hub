import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getRelatedPosts } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";
import { useAuthContext } from "@/contexts/AuthContext";

interface RelatedPostsProps {
  currentSlug: string;
}

const MAX_VIEWED = 300;

const getViewedKey = (userId: string) => `viciocode_viewed_posts:${userId}`;

const safeParseViewed = (raw: string | null): string[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.filter((x) => typeof x === "string");
    return [];
  } catch {
    return [];
  }
};

const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const { user } = useAuthContext();
  const [viewedSlugs, setViewedSlugs] = useState<string[]>([]);

  // Track viewed posts (per-user) so we can suggest unseen related posts when logged in.
  useEffect(() => {
    if (!user) {
      setViewedSlugs([]);
      return;
    }

    const key = getViewedKey(user.id);
    const existing = safeParseViewed(localStorage.getItem(key));

    // Add current slug to the viewed list
    const next = [currentSlug, ...existing.filter((s) => s !== currentSlug)].slice(0, MAX_VIEWED);
    localStorage.setItem(key, JSON.stringify(next));
    setViewedSlugs(next);
  }, [user?.id, currentSlug]);

  const relatedPosts = useMemo(() => {
    return getRelatedPosts(currentSlug, 3, user ? { viewedSlugs } : undefined);
  }, [currentSlug, user?.id, viewedSlugs]);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
        <ArrowRight className="h-6 w-6 text-primary" />
        Posts Relacionados
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.slug}`}
            className="group block p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <CategoryBadge category={post.category} size="sm" />

            <h4 className="font-semibold text-sm mt-2 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h4>

            <p className="text-xs text-muted-foreground mt-1">{post.readTime} de leitura</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;

