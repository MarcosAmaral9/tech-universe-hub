import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, AlertTriangle,
  BarChart3, Calculator, Lightbulb, DollarSign, Target
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/nova-tabela-ir-2026-isencao-5-mil.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const NovaTabelaIR2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "nova-tabela-ir-2026-isencao-5-mil",
      "Nova Tabela do IR 2026: Isenção até R$ 5.000 e Desconto até R$ 7.350",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Imposto de Renda · Lei 15.270/2025 · Planejamento
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Nova Tabela do IR 2026: Isenção até R$ 5.000, Desconto até R$ 7.350 e o Que Muda no Seu Bolso
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Desde janeiro de 2026, a <strong>Lei nº 15.270/2025</strong> zera o Imposto de Renda de quem recebe até
          R$ 5.000 por mês e cria uma <strong>redução decrescente</strong> que só desaparece a partir de
          R$ 7.350. Este guia explica a mecânica real do cálculo — tabela progressiva, desconto simplificado
          de R$ 607,20 e a fórmula do redutor — com os números oficiais da Receita Federal e o que fazer com
          o dinheiro que sobrou no contracheque.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />27 de Julho, 2026</span>
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
          width={1280}
          height={720}
          src={heroImg}
          alt="Nova tabela do Imposto de Renda 2026 com isenção até R$ 5.000"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Tabela progressiva mensal */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            Tabela de Incidência Mensal — vigente desde janeiro de 2026
          </h2>
          <p className="text-xs text-muted-foreground mb-4">Base de cálculo, alíquota e parcela a deduzir. Fonte: Receita Federal (atualizado em 27/04/2026).</p>
          <div className="space-y-2">
            {[
              { faixa: "Até R$ 2.428,80", aliq: "Isento", ded: "—" },
              { faixa: "De R$ 2.428,81 a R$ 2.826,65", aliq: "7,5%", ded: "R$ 182,16" },
              { faixa: "De R$ 2.826,66 a R$ 3.751,05", aliq: "15,0%", ded: "R$ 394,16" },
              { faixa: "De R$ 3.751,06 a R$ 4.664,68", aliq: "22,5%", ded: "R$ 675,49" },
              { faixa: "Acima de R$ 4.664,68", aliq: "27,5%", ded: "R$ 908,73" },
            ].map(({ faixa, aliq, ded }) => (
              <div key={faixa} className="grid grid-cols-3 gap-2 py-2 border-b border-border/30 text-xs">
                <span className="text-muted-foreground">{faixa}</span>
                <span className="text-center text-invest font-bold">{aliq}</span>
                <span className="text-right">{ded}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-medium">
            Desconto simplificado mensal: R$ 607,20 · Dedução por dependente: R$ 189,59 · Isenção previdenciária 65+: R$ 1.903,98.
          </p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Que a Lei 15.270/2025 Mudou de Verdade
        </h2>
        <p>
          A confusão mais comum sobre a nova tabela do IR 2026 é achar que a faixa de isenção da tabela progressiva
          subiu para R$ 5.000. Não foi isso que aconteceu. A tabela progressiva mensal continua com a primeira faixa
          isenta em R$ 2.428,80 — o que a Lei nº 15.270, de 26 de novembro de 2025, criou foi um mecanismo diferente e
          paralelo: uma <strong>tabela de redução do imposto</strong>, inserida no art. 3º-A da Lei nº 9.250/1995, que
          abate o imposto calculado até zerá-lo para quem recebe até R$ 5.000 mensais.
        </p>
        <p>
          Na prática, o cálculo passou a ter três etapas. Primeiro, apura-se a base de cálculo, subtraindo do salário
          bruto as deduções legais (contribuição previdenciária, dependentes, pensão) ou o desconto simplificado de
          R$ 607,20 — o que for mais vantajoso. Segundo, aplica-se a tabela progressiva sobre essa base, obtendo o
          imposto devido. Terceiro, aplica-se a redução: até <strong>R$ 312,89</strong> para rendimentos tributáveis de
          até R$ 5.000, de modo que o imposto devido fique em zero. Para rendimentos entre R$ 5.000,01 e R$ 7.350,00,
          a redução passa a ser calculada pela fórmula <strong>R$ 978,62 − (0,133145 × rendimentos tributáveis)</strong>,
          decrescendo linearmente até zerar exatamente em R$ 7.350.
        </p>
        <p>
          É por isso que o desenho é considerado tecnicamente elegante pelos tributaristas: não há "degrau" nem armadilha
          de faixa. Quem ganha R$ 5.001 não passa a pagar imposto cheio de repente — a redução simplesmente encolhe
          centavo a centavo. Antes da mudança, a faixa de isenção efetiva estava em R$ 2.259,20, o que significa que a
          reforma multiplicou por mais de duas vezes o patamar de renda protegido da tributação mensal.
        </p>

        <AdInArticle />

        {/* Tabela de redução */}
        <div className="not-prose my-8 rounded-xl border border-invest/30 overflow-hidden">
          <div className="bg-invest/10 p-4">
            <p className="font-bold text-sm flex items-center gap-2">
              <Calculator className="h-4 w-4 text-invest" />
              Tabela de Redução Mensal do Imposto (art. 3º-A da Lei 9.250/1995)
            </p>
          </div>
          <div className="p-4 space-y-3 text-xs">
            {[
              {
                faixa: "Rendimentos até R$ 5.000,00",
                regra: "Redução de até R$ 312,89 — o suficiente para que o imposto devido seja zero.",
                cor: "border-green-500/30 bg-green-500/5",
              },
              {
                faixa: "De R$ 5.000,01 a R$ 7.350,00",
                regra: "Redução = R$ 978,62 − (0,133145 × rendimento tributável). Cai linearmente até zerar em R$ 7.350.",
                cor: "border-yellow-500/30 bg-yellow-500/5",
              },
              {
                faixa: "Acima de R$ 7.350,00",
                regra: "Sem redução. O imposto é o resultado puro da tabela progressiva mensal.",
                cor: "border-red-500/30 bg-red-500/5",
              },
            ].map(({ faixa, regra, cor }) => (
              <div key={faixa} className={`rounded-lg border p-3 ${cor}`}>
                <p className="font-bold mb-1">{faixa}</p>
                <p className="text-muted-foreground">{regra}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Calculator className="h-7 w-7 text-invest" />
          Três Exemplos Oficiais da Receita, Passo a Passo
        </h2>
        <p>
          A Receita Federal publicou exemplos de aplicação da lei que ajudam a entender o cálculo sem margem para
          interpretação. Vale reproduzir os três casos mais representativos, com os números exatos divulgados.
        </p>
        <p>
          <strong>Salário de R$ 4.000.</strong> Com o desconto simplificado de R$ 607,20, a base de cálculo fica em
          R$ 3.392,80, dentro da faixa de 15% (parcela a deduzir de R$ 394,16). O imposto devido pela tabela seria de
          R$ 114,76. Como o rendimento está abaixo de R$ 5.000, aplica-se a redução limitada ao próprio imposto:
          R$ 114,76 − R$ 114,76 = <strong>R$ 0,00 de IRRF</strong>.
        </p>
        <p>
          <strong>Salário de R$ 5.000.</strong> Base de cálculo de R$ 4.392,80 (após o desconto simplificado), faixa de
          22,5% com parcela a deduzir de R$ 675,49. Imposto devido: R$ 312,89 — exatamente o teto da redução da primeira
          faixa. Resultado: <strong>R$ 0,00 de IRRF</strong>. Esse é o ponto em que a lei foi calibrada.
        </p>
        <p>
          <strong>Salário de R$ 6.000.</strong> Aqui as deduções legais (previdência de R$ 649,60) superam o desconto
          simplificado, então a base é R$ 5.350,40, faixa de 27,5% com parcela a deduzir de R$ 908,73, gerando imposto
          de R$ 562,63. A redução aplicável é R$ 978,62 − (0,133145 × R$ 6.000) = R$ 179,75. O imposto final fica em
          <strong> R$ 382,88</strong> — cerca de 32% menor do que seria sem o redutor.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-invest" />
          A Declaração de 2027: Tabela Anual e Redução Anual
        </h2>
        <p>
          O mesmo mecanismo vale no ajuste anual, com números proporcionais. Para o exercício 2027 (ano-calendário 2026),
          a tabela de incidência anual isenta bases de até R$ 29.145,60 e chega a 27,5% acima de R$ 55.976,16, com
          parcela a deduzir de R$ 10.904,66. O limite anual do desconto simplificado é de R$ 17.640,00, a dedução por
          dependente é de R$ 2.275,08 e o limite de despesas com instrução é de R$ 3.561,50.
        </p>
        <p>
          Na redução anual, rendimentos tributáveis de até <strong>R$ 60.000</strong> recebem abatimento de até
          R$ 2.694,15 — zerando o imposto. Entre R$ 60.000,01 e R$ 88.200,00, a redução é
          R$ 8.429,73 − (0,095575 × rendimentos tributáveis), zerando a partir de R$ 88.200. A consequência prática é
          importante: quem recebeu 13º, PLR ou fez trabalho extra e ultrapassou o teto anual pode ter isenção mensal
          durante o ano e ainda assim imposto a pagar no ajuste, porque o cálculo definitivo é o anual.
        </p>
        <p>
          Vale lembrar também que a obrigatoriedade de declarar não é a mesma coisa que pagar imposto. Continuam obrigados
          a entregar a declaração quem tem bens acima do limite, quem operou em bolsa, quem recebeu rendimentos isentos
          acima do teto ou quem teve receita rural relevante — mesmo com IRRF zerado durante todo o ano.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          A Contrapartida: Tributação de Dividendos e Renda Alta
        </h2>
        <p>
          A Lei 15.270/2025 não apenas desonerou — ela também criou fontes de arrecadação para compensar a renúncia
          fiscal. A mesma norma alterou a Lei nº 9.249/1995 e encerrou a isenção incondicional de lucros e dividendos
          que vigorava desde 1996, além de instituir uma tributação mínima para pessoas físicas de renda muito alta.
          Para o investidor pessoa física, a mudança tem efeito direto no planejamento: parte do fluxo de dividendos
          que antes chegava líquido à conta passa a ter retenção na fonte, e o desenho da carteira precisa levar isso em
          consideração ao comparar ações pagadoras de dividendos com renda fixa e fundos imobiliários.
        </p>
        <p>
          Para a maior parte dos leitores, porém, o efeito líquido da lei é positivo: uma família com dois salários de
          R$ 4.500 que antes pagava algumas centenas de reais por mês em IRRF passou a receber esse valor integralmente.
          A decisão relevante deixou de ser fiscal e virou comportamental — o que fazer com esse dinheiro extra.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Fazer com o Aumento Líquido no Contracheque
        </h2>
        <p>
          Com a Selic ainda em 14% ao ano em julho de 2026, o dinheiro que deixou de ir para a Receita tem destinos
          objetivamente bons. A sequência que faz sentido para a maioria: primeiro, quitar dívidas caras — cartão
          rotativo e cheque especial cobram taxas que nenhum investimento supera; segundo, completar a reserva de
          emergência em Tesouro Selic ou CDB de liquidez diária com pelo menos 100% do CDI; terceiro, direcionar o
          excedente para objetivos de médio prazo com títulos IPCA+ ou prefixados de prazo compatível.
        </p>
        <p>
          O erro clássico em momentos de aumento de renda líquida é a inflação de estilo de vida: o valor some em
          despesas recorrentes novas antes mesmo de ser percebido. A defesa é simples e mecânica — configurar um débito
          automático de investimento no dia seguinte ao pagamento, com o valor exato que deixou de ser retido na fonte.
          Quem nunca viu o dinheiro na conta corrente não sente falta dele.
        </p>
        <p>
          Também vale revisar a declaração antes de comemorar. A mudança na tabela altera o valor retido mês a mês, mas
          não elimina a obrigação de declarar quem se enquadra nos demais critérios — como posse de bens acima do limite,
          ganhos de capital, operações em bolsa ou rendimentos isentos relevantes. Muita gente confunde "não pagar
          imposto" com "não declarar", e essa confusão custa multa. O ideal é tratar a nova regra como alívio de fluxo de
          caixa mensal, mantendo a mesma disciplina de organização de documentos ao longo do ano: informes de
          rendimentos, comprovantes de despesas médicas, recibos de educação e extratos de investimentos guardados em
          uma pasta única, física ou digital.
        </p>
        <p>
          Outro cuidado importante é com quem tem mais de uma fonte de renda. Se você recebe salário de uma empresa e
          presta serviços como autônomo, ou acumula aposentadoria com trabalho ativo, cada fonte aplica a tabela
          isoladamente na retenção. O ajuste acontece só na declaração anual, e é comum descobrir imposto a pagar mesmo
          tendo tido retenção em ambas. Nesses casos, o recomendável é simular a soma dos rendimentos ao longo do ano e,
          se necessário, recolher o carnê-leão mensalmente para evitar um susto em abril do ano seguinte.
        </p>
        <p>
          Para quem está na faixa do redutor decrescente, entre R$ 5.000 e R$ 7.350, existe uma consequência prática
          pouco comentada: aumentos salariais nessa faixa têm efeito líquido menor do que o bruto sugere, porque parte do
          ganho é absorvida pela redução do benefício. Isso não significa que o aumento seja ruim — o resultado final
          continua positivo —, apenas que a conta mental precisa ser feita com o valor líquido real. Simular no
          calculador da própria Receita antes de negociar salário ou aceitar uma proposta evita frustração.
        </p>
        <p>
          Por último, quem tem margem para planejar deve olhar para os instrumentos que reduzem a base de cálculo de
          forma legítima. Contribuições à previdência oficial, planos PGBL para quem declara no modelo completo, despesas
          médicas comprovadas e dependentes devidamente informados continuam sendo as alavancas mais eficientes. Nenhuma
          delas é atalho: todas exigem documentação e coerência com a realidade. Mas, somadas, costumam representar uma
          economia anual maior do que a busca por qualquer produto financeiro milagroso.
        </p>



        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui consultoria tributária ou recomendação de investimento. Os valores citados são os publicados pela Receita Federal para 2026 e podem ser atualizados. Consulte um contador ou assessor certificado antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a isenção é real, mas o ganho só existe se você não deixar o dinheiro evaporar">
        <p>
          A parte mais subestimada da nova tabela do IR não é o alívio no bolso — é o fato de que, pela primeira vez em
          muitos anos, uma mudança tributária relevante foi desenhada sem degrau. A fórmula do redutor entre R$ 5.000 e
          R$ 7.350 evita a distorção clássica em que ganhar R$ 50 a mais faz você receber menos líquido. Isso é boa
          engenharia fiscal e merece ser reconhecido.
        </p>
        <p className="mt-2">
          Dito isso, tenho visto muita gente comemorar a isenção e, três meses depois, não conseguir apontar para onde o
          dinheiro foi. <strong>Isenção fiscal sem destino definido vira consumo invisível.</strong> Se você entrou na
          faixa dos R$ 0,00 de IRRF, calcule exatamente quanto era retido antes, e agende hoje um aporte automático
          desse valor. O impacto de longo prazo dessa decisão é maior do que o da própria lei.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Tributação de 2026 — Tabelas de Incidência e Deduções do IRPF",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026",
            publisher: "Receita Federal",
            accessedAt: "Julho 2026",
          },
          {
            title: "Exemplos de Aplicação da Lei 15.270/2025",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/exemplos-de-aplicacao-da-lei-15-270-2025",
            publisher: "Receita Federal",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 15.270, de 26 de novembro de 2025",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm",
            publisher: "Presidência da República — Planalto",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 15.270/2025 — Publicação no Diário Oficial da União",
            url: "https://in.gov.br/web/dou/-/lei-n-15.270-de-26-de-novembro-de-2025-671614220",
            publisher: "Imprensa Nacional — DOU",
            accessedAt: "Julho 2026",
          },
          {
            title: "FAQ — Ampliação da Isenção do Imposto de Renda e Tributação Mínima das Altas Rendas",
            url: "https://www.gov.br/fazenda/pt-br/acesso-a-informacao/FAQAmpliaodaIsenodoImpostodeRendaetributaomnimadasaltasrendas.docx.pdf",
            publisher: "Ministério da Fazenda",
            accessedAt: "Julho 2026",
          },
          {
            title: "Lei nº 15.191, de 11 de agosto de 2025 — Atualização da Tabela Progressiva",
            url: "https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15191.htm",
            publisher: "Presidência da República — Planalto",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="nova-tabela-ir-2026-isencao-5-mil" />
      <CommentSection
        postId="nova-tabela-ir-2026-isencao-5-mil"
        postTitle="Nova Tabela do IR 2026: Isenção até R$ 5.000 e Desconto até R$ 7.350"
        category="invest"
      />
    </article>
  );
};

export default NovaTabelaIR2026;
