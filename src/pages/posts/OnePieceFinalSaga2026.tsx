import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Anchor, Map, Star, BookOpen } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/one-piece-final-saga-2026.webp";

const OnePieceFinalSaga2026 = () => {
  useEffect(() => {
    trackArticleRead("one-piece-final-saga-2026", "One Piece Final Saga: Onde Estamos e O Que Esperar do Final", "otaku");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation categoryPath="/otaku" categoryLabel="Otaku" />
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="otaku" size="lg" />
        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">Mangá · One Piece</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        One Piece Final Saga: Onde Estamos e O Que Esperar do Final
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={heroImg} alt="One Piece Final Saga 2026 — onde estamos" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Em julho de 2022, Eiichiro Oda anunciou que One Piece havia entrado em sua <strong>Final Saga</strong>. Mais de 1.100 capítulos e 27 anos depois do primeiro capítulo publicado em 1997, a jornada de Monkey D. Luffy está chegando ao fim — mas ainda há muito pela frente. Este guia resume onde estamos e o que sabemos sobre o desfecho.
      </p>

      <div className="not-prose my-8 p-5 bg-gradient-to-br from-pink-500/10 to-background rounded-xl border border-pink-500/30">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5 text-pink-400" />Números de One Piece</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            ["Início", "22 jul. 1997 (Weekly Shonen Jump)"],
            ["Capítulos", "1.100+ (em andamento)"],
            ["Volumes", "107+ tankobon"],
            ["Cópias vendidas", "530+ milhões (recordista mangá)"],
          ].map(([k, v]) => (
            <div key={k}><div className="text-xs text-muted-foreground">{k}</div><div className="font-semibold text-sm">{v}</div></div>
          ))}
        </div>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Map className="h-7 w-7 text-pink-400" />A Final Saga: Estrutura dos Arcos
      </h2>
      <p>A Final Saga começou com o <strong>Arco de Egghead</strong> (capítulos 1058 em diante), a ilha do Dr. Vegapunk. Este arco se tornou um dos mais importantes da série em termos de revelações sobre a história do mundo, o Governo Mundial e o Rio Poneglyph.</p>

      <div className="not-prose my-6 space-y-3">
        {[
          { arco: "Egghead (Ilha do Futuro)", caps: "1058–1120+", status: "Recente", desc: "Ilha do Dr. Vegapunk. Revelações sobre a história proibida do mundo, os Gorosei em forma de Mytical Zoan, e o início do 'Incident of Egghead'." },
          { arco: "Elbaf (A Terra dos Gigantes)", caps: "A confirmar", status: "Próximo arco", desc: "Ilha dos gigantes nórdicos, anunciada por Oda. Esperada a interação com Shanks e o início do confronto final." },
          { arco: "Ilha do Fim / Laugh Tale", caps: "A confirmar", status: "Arco final", desc: "O One Piece e as respostas sobre o Vazio de 100 Anos. O fim da jornada de Luffy." },
        ].map(a => (
          <div key={a.arco} className="bg-card rounded-xl border border-border p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">{a.arco}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${a.status === "Recente" ? "bg-emerald-500/20 text-emerald-400" : a.status === "Próximo arco" ? "bg-yellow-500/20 text-yellow-400" : "bg-pink-500/20 text-pink-400"}`}>{a.status}</span>
            </div>
            <p className="text-xs text-muted-foreground">{caps} {a.caps}</p>
            <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Star className="h-7 w-7 text-pink-400" />Revelações Importantes da Final Saga
      </h2>
      <p><em>(Esta seção contém spoilers do mangá a partir do capítulo 1058)</em></p>
      <ul>
        <li><strong>Os Gorosei são imortais e possuem formas Zoan Mítico</strong> — revelação que redefiniu o poder do Governo Mundial</li>
        <li><strong>Imu-sama existe e tem poderes de destruição em massa</strong> — confirmado como o governante real do Governo Mundial acima dos Gorosei</li>
        <li><strong>Vegapunk gravou uma mensagem para o mundo</strong> transmitida pelos Den Den Mushis revelando informações sobre a história proibida</li>
        <li><strong>O "Incident de Egghead"</strong> foi descrito como um evento que mudaria a história do mundo — comparado pelos personagens ao Incidente de God Valley</li>
        <li><strong>Shanks revelou que tem conexão com os Gorosei</strong> desde a infância — seu papel no final ainda é misterioso</li>
      </ul>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Anchor className="h-7 w-7 text-pink-400" />O One Piece: O Que Sabemos
      </h2>
      <p>Oda confirmou em entrevistas que o <strong>One Piece é um objeto real e físico</strong> — não é "a amizade que fizemos no caminho" ou qualquer interpretação metafórica. O editor de Oda, Naito, disse em 2022 que ficou "em choque" quando Oda lhe revelou o que é o One Piece.</p>
      <p>A teoria mais aceita pela comunidade, baseada nas pistas deixadas ao longo da série, é que o One Piece está relacionado aos Poneglyphs, ao Vazio de 100 Anos e à história do Antigo Reino que o Governo Mundial apagou da história. A Alegria de D. (D.'s Will) e o que aconteceu com Roger sugere que é algo que "mudará o mundo" quando revelado.</p>
      <p>Oda também confirmou que o Joy Boy, figura histórica dos Poneglyphs, e Luffy têm uma conexão direta — reforçada quando Luffy atingiu o Gear 5 e o Gomu Gomu no Mi foi revelado como o Hito Hito no Mi Model: Nika.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Quando Termina One Piece?</h2>
      <p>Oda disse em 2022 que a Final Saga duraria "alguns anos" e que ele quer terminar a série antes dos 60 anos (Oda nasceu em 1975). Em 2023 e 2024, o ritmo de lançamento dos capítulos desacelerou por conta de problemas de saúde e pausas frequentes de Oda.</p>
      <p>A estimativa mais otimista da comunidade é que a série termine entre 2027 e 2028. Considerando o ritmo atual e o volume de história que ainda precisa ser resolvido, entre 2028 e 2030 parece mais realista.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Onde Ler e Assistir</h2>
      <p>O mangá de One Piece é publicado semanalmente (com pausas frequentes) na <strong>Weekly Shonen Jump</strong>. No Brasil, capítulos novos estão disponíveis gratuitamente no <strong>Manga Plus</strong> (mangaplus.shueisha.com) na mesma semana do lançamento japonês. O anime de One Piece está disponível no <strong>Crunchyroll</strong>.</p>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Qual a sua teoria sobre o One Piece?</h3>
        <p className="text-muted-foreground">Compartilhe nos comentários! 👇</p>
      </div>
    </div>
    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "Demon Slayer: Guia dos Hashira", href: "/post/demon-slayer-hashira-guia-2026", desc: "Outro anime de uma geração" },
          { label: "Os Melhores Mangás para Ler em 2026", href: "/post/melhores-mangas-ler-2026", desc: "Próximas leituras após One Piece" },
          { label: "Mangá vs Anime", href: "/post/manga-vs-anime-adaptacao-2026", desc: "Qual versão de One Piece vale mais a pena?" },
        ]}
      />
      <RelatedPosts currentSlug="one-piece-final-saga-2026" category="otaku" />
    <CommentSection postId="one-piece-final-saga-2026" postTitle="One Piece Final Saga 2026" />
  </article>
);
};

export default OnePieceFinalSaga2026;
