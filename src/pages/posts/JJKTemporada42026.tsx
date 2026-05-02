import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen, Flame } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/jujutsu-kaisen-temporada-4-culling-game-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const JJKTemporada42026 = () => {
  useEffect(() => {
    trackArticleRead(
      "jujutsu-kaisen-temporada-4-culling-game-2026",
      "Jujutsu Kaisen Temporada 4: Culling Game Part 2 Confirmada — O Que Sabemos e Quando Estreia",
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
            Anime · JJK · Temporada 4 · MAPPA
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Jujutsu Kaisen Temporada 4: Culling Game Part 2 Confirmada — O Que Sabemos e Quando Estreia
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Jujutsu Kaisen temporada 4 Culling Game Part 2 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 26 de março de 2026, o episódio 59 de Jujutsu Kaisen — o final da Temporada 3 — foi ao ar com a mensagem que todos esperavam: <strong>"A Temporada 4: Culling Game Part 2 está em produção"</strong>. Após um final devastador da Colônia de Sendai com Yuta Okkotsu, a conta oficial no X confirmou que a luta continua. Não há data de estreia ainda — as apostas ficam entre <strong>fim de 2026 e início de 2027</strong>. Este guia explica tudo que foi confirmado, o que o arco cobre no mangá e quando o JUJU FES 2026 deve trazer novidades.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          O Anúncio: O Que Foi Dito Oficialmente
        </h2>
        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <p className="text-sm font-mono text-center mb-3">— Conta oficial @animejujutsu no X (26/03/2026)</p>
          <blockquote className="text-base italic text-muted-foreground border-l-4 border-otaku pl-4">
            "Muito obrigado por assistir! A luta a morte entre os possuidores de jujutsu — o Shimetsu Kaiyu — continua. O destino de Itadori e seus aliados, que atuam para colocar fim ao jogo, será revelado na Temporada 4: Culling Game Part 2. Fiquem atentos às próximas notícias."
          </blockquote>
        </div>
        <p>
          O anúncio veio imediatamente após o episódio final da T3, seguindo a tradição da MAPPA de confirmar continuações em sequência. A Crunchyroll também confirmou que a produção está em andamento. O que ainda não temos: data de estreia, número de episódios ou confirmação da equipe criativa.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { label: "✅ Confirmado", items: ["Temporada 4 em produção (MAPPA)", "Título: Culling Game Part 2 (Shimetsu Kaiyu Kouhen)", "Crunchyroll como plataforma global", "Diretor Shota Goshozono retorna", "Compositor Yoshimasa Terui retorna"] },
            { label: "❓ Ainda Desconhecido", items: ["Data de estreia (2026 ou 2027?)", "Número de episódios", "Personagens novos no cast de dublagem", "Cobertura exata dos capítulos do mangá", "Se haverá pausa sazonal ou emissão contínua"] },
          ].map(({ label, items }) => (
            <div key={label} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-2">{label}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => <li key={i} className="text-xs text-muted-foreground">• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          O Arco: O Que É o Culling Game e o Que Falta Adaptar
        </h2>
        <p>
          O Culling Game (Shimetsu Kaiyu — literalmente "Jogo do Extermínio") é o arco mais complexo e ambicioso do mangá de Gege Akutami. Iniciou no capítulo 158 e terminou no capítulo 238 — <strong>80 capítulos</strong>. A Temporada 3 cobriu a Parte 1 (cap. 158–212 aproximadamente). A Temporada 4 cobre a Parte 2 (cap. 212–238 e além).
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { col: "🏙️ Colônia de Tóquio", desc: "Megumi Fushiguro e Itadori enfrentam os participantes mais poderosos do jogo. Revelações sobre a natureza de Megumi e Sukuna tomam o centro — considerado o arco mais dark do mangá.", importante: "Revelações CRÍTICAS sobre Sukuna e Megumi" },
            { col: "🌊 Colônia de Sendai (T3 finalizou aqui)", desc: "Yuta Okkotsu na sua colônia — episódio final da T3. A MAPPA transformou esse confronto em uma das melhores sequências de animação da série.", importante: "Concluído na T3 (ep. 59)" },
            { col: "🌙 Colônia da Lua (Tombs of the Star)", desc: "Arco especial que revela segredos da história da feitiçaria e de Tengen. Conecta o Culling Game com os eventos do Incidente de Shibuya.", importante: "Novo — não adaptado ainda" },
            { col: "⚔️ Batalha Final do Culling Game", desc: "Itadori e seus aliados executam o plano para encerrar o jogo. Confronto com os líderes das colônias e com a entidade que orquestrou tudo. Múltiplas mortes de personagens queridos.", importante: "Climax da Temporada 4" },
          ].map(({ col, desc, importante }) => (
            <div key={col} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{col}</h3>
                <span className="text-xs bg-otaku/15 text-otaku px-2 py-0.5 rounded-full shrink-0">{importante}</span>
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          Por Que a Temporada 3 Foi Considerada a Melhor Até Agora
        </h2>
        <p>
          A T3 encerrou com pontuação quase perfeita no IMDB e foi considerada por boa parte da comunidade como a melhor temporada da série. O que fez a diferença:
        </p>
        <ul>
          <li><strong>Episódios especiais de 50+ minutos para confrontos cruciais:</strong> A MAPPA usou o modelo de "episódios dobrados" para dar ao confronto de Yuta a atenção que merecia — sem cortes de orçamento por episódio.</li>
          <li><strong>Direção de arte consistente:</strong> Diferente da T2 (Incidente de Shibuya) que teve críticas por inconsistência visual entre episódios, a T3 manteve qualidade uniforme do início ao fim.</li>
          <li><strong>Adaptação fiel + adições inteligentes:</strong> Cenas do mangá foram expandidas sem filler, adicionando context que a mídia impressa não podia transmitir visualmente.</li>
          <li><strong>Score orquestral de Yoshimasa Terui:</strong> Trilha sonora que rivaliza com as melhores da história do anime — particularmente na batalha final da T3.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Quando a T4 Estreia? As Apostas do Fandom
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Cenário</th>
              <th className="text-left py-3 px-4">Data provável</th>
              <th className="text-left py-3 px-4">Argumento</th>
            </tr></thead>
            <tbody>
              {[
                ["Otimista", "Out/Nov 2026 (inverno JP)", "MAPPA confirmou produção imediatamente. Se a animação está em andamento desde T3, 7 meses é factível para uma janela de inverno.", ""],
                ["Base", "Jan/Fev 2027 (inverno JP)", "Intervalo médio entre T2 e T3 foi de ~18 meses. A MAPPA tem agenda carregada com outros projetos.", "Mais provável"],
                ["Conservador", "Abr/Jul 2027 (primavera/verão JP)", "Se a MAPPA precisar de mais tempo para qualidade — especialmente para as batalhas que fecham o Culling Game.", ""],
                ["JUJU FES 2026", "Anúncio em ago/2026", "O festival de aniversário em agosto deve revelar a data definitiva — como aconteceu com a T3 no ano anterior.", ""],
              ].map(([cen, data, arg, dest]) => (
                <tr key={cen} className={`border-t border-border ${dest ? "bg-otaku/5" : ""}`}>
                  <td className="py-3 px-4 font-medium">{cen} {dest && <span className="text-xs text-otaku ml-1">★ {dest}</span>}</td>
                  <td className="py-3 px-4 text-otaku font-bold text-xs">{data}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{arg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Como Se Preparar para a T4: Guia de Revisão
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { tipo: "📺 Revisão rápida (2–3h)", desc: "Assista os episódios 48–59 (T3, Colônia de Sendai e batalhas finais). Esses são os episódios que configuram diretamente os conflitos da T4." },
            { tipo: "📖 Leia o mangá (mais recomendado)", desc: "Capítulos 212–238 cobrem exatamente o que a T4 vai adaptar. A Shonen Jump e o Manga Plus têm os capítulos disponíveis oficialmente em português." },
            { tipo: "🎬 Recap especial esperado", desc: "A MAPPA e a Crunchyroll costumam lançar um episódio de recap antes da nova temporada. Deve cobrir os eventos principais da T3 em ~25 minutos." },
            { tipo: "🎵 Playlist OST", desc: "A trilha sonora de JJK está no Spotify. Ouvir os temas das batalhas é uma forma de manter o hype enquanto aguarda o lançamento da T4." },
          ].map(({ tipo, desc }) => (
            <div key={tipo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-0.5">{tipo}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está ansioso para a Temporada 4 de JJK? 🔥</h3>
          <p className="text-muted-foreground">Qual batalha você mais quer ver animada? Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="jujutsu-kaisen-temporada-4-culling-game-2026" />
      <NewsletterSignup variant="modal" categories={["otaku"]} showAfterMs={60000} />
      <CommentSection postId="jujutsu-kaisen-temporada-4-culling-game-2026" postTitle="Jujutsu Kaisen Temporada 4: Culling Game Part 2 Confirmada" />
    </article>
  );
};

export default JJKTemporada42026;