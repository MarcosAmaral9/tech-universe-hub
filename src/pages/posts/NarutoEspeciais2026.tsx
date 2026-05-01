import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen, Flame } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/naruto-especiais-confirmados-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const NarutoEspeciais2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "naruto-especiais-confirmados-2026",
      "Naruto: 4 Episódios Especiais Confirmados — Novos Designs Revelados e Tudo que Sabemos",
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
            Anime · Naruto · Especiais · Studio Pierrot
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Naruto: 4 Episódios Especiais Confirmados — Novos Designs Revelados e Tudo que Sabemos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Naruto 4 episódios especiais confirmados novos designs 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 21 de abril de 2026, o site oficial de Naruto divulgou os <strong>novos designs oficiais dos personagens</strong> para os episódios especiais confirmados da série — e a internet simplesmente parou. Naruto adulto, Sasuke, Sakura e Hinata com visuais completamente redesenhados, mais próximos do estilo atual do mangá de Masashi Kishimoto. A produção de <strong>4 episódios especiais</strong> está confirmada pelo Studio Pierrot para <strong>late 2026</strong>, com produção encerrada e apenas a data de estreia pendente. Este guia reúne tudo que foi confirmado oficialmente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          O Que Foi Confirmado Oficialmente
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-otaku/30 p-5">
            <h3 className="font-bold text-otaku mb-3">✅ Confirmado pelo site oficial</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong className="text-foreground">4 episódios especiais</strong> em produção</li>
              <li>• Studio Pierrot como produtora</li>
              <li>• Novos designs de personagens revelados em 21/04/2026</li>
              <li>• Produção encerrada (em pós-produção / finalização)</li>
              <li>• Janela: <strong className="text-foreground">late 2026</strong> (outubro–dezembro)</li>
              <li>• Baseado em material do mangá de Masashi Kishimoto</li>
              <li>• Crunchyroll como parceira de distribuição global</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold mb-3 text-sm">❓ Ainda Não Revelado</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Data de estreia exata</li>
              <li>• Qual arco/história será adaptada</li>
              <li>• Se será emissão semanal ou lançamento em bloco</li>
              <li>• Elenco de dublagem (JP e PT-BR)</li>
              <li>• Se haverá mais episódios após os 4 iniciais</li>
              <li>• Trailer oficial de estreia</li>
              <li>• Abertura e encerramento (músicas)</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Os Novos Designs: O Que Mudou e Por Que a Comunidade Está Dividida
        </h2>
        <p>
          Os novos designs revelados em 21 de abril causaram reações intensas — e polarizadas — na comunidade. A maioria dos fãs elogiou a evolução visual; uma minoria pediu manutenção do estilo Shippuden clássico. Aqui está o que mudou em cada personagem principal:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { char: "🍥 Naruto Uzumaki (adulto)", mudancas: "Visual mais maduro e envelhecido, compatível com a fase pós-Hokage. Cicatrizes sutis de batalhas passadas. Cabelo levemente mais comprido que em Shippuden. O design é claramente influenciado pelos esboços que Kishimoto fez para a fase de Boruto — mas completamente original para estes especiais.", reacao: "Positiva majoritária — fãs elogiam a maturidade do design" },
            { char: "⚡ Sasuke Uchiha (adulto)", mudancas: "Braço esquerdo ausente continua (pós-Batalha do Vale do Fim IV). Robe mais prático e menos elaborado que em Shippuden. Expressão mais serena — o Sasuke que encontrou seu propósito. O Rinnegan e o Sharingan com designs levemente refinados.", reacao: "Muito positiva — considerado o melhor redesign do grupo" },
            { char: "🌸 Sakura Haruno (adulta)", mudancas: "Visual claramente inspirado em seu design de médica de elite — bata médica sobre o traje ninja. Cabelo mais curto que em alguns momentos de Shippuden. Sem o símbolo do clã Uchiha que ela usou em algumas partes de Boruto (continuidade com os especiais).", reacao: "Dividida — parte quer o visual clássico de Shippuden" },
            { char: "💙 Hinata Hyuga-Uzumaki (adulta)", mudancas: "O visual mais diferente do grupo. Roupas mais domésticas/maternais mas com elementos ninja. Cabelo longo novamente (revertendo o corte curto de Boruto). Expressão mais confiante que a Hinata tímida clássica.", reacao: "Positiva — fãs aprovam a maturidade do personagem" },
          ].map(({ char, mudancas, reacao }) => (
            <div key={char} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-sm text-otaku">{char}</h3>
                <span className="text-xs text-muted-foreground">{reacao}</span>
              </div>
              <p className="text-sm text-muted-foreground">{mudancas}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Qual História Será Adaptada? As Teorias Mais Fortes
        </h2>
        <p>
          O Studio Pierrot não revelou qual arco ou história será adaptada — mantendo o mistério como estratégia de marketing. Mas com 4 episódios, há candidatos claros:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { teoria: "🏆 Mais provável: The Last — Naruto the Movie (versão expandida)", prob: "Alta", desc: "The Last (2014) foi o filme que estabeleceu o relacionamento de Naruto e Hinata e cobriu o período entre o fim de Shippuden e o início de Boruto. Muitos fãs ficaram insatisfeitos por parte da história ter sido contada em filme — os 4 especiais podem expandir esse material com novos cenários e aprofundar os relacionamentos dos personagens adultos. Os novos designs são compatíveis com esse período." },
            { teoria: "🔵 Possível: Mini-arco original de Kishimoto", prob: "Média", desc: "Kishimoto pode ter escrito um mini-arco original exclusivo para esses especiais — seguindo o precedente de Boruto: Two Blue Vortex, onde ele retornou ao controle criativo. Uma história original permitiria surpresas sem spoilers de manga existente, gerando mais curiosidade e evitando comparações." },
            { teoria: "🟡 Possível: Gaiden de algum personagem", prob: "Média", desc: "Gaidens (histórias paralelas) de personagens como Kakashi, Guy, Jiraiya ou até Itachi adolescente funcionariam muito bem em 4 episódios. O formato permitiria explorar personagens favoritos sem o peso de adaptar um arco longo." },
            { teoria: "🔴 Improvável: Arco de Boruto", prob: "Baixa", desc: "Os designs dos personagens não correspondem ao estilo de Boruto: Naruto Next Generations. Parece que o objetivo é revisitar a geração original de Naruto, não fazer um spinoff de Boruto." },
          ].map(({ teoria, prob, desc }) => (
            <div key={teoria} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{teoria}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${prob === "Alta" ? "bg-green-500/15 text-green-400" : prob === "Média" ? "bg-yellow-500/15 text-yellow-400" : "bg-red-500/15 text-red-400"}`}>Prob: {prob}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Contexto: Naruto em 2026 — Ainda o Maior Anime da História?
        </h2>
        <p>
          Naruto encerrou sua transmissão original em 2017 (com Shippuden). Em quase uma década, a série:
        </p>
        <ul>
          <li>Continua entre os <strong>3 animes mais assistidos de todos os tempos</strong> no Crunchyroll globalmente</li>
          <li>O MyAnimeList lista Shippuden com mais de <strong>2,2 milhões de usuários</strong> que marcaram como assistido</li>
          <li>A franquia Naruto gerou mais de <strong>US$ 10 bilhões em receita total</strong> desde 1999 (mangá, anime, games, produtos)</li>
          <li>Em 2026, com a "renascença do shonen clássico" (One Piece Elbaf, Bleach Thousand-Year Blood War, JJK T4), o momentum para novos especiais de Naruto nunca foi melhor</li>
          <li>Os 4 especiais serão a <strong>primeira animação original nova de Naruto da geração adulta</strong> — distinto de Boruto</li>
        </ul>
        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <h3 className="font-bold text-otaku mb-3">📊 Naruto em Números (2026)</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "250M+", desc: "Cópias do mangá vendidas no mundo" },
              { num: "720", desc: "Episódios de anime (incluindo Shippuden)" },
              { num: "11", desc: "Filmes e especiais de cinema" },
              { num: "27 anos", desc: "De publicação contínua (1999–2026)" },
              { num: "#1", desc: "Anime mais buscado no Google Brasil em múltiplos anos" },
              { num: "US$ 10B+", desc: "Receita total da franquia desde 1999" },
            ].map(({ num, desc }) => (
              <div key={num} className="text-center">
                <div className="font-bold text-otaku text-xl">{num}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Como Se Preparar para os Especiais: Guia de Revisão
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { opcao: "⚡ Revisão rápida (4–6h)", desc: "Assista os últimos 20 episódios de Naruto Shippuden (eps 460–500) — eles cobrem o final da 4ª Grande Guerra Ninja e o epilogo que estabelece os personagens adultos. Com esses episódios frescos, você estará pronto para qualquer dos cenários prováveis dos especiais.", plat: "Crunchyroll" },
            { opcao: "🎬 Assista The Last: Naruto the Movie (2h)", desc: "Se a teoria mais forte for correta (especiais baseados em The Last), revisitar o filme é essencial. Ele estabelece o relacionamento de Naruto e Hinata, acontece 2 anos após o fim da guerra e é considerado o fechamento emocional da série original.", plat: "Crunchyroll / Amazon Prime" },
            { opcao: "📖 Leia Konoha Hiden e outros light novels", desc: "A série de light novels 'Hiden' conta histórias dos personagens secundários durante o período pós-guerra — Gaara Hiden, Shikamaru Hiden, Kakashi Hiden. Se os especiais explorarem algum desse material, os novels são o guia.", plat: "Editoras de mangá físico / digital" },
          ].map(({ opcao, desc, plat }) => (
            <div key={opcao} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1">{opcao}</h3>
              <p className="text-xs text-muted-foreground mb-1">{desc}</p>
              <p className="text-xs text-otaku font-medium">{plat}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está animado com os especiais de Naruto? 🍥</h3>
          <p className="text-muted-foreground">Qual história você quer ver adaptada? Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="naruto-especiais-confirmados-2026" />
      <NewsletterSignup variant="modal" categories={["otaku"]} showAfterMs={60000} />
      <CommentSection postId="naruto-especiais-confirmados-2026" postTitle="Naruto: 4 Episódios Especiais Confirmados — Novos Designs Revelados e Tudo que Sabemos" />
    </article>
  );
};

export default NarutoEspeciais2026;