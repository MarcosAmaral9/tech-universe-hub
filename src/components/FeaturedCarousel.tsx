import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { getLatestPostsByCategory } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const AUTOPLAY_MS = 7000;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "60%" : "-60%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-40%" : "40%",
    opacity: 0,
    scale: 0.97,
  }),
};

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);
  const posts = getLatestPostsByCategory();
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(autoAdvance, AUTOPLAY_MS);
  };

  const slideToIndex = (newIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(newIndex);
    setProgressKey((k) => k + 1);
    resetTimer();
  };

  const autoAdvance = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
    setProgressKey((k) => k + 1);
  }, [posts.length]);

  useEffect(() => {
    timerRef.current = setInterval(autoAdvance, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [autoAdvance]);

  const goToPrevious = () => {
    const next = (currentIndex - 1 + posts.length) % posts.length;
    slideToIndex(next, -1);
  };

  const goToNext = () => {
    const next = (currentIndex + 1) % posts.length;
    slideToIndex(next, 1);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    slideToIndex(index, index > currentIndex ? 1 : -1);
  };

  const currentPost = posts[currentIndex];
  if (!currentPost) return null;

  const categoryColor =
    currentPost.category === "ia" ? "bg-ia" :
    currentPost.category === "invest" ? "bg-invest" :
    currentPost.category === "geek" ? "bg-geek" : "bg-otaku";

  return (
    <section className="relative w-full overflow-hidden bg-background md:bg-gradient-to-br md:from-secondary md:via-background md:to-secondary">
      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <div className="container px-2 sm:px-4 py-3 md:py-8">
        {/* Carousel Card */}
        <div
          className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg touch-pan-y"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchMove={(e) => { touchEndX.current = e.touches[0].clientX; }}
          onTouchEnd={() => {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 50) {
              if (diff > 0) goToNext(); else goToPrevious();
            }
          }}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-muted/30 z-10">
            <div
              key={progressKey}
              className={`h-full ${categoryColor}`}
              style={{ animation: `progress-fill ${AUTOPLAY_MS}ms linear` }}
            />
          </div>

          {/* Animated Slide */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="carousel-slide flex flex-col md:flex-row h-auto md:h-[400px]"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-auto overflow-hidden">
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
              <div className="flex-1 px-4 py-3 sm:p-6 md:p-10 flex flex-col justify-center overflow-hidden">
                <CategoryBadge category={currentPost.category} size="md" />

                <Link to={`/post/${currentPost.slug}`}>
                  <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold mt-2 sm:mt-4 mb-2 sm:mb-4 hover:text-primary transition-colors line-clamp-2">
                    {currentPost.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground text-base sm:text-lg mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                  {currentPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">{currentPost.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{new Date(currentPost.date + "T12:00:00").toLocaleDateString("pt-BR")}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    {currentPost.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — below the card */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="bg-card border border-border hover:bg-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `${categoryColor} w-6`
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="bg-card border border-border hover:bg-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
