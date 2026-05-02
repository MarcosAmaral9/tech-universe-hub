import { forwardRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = forwardRef<never>((_, _ref) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll on route change — smooth causes perceived lag on mobile
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;
