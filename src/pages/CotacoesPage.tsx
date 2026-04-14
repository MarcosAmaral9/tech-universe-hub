import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, DollarSign, Bitcoin, Gem, SlidersHorizontal, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import B3StockTicker from "@/components/B3StockTicker";
import CurrencyWidget from "@/components/CurrencyWidget";
import CryptoWidget from "@/components/CryptoWidget";
import PreciousMetalsWidget from "@/components/PreciousMetalsWidget";
import DynamicSEO from "@/components/DynamicSEO";
import heroCotacoes from "@/assets/cotacoes-tempo-real.webp";

type Section = "all" | "b3" | "currency" | "metals" | "crypto";

const sections = [
  { key: "all" as Section, label: "Todos", icon: BarChart3 },
  { key: "b3" as Section, label: "B3", icon: TrendingUp },
  { key: "currency" as Section, label: "Câmbio", icon: DollarSign },
  { key: "metals" as Section, label: "Metais", icon: Gem },
  { key: "crypto" as Section, label: "Cripto", icon: Bitcoin },
];

const CotacoesPage = () => {
  const [activeSection, setActiveSection] = useState<Section>("all");

  const b3Ref = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const metalsRef = useRef<HTMLDivElement>(null);
  const cryptoRef = useRef<HTMLDivElement>(null);

  const handleFilter = (section: Section) => {
    setActiveSection(section);
  };

  const show = (s: Section) => activeSection === "all" || activeSection === s;

  return (
    <>
      <DynamicSEO />
      {/* Hero Banner — full-width, outside container */}
      <div className="relative w-full overflow-hidden" style={{height:"min(56vw, 380px)", minHeight:"200px"}}>
        <img
          fetchpriority="high"
          src={heroCotacoes}
          alt="Cotações em Tempo Real — B3, Bitcoin, Câmbio"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10 flex items-end md:items-center px-6 md:px-16 pb-8 md:pb-0">
          <div className="max-w-2xl">
            <span className="text-invest font-bold text-xs uppercase tracking-widest mb-2 block">Finanças • Mercado ao Vivo</span>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-invest">Cotações</span> em Tempo Real
            </h1>
            <p className="text-white/70 text-sm mt-2 max-w-md hidden sm:block">
              B3, Criptomoedas, Câmbio e Metais — atualizados pelo servidor a cada 5 minutos
            </p>
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <Link to="/historico-cotacoes">
                <Button
                  variant="default"
                  size="lg"
                  className="gap-2 bg-invest hover:bg-invest/90 text-white font-bold shadow-xl shadow-invest/40 text-sm md:text-base px-5 md:px-6"
                >
                  <History className="h-4 w-4 md:h-5 md:w-5" />
                  Ver Histórico
                </Button>
              </Link>
              <Link to="/financas">
                <Button variant="ghost" size="sm" className="gap-1.5 text-white/70 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="h-3.5 w-3.5" />Finanças
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 sticky top-16 z-30 bg-background/95 backdrop-blur py-3 -mx-4 px-4 border-b border-border">
        <SlidersHorizontal className="h-4 w-4 text-muted-foreground self-center mr-1" />
        {sections.map(s => {
          const Icon = s.icon;
          return (
            <button
              key={s.key}
              onClick={() => handleFilter(s.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === s.key
                  ? "bg-invest text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Icon className="h-4 w-4" />
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Widgets */}
      <div className="space-y-6">
        {show("b3") && (
          <div ref={b3Ref}>
            <B3StockTicker />
          </div>
        )}
        {show("currency") && (
          <div ref={currencyRef}>
            <CurrencyWidget />
          </div>
        )}
        {show("metals") && (
          <div ref={metalsRef}>
            <PreciousMetalsWidget />
          </div>
        )}
        {show("crypto") && (
          <div ref={cryptoRef}>
            <CryptoWidget />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-8 bg-card border border-border rounded-2xl p-6">
        <h2 className="font-display text-lg font-bold mb-3">Sobre os Dados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <strong className="text-foreground">📊 B3</strong>
            <p>Ações da Bolsa de Valores brasileira via brapi.dev. Cache de 30 min.</p>
          </div>
          <div>
            <strong className="text-foreground">💱 Câmbio</strong>
            <p>Dólar e Euro via Frankfurter (BCE). ARS e PYG via AwesomeAPI. Cache de 30 min.</p>
          </div>
          <div>
            <strong className="text-foreground">🥇 Metais</strong>
            <p>Ouro e prata via Stooq, convertidos para BRL. Pureza: Ouro 18k, Prata 925.</p>
          </div>
          <div>
            <strong className="text-foreground">₿ Cripto</strong>
            <p>Top 8 criptomoedas por capitalização via CoinGecko. Cache de 10 min.</p>
          </div>
        </div>
      </div>
    </div>
  </>  
  );
};

export default CotacoesPage;
