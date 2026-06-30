import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock,
  User,
  Calendar,
  Ship,
  Anchor,
  Compass,
  Waves,
  Sword,
  Shield,
  Crown,
  AlertTriangle,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/bannerlord-war-sails-expansao.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const featureCards = [
  {
    icon: Ship,
    title: "Combate Naval",
    desc: "Drakkars, knarrs e galeras manobráveis em alto-mar, com arpões, abordagem corpo a corpo e fogo grego.",
  },
  {
    icon: Compass,
    title: "Novas Rotas",
    desc: "Mar do Norte, ilhas do estreito de Sibir e arquipélagos costeiros antes inacessíveis no jogo base.",
  },
  {
    icon: Crown,
    title: "9ª Cultura",
    desc: "Os Nords entram como facção jogável completa, com 3 cidades portuárias, 5 castelos e árvore de tropas própria.",
  },
  {
    icon: Anchor,
    title: "Estaleiros",
    desc: "Cidades costeiras ganham construção de frota, manutenção de tripulação e produção naval como economia paralela.",
  },
];

const combatPhases = [
  { phase: "1. Aproximação", range: "200–600 m", duration: "3–6 min", focus: "Vento, vela e arcos", risk: "Baixo" },
  { phase: "2. Média distância", range: "40–200 m", duration: "2–4 min", focus: "Arpões, fogo grego, ramming", risk: "Médio" },
  { phase: "3. Abordagem", range: "0–10 m", duration: "5–12 min", focus: "Corpo a corpo no convés", risk: "Alto" },
];

const economyImpact = [
  { route: "Pravend → Wercheg", landDays: 25, seaDays: 10, mainGood: "Tecido / Âmbar", risk: "Médio" },
  { route: "Sargot → Husn Fulq", landDays: 32, seaDays: 14, mainGood: "Sal / Especiarias", risk: "Alto" },
  { route: "Wercheg → Tyal", landDays: 12, seaDays: 6, mainGood: "Peixe / Peles", risk: "Baixo" },
  { route: "Phycaon → Lycaron", landDays: 18, seaDays: 8, mainGood: "Azeite / Vinho", risk: "Baixo" },
  { route: "Sibir → Varnovapol", landDays: 9, seaDays: 4, mainGood: "Madeira / Ferro", risk: "Médio" },
];

const cultureImpact = [
  { culture: "Nords", impact: "Estreia como cultura", power: "↑↑↑", note: "Domínio do mar do norte e saques costeiros." },
  { culture: "Sturgia", impact: "Perde monopólio nórdico", power: "↓↓", note: "Fronteira direta com os Nords, conflito padrão." },
  { culture: "Vlandia", impact: "Rotas atacadas", power: "↓", note: "Karves defendem mal contra drakkars." },
  { culture: "Impérios", impact: "Ganham galera pesada", power: "↑", note: "Phycaon e Amitatys viram bases navais." },
  { culture: "Aserai", impact: "Monopólio do fogo grego", power: "↑↑", note: "Exporta dromons como mercadoria de elite." },
  { culture: "Khuzait", impact: "Pequeno ganho comercial", power: "→", note: "Ichamur exporta cavalos por mar." },
  { culture: "Battania", impact: "Praticamente intacta", power: "→", note: "Sem litoral, só sente reflexo de preços." },
];

const shipTypes = [
  {
    name: "Drakkar (Longship)",
    role: "Ataque rápido",
    crew: "40-60",
    notes: "Carro-chefe nord: rápido, baixo calado, atravessa rios. Letal em abordagens, frágil contra arpões pesados.",
  },
  {
    name: "Knarr",
    role: "Carga / Tropa",
    crew: "20-30",
    notes: "Transporte de mercadorias e tropas terrestres. Não luta bem, mas é a única forma barata de mover exército por mar.",
  },
  {
    name: "Galera Imperial",
    role: "Linha pesada",
    crew: "80-120",
    notes: "Resposta dos Impérios à ameaça nord. Lenta, blindada, com torre de arqueiros e duas fileiras de remos.",
  },
  {
    name: "Karve",
    role: "Patrulha",
    crew: "25-40",
    notes: "Embarcação intermediária dos Sturgianos e Vlandianos. Bom equilíbrio entre velocidade e capacidade de combate.",
  },
  {
    name: "Dromon Aserai",
    role: "Fogo grego",
    crew: "60-90",
    notes: "Único navio com sifão de fogo grego — incendeia drakkars inteiros, mas é vulnerável a clima frio do norte.",
  },
];

const BannerlordWarSailsExpansao = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-war-sails-expansao-2026",
      "Bannerlord War Sails: Guia Completo da Expansão Naval de Calradia",
      "geek",
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/bannerlord" portalLabel="Painel Bannerlord" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium flex items-center gap-1.5">
            <Ship className="h-3.5 w-3.5" /> War Sails · Expansão
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Bannerlord War Sails: Guia Completo da Expansão Naval de Calradia
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />20 de Junho, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="20 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={heroImg}
          alt="Frota de drakkars Nords navegando em mar gelado em Bannerlord War Sails"
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
        prose-h2:pb-2 prose-h2:border-b prose-h2:border-blue-500/30
        prose-h2:text-blue-300
        prose-h3:text-xl prose-h3:font-bold prose-h3:text-blue-200 prose-h3:mt-6 prose-h3:mb-2
        prose-strong:text-foreground
        prose-a:text-blue-300"
      >
        <p className="lead text-xl text-muted-foreground">
          <strong>War Sails</strong> é a primeira grande expansão de <strong>Mount &amp; Blade II: Bannerlord</strong>,
          anunciada pela TaleWorlds Entertainment em 2025 e voltada inteiramente para o que faltava no jogo base:{" "}
          <strong className="text-blue-300">combate naval, costas jogáveis e uma nova cultura marítima</strong>. Com a
          chegada da expansão, Calradia deixou de ser um continente puramente terrestre — o mar do norte virou um teatro
          de guerra próprio, com drakkars, abordagens, fogo grego e estaleiros que reescrevem a economia das cidades
          portuárias. Este guia explica em detalhes o que a expansão entrega, como ela muda a campanha, quais culturas
          ganharam mais e por que os <strong className="text-blue-300">Nords</strong> se tornaram a 9ª facção oficial do
          jogo. Tudo baseado em material oficial da TaleWorlds, sem spoilers de campanha.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-background rounded-xl border border-blue-500/30">
          <AdLeaderboard className="my-6" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
            <Waves className="h-5 w-5" /> O que War Sails muda em Calradia
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {featureCards.map((f) => (
              <div key={f.title} className="p-4 bg-background/40 rounded-lg border border-border/50">
                <f.icon className="h-5 w-5 text-blue-300 mb-2" />
                <div className="font-bold text-sm text-blue-200 mb-1">{f.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <h2><Ship className="inline h-7 w-7 mr-2 -mt-1" />O Contexto: Por Que Bannerlord Precisava de Mar</h2>
        <p>
          Desde o lançamento em early access em 2020, uma das críticas mais consistentes a Bannerlord era a ausência
          de combate naval. O mapa de Calradia tinha costas, portos e rios, mas as embarcações eram puramente
          decorativas — você atravessava o mar como uma silhueta animada na tela mundial, sem batalhas, sem
          abordagens, sem rotas marítimas reais. Em <em>Mount &amp; Blade: Warband</em>, jogo anterior da
          TaleWorlds, o vácuo era preenchido pelo mod <strong>Viking Conquest</strong>, oficial e pago, que provou
          que o sistema medieval do estúdio funcionava no mar. <strong>War Sails</strong> é, em muitos sentidos, a
          resposta oficial a essa demanda — só que feita do zero, integrada à campanha principal e com profundidade
          que o mod jamais teve.
        </p>
        <p>
          A expansão chegou cinco anos depois do lançamento e quase três anos depois da versão 1.0, em um momento
          em que a base de jogadores ativos do título estava em queda. O resultado foi imediato: segundo dados
          públicos do SteamDB, o pico de jogadores simultâneos saltou para perto dos números de lançamento na
          semana de estreia da expansão, e o título voltou ao top 50 mais jogados do Steam. Mais importante que o
          pico: a curva de retenção mudou de patamar. Jogadores antigos voltaram para experimentar a nova cultura,
          e novos jogadores compraram o pacote completo (jogo base + expansão) por causa do hype em torno das
          batalhas navais. <strong>War Sails</strong> não foi um DLC cosmético — foi o reposicionamento estratégico
          do jogo.
        </p>

        <AdInArticle className="my-8" />

        <h2><Crown className="inline h-7 w-7 mr-2 -mt-1" />Os Nords: A 9ª Cultura de Calradia</h2>
        <p>
          A maior adição da expansão é a entrada dos <strong className="text-blue-300">Nords</strong> como facção
          jogável completa. Inspirados nos vikings históricos e nos povos nórdicos das sagas escandinavas, os Nords
          ocupam a costa norte de Calradia — uma região que, no jogo base, era basicamente terreno gelado e vazio.
          A TaleWorlds redesenhou todo o setor setentrional do mapa para acomodar a nova cultura: três cidades
          portuárias (<strong>Wercheg</strong>, <strong>Sibir</strong> e <strong>Varnovapol</strong>), cinco
          castelos costeiros e cerca de doze vilas pesqueiras espalhadas pelo litoral e pelas ilhas do estreito.
        </p>
        <p>
          A árvore de tropas dos Nords foi desenhada para combinar com o estilo agressivo de mar e desembarque. A
          linha principal vai do <strong>Nord Footman</strong> (T2) ao <strong>Nord Huscarl</strong> (T6, escudo
          redondo, machado dinamarquês e armadura pesada), considerado por boa parte da comunidade a melhor
          infantaria pesada do jogo. Há ainda os <strong>Nord Berserkers</strong>, choque puro sem escudo, e os{" "}
          <strong>Sea Raiders</strong>, tropa de abordagem rápida com lança curta e machados de arremesso. Em vez
          de cavalaria pesada, os Nords investem em arqueiros costeiros e em uma classe nova: os{" "}
          <strong>Skald Captains</strong>, capitães que dão bônus de moral à tripulação a bordo e funcionam como
          líderes naturais de frota.
        </p>
        <p>
          A política interna dos Nords também é diferente. Em vez do tradicional sistema de reinos com um único
          rei, eles operam sob a figura do <strong>Sea Jarl</strong> — um conselho de jarls navais que elege o
          líder a cada estação. Isso afeta diplomacia: alianças com os Nords são mais voláteis, mudam mais rápido,
          e a chance de uma guerra civil interna durante a campanha é mais alta. Para o jogador que cria seu próprio
          clã dentro da cultura nord, isso significa mais oportunidades de ascensão rápida — e também mais risco de
          ser deposto.
        </p>

        <h2><Waves className="inline h-7 w-7 mr-2 -mt-1" />Combate Naval: Como Funciona</h2>
        <p>
          O combate naval em <strong>War Sails</strong> não é abstrato. Quando duas frotas se encontram no mapa do
          mundo, o jogo carrega uma cena 3D em alto-mar, com cada navio modelado individualmente, posições de
          tripulação, vela, leme e armas de bordo. Você comanda diretamente seu navio principal e dá ordens de
          formação para os demais — em coluna, em linha, em cunha ou em cerco. A IA inimiga reage à formação,
          tenta manobrar para pegar o vento e procura a oportunidade de abordagem.
        </p>
        <p>
          Os combates seguem três fases. A primeira é de aproximação: vela aberta, ajuste de rota, troca de
          projéteis a longa distância (arpões, balestras montadas, arcos). A segunda é a ofensiva à média
          distância: arpões pesados que prendem dois cascos, fogo grego (exclusivo dos Aserai), tentativas de
          ramming pelos drakkars. A terceira é a abordagem — quando os cascos se tocam, a câmera muda para
          terceira pessoa e a luta vira combate corpo a corpo no convés, com mecânicas idênticas às batalhas
          terrestres. Vencer um navio inimigo significa capturá-lo, libertá-lo ou afundá-lo, com consequências
          diferentes para reputação, butim e influência política.
        </p>

        <div className="not-prose overflow-x-auto my-6 rounded-xl border border-blue-500/30">
          <table className="w-full border-collapse bg-card text-sm">
            <thead className="bg-blue-500/15">
              <tr>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Fase</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Distância</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Duração média</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Foco tático</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Risco de baixas</th>
              </tr>
            </thead>
            <tbody>
              {combatPhases.map((p, i) => (
                <tr key={p.phase} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold text-foreground">{p.phase}</td>
                  <td className="py-3 px-4 text-muted-foreground">{p.range}</td>
                  <td className="py-3 px-4 text-muted-foreground">{p.duration}</td>
                  <td className="py-3 px-4 text-muted-foreground">{p.focus}</td>
                  <td className="py-3 px-4 text-muted-foreground">{p.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Existem cinco tipos principais de embarcação na expansão, cada um com função tática própria:
        </p>

        <div className="not-prose overflow-x-auto my-6 rounded-xl border border-blue-500/30">
          <table className="w-full border-collapse bg-card text-sm">
            <thead className="bg-blue-500/15">
              <tr>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Navio</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Papel</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Tripulação</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Notas</th>
              </tr>
            </thead>
            <tbody>
              {shipTypes.map((s, i) => (
                <tr key={s.name} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold text-foreground">{s.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{s.role}</td>
                  <td className="py-3 px-4 text-muted-foreground">{s.crew}</td>
                  <td className="py-3 px-4 text-muted-foreground">{s.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O detalhe interessante é que cada cultura constrói só os tipos que combinam com sua tradição: Nords
          fabricam drakkars e knarrs; Vlandianos e Sturgianos, karves; os Impérios constroem galeras pesadas; os
          Aserai monopolizam o dromon com fogo grego. Isso cria uma assimetria estratégica — quem domina o mar do
          norte (Nords) não tem como replicar a tecnologia do sul, e vice-versa. Frotas mistas, formadas por
          alianças, virtualmente sempre vencem confrontos contra uma única cultura.
        </p>

        <AdInArticle className="my-8" />

        <h2><Anchor className="inline h-7 w-7 mr-2 -mt-1" />Economia Naval: Estaleiros, Tripulação e Comércio</h2>
        <p>
          <strong>War Sails</strong> adiciona uma camada econômica nova às cidades costeiras. Toda cidade com saída
          para o mar pode construir um <strong>estaleiro</strong>, edifício que funciona em paralelo à oficina
          tradicional. O estaleiro produz embarcações em ciclos longos (de 30 a 90 dias de campanha, dependendo do
          tipo de navio), consome madeira, ferro e tecido, e exige um mestre construtor contratado entre os
          companheiros do clã ou recrutado em portos específicos. O retorno é alto: uma frota de seis drakkars
          renderiza mais ouro com saques e rotas marítimas do que uma cidade média imperial em renda fixa.
        </p>
        <p>
          A tripulação também virou recurso. Antes, marinheiros eram silhuetas; agora, cada navio tem capacidade
          mínima e máxima de tripulação, salários semanais, moral e nível de experiência. Tripulação experiente
          carrega bônus a manobra, velocidade e taxa de acerto de arpões. Tripulação fraca tropeça em manobras
          básicas e morre rápido em abordagens. Isso transformou a profissão de capitão pirata em algo viável
          dentro do sandbox: dá para passar dezenas de horas só assaltando rotas comerciais entre Sargot, Wercheg
          e Husn Fulq, sem nunca participar de uma guerra terrestre.
        </p>
        <p>
          As <strong>rotas marítimas</strong> também redesenharam o comércio. Mercadorias que antes viajavam por
          terra entre Pravend e Wercheg em 25 dias agora viajam por mar em 10 — com risco de pirataria. Os preços
          se reorganizaram: peixe e âmbar do norte ficaram baratos no sul, especiarias aserai ficaram mais caras
          no norte por causa do imposto de passagem nord. Quem joga focado em comércio precisou redesenhar a
          estratégia inteira.
        </p>

        <div className="not-prose overflow-x-auto my-6 rounded-xl border border-blue-500/30">
          <table className="w-full border-collapse bg-card text-sm">
            <thead className="bg-blue-500/15">
              <tr>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Rota</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Por terra</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Por mar</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Mercadoria principal</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Risco de pirataria</th>
              </tr>
            </thead>
            <tbody>
              {economyImpact.map((r, i) => (
                <tr key={r.route} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold text-foreground">{r.route}</td>
                  <td className="py-3 px-4 text-muted-foreground">{r.landDays} dias</td>
                  <td className="py-3 px-4 text-muted-foreground">{r.seaDays} dias</td>
                  <td className="py-3 px-4 text-muted-foreground">{r.mainGood}</td>
                  <td className="py-3 px-4 text-muted-foreground">{r.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2><Shield className="inline h-7 w-7 mr-2 -mt-1" />Impacto na Campanha e nas Outras Culturas</h2>
        <p>
          A chegada dos Nords mexeu com o equilíbrio diplomático de Calradia. Os <strong>Sturgianos</strong> são os
          mais afetados: dividem fronteira terrestre com os Nords e perdem o monopólio cultural de povo nórdico
          que tinham no jogo base. As primeiras semanas de campanha pós-expansão costumam ter guerra
          Sturgia-Nords como evento padrão. Os <strong>três Impérios</strong> ganharam acesso à galera pesada e
          passaram a patrulhar a costa sul com mais força — Phycaon e Amitatys viraram bases navais de fato.{" "}
          <strong>Vlandia</strong> teve menos impacto direto, mas perdeu rotas comerciais para os piratas nord no
          mar ocidental.
        </p>
        <p>
          <strong>Battania</strong>, sem litoral, foi a única facção praticamente intacta. Os{" "}
          <strong>Khuzait</strong>, que só tocam o mar em Ichamur, ganharam um porto secundário e começaram a
          exportar cavalos por via marítima — uma mudança pequena no papel, mas que aumenta o tráfego de knarrs no
          leste. <strong>Aserai</strong> foi quem mais lucrou economicamente: o dromon com fogo grego virou
          mercadoria de exportação, e o sul ganhou supremacia naval defensiva.
        </p>

        <div className="not-prose overflow-x-auto my-6 rounded-xl border border-blue-500/30">
          <table className="w-full border-collapse bg-card text-sm">
            <thead className="bg-blue-500/15">
              <tr>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Cultura</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Impacto da expansão</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Tendência de poder</th>
                <th className="text-left py-3 px-4 font-bold text-blue-200 uppercase tracking-wider text-xs">Observação</th>
              </tr>
            </thead>
            <tbody>
              {cultureImpact.map((c, i) => (
                <tr key={c.culture} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold text-foreground">{c.culture}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c.impact}</td>
                  <td className="py-3 px-4 font-bold text-blue-200">{c.power}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2><AlertTriangle className="inline h-7 w-7 mr-2 -mt-1" />O Que Não Mudou (E o Que Ainda Falta)</h2>
        <p>
          Apesar do tamanho, <strong>War Sails</strong> não é uma reinvenção total. O sistema de cerco terrestre,
          a IA de batalha em campo, as árvores de tropas antigas e a campanha principal (Dragon Banner) seguem
          praticamente iguais ao jogo base. A expansão é aditiva, não substitutiva — quem nunca jogou Bannerlord
          ainda começa pela mesma intro, com as mesmas opções, e só encontra War Sails quando chega ao mar pela
          primeira vez ou cria um personagem nord. Isso é deliberado e respeita quem já investiu centenas de
          horas no jogo base.
        </p>
        <p>
          O que falta? A comunidade aponta três pendências: ausência de combate fluvial (rios são tratados como
          terra firme), falta de cercos a cidades portuárias pela via marítima (você desembarca, mas o cerco vira
          terrestre) e a árvore de tropas dos Nords ainda sem variante de cavalaria — fragilidade que obriga a
          alianças. A TaleWorlds reconheceu publicamente os dois primeiros pontos e prometeu patches; o terceiro é
          design intencional para manter a assimetria entre culturas.
        </p>

        <h2><Sword className="inline h-7 w-7 mr-2 -mt-1" />Vale a Pena Comprar?</h2>
        <p>
          Para quem nunca jogou Bannerlord, o pacote base + War Sails é o melhor ponto de entrada que o jogo já
          teve em seis anos de história. Você começa no jogo mais completo, mais polido e mais variado da
          franquia. Para quem já jogou centenas de horas no jogo base, a resposta é menos óbvia — depende de quanto
          a ausência de mar te incomodava. Se a resposta for &quot;muito&quot;, a expansão entrega o que faltava
          com qualidade. Se a resposta for &quot;pouco&quot;, ela ainda assim adiciona uma cultura inteira, novas
          tropas, novas cidades e uma camada econômica nova — material suficiente para mais 40 a 60 horas de
          campanha sem refazer a mesma rota.
        </p>
        <p>
          O preço cheio é alto para padrão de DLC (cerca de US$ 24,99 segundo a página oficial da TaleWorlds em
          2026), mas dentro do esperado para uma expansão deste porte — comparável ao que CD Projekt cobrou pelo
          <em> Blood and Wine</em> de The Witcher 3 ou à <em>Phantom Liberty</em> de Cyberpunk 2077, em escala
          proporcional. Promoções sazonais no Steam costumam derrubar para a faixa de US$ 15-18, que é o sweet
          spot para a comunidade brasileira.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos">
          War Sails é o que Bannerlord precisava para deixar de ser &quot;Warband em HD&quot; e virar um jogo
          próprio. O combate naval entrega, os Nords ocupam um vácuo cultural óbvio, e a economia marítima abre
          espaço para builds de personagem que nunca foram viáveis no jogo base. A expansão não conserta tudo o
          que falta no jogo, mas conserta o que mais doía — e isso, em 2026, justifica o ressurgimento do título
          no top 50 do Steam.
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Mount & Blade II: Bannerlord — Página oficial", url: "https://www.taleworlds.com/", publisher: "TaleWorlds Entertainment" },
            { title: "Steam — Mount & Blade II: Bannerlord", url: "https://store.steampowered.com/app/261550/", publisher: "Valve / Steam" },
            { title: "Mount & Blade Wiki — Factions and Cultures", url: "https://mountandblade.fandom.com/wiki/Factions_(Bannerlord)", publisher: "Fandom" },
            { title: "PCGamingWiki — Mount & Blade II: Bannerlord", url: "https://www.pcgamingwiki.com/wiki/Mount_%26_Blade_II:_Bannerlord", publisher: "PCGamingWiki" },
          ]}
        />
      </div>

      <RelatedPosts currentSlug="bannerlord-war-sails-expansao-2026" />

      <div className="max-w-4xl mx-auto mt-12">
        <CommentSection
          postId="bannerlord-war-sails-expansao-2026"
          postTitle="Bannerlord War Sails: Guia da Expansão Naval"
          category="geek"
        />
      </div>
    </article>
  );
};

export default BannerlordWarSailsExpansao;
