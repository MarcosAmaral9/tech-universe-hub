import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Package } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/nintendo-switch-2-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const NintendoSwitch2Guia2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "nintendo-switch-2-guia-completo-2026",
      "Nintendo Switch 2: Guia Completo — Preço, Jogos, Specs e Vale a Pena Comprar?",
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
            Nintendo · Switch 2 · Console · Junho 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Nintendo Switch 2: Guia Completo — Preço (R$ 4.500), Todos os Jogos, Specs e Vale a Pena Comprar?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Nintendo Switch 2 guia completo preço jogos 2026 Brasil" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Nintendo Switch 2 chega às lojas em 5 de junho de 2026</strong> — simultaneamente no Brasil e no mundo — por <strong>R$ 4.499,90</strong>. É o maior lançamento de hardware da Nintendo desde o Switch original em 2017, que se tornou o terceiro console mais vendido da história com 150 milhões de unidades. Com tela de 7,9 polegadas HDR, saída 4K na TV, 256GB de armazenamento, Joy-Con magnéticos com função mouse e um catálogo de lançamento forte incluindo Mario Kart World, este guia reúne tudo que você precisa saber antes de decidir se compra.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica Completa
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">🎮 Hardware</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>📺 <strong className="text-foreground">Tela portátil:</strong> 7,9 pol. LCD HDR, 1080p, 120Hz</li>
              <li>📺 <strong className="text-foreground">Tela docked:</strong> Suporte a 4K via HDMI 2.1</li>
              <li>💾 <strong className="text-foreground">Armazenamento:</strong> 256 GB interno (8× o Switch 1)</li>
              <li>🔋 <strong className="text-foreground">Bateria:</strong> 2–6,5h (dependendo do jogo)</li>
              <li>🎮 <strong className="text-foreground">Joy-Con:</strong> Magnéticos (encaixe melhorado), função mouse</li>
              <li>🎤 <strong className="text-foreground">GameChat:</strong> Chat de voz nativo com câmera opcional</li>
              <li>🔌 <strong className="text-foreground">Portas:</strong> 2× USB-C, microSD Express</li>
              <li>⚡ <strong className="text-foreground">Chip:</strong> NVIDIA Tegra T239 customizado</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold text-geek mb-3">💰 Preços no Brasil</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🎮 <strong className="text-foreground">Console:</strong> R$ 4.499,90</li>
              <li>📦 <strong className="text-foreground">Bundle + Mario Kart World:</strong> R$ 4.799,90</li>
              <li>🏎️ <strong className="text-foreground">Mario Kart World:</strong> R$ 499,90</li>
              <li>🦍 <strong className="text-foreground">Donkey Kong Bananza:</strong> R$ 439,90</li>
              <li>🌌 <strong className="text-foreground">Mario Galaxy 1+2 (bundle launch):</strong> R$ 199,90</li>
              <li>📱 <strong className="text-foreground">Jogos digitais:</strong> ~10–15% mais baratos que físico</li>
              <li>🔵 <strong className="text-foreground">Switch Online:</strong> R$ 49,90/mês ou R$ 219,90/ano</li>
            </ul>
          </div>
        </div>
        <div className="not-prose my-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
          <p className="text-sm"><strong className="text-green-400">📢 Nova política de preços (Abril 2026):</strong> A Nintendo reduziu o preço das versões digitais dos jogos na eShop brasileira, atualizando a conversão interna do dólar. Jogos que custavam R$ 420–450 agora são encontrados por R$ 350–400 digitalmente. O movimento não é pegadinha de 1º de abril — a diferença entre versão física e digital foi oficializada como política permanente.</p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          As Maiores Novidades do Switch 2
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { feat: "🖱️ Joy-Con com função mouse", desc: "Os novos Joy-Con podem ser deslizados numa superfície plana como um mouse de computador — moverão o cursor com precisão óptica. Isso transforma o Switch 2 num console híbrido de verdade: games de estratégia em tempo real e simuladores de gestão agora são jogáveis com controle mais intuitivo do que thumbsticks. Mario Kart World e outros títulos já têm suporte nativo a esse modo." },
            { feat: "🎤 GameChat — voz e vídeo integrado", desc: "O Switch 2 tem chat de voz nativo via console (sem app no celular). Com a câmera opcional (vendida separado), os jogadores aparecem em tela enquanto jogam juntos. A implementação é similar ao Xbox Party Chat — sem necessidade de app de terceiros." },
            { feat: "📺 4K no dock", desc: "Conectado à TV via HDMI 2.1, o Switch 2 suporta saída 4K com upscaling via DLSS da NVIDIA. No modo portátil, a tela é 1080p HDR a 120Hz — um salto enorme em relação ao 720p do Switch 1 portátil." },
            { feat: "🔄 Retrocompatibilidade", desc: "A maioria dos jogos do Switch 1 funciona no Switch 2. Títulos populares como Zelda: Tears of the Kingdom, Cyberpunk 2077 e Metroid Prime 4 recebem versões remasterizadas gratuitas (se você já possui) ou atualizações pagas com gráficos melhorados. Mario Kart 8 Deluxe roda mas sem upgrades visuais." },
            { feat: "🤝 Compartilhamento de jogos (Game Share)", desc: "Novo recurso exclusivo do Switch 2: compartilhe um jogo digital com outro Switch 2 por proximidade física, mesmo que o outro jogador não possua o título. Funciona como demo temporária enquanto os dois consoles estão próximos. Ideal para jogar com amigos sem que todos precisem comprar o mesmo jogo." },
          ].map(({ feat, desc }) => (
            <div key={feat} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-geek">{feat}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Catálogo de Lançamento: Jogos Confirmados para 2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Jogo</th>
              <th className="text-left py-3 px-4">Data</th>
              <th className="text-left py-3 px-4">Preço BR</th>
              <th className="text-left py-3 px-4">Destaque</th>
            </tr></thead>
            <tbody>
              {[
                ["Mario Kart World", "5 jun (lançamento)", "R$ 499,90", "Maior Mario Kart já feito — mundo aberto explorável"],
                ["Donkey Kong Bananza", "5 jun (lançamento)", "R$ 439,90", "Retorno de Donkey Kong em 3D com deformação de terreno"],
                ["The Duskbloods (From Software + Nintendo)", "2026", "A confirmar", "Exclusivo Switch 2 da From Software — primeiro acordo exclusivo"],
                ["Drag and Drive", "2026", "A confirmar", "Corrida com Joy-Con como volante + pedal físico"],
                ["Pokémon Legends Z-A", "2026", "A confirmar", "Ambientado em Lumiose City, retorno ao estilo Arceus"],
                ["Zelda: Ocarina of Time Remake", "2026", "A confirmar", "Remake completo do clássico de 1998 com engine moderna"],
                ["Metroid Prime 4: Beyond (Switch 2 upgrade)", "5 jun", "Grátis p/ donos do Switch 1", "Versão melhorada do lançamento de março 2026 no Switch 1"],
                ["Cyberpunk 2077 (Switch 2 upgrade)", "5 jun", "Upgrade pago", "Versão completa com Ray Tracing no dock"],
              ].map(([jogo, data, preco, dest]) => (
                <tr key={jogo} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek text-xs">{jogo}</td>
                  <td className="py-3 px-4 text-xs">{data}</td>
                  <td className="py-3 px-4 text-xs font-bold">{preco}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{dest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">The Duskbloods é o primeiro jogo exclusivo da From Software para um console Nintendo — parceria histórica anunciada no Nintendo Direct de fevereiro de 2026.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Package className="h-7 w-7 text-geek" />
          Switch 2 vs PS5 vs Xbox Series X: Onde Se Encaixa?
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Aspecto</th>
              <th className="text-left py-3 px-4">Nintendo Switch 2</th>
              <th className="text-left py-3 px-4">PS5</th>
              <th className="text-left py-3 px-4">Xbox Series X</th>
            </tr></thead>
            <tbody>
              {[
                ["Preço (BR)", "R$ 4.500", "R$ 4.000–R$ 4.500", "R$ 3.800–R$ 4.200"],
                ["Portabilidade", "✅ Sim — único portátil", "❌ Apenas TV", "❌ Apenas TV"],
                ["Potência gráfica", "Média-alta (com DLSS)", "Alta", "Alta"],
                ["Exclusivos Nintendo", "✅ Mario, Zelda, Pokémon, Metroid", "✅ Sony exclusives", "❌ Game Pass em PC também"],
                ["Retrocompat.", "✅ Maioria dos jogos Switch 1", "✅ PS4", "✅ Xbox One/360"],
                ["Online grátis", "❌ Switch Online pago", "❌ PS Plus pago", "✅ F2P gratuito (alguns)"],
                ["Game Pass/serviço", "Nintendo Switch Online", "PS Plus", "Xbox Game Pass (excelente custo-benefício)"],
              ].map(([asp, sw2, ps5, xbx]) => (
                <tr key={asp} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{asp}</td>
                  <td className="py-3 px-4 text-geek text-xs font-medium">{sw2}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{ps5}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{xbx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Vale a Pena Comprar? Análise por Perfil
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre se você...", items: ["Já tem um Switch 1 e quer o upgrade com 4K e tela HDR superior", "Quer um console portátil — não existe alternativa ao nível do Switch 2 nessa categoria", "É fã de jogos Nintendo (Mario, Zelda, Pokémon) — o catálogo exclusivo é insubstituível", "Quer jogar com filhos/família — Nintendo é o melhor ecossistema para jogo familiar local"], cor: "border-green-500/30" },
            { perfil: "⏳ Espere se...", items: ["Você não tem Switch 1 e é gamer principalmente de jogos AAA como GTA, Assassin's Creed, Call of Duty — esses são melhores no PS5/Xbox", "O preço de R$ 4.500 + jogos a R$ 500 está fora do orçamento — aguarde promoções ou bundle de fim de ano", "Você quer esperar 6 meses para ver se há defeitos de hardware na primeira leva (padrão para early adopters)", "Não tem interesse no catálogo de lançamento — Mario Kart World e Donkey Kong são o motor inicial"], cor: "border-yellow-500/30" },
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
          <h3 className="text-xl font-bold mb-2">Você vai comprar o Switch 2 no lançamento? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="nintendo-switch-2-guia-completo-2026" />
      <CommentSection postId="nintendo-switch-2-guia-completo-2026" postTitle="Nintendo Switch 2: Guia Completo — Preço, Jogos, Specs e Vale a Pena Comprar?" />
    </article>
  );
};

export default NintendoSwitch2Guia2026;
