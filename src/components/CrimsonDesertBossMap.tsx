import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, MapPin, X, Star } from "lucide-react";
import mapaImg from "@/assets/crimson-desert-mapa-oficial.webp";
import { crimsonDesertBosses, bossTipoMeta, type BossMarker, type BossTipo } from "@/data/crimsonDesertBosses";

type FiltroTipo = "todos" | BossTipo;

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.5;

const CrimsonDesertBossMap = () => {
  const [filtro, setFiltro] = useState<FiltroTipo>("todos");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [bossSelecionado, setBossSelecionado] = useState<BossMarker | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrastoInicioRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const bossesFiltrados = useMemo(() => {
    // "Todos" mostra história + opcionais mesclados (não secretos)
    // Secretos só aparecem quando o filtro "Secreto" é selecionado explicitamente
    if (filtro === "todos") return crimsonDesertBosses.filter((b) => b.tipo !== "secreto");
    return crimsonDesertBosses.filter((b) => b.tipo === filtro);
  }, [filtro]);

  const contadores = useMemo(() => ({
    todos: crimsonDesertBosses.filter((b) => b.tipo !== "secreto").length,
    historia: crimsonDesertBosses.filter((b) => b.tipo === "historia").length,
    opcional: crimsonDesertBosses.filter((b) => b.tipo === "opcional").length,
    secreto: crimsonDesertBosses.filter((b) => b.tipo === "secreto").length,
  }), []);

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

  const ajustarZoom = useCallback((delta: number) => {
    setZoom((z) => {
      const novo = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z + delta));
      if (novo === ZOOM_MIN) setPan({ x: 0, y: 0 });
      else setPan((p) => limitarPan(p, novo));
      return novo;
    });
  }, [limitarPan]);

  const resetar = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Wheel zoom
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

  // Pan com mouse/touch
  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom === 1) return;
    setArrastando(true);
    arrastoInicioRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!arrastando) return;
    const dx = e.clientX - arrastoInicioRef.current.x;
    const dy = e.clientY - arrastoInicioRef.current.y;
    setPan(limitarPan({
      x: arrastoInicioRef.current.panX + dx,
      y: arrastoInicioRef.current.panY + dy,
    }, zoom));
  };
  const onPointerUp = () => setArrastando(false);

  const irParaSecao = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setBossSelecionado(null);
    }
  };

  const filtros: Array<{ key: FiltroTipo; label: string; count: number }> = [
    { key: "todos", label: "Todos (Hist. + Opcionais)", count: contadores.todos },
    { key: "historia", label: "História", count: contadores.historia },
    { key: "opcional", label: "Opcionais", count: contadores.opcional },
    { key: "secreto", label: "Secretos", count: contadores.secreto },
  ];

  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header com filtros */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-border bg-background/50">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="font-display font-bold text-sm">Mapa de Pywel</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filtros.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltro(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                filtro === f.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
              aria-pressed={filtro === f.key}
            >
              {f.label} <span className="opacity-70">({f.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-background select-none touch-none"
          style={{ cursor: zoom > 1 ? (arrastando ? "grabbing" : "grab") : "default" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="absolute inset-0 transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            <img
              src={mapaImg}
              alt="Mapa oficial de Pywel — Crimson Desert"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />
            {/* Marcadores */}
            {bossesFiltrados.map((boss) => {
              const meta = bossTipoMeta[boss.tipo];
              return (
                <button
                  key={boss.id}
                  onClick={(e) => { e.stopPropagation(); setBossSelecionado(boss); }}
                  aria-label={`Boss ${boss.nome} — ${meta.label} — ${boss.regiao}`}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 ${meta.bg} ${meta.cor} rounded-full font-bold flex items-center justify-center shadow-lg ring-2 ring-background hover:scale-125 hover:z-20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary transition-transform`}
                  style={{
                    left: `${boss.x}%`,
                    top: `${boss.y}%`,
                    width: `${Math.max(20, 28 / zoom)}px`,
                    height: `${Math.max(20, 28 / zoom)}px`,
                    fontSize: `${Math.max(9, 12 / zoom)}px`,
                  }}
                >
                  {boss.numero}
                  {/* Tooltip */}
                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground border border-border rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-30 shadow-lg"
                    style={{ transform: `translateX(-50%) scale(${1 / zoom})`, transformOrigin: "bottom center" }}
                  >
                    {boss.nome}
                    <span className="block text-[10px] text-muted-foreground font-normal">
                      {boss.regiao} · {"★".repeat(boss.dificuldade)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controles de zoom */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            <button
              onClick={() => ajustarZoom(ZOOM_STEP)}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Aumentar zoom"
              className="w-10 h-10 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={() => ajustarZoom(-ZOOM_STEP)}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Diminuir zoom"
              className="w-10 h-10 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              onClick={resetar}
              disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
              aria-label="Resetar zoom"
              className="w-10 h-10 bg-card/95 backdrop-blur border border-border rounded-lg flex items-center justify-center hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          {/* Indicador de zoom */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-card/95 backdrop-blur border border-border rounded-md text-xs font-mono text-muted-foreground z-10">
            {Math.round(zoom * 100)}%
          </div>
        </div>

        {/* Painel de detalhes */}
        {bossSelecionado && (
          <div className="absolute inset-x-0 bottom-0 md:inset-auto md:bottom-3 md:right-16 md:max-w-sm bg-card border-t md:border md:rounded-xl border-border shadow-2xl p-4 z-20 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center justify-center w-6 h-6 ${bossTipoMeta[bossSelecionado.tipo].bg} ${bossTipoMeta[bossSelecionado.tipo].cor} rounded-full text-xs font-bold`}>
                    {bossSelecionado.numero}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">
                    {bossTipoMeta[bossSelecionado.tipo].label}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base leading-tight">{bossSelecionado.nome}</h4>
              </div>
              <button
                onClick={() => setBossSelecionado(null)}
                aria-label="Fechar detalhes"
                className="text-muted-foreground hover:text-foreground p-1 -m-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">📍 Localização</dt>
                <dd className="font-medium">{bossSelecionado.regiao}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">⚠️ Dificuldade</dt>
                <dd className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < bossSelecionado.dificuldade ? "fill-geek text-geek" : "text-muted-foreground/30"}`} />
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">🏆 Recompensa</dt>
                <dd className="font-medium">{bossSelecionado.recompensa}</dd>
              </div>
            </dl>
            <button
              onClick={() => irParaSecao(bossSelecionado.anchorId)}
              className="mt-3 w-full py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Ver detalhes no guia ↓
            </button>
          </div>
        )}
      </div>

      {/* Legenda */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 border-t border-border bg-background/50 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-destructive ring-1 ring-background" />
            <span className="text-muted-foreground">História principal</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-geek ring-1 ring-background" />
            <span className="text-muted-foreground">Opcional</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-primary ring-1 ring-background" />
            <span className="text-muted-foreground">Secreto</span>
          </span>
        </div>
        <span className="text-muted-foreground hidden sm:inline">
          Use scroll/pinch para zoom · Arraste para mover · Clique nos marcadores
        </span>
      </div>
    </div>
  );
};

export default CrimsonDesertBossMap;
