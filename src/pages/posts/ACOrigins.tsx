import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Pyramid, Bird, Sword, BookOpen, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acOriginsImg from "@/assets/ac-origins.jpg";

const ACOrigins = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
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
          Assassin's Creed Origins: O Renascimento da Franquia no Egito dos Faraós
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            16 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            8 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acOriginsImg}
          alt="Assassin's Creed Origins"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Após um hiato necessário, a Ubisoft lançou em 2017 aquele que seria o alicerce para o futuro da saga: 
          <strong> Assassin's Creed Origins</strong>. Mais do que um novo jogo, foi uma <strong>reinvenção 
          completa</strong> que nos levou de volta ao início de tudo, revelando a fundação da irmandade dos "Ocultos".
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/10 to-background rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
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
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 130</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">RPG de Ação</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-yellow-400" />
          1. Bayek de Siwa: Um Protagonista Memorável
        </h2>

        <p>
          Em Origins, controlamos <strong>Bayek</strong>, um Medjay (protetor do faraó) cuja jornada de vingança 
          pessoal se entrelaça com o destino do Egito. Acompanhado por sua esposa, <strong>Aya</strong>, Bayek é 
          um dos personagens mais humanos e bem construídos da série.
        </p>

        <p>
          O jogo mostra o peso emocional de suas perdas enquanto luta contra a corrupção da <strong>Ordem dos 
          Anciões</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pyramid className="h-7 w-7 text-yellow-400" />
          2. A Tecnologia da Reconstrução Histórica
        </h2>

        <p>
          O que torna este post perfeito para o nosso blog de tecnologia é o nível de detalhe na recriação do 
          Egito sob o reinado de <strong>Cleópatra</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <BookOpen className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Discovery Tour</h4>
            <p className="text-sm text-muted-foreground">
              A tecnologia de reconstrução foi tão precisa que a Ubisoft lançou um modo educativo, usado até hoje 
              por escolas para ensinar sobre as pirâmides de Gizé e a Biblioteca de Alexandria.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Bird className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Ecossistema Vivo</h4>
            <p className="text-sm text-muted-foreground">
              A IA dos animais é impressionante. Hipopótamos atacam barcos, crocodilos caçam nas margens e os 
              habitantes têm rotinas completas de sono, trabalho e lazer.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-yellow-400" />
          3. O Salto para o RPG
        </h2>

        <p>
          Origins abandonou o sistema de combate rítmico antigo e introduziu o combate baseado em <strong>hitbox 
          e níveis de equipamentos</strong>. A introdução de <strong>Senu</strong>, a águia que serve como um 
          drone orgânico, mudou a forma como fazemos o reconhecimento tático do terreno — uma mecânica que se 
          tornou padrão nos jogos seguintes.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">4. Visual Deslumbrante em 4K</h2>

        <p>
          Mesmo anos após o lançamento, Origins recebeu atualizações para rodar a <strong>60 FPS</strong> nos 
          consoles modernos. A renderização das areias do deserto, os reflexos do Rio Nilo e a iluminação dourada 
          do sol egípcio continuam sendo um <strong>benchmark de qualidade visual</strong>.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Entenda como a mecânica de Origins evoluiu em nossa análise de{" "}
            <Link to="/post/ac-odyssey-odisseia-grecia" className="text-primary hover:underline">
              Assassin's Creed Odyssey
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (1080p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (versões 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX 6350 – 3,9 GHz, Intel Core i5 2400S – 2,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">6 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 270 (2 GB), NVIDIA GeForce GTX 660 (2 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">75 GB de espaço disponível</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados (1080p a 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX-8350 – 4,0 GHz, Intel Core i7-3770 – 3,5 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 280X (3 GB), NVIDIA GeForce GTX 760 (4 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/20 to-background rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 130 (frequentemente em promoção)
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