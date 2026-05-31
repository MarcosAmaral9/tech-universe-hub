import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, TrendingUp, Shield,
  AlertTriangle, CheckCircle, BarChart3,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/poupanca-vs-cdb-tesouro-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const PoupancaVsCDBTesouro2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "poupanca-vs-cdb-tesouro-2026",
      "Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Renda Fixa · Comparativo · Investimentos 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Com a <strong>Selic a 13,25% ao ano</strong> em 2026, a escolha entre{" "}
          <strong>poupança, CDB e Tesouro Direto</strong> tem impacto real no seu bolso.
          Neste comparativo com simulação de R$ 10.000 em 12 meses, mostramos exatamente
          quanto cada produto rende, qual é mais seguro e qual escolher para cada objetivo.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />27 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Poupança vs CDB vs Tesouro Direto 2026 — comparativo de rendimento"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com a Selic em <strong>13,25% ao ano</strong> em março de 2026 e o Copom
          sinalizando cortes graduais, a renda fixa continua sendo protagonista. Mas entre
          <strong> Poupança, CDB e Tesouro Direto</strong>, qual realmente entrega mais
          rendimento líquido? Neste comparativo, usamos dados reais para te ajudar a decidir
          sem achismo.
        </p>

        <p>
          A escolha entre esses três produtos depende do seu objetivo, prazo e perfil de
          risco. Nenhum é universalmente "melhor" — cada um tem vantagens específicas que
          se encaixam em cenários diferentes. O que não existe mais é justificativa para
          deixar dinheiro na poupança por hábito quando existem alternativas melhores com
          a mesma segurança.
        </p>

        <AdLeaderboard className="my-8" />

        {/* Como cada um funciona */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Como Cada Um Funciona em 2026
        </h2>

        <h3 className="text-xl font-bold mt-6">🏦 Poupança</h3>
        <p>
          A caderneta de poupança é o investimento mais popular do Brasil, com mais de{" "}
          <strong>170 milhões de contas</strong> segundo o Banco Central. Quando a Selic
          está acima de 8,5% ao ano (caso atual), a poupança rende{" "}
          <strong>0,5% ao mês + Taxa Referencial (TR)</strong>, o que equivale a cerca
          de 6,17% ao ano + TR.
        </p>
        <ul>
          <li><strong>Rendimento atual:</strong> ~9,28% ao ano (com TR)</li>
          <li><strong>Tributação:</strong> isenta de IR para pessoa física</li>
          <li><strong>Liquidez:</strong> imediata, mas com "aniversário" — rendimento creditado a cada 30 dias</li>
          <li><strong>Garantia:</strong> FGC até R$ 250 mil por CPF/instituição</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">📄 CDB (Certificado de Depósito Bancário)</h3>
        <AdInArticle />
        <p>
          CDBs são títulos emitidos por bancos. Em 2026, é comum encontrar CDBs pagando
          entre <strong>100% e 120% do CDI</strong> em bancos médios, e até 130% em
          ofertas promocionais de fintechs. O CDI acompanha de perto a Selic — com a Selic
          a 13,25%, o CDI fica em torno de 13,15%.
        </p>
        <ul>
          <li><strong>Rendimento atual (100% CDI):</strong> ~13,15% ao ano (bruto)</li>
          <li><strong>Tributação:</strong> IR regressivo — de 22,5% (até 180 dias) a 15% (acima de 720 dias)</li>
          <li><strong>Liquidez:</strong> varia — pode ter liquidez diária ou prazo fixo com carência</li>
          <li><strong>Garantia:</strong> FGC até R$ 250 mil por CPF/instituição</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">🏛️ Tesouro Direto</h3>
        <p>
          Títulos públicos emitidos pelo governo federal. O{" "}
          <strong>Tesouro Selic</strong> é o mais indicado para reserva de emergência e
          objetivos de curto prazo, pois acompanha a taxa Selic e tem liquidez D+1. Desde
          2024, a taxa de custódia da B3 é zero para investimentos até R$ 10 mil por
          pessoa.
        </p>
        <ul>
          <li><strong>Rendimento (Tesouro Selic):</strong> ~13,25% ao ano (bruto)</li>
          <li><strong>Tributação:</strong> IR regressivo, igual ao CDB</li>
          <li><strong>Liquidez:</strong> D+1 (resgate em 1 dia útil) — algumas corretoras oferecem D+0</li>
          <li><strong>Garantia:</strong> governo federal (risco soberano — o menor do país)</li>
        </ul>

        <AdRectangle className="my-8" />

        {/* Simulação */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Simulação: R$ 10.000 em 12 Meses — Quem Ganha?
        </h2>

        <div className="not-prose my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-secondary">
                  <th className="p-3 text-left font-semibold">Produto</th>
                  <th className="p-3 text-left font-semibold">Rendimento Bruto</th>
                  <th className="p-3 text-left font-semibold">IR</th>
                  <th className="p-3 text-left font-semibold">Rendimento Líquido</th>
                  <th className="p-3 text-left font-semibold">Valor Final</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Poupança",          "R$ 928",   "Isento",           "R$ 928",   "R$ 10.928", false],
                  ["CDB 100% CDI",      "R$ 1.315", "R$ 230 (17,5%)",   "R$ 1.085", "R$ 11.085", false],
                  ["Tesouro Selic",     "R$ 1.325", "R$ 232 (17,5%)",   "R$ 1.093", "R$ 11.093", false],
                  ["CDB 120% CDI",      "R$ 1.578", "R$ 276 (17,5%)",   "R$ 1.302", "R$ 11.302", true ],
                ].map(([prod, bruto, ir, liq, final, destaque]) => (
                  <tr key={prod as string} className={`border-t border-border ${destaque ? "bg-invest/5" : ""}`}>
                    <td className="p-3 font-medium">{prod}</td>
                    <td className="p-3">{bruto}</td>
                    <td className={`p-3 text-sm ${ir === "Isento" ? "text-green-500 font-bold" : "text-red-400"}`}>{ir}</td>
                    <td className="p-3">{liq}</td>
                    <td className={`p-3 font-bold ${destaque ? "text-invest" : ""}`}>{final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            * Simulação com Selic a 13,25% e CDI a 13,15%. IR calculado na alíquota de 17,5% (entre 361 e 720 dias). Valores aproximados para fins didáticos.
          </p>
        </div>

        <div className="not-prose my-6 p-4 bg-invest/10 border border-invest/30 rounded-xl flex gap-3">
          <TrendingUp className="h-5 w-5 text-invest shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Resultado:</strong> Mesmo pagando IR, o
            CDB a 100% do CDI rende <strong>17% mais</strong> que a poupança em 12 meses.
            Um CDB a 120% do CDI rende <strong>40% mais</strong>. A poupança só vence o
            CDB se os juros caírem abaixo de 8,5% ao ano — cenário que o Focus/BCB não
            projeta para 2026.
          </p>
        </div>

        {/* Segurança */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Segurança: Qual é o Mais Seguro?
        </h2>
        <p>
          Todos os três são considerados investimentos de baixo risco, mas há diferenças
          importantes na natureza da garantia:
        </p>
        <ol>
          <li>
            <strong>Tesouro Direto</strong> — risco soberano (governo federal). É o
            investimento mais seguro do Brasil. Mesmo em crises, o governo pode emitir
            moeda para honrar seus títulos. Sem limite de cobertura.
          </li>
          <li>
            <strong>Poupança e CDB</strong> — protegidos pelo FGC até R$ 250 mil por CPF
            por instituição (limite global de R$ 1 milhão a cada 4 anos). Se o banco
            quebrar, o FGC reembolsa dentro de 1 mês.
          </li>
        </ol>
        <p>
          Na prática, para valores abaixo de R$ 250 mil por banco, os três são igualmente
          seguros para fins práticos. Acima desse limite, o Tesouro Direto se destaca por
          não ter limite de cobertura.
        </p>

        <AdLeaderboard className="my-8" />

        {/* Recomendações por objetivo */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Qual Escolher? Recomendações Práticas por Objetivo
        </h2>

        <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <Shield className="h-7 w-7 text-blue-400" />,
              title: "Reserva de Emergência",
              color: "border-blue-500/30 bg-blue-500/5",
              rec: "Tesouro Selic",
              reason: "Liquidez D+1 (ou D+0 em algumas corretoras), risco soberano, sem IOF após 30 dias e taxa de custódia zero até R$ 10 mil. A melhor combinação de segurança e rendimento para dinheiro que pode precisar a qualquer momento.",
            },
            {
              icon: <TrendingUp className="h-7 w-7 text-green-400" />,
              title: "Médio Prazo (1–3 anos)",
              color: "border-green-500/30 bg-green-500/5",
              rec: "CDB 110–120% CDI",
              reason: "CDBs de bancos médios com FGC oferecem taxas acima do CDI. Com prazo acima de 720 dias, o IR cai para 15%, maximizando o retorno líquido. Supera o Tesouro Selic em rentabilidade nessa janela.",
            },
            {
              icon: <AlertTriangle className="h-7 w-7 text-amber-400" />,
              title: "Curtíssimo Prazo",
              color: "border-amber-500/30 bg-amber-500/5",
              rec: "CDB com liquidez diária",
              reason: "Para dinheiro que será usado em dias ou semanas. CDBs de grandes bancos com liquidez diária a 100% CDI rendem mais que a poupança mesmo no curtíssimo prazo — sem perder o \"aniversário\" da poupança.",
            },
          ].map(({ icon, title, color, rec, reason }) => (
            <div key={title} className={`rounded-xl border p-5 ${color}`}>
              <div className="mb-3">{icon}</div>
              <h3 className="font-bold text-base mb-1">{title}</h3>
              <p className="text-sm font-semibold text-invest mb-2">→ {rec}</p>
              <p className="text-sm text-muted-foreground">{reason}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Perguntas Frequentes
        </h2>
        <div className="not-prose space-y-3">
          {[
            {
              q: "Poupança ainda vale a pena em 2026?",
              a: "A poupança rende 70% da Selic + TR quando a Selic está acima de 8,5%. Em março de 2026, com a Selic a 13,25%, a poupança rende cerca de 9,28% ao ano — menos que CDBs e Tesouro Direto que oferecem 100% do CDI ou mais, mesmo após descontar o IR.",
            },
            {
              q: "Qual a diferença entre CDB e Tesouro Direto?",
              a: "CDBs são títulos emitidos por bancos privados, cobertos pelo FGC até R$ 250 mil. O Tesouro Direto emite títulos do governo federal, considerados os mais seguros do país. CDBs costumam pagar mais, mas o Tesouro tem menor risco de crédito e sem limite de cobertura.",
            },
            {
              q: "CDB tem garantia do FGC?",
              a: "Sim. O Fundo Garantidor de Créditos (FGC) protege investimentos em CDBs até R$ 250 mil por CPF por instituição financeira, com limite global de R$ 1 milhão a cada 4 anos. Em caso de intervenção ou liquidação do banco, o FGC paga em até 1 mês.",
            },
            {
              q: "Qual o melhor investimento para reserva de emergência?",
              a: "O Tesouro Selic é a opção mais indicada por ter liquidez D+1, risco soberano e não ter IOF após 30 dias. CDBs com liquidez diária de bancos sólidos acima de 100% CDI também são uma excelente alternativa — especialmente em plataformas que oferecem resgate instantâneo.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">{q}</h3>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        {/* Erros comuns */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          4 Erros Comuns ao Escolher Renda Fixa
        </h2>
        <ol>
          <li>
            <strong>Deixar tudo na poupança por comodidade:</strong> a diferença de
            rendimento acumula significativamente ao longo dos anos. R$ 50.000 na poupança
            por 5 anos rendem cerca de R$ 18.500 menos que no Tesouro Selic — quase um
            salário mínimo a mais perdido por inércia.
          </li>
          <li>
            <strong>Ignorar o IR na comparação:</strong> sempre compare rendimentos
            líquidos, não brutos. A poupança é isenta, mas mesmo assim perde para CDB e
            Tesouro após o desconto do IR em prazos acima de 6 meses.
          </li>
          <li>
            <strong>Não diversificar entre emissores de CDB:</strong> se investir em CDBs
            de bancos menores, distribua entre diferentes instituições para maximizar a
            proteção do FGC (R$ 250 mil por banco).
          </li>
          <li>
            <strong>Confundir Tesouro Selic com Tesouro Prefixado:</strong> o Tesouro Selic
            tem volatilidade mínima e é ideal para reserva. O Prefixado e o IPCA+ podem ter
            variação negativa no curto prazo por marcação a mercado — não são para liquidez.
          </li>
        </ol>

        {/* Conclusão */}
        <h2>Conclusão: Não Existe Justificativa Para Poupança em 2026</h2>
        <p>
          Com a Selic em 13,25%, não há justificativa financeira para manter grandes valores
          na poupança. O Tesouro Selic e CDBs de liquidez diária oferecem rendimentos
          superiores com segurança equivalente. A poupança só faz sentido para valores muito
          pequenos ou como conta operacional do dia a dia — e mesmo assim, existem contas
          remuneradas que pagam mais.
        </p>
        <p>
          A estratégia ideal combina os três conforme o objetivo: poupança (ou conta
          remunerada) para o dinheiro do mês, Tesouro Selic para a reserva de emergência e
          CDBs acima de 110% CDI para objetivos de médio prazo de 1 a 3 anos.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Onde você guarda seu dinheiro?</h3>
          <p className="text-muted-foreground">
            Já migrou da poupança para renda fixa? Conta nos comentários! 💰
          </p>
        </div>

        <p className="text-xs text-muted-foreground mt-6 italic">
          Conteúdo informativo. Não constitui recomendação de investimento. Consulte um
          profissional certificado antes de tomar decisões financeiras.
        </p>
      </div>

      <EditorialTake
        category="invest"
        title="Análise do Marcos: poupança por hábito tem custo real que a maioria ignora"
      >
        <p>
          Comparativo válido em maio/2026 com Selic em queda gradual segundo Atas do Copom
          (Banco Central): poupança rende 70% da Selic + TR quando Selic ≤ 8,5% a.a., ou
          0,5% a.m. + TR quando Selic acima de 8,5% a.a. CDB pós-fixado de bancos médios
          paga 100–120% do CDI; Tesouro Selic 2030 oferece rentabilidade próxima a 100% da
          Selic líquida de custódia (0% até R$ 10 mil/ano desde 2024).
        </p>
        <p className="mt-2">
          Minha análise: em qualquer cenário de Selic acima de 8% a.a., poupança perde para
          CDB de banco médio com FGC. O custo real da "preguiça financeira" em R$ 50.000
          mantidos na poupança por 5 anos chega a R$ 18.500 a menos no bolso — valor que
          teria bastado uma única migração para o Tesouro Selic para evitar. Para reserva de
          emergência, <strong>Tesouro Selic é a opção mais líquida e segura</strong>. CDB
          faz sentido para prazo médio (1–3 anos) buscando 110%+ do CDI. Nunca deixe
          dinheiro na poupança "por hábito".
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "Histórico da Taxa Selic e Decisões do Copom",
            url: "https://www.bcb.gov.br/controleinflacao/historicotaxasjuros",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tesouro Direto — Tesouro Selic: Características e Rendimento",
            url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro/tesouro-selic.htm",
            publisher: "Tesouro Nacional / Tesouro Direto",
            accessedAt: "Maio 2026",
          },
          {
            title: "FGC — Fundo Garantidor de Créditos: Cobertura de Depósitos",
            url: "https://www.fgc.org.br/garantia-fgc/sobre-a-garantia-fgc",
            publisher: "Fundo Garantidor de Créditos (FGC)",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tributação de Aplicações Financeiras de Renda Fixa — Tabela Regressiva",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Guia de Educação Financeira: Renda Fixa",
            url: "https://www.anbima.com.br/pt_br/educar/",
            publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
            accessedAt: "Maio 2026",
          },
          {
            title: "Resolução CMN 4.860/2020 — Regras de Remuneração da Poupança",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/poupanca",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="poupanca-vs-cdb-tesouro-2026" />
      <CommentSection postId="poupanca-vs-cdb-tesouro-2026" postTitle="Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?" />
    </article>
  );
};

export default PoupancaVsCDBTesouro2026;
