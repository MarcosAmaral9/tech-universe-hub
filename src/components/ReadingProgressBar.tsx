import { useState, useEffect } from "react";
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

  // Only show on /post/* routes
  const isPostPage = location.pathname.startsWith("/post/");
  const slug = isPostPage ? location.pathname.replace("/post/", "").replace(/\/$/, "") : "";
  const post = slug ? getPostBySlug(slug) : null;

  // Reset progress to 0 on every route change (fixes "stuck at 100%" bug)
  useEffect(() => {
    setProgress(0);
  }, [location.pathname]);

  useEffect(() => {
    if (!isPostPage) return;

    // Small delay so the new page content has rendered and scrollHeight is correct
    const startTimer = setTimeout(() => {
      let docHeight = document.documentElement.scrollHeight - window.innerHeight;
      let rafId: number;

      const updateDocHeight = () => {
        docHeight = document.documentElement.scrollHeight - window.innerHeight;
      };

      const handleScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          setProgress(Math.min(pct, 100));
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", updateDocHeight, { passive: true });

      // Calculate initial position in case user is mid-scroll on mount
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateDocHeight);
        cancelAnimationFrame(rafId);
      };
    }, 80);

    return () => clearTimeout(startTimer);
  }, [isPostPage, location.pathname]);

  if (!isPostPage || !post) return null;

  const colorClass = categoryColorMap[post.category] || "bg-primary";

  return (
    // Fixed at very top (above header) with z-[60] — same pattern as YouTube/GitHub
    // h-[3px]: thin but visible; no track background (cleaner look)
    <div
      className="fixed top-0 left-0 right-0 z-[60]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura"
    >
      <div
        className={`h-[3px] transition-[width] duration-100 ease-linear ${colorClass}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
