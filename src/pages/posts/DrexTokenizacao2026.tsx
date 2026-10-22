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
import { AlertTriangle, BarChart3, Calendar, CheckCircle2, Clock, Coins, HelpCircle, Landmark, Layers, Lock, ShieldCheck, User, Zap } from "lucide-react";
import heroImg from "@/assets/drex-tokenizacao-ativos-brasil-2026.webp";

const SLUG = "drex-tokenizacao-ativos-brasil-2026";
const TITLE = "DREX e Tokenização de Ativos no Brasil: O Que Muda para o Seu Dinheiro";

const PIX_DREX = [
  { item: "O que é", pix: "Meio de pagamento instantâneo", drex: "Projeto de infraestrutura para ativos e contratos digitais" },
  { item: "Status em out/2026", pix: "Em operação desde nov/2020", drex: "Plataforma-piloto desligada; nova fase em desenho" },
  { item: "Para o cidadão", pix: "Usado todo dia no app do banco", drex: "Nenhum produto disponível ao público" },
  { item: "Foco atual", pix: "Pix Automático, parcelado e por aproximação", drex: "Registro e reconciliação de garantias (gravames)" },
  { item: "Tecnologia", pix: "Sistema centralizado do BC (SPI)", drex: "Agnóstica: sem compromisso com blockchain" },
];

const TIMELINE = [
  { data: "2020–2022", fato: "BC estuda uma moeda digital e realiza o LIFT Challenge Real Digital com propostas do mercado." },
  { data: "Mar 2023", fato: "Começa a Fase 1 do piloto, com 16 consórcios de bancos, cooperativas e empresas de tecnologia em rede Hyperledger Besu." },
  { data: "Ago 2023", fato: "O projeto ganha o nome Drex." },
  { data: "2024–2025", fato: "Fase 2 testa 13 casos de uso: crédito com garantia, imóveis, veículos, títulos públicos, recebíveis e outros." },
  { data: "Ago 2025", fato: "BC informa que a próxima etapa deixará a tecnologia de registro distribuído de lado e mirará a reconciliação de gravames." },
  { data: "Nov 2025", fato: "BC desliga a plataforma das duas primeiras fases; Galípolo diz que a tecnologia testada \"não se revelou viável\", mas que o projeto continua." },
  { data: "2026", fato: "Nova fase com abordagem agnóstica em tecnologia; tokenização entra no planejamento estratégico 2026–2029. Sem data oficial de lançamento ao público." },
];

const FAQ = [
  { q: "O Drex é uma criptomoeda?", a: "Não. A proposta sempre foi uma representação digital do real sob regulação do Banco Central, com valor igual ao real. Não há oferta limitada, mineração nem variação especulativa como no Bitcoin." },
  { q: "O Drex vai substituir o Pix?", a: "Não. O Pix é um meio de pagamento e segue em operação e expansão. O Drex era uma plataforma para contratos e ativos digitais, uma camada diferente." },
  { q: "Já posso usar o Drex?", a: "Não. Em outubro de 2026 não existe produto Drex para pessoas físicas. Qualquer app, site ou mensagem que ofereça \"comprar Drex\" é golpe." },
  { q: "O Drex acabou?", a: "A plataforma em blockchain usada nos pilotos foi desligada em novembro de 2025, e a ideia de um real digital ao consumidor foi deixada de lado por ora. O BC mantém uma nova fase focada em garantias e diz que o projeto não foi abandonado." },
  { q: "O que é tokenização de ativos?", a: "É representar um ativo — título, recebível, imóvel, cota — como um registro digital que pode ser fracionado, transferido e liquidado com regras automáticas." },
  { q: "Tokens de investimento são seguros?", a: "Depende de quem emite e de qual regra se aplica. Ofertas de valores mobiliários precisam seguir a CVM; confira o registro da plataforma e leia os riscos de crédito e de liquidez." },
  { q: "O que é reconciliação de gravames?", a: "É conferir, em um só lugar, se um bem (imóvel, carro, aplicação) já está dado em garantia. Isso evita usar o mesmo bem duas vezes e pode baratear o crédito com garantia." },
];

const DrexTokenizacao2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Banco Central · Tokenização · Pix</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">DREX e Tokenização de Ativos no Brasil: O Que Muda para o Seu Dinheiro</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O "real digital" virou manchete, depois mudou de rumo. Explicamos o que o Drex é (e nunca foi), por que ele não é Bitcoin nem substitui o Pix, o que aconteceu com os pilotos e como a tokenização ainda pode baratear títulos, crédito e recebíveis.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" width={1536} height={864} src={heroImg} alt="Moeda digital de real conectada a tokens de imóvel, carro, título público e recebível" className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">Ilustração editorial criada para este artigo; não é imagem oficial do Banco Central.</figcaption>
      </figure>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-invest/10 to-background rounded-xl border border-invest/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-invest" />Resumo rápido</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["É criptomoeda?", "Não"], ["Substitui o Pix?", "Não"],
              ["Disponível ao público?", "Não, em out/2026"], ["Plataforma blockchain dos pilotos", "Desligada em nov/2025"],
              ["Foco da nova fase", "Garantias (gravames)"], ["Tokenização", "Segue no plano do BC 2026–2029"],
            ].map(([rotulo, valor]) => <div key={rotulo} className="border-b border-border/40 pb-2"><p className="text-xs text-muted-foreground">{rotulo}</p><p className="font-bold text-invest">{valor}</p></div>)}
          </div>
        </div>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Por que o Drex confunde tanta gente</h2>
        <p>Poucos projetos do Banco Central geraram tanta curiosidade e tanta desinformação quanto o Drex. Entre 2023 e 2025, ele foi apresentado em reportagens como "o real digital", "o novo Pix" ou até "a criptomoeda do governo". Em grupos de mensagens, circularam correntes dizendo que o Drex iria confiscar poupanças, acabar com o dinheiro em espécie ou vigiar cada compra. Ao mesmo tempo, golpistas criaram sites falsos oferecendo "pré-venda de Drex".</p>
        <p>A realidade é mais simples e, em certo sentido, mais interessante. O Drex nunca foi uma criptomoeda, nunca foi pensado para substituir o Pix e, em outubro de 2026, não existe como produto para o público. O que ele foi — e em parte ainda é — é um grande laboratório para descobrir como bancos, corretoras e infraestruturas de mercado poderiam negociar ativos digitais com segurança, rapidez e custo menor.</p>
        <p>Neste guia, separamos o que é fato confirmado do que era promessa, mostramos a linha do tempo oficial e explicamos o que a tokenização pode mudar no seu bolso, com ou sem o nome Drex.</p>

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 text-invest" />O que é o Drex e por que ele não é Bitcoin</h2>
        <p>Na origem, o Drex era a proposta brasileira de uma CBDC, sigla em inglês para moeda digital de banco central. A ideia era que o real tivesse uma versão programável, registrada em uma rede compartilhada entre instituições autorizadas. Os bancos emitiriam depósitos tokenizados lastreados em reais, e o Banco Central usaria uma versão de atacado para liquidar operações entre instituições.</p>
        <p>Isso é muito diferente do Bitcoin. O Bitcoin não tem emissor central, tem oferta limitada a 21 milhões de unidades, é criado por mineração e seu preço oscila livremente conforme oferta e demanda. Já o Drex teria sempre o mesmo valor do real — um Drex equivaleria a um real —, seria emitido e supervisionado pelo Banco Central e circularia apenas por instituições reguladas. Não haveria espaço para especulação com o "preço do Drex", porque ele não teria preço próprio.</p>
        <p>Em 2025, o próprio presidente do Banco Central, Gabriel Galípolo, afirmou que o Drex "não é exatamente uma CBDC, como a literatura trata". A frase marcou a mudança de foco: menos uma moeda nova para o consumidor e mais uma infraestrutura para o sistema financeiro.</p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          <div className="p-5 rounded-xl border border-invest/30 bg-invest/5">
            <p className="font-display font-bold text-invest mb-2">Bitcoin</p>
            <ul className="text-sm space-y-1 text-foreground/90"><li>Sem emissor central</li><li>Oferta limitada</li><li>Preço volátil</li><li>Rede pública e aberta</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-secondary/40 bg-secondary/10">
            <p className="font-display font-bold text-invest mb-2">Drex (proposta)</p>
            <ul className="text-sm space-y-1 text-foreground/90"><li>Supervisionado pelo Banco Central</li><li>Valor igual ao real</li><li>Sem especulação</li><li>Rede restrita a instituições reguladas</li></ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3"><Zap className="h-7 w-7 text-invest" />Pix x Drex: a diferença prática</h2>
        <p>O Pix resolve um problema: mover dinheiro de uma conta para outra em segundos, a qualquer hora, com custo baixo. Ele é um meio de pagamento. Desde o lançamento, em novembro de 2020, ganhou novas funções, como o Pix Automático para contas recorrentes, e virou o meio de pagamento mais usado do país.</p>
        <p>O Drex mirava outra coisa: a negociação de ativos com regras automáticas, os chamados contratos inteligentes. O conceito central era a liquidação atômica, também chamada de "entrega contra pagamento". Imagine vender um título: hoje, o dinheiro e o título passam por sistemas diferentes e há risco de um lado entregar e o outro não. Numa liquidação atômica, as duas pontas acontecem juntas ou nenhuma acontece. Isso reduz risco, intermediários e prazo.</p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-invest/30">
          <table className="w-full text-sm">
            <thead className="bg-invest/10"><tr><th className="p-3 text-left">Aspecto</th><th className="p-3 text-left">Pix</th><th className="p-3 text-left">Drex</th></tr></thead>
            <tbody>
              {PIX_DREX.map((r) => <tr key={r.item} className="border-t border-border/40"><td className="p-3 font-semibold">{r.item}</td><td className="p-3">{r.pix}</td><td className="p-3">{r.drex}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p>Em resumo: o Pix continua sendo o jeito de pagar e receber. O Drex nunca concorreu com ele; seria uma camada por baixo, voltada a investimentos e crédito.</p>

        <AdInArticle />

        <h2 className="flex items-center gap-3"><Layers className="h-7 w-7 text-invest" />Tokenização: como pode baratear títulos, crédito e recebíveis</h2>
        <p>Tokenizar um ativo é transformar a propriedade dele em um registro digital que pode ser dividido em pedaços, transferido com rapidez e programado com regras. A tokenização existe independentemente do Drex: plataformas reguladas pela CVM já emitem tokens de recebíveis e de crédito no Brasil, e grandes gestoras no exterior oferecem fundos tokenizados de títulos públicos.</p>
        <h3>Títulos públicos fracionados</h3>
        <p>Um dos casos testados nos pilotos foi a negociação de títulos públicos federais tokenizados entre pessoas, com liquidação instantânea. O Tesouro Direto já permite aplicar a partir de cerca de 1% do valor de um título, o que torna o ganho de "fracionamento" menor para o pequeno investidor do que parece. O potencial maior está em reduzir custos de custódia e permitir negociação a qualquer hora, algo que ainda depende de regulação e de infraestrutura.</p>
        <h3>Crédito privado e recebíveis</h3>
        <p>Pequenas e médias empresas costumam pagar caro para antecipar recebíveis, como duplicatas e faturas de cartão. Com registros tokenizados, um investidor poderia comprar uma fração desses recebíveis e a empresa receberia antes, com menos intermediários. No Brasil, isso já acontece em plataformas de investimento participativo sob a Resolução CVM 88, que regula ofertas de pequeno porte, inclusive as tokenizadas. O risco, porém, continua sendo o de calote: tecnologia não transforma um devedor ruim em bom pagador.</p>
        <h3>Imóveis, veículos e garantias</h3>
        <p>Outro grupo de testes envolveu imóveis e carros usados como garantia. Hoje, conferir se um bem já está penhorado ou alienado exige consultas a vários cartórios e registros. Se essa checagem fosse instantânea e confiável, os bancos teriam menos risco e poderiam cobrar juros menores no crédito com garantia. É justamente esse ponto que se tornou o foco da nova fase do Drex.</p>

        <h2 className="flex items-center gap-3"><Lock className="h-7 w-7 text-invest" />Privacidade: o obstáculo que mudou o projeto</h2>
        <p>Uma rede compartilhada entre dezenas de instituições traz um dilema: como permitir que contratos inteligentes conversem entre si sem que um banco veja os saldos e as operações dos clientes do concorrente? O sigilo bancário e a Lei Geral de Proteção de Dados exigem que essas informações fiquem protegidas.</p>
        <p>Na Fase 1, o Banco Central testou soluções de privacidade sobre a rede Hyperledger Besu. Segundo o coordenador do projeto, Fábio Araújo, nenhuma atendeu plenamente aos requisitos sem sacrificar a programabilidade e a integração entre sistemas. Somaram-se custos elevados, e em agosto de 2025 o BC anunciou que a etapa seguinte deixaria a tecnologia de registro distribuído de lado. Em novembro de 2025, a plataforma das duas primeiras fases foi desligada.</p>
        <p>Para quem temia vigilância, vale registrar: o modelo testado sempre previa que os dados ficassem com as instituições financeiras, como hoje, sob as mesmas regras de sigilo. E, como não há Drex ao público, nenhuma transação sua passa por ele.</p>

        <h2 className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-invest" />Custódia e segurança: quem guarda o quê</h2>
        <p>Nos pilotos, quem guardava os ativos digitais eram os bancos e instituições autorizadas, do mesmo modo que hoje guardam seu dinheiro e seus investimentos. O cliente não teria uma "carteira de criptomoeda" com chave privada sob sua responsabilidade. Isso reduz o risco de perder tudo por esquecer uma senha, mas mantém o papel dos intermediários regulados.</p>
        <p>Em paralelo, o Banco Central publicou em 2025 regras para as prestadoras de serviços de ativos virtuais, incluindo stablecoins, ampliando a supervisão sobre corretoras de cripto. Esse movimento mostra que o BC passou a enxergar moedas digitais privadas reguladas e depósitos tokenizados como peças do ecossistema, em vez de apostar tudo em uma moeda própria.</p>

        <div className="not-prose my-8 p-5 rounded-xl border border-destructive/40 bg-destructive/10 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm"><strong>Golpe em circulação:</strong> não existe "comprar Drex", "pré-venda de Drex" ou "carteira Drex" para pessoas físicas. O Banco Central não envia mensagens pedindo dados ou depósitos. Desconfie de qualquer oferta desse tipo.</p>
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><Landmark className="h-7 w-7 text-invest" />Cronograma oficial: da ideia à fase atual</h2>
        <p>Abaixo, a linha do tempo com base em comunicados do Banco Central e na cobertura de veículos especializados. Até a data deste artigo, o BC não divulgou data de lançamento de nenhum serviço Drex ao público.</p>
        <ol className="not-prose my-8 relative border-l-2 border-invest/40 ml-3 space-y-5">
          {TIMELINE.map((t) => (
            <li key={t.data} className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-invest" />
              <p className="font-display font-bold text-invest">{t.data}</p>
              <p className="text-sm text-foreground/90">{t.fato}</p>
            </li>
          ))}
        </ol>
        <p>No início de 2026, o Banco Central apresentou seu planejamento estratégico para o ciclo 2026–2029, que coloca a tokenização de ativos reais e a reestruturação do Drex entre as prioridades. Em maio de 2026, um superintendente da CVM observou que, sem avanço de uma moeda digital do BC, stablecoins reguladas podem ocupar parte desse espaço na liquidação de operações tokenizadas. Ou seja, o debate continua aberto.</p>

        <h2 className="flex items-center gap-3"><CheckCircle2 className="h-7 w-7 text-invest" />O que muda (e o que não muda) para você hoje</h2>
        <p>Na prática, nada muda na sua conta bancária neste momento. Seu Pix continua igual, seus investimentos no Tesouro Direto e em CDBs seguem nas mesmas regras e o dinheiro em espécie continua valendo. A mudança é de médio prazo e deve chegar de forma silenciosa: crédito com garantia mais barato se a reconciliação de gravames funcionar, mais produtos tokenizados regulados e, possivelmente, novas formas de negociar títulos.</p>
        <div className="not-prose my-8 p-6 rounded-xl border border-invest/30 bg-gradient-to-br from-invest/10 to-background">
          <p className="font-display font-bold text-invest mb-3">Checklist do investidor</p>
          <ul className="space-y-2 text-sm">
            {[
              "Ignore qualquer oferta de \"comprar Drex\": é golpe.",
              "Antes de investir em tokens, confira o registro da plataforma na CVM.",
              "Leia o risco de crédito: token de recebível pode dar calote como qualquer dívida.",
              "Verifique a liquidez: vender um token antes do prazo pode ser difícil.",
              "Compare custos com o Tesouro Direto, que já aceita valores baixos.",
              "Acompanhe comunicados oficiais em bcb.gov.br, não em correntes de mensagem.",
            ].map((i) => <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-invest shrink-0 mt-0.5" />{i}</li>)}
          </ul>
        </div>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-invest" />Perguntas frequentes</h2>
        <div className="not-prose grid gap-4 my-6">
          {FAQ.map((f) => (
            <div key={f.q} className="p-5 rounded-xl border border-border bg-card/50">
              <p className="font-bold text-invest mb-2">{f.q}</p>
              <p className="text-sm text-foreground/90">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-8 p-4 bg-secondary rounded-xl text-sm text-muted-foreground flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-invest shrink-0 mt-0.5" /><span><strong>Aviso:</strong> conteúdo educativo, não recomendação de investimento. O projeto Drex está em redefinição; confira sempre os comunicados oficiais do Banco Central e da CVM.</span></div>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o Drex encolheu, mas a ideia não morreu">
        <p>Confesso que, em 2023, eu esperava ver o Drex no app do banco até 2025. Não aconteceu, e acho que o Banco Central foi honesto ao admitir que a tecnologia testada não entregava privacidade e custo aceitáveis. Melhor recuar do que lançar algo que exponha dados de milhões de brasileiros.</p>
        <p className="mt-2">O que me anima é que o problema que o Drex queria resolver continua real: crédito com garantia caro e pouco acesso de pequenos investidores a recebíveis e crédito privado. Se a fase de gravames destravar juros menores em empréstimos com imóvel ou carro, isso vai valer mais para o bolso do brasileiro do que qualquer "real digital" chamativo. Até lá, minha recomendação é simples: fuja de quem vende Drex e trate tokens de investimento com o mesmo cuidado que você teria com qualquer título de crédito.</p>
      </EditorialTake>
      <ArticleSources category="invest" sources={[
        { title: "Drex – Real Digital", url: "https://www.bcb.gov.br/estabilidadefinanceira/drex", publisher: "Banco Central do Brasil", accessedAt: "Outubro 2026" },
        { title: "Piloto Drex", url: "https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex", publisher: "Banco Central do Brasil", accessedAt: "Outubro 2026" },
        { title: "Drex abandonará blockchain na próxima fase para entregar solução em 2026", url: "https://valor.globo.com/financas/criptomoedas/noticia/2025/08/07/exclusivo-drex-abandonara-blockchain-na-proxima-fase-para-entregar-solucao-em-2026.ghtml", publisher: "Valor Econômico", accessedAt: "Outubro 2026" },
        { title: "BC decide desligar plataforma do Drex e abre caminho para stablecoins", url: "https://valor.globo.com/financas/criptomoedas/noticia/2025/11/04/banco-central-decide-desligar-plataforma-do-drex.ghtml", publisher: "Valor Econômico", accessedAt: "Outubro 2026" },
        { title: "Galípolo: tecnologia do Drex não se revelou viável, mas projeto não acabou", url: "https://exame.com/future-of-money/galipolo-tecnologia-do-drex-nao-se-revelou-viavel-mas-projeto-nao-acabou/", publisher: "Exame", accessedAt: "Outubro 2026" },
        { title: "BC desativa rede do Drex e inicia fase 3 com abordagem agnóstica em 2026", url: "https://www.estadao.com.br/economia/banco-central-desligara-blockchain-drex-npr/", publisher: "Estadão", accessedAt: "Outubro 2026" },
        { title: "Drex e tokenização serão o centro da estratégia do Banco Central para os próximos anos", url: "https://portaldobitcoin.uol.com.br/drex-e-tokenizacao-serao-o-centro-da-estrategia-do-banco-central-para-os-proximos-anos/", publisher: "Portal do Bitcoin", accessedAt: "Outubro 2026" },
        { title: "Stablecoins podem ocupar espaço do Drex sem avanço de uma CBDC, afirma superintendente da CVM", url: "https://exame.com/future-of-money/stablecoins-podem-ocupar-espaco-do-drex-sem-avanco-de-uma-cbdc-afirma-superintendente-da-cvm/", publisher: "Exame", accessedAt: "Outubro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default DrexTokenizacao2026;
