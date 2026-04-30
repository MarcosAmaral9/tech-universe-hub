import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ReadingProgressBar from "./ReadingProgressBar";
import DynamicSEO from "./DynamicSEO";
import { AdAnchorMobile } from "./AdSense";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DynamicSEO />
      <ReadingProgressBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
      <AdAnchorMobile />
    </div>
  );
};

export default Layout;
