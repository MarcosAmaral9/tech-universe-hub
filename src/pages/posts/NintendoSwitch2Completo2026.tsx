import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/nintendo-switch-2-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const POST_SLUG = "nintendo-switch-2-guia-completo-2026";
const POST_TITLE = "Nintendo Switch 2: Guia Completo — Preço (R$ 4.500), Todos os Jogos, Specs e Vale a Pena Comprar?";

const NintendoSwitch2Completo2026 = () => {
  useEffect(() => {
    trackArticleRead(POST_SLUG, POST_TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · Nintendo · Switch 2 · Lançamento Confirmado
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
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Nintendo Switch 2 guia completo: preço Brasil, jogos e specs"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Nintendo Switch 2</strong> chega ao Brasil em <strong>5 de junho de 2026</strong> por
          <strong> R$ 4.499,90</strong> (R$ 4.799,90 no bundle com Mario Kart World). É o salto mais agressivo
          de hardware da história da Nintendo: tela LCD HDR de 7,9 polegadas a 120 Hz, 4K via dock, 256 GB
          internos, Joy-Con magnéticos com função mouse e <em>GameChat</em> nativo. Reunimos preço, ficha técnica,
          catálogo de lançamento e o veredito final sobre comprar agora ou esperar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Preço no Brasil e edições disponíveis
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Edição</th>
              <th className="text-left py-3 px-4">Preço (Brasil)</th>
              <th className="text-left py-3 px-4">O que vem na caixa</th>
            </tr></thead>
            <tbody>
              {[
                ["Switch 2 Standard", "R$ 4.499,90", "Console, dock, 2 Joy-Con, grip, HDMI, fonte"],
                ["Bundle Mario Kart World", "R$ 4.799,90", "Tudo do Standard + cópia digital de Mario Kart World"],
                ["Pro Controller 2", "R$ 749,90", "Vendido separadamente, com HD Rumble 2"],
                ["Joy-Con 2 (par adicional)", "R$ 699,90", "Sensor mouse, IR e câmera embutida"],
              ].map(([ed, p, o]) => (
                <tr key={ed} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap">{ed}</td>
                  <td className="py-3 px-4 font-medium">{p}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Ficha técnica completa
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Componente</th>
              <th className="text-left py-3 px-4">Switch 2</th>
              <th className="text-left py-3 px-4">Switch 1 (referência)</th>
            </tr></thead>
            <tbody>
              {[
                ["Tela", "LCD 7,9\" HDR, 1080p, 120 Hz, VRR", "LCD 6,2\" 720p, 60 Hz"],
                ["Saída no dock", "Até 4K @ 60 fps (1440p / 120 fps)", "1080p @ 60 fps"],
                ["Armazenamento", "256 GB UFS (expansível por microSD Express)", "32 GB"],
                ["RAM", "12 GB LPDDR5X", "4 GB LPDDR4"],
                ["GPU", "NVIDIA Custom (DLSS + Ray Tracing)", "NVIDIA Tegra X1"],
                ["Bateria", "2 a 6,5 horas", "2,5 a 6,5 horas"],
                ["Conectividade", "Wi-Fi 6, Bluetooth 5.3, USB-C duplo", "Wi-Fi 5, BT 4.1"],
              ].map(([k, a, b]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap">{k}</td>
                  <td className="py-3 px-4 font-medium">{a}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic">
          SSD extremamente recomendado para garantir tempos de carregamento adequados em jogos de mundo aberto
          — o armazenamento UFS interno do console e cartões microSD Express são obrigatórios para títulos como
          Mario Kart World e The Duskbloods.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Joy-Con 2: o que mudou
        </h2>
        <ul>
          <li><strong>Encaixe magnético:</strong> adeus trilho — agora os Joy-Con grudam por imã, com botão de liberação dedicado.</li>
          <li><strong>Função mouse:</strong> sensor óptico permite usar cada Joy-Con como mouse de PC — útil em jogos de estratégia, FPS e edição.</li>
          <li><strong>HD Rumble 2:</strong> resposta tátil mais granular, incluindo simulação de texturas.</li>
          <li><strong>Botão C:</strong> dedicado ao GameChat para iniciar chamadas de voz e vídeo entre jogadores instantaneamente.</li>
          <li><strong>Câmera IR:</strong> mantida e melhorada para reconhecimento de rosto durante o GameChat.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Catálogo de lançamento e principais exclusivos
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Janela</th>
              <th className="text-left py-3 px-4">Jogo</th>
              <th className="text-left py-3 px-4">Estúdio</th>
            </tr></thead>
            <tbody>
              {[
                ["05/06/2026", "Mario Kart World", "Nintendo EPD"],
                ["Junho 2026", "Donkey Kong Bananza", "Nintendo EPD"],
                ["Julho 2026", "The Duskbloods", "FromSoftware (exclusivo Switch 2)"],
                ["Q3 2026", "Zelda: Ocarina of Time Remake", "Nintendo / Grezzo"],
                ["Q3 2026", "Metroid Prime 4: Beyond (versão Switch 2)", "Retro Studios"],
                ["Q4 2026", "Pokémon Legends: Z-A (versão Switch 2)", "Game Freak"],
                ["Q4 2026", "Kirby Air Riders", "Sora Ltd. / Bandai Namco"],
              ].map(([d, g, e]) => (
                <tr key={g} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap">{d}</td>
                  <td className="py-3 px-4 font-medium">{g}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Retrocompatibilidade com Switch 1
        </h2>
        <p>
          A maioria dos jogos do Switch original roda no Switch 2 — incluindo cartuchos físicos. Vários títulos
          recebem <strong>Nintendo Switch 2 Edition</strong>: melhorias gratuitas (Tears of the Kingdom, Breath of
          the Wild, Super Mario Odyssey) ou pagas (Metroid Prime 4 e versões aprimoradas de jogos third-party).
          Saves da nuvem migram automaticamente via conta Nintendo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-geek" />
          Vale a pena comprar no lançamento?
        </h2>
        <p>
          <strong>Compre agora se:</strong> você é fã de Mario Kart, Zelda ou Metroid; não tem o Switch 1; quer o
          melhor portátil do mercado; ou pretende jogar The Duskbloods da FromSoftware como exclusivo. <strong>
          Espere 6 meses se:</strong> já tem o Switch 1 jogando bem, espera promoções de fim de ano, ou quer
          aguardar o catálogo crescer com Pokémon e Kirby Air Riders.
        </p>
        <p>
          A R$ 4.499,90, o console se posiciona acima de um PS5 Slim no Brasil, mas entrega exclusivos que não
          existem em nenhuma outra plataforma — a velha proposta de valor da Nintendo, agora com hardware
          competitivo.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Vai comprar o Switch 2 no lançamento? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários qual exclusivo você mais espera! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug={POST_SLUG} />
      <CommentSection postId={POST_SLUG} postTitle={POST_TITLE} />
    </article>
  );
};

export default NintendoSwitch2Completo2026;
