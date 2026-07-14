import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ReadingProgressBar from "./ReadingProgressBar";
import DynamicSEO from "./DynamicSEO";
import Breadcrumb from "./Breadcrumb";
import { AdAnchorMobile } from "./AdSense";
import NewsletterSignup from "./NewsletterSignup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DynamicSEO />
      <ReadingProgressBar />
      <Header />
      <main className="flex-1">
        {/* Breadcrumb global: sempre no topo de toda página, acima do título.
            Padrão único do site — não repetir <Breadcrumb /> nas páginas.
            O componente retorna null automaticamente na home / rotas sem trilha. */}
        <div className="container pt-4 md:pt-6">
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
