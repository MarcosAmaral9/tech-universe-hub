import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import TableOfContents from "@/components/TableOfContents";
import {
  Clock, User, Calendar, AlertTriangle, TrendingDown,
  BarChart3, Scale, ShoppingCart, ListChecks, Landmark, ShieldCheck,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/recuperacao-judicial-empresas-brasil-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "recuperacao-judicial-empresas-2026-como-afeta-clientes";
const TITLE = "Recuperação Judicial em Alta: o Que É, Como Funciona e Como Afeta Clientes e Investidores";

const ETAPAS = [
  { n: "1", t: "Pedido", d: "A empresa protocola a petição comprovando mais de dois anos de atividade regular e apresentando demonstrações contábeis e lista de credores." },
  { n: "2", t: "Deferimento do processamento", d: "O juiz aceita o processamento, nomeia o administrador judicial e a empresa passa a usar a expressão 'em recuperação judicial' em seus atos." },
  { n: "3", t: "Stay period", d: "Suspensão das execuções contra a devedora por 180 dias, prorrogáveis uma vez. É o fôlego para negociar sem ter bens bloqueados." },
  { n: "4", t: "Apresentação do plano", d: "Em até 60 dias a empresa apresenta o plano com deságios, prazos e formas de pagamento por classe de credor." },
  { n: "5", t: "Assembleia de credores", d: "Os credores votam por classes. Aprovado o plano, ele vira título executivo judicial." },
  { n: "6", t: "Homologação e concessão", d: "O juiz concede a recuperação e a empresa passa a cumprir o plano nos prazos aprovados." },
  { n: "7", t: "Fiscalização por 2 anos", d: "Durante o biênio o cumprimento é acompanhado judicialmente. Descumprir pode levar à convolação em falência." },
];

const COMPARATIVO = [
  {
    tipo: "Recuperação extrajudicial",
    objetivo: "Renegociar dívidas com um grupo específico de credores",
    quemDecide: "Credores aderentes; homologação judicial ao final",
    empresa: "Continua operando normalmente",
    cliente: "Efeito prático quase nulo no dia a dia",
  },
  {
    tipo: "Recuperação judicial",
    objetivo: "Reestruturar o passivo e manter a empresa em funcionamento",
    quemDecide: "Assembleia de credores, com supervisão do juiz",
    empresa: "Continua operando, sob administração dos próprios sócios e fiscalização",
    cliente: "Atendimento continua, mas com risco de atraso, redução de rede e mudanças em benefícios",
  },
  {
    tipo: "Falência",
    objetivo: "Encerrar a atividade e liquidar os bens para pagar credores",
    quemDecide: "Juiz, com o administrador judicial conduzindo a liquidação",
    empresa: "Encerra as operações",
    cliente: "Precisa habilitar o crédito e entra na fila legal de pagamento",
  },
];

const ORDEM_CREDORES = [
  { c: "Créditos trabalhistas e de acidente de trabalho", o: "Prioridade máxima, limitados a 150 salários mínimos por credor na classe" },
  { c: "Créditos com garantia real", o: "Até o limite do bem dado em garantia" },
  { c: "Créditos tributários", o: "Depois dos anteriores" },
  { c: "Créditos com privilégio especial e geral", o: "Conforme previsão legal" },
  { c: "Créditos quirografários", o: "Sem garantia — é aqui que costuma cair o consumidor" },
  { c: "Multas contratuais e penas pecuniárias", o: "Posição inferior na fila" },
  { c: "Créditos subordinados", o: "Últimos a receber, incluindo sócios" },
];

const RecuperacaoJudicialEmpresas2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Economia · Crédito · Direito do Consumidor
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Recuperação Judicial em Alta: o Que É, Como Funciona e Como Afeta Clientes e Investidores
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O Brasil registrou o maior número de empresas em <strong>recuperação judicial</strong> desde o início da série
          histórica: foram <strong>977 processos em 2025</strong> (alta de 5,5% sobre 2024), envolvendo{" "}
          <strong>2.466 empresas</strong> — 12,9% a mais que no ano anterior, segundo a Serasa Experian. Se uma loja, uma
          companhia aérea ou uma construtora com quem você tem contrato entrar nessa lista, o que acontece com o seu dinheiro,
          com a sua garantia e com o seu pedido? Este guia explica o processo do começo ao fim.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />1 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Prédio corporativo se desfazendo em velas vermelhas de queda ao lado de martelo judicial, ilustrando recuperação judicial de empresas no Brasil"
          className="w-full h-full object-cover"
        />
      </div>

      <TableOfContents />

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* Painel de números */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-invest" />
            O retrato do recorde
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Indicador de Falências e Recuperações Judiciais da Serasa Experian, divulgado em abril de 2026.
          </p>
          <div className="space-y-2">
            {[
              { k: "Processos de recuperação judicial em 2025", v: "977" },
              { k: "Variação sobre 2024", v: "+5,5%" },
              { k: "Empresas envolvidas nos processos", v: "2.466" },
              { k: "Variação no número de empresas", v: "+12,9%" },
              { k: "Posição na série histórica (iniciada em 2012)", v: "Maior nível já registrado" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-invest font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-medium">
            O dado mais relevante não é só o volume de processos, e sim o número de empresas por processo: cresce a
            participação de grupos econômicos inteiros pedindo recuperação em conjunto.
          </p>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-e" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scale className="h-7 w-7 text-invest" />
          O Que É Recuperação Judicial
        </h2>
        <p>
          Recuperação judicial é um processo previsto na <strong>Lei 11.101/2005</strong>, reformada pela{" "}
          <strong>Lei 14.112/2020</strong>, que permite a uma empresa em crise financeira renegociar suas dívidas sob
          supervisão do Poder Judiciário, com o objetivo de continuar funcionando. A lógica por trás dela é econômica, não
          assistencial: uma empresa viva preserva empregos, contratos, arrecadação de tributos e fornecedores — e costuma pagar
          mais aos credores do que a venda dos seus ativos em leilão.
        </p>
        <p>
          Vale insistir no ponto que mais gera confusão: <strong>recuperação judicial não é falência</strong>. A empresa em
          recuperação continua vendendo, emitindo nota fiscal, prestando serviço e sendo administrada pelos próprios sócios. O
          que ela ganha é um ambiente protegido para reorganizar o passivo. A falência é o desfecho oposto: encerramento da
          atividade e liquidação dos bens.
        </p>
        <p>
          Para pedir, a empresa precisa cumprir requisitos, entre eles exercer atividade regular há mais de dois anos, não ter
          obtido a mesma concessão nos últimos cinco anos e apresentar documentação contábil completa, com a relação de todos
          os credores.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-invest/10">
              <tr>
                <th className="p-3 text-left font-bold">Instituto</th>
                <th className="p-3 text-left font-bold">Objetivo</th>
                <th className="p-3 text-left font-bold">Quem decide</th>
                <th className="p-3 text-left font-bold">A empresa</th>
                <th className="p-3 text-left font-bold">Efeito no cliente</th>
              </tr>
            </thead>
            <tbody>
              {COMPARATIVO.map((r) => (
                <tr key={r.tipo} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-invest break-words">{r.tipo}</td>
                  <td className="p-3 text-muted-foreground break-words">{r.objetivo}</td>
                  <td className="p-3 text-muted-foreground break-words">{r.quemDecide}</td>
                  <td className="p-3 text-muted-foreground break-words">{r.empresa}</td>
                  <td className="p-3 break-words">{r.cliente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="como-funciona" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ListChecks className="h-7 w-7 text-invest" />
          Como Funciona o Processo, Etapa por Etapa
        </h2>
        <p>
          Da petição inicial até o fim da fiscalização judicial, o rito segue uma sequência bem definida. Conhecê-la ajuda a
          entender em que momento cada notícia sobre a empresa se encaixa.
        </p>

        <div className="not-prose my-8 space-y-3">
          {ETAPAS.map(({ n, t, d }) => (
            <div key={n} className="flex gap-4 items-start rounded-xl border border-invest/20 bg-invest/5 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-invest/20 font-display font-bold text-invest text-sm">
                {n}
              </span>
              <div className="min-w-0">
                <p className="font-bold text-sm mb-1 break-words">{t}</p>
                <p className="text-xs text-muted-foreground break-words">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Um detalhe importante do <strong>stay period</strong>: ele suspende execuções, mas não apaga a dívida nem impede que
          novas obrigações contraídas depois do pedido sejam cobradas normalmente. Créditos posteriores ao pedido ficam fora do
          plano — por isso fornecedores costumam exigir pagamento à vista de empresas em recuperação.
        </p>

        <h2 id="por-que-cresceu" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingDown className="h-7 w-7 text-invest" />
          Por Que Tantas Empresas Estão Pedindo Recuperação
        </h2>
        <p>
          O recorde não tem causa única. Ele é o encontro de vários fatores que se reforçam:
        </p>
        <ul>
          <li>
            <strong>Custo do dinheiro.</strong> Com a Selic em patamar de dois dígitos por um período prolongado, o serviço da
            dívida consumiu margens que já eram apertadas. Empresas que cresceram tomando crédito barato passaram a rolar
            dívida a taxas muito maiores.
          </li>
          <li>
            <strong>Crédito mais seletivo.</strong> Bancos e o mercado de capitais reduziram apetite para setores de risco. Sem
            refinanciamento, a crise de liquidez vira crise de solvência.
          </li>
          <li>
            <strong>Endividamento acumulado.</strong> Boa parte do passivo atual foi contraído em linhas emergenciais dos anos
            anteriores, cujos prazos de carência venceram.
          </li>
          <li>
            <strong>Concentração setorial.</strong> Varejo, serviços, construção e agro aparecem com destaque nos indicadores —
            setores sensíveis a juros, clima e consumo das famílias.
          </li>
          <li>
            <strong>Uso estratégico do instituto.</strong> Depois da reforma de 2020, grupos econômicos passaram a usar a
            recuperação de forma mais planejada, muitas vezes com várias empresas do mesmo grupo em um único processo — o que
            explica o número de empresas crescer mais que o de processos.
          </li>
        </ul>

        <AdRectangle />

        <h2 id="afeta-clientes" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShoppingCart className="h-7 w-7 text-invest" />
          Como Isso Afeta Você, Cliente da Empresa
        </h2>
        <p>
          Esta é a parte que interessa a quem tem um produto pago e não entregue, um plano contratado, milhas acumuladas ou uma
          garantia em aberto. A regra geral é simples: <strong>a empresa em recuperação judicial continua obrigada a cumprir os
          contratos</strong> e o Código de Defesa do Consumidor continua valendo integralmente. Na prática, porém, existem
          nuances.
        </p>
        <ul>
          <li>
            <strong>Produtos e serviços contratados agora.</strong> Compras feitas depois do pedido de recuperação não entram no
            plano de credores. Se não forem entregues, você pode exigir cumprimento, troca ou devolução do valor pelas vias
            normais do CDC e do Procon.
          </li>
          <li>
            <strong>Valores devidos antes do pedido.</strong> Se a empresa já lhe devia dinheiro na data do pedido, esse crédito
            entra no processo. Você precisa conferir se seu nome está na lista de credores e, se não estiver,{" "}
            <strong>habilitar o crédito</strong> junto ao administrador judicial dentro do prazo publicado no edital.
          </li>
          <li>
            <strong>Garantia e assistência técnica.</strong> A obrigação de garantia permanece, mas a rede autorizada pode
            encolher. Guarde nota fiscal, protocolos e prazos; se a assistência deixar de existir, a alternativa é exigir
            reparação por outras vias, inclusive do fabricante quando houver responsabilidade solidária.
          </li>
          <li>
            <strong>Planos, assinaturas e programas de fidelidade.</strong> Costumam ser mantidos, mas condições podem mudar:
            redução de benefícios, alteração de rede credenciada, mudança em regras de resgate. Acompanhe comunicados oficiais e
            registre reclamações formalmente.
          </li>
          <li>
            <strong>Reembolsos.</strong> Pedidos de reembolso relativos a fatos anteriores ao processo entram na fila de
            credores, normalmente na classe quirografária. Reembolsos de operações posteriores seguem o rito comum.
          </li>
          <li>
            <strong>Pagamento parcelado no cartão.</strong> Se o serviço não for prestado, é possível contestar as parcelas
            junto à administradora do cartão — caminho geralmente mais rápido que a habilitação de crédito.
          </li>
        </ul>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-invest/10">
              <tr>
                <th className="p-3 text-left font-bold">Ordem de pagamento dos credores</th>
                <th className="p-3 text-left font-bold">Observação</th>
              </tr>
            </thead>
            <tbody>
              {ORDEM_CREDORES.map((r) => (
                <tr key={r.c} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold break-words">{r.c}</td>
                  <td className="p-3 text-muted-foreground break-words">{r.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
          <p className="font-bold text-sm mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" /> O que fazer se a empresa que você contratou entrou em recuperação
          </p>
          <ul className="space-y-1.5">
            {[
              "Reúna e organize contratos, notas fiscais, comprovantes de pagamento e protocolos de atendimento.",
              "Procure o edital do processo e o nome do administrador judicial — os dados são públicos no tribunal competente.",
              "Verifique se o seu crédito consta na lista de credores; se não constar, habilite dentro do prazo.",
              "Registre reclamação formal no canal da empresa, no consumidor.gov.br e no Procon, guardando os números de protocolo.",
              "Para valores relevantes, avalie apoio jurídico especializado antes de aceitar acordos com deságio elevado.",
              "Evite novos pagamentos antecipados ou contratos de longo prazo com a empresa enquanto o plano não estiver aprovado.",
            ].map((i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">→</span>{i}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="afeta-investidores" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-invest" />
          Como Isso Afeta Quem Investe
        </h2>
        <p>
          O investidor sente o impacto por caminhos diferentes do consumidor, e quase sempre com perda mais direta:
        </p>
        <ul>
          <li>
            <strong>Debêntures, CRIs e CRAs.</strong> São dívida corporativa. Se a emissora pede recuperação, o crédito entra no
            plano e costuma sofrer deságio e alongamento de prazo. Garantias reais melhoram a posição, mas não eliminam o risco.
          </li>
          <li>
            <strong>Fundos de crédito privado.</strong> Um evento de crédito derruba a cota do fundo de uma vez, mesmo que a
            carteira seja diversificada. É o risco que explica por que alguns fundos rendem acima do CDI.
          </li>
          <li>
            <strong>FIIs de recebíveis e de tijolo.</strong> Inadimplência de devedores ou de inquilinos afeta diretamente a
            distribuição mensal de rendimentos.
          </li>
          <li>
            <strong>Ações de empresa em recuperação.</strong> O acionista é o último da fila. Planos frequentemente preveem
            conversão de dívida em capital, o que dilui fortemente quem já era sócio. Preço baixo não significa barato.
          </li>
        </ul>

        <h2 id="checklist" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldCheck className="h-7 w-7 text-invest" />
          Checklist: Sinais de Alerta Antes de Comprar ou Investir
        </h2>
        <ul>
          <li>Endividamento crescente sem crescimento equivalente de receita e caixa operacional negativo por trimestres seguidos.</li>
          <li>Atrasos recorrentes com fornecedores, fechamento de lojas, corte agressivo de quadro e venda de ativos essenciais.</li>
          <li>Promoções muito acima da média do setor com prazo de entrega longo — sinal clássico de necessidade de caixa imediato.</li>
          <li>Rebaixamento de rating, disparada no spread das debêntures ou dificuldade em rolar dívida no mercado.</li>
          <li>Troca frequente de auditoria, atraso na divulgação de balanços ou ressalvas no parecer dos auditores.</li>
          <li>Volume atípico de reclamações em plataformas públicas de consumidores, especialmente sobre reembolso e entrega.</li>
        </ul>
        <p>
          Nenhum indicador isolado condena uma empresa, mas a soma deles justifica cautela — principalmente em compras com
          pagamento antecipado e prazo de entrega longo, que são exatamente as que mais machucam o consumidor quando o processo
          começa.
        </p>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Aviso Legal:</strong> Este conteúdo é educacional e não constitui consultoria jurídica nem recomendação de
            investimento. Prazos, classes de crédito e efeitos práticos variam conforme o plano aprovado e as decisões do juízo
            competente. Para casos concretos, consulte um advogado ou os órgãos de defesa do consumidor.
          </span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o recorde de recuperações é um aviso sobre risco de crédito, não só sobre empresas ruins">
        <p>
          O número que me chama atenção no indicador da Serasa não é o total de processos, é a razão entre empresas e processos.
          Quando 977 processos envolvem 2.466 empresas, o que está entrando em recuperação já não é a lojinha isolada: são
          grupos econômicos inteiros, com dívidas espalhadas por bancos, debêntures, fundos e fornecedores. Esse tipo de crise
          não fica contida no CNPJ que pediu.
        </p>
        <p className="mt-2">
          Para o leitor, tiro duas conclusões práticas. Como consumidor,{" "}
          <strong>pagamento antecipado com entrega futura é a forma mais arriscada de comprar num ambiente assim</strong> —
          prefira parcelar no cartão, que dá poder de contestação, a fazer transferência à vista por desconto. Como investidor,
          se o produto de crédito privado paga muito acima do CDI, ele está te pagando exatamente por esse risco. Não existe
          prêmio de graça: existe prêmio pela chance de virar credor quirografário numa assembleia.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Recuperações judiciais avançam no Brasil e atingem 2,5 mil empresas em 2025, maior nível da série",
            url: "https://www.serasaexperian.com.br/sala-de-imprensa/indicadores/recuperacoes-judiciais-avancam-no-brasil-e-atingem-25-mil-empresas-em-2025-maior-nivel-da-serie-aponta-serasa-experian/",
            publisher: "Serasa Experian",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Recorde no número de recuperações judiciais esconde mudança crítica, aponta indicador da Serasa Experian",
            url: "https://forbes.com.br/forbes-money/2026/04/recorde-no-numero-de-recuperacoes-judiciais-esconde-mudanca-critica-aponta-indicador-da-serasa-experian/",
            publisher: "Forbes Brasil",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Serasa Experian: recuperação judicial cresce em 2025 e atinge maior nº de empresas desde 2012",
            url: "https://economia.uol.com.br/noticias/estadao-conteudo/2026/04/07/serasa-experian-recuperacao-judicial-cresce-em-2025-e-atinge-maior-n-de-empresas-desde-2012.htm",
            publisher: "UOL Economia / Estadão Conteúdo",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Lei 11.101/2005 — Recuperação judicial, extrajudicial e falência do empresário e da sociedade empresária",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11101.htm",
            publisher: "Presidência da República",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Lei 14.112/2020 — Atualiza a legislação de recuperação judicial e falência",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14112.htm",
            publisher: "Presidência da República",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Código de Defesa do Consumidor — Lei 8.078/1990",
            url: "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm",
            publisher: "Presidência da República",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Consumidor.gov.br — plataforma oficial de resolução de conflitos de consumo",
            url: "https://www.consumidor.gov.br/",
            publisher: "Secretaria Nacional do Consumidor",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default RecuperacaoJudicialEmpresas2026;
