import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Gamepad2, Tv, MapPin, ListChecks, HelpCircle } from "lucide-react";
import heroImg from "@/assets/gamescom-2026-o-que-esperar.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gamescom-2026-o-que-esperar";
const TITLE = "Gamescom 2026: Datas, Xbox com o Maior Estande e Tudo o Que Já Está Confirmado";

const CONFIRMADOS = [
  { titulo: "Xbox", detalhe: "Maior estande da feira, com 25 jogos testáveis e novidades anunciadas de Fable, Gears, Forza e Call of Duty." },
  { titulo: "NC (ex-NCSoft)", detalhe: "Levará AION 2, CINDER CITY e Project Bonfire, com destaque durante o Opening Night Live." },
  { titulo: "Era One", detalhe: "A Team Complex liberará o multiplayer para teste no evento e revelará a data de lançamento da versão 1.0." },
  { titulo: "NAME OF THE WILL", detalhe: "Terror e mistério do Zeitgeist Studio com demo na feira; lançamento previsto para o início de 2027, exclusivo para PC via Steam." },
];

const AGENDA = [
  { quando: "26 de agosto de 2026", oque: "Abertura da feira em Colônia, na Alemanha, e realização do Opening Night Live (ONL)." },
  { quando: "27 a 29 de agosto de 2026", oque: "Dias de feira com estandes abertos ao público e à imprensa." },
  { quando: "30 de agosto de 2026", oque: "Último dia de evento." },
];

const Gamescom2026OQueEsperar = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Eventos · Games · Xbox
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Gamescom 2026: Datas, Xbox com o Maior Estande e Tudo o Que Já Está Confirmado
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A <strong>Gamescom 2026</strong> acontece de 26 a 30 de agosto em Colônia, na Alemanha, e abre com o Opening
          Night Live. O Xbox promete o maior estande da feira com 25 jogos jogáveis, a NC leva três títulos e vários
          estúdios menores usam o evento como vitrine. Veja o que está confirmado — e o que ainda é rumor.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />8 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Pavilhão gigante de feira de games com multidão, telões e iluminação azul e roxa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            Resumo do evento
          </h2>
          <div className="space-y-2">
            {[
              { k: "Quando", v: "26 a 30 de agosto de 2026" },
              { k: "Onde", v: "Colônia, Alemanha" },
              { k: "Abertura", v: "Opening Night Live (ONL)" },
              { k: "Maior estande anunciado", v: "Xbox, com 25 jogos testáveis" },
              { k: "Como assistir", v: "transmissões oficiais online" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-geek font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="agenda" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-geek" />
          Datas e Como Funciona
        </h2>
        <p>
          A Gamescom é a maior feira de jogos eletrônicos do mundo em público presente, e o calendário de 2026 mantém o
          formato já conhecido: um grande showcase de abertura na véspera do fluxo principal e, depois, dias de estandes
          abertos com filas para jogar demos.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Quando</th>
                <th className="text-left p-3">O que acontece</th>
              </tr>
            </thead>
            <tbody>
              {AGENDA.map((a) => (
                <tr key={a.quando} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek whitespace-nowrap align-top">{a.quando}</td>
                  <td className="p-3 text-muted-foreground">{a.oque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="confirmados" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          O Que Já Está Confirmado
        </h2>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {CONFIRMADOS.map((c) => (
            <div key={c.titulo} className="p-5 rounded-xl border border-geek/30 bg-geek/5">
              <h3 className="font-bold mb-2 text-geek">{c.titulo}</h3>
              <p className="text-sm text-muted-foreground">{c.detalhe}</p>
            </div>
          ))}
        </div>

        <p>
          A presença do Xbox é o destaque estrutural do ano: além do maior espaço da feira, a Microsoft detalhou a
          programação com novidades das franquias Fable, Gears, Forza e Call of Duty. Já a NC aposta em AION 2 como
          carro-chefe do seu retorno ao mercado ocidental de MMO.
        </p>

        <h2 id="rumores" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-geek" />
          O Que É Rumor (e Merece Cautela)
        </h2>
        <ul>
          <li>
            Circulou a informação de que o primeiro anúncio do Xbox no evento pode não ser um jogo, e sim algo ligado a
            hardware ou serviço. Até o fechamento desta matéria, isso permanece como rumor não confirmado pela empresa.
          </li>
          <li>
            Também há relatos de que a Capcom deixaria o remake de Resident Evil Code: Veronica fora da feira. Nada foi
            confirmado oficialmente pela publisher.
          </li>
        </ul>
        <p>
          A regra de ouro para acompanhar Gamescom: enquanto o trailer não roda no palco, tudo é possibilidade. Vazamento
          de line-up costuma acertar em parte e errar exatamente no item mais empolgante.
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-geek" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Quando é a Gamescom 2026?</strong> De 26 a 30 de agosto de 2026, em Colônia, na Alemanha.
        </p>
        <p>
          <strong>Dá para assistir de casa?</strong> Sim. O Opening Night Live e os showcases das publishers são
          transmitidos online gratuitamente.
        </p>
        <p>
          <strong>Vai ter novidade de GTA VI?</strong> Nada foi confirmado. A Rockstar historicamente não usa a Gamescom
          para revelações grandes.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          A Gamescom virou, na prática, a feira mais importante do calendário depois do fim da E3 — e 2026 confirma isso
          com o Xbox montando o maior estande do evento. Só que estande grande não é sinônimo de anúncio grande: a
          Microsoft chega com franquias conhecidas, não com surpresas.
        </p>
        <p>
          O que eu realmente vou observar são os estúdios médios. Era One, NAME OF THE WILL e Project Bonfire são o tipo
          de jogo que ganha ou perde o ano inteiro dependendo de vinte minutos de palco. É ali, e não nos trailers de
          franquia bilionária, que a Gamescom ainda cumpre a função original de feira.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Xbox detalha sua programação para a Gamescom 2026 com novidades de Fable, Gears, Forza e Call of Duty",
            url: "https://centralxbox.com.br/2026/08/19/xbox-detalha-sua-programacao-para-a-gamescom-2026-com-novidades-de-fable-gears-forza-e-call-of-duty/",
            publisher: "Central Xbox",
            accessedAt: "Agosto 2026",
          },
          {
            title: "NC apresentará três novos jogos na gamescom 2026",
            url: "https://nerdlicious.com.br/2026/08/nc-apresentara-tres-novos-jogos-na-gamescom-2026/",
            publisher: "Nerdlicious",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Era One ganha novo trailer com gameplay multiplayer e terá novidades na gamescom 2026",
            url: "https://www.gamersegames.com.br/2026/08/10/era-one-ganha-novo-trailer-com-gameplay-multiplayer-e-tera-novidades-na-gamescom-2026/",
            publisher: "Gamers & Games",
            accessedAt: "Agosto 2026",
          },
          {
            title: "NAME OF THE WILL será lançado para PC em 2027 com demonstração na gamescom",
            url: "https://ggames.com.br/noticias/name-of-the-will-pc-2027/",
            publisher: "GGames",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Primeiro anúncio do Xbox na Gamescom não será um jogo? Entenda",
            url: "https://canaltech.com.br/games/primeiro-anuncio-do-xbox-na-gamescom-nao-sera-um-jogo-entenda/",
            publisher: "Canaltech",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Resident Evil Veronica: Capcom pode deixar remake fora da gamescom 2026",
            url: "https://evilhazard.com.br/resident-evil-veronica-capcom-pode-deixar-remake-fora-da-gamescom-2026/",
            publisher: "EvilHazard",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default Gamescom2026OQueEsperar;
