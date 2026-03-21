import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Film, Skull } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/overlord-guia-completo.webp";

const OverlordGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead("overlord-guia-completo-temporadas-ainz", "Overlord: Guia Completo de Todas as Temporadas e o Filme Sacred Kingdom", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/overlord" portalLabel="Painel Overlord" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Overlord: Guia Completo de Todas as Temporadas, Filmes e o Universo de Ainz Ooal Gown
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Overlord — Ainz Ooal Gown" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Overlord</strong> é um dos pilares do isekai moderno: um anime onde o protagonista já é o ser mais poderoso do mundo, e a questão não é "como sobreviver", mas "como conquistar tudo" — e descobrir o que isso significa para a humanidade que ainda existe dentro dele.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-otaku" />
          A Premissa: Preso no Jogo
        </h2>
        <p>
          Em 2138, o MMORPG de realidade virtual <strong>YGGDRASIL</strong> está encerrando seus servidores após doze anos. O jogador <strong>Suzuki Satoru</strong> decide permanecer logado até o último momento no corpo de seu avatar: um poderoso feiticeiro esqueleto chamado <strong>Momonga</strong>, guildmaster da grande guilda <em>Ainz Ooal Gown</em>. Quando os servidores deveriam desligar, Momonga percebe que ainda está lá — mas algo mudou radicalmente. Os NPCs da Grande Tumba de Nazarick, incluindo os poderosos Floor Guardians, ganharam vida própria e passaram a tratar Momonga como seu supremo soberano. O próprio Momonga descobre que não consegue mais fazer logout.
        </p>
        <p>
          Decidindo explorar o novo mundo enquanto finge ser o todo-poderoso Soberano da Morte, ele adota o nome da guilda — <strong>Ainz Ooal Gown</strong> — como sua nova identidade. A série explora uma questão fascinante: quanto da humanidade de Suzuki Satoru sobrevive dentro de Ainz, e o que acontece quando essa humanidade vai sendo apagada pelas mecânicas do jogo?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Julho a Setembro de 2015
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><span className="text-muted-foreground block">Estreia</span><strong>7 de jul, 2015</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>13</strong></div>
            <div><span className="text-muted-foreground block">Estúdio</span><strong>Madhouse</strong></div>
            <div><span className="text-muted-foreground block">Volumes</span><strong>1–4 LN</strong></div>
          </div>
        </div>
        <p>
          A primeira temporada apresenta Nazarick, seus Floor Guardians e a dinâmica central da série. Ainz explora o mundo ao redor, cria o alter-ego de aventureiro <strong>Momon</strong>, salva a aldeia de Carne Village da Escritura da Luz Solar, e começa a entender as políticas do Novo Mundo. Os arcos incluem o assalto à mansão Shalltear e a batalha contra a Order of Eighty Swords. A abertura <em>"Clattanoia"</em> do OxT é lendária.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Janeiro a Abril de 2018
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><span className="text-muted-foreground block">Estreia</span><strong>9 de jan, 2018</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>13</strong></div>
            <div><span className="text-muted-foreground block">Foco</span><strong>Lizardmen / Re-Estize</strong></div>
            <div><span className="text-muted-foreground block">Volumes</span><strong>5–6 LN</strong></div>
          </div>
        </div>
        <p>
          A segunda temporada expande o mundo com dois arcos principais. No <strong>Arco dos Lizardmen</strong>, Ainz ordena um ataque à tribo como teste de poder — e testemunha a resistência heroica de Zaryusu Shasha. No <strong>Arco do Reino de Re-Estize</strong>, Sebas trabalha encoberto na capital e se envolve com os Oito Dedos, a organização criminosa que controla o submundo. A moral ambígua de Ainz se aprofunda: ele admira a coragem dos Lizardmen enquanto os subjuga sem remorso.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 3 — Julho a Outubro de 2018
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><span className="text-muted-foreground block">Estreia</span><strong>10 de jul, 2018</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>13</strong></div>
            <div><span className="text-muted-foreground block">Foco</span><strong>Sorcerer Kingdom</strong></div>
            <div><span className="text-muted-foreground block">Volumes</span><strong>7–9 LN</strong></div>
          </div>
        </div>
        <p>
          A terceira temporada é onde Ainz se consolida como força geopolítica. O <strong>Arco do Império de Baharuth</strong> apresenta Jircniv Rune Farlord El-Nix tentando usar o Guerreiro King para testar Ainz — e sendo completamente humilhado. Ainz proclama formalmente o <strong>Sorcerer Kingdom</strong> (Reino do Feiticeiro), com E-Rantel como capital. O arco culmina com a Batalha de E-Naüru, onde Ainz sozinho destroça um exército inteiro para demonstrar poder. É o momento em que a série deixa claro que não estamos lidando com um herói.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 4 — Julho a Setembro de 2022
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><span className="text-muted-foreground block">Estreia</span><strong>5 de jul, 2022</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>13</strong></div>
            <div><span className="text-muted-foreground block">Foco</span><strong>Anões / Re-Estize</strong></div>
            <div><span className="text-muted-foreground block">Volumes</span><strong>10, 11, 14 LN</strong></div>
          </div>
        </div>
        <p>
          A quarta temporada inclui o <strong>Arco dos Anões</strong> (Ainz visita o Reino Anão para estabelecer relações comerciais), o <strong>Arco das Alianças Humanas</strong>, e culmina com a destruição absoluta do <strong>Reino de Re-Estize</strong>. Ainz ordena o massacre de toda a nação — com exceção de Carne Village — como mensagem para o mundo. É o arco mais sombrio e perturbador da série, forçando o espectador a confrontar o fato de que Ainz não é um anti-herói simpático: é um conquista dor que usa o genocídio como ferramenta política.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-otaku" />
          Filmes de Compilação — 2017
        </h2>
        <p>
          Em <strong>fevereiro e março de 2017</strong>, foram lançados dois filmes de compilação no Japão resumindo os eventos da Temporada 1 com cenas adicionais. São opcionais para quem já assistiu à série, mas úteis como recapitulação.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-otaku" />
          Filme: The Sacred Kingdom — Setembro de 2024
        </h2>
        <p>
          <strong>Overlord: The Sacred Kingdom</strong> estreou no Japão em <strong>20 de setembro de 2024</strong>, com sessões IMAX começando em 13 de setembro. O filme de 135 minutos adapta os volumes 12 e 13 da light novel — o <em>Arco do Reino Sagrado</em>. O <strong>Imperador Demoníaco Jaldabaoth</strong> invade o Reino Sagrado com um exército de demi-humanos. Desesperado, o Reino Sagrado é forçado a pedir ajuda ao inimigo Sorcerer Kingdom — ou seja, ao próprio Ainz.
        </p>
        <p>
          O filme estreou nos EUA em novembro de 2024 via Sony Pictures com distribuição IMAX, arrecadando <strong>US$ 1,16 milhão</strong> em seu fim de semana de estreia norte-americano. Chegou ao Crunchyroll globalmente em <strong>abril de 2025</strong>. Narrativamente, os eventos do filme ocorrem <strong>entre os episódios 7 e 8 da Temporada 4</strong>.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 my-6">
          <p className="font-bold mb-3">📅 Linha do Tempo de Overlord</p>
          <div className="space-y-2 text-sm">
            {[
              ["Jul 2015", "Temporada 1 (Madhouse, 13 eps)"],
              ["Fev/Mar 2017", "Filmes de compilação T1"],
              ["Jan 2018", "Temporada 2 (13 eps)"],
              ["Jul 2018", "Temporada 3 (13 eps)"],
              ["Jul 2022", "Temporada 4 (13 eps)"],
              ["Set 2024", "Filme: The Sacred Kingdom (vols 12-13)"],
              ["2026-2027?", "Temporada 5 (não confirmada oficialmente)"],
            ].map(([date, event]) => (
              <div key={date} className="flex gap-3">
                <span className="text-otaku font-bold w-28 shrink-0">{date}</span>
                <span className="text-muted-foreground">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RelatedPosts currentSlug="overlord-guia-completo-temporadas-ainz" />
      <CommentSection postSlug="overlord-guia-completo-temporadas-ainz" />
    </article>
  );
};

export default OverlordGuiaCompleto;
