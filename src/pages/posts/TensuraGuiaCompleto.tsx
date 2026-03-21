import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Film, BookOpen, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tensura-guia-completo.webp";

const TensuraGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead("tensura-guia-completo-temporadas-filmes", "That Time I Got Reincarnated as a Slime: Guia Completo de Temporadas e Filmes", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" portalPath="/otaku/tensura" portalLabel="Painel TenSura" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          That Time I Got Reincarnated as a Slime: Guia Completo de Temporadas e Filmes
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="That Time I Got Reincarnated as a Slime" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Tensei Shitara Slime Datta Ken</strong> — ou simplesmente <strong>TenSura</strong> — é um dos isekai mais amados dos últimos anos. A história de Satoru Mikami, um salarymanreencarnado como uma gosma azul em outro mundo, conquistou milhões de fãs com seu equilíbrio único entre comédia, política e batalhas épicas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A história foi originalmente criada por <strong>Fuse</strong> e publicada na plataforma de web novels Shōsetsuka ni Narō entre <strong>2013 e 2016</strong>, acumulando mais de 400 milhões de visualizações. A Micro Magazine adquiriu os direitos e publicou a versão em light novel a partir de <strong>2014</strong>, com ilustrações de <strong>Mitz Vah</strong>. A série foi encerrada com o <strong>volume 23</strong>, lançado em novembro de 2024.
        </p>
        <p>
          O mangá, desenhado por <strong>Taiki Kawakami</strong>, é publicado no <strong>Monthly Shōnen Sirius</strong> desde 2015 e está em andamento. Existe também uma série de spin-offs, incluindo <em>The Slime Diaries</em> (fatias de vida no cotidiano de Tempest) e outros mangás focados em personagens secundários como Clayman e Gobta.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — Outubro de 2018
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-4">
            <div><span className="text-muted-foreground block">Estreia</span><strong>1 de out, 2018</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>24 + 1 OAD</strong></div>
            <div><span className="text-muted-foreground block">Estúdio</span><strong>8-Bit</strong></div>
            <div><span className="text-muted-foreground block">Diretor</span><strong>Yasuhito Kikuchi</strong></div>
          </div>
        </div>
        <p>
          A primeira temporada adapta os volumes 1 a 5 da light novel. Satoru Mikami, 37 anos, é esfaqueado aleatoriamente em Tóquio e reencarna em um mundo de fantasia como uma gosma azul. Batizado de <strong>Rimuru Tempest</strong> pela Tempestade de Aço (o dragonte Veldora), ele descobre que sua forma de gosma lhe concede habilidades únicas — como a capacidade de absorver e copiar qualquer habilidade que encontra.
        </p>
        <p>
          Ao longo da temporada, Rimuru liberta os goblin, encontra os ogres (futuros Kijin como Benimaru e Shion), enfrenta os Orcs liderados pelo Orc Lord, e começa a construir a Federação Jura-Tempest, uma nação onde monstros e humanos podem coexistir.
        </p>

        <div className="bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-6">
          <p className="text-sm font-bold text-otaku mb-1">✨ Momentos icônicos da T1</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Rimuru absorve Veldora e lhe dá um nome</li>
            <li>• A batalha contra o Orc Lord — revelação do poder de Rimuru</li>
            <li>• A evolução dos Goblin após receber nomes</li>
            <li>• Rimuru assume sua forma humana pela primeira vez</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — Janeiro a Setembro de 2021
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-4">
            <div><span className="text-muted-foreground block">Parte 1</span><strong>Jan–Apr, 2021</strong></div>
            <div><span className="text-muted-foreground block">Parte 2</span><strong>Jul–Set, 2021</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>24 (12+12)</strong></div>
            <div><span className="text-muted-foreground block">Arcos</span><strong>Milim, Fanatismo</strong></div>
          </div>
        </div>
        <p>
          A segunda temporada foi dividida em dois cursos. A <strong>Parte 1</strong> (janeiro a abril de 2021) adapta a conspiração de Clayman e a morte de Shion, um dos momentos mais marcantes da série — Rimuru, movido pela raiva e dor, evolui para <strong>Demon Lord</strong> ao ressuscitar seus súditos caídos. A <strong>Parte 2</strong> (julho a setembro de 2021) apresenta a guerra política entre os Demon Lords no Tempest e os preparativos para o grande confronto na Walpurgis.
        </p>
        <p>
          Entre as duas partes, o spin-off <strong>The Slime Diaries</strong> (Tensura Nikki) foi ao ar de abril a junho de 2021, mostrando o cotidiano leve e cômico de Tempest — um contraponto delicioso à tensão da T2.
        </p>

        <div className="bg-otaku/10 border border-otaku/30 rounded-xl p-4 my-6">
          <p className="text-sm font-bold text-otaku mb-1">⚡ Momentos icônicos da T2</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• A morte de Shion e a transformação de Rimuru em Demon Lord</li>
            <li>• Rimuru devora 10.000 soldados humanos — "Predator"</li>
            <li>• A batalha de Walpurgis e a derrota de Clayman</li>
            <li>• Milim revela sua verdadeira forma como Dragon Nova</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 3 — Abril a Setembro de 2024
        </h2>
        <div className="bg-card border border-border rounded-xl p-5 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-4">
            <div><span className="text-muted-foreground block">Estreia</span><strong>5 de abr, 2024</strong></div>
            <div><span className="text-muted-foreground block">Final</span><strong>27 de set, 2024</strong></div>
            <div><span className="text-muted-foreground block">Episódios</span><strong>24 (2 cursos)</strong></div>
            <div><span className="text-muted-foreground block">Rede</span><strong>NTV / BS11</strong></div>
          </div>
        </div>
        <p>
          A terceira temporada estreou no bloco <em>Friday Anime Night</em> da Nippon TV em 5 de abril de 2024 e apresenta a maturidade política de Rimuru como Demon Lord estabelecido. O arco foca no <strong>Festival do Fundador</strong>, nas relações diplomáticas com diferentes nações e no avanço da Federação Jura-Tempest como potência mundial. O episódio 48.5 (especial de recapitulação) foi ao ar uma semana antes do início da temporada, em março de 2024.
        </p>
        <p>
          Ao final da T3, foi anunciada a <strong>4ª temporada</strong> e um <strong>segundo filme</strong>, confirmando que a franquia continua em plena expansão.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-otaku" />
          Filme 1: Scarlet Bond — Novembro de 2022
        </h2>
        <p>
          <strong>That Time I Got Reincarnated as a Slime: The Movie – Scarlet Bond</strong> (Guren no Kizuna-hen) estreou no Japão em <strong>25 de novembro de 2022</strong>. A história original se passa em Raja, um reino a oeste de Tempest que entrou em decadência após suas minas de ouro envenenarem o lago local. A rainha <strong>Towa</strong> usa a magia de uma tiara ancestral para proteger seu povo, mas o feitiço está consumindo sua vida.
        </p>
        <p>
          O filme introduz <strong>Hiiro</strong>, um sobrevivente Ogre que afirma ser o irmão mais velho de Benimaru. A narrativa original cria um arco emocional focado em lealdade, sacrifício e a força dos laços forjados por Rimuru com seus aliados.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-otaku" />
          Filme 2: Tears of the Azure Sea — Fevereiro de 2026
        </h2>
        <p>
          <strong>Gekijō-ban Tensei Shitara Slime Datta Ken: Sōkai no Namida-hen</strong> (Tears of the Blue Sea Arc) estreou no Japão em <strong>27 de fevereiro de 2026</strong>. O segundo filme foi anunciado junto com a 4ª temporada em setembro de 2024. A animação também é produzida pelo estúdio 8-Bit.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Temporada 4 — Abril de 2026 (em breve)
        </h2>
        <p>
          A <strong>4ª temporada</strong> foi confirmada com estreia em <strong>3 de abril de 2026</strong>. O detalhe mais impressionante: a temporada terá <strong>5 cursos no total</strong>, com os dois primeiros sendo exibidos consecutivamente — algo incomum para a indústria. Os antagionistas anunciados são <strong>Granbell Rosso</strong>, ex-Herói e chefe dos Cinco Anciões do Reino de Siltrosso, e sua neta <strong>Mariabell Rosso</strong>, que veem a ascensão de Rimuru como uma ameaça existencial.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 my-6">
          <p className="font-bold mb-3">📅 Linha do Tempo Completa</p>
          <div className="space-y-2 text-sm">
            {[
              ["Out 2018", "Temporada 1 estreia (Tokyo MX)"],
              ["Jan 2021", "Temporada 2 — Parte 1"],
              ["Abr 2021", "Slime Diaries (spin-off)"],
              ["Jul 2021", "Temporada 2 — Parte 2"],
              ["Nov 2022", "Filme 1: Scarlet Bond"],
              ["Nov 2023", "ONA: Coleus' Dream (3 episódios)"],
              ["Abr 2024", "Temporada 3 (2 cursos)"],
              ["Fev 2026", "Filme 2: Tears of the Azure Sea"],
              ["Abr 2026", "Temporada 4 (5 cursos)"],
            ].map(([date, event]) => (
              <div key={date} className="flex gap-3">
                <span className="text-otaku font-bold w-24 shrink-0">{date}</span>
                <span className="text-muted-foreground">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RelatedPosts currentSlug="tensura-guia-completo-temporadas-filmes" />
      <CommentSection postSlug="tensura-guia-completo-temporadas-filmes" />
    </article>
  );
};

export default TensuraGuiaCompleto;
