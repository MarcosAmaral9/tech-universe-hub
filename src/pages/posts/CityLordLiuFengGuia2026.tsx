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
  Clock, User, Calendar, BookOpen, ListChecks, HelpCircle,
  Sparkles, Layers, Globe, Castle, Cat, ArrowLeftRight,
} from "lucide-react";
import cityLordImg from "@/assets/starting-today-city-lord-liu-feng.webp";

const SLUG = "starting-from-today-city-lord-liu-feng-guia-2026";
const TITLE = "Starting From Today I'll Work as a City Lord: Guia Completo do Manhua de Liu Feng";

const FICHA = [
  { label: "Título original", value: "从今天开始当城主 (Cóng Jīntiān Kāishǐ Dāng Chéngzhǔ)" },
  { label: "Títulos internacionais", value: "Starting From Today I'll Work as a City Lord; Become the Castellan in Another World; To Be the Castellan King" },
  { label: "Formato", value: "Manhua (quadrinho chinês digital, colorido, leitura vertical)" },
  { label: "Origem", value: "Adaptação da web novel homônima do autor 熬夜大白 (Áoyè Dàbái), publicada na plataforma Feilu (飞卢小说)" },
  { label: "Publicação do manhua", value: "Início em 2018/2019, conforme as bases de dados; distribuição por Tencent Comics (ac.qq.com), WeComics e Bilibili Comics" },
  { label: "Status", value: "Em publicação (ongoing), com mais de 500 capítulos catalogados" },
  { label: "Protagonista", value: "Liu Feng (刘枫), gamer e otaku que passa a atravessar entre a Terra e outro mundo" },
  { label: "Gêneros", value: "Isekai/travessia entre mundos, fantasia, comédia, aventura, administração de território, beastmen (raças animais)" },
  { label: "Novel original", value: "Cerca de 3.000 capítulos catalogados em índices chineses, com o arco principal concluído" },
  { label: "Leitura oficial em PT-BR", value: "Sem licenciamento oficial no Brasil; leitura por traduções da comunidade" },
];

const GENEROS = [
  {
    titulo: "Isekai de ida e volta",
    texto: "Diferente do isekai japonês clássico, em que o protagonista morre e renasce em outro mundo, Liu Feng mantém os dois pés em dois mundos: ele atravessa e volta quando quer. Isso muda tudo, porque a Terra continua sendo fonte de recursos, tecnologia e mercadorias.",
  },
  {
    titulo: "Comércio e arbitragem entre mundos",
    texto: "O motor cômico e econômico da obra é a diferença de valor entre os dois lados. Objetos banais da Terra viram artigos de luxo no mundo de fantasia, e itens comuns lá viram raridades aqui. O protagonista se torna, literalmente, um atravessador interdimensional.",
  },
  {
    titulo: "Construção e gestão de cidade",
    texto: "O título entrega a proposta: depois de comprar uma cidade, Liu Feng precisa administrá-la. Impostos, defesa, população, produção, alianças com nobres e guerra — o manhua funciona como um jogo de estratégia em quadrinhos.",
  },
  {
    titulo: "Fantasia com beastmen e comédia",
    texto: "As raças animais dominam o elenco de apoio: mulheres-gato, raposas e coelhas aparecem já na sinopse oficial da obra. O tom é leve, com humor de otaku e situações de comédia romântica misturadas às sequências de estratégia militar.",
  },
];

const RACAS = [
  { nome: "Humanos", desc: "Formam os reinos, a nobreza e as estruturas feudais do mundo de fantasia. É entre eles que Liu Feng compra sua cidade e negocia títulos, terras e alianças." },
  { nome: "Beastmen felinos (mulheres-gato)", desc: "Citados na própria sinopse do manhua como parte central do elenco. Costumam ocupar papéis de combate e guarda pessoal, com força física acima da média humana." },
  { nome: "Beastmen raposa", desc: "Aparecem como figuras astutas, ligadas a magia, comércio e informação — o arquétipo clássico da raposa esperta na fantasia asiática." },
  { nome: "Beastmen coelho", desc: "Retratados como o lado mais dócil e doméstico do elenco, muitas vezes em papéis de apoio dentro da cidade do protagonista." },
  { nome: "Outras raças de fantasia", desc: "O mundo segue a lógica da 'lei da selva' descrita na sinopse: povos guerreiros, tribos, mercenários e forças mágicas que disputam território num cenário de armas brancas." },
];

const CityLordLiuFengGuia2026 = () => {
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
            📕 Manhua
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
            7 de Setembro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            13 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={cityLordImg}
          width={1280}
          height={720}
          alt="Jovem observando uma cidade medieval de fantasia ao pôr do sol, com portal luminoso e beastmen no pátio, referência ao manhua Starting From Today I'll Work as a City Lord"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Imagine descobrir uma passagem entre o seu quarto e um mundo de espadas, nobres e
          beastmen — e usar um simples copo de vidro para comprar uma cidade inteira. É essa a
          premissa de <em>Starting From Today I'll Work as a City Lord</em> (Começando Hoje, Vou
          Trabalhar Como o Lorde da Cidade), manhua conhecido internacionalmente também como
          <em> Become the Castellan in Another World</em>. Neste guia reunimos o que se sabe com
          segurança sobre a obra: a história de Liu Feng, a mecânica de viagem entre mundos, as
          raças, os gêneros, a origem editorial, a contagem de capítulos e onde ler em português.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/5 to-card/50">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold mb-4">
            <ListChecks className="h-5 w-5 text-otaku" />
            Resumo rápido
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc list-inside">
            <li>Manhua chinês adaptado da web novel de 熬夜大白 (Áoyè Dàbái), publicada na plataforma Feilu.</li>
            <li>Liu Feng ganha a capacidade de ir e voltar entre a Terra e um mundo de fantasia, além de um espaço de armazenamento pessoal.</li>
            <li>Ele compra uma cidade no outro mundo e passa a viver como nobre e administrador — daí o título.</li>
            <li>Publicação em 2018/2019 pelas plataformas Tencent Comics, WeComics e Bilibili Comics; segue em andamento com mais de 500 capítulos.</li>
            <li>Sem edição oficial em português; a leitura em PT-BR é feita por traduções de fãs, em apps como o Mangaflix.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <BookOpen className="h-6 w-6 text-otaku" />
          A história: um otaku vira lorde feudal
        </h2>
        <p>
          A sinopse oficial da obra é direta ao ponto: um gamer caseiro ganha o "buff" de atravessar
          o tempo e o espaço e decide, obviamente, causar. O protagonista é <strong>Liu Feng</strong>
          (刘枫), um jovem comum da Terra, do tipo que passa mais tempo em jogos e fóruns do que
          fora de casa. Nada nele grita "herói escolhido" — e é justamente esse contraste que
          sustenta o humor da história.
        </p>
        <p>
          O que ele recebe não é poder de combate, e sim <strong>logística</strong>: a habilidade de
          ir e voltar entre os dois mundos e um espaço interno onde pode guardar e transportar
          objetos. Com esse par de vantagens, Liu Feng se torna o que a própria descrição da novel
          chama de "atravessador dos dois mundos": alguém que compra barato de um lado e vende caro
          do outro.
        </p>
        <p>
          O ponto de virada, e a cena mais citada pelos leitores, é a compra de uma cidade. Num
          mundo de armas brancas onde a manufatura de vidro é rudimentar, um objeto banal como um
          copo de vidro terrestre vale uma fortuna aos olhos da nobreza local. Com esse tipo de
          arbitragem, o protagonista levanta capital suficiente para adquirir um território e
          assumir o posto de <strong>lorde da cidade</strong> (城主, chéngzhǔ) — o "castellan" do
          título em inglês.
        </p>
        <p>
          A partir daí, o manhua muda de gênero sem avisar. Deixa de ser uma comédia de peixe fora
          d'água e vira algo próximo de um jogo de estratégia: é preciso alimentar a população,
          organizar a produção, treinar tropas, sobreviver às intrigas da nobreza vizinha e defender
          as muralhas de exércitos e criaturas. O diferencial de Liu Feng nessas horas nunca é
          espiritual ou marcial — é o conhecimento do século XXI aplicado a um mundo medieval.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <ArrowLeftRight className="h-6 w-6 text-otaku" />
          A viagem entre mundos: como a mecânica funciona
        </h2>
        <p>
          Vale entender por que essa obra não é um isekai comum. Nos títulos japoneses mais
          conhecidos do gênero, a passagem é de mão única: o protagonista morre, renasce e a Terra
          vira memória. Aqui, a travessia é <strong>reversível e repetível</strong>, o que cria três
          consequências narrativas importantes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>
            <strong>A Terra vira depósito estratégico.</strong> Ferramentas, alimentos
            industrializados, remédios, tecidos, vidro, aço e conhecimento técnico moderno podem ser
            comprados aqui e levados para lá, onde não existem.
          </li>
          <li>
            <strong>O outro mundo vira fonte de raridades.</strong> Metais, materiais mágicos,
            artesanato e itens sem paralelo terrestre podem ser trazidos de volta e convertidos em
            dinheiro real.
          </li>
          <li>
            <strong>O espaço de armazenamento resolve a logística.</strong> Sem ele, o protagonista
            só carregaria o que coubesse nos braços. Com ele, cada travessia pode mover um carregamento
            inteiro — é a diferença entre um comerciante ambulante e uma cadeia de suprimentos.
          </li>
        </ul>
        <p>
          Essa estrutura de "duas economias conectadas por uma pessoa só" é o que separa a obra da
          enxurrada de isekais. O conflito raramente é "ele consegue vencer esse inimigo?", e sim
          "ele consegue sustentar a cidade que construiu?". É uma fantasia de poder econômica, não
          marcial.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Cat className="h-6 w-6 text-otaku" />
          As raças do mundo: beastmen no centro do elenco
        </h2>
        <p>
          A sinopse internacional do manhua faz questão de listar o elenco de apoio antes mesmo de
          falar da trama — e ele é dominado por <strong>beastmen</strong>, os povos com traços
          animais tão comuns na fantasia chinesa e japonesa. A própria descrição brinca: "isto não é
          um zoológico", antes de apresentar um mundo regido pela lei do mais forte.
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-card/60 text-left">
                <th className="p-3 font-bold">Raça / povo</th>
                <th className="p-3 font-bold">Papel na obra</th>
              </tr>
            </thead>
            <tbody>
              {RACAS.map((r) => (
                <tr key={r.nome} className="border-t border-border">
                  <td className="p-3 font-bold whitespace-nowrap align-top">{r.nome}</td>
                  <td className="p-3 text-foreground/90">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Um aviso honesto de leitura: as três beastmen citadas na sinopse — a mulher-gato
          dominadora, a raposa em versão loli e a coelha mais recatada — deixam claro que a obra
          flerta com o formato de harém e com o fanservice típico do gênero. Quem procura um drama
          sóbrio de política feudal vai estranhar; quem quer uma comédia de fantasia leve com pano
          de fundo de estratégia está no lugar certo.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Layers className="h-6 w-6 text-otaku" />
          Os gêneros que o manhua mistura
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
          Nos catálogos internacionais, a obra costuma aparecer marcada como <em>fantasia</em>,
          <em> comédia</em> e <em>isekai</em>. Na prática, o rótulo que melhor descreve a leitura é
          "simulador de território em quadrinhos": os arcos alternam entre negociar com nobres,
          expandir a infraestrutura da cidade e resolver crises militares.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Sparkles className="h-6 w-6 text-otaku" />
          Origem, estúdio, lançamento e capítulos
        </h2>
        <p>
          A obra começou como <strong>web novel chinesa</strong>, assinada pelo autor
          <strong> 熬夜大白 (Áoyè Dàbái)</strong> e publicada por capítulos na plataforma
          <strong> Feilu (飞卢小说)</strong>, uma das grandes casas de literatura online da China.
          Os índices chineses catalogam a novel com cerca de <strong>3.000 capítulos</strong>,
          incluindo extras — número que dá a dimensão de quanto material existe para adaptar.
        </p>
        <p>
          A adaptação em manhua é distribuída pelas plataformas de quadrinhos digitais
          <strong> Tencent Comics (ac.qq.com)</strong>, <strong>WeComics</strong> e
          <strong> Bilibili Comics</strong>. Sobre a data de estreia, é preciso transparência: as
          bases de dados divergem. O aniSearch registra publicação a partir de
          <strong> 27 de janeiro de 2018</strong>; catálogos como Anime-Planet e agregadores listam
          <strong> 2019</strong> como ano de início. A leitura mais provável é que o material tenha
          começado a circular em 2018 na China e ganhado tração internacional a partir de 2019.
        </p>
        <p>
          Sobre o <strong>estúdio responsável</strong>, o cenário é o mesmo de boa parte dos manhuas:
          a produção é creditada a um time de arte contratado pela plataforma, e os nomes que
          aparecem nos catálogos ocidentais (como Junxin Shanmu e Aoye Dabai) misturam autor da novel
          e equipe criativa da adaptação, sem uma ficha técnica oficial traduzida. Não existe, até
          onde é possível verificar em fontes públicas, um estúdio de animação envolvido — a obra é
          quadrinho digital, sem anime confirmado.
        </p>
        <p>
          Quanto à contagem de capítulos, os catálogos internacionais registram a obra como
          <strong> em publicação</strong>, com marcações que vão de <strong>488+</strong> (aniSearch)
          a <strong>550+</strong> (Anime-Planet). Como o manhua continua saindo, qualquer número aqui
          envelhece rápido: a referência segura é "mais de 500 capítulos e contando".
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Castle className="h-6 w-6 text-otaku" />
          O que esperar dos arcos
        </h2>
        <p>
          Sem entrar em spoilers, a estrutura da obra se repete em ciclos reconhecíveis, e entender
          isso ajuda a decidir se você vai gostar da leitura:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li><strong>Descoberta:</strong> Liu Feng testa os limites da travessia e do espaço de armazenamento, com muito humor de choque cultural.</li>
          <li><strong>Capitalização:</strong> a fase de comércio, em que ele converte itens terrestres em fortuna no outro mundo.</li>
          <li><strong>Aquisição:</strong> a compra da cidade e o choque de virar autoridade sem nunca ter administrado nada.</li>
          <li><strong>Consolidação:</strong> recrutamento de aliados, entre eles as beastmen que formam seu círculo próximo, e reconstrução da cidade.</li>
          <li><strong>Conflito:</strong> nobres rivais, exércitos e conspirações que testam tudo o que ele construiu.</li>
        </ul>
        <p>
          Se o seu prazer de leitura vem de ver um número crescer — população, muralhas, tropas,
          lucro —, essa é uma das obras mais satisfatórias do nicho. Se você procura profundidade
          psicológica ou reviravoltas densas, o manhua não é isso e nunca prometeu ser.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Globe className="h-6 w-6 text-otaku" />
          Onde ler em português
        </h2>
        <p>
          Não há licenciamento oficial da obra em português — nem da novel, nem do manhua. A
          comunidade lusófona acompanha os capítulos por traduções de fãs, e os caminhos mais citados
          pelos leitores brasileiros são:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>
            <strong>Mangaflix:</strong> aplicativo bastante popular no Brasil para leitura de manhuas
            e manhwas traduzidos pela comunidade, com catálogo amplo de títulos chineses em PT-BR.
          </li>
          <li>
            <strong>Sites de scanlation e agregadores:</strong> grupos de tradução publicam os
            capítulos em seus próprios leitores online. Procure pelos dois títulos — o original e
            "Become the Castellan in Another World" —, porque a nomenclatura varia bastante.
          </li>
          <li>
            <strong>Leitura em inglês:</strong> quem não se importa com o idioma encontra a obra
            catalogada em bases como MangaUpdates e Anime-Planet, que apontam os grupos ativos.
          </li>
          <li>
            <strong>Original em chinês:</strong> Tencent Comics (ac.qq.com), WeComics e Bilibili
            Comics publicam a versão oficial, sempre à frente das traduções.
          </li>
        </ul>
        <p>
          Como sempre lembramos por aqui: traduções de fãs existem porque não há alternativa oficial.
          Se a obra for licenciada em português algum dia — como já aconteceu com vários manhuas e
          manhwas —, comprar a edição oficial é a forma mais direta de garantir que mais títulos do
          tipo cheguem ao Brasil.
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

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <HelpCircle className="h-6 w-6 text-otaku" />
          Perguntas frequentes
        </h2>
        <div className="not-prose space-y-4 my-6">
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quem é Liu Feng?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              É o protagonista: um gamer caseiro da Terra que ganha a habilidade de atravessar para
              outro mundo e voltar, além de um espaço pessoal de armazenamento. Ele usa produtos
              terrestres para enriquecer no mundo de fantasia e acaba comprando uma cidade, tornando-se
              seu lorde.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quantos capítulos tem o manhua?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A obra segue em publicação. Os catálogos internacionais registram de 488+ a 550+
              capítulos, dependendo da base consultada e da data. A novel original, essa sim, tem
              cerca de 3.000 capítulos nos índices chineses.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quando o manhua começou e quem publica?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As bases divergem entre 2018 (aniSearch aponta 27 de janeiro de 2018) e 2019
              (Anime-Planet e agregadores). A distribuição é feita por Tencent Comics (ac.qq.com),
              WeComics e Bilibili Comics.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Quais raças aparecem na história?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Humanos organizados em reinos feudais e diversos beastmen — com destaque para as raças
              felina, raposa e coelho, citadas na própria sinopse da obra —, num mundo de armas
              brancas regido pela lei do mais forte.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Existe versão oficial em português ou anime?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não há licenciamento oficial em português nem adaptação em anime confirmada em fontes
              públicas. A leitura em PT-BR acontece por traduções da comunidade, em apps como o
              Mangaflix e em sites de scanlation.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="otaku">
        <p>
          O charme de <em>City Lord</em> não está no combate, e sim na planilha. É um manhua sobre
          logística disfarçado de fantasia: o protagonista vence porque entende preço, oferta e
          escala num mundo que ainda não inventou o vidro decente. Para quem gosta de jogos de
          gestão, é um vício silencioso — cada capítulo é um upgrade na cidade.
        </p>
        <p>
          A ressalva é a de sempre com obras longas de plataforma: o ritmo oscila, o fanservice
          aparece com frequência e a documentação editorial fora da China é frágil — datas e
          contagem de capítulos divergem entre catálogos, e por isso preferimos apresentar as duas
          versões em vez de fingir precisão que não existe.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          {
            title: "Become the Castellan in Another World — ficha da série",
            url: "https://www.mangaupdates.com/series/nl6uadg/become-the-castellan-in-another-world",
            publisher: "Baka-Updates / MangaUpdates",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Become the Castellan in Another World (2018) — dados de publicação, editoras e capítulos",
            url: "https://www.anisearch.com/manga/53296,become-the-castellan-in-another-world",
            publisher: "aniSearch",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Become the Castellan in Another World — sinopse e contagem de capítulos",
            url: "https://www.anime-planet.com/manga/become-the-castellan-in-another-world",
            publisher: "Anime-Planet",
            accessedAt: "Setembro 2026",
          },
          {
            title: "从今天开始当城主 — ficha da web novel de 熬夜大白 (protagonista Liu Feng, ~3.000 capítulos)",
            url: "https://m.lrts.me/book/11311869",
            publisher: "Lanren Tingshu (懒人听书)",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Tencent Comics / AC.QQ — plataforma de quadrinhos digitais chineses",
            url: "https://ac.qq.com/",
            publisher: "Tencent",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Mangaflix — aplicativo de leitura de manhuas e manhwas em português",
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

export default CityLordLiuFengGuia2026;
