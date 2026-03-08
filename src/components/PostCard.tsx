import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border card-hover">
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
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
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
};

export default PostCard;
