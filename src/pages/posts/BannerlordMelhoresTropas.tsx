import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock,
  User,
  Calendar,
  Crown,
  Shield,
  Sword,
  Flag,
  Trophy,
  AlertTriangle,
  Ship,
  Target,
  Zap,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import LightboxImage from "@/components/LightboxImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/bannerlord-melhores-tropas.webp";
import warSailsMap from "@/assets/bannerlord-war-sails-map.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const tierColors: Record<string, { badge: string; row: string; accent: string }> = {
  S: { badge: "bg-amber-500/20 text-amber-300 border-amber-500/40", row: "bg-amber-500/5", accent: "text-amber-300" },
  A: { badge: "bg-rose-500/20 text-rose-300 border-rose-500/40", row: "bg-rose-500/5", accent: "text-rose-300" },
  B: { badge: "bg-sky-500/20 text-sky-300 border-sky-500/40", row: "bg-sky-500/5", accent: "text-sky-300" },
  C: { badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", row: "bg-emerald-500/5", accent: "text-emerald-300" },
};

type RankRow = { tier: "S" | "A" | "B" | "C"; unit: "T2" | "T3" | "T4" | "T5" | "T6"; troop: string; faction: string; why: string };

const sections: Array<{ title: string; icon: typeof Sword; subtitle: string; rows: RankRow[] }> = [
  {
    title: "Infantaria de Linha",
    icon: Shield,
    subtitle: "Escudo grande, sustenta o centro da batalha e absorve cargas.",
    rows: [
      { tier: "S", unit: "T4", troop: "Imperial Legionary", faction: "Empire", why: "Pilum + espada curta + escudo de torre. Linha mais disciplinada do jogo." },
      { tier: "S", unit: "T6", troop: "Nord Huscarl", faction: "Nords (War Sails)", why: "Shield wall + machado 2M. Aguenta carga pesada e quebra linhas." },
      { tier: "A", unit: "T5", troop: "Sturgian Heavy Spearman", faction: "Sturgia", why: "Pique pesado, melhor anti-cavalaria de linha." },
      { tier: "A", unit: "T3", troop: "Vlandian Sergeant", faction: "Vlandia", why: "Escudo grande + espada longa, sólido em qualquer terreno." },
      { tier: "B", unit: "T4", troop: "Aserai Veteran Footman", faction: "Aserai", why: "Boa em terreno aberto, fraca contra arco longo." },
      { tier: "C", unit: "T3", troop: "Khuzait Spear Infantry", faction: "Khuzait", why: "Khuzait não foi feita para linha — use só em emergência." },
    ],
  },
  {
    title: "Infantaria de Choque (2 Mãos)",
    icon: Zap,
    subtitle: "Sem escudo, dano massivo — quebra de linha, flanco, abordagem.",
    rows: [
      { tier: "S", unit: "T6", troop: "Nord Huscarl", faction: "Nords (War Sails)", why: "Machado 2M + placa pesada — anti-armadura e anti-cavalo a pé." },
      { tier: "S", unit: "T6", troop: "Sturgian Heavy Axeman", faction: "Sturgia", why: "Machado 1M com bônus anti-armadura, mata cavaleiros em 2 golpes." },
      { tier: "A", unit: "T5", troop: "Vlandian Voulgier", faction: "Vlandia", why: "Voulge — combina anti-cavalaria e dano de 2 mãos." },
      { tier: "A", unit: "T5", troop: "Battanian Wildling", faction: "Battania", why: "Espada 2M, sem armadura — frágil mas brutal em emboscada." },
      { tier: "B", unit: "T5", troop: "Imperial Menavliaton", faction: "Empire", why: "Menaulion curto, ótimo anti-cavalaria mas vulnerável a flechas." },
    ],
  },
  {
    title: "Arqueiros e Besteiros (Atiradores a Pé)",
    icon: Target,
    subtitle: "Dano à distância — decidem batalhas de cerco e formações lentas.",
    rows: [
      { tier: "S", unit: "T6", troop: "Battanian Fian Champion", faction: "Battania", why: "Arco longo + espada 2M. Headshots a 80m, melhor sniper do jogo." },
      { tier: "S", unit: "T4", troop: "Vlandian Sharpshooter", faction: "Vlandia", why: "Besta pesada — perfura plate armor, ideal em cerco." },
      { tier: "A", unit: "T4", troop: "Aserai Master Archer", faction: "Aserai", why: "Arco recurvo pesado, alto rate of fire em terreno aberto." },
      { tier: "A", unit: "T4", troop: "Imperial Bowman", faction: "Empire", why: "Arco composto + escudo pequeno, sobrevive melhor em corpo a corpo." },
      { tier: "B", unit: "T4", troop: "Nord Seafarer", faction: "Nords (War Sails)", why: "Arco longo + javelins, bônus em convés de navio." },
      { tier: "C", unit: "T3", troop: "Sturgian Veteran Bowman", faction: "Sturgia", why: "Atirador mais fraco entre T4–T5, use só se for tudo que tem." },
    ],
  },
  {
    title: "Cavalaria Pesada (Choque)",
    icon: Sword,
    subtitle: "Lança em ristre — devasta formações leves e arqueiros desprotegidos.",
    rows: [
      { tier: "S", unit: "T6", troop: "Vlandian Banner Knight", faction: "Vlandia", why: "Lança em ristre + plate armor. Melhor cavalaria pesada do jogo." },
      { tier: "S", unit: "T6", troop: "Imperial Cataphract", faction: "Empire", why: "Maça + lança + armadura completa. Versátil para choque e melee." },
      { tier: "A", unit: "T4", troop: "Khuzait Lancer", faction: "Khuzait", why: "Carga mais rápida que Vlandian, armadura levemente menor." },
      { tier: "A", unit: "T6", troop: "Aserai Mameluke Heavy Cavalry", faction: "Aserai", why: "Cimitarra + cota de placas, ótima em deserto e estepe." },
      { tier: "B", unit: "T6", troop: "Sturgian Druzhinnik Champion", faction: "Sturgia", why: "Boa cavalaria, mas a única robusta da Sturgia." },
    ],
  },
  {
    title: "Cavalaria à Distância (Horse Archers)",
    icon: Target,
    subtitle: "Hit and run — destroem formações lentas e anulam infantaria pesada em campo aberto.",
    rows: [
      { tier: "S", unit: "T6", troop: "Khuzait Khan's Guard", faction: "Khuzait", why: "Arco composto pesado a cavalo. Tropa mais letal em campo aberto." },
      { tier: "A", unit: "T5", troop: "Aserai Faris", faction: "Aserai", why: "Arco a cavalo + lança. Híbrido único: kite + carga." },
      { tier: "B", unit: "T3", troop: "Khuzait Horse Archer", faction: "Khuzait", why: "Versão econômica do Khan's Guard, ainda muito eficiente." },
      { tier: "C", unit: "T4", troop: "Battanian Mounted Skirmisher", faction: "Battania", why: "Javelins + cavalo, alcance curto, papel de nicho." },
    ],
  },
  {
    title: "Tropas Navais (War Sails)",
    icon: Ship,
    subtitle: "Exclusivo da expansão — bônus em combate a bordo, abordagens e tripulação.",
    rows: [
      { tier: "S", unit: "T6", troop: "Nord Huscarl", faction: "Nords (War Sails)", why: "Domina o convés. Ataque pesado e shield wall em espaço apertado." },
      { tier: "S", unit: "T6", troop: "Sea Jarl", faction: "Nords (War Sails)", why: "Capitão Nord — bônus de moral e comando para a tripulação inteira." },
      { tier: "A", unit: "T3", troop: "Nord Raider", faction: "Nords (War Sails)", why: "Especialista em abordagem, javelins + machado." },
      { tier: "A", unit: "T4", troop: "Nord Seafarer", faction: "Nords (War Sails)", why: "Atirador naval — bônus de mira em convés balançando." },
      { tier: "B", unit: "T3", troop: "Aserai Mameluke Soldier", faction: "Aserai", why: "Improvisa bem em abordagem por causa do escudo + cimitarra." },
      { tier: "C", unit: "T2", troop: "Vlandian Crossbowman", faction: "Vlandia", why: "Sem bônus naval — besta recarrega devagar no balanço." },
    ],
  },
];

const BannerlordMelhoresTropas = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-melhores-tropas-tier-list-2026",
      "Bannerlord: Melhores Tropas e Tier List 2026 — Ranking por Estilo",
      "geek",
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/bannerlord" portalLabel="Painel Bannerlord" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
            Bannerlord · Tier List
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord: Melhores Tropas e Tier List 2026 — Ranking por Estilo de Combate
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            11 de Junho, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            13 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={heroImg}
          alt="Elite das melhores tropas de Mount & Blade II: Bannerlord — Vlandian Banner Knight, Battanian Fian Champion, Imperial Cataphract, Khuzait Khan's Guard e Nord Huscarl"
          width={1920}
          height={1080}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-display
        prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
        prose-h2:pb-2 prose-h2:border-b prose-h2:border-amber-500/30
        prose-h2:text-amber-400
        prose-h3:text-xl prose-h3:font-bold prose-h3:text-amber-300 prose-h3:mt-6 prose-h3:mb-2
        prose-strong:text-foreground
        prose-a:text-amber-400"
      >
        <p className="lead text-xl text-muted-foreground">
          Esta é a <strong>tier list definitiva</strong> de Mount &amp; Blade II: Bannerlord em 2026, considerando a
          versão 1.x e a expansão paga <strong className="text-blue-300">War Sails</strong>. Cada papel tático
          (linha, choque, arqueiros, cavalaria, horse archers e o novo papel <em>naval</em>) recebeu um ranking{" "}
          <strong>S / A / B / C</strong> baseado em desempenho real em campanha modo difícil, testes de comunidade e
          fontes oficiais. Inclui as 8 culturas tradicionais — Vlandia, Battania, Sturgia, Aserai, Khuzait, Império
          Norte/Sul/Oeste — <strong>e os Nords</strong>, a 9ª cultura introduzida em War Sails.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Trophy className="h-5 w-5" /> Como Lemos o Tier
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              ["S", "Meta — domina o papel"],
              ["A", "Forte — escolha confiável"],
              ["B", "Médio — situacional"],
              ["C", "Fraco — só sem alternativa"],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50">
                <div className="text-2xl font-display font-bold text-amber-400">{k}</div>
                <div className="text-muted-foreground text-xs mt-1 leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>
          <Crown className="inline h-7 w-7 mr-2 -mt-1" />
          Top 5 — As Melhores Tropas do Jogo
        </h2>
        <p>
          Antes de ir cultura por cultura, o consenso da comunidade após mais de 5 anos de gameplay aponta para
          cinco tropas que aparecem em quase todo "exército dos sonhos":
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {[
            { rank: "#1", troop: "Khuzait Khan's Guard", role: "Horse archer", why: "Letal em campo aberto, anula formações lentas. Considerada a tropa mais quebrada do jogo." , color: "border-orange-500/30 text-orange-300"},
            { rank: "#2", troop: "Battanian Fian Champion", role: "Arqueiro a pé", why: "Arco longo brutal + espada 2M. Sniper que ainda vence em melee.", color: "border-emerald-500/30 text-emerald-300" },
            { rank: "#3", troop: "Vlandian Banner Knight", role: "Cavalaria pesada", why: "Carga mais devastadora do jogo. Decide batalhas em 30 segundos.", color: "border-rose-500/30 text-rose-300" },
            { rank: "#4", troop: "Nord Huscarl", role: "Infantaria pesada / 2M", why: "Melhor tropa de quebra de linha. Domina abordagens e cercos.", color: "border-blue-500/30 text-blue-300" },
            { rank: "#5", troop: "Imperial Cataphract", role: "Cavalaria versátil", why: "Choque, melee e armadura completa. Maça quebra escudos.", color: "border-indigo-500/30 text-indigo-300" },
          ].map((c) => (
            <div key={c.rank} className={`p-5 rounded-xl border bg-card/40 ${c.color}`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className={`font-display text-2xl font-bold ${c.color}`}>{c.rank}</span>
                <span className="font-bold text-foreground">{c.troop}</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{c.role}</div>
              <p className="text-sm text-muted-foreground m-0">{c.why}</p>
            </div>
          ))}
        </div>

        <p>
          Note que <strong>4 das 5 vagas</strong> estão divididas em papéis completamente diferentes — não há "tropa
          universal". A graça da meta de Bannerlord é exatamente combinar essas unidades em um exército híbrido.
        </p>

        <AdInArticle className="my-8" />

        {/* TIER LIST POR PAPEL */}
        <h2>
          <Trophy className="inline h-7 w-7 mr-2 -mt-1" />
          Tier List Completa — Papel por Papel
        </h2>

        {sections.map((sec) => (
          <div key={sec.title} className="not-prose my-8 p-6 rounded-2xl border border-amber-500/20 bg-card/30 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <sec.icon className="h-6 w-6 text-amber-400" />
              <h3 className="font-display text-xl font-bold text-amber-400 m-0">{sec.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{sec.subtitle}</p>

            <div className="overflow-x-auto rounded-lg border border-border/40">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent">
                    <th className="text-left py-2.5 px-3 font-bold text-amber-300 uppercase tracking-wider text-xs">Tier</th>
                    <th className="text-left py-2.5 px-3 font-bold text-amber-300 uppercase tracking-wider text-xs">Nível</th>
                    <th className="text-left py-2.5 px-3 font-bold text-amber-300 uppercase tracking-wider text-xs">Tropa</th>
                    <th className="text-left py-2.5 px-3 font-bold text-amber-300 uppercase tracking-wider text-xs hidden sm:table-cell">Facção</th>
                    <th className="text-left py-2.5 px-3 font-bold text-amber-300 uppercase tracking-wider text-xs">Por quê</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.rows.map((r, i) => {
                    const c = tierColors[r.tier];
                    return (
                      <tr
                        key={r.troop}
                        className={`border-t border-border/40 hover:bg-muted/30 transition-colors ${
                          i % 2 === 1 ? "bg-muted/20" : ""
                        } ${c.row}`}
                      >
                        <td className="py-2.5 px-3">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md border font-bold text-xs ${c.badge}`}>
                            {r.tier}
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md border border-border/60 bg-background/60 font-mono font-bold text-[11px] text-foreground/90">
                            {r.unit}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-foreground font-semibold">{r.troop}</td>
                        <td className={`py-2.5 px-3 text-xs hidden sm:table-cell ${c.accent}`}>{r.faction}</td>
                        <td className="py-2.5 px-3 text-muted-foreground text-xs">{r.why}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* NORDS DETALHE + MAPA */}
        <h2>
          <Ship className="inline h-7 w-7 mr-2 -mt-1 text-blue-300" />
          Por que os Nords entraram com força na tier list
        </h2>
        <p>
          Em 2025, ninguém apostava em uma cultura nova para roubar uma vaga S-tier. Mas o{" "}
          <strong className="text-blue-300">Nord Huscarl</strong> chegou no jogo já com armadura comparável ao{" "}
          <em>Imperial Legionary</em>, capacidade de carregar machado de 2 mãos sem perder velocidade e a shield
          wall mais densa entre todas as infantarias. Some isso ao <em>Sea Jarl</em>, que é um capitão único capaz
          de dar <strong>+10% de moral</strong> à tripulação inteira de um navio, e fica claro por que os Nords
          monopolizaram a tier list naval. Mesmo fora do mar, o <em>Nord Raider</em> rivaliza com o <em>Aserai
          Skirmisher</em> em escaramuça, e o <em>Nord Seafarer</em> é o terceiro melhor arqueiro a pé do jogo.
        </p>
        <p>
          A única fraqueza séria dos Nords é a <strong>cavalaria praticamente inexistente</strong>: a linha não
          passa de uma cavalaria leve T3. Para fechar essa lacuna em uma campanha 100% Nord, a comunidade tem
          recomendado misturar <em>Vlandian Banner Knights</em> ou <em>Imperial Cataphracts</em> contratados como
          mercenários, mantendo a base Nord para infantaria e tropas navais.
        </p>

        <div className="not-prose my-10">
          <div className="flex flex-col items-center text-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Ship className="h-4 w-4" /> Território dos Nords
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Litoral norte de Calradia (War Sails)</h3>
            <p className="text-muted-foreground max-w-2xl text-sm">
              Onde recrutar Huscarls, Raiders e Sea Jarls. Clique no mapa, arraste para navegar e use os botões de
              zoom para inspecionar cada porto e estandarte.
            </p>
          </div>
          <LightboxImage
            src={warSailsMap}
            alt="Mapa oficial da expansão War Sails de Mount & Blade II: Bannerlord mostrando os territórios e portos dos Nords no litoral norte de Calradia"
            caption="Mapa oficial War Sails · arraste para navegar · use + e − para o zoom"
            className="shadow-2xl shadow-blue-500/10"
            width={1991}
            height={1821}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
          />
        </div>

        <AdInArticle className="my-8" />

        <h2>
          <Flag className="inline h-7 w-7 mr-2 -mt-1" />
          Exércitos Imbatíveis em 2026 (Composições Testadas)
        </h2>
        <p>
          Combinando o ranking acima, três composições aparecem com mais frequência em campanhas modo difícil:
        </p>

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            {
              name: "O Clássico",
              accent: "text-amber-300",
              border: "border-amber-500/30 bg-amber-500/5",
              recipe: ["35% Vlandian Banner Knight", "30% Battanian Fian Champion", "25% Imperial Legionary", "10% Khuzait Khan's Guard"],
              note: "Equilíbrio entre choque, linha e dano à distância. Vence em qualquer terreno.",
            },
            {
              name: "O Estepario",
              accent: "text-orange-300",
              border: "border-orange-500/30 bg-orange-500/5",
              recipe: ["60% Khuzait Khan's Guard", "20% Khuzait Lancer", "20% Battanian Fian Champion"],
              note: "Anula infantaria pesada com kite. Sofre em cerco e contra muralhas.",
            },
            {
              name: "O Senhor dos Mares",
              accent: "text-blue-300",
              border: "border-blue-500/30 bg-blue-500/5",
              recipe: ["50% Nord Huscarl", "20% Nord Seafarer", "15% Sea Jarl", "15% Vlandian Banner Knight (mercenário)"],
              note: "Domínio naval e abordagem. A cavalaria Vlandiana resolve a fraqueza estrutural dos Nords em terra.",
            },
          ].map((c) => (
            <div key={c.name} className={`p-5 rounded-xl border ${c.border}`}>
              <h3 className={`font-display text-lg font-bold mb-3 ${c.accent}`}>{c.name}</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 mb-3">
                {c.recipe.map((line) => (
                  <li key={line} className="leading-snug">• {line}</li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic m-0">{c.note}</p>
            </div>
          ))}
        </div>

        <EditorialTake category="geek">
          <p>
            A tier list de Bannerlord é menos sobre "qual tropa mata mais" e mais sobre <em>qual tropa cobre as
            fraquezas do seu plano</em>. Banner Knight é S-tier, mas inútil contra uma muralha de besteiros. Khan's
            Guard atropela infantaria, mas se autodestrói contra pikemen. O que mudou em 2026 é que a expansão War
            Sails forçou todo mundo a repensar a composição: ignorar os Nords significa entregar o controle do mar
            — e, com isso, metade dos cercos custeiros de Calradia.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            {
              title: "Mount & Blade II: Bannerlord — página oficial",
              url: "https://www.taleworlds.com/en/Games/Bannerlord",
              publisher: "TaleWorlds Entertainment",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade Wiki — Best Troops",
              url: "https://mountandblade.fandom.com/wiki/Troops_(Bannerlord)",
              publisher: "Mount & Blade Wiki (Fandom)",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade II: Bannerlord no Steam",
              url: "https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/",
              publisher: "Valve / Steam",
              accessedAt: "Junho 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="bannerlord-melhores-tropas-tier-list-2026" />

        <CommentSection
          postId="bannerlord-melhores-tropas-tier-list-2026"
          postTitle="Bannerlord: Tier List das Melhores Tropas"
          category="geek"
          inviteTitle="Discorda do ranking?"
          inviteSubtitle="Qual tropa você acha que está sub ou superestimada? Deixa seu ranking nos comentários."
        />

        <div className="not-prose mt-10 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Aviso:</strong> tier lists refletem a meta na versão 1.x + War Sails. Patches podem rebalancear
            tropas e mods grandes (<em>Realistic Battle Mod</em>, <em>BannerKings</em>) reescrevem armaduras e
            danos. Use o ranking como ponto de partida, não como verdade absoluta.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BannerlordMelhoresTropas;
