import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, ShoppingCart, AlertTriangle, CheckCircle2, Store, Gamepad2, Globe, Package } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-pre-venda-edicoes.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
import { GtaFeatureGrid, GtaStatGrid, GtaCallout } from "@/components/gta/GtaVisuals";

const SLUG = "gta-vi-pre-venda-edicoes-2026";
const TITLE = "Pré-Venda de GTA VI: Estado Real, Edições, Bônus e Como se Preparar Para Comprar";

const GtaViPreVendaEdicoes2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Pré-venda · Rockstar Games
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Junho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI pré-venda — vitrine neon de loja com sacolas" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A pré-venda de <strong>Grand Theft Auto VI</strong> é provavelmente o maior evento comercial pré-lançamento da
          história da indústria de games. Mas a essa altura, com o lançamento marcado para <strong>19 de novembro de 2026</strong>,
          ainda existe uma quantidade enorme de informação falsa circulando — listagens falsas em marketplaces, vídeos
          do YouTube prometendo links de pré-compra que não existem e perfis em redes sociais inventando edições. Este
          guia atravessa o ruído e mostra exatamente o que a Rockstar Games e a Take-Two Interactive comunicaram, o que
          ainda não foi anunciado e como se preparar de verdade para o momento em que a pré-venda for, oficialmente,
          aberta.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle2 className="h-7 w-7 text-pink-400" /> Pré-venda aberta: estado oficial em 25 de junho de 2026
        </h2>
        <p>
          A pré-venda global de <strong>Grand Theft Auto VI</strong> foi oficialmente aberta pela Rockstar Games à
          <strong> meia-noite de 25 de junho de 2026</strong>, horário local de cada região, conforme comunicado da
          editora publicado na Rockstar Newswire e replicado por veículos como The Verge, PCMag, Variety, Forbes,
          Gematsu e IGN. No Brasil, as listagens estão ativas na PlayStation Store, na Xbox Store e em varejistas
          oficiais (Amazon, Kabum, Nuuvem) com os mesmos valores praticados pela Rockstar.
        </p>
        <div className="not-prose my-6 rounded-xl border border-pink-500/40 bg-pink-500/10 p-5">
          <ul className="text-sm leading-relaxed list-disc list-inside space-y-1 text-foreground/90">
            <li><strong>Standard Edition:</strong> US$ 79,99 / <strong>R$ 449,90</strong></li>
            <li><strong>Ultimate Edition:</strong> US$ 99,99 / <strong>R$ 549,90</strong></li>
            <li><strong>Pré-carregamento:</strong> 12 de novembro de 2026</li>
            <li><strong>Lançamento:</strong> 19 de novembro de 2026 — PS5 e Xbox Series X|S</li>
          </ul>
        </div>


        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Store className="h-7 w-7 text-pink-400" /> Onde a pré-venda vai (de fato) abrir
        </h2>
        <p>
          Quando a Rockstar oficializar, haverá quatro canais principais para PS5 e Xbox Series X|S, todos com
          implicações práticas diferentes para quem mora no Brasil. A <strong>PlayStation Store</strong> é o canal mais
          provável de listagem rápida em conta brasileira; tradicionalmente, a Sony habilita pré-encomenda com débito
          parcial ou cobrança no momento da compra, com download liberado horas antes do lançamento mundial. A{" "}
          <strong>Microsoft Store no Xbox</strong> opera de forma similar, com a vantagem de oferecer reembolso fácil
          até dez dias antes do lançamento caso o jogador mude de ideia — é a política mais flexível do mercado de
          consoles atualmente.
        </p>

        <GtaFeatureGrid features={[
          { icon: Gamepad2, title: "PlayStation Store BR", desc: "Preço R$ 449,90 · parcelamento em até 12x no cartão · reembolso pré-lançamento avaliado caso a caso.", accent: "cyan" },
          { icon: Gamepad2, title: "Xbox Store BR", desc: "Preço R$ 449,90 · parcelamento em cartão · reembolso integral até 10 dias antes do lançamento (mais flexível do mercado).", accent: "emerald" },
          { icon: Globe, title: "Rockstar Store", desc: "Bônus exclusivos possíveis. Cobrança em USD via cartão internacional com IOF 3,5%. Sem reembolso após resgate.", accent: "pink" },
          { icon: Package, title: "Varejo físico (Amazon, Kabum)", desc: "Caixa sem disco com voucher digital para PS5 ou Xbox. Mesmo preço da loja, com prazo de entrega.", accent: "amber" },
        ]} />

        <p>
          O <strong>site oficial da Rockstar (Rockstar Store)</strong> historicamente vende chaves e edições exclusivas
          diretamente, com bônus que não aparecem nas lojas dos consoles — foi assim em Red Dead Redemption 2. E,
          finalmente, o varejo físico brasileiro (Kabum, Amazon, Mercado Livre oficial dos vendedores de mídia) costuma
          listar a edição standard junto com os marketplaces internacionais. Vale notar: lojas como Saraiva, Submarino
          e Americanas perderam relevância no segmento de games físicos nos últimos anos; o jogo deve ser distribuído
          em volume baixo de mídia física no Brasil, com a esmagadora maioria das vendas em digital.
        </p>
        <p>
          Quem pretende comprar via conta estrangeira (turca, argentina, indiana) para pagar mais barato precisa lembrar
          duas coisas. Primeiro, a Sony e a Microsoft restringiram bastante a possibilidade desse arbitrage nos últimos
          dois anos: muitos jogos AAA hoje seguem preço global em USD mesmo em regiões "baratas". Segundo, mesmo que a
          conta funcione, a barreira de troféus/conquistas, idioma e suporte fica atrelada à região da conta — não é um
          desconto sem custo.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShoppingCart className="h-7 w-7 text-pink-400" /> As duas edições confirmadas (só isso — nada de Special ou Collector's)
        </h2>
        <p>
          A Rockstar simplificou o lineup de forma inédita para um lançamento desse porte: só existem{" "}
          <strong>duas edições</strong>. Não há Special Edition, não há Collector's Box física, não há steelbook
          exclusivo em varejista. Quem viu listagens dessas edições em marketplaces está diante de fraude ou de
          conteúdo especulativo desatualizado.
        </p>
        <p>
          A <strong>Standard Edition</strong> (US$ 79,99 / R$ 449,90) traz o jogo completo — a campanha single-player
          integral com Lucia e Jason, Vice City, os pântanos de Leonida, todos os sistemas de mundo aberto. Nenhum
          conteúdo do jogo principal é cortado para vender depois.
        </p>
        <p>
          A <strong>Ultimate Edition</strong> (US$ 99,99 / R$ 549,90) adiciona, sobre a Standard, um pacote de
          conteúdo cosmético e narrativo confirmado pela Rockstar: o supercarro <strong>Grotti Cheetah '95</strong>{" "}
          (releitura moderna do clássico Vice City Testarossa) como exclusivo, uma frota de veículos premium
          adicionais, armas e roupas exclusivas, acesso à oficina de modificação <strong>Rideout Customs</strong> e{" "}
          <strong>duas missões extras integradas à história principal</strong>. Nada disso é competitivo — é conteúdo
          de personalização e horas extras de história para quem quer aprofundar.
        </p>
        <p>
          Uma nota importante para quem comprar mídia física: <strong>a caixa não tem disco</strong>. Amazon, Best Buy,
          Walmart, Target, GameStop e a versão brasileira via Kabum entregam apenas uma caixa com voucher de resgate
          digital para o console correspondente (PS5 ou Xbox Series). É a mesma decisão que Rockstar tomou em outros
          lançamentos recentes: reduzir custo logístico e forçar preload digital.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle2 className="h-7 w-7 text-pink-400" /> Vintage Vice City Pack: o bônus confirmado de pré-venda
        </h2>
        <p>
          Todo mundo que pré-encomenda GTA VI — <strong>em qualquer edição, em qualquer loja oficial</strong> — recebe
          o <strong>Vintage Vice City Pack</strong>, um pacote temático inspirado na estética 1980s do Vice City
          original. Ele traz um <strong>Vapid Stanier '55</strong> clássico com garagem própria, um conjunto de
          <strong> roupas e penteados oitentistas exclusivos para Lucia e Jason</strong>, e um{" "}
          <strong>padrão vintage para armas</strong>. Não há vantagem competitiva no pacote — é 100% cosmético,
          coerente com a política histórica da Rockstar de não vender poder na pré-venda.
        </p>
        <p>
          Uma sutileza importante: o bônus é liberado assim que você pré-encomenda, mesmo que faça isso no dia 18 de
          novembro. Não é preciso "chegar cedo" para garantir — a Rockstar deixou claro que o pacote é vinculado à
          pré-venda como categoria, não à ordem de compra. A pressa só faz sentido por dois motivos práticos: garantir
          preço em real antes de eventual reajuste cambial e habilitar o preload em 12 de novembro para jogar no
          minuto zero em 19 de novembro.
        </p>
        <p>
          O que <strong>não vem</strong> na pré-venda é acesso antecipado, beta ou "early access". Qualquer site ou
          canal oferecendo isso é golpe — a Rockstar nunca ofereceu beta público de um GTA e não vai começar agora.
          Qualquer link prometendo "jogar antes" pode ser descartado sem análise.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Como se preparar financeiramente para a pré-venda</h2>
        <p>
          Para o jogador brasileiro, a pré-venda de GTA VI vai cair em um momento sensível do orçamento: novembro e
          dezembro são meses de Black Friday, Natal e despesas elevadas. Quem leva a sério a estratégia de compra deve
          começar a separar dinheiro agora. Considerando que a faixa esperada do jogo é entre R$ 299 e R$ 499 dependendo
          da edição (com possibilidade real de a Standard chegar acima de R$ 349 dado o reajuste de jogos AAA pelos
          publishers nos últimos dois anos), uma reserva de R$ 500 é o piso para entrar na Standard digital sem
          comprometer outras compras de fim de ano.
        </p>
        <p>
          Para quem mira a Ultimate Edition, a faixa pode bater R$ 599 ou R$ 699. E quem ainda não comprou um PS5 ou
          Xbox Series, precisa contabilizar também esse investimento: console + SSD adicional (recomendado por causa do
          provável tamanho de instalação acima de 150 GB) + assinatura online (PlayStation Plus Essential ou Xbox Game
          Pass Core) totaliza facilmente entre R$ 3.500 e R$ 5.000 dependendo da configuração. Quem está nessa situação
          tem ainda alguns meses para procurar promoções de hardware antes da escassez típica de novembro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Política de reembolso: o que dá e o que não dá</h2>
        <p>
          Esse é o ponto onde a maioria dos compradores brasileiros se perde. As políticas de reembolso digital diferem
          significativamente entre as três grandes plataformas. A Microsoft, no Xbox, tem a regra mais favorável: até
          dez dias antes do lançamento, qualquer pré-compra pode ser cancelada com reembolso integral sem perguntas;
          após o lançamento, o reembolso só é possível se o tempo jogado for inferior a duas horas e a compra tiver
          menos de 14 dias. A Sony, na PlayStation Store, segue regra parecida para o período pré-lançamento, mas a
          aplicação caso a caso varia mais — o suporte pode ou não conceder o reembolso dependendo do operador.
        </p>
        <p>
          A Rockstar Store, por sua vez, segue a política da própria editora, que é mais restritiva. Compras de chave
          digital geralmente não permitem reembolso uma vez resgatada a chave, e edições físicas seguem a política do
          parceiro de fulfillment (geralmente sem reembolso após envio). Quem está em dúvida sobre qual edição comprar
          deve considerar comprar na PS Store ou Xbox Store mesmo que isso custe alguns reais a mais — o seguro de
          reembolso vale a flexibilidade.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cuidado com golpes: chaves falsas e marketplaces</h2>
        <p>
          A escala de GTA VI vai transformar a pré-venda em alvo prioritário de golpes. Já existem perfis no Twitter
          vendendo "links de pré-venda exclusivos", canais de Telegram oferecendo "chaves baratas via G2A e Kinguin
          antes do anúncio" e até listagens em Mercado Livre com "pré-encomenda garantida" sem qualquer respaldo
          oficial. A regra é simples e absoluta: se a Rockstar Games não anunciou na Newswire e a Sony ou Microsoft não
          listou na loja oficial, qualquer "pré-venda" que esteja circulando é fraude.
        </p>
        <p>
          Vale lembrar que marketplaces de chaves cinza (G2A, Eneba, Kinguin) frequentemente operam em uma zona moral
          cinzenta: muitas das chaves vendidas vêm de cartões de crédito fraudados em outros países, e quando a
          fraude é identificada, a chave é revogada pela Rockstar — deixando o comprador no Brasil sem o jogo e sem
          recurso prático para recuperar o dinheiro. Em um lançamento dessa magnitude, a chance de revogação em massa
          é altíssima. Comprar em lojas oficiais não é apenas mais seguro: é a única forma de garantir que você terá o
          jogo na sua biblioteca em 19 de novembro.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O que ainda falta até 19 de novembro</h2>
        <p>
          Com a pré-venda já aberta e o preço confirmado, o cronograma público de GTA VI até o lançamento tem quatro
          marcos principais. O primeiro é o <strong>Trailer 3</strong>, ainda sem data anunciada oficialmente pela
          Rockstar — a partir de julho de 2026 vários veículos (Forbes, Beebom, GTA Intel, Comicbook) passaram a
          rastrear pistas indiretas (atualizações no site oficial, calendário de resultados da Take-Two) apontando
          janela entre julho e agosto. O padrão dos dois trailers anteriores é anúncio com 24 a 72 horas de
          antecedência via X, vídeo liberado às 9h ou 14h horário do leste americano.
        </p>
        <p>
          Depois do Trailer 3, o mais provável é uma sequência tradicional: <strong>trailer de gameplay</strong>
          (histórico da Rockstar entre 6 e 10 semanas após o cinematográfico), semana com deep dives em blog oficial
          detalhando combate, direção e mundo, e <strong>trailer de lançamento</strong> nos dias que antecedem 19 de
          novembro. Em paralelo, o <strong>preload digital começa em 12 de novembro de 2026</strong> — uma semana antes
          do lançamento, para quem comprou nas lojas digitais oficiais. Físico chega em 19 de novembro pelo canal
          logístico habitual do varejo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Standard ou Ultimate: o que muda na prática</h2>
        <p>
          A diferença entre as duas edições é de <strong>R$ 100 no Brasil</strong> (R$ 449,90 contra R$ 549,90) e de
          <strong> US$ 20 nos Estados Unidos</strong>. A campanha é exatamente a mesma: nenhuma missão, personagem ou
          região de Leonida fica atrás do pagamento extra. O que a Ultimate entrega é conteúdo cosmético e bônus de
          progressão, o tipo de item que a Rockstar historicamente também vende avulso depois do lançamento.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">Vale a Standard se você…</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Joga principalmente a campanha e não liga para cosméticos.</li>
              <li>• Prefere esperar avaliações antes de investir mais.</li>
              <li>• Quer o menor desembolso possível na virada do lançamento.</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-pink-500/20 p-5">
            <h3 className="font-bold text-pink-300 mb-3">Vale a Ultimate se você…</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Pretende jogar centenas de horas e aproveitar todo bônus disponível.</li>
              <li>• Costuma comprar pacotes cosméticos avulsos depois — nesse caso o combo sai mais barato.</li>
              <li>• Quer resolver a compra de uma vez e não pensar mais no assunto.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Formas de pagamento e IOF para o comprador brasileiro</h2>
        <p>
          Comprar pela <strong>PS Store ou Xbox em reais</strong> é a rota mais simples: o preço já sai convertido, sem
          IOF de câmbio, e o parcelamento depende da bandeira do cartão cadastrado. Comprar em dólar (Rockstar Store ou
          conta estrangeira) adiciona <strong>IOF sobre compras internacionais</strong> e o spread do cartão, o que
          costuma anular qualquer vantagem aparente de preço. Vale conferir também as carteiras digitais: saldo
          pré-pago comprado em promoção é a forma mais comum de reduzir o valor final sem recorrer a chave de terceiros.
        </p>
        <p>
          Se o orçamento aperta, lembre-se de que a pré-venda digital pode ser cancelada com reembolso integral até o
          lançamento nas lojas oficiais — ou seja, garantir o pedido agora e reavaliar em novembro é uma estratégia de
          baixo risco, desde que você acompanhe o prazo de cada plataforma.
        </p>



        <EditorialTake category="geek">
          <p>
            Pré-venda de jogo não é, e nunca foi, uma decisão racional sob a ótica do consumidor. Você está pagando hoje
            por um produto que vai receber daqui a quatro meses, sem ter visto análise independente, sem garantia de
            qualidade técnica e correndo o risco real de novo adiamento. A Rockstar tem o histórico mais limpo da
            indústria nesse quesito (RDR2 entregou um dos melhores jogos da história), mas mesmo lá houve problemas
            sérios no online no lançamento. Minha sugestão para quem pode esperar: deixe a pré-venda passar, espere as
            primeiras 48 horas de reviews independentes em 19 de novembro, compre no dia 20. Você perde o "dia mundial
            de jogar" e os bônus de pré-venda, mas troca isso por certeza absoluta de que o produto entregou o que
            prometeu. Já para quem coleciona, joga em comunidade ou simplesmente quer fazer parte do evento cultural, a
            pré-venda compensa — desde que feita exclusivamente nas lojas oficiais e com consciência de que reembolso
            existe se mudar de ideia.
          </p>
        </EditorialTake>
        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games Newswire", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "Take-Two Interactive — Investor Relations", url: "https://ir.take2games.com/", publisher: "Take-Two Interactive", accessedAt: "Junho 2026" },
            { title: "Política de reembolso da PlayStation Store", url: "https://www.playstation.com/legal/cancellation-policy/", publisher: "Sony Interactive Entertainment", accessedAt: "Junho 2026" },
            { title: "Política de reembolso da Microsoft Store", url: "https://support.microsoft.com/topic/refunds-microsoft-store-purchases-87edc55a-7df9-4d57-9f53-d2dac4f8c5ec", publisher: "Microsoft", accessedAt: "Junho 2026" },
            { title: "GTA VI tracker e cobertura da imprensa", url: "https://www.ign.com/games/grand-theft-auto-vi", publisher: "IGN", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViPreVendaEdicoes2026;
