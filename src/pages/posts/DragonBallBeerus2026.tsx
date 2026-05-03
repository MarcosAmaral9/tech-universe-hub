import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen, Flame } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/dragon-ball-super-beerus-anime-confirmado-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const DragonBallBeerus2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "dragon-ball-super-beerus-anime-confirmado-2026",
      "Dragon Ball Super: Arco do Beerus Confirmado como Anime em 2026 — Tudo que Sabemos",
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
            Dragon Ball · Anime · Toei Animation · 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Dragon Ball Super: Arco do Beerus Confirmado como Anime em 2026 — Tudo que Sabemos sobre o Retorno da Franquia
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />30 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Dragon Ball Super arco Beerus anime confirmado 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Durante o <strong>Dragon Ball Battle Hour 2026</strong> realizado no fim de semana de 26–27 de abril, a Toei Animation fez o anúncio que a comunidade esperava desde o encerramento de Dragon Ball Super em 2018: <strong>o Arco de Beerus do mangá de Dragon Ball Super — a história inédita que vai além do anime original — está confirmado como adaptação animada</strong>. Somado ao Dragon Ball Daima (2024–2025), isso significa que a franquia de Akira Toriyama nunca esteve tão ativa após a morte do criador em março de 2024. Este artigo explica o que foi anunciado, qual história será adaptada e quando esperar o novo anime.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          O Anúncio: O Que Foi Confirmado no Dragon Ball Battle Hour 2026
        </h2>
        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <h3 className="font-bold text-otaku mb-3">📢 Confirmado oficialmente (26–27 de abril de 2026)</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ <strong className="text-foreground">Novo anime de Dragon Ball Super em produção</strong> pela Toei Animation</li>
            <li>✅ <strong className="text-foreground">Adaptação do Arco de Beerus</strong> do mangá (a história inédita que continua após o anime DBS de 2015–2018)</li>
            <li>✅ <strong className="text-foreground">Toyotarou</strong> (mangakista de DBS, discípulo de Toriyama) supervisionando a adaptação</li>
            <li>✅ <strong className="text-foreground">Produção em andamento</strong> — mas sem data de estreia anunciada</li>
            <li>✅ <strong className="text-foreground">Janela estimada: 2027</strong> (inferida pelo estágio de produção descrito)</li>
            <li>❓ <strong className="text-foreground">Crunchyroll</strong> como distribuidor global — não confirmado mas esperado pela parceria existente</li>
          </ul>
        </div>
        <p>
          O evento Dragon Ball Battle Hour é o maior evento anual da franquia — um festival presencial em Tóquio transmitido ao vivo globalmente, com revelações, torneios competitivos e painéis dos criadores. O anúncio foi feito ao vivo no palco principal e gerou uma das maiores reações de público em anos de eventos Dragon Ball.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Qual É o Arco de Beerus? A História que o Anime Nunca Contou
        </h2>
        <p>
          Aqui está o contexto essencial: o anime <strong>Dragon Ball Super</strong> (2015–2018) adaptou os filmes Battle of Gods e Resurrection 'F' e depois criou os arcos do Universo 6, do Futuro Trunks, e do Torneio do Poder. O anime encerrou em março de 2018.
        </p>
        <p>
          Mas o <strong>mangá de Dragon Ball Super</strong> (escrito por Toyotarou, com supervisão e roteiro de Toriyama) continuou — e criou arcos completamente originais que o anime nunca adaptou:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { arco: "⚔️ Arco de Moro (capítulos 43–67)", status: "Mangá apenas — nunca animado", desc: "Um feiticeiro maligno de bilhões de anos que absorve a energia vital dos planetas e dos guerreiros. Um dos arcos mais bem recebidos do mangá DBS — introduz novos movimentos para Goku (Migatte no Gokui Completo) e Vegeta (Hakai)." },
            { arco: "🌌 Arco de Granolah (cap. 68–87)", status: "Mangá apenas — nunca animado", desc: "O último Cerealiano busca vingança contra Frieza e os Saiyajins. Arco que aprofunda a história de origem de Goku, Bardock e o povo Saiyajin. Considerado o mais ambicioso narrativamente do mangá." },
            { arco: "🔱 Arco de Beerus (cap. 88+)", status: "✅ CONFIRMADO PARA ANIME", desc: "O arco mais recente do mangá — ainda em publicação mensal na V-Jump. Envolve revelações sobre o passado de Beerus como Deus da Destruição e sua relação com o Zeno-sama. Personagens completamente novos foram introduzidos." },
          ].map(({ arco, status, desc }) => (
            <div key={arco} className={`bg-card rounded-xl border p-4 ${status.includes("CONFIRMADO") ? "border-otaku/50 bg-otaku/5" : "border-muted"}`}>
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm">{arco}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${status.includes("CONFIRMADO") ? "bg-otaku/20 text-otaku" : "bg-muted text-muted-foreground"}`}>{status}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          Uma pergunta óbvia surge: <strong>por que pular Moro e Granolah e adaptar direto o Arco de Beerus?</strong> A resposta mais provável: os arcos de Moro e Granolah ainda são relativamente recentes no mangá e podem ser adaptados depois como séries separadas ou episódios especiais. O Arco de Beerus, sendo o mais atual e com revelações sobre personagens centrais como o próprio Beerus e Zeno, tem o maior apelo de marketing agora.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-otaku" />
          O Arco de Beerus: O Que Sabemos (sem spoilers maiores)
        </h2>
        <p>
          O Arco de Beerus no mangá — que começou no capítulo 88 e ainda está em publicação mensal — gira em torno de revelações sobre a natureza dos Deuses da Destruição e as origens do sistema de deuses no universo de Dragon Ball. Sem spoilers específicos, os elementos confirmados incluem:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { el: "🐾 Beerus como protagonista", desc: "Pela primeira vez em Dragon Ball, um Deus da Destruição tem papel central como personagem principal — não apenas como antagonista/aliado secundário. Isso exige que a animação encontre um tom para Beerus diferente do que o anime DBS estabeleceu." },
            { el: "🆕 Novos personagens de destaque", desc: "O arco introduz personagens completamente originais — sem precedente no anime de 2015–2018 — que interagem diretamente com Beerus, Goku e Vegeta. A recepção da comunidade ao designs foi muito positiva." },
            { el: "📜 História de origem expandida", desc: "O arco expande a mitologia de Dragon Ball de formas que Toriyama planejou mas nunca executou no anime — incluindo revelações sobre o que acontece com Deuses da Destruição que falham em seus deveres." },
            { el: "💜 Whis com papel expandido", desc: "O anjo-tutor de Beerus tem papel mais ativo no arco — revelando aspectos do sistema de anjos que permaneciam misteriosos desde Dragon Ball Super original." },
          ].map(({ el, desc }) => (
            <div key={el} className="flex gap-3 bg-card rounded-xl border border-otaku/20 p-4">
              <span className="text-xl shrink-0">{el.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{el.split(" ").slice(1).join(" ")}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Dragon Ball Daima e o Legado de Toriyama
        </h2>
        <p>
          Para entender o peso do anúncio, é preciso contextualizar com o Dragon Ball Daima. Após a morte de Akira Toriyama em <strong>1º de março de 2024</strong>, havia genuine preocupação sobre o futuro da franquia. A Toei respondeu com Dragon Ball Daima — um anime original que foi a última obra supervisionada por Toriyama antes de sua morte. O criador participou do desenvolvimento do enredo, dos personagens e dos designs antes de falecer.
        </p>
        <p>
          Dragon Ball Daima (2024–2025) recebeu recepção mista: fãs elogiaram a animação e o retorno ao humor do Dragon Ball original (Goku criança novamente), mas criticaram o ritmo e a narrativa mais simples. Com 20 episódios, encerrou em março de 2025 com uma nota emocional — uma homenagem explícita a Toriyama no episódio final.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/20 p-5">
          <h3 className="font-bold text-otaku mb-3">📊 Cronologia Dragon Ball pós-Super (2018–2027)</h3>
          <div className="space-y-2">
            {[
              { ano: "2018", ev: "Dragon Ball Super (anime) encerrado — arco do Torneio do Poder" },
              { ano: "2022", ev: "Dragon Ball Super: Super Hero — filme com Gohan como protagonista (US$ 87M global)" },
              { ano: "2024–2025", ev: "Dragon Ball Daima — último anime supervisionado por Toriyama" },
              { ano: "Mar 2024", ev: "☪️ Morte de Akira Toriyama, aos 68 anos" },
              { ano: "2024–hoje", ev: "Mangá DBS continua mensalmente com Toyotarou" },
              { ano: "2027 (est.)", ev: "✅ Anime do Arco de Beerus — CONFIRMADO no Battle Hour 2026" },
            ].map(({ ano, ev }) => (
              <div key={ano} className={`flex gap-3 py-1.5 border-b border-border last:border-0 ${ev.includes("CONFIRMADO") ? "font-bold" : ""}`}>
                <span className="text-otaku text-xs font-mono w-16 shrink-0">{ano}</span>
                <span className={`text-xs ${ev.includes("CONFIRMADO") ? "text-otaku" : "text-muted-foreground"}`}>{ev}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-otaku" />
          Quando Vai Estrear e Onde Assistir
        </h2>
        <p>
          A Toei Animation não anunciou data de estreia — apenas confirmou que o anime está "em produção". Com base no histórico da empresa e no estágio descrito de produção, as estimativas mais conservadoras da comunidade apontam para:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Cenário</th>
              <th className="text-left py-3 px-4">Data estimada</th>
              <th className="text-left py-3 px-4">Argumento</th>
            </tr></thead>
            <tbody>
              {[
                ["Otimista", "Q1 2027 (jan–mar)", "Produção está avançada o suficiente para estreia em 9 meses. Toei quer aproveitar o momentum do anúncio."],
                ["Base (mais provável)", "Q2–Q3 2027 (abr–set)", "Produção de 12–18 meses é o padrão para novos animes da Toei com qualidade adequada."],
                ["Conservador", "Q4 2027 ou 2028", "Se o mangá ainda está em publicação e a Toei quer manter distância para não ultrapassar o mangá com o anime."],
              ].map(([cen, data, arg]) => (
                <tr key={cen} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{cen}</td>
                  <td className="py-3 px-4 text-otaku font-bold text-xs">{data}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{arg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Quanto à plataforma: Dragon Ball Super foi distribuído pela Crunchyroll no Brasil com simulcast legendado em português. Dragon Ball Daima também foi pela Crunchyroll. É altamente esperado que o Arco de Beerus siga o mesmo caminho — mas não há confirmação oficial.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Como Se Preparar: Por Onde Entrar em Dragon Ball Super
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "🆕 Nunca vi Dragon Ball", rec: "Comece pelo Dragon Ball Z — o clássico que definiu a franquia. Disponível no Crunchyroll. DBZ tem ~291 episódios canônicos (sem fillers, pela versão Kai). Depois, Dragon Ball Super é a continuação direta pós-DBZ.", plat: "Crunchyroll" },
            { perfil: "📺 Só assisti DBZ — nunca vi DBS", rec: "Dragon Ball Super (2015–2018) tem 131 episódios. O Arco do Torneio do Poder (eps 77–131) é considerado o melhor da série. Se quiser a história completa antes do Arco de Beerus, assista DBS completo.", plat: "Crunchyroll" },
            { perfil: "📖 Quero ler o mangá agora", rec: "O mangá de DBS está disponível na Manga Plus (gratuita) e tem capítulos mensais. Para chegar ao Arco de Beerus (cap. 88+), você precisará ler os arcos de Moro e Granolah antes — ambos excelentes e inéditos como anime.", plat: "Manga Plus (gratuito) — Shueisha" },
          ].map(({ perfil, rec, plat }) => (
            <div key={perfil} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1">{perfil}</h3>
              <p className="text-xs text-muted-foreground mb-1">{rec}</p>
              <p className="text-xs text-otaku font-medium">{plat}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está animado com o anime do Arco de Beerus? ⚡</h3>
          <p className="text-muted-foreground">Você leu o mangá? Qual arco inédito quer ver animado primeiro? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="dragon-ball-super-beerus-anime-confirmado-2026" />
      <CommentSection postId="dragon-ball-super-beerus-anime-confirmado-2026" postTitle="Dragon Ball Super: Arco do Beerus Confirmado como Anime em 2026" />
    </article>
  );
};

export default DragonBallBeerus2026;
