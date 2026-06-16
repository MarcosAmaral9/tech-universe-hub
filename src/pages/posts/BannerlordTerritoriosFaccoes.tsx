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
  Castle,
  Flag,
  Ship,
  Mountain,
  Home,
  Sword,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/bannerlord-territorios-faccoes.webp";

import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

type Faction = {
  name: string;
  inspiration: string;
  capital: string;
  color: string;
  accent: string;
  border: string;
  towns: { name: string; note: string }[];
  castles: string[];
  villages: number;
  dlc?: string;
};

const factions: Faction[] = [
  {
    name: "Vlandia",
    inspiration: "França feudal · Normandos",
    capital: "Pravend",
    color: "bg-rose-500/10",
    accent: "text-rose-300",
    border: "border-rose-500/30",
    towns: [
      { name: "Pravend", note: "Capital tradicional, centro político e religioso." },
      { name: "Sargot", note: "Porto atlântico, comércio marítimo com o oeste." },
      { name: "Galend", note: "Cidade de cavalaria pesada e forja." },
      { name: "Jaculan", note: "Cidade-fronteira voltada para a Battania." },
      { name: "Ocs Hall", note: "Centro mineiro e produtor de armas." },
    ],
    castles: ["Hertogea", "Ostican", "Galend Castle", "Pen Cannoc (fronteira)", "Castle Tario", "Charas", "Lageta", "Ortongard"],
    villages: 23,
  },
  {
    name: "Sturgia",
    inspiration: "Vikings · Rus medievais",
    capital: "Tyal",
    color: "bg-sky-500/10",
    accent: "text-sky-300",
    border: "border-sky-500/30",
    towns: [
      { name: "Tyal", note: "Capital às margens do rio gelado, núcleo político." },
      { name: "Revyl", note: "Porto interno, principal centro de comércio." },
      { name: "Balgard", note: "Cidade-fortaleza junto às florestas." },
      { name: "Omor", note: "Cidade pesqueira e portuária." },
      { name: "Varcheg", note: "Posto avançado próximo aos Khuzait." },
    ],
    castles: ["Knudarr", "Krilag", "Sjenndar", "Hrota Castle", "Stronglug", "Lochan", "Mahaar", "Yeruk", "Vyincourd"],
    villages: 22,
  },
  {
    name: "Battania",
    inspiration: "Celtas · Escoceses · Galeses",
    capital: "Marunath",
    color: "bg-emerald-500/10",
    accent: "text-emerald-300",
    border: "border-emerald-500/30",
    towns: [
      { name: "Marunath", note: "Capital fortificada no coração das colinas." },
      { name: "Car Banseth", note: "Cidade do norte, próxima das matas densas." },
      { name: "Pen Cannoc", note: "Disputada com Vlandia, fortaleza-cidade." },
      { name: "Seonon", note: "Cidade fronteiriça com o Império." },
    ],
    castles: ["Dunglanys", "Llanocac", "Castle Usanc", "Maccan Castle", "Tilbaut", "Castle Drapand", "Castle Bavarid", "Pen Cannoc Castle"],
    villages: 19,
  },
  {
    name: "Aserai",
    inspiration: "Árabes · Beduínos",
    capital: "Quyaz",
    color: "bg-amber-500/10",
    accent: "text-amber-300",
    border: "border-amber-500/30",
    towns: [
      { name: "Quyaz", note: "Capital no oásis central, sede dos sultões." },
      { name: "Husn Fulq", note: "Porto do golfo, comércio com o sul." },
      { name: "Sanala", note: "Cidade do litoral leste, rota das especiarias." },
      { name: "Iqbayl", note: "Centro de caravanas e camelos de guerra." },
      { name: "Ab Bayan", note: "Cidade do deserto profundo, riqueza em sal." },
      { name: "Durquba", note: "Cidade interna do sertão árido." },
      { name: "Razih", note: "Posto comercial nas rotas do oeste." },
    ],
    castles: ["Sharwa Castle", "Cinjeq", "Asuga Castle", "Tubasi", "Onica", "Ergil", "Castle Mecalovea", "Yuruncuk"],
    villages: 28,
  },
  {
    name: "Khuzait",
    inspiration: "Mongóis · Estepes",
    capital: "Makeb",
    color: "bg-orange-500/10",
    accent: "text-orange-300",
    border: "border-orange-500/30",
    towns: [
      { name: "Makeb", note: "Capital itinerante, sede do Khan dos khans." },
      { name: "Baltakhand", note: "Mercado estepe, fluxo intenso de cavalos." },
      { name: "Ichamur", note: "Cidade portuária no extremo leste." },
      { name: "Chaikand", note: "Posto fronteiriço com o Império." },
      { name: "Odokh", note: "Centro religioso e cultural da estepe." },
    ],
    castles: ["Dunaists", "Yiraban", "Sanguz Castle", "Saneopa Castle", "Castle Vostrum", "Castle Tuv", "Castle Margra"],
    villages: 22,
  },
  {
    name: "Empire (Norte)",
    inspiration: "Bizâncio Oriental",
    capital: "Epicrotea",
    color: "bg-indigo-500/10",
    accent: "text-indigo-300",
    border: "border-indigo-500/30",
    towns: [
      { name: "Epicrotea", note: "Capital do norte imperial, fortaleza nas montanhas." },
      { name: "Diathma", note: "Porto fluvial do norte, controlando o comércio." },
      { name: "Hubyar", note: "Cidade-fronteira, militarizada contra Khuzait." },
      { name: "Pravend (disputada)", note: "Frequentemente disputada com Vlandia." },
    ],
    castles: ["Mecalovea Castle", "Castle Vostrum", "Castle Charas", "Castle Tubasi", "Castle Onica", "Castle Ergil"],
    villages: 18,
  },
  {
    name: "Empire (Sul)",
    inspiration: "Bizâncio Meridional",
    capital: "Lycaron",
    color: "bg-violet-500/10",
    accent: "text-violet-300",
    border: "border-violet-500/30",
    towns: [
      { name: "Lycaron", note: "Capital do sul, joia administrativa do Império." },
      { name: "Pen Cannoc (disputada)", note: "Fronteira instável com Battania." },
      { name: "Argoron", note: "Centro religioso e de banhos imperiais." },
      { name: "Phycaon", note: "Porto do sul, ligação com Aserai e ilhas." },
      { name: "Zeonica", note: "Cidade de mercados e mineração." },
    ],
    castles: ["Castle Lageta", "Castle Charas", "Castle Mecalovea", "Castle Tubasi", "Castle Asuga", "Castle Margra"],
    villages: 20,
  },
  {
    name: "Empire (Oeste)",
    inspiration: "Bizâncio Ocidental · Republicano",
    capital: "Jalmarys",
    color: "bg-fuchsia-500/10",
    accent: "text-fuchsia-300",
    border: "border-fuchsia-500/30",
    towns: [
      { name: "Jalmarys", note: "Capital comercial, sede do senado ocidental." },
      { name: "Ortysia", note: "Cidade-banho, refúgio aristocrático." },
      { name: "Amitatys", note: "Porto principal do oeste imperial." },
      { name: "Charas", note: "Disputada com Vlandia e nortes." },
    ],
    castles: ["Castle Lageta", "Castle Ostican", "Castle Tilbaut", "Castle Onica", "Castle Tubasi", "Castle Mecalovea"],
    villages: 16,
  },
  {
    name: "Nords",
    inspiration: "Nórdicos · Vikings de mar aberto",
    capital: "Wercheg",
    color: "bg-blue-500/10",
    accent: "text-blue-300",
    border: "border-blue-500/30",
    dlc: "War Sails",
    towns: [
      { name: "Wercheg", note: "Capital portuária, sede do Sea Jarl." },
      { name: "Sibir", note: "Cidade-fortaleza do extremo norte, abrigo de inverno." },
      { name: "Varnovapol", note: "Centro de construção naval e estaleiros." },
    ],
    castles: ["Frostmark Hold", "Sea Jarl Keep", "Drakkarheim", "Vinterborg", "Stormvik"],
    villages: 12,
  },
];

const BannerlordTerritoriosFaccoes = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-territorios-faccoes-calradia-2026",
      "Bannerlord: Territórios das Facções — Cidades e Castelos das 9 Culturas",
      "geek",
    );
  }, []);

  const totals = factions.reduce(
    (acc, f) => ({
      towns: acc.towns + f.towns.length,
      castles: acc.castles + f.castles.length,
      villages: acc.villages + f.villages,
    }),
    { towns: 0, castles: 0, villages: 0 },
  );

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/bannerlord" portalLabel="Painel Bannerlord" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
            Bannerlord · Territórios
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord: Territórios das Facções — Cidades e Castelos das 9 Culturas
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />16 de Junho, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="16 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={heroImg}
          alt="Territórios das nove facções de Calradia em Mount & Blade II: Bannerlord"
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
          Em <strong>Mount &amp; Blade II: Bannerlord</strong>, dominar <strong>Calradia</strong> não é apenas
          questão de exércitos: é entender a malha de cidades, castelos e vilas que sustenta cada cultura. As{" "}
          <strong>9 facções</strong> — 8 do jogo base e os <strong className="text-blue-300">Nords</strong>{" "}
          introduzidos pela expansão <strong className="text-blue-300">War Sails</strong> — possuem padrões
          geográficos próprios: o Império é o que tem o maior número de cidades pequenas dispersas, os Aserai
          concentram comércio em poucos centros gigantes no deserto, os Khuzait priorizam vilas-acampamento sobre
          fortalezas de pedra, e os Nords abrem mão de quantidade em troca de portos blindados que controlam o
          litoral norte. Este guia é o mapa narrado de quem manda no quê em Calradia em 2026, sem entrar em
          spoilers de campanha e mantendo apenas os dados visíveis no mapa do jogo.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Flag className="h-5 w-5" /> Resumo das 9 Facções
          </h2>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {[
              ["Cidades", String(totals.towns)],
              ["Castelos", String(totals.castles)],
              ["Vilas", `${totals.villages}+`],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50 text-center">
                <div className="text-2xl font-display font-bold text-amber-400">{v}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wide mt-1">{k}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Os números somam o jogo base mais a expansão <strong className="text-blue-300">War Sails</strong>.
            Cidades disputadas (como Pen Cannoc e Charas) aparecem na facção que historicamente as fundou no lore
            oficial — no jogo, sua propriedade muda conforme as guerras da campanha.
          </p>
        </div>

        <h2><Crown className="inline h-7 w-7 mr-2 -mt-1" />Como Funciona a Hierarquia de Assentamentos</h2>
        <p>
          Antes de visitar facção por facção, vale entender a lógica administrativa que a TaleWorlds desenhou. Em
          Calradia existem três níveis de assentamento: <strong>cidades</strong> (towns), <strong>castelos</strong>{" "}
          (castles) e <strong>vilas</strong> (villages). Cidades são os centros econômicos — possuem mercado,
          oficinas, prisão, arena e geram a maior parte da renda de um clã. Castelos são pontos militares: têm
          guarnição, prisão, geram tropas de elite mais facilmente e funcionam como nós defensivos entre cidades.
          Vilas são produtoras — fornecem grãos, gado, ferro, cavalos, peles, peixe e madeira para a cidade ou
          castelo a que estão ligadas, além de servirem como fonte primária de recrutas T1 da cultura local.
        </p>
        <p>
          Cada cidade controla em média de 3 a 5 vilas; cada castelo, de 2 a 3. Quando você conquista uma cidade,
          herda também essas vilas — e por isso a malha de assentamentos importa tanto: tomar Sargot, por exemplo,
          significa cortar o oeste vlandiano do mar. Tomar Quyaz quebra a sucessão tribal aserai. Tomar Tyal isola
          o coração da Sturgia. Este guia foca apenas nas cidades e castelos das 9 culturas — para as vilas, basta
          saber a contagem total, já que cada uma orbita um assentamento maior.
        </p>

        <AdInArticle className="my-8" />

        {factions.map((f) => (
          <section key={f.name} className={`not-prose my-10 p-6 rounded-2xl border ${f.border} ${f.color}`}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className={`font-display text-2xl font-bold ${f.accent} m-0`}>{f.name}</h3>
              <span className="text-xs px-2.5 py-1 rounded-full border border-border/60 bg-background/40 text-muted-foreground">
                {f.inspiration}
              </span>
              {f.dlc && (
                <span className="text-xs px-2.5 py-1 rounded-full border border-blue-500/40 bg-blue-500/15 text-blue-200 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Ship className="h-3 w-3" /> {f.dlc}
                </span>
              )}
              <span className="text-xs px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-center gap-1">
                <Crown className="h-3 w-3" /> Capital: {f.capital}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-lg bg-background/40 border border-border/50 text-center">
                <Home className="h-4 w-4 mx-auto mb-1 text-amber-400" />
                <div className="text-2xl font-display font-bold text-amber-300">{f.towns.length}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Cidades</div>
              </div>
              <div className="p-3 rounded-lg bg-background/40 border border-border/50 text-center">
                <Castle className="h-4 w-4 mx-auto mb-1 text-amber-400" />
                <div className="text-2xl font-display font-bold text-amber-300">{f.castles.length}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Castelos</div>
              </div>
              <div className="p-3 rounded-lg bg-background/40 border border-border/50 text-center">
                <Mountain className="h-4 w-4 mx-auto mb-1 text-amber-400" />
                <div className="text-2xl font-display font-bold text-amber-300">{f.villages}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Vilas</div>
              </div>
            </div>

            <h4 className={`font-bold text-sm uppercase tracking-wider mb-2 ${f.accent}`}>Principais Cidades</h4>
            <ul className="space-y-1.5 mb-4">
              {f.towns.map((t) => (
                <li key={t.name} className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t.name}</strong> — {t.note}
                </li>
              ))}
            </ul>

            <h4 className={`font-bold text-sm uppercase tracking-wider mb-2 ${f.accent}`}>Principais Castelos</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.castles.join(" · ")}</p>
          </section>
        ))}

        <AdInArticle className="my-8" />

        <h2><Sword className="inline h-7 w-7 mr-2 -mt-1" />Leitura Estratégica: Quem Domina o Quê</h2>
        <p>
          Olhando para o conjunto, dá para tirar conclusões diretas sobre a geopolítica de Calradia em 2026.{" "}
          <strong className="text-amber-300">Vlandia</strong> tem o segundo maior número de castelos do oeste,
          fruto da sua tradição feudal — cada barão constrói o próprio. É a facção mais defensiva contra invasões
          terrestres, mas perde rápido se Sargot ou Pravend caem, porque o resto da economia colapsa em sequência.{" "}
          <strong className="text-emerald-300">Battania</strong> aposta na densidade: tem menos cidades, mas
          posiciona seus castelos em colinas e desfiladeiros, transformando cada cerco em pesadelo logístico — é a
          facção mais difícil de mapear porque depende de saber qual castelo controla qual passagem.
        </p>
        <p>
          <strong className="text-sky-300">Sturgia</strong> tem a maior proporção castelo/cidade de todo jogo
          base, reflexo da geografia de florestas profundas: para defender Tyal e Revyl, precisa de uma rede de
          fortalezas espalhadas. É forte de inverno (inimigos perdem tropas no frio), fraca em verão.{" "}
          <strong className="text-amber-300">Aserai</strong> faz o oposto: poucos castelos, cidades enormes e ricas
          como Quyaz, Husn Fulq e Sanala. Concentra tudo em centros de oásis porque o deserto faz a defesa por
          conta própria — quem cerca uma cidade aserai sem caravana de suprimentos costuma desistir antes do
          assalto.
        </p>
        <p>
          <strong className="text-orange-300">Khuzait</strong> tem a menor proporção castelo/vila do jogo: o
          império da estepe vive em movimento. Makeb, Baltakhand e as demais cidades funcionam como mercados
          permanentes, mas a defesa real está nas hordas de horse archers que cobrem distâncias enormes em poucos
          dias. Os três <strong className="text-indigo-300">Impérios</strong> — Norte, Sul e Oeste — somados
          formam o maior bloco urbano de Calradia, com 13 cidades imperiais e mais de uma dúzia de castelos
          herdados da época de Calradia unificada. É também o bloco mais instável: sucessões disputadas,
          fronteiras móveis e fortalezas frequentemente trocando de dono entre os três fragmentos.
        </p>
        <p>
          E então há os <strong className="text-blue-300">Nords</strong>, a 9ª cultura adicionada pela expansão{" "}
          <strong className="text-blue-300">War Sails</strong> em 2025. Eles começam com poucas cidades — Wercheg,
          Sibir e Varnovapol — mas todas costeiras e blindadas para abordagem naval. A força nord não está no
          número de assentamentos terrestres e sim no controle do <em>mar do norte</em>: cada cidade nord tem
          estaleiro, e cada castelo (Frostmark Hold, Drakkarheim, Vinterborg) funciona como ponto de partida para
          frotas de drakkars que podem desembarcar exércitos atrás das linhas inimigas — uma mecânica única que
          quebra as regras antigas de logística de Calradia.
        </p>

        <h2><Castle className="inline h-7 w-7 mr-2 -mt-1" />Cidades e Castelos Disputados</h2>
        <p>
          Algumas localidades aparecem em mais de uma facção neste guia, e isso é intencional. <strong>Pen Cannoc</strong>{" "}
          é o exemplo mais famoso: pertence ao Battania por lore, mas é tomada pelos Vlandianos com tanta
          frequência em campanhas que a comunidade já a trata como cidade compartilhada. <strong>Charas</strong> é
          alvo permanente entre Vlandia, Império Oeste e Império Norte — quem segura Charas controla o eixo central
          do mapa. <strong>Sargot</strong> e <strong>Amitatys</strong> são os portos mais cobiçados do oeste, e
          quem perde os dois fica sem saída marítima decente. Já <strong>Phycaon</strong> e <strong>Husn Fulq</strong>{" "}
          decidem o comércio sul-norte: trocaram de dono em mais de 40% das campanhas registradas pelos jogadores
          em pesquisa da TaleWorlds em 2023.
        </p>
        <p>
          Para o jogador, a lição prática é simples: não basta acumular cidades — é preciso acumular cidades que
          se sustentam entre si. Tomar Pravend sem Sargot deixa Vlandia sem porto. Tomar Lycaron sem Argoron deixa
          o Império Sul sem produção de comida suficiente para os arsenais. Tomar Wercheg sem Sibir deixa os Nords
          sem inverno seguro. O mapa de Calradia premia conquistas em cadeia, não em arquipélago — e é por isso
          que esse guia listou as cidades por <em>função</em>, não só por nome.
        </p>

        <EditorialTake
          author="VICIO<CODE>"
          category="geek"
          quote="O segredo de Calradia não está em quantas cidades cada facção tem, mas em como elas se conectam. Os Nords provaram com War Sails que três portos bem posicionados valem mais que oito castelos isolados — e isso reescreveu a estratégia do meta competitivo de 2026."
        />

        <ArticleSources
          sources={[
            { title: "Mount & Blade Wiki — Settlements", url: "https://mountandblade.fandom.com/wiki/Settlements_(Bannerlord)", publisher: "Fandom" },
            { title: "TaleWorlds — War Sails Expansion", url: "https://www.taleworlds.com/", publisher: "TaleWorlds Entertainment" },
            { title: "Steam — Mount & Blade II: Bannerlord", url: "https://store.steampowered.com/app/261550/", publisher: "Valve / Steam" },
          ]}
        />
      </div>

      <RelatedPosts currentPostId="bannerlord-5" category="geek" />

      <div className="max-w-4xl mx-auto mt-12">
        <CommentSection
          postId="bannerlord-territorios-faccoes-calradia-2026"
          postTitle="Bannerlord: Territórios das Facções"
          category="geek"
        />
      </div>
    </article>
  );
};

export default BannerlordTerritoriosFaccoes;
