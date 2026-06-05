import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Imagem clicável que abre em um lightbox fullscreen com zoom.
 * Pressione ESC ou clique no overlay para fechar.
 */
const LightboxImage = ({ src, alt, caption, className, priority }: LightboxImageProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        className={`group relative block w-full overflow-hidden rounded-xl border border-amber-500/30 bg-card ${className ?? ""}`}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity opacity-90 group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5" /> Ampliar
        </span>
        {caption && (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-xs italic text-white/90">
            {caption}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />
            {caption && (
              <figcaption className="text-center text-sm text-white/80 mt-3 italic">{caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
};

export default LightboxImage;
