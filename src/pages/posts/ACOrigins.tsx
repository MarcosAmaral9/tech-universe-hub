import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Pyramid, Bird, Sword, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acOriginsImg from "@/assets/ac-origins.jpg";

const ACOrigins = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Origins vale a pena em 2026? Review completa do renascimento da franquia no Egito Antigo com Bayek, Discovery Tour, requisitos de PC gamer e custo-benefício. */}
      
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
          Assassin's Creed Origins em 2026 Vale a Pena? Review Completa, Egito Antigo, PC Ideal e Custo-Benefício
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
          src={acOriginsImg}
          alt="Assassin's Creed Origins - Review 2026 Egito Antigo PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após um hiato necessário, a Ubisoft lançou em 2017 o alicerce para o futuro da saga: 
          <strong> Assassin's Creed Origins</strong>. Mais do que um novo jogo, foi uma <strong>reinvenção 
          completa</strong> que nos levou de volta ao início de tudo no <strong>Egito dos Faraós</strong>, 
          revelando a fundação da irmandade dos "Ocultos".
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>O renascimento da franquia ainda vale a pena?</strong></li>
          <li>👉 Por que Bayek é um dos melhores protagonistas</li>
          <li>👉 Requisitos de PC e custo-benefício em 2026</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/10 to-background rounded-xl border border-yellow-500/30">
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
              <div className="font-bold">27/10/2017</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 80 a R$ 130</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">50 a 80 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Excelente custo-benefício</strong> com Discovery Tour educativo incluso.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-yellow-400" />
          Review Geral: Origins é o Melhor Ponto de Entrada da Franquia?
        </h2>

        <p>
          <strong>Sim</strong> — Origins funciona perfeitamente como <strong>primeiro AC</strong> para novos 
          jogadores. A história é autocontida, o sistema de combate foi completamente reformulado, e o Egito 
          é um dos cenários mais impressionantes da série.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-yellow-400" />
          Bayek de Siwa: Um Protagonista Memorável
        </h2>

        <p>
          Controlamos <strong>Bayek</strong>, um Medjay (protetor do faraó) cuja jornada de vingança pessoal 
          se entrelaça com o destino do Egito. Acompanhado por sua esposa <strong>Aya</strong>, Bayek é um 
          dos personagens mais humanos e bem construídos da série.
        </p>

        <p>
          O jogo mostra o peso emocional de suas perdas enquanto luta contra a corrupção da <strong>Ordem 
          dos Anciões</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pyramid className="h-7 w-7 text-yellow-400" />
          Tecnologia da Reconstrução Histórica
        </h2>

        <p>
          O nível de detalhe na recriação do Egito sob o reinado de <strong>Cleópatra</strong> é impressionante:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Pyramid className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Discovery Tour</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Modo educativo usado por escolas para ensinar sobre as pirâmides de Gizé e a Biblioteca de 
              Alexandria. Tecnologia de reconstrução usada em pesquisas.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Bird className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Ecossistema Vivo</h4>
            <p className="text-sm text-muted-foreground mb-0">
              IA avançada: hipopótamos atacam barcos, crocodilos caçam nas margens, habitantes têm rotinas 
              completas de sono, trabalho e lazer.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-yellow-400" />
          O Salto para o RPG
        </h2>

        <p>
          Origins abandonou o combate rítmico antigo e introduziu <strong>combate baseado em hitbox</strong> 
          e níveis de equipamentos. A introdução de <strong>Senu</strong>, a águia que serve como drone 
          orgânico, mudou a forma como fazemos reconhecimento — mecânica que se tornou padrão nos jogos seguintes.
        </p>

        <p>
          Mesmo anos após o lançamento, Origins recebeu atualizações para rodar a <strong>60 FPS</strong> nos 
          consoles modernos.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Entenda como a mecânica de Origins evoluiu em nossa análise de{" "}
            <Link to="/post/ac-odyssey-odisseia-grecia" className="text-primary hover:underline">
              Assassin's Creed Odyssey
            </Link>.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-yellow-400" />
          Requisitos de PC: Qual Configuração Roda Origins?
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
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6350 ou Intel Core i5 2400S</td>
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
                <td className="py-3 px-4 text-muted-foreground">75 GB</td>
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
          👉 <strong>Requisitos moderados</strong> para um jogo visualmente impressionante.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-yellow-400" />
          Notebook Gamer Roda Origins?
        </h2>

        <p><strong>Sim</strong>, desde que seja um <strong>notebook gamer</strong> com:</p>
        <ul>
          <li>GTX 1650 / RTX 3050 ou superior</li>
          <li>Intel Core i5 ou Ryzen 5</li>
          <li>8 GB de RAM (16 GB ideal)</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-yellow-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos</li>
              <li>✔ Promoções frequentes</li>
              <li>✔ Mods disponíveis</li>
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
          <DollarSign className="h-7 w-7 text-yellow-400" />
          Vale a Pena Comprar Origins em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Quer começar a franquia pelo renascimento</li>
          <li>Se interessa pelo Egito Antigo</li>
          <li>Valoriza protagonistas bem desenvolvidos</li>
          <li>Quer usar o Discovery Tour educativo</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/20 to-background rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 80 a R$ 130 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O que você achou da jornada de Bayek?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-origins-renascimento-franquia-egito" />

      {/* Comments */}
      <CommentSection postId="ac-origins-renascimento-franquia-egito" />
    </article>
  );
};

export default ACOrigins;
