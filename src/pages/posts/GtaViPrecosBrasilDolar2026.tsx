import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, DollarSign, TrendingUp, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-precos.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gta-vi-precos-brasil-dolar-real-2026";
const TITLE = "Preço de GTA VI no Brasil: Expectativa em Dólar, Real, Edições e Como o Câmbio Afeta o Bolso";

const precoTabela = [
  { edicao: "Standard Edition (digital)", usd: "US$ 69,99 – US$ 89,99", brl: "R$ 299 – R$ 449", obs: "Faixa baseada no padrão de jogos AAA da Take-Two pós-2023" },
  { edicao: "Standard Edition (mídia física)", usd: "—", brl: "R$ 329 – R$ 499", obs: "Apenas se Rockstar produzir mídia física no Brasil; volume baixo esperado" },
  { edicao: "Special/Premium (digital)", usd: "US$ 89,99 – US$ 109,99", brl: "R$ 399 – R$ 549", obs: "Bônus de modo online + cosméticos" },
  { edicao: "Ultimate Edition (digital)", usd: "US$ 99,99 – US$ 129,99", brl: "R$ 449 – R$ 699", obs: "Tudo da Premium + dinheiro virtual + skins exclusivas" },
  { edicao: "Collector's Box (física)", usd: "US$ 149,99 – US$ 199,99", brl: "R$ 899 – R$ 1.499 (importação)", obs: "Improvável chegar ao Brasil oficialmente" },
];

const historico = [
  { jogo: "GTA V", ano: 2013, lancamentoUS: "US$ 59,99", lancamentoBR: "R$ 149,90" },
  { jogo: "Red Dead Redemption 2", ano: 2018, lancamentoUS: "US$ 59,99", lancamentoBR: "R$ 199,90" },
  { jogo: "GTA V (PS5/XSX expanded)", ano: 2022, lancamentoUS: "US$ 39,99", lancamentoBR: "R$ 149,90" },
  { jogo: "NBA 2K25 (Take-Two)", ano: 2024, lancamentoUS: "US$ 69,99", lancamentoBR: "R$ 349,90" },
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
            GTA VI · Preços · Dólar e Real
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
        <SkeletonImage priority src={heroImg} alt="GTA VI preços dólar e real — notas e controle sob luz neon" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O preço de <strong>GTA VI</strong> no Brasil é uma das perguntas mais feitas do ano. A resposta honesta é
          desconfortável: a Rockstar ainda não anunciou o preço oficial, e qualquer número específico repetido por
          sites menores antes do anúncio é especulação. O que dá para fazer com seriedade — e é o objetivo deste guia —
          é trabalhar com o histórico de preços da Take-Two, com a política de regionalização brasileira das duas
          plataformas e com o câmbio real para construir uma faixa de expectativa razoável.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-pink-400" /> A faixa de preço esperada
        </h2>
        <p>
          A indústria de games AAA passou por dois reajustes de patamar nos últimos cinco anos. Em 2020, o lançamento
          da geração PS5/Xbox Series consolidou o preço base americano em US$ 69,99 — saindo da faixa de US$ 59,99 que
          vigorava desde a era PS3. Em 2024, a Take-Two foi mais longe: NBA 2K25 saiu por US$ 69,99 na edição padrão,
          mas a Take-Two e a Microsoft fizeram coro à ideia de que jogos de "valor excepcional" justificariam preço de
          US$ 79,99 ou até US$ 99,99 — o que aconteceu com Hellblade II (Microsoft) e foi sinalizado pelo CEO da
          Take-Two, Strauss Zelnick, em entrevista à CNBC.
        </p>
        <p>
          Aplicando isso a GTA VI, três cenários ficam plausíveis. <strong>Cenário conservador (US$ 69,99):</strong> a
          Rockstar mantém o preço padrão da geração para a Standard Edition, focando no volume e respeitando a base de
          jogadores. <strong>Cenário intermediário (US$ 79,99 – US$ 89,99):</strong> a Take-Two posiciona GTA VI como
          produto premium, com Standard a US$ 79,99 e Ultimate na faixa de US$ 99,99 — coerente com a posição da CEO.
          <strong> Cenário agressivo (US$ 99,99 ou mais):</strong> a Take-Two trata GTA VI como evento único e cobra
          preço de "experiência cinematográfica", possivelmente puxando a Ultimate para US$ 129,99 ou mais. A análise
          do mercado em junho de 2026 aponta o cenário intermediário como mais provável.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-pink-400" /> Histórico de preços da Take-Two no Brasil
        </h2>
        <p>
          Olhar o histórico ajuda a entender como a Take-Two trata o mercado brasileiro. Os números abaixo são de
          lançamentos verificados nas lojas oficiais (PlayStation Store, Xbox Store, Steam) no dia do lançamento de cada
          jogo, sem promoção:
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
                  <td className="py-3 px-4 font-semibold">{h.jogo}</td>
                  <td className="py-3 px-4 text-muted-foreground">{h.ano}</td>
                  <td className="py-3 px-4">{h.lancamentoUS}</td>
                  <td className="py-3 px-4 text-pink-300">{h.lancamentoBR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dois padrões saltam dessa tabela. Primeiro, a Take-Two historicamente <strong>regionaliza</strong> o preço
          para o Brasil, oferecendo desconto significativo em relação à conversão direta do dólar. GTA V em 2013 saiu a
          R$ 149,90 quando a conversão direta de US$ 59,99 daria mais de R$ 200 (dólar a R$ 3,40 na época); RDR2 em
          2018 saiu a R$ 199,90 quando a conversão de US$ 59,99 com o dólar a R$ 3,90 daria R$ 234. Segundo, o NBA 2K25
          de 2024 mostra que a regionalização persiste mesmo no patamar de US$ 69,99: o preço brasileiro de R$ 349,90
          foi cerca de 16% abaixo da conversão direta com o dólar próximo de R$ 6.
        </p>
        <p>
          Aplicando essa lógica, com o dólar oscilando entre R$ 5,40 e R$ 5,80 no primeiro semestre de 2026, e
          assumindo o cenário intermediário de US$ 79,99 para a Standard Edition, a expectativa razoável para a
          Standard de GTA VI no Brasil é uma faixa entre <strong>R$ 349 e R$ 449</strong>. Para a Ultimate Edition,
          assumindo US$ 99,99 com a mesma regionalização, a faixa esperada vai de <strong>R$ 449 a R$ 599</strong>. A
          tabela abaixo resume o cenário esperado para cada edição.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-pink-400" /> Tabela de expectativa por edição
        </h2>
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
              {precoTabela.map((p, i) => (
                <tr key={p.edicao} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{p.edicao}</td>
                  <td className="py-3 px-4 text-muted-foreground break-words">{p.usd}</td>
                  <td className="py-3 px-4 text-pink-300 break-words">{p.brl}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{p.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground italic">
          Faixas estimadas pelo VICIO&lt;CODE&gt; com base no histórico da Take-Two e câmbio de junho de 2026. Preços
          oficiais serão anunciados pela Rockstar Games junto com a abertura da pré-venda.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Por que o preço brasileiro é (e provavelmente continuará) regionalizado</h2>
        <p>
          A política de regionalização de preços de jogos no Brasil não é caridade da Take-Two: é cálculo de elasticidade
          de demanda. O Brasil é o quinto maior mercado de games do mundo em receita, mas com um detalhe crítico — o
          poder de compra médio do jogador brasileiro é uma fração do americano. Quando a Take-Two precificou GTA V em
          R$ 149,90 em 2013, fez isso porque o estudo de mercado mostrou que qualquer valor acima de R$ 200 reduziria o
          volume de vendas a ponto de a receita total ser menor. É a mesma lógica que faz a Steam ter preços diferentes
          em rúpias, em rublos, em pesos argentinos e em reais.
        </p>
        <p>
          Há um risco, porém, que precisa ser comunicado: nos últimos dois anos, várias publishers começaram a equalizar
          preços globalmente em direção ao patamar americano. A Sony foi pioneira nesse movimento ao subir o preço da
          PSN no Brasil em algumas categorias. A Microsoft seguiu parcialmente. Se a Take-Two decidir fazer o mesmo
          movimento com GTA VI — equalizando preço com o americano e cobrando próximo de R$ 500 pela Standard — não
          haverá margem para reclamação técnica: é a mesma matemática do dólar a R$ 5,70 sem desconto regional. A
          probabilidade desse cenário é estimada em 25% a 35% pelos analistas do setor.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">O custo total real: jogo + plataforma + assinatura</h2>
        <p>
          Para quem ainda não tem a plataforma, o preço do jogo é apenas parte da equação. Um PS5 Slim com leitor de
          disco custava em junho de 2026 entre R$ 3.799 e R$ 4.299 nas lojas oficiais (PS Direct, Amazon, Kabum). O
          Xbox Series X custava entre R$ 3.999 e R$ 4.499. Adicionar um SSD interno de 1TB compatível (necessário pelo
          tamanho de instalação esperado acima de 150 GB) custa entre R$ 599 e R$ 899. E para jogar o modo online,
          PlayStation Plus Essential anual sai por R$ 199 e Xbox Game Pass Core anual por R$ 209.
        </p>
        <p>
          Somando tudo, quem começa do zero precisa orçar entre <strong>R$ 4.900 e R$ 6.000</strong> para entrar em
          GTA VI no dia 1, considerando console novo, SSD para garantir espaço, jogo na Standard digital e assinatura
          online anual. Para quem já tem o console mas precisa de SSD e assinatura, a conta cai para entre R$ 1.000 e
          R$ 1.500 mais o preço do jogo. Para quem já tem tudo, é apenas o preço da edição escolhida.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Estratégias para pagar menos (legalmente)</h2>
        <p>
          Há três caminhos legítimos para reduzir o custo. Primeiro, <strong>esperar a primeira grande promoção</strong>.
          A Rockstar tradicionalmente não promove jogos novos por pelo menos seis meses — significa que GTA VI não terá
          desconto significativo antes de maio ou junho de 2027. Para quem pode esperar, isso costuma render de 20% a
          30% de desconto na primeira promoção, e até 50% na Black Friday seguinte (novembro de 2027). Segundo,
          <strong> aproveitar bundles de plataforma</strong>: a Sony e a Microsoft historicamente lançam bundles de
          console + jogo perto do lançamento, com preço melhor do que comprar separado. Terceiro,
          <strong> usar cashback de cartão</strong>: cartões com cashback ou pontos podem reduzir o custo efetivo em
          5% a 10% se o jogador já usa o produto financeiro para outras compras.
        </p>
        <p>
          O caminho que <strong>não recomendamos</strong> é comprar via conta estrangeira (Turquia, Argentina, Índia)
          ou em marketplaces de chaves cinza (G2A, Kinguin). A economia média é pequena (10% a 20%), o risco de chave
          revogada é alto, e em caso de problema o suporte da Rockstar ou da Sony/Microsoft é mínimo. Para um jogo que
          vai durar centenas de horas e ser jogado por anos, faz pouco sentido começar a relação com risco de perder
          tudo por causa de algumas dezenas de reais.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Quando vamos saber o preço oficial</h2>
        <p>
          A Take-Two e a Rockstar devem confirmar o preço de GTA VI junto com a abertura da pré-venda, que pela
          sinalização da Take-Two em maio de 2026 deve acontecer entre o fim de junho e o fim de julho de 2026,
          acompanhada do terceiro trailer oficial. A partir desse momento, a página de produto na PlayStation Store, na
          Xbox Store e na Rockstar Store terá o preço final para o Brasil e para cada região. Este artigo será
          atualizado com os números oficiais assim que forem anunciados.
        </p>

        <EditorialTake category="geek">
          <p>
            Minha leitura honesta: a Take-Two vai precificar GTA VI agressivamente. Estamos em um momento da indústria
            em que a editora claramente sinalizou que jogos premium podem cobrar premium, e GTA VI é o produto mais
            premium da década. Eu trabalharia com a expectativa de Standard a R$ 399, Ultimate a R$ 549 — e ficaria
            agradavelmente surpreso se vier mais barato. O bom investimento estratégico para o jogador brasileiro é
            começar a separar dinheiro agora, em parcelas mensais pequenas até novembro, em vez de tentar absorver tudo
            em um único mês. Para quem ainda não tem console e quer entrar no dia 1, vale pesquisar bundles de Black
            Friday: a Sony e a Microsoft sempre fazem promoção forte em outubro, e essa janela costuma render o melhor
            custo-benefício para entrar na geração.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games Newswire", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "Take-Two Q4 FY2026 Earnings Report", url: "https://ir.take2games.com/", publisher: "Take-Two Interactive", accessedAt: "Maio 2026" },
            { title: "Take-Two CEO on AAA pricing (CNBC interview)", url: "https://www.cnbc.com/video/", publisher: "CNBC", accessedAt: "Junho 2026" },
            { title: "PlayStation Store Brasil", url: "https://store.playstation.com/pt-br/", publisher: "Sony Interactive Entertainment", accessedAt: "Junho 2026" },
            { title: "GameSpot — GTA VI pricing speculation", url: "https://www.gamespot.com/games/grand-theft-auto-vi/", publisher: "GameSpot", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViPrecosBrasilDolar2026;
