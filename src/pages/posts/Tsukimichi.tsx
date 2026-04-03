import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Star, Tv, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/tsukimichi.webp";

const Tsukimichi = () => {
  useEffect(() => {
    trackArticleRead("tsukimichi-moonlit-fantasy-guia-completo", "Tsukimichi Moonlit Fantasy: Guia Completo — Temporadas e Personagens", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Fantasia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Tsukimichi: Moonlit Fantasy — Guia Completo de Temporadas, Personagens e o Universo de Makoto
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Tsukimichi Moonlit Fantasy — Makoto Misumi e suas companheiras" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Tsuki ga Michibiku Isekai Douchuu</strong> — conhecido como <strong>Tsukimichi: Moonlit Fantasy</strong> — é um isekai que subverte o gênero de forma inteligente: o protagonista não é considerado o herói escolhido, mas sim um pária rejeitado pela própria deusa do mundo. Com duas temporadas no ar e uma terceira confirmada, a série combina comédia, ação e world-building consistente em um dos isekais mais bem construídos da última década.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Web Novel, Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Kei Azumi</strong> e publicada originalmente na plataforma <em>Shōsetsuka ni Narō</em> em 2012. Em 2016, a série migrou para a <strong>AlphaPolis</strong>, que a publica em light novel desde <strong>maio de 2013</strong>, com ilustrações de <strong>Mitsuaki Matsumoto</strong>. A <strong>Hanashi Media</strong> licenciou a light novel para o inglês. O mangá, desenhado por <strong>Kotora Kino</strong>, é serializado no site manga da AlphaPolis desde 2015 e distribuído digitalmente em inglês pela <strong>Alpha Manga</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Universo: O Mundo de Elysion e o Pária Mais Poderoso
        </h2>
        <p>
          Os pais de <strong>Makoto Misumi</strong> eram habitantes do mundo fantástico de <strong>Elysion</strong> que fugiram para o Japão. Em decorrência de um contrato feito por seus pais com uma Deusa, Makoto é convocado de volta para Elysion para servir como "Herói". Ao chegar, porém, a Deusa o rejeita por considerá-lo feio demais para seus padrões, revoga seu título de herói e o proíbe de interagir com humanos — lançando-o para as <strong>regiões mais remotas e selvagens do mundo</strong>.
        </p>
        <p>
          O detalhe irônico: enquanto no Japão Makoto era um praticante dedicado de <strong>kyūdō (arco e flecha japonês)</strong>, sem nenhum poder especial — em Elysion, onde as pessoas têm naturalmente baixos níveis de mana, Makoto possui uma quantidade astronômica de mana. A Deusa transferiu a maior parte da mana que ele receberia como "herói" para os dois humanos reais que escolheu, mas mesmo assim o excedente que ficou com Makoto é absurdamente superior ao de qualquer ser mortal.
        </p>
        <p>
          Nas regiões selvagens, Makoto conhece dragões, aranhas gigantes, orcs e anões — raças não-humanas que o aceitam e se tornam sua família. Ele funda uma <strong>sociedade própria nas Wastelands</strong>, um território neutro onde humanos e não-humanos convivem, enquanto aprende a navegar a política complexa de Elysion.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 1 — C2C (2021)
        </h2>
        <p>
          A primeira temporada foi produzida pelo estúdio <strong>C2C</strong>, dirigida por <strong>Shinji Ishihira</strong>, com roteiro de <strong>Kenta Ihara</strong>, design de personagens de <strong>Yukie Suzuki</strong> e música de <strong>Yasuharu Takanashi</strong>. Exibida de <strong>7 de julho a 22 de setembro de 2021</strong> na Tokyo MX e outras emissoras. Com <strong>12 episódios</strong>, a temporada apresenta Makoto, o mundo de Elysion, e o encontro com seus principais companheiros.
        </p>
        <p>
          A abertura é <strong>"Gambler"</strong> performada por <strong>Natsuki Hanae</strong> (VA de Makoto) e o encerramento é <strong>"Beautiful Dreamer"</strong> pelo <strong>Ezoshika Gourmet Club</strong>. Ao final da temporada, uma segunda temporada foi anunciada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Temporada 2 — J.C.Staff (2024)
        </h2>
        <p>
          A segunda temporada substituiu o estúdio C2C pelo <strong>J.C.Staff</strong>, mantendo o elenco principal. Com <strong>25 episódios</strong> divididos em dois cursos, foi ao ar de <strong>8 de janeiro a 24 de junho de 2024</strong>. As músicas temáticas foram renovadas: primeiro curso com abertura <strong>"Utopia"</strong> por <strong>Keina Suda</strong> e encerramento <strong>"My Factor"</strong> por <strong>Kent Itō</strong>; segundo curso com abertura <strong>"Reversal"</strong> por <strong>syudou</strong> e encerramento <strong>"Jōshiki Hazure Human"</strong> por <strong>Kaori Maeda</strong>. Ao final da T2, uma <strong>terceira temporada foi anunciada</strong>.
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Temporada</TableHead><TableHead>Estúdio</TableHead><TableHead>Eps</TableHead><TableHead>Período</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["T1","C2C","12","7 jul – 22 set 2021"],
                ["T2","J.C.Staff","25","8 jan – 24 jun 2024"],
                ["T3","A confirmar","—","Anunciada após T2"],
              ].map(([t,s,e,p]) => (
                <TableRow key={t}>
                  <TableCell className="font-medium">{t}</TableCell>
                  <TableCell>{s}</TableCell>
                  <TableCell>{e}</TableCell>
                  <TableCell>{p}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Makoto Misumi (深澄真)", va:"Natsuki Hanae", desc:"Protagonista. Praticante de kyūdō do Japão, convocado para Elysion como herói e descartado pela Deusa. Possui quantidade absurda de mana mas dificuldade em controlá-la com precisão. Gentil, determinado e inadvertidamente devastador — a maioria dos seus ataques de magia gera destruição em escala geológica."},
            {name:"Tomoe (巴)", va:"Ayane Sakura", desc:"Uma das primeiras companheiras de Makoto — um dragão fêmea de imenso poder que faz um contrato com ele. Fascínio extremo pela cultura japonesa (especialmente samurai), que aprende através dos fragmentos de memória de Makoto. Guerreira formidável e leal."},
            {name:"Mio (澪)", va:"Akari Kitō", desc:"Uma Aranha Calamitosa — criatura de destruição que aterrorizava as Wastelands. Tornada companheira de Makoto após um confronto. Obcecada com culinária e com o próprio Makoto. Seu poder de nível calamitoso é agora direcionado para protegê-lo."},
            {name:"Emma", va:"Rina Hidaka", desc:"Uma anã que se torna parte da comunidade das Wastelands. Representa as raças não-humanas que encontram em Makoto um líder que as respeita."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Tomoe ou Mio? Qual é a sua favorita? 🌙</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="tsukimichi-moonlit-fantasy-guia-completo" />
      <CommentSection postId="tsukimichi-moonlit-fantasy-guia-completo" postTitle="Tsukimichi: Moonlit Fantasy — Guia Completo" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default Tsukimichi;
