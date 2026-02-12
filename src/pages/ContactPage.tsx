import { Phone, Mail, MapPin } from "lucide-react";
import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactPage = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Contato</h1>
      <p className="text-muted-foreground mb-10">
        Entre em contato conosco por qualquer um dos canais abaixo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Telefone */}
        <a
          href="tel:+5531971533902"
          className="flex md:hidden items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Telefone</h3>
            <p className="text-muted-foreground">(31) 9 7153-3902</p>
          </div>
        </a>

        {/* E-mail */}
        <a
          href="mailto:viciocode01@gmail.com"
          className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">E-mail</h3>
            <p className="text-muted-foreground">viciocode01@gmail.com</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/553171533902"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
            <span className="text-green-500"><WhatsAppIcon /></span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground">Enviar mensagem</p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/viciocode?igsh=ZmJ5YmhyMm1odzE="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0">
            <Instagram className="h-5 w-5 text-pink-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Instagram</h3>
            <p className="text-muted-foreground">@viciocode</p>
          </div>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@viciocode?_r=1&_t=ZS-93npw1KWXYr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <TikTokIcon />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">TikTok</h3>
            <p className="text-muted-foreground">@viciocode</p>
          </div>
        </a>

        {/* Endereço */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Dom+Geraldo+Fernandes+Bijos+375+Santa+Helena+Contagem+MG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Endereço</h3>
            <p className="text-muted-foreground">
              Rua Dom Geraldo Fernandes Bijos, 375<br />
              Santa Helena, Contagem - MG<br />
              CEP: 32015-200
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
