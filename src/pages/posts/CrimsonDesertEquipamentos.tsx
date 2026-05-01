import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Sword, Shield, MapPin, Star, Package, Wrench } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/crimson-desert-equipamentos.webp";

const CrimsonDesertEquipamentos = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-melhores-equipamentos-inicio", "Crimson Desert: Melhores Equipamentos do Início — Onde Encontrar", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert · Equipamentos</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Melhores Equipamentos do Início ao Meio de Jogo — Onde Encontrar Cada Um
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />29 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />18 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert equipamentos melhores armas armaduras início" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Pearl Abyss escondeu as melhores armas, armaduras e itens de Crimson Desert em locais que a maioria dos jogadores passa horas sem descobrir — atrás de cachoeiras, em cavernas secundárias, com vendedores obscuros, ou como recompensas de bosses opcionais. Sem esses equipamentos, alguns bosses são literalmente impossíveis de derrotar sem grind excessivo. Este guia lista os <strong>20 melhores equipamentos</strong> do início ao meio de jogo e exatamente onde encontrar cada um.
        </p>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <h3 className="font-bold mb-2">💡 Como o sistema de equipamento funciona</h3>
          <p className="text-sm text-muted-foreground mb-0">
            Crimson Desert não tem "level" de personagem — o poder vem do equipamento. Cada arma pode ter <strong>Abyss Gears</strong> encaixados (bônus passivos) e ser <strong>refinada</strong> no ferreiro usando cobre, ferro e Bloodstone (máximo nível). Equipamentos craftados frequentemente superam drops de inimigos. Sempre refine — a diferença é enorme.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-red-400" />
          Melhores Armas — Início do Jogo
        </h2>

        {/* SWORD OF THE LORD */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">🗡️</span> Sword of the Lord — Melhor Espada de Uma Mão (Início-Meio)
        </h3>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-3 text-sm">
          {[["📍 Onde Obter","Derrote Kailok the Hornsplitter — Acampamento Goblin, Hernand"],["⚡ Habilidade Especial","Abyssal Core Wind Slash: envia ondas de vento nos inimigos"],["🔧 Tipo","Espada de uma mão"],["💡 Observação","Melhor arma de 1 mão desde o início até o meio do jogo sem dúvida"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs text-muted-foreground">{k}</p><p className="font-medium">{v}</p></div>
          ))}
        </div>
        <p>
          A Sword of the Lord é provavelmente a arma mais importante que você pode obter cedo. O boss que a dropa (Kailok) é obrigatório na progressão e não é particularmente difícil. O Wind Slash transforma seu alcance de combate — você não precisa estar corpo a corpo para acertar inimigos. A receita para craftá-la também existe na Caverna Shadow Whispers próxima à ponte de Hernand.
        </p>

        {/* TAURIA'S CURVED SWORD */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">⚔️</span> Tauria's Curved Sword — Melhor Espada Curva Inicial
        </h3>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-3 text-sm">
          {[["📍 Onde Obter","Derrote Draven the Crowcaller — Floresta, missão de facção"],["⚡ Habilidade Especial","Alta velocidade de ataque + combos longos"],["🔧 Tipo","Espada curva (velocidade)"],["💡 Observação","Ideal para estilo de combate agressivo e rápido"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs text-muted-foreground">{k}</p><p className="font-medium">{v}</p></div>
          ))}
        </div>
        <p>
          A Tauria's Curved Sword complementa a Sword of the Lord perfeitamente — enquanto a segunda tem alcance e poder, a Tauria oferece velocidade brutal. Use as duas em rotação para maximizar o medidor de stagger dos bosses.
        </p>

        {/* BROKEN SPEAR */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">🏹</span> Broken Spear — Melhor Arma Gratuita do Início
        </h3>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-3 text-sm">
          {[["📍 Onde Obter","Disponível no início da história — área de Hernand"],["⚡ Habilidade Especial","Evasive Slash Counter: contra-ataque após esquiva com slash devastador"],["🔧 Tipo","Lança (alcance médio)"],["💡 Observação","Gratuita e melhor do que parece — Evasive Slash é uma habilidade broken"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs text-muted-foreground">{k}</p><p className="font-medium">{v}</p></div>
          ))}
        </div>
        <p>
          A lança quebrada que Kliff carrega no início do jogo tem uma habilidade escondida que a maioria ignora: o Evasive Slash Counter. Ao esquivar e ativar no timing correto, o dano é desproporcional para uma arma de entrada. Muitos jogadores avançados continuam usando-a como arma secundária por horas de jogo.
        </p>

        {/* FLAMESPITTER */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">🔥</span> Flamespitter — Arma Especial de Fogo
        </h3>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-3 text-sm">
          {[["📍 Onde Obter","Sealed Abyss Artifact — interseção sul do Varnia Saltroad Camp (Crimson Desert region)"],["⚡ Habilidade Especial","Queima 10 inimigos em 15 segundos — dano de área massivo"],["🔧 Tipo","Arma especial / challenge weapon"],["💡 Observação","Exige completar o desafio do Artifact para desbloquear"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs text-muted-foreground">{k}</p><p className="font-medium">{v}</p></div>
          ))}
        </div>
        <p>
          O Flamespitter é uma das 10 Special Equipment Weapons — armas especiais desbloqueadas ao completar desafios de Sealed Abyss Artifacts. Encontre o Artifact na interseção sul do acampamento Varnia Saltroad e complete o desafio (queimar 10 inimigos em 15 segundos). Essencial contra bosses vulneráveis a fogo como White Horn.
        </p>

        {/* KNUCKLEDRILL */}
        <h3 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
          <span className="text-red-400">⚙️</span> Knuckledrill — Arma/Ferramenta Versátil
        </h3>
        <div className="not-prose grid sm:grid-cols-2 gap-3 my-3 text-sm">
          {[["📍 Onde Obter","House Roberts: Estate in Dismay – Stolen Quarry quest — Hernand"],["⚡ Habilidade Especial","Perfura inimigos continuamente ao segurar; também serve para mineração"],["🔧 Tipo","Gadget dual-use (combate + extração)"],["💡 Observação","Vendeu? Inimigos robôs em Delesyia também a dropam"]].map(([k,v])=>(
            <div key={k} className="bg-card border border-border rounded-lg p-3"><p className="font-bold text-xs text-muted-foreground">{k}</p><p className="font-medium">{v}</p></div>
          ))}
        </div>
        <p>
          O Knuckledrill é único: funciona como arma e como ferramenta de mineração. No slot secundário, permite minerar minério sem precisar de uma picareta separada. Em combate, segurar o ataque básico faz Kliff perfurar o inimigo continuamente. Se você vendeu por engano, inimigos robôs na área de Delesyia podem dropar uma nova via o seu animal de estimação.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Melhores Armaduras — Início do Jogo
        </h2>

        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Peça</TableHead><TableHead>Localização</TableHead><TableHead>Como Obter</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Luvas do Fallen Kingdom","Caverna atrás da Cachoeira — norte de Hernand","Explore a cachoeira no norte. Entrada escondida pela névoa"],
                ["Botas do Fallen Kingdom","Caverna atrás da segunda Cachoeira — leste de Pailune","Mesma mecânica — segunda cachoeira na região de Pailune"],
                ["Armadura completa de Cavaleiro","Derrote Fortain the Cursed Knight — dungeon de facção","Boss opcional em dungeon — recomendado para Capítulo 3+"],
                ["Elmo de Hernand","Completar série de missões Hernand Commission","3 missões = 3 slots de inventário + capacete de região"],
                ["Peitoral dos Greymanes","Missões de facção Greymane — Camp upgrades","Upgrade o camp Greymane o quanto antes possível"],
              ].map(([p,l,h]) => (
                <TableRow key={p}>
                  <TableCell className="font-medium">{p}</TableCell>
                  <TableCell className="text-sm">{l}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      <AdRectangle className="my-8" />

        <div className="not-prose my-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <p className="font-bold text-amber-400 mb-1">💡 Refined Concentrate — Cura Premium</p>
          <p className="text-sm text-muted-foreground mb-0">
            Os Refined Concentrates (versão melhorada do Palm Concentrate) curam muito mais que o concentrado normal. Não possuem receita conhecida até o momento — mas podem ser encontrados nas <strong>cavernas atrás das cachoeiras</strong>, especialmente nas que guardam as luvas e botas do Fallen Kingdom. Guarde para os bosses mais difíceis.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Package className="h-7 w-7 text-red-400" />
          Itens Essenciais — Não Jogue Sem Eles
        </h2>

        <div className="not-prose space-y-4 my-4">
          {[
            {
              icon:"🎭", name:"A Máscara (Crime Mask)",
              where:"Primeira missão de caçada a recompensas em Hernand",
              how:"Jeffrey (NPC em Hernand) rouba suas moedas ao se aproximar. Derrube-o, dê dois socos, amarre-o e leve até os guardas perto da prisão.",
              why:"Sem máscara, você não pode roubar em Crimson Desert. Com ela, pode abrir baús, entrar em mansões e acessar áreas restritas — essencial para missões Wondo e Oath of Darkness.",
            },
            {
              icon:"🧪", name:"Palm Concentrates (Concentrados)",
              where:"Receita na Shadow Whispers Cave (perto da grande ponte de Hernand)",
              how:"Crafted com 3 águas + 15 recursos naturais (chifres de cabra ou plantas) em um caldeirão de bruxa. Sem limite de produção.",
              why:"Cura em área. A community descobriu que esses itens literalmente dividem a dificuldade de muitos bosses pela metade. Produza o máximo possível antes de cada boss.",
            },
            {
              icon:"⛏️", name:"Picareta e Machado",
              where:"Qualquer ferreiro ou loja de ferramentas em Hernand",
              how:"Compre logo no início — são baratos.",
              why:"Permitem farmar minério e madeira, recursos necessários para upgrades de equipamento. Sem eles, você depende de drops aleatórios para refinar armas.",
            },
            {
              icon:"🎒", name:"Mochilas de Slot Adicional",
              where:"Praticamente todo vendedor em Pywel",
              how:"Cada vendedor vende uma mochila barata com +1 slot. Compre de todos que encontrar.",
              why:"Sem slots suficientes você perde loot valioso ou precisa descartar itens constantemente. Missões de facção também dão +3 slots cada — complete-as.",
            },
          ].map(item => (
            <div key={item.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h4 className="font-bold">{item.name}</h4>
              </div>
              <div className="grid sm:grid-cols-3 gap-2 text-sm">
                <div><p className="font-bold text-xs text-muted-foreground mb-1">Onde encontrar</p><p>{item.where}</p></div>
                <div><p className="font-bold text-xs text-muted-foreground mb-1">Como obter</p><p>{item.how}</p></div>
                <div><p className="font-bold text-xs text-muted-foreground mb-1">Por que é essencial</p><p>{item.why}</p></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-red-400" />
          Como Refinar Equipamentos — Guia Rápido
        </h2>
        <p>
          O refinamento é feito em <strong>Smithies (ferreiros)</strong> espalhados pelos assentamentos de Pywel. Os materiais para cada nível são:
        </p>
        <div className="not-prose overflow-x-auto my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nível de Refinamento</TableHead><TableHead>Material Principal</TableHead><TableHead>Onde Encontrar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Nível 1–3","Cobre (Copper)","Abundante em toda Pywel — minere com picareta"],
                ["Nível 4–6","Minério de Ferro (Iron Ore)","Minas e cavernas de Hernand e Pailune"],
                ["Nível 7+ (Máximo)","Bloodstone","Encontrado em cavernas profundas e como drop de bosses"],
              ].map(([l,m,w]) => (
                <TableRow key={l}>
                  <TableCell className="font-medium">{l}</TableCell>
                  <TableCell>{m}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{w}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p>
          <strong>Dica crítica:</strong> Cobre e ferro são muito fáceis de encontrar — refine sua arma principal ao máximo assim que possível. Contra bosses de múltiplas fases e inimigos elite, a diferença entre refinado e não-refinado é substancial. Não negligencie o Bloodstone — são raros mas valem cada ponto investido.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-red-400" />
          Habilidades Essenciais — As 3 que Você Deve Desbloquear Primeiro
        </h2>
        <div className="not-prose grid sm:grid-cols-3 gap-4 my-4">
          {[
            ["Nature's Echo","Habilidade de área que atinge múltiplos inimigos. Essencial para grupos. Desbloqueia cedo na árvore de habilidades."],
            ["Quick Swap","Permite trocar de arma instantaneamente sem animação. Fundamental para combate avançado onde você alterna entre duas armas."],
            ["Blinding Flash","Atordoa inimigos e bosses por alguns segundos. Funciona como fraqueza em vários bosses específicos. Cria janelas de ataque seguras."],
          ].map(([name,desc]) => (
            <div key={name} className="p-4 bg-card border border-border rounded-xl text-center">
              <p className="font-bold mb-2">{name}</p>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual equipamento mudou seu jogo? ⚔️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["geek"]} />
      <RelatedPosts currentSlug="crimson-desert-melhores-equipamentos-inicio" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection postId="crimson-desert-melhores-equipamentos-inicio" postTitle="Crimson Desert: Melhores Equipamentos do Início — Onde Encontrar" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default CrimsonDesertEquipamentos;
