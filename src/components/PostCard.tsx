import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Download } from "lucide-react";
import { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = forwardRef<HTMLElement, PostCardProps>(({ post }, ref) => {
  const { isCached } = useOfflinePosts();
  const offlineReady = isCached(post.slug);

  return (
    <article ref={ref} className="group bg-card rounded-xl overflow-hidden border border-border card-hover">
      <Link to={`/post/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} size="sm" />
          </div>
          {offlineReady && (
            <div
              className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/90 text-emerald-950 text-[10px] font-bold shadow-md backdrop-blur-sm"
              title="Este post está salvo no seu dispositivo e pode ser lido sem internet"
            >
              <Download className="h-3 w-3" />
              <span className="hidden sm:inline">Offline</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 xl:p-3.5">
          <h3 className="font-display font-semibold text-base xl:text-[0.95rem] mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR")}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
});

PostCard.displayName = "PostCard";

export default PostCard;
