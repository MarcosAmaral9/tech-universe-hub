import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Ship, Users, Sparkles, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acOdysseyImg from "@/assets/ac-odyssey.jpg";

const ACOdyssey = () => {
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
          Assassin's Creed Odyssey: Uma Odisseia Épica pela Grécia de Sócrates e Leônidas
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            18 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            9 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acOdysseyImg}
          alt="Assassin's Creed Odyssey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se existe um jogo que define a grandeza dos RPGs de mundo aberto modernos, esse jogo é 
          <strong> Assassin's Creed Odyssey</strong>. Abandonando definitivamente a linearidade dos primeiros 
          títulos da franquia, Odyssey transporta o jogador para o auge da <strong>Grécia Antiga</strong>, 
          em meio à Guerra do Peloponeso.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎮 Informações do Jogo
          </h3>
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
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 150</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">RPG de Ação</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-blue-400" />
          1. Escolha seu Destino: Kassandra ou Alexios
        </h2>

        <p>
          Pela primeira vez na série, o jogador pode escolher o gênero do protagonista. Embora ambos sigam a mesma 
          jornada como um <strong>Misthios</strong> (mercenário), a atuação de voz e a personalidade de 
          <strong> Kassandra</strong> a tornaram uma das personagens mais queridas de toda a saga.
        </p>

        <p>
          Você não é apenas um assassino; você é um <strong>descendente direto do Rei Leônidas de Esparta</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-blue-400" />
          2. Um Mundo Vivo e Tecnológico
        </h2>

        <p>
          O mapa de Odyssey é um dos maiores já criados pela Ubisoft. Mas o que chama a atenção tecnicamente é:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Simulação Naval</h4>
            <p className="text-sm text-muted-foreground">
              O retorno triunfal das batalhas marítimas. A física da água e a IA dos navios inimigos criam 
              confrontos dinâmicos no Mar Egeu.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sword className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema de Mercenários</h4>
            <p className="text-sm text-muted-foreground">
              Uma IA inspirada no sistema "Nemesis" de Shadow of Mordor, onde caçadores de recompensa perseguem 
              você em tempo real.
            </p>
          </div>
        </div>

        <p>
          A reconstrução de <strong>Atenas</strong>, com o Partenon em cores vibrantes, é uma aula de arquitetura 
          e computação gráfica.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-blue-400" />
          3. Entre a História e o Mito
        </h2>

        <p>
          O ponto onde o jogo realmente brilha (e que atrai muito o público fã de animes e fantasia) é o encontro 
          com <strong>criaturas mitológicas</strong>. Graças à tecnologia da "Primeira Civilização" (Isu), o jogo 
          justifica batalhas épicas contra:
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
            <span><strong>Esfinge:</strong> O enigmático guardião com seus desafios.</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-blue-400" />
          4. O Sistema de Escolhas e Consequências
        </h2>

        <p>
          Diferente de Origins, em Odyssey suas decisões importam. O final da sua família, o destino de cidades 
          inteiras e quem vive ou morre depende dos diálogos que você escolhe. Isso dá ao jogo um 
          <strong> "fator replay" altíssimo</strong>.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Gosta de guerreiros lendários? Veja também nossa análise sobre{" "}
            <Link to="/post/ac-valhalla-jornada-epica-eivor" className="text-primary hover:underline">
              Assassin's Creed Valhalla e o mundo dos Vikings
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
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (somente versões 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Intel Core i5 2400 – 3,1 GHz, AMD FX 6300 – 3,8 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 285 (2 GB), NVIDIA GeForce GTX 660</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">46 GB de espaço disponível</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-4">Recomendados 4K (2160p a 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">Intel Core i7 7700 – 4,2 GHz, AMD Ryzen 7 1700X – 3,8 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">16 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Vega 64, NVIDIA GeForce GTX 1080 (8 GB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/20 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 150 (frequentemente em promoção)
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