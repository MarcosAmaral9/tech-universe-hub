import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Paths where ads should NOT be shown (legal / utility pages).
 */
const BLOCKED_PATHS = [
  "/sobre",
  "/contato",
  "/privacidade",
  "/termos",
  "/politica-conteudo",
  "/painel-social",
  "/instalar",
  "/configuracoes",
  "/entrar",
  "/redefinir-senha",
];

type AdFormat = "auto" | "rectangle" | "horizontal" | "vertical";

interface AdSenseProps {
  /** AdSense ad slot ID */
  slot: string;
  /** Ad format – defaults to "auto" (responsive) */
  format?: AdFormat;
  /** Extra className for the wrapper div */
  className?: string;
  /** Whether this is a full-width responsive ad */
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSense = ({ slot, format = "auto", className = "", responsive = true }: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const { pathname } = useLocation();
  const pushed = useRef(false);

  const isBlocked = BLOCKED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (isBlocked || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet – no-op
    }
  }, [isBlocked]);

  if (isBlocked) return null;

  return (
    <div className={`ad-container my-6 flex justify-center ${className}`} aria-hidden="true">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4907992121422514"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(responsive ? { "data-full-width-responsive": "true" } : {})}
      />
    </div>
  );
};

export default AdSense;

/**
 * Leaderboard ad – use after 2nd paragraph in articles.
 * Slot placeholder – replace with real slot IDs from AdSense dashboard.
 */
export const AdLeaderboard = ({ className }: { className?: string }) => (
  <AdSense slot="1234567890" format="horizontal" className={className} />
);

/**
 * Rectangle ad – use between sections in articles and sidebars.
 */
export const AdRectangle = ({ className }: { className?: string }) => (
  <AdSense slot="2345678901" format="rectangle" className={className} />
);

/**
 * In-article responsive ad – for within article content.
 */
export const AdInArticle = ({ className }: { className?: string }) => (
  <AdSense slot="3456789012" format="auto" className={className} />
);
