import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import BackNavigation from "@/components/BackNavigation";
import { ChevronRight } from "lucide-react";
import crimsonHeroImg        from "@/assets/crimson-desert-hero.webp";
import crimsonGuiaImg        from "@/assets/crimson-desert-guia.webp";
import crimsonCombateImg     from "@/assets/crimson-desert-combate.webp";
import crimsonReviewImg      from "@/assets/crimson-desert-review.webp";
import crimsonMapaImg        from "@/assets/crimson-desert-mapa-pywel.webp";
import crimsonBuildsImg      from "@/assets/crimson-desert-builds.webp";
import crimsonBossesImg      from "@/assets/crimson-desert-bosses.webp";
import crimsonIniciantesImg  from "@/assets/crimson-desert-iniciantes.webp";
import crimsonEquipImg       from "@/assets/crimson-desert-equipamentos.webp";

const articles = [
  {
    slug:     "crimson-desert-guia-completo",
    title:    "Guia Completo",
    subtitle: "RPG Mais Esperado de 2026",
    desc:     "Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss.",
    image:    crimsonGuiaImg,
    btn:      "Ver Guia",
    badge:    null,
  },
  {
    slug:     "crimson-desert-combate-blackspace-engine",
    title:    "Sistema de Combate",
    subtitle: "BlackSpace Engine",
    desc:     "Análise aprofundada das mecânicas de combate, chefes épicos, montarias e tecnologia.",
    image:    crimsonCombateImg,
    btn:      "Ver Análise",
    badge:    null,
  },
  {
    slug:     "crimson-desert-review-2026",
    title:    "Review 2026",
    subtitle: "Metacritic 78 · 239k Players no Steam",
    desc:     "O que a crítica e os jogadores disseram após o lançamento — pontos fortes, fracos e se vale a pena.",
    image:    crimsonReviewImg,
    btn:      "Ver Review",
    badge:    null,
  },
  {
    slug:     "crimson-desert-builds-guia-2026",
    title:    "Sistema de Progressão",
    subtitle: "Kliff e Estilos de Jogo",
    desc:     "Tudo sobre a progressão de Kliff, Abyss Artifacts, habilidades e estilos de combate.",
    image:    crimsonBuildsImg,
    btn:      "Ver Builds",
    badge:    null,
  },
  {
    slug:     "crimson-desert-mapa-regioes-pywel",
    title:    "Mapa de Pywel",
    subtitle: "Todas as Regiões Explicadas",
    desc:     "Pywel tem 5 regiões + The Abyss — tamanho, biomas, bosses regionais e como se locomover.",
    image:    crimsonMapaImg,
    btn:      "Ver Mapa",
    badge:    null,
  },
  {
    slug:     "crimson-desert-bosses-guia-chefes",
    title:    "Guia de Bosses",
    subtitle: "76 Chefes — Onde Encontrar e Como Derrotar",
    desc:     "Estratégias, fraquezas, mecânicas de fase e recompensas exclusivas de cada boss. Atualizado com o patch 23/03/2026.",
    image:    crimsonBossesImg,
    btn:      "Ver Bosses",
    badge:    "⚔️ Novo",
  },
  {
    slug:     "crimson-desert-guia-iniciantes-dicas",
    title:    "Guia para Iniciantes",
    subtitle: "20 Dicas Essenciais para Começar",
    desc:     "Progressão sem XP, fast travel escasso, combate avançado, inventário e todos os sistemas que o jogo não explica.",
    image:    crimsonIniciantesImg,
    btn:      "Ver Dicas",
    badge:    "🗺️ Novo",
  },
  {
    slug:     "crimson-desert-melhores-equipamentos-inicio",
    title:    "Melhores Equipamentos",
    subtitle: "Onde Encontrar as Melhores Armas",
    desc:     "Sword of the Lord, Flamespitter, armaduras do Fallen Kingdom e sistema de refinamento completo.",
    image:    crimsonEquipImg,
    btn:      "Ver Equipamentos",
    badge:    "🗡️ Novo",
  },
];

const CrimsonDesertPanel = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <BackNavigation category="geek" />

    {/* ── HERO ─────────────────────────────────────────────── */}
    <section className="relative h-[60vh] md:h-[420px] overflow-hidden">
      <img
        fetchpriority="high"
        src={crimsonHeroImg}
        alt="Crimson Desert — mundo de Pywel"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="container relative h-full flex flex-col justify-end pb-12">
        <span className="text-red-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
          Especial · Games
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          Crimson Desert
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          O RPG de mundo aberto da Pearl Abyss — história, gameplay, sistema de combate e tudo sobre Pywel.
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="inline-flex items-center gap-1.5 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponível — 19 de março de 2026
          </span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">
            PC · PS5 · Xbox Series X|S
          </span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">
            Pearl Abyss
          </span>
        </div>
      </div>
    </section>

    {/* ── ARTICLES GRID ────────────────────────────────────── */}
    <section className="container py-12">
      <h2 className="font-display text-3xl font-bold mb-8">Artigos do Especial</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/post/${article.slug}`}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:border-red-500/50 hover:shadow-lg transition-all flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden shrink-0">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {article.badge && (
                <span className="absolute top-2 right-2 text-xs bg-red-500/90 text-white px-2 py-0.5 rounded-full font-bold">
                  {article.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-red-400 font-bold uppercase tracking-wide mb-1">
                {article.title}
              </p>
              <h3 className="font-display text-lg font-bold leading-snug mb-2 group-hover:text-red-400 transition-colors">
                {article.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {article.desc}
              </p>
              {/* Button */}
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-red-400 group-hover:gap-2 transition-all">
                {article.btn} <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* ── GAME INFO TABLE ───────────────────────────────────── */}
    <section className="container py-8 pb-16">
      <h2 className="font-display text-3xl font-bold mb-8">Ficha Técnica</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse bg-card">
          <thead>
            <tr className="bg-secondary">
              <th className="text-left py-4 px-6 font-bold text-sm">Detalhe</th>
              <th className="text-left py-4 px-6 font-bold text-sm">Informação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Desenvolvedor",  "Pearl Abyss"],
              ["Engine",         "BlackSpace Engine (proprietária)"],
              ["Gênero",         "RPG de Ação / Mundo Aberto"],
              ["Plataformas",    "PC (Steam, Epic, PA site) · PS5 · Xbox Series X|S · macOS"],
              ["Lançamento",     "19 de março de 2026"],
              ["Preço",          "~R$ 349 (Standard) · ~R$ 399 (Deluxe)"],
              ["Metacritic PC",  "78/100 · OpenCritic: 80, 81% de recomendação"],
              ["Vendas",         "+2M cópias em 24h · +3M em 4 dias"],
              ["Bosses",         "76 bosses (28 história + 48 opcionais)"],
              ["Patch",          "23/03/2026 — ajuste de HP/dano de bosses"],
            ].map(([key, val]) => (
              <tr key={key} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 px-6 font-medium text-sm">{key}</td>
                <td className="py-3 px-6 text-muted-foreground text-sm">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default CrimsonDesertPanel;
