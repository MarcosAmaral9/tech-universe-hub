import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, AlertTriangle, ChevronRight, ChevronDown, ChevronUp, Zap, Building2, TrendingUp, CreditCard, Laptop, Home, Handshake, Music } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import rendaPassivaImg from "@/assets/renda-passiva-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
interface RendaCardProps {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  summary: string;
  details: string[];
  example?: string;
}

const RendaCard = ({ icon, emoji, title, summary, details, example }: RendaCardProps) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    trackArticleRead("renda-passiva-2026-formas-comprovadas", "Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro", "invest");
  }, []);
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-[hsl(var(--invest-color))]/50">
      <button onClick={() => setExpanded(!expanded)} className="w-full p-5 text-left flex items-start gap-4">
        <span className="text-3xl flex-shrink-0">{emoji}</span>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{summary}</p>
        </div>
        {expanded ? <ChevronUp className="h-5 w-5 text-muted-foreground mt-1" /> : <ChevronDown className="h-5 w-5 text-muted-foreground mt-1" />}
      </button>
      {expanded && (
        <div className="px-5 pb-5 border-t border-border pt-4 animate-in fade-in duration-300">
          <ul className="space-y-2 text-muted-foreground mb-3">
            {details.map((d, i) => <li key={i}>▶ {d}</li>)}
          </ul>
          {example && (
            <div className="p-3 bg-[hsl(var(--invest-color))]/10 rounded-lg text-sm">
              <strong>Exemplo real:</strong> {example}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const RendaPassiva2026 = () => {
  const [aporteMensal, setAporteMensal] = useState(800);
  const [metaRenda, setMetaRenda] = useState(1000);

  // Simula quanto tempo leva para atingir renda passiva mensal
  const calcularTempo = () => {
    // Assume rendimento médio de 9% ao ano em FIIs/dividendos
    const rendimentoAnual = 0.09;
    const rendimentoMensal = rendimentoAnual / 12;
    // Para ter metaRenda/mês passivo, precisa de patrimônio = metaRenda / rendimentoMensal
    const patrimonioNecessario = metaRenda / rendimentoMensal;
    // Calcular meses para atingir esse patrimônio com aporte mensal
    let total = 0;
    let meses = 0;
    while (total < patrimonioNecessario && meses < 600) {
      total = total * (1 + rendimentoMensal) + aporteMensal;
      meses++;
    }
    return { meses, anos: Math.floor(meses / 12), mesesRestantes: meses % 12, patrimonioNecessario };
  };

  const simulacao = calcularTempo();
  const formatCurrency = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Renda Passiva 2026</span>
        </nav>

        <BackNavigation category="invest" />

        <header className="mb-8">
          <CategoryBadge category="invest" size="lg" />
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Renda passiva não é mito. Conheça 7 estratégias validadas para 2026 que geram dinheiro enquanto você dorme, com valores reais e como começar com pouco.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Fevereiro, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img fetchpriority="high" src={rendaPassivaImg} alt="Renda Passiva 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            "Renda passiva" virou buzzword nas redes sociais, mas muita gente mistura fantasia com realidade. Não existe dinheiro sem esforço inicial — o que existe é <strong>trocar tempo presente por dinheiro futuro</strong>. Em 2026, com mais ferramentas disponíveis do que nunca, criar fontes de renda passiva virou algo acessível para qualquer pessoa com disciplina e R$ 200 mensais para investir.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            As 7 Formas Comprovadas
          </h2>

          <p>Clique em cada card para ver mais detalhes:</p>

          <div className="grid gap-4 my-8">
            <RendaCard
              icon={<Building2 />}
              emoji="🏢"
              title="1. Fundos Imobiliários (FIIs)"
              summary="O aluguel sem inquilino chato. Compre cotas e receba dividendos mensais isentos de IR."
              details={[
                "Compre cotas na bolsa por R$ 10 a R$ 120 cada",
                "Receba dividendos mensais proporcionais",
                "Rendimento isento de IR para pessoa física",
                "Monte carteira com 8-10 FIIs de setores diferentes",
              ]}
              example="100 cotas de KNRI11 a R$ 120 = R$ 12.000 investidos → ~R$ 85/mês de renda passiva (DY ~8,5% ao ano)"
            />
            <RendaCard
              emoji="📈"
              icon={<TrendingUp />}
              title="2. Dividendos de Ações"
              summary="Seja sócio silencioso de empresas que pagam mais de 12% ao ano em dividendos."
              details={[
                "Empresas como TAEE11, BBAS3, CPFE3 distribuem lucro regularmente",
                "Reinvestir dividendos potencializa os juros compostos",
                "Em 20 anos, R$ 500/mês vira uma máquina de gerar renda",
              ]}
            />
            <RendaCard
              emoji="💳"
              icon={<CreditCard />}
              title="3. CDB com Liquidez Mensal"
              summary="O mais simples de todos. Bancos digitais pagam 110-120% do CDI."
              details={[
                "PicPay, Inter e Nubank oferecem boas taxas",
                "Aplica R$ 5.000, recebe ~R$ 50-60/mês",
                "Resgate quando quiser (respeitando carência)",
              ]}
            />
            <RendaCard
              emoji="💻"
              icon={<Laptop />}
              title="4. Criação de Conteúdo Digital"
              summary="Trabalha uma vez, recebe sempre. E-books, cursos, templates."
              details={[
                "Plataformas: Hotmart, Kiwify, Gumroad",
                "Exige esforço inicial significativo",
                "Um e-book de R$ 47 vendendo 5/mês = R$ 235/mês sem trabalho extra",
              ]}
            />
            <RendaCard
              emoji="🏠"
              icon={<Home />}
              title="5. Aluguel de Propriedades Digitais"
              summary="Domínios e sites com tráfego orgânico podem ser vendidos por 30-40x o faturamento mensal."
              details={[
                "Comprar domínios estratégicos e revendê-los",
                "Sites monetizados podem ser vendidos na Flippa",
                "Mercado bilionário e em crescimento",
              ]}
            />
            <RendaCard
              emoji="🤝"
              icon={<Handshake />}
              title="6. Peer-to-Peer Lending (P2P)"
              summary="Empreste dinheiro a empresas com retornos de 15-25% ao ano."
              details={[
                "Plataformas: Nexoos e Kavod Lending",
                "Risco maior, retorno proporcionalmente maior",
                "Diversifique em muitas operações pequenas",
              ]}
            />
            <RendaCard
              emoji="🎵"
              icon={<Music />}
              title="7. Royalties de Propriedade Intelectual"
              summary="Suas criações geram royalties perpétuos em plataformas como Shutterstock e Spotify."
              details={[
                "Músicos, escritores, fotógrafos e designers",
                "Micro-pagamentos que em escala viram renda real",
                "Shutterstock, Adobe Stock, Spotify",
              ]}
            />
          </div>

          {/* Simulador */}
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            🧮 Simulador: Em Quanto Tempo Você Terá Renda Passiva?
          </h2>

          <div className="my-8 p-6 bg-card rounded-xl border-2 border-[hsl(var(--invest-color))]/50">
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Aporte Mensal: {formatCurrency(aporteMensal)}
                </label>
                <Slider value={[aporteMensal]} onValueChange={(v) => setAporteMensal(v[0])} min={100} max={5000} step={50} />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Meta de Renda Passiva Mensal: {formatCurrency(metaRenda)}
                </label>
                <Slider value={[metaRenda]} onValueChange={(v) => setMetaRenda(v[0])} min={200} max={10000} step={100} />
              </div>

              <div className="p-4 bg-muted rounded-xl text-center">
                <p className="text-sm text-muted-foreground mb-1">Tempo estimado para atingir sua meta:</p>
                <p className="text-3xl font-bold text-[hsl(var(--invest-color))]">
                  {simulacao.anos > 0 && `${simulacao.anos} anos`}
                  {simulacao.anos > 0 && simulacao.mesesRestantes > 0 && " e "}
                  {simulacao.mesesRestantes > 0 && `${simulacao.mesesRestantes} meses`}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Patrimônio necessário: {formatCurrency(simulacao.patrimonioNecessario)} (rendimento médio 9% a.a. em FIIs/dividendos)
                </p>
              </div>
            </div>
          </div>

          {/* Fases */}
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Como Montar Sua Estratégia em 3 Fases
          </h2>

          <div className="grid gap-4 my-8">
            {[
              { fase: "Fase 1", range: "R$ 0 - R$ 10.000", desc: "Foque em CDB e Tesouro Selic para construir a base com segurança.", pct: 33 },
              { fase: "Fase 2", range: "R$ 10.000 - R$ 50.000", desc: "Comece a montar carteira de FIIs e ações de dividendos.", pct: 66 },
              { fase: "Fase 3", range: "R$ 50.000+", desc: "Diversifique em P2P, imóveis físicos e ativos digitais.", pct: 100 },
            ].map((f, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-[hsl(var(--invest-color))]">{f.fase}</span>
                  <span className="text-sm text-muted-foreground">{f.range}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{f.desc}</p>
                <Progress value={f.pct} className="h-2" />
              </div>
            ))}
          </div>

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(var(--invest-color))] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>Meta realista:</strong> Em 5 anos investindo R$ 800/mês, é possível ter R$ 600-800/mês de renda
                passiva com uma carteira bem montada de FIIs + ações de dividendos.
              </p>
            </div>
          </div>

          {/* Aviso Legal */}
          <div className="my-8 p-6 bg-destructive/10 rounded-xl border border-destructive/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Aviso Legal Importante</h3>
                <p className="text-muted-foreground mb-0">
                  Este artigo tem fins <strong>educativos e informativos</strong>. Investimentos envolvem riscos.
                  Sempre consulte um profissional financeiro certificado. Rentabilidade passada não garante rentabilidade futura.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Você já tem alguma fonte de renda passiva?</h3>
            <p className="text-muted-foreground">
              Qual das 7 formas te interessou mais? Compartilhe nos comentários! 👇
            </p>
          </div>
        </div>

        <RelatedPosts currentSlug="renda-passiva-2026-formas-comprovadas" />
        <CommentSection postId="renda-passiva-2026-formas-comprovadas" postTitle="Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro" />
      </article>
    </>
  );
};

export default RendaPassiva2026;
