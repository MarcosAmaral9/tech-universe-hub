import { ImgHTMLAttributes, memo } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Set to true for above-the-fold / LCP images */
  priority?: boolean;
}

/**
 * Optimized image component with lazy loading, async decoding,
 * and fetchPriority hints for LCP-critical images.
 */
const OptimizedImage = memo(({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...props
}: OptimizedImageProps) => (
  <img
    loading={loading ?? (priority ? "eager" : "lazy")}
    decoding={decoding ?? "async"}
    fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
    {...props}
  />
));

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
