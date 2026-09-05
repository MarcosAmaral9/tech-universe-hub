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
  Sparkles, Sword, Layers, Globe, RefreshCcw, Skull,
} from "lucide-react";
import fatedVillainImg from "@/assets/i-am-the-fated-villain-gu-changge.webp";

const SLUG = "i-am-the-fated-villain-gu-changge-guia-2026";
const TITLE = "I Am the Fated Villain: Tudo Sobre Gu Changge, o Vilão Predestinado do Manhua";

const FICHA = [
  { label: "Título original", value: "我竟然是反派 (Wǒ Jìngrán Shì Fǎnpài — \"Eu Sou o Vilão Predestinado\")" },
  { label: "Título internacional", value: "I Am the Fated Villain / I'm the Fated Villain" },
  { label: "Formato", value: "Manhua (quadrinho chinês digital, leitura vertical em cores)" },
  { label: "Origem", value: "Adaptação de web novel chinesa homônima, publicada originalmente por capítulos online" },
  { label: "Publicação original", value: "Plataformas digitais chinesas (ecossistema Tencent Comics/AC.QQ), início no começo da década de 2020" },
  { label: "Status", value: "Em publicação contínua, com centenas de capítulos lançados" },
  { label: "Protagonista", value: "Gu Changge (顾长歌), jovem mestre da família Gu" },
  { label: "Gêneros", value: "Xianxia, cultivo, transmigração/reencarnação, sistema, vilão protagonista, ação, fantasia" },
  { label: "Leitura oficial em PT-BR", value: "Não existe edição oficial em português até o momento" },
];

const GENEROS = [
  {
    titulo: "Xianxia e cultivo",
    texto: "A obra é um xianxia clássico em estrutura: o mundo é organizado em reinos de cultivo, e os personagens sobem de poder refinando qi, abrindo meridianos e atravessando tribulações. A diferença é o ponto de vista — acompanhamos quem normalmente seria o obstáculo do herói.",
  },
  {
    titulo: "Transmigração e reencarnação",
    texto: "Gu Changge é um transmigrador: uma alma de outro mundo que desperta no corpo de um personagem de um universo de fantasia. O detalhe cruel é que ele não reencarna como protagonista, e sim como o vilão destinado a ser pisoteado pelo 'filho do destino' da história.",
  },
  {
    titulo: "Sistema",
    texto: "Como boa parte das web novels chinesas modernas, o protagonista conta com um 'sistema' — uma interface que quantifica a sorte e o destino dos chamados 'protagonistas de aura' e recompensa Gu Changge quando ele drena essa sorte para si.",
  },
  {
    titulo: "Vilão protagonista",
    texto: "É o subgênero que o título anuncia: o leitor torce por um antagonista frio, calculista e metódico, que usa status, inteligência política e conhecimento de 'enredo' para desmontar os heróis destinados um a um.",
  },
];

const IAmTheFatedVillainGuia2026 = () => {
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
            5 de Setembro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
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
          src={fatedVillainImg}
          width={1280}
          height={720}
          alt="Gu Changge, o vilão predestinado de I Am the Fated Villain, sentado em trono com aura sombria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-lg md:text-xl text-muted-foreground">
          E se você reencarnasse num mundo de fantasia... como o <strong>vilão</strong>?
          Essa é a premissa de <em>I Am the Fated Villain</em> (Eu Sou o Vilão Predestinado),
          manhua de cultivo que virou febre entre os leitores brasileiros de quadrinhos chineses.
          Neste guia reunimos tudo o que se sabe sobre a obra: a história de Gu Changge, o sistema
          de cultivo, os gêneros que ele mistura, a origem da adaptação e onde acompanhar os capítulos.
        </p>

        <div className="not-prose my-8 p-6 rounded-xl border border-otaku/30 bg-gradient-to-br from-otaku/5 to-card/50">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold mb-4">
            <ListChecks className="h-5 w-5 text-otaku" />
            Resumo rápido
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc list-inside">
            <li>Manhua de xianxia com protagonista vilão, adaptado de web novel chinesa.</li>
            <li>Gu Changge transmigra para o corpo do "vilão destinado" e usa um sistema para roubar a sorte dos heróis.</li>
            <li>Mistura cultivo, política entre clãs, reencarnação e o popular formato de "sistema".</li>
            <li>Em publicação com centenas de capítulos; sem edição oficial em português.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <BookOpen className="h-6 w-6 text-otaku" />
          A história: nascer como o degrau do herói
        </h2>
        <p>
          Todo xianxia tem o mesmo esqueleto narrativo: um jovem humilde (o "filho do destino")
          encontra uma oportunidade, cultiva, humilha o rival arrogante de família poderosa e sobe
          rumo ao topo do mundo. <em>I Am the Fated Villain</em> pergunta: como é estar do outro lado?
        </p>
        <p>
          O protagonista desperta no corpo de <strong>Gu Changge</strong>, jovem mestre de uma das
          famílias mais poderosas do mundo de cultivo. Lindo, talentoso, rico e respeitado — e
          completamente condenado. No "roteiro" original daquele mundo, Gu Changge é o vilão de
          meio de jornada: o arrogante que provoca o verdadeiro protagonista, é derrotado e serve
          de trampolim para a ascensão do herói. O destino literalmente conspira contra ele.
        </p>
        <p>
          A virada vem com o sistema que acompanha a transmigração. Gu Changge consegue enxergar a
          "aura de protagonista" dos chamados filhos do destino — figuras abençoadas pela sorte do
          mundo, como o típico jovem de origem humilde com um tesouro milagroso — e ganha recompensas
          ao minar a sorte deles. Em vez de esperar a derrota anunciada, ele passa a caçar ativamente
          os "protagonistas", destruindo suas oportunidades, suas alianças e, quando necessário,
          suas vidas — sempre mantendo a fachada impecável de gênio nobre e benevolente.
        </p>
        <p>
          É justamente esse duplo jogo que sustenta a obra: publicamente, Gu Changge é o modelo de
          jovem mestre virtuoso; nos bastidores, ele manipula clãs inteiros, orquestra quedas de
          linhagens e transforma a sorte roubada em cultivo. A narrativa encontra um equilíbrio
          raro entre a fantasia de poder típica do gênero e um jogo político quase de xadrez.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Sword className="h-6 w-6 text-otaku" />
          O sistema de cultivo e o "roubo de sorte"
        </h2>
        <p>
          Como todo xianxia, a obra usa uma escala de reinos de cultivo: os praticantes acumulam
          energia espiritual, refinam o corpo e a alma e atravessam estágios de poder cada vez mais
          absurdos, com direito a tesouros, técnicas herdadas e tribulações. O diferencial de
          <em> I Am the Fated Villain</em> é a camada extra que o sistema adiciona por cima dessa
          estrutura tradicional:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>
            <strong>Sorte quantificada:</strong> os "filhos do destino" carregam uma reserva de
            sorte concedida pelo próprio mundo — é ela que explica por que heróis de xianxia sempre
            encontram a caverna certa com o tesouro certo na hora certa.
          </li>
          <li>
            <strong>Dreno de destino:</strong> ao frustrar os planos de um protagonista — roubando
            sua oportunidade, virando seus aliados contra ele ou expondo seus segredos — Gu Changge
            converte essa sorte em pontos e recompensas do sistema.
          </li>
          <li>
            <strong>Conhecimento de enredo:</strong> como transmigrador, ele "conhece o roteiro":
            sabe onde as oportunidades vão aparecer e quais eventos catapultariam cada rival, e usa
            isso para chegar primeiro.
          </li>
        </ul>
        <p>
          O resultado é uma inversão elegante da lógica do gênero. Num xianxia comum, a sorte do
          mundo protege o herói; aqui, a sorte do mundo é um recurso a ser minerado pelo vilão —
          e cada capítulo aproxima Gu Changge do topo exatamente pelo caminho que deveria destruí-lo.
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
          Essa combinação não é acidental: ela reflete uma tendência fortíssima das web novels
          chinesas dos últimos anos, na qual o leitor já conhece tão bem os clichês do xianxia que
          obras "meta" — que subvertem o roteiro clássico — passaram a dominar as plataformas de
          publicação por capítulos. <em>I Am the Fated Villain</em> é um dos exemplares mais
          populares dessa safra.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <RefreshCcw className="h-6 w-6 text-otaku" />
          Transmigração e reencarnação: o motor da trama
        </h2>
        <p>
          Vale separar dois conceitos que o manhua usa em conjunto. A <strong>transmigração</strong>
          é o deslocamento de uma alma para outro mundo e outro corpo — é o que acontece com Gu
          Changge, que assume a identidade do jovem mestre da família Gu. A <strong>reencarnação</strong>,
          no contexto do xianxia, costuma significar o ciclo de vidas dentro do próprio mundo de
          cultivo, mecânica que também aparece na obra em torno de linhagens antigas, heranças e
          figuras que retornam de eras passadas.
        </p>
        <p>
          Para o leitor brasileiro acostumado com isekai japoneses, a leitura é familiar: a
          estrutura de "pessoa comum presa num mundo de fantasia com vantagem de conhecimento" é a
          mesma de títulos como <em>Mushoku Tensei</em> ou <em>Overlord</em>. A diferença cultural é
          o pano de fundo: em vez de guildas e magia ocidental, temos seitas, clãs, pílulas
          medicinais e a busca pela imortalidade — o universo do cultivo chinês.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Sparkles className="h-6 w-6 text-otaku" />
          Origem, publicação e capítulos
        </h2>
        <p>
          <em>I Am the Fated Villain</em> nasceu como <strong>web novel</strong> — romance publicado
          por capítulos em plataformas digitais chinesas — e ganhou adaptação em manhua, o formato
          de quadrinho digital em cores e leitura vertical que domina o mercado chinês. A circulação
          internacional se deu principalmente pelas traduções de fãs, primeiro da novel e depois do
          manhua, que explodiu em popularidade em agregadores e aplicativos de leitura no começo da
          década de 2020.
        </p>
        <p>
          Um ponto importante de transparência: informações editoriais detalhadas — nome do estúdio
          de adaptação, equipe criativa e datas exatas de estreia — são pouco documentadas fora da
          China, e os registros ocidentais divergem entre si. O que é seguro afirmar:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>A obra é originalmente chinesa, do ecossistema de plataformas digitais de quadrinhos do país.</li>
          <li>O manhua segue <strong>em publicação</strong>, já com centenas de capítulos lançados.</li>
          <li>A web novel original está disponível em traduções de fãs para o inglês, com o manhua cobrindo os arcos iniciais.</li>
          <li>Não existe, até o momento, edição oficial licenciada em português — nem da novel, nem do manhua.</li>
        </ul>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Globe className="h-6 w-6 text-otaku" />
          Onde ler em português
        </h2>
        <p>
          Sem lançamento oficial no Brasil, a comunidade lusófona acompanha a obra por traduções de
          fãs. Os canais mais citados pelos leitores brasileiros são:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground/90">
          <li>
            <strong>Mangaflix:</strong> aplicativo muito usado no Brasil para leitura de manhuas e
            manhwas traduzidos pela comunidade, com catálogo amplo de títulos chineses em PT-BR.
          </li>
          <li>
            <strong>Sites e agregadores de scanlations:</strong> grupos de tradução mantêm os
            capítulos em português em seus próprios sites e leitores online.
          </li>
          <li>
            <strong>Comunidades de Discord e fóruns:</strong> é onde os leitores discutem os arcos
            mais recentes e acompanham os lançamentos semanais.
          </li>
        </ul>
        <p>
          Fica o nosso lembrete de sempre: traduções de fãs existem justamente porque não há
          alternativa oficial. Se um dia a obra for licenciada em português — como já aconteceu com
          diversos manhuas e manhwas — apoiar a edição oficial é a melhor forma de garantir que mais
          títulos do tipo cheguem por aqui.
        </p>

        <h2 className="flex items-center gap-2 font-display text-2xl font-bold mt-10 mb-4">
          <Skull className="h-6 w-6 text-otaku" />
          Por que Gu Changge fisgou os leitores
        </h2>
        <p>
          Protagonistas vilões não são novidade, mas Gu Changge acerta num equilíbrio específico:
          ele é competente sem ser invencível, cruel sem ser caricato e, acima de tudo,
          <em> paciente</em>. As vitórias dele não vêm de poder bruto, mas de planejamento de longo
          prazo — plantar uma discórdia hoje para colher a queda de um clã dezenas de capítulos
          depois. Para quem já leu dezenas de xianxias com heróis idênticos, ver a engrenagem do
          "destino" ser desmontada de dentro é um prazer particular.
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
            <h3 className="font-bold mb-2">Quantos capítulos tem I Am the Fated Villain?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O manhua segue em publicação contínua e já ultrapassa a casa das centenas de capítulos.
              Como novos capítulos saem semanalmente, o número exato muda constantemente — verifique
              o seu leitor de preferência para a contagem atualizada.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Gu Changge é realmente o vilão?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sim — e essa é a graça. Ele ocupa o papel do "vilão destinado" do roteiro original
              daquele mundo e abraça a função, agindo com frieza contra os heróis abençoados pelo
              destino. O leitor acompanha a história pela perspectiva do antagonista.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">O manhua é baseado em uma novel?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sim. A obra adapta uma web novel chinesa homônima, publicada por capítulos em
              plataformas digitais. A novel está bem à frente do manhua e pode ser encontrada em
              traduções de fãs para o inglês.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Existe versão oficial em português?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não. Até o momento não há licenciamento oficial da novel ou do manhua no Brasil.
              A leitura em PT-BR acontece por traduções da comunidade, em apps como o Mangaflix
              e sites de scanlations.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card/50">
            <h3 className="font-bold mb-2">Para quem gosta de I Am the Fated Villain, o que ler em seguida?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Outros manhuas de vilão protagonista e transmigração com sistema, além de títulos de
              cultivo com foco político. A safra de web novels "meta-xianxia" é grande e cresce
              a cada ano nas plataformas chinesas.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="otaku">
        <p>
          I Am the Fated Villain é o tipo de obra que só funciona porque o leitor já decorou as
          regras do jogo. Depois de anos consumindo xianxias e isekais de estrutura idêntica, ver
          Gu Changge tratar a "sorte do protagonista" como um recurso a ser minerado é quase uma
          sátira — e uma sátira muito bem escrita, com planejamento de longo prazo raro no gênero.
        </p>
        <p>
          Minha ressalva é a mesma de sempre com títulos sem edição oficial: a documentação sobre a
          produção é frágil fora da China, e a leitura depende inteiramente do trabalho voluntário
          de tradutores. Se a obra chegar oficialmente ao Brasil, será a confirmação de que o
          mercado de manhuas por aqui amadureceu de vez.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          {
            title: "I Am the Fated Villain — página da obra (novel e manhua)",
            url: "https://www.novelupdates.com/series/i-am-the-fated-villain/",
            publisher: "NovelUpdates",
            accessedAt: "Setembro 2026",
          },
          {
            title: "I'm the Fated Villain — ficha do manhua",
            url: "https://www.mangaupdates.com/series.html?id=177052",
            publisher: "Baka-Updates / MangaUpdates",
            accessedAt: "Setembro 2026",
          },
          {
            title: "O que é xianxia: o gênero de fantasia chinesa de cultivo",
            url: "https://en.wikipedia.org/wiki/Xianxia",
            publisher: "Wikipédia (verbete em inglês)",
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

export default IAmTheFatedVillainGuia2026;
