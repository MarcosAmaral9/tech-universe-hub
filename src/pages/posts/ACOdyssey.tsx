import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Ship, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle, Sparkles, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acOdysseyImg from "@/assets/ac-odyssey.jpg";

const ACOdyssey = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Odyssey vale a pena em 2026? Review completa do RPG épico na Grécia Antiga com Kassandra, mitologia, requisitos de PC gamer e análise de custo-benefício. */}
      
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
          Assassin's Creed Odyssey em 2026 Vale a Pena? Review Completa, Grécia Antiga, PC Ideal e Custo-Benefício
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
            14 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acOdysseyImg}
          alt="Assassin's Creed Odyssey - Review 2026 Grécia Antiga PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se existe um jogo que define a grandeza dos <strong>RPGs de mundo aberto</strong> modernos, esse jogo é 
          <strong> Assassin's Creed Odyssey</strong>. Transportando o jogador para o auge da <strong>Grécia Antiga</strong> 
          em meio à Guerra do Peloponeso, o título oferece um dos maiores mapas já criados, perfeito para quem tem 
          um <strong>PC gamer</strong> potente.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O maior mundo aberto da franquia vale a pena?</strong></li>
          <li>👉 Kassandra ou Alexios: qual escolher?</li>
          <li>👉 Requisitos de PC e custo-benefício em 2026</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Quebec</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">05/10/2018</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 80 a R$ 150</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">80 a 150 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Excelente custo-benefício</strong> para quem quer centenas de horas de conteúdo.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-blue-400" />
          Review Geral: Odyssey é o Melhor AC para Exploração?
        </h2>

        <p>
          <strong>Sim</strong> — se você valoriza <strong>liberdade e quantidade de conteúdo</strong>. Odyssey 
          abandonou definitivamente a linearidade dos primeiros títulos em favor de um RPG massivo com 
          escolhas que impactam a história.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-blue-400" />
          Kassandra ou Alexios: Qual Escolher?
        </h2>

        <p>
          Pela primeira vez na série, o jogador escolhe o gênero do protagonista. Embora ambos sigam a mesma 
          jornada como <strong>Misthios</strong> (mercenário), a atuação de voz de <strong>Kassandra</strong> 
          a tornou uma das personagens mais queridas da saga.
        </p>

        <p>
          Você não é apenas um assassino; você é um <strong>descendente direto do Rei Leônidas de Esparta</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-blue-400" />
          Um Mundo Vivo e Tecnológico
        </h2>

        <p>
          O mapa de Odyssey é um dos maiores já criados pela Ubisoft:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Batalhas Navais</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Retorno triunfal das batalhas marítimas. Física da água e IA dos navios criam confrontos 
              dinâmicos no Mar Egeu.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema de Mercenários</h4>
            <p className="text-sm text-muted-foreground mb-0">
              IA inspirada no sistema "Nemesis" de Shadow of Mordor — caçadores de recompensa perseguem 
              você em tempo real.
            </p>
          </div>
        </div>

        <p>
          A reconstrução de <strong>Atenas</strong>, com o Partenon em cores vibrantes, é uma aula de 
          arquitetura e computação gráfica.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-blue-400" />
          Entre a História e o Mito
        </h2>

        <p>
          O ponto onde o jogo brilha para fãs de fantasia são as batalhas contra <strong>criaturas 
          mitológicas</strong>:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🐍</span>
            <span><strong>Medusa:</strong> A górgona com olhar petrificante.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🐂</span>
            <span><strong>Minotauro:</strong> O monstro do labirinto de Creta.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🦁</span>
            <span><strong>Esfinge:</strong> O guardião enigmático com seus desafios.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-blue-400" />
          Sistema de Escolhas e Consequências
        </h2>

        <p>
          Em Odyssey, suas decisões importam. O final da sua família, o destino de cidades inteiras e quem 
          vive ou morre depende dos diálogos — isso dá ao jogo um <strong>fator replay altíssimo</strong>.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Gosta de guerreiros lendários? Veja também nossa análise sobre{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              AC Valhalla e o mundo dos Vikings
            </Link>.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-blue-400" />
          Requisitos de PC: Qual Configuração Roda Odyssey?
        </h2>

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
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6300 ou Intel Core i5 2400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 660 ou Radeon R9 285</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">46 GB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (4K – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Intel Core i7 7700 ou Ryzen 7 1700X</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 1080 (8 GB) ou Vega 64</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 Ideal para quem quer <strong>explorar a Grécia em toda sua glória visual</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-blue-400" />
          Notebook Gamer Roda Odyssey?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>RTX 3050 / 3060 ou superior</li>
          <li>Intel Core i7 ou Ryzen 7</li>
          <li>16 GB de RAM</li>
        </ul>

        <p className="text-destructive">
          ⚠️ <strong>Odyssey é um jogo exigente — evite configurações de entrada.</strong>
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-blue-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Gráficos superiores em 4K</li>
              <li>✔ Promoções frequentes</li>
              <li>✔ 60+ FPS com hardware adequado</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ 60 FPS no PS5/Series X</li>
              <li>✔ Otimização garantida</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-blue-400" />
          Vale a Pena Comprar Odyssey em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Ama RPGs longos com +100 horas de conteúdo</li>
          <li>Se interessa por mitologia grega</li>
          <li>Quer explorar um mundo aberto gigantesco</li>
          <li>Gosta de sistemas de escolhas com consequências</li>
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
            Preço médio: R$ 80 a R$ 150 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Kassandra ou Alexios? Qual protagonista você prefere?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-odyssey-odisseia-grecia" />

      {/* Comments */}
      <CommentSection postId="ac-odyssey-odisseia-grecia" />
    </article>
  );
};

export default ACOdyssey;
