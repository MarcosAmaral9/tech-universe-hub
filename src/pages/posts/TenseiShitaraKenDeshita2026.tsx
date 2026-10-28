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
import { Clock, User, Calendar, BookOpen, Users, Tv, Swords, HelpCircle, Sparkles, Globe } from "lucide-react";
import heroImg from "@/assets/tensei-shitara-ken-deshita-guia-2026.webp";

const SLUG = "tensei-shitara-ken-deshita-reincarnated-as-a-sword-guia-2026";
const TITLE = "Tensei Shitara Ken Deshita (Reincarnated as a Sword): Guia das Duas Temporadas, Fran, Mestre e o Isekai da Espada";

const FICHA = [
  { label: "Título original", value: "Tensei Shitara Ken Deshita (転生したら剣でした)" },
  { label: "Autor", value: "Yuu Tanaka (web novel no Shousetsuka ni Narou, de outubro de 2015 a fevereiro de 2024)" },
  { label: "Light novel", value: "Micro Magazine, selo GC Novels, ilustrações de Llo; 21 volumes no Japão" },
  { label: "Estúdio do anime", value: "C2C, nas duas temporadas" },
  { label: "Direção", value: "Shinji Ishihira (também diretor de Tsukimichi)" },
  { label: "Música", value: "Yasuharu Takanashi (Fairy Tail)" },
  { label: "Temporadas", value: "T1 (outubro a dezembro de 2022, 12 ep.) e T2 (desde outubro de 2026, em exibição)" },
  { label: "Gêneros", value: "Isekai, fantasia, ação, aventura, comédia e drama" },
];

const PROTAGONISTAS = [
  {
    nome: "Mestre (Shishou / Teacher)",
    texto: "Um homem japonês que morre num acidente e acorda no outro mundo transformado em uma espada, cravada num pedestal no meio de uma floresta cheia de monstros. Ele pensa, fala por telepatia, usa magia e consegue se mover com telecinese, mas não tem corpo. Fica mais forte absorvendo as pedras mágicas dos monstros que derrota. O nome vem de Fran, que passa a chamá-lo de \"Mestre\" (Shishou, traduzido como Teacher em inglês). Tem humor de adulto comum, faz piadas internas e age como um pai superprotetor.",
  },
  {
    nome: "Fran",
    texto: "Uma garota da tribo dos Gatos Pretos, uma raça de homens-fera, que aparece escravizada e à beira da morte. Mestre a salva, e ela se torna sua portadora. Fran fala pouco, come muito (adora curry) e é extremamente determinada. Seu objetivo é evoluir, algo que, segundo a tradição do mundo, nenhum Gato Preto consegue, e que custou caro à sua família. É ela quem dá rosto, sentimento e pernas à dupla.",
  },
];

const SECUNDARIOS = [
  { nome: "Amanda", texto: "Aventureira de rank A conhecida pelo chicote e pelo carinho com crianças. Fica encantada por Fran e vira uma espécie de irmã mais velha protetora." },
  { nome: "Guilda de Aventureiros", texto: "Recepcionistas, mestres de guilda e aventureiros veteranos (alguns valentões, outros mentores) formam o ambiente em que Fran precisa provar seu valor, apesar da idade." },
  { nome: "Os Gatos Azuis", texto: "Outra tribo de homens-gato que despreza e escraviza os Gatos Pretos. O conflito entre as duas é o pano de fundo do objetivo de Fran." },
  { nome: "A voz das habilidades", texto: "Uma voz interna que anuncia habilidades e evoluções para Mestre, em estilo de sistema de RPG. Ela tem papel maior do que parece no começo, mas não vamos estragar a surpresa." },
];

const TEMPORADAS = [
  { t: "1ª temporada", periodo: "5 de outubro a 21 de dezembro de 2022", ep: "12 episódios", resumo: "O despertar de Mestre na floresta, o encontro com Fran, a cidade de Alessa, a entrada na Guilda de Aventureiros e as primeiras masmorras. É a temporada da formação da dupla." },
  { t: "2ª temporada (Tensei Shitara Ken Deshita II)", periodo: "ABEMA desde 30 de setembro de 2026; TV a partir de 7 de outubro de 2026 (Tokyo MX, ABC TV e outras)", ep: "12 episódios listados até agora; em exibição", resumo: "O primeiro episódio, \"A Ilha Flutuante\", abre uma nova fase de viagem. Mesma equipe da C2C, com Shinji Ishihira na direção e Takahiro Nagano na composição da série." },
];

const FAQ = [
  { q: "Quantas temporadas Reincarnated as a Sword tem?", a: "Duas: a primeira de outubro a dezembro de 2022, com 12 episódios, e a segunda, que estreou em outubro de 2026 e está em exibição." },
  { q: "Quando estreou a 2ª temporada?", a: "No streaming japonês ABEMA em 30 de setembro de 2026 e na TV japonesa a partir de 7 de outubro de 2026." },
  { q: "Qual estúdio faz o anime?", a: "O estúdio C2C, com direção de Shinji Ishihira nas duas temporadas." },
  { q: "Quem são os protagonistas?", a: "Mestre, um homem reencarnado como espada mágica, e Fran, uma garota da tribo dos Gatos Pretos que se torna sua portadora." },
  { q: "Por que o anime é diferente de outros isekais?", a: "O protagonista não tem corpo: renasce como uma arma, depende de outra pessoa para lutar e evolui absorvendo pedras mágicas de monstros." },
  { q: "Tem light novel?", a: "Sim. A Micro Magazine publica no Japão pelo selo GC Novels, com 21 volumes; a Seven Seas lança em inglês. Edição oficial em português não foi confirmada." },
  { q: "Onde assistir no Brasil?", a: "A primeira temporada está na Crunchyroll. Para a segunda, confira o catálogo da plataforma, porque a disponibilidade pode variar por região." },
];

const TenseiShitaraKenDeshita2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category="otaku" size="lg" />
          <span className="text-xs bg-otaku/10 text-otaku border border-otaku/30 px-2 py-1 rounded-full font-bold">📺 Anime</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="28 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de uma garota de orelhas de gato e cabelo preto empunhando uma grande espada brilhante de lâmina azul e guarda dourada, com uma cidade medieval ao pôr do sol ao fundo"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no universo da série. Não é arte oficial do anime.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Já vimos gente reencarnar como slime, aranha, máquina de vendas e até esqueleto. Mas poucas premissas são tão
          curiosas quanto a de <strong>Tensei Shitara Ken Deshita</strong>, conhecido no Ocidente como
          <strong> Reincarnated as a Sword</strong>: o protagonista renasce como uma espada. Com a segunda temporada em
          exibição desde outubro de 2026, este guia explica as duas temporadas, os gêneros, a dupla Mestre e Fran e por
          que essa ideia quebra o padrão dos isekais, sem spoilers dos grandes acontecimentos.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />De web novel a anime</h2>
        <p>
          A história foi criada por <strong>Yuu Tanaka</strong> e publicada gratuitamente no site
          <strong> Shousetsuka ni Narou</strong>, a mesma plataforma de onde saíram Re:Zero e Tensei Slime, entre outubro
          de 2015 e fevereiro de 2024. O sucesso levou a editora <strong>Micro Magazine</strong> a lançar a versão em
          light novel pelo selo GC Novels, com ilustrações de <strong>Llo</strong>. No Japão já são 21 volumes, e a Seven
          Seas Entertainment publica a série em inglês. Há também uma adaptação em mangá.
        </p>
        <p>
          O anime ficou com o estúdio <strong>C2C</strong>, com direção de <strong>Shinji Ishihira</strong>, o mesmo de
          Tsukimichi: Moonlit Fantasy, e trilha de <strong>Yasuharu Takanashi</strong>, conhecido por Fairy Tail. A mesma
          equipe principal voltou para a segunda temporada, o que ajuda a manter o tom e o visual consistentes.
        </p>

        <h2 className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-otaku" />A quebra de padrão: renascer como uma espada</h2>
        <p>
          A maioria dos isekais segue uma fórmula conhecida: alguém morre no Japão, ganha um corpo novo e poderoso e sai
          resolvendo os problemas do mundo por conta própria. Reincarnated as a Sword pega essa fórmula e tira a peça mais
          importante dela: o corpo. Mestre acorda cravado num pedestal, no meio de uma floresta infestada de monstros, sem
          braços, sem pernas e sem ninguém por perto.
        </p>
        <p>
          Isso muda tudo. Primeiro, ele precisa descobrir como se mover, e faz isso com <strong>telecinese</strong>,
          flutuando e atacando sozinho como uma lâmina voadora. Segundo, a forma de evoluir é diferente: ele absorve as
          <strong> pedras mágicas</strong> dos monstros que derrota, e com elas ganha níveis e novas habilidades, quase como
          um RPG em que cada inimigo é também um item. Terceiro, e mais importante, por mais forte que fique, uma espada
          rende muito mais nas mãos de alguém. Ele depende de um portador.
        </p>
        <p>
          É aí que a série encontra seu coração. Em vez de um herói invencível e solitário, temos uma <strong>dupla</strong>:
          a espada traz conhecimento, magia e a mentalidade de um adulto; a portadora traz o corpo, a coragem e o motivo da
          jornada. Nenhum dos dois funciona tão bem sozinho, e a história vive dessa parceria.
        </p>
        <p>
          Há ainda um detalhe divertido. Mestre conversa com Fran por telepatia, então boa parte do humor vem do contraste
          entre o que ele pensa (preocupações de pai, comentários de quem conhece animes e jogos) e o rosto sério e calado
          da garota. É uma espada com crise de paternidade, e isso funciona surpreendentemente bem.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-otaku" />Os dois protagonistas</h2>
        <p>
          Diferente de muitos isekais, aqui não existe um protagonista e um elenco de apoio: existem dois protagonistas que
          dividem o centro da tela o tempo todo.
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-8">
        {PROTAGONISTAS.map((p) => (
          <div key={p.nome} className="rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/10 to-card/50 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{p.nome}</h3>
            <p className="text-sm leading-relaxed text-foreground/90">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A relação entre os dois é o melhor do anime. Mestre não vê Fran como uma ferramenta; ele quer protegê-la, quer que
          ela coma bem, que faça amigos e que não sofra o que já sofreu. Fran, por sua vez, confia nele de forma absoluta e
          o trata como família. O resultado é uma mistura de mentor e aluna com pai adotivo e filha, embalada em lutas
          muito bem animadas.
        </p>
        <p>
          O objetivo de Fran dá direção à história. A tribo dos Gatos Pretos é vista como inferior porque, segundo o mundo
          da série, é a única raça de homens-fera incapaz de <strong>evoluir</strong>, ou seja, de alcançar uma forma mais
          poderosa. Os pais de Fran tentaram mudar isso. Ela quer completar o que eles começaram, e Mestre decide ajudá-la
          até o fim.
        </p>

        <h2 className="flex items-center gap-2"><Globe className="h-6 w-6 text-otaku" />Personagens secundários e o mundo</h2>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-8">
        {SECUNDARIOS.map((p) => (
          <div key={p.nome} className="rounded-xl border border-otaku/30 bg-card/60 p-5">
            <h3 className="font-display text-base font-bold text-otaku mb-2">{p.nome}</h3>
            <p className="text-sm leading-relaxed text-foreground/90">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          O mundo segue a lógica de RPG que os fãs de isekai conhecem: há níveis, habilidades com nomes, classes,
          masmorras e uma <strong>Guilda de Aventureiros</strong> com ranks. Fran entra na guilda ainda criança e precisa
          lidar com quem a subestima pela idade e pela raça. Muitas das melhores cenas da primeira temporada vêm desse
          choque: aventureiros mais velhos rindo de uma garotinha com uma espada enorme, até descobrirem do que a dupla é
          capaz.
        </p>
        <p>
          O preconceito contra os Gatos Pretos é tratado com seriedade. A série não transforma isso em discurso, mas mostra
          as consequências: escravidão, desprezo e a ideia de que alguns nascem destinados a ser menos. A jornada de Fran é,
          no fundo, uma resposta a essa injustiça.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-otaku" />Gêneros: o que esperar</h2>
        <p>
          Reincarnated as a Sword é, antes de tudo, um <strong>isekai</strong> de <strong>fantasia</strong>. Mas mistura
          bem outros gêneros:
        </p>
        <ul>
          <li><strong>Ação e aventura:</strong> lutas contra monstros, masmorras e viagens entre cidades, com coreografias rápidas da espada voadora.</li>
          <li><strong>Comédia:</strong> os pensamentos exagerados de Mestre, o apetite infinito de Fran e o jeito seco dela de responder a tudo.</li>
          <li><strong>Drama:</strong> o passado de Fran, a escravidão e o peso da tribo dos Gatos Pretos dão momentos realmente emocionantes.</li>
          <li><strong>Progressão de poder:</strong> quem gosta de ver habilidades novas sendo desbloqueadas vai se divertir com a evolução da espada.</li>
        </ul>
        <p>
          O equilíbrio é parecido com o de Tensei Slime nos primeiros arcos: leve na maior parte do tempo, mas sem medo de
          ficar sombrio quando a história pede. Há violência de batalha, mas nada que exija estômago forte.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />As duas temporadas</h2>
        <p>
          A primeira temporada saiu em 2022. A continuação foi anunciada em julho de 2025, mostrada em trailer na
          AnimeJapan 2026 e estreou em outubro de 2026. Veja os detalhes:
        </p>
      </div>

      <div className="not-prose grid gap-4 my-8">
        {TEMPORADAS.map((s) => (
          <div key={s.t} className="rounded-xl border border-otaku/30 bg-card/60 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{s.t}</h3>
            <ul className="text-sm space-y-1 text-foreground/90">
              <li><strong>Período:</strong> {s.periodo}</li>
              <li><strong>Formato:</strong> {s.ep}</li>
              <li><strong>Resumo:</strong> {s.resumo}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A <strong>primeira temporada</strong> é uma história de formação. Ela gasta os primeiros episódios mostrando
          Mestre sozinho na floresta, aprendendo a se mover e caçando monstros, até o encontro com Fran. A partir daí, o
          foco passa para a vida de aventureira: chegar à cidade, se registrar na guilda, enfrentar os primeiros desafios
          e encarar fantasmas do passado. Os 12 episódios cobrem o início da light novel e terminam com a dupla já
          consolidada.
        </p>
        <p>
          A <strong>segunda temporada</strong> começa com o episódio "A Ilha Flutuante" e leva a dupla para novos lugares e
          novos perigos. Como a temporada ainda está em exibição, não há como avaliar o conjunto, e os detalhes do enredo
          ficam fora deste guia para evitar spoilers. A boa notícia é a continuidade: C2C, Shinji Ishihira, a composição
          de Takahiro Nagano e a música de Yasuharu Takanashi voltaram, e o elenco ganhou nomes novos, como Shiori Izawa no
          papel de Stephan, anunciado em outubro de 2026.
        </p>
        <p>
          Para quem vai começar agora, a ordem é simples: assista à primeira temporada inteira antes da segunda. A
          continuação parte direto de onde a anterior parou e não recapitula a história.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />Ficha técnica</h2>
      </div>

      <div className="not-prose my-6 rounded-xl border border-otaku/30 bg-card/60 p-5">
        <dl className="grid gap-3 sm:grid-cols-2">
          {FICHA.map((f) => (
            <div key={f.label}>
              <dt className="text-xs uppercase tracking-wide text-otaku font-bold">{f.label}</dt>
              <dd className="text-sm text-foreground/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />Onde assistir e ler</h2>
        <p>
          A primeira temporada está na <strong>Crunchyroll</strong>, que também divulga as notícias oficiais da segunda.
          Como a disponibilidade e os idiomas podem mudar por região, confira o catálogo antes de assinar. No Japão, a
          segunda temporada estreou primeiro no ABEMA e depois na Tokyo MX, ABC TV e AT-X.
        </p>
        <p>
          Para ler, a light novel tem edição oficial em inglês pela Seven Seas. Não encontramos confirmação de edição
          oficial impressa em português até a data deste artigo; se surgir, atualizaremos aqui. Prefira sempre plataformas
          licenciadas, que remuneram autor e ilustrador.
        </p>

        <h2 className="flex items-center gap-2"><HelpCircle className="h-6 w-6 text-otaku" />Perguntas frequentes</h2>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
        {FAQ.map((f) => (
          <div key={f.q} className="rounded-xl border border-otaku/30 bg-otaku/5 p-5">
            <h3 className="font-bold text-otaku mb-2">{f.q}</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          Resumindo: Reincarnated as a Sword pega um clichê cansado e o vira de cabeça para baixo ao tirar o corpo do
          protagonista. O que sobra é uma das duplas mais carismáticas dos isekais recentes, com ação, humor e drama na
          medida. Com a segunda temporada no ar, é um ótimo momento para conhecer Mestre e Fran.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          Confesso que esperava só uma piada de premissa, do tipo "olha que engraçado, ele virou uma espada". Me enganei. O
          que segura a série é a relação entre Mestre e Fran: ele é o adulto preocupado que pensa demais, ela é a garota
          que fala três palavras e resolve tudo. Esse contraste rende cenas engraçadas e, quando a história aperta,
          momentos que realmente tocam.
        </p>
        <p>
          A animação da primeira temporada não é das mais luxuosas, mas as lutas com a espada voadora são criativas. Minha
          dica é não julgar pelos dois primeiros episódios, que são mais lentos: a série cresce de verdade quando Fran
          entra em cena.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "Reincarnated as a Sword Season 2 Reveals September 30 Early Streaming Debut", url: "https://www.animenewsnetwork.com/news/2026-08-16/reincarnated-as-a-sword-season-2-reveals-september-30-early-streaming-debut-theme-songs-in-trailer/.240622", publisher: "Anime News Network", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword Season 2 Anime Reveals Premiere Date", url: "https://www.crunchyroll.com/news/latest/2026/8/16/reincarnated-as-a-sword-season-2-anime-september-30-release-date-trailer-key-visual-theme-songs", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword Season 2 Reveals October 2026 Broadcast", url: "https://www.crunchyroll.com/news/latest/2026/3/28/reincarnated-as-a-sword-season-2-anime-october-2026-release-date-trailer", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword Anime Season 2 Premieres in 2026", url: "https://www.crunchyroll.com/news/latest/2025/7/5/reincarnated-as-a-sword-anime-season-2-2026-premiere-ultra-teaser-art", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword Season 2 Casts Shiori Izawa as Stephan", url: "https://www.crunchyroll.com/news/latest/2026/10/17/reincarnated-as-a-sword-season-2-anime-casts-shiori-izawa-as-stephan", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword II Premieres October 7", url: "https://www.anime.com/news/reincarnated-as-a-sword-ii-october-7-premiere-date", publisher: "Anime.com", accessedAt: "Outubro 2026" },
          { title: "Tensei shitara Ken deshita II", url: "https://myanimelist.net/anime/53913/Tensei_shitara_Ken_deshita_II", publisher: "MyAnimeList", accessedAt: "Outubro 2026" },
          { title: "Reincarnated as a Sword", url: "https://en.wikipedia.org/wiki/Reincarnated_as_a_Sword", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default TenseiShitaraKenDeshita2026;
