import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/pragmata-capcom-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const PragmataCapcom2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "pragmata-capcom-guia-completo-2026",
      "PRAGMATA: Guia Completo do Novo Jogo da Capcom — Gameplay, História e Vale a Pena?",
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
            Games · Capcom · Abril 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          PRAGMATA: Guia Completo do Novo Jogo da Capcom — Gameplay, História e Vale a Pena?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9] sm:aspect-video bg-card">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="PRAGMATA Capcom 2026 — astronauta e menina holográfica olhando a Terra a partir da Lua"
          loading="eager"
          decoding="async"
          width={1920}
          height={1071}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anunciada em 2020, adiada quatro vezes e finalmente lançada em <strong>17 de abril de 2026</strong>, PRAGMATA é uma das novas IPs mais corajosas da Capcom em anos. Ambientada numa colônia lunar abandonada, o jogo mistura ação sci-fi, combate com mecânicas de hacking e uma narrativa emocional entre um soldado e uma misteriosa menina holográfica. Após o lançamento, reunimos análises, nota da crítica e um guia completo para você decidir se vale cada centavo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica e Nota da Crítica
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Informações Gerais</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏢 <strong className="text-foreground">Desenvolvedor:</strong> Capcom</li>
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 17 de abril de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas:</strong> PS5, Xbox Series X|S, PC, Switch 2</li>
              <li>🏷️ <strong className="text-foreground">Preço:</strong> R$ 299,90 (Standard) / R$ 399,90 (Deluxe)</li>
              <li>⏱️ <strong className="text-foreground">Duração:</strong> ~18–22h (campanha principal)</li>
              <li>🌐 <strong className="text-foreground">Legendas PT-BR:</strong> Sim</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">⭐ Notas da Crítica</h3>
            <div className="space-y-2">
              {[
                { site: "Metacritic", nota: "84/100", base: "(72 críticas)" },
                { site: "OpenCritic", nota: "85/100", base: "Strong" },
                { site: "Steam", nota: "Very Positive 87%", base: "(12k+ reviews)" },
                { site: "IGN Brasil", nota: "8,5/10", base: "\"Espetacular\"" },
                { site: "Gamespot", nota: "8/10", base: "\"Grande nova IP\"" },
              ].map(({ site, nota, base }) => (
                <div key={site} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{site}</span>
                  <div className="text-right">
                    <span className="font-bold text-geek">{nota}</span>
                    <span className="text-xs text-muted-foreground ml-1">{base}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          História: Hugh e Diana na Lua
        </h2>
        <p>
          PRAGMATA segue <strong>Hugh Williams</strong>, um técnico militar enviado para investigar uma colônia lunar que perdeu contato com a Terra. Ao chegar, ele descobre que a colônia foi tomada por uma IA militar chamada PRAGMA, que corrompeu todos os sistemas e transformou os habitantes em drones mecânicos. Em meio ao caos, Hugh encontra <strong>Diana</strong>, uma menina holográfica que parece saber mais do que deveria sobre o que aconteceu.
        </p>
        <p>
          A dupla Hugh-Diana é o coração emocional do jogo. Diana pode interagir com os sistemas da colônia e hackear inimigos diretamente — criando uma dinâmica de cooperação única onde <strong>você não pode atacar a maioria dos inimigos sem primeiro hackear com Diana</strong>. Isso torna cada encontro um quebra-cabeça tático.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { personagem: "Hugh Williams", desc: "Ex-militar pragmático e cínico. Força bruta, combate corpo a corpo e arsenal pesado. Arco de redenção ao longo do jogo.", icon: "💪" },
            { personagem: "Diana (IA holográfica)", desc: "Menina misteriosa criada digitalmente. Pode hackear sistemas, controlar drones e revelar informações ocultas sobre a colônia.", icon: "🔮" },
          ].map(({ personagem, desc, icon }) => (
            <div key={personagem} className="bg-card rounded-xl border border-geek/20 p-4">
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm mb-1">{personagem}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Gameplay: O Sistema de Hack-e-Ataque
        </h2>
        <p>
          A maior inovação de PRAGMATA é seu sistema de combate <strong>duplo: hackear com Diana, atacar com Hugh</strong>. Inimigos protegidos por escudos digitais não tomam dano convencional — Diana precisa primeiro analisar a frequência do escudo e interrompê-lo, enquanto Hugh cobre ela dos ataques. Isso cria um ritmo único:
        </p>
        <ul>
          <li><strong>Fase de análise:</strong> Diana escaneia o inimigo e encontra a vulnerabilidade. Você tem 3–10 segundos dependendo do tipo de inimigo.</li>
          <li><strong>Janela de hack:</strong> Diana trava o escudo por alguns segundos. É o momento de atacar com Hugh de forma agressiva.</li>
          <li><strong>Contra-hack:</strong> Alguns inimigos tentam hackear de volta. Você entra num minijogo de sequência para bloquear.</li>
          <li><strong>Execução:</strong> Inimigos reduzidos abaixo de 30% de vida ficam vulneráveis a finalizações cinematográficas co-op.</li>
        </ul>
        <p>
          Críticos elogiam o sistema como "genuinamente inovador" — um shooter de ação que exige raciocínio tático em vez de apenas reflexo. O lado negativo apontado: contra chefes menores, a rotina pode parecer repetitiva nas primeiras horas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          O Que a Crítica Elogiou e O Que Criticou
        </h2>
      <AdInArticle />
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Pontos Fortes</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Visual deslumbrante — melhor ray tracing já visto num jogo Capcom</li>
              <li>• Sistema de combate inovador e satisfatório</li>
              <li>• Narrativa emocional com reviravoltas genuínas</li>
              <li>• Trilha sonora orquestral de alto nível</li>
              <li>• Duração ideal: não estica artificialmente</li>
              <li>• Cenas de cutscene de qualidade cinematográfica</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">⚠️ Pontos Fracos</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Ritmo lento nas primeiras 3 horas (tutorial extenso)</li>
              <li>• Exploração do mundo aberto limitada</li>
              <li>• Alguns quebra-cabeças podem frustrar sem guia</li>
              <li>• Sem modo multiplayer ou co-op local</li>
              <li>• Bosses intermediários menos inspirados</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Análise por Perfil
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre se você...", items: ["Gosta de jogos narrativos com história bem escrita (The Last of Us, Death Stranding)", "Curte mecânicas de combate táticas e únicas", "Aprecia jogos da Capcom (Resident Evil, Devil May Cry)", "Quer um jogo single player sólido de 20h sem side-quests forçadas"], cor: "border-green-500/30" },
            { perfil: "⏳ Espere um desconto se...", items: ["Você prefere open world massivo com centenas de horas de conteúdo", "Não curte puzzle/hacking integrado ao combate", "Está esperando mais reviews sobre o conteúdo pós-campanha", "O preço de R$ 299,90 está fora do orçamento agora — projeção de 40% de desconto em 3–4 meses"], cor: "border-yellow-500/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já jogou PRAGMATA? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários o que achou! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="pragmata-capcom-guia-completo-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="pragmata-capcom-guia-completo-2026" postTitle="PRAGMATA: Guia Completo do Novo Jogo da Capcom" />
    </article>
  );
};

export default PragmataCapcom2026;