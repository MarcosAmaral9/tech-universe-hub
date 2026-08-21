import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, TrendingDown, PiggyBank, Landmark, ListChecks, HelpCircle } from "lucide-react";
import heroImg from "@/assets/selic-14-agosto-2026-onde-investir.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "selic-14-agosto-2026-onde-investir";
const TITLE = "Selic a 14% em Agosto de 2026: O Que Muda na Renda Fixa e Onde Investir Agora";

const CORTES = [
  { reuniao: "Reunião de agosto (05/08/2026)", taxa: "14,00% a.a.", nota: "Corte de 0,25 p.p., decisão unânime" },
  { reuniao: "Patamar anterior", taxa: "14,25% a.a.", nota: "Quarta redução consecutiva do ciclo" },
];

const CENARIOS = [
  { titulo: "Reserva de emergência", onde: "Tesouro Selic e CDBs de liquidez diária de bancos sólidos", porque: "Acompanham a taxa básica e você resgata no mesmo dia. Queda da Selic reduz o rendimento, mas não muda a função da reserva." },
  { titulo: "Objetivo de 2 a 5 anos", onde: "Títulos indexados à inflação (IPCA+) e CDBs prefixados de prazo médio", porque: "Em ciclo de queda de juros, travar taxa hoje protege o rendimento futuro caso a Selic continue caindo." },
  { titulo: "Renda mensal", onde: "Títulos com pagamento de juros semestrais e fundos imobiliários", porque: "Juro em queda tende a favorecer ativos de renda variável ligados a imóveis, mas com volatilidade." },
  { titulo: "Longo prazo (10+ anos)", onde: "Mistura de IPCA+ longo e ações/ETFs", porque: "Juro alto ainda paga bem em renda fixa longa; ações ganham fôlego conforme o custo do dinheiro cai." },
];

const Selic14OndeInvestir2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Copom · Renda Fixa · Juros
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Selic a 14% em Agosto de 2026: O Que Muda na Renda Fixa e Onde Investir Agora
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O Copom cortou a taxa básica pela quarta vez seguida e a <strong>Selic a 14%</strong> passou a valer desde 5 de
          agosto de 2026. Ainda é um dos juros reais mais altos do mundo — e é exatamente por isso que a forma de montar
          a carteira muda quando o ciclo de queda continua.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
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
          alt="Cédulas e moedas de real ao lado de um gráfico de barras em tons de verde e dourado"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-invest" />
            O que está valendo
          </h2>
          <div className="space-y-2">
            {[
              { k: "Selic atual", v: "14,00% ao ano" },
              { k: "Decisão", v: "05/08/2026, unânime" },
              { k: "Tamanho do corte", v: "0,25 ponto percentual" },
              { k: "Cortes consecutivos", v: "4" },
              { k: "Sinalização do comunicado", v: "próximos passos em aberto" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-invest font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="decisao" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-invest" />
          O Que o Copom Decidiu
        </h2>
        <p>
          Em 5 de agosto de 2026, o Comitê de Política Monetária do Banco Central reduziu a taxa básica de 14,25% para
          14% ao ano, em decisão unânime. Foi a quarta redução consecutiva de 0,25 ponto percentual do ciclo, tomada
          depois de dados mostrarem crescimento moderado e uma desaceleração da inflação mais forte do que o esperado.
        </p>
        <p>
          O comunicado não se comprometeu com o próximo passo. O colegiado citou incertezas ligadas aos efeitos do El
          Niño sobre a produção agrícola, à política fiscal e a choques no preço do petróleo. Em bom português: o Banco
          Central sinalizou que continua cortando com cautela, e não em ritmo acelerado.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Referência</th>
                <th className="text-left p-3">Taxa</th>
                <th className="text-left p-3">Observação</th>
              </tr>
            </thead>
            <tbody>
              {CORTES.map((c) => (
                <tr key={c.reuniao} className="border-t border-border/50">
                  <td className="p-3 font-bold align-top">{c.reuniao}</td>
                  <td className="p-3 text-invest font-bold whitespace-nowrap">{c.taxa}</td>
                  <td className="p-3 text-muted-foreground">{c.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="renda-fixa" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingDown className="h-7 w-7 text-invest" />
          O Efeito Prático na Renda Fixa
        </h2>
        <p>
          Todo produto atrelado ao CDI — Tesouro Selic, CDB de liquidez diária, boa parte dos fundos DI — rende um pouco
          menos a cada corte, porque o CDI acompanha de perto a taxa básica. Com Selic a 14% ao ano, um CDB que paga 100%
          do CDI entrega algo próximo de 1,10% ao mês bruto, antes de imposto de renda.
        </p>
        <p>
          A poupança segue com a regra de 70% da Selic mais TR somente quando a taxa está em 8,5% ao ano ou menos. Como
          14% está muito acima disso, a poupança continua no rendimento fixo de 0,5% ao mês mais TR — ou seja, continua
          perdendo com folga para o Tesouro Selic.
        </p>
        <p>
          Já os títulos prefixados e os IPCA+ funcionam ao contrário: quando o mercado passa a acreditar em mais cortes,
          as taxas oferecidas caem. Quem travou taxa antes ganha marcação a mercado; quem espera demais compra mais caro.
        </p>

        <h2 id="onde-investir" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <PiggyBank className="h-7 w-7 text-invest" />
          Onde Investir com a Selic a 14%
        </h2>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {CENARIOS.map((c) => (
            <div key={c.titulo} className="p-5 rounded-xl border border-invest/30 bg-invest/5">
              <h3 className="font-bold mb-1 text-invest">{c.titulo}</h3>
              <p className="text-sm font-medium mb-2">{c.onde}</p>
              <p className="text-xs text-muted-foreground">{c.porque}</p>
            </div>
          ))}
        </div>

        <p>
          Três lembretes que valem mais do que qualquer indicação de produto: mantenha a reserva de emergência intocada
          em liquidez diária; respeite o limite de R$ 250 mil por CPF e por instituição para produtos cobertos pelo FGC;
          e leve o imposto de renda regressivo em conta — resgatar antes de 720 dias custa alíquota maior.
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-invest" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>A Selic vai continuar caindo?</strong> O comunicado de agosto deixou os próximos passos em aberto. Não
          existe garantia de novo corte na reunião seguinte.
        </p>
        <p>
          <strong>Vale sair da renda fixa?</strong> Com juro real ainda alto, não há motivo estrutural para abandonar
          renda fixa. O ajuste típico em ciclo de queda é alongar prazos, não zerar posições.
        </p>
        <p>
          <strong>Poupança melhorou?</strong> Não. Com Selic acima de 8,5%, a regra da poupança fica travada em 0,5% ao
          mês mais TR.
        </p>
      </div>

      <EditorialTake category="invest">
        <p>
          Quatro cortes seguidos de 0,25 ponto é um ciclo de tartaruga — e isso é proposital. O Banco Central está
          cortando o mínimo possível para não perder o controle das expectativas enquanto o fiscal e o câmbio seguem sem
          resolução. Quem esperava juros de um dígito em 2026 vai precisar de paciência.
        </p>
        <p>
          Minha leitura prática: esse é o momento clássico em que o investidor brasileiro erra por inércia. Ele deixa
          tudo no CDI enquanto a taxa desce degrau por degrau e só percebe quando o rendimento já encolheu. Alongar parte
          da carteira em IPCA+ agora, sem mexer na reserva, é a decisão mais chata e mais eficiente do semestre.
        </p>
      </EditorialTake>

      <ArticleSources
        category="invest"
        sources={[
          {
            title: "Selic: Copom reduz taxa básica de juros para 14% ao ano",
            url: "https://g1.globo.com/economia/noticia/2026/08/05/selic-copom-reduz-taxa-basica-de-juros-para-14percent-ao-ano.ghtml",
            publisher: "g1",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Em nova redução, Copom baixa taxa Selic para 14% ao ano",
            url: "https://agenciabrasil.ebc.com.br/economia/noticia/2026-08/em-nova-reducao-copom-baixa-taxa-selic-para-14-ao-ano",
            publisher: "Agência Brasil",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Banco Central corta Selic pela 4ª vez seguida, para 14%, e deixa próximos passos em aberto",
            url: "https://oglobo.globo.com/economia/financas/noticia/2026/08/05/banco-central-corta-selic-pela-4a-vez-seguida-de-1425percent-para-14percent-ao-ano.ghtml",
            publisher: "O Globo",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Copom reduz taxa de juros em 0,25 ponto pela 4ª vez seguida e Selic cai a 14% ao ano",
            url: "https://www.estadao.com.br/economia/copom-agosto-2026-selic-juros/",
            publisher: "Estadão",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Copom: Banco Central reduz Selic para 14% ao ano após inflação desacelerar",
            url: "https://www.bloomberglinea.com.br/brasil/copom-banco-central-reduz-selic-para-14-ao-ano-apos-inflacao-desacelerar/",
            publisher: "Bloomberg Línea",
            accessedAt: "Agosto 2026",
          },
          {
            title: "BC cita El Niño, fiscal e petróleo em decisão sobre juros; leia comunicado",
            url: "https://www.cnnbrasil.com.br/economia/macroeconomia/bc-cita-el-nino-fiscal-e-petroleo-em-decisao-sobre-juros-leia-comunicado/",
            publisher: "CNN Brasil",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default Selic14OndeInvestir2026;
