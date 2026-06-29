import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, AlertTriangle, CheckCircle2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tesouro-direto-guia-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const TesouroPrefixadoVsIPCA2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "tesouro-prefixado-vs-ipca-2026",
      "Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026",
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
            Renda Fixa · Tesouro Direto · Selic
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Com o <strong>Tesouro Prefixado e o IPCA+</strong> em destaque no ciclo de queda
          da Selic, a escolha entre os dois títulos pode representar diferenças de milhares
          de reais no longo prazo. Com a Selic saindo de 15% e projetada em 12,25% até
          o fim de 2026, este guia resolve de uma vez por todas qual Tesouro Direto escolher
          — com simulações reais e recomendações por perfil.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Tesouro Direto Prefixado IPCA+ 2026 — qual escolher com Selic caindo"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com a Selic iniciando seu ciclo de queda — saindo de 15% e projetada em 12,25%
          até o fim de 2026 — a pergunta que todo investidor de renda fixa está fazendo é:
          devo travar uma taxa <strong>prefixada</strong> agora ou continuar protegido com
          <strong> IPCA+</strong>? A resposta não é óbvia e depende do seu cenário. Este
          guia resolve de uma vez por todas essa dúvida com exemplos numéricos reais.
        </p>

        {/* Tabela dos 3 tipos */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Entendendo os Três Tipos de Tesouro Direto
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Título</th>
                <th className="text-left py-3 px-4">Como Funciona</th>
                <th className="text-left py-3 px-4">Taxa Atual (abr/26)</th>
                <th className="text-left py-3 px-4">Ganha se...</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tesouro Selic (LFT)",    "Rende a taxa Selic do dia, sem volatilidade",                         "~Selic (14,75% a.a.)",    "Selic subir ou ficar alta"],
                ["Tesouro Prefixado",      "Taxa travada na compra — você sabe exatamente o que vai receber",     "~13,5% a.a. (2029)",      "Selic cair abaixo da taxa travada"],
                ["Tesouro IPCA+ (NTN-B)",  "IPCA + taxa real. Protege contra inflação com retorno real garantido","IPCA + ~6,5% a.a. (2035)","Inflação subir ou se manter elevada"],
              ].map(([titulo, como, taxa, ganha]) => (
                <tr key={titulo as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{titulo}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{como}</td>
                  <td className="py-3 px-4 font-bold">{taxa}</td>
                  <td className="py-3 px-4 text-xs">{ganha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Caso Prefixado */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Caso do Prefixado em 2026: A Janela de Oportunidade
        </h2>
        <p>
          O Tesouro Prefixado é o grande beneficiário de um ciclo de queda de juros. O
          raciocínio é simples: <strong>se você trava 13,5% hoje e a Selic cair para
          12%</strong>, você está ganhando 1,5 ponto percentual a mais do que o mercado
          oferece — todo ano, até o vencimento. Além disso, o título se valoriza no
          mercado secundário, podendo ser vendido antes do vencimento com lucro via
          <strong> marcação a mercado</strong>.
        </p>
        <p>
          O estrategista-chefe do BTG Pactual recomenda prefixados com vencimento de{" "}
          <strong>2 a 4 anos</strong>, especificamente para não se expor demais ao risco
          inflacionário da guerra no Oriente Médio, que pode pressionar preços no médio
          prazo. A lógica é travar o juro alto sem se comprometer com prazos muito longos
          caso o cenário macro mude.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-invest/20 p-6">
          <h3 className="font-bold mb-4 text-sm">
            📊 Simulação: R$ 10.000 investidos no Tesouro Prefixado 2029
          </h3>
          <div className="space-y-3">
            {[
              {
                label: "🟢 Cenário base",
                cenario: "Selic cai para 9,50% (mercado projeta para 2029)",
                resultado: "R$ 16.850 bruto (IR 15% = R$ 15.322)",
                cor: "text-green-400",
              },
              {
                label: "🟡 Cenário conservador",
                cenario: "Selic para em 12% e não cai mais",
                resultado: "R$ 15.920 bruto (IR 15% = R$ 14.532)",
                cor: "text-yellow-400",
              },
              {
                label: "🔴 Cenário adverso",
                cenario: "Selic sobe para 16% (inflação volta)",
                resultado: "Título desvaloriza no mercado. Se segurar até venc., recebe os 13,5% acordados",
                cor: "text-red-400",
              },
            ].map(({ label, cenario, resultado, cor }) => (
              <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="text-xs font-bold">{label}</span>
                <p className="text-sm text-muted-foreground mt-0.5">{cenario}</p>
                <p className={`text-sm font-bold mt-0.5 ${cor}`}>{resultado}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * Simulações aproximadas. IR regressivo: alíquota cai para 15% após 720 dias.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        {/* Caso IPCA+ */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          O Caso do IPCA+: O Escudo Contra a Inflação
        </h2>
        <p>
          O Tesouro IPCA+ garante retorno real — ou seja, você sempre ganha acima da
          inflação. Com o IPCA projetado em 4,31% em 2026 e taxas reais de IPCA+6,5%,
          isso significa <strong>retorno nominal de cerca de 10,8% ao ano</strong> no
          cenário atual — ainda muito atrativo, especialmente quando comparado ao histórico
          de longo prazo do mercado.
        </p>
        <p>
          O IPCA+ se torna especialmente valioso no cenário de guerra no Oriente Médio,
          que pode pressionar preços de combustíveis e fertilizantes, elevando a inflação
          brasileira acima do previsto. Se o IPCA subir para 6%, seu retorno nominal com
          IPCA+6,5% vai para 12,5% — protegendo automaticamente o poder de compra.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Escolha o IPCA+ se...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Você tem medo de inflação surpresa (guerra, câmbio)</li>
              <li>• Quer preservar poder de compra no longo prazo</li>
              <li>• Está poupando para aposentadoria (10+ anos)</li>
              <li>• Prefere certeza de retorno real a especular com juros</li>
              <li>• Horizonte maior que 5 anos</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">✅ Escolha o Prefixado se...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Você acredita que a Selic vai cair de verdade</li>
              <li>• Quer maximizar retorno em 2–4 anos</li>
              <li>• Confia na política monetária do BC</li>
              <li>• Tem tolerância a marcação a mercado (volatilidade)</li>
              <li>• Pode segurar o título até o vencimento se necessário</li>
            </ul>
          </div>
        </div>

        <AdInArticle />

        <AdRectangle className="my-8" />

        {/* Comparação direta */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Comparação Direta: R$ 10.000 nos Três Títulos por 3 Anos
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Título</th>
                <th className="text-left py-3 px-4">Taxa Bruta</th>
                <th className="text-left py-3 px-4">Rendimento 3 anos</th>
                <th className="text-left py-3 px-4">Líquido (IR 15%)</th>
                <th className="text-left py-3 px-4">Proteção Inflação</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tesouro Selic",   "14,75% a.a. → caindo", "~R$ 3.200", "~R$ 14.720", "Parcial (nominal)"],
                ["Prefixado 2029",  "13,5% a.a. fixo",      "~R$ 4.350", "~R$ 13.697", "Nenhuma (risco real)"],
                ["IPCA+ 2035",      "IPCA + 6,5%",          "~R$ 3.800 real","~R$ 13.230 real","Total (retorno real)"],
              ].map(([titulo, taxa, rend, liq, prot]) => (
                <tr key={titulo as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{titulo}</td>
                  <td className="py-3 px-4">{taxa}</td>
                  <td className="py-3 px-4 font-bold">{rend}</td>
                  <td className="py-3 px-4 text-green-400 font-bold">{liq}</td>
                  <td className="py-3 px-4 text-xs">{prot}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            * Simulações com IPCA 4,3% a.a. e Selic caindo de 14,75% para 12,25% em 2026
            e continuando em 2027–2028. Meramente ilustrativas.
          </p>
        </div>

        {/* Estratégia combinada */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          A Estratégia que Ninguém Conta: Não Escolha Apenas Um
        </h2>
        <p>
          Analistas da XP e do BTG recomendam{" "}
          <strong>dividir a renda fixa entre os três tipos</strong> — não por indecisão,
          mas por estratégia. O Tesouro Selic garante liquidez imediata. O Prefixado
          captura o ciclo de queda de juros. O IPCA+ protege contra surpresas
          inflacionárias.
        </p>
        <p>
          A proporção ideal depende do seu perfil, mas uma divisão como{" "}
          <strong>30% Selic / 40% Prefixado / 30% IPCA+</strong> captura o melhor dos
          três mundos para um perfil moderado. Conservadores devem aumentar o Selic e
          o IPCA+ às custas do Prefixado; arrojados com horizonte longo podem aumentar
          o IPCA+ de prazo mais longo.
        </p>
        <p>
          O principal erro que o investidor brasileiro comete ao ver a Selic cair é{" "}
          <strong>migrar tudo para a bolsa</strong> ou{" "}
          <strong>ficar 100% no Tesouro Selic por medo de volatilidade</strong>. A renda
          fixa inteligente, com diversificação entre os tipos de título, ainda entrega
          retornos muito superiores à poupança com risco controlado.
        </p>

        {/* Riscos que não podem ser ignorados */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          Riscos que Não Podem Ser Ignorados
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            {
              titulo: "Risco de inflação acima do previsto",
              desc: "Se o conflito no Oriente Médio elevar o petróleo e o IPCA superar 6–7%, o Prefixado perde poder de compra real. O IPCA+ protege automaticamente nesse cenário.",
            },
            {
              titulo: "Risco de alta de juros (ciclo reverso)",
              desc: "Se o Copom precisar voltar a subir juros (como em 2024), títulos prefixados longos perdem valor de mercado — importante somente para quem precisar vender antes do vencimento.",
            },
            {
              titulo: "Risco de liquidez no curtíssimo prazo",
              desc: "O Tesouro IPCA+ pode ter variação negativa de preço em janelas curtas. Para dinheiro que pode precisar em menos de 12 meses, o Tesouro Selic é mais adequado.",
            },
            {
              titulo: "Risco de mudança tributária",
              desc: "A tabela regressiva de IR é legislação ordinária — pode mudar. O Prefixado com vencimento longo está exposto a esse risco regulatório, especialmente em anos eleitorais.",
            },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="flex gap-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Simulação Prática: Investidor de 35 Anos Planejando Aposentadoria
        </h2>
        <p>
          Para tornar a decisão mais concreta, considere o caso de um investidor de 35 anos
          que pretende se aposentar aos 60 e está decidindo como alocar R$ 50.000 de reserva
          já formada, fora da reserva de emergência. Com 25 anos de horizonte até a
          aposentadoria, esse investidor tem o tempo necessário para absorver a volatilidade
          de curto prazo de títulos longos em troca de retorno superior no acumulado.
        </p>
        <p>
          Uma alocação sensata para esse perfil seria destinar a maior parte — algo entre
          50% e 60% do valor — para Tesouro IPCA+ com vencimento entre 2040 e 2050,
          aproveitando o juro real elevado disponível em 2026 e travando esse retorno por
          décadas. O restante poderia se dividir entre prefixados de prazo médio, para
          captura tática do ciclo de queda de juros nos próximos 2 a 3 anos, e uma pequena
          parcela em Tesouro Selic para flexibilidade caso surjam oportunidades de
          realocação. Esse tipo de planejamento de longo prazo é precisamente onde a
          escolha entre prefixado e IPCA+ tem maior impacto cumulativo: pequenas diferenças
          de taxa real, compostas ao longo de 20-25 anos, geram diferenças de dezenas de
          milhares de reais no patrimônio final.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O Papel da Taxa de Custódia B3 na Decisão
        </h2>
        <p>
          Um detalhe frequentemente esquecido na comparação entre os títulos é a taxa de
          custódia cobrada pela B3, atualmente em 0,20% ao ano sobre o saldo investido,
          com isenção total para valores até R$ 10.000 em Tesouro Selic. Essa taxa incide
          igualmente sobre prefixados e IPCA+, mas seu peso relativo no retorno líquido é
          maior em títulos com taxa nominal mais baixa — fazendo pouca diferença em
          prefixados que pagam 13-14% ao ano, mas merecendo atenção em simulações de
          longuíssimo prazo onde cada fração percentual de custo é amplificada pelos
          juros compostos ao longo de décadas.
        </p>


        <h2 className="text-2xl font-bold mt-10 mb-4">
          Perguntas Frequentes Sobre Prefixado e IPCA+
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { q: "Posso vender o título antes do vencimento sem perder dinheiro?", a: "Depende inteiramente do cenário de juros no momento da venda. Se a Selic caiu desde a compra, prefixados e IPCA+ se valorizam e você pode vender com lucro antes do vencimento. Se a Selic subiu, o título pode valer menos do que você pagou — por isso só venda antes do prazo se realmente precisar do dinheiro ou se identificar uma janela de valorização clara." },
            { q: "O que acontece se eu não puder esperar até o vencimento?", a: "Você pode vender a qualquer momento durante o horário de negociação do Tesouro Direto, mas o preço de venda reflete a marcação a mercado do dia — que pode ser maior ou menor que o valor investido. Por isso, títulos de longo prazo (IPCA+ 2045, por exemplo) são mais adequados para dinheiro que você tem certeza de não precisar no curto prazo." },
            { q: "É melhor comprar um único título grande ou fracionar a compra?", a: "Fracionar a compra ao longo de vários meses (uma estratégia conhecida como DCA aplicada à renda fixa) reduz o risco de comprar tudo em um momento de taxa desfavorável. Para quem está migrando uma quantia grande de pós-fixado, dividir em 3 a 6 parcelas mensais é uma prática comum entre investidores experientes." },
            { q: "Existe limite de quanto posso investir no Tesouro Direto?", a: "Não há limite máximo, mas o limite mínimo de compra é o preço de uma fração do título, que costuma variar entre R$ 30 e R$ 150 dependendo do título e da cotação do dia. Não existe limite de valor para pessoa física investir em títulos públicos via Tesouro Direto." },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Lição do Ciclo 2016-2018: O Que a História Ensina
        </h2>
        <p>
          O último grande ciclo completo de corte de juros no Brasil — de 14,25% em 2016
          para 6,5% em 2018 — oferece um estudo de caso valioso para quem está decidindo
          entre prefixado e IPCA+ hoje. Investidores que travaram prefixados longos no
          início desse ciclo, quando as taxas ainda refletiam o pico de juros, viram seus
          títulos se valorizarem de forma expressiva à medida que a Selic caía — alguns
          conseguindo retornos superiores a 25% em períodos de 18 a 24 meses via marcação
          a mercado, muito acima do que a taxa contratada originalmente sugeria.
        </p>
        <p>
          Por outro lado, quem tinha IPCA+ no mesmo período também foi bem recompensado,
          ainda que por motivos diferentes: a inflação naqueles anos ficou consistentemente
          dentro da meta, então o retorno real elevado contratado nos títulos IPCA+ de
          então (alguns pagando IPCA+7% ou mais) gerou ganhos reais expressivos e
          consistentes. A lição que fica não é que um título é estruturalmente melhor que
          o outro, mas que <strong>ambos podem performar bem no mesmo ciclo</strong>,
          através de mecanismos distintos — daí a robustez da estratégia de diversificar
          entre os dois em vez de apostar tudo em apenas um.
        </p>
        <p>
          Vale notar que ciclos de juros raramente se repetem de forma idêntica. O cenário
          de 2026, com tensão geopolítica elevada e inflação ainda pressionada por choques
          externos, tem características distintas do ciclo 2016-2018, que ocorreu num
          contexto de recuperação pós-recessão doméstica sem grandes choques externos
          relevantes. Usar o histórico como guia direcional é útil; tratá-lo como garantia
          de repetição exata do padrão é um erro comum entre investidores menos experientes.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Checklist: O Que Verificar Antes de Comprar
        </h2>
        <p>
          Antes de finalizar a compra de qualquer título do Tesouro Direto, vale revisar
          rapidamente alguns pontos práticos que evitam arrependimentos: confirme o
          vencimento exato do título e se ele se alinha ao seu objetivo financeiro,
          verifique se há pagamento de cupons semestrais (vantajoso para quem busca renda
          periódica) ou se o título é "zero cupom" (pagamento integral apenas no
          vencimento, mais eficiente para acumulação pura), e confira a corretora
          escolhida para garantir que não há taxas adicionais de custódia além da cobrada
          pela própria B3.
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            "Qual é o prazo até quando posso deixar o dinheiro investido sem precisar dele?",
            "Quanto da minha carteira já está em pós-fixado (Selic/CDI)?",
            "Tenho reserva de emergência separada e intocável?",
            "Acredito que a inflação vai ficar sob controle nos próximos anos?",
            "Consigo aceitar variação de preço no extrato sem vender em pânico?",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-3">
              <CheckCircle2 className="h-4 w-4 text-[hsl(var(--invest-color))] mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl not-prose">
          ⚠️ <strong>Aviso Legal:</strong> Este artigo é educacional e não constitui
          recomendação de investimento. Consulte um assessor certificado. Rentabilidade
          passada não garante resultados futuros.
        </p>
      </div>

      <EditorialTake
        category="invest"
        title="Análise do Marcos: diversifique os três tipos — o mercado raramente avisa antes de mudar"
      >
        <p>
          Comparação baseada em dados do Tesouro Direto (abr/2026): Tesouro Prefixado 2029
          rendendo ~13,5% a.a., Tesouro IPCA+ 2035 em IPCA+6,5% a.a. e Tesouro Selic
          em ~14,75% a.a. (com queda esperada). O índice IRF-M 1+ (prefixados 1+ ano)
          avançou 20,07% em 2025, e o IMA-B (IPCA+) acumulou 18,3% no mesmo período —
          ambos muito acima do CDI de 13,25%.
        </p>
        <p className="mt-2">
          Minha análise para 2026: a dicotomia Prefixado vs IPCA+ é um falso dilema —
          os dois têm espaço numa carteira bem construída. Para perfil moderado, sugiro{" "}
          <strong>40% Prefixado médio prazo (2–4 anos)</strong> para capturar o ciclo de
          queda via marcação, <strong>40% IPCA+ longo (2035+)</strong> para retorno real
          garantido contra inflação, e <strong>20% Tesouro Selic</strong> como reserva de
          oportunidade e liquidez. Quem tem mais de 10 anos de horizonte pode inverter a
          proporção em favor do IPCA+ longo. Quem tem menos de 3 anos deve priorizar o
          Selic. O erro clássico é ficar 100% em uma única modalidade — o mercado sempre
          surpreende.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "Tesouro Direto — Tipos de Títulos e Rentabilidades Atuais",
            url: "https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm",
            publisher: "Tesouro Nacional / Tesouro Direto",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Índices de Renda Fixa: IRF-M, IMA-B e Rentabilidades",
            url: "https://www.anbima.com.br/pt_br/informar/relatorios/mercado-de-capitais/indices/",
            publisher: "ANBIMA",
            accessedAt: "Maio 2026",
          },
          {
            title: "Banco Central — Boletim Focus: Projeções para IPCA e Selic",
            url: "https://www.bcb.gov.br/publicacoes/focus",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tesouro Nacional — Marcação a Mercado: Entendendo a Volatilidade",
            url: "https://www.tesourodireto.com.br/conteudo-educacional/marcacao-a-mercado.htm",
            publisher: "Tesouro Nacional",
            accessedAt: "Maio 2026",
          },
          {
            title: "Receita Federal — Tributação de Aplicações em Títulos Públicos",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Relatório de Inflação — Copom: Cenário e Projeções Macroeconômicas",
            url: "https://www.bcb.gov.br/publicacoes/ri",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="tesouro-prefixado-vs-ipca-2026" />
      <CommentSection
        postId="tesouro-prefixado-vs-ipca-2026"
        postTitle="Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026"
       category="invest" />
    </article>
  );
};

export default TesouroPrefixadoVsIPCA2026;
