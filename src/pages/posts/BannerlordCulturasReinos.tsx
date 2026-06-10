import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock,
  User,
  Calendar,
  Crown,
  Shield,
  Sword,
  Flag,
  Map as MapIcon,
  Users,
  AlertTriangle,
  Ship,
  Anchor,
  Coins,
  Mountain,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import LightboxImage from "@/components/LightboxImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import culturasImg from "@/assets/bannerlord-culturas-reinos.webp";
import bannerlordWarSailsMap from "@/assets/bannerlord-war-sails-map.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const cultures = [
  {
    name: "Vlandia",
    inspiration: "França feudal · Normandos",
    capital: "Pravend",
    color: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    accent: "text-rose-300",
    strength: "Cavalaria pesada com lança (Vlandian Knights)",
    weakness: "Infantaria média sem grande variedade",
    troopStar: "Vlandian Banner Knight",
  },
  {
    name: "Battania",
    inspiration: "Celtas · Escoceses · Galeses",
    capital: "Marunath",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accent: "text-emerald-300",
    strength: "Arqueiros e fianna em terreno acidentado",
    weakness: "Pouca cavalaria, sem unidade pesada nativa",
    troopStar: "Battanian Fian Champion",
  },
  {
    name: "Sturgia",
    inspiration: "Vikings · Rus medievais",
    capital: "Tyal",
    color: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    accent: "text-sky-300",
    strength: "Infantaria pesada com escudos e machados",
    weakness: "Arqueiros e cavalaria abaixo da média",
    troopStar: "Sturgian Heavy Axeman",
  },
  {
    name: "Aserai",
    inspiration: "Árabes · Beduínos",
    capital: "Quyaz",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    accent: "text-amber-300",
    strength: "Cavalaria veloz e escaramuçadores de deserto",
    weakness: "Infantaria pesada limitada",
    troopStar: "Aserai Mameluke Cavalry",
  },
  {
    name: "Khuzait",
    inspiration: "Mongóis · Estepes",
    capital: "Makeb",
    color: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    accent: "text-orange-300",
    strength: "Arqueiros a cavalo (horse archers) dominantes",
    weakness: "Cercos e infantaria pesada são fracos",
    troopStar: "Khuzait Khan's Guard",
  },
  {
    name: "Empire (Norte)",
    inspiration: "Bizâncio Oriental",
    capital: "Epicrotea",
    color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    accent: "text-indigo-300",
    strength: "Catafractários e infantaria disciplinada",
    weakness: "Custo de tropas elevado",
    troopStar: "Imperial Cataphract",
  },
  {
    name: "Empire (Sul)",
    inspiration: "Bizâncio Meridional",
    capital: "Lycaron",
    color: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    accent: "text-violet-300",
    strength: "Legionários e arqueiros de cidade",
    weakness: "Vulnerável a cavalaria de flanco",
    troopStar: "Imperial Legionary",
  },
  {
    name: "Empire (Oeste)",
    inspiration: "Bizâncio Ocidental · República",
    capital: "Jalmarys",
    color: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
    accent: "text-fuchsia-300",
    strength: "Equilibrada — boa em tudo, mestre em nada",
    weakness: "Sem grande pico de poder em uma arma",
    troopStar: "Imperial Menavliaton",
  },
  {
    name: "Nords",
    inspiration: "Nórdicos · Vikings de mar aberto",
    capital: "Wercheg (porto-fortaleza)",
    color: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accent: "text-blue-300",
    strength: "Infantaria de abordagem e domínio naval (War Sails)",
    weakness: "Cavalaria praticamente inexistente, fraca em campo aberto",
    troopStar: "Nord Huscarl",
  },
];

const BannerlordCulturasReinos = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-culturas-reinos-calradia-2026",
      "Bannerlord: Culturas e Reinos de Calradia — Guia das 8 Facções",
      "geek",
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/bannerlord" portalLabel="Painel Bannerlord" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
            Bannerlord · Culturas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord: Culturas e Reinos de Calradia — Guia das 8 Facções
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />8 de Junho, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="08 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={culturasImg}
          alt="Guerreiros das oito culturas de Calradia em Mount & Blade II: Bannerlord"
          width={1920}
          height={1080}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-display
        prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
        prose-h2:pb-2 prose-h2:border-b prose-h2:border-amber-500/30
        prose-h2:text-amber-400
        prose-h3:text-xl prose-h3:font-bold prose-h3:text-amber-300 prose-h3:mt-6 prose-h3:mb-2
        prose-strong:text-foreground
        prose-a:text-amber-400"
      >
        <p className="lead text-xl text-muted-foreground">
          <strong>Calradia</strong> é o continente fictício de <em>Mount &amp; Blade II: Bannerlord</em>, dividido
          historicamente em <strong>8 culturas jogáveis</strong> — e, com a chegada da expansão
          <strong className="text-blue-300"> War Sails</strong>, ganha uma <strong>9ª cultura oficial</strong>: os
          <strong className="text-blue-300"> Nords</strong>, povo nórdico do litoral norte. Cada cultura tem cidades,
          arquitetura, bônus passivos, árvore de tropas e estilo de combate próprios — e escolher a cultura certa
          muda completamente como você joga.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Flag className="h-5 w-5" /> Resumo Rápido
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              ["Culturas", "9"],
              ["Cidades", "75+"],
              ["Castelos", "125+"],
              ["Vilas", "360+"],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50 text-center">
                <div className="text-2xl font-display font-bold text-amber-400">{v}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wide mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>
          <Crown className="inline h-7 w-7 mr-2 -mt-1" />
          As 9 Culturas em uma Tabela
        </h2>
        <p>
          O quadro abaixo resume cada facção, sua inspiração histórica, capital padrão e a tropa de elite mais
          conhecida. Os bônus passivos da cultura (ex.: <em>Aserai</em> ganha relação com caravanas, <em>Khuzait</em>
          ganha bônus de movimento na campanha) impactam diretamente o estilo de jogo.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Cultura</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Inspiração</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Capital</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Tropa-estrela</th>
              </tr>
            </thead>
            <tbody>
              {cultures.map((c, i) => (
                <tr
                  key={c.name}
                  className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${
                    i % 2 === 1 ? "bg-muted/20" : ""
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${c.color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {c.name}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs">{c.inspiration}</td>
                  <td className="py-3.5 px-4 text-foreground text-xs font-semibold">{c.capital}</td>
                  <td className={`py-3.5 px-4 text-xs font-semibold ${c.accent}`}>{c.troopStar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2>
          <Shield className="inline h-7 w-7 mr-2 -mt-1" />
          Pontos Fortes e Fracos
        </h2>
        <p>
          Nenhuma cultura é "melhor" no vácuo: o equilíbrio depende do terreno, da composição inimiga e do seu estilo
          de comando. Esta é a leitura de campo após milhares de horas relatadas pela comunidade do Steam.
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {cultures.map((c) => (
            <div key={c.name} className={`p-5 border rounded-xl ${c.color.replace("/15", "/5")}`}>
              <h3 className={`font-bold mb-3 flex items-center gap-2 ${c.accent}`}>
                <Sword className="h-4 w-4" /> {c.name}
              </h3>
              <p className="text-sm m-0">
                <strong className="text-foreground">Forte:</strong>{" "}
                <span className="text-muted-foreground">{c.strength}</span>
              </p>
              <p className="text-sm m-0 mt-2">
                <strong className="text-foreground">Fraco:</strong>{" "}
                <span className="text-muted-foreground">{c.weakness}</span>
              </p>
            </div>
          ))}
        </div>

        <h2>
          <Users className="inline h-7 w-7 mr-2 -mt-1" />
          Qual Cultura Escolher na Primeira Partida?
        </h2>
        <p>
          A cultura escolhida na criação do personagem define bônus passivos (relações, comércio, movimento) e a
          árvore inicial de tropas que você recruta nas vilas controladas por aquela facção. Algumas recomendações
          práticas para começar:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Iniciante",
              value: "Vlandia",
              note: "Cavalaria pesada perdoa erros táticos",
              box: "bg-rose-500/10 border-rose-500/30",
              text: "text-rose-300",
            },
            {
              label: "Estratégico",
              value: "Império",
              note: "Tropas equilibradas, boa em qualquer batalha",
              box: "bg-indigo-500/10 border-indigo-500/30",
              text: "text-indigo-300",
            },
            {
              label: "Avançado",
              value: "Khuzait",
              note: "Horse archers dominam, mas exigem micro",
              box: "bg-orange-500/10 border-orange-500/30",
              text: "text-orange-300",
            },
          ].map((c) => (
            <div key={c.label} className={`p-5 border rounded-xl text-center ${c.box}`}>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
              <div className={`text-2xl font-display font-bold my-2 ${c.text}`}>{c.value}</div>
              <div className="text-xs text-muted-foreground">{c.note}</div>
            </div>
          ))}
        </div>

        <h2>
          <MapIcon className="inline h-7 w-7 mr-2 -mt-1" />
          Geografia e Fronteiras
        </h2>
        <p>
          O <strong>Império</strong> ocupa o centro-sul de Calradia, fragmentado entre três facções (Norte, Sul e
          Oeste) em guerra civil. <strong>Vlandia</strong> domina o oeste continental, <strong>Battania</strong> as
          montanhas centrais, <strong>Sturgia</strong> o norte gelado, <strong>Aserai</strong> os desertos do sul e
          <strong> Khuzait</strong> as estepes orientais. As fronteiras são fluidas — guerras, casamentos e rebeliões
          podem redesenhar o mapa em uma única campanha.
        </p>

        <p>
          O painel do Bannerlord aqui no VICIO&lt;CODE&gt; vai ter um artigo dedicado ao mapa político de Calradia com
          cidades, castelos e vilas culturais detalhadas — fique atento ao{" "}
          <a href="/geek/bannerlord">painel completo</a>.
        </p>

        <EditorialTake category="geek">
          <p>
            A graça de Bannerlord é justamente a tensão entre culturas: cada facção tem identidade visual, sonora e
            tática própria. Jogar como Sturgia em terreno aberto contra Khuzait é frustrante; jogar como Khuzait em
            cerco também é. Aprender a explorar as fraquezas inimigas (e esconder as suas) é o que separa o jogador
            casual do veterano de 500 horas.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            {
              title: "Mount & Blade II: Bannerlord — página oficial",
              url: "https://www.taleworlds.com/en/Games/Bannerlord",
              publisher: "TaleWorlds Entertainment",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade Wiki — Culturas",
              url: "https://mountandblade.fandom.com/wiki/Cultures_(Bannerlord)",
              publisher: "Mount & Blade Wiki (Fandom)",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade II: Bannerlord no Steam",
              url: "https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/",
              publisher: "Valve / Steam",
              accessedAt: "Junho 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="bannerlord-culturas-reinos-calradia-2026" />

        <CommentSection
          postId="bannerlord-culturas-reinos-calradia-2026"
          postTitle="Bannerlord: Culturas e Reinos de Calradia"
          category="geek"
          inviteTitle="Qual cultura você joga?"
          inviteSubtitle="Vlandia, Khuzait, Aserai... qual reino domina a sua Calradia? Conta nos comentários."
        />

        <div className="not-prose mt-10 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Aviso:</strong> bônus de cultura e composição de tropas podem mudar em patches futuros da
            TaleWorlds e em overhauls como <em>Realistic Battle Mod</em> e <em>BannerKings</em>. Dados confirmados
            até a versão 1.x do jogo base.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BannerlordCulturasReinos;
