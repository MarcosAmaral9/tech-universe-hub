import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, AlertTriangle, ChevronRight,
  ChevronDown, ChevronUp, Zap, Building2, TrendingUp,
  CreditCard, Laptop, Home, Handshake, Music,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import rendaPassivaImg from "@/assets/renda-passiva-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

/* ── Renda Card ─────────────────────────────────────────────── */
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
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-[hsl(var(--invest-color))]/50">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left flex items-start gap-4"
      >
        <span className="text-3xl flex-shrink-0">{emoji}</span>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{summary}</p>
        </div>
        {expanded
          ? <ChevronUp className="h-5 w-5 text-muted-foreground mt-1" />
          : <ChevronDown className="h-5 w-5 text-muted-foreground mt-1" />
        }
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

/* ── Main Component ──────────────────────────────────────────── */
const RendaPassiva2026 = () => {
  const [aporteMensal, setAporteMensal] = useState(800);
  const [metaRenda, setMetaRenda] = useState(1000);

  useEffect(() => {
    trackArticleRead(
      "renda-passiva-2026-formas-comprovadas",
      "Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo",
      "invest"
    );
  }, []);

  const calcularTempo = () => {
    const rendimentoAnual = 0.09;
    const rendimentoMensal = rendimentoAnual / 12;
    const patrimonioNecessario = metaRenda / rendimentoMensal;
    let total = 0;
    let meses = 0;
    while (total < patrimonioNecessario && meses < 600) {
      total = total * (1 + rendimentoMensal) + aporteMensal;
      meses++;
    }
    return {
      meses,
      anos: Math.floor(meses / 12),
      mesesRestantes: meses % 12,
      patrimonioNecessario,
    };
  };

  const simulacao = calcularTempo();
  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <BackNavigation category="invest" />

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              Renda Passiva · FIIs · Dividendos · Investimentos
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            <strong>Renda passiva em 2026</strong> não é mito — é construção patrimonial.
            Conheça 7 estratégias validadas para gerar dinheiro recorrente enquanto você
            dorme, com valores reais, exemplos práticos e quanto precisará investir para
            cada nível de renda mensal.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Fevereiro, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img
            fetchpriority="high"
            loading="eager"
            decoding="async"
            src={rendaPassivaImg}
            alt="Renda Passiva 2026 — 7 formas comprovadas de ganhar dinheiro dormindo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            "Renda passiva" virou buzzword nas redes sociais, mas muita gente mistura
            fantasia com realidade. Não existe dinheiro sem esforço inicial — o que existe
            é <strong>trocar tempo presente por dinheiro futuro</strong>. Em 2026, com mais
            ferramentas disponíveis do que nunca, criar fontes de{" "}
            <strong>renda passiva</strong> se tornou acessível para qualquer pessoa com
            disciplina e R$ 200 mensais para investir.
          </p>

          <p>
            Para ter R$ 1.000/mês de renda passiva a um yield médio de 9% ao ano — como
            uma carteira diversificada de FIIs e ações pagadoras de dividendos — você
            precisa de aproximadamente <strong>R$ 133.000 investidos</strong>. Parece muito,
            mas com aporte mensal de R$ 800 e rendimentos reinvestidos, você chega lá em
            menos de 10 anos. O simulador abaixo calcula o seu prazo específico.
          </p>

          {/* As 7 formas */}
          <h2 className="text-2xl font-bold mt-10 mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            As 7 Formas Comprovadas de Renda Passiva em 2026
          </h2>
          <p>Clique em cada card para ver detalhes, dicas e exemplos reais:</p>

          <div className="grid gap-4 my-8 not-prose">
            <RendaCard
              icon={<Building2 />}
              emoji="🏢"
              title="1. Fundos Imobiliários (FIIs)"
              summary="O aluguel sem inquilino problemático. Compre cotas e receba dividendos mensais isentos de IR."
              details={[
                "Compre cotas na B3 por R$ 10 a R$ 120 cada — acessível desde o primeiro mês",
                "Receba dividendos mensais proporcionais ao número de cotas",
                "Rendimento isento de IR para pessoa física — vantagem que ações não têm",
                "Monte carteira com 8–10 FIIs de setores diferentes (logística, shoppings, papel)",
                "Reinvista os primeiros anos para acelerar o crescimento patrimonial",
              ]}
              example="100 cotas de KNRI11 a R$ 120 = R$ 12.000 investidos → ~R$ 85/mês de renda passiva (DY ~8,5% ao ano). Em 5 anos de aportes de R$ 800/mês reinvestidos, a renda mensal ultrapassa R$ 400."
            />
            <RendaCard
              emoji="📈"
              icon={<TrendingUp />}
              title="2. Dividendos de Ações"
              summary="Seja sócio silencioso de empresas que distribuem mais de 8–12% ao ano em dividendos."
              details={[
                "Empresas como TAEE11, BBAS3, CPFE3, ITSA4 distribuem lucro regularmente",
                "Dividendos de ações são isentos de IR para PF; JCP tem 15% retido na fonte",
                "Reinvestir dividendos potencializa os juros compostos ao longo dos anos",
                "Use o IDIV (índice de dividendos da B3) como referência de empresas pagadoras",
                "Em 20 anos, R$ 500/mês reinvestidos a 10% a.a. gera patrimônio acima de R$ 380 mil",
              ]}
            />
            <RendaCard
              emoji="💳"
              icon={<CreditCard />}
              title="3. CDB e Renda Fixa com Juros Mensais"
              summary="O mais simples de todos. Bancos digitais pagam 110–120% do CDI — dinheiro rendendo todo dia."
              details={[
                "PicPay, Inter, Nubank, BTG oferecem CDBs de liquidez diária a 100%+ CDI",
                "Invista R$ 5.000 → receba ~R$ 50–60/mês (sem carência, com FGC)",
                "Tesouro IPCA+ com Juros Semestrais paga cupom 2× ao ano — ideal para quem quer fluxo",
                "Não exige nenhum conhecimento de mercado — o mais acessível para iniciantes",
              ]}
            />
            <RendaCard
              emoji="💻"
              icon={<Laptop />}
              title="4. Criação de Conteúdo Digital e Infoprodutos"
              summary="Trabalha uma vez, recebe para sempre. E-books, cursos, templates, presets."
              details={[
                "Plataformas: Hotmart, Kiwify, Gumroad, Braip — pagam automaticamente",
                "Exige esforço inicial significativo (semanas ou meses de produção)",
                "Um e-book de R$ 47 vendendo 5 cópias/mês = R$ 235/mês sem trabalho extra",
                "Um curso online de R$ 297 com 10 alunos/mês = R$ 2.970/mês passivo",
                "SEO bem feito gera vendas orgânicas por anos sem custo de tráfego",
              ]}
            />
            <RendaCard
              emoji="🏠"
              icon={<Home />}
              title="5. Ativos Digitais: Domínios e Sites Monetizados"
              summary="Domínios estratégicos e sites com tráfego orgânico valem 30–40× o faturamento mensal."
              details={[
                "Registrar domínios com potencial e revendê-los (domain flipping) — risco alto, retorno alto",
                "Sites com AdSense ou afiliados podem ser vendidos na Flippa por 30–40× o lucro mensal",
                "Um site que gera R$ 500/mês pode ser vendido por R$ 15.000–20.000",
                "Exige conhecimento de SEO, criação de conteúdo e paciência (6–18 meses para resultados)",
              ]}
            />
            <RendaCard
              emoji="🤝"
              icon={<Handshake />}
              title="6. Peer-to-Peer Lending (P2P)"
              summary="Empreste dinheiro a PMEs e receba juros de 15–25% ao ano — diretamente, sem banco."
              details={[
                "Plataformas brasileiras: Nexoos, Kavod Lending, Adiante Recebíveis",
                "Risco maior que renda fixa — inadimplência existe e deve ser precificada",
                "Diversifique em muitas operações pequenas para diluir o risco de calote",
                "Rendimentos mensais direto na conta — são tributados como renda fixa (IR tabela regressiva)",
                "Ideal como complemento de carteira para quem já tem renda fixa sólida",
              ]}
            />
            <RendaCard
              emoji="🎵"
              icon={<Music />}
              title="7. Royalties de Propriedade Intelectual"
              summary="Suas criações geram royalties perpétuos em plataformas como Shutterstock e Spotify."
              details={[
                "Fotógrafos: Shutterstock, Adobe Stock, Getty Images — cada imagem vende centenas de vezes",
                "Músicos: Spotify, Apple Music — royalties de streaming acumulam em escala",
                "Escritores: Amazon KDP (autopublicação) — e-books vendem globalmente sem estoque",
                "Designers: Creative Market, Freepik, Envato — templates gráficos com venda recorrente",
                "Micro-pagamentos que em escala e volume viram renda passiva real e crescente",
              ]}
            />
          </div>

          {/* Quanto você realmente precisa */}
          <h2 className="text-2xl font-bold mt-10 mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Quanto Você Precisa Para Cada Nível de Renda Passiva?
          </h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-3 font-bold">Renda Passiva / mês</th>
                  <th className="text-left p-3 font-bold">Patrimônio necessário*</th>
                  <th className="text-left p-3 font-bold">Tempo (R$ 800/mês)</th>
                  <th className="text-left p-3 font-bold">Tempo (R$ 2.000/mês)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["R$ 300/mês",    "R$ 40.000",  "~4 anos",   "~2 anos"   ],
                  ["R$ 500/mês",    "R$ 67.000",  "~6 anos",   "~3 anos"   ],
                  ["R$ 1.000/mês",  "R$ 133.000", "~9 anos",   "~5 anos"   ],
                  ["R$ 2.000/mês",  "R$ 267.000", "~15 anos",  "~8 anos"   ],
                  ["R$ 5.000/mês",  "R$ 667.000", "~25+ anos", "~17 anos"  ],
                ].map(([renda, patrim, t1, t2]) => (
                  <tr key={renda} className="border-t border-border hover:bg-muted/20">
                    <td className="p-3 font-bold text-[hsl(var(--invest-color))]">{renda}</td>
                    <td className="p-3 font-mono text-sm">{patrim}</td>
                    <td className="p-3 text-muted-foreground text-sm">{t1}</td>
                    <td className="p-3 text-muted-foreground text-sm">{t2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-2">
              * Yield médio de 9% ao ano em carteira de FIIs + dividendos. Tempo calculado com aportes mensais constantes e reinvestimento total dos rendimentos. Valores ilustrativos.
            </p>
          </div>

          {/* Simulador */}
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            🧮 Simulador Personalizado: Quanto Tempo Para Sua Meta?
          </h2>

          <div className="my-8 p-6 bg-card rounded-xl border-2 border-[hsl(var(--invest-color))]/50 not-prose">
            <div className="grid gap-6 mb-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Aporte Mensal: {fmt(aporteMensal)}
                </label>
                <Slider
                  value={[aporteMensal]}
                  onValueChange={v => setAporteMensal(v[0])}
                  min={100} max={5000} step={50}
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  Meta de Renda Passiva Mensal: {fmt(metaRenda)}
                </label>
                <Slider
                  value={[metaRenda]}
                  onValueChange={v => setMetaRenda(v[0])}
                  min={200} max={10000} step={100}
                />
              </div>
            </div>
            <div className="p-4 bg-muted rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-1">Tempo estimado para atingir sua meta:</p>
              <p className="text-3xl font-bold text-[hsl(var(--invest-color))]">
                {simulacao.anos > 0 && `${simulacao.anos} anos`}
                {simulacao.anos > 0 && simulacao.mesesRestantes > 0 && " e "}
                {simulacao.mesesRestantes > 0 && `${simulacao.mesesRestantes} meses`}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Patrimônio necessário: {fmt(simulacao.patrimonioNecessario)} — rendimento médio 9% a.a. em FIIs/dividendos com reinvestimento total
              </p>
            </div>
          </div>

          <AdInArticle />

          {/* Fases */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Como Montar Sua Estratégia em 3 Fases
          </h2>

          <div className="grid gap-4 my-8 not-prose">
            {[
              {
                fase: "Fase 1",
                range: "R$ 0 → R$ 10.000",
                desc: "Foque em construir a base com segurança. CDB de liquidez diária (100%+ CDI) e Tesouro Selic para reserva de emergência. Nenhum risco de mercado nessa fase.",
                pct: 33,
              },
              {
                fase: "Fase 2",
                range: "R$ 10.000 → R$ 50.000",
                desc: "Inicie a carteira de renda variável com FIIs (10–12 fundos de setores distintos) e ações pagadoras de dividendos. Reinvista tudo — ainda não é hora de gastar a renda passiva.",
                pct: 66,
              },
              {
                fase: "Fase 3",
                range: "R$ 50.000+",
                desc: "Diversifique para P2P, ETFs internacionais e ativos digitais. Com patrimônio consolidado, você pode começar a usar parte da renda passiva sem prejudicar o crescimento.",
                pct: 100,
              },
            ].map((f, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-[hsl(var(--invest-color))]">{f.fase}</span>
                  <span className="text-sm text-muted-foreground font-mono">{f.range}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{f.desc}</p>
                <Progress value={f.pct} className="h-2" />
              </div>
            ))}
          </div>

          <AdRectangle className="my-8" />

          <div className="my-8 p-6 bg-[hsl(var(--invest-color))]/10 rounded-xl border border-[hsl(var(--invest-color))]/30 not-prose">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-[hsl(var(--invest-color))] flex-shrink-0 mt-1" />
              <p className="text-muted-foreground mb-0">
                <strong>Meta realista para 5 anos:</strong> Investindo R$ 800/mês em
                uma carteira de FIIs + ações de dividendos e reinvestindo tudo, você
                acumula aproximadamente R$ 60.000–65.000 — gerando{" "}
                <strong>R$ 450–490/mês de renda passiva</strong> isenta de IR. Não é
                independência financeira, mas é um segundo salário em construção.
              </p>
            </div>
          </div>

          {/* Aviso Legal */}
          <div className="my-8 p-6 bg-destructive/10 rounded-xl border border-destructive/30 not-prose">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Aviso Legal</h3>
                <p className="text-muted-foreground mb-0">
                  Este artigo tem fins <strong>educativos e informativos</strong>. Rendimentos
                  apresentados são estimativas baseadas em dados históricos e não garantem
                  resultados futuros. Investimentos envolvem risco de perda. Consulte um
                  profissional financeiro certificado (CFP ou AAI) antes de tomar decisões.
                </p>
              </div>
            </div>
          </div>

          {/* Tributação detalhada */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Tributação de Cada Fonte de Renda Passiva
          </h2>
          <p>
            Antes de escolher onde concentrar esforços, é fundamental entender como cada
            fonte de renda passiva é tributada — porque o rendimento "líquido no bolso"
            pode variar significativamente mesmo entre fontes com retorno bruto parecido:
          </p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-3 font-bold">Fonte</th>
                  <th className="text-left p-3 font-bold">Tributação</th>
                  <th className="text-left p-3 font-bold">Observação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dividendos de FIIs", "Isento de IR", "Desde que o fundo tenha 50+ cotistas e seja negociado em bolsa"],
                  ["Dividendos de ações", "Isento de IR", "JCP (Juros sobre Capital Próprio) tem 15% retido na fonte"],
                  ["CDB com juros mensais", "Tabela regressiva (15-22,5%)", "IR já descontado na fonte pelo banco automaticamente"],
                  ["Tesouro IPCA+ com cupom", "Tabela regressiva (15-22,5%)", "Alíquota cai conforme tempo desde a compra do título"],
                  ["Infoprodutos (pessoa física)", "Tabela progressiva do IRPF", "Pode ser vantajoso abrir MEI/PJ para tributação menor"],
                  ["P2P Lending", "Tabela regressiva (15-22,5%)", "Mesma regra de renda fixa — informe de rendimentos da plataforma"],
                  ["Royalties (Shutterstock, Spotify)", "Tabela progressiva do IRPF", "Rendimento do exterior exige carnê-leão mensal se recebido em moeda estrangeira"],
                ].map(([fonte, trib, obs]) => (
                  <tr key={fonte} className="border-t border-border">
                    <td className="p-3 font-bold text-[hsl(var(--invest-color))] text-xs">{fonte}</td>
                    <td className="p-3 text-xs">{trib}</td>
                    <td className="p-3 text-muted-foreground text-xs">{obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Essa diferença tributária explica, em parte, por que FIIs e dividendos de
            ações são tão populares entre investidores brasileiros que buscam renda
            passiva: a isenção de IR significa que <strong>100% do valor distribuído
            chega ao bolso do investidor</strong>, sem necessidade de cálculos adicionais
            ou retenção na fonte. Já fontes como infoprodutos e royalties, embora possam
            ter retornos brutos mais altos, exigem planejamento tributário mais cuidadoso
            — especialmente para quem está construindo um negócio digital que pode crescer
            significativamente ano a ano.
          </p>

          {/* Erros comuns */}
          <h2 className="text-2xl font-bold mt-10 mb-6 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            5 Erros Comuns ao Buscar Renda Passiva
          </h2>
          <div className="not-prose space-y-3 my-6">
            {[
              { erro: "Confundir renda passiva com 'dinheiro sem esforço'", desc: "Toda fonte de renda passiva listada exige esforço inicial — seja capital para investir, seja tempo para criar conteúdo ou construir um produto digital. O que muda é que o esforço é concentrado no início, não recorrente. Quem espera 'zero esforço desde o dia 1' geralmente desiste antes de ver resultado." },
              { erro: "Gastar a renda passiva antes de atingir a meta", desc: "Os primeiros R$ 50-100/mês de dividendos parecem pouco, mas reinvestidos aceleram exponencialmente o crescimento do patrimônio via juros compostos. Gastar essa renda nos primeiros anos é como comer a semente em vez de plantá-la." },
              { erro: "Buscar apenas o yield mais alto, ignorando o risco", desc: "Um FII pagando DY de 18% pode estar distribuindo mais do que gera, sinalizando problema estrutural. Sempre compare o yield com a média do setor — yields muito acima da média geralmente indicam risco elevado ou distribuição não sustentável." },
              { erro: "Concentrar tudo em uma única fonte de renda", desc: "Diversificar entre FIIs, dividendos de ações e renda fixa reduz o impacto de problemas específicos de um setor. Em 2020, por exemplo, FIIs de shopping sofreram muito mais que FIIs de logística — quem tinha apenas shoppings sentiu o impacto de forma desproporcional." },
              { erro: "Não considerar o tempo necessário para fontes não-financeiras", desc: "Infoprodutos, sites monetizados e royalties de propriedade intelectual costumam levar 6 a 18 meses para gerar receita relevante. Tratar essas fontes com a mesma expectativa de prazo de um CDB (rendimento desde o dia 1) gera frustração e abandono prematuro de projetos que poderiam funcionar com mais paciência." },
            ].map(({ erro, desc }) => (
              <div key={erro} className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm mb-1">{erro}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold border-l-4 border-[hsl(var(--invest-color))] pl-4 mb-6 mt-10">
          O Primeiro Passo Concreto: Qual Renda Passiva Começar
        </h2>
        <p>
          Com tantas opções disponíveis, a maior armadilha é não começar por indecisão.
          A recomendação mais prática é começar pela forma mais simples possível para
          o seu perfil atual e adicionar complexidade gradualmente, conforme constrói
          experiência e patrimônio. Para quem ainda está formando reserva de emergência,
          o Tesouro Selic já gera renda passiva enquanto cumpre sua função de segurança
          — não há necessidade de esperar ter muito capital para começar a receber algum
          rendimento. Para quem já tem reserva formada, FIIs são frequentemente o
          próximo passo natural, pela combinação de acesso fácil via B3, dividendos
          mensais isentos de IR e possibilidade de começar com apenas algumas dezenas
          de reais por mês em aportes regulares.
        </p>
        <p>
          Independentemente da combinação escolhida, o denominador comum de todas as
          histórias bem-sucedidas de construção de renda passiva é tempo e consistência.
          R$ 300 por mês investidos em FIIs com dividend yield de 9% ao ano geram
          aproximadamente R$ 27 de renda mensal após 12 meses de aportes — parece
          pouco, mas depois de 5 anos com os dividendos reinvestidos o quadro é
          completamente diferente, com a renda mensal gerada crescendo de forma
          acelerada à medida que o patrimônio acumula e o efeito dos juros compostos
          começa a se manifestar de forma mais visível no extrato.
        </p>

        <EditorialTake
          category="invest"
          title="Análise do Marcos: renda passiva é maratona — o começo importa mais que a velocidade"
        >
          <p>
            Modalidades com fluxo regular comprovado no Brasil em 2026: dividendos de
            ações (top pagadoras incluem Itaúsa, Vale, Petrobras, Taesa, Banco do Brasil),
            rendimentos de FIIs (média histórica 0,7–0,9% a.m. líquido, isento de IR para
            PF) e cupons do Tesouro IPCA+ com Juros Semestrais. Dados da B3 mostram mais de
            2,4 milhões de CPFs investidos em FIIs e dividend yield médio do IFIX em torno
            de 11% a.a. nos últimos 12 meses.
          </p>
          <p className="mt-2">
            Minha análise: "renda passiva" não é mágica — é construção patrimonial com
            prazo. Para receber R$ 3.000/mês de dividendos a yield de 9% ao ano, são
            necessários aproximadamente <strong>R$ 400 mil investidos</strong>. O caminho
            realista para 2026–2030: <strong>70% em ETFs amplos</strong> (IVVB11, BOVA11)
            para crescimento, <strong>20% em FIIs diversificados</strong> para renda mensal
            isenta e <strong>até 10% em ações pagadoras</strong> individuais para quem
            aceita risco adicional. Quem começa com R$ 200/mês hoje chega muito mais longe
            do que quem espera ter R$ 2.000/mês para começar "de verdade".
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "B3 — Dados de Fundos de Investimento Imobiliário (FIIs) e IFIX",
              url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/fundos-de-investimentos-imobiliarios-fii.htm",
              publisher: "B3 — Bolsa do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Status Invest — Análise de Dividendos e IDIV",
              url: "https://statusinvest.com.br/",
              publisher: "Status Invest",
              accessedAt: "Maio 2026",
            },
            {
              title: "Receita Federal — Tributação de Dividendos, JCP e Rendimentos de FIIs",
              url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
              publisher: "Receita Federal do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Tesouro Direto — Tesouro IPCA+ com Juros Semestrais",
              url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro/tesouro-ipca-mais-com-juros-semestrais.htm",
              publisher: "Tesouro Nacional / Tesouro Direto",
              accessedAt: "Maio 2026",
            },
            {
              title: "ANBIMA — Boletim Fundos de Investimento: FIIs e IFIX",
              url: "https://www.anbima.com.br/pt_br/informar/relatorios/fundos-de-investimento/fundos-de-investimento-imobiliario.htm",
              publisher: "ANBIMA",
              accessedAt: "Maio 2026",
            },
            {
              title: "CVM — Guia do Investidor: Renda Variável e Dividendos",
              url: "https://www.investidor.gov.br/menu/Menu_Investidor/produtos/Produto_RendaVariavel.html",
              publisher: "Comissão de Valores Mobiliários (CVM)",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="renda-passiva-2026-formas-comprovadas" />
        <CommentSection
          postId="renda-passiva-2026-formas-comprovadas"
          postTitle="Renda Passiva Real em 2026: 7 Formas Comprovadas de Ganhar Dinheiro Dormindo"
         category="invest" />
      </article>
    </>
  );
};

export default RendaPassiva2026;
