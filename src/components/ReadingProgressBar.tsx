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

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPostPage, location.pathname]);

  if (!isPostPage || !post) return null;

  const colorClass = categoryColorMap[post.category] || "bg-primary";

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-muted z-50">
      <div
        className={`h-full transition-[width] duration-150 ease-out ${colorClass}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
