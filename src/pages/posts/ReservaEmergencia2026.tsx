import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Shield, AlertTriangle, CheckCircle, Target, Wallet } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/reserva-emergencia-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const faqData = [
  { q: "Quanto devo ter de reserva de emergência?", a: "A recomendação padrão é entre 3 e 12 meses de gastos mensais fixos. CLT com estabilidade: 3-6 meses. Autônomos e MEIs: 6-12 meses. Famílias com dependentes: pelo menos 6 meses." },
  { q: "Onde guardar a reserva de emergência em 2026?", a: "O Tesouro Selic é a opção mais indicada: liquidez D+1, risco soberano e rendimento de 13,25% ao ano bruto. CDBs com liquidez diária de grandes bancos também servem. Evite poupança (rende menos) e investimentos sem liquidez." },
  { q: "Posso usar a reserva de emergência para investir?", a: "Não. A reserva de emergência NÃO é investimento — é proteção. Ela deve estar em produtos com liquidez imediata e baixíssimo risco. Nunca coloque a reserva em ações, criptomoedas ou fundos sem liquidez diária." },
  { q: "Quanto tempo leva para montar uma reserva de emergência?", a: "Depende do seu percentual de poupança. Guardando 20% da renda, uma reserva de 6 meses leva cerca de 2,5 anos. Com 30%, cerca de 1,7 anos. O importante é começar, mesmo que com valores pequenos." },
  { q: "Reserva de emergência precisa render muito?", a: "Não. O objetivo da reserva é preservação de capital e liquidez, não rendimento máximo. Um rendimento que pelo menos cubra a inflação já é suficiente. Em 2026, o Tesouro Selic cumpre esse papel com folga." },
];

const ReservaEmergencia2026 = () => {
  useEffect(() => {
    trackArticleRead("reserva-emergencia-2026-como-montar", "Como Montar Sua Reserva de Emergência em 2026", "invest");
  }, []);

  return (
    <>
      <DynamicSEO
        title="Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo"
        description="Guia completo para montar sua reserva de emergência em 2026. Quanto guardar, onde investir, quanto tempo leva e os erros mais comuns. Com simulações práticas."
        keywords="reserva de emergência, como montar reserva, quanto guardar, tesouro selic reserva, emergência financeira 2026, planejamento financeiro, fundo de emergência"
        url="https://viciocode.com/post/reserva-emergencia-2026-como-montar"
        image="https://viciocode.com/assets/reserva-emergencia-2026.webp"
        type="article"
        faq={faqData}
      />
      <article className="container py-8 max-w-4xl mx-auto">
        <BackNavigation category="invest" />
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Planejamento</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Como Montar Sua Reserva de Emergência em 2026: Guia Definitivo
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />27 de Março, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />11 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img src={heroImg} alt="Como montar reserva de emergência 2026" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            De acordo com pesquisa do Banco Central de 2025, <strong>58% dos brasileiros</strong> não conseguiriam cobrir um gasto inesperado de R$ 2.000 sem recorrer a empréstimos. A reserva de emergência é o alicerce de qualquer planejamento financeiro — e em 2026, montá-la é mais acessível do que nunca.
          </p>

          <p>
            Uma reserva de emergência não é um luxo: é a diferença entre enfrentar um imprevisto com tranquilidade ou cair em dívidas com juros de cartão de crédito (atualmente em <strong>431% ao ano</strong> segundo o Banco Central).
          </p>

          <AdLeaderboard className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <Target className="h-7 w-7 text-invest" />
            Quanto Guardar: A Regra dos Meses
          </h2>
          <p>
            O valor ideal da reserva depende da sua estabilidade de renda e responsabilidades financeiras. A fórmula é simples: <strong>gastos fixos mensais × número de meses de proteção</strong>.
          </p>

          <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Shield className="h-7 w-7 text-green-400" />,
                title: "CLT Estável",
                color: "border-green-500/30 bg-green-500/5",
                months: "3-6 meses",
                example: "Gastos de R$ 4.000/mês → Reserva de R$ 12.000 a R$ 24.000",
              },
              {
                icon: <Wallet className="h-7 w-7 text-amber-400" />,
                title: "Autônomo / MEI",
                color: "border-amber-500/30 bg-amber-500/5",
                months: "6-12 meses",
                example: "Gastos de R$ 4.000/mês → Reserva de R$ 24.000 a R$ 48.000",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-red-400" />,
                title: "Família com Dependentes",
                color: "border-red-500/30 bg-red-500/5",
                months: "6-12 meses",
                example: "Gastos de R$ 6.000/mês → Reserva de R$ 36.000 a R$ 72.000",
              },
            ].map(({ icon, title, color, months, example }) => (
              <div key={title} className={`rounded-xl border p-5 ${color}`}>
                <div className="mb-3">{icon}</div>
                <h3 className="font-bold text-base mb-1">{title}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{months}</p>
                <p className="text-xs text-muted-foreground">{example}</p>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <Shield className="h-7 w-7 text-invest" />
            Onde Investir a Reserva em 2026
          </h2>
          <p>
            A reserva de emergência tem <strong>três requisitos inegociáveis</strong>: liquidez imediata, baixo risco e rendimento acima da inflação. Com a Selic a 13,25% em março de 2026, as melhores opções são:
          </p>

          <h3 className="text-xl font-bold mt-6">1. Tesouro Selic (Recomendado)</h3>
          <ul>
            <li>Rendimento: ~13,25% ao ano (bruto)</li>
            <li>Liquidez: D+1 (resgate em 1 dia útil)</li>
            <li>Risco: soberano (governo federal)</li>
            <li>Investimento mínimo: ~R$ 30</li>
            <li>Isento de IOF após 30 dias</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">2. CDB com Liquidez Diária (100%+ CDI)</h3>
          <ul>
            <li>Rendimento: ~13,15% ao ano (bruto, a 100% CDI)</li>
            <li>Liquidez: D+0 em muitos bancos digitais</li>
            <li>Risco: banco emissor (protegido pelo FGC até R$ 250 mil)</li>
            <li>Disponível em: Nubank, Inter, BTG, C6, PagBank</li>
          </ul>

          <AdRectangle className="my-8" />

          <div className="not-prose my-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Onde NÃO colocar a reserva:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Ações, ETFs ou fundos de renda variável (volatilidade)</li>
                <li>Criptomoedas (volatilidade extrema)</li>
                <li>Fundos com prazo de resgate superior a D+1</li>
                <li>CDBs sem liquidez diária</li>
                <li>Poupança (rende menos que a inflação em muitos cenários)</li>
              </ul>
            </div>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <CheckCircle className="h-7 w-7 text-invest" />
            Passo a Passo Para Montar a Sua
          </h2>
          <ol>
            <li>
              <strong>Calcule seus gastos fixos mensais:</strong> some aluguel, contas, alimentação, transporte, saúde e educação. Ignore gastos variáveis como lazer e compras supérfluas.
            </li>
            <li>
              <strong>Defina o número de meses:</strong> com base no seu perfil (CLT, autônomo, família).
            </li>
            <li>
              <strong>Abra uma conta em corretora:</strong> Nu Invest, XP, BTG Pactual, Inter — todas oferecem Tesouro Selic e CDBs com liquidez diária sem taxa.
            </li>
            <li>
              <strong>Configure aportes automáticos:</strong> defina um valor fixo mensal via débito automático ou Pix agendado. Comece com o que puder — R$ 100, R$ 200, R$ 500. O importante é a consistência.
            </li>
            <li>
              <strong>Não toque na reserva:</strong> a reserva só deve ser usada para emergências reais — perda de emprego, problema de saúde, conserto urgente. Compras planejadas não são emergências.
            </li>
          </ol>

          <AdLeaderboard className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <Wallet className="h-7 w-7 text-invest" />
            Simulação: Quanto Tempo Leva?
          </h2>

          <div className="not-prose my-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-3 text-left font-semibold">Renda Mensal</th>
                    <th className="p-3 text-left font-semibold">Gastos Fixos</th>
                    <th className="p-3 text-left font-semibold">Aporte Mensal (20%)</th>
                    <th className="p-3 text-left font-semibold">Meta (6 meses)</th>
                    <th className="p-3 text-left font-semibold">Tempo Estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">R$ 3.000</td>
                    <td className="p-3">R$ 2.500</td>
                    <td className="p-3">R$ 600</td>
                    <td className="p-3">R$ 15.000</td>
                    <td className="p-3 font-bold">~23 meses</td>
                  </tr>
                  <tr>
                    <td className="p-3">R$ 5.000</td>
                    <td className="p-3">R$ 4.000</td>
                    <td className="p-3">R$ 1.000</td>
                    <td className="p-3">R$ 24.000</td>
                    <td className="p-3 font-bold">~22 meses</td>
                  </tr>
                  <tr>
                    <td className="p-3">R$ 8.000</td>
                    <td className="p-3">R$ 5.500</td>
                    <td className="p-3">R$ 1.600</td>
                    <td className="p-3">R$ 33.000</td>
                    <td className="p-3 font-bold">~19 meses</td>
                  </tr>
                  <tr>
                    <td className="p-3">R$ 12.000</td>
                    <td className="p-3">R$ 7.000</td>
                    <td className="p-3">R$ 2.400</td>
                    <td className="p-3">R$ 42.000</td>
                    <td className="p-3 font-bold">~16 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              * Simulação considerando rendimento do Tesouro Selic a 13,25% ao ano, com IR de 17,5%. Aportes mensais constantes.
            </p>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <AlertTriangle className="h-7 w-7 text-invest" />
            Os 5 Erros Mais Comuns
          </h2>
          <ol>
            <li><strong>Esperar "sobrar" dinheiro:</strong> defina o valor da reserva como gasto fixo, não como o que sobra. Pague-se primeiro.</li>
            <li><strong>Usar a reserva para compras:</strong> um celular novo ou uma viagem não é emergência. Crie um fundo separado para objetivos planejados.</li>
            <li><strong>Colocar tudo em um só lugar:</strong> distribua entre Tesouro Selic e CDB de liquidez diária para ter redundância.</li>
            <li><strong>Não repor após uso:</strong> se usou a reserva, priorize recompô-la antes de voltar a investir em outros ativos.</li>
            <li><strong>Buscar rendimento alto na reserva:</strong> a reserva é para segurança, não para ganhos. Aceite o rendimento do Tesouro Selic e durma tranquilo.</li>
          </ol>

          <h2>Conclusão</h2>
          <p>
            A reserva de emergência é o primeiro passo de qualquer planejamento financeiro sério. Antes de investir em ações, FIIs, cripto ou qualquer outro ativo, construa sua rede de segurança. Em 2026, com o Tesouro Selic rendendo mais de 13% ao ano, sua reserva cresce enquanto te protege.
          </p>
          <p>
            Comece hoje. Mesmo que com R$ 50 por mês. O hábito de poupar é mais importante que o valor inicial.
          </p>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Já tem sua reserva montada?</h3>
            <p className="text-muted-foreground">Conta nos comentários quanto tempo levou para construir a sua! 🛡️</p>
          </div>

          <p className="text-xs text-muted-foreground mt-6 italic">
            Conteúdo informativo. Não constitui recomendação de investimento. Consulte um profissional certificado antes de tomar decisões financeiras.
          </p>
        </div>

        <RelatedPosts currentSlug="reserva-emergencia-2026-como-montar" />
        <CommentSection postId="reserva-emergencia-2026-como-montar" />
      </article>
    </>
  );
};

export default ReservaEmergencia2026;
