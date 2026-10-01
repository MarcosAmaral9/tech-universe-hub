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
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
import {
  BookOpen, Building2, Calendar, Castle, Clock, Compass, Crown,
  DraftingCompass, HardHat, HelpCircle, ListChecks, Shield, User,
} from "lucide-react";
import estateDeveloperImg from "@/assets/the-greatest-estate-developer-o-melhor-engenheiro-do-mundo-guia-2026.webp";

const SLUG = "the-greatest-estate-developer-o-melhor-engenheiro-do-mundo-guia-2026";
const TITLE = "The Greatest Estate Developer: Guia de O Melhor Engenheiro do Mundo";

const FICHA = [
  { label: "Título coreano", value: "역대급 영지 설계사 (Yeokdaegeup Yeongji Seolgyesa)" },
  { label: "Título no Brasil", value: "O Melhor Engenheiro do Mundo" },
  { label: "Outros títulos", value: "The Greatest Estate Developer; The World's Best Engineer" },
  { label: "Obra original", value: "Web novel de BK_Moon (Moon Baek-kyung), publicada de junho de 2019 a novembro de 2020" },
  { label: "Webtoon", value: "Adaptação de Lee Hyun-min, com arte de Kim Hyun-soo" },
  { label: "Estreia do webtoon", value: "Agosto de 2021 na Naver Webtoon" },
  { label: "Status", value: "Concluído" },
  { label: "Capítulos", value: "228 episódios no índice oficial coreano; 222 capítulos em alguns catálogos internacionais" },
  { label: "Protagonistas", value: "Kim Suho/Lloyd Frontera e Javier Asrahan" },
  { label: "Gêneros", value: "Fantasia, comédia, aventura, transmigração/isekai e administração de território" },
  { label: "Edição brasileira", value: "NewPOP, edição física colorida em português" },
];

const PILARES = [
  {
    titulo: "Engenharia que resolve problemas",
    texto: "Lloyd não transforma conhecimento moderno em uma arma milagrosa. Ele observa o terreno, estima materiais, organiza trabalhadores, negocia recursos e adapta soluções à tecnologia disponível. Pontes, canais, estradas e fundações surgem como respostas a necessidades concretas do território.",
  },
  {
    titulo: "Administração e economia",
    texto: "Construir custa dinheiro. Por isso, cada projeto envolve orçamento, mão de obra, risco, prazo e retorno. O protagonista procura receitas, convence clientes e usa obras públicas para tornar o domínio mais produtivo. Essa camada de gestão diferencia a série de fantasias centradas apenas em combates.",
  },
  {
    titulo: "Comédia de personalidade",
    texto: "O humor nasce do contraste entre a imagem que Lloyd deseja projetar e as expressões exageradas que os outros enxergam. Sua obsessão por lucro, sobrevivência e eficiência rende reações memoráveis, enquanto Javier funciona como contraponto sério e observador.",
  },
  {
    titulo: "Fantasia e aventura",
    texto: "A engenharia não elimina magia, monstros ou conflitos políticos. Ela passa a coexistir com cavaleiros, criaturas fantásticas e poderes sobrenaturais. A história cresce de um problema familiar para desafios maiores sem abandonar a lógica de planejamento que define Lloyd.",
  },
];

const TheGreatestEstateDeveloperGuia2026 = () => {
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
            📘 Manhwa
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />30 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={estateDeveloperImg}
          width={1536}
          height={864}
          alt="Jovem engenheiro com plantas e cavaleiro diante de pontes, aquedutos e uma cidade medieval em construção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          E se um estudante de engenharia civil acordasse dentro de um romance de fantasia, não como o herói, mas como um nobre arruinado destinado a um fim miserável? Essa é a ideia de <em>The Greatest Estate Developer</em>, publicado oficialmente no Brasil como <strong>O Melhor Engenheiro do Mundo</strong>. Kim Suho desperta no corpo de Lloyd Frontera e percebe que espadas e profecias não serão suficientes para salvar sua nova família. Sua principal vantagem é saber projetar, calcular, construir e administrar. Neste guia, você encontra a história sem spoilers decisivos, o papel de Javier, o Reino de Magentano, os gêneros, os créditos, as datas, a contagem de capítulos e onde ler legalmente em português.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/10 via-card/70 to-card/40">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold mb-4"><ListChecks className="h-5 w-5 text-otaku" />Resumo rápido</h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc list-inside">
            <li>Kim Suho transmigra para o corpo de Lloyd Frontera, personagem secundário de um romance que ele estava lendo.</li>
            <li>O domínio Frontera está endividado, e Lloyd usa engenharia civil e gestão para mudar o futuro da família.</li>
            <li>Javier Asrahan, o herói original do livro, torna-se parceiro essencial de Lloyd.</li>
            <li>A web novel é de BK_Moon; o webtoon foi adaptado por Lee Hyun-min e desenhado por Kim Hyun-soo.</li>
            <li>A série está concluída; a Naver exibe 228 episódios, enquanto outros catálogos contam 222 capítulos.</li>
            <li>Há edição física oficial em português pela NewPOP.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><BookOpen className="h-6 w-6 text-otaku" />A história: Kim Suho acorda como Lloyd Frontera</h2>
        <p>
          Kim Suho é um estudante de engenharia civil da Coreia do Sul. Cansado, endividado e sem perspectivas grandiosas, ele lê um romance de fantasia antes de dormir. Ao acordar, não está mais em seu quarto: ocupa o corpo de <strong>Lloyd Frontera</strong>, o filho mais velho de uma família nobre dentro daquele livro. A situação seria atraente se Lloyd não fosse conhecido como preguiçoso, beberrão, agressivo e irresponsável. Pior: Suho lembra que a família Frontera caminha para a ruína.
        </p>
        <p>
          A transmigração dá ao novo Lloyd uma informação preciosa: ele conhece o enredo geral e sabe quais tragédias se aproximam. Entretanto, isso não significa que possa simplesmente seguir um manual. Sua presença muda relações, escolhas e consequências. A reputação do antigo Lloyd continua viva, os criados desconfiam dele e os credores não desaparecem porque sua personalidade mudou. Antes de salvar um reino, precisa convencer a própria casa de que não está planejando outra confusão.
        </p>
        <p>
          Seu primeiro objetivo é pragmático: evitar pobreza, prisão e morte. Para isso, analisa os recursos do território e começa a aplicar conceitos que aprendeu na universidade. Ele não dispõe de concreto armado moderno, computadores ou máquinas pesadas. Precisa trabalhar com pedra, madeira, ferramentas simples, magia e a força disponível naquele mundo. O encanto da série vem justamente dessa adaptação. Lloyd não apenas cita uma invenção contemporânea; ele transforma teoria em uma obra possível dentro de limitações medievais.
        </p>
        <p>
          Cada sucesso altera a maneira como as pessoas o veem. Trabalhadores descobrem um patrão disposto a entrar no canteiro, moradores percebem melhorias concretas e a família encontra uma possibilidade de sobreviver às dívidas. A mudança, porém, não apaga a personalidade excêntrica do protagonista. O novo Lloyd é calculista, econômico ao extremo e capaz de produzir expressões assustadoras quando imagina lucro. A série explora essa contradição: suas motivações podem parecer egoístas, mas os projetos acabam melhorando a vida de muita gente.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><HardHat className="h-6 w-6 text-otaku" />Por que a engenharia importa de verdade</h2>
        <p>
          Muitas histórias de reencarnação oferecem ao protagonista uma habilidade invencível. Aqui, a ferramenta principal é o raciocínio técnico. Lloyd avalia solo, fluxo de água, inclinação, carga, transporte e disponibilidade de materiais. Também entende que uma obra só funciona quando há planejamento de pessoas e dinheiro. Mesmo quando a magia acelera uma tarefa, ela não substitui a necessidade de escolher o lugar certo, prever falhas e organizar etapas.
        </p>
        <p>
          O webtoon traduz esses conceitos em cenas visuais e acessíveis. Diagramas, cortes de terreno e explicações simples ajudam o leitor a acompanhar por que uma solução funciona. A narrativa não pretende ser um manual universitário, e a fantasia permite atalhos impossíveis no mundo real. Ainda assim, ela respeita a ideia central de que infraestrutura muda sociedades. Uma estrada reduz o custo de transporte; irrigação torna o cultivo mais confiável; moradia e saneamento protegem a população; pontes conectam mercados antes separados.
        </p>
        <p>
          Há também uma dimensão social. Lloyd precisa conquistar a confiança dos trabalhadores, definir incentivos e provar que seus planos não são caprichos. Em vez de tratar a mão de obra como cenário, a história frequentemente mostra treinamento, alimentação, segurança e moral. Isso cria uma fantasia de competência particularmente satisfatória: a vitória não chega apenas quando um inimigo cai, mas quando um projeto termina, a água corre pelo canal e uma comunidade passa a funcionar melhor.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {PILARES.map((item) => (
            <section key={item.titulo} className="p-5 rounded-xl border border-otaku/25 bg-card/60">
              <h3 className="font-display font-bold text-otaku mb-2">{item.titulo}</h3>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{item.texto}</p>
            </section>
          ))}
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Shield className="h-6 w-6 text-otaku" />Javier Asrahan: o herói original do romance</h2>
        <p>
          No livro que Kim Suho conhecia, <strong>Javier Asrahan</strong> era o verdadeiro protagonista: um cavaleiro talentoso ligado à família Frontera e destinado a se tornar um espadachim extraordinário. Quando Suho ocupa o corpo de Lloyd, encontra Javier ainda no início dessa trajetória. O cavaleiro conhece perfeitamente a reputação terrível do jovem mestre e reage à mudança repentina com suspeita. Para ele, um Lloyd educado e trabalhador pode ser uma armadilha ainda mais preocupante que o antigo.
        </p>
        <p>
          A relação entre os dois se torna o coração da obra. Javier oferece poder de combate, disciplina e leitura de perigo; Lloyd contribui com estratégia, negociação e soluções improváveis. Um compensa as fraquezas do outro. A seriedade quase imperturbável do cavaleiro também potencializa a comédia, especialmente quando precisa assistir aos métodos teatrais, aos cálculos financeiros e às caretas de seu patrão.
        </p>
        <p>
          Essa dupla evita que o protagonista pareça capaz de tudo sozinho. Lloyd sabe construir, mas não é o maior guerreiro do mundo. Javier pode enfrentar ameaças que nenhum engenheiro venceria com uma régua. Ao mesmo tempo, força bruta não resolve falência, escassez ou infraestrutura. A amizade cresce por resultados e confiança conquistada, não porque o enredo declara imediatamente que eles são inseparáveis.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Castle className="h-6 w-6 text-otaku" />Território Frontera e Reino de Magentano</h2>
        <p>
          A família Frontera administra um território dentro do <strong>Reino de Magentano</strong>. No começo, o nome nobre esconde uma realidade frágil: dívida, baixa produtividade e recursos limitados. Esse espaço funciona como laboratório para Lloyd. Em vez de receber uma capital rica pronta para governar, ele precisa identificar gargalos e construir uma base econômica praticamente do zero.
        </p>
        <p>
          O cenário feudal também determina as regras. Terras pertencem a casas nobres, títulos definem autoridade e projetos podem afetar interesses de vizinhos, comerciantes e governantes. Quanto mais o domínio Frontera prospera, mais atenção recebe. A escala política cresce gradualmente, mas a narrativa mantém a infraestrutura conectada aos conflitos: uma construção pode ser uma fonte de receita, uma defesa, uma rota estratégica ou uma demonstração de poder.
        </p>
        <p>
          Outros territórios e povos ampliam o mapa ao longo da aventura, incluindo regiões com condições naturais e culturas distintas. Para preservar as descobertas, este guia não enumera alianças tardias nem resultados de grandes crises. O importante é saber que o mundo não serve apenas de fundo genérico. Distância, relevo, clima e acesso a recursos influenciam os problemas que Lloyd precisa resolver.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Crown className="h-6 w-6 text-otaku" />Existe romance para Lloyd?</h2>
        <p>
          Existe uma linha romântica, mas ela não é o centro de <em>The Greatest Estate Developer</em>. <strong>Alicia Termina Magentano</strong>, figura importante da realeza, entra na órbita de Lloyd por questões políticas e por sua capacidade incomum de resolver problemas. A relação se desenvolve devagar, apoiada em encontros, avaliações mútuas e nas consequências dos projetos do protagonista.
        </p>
        <p>
          Quem chega esperando um romance contínuo pode estranhar: durante boa parte da obra, construção, aventura e comédia ocupam mais espaço. A aproximação funciona justamente porque Lloyd não abandona seus objetivos para virar um protagonista romântico convencional. Alicia possui responsabilidades próprias e não existe apenas para admirá-lo. Como o desfecho do vínculo é uma descoberta importante, não vamos revelar casamento, parentesco futuro ou cenas finais.
        </p>
        <p>
          Também vale separar cânone de comunidade. Fãs criam pares alternativos e interpretações da intensa parceria entre Javier e Lloyd, mas isso não muda o texto publicado. Ao procurar informações, é comum encontrar wikis e redes sociais que exibem spoilers do final como se fossem uma apresentação básica. A melhor experiência é acompanhar o desenvolvimento no ritmo da história.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Compass className="h-6 w-6 text-otaku" />Gêneros: isekai, transmigração, fantasia e comédia</h2>
        <p>
          A obra costuma ser classificada como fantasia, aventura e comédia. O termo <strong>isekai</strong> ajuda o público a reconhecer a viagem para outro mundo, embora <strong>transmigração</strong> seja mais preciso: Kim Suho não chega com o próprio corpo; sua consciência desperta em Lloyd, alguém que já existia dentro do romance. Alguns catálogos também usam “reencarnação” de forma ampla para reunir histórias desse tipo.
        </p>
        <p>
          Há ainda elementos de administração territorial, fantasia de competência e sistema. Lloyd recebe mecanismos que organizam recompensas e reconhecimento, mas a série não depende apenas de números. O prazer principal está em observar conhecimento aparentemente comum ganhar valor num ambiente diferente. Essa fórmula aproxima a obra de leitores que gostam de jogos de construção de cidades, mesmo que não acompanhem muitos manhwas.
        </p>
        <p>
          A comédia merece destaque próprio. O desenho de Kim Hyun-soo usa deformações faciais, mudanças súbitas de estilo e enquadramentos dramáticos para transformar negociações em batalhas. Lloyd pode parecer um estrategista elegante em uma página e uma criatura gananciosa na seguinte. Essa elasticidade visual se tornou uma das marcas mais reconhecíveis do webtoon e impede que longas explicações técnicas deixem a leitura pesada.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><DraftingCompass className="h-6 w-6 text-otaku" />Autor, adaptação, artista e lançamento</h2>
        <p>
          <em>The Greatest Estate Developer</em> nasceu como uma <strong>web novel de BK_Moon</strong>, nome também romanizado como Moon Baek-kyung. A serialização original ocorreu na plataforma Naver entre junho de 2019 e novembro de 2020. A conclusão da novel ofereceu uma história completa para a adaptação em quadrinhos desenvolver.
        </p>
        <p>
          O webtoon credita <strong>Lee Hyun-min</strong> pelo texto e adaptação, <strong>Kim Hyun-soo</strong> pela arte e BK_Moon pela obra original. A publicação começou na Naver Webtoon em agosto de 2021 e ganhou distribuição internacional oficial pelo WEBTOON em inglês. É mais correto apresentar esses créditos do que inventar um “estúdio responsável”: as páginas oficiais destacam os criadores e a plataforma, não um estúdio de animação.
        </p>
        <p>
          Em setembro de 2026, a série principal está marcada como concluída. O índice oficial móvel da Naver informa <strong>228 episódios</strong>. MyAnimeList e outros catálogos registram <strong>222 capítulos</strong>. A diferença não significa necessariamente que uma fonte esteja errada: plataformas podem contar prólogo, encerramento e histórias extras como episódios separados, enquanto bases de fãs seguem a numeração narrativa principal. Por isso, a resposta mais transparente é 228 episódios oficiais na Naver, com 222 como contagem comum fora dela.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <tbody>
              {FICHA.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-3 font-bold bg-card/70 align-top md:whitespace-nowrap">{row.label}</td>
                  <td className="p-3 text-foreground/90">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><Building2 className="h-6 w-6 text-otaku" />Onde ler em português e em outros idiomas</h2>
        <p>
          O Brasil tem uma opção licenciada: a <strong>NewPOP</strong> publica o webtoon com o título <strong>O Melhor Engenheiro do Mundo</strong>. A edição física é colorida, em português, e pode ser encontrada no catálogo da editora e em livrarias brasileiras. O primeiro volume possui ISBN 978-85-8362-938-2. Para quem quer apoiar diretamente a chegada de mais obras coreanas ao país, essa é a alternativa recomendada.
        </p>
        <p>
          Em coreano, a fonte oficial é a <strong>Naver Webtoon</strong>. Em inglês, a série está disponível no <strong>WEBTOON</strong>, onde aparece como concluída. A web novel também teve distribuição digital internacional em inglês pelo YONDER. Disponibilidade, episódios gratuitos e sistemas de moedas podem mudar conforme país e plataforma.
        </p>
        <p>
          Aplicativos como <strong>MangaFlix</strong> e outros agregadores são citados por leitores brasileiros, mas não aparecem nas páginas da Naver, WEBTOON ou NewPOP como distribuidores licenciados desta obra. Por isso, não os tratamos como fontes oficiais nem fornecemos links para cópias não autorizadas. Agora que existe uma publicação brasileira, vale procurar primeiro a NewPOP e livrarias parceiras.
        </p>
        <p>
          Antes de comprar, confira se o anúncio informa editora, ISBN e idioma. Títulos internacionais semelhantes podem causar confusão, e “The World's Best Engineer” é apenas um nome alternativo da mesma série. A edição brasileira usa “O Melhor Engenheiro do Mundo”, enquanto a plataforma inglesa mantém “The Greatest Estate Developer”.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4"><HelpCircle className="h-6 w-6 text-otaku" />Perguntas frequentes</h2>
        <div className="not-prose space-y-4 my-6">
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">Quem é o protagonista de The Greatest Estate Developer?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Kim Suho é um estudante de engenharia civil que desperta no corpo de Lloyd Frontera, nobre secundário de um romance de fantasia. Ele passa a usar conhecimento técnico e administrativo para evitar a ruína da família.</p>
          </section>
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">Quantos capítulos tem O Melhor Engenheiro do Mundo?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">O índice oficial da Naver apresenta 228 episódios concluídos. Alguns catálogos internacionais contam 222 capítulos porque prólogos, encerramentos ou extras podem ser agrupados de maneira diferente.</p>
          </section>
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">A obra já terminou?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Sim. A web novel original foi concluída em 2020, e a série principal do webtoon aparece como concluída tanto na Naver quanto no WEBTOON.</p>
          </section>
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">Lloyd tem romance?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Sim, existe desenvolvimento romântico gradual envolvendo Alicia Termina Magentano, mas romance não é o foco principal. Evitamos revelar o desfecho para preservar a experiência.</p>
          </section>
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">Quem criou o manhwa?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">A web novel original é de BK_Moon. O webtoon credita Lee Hyun-min pela adaptação e Kim Hyun-soo pela arte.</p>
          </section>
          <section className="p-5 rounded-xl border border-otaku/20 bg-card/60">
            <h3 className="font-bold text-otaku mb-2">Onde ler oficialmente em português?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">A NewPOP publica a edição física, colorida e licenciada com o título O Melhor Engenheiro do Mundo. Naver Webtoon e WEBTOON oferecem as versões oficiais coreana e inglesa.</p>
          </section>
        </div>
      </div>

      <EditorialTake category="otaku">
        <p>
          O grande acerto de <em>The Greatest Estate Developer</em> é transformar infraestrutura em aventura. Lloyd não vence porque recebeu a espada mais forte, mas porque consegue enxergar uma ponte onde todos veem um rio impossível. O resultado valoriza planejamento, trabalho coletivo e conhecimento sem perder o ritmo de uma comédia fantástica.
        </p>
        <p>
          Javier é indispensável para equilibrar a história: seu silêncio e sua competência impedem que a energia caótica de Lloyd domine tudo. A dupla sustenta tanto as cenas de perigo quanto algumas das melhores piadas. Para quem gosta de progressão, construção de território e protagonistas espertos, esta é uma das obras mais completas do gênero.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "역대급 영지 설계사 — índice oficial, créditos e 228 episódios concluídos", url: "https://m.comic.naver.com/webtoon/list?titleId=777767", publisher: "Naver Webtoon", accessedAt: "Setembro 2026" },
          { title: "The Greatest Estate Developer — edição internacional oficial", url: "https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=3596", publisher: "WEBTOON", accessedAt: "Setembro 2026" },
          { title: "The Greatest Estate Developer — ficha bibliográfica e datas", url: "https://en.wikipedia.org/wiki/The_Greatest_Estate_Developer", publisher: "Wikipedia", accessedAt: "Setembro 2026" },
          { title: "The Greatest Estate Developer — publicação e contagem catalogada", url: "https://myanimelist.net/manga/147272/The_Greatest_Estate_Developer", publisher: "MyAnimeList", accessedAt: "Setembro 2026" },
          { title: "O Melhor Engenheiro do Mundo: Volume 01 — ISBN e edição brasileira", url: "https://www.martinsfontespaulista.com.br/o-melhor-engenheiro-do-mundo--the-greatest-estate-developer---volume-01-1211552/p", publisher: "Martins Fontes Paulista", accessedAt: "Setembro 2026" },
          { title: "The Greatest Estate Developer chega oficialmente ao Brasil pela NewPOP", url: "https://www.jwave.com.br/2026/07/o-webtoon-que-trocou-espadas-por-engenharia-finalmente-chega-ao-brasil/", publisher: "JWave", accessedAt: "Setembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default TheGreatestEstateDeveloperGuia2026;