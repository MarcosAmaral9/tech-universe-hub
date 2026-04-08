import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, TrendingUp, TrendingDown, DollarSign,
  Bitcoin, Gem, BarChart3, RefreshCw, AlertTriangle, Clock, Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicSEO from "@/components/DynamicSEO";
import {
  Area, AreaChart, CartesianGrid, Line, LineChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

// ── Types ──────────────────────────────────────────────────────────────────
type Period      = "5d" | "7d" | "30d" | "90d" | "1y";
type CategoryKey = "b3" | "crypto" | "currency" | "metal";

// Períodos disponíveis gratuitamente para cada categoria
const CATEGORY_PERIODS: Record<CategoryKey, { key: Period; label: string }[]> = {
  b3:       [{ key: "5d", label: "5D" }, { key: "30d", label: "1M" }, { key: "90d", label: "3M" }],
  crypto:   [{ key: "7d", label: "7D" }, { key: "30d", label: "30D" }, { key: "90d", label: "90D" }, { key: "1y", label: "1A" }],
  currency: [{ key: "7d", label: "7D" }, { key: "30d", label: "30D" }, { key: "90d", label: "90D" }, { key: "1y", label: "1A" }],
  metal:    [{ key: "7d", label: "7D" }, { key: "30d", label: "30D" }, { key: "90d", label: "90D" }, { key: "1y", label: "1A" }],
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
const CRYPTO_GCK_IDS: Record<string, string> = {
  bitcoin:"bitcoin", ethereum:"ethereum", solana:"solana",
  binancecoin:"binancecoin", cardano:"cardano", ripple:"ripple",
  chainlink:"chainlink", polkadot:"polkadot",
};

// ── Simulação (fallback) ──────────────────────────────────────────────────
const buildSimulated = (
  currentPrice: number,
  volatility: number,
  days: number,
): ChartPoint[] => {
  const pts: number[] = [currentPrice];
  for (let i = 1; i <= days; i++) {
    const prev = pts[pts.length - 1];
    const rnd = (Math.sin(i * 127.1 + currentPrice) + 1) / 2;
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

// ── Fallback de ativos (preços de referência) ──────────────────────────────
const FALLBACK_ASSETS: Omit<AssetHistory, "data" | "dataSource">[] = [
  // 10 B3
  { id:"b3-PETR4", name:"Petrobras PN",      symbol:"PETR4", category:"b3", icon:"🛢️", currentPrice:37.50, change24h: 1.2,  unit:"R$/ação" },
  { id:"b3-VALE3", name:"Vale ON",            symbol:"VALE3", category:"b3", icon:"⛏️", currentPrice:58.20, change24h:-0.8,  unit:"R$/ação" },
  { id:"b3-ITUB4", name:"Itaú Unibanco PN",  symbol:"ITUB4", category:"b3", icon:"🏦", currentPrice:35.80, change24h: 0.5,  unit:"R$/ação" },
  { id:"b3-BBDC4", name:"Bradesco PN",        symbol:"BBDC4", category:"b3", icon:"🏦", currentPrice:13.90, change24h:-1.1,  unit:"R$/ação" },
  { id:"b3-ABEV3", name:"Ambev ON",           symbol:"ABEV3", category:"b3", icon:"🍺", currentPrice:11.50, change24h: 0.3,  unit:"R$/ação" },
  { id:"b3-WEGE3", name:"WEG ON",             symbol:"WEGE3", category:"b3", icon:"⚙️", currentPrice:48.00, change24h: 2.1,  unit:"R$/ação" },
  { id:"b3-BBAS3", name:"Banco do Brasil ON", symbol:"BBAS3", category:"b3", icon:"🏦", currentPrice:27.40, change24h:-0.14, unit:"R$/ação" },
  { id:"b3-RENT3", name:"Localiza ON",        symbol:"RENT3", category:"b3", icon:"🚗", currentPrice:35.60, change24h:-0.55, unit:"R$/ação" },
  { id:"b3-MGLU3", name:"Magazine Luiza ON",  symbol:"MGLU3", category:"b3", icon:"🛒", currentPrice:9.85,  change24h: 1.23, unit:"R$/ação" },
  { id:"b3-SUZB3", name:"Suzano ON",          symbol:"SUZB3", category:"b3", icon:"🌲", currentPrice:48.30, change24h:-0.41, unit:"R$/ação" },
  // 8 Crypto
  { id:"crypto-bitcoin",     name:"Bitcoin",   symbol:"BTC",  category:"crypto", icon:"₿",  currentPrice:387818, change24h: 1.5,  unit:"R$/un." },
  { id:"crypto-ethereum",    name:"Ethereum",  symbol:"ETH",  category:"crypto", icon:"⟠",  currentPrice:14200,  change24h:-2.0,  unit:"R$/un." },
  { id:"crypto-solana",      name:"Solana",    symbol:"SOL",  category:"crypto", icon:"◎",  currentPrice:780,    change24h: 3.2,  unit:"R$/un." },
  { id:"crypto-binancecoin", name:"BNB",       symbol:"BNB",  category:"crypto", icon:"🟡", currentPrice:2980,   change24h: 0.8,  unit:"R$/un." },
  { id:"crypto-cardano",     name:"Cardano",   symbol:"ADA",  category:"crypto", icon:"🔵", currentPrice:3.90,   change24h: 1.1,  unit:"R$/un." },
  { id:"crypto-ripple",      name:"XRP",       symbol:"XRP",  category:"crypto", icon:"💧", currentPrice:14.20,  change24h:-0.5,  unit:"R$/un." },
  { id:"crypto-chainlink",   name:"Chainlink", symbol:"LINK", category:"crypto", icon:"🔗", currentPrice:90,     change24h: 2.3,  unit:"R$/un." },
  { id:"crypto-polkadot",    name:"Polkadot",  symbol:"DOT",  category:"crypto", icon:"⬤",  currentPrice:30.50,  change24h:-1.2,  unit:"R$/un." },
  // 4 Câmbio
  { id:"cur-USD", name:"Dólar Americano",   symbol:"USD", category:"currency", icon:"🇺🇸", currentPrice:5.85,    change24h: 0.32, unit:"R$/USD" },
  { id:"cur-EUR", name:"Euro",              symbol:"EUR", category:"currency", icon:"🇪🇺", currentPrice:6.35,    change24h:-0.15, unit:"R$/EUR" },
  { id:"cur-ARS", name:"Peso Argentino",    symbol:"ARS", category:"currency", icon:"🇦🇷", currentPrice:0.0048,  change24h: 0.10, unit:"R$/ARS" },
  { id:"cur-PYG", name:"Guarani Paraguaio", symbol:"PYG", category:"currency", icon:"🇵🇾", currentPrice:0.00076, change24h:-0.05, unit:"R$/PYG" },
  // 2 Metais
  { id:"metal-XAU", name:"Ouro (grama)",  symbol:"XAU", category:"metal", icon:"🥇", currentPrice:856.9, change24h: 0.45, unit:"R$/g" },
  { id:"metal-XAG", name:"Prata (grama)", symbol:"XAG", category:"metal", icon:"🥈", currentPrice:13.58, change24h:-0.30, unit:"R$/g" },
];

// ── Custom Tooltip ─────────────────────────────────────────────────────────
const CustomTooltip = ({
  active, payload,
}: {
  active?: boolean;
  payload?: { value: number; payload: ChartPoint }[];
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-3 py-2 shadow-lg text-sm">
      <p className="text-muted-foreground text-xs mb-0.5">{payload[0].payload.label}</p>
      <p className="font-bold text-foreground">{fmtBRL(payload[0].value)}</p>
    </div>
  );
};

// ── Busca histórico do banco via api.php ──────────────────────────────────
async function fetchHistoryFromDB(
  type: string, code: string, days: number
): Promise<ChartPoint[] | null> {
  try {
    const res = await fetch(`/api.php?action=history&type=${type}&code=${code}&days=${days}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.points || json.points.length < 2) return null;
    return json.points.map((p: { date: string; price: number }) => ({
      date: p.date,
      value: p.price,
      label: fmtDate(p.date),
    }));
  } catch {
    return null;
  }
}

// ── Busca histórico real de cripto via CoinGecko (fallback) ────────────────
async function fetchCryptoHistory(coinId: string, days: number): Promise<ChartPoint[] | null> {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=brl&days=${days}&interval=daily`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const json = await res.json();
    const prices: [number, number][] = json.prices ?? [];
    if (!prices.length) return null;
    return prices.map(([ts, price]) => {
      const iso = new Date(ts).toISOString().slice(0, 10);
      return { date: iso, value: parseFloat(price.toFixed(price >= 1 ? 2 : 6)), label: fmtDate(iso) };
    });
  } catch { return null; }
}

// ── Busca histórico de câmbio (fallback) ──────────────────────────────────
async function fetchCurrencyHistory(pair: string, days: number, currencyCode: string): Promise<ChartPoint[] | null> {
  try {
    const url = `https://economia.awesomeapi.com.br/json/daily/${pair}/${days}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const text = await res.text();
      if (!text.includes("QuotaExceeded")) {
        const json: { timestamp: string; bid: string }[] = JSON.parse(text);
        if (Array.isArray(json) && json.length > 0) {
          return [...json].reverse().map(({ timestamp, bid }) => {
            const iso = new Date(parseInt(timestamp) * 1000).toISOString().slice(0, 10);
            return { date: iso, value: parseFloat(parseFloat(bid).toFixed(4)), label: fmtDate(iso) };
          });
        }
      }
    }
  } catch { /* fallback below */ }

  try {
    const code = currencyCode.toLowerCase();
    const pts: ChartPoint[] = [];
    const now = new Date();
    const step = days <= 7 ? 1 : days <= 30 ? 3 : days <= 90 ? 7 : 14;
    const datesToFetch: string[] = [];
    for (let i = days; i >= 0; i -= step) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      datesToFetch.push(d.toISOString().slice(0, 10));
    }
    const todayStr = now.toISOString().slice(0, 10);
    if (!datesToFetch.includes(todayStr)) datesToFetch.push(todayStr);

    const results = await Promise.allSettled(
      datesToFetch.map(async (dateStr) => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateStr}/v1/currencies/${code}.min.json`;
        const r = await fetch(url, { signal: AbortSignal.timeout(6000) });
        if (!r.ok) return null;
        const j = await r.json();
        const brl = j[code]?.brl;
        if (typeof brl !== "number" || brl <= 0) return null;
        return { date: dateStr, value: parseFloat(brl.toFixed(4)), label: fmtDate(dateStr) };
      })
    );
    results.forEach(r => { if (r.status === "fulfilled" && r.value) pts.push(r.value); });
    if (pts.length >= 3) return pts;
  } catch { /* give up */ }
  return null;
}

// ── Busca histórico de metais (fallback) ──────────────────────────────────
async function fetchMetalHistory(metalCode: string, days: number): Promise<ChartPoint[] | null> {
  try {
    const pts: ChartPoint[] = [];
    const now = new Date();
    const step = days <= 7 ? 1 : days <= 30 ? 3 : days <= 90 ? 7 : 14;
    const datesToFetch: string[] = [];
    for (let i = days; i >= 0; i -= step) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      datesToFetch.push(d.toISOString().slice(0, 10));
    }
    const todayStr = now.toISOString().slice(0, 10);
    if (!datesToFetch.includes(todayStr)) datesToFetch.push(todayStr);

    const results = await Promise.allSettled(
      datesToFetch.map(async (dateStr) => {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateStr}/v1/currencies/${metalCode}.min.json`;
        const r = await fetch(url, { signal: AbortSignal.timeout(6000) });
        if (!r.ok) return null;
        const j = await r.json();
        const brl = j[metalCode]?.brl;
        if (typeof brl !== "number" || brl <= 0) return null;
        const perGram = brl / TROY;
        return { date: dateStr, value: parseFloat(perGram.toFixed(2)), label: fmtDate(dateStr) };
      })
    );
    results.forEach(r => { if (r.status === "fulfilled" && r.value) pts.push(r.value); });
    if (pts.length >= 3) return pts;
  } catch { /* give up */ }
  return null;
}

// ── Busca histórico B3 via edge function (fallback) ──────────────────────
const RANGE_MAP: Record<Period, { range: string; interval: string }> = {
  "5d":  { range: "5d",  interval: "1d" },
  "7d":  { range: "5d",  interval: "1d" },
  "30d": { range: "1mo", interval: "1d" },
  "90d": { range: "3mo", interval: "1d" },
  "1y":  { range: "3mo", interval: "1d" },
};

async function fetchB3History(
  ticker: string, period: Period,
): Promise<{ history: ChartPoint[]; currentPrice: number; change24h: number; shortName: string } | null> {
  try {
    const { range, interval } = RANGE_MAP[period];
    const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
    const url = `https://${projectId}.supabase.co/functions/v1/b3-history?ticker=${ticker}&range=${range}&interval=${interval}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.history?.length) return null;
    const pts: ChartPoint[] = data.history.map((h: { date: number; close: number }) => {
      const iso = new Date(h.date * 1000).toISOString().slice(0, 10);
      return { date: iso, value: h.close, label: fmtDate(iso) };
    });
    return { history: pts, currentPrice: data.currentPrice, change24h: data.change24h ?? 0, shortName: data.shortName ?? ticker };
  } catch { return null; }
}

// ── Helper: fetch JSON seguro ─────────────────────────────────────────────
const safeFetchJson = async (url: string): Promise<any | null> => {
  try {
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const text = await res.text();
    if (text.trimStart().startsWith("<?") || text.trimStart().startsWith("<!") || text.trimStart().startsWith("<html")) return null;
    return JSON.parse(text);
  } catch { return null; }
};

// ── Página principal ───────────────────────────────────────────────────────
const HistoricoCotacoesPage = () => {
  const [period, setPeriod]           = useState<Period>("30d");
  const [category, setCategory]       = useState<CategoryKey>("crypto");
  const [assets, setAssets]           = useState<AssetHistory[]>([]);
  const [selected, setSelected]       = useState<string | null>(null);
  const [loading, setLoading]         = useState(true);
  const [isFallback, setIsFallback]   = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [dbHistoryAvailable, setDbHistoryAvailable] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const loadData = useCallback(async (p: Period) => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    const days = PERIOD_DAYS[p];
    const result: AssetHistory[] = [];

    // ── Obter preços atuais dos widgets (api.php) — sem requisições extras ──
    let b3Data: any = null;
    let ratesData: any = null;
    let cryptoData: any = null;

    try {
      [b3Data, ratesData, cryptoData] = await Promise.all([
        safeFetchJson("/api.php?action=b3"),
        safeFetchJson("/api.php?action=rates"),
        safeFetchJson("/api.php?action=crypto"),
      ]);
    } catch { /* fallback abaixo */ }

    // ── 1. B3 — 10 ações ──────────────────────────────────────────────────
    const B3_TICKERS = ["PETR4", "VALE3", "ITUB4", "BBDC4", "ABEV3", "WEGE3", "BBAS3", "RENT3", "MGLU3", "SUZB3"];
    const b3Stocks: Map<string, { name: string; price: number; change: number }> = new Map();

    if (b3Data?.results && Array.isArray(b3Data.results)) {
      b3Data.results.forEach((s: any) => {
        if (s.regularMarketPrice > 0) {
          b3Stocks.set(s.symbol, {
            name: s.shortName || s.symbol,
            price: s.regularMarketPrice,
            change: s.regularMarketChangePercent ?? 0,
          });
        }
      });
    }
    // Preencher tickers ausentes com fallback
    for (const ticker of B3_TICKERS) {
      if (!b3Stocks.has(ticker)) {
        const fb = FALLBACK_ASSETS.find(a => a.symbol === ticker);
        if (fb) b3Stocks.set(ticker, { name: fb.name, price: fb.currentPrice, change: fb.change24h });
      }
    }

    // Buscar histórico: primeiro DB, depois edge function como fallback
    await Promise.allSettled(
      Array.from(b3Stocks.entries()).map(async ([ticker, info]) => {
        // Tenta DB primeiro (sem gastar requisições de API)
        const dbHistory = await fetchHistoryFromDB("b3", ticker, days);
        if (dbHistory && dbHistory.length >= 2) {
          setDbHistoryAvailable(true);
          result.push({
            id: `b3-${ticker}`, name: info.name, symbol: ticker,
            category: "b3", icon: B3_ICONS[ticker] ?? "📊",
            currentPrice: info.price, change24h: info.change,
            unit: "R$/ação", dataSource: "db",
            data: dbHistory,
          });
          return;
        }
        // Fallback: edge function (apenas se DB não tiver dados)
        const edgeData = await fetchB3History(ticker, p);
        if (edgeData && edgeData.history.length > 0) {
          result.push({
            id: `b3-${ticker}`, name: edgeData.shortName || info.name, symbol: ticker,
            category: "b3", icon: B3_ICONS[ticker] ?? "📊",
            currentPrice: edgeData.currentPrice || info.price, change24h: edgeData.change24h || info.change,
            unit: "R$/ação", dataSource: "real",
            data: edgeData.history,
          });
          return;
        }
        // Último fallback: simulação
        result.push({
          id: `b3-${ticker}`, name: info.name, symbol: ticker,
          category: "b3", icon: B3_ICONS[ticker] ?? "📊",
          currentPrice: info.price, change24h: info.change,
          unit: "R$/ação", dataSource: "simulated",
          data: buildSimulated(info.price, 0.012, days),
        });
      })
    );

    // ── 2. Cripto — 8 moedas ──────────────────────────────────────────────
    const cryptoPrices: Map<string, { name: string; price: number; change: number }> = new Map();
    if (cryptoData) {
      const coins = cryptoData.coins ?? cryptoData.data ?? cryptoData;
      if (Array.isArray(coins)) {
        coins.forEach((c: any) => {
          if (c.current_price > 0) {
            cryptoPrices.set(c.id, { name: c.name, price: c.current_price, change: c.price_change_percentage_24h ?? 0 });
          }
        });
      }
    }
    // Preencher com fallback
    const cryptoFallbackIds = ["bitcoin","ethereum","solana","binancecoin","cardano","ripple","chainlink","polkadot"];
    for (const cid of cryptoFallbackIds) {
      if (!cryptoPrices.has(cid)) {
        const fb = FALLBACK_ASSETS.find(a => a.id === `crypto-${cid}`);
        if (fb) cryptoPrices.set(cid, { name: fb.name, price: fb.currentPrice, change: fb.change24h });
      }
    }

    await Promise.allSettled(
      Array.from(cryptoPrices.entries()).map(async ([coinId, info]) => {
        const sym = CRYPTO_SYMBOL_MAP[coinId] ?? coinId.toUpperCase().slice(0, 4);
        // Tenta DB primeiro
        const dbHistory = await fetchHistoryFromDB("crypto", sym, days);
        if (dbHistory && dbHistory.length >= 2) {
          setDbHistoryAvailable(true);
          result.push({
            id: `crypto-${coinId}`, name: info.name, symbol: sym,
            category: "crypto", icon: CRYPTO_ICONS[coinId] ?? "🪙",
            currentPrice: info.price, change24h: info.change,
            unit: "R$/un.", dataSource: "db",
            data: dbHistory,
          });
          return;
        }
        // Fallback: CoinGecko API
        const gckId = CRYPTO_GCK_IDS[coinId] ?? coinId;
        const history = await fetchCryptoHistory(gckId, days);
        result.push({
          id: `crypto-${coinId}`, name: info.name, symbol: sym,
          category: "crypto", icon: CRYPTO_ICONS[coinId] ?? "🪙",
          currentPrice: info.price, change24h: info.change,
          unit: "R$/un.", dataSource: history ? "real" : "simulated",
          data: history ?? buildSimulated(info.price, 0.04, days),
        });
      })
    );

    // ── 3. Câmbio — 4 moedas ──────────────────────────────────────────────
    const currencyPairs = [
      { key: "USDBRL", pair: "USD-BRL", id: "cur-USD", name: "Dólar Americano",   symbol: "USD", icon: "🇺🇸", code: "usd", fbPrice: 5.85, fbChange: 0.32 },
      { key: "EURBRL", pair: "EUR-BRL", id: "cur-EUR", name: "Euro",              symbol: "EUR", icon: "🇪🇺", code: "eur", fbPrice: 6.35, fbChange: -0.15 },
      { key: "ARSBRL", pair: "ARS-BRL", id: "cur-ARS", name: "Peso Argentino",    symbol: "ARS", icon: "🇦🇷", code: "ars", fbPrice: 0.0048, fbChange: 0.10 },
      { key: "PYGBRL", pair: "PYG-BRL", id: "cur-PYG", name: "Guarani Paraguaio", symbol: "PYG", icon: "🇵🇾", code: "pyg", fbPrice: 0.00076, fbChange: -0.05 },
    ];

    await Promise.allSettled(
      currencyPairs.map(async ({ key, pair, id, name, symbol, icon, code, fbPrice, fbChange }) => {
        const r = ratesData?.[key];
        const currentPrice = r ? parseFloat(r.bid) : fbPrice;
        const change24h = r ? parseFloat(r.pctChange || "0") : fbChange;
        if (currentPrice <= 0) return;

        // Tenta DB primeiro
        const dbHistory = await fetchHistoryFromDB("currency", symbol, days);
        if (dbHistory && dbHistory.length >= 2) {
          setDbHistoryAvailable(true);
          result.push({ id, name, symbol, icon, category: "currency", currentPrice, change24h, unit: `R$/${symbol}`, dataSource: "db", data: dbHistory });
          return;
        }
        // Fallback: AwesomeAPI/fawazahmed
        const history = await fetchCurrencyHistory(pair, days, code);
        result.push({
          id, name, symbol, icon,
          category: "currency", currentPrice, change24h,
          unit: `R$/${symbol}`,
          dataSource: history ? "real" : "simulated",
          data: history ?? buildSimulated(currentPrice, 0.004, days),
        });
      })
    );

    // ── 4. Metais — 2 metais ──────────────────────────────────────────────
    const metals = [
      { key: "XAUBRL", id: "metal-XAU", name: "Ouro (grama)",  symbol: "XAU", icon: "🥇", unit: "R$/g", code: "xau", fbPrice: 856.9, fbChange: 0.45 },
      { key: "XAGBRL", id: "metal-XAG", name: "Prata (grama)", symbol: "XAG", icon: "🥈", unit: "R$/g", code: "xag", fbPrice: 13.58, fbChange: -0.30 },
    ];

    await Promise.allSettled(
      metals.map(async ({ key, id, name, symbol, icon, unit, code, fbPrice, fbChange }) => {
        const r = ratesData?.[key];
        const currentPrice = r ? parseFloat(r.bid) / TROY : fbPrice;
        const change24h = r ? parseFloat(r.pctChange || "0") : fbChange;
        if (currentPrice <= 0) return;

        // Tenta DB primeiro
        const dbHistory = await fetchHistoryFromDB("metal", symbol, days);
        if (dbHistory && dbHistory.length >= 2) {
          setDbHistoryAvailable(true);
          result.push({ id, name, symbol, icon, unit, category: "metal", currentPrice, change24h, dataSource: "db", data: dbHistory });
          return;
        }
        // Fallback: fawazahmed
        const history = await fetchMetalHistory(code, days);
        result.push({
          id, name, symbol, icon, unit,
          category: "metal", currentPrice, change24h,
          dataSource: history ? "real" : "simulated",
          data: history ?? buildSimulated(currentPrice, 0.008, days),
        });
      })
    );

    // ── Resultado final ──────────────────────────────────────────────────
    const hasRealData = result.some(a => a.dataSource === "real" || a.dataSource === "db");
    setIsFallback(!hasRealData && !ratesData);

    result.sort((a, b) => {
      const order: Record<CategoryKey, number> = { crypto: 0, currency: 1, b3: 2, metal: 3 };
      return order[a.category] - order[b.category];
    });
    setAssets(result);
    if (result.length > 0) {
      const catAssets = result.filter(a => a.category === category);
      setSelected(prev => {
        if (prev && catAssets.find(a => a.id === prev)) return prev;
        return catAssets[0]?.id ?? result[0].id;
      });
    }
    setLastUpdated(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData(period);
    return () => abortRef.current?.abort();
  }, [period, loadData]);

  // Auto-select first asset when category changes
  useEffect(() => {
    const catAssets = assets.filter(a => a.category === category);
    if (catAssets.length > 0 && !catAssets.find(a => a.id === selected)) {
      setSelected(catAssets[0].id);
    }
  }, [category, assets, selected]);

  const filtered      = assets.filter(a => a.category === category);
  const selectedAsset = assets.find(a => a.id === selected);

  const availablePeriods = CATEGORY_PERIODS[category];
  const categories: { key: CategoryKey; label: string; icon: React.ReactNode }[] = [
    { key: "crypto",   label: "Cripto", icon: <Bitcoin    className="h-4 w-4" /> },
    { key: "currency", label: "Câmbio", icon: <DollarSign className="h-4 w-4" /> },
    { key: "b3",       label: "B3",     icon: <TrendingUp className="h-4 w-4" /> },
    { key: "metal",    label: "Metais", icon: <Gem        className="h-4 w-4" /> },
  ];

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
    if (ds === "db") return "✓ Histórico do banco de dados";
    if (ds === "real") return "✓ Dados históricos reais";
    return "~ Simulação baseada no preço atual";
  };
  const dataSourceStyle = (ds: string) =>
    ds === "db" || ds === "real"
      ? "bg-emerald-500/15 text-emerald-400"
      : "bg-amber-500/15 text-amber-400";

  return (
    <>
      <DynamicSEO />
      <div className="container py-8 max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link to="/financas">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />Finanças
              </Button>
            </Link>
            <Link to="/cotacoes">
              <Button variant="ghost" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" />Cotações Atuais
              </Button>
            </Link>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold">
                <span className="text-invest">Histórico</span> de Cotações
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Evolução de preços — B3, Câmbio, Metais e Criptomoedas
              </p>
            </div>
            <div className="flex items-center gap-2">
              {lastUpdated && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />{lastUpdated}
                </span>
              )}
              <Button
                variant="outline" size="sm"
                onClick={() => loadData(period)}
                disabled={loading}
                className="gap-1.5"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Carregando..." : "Atualizar"}
              </Button>
            </div>
          </div>
        </div>

        {/* Aviso fallback completo */}
        {isFallback && !loading && (
          <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Usando dados de referência — servidor indisponível. Clique em <strong>Atualizar</strong> para tentar novamente.</span>
          </div>
        )}

        {/* Info sobre banco de dados */}
        {dbHistoryAvailable && !loading && (
          <div className="flex items-start gap-3 mb-5 p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-300">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Histórico carregado do banco de dados — sem consumo de APIs externas. Os dados são acumulados automaticamente a cada atualização das cotações.</span>
          </div>
        )}

        {/* Filtros de categoria + períodos */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => handleCategoryChange(c.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === c.key
                  ? "bg-invest text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c.icon}{c.label}
              <span className={`text-xs ${category === c.key ? "text-white/70" : "text-muted-foreground/60"}`}>
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
            <div className="lg:col-span-2 animate-pulse bg-muted rounded-2xl h-80" />
            <div className="space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-muted rounded-xl h-16" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* ── Gráfico principal ── */}
            <div className="lg:col-span-2">
              {selectedAsset ? (
                <div className="bg-card border border-border rounded-2xl p-5">
                  {/* Cabeçalho */}
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

                  {/* Gráfico */}
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={selectedAsset.data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
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
                        fill="url(#areaGrad)" dot={false}
                        activeDot={{ r: 4, fill: CAT_STROKE[selectedAsset.category], strokeWidth: 0 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  {/* Estatísticas */}
                  {selectedAsset.data.length > 1 && (() => {
                    const vals = selectedAsset.data.map(d => d.value);
                    const minVal = Math.min(...vals);
                    const maxVal = Math.max(...vals);
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
                          <div className="text-sm font-bold text-foreground">{fmtBRL(selectedAsset.currentPrice)}</div>
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

            {/* ── Lista de ativos ── */}
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Nenhum ativo nesta categoria
                </div>
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
                          {(asset.dataSource === "real" || asset.dataSource === "db") && (
                            <span className="text-[9px] text-emerald-400 font-bold">
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
                      <ResponsiveContainer width="100%" height={32}>
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

        {/* Rodapé informativo */}
        <div className="mt-6 bg-card border border-border rounded-2xl p-5">
          <h2 className="font-display text-base font-bold mb-3">Sobre os Dados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div>
              <strong className="text-foreground flex items-center gap-1">📊 B3 <span className="text-[9px] text-emerald-400 font-bold">10 AÇÕES</span></strong>
              <p className="text-xs text-muted-foreground mt-0.5">PETR4, VALE3, ITUB4, BBDC4, ABEV3, WEGE3, BBAS3, RENT3, MGLU3, SUZB3. Histórico acumulado no banco de dados.</p>
            </div>
            <div>
              <strong className="text-foreground flex items-center gap-1">₿ Cripto <span className="text-[9px] text-emerald-400 font-bold">8 MOEDAS</span></strong>
              <p className="text-xs text-muted-foreground mt-0.5">BTC, ETH, SOL, BNB, ADA, XRP, LINK, DOT. Histórico via banco de dados + CoinGecko (fallback).</p>
            </div>
            <div>
              <strong className="text-foreground flex items-center gap-1">💱 Câmbio <span className="text-[9px] text-emerald-400 font-bold">4 MOEDAS</span></strong>
              <p className="text-xs text-muted-foreground mt-0.5">🇺🇸 USD, 🇪🇺 EUR, 🇦🇷 ARS, 🇵🇾 PYG. Banco de dados + AwesomeAPI/fawazahmed (fallback).</p>
            </div>
            <div>
              <strong className="text-foreground flex items-center gap-1">🥇 Metais <span className="text-[9px] text-emerald-400 font-bold">2 METAIS</span></strong>
              <p className="text-xs text-muted-foreground mt-0.5">🥇 Ouro 18k e 🥈 Prata 925 por grama. Banco de dados + fawazahmed (fallback).</p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-3 pt-3 border-t border-border">
            💾 O histórico é acumulado automaticamente no banco de dados a cada atualização das cotações — sem consumir requisições extras de APIs. Dados para fins informativos e educacionais.
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoricoCotacoesPage;
