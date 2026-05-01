import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/lancamentos-games-abril-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const LancamentosGamesAbril2026 = () => {
  useEffect(() => {
    trackArticleRead("lancamentos-games-abril-2026", "Lançamentos de Games em Abril de 2026: Pragmata, Saros, Hades 2 e Mais", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Games · Abril 2026 · Lançamentos</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Lançamentos de Games em Abril de 2026: Pragmata, Saros, Hades 2 no Xbox e Muito Mais
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Lançamentos games abril 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após o lançamento colossal de Crimson Desert em março, abril de 2026 mantém o ritmo com destaque para o retorno misterioso de <strong>Pragmata</strong> da Capcom, o exclusivo PS5 <strong>Saros</strong> da Housemarque, a chegada do aclamado <strong>Hades 2</strong> ao Xbox, e o esperado <strong>Tomodachi Life: Living the Dream</strong>. Um mês variado para todos os perfis de jogador.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Calendário Completo de Abril de 2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Data</th>
              <th className="text-left py-3 px-4">Jogo</th>
              <th className="text-left py-3 px-4">Plataformas</th>
            </tr></thead>
            <tbody>
              {[
                ["02/04", "Darwin's Paradox!", "PC, PS5, Xbox Series, Switch 2"],
                ["08/04", "ChainStaff", "PC, PS4, PS5, Xbox One, Xbox Series, Switch"],
                ["08/04", "The Occultist", "PC, PS5, Xbox Series"],
                ["14/04", "Hades 2 — Xbox Series X|S", "Xbox Series X|S (já no Game Pass)"],
                ["16/04", "MOUSE: P.I. For Hire", "PC, PS5, Xbox Series, Switch 1/2"],
                ["16/04", "Cthulhu: The Cosmic Abyss", "PC, PS5, Xbox Series"],
                ["16/04", "Tomodachi Life: Living the Dream", "Nintendo Switch"],
                ["17/04", "PRAGMATA (Capcom)", "PC, PS5, Xbox Series, Switch 2"],
                ["21/04", "Vampire Crawlers (Vampire Survivors)", "PC, PS5, Xbox Series, Switch"],
                ["23/04", "Kingdom's Return: Time-Eating Fruit", "PC, PS5, Switch 1/2"],
                ["23/04", "Kiln (Double Fine)", "PC, Xbox Series (Game Pass Day One)"],
                ["28/04", "Aphelion (Don't Nod)", "PC, Xbox Series (Game Pass Day One)"],
                ["28/04", "He-Man and the Masters of the Universe", "PC, PS5, Xbox Series, Switch"],
                ["29/04", "MotoGP 26", "PS5, Xbox Series, PC, Switch, Switch 2"],
                ["30/04", "Saros (Housemarque)", "PS5 exclusivo"],
                ["30/04", "Invincible VS.", "PC, PS5, Xbox Series"],
              ].map(([d, g, p]) => (
                <tr key={g} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap">{d}</td>
                  <td className="py-3 px-4 font-medium">{g}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Os Grandes Destaques de Abril
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">PRAGMATA — Capcom (17 de abril)</h3>
        <p>
          Um dos lançamentos mais misteriosos e aguardados de 2026. <strong>PRAGMATA</strong> é uma nova IP da Capcom com estética sci-fi cinematográfica — o teaser de anúncio no PS5 showcase de 2020 mostrou um astronauta em Nova York e uma garota em uma lua holográfica, sem revelar quase nada sobre o gameplay. Após anos de desenvolvimento e adiamentos, chega em 17 de abril para <strong>PC, PS5, Xbox Series X|S e Nintendo Switch 2</strong>. A Capcom promete experiência de exploração e combate com visual de cair o queixo.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Saros — Housemarque (30 de abril)</h3>
        <p>
          Exclusivo PS5 da <strong>Housemarque</strong> — o mesmo estúdio por trás do aclamado Returnal (2021). <strong>Saros</strong> é um roguelike de ação que mistura o estilo frenético característico do estúdio com novos elementos narrativos. Disponível apenas no PS5, é uma das grandes apostas exclusivas da Sony no primeiro semestre.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Hades 2 — Chegada ao Xbox (14 de abril)</h3>
        <p>
          O aclamado roguelike da <strong>Supergiant Games</strong>, eleito por muitos como o melhor jogo de 2025, finalmente chega ao <strong>Xbox Series X|S</strong> e estará disponível desde o primeiro dia no <strong>Xbox Game Pass Ultimate e PC Game Pass</strong>. Para quem não jogou ainda, esta é a melhor oportunidade — Hades 2 combate satisfatório, narrativa mitológica excepcional e roguelike com curva de aprendizado perfeita.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-3">Tomodachi Life: Living the Dream — Nintendo (16 de abril)</h3>
        <p>
          O retorno da icônica série de simulação social da Nintendo, exclusivo para <strong>Nintendo Switch</strong>. Após mais de 10 anos sem um novo título, Tomodachi Life: Living the Dream promete trazer a estranheza e o charme da série original com novos recursos e atualização visual. Um dos exclusivos mais esperados pelos fãs de simulação de vida.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Xbox Game Pass — Day One em Abril
        </h2>
        <p>
          Os assinantes do Xbox Game Pass Ultimate e PC Game Pass têm 5 títulos Day One confirmados em abril, com concentração na segunda metade do mês:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { data: "14/04", jogo: "Hades 2", desc: "A sequência do roguelike mais aclamado de 2025, finalmente disponível no Xbox." },
            { data: "23/04", jogo: "Kiln (Double Fine)", desc: "Brawler multiplayer por equipes da Double Fine Productions. Beta aberta de 9 a 11/04 no PC." },
            { data: "28/04", jogo: "Aphelion (Don't Nod)", desc: "Aventura de ação e ficção científica da criadora de Life is Strange, com foco em furtividade e narrativa." },
          ].map((item) => (
            <div key={item.jogo} className="bg-card rounded-xl border border-geek/20 p-4 flex gap-4">
              <div className="text-geek font-bold text-sm whitespace-nowrap pt-0.5">{item.data}</div>
              <div>
                <h4 className="font-bold text-sm mb-1">{item.jogo}</h4>
                <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Outros Destaques que Valem Atenção
        </h2>
        <ul>
          <li><strong>MOUSE: P.I. For Hire (16/04)</strong> — Jogo de plataforma noir com visual cartoon estilo anos 30, disponível para PC, PS5, Xbox Series e Nintendo Switch 1/2. Visual único que chama atenção.</li>
          <li><strong>Vampire Crawlers: The Turbo Wildcard (21/04)</strong> — Spin-off/DLC de Vampire Survivors, o roguelike de horda mais querido dos últimos anos. Para PC, PS5, Xbox Series e Switch.</li>
          <li><strong>MotoGP 26 (29/04)</strong> — A nova edição da série de corrida oficial do MotoGP, para PS5, Xbox Series, PC, Switch e Switch 2.</li>
          <li><strong>Invincible VS. (30/04)</strong> — Jogo de luta baseado na série de HQ e animação Invincible (Prime Video). PC, PS5 e Xbox Series.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Contexto: Após o Março Histórico</h2>
        <p>
          Março de 2026 foi dominado por Crimson Desert (Pearl Abyss) e Life is Strange: Reunion. Abril chega sem um único lançamento de impacto tão massivo, mas compensa com <strong>variedade e diversidade</strong>: um indie de plataforma (MOUSE), um roguelike exclusivo Sony (Saros), uma nova IP da Capcom (PRAGMATA), um port aguardado (Hades 2 no Xbox) e um retorno nostálgico (Tomodachi Life). Para diferentes perfis de jogador, abril tem alguma coisa.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual jogo de abril você mais aguarda? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="lancamentos-games-abril-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="lancamentos-games-abril-2026" postTitle="Lançamentos de Games em Abril de 2026" />
    </article>
  );
};

export default LancamentosGamesAbril2026;
