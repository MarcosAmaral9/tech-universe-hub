/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/tesouro-prefixado-vs-ipca-mais-2026": {
 *   title: "Tesouro Prefixado vs IPCA+ em 2026: Qual Escolher? Simulações com Números Reais",
 *   description: "Prefixado 13,5% vs IPCA+7,5% com IPCA a 5,48%: os dois rendem quase igual. Acima de 5,58% de inflação o IPCA+ vence. Análise com cenários reais, marcação a mercado, quando travar taxa e a estratégia híbrida que reduz risco nos dois cenários.",
 *   keywords: "Tesouro Prefixado vs IPCA+ 2026, quando escolher prefixado IPCA+, simulação Tesouro Direto 2026, marcação a mercado Tesouro, NTN-B prefixado 2026, Tesouro IPCA+ 2026, prefixado Selic alta, inflação breakeven tesouro",
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
  Clock, User, Calendar, TrendingUp, AlertTriangle,
  BarChart3, Shield, Lightbulb, DollarSign, Target
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tesouro-prefixado-vs-ipca-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const TesouroPrefixadoVsIPCA2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "tesouro-prefixado-vs-ipca-mais-2026",
      "Tesouro Prefixado vs IPCA+ em 2026: Qual Escolher?",
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
            Tesouro Direto · Prefixado · IPCA+ · Renda Fixa
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Tesouro Prefixado vs IPCA+ em 2026: Qual Escolher? Simulações com Números Reais
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Com IPCA a 5,48%, um prefixado a 13,5% e um IPCA+7,5% <strong>rendem quase o mesmo</strong> em 3 anos. Acima de 5,58% de inflação, o IPCA+ ganha. Abaixo disso, o prefixado vence. A escolha não é sobre qual paga mais agora — é sobre <strong>qual cenário você está protegendo</strong>. Este guia explica o breakeven, a marcação a mercado que assusta na tela e a estratégia híbrida que reduz o risco dos dois lados.
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
          alt="Tesouro Prefixado vs IPCA+ 2026 — qual escolher com simulações reais"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Simulação de breakeven */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-invest" />
            Simulação: Prefixado 13,5% vs IPCA+7,5% — R$ 200.000 em 3 anos
          </h2>
          <p className="text-xs text-muted-foreground mb-4">IPCA projetado em cada cenário. Após IR 15% (prazo acima de 720 dias). Fonte: Adriano Freire Finanças (mar/26).</p>
          <div className="space-y-3">
            {[
              { cenario: "IPCA = 3,5% ao ano", pref: "R$ 230.680", ipca: "R$ 226.140", vence: "Prefixado", cor: "text-blue-400" },
              { cenario: "IPCA = 5,0% ao ano", pref: "R$ 230.680", ipca: "R$ 229.820", vence: "Prefixado (margem mínima)", cor: "text-blue-400" },
              { cenario: "IPCA = 5,48% ao ano (projeção atual)", pref: "R$ 230.680", ipca: "R$ 230.600", vence: "Praticamente empatado", cor: "text-yellow-400" },
              { cenario: "IPCA = 7,0% ao ano", pref: "R$ 230.680", ipca: "R$ 233.900", vence: "IPCA+", cor: "text-green-400" },
              { cenario: "IPCA = 9,0% ao ano (choque)", pref: "R$ 230.680", ipca: "R$ 238.200", vence: "IPCA+ (larga vantagem)", cor: "text-green-400" },
            ].map(({ cenario, pref, ipca, vence, cor }) => (
              <div key={cenario} className="grid grid-cols-4 gap-2 py-2 border-b border-border/30 text-xs">
                <span className="text-muted-foreground col-span-1">{cenario}</span>
                <span className="text-center">{pref}</span>
                <span className="text-center text-invest">{ipca}</span>
                <span className={`text-right font-bold ${cor}`}>{vence}</span>
              </div>
            ))}
            <div className="grid grid-cols-4 gap-2 pt-1 text-xs font-bold text-muted-foreground">
              <span></span><span className="text-center">Prefixado</span><span className="text-center text-invest">IPCA+7,5%</span><span></span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-medium">Ponto de equilíbrio (breakeven): IPCA de 5,58% ao ano. Acima disso, IPCA+ vence. Abaixo, prefixado vence.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Como Funciona Cada Um: Prefixado e IPCA+ Explicados do Zero
        </h2>
        <p>
          O <strong>Tesouro Prefixado</strong> (NTN-F ou LTN) paga uma taxa de juros nominal definida no momento da compra e que não muda até o vencimento. Em julho de 2026, as taxas oferecidas pelo Tesouro Nacional para o prefixado giram em torno de 13,5% a 14% ao ano para prazos de 1 a 3 anos. Isso significa que, independentemente do que aconteça com a inflação, com a Selic ou com a economia ao longo do período, o investidor receberá exatamente aquela taxa nominal anualizada se mantiver o título até o vencimento. A certeza é total do lado nominal — mas não do lado do poder de compra: se a inflação disparar para 10% ou 12% ao ano, os 13,5% do prefixado entregam um retorno real muito menor do que aparentam.
        </p>
        <p>
          O <strong>Tesouro IPCA+</strong> (NTN-B) paga uma taxa real — fixada no momento da compra — mais a variação do IPCA ao longo do período. Em julho de 2026, os títulos IPCA+ disponíveis oferecem taxas reais de aproximadamente 7,0% a 7,5% ao ano para prazos de 5 a 10 anos. O retorno nominal total do IPCA+ dependerá de quanto o IPCA variar: com IPCA de 5,5%, o retorno nominal seria de aproximadamente 13,3% ao ano — muito próximo do prefixado a 13,5%. Mas com IPCA de 8%, o retorno nominal sobe para 16,1% ao ano, superando confortavelmente o prefixado. A certeza do IPCA+ é do lado real — você sabe quanto vai ganhar acima da inflação — mas não do lado nominal, que variará conforme o índice de preços.
        </p>
        <p>
          Um novo produto relevante no ecossistema do Tesouro Direto em 2026 é o <strong>Tesouro Reserva</strong>, lançado no início do ano para funcionar como alternativa ao Tesouro Selic para reserva de emergência: rende 100% da Selic, aceita aplicações a partir de R$ 1 e permite resgates praticamente 24 horas por dia, sete dias por semana — com liquidez até mais flexível que o Tesouro Selic convencional. Para quem está decidindo entre títulos de médio e longo prazo, o Tesouro Reserva não é um concorrente direto do prefixado ou do IPCA+, mas ocupa com mais eficiência o papel de liquidez imediata que muitos investidores tentavam forçar nesses títulos.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Marcação a Mercado: O Que Assusta na Tela e o Que Realmente Importa
        </h2>
        <p>
          O principal motivo pelo qual investidores vendem Tesouro Prefixado e IPCA+ antes do vencimento com prejuízo é a marcação a mercado — e a confusão entre o preço atual do título e o valor que será recebido no vencimento. Entender essa diferença é essencial para não tomar decisões erradas baseadas em variações temporárias no extrato.
        </p>
        <p>
          Quando as taxas de juros de mercado <strong>sobem</strong> após a compra, o preço dos títulos de prazo fixo <strong>cai</strong>. A lógica é a seguinte: se você comprou um título prefixado a 13% e o mercado passa a oferecer títulos similares a 15%, ninguém vai pagar o preço cheio pelo seu título a 13% — então o preço cai até o ponto em que o rendimento implícito se iguala à nova taxa de mercado. Esse movimento é a marcação a mercado negativa. Para quem mantém o título até o vencimento, ela é completamente irrelevante — você receberá os 13% anuais contratados, independentemente do que o mercado esteja cotando no meio do caminho.
        </p>
        <p>
          A marcação se torna um risco real apenas para quem <strong>precisa vender antes do vencimento</strong>. Em 2025 e no início de 2026, o Tesouro IPCA+ de longo prazo sofreu quedas expressivas de preço por conta da piora das expectativas fiscais e da elevação dos prêmios de risco — alguns títulos chegaram a ser cotados com taxas reais acima de 8% ao ano, o que implica que títulos comprados a IPCA+6% apresentavam marcação negativa substancial. Quem tinha esses títulos e precisou vender realizou perdas. Quem manteve até o vencimento recebeu exatamente o combinado. O ensinamento é simples mas frequentemente esquecido: <strong>só compre Tesouro Prefixado ou IPCA+ de prazo longo se tiver certeza de que não precisará do dinheiro antes do vencimento</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Cenários Práticos: Quando Cada Título Ganha
        </h2>

        <div className="not-prose my-6 space-y-4">
          {[
            {
              titulo: "Prefixado Vence Quando:",
              itens: [
                "A inflação cai abaixo do breakeven (5,58% no exemplo acima) — o prefixado entrega mais em termos nominais",
                "A Selic cai mais rápido do que o mercado espera — o título que você travou a 13,5% fica acima do CDI futuro",
                "O horizonte é de até 2 anos e você quer previsibilidade total do valor de resgate em reais",
                "Você tem objetivo com data marcada (viagem, compra planejada) e quer eliminar risco de inflação surpresa no curto prazo",
              ],
              cor: "border-blue-500/30 bg-blue-500/5",
            },
            {
              titulo: "IPCA+ Vence Quando:",
              itens: [
                "A inflação supera o breakeven — qualquer IPCA acima de 5,58% faz o IPCA+ superar o prefixado equivalente",
                "O horizonte é longo (5, 10, 20 anos) e você quer preservar o poder de compra real do patrimônio",
                "Há risco de choque inflacionário (commodities, câmbio, fiscal) que o prefixado não cobre",
                "Você está planejando aposentadoria — garantir um retorno real de 7% ao ano por décadas é o que cria patrimônio sólido",
              ],
              cor: "border-green-500/30 bg-green-500/5",
            },
          ].map(({ titulo, itens, cor }) => (
            <div key={titulo} className={`rounded-xl border p-5 ${cor}`}>
              <p className="font-bold text-sm mb-3">{titulo}</p>
              <ul className="space-y-1.5">
                {itens.map(item => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          A Estratégia Híbrida: Dividir Entre os Dois Para Reduzir o Risco
        </h2>
        <p>
          Em momentos de incerteza genuína sobre a trajetória da inflação — como março de 2026, quando o IPCA de fevereiro surpreendeu para cima enquanto as projeções do Focus ainda apontavam desaceleração — a melhor estratégia pode ser simplesmente <strong>dividir a alocação entre prefixado e IPCA+</strong>, em vez de apostar em um único cenário.
        </p>
        <p>
          Uma divisão simples de 50% em Tesouro Prefixado de prazo médio (2 a 3 anos) e 50% em Tesouro IPCA+ de prazo intermediário (5 a 8 anos) cria um portfólio que se sai bem em mais cenários do que cada um individualmente. Se a inflação cair rapidamente, o prefixado contribui com retorno nominal alto e equilibra o IPCA+ que terá retorno nominal mais baixo. Se a inflação disparar, o IPCA+ protege o poder de compra e equilibra o prefixado que ficará com retorno real mais modesto. Essa estratégia reduz a necessidade de acertar o cenário macroeconômico — algo que nem os melhores economistas do mercado conseguem fazer de forma consistente.
        </p>
        <p>
          Outra dimensão importante da estratégia híbrida é o <strong>escalonamento de prazos</strong> (também chamado de "escada" ou "laddering"): em vez de concentrar tudo no mesmo vencimento, distribuir os aportes em títulos com vencimentos diferentes (2027, 2028, 2030, 2033) garante que parte do capital se torne disponível em momentos escalonados, reduzindo o risco de precisar vender com marcação negativa e permitindo reinvestir às taxas vigentes em cada vencimento — o que captura naturalmente os movimentos de mercado sem depender de um único timing.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Tributação: Por Que o IR Não Muda a Comparação Entre os Dois
        </h2>
        <p>
          Um ponto que frequentemente gera confusão é a tributação dos dois títulos. A boa notícia é que a tabela regressiva do IR se aplica de forma idêntica ao Tesouro Prefixado e ao Tesouro IPCA+: 22,5% até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. Como a alíquota é a mesma nos dois casos para o mesmo prazo, o Imposto de Renda não é um fator diferenciador na comparação direta entre prefixado e IPCA+.
        </p>
        <p>
          A diferença tributária relevante surge apenas quando a comparação inclui produtos isentos — LCI, LCA, CRI, CRA. Uma LCI pagando 92% do CDI isenta pode superar um Tesouro Prefixado de 13,5% para prazos de 12 meses, justamente porque a isenção compensa a taxa aparentemente menor. Mas dentro da família Tesouro Direto, a comparação entre prefixado e IPCA+ deve ser feita com base nas taxas brutas — o IR irá incidir de forma equivalente sobre o rendimento de qualquer um dos dois.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          O Fator Fiscal na Comparação Com Produtos Isentos
        </h2>
        <p>
          A análise de Prefixado vs IPCA+ dentro do Tesouro Direto fica incompleta sem uma menção ao impacto do IR em comparação com produtos isentos. A tabela regressiva aplica 22,5% sobre resgates em até 180 dias, caindo até 15% acima de 720 dias — o que significa que, para prazos de 12 meses (IR de 20%), um Tesouro Prefixado a 13,5% entrega cerca de 10,8% líquido ao investidor. Uma LCI pagando apenas 87% do CDI isenta já empata com esse resultado. Essa matemática tem duas implicações práticas: primeiro, para objetivos de prazo curto (até 12 meses), LCI e LCA com carência de 6 meses geralmente superam o Prefixado em termos líquidos, mesmo com taxa nominal aparentemente menor. Segundo, para prazos acima de dois anos — quando a alíquota do Tesouro cai para 15% — a diferença entre o Prefixado tributado e as letras de crédito isentas se estreita consideravelmente, e o IPCA+ de prazo longo começa a competir com mais equilíbrio, especialmente se a inflação ficar acima do breakeven projetado.
        </p>
        <p>
          A grande vantagem competitiva do Tesouro Direto em relação às LCIs e LCAs não está necessariamente nas taxas nominais — está na segurança de crédito (garantia do Tesouro Nacional, sem limite de valor, sem risco bancário) e na liquidez estruturada: o Tesouro garante a recompra dos títulos a preço de mercado a qualquer momento, o que as LCIs e LCAs com carência de 6 meses não permitem sem potencial deságio no mercado secundário. Para o investidor que prioriza a combinação de segurança máxima, liquidez previsível e isonomia de tratamento tributário (sem depender de encontrar LCIs ou LCAs com taxas competitivas em cada janela de aporte), o Tesouro Prefixado e o IPCA+ seguem sendo referência difícil de superar no mercado doméstico de renda fixa.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. As simulações usam projeções e taxas de julho de 2026 que podem variar. Rentabilidade passada não garante resultados futuros. Consulte um assessor certificado pela CVM antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a escolha entre prefixado e IPCA+ é uma aposta em cenário — seja honesto sobre o que você sabe">
        <p>
          Toda vez que alguém me pede para escolher entre prefixado e IPCA+, faço a mesma pergunta de volta: "Você tem uma convicção forte sobre onde o IPCA vai estar em 3 anos?" Na quase totalidade dos casos, a resposta é não — e é a resposta correta, porque nem os economistas do Banco Central, do FMI ou das maiores gestoras do mundo conseguem prever inflação com precisão para janelas de 3 anos.
        </p>
        <p className="mt-2">
          Se você não sabe, a estratégia híbrida 50/50 entre prefixado de prazo curto e IPCA+ de prazo intermediário é simplesmente mais inteligente do que apostar tudo num único cenário. O IPCA+ de 7,5% ao ano por 10 anos é uma das melhores propostas de valor disponíveis no mercado financeiro brasileiro — mas só funciona se você realmente não vender antes do vencimento. <strong>Comprar IPCA+ longo e vender na primeira queda de preço é o erro mais caro da renda fixa brasileira.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Prefixado vs IPCA+ 2026: Qual Escolher com IPCA a 5,48%?",
            url: "https://www.adrianofreire.com.br/blog/prefixado-vs-ipca-qual-escolher-2026",
            publisher: "Adriano Freire Finanças",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tesouro Direto em 2026: Como Escolher Entre Selic, IPCA+, Prefixado e Tesouro Reserva",
            url: "https://arevista.com.br/renda-fixa/tesouro-direto-em-2026-como-escolher-entre-selic-ipca-prefixado-renda-e-tesouro-reserva/",
            publisher: "A Revista (Toro Investimentos)",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tesouro Selic, Prefixado ou IPCA+? O Que os Analistas Indicam em 2026",
            url: "https://www.seudinheiro.com/2026/economia/tesouro-selic-prefixado-ou-ipca-veja-o-que-os-analistas-indicam-como-melhor-opcao-no-tesouro-direto-mlim/",
            publisher: "Seu Dinheiro",
            accessedAt: "Julho 2026",
          },
          {
            title: "Prefixado, Pós-Fixado ou IPCA+: O Que Rendeu Mais na Renda Fixa",
            url: "https://borainvestir.b3.com.br/tipos-de-investimentos/renda-fixa/prefixado-pos-fixado-ou-ipca-o-que-rendeu-mais-na-renda-fixa-e-onde-vale-a-pena-investir-agora/",
            publisher: "B3 — Bora Investir",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tesouro Direto — Tipos de Títulos e Características",
            url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro.htm",
            publisher: "Tesouro Nacional",
            accessedAt: "Julho 2026",
          },
          {
            title: "Títulos do Tesouro Direto: Compare as Vantagens de Cada Tipo",
            url: "https://oespecialista.safra.com.br/tipos-de-tesouro-direto-vantagens-diferencas/",
            publisher: "O Especialista — Banco Safra",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="tesouro-prefixado-vs-ipca-mais-2026" />
      <CommentSection
        postId="tesouro-prefixado-vs-ipca-mais-2026"
        postTitle="Tesouro Prefixado vs IPCA+ em 2026: Qual Escolher?"
        category="invest"
      />
    </article>
  );
};

export default TesouroPrefixadoVsIPCA2026;
