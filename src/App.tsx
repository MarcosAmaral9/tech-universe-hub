import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";
import PWAUpdatePrompt from "./components/PWAUpdatePrompt";
import { lazy, Suspense, useEffect } from "react";

// Apply saved font size on app load
const FONT_SIZE_KEY = "viciocode_font_size";
const savedFontSize = localStorage.getItem(FONT_SIZE_KEY);
if (savedFontSize) {
  document.documentElement.classList.add(`font-${savedFontSize}`);
}

// Apply saved accent color on app load
const ACCENT_COLOR_KEY = "viciocode_accent_color";
const accentColorMap: Record<string, string> = {
  cyan: "187 85% 43%",
  purple: "270 70% 55%",
  green: "142 70% 45%",
  orange: "25 95% 55%",
  pink: "330 80% 60%",
  blue: "220 90% 55%",
};
const savedAccent = localStorage.getItem(ACCENT_COLOR_KEY);
if (savedAccent && accentColorMap[savedAccent]) {
  document.documentElement.style.setProperty("--primary", accentColorMap[savedAccent]);
  document.documentElement.style.setProperty("--ring", accentColorMap[savedAccent]);
}

// Lazy-loaded pages — only downloaded when user navigates to them
const NotFound = lazy(() => import("./pages/NotFound"));
const OtakuPage = lazy(() => import("./pages/OtakuPage"));
const IAPage = lazy(() => import("./pages/IAPage"));
const InvestimentosPage = lazy(() => import("./pages/InvestimentosPage"));
const GeekPage = lazy(() => import("./pages/GeekPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ContentPolicyPage = lazy(() => import("./pages/ContentPolicyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const InstallPage = lazy(() => import("./pages/InstallPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

// Lazy-loaded posts
const DiferencaMangasManhuas = lazy(() => import("./pages/posts/DiferencaMangasManhuas"));
const DiferenciarManhuasManhwas = lazy(() => import("./pages/posts/DiferenciarManhuasManhwas"));
const MelhoresManhwasSistema = lazy(() => import("./pages/posts/MelhoresManhwasSistema"));
const IATransformandoDublagem = lazy(() => import("./pages/posts/IATransformandoDublagem"));
const IARemasterizacaoJogos = lazy(() => import("./pages/posts/IARemasterizacaoJogos"));
const InvestirEmTecnologia2026 = lazy(() => import("./pages/posts/InvestirEmTecnologia2026"));
const TesouroDireto2026 = lazy(() => import("./pages/posts/TesouroDireto2026"));
const RendaPassiva2026 = lazy(() => import("./pages/posts/RendaPassiva2026"));
const CarteiraIniciantes2026 = lazy(() => import("./pages/posts/CarteiraIniciantes2026"));
const BitcoinCripto2026 = lazy(() => import("./pages/posts/BitcoinCripto2026"));
const IRPF2026 = lazy(() => import("./pages/posts/IRPF2026"));
const IAMercadoFinanceiro2026 = lazy(() => import("./pages/posts/IAMercadoFinanceiro2026"));
const EducacaoFinanceira3Baldes = lazy(() => import("./pages/posts/EducacaoFinanceira3Baldes"));
const FIIs2026 = lazy(() => import("./pages/posts/FIIs2026"));
const SairDasDividas2026 = lazy(() => import("./pages/posts/SairDasDividas2026"));
const PlanejamentoFinanceiro2026 = lazy(() => import("./pages/posts/PlanejamentoFinanceiro2026"));
const CalculadorasFinanceiras = lazy(() => import("./pages/posts/CalculadorasFinanceiras"));
const VikingsLegadoRagnar = lazy(() => import("./pages/posts/VikingsLegadoRagnar"));
const HellLetLooseSimulador = lazy(() => import("./pages/posts/HellLetLooseSimulador"));
const Avatar2009Tecnologia = lazy(() => import("./pages/posts/Avatar2009Tecnologia"));
const AvatarCaminhoDaAgua = lazy(() => import("./pages/posts/AvatarCaminhoDaAgua"));
const Avatar3FogoECinzas = lazy(() => import("./pages/posts/Avatar3FogoECinzas"));
const AvatarFrontiersOfPandora = lazy(() => import("./pages/posts/AvatarFrontiersOfPandora"));
const AvatarPortal = lazy(() => import("./pages/posts/AvatarPortal"));
const AssassinsCreedPortal = lazy(() => import("./pages/posts/AssassinsCreedPortal"));
const ACValhalla = lazy(() => import("./pages/posts/ACValhalla"));
const ACShadows = lazy(() => import("./pages/posts/ACShadows"));
const ACOdyssey = lazy(() => import("./pages/posts/ACOdyssey"));
const ACBlackFlag = lazy(() => import("./pages/posts/ACBlackFlag"));
const ACOrigins = lazy(() => import("./pages/posts/ACOrigins"));
const ACMirage = lazy(() => import("./pages/posts/ACMirage"));
const AC3Remastered = lazy(() => import("./pages/posts/AC3Remastered"));
const ACSyndicate = lazy(() => import("./pages/posts/ACSyndicate"));
const ACUnity = lazy(() => import("./pages/posts/ACUnity"));
const ACRogue = lazy(() => import("./pages/posts/ACRogue"));
const ACRanking2026 = lazy(() => import("./pages/posts/ACRanking2026"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <PWAUpdatePrompt />
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/otaku" element={<OtakuPage />} />
                <Route path="/ia" element={<IAPage />} />
                <Route path="/financas" element={<InvestimentosPage />} />
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
                <Route path="/post/tesouro-direto-2026-guia-completo" element={<TesouroDireto2026 />} />
                <Route path="/post/renda-passiva-2026-formas-comprovadas" element={<RendaPassiva2026 />} />
                <Route path="/post/carteira-investimentos-iniciantes-2026" element={<CarteiraIniciantes2026 />} />
                <Route path="/post/bitcoin-criptomoedas-2026-investir" element={<BitcoinCripto2026 />} />
                <Route path="/post/irpf-2026-guia-declarar-pagar-menos" element={<IRPF2026 />} />
                <Route path="/post/ia-mercado-financeiro-2026-investimentos" element={<IAMercadoFinanceiro2026 />} />
                <Route path="/post/educacao-financeira-metodo-3-baldes" element={<EducacaoFinanceira3Baldes />} />
                <Route path="/post/fiis-2026-melhores-fundos-imobiliarios" element={<FIIs2026 />} />
                <Route path="/post/sair-das-dividas-2026-plano-acao" element={<SairDasDividas2026 />} />
                <Route path="/post/planejamento-financeiro-2026-metas" element={<PlanejamentoFinanceiro2026 />} />
                <Route path="/post/calculadoras-financeiras-ativos" element={<CalculadorasFinanceiras />} />
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
                <Route path="/instalar" element={<InstallPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
