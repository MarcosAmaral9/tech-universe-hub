import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, Shield, AlertTriangle,
  CheckCircle, Target, Wallet, ChevronRight, ChevronDown, ChevronUp,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/reserva-emergencia-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

/* ── FAQ Accordion ───────────────────────────────────────────── */
const faqData = [
  {
    q: "Quanto devo ter de reserva de emergência?",
    a: "A recomendação padrão é entre 3 e 12 meses de gastos mensais fixos. CLT com estabilidade: 3–6 meses. Autônomos e MEIs: 6–12 meses. Famílias com dependentes: pelo menos 6 meses.",
  },
  {
    q: "Onde guardar a reserva de emergência em 2026?",
    a: "O Tesouro Selic é a opção mais indicada: liquidez D+1, risco soberano e rendimento de ~13,25% ao ano bruto. CDBs com liquidez diária de grandes bancos também são excelentes. Evite poupança (rende menos) e qualquer investimento sem liquidez imediata.",
  },
  {
    q: "Posso usar a reserva de emergência para investir?",
    a: "Não. A reserva de emergência NÃO é investimento — é proteção. Ela deve estar em produtos com liquidez imediata e baixíssimo risco. Nunca coloque a reserva em ações, criptomoedas ou fundos sem liquidez diária.",
  },
  {
    q: "Quanto tempo leva para montar uma reserva de emergência?",
    a: "Guardando 20% da renda, uma reserva de 6 meses leva cerca de 2 anos. Com 30%, aproximadamente 1,5 anos. O importante é começar imediatamente, mesmo que com valores pequenos — consistência supera volume no início.",
  },
  {
    q: "Reserva de emergência precisa render muito?",
    a: "Não. O objetivo da reserva é preservação de capital e liquidez, não rendimento máximo. Um rendimento que pelo menos cubra a inflação já é suficiente. Em 2026, o Tesouro Selic cumpre esse papel com folga — rendendo 13,25% contra IPCA projetado de 4,3%.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-3"
      >
        <span className="font-semibold text-sm">{q}</span>
        {open
          ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────── */
const ReservaEmergencia2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "reserva-emergencia-2026-como-montar",
      "Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Reserva de Emergência 2026</span>
      </nav>

      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Planejamento · Reserva · Educação Financeira
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          58% dos brasileiros não têm <strong>reserva de emergência</strong> suficiente para
          cobrir um gasto inesperado de R$ 2.000. Este guia explica quanto guardar, onde
          investir (Tesouro Selic vs CDB), o passo a passo completo e os 5 erros que
          destroem a reserva de quem já começou.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />27 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Como montar reserva de emergência 2026 — Tesouro Selic CDB guia definitivo"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          De acordo com pesquisa do Banco Central de 2025,{" "}
          <strong>58% dos brasileiros</strong> não conseguiriam cobrir um gasto inesperado
          de R$ 2.000 sem recorrer a empréstimos. A <strong>reserva de emergência</strong>{" "}
          é o alicerce de qualquer planejamento financeiro — e em 2026, montá-la é mais
          acessível do que nunca com o Tesouro Selic rendendo acima de 13% ao ano.
        </p>

        <p>
          Uma reserva de emergência não é luxo: é a diferença entre enfrentar um
          imprevisto com tranquilidade ou cair em dívidas com juros de cartão de crédito
          — atualmente em <strong>431% ao ano</strong> segundo o Banco Central. Sem ela,
          qualquer imprevisto se transforma em dívida cara.
        </p>

        <AdLeaderboard className="my-8" />

        {/* Quanto guardar */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-invest" />
          Quanto Guardar: A Regra dos Meses
        </h2>
        <p>
          O valor ideal da reserva depende da sua estabilidade de renda e
          responsabilidades. A fórmula é:{" "}
          <strong>gastos fixos mensais × número de meses de proteção</strong>. Gastos
          variáveis (lazer, roupas, viagens) <em>não entram</em> no cálculo — só o que é
          obrigatório: aluguel, alimentação, transporte, saúde, educação, contas.
        </p>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Shield className="h-7 w-7 text-green-400" />,
              title: "CLT Estável",
              color: "border-green-500/30 bg-green-500/5",
              months: "3–6 meses",
              example: "Gastos de R$ 4.000/mês → Reserva de R$ 12.000 a R$ 24.000",
              detalhe: "Risco de renda é menor: FGTS e seguro-desemprego oferecem colchão extra.",
            },
            {
              icon: <Wallet className="h-7 w-7 text-amber-400" />,
              title: "Autônomo / MEI",
              color: "border-amber-500/30 bg-amber-500/5",
              months: "6–12 meses",
              example: "Gastos de R$ 4.000/mês → Reserva de R$ 24.000 a R$ 48.000",
              detalhe: "Renda irregular exige proteção maior. Sem FGTS ou seguro-desemprego.",
            },
            {
              icon: <AlertTriangle className="h-7 w-7 text-red-400" />,
              title: "Família com Dependentes",
              color: "border-red-500/30 bg-red-500/5",
              months: "6–12 meses",
              example: "Gastos de R$ 6.000/mês → Reserva de R$ 36.000 a R$ 72.000",
              detalhe: "Imprevistos de saúde e educação dos dependentes elevam o risco total.",
            },
          ].map(({ icon, title, color, months, example, detalhe }) => (
            <div key={title} className={`rounded-xl border p-5 ${color}`}>
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold text-base mb-1">{title}</h3>
              <p className="text-sm font-semibold text-[hsl(var(--invest-color))] mb-2">{months}</p>
              <p className="text-xs text-muted-foreground mb-2">{example}</p>
              <p className="text-xs text-muted-foreground italic">{detalhe}</p>
            </div>
          ))}
        </div>

        {/* Onde investir */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Onde Investir a Reserva em 2026
        </h2>
        <p>
          A reserva de emergência tem{" "}
          <strong>três requisitos inegociáveis</strong>: liquidez imediata, baixo risco e
          rendimento acima da inflação. Com a Selic a 13,25% em março de 2026, as melhores
          opções são:
        </p>

        <h3 className="text-xl font-bold mt-6">1. Tesouro Selic (Primeira Escolha)</h3>
        <ul>
          <li>Rendimento: ~13,25% ao ano bruto (~11,0% líquido após IR)</li>
          <li>Liquidez: D+1 — resgate disponível em 1 dia útil</li>
          <li>Risco: soberano (governo federal — o menor risco disponível no Brasil)</li>
          <li>Investimento mínimo: ~R$ 30 (fração de título)</li>
          <li>Sem IOF após 30 dias; sem taxa de custódia até R$ 10.000 (desde 2024)</li>
          <li><strong>Indicado para:</strong> a maior parte da reserva — segurança máxima</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">2. CDB com Liquidez Diária (100%+ CDI)</h3>
        <ul>
          <li>Rendimento: ~13,15% ao ano bruto a 100% CDI</li>
          <li>Liquidez: D+0 em muitos bancos digitais — disponível inclusive fins de semana</li>
          <li>Risco: banco emissor (FGC até R$ 250 mil por CPF/instituição)</li>
          <li>Disponível: Nubank, Inter, BTG, C6, PagBank, Picpay</li>
          <li><strong>Indicado para:</strong> parte da reserva que pode precisar no final de semana</li>
        </ul>

        <AdRectangle className="my-8" />

        <div className="not-prose my-6 p-5 bg-destructive/10 border border-destructive/30 rounded-xl">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-foreground block mb-2">Onde NÃO colocar a reserva de emergência:</strong>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>❌ Ações, ETFs ou fundos de renda variável — volatilidade pode forçar resgate no pior momento</li>
                <li>❌ Criptomoedas — volatilidade extrema, pode cair 40% quando você mais precisar</li>
                <li>❌ Fundos com prazo de resgate superior a D+1 ou com carência</li>
                <li>❌ CDBs sem liquidez diária — dinheiro travado em emergências é dinheiro inútil</li>
                <li>❌ Poupança — rende menos que inflação em muitos cenários históricos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Passo a Passo */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Passo a Passo Para Montar a Sua
        </h2>
        <ol>
          <li>
            <strong>Calcule seus gastos fixos mensais:</strong> some aluguel, contas,
            alimentação básica, transporte, saúde e educação. Ignore gastos variáveis
            — lazer, streaming e roupas não entram no cálculo da reserva.
          </li>
          <li>
            <strong>Defina o número de meses:</strong> use o perfil acima como guia
            (CLT: 3–6 meses; autônomo/família: 6–12 meses).
          </li>
          <li>
            <strong>Abra conta em corretora ou banco digital:</strong> Nu Invest, XP,
            BTG Pactual, Inter, C6 — todas oferecem Tesouro Selic e CDBs com liquidez
            diária sem taxa de corretagem.
          </li>
          <li>
            <strong>Configure aportes automáticos:</strong> defina um valor fixo mensal
            via débito automático ou Pix agendado. Comece com o que puder — R$ 100,
            R$ 200, R$ 500. Consistência supera volume nos primeiros meses.
          </li>
          <li>
            <strong>Mantenha a reserva intocável:</strong> a reserva só deve ser usada
            para emergências reais — perda de emprego, problema grave de saúde, conserto
            urgente de carro ou imóvel. Compras planejadas, viagens e presentes
            <strong> não são emergências</strong>.
          </li>
        </ol>

        <AdInArticle />

        {/* Simulação */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wallet className="h-7 w-7 text-invest" />
          Simulação: Quanto Tempo Leva Para Montar a Reserva?
        </h2>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="p-3 text-left font-semibold">Renda Mensal</th>
                <th className="p-3 text-left font-semibold">Gastos Fixos</th>
                <th className="p-3 text-left font-semibold">Aporte (20% renda)</th>
                <th className="p-3 text-left font-semibold">Meta (6 meses)</th>
                <th className="p-3 text-left font-semibold">Tempo Estimado</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["R$ 3.000", "R$ 2.500", "R$ 600",   "R$ 15.000", "~23 meses"],
                ["R$ 5.000", "R$ 4.000", "R$ 1.000",  "R$ 24.000", "~22 meses"],
                ["R$ 8.000", "R$ 5.500", "R$ 1.600",  "R$ 33.000", "~19 meses"],
                ["R$ 12.000","R$ 7.000", "R$ 2.400",  "R$ 42.000", "~16 meses"],
              ].map(([renda, gastos, aporte, meta, tempo]) => (
                <tr key={renda} className="border-t border-border hover:bg-muted/20">
                  <td className="p-3 font-medium">{renda}</td>
                  <td className="p-3 text-muted-foreground">{gastos}</td>
                  <td className="p-3 text-[hsl(var(--invest-color))] font-bold">{aporte}</td>
                  <td className="p-3">{meta}</td>
                  <td className="p-3 font-bold">{tempo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            * Simulação com Tesouro Selic a 13,25% ao ano, IR de 17,5% (prazo de 1 ano), aportes mensais constantes.
          </p>
        </div>

        {/* 5 Erros */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Os 5 Erros Mais Comuns na Reserva de Emergência
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { n: "1", titulo: "Esperar 'sobrar' dinheiro", desc: "A reserva deve ser tratada como gasto fixo obrigatório, não como o que sobra no fim do mês. Configure transferência automática no dia do pagamento." },
            { n: "2", titulo: "Usar a reserva para compras planejadas", desc: "Celular novo, viagem ou presente de aniversário não são emergências. Crie um fundo separado para objetivos planejados — a reserva é sagrada." },
            { n: "3", titulo: "Colocar tudo em um só produto", desc: "Distribua entre Tesouro Selic (maioria) e CDB de liquidez diária em banco digital (uma parte). Ter dois canais evita problemas técnicos em momentos críticos." },
            { n: "4", titulo: "Não repor após usar", desc: "Se precisou da reserva, recomponha antes de qualquer outro investimento. Uma reserva incompleta é pouco melhor que nenhuma." },
            { n: "5", titulo: "Buscar rendimento alto na reserva", desc: "Aceite o rendimento do Tesouro Selic e durma tranquilo. Quem tenta espremer rendimento extra coloca a reserva em produtos inadequados para essa finalidade." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
              <span className="text-2xl font-black text-destructive/40 shrink-0 w-6 text-center">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Perguntas Frequentes sobre Reserva de Emergência
        </h2>
        <div className="not-prose space-y-3 my-6">
          {faqData.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
        </div>

        {/* Conclusão */}
        <h2>Conclusão: Comece Hoje, Mesmo Que Com Pouco</h2>
        <p>
          A reserva de emergência é o primeiro e mais importante passo de qualquer
          planejamento financeiro. Antes de investir em ações, FIIs, cripto ou qualquer
          outro ativo, construa sua rede de segurança. Em 2026, com o Tesouro Selic
          rendendo mais de 13% ao ano, sua reserva cresce enquanto te protege.
        </p>
        <p>
          Comece agora, mesmo que com R$ 50 por mês. O hábito de poupar consistentemente
          é mais valioso no longo prazo do que o valor inicial. Em 12–24 meses, você terá
          a liberdade de investir em ativos de maior risco <em>porque sabe que sua base
          está protegida</em>.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Já tem sua reserva montada? 🛡️</h3>
          <p className="text-muted-foreground">
            Conta nos comentários quanto tempo levou para construir a sua!
          </p>
        </div>

        <p className="text-xs text-muted-foreground mt-6 italic">
          Conteúdo informativo. Não constitui recomendação de investimento. Consulte um
          profissional certificado antes de tomar decisões financeiras.
        </p>
      </div>

      <EditorialTake
        category="invest"
        title="Análise do Marcos: reserva de emergência em corretora separada — a dica que mais funciona"
      >
        <p>
          Recomendações consensuais da ANBIMA, CVM e Banco Central: reserva de 6–12 meses
          de despesas essenciais em ativos com liquidez D+0 ou D+1 e baixo risco. Para
          autônomos e PJ, a faixa recomendada sobe para 12 meses dado o risco de
          interrupção de renda. Dados do BCB mostram que 431% ao ano é a taxa média do
          rotativo do cartão de crédito — o custo real de não ter reserva.
        </p>
        <p className="mt-2">
          Minha recomendação prática:{" "}
          <strong>60% em Tesouro Selic e 40% em CDB de liquidez diária</strong> em banco
          digital confiável (Inter, BTG, Nubank). O Tesouro tem risco soberano; o CDB está
          disponível em fins de semana quando o Tesouro fecha. Manter a reserva em uma
          corretora <em>separada</em> da conta corrente é a dica que mais funciona na
          prática — longe dos olhos, longe do impulso de gastar. Nunca misture reserva com
          investimentos de longo prazo no mesmo produto: a segregação mental e física é
          fundamental para manter a reserva intocável quando o imprevisto aparecer.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "Cidadania Financeira — Pesquisa sobre Reservas e Endividamento das Famílias",
            url: "https://www.bcb.gov.br/cidadaniafinanceira",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "CVM — Portal do Investidor: Planejamento Financeiro e Reserva",
            url: "https://www.investidor.gov.br/",
            publisher: "Comissão de Valores Mobiliários (CVM)",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tesouro Direto — Tesouro Selic: Liquidez e Características",
            url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro/tesouro-selic.htm",
            publisher: "Tesouro Nacional / Tesouro Direto",
            accessedAt: "Maio 2026",
          },
          {
            title: "FGC — Garantia de Depósitos e CDBs: Limites e Funcionamento",
            url: "https://www.fgc.org.br/garantia-fgc/sobre-a-garantia-fgc",
            publisher: "Fundo Garantidor de Créditos (FGC)",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Educação Financeira: Como Investir com Segurança",
            url: "https://www.anbima.com.br/pt_br/educar/",
            publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
            accessedAt: "Maio 2026",
          },
          {
            title: "Banco Central — Nota de Crédito: Taxas do Rotativo do Cartão de Crédito",
            url: "https://www.bcb.gov.br/estatisticas/notacreditohabitual",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="reserva-emergencia-2026-como-montar" />
      <CommentSection
        postId="reserva-emergencia-2026-como-montar"
        postTitle="Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo"
       category="invest" />
    </article>
  );
};

export default ReservaEmergencia2026;
