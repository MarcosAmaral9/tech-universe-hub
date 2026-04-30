import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Sword, Ship, Crown, Shield, Axe, Target, Tv, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import vikingsImg from "@/assets/vikings-ragnar.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const VikingsLegadoRagnar = () => {

  useEffect(() => {
    trackArticleRead("vikings-legado-ragnar-lothbrok", "Vikings: Vale a Pena Assistir em 2026? Review Completa da Série", "geek");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />

      <header className="mb-8">
        <CategoryBadge category="geek" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Vikings: Vale a Pena Assistir em 2026? Review Completa, Análise e Onde Assistir
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            07 de Fevereiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            16 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async"
          src={vikingsImg}
          alt="Vikings série - Ragnar Lothbrok e mitologia nórdica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Poucas séries conseguiram capturar a <strong>brutalidade e a espiritualidade da Era Viking</strong> 
          como a produção do History Channel. O que começou como a história de um simples fazendeiro 
          chamado <strong>Ragnar Lothbrok</strong> tornou-se uma saga épica sobre ambição, choque de 
          culturas e a transição entre deuses antigos e o cristianismo.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div><strong>Temporadas:</strong> 6 temporadas completas</div>
            <div><strong>Episódios:</strong> 89 episódios</div>
            <div><strong>Tempo Total:</strong> ~66 horas para assistir tudo</div>
            <div><strong>Gênero:</strong> Drama histórico, Ação, Aventura</div>
            <div><strong>Período:</strong> Era Viking (793-1066 d.C.)</div>
            <div><strong>Criador:</strong> Michael Hirst</div>
            <div><strong>Produtora:</strong> History Channel / MGM Television</div>
            <div><strong>Status:</strong> Finalizada (final fechado)</div>
            <div><strong>Spin-off:</strong> Vikings: Valhalla (Netflix)</div>
          </div>
        </div>

        {/* Where to Watch */}
        <div className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-background rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold mb-4">📺 Onde Assistir Legalmente</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-green-400">Netflix</strong>
              <p className="text-muted-foreground mb-0 mt-1">Todas as 6 temporadas disponíveis</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-green-400">Prime Video</strong>
              <p className="text-muted-foreground mb-0 mt-1">Disponível com assinatura ou aluguel</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-green-400">History Channel</strong>
              <p className="text-muted-foreground mb-0 mt-1">Canal original da série</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <strong className="text-green-400">Blu-ray/DVD</strong>
              <p className="text-muted-foreground mb-0 mt-1">Coleção completa disponível</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-purple-400" />
          Por Que Vikings É Tão Especial?
        </h2>

        <p>
          Diferente de outras produções sobre o período, Vikings focou no <strong>desenvolvimento 
          profundo dos personagens</strong>. A série não apresenta heróis unidimensionais – cada 
          personagem possui motivações complexas, falhas morais e arcos de desenvolvimento que 
          se estendem por múltiplas temporadas.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Sword className="h-6 w-6 text-geek" />
            Personagens Memoráveis
          </h3>
          <p className="text-muted-foreground mb-0">
            A série apresenta <strong>Lagertha</strong>, uma das maiores escudeiras da televisão, 
            e a ascensão dos filhos de Ragnar: o estrategista <strong>Ivar, o Desossado</strong>, 
            o explorador <strong>Bjorn Ironside</strong> e o devoto <strong>Ubbe</strong>. Cada 
            personagem carrega uma história complexa que prende o espectador episódio após episódio.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crown className="h-7 w-7 text-purple-400" />
          Contexto Histórico: A Era Viking (793-1066 d.C.)
        </h2>

        <p>
          A série se passa durante a <strong>Era Viking</strong>, um período de aproximadamente 300 anos 
          que transformou permanentemente a Europa. Este período começou oficialmente com o <strong>ataque 
          ao monastério de Lindisfarne em 793 d.C.</strong> — evento dramatizado no primeiro episódio.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">🌍 Geografia da Série</h3>

        <p>Vikings retrata com precisão várias regiões cruciais da época:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Escandinávia</h4>
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Kattegat</strong> (fictícia, baseada em vilarejos noruegueses), <strong>Uppsala</strong> 
              (centro religioso sueco) e diversas regiões da Noruega e Dinamarca.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Inglaterra</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Os reinos de <strong>Nortúmbria, Wessex, Mércia e Ânglia Oriental</strong>. A série mostra 
              com precisão a fragmentação política inglesa.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Francia (França)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Paris</strong> e a região do Sena, incluindo o histórico cerco de Paris (885-886 d.C.) 
              e a fundação da Normandia por Rollo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-purple-400">Mediterrâneo</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Expedições ao <strong>Norte da África, Sicília e o Império Bizantino</strong>, mostrando o 
              alcance das viagens vikings.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">⚔️ Realidade vs. Ficção</h3>
      <AdInArticle />

        <p>
          Embora a série tome liberdades criativas (como comprimir eventos e estender vidas de 
          personagens), ela acertou em cheio ao mostrar o <strong>modo de vida nórdico</strong>. 
          A produção investiu pesadamente em consultores históricos para garantir autenticidade 
          visual, cultural e religiosa.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Os Longships</h4>
            <p className="text-sm text-muted-foreground">
              A importância dos navios para exploração e as táticas de invasão que 
              transformaram a Europa medieval são retratadas com precisão histórica.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">As Escudeiras</h4>
            <p className="text-sm text-muted-foreground">
              O papel das mulheres na sociedade viking, incluindo guerreiras que 
              lutavam lado a lado com os homens, é explorado de forma respeitosa.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Axe className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Política Viking</h4>
            <p className="text-sm text-muted-foreground">
              A complexa política entre Jarls, reis, disputas de poder 
              e alianças temporárias é retratada com nuance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Mitologia Nórdica: Odin, Thor e o Destino</h2>

        <p>
          Um dos maiores acertos da série foi a forma como apresentou a <strong>mitologia nórdica</strong> 
          ao grande público. Os deuses como Odin, Thor e Freya não são apenas mencionados – eles 
          são parte integral da narrativa, influenciando as decisões dos personagens e seus destinos.
        </p>

        <blockquote className="border-l-4 border-geek pl-6 my-8 italic text-muted-foreground">
          "Os deuses não determinam o destino dos homens – eles apenas assistem enquanto os homens 
          fazem suas próprias escolhas."
          <footer className="mt-2 not-italic font-semibold">— Ragnar Lothbrok</footer>
        </blockquote>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-purple-400" />
          Prêmios e Reconhecimento
        </h2>

        <p>
          Apesar de não ter conquistado grandes prêmios da TV americana, Vikings recebeu reconhecimento 
          significativo ao longo de suas 6 temporadas:
        </p>

        <ul>
          <li><strong>Irish Film & Television Awards:</strong> Múltiplas vitórias por produção e atuação</li>
          <li><strong>Canadian Screen Awards:</strong> Indicações em categorias técnicas</li>
          <li><strong>Golden Reel Awards:</strong> Reconhecimento por edição de som</li>
          <li><strong>Hollywood Makeup Artist and Hair Stylist Guild Awards:</strong> Vitória por maquiagem de época</li>
        </ul>

        <p>
          A série também recebeu elogios de historiadores pela representação relativamente precisa da 
          cultura nórdica, diferenciando-se de produções sensacionalistas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-purple-400" />
          Vikings: Valhalla – O Spin-off na Netflix
        </h2>

        <p>
          O legado continua com <strong>Vikings: Valhalla</strong> na Netflix, que se passa 
          aproximadamente 100 anos após os eventos da série original.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4">📺 Vikings: Valhalla</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
            <div><strong>Temporadas:</strong> 3 temporadas completas</div>
            <div><strong>Episódios:</strong> 24 episódios</div>
            <div><strong>Tempo Total:</strong> ~18 horas</div>
            <div><strong>Plataforma:</strong> Netflix</div>
            <div><strong>Período:</strong> Início do século XI</div>
            <div><strong>Status:</strong> Finalizada (T3 é a última)</div>
          </div>
          <p className="text-muted-foreground mb-4">
            A produção foca em personagens históricos como <strong>Leif Eriksson</strong> (o descobridor da 
            América), <strong>Harald Sigurdsson</strong> (futuro rei da Noruega) e <strong>Olaf Haraldsson</strong> 
            (santo padroeiro da Noruega), explorando a cristianização da Escandinávia.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Foco em eventos históricos documentados</li>
            <li>✓ Novos personagens com arcos complexos</li>
            <li>✓ Produção visual de alta qualidade</li>
            <li>✓ Conexões sutis com a série original</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">⏱️ Quanto Tempo Leva Para Assistir Tudo?</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Série</th>
                <th className="text-left py-3 px-4 font-bold">Temporadas</th>
                <th className="text-left py-3 px-4 font-bold">Episódios</th>
                <th className="text-left py-3 px-4 font-bold">Tempo Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Vikings (Original)</td>
                <td className="py-3 px-4 text-muted-foreground">6</td>
                <td className="py-3 px-4 text-muted-foreground">89</td>
                <td className="py-3 px-4 text-muted-foreground">~66 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Vikings: Valhalla</td>
                <td className="py-3 px-4 text-muted-foreground">3</td>
                <td className="py-3 px-4 text-muted-foreground">24</td>
                <td className="py-3 px-4 text-muted-foreground">~18 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-purple-400">Total Combinado</td>
                <td className="py-3 px-4 text-purple-400">9</td>
                <td className="py-3 px-4 text-purple-400">113</td>
                <td className="py-3 px-4 text-purple-400">~84 horas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          👉 Se você assistir <strong>2 episódios por dia</strong>, levará aproximadamente <strong>45 dias</strong> 
          para completar ambas as séries. Para maratonas de fim de semana (8h/dia), cerca de <strong>10-11 finais de semana</strong>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Vikings Vale a Pena em 2026?</h2>

        <p>
          <strong>Absolutamente sim.</strong> Se você busca uma série que une <strong>ação visceral</strong> 
          com <strong>filosofia sobre destino e deuses</strong>, Vikings continua sendo obrigatória. 
          A produção conseguiu o raro feito de entreter enquanto educa, deixando um legado que 
          transcende o entretenimento.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Pontos Positivos</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Personagens com desenvolvimento profundo</li>
              <li>• Mitologia nórdica bem representada</li>
              <li>• Batalhas épicas e cinematográficas</li>
              <li>• 89 episódios de conteúdo</li>
              <li>• Spin-off disponível na Netflix</li>
              <li>• Final fechado e satisfatório</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Considerações</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Algumas liberdades históricas</li>
              <li>• Violência gráfica (não é para todos)</li>
              <li>• Ritmo desacelera em algumas temporadas</li>
              <li>• Mudança de protagonista após T4</li>
              <li>• Compromisso de ~66 horas de conteúdo</li>
            </ul>
          </div>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Dica para fãs de Vikings:</strong> Confira também nosso post sobre{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla
            </Link>, que captura a mesma atmosfera viking em formato de jogo interativo.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão: Uma Saga Épica Atemporal</h2>

        <p>
          Vikings permanece como uma das <strong>melhores séries históricas já produzidas</strong>. 
          A combinação de personagens complexos, batalhas épicas e exploração autêntica da cultura 
          nórdica criou uma obra que transcende seu gênero. Com <strong>final fechado</strong> e 
          um spin-off que continua a história, é o momento perfeito para maratonar ambas as séries.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual foi sua cena favorita de Vikings?
          </h3>
          <p className="text-muted-foreground">
            O ataque a Lindisfarne? A batalha de Kattegat? O ataque a Paris?
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="vikings-legado-ragnar-lothbrok" />
      <CommentSection postId="vikings-legado-ragnar-lothbrok" postTitle="Vikings: Vale a Pena Assistir em 2026? Review Completa da Série" />
    </article>
  );
};

export default VikingsLegadoRagnar;