import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Film, BookOpen, Skull, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/overlord-guia-completo.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const OverlordGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead("overlord-guia-completo-temporadas-ainz", "Overlord: Guia Completo de Temporadas, Filme e o Futuro da Série", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/overlord" portalLabel="Painel Overlord" />
      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Overlord: Guia Completo de Todas as Temporadas, Filme Sacred Kingdom e o Futuro da Série
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Overlord — Nazarick, a Grande Tumba" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Overlord</strong> é um dos pilares do isekai moderno — um anime em que o protagonista já é o ser mais poderoso do mundo desde o início, e a tensão não vem de sobreviver, mas de conquistar. Com 4 temporadas, 2 filmes de compilação, um filme canônico lançado em 2024 e uma 5ª temporada aguardada para 2026–2027, a saga de <strong>Ainz Ooal Gown</strong> está longe de terminar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Web Novel e Light Novel
        </h2>
        <p>
          <strong>Overlord</strong> foi criado por <strong>Kugane Maruyama</strong>, com ilustrações de <strong>so-bin</strong>. A história começou como web novel na plataforma <em>Arcadia</em> em 2010, antes de ser relançada no <em>Shōsetsuka ni Narō</em> em 2012. A editora <strong>Enterbrain</strong> (depois absorvida pela Kadokawa) publicou o primeiro volume da light novel em <strong>30 de julho de 2012</strong>. Atualmente existem <strong>16 volumes publicados</strong> (até julho de 2022) com os volumes 17 e 18 ainda pendentes — Maruyama confirmou no afterword do vol. 16 que a série encerrará no <strong>volume 18</strong>. A <strong>Yen Press</strong> licenciou a série para o inglês desde outubro de 2015, com o vol. 1 em inglês lançado em maio de 2016.
        </p>
        <p>
          O mangá principal, adaptado por <strong>Satoshi Ōshio</strong> com arte de <strong>Hugin Miyama</strong>, foi serializado na <strong>Comp Ace</strong> (Kadokawa) de novembro de 2014 a maio de 2023. Uma série de mangá sequência, <strong>Overlord: New World</strong>, com arte de <em>Matsuki</em>, iniciou na mesma revista em <strong>26 de abril de 2024</strong>. Ambos são publicados em inglês pela <strong>Yen Press</strong>.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Skull className="h-7 w-7 text-otaku" />
          A Premissa: Preso no Jogo
        </h2>
        <p>
          Em 2138, o MMORPG de realidade virtual <strong>YGGDRASIL</strong> encerra seus servidores após 12 anos. O jogador <strong>Suzuki Satoru</strong> decide permanecer até o último segundo no corpo de seu avatar — o poderoso feiticeiro esqueleto <strong>Momonga</strong>, guildmaster da lendária guilda <em>Ainz Ooal Gown</em>. Quando os servidores deveriam desligar, Momonga constata que ainda está lá — e os 41 NPCs da Grande Tumba de Nazarick ganharam consciência própria, tratando-o como seu soberano supremo. Sem conseguir fazer logout, ele adota o nome da guilda como identidade: <strong>Ainz Ooal Gown</strong>, Sorcerer King (Rei do Feiticeiro).
        </p>
        <p>
          A série explora uma questão filosófica perturbadora: quanto da humanidade de Suzuki Satoru sobrevive dentro de Ainz? O sistema do jogo suprime automaticamente emoções negativas extremas — o que significa que Ainz <em>não consegue</em> sentir remorso ou hesitar quando as emoções chegam a certo nível. Ao longo das quatro temporadas, essa linha se torna cada vez mais tênue.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Julho a Setembro de 2015
      <AdInArticle />
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia","7 jul 2015"],["Término","29 set 2015"],
              ["Episódios","13"],["Estúdio","Madhouse"],
              ["Diretor","Naoyuki Itō"],["Rede","AT-X / Tokyo MX"],
              ["OP","\"Clattanoia\" — OxT"],["ED","\"L.L.L.\" — MYTH&ROID"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A primeira temporada adapta os <strong>volumes 1 a 3</strong> da light novel e apresenta Nazarick, seus guardiões e a dinâmica central da série. Ainz cria o alter-ego aventureiro <strong>Momon</strong> (armadura negra) para explorar o Novo Mundo sem revelar sua identidade. O arco culmina com a batalha contra <strong>Shalltear Bloodfallen</strong>, controlada por um artefato inimigo — Ainz é forçado a enfrentá-la pessoalmente em um duelo que demonstra o abismo de poder entre ele e qualquer outro ser do mundo. A abertura <em>"Clattanoia"</em> do OxT é considerada uma das melhores de 2015.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Janeiro a Abril de 2018
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia","9 jan 2018"],["Término","3 abr 2018"],
              ["Episódios","13"],["Volumes LN","5 e 6"],
              ["OP","\"Go Cry Go\" — OxT"],["ED","\"Hydra\" — MYTH&ROID"],
              ["Arcos","Lizardmen / Re-Estize"],["Streaming","Crunchyroll / Hulu"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A segunda temporada expande o mundo com dois arcos principais. No <strong>Arco dos Lizardmen</strong> (eps. 1–5), Ainz ordena um ataque como demonstração de poder — e observa com admiração a resistência heroica de <strong>Zaryusu Shasha</strong>, que mesmo derrotado inspira sua tribo. Ainz ressuscita Zaryusu e sua amada como recompensa pela bravura. No <strong>Arco do Submundo de Re-Estize</strong> (eps. 6–13), <strong>Sebas Tian</strong> opera encoberto na capital e salva a escrava humana <strong>Tsuare</strong> dos Oito Dedos — criando uma das maiores tensões morais da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 3 — Julho a Outubro de 2018
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia","10 jul 2018"],["Término","2 out 2018"],
              ["Episódios","13"],["Volumes LN","7, 8 e 9"],
              ["OP","\"Voracity\" — MYTH&ROID"],["ED","\"Silent Solitude\" — OxT"],
              ["Arcos","Baharuth / Sorcerer Kingdom"],["Destaque","Batalha de E-Naüru"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A T3 é onde Ainz se consolida como força geopolítica. O <strong>Imperador de Baharuth</strong>, Jircniv Rune Farlord El-Nix, tenta usar o <em>Warrior King</em> para testar Ainz — e é completamente humilhado. Ainz proclama formalmente o <strong>Sorcerer Kingdom</strong> com E-Rantel como capital. O clímax é a <strong>Batalha de E-Naüru</strong>: Ainz, sozinho, destrói um exército inteiro com a magia <em>Ia Shub-Niggurath</em> em minutos, para demonstrar ao mundo o que significa desafiar Nazarick. É o ponto em que a série abandona qualquer pretensão de anti-herói simpático.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 4 — Julho a Setembro de 2022
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              ["Estreia","5 jul 2022"],["Término","27 set 2022"],
              ["Episódios","13"],["Volumes LN","10, 11 e 14"],
              ["OP","\"hollow shadow\" — OxT"],["ED","\"No Man's Land\" — MYTH&ROID"],
              ["Arcos","Anões / Re-Estize / Alianças"],["Destaque","Destruição do Reino de Re-Estize"],
            ].map(([k,v]) => (
              <div key={k}><span className="text-muted-foreground block text-xs">{k}</span><strong className="text-sm">{v}</strong></div>
            ))}
          </div>
        </div>
        <p>
          A quarta temporada inclui o <strong>Arco do Reino dos Anões</strong> (vol. 11 — Ainz visita para acordos comerciais de runescrita) e culmina com a <strong>destruição total do Reino de Re-Estize</strong> (vol. 14). Ainz ordena o massacres de toda a nação — com única exceção de Carne Village — como mensagem para o mundo. A cena final do episódio 13 mostra <strong>Renner</strong> revelando sua verdadeira natureza demoníaca, com o texto <em>"The End Begins"</em>. Nota: os volumes 12 e 13 (Arco do Reino Sagrado) foram pulados para serem adaptados no filme de 2024.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Film className="h-7 w-7 text-otaku" />
          Filmes de Compilação — Fevereiro e Março de 2017
        </h2>
        <p>
          Dois filmes de compilação da T1 foram lançados nos cinemas japoneses: <strong>Overlord: The Undead King</strong> (25 de fevereiro de 2017) e <strong>Overlord: The Dark Warrior</strong> (11 de março de 2017). Resumem os 13 episódios da primeira temporada com cenas adicionais. São opcionais para quem já assistiu à série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Film className="h-7 w-7 text-otaku" />
          Filme Canônico: The Sacred Kingdom — Setembro de 2024
        </h2>
        <p>
          <strong>Overlord: The Sacred Kingdom</strong> estreou no Japão em <strong>20 de setembro de 2024</strong> (sessões IMAX a partir de 13 de setembro). O filme de <strong>135 minutos</strong> adapta os volumes 12 e 13 da light novel — os que a T4 havia pulado. A trama: o <strong>Imperador Demoníaco Jaldabaoth</strong> (na verdade Demiurge disfarçado, a mando de Ainz) invade o Reino Sagrado com um exército de demi-humanos. Desesperado, o reino recorre ao próprio Sorcerer Kingdom por ajuda — ou seja, a Ainz, que fingirá salvar o reino que ele mesmo orquestrou o ataque. O filme arrecadou <strong>US$ 1,16 milhão</strong> em seu fim de semana de abertura norte-americano via Sony Pictures em novembro de 2024 (lançamento IMAX limitado). Chegou ao <strong>Crunchyroll</strong> globalmente em <strong>abril de 2025</strong>. Os eventos do filme ocorrem entre os episódios 7 e 8 da T4.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Temporada 5 — O Que Sabemos
        </h2>
        <p>
          A <strong>5ª temporada</strong> não foi oficialmente anunciada pela Madhouse ou Kadokawa até março de 2026, mas há fortes indícios de que está em desenvolvimento. Em setembro de 2024, o leaker SugoiLite relatou que a T5 havia recebido luz verde internamente. Em <strong>fevereiro de 2025</strong>, o produtor Kazufumi Kikushima disse à Anime News Network que "a equipe ainda quer levar a história de Ainz adiante". O site oficial exibe um banner <em>"To Be Continued"</em>, e a Crunchyroll listou Overlord em seu lineup de "em breve".
        </p>
        <p>
          O principal obstáculo é o <strong>material-fonte</strong>: os volumes 17 e 18 da light novel ainda não foram publicados. Maruyama confirmou no afterword do vol. 16 (julho de 2022) que a série encerrará no vol. 18, e prometeu lançar os dois volumes finais em intervalos próximos. A T5 adaptará os <strong>volumes 15 e 16</strong> (Arco Half-Elf God-kin — Ainz visita o Reino Élfico com Aura e Mare). A estimativa mais realista para estreia é <strong>final de 2026 a 2027</strong>.
        </p>
        <div className="not-prose bg-card border border-border rounded-xl p-4 my-4">
          <p className="font-bold mb-2 text-sm">🎙️ Elenco Confirmado para T5</p>
          <div className="not-prose grid sm:grid-cols-2 gap-2 text-sm">
            {[
              ["Satoshi Hino","Ainz Ooal Gown (JP)"],
              ["Yumi Hara","Albedo (JP)"],
              ["Kenta Miyake","Cocytus (confirmado em fan meet 2025)"],
              ["Masayuki Kato","Demiurge (teased em programa de rádio 2025)"],
              ["Chris Guerrero","Ainz (EN dub — confirmado SDCC 2025)"],
              ["Elizabeth Maxwell","Albedo (EN dub — confirmado SDCC 2025)"],
            ].map(([n,r]) => (
              <div key={n} className="bg-muted/50 rounded-lg p-2">
                <span className="font-bold">{n}</span>
                <span className="text-muted-foreground"> — {r}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Globe className="h-7 w-7 text-otaku" />
          Linha do Tempo Completa
        </h2>
        <div className="not-prose bg-card border border-border rounded-xl p-5 my-4">
          <div className="space-y-2.5 text-sm">
            {[
              ["2010","Web novel em Arcadia (depois no Shōsetsuka ni Narō, 2012)"],
              ["Jul 2012","LN vol. 1 — Enterbrain/Kadokawa (il. so-bin)"],
              ["Nov 2014","Mangá em Comp Ace — Satoshi Ōshio / Hugin Miyama"],
              ["Mai 2016","Yen Press — vol. 1 em inglês"],
              ["Jul 2015","Anime T1 estreia (Madhouse, 13 eps) — OP: \"Clattanoia\""],
              ["Fev/Mar 2017","Filmes de compilação T1 (The Undead King + The Dark Warrior)"],
              ["Jan 2018","Anime T2 — 13 eps — OP: \"Go Cry Go\""],
              ["Jul 2018","Anime T3 — 13 eps — OP: \"Voracity\""],
              ["Jul 2022","Anime T4 — 13 eps — OP: \"hollow shadow\""],
              ["Jul 2022","LN vol. 16 — último vol. publicado; T18 confirmado como final"],
              ["Mai 2023","Mangá principal encerrado em Comp Ace"],
              ["Set 2024","Filme: The Sacred Kingdom — estreia Japão (IMAX, 135 min)"],
              ["Nov 2024","Filme: The Sacred Kingdom — EUA (IMAX limitado, Sony Pictures)"],
              ["Nov 2025","10º Aniversário da franquia — evento teatral no Japão"],
              ["Abr 2025","Filme: The Sacred Kingdom — Crunchyroll (streaming global)"],
              ["Abr 2024","Overlord: New World mangá inicia em Comp Ace"],
              ["2026–2027","Anime T5 (estimativa — aguardando LN vols. 17 e 18)"],
            ].map(([d,e]) => (
              <div key={d} className="flex gap-3">
                <span className="text-otaku font-bold w-24 shrink-0">{d}</span>
                <span className="text-muted-foreground">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RelatedPosts currentSlug="overlord-guia-completo-temporadas-ainz" />
      <CommentSection postId="overlord-guia-completo-temporadas-ainz" />
    </article>
  );
};

export default OverlordGuiaCompleto;