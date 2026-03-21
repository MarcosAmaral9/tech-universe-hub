import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";

const categoryColorMap: Record<string, string> = {
  ia:     "bg-ia",
  invest: "bg-invest",
  geek:   "bg-geek",
  otaku:  "bg-otaku",
};

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Refs to hold listeners so cleanup always works, even across setTimeout
  const removeListenersRef = useRef<(() => void) | null>(null);

  const isPostPage = location.pathname.startsWith("/post/");
  const slug = isPostPage
    ? location.pathname.replace("/post/", "").replace(/\/$/, "")
    : "";
  const post = slug ? getPostBySlug(slug) : null;

  useEffect(() => {
    // Always reset progress and remove old listeners when route changes
    setProgress(0);
    if (removeListenersRef.current) {
      removeListenersRef.current();
      removeListenersRef.current = null;
    }

    if (!isPostPage) return;

    let rafId: number;

    const getDocHeight = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    let docHeight = 0;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (docHeight <= 0) docHeight = getDocHeight();
        const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        setProgress(Math.min(pct, 100));
      });
    };

    const handleResize = () => {
      docHeight = getDocHeight();
      handleScroll();
    };

    // Store cleanup in ref so it can be called from anywhere
    const cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
    removeListenersRef.current = cleanup;

    // Delay to let the new page DOM render fully before measuring scrollHeight
    const timer = setTimeout(() => {
      docHeight = getDocHeight();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
      // Set initial value (user might have scrolled before component mounted)
      handleScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup();
      removeListenersRef.current = null;
    };
  }, [location.pathname, isPostPage]);

  if (!isPostPage || !post) return null;

  const colorClass = categoryColorMap[post.category] || "bg-primary";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura do artigo"
    >
      <div
        className={`h-[3px] transition-[width] duration-100 ease-linear ${colorClass}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
