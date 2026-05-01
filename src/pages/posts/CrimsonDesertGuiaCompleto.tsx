import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Gamepad2, Monitor, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-guia-completo", "Crimson Desert: Guia Completo 2026", "geek");
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
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />19 de Março, 2026 · Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async" src={crimsonGuiaImg} alt="Crimson Desert 2026 guia completo" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Crimson Desert</strong> foi lançado globalmente em <strong>19 de março de 2026</strong> para PC (Steam, Epic Games Store e site oficial da Pearl Abyss), macOS, PlayStation 5 e Xbox Series X|S. Após aproximadamente 7 anos de desenvolvimento, o jogo recebeu nota <strong>78 no Metacritic</strong> (PC) e <strong>80 no OpenCritic</strong> — mas vendeu <strong>5 milhões de cópias em menos de um mês</strong> e alcançou avaliação <strong>Very Positive (87%)</strong> no Steam com mais de 139 mil análises.
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
              ["Preço (USD)",    "$69.99 (Standard + Deluxe Pack) | $79.99 (só Deluxe)"],
              ["DRM",            "Denuvo (versão PC)"],
              ["Classificação",  "Mature 17+ (ESRB)"],
              ["Vendas",         "5 milhões de cópias em menos de 1 mês (15/04/2026)"],
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
          fictício de <strong>Pywel</strong>. O jogador controla <strong>Kliff</strong>, membro dos Greymanes
          — um grupo de mercenários que sofre um ataque devastador pelos Black Bears, facção rival. A narrativa
          acompanha Kliff na reunião dos sobreviventes, reconstrução dos Greymanes e enfrentamento de Myurdin,
          líder dos Black Bears, enquanto uma ameaça maior se aproxima de Pywel.
        </p>
        <p>
          O jogo foi originalmente anunciado em 2019 como prequel de Black Desert Online com elementos de
          MMORPG. Ao longo do desenvolvimento, a Pearl Abyss pivotou para um título totalmente independente,
          single-player e sem continuidade com o universo de Black Desert — um IP completamente separado.
          O custo de desenvolvimento foi estimado em aproximadamente 200 bilhões de KRW (~$133 milhões USD)
          ao longo dos 7 anos. Não há microtransações de poder, pay-to-win ou planos de DLC confirmados.
        </p>

        <h2>Histórico de Desenvolvimento</h2>
        <ul>
          <li><strong>2019:</strong> anúncio inicial como prequel MMO de Black Desert Online</li>
          <li><strong>Dezembro 2020:</strong> trailer no The Game Awards revelando foco em ação single-player</li>
          <li><strong>2021–2023:</strong> múltiplos adiamentos sem data definida; mudança de escopo para single-player puro e IP separado</li>
          <li><strong>Agosto 2023:</strong> trailer na Gamescom mostrando escopo revisado e motor gráfico</li>
          <li><strong>Setembro 2025:</strong> data oficial de 19/03/2026 confirmada na Tokyo Game Show</li>
          <li><strong>17 de março de 2026:</strong> pré-load disponível 48h antes do lançamento</li>
          <li><strong>18 de março de 2026:</strong> embargo de reviews levantado</li>
          <li><strong>19 de março de 2026:</strong> lançamento global simultâneo; Pearl Abyss cai 28,96% na bolsa</li>
          <li><strong>20 de março de 2026:</strong> 2 milhões de cópias vendidas em 24h confirmadas</li>
          <li><strong>24 de março de 2026:</strong> 3 milhões de cópias; ações Pearl Abyss sobem 27,76%</li>
          <li><strong>Início de abril de 2026:</strong> 4 milhões de cópias em aproximadamente 2 semanas</li>
          <li><strong>15 de abril de 2026:</strong> 5 milhões de cópias em 26 dias</li>
          <li><strong>22 de abril de 2026:</strong> Patch 1.04.00 — maior update, adiciona modos de dificuldade</li>
        </ul>

        <h2>Recepção da Crítica e dos Jogadores</h2>
        <p>
          Com Metacritic 78 (PC), o jogo foi recebido como "geralmente favorável" — abaixo das expectativas
          dos investidores, que precificavam uma média mid-to-high 80s. A divisão é clara: elogios para
          exploração, bosses e escala; críticas para narrativa fraca, sistemas confusos e missões repetitivas.
        </p>
        <p>
          A recepção dos jogadores foi muito mais positiva. O Steam saiu de "Mixed" no lançamento para
          <strong> "Very Positive" (87%)</strong> com mais de 139 mil análises em abril de 2026, impulsionado
          pelos patches constantes da Pearl Abyss. Com 5 milhões de cópias em 26 dias, analistas da NH
          Investment &amp; Securities estimaram receita potencial de 270 a 420 bilhões de won em 2026. O jogo
          permaneceu no top 10 de best-sellers na Steam, PlayStation Store e Xbox Store desde o lançamento.
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
                ["Standard + Deluxe Pack (Bundle)", "$69.99", "Jogo base + Kairos Plate Set (Helm, Gloves, Boots, Cloak, Armor), Balgran Shield, Exclaire Horse Tack Set"],
                ["Deluxe Edition",                  "$79.99", "Jogo base + Deluxe Pack (mesmos itens acima)"],
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
            ⚠️ Preços em USD conforme listado na Steam. Valores em reais variam por cotação e promoções.
            Não há DLC pago confirmado — a Pearl Abyss planeja apenas updates gratuitos.
          </p>
        </div>

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">DRM (Denuvo):</strong> dias antes do lançamento, a Pearl Abyss confirmou a inclusão do DRM Denuvo na versão PC. A decisão gerou reações negativas em parte da comunidade. A publisher não comentou sobre planos de remoção futura.
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <h3 className="font-bold mb-3 text-amber-400">⚠️ Controvérsias Pós-Lançamento</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-bold text-foreground mb-1">🎮 Intel Arc GPU — Suporte Inicialmente Negado, Agora em Desenvolvimento</p>
              <p>No lançamento, Crimson Desert explicitamente não suportava GPUs Intel Arc. Após pressão pública e declaração da Intel (que afirmou ter oferecido hardware e suporte à Pearl Abyss antes do lançamento), a empresa mudou o FAQ do site oficial, confirmando que está "trabalhando em compatibilidade e otimização" para que Crimson Desert funcione em GPUs Intel Arc. Um patch foi lançado permitindo rodar o jogo em Arc em estado não-otimizado, com problemas gráficos e instabilidade. Suporte completo sem data definida.</p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">🤖 Assets com IA Generativa</p>
              <p>Após o lançamento, jogadores identificaram pinturas e sinalizações dentro do jogo que pareciam ter sido criadas com IA generativa. A Pearl Abyss confirmou o uso em 22/03, adicionou a divulgação obrigatória na página do Steam e, no Patch 1.01.00 (28/03), substituiu os assets 2D identificados para "melhor alinhamento com a direção artística do jogo."</p>
            </div>
          </div>
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
                ["Mínimo",      "GTX 1060 / RX 5500 XT",    "i5-8500 / Ryzen 5 2600X",  "1080p 30fps (upscaled)"],
                ["Recomendado", "RTX 2080 / RX 6700 XT",    "i5-11600K / Ryzen 5 5600", "1080p 60fps ou 4K 30fps"],
                ["Alto",        "RTX 4070 / RX 7700 XT",    "i5-11600K / Ryzen 5 5600", "1440p 60fps"],
                ["Ultra",       "RTX 5070 Ti / RX 9070 XT", "i7-13700K / Ryzen 7 7700", "4K 60fps"],
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
            <strong> Intel Arc: suporte básico disponível mas ainda instável</strong> — aguardar updates.
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
            oficialmente. Há rumores de interesse em uma versão para Nintendo Switch 2, mas sem confirmação.
          </p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="crimson-desert-guia-completo" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-guia-completo" postTitle="Crimson Desert: Guia Completo 2026" />
    </article>
  );
};

export default CrimsonDesertGuiaCompleto;
