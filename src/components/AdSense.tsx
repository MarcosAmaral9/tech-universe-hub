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
  const { pathname } = useLocation();

  const blocked = BLOCKED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (blocked || pushed.current) return;
    const t = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch { /* not ready */ }
    }, 150);
    return () => clearTimeout(t);
  }, [blocked, pathname]);

  if (blocked) return null;

  return (
    <div ref={forwardedRef} className={`ad-unit overflow-hidden text-center ${className}`} aria-hidden="true">
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
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
