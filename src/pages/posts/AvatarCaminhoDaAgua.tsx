import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Waves, Clapperboard, Wind, Timer } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarWaterImg from "@/assets/avatar-water.jpg";

const AvatarCaminhoDaAgua = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek/avatar"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Avatar
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar: O Caminho da Água – A Física dos Fluidos Levada ao Limite
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            15 de Janeiro, 2026
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
          src={avatarWaterImg}
          alt="Avatar Way of Water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Treze anos após o original, <strong>Avatar: O Caminho da Água</strong> chegou para provar 
          que James Cameron ainda não tinha terminado de revolucionar o cinema. Desta vez, o desafio 
          era ainda maior: renderizar <strong>água de forma fotorrealista</strong>.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/10 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🌊 O Mundo Metkayina
          </h3>
          <p className="text-muted-foreground mb-0">
            A nova tribo apresentada no filme, os <strong>Metkayina</strong>, vivem em harmonia com 
            o oceano de Pandora. Seus corpos são adaptados à água, com caudas mais largas e braços 
            mais fortes para nadar.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Waves className="h-7 w-7 text-cyan-400" />
          O Desafio Técnico: Água
        </h2>

        <p>
          Renderizar água convincente é um dos maiores desafios da computação gráfica. Cada gota, 
          cada onda, cada reflexo precisa seguir as leis da física. Para Avatar 2, a Weta Digital 
          desenvolveu novos sistemas de simulação de fluidos que nunca haviam sido tentados antes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Waves className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Simulação de Ondas</h4>
            <p className="text-sm text-muted-foreground">
              Milhões de partículas simuladas para criar ondas que interagem naturalmente com 
              os personagens e objetos.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Bolhas e Espuma</h4>
            <p className="text-sm text-muted-foreground">
              Sistema dedicado para simular bolhas de ar, espuma de onda e a forma como a luz 
              interage com cada uma delas.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clapperboard className="h-7 w-7 text-cyan-400" />
          Captura de Performance Subaquática
        </h2>

        <p>
          O grande destaque aqui é a <strong>captura de performance subaquática</strong>. Os atores 
          tiveram que treinar <strong>apneia</strong> (ficar sem respirar) para que as bolhas de 
          oxigênio não atrapalhassem os sensores da IA de movimento.
        </p>

        <blockquote className="border-l-4 border-cyan-400 pl-6 my-8 italic text-muted-foreground">
          "Kate Winslet conseguiu ficar mais de 7 minutos debaixo d'água em uma única tomada. 
          Ela quebrou o recorde de Tom Cruise em Missão Impossível."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Timer className="h-7 w-7 text-cyan-400" />
          Taxa de Quadros (HFR)
        </h2>

        <p>
          Avatar 2 foi filmado em <strong>48 frames por segundo</strong> (High Frame Rate), o dobro 
          do padrão cinematográfico. Isso torna a água e os movimentos extremamente fluidos, 
          criando uma experiência visual única.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Por que HFR importa para cenas aquáticas?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Menos motion blur:</strong> Cada gota de água fica nítida.</li>
            <li>✓ <strong>Movimentos suaves:</strong> Nadar parece natural, não "choppy".</li>
            <li>✓ <strong>Imersão 3D:</strong> O efeito tridimensional é muito mais convincente.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Os Tulkun: Baleias de Pandora</h2>

        <p>
          Uma das maiores conquistas visuais do filme são os <strong>Tulkun</strong> – criaturas 
          marinhas gigantes que lembram baleias. Cada Tulkun foi animado com expressões emocionais 
          complexas, tornando-os personagens por direito próprio.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold">Criatura</th>
                <th className="text-left py-3 px-4 font-bold">Inspiração</th>
                <th className="text-left py-3 px-4 font-bold">Desafio Técnico</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Tulkun</td>
                <td className="py-3 px-4 text-muted-foreground">Baleias-jubarte</td>
                <td className="py-3 px-4 text-muted-foreground">Expressões faciais, pele molhada</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ilu</td>
                <td className="py-3 px-4 text-muted-foreground">Golfinhos, plesiossauros</td>
                <td className="py-3 px-4 text-muted-foreground">Movimentos ágeis, interação com riders</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Skimwing</td>
                <td className="py-3 px-4 text-muted-foreground">Peixes voadores</td>
                <td className="py-3 px-4 text-muted-foreground">Transição água-ar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Vale da Estranheza Superado</h2>

        <p>
          O filme provou que o CGI atingiu o "vale da estranheza" e o superou. Os Na'vi digitais 
          agora expressam emoções humanas com perfeição. <strong>Você esquece que está assistindo 
          personagens digitais</strong> – eles simplesmente parecem reais.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão</h2>

        <p>
          Avatar: O Caminho da Água não é apenas uma sequência – é uma <strong>demonstração técnica 
          do que é possível</strong> quando visão artística encontra tecnologia de ponta. Cameron 
          mais uma vez moveu os postes do gol para toda a indústria.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual cena aquática mais te impressionou?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="avatar-caminho-da-agua-fisica-fluidos" />

      {/* Comments */}
      <CommentSection postId="avatar-caminho-da-agua-fisica-fluidos" />
    </article>
  );
};

export default AvatarCaminhoDaAgua;
