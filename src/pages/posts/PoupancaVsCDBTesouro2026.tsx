import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, Shield, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/poupanca-vs-cdb-tesouro-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const faqData = [
  { q: "Poupança ainda vale a pena em 2026?", a: "A poupança rende 70% da Selic + TR quando a Selic está acima de 8,5%. Em março de 2026, com a Selic a 13,25%, a poupança rende cerca de 9,28% ao ano — menos que CDBs e Tesouro Direto, que oferecem 100% do CDI ou mais." },
  { q: "Qual a diferença entre CDB e Tesouro Direto?", a: "CDBs são títulos emitidos por bancos, cobertos pelo FGC até R$ 250 mil. O Tesouro Direto são títulos do governo federal, considerados os mais seguros do país. CDBs costumam pagar mais, mas o Tesouro tem menor risco de crédito." },
  { q: "CDB tem garantia do FGC?", a: "Sim. O Fundo Garantidor de Créditos (FGC) protege investimentos em CDBs até R$ 250 mil por CPF por instituição financeira, com limite global de R$ 1 milhão a cada 4 anos." },
  { q: "Quanto rende R$ 10.000 na poupança, CDB e Tesouro em 2026?", a: "Com a Selic a 13,25% ao ano: Poupança rende ~R$ 928/ano; CDB 100% CDI rende ~R$ 1.325/ano (bruto); Tesouro Selic rende ~R$ 1.325/ano (bruto). Após IR, CDB e Tesouro ainda superam a poupança." },
  { q: "Qual o melhor investimento para reserva de emergência?", a: "Para reserva de emergência, o Tesouro Selic é a opção mais indicada por ter liquidez D+1, risco soberano e não ter IOF após 30 dias. CDBs com liquidez diária de bancos sólidos também são uma boa alternativa." },
];

const PoupancaVsCDBTesouro2026 = () => {
  useEffect(() => {
    trackArticleRead("poupanca-vs-cdb-tesouro-2026", "Poupança vs CDB vs Tesouro Direto em 2026", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Renda Fixa</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
            Poupança vs CDB vs Tesouro Direto em 2026: Qual Rende Mais?
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />27 de Março, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />12 min de leitura</span>
          </div>
          <ShareWhatsApp />
        </header>

        <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
          <img fetchpriority="high" src={heroImg} alt="Poupança vs CDB vs Tesouro Direto 2026 comparativo" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Com a Selic em <strong>13,25% ao ano</strong> em março de 2026 e o Copom sinalizando cortes graduais, a renda fixa continua sendo protagonista. Mas entre Poupança, CDB e Tesouro Direto, qual realmente entrega mais rendimento? Neste comparativo, usamos dados reais para te ajudar a decidir.
          </p>

          <p>
            A escolha entre esses três produtos depende do seu objetivo, prazo e perfil de risco. Nenhum é universalmente "melhor" — cada um tem vantagens específicas que se encaixam em cenários diferentes.
          </p>

          <AdLeaderboard className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <BarChart3 className="h-7 w-7 text-invest" />
            Como Cada Um Funciona
          </h2>

          <h3 className="text-xl font-bold mt-6">Poupança</h3>
          <p>
            A caderneta de poupança é o investimento mais popular do Brasil, com mais de <strong>170 milhões de contas</strong> segundo o Banco Central. Quando a Selic está acima de 8,5% ao ano (caso atual), a poupança rende <strong>0,5% ao mês + Taxa Referencial (TR)</strong>, o que equivale a cerca de 6,17% ao ano + TR.
          </p>
          <ul>
            <li><strong>Rendimento atual:</strong> ~9,28% ao ano (com TR)</li>
            <li><strong>Tributação:</strong> isenta de IR para pessoa física</li>
            <li><strong>Liquidez:</strong> imediata, mas com "aniversário" — rendimento creditado a cada 30 dias</li>
            <li><strong>Garantia:</strong> FGC até R$ 250 mil por CPF/instituição</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">CDB (Certificado de Depósito Bancário)</h3>
          <p>
            CDBs são títulos emitidos por bancos. Em 2026, é comum encontrar CDBs pagando entre <strong>100% e 120% do CDI</strong> em bancos médios, e até 130% em ofertas promocionais de fintechs. O CDI acompanha de perto a Selic.
          </p>
          <ul>
            <li><strong>Rendimento atual (100% CDI):</strong> ~13,15% ao ano (bruto)</li>
            <li><strong>Tributação:</strong> IR regressivo — de 22,5% (até 180 dias) a 15% (acima de 720 dias)</li>
            <li><strong>Liquidez:</strong> varia — pode ter liquidez diária ou prazo fixo</li>
            <li><strong>Garantia:</strong> FGC até R$ 250 mil por CPF/instituição</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Tesouro Direto</h3>
          <p>
            Títulos públicos emitidos pelo governo federal. O <strong>Tesouro Selic</strong> é o mais indicado para reserva de emergência e objetivos de curto prazo, pois acompanha a taxa Selic e tem liquidez D+1.
          </p>
          <ul>
            <li><strong>Rendimento (Tesouro Selic):</strong> ~13,25% ao ano (bruto)</li>
            <li><strong>Tributação:</strong> IR regressivo, igual ao CDB</li>
            <li><strong>Liquidez:</strong> D+1 (resgate em 1 dia útil)</li>
            <li><strong>Garantia:</strong> governo federal (risco soberano — o menor do país)</li>
          </ul>

          <AdRectangle className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <TrendingUp className="h-7 w-7 text-invest" />
            Simulação: R$ 10.000 em 12 Meses
          </h2>

          <div className="not-prose my-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-3 text-left font-semibold">Produto</th>
                    <th className="p-3 text-left font-semibold">Rendimento Bruto</th>
                    <th className="p-3 text-left font-semibold">IR</th>
                    <th className="p-3 text-left font-semibold">Rendimento Líquido</th>
                    <th className="p-3 text-left font-semibold">Valor Final</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Poupança</td>
                    <td className="p-3">R$ 928</td>
                    <td className="p-3 text-green-500">Isento</td>
                    <td className="p-3">R$ 928</td>
                    <td className="p-3 font-bold">R$ 10.928</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">CDB 100% CDI</td>
                    <td className="p-3">R$ 1.315</td>
                    <td className="p-3 text-red-400">R$ 230 (17,5%)</td>
                    <td className="p-3">R$ 1.085</td>
                    <td className="p-3 font-bold">R$ 11.085</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tesouro Selic</td>
                    <td className="p-3">R$ 1.325</td>
                    <td className="p-3 text-red-400">R$ 232 (17,5%)</td>
                    <td className="p-3">R$ 1.093</td>
                    <td className="p-3 font-bold">R$ 11.093</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">CDB 120% CDI</td>
                    <td className="p-3">R$ 1.578</td>
                    <td className="p-3 text-red-400">R$ 276 (17,5%)</td>
                    <td className="p-3">R$ 1.302</td>
                    <td className="p-3 font-bold text-invest">R$ 11.302</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              * Simulação com Selic a 13,25% e CDI a 13,15%. IR calculado na alíquota de 17,5% (entre 361 e 720 dias). Valores aproximados.
            </p>
          </div>

          <div className="not-prose my-6 p-4 bg-primary/10 border border-primary/30 rounded-xl flex gap-3">
            <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Resultado:</strong> Mesmo pagando IR, o CDB a 100% do CDI rende <strong>17% mais</strong> que a poupança em 12 meses. Um CDB a 120% do CDI rende <strong>40% mais</strong>. A poupança só vale a pena para valores muito pequenos ou prazo muito curto (abaixo de 30 dias).
            </p>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <Shield className="h-7 w-7 text-invest" />
            Segurança: Qual é o Mais Seguro?
          </h2>
          <p>
            Todos os três são considerados investimentos de baixo risco, mas há diferenças importantes:
          </p>
          <ol>
            <li><strong>Tesouro Direto</strong> — risco soberano (governo federal). É o investimento mais seguro do Brasil. Mesmo em crises, o governo pode emitir moeda para honrar seus títulos.</li>
            <li><strong>Poupança e CDB</strong> — protegidos pelo FGC até R$ 250 mil. Se o banco quebrar, o FGC reembolsa. O risco é do banco emissor.</li>
          </ol>
          <p>
            Na prática, para valores abaixo de R$ 250 mil, os três são igualmente seguros. Acima disso, o Tesouro Direto se destaca por não ter limite de cobertura.
          </p>

          <AdLeaderboard className="my-8" />

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <CheckCircle className="h-7 w-7 text-invest" />
            Qual Escolher? Recomendações por Objetivo
          </h2>

          <div className="not-prose my-8 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Shield className="h-7 w-7 text-blue-400" />,
                title: "Reserva de Emergência",
                color: "border-blue-500/30 bg-blue-500/5",
                rec: "Tesouro Selic",
                reason: "Liquidez D+1, risco soberano, sem IOF após 30 dias. A melhor combinação de segurança e rendimento para dinheiro que pode precisar a qualquer momento.",
              },
              {
                icon: <TrendingUp className="h-7 w-7 text-green-400" />,
                title: "Médio Prazo (1-3 anos)",
                color: "border-green-500/30 bg-green-500/5",
                rec: "CDB 110-120% CDI",
                reason: "CDBs de bancos médios oferecem taxas acima do CDI. Com prazo acima de 720 dias, o IR cai para 15%, maximizando o retorno líquido.",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-amber-400" />,
                title: "Curtíssimo Prazo",
                color: "border-amber-500/30 bg-amber-500/5",
                rec: "CDB com liquidez diária",
                reason: "Para dinheiro que será usado em dias ou semanas. CDBs de grandes bancos com liquidez diária rendem mais que a poupança mesmo no curtíssimo prazo.",
              },
            ].map(({ icon, title, color, rec, reason }) => (
              <div key={title} className={`rounded-xl border p-5 ${color}`}>
                <div className="mb-3">{icon}</div>
                <h3 className="font-bold text-base mb-1">{title}</h3>
                <p className="text-sm font-semibold text-primary mb-2">→ {rec}</p>
                <p className="text-sm text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
            <AlertTriangle className="h-7 w-7 text-invest" />
            Erros Comuns ao Escolher Renda Fixa
          </h2>
          <ol>
            <li><strong>Deixar tudo na poupança por comodidade:</strong> a diferença de rendimento acumula significativamente ao longo dos anos. R$ 50 mil na poupança por 5 anos rendem R$ 7.850 menos que no Tesouro Selic.</li>
            <li><strong>Ignorar o IR na comparação:</strong> sempre compare rendimentos líquidos. A poupança é isenta, mas mesmo assim perde para CDB e Tesouro após o desconto do IR.</li>
            <li><strong>Não diversificar entre emissores:</strong> se investir em CDBs, distribua entre diferentes bancos para maximizar a proteção do FGC.</li>
            <li><strong>Confundir Tesouro Selic com Tesouro Prefixado:</strong> o Tesouro Selic tem volatilidade mínima. Já o Prefixado e o IPCA+ podem ter variação negativa no curto prazo (marcação a mercado).</li>
          </ol>

          <AdRectangle className="my-8" />

          <h2>Conclusão</h2>
          <p>
            Em 2026, com a Selic em 13,25%, não há justificativa financeira para manter grandes valores na poupança. O Tesouro Selic e CDBs de liquidez diária oferecem rendimentos superiores com segurança equivalente. A poupança só faz sentido para valores muito pequenos ou como conta operacional do dia a dia.
          </p>
          <p>
            A melhor estratégia é combinar os três: poupança para o dinheiro do mês, Tesouro Selic para a reserva de emergência e CDBs acima de 100% CDI para objetivos de médio prazo.
          </p>

          <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Onde você guarda seu dinheiro?</h3>
            <p className="text-muted-foreground">Conta nos comentários se já migrou da poupança para renda fixa! 💰</p>
          </div>

          <p className="text-xs text-muted-foreground mt-6 italic">
            Conteúdo informativo. Não constitui recomendação de investimento. Consulte um profissional certificado antes de tomar decisões financeiras.
          </p>
        </div>

        <RelatedPosts currentSlug="poupanca-vs-cdb-tesouro-2026" />
        <CommentSection postId="poupanca-vs-cdb-tesouro-2026" />
    </article>
  );
};

export default PoupancaVsCDBTesouro2026;
