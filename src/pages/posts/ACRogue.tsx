import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Snowflake, Ship, Target, Cpu, DollarSign, Laptop, Gamepad2, HelpCircle, Crosshair } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acRogueImg from "@/assets/ac-rogue.jpg";

const ACRogue = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Rogue vale a pena em 2026? Review completa jogando como Templário, navegação no Ártico, requisitos de PC gamer leves e análise de custo-benefício. */}
      
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
          Assassin's Creed Rogue em 2026 Vale a Pena? Review Completa, Jogue Como Templário, PC Ideal e Custo-Benefício
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
            10 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acRogueImg}
          alt="Assassin's Creed Rogue - Review 2026 Templário PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Na maioria dos jogos da franquia, a linha entre o bem e o mal é clara: Assassinos lutam pela 
          liberdade, Templários pela ordem. No entanto, <strong>Assassin's Creed Rogue</strong> chegou 
          para bagunçar essa lógica, nos colocando na pele de <strong>Shay Patrick Cormac</strong>, um 
          Assassino que decide <strong>caçar seus antigos irmãos</strong>.
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Como é jogar do lado dos Templários?</strong></li>
          <li>👉 Navegação no Ártico e mecânicas exclusivas</li>
          <li>👉 Requisitos de PC leves e custo-benefício</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/10 to-background rounded-xl border border-cyan-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🎮 Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Sofia</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">11/11/2014</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 40 a R$ 70</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duração Média</div>
              <div className="font-bold">15 a 25 horas</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Ótimo custo-benefício</strong> para quem quer uma perspectiva única na saga Kenway.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-cyan-400" />
          Review Geral: Vale a Pena Jogar Como Templário?
        </h2>

        <p>
          <strong>Absolutamente sim.</strong> Rogue oferece uma perspectiva refrescante que faz você 
          questionar: <strong>quem são os verdadeiros vilões?</strong>
        </p>

        <p>
          <strong>Shay</strong> é um dos protagonistas mais complexos da saga. Após uma missão em Lisboa 
          que resulta em uma catástrofe natural (recriada de forma impressionante), ele questiona os 
          métodos da Irmandade. A transição para os Templários não é apenas uma mudança de uniforme, 
          mas uma <strong>mudança de filosofia</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Snowflake className="h-7 w-7 text-cyan-400" />
          Tecnologia do Ártico
        </h2>

        <p>
          Embora use a mesma engine de Black Flag, Rogue trouxe inovações focadas no cenário gelado do 
          <strong> Atlântico Norte</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Navegação em Águas Geladas</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O navio Morrigan é equipado com quebra-gelo, permitindo acessar áreas bloqueadas por icebergs.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Snowflake className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Icebergs Dinâmicos</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Destruir um iceberg com canhões gera uma onda de choque que afunda barcos menores próximos.
            </p>
          </div>
        </div>

        <p>
          <strong>Perigo na água:</strong> Diferente do Caribe, nadar nas águas geladas drena sua vida 
          rapidamente, adicionando tensão às missões.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-cyan-400" />
          O "Anti-Assassino"
        </h2>

        <p>
          Como Shay conhece todos os truques dos Assassinos, a jogabilidade muda. Agora, <strong>você é 
          quem pode ser emboscado</strong> por inimigos escondidos em fardos de feno ou telhados.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-4">🔫 Destaque: O Rifle de Ar</h4>
          <p className="text-muted-foreground mb-0">
            Uma das melhores armas do jogo — permite disparar dardos silenciosos ou granadas. Ideal 
            para quem prefere abordagem tecnológica e furtiva.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-cyan-400" />
          O Elo Perdido da Saga Kenway
        </h2>

        <p>
          Para fãs da história, Rogue é o <strong>tecido que une tudo</strong>:
        </p>
        <ul>
          <li>Mostra como a Irmandade Colonial foi destruída (preparando AC III)</li>
          <li>Cena final conecta diretamente com o início de AC Unity</li>
          <li>Essencial para entender o panorama global da guerra secreta</li>
        </ul>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Gostou da jogabilidade naval? Confira nosso artigo sobre{" "}
            <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-primary hover:underline">
              Black Flag
            </Link>, o predecessor espiritual de Rogue.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-cyan-400" />
          Requisitos de PC: Roda em Qualquer Máquina?
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
                <td className="py-3 px-4 text-muted-foreground">Athlon II X4 620 ou Core 2 Quad Q6600</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">2 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GeForce GTS 450 ou Radeon HD 5670</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">12 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 <strong>Requisitos extremamente leves</strong> — roda até em PCs antigos.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1080p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD FX-6100 ou Intel Core i5-2400s</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">4 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 560 Ti ou Radeon HD 6870</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-cyan-400" />
          Notebook Gamer Roda Rogue?
        </h2>

        <p>
          <strong>Praticamente qualquer notebook</strong> roda Rogue em 2026. Os requisitos são tão leves 
          que até notebooks com gráficos integrados modernos podem rodar em configurações médias.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-cyan-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos</li>
              <li>✔ Promoções absurdas (menos de R$ 20)</li>
              <li>✔ Roda em qualquer PC</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS3, PS4, Xbox 360, Xbox One, Switch</li>
              <li>✔ Versão Remastered disponível</li>
              <li>✔ Praticidade</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-cyan-400" />
          Vale a Pena Comprar Rogue em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Quer ver a perspectiva dos Templários</li>
          <li>Gosta da jogabilidade naval de Black Flag</li>
          <li>Quer entender a saga Kenway completa</li>
          <li>Busca um jogo curto e barato</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/20 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 3, PlayStation 4</strong></li>
            <li>✓ <strong>Xbox 360, Xbox One e Xbox Series X|S</strong></li>
            <li>✓ <strong>Nintendo Switch</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 40 a R$ 70 (frequentemente abaixo de R$ 20 em promoções)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você acha que Shay estava certo em abandonar os Assassinos?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-rogue-assassino-templario" />

      {/* Comments */}
      <CommentSection postId="ac-rogue-assassino-templario" />
    </article>
  );
};

export default ACRogue;
