import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Map, Compass, Zap, Snowflake, Building2, Cpu, Skull, Search, ArrowRight, HelpCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { Input } from "@/components/ui/input";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonMapaImg from "@/assets/crimson-desert-pywel-completo.webp";
import CrimsonDesertRegionMap, { type RegionKey } from "@/components/CrimsonDesertRegionMap";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
interface Region {
  name: string;
  slug: RegionKey;
  iconKey: string;
  color: string;
  badge: string;
  label: string;
  biome: string;
  position: string;
  desc: string;
  bosses: string[];
  towns: string[];
  notes: string;
}

const regionsData: Region[] = [
  {
    name: "Hernand",
    slug: "hernand",
    iconKey: "compass",
    color: "border-green-500/30 bg-green-500/5",
    badge: "bg-green-500/20 text-green-400",
    label: "Área Inicial",
    biome: "Pradarias, florestas densas, montanhas",
    position: "Centro-oeste do continente",
    desc: "Hernand é a região inicial de Crimson Desert — onde Kliff e os Greymanes têm seu acampamento base em Howling Hill. É a região mais acessível do jogo, com estética de fantasia medieval europeia: campos verdes, grandes cidades medievais e vilas espalhadas pelas planícies. Cidades confirmadas incluem Calphade e Beighen.",
    bosses: ["Reed Devil (Reedwind Valley)", "Hornsplitter / Kailok (Unicorn Cliffs)"],
    towns: ["Calphade", "Beighen", "Acampamento Greymane (Howling Hill)"],
    notes:
      "A PC Gamer e o GameSpot recomendam explorar bem Hernand antes de avançar — é aqui que você aprende os sistemas do jogo e consegue os primeiros upgrades de mochila.",
  },
  {
    name: "Pailune",
    slug: "pailune",
    iconKey: "snowflake",
    color: "border-blue-400/30 bg-blue-400/5",
    badge: "bg-blue-400/20 text-blue-300",
    label: "Norte Gelado",
    biome: "Tundra, montanhas nevadas, vendavais",
    position: "Norte do continente",
    desc: "Pailune é a terra natal de Kliff e dos Greymanes — um contraste brutal com Hernand. A região é dominada por montanhas cobertas de neve e condições climáticas extremas que tornam a travessia difícil. É aqui que a história do protagonista tem suas raízes e onde os primeiros conflitos com os Black Bears aconteceram.",
    bosses: [
      "Staglord (Savage Peaks — rei caído com armadura de cervo)",
      "White Horn (White Mountains — espírito da montanha, parte yeti, parte rena)",
    ],
    towns: ["Stronghold dos Greymanes (área original antes da emboscada)"],
    notes:
      "O Staglord e o White Horn estão entre os bosses mais visualmente impressionantes do jogo, segundo a maioria dos reviewers. O White Horn tem múltiplas fases e foi comparado a Shadow of the Colossus.",
  },
  {
    name: "Demeniss",
    slug: "demeniss",
    iconKey: "building",
    color: "border-yellow-500/30 bg-yellow-500/5",
    badge: "bg-yellow-500/20 text-yellow-400",
    label: "Capital Política",
    biome: "Cidades fortificadas, planícies militarizadas",
    position: "Centro do continente",
    desc: "Demeniss é a capital de Pywel e o centro de poder político e militar do continente. A região tem lore profundo relacionado à storyline principal, com facções como House Thorel e House Byron travando disputas políticas. Apresenta as batalhas de cerco em maior escala do jogo.",
    bosses: [
      "Cassius Morten (o Traidor de Calphade — membro dos Black Bears)",
      "Walter Lanford (usa espingarda, ataques de projéteis)",
    ],
    towns: ["Capital principal de Pywel", "Cidades com feiras e pontos de comércio confirmados"],
    notes: "O GameSpot destaca as batalhas de cerco em Demeniss como um dos momentos mais memoráveis da campanha.",
  },
  {
    name: "Delesyia",
    slug: "delesyia",
    iconKey: "cpu",
    color: "border-purple-500/30 bg-purple-500/5",
    badge: "bg-purple-500/20 text-purple-400",
    label: "Região Tecnológica",
    biome: "Instalações mecânicas, paisagens científicas, ruínas avançadas",
    position: "Leste do continente",
    desc: "Delesyia é a região mais singular de Pywel — um contraste radical com o medievalismo das outras áreas. É o centro científico e tecnológico do continente, com criaturas mecânicas, robôs e infraestrutura que destoa completamente do restante do mundo. Tem a Library of Providence e acesso a torres de fast travel que exigem planeio para alcançar.",
    bosses: ["Golden Star (dragão mecânico voador — lutado montando um Wyvern)"],
    towns: ["Urdavah (instituto de pesquisa)", "Varnia (cidade no limite nordeste do mapa)"],
    notes:
      "O Golden Star é frequentemente citado como um dos bosses mais espetaculares do jogo — a batalha acontece no ar, com Kliff montado em um Wyvern.",
  },
  {
    name: "Crimson Desert",
    slug: "crimson-desert",
    iconKey: "skull",
    color: "border-red-500/30 bg-red-500/5",
    badge: "bg-red-500/20 text-red-400",
    label: "Deserto Sem Lei",
    biome: "Deserto de areia carmesim, descampados áridos",
    position: "Sul / Sudeste do continente",
    desc: "A região homônima do jogo é uma vasta extensão de deserto sem lei, com areia de tonalidade carmesim. É o território mais perigoso e imprevisível de Pywel — dominado por bandidos, mercenários e criaturas das mais hostis. Não há governo ou estrutura de poder organizada.",
    bosses: [
      "Crookrock Walker (world boss próximo à cidade de Tommaso)",
      "Encontros variados com bandidos e chefes de facções",
    ],
    towns: ["Tommaso (maior cidade da região, com 3 fast travel points)", "Serpent Shrine of Aeserion (sul da região)"],
    notes:
      "Cuidado: um dos teleporters perto do Spire of the Sun spawna o world boss Crookrock Walker (fonte: GameSpot guia de fast travel).",
  },
];

const RegionIcon = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case "compass":
      return <Compass className="h-5 w-5 text-green-400" />;
    case "snowflake":
      return <Snowflake className="h-5 w-5 text-blue-300" />;
    case "building":
      return <Building2 className="h-5 w-5 text-yellow-400" />;
    case "cpu":
      return <Cpu className="h-5 w-5 text-purple-400" />;
    case "skull":
      return <Skull className="h-5 w-5 text-red-400" />;
    default:
      return <Compass className="h-5 w-5 text-muted-foreground" />;
  }
};

const FAQ_ITEMS = [
  {
    q: "Qual o tamanho do mapa de Pywel em Crimson Desert?",
    a: "Pywel é estimado em 80–110 km², segundo Will Powers (Pearl Abyss). É mais que o dobro de Skyrim (~37 km²) e maior que o mapa de Red Dead Redemption 2 (~75 km²). Atravessá-lo a cavalo leva cerca de 2 horas.",
  },
  {
    q: "Quantas regiões tem o continente de Pywel?",
    a: "O continente físico é dividido em 5 regiões principais: Pailune (norte gelado), Hernand (área inicial), Demeniss (capital política), Delesyia (região tecnológica) e Crimson Desert (deserto sem lei ao sul).",
  },
  {
    q: "Qual a melhor região para começar em Crimson Desert?",
    a: "Hernand é a região inicial e a mais recomendada para iniciantes. É lá que ficam Howling Hill, Calphade e Beighen, e onde o jogo apresenta seus principais sistemas — combate, fast travel, montarias e crafting — antes de abrir caminho para áreas mais hostis.",
  },
  {
    q: "Onde fica o deserto carmesim no mapa?",
    a: "A região homônima Crimson Desert ocupa o sul/sudeste do continente. Sua maior cidade é Tommaso (com 3 pontos de fast travel), e o Spire of the Sun fica próximo ao centro do deserto. É a área mais perigosa e sem lei de Pywel.",
  },
  {
    q: "Como viajar rapidamente entre regiões em Pywel?",
    a: "Existem 4 formas: 29 montarias diferentes (cavalos, ursos, lagartos, raptores e dragões), Abyss Cressets e Abyss Nexus (pontos de teleporte desbloqueáveis), planeio com a habilidade Glide e voo montado em dragões depois de desbloquear Flight.",
  },
  {
    q: "Qual a região mais perigosa de Pywel?",
    a: "O Crimson Desert é o território mais imprevisível, dominado por bandidos, mercenários e world bosses como o Crookrock Walker. Pailune também é brutal pelo clima extremo e pelos confrontos com os Black Bears, mas o deserto não tem nenhuma estrutura política protegendo o jogador.",
  },
];

const REGION_LINKS: Record<RegionKey, string> = {
  pailune: "/regiao/pailune",
  hernand: "/regiao/hernand",
  demeniss: "/regiao/demeniss",
  delesyia: "/regiao/delesyia",
  "crimson-desert": "/regiao/crimson-desert",
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

const CrimsonDesertMapa = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedSlug, setHighlightedSlug] = useState<RegionKey | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const highlightTimerRef = useRef<number | null>(null);

  useEffect(() => {
    trackArticleRead(
      "crimson-desert-mapa-regioes-pywel",
      "Crimson Desert: Mapa Completo de Pywel — Todas as Regiões",
      "geek",
    );
  }, []);

  // SEO: title, description, keywords overrides + FAQ JSON-LD
  useEffect(() => {
    const prevTitle = document.title;
    const title = "Mapa de Pywel — Crimson Desert: Todas as Regiões, Bosses e Locais | VICIO<CODE>";
    const description =
      "Mapa interativo de Pywel em Crimson Desert: 5 regiões (Pailune, Hernand, Demeniss, Delesyia e o deserto carmesim), 80–110 km², bosses, cidades e como se locomover.";
    const keywords =
      "crimson desert mapa, pywel mapa, regioes pywel, hernand, pailune, demeniss, delesyia, crimson desert deserto, mapa interativo crimson desert, bosses pywel, pearl abyss, kliff greymane, fast travel pywel";

    document.title = title;
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");

    // FAQ JSON-LD
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.faq = "crimson-desert-mapa-pywel";
    script.text = JSON.stringify(faqLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      const existing = document.querySelector('script[data-faq="crimson-desert-mapa-pywel"]');
      existing?.remove();
    };
  }, []);

  const filteredSuggestions = useMemo(() => {
    const q = normalize(searchTerm);
    if (!q) return [];
    return regionsData.filter(
      (r) =>
        normalize(r.name).includes(q) ||
        normalize(r.label).includes(q) ||
        normalize(r.biome).includes(q),
    );
  }, [searchTerm]);

  const focarRegiao = (slug: RegionKey) => {
    setSelectedRegion(slug);
    setSearchTerm("");
    setSearchFocused(false);
    setHighlightedSlug(slug);
    // Scroll suave até o card da região
    requestAnimationFrame(() => {
      const el = document.getElementById(`regiao-${slug}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    if (highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);
    highlightTimerRef.current = window.setTimeout(() => setHighlightedSlug(null), 2400);
  };

  useEffect(
    () => () => {
      if (highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);
    },
    [],
  );

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Mapa Completo de Pywel — Todas as Regiões, Bosses e Como se Locomover
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            19 de Março, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            13 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <figure className="mb-8 rounded-2xl overflow-hidden border border-border bg-card">
        <div className="aspect-[1178/1074] w-full bg-card p-2 sm:p-4">
          <img
            src={crimsonMapaImg}
            alt="Mapa completo do continente de Pywel — Crimson Desert (Pearl Abyss)"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
        <figcaption className="px-4 py-3 text-xs sm:text-sm text-muted-foreground italic border-t border-border bg-muted/20">
          O continente de Pywel é estimado em 80–110 km² — mais que o dobro do mapa de Skyrim. Atravessá-lo a cavalo
          leva aproximadamente 2 horas.
        </figcaption>
      </figure>

      {/* Mapa Interativo de Pywel */}
      <div className="not-prose my-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Map className="h-5 w-5 text-primary" /> Pywel — Mapa Interativo das Regiões
        </h2>
        <CrimsonDesertRegionMap selectedKey={selectedRegion} onSelect={setSelectedRegion} />
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Clique em um pin para abrir os detalhes da região. Use scroll, arraste e os botões de zoom para explorar o mapa completo de Pywel.
        </p>

        {/* Busca por região */}
        <div className="relative mt-5 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Buscar região (ex.: Hernand, deserto, tundra...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => window.setTimeout(() => setSearchFocused(false), 150)}
              className="pl-9"
              aria-label="Buscar região no mapa de Pywel"
            />
          </div>
          {searchFocused && filteredSuggestions.length > 0 && (
            <ul className="absolute z-20 left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg overflow-hidden">
              {filteredSuggestions.map((r) => (
                <li key={r.slug}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      focarRegiao(r.slug);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-accent flex items-center gap-2"
                  >
                    <RegionIcon iconKey={r.iconKey} />
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{r.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {searchFocused && searchTerm && filteredSuggestions.length === 0 && (
            <div className="absolute z-20 left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg px-3 py-2 text-xs text-muted-foreground">
              Nenhuma região encontrada para "{searchTerm}".
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O continente de <strong>Pywel</strong> é o palco de Crimson Desert — e é massivo. Estimado em{" "}
          <strong>80 a 110 km²</strong>, o mapa é pelo menos o dobro da área jogável de Skyrim e maior que o de Red Dead
          Redemption 2, segundo Will Powers, diretor criativo da Pearl Abyss. Atravessá-lo a cavalo leva cerca de 2
          horas. Pywel se divide em <strong>5 regiões principais</strong>
          no mundo físico mais <strong>The Abyss</strong> — uma dimensão paralela de ilhas flutuantes.
        </p>

        <h2>Tamanho e Comparação</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Jogo</th>
                <th className="text-left py-3 px-4">Tamanho estimado</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Crimson Desert (Pywel)", "80–110 km²"],
                ["Red Dead Redemption 2", "75 km²"],
                ["The Witcher 3 (terreno jogável)", "~48 km²"],
                ["The Elder Scrolls V: Skyrim", "~37 km²"],
              ].map(([g, s]) => (
                <tr key={g} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{g}</td>
                  <td className="py-3 px-4 text-muted-foreground">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Fonte: Method.gg, Beebom e entrevista de Will Powers (Pearl Abyss).
          </p>
        </div>
      </div>

      {/* Region cards */}
      <div className="not-prose my-8 space-y-5">
        <AdRectangle className="my-8" />

        <AdLeaderboard className="my-8" />

        <h2 className="text-2xl font-bold">As 5 Regiões de Pywel + The Abyss</h2>

        {regionsData.map((r) => (
          <div key={r.name} className={`rounded-2xl border p-5 md:p-6 ${r.color}`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <RegionIcon iconKey={r.iconKey} />
              <h3 className="text-xl font-bold">{r.name}</h3>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${r.badge}`}>{r.label}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground mb-3">
              <span>
                <strong className="text-foreground">Bioma:</strong> {r.biome}
              </span>
              <span>
                <strong className="text-foreground">Posição:</strong> {r.position}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5">Bosses confirmados</p>
                <ul className="space-y-1">
                  {r.bosses.map((b) => (
                    <li key={b} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-red-400 mt-0.5">⚔</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5">
                  Cidades / Locais chave
                </p>
                <ul className="space-y-1">
                  {r.towns.map((t) => (
                    <li key={t} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">◆</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {r.notes && (
              <p className="mt-3 text-xs text-muted-foreground italic border-t border-border/50 pt-3">💡 {r.notes}</p>
            )}
          </div>
        ))}

        {/* Abyss card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Zap className="h-5 w-5 text-white/70" />
            <h3 className="text-xl font-bold">The Abyss — A Dimensão Paralela</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
              Dimensão Separada
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            The Abyss não é uma região física de Pywel, mas uma dimensão paralela de ilhas flutuantes no céu. É
            acessível em pontos específicos do mapa e funciona de forma radicalmente diferente das outras regiões: cada
            ilha é uma área de puzzle. Resolva o puzzle, ative a torre/totem e receba um
            <strong className="text-foreground"> Abyss Artifact</strong> — o recurso mais importante do jogo, usado para
            aumentar atributos, desbloquear habilidades e fazer upgrade de equipamentos.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5">Bosses confirmados</p>
              <ul className="space-y-1">
                <li className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="text-red-400 mt-0.5">⚔</span>
                  Hexe Marie (bruxa que invoca criaturas; boss de lore importante)
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1.5">Pontos chave</p>
              <ul className="space-y-1">
                {[
                  "Library of Providence",
                  "Abyss Cressets (fast travel + Abyss Artifact)",
                  "Abyss Nexus (teleporters especiais)",
                ].map((t) => (
                  <li key={t} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">◆</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground italic border-t border-border/50 pt-3">
            💡 Fonte: GameSpot (guia de fast travel, 19/03/2026) e Beebom (guia de Abyss Artifacts).
          </p>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Como se Locomover em Pywel</h2>
        <ul>
          <li>
            <strong>Montarias (29 variedades):</strong> cavalos, ursos, lagartos, raptores e dragões. Cada montaria tem
            atributos de velocidade e combate diferentes.
          </li>
          <li>
            <strong>Teleporters (Abyss Nexus e Abyss Cressets):</strong> pontos de fast travel desbloqueados manualmente
            ao explorar. Muitos exigem solução de puzzles antes de ficarem disponíveis.
          </li>
          <li>
            <strong>Planeio:</strong> Kliff aprende a planar cedo no jogo, permitindo traversal vertical e acesso a
            locais elevados.
          </li>
          <li>
            <strong>Voo (habilidade avançada):</strong> ao desbloquear a habilidade Flight, é possível voar montado em
            dragões — a forma mais rápida de traversal de longa distância.
          </li>
          <li>
            <strong>Escalada:</strong> Kliff pode escalar praticamente qualquer superfície, similar a Zelda: Breath of
            the Wild.
          </li>
        </ul>

        <h2>Volume de Conteúdo</h2>
        <p>
          Crimson Desert tem <strong>430 missões no total</strong> (fonte: Beebom) e <strong>76 bosses</strong>
          (fonte: GameSpot). Além da campanha principal, há sistemas de crafting, culinária, fazenda, gestão do
          acampamento Greymane, missões de facção e rumores que levam a conteúdo escondido. Críticos que completaram o
          jogo reportaram entre 110 e 150 horas de jogo.
        </p>

        <p className="text-sm text-muted-foreground">
          <strong>Fontes:</strong> Beebom, FandomWire, Method.gg, Game8.co, GameSpot (guias 19/03/2026), PC Gamer,
          Fandom Wiki (Crimson Desert), GURUgamer, Wikipedia.
        </p>
      </div>

      <RelatedPosts currentSlug="crimson-desert-mapa-regioes-pywel" />
      <CommentSection postId="crimson-desert-mapa-regioes-pywel" postTitle="Crimson Desert: Mapa Completo de Pywel" />
    </article>
  );
};

export default CrimsonDesertMapa;
