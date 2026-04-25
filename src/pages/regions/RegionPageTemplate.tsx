/**
 * RegionPageTemplate — template padrão para páginas de regiões de Pywel
 * Inclui TODOS os componentes obrigatórios dos artigos do VicioCode:
 * AdLeaderboard, AdRectangle, RelatedPosts, CommentSection,
 * trackArticleRead, BackNavigation, ShareWhatsApp, DynamicSEO
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Compass, Snowflake, Building2, Cpu, Skull,
  MapPin, Mountain, Swords, Lightbulb, Clock, User, Calendar,
  Shield, Star, Info,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import BackNavigation from "@/components/BackNavigation";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import DynamicSEO from "@/components/DynamicSEO";

export type RegionSlug = "pailune" | "hernand" | "demeniss" | "delesyia" | "crimson-desert";

// Importa a imagem de zoom específica de cada região
import pailuneImg    from "@/assets/crimson-desert-regiao-pailune.webp";
import hernandImg    from "@/assets/crimson-desert-regiao-hernand.webp";
import demenissImg   from "@/assets/crimson-desert-regiao-demeniss.webp";
import delesyiaImg   from "@/assets/crimson-desert-regiao-delesyia.webp";
import crimsonImg    from "@/assets/crimson-desert-regiao-crimson-desert.webp";

const REGION_IMAGES: Record<RegionSlug, string> = {
  pailune:        pailuneImg,
  hernand:        hernandImg,
  demeniss:       demenissImg,
  delesyia:       delesyiaImg,
  "crimson-desert": crimsonImg,
};

interface OtherRegion { slug: RegionSlug; name: string; label: string; }

export interface RegionPageProps {
  slug: RegionSlug;
  name: string;
  label: string;
  iconKey: "compass" | "snowflake" | "building" | "cpu" | "skull";
  accentClass: string;
  badgeClass: string;
  position: string;
  biome: string;
  climate: string;
  overview: string[];
  locations: { name: string; desc: string }[];
  bosses: { name: string; difficulty: 1|2|3|4|5; desc: string; reward: string; tip: string }[];
  tips: string[];
  factions?: { name: string; desc: string }[];
  lore?: string[];
  seo: { title: string; description: string; keywords: string; };
}

const ICONS = { compass: Compass, snowflake: Snowflake, building: Building2, cpu: Cpu, skull: Skull } as const;

const ALL_REGIONS: OtherRegion[] = [
  { slug: "pailune",        name: "Pailune",        label: "Norte Gelado"      },
  { slug: "hernand",        name: "Hernand",         label: "Área Inicial"      },
  { slug: "demeniss",       name: "Demeniss",        label: "Capital Política"  },
  { slug: "delesyia",       name: "Delesyia",        label: "Região Industrial" },
  { slug: "crimson-desert", name: "Crimson Desert",  label: "Deserto Sem Lei"   },
];

const STARS = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

const RegionPageTemplate = ({
  slug, name, label, iconKey, accentClass, badgeClass,
  position, biome, climate, overview, locations, bosses,
  tips, factions, lore, seo,
}: RegionPageProps) => {
  const Icon = ICONS[iconKey];
  const heroImg = REGION_IMAGES[slug];
  const others = ALL_REGIONS.filter((r) => r.slug !== slug);
  const articleSlug = `crimson-desert-regiao-${slug}`;

  useEffect(() => {
    trackArticleRead(articleSlug, `${name} — Guia Completo da Região em Pywel`, "geek");
  }, [articleSlug, name]);

  // SEO específico da região (DynamicSEO não aceita props — injetamos no head)
  useEffect(() => {
    const prevTitle = document.title;
    document.title = seo.title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    return () => { document.title = prevTitle; };
  }, [seo.title, seo.description, seo.keywords]);

  return (
    <>
      <DynamicSEO />

      <div className="container max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <BackNavigation category="geek" />

        <AdLeaderboard />

        {/* Header */}
        <header className="mb-8 mt-4">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <CategoryBadge category="geek" size="lg" />
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeClass}`}>{label}</span>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">Crimson Desert</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-3 flex items-start gap-3">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary shrink-0 mt-1" />
            <span>{name} — Guia Completo da Região</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3 mb-4">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VicioCode</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />Abril 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />8 min de leitura</span>
          </div>

          <ShareWhatsApp />
        </header>

        {/* Hero — zoom na região específica, sem pins */}
        <figure className="mb-8 rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
          <img
            src={heroImg}
            alt={`Mapa de Pywel — zoom na região de ${name}`}
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-4 py-3 text-xs sm:text-sm text-muted-foreground italic border-t border-border bg-muted/20">
            Zoom no mapa oficial de Pywel — região de <strong>{name}</strong> ({position}).
          </figcaption>
        </figure>

        {/* Visão Geral */}
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2>Visão geral de {name}</h2>
          {overview.map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <AdRectangle />

        {/* Bioma & Clima */}
        <section className={`not-prose my-8 rounded-2xl border p-5 md:p-6 ${accentClass}`}>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-5">
            <Mountain className="h-5 w-5 text-primary" /> Bioma e Clima
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-foreground flex items-center gap-1.5">🌿 Bioma</p>
              <p className="text-muted-foreground leading-relaxed">{biome}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground flex items-center gap-1.5">🌦 Clima</p>
              <p className="text-muted-foreground leading-relaxed">{climate}</p>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section className="not-prose my-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" /> Localização em Pywel
          </h2>
          <div className="rounded-xl border border-border bg-card p-5 text-sm">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Posição:</strong> {position}
            </p>
            <p className="mt-2 text-muted-foreground">
              Veja a região destacada no{" "}
              <Link to="/post/crimson-desert-mapa-regioes-pywel" className="text-primary hover:underline font-semibold">
                Mapa Interativo Completo de Pywel
              </Link>{" "}
              — clique no pin de <strong>{name}</strong> para zoom automático.
            </p>
          </div>
        </section>

        {/* Cidades e Locais */}
        <section className="not-prose my-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" /> Cidades e Locais-Chave
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {locations.map((loc) => (
              <div key={loc.name} className="rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors">
                <p className="font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                  <span className="text-primary text-xs">◆</span> {loc.name}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AdRectangle />

        {/* Bosses */}
        <section className="not-prose my-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Swords className="h-5 w-5 text-red-400" /> Bosses Confirmados
          </h2>
          <div className="space-y-4">
            {bosses.map((b) => (
              <div key={b.name} className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-bold text-foreground flex items-center gap-2">
                    <span className="text-red-400">⚔</span> {b.name}
                  </p>
                  <span className="text-yellow-400 text-sm shrink-0 font-mono">{STARS(b.difficulty)}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{b.desc}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-2">
                  <span className="text-emerald-400">🏆 {b.reward}</span>
                </div>
                <p className="text-xs text-amber-400 mt-2 italic">💡 {b.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facções (se houver) */}
        {factions && factions.length > 0 && (
          <section className="not-prose my-8">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-blue-400" /> Facções e Grupos
            </h2>
            <div className="space-y-3">
              {factions.map((f) => (
                <div key={f.name} className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="font-semibold text-foreground mb-1">🛡 {f.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lore (se houver) */}
        {lore && lore.length > 0 && (
          <section className="prose prose-lg dark:prose-invert max-w-none my-8">
            <h2>Lore e História de {name}</h2>
            {lore.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        )}

        {/* Dicas */}
        <section className="not-prose my-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-yellow-400" /> Dicas de Exploração
          </h2>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground bg-card border border-border rounded-lg p-3 hover:border-primary/30 transition-colors">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <AdRectangle />

        {/* Outras regiões */}
        <section className="not-prose my-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" /> Outras Regiões de Pywel
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {others.map((r) => (
              <Link key={r.slug} to={`/regiao/${r.slug}`}
                className="group rounded-xl border border-border bg-card p-3 sm:p-4 hover:border-primary/50 hover:bg-accent transition-all text-center">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Botão voltar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/post/crimson-desert-mapa-regioes-pywel"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" /> Mapa completo de Pywel
          </Link>
          <Link to="/post/crimson-desert-bosses-guia-chefes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground text-sm transition-colors">
            <Swords className="h-4 w-4" /> Guia de Bosses
          </Link>
        </div>

        <RelatedPosts currentSlug={articleSlug} category="geek" />
        <CommentSection postSlug={articleSlug} />
      </div>
    </>
  );
};

export default RegionPageTemplate;
