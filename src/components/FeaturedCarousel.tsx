import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { getLatestPostsByCategory } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";
import { Button } from "@/components/ui/button";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const posts = getLatestPostsByCategory();
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToNext();
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = (newIndex: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentIndex(newIndex);
    startTimer();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    slide((currentIndex - 1 + posts.length) % posts.length, "left");
  };

  const goToNext = () => {
    slide((currentIndex + 1) % posts.length, "right");
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    slide(index, index > currentIndex ? "right" : "left");
  };

  const currentPost = posts[currentIndex];
  if (!currentPost) return null;

  const slideClass = isAnimating
    ? direction === "right"
      ? "animate-[slide-in-from-right_0.5s_ease-out]"
      : "animate-[slide-in-from-left_0.5s_ease-out]"
    : "";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      <style>{`
        @keyframes slide-in-from-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-from-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div className="container py-8">
        <div
          className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg touch-pan-y"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchMove={(e) => { touchEndX.current = e.touches[0].clientX; }}
          onTouchEnd={() => {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 50) {
              diff > 0 ? goToNext() : goToPrevious();
            }
          }}
        >
          {/* Main Content */}
          <div className={`flex flex-col md:flex-row h-[480px] md:h-[400px] ${slideClass}`}>
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center overflow-hidden">
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
                <span>{new Date(currentPost.date + "T12:00:00").toLocaleDateString("pt-BR")}</span>
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
                  onClick={() => goToSlide(index)}
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
