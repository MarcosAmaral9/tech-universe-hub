import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import BackNavigation from "@/components/BackNavigation";
import { Sword, Trophy, Star, ChevronRight, Skull, Anchor, Globe, Zap } from "lucide-react";

import ac1AltairImg  from "@/assets/ac-1-altair.webp";
import ac2EzioImg    from "@/assets/ac-2-ezio.webp";
import acBrotherImg  from "@/assets/ac-brotherhood.webp";
import acRevImg      from "@/assets/ac-revelations.webp";
import acPortalImg  from "@/assets/assassins-creed-portal.webp";
import acShadowsImg from "@/assets/ac-shadows.webp";
import acMirageImg  from "@/assets/ac-mirage.webp";
import acValhallaImg from "@/assets/ac-valhalla.webp";
import acOdysseyImg from "@/assets/ac-odyssey.webp";
import acOriginsImg from "@/assets/ac-origins.webp";
import acSyndicateImg from "@/assets/ac-syndicate.webp";
import acUnityImg   from "@/assets/ac-unity.webp";
import acRogueImg   from "@/assets/ac-rogue.webp";
import acBlackFlagImg from "@/assets/ac-black-flag.webp";
import ac3Img       from "@/assets/ac-3.webp";

const games = [
  {
    slug: "ac-shadows-japao-feudal",
    title: "AC Shadows",
    subtitle: "Japão Feudal · 2025",
    badge: "🆕 Mais Recente",
    badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
    desc: "Dois protagonistas, duas eras: a shinobi Naoe e o samurai Yasuke em um Japão Feudal meticulosamente recriado.",
    image: acShadowsImg,
    icon: <Sword className="h-4 w-4" />,
  },
  {
    slug: "ac-black-flag-melhor-jogo-piratas",
    title: "AC IV: Black Flag",
    subtitle: "Caribe · Era dos Piratas · 2013",
    badge: "⭐ Cult Favorito",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    desc: "Edward Kenway entre rum, batalhas navais e o Caribe aberto. Considerado por muitos o melhor da série.",
    image: acBlackFlagImg,
    icon: <Anchor className="h-4 w-4" />,
  },
  {
    slug: "ac-mirage-retorno-raizes-bagda",
    title: "AC Mirage",
    subtitle: "Bagdá · Século IX · 2023",
    badge: "🔪 Stealth Clássico",
    badgeColor: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    desc: "Bassim ibn Ishaq nas ruas de Bagdá. Retorno à furtividade clássica e parkour dos primeiros jogos.",
    image: acMirageImg,
    icon: <Skull className="h-4 w-4" />,
  },
  {
    slug: "ac-valhalla-jornada-epica-eivor",
    title: "AC Valhalla",
    subtitle: "Inglaterra Viking · 2020",
    badge: "🪓 RPG Épico",
    badgeColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    desc: "Eivor e os Vikings conquistam a Inglaterra. O maior mapa da série com construção de assentamentos.",
    image: acValhallaImg,
    icon: <Globe className="h-4 w-4" />,
  },
  {
    slug: "ac-odyssey-odisseia-grecia",
    title: "AC Odyssey",
    subtitle: "Grécia Antiga · 432 a.C. · 2018",
    badge: "🏛️ Mitologia",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    desc: "Kassandra ou Alexios no mundo da Grécia Clássica, com deuses, criaturas míticas e batalhas épicas.",
    image: acOdysseyImg,
    icon: <Star className="h-4 w-4" />,
  },
  {
    slug: "ac-origins-renascimento-franquia-egito",
    title: "AC Origins",
    subtitle: "Egito Antigo · 49 a.C. · 2017",
    badge: "🌅 Origem",
    badgeColor: "bg-red-500/20 text-red-400 border border-red-500/30",
    desc: "Bayek de Siwa funda a Irmandade dos Assassinos. O começo da era RPG com o Egito dos Faraós.",
    image: acOriginsImg,
    icon: <Globe className="h-4 w-4" />,
  },
  {
    slug: "ac-unity-jogo-frente-tempo-paris",
    title: "AC Unity",
    subtitle: "Paris · Revolução Francesa · 2014",
    badge: "🗼 Visual",
    badgeColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    desc: "Arno Dorian em um Paris revolucionário de tirar o fôlego. O jogo mais bonito da era clássica da série.",
    image: acUnityImg,
    icon: <Zap className="h-4 w-4" />,
  },
  {
    slug: "ac-syndicate-revolucao-industrial-londres",
    title: "AC Syndicate",
    subtitle: "Londres Vitoriana · 1868",
    badge: "⚙️ Steampunk",
    badgeColor: "bg-stone-500/20 text-stone-400 border border-stone-500/30",
    desc: "Os irmãos Frye dominam as gangues de Londres. Ganchos, trens e o lado sombrio da Revolução Industrial.",
    image: acSyndicateImg,
    icon: <Sword className="h-4 w-4" />,
  },
  {
    slug: "ac-rogue-assassino-templario",
    title: "AC Rogue",
    subtitle: "Atlântico Norte · 1752",
    badge: "⚜️ Templário",
    badgeColor: "bg-slate-500/20 text-slate-400 border border-slate-500/30",
    desc: "Shay Patrick Cormac abandona os Assassinos. O único jogo da série com perspectiva Templária completa.",
    image: acRogueImg,
    icon: <Skull className="h-4 w-4" />,
  },
  {
    slug: "ac-3-remastered-revolucao-americana",
    title: "AC III Remastered",
    subtitle: "América Colonial · 1754–1783",
    badge: "🦅 Clássico",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    desc: "Connor Kenway — meio Mohawk, meio britânico — durante a Guerra de Independência Americana.",
    image: ac3Img,
    icon: <Globe className="h-4 w-4" />,
  },
  {
    slug: "ac-1-altair-terra-santa-1191",
    title: "Assassin's Creed",
    subtitle: "Terra Santa · Cruzadas · 2007",
    badge: "🏛️ O Original",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    desc: "Altaïr Ibn-La'Ahad nas Cruzadas de 1191. O jogo que fundou tudo — Animus, Credo, Maçã do Éden.",
    image: ac1AltairImg,
    icon: null,
  },
  {
    slug: "ac-2-ezio-italia-renascentista",
    title: "AC II",
    subtitle: "Itália Renascentista · 2009",
    badge: "👑 Favorito dos Fãs",
    badgeColor: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
    desc: "Ezio Auditore em Florença e Veneza. Leonardo da Vinci, os Médici, os Bórgias — o melhor da trilogia.",
    image: ac2EzioImg,
    icon: null,
  },
  {
    slug: "ac-brotherhood-ezio-roma-borgia",
    title: "AC Brotherhood",
    subtitle: "Roma · 2010",
    badge: "⚔️ Recrutamento",
    badgeColor: "bg-red-700/20 text-red-400 border border-red-700/30",
    desc: "Ezio reconstrói a Irmandade em Roma. Cesare Borgia, as máquinas de Leonardo e o primeiro multiplayer.",
    image: acBrotherImg,
    icon: null,
  },
  {
    slug: "ac-revelations-ezio-constantinopla",
    title: "AC Revelations",
    subtitle: "Constantinopla · 2011",
    badge: "🕌 Adeus Ezio",
    badgeColor: "bg-blue-700/20 text-blue-400 border border-blue-700/30",
    desc: "O fim da trilogia Ezio — Constantinopla otomana, os selos de Altaïr e um adeus inesquecível.",
    image: acRevImg,
    icon: null,
  },
];

const eras = [
  { label: "Era Clássica", range: "2007–2016", desc: "Ezio, Altaïr, Connor, Edward — a fase narrativa da série", color: "text-amber-400" },
  { label: "Era RPG", range: "2017–2020", desc: "Bayek, Kassandra, Eivor — mundo aberto com milhares de horas", color: "text-blue-400" },
  { label: "Era Moderna", range: "2021–hoje", desc: "Basim, Naoe, Yasuke — novas mecânicas e narrativas", color: "text-green-400" },
];

const AssassinsCreedPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO path="/geek/assassins-creed" />

    {/* ── HERO FULL-BLEED ───────────────────────────────────── */}
    <section className="relative h-[60vh] md:h-[480px] w-full overflow-hidden">
      <img
        fetchpriority="high"
        src={acPortalImg}
        alt="Portal Assassin's Creed"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* dark gradient left + bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container relative h-full flex flex-col justify-end pb-10 md:pb-14">
        <BackNavigation category="geek" />
        <div className="max-w-2xl mt-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-3">
            Portal Especial · Geek
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Assassin's<br className="sm:hidden" /> Creed
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
            Das ruas de Damasco ao Japão Feudal — 18 anos de assassinos, templários e história. Guias, análises e rankings completos de toda a franquia.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-full font-medium">🗡️ 14 Jogos</span>
            <span className="text-xs bg-white/10 text-white/70 px-3 py-1.5 rounded-full">Desde 2007</span>
            <span className="text-xs bg-white/10 text-white/70 px-3 py-1.5 rounded-full">Ubisoft</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── ERAS TIMELINE ─────────────────────────────────────── */}
    <section className="w-full bg-card border-y border-border">
      <div className="container py-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {eras.map((era) => (
            <div key={era.label} className="py-4 sm:py-3 sm:px-6 first:pl-0 last:pr-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold uppercase tracking-wider ${era.color}`}>{era.label}</span>
                <span className="text-xs text-muted-foreground">({era.range})</span>
              </div>
              <p className="text-xs text-muted-foreground">{era.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── RANKING BANNER ────────────────────────────────────── */}
    <section className="w-full">
      <div className="container py-8">
        <Link
          to="/post/ranking-melhor-assassins-creed-2026"
          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-card p-6 hover:border-purple-400/60 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
              <Trophy className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-0.5">Ranking Definitivo</p>
              <h2 className="font-display text-lg sm:text-xl font-bold">Qual o Melhor Assassin's Creed para Jogar em 2026?</h2>
              <p className="text-sm text-muted-foreground mt-1">Todos os 10 jogos analisados e ranqueados do pior ao melhor.</p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-purple-400 font-medium text-sm shrink-0 group-hover:gap-2 transition-all">
            Ver Ranking <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>

    {/* ── FEATURED GAME (AC Shadows) ────────────────────────── */}
    <section className="w-full bg-muted/30">
      <div className="container py-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-6 bg-green-500 rounded-full" />
          <h2 className="font-display text-2xl font-bold">Mais Recente</h2>
          <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-bold ml-1">Novo</span>
        </div>
        <Link
          to={`/post/${games[0].slug}`}
          className="group relative rounded-2xl overflow-hidden flex flex-col md:flex-row gap-0 border border-border hover:border-green-500/40 transition-all"
        >
          {/* image — taller on mobile, side on desktop */}
          <div className="relative w-full md:w-[55%] aspect-video md:aspect-auto md:min-h-[280px] overflow-hidden shrink-0">
            <img
              src={games[0].image}
              alt={games[0].title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden md:block" />
          </div>
          {/* content */}
          <div className="bg-card md:bg-transparent p-6 md:p-8 flex flex-col justify-center flex-1">
            <span className="inline-block text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-bold mb-3 w-fit">{games[0].badge}</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{games[0].title}</h3>
            <p className="text-sm text-purple-400 mb-3">{games[0].subtitle}</p>
            <p className="text-muted-foreground leading-relaxed mb-5">{games[0].desc}</p>
            <span className="flex items-center gap-1.5 text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
              Ler Análise Completa <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>

    {/* ── ALL GAMES GRID ────────────────────────────────────── */}
    <section className="w-full">
      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1 h-6 bg-purple-500 rounded-full" />
          <h2 className="font-display text-2xl font-bold">Todos os Jogos</h2>
          <span className="ml-auto text-sm text-muted-foreground">{games.length} jogos no portal</span>
        </div>

        {/* 2-col on mobile, 3-col on md, 4-col on xl — max use of screen */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {games.slice(1).map((game) => (
            <Link
              key={game.slug}
              to={`/post/${game.slug}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-purple-500/50 hover:shadow-lg transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-2 left-2 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${game.badgeColor}`}>
                  {game.badge}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-display font-bold text-sm sm:text-base leading-tight group-hover:text-purple-400 transition-colors mb-0.5">
                  {game.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-purple-400 mb-1.5 leading-tight">{game.subtitle}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 hidden sm:block">{game.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── FRANCHISE INFO ────────────────────────────────────── */}
    <section className="w-full bg-card border-t border-border">
      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1 h-6 bg-amber-500 rounded-full" />
          <h2 className="font-display text-2xl font-bold">Sobre a Franquia</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {[
            { label: "Ano de Estreia", value: "2007", sub: "Assassin's Creed (PS3/X360)" },
            { label: "Jogos Principais", value: "13+", sub: "Incluindo spin-offs" },
            { label: "Vendas Globais", value: "200M+", sub: "Cópias vendidas" },
            { label: "Último Lançamento", value: "2025", sub: "AC Shadows" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-muted/50 rounded-xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-display font-bold text-purple-400">{value}</p>
              <p className="text-xs font-bold text-foreground mt-1">{label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Criada pela <strong className="text-foreground">Ubisoft Montreal</strong> em 2007, Assassin's Creed é uma das franquias mais vendidas da história dos games. A série combina história real com ficção especulativa, colocando o jogador no papel de Assassinos em conflito eterno com os Templários — uma guerra secreta que moldou a humanidade por milênios. Cada jogo reconstrói uma era histórica com riqueza de detalhes: de Damasco nas Cruzadas (2007) ao Japão Feudal (2025).
        </p>
      </div>
    </section>
  </div>
);

export default AssassinsCreedPortal;
