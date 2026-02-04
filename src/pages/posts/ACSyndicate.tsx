import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Factory, Train, Swords, Cog, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acSyndicateImg from "@/assets/ac-syndicate.jpg";

const ACSyndicate = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Syndicate vale a pena em 2026? Review completa na Londres Vitoriana com os irmãos Frye, sistema de gangues, requisitos de PC gamer e custo-benefício. */}
      
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
          Assassin's Creed Syndicate em 2026 Vale a Pena? Review Completa, Londres Vitoriana, PC Ideal e Custo-Benefício
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
            15 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acSyndicateImg}
          alt="Assassin's Creed Syndicate - Review 2026 Londres Vitoriana PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você é fascinado pela estética <strong>steampunk</strong>, gangues de rua e pela atmosfera 
          esfumaçada da <strong>Londres do século XIX</strong>, Assassin's Creed Syndicate é sua viagem 
          definitiva no tempo. Lançado como o último jogo antes da "virada RPG", ele entrega uma das 
          cidades mais vivas já criadas para <strong>PC gamer</strong> e consoles.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>A Londres Vitoriana ainda impressiona?</strong></li>
          <li>👉 Jacob ou Evie: qual irmão escolher?</li>
          <li>👉 Requisitos de PC e custo-benefício em 2026</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-gray-500/10 to-background rounded-xl border border-gray-500/30">
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
              <div className="font-bold">23/10/2015</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 60 a R$ 100</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">30 a 50 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Ótimo custo-benefício</strong> para fãs de ambientação vitoriana e steampunk.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-gray-400" />
          Review Geral: Syndicate Envelheceu Bem?
        </h2>

        <p>
          <strong>Sim</strong> — especialmente para quem valoriza <strong>ambientação</strong> sobre 
          mecânicas RPG. Syndicate é o último AC clássico antes de Origins revolucionar a fórmula.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-gray-400" />
          Jacob e Evie Frye: A Dualidade Perfeita
        </h2>

        <p>
          Pela primeira vez na série, o jogador alterna entre dois protagonistas irmãos com estilos distintos:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Swords className="h-8 w-8 text-red-400 mb-3" />
            <h4 className="font-bold mb-2">Jacob Frye</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Mestre do combate e força bruta. Foca em criar sua gangue, os <strong>Rooks</strong>, para 
              retomar o controle das ruas de Londres.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Cog className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Evie Frye</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Mestra da furtividade e estratégia. Personifica o espírito clássico dos Assassinos, focando 
              na busca por fragmentos do Éden.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-gray-400" />
          Londres: Uma Metrópole em Transformação
        </h2>

        <p>
          A tecnologia por trás da recriação de Londres é o grande destaque:
        </p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🚂</span>
            <span><strong>Veículos em Movimento:</strong> Ruas largas para carruagens com física de destruição.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🚃</span>
            <span><strong>Trens em Tempo Real:</strong> Quartel-general móvel que circula pela cidade.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 font-bold">🪝</span>
            <span><strong>Gancho de Corda:</strong> Verticalidade ao parkour que lembra Batman: Arkham.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Train className="h-7 w-7 text-gray-400" />
          Personagens Históricos e Ciência
        </h2>

        <p>
          Você realiza missões ao lado de mentes brilhantes da época: <strong>Charles Darwin</strong>, 
          <strong> Alexander Graham Bell</strong> (que cria seus gadgets) e <strong>Florence Nightingale</strong>. 
          É uma aula de história sobre como a ciência começou a moldar o mundo moderno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-gray-400" />
          Sistema de Gangues e Conquista de Território
        </h2>

        <p>
          O gameplay foca na libertação dos distritos de Londres das mãos dos Templários. Ao libertar 
          fábricas de trabalho infantil e vencer guerras de gangues, você vê a cidade mudar visualmente.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Sente falta da furtividade urbana? Veja como Bagdá em{" "}
            <Link to="/post/ac-mirage-retorno-raizes-bagda" className="text-primary hover:underline">
              Mirage
            </Link>{" "}
            se compara à Londres de Syndicate.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-gray-400" />
          Requisitos de PC: Syndicate é Pesado?
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-4">🔻 Configuração Mínima (720p – 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6350 ou Intel Core i5 2400s</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 660 (2 GB) ou Radeon R9 270</td>
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
                <td className="py-3 px-4 text-muted-foreground">GTX 760 (4 GB) ou Radeon R9 280X</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 <strong>Requisitos moderados</strong> para um jogo com belos visuais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-gray-400" />
          Notebook Gamer Roda Syndicate?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>GTX 1650 / RTX 3050 ou superior</li>
          <li>Intel Core i5 ou Ryzen 5</li>
          <li>8 GB de RAM</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-gray-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos</li>
              <li>✔ Promoções frequentes</li>
              <li>✔ Frequentemente gratuito na Epic</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS4, PS5, Xbox One, Xbox Series</li>
              <li>✔ Otimização garantida</li>
              <li>✔ Praticidade</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-gray-400" />
          Vale a Pena Comprar Syndicate em 2026?
        </h2>

        <p><strong>Vale a pena</strong> se você:</p>
        <ul>
          <li>Gosta de ambientação vitoriana e steampunk</li>
          <li>Prefere AC clássico sem elementos RPG</li>
          <li>Quer dois protagonistas jogáveis</li>
          <li>Busca um jogo barato e frequentemente gratuito</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-gray-500/20 to-background rounded-xl border border-gray-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 60 a R$ 100 (frequentemente gratuito em promoções)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Jacob ou Evie: qual irmão você prefere jogar?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-syndicate-revolucao-industrial-londres" />

      {/* Comments */}
      <CommentSection postId="ac-syndicate-revolucao-industrial-londres" />
    </article>
  );
};

export default ACSyndicate;
