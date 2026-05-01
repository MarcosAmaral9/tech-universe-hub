import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
import { Instagram, Download } from "lucide-react";

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const instagramUrl = "https://www.instagram.com/viciocode?igsh=ZmJ5YmhyMm1odzE=";
  const tiktokUrl = "https://www.tiktok.com/@viciocode?_r=1&_t=ZS-939Mau0jxR6";

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold inline-block" translate="no">
              <span className="logo-vicio">VICIO</span>
              <span className="logo-code">&lt;CODE&gt;</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Seu portal definitivo para IAs, finanças, cultura geek e o mundo otaku. 
              Conteúdo de qualidade para mentes curiosas.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ia" className="text-muted-foreground hover:text-ia transition-colors">
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link to="/financas" className="text-muted-foreground hover:text-invest transition-colors">
                  Finanças
                </Link>
              </li>
              <li>
                <Link to="/geek" className="text-muted-foreground hover:text-geek transition-colors">
                  Mundo Geek
                </Link>
              </li>
              <li>
                <Link to="/otaku" className="text-muted-foreground hover:text-otaku transition-colors">
                  Mundo Otaku
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/politica-conteudo" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Conteúdo
                </Link>
              </li>
              <li>
                <Link to="/instalar" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  Instalar App
                </Link>
              </li>
              <li>
                <Link to="/configuracoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Configurações
                </Link>
              </li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {/* Desktop: Clickable icons */}
              <div className="hidden md:flex gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <TikTokIcon />
                </a>
              </div>
              {/* Mobile: Clickable links */}
              <div className="flex md:hidden gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            ✉️ Newsletter semanal — grátis
          </p>
          <NewsletterSignup variant="compact" />
          <p className="text-xs text-muted-foreground mt-2">Sem spam. Cancele quando quiser.</p>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 <span translate="no" className="notranslate">VICIO&lt;CODE&gt;</span>. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
