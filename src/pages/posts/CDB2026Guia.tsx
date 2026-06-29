import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, TrendingUp, DollarSign, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/cdb-2026-guia.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CDB2026Guia = () => {
  useEffect(() => {
    trackArticleRead("cdb-2026-guia-completo", "CDB em 2026: Ainda Vale a Pena? Guia Completo com Taxas Reais", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Renda Fixa · CDB · Investimentos 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          CDB em 2026: Ainda Vale a Pena? Guia Completo com Taxas Reais
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O <strong>CDB em 2026</strong> voltou ao centro das atenções: com a Selic ainda em patamar elevado, os Certificados de Depósito Bancário oferecem rentabilidade real acima de 8% ao ano. Mas escolher mal — banco errado, prazo inadequado ou percentual baixo do CDI — pode custar caro em imposto e liquidez. Este guia explica CDB 100% CDI, 110% CDI, IR regressivo e como o CDB se compara a LCI, LCA e Tesouro Direto em 2026.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
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
          alt="CDB em 2026 — guia completo de investimento em renda fixa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-emerald-500/10 to-background rounded-xl border border-emerald-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-emerald-400" />O que é um CDB e por que ele importa em 2026
          </h2>
          <p className="text-muted-foreground text-sm">
            Um <strong>CDB (Certificado de Depósito Bancário)</strong> é essencialmente um empréstimo que você faz ao banco. Em troca, o banco paga juros sobre o valor investido pelo período combinado. A rentabilidade é geralmente atrelada ao <strong>CDI (Certificado de Depósito Interbancário)</strong>, que acompanha de perto a taxa Selic. O CDB é protegido pelo <strong>FGC (Fundo Garantidor de Créditos)</strong> até R$ 250.000 por CPF por instituição — o que o torna um dos investimentos mais seguros do mercado brasileiro para valores dentro desse limite.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-emerald-400" />Como Funciona a Rentabilidade do CDB em 2026
        </h2>
        <p>
          A maioria dos CDBs remunera como <strong>percentual do CDI</strong>. Com o CDI próximo a 13,65% ao ano em março de 2026, o percentual contratado define diretamente quanto você vai ganhar. Veja o impacto de cada faixa nos seus rendimentos líquidos:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4 font-bold">% do CDI</th>
              <th className="text-left py-3 px-4 font-bold">Rentabilidade bruta/ano</th>
              <th className="text-left py-3 px-4 font-bold">Após IR 15% ({'>'} 2 anos)</th>
              <th className="text-left py-3 px-4 font-bold">Onde encontrar</th>
            </tr></thead>
            <tbody>
              {[
                ["80% CDI",  "10,92%", "9,28%",  "Grandes bancos (Bradesco, Itaú)"],
                ["100% CDI", "13,65%", "11,60%", "Bancos médios e corretoras"],
                ["110% CDI", "15,02%", "12,77%", "Fintechs e bancos digitais"],
                ["120% CDI", "16,38%", "13,92%", "Bancos menores (risco maior)"],
              ].map(([pct, bruto, liq, onde]) => (
                <tr key={pct} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-emerald-400">{pct}</td>
                  <td className="py-3 px-4">{bruto}</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">{liq}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{onde}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">⚠️ Baseado no CDI de 13,65% a.a. (março/2026). Consulte a taxa atualizada antes de investir.</p>
        </div>

        <p>
          O ponto crucial: <strong>nunca aceite um CDB abaixo de 100% do CDI</strong> em um banco digital ou fintech — hoje existem ofertas de 110% a 120% com FGC garantindo sua segurança. CDBs de 80% do CDI de grandes bancos tradicionais só fazem sentido se você precisar de relacionamento bancário para crédito imobiliário ou consignado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />Imposto de Renda no CDB: Tabela Regressiva
        </h2>
        <p>
          O CDB tem incidência de <strong>Imposto de Renda regressivo</strong> sobre os rendimentos, retido na fonte pelo banco no momento do resgate. A alíquota diminui quanto mais tempo você mantiver o investimento — por isso o prazo é um fator fundamental na estratégia:
        </p>
        <div className="not-prose my-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["Até 180 dias", "22,5%", "bg-red-500/10 border-red-500/30 text-red-400"],
            ["181 a 360 dias", "20%", "bg-orange-500/10 border-orange-500/30 text-orange-400"],
            ["361 a 720 dias", "17,5%", "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"],
            ["Acima de 720 dias", "15%", "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"],
          ].map(([prazo, ir, cls]) => (
            <div key={prazo} className={`rounded-xl border p-4 ${cls}`}>
              <div className="text-xs text-muted-foreground mb-1">{prazo}</div>
              <div className="text-2xl font-black">{ir}</div>
            </div>
          ))}
        </div>
        <p>
          A diferença entre resgatar em 5 meses (22,5% de IR) e em 2 anos (15%) pode representar quase 1,5 ponto percentual a mais no rendimento líquido. Em valores concretos: num CDB de 110% do CDI com R$ 50.000 investidos por 2 anos, a diferença chega a mais de R$ 1.200 no bolso. Por isso, <strong>nunca vale resgatar um CDB com menos de 6 meses</strong> se puder evitar — use o Tesouro Selic para necessidades de liquidez imediata.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">CDB vs. Outras Rendas Fixas em 2026</h2>
        <p>
          Para fazer a escolha certa, é preciso comparar o CDB com as principais alternativas de renda fixa disponíveis ao investidor brasileiro em 2026:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4 font-bold">Investimento</th>
              <th className="text-left py-3 px-4 font-bold">Rentabilidade ref.</th>
              <th className="text-left py-3 px-4 font-bold">IR</th>
              <th className="text-left py-3 px-4 font-bold">FGC</th>
              <th className="text-left py-3 px-4 font-bold">Liquidez</th>
            </tr></thead>
            <tbody>
              {[
                ["CDB 110% CDI", "15,02% a.a.", "15–22,5%", "Sim (até R$250k)", "Depende do prazo"],
                ["Tesouro Selic", "~Selic 14,25%", "15–22,5%", "Governo Federal", "Diária"],
                ["LCI/LCA", "95–100% CDI", "Isento", "Sim (até R$250k)", "Carência mínima"],
                ["Poupança", "~0,5%/mês", "Isento", "Sim (até R$250k)", "Mensal"],
              ].map(([inv, rent, ir, fgc, liq]) => (
                <tr key={inv} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{inv}</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">{rent}</td>
                  <td className="py-3 px-4 text-muted-foreground">{ir}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{fgc}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{liq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Nota importante: a <strong>LCI e LCA são isentas de IR</strong>, o que as torna mais rentáveis do que parece na comparação bruta. Um CDB precisa pagar mais que 100% do CDI para superar uma LCI a 95% do CDI para prazos acima de 2 anos. Com CDI em 13,65%, uma LCI a 95% CDI equivale a um CDB de aproximadamente 112% CDI bruto — fique atento a essa conta antes de escolher.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />Riscos do CDB que Ninguém Conta
        </h2>
        <ul>
          <li>
            <strong>Risco de crédito:</strong> se o banco emissor falir, o FGC cobre até R$ 250.000 por CPF por instituição. Acima desse valor, você pode perder o excedente. Para grandes patrimônios, diversifique entre diferentes bancos para manter-se sempre dentro do limite.
          </li>
          <li>
            <strong>Risco de liquidez:</strong> CDBs com carência não permitem resgate antecipado sem penalidades severas — alguns oferecem apenas o valor nominal (sem os juros) em caso de resgate emergencial. Leia o regulamento com atenção antes de contratar.
          </li>
          <li>
            <strong>Risco de inflação:</strong> em cenários de inflação persistente acima do CDI, o retorno real pode decepcionar. Para hedge de longo prazo, o Tesouro IPCA+ pode ser mais indicado que CDBs pós-fixados.
          </li>
          <li>
            <strong>Risco de rolagem:</strong> ao vencimento do CDB, você precisa reinvestir ativamente — e as taxas disponíveis podem ser menores se a Selic tiver caído. Quem investe no Tesouro Selic não tem esse problema.
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-emerald-400" />Quando o CDB Vale a Pena em 2026
        </h2>
        <p>
          O CDB é uma ferramenta excelente dentro do seu contexto certo. Saiba quando ele faz sentido — e quando prefira outras alternativas:
        </p>
        <div className="not-prose space-y-2 my-4">
          {[
            { check: true,  item: "Você tem reserva de emergência separada e quer rentabilizar o restante sem risco de crédito" },
            { check: true,  item: "Busca liquidez diária com rendimento acima da poupança (CDB 100% CDI com liquidez diária em banco digital)" },
            { check: true,  item: "Tem horizonte de 2+ anos e quer pagar a menor alíquota de IR (15% após 720 dias)" },
            { check: true,  item: "Quer diversificar entre bancos respeitando o limite de R$ 250 mil do FGC por instituição" },
            { check: false, item: "Precisará do dinheiro em menos de 6 meses — nesse caso prefira Tesouro Selic com liquidez diária" },
            { check: false, item: "Quer isenção de IR — prefira LCI, LCA ou Tesouro IPCA+ para objetivos de médio prazo" },
          ].map(({ check, item }) => (
            <div key={item} className={`flex items-start gap-3 rounded-lg p-4 ${check ? "bg-emerald-500/5 border border-emerald-500/20" : "bg-red-500/5 border border-red-500/20"}`}>
              <span className="text-lg">{check ? "✅" : "❌"}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Como Escolher o Melhor CDB em 2026: Passo a Passo</h2>
        <p>
          Com tantas opções no mercado, um roteiro simples ajuda a tomar a melhor decisão:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            { n: "1", titulo: "Defina o prazo antes de tudo", desc: "Determine quando vai precisar do dinheiro. Para menos de 12 meses, prefira CDB com liquidez diária ou Tesouro Selic. Para 2+ anos, CDB com carência oferece taxas melhores." },
            { n: "2", titulo: "Compare o percentual do CDI líquido de IR", desc: "Use a tabela regressiva para calcular o rendimento líquido real. Um CDB de 110% CDI por 2 anos rende ~12,77% líquido; uma LCI de 95% rende ~12,97% líquido (isenta). A LCI vence nesse prazo." },
            { n: "3", titulo: "Verifique o FGC e o rating do banco", desc: "Bancos menores pagam mais, mas carregam mais risco. Respeite o limite de R$ 250 mil por CPF por instituição. Distribuir entre 3 bancos distintos pode triplicar sua proteção." },
            { n: "4", titulo: "Prefira plataformas agregadoras", desc: "Nubank, XP, Rico, BTG e Inter oferecem CDBs de diferentes bancos numa mesma plataforma — facilitando a comparação de taxas sem precisar abrir conta em dezenas de corretoras." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 bg-card border border-border rounded-xl p-4">
              <span className="text-3xl font-black text-invest/40 shrink-0">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">CDB Prefixado vs. Pós-fixado: Qual Escolher em 2026?</h2>
        <p>
          Além do CDB pós-fixado (atrelado ao CDI), bancos também oferecem CDBs prefixados,
          com taxa fixa definida no momento da contratação. A escolha entre os dois modelos
          depende diretamente da sua expectativa sobre o futuro da Selic:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3 text-sm">📊 CDB Pós-fixado (% do CDI)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Acompanha a Selic automaticamente. Se os juros subirem, seu rendimento sobe
              junto. Ideal para quem acredita que a Selic vai se manter estável ou subir,
              e para quem prioriza previsibilidade de não perder para o CDI.
            </p>
          </div>
          <div className="bg-card rounded-xl border border-violet-500/20 p-5">
            <h3 className="font-bold text-violet-400 mb-3 text-sm">🔒 CDB Prefixado (taxa fixa)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Trava uma taxa no momento da compra (ex: 14,5% ao ano). Vantajoso se você
              acredita que a Selic vai cair — você garante a taxa atual mesmo que os juros
              futuros sejam menores. Risco: se a Selic subir, você fica com taxa inferior
              à nova realidade do mercado.
            </p>
          </div>
        </div>
        <p>
          Com o ciclo de cortes de juros em curso no Brasil em 2026, CDBs prefixados de
          médio prazo (2 a 4 anos) começam a ganhar atratividade para quem quer travar as
          taxas elevadas atuais antes que caiam ainda mais. A decisão ideal raramente é
          binária — muitos investidores experientes mantêm uma combinação de pós-fixado
          (para a reserva de emergência) e prefixado (para objetivos com prazo definido),
          equilibrando previsibilidade com aproveitamento do ciclo de juros.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Perguntas Frequentes Sobre CDB em 2026</h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { q: "Existe valor mínimo para investir em CDB?", a: "Sim, varia por instituição. Bancos digitais costumam aceitar a partir de R$ 1 a R$ 100, enquanto alguns CDBs de bancos tradicionais exigem aplicação mínima de R$ 1.000 a R$ 5.000. Plataformas agregadoras facilitam encontrar opções com ticket de entrada baixo." },
            { q: "Posso ter mais de um CDB ao mesmo tempo?", a: "Sim, e é recomendado. Diversificar entre diferentes bancos e prazos é uma estratégia comum para otimizar o uso do limite de cobertura do FGC e equilibrar liquidez com rentabilidade." },
            { q: "O que acontece se eu precisar resgatar antes do prazo?", a: "Depende das condições do CDB contratado. CDBs com liquidez diária permitem resgate a qualquer momento, geralmente sem perda de rentabilidade proporcional. CDBs com carência podem não permitir resgate algum até o vencimento, ou permitir apenas com perda significativa de rendimento — sempre leia o regulamento antes de contratar." },
            { q: "CDB de banco digital é tão seguro quanto de banco tradicional?", a: "Sim, desde que o banco emissor seja regulado pelo Banco Central e o valor investido esteja dentro do limite de cobertura do FGC (R$ 250 mil por CPF por instituição). O porte do banco não altera a proteção do FGC — ela é a mesma para bancos grandes e pequenos dentro do limite de cobertura." },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          CDB Como Parte de Uma Estratégia de Diversificação em Renda Fixa
        </h2>
        <p>
          Embora o CDB seja um excelente instrumento, a estratégia mais robusta de renda
          fixa raramente se resume a um único produto. Combinar CDBs de diferentes
          prazos e bancos com Tesouro Direto e LCI/LCA isentas de IR cria uma carteira
          de renda fixa mais resiliente, que aproveita as vantagens específicas de cada
          modalidade: a previsibilidade do Tesouro Selic para liquidez imediata, o
          potencial de rendimento superior de CDBs de bancos médios para parte do
          capital com prazo definido, e a isenção fiscal das LCI/LCA para otimizar a
          rentabilidade líquida de quem já esgotou a vantagem marginal de outras opções.
        </p>
        <p>
          Uma prática recomendada por planejadores financeiros é escalonar os
          vencimentos dos CDBs ao longo do tempo — uma estratégia conhecida como
          "escada de vencimentos" — de forma que diferentes parcelas do capital se
          tornem líquidas em momentos espaçados. Isso reduz o risco de precisar resgatar
          tudo de uma vez em um momento de taxa desfavorável, ao mesmo tempo em que
          mantém parte do capital sempre disponível para reaplicação nas taxas vigentes
          no momento, capturando eventuais melhorias nas condições de mercado sem
          comprometer a liquidez geral da carteira de renda fixa. Revisar essa escada a
          cada 6 a 12 meses, ajustando os vencimentos conforme novos aportes são feitos
          ou conforme o cenário de juros evolui, mantém a estratégia sempre alinhada aos
          objetivos financeiros do investidor ao longo do tempo.
        </p>

      </div>

      <EditorialTake category="invest" title="Análise do Marcos: CDB de grande banco é cilada silenciosa">
        <p>
          O erro mais comum que vejo entre investidores iniciantes é aceitar o CDB que o gerente do banco oferece — geralmente 80% a 90% do CDI — por comodidade. Em 2026, com plataformas digitais oferecendo 110% a 115% do CDI com o mesmo FGC, aceitar 80% significa jogar fora entre 2 e 4 pontos percentuais de rentabilidade por ano. Em R$ 50.000 por 3 anos, essa diferença passa de R$ 5.000 no bolso.
        </p>
        <p className="mt-2">
          Minha recomendação prática: use o <strong>CDB com liquidez diária a 100% CDI</strong> para a reserva de emergência (tem em praticamente todos os bancos digitais) e, para o dinheiro com prazo definido acima de 2 anos, compare sempre com LCI e LCA antes de fechar. O CDB vence a LCI apenas quando oferece 118%+ do CDI — o que existe, mas exige pesquisa ativa. <strong>Preguiça financeira tem custo.</strong>
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "Resolução CMN nº 4.860/2020 — CDB e Instrumentos de Captação",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/cedulas",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "FGC — Fundo Garantidor de Créditos: Cobertura e Limites",
            url: "https://www.fgc.org.br/garantia-fgc/sobre-a-garantia-fgc",
            publisher: "Fundo Garantidor de Créditos (FGC)",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tabela Regressiva de IR — Aplicações Financeiras de Renda Fixa",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Taxa CDI Histórica — Série Temporal",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/selicdadosabertos",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "Nota para a Imprensa — Taxa Selic e Mercado Aberto",
            url: "https://www.bcb.gov.br/publicacoes/notaaimprensaselicmercadoaberto",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "CVM — Instrumentos de Renda Fixa: Guia do Investidor",
            url: "https://www.investidor.gov.br/menu/Menu_Investidor/produtos/Produto_RendaFixa.html",
            publisher: "Comissão de Valores Mobiliários (CVM)",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="cdb-2026-guia-completo" />
      <CommentSection postId="cdb-2026-guia-completo" postTitle="CDB em 2026: Guia Completo"  category="invest" />
    </article>
  );
};

export default CDB2026Guia;
