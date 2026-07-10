/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/lci-lca-2026-guia-completo": {
 *   title: "LCI e LCA em 2026: Guia Completo — Isenção de IR, Carência e Quando Vale a Pena",
 *   description: "LCI e LCA isentas de IR para pessoa física: como funcionam, carência mínima de 6 meses, gross-up vs CDB, quem garante (FGC) e como escolher a melhor letra de crédito em 2026.",
 *   keywords: "LCI 2026, LCA 2026, letra de crédito imobiliário, letra de crédito agronegócio, isento IR, FGC, carência LCI LCA, gross-up renda fixa, LCI vs CDB, LCA vs Tesouro Direto, investimento isento imposto renda",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Shield, DollarSign, AlertTriangle, TrendingUp, BarChart3, CheckCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/lci-lca-2026-guia.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const LciLca2026Guia = () => {
  useEffect(() => {
    trackArticleRead("lci-lca-2026-guia-completo", "LCI e LCA em 2026: Guia Completo com Isenção de IR e Gross-Up", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Renda Fixa · LCI · LCA · Isenção IR
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          LCI e LCA em 2026: Guia Completo com Isenção de IR, Carência e Gross-Up
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          <strong>LCI e LCA</strong> são as únicas aplicações de renda fixa bancária totalmente isentas de Imposto de Renda para pessoa física — e com a Selic em patamar elevado, essa isenção vale mais do que nunca. Mas os prazos de carência mudaram várias vezes nos últimos dois anos, e nem toda LCA ou LCI que parece atrativa realmente supera o CDB depois do cálculo correto. Este guia explica como funcionam, como calcular o gross-up, o que mudou nas regras do CMN e quando esses títulos valem a pena em 2026.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
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
          alt="LCI e LCA em 2026 — guia completo de investimento isento de IR"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Resumo rápido */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-invest" />
            LCI e LCA em 2026 — O Essencial em 30 Segundos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Isenção de IR", valor: "100% para pessoa física", cor: "text-green-400" },
              { label: "Garantia", valor: "FGC até R$ 250 mil/CPF/inst.", cor: "text-green-400" },
              { label: "Carência mínima (CDI/prefixada)", valor: "6 meses (LCI e LCA)", cor: "text-yellow-400" },
              { label: "Carência mínima (IPCA+)", valor: "36 meses (LCI) / 12 meses (LCA)", cor: "text-yellow-400" },
              { label: "Rentabilidade média 2026", valor: "92%–95% CDI (sem liquidez diária)", cor: "text-invest" },
              { label: "Gross-up mínimo competitivo", valor: "≥ 85% CDI (prazo 12 meses)", cor: "text-invest" },
            ].map(({ label, valor, cor }) => (
              <div key={label} className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className={`text-sm font-bold ${cor}`}>{valor}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Que São LCI e LCA — e Por Que o IR Zero Importa Tanto em 2026
        </h2>
        <p>
          A <strong>Letra de Crédito Imobiliário (LCI)</strong> e a <strong>Letra de Crédito do Agronegócio (LCA)</strong> são títulos de renda fixa emitidos por bancos e instituições financeiras com autorização do Banco Central para captar recursos com destinação específica. Quando você compra uma LCI, está emprestando dinheiro ao banco emissor, que por sua vez usa esse capital para financiar operações do setor imobiliário — como crédito habitacional, construção e financiamento de imóveis comerciais. A LCA segue a mesma lógica, mas o capital captado se destina ao setor do agronegócio: financiamento de produção rural, aquisição de insumos, armazenamento e exportação de commodities. Em troca da destinação obrigatória dos recursos para esses setores estratégicos, o governo concede a isenção de Imposto de Renda sobre os rendimentos para pessoa física residente no Brasil — benefício garantido pela Lei 9.514/1997 (LCI) e pela Lei 11.076/2004 (LCA), com isenção consolidada pelo artigo 3º da Lei 11.033/2004.
        </p>
        <p>
          Em 2026, com a taxa Selic em torno de 13,25% ao ano e o CDI oscilando próximo desse patamar, a isenção fiscal passa a valer muito mais na prática do que valia em períodos de juros baixos. A lógica é simples: quanto mais alto o juro bruto, maior o imposto que seria cobrado em uma aplicação equivalente tributável — e portanto maior o ganho relativo de uma aplicação isenta. Numa comparação direta: um CDB que paga 100% do CDI a 13,25% ao ano, resgatado após 12 meses, paga 20% de IR sobre o rendimento, resultando em um retorno líquido de cerca de 10,6% ao ano. Uma LCI que pague apenas 90% do CDI já rende 11,9% ao ano líquido para o mesmo prazo — ou seja, supera o CDB em quase 1,3 ponto percentual ao ano sem que o investidor precise fazer nada além de escolher o título correto. Esse mecanismo de comparação — converter a taxa isenta de uma LCI ou LCA para a taxa equivalente bruta que um CDB precisaria pagar para igualar o rendimento líquido — é chamado de <strong>gross-up</strong>, e entendê-lo é o passo mais importante para não aceitar uma LCI ou LCA abaixo do mínimo competitivo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Como Calcular o Gross-Up: A Fórmula Que Todo Investidor Precisa Saber
        </h2>
        <p>
          O gross-up é o cálculo que responde a pergunta: "se eu tenho uma LCI pagando X% do CDI, qual CDB precisaria pagar em % do CDI para render o mesmo líquido?" A fórmula é direta:
        </p>

        <div className="not-prose my-6 p-6 bg-card border border-border rounded-xl font-mono text-sm">
          <p className="font-bold text-invest mb-3">Fórmula do Gross-Up</p>
          <p className="text-muted-foreground mb-2">Taxa mínima LCI/LCA = Taxa CDB × (1 − Alíquota IR)</p>
          <p className="text-muted-foreground mb-4">Equivalente CDB = Taxa LCI ÷ (1 − Alíquota IR)</p>
          <div className="border-t border-border pt-4 space-y-2">
            <p className="text-xs text-muted-foreground font-sans"><strong>Alíquotas IR (tabela regressiva):</strong></p>
            <p className="text-xs text-muted-foreground font-sans">• Até 180 dias: 22,5% → LCI mínima = 77,5% CDI</p>
            <p className="text-xs text-muted-foreground font-sans">• 181 a 360 dias: 20% → LCI mínima = 80% CDI</p>
            <p className="text-xs text-muted-foreground font-sans">• 361 a 720 dias: 17,5% → LCI mínima = 82,5% CDI</p>
            <p className="text-xs text-muted-foreground font-sans">• Acima de 720 dias: 15% → LCI mínima = 85% CDI</p>
          </div>
        </div>

        <p>
          Usando os números de 2026: se você está comparando uma LCI de 12 meses com um CDB de 100% do CDI pelo mesmo prazo, a alíquota de IR aplicável ao CDB é 20% (180 a 360 dias). Portanto, a LCI mínima competitiva é de 80% do CDI. Qualquer LCI acima disso já supera o CDB 100% CDI líquido. Na prática, plataformas de corretoras como XP, Rico, NuInvest e BTG oferecem LCIs entre 88% e 95% do CDI para prazos de 9 a 12 meses — o que coloca esses títulos bem acima do ponto de equilíbrio e os torna atrativos para quem não precisa da liquidez imediata no período.
        </p>
        <p>
          O raciocínio muda quando o prazo se alonga para dois anos ou mais. Com a alíquota de IR no patamar de 15% (acima de 720 dias), a LCI mínima competitiva sobe para 85% do CDI. Para prazos longos, a vantagem da isenção fiscal se reduz em relação a prazos médios — porque a tabela regressiva do CDB já chegou à sua alíquota mais baixa. Isso não elimina a vantagem da LCI ou LCA, mas reduz a margem. Para prazos acima de dois anos, faz sentido comparar cuidadosamente com Tesouro IPCA+ e CDBs de alto rendimento disponíveis nas mesmas plataformas.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          As Novas Regras de Carência: O Que Mudou de 2024 para Cá
        </h2>
        <p>
          A maior confusão que existe em torno de LCI e LCA em 2026 é sobre os prazos de carência — que mudaram diversas vezes nos últimos dois anos, criando desinformação generalizada. Vale entender a linha do tempo completa. Até início de 2024, LCIs podiam ser emitidas com carência mínima de apenas 90 dias, o que as tornava um substituto quase perfeito do CDB com liquidez diária para horizontes curtos. Em fevereiro de 2024, o CMN publicou as Resoluções 5.118 e 5.119, elevando a carência mínima de LCIs para 12 meses e de LCAs para 9 meses — o maior aperto regulatório nesse segmento em anos. O mercado reagiu negativamente, com queda nas emissões e migração de investidores para CDBs e Tesouro Selic.
        </p>
        <p>
          Em agosto de 2024, o CMN calibrou pontualmente a LCI: reduziu a carência de 12 para 9 meses para emissões pós-fixadas (CDI) e prefixadas. Em maio de 2025, nova redução: de 9 para <strong>6 meses</strong>, que é o prazo mínimo que vale atualmente tanto para LCI quanto para LCA quando indexadas ao CDI ou prefixadas. O prazo mais longo — 36 meses para LCI e 12 meses para LCA — continua valendo apenas para emissões indexadas a índices de preços, como o IPCA. Na prática, isso significa que LCIs e LCAs pós-fixadas (CDI) emitidas em 2026 podem oferecer liquidez diária após 6 meses, tornando-as novamente competitivas para objetivos com horizonte de 6 a 12 meses.
        </p>
        <p>
          Um detalhe importante: a regra de carência de 6 meses é um <strong>mínimo</strong>, não uma garantia. Cada emissão específica define suas próprias condições de resgate no regulamento do título. Muitas LCIs e LCAs disponíveis em plataformas de corretoras ainda são vendidas sem liquidez antes do vencimento, mesmo sendo pós-fixadas — o que amplia o risco de precisar vender no mercado secundário com deságio. Antes de aplicar, é obrigatório ler as condições específicas de resgate do papel, não apenas a carência mínima regulatória.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          FGC, Lastro e Risco de Crédito: O Que Garante o Seu Dinheiro
        </h2>
        <p>
          Uma das principais razões pelas quais LCI e LCA são populares entre investidores conservadores e moderados é a cobertura do <strong>Fundo Garantidor de Créditos (FGC)</strong>. O FGC garante até <strong>R$ 250.000 por CPF por instituição financeira</strong>, com um limite adicional de R$ 1 milhão por CPF a cada período de quatro anos, somando todas as instituições. Isso significa que, dentro dos limites, se o banco emissor da sua LCI ou LCA quebrar, o FGC ressarce o valor investido mais os rendimentos acumulados até a data da liquidação — o mesmo nível de proteção oferecido para CDBs e depósitos em conta corrente.
        </p>
        <p>
          Uma mudança regulatória importante trazida pelas Resoluções CMN 5.118 e 5.119 de 2024 foi o endurecimento das regras de lastro. A LCI passou a ter seus recursos obrigatoriamente vinculados a operações do mercado imobiliário de forma mais estrita: não é mais permitido usar como lastro operações de capital de giro garantidas por imóvel para empresas sem conexão relevante com o setor imobiliário — prática que grandes bancos usavam para emitir volumes maiores de LCI sem a destinação realmente imobiliária dos recursos. Para o investidor pessoa física, esse endurecimento é positivo: significa que o lastro da sua LCI reflete mais genuinamente o setor ao qual o título está vinculado, reduzindo a opacidade que existia antes de 2024.
        </p>
        <p>
          Outro ponto relevante para quem pensa em investir em LCAs de bancos menores: o risco de crédito da instituição emissora existe, mesmo com o FGC. O FGC não é instantâneo — em caso de liquidação bancária, pode levar semanas para o processo de ressarcimento ser iniciado, e valores acima do limite de R$ 250 mil por instituição não têm proteção alguma. Para a esmagadora maioria dos investidores de varejo com aportes abaixo desse limite em cada instituição, o FGC elimina na prática o risco de crédito. Mas para quem tem volume maior, diversificar entre diferentes emissores e checar o rating das instituições (Fitch, Moody's, S&P) antes de aplicar é uma camada adicional de proteção que vale o esforço.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          LCI vs LCA vs CDB vs Tesouro Selic: Quando Cada Um Vence
        </h2>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-bold">Característica</th>
                <th className="text-center p-4 font-bold text-invest">LCI/LCA</th>
                <th className="text-center p-4 font-bold">CDB 100% CDI</th>
                <th className="text-center p-4 font-bold">Tesouro Selic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["IR pessoa física", "Isento ✅", "Tabela regressiva ⚠️", "Tabela regressiva ⚠️"],
                ["Garantia", "FGC R$ 250k ✅", "FGC R$ 250k ✅", "Tesouro Nacional ✅"],
                ["Liquidez", "Após carência (mín. 6m) ⚠️", "Diária ou no prazo ✅", "Diária (D+1) ✅"],
                ["Valor mínimo", "R$ 1k–R$ 5k", "A partir de R$ 1", "R$ 30,00 ✅"],
                ["Risco de crédito", "Banco emissor", "Banco emissor", "Governo Federal"],
                ["Melhor para", "Objetivos 6–24 meses", "Reserva / curto prazo", "Reserva de emergência"],
              ].map(([c, lci, cdb, tez]) => (
                <tr key={c} className="hover:bg-muted/20">
                  <td className="p-4 font-medium text-muted-foreground">{c}</td>
                  <td className="p-4 text-center text-invest">{lci}</td>
                  <td className="p-4 text-center">{cdb}</td>
                  <td className="p-4 text-center">{tez}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A regra prática de quando cada um vence é menos complicada do que parece. O <strong>Tesouro Selic</strong> ganha sempre que o critério principal é liquidez imediata sem perda de rendimento — é o investimento ideal para reserva de emergência, porque você pode resgatar a qualquer momento com rendimento praticamente sem variação. O <strong>CDB com liquidez diária</strong> é o concorrente direto do Tesouro Selic e costuma oferecer taxas similares ou ligeiramente superiores em bancos digitais, mas com o risco de crédito do banco emissor (coberto pelo FGC dentro do limite). A <strong>LCI ou LCA</strong> vence quando o investidor tem um objetivo com prazo definido de pelo menos 6 meses e não precisa da liquidez antes disso: a isenção fiscal transforma uma taxa aparentemente mais baixa em um retorno líquido superior às alternativas tributáveis. Para quem está construindo uma carteira de renda fixa diversificada, a combinação mais eficiente em 2026 é: Tesouro Selic para a reserva de emergência, CDB com liquidez diária para o caixa de curto prazo, e LCI/LCA para objetivos de médio prazo com prazo definido.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Como Escolher e Onde Comprar: Passo a Passo
        </h2>
        <p>
          O primeiro passo antes de qualquer aplicação em LCI ou LCA é confirmar o prazo do objetivo financeiro que você quer atingir com esse recurso. Se o objetivo tem data definida — uma viagem daqui a 10 meses, uma entrada de imóvel em 18 meses, um curso em 1 ano — e você tem certeza de que não vai precisar do dinheiro antes, a LCI ou LCA é candidata natural. Se há qualquer chance de precisar do recurso antes da carência, o Tesouro Selic ou um CDB com liquidez diária são escolhas muito mais seguras, mesmo que rendam menos.
        </p>
        <p>
          O segundo passo é calcular o gross-up conforme explicado acima e verificar se a LCI ou LCA disponível ultrapassa o mínimo competitivo para o seu prazo. Em 2026, plataformas como XP, Rico, BTG Pactual Digital, NuInvest e Inter oferecem LCIs e LCAs com taxas entre 88% e 95% do CDI para carências de 6 a 12 meses — todas bem acima do mínimo de 80% do CDI necessário para superar o CDB 100% CDI em 12 meses. Bancos tradicionais grandes (Itaú, Bradesco, Banco do Brasil) historicamente pagam menos — entre 65% e 80% do CDI — em LCIs e LCAs para clientes de varejo padrão. Aceitar essas taxas significa abrir mão de parte relevante do benefício fiscal sem necessidade.
        </p>
        <p>
          O terceiro passo é verificar o limite do FGC: some tudo que você já tem investido em produtos cobertos pelo FGC naquela instituição (CDB, LCI, LCA, conta corrente, poupança) e confirme que o novo aporte não ultrapassa R$ 250.000 naquele banco. Se ultrapassar, distribua entre duas ou mais instituições. Por último, leia as condições específicas de resgate antes de confirmar: a carência regulatória mínima de 6 meses não é garantia de que aquela emissão específica permitirá resgate antes do vencimento — muitos títulos são emitidos sem essa opção, e o mercado secundário pode oferecer preços com deságio considerável.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Rentabilidade passada não garante resultados futuros. Consulte um assessor de investimentos certificado pela CVM antes de tomar decisões financeiras relevantes.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: LCI de banco grande é o mesmo erro do CDB de banco grande">
        <p>
          O padrão que vejo se repetir com LCI e LCA é exatamente o mesmo do CDB: o investidor aceita a oferta do banco onde já tem conta, sem comparar com plataformas abertas. Um banco grande pagando 70% do CDI numa LCI de 12 meses rende praticamente o mesmo que um CDB 56% do CDI com IR — um retorno absurdamente baixo para 2026. A mesma LCI em uma corretora digital, emitida por um banco médio com FGC, facilmente paga 92% do CDI pelo mesmo prazo. A diferença em R$ 50.000 por 12 meses é de mais de R$ 1.200 no bolso, sem abrir mão de nenhuma segurança adicional.
        </p>
        <p className="mt-2">
          O único cuidado real é com o prazo: LCI e LCA não são para quem pode precisar do dinheiro antes do vencimento. Para a reserva de emergência, Tesouro Selic. Para objetivos com data definida, LCI e LCA de plataforma aberta batem consistentemente o CDB equivalente em rendimento líquido. <strong>A isenção de IR só vale quando você a compara corretamente — e a maioria dos investidores não faz esse cálculo.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Resolução CMN nº 5.119/2024 — Prazo Mínimo de LCI e LCA",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20CMN&numero=5119",
            publisher: "Banco Central do Brasil / CMN",
            accessedAt: "Julho 2026",
          },
          {
            title: "CMN Reduz Prazo de Carência de LCIs e LCAs de Nove para Seis Meses",
            url: "https://www.seudinheiro.com/2025/renda-fixa/cmn-reduz-prazo-de-carencia-de-lcis-e-lcas-de-nove-para-seis-meses-julw/",
            publisher: "Seu Dinheiro",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 11.033/2004 — Isenção de IR sobre LCI e LCA para Pessoa Física",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l11033.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "FGC — Fundo Garantidor de Créditos: Cobertura e Limites",
            url: "https://www.fgc.org.br/garantia-fgc/sobre-a-garantia-fgc",
            publisher: "Fundo Garantidor de Créditos (FGC)",
            accessedAt: "Julho 2026",
          },
          {
            title: "Isenção de IR nas LCIs e LCAs: Regras Vigentes em 2026",
            url: "https://investnews.com.br/investimentos/isencao-de-ir-nas-lci-e-lca-o-que-realmente-esta-valendo-nas-regras-dos-titulos-bancarios/",
            publisher: "InvestNews",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tabela Regressiva de IR — Aplicações de Renda Fixa",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="lci-lca-2026-guia-completo" />
      <CommentSection
        postId="lci-lca-2026-guia-completo"
        postTitle="LCI e LCA em 2026: Guia Completo com Isenção de IR, Carência e Gross-Up"
        category="invest"
      />
    </article>
  );
};

export default LciLca2026Guia;
