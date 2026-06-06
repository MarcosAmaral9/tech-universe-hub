import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

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

/**
 * Imagem clicável que abre em um lightbox fullscreen acessível.
 * - ESC, botão X ou clique no overlay fecham o modal.
 * - Foco vai automaticamente para o botão de fechar ao abrir.
 * - Foco retorna ao gatilho ao fechar.
 * - role="dialog" + aria-modal + aria-labelledby para leitores de tela.
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useRef(`lightbox-title-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
      // Focus trap simples: mantém Tab/Shift+Tab dentro do dialog
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
    // Foca o botão de fechar ao abrir
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Retorna o foco ao gatilho
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
        aria-haspopup="dialog"
        className={`group relative block w-full overflow-hidden rounded-xl border border-amber-500/30 bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className ?? ""}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          <h2 id={titleId.current} className="sr-only">
            {alt}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Fechar visualização ampliada"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="100vw"
              decoding="async"
              className="w-full h-auto max-h-[88vh] object-contain rounded-lg shadow-2xl"
            />
            {caption && (
              <figcaption className="text-center text-sm text-white/80 mt-3 italic">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
};

export default LightboxImage;
