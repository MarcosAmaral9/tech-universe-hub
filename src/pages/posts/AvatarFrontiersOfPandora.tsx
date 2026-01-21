import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Gamepad2, TreePine, Crosshair, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarGameImg from "@/assets/avatar-game-female.jpg";

const AvatarFrontiersOfPandora = () => {
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
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            Games
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar: Frontiers of Pandora – Vale a pena jogar o "Far Cry" de Luxo da Ubisoft?
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            13 de Janeiro, 2026
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
          src={avatarGameImg}
          alt="Avatar Frontiers of Pandora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Depois de anos de espera, a Ubisoft finalmente lançou <strong>Avatar: Frontiers of Pandora</strong>, 
          um jogo que coloca você na pele de um Na'vi em primeira pessoa. Mas será que ele consegue 
          capturar a magia de Pandora ou é apenas mais um "Far Cry com skin azul"?
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-green-500/10 to-background rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Avaliação Rápida
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-muted-foreground" />
            </div>
            <span className="font-bold">4/5</span>
          </div>
          <p className="text-muted-foreground mt-2 mb-0">
            Visualmente deslumbrante, mas com estrutura de missões previsível.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TreePine className="h-7 w-7 text-green-400" />
          Gráficos e Imersão
        </h2>

        <p>
          Vamos direto ao ponto: <strong>este é um dos jogos mais bonitos já feitos</strong>. A 
          engine Snowdrop da Ubisoft cria uma das florestas mais densas e detalhadas já vistas 
          em um videogame. Cada planta bioluminescente, cada criatura alienígena foi renderizada 
          com um cuidado impressionante.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <TreePine className="h-8 w-8 text-green-400 mb-3" />
            <h4 className="font-bold mb-2">A Floresta</h4>
            <p className="text-sm text-muted-foreground">
              Vegetação densa que reage à sua passagem, com ciclo dia/noite que transforma 
              completamente a paisagem.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Gamepad2 className="h-8 w-8 text-green-400 mb-3" />
            <h4 className="font-bold mb-2">Voar em um Ikran</h4>
            <p className="text-sm text-muted-foreground">
              A sensação de voar no seu próprio Ikran é simplesmente mágica. A Ubisoft acertou 
              em cheio neste aspecto.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-green-400" />
          Jogabilidade
        </h2>

        <p>
          Aqui é onde as comparações com Far Cry aparecem – e não são injustas. A estrutura 
          básica é similar: <strong>libertar bases inimigas</strong>, <strong>explorar um 
          mundo aberto</strong> e <strong>completar missões secundárias</strong>.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">O Que Funciona</h3>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Combate com arco:</strong> Fluido e satisfatório, especialmente ao combinar com a mobilidade Na'vi.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Sistema de crafting:</strong> Coletar recursos orgânicos se encaixa perfeitamente na narrativa Na'vi.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Voo de Ikran:</strong> Uma das melhores sensações de voo em games recentes.</span>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">O Que Poderia Melhorar</h3>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>Estrutura repetitiva:</strong> Liberte base, escaneie ponto, repita.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>IA dos inimigos:</strong> Previsível demais, especialmente em dificuldades menores.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 font-bold">✗</span>
            <span><strong>História genérica:</strong> Falta o impacto emocional dos filmes.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 3600 @ 3.6 GHz, Intel Core i7-8700K @ 3.70 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD RX 5700 (8 GB), Intel Arc A750 (8 GB, com ReBAR), NVIDIA GeForce GTX 1070 (8 GB)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">DirectX</td>
                <td className="py-3 px-4 text-muted-foreground">Versão 12</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">90 GB (SSD Obrigatório)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic">
          Notas: SSD Obrigatório. Especificações testadas em configuração Baixa com FSR2 quality.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10/11 (versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 5 5600X @ 3.7 GHz, Intel Core i5-11600K @ 3.9 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon RX 6700 XT (12 GB), NVIDIA GeForce RTX 3060 Ti (8 GB)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">DirectX</td>
                <td className="py-3 px-4 text-muted-foreground">Versão 12</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">90 GB (SSD Obrigatório)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground italic">
          Notas: SSD Obrigatório. Especificações testadas em configuração Alta com FSR2 quality.
        </p>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-green-500/20 to-background rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 5</strong></li>
            <li>✓ <strong>Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 150
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Veredito Final</h2>

        <p>
          <strong>Avatar: Frontiers of Pandora</strong> é o jogo perfeito para quem quer 
          <strong> "viver" em Pandora</strong>. Se você é fã do universo de James Cameron, 
          vai se deliciar explorando cada canto dessa floresta alienígena.
        </p>

        <p>
          Por outro lado, se você está cansado da <strong>fórmula Ubisoft</strong> de mundo 
          aberto, vai encontrar muitas das mesmas estruturas aqui. O jogo não reinventa a 
          roda – ele apenas a pinta de azul e verde bioluminescente.
        </p>

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
