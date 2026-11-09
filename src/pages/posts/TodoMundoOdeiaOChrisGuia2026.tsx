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
import { Clock, User, Calendar, Tv, Users, Scale, Star, HelpCircle, PlayCircle, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/todo-mundo-odeia-o-chris-guia-2026.webp";

const SLUG = "todo-mundo-odeia-o-chris-guia-temporadas-onde-assistir-2026";
const TITLE = "Todo Mundo Odeia o Chris: Guia das 4 Temporadas, Episódios, Onde Assistir e o Fenômeno no Brasil";

const TEMPORADAS = [
  { n: 1, estreia: "22 de setembro de 2005", canal: "UPN", eps: 22,
    resumo: "1982. Chris tem 13 anos e acaba de se mudar com a família para Bed-Stuy, no Brooklyn. A mãe, Rochelle, decide que ele vai estudar na Corleone, uma escola longe de casa onde ele é o único aluno negro. Lá ele conhece o melhor amigo, Greg, e o valentão Caruso. Em casa, precisa cuidar de Drew e Tonya enquanto Julius conta cada centavo. É a temporada que apresenta tudo: o bairro, a escola, as regras da casa e o azar crônico do protagonista." },
  { n: 2, estreia: "outubro de 2006", canal: "The CW", eps: 22,
    resumo: "A série muda para a recém-criada The CW. Chris começa a trabalhar na loja do Doc, tenta impressionar garotas, enfrenta novas humilhações na Corleone e descobre que crescer traz mais responsabilidade, mas não mais respeito. Rochelle ganha momentos memoráveis tentando manter a família de pé, e Julius segue com sua matemática do desperdício." },
  { n: 3, estreia: "outubro de 2007", canal: "The CW", eps: 22,
    resumo: "Chris deixa a Corleone e vai para a escola Tattaglia, um ambiente bem mais duro. Ele tenta ser aceito, se mete em confusões maiores e continua dividido entre ser responsável e querer viver a adolescência. Drew cresce e começa a fazer sucesso, o que aumenta a sensação de Chris de estar sempre um passo atrás." },
  { n: 4, estreia: "outubro de 2008", canal: "The CW", eps: 22,
    resumo: "A temporada final mostra Chris mais velho, pensando no futuro, nos estudos e em trabalho, enquanto a família enfrenta apertos de dinheiro e mudanças. A série terminou em 8 de maio de 2009 com um final aberto que, até hoje, gera debate entre os fãs." },
];

const PERSONAGENS = [
  { nome: "Chris", ator: "Tyler James Williams", texto: "O protagonista azarado, inteligente e cheio de boas intenções que sempre se dá mal. A versão adulta, narrada por Chris Rock, comenta tudo com ironia." },
  { nome: "Julius", ator: "Terry Crews", texto: "O pai que trabalha em dois empregos, sabe o preço de tudo e odeia desperdício. Calmo, carinhoso e eternamente cansado." },
  { nome: "Rochelle", ator: "Tichina Arnold", texto: "A mãe explosiva, orgulhosa e protetora. Dona dos bordões mais lembrados e de ameaças que todo brasileiro já ouviu de alguém da família." },
  { nome: "Drew", ator: "Tequan Richmond", texto: "O irmão do meio: bonito, popular e com uma sorte que Chris nunca teve." },
  { nome: "Tonya", ator: "Imani Hakim", texto: "A caçula mimada que sempre consegue colocar a culpa nos irmãos e escapar ilesa." },
  { nome: "Greg", ator: "Vincent Martella", texto: "O melhor amigo de Chris na Corleone, nerd, leal e quase tão azarado quanto ele." },
];

const FAQ = [
  { q: "Quantas temporadas e episódios tem Todo Mundo Odeia o Chris?", a: "São 4 temporadas de 22 episódios cada, num total de 88 episódios de cerca de 22 minutos, exibidos de 2005 a 2009." },
  { q: "Onde assistir Todo Mundo Odeia o Chris no Brasil?", a: "Desde 29 de abril de 2026 está na Netflix, com as quatro temporadas dubladas. Também aparece em outros streamings, como Prime Video, Globoplay e Paramount+. Catálogos mudam; confira antes." },
  { q: "A série é baseada na vida real de Chris Rock?", a: "É livremente inspirada na adolescência dele no Brooklyn, mas muitos fatos foram alterados ou inventados para a comédia." },
  { q: "Quando a série passou na Record?", a: "A Record começou a exibi-la em outubro de 2006 e ficou com ela no ar quase sem interrupção até 2017, voltando depois em novas faixas." },
  { q: "Todo Mundo Odeia o Chris tem continuação?", a: "Sim, a animação Everybody Still Hates Chris, de 2024, recria a história em desenho, com Chris Rock de volta como narrador." },
  { q: "Para qual idade é a série?", a: "A classificação indicativa na Netflix Brasil é 14 anos." },
];

const TodoMundoOdeiaOChrisGuia2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />9 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="9 de Novembro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de uma família sorridente abraçada numa sala de apartamento dos anos 1980 no Brooklyn, com o pai alto ao fundo, a mãe de cardigã rosa, a filha caçula, dois irmãos e o amigo de cabelo castanho"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no clima da série. Não é imagem oficial de Todo Mundo Odeia o Chris.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Poucas séries estrangeiras viraram tão brasileiras quanto <strong>Todo Mundo Odeia o Chris</strong>. A sitcom sobre um
          garoto azarado no Brooklyn dos anos 1980 passou anos na TV aberta, virou meme, frase de família e, em 2026, chegou
          finalmente à Netflix. Neste guia você encontra as 4 temporadas, datas de estreia, número de episódios, o que acontece
          em cada fase (sem estragar os momentos-chave), o fenômeno no Brasil, o que é real na vida de Chris Rock e onde assistir.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Do que se trata a série?</h2>
        <p>
          <em>Everybody Hates Chris</em>, no original, foi criada por <strong>Chris Rock</strong> e <strong>Ali LeRoi</strong> e
          é livremente inspirada na adolescência do comediante. A história acompanha Chris, um garoto de 13 anos que se muda com
          a família para <strong>Bedford-Stuyvesant (Bed-Stuy)</strong>, bairro do Brooklyn, em Nova York, no começo dos anos 1980.
        </p>
        <p>
          A mãe quer que ele tenha a melhor educação possível e o matricula numa escola de maioria branca longe de casa. O resultado
          é um menino que apanha do valentão da escola, é desconfiado no bairro, cuida dos irmãos mais novos e nunca, jamais, tem
          sorte. O próprio Chris Rock narra os episódios como o Chris adulto, com comentários irônicos que viraram marca registrada.
        </p>
        <p>
          O segredo do humor é a mistura de duas coisas: uma família afetuosa e unida dentro de casa, e uma realidade dura do lado
          de fora, com pobreza, preconceito, violência e falta de dinheiro. A série ri dessas situações sem fingir que elas não
          existem, e é justamente por isso que tanta gente se identifica.
        </p>

        <h2 className="flex items-center gap-2"><Calendar className="h-6 w-6 text-geek" />Temporadas, datas e episódios</h2>
        <p>
          São <strong>4 temporadas e 88 episódios</strong> de cerca de 22 minutos. A estreia foi em 22 de setembro de 2005 e o
          último episódio foi ao ar em 8 de maio de 2009. Para maratonar tudo, reserve algo como 32 horas.
        </p>
      </div>

      <div className="not-prose overflow-x-auto my-6 rounded-xl border border-geek/30">
        <table className="w-full text-sm">
          <thead className="bg-geek/10 text-geek">
            <tr><th className="p-3 text-left">Temporada</th><th className="p-3 text-left">Estreia nos EUA</th><th className="p-3 text-left">Canal</th><th className="p-3 text-left">Episódios</th></tr>
          </thead>
          <tbody>
            {TEMPORADAS.map((t) => (
              <tr key={t.n} className="border-t border-border">
                <td className="p-3 font-bold">{t.n}ª</td><td className="p-3">{t.estreia}</td><td className="p-3">{t.canal}</td><td className="p-3">{t.eps}</td>
              </tr>
            ))}
            <tr className="border-t border-border bg-geek/5">
              <td className="p-3 font-bold">Total</td><td className="p-3">2005 a 2009</td><td className="p-3">UPN / The CW</td><td className="p-3">88</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A mudança de canal na 2ª temporada tem explicação: em 2006, a UPN e a The WB se fundiram para criar a The CW, e a série
          foi levada para a nova emissora.
        </p>
        <h2 className="flex items-center gap-2"><PlayCircle className="h-6 w-6 text-geek" />O que acontece em cada temporada</h2>
      </div>

      <div className="not-prose grid gap-4 my-6">
        {TEMPORADAS.map((t) => (
          <div key={t.n} className="rounded-xl border border-geek/30 bg-gradient-to-br from-geek/10 to-card/50 p-5">
            <h3 className="font-display text-lg font-bold text-geek mb-1">Temporada {t.n}</h3>
            <p className="text-xs text-muted-foreground mb-2">Estreia: {t.estreia} · {t.eps} episódios · {t.canal}</p>
            <p className="text-sm leading-relaxed text-foreground/90">{t.resumo}</p>
          </div>
        ))}
      </div>

      <AdLeaderboard />

      <div className="prose prose-invert max-w-none">
        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-geek" />A família e os personagens</h2>
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
          Os coadjuvantes também são parte da graça: <strong>Caruso</strong>, o valentão que persegue Chris na Corleone; a
          professora <strong>Sra. Morello</strong>, que trata Chris com estereótipos sem perceber o próprio preconceito; e
          <strong> Doc</strong>, o dono da loja onde Chris trabalha. Cada um representa uma faceta do mundo que o garoto precisa
          atravessar todos os dias.
        </p>

        <h2 className="flex items-center gap-2"><Heart className="h-6 w-6 text-geek" />O fenômeno no Brasil</h2>
        <p>
          A série é, provavelmente, mais popular no Brasil do que foi nos Estados Unidos. Por aqui, ela passou primeiro na TV por
          assinatura, no canal Sony, e explodiu quando chegou à <strong>Record, em outubro de 2006</strong>. A emissora a manteve
          no ar por quase 11 anos seguidos, até setembro de 2017, e voltou a exibi-la depois, em 2019 e a partir de 2020, em
          maratonas de domingo. A série também passou por canais como TBS, Comedy Central, Multishow, TNT e Sony Channel.
        </p>
        <p>
          Por que deu tão certo? Porque o Brasil reconhece aquela casa. O pai que calcula quanto custa cada luz acesa, a mãe que
          ameaça com o chinelo, o irmão mais novo que sempre leva vantagem, o aperto no fim do mês e a escola que exige mais do que
          a família pode pagar. A <strong>dublagem brasileira</strong> ajudou muito: as falas de Julius e Rochelle viraram bordões,
          e as cenas da série circulam até hoje como memes e figurinhas em grupos de família.
        </p>
        <p>
          Essa força continua no streaming. A série passou por Prime Video, Globoplay, Paramount+ e HBO Max e costuma aparecer no
          top 10 das plataformas. Quando chegou à <strong>Netflix Brasil em 29 de abril de 2026</strong>, com as quatro temporadas
          dubladas, ela voltou ao ranking da plataforma e chegou ao topo do top 10 semanal de séries no país em maio, segundo o
          agregador ondeassistir.co.
        </p>
        <p>
          O carinho também é com o elenco. <strong>Terry Crews</strong> e <strong>Tyler James Williams</strong> sabem do sucesso
          da série por aqui e costumam interagir com os fãs brasileiros nas redes sociais. Para muita gente, Terry Crews será
          para sempre o Julius, mesmo depois de Brooklyn Nine-Nine.
        </p>

        <h2 className="flex items-center gap-2"><Scale className="h-6 w-6 text-geek" />Ficção x vida real de Chris Rock</h2>
        <p>
          A série é uma autoparódia. Chris Rock cresceu em Bed-Stuy, estudou em escolas de maioria branca, foi alvo de racismo e
          de valentões, e seu pai realmente trabalhava muito. Mas a cronologia foi ajustada (a adolescência real de Rock aconteceu
          entre o fim dos anos 1970 e o começo dos 1980) e muitos episódios, personagens e situações foram inventados ou exagerados
          para a comédia. Na vida real, por exemplo, Rock tinha mais irmãos do que os dois mostrados na série.
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
        <div className="rounded-xl border border-geek/30 bg-geek/5 p-5">
          <h3 className="font-bold text-geek mb-2">✅ Inspirado na vida real</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>Infância de Chris Rock no bairro de Bed-Stuy, no Brooklyn.</li>
            <li>Ônibus até escolas de maioria branca e episódios de racismo.</li>
            <li>Valentões, dificuldade financeira e pais trabalhadores.</li>
            <li>O pai de Rock se chamava Julius, como na série.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-5">
          <h3 className="font-bold text-geek mb-2">❌ Criado ou alterado</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>Muitos episódios e personagens, como Greg, Caruso e Sra. Morello, foram criados para a série.</li>
            <li>A família da TV é menor que a real.</li>
            <li>Datas e acontecimentos foram encaixados para servir à comédia.</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <AdInArticle />

        <h2 className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-geek" />O que veio depois</h2>
        <p>
          A série terminou em 2009, mas o elenco seguiu longe. <strong>Tyler James Williams</strong> ganhou reconhecimento adulto
          como o professor Gregory em <em>Abbott Elementary</em>, papel que lhe rendeu um Globo de Ouro. <strong>Terry Crews</strong>
          virou o Terry de <em>Brooklyn Nine-Nine</em> e apresentador de <em>America's Got Talent</em>. <strong>Vincent Martella</strong>
          é a voz do Phineas em <em>Phineas e Ferb</em>, e <strong>Tichina Arnold</strong> continuou em séries de comédia. A própria
          série foi indicada ao Emmy e ao Globo de Ouro em seus primeiros anos.
        </p>
        <p>
          Em 2024 surgiu a animação <strong>Everybody Still Hates Chris</strong>, que reconta a história em desenho, com Chris
          Rock de volta como narrador. É uma curiosidade para fãs, mas a série original continua sendo o ponto de partida.
        </p>

        <h2 className="flex items-center gap-2"><Star className="h-6 w-6 text-geek" />Por que você deveria assistir</h2>
        <ul>
          <li><strong>Episódios curtos:</strong> cerca de 22 minutos, perfeitos para ver no almoço ou antes de dormir.</li>
          <li><strong>Humor que envelheceu bem:</strong> as piadas sobre dinheiro, família e escola continuam atuais.</li>
          <li><strong>Narração afiada:</strong> os comentários de Chris Rock transformam desgraça em piada.</li>
          <li><strong>Assunto sério com leveza:</strong> racismo, pobreza e desigualdade aparecem sem discurso pesado.</li>
          <li><strong>Para toda a família:</strong> pais lembram da própria infância e filhos descobrem os memes de origem.</li>
          <li><strong>Julius e Rochelle:</strong> um dos casais mais engraçados e verdadeiros da história das sitcoms.</li>
        </ul>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Onde assistir Todo Mundo Odeia o Chris</h2>
        <p>
          Desde <strong>29 de abril de 2026</strong>, as quatro temporadas estão na <strong>Netflix Brasil</strong>, dubladas em
          português, com classificação de 14 anos. A série também é encontrada em outros serviços por assinatura, como
          <strong> Prime Video, Globoplay e Paramount+</strong>, e segue em reprises na TV. Os catálogos mudam com frequência;
          confira no aplicativo antes de começar. A ordem é simples: temporada 1 até a 4.
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
          Resumindo: 88 episódios curtos, uma família inesquecível e um dos maiores fenômenos da TV brasileira. Se você nunca
          assistiu, a Netflix acabou com a sua última desculpa. Se já viu, sabe que sempre vale rever.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          Todo Mundo Odeia o Chris é aquela série que eu coloco para rodar quando quero rir sem esforço. O que me impressiona é
          como ela fala de coisas sérias, como racismo na escola e falta de dinheiro, sem nunca perder o ritmo da piada.
        </p>
        <p>
          Julius é o melhor personagem: cada cálculo de quanto custou um copo de leite derramado é uma aula de comédia. E é
          impossível não reconhecer a própria família na Rochelle. Não à toa, o Brasil adotou a série como se fosse nossa.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "Todo Mundo Odeia o Chris completa 21 anos; veja onde assistir no Brasil", url: "https://tonafama.ig.com.br/todo-mundo-odeia-o-chris-completa-21-anos-veja-onde-assistir-no-brasil/", publisher: "iG Tô na Fama", accessedAt: "Novembro 2026" },
          { title: "Todo Mundo Odeia o Chris chega à Netflix", url: "https://www.techtudo.com.br/listas/2026/04/todo-mundo-odeia-o-chris-chega-a-netflix-em-breve-veja-data-e-relembre-elenco-streaming.ghtml", publisher: "TechTudo", accessedAt: "Novembro 2026" },
          { title: "Todo Mundo Odeia o Chris entra na Netflix pela 1ª vez", url: "https://diariodeseries.com.br/todo-mundo-odeia-o-chris-na-netflix/", publisher: "Diário de Séries", accessedAt: "Novembro 2026" },
          { title: "Onde assistir Todo Mundo Odeia o Chris", url: "https://ondeassistir.co/series/todo-mundo-odeia-o-chris", publisher: "ondeassistir.co", accessedAt: "Novembro 2026" },
          { title: "Todo Mundo Odeia o Chris na Netflix Brasil", url: "https://br.flixboss.com/serie/todo-mundo-odeia-o-chris-70155643", publisher: "Flixboss", accessedAt: "Novembro 2026" },
          { title: "Everybody Hates Chris", url: "https://en.wikipedia.org/wiki/Everybody_Hates_Chris", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default TodoMundoOdeiaOChrisGuia2026;
