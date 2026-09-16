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
import PostMediaCarousel from "@/components/PostMediaCarousel";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import {
  Clock, User, Calendar, BookOpen, ListChecks, HelpCircle,
  Sparkles, Layers, Globe, Castle, Heart, Swords, Hourglass, Trophy,
} from "lucide-react";
import larcyImg from "@/assets/i-will-fall-with-the-emperor-larcy.webp";
import larcyFogoImg from "@/assets/i-will-fall-with-the-emperor-larcy-fogo.webp";

const SLUG = "i-will-fall-with-the-emperor-larcy-guia-2026";
const TITLE = "I Will Fall With the Emperor: Guia Completo do Manhwa de Larcy";

const FICHA = [
  { label: "Título original", value: "황제와 함께 타락하겠습니다 (Hwangjewa hamkke tarakhagetseumnida)" },
  { label: "Títulos alternativos", value: "I Will Fall with the Emperor; お求めいただいた暴君陛下の悪女です (edição japonesa); \"Afundarei Com o Imperador\" (título usado por traduções em PT-BR)" },
  { label: "Formato", value: "Manhwa (webtoon coreano, colorido, leitura vertical / long strip)" },
  { label: "Autoria", value: "Tenichi (天壱)" },
  { label: "Produção", value: "Estúdio SORAJIMA (ソラジマ), com a STRAIGHT EDGE creditada ao lado do autor nas plataformas" },
  { label: "Estreia", value: "11 de outubro de 2022, na KakaoPage e na Kakao Webtoon" },
  { label: "Status", value: "Em publicação (ongoing)" },
  { label: "Capítulos", value: "Mais de 180 episódios publicados na versão japonesa da Piccoma; cerca de 105 capítulos disponíveis em traduções catalogadas na MangaDex" },
  { label: "Edições em volume", value: "Publicada no Japão pela Futabasha (selo Monster Comics f), com 8 volumes lançados até maio de 2026" },
  { label: "Protagonista", value: "Larcy, primeira princesa do Reino de Berry, apelidada de \"Princesa dos Morcegos\"" },
  { label: "Gêneros", value: "Romance de fantasia, josei, drama, regressão temporal, vingança, vilã (villainess), magia" },
  { label: "Leitura oficial em PT-BR", value: "Sem licenciamento oficial no Brasil; leitura por traduções da comunidade" },
];

const PERSONAGENS = [
  {
    nome: "Larcy",
    desc: "Primeira princesa do Reino de Berry e protagonista absoluta. Conhecida como a \"Princesa dos Morcegos\", ela se joga na guerra pela pátria e pela família, é feita prisioneira pelo Império Chariot e passa dez anos em cativeiro. De volta a casa, descobre que a família a transformou em bode expiatório. Depois da execução, acorda dez anos no passado com uma única certeza: desta vez, não vai morrer no lugar de ninguém.",
  },
  {
    nome: "Jevon Van Verben",
    desc: "Imperador do Império Chariot e o \"tirano\" do título japonês. Frio, calculista e temido, foi ele quem, na vida anterior de Larcy, ofereceu à prisioneira um lugar ao seu lado — proposta que ela recusou. Na segunda vida, a protagonista aceita o que antes negou e se casa com ele, usando o poder do império inimigo como instrumento da própria vingança.",
  },
  {
    nome: "Nicola",
    desc: "Irmã de Larcy e o contraponto exato dela: loira onde a protagonista é morena, criada desde sempre para ser imperatriz. Foi por ela que Larcy arriscou a vida — e foi ela quem participou da traição que revelou que a protagonista não era filha legítima do rei.",
  },
  {
    nome: "A família real de Berry",
    desc: "Mais do que vilões isolados, o clã real funciona como um sistema: usa Larcy enquanto ela é útil, descarta-a quando o custo político aparece e reescreve a história para culpá-la pela guerra. É contra essa engrenagem inteira, e não contra um único inimigo, que a vingança da protagonista se organiza.",
  },
];

const GENEROS = [
  {
    titulo: "Regressão temporal (회귀물)",
    texto: "O motor da obra é o subgênero mais popular do romance de fantasia coreano: a personagem morre e volta a um ponto anterior da própria vida, mantendo a memória de tudo. Aqui o salto é de dez anos exatos, o que devolve a Larcy não só uma segunda chance, mas um mapa completo de quem vai traí-la e quando.",
  },
  {
    titulo: "Vingança e política de corte",
    texto: "A vingança não acontece com espadas, e sim com casamento, aliança e informação. A protagonista escolhe o inimigo do seu país como marido justamente porque é o movimento que mais dói na família que a descartou. As batalhas decisivas são jantares, audiências e decretos.",
  },
  {
    titulo: "Romance de fantasia (romance fantasy)",
    texto: "A relação entre Larcy e Jevon é o coração emocional da história: dois personagens que se reconhecem na queda um do outro. É um romance que começa como contrato e negociação e vai, capítulo a capítulo, se tornando cumplicidade — sem perder o tom sombrio.",
  },
  {
    titulo: "Villainess e josei",
    texto: "Os catálogos internacionais classificam a obra como josei, com a tag \"villainess\". Larcy não é a heroína doce padrão: ela aceita o rótulo de mulher perigosa, joga sujo quando precisa e nunca pede desculpas por isso. É essa recusa em ser vítima que sustenta o apelo do título.",
  },
];

const FallWithEmperorLarcyGuia2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category="otaku" size="lg" />
          <span className="text-xs bg-otaku/10 text-otaku border border-otaku/30 px-2 py-1 rounded-full font-bold">
            📗 Manhwa
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          {TITLE}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            10 de Setembro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            14 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <PostMediaCarousel
          priority
          pausable
          showIndicators
          wrapperClassName="absolute inset-0 w-full h-full"
          className="object-cover"
          images={[
            {
              src: larcyImg,
              alt: "Princesa de cabelos negros em vestido imperial vermelho e preto dentro de um salão do trono gótico iluminado pela lua",
            },
            {
              src: larcyFogoImg,
              alt: "Princesa loira de frente usando poder de fogo na mão direita dentro de um salão imperial gótico",
            },
          ]}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Uma princesa que passa dez anos como prisioneira de guerra, volta para casa e é executada
          pela própria família — e então acorda dez anos antes, com memória intacta e uma lista de
          nomes na cabeça. Essa é a premissa de <em>I Will Fall With the Emperor</em> (황제와 함께
          타락하겠습니다), manhwa de romance sombrio que virou um dos maiores fenômenos de webtoon
          vertical dos últimos anos. Neste guia reunimos o que se sabe com segurança sobre a obra: a
          história de Larcy, a mecânica de volta ao passado, os reinos em disputa, o romance com o
          imperador, a vingança, os gêneros, o estúdio, a data de estreia, a contagem de capítulos e
          onde ler em português.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/5 to-card/50">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold mb-4">
            <ListChecks className="h-5 w-5 text-otaku" />
            Resumo rápido
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc list-inside">
            <li>Manhwa sul-coreano criado por Tenichi (天壱), com produção do estúdio japonês SORAJIMA.</li>
            <li>Estreou em 11 de outubro de 2022 na KakaoPage e na Kakao Webtoon; segue em publicação.</li>
            <li>Protagonista: Larcy, primeira princesa do Reino de Berry, traída e executada — e devolvida dez anos ao passado.</li>
            <li>Ela se casa com Jevon Van Verben, imperador do Império Chariot, para transformar o inimigo em arma.</li>
            <li>Gêneros: romance de fantasia, josei, drama, regressão temporal, vingança e villainess.</li>
            <li>Sem edição oficial em português; a leitura em PT-BR acontece por traduções da comunidade, em apps como o Mangaflix.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <BookOpen className="h-6 w-6 text-otaku" />
          A história: a princesa que foi descartada duas vezes
        </h2>
        <p>
          Tudo começa com um gesto de amor. Larcy, primeira princesa do <strong>Reino de Berry</strong>,
          entra em guerra para tentar resgatar a irmã, <strong>Nicola</strong>. A operação fracassa e
          ela é capturada pelo <strong>Império Chariot</strong>, potência militar vizinha. O que
          deveria ser um episódio termina virando uma década: dez anos de cativeiro, longe de casa,
          sustentada apenas pela ideia de que a família espera pelo seu retorno.
        </p>
        <p>
          O retorno é a parte mais cruel da obra. Em vez de recepção, Larcy encontra um veredito
          pronto. A realeza de Berry revela que ela <strong>não é filha legítima do rei</strong> — e
          que, portanto, nunca foi realmente uma delas. Pior: a guerra contra Chariot precisa de um
          culpado, e a prisioneira recém-devolvida é a candidata perfeita. Acusada de provocar o
          conflito, Larcy é executada pelas mesmas pessoas por quem havia se sacrificado.
        </p>
        <p>
          Não é spoiler dizer o que acontece a seguir, porque é a própria sinopse oficial: ela acorda
          <strong> dez anos no passado</strong>. Antes da guerra, antes do cativeiro, antes da
          traição. Com uma diferença decisiva em relação à primeira vida — desta vez, ela sabe o que
          vem pela frente. E a primeira decisão da nova linha do tempo é aceitar a proposta que havia
          recusado: ficar ao lado do imperador de Chariot.
        </p>
        <p>
          A frase que dá nome à obra vem exatamente desse pacto. "Você também vai se corromper.
          Então eu realizarei tudo", diz o imperador na sinopse coreana. Larcy responde à altura: se
          é para cair, que caiam juntos. O título, em português, seria algo como
          <em> "Eu me corromperei junto com o imperador"</em> — e é uma promessa, não uma lamentação.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Hourglass className="h-6 w-6 text-otaku" />
          A viagem ao passado: como funciona a regressão
        </h2>
        <p>
          Vale explicar o que o leitor brasileiro talvez conheça pelo nome errado. Isso não é isekai:
          Larcy não vai parar em outro mundo nem renasce como outra pessoa. O recurso usado é a
          <strong> regressão</strong> (회귀, <em>hoegwi</em>), um dos pilares do romance de fantasia
          coreano — a personagem morre e retorna a um ponto anterior da <em>própria</em> vida, no
          mesmo corpo, no mesmo mundo, com toda a memória preservada.
        </p>
        <p>
          Essa escolha muda a natureza do conflito. Numa história de renascimento em outro mundo, a
          graça está em descobrir as regras. Aqui, a protagonista já conhece todas: sabe quais
          batalhas vão acontecer, quais alianças vão ruir, quem vai mentir e em que momento. O que
          ela não sabe é se as suas próprias decisões vão manter o futuro no trilho previsto ou
          desviá-lo para um lugar imprevisível — e é dessa tensão que a obra vive.
        </p>
        <p>
          Há ainda um efeito psicológico que o manhwa explora bem: Larcy carrega dez anos de dor que,
          para todo mundo ao redor, ainda não aconteceram. Ela olha para a irmã e vê a traidora que
          Nicola ainda não é. Olha para o pai e vê quem assinará a sua sentença. Essa assimetria de
          informação é o que transforma cada diálogo de corte numa cena de suspense.
        </p>
        <p>
          E há a inversão mais elegante da premissa: o inimigo declarado do seu país é a única pessoa
          que, na vida anterior, ofereceu a ela uma saída. A regressão não devolve apenas tempo —
          devolve a chance de responder "sim" a uma pergunta que ela passou dez anos lamentando ter
          respondido com "não".
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Castle className="h-6 w-6 text-otaku" />
          Os reinos: Berry contra o Império Chariot
        </h2>
        <p>
          A geografia política da obra é enxuta e funcional, do jeito que o romance de corte
          costuma pedir. De um lado está o <strong>Reino de Berry</strong>, pátria de Larcy: uma
          monarquia menor, obcecada por legitimidade e reputação, onde a linhagem vale mais do que a
          pessoa. É um reino que trata as filhas como peças de negociação — Nicola preparada desde a
          infância para ser imperatriz, Larcy empurrada para o campo de batalha.
        </p>
        <p>
          Do outro lado está o <strong>Império Chariot</strong>, a potência que a captura. Grande,
          militarizado e governado por um homem que ninguém ousa contrariar, o império é apresentado
          como o vilão externo — e é justamente esse rótulo que Larcy vira do avesso. Ao se casar com
          o imperador, ela não muda de lado por conveniência romântica: ela troca de tabuleiro,
          saindo da posição de peça para a de jogadora.
        </p>
        <p>
          Ao longo da publicação, o mapa se amplia com outras potências e casas nobres que entram na
          disputa, e o manhwa passa a alternar entre intriga interna da corte imperial e conflito
          entre nações. Como a obra segue em andamento e boa parte desses desdobramentos é material
          de arcos avançados, ficamos por aqui: quem chegou até este guia veio buscar contexto, não
          reviravoltas entregues de bandeja.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Heart className="h-6 w-6 text-otaku" />
          O romance de Larcy e a vingança que ele carrega
        </h2>
        <p>
          O romance central é o de Larcy com <strong>Jevon Van Verben</strong>, e ele foge do padrão
          adoçado do gênero. Não é um encontro fortuito nem um mal-entendido de baile: é um acordo
          entre duas pessoas que já se olharam por trás das grades. Ele é descrito como um governante
          impiedoso e frio, com um harém de concubinas e uma reputação de tirano; ela chega ao
          casamento sabendo exatamente o que ele é — e é por isso que aceita.
        </p>
        <p>
          O que dá densidade à relação é o reconhecimento mútuo. A própria sinopse oficial resume:
          só ao voltar dez anos e ficar ao lado dele Larcy percebe que os dois haviam caído até o
          fundo, cada um do seu jeito, e que era por isso que ele a havia procurado. Não é um homem
          salvando uma mulher, nem o contrário. São dois sobreviventes fazendo um pacto.
        </p>
        <p>
          E a vingança nunca sai de cena. O casamento imperial <em>é</em> a vingança: ao se tornar
          esposa do soberano que Berry mais teme, Larcy converte o próprio corpo político em ameaça.
          Cada gentileza que ela recebe no império é uma humilhação lançada contra o reino que a
          descartou. O manhwa é honesto quanto a isso — não tenta transformar a protagonista numa
          mocinha que "só queria ser amada". Ela quer justiça, e, quando a justiça não estiver
          disponível, aceita o troco.
        </p>
        <p>
          Vale o aviso de tom: apesar de a arte ser luxuosa e o romance ocupar o centro, a obra é
          pesada. Cativeiro, mutilação, execução, traição familiar e abuso de poder aparecem logo nos
          primeiros capítulos. É romance de fantasia adulto, classificado como josei, e não uma
          história leve de corte.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-card/60 text-left">
                <th className="p-3 font-bold">Personagem</th>
                <th className="p-3 font-bold">Papel na história</th>
              </tr>
            </thead>
            <tbody>
              {PERSONAGENS.map((p) => (
                <tr key={p.nome} className="border-t border-border">
                  <td className="p-3 font-bold whitespace-nowrap align-top">{p.nome}</td>
                  <td className="p-3 text-foreground/90">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Layers className="h-6 w-6 text-otaku" />
          Os gêneros que o manhwa mistura
        </h2>
        <div className="not-prose my-6 space-y-4">
          {GENEROS.map((g) => (
            <div key={g.titulo} className="p-5 rounded-xl border border-border bg-card/50">
              <h3 className="font-display font-bold text-otaku mb-2">{g.titulo}</h3>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{g.texto}</p>
            </div>
          ))}
        </div>
        <p>
          Nas plataformas oficiais, a obra é catalogada simplesmente como
          <strong> romance de fantasia</strong> (로맨스 판타지) na Kakao Webtoon e como
          <em> fantasia</em> na Piccoma. Já as bases internacionais detalham melhor: a MangaDex lista
          romance, drama, fantasia, magia, público josei, formato colorido em tira longa e a tag
          <em> villainess</em>, enquanto outros catálogos acrescentam explicitamente
          <em> time travel</em>. Na prática, a leitura combina três prazeres: o da vingança fria, o
          do romance de tensão e o da política palaciana.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Sparkles className="h-6 w-6 text-otaku" />
          Estúdio, autoria, lançamento e capítulos
        </h2>
        <p>
          A obra é creditada a <strong>Tenichi (天壱)</strong>, autor que assina o roteiro e a criação
          da série. A produção do webtoon fica a cargo do estúdio japonês
          <strong> SORAJIMA (ソラジマ)</strong>, uma das casas mais ativas do mercado de quadrinhos
          verticais, com a <strong>STRAIGHT EDGE</strong> creditada ao lado do autor nas fichas
          oficiais da Kakao Webtoon e da Piccoma. Ou seja: nada de estúdio de animação — o "estúdio"
          aqui é a equipe de arte e produção do webtoon.
        </p>
        <p>
          A estreia aconteceu em <strong>11 de outubro de 2022</strong>, simultaneamente na
          <strong> KakaoPage</strong> e na <strong>Kakao Webtoon</strong>, as duas plataformas de
          quadrinhos digitais do grupo Kakao. No Japão, a série é publicada sob o título
          <em> お求めいただいた暴君陛下の悪女です</em> em serviços como <strong>Piccoma</strong> e
          <strong> Gaugau Monster</strong>, este último ligado à editora <strong>Futabasha</strong>,
          que também lança as edições em volume pelo selo Monster Comics f — o oitavo volume saiu em
          maio de 2026.
        </p>
        <p>
          Sobre a contagem de capítulos, é preciso separar as versões, porque elas não andam juntas.
          A ficha da Piccoma registra <strong>mais de 180 episódios</strong> na serialização
          japonesa, com atualização semanal aos domingos. Já as traduções catalogadas na MangaDex
          chegam à casa dos <strong>105 capítulos</strong>. A obra continua em publicação, então
          qualquer número aqui envelhece rápido: a referência segura é "passou dos 180 episódios no
          original e segue semanal".
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Trophy className="h-6 w-6 text-otaku" />
          Reconhecimento: não é um sucesso de nicho
        </h2>
        <p>
          O tamanho da obra fica claro na lista de prêmios. A série ficou em
          <strong> segundo lugar no Tateyomi Manga Awards 2024</strong>, premiação japonesa dedicada
          a quadrinhos de leitura vertical, e em <strong>terceiro na categoria web do Next Manga
          Award 2025</strong>, um dos termômetros mais respeitados do mercado japonês. Também foi
          indicada na edição de 2025 do Tateyomi e escolhida entre os vencedores da categoria
          Smartoon do <strong>Piccoma AWARD 2025</strong>, com base em dados reais de leitura.
        </p>
        <p>
          Na Kakao Webtoon, o contador de audiência da série passa da casa do milhão de leituras, e
          na Piccoma o volume acumulado supera dois milhões de acessos. Traduzindo: é um dos títulos
          de romance de fantasia mais lidos do circuito coreano-japonês atual, o que costuma ser um
          bom indicativo de que a serialização não vai parar no meio.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Globe className="h-6 w-6 text-otaku" />
          Onde ler em português
        </h2>
        <p>
          Não existe, até o momento, licenciamento oficial da obra em português — nem digital, nem
          impresso. A comunidade lusófona acompanha a história por traduções de fãs, e os caminhos
          mais citados por leitores brasileiros são:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>
            <strong>Mangaflix:</strong> aplicativo muito popular no Brasil para leitura de manhwas e
            manhuas traduzidos pela comunidade, com catálogo grande de romances de fantasia coreanos.
          </li>
          <li>
            <strong>Sites de scanlation e agregadores:</strong> procure tanto pelo título em inglês
            quanto pela variação em português usada pelas traduções, "Afundarei Com o Imperador" — a
            nomenclatura muda de grupo para grupo.
          </li>
          <li>
            <strong>MangaDex:</strong> serve como índice confiável para saber quais capítulos já
            foram traduzidos e por quem, incluindo a lista em português brasileiro.
          </li>
          <li>
            <strong>Oficial em coreano:</strong> KakaoPage e Kakao Webtoon publicam a versão original,
            sempre à frente de qualquer tradução.
          </li>
          <li>
            <strong>Oficial em japonês:</strong> Piccoma e Gaugau Monster, com volumes digitais pela
            Futabasha. Vale o aviso: o acesso à Piccoma é restrito ao Japão.
          </li>
        </ul>
        <p>
          Como sempre reforçamos por aqui: traduções de fãs existem porque não há alternativa oficial
          em português. Se a obra for licenciada no Brasil algum dia — e o histórico recente de
          manhwas de romance por aqui sugere que é possível —, comprar a edição oficial é a forma
          mais direta de fazer com que mais títulos do gênero cheguem traduzidos.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <tbody>
              {FICHA.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-3 font-bold bg-card/60 whitespace-nowrap align-top">{row.label}</td>
                  <td className="p-3 text-foreground/90">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Swords className="h-6 w-6 text-otaku" />
          Vale a pena começar?
        </h2>
        <p>
          Se você gosta de protagonistas que voltam no tempo com uma lista de contas a acertar, de
          romances em que a atração nasce de reconhecimento e não de acaso, e de cortes imperiais em
          que uma frase mal colocada custa uma cabeça, a resposta é sim. A arte é um dos pontos mais
          elogiados — colorização rica, figurino elaborado e enquadramentos que aproveitam bem a
          leitura vertical — e o ritmo dos primeiros capítulos é rápido o bastante para fisgar.
        </p>
        <p>
          Se, por outro lado, você procura leveza, comédia romântica ou um mundo de fantasia com
          sistema mágico detalhado e batalhas épicas, provavelmente vai se frustrar. Magia existe,
          mas é ambientação; a guerra existe, mas serve de pano de fundo. O verdadeiro campo de
          batalha aqui é a mesa de negociação — e a arma preferida da protagonista é saber o futuro.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <HelpCircle className="h-6 w-6 text-otaku" />
          Perguntas frequentes
        </h2>
        <div className="not-prose space-y-4 my-6">
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quem é Larcy?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              É a protagonista: primeira princesa do Reino de Berry, apelidada de "Princesa dos
              Morcegos". Capturada pelo Império Chariot após tentar resgatar a irmã Nicola, passa dez
              anos em cativeiro, é traída pela própria família e executada — voltando então dez anos
              ao passado para se vingar.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quando o manhwa foi lançado e quem publica?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A estreia foi em 11 de outubro de 2022, na KakaoPage e na Kakao Webtoon. No Japão, a
              série sai pela Piccoma e pela Gaugau Monster, com volumes pela editora Futabasha.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quantos capítulos tem?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A obra segue em publicação. A versão japonesa da Piccoma já passa de 180 episódios, com
              lançamento semanal, enquanto as traduções catalogadas na MangaDex chegam à casa dos 105
              capítulos.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Qual estúdio produz o manhwa?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O webtoon é criado por Tenichi (天壱) e produzido pelo estúdio japonês SORAJIMA, com a
              STRAIGHT EDGE creditada nas fichas oficiais. Não há adaptação em anime confirmada.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Onde ler em português?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não há edição oficial em PT-BR. A leitura acontece por traduções da comunidade, em apps
              como o Mangaflix e em sites de scanlation, geralmente sob o título "Afundarei Com o
              Imperador". A MangaDex ajuda a localizar quais capítulos já foram traduzidos.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="otaku">
        <p>
          Existem dezenas de manhwas de regressão e vingança, e a maioria se perde no mesmo erro:
          transforma a protagonista numa santa que só reage. <em>I Will Fall With the Emperor</em>
          acerta justamente por assumir o oposto desde o título — Larcy não quer se redimir, quer
          descer junto com o imperador e levar meia corte no caminho. Essa clareza moral invertida é
          rara e é o que mantém a leitura viciante.
        </p>
        <p>
          A ressalva é o peso: cativeiro, mutilação e traição familiar aparecem cedo e sem
          amortecimento. Não é leitura para quem quer relaxar. E, como a obra segue em publicação
          semanal e sem edição oficial em português, acompanhar exige paciência com o descompasso
          entre o original coreano e as traduções que chegam até aqui.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          {
            title: "I Will Fall with the Emperor — ficha da série, enredo, personagens e prêmios",
            url: "https://en.wikipedia.org/wiki/I_Will_Fall_with_the_Emperor",
            publisher: "Wikipedia",
            accessedAt: "Setembro 2026",
          },
          {
            title: "황제와 함께 타락하겠습니다 — página oficial da série (Tenichi, Straight Edge, SORAJIMA)",
            url: "https://webtoon.kakao.com/content/%ED%99%A9%EC%A0%9C%EC%99%80-%ED%95%A8%EA%BB%98-%ED%83%80%EB%9D%BD%ED%95%98%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4/4338",
            publisher: "Kakao Webtoon",
            accessedAt: "Setembro 2026",
          },
          {
            title: "황제와 함께 타락하겠습니다 — página oficial da obra na KakaoPage",
            url: "https://page.kakao.com/content/60392503",
            publisher: "KakaoPage",
            accessedAt: "Setembro 2026",
          },
          {
            title: "お求めいただいた暴君陛下の悪女です — ficha japonesa, contagem de episódios e créditos de produção",
            url: "https://piccoma.com/web/product/134798",
            publisher: "Piccoma (Kakao Piccoma Corp.)",
            accessedAt: "Setembro 2026",
          },
          {
            title: "I Will Fall With the Emperor — gêneros, público, status e capítulos traduzidos",
            url: "https://mangadex.org/title/ee7b5c7e-a8eb-4c7a-93aa-17cae960acdf",
            publisher: "MangaDex",
            accessedAt: "Setembro 2026",
          },
          {
            title: "お求めいただいた暴君陛下の悪女です（コミック）8 — volume mais recente pelo selo Monster Comics f",
            url: "https://bookwalker.jp/def43c2c82-a08c-44b6-a2dd-021f6339122a/",
            publisher: "BOOK☆WALKER / Futabasha",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Mangaflix — aplicativo de leitura de manhwas e manhuas em português",
            url: "https://play.google.com/store/apps/details?id=com.mangaflix.app",
            publisher: "Google Play Store",
            accessedAt: "Setembro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default FallWithEmperorLarcyGuia2026;
