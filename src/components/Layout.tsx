import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ReadingProgressBar from "./ReadingProgressBar";
import ScrollbarTheme from "./ScrollbarTheme";
import DynamicSEO from "./DynamicSEO";
import Breadcrumb from "./Breadcrumb";
import { AdAnchorMobile } from "./AdSense";
import NewsletterSignup from "./NewsletterSignup";

interface LayoutProps {
  children: ReactNode;
  /**
   * Quando true, o breadcrumb fica fixo no topo (sticky) durante o scroll no
   * mobile — melhora a orientação em artigos longos. Padrão: lê da preferência
   * salva em localStorage (`viciocode:sticky-breadcrumb-mobile` === "1").
   * Em telas ≥ md o breadcrumb continua estático (não invade o conteúdo).
   */
  stickyMobileBreadcrumb?: boolean;
}

export const STICKY_BREADCRUMB_KEY = "viciocode:sticky-breadcrumb-mobile";

const Layout = ({ children, stickyMobileBreadcrumb }: LayoutProps) => {
  const [sticky, setSticky] = useState(!!stickyMobileBreadcrumb);

  useEffect(() => {
    if (stickyMobileBreadcrumb !== undefined) return;
    const read = () => {
      try {
        setSticky(localStorage.getItem(STICKY_BREADCRUMB_KEY) === "1");
      } catch {
        /* ignore */
      }
    };
    read();
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      if (typeof detail === "boolean") setSticky(detail);
      else read();
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === STICKY_BREADCRUMB_KEY) read();
    };
    window.addEventListener("viciocode:sticky-breadcrumb-change", onCustom);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("viciocode:sticky-breadcrumb-change", onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, [stickyMobileBreadcrumb]);

  const wrapperClass = sticky
    ? "container pt-4 md:pt-6 sticky top-0 z-30 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:static md:bg-transparent md:backdrop-blur-0"
    : "container pt-4 md:pt-6";

  return (
    <div className="min-h-screen flex flex-col">
      <DynamicSEO />
      <ReadingProgressBar />
      <Header />
      <main className="flex-1">
        {/* Breadcrumb global: sempre no topo de toda página, acima do título.
            Padrão único do site — não repetir <Breadcrumb /> nas páginas.
            Renderizado APENAS aqui. O check `scripts/check-breadcrumb-placement.mjs`
            (roda no prebuild) falha se algum outro arquivo importar ou renderizar. */}
        <div className={wrapperClass}>
          <Breadcrumb />
        </div>
        {children}
      </main>
      <Footer />
      <BackToTop />
      <AdAnchorMobile />
      <NewsletterSignup variant="modal" />
    </div>
  );
};

export default Layout;
