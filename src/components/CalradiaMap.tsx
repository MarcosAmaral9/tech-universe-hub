/**
 * CalradiaMap — mapa interativo de Calradia (Mount & Blade II: Bannerlord).
 * Suporta duas variantes:
 *  - "classic"  → mapa de Calradia antes da expansão War Sails (8 facções).
 *  - "warsails" → mapa pós-War Sails (9 facções, com Nords no arquipélago norte).
 *
 * Renderiza a imagem do mapa como camada base, pins coloridos centrados em cada
 * facção, legenda com quadrados de cor e painel inferior com detalhes da facção
 * selecionada. Zoom/pan herdados via LightboxImage (botão "Ampliar"). Mobile e
 * teclado acessíveis.
 */
import { useMemo, useState } from "react";
import { Crown, Sword, MapPin, Info, Ship } from "lucide-react";
import LightboxImage from "@/components/LightboxImage";
import mapClassic from "@/assets/bannerlord-calradia-map-classic.webp";
import mapWarSails from "@/assets/bannerlord-calradia-map-warsails.webp";
import { getFactionsByVariant, type FactionId, type Faction } from "@/data/bannerlordFactions";

interface CalradiaMapProps {
  variant?: "classic" | "warsails";
  title?: string;
  caption?: string;
}

const CalradiaMap = ({ variant = "warsails", title, caption }: CalradiaMapProps) => {
  const factions = useMemo(() => getFactionsByVariant(variant), [variant]);
  const [activeId, setActiveId] = useState<FactionId | null>(null);
  const active = factions.find((f) => f.id === activeId) ?? null;
  const mapSrc = variant === "classic" ? mapClassic : mapWarSails;

  const getPos = (f: Faction) =>
    variant === "classic" ? f.posClassic : f.posWarSails;

  const heading =
    title ??
    (variant === "classic"
      ? "Mapa Interativo de Calradia · Antes de War Sails"
      : "Mapa Interativo de Calradia · Após War Sails");

  const subtitle =
    variant === "classic"
      ? "8 facções jogáveis · clique numa região ou na legenda para detalhes"
      : "9 facções jogáveis (com Nords da expansão) · clique numa região ou na legenda";

  return (
    <div className="not-prose my-8 rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {variant === "warsails" ? (
            <Ship className="h-4 w-4 text-blue-300 shrink-0" />
          ) : (
            <Crown className="h-4 w-4 text-amber-400 shrink-0" />
          )}
          <span className="font-semibold text-sm truncate">{heading}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{subtitle}</span>
        </div>
      </div>

      {/* Legenda — quadrados coloridos clicáveis */}
      <div
        className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-border bg-muted/20"
        role="list"
        aria-label="Legenda das facções"
      >
        {factions.map((f) => {
          const ativo = activeId === f.id;
          return (
            <button
              key={f.id}
              role="listitem"
              type="button"
              onClick={() => setActiveId(ativo ? null : f.id)}
              aria-pressed={ativo}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
                ativo
                  ? "ring-2 ring-offset-1 ring-primary/40 shadow-sm bg-card"
                  : "bg-muted/40 hover:bg-card border-border hover:border-primary/40"
              }`}
              style={{
                borderColor: ativo ? f.color : undefined,
                color: ativo ? f.color : undefined,
              }}
            >
              <span
                aria-hidden="true"
                className="inline-block w-3 h-3 rounded-sm border border-black/30"
                style={{ backgroundColor: f.color }}
              />
              {f.name}
              {f.dlc === "war-sails" && (
                <span className="text-[9px] uppercase tracking-wider text-blue-300 font-bold">DLC</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mapa com pins sobrepostos */}
      <div className="relative bg-black/30">
        <LightboxImage
          src={mapSrc}
          alt={
            variant === "classic"
              ? "Mapa de Calradia antes da expansão War Sails — Mount & Blade II: Bannerlord, mostrando as 8 facções jogáveis (Vlandia, Sturgia, Battania, Khuzait, Aserai e os três impérios) com cidades e regiões nomeadas"
              : "Mapa de Calradia após a expansão War Sails — Mount & Blade II: Bannerlord, mostrando as 9 facções jogáveis incluindo o território Nord no arquipélago norte, com cidades e rotas marítimas"
          }
          caption={
            caption ??
            (variant === "classic"
              ? "Clique para ampliar · zoom até 5× para inspecionar cidades"
              : "Clique para ampliar · zoom até 5× para inspecionar cidades e rotas Nord")
          }
          width={1792}
          height={1024}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
        />

        {/* Pins absolutos sobre a imagem (overlay) */}
        <div className="pointer-events-none absolute inset-0">
          {factions.map((f) => {
            const pos = getPos(f);
            if (!pos) return null;
            const ativo = activeId === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveId(ativo ? null : f.id);
                }}
                aria-label={`Selecionar facção ${f.name}`}
                aria-pressed={ativo}
                className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white/90 shadow-lg flex items-center justify-center text-[10px] font-bold text-white transition-all hover:scale-125 focus:outline-none focus-visible:ring-4 focus-visible:ring-white ${
                  ativo ? "scale-125 ring-4 z-20" : "z-10"
                }`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  width: ativo ? 28 : 22,
                  height: ativo ? 28 : 22,
                  backgroundColor: f.color,
                  boxShadow: ativo
                    ? `0 0 0 6px ${f.color}33, 0 4px 12px rgba(0,0,0,0.4)`
                    : "0 2px 6px rgba(0,0,0,0.4)",
                }}
              >
                <MapPin className="h-3 w-3" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Painel de detalhes */}
      <div
        className="border-t border-border bg-muted/10 px-4 py-4 min-h-[140px]"
        role="region"
        aria-live="polite"
      >
        {active ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                aria-hidden="true"
                className="inline-block w-4 h-4 rounded-sm border border-black/30"
                style={{ backgroundColor: active.color }}
              />
              <h4 className="font-display text-lg font-bold" style={{ color: active.color }}>
                {active.name}
              </h4>
              {active.dlc === "war-sails" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                  <Ship className="h-3 w-3" /> War Sails DLC
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{active.desc}</p>
            <div className="grid sm:grid-cols-3 gap-2 mt-1 text-xs">
              <div className="rounded-lg bg-card border border-border px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Cultura</div>
                <div className="font-semibold">{active.culture}</div>
              </div>
              <div className="rounded-lg bg-card border border-border px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Capital</div>
                <div className="font-semibold flex items-center gap-1">
                  <Crown className="h-3 w-3 text-amber-400" /> {active.capital}
                </div>
              </div>
              <div className="rounded-lg bg-card border border-border px-3 py-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">Tropa T6</div>
                <div className="font-semibold flex items-center gap-1">
                  <Sword className="h-3 w-3 text-red-400" /> {active.troopT6}
                </div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="font-semibold text-foreground">Cidades-chave: </span>
              {active.cities.join(" · ")}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4 shrink-0" />
            Selecione uma facção na legenda ou nos pontos coloridos do mapa para ver capital, cultura,
            cidades e tropa de elite (T6).
          </div>
        )}
      </div>
    </div>
  );
};

export default CalradiaMap;
