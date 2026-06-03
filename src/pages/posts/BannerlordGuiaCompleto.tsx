import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Sword, Monitor, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import bannerlordGuiaImg from "@/assets/bannerlord-guia.webp";
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
      <BackNavigation
        category="geek"
        portalPath="/geek/bannerlord"
        portalLabel="Painel Bannerlord"
      />
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
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />3 de Junho, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="03 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={bannerlordGuiaImg}
          alt="Cavaleiro medieval observando exército formado em Calradia"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Mount &amp; Blade II: Bannerlord</strong> é o sandbox medieval mais ambicioso da
          <strong> TaleWorlds Entertainment</strong>, lançado em <strong>versão 1.0 em 25 de outubro de 2022</strong>
          depois de <strong>dois anos e meio de Early Access</strong> (iniciado em 30 de março de 2020). É a sequência
          direta de <em>Mount &amp; Blade: Warband</em> (2010), mas se passa <strong>200 anos antes</strong> da história
          do original, durante o colapso de um império inspirado em Bizâncio. O jogador pode ser mercador, mercenário,
          vassalo, rei — ou tudo isso ao longo da mesma campanha.
        </p>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <AdLeaderboard className="my-8" />
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sword className="h-5 w-5 text-amber-400" /> Ficha Técnica Oficial
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              ["Desenvolvedor",  "TaleWorlds Entertainment"],
              ["Publicador",     "TaleWorlds Entertainment"],
              ["Early Access",   "30/03/2020 (PC)"],
              ["Lançamento 1.0", "25/10/2022 (PC, Xbox, PlayStation)"],
              ["Plataformas",    "PC (Steam, Epic, GOG), Xbox One, Xbox Series X|S, PS4, PS5"],
              ["Gênero",         "Action RPG · Estratégia · Sandbox medieval"],
              ["Engine",         "Engine proprietária TaleWorlds"],
              ["Preço base",     "US$ 49,99 / ~R$ 99,90 (Steam Brasil)"],
              ["Modos",          "Campanha · História · Custom Battle · Multiplayer"],
              ["Classificação",  "Mature 17+ (ESRB) · PEGI 16"],
              ["Idiomas",        "Inglês, PT-BR (legendas), 14+ outros"],
              ["Expansão",       "War Sails (anunciada 2025)"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-muted-foreground text-xs">{k}</div>
                <div className="font-semibold text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <h2>O Que É Mount &amp; Blade II: Bannerlord?</h2>
        <p>
          Bannerlord é um <strong>RPG de ação em primeira/terceira pessoa</strong> com uma camada de <strong>estratégia
          de mundo aberto</strong> em mapa de campanha. O jogador controla um único personagem, mas comanda exércitos
          de até <strong>1.000 unidades em uma única batalha</strong> (configurável nas opções), participa de cercos a
          castelos e cidades, gerencia clãs, casa, tem filhos que herdam o império e pode forjar armas peça a peça em
          um sistema de <em>smithing</em> bastante profundo. O modelo é o mesmo consagrado por <em>Warband</em>: você
          escolhe o que quer ser e o mundo simula tudo ao redor — guerras entre reinos, casamentos, intrigas, traições,
          comércio.
        </p>
        <p>
          A grande diferença em relação ao Warband é a <strong>escala</strong>. O mapa de campanha cobre todo o continente
          de Calradia com <strong>centenas de cidades, castelos e vilas</strong> distribuídos entre <strong>oito
          culturas</strong> jogáveis. Cada cultura tem árvores de tropas únicas, arquitetura própria, bônus passivos
          para o personagem e relações políticas distintas. Não há classes no sentido tradicional: o personagem evolui
          praticamente todas as <strong>18 habilidades</strong> simultaneamente, mas só pode focar de verdade em algumas
          via <em>perks</em> e <em>focus points</em>.
        </p>

        <h2>A História — O Que É o Estandarte do Dragão?</h2>
        <p>
          A campanha principal opcional gira em torno do <strong>Dragon Banner</strong> (Estandarte do Dragão), uma
          relíquia do antigo <strong>Império de Calradia</strong> capaz de unir os exércitos imperiais sob um único
          líder. O império vivia uma guerra civil entre três facções desde a morte do imperador <strong>Arenicos</strong>
          — Empire of the North (liderado por Lucon), Empire of the South (Rhagaea) e Empire of the West (Garios).
          O cenário se passa <strong>~200 anos antes</strong> dos eventos de <em>Warband</em>, mostrando como Calradia
          se fragmentou nas pequenas potências do jogo original.
        </p>
        <p>
          A história envolve buscar fragmentos do banner, formar um séquito, ganhar influência e — de acordo com a
          decisão final — restaurar o império ou usá-lo para criar um novo reino independente. A narrativa principal
          dura algumas dezenas de horas, mas a maior parte do conteúdo vive no <strong>sandbox aberto</strong>: depois
          de cumprir os marcos iniciais, o jogador pode ignorar a história e jogar do jeito que quiser, indefinidamente.
        </p>

        <AdInArticle className="my-8" />

        <h2>Modos de Jogo Disponíveis</h2>
        <ul>
          <li><strong>Campanha (Story Mode)</strong> — campanha sandbox com a missão do Dragon Banner ativada. É o modo
            recomendado para a primeira partida porque dá direção e desbloqueia eventos únicos.</li>
          <li><strong>Sandbox</strong> — mesmo mapa de mundo aberto, sem a missão principal. Você começa do zero e cria
            sua própria história sem nenhum gatilho narrativo.</li>
          <li><strong>Custom Battle</strong> — batalha avulsa fora da campanha. Escolha terreno, exército amigo, exército
            inimigo, comandantes e veja a IA ou seu controle resolver. Ótimo para testar comparações entre tropas.</li>
          <li><strong>Multiplayer</strong> — modos competitivos com <em>Captain</em> (cada jogador comanda uma unidade de
            tropas IA), <em>Skirmish</em> 6v6, <em>Siege</em>, <em>Team Deathmatch</em>, <em>Battle</em> e <em>Duel</em>.
            Os servidores oficiais foram simplificados ao longo dos anos e parte da comunidade migrou para servidores
            modados.</li>
        </ul>

        <h2>Quanto Custa e Onde Comprar?</h2>
        <p>
          O preço base no <strong>Steam</strong> é <strong>US$ 49,99</strong>, com versão brasileira historicamente em
          torno de <strong>R$ 99,90</strong> (depende do câmbio do dia e de promoções sazonais). O jogo também está à
          venda na <strong>Epic Games Store</strong>, <strong>GOG</strong>, <strong>Xbox Store</strong> e
          <strong> PlayStation Store</strong>, com paridade de preço quase exata entre PC e consoles. A
          <strong> versão Digital Deluxe</strong> custa um pouco mais e inclui itens cosméticos e a trilha sonora.
          Atenção: o preço da expansão <strong>War Sails</strong> ainda não foi divulgado oficialmente pela TaleWorlds
          — qualquer valor anunciado por terceiros antes do lançamento oficial deve ser tratado como rumor.
        </p>
        <p>
          Não há microtransações no jogo base. O que existe são <strong>DLCs cosméticos pagos</strong> (como o pacote
          de armaduras) e a futura expansão War Sails. Todo o conteúdo de gameplay, mapas, tropas e mecânicas é
          recebido por todos os jogadores via patches gratuitos.
        </p>

        <h2>Requisitos de PC e Armazenamento</h2>
        <p>
          Segundo a página oficial no Steam e o levantamento do <strong>PCGamingWiki</strong>, os requisitos vigentes
          são:
        </p>
        <ul>
          <li><strong>Mínimos</strong>: Windows 7/8/10 64-bit, Intel Core i3-8100 ou AMD Ryzen 3 1200, 6 GB de RAM,
            GeForce GTX 660 2 GB ou Radeon HD 7850 2 GB, 60 GB de espaço.</li>
          <li><strong>Recomendados</strong>: Intel Core i5-9600K ou AMD Ryzen 5 3600X, 8 GB de RAM, GeForce GTX 1060 6 GB
            ou Radeon RX 580 8 GB, 60 GB de espaço — preferencialmente em <strong>unidade de armazenamento em estado
            sólido (SSD)</strong>, recomendado por reduzir muito o tempo de carregamento das batalhas e dos cercos.</li>
          <li><strong>Espaço total</strong>: a instalação base ocupa em torno de <strong>60 GB</strong>. Com mods grandes
            (texturas em alta, novos mapas, overhauls como RBM ou BannerKings) é fácil ultrapassar <strong>90 GB</strong>.</li>
        </ul>
        <p>
          Em batalhas com 1.000 unidades o gargalo costuma ser <strong>CPU e RAM</strong>, não a placa de vídeo. Por isso
          o jogo escala bem em GPUs mais antigas, mas sofre em processadores fracos quando o número de soldados na tela
          passa de 600. Quem quiser rodar em ultrapreset com 4K e batalhas grandes precisa de uma máquina equivalente a
          um <em>Ryzen 5 5600 / GTX 3060</em> ou superior.
        </p>

        <h2>Quanto Tempo Leva para Zerar?</h2>
        <p>
          Os dados agregados pelo <strong>HowLongToBeat</strong> mostram a natureza sandbox do jogo:
        </p>
        <ul>
          <li><strong>História principal (Main Story)</strong>: cerca de <strong>50 horas</strong>.</li>
          <li><strong>Main + extras</strong>: por volta de <strong>120 horas</strong>.</li>
          <li><strong>Completionist</strong>: <strong>200 horas ou mais</strong> — e ainda assim a maior parte dos
            jogadores nunca "termina" porque a campanha sandbox é virtualmente infinita.</li>
        </ul>
        <p>
          O multiplayer e os mods aumentam o tempo de vida de forma indefinida. Não é incomum ver perfis no Steam com
          mais de 1.000 horas no jogo, especialmente entre quem usa overhauls grandes como <em>Realistic Battle Mod</em>,
          <em> BannerKings</em> ou <em>Calradia: Awakening</em>.
        </p>

        <h2>Suporte a Mods — Por Que É um dos Jogos Mais Modáveis do PC</h2>
        <p>
          A TaleWorlds suporta mods <strong>oficialmente</strong> através de três canais: <strong>Steam Workshop</strong>
          (ativação automática e atualização integrada), <strong>Nexus Mods</strong> (a maior biblioteca, com mods de
          todo porte) e <strong>launcher próprio do jogo</strong>, que organiza a ordem de carregamento. A maioria dos
          mods grandes depende de bibliotecas básicas como <strong>Harmony</strong>, <strong>ButterLib</strong> e
          <strong> UIExtenderEx</strong>, instaladas separadamente. Em outros artigos do painel vamos detalhar como
          instalar passo a passo e quais são os mods essenciais para cada estilo de jogo.
        </p>

        <h2>O Estado do Jogo em 2026 e a Expansão War Sails</h2>
        <p>
          Mesmo depois da versão 1.0, o jogo continua recebendo patches frequentes da TaleWorlds, com balanceamento de
          tropas, correções de IA e novos eventos. A grande novidade anunciada oficialmente é a expansão
          <strong> War Sails</strong>, focada em <strong>combate naval</strong>, novas regiões costeiras e uma camada
          extra de gestão para reinos com saída para o mar — atendendo a um pedido histórico da comunidade. Os detalhes
          finais (data exata, preço, conteúdo completo) ainda estão sendo divulgados aos poucos pela TaleWorlds; trataremos
          tudo isso em um artigo dedicado dentro deste mesmo painel.
        </p>

        <EditorialTake category="geek">
          <p>
            Bannerlord é o jogo de medieval mais completo da década, com a estranha qualidade de ser ao mesmo tempo
            um RPG, um simulador econômico e um <em>grand strategy</em> de bolso. Não é um jogo polido como um Total War —
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
            { title: "Mount & Blade II: Bannerlord — página oficial", url: "https://www.taleworlds.com/en/Games/Bannerlord", publisher: "TaleWorlds Entertainment", accessedAt: "Junho 2026" },
            { title: "Mount & Blade II: Bannerlord no Steam", url: "https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/", publisher: "Valve / Steam", accessedAt: "Junho 2026" },
            { title: "Mount & Blade II: Bannerlord — PCGamingWiki (requisitos e configurações)", url: "https://www.pcgamingwiki.com/wiki/Mount_%26_Blade_II:_Bannerlord", publisher: "PCGamingWiki", accessedAt: "Junho 2026" },
            { title: "Mount & Blade II: Bannerlord — HowLongToBeat", url: "https://howlongtobeat.com/game/41372", publisher: "HowLongToBeat", accessedAt: "Junho 2026" },
            { title: "Mount & Blade Wiki — Bannerlord", url: "https://mountandblade.fandom.com/wiki/Mount_%26_Blade_II:_Bannerlord", publisher: "Mount & Blade Wiki (Fandom)", accessedAt: "Junho 2026" },
            { title: "Bannerlord no Nexus Mods", url: "https://www.nexusmods.com/mountandblade2bannerlord", publisher: "Nexus Mods", accessedAt: "Junho 2026" },
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
