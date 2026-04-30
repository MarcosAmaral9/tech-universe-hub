import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Sword } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/zelda-ocarina-of-time-remake-switch-2-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const ZeldaOcarinaRemake2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "zelda-ocarina-of-time-remake-switch-2-2026",
      "Zelda: Ocarina of Time Remake — Tudo que Sabemos sobre o Retorno do Melhor Jogo da História",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Zelda · Ocarina · Remake · Switch 2
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Zelda: Ocarina of Time Remake — Tudo que Sabemos sobre o Retorno do Melhor Jogo da História no Switch 2
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Zelda Ocarina of Time Remake Switch 2 2026 tudo que sabemos" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Durante o Nintendo Direct de fevereiro de 2026, entre os anúncios do Switch 2, a Nintendo revelou algo que fãs esperavam há décadas: <strong>The Legend of Zelda: Ocarina of Time está sendo inteiramente remakeado</strong> para o Nintendo Switch 2. Não uma remasterização (como o port do 3DS em 2011) — um <strong>remake completo em engine moderna</strong>, com gráficos reconstruídos do zero, mantendo a estrutura do jogo original. Para quem não sabe o contexto: Ocarina of Time é consistentemente avaliado como o <em>maior jogo da história</em> em sites como Metacritic e IGN, com nota 99/100 no Nintendo 64. Este guia reúne tudo confirmado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          O Que Foi Confirmado Oficialmente
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">✅ Confirmado pela Nintendo</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Remake completo — engine reconstruída do zero</li>
              <li>• Plataforma: exclusivo Nintendo Switch 2</li>
              <li>• Janela de lançamento: 2026 (sem data específica ainda)</li>
              <li>• Desenvolvedor: Nintendo EPD (estúdio interno)</li>
              <li>• História e estrutura do jogo original preservadas</li>
              <li>• Gráficos completamente reconstruídos</li>
              <li>• Inclui a história de Master Quest (modo alternativo)</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">❓ Ainda Não Confirmado</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Data exata de lançamento</li>
              <li>• Preço final no Brasil</li>
              <li>• Adições ou mudanças de gameplay</li>
              <li>• Novas dungeons ou conteúdo adicional</li>
              <li>• Trilha sonora remixada ou original</li>
              <li>• Modo co-op ou qualquer elemento online</li>
              <li>• Versão física ou digital only</li>
            </ul>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Por Que Ocarina of Time É Considerado o Melhor Jogo de Todos os Tempos
        </h2>
        <p>
          Lançado em novembro de 1998 para Nintendo 64, The Legend of Zelda: Ocarina of Time revolucionou os videogames de maneiras que até hoje influenciam todo o design de jogos 3D:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { contrib: "🎯 Z-Targeting — a invenção do lock-on moderno", desc: "O sistema de mira em terceira pessoa com Z-Targeting foi criado para Ocarina of Time em 1998 e é usado em praticamente todo jogo 3D desde então — de Dark Souls a Horizon Zero Dawn. Antes de OoT, jogos 3D tinham combate confuso. Depois, havia um padrão." },
            { contrib: "🗺️ Transição natural entre interior e exterior sem loading", desc: "A Hyrule de Ocarina of Time foi pioneira no mundo aberto sem telas de loading. Você entrava em construções, cavernas e florestas com uma continuidade espacial que parecia impossível para o hardware da época." },
            { contrib: "⏰ Estrutura de duas linhas temporais jogáveis", desc: "A narrativa de Ocarina of Time com Link criança e Link adulto em duas eras temporais — com o mundo mudando drasticamente entre elas — foi inovação narrativa que influenciou toda a indústria. A Hyrule adulta dominada por Ganon ainda hoje é um dos momentos mais impactantes já criados em games." },
            { contrib: "🏰 O modelo de dungeon perfeita", desc: "Cada uma das 9 dungeons de OoT tem um item central que define sua mecânica de forma coesa. O modelo 'item da dungeon que resolve puzzles e combates da dungeon' ainda é o template padrão para jogos de ação-aventura 28 anos depois." },
          ].map(({ contrib, desc }) => (
            <div key={contrib} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{contrib}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="not-prose my-4 bg-card rounded-xl border border-geek/30 p-5">
          <h3 className="font-bold text-geek mb-3">📊 Notas Históricas de Ocarina of Time</h3>
          <div className="space-y-2">
            {[
              { plat: "Metacritic (N64, 1998)", nota: "99/100 — nota mais alta da história do site", dest: true },
              { plat: "GameRankings (N64)", nota: "97,54% — também recorde histórico", dest: false },
              { plat: "IGN", nota: "10/10 — uma de poucas notas perfeitas", dest: false },
              { plat: "Nintendo 3DS Remake (2011)", nota: "94/100 no Metacritic", dest: false },
              { plat: "Jogadores (MyGameList, 2026)", nota: "4,8/5 com 2,3 milhões de avaliações", dest: false },
            ].map(({ plat, nota, dest }) => (
              <div key={plat} className={`flex items-center justify-between gap-2 py-1.5 border-b border-border last:border-0 ${dest ? "font-bold" : ""}`}>
                <span className="text-sm">{plat}</span>
                <span className={`text-xs ${dest ? "text-geek font-bold" : "text-muted-foreground"}`}>{nota}</span>
              </div>
      <AdInArticle />
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          Remake vs Remaster: A Diferença Crucial
        </h2>
        <p>
          A Nintendo usou a palavra <strong>"remake"</strong> — não remaster — e isso importa muito. A diferença é significativa:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-3 text-sm">🔧 Remaster (o que tínhamos no 3DS)</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Mesma engine do jogo original</li>
              <li>• Texturas melhoradas em cima do original</li>
              <li>• Gameplay idêntico ao de 1998</li>
              <li>• Problemas originais mantidos</li>
              <li>• Produção: 1–2 anos tipicamente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/30 p-5">
            <h3 className="font-bold mb-3 text-sm text-geek">🏗️ Remake (Switch 2)</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Engine completamente nova</li>
              <li>• Gráficos criados do zero — arte mantida, visual moderno</li>
              <li>• Gameplay pode ser refinado (sem alterar a estrutura)</li>
              <li>• Problemas originais potencialmente corrigidos</li>
              <li>• Produção: 3–5 anos tipicamente</li>
            </ul>
          </div>
        </div>
        <p>
          O exemplo mais próximo de referência é o <strong>Resident Evil 2 Remake</strong> da Capcom (2019) — que manteve toda a história e estrutura do original de 1998 mas reconstruiu absolutamente tudo do zero visualmente e mecanicamente. A Nintendo não deu exemplos concretos de mudanças de gameplay, mas a palavra "remake" garante que o visual será moderno, não apenas filtrado.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Comparativo: Versões de Ocarina of Time ao Longo dos Anos
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Versão</th>
              <th className="text-left py-3 px-4">Ano</th>
              <th className="text-left py-3 px-4">Hardware</th>
              <th className="text-left py-3 px-4">Diferencial</th>
            </tr></thead>
            <tbody>
              {[
                ["Original", "1998", "Nintendo 64", "Revolucionário para a época. Base de todo jogo 3D que veio depois"],
                ["Master Quest", "2003", "GameCube", "Dungeons com puzzles invertidos e mais difíceis. Incluída na versão 3DS"],
                ["Virtual Console", "2007–2016", "Wii / Wii U / 3DS VC", "Port digital sem melhorias visuais"],
                ["3DS Remaster", "2011", "Nintendo 3DS", "Gráficos melhorados, giroscópio, Master Quest incluída, Iron Boots no touch screen"],
                ["Nintendo Switch Online + Expansion", "2021", "Nintendo Switch 1", "Versão N64 original via streaming — sem melhorias"],
                ["Switch 2 Remake (2026)", "2026", "Nintendo Switch 2", "Engine moderna do zero. Gráficos completamente novos. Primeira mudança visual real em 15 anos"],
              ].map(([ver, ano, hw, diff]) => (
                <tr key={ver} className={`border-t border-border ${ver.includes("2026") ? "bg-geek/5" : ""}`}>
                  <td className="py-3 px-4 font-bold text-geek text-xs">{ver}</td>
                  <td className="py-3 px-4 text-xs">{ano}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{hw}</td>
                  <td className="py-3 px-4 text-xs">{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          O Remake Vale a Pena? Para Quem É?
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "🧓 Veteranos que jogaram o original em 1998", obs: "Este é o remake que você esperou 28 anos. Revisitar Ocarina of Time com gráficos modernos enquanto mantém a estrutura que você ama é uma proposta única. Vai gerar nostalgia pura com apresentação nova." },
            { perfil: "🆕 Novos jogadores que nunca jogaram", obs: "A melhor oportunidade em décadas para entrar no jogo mais influente da história. Sem a 'data' dos gráficos de 1998 que pode afastar novatos — o remake apresenta a experiência de forma acessível para 2026." },
            { perfil: "🎮 Jogadores de Breath of the Wild / Tears of the Kingdom", obs: "Atenção: Ocarina of Time é um Zelda completamente diferente — linear, focado em dungeons, sem mundo aberto livre. É como comparar The Last of Us com Elden Ring. Se você veio pelo open world de BotW/TotK, pode precisar de ajuste de expectativas." },
          ].map(({ perfil, obs }) => (
            <div key={perfil} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1">{perfil}</h3>
              <p className="text-sm text-muted-foreground">{obs}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já jogou Ocarina of Time? Está animado com o remake? 🗡️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="zelda-ocarina-of-time-remake-switch-2-2026" />
      <CommentSection postId="zelda-ocarina-of-time-remake-switch-2-2026" postTitle="Zelda: Ocarina of Time Remake — Tudo que Sabemos sobre o Retorno do Melhor Jogo da História no Switch 2" />
    </article>
  );
};

export default ZeldaOcarinaRemake2026;