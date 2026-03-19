import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Snowflake, Ship, Target, Cpu, DollarSign, Laptop, Gamepad2, HelpCircle, Crosshair, MapPin, Swords, Shield, Timer, Package } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import acRogueImg from "@/assets/ac-rogue.webp";

const ACRogue = () => {

  useEffect(() => {
    trackArticleRead("ac-rogue-assassino-templario", "AC Rogue em 2026 Vale a Pena? Review — Jogue Como Templário", "geek");
  }, []);
  const goBack = useSmartBack("/geek/assassins-creed");
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* SEO-optimized meta description: Assassin's Creed Rogue vale a pena em 2026? Review completa jogando como Templário, navegação no Ártico, requisitos de PC gamer leves e análise de custo-benefício. */}
      
      {/* Back Button */}
      <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Portal Assassin's Creed
      </button>

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
            19 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            18 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
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
          <li>👉 Contexto histórico da Guerra dos Sete Anos</li>
          <li>👉 Navegação no Ártico e mecânicas exclusivas</li>
          <li>👉 Facções, combate e sistema Anti-Assassino</li>
          <li>👉 Requisitos de PC leves e custo-benefício</li>
          <li>👉 Tempo para zerar e DLCs disponíveis</li>
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
              <div className="font-bold">12 a 40 horas</div>
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

        <p>
          A narrativa é curta mas <strong>extremamente impactante</strong>. O jogador experimenta na pele 
          a dor de trair seus companheiros e a convicção de que, às vezes, a ordem pode salvar mais vidas 
          que a liberdade. É um estudo de personagem raro em jogos AAA.
        </p>

        {/* Contexto Histórico */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-cyan-400" />
          Contexto Histórico: A Guerra dos Sete Anos (1756–1763)
        </h2>

        <p>
          Rogue se passa durante a <strong>Guerra dos Sete Anos</strong>, considerada por muitos historiadores 
          como a <strong>primeira guerra verdadeiramente global</strong>. O conflito envolveu todas as grandes 
          potências europeias e se estendeu por cinco continentes, da América do Norte à Índia.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-4">📜 Fatos Históricos Presentes no Jogo</h4>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>🏛️ <strong>Terremoto de Lisboa (1755):</strong> Um dos eventos mais devastadores da história europeia, 
            destruiu 85% da cidade e matou entre 30.000 a 50.000 pessoas. No jogo, é provocado pela ativação de um 
            artefato Isu — um ponto de virada na consciência de Shay.</li>
            <li>⚔️ <strong>Batalha das Planícies de Abraham (1759):</strong> A batalha decisiva que determinou o 
            controle britânico sobre o Canadá francês. Shay participa diretamente deste evento.</li>
            <li>🇫🇷 <strong>Queda da Nova França:</strong> O jogo retrata o fim do domínio francês na América do Norte, 
            um processo que Shay, como Templário aliado aos britânicos, ajuda a concretizar.</li>
            <li>🏴‍☠️ <strong>Fim da Era da Pirataria:</strong> O período entre Black Flag e Rogue marca a transição 
            da era dos piratas para conflitos coloniais organizados entre impérios.</li>
          </ul>
        </div>

        <p>
          Essa ambientação é <strong>crucial para entender a saga Kenway</strong>. Edward Kenway (Black Flag) viveu a 
          era da pirataria, Haytham Kenway fundou os Templários na América, e Connor Kenway (AC III) lutou na 
          Revolução Americana. Shay é o <strong>catalisador</strong> que conecta todos esses eventos, mostrando 
          como a destruição da Irmandade Colonial pelos Templários preparou o terreno para AC III.
        </p>

        {/* Mundo e Regiões */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-cyan-400" />
          O Mundo de Rogue: Três Regiões Distintas
        </h2>

        <p>
          Diferente de outros jogos da franquia que se concentram em uma única cidade, Rogue oferece 
          <strong>três áreas exploráveis distintas</strong>, cada uma com sua própria atmosfera e desafios:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 text-left font-bold">Região</th>
                <th className="py-3 px-4 text-left font-bold">Descrição</th>
                <th className="py-3 px-4 text-left font-bold">Destaques</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Nova York</td>
                <td className="py-3 px-4 text-muted-foreground">A cidade colonial em plena expansão, com ruas movimentadas e portos agitados</td>
                <td className="py-3 px-4 text-muted-foreground">Renovações urbanas, gangues de rua, missões de investigação</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">River Valley</td>
                <td className="py-3 px-4 text-muted-foreground">O Vale do Rio, com florestas densas, vilas ribeirinhas e postos comerciais</td>
                <td className="py-3 px-4 text-muted-foreground">Exploração fluvial, caça, postos avançados franceses</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Atlântico Norte</td>
                <td className="py-3 px-4 text-muted-foreground">Águas geladas com icebergs, tempestades de neve e ilhas remotas no Ártico</td>
                <td className="py-3 px-4 text-muted-foreground">Navegação perigosa, icebergs destrutíveis, bases de Assassinos secretas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A variedade de cenários mantém a experiência sempre <strong>fresca e envolvente</strong>. Você pode estar 
          parkourizando pelos telhados de Nova York em um momento e, no próximo, navegando entre icebergs 
          colossais no Atlântico Norte, tentando não ser esmagado por uma avalanche de gelo.
        </p>

        {/* Facções */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-cyan-400" />
          Facções e Forças em Conflito
        </h2>

        <p>
          Rogue apresenta uma dinâmica de facções <strong>invertida</strong> em relação aos outros jogos. Aqui, 
          os Assassinos são seus inimigos e os Templários seus aliados:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3 text-red-400">🔴 A Irmandade dos Assassinos (Inimigos)</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li><strong>Achilles Davenport:</strong> Mentor da Irmandade Colonial. Arrogante e obcecado pelos 
              artefatos Isu, suas decisões levam à catástrofe de Lisboa e à revolta de Shay.</li>
              <li><strong>Liam O'Brien:</strong> Melhor amigo de Shay e leal à Irmandade. O confronto entre os dois 
              é um dos momentos mais emocionantes do jogo.</li>
              <li><strong>Adéwalé:</strong> O ex-escravo e companheiro de Edward Kenway em Black Flag, agora um 
              Mestre Assassino que Shay deve enfrentar.</li>
              <li><strong>Hope Jensen:</strong> Especialista em venenos e química, uma das Assassinas mais letais 
              que Shay precisa neutralizar.</li>
              <li><strong>Kesegowaase:</strong> Guerreiro nativo americano e Assassino habilidoso nas florestas.</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3 text-blue-400">🔵 A Ordem dos Templários (Aliados)</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li><strong>Haytham Kenway:</strong> Grão-Mestre dos Templários na América e pai de Connor (AC III). 
              Ele recruta e mentora Shay, mostrando-lhe o "lado certo" da Ordem.</li>
              <li><strong>George Monro:</strong> Coronel britânico e Templário bondoso que salva a vida de Shay, 
              provando que nem todos os Templários são vilões.</li>
              <li><strong>Christopher Gist:</strong> Explorador e aventureiro que se torna o imediato de Shay no 
              Morrigan, fornecendo alívio cômico e apoio tático.</li>
              <li><strong>Jack Weeks:</strong> Agente Templário que auxilia Shay em missões urbanas em Nova York.</li>
            </ul>
          </div>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-3">⚔️ O Conflito Central: Liberdade vs. Ordem</h4>
          <p className="text-muted-foreground mb-0">
            O que torna Rogue tão fascinante é que <strong>ambos os lados têm razão</strong>. Os Assassinos buscam 
            os artefatos Isu para proteger a humanidade, mas sua negligência causa terremotos devastadores. 
            Os Templários querem impedir mais catástrofes, mas seus métodos são autoritários. Shay está no meio, 
            tentando fazer o que acredita ser certo — mesmo que isso signifique matar seus antigos amigos.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Snowflake className="h-7 w-7 text-cyan-400" />
          Navegação no Ártico e o Morrigan
        </h2>

        <p>
          A navegação naval em Rogue herda a excelência de Black Flag e adiciona mecânicas exclusivas 
          para o cenário gelado do <strong>Atlântico Norte</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Navegação em Águas Geladas</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O navio Morrigan é equipado com quebra-gelo, permitindo acessar áreas bloqueadas por icebergs. 
              Diferente do Jackdaw de Black Flag, o Morrigan é menor e mais ágil, ideal para rios e fiordes.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Snowflake className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Icebergs Dinâmicos</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Destruir um iceberg com canhões gera uma onda de choque que afunda barcos menores próximos. 
              Este sistema pode ser usado estrategicamente em batalhas navais contra múltiplos inimigos.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Ship className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Óleo Fervente</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Arma exclusiva do Morrigan que permite despejar óleo fervente atrás do navio, incendiando 
              perseguidores. Uma mecânica defensiva brilhante que não existe em nenhum outro AC.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Snowflake className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Perigos Ambientais</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Nadar nas águas geladas drena sua vida rapidamente. Tempestades de neve reduzem a visibilidade 
              e podem empurrar o Morrigan contra rochas. Avalanches de gelo podem destruir seu navio instantaneamente.
            </p>
          </div>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-3">🚢 Customização do Morrigan</h4>
          <p className="text-muted-foreground mb-0">
            O Morrigan pode ser personalizado com <strong>melhorias de casco, armamento, velocidade e resistência</strong>. 
            As melhorias são adquiridas com recursos coletados durante a exploração e saques de navios inimigos. 
            As categorias incluem: canhões laterais, morteiros, barris de óleo, armadura do casco, 
            ram (aríete) para quebrar gelo e velas para maior velocidade.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-cyan-400" />
          O Sistema "Anti-Assassino" e Combate
        </h2>

        <p>
          Como Shay conhece todos os truques dos Assassinos, a jogabilidade muda radicalmente. Agora, <strong>você é 
          quem pode ser emboscado</strong> por inimigos escondidos em fardos de feno, telhados ou misturados na multidão.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎯 Mecânicas Anti-Assassino</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li><strong>Detector de Assassinos:</strong> Um indicador na tela avisa quando há um Assassino 
              escondido nas proximidades, criando tensão constante.</li>
              <li><strong>Emboscadas invertidas:</strong> Inimigos podem pular de fardos de feno, cair de telhados 
              ou surgir da multidão para atacá-lo — exatamente como você faria nos outros jogos.</li>
              <li><strong>Interceptações:</strong> Você pode interceptar "Assassination Contracts" contra aliados 
              Templários, protegendo-os de ataques da Irmandade.</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">⚔️ Arsenal de Combate</h4>
            <ul className="text-sm text-muted-foreground space-y-2 mb-0">
              <li><strong>Rifle de Ar:</strong> A arma mais versátil do jogo. Permite disparar dardos soporíferos, 
              dardos berserk (que enlouquecem o alvo) e granadas, tudo silenciosamente.</li>
              <li><strong>Granadas:</strong> Fragmentação, fumaça, estilhaços e shrapnel — cada uma com uso tático 
              diferente para combate direto ou furtividade.</li>
              <li><strong>Espadas e pistolas:</strong> O sistema de combate segue a fórmula de Black Flag, com 
              contra-ataques, quebra de defesa e combos rápidos.</li>
            </ul>
          </div>
        </div>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-4">🔫 Destaque: O Rifle de Ar</h4>
          <p className="text-muted-foreground mb-0">
            Uma das melhores armas da franquia inteira. O Rifle de Ar combina alcance de um sniper com a 
            versatilidade de munições especiais. Com dardos berserk, você pode fazer um capitão inimigo atacar 
            seus próprios soldados, limpando acampamentos inteiros sem ser detectado. É a definição de 
            "trabalho inteligente, não trabalho duro".
          </p>
        </div>

        {/* Atividades e Exploração */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-cyan-400" />
          Atividades Secundárias e Exploração
        </h2>

        <p>
          Além da campanha principal, Rogue oferece uma <strong>quantidade generosa de conteúdo secundário</strong> 
          espalhado pelas três regiões:
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏴 Renovação de Bases</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Capture e renove bases de Assassinos e gangues para ganhar renda passiva, similar ao sistema de 
              torres de AC Brotherhood. Cada base gera um fluxo constante de recursos.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🗺️ Colecionáveis</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Fragmentos do Animus, pinturas nativas, totens, mapas do tesouro e projetos de navios estão 
              espalhados por todas as regiões, incentivando a exploração completa do mapa.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🐻 Caça e Harpooning</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sistema de caça herdado de AC III com adição de pesca com arpão (harpooning) de Black Flag. 
              Os materiais são usados para craftar melhorias para Shay e o Morrigan.
            </p>
          </div>
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
          <li>Explica por que Achilles Davenport estava sozinho e amargurado quando treinou Connor</li>
          <li>Revela o destino de Adéwalé, companheiro de Edward Kenway em Black Flag</li>
          <li>A cena final conecta diretamente com o início de AC Unity (o assassinato de um Templário em Versalhes)</li>
          <li>Essencial para entender o panorama global da guerra secreta Assassinos vs. Templários</li>
        </ul>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h4 className="font-bold mb-3">📖 Ordem Cronológica Recomendada da Saga Kenway</h4>
          <ol className="text-muted-foreground space-y-1 mb-0">
            <li>1. <Link to="/post/ac-black-flag-melhor-jogo-piratas" className="text-primary hover:underline">AC IV: Black Flag</Link> (1715-1722) — Edward Kenway</li>
            <li>2. <strong>AC Rogue</strong> (1752-1760) — Shay Patrick Cormac</li>
            <li>3. <Link to="/post/ac-3-remastered-revolucao-americana" className="text-primary hover:underline">AC III</Link> (1754-1783) — Connor Kenway</li>
          </ol>
          <p className="text-muted-foreground mt-3 mb-0">
            💡 Jogar nessa ordem revela como as ações de cada geração afetam a próxima, criando uma das 
            narrativas mais ricas da franquia.
          </p>
        </div>

        {/* Tempo para Zerar */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Timer className="h-7 w-7 text-cyan-400" />
          Tempo para Zerar
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 text-left font-bold">Estilo de Jogo</th>
                <th className="py-3 px-4 text-left font-bold">Tempo Estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">🎯 Só a história principal</td>
                <td className="py-3 px-4 text-muted-foreground">10 a 12 horas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">⚔️ História + side quests principais</td>
                <td className="py-3 px-4 text-muted-foreground">18 a 22 horas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">🏆 100% (todos colecionáveis e conquistas)</td>
                <td className="py-3 px-4 text-muted-foreground">35 a 40 horas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          ⚡ Rogue tem a <strong>campanha mais curta</strong> da franquia, mas sua qualidade por hora jogada é 
          altíssima. A narrativa é concisa e impactante, sem o "padding" que outros jogos da série sofrem.
        </p>

        {/* DLCs */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Package className="h-7 w-7 text-cyan-400" />
          DLCs e Conteúdo Adicional
        </h2>

        <p>
          Diferente de outros jogos da franquia, Rogue <strong>não possui DLCs de história</strong>. Todo o conteúdo 
          narrativo está no jogo base. Os únicos extras são pacotes cosméticos:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 text-left font-bold">Conteúdo</th>
                <th className="py-3 px-4 text-left font-bold">Tipo</th>
                <th className="py-3 px-4 text-left font-bold">Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Templar Legacy Pack</td>
                <td className="py-3 px-4 text-muted-foreground">Cosmético + missões bônus</td>
                <td className="py-3 px-4 text-muted-foreground">Roupas e armas de Templários clássicos</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Master Templar Pack</td>
                <td className="py-3 px-4 text-muted-foreground">Cosmético</td>
                <td className="py-3 px-4 text-muted-foreground">Armadura e velas exclusivas para o Morrigan</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Versão Remastered (2018)</td>
                <td className="py-3 px-4 text-muted-foreground">Atualização gráfica</td>
                <td className="py-3 px-4 text-muted-foreground">Inclui todos os DLCs + melhorias visuais para PS4/Xbox One/Switch</td>
              </tr>
            </tbody>
          </table>
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
                <td className="py-3 px-4 text-muted-foreground">12 GB (SSD extremamente recomendado para garantir a performance do jogo)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          👉 <strong>Requisitos extremamente leves</strong> — roda até em PCs antigos e notebooks de entrada.
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
          que até notebooks com gráficos integrados modernos (Intel Iris Xe ou AMD Radeon integrada) podem 
          rodar em configurações médias a 30-60 FPS. Um <strong>notebook gamer</strong> de entrada com GTX 1650 
          ou superior roda o jogo no máximo sem qualquer problema.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-cyan-400" />
          PC ou Console: Qual Vale Mais a Pena?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">💻 PC Gamer</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ Melhores gráficos e taxa de quadros</li>
              <li>✔ Promoções absurdas (menos de R$ 20 em sales)</li>
              <li>✔ Roda em qualquer PC moderno</li>
              <li>✔ Suporte a mods da comunidade</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-3">🎮 Console</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>✔ PS3, PS4, Xbox 360, Xbox One, Switch</li>
              <li>✔ Versão Remastered com melhorias visuais</li>
              <li>✔ Praticidade (plug and play)</li>
              <li>✔ Portabilidade no Nintendo Switch</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-cyan-400" />
          Vale a Pena Comprar Rogue em 2026?
        </h2>

        <p><strong>Vale muito a pena</strong> se você:</p>
        <ul>
          <li>Quer ver a perspectiva dos Templários pela primeira vez na franquia</li>
          <li>Gosta da jogabilidade naval de Black Flag e quer mais</li>
          <li>Quer entender a saga Kenway completa (Edward → Shay → Connor)</li>
          <li>Busca um jogo curto, barato e com narrativa impactante</li>
          <li>Quer entender por que Achilles estava tão diferente em AC III</li>
        </ul>

        <p><strong>Pode não ser para você</strong> se:</p>
        <ul>
          <li>Prefere jogos longos com 60+ horas de campanha</li>
          <li>Não gosta de mecânicas navais (são uma parte significativa do jogo)</li>
          <li>Espera gráficos de última geração (mesmo a versão Remastered é modesta)</li>
        </ul>

        {/* Where to Play */}
        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/20 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4">🎮 Onde Jogar?</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>PC:</strong> Steam, Epic Games Store, Ubisoft Connect</li>
            <li>✓ <strong>PlayStation 3, PlayStation 4</strong></li>
            <li>✓ <strong>Xbox 360, Xbox One e Xbox Series X|S</strong> (retrocompatibilidade)</li>
            <li>✓ <strong>Nintendo Switch</strong> (versão Remastered)</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Preço médio: R$ 40 a R$ 70 (frequentemente abaixo de R$ 20 em promoções na Steam)
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você acha que Shay estava certo em abandonar os Assassinos?
          </h3>
          <p className="text-muted-foreground">
            A decisão dele foi justa ou ele era apenas um traidor? Conta pra gente nos comentários! 👇
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
