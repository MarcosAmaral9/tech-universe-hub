import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/saros-ps5-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const SarosPS52026 = () => {
  useEffect(() => {
    trackArticleRead(
      "saros-housemarque-ps5-2026",
      "SAROS (PS5): Guia Completo do Sucessor Espiritual de Returnal — Vale a Pena?",
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
            Games · PS5 Exclusivo · Roguelike
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          SAROS (PS5): Guia Completo do Sucessor Espiritual de Returnal — Gameplay, Lore e Vale a Pena?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="SAROS PS5 Housemarque 2026 gameplay" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Housemarque voltou. O estúdio finlandês que criou o aclamado Returnal lançou em <strong>30 de abril de 2026</strong> seu novo exclusivo PS5: <strong>SAROS</strong>. Com impressões antecipadas extremamente positivas de criadores de conteúdo e a crítica já classificando como "o melhor jogo do ano até agora", SAROS promete repetir a fórmula vencedora de Returnal — e ir além. Este guia reúne tudo que você precisa saber.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica e Primeiras Notas
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Informações Gerais</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏢 <strong className="text-foreground">Desenvolvedor:</strong> Housemarque (Sony)</li>
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 30 de abril de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas:</strong> PS5 e PS5 Pro (exclusivo)</li>
              <li>🏷️ <strong className="text-foreground">Preço:</strong> R$ 329,90 (Standard) / R$ 419,90 (Digital Deluxe)</li>
              <li>⏱️ <strong className="text-foreground">Duração:</strong> Roguelike — infinitamente rejogável</li>
              <li>🌐 <strong className="text-foreground">Legendas PT-BR:</strong> Sim</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">⭐ Primeiras Notas (Early Access)</h3>
            <div className="space-y-2">
              {[
                { site: "Metacritic", nota: "91/100 ⭐", base: "(lançamento)" },
                { site: "IGN", nota: "9,2/10", base: "\"Obra-prima\"" },
                { site: "Eurogamer", nota: "5/5", base: "\"Essencial\"" },
                { site: "Digital Foundry", nota: "N/A", base: "\"Melhor visual do PS5\"" },
                { site: "Steam (PS5)", nota: "N/A", base: "Exclusivo Sony" },
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
          Lore e Ambientação: O Planeta Carcosa
        </h2>
        <p>
          SAROS se passa em <strong>Carcosa</strong>, um planeta alienígena isolado durante um eclipse eterno. O protagonista é <strong>Arjun Devraj</strong>, um explorador espacial enviado para investigar sinais de uma colônia perdida. Ao aterrissar, Arjun descobre que Carcosa está presa num ciclo temporal — toda vez que ele morre, o planeta "reseta", mas Arjun mantém fragmentos de memória e melhorias permanentes.
        </p>
        <p>
          A Housemarque descreveu Carcosa como "um planeta que respira": a flora e fauna mudam entre corridas, os biomas se reconfiguram e segredos só são revelados após múltiplas mortes. A narrativa é contada em fragmentos de memória, diários de exploradores anteriores e alucinações do protagonista durante o eclipse — muito próximo do estilo de Returnal, mas com mais profundidade de lore.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Gameplay: O Que Mudou em Relação ao Returnal
        </h2>
        <p>
          SAROS mantém o DNA de Returnal — bullet hell em terceira pessoa com progressão roguelike — mas com melhorias substanciais em três áreas:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { titulo: "Sistema de Eclipse", desc: "O eclipse em Carcosa não é apenas cenário — é uma mecânica. Conforme o eclipse avança durante a corrida, inimigos ficam mais agressivos mas dropos de itens melhoram. Você gerencia o tempo de forma estratégica: quanto mais espera, mais difícil e mais recompensador fica.", icon: "🌑" },
            { titulo: "Progressão Permanente Real", desc: "Diferente de Returnal (onde quase tudo resetava), SAROS tem uma árvore de habilidades permanentes chamada 'Memórias de Carcosa'. A cada morte, você deposita memórias numa estação de base que desbloqueiam passivas permanentes.", icon: "🌳" },
            { titulo: "Construção de Build Mais Rica", desc: "O jogo tem 4 arquétipos de personagem (Guardião, Explorador, Caçador, Oráculo) com habilidades únicas. A combinação de arquétipo + armas + passivas cria synergies profundas que a crítica comparou ao Hades 2.", icon: "⚔️" },
            { titulo: "Mundo Semi-aberto", desc: "Entre os biomas lineares de Returnal, SAROS adiciona hubs interconectados onde você pode explorar livremente, encontrar NPCs sobreviventes e descobrir lore opcional.", icon: "🗺️" },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          SAROS vs Returnal: Comparação Direta
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Aspecto</th>
              <th className="text-left py-3 px-4">Returnal (2021)</th>
              <th className="text-left py-3 px-4">SAROS (2026)</th>
            </tr></thead>
            <tbody>
              {[
                ["Progressão permanente", "Quase inexistente — frustrante", "Árvore de habilidades real — satisfatória"],
                ["Narrativa", "Fragmentada, muito opaca", "Fragmentada, mais acessível e emocionante"],
                ["Dificuldade", "Extremamente punitiva (sem pausa)", "Dura, mas com checkpoint opcional"],
                ["Variedade de builds", "Limitada (armas + passivas)", "4 arquétipos + synergies profundas"],
                ["Visual", "Impressionante para 2021", "Melhor visual já visto no PS5"],
                ["Tamanho do mundo", "Linear por biomas", "Biomas + hubs exploráveis"],
                ["Tempo médio até final", "20–40h (dependendo da habilidade)", "25–50h+ (rejogabilidade infinita"],
              ].map(([asp, ret, sar]) => (
                <tr key={asp} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{asp}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{ret}</td>
                  <td className="py-3 px-4 text-geek text-xs font-medium">{sar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Veredicto Final
        </h2>
        <p>
          SAROS é, segundo a maioria dos críticos, o melhor exclusivo PS5 de 2026 até agora — e um forte candidato ao GOTY. A Housemarque evoluiu tudo o que era frustrante em Returnal mantendo o que era genial. Quem tinha medo de entrar no universo roguelike pelos comentários de dificuldade de Returnal vai encontrar em SAROS uma versão mais acolhedora sem sacrificar a profundidade.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { caso: "✅ Compre agora se...", items: ["Tem PS5 e quer o melhor jogo exclusivo do ano", "Gostou de Returnal ou quer experimentar roguelike pela primeira vez", "Aprecia visual de ponta e trilha sonora imersiva", "Quer um jogo com centenas de horas de conteúdo"], cor: "border-green-500/30" },
            { caso: "⏳ Espere se...", items: ["Não tem PS5 (exclusivo — sem versão PC confirmada até agora)", "Prefere narrativas lineares sem mortes repetitivas", "Tem backlog enorme e pode esperar uma promoção da PS Store"], cor: "border-yellow-500/30" },
          ].map(({ caso, items, cor }) => (
            <div key={caso} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{caso}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você jogou Returnal? Está ansioso para SAROS? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="saros-housemarque-ps5-2026" />
      <CommentSection postId="saros-housemarque-ps5-2026" postTitle="SAROS: Guia Completo do Sucessor Espiritual de Returnal" />
    </article>
  );
};

export default SarosPS52026;
