import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Landmark, Users, Wind, Heart, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acUnityImg from "@/assets/ac-unity.jpg";

const ACUnity = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Unity vale a pena em 2026? Review completa da obra-prima técnica em Paris, melhor parkour da série, requisitos de PC gamer exigentes e custo-benefício. */}
      
      {/* Back Button */}
      <Link
        to="/geek/assassins-creed"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Assassin's Creed
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Assassin's Creed
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Assassin's Creed Unity em 2026 Vale a Pena? Review Completa, Paris, Melhor Parkour, PC Ideal e Custo-Benefício
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            02 de Fevereiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            16 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acUnityImg}
          alt="Assassin's Creed Unity - Review 2026 Paris PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se existe um jogo que divide opiniões mas une todos quando o assunto é <strong>beleza gráfica</strong>, 
          esse jogo é <strong>Assassin's Creed Unity</strong>. Ambientado na turbulenta <strong>Revolução Francesa</strong>, 
          o título foi criticado no lançamento pelos bugs, mas hoje é reconhecido como a <strong>obra-prima 
          técnica</strong> da Ubisoft para <strong>PC gamer</strong>.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Unity é realmente o mais bonito da franquia?</strong></li>
          <li>👉 Por que o parkour de Unity é considerado o melhor</li>
          <li>👉 Requisitos de PC exigentes e custo-benefício</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Montreal</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">11/11/2014</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 50 a R$ 90</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">30 a 50 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Frequentemente gratuito</strong> em promoções — vale cada centavo.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-blue-400" />
          Review Geral: Unity é o AC Mais Bonito?
        </h2>

        <p>
          <strong>Sim</strong> — mesmo após mais de 10 anos, Unity continua sendo referência em gráficos. A 
          Paris de Unity não é apenas um mapa; é um <strong>organismo vivo</strong> com escala 1:1 de 
          monumentos como a <strong>Catedral de Notre-Dame</strong>.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Curiosidade:</strong> O modelo 3D de Notre-Dame do jogo foi usado como referência 
            para a reconstrução real da catedral após o incêndio de 2019.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-blue-400" />
          Tecnologia das Multidões (Crowd System)
        </h2>

        <p>
          O <strong>sistema de IA para multidões</strong> de Unity consegue renderizar até <strong>5.000 
          NPCs simultâneos</strong> na tela, cada um reagindo ao caos da revolução.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            ⚠️ <strong>Atenção:</strong> Isso exige processamento de CPU imenso — só máquinas potentes 
            conseguem rodar com fluidez em 4K.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wind className="h-7 w-7 text-blue-400" />
          O Ápice do Parkour e da Iluminação
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Movimentação</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Muitos fãs consideram o parkour de <strong>Arno Victor Dorian</strong> o melhor de toda a série. 
              Animações fluidas, pesadas e realistas.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Landmark className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Iluminação Global</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sistema de iluminação (baked lighting) que cria sombras e reflexos em ambientes internos 
              que ainda parecem "Next-Gen".
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-blue-400" />
          Arno e Elise: Uma História de Amor e Tragédia
        </h2>

        <p>
          No centro do caos político, temos a história de <strong>Arno</strong> (Assassino) e <strong>Elise</strong> 
          (Templária). Essa dinâmica de "Romeu e Julieta" no meio da queda da monarquia francesa traz uma 
          camada emocional que guia o jogador por missões de infiltração complexas.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Gosta de parkour urbano? Veja como Bagdá em{" "}
            <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-primary hover:underline">
              Assassin's Creed Mirage
            </Link>{" "}
            tentou resgatar o espírito de Unity.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-blue-400" />
          Requisitos de PC: Unity Ainda é Exigente?
        </h2>

        <p className="text-destructive font-bold">
          ⚠️ Sim! Unity continua sendo um dos ACs mais exigentes, especialmente para CPU.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 8350 ou Intel Core i5-2500K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 680 (2 GB) ou Radeon HD 7970</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">50 GB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1080p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX-8350 ou Intel Core i7-3770</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 780 (3 GB) ou Radeon R9 290X</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 Para <strong>60 FPS estáveis</strong>, considere hardware mais moderno (GTX 1070+ / RX 580+).
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-blue-400" />
          Notebook Gamer Roda Unity?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>GTX 1660 Ti / RTX 3050 ou superior</li>
          <li>Intel Core i7 ou Ryzen 7</li>
          <li>16 GB de RAM</li>
        </ul>

        <p className="text-destructive">
          ⚠️ <strong>Unity demanda CPU forte — notebooks de entrada terão dificuldades.</strong>
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-blue-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos possíveis</li>
              <li>✔ Frequentemente gratuito</li>
              <li>✔ Mods disponíveis</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ Otimização garantida</li>
              <li>✔ 60 FPS no PS5/Series X</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-blue-400" />
          Vale a Pena Comprar Unity em 2026?
        </h2>

        <p><strong>Absolutamente sim</strong> se você:</p>
        <ul>
          <li>Quer o AC mais bonito da franquia</li>
          <li>Valoriza parkour fluido e realista</li>
          <li>Se interessa pela Revolução Francesa</li>
          <li>Quer aproveitar as promoções frequentes (frequentemente gratuito)</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/20 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 50 a R$ 90 (frequentemente gratuito em promoções)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Unity é realmente o jogo mais bonito da franquia?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-unity-jogo-frente-tempo-paris" />

      {/* Comments */}
      <CommentSection postId="ac-unity-jogo-frente-tempo-paris" />
    </article>
  );
};

export default ACUnity;
