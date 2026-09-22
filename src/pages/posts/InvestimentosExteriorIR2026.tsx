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
import { AdInArticle, AdLeaderboard, AdRectangle } from "@/components/AdSense";
import { AlertTriangle, Calendar, CheckCircle2, Clock, FileText, Globe2, HelpCircle, Landmark, ReceiptText, Scale, User } from "lucide-react";
import heroImg from "@/assets/investimentos-exterior-imposto-renda-2026.webp";

const SLUG = "investimentos-exterior-imposto-renda-2026";
const TITLE = "Investimentos no Exterior em 2026: Imposto de Renda e Como Declarar";

const ATIVOS = [
  ["Ações e ETFs estrangeiros", "Ganho na venda, dividendos e variação cambial integram a apuração conforme a natureza do rendimento."],
  ["Bonds e títulos", "Juros, cupons, desconto e ganho na liquidação podem compor rendimentos de aplicações financeiras."],
  ["Contas remuneradas", "A remuneração é rendimento; o simples depósito sem remuneração tem tratamento diferente."],
  ["Fundos no exterior", "Resgates, amortizações e distribuições exigem identificação do rendimento e do imposto eventualmente pago fora."],
  ["Criptoativos no exterior", "A localização e o enquadramento dependem de custódia, intermediário e características do ativo."],
];

const InvestimentosExteriorIR2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Exterior · IRPF · Tributação</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">Investimentos no Exterior em 2026: Como Declarar Ações, ETFs, Dividendos e Ganhos no Imposto de Renda</h1>
        <p className="lead text-xl text-muted-foreground mb-4">A Lei nº 14.754/2023 mudou a tributação de aplicações financeiras fora do Brasil. Entenda a alíquota anual de 15%, a variação cambial, o imposto pago no exterior, o fim da antiga isenção de R$ 35 mil para essas aplicações e como organizar a declaração sem improviso.</p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" loading="eager" decoding="async" width={1536} height={864} src={heroImg} alt="Investidor organiza documentos tributários diante de mapa de investimentos internacionais" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold flex items-center gap-2"><Scale className="h-5 w-5 text-invest" />Regra central desde 2024</h2>
          <p className="mt-3 text-sm text-muted-foreground">Rendimentos de aplicações financeiras no exterior auferidos por pessoa física residente no Brasil são apurados na declaração anual e tributados, em regra, à alíquota de <strong className="text-foreground">15%</strong>, sem dedução da base. O imposto estrangeiro pode ser compensado quando os requisitos legais forem atendidos.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><Globe2 className="h-7 w-7 text-invest" />Por que investir fora não elimina a obrigação no Brasil</h2>
        <p>Abrir conta em uma corretora estrangeira, comprar um ETF americano ou manter dólares remunerados é legal para residentes brasileiros. O erro é imaginar que o investimento fica fora do alcance da declaração brasileira. Quem mantém residência fiscal no Brasil declara rendimentos e patrimônio mundial, observando as regras aplicáveis a cada tipo de ativo.</p>
        <p>A internacionalização oferece acesso a empresas, moedas e mercados que não existem na B3, mas adiciona camadas de controle. O investidor precisa registrar remessas, câmbio, compras, vendas, dividendos, juros, taxas e tributos retidos no país de origem. Um extrato anual da corretora ajuda, porém nem sempre converte os valores ou classifica o rendimento da forma exigida no Brasil.</p>
        <p>Desde 1º de janeiro de 2024, a Lei nº 14.754 criou uma sistemática anual para aplicações financeiras no exterior. Rendimentos realizados ao longo do ano são levados à declaração e submetidos à alíquota de 15%. A Receita passou a oferecer campos específicos no Meu Imposto de Renda, vinculando eventos de rendimento aos bens correspondentes.</p>
        <p>“Rendimento realizado” é diferente de valorização apenas na tela. Uma ação que subiu, mas não foi vendida, normalmente continua declarada pelo custo de aquisição, sem imposto brasileiro apenas pela oscilação. Quando há venda, resgate, amortização, vencimento ou liquidação, calcula-se o resultado segundo as regras. Dividendos e juros recebidos também são eventos efetivos.</p>

        <h2 className="flex items-center gap-3"><Landmark className="h-7 w-7 text-invest" />Quais ativos entram na análise</h2>
        <div className="not-prose my-8 grid gap-3">
          {ATIVOS.map(([nome, explicacao]) => <div key={nome} className="p-4 rounded-xl border border-invest/30 bg-invest/5"><h3 className="font-bold text-invest">{nome}</h3><p className="text-sm text-muted-foreground mt-1">{explicacao}</p></div>)}
        </div>
        <p>A lei usa uma definição ampla de aplicação financeira: depósitos bancários remunerados, certificados, cotas de fundos, títulos de renda fixa e variável, derivativos e outros instrumentos. A classificação de criptoativos depende de elementos como custódia e localização. Participações em empresas controladas e trusts possuem capítulos próprios e não devem ser tratados como uma simples carteira de ações.</p>
        <p>Uma conta corrente sem remuneração merece atenção separada. O saldo transferido não é renda por si só. Já juros pagos sobre esse saldo são rendimento. Também é necessário distinguir remessa para compra de ativo de consumo no exterior: câmbio para viagem, manutenção de dependente, aquisição de ações e compra de imóvel não produzem os mesmos registros fiscais.</p>

        <AdInArticle />

        <h2 className="flex items-center gap-3"><ReceiptText className="h-7 w-7 text-invest" />Antes e depois da Lei nº 14.754/2023</h2>
        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[700px] text-sm"><thead className="bg-muted/50"><tr><th className="p-4 text-left">Tema</th><th className="p-4 text-left">Modelo anterior</th><th className="p-4 text-left">Regra atual para aplicações</th></tr></thead><tbody>
            {[
              ["Momento de apuração", "Regras mensais variavam conforme a natureza", "Apuração anual na declaração"],
              ["Alíquota brasileira", "Podia seguir ganho de capital ou tabela progressiva", "15% sobre a parcela anual dos rendimentos"],
              ["Isenção de pequeno valor", "Havia uso da regra de alienações até R$ 35 mil em determinadas situações", "Receita afastou a isenção para aplicações financeiras desde 2024"],
              ["Prejuízos", "Tratamentos separados", "Compensação entre aplicações financeiras no exterior, dentro das condições legais"],
              ["Imposto estrangeiro", "Compensação dependia da regra aplicável", "Pode ser compensado, limitado ao imposto brasileiro e sujeito aos requisitos"],
            ].map((row) => <tr key={row[0]} className="border-t border-border/50">{row.map((cell, index) => <td key={cell} className={`p-4 align-top ${index === 0 ? "font-bold text-invest" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}
          </tbody></table>
        </div>
        <p>A Solução de Consulta Cosit nº 130, de agosto de 2026, confirmou o entendimento da Receita de que a antiga isenção para alienações de pequeno valor, conhecida pelo limite mensal de R$ 35 mil, não se aplica a rendimentos de aplicações financeiras no exterior submetidos à Lei nº 14.754. Portanto, vender menos de R$ 35 mil não basta para tornar o ganho isento.</p>
        <p>Esse ponto precisa ser escrito com precisão: o limite dizia respeito ao valor de alienações, não ao lucro, e a nova interpretação alcança aplicações financeiras. Não se deve generalizar automaticamente para todo bem localizado fora do país. Imóveis, bens pessoais, moeda em espécie e participações com regras específicas exigem análise própria.</p>

        <h2 className="flex items-center gap-3"><Scale className="h-7 w-7 text-invest" />Como calcular ganho, dividendos e variação cambial</h2>
        <p>Considere um exemplo fictício. Uma pessoa remete R$ 10 mil quando o dólar está a R$ 5 e recebe US$ 2 mil. Ela compra um ETF por US$ 2 mil. Meses depois, vende por US$ 2,2 mil quando o dólar está a R$ 5,20, recebendo R$ 11.440 na conversão hipotética. O cálculo brasileiro não deve olhar apenas o lucro de US$ 200: a variação cambial também participa do rendimento da aplicação conforme a sistemática legal.</p>
        <p>Nesse exemplo simplificado, sem taxas, o custo foi R$ 10 mil e o valor de alienação R$ 11.440, gerando rendimento de R$ 1.440. Aplicada a alíquota de 15%, o imposto seria R$ 216 antes de eventual compensação de tributo pago fora. Na vida real, datas, cotações oficiais aplicáveis, corretagem, eventos societários e compras em lotes diferentes podem mudar a apuração.</p>
        <p>Agora imagine US$ 100 em dividendos, com retenção de US$ 30 no país de origem. O valor bruto e o imposto estrangeiro precisam ser documentados. A compensação no Brasil não é reembolso automático: depende de acordo, tratado ou reciprocidade e fica limitada ao imposto brasileiro incidente sobre aquele rendimento. Excesso retido no exterior não gera crédito irrestrito contra outros tributos.</p>
        <p>Prejuízos em aplicações financeiras no exterior podem ser compensados com rendimentos de outras aplicações financeiras externas no mesmo período e, quando permitido, transportados para anos posteriores. Para isso, precisam constar corretamente na declaração. Um prejuízo omitido não pode ser reconstruído com segurança anos depois sem documentação.</p>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><FileText className="h-7 w-7 text-invest" />Como declarar: roteiro de organização</h2>
        <ol>
          <li><strong>Liste cada ativo:</strong> instituição, país, ticker ou identificação, quantidade e custo histórico.</li>
          <li><strong>Concilie as remessas:</strong> guarde contratos de câmbio e comprovantes de entrada e saída.</li>
          <li><strong>Registre eventos:</strong> compras, vendas, dividendos, juros, amortizações, desdobramentos e taxas.</li>
          <li><strong>Separe o imposto estrangeiro:</strong> informe bruto, retenção, país e documento comprobatório.</li>
          <li><strong>Vincule rendimentos ao patrimônio:</strong> use os campos de aplicações financeiras da Lei nº 14.754 no programa vigente.</li>
          <li><strong>Revise a obrigatoriedade:</strong> rendimento no exterior pode obrigar a entrega da declaração.</li>
        </ol>
        <p>Na ficha patrimonial, bens não são atualizados livremente pelo preço de mercado. Em geral, registra-se o custo de aquisição, com descrição suficiente para identificar conta e ativo. A conversão deve seguir a orientação da Receita para cada operação e data. Usar a cotação de 31 de dezembro em todas as compras é um atalho que pode distorcer custo e ganho.</p>
        <p>A declaração pré-preenchida não elimina a revisão. Corretoras estrangeiras não necessariamente enviam à Receita brasileira as mesmas informações de uma instituição nacional, embora acordos de intercâmbio aumentem a transparência. Mesmo quando dados aparecem automaticamente, o contribuinte continua responsável por conferir natureza, custo e titularidade.</p>
        <p>Além do IRPF, patrimônios elevados no exterior podem exigir a declaração de Capitais Brasileiros no Exterior ao Banco Central. O limite, a periodicidade e o câmbio de referência devem ser confirmados no ano correspondente. Essa obrigação é distinta do Imposto de Renda: entregar uma não substitui a outra.</p>

        <h2 className="flex items-center gap-3"><CheckCircle2 className="h-7 w-7 text-invest" />Documentos que devem ser guardados</h2>
        <ul>
          <li>extratos mensais e anuais da corretora ou banco;</li>
          <li>notas de negociação e confirmações de ordens;</li>
          <li>comprovantes das remessas e contratos de câmbio;</li>
          <li>informes de dividendos, juros e retenções estrangeiras;</li>
          <li>memória de cálculo em reais, com data e câmbio utilizados;</li>
          <li>documentos de reorganizações, splits, grupamentos e transferências;</li>
          <li>declarações anteriores e recibos de entrega.</li>
        </ul>
        <p>Uma planilha por ativo resolve grande parte do problema. Cada linha pode conter data, evento, quantidade, valor em moeda estrangeira, taxa, câmbio aplicável, valor em reais e imposto retido. O controle deve começar na primeira remessa, não na semana da declaração. Reconstituir operações depois é mais caro e aumenta o risco de erro.</p>

        <h2 className="flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-invest" />Erros que podem levar à malha fina</h2>
        <p>Os erros mais frequentes são declarar somente o saldo da conta, esquecer dividendos reinvestidos, tratar todo saque como remessa de volta, usar câmbio aleatório, omitir retenção estrangeira, atualizar ativos pelo valor de mercado e aplicar indevidamente a antiga isenção de R$ 35 mil. Outro problema é confundir ETF estrangeiro com BDR ou ETF negociado na B3, que seguem ambientes e fichas diferentes.</p>
        <p>Transferir ativos entre duas corretoras próprias não é venda, mas precisa ser documentado para preservar o custo. Já converter um ativo em outro pode representar alienação, mesmo quando nenhum real volta ao Brasil. Operações automáticas de reinvestimento também não tornam dividendos invisíveis: receber e reaplicar são eventos distintos.</p>
        <p>Quem possui offshore, trust, sociedade controlada, herança internacional, dupla residência fiscal ou grande volume de operações deve procurar profissional com experiência internacional. Nesses casos, a escolha entre transparência fiscal e tributação da controlada, tratados e sucessão pode ter efeito muito maior que o preenchimento de uma ficha.</p>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Perguntas frequentes</h2>
        <p><strong>Investimento no exterior paga 15%?</strong> Em regra, os rendimentos de aplicações financeiras no exterior abrangidos pela Lei nº 14.754 são tributados anualmente a 15%.</p>
        <p><strong>A isenção de R$ 35 mil ainda vale para ações no exterior?</strong> A Receita confirmou em 2026 que ela não se aplica aos rendimentos de aplicações financeiras no exterior sob a sistemática vigente desde 2024.</p>
        <p><strong>Preciso pagar mensalmente?</strong> A sistemática atual concentra a apuração dessas aplicações na declaração anual, diferente do antigo controle mensal usado em várias situações.</p>
        <p><strong>Dividendos estrangeiros entram na conta?</strong> Sim. Devem ser declarados pelo valor bruto, com registro do imposto estrangeiro quando houver.</p>
        <p><strong>Posso compensar imposto pago nos Estados Unidos?</strong> Pode haver compensação, sujeita à reciprocidade ou acordo e limitada ao imposto brasileiro correspondente. Guarde comprovantes.</p>
        <p><strong>Valorização sem venda gera imposto?</strong> A mera alta de preço normalmente não gera realização. Venda, resgate, liquidação, juros e dividendos são eventos relevantes.</p>
        <p><strong>Preciso declarar mesmo sem vender?</strong> A posse do ativo pode precisar constar em Bens e Direitos, e os critérios de obrigatoriedade devem ser avaliados.</p>
        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-sm text-muted-foreground flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-invest shrink-0 mt-0.5" /><span><strong>Aviso tributário:</strong> este guia é educativo e não substitui análise de contador ou advogado. Regras, limites e telas da declaração podem mudar; confirme a orientação oficial do exercício correspondente.</span></div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: diversificar fora exige organização dentro de casa">
        <p>Investir no exterior ficou simples no aplicativo, mas a simplicidade termina quando os registros não acompanham a carteira. O imposto de 15% é apenas uma parte do trabalho; custo em reais, câmbio, dividendos e retenções precisam conversar entre si.</p>
        <p className="mt-2">Minha recomendação é criar o controle antes da primeira compra. Se a estratégia depende de lembrar operações meses depois, ela já começou errada. Diversificação internacional é valiosa, mas deve reduzir risco financeiro, não criar risco fiscal desnecessário.</p>
      </EditorialTake>
      <ArticleSources category="invest" sources={[
        { title: "Lei nº 14.754, de 12 de dezembro de 2023", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14754.htm", publisher: "Presidência da República", accessedAt: "Setembro 2026" },
        { title: "Perguntas e respostas sobre tributação de rendimentos no exterior", url: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2024/abril/receita-federal-e-secretaria-da-reforma-tributaria-lancam-atualizacao-do-perguntas-e-respostas-sobre-tributacao-de-rendimentos-no-exterior/perguntas-e-respostas-offshores-lei-14-754-e-in-rfb-2-180.pdf", publisher: "Receita Federal e Ministério da Fazenda", accessedAt: "Setembro 2026" },
        { title: "Perguntas e Respostas do IRPF 2026", url: "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/dirpf/p-r-irpf-2026-v1-00-2026-04-23.pdf", publisher: "Receita Federal", accessedAt: "Setembro 2026" },
        { title: "Aplicações Financeiras da Lei nº 14.754/2023", url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/preenchimento/manual-mir/rendimentos/outros-rendimentos", publisher: "Receita Federal", accessedAt: "Setembro 2026" },
        { title: "Situações no exterior no Meu Imposto de Renda", url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/preenchimento/manual-mir/situacoes-especificas", publisher: "Receita Federal", accessedAt: "Setembro 2026" },
        { title: "Quem deve declarar o Imposto de Renda", url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/quem/quem", publisher: "Receita Federal", accessedAt: "Setembro 2026" },
        { title: "IRPF: Receita confirma fim da isenção de R$ 35 mil para aplicações no exterior", url: "https://www.contabeis.com.br/noticias/79114/irpf-receita-confirma-fim-da-isencao-de-r-35-mil-para-aplicacoes-no-exterior/", publisher: "Portal Contábeis", accessedAt: "Setembro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default InvestimentosExteriorIR2026;