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
import { Clock, User, Calendar, BookOpen, Users, Tv, FlaskConical, HelpCircle, Sparkles, Globe, Swords } from "lucide-react";
import heroImg from "@/assets/release-that-witch-guia-2026.webp";

const SLUG = "release-that-witch-manhua-anime-guia-2026";
const TITLE = "Release That Witch: Guia do Manhua e do Anime, Capítulos, Roland, Anna e a Ciência Contra a Magia";

const FICHA = [
  { label: "Título original", value: "Fàngkāi Nàge Nǚwū (放开那个女巫)" },
  { label: "Autor", value: "Er Mu (二目)" },
  { label: "Web novel", value: "Qidian, de 30 de março de 2016 a 4 de junho de 2019; 1.498 capítulos em 5 volumes; tradução oficial em inglês completa no Webnovel" },
  { label: "Manhua", value: "Adaptação chinesa com roteiro de Er Mu; publicada no Tencent AC.QQ e no Bilibili Manhua; concluída em 2025 com 695 capítulos" },
  { label: "Anime (donghua)", value: "8 episódios de cerca de 26 minutos, de 2 de março a 20 de abril de 2026; estúdio Thundray; direção de Meng Sun" },
  { label: "Produção", value: "Tencent Animation & Comics e Yuewen Animation & Comics" },
  { label: "Gêneros", value: "Fantasia, isekai, ação, construção de reino, ciência e engenharia, política e romance leve" },
];

const PERSONAGENS = [
  { nome: "Roland Wimbledon (Cheng Yan)", texto: "Engenheiro do nosso mundo que morre de repente e acorda no corpo de Roland, o quarto príncipe do Reino de Graycastle, conhecido como mimado e inútil. Mandado para a Cidade Fronteiriça (Border Town), ele usa o que aprendeu na faculdade e no trabalho para transformar o lugar." },
  { nome: "Anna", texto: "A primeira bruxa que Roland salva, logo no início, de uma execução pública. Calma, curiosa e muito inteligente, ela controla um fogo verde. Aprende ciência mais rápido que qualquer um e vira a parceira mais importante do príncipe." },
  { nome: "Nightingale", texto: "Bruxa da Associação de Cooperação das Bruxas que consegue ficar invisível e atravessar a névoa. Desconfiada no começo, torna-se guarda-costas e confidente de Roland." },
  { nome: "Nana Pine", texto: "Jovem bruxa filha de um nobre local, com o poder de curar ferimentos. Sua habilidade muda o jeito como a cidade lida com feridos." },
  { nome: "Carter Lannis", texto: "Cavaleiro-chefe de Roland. Leal, orgulhoso e um pouco vaidoso, é o primeiro a ver de perto que o príncipe mudou." },
  { nome: "Barov", texto: "Assistente do ministro e administrador da cidade. Responsável pelas contas e pela burocracia, sofre com as ideias novas do chefe." },
];

const APRENDIZADO = [
  { t: "Física e energia", d: "A máquina a vapor é o centro do plano de Roland. A obra mostra, de forma simples, como calor vira movimento e por que isso mudou a produção na Revolução Industrial." },
  { t: "Química", d: "Pólvora, cimento e outros materiais aparecem como etapas: primeiro descobrir a matéria-prima, depois purificar, depois produzir em quantidade." },
  { t: "Metalurgia", d: "Fazer canos de canhão e peças exige ferro de boa qualidade. A história lembra que tecnologia depende de material, e material depende de minas, fornos e técnica." },
  { t: "Saúde e saneamento", d: "Higiene, água limpa e cuidado com feridos mostram como medidas simples reduzem doenças e mortes." },
  { t: "Educação", d: "Roland percebe que não adianta uma máquina se ninguém sabe operá-la. Ensinar a ler, contar e entender ciência é parte do plano." },
  { t: "Economia e gestão", d: "Salário, incentivo, divisão de tarefas e planejamento aparecem o tempo todo. É praticamente uma aula de como organizar uma cidade." },
];

const FAQ = [
  { q: "Release That Witch é manhua ou manhwa?", a: "É um manhua, ou seja, um quadrinho chinês. Manhwa é o quadrinho coreano e mangá é o japonês. A obra original é uma web novel chinesa de Er Mu." },
  { q: "Quantos capítulos tem Release That Witch?", a: "A web novel tem 1.498 capítulos (2016 a 2019). O manhua foi concluído em 2025 com 695 capítulos." },
  { q: "Quantos episódios tem o anime?", a: "A 1ª temporada do donghua tem 8 episódios, exibidos de 2 de março a 20 de abril de 2026." },
  { q: "Quanto da história o anime adaptou?", a: "Só o começo: a chegada de Roland à Cidade Fronteiriça e os primeiros passos com as bruxas. Não há número oficial de capítulos adaptados, então não vamos chutar." },
  { q: "Quem são os protagonistas?", a: "Roland Wimbledon, que na verdade é o engenheiro Cheng Yan, e a bruxa Anna, a primeira que ele salva." },
  { q: "Onde assistir Release That Witch?", a: "Na Crunchyroll, que anunciou a exibição mundial, exceto Japão, China e Coreia. Confira no app se há legenda em português na sua região." },
  { q: "Vai ter 2ª temporada?", a: "Até a data deste artigo, não encontramos anúncio oficial de uma segunda temporada." },
];

const ReleaseThatWitch2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Novembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="4 de Novembro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1600} height={912}
            alt="Ilustração de um príncipe de cabelo prateado numa oficina medieval com máquina a vapor e projetos, ao lado de uma bruxa de cabelo castanho segurando uma chama verde"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada no universo da série. Não é arte oficial do anime.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          E se, em vez de virar um herói com espada, o protagonista de um isekai chegasse a outro mundo com o diploma de
          engenharia? Essa é a ideia de <strong>Release That Witch</strong>, ou <strong>Fàngkāi Nàge Nǚwū</strong> no
          original chinês. Neste guia você descobre se a obra é manhua ou manhwa, quantos capítulos existem, quanto o anime
          adaptou, quem são Roland e Anna e o que dá para aprender de verdade com a história, sem spoilers dos grandes
          acontecimentos.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />Manhua ou manhwa? A origem da obra</h2>
        <p>
          A confusão é comum, então vamos direto ao ponto: <strong>Release That Witch é um manhua</strong>. A palavra manhua
          é usada para quadrinhos chineses. <em>Manhwa</em> é o nome dos quadrinhos coreanos, e <em>mangá</em>, dos
          japoneses. A diferença não é só de país: o manhua costuma sair em capítulos coloridos e verticais, pensados para
          leitura no celular, e muitas vezes nasce de uma web novel, como neste caso.
        </p>
        <p>
          Tudo começou com a <strong>web novel</strong> de <strong>Er Mu</strong> (二目), publicada na plataforma chinesa
          Qidian. O primeiro capítulo saiu em 30 de março de 2016 e o último em 4 de junho de 2019. A história está completa,
          com <strong>1.498 capítulos divididos em 5 volumes</strong>, e ganhou tradução oficial em inglês, também concluída,
          no site Webnovel. Existe até uma versão em audiolivro em inglês no app Pocket FM, com alguns nomes alterados.
        </p>
        <p>
          O <strong>manhua</strong>, com roteiro do próprio Er Mu, começou a ser publicado na China em 2017 e 2018 e saiu
          nas plataformas Tencent AC.QQ e Bilibili Manhua. A arte é creditada a equipes diferentes conforme a fonte (a wiki
          dos fãs cita Dr Woodman; o MyAnimeList cita o estúdio Zhi Hua Wenhua). A adaptação foi <strong>concluída em
          março de 2025 com 695 capítulos</strong>. Em inglês, a tradução oficial também está no Webnovel.
        </p>

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />O anime: 8 episódios em 2026</h2>
        <p>
          O anime é um <strong>donghua</strong>, nome dado às animações chinesas. Depois de trailers em 2021 e 2022, ele
          finalmente estreou em <strong>2 de março de 2026</strong>, com episódios semanais às segundas-feiras até
          <strong> 20 de abril de 2026</strong>, num total de <strong>8 episódios</strong> de cerca de 26 minutos. A
          animação é do estúdio <strong>Thundray</strong>, com direção de Meng Sun, e produção da Tencent Animation &amp;
          Comics e da Yuewen Animation &amp; Comics.
        </p>
        <p>
          A Crunchyroll anunciou a série em novembro de 2025, antes da exibição na Anime Festival Asia de Singapura, e passou
          a transmiti-la no mundo todo, exceto Japão, China e Coreia. Um detalhe chama atenção logo nos primeiros minutos: o
          visual é mais próximo da fantasia ocidental, com castelos, armaduras e cidades de pedra, do que do estilo clássico
          de anime japonês.
        </p>
        <p>
          <strong>Quanto da história o anime adaptou?</strong> Pouco, comparado ao todo. Os 8 episódios cobrem o começo: a
          chegada de Roland à Cidade Fronteiriça, o resgate de Anna e Nana, os primeiros projetos e a preparação contra os
          perigos da região. Não existe um número oficial de capítulos adaptados, e as estimativas de fãs variam, então
          preferimos não inventar. O que dá para afirmar é que quem terminou o anime tem centenas de capítulos do manhua e
          mais de mil da novel pela frente.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-otaku" />A história: ciência como superpoder</h2>
        <p>
          O engenheiro <strong>Cheng Yan</strong> morre de forma inesperada e acorda como <strong>Roland Wimbledon</strong>,
          o quarto príncipe do <strong>Reino de Graycastle</strong>. O mundo lembra a Europa medieval, mas com uma diferença:
          as bruxas existem de verdade e têm poderes reais. A Igreja as trata como servas do mal, e o povo tem medo delas.
        </p>
        <p>
          O antigo Roland tinha fama de príncipe mimado e sem futuro, e foi enviado para governar a
          <strong> Cidade Fronteiriça</strong>, um lugar pobre e perigoso. Enquanto isso, o rei organizou uma disputa: o
          filho que governar melhor herdará o trono. Os irmãos de Roland, como Gerard, Timothy e Garcia, entram na
          competição com muito mais recursos.
        </p>
        <p>
          O que muda tudo é o olhar do engenheiro. Ao ver Anna usar o fogo, Cheng Yan não pensa em bruxaria; pensa em
          <strong> energia</strong>. Se o fogo dela pode derreter metal, pode ajudar a fabricar peças. Se outra bruxa cura,
          pode salvar trabalhadores. A partir daí, ele decide proteger as bruxas e usar os poderes delas como força
          produtiva, misturando magia com o conhecimento científico do nosso mundo.
        </p>
        <p>
          Essa é a <strong>quebra de padrão</strong> em relação a muitos isekais. O protagonista não é o mais forte nas lutas
          e não recebe uma tela de habilidades. Seu poder é saber como as coisas funcionam e ter paciência para construir
          etapa por etapa. Cada vitória depende de planejamento, matéria-prima e pessoas treinadas, e não de um golpe
          especial.
        </p>

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-otaku" />Protagonistas e personagens principais</h2>
        <p>
          A dupla central é <strong>Roland (Cheng Yan)</strong> e <strong>Anna</strong>. Em volta deles cresce um grupo de
          bruxas e aliados que vira o coração da cidade.
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
          A relação entre Roland e Anna é um dos pontos mais elogiados. Ela não é só a "bruxa salva": é aluna dedicada,
          questiona, testa e muitas vezes entende as aulas de ciência melhor que os nobres. O romance existe, mas cresce
          devagar e nunca toma o lugar da história principal. Outras bruxas que ganham destaque ao longo da obra incluem
          Wendy, Lightning, Echo, Leaf, Scroll e Agatha, além da irmã de Roland, Tilly Wimbledon.
        </p>

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-otaku" />Gêneros: o que esperar</h2>
        <ul>
          <li><strong>Fantasia e isekai:</strong> um homem moderno renasce no corpo de um príncipe de outro mundo, com bruxas, Igreja e reinos rivais.</li>
          <li><strong>Construção de reino:</strong> boa parte da graça está em ver uma cidade pobre virar centro de produção.</li>
          <li><strong>Ciência e engenharia:</strong> máquina a vapor, armas de fogo, cimento e indústria aparecem como etapas lógicas.</li>
          <li><strong>Ação e guerra:</strong> há batalhas contra monstros e exércitos, decididas mais por estratégia e tecnologia do que por força bruta.</li>
          <li><strong>Política e intriga:</strong> a disputa pelo trono e o conflito com a Igreja geram tramas de bastidores.</li>
          <li><strong>Romance leve e comédia:</strong> momentos de humor com a burocracia de Barov e a vaidade de Carter equilibram o tom.</li>
        </ul>
        <p>
          A classificação do anime é para maiores de 13 anos. Há violência de guerra e temas como perseguição religiosa,
          mas sem o fanservice pesado comum em outros isekais.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><FlaskConical className="h-6 w-6 text-otaku" />O que dá para aprender lendo e assistindo</h2>
        <p>
          Esse é o diferencial que faz muita gente recomendar Release That Witch para estudantes. É ficção, e a magia resolve
          parte dos problemas, mas o raciocínio por trás dos projetos de Roland é real. Veja os principais temas:
        </p>
      </div>

      <div className="not-prose grid gap-4 md:grid-cols-3 my-8">
        {APRENDIZADO.map((a) => (
          <div key={a.t} className="rounded-xl border border-otaku/30 bg-card/60 p-5">
            <h3 className="font-display text-base font-bold text-otaku mb-2">{a.t}</h3>
            <p className="text-sm leading-relaxed text-foreground/90">{a.d}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A lição mais valiosa, porém, é sobre <strong>método</strong>. Roland não "inventa" nada do nada: ele observa um
          problema, pensa no que precisa, procura os materiais, testa, erra e melhora. Esse é o mesmo caminho que a
          engenharia de verdade segue. A obra também mostra como a história humana avançou: a Revolução Industrial não foi
          uma única invenção, mas uma cadeia de ferro, carvão, máquinas, transporte e trabalhadores qualificados.
        </p>
        <p>
          Há ainda lições de convivência. A perseguição às bruxas lembra episódios reais de caça às bruxas na Europa, e a
          forma como Roland as integra à cidade é uma reflexão sobre preconceito, medo do diferente e o valor de dar
          oportunidade às pessoas. Vale um aviso: algumas explicações técnicas são simplificadas e a magia "pula" etapas
          difíceis. Use a obra como porta de entrada para a curiosidade, não como livro didático.
        </p>

        <h2 className="flex items-center gap-2"><Globe className="h-6 w-6 text-otaku" />Novel, manhua ou anime: por onde começar?</h2>
        <p>
          Se você quer a história <strong>completa</strong>, a web novel é a única que vai até o fim do enredo pensado pelo
          autor, com os 1.498 capítulos. É longa, mas tem mais detalhes técnicos e mais tempo para cada personagem.
        </p>
        <p>
          O <strong>manhua</strong> é a opção visual e mais rápida. Ele também está concluído, mas avaliações de leitores no
          MyAnimeList apontam que o ritmo cai na parte do meio. Muitos fãs recomendam ler os primeiros capítulos do manhua e
          depois migrar para a novel.
        </p>
        <p>
          O <strong>anime</strong> é a melhor porta de entrada para quem quer conhecer o clima da história em poucas horas.
          Os 8 episódios foram bem recebidos: no MyAnimeList, a série tem nota média acima de 8. Como ele cobre só o começo,
          funciona quase como um "trailer longo" da obra.
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
          O anime está na <strong>Crunchyroll</strong>, que o exibe no mundo todo, exceto Japão, China e Coreia. A
          disponibilidade de legendas varia por região: há registro de legenda em espanhol na América Latina, mas confira no
          app se a versão em português está disponível para você.
        </p>
        <p>
          Para ler, a novel e o manhua têm tradução oficial em inglês no <strong>Webnovel</strong>. Não encontramos edição
          oficial em português até a data deste artigo; se surgir, atualizaremos aqui. Prefira sempre plataformas
          licenciadas, que remuneram autor e artistas.
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
          Resumindo: Release That Witch é um manhua chinês, baseado numa web novel de 1.498 capítulos, que ganhou em 2026 um
          anime de 8 episódios. É para quem gosta de ver ideias virarem obras, cidades crescerem e personagens inteligentes
          resolverem problemas com a cabeça.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          O que me conquistou foi ver um isekai em que estudar vale mais que subir de nível. Roland não tem espada lendária;
          tem caderno, régua e paciência. Cada vez que um projeto dá certo, a sensação é de conquista de verdade, porque
          acompanhamos todo o caminho até ali.
        </p>
        <p>
          Minha sugestão: comece pelo anime, que é curto e bonito. Se gostar, vá direto para a novel, que é onde a história
          tem mais fôlego. E, se você tem filhos ou alunos curiosos, esta é uma ótima desculpa para conversar sobre máquina a
          vapor e Revolução Industrial.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "Release that Witch", url: "https://en.wikipedia.org/wiki/Release_that_Witch", publisher: "Wikipedia", accessedAt: "Novembro 2026" },
          { title: "Fangkai Nage Nuwu (Release that Witch) — ONA 2026", url: "https://myanimelist.net/anime/62927/Fangkai_Nage_Nuwu", publisher: "MyAnimeList", accessedAt: "Novembro 2026" },
          { title: "Fangkai Nage Nuwu (Release That Witch) — Manhua", url: "https://myanimelist.net/manga/136488/Fangkai_Nage_Nuwu", publisher: "MyAnimeList", accessedAt: "Novembro 2026" },
          { title: "Webnovel", url: "https://releasethatwitch.fandom.com/wiki/Webnovel", publisher: "Release that Witch Wiki (Fandom)", accessedAt: "Novembro 2026" },
          { title: "Media", url: "https://releasethatwitch.fandom.com/wiki/Media", publisher: "Release that Witch Wiki (Fandom)", accessedAt: "Novembro 2026" },
          { title: "Crunchyroll to Stream Release That Witch Donghua Worldwide", url: "https://in.ign.com/release-that-witch/246605/news/crunchyroll-to-stream-release-that-witch-donghua-worldwide", publisher: "IGN", accessedAt: "Novembro 2026" },
          { title: "Release that Witch Donghua Series is Now Streaming on Crunchyroll", url: "https://finalweapon.net/2026/03/02/release-that-witch-donghua-series-streaming-episodes-crunchyroll/", publisher: "Final Weapon", accessedAt: "Novembro 2026" },
          { title: "Release that Witch: donghua se estrena en Crunchyroll", url: "https://www.anmtvla.com/2026/03/release-that-witch-donghua-se-estrena.html", publisher: "ANMTV", accessedAt: "Novembro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default ReleaseThatWitch2026;
