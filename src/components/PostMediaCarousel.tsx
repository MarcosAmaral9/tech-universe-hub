import { useEffect, useMemo, useState } from "react";
import SkeletonImage from "./SkeletonImage";

export interface PostMediaItem {
  src: string;
  alt: string;
}

interface PostMediaCarouselProps {
  images: PostMediaItem[];
  intervalMs?: number;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  pausable?: boolean;
  showIndicators?: boolean;
}

const PostMediaCarousel = ({
  images,
  intervalMs = 3000,
  className,
  wrapperClassName,
  priority = false,
  pausable = false,
  showIndicators = false,
}: PostMediaCarouselProps) => {
  const validImages = useMemo(() => images.filter((image) => image.src), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (reduceMotion) setActiveIndex(0);
  }, [reduceMotion]);

  useEffect(() => {
    if (validImages.length < 2 || paused || !pageVisible || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % validImages.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, pageVisible, paused, reduceMotion, validImages.length]);

  if (validImages.length === 0) return null;

  const carousel = (
    <>
      {validImages.map((image, index) => (
        <SkeletonImage
          key={image.src}
          priority={priority && index === 0}
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          wrapperClassName="absolute inset-0 w-full h-full"
          className={`${className ?? ""} w-full h-full transition-[opacity,transform] duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {showIndicators && validImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-hidden="true">
          {validImages.map((image, index) => (
            <span
              key={image.src}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-otaku" : "w-1.5 bg-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
      {pausable && validImages.length > 1 && (
        <span className="sr-only" aria-live="polite">
          {paused ? "Carrossel pausado" : "Carrossel em reprodução"}
        </span>
      )}
    </>
  );

  if (pausable && validImages.length > 1) {
    return (
      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        className={`relative block overflow-hidden text-left ${wrapperClassName ?? ""}`}
        aria-label={paused ? "Continuar carrossel de imagens" : "Pausar carrossel de imagens"}
        aria-pressed={paused}
      >
        {carousel}
      </button>
    );
  }

  return <div className={`relative overflow-hidden ${wrapperClassName ?? ""}`}>{carousel}</div>;
};

export default PostMediaCarousel;