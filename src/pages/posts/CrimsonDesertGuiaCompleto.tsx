import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Monitor, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const CrimsonDesertGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead(
      "crimson-desert-guia-completo",
      "Crimson Desert: Guia Completo 2026",
      "geek"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia Completo — Lançamento, História, Notas e Tudo Que Você Precisa Saber
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchPriority="high" src={crimsonGuiaImg} alt="Crimson Desert 2026 guia completo" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Crimson Desert</strong> foi lançado globalmente em <strong>19 de março de 2026</strong> às
          15h PT (19h no horário de Brasília) para PC (Steam, Epic Games Store e site oficial da Pearl Abyss),
          macOS, PlayStation 5 e Xbox Series X|S. Após aproximadamente 7 anos de desenvolvimento, o jogo
          recebeu nota <strong>78 no Metacritic</strong> (PC) e <strong>80 no OpenCritic</strong> — avaliação
          "Geralmente Favorável" e "Strong", respectivamente.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <AdLeaderboard className="my-8" />

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-red-400" /> Ficha Técnica
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              ["Desenvolvedor",  "Pearl Abyss"],
              ["Publicador",     "Pearl Abyss"],
              ["Lançamento",     "19/03/2026 — 15h PT / 19h BRT"],
              ["Plataformas",    "PC (Steam, Epic, PA site), macOS, PS5, Xbox Series X|S"],
              ["Gênero",         "Action RPG / Mundo Aberto / Single-Player"],
              ["Engine",         "BlackSpace Engine (proprietária)"],
              ["Metacritic PC",  "78 — Geralmente Favorável"],
              ["OpenCritic",     "80 — Strong (81% recomendam)"],
              ["Preço",          "US$ 69,99 (Standard) | US$ 79,99 (Deluxe)"],
              ["DRM",            "Denuvo (versão PC)"],
              ["Classificação",  "Mature 17+ (ESRB)"],
              ["Tempo de jogo",  "Críticos reportam 110–150h para exploração ampla"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-muted-foreground text-xs">{k}</div>
                <div className="font-semibold text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>O Que É Crimson Desert?</h2>
        <p>
          Crimson Desert é um RPG de ação em mundo aberto focado em single-player, ambientado no continente
          fictício de <strong>Pywel</strong>. O jogador controla <strong>Kliff</strong>, líder dos Greymanes
          — um grupo de mercenários que sofre uma emboscada devastadora. A narrativa acompanha Kliff na
          reconstrução dos Greymanes e no enfrentamento das ameaças que desestabilizam Pywel.
        </p>
        <p>
          O jogo foi originalmente anunciado em 2019 como prequel de Black Desert Online com elementos de
          MMORPG. Ao longo do desenvolvimento, a Pearl Abyss pivotou para um título totalmente independente
          e focado em single-player premium — sem pay-to-win ou microtransações de poder. O custo de
          desenvolvimento foi estimado em aproximadamente 200 bilhões de KRW ao longo dos 7 anos.
        </p>

        <h2>Histórico de Desenvolvimento</h2>
        <ul>
          <li><strong>2019:</strong> anúncio inicial como prequel MMO de Black Desert Online</li>
          <li><strong>Dezembro 2020:</strong> trailer no The Game Awards revelando foco em ação single-player</li>
          <li><strong>2021–2023:</strong> múltiplos adiamentos sem data definida; mudança de escopo para single-player puro</li>
          <li><strong>Agosto 2023:</strong> trailer na Gamescom mostrando escopo revisado e motor gráfico</li>
          <li><strong>Setembro 2025:</strong> data oficial de 19/03/2026 confirmada na Tokyo Game Show</li>
          <li><strong>17 de março de 2026:</strong> pré-load disponível 48h antes do lançamento</li>
          <li><strong>18 de março de 2026:</strong> embargo de reviews levantado</li>
          <li><strong>19 de março de 2026:</strong> lançamento global simultâneo</li>
        </ul>

        <h2>Recepção da Crítica</h2>
        <p>
          Com 85 a 91 avaliações computadas no Metacritic PC, o jogo tem 74% de críticas positivas,
          25% mistas e 1% negativas. No OpenCritic, 81% dos críticos recomendam. A divisão é clara:
          quem amou destacou a exploração, os bosses e a escala; quem foi mais crítico apontou narrativa
          fraca, sistemas confusos e missões repetitivas.
        </p>
        <p>
          As ações da Pearl Abyss caíram <strong>28,96%</strong> na bolsa sul-coreana no dia do lançamento,
          pois as notas ficaram abaixo das expectativas internas da empresa.
        </p>

        <h2>Edições Disponíveis</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Edição</th>
                <th className="text-left py-3 px-4">Preço (USD)</th>
                <th className="text-left py-3 px-4">Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard",    "US$ 69,99",  "Jogo base"],
                ["Deluxe",      "US$ 79,99",  "Jogo + cosméticos exclusivos (mochila, skin de armadura, skin de cavalo)"],
                ["Collector's", "US$ 279,99", "Deluxe + estatueta, artbook, mapa de pano de Pywel, trilha sonora em CD"],
              ].map(([e, p, c]) => (
                <tr key={e} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{e}</td>
                  <td className="py-3 px-4 text-red-400 font-bold">{p}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            ⚠️ Preços em USD. O valor em reais varia conforme a cotação do dólar na loja no momento da compra.
            A Pearl Abyss não implementou regional pricing no Steam no lançamento.
          </p>
        </div>

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">DRM (Denuvo):</strong> dias antes do lançamento, a Pearl Abyss
            confirmou a inclusão do DRM Denuvo na versão PC. A decisão gerou reações negativas em parte da
            comunidade. A publisher não comentou sobre planos de remoção futura.
          </p>
        </div>

        <h2>Requisitos de PC</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Tier</th>
                <th className="text-left py-3 px-4">GPU</th>
                <th className="text-left py-3 px-4">CPU</th>
                <th className="text-left py-3 px-4">Meta</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mínimo",      "GTX 1060 / RX 5500 XT",   "i5-8500 / Ryzen 5 2600X",  "1080p 30fps (upscaled)"],
                ["Recomendado", "RTX 2080 / RX 6700 XT",   "i5-11600K / Ryzen 5 5600", "1080p 60fps ou 4K 30fps"],
                ["Alto",        "RTX 4070 / RX 7700 XT",   "i5-11600K / Ryzen 5 5600", "1440p 60fps"],
                ["Ultra",       "RTX 5070 Ti / RX 9070 XT","i7-13700K / Ryzen 7 7700", "4K 60fps"],
              ].map(([t, g, c, m]) => (
                <tr key={t} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{t}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{g}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{c}</td>
                  <td className="py-3 px-4 text-primary text-xs">{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Todos os tiers: 16 GB RAM mínimo · 150 GB SSD · Windows 10 64-bit (22H2+).
            Fonte: Pearl Abyss (especificações oficiais) e PCGamesN.
          </p>
        </div>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Monitor className="h-4 w-4 text-primary" /> Nota sobre Steam Deck / Portáteis
          </h3>
          <p className="text-sm text-muted-foreground">
            A Pearl Abyss divulgou performance para o ROG Xbox Ally: 40fps em 720p (FSR 3) no Ally padrão
            e 1080p 30fps no Ally X. Compatibilidade com Steam Deck (SteamOS) ainda não foi confirmada
            oficialmente, mas espera-se performance similar ao Ally padrão se rodar.
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-guia-completo" />
      <CommentSection postId="crimson-desert-guia-completo" postTitle="Crimson Desert: Guia Completo 2026" />
    </article>
  );
};

export default CrimsonDesertGuiaCompleto;
