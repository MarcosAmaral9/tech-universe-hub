import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Pyramid, Bird, Sword, Cpu, DollarSign, Target, Laptop, Gamepad2, HelpCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acOriginsImg from "@/assets/ac-origins.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const ACOrigins = () => {

  useEffect(() => {
    trackArticleRead("ac-origins-renascimento-franquia-egito", "AC Origins em 2026 Vale a Pena? Review Completa — Egito Antigo", "geek");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Origins vale a pena em 2026? Review completa do renascimento da franquia no Egito Antigo com Bayek, Discovery Tour, requisitos de PC gamer e custo-benefício. */}
      
      {/* Back Button */}
      <BackNavigation category="geek" portalPath="/geek/assassins-creed" portalLabel="Painel Assassin's Creed" />

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
            28 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            17 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
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
              <div className="text-sm text-muted-foreground">Plataformas</div>
              <div className="font-bold">PC, PS4, PS5, Xbox One, Xbox Series</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Tempo p/ Zerar (História)</div>
              <div className="font-bold">30-35 horas</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">100% Completo</div>
              <div className="font-bold">70-80 horas</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">DLCs</div>
              <div className="font-bold">The Hidden Ones + Curse of the Pharaohs</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gênero</div>
              <div className="font-bold">RPG de Ação / Mundo Aberto</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground mb-0">
            👉 <strong>Excelente custo-benefício</strong> com Discovery Tour educativo incluso.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-yellow-400" />
          Review Geral: Origins é o Melhor Ponto de Entrada da Franquia?
        </h2>

        <p>
          <strong>Sim</strong> — Origins funciona perfeitamente como <strong>primeiro AC</strong> para novos 
          jogadores. A história é autocontida, o sistema de combate foi completamente reformulado, e o Egito 
          é um dos cenários mais impressionantes da série.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">🗺️ Contexto Histórico: O Egito Ptolemaico (49-43 a.C.)</h2>

        <p>
          Origins se passa durante um dos períodos mais turbulentos da história egípcia: o <strong>fim da 
          dinastia Ptolemaica</strong>. O jogo acontece entre <strong>49 a.C. e 43 a.C.</strong>, nos anos 
          finais do Egito como reino independente, antes da conquista romana.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">👥 Figuras Históricas no Jogo</h3>

        <p>Origins apresenta encontros memoráveis com personagens históricos reais:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Cleópatra VII</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A última faraó do Egito, retratada como aliada estratégica de Bayek. A série mostra 
              sua inteligência política e fluência em nove idiomas.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Júlio César</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O ditador romano aparece em sua campanha no Egito. O jogo mostra sua relação 
              com Cleópatra e os eventos que levaram ao seu assassinato.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Ptolemeu XIII</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Irmão e rival de Cleópatra pelo trono. Manipulado por seus conselheiros, 
              representa a decadência da dinastia ptolemaica.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2 text-yellow-400">Pompeu</h4>
            <p className="text-sm text-muted-foreground mb-0">
              General romano assassinado no Egito — evento histórico real dramatizado 
              no início do jogo.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">🌍 A Geografia do Egito Antigo</h3>

        <p>
          O mapa de Origins é uma recriação impressionante do Egito antigo, cobrindo uma área 
          de aproximadamente <strong>80 km²</strong>:
        </p>

        <ul>
          <li><strong>Alexandria:</strong> Capital cosmopolita, sede da famosa Biblioteca e do Farol</li>
          <li><strong>Mênfis:</strong> Antiga capital do Baixo Egito, com templos monumentais</li>
          <li><strong>Gizé:</strong> As Grandes Pirâmides e a Esfinge em seu estado "original"</li>
          <li><strong>Siwa:</strong> Oásis natal de Bayek, com o Oráculo de Amun</li>
          <li><strong>Tebas (DLC):</strong> A grande necrópole com o Vale dos Reis</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-yellow-400" />
          Bayek de Siwa: Um Protagonista Memorável
        </h2>

        <p>
          Controlamos <strong>Bayek</strong>, um <strong>Medjay</strong> — guardião tradicional do faraó 
          e protetor do povo. Após a morte trágica de seu filho Khemu, Bayek embarca em uma jornada 
          de vingança que o levará a fundar a <strong>Irmandade dos Ocultos</strong>, precursora dos Assassinos.
        </p>

        <p>
          Acompanhado por sua esposa <strong>Aya</strong> (que depois adota o nome Amunet), Bayek é um 
          dos personagens mais humanos e bem construídos da série, mostrando o peso emocional de suas 
          escolhas enquanto luta contra a <strong>Ordem dos Anciões</strong> (futuros Templários).
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-yellow-400" />
          O Sistema de Combate Revolucionário
        </h2>

        <p>
          Origins abandonou completamente o combate rítmico dos jogos anteriores e introduziu um 
          sistema que se tornaria padrão para a franquia:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">⚔️ Combate Baseado em Hitbox</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Cada golpe precisa acertar fisicamente o inimigo. Esquivas, parries e posicionamento 
              são essenciais para sobreviver.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🛡️ Sistema de Equipamentos</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Armas e armaduras com níveis, raridades e atributos. Cada tipo de arma tem moveset único.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🦅 Senu, a Águia</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Companheira de Bayek que serve como "drone orgânico" para marcar inimigos e objetivos.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏹 Variedade de Builds</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Especialize-se em combate corpo a corpo, arqueiro ou furtividade através da árvore de habilidades.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pyramid className="h-7 w-7 text-yellow-400" />
          Discovery Tour: Aprendizado Interativo
        </h2>

        <p>
          O nível de detalhe na recriação do Egito sob o reinado de <strong>Cleópatra</strong> é impressionante:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Pyramid className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="font-bold mb-2">Modo Educativo</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O <strong>Discovery Tour</strong> é usado por escolas para ensinar sobre as pirâmides de Gizé, 
              a Biblioteca de Alexandria e a vida cotidiana no Egito antigo. Tecnologia reconhecida por historiadores.
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

        <h2 className="text-2xl font-bold mt-10 mb-6">📦 DLCs: Conteúdo Adicional</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">DLC</th>
                <th className="text-left py-3 px-4 font-bold">Localização</th>
                <th className="text-left py-3 px-4 font-bold">Tempo</th>
                <th className="text-left py-3 px-4 font-bold">Destaque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">The Hidden Ones</td>
                <td className="py-3 px-4 text-muted-foreground">Sinai</td>
                <td className="py-3 px-4 text-muted-foreground">8-10 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Expansão da Irmandade</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Curse of the Pharaohs</td>
                <td className="py-3 px-4 text-muted-foreground">Tebas</td>
                <td className="py-3 px-4 text-muted-foreground">15-20 horas</td>
                <td className="py-3 px-4 text-muted-foreground">Mitologia egípcia, faraós mortos-vivos</td>
              </tr>
            </tbody>
          </table>
        </div>

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
      <CommentSection postId="ac-origins-renascimento-franquia-egito" postTitle="AC Origins em 2026 Vale a Pena? Review Completa — Egito Antigo" />
    </article>
  );
};

export default ACOrigins;
