import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OtakuPage from "./pages/OtakuPage";
import IAPage from "./pages/IAPage";
import InvestimentosPage from "./pages/InvestimentosPage";
import GeekPage from "./pages/GeekPage";
import DiferencaMangasManhuas from "./pages/posts/DiferencaMangasManhuas";
import DiferenciarManhuasManhwas from "./pages/posts/DiferenciarManhuasManhwas";
import MelhoresManhwasSistema from "./pages/posts/MelhoresManhwasSistema";
import IATransformandoDublagem from "./pages/posts/IATransformandoDublagem";
import InvestirEmTecnologia2026 from "./pages/posts/InvestirEmTecnologia2026";
import VikingsLegadoRagnar from "./pages/posts/VikingsLegadoRagnar";
import HellLetLooseSimulador from "./pages/posts/HellLetLooseSimulador";
import Avatar2009Tecnologia from "./pages/posts/Avatar2009Tecnologia";
import AvatarCaminhoDaAgua from "./pages/posts/AvatarCaminhoDaAgua";
import Avatar3FogoECinzas from "./pages/posts/Avatar3FogoECinzas";
import AvatarFrontiersOfPandora from "./pages/posts/AvatarFrontiersOfPandora";
import AvatarPortal from "./pages/posts/AvatarPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/otaku" element={<OtakuPage />} />
              <Route path="/ia" element={<IAPage />} />
              <Route path="/investimentos" element={<InvestimentosPage />} />
              <Route path="/geek" element={<GeekPage />} />
              {/* Avatar Portal */}
              <Route path="/geek/avatar" element={<AvatarPortal />} />
              {/* Post Routes */}
              <Route path="/post/diferenca-mangas-manhuas-manhwas" element={<DiferencaMangasManhuas />} />
              <Route path="/post/como-diferenciar-manhuas-manhwas" element={<DiferenciarManhuasManhwas />} />
              <Route path="/post/10-melhores-manhwas-sistema-2026" element={<MelhoresManhwasSistema />} />
              <Route path="/post/ia-transformando-dublagem-animes" element={<IATransformandoDublagem />} />
              <Route path="/post/investir-em-tecnologia-2026" element={<InvestirEmTecnologia2026 />} />
              <Route path="/post/vikings-legado-ragnar-lothbrok" element={<VikingsLegadoRagnar />} />
              <Route path="/post/hell-let-loose-simulador-guerra" element={<HellLetLooseSimulador />} />
              <Route path="/post/avatar-2009-filme-revolucionou-tecnologia" element={<Avatar2009Tecnologia />} />
              <Route path="/post/avatar-caminho-da-agua-fisica-fluidos" element={<AvatarCaminhoDaAgua />} />
              <Route path="/post/avatar-3-fogo-cinzas-lado-sombrio-pandora" element={<Avatar3FogoECinzas />} />
              <Route path="/post/avatar-frontiers-pandora-ubisoft-review" element={<AvatarFrontiersOfPandora />} />
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
