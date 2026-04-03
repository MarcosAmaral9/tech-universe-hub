import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import BackNavigation from "@/components/BackNavigation";
import heroImg from "@/assets/tensura-portal-banner.webp";
import tensuraT1Img from "@/assets/tensura-guia-completo.webp";
import tensuraCharsImg from "@/assets/tensura-personagens.webp";

const articles = [
  {
    slug: "tensura-guia-completo-temporadas-filmes",
    title: "Guia Completo",
    subtitle: "Todas as Temporadas e Filmes",
    desc: "T1 (2018), T2 (2021), T3 (2024), Scarlet Bond, Tears of the Azure Sea e T4 em 2026.",
    image: tensuraT1Img,
    btn: "Ver Guia",
  },
  {
    slug: "tensura-personagens-rimuru-demon-lords",
    title: "Personagens",
    subtitle: "Rimuru, Milim e os Demon Lords",
    desc: "Conheça Rimuru Tempest, os aliados de Tempest, os Dez Grandes Demon Lords e o sistema de nomes.",
    image: tensuraCharsImg,
    btn: "Ver Personagens",
  },
];

const TensuraPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <BackNavigation category="otaku" />

    {/* Hero */}
    <section className="relative h-[55vh] md:h-[400px] overflow-hidden">
      <img fetchpriority="high" src={heroImg} alt="That Time I Got Reincarnated as a Slime" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="container relative h-full flex flex-col justify-end pb-10">
        <span className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">Especial · Isekai</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
          TenSura
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">
          <em>Tensei Shitara Slime Datta Ken</em> — a história de Rimuru Tempest, a gosma que se tornou Demon Lord e fundou uma nação onde monstros e humanos coexistem.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full font-medium">🎬 T4 estreia Abril 2026</span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">Anime · Mangá · Light Novel</span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">Estúdio 8-Bit</span>
        </div>
      <AdInArticle className="my-8" />
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
              <span className="text-sm text-blue-400 font-medium">{a.title}</span>
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
                ["Título original", "転生したらスライムだった件 (Tensei Shitara Slime Datta Ken)"],
                ["Autor", "Fuse (light novel) / Taiki Kawakami (mangá)"],
                ["Estúdio", "8-Bit"],
                ["Diretor", "Yasuhito Kikuchi / Atsushi Nakayama (T3)"],
                ["Temporadas", "3 (+ T4 em abril/2026)"],
                ["Filmes", "Scarlet Bond (nov/2022) · Tears of the Azure Sea (fev/2026)"],
                ["Streaming", "Crunchyroll (legendado e dublado em inglês)"],
                ["Light Novel", "23 volumes (encerrada em nov/2024)"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 pr-4 font-medium text-foreground w-40 align-top">{k}</td>
                  <td className="py-3 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <AdInArticle className="my-8" />
      </div>
    </section>
  </div>
);

export default TensuraPortal;
