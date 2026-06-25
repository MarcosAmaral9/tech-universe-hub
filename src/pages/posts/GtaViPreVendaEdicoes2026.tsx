import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, ShoppingCart, AlertTriangle, CheckCircle2, Store } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-pre-venda-edicoes.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

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
          <AlertTriangle className="h-7 w-7 text-pink-400" /> Estado real da pré-venda em junho de 2026
        </h2>
        <p>
          Até a data de publicação deste artigo, a Rockstar Games <strong>não abriu a pré-compra global</strong> de GTA
          VI nas lojas oficiais. Isso significa que não existe SKU listado na PlayStation Store, não há página de produto
          no Xbox Store, e o site oficial da Rockstar mostra apenas o teaser do jogo, sem botão de "pré-encomendar".
          A Take-Two Interactive, na conferência de resultados de maio de 2026, confirmou a janela de novembro e
          reforçou que a "campanha de marketing comercial começa no verão" — em linguagem do setor, isso aponta para o
          terceiro trailer entre junho e julho de 2026 e, junto com ele, a habilitação das pré-vendas.
        </p>
        <p>
          O padrão histórico ajuda a calibrar a expectativa. Red Dead Redemption 2 abriu pré-venda em <strong>fevereiro
          de 2018</strong>, oito meses antes do lançamento de outubro. GTA V, na geração anterior, abriu pré-venda em
          fevereiro de 2013, oito meses antes do lançamento de setembro. Aplicando essa lógica a novembro de 2026, a
          pré-venda deveria ter aberto em março ou abril — o que não aconteceu. Existem duas leituras plausíveis: ou a
          Rockstar está deliberadamente reduzindo o tempo entre pré-venda e lançamento para maximizar o impulso da
          campanha final, ou ainda existe ajuste fino no calendário comercial. Em ambos os casos, a comunicação será
          via Rockstar Newswire, e qualquer "página de pré-venda" que esteja circulando sem link para um desses canais
          oficiais é, no melhor dos casos, especulação, e no pior, golpe.
        </p>

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
          <ShoppingCart className="h-7 w-7 text-pink-400" /> Edições prováveis (e o que historicamente vem em cada uma)
        </h2>
        <p>
          A Rockstar ainda não detalhou o lineup oficial de edições de GTA VI, mas o padrão de Red Dead Redemption 2 e
          GTA V dá uma base sólida de expectativa. Em RDR2, a editora ofereceu quatro camadas: Standard Edition, Special
          Edition, Ultimate Edition e Collector's Box. Cada degrau acima da Standard adicionava conteúdo cosmético no
          modo single-player (mapa de tesouros, atalhos de progressão), bônus para o modo online (cavalo, arma, roupa,
          dinheiro virtual) e, no caso da Collector's Box, itens físicos colecionáveis (relógio, mapa, baralho de
          cartas, livro de propaganda).
        </p>
        <p>
          A expectativa razoável para GTA VI é uma estrutura parecida, possivelmente simplificada para três camadas
          digitais e uma física. A Standard Edition deve trazer apenas o jogo. Uma <strong>Premium ou Special Edition</strong>{" "}
          deve incluir bônus exclusivos para o GTA Online VI (que, segundo a Take-Two, será lançado simultâneo com o
          jogo single-player, evitando o desastre logístico de 2013). E uma <strong>Ultimate Edition</strong> deve
          empilhar tudo isso com acesso antecipado a missões cosméticas, veículos ou skins, mais um bônus de dinheiro
          virtual para começar o online já com alguma capitalização.
        </p>
        <p>
          Sobre a edição física de colecionador, há um detalhe importante: a Rockstar reduziu drasticamente a produção
          de Collector's Boxes na geração atual. Existe possibilidade de essa edição não chegar ao Brasil oficialmente,
          ou chegar apenas via importação direta da Rockstar Store, com frete e impostos significativos. Quem
          historicamente coleciona Collector's Edition deve ficar atento ao anúncio inicial: essas edições esgotam em
          horas e, na revenda, atingem 3 a 5 vezes o preço de tabela.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle2 className="h-7 w-7 text-pink-400" /> Bônus de pré-venda: o que esperar (e o que ignorar)
        </h2>
        <p>
          Toda pré-venda da Rockstar nas últimas duas décadas incluiu pelo menos um bônus de pré-encomenda para o modo
          online — geralmente um veículo exclusivo, uma roupa cosmética ou um pacote de moeda virtual. Em GTA V, quem
          pré-comprou ganhou o "Atomic Blimp" como veículo cosmético; em RDR2, foram bônus para o Story Mode (mapa do
          tesouro, cavalo, arma) mais um pacote de ouro para o Red Dead Online. A aposta segura é que GTA VI terá um
          conjunto similar: algo cosmético para o modo história e um pacote inicial para o GTA Online VI.
        </p>
        <p>
          O que a Rockstar nunca fez, e quase certamente não vai fazer agora, é vender vantagem competitiva pesada como
          bônus de pré-compra. Não vai ter arma com dano superior travada atrás de uma edição cara. Não vai ter
          "missões de história exclusivas" que mudem a narrativa principal. A Rockstar entende o valor reputacional de
          tratar a campanha como uma experiência única e completa para todos os compradores, independentemente da
          edição — uma posição que muitos AAA modernos abandonaram, e que segue sendo um diferencial da editora.
        </p>
        <p>
          Em paralelo, há uma camada inteira de <strong>bônus por loja</strong> a observar. PlayStation costuma incluir
          tema dinâmico e avatar exclusivo; Xbox tradicionalmente oferece pacote de skins ou Game Pass de bônus por
          tempo limitado; Rockstar Store tende a empilhar tudo isso e ainda incluir camiseta digital colecionável. Vale
          a pena comparar essas matrizes antes de comprar — não pelo valor monetário (geralmente baixo), mas pela
          coerência com onde você joga.
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

        <h2 className="text-2xl font-bold mt-10 mb-4">Cronograma realista: o que esperar nas próximas semanas</h2>
        <p>
          Combinando o histórico da Rockstar com a sinalização da Take-Two sobre "marketing comercial no verão", a
          janela mais provável para anúncio do trailer 3 e abertura simultânea da pré-venda é <strong>entre o fim de
          junho e o fim de julho de 2026</strong>. O padrão da Rockstar é anunciar o trailer com 24 a 72 horas de
          antecedência via redes sociais (sem data exata, apenas dia), liberar o vídeo às 9h ou 14h horário do leste
          americano (10h ou 15h em Brasília), e em paralelo derrubar a página de pré-venda nas lojas oficiais.
        </p>
        <p>
          O Trailer 1, em dezembro de 2023, foi liberado um dia antes da data programada por causa do vazamento — a
          conta oficial da Rockstar publicou o vídeo no X e no YouTube simultaneamente, e em 24 horas o vídeo bateu o
          recorde mundial de visualizações de trailer de game (93 milhões). O Trailer 2, em maio de 2025, seguiu o
          script: anúncio com 48 horas de antecedência, vídeo liberado às 11h EDT, segunda explosão de engajamento
          mundial. Quem quiser estar entre os primeiros a pré-comprar deve seguir a conta oficial da Rockstar Games no
          X, ativar notificações e estar pronto para entrar na loja minutos depois do trailer.
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
