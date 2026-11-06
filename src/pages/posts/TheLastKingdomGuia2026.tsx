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
import { Clock, User, Calendar, Tv, Film, Users, Scale, Star, HelpCircle, Swords, PlayCircle, BookOpen } from "lucide-react";
import heroImg from "@/assets/the-last-kingdom-guia-temporadas-filme-2026.webp";

const SLUG = "the-last-kingdom-guia-temporadas-filme-historia-real-2026";
const TITLE = "The Last Kingdom: Guia Completo das 5 Temporadas, do Filme Seven Kings Must Die e da História Real";

const TEMPORADAS = [
  { n: 1, estreia: "10 de outubro de 2015", canal: "BBC Two / BBC America", eps: 8, livros: "O Último Reino e O Cavaleiro da Morte",
    resumo: "Uhtred, filho de um nobre da Nortúmbria, é capturado ainda criança pelos dinamarqueses e criado por Earl Ragnar como um filho. Já adulto, uma traição o empurra para o lado dos saxões, e ele passa a servir, sem confiar, o rei Alfredo de Wessex, o último reino inglês que ainda resiste à invasão viking. Tudo culmina na luta pela sobrevivência de Wessex." },
  { n: 2, estreia: "16 de março de 2017", canal: "BBC Two / BBC America", eps: 8, livros: "Os Senhores do Norte e A Canção da Espada",
    resumo: "Uhtred viaja ao norte, conhece a dor da escravidão e ganha dois companheiros inseparáveis: Finan e Sihtric. Depois, volta a Wessex e se envolve na defesa da Mércia e de Londres, enquanto Æthelflæd, filha de Alfredo, ganha papel central." },
  { n: 3, estreia: "19 de novembro de 2018", canal: "Netflix", eps: 10, livros: "A Terra em Chamas e A Morte dos Reis",
    resumo: "Primeira temporada produzida pela Netflix. Os dinamarqueses voltam a ameaçar Wessex com novos líderes, e a saúde de Alfredo enfraquece. A sucessão do trono e o futuro da ideia de uma Inglaterra unida entram em jogo." },
  { n: 4, estreia: "26 de abril de 2020", canal: "Netflix", eps: 10, livros: "O Senhor Pagão e O Trono Vazio",
    resumo: "Uhtred tenta, enfim, retomar Bebbanburg, a fortaleza da família. Ao mesmo tempo, Eduardo tenta se firmar como rei, a Mércia fica sem rumo e Æthelflæd precisa provar que pode liderar." },
  { n: 5, estreia: "9 de março de 2022", canal: "Netflix", eps: 10, livros: "Guerreiros da Tempestade, O Portador da Chama e A Guerra do Lobo",
    resumo: "A temporada final. Brida, antiga companheira de Uhtred, se torna uma inimiga implacável, e o jovem Æthelstan cresce sob a proteção dele. O sonho de Alfredo de unir os reinos ingleses se aproxima, com novas alianças e traições." },
];

const PERSONAGENS = [
  { nome: "Uhtred de Bebbanburg", ator: "Alexander Dreymon", texto: "Saxão de nascimento, dinamarquês de criação. Guerreiro arrogante, engraçado e leal, preso entre dois povos e jurado a reis em quem não confia." },
  { nome: "Rei Alfredo", ator: "David Dawson", texto: "Rei de Wessex, frágil de saúde e gigante em estratégia. Usa fé, leis e paciência para sonhar com uma Inglaterra única." },
  { nome: "Brida", ator: "Emily Cox", texto: "Saxã criada com Uhtred entre os dinamarqueses. Feroz e passional, é uma das personagens mais complexas da série." },
  { nome: "Finan", ator: "Mark Rowley", texto: "O irlandês companheiro de espada de Uhtred. Rápido na luta e no humor, é favorito absoluto dos fãs." },
  { nome: "Sihtric", ator: "Arnas Fedaravičius", texto: "Filho de um líder dinamarquês que escolhe seguir Uhtred. Quieto e leal até o fim." },
  { nome: "Æthelflæd", ator: "Millie Brady", texto: "Filha de Alfredo, que deixa de ser peça política para se tornar líder da Mércia." },
  { nome: "Padre Beocca", ator: "Ian Hart", texto: "Sacerdote que conheceu Uhtred criança e funciona como sua consciência e família." },
  { nome: "Æthelstan", ator: "Harry Gilby", texto: "Neto de Alfredo, criado sob proteção de Uhtred, e protagonista do filme." },
];

const FAQ = [
  { q: "Quantas temporadas e episódios tem The Last Kingdom?", a: "São 5 temporadas: duas de 8 episódios e três de 10, num total de 46 episódios, exibidos de 2015 a 2022." },
  { q: "Onde assistir The Last Kingdom no Brasil?", a: "A série completa e o filme Seven Kings Must Die estão na Netflix. Os catálogos mudam; confira no app." },
  { q: "Quando estreou o filme Seven Kings Must Die?", a: "Em 14 de abril de 2023, direto na Netflix. Ele encerra a história de Uhtred depois da 5ª temporada." },
  { q: "Uhtred de Bebbanburg existiu?", a: "Existiu um Uhtred, senhor de Bamburgh, no início do século 11, mais de cem anos depois de Alfredo. O Uhtred da série é inventado, inspirado nesse antepassado de Bernard Cornwell." },
  { q: "A série é baseada em livros?", a: "Sim, nas Crônicas Saxônicas de Bernard Cornwell, 13 livros publicados entre 2004 e 2020." },
  { q: "Preciso ver Vikings antes?", a: "Não. São produções independentes, apesar de tratarem da mesma época e de alguns personagens históricos em comum." },
];

const TheLastKingdomGuia2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />6 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="6 de Novembro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de um guerreiro saxão de cabelos trançados e armadura de couro escura, com uma espada em cada mão, saindo do portão de uma fortaleza de madeira em chamas"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no clima da série. Não é imagem oficial de The Last Kingdom.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Inglaterra, século 9. Os vikings já dominaram quase todos os reinos da ilha e só um resiste: Wessex. No meio dessa
          guerra está um homem que nasceu saxão, foi criado por dinamarqueses e não pertence de verdade a nenhum dos dois
          lados. <strong>The Last Kingdom</strong> é uma das melhores séries de época dos últimos anos e virou fenômeno na
          Netflix. Neste guia você encontra as 5 temporadas, datas de estreia, número de episódios, o que acontece em cada fase
          (sem estragar os finais), tudo sobre o filme <em>Seven Kings Must Die</em>, o que é real e o que é ficção, e onde
          assistir.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Do que se trata The Last Kingdom?</h2>
        <p>
          A série acompanha <strong>Uhtred de Bebbanburg</strong>, filho de um nobre saxão da Nortúmbria. Ainda menino, ele vê
          o pai morrer numa batalha contra os dinamarqueses e é levado como prisioneiro por <strong>Earl Ragnar</strong>, que
          acaba o criando como filho. Uhtred cresce entre os vikings, aprende a lutar como eles e adota seus deuses. Quando uma
          traição destrói essa família adotiva, ele é forçado a voltar para o mundo saxão.
        </p>
        <p>
          Ali, Uhtred passa a servir o <strong>rei Alfredo de Wessex</strong>, homem religioso e calculista que sonha com algo
          que ainda não existe: uma Inglaterra unida. O conflito central é esse: um guerreiro pagão, orgulhoso e indisciplinado,
          lutando por um rei cristão que precisa dele, mas não confia nele. E um objetivo que atravessa a série inteira: retomar
          Bebbanburg, a fortaleza roubada da sua família.
        </p>
        <p>
          A frase que abre muitos episódios resume o personagem: <em>"Destiny is all"</em> ("O destino é tudo"). Já o mote
          "Uhtred, filho de Uhtred" virou bordão entre os fãs.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-geek" />Ficha técnica: dos livros à Netflix</h2>
        <p>
          The Last Kingdom adapta as <strong>Crônicas Saxônicas</strong> (<em>The Saxon Stories</em>), série de 13 romances de
          <strong> Bernard Cornwell</strong> publicada entre 2004 e 2020 e lançada no Brasil pela Record. A adaptação foi
          produzida pela <strong>Carnival Films</strong>, a mesma de <em>Downton Abbey</em>, com roteiros iniciais de Stephen
          Butchard.
        </p>
        <p>
          As duas primeiras temporadas foram uma coprodução da <strong>BBC Two</strong>, no Reino Unido, com a BBC America.
          A partir da 3ª temporada, a <strong>Netflix</strong> assumiu a produção sozinha, aumentou o orçamento e passou a
          lançar todos os episódios de uma vez. As gravações aconteceram principalmente na Hungria, perto de Budapeste, onde
          foram erguidas vilas, fortalezas e campos de batalha inteiros.
        </p>

        <h2 className="flex items-center gap-2"><Calendar className="h-6 w-6 text-geek" />Temporadas, datas e episódios</h2>
        <p>
          São <strong>5 temporadas e 46 episódios</strong> de cerca de 50 a 60 minutos, além do filme. As datas abaixo são das
          estreias originais:
        </p>
      </div>

      <div className="not-prose overflow-x-auto my-6 rounded-xl border border-geek/30">
        <table className="w-full text-sm">
          <thead className="bg-geek/10 text-geek">
            <tr><th className="p-3 text-left">Temporada</th><th className="p-3 text-left">Estreia</th><th className="p-3 text-left">Canal</th><th className="p-3 text-left">Livros adaptados</th><th className="p-3 text-left">Episódios</th></tr>
          </thead>
          <tbody>
            {TEMPORADAS.map((t) => (
              <tr key={t.n} className="border-t border-border">
                <td className="p-3 font-bold">{t.n}ª</td><td className="p-3">{t.estreia}</td><td className="p-3">{t.canal}</td><td className="p-3">{t.livros}</td><td className="p-3">{t.eps}</td>
              </tr>
            ))}
            <tr className="border-t border-border bg-geek/5">
              <td className="p-3 font-bold">Filme</td><td className="p-3">14 de abril de 2023</td><td className="p-3">Netflix</td><td className="p-3">Inspirado no final da saga</td><td className="p-3">1 (≈ 1h51)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="flex items-center gap-2"><PlayCircle className="h-6 w-6 text-geek" />O que acontece em cada temporada (sem spoilers dos finais)</h2>
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
        <h2 className="flex items-center gap-2"><Film className="h-6 w-6 text-geek" />O filme: The Last Kingdom: Seven Kings Must Die</h2>
        <p>
          Quando a Netflix anunciou que a 5ª temporada seria a última, também confirmou um longa para fechar a história. O
          filme <strong>Seven Kings Must Die</strong> ("Sete Reis Devem Morrer") estreou em <strong>14 de abril de 2023</strong>,
          direto na plataforma, com direção de <strong>Edward Bazalgette</strong>, que já havia dirigido episódios da série, e
          roteiro de Martha Hillier.
        </p>
        <p>
          A trama se passa alguns anos depois do fim da série. O rei Eduardo morre, a disputa pelo trono se acende e
          <strong> Æthelstan</strong>, agora adulto e interpretado por Harry Gilby, tenta concretizar o sonho do avô de unir os
          reinos. Uhtred, entre a lealdade ao jovem rei e o desejo de viver em paz em Bebbanburg, se vê no centro de uma aliança
          de reis inimigos. O pano de fundo é a <strong>Batalha de Brunanburh</strong>, um dos confrontos mais importantes da
          história inglesa.
        </p>
        <p>
          Alexander Dreymon volta como Uhtred, ao lado de Mark Rowley (Finan) e Arnas Fedaravičius (Sihtric). A dica: assista
          às cinco temporadas antes. O filme funciona como o capítulo final da saga e depende do que veio antes.
        </p>

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-geek" />Personagens que você vai acompanhar</h2>
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
          A série também ficou marcada por figuras como Ragnar (Tobias Santelmann), a guerreira-freira Hild (Eva Birthistle),
          o padre galês Pyrlig (Cavan Clerkin), o rei Eduardo (Timothy Innes) e o ambicioso Æthelhelm. Um dos pontos fortes é
          que quase ninguém é puramente bom ou mau.
        </p>

        <h2 className="flex items-center gap-2"><Scale className="h-6 w-6 text-geek" />Série x história real: o que é verdade?</h2>
        <p>
          The Last Kingdom é ficção histórica: a moldura é real, mas o herói é inventado. Bernard Cornwell descobriu que
          descendia dos senhores de Bamburgh (a Bebbanburg da série) e criou um Uhtred fictício para viver os grandes eventos
          da época. Veja o que é fato e o que foi criado:
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
        <div className="rounded-xl border border-geek/30 bg-geek/5 p-5">
          <h3 className="font-bold text-geek mb-2">✅ Baseado em fatos</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>O <strong>Grande Exército Pagão</strong> dinamarquês invadiu a Inglaterra a partir de 865.</li>
            <li><strong>Alfredo, o Grande</strong>, reinou em Wessex de 871 a 899, venceu em Edington (878) e criou fortificações (os burhs).</li>
            <li><strong>Guthrum</strong> foi derrotado, batizado e fez um tratado com Alfredo; <strong>Ubba</strong> foi um líder viking real.</li>
            <li><strong>Æthelflæd</strong>, filha de Alfredo, governou a Mércia como "Senhora dos Mércios" e enfrentou os vikings.</li>
            <li><strong>Eduardo, o Velho</strong> e <strong>Æthelstan</strong> existiram; Æthelstan é visto como o primeiro rei de toda a Inglaterra.</li>
            <li>A <strong>Batalha de Brunanburh</strong> (937) aconteceu e opôs Æthelstan a uma aliança de reis.</li>
            <li>Bamburgh é uma fortaleza real no nordeste inglês.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-5">
          <h3 className="font-bold text-geek mb-2">❌ Criado ou alterado</h3>
          <ul className="text-sm space-y-2 text-foreground/90 list-disc pl-4">
            <li>O <strong>Uhtred</strong> da série não existiu; o Uhtred histórico de Bamburgh viveu no século 11.</li>
            <li>Brida, Finan, Sihtric, Beocca e Ragnar, como mostrados, são personagens fictícios ou muito livres.</li>
            <li>A cronologia é comprimida: a série cobre mais de 60 anos, mas os personagens envelhecem pouco.</li>
            <li>Diálogos, romances e muitas batalhas específicas foram inventados ou romantizados.</li>
            <li>Detalhes de figurino, armas e cabelos seguem mais a estética do que a arqueologia.</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          O mérito da série está em pegar um período pouco conhecido fora do Reino Unido, o nascimento da Inglaterra, e
          torná-lo acessível. Muita gente terminou a maratona e foi pesquisar quem foi Alfredo, o Grande. Isso diz muito.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Star className="h-6 w-6 text-geek" />O fenômeno na Netflix</h2>
        <p>
          The Last Kingdom começou modesta na BBC, mas explodiu quando chegou ao catálogo global da Netflix. Os fãs, que se
          chamam de parte do "exército de Uhtred", fizeram campanhas para que a história continuasse, e a série acumulou notas
          altas de público. O resultado foi a compra total pela plataforma e, depois, um filme exclusivo para concluir a saga.
        </p>
        <p>
          Para <strong>Alexander Dreymon</strong>, ator nascido na Alemanha e pouco conhecido antes da série, o papel foi o
          divisor de águas. Ele ainda atuou como produtor no filme. A dupla Uhtred e Finan virou uma das amizades mais amadas
          da TV recente.
        </p>

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-geek" />Por que você deveria assistir</h2>
        <ul>
          <li><strong>Batalhas de parede de escudos:</strong> combates brutais, próximos e táticos, muito diferentes das lutas coreografadas comuns.</li>
          <li><strong>Um protagonista dividido:</strong> você vê a guerra pelos olhos dos dois lados, saxões e dinamarqueses.</li>
          <li><strong>Ritmo:</strong> temporadas de 8 a 10 episódios, com eventos importantes quase toda semana.</li>
          <li><strong>Humor e amizade:</strong> entre uma batalha e outra, Uhtred, Finan e Sihtric rendem ótimos momentos.</li>
          <li><strong>História de verdade:</strong> você aprende como nasceu a Inglaterra sem sentir que está numa aula.</li>
          <li><strong>Fim completo:</strong> a história tem início, meio e fim, fechada pelo filme. Nada de cancelamento no meio.</li>
        </ul>
        <p>
          Se você gostou de <em>Vikings</em>, <em>Game of Thrones</em> ou <em>Peaky Blinders</em>, vai se sentir em casa. Um
          aviso: a classificação é para maiores de 16 anos, com violência intensa, sangue e cenas de sexo.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-geek" />Onde assistir The Last Kingdom</h2>
        <p>
          No Brasil, as <strong>cinco temporadas e o filme Seven Kings Must Die estão na Netflix</strong>, que é dona da
          produção desde a 3ª temporada. Os catálogos mudam com o tempo; confira no app antes de começar. A ordem certa é:
          temporadas 1 a 5 e, depois, o filme. Quem quiser ir além pode ler as Crônicas Saxônicas, começando por
          <em> O Último Reino</em>.
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
          Resumindo: 46 episódios, um filme, batalhas épicas e o nascimento de um país. Se você ainda não conhece Uhtred, filho
          de Uhtred, este é o momento. O destino é tudo.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          The Last Kingdom é a série que eu recomendo para quem acha que já viu tudo de vikings. As duas primeiras temporadas
          têm orçamento menor, mas a história prende rápido, e quando a Netflix assume, as batalhas ganham outra escala.
        </p>
        <p>
          O que me pegou foi a relação de Uhtred com Alfredo: dois homens que se irritam o tempo inteiro, mas não conseguem
          viver um sem o outro. E Finan merecia uma série só dele. O filme fecha a saga com dignidade, coisa rara hoje em dia.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "The Last Kingdom (TV series)", url: "https://en.wikipedia.org/wiki/The_Last_Kingdom_(TV_series)", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
          { title: "The Last Kingdom", url: "https://www.netflix.com/title/80074249", publisher: "Netflix", accessedAt: "Novembro 2026" },
          { title: "The Last Kingdom: Seven Kings Must Die", url: "https://en.wikipedia.org/wiki/The_Last_Kingdom:_Seven_Kings_Must_Die", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
          { title: "The Last Kingdom", url: "https://www.bbc.co.uk/programmes/p02x6n4l", publisher: "BBC", accessedAt: "Novembro 2026" },
          { title: "The Saxon Stories", url: "https://www.bernardcornwell.net/series/the-saxon-stories/", publisher: "Bernard Cornwell", accessedAt: "Novembro 2026" },
          { title: "Alfred the Great", url: "https://www.britannica.com/biography/Alfred-king-of-Wessex", publisher: "Britannica", accessedAt: "Novembro 2026" },
          { title: "Battle of Brunanburh", url: "https://en.wikipedia.org/wiki/Battle_of_Brunanburh", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default TheLastKingdomGuia2026;
