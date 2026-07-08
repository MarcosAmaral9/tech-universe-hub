import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Gamepad2, Star, Zap, Shield, BarChart3, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/nintendo-switch-2-guia-completo-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const POST_SLUG = "nintendo-switch-2-guia-completo-2026";
const POST_TITLE = "Nintendo Switch 2: Guia Completo — Preço (R$ 4.500), Todos os Jogos, Specs e Vale a Pena Comprar?";

const NintendoSwitch2Completo2026 = () => {
  useEffect(() => {
    trackArticleRead(POST_SLUG, POST_TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · Nintendo · Switch 2 · Lançamento Confirmado
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Nintendo Switch 2: Guia Completo — Preço (R$ 4.500), Todos os Jogos, Specs e Vale a Pena Comprar?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Abril, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Nintendo Switch 2 guia completo: preço Brasil, jogos e specs"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>Nintendo Switch 2</strong> chega ao Brasil em <strong>5 de junho de 2026</strong> por
          <strong> R$ 4.499,90</strong> (R$ 4.799,90 no bundle com Mario Kart World). É o salto mais agressivo
          de hardware da história da Nintendo: tela LCD HDR de 7,9 polegadas a 120 Hz, 4K via dock, 256 GB
          internos, Joy-Con magnéticos com função mouse e <em>GameChat</em> nativo. Reunimos preço, ficha técnica,
          catálogo de lançamento e o veredito final sobre comprar agora ou esperar.
        </p>

        <p>
          Para entender o tamanho da aposta da Nintendo, vale relembrar o histórico do Switch original, lançado em março de 2017. O console combinou pela primeira vez de forma sólida a experiência portátil e a de console de mesa em um único aparelho, conceito que a própria Nintendo já havia tentado de forma mais limitada com o Wii U em 2012 — um console que vendeu pouco mais de 13 milhões de unidades em todo o seu ciclo de vida, segundo relatórios financeiros divulgados pela própria empresa, e é hoje considerado um dos maiores fracassos comerciais da história recente da companhia. O Switch corrigiu essa equação e se tornou, segundo dados consolidados de vendas anuais da Nintendo, um dos consoles mais vendidos de todos os tempos, ultrapassando a marca histórica do Wii (cerca de 101 milhões de unidades) e se aproximando dos números do Nintendo DS e do PlayStation 2 entre os hardwares mais vendidos já lançados pela indústria.
        </p>
        <p>
          O anúncio oficial do Switch 2 seguiu o padrão que a Nintendo costuma adotar para grandes lançamentos: um teaser inicial divulgado meses antes, seguido por um Nintendo Direct dedicado e mais detalhado revelando especificações técnicas, preço e catálogo de lançamento. Esse formato de revelação escalonada, usado também nos anúncios do Switch original em 2016 e 2017, tem como objetivo manter o hype do público crescendo de forma controlada ao longo de várias semanas, em vez de revelar tudo de uma vez em um único evento — estratégia de marketing que a empresa repete há praticamente uma década com resultados consistentes em termos de pré-vendas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-geek" />
          Preço no Brasil e edições disponíveis
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4 break-words">Edição</th>
              <th className="text-left py-3 px-4 break-words">Preço (Brasil)</th>
              <th className="text-left py-3 px-4 break-words">O que vem na caixa</th>
            </tr></thead>
            <tbody>
              {[
                ["Switch 2 Standard", "R$ 4.499,90", "Console, dock, 2 Joy-Con, grip, HDMI, fonte"],
                ["Bundle Mario Kart World", "R$ 4.799,90", "Tudo do Standard + cópia digital de Mario Kart World"],
                ["Pro Controller 2", "R$ 749,90", "Vendido separadamente, com HD Rumble 2"],
                ["Joy-Con 2 (par adicional)", "R$ 699,90", "Sensor mouse, IR e câmera embutida"],
              ].map(([ed, p, o]) => (
                <tr key={ed} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap break-words">{ed}</td>
                  <td className="py-3 px-4 font-medium break-words">{p}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Ficha técnica completa
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4 break-words">Componente</th>
              <th className="text-left py-3 px-4 break-words">Switch 2</th>
              <th className="text-left py-3 px-4 break-words">Switch 1 (referência)</th>
            </tr></thead>
            <tbody>
              {[
                ["Tela", "LCD 7,9\" HDR, 1080p, 120 Hz, VRR", "LCD 6,2\" 720p, 60 Hz"],
                ["Saída no dock", "Até 4K @ 60 fps (1440p / 120 fps)", "1080p @ 60 fps"],
                ["Armazenamento", "256 GB UFS (expansível por microSD Express)", "32 GB"],
                ["RAM", "12 GB LPDDR5X", "4 GB LPDDR4"],
                ["GPU", "NVIDIA Custom (DLSS + Ray Tracing)", "NVIDIA Tegra X1"],
                ["Bateria", "2 a 6,5 horas", "2,5 a 6,5 horas"],
                ["Conectividade", "Wi-Fi 6, Bluetooth 5.3, USB-C duplo", "Wi-Fi 5, BT 4.1"],
              ].map(([k, a, b]) => (
                <tr key={k} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap break-words">{k}</td>
                  <td className="py-3 px-4 font-medium break-words">{a}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic">
          SSD extremamente recomendado para garantir tempos de carregamento adequados em jogos de mundo aberto
          — o armazenamento UFS interno do console e cartões microSD Express são obrigatórios para títulos como
          Mario Kart World e The Duskbloods.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-geek" />
          Joy-Con 2: o que mudou
        </h2>
        <ul>
          <li><strong>Encaixe magnético:</strong> adeus trilho — agora os Joy-Con grudam por imã, com botão de liberação dedicado.</li>
          <li><strong>Função mouse:</strong> sensor óptico permite usar cada Joy-Con como mouse de PC — útil em jogos de estratégia, FPS e edição.</li>
          <li><strong>HD Rumble 2:</strong> resposta tátil mais granular, incluindo simulação de texturas.</li>
          <li><strong>Botão C:</strong> dedicado ao GameChat para iniciar chamadas de voz e vídeo entre jogadores instantaneamente.</li>
          <li><strong>Câmera IR:</strong> mantida e melhorada para reconhecimento de rosto durante o GameChat.</li>
        </ul>
        <p>
          O recurso de GameChat representa a primeira tentativa séria da Nintendo de competir diretamente com funcionalidades sociais já consolidadas no PlayStation Network e no Xbox Live, plataformas que oferecem chamadas de voz e compartilhamento de tela entre jogadores há mais de uma década. A função permite que até 12 jogadores participem de uma chamada de voz simultânea, com a possibilidade de compartilhar a tela do próprio jogo para os demais participantes em tempo real — recurso que pode ser ativado tanto via microfone embutido no console quanto via headset USB-C ou Bluetooth. A Nintendo também introduziu suporte opcional a uma câmera USB externa, vendida separadamente, que permite chamadas de vídeo durante o jogo, em formato similar ao que consoles concorrentes já ofereciam havia anos.
        </p>
        <p>
          Já a função mouse dos Joy-Con 2 nasceu de um sensor óptico posicionado na borda lateral de cada controle, permitindo que o jogador deslize o Joy-Con sobre qualquer superfície plana como faria com um mouse de computador tradicional. A Nintendo demonstrou publicamente essa funcionalidade em jogos de estratégia em tempo real e em ferramentas criativas de desenho, citando como inspiração direta a precisão exigida por gêneros historicamente mais difíceis de adaptar para controle analógico tradicional, como jogos de tabuleiro digitais, RTS e algumas ferramentas de produtividade. É um recurso que não existia em nenhuma geração anterior de Joy-Con e representa, junto ao encaixe magnético, a mudança física mais significativa no design do acessório desde o lançamento do Switch original em 2017.
        </p>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-geek" />
          Catálogo de lançamento e principais exclusivos
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4 break-words">Janela</th>
              <th className="text-left py-3 px-4 break-words">Jogo</th>
              <th className="text-left py-3 px-4 break-words">Estúdio</th>
            </tr></thead>
            <tbody>
              {[
                ["05/06/2026", "Mario Kart World", "Nintendo EPD"],
                ["Junho 2026", "Donkey Kong Bananza", "Nintendo EPD"],
                ["Julho 2026", "The Duskbloods", "FromSoftware (exclusivo Switch 2)"],
                ["Q3 2026", "Zelda: Ocarina of Time Remake", "Nintendo / Grezzo"],
                ["Q3 2026", "Metroid Prime 4: Beyond (versão Switch 2)", "Retro Studios"],
                ["Q4 2026", "Pokémon Legends: Z-A (versão Switch 2)", "Game Freak"],
                ["Q4 2026", "Kirby Air Riders", "Sora Ltd. / Bandai Namco"],
              ].map(([d, g, e]) => (
                <tr key={g} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek whitespace-nowrap break-words">{d}</td>
                  <td className="py-3 px-4 font-medium break-words">{g}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Retrocompatibilidade com Switch 1
        </h2>
        <p>
          A maioria dos jogos do Switch original roda no Switch 2 — incluindo cartuchos físicos. Vários títulos
          recebem <strong>Nintendo Switch 2 Edition</strong>: melhorias gratuitas (Tears of the Kingdom, Breath of
          the Wild, Super Mario Odyssey) ou pagas (Metroid Prime 4 e versões aprimoradas de jogos third-party).
          Saves da nuvem migram automaticamente via conta Nintendo.
        </p>
        <p>
          Essa retrocompatibilidade ampla é uma mudança importante em relação ao histórico da Nintendo, que tradicionalmente abandonava o catálogo físico de gerações anteriores a cada salto de hardware — quem possuía cartuchos de Nintendo 64 não podia usá-los no GameCube, e jogos de GameCube não rodavam no Wii sem emulação limitada. Ao manter compatibilidade ampla com a biblioteca física e digital do Switch original, a Nintendo reduz a barreira de entrada para quem já investiu em uma biblioteca grande de jogos ao longo dos quase dez anos de vida do primeiro console, ao mesmo tempo em que cria um incentivo extra de upgrade através das versões "Switch 2 Edition", que entregam resolução mais alta, taxa de quadros melhorada e tempos de carregamento reduzidos para títulos já consagrados.
        </p>
        <p>
          Do ponto de vista de mercado, o lançamento do Switch 2 acontece num momento em que a concorrência direta — PlayStation 5 e Xbox Series X|S — já está há alguns anos no mercado e enfrenta desaceleração natural de vendas típica do meio de ciclo de uma geração de consoles. Esse cenário historicamente favorece a Nintendo, que costuma lançar hardware novo justamente quando rivais começam a perder fôlego, repetindo o padrão observado quando o Switch original chegou em 2017, alguns anos depois do PlayStation 4 e do Xbox One. Analistas do setor de games frequentemente apontam essa estratégia de timing como um dos fatores que explicam por que a Nintendo, apesar de não competir diretamente em poder gráfico bruto com Sony e Microsoft, segue conseguindo vender dezenas de milhões de unidades de hardware a cada novo ciclo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-geek" />
          Vale a pena comprar no lançamento?
        </h2>
        <p>
          <strong>Compre agora se:</strong> você é fã de Mario Kart, Zelda ou Metroid; não tem o Switch 1; quer o
          melhor portátil do mercado; ou pretende jogar The Duskbloods da FromSoftware como exclusivo. <strong>
          Espere 6 meses se:</strong> já tem o Switch 1 jogando bem, espera promoções de fim de ano, ou quer
          aguardar o catálogo crescer com Pokémon e Kirby Air Riders.
        </p>
        <p>
          A R$ 4.499,90, o console se posiciona acima de um PS5 Slim no Brasil, mas entrega exclusivos que não
          existem em nenhuma outra plataforma — a velha proposta de valor da Nintendo, agora com hardware
          competitivo.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Vai comprar o Switch 2 no lançamento? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários qual exclusivo você mais espera! 👇</p>
        </div>
      </div>



            <EditorialTake category="geek" title={'Análise do Marcos: o Switch 2 é caro no Brasil, e isso é proposital'}>
        <p>A Nintendo nunca brigou por preço — briga por catálogo. O Switch 2 no Brasil chega com preço sugerido próximo de R$ 4.500 e jogos físicos em R$ 400+ porque a empresa sabe que <strong>quem compra Nintendo aceita pagar premium por exclusivos</strong>. A comparação justa não é com PS5 ou Series X (que dependem de terceiros e promoções), mas com o ciclo do Switch 1 — que vendeu 140 milhões com a mesma estratégia. Para o consumidor brasileiro, a equação muda: vale esperar 6 meses pós-lançamento para o primeiro corte de preço em Mario/Zelda na eShop, comprar versão internacional via lojas confiáveis ou aguardar bundles de fim de ano com cashback.</p>
      </EditorialTake>
      <ArticleSources category="geek"
        sources={[
          { title: 'Nintendo Switch 2 — Site oficial', url: 'https://www.nintendo.com/pt-br/switch-2/', publisher: 'Nintendo', accessedAt: "Maio 2026" },
          { title: 'Nintendo Investor Relations', url: 'https://www.nintendo.co.jp/ir/en/', publisher: 'Nintendo Co., Ltd.', accessedAt: "Maio 2026" },
          { title: 'Nintendo Direct — Canal oficial', url: 'https://www.youtube.com/c/Nintendo', publisher: 'Nintendo', accessedAt: "Maio 2026" },
          { title: 'Newzoo — Global Games Market Report', url: 'https://newzoo.com/', publisher: 'Newzoo', accessedAt: "Maio 2026" },
          { title: 'ABRAGAMES — Indústria Brasileira de Jogos', url: 'https://abragames.org/', publisher: 'ABRAGAMES', accessedAt: "Maio 2026" }
        ]}
      />
<RelatedPosts currentSlug={POST_SLUG} />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId={POST_SLUG} postTitle={POST_TITLE}  category="geek" />
    </article>
  );
};

export default NintendoSwitch2Completo2026;