import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, DollarSign, TrendingUp, BarChart3, CheckCircle2, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-precos.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gta-vi-precos-brasil-dolar-real-2026";
const TITLE = "Preço de GTA VI no Brasil: Valores Oficiais em Dólar e Real, Edições e Comparação com a Indústria";

// Preços OFICIAIS confirmados pela Rockstar em 24/06/2026 (PCMag, The Verge,
// Variety, Forbes, Gematsu, IGN) e pelas próprias lojas brasileiras
// (PlayStation Store BR, Xbox Store BR) na abertura de pré-venda em 25/06/2026.
// Fontes regionais BR: TechTudo, PSX Brasil, Época Negócios.
const precoOficial = [
  { edicao: "Standard Edition (digital)", usd: "US$ 79,99", brl: "R$ 449,90", obs: "Disponível na PS Store, Xbox Store e Rockstar Store" },
  { edicao: "Standard Edition (mídia física com voucher)", usd: "US$ 79,99", brl: "R$ 449,90", obs: "Caixa sem disco — voucher para resgate digital. Amazon, Kabum e PS Direct" },
  { edicao: "Ultimate Edition (digital)", usd: "US$ 99,99", brl: "R$ 549,90", obs: "Inclui bônus de história + frota de veículos + skins de arma" },
];

// Histórico VERIFICADO de preços de lançamento da Take-Two/Rockstar e
// referências do mercado brasileiro nas lojas oficiais (sem promoção).
const historico = [
  { jogo: "GTA V", ano: 2013, lancamentoUS: "US$ 59,99", lancamentoBR: "R$ 149,90" },
  { jogo: "Red Dead Redemption 2 (Standard)", ano: 2018, lancamentoUS: "US$ 59,99", lancamentoBR: "R$ 249,90" },
  { jogo: "GTA V (PS5/XSX Expanded)", ano: 2022, lancamentoUS: "US$ 39,99", lancamentoBR: "R$ 149,90" },
  { jogo: "NBA 2K25 (Take-Two)", ano: 2024, lancamentoUS: "US$ 69,99", lancamentoBR: "R$ 349,90" },
  { jogo: "Mario Kart World (Nintendo, ref. US$ 79,99)", ano: 2025, lancamentoUS: "US$ 79,99", lancamentoBR: "R$ 439,90" },
  { jogo: "GTA VI (Standard) — oficial", ano: 2026, lancamentoUS: "US$ 79,99", lancamentoBR: "R$ 449,90" },
];

const GtaViPrecosBrasilDolar2026 = () => {
  useEffect(() => { trackArticleRead(SLUG, TITLE, "geek"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Preços oficiais · Dólar e Real
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Junho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI preços oficiais — dólar e real sob luz neon de Vice City" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O preço de <strong>Grand Theft Auto VI</strong> deixou de ser especulação. Em 24 de junho de 2026 a Rockstar
          Games confirmou os valores oficiais e, à meia-noite do dia 25 de junho, as três principais lojas digitais —
          PlayStation Store, Xbox Store e Rockstar Store — abriram a pré-venda mundial. Para o jogador brasileiro, isso
          significa números concretos para colocar no orçamento, sem precisar adivinhar conversão de câmbio.
        </p>

        <div className="not-prose my-6 rounded-xl border border-pink-500/40 bg-pink-500/10 p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-pink-200 font-bold">
            <CheckCircle2 className="h-5 w-5" /> Resumo oficial confirmado pela Rockstar
          </div>
          <ul className="text-sm leading-relaxed list-disc list-inside space-y-1 text-foreground/90">
            <li><strong>Standard Edition:</strong> US$ 79,99 nos EUA / <strong>R$ 449,90</strong> no Brasil (PS Store e Xbox Store).</li>
            <li><strong>Ultimate Edition:</strong> US$ 99,99 nos EUA / <strong>R$ 549,90</strong> no Brasil.</li>
            <li><strong>Pré-venda aberta:</strong> meia-noite de 25 de junho de 2026, horário local.</li>
            <li><strong>Pré-carregamento (preload):</strong> a partir de 12 de novembro de 2026.</li>
            <li><strong>Lançamento mundial:</strong> 19 de novembro de 2026 — PS5 e Xbox Series X|S.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-pink-400" /> Tabela oficial: o que cada edição custa
        </h2>
        <p>
          As duas edições anunciadas pela Rockstar são <strong>Standard</strong> e <strong>Ultimate</strong>. A versão
          física de mídia comercializada nos varejistas oficiais (Amazon, Kabum, PS Direct e parceiros) não contém
          disco: a caixa traz apenas um voucher de resgate na loja digital do console correspondente. O preço, tanto na
          PlayStation Store quanto na Xbox Store brasileiras, é idêntico em qualquer canal.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card table-fixed">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="w-2/5 text-left py-3 px-4 font-bold">Edição</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">USD</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">BRL</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">Observação</th>
              </tr>
            </thead>
            <tbody>
              {precoOficial.map((p, i) => (
                <tr key={p.edicao} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{p.edicao}</td>
                  <td className="py-3 px-4 break-words">{p.usd}</td>
                  <td className="py-3 px-4 text-pink-300 break-words">{p.brl}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs break-words">{p.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Não existe edição Premium intermediária, nem Collector's Box física tradicional da Rockstar para GTA VI até o
          momento da abertura de pré-venda. A editora optou por uma estrutura enxuta de apenas duas SKUs, o que reduz
          confusão na hora da compra e centraliza todos os bônus extras na Ultimate.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-pink-400" /> Como GTA VI se compara ao próprio histórico
        </h2>
        <p>
          Olhar o histórico recente da Take-Two e do mercado AAA mostra que o salto de preço do Standard, embora
          significativo, segue um movimento já em curso na indústria desde 2023. A tabela abaixo lista os preços de
          lançamento oficiais nas lojas brasileiras (sem promoção, valor pleno na semana de lançamento):
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="text-left py-3 px-4 font-bold">Jogo</th>
                <th className="text-left py-3 px-4 font-bold">Ano</th>
                <th className="text-left py-3 px-4 font-bold">Preço EUA</th>
                <th className="text-left py-3 px-4 font-bold">Preço Brasil</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((h, i) => (
                <tr key={h.jogo} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{h.jogo}</td>
                  <td className="py-3 px-4 text-muted-foreground">{h.ano}</td>
                  <td className="py-3 px-4">{h.lancamentoUS}</td>
                  <td className="py-3 px-4 text-pink-300">{h.lancamentoBR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dois pontos saltam da comparação. Primeiro, o patamar de <strong>US$ 79,99</strong> não é inédito: a Nintendo
          adotou esse preço nos lançamentos do Switch 2 (Mario Kart World) e a Microsoft já cobrou o mesmo valor por
          Senua's Saga: Hellblade II. GTA VI é o primeiro grande lançamento da Take-Two nesse patamar — em linha com o
          posicionamento público do CEO Strauss Zelnick sobre "preço de valor excepcional". Segundo, a regionalização
          brasileira do Standard (US$ 79,99 → R$ 449,90) corresponde a um multiplicador efetivo de aproximadamente
          <strong> 5,63</strong>, condizente com o câmbio comercial do dólar no fim de junho de 2026 e bastante próximo
          do que a Nintendo praticou no Switch 2.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-pink-400" /> O que vem na Ultimate Edition (R$ 549,90)
        </h2>
        <p>
          A Ultimate Edition custa <strong>R$ 100 a mais</strong> que a Standard no Brasil (US$ 20 a mais nos EUA) e
          entrega um pacote significativo de bônus de história e cosméticos, todos aplicáveis tanto ao modo
          single-player quanto ao GTA Online VI quando o multiplayer for ativado. Segundo o anúncio oficial da
          Rockstar, a Ultimate inclui:
        </p>
        <ul>
          <li><strong>Frota de veículos exclusivos:</strong> '67 Vapid Dominator Buggy, '95 Grotti Cheetah, Vapid Ganado, moto Dinka Enduro e barco Shitzu Squalo.</li>
          <li><strong>Armas premium:</strong> revólveres Hawk &amp; Little Morgan com skins exclusivas.</li>
          <li><strong>Locais e estabelecimentos:</strong> acesso ao Paradise Garage, à oficina Rideout Customs e ao salão Unissex Sara's.</li>
          <li><strong>Coleção clássica de carros</strong> + skins exclusivas para as armas Girardi ES9 e Klose K17.</li>
          <li><strong>Pacote de roupas e tatuagens</strong> únicos para Jason e Lucia.</li>
        </ul>
        <p>
          A decisão de pagar a diferença depende essencialmente do perfil de jogo. Quem joga a campanha uma vez e parte
          para outro jogo, a Standard cumpre. Quem pretende investir centenas de horas no mundo aberto e migrar para o
          GTA Online VI quando ele abrir, a Ultimate dilui o custo extra ao longo de muito tempo de jogo. Vale notar
          que, segundo a Rockstar, nenhum dos bônus da Ultimate altera a história principal nem oferece vantagem
          competitiva relevante no online — todos são cosméticos ou de conveniência.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-pink-400" /> Por que o preço pareceu "alto" no Brasil
        </h2>
        <p>
          O choque de preço, especialmente comparado a GTA V (lançado a R$ 149,90 em 2013), tem três componentes que
          merecem ser separados. O primeiro é o <strong>salto de patamar global</strong>: a indústria saiu de US$ 59,99
          (PS3/Xbox 360) para US$ 69,99 (PS5/Xbox Series, 2020) e agora US$ 79,99 (lançamentos premium 2025–2026). Esse
          movimento aconteceu em USD, antes do câmbio entrar na conta. O segundo é o <strong>câmbio</strong>: em 2013,
          o dólar estava por volta de R$ 2,17; em junho de 2026, está próximo de R$ 5,40 a R$ 5,55. Mesmo sem reajuste
          de patamar, a conversão sozinha mais que dobraria o preço em real.
        </p>
        <p>
          O terceiro componente é a <strong>regionalização</strong>, e aqui há uma boa notícia: a Take-Two continua
          praticando desconto regional. Uma conversão direta de US$ 79,99 com dólar a R$ 5,55 daria R$ 444 antes de
          impostos — e o preço oficial é R$ 449,90, ou seja, praticamente paridade técnica. Isso é significativamente
          melhor do que a média de jogos AAA importados, que costumam aplicar markup brasileiro de 20% a 30% acima da
          conversão direta. Para um jogo do porte de GTA VI, manter a paridade com a conversão técnica é uma decisão
          comercial deliberada da Take-Two para maximizar volume no mercado latino-americano.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Vale a pena pagar parcelado?</h2>
        <p>
          A PlayStation Store brasileira aceita parcelamento em cartão de crédito, geralmente em até 12x sem juros para
          compras acima de R$ 100, conforme o cartão e a operadora. Para a Standard a R$ 449,90, isso significa
          parcelas de aproximadamente <strong>R$ 37,49 por mês</strong> ao longo de um ano. A Ultimate a R$ 549,90,
          parcelada em 12x, fica em aproximadamente <strong>R$ 45,82 por mês</strong>. Para a maioria dos jogadores, é
          uma forma sensata de absorver o custo sem comprometer o orçamento de novembro — mês tradicionalmente
          pressionado por Black Friday e despesas de fim de ano.
        </p>
        <p>
          A Xbox Store brasileira segue lógica similar, com parcelamento via cartão. Já a Rockstar Store, embora aceite
          cartões internacionais, não oferece parcelamento sem juros padrão para o Brasil — quem comprar diretamente do
          site da editora deve esperar cobrança à vista em USD convertido pelo câmbio do cartão, somado ao IOF de
          remessa (atualmente 3,5%). Para o jogador brasileiro, a regra é simples: comprar nas lojas dos próprios
          consoles costuma ser, ao mesmo tempo, mais barato e mais flexível.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Custo total para entrar em GTA VI no dia 1</h2>
        <p>
          Para quem ainda não tem console de geração atual, a entrada em GTA VI exige somar três componentes: console,
          armazenamento e o jogo. Tomando preços médios de varejo brasileiro em junho de 2026, um PS5 Slim digital fica
          em torno de R$ 3.799, um Xbox Series S a R$ 2.799 e o jogo R$ 449,90 na Standard. Como a instalação prevista
          é superior a 100 GB, quem pretende manter outros jogos no console deve incluir SSD adicional — entre R$ 700
          e R$ 1.500 dependendo da capacidade. Por fim, jogar o GTA Online VI exige assinatura: PlayStation Plus
          Essential anual sai por R$ 239,90, Xbox Game Pass Core anual por R$ 199. O pacote completo para um novo
          entrante no Xbox Series S fica próximo de <strong>R$ 3.500 a R$ 4.000</strong>; no PS5 Slim, entre
          <strong> R$ 5.000 e R$ 5.500</strong>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Estratégias para pagar menos (legalmente)</h2>
        <p>
          Há três caminhos legítimos para reduzir o custo. Primeiro, <strong>esperar a primeira grande promoção</strong>:
          a Rockstar tradicionalmente não promove jogos novos por pelo menos seis meses, o que coloca a primeira queda
          relevante de preço por volta de maio ou junho de 2027, com 20% a 30% de desconto, e até 50% na Black Friday
          de novembro de 2027. Segundo, <strong>aproveitar bundles de console</strong>: a Sony e a Microsoft costumam
          anunciar bundles "Console + GTA VI" entre setembro e novembro de 2026, com economia agregada relevante. E,
          terceiro, <strong>usar cashback ou pontos de cartão</strong>: cartões com 1% a 5% de cashback aplicados a um
          preço cheio de R$ 449,90 reduzem o custo efetivo em R$ 4,50 a R$ 22,50 — pequeno, mas legítimo.
        </p>
        <p>
          O caminho que <strong>não recomendamos</strong> é comprar via conta estrangeira (Turquia, Argentina, Índia)
          ou em marketplaces de chaves cinza (G2A, Kinguin). A economia média é pequena, o risco de chave revogada por
          fraude no cartão de origem é real, e em caso de problema o suporte da Rockstar é mínimo. Para um jogo que
          vai durar centenas de horas e ser jogado por anos, faz pouco sentido começar a relação com risco operacional
          em troca de algumas dezenas de reais.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Reembolso: o que dá e o que não dá</h2>
        <p>
          A Microsoft, no Xbox, oferece a regra mais favorável para pré-vendas: cancelamento com reembolso integral até
          dez dias antes do lançamento. Após 19 de novembro, o reembolso exige tempo de jogo inferior a duas horas e
          compra com menos de 14 dias. A Sony, na PlayStation Store, aplica regra parecida no pré-lançamento, mas
          analisa caso a caso após o jogo ser baixado — o suporte costuma ser mais conservador. Já a Rockstar Store
          não permite reembolso após resgate de chave digital. Para quem está em dúvida sobre Standard ou Ultimate, a
          recomendação prática é comprar na loja do console: a flexibilidade vale o pequeno trade-off de não comprar
          direto do publisher.
        </p>

        <EditorialTake category="geek">
          <p>
            Os R$ 449,90 da Standard são exatamente o que eu esperaria para um lançamento desse calibre em 2026 — não
            é barato, mas a paridade com a conversão técnica do câmbio mostra que a Take-Two não aplicou markup abusivo
            no Brasil. Para a maioria dos jogadores, a Standard parcelada em 12x é a melhor escolha: o custo mensal
            equivale ao de uma assinatura média de streaming, e o jogo deve render anos de uso entre campanha,
            exploração e GTA Online VI. A Ultimate só faz sentido para quem realmente vai mergulhar no online — caso
            contrário, R$ 100 são melhores investidos em um SSD adicional ou em outro jogo. E para quem ainda não tem
            console, o Xbox Series S segue sendo o caminho de menor entrada na geração para jogar GTA VI no dia 1.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games Announces Pre-Orders for Grand Theft Auto VI", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games Newswire", accessedAt: "Junho 2026" },
            { title: "GTA VI finally gets a price tag", url: "https://www.theverge.com/games/952204/grand-theft-auto-vi-price", publisher: "The Verge", accessedAt: "Junho 2026" },
            { title: "Rockstar Confirms GTA 6 Will Cost $79.99", url: "https://www.pcmag.com/news/rockstar-confirms-gta-6-will-cost-7999-june-25-preorder", publisher: "PCMag", accessedAt: "Junho 2026" },
            { title: "GTA 6 ganha preço oficial; veja pré-venda e Ultimate Edition", url: "https://www.techtudo.com.br/noticias/2026/06/gta-6-ganha-preco-oficial-veja-pre-venda-ultimate-edition-e-se-vale-a-pena-edjogos.ghtml", publisher: "TechTudo", accessedAt: "Junho 2026" },
            { title: "Pré-venda de Grand Theft Auto VI está disponível no Brasil", url: "https://psxbrasil.com.br/pre-venda-grand-theft-auto-vi-brasil/", publisher: "PSX Brasil", accessedAt: "Junho 2026" },
            { title: "GTA VI: quanto custa o jogo no Brasil", url: "https://epocanegocios.globo.com/tecnologia/noticia/2026/06/gta-vi-quanto-custa-o-jogo-no-brasil-e-ate-quando-vai-a-pre-venda.ghtml", publisher: "Época Negócios", accessedAt: "Junho 2026" },
            { title: "Grand Theft Auto VI — página oficial", url: "https://store.playstation.com/pt-br/product/EP1004-PPSA01547_00-GTAVISTANDARD001", publisher: "PlayStation Store Brasil", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViPrecosBrasilDolar2026;
