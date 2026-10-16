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
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";
import { Clock, User, Calendar, BookOpen, ListChecks, HelpCircle, Heart, Sparkles, Users, Tv } from "lucide-react";
import heroImg from "@/assets/minha-proxima-vida-como-vila-hamefura-guia-2026.webp";

const SLUG = "minha-proxima-vida-como-vila-hamefura-guia-2026";
const TITLE = "Minha Próxima Vida como Vilã: Guia Completo de Hamefura — Personagens, Anime e Por Que Todos Amam Katarina";

const FICHA = [
  { label: "Título original", value: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijō ni Tensei shite Shimatta… (apelido: Hamefura)" },
  { label: "Título em inglês", value: "My Next Life as a Villainess: All Routes Lead to Doom!" },
  { label: "Autora", value: "Satoru Yamaguchi (história original)" },
  { label: "Ilustrações e mangá", value: "Nami Hidaka" },
  { label: "Editora japonesa", value: "Ichijinsha" },
  { label: "Origem", value: "Web novel publicada no site Shōsetsuka ni Narō, depois light novel" },
  { label: "Anime", value: "SILVER LINK — 1ª temporada (2020), 2ª temporada \"X\" (2021) e filme (2023)" },
  { label: "Gêneros", value: "Isekai/reencarnação, otome game, comédia romântica, fantasia, vilã protagonista" },
];

const PERSONAGENS = [
  { nome: "Katarina Claes", texto: "Filha do duque Claes. Aos 8 anos bate a cabeça e lembra da vida passada como colegial otaku no Japão. Descobre que é a vilã de Fortune Lover e passa a vida tentando evitar exílio ou morte. Distraída, gulosa, apaixonada por horta — e de um coração enorme." },
  { nome: "Geordo Stuart", texto: "Terceiro príncipe e noivo de Katarina. No jogo, é o príncipe perfeito e frio. Na prática, fica fascinado justamente porque ela é a única pessoa que não o trata como troféu, e esconde por trás do sorriso um ciúme quase cômico." },
  { nome: "Keith Claes", texto: "Irmão adotivo de Katarina, filho ilegítimo trazido para a família. No jogo seria um rapaz solitário e mulherengo; com Katarina o tirando do isolamento desde criança, vira um irmão protetor e dedicado." },
  { nome: "Alan Stuart", texto: "Gêmeo de Geordo, vivia à sombra do irmão. Katarina o desafia em competições infantis e elogia seu talento musical, ajudando-o a deixar o complexo de inferioridade." },
  { nome: "Mary Hunt", texto: "Noiva de Alan e filha de marquês. Tímida e oprimida pelas irmãs, ganha confiança quando Katarina elogia seu dom com jardins. Torna-se uma das maiores admiradoras da protagonista." },
  { nome: "Nicol Ascart", texto: "Filho do primeiro-ministro, de beleza quase hipnótica e poucas palavras. Admira a forma natural como Katarina trata sua irmã Sophia." },
  { nome: "Sophia Ascart", texto: "Irmã de Nicol, de cabelos brancos e olhos vermelhos, alvo de preconceito. Encontra em Katarina uma amiga que compartilha seu amor por romances." },
  { nome: "Maria Campbell", texto: "A heroína original do otome game, plebeia com magia rara da Luz. Katarina deveria atormentá-la; em vez disso, elogia seus doces e a defende, e Maria passa a adorá-la." },
];

const MinhaProximaVidaComoVila2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category="otaku" size="lg" />
          <span className="text-xs bg-otaku/10 text-otaku border border-otaku/30 px-2 py-1 rounded-full font-bold">📗 Mangá e light novel</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="16 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1280} height={720}
            alt="Ilustração de uma jovem nobre de cabelo castanho cuidando de uma horta, cercada de amigos sorridentes"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no clima da obra. Não é arte oficial de Hamefura.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Imagine acordar dentro do seu jogo favorito e descobrir que você é a vilã — aquela que, em todas as rotas,
          termina exilada ou morta. Essa é a premissa de <em>Minha Próxima Vida como Vilã: Todos os Caminhos Levam à
          Perdição!</em>, conhecida pelos fãs como <strong>Hamefura</strong>. Neste guia você conhece a origem da obra,
          os principais personagens, por que todos acabam apaixonados por Katarina Claes e onde assistir no Brasil.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/5 to-card/50">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold mb-4"><ListChecks className="h-5 w-5 text-otaku" />Resumo rápido</h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc list-inside">
            <li>Light novel de Satoru Yamaguchi, com ilustrações e mangá de Nami Hidaka, pela Ichijinsha.</li>
            <li>Katarina reencarna como a vilã do otome game Fortune Lover e tenta fugir dos finais ruins.</li>
            <li>Anime da SILVER LINK em duas temporadas (2020 e 2021) e um filme lançado no Japão em 8 de dezembro de 2023.</li>
            <li>As temporadas estão na Crunchyroll com dublagem e legendas em português do Brasil.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><BookOpen className="h-6 w-6 text-otaku" />A origem: de web novel a fenômeno</h2>
        <p>
          Hamefura nasceu como web novel no site japonês Shōsetsuka ni Narō, o mesmo celeiro que revelou boa parte dos
          isekais da última década. O sucesso levou a história a ser publicada em formato de light novel pela editora
          Ichijinsha, com ilustrações de Nami Hidaka, que também desenha a adaptação em mangá. O apelido "Hamefura" vem
          da junção de <em>hametsu</em> (ruína) e <em>flag</em> (gatilho de evento em jogos) — exatamente o que
          Katarina passa a obra tentando desarmar.
        </p>
        <p>
          A obra ajudou a popularizar um subgênero que hoje lota as prateleiras: a "vilã de otome game reencarnada".
          Antes dela já existiam histórias parecidas, mas foi Hamefura que, com o anime de 2020, levou a fórmula ao
          grande público fora do Japão. O título em inglês, <em>My Next Life as a Villainess: All Routes Lead to
          Doom!</em>, resume a piada: não importa a rota, a vilã se dá mal — a não ser que ela mude as regras.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Sparkles className="h-6 w-6 text-otaku" />A premissa: uma vilã que só queria sobreviver</h2>
        <p>
          A jovem Katarina Claes, filha de um duque, cai e bate a cabeça numa pedra aos oito anos. Nesse instante,
          recupera as memórias da vida passada: era uma colegial otaku japonesa, apaixonada pelo otome game
          <em> Fortune Lover</em>, que morreu num acidente a caminho da escola. Ela percebe que o mundo ao seu redor é o
          mesmo do jogo — e que ela é a antagonista mimada que atrapalha os romances da heroína.
        </p>
        <p>
          No jogo, o melhor final para Katarina é o exílio; o pior, a morte. Com oito anos de vantagem antes de o enredo
          começar na Academia de Magia, ela traça planos para escapar de cada "flag de destruição": treina esgrima para
          enfrentar o noivo, aprende magia, e começa uma horta para ter como se sustentar caso seja exilada. O detalhe é
          que, ao tentar só se salvar, ela muda a vida de todo mundo ao redor.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Users className="h-6 w-6 text-otaku" />Os principais personagens</h2>
      </div>

      <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
        {PERSONAGENS.map((p) => (
          <div key={p.nome} className="p-5 rounded-xl border border-otaku/30 bg-card/60">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{p.nome}</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          Também vale citar <strong>Anne Shelley</strong>, a criada leal de Katarina, que assiste a cada loucura da
          patroa com paciência infinita, e a mãe de Katarina, cujas broncas são uma das piadas recorrentes da série.
          A segunda temporada amplia o elenco com novos rostos ligados à Academia e ao Ministério da Magia.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Heart className="h-6 w-6 text-otaku" />Por que todos se apaixonam por Katarina</h2>
        <p>
          O grande charme de Hamefura é o "harém por acidente". Katarina não tenta seduzir ninguém — ela está ocupada
          demais tentando não morrer e cuidando dos legumes. E é justamente essa sinceridade que derruba as defesas de
          cada personagem. Ela não liga para títulos, não faz jogos políticos e diz exatamente o que pensa, inclusive
          elogios que ninguém tinha coragem de fazer.
        </p>
        <p>
          Cada um dos rapazes e moças do elenco carrega uma ferida: Keith foi rejeitado pela família, Alan se sentia
          inferior ao irmão, Mary era oprimida pelas irmãs, Sophia sofria preconceito pela aparência, e Maria era
          isolada por ser plebeia com magia rara. Katarina se aproxima de todos sem preconceito, enxerga o talento de
          cada um e o diz em voz alta. Para ela, é só ser legal; para eles, é a primeira vez que alguém os vê de verdade.
        </p>
        <p>
          A comédia nasce do contraste: enquanto o leitor percebe que Geordo, Keith, Mary, Maria e companhia estão
          perdidamente encantados, Katarina interpreta tudo errado. Ela acredita que Maria vai ficar com algum dos
          rapazes e que ela própria continua em perigo — e passa a obra inteira lendo sinais de amor como sinais de
          condenação. É uma "comédia romântica de mal-entendidos", como a própria Crunchyroll descreve a série.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Sparkles className="h-6 w-6 text-otaku" />Boba e atrapalhada — mas decisiva quando importa</h2>
        <p>
          Katarina é, sem rodeios, uma desastrada. Ela sobe em árvores com vestido de nobre, come doces demais, foge
          das aulas de etiqueta, é péssima em estudar e só consegue usar magia de terra para levantar um pequeno
          montinho de solo. Uma das sacadas mais divertidas da obra é o "Conselho Katarina": dentro da cabeça dela,
          várias versões de si mesma — a esperta, a tímida, a sincera, a que só pensa em comida — debatem cada decisão,
          quase sempre chegando à conclusão mais absurda possível.
        </p>
        <p>
          Mas o roteiro sabe a hora de virar a chave. Quando alguém querido está em perigo ou sendo tratado com
          injustiça, a mesma garota que tropeça nos próprios pés age sem hesitar. Ela enfrenta nobres que humilham
          amigos, se coloca entre pessoas e situações perigosas e oferece apoio quando todos os outros desviaram o olhar.
          A coragem de Katarina não vem de poder ou estratégia, e sim da teimosia em não abandonar quem ela gosta.
        </p>
        <p>
          É esse equilíbrio que torna a personagem tão marcante. A obra nunca a transforma em gênio escondido: ela
          continua boba, e suas vitórias vêm de bondade, persistência e da capacidade de inspirar os outros. Por isso
          os amigos se mobilizam por ela com a mesma intensidade com que ela se mobiliza por eles.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Tv className="h-6 w-6 text-otaku" />O anime e o filme</h2>
        <p>
          A adaptação animada é do estúdio SILVER LINK, com direção de Keisuke Inoue e Maaya Uchida como a voz de
          Katarina. A primeira temporada estreou em abril de 2020, em plena pandemia, e virou uma das comédias mais
          comentadas do ano. A segunda temporada, chamada <em>Hamefura X</em>, foi exibida em 2021. As duas temporadas
          receberam OVAs, e a série foi premiada no Crunchyroll Anime Awards de 2021.
        </p>
        <p>
          Em dezembro de 2023 chegou aos cinemas japoneses <em>Hamefura: O Filme</em>, também da SILVER LINK e
          distribuído pela Asmik Ace, com cerca de 90 minutos e uma história original escrita a partir de argumento
          da própria Satoru Yamaguchi. O elenco da série voltou para seus papéis.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><BookOpen className="h-6 w-6 text-otaku" />Ficha técnica</h2>
      </div>

      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            {FICHA.map((f) => (
              <tr key={f.label} className="border-b border-border last:border-0">
                <th className="text-left p-3 font-semibold text-otaku w-1/3 align-top">{f.label}</th>
                <td className="p-3 text-foreground/90">{f.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="font-display text-2xl font-bold mt-10 mb-4">Onde assistir e ler no Brasil</h2>
        <p>
          As duas temporadas do anime estão na <strong>Crunchyroll</strong>, com áudio dublado e legendas em português
          do Brasil, além dos OVAs. Para quem prefere ler, a light novel e o mangá têm edição oficial em inglês pela
          Seven Seas Entertainment. Até a data deste artigo, não confirmamos uma edição oficial impressa em português;
          se ela for anunciada, atualizaremos este guia. Recomendamos sempre o material licenciado, que remunera a
          autora e a ilustradora.
        </p>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">Para quem é Hamefura?</h2>
        <p>
          Se você gosta de comédias leves, protagonistas carismáticas e romances em que o mal-entendido é a graça, é
          uma escolha certeira. Também é uma boa porta de entrada para o subgênero de vilãs reencarnadas, antes de
          partir para obras mais dramáticas. Quem procura batalhas épicas ou romance resolvido rapidamente pode se
          frustrar: o foco é o humor e os laços de amizade que Katarina constrói sem perceber.
        </p>
      </div>

      <section className="not-prose my-10">
        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mb-4"><HelpCircle className="h-6 w-6 text-otaku" />Perguntas frequentes</h2>
        <div className="grid gap-3">
          {[
            ["O que significa Hamefura?", "É a abreviação japonesa de \"hametsu flag\", ou \"flag de ruína\": os eventos que levariam Katarina ao exílio ou à morte."],
            ["Quem é a autora?", "Satoru Yamaguchi escreveu a história; Nami Hidaka faz as ilustrações e o mangá, publicados pela Ichijinsha."],
            ["Quantas temporadas tem o anime?", "Duas temporadas (2020 e 2021), com OVAs, e um filme lançado no Japão em 8 de dezembro de 2023."],
            ["Onde assistir dublado?", "Na Crunchyroll, que oferece dublagem e legendas em português do Brasil."],
            ["Katarina fica com alguém?", "A obra mantém o romance em aberto e foca nos mal-entendidos; para evitar spoilers, não revelamos desfechos."],
            ["Hamefura é isekai?", "Sim. É um isekai de reencarnação: a protagonista morre no Japão e renasce no mundo de um otome game."],
          ].map(([q, a]) => (
            <div key={q} className="p-4 rounded-xl border border-otaku/30 bg-card/60">
              <h3 className="font-semibold text-otaku mb-1">{q}</h3>
              <p className="text-sm text-foreground/90">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <EditorialTake category="otaku">
        <p>
          Hamefura funciona porque inverte a lógica do gênero: em vez de uma vilã calculista que manipula o enredo,
          temos uma garota ingênua que vence pela gentileza. É uma obra leve, sem pretensão de ser profunda, mas que
          fala com sinceridade sobre como pequenos gestos mudam a vida de quem se sente invisível.
        </p>
        <p>
          Para mim, o maior mérito é Katarina nunca deixar de ser boba. A série não precisa transformá-la em gênio para
          que ela seja heroína — e isso a torna uma das protagonistas mais queridas do isekai recente.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "My Next Life as a Villainess: All Routes Lead to Doom! — série", url: "https://www.crunchyroll.com/series/GY5PW4JEY/my-next-life-as-a-villainess-all-routes-lead-to-doom", publisher: "Crunchyroll", accessedAt: "Outubro 2026" },
          { title: "My Next Life as a Villainess Anime Film Reintroduces Catarina Claes", url: "https://www.crunchyroll.com/news/latest/2023/10/19/my-next-life-as-a-villainess-anime-movie-catarina-claes-character-trailer", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "My Next Life as a Villainess: All Routes Lead to Doom! The Movie", url: "https://en.wikipedia.org/wiki/My_Next_Life_as_a_Villainess:_All_Routes_Lead_to_Doom!_The_Movie", publisher: "Wikipédia (em inglês)", accessedAt: "Outubro 2026" },
          { title: "My Next Life as a Villainess: All Routes Lead to Doom!", url: "https://en.wikipedia.org/wiki/My_Next_Life_as_a_Villainess:_All_Routes_Lead_to_Doom!", publisher: "Wikipédia (em inglês)", accessedAt: "Outubro 2026" },
          { title: "HameFura: My Next Life as a Villainess Plans Ahead", url: "https://blog.jlist.com/news/hamefura-my-next-life-as-a-villainess-plans-ahead/", publisher: "J-List Blog", accessedAt: "Outubro 2026" },
          { title: "My Next Life as a Villainess — light novel e mangá", url: "https://sevenseasentertainment.com/series/my-next-life-as-a-villainess-all-routes-lead-to-doom-light-novel/", publisher: "Seven Seas Entertainment", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default MinhaProximaVidaComoVila2026;
