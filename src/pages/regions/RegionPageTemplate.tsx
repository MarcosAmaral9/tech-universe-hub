/**
 * RegionPageTemplate
 * Layout reutilizável das 5 páginas dedicadas de regiões de Pywel.
 * Cada página de região é um wrapper fino que passa props específicas para este template.
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Snowflake,
  Building2,
  Cpu,
  Skull,
  MapPin,
  Mountain,
  Swords,
  Lightbulb,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import mapaPywelImg from "@/assets/crimson-desert-pywel-completo.webp";

export type RegionSlug = "pailune" | "hernand" | "demeniss" | "delesyia" | "crimson-desert";

interface OtherRegion {
  slug: RegionSlug;
  name: string;
  label: string;
}

export interface RegionPageProps {
  slug: RegionSlug;
  name: string;
  label: string;
  iconKey: "compass" | "snowflake" | "building" | "cpu" | "skull";
  /** Cor de fundo dos blocos destacados (classes Tailwind). */
  accentClass: string;
  /** Classe de cor do badge. */
  badgeClass: string;
  /** Posição aproximada (texto). */
  position: string;
  /** Bioma e clima. */
  biome: string;
  climate: string;
  /** Visão geral em parágrafos. */
  overview: string[];
  /** Cidades / locais-chave. */
  locations: { name: string; desc: string }[];
  /** Bosses confirmados. */
  bosses: { name: string; desc: string }[];
  /** Dicas de exploração. */
  tips: string[];
  /** SEO. */
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

const ICONS = {
  compass: Compass,
  snowflake: Snowflake,
  building: Building2,
  cpu: Cpu,
  skull: Skull,
} as const;

const ALL_REGIONS: OtherRegion[] = [
  { slug: "pailune", name: "Pailune", label: "Norte Gelado" },
  { slug: "hernand", name: "Hernand", label: "Área Inicial" },
  { slug: "demeniss", name: "Demeniss", label: "Capital Política" },
  { slug: "delesyia", name: "Delesyia", label: "Região Tecnológica" },
  { slug: "crimson-desert", name: "Crimson Desert", label: "Deserto Sem Lei" },
];

const RegionPageTemplate = ({
  slug,
  name,
  label,
  iconKey,
  accentClass,
  badgeClass,
  position,
  biome,
  climate,
  overview,
  locations,
  bosses,
  tips,
  seo,
}: RegionPageProps) => {
  const Icon = ICONS[iconKey];

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${seo.title} | VICIO<CODE>`;
    const setMeta = (n: string, c: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${n}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, n);
        document.head.appendChild(el);
      }
      el.setAttribute("content", c);
    };
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    return () => {
      document.title = prevTitle;
    };
  }, [seo.title, seo.description, seo.keywords]);

  const others = ALL_REGIONS.filter((r) => r.slug !== slug);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/post/crimson-desert-mapa-regioes-pywel"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao mapa completo de Pywel
        </Link>
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <CategoryBadge category="geek" size="lg" />
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}>{label}</span>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Crimson Desert
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 flex items-start gap-3">
          <Icon className="h-10 w-10 text-primary shrink-0 mt-1" />
          <span>
            {name} — Guia da Região em Pywel
          </span>
        </h1>
        <p className="text-muted-foreground text-base mt-3">
          <strong className="text-foreground">{label}</strong> · {position}
        </p>
        <ShareWhatsApp />
      </header>

      <figure className="mb-8 rounded-2xl overflow-hidden border border-border bg-card">
        <div className="aspect-[1178/1074] w-full bg-card p-2 sm:p-4">
          <img
            src={mapaPywelImg}
            alt={`Mapa de Pywel destacando ${name}`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="px-4 py-3 text-xs sm:text-sm text-muted-foreground italic border-t border-border bg-muted/20">
          Mapa do continente de Pywel — {name} está em <strong>{position}</strong>.
        </figcaption>
      </figure>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Visão geral</h2>
        {overview.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className={`not-prose my-8 rounded-2xl border p-5 md:p-6 ${accentClass}`}>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Mountain className="h-5 w-5 text-primary" /> Bioma e clima
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">🌿 Bioma predominante</p>
            <p className="text-muted-foreground">{biome}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">🌦 Clima</p>
            <p className="text-muted-foreground">{climate}</p>
          </div>
        </div>
      </section>

      <section className="not-prose my-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" /> Localização no mapa
        </h2>
        <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Posição:</strong> {position}
          </p>
          <p className="mt-2">
            Para visualizar a região no mapa interativo completo de Pywel, abra o post{" "}
            <Link
              to="/post/crimson-desert-mapa-regioes-pywel"
              className="text-primary hover:underline font-semibold"
            >
              Mapa Completo de Pywel
            </Link>{" "}
            e clique no pin de <strong>{name}</strong>.
          </p>
        </div>
      </section>

      <section className="not-prose my-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" /> Cidades e locais-chave
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
                <span className="text-primary">◆</span> {loc.name}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="not-prose my-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Swords className="h-5 w-5 text-red-400" /> Bosses confirmados
        </h2>
        <div className="space-y-3">
          {bosses.map((b) => (
            <div key={b.name} className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
              <p className="font-semibold text-foreground mb-1">⚔ {b.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="not-prose my-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-400" /> Dicas de exploração
        </h2>
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground bg-card border border-border rounded-lg p-3"
            >
              <span className="text-primary mt-0.5">▸</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="not-prose my-10">
        <h2 className="text-xl font-bold mb-4">Outras regiões de Pywel</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {others.map((r) => (
            <Link
              key={r.slug}
              to={`/regiao/${r.slug}`}
              className="group rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:bg-accent transition-all"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {r.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Explorar <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <Link
          to="/post/crimson-desert-mapa-regioes-pywel"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao mapa completo de Pywel
        </Link>
      </div>
    </article>
  );
};

export default RegionPageTemplate;
