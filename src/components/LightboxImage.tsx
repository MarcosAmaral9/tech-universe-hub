import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  /** Largura natural da imagem (px) — evita CLS e ajuda o navegador a escolher tamanho. */
  width?: number;
  /** Altura natural da imagem (px). */
  height?: number;
  /** Atributo sizes responsivo. Ex.: "(max-width: 768px) 100vw, 1024px" */
  sizes?: string;
}

const ZOOM_LEVELS = [1, 1.5, 2, 3, 4, 5];

/**
 * Imagem clicável que abre em um lightbox fullscreen acessível com zoom em vários níveis.
 * - Skeleton/placeholder enquanto a imagem WebP carrega (evita CLS, melhora percepção).
 * - ESC, botão X ou clique no overlay fecham o modal.
 * - Botões +/- e duplo clique alternam zoom; arraste/scroll para deslocar quando ampliado.
 * - Foco vai automaticamente para o botão de fechar ao abrir e retorna ao gatilho ao fechar.
 */
const LightboxImage = ({
  src,
  alt,
  caption,
  className,
  priority,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px",
}: LightboxImageProps) => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);
  const [zoomIdx, setZoomIdx] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useRef(`lightbox-title-${Math.random().toString(36).slice(2, 9)}`);

  const aspectRatio = width && height ? `${width} / ${height}` : undefined;
  const zoom = ZOOM_LEVELS[zoomIdx];

  useEffect(() => {
    if (!open) return;
    setZoomIdx(0);
    setModalLoaded(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setZoomIdx((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1));
        return;
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setZoomIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [open]);

  // Mantém o ponto ampliado centralizado quando o zoom muda
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    });
  }, [zoomIdx, modalLoaded]);

  const toggleZoom = () => {
    setZoomIdx((i) => (i >= ZOOM_LEVELS.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        aria-haspopup="dialog"
        className={`group relative block w-full overflow-hidden rounded-xl border border-amber-500/30 bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className ?? ""}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {/* Skeleton/placeholder enquanto carrega */}
        {!loaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40"
          />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity opacity-90 group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" /> Ampliar
        </span>
        {caption && (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-xs italic text-white/90">
            {caption}
          </span>
        )}
      </button>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId.current}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        >
          <h2 id={titleId.current} className="sr-only">
            {alt}
          </h2>

          {/* Barra superior com controles de zoom + fechar */}
          <div
            className="flex items-center justify-between gap-2 p-3 md:p-4 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomIdx((i) => Math.max(i - 1, 0))}
                disabled={zoomIdx === 0}
                aria-label="Diminuir zoom"
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
              >
                <ZoomOut className="h-5 w-5" aria-hidden="true" />
              </button>
              <span
                aria-live="polite"
                className="min-w-[56px] text-center text-sm font-medium text-white/90 tabular-nums"
              >
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomIdx((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1))}
                disabled={zoomIdx === ZOOM_LEVELS.length - 1}
                aria-label="Aumentar zoom"
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
              >
                <ZoomIn className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setZoomIdx(0)}
                aria-label="Ajustar à tela"
                className="ml-1 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" /> Ajustar
              </button>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar visualização ampliada"
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Área da imagem com scroll/pan quando ampliada */}
          <div
            ref={scrollRef}
            className={`flex-1 overflow-auto overscroll-contain ${zoom > 1 ? "cursor-grab" : "cursor-zoom-in"}`}
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: zoom > 1 ? "pan-x pan-y pinch-zoom" : "auto",
            }}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={toggleZoom}
          >
            <figure
              className="min-h-full min-w-full flex items-center justify-center p-4"
              style={{
                width: zoom > 1 ? `${zoom * 100}%` : "100%",
                minHeight: "100%",
              }}
            >
              {!modalLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" aria-hidden="true" />
                  <span className="sr-only">Carregando imagem em alta resolução…</span>
                </div>
              )}
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="100vw"
                decoding="async"
                onLoad={() => setModalLoaded(true)}
                draggable={false}
                className={`max-w-full h-auto select-none rounded-lg shadow-2xl transition-opacity duration-300 ${modalLoaded ? "opacity-100" : "opacity-0"}`}
                style={{
                  width: zoom > 1 ? "100%" : "auto",
                  maxHeight: zoom > 1 ? "none" : "82vh",
                  imageRendering: "auto",
                }}
              />
            </figure>
            {caption && (
              <figcaption
                className="text-center text-sm text-white/80 italic p-4 pb-6"
                onClick={(e) => e.stopPropagation()}
              >
                {caption}
              </figcaption>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxImage;
