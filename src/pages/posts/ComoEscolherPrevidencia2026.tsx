/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/como-escolher-previdencia-privada-2026": {
 *   title: "Como Escolher Previdência Privada em 2026: PGBL vs VGBL, Taxas e Portabilidade",
 *   description: "Guia completo de previdência privada 2026: PGBL deduz até 12% da renda bruta no IR, VGBL IR só sobre rendimentos. Taxa de administração abaixo de 1%, sem taxa de carregamento, tabela regressiva (10% em 10 anos), FGS até R$ 120k por seguradora e portabilidade gratuita.",
 *   keywords: "previdência privada 2026, PGBL vs VGBL 2026, como escolher previdência privada, taxa administração previdência, portabilidade PGBL VGBL, tabela regressiva previdência, FGS previdência, tábua atuarial, previdência privada vale a pena 2026",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, Shield, DollarSign,
  AlertTriangle, FileText, TrendingUp, Lightbulb, CheckCircle
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/previdencia-privada-escolher-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ComoEscolherPrevidencia2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "como-escolher-previdencia-privada-2026",
      "Como Escolher Previdência Privada em 2026: PGBL vs VGBL, Taxas e Portabilidade",
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
            Previdência · PGBL · VGBL · Aposentadoria · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Como Escolher Previdência Privada em 2026: PGBL vs VGBL, Taxas, IR e Portabilidade
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A diferença entre escolher PGBL ou VGBL errado pode custar <strong>dezenas de milhares de reais</strong> em impostos ao longo de décadas. Em 2026, com a Selic alta e incerteza sobre a previdência pública, entender as regras ficou ainda mais importante. Este guia cobre: quando usar cada modalidade, por que taxa de administração abaixo de 1% é inegociável, como a tabela regressiva chega a 10% em 10 anos, a garantia do FGS de R$ 120 mil e como fazer portabilidade sem pagar IR.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Julho de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
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
          alt="Como escolher previdência privada em 2026 — PGBL vs VGBL, taxas e portabilidade"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* PGBL vs VGBL tabela */}
        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-bold">Característica</th>
                <th className="text-center p-4 font-bold text-invest">PGBL</th>
                <th className="text-center p-4 font-bold text-blue-400">VGBL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {[
                ["Dedução no IR", "Até 12% da renda bruta tributável ✅", "Sem dedução ❌"],
                ["Base de incidência do IR no resgate", "IR sobre o total (capital + rendimentos)", "IR apenas sobre os rendimentos ✅"],
                ["Para quem faz sentido", "Quem declara IRPF completo c/ renda tributável alta", "Isento de IR, simples, ou que já atingiu o limite de 12%"],
                ["Planejamento sucessório", "Inventário se não houver beneficiário específico", "Passa direto ao beneficiário sem inventário ✅"],
                ["Garantia FGS", "R$ 120.000 por CPF por seguradora ✅", "R$ 120.000 por CPF por seguradora ✅"],
                ["Taxa de carregamento ideal", "Zero — fuja de planos que cobram", "Zero — fuja de planos que cobram"],
                ["Taxa de adm. referência 2026", "Abaixo de 1% ao ano — máximo 1,5%", "Abaixo de 1% ao ano — máximo 1,5%"],
              ].map(([c, pgbl, vgbl]) => (
                <tr key={c} className="hover:bg-muted/20">
                  <td className="p-3 font-medium text-muted-foreground">{c}</td>
                  <td className="p-3 text-center text-invest">{pgbl}</td>
                  <td className="p-3 text-center text-blue-400">{vgbl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          PGBL vs VGBL: A Diferença Que Define Décadas de Resultado
        </h2>
        <p>
          A previdência privada no Brasil existe em duas modalidades principais — <strong>PGBL (Plano Gerador de Benefício Livre)</strong> e <strong>VGBL (Vida Gerador de Benefício Livre)</strong> — e a escolha entre elas não é questão de preferência pessoal. É uma decisão de otimização tributária que pode representar dezenas de milhares de reais de diferença no patrimônio final, dependendo da situação fiscal de cada contribuinte.
        </p>
        <p>
          O <strong>PGBL</strong> oferece o benefício de deduzir as contribuições anuais da base de cálculo do Imposto de Renda, limitado a <strong>12% da renda bruta tributável do ano</strong>. Na declaração IRPF, o valor aportado no PGBL é informado na ficha "Pagamentos Efetuados" (código 36) e reduz automaticamente a base tributável — o que gera uma restituição maior ou um imposto menor a pagar no ajuste anual. Um contribuinte que ganha R$ 120.000 brutos por ano (R$ 10.000/mês) pode aportar até R$ 14.400 anuais no PGBL com dedução; se estiver na alíquota de 27,5%, isso representa uma economia de IR de até R$ 3.960 no ano. Mas há uma contrapartida obrigatória: no resgate, o IR incide sobre o <strong>valor total sacado</strong> — capital aportado mais rendimentos — não apenas sobre os ganhos.
        </p>
        <p>
          O <strong>VGBL</strong> não oferece dedução no IR durante a fase de acumulação. A vantagem está no resgate: o Imposto de Renda incide <strong>apenas sobre os rendimentos</strong>, não sobre o capital principal. Para quem declara IRPF pelo modelo simplificado, para quem é isento ou para quem já utilizou o teto de 12% no PGBL e ainda quer continuar aportando em previdência, o VGBL é a escolha natural. O VGBL tem ainda outra vantagem relevante em planejamento sucessório: os recursos podem ser destinados a beneficiários específicos no contrato e transferidos diretamente a eles sem inventário, com agilidade e custo muito inferior ao processo judicial de partilha de bens.
        </p>
        <p>
          A regra prática mais citada em 2026 por planejadores financeiros é: <strong>use PGBL até o limite de 12% da renda bruta se você declara pelo modelo completo</strong>; use VGBL para aportes adicionais que ultrapassam esse limite. Para quem ganha acima de R$ 4.664,68 por mês (faixa de 27,5% de IR), o benefício fiscal do PGBL é expressivo o suficiente para justificar o uso prioritário da modalidade. Para quem declara pelo simplificado ou é isento, o VGBL costuma ser mais eficiente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <FileText className="h-7 w-7 text-invest" />
          Tabela Progressiva vs Regressiva: A Escolha Que Não Pode Ser Desfeita
        </h2>
        <p>
          Além da escolha entre PGBL e VGBL, há uma segunda decisão tributária fundamental na contratação de um plano de previdência privada: o regime de tributação, que pode ser a <strong>tabela progressiva</strong> ou a <strong>tabela regressiva</strong>. Esta escolha é feita no momento da contratação e, ao contrário da portabilidade entre planos, <strong>não pode ser revertida depois</strong>.
        </p>
        <p>
          A <strong>tabela progressiva</strong> aplica as mesmas alíquotas do IRPF (de isento a 27,5%) sobre o valor resgatado, com possibilidade de ajuste na declaração anual. É vantajosa para quem planeja resgatar a previdência como complemento de renda em pequenas parcelas mensais na aposentadoria — quando a renda total for baixa o suficiente para se enquadrar nas faixas menores ou de isenção da tabela.
        </p>
        <p>
          A <strong>tabela regressiva</strong> começa em 35% para resgates feitos em menos de 2 anos e cai progressivamente conforme o tempo de acumulação: 30% entre 2 e 4 anos, 25% de 4 a 6 anos, 20% de 6 a 8 anos, 15% de 8 a 10 anos e <strong>10% acima de 10 anos</strong>. Essa alíquota de 10% é a menor disponível em qualquer produto de renda fixa no Brasil — abaixo dos 15% do Tesouro Direto e CDB de longo prazo. Para quem tem horizonte de 10 anos ou mais, a tabela regressiva quase sempre vence — e a vantagem é ainda maior quando comparada ao come-cotas de fundos multimercado convencionais, que antecipa o imposto semestralmente e corrói o efeito dos juros compostos.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          As Taxas Que Destroem a Rentabilidade: O Que Verificar Antes de Contratar
        </h2>
        <p>
          A previdência privada é um dos produtos mais vendidos no Brasil por gerentes de banco — e frequentemente com condições que beneficiam mais a instituição do que o cliente. Três taxas precisam ser analisadas com rigor antes de assinar qualquer proposta.
        </p>
        <p>
          A <strong>taxa de administração</strong> é cobrada anualmente sobre o patrimônio total do plano. Em 2026, planos oferecidos por grandes bancos a clientes de varejo podem cobrar de 1,5% a 3% ao ano — percentuais que, em 30 anos, consomem uma parte expressiva do patrimônio acumulado. Um plano com taxa de 2,5% ao ano versus outro com taxa de 0,7% ao ano, mantendo o mesmo retorno bruto, pode resultar em patrimônio final 35% a 45% menor após 30 anos — uma diferença de centenas de milhares de reais para quem acumula por toda a vida ativa. Em 2026, plataformas digitais de seguradoras como Zurich, Brasilprev Via XP, Icatu e Azul Seguros oferecem planos com taxa de administração entre 0,6% e 0,9% ao ano para fundos de renda fixa e multimercado. <strong>Qualquer plano acima de 1,5% ao ano de taxa de administração precisa de justificativa muito forte para fazer sentido.</strong>
        </p>
        <p>
          A <strong>taxa de carregamento</strong> é cobrada sobre cada aporte feito ou sobre cada resgate realizado — dependendo do contrato. Planos modernos e competitivos em 2026 não cobram taxa de carregamento. Se o plano que você está analisando ainda cobra (geralmente entre 0,5% e 3% sobre cada aporte), é um sinal claro de que é um plano antigo ou mal estruturado. Considere imediatamente a portabilidade para um plano sem carregamento.
        </p>
        <p>
          A <strong>tábua atuarial</strong> é relevante para quem planeja converter o saldo em renda mensal vitalícia (em vez de resgatar tudo de uma vez). A tábua atuarial é uma tabela que estima a expectativa de vida e define o valor da renda mensal com base no saldo acumulado. Planos contratados antes de 2010 podem ter tábuas atuariais antigas (BR-EMS 1958, por exemplo), que estimavam expectativas de vida menores — o que significa que geram rendas mensais maiores para o mesmo saldo, por assumir que o beneficiário viveria menos tempo do que as tábuas modernas projetam. Antes de fazer portabilidade de um plano antigo, verifique a tábua contratada: em alguns casos, a taxa de administração alta do plano antigo pode valer a pena ser mantida se a tábua atuarial for significativamente mais vantajosa que as disponíveis em planos novos.
        </p>

        <AdRectangle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          FGS: A Garantia Que Poucos Conhecem — e Suas Limitações
        </h2>
        <p>
          Um dos mitos mais comuns sobre previdência privada é a crença de que ela tem garantia do FGC — o Fundo Garantidor de Créditos que cobre CDBs e depósitos bancários. Não tem. A previdência privada é garantida pelo <strong>FGS (Fundo Garantidor de Seguros)</strong>, administrado pela FenaPrevi (Federação Nacional de Previdência Privada e Vida), com cobertura de até <strong>R$ 120.000 por CPF por seguradora</strong> — não por plano, por CPF inteiro em cada seguradora.
        </p>
        <p>
          Isso tem implicações práticas importantes para quem tem saldos altos. Uma pessoa com R$ 500.000 acumulados na previdência de um único banco ou seguradora tem apenas R$ 120.000 cobertos pelo FGS em caso de liquidação extrajudicial dessa seguradora. O valor restante — R$ 380.000 — entra no processo de liquidação como crédito quirografário, sem garantia de recuperação integral. A solução é diversificar entre seguradoras: R$ 120.000 em cada uma de quatro seguradoras diferentes resulta em R$ 480.000 cobertos integralmente pelo FGS. Além do FGS, há um nível adicional de proteção: os ativos dos planos de previdência são separados do patrimônio da seguradora — em caso de insolvência, os recursos dos participantes não fazem parte da massa falida, o que cria uma proteção adicional além do limite do FGS.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Portabilidade: Como Sair de um Plano Ruim Sem Pagar IR
        </h2>
        <p>
          A <strong>portabilidade de previdência privada</strong> é o direito de transferir o saldo acumulado de um plano para outro — entre seguradoras diferentes ou dentro da mesma seguradora — sem pagar Imposto de Renda no momento da transferência. A portabilidade é gratuita (sem taxas de saída, salvo eventual carência contratual), leva de 5 a 10 dias úteis para ser concluída e pode ser solicitada diretamente à nova seguradora que receberá os recursos.
        </p>
        <p>
          As regras de portabilidade têm duas restrições importantes: (1) só é possível fazer portabilidade entre planos da <strong>mesma modalidade</strong> — PGBL para PGBL e VGBL para VGBL — nunca entre modalidades diferentes; e (2) o regime de tributação pode ser mantido ou trocado da progressiva para a regressiva (nunca o contrário), sendo que ao trocar para a regressiva o tempo de permanência é contado a partir da data de cada aporte original, não da data da portabilidade. O imposto sobre a diferença de regime — caso haja — só é pago no resgate final, não na portabilidade.
        </p>
        <p>
          A recomendação de especialistas é revisar o plano a cada dois ou três anos: comparar a taxa de administração atual com as melhores disponíveis no mercado, verificar se o fundo escolhido continua rendendo próximo ao CDI (para fundos de renda fixa) ou ao benchmark declarado (para multimercado), e confirmar se a tábua atuarial ainda faz sentido para o estágio do planejamento. Planos com taxa de administração acima de 1,5% ao ano têm alta probabilidade de terem equivalentes mais baratos disponíveis em plataformas digitais — e a portabilidade é exatamente o mecanismo criado para facilitar essa migração sem custo tributário.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          A Previdência Privada Vale a Pena em 2026? Quando Sim e Quando Não
        </h2>
        <p>
          Com a Selic em 14,25% e a renda fixa pagando retornos historicamente altos, surgiu uma dúvida legítima: com CDB e Tesouro IPCA+ pagando tão bem, ainda faz sentido destinar recursos para previdência privada? A resposta depende de dois fatores: o benefício fiscal que você captura e o custo do plano que você escolhe.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
            <h3 className="font-bold text-sm text-green-400 mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />Vale a pena quando:
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                "Você declara IRPF completo com alíquota de 22,5% ou 27,5% — a dedução do PGBL gera retorno imediato de 22,5% a 27,5% sobre cada real aportado",
                "Horizonte de 10 anos ou mais — tabela regressiva chega a 10% de IR, abaixo de qualquer outra renda fixa",
                "Você escolheu um plano com taxa de adm. abaixo de 1% e zero taxa de carregamento",
                "Usa como planejamento sucessório — VGBL passa aos beneficiários sem inventário",
                "MEI ou autônomo com renda variável que quer complementar a aposentadoria do INSS acima do mínimo",
                "Você tem um plano de empresa com co-participação do empregador — cada real do empregador é retorno imediato de 100%",
              ].map(i => <li key={i} className="flex items-start gap-1.5"><span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{i}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
            <h3 className="font-bold text-sm text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />Não vale quando:
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {[
                "Taxa de adm. acima de 2% — o custo anual corrói o benefício fiscal em poucos anos",
                "O plano cobra taxa de carregamento — produto desatualizado; faça portabilidade imediatamente",
                "Horizonte de menos de 5 anos — tabela regressiva ainda está nas alíquotas altas (25%–35%)",
                "Você declara IRPF pelo modelo simplificado — não captura a dedução do PGBL",
                "Não tem reserva de emergência — previdência tem baixa liquidez de curto prazo",
                "O fundo atrelado rende consistentemente abaixo do CDI após as taxas — produto mal gerido",
              ].map(i => <li key={i} className="flex items-start gap-1.5"><span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>{i}</li>)}
            </ul>
          </div>
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-xs text-muted-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <span><strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento ou planejamento fiscal individualizado. Consulte um planejador financeiro CFP e um contador para analisar sua situação específica antes de contratar ou portar qualquer plano de previdência privada.</span>
        </div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: previdência de banco grande com taxa de 2,5% é imposto voluntário disfarçado">
        <p>
          Toda semana alguém me mostra o extrato de uma previdência contratada numa agência bancária com taxa de administração de 2,0% a 3,0% ao ano. Com a Selic em 14,25%, um fundo que rende 100% do CDI bruto entrega ao investidor apenas 11,25% líquidos após a taxa de 3% e o come-cotas — enquanto um CDB de banco médio entrega 13,2% líquidos sem nenhum custo adicional. A previdência com taxa alta não só perde para a renda fixa direta como ainda aprisiona o capital com carência e tributação regressiva que só fica boa em 10 anos.
        </p>
        <p className="mt-2">
          A previdência privada bem estruturada — taxa abaixo de 0,8%, tabela regressiva, PGBL para quem declara completo com renda alta, e fundos que realmente rendem próximo ao CDI — é um dos melhores instrumentos de planejamento de longo prazo disponíveis no Brasil. A previdência mal estruturada é um dos piores. <strong>A diferença entre as duas está quase inteiramente nas taxas — e a portabilidade existe exatamente para corrigir esse erro sem custo.</strong>
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "PGBL ou VGBL 2026: Diferenças, Quando Usar Cada Um e Calculadora",
            url: "https://calculabrasil.com/blog/previdencia-privada-pgbl-vgbl-2026",
            publisher: "CalculaBrasil",
            accessedAt: "Julho 2026",
          },
          {
            title: "Portabilidade de Previdência Privada: Como Trocar de Plano",
            url: "https://www.infomoney.com.br/onde-investir/portabilidade-de-previdencia-privada-o-que-voce-precisa-saber-para-trocar-de-plano/",
            publisher: "InfoMoney",
            accessedAt: "Julho 2026",
          },
          {
            title: "Tábua de Mortalidade na Previdência Privada: Como Funciona e Quando Importa",
            url: "https://www.seudinheiro.com/guias/tabua-de-mortalidade-previdencia-privada/",
            publisher: "Seu Dinheiro",
            accessedAt: "Julho 2026",
          },
          {
            title: "Previdência Privada PGBL vs VGBL: Guia Completo 2026",
            url: "https://antecipafacil.com.br/artigo/previdencia-privada-pgbl-vs-vgbl-manual-rapido",
            publisher: "Antecipa Fácil",
            accessedAt: "Julho 2026",
          },
          {
            title: "FGS — Fundo Garantidor de Seguros: Cobertura até R$ 120 mil por CPF por Seguradora",
            url: "https://fgseguros.org.br",
            publisher: "Federação Nacional de Previdência Privada e Vida (FenaPrevi)",
            accessedAt: "Julho 2026",
          },
          {
            title: "LC 109/2001 — Lei de Previdência Complementar Aberta (PGBL e VGBL)",
            url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp109.htm",
            publisher: "Presidência da República / Planalto",
            accessedAt: "Julho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="como-escolher-previdencia-privada-2026" />
      <CommentSection
        postId="como-escolher-previdencia-privada-2026"
        postTitle="Como Escolher Previdência Privada em 2026: PGBL vs VGBL, Taxas e Portabilidade"
        category="invest"
      />
    </article>
  );
};

export default ComoEscolherPrevidencia2026;
