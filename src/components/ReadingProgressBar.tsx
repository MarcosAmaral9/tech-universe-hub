import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";

const categoryColorMap: Record<string, string> = {
  ia: "bg-ia",
  invest: "bg-invest",
  geek: "bg-geek",
  otaku: "bg-otaku",
};

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Only show on post pages
  const isPostPage = location.pathname.startsWith("/post/");
  const slug = isPostPage ? location.pathname.replace("/post/", "") : "";
  const post = slug ? getPostBySlug(slug) : null;

  useEffect(() => {
    if (!isPostPage) return;

    // Cache docHeight to avoid reading scrollHeight on every scroll event (forced reflow)
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let rafId: number;

    const updateDocHeight = () => {
      docHeight = document.documentElement.scrollHeight - window.innerHeight;
    };

    const handleScroll = () => {
      // rAF prevents forced reflow and throttles to 60fps
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        setProgress(Math.min(scrollPercent, 100));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateDocHeight, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDocHeight);
      cancelAnimationFrame(rafId);
    };
  }, [isPostPage, location.pathname]);

  if (!isPostPage || !post) return null;

  const colorClass = categoryColorMap[post.category] || "bg-primary";

  return (
    <div className="fixed top-16 left-0 right-0 h-1.5 bg-muted z-50">
      <div
        className={`h-full transition-[width] duration-150 ease-out ${colorClass}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
