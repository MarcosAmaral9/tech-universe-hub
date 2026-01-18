import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { getLatestPostsByCategory } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";
import { Button } from "@/components/ui/button";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const posts = getLatestPostsByCategory();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [posts.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const currentPost = posts[currentIndex];

  if (!currentPost) return null;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container py-8">
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <CategoryBadge category={currentPost.category} size="md" />
              
              <Link to={`/post/${currentPost.slug}`}>
                <h2 className="font-display text-2xl md:text-4xl font-bold mt-4 mb-4 hover:text-primary transition-colors line-clamp-2">
                  {currentPost.title}
                </h2>
              </Link>
              
              <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                {currentPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{currentPost.author}</span>
                <span>•</span>
                <span>{new Date(currentPost.date).toLocaleDateString("pt-BR")}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {currentPost.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="bg-background/80 backdrop-blur hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="bg-background/80 backdrop-blur hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
