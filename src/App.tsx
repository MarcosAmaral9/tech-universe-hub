import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OtakuPage from "./pages/OtakuPage";
import IAPage from "./pages/IAPage";
import InvestimentosPage from "./pages/InvestimentosPage";
import GeekPage from "./pages/GeekPage";
import DiferencaMangasManhuas from "./pages/posts/DiferencaMangasManhuas";
import DiferenciarManhuasManhwas from "./pages/posts/DiferenciarManhuasManhwas";
import MelhoresManhwasSistema from "./pages/posts/MelhoresManhwasSistema";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/otaku" element={<OtakuPage />} />
              <Route path="/ia" element={<IAPage />} />
              <Route path="/investimentos" element={<InvestimentosPage />} />
              <Route path="/geek" element={<GeekPage />} />
              {/* Post Routes */}
              <Route path="/post/diferenca-mangas-manhuas-manhwas" element={<DiferencaMangasManhuas />} />
              <Route path="/post/como-diferenciar-manhuas-manhwas" element={<DiferenciarManhuasManhwas />} />
              <Route path="/post/10-melhores-manhwas-sistema-2026" element={<MelhoresManhwasSistema />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
