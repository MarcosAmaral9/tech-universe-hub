/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/cambio-dolar-protecao-carteira-2026": {
 *   title: "Câmbio e Dólar como Proteção de Carteira em 2026: IVVB11, DOLB11 e Fundos Cambiais",
 *   description: "Como usar o dólar e câmbio para proteger sua carteira em 2026: IVVB11 (S&P 500 em reais, taxa 0,24%), DOLB11 (ETF de dólar puro), fundos cambiais com e sem hedge, custo de carregamento em Selic alta e quanto alocar. Guia completo com exemplos numéricos.",
 *   keywords: "dólar proteção carteira 2026, IVVB11 2026, DOLB11, hedge cambial, fundo cambial 2026, como investir em dólar Brasil, diversificação internacional, câmbio BRL USD, ETF dólar B3, proteção cambial carteira",
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
  BarChart3, Shield, Lightbulb, DollarSign, Globe
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/cambio-dolar-protecao-carteira-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CambioDolarProtecao2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "cambio-dolar-protecao-carteira-2026",
      "Câmbio e Dólar como Proteção de Carteira em 2026",
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
            Câmbio · Dólar · Diversificação Internacional · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Câmbio e Dólar como Proteção de Carteira em 2026: IVVB11, DOLB11 e Quanto Alocar
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O dólar não é uma aposta especulativa — é uma <strong>ferramenta de proteção patrimonial</strong>. Historicamente, toda grande crise brasileira (2002, 2008, 2015, 2020) veio acompanhada de desvalorização do real, e quem tinha exposição cambial protegeu patrimônio exatamente quando mais precisava. Em 2026, o IVVB11 oferece exposição ao S&P 500 em reais com taxa de 0,24% ao ano e o DOLB11 replica o dólar puro na B3 — mas o custo de carregamento em Selic alta muda o cálculo de quanto vale cada um.
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
          alt="Câmbio e dólar como proteção de carteira 2026 — IVVB11 e DOLB11"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Comparativo de instrumentos */}
        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-bold">Instrumento</th>
                <th className="text-center p-4 font-bold text-invest">IVVB11</th>
                <th className="text-center p-4 font-bold">DOLB11</th>
                <th className="text-center p-4 font-bold">Fundo Cambial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {[
                ["O que replica", "S&P 500 (500 maiores ações EUA) + câmbio USD/BRL", "Variação do dólar à vista", "Dólar + eventual DI de carregamento"],
                ["Taxa de administração", "0,24% ao ano", "0,20% ao ano (BTG)", "0,5% a 1,5% ao ano"],
                ["Exposição câmbio", "Sim (dólar + ações EUA)", "Sim (dólar puro)", "Sim"],
                ["Risco adicional", "Risco de mercado EUA (ações)", "Custo de carregamento", "Gestão + come-cotas"],
                ["Tributação", "15% ganho capital (sem isenção R$20k)", "15% ganho capital", "Tabela regressiva + come-cotas"],
                ["Onde comprar", "B3 via corretora", "B3 via corretora", "Corretoras / plataformas"],
                ["Ideal para", "Diversificação + proteção longo prazo", "Hedge puro de curto/médio prazo", "Quem prefere fundo a ETF"],
              ].map(([c, ivvb, dolb, fundo]) => (
                <tr key={c} className="hover:bg-muted/20">
                  <td className="p-3 font-medium text-muted-foreground">{c}</td>
                  <td className="p-3 text-center text-invest">{ivvb}</td>
                  <td className="p-3 text-center">{dolb}</td>
                  <td className="p-3 text-center">{fundo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          Por Que o Dólar Protege — e Por Que Esse Efeito Só Funciona de Verdade a Longo Prazo
        </h2>
        <p>
          A correlação negativa entre o dólar e os ativos brasileiros de risco é uma das regularidades mais estáveis do mercado financeiro doméstico. Quando o Brasil enfrenta uma crise — fiscal, política, de balanço de pagamentos ou de confiança — o capital estrangeiro tende a sair, o que valoriza o dólar e simultaneamente deprecia as ações brasileiras, os títulos de crédito e os ativos reais precificados em reais. Isso significa que, em exatamente os momentos em que uma carteira puramente doméstica mais sofre, a exposição ao dólar tende a subir — oferecendo uma compensação natural que reduz a volatilidade total do patrimônio.
        </p>
        <p>
          O histórico ilustra bem esse efeito. Em 2015 e 2016, enquanto o Ibovespa acumulou queda de 13% em termos nominais e o real se desvalorizou mais de 50% frente ao dólar, um investidor com 20% da carteira em ativos dolarizados via ETFs ou fundos cambiais compensou parcialmente essa perda. Em 2020, na crise da pandemia, o dólar saltou de R$ 4,00 para quase R$ 5,80 em semanas — e novamente quem tinha exposição cambial amorteceu o impacto da queda simultânea do Ibovespa. Em 2022, a situação foi mais ambígua: a bolsa caiu, mas o real se apreciou frente ao dólar por causa dos preços de commodities. Esse é o ponto crítico que a maioria dos materiais sobre câmbio ignora: a proteção cambial não funciona sempre — funciona especificamente em crises de confiança no Brasil, que são o tipo de crise mais comum e mais severo historicamente para o investidor doméstico.
        </p>
        <p>
          A longo prazo, o dólar também cumpre outra função: preservação do poder de compra em moeda forte. O real perdeu mais de 80% do valor em relação ao dólar nos últimos 25 anos, em termos reais ajustados pela inflação diferencial entre os dois países. Isso significa que um patrimônio construído inteiramente em reais perdeu, ao longo dessas décadas, capacidade de compra em termos globais — relevante para quem pretende viajar ao exterior, financiar filhos em universidades internacionais ou se aposentar com liberdade de mobilidade global. Nesses casos, a exposição cambial não é especulação — é planejamento de longo prazo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          IVVB11: A Opção Mais Eficiente Para a Maioria dos Investidores
        </h2>
        <p>
          O <strong>IVVB11</strong> é o ETF mais popular para exposição internacional na B3. Emitido pela BlackRock Brasil, replica o índice S&P 500 em reais: na prática, o fundo concentra quase 100% do patrimônio em cotas do IVV (iShares Core S&P 500 ETF), o ETF americano que de fato carrega as 500 maiores ações negociadas nas bolsas americanas. Ao comprar um IVVB11, o investidor brasileiro fica exposto simultaneamente ao desempenho das 500 maiores empresas dos EUA (Apple, Microsoft, Nvidia, Amazon, Alphabet) e à variação do câmbio USD/BRL — se o dólar se valorizar em relação ao real, o IVVB11 sobe mesmo que as ações americanas fiquem paradas.
        </p>
        <p>
          A taxa de administração de <strong>0,24% ao ano</strong> é uma das mais baixas disponíveis em ETFs internacionais na B3, e o produto não distribui dividendos das empresas americanas para os cotistas — os dividendos são automaticamente reinvestidos no patrimônio do fundo, o que amplifica o efeito dos juros compostos ao longo do tempo mas exige que o investidor não conte com os proventos como fluxo de renda periódico. Do ponto de vista tributário, o IVVB11 é tratado como qualquer outro ETF de renda variável na B3: ganho de capital tributado em 15% sem isenção de R$ 20.000 mensais, com recolhimento via DARF código 6015 até o último dia útil do mês seguinte à venda.
        </p>
        <p>
          Em 2026, com o S&P 500 acima de máximas históricas e o dólar oscilando na faixa de R$ 5,50 a R$ 5,80, o valuation das ações americanas está elevado em termos históricos — o índice opera próximo de 22 a 24 vezes o lucro projetado para os próximos 12 meses, bem acima da média histórica de 16 a 18 vezes. Isso não elimina o IVVB11 como ferramenta de diversificação e proteção, mas sugere que a expectativa de retorno nos próximos 5 a 10 anos deve ser mais moderada do que a dos últimos 10 anos. Para o investidor de longo prazo, a combinação de diversificação geográfica, exposição cambial e acesso às maiores empresas do mundo ainda justifica uma alocação permanente no IVVB11 — com expectativa calibrada, não com euforia de momento.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          DOLB11 e o Custo de Carregamento: O Detalhe Que Muda o Cálculo em Selic Alta
        </h2>
        <p>
          O <strong>DOLB11</strong>, ETF cambial do BTG Pactual, oferece exposição ao dólar puro na B3 — sem o componente de ações americanas do IVVB11. Para quem quer usar o câmbio especificamente como hedge de curto prazo, sem aumentar a exposição ao risco de mercado de ações, o DOLB11 é o instrumento mais direto disponível na bolsa brasileira.
        </p>
        <p>
          O mecanismo por trás do DOLB11 envolve contratos futuros de dólar na B3. E aqui está o detalhe que a maioria dos materiais sobre o produto ignora: <strong>contratos futuros de dólar embutem o diferencial de juros entre Brasil e EUA</strong>. Com a Selic em 14,25% ao ano e os juros americanos (Fed Funds Rate) em torno de 4,5% ao ano, o mercado de câmbio a termo precifica o real com uma taxa de depreciação implícita de aproximadamente 9,7% ao ano em relação ao dólar — o que é o custo anualizado de "carregar" uma posição vendida em reais (comprada em dólar). Na prática, isso significa que o DOLB11 precisa de uma valorização do dólar acima do diferencial de juros embutido nos futuros para gerar retorno positivo para o investidor. Um exemplo concreto: se o dólar valorizar 8% em 12 meses e o custo de carregamento acumulado for de 9,7%, a posição no DOLB11 terá retorno negativo de aproximadamente -1,7% no período — apesar de o dólar ter subido. Esse efeito é invisível no curto prazo, mas se acumula de forma relevante em posições mantidas por 12 meses ou mais em ambientes de Selic elevada.
        </p>
        <p>
          Isso não significa que o DOLB11 seja um mau produto — significa que ele é mais eficiente como hedge de curto e médio prazo (até 6 meses) do que como posição estrutural de longo prazo. Para proteção permanente de câmbio no longo prazo, o IVVB11 tende a ser mais eficiente porque combina a exposição cambial com o retorno das ações americanas, diluindo o custo de carregamento pelo crescimento das empresas ao longo do tempo.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Hedge Cambial vs Sem Hedge: A Decisão Que Muda o Resultado
        </h2>
        <p>
          Uma das decisões mais importantes para quem investe em fundos internacionais é escolher entre produtos <strong>com hedge cambial</strong> e produtos <strong>sem hedge cambial</strong>. A diferença é simples em teoria, mas tem implicações relevantes para o resultado:
        </p>
        <p>
          Um fundo <strong>com hedge</strong> usa derivativos de câmbio para neutralizar a variação do dólar — o investidor fica exposto apenas ao desempenho das ações estrangeiras, sem se beneficiar nem sofrer com a oscilação do câmbio. Se o S&P 500 subir 15% e o real se apreciar 10% no mesmo período, um fundo com hedge entrega os 15% de retorno em reais; um fundo sem hedge entrega algo próximo de 15% − 10% = 5% em reais (simplificando). O custo do hedge em 2026 — dado pelo diferencial de juros Brasil-EUA — é de cerca de 9 a 10 pontos percentuais ao ano, o que torna os fundos com hedge significativamente mais caros de manter. Para quem quer proteger exatamente uma viagem internacional com data marcada ou cobrir um passivo em dólar específico, o hedge faz sentido. Para quem quer diversificação estrutural de longo prazo, o produto sem hedge geralmente entrega melhor relação custo-benefício.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Quanto Alocar em Câmbio: A Faixa Que Faz Sentido para o Varejo Brasileiro
        </h2>
        <p>
          Não existe uma resposta universal para a proporção de câmbio em uma carteira, mas há referências práticas baseadas em princípios bem estabelecidos de construção de portfólio. Para um investidor brasileiro de perfil moderado, sem grandes passivos em moeda estrangeira e sem intenção de emigrar, a faixa de <strong>10% a 25% da carteira total</strong> em ativos dolarizados é geralmente apontada como o ponto de equilíbrio entre proteção real e custo de oportunidade da Selic alta. Abaixo de 10%, a exposição cambial é simbólica — grande o suficiente para gerar confusão no extrato, pequena demais para fazer diferença no patrimônio em uma crise. Acima de 30% a 35%, o investidor começa a deixar de capturar o retorno robusto que a renda fixa brasileira oferece em ambientes de Selic elevada — pagando o custo de oportunidade do diferencial de juros sem compensação proporcional de proteção.
        </p>
        <p>
          Uma forma simples de implementar essa exposição para o investidor de varejo em 2026: alocar 15% a 20% da parcela de renda variável da carteira no IVVB11, mantendo a posição de forma permanente e reequilibrando a cada revisão trimestral. Não é preciso monitorar o câmbio diariamente nem tomar decisões táticas sobre o nível do dólar — a função dessa posição é proteger contra o cenário de crise brasileira que ninguém consegue prever, não antecipar movimentos de câmbio de curto prazo. O investidor que tenta "entrar no dólar" quando acha que o câmbio vai subir e "sair do dólar" quando acha que vai cair costuma acertar menos do que o investidor que simplesmente mantém uma posição constante e disciplinada ao longo dos anos.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Câmbio e ativos internacionais envolvem risco de mercado, cambial e de liquidez. Rentabilidade passada não garante resultados futuros. Consulte um assessor certificado pela CVM antes de tomar decisões.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: câmbio não é para ganhar dinheiro — é para não perder tudo numa crise">
        <p>
          A maioria das perguntas que recebo sobre câmbio é de quem quer "entrar no dólar agora porque acha que vai subir". Esse é o uso errado do instrumento. Câmbio não é para especular — é para garantir que uma crise econômica brasileira não destrua décadas de construção patrimonial em poucas semanas. Quem entendeu isso investiu em IVVB11 de forma permanente e se beneficiou tanto em 2020 quanto em 2015, sem precisar prever quando o dólar iria disparar.
        </p>
        <p className="mt-2">
          Em 2026, com a Selic em 14,25%, o custo de oportunidade da exposição cambial em relação à renda fixa local é alto — e é por isso que 15% a 20% da carteira em câmbio é mais do que suficiente para o investidor de varejo. <strong>Mais do que isso é especulação disfarçada de proteção. Menos do que 10% é decoração sem efeito real na hora que importa.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "DOLB11: O ETF de Dólar da BTG que Protege sua Carteira",
            url: "https://renovainvest.com.br/blog/dolb11-o-etf-de-dolar-da-btg-que-protege-sua-carteira/",
            publisher: "Renova Invest / BTG",
            accessedAt: "Julho 2026",
          },
          {
            title: "IVVB11: Vale a Pena para Investir no Exterior?",
            url: "https://www.idinheiro.com.br/investimentos/ivvb11/",
            publisher: "iDinheiro",
            accessedAt: "Julho 2026",
          },
          {
            title: "Estratégia com IVVB11: Por Que um Único ETF Pode 'Resolver' a Aposentadoria",
            url: "https://arevista.com.br/renda-fixa/estrategia-com-ivvb11-por-que-um-unico-etf-pode-resolver-a-aposentadoria/",
            publisher: "A Revista / Toro Investimentos",
            accessedAt: "Julho 2026",
          },
          {
            title: "É Momento de Hedge Cambial? Debate Institucional em 2026",
            url: "https://investidorinstitucional.com.br/investidores/fundos-de-pensao/e-momento-de-hedge-cambial",
            publisher: "Revista Investidor Institucional / Volkswagen Prev.",
            accessedAt: "Julho 2026",
          },
          {
            title: "Como Investir em Dólar no Brasil de Forma Simples e Segura",
            url: "https://blog.inter.co/como-investir-em-dolar-no-brasil/",
            publisher: "Banco Inter",
            accessedAt: "Julho 2026",
          },
          {
            title: "CVM — Resolução 175/2022: Fundos de Investimento e Exposição Cambial",
            url: "https://www.gov.br/cvm/pt-br/acesso-a-informacao/deliberacoes-e-atos/resolucoes/resolucoes-cvm/resolucao-cvm-175",
            publisher: "Comissão de Valores Mobiliários (CVM)",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="cambio-dolar-protecao-carteira-2026" />
      <CommentSection
        postId="cambio-dolar-protecao-carteira-2026"
        postTitle="Câmbio e Dólar como Proteção de Carteira em 2026"
        category="invest"
      />
    </article>
  );
};

export default CambioDolarProtecao2026;
