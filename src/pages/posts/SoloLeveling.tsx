import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Star, Tv, Film, Globe, Swords } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/solo-leveling.webp";

const SoloLeveling = () => {
  useEffect(() => {
    trackArticleRead("solo-leveling-guia-completo-temporadas", "Solo Leveling: Guia Completo — Temporadas, Filme e Universo", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Manhwa</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Solo Leveling: Guia Completo — Temporadas, Filme, Personagens e o Monarca das Sombras
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />20 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Solo Leveling — Sung Jinwoo o Monarca das Sombras" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Solo Leveling</strong> (나 혼자만 레벨업, <em>Na Honjaman Level Up</em>) é o manhwa sul-coreano mais impactante da história do anime. Adaptado pelo estúdio <strong>A-1 Pictures</strong> e premiado como <strong>Anime do Ano no Crunchyroll Anime Awards 2025</strong> com mais de 50 milhões de votos, a série transformou Sung Jinwoo em um fenômeno cultural global. Duas temporadas, um filme compilação e um universo em expansão definem a franquia mais esperada da última década.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Web Novel e Manhwa Sul-Coreano
        </h2>
        <p>
          Solo Leveling começou como uma <strong>web novel escrita por Chugong</strong>, serializada na plataforma sul-coreana <strong>KakaoPage</strong> a partir de <strong>25 de julho de 2016</strong>. A versão em light novel foi publicada pela <strong>D&C Media</strong> sob o selo Papyrus desde <strong>4 de novembro de 2016</strong>, com tradução para o inglês pela <strong>Yen Press</strong>.
        </p>
        <p>
          O manhwa (história em quadrinhos) foi serializado na KakaoPage a partir de <strong>4 de março de 2018</strong>, com arte de <strong>Jang Sung-rak (DUBU)</strong> — artista que faleceu em 2022 e deixou um legado imenso na obra. A primeira temporada do manhwa encerrou em <strong>19 de março de 2020</strong> e a segunda em <strong>dezembro de 2021</strong>. A Yen Press licenciou o manhwa para o inglês, e a D&C Media publicou seus capítulos em <strong>15 volumes</strong> (até outubro de 2025).
        </p>
        <p>
          Em julho de 2025, a <strong>Netflix</strong> anunciou uma série live-action com o ator <strong>Byeon Woo-seok</strong> como Sung Jin-woo, produzida pela Kakao Entertainment e Sanai Pictures.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          O Universo: Portões, Caçadores e o Sistema
        </h2>
        <p>
          A história se passa em um mundo onde, <strong>dez anos antes dos eventos da série</strong>, surgiram passagens chamadas <strong>"Portões" (Gates)</strong> que conectam a realidade a uma dimensão paralela habitada por monstros. Pessoas que desenvolveram poderes sobrenaturais passaram a ser chamadas de <strong>Caçadores (Hunters)</strong>, responsáveis por entrar nos portões e eliminar os monstros para evitar catástrofes.
        </p>
        <p>
          Os Caçadores são classificados em ranks de <strong>E a S</strong>, sendo S o mais poderoso. A grande maioria dos Caçadores tem rank fixo — nenhum ser humano havia demonstrado a capacidade de evoluir sozinho. Até Sung Jinwoo.
        </p>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <h3 className="font-bold mb-3 text-lg">🎮 O Sistema — a Mecânica Central</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Após sobreviver ao "Double Dungeon" (Templo da Dupla Masmorra), Sung Jinwoo recebe acesso a um <strong>sistema de progressão semelhante a um RPG</strong> — uma interface visível apenas para ele que permite ganhar experiência, subir de nível, receber missões e melhorar atributos. É o único ser humano capaz de evoluir sem limite. O sistema o conecta ao poder do <strong>Monarca das Sombras (Shadow Monarch)</strong>, a entidade mais poderosa entre os Monarcas — seres divinos de uma guerra cósmica anterior à humanidade.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Ore dake Level Up na Ken (2024)
        </h2>
        <p>
          A primeira temporada foi produzida pela <strong>A-1 Pictures</strong> e dirigida por <strong>Shunsuke Nakashige</strong>, com roteiros de <strong>Noboru Kimura</strong>, design de personagens de <strong>Tomoko Sudo</strong> e música de <strong>Hiroyuki Sawano</strong>. Originalmente prevista para 2023, foi adiada e estreou em <strong>7 de janeiro de 2024</strong> na Tokyo MX e outras emissoras. Antes do lançamento oficial, os primeiros episódios foram exibidos em dezembro de 2023 em Tóquio, Seul, Los Angeles, Índia e Europa. A <strong>Crunchyroll</strong> transmitiu a série mundialmente (exceto Ásia Oriental). Foram <strong>12 episódios</strong>, encerrados em <strong>31 de março de 2024</strong>.
        </p>
        <p>
          A abertura é <strong>"Level"</strong>, performada por <strong>SawanoHiroyuki[nZk] e Tomorrow X Together</strong>, e o encerramento é <strong>"Request"</strong>, por <strong>Krage</strong>. A trilha sonora foi lançada no Japão pela Aniplex e nos EUA pela Milan Records em março de 2024.
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Arco</TableHead><TableHead>Episódios</TableHead><TableHead>Resumo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["D-Rank Dungeon Arc","1–2","Sung Jinwoo é o Caçador mais fraco — rank E, chamado 'arma mais fraca da humanidade'. Realiza dungeons de baixo rank para pagar as contas médicas da mãe."],
                ["Double Dungeon Arc","3–5","Uma dungeon rank E revela um segundo nível com monstros rank S. A maioria dos Caçadores morre. Jinwoo sobrevive e recebe o Sistema após aceitar um 'Jogador Especial'."],
                ["Job Change Arc","6–12","Jinwoo evolui rapidamente usando missões diárias do Sistema. Domina o poder do Necromancer/Invocador de Sombras, criando um exército de guerreiros-sombra. A temporada termina com a Mudança de Classe."],
              ].map(([a,e,r]) => (
                <TableRow key={a}>
                  <TableCell className="font-medium">{a}</TableCell>
                  <TableCell className="text-sm">{e}</TableCell>
                  <TableCell className="text-sm">{r}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-otaku" />
          Filme: Solo Leveling — ReAwakening (2024)
        </h2>
        <p>
          Um filme compilação da primeira temporada, intitulado <strong>Solo Leveling: ReAwakening</strong>, foi exibido nos cinemas japoneses de <strong>29 de novembro a 12 de dezembro de 2024</strong>. O filme inclui um recap da jornada de Jinwoo na T1 e os <strong>dois primeiros episódios da segunda temporada</strong> com orçamento cinematográfico, funcionando como prévia premium para os fãs. O ReAwakening foi uma estratégia criativa para preparar a audiência para a Temporada 2.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Arise from the Shadow (2025)
        </h2>
        <p>
          A segunda temporada, subtitulada <strong>"Arise from the Shadow"</strong>, foi anunciada logo após o final da T1. Produzida novamente pela <strong>A-1 Pictures</strong>, foi ao ar de <strong>5 de janeiro a 30 de março de 2025</strong>, com <strong>13 episódios</strong>. A abertura é <strong>"Reawaker"</strong>, por <strong>Lisa (feat. Felix do Stray Kids)</strong>, e o encerramento é <strong>"Un-Apex"</strong>, por <strong>TK from Ling Tosite Sigure</strong>.
        </p>
        <p>
          A temporada segue Jinwoo logo após a Mudança de Classe, agora abraçando seus poderes como <strong>Monarca das Sombras</strong>. Enquanto mantém seu nível real em segredo, um Caçador misterioso que havia desaparecido por quase dez anos retorna com um aviso ominoso sobre uma catástrofe iminente. A temporada culmina na <strong>Batalha de Jeju Island</strong>, onde Jinwoo alcança o Nível 100 e é reconhecido como poder de <em>nível nacional</em> — acima de qualquer ranking oficial de Caçador. Os Monarcas do Gelo e da Besta aparecem nas cenas finais, sinalizando a grande guerra cósmica que está por vir.
        </p>

        <div className="not-prose my-6 p-5 bg-otaku/10 border border-otaku/30 rounded-xl">
          <h3 className="font-bold mb-2">🏆 Premiações</h3>
          <p className="text-sm text-muted-foreground mb-0">
            No <strong>Crunchyroll Anime Awards 2025</strong>, Solo Leveling levou <strong>9 prêmios</strong>, incluindo <strong>Anime do Ano</strong>, <strong>Melhor Ação</strong> e <strong>Melhor Personagem Principal</strong> (Sung Jinwoo), com mais de 50 milhões de votos acumulados globalmente.
          </p>
        </div>
      <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {
              name: "Sung Jin-woo (성진우)",
              jp: "Taito Ban", en: "Aleks Le",
              desc: "Protagonista. Começa como o Caçador rank E mais fraco da humanidade, constantemente arriscando a vida em dungeons para pagar as contas médicas da mãe. Após o Double Dungeon, recebe o Sistema e começa uma evolução sem precedentes. Frio, calculista e estratégico, mas profundamente leal à família. Torna-se o Monarca das Sombras — o ser mais poderoso da Terra.",
            },
            {
              name: "Cha Hae-in (차해인)",
              jp: "Reina Ueda", en: "Cherami Leigh",
              desc: "Única Caçadora rank S da Coreia do Sul e vice-líder do Healer's Guild. Possui sensibilidade olfativa ao mana — a maioria dos Caçadores tem um cheiro desagradável para ela, mas o mana de Jinwoo tem um aroma incomum que a intriga. Habilidosa com a espada, ela se torna progressivamente importante na narrativa da T2.",
            },
            {
              name: "Go Gun-hee (고건희)",
              jp: "Tessho Genda", en: "Mark Stoddard",
              desc: "Presidente da Associação de Caçadores da Coreia do Sul. Um dos poucos Caçadores rank S da época anterior. Serve como figura paterna e mentor moral para Jinwoo, compreendendo antes de qualquer outro a magnitude do potencial do protagonista.",
            },
            {
              name: "Sung Il-hwan (성일환)",
              jp: "Takayuki Sugo", en: "Philip Weber",
              desc: "Pai de Jinwoo, dado como desaparecido em uma dungeon por anos. Retorna na T2 completamente transformado — seu retorno traz revelações cruciais sobre os Monarcas e a guerra cósmica que se aproxima.",
            },
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">JP: {p.jp}</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">EN: {p.en}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-otaku" />
          Sistema de Poderes: Monarcas e Governantes
        </h2>
        <p>
          O universo expandido revela uma guerra cósmica entre duas forças opostas: os <strong>Monarcas</strong> (fragmentos do Governante das Trevas) e os <strong>Governantes / Rulers</strong> (servos da Luz). Cada Monarca encarna um domínio: Gelo, Besta, Destruição, Sangue, Insetos, entre outros. O <strong>Monarca das Sombras</strong> é o mais poderoso de todos — e Jinwoo é seu herdeiro escolhido pelo Sistema.
        </p>
        <p>
          O poder fundamental de Jinwoo é <strong>Extrair e Surgir (Extraction and Arise)</strong>: ao derrotar inimigos, ele pode extrair suas sombras e criar soldados-sombra permanentes que obedecem sua vontade. Soldados notáveis incluem <strong>Igris</strong> (cavaleiro sombra), <strong>Beru</strong> (rei formiga) e <strong>Tusk</strong> (Rei Orc). A habilidade <strong>"Ruler's Authority"</strong> permite telecinesia e controle de campo de batalha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Onde Assistir e o Futuro da Série
        </h2>
        <p>
          Ambas as temporadas estão disponíveis integralmente na <strong>Crunchyroll</strong> com legendas e dublagem. A T1 tem 12 episódios (jan–mar 2024) e a T2 tem 13 episódios (jan–mar 2025). O filme <strong>ReAwakening</strong> também está disponível na plataforma.
        </p>
        <p>
          Quanto ao futuro: como de março de 2026, <strong>nenhuma Temporada 3 foi oficialmente confirmada</strong>, mas o criador Chugong sinalizou um possível filme. O spin-off em manhwa <strong>Solo Leveling: Ragnarok</strong>, focado no filho de Jinwoo chamado <strong>Sung Su-ho</strong>, está em andamento desde julho de 2024 — e um jogo mobile RPG, <strong>Solo Leveling: Arise</strong>, foi lançado em maio de 2024 pela Netmarble.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Arise! Qual foi sua cena favorita? ⚔️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="solo-leveling-guia-completo-temporadas" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="solo-leveling-guia-completo-temporadas" postTitle="Solo Leveling: Guia Completo — Temporadas, Filme e o Monarca das Sombras" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default SoloLeveling;
