import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, MapPin, Trees, Waves, Building2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-mapa-leonida.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gta-vi-mapa-leonida-vice-city-2026";
const TITLE = "Mapa de Leonida em GTA VI: Vice City, Keys, Everglades e Tudo Confirmado nos Trailers Oficiais";

const regioes = [
  { nome: "Vice City", inspiracao: "Miami", desc: "Coração do mapa. Metrópole densa com arranha-céus, distrito art deco, praias urbanas, bairros latinos e vida noturna intensa.", visto: "Trailer 1 e 2" },
  { nome: "Leonida Keys", inspiracao: "Florida Keys", desc: "Arquipélago de ilhas ao sul de Vice City, ligadas por pontes longas. Ambiente costeiro com pesca, marinas e turismo." , visto: "Trailer 2" },
  { nome: "Port Gellhorn", inspiracao: "Cidade portuária menor", desc: "Cidade pequena com porto industrial, bairros operários e cena agressiva diferente da glamourização de Vice City.", visto: "Trailer 2" },
  { nome: "Mount Kalaga National Park", inspiracao: "Florida interior", desc: "Reserva natural com cobertura florestal, trilhas, lagos e fauna selvagem.", visto: "Trailer 2" },
  { nome: "Ambrosia", inspiracao: "Cidade rural", desc: "Comunidade pequena de interior, com igreja, posto de gasolina e estética sul-americana caipira da Flórida.", visto: "Trailer 2" },
  { nome: "Pântanos (Everglades fictícios)", inspiracao: "Everglades", desc: "Região sul-oeste dominada por mangues, jacarés e canais navegáveis. Ambiente hostil e visualmente distinto.", visto: "Trailer 2" },
];

const GtaViMapaLeonida2026 = () => {
  useEffect(() => { trackArticleRead(SLUG, TITLE, "geek"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Mapa · Leonida · Vice City
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Junho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI mapa — peninsula tropical inspirada na Flórida" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>estado fictício de Leonida</strong> é o cenário de GTA VI — uma versão modernizada e satírica da
          Flórida que abrange a metrópole de Vice City, arquipélagos litorâneos, pântanos e interior rural. Este guia
          mapeia exatamente o que a Rockstar mostrou nos dois trailers oficiais, separa especulação não confirmada de
          dado verificado e contextualiza Leonida em relação aos mapas anteriores da franquia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-pink-400" /> Leonida como estado completo
        </h2>
        <p>
          A escolha da Rockstar de ambientar GTA VI em um <strong>estado inteiro</strong>, não em uma cidade única, é
          uma mudança estrutural em relação a GTA V (que se passava em San Andreas, um estado fictício, mas com
          concentração quase total em Los Santos e arredores) e às entregas anteriores que centravam em metrópoles
          únicas (GTA IV em Liberty City, GTA III em Liberty City também). Leonida explicitamente abrange múltiplas
          cidades de tamanhos diferentes, biomas variados e ambientes culturalmente distintos — uma estrutura mais
          próxima de Red Dead Redemption 2 (que apresentava múltiplas cidades e biomas em um continente fictício
          inspirado no Oeste americano).
        </p>
        <p>
          O paralelo geográfico com a Flórida real é evidente. Vice City corresponde a Miami; Leonida Keys
          corresponde claramente aos Florida Keys; os pântanos correspondem aos Everglades; e o interior rural ecoa
          regiões agrícolas da Flórida central e do norte. A Rockstar sempre usa essa estratégia de "caricatura
          fiel" — referência geográfica real exagerada com sátira cultural — e Leonida segue exatamente esse
          padrão. Não há, no entanto, qualquer mapa oficial publicado pela Rockstar até o momento. Tudo que sabemos
          do mapa vem da análise quadro a quadro dos trailers e do material promocional limitado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building2 className="h-7 w-7 text-pink-400" /> Vice City: o coração metropolitano
        </h2>
        <p>
          Vice City retorna como cidade principal do jogo, agora reimaginada em escala moderna. A primeira Vice City,
          em Grand Theft Auto: Vice City (2002), foi uma das ambientações mais icônicas da franquia, com estética
          baseada em Miami dos anos 1980. A nova Vice City em GTA VI é claramente uma versão contemporânea, com
          arranha-céus altos, distrito financeiro denso, áreas comerciais de luxo (boutiques, hotéis, restaurantes
          sofisticados) e áreas operárias e periféricas com estética latina forte — coerente com a presença histórica
          de comunidades cubana, dominicana, brasileira e haitiana na Miami real.
        </p>
        <p>
          O Trailer 1 dedicou boa parte do tempo a Vice City: cenas em praia urbana com multidões, vida noturna em
          clubes, ruas com palmeiras, tráfego intenso, multidão em pista de corrida de rua, viaduto elevado com
          arranha-céus ao fundo. O Trailer 2 expandiu mostrando bairros mais residenciais, casas em estilo Mediterrâneo
          típicas de Miami, condomínios de luxo, marinas particulares e a iconografia art deco do South Beach. A
          densidade visível é significativamente maior que Los Santos em GTA V — mais NPCs por rua, mais veículos
          simultâneos, mais detalhes ambientais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Waves className="h-7 w-7 text-pink-400" /> Leonida Keys: o arquipélago ao sul
        </h2>
        <p>
          Uma das adições mais visualmente impressionantes mostradas no Trailer 2 são as <strong>Leonida Keys</strong>,
          arquipélago de ilhas conectadas por pontes longas ao sul de Vice City. A inspiração nos Florida Keys reais é
          óbvia: ilhas pequenas com vegetação tropical, marinas, bares de praia, casas sobre palafitas, e a icônica
          ponte de muitos quilômetros conectando o continente às ilhas (paralelo direto com a Seven Mile Bridge nos
          Keys reais). Essa região oferece à Rockstar um terreno único de gameplay — perseguições aquáticas longas,
          missões de contrabando marítimo, pesca, mergulho.
        </p>
        <p>
          Para a estrutura do jogo, Leonida Keys provavelmente funciona como zona de progressão tardia — área
          inicialmente menos acessível, com missões e atividades que se desbloqueiam à medida que o jogador avança na
          história principal. RDR2 usou estrutura similar com a região de Saint Denis e ilhas próximas. Em GTA VI, a
          combinação de pontes longas, ilhas pequenas e mar aberto cria oportunidade de design de missões que GTA V
          nunca conseguiu explorar com profundidade.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Trees className="h-7 w-7 text-pink-400" /> Pântanos, Mount Kalaga e o interior
        </h2>
        <p>
          O Trailer 2 dedicou tempo significativo a mostrar ambientes não urbanos. A região de <strong>pântanos
          fictícios</strong> (paralelo aos Everglades reais) aparece em várias cenas — canais navegáveis cercados por
          mangues densos, jacarés visíveis na água e na terra, cabanas isoladas, hidroaviões. Essa região oferece um
          contraste estético total com Vice City: paleta de cores naturais, ambiente hostil, fauna selvagem e ausência
          de civilização densa.
        </p>
        <p>
          <strong>Mount Kalaga National Park</strong> aparece como reserva natural com cobertura florestal mais densa,
          trilhas, lagos e fauna típica do interior da Flórida (cervos, ursos, pássaros). É a versão Leonida do que o
          Mount Chiliad foi em GTA V e o que diversos parques naturais foram em RDR2 — área de exploração ambiental com
          ritmo de gameplay completamente distinto da metrópole. Não está claro nos trailers se Mount Kalaga será uma
          área específica de missões ou apenas elemento de cenário, mas o destaque visual sugere papel mais
          significativo.
        </p>
        <p>
          <strong>Port Gellhorn</strong> aparece como cidade portuária menor — uma comunidade industrial em torno de um
          porto comercial, com bairros operários e estética distinta de Vice City. <strong>Ambrosia</strong> aparece
          como pequena comunidade rural com igreja, posto de gasolina e estética caipira sul-americana, comum no
          interior da Flórida real. Essas cidades pequenas, junto com os ambientes naturais, criam a sensação de
          estado completo — Vice City não é tudo que existe em Leonida.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Regiões confirmadas (resumo)</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card table-fixed">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="w-1/4 text-left py-3 px-4 font-bold">Região</th>
                <th className="w-1/5 text-left py-3 px-4 font-bold">Inspiração real</th>
                <th className="w-2/5 text-left py-3 px-4 font-bold">Descrição</th>
                <th className="w-[15%] text-left py-3 px-4 font-bold">Visto em</th>
              </tr>
            </thead>
            <tbody>
              {regioes.map((r, i) => (
                <tr key={r.nome} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 font-semibold break-words">{r.nome}</td>
                  <td className="py-3 px-4 text-muted-foreground break-words">{r.inspiracao}</td>
                  <td className="py-3 px-4 text-xs break-words">{r.desc}</td>
                  <td className="py-3 px-4 text-xs text-pink-300 break-words">{r.visto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">Tamanho do mapa: o que se sabe e o que não se sabe</h2>
        <p>
          A pergunta sobre tamanho do mapa é talvez a mais especulada e ao mesmo tempo a com menos confirmação
          oficial. A Rockstar Games <strong>nunca</strong> divulgou tamanho oficial em quilômetros quadrados de
          nenhum dos mapas da franquia — todos os números que circulam são estimativas de comunidade baseadas em
          medição manual de tempo de travessia ou em análise de minimap. GTA V, por exemplo, é frequentemente citado
          como tendo "81 km²" (incluindo oceano), mas esse número vem de estimativas de fãs, não de comunicação
          oficial. Para o mapa explorável em terra, estimativas variam de 49 km² a 81 km² dependendo da metodologia.
        </p>
        <p>
          Aplicado a GTA VI, qualquer afirmação específica sobre tamanho exato (como "2x maior", "3x maior", "200
          km²") deve ser tratada como especulação. O que dá para afirmar com segurança, baseado em análise dos
          trailers, é que <strong>Leonida é significativamente maior que San Andreas de GTA V</strong>. A
          variedade de biomas mostrada, a presença de múltiplas cidades distintas, a inclusão de arquipélago,
          pântanos extensos e reserva natural sugere um mapa estruturalmente mais ambicioso. Mas "ambicioso" não
          significa necessariamente "duas vezes maior em quilômetros quadrados" — pode significar "mais denso", "mais
          variado" ou "com mais conteúdo por área".
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Comparação com mapas anteriores da franquia</h2>
        <p>
          Vale lembrar o que a franquia já entregou em escala de mapa. <strong>GTA III</strong> (2001) tinha Liberty
          City dividida em três ilhas pequenas, com cerca de 8 km² no total. <strong>Vice City</strong> (2002) ficou em
          escala parecida, ambientada em uma cidade compacta. <strong>San Andreas</strong> (2004) revolucionou ao
          oferecer um estado inteiro com três cidades (Los Santos, San Fierro, Las Venturas) e interior rural, com cerca
          de 36 km² — escala enorme para a época. <strong>GTA IV</strong> (2008) voltou para Liberty City em escala
          urbana densa (~12 km²). <strong>GTA V</strong> (2013) ampliou para San Andreas reduzido a Los Santos e
          interior (~75–81 km²).
        </p>
        <p>
          Leonida em GTA VI é, claramente, a próxima evolução desse arco. A presença de Vice City moderna (provável
          mais densa que Los Santos), Leonida Keys como expansão geográfica, e múltiplas cidades menores no interior
          sugere algo na ordem de <strong>100 a 200 km²</strong> de mapa explorável — mas, novamente, qualquer número
          específico nessa faixa é estimativa. Para o jogador, o que importa não é o número em si: é a sensação de
          variedade e densidade. E nessa métrica, os trailers entregam expectativa altíssima.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Locais especulados mas não confirmados</h2>
        <p>
          A comunidade identificou dezenas de possíveis locais específicos a partir de análises quadro a quadro dos
          trailers — bairros particulares de Vice City inspirados em locais reais de Miami (Wynwood, Brickell, Little
          Havana), possíveis cidades menores ainda não mostradas em destaque, e suposições sobre área norte do mapa
          (que apareceu pouco nos dois trailers). A Rockstar não confirmou nenhuma dessas identificações específicas.
          Esses detalhes são plausíveis dado o padrão da editora de referência cultural densa, mas até que apareçam em
          material oficial, ficam no terreno da especulação informada.
        </p>
        <p>
          O Trailer 3, esperado para o verão de 2026, deve revelar significativamente mais do mapa — provavelmente
          com cenas mais longas em regiões específicas e possivelmente algum vislumbre do minimap em uso. Análises
          definitivas do mapa só serão possíveis depois do lançamento em 19 de novembro, quando jogadores poderão
          medir, comparar e documentar a geografia completa.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O papel narrativo do mapa</h2>
        <p>
          A estrutura de mapa de Leonida sugere ambição narrativa específica. A combinação de metrópole densa,
          arquipélago turístico, pântanos hostis e interior rural não é apenas variedade visual — é estrutura para
          arcos de história diferentes. A dupla Lucia e Jason, em uma narrativa estilo Bonnie & Clyde, pode mover-se
          entre esses ambientes em busca de oportunidades, fugindo de perseguições, escondendo-se em ambientes
          isolados. Cada região oferece tipo distinto de conflito, fauna humana distinta e oportunidades de gameplay
          diferentes.
        </p>
        <p>
          Esse uso do mapa como elemento estrutural da narrativa foi uma das forças centrais de RDR2, onde a
          movimentação entre Saint Denis (cidade), Lemoyne (pântanos), Big Valley (montanhas) e Lemoyne (planícies)
          servia a momentos específicos da história da gang. GTA VI parece adotar abordagem similar — usar o mapa
          não apenas como playground, mas como instrumento narrativo. Para jogadores que valorizam essa coesão entre
          ambientação e história, é talvez o sinal mais promissor que os trailers oferecem.
        </p>

        <EditorialTake category="geek">
          <p>
            Leonida me parece a aposta estrutural mais ambiciosa da Rockstar desde RDR2. Apostar em estado completo, em
            vez de cidade única, força a equipe de design a trabalhar variedade real — não apenas pintar mais bairros
            urbanos. A presença de Keys, pântanos, interior e metrópole densa em um único mapa explorável significa que
            o jogo precisa ter quatro vocabulários de design diferentes funcionando bem (combate urbano, perseguição
            aquática, exploração natural, gameplay rural). Se a Rockstar entregar todos os quatro em alto nível, GTA VI
            estabelece novo patamar de mundo aberto. Se falhar em um, a falha vai ser notada — porque o jogador vai
            comparar com os outros três. É um risco calculado, mas é risco. E é exatamente esse tipo de aposta que
            justifica os adiamentos: melhor entregar quatro biomas excelentes que oito medíocres.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games — GTA VI Trailer 1 (YouTube)", url: "https://www.youtube.com/watch?v=QdBZY2fkU-0", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "Rockstar Games — Newswire (Trailer 2 release)", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "IGN — GTA VI map analysis", url: "https://www.ign.com/games/grand-theft-auto-vi", publisher: "IGN", accessedAt: "Junho 2026" },
            { title: "Eurogamer — Leonida geography breakdown", url: "https://www.eurogamer.net/", publisher: "Eurogamer", accessedAt: "Junho 2026" },
            { title: "GameSpot — GTA VI locations identified", url: "https://www.gamespot.com/games/grand-theft-auto-vi/", publisher: "GameSpot", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViMapaLeonida2026;
