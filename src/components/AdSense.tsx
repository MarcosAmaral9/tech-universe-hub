/**
 * AdSense.tsx — Componentes de anúncio Google AdSense
 *
 * SLOTS — substitua pelos IDs reais do painel:
 *   AdSense > Anúncios > Por bloco de anúncios > Criar bloco
 *
 * POLÍTICA ADSENSE:
 *   - Bloqueado em: páginas legais, auth, perfil, configurações
 *   - AdAnchorMobile: fixo na base mobile — maior CPM no PWA
 *   - AdInArticle: formato nativo entre parágrafos — maior CTR
 *   - Auto Ads ativado no painel complementa os blocos manuais
 */
import { forwardRef, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Alturas mínimas reservadas por formato e breakpoint (mobile / md / lg).
// Evitam colapso antes do fill e garantem largura mensurável para
// `data-full-width-responsive` em todas as resoluções.
const SIZE_CLASS: Record<string, string> = {
  horizontal: "min-h-[100px] md:min-h-[90px] lg:min-h-[90px] max-w-full",
  rectangle:  "min-h-[250px] md:min-h-[250px] lg:min-h-[280px] max-w-[336px] mx-auto",
  fluid:      "min-h-[120px] md:min-h-[150px] lg:min-h-[180px] max-w-full",
  vertical:   "min-h-[250px] md:min-h-[600px] max-w-[160px] mx-auto",
  auto:       "min-h-[100px] md:min-h-[120px] lg:min-h-[150px] max-w-full",
};

const SLOTS = {
  leaderboard: "1234567890", // Leaderboard / Horizontal responsivo
  rectangle:   "2345678901", // Retângulo médio 300×250
  inArticle:   "3456789012", // In-Article nativo (layout automático)
  anchor:      "4567890123", // Âncora mobile (fixo na base)
} as const;

// Caminhos sem anúncio (legais, auth, configurações, perfil)
const BLOCKED_PATHS = [
  "/privacidade",
  "/termos",
  "/politica-conteudo",
  "/entrar",
  "/cadastro",
  "/redefinir-senha",
  "/auth/",
  "/configuracoes",
  "/perfil/",
  "/painel-social",
  "/instalar",
];

declare global {
  interface Window { adsbygoogle: unknown[]; }
}

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";

interface AdProps {
  slot: string;
  format?: AdFormat;
  className?: string;
  responsive?: boolean;
  layoutKey?: string;
}

const AdUnit = forwardRef<HTMLDivElement, AdProps>(({ slot, format = "auto", className = "", responsive = true, layoutKey }, forwardedRef) => {
  const ref    = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [unfilled, setUnfilled] = useState(false);
  const { pathname } = useLocation();

  const blocked = BLOCKED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (blocked || pushed.current) return;
    // Espera o container ter largura > 0 (necessário para responsive no desktop)
    const tryPush = () => {
      const el = ref.current;
      if (!el) return false;
      const w = el.parentElement?.getBoundingClientRect().width ?? 0;
      if (w < 50) return false;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
        // Detecta unfilled após push para esconder caixa vazia
        setTimeout(() => {
          if (el.getAttribute("data-ad-status") === "unfilled") setUnfilled(true);
        }, 2000);
        return true;
      } catch { return false; }
    };
    if (tryPush()) return;
    const id = setInterval(() => { if (tryPush()) clearInterval(id); }, 250);
    const stop = setTimeout(() => clearInterval(id), 5000);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [blocked, pathname]);

  if (blocked || unfilled) return null;

  const minHeight = MIN_HEIGHT[format] ?? "100px";

  return (
    <div ref={forwardedRef} className={`ad-unit overflow-hidden text-center w-full ${className}`} aria-hidden="true">
      <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">Publicidade</div>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", minHeight, width: "100%" }}
        data-ad-client="ca-pub-4907992121422514"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(responsive ? { "data-full-width-responsive": "true" } : {})}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </div>
  );
});

AdUnit.displayName = "AdUnit";

export default AdUnit;

// ── Leaderboard (topo de artigos e hubs) ─────────────────────────────────────
export const AdLeaderboard = ({ className }: { className?: string }) => (
  <AdUnit slot={SLOTS.leaderboard} format="horizontal" className={`my-4 ${className ?? ""}`} />
);

// ── Rectangle (mid-content, entre seções) ────────────────────────────────────
export const AdRectangle = ({ className }: { className?: string }) => (
  <AdUnit slot={SLOTS.rectangle} format="rectangle" className={`my-6 ${className ?? ""}`} />
);

// ── In-Article nativo (entre parágrafos — maior CTR) ─────────────────────────
export const AdInArticle = ({ className }: { className?: string }) => (
  <AdUnit
    slot={SLOTS.inArticle}
    format="fluid"
    layoutKey="-fb+5w+4e-db+86"
    className={`my-6 ${className ?? ""}`}
  />
);

// ── Âncora Mobile (fixo na base — maior CPM no PWA) ──────────────────────────
export const AdAnchorMobile = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const blocked = BLOCKED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (blocked) return;
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, [blocked, pathname]);

  if (!show || blocked) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-card border-t border-border shadow-xl">
      <div className="flex items-center justify-between px-3 py-0.5">
        <span className="text-[10px] text-muted-foreground">Publicidade</span>
        <button onClick={() => setShow(false)} className="text-muted-foreground px-2 py-1 text-xs" aria-label="Fechar">✕</button>
      </div>
      <AdUnit slot={SLOTS.anchor} format="horizontal" responsive className="pb-safe" />
    </div>
  );
};
