import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Gamepad2, TreePine, Crosshair, Cpu, DollarSign, Target, Laptop, HelpCircle, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarGameImg from "@/assets/avatar-game-female.jpg";

const AvatarFrontiersOfPandora = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Avatar Frontiers of Pandora vale a pena em 2026? Review completa do jogo mais bonito da geração, gameplay como Na'vi, requisitos pesados de PC gamer e análise de custo-benefício. */}
      
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
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            Games
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar: Frontiers of Pandora em 2026 Vale a Pena? Review Completa, Gráficos, PC Ideal e Custo-Benefício
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
          src={avatarGameImg}
          alt="Avatar Frontiers of Pandora - Review 2026 PC gamer gráficos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Ubisoft finalmente lançou <strong>Avatar: Frontiers of Pandora</strong>, um jogo que coloca você 
          na pele de um Na'vi em primeira pessoa. Mas será que ele consegue capturar a magia de Pandora, 
          ou é apenas mais um "Far Cry com skin azul"? Descubra se vale investir em um <strong>PC gamer</strong> 
          ou <strong>notebook gamer</strong> para rodar este título.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>É o jogo mais bonito da geração atual?</strong></li>
          <li>👉 Gameplay, pontos fortes e fracos</li>
          <li>👉 Requisitos pesados de PC e custo-benefício</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-background rounded-xl border border-green-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Massive</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">07/12/2023</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 150 a R$ 250</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">30 a 50 horas</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-muted-foreground" />
            </div>
            <span className="font-bold">4/5 — Visualmente deslumbrante com estrutura previsível.</span>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-green-400" />
          Review Geral: O Jogo Mais Bonito da Geração?
        </h2>

        <p>
          Vamos direto ao ponto: <strong>este é um dos jogos mais bonitos já feitos</strong>. A engine 
          Snowdrop da Ubisoft cria uma das florestas mais densas e detalhadas já vistas em um videogame. 
          Cada planta bioluminescente e criatura alienígena foi renderizada com cuidado impressionante.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TreePine className="h-7 w-7 text-green-400" />
          Gráficos e Imersão: Pandora Como Nunca Antes
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <TreePine className="h-8 w-8 text-green-400 mb-3" />
            <h4 className="font-bold mb-2">A Floresta</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Vegetação densa que reage à sua passagem, com ciclo dia/noite que transforma completamente 
              a paisagem bioluminescente.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Gamepad2 className="h-8 w-8 text-green-400 mb-3" />
            <h4 className="font-bold mb-2">Voar em um Ikran</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Uma das melhores sensações de voo em games recentes. A Ubisoft acertou em cheio neste aspecto.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-green-400" />
          Jogabilidade: O Que Funciona e O Que Poderia Melhorar
        </h2>

        <p>
          Aqui é onde as comparações com Far Cry aparecem — e não são injustas. A estrutura básica é 
          similar: <strong>libertar bases inimigas</strong>, <strong>explorar mundo aberto</strong> e 
          <strong> completar missões secundárias</strong>.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">✅ O Que Funciona</h3>
        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Combate com arco:</strong> Fluido e satisfatório com mobilidade Na'vi.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Sistema de crafting:</strong> Coletar recursos orgânicos encaixa na narrativa.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Voo de Ikran:</strong> Uma das melhores sensações de voo em games recentes.</span>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">❌ O Que Poderia Melhorar</h3>
        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>Estrutura repetitiva:</strong> Liberte base, escaneie ponto, repita.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>IA dos inimigos:</strong> Previsível, especialmente em dificuldades menores.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>História genérica:</strong> Falta o impacto emocional dos filmes.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-green-400" />
          Requisitos de PC: Frontiers of Pandora é Muito Pesado?
        </h2>

        <p className="text-destructive font-bold">
          ⚠️ Sim! Este é um dos jogos mais exigentes já lançados. Prepare seu hardware.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (1080p – 30 FPS, FSR2)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Ryzen 5 3600 ou Intel Core i7-8700K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 3070 (8 GB) ou RX 5700 (8 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">90 GB SSD (extremamente recomendado)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1440p – 60 FPS, Alto)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Ryzen 5 5600X ou Intel i5-11600K</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">RTX 3060 Ti (8 GB) ou RX 6700 XT (12 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 <strong>SSD extremamente recomendado</strong> para garantir a performance do jogo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-green-400" />
          Notebook Gamer Roda Frontiers of Pandora?
        </h2>

        <p><strong>Com dificuldade.</strong> Apenas <strong>notebooks gamer</strong> de ponta:</p>
        <ul>
          <li>RTX 4060 / 4070 ou superior</li>
          <li>Intel Core i7-12700H ou Ryzen 9</li>
          <li>16 GB de RAM (32 GB ideal)</li>
          <li>SSD NVMe extremamente recomendado</li>
        </ul>

        <p className="text-destructive">
          ⚠️ <strong>Notebooks de entrada não rodarão o jogo adequadamente.</strong>
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-green-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos possíveis</li>
              <li>✔ Ray Tracing completo</li>
              <li>✔ Requer investimento alto</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Apenas PS5 e Xbox Series X|S</li>
              <li>✔ Otimização garantida</li>
              <li>✔ Custo-benefício melhor</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-green-400" />
          Vale a Pena Comprar Frontiers of Pandora em 2026?
        </h2>

        <p><strong>Vale a pena</strong> se você:</p>
        <ul>
          <li>É fã do universo de James Cameron</li>
          <li>Quer "viver" em Pandora</li>
          <li>Tem hardware capaz de rodar o jogo</li>
          <li>Não se importa com a fórmula Ubisoft de mundo aberto</li>
        </ul>

        <p>
          Por outro lado, se você está cansado da <strong>fórmula Ubisoft</strong>, vai encontrar muitas 
          das mesmas estruturas aqui. O jogo não reinventa a roda — apenas a pinta de azul e verde 
          bioluminescente.
        </p>

        {/* Final Score */}
        <div className="my-8 p-6 bg-gradient-to-br from-green-500/20 to-background rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold mb-4">📊 Nota Final</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">9/10</div>
              <div className="text-sm text-muted-foreground">Gráficos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">7/10</div>
              <div className="text-sm text-muted-foreground">Gameplay</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">6/10</div>
              <div className="text-sm text-muted-foreground">História</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">9/10</div>
              <div className="text-sm text-muted-foreground">Imersão</div>
            </div>
          </div>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-green-500/20 to-background rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 5</strong></li>
            <li>✓ <strong>Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 150 a R$ 250
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você já jogou Frontiers of Pandora? O que achou?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="avatar-frontiers-pandora-ubisoft-review" />

      {/* Comments */}
      <CommentSection postId="avatar-frontiers-pandora-ubisoft-review" />
    </article>
  );
};

export default AvatarFrontiersOfPandora;
