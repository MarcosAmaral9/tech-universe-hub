import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Star, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonReviewImg from "@/assets/crimson-desert-review.webp";

const CrimsonDesertReview = () => (
  <article className="container py-8 max-w-4xl mx-auto">
    <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Portal Crimson Desert
      </button>
      <Link to="/geek/crimson-desert" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-6 ml-4 transition-colors">
        ⬡ Ir ao portal
      </Link>

    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category="geek" size="lg" />
        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert</span>
      </div>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Crimson Desert Vale a Pena? O Que Previews e Primeiras Impressões Dizem
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>

    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={crimsonReviewImg} alt="Crimson Desert — primeiras impressões 2026" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </div>

    <div className="prose prose-lg dark:prose-invert max-w-none">

      <div className="not-prose mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Nota de transparência:</strong> Crimson Desert foi lançado em 19/03/2026.
          Este artigo é baseado em previews pré-lançamento publicados por veículos internacionais (IGN, GameSpot,
          Digital Foundry, TheGamer) e no conhecimento público sobre o jogo. Não inclui notas ou avaliações
          pós-lançamento — essas serão adicionadas assim que disponíveis.
        </p>
      </div>

      <p className="lead text-xl text-muted-foreground">
        Antes do lançamento, Crimson Desert passou por diversas sessões de preview com jornalistas de veículos
        internacionais. O consenso foi positivo em quase todos os aspectos testados, com ressalvas sobre
        a quantidade de sistemas e a curva de aprendizado. Reunimos aqui o que foi publicado.
      </p>

      <h2>O Que os Previews Disseram</h2>
      <p>
        As sessões de preview tinham entre 3 e 6 horas de duração, focando em áreas específicas do jogo.
        Os jornalistas não tiveram acesso à campanha completa, portanto as impressões refletem seções
        escolhidas pela Pearl Abyss para demonstração.
      </p>

      <h3>Combate — Unanimemente Positivo</h3>
      <p>
        O aspecto mais elogiado em todos os previews foi o sistema de combate. O IGN descreveu como
        "uma das sensações de combate mais satisfatórias em um RPG de mundo aberto em anos", destacando
        especialmente o peso físico de cada golpe causado pela engine de hit reactions.
      </p>
      <p>
        O GameSpot ressaltou os bosses: "cada boss é um evento, não apenas um inimigo maior — exigem
        leitura de padrões, movimentação e uso criativo do ambiente". A escala de algumas criaturas
        foi comparada a Shadow of the Colossus, mas com um sistema de ação muito mais rápido.
      </p>

      <h3>Mundo Aberto — Impressionante mas Denso</h3>
      <p>
        A WorldGamers e a TheGamer destacaram a densidade de conteúdo de Pywel como ponto forte e
        potencial ponto de atenção: o mundo é "recheado de sistemas" que podem intimidar jogadores
        que preferem experiências mais focadas.
      </p>
      <p>
        A diversidade visual dos biomas foi mencionada em praticamente todos os previews — florestas,
        desertos, montanhas e o contraste com a dimensão do Abismo foram elogiados pela coerência
        estética mesmo sendo ambientes muito diferentes entre si.
      </p>

      <h3>Narrativa — Promissora, Não Testada</h3>
      <p>
        Os previews tiveram acesso limitado à história. As cenas mostradas foram bem recebidas pelo
        tom sério e pela caracterização de Kliff — descrito como "protagonista com presença, não apenas
        um avatar mudo". Porém, com poucas horas de acesso, é impossível avaliar a narrativa completa
        antes do lançamento.
      </p>

      <h3>Performance Técnica — Destaque Positivo</h3>
      <p>
        A Digital Foundry publicou um preview técnico detalhado, concluindo que a BlackSpace Engine
        "supera a maioria das engines do mercado em mundo aberto contínuo", com draw distance
        excepcional e ausência de pop-in notável. O artigo completo está disponível no site da
        Digital Foundry.
      </p>

      <div className="not-prose my-8">
        <h3 className="font-bold text-xl mb-4">Resumo dos Pontos de Destaque</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-500/10 rounded-xl border border-green-500/20 p-5">
            <h4 className="font-bold text-green-400 mb-3">✅ Elogios nos Previews</h4>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Combate com peso físico real por golpe</li>
              <li>• Bosses de grande escala com design inventivo</li>
              <li>• BlackSpace Engine sem pop-in notável</li>
              <li>• Física de água descrita como "inédita em games"</li>
              <li>• Biomas visualmente distintos e coerentes</li>
              <li>• Performance acessível para o nível gráfico</li>
            </ul>
          </div>
          <div className="bg-yellow-500/10 rounded-xl border border-yellow-500/20 p-5">
            <h4 className="font-bold text-yellow-400 mb-3">⚠️ Pontos de Atenção</h4>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Quantidade de sistemas pode ser excessiva</li>
              <li>• Curva de aprendizado elevada no início</li>
              <li>• Narrativa não testada na íntegra pelos jornalistas</li>
              <li>• Sessões limitadas — sem visão do jogo completo</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Avaliações Pós-Lançamento</h2>
      <p>
        As avaliações da mídia especializada serão publicadas após o embargo de review, que expira
        junto com o lançamento do jogo em 19/03/2026. Acompanhe as notas no Metacritic e OpenCritic.
      </p>

      <h2>Vale a Pena Comprar?</h2>
      <p>
        Com base nos previews disponíveis, Crimson Desert demonstrou consistência técnica e criatividade
        no design de combate e mundo. Para quem aprecia RPGs de ação com profundidade mecânica e
        exploração de mundo aberto, os sinais são positivos.
      </p>
      <p>
        Para quem prefere esperar avaliações completas antes de decidir, o jogo não tem desconto
        previsto de lançamento — mas também não é um live service, então o preço não aumenta com
        o tempo e a experiência completa estará disponível desde o dia 1.
      </p>
      <p>
        Para informações sobre preços e edições do jogo, consulte a seção de ficha técnica acima — Standard ~R$ 349, Deluxe ~R$ 399 e Collector's Edition ~R$ 1.399.
      </p>
    </div>

    <RelatedPosts currentSlug="crimson-desert-review-2026" category="geek" />
    <CommentSection postId="crimson-desert-review-2026" postTitle="Crimson Desert — Primeiras Impressões" />
  </article>
);

export default CrimsonDesertReview;
