import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/temporada-animes-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const SpringSeasonAnimes2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "spring-season-animes-abril-2026",
      "Spring Season 2026: Os 15 Melhores Animes de Abril para Não Perder",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Anime · Spring Season · Abril 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Spring Season 2026: Os 15 Melhores Animes de Abril para Não Perder
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />17 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Spring Season 2026 melhores animes abril" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A temporada de primavera de 2026 chegou com mais de <strong>66 novos animes e continuações</strong> — um dos maiores catálogos em anos. Entre retornos aguardados como One Piece (Elbaf), Re:ZERO T4, That Time I Got Reincarnated as a Slime T4 e Dr. STONE Final Season, e novidades como a adaptação de Hiromu Arakawa (autora de FMA) e o Witch Hat Atelier, não vai faltar conteúdo para os próximos meses. Organizamos os 15 títulos mais importantes por categoria.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Visão Geral da Temporada
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Categoria</th>
              <th className="text-left py-3 px-4">Destaques</th>
              <th className="text-left py-3 px-4">Plataforma</th>
            </tr></thead>
            <tbody>
              {[
                ["🔥 Retornos mais aguardados", "One Piece (Elbaf), Re:ZERO T4, TenSura T4, Dr. STONE Final", "Crunchyroll"],
                ["⭐ Novas adaptações mais esperadas", "Daemons of the Shadow Realm (Arakawa), Witch Hat Atelier, Rooster Fighter", "Crunchyroll/Netflix"],
                ["💕 Romance da temporada", "Classroom of the Elite T4, The Angel Next Door T2", "Crunchyroll"],
                ["🧠 Seinen/Psicológico", "Liar Game (remake), Ghost in the Shell: SAC_2047", "Crunchyroll/Netflix"],
                ["⚔️ Ação/Shonen", "Steel Ball Run (JoJo Parte 7), My Hero Academia Final, Solo Leveling T3", "Netflix/Crunchyroll"],
              ].map(([cat, dest, plat]) => (
                <tr key={cat} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{cat}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{dest}</td>
                  <td className="py-3 px-4 text-otaku text-xs font-medium">{plat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Os 15 Animes Mais Importantes da Spring 2026
        </h2>

        {[
          {
            rank: "01", nome: "One Piece — Arco de Elbaf", estreia: "5 abr | Crunchyroll", genero: "Aventura / Shonen",
            nota: "A/S", destaque: true,
            desc: "Após 27 anos prometendo Elbaf, a Toei entregou com formato sazonal e qualidade de animação histórica. O episódio de estreia com 50 minutos deixou a comunidade eufórica. O arco promete resolver o sonho de Usopp, revelar o passado de Shanks e avançar os maiores mistérios da saga final.",
            pra: "Fãs de One Piece. Quem quer entrar pelo arco mais aguardado da série.",
          },
          {
            rank: "02", nome: "Re:ZERO — Starting Life in Another World T4", estreia: "3 abr | Crunchyroll",
            genero: "Isekai / Psicológico", nota: "A",
            desc: "O Arco 6 — Torre de Plêiades — começa com Subaru e companheiros em busca do Sábio na Torre de Vigia. Considerado pelos leitores da light novel como o arco mais intenso e perturbador da série. Novos personagens cruciais como Shaula e Reid Astrea entram em cena.",
            pra: "Fãs de Re:ZERO. Amantes de isekai com profundidade psicológica.",
          },
          {
            rank: "03", nome: "Daemons of the Shadow Realm", estreia: "Abr | Crunchyroll",
            genero: "Aventura / Fantasia", nota: "A",
            desc: "Adaptação do mangá de Hiromu Arakawa (criadora de Fullmetal Alchemist!) pelo estúdio Bones. A história dos gêmeos Yuru e Asa que controlam criaturas sobrenaturais chamadas daemons. O nome da autora + o estúdio Bones é garantia de qualidade.",
            pra: "Fãs de FMA. Quem quer uma nova fantasia de aventura com nome por trás.",
          },
          {
            rank: "04", nome: "That Time I Got Reincarnated as a Slime T4", estreia: "8 abr | Crunchyroll",
            genero: "Isekai / Fantasia", nota: "B+",
            desc: "Com formato de 5 cours (incomum na franquia), a temporada mais longa de TenSura vai adaptar a fase mais ambiciosa da narrativa: Rimuru consolidando sua nação e enfrentando ameaças de escala global. Espere muito worldbuilding e batalhas épicas.",
            pra: "Fãs da série. Isekai de construção de reino com protagonista op.",
          },
          {
            rank: "05", nome: "Witch Hat Atelier", estreia: "Abr | Crunchyroll",
            genero: "Fantasia / Slice of Life", nota: "A-",
            desc: "Uma das adaptações mais esperadas pelos leitores do mangá. A história de Coco, uma garota comum que descobre que magia pode ser aprendida — contrariando a crença de que é um dom de nascença. Visual deslumbrante e narrativa emocionalmente rica.",
            pra: "Fãs de Frieren. Quem gosta de fantasia com foco em maravilhamento e exploração.",
          },
        ].map(({ rank, nome, estreia, genero, nota, desc, pra, destaque }) => (
          <div key={rank} className={`not-prose my-5 bg-card rounded-xl border p-5 ${destaque ? "border-otaku/50" : "border-otaku/20"}`}>
            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-base flex items-center gap-2">
                <span className="text-otaku font-mono text-sm bg-otaku/10 px-2 py-0.5 rounded">{rank}</span>
                {nome}
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-otaku/15 text-otaku px-2 py-1 rounded-full font-bold">{nota}</span>
                <span className="text-xs text-muted-foreground">{genero}</span>
              </div>
            </div>
            <p className="text-xs text-otaku mb-2">📅 {estreia}</p>
            <p className="text-sm text-muted-foreground mb-2">{desc}</p>
            <p className="text-xs"><strong className="text-foreground">Para quem:</strong> <span className="text-muted-foreground">{pra}</span></p>
          </div>
        ))}

        <AdRectangle className="my-8" />

        {[
          {
            rank: "06", nome: "Steel Ball Run — JoJo's Bizarre Adventure Parte 7", estreia: "Mar | Netflix",
            genero: "Aventura / Sobrenatural", nota: "A+",
            desc: "Parte 7 de JoJo, considerada a melhor por muitos fãs, finalmente em anime! Corrida a cavalo pelos EUA de 1890, com os novos protagonistas Johnny Joestar e Gyro Zeppeli. Netflix como plataforma garante orçamento alto para o WIT Studio.",
            pra: "Fãs de JoJo ou iniciantes — Parte 7 é ótima porta de entrada.",
          },
          {
            rank: "07", nome: "Dr. STONE — Final Season", estreia: "Abr | Crunchyroll",
            genero: "Sci-fi / Aventura", nota: "A-",
            desc: "O último arco de Dr. STONE: o Reino da Ciência vai para a lua para salvar a humanidade. Animação pelo estúdio TMS, que elevou a qualidade nas temporadas recentes. Um final digno de uma das melhores séries de aventura científica do shonen moderno.",
            pra: "Fãs da série. Amantes de ficção científica acessível com protagonista genial.",
          },
          {
            rank: "08", nome: "My Hero Academia — Episódio Final 'More'", estreia: "Abr | Crunchyroll",
            genero: "Shonen / Ação", nota: "B+",
            desc: "O epílogo de My Hero Academia, ambientado alguns anos após o fim da história principal. Reencontramos todos os personagens numa narrativa conclusiva. Pode ser mais emocional do que ação — é uma despedida.",
            pra: "Fãs de MHA. Quem quer saber o que aconteceu com todos os personagens.",
          },
          {
            rank: "09", nome: "Classroom of the Elite T4", estreia: "Abr | Crunchyroll",
            genero: "Psicológico / Escolar", nota: "B+",
            desc: "Ayanokouji volta numa nova temporada da série de estratégia escolar psicológica. Com o protagonista revelando mais de sua real capacidade, as manipulações ficam ainda mais elaboradas.",
            pra: "Fãs das temporadas anteriores. Quem gosta de jogos mentais e protagonistas overpowered inteligentes.",
          },
          {
            rank: "10", nome: "Solo Leveling T3", estreia: "Abr | Crunchyroll",
            genero: "Ação / Manhwa", nota: "B+",
            desc: "Sung Jinwoo na fase mais poderosa da narrativa, com confrontos de escala global. A adaptação da A-1 Pictures continua excelente, especialmente para quem veio do manhwa.",
            pra: "Fãs das temporadas anteriores. Power fantasy com progressão satisfatória.",
          },
        ].map(({ rank, nome, estreia, genero, nota, desc, pra }) => (
          <div key={rank} className="not-prose my-4 bg-card rounded-xl border border-otaku/20 p-4">
            <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <span className="text-otaku font-mono text-xs bg-otaku/10 px-1.5 py-0.5 rounded">{rank}</span>
                {nome}
              </h3>
              <span className="text-xs bg-otaku/15 text-otaku px-2 py-0.5 rounded-full font-bold">{nota}</span>
            </div>
            <p className="text-xs text-otaku mb-1">📅 {estreia} · {genero}</p>
            <p className="text-sm text-muted-foreground mb-1">{desc}</p>
            <p className="text-xs text-muted-foreground"><strong className="text-foreground">Para quem:</strong> {pra}</p>
          </div>
        ))}

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Os 5 Animes Mais Subestimados da Temporada
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { n: "11", nome: "Rooster Fighter", desc: "Um galo enfrenta kaijus para proteger seu país. Parece ridículo — e é. Mas de forma absolutamente brilhante e emocionante. A comunidade está adorando.", onde: "Crunchyroll" },
            { n: "12", nome: "Agents of the Four Seasons", desc: "Da autora de Violet Evergarden, animado pelo WIT Studio. Fantasia sobre agentes responsáveis pelo ciclo das estações. Visual deslumbrante e narrativa poética.", onde: "Crunchyroll" },
            { n: "13", nome: "Liar Game (remake 2026)", desc: "Remake do clássico psicológico sobre jogos de manipulação. A nova versão tem animação superior e expande a narrativa original.", onde: "Crunchyroll" },
            { n: "14", nome: "Dorohedoro T2", desc: "O bizarro e adorado Dorohedoro voltou para sua segunda temporada. Mundo distópico, personagens únicos e humor negro. Cult following enorme.", onde: "Crunchyroll" },
            { n: "15", nome: "MAO (Rumiko Takahashi)", desc: "Novo anime da criadora de Inuyasha e Ranma ½, animado pelo estúdio Sunrise. Fantasia sobrenatural com garota que descobre um mundo paralelo.", onde: "Crunchyroll" },
          ].map(({ n, nome, desc, onde }) => (
            <div key={n} className="flex gap-3 bg-card rounded-xl border border-otaku/20 p-3">
              <span className="text-otaku font-mono text-xs bg-otaku/10 px-1.5 py-0.5 rounded h-fit shrink-0">{n}</span>
              <div>
                <h3 className="font-bold text-sm">{nome} <span className="text-xs text-muted-foreground font-normal">• {onde}</span></h3>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual anime da Spring 2026 você mais está curtindo? ✨</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="spring-season-animes-abril-2026" />
      <CommentSection postId="spring-season-animes-abril-2026" postTitle="Spring Season 2026: Os 15 Melhores Animes de Abril para Não Perder" />
    </article>
  );
};

export default SpringSeasonAnimes2026;
