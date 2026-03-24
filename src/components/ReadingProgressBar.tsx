import { useState, useEffect, useRef, useCallback } from "react";
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
  const rafRef = useRef(0);

  const isPostPage = location.pathname.startsWith("/post/");
  const slug = isPostPage
    ? location.pathname.replace("/post/", "").replace(/\/$/, "")
    : "";
  const post = slug ? getPostBySlug(slug) : null;

  const calcProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const pct = (window.scrollY / docHeight) * 100;
      setProgress(Math.min(Math.max(pct, 0), 100));
    });
  }, []);

  useEffect(() => {
    setProgress(0);
    if (!isPostPage) return;

    // Wait for lazy content to render, then attach listeners
    const timer = setTimeout(() => {
      calcProgress();
      window.addEventListener("scroll", calcProgress, { passive: true });
      window.addEventListener("resize", calcProgress, { passive: true });
    }, 200);

    // Watch for DOM changes (lazy-loaded content expanding the page)
    const observer = new MutationObserver(() => calcProgress());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", calcProgress);
      window.removeEventListener("resize", calcProgress);
      observer.disconnect();
    };
  }, [location.pathname, isPostPage, calcProgress]);

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
