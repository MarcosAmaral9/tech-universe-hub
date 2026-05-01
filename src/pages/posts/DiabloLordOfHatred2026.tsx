import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Sword } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/diablo-iv-lord-of-hatred-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const DiabloLordOfHatred2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "diablo-iv-lord-of-hatred-2026",
      "Diablo IV: Lord of Hatred — Guia Completo: Paladin, Warlock, Skovos e Endgame",
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
            Games · Diablo IV · Expansão · Blizzard
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Diablo IV: Lord of Hatred — Guia Completo: Paladin, Warlock, Skovos e Novo Endgame
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Diablo IV Lord of Hatred expansão 2026 guia Paladin Warlock" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em <strong>28 de abril de 2026</strong>, a Blizzard lança <strong>Lord of Hatred</strong> — a segunda grande expansão de Diablo IV, e a mais ambiciosa desde o lançamento base. Com duas novas classes (Paladin e Warlock), uma região completamente nova (Skovos), a árvore de habilidades mais profunda da franquia, o sistema Horadric Cube, War Plans para endgame e revisões em todas as 8 classes existentes, este é o maior update já lançado no jogo. Guia completo de tudo que chega com a expansão.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica: O Que Você Precisa Saber Antes de Comprar
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">📋 Informações Gerais</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>📅 <strong className="text-foreground">Lançamento:</strong> 28 de abril de 2026</li>
              <li>🎮 <strong className="text-foreground">Plataformas:</strong> PC (Battle.net/Steam), PS5, PS4, Xbox Series/One</li>
              <li>💰 <strong className="text-foreground">Preço:</strong> US$ 39,99 (Standard) / US$ 59,99 (Deluxe) / US$ 89,99 (Ultimate)</li>
              <li>📦 <strong className="text-foreground">Inclui:</strong> Vessel of Hatred (expansão anterior) no Standard</li>
              <li>🎁 <strong className="text-foreground">Pré-compra:</strong> Acesso antecipado ao Paladin + stash tab</li>
              <li>🌐 <strong className="text-foreground">Requisito:</strong> Jogo base Diablo IV obrigatório</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">🆓 O Que é Gratuito (patch 28/abr)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Revisão completa da árvore de habilidades de todas as 8 classes (+40 variantes novas)</li>
              <li>✅ Novo level cap para todos os jogadores</li>
              <li>✅ Loot Filter (filtro de itens personalizado)</li>
              <li>✅ Melhorias de interface e qualidade de vida</li>
              <li>❌ Paladin e Warlock (apenas quem comprar Lord of Hatred)</li>
              <li>❌ Skovos, campanha, Horadric Cube, War Plans (expansão)</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-geek" />
          As Duas Novas Classes: Paladin e Warlock
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">⚔️ Paladin: O Retorno do Cruzado Sagrado</h3>
        <p>
          O Paladin retorna de Diablo II com um kit completamente redesenhado para Diablo IV. Não é uma cópia do Cruzado de Diablo III — é um personagem novo com mecânicas próprias centradas em <strong>Fé, Auras e a Forma do Árbitro (Arbiter Form)</strong>.
        </p>
        <div className="not-prose my-4 space-y-2">
          {[
            { mec: "⚡ Arbiter Form", desc: "Transformação temporária em anjo: velocidade dobrada, dano em movimento, potencializa habilidades do tipo Disciple. Ativada por construir 'Fé' combatendo inimigos." },
            { mec: "🔥 Blessed Hammer", desc: "O icônico martelo sagrado de Diablo II retorna, agora com trajetórias customizáveis e sinergias com Auras ativas." },
            { mec: "🛡️ Sistema de Juramentos (Oath)", desc: "O Paladin escolhe Juramentos que definem seu estilo: Juramento da Luz (ofensivo), Juramento do Escudo (defensivo), Juramento da Devoção (híbrido). Muda passivas permanentemente durante a run." },
            { mec: "✨ Auras Ativas e Passivas", desc: "Diferente do Paladin de D2 (auras passivas), aqui auras são habilidades ativas com cooldown — dando mais controle e momentos de decisão tática." },
          ].map(({ mec, desc }) => (
            <div key={mec} className="bg-card rounded-xl border border-geek/20 p-3">
              <h4 className="font-bold text-sm mb-0.5 text-geek">{mec}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">🔮 Warlock: O Mago das Trevas com Vínculo Demoníaco</h3>
        <p>
          O Warlock é a classe verdadeiramente nova — não existe equivalente em Diablo I ou II. <strong>Proibido, perigoso e de alto risco/recompensa</strong>, o Warlock manipula o poder demoníaco através de Pactos que ampliam seus poderes ao custo da própria vida.
        </p>
        <div className="not-prose my-4 space-y-2">
          {[
            { mec: "🩸 Sistema de Pactos (Pact System)", desc: "O Warlock firma Pactos com entidades demoníacas que concedem buffs poderosos — mas drenam vida por segundo enquanto ativos. Gerenciar saúde enquanto maximiza dano é o loop central." },
            { mec: "👁️ Soul Bind (Vínculo de Almas)", desc: "Habilidade signature: vincule uma alma demoníaca capturada para amplificar uma habilidade específica. Cada Vínculo tem efeitos únicos e duração limitada." },
            { mec: "🌑 Dark Aura / Sombra Demoníaca", desc: "O Warlock emana uma aura de sombra que enfraquece inimigos próximos e potencializa aliados que estejam dentro dela — tornando-o excelente em co-op." },
            { mec: "💀 Forbidden Knowledge", desc: "Árvore de passivas única: quanto mais perto da morte, maior o dano. Builds que mantêm vida crítica propositalmente são o pilar do meta-game da classe." },
          ].map(({ mec, desc }) => (
            <div key={mec} className="bg-card rounded-xl border border-geek/20 p-3">
              <h4 className="font-bold text-sm mb-0.5 text-geek">{mec}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Skovos: A Região Mais Esperada em 30 Anos de Franquia
        </h2>
        <p>
          Skovos apareceu nos mapas de mundo de Diablo II em 2000. Em 26 anos, nenhum jogador jamais pisou lá. <strong>Lord of Hatred finalmente abre as ilhas sagradas</strong> — berço da primeira civilização de Santuário e terra natal de Lilith e Inarius.
        </p>
        <div className="not-prose my-4 grid md:grid-cols-3 gap-4">
          {[
            { zona: "🌊 Costa Tempestuosa", desc: "Costas rochosas com tempestades de areia mágica. Primeiro bioma — mistura de campos abertos e masmorras costeiras com piratas corrompidos." },
            { zona: "🌲 Florestas de Tempestade", desc: "Florestas antigas onde a magia está impregnada nas árvores. Criaturas que se camuflam na vegetação e masmorras verticais com andares múltiplos." },
            { zona: "🏛️ Ruínas Antigas", desc: "Centro de Skovos: onde a primeira civilização foi fundada. As ruínas mais antigas de Santuário, com segredos do Século Vazio ainda escondidos nas paredes." },
          ].map(({ zona, desc }) => (
            <div key={zona} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1">{zona}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          O Novo Endgame: War Plans, Horadric Cube e Talisman
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { sistema: "⚔️ War Plans (Planos de Guerra)", desc: "Substitui o antigo sistema de endgame fragmentado. Você cria uma playlist de até 5 atividades (Nightmare Dungeons, Whispers, Pit, etc.), define modificadores de dificuldade/recompensa para cada uma e as executa em sequência. Progresso numa única árvore de recompensas unificada. Fim do problema de 'odeio essa atividade mas o melhor drop está nela'." },
            { sistema: "🟫 Horadric Cube", desc: "Retorno do lendário cubo de Diablo II. No contexto de D4, funciona como um sistema de crafting avançado: combine itens, extraia afixos, reforje propriedades específicas. Mais impactante que o Mystic atual — decisões de crafting que moldam sua build." },
            { sistema: "📿 Talisman + Set Bonuses", desc: "Novo slot de equipamento que ativa bônus de set. Pela primeira vez em Diablo IV, montar conjuntos completos de itens concede poderes especiais — aproximando o jogo do estilo do D2/D3 sem perder a liberdade de build." },
            { sistema: "🌀 Echoing Hatred", desc: "Novo sistema de progressão para o Pit (endgame de maior dificuldade). Cada andar completado amplia 'Ódio Ressoante' que potencializa os drops da sessão atual." },
          ].map(({ sistema, desc }) => (
            <div key={sistema} className="bg-card rounded-xl border border-geek/30 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{sistema}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Veredicto por Perfil
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre se você...", items: ["Jogou e gostou de Diablo IV ou Vessel of Hatred", "Quer uma das duas novas classes (Paladin é o hype máximo)", "Sente que o endgame atual está repetitivo — War Plans muda isso fundamentalmente", "Tem amigos para co-op — o Warlock brilha especialmente em grupo"], cor: "border-invest/30" },
            { perfil: "⏳ Aguarde se...", items: ["Nunca jogou Diablo IV — comece pelo jogo base que está em oferta frequente", "Não curte ARPGs com sessões longas de farm", "Prefere esperar reviews detalhados da qualidade da campanha de Skovos após o lançamento", "O preço de US$ 39,99 está fora do orçamento — projeção de desconto de 40% em Black Friday"], cor: "border-geek/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span>•</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você vai jogar Lord of Hatred? Paladin ou Warlock? ⚔️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="diablo-iv-lord-of-hatred-2026" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="diablo-iv-lord-of-hatred-2026" postTitle="Diablo IV: Lord of Hatred — Guia Completo" />
    </article>
  );
};

export default DiabloLordOfHatred2026;