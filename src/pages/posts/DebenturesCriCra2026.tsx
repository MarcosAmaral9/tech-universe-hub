/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/debentures-cri-cra-2026-guia-completo": {
 *   title: "Debêntures, CRI e CRA em 2026: Guia Completo de Crédito Privado Isento de IR",
 *   description: "Debêntures incentivadas, CRI e CRA mantiveram isenção de IR em 2026 após MP 1.303/2025 ser rejeitada. Entenda o que são, como funcionam, risco de crédito sem FGC, indexadores, como declarar no IRPF e quando valem mais que LCI/LCA.",
 *   keywords: "debêntures incentivadas 2026, CRI 2026, CRA 2026, crédito privado isento IR, debêntures infraestrutura, CRI vs LCI, CRA vs LCA, Lei 12431, risco crédito privado, MP 1303 2025 isenção",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, DollarSign, AlertTriangle,
  BarChart3, Shield, FileText, TrendingUp, Lightbulb
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/debentures-cri-cra-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DebenturesCriCra2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "debentures-cri-cra-2026-guia-completo",
      "Debêntures, CRI e CRA em 2026: Guia Completo de Crédito Privado Isento de IR",
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
            Crédito Privado · Debêntures · CRI · CRA
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Debêntures, CRI e CRA em 2026: Guia Completo de Crédito Privado Isento de IR
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Após a <strong>MP 1.303/2025 ser rejeitada pelo Congresso</strong>, debêntures incentivadas, CRI e CRA mantêm isenção total de IR para pessoa física em 2026 — mesmo para novas emissões. Com a Selic acima de 13%, CRIs pagando CDI+1,5% ou IPCA+7% isentos podem superar LCIs em mais de R$ 8.000 por R$ 100.000 investidos em três anos. O preço é o risco de crédito real: não há FGC.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="Debêntures CRI e CRA 2026 — crédito privado isento de IR"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Comparativo rápido */}
        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-bold">Característica</th>
                <th className="text-center p-4 font-bold text-invest">Debênture Incentivada</th>
                <th className="text-center p-4 font-bold text-invest">CRI</th>
                <th className="text-center p-4 font-bold text-invest">CRA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {[
                ["Emissor", "Empresa de infraestrutura", "Securitizadora imobiliária", "Securitizadora agronegócio"],
                ["Isenção IR (PF)", "Sim ✅ (Lei 12.431/2011)", "Sim ✅ (Lei 9.514/1997)", "Sim ✅ (Lei 11.076/2004)"],
                ["Garantia FGC", "Não ❌", "Não ❌", "Não ❌"],
                ["Indexador comum", "IPCA+ / CDI+", "IPCA+ / CDI+", "IPCA+ / CDI+"],
                ["Liquidez", "Mercado secundário (variável)", "Mercado secundário (variável)", "Mercado secundário (variável)"],
                ["Valor mínimo típico", "R$ 1.000", "R$ 1.000", "R$ 1.000"],
                ["Prazo típico", "3 a 10 anos", "2 a 15 anos", "2 a 10 anos"],
                ["Risco principal", "Empresa emissora", "Lastro + securitizadora", "Lastro + securitizadora"],
              ].map(([c, d, cri, cra]) => (
                <tr key={c} className="hover:bg-muted/20">
                  <td className="p-3 font-medium text-muted-foreground">{c}</td>
                  <td className="p-3 text-center">{d}</td>
                  <td className="p-3 text-center">{cri}</td>
                  <td className="p-3 text-center">{cra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Que São e Por Que a Isenção de IR Foi Mantida em 2026
        </h2>
        <p>
          Os três instrumentos de crédito privado mais populares entre investidores pessoas físicas no Brasil — <strong>debêntures incentivadas, CRIs e CRAs</strong> — estiveram no centro de uma disputa regulatória intensa ao longo de 2025. A Medida Provisória 1.303/2025, publicada pelo governo federal em junho de 2025, propôs impor uma alíquota de 5% de IR sobre os rendimentos desses títulos para emissões realizadas a partir de janeiro de 2026, com o objetivo de ampliar a arrecadação. A medida provocou imediata "corrida aos isentos": só em junho de 2025, os títulos incentivados totalizaram R$ 19 bilhões em emissões — alta de 35% sobre maio —, com investidores e empresas emissoras antecipando o que poderia ser o fim de um benefício histórico. No entanto, ao ser apreciada pelo Congresso Nacional, o relatório do deputado Carlos Zarattini (PT-SP) defendeu a manutenção integral da isenção para debêntures incentivadas, CRIs e CRAs, e esse entendimento prevaleceu: a isenção permanece em vigor em 2026 para pessoas físicas, mesmo para novas emissões.
        </p>
        <p>
          A lógica por trás das três isenções é a mesma: a de que o Estado tem interesse em direcionar capital privado para setores estratégicos do desenvolvimento econômico, oferecendo vantagem fiscal ao investidor como incentivo. As <strong>debêntures incentivadas</strong> financiam projetos de infraestrutura — rodovias, ferrovias, aeroportos, portos, saneamento básico, energia e telecomunicações — e sua isenção é garantida pela Lei 12.431/2011. O <strong>CRI (Certificado de Recebíveis Imobiliários)</strong> financia operações do setor imobiliário, com lastro em recebíveis de contratos de compra e venda, aluguéis e financiamentos habitacionais, com isenção garantida pela Lei 9.514/1997. O <strong>CRA (Certificado de Recebíveis do Agronegócio)</strong> financia o setor agrícola — produção, processamento, armazenamento e exportação — com isenção pela Lei 11.076/2004. Em todos os casos, a isenção cobre exclusivamente os <strong>rendimentos</strong> (juros e atualização monetária recebidos): eventuais ganhos de capital obtidos na venda do título no mercado secundário antes do vencimento seguem as regras normais de tributação de renda variável.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          A Diferença Que Faz: CRI vs LCI e CRA vs LCA
        </h2>
        <p>
          A pergunta mais comum de quem já conhece LCIs e LCAs é: se ambos financiam o setor imobiliário ou o agronegócio e ambos são isentos de IR, o que diferencia o CRI da LCI e o CRA da LCA?
        </p>
        <p>
          A diferença fundamental é o <strong>emissor e a garantia</strong>. A LCI é emitida pelo banco, que assume o risco de crédito — e conta com a garantia do FGC até R$ 250.000 por CPF por instituição. O CRI é emitido por uma <strong>securitizadora</strong>, que é uma empresa especializada em estruturar e emitir certificados lastreados em recebíveis imobiliários. A securitizadora em si não é a devedora principal: ela apenas empacota os recebíveis (parcelas de financiamentos, aluguéis, contratos de compra e venda) em um título que é vendido no mercado. O risco do CRI está, portanto, na qualidade dos recebíveis que formam o lastro — se os devedores dos contratos subjacentes deixarem de pagar, o fluxo de caixa do CRI se reduz — e na solidez da securitizadora e das garantias adicionais estruturadas na emissão (alienação fiduciária de imóveis, fiança corporativa, entre outros). Não há FGC. Em caso de problema, o investidor entra no processo de recuperação como credor do CRI.
        </p>
        <p>
          Exatamente por assumir esse risco de crédito maior, o CRI e o CRA precisam oferecer um prêmio sobre a LCI e a LCA para atrair investidores. Em 2026, com CDI em torno de 13,25%, um CRI a CDI+1,5% entrega 14,75% ao ano isento — contra uma LCI a 90% do CDI que entrega 11,93% ao ano isento. Para R$ 100.000 investidos por 12 meses, a diferença é de aproximadamente R$ 2.820 adicionais no CRI em comparação com a LCI. Em três anos, considerando os juros compostos, a diferença pode superar R$ 8.900 — um prêmio real e significativo, mas que só faz sentido aceitar após analisar cuidadosamente a qualidade do lastro, a solidez da securitizadora e as garantias específicas daquela emissão.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Os Riscos Reais do Crédito Privado: Crédito, Liquidez e Marcação a Mercado
        </h2>
        <p>
          Três tipos de risco são intrínsecos a qualquer investimento em crédito privado e precisam ser compreendidos antes de qualquer aporte em CRI, CRA ou debênture incentivada.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
          {[
            {
              titulo: "Risco de crédito",
              icone: <Shield className="h-5 w-5" />,
              cor: "border-l-red-500 bg-red-500/5",
              texto: "Emissor pode deixar de pagar. Sem FGC. Recuperação judicial é lenta, cara e incerta. Rating A ou superior é o mínimo para investidor conservador.",
            },
            {
              titulo: "Risco de liquidez",
              icone: <AlertTriangle className="h-5 w-5" />,
              cor: "border-l-yellow-500 bg-yellow-500/5",
              texto: "Sair antes do vencimento depende do mercado secundário. Deságio pode ser alto em estresse. Regra: só invista o que você não vai precisar até o vencimento.",
            },
            {
              titulo: "Marcação a mercado",
              icone: <BarChart3 className="h-5 w-5" />,
              cor: "border-l-blue-500 bg-blue-500/5",
              texto: "Títulos IPCA+ oscilam de preço com a taxa de juros. Se carregar até o vencimento, é irrelevante. Se acompanhar diariamente, prepare-se para volatilidade.",
            },
          ].map(({ titulo, icone, cor, texto }) => (
            <div key={titulo} className={`p-4 rounded-xl border border-border/40 border-l-4 ${cor}`}>
              <div className="flex items-center gap-2 mb-2 text-invest font-bold text-sm">
                {icone}
                {titulo}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{texto}</p>
            </div>
          ))}
        </div>

        <p>
          O <strong>risco de crédito</strong> é o mais conhecido: a possibilidade de o emissor (a empresa no caso de debêntures, a securitizadora e os devedores do lastro no caso de CRI e CRA) deixar de pagar os juros ou o principal no vencimento. Diferentemente do Tesouro Nacional ou do FGC, não há um "resgatador de última instância" nesses títulos. Em caso de insolvência do emissor, o investidor entra em processo judicial ou extrajudicial de recuperação como credor, com prazo, custo e resultado incertos. Para avaliar o risco de crédito de forma objetiva, o instrumento principal é o <strong>rating das agências</strong> (Fitch, Moody's, S&P, Austin Rating): títulos com rating "A" ou superior têm probabilidade historicamente muito baixa de inadimplência, enquanto títulos sem rating ou com ratings baixos (abaixo de "BB") carregam risco substancialmente maior. Outro indicador indireto é o spread em relação ao Tesouro IPCA+: um CRI pagando IPCA+12% quando o Tesouro IPCA+ de prazo similar paga IPCA+7% está sendo precificado pelo mercado com um risco de crédito elevado — o spread gordíssimo não é generosidade, é compensação por risco real.
        </p>
        <p>
          O <strong>risco de liquidez</strong> é específico desses instrumentos e frequentemente subestimado. CRIs, CRAs e debêntures não têm liquidez diária garantida como o Tesouro Selic ou CDBs com liquidez diária. O investidor que precisar sair antes do vencimento depende do mercado secundário, onde a liquidez pode ser baixa e os preços, desfavoráveis. Em condições de estresse de mercado — alta súbita de juros, deterioração do cenário de crédito, crise setorial —, vender um CRI antes do vencimento pode significar aceitar um deságio significativo sobre o preço pago na compra. Por isso, o padrão ouro para investir em crédito privado é o chamado "comprar e carregar até o vencimento" (buy and hold): só alocar em CRIs, CRAs e debêntures o valor que você tem certeza que não vai precisar antes da data de vencimento do papel.
        </p>
        <p>
          O <strong>risco de marcação a mercado</strong> afeta quem acompanha o extrato da corretora com frequência. Assim como os títulos do Tesouro IPCA+, os CRIs e debêntures indexados ao IPCA oscilam de preço ao longo do tempo à medida que as taxas de juros de mercado sobem ou caem. Se você comprou um CRI a IPCA+7% e a taxa de mercado sobe para IPCA+9%, o preço do seu CRI no mercado secundário cai — porque quem tiver dinheiro novo vai preferir comprar a IPCA+9% a comprar o seu título a IPCA+7% pelo preço cheio. Esse movimento é a marcação a mercado: o valor atualizado da cota reflete o preço que você conseguiria vender hoje, não o preço que receberá se carregar até o vencimento. Para quem mantém o título até o vencimento, a marcação a mercado negativa durante o período é temporária e irrelevante: o fluxo contratado de pagamentos não muda.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Indexadores e Quando Cada Um Faz Mais Sentido
        </h2>
        <p>
          A escolha do indexador do CRI, CRA ou debênture é tão importante quanto a escolha do emissor e do prazo. Os três indexadores mais comuns em 2026 são IPCA+, CDI+ e prefixado, e cada um responde de forma diferente a diferentes cenários macroeconômicos.
        </p>
        <p>
          O <strong>IPCA+ (taxa real)</strong> é o indexador mais comum em debêntures incentivadas e CRIs de prazo mais longo. Uma debênture pagando IPCA+7% ao ano garante um rendimento real (acima da inflação) de 7% ao ano, independentemente de onde a inflação for. Em 2026, com IPCA projetado em torno de 5,5% a 6,0% ao ano, uma debênture a IPCA+7% entrega nominalmente cerca de 12,5% a 13% ao ano isento — competitivo com o CDI, mas com a vantagem de proteger o poder de compra do capital mesmo se a inflação subir inesperadamente. A desvantagem é a maior sensibilidade à marcação a mercado: títulos IPCA+ são mais voláteis em preço do que títulos pós-fixados ao CDI, porque qualquer mudança nas expectativas de juros reais afeta mais seu preço no mercado secundário.
        </p>
        <p>
          O <strong>CDI+ (pós-fixado com spread)</strong> é mais comum em CRIs e CRAs de prazo mais curto (até 3 a 5 anos). Um CRI a CDI+1,5% isento de IR entrega hoje algo em torno de 14,75% ao ano — e esse valor varia conforme o CDI sobe ou cai ao longo do tempo. Para quem acredita que a Selic permanecerá alta por mais tempo, ou para quem simplesmente não quer tomar o risco de marcação a mercado, o CDI+ é a escolha mais defensiva dentro do crédito privado isento. O <strong>prefixado</strong> é raro em CRIs e CRAs, mas aparece em algumas debêntures de prazo mais curto. Trava a taxa nominal desde o início — vantajoso se a expectativa é de queda de juros, mas arriscado se os juros subirem além do esperado.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-invest/10">
                <th className="text-left p-3 font-bold">Cenário macro</th>
                <th className="text-left p-3 font-bold text-invest">Indexador ideal</th>
                <th className="text-left p-3 font-bold">Por quê</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              <tr><td className="p-3 font-medium">Selic alta e estável</td><td className="p-3 text-invest">CDI+</td><td className="p-3 text-muted-foreground">Captura o CDI corrente + spread, sem risco de marcação.</td></tr>
              <tr><td className="p-3 font-medium">Selic caindo</td><td className="p-3 text-invest">Prefixado / IPCA+ longo</td><td className="p-3 text-muted-foreground">Trava taxa nominal alta antes da queda.</td></tr>
              <tr><td className="p-3 font-medium">Inflação persistente</td><td className="p-3 text-invest">IPCA+</td><td className="p-3 text-muted-foreground">Protege o poder de compra independentemente do IPCA realizado.</td></tr>
              <tr><td className="p-3 font-medium">Cenário incerto</td><td className="p-3 text-invest">Mix CDI+ e IPCA+</td><td className="p-3 text-muted-foreground">Diversificação de indexadores reduz risco de errar cenário.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <FileText className="h-7 w-7 text-invest" />
          Como Declarar CRI, CRA e Debêntures Incentivadas no IRPF
        </h2>
        <p>
          Mesmo sendo isentos de IR sobre os rendimentos, CRIs, CRAs e debêntures incentivadas precisam ser informados na Declaração de Ajuste Anual do IRPF. Isso porque eles fazem parte do seu patrimônio — e a Receita Federal cruza os dados das corretoras com a declaração do contribuinte. A omissão de ativos isentos na declaração pode gerar notificação da Receita e, em casos de inconsistência maior, retenção na malha fina.
        </p>
        <p>
          Para declarar, acesse a ficha <strong>"Bens e Direitos"</strong> no programa da Receita Federal. Para CRIs, CRAs e debêntures incentivadas, o caminho é: grupo <strong>"04 — Aplicações e Investimentos"</strong>, código <strong>"03 — Títulos Isentos de Tributação (LCI, LCA, CRI, CRA, LIG, Debêntures de Infraestrutura e outros)"</strong>. Preencha o CNPJ da instituição custodiante (geralmente a corretora ou banco onde o título está custodiado), a discriminação do ativo (nome da emissão, vencimento, emissor) e os saldos em 31 de dezembro do ano anterior e do ano de apuração, conforme o informe de rendimentos. Os rendimentos recebidos durante o ano devem ser informados na ficha <strong>"Rendimentos Isentos e Não Tributáveis"</strong>, código <strong>"14 — Rendimentos de CRI, CRA, LCI, LCA e debêntures incentivadas"</strong>. A Receita já prevê em muitos casos o preenchimento automático via declaração pré-preenchida, desde que a corretora tenha enviado os dados corretamente — mas verificar e confirmar manualmente é sempre recomendado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Quando Faz Sentido Incluir Crédito Privado na Carteira
        </h2>
        <p>
          A regra de ouro do crédito privado é que ele só faz sentido como uma <strong>camada adicional de retorno</strong> sobre uma base já diversificada de renda fixa conservadora. Antes de comprar qualquer CRI, CRA ou debênture incentivada, o investidor deve ter: (1) reserva de emergência integralmente alocada em Tesouro Selic ou CDB com liquidez diária, (2) aportes regulares em renda fixa com garantia de FGC (CDB, LCI, LCA) para objetivos de médio prazo, e (3) clareza de que o valor que vai alocar em crédito privado não será necessário antes do vencimento do título.
        </p>

        <div className="not-prose my-6 p-5 rounded-xl border border-invest/40 bg-gradient-to-br from-invest/10 to-background">
          <h3 className="font-bold text-base mb-3 flex items-center gap-2 text-invest">
            <Lightbulb className="h-5 w-5" />
            Alocação sugerida em crédito privado isento
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { perfil: "Conservador", pct: "0% a 5%", desc: "Prioridade absoluta em Tesouro Selic, CDB e LCI/LCA com FGC." },
              { perfil: "Moderado", pct: "10% a 25%", desc: "Papéis rating A+ ou superior, diversificados entre setores e prazos." },
              { perfil: "Arrojado", pct: "25% a 40%", desc: "Aceita ratings BBB com prêmio de spread. Diversificação obrigatória." },
            ].map(({ perfil, pct, desc }) => (
              <div key={perfil} className="p-3 rounded-lg bg-card/60 border border-border/40">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{perfil}</p>
                <p className="text-2xl font-bold text-invest my-1">{pct}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p>
          Dentro dessas condições, a participação em crédito privado isento em uma carteira de perfil moderado pode variar de 10% a 25% do patrimônio total em renda fixa — nunca concentrada em um único emissor, sempre diversificada entre setores (energia, saneamento, agronegócio, logística) e entre prazos de vencimento. Plataformas de corretoras como XP, BTG, NuInvest e Inter oferecem CRIs, CRAs e debêntures incentivadas com valores de entrada a partir de R$ 1.000, permitindo ao investidor de varejo construir uma carteira de crédito privado diversificada sem precisar de volumes mínimos elevados que antes limitavam o acesso a esse mercado a investidores qualificados.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Crédito privado envolve risco de crédito, liquidez e marcação a mercado. Não há garantia do FGC. Consulte um assessor de investimentos certificado pela CVM antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: CRI e CRA são renda fixa sofisticada — o spread precisa compensar o risco real">
        <p>
          A principal armadilha que vejo nas carteiras de crédito privado é a busca pelo maior spread sem analisar de onde vem. Um CRI pagando IPCA+12% quando o mercado paga IPCA+7% para o setor equivalente não é generosidade do emissor — é precificação de risco que o mercado enxerga e você pode não estar enxergando. O spread ideal fica na faixa de IPCA+0,5% a IPCA+2% acima do Tesouro IPCA+ equivalente para emissores com rating "A" ou melhor: acima disso, há risco; abaixo disso, não há compensação suficiente.
        </p>
        <p className="mt-2">
          A isenção de IR é real e relevante, especialmente em 2026 com Selic alta. Mas ela não elimina o risco de crédito — apenas aumenta o retorno líquido para compensar parcialmente esse risco. <strong>CRI e CRA perfeitos para a carteira são aqueles em que o spread cobre o risco, o lastro é diversificado e você não vai precisar do dinheiro antes do vencimento.</strong> Se qualquer uma dessas três condições não for cumprida, a LCI equivalente é mais segura mesmo pagando menos.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Lei nº 12.431/2011 — Debêntures Incentivadas de Infraestrutura: Isenção de IR",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12431.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "CRI e CRA em 2026: Isentos de IR com Selic a 14,75% — Quando Rendem Mais que LCI?",
            url: "https://www.adrianofreire.com.br/blog/cri-cra-debentures-incentivadas-vale-a-pena-2026",
            publisher: "Adriano Freire Finanças",
            accessedAt: "Julho 2026",
          },
          {
            title: "MP 1.303/2025: Isenção de CRI, CRA e Debêntures Mantida pelo Congresso",
            url: "https://borainvestir.b3.com.br/tipos-de-investimentos/renda-fixa/cris-cras-e-debentures-vao-perder-isencao-de-ir-corrida-por-isentos-cresce-mas-e-preciso-atencao-aos-riscos/",
            publisher: "B3 — Bora Investir",
            accessedAt: "Julho 2026",
          },
          {
            title: "Como Declarar CRA, CRI e Debêntures no Imposto de Renda 2026",
            url: "https://investalk.bb.com.br/noticias/Mercado/declarar-titulos-de-credito-privado-como-cra-cri-e-debentures",
            publisher: "Investalk / Banco do Brasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "7 Investimentos Isentos de IR em 2026 — Situação Atual",
            url: "https://bancobari.com.br/blog/investimento-isento-ir",
            publisher: "Banco Bari",
            accessedAt: "Julho 2026",
          },
          {
            title: "Livres de Imposto: Recomendações de CRI, CRA e Debêntures — Fevereiro 2026",
            url: "https://www.seudinheiro.com/2026/renda-fixa/livres-de-imposto-de-renda-as-recomendacoes-de-cri-cra-e-debentures-incentivadas-para-fevereiro-mlim/",
            publisher: "Seu Dinheiro",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="debentures-cri-cra-2026-guia-completo" />
      <CommentSection
        postId="debentures-cri-cra-2026-guia-completo"
        postTitle="Debêntures, CRI e CRA em 2026: Guia Completo de Crédito Privado Isento de IR"
        category="invest"
      />
    </article>
  );
};

export default DebenturesCriCra2026;
