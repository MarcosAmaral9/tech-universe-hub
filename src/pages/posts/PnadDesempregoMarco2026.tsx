import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Briefcase, TrendingUp, BarChart3, AlertTriangle, Lightbulb, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/pnad-desemprego-marco-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "pnad-desemprego-61-marco-2026";
const TITLE = "PNAD Março 2026: Desemprego Sobe a 6,1%, Mas Mantém Mínima Histórica — O Que o Investidor Precisa Saber";

const PnadDesempregoMarco2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            PNAD · IBGE · Mercado de Trabalho · Renda
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          PNAD Março 2026: Desemprego Sobe a 6,1%, Mas Mantém Mínima Histórica — O Que o Investidor Precisa Saber
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="PNAD desemprego 6,1% março 2026 IBGE" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O IBGE divulgou a PNAD Contínua do trimestre encerrado em março de 2026: desocupação em <strong>6,1%</strong> — o menor nível para o período desde 2012. Renda média em recorde de <strong>R$ 3.722</strong> e massa salarial de <strong>R$ 374,8 bilhões</strong>. O que esses números significam para a Selic, para o consumo e para a sua carteira de investimentos?
        </p>

        <p>
          A alta frente ao trimestre encerrado em dezembro (5,1%) soa alarmante à primeira vista, mas os pesquisadores do IBGE são categóricos: trata-se de um movimento <strong>rigorosamente sazonal</strong>. Todo começo de ano, o mercado de trabalho brasileiro absorve o fim dos contratos temporários do Natal e Ano Novo no comércio, a rescisão de professores municipais contratados por período letivo e a redução das obras do setor de construção — que opera em ritmo mais lento no verão austral. A comparação relevante para análise de tendência é sempre a <strong>variação anual</strong>: e aí o quadro é inequivocamente positivo, com 987 mil pessoas a menos no desemprego em 12 meses.
        </p>

        <p>
          Para o investidor, o dado da PNAD importa por três canais diretos: primeiro, ele calibra as expectativas do mercado para a Selic — um mercado de trabalho aquecido pressiona a inflação de serviços, limitando a velocidade dos cortes de juros pelo Copom. Segundo, a renda e o emprego determinam o fôlego do consumo interno — o motor das empresas de varejo, alimentos, bancos e crédito que compõem grande parte do Ibovespa. Terceiro, a massa salarial em expansão indica capacidade de pagamento das famílias, o que reduz a inadimplência e beneficia bancos e fintechs de crédito.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Números do Trimestre Encerrado em Março
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Taxa de desocupação", val: "6,1%", note: "Mínima histórica para o período", icon: "📉" },
            { ind: "Pessoas desocupadas", val: "6,6 mi", note: "+19,6% no trimestre / -13% no ano", icon: "👥" },
            { ind: "População ocupada", val: "102 mi", note: "-1,0% trim / +1,5% ano", icon: "💼" },
            { ind: "Rendimento médio", val: "R$ 3.722", note: "Recorde da série histórica", icon: "💰" },
          ].map(({ ind, val, note, icon }) => (
            <div key={ind} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-lg mb-0.5">{val}</div>
              <div className="text-xs font-medium mb-0.5">{ind}</div>
              <div className="text-xs text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>

        <p>
          A alta da taxa frente ao trimestre anterior (5,1% em dezembro) é considerada <strong>sazonal</strong> pelos pesquisadores do IBGE: começo de ano concentra o fim de contratos temporários no comércio (vendedores, balconistas, atendentes) e na rede pública municipal de educação fundamental. Já a comparação anual mostra a verdadeira tendência: <strong>987 mil pessoas a menos no desemprego em 12 meses</strong>. A dessazonalizada, calculada pelo Inter, ficou em 5,7% — o maior desde setembro de 2025, sinalizando moderação gradual.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-invest" />
          Destaques da Pesquisa — Tabela Completa
        </h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Indicador</th>
              <th className="text-left py-3 px-4">Valor</th>
              <th className="text-left py-3 px-4">Observação</th>
            </tr></thead>
            <tbody>
              {[
                ["Taxa de desocupação", "6,1%", "Mínima histórica para o trimestre"],
                ["População desocupada", "6,6 milhões", "+1,1 mi no trimestre / -987 mil em 12 meses"],
                ["População ocupada", "102 milhões", "-1,0% trim / +1,5% ano"],
                ["Nível de ocupação", "58,2%", "-0,7 pp trim / +0,4 pp ano"],
                ["Subutilização", "14,3% (16,3 mi)", "+0,9 pp trim / -1,6 pp ano"],
                ["Desalentados", "2,7 milhões", "-15,9% em 12 meses (-509 mil pessoas)"],
                ["Carteira assinada (privado)", "39,2 milhões", "Estável trim / +1,3% ano"],
                ["Sem carteira (privado)", "13,3 milhões", "-2,1% trim / estável ano"],
                ["Setor público", "12,7 milhões", "-2,5% trim / +3,7% ano"],
                ["Conta própria", "26 milhões", "Estável trim / +2,4% ano"],
                ["Taxa de informalidade", "37,3%", "Recuo trim e ano (38,1 mi pessoas)"],
                ["Rendimento médio habitual", "R$ 3.722", "+1,6% trim / +5,5% ano (recorde)"],
                ["Massa de rendimento", "R$ 374,8 bilhões", "Estável trim / +7,1% ano (recorde)"],
              ].map(([ind, val, obs]) => (
                <tr key={ind} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{ind}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{val}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Renda em Alta: Onde Cresceu Mais
        </h2>
        <p>
          O rendimento médio mensal subiu em poucos setores na comparação trimestral, mas teve avanços disseminados em 12 meses. A alta de 5,5% no rendimento médio anual supera o IPCA acumulado no período — o que significa <strong>ganho real de poder de compra para o trabalhador</strong>, um combustível importante para o consumo interno e, consequentemente, para os resultados de empresas listadas na B3 voltadas ao mercado doméstico:
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Variação anual</th>
              <th className="text-left py-3 px-4">Acréscimo médio (R$)</th>
            </tr></thead>
            <tbody>
              {[
                ["🧰 Outros serviços", "+11,4%", "+R$ 320"],
                ["💻 Informação, comunicação, financeiras e profissionais", "+5,9%", "+R$ 291"],
                ["🏠 Serviços domésticos", "+4,9%", "+R$ 66"],
                ["🏗️ Construção", "+4,5%", "+R$ 124"],
                ["🏛️ Adm. pública, educação e saúde", "+4,0%", "+R$ 198"],
                ["🛒 Comércio e reparação de veículos", "+3,9%", "+R$ 113"],
              ].map(([s, v, r]) => (
                <tr key={s} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{s}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{v}</td>
                  <td className="py-3 px-4 text-xs">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O destaque vai para o setor de informação, comunicação e serviços financeiros com o maior acréscimo absoluto (+R$ 291/mês). Isso reflete a escassez de mão de obra qualificada em tecnologia e finanças no Brasil — profissionais de TI, analistas de dados e especialistas em IA seguem recebendo prêmios salariais acima da média. Para o investidor, isso reforça a tese de empresas de tecnologia brasileiras listadas na B3 que dependem desse perfil profissional.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Contexto Histórico: Por Que 6,1% é Excepcional
        </h2>
        <p>
          Para entender o significado real de 6,1% de desemprego no Brasil, é preciso comparar com a história. Quando o IBGE iniciou a série da PNAD Contínua em 2012, o desemprego oscilava entre 7% e 9%. Em 2015–2016, com a recessão profunda, disparou para mais de 14%, com quase 14 milhões de pessoas desocupadas. O fundo do poço foi atingido no primeiro trimestre de 2021, com 14,7% de desocupação durante os efeitos prolongados da pandemia. O Brasil trilhou um caminho de recuperação consistente desde então, saindo de 14,7% para 6,1% em cinco anos — uma das quedas mais rápidas de desemprego da história recente do país.
        </p>
        <p>
          O dado mais relevante para análise de tendência é a <strong>queda dos desalentados</strong> — pessoas que desistiram de procurar emprego. Em 12 meses, 509 mil pessoas saíram da condição de desalento e voltaram ao mercado de trabalho. Isso indica que o mercado está absorvendo trabalhadores que antes estavam fora da força de trabalho ativa, ampliando a base produtiva da economia. É um sinal de qualidade, não apenas de quantidade.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          O Que Economistas Estão Dizendo
        </h2>
        <p>
          André Valério, economista sênior do Inter, observa que a leitura exige cautela: removendo a sazonalidade, a métrica dessazonalizada chegou a <strong>5,7% em março — o maior valor desde setembro de 2025</strong>. "Vemos a continuidade da tendência de moderação do mercado de trabalho", afirma. A leitura sugere que o mercado, após atingir um pico de aperto histórico, está entrando em normalização gradual — sem uma deterioração brusca, mas com sinais de arrefecimento que o Copom acompanha de perto.
        </p>
        <p>
          Maykon Douglas destaca que a alta sazonal convive com avanço da ocupação em 12 meses e renda em ritmo consistente: "A massa salarial voltou a se acelerar, com crescimento real próximo de 6,4% em base anual". Para o consumo doméstico, isso é mais relevante do que a taxa de desemprego: uma massa salarial crescente significa mais dinheiro circulando nas famílias, independentemente de quantas pessoas estão trabalhando. As empresas varejistas sentirão esse efeito nos resultados do segundo trimestre de 2026.
        </p>
        <p>
          Adriana Beringuy, coordenadora de pesquisas de trabalho do IBGE, ressalta ainda a queda da informalidade para 37,3% — o menor nível histórico da série. Menos trabalhadores informais significa mais contribuintes à Previdência, mais acesso a crédito bancário e maior estabilidade de consumo nas famílias — um ciclo virtuoso que beneficia toda a economia formal.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Impactos Para Seus Investimentos
        </h2>
        <p>
          Cada componente da PNAD tem implicações diretas para diferentes classes de ativos e setores da bolsa. Veja o mapa completo dos impactos:
        </p>
        <div className="not-prose my-4 space-y-3">
          {[
            { tema: "📊 Selic e renda fixa", txt: "Mercado de trabalho ainda aquecido e massa salarial em expansão sustentam pressão de demanda sobre os preços de serviços. O Copom (29/04) cortou a Selic de 14,75% para 14,50%, mas o cenário de renda forte pode limitar a velocidade dos próximos cortes. Em 2026, segue favorável a Tesouro Selic, CDBs pós-fixados e Tesouro IPCA+ para quem quer proteger o poder de compra." },
            { tema: "🛒 Bolsa — consumo doméstico", txt: "Recorde de massa salarial (R$ 374,8 bi) e renda média (+5,5% no ano) sustentam a tese de consumo doméstico. Nomes em destaque: ASSAI3 (atacarejo), LREN3 (vestuário classe média), MGLU3 (eletrônicos), BBAS3 e ITUB4 (crédito). O ganho real de renda reduz inadimplência e amplia o apetite por financiamentos." },
            { tema: "🏗️ Construção e imobiliário", txt: "Rendimento da construção cresceu 4,5% no ano e a demanda por MCMV mantém o pipeline aquecido para construtoras e FIIs de logística e residencial. Destaques: CURY3, MRVE3 (construtoras populares), HGLG11, BTLG11 (FIIs logística). A queda da informalidade também amplia o acesso a crédito imobiliário." },
            { tema: "💻 Tech e serviços profissionais", txt: "Setor de informação, comunicação e financeiras teve a maior variação absoluta (+R$ 291/mês). Sinal positivo para empresas de tecnologia e BDRs de big techs (TOTS3, NVDC34, MSFT34, GOGL34). A escassez de mão de obra qualificada nesse setor pressiona salários para cima mas também eleva barreiras de entrada para concorrentes menores." },
            { tema: "💳 Fintechs e crédito", txt: "Queda da informalidade para 37,3% histórico é positiva para fintechs de crédito: trabalhadores formalizados têm holerite, acesso a FGTS como garantia e histórico bancário — reduzindo o risco de inadimplência. Favorece Nubank, Creditas, C6 Bank e bancos com carteiras de crédito consignado." },
          ].map(({ tema, txt }) => (
            <div key={tema} className="bg-card rounded-xl border border-invest/20 p-5">
              <h4 className="font-bold text-sm mb-2">{tema}</h4>
              <p className="text-sm text-muted-foreground">{txt}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Que Esperar nos Próximos Trimestres
        </h2>
        <p>
          O consenso de mercado para o mercado de trabalho nos próximos dois trimestres aponta para <strong>estabilização na faixa de 6,0% a 6,5%</strong> de desocupação, com eventual deterioração mais pronunciada somente se a Selic permanecer restritiva por mais tempo do que o esperado e o crédito à pessoa jurídica recuar. A retomada das obras do PAC e do MCMV no segundo semestre deve sustentar o setor de construção.
        </p>
        <p>
          O risco principal a monitorar é o setor de serviços, especialmente comércio: com juros ainda elevados e endividamento das famílias em patamar alto, qualquer surpresa negativa na inflação pode comprimir o poder de compra real e segurar o crescimento do consumo. O indicador a acompanhar mensalmente é a <strong>PNAD Mensal</strong> (divulgada todo mês) — ela atualiza a taxa de desocupação e dá o sinal mais antecipado de mudança de tendência no mercado de trabalho.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Comparando o Brasil com Outros Mercados de Trabalho Emergentes
        </h2>
        <p>
          Colocar o desemprego brasileiro em perspectiva internacional ajuda a entender
          se o patamar de 6,1% é, de fato, motivo de comemoração. Entre os principais
          mercados emergentes, o Brasil hoje está em posição intermediária — acima dos
          níveis historicamente baixos do México e de economias asiáticas com mercados
          de trabalho mais flexíveis, mas significativamente abaixo dos patamares de
          desemprego ainda elevados observados em parte da América Latina e em
          economias africanas em desenvolvimento.
        </p>
        <p>
          O que diferencia o caso brasileiro é a combinação específica de queda do
          desemprego com redução simultânea da informalidade — um padrão que nem todos
          os mercados emergentes conseguem replicar. Em muitos países em desenvolvimento,
          a queda do desemprego formal vem acompanhada de aumento da informalidade, à
          medida que trabalhadores aceitam qualquer ocupação disponível sem proteção
          trabalhista. O fato de o Brasil estar reduzindo os dois indicadores
          simultaneamente sugere uma melhora de qualidade do mercado de trabalho, não
          apenas de quantidade — um sinal mais robusto para o consumo doméstico
          sustentável do que apenas a taxa de desocupação isolada. Para investidores
          internacionais que comparam o Brasil com outros mercados emergentes na hora de
          alocar capital, esse tipo de qualidade estrutural do mercado de trabalho
          costuma pesar tanto quanto o nível absoluto do desemprego na avaliação geral
          da atratividade do país como destino de investimento.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> IBGE (PNAD Contínua, 30/04/2026), declarações de Adriana Beringuy (IBGE), André Valério (Inter), Maykon Douglas. Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a PNAD que importa é a da massa salarial, não a do desemprego">
        <p>
          Olhar só a taxa de desemprego de 6,1% é miopia analítica. O Brasil tem uma <strong>taxa de informalidade próxima de 37–38%</strong> da população ocupada (IBGE/PNAD Contínua), o que distorce completamente qualquer comparação com mercados desenvolvidos. Para o investidor brasileiro, o dado verdadeiramente relevante é a <strong>massa de rendimento real</strong> — ela é o que sustenta o consumo interno e, por consequência, o lucro de varejistas, bancos e empresas de serviços listadas na B3. Quando o desemprego cai mas o rendimento real estagna, o crescimento do PIB vem de crédito — e isso tem prazo de validade curto, especialmente com a Selic ainda acima de dois dígitos.
        </p>
        <p className="mt-2">
          A boa notícia desta PNAD é que os dois indicadores andam juntos: emprego e renda crescendo acima da inflação ao mesmo tempo. Historicamente, esse combo de mercado de trabalho aquecido com ganho real de renda gera um ciclo de 3–4 trimestres de crescimento consistente do consumo. Para a carteira: mantenho exposição a consumo doméstico via LREN3, ASSAI3 e BBAS3, que se beneficiam diretamente da expansão da massa salarial. O risco principal é político: se o governo acelerar a concessão de crédito público para estimular o consumo de curto prazo, o efeito positivo da PNAD pode ser ofuscado pelo impacto fiscal no câmbio e nos juros longos.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          { title: "PNAD Contínua — Indicadores Mensais", url: "https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-mensal.html", publisher: "IBGE", accessedAt: "Maio 2026" },
          { title: "Sistema de Contas Nacionais Trimestrais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9300-contas-nacionais-trimestrais.html", publisher: "IBGE", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Relatório de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "CAGED — Cadastro Geral de Empregados e Desempregados", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged", publisher: "Ministério do Trabalho e Emprego", accessedAt: "Maio 2026" },
          { title: "IBGE — Síntese de Indicadores Sociais", url: "https://www.ibge.gov.br/estatisticas/sociais/saude/9221-sintese-de-indicadores-sociais.html", publisher: "IBGE", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default PnadDesempregoMarco2026;
