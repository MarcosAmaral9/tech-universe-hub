import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Building2, Shield, TrendingUp, BarChart3, PiggyBank, Target, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/fiis-defensivos-abril-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const FIIsDefensivosAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("fiis-defensivos-abril-2026", "FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            FIIs · IFIX · Estratégia Defensiva
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async" src={heroImg} alt="FIIs Defensivos Abril 2026 — estratégia de investimento" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com a inflação acima da meta e a Selic ainda em <strong>13,25% ao ano</strong>, o mercado de <strong>Fundos Imobiliários (FIIs)</strong> vive um momento de seleção estratégica. Grandes corretoras como XP e BTG Pactual ajustaram suas carteiras recomendadas para abril com <strong>perfil defensivo</strong>, priorizando fundos de recebíveis (papel) e logística. Neste guia, explicamos o cenário e apresentamos os critérios para montar uma carteira de FIIs resiliente.
        </p>

        <p>
          O termo "defensivo" em FIIs costuma ser usado de forma vaga no mercado — basicamente como sinônimo de "fundo que paga dividendo alto e não vai cair muito". Mas essa definição é incompleta e perigosa. Um fundo verdadeiramente defensivo é aquele cuja <strong>receita não depende de condições de mercado favoráveis</strong> para se manter estável. Isso significa contratos longos, inquilinos sólidos e baixa exposição a renegociações que possam ocorrer justamente nos momentos em que o mercado está mais fraco — exatamente quando a proteção é mais necessária.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          O Cenário dos FIIs em Abril de 2026
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "137.520 pts", desc: "IFIX em 01/04/2026" },
            { valor: "+8,3%", desc: "Retorno IFIX 12 meses" },
            { valor: "9,2%", desc: "Dividend Yield médio IFIX" },
            { valor: "R$ 48,5 bi", desc: "Volume negociado no 1T26" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-violet-500/20 p-4 text-center">
              <div className="text-2xl font-bold text-violet-400">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <p>
          O primeiro trimestre de 2026 foi positivo para os FIIs, com o IFIX acumulando alta puxada por fundos de recebíveis (CRIs) que se beneficiam da Selic alta. No entanto, o cenário de inflação persistente e a incerteza geopolítica exigem cautela na seleção de ativos. O volume negociado de R$ 48,5 bilhões no trimestre — um recorde para o período — reflete também o crescimento da base de investidores: a B3 reporta mais de 2,4 milhões de CPFs com posição em FIIs, número que praticamente dobrou desde 2021.
        </p>
        <p>
          Esse crescimento da base de investidores tem uma consequência prática importante: fundos com boa comunicação, relatórios gerenciais transparentes e histórico consistente de distribuição tendem a atrair fluxo desproporcional em relação a fundos com fundamentos similares mas menor visibilidade. Para o investidor, isso significa que parte da "qualidade" percebida de um FII reflete também sua popularidade — e popularidade não é sinônimo de segurança, ainda que frequentemente caminhem juntas.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />
          O Que É uma Estratégia Defensiva em FIIs?
        </h2>
        <p>
          Uma carteira defensiva de FIIs prioriza cinco características que, combinadas, reduzem a probabilidade de surpresas negativas na distribuição mensal:
        </p>
        <ul>
          <li><strong>Previsibilidade de receita:</strong> fundos com contratos longos e inquilinos de alta qualidade, cuja capacidade de pagamento não depende de ciclos econômicos de curto prazo</li>
          <li><strong>Proteção contra inflação:</strong> fundos de recebíveis indexados ao IPCA e CDI, que ajustam automaticamente a receita conforme o cenário macro muda</li>
          <li><strong>Baixa vacância:</strong> imóveis localizados em regiões premium com demanda estável, onde a reposição de inquilinos é rápida em caso de saída</li>
          <li><strong>Diversificação:</strong> mix de segmentos para reduzir risco específico — um problema setorial isolado não compromete toda a carteira</li>
          <li><strong>Liquidez:</strong> fundos com volume de negociação diário acima de R$ 1 milhão, permitindo ajustes de posição sem impacto relevante no preço</li>
        </ul>
        <p>
          Vale notar que esses cinco critérios funcionam como um sistema, não isoladamente. Um fundo com contratos extremamente longos mas concentrado em um único inquilino, por exemplo, tem previsibilidade de receita alta mas diversificação baixa — se esse inquilino específico entrar em dificuldades financeiras, o "contrato longo" perde grande parte do seu valor protetor. A análise de qualidade de um FII defensivo precisa olhar para a combinação desses fatores, não para um único indicador isoladamente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building2 className="h-7 w-7 text-violet-400" />
          Segmentos de FIIs: Onde Estão as Oportunidades
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Segmento</th>
              <th className="text-left py-3 px-4">Cenário Atual</th>
              <th className="text-left py-3 px-4">DY Médio</th>
              <th className="text-left py-3 px-4">Recomendação</th>
            </tr></thead>
            <tbody>
              {[
                ["Recebíveis (Papel)", "Favorecido pela Selic alta — CRIs indexados ao CDI e IPCA", "11,5%", "⬆️ Overweight"],
                ["Logística / Galpões", "Demanda aquecida por e-commerce, vacância baixa", "8,8%", "⬆️ Overweight"],
                ["Lajes Corporativas", "Recuperação gradual, vacância caindo em SP", "7,2%", "➡️ Neutro"],
                ["Shoppings", "Vendas em alta, mas desaceleração do consumo preocupa", "8,1%", "➡️ Neutro"],
                ["Híbridos / FOFs", "Diversificação automática, mas taxas duplas", "9,4%", "⬇️ Underweight"],
                ["Hotéis / Residencial", "Volátil, dependente de turismo e ciclo imobiliário", "6,5%", "⬇️ Underweight"],
              ].map(([s, c, dy, r]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{s}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{c}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{dy}</td>
                  <td className="py-3 px-4">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          Critérios para Selecionar FIIs Defensivos
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3">✅ Busque</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>P/VP abaixo de 1,05</strong> — evita pagar ágio excessivo</li>
              <li>• <strong>DY acima de 9% ao ano</strong> — rendimento real positivo</li>
              <li>• <strong>Vacância abaixo de 8%</strong> — indica demanda saudável</li>
              <li>• <strong>Contratos longos</strong> — prazo médio de locação acima de 5 anos</li>
              <li>• <strong>Inquilinos de qualidade</strong> — grandes empresas com baixo risco de inadimplência</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">❌ Evite</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>FIIs monoativo</strong> — risco concentrado em um único imóvel</li>
              <li>• <strong>Vacância acima de 20%</strong> — sinal de problemas estruturais</li>
              <li>• <strong>Alavancagem excessiva</strong> — dívida/patrimônio acima de 40%</li>
              <li>• <strong>Liquidez muito baixa</strong> — volume diário abaixo de R$ 300 mil</li>
              <li>• <strong>DY insustentável</strong> — se acima de 15%, pode ser distribuição de capital</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <PiggyBank className="h-7 w-7 text-violet-400" />
          Como os FIIs de Recebíveis se Beneficiam da Selic Alta
        </h2>
        <p>
          Os FIIs de papel (recebíveis) investem em <strong>Certificados de Recebíveis Imobiliários (CRIs)</strong>, que são títulos de dívida de empresas do setor imobiliário. Quando a Selic está alta:
        </p>
        <ul>
          <li>✅ CRIs indexados ao <strong>CDI</strong> pagam mais, pois o CDI acompanha a Selic</li>
          <li>✅ CRIs indexados ao <strong>IPCA</strong> protegem contra inflação E pagam spread</li>
          <li>✅ O rendimento é <strong>isento de IR</strong> para pessoa física (dividendos de FIIs)</li>
          <li>⚠️ Risco: se a Selic cair rápido, os dividendos podem diminuir (para CRIs pós-fixados)</li>
        </ul>
        <div className="not-prose my-4 bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-0">
            💡 <strong>Estratégia:</strong> Monte uma carteira com <strong>60% CRIs IPCA+ e 40% CRIs CDI+</strong>. Se a Selic começar a cair, a parcela IPCA+ mantém rendimento atrativo via spread real. A parcela CDI+ gera caixa forte enquanto os juros permanecem altos.
          </p>
        </div>
        <p>
          Um aspecto técnico importante ao avaliar fundos de recebíveis é o <strong>rating de crédito dos CRIs</strong> que compõem a carteira. CRIs de empresas com rating elevado (AAA, AA) pagam spread menor sobre o CDI/IPCA, mas têm risco de inadimplência substancialmente menor. CRIs de empresas com rating mais baixo pagam spread maior — e é exatamente esse spread adicional que infla o dividend yield de alguns fundos de papel acima da média do segmento. Um DY de 13-14% em fundo de recebíveis pode ser legítimo se a carteira tiver boa diversificação de devedores com rating sólido, ou pode ser um sinal de concentração em crédito de maior risco — a única forma de saber é consultar a composição detalhada no relatório gerencial.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-violet-400" />
          Modelo de Carteira Defensiva de FIIs
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Segmento</th>
              <th className="text-left py-3 px-4">Alocação</th>
              <th className="text-left py-3 px-4">Objetivo</th>
            </tr></thead>
            <tbody>
              {[
                ["Recebíveis (IPCA+)", "30%", "Proteção contra inflação + spread real"],
                ["Recebíveis (CDI+)", "20%", "Rendimento alto enquanto Selic estiver elevada"],
                ["Logística / Galpões", "20%", "Crescimento + contratos longos + e-commerce"],
                ["Lajes Corporativas", "15%", "Recuperação de vacância + reajuste IPCA"],
                ["Shoppings / Varejo", "10%", "Diversificação + exposição ao consumo"],
                ["Caixa (Selic/CDI)", "5%", "Oportunismo para quedas de mercado"],
              ].map(([s, a, o]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{s}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{a}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          Sinais de Alerta: Quando um FII "Defensivo" Deixa de Ser
        </h2>
        <p>
          Mesmo fundos historicamente considerados defensivos podem deteriorar com o tempo. Monitorar esses sinais no relatório gerencial mensal evita que uma posição "segura" se transforme em surpresa negativa:
        </p>
        <div className="not-prose my-4 space-y-3">
          {[
            { sinal: "Queda consistente do FFO por cota", desc: "Se o resultado operacional por cota cai trimestre a trimestre, mas a distribuição se mantém estável, o fundo está usando reservas acumuladas para sustentar o dividendo — um padrão que tem prazo de validade." },
            { sinal: "Concentração crescente em poucos inquilinos", desc: "Se a aquisição de novos imóveis aumenta a dependência de um número pequeno de locatários, o fundo está reduzindo sua diversificação interna mesmo crescendo em tamanho." },
            { sinal: "Aumento da alavancagem sem justificativa clara", desc: "Dívida crescente para financiar distribuições (em vez de aquisições que geram receita adicional) é sinal de que a gestão está priorizando o curto prazo em detrimento da saúde financeira do fundo." },
            { sinal: "Mudança de estratégia sem comunicação transparente", desc: "Um fundo que historicamente focava em lajes corporativas e começa a diversificar para segmentos completamente diferentes sem explicar a lógica está mudando seu perfil de risco — o que pode não corresponder mais ao motivo pelo qual você o escolheu inicialmente." },
          ].map(({ sinal, desc }) => (
            <div key={sinal} className="flex gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm mb-0.5">{sinal}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Quando Aumentar o Risco?</h2>
        <p>
          A postura defensiva deve ser mantida enquanto a inflação estiver acima de 4% e a Selic acima de 12%. Quando o Banco Central iniciar um ciclo mais agressivo de corte de juros (sinalizado para o 2° semestre de 2026), será o momento de:
        </p>
        <ul>
          <li>📈 Aumentar exposição a <strong>FIIs de tijolo</strong> (lajes, shoppings)</li>
          <li>📉 Reduzir parcela de <strong>recebíveis CDI+</strong> (que rendem menos com Selic baixa)</li>
          <li>🔄 Considerar <strong>FIIs de desenvolvimento</strong> para capturar valorização imobiliária</li>
        </ul>
        <p>
          A transição entre uma carteira defensiva e uma carteira mais orientada a crescimento não precisa — e geralmente não deve — ser feita de uma vez. Conforme os sinais de queda de juros se consolidam (não apenas uma expectativa, mas cortes efetivos do Copom), a realocação gradual, trimestre a trimestre, permite ajustar a exposição sem depender de acertar o timing exato da virada de ciclo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Acompanhando a Carteira: Frequência Ideal de Revisão</h2>
        <p>
          Diferente de ações individuais, que podem exigir acompanhamento mais frequente
          devido à maior volatilidade de curto prazo, FIIs costumam se beneficiar de uma
          cadência de revisão mais espaçada — trimestral é geralmente suficiente para a
          maioria dos investidores. Isso porque a tese de investimento em fundos
          imobiliários depende de fatores estruturais (qualidade dos imóveis, solidez dos
          contratos, capacidade da gestão) que mudam lentamente, ao contrário de notícias
          de curto prazo que frequentemente geram ruído sem alterar os fundamentos reais
          do fundo.
        </p>
        <p>
          Ao revisar a carteira trimestralmente, dedique atenção especial aos relatórios
          gerenciais publicados pelas gestoras, que trazem atualizações sobre vacância,
          contratos vencendo nos próximos meses, e eventuais aquisições ou vendas de
          imóveis. Mudanças bruscas nesses indicadores — um salto repentino de vacância,
          por exemplo — merecem investigação mais aprofundada antes de decidir manter,
          aumentar ou reduzir a posição em um fundo específico dentro da carteira.
        </p>
        <p>
          Por fim, mantenha registro simples da composição da sua carteira de FIIs ao
          longo do tempo — uma planilha básica com data de compra, preço médio, número
          de cotas e setor de cada fundo já é suficiente para acompanhar a evolução do
          patrimônio e identificar rapidamente se algum segmento específico está
          excessivamente concentrado em relação ao restante da carteira diversificada
          que você planejou originalmente.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Em abril de 2026, a estratégia mais prudente para FIIs é <strong>defensiva mas não paralisante</strong>. Fundos de recebíveis oferecem rendimento atrativo e proteção inflacionária, enquanto logística e lajes bem localizadas adicionam diversificação e potencial de valorização. O segredo é <strong>não tentar acertar o timing perfeito</strong>, mas montar uma carteira resiliente que performe bem em qualquer cenário de juros.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>
      <EditorialTake category="invest" title="Análise do Marcos: defensivo de verdade é vacância baixa e contrato longo">
        <p>'FII defensivo' virou rótulo de marketing, mas na prática só dois critérios separam um fundo verdadeiramente resiliente de um que vai sangrar quando a Selic cai e a economia desacelera: <strong>vacância física abaixo de 5% e prazo médio de contrato (WAULT) acima de 5 anos</strong>. Tudo o mais — segmento, gestora, dividend yield — é secundário. Em logística, KNRI11 e BTLG11 continuam casos clássicos; em corporate, alguns fundos de lajes AAA em São Paulo seguem bem posicionados. Atenção ao yield aparente: FII pagando 1,2% a.m. com vacância de 18% é trator descendo a ladeira sem freio.</p>
        <p className="mt-2">
          Outro ponto que costumo reforçar: diversificação em FIIs não significa apenas "comprar vários fundos" — significa comprar fundos cujos riscos não estão correlacionados. Ter 10 FIIs de shopping não é diversificação real, porque todos compartilham a mesma exposição ao ciclo de consumo. Uma carteira defensiva de verdade combina segmentos com drivers diferentes: recebíveis reagem à Selic, logística reage ao e-commerce, lajes corporativas reagem ao mercado de trabalho de colarinho branco. Quando um segmento sofre, os outros tendem a compensar — é esse comportamento, e não o número de fundos na carteira, que define proteção real.
        </p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: "FIIs listados — B3", url: "https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/renda-variavel/fundos-de-investimentos-imobiliarios-fii.htm", publisher: "B3", accessedAt: "Maio 2026" },
          { title: "Boletim mensal de FIIs — B3", url: "https://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/consultas/mercado-a-vista/fundos-de-investimento/boletim-mensal/", publisher: "B3", accessedAt: "Maio 2026" },
          { title: "Funds Explorer", url: "https://www.fundsexplorer.com.br/", publisher: "Funds Explorer", accessedAt: "Maio 2026" },
          { title: "CVM — informações de FIIs", url: "https://www.investidor.gov.br/", publisher: "CVM", accessedAt: "Maio 2026" },
          { title: "Status Invest — análise de FIIs", url: "https://statusinvest.com.br/", publisher: "Status Invest", accessedAt: "Maio 2026" },
          { title: "ANBIMA — Boletim de Fundos Imobiliários", url: "https://www.anbima.com.br/pt_br/informar/relatorios/fundos-de-investimento/fundos-de-investimento-imobiliario.htm", publisher: "ANBIMA", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug="fiis-defensivos-abril-2026" />
      <CommentSection postId="fiis-defensivos-abril-2026" postTitle="FIIs Defensivos em Abril de 2026: Estratégia para Investir com Segurança" category="invest" />
    </article>
  );
};

export default FIIsDefensivosAbril2026;
