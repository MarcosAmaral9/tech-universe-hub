import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Anchor, Ship, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle, Music } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acBlackFlagImg from "@/assets/ac-black-flag.jpg";

const ACBlackFlag = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed IV Black Flag ainda é o melhor jogo de piratas em 2026? Review completa com análise de combate naval, história de Edward Kenway, requisitos de PC gamer e custo-benefício. */}
      
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
          Assassin's Creed IV: Black Flag em 2026 – O Melhor Jogo de Piratas de Todos os Tempos? Review e PC Ideal
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
            16 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={acBlackFlagImg}
          alt="Assassin's Creed IV Black Flag - Melhor jogo de piratas PC gamer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Muitos anos se passaram desde que <strong>Edward Kenway</strong> içou as velas do Jackdaw pela primeira 
          vez, mas a pergunta continua ecoando: por que, mesmo com o lançamento de títulos como Skull and Bones 
          ou Sea of Thieves, <strong>Black Flag ainda detém a coroa</strong> como a experiência definitiva de 
          pirataria para <strong>PC gamer</strong> e consoles?
        </p>

        <p className="text-lg">Neste guia completo você encontra:</p>
        <ul className="text-lg">
          <li>👉 <strong>Por que Black Flag é considerado o melhor jogo de piratas?</strong></li>
          <li>👉 Análise técnica e de jogabilidade</li>
          <li>👉 Requisitos de PC e custo-benefício em 2026</li>
        </ul>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 mt-0">
            🏴‍☠️ Informações Rápidas para Decisão de Compra
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Desenvolvedora</div>
              <div className="font-bold">Ubisoft Montreal</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Lançamento</div>
              <div className="font-bold">29/10/2013</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Preço Médio 2026</div>
              <div className="font-bold">R$ 40 a R$ 80</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Plataformas</div>
              <div className="font-bold">PC, PS3, PS4, Xbox 360, Xbox One, Switch</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Tempo p/ Zerar (História)</div>
              <div className="font-bold">20-25 horas</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">100% Completo</div>
              <div className="font-bold">50-60 horas</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">DLCs</div>
              <div className="font-bold">Freedom Cry (standalone)</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">Ação/Aventura, Pirataria</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Melhor custo-benefício</strong> da franquia para experiência de pirataria completa.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-amber-400" />
          Review Geral: Black Flag Ainda é o Melhor Jogo de Piratas?
        </h2>

        <p>
          <strong>Absolutamente sim.</strong> A Ubisoft conseguiu algo raro em Black Flag: unir a mística da 
          <strong> Ordem dos Assassinos</strong> com a <strong>liberdade selvagem dos mares</strong>. Edward 
          Kenway não começa como um herói honrado; ele é um homem egoísta e ambicioso que busca ouro e glória.
        </p>

        <p>
          Essa jornada de redenção, vivida em um <strong>Caribe vibrante</strong>, cria uma conexão emocional 
          que poucos jogos do gênero conseguem replicar. É por isso que Skull and Bones, mesmo com tecnologia 
          superior, não conseguiu superar Black Flag.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">🗺️ Contexto Histórico: A Era de Ouro da Pirataria (1715-1726)</h2>

        <p>
          Black Flag se passa durante a <strong>Era de Ouro da Pirataria</strong>, um período de aproximadamente 
          11 anos que definiu a imagem romântica dos piratas que conhecemos hoje. O jogo começa em <strong>1715</strong>, 
          logo após o fim da Guerra de Sucessão Espanhola, quando milhares de marinheiros foram dispensados e 
          encontraram na pirataria uma forma de sobrevivência.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">🌍 A Geografia do Caribe Colonial</h3>

        <p>O mapa de Black Flag recria com precisão histórica várias localizações icônicas:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-amber-400">Havana (Cuba)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Capital do domínio espanhol no Caribe, <strong>cidade fortificada</strong> e centro do 
              comércio de açúcar, rum e escravos. Base das frotas do tesouro espanhol.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-amber-400">Nassau (Bahamas)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A <strong>República dos Piratas</strong> — cidade governada democraticamente por piratas 
              entre 1706-1718. Centro da resistência contra impérios europeus.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-amber-400">Kingston (Jamaica)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Base do <strong>Império Britânico</strong> no Caribe. Port Royal, próxima a Kingston, 
              foi chamada de "cidade mais perversa do mundo" antes de afundar em 1692.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-amber-400">Tulum (México)</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Ruínas maias que servem como <strong>base secreta dos Assassinos</strong> no jogo. 
              Mistura de história pré-colombiana com a era colonial.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">👥 Piratas Históricos no Jogo</h3>

        <p>
          Black Flag apresenta encontros com piratas reais que existiram durante este período:
        </p>

        <ul>
          <li><strong>Edward "Barba Negra" Thatch:</strong> O mais famoso pirata da história, mentor de Edward Kenway</li>
          <li><strong>Charles Vane:</strong> Pirata brutal e impiedoso, rival frequente do protagonista</li>
          <li><strong>Anne Bonny:</strong> Uma das poucas mulheres piratas conhecidas, personagem jogável em algumas missões</li>
          <li><strong>Mary Read:</strong> Pirata disfarçada de homem, amiga próxima de Edward</li>
          <li><strong>Benjamin Hornigold:</strong> Fundador da República dos Piratas em Nassau</li>
          <li><strong>Calico Jack Rackham:</strong> Capitão de Anne Bonny e Mary Read</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Ship className="h-7 w-7 text-amber-400" />
          O Jackdaw: Seu Navio, Sua Fortaleza
        </h2>

        <p>
          O <strong>Jackdaw</strong> é muito mais que um meio de transporte — é uma extensão do jogador. 
          O sistema de customização naval de Black Flag era revolucionário para 2013:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema de Upgrade</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Melhore o <strong>casco, canhões, morteiros, aríete</strong> e mais. Cada upgrade é 
              visível no modelo 3D do navio, criando progressão tangível.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Anchor className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-bold mb-2">Tripulação Recrutável</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Recrute marinheiros de navios capturados ou resgate prisioneiros. A tripulação afeta 
              a velocidade de reparo e eficácia em abordagens.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">⚓ Combate Naval: Ainda Referência em 2026</h3>

        <p>
          O combate naval de Black Flag continua sendo a referência do gênero, superando até jogos 
          dedicados como Skull and Bones:
        </p>

        <ul>
          <li><strong>Canhões Laterais:</strong> Rajadas devastadoras contra o casco inimigo</li>
          <li><strong>Balas Encadeadas:</strong> Destroem velas e reduzem velocidade do alvo</li>
          <li><strong>Morteiros:</strong> Bombardeio de longo alcance para iniciar confrontos</li>
          <li><strong>Barris Explosivos:</strong> Solte atrás do navio para perseguidores</li>
          <li><strong>Aríete:</strong> Golpe frontal devastador para finalizar navios</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-amber-400" />
          Jogabilidade: Pirata Primeiro, Assassino Depois
        </h2>

        <p>
          Black Flag não é apenas sobre navios; é sobre a <strong>vida completa de um pirata</strong> — das 
          tavernas em Nassau aos mergulhos em naufrágios repletos de tubarões.
        </p>

        <p><strong>Atividades disponíveis:</strong></p>
        <ul>
          <li>Combate naval com canhões, morteiros e abordagens épicas</li>
          <li>Caça a baleias e tubarões com arpões</li>
          <li>Exploração de ruínas maias subaquáticas com equipamento de mergulho</li>
          <li>Captura de fortes para dominar regiões do mapa</li>
          <li>Assassinatos de Templários em terra firme</li>
          <li>Coleta de Sea Shanties espalhadas pelo mundo</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-amber-400" />
          Sea Shanties: O Fator Cultural
        </h2>

        <p>
          Não se pode falar de Black Flag sem mencionar as <strong>Sea Shanties</strong>. A trilha sonora 
          cantada pela tripulação enquanto você navega em direção ao pôr do sol transforma um simples jogo 
          em uma <strong>memória inesquecível</strong>.
        </p>

        <p>São mais de <strong>35 shanties colecionáveis</strong>, incluindo clássicos como:</p>
        <ul>
          <li><strong>"Lowlands Away"</strong> — melancólica e emotiva</li>
          <li><strong>"Drunken Sailor"</strong> — animada e contagiante</li>
          <li><strong>"Leave Her Johnny"</strong> — perfeita para longos trechos de navegação</li>
          <li><strong>"Randy Dandy Oh"</strong> — ritmo de trabalho pesado</li>
        </ul>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-muted-foreground mb-0">
            💡 Entenda como a história da família Kenway continuou depois de Edward em nosso post sobre{" "}
            <Link to="/post/ac-3-remastered-revolucao-americana" className="text-primary hover:underline">
              Assassin's Creed III Remastered
            </Link>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">📦 DLC: Freedom Cry</h2>

        <p>
          A expansão <strong>Freedom Cry</strong> (também vendida como standalone) conta a história de 
          <strong> Adéwalé</strong>, ex-escravo e imediato de Edward, 15 anos após os eventos do jogo principal.
        </p>

        <div className="my-6 p-5 bg-card rounded-xl border border-border">
          <h4 className="font-bold mb-3">📍 Sobre Freedom Cry</h4>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• <strong>Duração:</strong> 4-6 horas de conteúdo</li>
            <li>• <strong>Localização:</strong> Saint-Domingue (atual Haiti)</li>
            <li>• <strong>Tema:</strong> Libertação de escravos, abolicionismo</li>
            <li>• <strong>Disponível:</strong> Como DLC ou jogo standalone</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-amber-400" />
          Requisitos de PC: Qual Configuração Roda Black Flag?
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
                <td className="py-3 px-4 text-muted-foreground">AMD Athlon II X4 620 ou Intel Core 2 Quad Q8400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">2 GB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 260 ou Radeon HD 4870</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Armazenamento</td>
                <td className="py-3 px-4 text-muted-foreground">30 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 Roda até em <strong>PCs antigos</strong> — ótimo para quem tem hardware limitado.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">🔺 Configuração Recomendada (1080p – 60 FPS)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Processador</td>
                <td className="py-3 px-4 text-muted-foreground">AMD Phenom II X4 940 ou Intel Core i5 2400S</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Memória RAM</td>
                <td className="py-3 px-4 text-muted-foreground">4 GB</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Placa de Vídeo</td>
                <td className="py-3 px-4 text-muted-foreground">GTX 470 ou Radeon HD 5850</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Laptop className="h-7 w-7 text-amber-400" />
          Notebook Gamer Roda Black Flag?
        </h2>

        <p>
          <strong>Sim, praticamente qualquer notebook gamer</strong> roda Black Flag em 2026. Os requisitos 
          são tão leves que até notebooks com gráficos integrados modernos podem rodar em configurações baixas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-amber-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos e FPS</li>
              <li>✔ Preço muito baixo em promoções</li>
              <li>✔ Mods disponíveis</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS3, PS4, Xbox 360, Xbox One</li>
              <li>✔ Disponível no Game Pass</li>
              <li>✔ Nintendo Switch (portátil)</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-amber-400" />
          Vale a Pena Comprar Black Flag em 2026?
        </h2>

        <p><strong>Absolutamente sim.</strong> É o jogo com melhor custo-benefício da franquia:</p>
        <ul>
          <li>Preço frequentemente abaixo de R$ 40 em promoções</li>
          <li>20-25 horas de história principal</li>
          <li>O melhor combate naval já feito em games</li>
          <li>História envolvente de Edward Kenway</li>
          <li>DLC Freedom Cry com mais 4-6 horas</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-amber-500/20 to-background rounded-xl border border-amber-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 3, PlayStation 4</strong></li>
            <li>✓ <strong>Xbox 360, Xbox One e Xbox Series X|S</strong> (Game Pass)</li>
            <li>✓ <strong>Nintendo Switch</strong></li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 40 a R$ 80 (frequentemente em promoção por menos de R$ 30)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual é sua shanty favorita de Black Flag?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="ac-black-flag-melhor-jogo-piratas" />

      {/* Comments */}
      <CommentSection postId="ac-black-flag-melhor-jogo-piratas" />
    </article>
  );
};

export default ACBlackFlag;
