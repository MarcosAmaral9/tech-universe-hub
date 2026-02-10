import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Search, Menu, X, FileText, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchModal from "./SearchModal";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "IAs", path: "/ia", color: "text-ia" },
    { name: "Investimentos", path: "/investimentos", color: "text-invest" },
    { name: "Geek", path: "/geek", color: "text-geek" },
    { name: "Otaku", path: "/otaku", color: "text-otaku" },
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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-display text-2xl font-bold">
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
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hover:bg-secondary"
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
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-secondary"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? `${link.color} bg-secondary`
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="my-2 border-t border-border" />
              
              {/* Legal Links in Mobile */}
              <div className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider">
                Páginas Legais
              </div>
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
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
