import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdInArticle, AdRectangle } from "@/components/AdSense";
import { AlertTriangle, BarChart3, Calendar, Calculator, CheckCircle2, Clock, Heart, HelpCircle, Home, Key, PiggyBank, Scale, User, XCircle } from "lucide-react";
import heroImg from "@/assets/financiar-imovel-ou-alugar-e-investir-2026.webp";

const SLUG = "financiar-imovel-ou-alugar-e-investir-2026";
const TITLE = "Financiar Imóvel ou Alugar e Investir a Diferença? Contas Reais para 2026";

const SAC_PRICE = [
  { item: "Primeira parcela", sac: "R$ 3.925", price: "R$ 3.141" },
  { item: "Última parcela", sac: "R$ 897", price: "R$ 3.141" },
  { item: "Juros pagos em 30 anos", sac: "≈ R$ 548 mil", price: "≈ R$ 811 mil" },
  { item: "Total pago (sem seguros e taxas)", sac: "≈ R$ 868 mil", price: "≈ R$ 1,13 milhão" },
];

const CENARIOS = [
  { prazo: "10 anos", comprador: "≈ R$ 324 mil", inquilino: "≈ R$ 378 mil", aluguel: "R$ 2.972" },
  { prazo: "20 anos", comprador: "≈ R$ 740 mil", inquilino: "≈ R$ 784 mil", aluguel: "R$ 4.616" },
  { prazo: "30 anos", comprador: "≈ R$ 1,50 milhão", inquilino: "≈ R$ 1,35 milhão", aluguel: "R$ 7.168" },
];

const FAQ = [
  { q: "Pagar aluguel é jogar dinheiro fora?", a: "Não necessariamente. No financiamento, os juros também são um custo que não volta. A comparação justa é aluguel contra juros, seguros, impostos e manutenção — não aluguel contra a parcela inteira." },
  { q: "SAC ou Price: qual é melhor?", a: "Na mesma taxa, o SAC paga menos juros no total porque amortiza mais rápido, mas começa com parcela maior. A Price tem parcela fixa, mais leve no início, e custa mais no fim." },
  { q: "Posso usar o FGTS?", a: "Sim, na entrada, para amortizar o saldo ou abater parte das parcelas, desde que você e o imóvel cumpram as regras do Sistema Financeiro da Habitação e do FGTS." },
  { q: "O que é CET?", a: "Custo Efetivo Total: a taxa que soma juros, seguros obrigatórios e tarifas. É o número certo para comparar propostas de bancos diferentes." },
  { q: "Vale amortizar antecipadamente?", a: "Em geral, sim, quando a taxa do financiamento é maior que o retorno líquido que você consegue investindo com segurança. Prefira reduzir o prazo, que economiza mais juros." },
  { q: "Os números da simulação valem para mim?", a: "Não. São exemplos educativos com premissas declaradas. Mudando taxa, aluguel, valorização ou disciplina de investimento, o resultado muda." },
];

const FinanciarOuAlugar2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Imóveis · Planejamento · Simulação</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">Financiar Imóvel ou Morar de Aluguel e Investir a Diferença? Contas Reais para 2026</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Com a Selic em <strong>13,75% ao ano</strong>, o crédito imobiliário ficou caro e a velha pergunta voltou. Fizemos as contas de um imóvel de R$ 400 mil em SAC e Price, comparamos com o aluguel investindo a diferença e mostramos quando cada caminho faz sentido.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />18 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" loading="eager" decoding="async" width={1536} height={864} src={heroImg} alt="Maquete de casa, chave, calculadora, notas de real e gráfico em alta sobre uma mesa" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-invest" />Resumo rápido</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Imóvel simulado", "R$ 400 mil"], ["Entrada", "R$ 80 mil (20%)"],
              ["Financiado", "R$ 320 mil em 30 anos"], ["Taxa hipotética", "12% ao ano"],
              ["Aluguel inicial", "R$ 2.000 por mês (0,5%)"], ["Resultado", "empate técnico; decide a disciplina"],
            ].map(([rotulo, valor]) => <div key={rotulo} className="border-b border-border/40 pb-2"><p className="text-xs text-muted-foreground">{rotulo}</p><p className="font-bold text-invest">{valor}</p></div>)}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Simulação educativa com premissas declaradas no texto. Não é proposta de banco nem previsão.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><Home className="h-7 w-7 text-invest" />Por que essa dúvida voltou com força</h2>
        <p>Poucas decisões financeiras mexem tanto com a vida de uma família quanto a casa onde ela mora. Durante décadas, a regra repetida em almoços de domingo foi simples: aluguel é dinheiro jogado fora, e quem pode deve comprar. Só que essa frase ignora o custo do dinheiro. Quando a taxa básica de juros está em dois dígitos, como a Selic de 13,75% ao ano definida pelo Copom em setembro de 2026, o crédito imobiliário encarece e, ao mesmo tempo, a renda fixa paga bem para quem tem dinheiro guardado.</p>
        <p>Isso cria um conflito real. Quem financia trava por até 35 anos uma dívida cara. Quem aluga mantém liberdade e pode deixar a entrada rendendo, mas convive com reajustes de aluguel e com a sensação de não construir patrimônio. Nenhum dos dois lados está automaticamente certo. A resposta depende de números, prazo, estabilidade de renda e, principalmente, do comportamento de quem decide.</p>
        <p>Neste guia, montamos um exemplo completo com valores redondos, explicamos cada premissa e mostramos onde a conta costuma ser manipulada — tanto por quem quer vender imóvel quanto por quem quer vender investimento.</p>

        <h2 className="flex items-center gap-3"><Calculator className="h-7 w-7 text-invest" />SAC e Price: como funcionam as parcelas</h2>
        <p>No Brasil, quase todo financiamento habitacional usa um de dois sistemas de amortização. No <strong>SAC (Sistema de Amortização Constante)</strong>, você devolve todo mês a mesma fatia do valor emprestado, e os juros incidem sobre um saldo que cai rápido. Por isso, a parcela começa alta e vai diminuindo ao longo do contrato. Na <strong>Tabela Price</strong>, a parcela é igual do primeiro ao último mês: no começo, quase tudo é juros; a amortização só ganha peso no fim.</p>
        <p>Para comparar, usamos R$ 320 mil financiados em 360 meses, com taxa efetiva hipotética de 12% ao ano. É uma taxa ilustrativa, próxima do que se observa no crédito com recursos da poupança em ambiente de juros altos; a sua proposta pode ser maior ou menor, e os bancos ainda acrescentam seguros e tarifas.</p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-sm">
            <thead className="bg-invest/10"><tr><th className="p-3 text-left">Item</th><th className="p-3 text-left text-invest">SAC</th><th className="p-3 text-left text-invest">Price</th></tr></thead>
            <tbody>
              {SAC_PRICE.map((l) => <tr key={l.item} className="border-t border-border/40"><td className="p-3">{l.item}</td><td className="p-3 font-semibold">{l.sac}</td><td className="p-3 font-semibold">{l.price}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p>A diferença é grande: na mesma taxa, a Price custa cerca de R$ 260 mil a mais em juros. Em compensação, o SAC exige uma primeira parcela quase R$ 800 maior, o que pode barrar a aprovação, já que os bancos costumam limitar a prestação a cerca de 30% da renda familiar. É assim que se chega ao famoso "pagar dois ou três imóveis": somando juros, o total desembolsado fica entre 2,2 e 2,8 vezes o valor emprestado.</p>

        <h2>Os custos que ninguém coloca na planilha</h2>
        <p>A parcela é só parte da história. Antes de receber as chaves, o comprador paga o <strong>ITBI</strong> (imposto municipal, em geral entre 2% e 3% do valor do imóvel), a escritura e o registro em cartório, a avaliação do imóvel pelo banco e, eventualmente, a corretagem. Somados, esses custos chegam facilmente a 4% ou 5% do preço — no nosso exemplo, cerca de R$ 20 mil.</p>
        <p>Durante o contrato, entram os seguros obrigatórios de morte e invalidez permanente e de danos físicos ao imóvel, além de tarifa de administração em alguns bancos. Tudo isso compõe o <strong>CET (Custo Efetivo Total)</strong>, que o banco é obrigado a informar, conforme regras do Banco Central. Compare propostas sempre pelo CET, nunca só pela taxa de juros anunciada.</p>
        <p>Depois, há os custos de ser dono: IPTU, condomínio (que o inquilino também paga) e manutenção. Uma referência comum é reservar perto de 1% do valor do imóvel por ano para reformas e consertos. Em 30 anos, troca-se telhado, encanamento, pintura e piso.</p>

        <AdInArticle />

        <h2 className="flex items-center gap-3"><PiggyBank className="h-7 w-7 text-invest" />O cenário do inquilino que investe</h2>
        <p>Agora, o outro lado. Imagine que a mesma família, em vez de comprar, aluga um imóvel equivalente por R$ 2.000 por mês. Esse valor corresponde a 0,5% do preço do imóvel ao mês, faixa próxima do rendimento médio de aluguel residencial acompanhado pelo Índice FipeZap nas grandes capitais.</p>
        <p>Os R$ 80 mil da entrada e os R$ 20 mil de custos de compra são investidos. Todo mês, a família também aplica a diferença entre a parcela que pagaria na Price (R$ 3.141) e o aluguel. Para as contas, usamos estas premissas:</p>
        <ul>
          <li>Retorno bruto médio de 10,5% ao ano ao longo de 30 anos, abaixo da Selic atual, porque juros tão altos dificilmente se mantêm por décadas;</li>
          <li>Imposto de Renda de 15%, alíquota da tabela regressiva para aplicações acima de dois anos, resultando em cerca de 8,9% líquidos;</li>
          <li>Aluguel e imóvel reajustados em 4,5% ao ano, perto da inflação;</li>
          <li>Quando o aluguel ultrapassa a parcela, o inquilino passa a retirar a diferença da própria carteira.</li>
        </ul>
        <p>O último ponto é importante e costuma ser esquecido. A parcela da Price é fixa, mas o aluguel sobe todo ano. Por volta do décimo ano, no nosso exemplo, o aluguel supera a parcela, e a vantagem do inquilino começa a encolher.</p>

        <h2 className="flex items-center gap-3"><Scale className="h-7 w-7 text-invest" />Quem sai na frente em 10, 20 e 30 anos</h2>
        <p>Comparamos o patrimônio de cada família. Para o comprador, é o valor de mercado do imóvel menos o saldo devedor. Para o inquilino, é o saldo da carteira de investimentos.</p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          {CENARIOS.map((c) => (
            <div key={c.prazo} className="rounded-xl border border-invest/30 bg-gradient-to-br from-invest/10 to-card p-5">
              <p className="font-display text-2xl font-bold text-invest mb-3">{c.prazo}</p>
              <p className="text-sm text-muted-foreground">Comprador (imóvel − dívida)</p>
              <p className="font-bold mb-2">{c.comprador}</p>
              <p className="text-sm text-muted-foreground">Inquilino (carteira)</p>
              <p className="font-bold mb-2">{c.inquilino}</p>
              <p className="text-xs text-muted-foreground">Aluguel no período: {c.aluguel}/mês</p>
            </div>
          ))}
        </div>
        <p>O resultado surpreende quem esperava uma vitória clara. Nas primeiras duas décadas, o inquilino disciplinado fica ligeiramente à frente, porque o dinheiro da entrada rende juros compostos desde o primeiro mês. Ao final dos 30 anos, o comprador passa à frente: a dívida acabou, o imóvel valorizou junto com a inflação e ele não paga mais nada além de IPTU e manutenção — custos que não descontamos do comprador e que reduziriam essa vantagem.</p>
        <p>Pequenas mudanças viram o jogo. Se o aluguel for 0,4% do valor do imóvel, o inquilino ganha com folga. Se o investimento render menos que o previsto, ou se a taxa do financiamento for menor, o comprador leva. A conclusão honesta é que, com juros altos, os dois caminhos ficam próximos, e quem decide o vencedor é a disciplina.</p>

        <h2>O fator que a planilha não mede: comportamento</h2>
        <p>A simulação parte de uma hipótese forte: o inquilino investe a diferença todos os meses, por 30 anos, sem usar o dinheiro na troca de carro, na viagem ou na emergência. Na prática, poucas pessoas conseguem. O financiamento funciona como uma poupança forçada: você não pode simplesmente deixar de pagar. Para quem tem dificuldade de guardar dinheiro, essa obrigação tem valor real.</p>
        <p>Do outro lado, a liquidez também tem valor. Quem aluga pode mudar de cidade por um emprego melhor, reduzir custos se a renda cair e manter uma reserva grande para imprevistos. Quem financia fica preso a uma parcela por décadas e, se atrasar, corre o risco de perder o imóvel por alienação fiduciária, que permite ao banco retomar o bem de forma relativamente rápida.</p>

        <h2 className="flex items-center gap-3"><Heart className="h-7 w-7 text-invest" />Segurança emocional também conta</h2>
        <p>Ter a própria casa traz estabilidade: não depender da renovação do contrato, poder reformar do seu jeito, manter os filhos na mesma escola. São benefícios legítimos, que não aparecem em nenhuma tabela. A decisão financeira mais racional nem sempre é a que traz mais paz. O importante é saber quanto essa paz custa e escolher conscientemente.</p>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><Key className="h-7 w-7 text-invest" />Quando financiar faz sentido</h2>
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-invest/30 bg-invest/5 p-5">
            <p className="font-bold text-invest flex items-center gap-2 mb-3"><CheckCircle2 className="h-5 w-5" />Tende a valer a pena</p>
            <ul className="space-y-2 text-sm text-foreground/90 list-disc list-inside">
              <li>Você tem saldo de FGTS para entrada e amortizações;</li>
              <li>Tem acesso a juros subsidiados, como faixas do Minha Casa, Minha Vida;</li>
              <li>Pretende morar no imóvel por muitos anos;</li>
              <li>Renda estável e reserva de emergência separada;</li>
              <li>O aluguel na região é caro em relação ao preço dos imóveis.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <p className="font-bold text-destructive flex items-center gap-2 mb-3"><XCircle className="h-5 w-5" />Tende a ser um erro</p>
            <ul className="space-y-2 text-sm text-foreground/90 list-disc list-inside">
              <li>A parcela compromete mais de 30% da renda;</li>
              <li>A entrada usaria toda a sua reserva de emergência;</li>
              <li>Há chance real de mudar de cidade nos próximos anos;</li>
              <li>A renda é instável ou depende de comissões;</li>
              <li>Você escolhe o imóvel pela parcela, não pelo preço total.</li>
            </ul>
          </div>
        </div>
        <p>O <strong>FGTS</strong> merece destaque: o saldo rende menos que boa parte da renda fixa e só pode ser sacado em situações específicas, como a compra da casa própria. Usá-lo para reduzir uma dívida de 12% ao ano costuma ser uma das melhores aplicações possíveis desse dinheiro. Já o <strong>Minha Casa, Minha Vida</strong>, operado principalmente pela Caixa, oferece taxas bem abaixo do mercado para faixas de renda definidas pelo governo, o que muda completamente a conta a favor da compra.</p>

        <h2>Estratégias para quem já decidiu financiar</h2>
        <ul>
          <li><strong>Prefira o SAC</strong> se a parcela inicial couber no orçamento: economiza juros e reduz o saldo mais rápido.</li>
          <li><strong>Amortize com prazo menor</strong>: ao fazer pagamentos extras, escolher reduzir o prazo economiza mais juros do que reduzir a parcela.</li>
          <li><strong>Faça portabilidade</strong>: se outro banco oferecer CET menor, você pode transferir a dívida, direito garantido pela regulação do Banco Central.</li>
          <li><strong>Negocie seguros</strong>: compare o custo dos seguros obrigatórios, que pesam bastante ao longo de décadas.</li>
          <li><strong>Mantenha uma reserva</strong>: de três a seis meses de parcela mais despesas, em aplicação líquida como o Tesouro Selic.</li>
        </ul>

        <h2>Estratégias para quem decidiu alugar e investir</h2>
        <ul>
          <li><strong>Automatize o aporte</strong>: programe a aplicação para o dia do salário, antes de qualquer gasto.</li>
          <li><strong>Separe objetivos</strong>: reserva em liquidez diária; o restante em títulos de longo prazo, como Tesouro IPCA+, que protegem contra a inflação.</li>
          <li><strong>Lembre do reajuste</strong>: o aluguel sobe pelo índice do contrato (IGP-M, IPCA ou outro). Reserve parte da carteira para isso.</li>
          <li><strong>Defina um gatilho</strong>: se mais tarde quiser comprar à vista ou com entrada grande, você terá muito mais poder de negociação.</li>
        </ul>

        <h2>Checklist antes de decidir</h2>
        <ol>
          <li>Calcule a relação aluguel/preço do imóvel que você quer (aluguel mensal ÷ preço);</li>
          <li>Peça simulações em pelo menos três bancos e compare o CET;</li>
          <li>Some ITBI, cartório e mudança ao valor da entrada;</li>
          <li>Verifique se a parcela cabe em 30% da renda com folga;</li>
          <li>Confirme se você investiria de fato a diferença todos os meses;</li>
          <li>Pense em quantos anos pretende ficar na mesma cidade.</li>
        </ol>

        <h2>Erros comuns</h2>
        <p>O erro mais frequente é comparar o aluguel com a parcela inteira, como se a amortização também fosse custo. Ela não é: é patrimônio. O contrário também acontece: simulações de quem vende investimento muitas vezes esquecem que o aluguel sobe, enquanto a parcela da Price fica fixa. Outro deslize é assumir que a Selic de hoje vai durar 30 anos. Juros de 13,75% ao ano são altos para padrões históricos, e o próprio Relatório Focus do Banco Central projeta queda gradual.</p>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Perguntas frequentes</h2>
        <div className="not-prose grid gap-4 my-6">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-card/60 p-5">
              <p className="font-bold text-invest mb-2">{f.q}</p>
              <p className="text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-sm text-muted-foreground flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-invest shrink-0 mt-0.5" /><span><strong>Aviso:</strong> conteúdo educativo, não recomendação individual. Taxas, regras do FGTS e programas habitacionais podem mudar; confirme as condições com o banco e, se possível, com um planejador financeiro.</span></div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a melhor casa é a que não quebra o seu orçamento">
        <p>Quando fiz essas contas, esperava uma vitória clara do aluguel com juros tão altos. O que apareceu foi um empate técnico. Isso me convenceu de que a pergunta certa não é "comprar ou alugar", e sim "qual caminho eu consigo sustentar por 30 anos sem desistir".</p>
        <p className="mt-2">Se você tem FGTS, renda estável e quer criar raízes, financiar em SAC e amortizar sempre que puder é uma estratégia sólida. Se você valoriza mobilidade e tem disciplina de investidor, alugar e investir a diferença pode render mais. O único caminho claramente ruim é comprar com a reserva de emergência zerada e uma parcela que tira o sono.</p>
      </EditorialTake>
      <ArticleSources category="invest" sources={[
        { title: "Comunicados do Copom — taxa Selic", url: "https://www.bcb.gov.br/controleinflacao/comunicadoscopom", publisher: "Banco Central do Brasil", accessedAt: "Outubro 2026" },
        { title: "Custo Efetivo Total (CET) e portabilidade de crédito", url: "https://www.bcb.gov.br/cidadaniafinanceira", publisher: "Banco Central do Brasil", accessedAt: "Outubro 2026" },
        { title: "Financiamento habitacional e simulador", url: "https://www.caixa.gov.br/voce/habitacao/Paginas/default.aspx", publisher: "Caixa Econômica Federal", accessedAt: "Outubro 2026" },
        { title: "Índice FipeZap de preços e aluguel residencial", url: "https://www.fipe.org.br/pt-br/indices/fipezap/", publisher: "Fipe", accessedAt: "Outubro 2026" },
        { title: "Tesouro Selic e Tesouro IPCA+", url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro.htm", publisher: "Tesouro Nacional", accessedAt: "Outubro 2026" },
        { title: "Lei 9.514/1997 — alienação fiduciária de imóveis", url: "https://www.planalto.gov.br/ccivil_03/leis/l9514.htm", publisher: "Planalto", accessedAt: "Outubro 2026" },
        { title: "Uso do FGTS na moradia própria", url: "https://www.fgts.gov.br/Pages/sou-trabalhador/moradia-propria.aspx", publisher: "FGTS", accessedAt: "Outubro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default FinanciarOuAlugar2026;
