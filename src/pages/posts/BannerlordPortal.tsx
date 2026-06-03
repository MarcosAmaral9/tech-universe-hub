import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import BackNavigation from "@/components/BackNavigation";
import CommentSection from "@/components/CommentSection";
import { ChevronRight } from "lucide-react";
import bannerlordHeroImg  from "@/assets/bannerlord-hero.webp";
import bannerlordGuiaImg  from "@/assets/bannerlord-guia.webp";
import bannerlordPortalImg from "@/assets/bannerlord-portal.webp";

const articles = [
  {
    slug:     "bannerlord-guia-completo-2026",
    title:    "Guia Completo",
    subtitle: "Tudo Sobre Mount & Blade II",
    desc:     "História, lançamento, modos, preço, edições e o estado atual do jogo após anos de atualizações da TaleWorlds.",
    image:    bannerlordGuiaImg,
    btn:      "Ver Guia",
    badge:    "🛡️ Novo",
  },
];

const BannerlordPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <BackNavigation category="geek" />

    {/* HERO */}
    <section className="relative h-[60vh] md:h-[420px] overflow-hidden">
      <img
        fetchpriority="high"
        src={bannerlordHeroImg}
        alt="Mount & Blade II: Bannerlord — batalha medieval em Calradia"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="container relative h-full flex flex-col justify-end pb-12">
        <span className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
          Especial · Games · Estratégia & RPG
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          Mount &amp; Blade II: Bannerlord
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          O sandbox medieval da TaleWorlds — Calradia, 8 culturas, batalhas com mil soldados, política, comércio,
          forja e a expansão War Sails.
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="inline-flex items-center gap-1.5 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Versão 1.0 — 25 de outubro de 2022
          </span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">
            PC · Xbox One · Xbox Series X|S · PS4 · PS5
          </span>
          <span className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">
            TaleWorlds Entertainment
          </span>
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="container py-10 max-w-4xl">
      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong>Mount &amp; Blade II: Bannerlord</strong> é a sequência direta de <em>Mount &amp; Blade: Warband</em>,
        ambientada 200 anos antes em <strong>Calradia</strong> — um continente fictício inspirado na Europa medieval,
        no Império Bizantino e nas estepes da Ásia Central. Desenvolvido pela turca <strong>TaleWorlds Entertainment</strong>,
        ficou em <strong>Early Access desde 30 de março de 2020</strong> e teve a versão <strong>1.0 lançada em 25 de outubro
        de 2022</strong>, com suporte contínuo via patches e expansões. Em 2025 a TaleWorlds anunciou a primeira grande
        expansão, <strong>War Sails</strong>, focada em combate naval.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        Este painel reúne tudo que vamos publicar sobre o jogo: ficha técnica, mapa de Calradia, culturas, reinos, árvores
        de tropas, comparações tier-a-tier, requisitos de PC, mods, tempo para zerar e a expansão War Sails. Apenas dados
        confirmados por fontes oficiais — TaleWorlds, Steam, Mount &amp; Blade Wiki, PCGamingWiki, HowLongToBeat e Nexus Mods.
      </p>

      <div className="relative mt-8 rounded-2xl overflow-hidden aspect-video border border-border">
        <img
          src={bannerlordPortalImg}
          alt="Mapa estilizado de Calradia com banners das oito culturas de Bannerlord"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    </section>

    {/* ARTICLES GRID */}
    <section className="container py-8">
      <h2 className="font-display text-3xl font-bold mb-8">Artigos do Especial</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/post/${article.slug}`}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden shrink-0">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {article.badge && (
                <span className="absolute top-2 right-2 text-xs bg-amber-500/90 text-black px-2 py-0.5 rounded-full font-bold">
                  {article.badge}
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-amber-400 font-bold uppercase tracking-wide mb-1">
                {article.title}
              </p>
              <h3 className="font-display text-lg font-bold leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                {article.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {article.desc}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-amber-400 group-hover:gap-2 transition-all">
                {article.btn} <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-6 italic">
        Mais artigos do especial Bannerlord serão publicados nas próximas semanas: mapa de Calradia, culturas, reinos,
        árvores de tropas, melhores tropas, comparativos, expansão War Sails, mods, requisitos, tempo para zerar e dicas.
      </p>
    </section>

    <AdInArticle className="my-8" />

    {/* FICHA TÉCNICA */}
    <section className="container py-8 pb-16 max-w-4xl">
      <h2 className="font-display text-3xl font-bold mb-8">Ficha Técnica Rápida</h2>
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
              ["Desenvolvedor",  "TaleWorlds Entertainment (Ancara, Turquia)"],
              ["Publicador",     "TaleWorlds Entertainment"],
              ["Engine",         "Engine proprietária da TaleWorlds"],
              ["Gênero",         "RPG de Ação / Estratégia / Sandbox medieval"],
              ["Plataformas",    "PC (Steam, Epic, GOG) · Xbox One · Xbox Series X|S · PS4 · PS5"],
              ["Early Access",   "30 de março de 2020 (PC)"],
              ["Lançamento 1.0", "25 de outubro de 2022 — PC, Xbox e PlayStation"],
              ["Modos",          "Campanha sandbox · História (Dragon Banner) · Custom Battle · Multiplayer"],
              ["Preço base",     "US$ 49,99 (Steam) — R$ ~99,90 historicamente, sujeito a câmbio"],
              ["Expansão",       "War Sails (anunciada pela TaleWorlds em 2025, combate naval)"],
              ["Suporte a mods", "Oficial via Steam Workshop, Nexus Mods e launcher do jogo"],
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

    {/* CONVITE A COMENTAR */}
    <section className="container pb-16 max-w-4xl">
      <CommentSection
        postId="bannerlord-portal"
        postTitle="Painel Mount & Blade II: Bannerlord"
        category="geek"
        inviteTitle="Participe da conversa"
        inviteSubtitle="Qual cultura você joga? Qual sua tropa favorita? Compartilhe sua experiência em Calradia."
      />
    </section>
  </div>
);

export default BannerlordPortal;
