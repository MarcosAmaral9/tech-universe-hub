import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import BackNavigation from "@/components/BackNavigation";
import CommentSection from "@/components/CommentSection";
import LightboxImage from "@/components/LightboxImage";
import SkeletonImage from "@/components/SkeletonImage";
import { ChevronRight, Ship, Map as MapIcon, Crown, Sword, Users, Hammer, Flag, Calendar, Trophy } from "lucide-react";
import bannerlordHeroImg from "@/assets/bannerlord-hero.webp";
import bannerlordGuiaImg from "@/assets/bannerlord-guia.webp";
import bannerlordCulturasImg from "@/assets/bannerlord-culturas-reinos.webp";
import bannerlordArvoresTropasImg from "@/assets/bannerlord-arvores-tropas.webp";
import bannerlordMelhoresTropasImg from "@/assets/bannerlord-melhores-tropas.webp";
import bannerlordWarSailsMap from "@/assets/bannerlord-war-sails-map.webp";

const articles = [
  {
    slug: "bannerlord-guia-completo-2026",
    title: "Guia Completo",
    subtitle: "Tudo Sobre Mount & Blade II",
    desc:
      "História, lançamento, modos, preço, edições e o estado atual do jogo após anos de atualizações da TaleWorlds.",
    image: bannerlordGuiaImg,
    btn: "Ver Guia",
    badge: "🛡️ Guia",
  },
  {
    slug: "bannerlord-culturas-reinos-calradia-2026",
    title: "Culturas & Reinos",
    subtitle: "Guia das 8 Facções de Calradia",
    desc:
      "Vlandia, Battania, Sturgia, Aserai, Khuzait e os 3 Impérios — tropas-estrela, pontos fortes, fracos e qual escolher na primeira partida.",
    image: bannerlordCulturasImg,
    btn: "Ver Culturas",
    badge: "✨ Novo",
  },
  {
    slug: "bannerlord-arvores-tropas-completo-2026",
    title: "Árvores de Tropas",
    subtitle: "Guia Completo das 9 Culturas (com Nords)",
    desc:
      "Todas as árvores tier por tier — do recruta T1 à elite T5. Inclui os Nords da expansão War Sails e composições híbridas testadas.",
    image: bannerlordArvoresTropasImg,
    btn: "Ver Tropas",
    badge: "✨ Novo",
  },
  {
    slug: "bannerlord-melhores-tropas-tier-list-2026",
    title: "Tier List 2026",
    subtitle: "As Melhores Tropas por Estilo",
    desc:
      "Ranking S/A/B/C por papel — linha, choque, arqueiros, cavalaria, horse archers e tropas navais dos Nords (War Sails).",
    image: bannerlordMelhoresTropasImg,
    btn: "Ver Ranking",
    badge: "🏆 Novo",
  },
];

const upcoming = [
  { icon: MapIcon, title: "Mapa de Calradia", desc: "Cidades, castelos e vilas de cada cultura" },
  { icon: Hammer, title: "Mods Essenciais", desc: "Steam Workshop, Nexus, Harmony" },
  { icon: Ship, title: "Expansão War Sails", desc: "Combate naval e novas regiões costeiras" },
];

const stats = [
  { label: "Culturas", value: "8" },
  { label: "Tropas por unidade", value: "Até 1.000" },
  { label: "Plataformas", value: "5" },
  { label: "Versão", value: "1.0+" },
];

const BannerlordPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <div className="container pt-4">
      <BackNavigation category="geek" />
    </div>

    {/* HERO */}
    <section className="relative h-[60vh] md:h-[460px] overflow-hidden">
      <SkeletonImage
        priority
        src={bannerlordHeroImg}
        alt="Mount & Blade II: Bannerlord — batalha medieval em Calradia"
        width={1920}
        height={1080}
        wrapperClassName="absolute inset-0 w-full h-full"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      <div className="container relative h-full flex flex-col justify-end pb-14">
        <span className="text-amber-400 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3">
          Especial · Games · Estratégia & RPG
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.05]">
          Mount &amp; Blade II:{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Bannerlord
          </span>
        </h1>
        <p className="text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
          O sandbox medieval da TaleWorlds — Calradia, 8 culturas, batalhas com mil soldados, política, comércio,
          forja e a expansão <strong>War Sails</strong>.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 text-xs bg-green-500/20 text-green-300 border border-green-500/40 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Versão 1.0 — 25 out 2022
          </span>
          <span className="text-xs bg-black/40 backdrop-blur-sm text-white/90 border border-white/10 px-3 py-1.5 rounded-full">
            PC · Xbox · PlayStation
          </span>
          <span className="text-xs bg-black/40 backdrop-blur-sm text-white/90 border border-white/10 px-3 py-1.5 rounded-full">
            TaleWorlds Entertainment
          </span>
        </div>
      </div>
    </section>

    {/* STATS STRIP */}
    <section className="border-y border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:border-r md:last:border-r-0 border-amber-500/20">
              <div className="font-display text-2xl md:text-3xl font-bold text-amber-400">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="container py-14 max-w-4xl">
      <div className="flex items-center gap-3 mb-5">
        <Flag className="h-6 w-6 text-amber-400" />
        <h2 className="font-display text-2xl md:text-3xl font-bold">Sobre o Especial</h2>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Mount &amp; Blade II: Bannerlord</strong> é a sequência direta de{" "}
        <em>Mount &amp; Blade: Warband</em>, ambientada 200 anos antes em <strong>Calradia</strong> — um continente
        fictício inspirado na Europa medieval, no Império Bizantino e nas estepes da Ásia Central. Desenvolvido pela
        turca <strong>TaleWorlds Entertainment</strong>, ficou em Early Access desde 30 de março de 2020 e teve a
        versão <strong>1.0 lançada em 25 de outubro de 2022</strong>, com suporte contínuo via patches e expansões.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        Em 2025 a TaleWorlds anunciou a primeira grande expansão, <strong className="text-amber-400">War Sails</strong>,
        focada em combate naval. Este painel reúne tudo que vamos publicar sobre o jogo — apenas dados confirmados por
        fontes oficiais (TaleWorlds, Steam, Mount &amp; Blade Wiki, PCGamingWiki, HowLongToBeat e Nexus Mods).
      </p>
    </section>

    {/* WAR SAILS SHOWCASE */}
    <section className="relative py-14 bg-gradient-to-b from-blue-950/30 via-slate-900/40 to-background border-y border-blue-500/20">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Ship className="h-4 w-4" /> Expansão · War Sails
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Mapa Oficial — Costa de Calradia</h2>
          <p className="text-muted-foreground max-w-2xl">
            A primeira expansão paga traz <strong className="text-blue-300">combate naval</strong>, novas regiões
            costeiras e uma camada de gestão para reinos com saída para o mar. Clique no mapa para inspecionar cada
            cidade portuária e estandarte.
          </p>
        </div>

        <LightboxImage
          src={bannerlordWarSailsMap}
          alt="Mapa oficial da expansão War Sails de Mount & Blade II: Bannerlord, mostrando a costa de Calradia com cidades portuárias, ilhas e estandartes coloridos de cada cultura envolvida no combate naval"
          caption="Clique para ampliar · Mapa oficial divulgado pela TaleWorlds"
          className="shadow-2xl shadow-blue-500/10"
          width={1991}
          height={1821}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
        />

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <Ship className="h-5 w-5 text-blue-300 mb-2" />
            <h3 className="font-bold text-sm text-blue-200">Combate Naval</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Batalhas em alto-mar, abordagens e novas armas a bordo.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <MapIcon className="h-5 w-5 text-blue-300 mb-2" />
            <h3 className="font-bold text-sm text-blue-200">Novas Regiões</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Costas, ilhas e cidades portuárias inéditas em Calradia.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <Crown className="h-5 w-5 text-blue-300 mb-2" />
            <h3 className="font-bold text-sm text-blue-200">Gestão Marítima</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Camada extra para reinos com saída para o mar.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ARTICLES GRID */}
    <section className="container py-14 max-w-6xl">
      <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
        <div>
          <h2 className="font-display text-3xl font-bold">Artigos do Especial</h2>
          <p className="text-sm text-muted-foreground mt-1">Conteúdo publicado e em produção</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/post/${article.slug}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden shrink-0">
              <SkeletonImage
                src={article.image}
                alt={article.title}
                width={1920}
                height={1080}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {article.badge && (
                <span className="absolute top-3 right-3 text-xs bg-amber-400 text-black px-2.5 py-1 rounded-full font-bold shadow-lg">
                  {article.badge}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[11px] text-amber-400 font-bold uppercase tracking-[0.15em] mb-2">{article.title}</p>
              <h3 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                {article.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.desc}</p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-amber-400 group-hover:gap-2 transition-all">
                {article.btn} <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}

        {upcoming.map((u) => (
          <div
            key={u.title}
            className="bg-card/50 rounded-2xl border border-dashed border-border/60 p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <u.icon className="h-5 w-5 text-amber-400" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">Em breve</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground/80">{u.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <div className="container max-w-4xl">
      <AdInArticle className="my-4" />
    </div>

    {/* FICHA TÉCNICA */}
    <section className="container py-14 pb-20 max-w-5xl">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-6 w-6 text-amber-400" />
        <h2 className="font-display text-3xl font-bold">Ficha Técnica Rápida</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-amber-500/20 shadow-lg">
        <table className="w-full border-collapse bg-card">
          <thead>
            <tr className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent">
              <th className="text-left py-4 px-6 font-bold text-sm text-amber-300 uppercase tracking-wider">Detalhe</th>
              <th className="text-left py-4 px-6 font-bold text-sm text-amber-300 uppercase tracking-wider">Informação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Desenvolvedor", "TaleWorlds Entertainment (Ancara, Turquia)"],
              ["Publicador", "TaleWorlds Entertainment"],
              ["Engine", "Engine proprietária da TaleWorlds"],
              ["Gênero", "RPG de Ação / Estratégia / Sandbox medieval"],
              ["Plataformas", "PC (Steam, Epic, GOG) · Xbox One · Xbox Series X|S · PS4 · PS5"],
              ["Early Access", "30 de março de 2020 (PC)"],
              ["Lançamento 1.0", "25 de outubro de 2022 — PC, Xbox e PlayStation"],
              ["Modos", "Campanha sandbox · História (Dragon Banner) · Custom Battle · Multiplayer"],
              ["Preço base", "US$ 49,99 (Steam) — R$ ~99,90 historicamente, sujeito a câmbio"],
              ["Expansão", "War Sails (anunciada pela TaleWorlds em 2025, combate naval)"],
              ["Suporte a mods", "Oficial via Steam Workshop, Nexus Mods e launcher do jogo"],
            ].map(([key, val], i) => (
              <tr
                key={key}
                className={`border-t border-border/60 hover:bg-amber-500/5 transition-colors ${
                  i % 2 === 1 ? "bg-muted/20" : ""
                }`}
              >
                <td className="py-3.5 px-6 font-semibold text-sm text-foreground">{key}</td>
                <td className="py-3.5 px-6 text-muted-foreground text-sm">{val}</td>
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
