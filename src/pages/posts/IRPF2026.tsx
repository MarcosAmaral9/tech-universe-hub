import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, Calendar, User, ChevronRight, Zap, AlertTriangle, Timer, TrendingUp, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import irpfImg from "@/assets/irpf-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "irpf-2026-guia-declarar-pagar-menos";
const TITLE = "IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto Legalmente";

const IRPF2026 = () => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const [rendaTributavel, setRendaTributavel] = useState(80000);
  const [despesasSaude, setDespesasSaude] = useState(5000);
  const [despesasEducacao, setDespesasEducacao] = useState(3500);
  const [dependentes, setDependentes] = useState(1);
  const [pgbl, setPgbl] = useState(0);

  const getCountdown = () => {
    const deadline = new Date("2026-05-29T23:59:59");
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const countdown = getCountdown();

  const calcularModelos = () => {
    const deducaoSimplificada = Math.min(rendaTributavel * 0.2, 16754.34);
    const baseSimplificado = rendaTributavel - deducaoSimplificada;

    const deducaoDependentes = dependentes * 2275.08;
    const deducaoEducacaoLimitada = Math.min(despesasEducacao, 3561.50 * (1 + dependentes));
    const deducaoPgblLimitada = Math.min(pgbl, rendaTributavel * 0.12);
    const totalDeducoesCompleto = despesasSaude + deducaoEducacaoLimitada + deducaoDependentes + deducaoPgblLimitada;
    const baseCompleto = rendaTributavel - totalDeducoesCompleto;

    const calcularIR = (base: number) => {
      if (base <= 26963.20) return 0;
      if (base <= 33919.80) return (base - 26963.20) * 0.075;
      if (base <= 45012.60) return 521.74 + (base - 33919.80) * 0.15;
      if (base <= 55976.16) return 2183.18 + (base - 45012.60) * 0.225;
      return 4649.49 + (base - 55976.16) * 0.275;
    };

    return {
      irSimplificado: Math.max(0, calcularIR(baseSimplificado)),
      irCompleto: Math.max(0, calcularIR(baseCompleto)),
      deducaoSimplificada,
      totalDeducoesCompleto,
      melhor: calcularIR(baseCompleto) < calcularIR(baseSimplificado) ? "completo" : "simplificado",
    };
  };

  const resultado = calcularModelos();
  const formatCurrency = (v: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  const toggleDoc = (doc: string) => setCheckedDocs(prev => ({ ...prev, [doc]: !prev[doc] }));

  const documentos = [
    "Informe de Rendimentos (empresa/empregador)",
    "Informe de Rendimentos bancários (CDB, poupança, etc.)",
    "Informe de Rendimentos da corretora (ações, FIIs, cripto)",
    "Comprovantes de despesas médicas (notas fiscais)",
    "Comprovantes de despesas com educação",
    "Recibos de aluguel pago ou recebido",
    "Documentos de compra/venda de imóveis",
    "Comprovante de contribuição ao PGBL",
    "Comprovante de pensão alimentícia judicial",
    "CPF dos dependentes",
  ];

  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;

  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">IRPF 2026</span>
      </nav>

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IRPF 2026: Guia Completo Para Declarar e Pagar Menos Imposto Legalmente
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Tudo que você precisa saber para declarar o Imposto de Renda 2026 corretamente, evitar a malha fina e usar deduções legais — saúde sem limite, PGBL, dependentes e educação — para pagar menos IR dentro da lei.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 19 Fev 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <img fetchpriority="high" src={irpfImg} alt="IRPF 2026 Imposto de Renda" className="w-full rounded-2xl mb-8 aspect-video object-cover" loading="eager" />

      <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-8 text-center">
        <h3 className="flex items-center justify-center gap-2 font-bold text-destructive mb-4">
          <Timer className="h-5 w-5" /> Prazo Final de Entrega do IRPF 2026
        </h3>
        <div className="flex justify-center gap-4">
          {[
            { label: "Dias", value: countdown.days },
            { label: "Horas", value: countdown.hours },
            { label: "Minutos", value: countdown.minutes },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-4 min-w-[80px]">
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">Prazo final: 29 de maio de 2026 | Multa por atraso: R$ 165,74 mínimo</p>
      </div>

      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-muted-foreground leading-relaxed">
          O Imposto de Renda assombra muita gente, mas a verdade é que a maioria dos problemas com a Receita Federal acontece por <strong>desconhecimento, não má-fé</strong>. Em 2026, com o IRPF cada vez mais cruzando dados com bancos, corretoras, planos de saúde e até plataformas de delivery via e-Financeira, declarar corretamente virou questão de planejamento financeiro tão importante quanto escolher onde investir.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Mas existe um lado positivo significativo: a legislação brasileira oferece formas <strong>100% legais de reduzir o imposto devido</strong>, e a maioria das pessoas simplesmente não usa essas ferramentas por desconhecimento. Despesas médicas sem nota fiscal arquivada, dependentes não declarados, PGBL não considerado no planejamento — tudo isso representa dinheiro que poderia voltar para o seu bolso via restituição, ou que poderia ter reduzido o imposto pago durante o ano.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A Lei 14.848/2024 trouxe mudanças importantes na tabela de isenção, ampliando a faixa de quem não paga imposto. Mas paralelamente, a Receita Federal intensificou o cruzamento eletrônico de informações: bancos, corretoras e até casas de criptomoedas são obrigados a reportar movimentações via sistema e-Financeira. Isso significa que a declaração pré-preenchida, oferecida desde 2023, está cada vez mais completa — e qualquer divergência entre o que você declara e o que terceiros informaram é detectada automaticamente, gerando a temida malha fina.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Quem é Obrigado a Declarar em 2026?</h2>
        <p className="text-muted-foreground mb-4">
          A obrigatoriedade de declarar o IRPF segue critérios objetivos definidos anualmente pela Receita Federal. Mesmo que você não se enquadre em nenhum desses critérios, declarar pode ser vantajoso se você teve IR retido na fonte — a declaração é o único caminho para reaver esse valor via restituição:
        </p>
        <div className="space-y-3 mb-4">
          {[
            "Recebeu rendimentos tributáveis acima de R$ 30.639,90 no ano",
            "Recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de R$ 200.000",
            "Teve ganho de capital na venda de bens ou direitos sujeito à incidência do imposto",
            "Realizou operações em bolsas de valores, de mercadorias, de futuros e similares",
            "Teve a posse ou propriedade de bens e direitos, inclusive terra nua, de valor total superior a R$ 800.000 em 31 de dezembro",
            "Passou a ser residente no Brasil em qualquer mês do ano e nessa condição se encontrava em 31 de dezembro",
            "Recebeu mais de R$ 142.798,50 em atividade rural",
            "Optou pela isenção de IR sobre ganho de capital na venda de imóveis residenciais seguida de aquisição de outro em até 180 dias",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-[hsl(var(--invest-color))]">▶</span> {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <AdLeaderboard className="my-8" />

        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">As Deduções Que Mais Gente Esquece</h2>
        <p className="text-muted-foreground mb-4">
          O modelo completo de declaração permite abater diversas despesas da base de cálculo do imposto. O problema é que a maioria dos contribuintes nem sabe que essas deduções existem, ou não guarda os documentos necessários ao longo do ano para comprová-las quando chega março:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Dependentes", desc: "Cada dependente reduz a base de cálculo em até R$ 2.275,08 por ano. Incluem-se filhos até 21 anos (ou 24 se estudantes universitários), cônjuge ou companheiro sem renda própria significativa, e pais ou avós que recebam até o limite de isenção e morem com o contribuinte.", icon: "👨‍👩‍👧" },
            { title: "Saúde (SEM LIMITE)", desc: "Consultas médicas, planos de saúde, dentistas, psicólogos, fisioterapeutas, exames, internações e até aparelhos ortopédicos são dedutíveis SEM LIMITE de valor — desde que com nota fiscal ou recibo válido em nome do declarante ou dependente.", icon: "🏥" },
            { title: "Educação", desc: "Limite de R$ 3.561,50 por pessoa ao ano. Cobre ensino fundamental, médio, técnico, graduação, pós-graduação e mestrado/doutorado. Cursos de idiomas, cursinhos preparatórios e cursos livres NÃO entram nessa categoria.", icon: "📚" },
            { title: "PGBL", desc: "Contribuições ao Plano Gerador de Benefício Livre podem ser deduzidas até o limite de 12% da renda bruta tributável anual — desde que o contribuinte também contribua ao INSS ou regime próprio. Pode gerar restituição muito significativa para quem está na faixa de 27,5%.", icon: "💰" },
            { title: "Pensão Alimentícia", desc: "Valores pagos com base em decisão judicial, acordo homologado judicialmente ou escritura pública são integralmente dedutíveis, sem limite de valor — desde que devidamente comprovados com os documentos da decisão.", icon: "⚖️" },
            { title: "Previdência Oficial (INSS)", desc: "As contribuições previdenciárias oficiais — INSS de empregados, contribuintes individuais e empregadores domésticos — são automaticamente dedutíveis e geralmente já vêm pré-preenchidas no informe de rendimentos.", icon: "🏛️" },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <p className="text-2xl mb-2">{item.icon}</p>
              <h3 className="font-bold mb-1 text-[hsl(45,100%,50%)]">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdInArticle className="my-8" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Checklist de Documentos Necessários</h2>
        <p className="text-muted-foreground mb-4">
          Reunir todos os documentos antes de começar a declaração economiza horas de trabalho e reduz o risco de erros por informação incompleta. Marque cada item conforme for organizando:
        </p>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Progresso: {checkedCount}/{documentos.length} documentos</p>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-[hsl(var(--invest-color))] transition-all" style={{ width: `${(checkedCount / documentos.length) * 100}%` }} />
            </div>
          </div>
          <div className="space-y-3">
            {documentos.map((doc, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" checked={!!checkedDocs[doc]} onChange={() => toggleDoc(doc)} className="mt-1 accent-[hsl(var(--invest-color))]" />
                <span className={`text-sm transition-all ${checkedDocs[doc] ? 'text-muted-foreground line-through' : 'text-foreground'}`}>{doc}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Calculadora: Simplificado ou Completo?</h2>
        <p className="text-muted-foreground mb-4">
          A escolha entre o modelo simplificado (desconto automático de 20% da renda, limitado a R$ 16.754,34) e o modelo completo (soma de todas as deduções legais comprovadas) é uma das decisões mais importantes da declaração. A regra geral é: quem tem poucas despesas dedutíveis sai melhor no simplificado; quem tem saúde, educação, dependentes e PGBL relevantes geralmente sai melhor no completo. Ajuste os valores abaixo para ver qual modelo é mais vantajoso no seu caso:
        </p>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium block mb-1">Renda Tributável Anual</label>
              <input type="number" value={rendaTributavel} onChange={e => setRendaTributavel(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Despesas com Saúde (anual)</label>
              <input type="number" value={despesasSaude} onChange={e => setDespesasSaude(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Despesas com Educação (anual)</label>
              <input type="number" value={despesasEducacao} onChange={e => setDespesasEducacao(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Número de Dependentes</label>
              <input type="number" value={dependentes} onChange={e => setDependentes(Number(e.target.value))} min={0} max={10} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium block mb-1">Contribuição PGBL (anual)</label>
              <input type="number" value={pgbl} onChange={e => setPgbl(Number(e.target.value))} className="w-full bg-muted rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className={`rounded-xl p-5 border-2 ${resultado.melhor === 'simplificado' ? 'border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10' : 'border-border bg-muted/50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Simplificado</h3>
                {resultado.melhor === 'simplificado' && <span className="text-xs bg-[hsl(var(--invest-color))] text-white px-2 py-0.5 rounded-full">Recomendado</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-1">Dedução: {formatCurrency(resultado.deducaoSimplificada)}</p>
              <p className="text-2xl font-bold">IR: {formatCurrency(resultado.irSimplificado)}</p>
            </div>
            <div className={`rounded-xl p-5 border-2 ${resultado.melhor === 'completo' ? 'border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10' : 'border-border bg-muted/50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Completo</h3>
                {resultado.melhor === 'completo' && <span className="text-xs bg-[hsl(var(--invest-color))] text-white px-2 py-0.5 rounded-full">Recomendado</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-1">Deduções: {formatCurrency(resultado.totalDeducoesCompleto)}</p>
              <p className="text-2xl font-bold">IR: {formatCurrency(resultado.irCompleto)}</p>
            </div>
          </div>
          {resultado.melhor === 'completo' && (
            <p className="text-sm text-[hsl(var(--invest-color))] text-center">
              💡 Você economiza {formatCurrency(resultado.irSimplificado - resultado.irCompleto)} usando o modelo completo!
            </p>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Um detalhe importante: a escolha entre simplificado e completo não é definitiva durante o preenchimento — o próprio programa da Receita recalcula em tempo real conforme você insere as despesas, mostrando qual modelo resulta em menos imposto a pagar (ou maior restituição). A simulação acima é uma aproximação para você planejar com antecedência quais documentos vale a pena reunir.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Investimentos e IR: O Que Declarar</h2>
        <p className="text-muted-foreground mb-4">
          Para o investidor, a declaração de IR tem uma camada adicional de complexidade: cada classe de ativo tem regras próprias de tributação e de declaração. Errar aqui é uma das causas mais comuns de malha fina entre quem investe na bolsa:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[hsl(var(--invest-color))]/20">
                <th className="text-left p-3">Tipo</th>
                <th className="text-left p-3">Tributação</th>
                <th className="text-left p-3">Observação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-medium">Renda Fixa (CDB, Tesouro, LCI/LCA)</td><td className="p-3">IR retido na fonte</td><td className="p-3 text-muted-foreground">Apenas informar valores do informe da instituição</td></tr>
              <tr><td className="p-3 font-medium">Ações (operações comuns)</td><td className="p-3">15% sobre lucro</td><td className="p-3 text-muted-foreground">Vendas totais até R$ 20k/mês são isentas de IR</td></tr>
              <tr><td className="p-3 font-medium">Ações (day trade)</td><td className="p-3">20% sobre lucro</td><td className="p-3 text-muted-foreground">DARF mensal obrigatório, sem isenção</td></tr>
              <tr><td className="p-3 font-medium">FIIs (dividendos mensais)</td><td className="p-3 text-green-500">Isentos para PF</td><td className="p-3 text-muted-foreground">Ganho de capital na venda das cotas: 20%</td></tr>
              <tr><td className="p-3 font-medium">ETFs internacionais (IVVB11)</td><td className="p-3">15% sobre lucro</td><td className="p-3 text-muted-foreground">Sem isenção de R$ 20k/mês</td></tr>
              <tr><td className="p-3 font-medium">Criptomoedas</td><td className="p-3">15–22,5% se vendas &gt; R$ 35k/mês</td><td className="p-3 text-muted-foreground">Declarar como "outros bens" mesmo sem venda</td></tr>
              <tr><td className="p-3 font-medium">Investimentos no exterior (ETFs/ações)</td><td className="p-3">15% sobre lucro anual</td><td className="p-3 text-muted-foreground">Lei 14.754/2023 — apuração anual obrigatória</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          Um ponto frequentemente negligenciado é a <strong>Lei 14.754/2023</strong>, que mudou a tributação de investimentos no exterior detidos por pessoas físicas residentes no Brasil. Antes, fundos e ETFs internacionais só eram tributados quando resgatados. Agora, há apuração anual obrigatória de 15% sobre o lucro, mesmo sem venda — uma mudança que pegou muitos investidores desavisados em 2024 e continua gerando dúvidas na declaração de 2026.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Como Evitar a Malha Fina</h2>
        <p className="text-muted-foreground mb-4">
          A malha fina é o processo automatizado da Receita Federal que cruza as informações declaradas pelo contribuinte com as informações enviadas por terceiros — empresas, bancos, corretoras, planos de saúde, cartórios. Qualquer divergência gera uma pendência que pode atrasar a restituição por meses ou até anos. As causas mais comuns são:
        </p>
        <div className="space-y-3">
          {[
            "Informações inconsistentes entre o que você declara e o que a empresa, banco ou corretora informou à Receita via e-Financeira ou DIRF",
            "Dedução de despesas com saúde sem nota fiscal válida — a Receita cruza automaticamente com a DMED (Declaração de Serviços Médicos e de Saúde)",
            "Não declarar investimentos em bolsa, fundos ou criptoativos — instituições financeiras e exchanges são obrigadas a informar movimentações à Receita",
            "Valor de imóvel declarado divergente do registro municipal (IPTU) ou do valor da escritura registrada em cartório",
            "Esquecer de declarar rendimento de aluguel recebido, mesmo que o valor tenha sido usado para pagar despesas do próprio imóvel",
            "Dependente declarado por mais de um contribuinte no mesmo ano — sistema cruza CPFs automaticamente",
            "Doações e despesas com previdência privada informadas de forma diferente da declarada pela instituição financeira",
          ].map((item, i) => (
            <div key={i} className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">Prazos Importantes IRPF 2026</h2>
        <p className="text-muted-foreground mb-4">
          Conhecer o calendário oficial ajuda a planejar quando começar a reunir documentos e a evitar a corrida de última hora — período em que erros de digitação e omissões são mais comuns:
        </p>
        <div className="space-y-0 relative ml-4">
          <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-border" />
          {[
            { date: "Março 2026", event: "Abertura do programa IRPF 2026 para preenchimento e envio", icon: "📂" },
            { date: "Março 2026", event: "Receita disponibiliza a declaração pré-preenchida com dados de e-Financeira", icon: "📋" },
            { date: "29 Mai 2026", event: "Prazo final de entrega — multa mínima de R$ 165,74 por atraso", icon: "⏰" },
            { date: "Junho 2026", event: "Primeiro lote de restituição — prioridade para idosos, deficientes e quem usou pré-preenchida + Pix", icon: "💰" },
            { date: "Jul-Dez 2026", event: "Lotes subsequentes de restituição, mensalmente, até dezembro", icon: "📅" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start pb-6 relative">
              <div className="w-7 h-7 rounded-full bg-[hsl(var(--invest-color))]/20 border-2 border-[hsl(var(--invest-color))] flex items-center justify-center text-xs z-10">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold">{item.date}</p>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
          <TrendingUp className="h-6 w-6 shrink-0" />
          Estratégias de Planejamento Tributário Para o Ano Seguinte
        </h2>
        <p className="text-muted-foreground mb-4">
          Declarar bem o IRPF de 2026 é importante, mas o verdadeiro ganho de eficiência tributária vem do planejamento contínuo ao longo do ano. Algumas estratégias simples, aplicadas desde já, podem reduzir significativamente o imposto devido na declaração do próximo ano:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { titulo: "Organize recibos mensalmente", desc: "Crie uma pasta digital (Google Drive, Dropbox) e fotografe cada nota fiscal de saúde no mesmo dia em que recebê-la. Em dezembro, reunir um ano de comprovantes é trabalhoso e propenso a perdas — fazer isso mês a mês elimina o problema completamente." },
            { titulo: "Avalie a contribuição ao PGBL até dezembro", desc: "Quem está na faixa de 27,5% de IR e ainda não usou os 12% de dedução via PGBL pode fazer uma contribuição extra até 31 de dezembro para reduzir a base tributável do ano corrente — uma das poucas decisões de fim de ano com impacto direto no IR." },
            { titulo: "Considere doações dedutíveis ao ECA e ao idoso", desc: "Doações para Fundos da Criança e do Adolescente e Fundos do Idoso podem ser deduzidas até 6% do imposto devido (não da base de cálculo) — uma forma de direcionar parte do imposto que você pagaria de qualquer forma para causas sociais específicas." },
            { titulo: "Mantenha extrato consolidado da corretora atualizado", desc: "Para quem investe em ações, FIIs ou cripto, baixar mensalmente o extrato de operações da corretora evita o acúmulo de 12 meses de dados para conciliar em março — e reduz drasticamente o risco de esquecer alguma operação na declaração." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1 flex items-center gap-2"><Lightbulb className="h-4 w-4 text-[hsl(var(--invest-color))]" />{titulo}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">FAQ: Perguntas Mais Comuns</h2>
        <Accordion type="multiple" className="space-y-2">
          {[
            { q: "Posso declarar despesas com saúde do meu dependente?", a: "Sim, desde que o dependente esteja incluído na sua declaração. As despesas médicas são totalmente dedutíveis, sem limite de valor, desde que comprovadas com nota fiscal ou recibo válido em nome do dependente ou do declarante." },
            { q: "Preciso declarar minha conta de criptomoedas?", a: "Sim. Mesmo que não tenha vendido, criptomoedas devem ser declaradas na ficha 'Bens e Direitos' pelo valor de aquisição, sempre que o total das operações de cada tipo de cripto superar R$ 5.000 ao final do ano." },
            { q: "O que acontece se atrasar a declaração?", a: "Multa mínima de R$ 165,74, podendo chegar a 20% do imposto devido conforme o tempo de atraso. Além disso, seu CPF pode ficar com pendências na Receita, dificultando empréstimos, financiamentos e até a emissão de passaporte." },
            { q: "Gastos com cursinho e inglês são dedutíveis?", a: "Não. Apenas ensino fundamental, médio, técnico, superior e pós-graduação (especialização, mestrado, doutorado) são dedutíveis na categoria de educação. Cursos livres, idiomas e preparatórios para concurso não entram." },
            { q: "Vendi ações com lucro abaixo de R$ 20.000/mês. Preciso pagar IR?", a: "Não. Vendas de ações em operações comuns (não day trade) que totalizem até R$ 20.000 no mês são isentas de IR sobre o ganho de capital. Acima desse valor, incide 15% sobre o lucro do mês inteiro." },
            { q: "MEI precisa declarar como pessoa física?", a: "Sim, se você se enquadrar nos critérios gerais de obrigatoriedade (renda tributável, bens acima de R$ 800 mil etc.). O pró-labore e os lucros distribuídos do MEI devem ser informados na declaração de pessoa física, mesmo que o MEI já pague o DAS mensalmente." },
            { q: "Posso incluir meus pais como dependentes?", a: "Sim, desde que eles sejam economicamente dependentes de você, morem no mesmo domicílio (ou recebam ajuda comprovada) e tenham rendimentos próprios dentro do limite de isenção da tabela do IR." },
            { q: "FIIs pagam IR sobre dividendos?", a: "Não. Dividendos distribuídos mensalmente por Fundos de Investimento Imobiliário são isentos de IR para pessoa física, desde que o fundo tenha no mínimo 50 cotistas e nenhum cotista detenha mais de 10% das cotas. Porém, o ganho de capital obtido na venda das cotas é tributado em 20%, sem isenção de faixa de valor." },
            { q: "Como declarar aluguel recebido?", a: "Aluguel recebido de pessoa física é rendimento tributável sujeito ao carnê-leão mensal, com recolhimento de IR até o último dia útil do mês seguinte ao recebimento, caso o valor supere a faixa de isenção mensal da tabela progressiva. Na declaração anual, o total recebido e o IR já pago via carnê-leão devem ser informados na ficha de Rendimentos Recebidos de Pessoas Físicas." },
            { q: "Qual a diferença entre PGBL e VGBL no IR?", a: "PGBL permite deduzir até 12% da renda bruta tributável anual da base de cálculo do IR, mas no resgate o imposto incide sobre o valor total resgatado (principal + rendimento). VGBL não oferece dedução na contribuição, mas no resgate o IR incide apenas sobre os rendimentos — sendo geralmente mais vantajoso para quem usa a declaração simplificada." },
            { q: "Recebi ações como bonificação ou dividendos em ações. Isso é tributável?", a: "Bonificações em ações (distribuição gratuita de novas ações pela empresa) não são tributadas no momento do recebimento, mas alteram o custo médio de aquisição declarado, impactando o cálculo do ganho de capital em vendas futuras. Dividendos em dinheiro de ações são isentos de IR para PF." },
            { q: "Tenho investimentos no exterior. Como declaro pela nova lei?", a: "Pela Lei 14.754/2023, ativos financeiros no exterior (ações, ETFs, fundos) detidos diretamente por pessoa física residente no Brasil têm apuração anual obrigatória de 15% sobre os rendimentos e ganhos de capital, mesmo sem resgate — diferente da regra anterior que tributava apenas no resgate efetivo." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-bold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-10">
        <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5">
          <p className="flex items-start gap-2 text-sm">
            <Zap className="h-5 w-5 text-[hsl(var(--invest-color))] flex-shrink-0 mt-0.5" />
            <span><strong>Dica Final:</strong> Use o Programa IRPF 2026 da Receita Federal com a declaração pré-preenchida. Ele preenche automaticamente muitos campos com base nas informações enviadas por empresas, bancos e corretoras — reduzindo drasticamente o risco de erro humano. Mas não confie ciegamente: confira cada campo, especialmente bens, dívidas e rendimentos isentos, antes de transmitir.</span>
          </p>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Prazo final do IRPF 2026: 29 de maio — multa mínima de R$ 165,74 por atraso",
              "Despesas com saúde são dedutíveis SEM LIMITE — guarde todas as notas fiscais",
              "PGBL pode reduzir até 12% da base de cálculo — investigue se vale para o seu caso",
              "Compare sempre simplificado vs completo — use a calculadora interativa acima",
              "Investimentos no exterior têm apuração anual obrigatória desde a Lei 14.754/2023",
              "A Receita cruza dados com bancos, corretoras e planos de saúde — declare tudo corretamente",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2"><span className="text-[hsl(var(--invest-color))]">✓</span> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 mb-8">
        {["IRPF 2026", "imposto de renda", "declaração IR", "malha fina", "deduções", "restituição", "PGBL"].map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
        ))}
      </div>

      <BackNavigation category="invest" />

      <EditorialTake category="invest" title="Análise do Marcos: a malha fina de 2026 está mais inteligente — sua declaração precisa estar também">
        <p>O IRPF 2026 chega com a nova tabela aprovada pela Lei 14.848/2024 ampliando a faixa de isenção, mas o ponto que ninguém comenta é que a Receita aumentou substancialmente o cruzamento automático de dados com corretoras via e-Financeira e com exchanges de criptomoedas. Quem investe em ETFs no exterior pela Lei 14.754/2023 precisa lançar tributação anual de 15% mesmo sem resgate, e quem opera na B3 acima de R$ 20 mil/mês em ações precisa de DARF mensal — sem isenção.</p>
        <p className="mt-3">Minha recomendação prática: feche o ano com extrato consolidado de todas as corretoras antes de março, e use a declaração pré-preenchida apenas como ponto de partida — nunca como verdade absoluta. Ela frequentemente não captura corretamente operações de cripto fora das exchanges reguladas, nem rendimentos de aluguel informados via carnê-leão de forma inconsistente. O investidor que separa 1 hora por mês para organizar documentos financeiros chega a março com a declaração praticamente pronta, evitando tanto erros quanto a corrida de última hora que costuma gerar omissões caras.</p>
      </EditorialTake>

      <ArticleSources category="invest" sources={[
        { title: 'Receita Federal — IRPF', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda', publisher: 'Receita Federal do Brasil', accessedAt: "Maio 2026" },
        { title: 'Lei 14.754/2023 — Tributação Offshore e Cripto', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14754.htm', publisher: 'Planalto', accessedAt: "Maio 2026" },
        { title: 'B3 — Tributação em Renda Variável', url: 'https://www.b3.com.br/pt_br/produtos-e-servicos/tarifas/listados-a-vista-e-derivativos/renda-variavel/tributacao/', publisher: 'B3', accessedAt: "Maio 2026" },
        { title: 'Tesouro Direto — Tributação', url: 'https://www.tesourodireto.com.br/tesouro-direto-tributacao.htm', publisher: 'Tesouro Nacional', accessedAt: "Maio 2026" },
        { title: 'CVM — Orientações ao Investidor', url: 'https://www.gov.br/cvm/pt-br/assuntos/noticias', publisher: 'CVM', accessedAt: "Maio 2026" },
        { title: 'Lei 14.848/2024 — Nova Tabela do Imposto de Renda', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14848.htm', publisher: 'Planalto', accessedAt: "Maio 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default IRPF2026;
