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
import heroImg from "@/assets/how-not-to-summon-demon-lord-guia-2026.webp";

const SLUG = "how-not-to-summon-a-demon-lord-isekai-maou-guia-2026";
const TITLE = "How Not to Summon a Demon Lord (Isekai Maou): Guia das Temporadas, Diablo, Shera, Rem e o Rei Demônio Bobalhão";

const FICHA = [
  { label: "Título original", value: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu (異世界魔王と召喚少女の奴隷魔術)" },
  { label: "Autor", value: "Yukiya Murasaki" },
  { label: "Light novel", value: "Kodansha, selo Kodansha Ranobe Bunko, desde dezembro de 2014; ilustrações de Takahiro Tsurusaki" },
  { label: "Mangá", value: "Naoto Fukuda, desde 2015 (Suiyōbi no Sirius, Kodansha)" },
  { label: "Edição em inglês", value: "Light novel pela J-Novel Club; mangá pela Seven Seas" },
  { label: "Temporadas", value: "T1 (julho a setembro de 2018, 12 ep., Ajiado) e T2 \"Ω\" (abril a junho de 2021, 10 ep., Tezuka Productions e Okuruto Noboru)" },
  { label: "Gêneros", value: "Isekai, fantasia, comédia, ação, harém e ecchi" },
];

const PROTAGONISTAS = [
  {
    nome: "Diablo (Takuma Sakamoto)",
    texto: "Takuma é um jogador habilidoso do MMORPG Cross Reverie, tão dedicado que seu avatar, Diablo, ganhou o apelido de \"Rei Demônio\" entre os jogadores. Fora do jogo, porém, ele é tímido e quase não sabe conversar com outras pessoas. Quando é invocado para outro mundo no corpo de Diablo, com todo o poder do personagem, decide se esconder atrás da persona: fala como um vilão arrogante e teatral porque é a única forma que conhece de não travar.",
  },
  {
    nome: "Shera L. Greenwood",
    texto: "Uma elfa loira, alegre e impulsiva, que fugiu de casa e quer ser livre para decidir o próprio caminho. Sua origem nobre traz problemas que perseguem o grupo. É calorosa, come bem, faz amizade fácil e não tem nenhum medo de Diablo, o que deixa o \"Rei Demônio\" sem saber como reagir.",
  },
  {
    nome: "Rem Galleu",
    texto: "Uma garota da raça dos Pantherians, de orelhas e cauda de felino, séria e orgulhosa. Ela carrega dentro de si um segredo ligado ao antigo Rei Demônio Krebskulm, e é esse peso que move boa parte do enredo. Como aventureira, é responsável e um pouco ciumenta, sempre disputando atenção com Shera.",
  },
];

const SECUNDARIOS = [
  { nome: "Sylvie", texto: "Mestre da guilda de aventureiros da cidade de Faltra. Animada e informal, vira aliada próxima do grupo." },
  { nome: "Alicia Crystella", texto: "Cavaleira de posição elevada que aparece com intenções que vão sendo reveladas aos poucos. Melhor não adiantar mais nada." },
  { nome: "Krebskulm", texto: "O antigo Rei Demônio do mundo, cuja existência está ligada a Rem. Sua presença move a 2ª temporada." },
  { nome: "Rose", texto: "Uma golem de aparência humana que se junta ao grupo e acrescenta humor à rotina de Diablo." },
];

const TEMPORADAS = [
  { t: "1ª temporada", periodo: "Julho a setembro de 2018", ep: "12 episódios, estúdio Ajiado", resumo: "A invocação de Diablo, o mal-entendido da magia de servidão, a cidade de Faltra, a guilda de aventureiros e o segredo de Rem. Adapta aproximadamente os três primeiros volumes da light novel." },
  { t: "2ª temporada (Isekai Maou… Ω)", periodo: "9 de abril a 11 de junho de 2021", ep: "10 episódios, Tezuka Productions e Okuruto Noboru", resumo: "Continuação direta, com novas raças, novos conflitos políticos e a presença de Krebskulm. Mudou de estúdio, o que se nota no visual." },
];

const FAQ = [
  { q: "Quantas temporadas How Not to Summon a Demon Lord tem?", a: "Duas: a primeira em 2018, com 12 episódios, e a segunda, chamada Ω (Omega), em 2021, com 10 episódios." },
  { q: "Vai ter 3ª temporada?", a: "Até a data deste artigo, não encontramos anúncio oficial de uma terceira temporada." },
  { q: "Quais estúdios fizeram o anime?", a: "A 1ª temporada é do estúdio Ajiado; a 2ª ficou com Tezuka Productions e Okuruto Noboru." },
  { q: "Quem são os protagonistas?", a: "Diablo, um jogador invocado no corpo do seu avatar de Rei Demônio, e as duas garotas que o invocaram: a elfa Shera L. Greenwood e a Pantherian Rem Galleu." },
  { q: "Por que Diablo age como vilão?", a: "Takuma é muito tímido e não sabe conversar. Imitar o Rei Demônio do jogo é a forma que ele encontra de lidar com as pessoas, o que gera a comédia da série." },
  { q: "O anime é para todas as idades?", a: "Não. Tem fanservice e conteúdo ecchi frequente, sendo indicado para maiores de 16 anos." },
  { q: "Onde assistir?", a: "A 2ª temporada foi licenciada pela Funimation, cujo catálogo migrou para a Crunchyroll. Confira na plataforma a disponibilidade das duas temporadas no Brasil." },
];

const HowNotToSummonDemonLord2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />29 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="29 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de um rei demônio de cabelo branco e chifres conjurando magia dourada ao lado de uma elfa loira de roupa verde e uma garota de orelhas de gato e cabelo preto, sobre uma cidade medieval ao pôr do sol"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no universo da série. Não é arte oficial do anime.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Imagine ser invocado para outro mundo com o corpo do personagem mais poderoso de um jogo online, e não saber
          conversar com ninguém. Essa é a premissa de <strong>How Not to Summon a Demon Lord</strong>, ou
          <strong> Isekai Maou to Shoukan Shoujo no Dorei Majutsu</strong> no original. Neste guia você conhece as duas
          temporadas, os gêneros, o trio Diablo, Shera e Rem e o motivo de um "Rei Demônio" tão atrapalhado ter
          conquistado tantos fãs, sem spoilers dos grandes momentos.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />De light novel a anime</h2>
        <p>
          A história foi escrita por <strong>Yukiya Murasaki</strong>, com ilustrações de <strong>Takahiro Tsurusaki</strong>,
          e começou a ser publicada pela <strong>Kodansha</strong> no selo Kodansha Ranobe Bunko em dezembro de 2014. Em
          2015 ganhou uma adaptação em mangá desenhada por <strong>Naoto Fukuda</strong>, lançada no serviço digital
          Suiyōbi no Sirius. Em inglês, a light novel sai pela J-Novel Club e o mangá pela Seven Seas.
        </p>
        <p>
          O anime veio em 2018 pelo estúdio <strong>Ajiado</strong>. O sucesso garantiu uma continuação, anunciada em abril
          de 2020 e exibida em 2021 com o nome <strong>Ω (Omega)</strong>, agora produzida pela
          <strong> Tezuka Productions</strong> em parceria com o estúdio Okuruto Noboru.
        </p>

        <h2 className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-otaku" />A quebra de padrão: um Rei Demônio bobalhão</h2>
        <p>
          Nos isekais tradicionais, o protagonista renasce com poderes e logo vira o herói confiante que todos admiram.
          Aqui a fórmula é invertida de dois jeitos. Primeiro, Takuma não vira herói: ele chega ao novo mundo como um
          <strong> Rei Demônio</strong>, com chifres, pele escura e poder absurdo, a aparência clássica do vilão final.
          Segundo, por dentro ele continua sendo o mesmo rapaz tímido que passava os dias jogando sozinho.
        </p>
        <p>
          A saída que ele encontra é atuar. Sempre que fica nervoso, Takuma "veste" o Diablo do jogo: fala alto, faz pose,
          ameaça com frases dramáticas e trata todo mundo com arrogância. Só que o público ouve também os pensamentos dele,
          cheios de pânico, dúvida e vergonha. A graça da série está nesse contraste: o vilão mais temido do mundo está,
          na maioria das vezes, desesperado por não saber o que dizer a duas garotas.
        </p>
        <p>
          Outro detalhe ajuda a tornar a premissa original. Shera e Rem invocam Diablo esperando que ele se torne servo
          delas. Elas usam uma <strong>magia de servidão</strong>, mas, por causa de uma habilidade passiva do personagem
          que reflete magias, o feitiço volta contra as duas: são elas que acabam com colares de servidão. Em vez de
          abusar da situação, o desajeitado Diablo passa boa parte do tempo tentando resolver o problema que nem causou.
        </p>
        <p>
          E, apesar de bobalhão no trato social, ele é competente quando importa. O conhecimento do jogo faz de Diablo um
          estrategista frio nas lutas. Essa combinação de força total com insegurança total é o que diferencia a série de
          outros isekais de "protagonista apelão".
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-otaku" />Os três protagonistas</h2>
        <p>
          A série gira em torno de um trio: o Rei Demônio e as duas invocadoras que o trouxeram para o novo mundo.
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-3 my-8">
        {PROTAGONISTAS.map((p) => (
          <div key={p.nome} className="rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/10 to-card/50 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{p.nome}</h3>
            <p className="text-sm leading-relaxed text-foreground/90">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A dinâmica entre os três é o motor da comédia. Shera é expansiva e não percebe o constrangimento que causa; Rem
          é reservada e tenta manter a compostura; Diablo, no meio, finge ser imponente enquanto sofre por dentro. As duas
          vivem disputando a atenção dele, e cada tentativa de agradá-las termina em discurso de vilão mal calculado.
        </p>
        <p>
          Por trás do humor, há uma história de confiança. Takuma nunca teve amigos de verdade, e Shera e Rem carregam
          problemas que não podem resolver sozinhas. Aos poucos, a persona do Rei Demônio vira menos uma máscara e mais uma
          forma de proteger as pessoas que passaram a importar para ele.
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
          O mundo é praticamente o de Cross Reverie trazido à vida: magias com os mesmos nomes, monstros conhecidos e
          raças como humanos, elfos, Pantherians, anões e demônios convivendo com bastante tensão. A cidade de
          <strong> Faltra</strong>, onde o grupo se instala, fica perto da fronteira com o território dos demônios, o que
          coloca a política e o preconceito entre raças no centro dos conflitos.
        </p>
        <p>
          Para Diablo, esse conhecimento é uma vantagem e uma armadilha ao mesmo tempo. Ele sabe como o jogo funcionava,
          mas o mundo real tem pessoas com vontades próprias, e nem tudo segue a lógica que ele decorou.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-otaku" />Gêneros: o que esperar</h2>
        <ul>
          <li><strong>Isekai e fantasia:</strong> a invocação para um mundo idêntico ao de um MMORPG, com magia, guildas e raças.</li>
          <li><strong>Comédia:</strong> o contraste entre a pose de vilão e a timidez de Takuma é a principal fonte de risadas.</li>
          <li><strong>Ação:</strong> lutas curtas e explosivas, em que Diablo usa magias de alto nível e estratégia de jogador veterano.</li>
          <li><strong>Harém:</strong> várias personagens se aproximam de Diablo ao longo das temporadas.</li>
          <li><strong>Ecchi:</strong> o anime tem fanservice constante. É bom saber disso antes de começar: não é uma série para crianças nem para assistir em família.</li>
        </ul>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />As temporadas</h2>
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
          A <strong>primeira temporada</strong> é a mais elogiada pelos fãs. Ela apresenta bem a premissa, equilibra
          comédia e aventura e termina um arco completo. O traço do estúdio Ajiado é colorido e expressivo, e as caras de
          pânico de Diablo nos momentos de silêncio viraram marca da série.
        </p>
        <p>
          A <strong>segunda temporada (Ω)</strong> continua de onde a primeira parou, com menos episódios e mudança de
          estúdio. Muitos espectadores notaram diferenças na animação e no ritmo, que fica mais acelerado para cobrir mais
          material dos livros. A história avança, aprofunda o passado de Rem e amplia o elenco.
        </p>
        <p>
          Até a data deste artigo, <strong>não há anúncio oficial de uma terceira temporada</strong>. Quem quiser saber o
          que vem depois pode seguir pela light novel: a segunda temporada termina por volta do sexto volume, mas, como o
          anime corta e muda detalhes, vale começar pelo volume 1 para ter a história completa.
        </p>

        <h2 className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-otaku" />Para quem é este anime</h2>
        <p>
          How Not to Summon a Demon Lord funciona melhor para quem já conhece os clichês do isekai e gosta de ver alguém
          brincar com eles. Se você curtiu Overlord, outra história em que um jogador fica preso no corpo do seu avatar
          poderoso e precisa manter a pose de soberano, vai reconhecer a ideia. A diferença é o tom: Overlord leva o
          protagonista para um caminho sombrio e sério, enquanto aqui a pose de vilão é quase sempre motivo de piada.
        </p>
        <p>
          Também é uma boa escolha para quem quer episódios leves e rápidos. A primeira temporada tem só 12 episódios e
          pode ser vista em um fim de semana. A trama tem conflitos políticos e alguns momentos tensos, mas o clima geral é
          de aventura descontraída, com piadas recorrentes que funcionam do começo ao fim.
        </p>
        <p>
          Por outro lado, quem procura uma fantasia profunda, com construção de mundo detalhada e personagens femininas
          longe do fanservice, pode se frustrar. O roteiro usa bastante as cenas ecchi, e boa parte das personagens é
          apresentada primeiro pela aparência. Sabendo disso de antemão, fica mais fácil decidir se a série combina com
          você. Para muitos fãs, o carisma de Diablo e o coração do trio compensam esses exageros com sobra, e é por
          isso que o anime segue lembrado anos depois da estreia.
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
          A segunda temporada foi licenciada no Ocidente pela Funimation, cujo catálogo passou para a
          <strong> Crunchyroll</strong> após a fusão das plataformas. Como a disponibilidade de temporadas e idiomas varia
          por região, confira o catálogo antes de assinar.
        </p>
        <p>
          Para ler, a light novel tem edição oficial em inglês pela J-Novel Club e o mangá pela Seven Seas. Não
          encontramos confirmação de edição oficial em português até a data deste artigo; se surgir, atualizaremos aqui.
          Prefira sempre plataformas licenciadas, que remuneram autor e ilustrador.
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
          Resumindo: How Not to Summon a Demon Lord pega o isekai de protagonista invencível e coloca dentro dele alguém
          que não sabe nem pedir um copo d'água. O resultado é uma comédia de fantasia leve, com ação e um trio carismático,
          desde que você esteja confortável com o fanservice.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          O que me pegou nesse anime foi a honestidade da piada. Muita gente já se sentiu como o Takuma, mais à vontade
          atrás de um personagem do que conversando de verdade. Ver o "Rei Demônio" ensaiando falas na cabeça enquanto
          finge segurança é engraçado justamente porque é familiar.
        </p>
        <p>
          Meu conselho é direto: a primeira temporada é a melhor porta de entrada e funciona quase como história fechada.
          Se gostar, vá para a Ω sabendo que a animação muda. E, se o fanservice incomodar, saiba que ele não diminui; é
          parte da proposta da série.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "How Not to Summon a Demon Lord", url: "https://en.wikipedia.org/wiki/How_Not_to_Summon_a_Demon_Lord", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
          { title: "List of How Not to Summon a Demon Lord volumes", url: "https://en.wikipedia.org/wiki/List_of_How_Not_to_Summon_a_Demon_Lord_volumes", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
          { title: "How NOT to Summon a Demon Lord Anime Gets 2nd Season in 2021", url: "https://www.animenewsnetwork.com/news/2020-04-08/how-not-to-summon-a-demon-lord-anime-gets-2nd-season-in-2021/.158411", publisher: "Anime News Network", accessedAt: "Outubro 2026" },
          { title: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω", url: "https://myanimelist.net/anime/41623/Isekai_Maou_to_Shoukan_Shoujo_no_Dorei_Majutsu_%CE%A9", publisher: "MyAnimeList", accessedAt: "Outubro 2026" },
          { title: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu", url: "https://myanimelist.net/anime/37210/Isekai_Maou_to_Shoukan_Shoujo_no_Dorei_Majutsu", publisher: "MyAnimeList", accessedAt: "Outubro 2026" },
          { title: "How Not to Summon a Demon Lord: Light Novel After Season 2", url: "https://yomoru.com/series/how-not-to-summon-a-demon-lord/", publisher: "Yomoru", accessedAt: "Outubro 2026" },
          { title: "How NOT to Summon a Demon Lord (Light Novel)", url: "https://j-novel.club/series/how-not-to-summon-a-demon-lord", publisher: "J-Novel Club", accessedAt: "Outubro 2026" },
          { title: "How NOT to Summon a Demon Lord (Manga)", url: "https://sevenseasentertainment.com/series/how-not-to-summon-a-demon-lord/", publisher: "Seven Seas Entertainment", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default HowNotToSummonDemonLord2026;
