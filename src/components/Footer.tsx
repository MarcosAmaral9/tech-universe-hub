import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
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
            <Link to="/" className="font-display text-2xl font-bold inline-block">
              <span className="logo-vicio">VICIO</span>
              <span className="logo-code">&lt;CODE&gt;</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Seu portal definitivo para IAs, investimentos, cultura geek e o mundo otaku. 
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
                <Link to="/investimentos" className="text-muted-foreground hover:text-invest transition-colors">
                  Investimentos
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

          {/* Social - Links only on mobile */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Redes Sociais</h4>
            {/* Desktop: Icons only, no links */}
            <div className="hidden md:flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <TikTokIcon />
              </div>
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
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 VICIO&lt;CODE&gt;. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;