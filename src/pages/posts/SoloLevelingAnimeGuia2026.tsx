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
import { Clock, User, Calendar, BookOpen, Users, Tv, Swords, HelpCircle, ListChecks, Music, Globe } from "lucide-react";
import heroImg from "@/assets/solo-leveling-anime-guia-2026.webp";

const SLUG = "solo-leveling-anime-guia-personagens-temporadas-2026";
const TITLE = "Solo Leveling: Guia do Anime em 2026 — Personagens, Temporadas, Temas e o Que Vem Por Aí";

const FICHA = [
  { label: "Título original", value: "Na Honjaman Level Up (나 혼자만 레벨업) / Ore dake Level Up na Ken" },
  { label: "Autor", value: "Chugong (web novel na KakaoPage, desde 2016)" },
  { label: "Manhwa", value: "Arte de DUBU (Jang Sung-rak), Redice Studio, 2018–2021" },
  { label: "Estúdio do anime", value: "A-1 Pictures" },
  { label: "Direção", value: "Shunsuke Nakashige" },
  { label: "Música", value: "Hiroyuki Sawano" },
  { label: "Temporadas", value: "T1 (2024, 12 ep.) e T2 Arise from the Shadow (2025, 13 ep.); T3 confirmada" },
  { label: "Filmes", value: "ReAwakening (2024, compilação) e Beyond the System (anunciado em julho de 2026)" },
  { label: "Gêneros", value: "Ação, fantasia sombria, dungeons, progressão de nível" },
  { label: "Onde assistir", value: "Crunchyroll, com legendas e dublagem em português" },
];

const PERSONAGENS = [
  { nome: "Sung Jinwoo", texto: "O protagonista. Começa como o caçador mais fraco do país, um rank E apelidado de \"o mais fraco da humanidade\", que arrisca a vida em dungeons para pagar o hospital da mãe. Depois de quase morrer numa masmorra dupla, passa a ver uma janela de jogo que só ele enxerga: o Sistema. A partir daí, sobe de nível sozinho, algo que nenhum outro caçador consegue." },
  { nome: "Sung Jinah", texto: "A irmã mais nova de Jinwoo, estudante do ensino médio. É o lado leve e cotidiano da série e o principal motivo para ele continuar vivo. As cenas em casa servem de respiro entre as batalhas e lembram que, por trás do poder, Jinwoo ainda é um irmão mais velho preocupado." },
  { nome: "Yoo Jinho", texto: "Herdeiro de uma família rica, dono de um rank D e de um coração enorme. Depois de ser salvo por Jinwoo, insiste em chamá-lo de \"hyung-nim\" (irmão mais velho) e vira seu parceiro mais fiel. É o alívio cômico mais querido do anime." },
  { nome: "Cha Hae-in", texto: "Caçadora rank S e vice-líder da Guilda dos Caçadores. Enxerga a mana das pessoas como um cheiro, e quase todos os caçadores cheiram mal para ela, menos Jinwoo. Excelente espadachim, ganha mais espaço na segunda temporada." },
  { nome: "Go Gunhee", texto: "Presidente da Associação de Caçadores da Coreia. Veterano de rank S, é uma figura paternal que percebe cedo que Jinwoo esconde algo grande, mas prefere confiar nele a pressioná-lo." },
  { nome: "Woo Jinchul", texto: "Chefe da equipe de fiscalização da Associação. Sério e correto, investiga a mudança de rank de Jinwoo e acaba virando um aliado respeitoso." },
  { nome: "Choi Jong-in e Baek Yoonho", texto: "Dois dos caçadores rank S mais famosos do país: Choi lidera a Guilda dos Caçadores com magia de fogo, e Baek comanda a Guilda Tigre Branco com transformação em fera. Representam a elite que Jinwoo um dia vai deixar para trás." },
  { nome: "Os soldados das sombras", texto: "Com a habilidade de extrair sombras, Jinwoo transforma inimigos derrotados em soldados leais. Os mais marcantes são Igris, o cavaleiro de pluma vermelha, Tank, o urso, Iron, o tanque de guerra humano, e Beru, a formiga, que chega com força total na reta final da segunda temporada." },
];

const TEMPORADAS = [
  { t: "1ª temporada", periodo: "7 de janeiro a 31 de março de 2024", ep: "12 episódios", musica: "Abertura \"LEveL\" (SawanoHiroyuki[nZk] e TOMORROW X TOGETHER) e encerramento \"request\" (krage)", resumo: "Do rank E ao despertar do Sistema: a masmorra dupla, as missões diárias, a dungeon instantânea e a mudança de classe." },
  { t: "Filme ReAwakening", periodo: "29 de novembro de 2024 no Japão", ep: "Compilação + 2 episódios da T2", musica: "Exibido também nos cinemas do Brasil e de outros países", resumo: "Resumo da T1 com os dois primeiros episódios da segunda temporada em pré-estreia." },
  { t: "2ª temporada — Arise from the Shadow", periodo: "5 de janeiro a 30 de março de 2025", ep: "13 episódios", musica: "Abertura \"ReawakeR\" (LiSA feat. Felix do Stray Kids) e encerramento \"UN-APEX\" (TK from Ling tosite sigure)", resumo: "Jinwoo como Monarca das Sombras, o castelo do demônio, o ataque à ilha de Jeju e a chegada de Beru." },
  { t: "Próximos passos", periodo: "Sem data confirmada", ep: "T3 e filme Beyond the System", musica: "Anúncios de junho e julho de 2026", resumo: "A D&C Media confirmou a terceira temporada em produção, com previsão entre 2027 e 2028; Aniplex e Crunchyroll anunciaram o filme Beyond the System, que continua a história após a T2." },
];

const FAQ = [
  { q: "Quantas temporadas Solo Leveling tem?", a: "Duas exibidas: a primeira em 2024 (12 episódios) e Arise from the Shadow em 2025 (13 episódios). A terceira foi confirmada em junho de 2026." },
  { q: "Já tem data para a 3ª temporada?", a: "Não. A D&C Media confirmou que está em produção e projetou o lançamento entre 2027 e 2028, sem data oficial." },
  { q: "O que é Solo Leveling: Beyond the System?", a: "Um filme anunciado por Aniplex e Crunchyroll em julho de 2026, que continua a história depois da segunda temporada. Ainda não tem data." },
  { q: "Onde assistir no Brasil?", a: "Na Crunchyroll, com legendas e dublagem em português." },
  { q: "Qual estúdio faz o anime?", a: "A A-1 Pictures, com direção de Shunsuke Nakashige e trilha de Hiroyuki Sawano." },
  { q: "Preciso ler o manhwa antes?", a: "Não. O anime começa do zero e é uma ótima porta de entrada; o manhwa serve para quem quer seguir adiante." },
];

const SoloLevelingAnimeGuia2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />21 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="21 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de um jovem de cabelo preto e casaco escuro caminhando entre ruínas, com três soldados das sombras gigantes de olhos roxos atrás dele e um portal brilhando ao fundo"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no universo da série. Não é arte oficial do anime.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          Poucos animes recentes chegaram com tanta expectativa e entregaram tanto quanto <strong>Solo Leveling</strong>.
          A adaptação da A-1 Pictures transformou Sung Jinwoo, o caçador mais fraco do mundo, num fenômeno global e
          levou o prêmio de Anime do Ano no Crunchyroll Anime Awards 2025. Agora, com a terceira temporada confirmada e
          um novo filme anunciado, é a hora certa para entender a série inteira. Neste guia você encontra os
          personagens, as temporadas, os temas, a música e tudo o que já foi anunciado, sem spoilers dos grandes
          acontecimentos.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />De web novel coreana a anime japonês</h2>
        <p>
          Solo Leveling nasceu na Coreia do Sul como web novel escrita por <strong>Chugong</strong>, publicada na
          plataforma KakaoPage a partir de 2016. O sucesso foi tão grande que a história ganhou uma versão em manhwa, o
          quadrinho coreano em formato vertical, com arte de <strong>DUBU (Jang Sung-rak)</strong> e do Redice Studio.
          O manhwa foi publicado entre 2018 e 2021 e virou referência pela arte: cada luta parece uma pintura digital,
          com sombras densas e brilhos azuis e roxos que se tornaram a identidade visual da franquia. DUBU faleceu em
          2022, e o anime acabou funcionando também como uma homenagem ao seu trabalho.
        </p>
        <p>
          A adaptação animada ficou com a <strong>A-1 Pictures</strong>, estúdio japonês da Aniplex conhecido por obras
          como Sword Art Online e Kaguya-sama. A direção é de <strong>Shunsuke Nakashige</strong>, o roteiro é de
          Noboru Kimura, o design de personagens é de Tomoko Sudo e a trilha sonora é de <strong>Hiroyuki Sawano</strong>,
          o compositor de Attack on Titan. É uma equipe de peso, e isso aparece na tela desde o primeiro episódio.
        </p>

        <h2 className="flex items-center gap-2"><Globe className="h-6 w-6 text-otaku" />A premissa: portões, caçadores e um Sistema secreto</h2>
        <p>
          Dez anos antes do início da história, portais misteriosos chamados <strong>Portões</strong> começaram a surgir
          pelo mundo, ligando a Terra a masmorras cheias de monstros. Ao mesmo tempo, algumas pessoas despertaram poderes
          e passaram a ser chamadas de <strong>caçadores</strong>. Eles são classificados em ranks de E a S, e esse rank,
          em regra, nunca muda: quem desperta fraco continua fraco para sempre.
        </p>
        <p>
          Sung Jinwoo é um rank E. Ele entra em masmorras perigosas só porque precisa do dinheiro, e quase sempre sai
          machucado. Tudo muda quando um grupo de caçadores encontra uma masmorra dupla escondida dentro de uma dungeon
          comum. Depois de um encontro aterrorizante com estátuas que seguem regras sinistras, Jinwoo acorda num hospital
          e vê uma janela flutuante, como a de um videogame, avisando que ele agora é um <strong>Jogador</strong>. O
          Sistema lhe dá missões diárias, pontos de atributo e recompensas, e o mais importante: permite que ele suba de
          nível. É a única pessoa do mundo capaz disso.
        </p>
        <p>
          A graça da série está em acompanhar esse crescimento. No começo, cada flexão da missão diária é sofrida. Aos
          poucos, Jinwoo fica mais rápido, mais forte e mais frio, até que os caçadores de elite começam a perceber que
          tem algo muito estranho naquele rapaz que todo mundo chamava de fraco.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-otaku" />Personagens principais</h2>
        <p>
          Solo Leveling é, como o nome diz, a história de um protagonista que luta sozinho. Mesmo assim, o elenco ao redor
          dele é o que dá peso emocional às vitórias, seja a família que ele protege, sejam os caçadores que tentam
          entender o que está acontecendo com ele.
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-2 my-8">
        {PERSONAGENS.map((p) => (
          <div key={p.nome} className="rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/10 to-card/50 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{p.nome}</h3>
            <p className="text-sm leading-relaxed text-foreground/90">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          Repare como o anime usa os coadjuvantes para medir o crescimento de Jinwoo. No início, todos o tratam com pena
          ou desprezo. Na segunda temporada, os mesmos caçadores que o ignoravam passam a observá-lo com respeito e até
          medo. Essa mudança de olhar é uma das formas mais satisfatórias que a série encontra para mostrar o quanto o
          protagonista mudou.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />As temporadas e os filmes</h2>
        <p>
          A primeira temporada teve exibições especiais antes da estreia oficial e chegou ao público em janeiro de 2024.
          Logo após o fim, a segunda temporada foi anunciada, e o lançamento em cinema serviu como ponte entre as duas.
          Veja a linha do tempo da franquia animada:
        </p>
      </div>

      <div className="not-prose grid gap-4 my-8">
        {TEMPORADAS.map((s) => (
          <div key={s.t} className="rounded-xl border border-otaku/30 bg-card/60 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{s.t}</h3>
            <ul className="text-sm space-y-1 text-foreground/90">
              <li><strong>Período:</strong> {s.periodo}</li>
              <li><strong>Formato:</strong> {s.ep}</li>
              <li><strong>Destaques:</strong> {s.musica}</li>
              <li><strong>Resumo:</strong> {s.resumo}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A <strong>primeira temporada</strong> é uma história de origem. Ela gasta tempo mostrando o quanto Jinwoo é
          fraco, para que cada nível conquistado depois tenha impacto. A masmorra dupla, nos primeiros episódios, é um
          dos começos mais tensos de qualquer anime recente, com clima de terror e regras misteriosas. A temporada termina
          com a chamada mudança de classe, o momento em que Jinwoo descobre que tipo de poder realmente carrega.
        </p>
        <p>
          A <strong>segunda temporada</strong>, chamada <em>Arise from the Shadow</em>, assume de vez o lado épico. Jinwoo
          já não precisa provar que é forte; agora ele precisa esconder o quanto é forte. Ele reavalia oficialmente o
          próprio rank, entra em batalhas de escala muito maior e passa a comandar um exército de sombras. A reta final,
          com a operação na ilha de Jeju, é o ponto alto da animação da A-1 Pictures até aqui.
        </p>
        <p>
          Sobre o futuro, há duas novidades oficiais em 2026. Em junho, a editora coreana <strong>D&amp;C Media</strong>,
          dona dos direitos da obra, confirmou em relatório a investidores que a <strong>terceira temporada está em
          produção</strong>, com previsão de lançamento entre 2027 e 2028. Em julho, a Aniplex e a Crunchyroll anunciaram
          o filme <strong>Solo Leveling: Beyond the System</strong>, que continua a história depois da segunda temporada.
          Ainda não há data para nenhum dos dois, e também não está totalmente claro como filme e temporada vão se
          encaixar, então vale desconfiar de datas que circulam sem fonte oficial.
        </p>

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-otaku" />Os temas: por que a série funciona</h2>
        <p>
          O primeiro tema é a <strong>superação solitária</strong>. Jinwoo não tem mentor, não tem equipe fixa e não
          herda um poder pronto. Ele treina todos os dias, mesmo quando ninguém está olhando. É uma fantasia muito
          próxima da vida real de quem estuda ou trabalha sozinho para mudar de vida, e talvez por isso a série converse
          tanto com o público adulto.
        </p>
        <p>
          O segundo é a <strong>desigualdade entre os ranks</strong>. O mundo de Solo Leveling é dividido por um número
          que você recebe ao despertar e não pode mudar. Caçadores fracos fazem o trabalho perigoso e mal pago, enquanto
          as guildas de elite ficam com a fama e o dinheiro. O Sistema de Jinwoo é, no fundo, uma resposta a essa
          injustiça: a única pessoa que pode quebrar a regra é justamente aquela que mais sofreu com ela.
        </p>
        <p>
          O terceiro é a <strong>família</strong>. Toda decisão arriscada de Jinwoo tem a mãe internada e a irmã em casa
          como motivo. Por mais frio que ele fique, a série nunca deixa a gente esquecer por quem ele luta.
        </p>
        <p>
          Por fim, há o tema do <strong>poder e do isolamento</strong>. Quanto mais forte Jinwoo fica, mais distante ele se
          sente das pessoas comuns. A série não romantiza isso por completo: há um preço emocional em virar alguém que
          ninguém consegue acompanhar, e essa tensão deve ficar ainda mais forte nos próximos capítulos animados.
        </p>

        <h2 className="flex items-center gap-2"><Music className="h-6 w-6 text-otaku" />Música e dublagem</h2>
        <p>
          A trilha de Hiroyuki Sawano é parte essencial da experiência. As faixas épicas, com coro e guitarras pesadas,
          entram nos momentos de virada e transformam cenas simples em momentos de arrepio. As aberturas também chamaram
          atenção pelas parcerias com artistas do K-pop, unindo de novo as origens coreana e japonesa da série: a
          primeira contou com o TOMORROW X TOGETHER, e a segunda com Felix, do Stray Kids, ao lado da cantora LiSA.
        </p>
        <p>
          No Brasil, o anime está na <strong>Crunchyroll</strong>, com legendas e dublagem em português. A versão dublada
          ganhou bastante popularidade, e muita gente que nunca tinha assistido a um anime começou por ela.
        </p>

        <h2 className="flex items-center gap-2"><ListChecks className="h-6 w-6 text-otaku" />O universo além do anime</h2>
        <p>
          A franquia vai muito além das duas temporadas. O manhwa original está completo e é o caminho natural para quem
          quer saber o que vem depois. Existe também a continuação <strong>Solo Leveling: Ragnarok</strong>, focada na
          próxima geração, e o jogo <strong>Solo Leveling: Arise</strong>, da Netmarble, lançado em 2024 para celulares e
          PC. A Netflix ainda anunciou uma série em live-action produzida na Coreia do Sul. Se você quer um panorama mais
          antigo da obra, também temos um guia completo de Solo Leveling publicado em março aqui no site.
        </p>
        <p>
          Para quem vai começar agora, a ordem é simples: primeira temporada, depois a segunda. O filme ReAwakening é
          opcional, já que é uma compilação com episódios que depois foram exibidos na série. Assim você fica pronto
          para quando a terceira temporada e o filme Beyond the System chegarem.
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
          Resumindo: Solo Leveling é a história de alguém que todo mundo subestimou e que, sozinho, virou a maior força
          do seu mundo. Com duas temporadas excelentes, uma terceira em produção e um filme a caminho, nunca foi tão bom
          momento para entrar nos Portões.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          O que me impressiona em Solo Leveling é como uma premissa tão simples, um cara que sobe de nível sozinho,
          consegue segurar tanta tensão. O segredo está no ritmo: a primeira temporada tem paciência para mostrar o
          Jinwoo fraco, e por isso cada vitória depois pesa de verdade.
        </p>
        <p>
          A segunda temporada é espetáculo puro, e a música do Sawano faz metade do trabalho. Minha única ressalva é que
          os coadjuvantes ainda ficam pequenos perto do protagonista. Espero que a terceira temporada dê mais espaço a
          eles, porque a história que vem pela frente pede isso.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "Solo Leveling Season 3 Is Officially Confirmed", url: "https://gamerant.com/solo-leveling-season-3-officially-confirmed-dc-media/", publisher: "Game Rant", accessedAt: "Outubro 2026" },
          { title: "Solo Leveling: Beyond the System Anime Movie Announced", url: "https://www.crunchyroll.com/news/announcements/2026/7/3/solo-leveling-beyond-the-system-anime-movie-announced-by-aniplex-and-crunchyroll", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Solo Leveling Series Gets Beyond the System Anime Film", url: "https://www.animenewsnetwork.com/news/2026-07-03/solo-leveling-series-gets-solo-leveling-beyond-the-system-anime-film/.239268", publisher: "Anime News Network", accessedAt: "Outubro 2026" },
          { title: "Solo Leveling season 3 is actively being worked on", url: "https://www.gamesradar.com/entertainment/anime-shows/solo-leveling-season-3-is-actively-being-worked-on-crunchyroll-president-says-and-its-creators-will-hopefully-announce-something-soon/", publisher: "GamesRadar+", accessedAt: "Outubro 2026" },
          { title: "Solo Leveling — Crunchyroll", url: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling", publisher: "Crunchyroll", accessedAt: "Outubro 2026" },
          { title: "Solo Leveling (TV series) — Wikipedia", url: "https://en.wikipedia.org/wiki/Solo_Leveling_(TV_series)", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default SoloLevelingAnimeGuia2026;
