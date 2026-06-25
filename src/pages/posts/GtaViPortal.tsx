import { Link } from "react-router-dom";
import DynamicSEO from "@/components/DynamicSEO";
import { AdInArticle } from "@/components/AdSense";
import BackNavigation from "@/components/BackNavigation";
import CommentSection from "@/components/CommentSection";
import SkeletonImage from "@/components/SkeletonImage";
import { ChevronRight, Calendar, DollarSign, Gamepad2, Film, MapPin, ShoppingCart, Sparkles, Flag } from "lucide-react";
import heroImg from "@/assets/gta-vi-portal-hero.webp";
import preVendaImg from "@/assets/gta-vi-pre-venda-edicoes.webp";
import precosImg from "@/assets/gta-vi-precos.webp";
import plataformasImg from "@/assets/gta-vi-plataformas.webp";
import mecanicasImg from "@/assets/gta-vi-mecanicas.webp";
import trailersImg from "@/assets/gta-vi-trailers.webp";
import mapaImg from "@/assets/gta-vi-mapa-leonida.webp";
import guiaImg from "@/assets/gta-vi-2026.webp";
import novembroImg from "@/assets/gta-vi-novembro-2026-vice-city-leonida.webp";

const articles = [
  {
    slug: "gta-vi-pre-venda-edicoes-2026",
    title: "Pré-Venda & Edições",
    subtitle: "Como, Quando e Onde Comprar",
    desc: "Estado real da pré-venda nas lojas oficiais, edições anunciadas, bônus, política de reembolso e o que esperar do anúncio oficial da Rockstar.",
    image: preVendaImg,
    btn: "Ver pré-venda",
    badge: "🛒 Novo",
  },
  {
    slug: "gta-vi-precos-brasil-dolar-real-2026",
    title: "Preços no Brasil",
    subtitle: "Dólar, Real e Edições — O Que Esperar",
    desc: "Histórico de preços da Take-Two em GTA V e RDR2, política de regionalização, expectativa em USD e BRL e como se preparar financeiramente.",
    image: precosImg,
    btn: "Ver preços",
    badge: "💰 Novo",
  },
  {
    slug: "gta-vi-plataformas-requisitos-2026",
    title: "Plataformas",
    subtitle: "PS5, Xbox Series e o Mistério do PC",
    desc: "Por que GTA VI sai só para PS5 e Xbox Series no lançamento, ausência de PS4/Xbox One e o histórico que aponta versão PC para 2027.",
    image: plataformasImg,
    btn: "Ver plataformas",
    badge: "🎮 Novo",
  },
  {
    slug: "gta-vi-mecanicas-gameplay-2026",
    title: "Mecânicas & Gameplay",
    subtitle: "Tudo Que Foi Confirmado nos Trailers",
    desc: "Dupla protagonista, NPCs reativos, física de veículos, sistema climático e o que os dois trailers oficiais realmente revelaram.",
    image: mecanicasImg,
    btn: "Ver mecânicas",
    badge: "🕹️ Novo",
  },
  {
    slug: "gta-vi-trailers-marketing-2026",
    title: "Trailers & Marketing",
    subtitle: "Do Anúncio de 2023 ao Hype de 2026",
    desc: "Linha do tempo completa — vazamento de 2022, anúncio oficial, Trailer 1 (recorde mundial), Trailer 2 e a campanha do verão 2026.",
    image: trailersImg,
    btn: "Ver trailers",
    badge: "🎬 Novo",
  },
  {
    slug: "gta-vi-mapa-leonida-vice-city-2026",
    title: "Mapa de Leonida",
    subtitle: "Vice City, Keys e Everglades Reimaginados",
    desc: "Geografia confirmada nos trailers — Vice City, interior, pântanos e ilhas. Comparação com San Andreas e locais já identificados.",
    image: mapaImg,
    btn: "Ver mapa",
    badge: "🗺️ Novo",
  },
];

const complementares = [
  {
    slug: "gta-vi-novembro-2026-vice-city-leonida",
    title: "Data Confirmada — 19/11/2026",
    image: novembroImg,
  },
  {
    slug: "gta-vi-guia-completo-2026",
    title: "Guia Completo — Tudo Que Sabemos",
    image: guiaImg,
  },
];

const stats = [
  { label: "Lançamento", value: "19 nov" },
  { label: "Plataformas", value: "PS5 · Xbox" },
  { label: "Trailer 1 (24h)", value: "93M views" },
  { label: "Estúdio", value: "Rockstar" },
];

const GtaViPortal = () => (
  <div className="min-h-screen">
    <DynamicSEO />
    <div className="container pt-4">
      <BackNavigation category="geek" />
    </div>

    {/* HERO */}
    <section className="relative h-[60vh] md:h-[460px] overflow-hidden">
      <SkeletonImage
        priority
        src={heroImg}
        alt="GTA VI — boulevard neon inspirado em Vice City ao pôr do sol"
        width={1920}
        height={1080}
        wrapperClassName="absolute inset-0 w-full h-full"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
      <div className="container relative h-full flex flex-col justify-end pb-14">
        <span className="text-pink-400 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3">
          Especial · Games · Rockstar · Lançamento 2026
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.05]">
          Grand Theft Auto{" "}
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            VI
          </span>
        </h1>
        <p className="text-base md:text-xl text-white/85 max-w-2xl leading-relaxed">
          O painel central do VICIO&lt;CODE&gt; sobre o jogo mais aguardado da década — apenas dados confirmados por
          Rockstar Games, Take-Two Interactive e imprensa especializada.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 text-xs bg-pink-500/20 text-pink-200 border border-pink-500/40 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
            Lançamento 19 nov 2026
          </span>
          <span className="text-xs bg-black/40 backdrop-blur-sm text-white/90 border border-white/10 px-3 py-1.5 rounded-full">
            PS5 · Xbox Series X|S
          </span>
          <span className="text-xs bg-black/40 backdrop-blur-sm text-white/90 border border-white/10 px-3 py-1.5 rounded-full">
            Rockstar Games / Take-Two
          </span>
        </div>
      </div>
    </section>

    {/* STATS STRIP */}
    <section className="border-y border-pink-500/20 bg-gradient-to-r from-pink-500/5 via-fuchsia-500/5 to-cyan-500/5">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:border-r md:last:border-r-0 border-pink-500/20">
              <div className="font-display text-2xl md:text-3xl font-bold text-pink-400">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="container py-14 max-w-4xl">
      <div className="flex items-center gap-3 mb-5">
        <Flag className="h-6 w-6 text-pink-400" />
        <h2 className="font-display text-2xl md:text-3xl font-bold">Sobre o Especial</h2>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Grand Theft Auto VI</strong> é o próximo capítulo da franquia da
        Rockstar Games, publicado pela Take-Two Interactive. Após o vazamento histórico de setembro de 2022 e o anúncio
        oficial em dezembro de 2023, o jogo virou o maior fenômeno cultural antes do lançamento na história do
        entretenimento. Este painel reúne tudo que vamos publicar sobre GTA VI — apenas dados confirmados por fontes
        oficiais (Rockstar Newswire, Take-Two IR, PlayStation Blog, Xbox Wire) e veículos especializados (IGN,
        Eurogamer, GameSpot, Polygon, The Verge).
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        Cada artigo segue o padrão editorial do site: prosa extensa, tabelas comparativas, análise crítica e fontes
        verificáveis. Nada de rumor não confirmado, nada de "leaks" não verificados, nada inventado.
      </p>
    </section>

    {/* ARTICLES GRID */}
    <section className="container py-10 max-w-6xl">
      <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
        <div>
          <h2 className="font-display text-3xl font-bold">Artigos do Especial</h2>
          <p className="text-sm text-muted-foreground mt-1">6 guias completos sobre o lançamento de novembro</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/post/${article.slug}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden shrink-0">
              <SkeletonImage
                src={article.image}
                alt={article.title}
                width={1600}
                height={900}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {article.badge && (
                <span className="absolute top-3 right-3 text-xs bg-pink-400 text-black px-2.5 py-1 rounded-full font-bold shadow-lg">
                  {article.badge}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[11px] text-pink-400 font-bold uppercase tracking-[0.15em] mb-2">{article.title}</p>
              <h3 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-pink-400 transition-colors">
                {article.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.desc}</p>
              <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-pink-400 group-hover:gap-2 transition-all">
                {article.btn} <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <div className="container max-w-4xl">
      <AdInArticle className="my-4" />
    </div>

    {/* LEITURA COMPLEMENTAR */}
    <section className="container py-10 max-w-5xl">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-pink-400" /> Leitura complementar
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {complementares.map((c) => (
          <Link
            key={c.slug}
            to={`/post/${c.slug}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-pink-500/50 transition-all flex"
          >
            <div className="relative w-1/3 aspect-square overflow-hidden shrink-0">
              <SkeletonImage
                src={c.image}
                alt={c.title}
                width={400}
                height={400}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 flex flex-col justify-center flex-1">
              <h3 className="font-bold text-base leading-snug group-hover:text-pink-400 transition-colors">{c.title}</h3>
              <span className="text-xs text-pink-400 mt-2 inline-flex items-center gap-1">
                Ler artigo <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* FICHA TÉCNICA */}
    <section className="container py-14 pb-20 max-w-5xl">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-6 w-6 text-pink-400" />
        <h2 className="font-display text-3xl font-bold">Ficha Técnica Rápida</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-pink-500/20 shadow-lg">
        <table className="w-full border-collapse bg-card">
          <thead>
            <tr className="bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-transparent">
              <th className="text-left py-4 px-6 font-bold text-sm text-pink-300 uppercase tracking-wider">Detalhe</th>
              <th className="text-left py-4 px-6 font-bold text-sm text-pink-300 uppercase tracking-wider">Informação confirmada</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Desenvolvedor", "Rockstar Games"],
              ["Publicador", "Take-Two Interactive"],
              ["Engine", "RAGE (Rockstar Advanced Game Engine)"],
              ["Gênero", "Ação · Aventura · Mundo aberto"],
              ["Plataformas (lançamento)", "PlayStation 5 · Xbox Series X|S"],
              ["Versão PC", "Não confirmada para 2026"],
              ["Data de lançamento", "19 de novembro de 2026 (confirmada pela Take-Two)"],
              ["Anúncio oficial", "4 de dezembro de 2023 (Trailer 1)"],
              ["Trailers", "Trailer 1 (dez/2023) · Trailer 2 (mai/2025)"],
              ["Protagonistas", "Lucia Caminos e Jason Duval"],
              ["Cenário", "Estado de Leonida (inspirado na Flórida) com Vice City"],
              ["Classificação esperada", "Mature 17+ (ESRB) · 18 (PEGI/DJCTQ)"],
            ].map(([key, val], i) => (
              <tr
                key={key}
                className={`border-t border-border/60 hover:bg-pink-500/5 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}
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
        postId="gta-vi-portal"
        postTitle="Painel Grand Theft Auto VI"
        category="geek"
        inviteTitle="Participe da conversa"
        inviteSubtitle="Vai comprar no dia 1? Esperar PC? Compartilhe sua expectativa para GTA VI."
      />
    </section>
  </div>
);

export default GtaViPortal;
