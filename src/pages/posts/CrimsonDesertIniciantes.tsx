import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Compass, Shield, Zap, MapPin, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/crimson-desert-iniciantes.webp";

const CrimsonDesertIniciantes = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-guia-iniciantes-dicas", "Crimson Desert: Guia de Dicas para Iniciantes — Tudo que Você Precisa Saber", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/crimson-desert" portalLabel="Painel Crimson Desert" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">Crimson Desert · Iniciantes</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia de Dicas para Iniciantes — Tudo que Você Precisa Saber antes de Entrar em Pywel
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />29 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />20 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert guia iniciantes dicas Pywel" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert é um dos jogos de mundo aberto mais ambiciosos de 2026 — e um dos mais intimidadores para iniciantes. A Pearl Abyss não segura sua mão: você é despejado em Pywel com sistemas complexos, mecânicas sobrepostas e quase zero explicação. Após centenas de horas da comunidade global catalogando tudo, aqui estão as <strong>20 dicas essenciais</strong> que você precisa saber antes de começar.
        </p>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <p className="font-bold mb-2">📋 O que este guia cobre:</p>
          <div className="grid sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
            {["Progressão de personagem sem XP","Sistema de fast travel e exploração","Combate e mecânicas de boss","Inventário e gerenciamento de recursos","Companheiros e animais de estimação","Culinária e cura durante combate","Missões de fação e priorização","Erros comuns que custam horas de jogo"].map(i => <p key={i} className="mb-0">• {i}</p>)}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-red-400" />
          O Básico: Como Crimson Desert Funciona
        </h2>
        <p>
          Antes de qualquer dica específica, entenda a filosofia do jogo: <strong>Crimson Desert não tem sistema de XP</strong>. Você não sobe de nível matando inimigos. Seu personagem evolui exclusivamente através de <strong>Abyss Artifacts</strong> — itens encontrados explorando o mundo, derrotando bosses e completando desafios. Cada Artifact pode ser usado para desbloquear habilidades novas ou melhorar HP, Stamina e Spirit.
        </p>
        <p>
          Isso significa que explorar o mapa é mais importante que farmar inimigos. Cada área tem segredos, artefatos escondidos e recompensas únicas que nunca respawnam.
        </p>

        <div className="not-prose my-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <p className="font-bold text-red-400 mb-1">⚠️ Erro #1 — Gastar Artifacts muito cedo</p>
          <p className="text-sm text-muted-foreground mb-0">Abyss Artifacts são compartilhados entre Kliff, Damiane e Oongka. Se você gastar todos os Artifacts em habilidades de Kliff antes de desbloquear os outros personagens, ficará sem recursos para evoluí-los. Guarde pelo menos 10-15 Artifacts antes de cada novo personagem ser liberado.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-red-400" />
          Dicas de Combate — 7 Mecânicas que o Jogo Não Explica
        </h2>

        <div className="not-prose space-y-4 my-4">
          {[
            {
              num:"01", title:"Segure o botão de ataque, não martelee",
              desc:"Ao invés de pressionar o botão de ataque básico repetidamente (R1 no PS5), segure-o. Isso faz com que Kliff ataque continuamente o alvo — muito mais eficiente e confortável para combates longos.",
            },
            {
              num:"02", title:"Use grapples (agarrão) em todos os inimigos humanoides",
              desc:"Sprint em direção ao inimigo e pressione F (Y no controle) para um chute frontal que derruba. Agarrão funciona como crowd control excelente — inimigos próximos hesitam em atacar com medo de atingir o refém.",
            },
            {
              num:"03", title:"Desvio de flechas é fundamental",
              desc:"Arqueiros são os inimigos mais perigosos em grupos grandes — vá até as bordas da batalha e elimine-os primeiro. Em multidões de 20+ inimigos, os arqueiros recuam para as bordas e uma flecha pode derrubar você no momento errado.",
            },
            {
              num:"04", title:"Armas caem no chão — e você pode pegá-las",
              desc:"Inimigos podem te desarmar, mas você também pode pegar as armas que eles derrubam no chão. Se perder sua arma principal, procure no chão imediatamente — às vezes você pode usar a arma do próprio inimigo.",
            },
            {
              num:"05", title:"Force Palm tem usos de travessia que o jogo não conta",
              desc:"Force Palm pode ser pressionado até 3 vezes após um salto para um triplo-boost de altura. Focused Force Palm (carregado) funciona em estruturas para agarrar e se lançar. Use no botão Resist enquanto pendurado para um impulso especial.",
            },
            {
              num:"06", title:"Pilares quebrados = 25-50% do HP do boss",
              desc:"Se um boss quebrar um pilar durante a luta, use Nature's Grasp para arremessá-lo nele. Geralmente causa 25-50% do HP total do boss em dano — um dos hits mais poderosos do jogo.",
            },
            {
              num:"07", title:"Habilidades de boss podem ser aprendidas de graça",
              desc:"Se um boss usar uma habilidade específica repetidamente durante o combate, Kliff pode aprendê-la permanentemente pelo sistema watch-and-learn sem precisar gastar um Abyss Artifact. Observe as animações durante a luta.",
            },
          ].map(tip => (
            <div key={tip.num} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
              <span className="text-2xl font-display font-bold text-red-400 shrink-0 w-8">{tip.num}</span>
              <div>
                <p className="font-bold mb-1">{tip.title}</p>
                <p className="text-sm text-muted-foreground mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-red-400" />
          Exploração — 5 Dicas para Dominar Pywel
        </h2>

        <div className="not-prose space-y-4 my-4">
          {[
            {
              num:"08", title:"Siga a história principal primeiro — não explore às cegas",
              desc:"Certas habilidades de travessia essenciais (Focus Palm Force e Voo) só são desbloqueadas progredindo na história. Sem elas, grandes partes do mapa são inacessíveis. Complete os primeiros capítulos antes de explorar livremente.",
            },
            {
              num:"09", title:"Suba nas torres de sinais e toque os sinos",
              desc:"Em cada cidade grande há torres com sino. Subir e tocar o sino remove o fog of war da região inteira e revela pontos de interesse — exatamente como as torres do Assassin's Creed. Faça isso em cada cidade que você visitar.",
            },
            {
              num:"10", title:"Fast travel é escasso — desbloque Abyss Nexus ativamente",
              desc:"Diferente de outros open worlds, fast travel é raro em Crimson Desert. Jogadores relatam gastar 25 horas sem encontrar um único ponto de teleporte. Procure ativamente por pontos de névoa no mapa com interrogações — eles marcam Abyss Nexus ou Abyss Cressets (ambos são fast travel + recompensas).",
            },
            {
              num:"11", title:"Marcas '?' no mapa são sempre segredos valiosos",
              desc:"Ao passar o cursor sobre áreas envoltas em névoa, o jogo sugere 'energia mágica misteriosa'. Sempre investigue. Cerca de 40% desses pontos são fast travel, o restante são Abyss Artifacts, receitas raras ou missões ocultas.",
            },
            {
              num:"12", title:"Planei conservando stamina",
              desc:"Ao planar, você gasta stamina rapidamente. A técnica correta: cancele o voo e caia por alguns segundos (stamina se regenera em queda livre), depois retome o planador. Combine com comida de stamina para atravessar distâncias enormes.",
            },
          ].map(tip => (
            <div key={tip.num} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
              <span className="text-2xl font-display font-bold text-red-400 shrink-0 w-8">{tip.num}</span>
              <div>
                <p className="font-bold mb-1">{tip.title}</p>
                <p className="text-sm text-muted-foreground mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-red-400" />
          Sobrevivência e Recursos — 5 Dicas que Salvam Vidas
        </h2>

        <div className="not-prose space-y-4 my-4">
          {[
            {
              num:"13", title:"Estoque carne grelhada antes de qualquer boss",
              desc:"Carne Grelhada (Grilled Meat) é sua principal fonte de cura em combate — sem limite de uso. Leve pelo menos 100 unidades para cada boss. Abata grupos de animais com o ataque especial (R1+R2 no PS5) para eliminar vários de uma vez — cada animal dá 3-4 carnes. Cozinhe no caldeirão perto do vendedor de carnes em Hernand.",
            },
            {
              num:"14", title:"Craft Palmar Pills — são auto-revive portátil",
              desc:"Palmar Pills permitem reviver com 30% de HP. São craftáveis com ingredientes simples de alquimia: água + insetos coletados + plantas colhidas. Tenha sempre um estoque — especialmente para o confronto final contra Caliburn (3 bosses consecutivos).",
            },
            {
              num:"15", title:"Compre mochilas extras em cada vendedor que encontrar",
              desc:"Quase todo vendedor vende uma mochila barata que aumenta seu inventário em 1 slot. Parece pouco, mas visitando todos os vendedores de Hernand você pode ganhar 12+ slots cedo. Missões de fação de cada região também concedem 3 slots extras por missão. No final do jogo, você pode ter 200+ slots.",
            },
            {
              num:"16", title:"Invest em HP e Stamina antes de habilidades",
              desc:"Gaste seus primeiros Abyss Artifacts nos nós vermelhos (HP), azuis (Stamina) e verdes (Spirit) em vez de habilidades novas e chamativas. Stamina determina sua capacidade de bloquear, atacar e correr — mais crítica ainda nos boss fights iniciais. Habilidades podem ser aprendidas de graça pelo sistema watch-and-learn.",
            },
            {
              num:"17", title:"Acione o Abyss Nexus do Camp Greymane imediatamente",
              desc:"Após completar o Ato 4 e obter o Focus Force Palm, vá até a Karin Quarry, desça até as ruínas, pegue o Transporter e volte à colina perto do acampamento para ativar o Nexus. Isso cria um fast travel permanente para sua base de operações.",
            },
          ].map(tip => (
            <div key={tip.num} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
              <span className="text-2xl font-display font-bold text-red-400 shrink-0 w-8">{tip.num}</span>
              <div>
                <p className="font-bold mb-1">{tip.title}</p>
                <p className="text-sm text-muted-foreground mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-red-400" />
          Companheiros, Missões e Sistemas Avançados — 3 Dicas Finais
        </h2>

        <div className="not-prose space-y-4 my-4">
          {[
            {
              num:"18", title:"Penteie animais todos os dias — eles viram pets que coletam loot",
              desc:"Centenas de cães e gatos habitam Pywel. Ao petear um animal regularmente ao longo de vários dias, você constrói confiança com aquele animal específico. Ao atingir 100 de confiança, ele pode ser convocado e ajudar a coletar itens automaticamente de inimigos derrotados.",
            },
            {
              num:"19", title:"Missões de fação expandem o mapa e dão slots de inventário",
              desc:"Cada região tem missões de fação que concedem recompensas únicas impossíveis de obter de outra forma: slots de inventário, armas exclusivas e conhecimento sobre lore. Em Hernand, complete as Hernand Commission quests — cada uma dá 3 slots extras de inventário.",
            },
            {
              num:"20", title:"Salvar manual existe — mas está escondido",
              desc:"O jogo salva automaticamente, mas você também pode salvar manualmente a qualquer momento. No menu de save, existem 3 autosaves na parte superior e slots manuais abaixo deles. Role para baixo além dos autosaves para encontrar um slot manual vazio — então o botão Salvar ficará disponível.",
            },
          ].map(tip => (
            <div key={tip.num} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
              <span className="text-2xl font-display font-bold text-red-400 shrink-0 w-8">{tip.num}</span>
              <div>
                <p className="font-bold mb-1">{tip.title}</p>
                <p className="text-sm text-muted-foreground mb-0">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="not-prose my-6 p-5 bg-card border border-border rounded-xl">
          <h3 className="font-bold mb-3">🎮 Controle ou Mouse/Teclado?</h3>
          <p className="text-sm text-muted-foreground mb-0">
            A vasta maioria dos players e a própria comunidade recomendam jogar Crimson Desert com um controle PS5/Xbox — o jogo foi claramente desenhado pensando em controles. Mouse e teclado funcionam, mas o sistema de combate complexo fica significativamente mais difícil. Se você tem um controle disponível, use.
          </p>
        </div>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual dica mais te ajudou? 🗡️</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-guia-iniciantes-dicas" />
      <CommentSection postId="crimson-desert-guia-iniciantes-dicas" postTitle="Crimson Desert: Guia de Dicas para Iniciantes" />
    </article>
  );
};

export default CrimsonDesertIniciantes;
