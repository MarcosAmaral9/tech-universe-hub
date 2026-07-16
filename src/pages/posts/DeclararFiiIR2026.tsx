/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/como-declarar-fiis-imposto-de-renda-2026": {
 *   title: "Como Declarar FIIs no Imposto de Renda 2026: Guia Passo a Passo",
 *   description: "Guia completo para declarar FIIs no IRPF 2026: Bens e Direitos (Grupo 07, Código 03), rendimentos isentos (Código 26), ganho de capital a 20% via DARF 6015, amortizações e compensação de prejuízo. Sem erros na malha fina.",
 *   keywords: "declarar FII imposto de renda 2026, IRPF FII 2026, ganho de capital FII 20%, DARF 6015 FII, rendimentos isentos FII, bens e direitos FII, amortização FII IR, como declarar fundos imobiliários 2026",
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
  Clock, User, Calendar, FileText, AlertTriangle,
  CheckCircle, DollarSign, BarChart3, Lightbulb, Shield
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/declarar-fii-ir-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DeclararFiiIR2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "como-declarar-fiis-imposto-de-renda-2026",
      "Como Declarar FIIs no Imposto de Renda 2026: Guia Passo a Passo",
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
            FIIs · Imposto de Renda · IRPF 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Como Declarar FIIs no Imposto de Renda 2026: Guia Completo Passo a Passo
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Declarar FIIs envolve <strong>três fichas diferentes</strong> no programa da Receita Federal, cada uma com regra própria. A boa notícia: os dividendos mensais são isentos. A armadilha: o ganho de capital na venda de cotas é tributado em <strong>20% sem isenção nenhuma</strong> — diferente das ações — e o DARF precisa ser pago pelo próprio investidor, mês a mês. Este guia cobre tudo: posse das cotas, rendimentos isentos, ganho de capital, amortizações e como compensar prejuízos.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
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
          alt="Como declarar FIIs no Imposto de Renda 2026 — guia completo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Mapa das 3 fichas */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-invest" />
            O Mapa das 3 Fichas — Visão Geral
          </h2>
          <div className="space-y-3">
            {[
              {
                ficha: "1. Bens e Direitos",
                caminho: "Grupo 07 → Código 03",
                o_que: "Posse das cotas em 31/12 — sempre pelo custo de aquisição, nunca valor de mercado",
                cor: "border-l-blue-500",
              },
              {
                ficha: "2. Rendimentos Isentos e Não Tributáveis",
                caminho: "Código 26 — Outros",
                o_que: "Dividendos mensais recebidos ao longo do ano — isentos, mas obrigatórios",
                cor: "border-l-green-500",
              },
              {
                ficha: "3. Renda Variável → Operações em FII ou Fiagro",
                caminho: "Resultado mensal das vendas com lucro ou prejuízo",
                o_que: "Ganho de capital tributado a 20% — DARF código 6015, sem isenção de R$ 20 mil",
                cor: "border-l-red-500",
              },
            ].map(({ ficha, caminho, o_que, cor }) => (
              <div key={ficha} className={`p-4 bg-card/50 rounded-lg border-l-4 ${cor} border border-border/30`}>
                <p className="font-bold text-sm">{ficha}</p>
                <p className="text-xs text-invest mt-0.5 font-mono">{caminho}</p>
                <p className="text-xs text-muted-foreground mt-1">{o_que}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3 text-yellow-500" />
            Investidores que omitem qualquer uma dessas fichas estão sujeitos a malha fina — as administradoras informam os dados automaticamente à Receita Federal.
          </p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Quem É Obrigado a Declarar FIIs no IRPF 2026
        </h2>
        <p>
          Antes de entender como declarar, é preciso saber se você está obrigado a entregar a declaração por causa dos seus FIIs. A obrigatoriedade de declaração pode ser acionada por qualquer um dos seguintes critérios: (1) possuir bens e direitos — incluindo suas cotas de FII — com valor total superior a <strong>R$ 800.000</strong> em 31 de dezembro do ano-calendário; (2) ter realizado operações em bolsa de valores com valor total superior a <strong>R$ 40.000</strong> no ano, mesmo sem lucro; (3) ter <strong>obtido ganho de capital</strong> na venda de cotas de FIIs, em qualquer valor — até R$ 1 de lucro gera obrigação de declarar e pagar DARF; ou (4) ter recebido rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de <strong>R$ 200.000</strong> no ano — e os dividendos isentos de FIIs entram nessa soma, mesmo sendo isentos de IR.
        </p>
        <p>
          Esse último ponto pega muita gente de surpresa: um investidor que tem uma carteira de FIIs gerando R$ 18.000 por mês em dividendos (R$ 216.000 no ano) já está obrigado a declarar exclusivamente pela soma dos rendimentos isentos, mesmo que nunca tenha vendido uma única cota e mesmo que não tenha nenhuma renda tributável significativa. O motivo é que a Receita Federal cruza os dados informados pelas administradoras dos fundos com a declaração do contribuinte — e qualquer divergência chama atenção imediata.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <FileText className="h-7 w-7 text-invest" />
          Ficha 1 — Bens e Direitos: Declarando a Posse das Cotas
        </h2>
        <p>
          A ficha "Bens e Direitos" é onde você informa que é dono de cotas de FII. A lógica é simples, mas o erro mais comum é usar o valor de mercado das cotas em vez do custo de aquisição. O programa da Receita pede sempre o <strong>custo histórico</strong> — quanto você pagou pelas cotas, incluindo taxas de corretagem e emolumentos da B3 — e não o valor pelo qual as cotas estão cotadas hoje.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { num: "01", acao: 'Abra a ficha "Bens e Direitos"', detalhe: 'No programa IRPF da Receita Federal, acesse "Fichas da Declaração" → "Bens e Direitos" → clique em "Novo".' },
            { num: "02", acao: "Selecione Grupo 07 — Fundos", detalhe: 'No campo "Grupo", selecione "07 – Fundos". No campo "Código", selecione "03 – Fundo de Investimento Imobiliário".' },
            { num: "03", acao: "Informe o CNPJ do fundo", detalhe: "Cada FII tem CNPJ próprio — diferente do CNPJ da corretora. Encontre no informe de rendimentos enviado pela administradora, não pela corretora." },
            { num: "04", acao: "Preencha a Discriminação", detalhe: "Nome do FII, quantidade de cotas, nome da corretora custodiante e, se quiser, o ticker (MXRF11, HGCR11 etc.) para facilitar a identificação futura." },
            { num: "05", acao: "Informe o custo de aquisição", detalhe: 'Campo "Situação em 31/12/2025": some o valor total pago em todas as compras de cotas daquele FII, incluindo corretagem. Nunca use o preço de fechamento da cota em 31/12.' },
            { num: "06", acao: "Repita para cada FII", detalhe: "Um lançamento por fundo. Se você tem 8 FIIs diferentes, são 8 lançamentos distintos em Bens e Direitos — um para cada CNPJ." },
          ].map(({ num, acao, detalhe }) => (
            <div key={num} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
              <span className="text-2xl font-bold text-invest/40 flex-shrink-0 w-10 font-mono">{num}</span>
              <div>
                <p className="font-bold text-sm mb-1">{acao}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Um ponto importante sobre o <strong>custo médio</strong>: se você fez diversas compras do mesmo FII ao longo do ano, o valor a declarar é o custo médio total — (soma de todos os valores pagos) ÷ (total de cotas compradas) × (cotas em carteira em 31/12). Exemplo: comprou 100 cotas a R$ 100 (R$ 10.000) e depois mais 50 cotas a R$ 110 (R$ 5.500). Custo total: R$ 15.500 para 150 cotas = custo médio de R$ 103,33 por cota. Se vendeu 30 cotas no ano, a situação final é de 120 cotas × R$ 103,33 = R$ 12.400 a declarar em Bens e Direitos.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Ficha 2 — Rendimentos Isentos: Declarando os Dividendos Mensais
        </h2>
        <p>
          Os rendimentos mensais distribuídos pelos FIIs — popularmente chamados de "dividendos" ou "aluguéis" — são isentos de IR para pessoas físicas que atendam às condições da lei (fundo com pelo menos 50 cotistas, cotas negociadas exclusivamente em bolsa, e o cotista não pode deter mais de 10% das cotas do fundo). Mas isenção de IR não significa que os valores podem ser ignorados na declaração. A administradora do fundo informa automaticamente esses valores à Receita Federal — e se você não lançar na declaração, vai divergir dos dados que a Receita já tem, o que gera retenção na malha fina.
        </p>
        <p>
          O caminho é: ficha <strong>"Rendimentos Isentos e Não Tributáveis"</strong> → clique em "Novo" → código <strong>"26 — Outros"</strong> (em algumas versões do programa pode aparecer como código específico para "Rendimentos de FII"). Informe o CNPJ da fonte pagadora (o CNPJ do fundo, não da corretora), o nome do fundo e o <strong>total de rendimentos recebidos no ano inteiro</strong> daquele fundo — some todos os meses. Se você tem dez FIIs, são dez lançamentos distintos na ficha de rendimentos isentos, um por CNPJ. O informe de rendimentos enviado pela administradora de cada fundo, geralmente disponível no site da administradora ou na área do investidor da B3, tem o total anual pronto para copiar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Ficha 3 — Renda Variável: O Ganho de Capital na Venda de Cotas
        </h2>
        <p>
          Aqui está a parte que mais gera dúvidas — e onde ocorrem os erros mais caros. Quando você vende cotas de um FII com lucro, esse ganho de capital é tributado à alíquota fixa de <strong>20%</strong> sobre o lucro líquido (preço de venda menos custo médio de aquisição, descontadas as taxas de corretagem). E ao contrário das ações, <strong>não existe isenção de R$ 20.000 mensais para FIIs</strong>: mesmo que você tenha vendido R$ 500 em cotas com lucro de R$ 50, o IR de R$ 10 deve ser recolhido via DARF.
        </p>
        <p>
          O processo tem duas etapas que precisam acontecer em momentos diferentes. A <strong>primeira etapa</strong> é o recolhimento mensal: toda vez que você vende cotas de FII com lucro, deve calcular o ganho líquido do mês (total de vendas com lucro menos total de vendas com prejuízo no mesmo mês), multiplicar por 20% e pagar um DARF com <strong>código 6015</strong> até o <strong>último dia útil do mês seguinte</strong> ao da venda. O atraso gera multa de 0,33% ao dia (limitada a 20%) mais Selic acumulada — pequenos descuidos viram custo relevante ao longo do tempo. A <strong>segunda etapa</strong> é a declaração anual: na ficha <strong>"Renda Variável" → "Operações em FII ou Fiagro"</strong>, informe o resultado líquido de cada mês do ano — positivo (lucro) ou negativo (prejuízo). Informe também os DARFs já pagos mensalmente, para que o sistema confirme que o imposto foi recolhido no prazo correto.
        </p>
        <p>
          Um exemplo prático: em março de 2025 você vendeu 50 cotas do MXRF11 por R$ 12,00 cada (total R$ 600), e havia comprado por R$ 10,00 cada com custo médio (total R$ 500). O lucro bruto é R$ 100, menos a corretagem de R$ 5 = lucro líquido de R$ 95. O IR devido é 20% × R$ 95 = <strong>R$ 19,00</strong>, que deveria ser pago via DARF código 6015 até o último dia útil de abril. Na declaração anual, o campo "Resultado Positivo em Março" recebe o valor R$ 95, e o campo "IR Pago" de março recebe R$ 19.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Amortizações: O Erro Que Custa Caro Nos Cálculos de Ganho de Capital
        </h2>
        <p>
          As <strong>amortizações</strong> são um tipo de evento corporativo dos FIIs que frequentemente é tratado de forma incorreta na declaração. Amortização é a devolução parcial do capital investido pelo fundo ao cotista — não é rendimento, não é dividendo, e não é lucro. Quando um FII amortiza R$ 5,00 por cota, está devolvendo parte do valor que você investiu.
        </p>
        <p>
          O tratamento correto é reduzir o custo médio das cotas pelo valor amortizado por cota. Se você tinha cotas com custo médio de R$ 100,00 e o fundo amortizou R$ 5,00 por cota, seu novo custo médio é R$ 95,00 por cota. Em Bens e Direitos, o saldo do FII cai pelo valor total amortizado recebido — e não pelo valor atualizado de mercado. O problema surge no ganho de capital: ao vender cotas depois de receber amortizações sem ter ajustado o custo médio, o investidor calcula um lucro menor do que deveria (porque o custo médio que usa está inflado), paga menos imposto agora, mas estará incorreto do ponto de vista da Receita Federal. O informe de rendimentos da administradora discrimina amortizações em campo separado dos proventos — se não discriminar claramente, solicite esclarecimento diretamente à administradora antes de declarar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Compensação de Prejuízos: Como Usar Perdas para Pagar Menos Imposto
        </h2>
        <p>
          Uma das regras mais úteis e menos conhecidas sobre FIIs é a possibilidade de <strong>compensar prejuízos acumulados</strong> com ganhos futuros na venda de cotas de FIIs. Funciona assim: se em um mês você vende cotas de um FII com prejuízo de R$ 200, e no mês seguinte vende cotas de outro FII com lucro de R$ 300, o imposto de 20% é calculado sobre o lucro líquido de R$ 100 (R$ 300 − R$ 200), não sobre o lucro bruto de R$ 300 do segundo mês. Isso pode economizar R$ 40 de imposto nesse exemplo simples — e em carteiras maiores com operações frequentes, a soma das compensações ao longo do ano pode ser bem relevante.
        </p>
        <p>
          A compensação de prejuízos em FIIs funciona <strong>apenas entre FIIs</strong> — você não pode usar um prejuízo de FII para abater um lucro de ações, e vice-versa. Para que a compensação seja válida, o prejuízo precisa ter sido apurado e informado corretamente na ficha de Renda Variável no mês em que ocorreu. Prejuízos não informados oportunamente na declaração mensal não podem ser "recuperados" na declaração anual retroativamente. Por isso, manter o controle mês a mês — mesmo em meses onde só houve prejuízo e nenhum DARF precisou ser pago — é fundamental para capturar todas as oportunidades de compensação ao longo do ano fiscal.
        </p>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <h3 className="font-bold text-base mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-invest" />
            Checklist Final: Declaração de FIIs no IRPF 2026
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Reuni os informes de rendimentos de TODAS as administradoras dos FIIs (não confundir com informe da corretora)",
              "Cada FII está lançado em Bens e Direitos (Grupo 07, Código 03) com seu CNPJ próprio e custo de aquisição correto",
              "Usei o custo histórico de aquisição — não o valor de mercado em 31/12",
              "Reduzi o custo médio de cada FII pelas amortizações recebidas ao longo do ano",
              "Lançei os dividendos de cada FII em Rendimentos Isentos e Não Tributáveis (Código 26), um por CNPJ",
              "Paguei DARF código 6015 em todos os meses em que vendi cotas com lucro (até o último dia útil do mês seguinte)",
              "Informei resultado mensal (positivo ou negativo) em Renda Variável → Operações em FII ou Fiagro",
              "Registrei prejuízos dos meses sem lucro para compensação futura",
              "Conferi os valores do informe de rendimentos com o que estou declarando antes de enviar",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-invest mt-0.5 flex-shrink-0">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não substitui orientação profissional de contabilidade ou assessoria tributária. Em caso de dúvidas sobre sua situação específica, consulte um contador ou a própria Receita Federal. As regras descritas referem-se ao ano-calendário 2025 (declaração IRPF 2026).</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o erro de DARF atrasado destrói o rendimento isento que você tanto buscou">
        <p>
          Vejo o mesmo erro repetir em carteiras de FIIs de todos os tamanhos: o investidor escolhe bem os fundos, recebe os dividendos mensais isentos, mas esquece de pagar o DARF quando vende uma cota com lucro pequeno — "é só R$ 30, vou deixar pra depois". Depois vira multa de 20% mais Selic, que come todo o rendimento isento daquele mês e ainda cria uma pendência que complica a declaração anual.
        </p>
        <p className="mt-2">
          A solução é simples: configure um lembrete no calendário para o último dia útil de cada mês, reveja se houve alguma venda com lucro no mês anterior e, se houve, emita e pague o DARF antes de dormir. <strong>Dez minutos por mês evitam dor de cabeça proporcional a semanas de trabalho na época da declaração anual.</strong> E nunca esqueça que a Receita já tem os dados da B3 antes de você entregar a declaração.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Como Declarar FIIs no Imposto de Renda 2026 — Passo a Passo",
            url: "https://renovainvest.com.br/blog/como-declarar-fundos-de-investimento-no-irpf-de-2022/",
            publisher: "Renova Invest / BTG",
            accessedAt: "Julho 2026",
          },
          {
            title: "Fundos Imobiliários no Imposto de Renda: Saiba Como Declarar",
            url: "https://conteudos.xpi.com.br/aprenda-a-investir/relatorios/como-declarar-fundos-imobiliarios-no-imposto-de-renda/",
            publisher: "XP Investimentos",
            accessedAt: "Julho 2026",
          },
          {
            title: "Como Declarar FIIs no IR 2026 — InvestNews",
            url: "https://investnews.com.br/financas/fundos-imobiliarios-no-imposto-de-renda-fiis/",
            publisher: "InvestNews",
            accessedAt: "Julho 2026",
          },
          {
            title: "Como Declarar Ações e FIIs no IR 2026: Alíquotas e DARF",
            url: "https://www.adrianofreire.com.br/blog/como-declarar-acoes-fiis-ir-2026",
            publisher: "Adriano Freire Finanças",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 11.196/2005 — Isenção de IR sobre Rendimentos de FIIs para Pessoa Física",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "Manual de Preenchimento da DIRPF 2026 — Receita Federal",
            url: "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos/irpf/2026/manual-de-preenchimento-dirpf-2026",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="como-declarar-fiis-imposto-de-renda-2026" />
      <CommentSection
        postId="como-declarar-fiis-imposto-de-renda-2026"
        postTitle="Como Declarar FIIs no Imposto de Renda 2026: Guia Completo Passo a Passo"
        category="invest"
      />
    </article>
  );
};

export default DeclararFiiIR2026;
