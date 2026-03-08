import { Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

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

const SocialSection = () => {
  const instagramUrl = "https://www.instagram.com/viciocode?igsh=ZmJ5YmhyMm1odzE=";
  const tiktokUrl = "https://www.tiktok.com/@viciocode?_r=1&_t=ZS-939Mau0jxR6";

  return (
    <section className="py-12 bg-secondary/50 rounded-2xl mb-12">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
          🔔 Não perca nenhuma novidade!
        </h2>
        
        {/* Desktop: QR Codes + clickable links */}
        <div className="hidden md:flex justify-center gap-12">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
            <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <QRCodeSVG 
                value={instagramUrl} 
                size={150}
                level="H"
                includeMargin={true}
              />
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
              <Instagram className="h-5 w-5 text-pink-500" />
              <span>Instagram</span>
            </div>
          </a>
          
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
            <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <QRCodeSVG 
                value={tiktokUrl} 
                size={150}
                level="H"
                includeMargin={true}
              />
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
              <TikTokIcon />
              <span>TikTok</span>
            </div>
          </a>
        </div>

        {/* Mobile: Links only (no QR codes) */}
        <div className="flex md:hidden flex-col gap-4 max-w-sm mx-auto">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-6 w-6" />
            Seguir no Instagram
          </a>
          
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 bg-black text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <TikTokIcon />
            Seguir no TikTok
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;