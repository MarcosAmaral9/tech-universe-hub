import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, ChevronDown, ChevronUp, Zap, AlertTriangle, Shield, TrendingUp, TrendingDown, Bitcoin } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import cryptoImg from "@/assets/crypto-invest-2026.jpg";

interface CryptoCardProps {
  name: string;
  symbol: string;
  description: string;
  riskLevel: number; // 1-5
  riskColor: string;
  potential: string;
}

const CryptoCard = ({ name, symbol, description, riskLevel, riskColor, potential }: CryptoCardProps) => (
  <div className="bg-card rounded-xl border border-border p-5 hover:border-[hsl(var(--invest-color))]/50 transition-all">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--invest-color))]/20 flex items-center justify-center text-sm font-bold">{symbol}</div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-xs text-muted-foreground">{potential}</p>
      </div>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{description}</p>
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Risco:</span>
      <div className="flex gap-1 flex-1">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= riskLevel ? riskColor : 'bg-muted'}`} />
        ))}
      </div>
    </div>
  </div>
);

import CryptoWidget from "@/components/CryptoWidget";

const BitcoinCripto2026 = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [dcaValor, setDcaValor] = useState(100);
  const [dcaMeses, setDcaMeses] = useState(36);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(Math.min((window.scrollY / scrollHeight) * 100, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate DCA result (simplified historical average ~80% return over 3 years)
  const calcularDCA = () => {
    const totalInvestido = dcaValor * dcaMeses;
    // Average annual return for BTC DCA historically ~30-50%, using conservative 25%
    const retornoAnual = 0.25;
    const retornoMensal = retornoAnual / 12;
    let total = 0;
    for (let i = 0; i < dcaMeses; i++) {
      total = (total + dcaValor) * (1 + retornoMensal);
    }
    return { totalInvestido, totalFinal: total, lucro: total - totalInvestido };
  };

  const dcaResult = calcularDCA();
  const formatCurrency = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-muted">
        <div className="h-full bg-[hsl(var(--invest-color))] transition-all duration-150" style={{ width: `${readingProgress}%` }} />
      </div>

      <style>{`
        @keyframes scroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
      `}</style>

      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Bitcoin e Cripto 2026</span>
        </nav>

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Bitcoin e Criptomoedas em 2026: Ainda Dá Para Lucrar ou Já Passou da Hora?
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            O mercado cripto mudou muito. Entenda o cenário das criptomoedas em 2026, quais ainda têm potencial e como investir sem perder o que você tem.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 18 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min de leitura</span>
          </div>
        </header>

        <img src={cryptoImg} alt="Bitcoin e Criptomoedas em 2026" className="w-full rounded-2xl mb-8 aspect-video object-cover" loading="lazy" />

        {/* Crypto Widget com dados reais */}
        <CryptoWidget compact />

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Em 2024 o Bitcoin rompeu US$ 100.000. Em 2025 consolidou. E em 2026, o mercado cripto entrou numa fase que poucos previram: <strong>maturidade regulatória</strong>. Com ETFs de Bitcoin aprovados nos EUA, regulamentação da Receita Federal no Brasil e grandes bancos oferecendo custódia cripto, a pergunta não é mais "é confiável?" — é <strong>"qual a estratégia certa?"</strong>
          </p>
        </div>

        {/* O Cenário */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">O Cenário Cripto em 2026: O Que Mudou</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: <Shield className="h-5 w-5" />, title: "Regulamentação", desc: "Marco Legal das Criptomoedas no Brasil obriga exchanges a reportar transações à Receita Federal." },
              { icon: <TrendingUp className="h-5 w-5" />, title: "ETFs de Bitcoin", desc: "ETFs disponíveis na B3 (BITI11, HASH11) — investir em cripto tão simples quanto comprar uma ação." },
              { icon: <Bitcoin className="h-5 w-5" />, title: "Halving 2024", desc: "O 4º halving reduziu emissão pela metade. Historicamente precede valorização de 12-18 meses." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-[hsl(var(--invest-color))] mb-2">{item.icon}</div>
                <h3 className="font-bold mb-2 text-[hsl(45,100%,50%)]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bitcoin como reserva */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Bitcoin em 2026: Reserva de Valor ou Especulação?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A narrativa mudou. Bitcoin em 2026 é cada vez mais tratado como <strong>"ouro digital"</strong>: empresas como MicroStrategy e Tesla mantêm BTC em reserva, El Salvador adotou como moeda oficial, e bancos centrais estudam exposição.
          </p>
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5 mb-4">
            <p className="flex items-start gap-2">
              <Zap className="h-5 w-5 text-[hsl(var(--invest-color))] flex-shrink-0 mt-0.5" />
              <span className="text-sm"><strong>Para o investidor individual:</strong> Bitcoin deixou de ser "tudo ou nada". Uma alocação de <strong>2-5% da carteira</strong> é defendida até por gestores conservadores.</span>
            </p>
          </div>
        </section>

        {/* Altcoins - Crypto Cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Altcoins: Oportunidades e Armadilhas</h2>
          <p className="text-muted-foreground mb-6">Além do Bitcoin, existem milhares de criptomoedas. A maioria vai a zero. Algumas multiplicam por 10. Projetos com fundamentos sólidos em 2026:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <CryptoCard name="Bitcoin" symbol="BTC" description="A maior e mais segura criptomoeda. Reserva de valor digital." riskLevel={2} riskColor="bg-green-500" potential="Estável, reserva de valor" />
            <CryptoCard name="Ethereum" symbol="ETH" description="Base da DeFi e NFTs, staking rende 4-6% ao ano." riskLevel={3} riskColor="bg-yellow-500" potential="Alto potencial, base da Web3" />
            <CryptoCard name="Solana" symbol="SOL" description="Alta velocidade e baixas taxas, ecossistema em crescimento." riskLevel={4} riskColor="bg-orange-500" potential="Crescimento acelerado" />
            <CryptoCard name="Chainlink" symbol="LINK" description="Infraestrutura crítica para smart contracts." riskLevel={3} riskColor="bg-yellow-500" potential="Infraestrutura essencial" />
          </div>

          <h3 className="text-lg font-bold mb-3 text-[hsl(45,100%,50%)]">Critérios para avaliar uma altcoin:</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            {["Utilidade real: Resolve um problema de verdade?", "Equipe: Quem são os desenvolvedores? São identificados?", "Market cap: Projetos pequenos têm mais potencial mas mais risco", "Tokenomics: Como são emitidas e distribuídas as moedas?"].map((item, i) => (
              <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">▶</span> {item}</li>
            ))}
          </ul>
        </section>

        {/* Alert Box */}
        <section className="mb-10">
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
            <h3 className="flex items-center gap-2 font-bold text-destructive mb-3">
              <AlertTriangle className="h-5 w-5" /> ⚠️ Avisos Importantes Antes de Investir
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Nunca deixe grande quantia em exchange — use cold wallet para valores acima de R$ 5.000",
                "Ative autenticação em dois fatores (2FA) SEMPRE",
                "Nunca compartilhe sua seed phrase com ninguém",
                "Vendas até R$ 35.000/mês são isentas de IR; acima: 15% a 22,5% sobre o lucro",
                "Mesmo sem vender, você DEVE declarar no IRPF como 'outros bens'"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 accent-destructive" readOnly />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Segurança */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Como Comprar Cripto com Segurança no Brasil</h2>
          <h3 className="text-lg font-bold mb-3 text-[hsl(45,100%,50%)]">Exchanges confiáveis em 2026:</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { name: "Mercado Bitcoin", desc: "A maior do Brasil" },
              { name: "Binance", desc: "A maior do mundo" },
              { name: "Coinbase", desc: "Mais segura para iniciantes" },
            ].map((e, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-bold">{e.name}</p>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tributação */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Tributação de Cripto em 2026</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[hsl(var(--invest-color))]/20">
                  <th className="text-left p-3 rounded-tl-lg">Situação</th>
                  <th className="text-left p-3 rounded-tr-lg">Tributação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="p-3">Vendas até R$ 35.000/mês</td><td className="p-3 text-green-500 font-bold">Isento de IR</td></tr>
                <tr className="border-b border-border"><td className="p-3">Vendas acima de R$ 35.000/mês</td><td className="p-3">15% a 22,5% sobre o lucro</td></tr>
                <tr><td className="p-3">Posse sem venda</td><td className="p-3">Declarar no IRPF como "outros bens"</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Calculadora DCA */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Calculadora DCA: Dollar Cost Averaging</h2>
          <p className="text-muted-foreground mb-4">DCA = comprar um valor fixo todo mês, independente do preço. Essa estratégia elimina a emoção e reduz drasticamente o risco de timing errado.</p>
          
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Aporte mensal: {formatCurrency(dcaValor)}</label>
                <Slider value={[dcaValor]} onValueChange={v => setDcaValor(v[0])} min={50} max={2000} step={50} className="mb-4" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Período: {dcaMeses} meses ({Math.floor(dcaMeses/12)} anos e {dcaMeses%12} meses)</label>
                <Slider value={[dcaMeses]} onValueChange={v => setDcaMeses(v[0])} min={6} max={60} step={6} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Total Investido</p>
                <p className="text-lg font-bold">{formatCurrency(dcaResult.totalInvestido)}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Valor Estimado</p>
                <p className="text-lg font-bold text-[hsl(var(--invest-color))]">{formatCurrency(dcaResult.totalFinal)}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1">Lucro Estimado</p>
                <p className="text-lg font-bold text-[hsl(45,100%,50%)]">{formatCurrency(dcaResult.lucro)}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">* Simulação com retorno médio anual de 25% (conservador para BTC). Resultados passados não garantem resultados futuros.</p>
          </div>
        </section>

        {/* Alocação por perfil */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Qual o Tamanho Certo de Cripto na Sua Carteira?</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { perfil: "Conservador", alocacao: "0-2%", cor: "bg-green-500" },
              { perfil: "Moderado", alocacao: "2-5%", cor: "bg-yellow-500" },
              { perfil: "Arrojado", alocacao: "5-15%", cor: "bg-orange-500" },
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className={`w-12 h-12 rounded-full ${p.cor} mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm`}>{p.alocacao}</div>
                <p className="font-bold">{p.perfil}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5">
            <p className="text-sm flex items-start gap-2">
              <Zap className="h-5 w-5 text-[hsl(var(--invest-color))] flex-shrink-0 mt-0.5" />
              <span><strong>Nunca invista o que não pode perder.</strong> Volatilidade de 30-50% em poucos meses ainda é normal nesse mercado.</span>
            </p>
          </div>
        </section>

        {/* Glossário Cripto */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Glossário Cripto</h2>
          <Accordion type="multiple" className="space-y-2">
            {[
              { term: "DeFi (Finanças Descentralizadas)", def: "Ecossistema de serviços financeiros construídos sobre blockchain, sem intermediários como bancos. Inclui empréstimos, exchanges e seguros descentralizados." },
              { term: "NFT (Token Não-Fungível)", def: "Um ativo digital único registrado em blockchain. Usado para arte, colecionáveis, ingressos e propriedade intelectual." },
              { term: "Halving", def: "Evento que reduz pela metade a recompensa dos mineradores de Bitcoin a cada ~4 anos. Historicamente associado a ciclos de alta." },
              { term: "Seed Phrase", def: "Conjunto de 12-24 palavras que serve como backup da sua carteira. NUNCA compartilhe com ninguém." },
              { term: "Staking", def: "Processo de travar suas criptomoedas na rede para validar transações e receber recompensas, similar a juros." },
              { term: "Cold Wallet", def: "Carteira offline (hardware) para armazenar criptomoedas com máxima segurança. Exemplos: Ledger, Trezor." },
              { term: "ETF de Cripto", def: "Fundo negociado em bolsa que acompanha o preço de criptomoedas, permitindo investir sem comprar diretamente." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`glossary-${i}`} className="bg-card border border-border rounded-xl px-4">
                <AccordionTrigger className="text-sm font-bold hover:no-underline">{item.term}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{item.def}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Conclusão */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Bitcoin consolidou-se como reserva de valor digital com maturidade regulatória em 2026",
                "ETFs tornam o investimento em cripto acessível via bolsa de valores brasileira",
                "DCA (compra mensal fixa) é a estratégia mais segura para investidores comuns",
                "Alocação recomendada: 2-5% da carteira para perfil moderado",
                "Tributação: vendas até R$ 35.000/mês isentas; declaração obrigatória no IRPF",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["bitcoin 2026", "criptomoedas", "investir em cripto", "DCA", "ETF crypto", "Ethereum", "Solana"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <Link to="/financas" className="inline-flex items-center gap-2 text-[hsl(var(--invest-color))] hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Voltar para Finanças
        </Link>

        <RelatedPosts currentSlug="bitcoin-criptomoedas-2026-investir" />
        <CommentSection postId="27" />
      </article>
    </>
  );
};

export default BitcoinCripto2026;
