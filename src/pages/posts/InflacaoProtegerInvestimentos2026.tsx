import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, Shield, AlertTriangle, PiggyBank, BarChart3, Target, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/inflacao-proteger-investimentos-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const InflacaoProtegerInvestimentos2026 = () => {
  useEffect(() => {
    trackArticleRead("inflacao-proteger-investimentos-2026", "Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Inflação · IPCA · Proteção · Carteira Defensiva
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async" src={heroImg} alt="Inflação 2026 — como proteger seus investimentos" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Boletim Focus</strong> de 30 de março de 2026 trouxe más notícias para quem acompanha a inflação: a projeção do IPCA para 2026 subiu de <strong>4,17% para 4,31%</strong>, acima da meta de 3,0% com tolerância de 1,5 ponto percentual. Para 2027, a expectativa subiu para 3,84%. Com a guerra no Oriente Médio pressionando commodities, proteger o poder de compra dos seus investimentos nunca foi tão importante.
        </p>

        <p>
          Para entender por que essa revisão importa, vale lembrar como funciona o sistema de metas de inflação no Brasil: o Conselho Monetário Nacional define uma meta central (atualmente 3%) com um intervalo de tolerância de 1,5 ponto percentual para cima e para baixo. Isso significa que o IPCA pode variar entre 1,5% e 4,5% sem que o Banco Central seja formalmente considerado "fora da meta". A projeção de 4,31% está dentro desse intervalo, mas perigosamente próxima do teto — e a tendência de revisões sucessivas para cima nos últimos meses sugere que o risco está concentrado no lado de cima, não no lado de baixo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-amber-400" />
          Por Que a Inflação Está Subindo?
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { fator: "Guerra no Oriente Médio", impacto: "Alta do petróleo pressiona combustíveis e transporte. O barril de Brent opera acima de US$ 90 desde fevereiro, e chegou a romper US$ 125 no fim de abril com o bloqueio do Estreito de Ormuz.", icon: "⛽" },
            { fator: "Dólar pressionado", impacto: "Com o cenário geopolítico, o dólar oscila entre R$ 5,50 e R$ 5,70, encarecendo importações de insumos industriais e bens de capital.", icon: "💵" },
            { fator: "Alimentos em alta", impacto: "Seca no Sul e excesso de chuvas no Norte prejudicaram safras, com alta de 6,2% nos alimentos nos últimos 12 meses — um dos componentes que mais pesa no orçamento das famílias de baixa renda.", icon: "🍞" },
            { fator: "Serviços resilientes", impacto: "A inflação de serviços segue acima de 5%, impulsionada por reajustes salariais e planos de saúde — componente historicamente mais rígido e demorado para desacelerar.", icon: "📋" },
          ].map((item) => (
            <div key={item.fator} className="bg-card rounded-xl border border-amber-500/20 p-4 flex gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-amber-400 mb-1">{item.fator}</h4>
                <p className="text-sm text-muted-foreground mb-0">{item.impacto}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Um aspecto importante para o investidor entender é que esses quatro fatores têm naturezas muito diferentes em termos de persistência. Choques de petróleo e câmbio podem se reverter relativamente rápido se o cenário geopolítico se normalizar. Já a inflação de alimentos, ligada a fatores climáticos, tende a ter efeitos defasados — uma safra ruim hoje pode pressionar preços por vários meses até a próxima colheita. E a inflação de serviços, vinculada a reajustes salariais e contratuais, é a mais "pegajosa" de todas: uma vez que sobe, demora consideravelmente mais para recuar, mesmo que as causas originais já tenham desaparecido.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          O Cenário Macroeconômico em Números
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Indicador</th>
              <th className="text-left py-3 px-4">Atual</th>
              <th className="text-left py-3 px-4">Projeção Fim 2026</th>
              <th className="text-left py-3 px-4">Projeção 2027</th>
            </tr></thead>
            <tbody>
              {[
                ["IPCA (inflação)", "4,31% (12m)", "4,31%", "3,84%"],
                ["Selic (taxa básica)", "13,25%", "12,50%", "10,50%"],
                ["PIB (crescimento)", "2,8% (2025)", "2,1%", "2,3%"],
                ["Dólar (câmbio)", "R$ 5,60", "R$ 5,45", "R$ 5,30"],
                ["Ibovespa", "137.500 pts", "145.000 pts", "—"],
              ].map(([ind, atual, proj26, proj27]) => (
                <tr key={ind} className="border-t border-border">
                  <td className="py-3 px-4 font-bold">{ind}</td>
                  <td className="py-3 px-4 text-amber-400">{atual}</td>
                  <td className="py-3 px-4">{proj26}</td>
                  <td className="py-3 px-4 text-muted-foreground">{proj27}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Fonte: Boletim Focus/BCB — 30 de março de 2026</p>
        </div>
        <p>
          Vale notar que essa tabela já estava desatualizada poucas semanas após sua publicação — em fim de abril, o petróleo Brent rompeu US$ 125, bem acima do cenário considerado na projeção de 30 de março. Isso ilustra uma característica importante do Boletim Focus: ele captura o consenso do mercado <em>no momento da pesquisa</em>, mas projeções de inflação em ambientes de alta volatilidade geopolítica podem ficar obsoletas rapidamente. Para o investidor, isso reforça a importância de estratégias de proteção que funcionem independentemente de qual cenário específico se materialize — não apostas pontuais baseadas numa única projeção.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />
          5 Estratégias para Proteger Seus Investimentos
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">1. Tesouro IPCA+ (NTN-B)</h3>
        <p>
          O <strong>Tesouro IPCA+</strong> é o investimento mais direto contra a inflação. Ele paga a variação do IPCA + uma taxa prefixada. Em abril de 2026, os títulos estão pagando <strong>IPCA + 6,8% ao ano</strong> para vencimentos em 2035 — um rendimento real historicamente alto.
        </p>
        <div className="not-prose my-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-0">
            💡 <strong>Dica:</strong> Para quem investe a longo prazo (aposentadoria, educação dos filhos), o Tesouro IPCA+ 2045 com juros semestrais pode ser ideal. Você protege o capital contra inflação E recebe renda periódica.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">2. CDBs e LCIs/LCAs Indexados ao IPCA</h3>
        <p>
          Bancos médios estão oferecendo CDBs atrelados ao IPCA com taxas de até <strong>IPCA + 8,5% ao ano</strong> para prazos de 3+ anos. LCIs e LCAs com indexação ao IPCA têm a vantagem adicional de <strong>isenção de Imposto de Renda</strong> para pessoa física — o que pode tornar uma taxa nominalmente menor mais vantajosa que um CDB tributável de taxa aparentemente maior, após o cálculo do retorno líquido.
        </p>

        <AdInArticle className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-3">3. Fundos Imobiliários (FIIs) de Tijolo</h3>
        <p>
          FIIs de lajes corporativas e galpões logísticos tendem a se beneficiar da inflação, pois os <strong>contratos de aluguel são reajustados pelo IPCA ou IGP-M</strong>. Com o IFIX acumulando alta de 8,3% nos últimos 12 meses e dividend yield médio de 9,2%, os FIIs continuam sendo uma boa proteção. O mecanismo de proteção aqui é direto: quando a inflação sobe, o aluguel contratual sobe na mesma proporção (ou em proporção próxima, dependendo do índice de referência do contrato), e esse aumento se reflete no dividendo distribuído ao cotista no mês seguinte ao reajuste.
        </p>

        <AdRectangle className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-3">4. Ações de Setores Defensivos</h3>
        <p>
          Empresas de <strong>utilidades públicas</strong> (energia, saneamento) e <strong>bancos</strong> tendem a performar bem em cenários inflacionários. Suas receitas são indexadas à inflação (tarifas reajustadas) e os bancos lucram mais com juros altos.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Por que protege contra inflação</th>
              <th className="text-left py-3 px-4">Exemplos</th>
            </tr></thead>
            <tbody>
              {[
                ["Energia Elétrica", "Tarifas reajustadas pelo IPCA anualmente", "EGIE3, TAEE11, ENGI11"],
                ["Saneamento", "Receitas indexadas a índices de preço", "SAPR11, SBSP3"],
                ["Bancos", "Spread bancário aumenta com Selic alta", "ITUB4, BBDC4, BBAS3"],
                ["Seguradoras", "Prêmios reajustados + float investido em renda fixa", "BBSE3, CXSE3"],
              ].map(([s, p, e]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-emerald-400">{s}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{p}</td>
                  <td className="py-3 px-4">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">5. Dólar e Ouro como Hedge</h3>
        <p>
          Em cenários de inflação persistente, ter uma <strong>exposição de 5-10% da carteira em dólar</strong> (via ETFs como IVVB11 ou fundos cambiais) e <strong>2-5% em ouro</strong> (via GOLD11 ou fundos de ouro) pode proteger contra a desvalorização do real. Esses dois ativos funcionam de forma complementar: o dólar protege especificamente contra a inflação importada (combustíveis, eletrônicos, insumos industriais), enquanto o ouro protege contra cenários mais extremos de perda de confiança em moedas fiduciárias de forma geral.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <PiggyBank className="h-7 w-7 text-violet-400" />
          O Que NÃO Fazer em Cenário de Inflação Alta
        </h2>
        <div className="not-prose my-4 space-y-2">
          {[
            { erro: "Deixar dinheiro parado na poupança", desc: "A poupança rende ~9,28% ao ano, abaixo de CDBs e Tesouro — em termos reais, com IPCA a 4,31%, o ganho líquido é pequeno demais para justificar a falta de flexibilidade tributária de outras opções com risco equivalente." },
            { erro: "Investir tudo em prefixado curto", desc: "Se a inflação subir mais do que o esperado no momento da compra do título, o rendimento real (descontada a inflação) pode ficar negativo — você perde poder de compra mesmo recebendo juros nominais." },
            { erro: "Ignorar a diversificação", desc: "Concentrar em um único ativo, mesmo que pareça a melhor proteção do momento, amplia o risco de erro de tese. Diferentes hedges funcionam melhor em diferentes tipos de choque inflacionário." },
            { erro: "Comprar dólar no pânico", desc: "Câmbio é extremamente volátil no curto prazo. Faça aportes regulares ao longo de vários meses (DCA), não tudo de uma vez em um momento de pico de ansiedade com o cenário." },
            { erro: "Esquecer da reserva de emergência", desc: "Antes de proteger contra inflação com ativos de maior volatilidade, tenha 3 a 6 meses de gastos guardados em Tesouro Selic ou CDB de liquidez diária — essa reserva não deve competir com a estratégia de proteção inflacionária de longo prazo." },
          ].map(({ erro, desc }) => (
            <div key={erro} className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 flex gap-3">
              <span className="text-destructive shrink-0">❌</span>
              <div>
                <p className="text-sm font-bold mb-0.5">{erro}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-violet-400" />
          Modelo de Carteira Defensiva para Inflação Alta
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Classe</th>
              <th className="text-left py-3 px-4">Alocação sugerida</th>
              <th className="text-left py-3 px-4">Produto</th>
            </tr></thead>
            <tbody>
              {[
                ["Renda Fixa IPCA+", "35-40%", "Tesouro IPCA+ 2035, CDBs IPCA+"],
                ["Renda Fixa Pós-fixada", "20-25%", "Tesouro Selic, CDB 100% CDI (reserva)"],
                ["FIIs", "15-20%", "FIIs de tijolo (logística, lajes)"],
                ["Ações Defensivas", "10-15%", "Utilidades, bancos, seguradoras"],
                ["Hedge (Dólar + Ouro)", "5-10%", "IVVB11, GOLD11, fundos cambiais"],
              ].map(([c, a, p]) => (
                <tr key={c} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-violet-400">{c}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{a}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Como Saber se Sua Carteira Já Está Protegida
        </h2>
        <p>
          Um exercício simples ajuda a avaliar a exposição inflacionária da sua carteira atual: some o percentual em ativos indexados ao IPCA ou IGP-M (Tesouro IPCA+, CDBs IPCA+, FIIs com contratos atípicos indexados, LCIs/LCAs IPCA+) e compare com o percentual em ativos puramente nominais (CDBs prefixados de longo prazo, ações sem indexação direta, dinheiro em conta corrente). Se a parcela indexada à inflação for inferior a 30% do total investido em renda fixa, vale considerar realocar parte dos novos aportes para títulos IPCA+ — especialmente enquanto as taxas reais oferecidas (IPCA + 6% a 7%) permanecerem nos níveis elevados observados em 2026, historicamente atrativos em comparação com a média de longo prazo desses títulos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Inflação de Curto Prazo vs. Inflação Estrutural: A Diferença Que Importa
        </h2>
        <p>
          Nem toda alta de inflação exige o mesmo nível de reação na carteira. Choques
          pontuais — uma quebra de safra agrícola, um conflito geopolítico que eleva o
          petróleo temporariamente — tendem a se dissipar em alguns trimestres sem exigir
          realocação drástica de patrimônio. Já pressões estruturais — desancoragem
          persistente das expectativas de inflação, problemas fiscais crônicos, ou
          mudanças permanentes na cadeia produtiva global — exigem uma resposta mais
          duradoura na composição da carteira.
        </p>
        <p>
          Distinguir entre esses dois tipos de pressão inflacionária ajuda o investidor a
          calibrar a velocidade e a intensidade de qualquer reposicionamento. Para
          choques pontuais, pequenos ajustes táticos — como aumentar temporariamente a
          exposição a IPCA+ de prazo mais curto — costumam ser suficientes. Para
          pressões estruturais, uma revisão mais profunda da alocação de longo prazo,
          incluindo possivelmente maior diversificação internacional, pode ser
          justificada. O Boletim Focus e as atas do Copom são as melhores fontes para
          entender qual tipo de pressão o Banco Central está identificando no momento.
        </p>
        <p>
          Vale notar que, na prática, o IPCA brasileiro frequentemente carrega elementos
          de ambos os tipos de pressão simultaneamente — um choque de petróleo pontual
          pode se sobrepor a um problema fiscal mais estrutural, dificultando a
          separação clara entre os dois fenômenos em tempo real. Por isso, a abordagem
          mais prudente para a maioria dos investidores é manter uma exposição
          permanente e relevante a ativos protegidos contra inflação — não como reação
          tática a cada notícia, mas como componente estrutural e contínuo da carteira,
          ajustando apenas o percentual de exposição conforme o cenário evolui, em vez de
          alternar entre "ter" e "não ter" proteção inflacionária de forma reativa.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          A inflação acima da meta não é motivo para pânico, mas exige <strong>posicionamento estratégico</strong>. Títulos indexados ao IPCA, FIIs de tijolo e ações de setores defensivos formam o tripé de proteção mais eficiente para o investidor brasileiro em 2026. O mais importante: <strong>não deixe seu dinheiro parado</strong> — a inflação come o poder de compra silenciosamente, mês após mês, de forma que muitas vezes só se torna visível quando já causou um dano significativo e difícil de reverter.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado.
        </p>
      </div>
      <EditorialTake category="invest" title="Análise do Marcos: proteção real exige IPCA+ longo, não cripto">
        <p>Inflação alta no Brasil é fenômeno cíclico — em 30 anos vimos três ciclos relevantes (1995, 2015 e 2021-22), e em todos o ativo que protegeu de fato o patrimônio foi <strong>Tesouro IPCA+ com prazo maior que 5 anos</strong>. Ouro, dólar e Bitcoin tiveram bons momentos, mas com volatilidade que destrói a tese de "proteção". Para o investidor PF, a fórmula simples continua valendo: 40-60% em IPCA+ longo trava o juro real, 10-20% em câmbio (preferencialmente via ETF) faz hedge cambial, e o resto fica em CDI para liquidez.</p>
        <p className="mt-2">
          Tentativas de prever inflação são geralmente piores que seguir essa alocação básica de forma disciplinada. Um erro recorrente que vejo é o investidor reagir à manchete do dia — "inflação subiu, vou comprar dólar" ou "inflação caiu, vou vender o IPCA+" — quando a alocação correta deveria ser definida pelo horizonte de tempo e objetivo financeiro, não pela notícia da semana. O Tesouro IPCA+ funciona melhor justamente quando mantido por anos, capturando tanto a taxa real contratada quanto a variação do IPCA acumulada — vender no susto de uma notícia ruim de curto prazo, na maioria das vezes, destrói o valor da proteção que o título foi desenhado para oferecer.
        </p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: "IPCA — IBGE", url: "https://www.ibge.gov.br/explica/inflacao.php", publisher: "IBGE", accessedAt: "Maio 2026" },
          { title: "Tesouro IPCA+ — Tesouro Direto", url: "https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm", publisher: "Tesouro Nacional", accessedAt: "Maio 2026" },
          { title: "Boletim Focus", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Relatório de Inflação — Bacen", url: "https://www.bcb.gov.br/publicacoes/ri", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "ANBIMA — Índices de mercado", url: "https://www.anbima.com.br/", publisher: "ANBIMA", accessedAt: "Maio 2026" },
          { title: "Conselho Monetário Nacional — Metas de Inflação", url: "https://www.bcb.gov.br/controleinflacao/metainflacao", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug="inflacao-proteger-investimentos-2026" />
      <CommentSection postId="inflacao-proteger-investimentos-2026" postTitle="Inflação Acima da Meta em 2026: Como Proteger Seus Investimentos" category="invest" />
    </article>
  );
};

export default InflacaoProtegerInvestimentos2026;
