import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Film, TrendingUp, History } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import SkeletonImage from "@/components/SkeletonImage";
import heroImg from "@/assets/gta-vi-trailers.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gta-vi-trailers-marketing-2026";
const TITLE = "Trailers de GTA VI: Do Vazamento de 2022 ao Trailer 2 Recorde e a Campanha de 2026";

const timeline = [
  { data: "Set/2022", evento: "Vazamento histórico", desc: "90 vídeos de desenvolvimento de GTA VI são vazados — maior vazamento da história dos games. Rockstar confirma autenticidade." },
  { data: "Nov/2023", evento: "Confirmação oficial", desc: "Rockstar anuncia que trailer chegará no início de dezembro, na semana do 25º aniversário da editora." },
  { data: "4/Dez/2023", evento: "Trailer 1", desc: "Liberado um dia antes do programado por causa de novo vazamento. 93 milhões de views em 24 horas — recorde mundial absoluto de trailer de game." },
  { data: "Mai/2024", evento: "Take-Two confirma janela", desc: "Janela inicial: outono de 2025 (set–nov)." },
  { data: "Nov/2024", evento: "Primeiro adiamento", desc: "Take-Two anuncia adiamento para outono de 2025 estendido — produção precisa de mais tempo." },
  { data: "Mai/2025", evento: "Trailer 2", desc: "Segundo trailer libera mais material visual. Confirma protagonistas Lucia e Jason. Adiamento formal para 26 de maio de 2026 anunciado em paralelo." },
  { data: "Nov/2025", evento: "Segundo adiamento", desc: "Take-Two move data para 19 de novembro de 2026. Justifica como polimento final." },
  { data: "Mai/2026", evento: "Confirmação final", desc: "CEO Strauss Zelnick confirma na conferência de resultados: lançamento mantido em 19/11/2026, campanha comercial começa no verão." },
  { data: "Jun-Jul/2026", evento: "Trailer 3 (esperado)", desc: "Janela estimada para terceiro trailer e abertura de pré-venda, com base na sinalização da Take-Two." },
];

const GtaViTrailersMarketing2026 = () => {
  useEffect(() => { trackArticleRead(SLUG, TITLE, "geek"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-pink-500/15 text-pink-300 rounded-full text-sm font-medium">
            GTA VI · Trailers · Marketing · Cronologia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Junho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="25 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage priority src={heroImg} alt="GTA VI trailers — TV CRT e claquete sob iluminação neon" width={1600} height={900} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O marketing de <strong>Grand Theft Auto VI</strong> é estudo de caso para escolas de comunicação. Em pouco
          mais de três anos, com apenas dois trailers oficiais lançados, a Rockstar Games construiu um nível de
          expectativa pública que nenhuma campanha publicitária paga conseguiria comprar. Este guia reconstrói a
          cronologia completa — do vazamento histórico de 2022 ao recorde mundial do Trailer 1, passando pelos
          adiamentos sucessivos e chegando à campanha de verão de 2026 que precede o lançamento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <History className="h-7 w-7 text-pink-400" /> O vazamento de setembro de 2022
        </h2>
        <p>
          A história moderna de GTA VI começa em <strong>18 de setembro de 2022</strong>, quando um hacker (depois
          identificado como Arion Kurtaj, do grupo Lapsus$) publicou 90 vídeos de desenvolvimento do jogo em um fórum
          de games. Os vídeos mostravam mecânicas, modelos de personagens, animações e ambientes em estado de
          desenvolvimento — uma janela rara e involuntária para dentro do processo da Rockstar. O vazamento foi tratado
          inicialmente como hoax, mas em 24 horas a Rockstar emitiu comunicado oficial confirmando autenticidade e
          informando que o desenvolvimento prosseguiria normalmente.
        </p>
        <p>
          O impacto do vazamento foi paradoxal. Por um lado, expôs trabalho não finalizado e levou a comparações
          injustas com o produto que seria entregue anos depois. Por outro, confirmou que GTA VI existia em
          desenvolvimento ativo, deu à comunidade uma primeira amostra de mapa (Vice City) e protagonistas, e gerou um
          ciclo de cobertura jornalística que efetivamente serviu de teaser involuntário. O caso terminou na justiça
          britânica: Kurtaj foi condenado em dezembro de 2023, no mesmo mês em que a Rockstar lançou o trailer oficial
          de GTA VI — coincidência simbólica notável.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-pink-400" /> Trailer 1 (dezembro de 2023): o recorde mundial
        </h2>
        <p>
          A Rockstar anunciou em novembro de 2023 que o primeiro trailer chegaria no início de dezembro — em comemoração
          ao 25º aniversário da editora. A data programada era <strong>5 de dezembro de 2023</strong>, mas um novo
          vazamento na noite anterior obrigou a Rockstar a antecipar o lançamento. Em <strong>4 de dezembro de 2023</strong>,
          às 9h horário do leste americano, o vídeo foi publicado simultaneamente no YouTube e na conta oficial da
          Rockstar no X (antigo Twitter).
        </p>
        <p>
          Os resultados foram inéditos. <strong>93 milhões de visualizações em 24 horas</strong> — quebrando o recorde
          mundial anterior de visualizações de um vídeo em 24 horas, que era do canal de MrBeast. Foi a primeira vez na
          história do YouTube que um trailer de game ocupou esse posto, e foi feito sem qualquer estratégia paga de
          impulsionamento: o crescimento foi totalmente orgânico, baseado no compartilhamento espontâneo da comunidade.
          Em uma semana, o vídeo passou de 150 milhões; em um mês, 200 milhões; e em meados de 2026 já ultrapassava
          250 milhões de visualizações cumulativas no canal oficial — sem contar republicações e análises em outros
          canais que totalizam outras centenas de milhões.
        </p>
        <p>
          O conteúdo do Trailer 1 foi cuidadosamente curado para revelar o mínimo necessário maximizando impacto.
          Confirmou Lucia como protagonista (mostrada em destaque, em cena de prisão), apresentou Vice City
          modernizada, ofereceu vislumbres de Leonida e da Flórida fictícia, e estabeleceu o tom estético — neon,
          calor tropical, sátira da cultura digital, herança do filme noir. A trilha sonora foi "Love Is a Long Road"
          de Tom Petty, escolha emocional que estabeleceu paralelo com Bonnie & Clyde e cinema road movie americano.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-pink-400" /> Trailer 2 (maio de 2025): aprofundando o material
        </h2>
        <p>
          Quase 17 meses depois do primeiro trailer, em <strong>6 de maio de 2025</strong>, a Rockstar liberou o
          Trailer 2 — desta vez na data programada, sem vazamento. O vídeo foi significativamente mais longo (mais de
          três minutos) e ofereceu primeira visualização clara de Jason como segundo protagonista, da dinâmica entre
          ele e Lucia, do escopo do mapa de Leonida (com cenas em pântanos, praias, cidades menores e Vice City densa),
          e de mecânicas centrais que o Trailer 1 havia deixado implícitas (combate, direção, ambiente social).
        </p>
        <p>
          O impacto comercial do Trailer 2, embora não tenha repetido o recorde absoluto do Trailer 1 (que era
          praticamente impossível de superar), foi enorme em métricas qualitativas. A discussão crítica nos veículos
          especializados foi mais profunda — agora havia material suficiente para análises técnicas detalhadas de
          gráficos, física, IA de NPCs e design de mundo. Em paralelo ao trailer, a Take-Two anunciou formalmente o
          adiamento para 26 de maio de 2026, com Strauss Zelnick justificando a decisão como necessidade de polimento
          adicional.
        </p>
        <p>
          A trilha sonora do Trailer 2 foi "Hot Together" de The Pointer Sisters, novamente escolha que reforçou a
          ambientação estética (música pop dançante dos anos 1980, coerente com a referência a Miami) e a dinâmica
          romântica entre os protagonistas. A Rockstar tem uma curadoria musical consistentemente excelente, e a
          escolha de cada trailer parece intencionalmente trabalhada para ressoar com a estética do jogo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Os adiamentos: o que cada um significou</h2>
        <p>
          GTA VI sofreu dois adiamentos formais. O primeiro, anunciado em novembro de 2024, moveu o jogo de "outono de
          2025" para "primeiro semestre de 2026", culminando com a data específica de 26 de maio de 2026 confirmada em
          maio de 2025 junto com o Trailer 2. O segundo, anunciado em novembro de 2025, moveu a data de 26 de maio de
          2026 para <strong>19 de novembro de 2026</strong>. A justificativa pública em ambos os casos foi "garantir o
          padrão de qualidade que a franquia merece" — linguagem padrão para "ainda não está pronto".
        </p>
        <p>
          Adiamentos são, historicamente, controversos na comunidade. Geram frustração imediata e alimentam teorias
          conspiratórias sobre problemas internos. Mas o histórico da Rockstar com adiamentos é positivo: Red Dead
          Redemption 2 foi adiado duas vezes antes do lançamento de outubro de 2018 e se tornou um dos jogos mais
          aclamados da história. GTA V também sofreu adiamento antes do lançamento de 2013. A lição padrão é que a
          Rockstar prefere atrasar um jogo a entregar com problemas — e essa filosofia se traduz em produtos
          historicamente bem polidos.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-4">A campanha do verão de 2026: o que esperar</h2>
        <p>
          Em <strong>maio de 2026</strong>, na conferência de resultados do quarto trimestre fiscal da Take-Two, o CEO
          Strauss Zelnick confirmou que a "campanha comercial de marketing de GTA VI começa no verão" — usando
          terminologia padrão da indústria que aponta para junho, julho ou agosto. Essa é a janela mais provável para
          o Trailer 3 oficial e para a abertura simultânea da pré-venda nas lojas oficiais.
        </p>
        <p>
          A partir do Trailer 3, a expectativa é que o ritmo de comunicação acelere significativamente. A Rockstar
          tradicionalmente libera material de marketing em camadas: trailer principal, depois trailer focado em
          personagens, depois trailer focado em mundo, depois trailer de gameplay, e finalmente trailer de
          lançamento. Em RDR2, esse ciclo durou de junho a outubro de 2018; em GTA V, durou de maio a setembro de
          2013. Aplicando aos quatro meses entre julho e novembro de 2026, é razoável esperar quatro a seis peças de
          marketing significativas, incluindo screenshots oficiais, posts em blog detalhando aspectos específicos
          (combate, online, mapa) e possíveis "deep dives" de gameplay.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Linha do tempo completa</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-pink-500/20">
          <table className="w-full text-sm bg-card table-fixed">
            <thead>
              <tr className="bg-pink-500/10 text-pink-200">
                <th className="w-[18%] text-left py-3 px-4 font-bold">Data</th>
                <th className="w-[27%] text-left py-3 px-4 font-bold">Evento</th>
                <th className="w-[55%] text-left py-3 px-4 font-bold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((t, i) => (
                <tr key={t.data + t.evento} className={`border-t border-border/60 ${i % 2 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-4 text-xs font-bold text-pink-400 uppercase tracking-wider break-words">{t.data}</td>
                  <td className="py-3 px-4 font-semibold text-sm break-words">{t.evento}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground break-words">{t.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <h2 className="text-2xl font-bold mt-10 mb-4">A estratégia de escassez como diferencial</h2>
        <p>
          O que torna o marketing de GTA VI singular é a estratégia de escassez deliberada. Em uma era em que jogos AAA
          tipicamente fazem marketing constante (trailer mensal, gameplay reveal trimestral, comunicação semanal em
          redes sociais), a Rockstar optou pelo extremo oposto: dois trailers em quase três anos, com silêncio
          praticamente total nos intervalos. Cada peça de comunicação ganha peso amplificado porque é rara.
        </p>
        <p>
          Essa estratégia funciona por causa do tamanho da marca. GTA é uma das poucas franquias de games com
          reconhecimento cultural amplo o suficiente para sustentar interesse com pouca alimentação. Para outras
          marcas, a escassez seria suicida (público esqueceria); para GTA, a escassez vira hype amplificado. A Take-Two
          claramente entendeu essa equação e a executou com disciplina. Cada análise feita em milhões de canais nas
          centenas de dias entre trailers funciona como marketing gratuito de altíssima qualidade.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Comparação com outros lançamentos históricos</h2>
        <p>
          Para contextualizar a escala: GTA V em 2013 vendeu 11,2 milhões de cópias nas primeiras 24 horas, gerando
          US$ 800 milhões em receita — então o recorde absoluto de qualquer produto de entretenimento. Em três dias,
          chegou a US$ 1 bilhão. GTA V, somando todas as plataformas e relançamentos, vendeu mais de 215 milhões de
          cópias até 2026, segundo dados da Take-Two — número que coloca o jogo entre os produtos de entretenimento
          mais vendidos da história em qualquer mídia.
        </p>
        <p>
          GTA VI tem expectativa de superar significativamente esses números. Análises de mercado projetam vendas de 30
          a 50 milhões de cópias nos primeiros seis meses — três a cinco vezes o lançamento de GTA V. Em receita, a
          projeção é US$ 2 a 3 bilhões nos primeiros seis meses, considerando o preço médio mais alto e a base
          instalada significativamente maior de PS5 e Xbox Series. Mesmo nas projeções mais conservadoras, GTA VI deve
          ser o lançamento de entretenimento mais lucrativo da história em uma única janela de tempo.
        </p>

        <EditorialTake category="geek">
          <p>
            Marketing de GTA VI é mais do que estratégia comercial: virou pedagogia involuntária sobre como comunicar
            em uma era de saturação de informação. A Rockstar mostrou que silêncio bem cuidado pode ser mais alto que
            barulho. Mostrou que confiar no produto e na marca pode dispensar campanha paga. Mostrou que adiar para
            entregar polido vale mais do que cumprir prazo arbitrário. Tudo isso vale para qualquer indústria que
            depende de atenção: música, cinema, software, moda. Quem analisa o marketing de GTA VI puramente como "caso
            de jogos" perde o ponto. É um manual moderno de comunicação de marca premium. E, se o produto entregar em
            novembro o que os trailers prometem, vai ser também um manual de gestão de expectativa cumprida.
          </p>
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Rockstar Games Newswire — Trailer 1", url: "https://www.rockstargames.com/newswire", publisher: "Rockstar Games", accessedAt: "Junho 2026" },
            { title: "Take-Two Investor Relations — earnings calls", url: "https://ir.take2games.com/", publisher: "Take-Two Interactive", accessedAt: "Maio 2026" },
            { title: "BBC — GTA VI leak hacker conviction", url: "https://www.bbc.com/news", publisher: "BBC News", accessedAt: "Junho 2026" },
            { title: "Variety — GTA VI Trailer 1 YouTube record", url: "https://variety.com/", publisher: "Variety", accessedAt: "Junho 2026" },
            { title: "The Verge — GTA VI marketing analysis", url: "https://www.theverge.com/", publisher: "The Verge", accessedAt: "Junho 2026" },
          ]}
        />

        <RelatedPosts currentSlug={SLUG} />
        <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
      </div>
    </article>
  );
};

export default GtaViTrailersMarketing2026;
