import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/nintendo-switch-2-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const NintendoSwitch2Guia2026 = () => {
  useEffect(() => {
    trackArticleRead("nintendo-switch-2-guia-2026", "Nintendo Switch 2: Tudo Sobre o Novo Console da Nintendo em 2026", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Games · Nintendo · Switch 2</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Nintendo Switch 2: Guia Completo do Novo Console — Specs, Jogos e Vale a Pena Comprar?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Nintendo Switch 2 guia completo 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O Nintendo Switch 2 finalmente chegou — e entregou. Após anos de especulação, a Nintendo lançou seu console de nova geração com uma proposta clara: <strong>o portátil mais poderoso já feito</strong>, mantendo a flexibilidade que tornou o Switch original um fenômeno de 143 milhões de unidades vendidas. Neste guia completo, analisamos tudo: specs, jogos de lançamento, preço no Brasil e se vale a pena comprar agora.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Ficha Técnica: Switch 2 vs. Switch Original
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Especificação</th>
              <th className="text-left py-3 px-4">Switch 2</th>
              <th className="text-left py-3 px-4">Switch Original</th>
            </tr></thead>
            <tbody>
              {[
                ["Processador", "NVIDIA T239 (custom Ampere)", "NVIDIA Tegra X1"],
                ["GPU", "1536 CUDA cores (Ampere)", "256 CUDA cores (Maxwell)"],
                ["RAM", "12 GB LPDDR5X", "4 GB LPDDR4"],
                ["Armazenamento", "256 GB UFS 3.1 (expansível)", "32 GB eMMC"],
                ["Tela", "8\" LCD 1080p / 120Hz (portátil)", "6,2\" LCD 720p / 60Hz"],
                ["Resolução TV", "4K com DLSS / 1080p nativo", "1080p (dock) / 720p (portátil)"],
                ["Bateria", "5.220 mAh (4–8h)", "4.310 mAh (2,5–6,5h)"],
                ["Conectividade", "Wi-Fi 6, Bluetooth 5.3, USB-C", "Wi-Fi 5, Bluetooth 4.1, USB-C"],
                ["Peso (com Joy-Con)", "420g", "398g"],
                ["Preço (lançamento)", "US$ 449 / R$ 2.499", "US$ 299 / R$ 1.299 (2017)"],
              ].map(([spec, sw2, sw1]) => (
                <tr key={spec} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{spec}</td>
                  <td className="py-3 px-4 text-geek font-bold">{sw2}</td>
                  <td className="py-3 px-4 text-muted-foreground">{sw1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>O salto geracional é significativo. O Switch 2 tem <strong>aproximadamente 10× mais poder de processamento gráfico</strong> e <strong>3× mais RAM</strong> que o original.</p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Joy-Con 2 e o Botão C: O que Mudou
        </h2>
        <p>Os novos Joy-Con 2 são maiores, mais confortáveis e contam com o novo botão <strong>C</strong> (GameChat) e <strong>mouse mode</strong>.</p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { titulo: "Mouse Mode", desc: "Joy-Con 2 detecta movimento sobre superfícies como mouse óptico. Usado em Metroid Prime 4 e futuros títulos de estratégia.", icon: "🖱️" },
            { titulo: "Botão C / GameChat", desc: "Comunicação por voz e vídeo diretamente no console, com câmera USB opcional. Grupos de até 12 pessoas.", icon: "🎤" },
            { titulo: "Haptic Feedback HD", desc: "Vibração mais precisa e silenciosa. Simula texturas, impactos e notificações com fidelidade maior.", icon: "📳" },
            { titulo: "Compatibilidade", desc: "Joy-Con originais funcionam no Switch 2 (sem mouse mode). Joy-Con 2 NÃO funcionam no Switch 1.", icon: "🔗" },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="bg-card rounded-xl border border-geek/20 p-4">
              <div className="text-xl mb-2">{icon}</div>
              <h3 className="font-bold text-sm mb-1">{titulo}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Jogos de Lançamento e Biblioteca 2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Jogo</th>
              <th className="text-left py-3 px-4">Gênero</th>
              <th className="text-left py-3 px-4">Nota Média</th>
              <th className="text-left py-3 px-4">Preço (BR)</th>
            </tr></thead>
            <tbody>
              {[
                ["Mario Kart World", "Corrida (mundo aberto)", "92/100 ⭐", "R$ 349,90"],
                ["The Legend of Zelda: Echoes of Wisdom", "Ação-Aventura", "95/100 ⭐", "R$ 379,90"],
                ["Metroid Prime 4: Beyond", "FPS / Aventura", "94/100 ⭐", "R$ 379,90"],
                ["Donkey Kong Bananza", "Plataforma 3D", "88/100", "R$ 349,90"],
                ["Pokémon Legends: Z-A", "RPG (exclusivo Switch 2)", "86/100", "R$ 379,90"],
                ["Tomodachi Life: Living the Dream", "Simulação social", "84/100", "R$ 319,90"],
                ["Kirby Air Riders", "Corrida / Aventura", "82/100", "R$ 299,90"],
                ["Elden Ring (port Switch 2)", "Souls-like", "97/100 ⭐", "R$ 249,90"],
              ].map(([jogo, genero, nota, preco]) => (
                <tr key={jogo} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek">{jogo}</td>
                  <td className="py-3 px-4">{genero}</td>
                  <td className="py-3 px-4 text-xs">{nota}</td>
                  <td className="py-3 px-4 text-muted-foreground">{preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>A Nintendo confirmou compatibilidade com praticamente toda a biblioteca do Switch 1 — mais de <strong>6.500 jogos</strong>.</p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Nintendo Switch 2 no Brasil: Preço e Edições
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { edicao: "Switch 2 Standard", preco: "R$ 2.499", conteudo: "Console + Joy-Con 2 (vermelho/azul) + dock + cabos" },
            { edicao: "Mario Kart World Bundle", preco: "R$ 2.799", conteudo: "Console + Joy-Con 2 + Mario Kart World (digital) + dock + cabos" },
            { edicao: "Switch 2 + Pro Controller", preco: "R$ 3.199", conteudo: "Console + Joy-Con 2 + Pro Controller Switch 2 + dock + cabos" },
          ].map(({ edicao, preco, conteudo }) => (
            <div key={edicao} className="bg-card rounded-xl border border-geek/20 p-4">
              <h3 className="font-bold text-sm mb-1">{edicao}</h3>
              <div className="text-geek font-bold text-lg mb-2">{preco}</div>
              <p className="text-xs text-muted-foreground">{conteudo}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-geek" />
          Vale a Pena Comprar o Switch 2 Agora?
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "✅ Compre agora se...", items: ["Você nunca teve um Switch e quer entrar no ecossistema", "Mario Kart World, Metroid Prime 4 ou Zelda são seus jogos favoritos", "Você busca um console portátil premium sem abrir mão de qualidade gráfica", "Tem filhos e quer um console familiar e versátil"], cor: "border-green-500/30" },
            { perfil: "⏳ Espere se...", items: ["Você já tem um Switch OLED em bom estado e a biblioteca satisfaz", "Está esperando o preço cair (projeção: R$ 1.999 até final de 2027)", "Prefere esperar a biblioteca de Switch 2 Edition crescer mais", "O preço de R$ 2.499 pesa no orçamento"], cor: "border-yellow-500/30" },
          ].map(({ perfil, items, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold mb-3">{perfil}</h3>
              <ul className="space-y-1.5">
                {items.map(item => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já comprou o Switch 2? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários o que achou! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="nintendo-switch-2-guia-2026" />
      <CommentSection postId="nintendo-switch-2-guia-2026" postTitle="Nintendo Switch 2: Guia Completo do Novo Console" />
    </article>
  );
};

export default NintendoSwitch2Guia2026;
