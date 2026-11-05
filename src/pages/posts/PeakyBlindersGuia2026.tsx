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
import { Clock, User, Calendar, Tv, Film, Users, Scale, Star, HelpCircle, Music, PlayCircle } from "lucide-react";
import heroImg from "@/assets/peaky-blinders-guia-temporadas-filme-2026.webp";

const SLUG = "peaky-blinders-guia-temporadas-filme-historia-real-2026";
const TITLE = "Peaky Blinders: Sangue, Apostas e Navalhas — Guia das 6 Temporadas, do Filme e da História Real";

const TEMPORADAS = [
  { n: 1, ano: "1919", estreia: "12 de setembro de 2013", canal: "BBC Two", eps: 6,
    resumo: "Tommy Shelby volta da Primeira Guerra e comanda as apostas ilegais da família em Small Heath. Um carregamento de armas roubado por engano atrai o inspetor Chester Campbell, enviado por Winston Churchill, e Tommy enfrenta Billy Kimber, o rei das corridas de cavalo. Aqui aparece Grace, a garçonete que muda a vida dele." },
  { n: 2, ano: "1921–1922", estreia: "2 de outubro de 2014", canal: "BBC Two", eps: 6,
    resumo: "Os Shelby partem para Londres. Tommy faz alianças perigosas com Alfie Solomons (Tom Hardy) e entra em guerra com Darby Sabini, enquanto Campbell volta com uma vingança pessoal. Polly reencontra o filho Michael. Culmina no Derby de Epsom." },
  { n: 3, ano: "1924", estreia: "5 de maio de 2016", canal: "BBC Two", eps: 6,
    resumo: "Rico e respeitado, Tommy é arrastado para uma conspiração de russos brancos e de uma sociedade secreta ligada à igreja. A temporada mostra o preço da ascensão social e é considerada uma das mais tensas da série." },
  { n: 4, ano: "1925", estreia: "15 de novembro de 2017", canal: "BBC Two", eps: 6,
    resumo: "A máfia de Nova York chega a Birmingham em busca de vingança, liderada por Luca Changretta (Adrien Brody). A família, dividida, precisa se unir. Muitos fãs apontam esta como a melhor temporada." },
  { n: 5, ano: "1929", estreia: "25 de agosto de 2019", canal: "BBC One", eps: 6,
    resumo: "Com a quebra da Bolsa de 1929, Tommy é deputado no Parlamento e encara o político fascista Oswald Mosley (Sam Claflin). O tom fica mais político e sombrio, e a série estreia no canal principal da BBC." },
  { n: 6, ano: "1933–1934", estreia: "27 de fevereiro de 2022", canal: "BBC One", eps: 6,
    resumo: "Fim da Lei Seca nos EUA, negócios com o Canadá e Boston, Mosley e a ascensão do fascismo. Marcada pela ausência de Polly, após a morte da atriz Helen McCrory em 2021, a temporada fecha a série com um acerto de contas pessoal." },
];

const PERSONAGENS = [
  { nome: "Thomas \"Tommy\" Shelby", ator: "Cillian Murphy", texto: "Ex-soldado traumatizado, frio e calculista, que transforma a gangue familiar num império. Raramente sorri, fala baixo e sempre está três passos à frente." },
  { nome: "Elizabeth \"Polly\" Gray", ator: "Helen McCrory", texto: "Tia de Tommy e matriarca dos Shelby. Comandou a família durante a guerra e é a única que o enfrenta de igual para igual." },
  { nome: "Arthur Shelby", ator: "Paul Anderson", texto: "Irmão mais velho, explosivo e leal. Representa o lado violento e o peso emocional da guerra." },
  { nome: "John Shelby", ator: "Joe Cole", texto: "Irmão mais novo, impulsivo e brincalhão, braço direito nas brigas de rua." },
  { nome: "Ada Shelby (Thorne)", ator: "Sophie Rundle", texto: "A irmã rebelde, de ideias políticas próprias, que vai ganhando espaço nos negócios da família." },
  { nome: "Michael Gray", ator: "Finn Cole", texto: "Filho de Polly, criado longe da família, que entra no mundo dos Shelby e tem ambições próprias." },
  { nome: "Alfie Solomons", ator: "Tom Hardy", texto: "Chefe de uma destilaria judaica em Camden. Imprevisível, engraçado e perigoso, rouba todas as cenas." },
  { nome: "Grace Burgess", ator: "Annabelle Wallis", texto: "Garçonete do pub Garrison com um segredo, peça central da vida emocional de Tommy." },
];

const FAQ = [
  { q: "Quantas temporadas e episódios tem Peaky Blinders?", a: "São 6 temporadas, com 6 episódios cada, num total de 36 episódios, exibidos de 2013 a 2022." },
  { q: "Onde assistir Peaky Blinders no Brasil?", a: "A série completa e o filme The Immortal Man estão na Netflix no Brasil. A disponibilidade pode mudar; confira no app." },
  { q: "Quando estreou o filme Peaky Blinders: The Immortal Man?", a: "Estreou em cinemas selecionados em 6 de março de 2026 e chegou à Netflix em 20 de março de 2026." },
  { q: "Os Peaky Blinders existiram de verdade?", a: "Sim. Foi uma gangue de rua de Birmingham, ativa do fim do século 19 até cerca de 1910. A família Shelby, porém, é inventada." },
  { q: "Eles escondiam navalhas no boné?", a: "Provavelmente não. Historiadores como Carl Chinn apontam que as lâminas eram caras e que a história das navalhas nos bonés é um mito popularizado depois." },
  { q: "Preciso ver a série antes do filme?", a: "Sim, é recomendado. O filme continua a história de Tommy depois do final da 6ª temporada." },
];

const PeakyBlindersGuia2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category="geek" size="lg" />
          <span className="text-xs bg-geek/10 text-geek border border-geek/30 px-2 py-1 rounded-full font-bold">📺 Série</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />5 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="5 de Novembro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de uma rua industrial inglesa dos anos 1920 ao entardecer, com canal, chaminés e carroça, e em primeiro plano uma mesa de pub com boné, relógio de bolso, cartas e um bilhete de aposta"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no clima da série. Não é imagem oficial de Peaky Blinders.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Birmingham, 1919. Fumaça de fábrica, ruas de pedra molhada, apostas em corridas de cavalo e um homem de boné que
          voltou da guerra sem medo de mais nada. <strong>Peaky Blinders</strong> é uma das séries britânicas de maior
          sucesso do século e transformou <strong>Cillian Murphy</strong> num ícone. Neste guia você descobre quantas
          temporadas e episódios existem, as datas de estreia, o que acontece em cada fase (sem estragar os finais), tudo
          sobre o filme <em>The Immortal Man</em>, o que é real e o que é ficção, e onde assistir.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Do que se trata Peaky Blinders?</h2>
        <p>
          Criada e escrita por <strong>Steven Knight</strong> e produzida pela Caryn Mandabach Productions e pela Tiger
          Aspect para a <strong>BBC</strong>, a série acompanha a família <strong>Shelby</strong>, que comanda uma gangue em
          Small Heath, bairro operário de Birmingham. No centro está <strong>Thomas "Tommy" Shelby</strong>, ex-combatente
          da Primeira Guerra Mundial que usa inteligência, frieza e violência para levar a família das apostas de rua aos
          negócios legais, à política e ao Parlamento britânico.
        </p>
        <p>
          O nome vem da gangue, que costurava algo no "peak" (a aba) do boné. Na série, os Shelby escondem lâminas de barbear
          ali, prontas para cegar inimigos. A frase <em>"By order of the Peaky Blinders"</em> ("Por ordem dos Peaky
          Blinders") virou bordão mundial.
        </p>
        <p>
          A série estreou em 2013 na BBC Two, ganhou o mundo pela Netflix e terminou em 2022, após seis temporadas. Venceu o
          BAFTA de Melhor Série Dramática em 2018. Em 2026, a história voltou em forma de filme.
        </p>

        <h2 className="flex items-center gap-2"><Calendar className="h-6 w-6 text-geek" />Temporadas, datas e episódios</h2>
        <p>
          São <strong>6 temporadas com 6 episódios cada, num total de 36 episódios</strong> de cerca de uma hora. As datas
          abaixo são das estreias no Reino Unido:
        </p>
      </div>

      <div className="not-prose overflow-x-auto my-6 rounded-xl border border-geek/30">
        <table className="w-full text-sm">
          <thead className="bg-geek/10 text-geek">
            <tr><th className="p-3 text-left">Temporada</th><th className="p-3 text-left">Estreia</th><th className="p-3 text-left">Canal</th><th className="p-3 text-left">Ano na história</th><th className="p-3 text-left">Episódios</th></tr>
          </thead>
          <tbody>
            {TEMPORADAS.map((t) => (
              <tr key={t.n} className="border-t border-border">
                <td className="p-3 font-bold">{t.n}ª</td><td className="p-3">{t.estreia}</td><td className="p-3">{t.canal}</td><td className="p-3">{t.ano}</td><td className="p-3">{t.eps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="flex items-center gap-2"><PlayCircle className="h-6 w-6 text-geek" />O que acontece em cada temporada (sem spoilers dos finais)</h2>
      </div>

      <div className="not-prose grid gap-4 my-6">
        {TEMPORADAS.map((t) => (
          <div key={t.n} className="rounded-xl border border-geek/30 bg-gradient-to-br from-geek/10 to-card/50 p-5">
            <h3 className="font-display text-lg font-bold text-geek mb-1">Temporada {t.n} · {t.ano}</h3>
            <p className="text-xs text-muted-foreground mb-2">Estreia: {t.estreia} · {t.eps} episódios</p>
            <p className="text-sm leading-relaxed text-foreground/90">{t.resumo}</p>
          </div>
        ))}
      </div>

      <AdLeaderboard />

      <div className="prose prose-invert max-w-none">
        <h2 className="flex items-center gap-2"><Film className="h-6 w-6 text-geek" />O filme: Peaky Blinders: The Immortal Man</h2>
        <p>
          Anunciado ainda durante a 6ª temporada, o filme teve a produção confirmada pela Netflix em junho de 2024, com
          filmagens de setembro ao fim de 2024. Escrito por Steven Knight e dirigido por <strong>Tom Harper</strong>, foi
          produzido em parceria com a BBC Film. Estreou em <strong>cinemas selecionados em 6 de março de 2026</strong> e
          chegou à <strong>Netflix em 20 de março de 2026</strong>.
        </p>
        <p>
          A história se passa em <strong>Birmingham, 1940</strong>, em plena Segunda Guerra Mundial. Tommy vive isolado num
          exílio que impôs a si mesmo e é obrigado a voltar quando o filho distante, Erasmus, se envolve num plano nazista.
          O futuro da família e do país está em jogo. Cillian Murphy volta como Tommy, e o elenco traz nomes como
          <strong> Rebecca Ferguson</strong> (Kaulo), <strong>Tim Roth</strong> (Beckett), <strong>Barry Keoghan</strong>
          (Erasmus Shelby) e <strong>Stephen Graham</strong> (Hayden Stagg), além dos retornos de Sophie Rundle (Ada), Ned
          Dennehy (Charlie Strong), Packy Lee (Johnny Dogs) e Ian Peck (Curly).
        </p>
        <p>
          A dica é simples: assista às seis temporadas antes. O filme é uma continuação direta e faz muito mais sentido para
          quem acompanhou a jornada de Tommy.
        </p>

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-geek" />Personagens que você vai amar (e temer)</h2>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-8">
        {PERSONAGENS.map((p) => (
          <div key={p.nome} className="rounded-xl border border-geek/30 bg-card/60 p-5">
            <h3 className="font-display text-lg font-bold text-geek">{p.nome}</h3>
            <p className="text-xs text-muted-foreground mb-2">Interpretado por {p.ator}</p>
            <p className="text-sm leading-relaxed text-foreground/90">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A série também ficou famosa pelas participações especiais: Sam Neill (Campbell), Adrien Brody (Luca Changretta),
          Anya Taylor-Joy (Gina Gray), Aidan Gillen (Aberama Gold), Sam Claflin (Oswald Mosley) e Stephen Graham (Hayden
          Stagg). Poucas séries conseguem reunir tantos astros.
        </p>

        <h2 className="flex items-center gap-2"><Scale className="h-6 w-6 text-geek" />Série x história real: o que é verdade?</h2>
        <p>
          Os Peaky Blinders <strong>existiram</strong>, mas eram bem diferentes. Eram uma gangue de rua de jovens de
          Birmingham, ativa principalmente do fim da década de 1880 até por volta de 1910, conhecida por roubos, brigas,
          intimidação e pelo visual elegante: bonés de aba, lenços de seda e calças boca de sino. Quando a série começa, em
          1919, a gangue real já tinha praticamente sumido, superada pelos Birmingham Boys.
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
        <div className="rounded-xl border border-geek/30 bg-geek/5 p-5">
          <h3 className="font-bold text-geek mb-2">✅ Baseado em fatos</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>A gangue Peaky Blinders e o bairro de Small Heath.</li>
            <li><strong>Billy Kimber</strong>, líder real dos Birmingham Boys e das corridas de cavalo.</li>
            <li><strong>Darby Sabini</strong> e a guerra das gangues nos hipódromos nos anos 1920.</li>
            <li><strong>Alfie Solomons</strong>, inspirado num gângster real, Alfred Solomon.</li>
            <li><strong>Winston Churchill</strong> e <strong>Oswald Mosley</strong>, líder fascista britânico.</li>
            <li>O trauma dos soldados da Primeira Guerra.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-5">
          <h3 className="font-bold text-geek mb-2">❌ Criado para a série</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>A família Shelby e Tommy não existiram.</li>
            <li>As navalhas no boné são, muito provavelmente, um mito: lâminas eram caras demais.</li>
            <li>A gangue real nunca virou um império empresarial nem chegou ao Parlamento.</li>
            <li>A linha do tempo foi esticada para os anos 1920 e 1930.</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          O historiador Carl Chinn, de Birmingham, que estudou a gangue, explica que o nome provavelmente vinha do boné
          característico e que a história das lâminas apareceu depois, em livros. Ou seja: a série pega elementos reais e
          cria uma lenda muito mais cinematográfica.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Star className="h-6 w-6 text-geek" />O fenômeno Cillian Murphy</h2>
        <p>
          Antes de Peaky Blinders, o irlandês <strong>Cillian Murphy</strong> já era respeitado por filmes como
          <em> Extermínio</em> (2002), <em>Batman Begins</em> (2005, como Espantalho) e <em>A Origem</em> (2010). Mas era
          visto como um coadjuvante de luxo. Tommy Shelby mudou tudo.
        </p>
        <p>
          A interpretação contida, de olhar azul gelado e poucas palavras, virou referência. O "corte Shelby" (laterais
          raspadas e topo longo) lotou barbearias no mundo inteiro; bonés de tweed, coletes e casacos longos voltaram à moda;
          festas temáticas dos anos 1920 se espalharam; e cenas de Tommy fumando ou andando em câmera lenta viraram memes e
          vídeos de "motivação" nas redes sociais. Em Birmingham, a série atraiu turistas para os cenários e passeios
          temáticos.
        </p>
        <p>
          O sucesso deu a Murphy projeção global e o protagonismo que faltava. Em 2023, ele estrelou
          <strong> Oppenheimer</strong>, de Christopher Nolan, e em março de 2024 venceu o <strong>Oscar de Melhor Ator</strong>,
          além do Globo de Ouro e do BAFTA, sendo o primeiro ator nascido na Irlanda a ganhar o prêmio. Depois, fez
          <em> Pequenas Coisas Como Estas</em> (2024) e <em>Steve</em> (2025, Netflix), e voltou para o papel que o tornou
          ídolo em <em>The Immortal Man</em>.
        </p>

        <h2 className="flex items-center gap-2"><Music className="h-6 w-6 text-geek" />Por que você deveria assistir</h2>
        <ul>
          <li><strong>Trilha sonora moderna num drama de época:</strong> o tema de abertura é "Red Right Hand", de Nick Cave and the Bad Seeds, e a série usa músicas de Arctic Monkeys, The White Stripes, PJ Harvey e Radiohead.</li>
          <li><strong>Fotografia de cinema:</strong> câmera lenta, fumaça, fogo e ruas escuras criam um visual único.</li>
          <li><strong>Temporadas curtas:</strong> só 6 episódios por temporada, sem enrolação. Dá para maratonar tudo em poucas semanas.</li>
          <li><strong>Personagens marcantes:</strong> Polly e Alfie Solomons rivalizam com o próprio Tommy.</li>
          <li><strong>Mais que crime:</strong> fala sobre trauma de guerra, família, classe social e a ascensão do fascismo.</li>
        </ul>
        <p>
          Um aviso: a classificação é para maiores de 16 anos, com violência, drogas, linguagem forte e cenas de sexo.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Onde assistir Peaky Blinders</h2>
        <p>
          No Brasil, as <strong>seis temporadas e o filme The Immortal Man estão na Netflix</strong>, com áudio original e
          dublagem/legendas em português. Os catálogos mudam com o tempo; confira no app antes de começar a maratona. A
          ordem certa é simples: temporadas 1 a 6 e, depois, o filme.
        </p>

        <h2 className="flex items-center gap-2"><HelpCircle className="h-6 w-6 text-geek" />Perguntas frequentes</h2>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
        {FAQ.map((f) => (
          <div key={f.q} className="rounded-xl border border-geek/30 bg-geek/5 p-5">
            <h3 className="font-bold text-geek mb-2">{f.q}</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          Resumindo: 36 episódios, um filme, uma família inesquecível e uma das maiores atuações da TV recente. Se você
          ainda não conhece os Shelby, este é o momento. Por ordem dos Peaky Blinders.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          Peaky Blinders é daquelas séries que você começa por curiosidade e, quando percebe, está andando em câmera lenta
          pela rua ao som de Nick Cave. A primeira temporada demora uns dois episódios para engrenar, mas a partir do terceiro
          não tem volta.
        </p>
        <p>
          Minha temporada favorita é a 4, pelo duelo com Changretta. E o mérito maior é de Cillian Murphy: ele diz mais com
          um olhar do que muitos atores dizem com um monólogo. Não é por acaso que o Oscar veio depois.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "Peaky Blinders (TV series)", url: "https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
          { title: "Peaky Blinders", url: "https://www.bbc.co.uk/programmes/b045fz8r", publisher: "BBC", accessedAt: "Novembro 2026" },
          { title: "'Peaky Blinders: The Immortal Man': How to Watch the Peaky Blinders Movie", url: "https://www.netflix.com/tudum/articles/peaky-blinders-the-immortal-man-release-date-photos-news", publisher: "Netflix Tudum", accessedAt: "Novembro 2026" },
          { title: "Peaky Blinders: The Immortal Man cast", url: "https://www.radiotimes.com/movies/peaky-blinders-the-immortal-man-cast/", publisher: "Radio Times", accessedAt: "Novembro 2026" },
          { title: "The Immortal Man: Everything we know about the Peaky Blinders film", url: "https://www.standard.co.uk/culture/film/peaky-blinders-the-immortal-man-cast-b1187347.html", publisher: "The Standard", accessedAt: "Novembro 2026" },
          { title: "Peaky Blinders (gang)", url: "https://en.wikipedia.org/wiki/Peaky_Blinders", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
          { title: "Cillian Murphy", url: "https://en.wikipedia.org/wiki/Cillian_Murphy", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default PeakyBlindersGuia2026;
