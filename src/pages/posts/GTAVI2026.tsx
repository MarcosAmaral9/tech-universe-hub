import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, MapPin } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/gta-vi-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const GTAVI2026 = () => {
  useEffect(() => {
    trackArticleRead("gta-vi-guia-completo-2026", "GTA VI: Data de Lançamento, Plataformas, Personagens e Tudo que Sabemos", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Games · Rockstar · GTA VI</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          GTA VI: Data de Lançamento Confirmada, Plataformas, Personagens e Tudo que Sabemos
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="GTA VI data lançamento 2026 guia completo" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          GTA VI é o jogo mais esperado da história dos videogames. Com lançamento confirmado para <strong>26 de setembro de 2026</strong> no PS5 e Xbox Series X|S, e PC em 2027, este guia reúne absolutamente tudo que a Rockstar revelou: Vice City, os protagonistas Lucia e Jason, gameplay e preços no Brasil.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Informações Confirmadas pela Rockstar Games
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            { titulo: "Data de Lançamento", info: "26 de setembro de 2026", sub: "PS5 e Xbox Series X|S", icon: "📅" },
            { titulo: "Plataformas (lançamento)", info: "PS5 e Xbox Series X|S", sub: "PC versão 2027 (confirmado)", icon: "🎮" },
            { titulo: "Protagonistas", info: "Lucia (principal) + Jason", sub: "Primeira dupla protagonista da série", icon: "👫" },
            { titulo: "Ambientação", info: "Vice City (inspirada em Miami)", sub: "Estado fictício de Leonida + Keys", icon: "🌴" },
            { titulo: "Engine", info: "RAGE Engine (geração nova)", sub: "Iluminação volumétrica e física avançada", icon: "⚙️" },
            { titulo: "Preço estimado", info: "US$ 79,99 / R$ 449,90", sub: "Edição padrão (deluxe: US$ 109,99)", icon: "💰" },
          ].map(({ titulo, info, sub, icon }) => (
            <div key={titulo} className="bg-card rounded-xl border border-geek/20 p-4">
              <div className="text-xl mb-2">{icon}</div>
              <p className="text-xs text-muted-foreground mb-0.5">{titulo}</p>
              <h3 className="font-bold text-sm">{info}</h3>
              <p className="text-xs text-muted-foreground mt-1">{sub}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Os Protagonistas: Lucia e Jason
        </h2>
        <p>GTA VI marca uma virada histórica com <strong>Lucia</strong> como protagonista principal — a primeira mulher a liderar um GTA. A dinâmica com <strong>Jason</strong> remete ao filme Natural Born Killers.</p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold mb-2">👑 Lucia</h3>
            <p className="text-sm text-muted-foreground mb-2">Protagonista principal. Cubana-americana, saiu da prisão. Mente estratégica da dupla, controlável em 100% das missões principais.</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Habilidade especial: percepção elevada em combate</li>
              <li>• Background: criada nos bairros pobres de Vice City</li>
              <li>• Dublada por: Manni L. Perez</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-geek/20 p-5">
            <h3 className="font-bold mb-2">💪 Jason</h3>
            <p className="text-sm text-muted-foreground mb-2">Parceiro e coprotagonista. Mais impulsivo e voltado para confrontos diretos. Controlável em missões específicas e modo cooperativo online.</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Habilidade especial: resistência a danos em combate</li>
              <li>• Background: família com histórico criminal nas Keys</li>
              <li>• Dublado por: Jaylin Hall</li>
            </ul>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-geek" />
          Vice City e o Estado de Leonida
        </h2>
        <p>GTA VI se passa em <strong>Vice City</strong>, versão fictícia de Miami, dentro do estado de <strong>Leonida</strong> (Flórida). É o mapa mais ambicioso da Rockstar.</p>
        <div className="not-prose my-6 space-y-3">
          {[
            { local: "Vice City (cidade principal)", desc: "Inspirada em Miami, com equivalentes ao South Beach, Wynwood, Brickell. Arranha-céus, praias, boates e cassinos." },
            { local: "Keys de Leonida", desc: "Ilhotas ao sul conectadas por pontes. Marinas, mergulho e refúgios de luxo." },
            { local: "Pantano de Leonida", desc: "Equivalente aos Everglades. Barcos, jacarés, fazendas e missões de contrabando." },
            { local: "Cidades menores", desc: "Pelo menos 3 cidades ao redor da área metropolitana, cada uma com identidade própria." },
          ].map(({ local, desc }) => (
            <div key={local} className="bg-card rounded-xl border border-geek/20 p-4">
              <h4 className="font-bold text-sm mb-1">{local}</h4>
      <AdInArticle />
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Gameplay: O que Mudou em Relação ao GTA V
        </h2>
        <ul>
          <li><strong>Sistema de cover mais fluido:</strong> Mecânica remodelada, mais próxima de shooters modernos como TLOU II.</li>
          <li><strong>Interação social expandida:</strong> NPCs reagem de forma complexa, com conversas e intimidação sem missões.</li>
          <li><strong>Economia dinâmica:</strong> Negócios funcionam de verdade — investir em propriedades e gerenciar operações criminosas.</li>
          <li><strong>Veículos e física:</strong> Motor de física completamente refeito com deformações realistas.</li>
          <li><strong>GTA Online integrado:</strong> Modo online lançado junto com o jogo, suporte a 32 jogadores.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Edições, Preços e Pré-compra no Brasil
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Edição</th>
              <th className="text-left py-3 px-4">Preço EUA</th>
              <th className="text-left py-3 px-4">Preço Brasil</th>
              <th className="text-left py-3 px-4">Conteúdo Extra</th>
            </tr></thead>
            <tbody>
              {[
                ["Padrão (Digital)", "US$ 79,99", "R$ 449,90", "Jogo base"],
                ["Deluxe Edition", "US$ 109,99", "R$ 599,90", "DLC de veículo + skin + dinheiro GTA Online"],
                ["Collector's Edition", "US$ 149,99", "R$ 799,90", "Steelbook + mapa + arte + todos os DLCs"],
              ].map(([edicao, eua, br, extra]) => (
                <tr key={edicao} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{edicao}</td>
                  <td className="py-3 px-4 text-muted-foreground">{eua}</td>
                  <td className="py-3 px-4 text-geek font-bold">{br}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{extra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Requisitos de PC (Estimados para 2027)
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-yellow-500/20 p-5">
            <h3 className="font-bold text-yellow-400 mb-3">💻 Mínimos (1080p / 30fps)</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• CPU: AMD Ryzen 5 5600X / Intel i7-10700K</li>
              <li>• GPU: RTX 3070 / RX 6700 XT (8GB VRAM)</li>
              <li>• RAM: 16 GB DDR4</li>
              <li>• SSD NVMe 150 GB</li>
              <li>• Windows 11 64-bit</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">🚀 Recomendados (4K / 60fps)</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• CPU: AMD Ryzen 7 7800X3D / Intel i9-13900K</li>
              <li>• GPU: RTX 4080 / RX 7900 XTX (16GB VRAM)</li>
              <li>• RAM: 32 GB DDR5</li>
              <li>• SSD NVMe Gen 4 200 GB</li>
              <li>• Windows 11 64-bit</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Está ansioso para o GTA VI? 🌴</h3>
          <p className="text-muted-foreground">Conta nos comentários o que mais te animou nos trailers! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="gta-vi-guia-completo-2026" />
      <CommentSection postId="gta-vi-guia-completo-2026" postTitle="GTA VI: Data de Lançamento, Plataformas e Tudo que Sabemos" />
    </article>
  );
};

export default GTAVI2026;