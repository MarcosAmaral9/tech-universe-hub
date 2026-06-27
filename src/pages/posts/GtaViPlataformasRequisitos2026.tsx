import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Gamepad2, Monitor, HardDrive, Wifi } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-plataformas.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gta-vi-plataformas-requisitos-2026";
const TITLE = "Plataformas de GTA VI: PS5, Xbox Series, Ausência de PS4 e o Mistério da Versão PC";

const GtaViPlataformasRequisitos2026 = () => {
  useEffect(() => { trackArticleRead(SLUG, TITLE, "geek"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Plataformas · PS5 · Xbox · PC
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Junho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI plataformas — console e controle sob luz neon" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A pergunta sobre <strong>plataformas de GTA VI</strong> é, ao mesmo tempo, simples e complicada. Simples
          porque a Rockstar foi inequívoca desde o primeiro trailer: o jogo sai para PS5 e Xbox Series X|S em 19 de
          novembro de 2026. Complicada porque essa frase aparentemente fechada deixa de fora três grupos enormes de
          jogadores — os donos de PS4 e Xbox One, os jogadores de PC e os usuários do Nintendo Switch 2. Este artigo
          explica, com base em comunicados oficiais e no histórico da Rockstar, exatamente o que esperar para cada
          plataforma e por quê.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-pink-400" /> O que está confirmado: PS5 e Xbox Series X|S
        </h2>
        <p>
          A Rockstar Games confirmou desde o anúncio inicial em dezembro de 2023 que GTA VI será exclusivo de geração
          atual no lançamento — <strong>PlayStation 5</strong> (incluindo PS5 Slim e PS5 Pro) e <strong>Xbox Series X
          e Xbox Series S</strong>. Não há ambiguidade nessa lista: o teaser oficial, todos os comunicados de imprensa
          e todas as falas do CEO da Take-Two repetem essas duas plataformas. A inclusão do PS5 Pro como destino de
          lançamento é particularmente relevante porque o console premium da Sony, lançado em novembro de 2024, deve
          oferecer uma versão visualmente superior do jogo, possivelmente com modos gráficos exclusivos como ray
          tracing aprimorado ou frame rate mais alto em 4K.
        </p>
        <p>
          O Xbox Series S, console de entrada da Microsoft, levanta uma questão técnica importante. O console tem
          memória RAM significativamente menor que o Series X (10 GB contra 16 GB) e GPU mais fraca. Em vários jogos
          AAA recentes, isso obrigou desenvolvedores a sacrificar texturas, frame rate ou resolução para fazer o jogo
          rodar no Series S — em alguns casos extremos, atrasando o jogo (como Baldur's Gate 3) ou removendo modos
          inteiros. A Rockstar não comentou publicamente sobre as soluções técnicas adotadas para o Series S em GTA VI,
          mas o histórico da empresa sugere uma versão visualmente reduzida que entregue o mesmo conteúdo de gameplay
          que as versões mais potentes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Monitor className="h-7 w-7 text-pink-400" /> A ausência confirmada: PS4 e Xbox One
        </h2>
        <p>
          A Rockstar confirmou que GTA VI <strong>não terá versão para PS4 ou Xbox One</strong>. Essa decisão, que para
          alguns jogadores pode parecer dura — afinal, GTA V continuou sendo vendido para PS3 e Xbox 360 anos depois
          do lançamento original — é tecnicamente compreensível. GTA VI foi construído desde o início para arquiteturas
          de SSD ultrarrápido, RAM unificada e GPUs com capacidade de ray tracing. Adaptar isso para máquinas de 2013,
          que rodam em discos rígidos mecânicos e têm uma fração da memória, exigiria um redesenho profundo de
          sistemas centrais do jogo — streaming de mundo, IA de NPCs, densidade urbana, sistema climático. Não é uma
          questão de "baixar gráficos": é uma questão de incompatibilidade arquitetural com mecânicas centrais do
          design.
        </p>
        <p>
          Para quem ainda joga em PS4 ou Xbox One, isso significa, na prática, que entrar em GTA VI exige upgrade de
          hardware. Há duas opções: comprar um console da geração atual (PS5 Slim a partir de R$ 3.799, Xbox Series S
          a partir de R$ 2.799) ou montar um PC compatível — assumindo que a versão PC chegue em algum momento. A boa
          notícia para quem está no plano "comprar console mais barato": o Series S, apesar de inferior tecnicamente,
          deve rodar GTA VI com a mesma campanha e o mesmo conteúdo de gameplay que o Series X. Não é o cenário visual
          ideal, mas é o caminho de menor investimento para entrar no jogo no dia 1.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HardDrive className="h-7 w-7 text-pink-400" /> O mistério do PC: tradição da Rockstar e expectativa para 2027
        </h2>
        <p>
          A versão de GTA VI para PC <strong>não foi confirmada</strong> pela Rockstar Games. Em nenhum dos comunicados
          oficiais, trailers, materiais de imprensa ou entrevistas a Rockstar mencionou data ou janela específica para
          PC. Essa omissão é intencional e segue o padrão histórico da editora: GTA V foi lançado para consoles em
          setembro de 2013 e só chegou ao PC em <strong>abril de 2015</strong>, quase 18 meses depois. Red Dead
          Redemption 2 chegou aos consoles em outubro de 2018 e ao PC em <strong>novembro de 2019</strong>, cerca de
          13 meses depois. Não houve exceção: a Rockstar trata o PC como uma janela de relançamento separada, com
          melhorias gráficas e técnicas que justificam uma segunda compra para fãs hardcore.
        </p>
        <p>
          Aplicando esse padrão a GTA VI, a janela mais provável para a versão PC é <strong>entre o fim de 2027 e o
          primeiro semestre de 2028</strong>. A faixa central de expectativa, ponderando o histórico de RDR2 (13 meses)
          e GTA V (18 meses), aponta para algo entre <strong>outubro de 2027 e abril de 2028</strong>. Nenhum desses
          números é confirmado: são extrapolações baseadas no padrão da editora. A Rockstar costuma anunciar a versão
          PC com 3 a 6 meses de antecedência, o que significa que o primeiro sinal oficial deve vir entre o segundo e
          o terceiro trimestre de 2027.
        </p>
        <p>
          A versão PC, quando chegar, deve trazer o que tradicionalmente justifica a espera: <strong>resolução acima
          de 4K, frame rate desbloqueado</strong> (potencialmente 120 fps ou mais com hardware top de linha),
          <strong> ray tracing completo</strong> em todas as fontes de luz, opções avançadas de qualidade gráfica
          (sombras de altíssima resolução, distância de renderização estendida, qualidade de reflexos), suporte a
          mods via Rockstar Editor e ferramentas da comunidade, e provavelmente integração com hardware específico
          (NVIDIA DLSS, AMD FSR, suporte para monitores ultrawide). Para muitos jogadores de PC, essa diferença visual
          e técnica justifica historicamente esperar — e, em alguns casos, comprar o jogo duas vezes.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">E o Nintendo Switch 2?</h2>
        <p>
          O Nintendo Switch 2, lançado em junho de 2025, mudou a conversa sobre Nintendo e jogos AAA. O console tem
          hardware significativamente mais capaz que o original e já recebeu ports de jogos terceiros que antes eram
          considerados impossíveis para Nintendo, incluindo Cyberpunk 2077. No entanto, a Rockstar Games <strong>não
          confirmou GTA VI para Switch 2</strong>, e o histórico da editora com a Nintendo é especialmente desigual:
          GTA V nunca foi lançado para Wii U, Switch ou Switch 2 oficialmente.
        </p>
        <p>
          Há razões plausíveis para a Rockstar eventualmente reconsiderar essa posição, especialmente se o Switch 2
          provar capacidade técnica suficiente. Mas, a essa altura, qualquer afirmação sobre versão para Switch 2 é
          especulação. A análise realista é que, mesmo em cenário otimista, uma versão Switch 2 de GTA VI viria
          significativamente depois das versões PS5/Xbox Series — possivelmente em 2028 ou 2029, se vier.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Requisitos esperados para PC (extrapolação técnica)</h2>
        <p>
          Como a versão PC não foi anunciada, não existem requisitos oficiais. Mas com base no perfil técnico observado
          nos trailers (densidade urbana extrema, sistema climático volumétrico, fauna detalhada, ray tracing visível),
          e comparando com RDR2 e ports recentes da Rockstar, dá para construir uma expectativa razoável de hardware
          necessário quando a versão PC chegar.
        </p>
        <p>
          O <strong>perfil mínimo provável</strong> para rodar GTA VI em PC em 1080p com configurações médias e 30 fps
          deve incluir uma CPU equivalente a Ryzen 5 5600 ou Intel Core i5-12400, 16 GB de RAM, GPU equivalente a
          NVIDIA RTX 3060 ou AMD RX 6600 XT, e SSD NVMe com pelo menos 150 GB livres. O <strong>perfil recomendado</strong>
          para 1440p com configurações altas e 60 fps deve subir para Ryzen 7 7700X ou Intel Core i7-13700K, 32 GB de
          RAM, RTX 4070 ou RX 7800 XT, e SSD NVMe de alta velocidade com 200 GB livres. Para 4K nativo com ray tracing
          ativo e 60+ fps, hardware top de linha de 2026 é praticamente obrigatório: Ryzen 9 7950X ou Core i9, 32 GB
          de RAM rápida (DDR5-6000 ou superior), RTX 5080/5090 ou equivalente AMD, e SSD PCIe 5.0.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Requisitos esperados (extrapolação técnica)</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card table-fixed">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="w-1/5 text-left py-3 px-4 font-bold">Perfil</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">CPU</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">GPU</th>
                <th className="w-[15%] text-left py-3 px-4 font-bold">RAM</th>
                <th className="w-1/4 text-left py-3 px-4 font-bold">Armazenamento</th>
              </tr>
            </thead>
            <tbody>
              {[
                { p: "Mínimo (1080p / 30 fps médio)", c: "Ryzen 5 5600 ou i5-12400", g: "RTX 3060 / RX 6600 XT", r: "16 GB", s: "SSD NVMe, 150 GB livres" },
                { p: "Recomendado (1440p / 60 fps alto)", c: "Ryzen 7 7700X ou i7-13700K", g: "RTX 4070 / RX 7800 XT", r: "32 GB", s: "SSD NVMe rápido, 200 GB livres" },
                { p: "Ultra (4K + RT / 60+ fps)", c: "Ryzen 9 7950X ou Core i9", g: "RTX 5080/5090 ou equiv. AMD", r: "32 GB DDR5-6000+", s: "SSD PCIe 5.0, 200 GB+ livres" },
              ].map((r, i) => (
                <tr key={r.p} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{r.p}</td>
                  <td className="py-3 px-4 text-xs break-words">{r.c}</td>
                  <td className="py-3 px-4 text-xs break-words">{r.g}</td>
                  <td className="py-3 px-4 text-xs text-pink-300 break-words">{r.r}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{r.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-4 py-3 text-xs text-muted-foreground border-t border-border/60">
            Estimativas baseadas em RDR2 e no perfil técnico observado nos trailers de GTA VI. A Rockstar não divulgou
            requisitos oficiais — versão para PC sequer foi confirmada.
          </p>
        </div>


        <h2 className="text-2xl font-bold mt-10 mb-4">Cross-save e cross-progression entre plataformas</h2>
        <p>
          A Rockstar não confirmou se GTA VI terá cross-save (transferência de save entre PS5 e Xbox) ou
          cross-progression para o GTA Online VI. O histórico recente é encorajador: o Red Dead Online e o GTA Online
          atual têm sistemas de transferência de progressão entre algumas plataformas, com restrições. Para o single
          player, é mais raro a Rockstar oferecer cross-save em jogos novos — geralmente isso aparece em relançamentos
          ou ports posteriores.
        </p>
        <p>
          A expectativa razoável é que GTA VI lance com saves locais por plataforma no modo história e algum nível de
          cross-progression no GTA Online VI, com possível adição de cross-save no modo história quando a versão PC
          for lançada em 2027. Quem joga em múltiplas plataformas deve planejar começar a jogada principal em uma
          única plataforma — preferencialmente aquela onde planeja jogar mais.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Espaço de armazenamento e download no dia 1</h2>
        <p>
          GTA VI deve ser, sem competidor próximo, o maior download de game na história. RDR2 ocupava 110 GB no
          lançamento de 2018; GTA V atualizado ocupa 95 GB. GTA VI, com mapa significativamente maior, cidades mais
          densas e fidelidade visual superior, deve facilmente ocupar entre <strong>150 GB e 200 GB</strong> apenas
          para a campanha principal. O PS5 base vem com 825 GB de armazenamento (cerca de 667 GB utilizáveis após o
          sistema), e o Xbox Series X com 1 TB (cerca de 800 GB utilizáveis). Quem tem o console há mais de seis meses
          e instalou vários jogos provavelmente vai precisar desinstalar coisas ou comprar um SSD adicional.
        </p>
        <p>
          O dia 1 de download vai ser desafiador globalmente. A Rockstar tradicionalmente libera o pré-download
          (preload) 48 horas antes do lançamento — o que significa que, se a pré-venda estiver feita, o download pode
          começar em <strong>17 de novembro de 2026</strong>, garantindo que o jogador esteja pronto para começar à
          meia-noite local de 19 de novembro. Quem tem conexão lenta (até 50 Mbps) deve começar imediatamente quando o
          preload abrir; em 100 Mbps, leva entre 4 e 6 horas; em fibra de 500+ Mbps, menos de 1 hora.
        </p>

        <EditorialTake category="geek">
          <p>
            Minha posição sobre plataforma é direta: se você já tem PS5 ou Xbox Series, jogue no dia 1 sem dúvida. Se
            você ainda não tem console e prefere PC, esperar 2027 e jogar com hardware bom é uma decisão
            historicamente comprovada — GTA V no PC com mods virou plataforma definitiva da geração passada, e RDR2 no
            PC entrega a melhor versão do jogo. Para quem joga em PS4 ou Xbox One, a recomendação financeira mais
            inteligente é o Xbox Series S: por R$ 2.799 você entra na geração e roda GTA VI sem precisar de SSD
            adicional (o Series S vem com expansão fácil via cartão Seagate de 512 GB ou 1 TB). Sacrifica resolução,
            mas ganha acesso ao maior jogo da década no preço mais baixo da geração.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games — GTA VI", url: "https://www.rockstargames.com/VI", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "PlayStation Blog — GTA VI", url: "https://blog.playstation.com/", publisher: "Sony Interactive Entertainment", accessedAt: "Junho 2026" },
            { title: "Xbox Wire — GTA VI coverage", url: "https://news.xbox.com/en-us/", publisher: "Microsoft Xbox", accessedAt: "Junho 2026" },
            { title: "Eurogamer — GTA VI platform analysis", url: "https://www.eurogamer.net/", publisher: "Eurogamer", accessedAt: "Junho 2026" },
            { title: "Digital Foundry — GTA VI technical breakdown", url: "https://www.eurogamer.net/digitalfoundry", publisher: "Digital Foundry", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViPlataformasRequisitos2026;
