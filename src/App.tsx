import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";
import { lazy, Suspense, useEffect } from "react";

// Apply saved font size on app load
const FONT_SIZE_KEY = "viciocode_font_size";
const savedFontSize = localStorage.getItem(FONT_SIZE_KEY);
if (savedFontSize) {
  document.documentElement.classList.add(`font-${savedFontSize}`);
}

// ── Limpeza de caches de widget obsoletos (migração para cache de servidor) ──
// Remove todas as versões antigas de cache de widget do localStorage
// O cache agora é centralizado no MySQL do servidor
const _oldWidgetKeys = [
  "b3_stock_cache", "b3_stock_cache_v2", "b3_stock_cache_v3",
  "crypto_cache", "crypto_cache_v2", "crypto_cache_v3",
  "exchange_rates_cache", "exchange_rates_cache_v2", "exchange_rates_cache_v3",
  "viciocode_cache_version",
];
_oldWidgetKeys.forEach((k) => localStorage.removeItem(k));
// ────────────────────────────────────────────────────────────────────────────

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
const CotacoesPage = lazy(() => import("./pages/CotacoesPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const PublicProfilePage = lazy(() => import("./pages/PublicProfilePage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const GoogleAuthCallback = lazy(() => import("./pages/GoogleAuthCallback"));

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
const AC3Remastered  = lazy(() => import("./pages/posts/AC3Remastered"));
const AC1Altair      = lazy(() => import("./pages/posts/AC1Altair"));
const AC2Ezio        = lazy(() => import("./pages/posts/AC2Ezio"));
const ACBrotherhood  = lazy(() => import("./pages/posts/ACBrotherhood"));
const ACRevelations  = lazy(() => import("./pages/posts/ACRevelations"));
const ACSyndicate = lazy(() => import("./pages/posts/ACSyndicate"));
const ACUnity = lazy(() => import("./pages/posts/ACUnity"));
const ACRogue = lazy(() => import("./pages/posts/ACRogue"));
const ACRanking2026 = lazy(() => import("./pages/posts/ACRanking2026"));
const ChatGPTvsGeminiClaude2026 = lazy(() => import("./pages/posts/ChatGPTvsGeminiClaude2026"));
const IAGanharDinheiro2026 = lazy(() => import("./pages/posts/IAGanharDinheiro2026"));
const IATrabalho2026 = lazy(() => import("./pages/posts/IATrabalho2026"));
const AppsIAProdutividade2026 = lazy(() => import("./pages/posts/AppsIAProdutividade2026"));
const IAGenerativaIniciantes2026 = lazy(() => import("./pages/posts/IAGenerativaIniciantes2026"));
const DeepfakesIA2026 = lazy(() => import("./pages/posts/DeepfakesIA2026"));
const IAEducacao2026 = lazy(() => import("./pages/posts/IAEducacao2026"));
const AgentesIA2026 = lazy(() => import("./pages/posts/AgentesIA2026"));
const IASaude2026 = lazy(() => import("./pages/posts/IASaude2026"));
const RegulamentacaoIA2026 = lazy(() => import("./pages/posts/RegulamentacaoIA2026"));
const AnimesAguardados2026 = lazy(() => import("./pages/posts/AnimesAguardados2026"));
const GuiaCosplay2026 = lazy(() => import("./pages/posts/GuiaCosplay2026"));
const MangaVsAnime2026 = lazy(() => import("./pages/posts/MangaVsAnime2026"));
const CulturaOtakuBrasil2026 = lazy(() => import("./pages/posts/CulturaOtakuBrasil2026"));
const JogosAnime2026 = lazy(() => import("./pages/posts/JogosAnime2026"));
const AprenderJaponesAnime2026 = lazy(() => import("./pages/posts/AprenderJaponesAnime2026"));
const Isekai2026 = lazy(() => import("./pages/posts/Isekai2026"));
const MerchandisingOtaku2026 = lazy(() => import("./pages/posts/MerchandisingOtaku2026"));
const MelhoresMangas2026 = lazy(() => import("./pages/posts/MelhoresMangas2026"));
const SaudeMentalOtaku2026 = lazy(() => import("./pages/posts/SaudeMentalOtaku2026"));
const IACriatividade2026 = lazy(() => import("./pages/posts/IACriatividade2026"));
const IAPrivacidadeDados2026 = lazy(() => import("./pages/posts/IAPrivacidadeDados2026"));
const ETFs2026 = lazy(() => import("./pages/posts/ETFs2026"));
const EconomiaDomestica2026 = lazy(() => import("./pages/posts/EconomiaDomestica2026"));
// ── 17 Mar 2026 ──────────────────────────────────────────────────────────────
const CDB2026Guia            = lazy(() => import("./pages/posts/CDB2026Guia"));
const PrevidenciaPrivada2026 = lazy(() => import("./pages/posts/PrevidenciaPrivada2026"));
const IACodigo2026           = lazy(() => import("./pages/posts/IACodigo2026"));
const ModelosIAOpenSource2026= lazy(() => import("./pages/posts/ModelosIAOpenSource2026"));
const BaldursGate3Review2026 = lazy(() => import("./pages/posts/BaldursGate3Review2026"));
const DragonAgeVeilguard2026 = lazy(() => import("./pages/posts/DragonAgeVeilguard2026"));
const DemonSlayerHashira2026 = lazy(() => import("./pages/posts/DemonSlayerHashira2026"));
const OnePieceFinalSaga2026  = lazy(() => import("./pages/posts/OnePieceFinalSaga2026"));
const CrimsonDesertPanel = lazy(() => import("./pages/posts/CrimsonDesertPanel"));
const CrimsonDesertGuiaCompleto = lazy(() => import("./pages/posts/CrimsonDesertGuiaCompleto"));
const CrimsonDesertCombate = lazy(() => import("./pages/posts/CrimsonDesertCombate"));
const CrimsonDesertReview = lazy(() => import("./pages/posts/CrimsonDesertReview"));
const CrimsonDesertBuilds = lazy(() => import("./pages/posts/CrimsonDesertBuilds"));
const CrimsonDesertMapa     = lazy(() => import("./pages/posts/CrimsonDesertMapa"));
const TensuraGuiaCompleto   = lazy(() => import("./pages/posts/TensuraGuiaCompleto"));
const TensuraPersonagens    = lazy(() => import("./pages/posts/TensuraPersonagens"));
const TensuraPortal         = lazy(() => import("./pages/posts/TensuraPortal"));
const OverlordGuiaCompleto  = lazy(() => import("./pages/posts/OverlordGuiaCompleto"));
const OverlordPersonagens   = lazy(() => import("./pages/posts/OverlordPersonagens"));
const OverlordPortal        = lazy(() => import("./pages/posts/OverlordPortal"));
const SocialPanelPage = lazy(() => import("./pages/SocialPanelPage"));

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
        <AuthProvider>
          <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/otaku" element={<OtakuPage />} />
                <Route path="/ia" element={<IAPage />} />
                <Route path="/financas" element={<InvestimentosPage />} />
                <Route path="/cotacoes" element={<CotacoesPage />} />
                <Route path="/entrar" element={<AuthPage />} />
                <Route path="/auth/google" element={<GoogleAuthCallback />} />
                <Route path="/perfil/:id" element={<PublicProfilePage />} />
                <Route path="/redefinir-senha" element={<ResetPasswordPage />} />
                <Route path="/geek" element={<GeekPage />} />
                {/* Portals */}
                <Route path="/geek/avatar" element={<AvatarPortal />} />
                <Route path="/otaku/tensura" element={<TensuraPortal />} />
                <Route path="/otaku/overlord" element={<OverlordPortal />} />
                <Route path="/geek/assassins-creed" element={<AssassinsCreedPortal />} />
                <Route path="/geek/crimson-desert" element={<CrimsonDesertPanel />} />
                <Route path="/post/crimson-desert-guia-completo" element={<CrimsonDesertGuiaCompleto />} />
                <Route path="/post/crimson-desert-combate-blackspace-engine" element={<CrimsonDesertCombate />} />
                <Route path="/post/crimson-desert-review-2026" element={<CrimsonDesertReview />} />
                <Route path="/post/crimson-desert-builds-guia-2026" element={<CrimsonDesertBuilds />} />
                <Route path="/post/crimson-desert-mapa-regioes-pywel" element={<CrimsonDesertMapa />} />
                <Route path="/post/tensura-guia-completo-temporadas-filmes" element={<TensuraGuiaCompleto />} />
                <Route path="/post/tensura-personagens-rimuru-demon-lords" element={<TensuraPersonagens />} />
                <Route path="/post/overlord-guia-completo-temporadas-ainz" element={<OverlordGuiaCompleto />} />
                <Route path="/post/overlord-ainz-guardians-personagens" element={<OverlordPersonagens />} />
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
                <Route path="/post/ac-1-altair-terra-santa-1191" element={<AC1Altair />} />
                <Route path="/post/ac-2-ezio-italia-renascentista" element={<AC2Ezio />} />
                <Route path="/post/ac-brotherhood-ezio-roma-borgia" element={<ACBrotherhood />} />
                <Route path="/post/ac-revelations-ezio-constantinopla" element={<ACRevelations />} />
                <Route path="/post/ac-syndicate-revolucao-industrial-londres" element={<ACSyndicate />} />
                <Route path="/post/ac-unity-jogo-frente-tempo-paris" element={<ACUnity />} />
                <Route path="/post/ac-rogue-assassino-templario" element={<ACRogue />} />
                <Route path="/post/ranking-melhor-assassins-creed-2026" element={<ACRanking2026 />} />
                <Route path="/post/chatgpt-vs-gemini-vs-claude-2026" element={<ChatGPTvsGeminiClaude2026 />} />
                <Route path="/post/como-usar-ia-ganhar-dinheiro-2026" element={<IAGanharDinheiro2026 />} />
                <Route path="/post/ia-no-trabalho-2026-profissoes" element={<IATrabalho2026 />} />
                <Route path="/post/melhores-apps-ia-produtividade-2026" element={<AppsIAProdutividade2026 />} />
                <Route path="/post/ia-generativa-iniciantes-2026-guia" element={<IAGenerativaIniciantes2026 />} />
                <Route path="/post/deepfakes-ia-2026-como-identificar" element={<DeepfakesIA2026 />} />
                <Route path="/post/ia-educacao-2026-estudar-inteligente" element={<IAEducacao2026 />} />
                <Route path="/post/agentes-ia-2026-como-funcionam" element={<AgentesIA2026 />} />
                <Route path="/post/ia-saude-2026-diagnosticos-futuro" element={<IASaude2026 />} />
                <Route path="/post/regulamentacao-ia-brasil-mundo-2026" element={<RegulamentacaoIA2026 />} />
                {/* New Otaku Posts */}
                <Route path="/post/animes-mais-aguardados-2026" element={<AnimesAguardados2026 />} />
                <Route path="/post/guia-cosplay-2026-iniciantes" element={<GuiaCosplay2026 />} />
                <Route path="/post/manga-vs-anime-adaptacao-2026" element={<MangaVsAnime2026 />} />
                <Route path="/post/cultura-otaku-brasil-2026" element={<CulturaOtakuBrasil2026 />} />
                <Route path="/post/melhores-jogos-anime-2026" element={<JogosAnime2026 />} />
                <Route path="/post/aprender-japones-anime-2026" element={<AprenderJaponesAnime2026 />} />
                <Route path="/post/isekai-2026-genero-domina" element={<Isekai2026 />} />
                <Route path="/post/merchandising-otaku-colecionar-2026" element={<MerchandisingOtaku2026 />} />
                <Route path="/post/melhores-mangas-ler-2026" element={<MelhoresMangas2026 />} />
                <Route path="/post/saude-mental-cultura-otaku-2026" element={<SaudeMentalOtaku2026 />} />
                {/* New IA + Finance Posts */}
                <Route path="/post/ia-criatividade-arte-musica-2026" element={<IACriatividade2026 />} />
                <Route path="/post/ia-privacidade-dados-2026" element={<IAPrivacidadeDados2026 />} />
                <Route path="/post/etfs-2026-guia-completo-investir" element={<ETFs2026 />} />
                <Route path="/post/economia-domestica-2026-cortar-gastos" element={<EconomiaDomestica2026 />} />
                {/* 17 Mar 2026 — 8 new posts */}
                <Route path="/post/cdb-2026-guia-completo" element={<CDB2026Guia />} />
                <Route path="/post/previdencia-privada-pgbl-vgbl-2026" element={<PrevidenciaPrivada2026 />} />
                <Route path="/post/ia-codigo-programadores-2026" element={<IACodigo2026 />} />
                <Route path="/post/modelos-ia-open-source-2026" element={<ModelosIAOpenSource2026 />} />
                <Route path="/post/baldurs-gate-3-review-2026" element={<BaldursGate3Review2026 />} />
                <Route path="/post/dragon-age-veilguard-review-2026" element={<DragonAgeVeilguard2026 />} />
                <Route path="/post/demon-slayer-hashira-guia-2026" element={<DemonSlayerHashira2026 />} />
                <Route path="/post/one-piece-final-saga-2026" element={<OnePieceFinalSaga2026 />} />
                {/* Legal Pages */}
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/privacidade" element={<PrivacyPolicyPage />} />
                <Route path="/termos" element={<TermsPage />} />
                <Route path="/politica-conteudo" element={<ContentPolicyPage />} />
                <Route path="/instalar" element={<InstallPage />} />
                <Route path="/configuracoes" element={<SettingsPage />} />
                <Route path="/painel-social" element={<SocialPanelPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
  </QueryClientProvider>
);

export default App;
