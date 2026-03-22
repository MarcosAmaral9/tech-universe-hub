import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import BackNavigation from "@/components/BackNavigation";
import heroImg from "@/assets/overlord-portal-banner.webp";
import overlordGuiaImg from "@/assets/overlord-guia-completo.webp";
import overlordCharsImg from "@/assets/overlord-personagens.webp";

const articles = [
  {
    slug: "overlord-guia-completo-temporadas-ainz",
    title: "Guia Completo",
    subtitle: "4 Temporadas + Filme Sacred Kingdom",
    desc: "De julho de 2015 ao filme de 2024 — tudo sobre a ascensão de Ainz Ooal Gown ao trono do Sorcerer Kingdom.",
    image: overlordGuiaImg,
    btn: "Ver Guia",
  },
  {
    slug: "overlord-ainz-guardians-personagens",
    title: "Personagens",
    subtitle: "Ainz e os Floor Guardians de Nazarick",
    desc: "Albedo, Demiurge, Shalltear, Cocytus e todos os guardiões — suas histórias, poderes e a dinâmica com Ainz.",
    image: overlordCharsImg,
    btn: "Ver Personagens",
  },
];

const OverlordPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <BackNavigation category="otaku" />

    {/* Hero */}
    <section className="relative h-[55vh] md:h-[400px] overflow-hidden">
      <img fetchpriority="high" src={heroImg} alt="Overlord — Ainz Ooal Gown" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="container relative h-full flex flex-col justify-end pb-10">
        <span className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Especial · Isekai</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
          Overlord
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">
          A saga de Ainz Ooal Gown — o Sorcerer King que veio de outro mundo e construiu um empire sobre os ossos de nações inteiras.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1.5 rounded-full font-medium">🎬 Filme: Sacred Kingdom (2024)</span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">4 Temporadas</span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">Madhouse</span>
        </div>
      </div>
    </section>

    {/* Articles */}
    <section className="container py-12">
      <h2 className="font-display text-3xl font-bold mb-8">Artigos do Especial</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((a) => (
          <div key={a.slug} className="bg-card rounded-xl border border-border overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <span className="text-sm text-yellow-400 font-medium">{a.title}</span>
              <h3 className="font-display text-xl font-bold mt-1">{a.subtitle}</h3>
              <p className="text-muted-foreground text-sm mt-2">{a.desc}</p>
              <Link to={`/post/${a.slug}`} className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                {a.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Info */}
    <section className="container py-8">
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-display text-2xl font-bold mb-4">Ficha Técnica</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["Título original", "オーバーロード (Ōbārōdo)"],
                ["Autor", "Kugane Maruyama (light novel) / Satoshi Ōshio (mangá)"],
                ["Estúdio", "Madhouse"],
                ["Temporadas", "4 (T1: 2015, T2: 2018, T3: 2018, T4: 2022)"],
                ["Filme", "The Sacred Kingdom — 20 de setembro de 2024"],
                ["Volumes LN", "18 volumes (em andamento)"],
                ["Mangá", "Overlord + Overlord: New World (desde abr/2024)"],
                ["Streaming", "Crunchyroll, Hulu · Filme no Crunchyroll desde abr/2025"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 pr-4 font-medium text-foreground w-40 align-top">{k}</td>
                  <td className="py-3 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
);

export default OverlordPortal;
