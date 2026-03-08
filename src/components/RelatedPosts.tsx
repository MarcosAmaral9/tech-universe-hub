import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRelatedPosts } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";

interface RelatedPostsProps {
  currentSlug: string;
}

const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const relatedPosts = getRelatedPosts(currentSlug, 3);

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
            
            <p className="text-xs text-muted-foreground mt-1">
              {post.readTime} de leitura
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
