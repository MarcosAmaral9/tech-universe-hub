import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Search, Menu, X, FileText, ChevronDown, LogIn, LogOut, User, WifiOff, Download } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchModal from "./SearchModal";
import SettingsDrawer from "./SettingsDrawer";
import OfflinePostsBadge from "./OfflinePostsBadge";
import { usePWAStandalone } from "@/hooks/usePWAStandalone";
import { useOfflinePosts } from "@/hooks/useOfflinePosts";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, profile, signOut } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isStandalone = usePWAStandalone();
  const { count: offlineCount } = useOfflinePosts();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminOrPreview =
    user?.email === "viciocode01@gmail.com" ||
    (typeof window !== "undefined" && window.location.hostname.includes("lovable"));

  const navLinks = [
    { name: "IAs", path: "/ia", color: "text-ia" },
    { name: "Finanças", path: "/financas", color: "text-invest" },
    { name: "Geek", path: "/geek", color: "text-geek" },
    { name: "Otaku", path: "/otaku", color: "text-otaku" },
    { name: "Arquivo", path: "/arquivo", color: "text-foreground" },
    { name: "Instalar App", path: "/instalar", color: "text-primary" },
  ];

  const legalLinks = [
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
    { name: "Privacidade", path: "/privacidade" },
    { name: "Termos", path: "/termos" },
    { name: "Política de Conteúdo", path: "/politica-conteudo" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isLegalActive = legalLinks.some(link => location.pathname === link.path);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const closeMenu = () => setIsMenuOpen(false);

  const displayName = profile?.nickname || profile?.name || user?.email?.split("@")[0] || "Usuário";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center group min-w-0 shrink">
            <span className="font-display text-2xl font-bold truncate" translate="no">
              <span className="logo-vicio">VICIO</span>
              <span className="logo-code">&lt;CODE&gt;</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-secondary ${
                  isActive(link.path)
                    ? `${link.color} bg-secondary`
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Desktop-only: Social Panel */}
            {isAdminOrPreview && (
              <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex hover:bg-secondary">
                <Link to="/painel-social">
                  <FileText className="h-5 w-5 text-primary" />
                </Link>
              </Button>
            )}

            {/* Desktop-only: Offline posts badge */}
            <div className="hidden md:flex">
              <OfflinePostsBadge />
            </div>

            {/* Desktop-only: Standalone Offline shortcut */}
            {isStandalone && user && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:inline-flex hover:bg-secondary text-muted-foreground hover:text-primary"
                title="Conteúdo Offline"
              >
                <Link to="/leitura-offline" title="Artigos offline">
                  <WifiOff className="h-4 w-4" />
                </Link>
              </Button>
            )}

            {/* Search — visible on mobile + desktop */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hover:bg-secondary"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Legal Pages Dropdown - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`hidden md:flex items-center gap-1 hover:bg-secondary ${
                    isLegalActive ? "bg-secondary text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden lg:inline">Legal</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {legalLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={`w-full ${isActive(link.path) ? "bg-secondary" : ""}`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu / Login Button — always visible */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-secondary md:size-auto md:px-3" aria-label="Menu do usuário">
                    {profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt="" className="w-6 h-6 rounded-full object-cover" />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                    <span className="hidden lg:inline ml-2 max-w-[100px] truncate">{displayName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to={`/perfil/${user.id}`} className="w-full">👤 Meu Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/configuracoes" className="w-full">⚙️ Configurações</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="w-4 h-4 mr-2" /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon" asChild className="hover:bg-secondary text-muted-foreground md:size-auto md:px-3" aria-label="Entrar">
                <Link to="/entrar">
                  <LogIn className="h-5 w-5" />
                  <span className="hidden lg:inline ml-2">Entrar</span>
                </Link>
              </Button>
            )}

            {/* Settings — desktop only (no mobile; access via hamburger menu) */}
            <div className="hidden md:block">
              <SettingsDrawer />
            </div>

            {/* Mobile Menu Toggle — always visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container py-4 flex flex-col gap-1">
              {/* Settings inside mobile menu (replaces Buscar, agora visível no header) */}
              <div className="px-2">
                <SettingsDrawer />
              </div>

              {/* Offline posts badge (mobile) */}
              {offlineCount > 0 && (
                <Link
                  to="/leitura-offline"
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg font-medium text-emerald-500 hover:bg-secondary flex items-center gap-2"
                >
                  <Download className="h-4 w-4" /> {offlineCount} {offlineCount === 1 ? "post salvo" : "posts salvos"}
                </Link>
              )}

              {/* PWA-only Offline shortcut */}
              {isStandalone && user && (
                <Link
                  to="/leitura-offline"
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-primary hover:bg-secondary flex items-center gap-2"
                >
                  <WifiOff className="h-4 w-4" /> Conteúdo Offline
                </Link>
              )}

              {/* Painel Social (admin/preview) */}
              {isAdminOrPreview && (
                <Link
                  to="/painel-social"
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg font-medium text-primary hover:bg-secondary flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" /> Painel Social
                </Link>
              )}

              <div className="my-1 border-t border-border" />

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? `${link.color} bg-secondary`
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-2 border-t border-border" />

              {/* Auth link in mobile */}
              {user ? (
                <>
                  <Link
                    to={`/perfil/${user.id}`}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground hover:bg-secondary"
                  >
                    👤 Meu Perfil
                  </Link>
                  <Link
                    to="/configuracoes"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground hover:bg-secondary"
                  >
                    ⚙️ Configurações
                  </Link>
                  <button
                    onClick={() => { handleSignOut(); closeMenu(); }}
                    className="px-4 py-3 rounded-lg font-medium text-destructive hover:bg-secondary text-left"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  to="/entrar"
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg font-medium text-primary hover:bg-secondary flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" /> Entrar / Criar Conta
                </Link>
              )}

              <div className="my-2 border-t border-border" />

              <div className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider">
                Páginas Legais
              </div>
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
