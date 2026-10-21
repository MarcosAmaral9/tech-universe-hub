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
import { Clock, User, Calendar, BookOpen, Eye, Users, Tv, Swords, HelpCircle, ListChecks } from "lucide-react";
import heroImg from "@/assets/tensei-kizoku-kantei-skill-guia-2026.webp";

const SLUG = "tensei-kizoku-kantei-skill-guia-2026";
const TITLE = "Como um Aristocrata Reencarnado, Usarei Minha Habilidade de Avaliação para Ascender no Mundo: Guia Completo do Anime";

const FICHA = [
  { label: "Título original", value: "Tensei Kizoku, Kantei Skill de Nariagaru" },
  { label: "Título em inglês", value: "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World" },
  { label: "Autor", value: "Miraijin A (web novel no Shōsetsuka ni Narō desde outubro de 2019)" },
  { label: "Light novel", value: "Ilustrações de jimmy, Kodansha, desde julho de 2020 — 9 volumes até junho de 2026" },
  { label: "Mangá", value: "Arte de Natsumi Inoue, Magazine Pocket (Kodansha), desde junho de 2020 — 21 volumes até junho de 2026" },
  { label: "Anime (T1 e T2)", value: "Studio MOTHER, direção de Takao Katō — 12 + 12 episódios em 2024" },
  { label: "Anime (T3)", value: "GeyeG Pictures, estreia em 27 de setembro de 2026" },
  { label: "Gêneros", value: "Isekai, reencarnação, fantasia, estratégia política e militar" },
];

const PERSONAGENS = [
  { nome: "Ars Louvent", texto: "Um assalariado japonês que morre e renasce como herdeiro da Casa Louvent, senhores da pequena cidade de Lamberk. Ele não é o guerreiro mais forte nem o mago mais talentoso; seu poder é enxergar o talento escondido das pessoas. Calmo, gentil e calculista na medida certa, Ars se torna líder porque sabe exatamente quem colocar em cada função." },
  { nome: "Ritsu Muses", texto: "O primeiro vassalo de Ars. É um órfão do povo Marca, que sofre preconceito no reino. Ars enxerga nele um talento enorme para combate e liderança, e Ritsu responde com uma lealdade absoluta, chegando a comandar o exército da família." },
  { nome: "Charlotte Wraith", texto: "Órfã resgatada por Ars de um grupo de traficantes de escravos. Tem um talento mágico fora do comum e passa a liderar o pelotão de magos dos Louvent. Trata Ars como um irmão mais novo, com uma energia expansiva que equilibra a seriedade dele." },
  { nome: "Rosell Kischa", texto: "Um garoto do próprio território dos Louvent que nem imaginava ter dom para estratégia. Ars percebe seu potencial como tático, e Rosell, inseguro no início, cresce até se tornar o estrategista do exército." },
  { nome: "Lysia Plaid", texto: "A noiva de Ars, brilhante em política e diplomacia. Ars desconfia dela no começo porque sua Avaliação mostra uma ambição altíssima, o que poderia significar traição. Com o tempo, Lysia se apaixona de verdade e vira sua confidente mais próxima." },
  { nome: "Mireille Grangeon", texto: "Ex-nobre que vivia viajando, bebendo e gastando suas economias. Encontrada pelos Sombras, é recrutada como estrategista. Irreverente e genial, tem ótima química com Charlotte e um vínculo familiar com o lado inimigo que pesa na trama." },
  { nome: "Fahm", texto: "Líder do grupo de mercenários conhecido como Sombra. Parece e soa como uma garota e costuma se disfarçar de garçonete, mas é um rapaz. Usa magia de sombras para se ocultar e acaba virando vassalo de Ars." },
  { nome: "Raven Louvent", texto: "Pai de Ars e chefe da Casa Louvent, amado pela família e pelos súditos. Sua doença força Ars a assumir responsabilidades ainda criança, um ponto de virada emocional da primeira temporada." },
];

const TEMPORADAS = [
  { t: "1ª temporada", periodo: "7 de abril a 23 de junho de 2024", ep: "12 episódios", estudio: "Studio MOTHER", musica: "Abertura \"Blue Days\" (True) e encerramento \"Finally\" (Kana Hanazawa)" },
  { t: "2ª temporada", periodo: "29 de setembro a 22 de dezembro de 2024", ep: "12 episódios", estudio: "Studio MOTHER", musica: "Abertura \"Skillawake\" (PassCode) e encerramento \"Familiar\" (Yuki Tanaka)" },
  { t: "3ª temporada", periodo: "Estreou em 27 de setembro de 2026", ep: "Total não divulgado", estudio: "GeyeG Pictures", musica: "Abertura \"Still Water\" (Rico Sasaki) e encerramento \"Hibi o Koete\" (Akuruyo no Hitsuji)" },
];

const FAQ = [
  { q: "Qual é o nome original do anime?", a: "Tensei Kizoku, Kantei Skill de Nariagaru. Em inglês, As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World." },
  { q: "Quantas temporadas o anime tem?", a: "Três. A primeira e a segunda saíram em 2024, com 12 episódios cada, e a terceira estreou em 27 de setembro de 2026." },
  { q: "Qual estúdio faz o anime?", a: "As duas primeiras temporadas são do Studio MOTHER, com direção de Takao Katō. A terceira temporada é produzida pela GeyeG Pictures." },
  { q: "Onde assistir no Brasil?", a: "A Crunchyroll distribui a série fora do leste asiático, o que inclui o Brasil. Confira no aplicativo quais temporadas e idiomas estão disponíveis na sua conta." },
  { q: "Qual é o poder do protagonista?", a: "Ars tem a habilidade de Avaliação, que mostra o talento, as aptidões e até a ambição das pessoas. Ele a usa para recrutar vassalos e montar um território forte." },
  { q: "A obra tem edição oficial em português?", a: "Não encontramos edição brasileira oficial da light novel nem do mangá. As edições oficiais em inglês são da Kodansha USA." },
  { q: "O anime tem romance?", a: "Sim, mas como pano de fundo. A relação entre Ars e Lysia, que começa com desconfiança, é a principal linha romântica." },
];

const TenseiKizokuKanteiSkill2026 = () => {
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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />19 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="19 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img fetchPriority="high" loading="eager" decoding="async" src={heroImg} width={1376} height={768}
            alt="Ilustração de um jovem nobre de cabelo escuro caminhando com seus aliados por uma estrada de terra, acompanhados de um cavalo, com um cavaleiro de armadura, uma nobre de cabelo rosado, uma maga de chapéu verde, uma jovem ruiva e um rapaz encapuzado, diante de uma cidade medieval murada"
            className="w-full h-full object-cover" />
        </div>
        <figcaption className="text-xs text-muted-foreground mt-2">
          Ilustração editorial criada para este artigo, inspirada nos personagens da série. Não é arte oficial do anime.
        </figcaption>
      </figure>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          A maioria dos protagonistas de isekai renasce com uma espada lendária ou uma magia absurda. Ars Louvent renasce
          com algo bem mais discreto: a capacidade de olhar para alguém e saber do que essa pessoa é capaz. Em
          <em> Como um Aristocrata Reencarnado, Usarei Minha Habilidade de Avaliação para Ascender no Mundo</em>, o poder
          não está no braço do herói, e sim nas pessoas que ele escolhe. Neste guia você conhece a origem da obra, os
          personagens principais, as três temporadas, os temas e onde assistir no Brasil, sem spoilers dos grandes
          acontecimentos.
        </p>

        <h2 className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-otaku" />De onde vem a história</h2>
        <p>
          A obra nasceu como web novel escrita por <strong>Miraijin A</strong> no site Shōsetsuka ni Narō, a mesma
          plataforma que revelou boa parte dos isekais famosos. A publicação online começou em 31 de outubro de 2019 e
          fez sucesso rápido o bastante para a Kodansha transformá-la em light novel, com ilustrações de
          <strong> jimmy</strong>, a partir de julho de 2020. Até junho de 2026, a light novel somava nove volumes.
        </p>
        <p>
          Quase ao mesmo tempo, em junho de 2020, começou o mangá desenhado por <strong>Natsumi Inoue</strong>, publicado
          no aplicativo Magazine Pocket. O mangá anda em ritmo forte e chegou a 21 volumes encadernados até junho de 2026.
          Segundo a própria Kodansha, a série já passou de 130 milhões de visualizações no site original e de 5 milhões de
          cópias somando romance e mangá, um número que explica por que o anime ganhou continuações tão rápido.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2"><Eye className="h-6 w-6 text-otaku" />A premissa: um olho para talentos</h2>
        <p>
          Um assalariado japonês morre e acorda em outro mundo como Ars, filho e herdeiro da Casa Louvent, uma família
          nobre que governa a pequena cidade de Lamberk. Pouco depois, ele descobre que tem a habilidade de
          <strong> Avaliação</strong>: ao olhar para alguém, vê os números de liderança, força, inteligência, política,
          talento mágico e até ambição, além das aptidões ocultas que a própria pessoa desconhece.
        </p>
        <p>
          Ars entende logo que esse dom vale mais do que qualquer espada. O território dos Louvent é fraco, o reino de
          Summerforth vive tensões entre ducados e uma disputa pela sucessão se aproxima. Em vez de lutar sozinho, ele
          procura pessoas com talento escondido, muitas vezes desprezadas pela sociedade, e as convence a servir sua
          família. A cada recrutamento, Lamberk fica um pouco mais forte, até o ponto em que Ars é promovido a senhor de
          Canarre e precisa enfrentar guerras de verdade.
        </p>
        <p>
          O detalhe interessante é que a Avaliação não resolve tudo. Ela mostra potencial, não caráter, e o anime gosta de
          lembrar que um número alto de ambição pode significar tanto um aliado incansável quanto um traidor em potencial.
          Saber escolher é só metade do trabalho; a outra metade é conquistar a confiança de cada pessoa.
        </p>

        <h2 className="flex items-center gap-2"><Users className="h-6 w-6 text-otaku" />Personagens principais</h2>
        <p>
          O elenco é a alma da série. Quase todos os vassalos de Ars têm uma origem difícil e um talento que ninguém tinha
          percebido, e a graça está em ver cada um deles florescer quando finalmente recebe uma chance.
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
          Além deles, a família de Ars também tem peso: a mãe, Sofia, o irmão mais novo, Kreiz, e o sogro, Hammond Plaid,
          aparecem nos momentos em que a política da casa entra em jogo. Repare como o roteiro usa esses coadjuvantes para
          mostrar que Ars não governa apenas soldados, mas uma família inteira com expectativas sobre ele.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2"><Tv className="h-6 w-6 text-otaku" />As temporadas do anime</h2>
        <p>
          O anime foi anunciado em 9 de maio de 2023 e ficou a cargo do <strong>Studio MOTHER</strong>, com direção de
          Takao Katō, conhecido por trabalhos como To Love-Ru e Pandora Hearts. O roteiro das duas primeiras temporadas é
          de Yasuhiro Nakanishi, o design de personagens é de Yūko Yahiro e a trilha sonora é de Kujira Yumemi. A série
          estreou no bloco Agaru Anime, exibido pela rede JNN (CBC e TBS) no Japão.
        </p>
      </div>

      <div className="not-prose grid gap-4 my-8">
        {TEMPORADAS.map((s) => (
          <div key={s.t} className="rounded-xl border border-otaku/30 bg-card/60 p-5">
            <h3 className="font-display text-lg font-bold text-otaku mb-2">{s.t}</h3>
            <ul className="text-sm space-y-1 text-foreground/90">
              <li><strong>Exibição:</strong> {s.periodo}</li>
              <li><strong>Episódios:</strong> {s.ep}</li>
              <li><strong>Estúdio:</strong> {s.estudio}</li>
              <li><strong>Músicas:</strong> {s.musica}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          A primeira temporada é praticamente uma história de formação: Ars ainda criança, a busca pelos primeiros
          vassalos, a vida em Lamberk e as primeiras batalhas pequenas. A segunda temporada, anunciada logo após o último
          episódio da primeira, amplia a escala com conflitos entre ducados e o novo cargo de Ars em Canarre. A terceira
          temporada, anunciada no fim da segunda, trocou de estúdio para a GeyeG Pictures e também de roteirista, agora
          Daisuke Ōhigashi, mantendo Takao Katō na direção.
        </p>
        <p>
          A troca de estúdio é o ponto que mais gera curiosidade entre os fãs. O estilo visual da franquia sempre foi
          limpo e funcional, com mais foco em diálogos e estratégia do que em animação de luta elaborada. Ainda é cedo
          para avaliar a nova temporada inteira, então vale assistir aos primeiros episódios e tirar suas próprias
          conclusões.
        </p>

        <h2 className="flex items-center gap-2"><Swords className="h-6 w-6 text-otaku" />Temas: liderança acima da força</h2>
        <p>
          O tema central é simples e muito bem executado: <strong>talento sem oportunidade não vale nada</strong>. Ritsu
          é rejeitado por ser Marca, Charlotte era tratada como mercadoria, Rosell era só um garoto da vila e Mireille
          tinha desperdiçado a vida. Ars não cria esses talentos; ele apenas os reconhece e dá espaço para que cresçam. É
          quase uma fábula sobre gestão de pessoas, e não é à toa que muita gente compara a série a jogos de estratégia
          em que o segredo é montar a equipe certa.
        </p>
        <p>
          O segundo tema é o <strong>preconceito</strong>. A discriminação contra os Marca aparece desde o primeiro
          episódio e acompanha Ritsu ao longo da história. A obra mostra como a confiança pública de Ars em seu vassalo
          muda a forma como o resto da casa enxerga um povo inteiro.
        </p>
        <p>
          Por fim, há a <strong>política</strong>. Ao contrário de isekais focados em subir de nível, aqui as vitórias vêm
          de alianças, casamentos arranjados, negociações e informação. Lysia, com seu talento diplomático, representa bem
          essa ideia: em vários momentos, uma boa conversa vale mais do que um exército.
        </p>

        <h2 className="flex items-center gap-2"><ListChecks className="h-6 w-6 text-otaku" />Para quem é este anime</h2>
        <ul>
          <li>Quem gosta de isekai com <strong>reino e território</strong>, no estilo de Realist Hero ou The Greatest Estate Developer.</li>
          <li>Quem prefere <strong>estratégia e diálogo</strong> a lutas longas.</li>
          <li>Quem curte <strong>elencos grandes</strong> e ver personagens secundários ganhando protagonismo.</li>
          <li>Quem quer uma série <strong>leve e otimista</strong>, sem violência excessiva.</li>
        </ul>
        <p>
          Se você procura batalhas épicas a cada episódio, talvez estranhe o ritmo. Mas, se gosta de ver um plano sendo
          montado peça por peça, é provável que maratone as duas primeiras temporadas em poucos dias.
        </p>

        <h2>Onde assistir e ler no Brasil</h2>
        <p>
          A <strong>Crunchyroll</strong> distribui o anime fora do leste asiático, o que inclui o Brasil. A disponibilidade
          de legendas e dublagem em português pode variar por temporada, então confira direto no aplicativo. No Japão, a
          segunda temporada também saiu em U-NEXT, Anime Hōdai e d Anime Store.
        </p>
        <p>
          Para ler, não encontramos edição oficial brasileira da light novel nem do mangá até a data deste artigo. As
          edições oficiais em inglês são publicadas pela Kodansha USA. Sempre que possível, prefira as versões licenciadas:
          é assim que os autores e a editora recebem pelo trabalho e que a franquia continua ganhando temporadas.
        </p>

        <h2>Ficha técnica</h2>
      </div>

      <div className="not-prose rounded-xl border border-otaku/30 bg-card/60 p-5 my-6">
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
          Resumindo: é um isekai que troca o herói invencível por um líder que sabe enxergar os outros. Com três
          temporadas, um mangá em andamento e um elenco cheio de carisma, é uma ótima porta de entrada para quem quer
          fantasia com estratégia e personagens que crescem de verdade.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          O que mais me prende nessa série é que o poder do Ars é, no fundo, empatia com planilha. Ele vê números, mas o
          que faz diferença é a decisão de confiar em gente que todo mundo descartou. Ritsu e Charlotte só viram heróis
          porque alguém apostou neles primeiro.
        </p>
        <p>
          Não é o anime mais bonito da temporada nem o de lutas mais intensas. Mas é daqueles que deixam uma sensação boa
          ao final de cada episódio, e a chegada da terceira temporada é a hora certa para começar do zero.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          { title: "As a Reincarnated Aristocrat — Wikipedia", url: "https://en.wikipedia.org/wiki/As_a_Reincarnated_Aristocrat,_I'll_Use_My_Appraisal_Skill_to_Rise_in_the_World", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
          { title: "Lista de episódios", url: "https://en.wikipedia.org/wiki/List_of_As_a_Reincarnated_Aristocrat,_I%27ll_Use_My_Appraisal_Skill_to_Rise_in_the_World_episodes", publisher: "Wikipedia", accessedAt: "Outubro 2026" },
          { title: "Season 2 premieres on September 29", url: "https://www.crunchyroll.com/news/latest/2024/9/9/as-a-reincarnated-aristocrat-i-ll-use-my-appraisal-skill-to-rise-in-the-world-season-2-anime-september-29-release-date-trailer", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "Anime Season 2 Announced", url: "https://www.crunchyroll.com/news/latest/2024/6/23/as-a-reincarnated-aristocrat-i-ll-use-my-appraisal-skill-to-rise-in-the-world-anime-season-2-announced", publisher: "Crunchyroll News", accessedAt: "Outubro 2026" },
          { title: "TVアニメ『転生貴族、鑑定スキルで成り上がる』第2期", url: "https://cstation.kodansha.co.jp/mangaip/article/7179", publisher: "Kodansha", accessedAt: "Outubro 2026" },
          { title: "Tensei Kizoku, Kantei Skill de Nariagaru 2nd Season", url: "https://myanimelist.net/anime/59131/Tensei_Kizoku_Kantei_Skill_de_Nariagaru_2nd_Season", publisher: "MyAnimeList", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default TenseiKizokuKanteiSkill2026;
