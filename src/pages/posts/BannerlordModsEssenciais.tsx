import { useEffect } from "react";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock,
  User,
  Calendar,
  Hammer,
  Cpu,
  Wrench,
  Sword,
  Shield,
  Crown,
  Eye,
  AlertTriangle,
  Download,
  Settings,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BackNavigation from "@/components/BackNavigation";
import SkeletonImage from "@/components/SkeletonImage";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import heroImg from "@/assets/bannerlord-mods-essenciais.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const coreLibs = [
  { name: "Harmony", version: "v2.4.2.227", role: "Patcher de runtime", desc: "Biblioteca base que permite a qualquer outro mod modificar código do jogo em tempo de execução. Sem Harmony, 90% dos mods do Nexus simplesmente não carregam." },
  { name: "ButterLib", version: "v2.10.4.0", role: "Utilitários compartilhados", desc: "Coleção de helpers que padroniza logging, injeção de dependências e ciclo de vida. Praticamente todo mod grande lista ButterLib como pré-requisito." },
  { name: "UIExtenderEx", version: "v2.13.2.0", role: "Extensões de interface", desc: "Permite que mods adicionem botões, abas e menus à UI do jogo sem sobrescrever os XMLs originais — evitando conflitos entre múltiplos mods de interface." },
  { name: "Mod Configuration Menu v5", version: "v5.11.4.0", role: "Painel de opções in-game", desc: "Adiciona um menu central de configurações dentro do próprio Bannerlord. Cada mod compatível ganha sua aba, com sliders e toggles ajustáveis sem editar arquivos XML." },
];

const qolMods = [
  { name: "Attribute Per Level", version: "v1.0.6.0", category: "Personagem", desc: "Dá um ponto de atributo a cada nível, em vez do ritmo padrão (1 a cada 4). Acelera builds de personagem sem quebrar a curva de dificuldade." },
  { name: "Character Reload", version: "e1.4.5.0", category: "Personagem", desc: "Permite reabrir o criador de personagem a qualquer momento da campanha. Útil para corrigir builds erradas ou ajustar visual após dezenas de horas." },
  { name: "CourierMessenger", version: "v1.2.2.0", category: "Diplomacia", desc: "Sistema de mensageiros entre clãs e reinos. Você envia ordens, faz propostas e negocia tratados sem precisar viajar fisicamente até cada NPC." },
  { name: "Better Time", version: "v1.1.2.0", category: "Conveniência", desc: "Ajusta a velocidade do tempo no mapa do mundo, com presets e atalhos extras. Pequena mudança, impacto enorme em campanhas longas." },
  { name: "Horses", version: "v1.0.7.0", category: "Economia", desc: "Rebalanceia preços, disponibilidade e qualidade de cavalos em vilas e cidades. Faz com que mercados de equinos tenham comportamento mais realista." },
  { name: "Jim High Loyalty For Every Town", version: "v1.0.0.0", category: "Governança", desc: "Aumenta a lealdade base de toda cidade conquistada. Elimina o problema crônico de rebeliões em massa logo após a tomada de territórios." },
];

const combatMods = [
  { name: "Dismemberment (Plus) for v1.4.5", version: "v2.0.8.6", category: "Combate visual", desc: "Adiciona desmembramento e decapitação realistas baseados no tipo de dano. Cabeças voam com golpes pesados, membros são cortados por machados. Sangue dinâmico nas armaduras." },
  { name: "RTS Camera", version: "v5.4.3.0", category: "Câmera tática", desc: "Substitui a câmera padrão por uma vista RTS livre — você pode flutuar pelo campo de batalha, dar zoom em qualquer unidade e comandar como em um Total War." },
  { name: "RTS Camera Command System", version: "v5.4.3.0", category: "Comando tático", desc: "Complemento do RTS Camera: adiciona painel completo de ordens (formações, manobras, foco de fogo, retiradas controladas) acessível pela vista de cima." },
];

const bigOverhauls = [
  { name: "BannerKings", role: "Mundo + política", desc: "Adiciona títulos feudais, religiões, demografia, impostos progressivos e linhagens hereditárias. Transforma a campanha em um Crusader Kings light, sem perder a base do Bannerlord." },
  { name: "Diplomacy", role: "Relações entre reinos", desc: "Reescreve o sistema diplomático: pactos de não agressão, vassalagens, tributos, alianças militares e divisão de espólios em guerras conjuntas." },
  { name: "Improved Garrisons", role: "Defesa de cidades", desc: "Permite controlar manualmente as guarnições — tipos de tropa, salários, recrutamento automático e treinamento. Resolve o calcanhar de Aquiles do meta-game." },
  { name: "Realistic Battle Mod (RBM)", role: "Combate realista", desc: "Refaz armaduras, dano por tipo, IA de mira e penetração de armas. Lutas ficam mais letais, mais lentas e mais táticas. É a base de todos os servidores PvP sérios." },
  { name: "Distinguished Service", role: "Companheiros", desc: "Promove soldados de elite a companheiros nomeados com base em feitos em batalha. Resolve a escassez crônica de wanderers em campanhas longas." },
  { name: "Calradia Expanded: Kingdoms", role: "Conteúdo", desc: "Adiciona seis culturas menores (piratas, mercenários e tribos), novas tropas e novos territórios — sem entrar em conflito com a expansão War Sails." },
];

const loadOrder = [
  { step: 1, label: "Native + Sandbox Core + Storymode", note: "Módulos oficiais sempre primeiro." },
  { step: 2, label: "Harmony", note: "Sem ele, nada que use patch carrega." },
  { step: 3, label: "ButterLib", note: "Depende de Harmony, mas vem antes de UIExtender." },
  { step: 4, label: "UIExtenderEx", note: "Toda alteração de UI depende dele." },
  { step: 5, label: "Mod Configuration Menu v5", note: "Logo após UIExtenderEx para registrar abas." },
  { step: 6, label: "Bibliotecas auxiliares (Open Source Armory, etc.)", note: "Antes dos mods que as consomem." },
  { step: 7, label: "Mods de overhaul (BannerKings, Diplomacy, RBM)", note: "Ordem alfabética entre eles costuma funcionar." },
  { step: 8, label: "Mods de QoL e cosméticos", note: "Por último, para sobrescrever ajustes finais." },
];

const tableWrapClass = "not-prose my-6 rounded-xl border border-amber-500/30 overflow-hidden";
const tableClass = "w-full table-fixed border-collapse bg-card text-sm";
const thClass = "text-left py-3 px-3 md:px-4 font-bold text-amber-200 uppercase tracking-wider text-xs whitespace-normal break-words leading-snug";
const tdClass = "py-3 px-3 md:px-4 text-muted-foreground whitespace-normal break-words leading-relaxed align-top";
const nameCellClass = "py-3 px-3 md:px-4 font-semibold text-foreground whitespace-normal break-words leading-snug align-top";
const versionCellClass = "py-3 px-3 md:px-4 text-amber-200 font-mono text-xs whitespace-normal break-words leading-snug align-top";

const BannerlordModsEssenciais = () => {
  useEffect(() => {
    trackArticleRead(
      "bannerlord-mods-essenciais-2026",
      "Mods Essenciais de Bannerlord 2: Bibliotecas, QoL, Combate e Overhauls",
      "geek",
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/bannerlord" portalLabel="Painel Bannerlord" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium flex items-center gap-1.5">
            <Hammer className="h-3.5 w-3.5" /> Mods · Guia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Mods Essenciais de Bannerlord 2: Bibliotecas, QoL, Combate e Overhauls
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />21 de Junho, 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="21 de Junho, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <SkeletonImage
          priority
          src={heroImg}
          alt="Setup de PC rodando Mount and Blade II Bannerlord com menu de mods em destaque"
          width={1920}
          height={1080}
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-display
        prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
        prose-h2:pb-2 prose-h2:border-b prose-h2:border-amber-500/30
        prose-h2:text-amber-300
        prose-h3:text-xl prose-h3:font-bold prose-h3:text-amber-200 prose-h3:mt-6 prose-h3:mb-2
        prose-strong:text-foreground
        prose-a:text-amber-300"
      >
        <p className="lead text-xl text-muted-foreground">
          <strong>Mount &amp; Blade II: Bannerlord</strong> é, sem exagero, um dos jogos mais modáveis em
          atividade na década. Seis anos depois do early access e quase dois anos depois da expansão{" "}
          <strong className="text-amber-300">War Sails</strong>, a comunidade do Nexus Mods e da Steam Workshop
          mantém o jogo no top 20 de títulos com mais mods novos por mês. Este guia organiza o ecossistema em
          quatro camadas — <strong>bibliotecas-base</strong>, <strong>quality of life</strong>,{" "}
          <strong>combate &amp; câmera</strong> e <strong>grandes overhauls</strong> — e explica a ordem de
          carregamento correta para a campanha não quebrar logo na primeira tela de loading.
        </p>

        <AdLeaderboard className="my-6" />

        <h2><Cpu className="inline h-7 w-7 mr-2 -mt-1" />Camada 1: Bibliotecas-Base (Obrigatórias)</h2>
        <p>
          Antes de instalar qualquer mod &quot;divertido&quot;, é preciso instalar a fundação. Estas quatro
          bibliotecas não adicionam conteúdo visível ao jogo — elas existem para que os outros mods possam
          funcionar sem se conflitar. Se você abrir o launcher e ver erros do tipo &quot;<em>Module not loaded:
          missing dependency</em>&quot;, quase sempre é porque uma destas quatro está faltando, está desatualizada
          ou foi carregada na ordem errada.
        </p>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead className="bg-amber-500/15">
              <tr>
                <th className={`${thClass} w-[22%]`}>Biblioteca</th>
                <th className={`${thClass} w-[18%]`}>Versão estável</th>
                <th className={`${thClass} w-[22%]`}>Função</th>
                <th className={thClass}>Por que importa</th>
              </tr>
            </thead>
            <tbody>
              {coreLibs.map((m, i) => (
                <tr key={m.name} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className={nameCellClass}>{m.name}</td>
                  <td className={versionCellClass}>{m.version}</td>
                  <td className={tdClass}>{m.role}</td>
                  <td className={tdClass}>{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          A regra prática é simples: instale as quatro na ordem da tabela e marque-as no topo do launcher,
          acima de qualquer outro módulo. <strong>Harmony</strong> precisa carregar primeiro porque é o sistema
          de patching de runtime usado por <strong>ButterLib</strong>; ButterLib registra utilitários que{" "}
          <strong>UIExtenderEx</strong> consome para injetar elementos visuais; e o{" "}
          <strong>Mod Configuration Menu (MCM)</strong> só consegue desenhar suas abas se UIExtenderEx já
          estiver ativo. Errar a ordem dessas quatro é o motivo mais comum de crash no boot.
        </p>

        <h2><Wrench className="inline h-7 w-7 mr-2 -mt-1" />Camada 2: Quality of Life (Conveniência)</h2>
        <p>
          Esta é a camada que mais economiza horas em campanhas longas. Os mods de QoL não mudam regras
          centrais do jogo — eles cortam atrito: viagens encurtadas, menus mais inteligentes, recrutamento
          simplificado, builds de personagem mais flexíveis. São os mods que você instala primeiro depois de
          terminar a campanha sem mods e descobrir o que mais te irritou.
        </p>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead className="bg-amber-500/15">
              <tr>
                <th className={`${thClass} w-[22%]`}>Mod</th>
                <th className={`${thClass} w-[18%]`}>Versão</th>
                <th className={`${thClass} w-[20%]`}>Categoria</th>
                <th className={thClass}>O que faz</th>
              </tr>
            </thead>
            <tbody>
              {qolMods.map((m, i) => (
                <tr key={m.name} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className={nameCellClass}>{m.name}</td>
                  <td className={versionCellClass}>{m.version}</td>
                  <td className={tdClass}>{m.category}</td>
                  <td className={tdClass}>{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Dois mods desta lista merecem destaque. O <strong>CourierMessenger</strong> resolve uma das maiores
          dores do meta-game tardio: ter que perseguir fisicamente cada vassalo ou rei pelo mapa só para
          declarar uma guerra ou propor uma paz. Com mensageiros, a diplomacia fica fluida e o late-game para
          de ser uma sequência de viagens cansativas. Já o <strong>Jim High Loyalty For Every Town</strong> é
          quase obrigatório para quem joga reino próprio: a lealdade base mais alta evita a rebelião em cadeia
          que normalmente acontece quando você conquista três ou quatro cidades em sequência.
        </p>

        <AdInArticle className="my-8" />

        <h2><Sword className="inline h-7 w-7 mr-2 -mt-1" />Camada 3: Combate, Câmera e Imersão</h2>
        <p>
          Aqui mora a parte que mais muda a sensação visual do jogo. <strong>Dismemberment (Plus)</strong>{" "}
          adiciona o tipo de violência cirúrgica que faltou em Bannerlord desde Warband: golpes pesados
          decapitam, machados de duas mãos cortam membros, pancadas finais derrubam capacetes. É um dos mods
          mais antigos da comunidade — começou ainda na época do early access — e segue mantido. Combinado com
          o <strong>Realistic Battle Mod (RBM)</strong>, transforma as batalhas em cenas que parecem saídas de
          <em> The Last Kingdom</em> ou <em>Vikings: Valhalla</em>.
        </p>
        <p>
          Para quem prefere comandar em vez de duelar, a dupla <strong>RTS Camera</strong> +{" "}
          <strong>RTS Camera Command System</strong> reinventa Bannerlord. Você libera a câmera do personagem,
          flutua pelo campo, dá ordens via menu radial e acompanha cada esquadrão como se estivesse jogando{" "}
          <em>Total War</em>. Funciona especialmente bem com exércitos grandes (500+ tropas), onde controlar o
          personagem em primeira pessoa só atrapalha.
        </p>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead className="bg-amber-500/15">
              <tr>
                <th className={`${thClass} w-[22%]`}>Mod</th>
                <th className={`${thClass} w-[18%]`}>Versão</th>
                <th className={`${thClass} w-[20%]`}>Categoria</th>
                <th className={thClass}>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {combatMods.map((m, i) => (
                <tr key={m.name} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className={nameCellClass}>{m.name}</td>
                  <td className={versionCellClass}>{m.version}</td>
                  <td className={tdClass}>{m.category}</td>
                  <td className={tdClass}>{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2><Crown className="inline h-7 w-7 mr-2 -mt-1" />Camada 4: Grandes Overhauls (Mudam o Jogo)</h2>
        <p>
          São os mods que reescrevem sistemas inteiros. Não dá para combinar todos ao mesmo tempo — cada
          overhaul pesado costuma exigir uma campanha nova e configuração própria. A escolha aqui depende do
          que você quer transformar: política, diplomacia, defesa, combate ou conteúdo.
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
          {bigOverhauls.map((o) => (
            <div key={o.name} className="p-5 bg-gradient-to-br from-amber-500/10 to-background rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-amber-300" />
                <h3 className="font-bold text-amber-200 m-0">{o.name}</h3>
              </div>
              <div className="text-xs text-amber-300/80 mb-2 uppercase tracking-wide font-mono">{o.role}</div>
              <p className="text-sm text-muted-foreground m-0 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>BannerKings</strong> e <strong>Diplomacy</strong> são parcialmente compatíveis e formam o
          combo mais popular para campanhas longas com foco em construção de reino. <strong>RBM</strong>,
          quando ativado, exige desativar a maioria dos mods que mexem em dano ou armadura — incluindo alguns
          módulos do BannerKings —, então leia o readme antes de combinar. <strong>Improved Garrisons</strong>{" "}
          se encaixa em qualquer configuração e é, talvez, o overhaul mais &quot;limpo&quot;: não muda
          aparência, não muda combate, só conserta o que o jogo base errou na defesa de cidades.
        </p>

        <AdInArticle className="my-8" />

        <h2><Download className="inline h-7 w-7 mr-2 -mt-1" />Onde Baixar e Como Instalar</h2>
        <p>
          A maioria absoluta dos mods listados está em duas fontes oficiais. A primeira é o{" "}
          <strong>Nexus Mods</strong> (<code>nexusmods.com/mountandblade2bannerlord</code>), que concentra os
          mods grandes, com versionamento detalhado, changelogs e fóruns de bug. A segunda é a{" "}
          <strong>Steam Workshop</strong>, integrada ao launcher do jogo, ideal para mods leves de QoL e
          cosméticos por causa da atualização automática. Mods grandes raramente vivem no Workshop por causa
          do limite de tamanho de upload da Valve.
        </p>
        <p>
          O fluxo recomendado é: instalar manualmente as quatro bibliotecas base do Nexus, criar uma pasta de
          backup do seu <code>Modules/</code> antes de mexer, ativar uma camada por vez no launcher (Native →
          Bibliotecas → QoL → Combate → Overhauls), e só depois carregar a campanha. Qualquer crash na tela de
          carregamento aponta sempre para conflito de versão ou ordem incorreta. O <strong>MCM</strong> facilita
          o resto, porque a partir do menu in-game dá para desligar mods individualmente sem mexer no launcher.
        </p>

        <h2><Settings className="inline h-7 w-7 mr-2 -mt-1" />Ordem de Carregamento Recomendada</h2>
        <p>
          A ordem dos módulos no launcher é a diferença entre uma campanha estável e crashes em cadeia. Esta é
          a sequência testada pela comunidade do Nexus para uma instalação saudável com tudo o que foi citado
          neste guia:
        </p>

        <div className={tableWrapClass}>
          <table className={tableClass}>
            <thead className="bg-amber-500/15">
              <tr>
                <th className={`${thClass} w-[16%] text-center`}>Ordem</th>
                <th className={`${thClass} w-[36%]`}>Módulo / Camada</th>
                <th className={thClass}>Observação</th>
              </tr>
            </thead>
            <tbody>
              {loadOrder.map((o, i) => (
                <tr key={o.step} className={`border-t border-border/60 ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="py-3 px-3 md:px-4 font-bold text-amber-200 text-center align-top">{o.step}</td>
                  <td className={nameCellClass}>{o.label}</td>
                  <td className={tdClass}>{o.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2><Eye className="inline h-7 w-7 mr-2 -mt-1" />Compatibilidade com War Sails</h2>
        <p>
          Com a chegada da expansão <strong>War Sails</strong>, a comunidade precisou atualizar praticamente
          todos os mods grandes. Em 2026, a regra prática é: bibliotecas-base (Harmony, ButterLib, UIExtender,
          MCM) já têm versões oficialmente compatíveis com War Sails; mods de QoL leves também — incluindo
          todos os listados na Camada 2 deste guia. Mods que mexem em IA naval, em árvores de tropa dos Nords
          ou em economia marítima podem quebrar; o ideal é checar o changelog do mod e procurar a tag{" "}
          <code>War Sails Compatible</code> na página do Nexus.
        </p>
        <p>
          <strong>BannerKings</strong> teve atualização específica para incorporar a cultura nord ao sistema
          de títulos. <strong>Realistic Battle Mod</strong> precisou reescrever o módulo de armaduras para
          equilibrar o Nord Huscarl, que originalmente ficou quebrado contra todas as tropas do jogo base.{" "}
          <strong>Diplomacy</strong> e <strong>Improved Garrisons</strong> seguiram sem grandes mudanças e
          rodam normalmente em qualquer save da expansão.
        </p>

        <h2><AlertTriangle className="inline h-7 w-7 mr-2 -mt-1" />Erros Comuns e Como Resolver</h2>
        <p>
          <strong>Crash no boot, antes do menu principal.</strong> Quase sempre é Harmony desatualizado ou
          ButterLib carregando depois de algum mod que depende dela. Solução: baixe a versão mais recente das
          quatro bibliotecas-base no mesmo dia em que instalar qualquer overhaul.
        </p>
        <p>
          <strong>Mods aparecem no launcher mas não no jogo.</strong> Provavelmente o UIExtenderEx não
          carregou. Verifique se a versão dele bate com a versão atual do Bannerlord — atualizações do jogo
          base costumam quebrar a compatibilidade até o autor lançar patch (média de 3 a 10 dias).
        </p>
        <p>
          <strong>Save corrompido após instalar overhaul.</strong> Overhauls grandes (BannerKings, RBM)
          alteram a estrutura do save. Comece uma campanha nova sempre que adicionar um overhaul; tentar
          carregar saves antigos com mod novo é a principal causa de progressão perdida.
        </p>
        <p>
          <strong>FPS despenca depois de instalar muitos mods.</strong> Mods de gráfico (Dismemberment, RBM)
          consomem CPU em batalhas grandes. Reduza tropas por batalha no MCM ou desligue partículas extras
          via configuração do RBM.
        </p>

        <EditorialTake category="geek" title="Análise do Marcos">
          Bannerlord é dos poucos jogos modernos onde a comunidade entrega mais conteúdo, mais polimento e
          mais profundidade do que o estúdio original. As quatro bibliotecas-base deveriam vir empacotadas no
          jogo de fábrica — sem elas, metade da experiência de PC fica inacessível. Para quem quer começar
          hoje, a receita é simples: as quatro libs, três ou quatro QoL da camada 2 e <em>um único</em>{" "}
          overhaul grande de cada vez. A partir daí, escalar é só questão de paciência e ordem de carregamento.
        </EditorialTake>

        <ArticleSources
          category="geek"
          sources={[
            { title: "Nexus Mods — Mount & Blade II: Bannerlord", url: "https://www.nexusmods.com/mountandblade2bannerlord", publisher: "Nexus Mods" },
            { title: "Harmony — GitHub oficial", url: "https://github.com/pardeike/Harmony", publisher: "Andreas Pardeike" },
            { title: "ButterLib — Bannerlord Unofficial Tools", url: "https://github.com/BUTR/Bannerlord.ButterLib", publisher: "BUTR" },
            { title: "UIExtenderEx — BUTR", url: "https://github.com/BUTR/Bannerlord.UIExtenderEx", publisher: "BUTR" },
            { title: "Mod Configuration Menu v5 — Nexus", url: "https://www.nexusmods.com/mountandblade2bannerlord/mods/612", publisher: "Nexus Mods" },
            { title: "Steam Workshop — Bannerlord", url: "https://steamcommunity.com/app/261550/workshop/", publisher: "Valve / Steam" },
          ]}
        />
      </div>

      <RelatedPosts currentSlug="bannerlord-mods-essenciais-2026" />

      <div className="max-w-4xl mx-auto mt-12">
        <CommentSection
          postId="bannerlord-mods-essenciais-2026"
          postTitle="Mods Essenciais de Bannerlord 2"
          category="geek"
        />
      </div>
    </article>
  );
};

export default BannerlordModsEssenciais;
