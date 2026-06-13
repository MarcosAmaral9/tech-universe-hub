import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock,
  User,
  Calendar,
  Sword,
  Monitor,
  AlertTriangle,
  Crown,
  Map,
  Ship,
  Hammer,
  Wrench,
  ScrollText,
  Coins,
  Gamepad2,
  Trophy,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import bannerlordGuiaImg from "@/assets/bannerlord-guia.webp";
import CalradiaMap from "@/components/CalradiaMap";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const BannerlordGuiaCompleto = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-guia-completo-2026",
      "Mount & Blade II: Bannerlord — Guia Completo, História, Lançamento, Modos e Preços",
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
            Bannerlord · Guia Completo
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Mount &amp; Blade II: Bannerlord — Guia Completo, História, Lançamento, Modos e Preços
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />3 de Junho, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            14 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="03 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={bannerlordGuiaImg}
          alt="Cavaleiro medieval observando exército formado em Calradia"
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
          <strong>Mount &amp; Blade II: Bannerlord</strong> é o sandbox medieval mais ambicioso da
          <strong> TaleWorlds Entertainment</strong>, lançado em <strong>versão 1.0 em 25 de outubro de 2022</strong>
          depois de <strong>dois anos e meio de Early Access</strong> (iniciado em 30 de março de 2020). É a sequência
          direta de <em>Mount &amp; Blade: Warband</em> (2010), mas se passa <strong>200 anos antes</strong> da história
          do original, durante o colapso de um império inspirado em Bizâncio. O jogador pode ser mercador, mercenário,
          vassalo, rei — ou tudo isso ao longo da mesma campanha.
        </p>

        {/* FICHA TÉCNICA */}
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-8" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
            <Sword className="h-5 w-5" /> Ficha Técnica Oficial
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              ["Desenvolvedor", "TaleWorlds Entertainment"],
              ["Publicador", "TaleWorlds Entertainment"],
              ["Early Access", "30/03/2020 (PC)"],
              ["Lançamento 1.0", "25/10/2022 (PC, Xbox, PlayStation)"],
              ["Plataformas", "PC (Steam, Epic, GOG), Xbox One, Series X|S, PS4, PS5"],
              ["Gênero", "Action RPG · Estratégia · Sandbox medieval"],
              ["Engine", "Engine proprietária TaleWorlds"],
              ["Preço base", "US$ 49,99 / ~R$ 99,90 (Steam Brasil)"],
              ["Modos", "Campanha · História · Custom Battle · Multiplayer"],
              ["Classificação", "Mature 17+ (ESRB) · PEGI 16"],
              ["Idiomas", "Inglês, PT-BR (legendas), 14+ outros"],
              ["Expansão", "War Sails (anunciada 2025)"],
            ].map(([k, v]) => (
              <div key={k} className="p-3 bg-background/40 rounded-lg border border-border/50">
                <div className="text-muted-foreground text-xs uppercase tracking-wide">{k}</div>
                <div className="font-semibold text-sm mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>
          <Gamepad2 className="inline h-7 w-7 mr-2 -mt-1" />O Que É Mount &amp; Blade II: Bannerlord?
        </h2>
        <p>
          Bannerlord é um <strong>RPG de ação em primeira/terceira pessoa</strong> com uma camada de{" "}
          <strong>estratégia de mundo aberto</strong> em mapa de campanha. O jogador controla um único personagem, mas
          comanda exércitos de até <strong>1.000 unidades em uma única batalha</strong> (configurável nas opções),
          participa de cercos a castelos e cidades, gerencia clãs, casa, tem filhos que herdam o império e pode forjar
          armas peça a peça em um sistema de <em>smithing</em> bastante profundo.
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <h3 className="font-bold text-amber-300 mb-2 flex items-center gap-2">
              <Crown className="h-4 w-4" /> Escala
            </h3>
            <p className="text-sm text-muted-foreground m-0">
              Mapa de Calradia com <strong>centenas de cidades, castelos e vilas</strong> entre{" "}
              <strong>9 culturas jogáveis</strong> — as 8 originais (Vlandia, Battania, Sturgia, Aserai, Khuzait e os
              três Impérios Norte/Sul/Oeste) e os <strong className="text-blue-300">Nords</strong>, adicionados pela
              expansão paga <strong className="text-blue-300">War Sails</strong>. Cada cultura tem árvores de tropas,
              arquitetura e bônus próprios.
            </p>
          </div>
          <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <h3 className="font-bold text-amber-300 mb-2 flex items-center gap-2">
              <Hammer className="h-4 w-4" /> Profundidade
            </h3>
            <p className="text-sm text-muted-foreground m-0">
              <strong>18 habilidades</strong>, sistema de <em>perks</em> e <em>focus points</em>, smithing de armas peça
              a peça, dinastia com filhos herdeiros e diplomacia entre clãs.
            </p>
          </div>
        </div>

        <h2>
          <ScrollText className="inline h-7 w-7 mr-2 -mt-1" />A História — O Estandarte do Dragão
        </h2>
        <p>
          A campanha principal opcional gira em torno do <strong>Dragon Banner</strong> (Estandarte do Dragão), uma
          relíquia do antigo <strong>Império de Calradia</strong> capaz de unir os exércitos imperiais sob um único
          líder. O império vivia uma guerra civil entre três facções desde a morte do imperador{" "}
          <strong>Arenicos</strong>:
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Facção Imperial</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Líder</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Pretensão</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Empire of the North", "Lucon", "Continuidade dinástica imperial", "bg-blue-500/10 text-blue-300 border-blue-500/30"],
                ["Empire of the South", "Rhagaea", "Regência em nome do herdeiro", "bg-rose-500/10 text-rose-300 border-rose-500/30"],
                ["Empire of the West", "Garios", "Restauração via eleição senatorial", "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"],
              ].map(([f, l, p, color], i) => (
                <tr key={f} className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {f}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-amber-400">{l}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs leading-relaxed">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O cenário se passa <strong>~200 anos antes</strong> de <em>Warband</em>, mostrando como Calradia se fragmentou
          nas pequenas potências do jogo original. A história envolve buscar fragmentos do banner, formar um séquito,
          ganhar influência e — na decisão final — restaurar o império ou usá-lo para criar um novo reino independente.
        </p>

        <AdInArticle className="my-8" />

        <h2>
          <Trophy className="inline h-7 w-7 mr-2 -mt-1" />
          Modos de Jogo Disponíveis
        </h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Modo</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Para Quem</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Campanha (Story Mode)", "Primeira partida", "Sandbox com a missão do Dragon Banner ativada. Dá direção e desbloqueia eventos únicos.", "bg-amber-500/15 text-amber-300 border-amber-500/30"],
                ["Sandbox", "Veteranos", "Mesmo mapa, sem missão principal. Zero gatilhos narrativos, jogo do zero.", "bg-sky-500/15 text-sky-300 border-sky-500/30"],
                ["Custom Battle", "Quem quer testar", "Batalha avulsa fora da campanha. Escolha terreno, exércitos e comandantes.", "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"],
                ["Multiplayer", "Competitivo", "Captain · Skirmish 6v6 · Siege · TDM · Battle · Duel. Comunidade ativa em servidores modados.", "bg-purple-500/15 text-purple-300 border-purple-500/30"],
              ].map(([m, q, d, color], i) => (
                <tr key={m} className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${color}`}>{m}</span>
                  </td>
                  <td className="py-3.5 px-4 text-foreground text-xs font-medium">{q}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs leading-relaxed">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>
          <Coins className="inline h-7 w-7 mr-2 -mt-1" />
          Quanto Custa e Onde Comprar
        </h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Edição</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Preço (USD)</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Conteúdo Adicional</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard", "US$ 49,99", "Jogo base completo, atualizações gratuitas pós-1.0", "text-foreground"],
                ["Digital Deluxe", "US$ 59,99", "Jogo base + pacote cosmético de armaduras + trilha sonora oficial", "text-amber-300"],
                ["War Sails (DLC)", "A confirmar", "Expansão com combate naval — preço oficial ainda não divulgado pela TaleWorlds", "text-blue-300"],
              ].map(([e, p, c, color], i) => (
                <tr key={e} className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className={`py-3.5 px-4 font-bold ${color}`}>{e}</td>
                  <td className="py-3.5 px-4 text-amber-400 font-bold">{p}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs leading-relaxed">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2 not-prose">
          ⚠️ Valor brasileiro historicamente em torno de <strong>R$ 99,90</strong>; varia conforme câmbio e promoções
          sazonais. Disponível também em <strong>Epic Games Store</strong>, <strong>GOG</strong>,{" "}
          <strong>Xbox Store</strong> e <strong>PlayStation Store</strong> com paridade de preço.
        </p>

        <div className="not-prose my-6 p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
          <h3 className="font-bold text-emerald-300 mb-2 flex items-center gap-2">
            <Coins className="h-4 w-4" /> Sem microtransações
          </h3>
          <p className="text-sm text-muted-foreground m-0">
            Não há lootboxes, battlepass ou itens de poder pagos. O que existe são <strong>DLCs cosméticos</strong>e a
            expansão paga de <strong>War Sails</strong>. Toda atualização de conteúdo, gameplay, mapas, tropas e
            mecânicas chega via patches gratuitos para todos os jogadores que possuirem a dlc.
          </p>
        </div>

        <h2>
          <Monitor className="inline h-7 w-7 mr-2 -mt-1" />
          Requisitos de PC e Armazenamento
        </h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-500/20 shadow-lg">
          <table className="w-full border-collapse bg-card text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent">
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Tier</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">CPU</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">GPU</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">RAM</th>
                <th className="text-left py-3.5 px-4 font-bold text-amber-300 uppercase tracking-wider text-xs">Espaço</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mínimo", "Intel i3-8100 / Ryzen 3 1200", "GTX 660 2 GB / HD 7850 2 GB", "6 GB", "60 GB HDD", "bg-slate-500/15 text-slate-300 border-slate-500/30"],
                ["Recomendado", "Intel i5-9600K / Ryzen 5 3600X", "GTX 1060 6 GB / RX 580 8 GB", "8 GB", "60 GB SSD", "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"],
                ["Ultra · 1000 tropas", "Ryzen 5 5600 / i5-12400", "RTX 3060 12 GB / RX 6700 XT 12 GB", "16 GB", "90 GB+ SSD", "bg-red-500/15 text-red-300 border-red-500/30"],
              ].map(([t, c, g, r, s, color], i) => (
                <tr key={t} className={`border-t border-border/60 hover:bg-muted/30 transition-colors ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${color}`}>{t}</span>
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs">{c}</td>
                  <td className="py-3.5 px-4 text-muted-foreground text-xs">{g}</td>
                  <td className="py-3.5 px-4 text-foreground text-xs font-semibold">{r}</td>
                  <td className="py-3.5 px-4 text-amber-400 text-xs font-semibold">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2 not-prose">
          Em batalhas com 1.000 unidades o gargalo costuma ser <strong>CPU e RAM</strong>, não GPU. Por isso o jogo
          escala bem em placas antigas, mas sofre em processadores fracos quando passa de 600 soldados na tela. Mods
          grandes (RBM, BannerKings, texturas em alta) podem ultrapassar 90 GB de instalação. Fonte: página oficial
          Steam · PCGamingWiki.
        </p>

        <h2>
          <Clock className="inline h-7 w-7 mr-2 -mt-1" />
          Quanto Tempo Leva para Zerar?
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "História principal",
              value: "~50h",
              box: "bg-amber-500/10 border-amber-500/30",
              text: "text-amber-400",
              note: "Apenas missão Dragon Banner",
            },
            {
              label: "Main + extras",
              value: "~120h",
              box: "bg-orange-500/10 border-orange-500/30",
              text: "text-orange-400",
              note: "Campanha + politics + dinastia",
            },
            {
              label: "Completionist",
              value: "200h+",
              box: "bg-red-500/10 border-red-500/30",
              text: "text-red-400",
              note: "Sandbox virtualmente infinito",
            },
          ].map((c) => (
            <div key={c.label} className={`p-5 border rounded-xl text-center ${c.box}`}>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
              <div className={`text-4xl font-display font-bold my-2 ${c.text}`}>{c.value}</div>
              <div className="text-xs text-muted-foreground">{c.note}</div>
            </div>
          ))}
        </div>
        <p>
          Dados agregados pelo <strong>HowLongToBeat</strong>. Multiplayer e mods aumentam o tempo de vida
          indefinidamente: não é incomum ver perfis no Steam com <strong>mais de 1.000 horas</strong>, especialmente
          entre quem usa overhauls como <em>Realistic Battle Mod</em>, <em>BannerKings</em> ou{" "}
          <em>Calradia: Awakening</em>.
        </p>

        <h2>
          <Wrench className="inline h-7 w-7 mr-2 -mt-1" />
          Suporte a Mods — Um dos Jogos Mais Modáveis do PC
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-3 gap-4">
          {[
            {
              name: "Steam Workshop",
              desc: "Ativação automática, atualização integrada.",
              box: "bg-blue-500/10 border-blue-500/30",
              title: "text-blue-300",
            },
            {
              name: "Nexus Mods",
              desc: "Maior biblioteca da comunidade, mods de todo porte.",
              box: "bg-amber-500/10 border-amber-500/30",
              title: "text-amber-300",
            },
            {
              name: "Launcher oficial",
              desc: "Organiza a ordem de carregamento dos mods ativos.",
              box: "bg-purple-500/10 border-purple-500/30",
              title: "text-purple-300",
            },
          ].map((m) => (
            <div key={m.name} className={`p-4 border rounded-xl ${m.box}`}>
              <h3 className={`font-bold mb-1 text-base ${m.title}`}>{m.name}</h3>
              <p className="text-sm text-muted-foreground m-0">{m.desc}</p>
            </div>
          ))}
        </div>
        <p>
          A maioria dos mods grandes depende de bibliotecas básicas como <strong>Harmony</strong>,
          <strong> ButterLib</strong> e <strong>UIExtenderEx</strong>. Em artigos futuros do painel vamos detalhar a
          instalação passo a passo e os mods essenciais para cada estilo de jogo.
        </p>

        <h2>
          <Ship className="inline h-7 w-7 mr-2 -mt-1" />O Estado do Jogo em 2026 e a Expansão War Sails
        </h2>
        <p>
          Mesmo depois da versão 1.0, o jogo continua recebendo patches frequentes da TaleWorlds, com balanceamento de
          tropas, correções de IA e novos eventos. A grande novidade anunciada oficialmente é a expansão
          <strong> War Sails</strong>, focada em <strong>combate naval</strong>, novas regiões costeiras e uma camada
          extra de gestão para reinos com saída para o mar — atendendo a um pedido histórico da comunidade.
        </p>

        <div className="not-prose my-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/30 to-background border border-blue-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
              <Ship className="h-3.5 w-3.5" /> Mapa Oficial · War Sails
            </span>
          </div>
          <CalradiaMap
            variant="warsails"
            title="Mapa interativo · Calradia após War Sails"
            caption="9 facções (com Nords) · clique nos pinos ou legenda"
          />
          <p className="text-xs text-muted-foreground mt-4 italic leading-relaxed">
            Mapa oficial divulgado pela TaleWorlds — costa de Calradia com cidades portuárias, ilhas e estandartes das
            culturas envolvidas no combate naval da expansão <strong className="text-blue-300">War Sails</strong>.
          </p>
        </div>

        <EditorialTake category="geek">
          <p>
            Bannerlord é o jogo de medieval mais completo da década, com a estranha qualidade de ser ao mesmo tempo um
            RPG, um simulador econômico e um <em>grand strategy</em> de bolso. Não é um jogo polido como um Total War —
            tem arestas, decisões de design que envelheceram mal e uma curva de aprendizado dura nas primeiras 10 horas.
            Mas é também o tipo de jogo que ninguém mais faz: você começa caçando bandidos em uma estrada de terra e,
            300 horas depois, está coroando seu próprio filho rei de Vlandia.
          </p>
          <p>
            Para quem nunca jogou, recomendo começar pelo modo História (com a missão do Dragon Banner) em dificuldade
            normal, sem mods, e dar uma chance honesta de pelo menos 15 horas. Só depois adicione mods e parta para a
            sandbox pura.
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
              title: "Mount & Blade II: Bannerlord no Steam",
              url: "https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/",
              publisher: "Valve / Steam",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade II: Bannerlord — PCGamingWiki (requisitos e configurações)",
              url: "https://www.pcgamingwiki.com/wiki/Mount_%26_Blade_II:_Bannerlord",
              publisher: "PCGamingWiki",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade II: Bannerlord — HowLongToBeat",
              url: "https://howlongtobeat.com/game/41372",
              publisher: "HowLongToBeat",
              accessedAt: "Junho 2026",
            },
            {
              title: "Mount & Blade Wiki — Bannerlord",
              url: "https://mountandblade.fandom.com/wiki/Mount_%26_Blade_II:_Bannerlord",
              publisher: "Mount & Blade Wiki (Fandom)",
              accessedAt: "Junho 2026",
            },
            {
              title: "Bannerlord no Nexus Mods",
              url: "https://www.nexusmods.com/mountandblade2bannerlord",
              publisher: "Nexus Mods",
              accessedAt: "Junho 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="bannerlord-guia-completo-2026" />

        <CommentSection
          postId="bannerlord-guia-completo-2026"
          postTitle="Mount & Blade II: Bannerlord — Guia Completo"
          category="geek"
          inviteTitle="Participe da conversa"
          inviteSubtitle="Quantas horas você já tem em Bannerlord? Qual foi seu primeiro reino? Conta nos comentários."
        />

        <div className="not-prose mt-10 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Aviso:</strong> preços em dólar e reais variam conforme câmbio e promoções. Os requisitos foram
            extraídos da loja Steam e do PCGamingWiki na data de publicação; a TaleWorlds pode revisá-los em futuras
            atualizações. Detalhes da expansão <em>War Sails</em> ainda em divulgação serão atualizados em artigo
            próprio.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BannerlordGuiaCompleto;
