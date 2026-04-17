import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Star, Zap, Shield, BarChart3, BookOpen, Anchor } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/one-piece-final-saga-guia-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const OnePieceElbaf2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "one-piece-elbaf-formato-sazonal-2026",
      "One Piece Arco de Elbaf: A Ilha dos Gigantes, Novo Formato Sazonal e Tudo que Já Sabemos",
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
            Anime · One Piece · Elbaf 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          One Piece Arco de Elbaf: A Ilha dos Gigantes, o Novo Formato Sazonal e Tudo que Já Sabemos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="One Piece Elbaf arco ilha dos gigantes 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 5 de abril de 2026, após três meses de pausa, One Piece voltou. E quando voltou, trouxe algo que a série não fazia em 27 anos de história: <strong>abandonou o modelo de emissão semanal contínua para adotar um formato sazonal</strong>, igual a Attack on Titan e Jujutsu Kaisen. O arco de Elbaf — a ilha dos gigantes prometida desde Little Garden em 1999 — estreou com um episódio de 50 minutos que deixou fãs eufóricos. Este guia explica tudo sobre essa mudança histórica e o que esperar do arco mais aguardado da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          A Mudança Histórica: One Piece Sazonal
        </h2>
        <p>
          Por 27 anos, One Piece emitiu semanalmente de forma contínua — sem intervalos planejados longos. O resultado foi a infame diluição do ritmo: episódios com 8 minutos de recap, cenas se arrastando por 4 episódios, flashbacks repetidos ao exaustão. A série ficou conhecida como "o anime com mais filler da história" por causa desse modelo.
        </p>
        <p>
          Em março de 2026, a Toei Animation anunciou: a partir do Arco de Elbaf, One Piece seria emitido em <strong>blocos sazonais de 12–13 episódios</strong>, com pausas de 2–3 meses entre cada bloco. O objetivo declarado é produzir episódios com qualidade de animação consistente em todos os frames — sem o declínio visual que marcava as semanas de menor orçamento.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { titulo: "Antes (modelo antigo)", desc: "52 episódios/ano continuamente. Fillers, recap, animação inconsistente.", icon: "📉", cor: "border-red-500/20" },
            { titulo: "Agora (modelo sazonal)", desc: "Blocos de 12–13 eps com pausas. Animação premium em todos os eps.", icon: "📈", cor: "border-green-500/20" },
            { titulo: "Exemplo de referência", desc: "Attack on Titan — qualidade cinematográfica porque tinha tempo para produzir.", icon: "⚔️", cor: "border-otaku/20" },
          ].map(({ titulo, desc, icon, cor }) => (
            <div key={titulo} className={`bg-card rounded-xl border ${cor} p-4 text-center`}>
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm mb-1">{titulo}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Anchor className="h-7 w-7 text-otaku" />
          Por Que Elbaf é Tão Importante? A Promessa de 27 Anos
        </h2>
        <p>
          Elbaf foi mencionada pela primeira vez no capítulo 115 do mangá, no Arco de Little Garden (ano 2000 no anime). Desde então, a ilha dos gigantes vikings ficou como uma das maiores promessas narrativas pendentes da série — mencionada, citada, prometida por quase três décadas sem nunca aparecer de verdade.
        </p>
        <p>
          Além de ser o sonho de infância de <strong>Usopp</strong> (que sempre quis se tornar um Guerreiro dos Mares), Elbaf tem conexões diretas com os maiores mistérios da saga final:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { tema: "Usopp e os Guerreiros dos Mares", desc: "Desde o encontro com Dorry e Brogy em Little Garden, Usopp prometeu se tornar um guerreiro digno de Elbaf. Este arco é a resolução do arco mais longo de desenvolvimento de personagem da série.", icon: "🎯" },
            { tema: "O passado de Shanks", desc: "Shanks tem conexão profunda com Elbaf — os gigantes respeitam ele de forma incomum para um pirata jovem. Revelações sobre o passado de Shanks (e sua relação com Roger) devem aparecer aqui.", icon: "🔴" },
            { tema: "Os Gorosei e Im-sama", desc: "O mangá revelou que o Arco de Elbaf terá confronto com forças do Governo Mundial. Detalhes sobre a natureza de Im-sama podem começar a ser revelados.", icon: "👁️" },
            { tema: "Joy Boy e o Void Century", desc: "Com as revelações de Egghead recentes sobre o Século Vazio, Elbaf pode ser o local de mais pistas sobre o primeiro Joy Boy e o que realmente aconteceu 800 anos atrás.", icon: "📜" },
          ].map(({ tema, desc, icon }) => (
            <div key={tema} className="flex gap-3 bg-card rounded-xl border border-otaku/20 p-4">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{tema}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          O Episódio de Estreia: 50 Minutos de One Piece Premium
        </h2>
        <p>
          O primeiro episódio de Elbaf durou 50 minutos — o dobro do normal — e foi produzido por uma equipe expandida da Toei com vários diretores de animação de alto nível convidados. As reações foram quase unânimes: <strong>melhor animação da história da série</strong>, rivalizada apenas por episódios especiais de películas anteriores.
        </p>
        <p>
          Sem entrar em spoilers: o episódio mostrou a chegada dos Chapéus de Palha à beira de Elbaf com uma sequência de ação que a comunidade comparou a cenas de Attack on Titan Final Season. A trilha sonora foi completamente regravada com orquestra ao vivo para o bloco de Elbaf. Vários fãs reportaram "arrepios" ao ver a ilha pela primeira vez — 27 anos de espera fazem a chegada emocionalmente poderosa.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Onde Acompanhar e Calendário de Episódios
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Bloco</th>
              <th className="text-left py-3 px-4">Episódios</th>
              <th className="text-left py-3 px-4">Previsão</th>
              <th className="text-left py-3 px-4">Plataforma</th>
            </tr></thead>
            <tbody>
              {[
                ["Bloco 1 (Elbaf: Chegada)", "1–13", "Abr–Jun 2026", "Crunchyroll (simulcast)"],
                ["Pausa de produção", "—", "Jul–Set 2026", "—"],
                ["Bloco 2 (Elbaf: Confronto)", "14–26+", "Out–Dez 2026", "Crunchyroll (simulcast)"],
                ["Bloco 3 (Elbaf: Revelações)", "TBD", "2027", "Crunchyroll (simulcast)"],
              ].map(([bloco, eps, prev, plat]) => (
                <tr key={bloco} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-otaku">{bloco}</td>
                  <td className="py-3 px-4">{eps}</td>
                  <td className="py-3 px-4 text-muted-foreground">{prev}</td>
                  <td className="py-3 px-4 text-xs">{plat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">*Calendário aproximado baseado no modelo sazonal anunciado. Sujeito a alterações pela Toei.</p>
        </div>
        <p>
          One Piece está disponível na <strong>Crunchyroll</strong> com simulcast legendado em português no mesmo dia do Japão. O episódio 1 do Arco de Elbaf está disponível agora. Para quem quer assistir o anime do início, o serviço também tem toda a biblioteca histórica disponível.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Por Onde Começar One Piece em 2026: Guia Rápido
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { opcao: "🕐 Não tem tempo para 1.000+ eps", rec: "Comece com o projeto 'One Pace' (onepace.net) — versão editada da comunidade que remove os fillers e o excesso de padding. Reduz a série em ~35% sem perder nada da história." },
            { opcao: "📖 Prefere ler", rec: "O mangá está disponível na plataforma oficial Manga Plus (gratuita) ou na Shueisha+. O ritmo é muito mais ágil que o anime e permite chegar ao arco atual em muito menos tempo." },
            { opcao: "⚡ Quer entrar só em Elbaf", rec: "Sim, é possível — mas você perderá muito do impacto emocional. Se quiser um 'resumão', vídeos de 4–8h no YouTube cobrem toda a saga até Egghead de forma satisfatória." },
          ].map(({ opcao, rec }) => (
            <div key={opcao} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1">{opcao}</h3>
              <p className="text-sm text-muted-foreground">{rec}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está acompanhando o Arco de Elbaf? ⚓</h3>
          <p className="text-muted-foreground">Conta nos comentários sua reação ao primeiro episódio! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="one-piece-elbaf-formato-sazonal-2026" />
      <CommentSection postId="one-piece-elbaf-formato-sazonal-2026" postTitle="One Piece Arco de Elbaf: A Ilha dos Gigantes e o Novo Formato Sazonal" />
    </article>
  );
};

export default OnePieceElbaf2026;
