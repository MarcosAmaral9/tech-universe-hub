/**
 * CrimsonDesertRegionMap
 * Mapa interativo das regiões de Pywel — Crimson Desert.
 * Substitui a antiga visualização SVG. Usa o mapa oficial completo
 * (crimson-desert-pywel-completo.webp) e destaca cada uma das 5 regiões
 * principais com pins clicáveis: Pailune, Hernand, Demeniss, Delesyia
 * e Crimson Desert. NÃO inclui o Abismo.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, X, MapPin, Info, Compass, Snowflake, Building2, Cpu, Skull } from "lucide-react";
import mapaPywelImg from "@/assets/crimson-desert-pywel-completo.webp";

export type RegionKey = "hernand" | "pailune" | "demeniss" | "delesyia" | "crimson-desert";

interface CrimsonDesertRegionMapProps {
  /** Permite controlar externamente qual região está selecionada (ex.: busca no post). */
  selectedKey?: RegionKey | null;
  /** Notifica o pai quando a seleção muda dentro do mapa. */
  onSelect?: (key: RegionKey | null) => void;
}

interface Region {
  key: RegionKey;
  name: string;
  label: string;
  /** Posições aproximadas em % sobre a imagem do mapa completo */
  x: number;
  y: number;
  iconKey: "compass" | "snowflake" | "building" | "cpu" | "skull";
  pinClass: string;
  badgeClass: string;
  borderClass: string;
  biome: string;
  position: string;
  desc: string;
  highlights: string[];
}

const regioes: Region[] = [
  {
    key: "pailune",
    name: "Pailune",
    label: "Norte Gelado",
    x: 28,
    y: 40,
    iconKey: "snowflake",
    pinClass: "bg-blue-500 ring-blue-200/40",
    badgeClass: "bg-blue-500/20 text-blue-300",
    borderClass: "border-blue-400/40",
    biome: "Tundra, montanhas nevadas e vendavais constantes",
    position: "Extremo norte do continente",
    desc: "Terra natal de Kliff e dos Greymanes. Montanhas cobertas de neve, picos selvagens e clima brutal tornam Pailune uma das regiões mais inóspitas de Pywel — e palco dos primeiros conflitos contra os Black Bears.",
    highlights: [
      "Savage Peaks — pico mais alto da região",
      "White Mountains — território do espírito da montanha",
      "Stronghold original dos Greymanes",
    ],
  },
  {
    key: "hernand",
    name: "Hernand",
    label: "Área Inicial",
    x: 22,
    y: 60,
    iconKey: "compass",
    pinClass: "bg-green-500 ring-green-200/40",
    badgeClass: "bg-green-500/20 text-green-400",
    borderClass: "border-green-500/40",
    biome: "Pradarias verdes, florestas densas e vales férteis",
    position: "Centro-oeste do continente",
    desc: "Região inicial de Crimson Desert e onde os Greymanes mantêm o acampamento de Howling Hill. Estética de fantasia medieval europeia, com cidades muradas, vilas pelos campos e os primeiros sistemas do jogo apresentados ao jogador.",
    highlights: [
      "Calphade — grande cidade comercial",
      "Beighen — vila tradicional de Hernand",
      "Acampamento Greymane (Howling Hill)",
      "Reedwind Valley e Unicorn Cliffs",
    ],
  },
  {
    key: "demeniss",
    name: "Demeniss",
    label: "Capital Política",
    x: 40,
    y: 55,
    iconKey: "building",
    pinClass: "bg-yellow-500 ring-yellow-200/40",
    badgeClass: "bg-yellow-500/20 text-yellow-400",
    borderClass: "border-yellow-500/40",
    biome: "Cidades fortificadas e planícies militarizadas",
    position: "Centro do continente",
    desc: "Capital de Pywel e centro do poder político e militar. Demeniss concentra a disputa entre as Casas Thorel e Byron e palco das maiores batalhas de cerco da campanha principal.",
    highlights: [
      "Capital fortificada de Pywel",
      "Sede das casas Thorel e Byron",
      "Cidades comerciais com feiras permanentes",
    ],
  },
  {
    key: "delesyia",
    name: "Delesyia",
    label: "Região Tecnológica",
    x: 54,
    y: 78,
    iconKey: "cpu",
    pinClass: "bg-purple-500 ring-purple-200/40",
    badgeClass: "bg-purple-500/20 text-purple-300",
    borderClass: "border-purple-500/40",
    biome: "Instalações mecânicas, ruínas avançadas e laboratórios",
    position: "Leste do continente",
    desc: "A região mais singular de Pywel — um polo científico com criaturas mecânicas, robôs e infraestrutura que destoa do medievalismo do resto do mundo. Abriga a Library of Providence e torres de viagem rápida acessíveis apenas planando.",
    highlights: [
      "Urdavah — instituto de pesquisa",
      "Varnia — cidade no limite nordeste",
      "Torres de fast travel acessíveis por planeio",
    ],
  },
  {
    key: "crimson-desert",
    name: "Crimson Desert",
    label: "Deserto Sem Lei",
    x: 67,
    y: 30,
    iconKey: "skull",
    pinClass: "bg-red-500 ring-red-200/40",
    badgeClass: "bg-red-500/20 text-red-400",
    borderClass: "border-red-500/40",
    biome: "Deserto de areia carmesim e descampados áridos",
    position: "Sul / sudeste do continente",
    desc: "A região homônima do jogo: vasta extensão de deserto sem governo, dominada por bandidos, mercenários e criaturas hostis. Território mais perigoso e imprevisível de Pywel, sem estrutura política organizada.",
    highlights: [
      "Tommaso — maior cidade da região (3 fast travel points)",
      "Serpent Shrine of Aeserion — sul do deserto",
      "Spire of the Sun — torre central",
    ],
  },
];

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.5;

const RegionIcon = ({ iconKey, className }: { iconKey: Region["iconKey"]; className?: string }) => {
  const cls = className ?? "h-4 w-4";
  switch (iconKey) {
    case "compass":
      return <Compass className={cls} />;
    case "snowflake":
      return <Snowflake className={cls} />;
    case "building":
      return <Building2 className={cls} />;
    case "cpu":
      return <Cpu className={cls} />;
    case "skull":
      return <Skull className={cls} />;
    default:
      return <Compass className={cls} />;
  }
};

const CrimsonDesertRegionMap = ({ selectedKey, onSelect }: CrimsonDesertRegionMapProps = {}) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [selecionada, setSelecionadaState] = useState<Region | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrastoInicioRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const setSelecionada = useCallback(
    (r: Region | null) => {
      setSelecionadaState(r);
      onSelect?.(r ? r.key : null);
    },
    [onSelect],
  );

  // Sincroniza seleção externa (controle por busca, etc.)
  useEffect(() => {
    if (selectedKey === undefined) return;
    if (selectedKey === null) {
      setSelecionadaState(null);
      return;
    }
    const found = regioes.find((r) => r.key === selectedKey) ?? null;
    setSelecionadaState(found);
  }, [selectedKey]);

  const limitarPan = useCallback((novoPan: { x: number; y: number }, zoomAtual: number) => {
    if (!containerRef.current) return novoPan;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const maxX = ((zoomAtual - 1) * width) / 2;
    const maxY = ((zoomAtual - 1) * height) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, novoPan.x)),
      y: Math.max(-maxY, Math.min(maxY, novoPan.y)),
    };
  }, []);

  const resetar = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelecionada(null);
  }, []);

  const ajustarZoom = useCallback(
    (delta: number) => {
      setZoom((z) => {
        const novo = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z + delta));
        if (novo === ZOOM_MIN) setPan({ x: 0, y: 0 });
        else setPan((p) => limitarPan(p, novo));
        return novo;
      });
    },
    [limitarPan],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      ajustarZoom(e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ajustarZoom]);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button[data-region]")) return;
    setArrastando(true);
    arrastoInicioRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!arrastando) return;
    const dx = e.clientX - arrastoInicioRef.current.x;
    const dy = e.clientY - arrastoInicioRef.current.y;
    setPan(limitarPan({ x: arrastoInicioRef.current.panX + dx, y: arrastoInicioRef.current.panY + dy }, zoom));
  };
  const onPointerUp = () => setArrastando(false);

  const totalRegioes = useMemo(() => regioes.length, []);

  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm">Mapa Interativo de Pywel</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">— {totalRegioes} regiões</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">
            Scroll para zoom · Arraste para mover · Clique em uma região para detalhes
          </span>
          <span className="sm:hidden">Scroll = zoom · Tap = info</span>
        </div>
      </div>

      {/* Atalhos por região */}
      <div className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-border bg-muted/20">
        {regioes.map((r) => {
          const ativo = selecionada?.key === r.key;
          return (
            <button
              key={r.key}
              onClick={() => setSelecionada(ativo ? null : r)}
              aria-pressed={ativo}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
                ativo
                  ? `${r.badgeClass} ${r.borderClass} ring-2 ring-offset-1 ring-primary/40 shadow-sm`
                  : "bg-muted/50 text-muted-foreground border-border hover:border-primary/40"
              }`}
            >
              <RegionIcon iconKey={r.iconKey} className="h-3.5 w-3.5" />
              {r.name}
            </button>
          );
        })}
      </div>

      {/* Container do mapa */}
      <div className="relative" style={{ height: "clamp(320px, 55vw, 640px)" }}>
        <div
          ref={containerRef}
          className={`w-full h-full overflow-hidden select-none ${arrastando ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            <img
              src={mapaPywelImg}
              alt="Mapa completo do continente de Pywel — Crimson Desert"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* Pins das regiões */}
            {regioes.map((r) => {
              const ativo = selecionada?.key === r.key;
              const pinSize = Math.max(20, 26 / zoom);
              const labelScale = 1 / zoom;
              return (
                <button
                  key={r.key}
                  data-region="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelecionada(ativo ? null : r);
                  }}
                  aria-label={`${r.name} — ${r.label}`}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 ${r.pinClass} text-white rounded-full font-bold flex items-center justify-center shadow-lg ring-2 hover:scale-125 hover:z-20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 transition-transform z-10 ${
                    ativo ? "scale-125 ring-4 ring-white z-20" : ""
                  }`}
                  style={{
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                    width: `${pinSize}px`,
                    height: `${pinSize}px`,
                  }}
                >
                  <RegionIcon iconKey={r.iconKey} className="h-3.5 w-3.5" />
                  {/* Rótulo permanente abaixo do pin */}
                  <span
                    className="pointer-events-none absolute top-full left-1/2 mt-1 px-1.5 py-0.5 bg-card/90 backdrop-blur border border-border rounded text-[10px] font-bold text-foreground whitespace-nowrap shadow-md"
                    style={{
                      transform: `translateX(-50%) scale(${labelScale})`,
                      transformOrigin: "top center",
                    }}
                  >
                    {r.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controles de zoom */}
          <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
            <button
              onClick={() => ajustarZoom(ZOOM_STEP)}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Zoom in"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              onClick={() => ajustarZoom(-ZOOM_STEP)}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Zoom out"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <button
              onClick={resetar}
              disabled={zoom === 1 && pan.x === 0 && pan.y === 0 && !selecionada}
              aria-label="Resetar"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-card/90 backdrop-blur border border-border rounded text-[10px] font-mono text-muted-foreground z-10">
            {Math.round(zoom * 100)}%
          </div>
        </div>

        {/* Painel de detalhes da região selecionada */}
        {selecionada && (
          <div className="absolute inset-x-0 bottom-0 md:inset-auto md:bottom-2 md:right-12 md:max-w-sm bg-card border-t md:border md:rounded-xl border-border shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-3">
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 ${selecionada.pinClass} text-white rounded-full ring-2`}
                    >
                      <RegionIcon iconKey={selecionada.iconKey} className="h-4 w-4" />
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${selecionada.badgeClass}`}>
                      {selecionada.label}
                    </span>
                  </div>
                  <h3 className="font-bold text-base leading-tight">{selecionada.name}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">{selecionada.position}</p>
                </div>
                <button
                  onClick={() => setSelecionada(null)}
                  className="p-1 rounded hover:bg-muted shrink-0"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="border-t border-border pt-2 space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-foreground">🌿 Bioma: </span>
                  <span className="text-muted-foreground">{selecionada.biome}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selecionada.desc}</p>
                <div>
                  <p className="font-semibold text-foreground mb-1">📍 Locais-chave</p>
                  <ul className="space-y-0.5">
                    {selecionada.highlights.map((h) => (
                      <li key={h} className="text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">◆</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`/regiao/${selecionada.key}`}
                  className="block text-center mt-1 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-[11px] transition-colors"
                >
                  Saiba mais sobre {selecionada.name} →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legenda */}
      <div className="px-3 py-2 border-t border-border bg-muted/20 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {regioes.map((r) => (
          <span key={r.key} className="flex items-center gap-1.5">
            <span className={`inline-block w-3 h-3 rounded-full ${r.pinClass.split(" ")[0]}`} />
            {r.name}
          </span>
        ))}
        <span className="ml-auto">Clique em um pin para detalhes da região</span>
      </div>
    </div>
  );
};

export default CrimsonDesertRegionMap;
