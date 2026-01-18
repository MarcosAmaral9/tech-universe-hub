import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Radio, Target, Users, Shield, Volume2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import hellLetLooseImg from "@/assets/hell-let-loose.jpg";

const HellLetLooseSimulador = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Geek
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="geek" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Hell Let Loose: Por que este é o simulador de guerra mais realista (e difícil) da atualidade?
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            17 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            7 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={hellLetLooseImg}
          alt="Hell Let Loose WWII"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você está acostumado com a rapidez de Call of Duty, prepare-se para um choque. 
          <strong> Hell Let Loose</strong> não é sobre quem atira mais rápido, mas sobre quem se 
          <strong> comunica melhor</strong>. Este FPS tático de Segunda Guerra Mundial coloca 
          <strong> 100 jogadores</strong> em um mapa imenso onde um único tiro pode ser fatal.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            ⚠️ Aviso aos Novatos
          </h3>
          <p className="text-muted-foreground mb-0">
            Este jogo tem uma curva de aprendizado íngreme. Espere morrer muito nas primeiras horas 
            enquanto aprende os mapas, mecânicas e, principalmente, como trabalhar em equipe.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-geek" />
          Diferenciais Técnicos e de Gameplay
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Radio className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Cadeia de Comando</h4>
            <p className="text-sm text-muted-foreground">
              O jogo exige um <strong>Comandante</strong> e líderes de esquadrão. Sem comunicação via 
              rádio, a derrota é certa. Cada posição tem responsabilidades específicas que afetam 
              diretamente o resultado da partida.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-bold mb-2">Gestão de Recursos</h4>
            <p className="text-sm text-muted-foreground">
              É necessário construir guarnições e gerenciar suprimentos para manter a linha de frente. 
              Munição, reforços e veículos dependem de uma logística bem executada.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">Realismo Balístico</h3>

        <p>
          A física das armas e o som ambiente criam uma atmosfera de <strong>"estresse de combate"</strong> 
          que poucos jogos conseguem replicar. Cada tiro conta, e o som de uma bala passando perto da 
          sua cabeça é genuinamente aterrorizante.
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-geek font-bold">•</span>
            <span><strong>Sem marcadores de mira:</strong> A maioria das armas não tem crosshair, forçando você a mirar de verdade.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-geek font-bold">•</span>
            <span><strong>Queda de bala realista:</strong> Tiros de longa distância exigem compensação.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-geek font-bold">•</span>
            <span><strong>Dano letal:</strong> Um ou dois tiros são suficientes para eliminar qualquer jogador.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          A Importância da Comunicação (O fator "Segurança")
        </h2>

        <p>
          Aqui entra um ponto interessante: o jogo é um <strong>estudo de caso sobre comunicação 
          segura e clara</strong>. Em Hell Let Loose, o "ruído" no chat de voz ou a falta de 
          informações precisas derrubam defesas inteiras – assim como uma falha de protocolo 
          derruba uma rede de TI.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
            <Volume2 className="h-6 w-6 text-primary" />
            Lições para a vida real
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Clareza na comunicação:</strong> Informações confusas custam vidas (no jogo) e projetos (na vida real).</li>
            <li>✓ <strong>Hierarquia funcional:</strong> Todo mundo tem um papel; respeitar isso é essencial.</li>
            <li>✓ <strong>Feedback constante:</strong> Sem resposta = sem coordenação.</li>
            <li>✓ <strong>Tomada de decisão sob pressão:</strong> O tempo é seu inimigo.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Classes Disponíveis</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold">Classe</th>
                <th className="text-left py-3 px-4 font-bold">Função</th>
                <th className="text-left py-3 px-4 font-bold">Dificuldade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Rifleman</td>
                <td className="py-3 px-4 text-muted-foreground">Infantaria básica, suprimentos extras</td>
                <td className="py-3 px-4"><span className="text-green-500">Fácil</span></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Officer</td>
                <td className="py-3 px-4 text-muted-foreground">Líder de esquadrão, coloca guarnições</td>
                <td className="py-3 px-4"><span className="text-yellow-500">Média</span></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Commander</td>
                <td className="py-3 px-4 text-muted-foreground">Coordena todo o time, chama suporte</td>
                <td className="py-3 px-4"><span className="text-red-500">Difícil</span></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Sniper</td>
                <td className="py-3 px-4 text-muted-foreground">Reconhecimento e eliminação a distância</td>
                <td className="py-3 px-4"><span className="text-yellow-500">Média</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4">Tank Crew</td>
                <td className="py-3 px-4 text-muted-foreground">Opera veículos blindados</td>
                <td className="py-3 px-4"><span className="text-red-500">Difícil</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão</h2>

        <p>
          Hell Let Loose é para quem busca <strong>imersão total</strong>. Não espere placares 
          individuais brilhantes; espere a satisfação de uma estratégia de flanqueamento bem 
          executada que mudou o rumo da partida. É um jogo que recompensa paciência, trabalho 
          em equipe e pensamento estratégico acima de reflexos rápidos.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-geek/20 to-background rounded-xl border border-geek/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam (versão mais popular)</li>
            <li>✓ <strong>PlayStation 5</strong></li>
            <li>✓ <strong>Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 120 (frequentemente em promoção nas Steam Sales)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você já jogou Hell Let Loose? Qual sua classe favorita?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="hell-let-loose-simulador-guerra" />

      {/* Comments */}
      <CommentSection postId="hell-let-loose-simulador-guerra" />
    </article>
  );
};

export default HellLetLooseSimulador;
