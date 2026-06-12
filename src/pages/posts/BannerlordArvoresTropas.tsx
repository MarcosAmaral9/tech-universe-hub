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
  Users,
  AlertTriangle,
  Ship,
  Target,
  Hammer,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import LightboxImage from "@/components/LightboxImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/bannerlord-arvores-tropas.webp";
import warSailsMap from "@/assets/bannerlord-war-sails-map.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

type TroopRow = [string, string, string, string]; // [tier, troop, role, notes]

const trees: Array<{
  name: string;
  inspiration: string;
  color: string;
  accent: string;
  bg: string;
  border: string;
  rows: TroopRow[];
  highlight: string;
}> = [
  {
    name: "Vlandia",
    inspiration: "Normandos · França feudal",
    color: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    accent: "text-rose-300",
    bg: "from-rose-500/10",
    border: "border-rose-500/30",
    highlight: "Banner Knight — melhor cavalaria pesada do jogo, lança em ristre devasta linhas inteiras.",
    rows: [
      ["T1", "Vlandian Recruit", "Infantaria leve", "Lança curta, sem armadura"],
      ["T2", "Vlandian Footman", "Infantaria de linha", "Espada, escudo de torre"],
      ["T2", "Vlandian Crossbowman", "Atirador", "Besta de braço, alcance médio"],
      ["T3", "Vlandian Spearman", "Anti-cavalaria", "Pique longo, formação cerrada"],
      ["T3", "Vlandian Sergeant", "Infantaria pesada", "Cota de malha, escudo grande"],
      ["T3", "Vlandian Squire", "Cavalaria leve", "Espada e escudo, cavalo treinado"],
      ["T4", "Vlandian Pikeman", "Anti-cavalaria pesada", "Cota de placas + pique"],
      ["T4", "Vlandian Sharpshooter", "Atirador de elite", "Besta pesada, dano devastador"],
      ["T4", "Vlandian Knight", "Cavalaria pesada", "Armadura completa, lança"],
      ["T5", "Vlandian Voulgier", "Infantaria pesada", "Voulge (machado-pique), 2 mãos"],
      ["T5", "Vlandian Banner Knight", "Cavalaria de elite", "Lança em ristre, plate armor"],
    ],
  },
  {
    name: "Battania",
    inspiration: "Celtas · Galeses · Escoceses",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accent: "text-emerald-300",
    bg: "from-emerald-500/10",
    border: "border-emerald-500/30",
    highlight: "Fian Champion — arco longo brutal, mata cavaleiros pesados com 1-2 flechas a 80m.",
    rows: [
      ["T1", "Battanian Volunteer", "Infantaria leve", "Lança curta, sem armadura"],
      ["T2", "Battanian Clansman", "Infantaria de linha", "Espada longa de duas mãos"],
      ["T2", "Battanian Trained Volunteer", "Atirador leve", "Arco curto, javelins"],
      ["T3", "Battanian Veteran", "Infantaria pesada", "Cota de malha, escudo"],
      ["T3", "Battanian Skirmisher", "Escaramuçador", "Javelins + espada curta"],
      ["T3", "Battanian Hero's Bairn", "Cavalaria leve", "Única cavalaria nativa"],
      ["T4", "Battanian Picked Warrior", "Veterano de linha", "Falchion, escudo médio"],
      ["T4", "Battanian Highborn", "Arqueiro pesado", "Arco longo, sem escudo"],
      ["T4", "Battanian Mounted Skirmisher", "Cavalaria de escaramuça", "Javelins a cavalo"],
      ["T5", "Battanian Wildling", "Berserker", "2 mãos, sem armadura pesada"],
      ["T5", "Battanian Fian Champion", "Arqueiro de elite", "Arco longo + espada de 2 mãos"],
    ],
  },
  {
    name: "Sturgia",
    inspiration: "Rus medievais · Vikings continentais",
    color: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    accent: "text-sky-300",
    bg: "from-sky-500/10",
    border: "border-sky-500/30",
    highlight: "Heavy Axeman — machado de uma mão devastador contra placa pesada, melhor anti-armadura a pé.",
    rows: [
      ["T1", "Sturgian Recruit", "Infantaria leve", "Lança, escudo redondo"],
      ["T2", "Sturgian Warrior", "Infantaria de linha", "Machado de uma mão"],
      ["T2", "Sturgian Bowman", "Atirador", "Arco curto, alcance fraco"],
      ["T3", "Sturgian Spearman", "Anti-cavalaria", "Pique + escudo redondo"],
      ["T3", "Sturgian Veteran Bowman", "Atirador", "Arco médio"],
      ["T3", "Sturgian Horseman", "Cavalaria leve", "Lança curta, fraca"],
      ["T4", "Sturgian Shock Troop", "Choque a pé", "2 mãos, sem escudo"],
      ["T4", "Sturgian Veteran Warrior", "Linha pesada", "Cota de malha, machado/escudo"],
      ["T4", "Sturgian Druzhinnik Champion", "Cavalaria pesada", "Melhor cavaleiro pesado de Sturgia"],
      ["T5", "Sturgian Heavy Axeman", "Elite anti-armadura", "Machado pesado de uma mão + escudo"],
      ["T5", "Sturgian Heavy Spearman", "Elite anti-cavalaria", "Pique + cota de placas"],
    ],
  },
  {
    name: "Aserai",
    inspiration: "Árabes · Beduínos",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    accent: "text-amber-300",
    bg: "from-amber-500/10",
    border: "border-amber-500/30",
    highlight: "Mameluke Cavalry — espada curva + escudo + arco, hibridiza melee e à distância.",
    rows: [
      ["T1", "Aserai Tribesman", "Infantaria leve", "Lança curta"],
      ["T2", "Aserai Footman", "Infantaria de linha", "Espada, escudo redondo"],
      ["T2", "Aserai Skirmisher", "Escaramuçador", "Javelins + espada curta"],
      ["T3", "Aserai Veteran Infantry", "Linha pesada", "Cota de malha"],
      ["T3", "Aserai Archer", "Atirador", "Arco recurvo médio"],
      ["T3", "Aserai Mameluke Soldier", "Cavalaria leve", "Espada curva, escudo"],
      ["T4", "Aserai Veteran Footman", "Linha de elite", "Escudo grande + espada"],
      ["T4", "Aserai Master Archer", "Arqueiro pesado", "Arco recurvo + flechas perfurantes"],
      ["T4", "Aserai Mameluke Heavy Cavalry", "Cavalaria pesada", "Cota de placas + cimitarra"],
      ["T5", "Aserai Faris", "Cavalaria mista", "Arco a cavalo + lança"],
      ["T5", "Aserai Mameluke Cavalry", "Cavalaria de elite", "Cimitarra + arco + escudo"],
    ],
  },
  {
    name: "Khuzait",
    inspiration: "Mongóis · Estepes da Ásia Central",
    color: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    accent: "text-orange-300",
    bg: "from-orange-500/10",
    border: "border-orange-500/30",
    highlight: "Khan's Guard — horse archer mais letal do jogo, arco composto + flechas perfurantes.",
    rows: [
      ["T1", "Khuzait Nomad", "Infantaria leve", "Lança curta"],
      ["T2", "Khuzait Tribal Warrior", "Infantaria média", "Espada, escudo redondo pequeno"],
      ["T2", "Khuzait Hunter", "Atirador a pé", "Arco composto, péssimo em melee"],
      ["T3", "Khuzait Spear Infantry", "Anti-cavalaria", "Pique, sem escudo grande"],
      ["T3", "Khuzait Raider", "Cavalaria leve", "Espada curva, escudo"],
      ["T3", "Khuzait Horse Archer", "Cavalaria à distância", "Arco a cavalo médio"],
      ["T4", "Khuzait Spearman", "Linha de pique", "Cota de malha + pique"],
      ["T4", "Khuzait Heavy Horseman", "Cavalaria pesada", "Lança + espada curva"],
      ["T4", "Khuzait Lancer", "Cavalaria de choque", "Lança em ristre"],
      ["T5", "Khuzait Darkhan", "Cavalaria de elite", "Espada longa a cavalo"],
      ["T5", "Khuzait Khan's Guard", "Horse archer de elite", "Arco composto pesado"],
    ],
  },
  {
    name: "Empire (Norte, Sul e Oeste)",
    inspiration: "Bizâncio fragmentado — capitais Lycaron, Pravend e Jalmarys",
    color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    accent: "text-indigo-300",
    bg: "from-indigo-500/10",
    border: "border-indigo-500/30",
    highlight:
      "As três facções imperiais (Norte de Rhagaea, Sul de Garios e Oeste de Lucon) compartilham exatamente a mesma árvore de tropas — os nomes e estatísticas das unidades são idênticos. O que muda é apenas a região onde você recruta. Estrela: Cataphract (T6) — maça + lança + armadura completa.",
    rows: [
      ["T1", "Imperial Recruit", "Infantaria leve", "Lança, sem armadura"],
      ["T2", "Imperial Infantryman", "Infantaria de linha", "Espada curta, escudo de torre"],
      ["T2", "Imperial Archer", "Atirador", "Arco composto, alcance médio"],
      ["T3", "Imperial Trained Infantryman", "Veterano de linha", "Cota de malha + escudo"],
      ["T3", "Imperial Veteran Archer", "Atirador pesado", "Arco composto + espada curta"],
      ["T3", "Imperial Equite", "Cavalaria leve", "Lança curta, escudo redondo"],
      ["T4", "Imperial Legionary", "Linha de elite", "Pilum + espada curta + escudo de torre"],
      ["T4", "Imperial Bowman", "Atirador de elite", "Arco composto pesado"],
      ["T4", "Imperial Heavy Horseman", "Cavalaria pesada", "Lança + cota de placas"],
      ["T5", "Imperial Menavliaton", "Anti-cavalaria pesada", "Menaulion (lança curta 2 mãos)"],
      ["T6", "Imperial Cataphract", "Cavalaria de choque (elite máxima)", "Maça + lança + armadura completa"],
    ],
  },
  {
    name: "Nords (War Sails)",
    inspiration: "Vikings de mar aberto · Nórdicos",
    color: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accent: "text-blue-300",
    bg: "from-blue-500/10",
    border: "border-blue-500/30",
    highlight: "Nord Huscarl — machado de 2 mãos + shield wall, melhor infantaria de elite na expansão War Sails.",
    rows: [
      ["T1", "Nord Recruit", "Infantaria leve", "Lança curta, escudo redondo"],
      ["T2", "Nord Footman", "Linha", "Cota de malha curta, machado de 1 mão"],
      ["T2", "Nord Bondsman", "Atirador leve", "Arco curto + javelins"],
      ["T3", "Nord Warrior", "Veterano de linha", "Machado de 1 mão, escudo reforçado"],
      ["T3", "Nord Hunter", "Atirador a pé", "Arco médio"],
      ["T3", "Nord Raider", "Escaramuçador costeiro", "Javelins + machado, especialista em abordagem"],
      ["T4", "Nord Veteran Warrior", "Linha pesada", "Cota de placas + escudo grande"],
      ["T4", "Nord Berserker", "Choque sem escudo", "Machado de 2 mãos, frenesi"],
      ["T4", "Nord Seafarer", "Atirador naval", "Arco longo + javelins, bônus em barco"],
      ["T5", "Nord Huscarl", "Elite de infantaria", "Machado de 2 mãos + armadura pesada"],
      ["T5", "Sea Jarl", "Capitão de elite", "Espada + escudo, bônus de comando naval"],
    ],
  },
];

const BannerlordArvoresTropas = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-arvores-tropas-completo-2026",
      "Bannerlord: Árvores de Tropas — Guia Completo das 9 Culturas",
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
            Bannerlord · Tropas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord: Árvores de Tropas — Guia Completo das 9 Culturas
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
            14 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="11 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={heroImg}
          alt="Diversas tropas das culturas de Calradia em formação — cavalaria pesada, arqueiros, infantaria de elite e horse archers em Mount & Blade II: Bannerlord"
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
          Em <strong>Mount &amp; Blade II: Bannerlord</strong>, cada cultura tem uma <strong>árvore de tropas</strong>{" "}
          própria — uma cadeia de promoção que vai do recruta camponês (<strong>Tier 1, o mais fraco</strong>) até a
          unidade de elite da linha nobre (<strong>Tier 6, o topo da árvore</strong>). Entender essas árvores é o que
          separa o jogador que perde batalhas para clãs menores do veterano que vence superado em número. Este guia
          mostra <strong>todas as 9 facções jogáveis</strong> — Vlandia, Battania, Sturgia, Aserai, Khuzait, os três
          Impérios (Norte, Sul e Oeste — que compartilham a mesma árvore imperial) e os{" "}
          <strong className="text-blue-300">Nords</strong>, trazidos oficialmente pela expansão paga{" "}
          <strong className="text-blue-300">War Sails</strong>.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Flag className="h-5 w-5" /> Como Ler uma Árvore de Tropas
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              ["T1–T2", "Recruta básico, perde rápido"],
              ["T3", "Veterano de linha, custo/benefício"],
              ["T4", "Tropa pesada, exige equipamento"],
              ["T5", "Elite — gargalo de XP e ouro"],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50">
                <div className="text-lg font-display font-bold text-amber-400">{k}</div>
                <div className="text-muted-foreground text-xs mt-1 leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>
          <Users className="inline h-7 w-7 mr-2 -mt-1" />
          Como o Sistema de Tropas Funciona
        </h2>
        <p>
          Você recruta soldados de Tier 1 nas vilas controladas por cada cultura. Cada cultura tem sua própria árvore
          (a vila Aserai dá Aserai Tribesman, a vila Khuzait dá Khuzait Nomad, e assim por diante). Com{" "}
          <strong>experiência em batalha</strong> a tropa acumula XP e pode ser promovida: gasta-se <em>denars</em> e
          às vezes você escolhe entre dois caminhos (linha pesada ou atirador, por exemplo). A árvore se ramifica
          principalmente nos Tiers 2–3, e converge em uma ou duas unidades de elite no Tier 5.
        </p>
        <p>
          Tropas <strong>não trocam de cultura</strong> ao serem capturadas ou contratadas — uma vez Vlandian, sempre
          Vlandian. Por isso é comum jogadores manterem exércitos <em>multiculturais</em>, mesclando, por exemplo,
          Imperial Legionários (linha) com Khan's Guards (à distância) e Vlandian Banner Knights (cavalaria). É a
          forma mais consistente de ter um exército imbatível no late-game.
        </p>

        <h3>Os 5 papéis táticos principais</h3>
        <ul>
          <li><strong>Infantaria de linha:</strong> escudo grande, espada/machado curto — sustenta o centro.</li>
          <li><strong>Infantaria pesada / 2 mãos:</strong> sem escudo, dano massivo — flanco e quebra de linha.</li>
          <li><strong>Atirador a pé (arqueiro ou besteiro):</strong> dano à distância, vulnerável em melee.</li>
          <li><strong>Cavalaria de choque:</strong> lança em ristre, brutal contra arqueiros e infantaria leve.</li>
          <li><strong>Horse archer / escaramuça:</strong> hit and run, anula formações lentas.</li>
        </ul>
        <p>
          Com a expansão <strong className="text-blue-300">War Sails</strong>, a TaleWorlds adicionou um sexto papel
          tático: <strong className="text-blue-300">tripulação naval</strong> — tropas com bônus de moral e
          desempenho em batalhas a bordo de longships e drakkars. Os <strong className="text-blue-300">Nords</strong>{" "}
          são a única cultura com unidades dedicadas a esse papel desde o Tier 3.
        </p>

        <AdInArticle className="my-8" />

        {/* TREES */}
        <h2>
          <Sword className="inline h-7 w-7 mr-2 -mt-1" />
          Árvores Completas — Cultura por Cultura
        </h2>

        {trees.map((t) => (
          <div
            key={t.name}
            className={`not-prose my-8 p-6 rounded-2xl border ${t.border} bg-gradient-to-br ${t.bg} via-transparent to-background shadow-lg`}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${t.color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {t.name}
              </span>
              <span className="text-xs text-muted-foreground">{t.inspiration}</span>
            </div>

            <div className={`p-3 rounded-lg bg-background/40 border border-border/40 mb-4 text-sm`}>
              <Crown className={`inline h-4 w-4 mr-1.5 -mt-0.5 ${t.accent}`} />
              <strong className={t.accent}>Estrela:</strong>{" "}
              <span className="text-muted-foreground">{t.highlight}</span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border/40">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className={`${t.color}`}>
                    <th className="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-xs">Tier</th>
                    <th className="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-xs">Tropa</th>
                    <th className="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-xs">Papel</th>
                    <th className="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-xs hidden md:table-cell">
                      Equipamento / Notas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map(([tier, troop, role, notes], i) => (
                    <tr
                      key={troop}
                      className={`border-t border-border/40 hover:bg-muted/30 transition-colors ${
                        i % 2 === 1 ? "bg-muted/20" : ""
                      }`}
                    >
                      <td className={`py-2.5 px-3 font-bold ${t.accent}`}>{tier}</td>
                      <td className="py-2.5 px-3 text-foreground font-semibold">{troop}</td>
                      <td className="py-2.5 px-3 text-muted-foreground text-xs">{role}</td>
                      <td className="py-2.5 px-3 text-muted-foreground text-xs hidden md:table-cell">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* MAPA WAR SAILS · NORDS */}
        <h2>
          <Ship className="inline h-7 w-7 mr-2 -mt-1 text-blue-300" />
          Por que os Nords mudam o equilíbrio do jogo
        </h2>
        <p>
          Antes da expansão <strong className="text-blue-300">War Sails</strong>, Calradia tinha apenas 8 culturas e
          nenhuma delas era especializada em combate naval. A chegada dos <strong className="text-blue-300">Nords</strong>{" "}
          inverte essa lógica: no litoral norte do mapa de Calradia, os Nords não só ocupam portos-fortaleza como
          também são os <strong>únicos com tropas que recebem bônus a bordo</strong> de longships e drakkars desde
          o Tier 3. Em batalhas terrestres, o <em>Nord Huscarl</em> continua sendo uma das melhores infantarias
          pesadas do jogo — comparado de igual para igual com Imperial Legionary e Sturgian Heavy Axeman.
        </p>

        <div className="not-prose my-10">
          <div className="flex flex-col items-center text-center mb-5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Onde recrutar Nords</h3>
            <p className="text-muted-foreground max-w-2xl text-sm">
              Vilas costeiras controladas por clãs Nords no mapa War Sails. Clique no mapa, arraste e use zoom para
              identificar cada porto e estandarte.
            </p>
          </div>
          <LightboxImage
            src={warSailsMap}
            alt="Mapa oficial da expansão War Sails mostrando os portos-fortaleza dos Nords no litoral norte de Calradia em Mount & Blade II: Bannerlord"
            caption="Mapa oficial War Sails · arraste para navegar · use + e − para zoom"
            className="shadow-2xl shadow-blue-500/10"
            width={1991}
            height={1821}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
          />
        </div>

        <h3>Comparativo direto: Nord Huscarl vs. as melhores T5 do jogo</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-blue-500/20 shadow-lg">
          <table className="w-full text-sm border-collapse bg-card">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent">
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Tropa</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Arma principal</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Armadura</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Função</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Nord Huscarl", "Machado 2 mãos", "Pesada (placa)", "Quebra de linha + shield wall"],
                ["Imperial Legionary", "Pilum + espada curta", "Pesada (placa)", "Linha disciplinada"],
                ["Sturgian Heavy Axeman", "Machado 1 mão", "Pesada (malha)", "Anti-armadura"],
                ["Vlandian Voulgier", "Voulge (machado-pique)", "Pesada (placa)", "Anti-cavalaria + dano"],
                ["Battanian Wildling", "Espada 2 mãos", "Leve", "Berserker"],
              ].map(([troop, weapon, armor, role], i) => (
                <tr
                  key={troop}
                  className={`border-t border-border/40 hover:bg-blue-500/5 transition-colors ${
                    i % 2 === 1 ? "bg-muted/20" : ""
                  }`}
                >
                  <td className="py-3 px-4 font-semibold text-foreground">{troop}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{weapon}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{armor}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2>
          <Hammer className="inline h-7 w-7 mr-2 -mt-1" />
          Como Treinar Tropas Rapidamente
        </h2>
        <p>
          A promoção de tropa exige <strong>XP de batalha</strong> e <strong>denars</strong>. Algumas formas
          comprovadas de acelerar:
        </p>
        <ul>
          <li>
            <strong>Looters infinitos:</strong> caçar bandos de saqueadores no início do jogo dá XP rápido para os
            recrutas T1 sem grande risco.
          </li>
          <li>
            <strong>Perks de Liderança e Cura:</strong> a árvore de <em>Steward</em> e <em>Leadership</em> aumenta o
            ganho de XP de tropas no exército.
          </li>
          <li>
            <strong>Companheiros com perks de treinamento:</strong> um companheiro com nível alto em{" "}
            <em>Trainer</em> dá XP passivo diário a toda a sua party.
          </li>
          <li>
            <strong>Patrullas de torneios:</strong> participar e ganhar torneios não treina suas tropas, mas dá
            denars suficientes para promover dezenas de unidades de uma vez.
          </li>
          <li>
            <strong>Fiefs com vilas culturais corretas:</strong> manter cidades da mesma cultura que você quer
            recrutar garante fluxo constante de tropas de elite.
          </li>
        </ul>

        <h2>
          <Target className="inline h-7 w-7 mr-2 -mt-1" />
          Composição de Exército Recomendada
        </h2>
        <p>
          Não existe "melhor cultura única". Os exércitos vencedores em campanhas modo difícil costumam ser{" "}
          <strong>híbridos</strong>. Algumas composições testadas pela comunidade:
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Campo aberto",
              color: "border-rose-500/30 bg-rose-500/5",
              accent: "text-rose-300",
              comp: ["40% Vlandian Banner Knight (cavalaria de choque)", "30% Khan's Guard (horse archers)", "20% Imperial Legionary (linha)", "10% Battanian Fian Champion (atirador)"],
            },
            {
              title: "Cerco / defesa de muralha",
              color: "border-indigo-500/30 bg-indigo-500/5",
              accent: "text-indigo-300",
              comp: ["50% Imperial Legionary ou Nord Huscarl (linha)", "30% Battanian Fian Champion (arqueiros)", "20% Vlandian Sharpshooter (besteiros pesados)"],
            },
            {
              title: "Estepe / vs Khuzait",
              color: "border-amber-500/30 bg-amber-500/5",
              accent: "text-amber-300",
              comp: ["40% Vlandian Pikeman / Imperial Menavliaton (anti-cavalaria)", "30% Vlandian Banner Knight", "30% Vlandian Sharpshooter"],
            },
            {
              title: "Naval / costa (War Sails)",
              color: "border-blue-500/30 bg-blue-500/5",
              accent: "text-blue-300",
              comp: ["60% Nord Huscarl (abordagem + linha)", "20% Nord Seafarer (atirador naval)", "10% Sea Jarl (capitão)", "10% Battanian Fian Champion (sniper de convés)"],
            },
          ].map((c) => (
            <div key={c.title} className={`p-5 rounded-xl border ${c.color}`}>
              <h3 className={`font-display text-lg font-bold mb-3 ${c.accent}`}>{c.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                {c.comp.map((line) => (
                  <li key={line} className="leading-snug">• {line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <EditorialTake category="geek">
          <p>
            A graça da árvore de tropas em Bannerlord é que não existe escolha "ruim" — só escolhas inadequadas ao
            terreno e ao inimigo. Khan's Guard humilha qualquer exército em campo aberto, mas vira presa fácil dentro
            de uma muralha. Banner Knight desfaz formações leves, mas é destruído por uma fila de pikes. A expansão
            War Sails adicionou uma camada inteira nova ao xadrez: agora ter ou não Nords no seu exército decide se
            você consegue projetar poder pelo mar — ou se assiste a sua costa ser saqueada sem reação.
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
              title: "Mount & Blade Wiki — Troops (Bannerlord)",
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

        <RelatedPosts currentSlug="bannerlord-arvores-tropas-completo-2026" />

        <CommentSection
          postId="bannerlord-arvores-tropas-completo-2026"
          postTitle="Bannerlord: Árvores de Tropas das 9 Culturas"
          category="geek"
          inviteTitle="Qual a sua composição preferida?"
          inviteSubtitle="Banner Knight + Fian Champion? 100% Nord Huscarl? Conta como você monta o exército ideal em Calradia."
        />

        <div className="not-prose mt-10 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Aviso:</strong> as árvores de tropas podem mudar em patches futuros da TaleWorlds. Mods grandes
            como <em>Realistic Battle Mod</em>, <em>Europe 1100</em> e <em>BannerKings</em> reescrevem boa parte
            das unidades. Dados confirmados até a versão 1.x do jogo base + expansão War Sails.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BannerlordArvoresTropas;
