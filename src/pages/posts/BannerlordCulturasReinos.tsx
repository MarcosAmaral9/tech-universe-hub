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
  Map as MapIcon,
  Users,
  AlertTriangle,
  Ship,
  Anchor,
  Coins,
  Mountain,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import LightboxImage from "@/components/LightboxImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import culturasImg from "@/assets/bannerlord-culturas-reinos.webp";
import bannerlordWarSailsMap from "@/assets/bannerlord-war-sails-expansao.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const cultures = [
  {
    name: "Vlandia",
    inspiration: "França feudal · Normandos",
    capital: "Pravend",
    color: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    accent: "text-rose-300",
    strength: "Cavalaria pesada com lança (Vlandian Knights)",
    weakness: "Infantaria média sem grande variedade",
    troopStar: "Vlandian Banner Knight",
  },
  {
    name: "Battania",
    inspiration: "Celtas · Escoceses · Galeses",
    capital: "Marunath",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accent: "text-emerald-300",
    strength: "Arqueiros e fianna em terreno acidentado",
    weakness: "Pouca cavalaria, sem unidade pesada nativa",
    troopStar: "Battanian Fian Champion",
  },
  {
    name: "Sturgia",
    inspiration: "Vikings · Rus medievais",
    capital: "Tyal",
    color: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    accent: "text-sky-300",
    strength: "Infantaria pesada com escudos e machados",
    weakness: "Arqueiros e cavalaria abaixo da média",
    troopStar: "Sturgian Heavy Axeman",
  },
  {
    name: "Aserai",
    inspiration: "Árabes · Beduínos",
    capital: "Quyaz",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    accent: "text-amber-300",
    strength: "Cavalaria veloz e escaramuçadores de deserto",
    weakness: "Infantaria pesada limitada",
    troopStar: "Aserai Mameluke Cavalry",
  },
  {
    name: "Khuzait",
    inspiration: "Mongóis · Estepes",
    capital: "Makeb",
    color: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    accent: "text-orange-300",
    strength: "Arqueiros a cavalo (horse archers) dominantes",
    weakness: "Cercos e infantaria pesada são fracos",
    troopStar: "Khuzait Khan's Guard",
  },
  {
    name: "Empire (Norte)",
    inspiration: "Bizâncio Oriental",
    capital: "Epicrotea",
    color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    accent: "text-indigo-300",
    strength: "Catafractários e infantaria disciplinada",
    weakness: "Custo de tropas elevado",
    troopStar: "Imperial Cataphract",
  },
  {
    name: "Empire (Sul)",
    inspiration: "Bizâncio Meridional",
    capital: "Lycaron",
    color: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    accent: "text-violet-300",
    strength: "Legionários e arqueiros de cidade",
    weakness: "Vulnerável a cavalaria de flanco",
    troopStar: "Imperial Legionary",
  },
  {
    name: "Empire (Oeste)",
    inspiration: "Bizâncio Ocidental · República",
    capital: "Jalmarys",
    color: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
    accent: "text-fuchsia-300",
    strength: "Equilibrada — boa em tudo, mestre em nada",
    weakness: "Sem grande pico de poder em uma arma",
    troopStar: "Imperial Menavliaton",
  },
  {
    name: "Nords",
    inspiration: "Nórdicos · Vikings de mar aberto",
    capital: "Wercheg (porto-fortaleza)",
    color: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accent: "text-blue-300",
    strength: "Infantaria de abordagem e domínio naval (War Sails)",
    weakness: "Cavalaria praticamente inexistente, fraca em campo aberto",
    troopStar: "Nord Huscarl",
  },
];

const BannerlordCulturasReinos = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-culturas-reinos-calradia-2026",
      "Bannerlord: Culturas e Reinos de Calradia — Guia das 9 Facções",
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
            Bannerlord · Culturas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord: Culturas e Reinos de Calradia — Guia das 9 Facções
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />8 de Junho, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="08 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={culturasImg}
          alt="Guerreiros das oito culturas de Calradia em Mount & Blade II: Bannerlord"
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
          <strong>Calradia</strong> é o continente fictício de <em>Mount &amp; Blade II: Bannerlord</em>, dividido
          historicamente em <strong>8 culturas jogáveis</strong> — e, com a chegada da expansão
          <strong className="text-blue-300"> War Sails</strong>, ganha uma <strong>9ª cultura oficial</strong>: os
          <strong className="text-blue-300"> Nords</strong>, povo nórdico do litoral norte. Cada cultura tem cidades,
          arquitetura, bônus passivos, árvore de tropas e estilo de combate próprios — e escolher a cultura certa
          muda completamente como você joga.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Flag className="h-5 w-5" /> Resumo Rápido
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              ["Culturas", "9"],
              ["Cidades", "75+"],
              ["Castelos", "125+"],
              ["Vilas", "360+"],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50 text-center">
                <div className="text-2xl font-display font-bold text-amber-400">{v}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wide mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>
          <Crown className="inline h-7 w-7 mr-2 -mt-1" />
          As 9 Culturas em uma Tabela
        </h2>
        <p>
          O quadro abaixo resume cada facção, sua inspiração histórica, capital padrão e a tropa de elite mais
          conhecida. Os bônus passivos da cultura (ex.: <em>Aserai</em> ganha relação com caravanas, <em>Khuzait</em>
          ganha bônus de movimento na campanha) impactam diretamente o estilo de jogo.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Cultura</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Inspiração</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Capital</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Tropa-estrela</th>
              </tr>
            </thead>
            <tbody>
              {cultures.map((c, i) => (
                <tr
                  key={c.name}
                  className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${
                    i % 2 === 1 ? "bg-muted/20" : ""
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${c.color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {c.name}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs">{c.inspiration}</td>
                  <td className="py-3.5 px-4 text-foreground text-xs font-semibold">{c.capital}</td>
                  <td className={`py-3.5 px-4 text-xs font-semibold ${c.accent}`}>{c.troopStar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        {/* WAR SAILS · NORDS */}
        <h2>
          <Ship className="inline h-7 w-7 mr-2 -mt-1 text-blue-300" />
          Nords — A 9ª Cultura Trazida pela Expansão War Sails
        </h2>
        <p>
          A primeira grande expansão paga de Bannerlord, <strong className="text-blue-300">War Sails</strong>,
          anunciada pela TaleWorlds em 2025, fez muito mais do que adicionar combate naval ao jogo: ela trouxe
          oficialmente para Calradia uma cultura inteira que, até então, só existia em
          <em> Mount &amp; Blade: Warband</em> — os <strong className="text-blue-300">Nords</strong>. Esses povos
          nórdicos do litoral norte são marinheiros nascidos, guerreiros de machado de duas mãos e mestres da
          abordagem em alto-mar.
        </p>

        <div className="not-prose my-8 p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-background shadow-lg">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-xs font-bold text-blue-200 uppercase tracking-wider">
              <Anchor className="h-3.5 w-3.5" /> Novidade · War Sails
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Flag className="h-3.5 w-3.5" /> Cultura jogável
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-3 text-blue-200">Identidade dos Nords</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-background/40 border border-blue-500/20">
              <div className="text-xs uppercase tracking-wide text-blue-300 mb-1">Inspiração histórica</div>
              <p className="text-muted-foreground m-0">
                Nórdicos da era Viking, com clara referência a saxões, dinamarqueses e noruegueses da Alta Idade
                Média — incursões marítimas, runas, drakkars e jarls.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/40 border border-blue-500/20">
              <div className="text-xs uppercase tracking-wide text-blue-300 mb-1">Estilo de combate</div>
              <p className="text-muted-foreground m-0">
                Infantaria pesada de escudo redondo, lanças de arremesso (<em>throwing spears</em>), machados de
                duas mãos e a icônica <em>shield wall</em> capaz de aguentar cargas de cavalaria pesada.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/40 border border-blue-500/20">
              <div className="text-xs uppercase tracking-wide text-blue-300 mb-1">Domínio naval</div>
              <p className="text-muted-foreground m-0">
                Únicos com bônus de cultura aplicado a navios: tripulações maiores, velocidade extra em alto-mar e
                desconto na construção de longships e snekkjas.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/40 border border-blue-500/20">
              <div className="text-xs uppercase tracking-wide text-blue-300 mb-1">Bônus passivo</div>
              <p className="text-muted-foreground m-0">
                +1 de moral em batalhas costeiras e a bordo, redução de penalidade por terreno arenoso e bônus de
                relação ao saquear assentamentos litorâneos rivais.
              </p>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mt-6 mb-3 text-blue-200">Árvore de Tropas dos Nords</h3>
          <div className="overflow-x-auto rounded-lg border border-blue-500/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-500/15">
                  <th className="text-left py-2.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-xs">Tier</th>
                  <th className="text-left py-2.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-xs">Tropa</th>
                  <th className="text-left py-2.5 px-3 font-bold text-blue-200 uppercase tracking-wider text-xs">Papel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["T1", "Nord Recruit", "Infantaria leve com lança e escudo redondo"],
                  ["T2", "Nord Footman", "Infantaria de linha, cota de malha curta"],
                  ["T3", "Nord Warrior", "Veterano com machado de uma mão e javelins"],
                  ["T4", "Nord Raider", "Escaramuçador de costa, especialista em abordagem"],
                  ["T6", "Nord Huscarl", "Linha nobre — machado de duas mãos, armadura pesada, shield wall"],
                  ["T6", "Sea Jarl", "Capitão naval de linha nobre — bônus de comando em batalha de navio"],
                ].map(([tier, troop, role]) => (
                  <tr key={troop} className="border-t border-blue-500/15 hover:bg-blue-500/5 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-blue-300">{tier}</td>
                    <td className="py-2.5 px-3 text-foreground font-semibold">{troop}</td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MAPA WAR SAILS — LIGHTBOX */}
        <div className="not-prose my-10">
          <div className="flex flex-col items-center text-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
              <MapIcon className="h-4 w-4" /> Mapa Oficial · War Sails
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">A Costa dos Nords em Calradia</h3>
            <p className="text-muted-foreground max-w-2xl text-sm">
              Os Nords ocupam o litoral norte e as ilhas no mapa da expansão. Clique para ampliar — use os botões
              de zoom ou arraste a imagem para inspecionar cada porto, fortaleza costeira e estandarte.
            </p>
          </div>

          <LightboxImage
            src={bannerlordWarSailsMap}
            alt="Mapa oficial da expansão War Sails de Mount & Blade II: Bannerlord, destacando o litoral norte ocupado pelos Nords, seus portos-fortaleza, ilhas e estandartes culturais"
            caption="Mapa oficial War Sails · Clique para ampliar, arraste para navegar e use +/- para o zoom"
            className="shadow-2xl shadow-blue-500/10"
            width={1991}
            height={1821}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
          />
        </div>

        <p>
          Diferente das outras culturas, os Nords não disputam grandes territórios continentais no mapa-mãe de
          Calradia: o poder deles está no <strong className="text-blue-300">controle dos mares</strong>. Em uma
          campanha de War Sails, vassalos Nords recebem feudos que incluem portos com estaleiros — locais que
          permitem construir, reparar e armar longships e drakkars. Perder o porto significa perder a frota, e isso
          muda completamente a lógica de cerco para essa cultura.
        </p>

        <p>
          A IA Nord também é diferente: clãs comandados por jarls priorizam saques rápidos a vilas costeiras
          rivais (<em>coastal raids</em>) em vez de cercos prolongados, o que cria conflitos diplomáticos
          assimétricos — você pode perder uma vila inteira em uma noite sem nunca ter declarado guerra formal.
          Para o jogador que escolhe Nords, isso significa renda de pilhagem alta, mas reputação flutuante e
          tribunais permanentemente exigindo reparações.
        </p>

        <AdInArticle className="my-8" />



        <h2>
          <Shield className="inline h-7 w-7 mr-2 -mt-1" />
          Pontos Fortes e Fracos
        </h2>
        <p>
          Nenhuma cultura é "melhor" no vácuo: o equilíbrio depende do terreno, da composição inimiga e do seu estilo
          de comando. Esta é a leitura de campo após milhares de horas relatadas pela comunidade do Steam.
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {cultures.map((c) => (
            <div key={c.name} className={`p-5 border rounded-xl ${c.color.replace("/15", "/5")}`}>
              <h3 className={`font-bold mb-3 flex items-center gap-2 ${c.accent}`}>
                <Sword className="h-4 w-4" /> {c.name}
              </h3>
              <p className="text-sm m-0">
                <strong className="text-foreground">Forte:</strong>{" "}
                <span className="text-muted-foreground">{c.strength}</span>
              </p>
              <p className="text-sm m-0 mt-2">
                <strong className="text-foreground">Fraco:</strong>{" "}
                <span className="text-muted-foreground">{c.weakness}</span>
              </p>
            </div>
          ))}
        </div>

        <h2>
          <Coins className="inline h-7 w-7 mr-2 -mt-1" />
          Bônus Passivos e Economia por Cultura
        </h2>
        <p>
          Além das tropas, cada cultura entrega um <strong>bônus passivo</strong> que muda a economia de campanha
          e o modo como você sobe de poder. Esses modificadores são silenciosos no começo, mas viram bola-de-neve
          depois de 50 horas de jogo — especialmente quando você começa a administrar várias cidades.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Cultura</th>
                <th className="text-left py-3 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Bônus Passivo</th>
                <th className="text-left py-3 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Melhor para</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Vlandia", "+20% renda em vilas de mineração", "Roleplay feudal, foco em castelos", "text-rose-300"],
                ["Battania", "Sem penalidade de movimento em florestas", "Guerrilha, emboscadas em terreno fechado", "text-emerald-300"],
                ["Sturgia", "Imunidade parcial a frio, +1 moral no inverno", "Campanhas longas no norte gelado", "text-sky-300"],
                ["Aserai", "+10% relação com clãs de caravana", "Comerciante, mercador-rei", "text-amber-300"],
                ["Khuzait", "+1 velocidade no mapa-mundi com cavalos", "Guerra de manobra, ataques relâmpago", "text-orange-300"],
                ["Império", "+1 lealdade em cidades imperiais", "Reinos centralizados e burocráticos", "text-indigo-300"],
                ["Nords (War Sails)", "+25% velocidade naval, desconto em estaleiros", "Pirataria, controle litorâneo, raids costeiros", "text-blue-300"],
              ].map(([cult, bonus, best, color], i) => (
                <tr key={cult} className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className={`py-3 px-4 font-bold ${color}`}>{cult}</td>
                  <td className="py-3 px-4 text-foreground text-xs">{bonus}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Note que o bônus dos Nords da expansão <strong className="text-blue-300">War Sails</strong> é o único
          que oferece vantagem direta em <strong>combate naval</strong>. Se você pretende investir em frota
          comercial ou militar, escolher Nords na criação do personagem corta dezenas de horas de grind de
          tripulação e construção de navios — porque o bônus de tripulação acelera o recrutamento de remadores em
          vilas costeiras controladas pela facção.
        </p>

        <h2>
          <Mountain className="inline h-7 w-7 mr-2 -mt-1" />
          Tier List: Quem Domina o Late-Game em 2026?
        </h2>
        <p>
          Tier lists em Bannerlord variam por <em>patch</em> e por <em>mod</em>, mas a comunidade competitiva
          (siege-only, batalhas customizadas 200v200 e clãs de PvP) costuma convergir nestas posições para o
          jogo base atualizado e com a expansão War Sails ativa:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {[
            { tier: "S", cult: "Khuzait", reason: "Khan's Guard dominante em campo aberto", color: "border-orange-500/40 bg-orange-500/10", text: "text-orange-300" },
            { tier: "S", cult: "Nords", reason: "Domínio naval absoluto + Huscarls em cerco", color: "border-blue-500/40 bg-blue-500/10", text: "text-blue-300" },
            { tier: "A", cult: "Vlandia", reason: "Banner Knights perdoam erros, cerco forte", color: "border-rose-500/40 bg-rose-500/10", text: "text-rose-300" },
            { tier: "A", cult: "Battania", reason: "Fian Champions são os melhores arqueiros do jogo", color: "border-emerald-500/40 bg-emerald-500/10", text: "text-emerald-300" },
            { tier: "B", cult: "Aserai", reason: "Mamelukes versáteis, mas exigem comando ativo", color: "border-amber-500/40 bg-amber-500/10", text: "text-amber-300" },
            { tier: "B", cult: "Império", reason: "Tropas equilibradas, sem grande pico", color: "border-indigo-500/40 bg-indigo-500/10", text: "text-indigo-300" },
            { tier: "C", cult: "Sturgia", reason: "Boa infantaria, mas frágil contra horse archers", color: "border-sky-500/40 bg-sky-500/10", text: "text-sky-300" },
          ].map((t) => (
            <div key={t.cult} className={`p-4 rounded-xl border ${t.color}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-display font-black text-lg ${t.text} bg-background/60`}>
                  {t.tier}
                </span>
                <span className={`font-bold ${t.text}`}>{t.cult}</span>
              </div>
              <p className="text-xs text-muted-foreground m-0">{t.reason}</p>
            </div>
          ))}
        </div>

        <h2>
          <Users className="inline h-7 w-7 mr-2 -mt-1" />
          Qual Cultura Escolher na Primeira Partida?
        </h2>
        <p>
          A cultura escolhida na criação do personagem define bônus passivos (relações, comércio, movimento) e a
          árvore inicial de tropas que você recruta nas vilas controladas por aquela facção. Algumas recomendações
          práticas para começar:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Iniciante",
              value: "Vlandia",
              note: "Cavalaria pesada perdoa erros táticos",
              box: "bg-rose-500/10 border-rose-500/30",
              text: "text-rose-300",
            },
            {
              label: "Estratégico",
              value: "Império",
              note: "Tropas equilibradas, boa em qualquer batalha",
              box: "bg-indigo-500/10 border-indigo-500/30",
              text: "text-indigo-300",
            },
            {
              label: "Naval (War Sails)",
              value: "Nords",
              note: "Domine os mares, raids costeiros e abordagem",
              box: "bg-blue-500/10 border-blue-500/30",
              text: "text-blue-300",
            },
            {
              label: "Avançado",
              value: "Khuzait",
              note: "Horse archers dominam, mas exigem micro",
              box: "bg-orange-500/10 border-orange-500/30",
              text: "text-orange-300",
            },
          ].map((c) => (
            <div key={c.label} className={`p-5 border rounded-xl text-center ${c.box}`}>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
              <div className={`text-2xl font-display font-bold my-2 ${c.text}`}>{c.value}</div>
              <div className="text-xs text-muted-foreground">{c.note}</div>
            </div>
          ))}
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Como Cada Cultura Reflete Inspirações Históricas Reais</h2>
        <p>
          As oito culturas principais de Bannerlord, antes da adição dos Nords através da expansão War Sails, foram cuidadosamente desenhadas com inspirações históricas reais de diferentes civilizações medievais europeias e do Oriente Médio. O Império, claramente inspirado no Império Bizantino em declínio, oferece tropas versáteis mas sem especialização extrema, refletindo a posição histórica de poder estabelecido mas enfraquecido que serviu de base para a ambientação fictícia de Calradia criada pela TaleWorlds.
        </p>
        <p>
          Vlandia, com forte inspiração em reinos feudais da Europa Ocidental medieval, destaca-se por cavalaria pesada excepcional, enquanto Khuzait, claramente baseado em culturas estepárias como mongóis e outros povos nômades da Ásia Central, oferece a melhor cavalaria leve do jogo com arqueiros montados extremamente eficazes. Essa diversidade cultural bem pesquisada adiciona camada de autenticidade histórica que enriquece significativamente a experiência de jogo além de mera diferenciação mecânica entre facções.
        </p>
    </div>

        <p>
          Vale lembrar que a cultura do personagem é diferente da cultura do reino que você funda ou serve: você
          pode ser um Nord vassalo do Império, por exemplo, e isso gera tensão diplomática deliciosa em
          roleplay — clãs imperiais te enxergam como bárbaro, enquanto os Nords te chamam de traidor. Esse tipo
          de conflito narrativo é parte do charme de Bannerlord em campanha longa.
        </p>

        <h2>
          <MapIcon className="inline h-7 w-7 mr-2 -mt-1" />
          Geografia e Fronteiras
        </h2>
        <p>
          O <strong>Império</strong> ocupa o centro-sul de Calradia, fragmentado entre três facções (Norte, Sul e
          Oeste) em guerra civil. <strong>Vlandia</strong> domina o oeste continental, <strong>Battania</strong> as
          montanhas centrais, <strong>Sturgia</strong> o norte gelado, <strong>Aserai</strong> os desertos do sul e
          <strong> Khuzait</strong> as estepes orientais. Com a expansão <strong className="text-blue-300">
          War Sails</strong>, os <strong className="text-blue-300">Nords</strong> reivindicam o litoral norte e as
          ilhas, criando uma nova frente de conflito que atravessa fronteiras tradicionais por via marítima. As
          fronteiras são fluidas — guerras, casamentos, rebeliões e agora <em>raids</em> costeiros podem
          redesenhar o mapa em uma única campanha.
        </p>

        <p>
          O painel do Bannerlord aqui no VICIO&lt;CODE&gt; vai ter um artigo dedicado ao mapa político de Calradia com
          cidades, castelos e vilas culturais detalhadas — fique atento ao{" "}
          <a href="/geek/bannerlord">painel completo</a>.
        </p>



        <EditorialTake category="geek" title="Análise do Marcos: As Culturas de Bannerlord São o Verdadeiro Coração Estratégico do Jogo">
          <p>
            A graça de Bannerlord é justamente a tensão entre culturas: cada facção tem identidade visual, sonora e
            tática própria. Jogar como Sturgia em terreno aberto contra Khuzait é frustrante; jogar como Khuzait em
            cerco também é. Aprender a explorar as fraquezas inimigas (e esconder as suas) é o que separa o jogador
            casual do veterano de 500 horas.
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
              title: "Mount & Blade Wiki — Culturas",
              url: "https://mountandblade.fandom.com/wiki/Cultures_(Bannerlord)",
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

        <RelatedPosts currentSlug="bannerlord-culturas-reinos-calradia-2026" />

        <CommentSection
          postId="bannerlord-culturas-reinos-calradia-2026"
          postTitle="Bannerlord: Culturas e Reinos de Calradia"
          category="geek"
          inviteTitle="Qual cultura você joga?"
          inviteSubtitle="Vlandia, Khuzait, Aserai... qual reino domina a sua Calradia? Conta nos comentários."
        />

        <div className="not-prose mt-10 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Aviso:</strong> bônus de cultura e composição de tropas podem mudar em patches futuros da
            TaleWorlds e em overhauls como <em>Realistic Battle Mod</em> e <em>BannerKings</em>. Dados confirmados
            até a versão 1.x do jogo base.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BannerlordCulturasReinos;
