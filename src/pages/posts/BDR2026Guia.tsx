/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/bdr-2026-como-investir-apple-amazon-google-b3": {
 *   title: "BDRs em 2026: Como Investir em Apple, Amazon e Google Pela B3",
 *   description: "Guia completo de BDRs em 2026: o que são, 671 ativos disponíveis na B3, tributação sem isenção de R$ 20 mil, dividendos pelo carnê-leão, como declarar no IR e os principais tickers (AAPL34, AMZO34, GOGL34, NVDC34).",
 *   keywords: "BDR 2026, AAPL34 Apple, AMZO34 Amazon, GOGL34 Google, NVDC34 Nvidia, BDR B3, como investir BDR, tributação BDR, declarar BDR imposto renda, BDR dividendos, Brazilian Depositary Receipts",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Globe, DollarSign, AlertTriangle, BarChart3, Shield, FileText } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/bdr-2026-investir-b3.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const BDR2026Guia = () => {
  useEffect(() => {
    trackArticleRead("bdr-2026-como-investir-apple-amazon-google-b3", "BDRs em 2026: Como Investir em Apple, Amazon e Google Pela B3", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            BDR · Diversificação Internacional · Carteira
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          BDRs em 2026: Como Investir em Apple, Amazon e Google Pela B3 Sem Abrir Conta no Exterior
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Os <strong>Brazilian Depositary Receipts (BDRs)</strong> permitem ao investidor brasileiro comprar Apple (AAPL34), Amazon (AMZO34), Nvidia (NVDC34) e outras 671 empresas internacionais diretamente na B3, em reais, sem precisar de conta no exterior. Mas BDRs têm tributação diferente de ações brasileiras — sem isenção de R$ 20 mil mensais — e dividendos requerem recolhimento via carnê-leão. Este guia explica tudo para você investir sem surpresas.
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
          alt="BDRs em 2026 — como investir em Apple, Amazon e Google pela B3"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* BDRs mais negociados */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-invest" />
            BDRs Mais Populares na B3 em 2026
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { ticker: "AAPL34", empresa: "Apple", setor: "Big Tech" },
              { ticker: "AMZO34", empresa: "Amazon", setor: "E-Commerce / Cloud" },
              { ticker: "GOGL34", empresa: "Alphabet (Google)", setor: "Big Tech" },
              { ticker: "MSFT34", empresa: "Microsoft", setor: "Cloud / IA" },
              { ticker: "NVDC34", empresa: "Nvidia", setor: "Semicondutores" },
              { ticker: "META34", empresa: "Meta Platforms", setor: "Redes Sociais" },
              { ticker: "TSLA34", empresa: "Tesla", setor: "EVs / Energia" },
              { ticker: "NFLX34", empresa: "Netflix", setor: "Streaming" },
              { ticker: "MELI34", empresa: "MercadoLivre", setor: "E-Commerce LATAM" },
              { ticker: "M1TA34", empresa: "Meta Platforms", setor: "Tecnologia" },
              { ticker: "BABA34", empresa: "Alibaba", setor: "E-Commerce China" },
              { ticker: "TSMC34", empresa: "TSMC", setor: "Semicondutores" },
            ].map(({ ticker, empresa, setor }) => (
              <div key={ticker} className="rounded-lg border border-border/50 p-3 text-center bg-card/50">
                <p className="font-mono font-bold text-invest text-sm">{ticker}</p>
                <p className="text-xs font-medium mt-1">{empresa}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{setor}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">São 671 BDRs listados na B3. Os tickers terminam em "34" para empresas americanas.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          O Que É um BDR e Como Funciona o Mecanismo de Lastro
        </h2>
        <p>
          Um <strong>Brazilian Depositary Receipt (BDR)</strong> é um certificado emitido por uma <strong>instituição depositária brasileira</strong> — geralmente um banco como o Itaú, Bradesco ou Citibank — que representa ações de uma empresa estrangeira mantidas em custódia no país de origem. O mecanismo funciona assim: a instituição depositária compra ações da empresa estrangeira (por exemplo, da Apple na Nasdaq), mantém essas ações custodiadas nos Estados Unidos, e emite certificados correspondentes no Brasil que podem ser comprados e vendidos na B3 em reais. Cada BDR representa uma fração das ações originais — AAPL34, por exemplo, representa 1/10 de uma ação ordinária da Apple. Isso torna os BDRs acessíveis para investidores com menor capital, já que uma ação da Apple pode custar mais de R$ 1.000 ao câmbio atual, enquanto um BDR AAPL34 pode ser negociado por menos de R$ 120.
        </p>
        <p>
          Atualmente há <strong>671 BDRs listados na B3</strong>, segundo dados do Itaú Corretora, incluindo não apenas ações de empresas estrangeiras, mas também BDRs lastreados em ETFs internacionais e títulos de renda fixa do exterior. Os BDRs podem ser <strong>patrocinados</strong> — quando a própria empresa estrangeira contrata a instituição depositária no Brasil, engajando-se com o mercado local — ou <strong>não patrocinados</strong>, quando a depositária atua por iniciativa própria, sem vínculo direto com a companhia emissora. A maioria dos grandes BDRs de empresas americanas disponíveis para varejo é não patrocinada, o que significa que a empresa estrangeira não tem responsabilidade direta pelas informações em português disponibilizadas no Brasil — a CVM exige que a depositária disponibilize as informações regulatórias traduzidas.
        </p>
        <p>
          O preço de um BDR acompanha, ao mesmo tempo, a variação da ação no mercado de origem e a variação do câmbio entre o real e a moeda da ação (geralmente o dólar americano). Isso significa que, ao comprar um AAPL34, você está exposto tanto ao desempenho da Apple na Nasdaq quanto à oscilação do dólar em relação ao real. Em um cenário de dólar em queda frente ao real, um BDR de uma empresa que se valoriza em dólares pode ter retorno menor em reais do que sugere o desempenho na bolsa americana — e o inverso também é verdadeiro: uma empresa que recua em dólares, mas com dólar em alta frente ao real, pode apresentar retorno positivo em reais. Esse duplo componente de risco e retorno (ação + câmbio) é o elemento diferenciador central dos BDRs em relação às ações brasileiras.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Tributação de BDRs: A Diferença Crítica em Relação às Ações Nacionais
        </h2>
        <p>
          O aspecto tributário dos BDRs é o mais frequentemente mal compreendido — e o mais importante para calcular o retorno líquido real. A principal diferença em relação às ações brasileiras é a <strong>ausência de isenção de R$ 20.000 mensais</strong>. Para ações brasileiras negociadas no mercado à vista, o investidor pessoa física tem isenção de IR sobre o ganho de capital em meses em que o total de vendas não ultrapassou R$ 20.000 — o que na prática significa que pequenas operações ocasionais de ações nacionais podem ser feitas sem custo tributário. Essa isenção <strong>não existe para BDRs</strong>: qualquer ganho de capital obtido na venda de BDRs é tributado, independentemente do valor total vendido no mês.
        </p>
        <p>
          A alíquota é de <strong>15% sobre o lucro líquido</strong> em operações comuns (swing trade) e <strong>20%</strong> em operações de day trade. O cálculo considera o preço de venda menos o custo de aquisição (incluindo taxas de corretagem) e o resultado é apurado mês a mês pelo próprio investidor. O recolhimento é feito via <strong>DARF com código 6015</strong>, até o último dia útil do mês seguinte ao mês em que a venda ocorreu. Uma vantagem que permanece é a compensação de prejuízos: perdas acumuladas em BDRs ou em ações brasileiras podem ser usadas para abater ganhos futuros no mesmo tipo de operação (swing trade com swing trade, day trade com day trade), conforme a Instrução Normativa RFB nº 1.585/2015. Manter um controle mensal rigoroso de cada operação — data, quantidade, preço de compra e preço de venda — é obrigatório para apurar corretamente e capturar todas as oportunidades de compensação de prejuízos.
        </p>
        <p>
          Exemplo prático: se você comprou 100 BDRs AAPL34 a R$ 100 cada (total R$ 10.000) e vendeu seis meses depois a R$ 130 cada (total R$ 13.000), seu ganho de capital é de R$ 3.000 menos as taxas de corretagem. Supondo taxas de R$ 20, o ganho líquido é de R$ 2.980. O IR devido é de 15% × R$ 2.980 = R$ 447,00, recolhido via DARF até o último dia útil do mês seguinte à venda. Não há nenhum limite abaixo do qual esse imposto não seja devido — mesmo que seu ganho total no mês com BDRs seja de R$ 200, o IR de R$ 30 deve ser recolhido.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Dividendos de BDRs: Carnê-Leão e Tributação Progressiva
        </h2>
        <p>
          Quando uma empresa estrangeira distribui dividendos e você possui BDRs dela, a instituição depositária repassa esses dividendos aos titulares dos certificados em reais, já convertidos ao câmbio da data do pagamento. Diferentemente dos dividendos de ações brasileiras — que são isentos de IR para pessoa física — os dividendos recebidos via BDRs são tributados como <strong>rendimentos recebidos do exterior</strong> e devem ser recolhidos via <strong>carnê-leão</strong>, aplicando-se a tabela progressiva do IRPF.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-bold">Rendimento Mensal (R$)</th>
                <th className="text-center p-4 font-bold">Alíquota</th>
                <th className="text-center p-4 font-bold">Deduções</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Até R$ 2.259,20", "Isento", "–"],
                ["R$ 2.259,21 a R$ 2.826,65", "7,5%", "R$ 169,44"],
                ["R$ 2.826,66 a R$ 3.751,05", "15%", "R$ 381,44"],
                ["R$ 3.751,06 a R$ 4.664,68", "22,5%", "R$ 662,77"],
                ["Acima de R$ 4.664,68", "27,5%", "R$ 896,00"],
              ].map(([faixa, aliq, ded]) => (
                <tr key={faixa} className="hover:bg-muted/20">
                  <td className="p-4 text-muted-foreground">{faixa}</td>
                  <td className="p-4 text-center font-bold text-invest">{aliq}</td>
                  <td className="p-4 text-center text-muted-foreground">{ded}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground p-4">Tabela progressiva do IRPF aplicada via carnê-leão para dividendos de BDRs. O recolhimento é mensal, pela data de recebimento.</p>
        </div>

        <p>
          Na prática, para a maioria dos investidores de varejo com carteiras pequenas de BDRs, os dividendos mensais recebidos são baixos o suficiente para se enquadrarem na faixa de isenção ou nas primeiras alíquotas progressivas. Uma carteira de R$ 30.000 em BDRs de empresas americanas que pagam yield de 1% ao ano em dividendos gera apenas R$ 300 anuais — R$ 25 por mês, completamente isento pelo carnê-leão. O carnê-leão passa a ser relevante apenas para carteiras de BDRs substanciais, com altos dividendos mensais. O controle é obrigatório e deve ser feito pelo próprio investidor no programa Carnê-Leão da Receita Federal, com o recolhimento via DARF até o último dia útil do mês seguinte ao recebimento.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          BDR vs ETF Internacional vs Conta no Exterior: Qual Escolher?
        </h2>
        <p>
          O investidor brasileiro que quer exposição ao mercado internacional tem três caminhos principais: BDRs, ETFs internacionais listados na B3 (como o IVVB11, que replica o S&P 500 em reais), ou abertura de conta no exterior diretamente (em corretoras como a Interactive Brokers). Cada um tem vantagens e desvantagens que variam conforme o perfil e o volume investido.
        </p>
        <p>
          Os <strong>BDRs</strong> são a opção mais simples para quem quer exposição a uma empresa específica sem abrir conta no exterior: basta ter conta em uma corretora brasileira e comprar o BDR como compraria qualquer ação. A liquidez na B3 é menor do que na bolsa de origem, especialmente para BDRs de empresas menos populares, e o custo cambial embutido (spread da instituição depositária) pode reduzir ligeiramente o retorno em comparação com a compra direta da ação no exterior. Os <strong>ETFs internacionais</strong>, como o IVVB11 (iShares S&P 500), oferecem diversificação automática com uma única operação — em vez de exposição a uma empresa específica, você compra uma cesta das maiores empresas americanas. Para iniciantes que querem exposição internacional diversificada sem precisar escolher empresas, o ETF tende a ser mais adequado do que um portfólio de BDRs individuais. A <strong>conta no exterior</strong> faz mais sentido para volumes acima de R$ 100.000 a R$ 200.000 destinados ao exterior, onde o custo fixo de manutenção da conta e a complexidade da declaração de ativos no exterior (CBE ao Banco Central e DCBE anual) se justificam pela maior liquidez, menor custo por operação e acesso a uma variedade muito maior de ativos — incluindo ETFs irlandeses com vantagens fiscais para não-americanos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <FileText className="h-7 w-7 text-invest" />
          Como Declarar BDRs no IRPF 2026: Passo a Passo
        </h2>
        <p>
          Todo investidor que possuía BDRs em 31 de dezembro do ano anterior é obrigado a declará-los no IRPF, mesmo que não tenha vendido nenhum e não haja imposto a pagar. A declaração é feita na ficha <strong>"Bens e Direitos"</strong>, grupo 03 (Participações Societárias), código 04 (Ações — inclusive BDRs). Para cada posição, é preciso informar: o ticker do BDR (como AAPL34), o nome da empresa, a corretora utilizada, a quantidade de BDRs em carteira e o custo de aquisição total (preço médio pago multiplicado pela quantidade, incluindo corretagem). O custo de aquisição não é atualizado anualmente — declara-se sempre pelo custo histórico de compra, nunca pelo valor de mercado.
        </p>
        <p>
          Em caso de venda de BDRs durante o ano, além de atualizar a ficha de Bens e Direitos, é preciso preencher também a ficha <strong>"Renda Variável"</strong>, na seção "Operações Comuns / Day Trade", informando o resultado mês a mês (lucro ou prejuízo) nas vendas ocorridas. Como não existe isenção de R$ 20.000 para BDRs, qualquer mês com ganho de capital deve ser informado, mesmo que o lucro seja pequeno. Os DARFs já recolhidos mensalmente ao longo do ano são informados nessa mesma seção para confirmar o imposto já pago. Os dividendos recebidos via BDRs, caso tenham sido recolhidos via carnê-leão, são declarados na ficha "Rendimentos Sujeitos à Tributação Exclusiva/Definitiva" com o valor bruto e o imposto retido. Manter um arquivo organizado com todos os informes de rendimentos da corretora e com as notas de corretagem de cada operação facilita muito essa declaração e reduz o risco de erros que causam retenção na malha fina.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. BDRs envolvem risco de mercado, cambial e de liquidez. Consulte um assessor de investimentos credenciado pela CVM e um contador para questões tributárias específicas.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: BDR é o atalho certo — mas a tributação pega todo mundo de surpresa">
        <p>
          BDR é uma das adições mais democráticas que aconteceu no mercado brasileiro nos últimos anos. Poder comprar uma fração de Apple ou Nvidia na B3 em reais, sem abrir conta nos EUA, é genuinamente útil. O problema é que a maior parte dos guias de BDR foca só no "como comprar" e esquece o "quanto vai ficar depois do IR" — e aí a surpresa vem no ano seguinte, quando o investidor descobre que vendeu AAPL34 com lucro e não pagou nenhuma DARF porque pensou que estava dentro dos R$ 20.000 de isenção.
        </p>
        <p className="mt-2">
          Minha recomendação prática: para quem quer exposição ao mercado americano com simplicidade e sem controle mensal de DARF, o <strong>IVVB11</strong> ainda é a opção mais eficiente — você compra um ETF, tem o S&P 500, e a tributação é idêntica à dos BDRs individuais (sem isenção de R$ 20k). Para quem quer apostar em uma empresa específica, os BDRs funcionam — mas a planilha de controle mensal de operações é obrigatória. <strong>Sem controle, a multa por DARF atrasado come parte do lucro.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "BDRs na B3: 671 Ativos Listados — Itaú Corretora",
            url: "https://www.itaucorretora.com.br/nossosservicos/bdr.aspx",
            publisher: "Itaú Corretora",
            accessedAt: "Julho 2026",
          },
          {
            title: "BDR Tem Isenção de R$ 20 mil? Tributação Completa em 2026",
            url: "https://renovainvest.com.br/blog/tributacao-bdr/",
            publisher: "Renova Invest / BTG Pactual",
            accessedAt: "Julho 2026",
          },
          {
            title: "Como Declarar BDRs no Imposto de Renda 2026",
            url: "https://borainvestir.b3.com.br/noticias/imposto-de-renda/renda-variavel-imposto-de-renda/como-declarar-bdrs-no-imposto-de-renda-2026-veja-guia-completo-para-nao-cometer-erros/",
            publisher: "B3 — Bolsa de Valores",
            accessedAt: "Julho 2026",
          },
          {
            title: "Instrução Normativa RFB nº 1.585/2015 — Renda Variável e Compensação de Prejuízos",
            url: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/instrucoes-normativas/2015/instrucao-normativa-rfb-no-1585-de-31-de-agosto-de-2015",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "CVM Resoluções 182 e 183 — Novas Regras para BDRs",
            url: "https://www.gov.br/cvm/pt-br",
            publisher: "Comissão de Valores Mobiliários (CVM)",
            accessedAt: "Julho 2026",
          },
          {
            title: "Imposto de Renda 2026: Como Declarar BDRs",
            url: "https://timesbrasil.com.br/minhas-financas/imposto-de-renda/imposto-de-renda-2026-como-declarar-bdrs/",
            publisher: "Times Brasil / CNBC",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="bdr-2026-como-investir-apple-amazon-google-b3" />
      <CommentSection
        postId="bdr-2026-como-investir-apple-amazon-google-b3"
        postTitle="BDRs em 2026: Como Investir em Apple, Amazon e Google Pela B3"
        category="invest"
      />
    </article>
  );
};

export default BDR2026Guia;
