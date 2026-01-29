import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container">
        <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-display font-bold text-foreground mb-2">
                🍪 Este site usa cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e exibir 
                anúncios relevantes. Ao continuar navegando, você concorda com nossa{" "}
                <Link to="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>{" "}
                e{" "}
                <Link to="/termos" className="text-primary hover:underline">
                  Termos e Condições
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="flex-1 md:flex-none"
              >
                Recusar
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="flex-1 md:flex-none"
              >
                Aceitar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={declineCookies}
                className="hidden md:flex"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
