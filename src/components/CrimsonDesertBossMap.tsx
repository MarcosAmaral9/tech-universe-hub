/**
 * CrimsonDesertBossMap
 * Mapa interativo de bosses do Crimson Desert.
 * Dois tabs: Pywel (continente principal) e Abismo (The Abyss).
 * Pins menores para não sobrepor uns aos outros.
 * Posições calibradas a partir das imagens de referência do MapGenie.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, X, MapPin, Info } from "lucide-react";
import mapaPywelImg from "@/assets/crimson-desert-pywel-completo.webp";
import mapaAbyssImg from "@/assets/crimson-desert-abyss.webp";
import {
  crimsonDesertBosses,
  bossTipoMeta,
  type BossMarker,
  type BossTipo,
} from "@/data/crimsonDesertBosses";

type FiltroTipo = "todos" | BossTipo;
type MapaTab = "pywel" | "abyss";

const ZOOM_MIN = 1;
const ZOOM_MAX = 5;
const ZOOM_STEP = 0.5;

// Estrelas de dificuldade
const Estrelas = ({ n }: { n: number }) => (
  <span className="text-yellow-400">{"★".repeat(n)}<span className="text-muted-foreground/40">{"★".repeat(5 - n)}</span></span>
);

const CrimsonDesertBossMap = () => {
  const [mapaTab, setMapaTab] = useState<MapaTab>("pywel");
  const [filtro, setFiltro] = useState<FiltroTipo>("todos");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [bossSelecionado, setBossSelecionado] = useState<BossMarker | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrastoInicioRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  // Filtrar por aba de mapa + tipo
  const bossesFiltrados = useMemo(() => {
    let lista = crimsonDesertBosses.filter((b) => b.mapa === mapaTab);
    if (filtro === "todos") {
      // "Todos" mostra história + opcionais mesclados (secretos omitidos)
      lista = lista.filter((b) => b.tipo !== "secreto");
    } else {
      lista = lista.filter((b) => b.tipo === filtro);
    }
    return lista;
  }, [filtro, mapaTab]);

  const contadores = useMemo(() => {
    const base = crimsonDesertBosses.filter((b) => b.mapa === mapaTab);
    return {
      todos:    base.filter((b) => b.tipo !== "secreto").length,
      historia: base.filter((b) => b.tipo === "historia").length,
      opcional: base.filter((b) => b.tipo === "opcional").length,
      secreto:  base.filter((b) => b.tipo === "secreto").length,
    };
  }, [mapaTab]);

  // Totals across all maps for the header
  const totalPywel  = crimsonDesertBosses.filter((b) => b.mapa === "pywel").length;
  const totalAbyss  = crimsonDesertBosses.filter((b) => b.mapa === "abyss").length;

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

  const resetar = useCallback(() => { setZoom(1); setPan({ x: 0, y: 0 }); setBossSelecionado(null); }, []);

  const ajustarZoom = useCallback((delta: number) => {
    setZoom((z) => {
      const novo = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z + delta));
      if (novo === ZOOM_MIN) setPan({ x: 0, y: 0 });
      else setPan((p) => limitarPan(p, novo));
      return novo;
    });
  }, [limitarPan]);

  // Mudar tab reseta zoom e seleção
  const handleTabChange = (tab: MapaTab) => {
    setMapaTab(tab);
    setBossSelecionado(null);
    resetar();
  };

  // Roda do mouse
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

  // Drag (mouse + touch)
  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button[data-boss]")) return;
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

  const filtros: Array<{ key: FiltroTipo; label: string; count: number; color: string }> = [
    { key: "todos",    label: "Todos",    count: contadores.todos,    color: "bg-muted text-foreground border-border" },
    { key: "historia", label: "História", count: contadores.historia, color: "bg-red-600/90 text-white border-red-500" },
    { key: "opcional", label: "Opcionais",count: contadores.opcional, color: "bg-blue-600/90 text-white border-blue-500" },
    { key: "secreto",  label: "Secretos", count: contadores.secreto,  color: "bg-yellow-500/90 text-white border-yellow-400" },
  ];

  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm">Mapa Interativo de Bosses</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">— Crimson Desert</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Scroll para zoom · Arraste para mover · Clique no boss para detalhes</span>
          <span className="sm:hidden">Scroll = zoom · Tap = info</span>
        </div>
      </div>

      {/* Tabs: Pywel / Abismo */}
      <div className="flex border-b border-border">
        <button
          onClick={() => handleTabChange("pywel")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-1.5 ${
            mapaTab === "pywel"
              ? "bg-primary/10 text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          🗺️ Continente de Pywel
          <span className="text-xs opacity-70">({totalPywel})</span>
        </button>
        <button
          onClick={() => handleTabChange("abyss")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-1.5 ${
            mapaTab === "abyss"
              ? "bg-primary/10 text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          🌀 The Abyss
          <span className="text-xs opacity-70">({totalAbyss})</span>
        </button>
      </div>

      {/* Filtros de tipo */}
      <div className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-border bg-muted/20">
        {filtros.map((f) => (
          <button
            key={f.key}
            onClick={() => setFiltro(f.key)}
            aria-pressed={filtro === f.key}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
              filtro === f.key
                ? f.color + " ring-2 ring-offset-1 ring-primary/50 shadow-sm"
                : "bg-muted/50 text-muted-foreground border-border hover:border-primary/40"
            }`}
          >
            {f.label} <span className="opacity-75">({f.count})</span>
          </button>
        ))}
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
              src={mapaTab === "pywel" ? mapaPywelImg : mapaAbyssImg}
              alt={
                mapaTab === "pywel"
                  ? "Mapa do Continente de Pywel — Crimson Desert"
                  : "Mapa do Abismo (The Abyss) — Crimson Desert"
              }
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* Pins dos bosses — TAMANHO REDUZIDO */}
            {bossesFiltrados.map((boss) => {
              const meta = bossTipoMeta[boss.tipo];
              // Tamanho base menor: 15px no zoom 1, mínimo 13px
              const pinSize = Math.max(13, 16 / zoom);
              const fontSize = Math.max(7, 8 / zoom);
              return (
                <button
                  key={boss.id}
                  data-boss="true"
                  onClick={(e) => { e.stopPropagation(); setBossSelecionado(bossSelecionado?.id === boss.id ? null : boss); }}
                  aria-label={`${boss.nome} — ${meta.label} — ${boss.regiao}`}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 ${meta.bg} text-white rounded-full font-bold flex items-center justify-center shadow-md ring-1 ring-black/30 hover:scale-150 hover:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform z-10 ${bossSelecionado?.id === boss.id ? "scale-150 ring-2 ring-white z-20" : ""}`}
                  style={{
                    left: `${boss.x}%`,
                    top: `${boss.y}%`,
                    width: `${pinSize}px`,
                    height: `${pinSize}px`,
                    fontSize: `${fontSize}px`,
                    lineHeight: 1,
                  }}
                >
                  <span className="leading-none">{boss.tipo === "secreto" ? "?" : ""}</span>
                  {/* Tooltip no hover */}
                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 px-2 py-1 bg-popover text-popover-foreground border border-border rounded-md text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-30 shadow-lg"
                    style={{ transform: `translateX(-50%) scale(${1 / zoom})`, transformOrigin: "bottom center" }}
                  >
                    {boss.nome}
                    <span className="block text-[9px] text-muted-foreground">{boss.regiao.split("—")[0].trim()}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controles de zoom */}
          <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
            <button onClick={() => ajustarZoom(ZOOM_STEP)}  disabled={zoom >= ZOOM_MAX} aria-label="Zoom in"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow">
              <ZoomIn className="h-4 w-4" />
            </button>
            <button onClick={() => ajustarZoom(-ZOOM_STEP)} disabled={zoom <= ZOOM_MIN} aria-label="Zoom out"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow">
              <ZoomOut className="h-4 w-4" />
            </button>
            <button onClick={resetar} disabled={zoom === 1 && pan.x === 0 && pan.y === 0} aria-label="Resetar"
              className="w-8 h-8 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 shadow">
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-card/90 backdrop-blur border border-border rounded text-[10px] font-mono text-muted-foreground z-10">
            {Math.round(zoom * 100)}%
          </div>
        </div>

        {/* Painel de detalhes do boss selecionado */}
        {bossSelecionado && (
          <div className="absolute inset-x-0 bottom-0 md:inset-auto md:bottom-2 md:right-12 md:max-w-xs bg-card border-t md:border md:rounded-xl border-border shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-3">
            <div className="p-3 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`inline-flex items-center justify-center w-5 h-5 ${bossTipoMeta[bossSelecionado.tipo].bg} text-white rounded-full text-[9px] font-bold`}>
                      {bossSelecionado.tipo === "secreto" ? "?" : bossSelecionado.numero}
                    </span>
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${bossTipoMeta[bossSelecionado.tipo].bg} text-white`}>
                      {bossTipoMeta[bossSelecionado.tipo].label}
                    </span>
                    <Estrelas n={bossSelecionado.dificuldade} />
                  </div>
                  <h3 className="font-bold text-sm leading-tight">{bossSelecionado.nome}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">{bossSelecionado.regiao}</p>
                </div>
                <button onClick={() => setBossSelecionado(null)} className="p-1 rounded hover:bg-muted shrink-0" aria-label="Fechar">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="border-t border-border pt-2 space-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-emerald-400">🏆 Recompensa: </span>
                  <span className="text-muted-foreground">{bossSelecionado.recompensa}</span>
                </div>
                <div>
                  <span className="font-semibold text-amber-400">💡 Dica: </span>
                  <span className="text-muted-foreground">{bossSelecionado.dica}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legenda */}
      <div className="px-3 py-2 border-t border-border bg-muted/20 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {[
          { bg: "bg-red-600",    label: "Chefe da História" },
          { bg: "bg-blue-600",   label: "Chefe Opcional/Mundo" },
          { bg: "bg-yellow-500", label: "Chefe Secreto" },
        ].map(({ bg, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <span className={`inline-block w-3 h-3 rounded-full ${bg}`} />
            {label}
          </span>
        ))}
        <span className="ml-auto">Clique em um pin para detalhes</span>
      </div>
    </div>
  );
};

export default CrimsonDesertBossMap;
