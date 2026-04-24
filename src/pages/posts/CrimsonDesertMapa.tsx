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

const CrimsonDesertMapa = () => {
  useEffect(() => {
    trackArticleRead(
      "crimson-desert-mapa-regioes-pywel",
      "Crimson Desert: Mapa Completo de Pywel — Todas as Regiões",
      "geek",
    );
  }, []);

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

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={crimsonMapaImg} alt="Mapa de Pywel — Crimson Desert regiões" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
          <p className="text-sm text-muted-foreground italic">
            O continente de Pywel é estimado em 80–110 km² — mais que o dobro do mapa de Skyrim. Atravessá-lo a cavalo
            leva aproximadamente 2 horas.
          </p>
        </div>
      </div>

      {/* Mapa Interativo de Pywel */}
      <div className="not-prose my-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Map className="h-5 w-5 text-primary" /> Pywel — Mapa Interativo das Regiões
        </h2>
        <CrimsonDesertRegionMap />
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Clique em um pin para abrir os detalhes da região. Use scroll, arraste e os botões de zoom para explorar o mapa completo de Pywel.
        </p>
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
