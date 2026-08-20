import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Tv, Sparkles, CalendarDays, ListChecks, HelpCircle } from "lucide-react";
import heroImg from "@/assets/animes-outono-2026-estreias.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "animes-outono-2026-estreias";
const TITLE = "Animes de Outono 2026: Estreias Já Confirmadas para Outubro e o Que Esperar da Temporada";

const ESTREIAS = [
  { titulo: "Overgeared", data: "2 de outubro de 2026", estudio: "REDICE STUDIO / JC.STAFF", nota: "Adaptação do webtoon sul-coreano de progressão em jogo, apontada como opção para quem gosta de Solo Leveling." },
  { titulo: "Firefly Wedding", data: "9 de outubro de 2026", estudio: "David Production", nota: "Data confirmada no segundo teaser trailer; drama histórico ambientado na era Meiji." },
  { titulo: "Dark Machine the Animation", data: "Outubro de 2026", estudio: "Production +h.", nota: "Trailer divulgado em 19 de agosto revelou a abertura \"Sonzai Riyū Kai\", interpretada pelo BUCK-TICK." },
  { titulo: "The World's Strongest Witch", data: "Outubro de 2026", estudio: "Anunciado pela Square Enix", nota: "Adaptação da novel sobre um mundo em que só o protagonista enxerga o guia de estratégia online." },
  { titulo: "The Vermilion Mask", data: "Outubro de 2026", estudio: "Revelado na Anime Expo 2026", nota: "Adaptação do mangá de Dr. Poro e Nabana Naba; primeira temporada dividida em dois cours." },
];

const AnimesOutono2026Estreias = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Temporada · Estreias · Outubro
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Animes de Outono 2026: Estreias Já Confirmadas para Outubro e o Que Esperar da Temporada
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A lista de <strong>animes de outono 2026</strong> começou a fechar. Overgeared abre em 2 de outubro, Firefly
          Wedding chega em 9 e outros três títulos já cravaram o mês. Reunimos apenas o que tem confirmação oficial de
          trailer ou anúncio de estúdio — sem spoiler de enredo.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />8 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Ilustração em estilo anime de personagens sob folhas de bordo alaranjadas em cenário de outono"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-otaku/10 to-background rounded-xl border border-otaku/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-otaku" />
            Resumo da temporada
          </h2>
          <div className="space-y-2">
            {[
              { k: "Janela da temporada", v: "outubro a dezembro de 2026" },
              { k: "Primeira estreia com data", v: "Overgeared, 2 de outubro" },
              { k: "Segunda estreia com data", v: "Firefly Wedding, 9 de outubro" },
              { k: "Títulos confirmados nesta lista", v: "5" },
              { k: "Critério", v: "somente anúncios oficiais" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-otaku font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="estreias" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CalendarDays className="h-7 w-7 text-otaku" />
          As Estreias Confirmadas
        </h2>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Título</th>
                <th className="text-left p-3">Estreia</th>
                <th className="text-left p-3">Produção</th>
              </tr>
            </thead>
            <tbody>
              {ESTREIAS.map((e) => (
                <tr key={e.titulo} className="border-t border-border/50">
                  <td className="p-3 font-bold align-top">{e.titulo}</td>
                  <td className="p-3 text-otaku font-bold whitespace-nowrap align-top">{e.data}</td>
                  <td className="p-3 text-muted-foreground">{e.estudio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="detalhes" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Que Se Sabe de Cada Um
        </h2>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {ESTREIAS.map((e) => (
            <div key={e.titulo} className="p-5 rounded-xl border border-otaku/30 bg-otaku/5">
              <h3 className="font-bold mb-1 text-otaku">{e.titulo}</h3>
              <p className="text-xs font-medium mb-2">{e.data}</p>
              <p className="text-sm text-muted-foreground">{e.nota}</p>
            </div>
          ))}
        </div>

        <p>
          Duas leituras saltam da lista. A primeira é a força continuada das adaptações de webtoon e light novel de
          progressão — Overgeared e The World's Strongest Witch nascem do mesmo apetite que fez Solo Leveling estourar. A
          segunda é a variedade de estúdio: David Production e Production +h. entregam identidades visuais muito
          diferentes, o que costuma render uma temporada menos uniforme e mais interessante.
        </p>

        <h2 id="como-acompanhar" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-otaku" />
          Como Se Preparar para a Temporada
        </h2>
        <ul>
          <li>Datas de estreia japonesa costumam sair semanas antes da confirmação de simulcast legendado no Brasil.</li>
          <li>Séries divididas em cours, como The Vermilion Mask, têm intervalo entre as partes — não confunda pausa com cancelamento.</li>
          <li>Trailers oficiais são a fonte mais confiável de data; listas de fãs mudam com frequência.</li>
          <li>Guarde espaço na lista: outubro concentra o maior volume de estreias do ano na maioria das temporadas.</li>
        </ul>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-otaku" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Quando começa a temporada de outono 2026?</strong> Em outubro de 2026. A primeira estreia com data
          confirmada nesta lista é Overgeared, em 2 de outubro.
        </p>
        <p>
          <strong>Esses animes terão legenda em português?</strong> As plataformas costumam anunciar o simulcast perto da
          estreia; até agora não há confirmação para todos os títulos.
        </p>
        <p>
          <strong>A lista pode mudar?</strong> Sim. Adiamentos são comuns, e novos títulos ainda podem ser anunciados
          para a mesma janela.
        </p>
      </div>

      <EditorialTake category="otaku">
        <p>
          Toda temporada de outono chega inflada de expectativa, e a de 2026 tem um traço claro: adaptação de material
          coreano e de novel dominando as datas confirmadas mais cedo. Isso diz menos sobre qualidade e mais sobre
          previsibilidade comercial — são obras com público já medido antes do primeiro episódio.
        </p>
        <p>
          O título que eu manteria no radar por motivo diferente é Dark Machine. Ter o BUCK-TICK na abertura e um estúdio
          com identidade autoral costuma indicar um projeto que não foi montado por planilha. É esse tipo de aposta que
          define se uma temporada é lembrada ou só consumida.
        </p>
      </EditorialTake>

      <ArticleSources
        category="otaku"
        sources={[
          {
            title: "Overgeared ganha novo trailer e confirma estreia para 2 de outubro",
            url: "https://animeflix.com.br/overgeared-ganha-novo-trailer-e-confirma-estreia-para-2-de-outubro/",
            publisher: "AnimeFlix",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Firefly Wedding ganha novo trailer e confirma estreia para 9 de outubro",
            url: "https://animeflix.com.br/firefly-wedding-ganha-novo-trailer-e-confirma-estreia-para-9-de-outubro/",
            publisher: "AnimeFlix",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Novo trailer de Dark Machine confirma estreia do anime em outubro de 2026",
            url: "https://www.otakupt.com/anime/novo-trailer-de-dark-machine-confirma-estreia-do-anime-em-outubro-de-2026/",
            publisher: "OtakuPT",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Série anime de The World's Strongest Witch vai estrear em Outubro 2026",
            url: "https://www.otakupt.com/anime/serie-anime-de-the-worlds-strongest-witch-vai-estrear-em-outubro-2026/",
            publisher: "OtakuPT",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Anime Expo 2026 revela estreia de The Vermilion Mask em outubro",
            url: "https://noticiasflix.com.br/the-vermilion-mask-trailer/",
            publisher: "NotíciasFlix",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Animes 2026: os principais lançamentos e onde assisti-los",
            url: "https://www.omelete.com.br/mangas-animes/anime-lancamentos-2026-onde-assistir",
            publisher: "Omelete",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="otaku" />
    </article>
  );
};

export default AnimesOutono2026Estreias;
