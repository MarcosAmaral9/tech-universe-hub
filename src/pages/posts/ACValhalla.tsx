import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sword, Mountain, Cpu, Shield, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acValhallaImg from "@/assets/ac-valhalla.jpg";

const ACValhalla = () => {
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

      {/* Ranking Button */}
      <article className="container w-full flex justify-center pt-8 pb-6">
      <Link
    to="/geek/ranking-melhor-assassins-creed-2026"
    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
    <ArrowLeft className="h-4 w-4" />
    Voltar para o Ranking
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
          Assassin's Creed Valhalla: A Jornada Épica de Eivor no Coração da Inglaterra
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            19 de Janeiro, 2026
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
          src={acValhallaImg}
          alt="Assassin's Creed Valhalla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você é fã de Vikings e adora explorar mundos abertos massivos, <strong>Assassin's Creed Valhalla</strong> é 
          o ápice da fórmula moderna da Ubisoft. Lançado como um título de transição de gerações, o jogo continua sendo 
          um marco visual e técnico mesmo em 2026, oferecendo uma das imersões mais profundas na cultura nórdica já criadas.
        </p>

        {/* Game Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/10 to-background rounded-xl border border-purple-500/30">
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
              <div className="font-bold">10/11/2020</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio</div>
              <div className="font-bold">R$ 200</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">RPG de Ação</div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-purple-400" />
          1. A História: Entre a Glória e a Estratégia
        </h2>

        <p>
          Em Valhalla, você assume o papel de <strong>Eivor</strong>, um líder viking que precisa guiar seu clã das 
          terras geladas da Noruega para os reinos divididos da Inglaterra do século IX.
        </p>

        <p>
          Diferente dos jogos anteriores, aqui o foco não é apenas o assassinato furtivo, mas a <strong>colonização</strong>. 
          Você deve construir seu assentamento (<strong>Ravensthorpe</strong>), formar alianças políticas e realizar 
          invasões (<strong>Raids</strong>) a mosteiros para garantir recursos.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 <strong>Dica:</strong> Confira também nosso post sobre o{" "}
            <Link to="/post/vikings-legado-ragnar-lothbrok" className="text-primary hover:underline">
              legado de Ragnar Lothbrok na série Vikings
            </Link>.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-purple-400" />
          2. Tecnologia e Realismo Gráfico
        </h2>

        <p>
          O que torna Valhalla um excelente tema para o nosso blog é a <strong>tecnologia por trás do mapa</strong>. 
          A Ubisoft utilizou dados fotogramétricos e pesquisas históricas para recriar Wessex, Mércia, Ânglia Oriental 
          e Nortúmbria.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Mountain className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Bioluminescência e Clima</h4>
            <p className="text-sm text-muted-foreground">
              O sistema de iluminação global do jogo cria auroras boreais e neblinas que mudam completamente a 
              atmosfera, exigindo muito do hardware.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Shield className="h-8 w-8 text-purple-400 mb-3" />
            <h4 className="font-bold mb-2">Segurança e Mitologia</h4>
            <p className="text-sm text-muted-foreground">
              O jogo explora o lado místico através de sequências em Asgard e Jotunheim, tratando a mitologia 
              como uma forma de "memória genética" dentro do Animus.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-purple-400" />
          3. Gameplay: Combate e Exploração
        </h2>

        <p>
          O combate é visceral. Você pode usar <strong>duas armas simultaneamente</strong> (até dois escudos, se quiser!) 
          e o sistema de progressão é baseado em uma vasta constelação de habilidades que permite personalizar Eivor 
          para ser um guerreiro brutal ou um mestre da furtividade.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Por que jogar (ou rejogar) agora?</h2>

        <p>
          Com todas as expansões lançadas (<strong>A Ira dos Druidas</strong>, <strong>O Cerco de Paris</strong> e 
          <strong> Dawn of Ragnarök</strong>), o jogo oferece mais de <strong>100 horas de conteúdo</strong>. É a 
          ponte perfeita para quem acabou de assistir à série Vikings e quer sentir o peso de um machado dinamarquês 
          em batalha.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Requisitos do Sistema</h2>

        <h3 className="text-xl font-bold mt-6 mb-4">Mínimos (1080p a 30 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Sistema Operacional</td>
                <td className="py-3 px-4 text-muted-foreground">Windows 10 (somente versões de 64 bits)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 3 1200 @ 3,1 GHz ou Intel i5-4460 @ 3,2 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB (configuração de canal duplo)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Radeon R9 380 (4 GB), NVIDIA GeForce GTX 960 (4 GB)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">130 GB (SSD recomendado)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">DirectX</td>
                <td className="py-3 px-4 text-muted-foreground">DirectX 12</td>
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
                <td className="py-3 px-4 text-muted-foreground">AMD Ryzen 7 1700 @ 3.0 GHz ou Intel i7-6700 @ 3.4 GHz</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">RAM</td>
                <td className="py-3 px-4 text-muted-foreground">8 GB (configuração de canal duplo)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Vega 64 (8 GB), NVIDIA GeForce GTX 1080 (8 GB)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">130 GB (SSD necessário)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-purple-500/20 to-background rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 4 e PlayStation 5</strong></li>
            <li>✓ <strong>Xbox One e Xbox Series X|S</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 200 (frequentemente em promoção)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você já explorou a Inglaterra Viking de Valhalla?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-valhalla-jornada-epica-eivor" />

      {/* Comments */}
      <CommentSection postId="ac-valhalla-jornada-epica-eivor" />
    </article>
  );
};

export default ACValhalla;
