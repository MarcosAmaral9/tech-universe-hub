import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-gradient">
              MVTECH
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

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 MVTECH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
