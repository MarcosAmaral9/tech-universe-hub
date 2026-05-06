import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Sword } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/elden-ring-nightreign-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const EldenRingNightreign2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "elden-ring-nightreign-guia-completo-2026",
      "Elden Ring Nightreign: Guia Completo — Classes, Expedições, Bosses e Forsaken Hollows DLC",
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
            Elden Ring · FromSoftware · Co-op · Roguelite
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Elden Ring Nightreign: Guia Completo — Classes, Expedições, Bosses Noturnos e Forsaken Hollows DLC
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" src={heroImg} alt="Elden Ring Nightreign guia completo classes expedições bosses DLC 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Elden Ring Nightreign</strong> chegou em 30 de maio de 2025 e se tornou o experimento mais ousado da FromSoftware desde Sekiro: um spin-off cooperativo do universo de Elden Ring com estrutura roguelite, partidas de 3 jogadores com duração de 40 minutos e bosses noturnos que se intensificam a cada rodada. Em maio de 2026, o jogo recebeu o <strong>DLC Forsaken Hollows</strong> — adicionando 2 novas classes, 3 novos Nightlords e um bioma completamente novo. Este guia completo cobre tudo: as 8 classes, mecânicas de Expedição, os Nightlords mais difíceis e tudo que o DLC adiciona.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          O Que É Elden Ring Nightreign: A Fórmula Explicada
        </h2>
        <p>
          Nightreign funciona de forma radicalmente diferente de qualquer jogo FromSoftware anterior. Entender a estrutura é essencial antes de jogar:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { fase: "☀️ Fase 1 — Dia (20 minutos)", desc: "Você e até 2 companheiros exploram o mapa de Limveld livremente. O objetivo é coletar equipamentos, subir de nível matando inimigos e preparar seu personagem para a noite. O mapa tem Campos de Graça, masmorras, mercadores e eventos aleatórios que mudam a cada rodada." },
            { fase: "🌙 Noite 1 — Boss Noturno (10 min)", desc: "O 'Shroud' — a névoa noturna — avança, comprimindo o mapa como um battle royale. Você deve derrotar o Boss Noturno do Dia 1 antes que a névoa chegue ao centro. Os bosses são recriações de inimigos clássicos de Elden Ring com mecânicas novas." },
            { fase: "☀️ Fase 2 — Dia 2 (10 min)", desc: "Após sobreviver à Noite 1, um segundo dia de exploração começa — mas o mapa é menor, os inimigos mais fortes e o tempo menor. Você precisa fortalecer ainda mais o personagem antes do boss final." },
            { fase: "🌑 Nightlord — Boss Final", desc: "O Nightlord é o chefe final de cada Expedição — cada um com 2–3 fases e mecânicas únicas. São 8 Nightlords no jogo base + 3 no DLC Forsaken Hollows. Derrotá-los desbloqueia recompensas permanentes para o Roundtable Hold." },
          ].map(({ fase, desc }) => (
            <div key={fase} className="flex gap-3 bg-card rounded-xl border border-geek/20 p-4">
              <span className="text-xl shrink-0">{fase.split(" ")[0]}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{fase.split(" ").slice(1).join(" ")}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          A grande inovação: ao contrário dos Soulslikes tradicionais onde você importa seu personagem, em Nightreign você <strong>começa do zero a cada Expedição</strong>. Não há progressão de personagem entre rodadas — apenas o desbloqueio permanente de Classes e Relics no Roundtable Hold. Isso faz cada partida de 40 minutos ser completa em si mesma.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          As 8 Classes do Jogo Base (+ 2 do DLC)
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Classe</th>
              <th className="text-left py-3 px-4">Estilo</th>
              <th className="text-left py-3 px-4">Habilidade Passiva</th>
              <th className="text-left py-3 px-4">Dificuldade</th>
            </tr></thead>
            <tbody>
              {[
                ["Wylder", "Versátil — melee + ranged", "Grappling Hook para reposicionamento rápido", "★★☆☆ Iniciante"],
                ["Guardian", "Tank — defesa e suporte", "Escudo que absorve dano para o grupo inteiro", "★★★☆ Médio"],
                ["Revenant", "Mobilidade — ataques rápidos", "Ressuscita aliados ao derrotar inimigos", "★★★☆ Médio"],
                ["Recluse", "Sorcery — dano mágico", "Rouba vigor e FP de inimigos ao atacar", "★★★★ Avançado"],
                ["Ironeye", "Ranged — arqueiro de elite", "Marcação de alvo que aumenta dano do grupo", "★★★☆ Médio"],
                ["Raider", "Berserker — alto dano bruto", "Ganha poder com low HP — esconde o próprio HP", "★★★★ Avançado"],
                ["Duchess", "Suporte — debuffs e veneno", "Invisiblidade temporária + envenenar área", "★★★★★ Expert"],
                ["Stormcaller", "AoE — tempestade elétrica", "Invoca relâmpagos no campo — dano de área massivo", "★★★★☆ Avançado"],
                ["Ashbringer ⭐ DLC", "Fogo — destruição em área", "Transforma o campo ao redor em chamas persistentes", "★★★★ Avançado"],
                ["Veilstalker ⭐ DLC", "Stealth — assassino das sombras", "Teleporte nas sombras + dano de backstab elevado", "★★★★★ Expert"],
              ].map(([cls, est, hab, dif]) => (
                <tr key={cls} className={`border-t border-border ${cls.includes("DLC") ? "bg-geek/5" : ""}`}>
                  <td className="py-3 px-4 font-bold text-geek text-xs">{cls}</td>
                  <td className="py-3 px-4 text-xs">{est}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{hab}</td>
                  <td className="py-3 px-4 text-xs">{dif}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">⭐ = classes do DLC Forsaken Hollows (maio 2026)</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Os Nightlords: Guia dos Chefes Finais
        </h2>
        <p>
          Os Nightlords são os bosses finais de cada Expedição. Cada um tem fraquezas específicas e exige composição de grupo diferente. Aqui estão os 5 mais importantes do jogo base:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { nome: "🌀 Equilibrious Beast", dif: "★★☆☆ (Recomendado para iniciantes)", fraq: "Fraqueza: Fogo e ataques em cadeia rápidos", desc: "Boss bípede bestial de quatro patas com ataques de salto e ondas de energia. Na Fase 2 adiciona cópias de si mesmo. A composição ideal é ter 1 Guardian para tankar e 2 ofensivos. Use Fire Grease em todos os ataques — o dano extra é significativo." },
            { nome: "🌊 Fissure in the Fog", dif: "★★★☆ (Médio)", fraq: "Fraqueza: Lightning. Evite água", desc: "Boss que manipula névoa e água. O campo de batalha inteiro fica alagado nas fases finais, reduzindo mobilidade drasticamente. Stormcaller com raios é altamente eficaz. O maior erro é ficar na água — tome dano contínuo enquanto tenta atacar." },
            { nome: "🔥 Darkdrift Knight", dif: "★★★★ (Difícil)", fraq: "Fraqueza: Holy damage. Dodge timing preciso", desc: "Cavaleiro com espada que muda para forma de dragão na Fase 3. A transição de fase é o momento mais letal — mata jogadores desprepados. Ironeye com marcação de alvo nos pontos fracos é essencial. Composição recomendada: Guardian + Ironeye + Wylder." },
            { nome: "🧊 Sentient Pest", dif: "★★★★☆ (Muito Difícil)", fraq: "Fraqueza: Fogo em ovos expostos", desc: "Criatura de gelo que coloca ovos no campo — eles eclodem em inimigos menores. Controle dos ovos é tão importante quanto atacar o boss principal. Raider para dano massivo + Duchess para AoE envenenar ovos + qualquer ofensivo." },
            { nome: "⚡ Gaping Jaw", dif: "★★★★★ (Boss mais difícil do base)", fraq: "Fraqueza: Após parry, janela de dano enorme", desc: "Boss dragônico com ataques de mordida que cobrem metade da arena. O parry é a única forma prática de causar dano significativo — sem parry, a luta leva o dobro do tempo. Revenant é quase obrigatório pela mecânica de ressurreição." },
          ].map(({ nome, dif, fraq, desc }) => (
            <div key={nome} className="bg-card rounded-xl border border-geek/20 p-5">
              <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-sm text-geek">{nome}</h3>
                <span className="text-xs font-bold">{dif}</span>
              </div>
              <p className="text-xs text-amber-400 mb-1">🎯 {fraq}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          DLC Forsaken Hollows: O Que Foi Adicionado em Maio 2026
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { item: "🗺️ Novo Bioma: The Forsaken Hollows", desc: "Uma caverna subterrânea completamente nova — escura, labiríntica e com flora bioluminescente. Não é uma área separada: é integrada ao mapa de Limveld como nova região que aparece nos dias 1 e 2 de certas Expedições. Tem seus próprios inimigos, mercadores secretos e treasures." },
            { item: "👹 3 Novos Nightlords", desc: "Hollow Monarch (boss principal do DLC — 3 fases com mecânicas de sombras clonadas), Ashborn Colossus (gigante de fogo, exige controle de área constante) e Veilserpent (boss furtivo que fica invisível por até 20 segundos — o mais frustrante do DLC)." },
            { item: "⚔️ 2 Novas Classes: Ashbringer e Veilstalker", desc: "Ashbringer é a classe de fogo do DLC — ativa melhor com Nightlords de fogo e chão de pedra. Veilstalker é o assassino das sombras — quase inviável em solo mas destroça em trio com 2 outros causando distração." },
            { item: "🔮 Sistema de Memórias dos Hollow", desc: "Nova mecânica exclusiva do DLC: ao derrotar inimigos especiais nas Hollows, você coleta fragmentos de memória que podem ser combinados no Roundtable Hold para desbloquear passivas especiais usáveis em qualquer classe." },
          ].map(({ item, desc }) => (
            <div key={item} className="bg-card rounded-xl border border-geek/30 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{item}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar Nightreign + DLC?
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre se você...", items: ["Tem 2 amigos para jogar — a experiência foi projetada para trio e é radicalmente melhor em co-op", "Gostou de Elden Ring mas quer sessões mais curtas e intensas (40 min vs 100h)", "Curte roguelites (Hades, Dead Cells) e quer algo com a profundidade de combate da FromSoftware", "Quer o melhor co-op cooperativo lançado em 2025–2026"], cor: "border-green-500/30" },
            { perfil: "⚠️ Pense antes se...", items: ["Você joga solo — Nightreign funciona em solo mas perde muito do design de sinergia entre classes", "Espera narrativa profunda — a história é mínima mesmo para padrões FromSoftware", "Não curtiu Elden Ring — o sistema de combate é o mesmo; se não gostou lá, não vai gostar aqui", "Quer progressão de personagem contínua — aqui você reinicia toda Expedição"], cor: "border-yellow-500/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span>•</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está jogando Elden Ring Nightreign? ⚔️</h3>
          <p className="text-muted-foreground">Qual classe mais curte? Qual Nightlord te deu mais trabalho? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="elden-ring-nightreign-guia-completo-2026" />
      <CommentSection postId="elden-ring-nightreign-guia-completo-2026" postTitle="Elden Ring Nightreign: Guia Completo — Classes, Expedições, Bosses e Forsaken Hollows DLC" />
    </article>
  );
};

export default EldenRingNightreign2026;
