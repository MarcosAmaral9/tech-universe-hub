import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Waves, Clapperboard, Wind, Timer, Film, Target, Award } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarWaterImg from "@/assets/avatar-water-swimming.webp";

const AvatarCaminhoDaAgua = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/geek/avatar"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Avatar
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 2: O Caminho da Água – Análise Completa da Revolução em CGI e Simulação de Fluidos
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            26 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            14 min de leitura
          </span>
        </div>
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={avatarWaterImg}
          alt="Avatar O Caminho da Água - Simulação de fluidos revolucionária"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Treze anos após o original, <strong>Avatar: O Caminho da Água</strong> chegou para provar 
          que James Cameron ainda é o mestre absoluto em <strong>inovação tecnológica cinematográfica</strong>. 
          Desta vez, o desafio era ainda maior: criar <strong>água fotorrealista em CGI</strong> que 
          convencesse até os críticos mais exigentes.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/10 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-cyan-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Diretor:</strong> James Cameron</div>
            <div><strong>Bilheteria:</strong> US$ 2,3 bilhões</div>
            <div><strong>Tecnologia:</strong> Captura subaquática, HFR 48fps</div>
            <div><strong>Duração:</strong> 192 minutos</div>
            <div><strong>Onde assistir:</strong> Disney+, Blu-ray 4K</div>
            <div><strong>Prêmios:</strong> Oscar de Melhores Efeitos Visuais</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Award className="h-7 w-7 text-cyan-400" />
          Por Que Avatar 2 É um Marco Técnico?
        </h2>

        <p>
          Avatar 2 não apenas continuou a história de Jake Sully – ele <strong>redefiniu o que é 
          possível</strong> em simulação de fluidos para cinema. A Weta Digital desenvolveu 
          tecnologias completamente novas para renderizar água, espuma, bolhas e a interação 
          de personagens digitais com ambientes aquáticos.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🌊 A Tribo Metkayina
          </h3>
          <p className="text-muted-foreground mb-0">
            A nova tribo apresentada no filme, os <strong>Metkayina</strong>, vivem em harmonia 
            com o oceano de Pandora. Seus corpos são adaptados à água, com caudas mais largas 
            e braços mais fortes para nadar – cada detalhe anatômico foi projetado para parecer 
            biologicamente viável.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Waves className="h-7 w-7 text-cyan-400" />
          O Maior Desafio Técnico do Cinema: Renderizar Água
        </h2>

        <p>
          Renderizar água convincente é considerado um dos <strong>maiores desafios da computação 
          gráfica</strong>. Cada gota, cada onda, cada reflexo precisa seguir as leis da física 
          de forma imperceptível ao olho humano. Para Avatar 2, a Weta Digital desenvolveu 
          sistemas de simulação de fluidos que nunca haviam sido tentados antes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Waves className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Simulação de Ondas</h4>
            <p className="text-sm text-muted-foreground">
              Milhões de partículas simuladas individualmente para criar ondas que interagem 
              naturalmente com personagens, criaturas e objetos em tempo real.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Bolhas e Espuma</h4>
            <p className="text-sm text-muted-foreground">
              Sistema dedicado para simular bolhas de ar, espuma de onda e a forma como a luz 
              interage com cada camada de água e ar.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clapperboard className="h-7 w-7 text-cyan-400" />
          Captura de Performance Subaquática: Inovação Absoluta
        </h2>

        <p>
          O grande destaque técnico é a <strong>captura de performance subaquática</strong> – algo 
          que nunca havia sido feito na escala de Avatar 2. Os atores precisaram treinar 
          <strong> apneia profissional</strong> para que as bolhas de oxigênio não interferissem 
          nos sensores de motion capture.
        </p>

        <blockquote className="border-l-4 border-cyan-400 pl-6 my-8 italic text-muted-foreground">
          "Kate Winslet conseguiu ficar mais de 7 minutos debaixo d'água em uma única tomada. 
          Ela quebrou o recorde de Tom Cruise em Missão Impossível."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Timer className="h-7 w-7 text-cyan-400" />
          High Frame Rate (HFR): 48fps Para Fluidez Máxima
        </h2>

        <p>
          Avatar 2 foi filmado em <strong>48 frames por segundo</strong> (High Frame Rate), o dobro 
          do padrão cinematográfico de 24fps. Essa escolha técnica foi fundamental para cenas 
          aquáticas, criando uma experiência visual com fluidez nunca vista em cinema.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Por que HFR é Essencial para Cenas Aquáticas?</h3>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>✓ <strong>Menos motion blur:</strong> Cada gota de água permanece nítida em movimento</li>
            <li>✓ <strong>Movimentos suaves:</strong> Natação e movimentos fluidos parecem naturais</li>
            <li>✓ <strong>Imersão 3D aprimorada:</strong> O efeito tridimensional é significativamente mais convincente</li>
            <li>✓ <strong>Detalhes preservados:</strong> Reflexos e refrações da luz na água são capturados</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-cyan-400" />
          Os Tulkun: Criaturas Marinhas com Personalidade
        </h2>

        <p>
          Uma das maiores conquistas visuais do filme são os <strong>Tulkun</strong> – criaturas 
          marinhas gigantes que lembram baleias. Cada Tulkun foi animado com expressões emocionais 
          complexas, tornando-os personagens por direito próprio, com capacidade de transmitir 
          sentimentos ao espectador.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Criatura</th>
                <th className="text-left py-3 px-4 font-bold">Inspiração</th>
                <th className="text-left py-3 px-4 font-bold">Desafio Técnico</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Tulkun</td>
                <td className="py-3 px-4 text-muted-foreground">Baleias-jubarte e cachalotes</td>
                <td className="py-3 px-4 text-muted-foreground">Expressões faciais, pele molhada, escala massiva</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ilu</td>
                <td className="py-3 px-4 text-muted-foreground">Golfinhos e plesiossauros</td>
                <td className="py-3 px-4 text-muted-foreground">Movimentos ágeis, interação com montadores</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Skimwing</td>
                <td className="py-3 px-4 text-muted-foreground">Peixes voadores e raias</td>
                <td className="py-3 px-4 text-muted-foreground">Transição realista água-ar</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Recifes e corais</td>
                <td className="py-3 px-4 text-muted-foreground">Ecossistemas marinhos reais</td>
                <td className="py-3 px-4 text-muted-foreground">Bioluminescência subaquática</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Vale da Estranheza: Finalmente Superado</h2>

        <p>
          O filme provou que o CGI atingiu o <strong>"vale da estranheza"</strong> e o superou 
          definitivamente. Os Na'vi digitais expressam emoções humanas com perfeição – você 
          esquece que está assistindo personagens completamente digitais.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Pontos Positivos</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• CGI de água mais realista já produzido</li>
              <li>• Captura de performance subaquática inédita</li>
              <li>• HFR que melhora a experiência 3D</li>
              <li>• Worldbuilding expandido de Pandora</li>
              <li>• Oscar de Melhores Efeitos Visuais</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Considerações</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Duração extensa (3h12min)</li>
              <li>• Ritmo mais contemplativo</li>
              <li>• Melhor experiência em IMAX 3D</li>
              <li>• Requer assistir o primeiro filme</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão: Nova Referência Para CGI</h2>

        <p>
          Avatar: O Caminho da Água não é apenas uma sequência – é uma <strong>demonstração técnica 
          do que é possível</strong> quando visão artística encontra tecnologia de ponta. Cameron 
          mais uma vez estabeleceu um novo padrão que toda a indústria cinematográfica terá 
          que perseguir.
        </p>

        <p>
          Para quem se interessa por <strong>tecnologia de cinema</strong>, <strong>computação 
          gráfica</strong> ou <strong>efeitos visuais</strong>, Avatar 2 é estudo obrigatório. 
          O filme representa o estado da arte em simulação de fluidos para cinema.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual cena aquática mais te impressionou?
          </h3>
          <p className="text-muted-foreground">
            A perseguição com os Skimwings? O mergulho noturno bioluminescente? 
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="avatar-caminho-da-agua-fisica-fluidos" />
      <CommentSection postId="avatar-caminho-da-agua-fisica-fluidos" />
    </article>
  );
};

export default AvatarCaminhoDaAgua;
