import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, DollarSign, Bitcoin, Gem, SlidersHorizontal, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import B3StockTicker from "@/components/B3StockTicker";
import CurrencyWidget from "@/components/CurrencyWidget";
import CryptoWidget from "@/components/CryptoWidget";
import PreciousMetalsWidget from "@/components/PreciousMetalsWidget";
import DynamicSEO from "@/components/DynamicSEO";

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
    if (section !== "all") {
      const refs: Record<string, React.RefObject<HTMLDivElement>> = {
        b3: b3Ref,
        currency: currencyRef,
        metals: metalsRef,
        crypto: cryptoRef,
      };
      setTimeout(() => {
        refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const show = (s: Section) => activeSection === "all" || activeSection === s;

  return (
    <>
      <DynamicSEO />
      <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/financas">
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Finanças
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-12 bg-invest rounded-full" />
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-bold">
              <span className="text-invest">Cotações</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Dados consolidados de mercado, atualizados automaticamente
            </p>
            <Link to="/historico-cotacoes" className="inline-block mt-4">
              <Button
                variant="default"
                size="lg"
                className="gap-2 bg-invest hover:bg-invest/90 text-white font-bold shadow-lg shadow-invest/20 text-base px-6"
              >
                <History className="h-5 w-5" />
                Ver Histórico de Cotações
              </Button>
            </Link>
          </div>
        </div>
      </div>

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
