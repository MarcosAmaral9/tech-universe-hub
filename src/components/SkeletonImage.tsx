import { useState, type ImgHTMLAttributes } from "react";

interface SkeletonImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Classes do wrapper (use para `absolute inset-0`, `aspect-video` etc). */
  wrapperClassName?: string;
  /** Classes da skeleton (sobrescreve o gradiente padrão). */
  skeletonClassName?: string;
  priority?: boolean;
}

/**
 * <img> com placeholder/skeleton animado enquanto a imagem (WebP/JPG/PNG)
 * decodifica. Reduz a percepção de lentidão e suaviza o aparecimento da
 * mídia, especialmente em conexões móveis lentas.
 */
const SkeletonImage = ({
  wrapperClassName,
  skeletonClassName,
  className,
  priority,
  loading,
  decoding,
  fetchPriority,
  onLoad,
  ...imgProps
}: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${wrapperClassName ?? ""}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 animate-pulse bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 ${skeletonClassName ?? ""}`}
        />
      )}
      <img
        {...imgProps}
        loading={loading ?? (priority ? "eager" : "lazy")}
        decoding={decoding ?? "async"}
        fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </div>
  );
};

export default SkeletonImage;
