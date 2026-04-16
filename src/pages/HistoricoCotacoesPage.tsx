import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, TrendingUp, TrendingDown, DollarSign,
  Bitcoin, Gem, BarChart3, AlertTriangle, Clock, Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import { useMarketData } from "@/hooks/useMarketData";
import heroHistorico from "@/assets/historico-cotacoes.webp";
import {
  Area, AreaChart, CartesianGrid, Line, LineChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

// ── Types ──────────────────────────────────────────────────────────────────
type Period      = "5d" | "7d" | "30d" | "90d" | "1y";
type CategoryKey = "b3" | "crypto" | "currency" | "metal";

// Períodos por categoria — baseados nas capacidades reais de cada API gratuita:
//   Cripto: CoinGecko free → até 365 dias (7D, 30D, 90D, 1A via bootstrap/proxy)
//   Câmbio: fawazahmed jsDelivr → sem limite (qualquer data desde 2022)
//   Metais: fawazahmed (inclui XAU/XAG) → sem limite (mesma API câmbio)
//   B3:     Somente o que o cron acumulou no BD (1 ponto/dia desde ativação)
//           Períodos mostrados dinamicamente baseados em pontos reais
const ALL_PERIODS: { key: Period; label: string }[] = [
  { key: "7d",  label: "7D"  },
  { key: "30d", label: "1M"  },
  { key: "90d", label: "3M"  },
  { key: "1y",  label: "1A"  },
];
const CATEGORY_PERIODS: Record<CategoryKey, { key: Period; label: string }[]> = {
  // B3: dinâmico — só períodos com dados reais acumulados pelo cron
  b3:       ALL_PERIODS, // filtrado dinamicamente em availablePeriods
  // Cripto: CoinGecko free suporta até 365 dias — todos os períodos disponíveis via bootstrap
  crypto:   ALL_PERIODS,
  // Câmbio: fawazahmed histórico diário sem limite — todos os períodos
  currency: ALL_PERIODS,
  // Metais: mesma API do câmbio (XAU/XAG incluídos) — todos os períodos
  metal:    ALL_PERIODS,
};

interface ChartPoint  { date: string; value: number; label: string }
interface AssetHistory {
  id: string; name: string; symbol: string;
  category: CategoryKey; icon: string;
  currentPrice: number; change24h: number;
  data: ChartPoint[]; unit: string;
  dataSource: "real" | "db" | "simulated";
}

// ── Formatação ─────────────────────────────────────────────────────────────
const fmtBRL = (v: number) => {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000)     return `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (v >= 1)         return `R$ ${v.toFixed(2).replace(".", ",")}`;
  if (v >= 0.01)      return `R$ ${v.toFixed(4).replace(".", ",")}`;
  return `R$ ${v.toFixed(6).replace(".", ",")}`;
};
const fmtDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
const pctColor = (v: number) => v >= 0 ? "text-emerald-400" : "text-red-400";
const pctArrow = (v: number) =>
  v >= 0 ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />;

// ── Constantes ─────────────────────────────────────────────────────────────
const TROY = 31.1035;
const PERIOD_DAYS: Record<Period, number> = { "5d": 5, "7d": 7, "30d": 30, "90d": 90, "1y": 365 };
const CAT_STROKE: Record<CategoryKey, string> = {
  b3: "#60a5fa", crypto: "#fb923c", currency: "#34d399", metal: "#facc15",
};
const CAT_BORDER: Record<CategoryKey, string> = {
  b3: "border-blue-500/30 bg-blue-500/5",
  crypto: "border-orange-500/30 bg-orange-500/5",
  currency: "border-emerald-500/30 bg-emerald-500/5",
  metal: "border-yellow-500/30 bg-yellow-500/5",
};
const B3_ICONS: Record<string, string> = {
  PETR4:"🛢️", VALE3:"⛏️", ITUB4:"🏦", BBDC4:"🏦", ABEV3:"🍺",
  WEGE3:"⚙️", BBAS3:"🏦", RENT3:"🚗", MGLU3:"🛒", SUZB3:"🌲",
};
const CRYPTO_ICONS: Record<string, string> = {
  bitcoin:"₿", ethereum:"⟠", solana:"◎", binancecoin:"🟡",
  cardano:"🔵", ripple:"💧", chainlink:"🔗", polkadot:"⬤",
};
const CRYPTO_SYMBOL_MAP: Record<string, string> = {
  bitcoin:"BTC", ethereum:"ETH", solana:"SOL", binancecoin:"BNB",
  cardano:"ADA", ripple:"XRP", chainlink:"LINK", polkadot:"DOT",
};

// ── Simulação determinística (fallback) ────────────────────────────────────
const buildSimulated = (currentPrice: number, volatility: number, days: number): ChartPoint[] => {
  const pts: number[] = [currentPrice];
  for (let i = 1; i <= days; i++) {
    const prev  = pts[pts.length - 1];
    const rnd   = (Math.sin(i * 127.1 + currentPrice) + 1) / 2;
    const delta = (rnd - 0.5) * 2 * volatility;
    pts.push(Math.max(prev * (1 + delta), 0.0001));
  }
  pts[pts.length - 1] = currentPrice;
  const now = new Date();
  return pts.map((v, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - i));
    const iso = d.toISOString().slice(0, 10);
    return { date: iso, value: parseFloat(v.toFixed(v >= 1 ? 2 : 6)), label: fmtDate(iso) };
  });
};

// ── Fallback estático ──────────────────────────────────────────────────────
const FALLBACK_ASSETS: Omit<AssetHistory, "data" | "dataSource">[] = [
  { id:"b3-PETR4", name:"Petrobras PN",       symbol:"PETR4", category:"b3",       icon:"🛢️", currentPrice:37.50,   change24h: 1.2,  unit:"R$/ação" },
  { id:"b3-VALE3", name:"Vale ON",             symbol:"VALE3", category:"b3",       icon:"⛏️", currentPrice:58.20,   change24h:-0.8,  unit:"R$/ação" },
  { id:"b3-ITUB4", name:"Itaú Unibanco PN",   symbol:"ITUB4", category:"b3",       icon:"🏦", currentPrice:35.80,   change24h: 0.5,  unit:"R$/ação" },
  { id:"b3-BBDC4", name:"Bradesco PN",         symbol:"BBDC4", category:"b3",       icon:"🏦", currentPrice:13.90,   change24h:-1.1,  unit:"R$/ação" },
  { id:"b3-ABEV3", name:"Ambev ON",            symbol:"ABEV3", category:"b3",       icon:"🍺", currentPrice:11.50,   change24h: 0.3,  unit:"R$/ação" },
  { id:"b3-WEGE3", name:"WEG ON",              symbol:"WEGE3", category:"b3",       icon:"⚙️", currentPrice:48.00,   change24h: 2.1,  unit:"R$/ação" },
  { id:"b3-BBAS3", name:"Banco do Brasil ON",  symbol:"BBAS3", category:"b3",       icon:"🏦", currentPrice:27.40,   change24h:-0.14, unit:"R$/ação" },
  { id:"b3-RENT3", name:"Localiza ON",         symbol:"RENT3", category:"b3",       icon:"🚗", currentPrice:35.60,   change24h:-0.55, unit:"R$/ação" },
  { id:"b3-MGLU3", name:"Magazine Luiza ON",   symbol:"MGLU3", category:"b3",       icon:"🛒", currentPrice:9.85,    change24h: 1.23, unit:"R$/ação" },
  { id:"b3-SUZB3", name:"Suzano ON",           symbol:"SUZB3", category:"b3",       icon:"🌲", currentPrice:48.30,   change24h:-0.41, unit:"R$/ação" },
  { id:"crypto-bitcoin",     name:"Bitcoin",   symbol:"BTC",   category:"crypto",   icon:"₿",  currentPrice:387818,  change24h: 1.5,  unit:"R$/un." },
  { id:"crypto-ethereum",    name:"Ethereum",  symbol:"ETH",   category:"crypto",   icon:"⟠",  currentPrice:14200,   change24h:-2.0,  unit:"R$/un." },
  { id:"crypto-solana",      name:"Solana",    symbol:"SOL",   category:"crypto",   icon:"◎",  currentPrice:780,     change24h: 3.2,  unit:"R$/un." },
  { id:"crypto-binancecoin", name:"BNB",       symbol:"BNB",   category:"crypto",   icon:"🟡", currentPrice:2980,    change24h: 0.8,  unit:"R$/un." },
  { id:"crypto-cardano",     name:"Cardano",   symbol:"ADA",   category:"crypto",   icon:"🔵", currentPrice:3.90,    change24h: 1.1,  unit:"R$/un." },
  { id:"crypto-ripple",      name:"XRP",       symbol:"XRP",   category:"crypto",   icon:"💧", currentPrice:14.20,   change24h:-0.5,  unit:"R$/un." },
  { id:"crypto-chainlink",   name:"Chainlink", symbol:"LINK",  category:"crypto",   icon:"🔗", currentPrice:90,      change24h: 2.3,  unit:"R$/un." },
  { id:"crypto-polkadot",    name:"Polkadot",  symbol:"DOT",   category:"crypto",   icon:"⬤",  currentPrice:30.50,   change24h:-1.2,  unit:"R$/un." },
  { id:"cur-USD", name:"Dólar Americano",   symbol:"USD", category:"currency", icon:"🇺🇸", currentPrice:5.85,    change24h: 0.32, unit:"R$/USD" },
  { id:"cur-EUR", name:"Euro",              symbol:"EUR", category:"currency", icon:"🇪🇺", currentPrice:6.35,    change24h:-0.15, unit:"R$/EUR" },
  { id:"cur-ARS", name:"Peso Argentino",    symbol:"ARS", category:"currency", icon:"🇦🇷", currentPrice:0.0048,  change24h: 0.10, unit:"R$/ARS" },
  { id:"cur-PYG", name:"Guarani Paraguaio", symbol:"PYG", category:"currency", icon:"🇵🇾", currentPrice:0.00076, change24h:-0.05, unit:"R$/PYG" },
  { id:"metal-XAU", name:"Ouro (grama)",  symbol:"XAU", category:"metal", icon:"🥇", currentPrice:856.9,  change24h: 0.45, unit:"R$/g" },
  { id:"metal-XAG", name:"Prata (grama)", symbol:"XAG", category:"metal", icon:"🥈", currentPrice:13.58,  change24h:-0.30, unit:"R$/g" },
];

// ── Custom Tooltip ─────────────────────────────────────────────────────────
const CustomTooltip = ({
  active, payload,
}: { active?: boolean; payload?: { value: number; payload: ChartPoint }[] }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-3 py-2 shadow-lg text-sm">
      <p className="text-muted-foreground text-xs mb-0.5">{payload[0].payload.label}</p>
      <p className="font-bold text-foreground">{fmtBRL(payload[0].value)}</p>
    </div>
  );
};

// ── Helpers de fetch ──────────────────────────────────────────────────────
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function safeFetchJson(url: string): Promise<any> {
  try {
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const text = await res.text();
    if (text.trimStart().startsWith("<")) return null;
    return JSON.parse(text);
  } catch { return null; }
}

async function fetchHistoryFromDB(type: string, code: string, days: number): Promise<ChartPoint[] | null> {
  const json = await safeFetchJson(`/api.php?action=history&type=${type}&code=${code}&days=${days}`);
  if (!json?.points || json.points.length < 3) return null;
  return json.points.map((p: { date: string; price: number }) => ({
    date: p.date, value: p.price, label: fmtDate(p.date),
  }));
}



// ── Página principal ───────────────────────────────────────────────────────
const HistoricoCotacoesPage = () => {
  const [period, setPeriod]               = useState<Period>("30d");
  const [category, setCategory]           = useState<CategoryKey>("b3");
  const [assets, setAssets]               = useState<AssetHistory[]>([]);
  const [selected, setSelected]           = useState<string | null>(null);
  const [loading, setLoading]             = useState(true);
  const [isFallback, setIsFallback]       = useState(false);
  const [lastUpdated, setLastUpdated]     = useState("");
  const [dbHistoryAvailable, setDbHistoryAvailable] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Preços atuais vêm do hook centralizado — zero requisições extras
  const { data: marketData, isFallback: marketFallback } = useMarketData();

  const loadData = useCallback(async (p: Period) => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setLoading(true);

    const days = PERIOD_DAYS[p];
    const result: AssetHistory[] = [];
    let hasDB = false;

    // ── Preços atuais vêm do useMarketData (sem fetch extra) ─────────────
    const b3Results  = marketData?.b3     ?? [];
    const cryptoList = marketData?.crypto ?? [];
    const ratesData  = (marketData?.rates ?? {}) as Record<string, { bid: string; pctChange: string } | undefined>;

    // ── 1. B3 ────────────────────────────────────────────────────────────
    const B3_TICKERS = ["PETR4","VALE3","ITUB4","BBDC4","ABEV3","WEGE3","BBAS3","RENT3","MGLU3","SUZB3"];
    const b3Map = new Map<string, { name: string; price: number; change: number }>();
    b3Results.forEach(s => {
      if (s.regularMarketPrice > 0)
        b3Map.set(s.symbol, { name: s.shortName || s.symbol, price: s.regularMarketPrice, change: s.regularMarketChangePercent ?? 0 });
    });
    for (const t of B3_TICKERS) {
      if (!b3Map.has(t)) {
        const fb = FALLBACK_ASSETS.find(a => a.symbol === t);
        if (fb) b3Map.set(t, { name: fb.name, price: fb.currentPrice, change: fb.change24h });
      }
    }
    await Promise.allSettled(
      Array.from(b3Map.entries()).map(async ([ticker, info]) => {
        const dbHistory = await fetchHistoryFromDB("b3", ticker, days);
        if (dbHistory) hasDB = true;
        result.push({
          id: `b3-${ticker}`, name: info.name, symbol: ticker,
          category: "b3", icon: B3_ICONS[ticker] ?? "📊",
          currentPrice: info.price, change24h: info.change,
          unit: "R$/ação",
          dataSource: dbHistory ? "db" : "simulated",
          data: dbHistory ?? buildSimulated(info.price, 0.012, days),
        });
      })
    );

    // ── 2. Cripto — sequencial com delay (evita rate limit CoinGecko) ────
    const cryptoIds = ["bitcoin","ethereum","solana","binancecoin","cardano","ripple","chainlink","polkadot"];
    const cryptoPrices = new Map<string, { name: string; price: number; change: number }>();
    cryptoList.forEach(c => {
      if (c.current_price > 0)
        cryptoPrices.set(c.id, { name: c.name, price: c.current_price, change: c.price_change_percentage_24h ?? 0 });
    });
    for (const cid of cryptoIds) {
      if (!cryptoPrices.has(cid)) {
        const fb = FALLBACK_ASSETS.find(a => a.id === `crypto-${cid}`);
        if (fb) cryptoPrices.set(cid, { name: fb.name, price: fb.currentPrice, change: fb.change24h });
      }
    }

    // Cripto: somente BD local (acumulado pelo cron + bootstrap)
    await Promise.allSettled(
      Array.from(cryptoPrices.entries()).map(async ([coinId, info]) => {
        const sym = CRYPTO_SYMBOL_MAP[coinId] ?? coinId.toUpperCase().slice(0, 4);
        const dbHistory = await fetchHistoryFromDB("crypto", sym, days);
        if (dbHistory) hasDB = true;
        result.push({
          id: `crypto-${coinId}`, name: info.name, symbol: sym,
          category: "crypto", icon: CRYPTO_ICONS[coinId] ?? "🪙",
          currentPrice: info.price, change24h: info.change,
          unit: "R$/un.",
          dataSource: dbHistory ? "db" : "simulated",
          data: dbHistory ?? [],
        });
      })
    );

    // ── 3. Câmbio ─────────────────────────────────────────────────────────
    const currencyDefs = [
      { key:"USDBRL", pair:"USD-BRL", id:"cur-USD", name:"Dólar Americano",   symbol:"USD", icon:"🇺🇸" },
      { key:"EURBRL", pair:"EUR-BRL", id:"cur-EUR", name:"Euro",              symbol:"EUR", icon:"🇪🇺" },
      { key:"ARSBRL", pair:"ARS-BRL", id:"cur-ARS", name:"Peso Argentino",    symbol:"ARS", icon:"🇦🇷" },
      { key:"PYGBRL", pair:"PYG-BRL", id:"cur-PYG", name:"Guarani Paraguaio", symbol:"PYG", icon:"🇵🇾" },
    ];
    await Promise.allSettled(
      currencyDefs.map(async ({ key, id, name, symbol, icon }) => {
        const r = ratesData?.[key];
        const fb = FALLBACK_ASSETS.find(a => a.id === id);
        const currentPrice = r ? parseFloat(r.bid) : (fb?.currentPrice ?? 0);
        const change24h    = r ? parseFloat(r.pctChange || "0") : (fb?.change24h ?? 0);
        if (currentPrice <= 0) return;
        // Somente BD — o cron salva histórico de câmbio via fawazahmed a cada 5 min
        const dbHistory = await fetchHistoryFromDB("currency", symbol, days);
        if (dbHistory) hasDB = true;
        result.push({
          id, name, symbol, icon,
          category: "currency",
          currentPrice, change24h,
          unit: `R$/${symbol}`,
          dataSource: dbHistory ? "db" : "simulated",
          data: dbHistory ?? [], // sem histórico = array vazio
        });
      })
    );

    // ── 4. Metais ─────────────────────────────────────────────────────────
    const metalDefs = [
      { key:"XAUBRL", id:"metal-XAU", name:"Ouro (grama)",  symbol:"XAU", icon:"🥇" },
      { key:"XAGBRL", id:"metal-XAG", name:"Prata (grama)", symbol:"XAG", icon:"🥈" },
    ];
    await Promise.allSettled(
      metalDefs.map(async ({ key, id, name, symbol, icon }) => {
        const r = ratesData?.[key];
        const fb = FALLBACK_ASSETS.find(a => a.id === id);
        // Aplica pureza: ouro 18k (×0.75) e prata 925 (×0.925) — igual ao PreciousMetalsWidget
        const purity = symbol === "XAU" ? 0.75 : 0.925;
        const currentPrice = r ? (parseFloat(r.bid) / TROY) * purity : (fb?.currentPrice ?? 0);
        const change24h    = r ? parseFloat(r.pctChange || "0") : (fb?.change24h ?? 0);
        if (currentPrice <= 0) return;
        // Somente BD — o cron salva histórico de metais via fawazahmed a cada 5 min
        const dbHistory = await fetchHistoryFromDB("metal", symbol, days);
        if (dbHistory) hasDB = true;
        result.push({
          id, name, symbol, icon,
          category: "metal",
          currentPrice, change24h,
          unit: "R$/g",
          dataSource: dbHistory ? "db" : "simulated",
          data: dbHistory ?? [], // sem histórico = array vazio
        });
      })
    );

    // ── Aplica resultado ──────────────────────────────────────────────────
    const final = result.length > 0 ? result : FALLBACK_ASSETS.map(a => ({
      ...a, dataSource: "simulated" as const,
      data: buildSimulated(a.currentPrice, a.category === "crypto" ? 0.04 : a.category === "b3" ? 0.012 : a.category === "metal" ? 0.008 : 0.004, days),
    }));

    setIsFallback(result.length === 0);
    setDbHistoryAvailable(hasDB);
    setAssets(final);
    setSelected(prev => {
      const stillExists = final.find(a => a.id === prev);
      if (stillExists) return prev;
      const first = final.find(a => a.category === category);
      return first?.id ?? final[0]?.id ?? null;
    });
    setLastUpdated(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    loadData(period);
    return () => abortRef.current?.abort();
  }, [period, loadData]);

  const filtered      = assets.filter(a => a.category === category);
  const selectedAsset = assets.find(a => a.id === selected);
  // Se DB tiver 1A de cripto, desbloqueia o período
  // Períodos disponíveis por categoria:
  // - Cripto/Câmbio/Metais: todos os períodos (APIs suportam bootstrap de 1 ano)
  //   Mas mostra aviso "sem dados" no gráfico se o BD ainda não foi populado
  // - B3: dinâmico baseado em pontos reais (Yahoo Finance não confiável, só cron)
  const availablePeriods = (() => {
    if (category === "b3") {
      // B3: mostra apenas períodos com dados suficientes acumulados pelo cron
      const catAssets = assets.filter(a => a.category === "b3");
      const maxPoints = catAssets.length > 0 ? Math.max(...catAssets.map(a => a.data.length)) : 0;
      return ALL_PERIODS.filter(p => {
        if (p.key === "7d")  return true;            // sempre mostra (pode estar vazio)
        if (p.key === "30d") return maxPoints >= 14; // ≥14 pontos no BD (~dias úteis)
        if (p.key === "90d") return maxPoints >= 50; // ≥50 pontos
        if (p.key === "1y")  return maxPoints >= 200;// ≥200 pontos (~dias úteis em 1 ano)
        return false;
      });
    }
    // Cripto, Câmbio, Metais: todos os períodos disponíveis (APIs gratuitas suportam 1A)
    return ALL_PERIODS;
  })();

  const handleCategoryChange = (cat: CategoryKey) => {
    setCategory(cat);
    const periodsForCat = CATEGORY_PERIODS[cat];
    if (!periodsForCat.some(p => p.key === period)) {
      setPeriod(periodsForCat[1]?.key ?? periodsForCat[0].key);
    }
  };

  const chartChange = selectedAsset?.data.length
    ? ((selectedAsset.data[selectedAsset.data.length - 1].value - selectedAsset.data[0].value)
       / selectedAsset.data[0].value) * 100
    : 0;

  const dataSourceLabel = (ds: string) => {
    if (ds === "db")   return "✓ Histórico do banco de dados VicioCode";
    if (ds === "real") return "✓ Dados históricos reais (API externa)";
    return "~ Estimativa baseada no preço atual";
  };
  const dataSourceStyle = (ds: string) =>
    ds === "db" || ds === "real"
      ? "bg-emerald-500/15 text-emerald-400"
      : "bg-amber-500/15 text-amber-400";

  // Ordem igual à /cotacoes: B3 → Câmbio → Metais → Cripto
  const categories: { key: CategoryKey; label: string; icon: React.ReactNode }[] = [
    { key: "b3",       label: "B3",     icon: <TrendingUp className="h-4 w-4" /> },
    { key: "currency", label: "Câmbio", icon: <DollarSign className="h-4 w-4" /> },
    { key: "metal",    label: "Metais", icon: <Gem        className="h-4 w-4" /> },
    { key: "crypto",   label: "Cripto", icon: <Bitcoin    className="h-4 w-4" /> },
  ];

  return (
    <>
      <DynamicSEO />
      {/* Hero Banner — full-width, outside container */}
      <div className="relative w-full overflow-hidden" style={{height:"min(56vw, 360px)", minHeight:"200px"}}>
        <img
          fetchpriority="high"
          src={heroHistorico}
          alt="Histórico de Cotações — Bitcoin, Ouro, B3"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10 flex flex-col justify-between px-6 md:px-16 py-5 md:py-8">
          {/* Top nav */}
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/financas">
              <Button variant="ghost" size="sm" className="gap-1.5 text-white/80 hover:text-white hover:bg-white/10 font-medium h-8 px-3">
                <ArrowLeft className="h-3.5 w-3.5" />Finanças
              </Button>
            </Link>
            <Link to="/cotacoes">
              <Button
                variant="default"
                size="lg"
                className="gap-2 bg-invest hover:bg-invest/90 text-white font-bold shadow-xl shadow-invest/40 text-sm md:text-base px-5 md:px-6"
              >
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
                Ver Cotações
              </Button>
            </Link>
            <div className="ml-auto flex items-center gap-2">
              {lastUpdated && (
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-white/60">
                  <Clock className="h-3 w-3" />{lastUpdated}
                </span>
              )}
            </div>
          </div>
          {/* Título na parte inferior */}
          <div>
            <span className="text-invest font-bold text-xs uppercase tracking-widest mb-1 block">Finanças • Análise Histórica</span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              <span className="text-invest">Histórico</span> de Cotações
            </h1>
            <p className="text-white/70 text-sm mt-1 hidden sm:block">
              Evolução de preços — B3, Câmbio, Metais e Criptomoedas
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8 max-w-7xl">

        {/* Avisos */}
        {isFallback && !loading && (
          <div className="flex items-start gap-3 mb-4 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Usando dados de referência — servidor indisponível. Os dados serão atualizados automaticamente.</span>
          </div>
        )}
        {dbHistoryAvailable && !loading && (
          <div className="flex items-start gap-3 mb-4 p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-300">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Histórico carregado do banco de dados — dados acumulados automaticamente a cada atualização das cotações.</span>
          </div>
        )}
        {category === "b3" && !loading && (
          <div className="flex items-start gap-3 mb-4 p-3 rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm text-blue-300">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <span><strong>Em desenvolvimento:</strong> O histórico dos valores da B3 está sendo construído gradualmente. Os dados são acumulados automaticamente a cada atualização do servidor — quanto mais tempo passar, mais completo ficará o histórico.</span>
          </div>
        )}

        {/* Filtros categoria + período */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => handleCategoryChange(c.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                category === c.key
                  ? "bg-invest text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c.icon}{c.label}
              <span className={`text-xs font-normal ${category === c.key ? "text-white/70" : "text-muted-foreground/60"}`}>
                ({assets.filter(a => a.category === c.key).length})
              </span>
            </button>
          ))}
          <div className="ml-auto flex gap-1">
            {availablePeriods.map(p => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  period === p.key
                    ? "bg-invest text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Layout principal */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 animate-pulse bg-muted rounded-2xl h-96" />
            <div className="space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-muted rounded-xl h-16" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Gráfico principal */}
            <div className="lg:col-span-2">
              {selectedAsset ? (
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{selectedAsset.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display text-xl font-bold">{selectedAsset.symbol}</span>
                          <span className={`flex items-center gap-0.5 text-sm font-bold ${pctColor(selectedAsset.change24h)}`}>
                            {pctArrow(selectedAsset.change24h)}
                            {selectedAsset.change24h > 0 ? "+" : ""}{selectedAsset.change24h.toFixed(2)}% (24h)
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">{selectedAsset.name}</div>
                        <span className={`inline-flex items-center gap-1 mt-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${dataSourceStyle(selectedAsset.dataSource)}`}>
                          {dataSourceLabel(selectedAsset.dataSource)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{fmtBRL(selectedAsset.currentPrice)}</div>
                      <div className="text-xs text-muted-foreground mb-1">{selectedAsset.unit}</div>
                      <div className={`text-sm font-bold ${pctColor(chartChange)}`}>
                        {chartChange > 0 ? "+" : ""}{chartChange.toFixed(2)}% no período
                      </div>
                    </div>
                  </div>

                  {selectedAsset.data.length < 3 ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-3 text-center px-4">
                      <Info className="h-10 w-10 text-muted-foreground/40" />
                      <div>
                        <p className="text-muted-foreground font-medium text-sm">
                          {selectedAsset.category === "b3"
                            ? "Histórico B3 ainda sendo acumulado"
                            : "Execute o bootstrap para popular o histórico"}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1 max-w-sm">
                          {selectedAsset.category === "b3"
                            ? "O histórico da B3 é acumulado diariamente pelo cron job. Não há API gratuita confiável para histórico retroativo de ações brasileiras. Este período estará disponível após acumulação suficiente."
                            : "Execute uma vez: viciocode.com/api.php?action=history_bootstrap&secret=VC_CRON_2026 — popula 365 dias de cripto, câmbio e metais no banco de dados."}
                        </p>
                      </div>
                    </div>
                  ) : (
                  <ResponsiveContainer key={`main-${selectedAsset.id}-${period}`} width="100%" height={280}>
                    <AreaChart data={selectedAsset.data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id={`areaGrad-${selectedAsset.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor={CAT_STROKE[selectedAsset.category]} stopOpacity={0.25} />
                          <stop offset="95%" stopColor={CAT_STROKE[selectedAsset.category]} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis
                        dataKey="label" tick={{ fontSize: 11, fill: "#6b7280" }}
                        tickLine={false} axisLine={false}
                        interval={Math.max(1, Math.floor(selectedAsset.data.length / 7))}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: "#6b7280" }}
                        tickLine={false} axisLine={false} width={72}
                        tickFormatter={v => {
                          if (v >= 100000) return `${(v / 1000).toFixed(0)}k`;
                          if (v >= 1000)   return `${(v / 1000).toFixed(1)}k`;
                          if (v < 0.01)    return v.toFixed(5);
                          if (v < 1)       return v.toFixed(3);
                          return v.toFixed(2);
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone" dataKey="value"
                        stroke={CAT_STROKE[selectedAsset.category]} strokeWidth={2}
                        fill={`url(#areaGrad-${selectedAsset.id})`} dot={false}
                        activeDot={{ r: 4, fill: CAT_STROKE[selectedAsset.category], strokeWidth: 0 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  )}

                  {selectedAsset.data.length > 1 && (() => {
                    const vals    = selectedAsset.data.map(d => d.value);
                    const minVal  = Math.min(...vals);
                    const maxVal  = Math.max(...vals);
                    const minDate = selectedAsset.data[vals.indexOf(minVal)]?.label;
                    const maxDate = selectedAsset.data[vals.indexOf(maxVal)]?.label;
                    return (
                      <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-border">
                        <div className="text-center">
                          <div className="text-[10px] text-muted-foreground mb-0.5">Mínima</div>
                          <div className="text-sm font-bold text-red-400">{fmtBRL(minVal)}</div>
                          <div className="text-[10px] text-muted-foreground">{minDate}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[10px] text-muted-foreground mb-0.5">Atual</div>
                          <div className="text-sm font-bold">{fmtBRL(selectedAsset.currentPrice)}</div>
                          <div className="text-[10px] text-muted-foreground">agora</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[10px] text-muted-foreground mb-0.5">Máxima</div>
                          <div className="text-sm font-bold text-emerald-400">{fmtBRL(maxVal)}</div>
                          <div className="text-[10px] text-muted-foreground">{maxDate}</div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-center h-80 text-muted-foreground">
                  Selecione um ativo ao lado para ver o gráfico
                </div>
              )}
            </div>

            {/* Lista de ativos */}
            <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">Nenhum ativo nesta categoria</div>
              ) : filtered.map(asset => (
                <button
                  key={asset.id}
                  onClick={() => setSelected(asset.id)}
                  className={`w-full text-left rounded-xl border p-3.5 transition-all hover:scale-[1.01] ${
                    selected === asset.id
                      ? `${CAT_BORDER[asset.category]} ring-1 ring-invest/40`
                      : "border-border bg-card hover:border-invest/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{asset.icon}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm">{asset.symbol}</span>
                          {asset.dataSource !== "simulated" && (
                            <span className={`text-[9px] font-bold ${asset.dataSource === "db" ? "text-blue-400" : "text-emerald-400"}`}>
                              {asset.dataSource === "db" ? "BD" : "REAL"}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground truncate max-w-[110px]">{asset.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm">{fmtBRL(asset.currentPrice)}</div>
                      <div className={`flex items-center justify-end gap-0.5 text-xs font-bold ${pctColor(asset.change24h)}`}>
                        {pctArrow(asset.change24h)}
                        {asset.change24h > 0 ? "+" : ""}{asset.change24h.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  {selected === asset.id && asset.data.length > 2 && (
                    <div className="mt-2 h-8 opacity-70">
                      <ResponsiveContainer key={`spark-${asset.id}`} width="100%" height={32}>
                        <LineChart data={asset.data.slice(-Math.min(30, asset.data.length))}>
                          <Line type="monotone" dataKey="value" stroke={CAT_STROKE[asset.category]} strokeWidth={1.5} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rodapé */}
        <div className="mt-6 bg-card border border-border rounded-2xl p-5">
          <h2 className="font-display text-base font-bold mb-3">Sobre os Dados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div>
              <strong className="text-foreground">📊 B3 — 10 ações</strong>
              <p className="text-xs text-muted-foreground mt-0.5">PETR4, VALE3, ITUB4, BBDC4, ABEV3, WEGE3, BBAS3, RENT3, MGLU3, SUZB3. Histórico via BD (acumulado) ou estimativa.</p>
            </div>
            <div>
              <strong className="text-foreground">₿ Cripto — 8 moedas</strong>
              <p className="text-xs text-muted-foreground mt-0.5">BTC, ETH, SOL, BNB, ADA, XRP, LINK, DOT. Histórico via BD → CoinGecko (até 90D, grátis) → estimativa. Busca sequencial para evitar rate limit.</p>
            </div>
            <div>
              <strong className="text-foreground">💱 Câmbio — 4 moedas</strong>
              <p className="text-xs text-muted-foreground mt-0.5">USD, EUR, ARS, PYG. Histórico via BD → AwesomeAPI (gratuito) → estimativa.</p>
            </div>
            <div>
              <strong className="text-foreground">🥇 Metais — 2 ativos</strong>
              <p className="text-xs text-muted-foreground mt-0.5">Ouro e prata por grama em BRL. Histórico via BD → estimativa com volatilidade real de metais.</p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-3 pt-3 border-t border-border">
            💾 O histórico é acumulado automaticamente no banco de dados a cada atualização. Dados para fins informativos — não constituem recomendação de investimento.
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoricoCotacoesPage;
