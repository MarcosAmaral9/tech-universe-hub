import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Tv, Star, BookOpen, Music, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/rezero-temporada-4-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

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
        <AuthorBio category="otaku" />
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

      <AdInArticle />
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
      
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128260;</span>
          O Mecanismo do Loop: Como Retorno pela Morte Funciona em Re:Zero
        </h2>
        <p>
          O poder central de Subaru Natsuki — <strong>Retorno pela Morte</strong> (Shisha no Ki wo Motsu Mono) — é apresentado inicialmente como uma vantagem, mas a série passa três temporadas demonstrando que é uma forma elaborada de tortura psicológica. Subaru morre, retorna a um ponto de retomada anterior, e ninguém exceto ele tem memória dos eventos entre o ponto de retomada e a morte. Isso significa que cada progresso emocional, cada aliança construída, cada confiança ganha pode ser apagada — exceto na memória de Subaru.
        </p>
        <p>
          A série é rigorosa em mostrar as consequências psicológicas acumuladas: Subaru desenvolve TEPT real ao longo das temporadas, com flashbacks, ataques de pânico e comportamentos dissociativos que a série nomeia e representa com precisão incomum para o gênero. O poder, que parece cheat, é na prática uma maldição — ele não pode morrer permanentemente, mas cada morte é experimentada com dor e medo totais, e os traumas se acumulam sem a possibilidade de superação convencional.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128336;</span>
          O Que a Temporada 4 Cobre: Arco 6 — A Torre de Plêiades
        </h2>
        <p>
          A Temporada 4 de Re:Zero, que estreou em <strong>abril de 2026</strong> na Crunchyroll, adapta o <strong>Arco 6</strong> da light novel de Tappei Nagatsuki — o Arco da Torre de Plêiades (<em>Pleiades Watchtower</em>). O arco tem 25 episódios previstos e representa uma das seções mais densas emocionalmente e em lore da série. Produzida pelo <strong>White Fox</strong> — o mesmo estúdio das temporadas anteriores — a T4 mantém a continuidade de estilo e equipe.
        </p>
        <p>
          O arco da Torre coloca Subaru e um grupo pequeno de aliados dentro de uma estrutura antiga e isolada, buscando resgatar Rem — que, desde o arco de Shibuya da T2, teve seu nome e memórias apagados por uma bruxa. A Torre de Plêiades é um labirinto de provações que testa cada membro do grupo de formas distintas, revelando segredos sobre o passado de personagens cruciais — especialmente sobre Beatrice, a espírito que Subaru liberou do contrato no final da T2.
        </p>
        <p>
          As revelações sobre <strong>Satella</strong> — a Bruxa da Inveja e fonte do poder de Subaru — são parte central deste arco. A série até aqui tratou Satella como uma presença ominosa e antagonista implícita; o Arco 6 começa a desconstruir essa percepção com informações que mudam fundamentalmente a compreensão do espectador sobre quem Satella é e qual sua relação real com Subaru. Para leitores da light novel, este é consistentemente citado como o arco de maior impacto emocional da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128101;</span>
          Os Personagens que Definem a Temporada 4
        </h2>
        <p>
          <strong>Subaru Natsuki</strong> chega na T4 como um personagem transformado pela T3 — ele tem aliados que confiam nele genuinamente, tem objetivos claros e tem Emilia ao lado. Mas a Torre vai testá-lo de formas que o crescimento das temporadas anteriores não o preparou completamente para enfrentar. <strong>Beatrice</strong>, a espírito que escolheu sair de sua biblioteca para acompanhar Subaru, tem seu arco mais aprofundado aqui — a série finalmente revela o que ela esperava no contrato que a aprisionou por séculos.
        </p>
        <p>
          <strong>Roswaal L. Mathers</strong>, o conde que patrocina Emilia na campanha real e cujas motivações foram reveladas como muito mais sinistras do que apareciam, tem papel significativo no Arco 6. Sua obsessão com um livro do futuro e suas ações calculadas ao longo de décadas colocam-no numa posição de antagonista que a série resiste em simplificar. <strong>Echidna</strong>, a Bruxa da Avareza morta há séculos mas presente em sonhos e provas da Torre, continua sendo um dos personagens mais fascinantes — seu intellecto frio e interesse genuíno em Subaru criam uma dinâmica que a série usa para explorar o que significa ser amado por alguém incapaz de empatia convencional.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127902;</span>
          Como Revisitar Re:Zero Antes da T4: Guia de Revisão
        </h2>
        <p>
          Para quem assistiu as temporadas anteriores mas perdeu detalhes, os elementos mais importantes para manter em mente na T4: a natureza exata do poder de Subaru e seus limites; o destino de Rem e o que significa ter nome e memórias apagados; a relação entre Roswaal e o Livro do Futuro; e as cinco Grandes Bruxas — quem são, quais poderes possuem e como se relacionam com o mundo atual. A Crunchyroll tem todas as temporadas disponíveis com legendas em português. O recap especial que a White Fox costuma lançar antes de cada temporada cobre os eventos essenciais em cerca de 25 minutos.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: Re:Zero T4 é onde as peças colocadas em três temporadas finalmente se encaixam">
        <p>
          Re:Zero − Starting Life in Another World é uma light novel de <strong>Tappei Nagatsuki</strong>, ilustrada por <strong>Shinichirou Otsuka</strong>, publicada pela <strong>Media Factory</strong> (Kadokawa) desde 2012 — 40+ volumes publicados. O anime é produzido pelo <strong>White Fox</strong>. As T1 e T2 estão disponíveis na <strong>Crunchyroll</strong>. A <strong>Temporada 4 estreou em abril de 2026</strong> na Crunchyroll com 25 episódios previstos, cobrindo o Arco 6 da light novel — o Arco da Torre de Plêiades.
        </p>
        <p>
          Re:Zero é a série que mais honestamente tratou trauma psicológico na ficção popular japonesa — o TEPT de Subaru não é um desvio de personagem, é a premissa central de como a série funciona. A T4 leva isso ao extremo: o Arco da Torre de Plêiades é o arco mais introspectivo e emocionalmente exigente da série até agora. Se você chegou até a T3, a T4 é onde o investimento de horas nas temporadas anteriores paga dividendos narrativos que poucos outros animes são capazes de entregar.
        </p>
      </EditorialTake>
      <ArticleSources category="otaku"
        sources={[
          { title: "Crunchyroll \u2014 Re:Zero", url: "https://www.crunchyroll.com/pt-br/series/GRG5MEZRY/rezero--starting-life-in-another-world-", publisher: "Crunchyroll", accessedAt: "Maio 2026" },
          { title: "MAL \u2014 Re:Zero", url: "https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu", publisher: "MyAnimeList", accessedAt: "Maio 2026" },
          { title: "White Fox \u2014 site oficial", url: "https://www.studio-whitefox.com/", publisher: "White Fox", accessedAt: "Maio 2026" },
          { title: "Anime News Network", url: "https://www.animenewsnetwork.com/", publisher: "Anime News Network", accessedAt: "Maio 2026" },
          { title: "Kadokawa \u2014 Re:Zero light novels", url: "https://www.kadokawa.co.jp/", publisher: "Kadokawa", accessedAt: "Maio 2026" }
        ]}
      />



      <RelatedPosts currentSlug="rezero-temporada-4-guia-2026" />
      <CommentSection postId="rezero-temporada-4-guia-2026" postTitle="Re:ZERO Temporada 4 — Guia Completo 2026"  category="otaku" />
    </article>
  );
};

export default ReZeroTemporada4;