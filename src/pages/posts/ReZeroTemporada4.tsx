import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Tv, Star, BookOpen, Music, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/rezero-temporada-4-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const ReZeroTemporada4 = () => {
  useEffect(() => {
    trackArticleRead("rezero-temporada-4-guia-2026", "Re:ZERO Temporada 4: Loss Arc e Recapture Arc — Guia Completo 2026", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Anime · Isekai · Re:ZERO</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Re:ZERO Temporada 4: Loss Arc e Recapture Arc — Guia Completo da Estreia em Abril de 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Re:ZERO Temporada 4 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Re:ZERO − Starting Life in Another World</strong> retorna com sua quarta temporada em <strong>8 de abril de 2026</strong>, exclusivamente na <strong>Crunchyroll</strong>. Com 19 episódios divididos em dois arcos, a temporada adapta o Arco 6 da light novel de Tappei Nagatsuki e celebra os <strong>10 anos da franquia</strong>. Foi eleita o <strong>anime mais aguardado da primavera 2026</strong> numa pesquisa oficial do Dengeki Online com fãs japoneses.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          Ficha Técnica da Temporada 4
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <tbody>
              {[
                ["Estreia", "8 de abril de 2026"],
                ["Onde Assistir", "Crunchyroll (simulcast global, legendas e dublagem PT-BR)"],
                ["Total de Episódios", "19"],
                ["Estrutura", "Dois arcos (dois cours)"],
                ["Estúdio", "White Fox"],
                ["Diretor", "Masahiro Shinohara"],
                ["Roteiro", "Masahiro Yokotani"],
                ["Design de Personagens", "Haruka Sagawa"],
                ["Compositor", "Kenichiro Suehiro"],
                ["Arco Adaptado", "Arco 6 da light novel — 'O Corredor das Memórias'"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku w-1/3">{k}</td>
                  <td className="py-3 px-4 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Os Dois Arcos da Temporada 4
        </h2>
        <div className="not-prose my-6 space-y-4">
          <div className="bg-card rounded-xl border border-otaku/30 p-5">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h3 className="font-bold text-otaku text-lg">Loss Arc — Arco da Perda</h3>
              <span className="text-sm bg-otaku/20 text-otaku px-3 py-1 rounded-full font-bold">8 abr → 11 eps</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Subaru e seus aliados se dirigem às <strong>Dunas de Auguria</strong> em busca da <strong>Torre de Vigia de Plêiades</strong>, uma fortaleza no deserto que nem o lendário cavaleiro Reinhard conseguiu conquistar. Lá reside <strong>Shaula</strong>, uma sábia que pode guardar a chave para reverter o que a Autoridade da Gula fez a Rem, Crusch e Julius — que tiveram suas existências devoradas.
            </p>
            <p className="text-sm text-muted-foreground mb-0">
              Este é um dos arcos mais elogiados pelos leitores da light novel pela sua densidade narrativa e revelações sobre o passado dos personagens, especialmente de Subaru e das Bruxas.
            </p>
          </div>
          <div className="bg-card rounded-xl border border-otaku/30 p-5">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h3 className="font-bold text-otaku text-lg">Recapture Arc — Arco da Recaptura</h3>
              <span className="text-sm bg-otaku/20 text-otaku px-3 py-1 rounded-full font-bold">12 ago → 8 eps</span>
            </div>
            <p className="text-sm text-muted-foreground mb-0">
              A segunda parte estreia em <strong>12 de agosto de 2026</strong> com 8 episódios. Os fãs aguardam ansiosos o desfecho do cliffhanger do Loss Arc e a progressão da história de Rem — personagem cujo arco é o motor emocional de toda a temporada 4.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          Elenco de Vozes: Retornos e Novidades
        </h2>
        <p>O elenco original retorna integralmente, com adições importantes:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Personagem</th>
              <th className="text-left py-3 px-4">Seiyuu (Japonês)</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr></thead>
            <tbody>
              {[
                ["Subaru Natsuki", "Yusuke Kobayashi", "Retorno"],
                ["Emilia", "Rie Takahashi", "Retorno"],
                ["Rem", "Inori Minase", "Retorno — arco central"],
                ["Beatrice", "Satomi Arai", "Retorno"],
                ["Shaula (nova)", "Fairouz Ai", "Estreia — voz de Power (Chainsaw Man) e Jolyne (Stone Ocean)"],
                ["Personagem misterioso", "Tomokazu Sugita", "Estreia — veterano de anime (JoJo, Gintama)"],
              ].map(([p, s, st]) => (
                <tr key={p} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku">{p}</td>
                  <td className="py-3 px-4">{s}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{st}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-otaku" />
          Trilha Sonora
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-otaku/20 p-5">
            <h3 className="font-bold text-otaku mb-2">🎵 Abertura — "Recollect"</h3>
            <p className="text-sm text-muted-foreground mb-0">
              Interpretada por <strong>Konomi Suzuki</strong> — cantora histórica da franquia — com participação especial da rapper americana <strong>Ashnikko</strong>. Uma combinação inesperada que sinaliza o tom mais sombrio e intenso da temporada.
            </p>
          </div>
          <div className="bg-card rounded-xl border border-otaku/20 p-5">
            <h3 className="font-bold text-otaku mb-2">🎵 Encerramento — "Ender Ember"</h3>
            <p className="text-sm text-muted-foreground mb-0">
              Primeira colaboração entre <strong>MYTH&ROID</strong> e <strong>TK de Ling tosite sigure</strong> — dois nomes históricos do anime (TK assinou a abertura de Tokyo Ghoul, "unravel"). MYTH&ROID já assinou temas em temporadas anteriores de Re:ZERO.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          10 Anos de Re:ZERO
        </h2>
        <p>
          A quarta temporada coincide com o <strong>10º aniversário do anime</strong> (2016–2026). A Crunchyroll e a Kadokawa programaram <strong>10 iniciativas comemorativas</strong> ao longo de 2026, anunciadas em dezembro de 2025. Entre elas está uma <strong>parceria de turismo com a Prefeitura de Tottori</strong> — conhecida pelas suas dunas de areia que inspiraram as Dunas de Auguria do universo da série.
        </p>
        <p>
          Re:ZERO começou como web novel gratuita na Shōsetsuka ni Narō em 2012, escrita por <strong>Tappei Nagatsuki</strong>. A Kadokawa a publicou como light novel antes do anime de 2016, produzido pelo estúdio White Fox. A temporada 4 recebeu uma <strong>première mundial em Lucca Comics and Games</strong> na Itália em novembro de 2025 — um dos poucos animes a receber estreia europeia teatral antes da exibição japonesa.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Como Assistir Sem Spoilers</h2>
        <ul>
          <li>📺 <strong>Crunchyroll</strong> — simulcast toda quarta-feira, simultâneo ao Japão</li>
          <li>🇧🇷 <strong>Dublagem PT-BR</strong> — confirmada, com previsão de lançamento ~2 semanas após a estreia de cada episódio</li>
          <li>📖 <strong>Recuperação</strong> — T1, T2, T3 e as OVAs estão disponíveis na Crunchyroll para quem quiser assistir do início</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Re:ZERO temporada 4 chega com tudo: elenco histórico, adições de peso (Fairouz Ai, Tomokazu Sugita), trilha sonora marcante e a promessa de finalmente avançar o arco de Rem. Eleita a mais aguardada da primavera 2026 pelos próprios fãs japoneses, a jornada de Subaru à Torre de Plêiades promete ser uma das experiências mais intensas da franquia.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Pronto para a temporada 4? 💜</h3>
          <p className="text-muted-foreground">Qual personagem você mais quer ver de volta? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="rezero-temporada-4-guia-2026" />
      <CommentSection postId="rezero-temporada-4-guia-2026" postTitle="Re:ZERO Temporada 4 — Guia Completo 2026" />
    </article>
  );
};

export default ReZeroTemporada4;
