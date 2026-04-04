import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Star, Zap, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/temporada-animes-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const TemporadaAnimesAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("temporada-animes-abril-2026", "Temporada de Animes Abril 2026: Guia Completo da Primavera", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Anime · Primavera 2026 · Guia</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Temporada de Animes Abril 2026: Guia Completo da Primavera — Re:ZERO, One Piece, Slime e Mais
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Temporada Animes Abril Primavera 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A temporada de Primavera 2026 (abril–junho) é uma das mais carregadas dos últimos anos: <strong>mais de 60 estreias confirmadas</strong>, com gigantes como Re:ZERO, One Piece, Slime e Dorohedoro retornando ao mesmo tempo que grandes estreias como Witch Hat Atelier chegam pela primeira vez. No Brasil, tudo se passa no outono — clima perfeito para maratonar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Calendário dos Destaques
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Data</th>
              <th className="text-left py-3 px-4">Anime</th>
              <th className="text-left py-3 px-4">Onde Assistir</th>
            </tr></thead>
            <tbody>
              {[
                ["1º de abril", "Dorohedoro 2ª Temporada (MAPPA)", "Crunchyroll"],
                ["1º de abril", "Classroom of the Elite 4ª Temporada", "Crunchyroll"],
                ["1º de abril", "My Hero Academia: More (episódio final especial)", "Crunchyroll"],
                ["2 de abril", "Dr. Stone: Science Future (3º cour — temporada final)", "Crunchyroll"],
                ["3 de abril", "Tensei Shitara Slime Datta Ken 4ª Temporada", "Crunchyroll"],
                ["4 de abril", "Daemons of the Shadow Realm", "A confirmar"],
                ["5 de abril", "One Piece — Arco Elbaf (formato sazonal)", "Crunchyroll / Netflix"],
                ["7 de abril", "Witch Hat Atelier (BUG FILMS)", "Crunchyroll"],
                ["8 de abril", "Re:ZERO 4ª Temporada — Loss Arc (White Fox)", "Crunchyroll"],
              ].map(([d, a, o]) => (
                <tr key={a} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku whitespace-nowrap">{d}</td>
                  <td className="py-3 px-4">{a}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Os Grandes Retornos
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">Re:ZERO − 4ª Temporada (8 de abril)</h3>
        <p>
          O anime mais aguardado da temporada segundo pesquisa do Dengeki Online com fãs japoneses. 19 episódios divididos em dois arcos: <strong>Loss Arc</strong> (11 eps, começa em 8/04) e <strong>Recapture Arc</strong> (8 eps, a partir de 12/08). O estúdio White Fox retorna com o diretor Masahiro Shinohara. Adapta o Arco 6 da light novel, levando Subaru à Torre de Vigia de Plêiades em busca de Shaula (dublada por Fairouz Ai). Exibe toda quarta-feira na Crunchyroll. É o 10º aniversário da franquia.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">One Piece — Arco Elbaf (5 de abril)</h3>
        <p>
          Pela primeira vez em 25 anos, One Piece adota <strong>formato sazonal</strong> — temporadas de até 26 episódios por ano, com cada episódio correspondendo a um capítulo do mangá de Eiichiro Oda. O Arco Elbaf, a terra dos gigantes, é considerado pelos leitores um dos mais aguardados de toda a saga — as primeiras menções a Elbaf foram feitas no arco Little Garden, há mais de duas décadas. Disponível na Crunchyroll (1 semana antes) e na Netflix.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Tensei Shitara Slime Datta Ken 4ª Temporada (3 de abril)</h3>
        <p>
          Rimuru Tempest retorna com a 4ª temporada, focada na consolidação política de Tempest e na aliança entre humanos e monstros — um dos arcos mais estratégicos da série. Em abril, o filme <em>Lágrimas do Mar Azul-Celeste</em> também chega aos cinemas brasileiros.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Dorohedoro 2ª Temporada (1º de abril)</h3>
        <p>
          Após anos de espera, o mundo sombrio e bizarro de Caiman e Nikaido retorna no MAPPA (Chainsaw Man, Jujutsu Kaisen). Dirigido por Yuichiro Hayashi com roteiro de Hiroshi Seko (Vinland Saga, Mob Psycho 100), a 2ª temporada adapta arcos mais profundos do mangá de Q Hayashida. Um dos retornos mais celebrados pelos fãs de narrativas diferentes.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Dr. Stone: Science Future — 3º Cour (2 de abril)</h3>
        <p>
          O arco final de Dr. Stone chega como o 3º cour da 4ª e última temporada. O Reino da Ciência de Senku Ishigami coloca em prática o plano mais ambicioso: chegar à Lua para salvar a humanidade. Uma conclusão épica para uma das melhores séries de aventura científica dos últimos anos.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">My Hero Academia: More (1º de abril)</h3>
        <p>
          O episódio especial final de My Hero Academia chega encerrando a história de Izuku Midoriya e da Classe 1-A. Intitulado "More", o especial é um epílogo passado anos após o confronto final, reencontrando todos os personagens. Um adeus emocionante a uma das franquias mais populares da última década.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          As Grandes Estreias
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">Witch Hat Atelier (7 de abril)</h3>
        <p>
          Uma das adaptações mais aguardadas pelos leitores de mangá. Baseada na obra de Kamome Shirahama (publicada no Brasil pela Panini como "Atelier of Witch Hat"), a animação é produzida pelo estúdio <strong>BUG FILMS</strong> (Zom 100). Conta a história de Coco, uma garota que descobre que a magia existe e que é desenhada à mão — literalmente. A série sofreu um atraso proposital para melhorar a qualidade, o que aumentou ainda mais as expectativas.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Classroom of the Elite 4ª Temporada (1º de abril)</h3>
        <p>
          Kiyotaka Ayanokouji retorna para mais um ano de manipulação psicológica no Colégio Tokyo Koudo Ikusei. A série, conhecida por seus plot twists e jogos mentais entre estudantes, estreia nova temporada na Crunchyroll em simultâneo com o Japão.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Como Priorizar a Temporada
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { prioridade: "🔥 Imperdível", animes: "Re:ZERO S4, One Piece Elbaf, Witch Hat Atelier", desc: "Momentos históricos — arcos definitivos ou estreias de peso que a comunidade aguarda há anos." },
            { prioridade: "⭐ Muito Recomendado", animes: "Dorohedoro S2, Slime S4, Dr. Stone final", desc: "Grandes franquias em arcos decisivos. Fãs das séries não podem perder." },
            { prioridade: "👍 Vale Acompanhar", animes: "Classroom of the Elite S4, MHA: More", desc: "Continuações sólidas para quem já acompanha as séries." },
          ].map((item) => (
            <div key={item.prioridade} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-otaku">{item.prioridade}</span>
                <span className="text-xs text-muted-foreground">— {item.animes}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          A primavera 2026 é, por vários ângulos, uma das temporadas de anime mais densas e importantes dos últimos anos. Com o retorno de Re:ZERO celebrando 10 anos, a estreia histórica de Witch Hat Atelier, One Piece em novo formato e o fim de My Hero Academia — há material mais do que suficiente para meses de discussão nas comunidades.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual anime você mais está animado para a primavera 2026? 🌸</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="temporada-animes-abril-2026" />
      <CommentSection postId="temporada-animes-abril-2026" postTitle="Temporada de Animes Abril 2026: Guia Completo da Primavera" />
    </article>
  );
};

export default TemporadaAnimesAbril2026;
