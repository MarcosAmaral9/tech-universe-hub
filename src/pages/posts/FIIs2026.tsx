import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, ChevronRight, TrendingUp,
  Building2, AlertTriangle, CheckCircle2, DollarSign, BarChart3,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import fiisImg from "@/assets/fiis-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

// Simulador de patrimônio para FIIs
const FIISimulator = ({
  targetIncome, setTargetIncome, dy, setDy,
}: {
  targetIncome: number; setTargetIncome: (v: number) => void;
  dy: number; setDy: (v: number) => void;
}) => {
  const needed = (targetIncome * 12) / (dy / 100);
  const needed6m = needed / 2;
  const needed3m = needed / 4;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Simulador: Quanto Investir para Viver de FIIs?
      </h3>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground">
            Renda mensal desejada: <strong className="text-foreground">R$ {targetIncome.toLocaleString("pt-BR")}</strong>
          </label>
          <Slider min={100} max={10000} step={50} value={[targetIncome]} onValueChange={v => setTargetIncome(v[0])} className="mt-2" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">
            Dividend Yield anual médio da carteira: <strong className="text-foreground">{dy}%</strong>
          </label>
          <Slider min={5} max={15} step={0.5} value={[dy]} onValueChange={v => setDy(v[0])} className="mt-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Patrimônio necessário</p>
          <p className="text-2xl font-bold text-[hsl(var(--invest-color))]">
            R$ {needed.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Para R$ {targetIncome}/mês</p>
        </div>
        <div className="bg-muted/40 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">50% da meta</p>
          <p className="text-2xl font-bold">
            R$ {needed6m.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">= R$ {(targetIncome / 2).toLocaleString("pt-BR")}/mês</p>
        </div>
        <div className="bg-muted/40 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">25% da meta</p>
          <p className="text-2xl font-bold">
            R$ {needed3m.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">= R$ {(targetIncome / 4).toLocaleString("pt-BR")}/mês</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Simulação ilustrativa com DY constante. Dividend Yield real varia conforme gestão, cenário de juros e vacância.
      </p>
    </div>
  );
};

// Tiles interativos de setores
const SectorTiles = () => {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const sectors = [
    { name: "Logística",    icon: "📦", desc: "E-commerce em crescimento impulsiona demanda por centros de distribuição modernos. Contratos longos e inquilinos de qualidade.",      outlook: "🟢 Positivo" },
    { name: "Papel (CRI)",  icon: "📄", desc: "Selic elevada = rendimentos atrativos indexados ao CDI/IPCA. Menos sensível à variação de preço dos imóveis físicos.",              outlook: "🟢 Positivo" },
    { name: "Hospitais",    icon: "🏥", desc: "Setor defensivo com contratos longos e demanda inelástica. Menor volatilidade em ciclos de juros.",                              outlook: "🟢 Positivo" },
    { name: "Lajes Corp.",  icon: "🏢", desc: "Recuperação gradual do trabalho presencial. Lajes premium em São Paulo com vacância em queda, mas segmento ainda em normalização.", outlook: "🟡 Neutro" },
    { name: "Shoppings",    icon: "🛍️", desc: "Varejo sob pressão com juros altos e inadimplência do lojista. Shoppings premium em localizações AAA se saem melhor.",            outlook: "🟡 Neutro" },
    { name: "Híbridos",     icon: "🔄", desc: "Combinam CRIs e imóveis físicos. Boa opção para quem quer um único fundo com diversificação interna já embutida.",                outlook: "🟢 Positivo" },
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {sectors.map((s) => (
          <button
            key={s.name}
            onClick={() => setActiveSector(activeSector === s.name ? null : s.name)}
            className={`p-4 rounded-xl border text-center transition-all ${
              activeSector === s.name
                ? "border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10"
                : "border-border bg-card hover:border-muted-foreground"
            }`}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-sm font-bold">{s.name}</div>
          </button>
        ))}
      </div>
      {activeSector && (() => {
        const s = sectors.find(x => x.name === activeSector);
        if (!s) return null;
        return (
          <div className="bg-card border border-border rounded-xl p-4 animate-in fade-in">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold">{s.icon} {s.name}</h4>
              <span className="text-sm">{s.outlook}</span>
            </div>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        );
      })()}
    </div>
  );
};

// Glossário expansível
const GlossaryItem = ({ term, definition }: { term: string; definition: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-card border border-border rounded-lg p-3 hover:border-[hsl(var(--invest-color))]/50 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm">{term}</span>
        <span className="text-muted-foreground text-xs">{open ? "▲" : "▼"}</span>
      </div>
      {open && <p className="text-sm text-muted-foreground mt-2 text-left">{definition}</p>}
    </button>
  );
};

const FIIs2026 = () => {
  const [targetIncome, setTargetIncome] = useState(500);
  const [dy, setDy] = useState(9);

  useEffect(() => {
    trackArticleRead(
      "fiis-2026-melhores-fundos-imobiliarios",
      "FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar",
      "invest"
    );
  }, []);

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">FIIs 2026</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              FIIs · Fundos Imobiliários · Dividendos
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Fundos Imobiliários (FIIs) em 2026: Os Melhores, Como Analisar e Erros Que Te Custam Dinheiro
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Os <strong>FIIs em 2026</strong> seguem como o investimento favorito do brasileiro que busca renda passiva mensal: rendimentos isentos de IR para pessoa física, cotas a partir de R$ 10 e acesso a imóveis que você jamais compraria sozinho. Este guia completo mostra como escolher os melhores fundos imobiliários, analisar DY, P/VP e vacância, identificar os setores mais atrativos do ano e montar uma carteira diversificada.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 22 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min de leitura</span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            fetchpriority="high"
            src={fiisImg}
            alt="FIIs em 2026 — fundos imobiliários, dividendos mensais e como analisar"
            className="w-full aspect-video object-cover"
            loading="eager"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            <strong>Fundos Imobiliários (FIIs)</strong> são o caminho mais acessível para o investidor pessoa física participar do mercado imobiliário brasileiro sem precisar comprar um apartamento ou galpão. A combinação de <strong>rendimentos mensais isentos de IR</strong>, liquidez diária na B3 e tickets mínimos de R$ 10–100 faz dos FIIs uma das classes de ativos mais democráticas de 2026. O IFIX — índice que mede a performance dos principais FIIs — acumula retorno superior ao Ibovespa nos últimos 5 anos quando considerados os rendimentos reinvestidos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mas investir em FIIs exige mais do que olhar o Dividend Yield mais alto da lista. Um DY de 15% pode mascarar uma cota que despencou, uma vacância crescente ou uma gestora que está liquidando patrimônio para pagar dividendos. Este guia vai te ensinar a separar as boas oportunidades das armadilhas.
          </p>
        </div>

        {/* 3 tipos */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Os 3 Tipos de FIIs e Quando Usar Cada Um
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            A escolha do tipo certo de FII depende do momento econômico e do seu objetivo. Em ciclos de juros altos, Papel se destaca; em ciclos de queda, Tijolo tende a se valorizar mais:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                type: "Papel (CRI/CRA)", icon: "📄",
                desc: "Investem em Certificados de Recebíveis Imobiliários. Não possuem imóveis físicos — são mais parecidos com renda fixa.",
                pros: "Rendimentos altos quando a Selic está elevada. Mais defensivos.",
                cons: "Sem imóvel físico para se valorizar. Exposto a risco de crédito dos emissores.",
                cenario: "Ideal agora em 2026",
              },
              {
                type: "Tijolo", icon: "🧱",
                desc: "Possuem imóveis físicos: shoppings, galpões logísticos, lajes corporativas, hospitais.",
                pros: "Valorização patrimonial real dos imóveis. Proteção contra inflação no longo prazo.",
                cons: "Vacância afeta diretamente os dividendos. Mais sensível à alta de juros.",
                cenario: "Bom para longo prazo",
              },
              {
                type: "Híbridos", icon: "🔄",
                desc: "Combinam papel (CRIs) e tijolo em proporções variadas conforme a gestora decide.",
                pros: "Diversificação interna em um único fundo. Equilíbrio entre segurança e crescimento.",
                cons: "Menos especializado. Taxa de gestão pode ser maior que fundos focados.",
                cenario: "Bom para iniciantes",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-1 text-[hsl(45,100%,50%)] text-sm">{item.type}</h3>
                <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-invest/10 text-invest mb-3">{item.cenario}</span>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <p className="text-xs mb-1"><span className="text-[hsl(var(--invest-color))]">✓</span> {item.pros}</p>
                <p className="text-xs"><span className="text-destructive">✕</span> {item.cons}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glossário */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <BarChart3 className="inline h-6 w-6 mr-2" />
            Indicadores Essenciais para Analisar FIIs
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Antes de comprar qualquer FII, verifique estes quatro indicadores. Clique em cada um para entender o que representam e quais faixas são saudáveis em 2026:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <GlossaryItem
              term="Dividend Yield (DY) — Rentabilidade de Dividendos"
              definition="Quanto o fundo pagou de dividendos nos últimos 12 meses em relação ao preço atual da cota. DY acima de 9–10% é competitivo para FII de tijolo em 2026. Para papel, 11–14% é a faixa saudável. ATENÇÃO: DY muito acima da média pode indicar que a cota caiu muito (preço baixo infla o DY artificialmente)."
            />
            <GlossaryItem
              term="P/VP (Preço / Valor Patrimonial)"
              definition="Compara o preço de mercado da cota com o valor real dos ativos do fundo. P/VP abaixo de 1,0 significa que você está comprando R$ 1 de ativo por menos de R$ 1 — potencial desconto. P/VP acima de 1,20 indica que o mercado está pagando prêmio. Para tijolo, P/VP entre 0,90 e 1,05 é a faixa ideal de entrada."
            />
            <GlossaryItem
              term="Vacância Física e Financeira"
              definition="Vacância física = % de área não ocupada. Vacância financeira = % da receita potencial não realizada (considera carências e descontos). Abaixo de 5% é excelente para tijolo. Acima de 15% é preocupante e pode indicar problemas de qualidade dos imóveis ou gestão."
            />
            <GlossaryItem
              term="Liquidez Diária (Volume Financeiro)"
              definition="Volume médio negociado por dia na B3. FIIs com liquidez abaixo de R$ 500 mil/dia são difíceis de vender em volume sem impactar o preço. Para uma carteira iniciante, prefira FIIs com volume diário acima de R$ 1 milhão."
            />
            <GlossaryItem
              term="NOI e FFO (Receita Operacional)"
              definition="NOI (Net Operating Income) = receita de aluguéis menos despesas operacionais. FFO (Funds from Operations) = lucro ajustado para distribuição. FFO por cota crescente trimestre a trimestre é sinal de fundo saudável e gestão eficiente."
            />
            <GlossaryItem
              term="Contratos Típicos vs Atípicos"
              definition="Contratos típicos podem ser rescindidos com multa menor (normalmente 3 aluguéis). Contratos atípicos têm multa pesada de rescisão antecipada — geralmente igual ao aluguel restante do contrato. Para o cotista, atípico = mais segurança de renda. Presença de contratos atípicos longos é sinal positivo."
            />
          </div>
        </section>

        <AdInArticle />

        {/* Setores */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <Building2 className="inline h-6 w-6 mr-2" />
            Setores de FIIs em Destaque 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Clique em cada setor para ver a análise de perspectiva para 2026:
          </p>
          <SectorTiles />
        </section>

        {/* Simulador */}
        <FIISimulator
          targetIncome={targetIncome}
          setTargetIncome={setTargetIncome}
          dy={dy}
          setDy={setDy}
        />

        {/* Montar carteira */}
        <section className="mb-10">
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            <DollarSign className="inline h-6 w-6 mr-2" />
            Como Montar Sua Carteira de FIIs em 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Uma carteira bem montada de FIIs precisa de diversificação entre tipos, setores e gestoras. As melhores gestoras de FIIs do Brasil em 2026 incluem Kinea, CSHG (Credit Suisse Hedging-Griffo), BTG Pactual, RBR Asset e Vinci Partners — todas com histórico longo e relatórios mensais detalhados:
          </p>
          <div className="space-y-3">
            {[
              { icon: "✅", item: "Mínimo de 8–10 FIIs para diluir risco específico de qualquer ativo individual" },
              { icon: "✅", item: "Diversifique entre tipos: Papel (50%) + Tijolo logística (30%) + Tijolo outros / Híbrido (20%)" },
              { icon: "✅", item: "Misture ao menos 3 gestoras diferentes — risco de gestão é real e subestimado" },
              { icon: "✅", item: "Prefira FIIs com liquidez diária acima de R$ 1 milhão para facilitar entrada e saída" },
              { icon: "✅", item: "Reinvista os dividendos mensais nos primeiros anos — o efeito dos juros compostos em FIIs é poderoso" },
              { icon: "✅", item: "Leia o Relatório Gerencial mensal de cada fundo — gestoras sérias publicam a cada mês com atualização de vacância, contratos e perspectivas" },
            ].map(({ icon, item }, i) => (
              <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Erros comuns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Os 5 Erros Mais Comuns ao Investir em FIIs
          </h2>
          <div className="space-y-4">
            {[
              { title: "Olhar só o Dividend Yield e ignorar o contexto", desc: "DY de 15% pode significar que a cota despencou 40% — não que o fundo está pagando mais. Sempre analise DY em conjunto com P/VP e o histórico de rendimentos, não só a distribuição do último mês." },
              { title: "Ignorar a qualidade dos imóveis e localização", desc: "Um galpão logístico triple-A em Cajamar (SP) com contrato atípico de 10 anos não tem nada a ver com um galpão de segunda linha em mercado secundário. Localização e qualidade construtiva definem o poder de negociação com inquilinos." },
              { title: "Não verificar os contratos de locação", desc: "Contratos atípicos com penalidade de rescisão igual ao aluguel restante dão segurança de renda. Fundos com contratos típicos curtos (1–3 anos) têm risco de vacância recorrente." },
              { title: "Vender na queda por pânico com fundamentos intactos", desc: "Se os imóveis são bons, os contratos são sólidos e a gestão é competente, queda no preço da cota é oportunidade de compra mais barata. Fundamentos bons + preço baixo = entrada atrativa, não saída." },
              { title: "Concentrar em 2–3 FIIs 'queridinhos' do momento", desc: "O risco específico de um único fundo pode comprometer 30%+ da carteira. Diversificação entre 8–10 fundos de setores distintos é o padrão mínimo recomendado pela CVM para investidor não qualificado." },
            ].map((item, i) => (
              <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 flex items-start gap-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resumo */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo: FIIs em 2026</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "FIIs pagam dividendos mensais isentos de IR para pessoa física investidora",
                "3 tipos: Papel (defensivo em juro alto), Tijolo (crescimento no longo prazo), Híbrido (para iniciantes)",
                "4 indicadores chave: DY, P/VP, Vacância e Liquidez — analise todos juntos, nunca isolados",
                "Logística e Papel são os setores mais atrativos em 2026; Lajes Corp. e Shoppings exigem seletividade",
                "Monte carteira com 8–10 FIIs de setores e gestoras distintas e reinvista os dividendos no início",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[hsl(var(--invest-color))]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {["FIIs", "fundos imobiliários", "dividendos", "renda passiva", "investimentos 2026", "IFIX", "CRI", "logística", "P/VP"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation category="invest" />

        <EditorialTake category="invest" title="Análise do Marcos: FIIs de tijolo voltam ao radar com perspectiva de queda de juros">
          <p>
            Os dados do Boletim Mensal de FIIs da B3 (fevereiro/2026) mostram o IFIX em recuperação consistente após o ciclo de Selic alta de 2024-2025. Com a expectativa de corte de juros pelo Copom no segundo semestre de 2026, fundos de tijolo — especialmente logística e lajes corporativas premium — tendem a se beneficiar mais que fundos de papel (CRIs indexados ao CDI/IPCA), que perdem atratividade relativa quando os juros caem.
          </p>
          <p className="mt-2">
            Segundo a Resolução CVM 175 (vigente desde outubro/2024): leia sempre o regulamento e o último Relatório Gerencial antes de comprar qualquer FII. Os indicadores fundamentais são P/VP (ideal entre 0,90 e 1,05 para tijolo), Dividend Yield anualizado (8–11% para tijolo, 11–14% para papel) e vacância física abaixo de 8%. Minha visão para 2026: <strong>prefira diversificar em 8–10 FIIs de segmentos distintos</strong> em vez de concentrar em 2–3 "queridinhos" — o risco específico de um único ativo pode comprometer toda a estratégia de renda passiva.
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "Boletim Mensal de Fundos de Investimento Imobiliário — B3",
              url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/fundos-de-investimentos/fii/",
              publisher: "B3 — Bolsa do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Resolução CVM nº 175/2022 — Fundos de Investimento (vigência out/2024)",
              url: "https://www.gov.br/cvm/pt-br/legislacao/resolucoes/resocvm175consolid.pdf",
              publisher: "Comissão de Valores Mobiliários (CVM)",
              accessedAt: "Maio 2026",
            },
            {
              title: "Tributação de Fundos de Investimento Imobiliário — Isenção de IR",
              url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
              publisher: "Receita Federal do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Clube FII — Ranking IFIX e Indicadores de Fundos Imobiliários",
              url: "https://www.clubefii.com.br/",
              publisher: "Clube FII",
              accessedAt: "Maio 2026",
            },
            {
              title: "Funds Explorer — Análise de Indicadores de FIIs (DY, P/VP, Vacância)",
              url: "https://www.fundsexplorer.com.br/",
              publisher: "Funds Explorer",
              accessedAt: "Maio 2026",
            },
            {
              title: "Lei nº 8.668/1993 — Constituição e Funcionamento dos FIIs no Brasil",
              url: "https://www.planalto.gov.br/ccivil_03/leis/L8668.htm",
              publisher: "Presidência da República / Planalto",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="fiis-2026-melhores-fundos-imobiliarios" />
        <CommentSection
          postId="fiis-2026-melhores-fundos-imobiliarios"
          postTitle="FIIs em 2026: Os Melhores Fundos Imobiliários e Como Analisar"
         category="invest" />
      </article>
    </>
  );
};

export default FIIs2026;
