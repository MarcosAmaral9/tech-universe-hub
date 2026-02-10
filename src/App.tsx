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
import IARemasterizacaoJogos from "./pages/posts/IARemasterizacaoJogos";
import InvestirEmTecnologia2026 from "./pages/posts/InvestirEmTecnologia2026";
import VikingsLegadoRagnar from "./pages/posts/VikingsLegadoRagnar";
import HellLetLooseSimulador from "./pages/posts/HellLetLooseSimulador";
import Avatar2009Tecnologia from "./pages/posts/Avatar2009Tecnologia";
import AvatarCaminhoDaAgua from "./pages/posts/AvatarCaminhoDaAgua";
import Avatar3FogoECinzas from "./pages/posts/Avatar3FogoECinzas";
import AvatarFrontiersOfPandora from "./pages/posts/AvatarFrontiersOfPandora";
import AvatarPortal from "./pages/posts/AvatarPortal";
import AssassinsCreedPortal from "./pages/posts/AssassinsCreedPortal";
import ACValhalla from "./pages/posts/ACValhalla";
import ACShadows from "./pages/posts/ACShadows";
import ACOdyssey from "./pages/posts/ACOdyssey";
import ACBlackFlag from "./pages/posts/ACBlackFlag";
import ACOrigins from "./pages/posts/ACOrigins";
import ACMirage from "./pages/posts/ACMirage";
import AC3Remastered from "./pages/posts/AC3Remastered";
import ACSyndicate from "./pages/posts/ACSyndicate";
import ACUnity from "./pages/posts/ACUnity";
import ACRogue from "./pages/posts/ACRogue";
import ACRanking2026 from "./pages/posts/ACRanking2026";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ContentPolicyPage from "./pages/ContentPolicyPage";
import ContactPage from "./pages/ContactPage";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/otaku" element={<OtakuPage />} />
              <Route path="/ia" element={<IAPage />} />
              <Route path="/investimentos" element={<InvestimentosPage />} />
              <Route path="/geek" element={<GeekPage />} />
              {/* Portals */}
              <Route path="/geek/avatar" element={<AvatarPortal />} />
              <Route path="/geek/assassins-creed" element={<AssassinsCreedPortal />} />
              {/* Post Routes */}
              <Route path="/post/diferenca-mangas-manhuas-manhwas" element={<DiferencaMangasManhuas />} />
              <Route path="/post/como-diferenciar-manhuas-manhwas" element={<DiferenciarManhuasManhwas />} />
              <Route path="/post/10-melhores-manhwas-sistema-2026" element={<MelhoresManhwasSistema />} />
              <Route path="/post/ia-transformando-dublagem-animes" element={<IATransformandoDublagem />} />
              <Route path="/post/ia-remasterizacao-jogos-classicos" element={<IARemasterizacaoJogos />} />
              <Route path="/post/investir-em-tecnologia-2026" element={<InvestirEmTecnologia2026 />} />
              <Route path="/post/vikings-legado-ragnar-lothbrok" element={<VikingsLegadoRagnar />} />
              <Route path="/post/hell-let-loose-simulador-guerra" element={<HellLetLooseSimulador />} />
              <Route path="/post/avatar-2009-filme-revolucionou-tecnologia" element={<Avatar2009Tecnologia />} />
              <Route path="/post/avatar-caminho-da-agua-fisica-fluidos" element={<AvatarCaminhoDaAgua />} />
              <Route path="/post/avatar-3-fogo-cinzas-lado-sombrio-pandora" element={<Avatar3FogoECinzas />} />
              <Route path="/post/avatar-frontiers-pandora-ubisoft-review" element={<AvatarFrontiersOfPandora />} />
              {/* Assassin's Creed */}
              <Route path="/post/ac-valhalla-jornada-epica-eivor" element={<ACValhalla />} />
              <Route path="/post/ac-shadows-japao-feudal" element={<ACShadows />} />
              <Route path="/post/ac-odyssey-odisseia-grecia" element={<ACOdyssey />} />
              <Route path="/post/ac-black-flag-melhor-jogo-piratas" element={<ACBlackFlag />} />
              <Route path="/post/ac-origins-renascimento-franquia-egito" element={<ACOrigins />} />
              <Route path="/post/ac-mirage-retorno-raizes-bagda" element={<ACMirage />} />
              <Route path="/post/ac-3-remastered-revolucao-americana" element={<AC3Remastered />} />
              <Route path="/post/ac-syndicate-revolucao-industrial-londres" element={<ACSyndicate />} />
              <Route path="/post/ac-unity-jogo-frente-tempo-paris" element={<ACUnity />} />
              <Route path="/post/ac-rogue-assassino-templario" element={<ACRogue />} />
              <Route path="/post/ranking-melhor-assassins-creed-2026" element={<ACRanking2026 />} />
              {/* Legal Pages */}
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/privacidade" element={<PrivacyPolicyPage />} />
              <Route path="/termos" element={<TermsPage />} />
              <Route path="/politica-conteudo" element={<ContentPolicyPage />} />
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
