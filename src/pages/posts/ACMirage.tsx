import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Moon, Target, Cpu, DollarSign, Laptop, Gamepad2, HelpCircle, Wind, Bomb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acMirageImg from "@/assets/ac-mirage.jpg";

const ACMirage = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Mirage vale a pena em 2026? Review completa do retorno às raízes da franquia em Bagdá, com análise de jogabilidade furtiva, requisitos de PC gamer e custo-benefício. */}
      
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
          Assassin's Creed Mirage em 2026 Vale a Pena? Review Completa, Furtividade Clássica, PC Ideal e Custo-Benefício
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
            12 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acMirageImg}
          alt="Assassin's Creed Mirage - Review 2026 furtividade PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após anos explorando mapas colossais na Grécia e Inglaterra, a Ubisoft decidiu atender ao clamor dos 
          fãs clássicos. <strong>Assassin's Creed Mirage</strong> é uma carta de amor ao primeiro jogo da franquia, 
          trocando o combate em campo aberto pela <strong>furtividade nas sombras</strong> e o <strong>parkour 
          frenético</strong> nas ruas de <strong>Bagdá do século IX</strong>.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O retorno às raízes valeu a pena?</strong></li>
          <li>👉 Como funciona o sistema de furtividade</li>
          <li>👉 Requisitos de PC gamer e notebook gamer</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Bordeaux</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">05/10/2023</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 150 a R$ 200</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">20 a 30 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Perfeito para iniciantes</strong> ou quem sente falta da furtividade clássica.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: Mirage Entrega o Prometido?
        </h2>

        <p>
          <strong>Sim</strong> — para quem esperava um jogo focado em <strong>furtividade e assassinatos 
          planejados</strong>. Mirage abandona a estrutura RPG de Valhalla em favor de uma experiência mais 
          linear, curta e focada.
        </p>

        <p>
          Acompanhamos a origem de <strong>Basim Ibn Ishaq</strong> (personagem de Valhalla). O jogo foca na 
          sua evolução dentro dos "Ocultos" na <strong>Fortaleza de Alamut</strong>. A narrativa lembra muito 
          a jornada de Altaïr, o protagonista original.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wind className="h-7 w-7 text-amber-400" />
          Bagdá: O Cenário Perfeito para Parkour
        </h2>

        <p>
          A cidade foi desenhada como um <strong>playground para assassinos</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Target className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Design Vertical</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Cada telhado, corda esticada e fardo de feno foi posicionado estrategicamente. Você nunca 
              precisa tocar o chão se não quiser.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Moon className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Social Stealth</h4>
            <p className="text-sm text-muted-foreground mb-0">
              IA de multidão aprimorada permite que Basim se misture aos grupos de pessoas para escapar 
              da guarda califal.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bomb className="h-7 w-7 text-amber-400" />
          Ferramentas do Assassino
        </h2>

        <p>
          Em Mirage, o foco está nas <strong>ferramentas</strong>, não em níveis de armas:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">💨</span>
            <span><strong>Bombas de fumaça:</strong> Essenciais para fugas rápidas.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">🗡️</span>
            <span><strong>Facas de arremesso:</strong> Silenciosas e letais à distância.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-500 font-bold">💤</span>
            <span><strong>Dardos soníferos:</strong> Neutralização não-letal.</span>
          </li>
        </ul>

        <p>
          O combate é mais <strong>punitivo</strong>: Basim não é um guerreiro viking. Se você for cercado, 
          as chances de sobrevivência são baixas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-amber-400" />
          Assassin's Focus: Tecnologia a Serviço do Estilo
        </h2>

        <p>
          O <strong>Assassin's Focus</strong> permite marcar e eliminar múltiplos alvos em sequência 
          ultra-rápida — representando a velocidade lendária dos mestres assassinos.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Prefere mundo aberto massivo? Confira nossa análise de{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla
            </Link>.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Requisitos de PC: Qual Configuração Roda Mirage?
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Ryzen 5 1600 ou Intel Core i7-4790K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB (dual channel)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 1060 (6 GB) ou RX 570 (4 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">40 GB SSD (obrigatório)</td>
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
                <td className="py-3 px-4 text-muted-foreground">Ryzen 5 5600X ou Intel i5-11600K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB (dual channel)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 3080 (10 GB) ou RX 6900 XT (16 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 Ideal para quem quer <strong>alta fidelidade visual em 4K</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-amber-400" />
          Notebook Gamer Roda Mirage?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>RTX 3050 / 3060 / 4050 ou superior</li>
          <li>Intel Core i7 ou Ryzen 7</li>
          <li>16 GB de RAM</li>
          <li>SSD obrigatório</li>
        </ul>

        <p className="text-destructive">
          ⚠️ <strong>O jogo exige SSD — não roda em HD mecânico.</strong>
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-amber-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Gráficos superiores em 4K</li>
              <li>✔ Promoções frequentes</li>
              <li>✔ Ray Tracing com RTX</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ Otimização garantida</li>
              <li>✔ 60 FPS estável no PS5/Series X</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Comprar Mirage em 2026?
        </h2>

        <p><strong>Vale a pena</strong> se você:</p>
        <ul>
          <li>Sente falta da furtividade clássica da franquia</li>
          <li>Prefere jogos mais curtos e focados (20-30 horas)</li>
          <li>Quer conhecer a origem de Basim</li>
          <li>Está cansado de RPGs com +100 horas</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 150 a R$ 200
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O retorno às raízes te agradou?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-mirage-retorno-raizes-bagda" />

      {/* Comments */}
      <CommentSection postId="ac-mirage-retorno-raizes-bagda" />
    </article>
  );
};

export default ACMirage;
