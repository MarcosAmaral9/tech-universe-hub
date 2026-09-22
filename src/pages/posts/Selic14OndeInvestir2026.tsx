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
import { AlertTriangle, BarChart3, Calendar, Calculator, Clock, HelpCircle, Landmark, PiggyBank, ShieldCheck, TrendingDown, User } from "lucide-react";
import heroImg from "@/assets/selic-1375-setembro-2026-onde-investir.webp";

const SLUG = "selic-14-agosto-2026-onde-investir";
const TITLE = "Selic a 13,75%: Quanto Rendem Tesouro, CDB, LCI e Poupança em 2026";

const SIMULACAO = [
  { produto: "Tesouro Selic", mil: "R$ 1.113,44", cinco: "R$ 5.567,20", dez: "R$ 11.134,40", premissa: "valor líquido estimado após IR de 17,5%" },
  { produto: "CDB a 110% do CDI", mil: "R$ 1.123,87", cinco: "R$ 5.619,35", dez: "R$ 11.238,70", premissa: "valor líquido estimado após IR de 17,5%" },
  { produto: "LCI a 85% do CDI", mil: "R$ 1.116,03", cinco: "R$ 5.580,15", dez: "R$ 11.160,30", premissa: "isenta de IR para pessoa física no cenário citado" },
  { produto: "Poupança", mil: "R$ 1.061,68*", cinco: "R$ 5.308,40*", dez: "R$ 10.616,80*", premissa: "0,5% ao mês; *sem projetar a TR futura" },
];

const ESCOLHAS = [
  { titulo: "Reserva de emergência", produto: "Tesouro Selic ou CDB com liquidez diária", detalhe: "Priorize acesso rápido, baixa oscilação e instituição sólida. A função da reserva importa mais do que buscar o último ponto de rentabilidade." },
  { titulo: "Objetivo em até dois anos", produto: "Pós-fixados com vencimento compatível", detalhe: "CDB, LCI ou LCA podem funcionar, desde que a carência e o vencimento coincidam com a data em que o dinheiro será usado." },
  { titulo: "Objetivo de médio prazo", produto: "Prefixados e IPCA+ com cautela", detalhe: "Travam condições por mais tempo, mas os preços oscilam antes do vencimento. Não use dinheiro que talvez precise resgatar antes." },
  { titulo: "Patrimônio de longo prazo", produto: "Carteira diversificada", detalhe: "Renda fixa pode conviver com ações, ETFs e outros ativos. A queda da Selic não é ordem automática para abandonar segurança." },
];

const Selic14OndeInvestir2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Selic · Renda fixa · Copom</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">Selic a 13,75%: Quanto Rendem Tesouro Direto, CDB, LCI e Poupança em 2026?</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O Copom reduziu a taxa básica de 14% para <strong>13,75% ao ano</strong> em 16 de setembro de 2026. Veja como o quinto corte consecutivo afeta a renda fixa, quanto R$ 1 mil, R$ 5 mil e R$ 10 mil podem render e como escolher sem confundir projeção com garantia.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" loading="eager" decoding="async" width={1536} height={864} src={heroImg} alt="Mesa de análise financeira com reais, gráfico de juros em queda e edifício do Congresso ao fundo" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-invest" />O cenário em 21 de setembro de 2026</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Selic vigente", "13,75% ao ano"], ["Decisão do Copom", "corte unânime de 0,25 p.p."],
              ["Sequência", "5 cortes consecutivos"], ["Focus para fim de 2026", "13,50% ao ano"],
              ["Focus para o IPCA 2026", "4,92%"], ["Focus para o dólar 2026", "R$ 5,20"],
            ].map(([rotulo, valor]) => <div key={rotulo} className="border-b border-border/40 pb-2"><p className="text-xs text-muted-foreground">{rotulo}</p><p className="font-bold text-invest">{valor}</p></div>)}
          </div>
          <p className="text-xs text-muted-foreground mt-4">As medianas do Focus são expectativas coletadas pelo Banco Central, não promessas nem metas garantidas.</p>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><Landmark className="h-7 w-7 text-invest" />O que o Copom decidiu e por que isso importa</h2>
        <p>Na reunião encerrada em 16 de setembro, o Comitê de Política Monetária reduziu a Selic de 14% para 13,75% ao ano. Foi a quinta redução seguida de 0,25 ponto percentual. A decisão confirmou um ciclo de flexibilização gradual: o Banco Central reconheceu sinais de moderação da atividade e desaceleração da inflação, mas manteve linguagem cautelosa diante de expectativas ainda acima da meta e de riscos fiscais e externos.</p>
        <p>A Selic é a referência para o custo do dinheiro no país. Ela influencia o CDI, os juros cobrados por bancos, o preço dos títulos públicos, as decisões das empresas e o valor presente de ativos como ações e fundos imobiliários. Isso não significa que um corte de 0,25 ponto seja imediatamente reproduzido no cartão ou no financiamento. Inadimplência, margem bancária, prazo e garantias também formam a taxa cobrada do consumidor.</p>
        <p>Para quem investe, o efeito mais rápido aparece nos produtos pós-fixados. CDBs expressos como percentual do CDI, Tesouro Selic e fundos DI passam a acumular retorno em ritmo ligeiramente menor. Ainda assim, 13,75% representa um patamar nominal elevado. A conclusão responsável não é “a renda fixa acabou”, mas que a comparação precisa considerar retorno líquido, inflação, prazo e risco.</p>
        <p>O Focus divulgado em 21 de setembro trouxe mediana de 13,50% para a Selic no fim de 2026, IPCA de 4,92%, PIB de 1,88% e dólar de R$ 5,20. A pequena distância entre a taxa vigente e a projeção sugere expectativa de cortes adicionais modestos. Contudo, o Focus muda semanalmente conforme os dados; montar uma carteira como se essa trajetória fosse certeza seria trocar planejamento por aposta macroeconômica.</p>

        <h2 className="flex items-center gap-3"><TrendingDown className="h-7 w-7 text-invest" />Como cada investimento reage à Selic de 13,75%</h2>
        <p><strong>Tesouro Selic.</strong> É um título público pós-fixado cuja remuneração acompanha a taxa básica. Costuma ser usado para reserva por combinar liquidez diária e risco de crédito soberano. Pode apresentar pequenas oscilações no resgate antecipado, além de incidência de IR e eventual taxa de custódia segundo as regras vigentes. O valor mostrado na tela antes do vencimento não deve ser tratado como uma linha perfeitamente reta.</p>
        <p><strong>CDB.</strong> É um título emitido por banco. A oferta pode pagar 100%, 105% ou 110% do CDI, por exemplo. Percentual maior não torna automaticamente o produto melhor: é preciso observar liquidez, vencimento, qualidade da instituição e cobertura do FGC. Um CDB de 110% do CDI sem liquidez por três anos não substitui um CDB diário usado como reserva.</p>
        <p><strong>LCI e LCA.</strong> São letras de crédito imobiliário e do agronegócio. Para a pessoa física, a isenção de IR aumenta a competitividade do retorno líquido, mas muitas ofertas têm carência. A comparação correta transforma o percentual do CDI em rendimento líquido equivalente e verifica se o dinheiro pode ficar indisponível pelo prazo exigido.</p>
        <p><strong>Poupança.</strong> Como a Selic está acima de 8,5%, a regra permanece em 0,5% ao mês mais Taxa Referencial. Ela é isenta de IR e simples, porém frequentemente rende menos que alternativas pós-fixadas. Também existe o “aniversário”: sacar antes da data mensal pode fazer o depósito não receber a remuneração daquele ciclo.</p>
        <p><strong>Prefixados e Tesouro IPCA+.</strong> A taxa contratada vale para quem carrega o título até o vencimento e respeita as condições. Antes disso, o preço varia com os juros de mercado. Se as taxas caem, títulos antigos mais generosos tendem a se valorizar; se sobem, tendem a perder preço. Essa marcação a mercado pode gerar ganho ou perda no resgate antecipado.</p>

        <AdInArticle />

        <h2 className="flex items-center gap-3"><Calculator className="h-7 w-7 text-invest" />Quanto rendem R$ 1 mil, R$ 5 mil e R$ 10 mil</h2>
        <p>A tabela usa uma simulação divulgada após o corte, com horizonte de um ano. Para Tesouro Selic e CDB, ela considera IR de 17,5%; para a LCI, isenção de IR. Os valores de R$ 5 mil e R$ 10 mil são escalas matemáticas da estimativa de R$ 1 mil. Na poupança, usamos apenas 0,5% ao mês e não projetamos a TR, que varia. Taxas disponíveis, CDI efetivo, dias úteis, custos e momento do aporte alteram o resultado real.</p>
        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-muted/50"><tr><th className="p-3 text-left">Produto</th><th className="p-3 text-left">R$ 1 mil após 1 ano</th><th className="p-3 text-left">R$ 5 mil</th><th className="p-3 text-left">R$ 10 mil</th><th className="p-3 text-left">Premissa</th></tr></thead>
            <tbody>{SIMULACAO.map((item) => <tr key={item.produto} className="border-t border-border/50"><td className="p-3 font-bold">{item.produto}</td><td className="p-3 text-invest font-bold">{item.mil}</td><td className="p-3">{item.cinco}</td><td className="p-3">{item.dez}</td><td className="p-3 text-muted-foreground">{item.premissa}</td></tr>)}</tbody>
          </table>
        </div>
        <p>A liderança do CDB nessa fotografia depende de ele realmente pagar 110% do CDI e de permanecer aplicado pelo período considerado. A LCI a 85% do CDI supera o Tesouro na simulação graças à isenção. Isso ilustra por que comparar apenas “percentual do CDI” é insuficiente: imposto, prazo e liquidez mudam a classificação.</p>
        <p>Também é importante separar saldo final de lucro. R$ 11.238,70 não representa ganho de R$ 1.238,70 necessariamente em qualquer CDB; é o resultado específico das premissas apresentadas. A instituição pode oferecer percentual diferente, e o CDI diário não é exatamente igual à Selic-meta. Use a tabela para compreender ordem de grandeza, nunca como oferta ou promessa.</p>

        <h2 className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-invest" />IR, IOF, FGC e inflação: o retorno que realmente importa</h2>
        <p>Em Tesouro e CDB, o IR sobre o lucro segue a tabela regressiva: 22,5% até 180 dias; 20% de 181 a 360; 17,5% de 361 a 720; e 15% acima de 720 dias. Resgates antes de 30 dias também podem sofrer IOF regressivo. Trocar de produto repetidamente reinicia o prazo tributário e pode destruir uma vantagem pequena de taxa.</p>
        <p>O FGC cobre produtos elegíveis, como CDB, LCI, LCA e poupança, até R$ 250 mil por CPF ou CNPJ por instituição ou conglomerado, incluindo principal e juros, com teto global de R$ 1 milhão a cada período de quatro anos. Tesouro Direto e fundos não são cobertos pelo FGC. No Tesouro, o devedor é a União; em fundos, os ativos pertencem à carteira do fundo e há riscos próprios.</p>
        <p>Retorno real é o ganho depois da inflação. Se uma aplicação entrega 11% líquidos e a inflação no período é 5%, o ganho real aproximado não é simplesmente seis pontos quando calculado com precisão: divide-se 1,11 por 1,05 e subtrai-se um. O resultado seria perto de 5,7%. Essa conta ajuda a comparar poder de compra, especialmente em objetivos longos.</p>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><PiggyBank className="h-7 w-7 text-invest" />Onde investir agora, conforme o objetivo</h2>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {ESCOLHAS.map((item) => <div key={item.titulo} className="p-5 rounded-xl border border-invest/30 bg-invest/5"><h3 className="font-bold text-invest">{item.titulo}</h3><p className="font-medium mt-2">{item.produto}</p><p className="text-sm text-muted-foreground mt-2">{item.detalhe}</p></div>)}
        </div>
        <p>Para a reserva, liquidez e estabilidade vêm antes da maior taxa. Para uma viagem em 18 meses, o vencimento precisa chegar antes da compra. Para aposentadoria, títulos IPCA+ podem proteger poder de compra, desde que o prazo seja compatível e a oscilação seja compreendida. O mesmo produto pode ser adequado em um objetivo e inadequado em outro.</p>
        <p>Uma estratégia simples é dividir por datas. Dinheiro de uso imediato fica pós-fixado e líquido. Metas com data definida recebem títulos que vencem perto dessa data. Patrimônio de longo prazo pode combinar indexadores e classes de ativos. Essa estrutura reduz a tentação de prever cada reunião do Copom e transforma a carteira em ferramenta de planejamento.</p>

        <h2 className="flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-invest" />Cinco erros comuns durante a queda dos juros</h2>
        <ul>
          <li><strong>Sair de toda renda fixa:</strong> um corte pequeno não elimina o retorno real nem a função defensiva da classe.</li>
          <li><strong>Travar prazo sem olhar a liquidez:</strong> uma taxa atraente pode virar problema quando surge uma emergência.</li>
          <li><strong>Comprar IPCA+ para vender cedo:</strong> a marcação a mercado pode produzir perda mesmo em um título conservador no vencimento.</li>
          <li><strong>Ignorar risco do emissor:</strong> taxa muito acima do mercado costuma remunerar risco ou falta de liquidez.</li>
          <li><strong>Comparar bruto com líquido:</strong> isenção, IR, IOF e custos podem inverter o resultado entre produtos.</li>
        </ul>
        <p>Outro erro é perseguir a taxa da semana e abandonar o plano. Trocar um CDB bom por outro poucos décimos acima pode antecipar IR, criar carência e aumentar concentração. Antes de movimentar, calcule o ganho líquido adicional em reais e confronte com os riscos e o trabalho envolvidos.</p>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Perguntas frequentes</h2>
        <p><strong>Qual é a Selic atual?</strong> A Selic-meta está em 13,75% ao ano desde a decisão do Copom de 16 de setembro de 2026.</p>
        <p><strong>A Selic vai cair novamente?</strong> O Focus de 21 de setembro indicava mediana de 13,50% no fim de 2026, mas projeções mudam e não garantem a próxima decisão.</p>
        <p><strong>Qual rende mais: Tesouro Selic ou CDB?</strong> Depende do percentual do CDI, prazo, imposto, custos, liquidez e risco do banco. Na simulação, o CDB a 110% do CDI ficou à frente.</p>
        <p><strong>LCI a 85% do CDI é melhor que CDB a 100%?</strong> Pode ser no líquido pela isenção, mas carência e disponibilidade precisam ser comparadas.</p>
        <p><strong>Vale comprar prefixado agora?</strong> Pode fazer sentido para uma meta com vencimento compatível. Não é adequado quando há chance de resgate antecipado sem tolerância a oscilações.</p>
        <p><strong>A poupança está protegida pelo FGC?</strong> Sim, dentro dos limites do fundo, mas isso não significa que seja a opção de maior retorno.</p>
        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-sm text-muted-foreground flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-invest shrink-0 mt-0.5" /><span><strong>Aviso:</strong> conteúdo educativo, não recomendação individual. Taxas e regras podem mudar; confirme condições no emissor e avalie seu perfil, prazo e objetivo.</span></div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: a Selic caiu, mas a disciplina continua rendendo mais">
        <p>O investidor costuma tratar cada reunião do Copom como largada para trocar toda a carteira. Não é. A passagem de 14% para 13,75% reduz um pouco o retorno dos pós-fixados, mas não muda a função da reserva nem transforma risco em obrigação. A melhor resposta é revisar prazos, não correr atrás do ativo que mais subiu.</p>
        <p className="mt-2">Minha leitura prática é manter a reserva líquida, calcular o retorno depois dos impostos e alongar apenas o dinheiro que já tem data distante. Quem tenta acertar cada corte pode perder mais com giro, carência e marcação a mercado do que ganhar com uma taxa ligeiramente maior.</p>
      </EditorialTake>
      <ArticleSources category="invest" sources={[
        { title: "Comunicados do Copom", url: "https://www.bcb.gov.br/controleinflacao/comunicadoscopom", publisher: "Banco Central do Brasil", accessedAt: "Setembro 2026" },
        { title: "Relatório Focus de 18 de setembro de 2026", url: "https://www.bcb.gov.br/content/focus/focus/R20260918.pdf", publisher: "Banco Central do Brasil", accessedAt: "Setembro 2026" },
        { title: "Taxas de juros básicas — Histórico", url: "https://www.bcb.gov.br/controleinflacao/historicotaxasjuros", publisher: "Banco Central do Brasil", accessedAt: "Setembro 2026" },
        { title: "Selic: Copom reduz taxa de juros para 13,75% ao ano", url: "https://g1.globo.com/economia/noticia/2026/09/16/copom-reduz-a-taxa-basica-de-juros-da-economia-a-selic-de-14percent-para-1375percent-ao-ano.ghtml", publisher: "g1", accessedAt: "Setembro 2026" },
        { title: "Quanto rendem R$ 1.000 na poupança, CDB, LCI e Tesouro", url: "https://economia.uol.com.br/mais/ultimas-noticias/2026/09/18/quanto-rendem-r-1000-na-poupanca-cdb-lci-e-tesouro-com-a-selic-a-1375.htm", publisher: "UOL Economia", accessedAt: "Setembro 2026" },
        { title: "Sobre a garantia do FGC", url: "https://www.fgc.org.br/sobre-garantia-fgc", publisher: "Fundo Garantidor de Créditos", accessedAt: "Setembro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default Selic14OndeInvestir2026;