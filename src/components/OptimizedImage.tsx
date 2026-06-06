import { ImgHTMLAttributes, memo, useState } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Set to true for above-the-fold / LCP images */
  priority?: boolean;
  /** Show animated skeleton placeholder while loading (default true). */
  showSkeleton?: boolean;
  /** Optional wrapper className (applied to the skeleton container). */
  wrapperClassName?: string;
}

/**
 * Optimized image component with lazy loading, async decoding,
 * fetchPriority hints, and a skeleton placeholder that fades out
 * once the image is decoded. Reserves aspect-ratio when width/height
 * are provided to avoid CLS.
 */
const OptimizedImage = memo(({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  showSkeleton = true,
  wrapperClassName,
  className,
  onLoad,
  width,
  height,
  style,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <span
      className={`relative inline-block overflow-hidden ${wrapperClassName ?? ""}`}
      style={aspectRatio ? { aspectRatio, ...style } : style}
    >
      {showSkeleton && !loaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40"
        />
      )}
      <img
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding={decoding ?? "async"}
        fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
        width={width}
        height={height}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`block w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
        {...props}
      />
    </span>
  );
});

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
