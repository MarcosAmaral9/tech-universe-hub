import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Wrench, Shield, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/crimson-desert-patches.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertPatches = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-patches-atualizacoes-2026", "Crimson Desert: Todas as Atualizações e Patches Pós-Lançamento", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Updates · Patches · Pearl Abyss</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Todas as Atualizações e Patches Pós-Lançamento (Março–Abril 2026)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />Atualizado em 24 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert atualizações e patches 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Desde seu lançamento em 19 de março de 2026, Crimson Desert recebeu múltiplas atualizações em ritmo acelerado. A Pearl Abyss demonstrou comprometimento com o feedback da comunidade — ao todo, <strong>mais de 10 patches e hotfixes</strong> foram lançados no primeiro mês, culminando no Patch 1.04.00 (22 de abril), o maior update até agora, que adicionou modos de dificuldade Easy/Normal/Hard e dezenas de melhorias.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-geek" />
          Linha do Tempo Completa de Patches
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            {
              versao: "Patch 1.00.02 (Day One)",
              data: "19 de março de 2026",
              tipo: "Lançamento",
              cor: "border-blue-500/30 bg-blue-500/5",
              descricao: "Patch do Dia 1 disponibilizado no Steam antes do unlock global. Corrigiu problemas identificados durante o período de review, adicionou novas opções de combate para os 3 personagens jogáveis, melhorou a navegação em cutscenes e ajustou mecânicas de boss criticadas pelos primeiros reviewers."
            },
            {
              versao: "Patch 1.00.03",
              data: "23–25 de março de 2026",
              tipo: "Melhoria",
              cor: "border-green-500/30 bg-green-500/5",
              descricao: "Primeiro grande patch pós-lançamento. Ajustou controles de gamepad e teclado/mouse, aumentou a saúde restaurada por alimentos, adicionou o Armazenamento Privado no Howling Hill Camp, acrescentou mais pontos de fast travel via Abyss Nexuses, reduziu o tempo de aprendizado de habilidades e simplificou o sistema de observação de skills. As ações da Pearl Abyss subiram 27,76% no dia 25/03 com o anúncio de 3M de cópias."
            },
            {
              versao: "Patch 1.01.00",
              data: "28 de março de 2026",
              tipo: "Grande Update",
              cor: "border-amber-500/30 bg-amber-500/5",
              descricao: "Maior atualização até então. Adicionou 5 novas montarias permanentes (White Bear, Silver Fang, Snowwhite Deer, Rock Tusk Warthog, Icicle Edge Alpine Ibex), introduziu Refinement Coins, overhaul do sistema de voo, redução do consumo de stamina, tempos de carregamento reduzidos, saída 4K Fixa no PS5, 3 novas trilhas musicais de combate e 1 trilha de loading. Também melhorou o mecanismo de lock-on em boss battles e permitiu teleporte via Abyss Nexus enquanto montado, caindo, nadando ou escalando."
            },
            {
              versao: "Patches 1.01.01 a 1.01.03",
              data: "29–31 de março de 2026",
              tipo: "Hotfixes",
              cor: "border-violet-500/30 bg-violet-500/5",
              descricao: "Série de hotfixes corrigindo bugs introduzidos pelo Patch 1.01.00: interações de montaria incorretas, boss Blackstar permanecendo no ar após morte, problemas com a mecânica de destruição do A.T.A.G., interface de temperamento, travamento de bosses durante combate e crash em Mac via Steam."
            },
            {
              versao: "Patch 1.02.00",
              data: "4 de abril de 2026",
              tipo: "Melhoria",
              cor: "border-green-500/30 bg-green-500/5",
              descricao: "Update de início de abril focado em melhorias de controle e UI, correções de bugs adicionais e ajustes de balanceamento. Continuou o trabalho de polimento dos sistemas de combate e inventário iniciado nos patches anteriores."
            },
            {
              versao: "Patch 1.03.00 + 1.03.01",
              data: "9–11 de abril de 2026",
              tipo: "Grande Update",
              cor: "border-amber-500/30 bg-amber-500/5",
              descricao: "Adicionou novas habilidades para todos os 3 personagens: Kliff recebeu 'Focused Aerial Roll' (ativado com Focus durante voo + botão de esquiva). Damiane e Oongka ganharam 'Axiom Force', 'Nature's Snare' e habilidades relacionadas — respondendo à crítica de que os dois personagens tinham menos opções que Kliff. Melhorou combos bloqueados, corrigiu bug de velocidade anormal em combos encadeados e o bug da habilidade 'Blinding Flash' em montarias. Hotfix 1.03.01 corrigiu regressões introduzidas pelo update."
            },
            {
              versao: "Patch 1.04.00",
              data: "22–23 de abril de 2026",
              tipo: "Maior Update até agora",
              cor: "border-red-500/30 bg-red-500/5",
              descricao: "O maior patch do jogo até a data. Adicionou modos de dificuldade Easy/Normal/Hard (o pedido mais votado da comunidade), novos pets (5 tipos de gatos), novos itens de armazenamento (Kuku Cooler, Enhanced Kuku Cooler), arma exclusiva para Damiane (Sword of Starlight, obtida via quest), dois novos galhos de árvore utilizáveis por Kliff e Oongka, presets de controle (teclado/mouse e controle), nova ferramenta Sturdy Broom, loja secreta em Pororin para equipamentos de pets, 13 novos tatuagens, função Lock para itens, novas animações de culinária, cloudcart como montaria permanente, vendedores de gado em Pywel, melhorias na qualidade de cenas distantes e separação dos botões 'Dispatch' e 'Repeat Mission'."
            },
            {
              versao: "Patch 1.04.01 (Hotfix)",
              data: "Abril de 2026",
              tipo: "Hotfix",
              cor: "border-violet-500/30 bg-violet-500/5",
              descricao: "Hotfix para todas as plataformas corrigindo bugs introduzidos pelo Patch 1.04.00, incluindo a reversão temporária da redução de ataque/defesa via grindstones e anvils que causou reclamações da comunidade."
            },
          ].map((p) => (
            <div key={p.versao} className={`rounded-xl border p-5 ${p.cor}`}>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="font-bold text-geek text-base">{p.versao}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{p.data}</span>
                  <span className="text-xs bg-geek/20 text-geek px-2 py-0.5 rounded-full font-bold">{p.tipo}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{p.descricao}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          Destaque: Modos de Dificuldade (Patch 1.04.00)
        </h2>
        <p>
          A adição de modos de dificuldade foi o pedido mais votado da comunidade desde o lançamento. O Patch 1.04.00 implementou três opções, acessíveis em <strong>Configurações &gt; Jogar</strong>:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { modo: "Easy", cor: "border-green-500/30 bg-green-500/5", desc: "Dano recebido reduzido, inimigos com menos HP e agressividade, janelas de parry e esquiva aumentadas, frequência de contra-ataques dos bosses reduzida. Ideal para quem quer focar na história e exploração." },
            { modo: "Normal", cor: "border-blue-500/30 bg-blue-500/5", desc: "Dificuldade padrão do jogo como lançado em março. Equivale à experiência original de Crimson Desert." },
            { modo: "Hard", cor: "border-red-500/30 bg-red-500/5", desc: "Combate mais intenso e desafiador para veteranos do gênero. Bosses com comportamentos mais agressivos e janelas de punição menores." },
          ].map(({ modo, cor, desc }) => (
            <div key={modo} className={`rounded-xl border p-5 ${cor}`}>
              <h3 className="font-bold text-geek text-lg mb-2">{modo}</h3>
              <p className="text-sm text-muted-foreground mb-0">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-geek" />
          As 5 Novas Montarias (Patch 1.01.00)
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Montaria</th>
              <th className="text-left py-3 px-4">Categoria</th>
              <th className="text-left py-3 px-4">Como Obter</th>
            </tr></thead>
            <tbody>
              {[
                ["White Bear", "Animal Lendário", "Completar condição específica no jogo"],
                ["Silver Fang", "Animal Lendário", "Completar condição específica no jogo"],
                ["Snowwhite Deer", "Animal Lendário", "Completar condição específica no jogo"],
                ["Rock Tusk Warthog", "Montaria de Boss", "Derrotar boss específico"],
                ["Icicle Edge Alpine Ibex", "Montaria de Boss", "Derrotar boss específico"],
              ].map(([m, c, o]) => (
                <tr key={m} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-geek">{m}</td>
                  <td className="py-3 px-4 text-muted-foreground">{c}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">A Pearl Abyss não divulgou as condições exatas para preservar a experiência de descoberta dos jogadores.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-emerald-400" />
          O Que Foi Resolvido vs O Que Ainda Está Pendente
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3">✅ Corrigido</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Modos de dificuldade Easy/Normal/Hard (1.04.00)</li>
              <li>• Novas habilidades para Damiane e Oongka, incluindo Axiom Force (1.03.00)</li>
              <li>• Controles de sprint e gamepad — consistência melhorada</li>
              <li>• Sistema de voo (Crow Wings) — stamina e ativação melhoradas</li>
              <li>• Tempos de carregamento no fast travel e após morte</li>
              <li>• Pontos de fast travel adicionais (Abyss Nexuses)</li>
              <li>• Armazenamento privado no camp + Kuku Cooler</li>
              <li>• Lock-on em bosses mais confiável</li>
              <li>• Assets 2D de IA generativa substituídos</li>
              <li>• Suporte básico para Intel Arc GPU (ainda instável)</li>
              <li>• Função Lock para proteger itens no inventário</li>
              <li>• Cloudcart como montaria permanente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">⚠️ Ainda Pendente / Prometido</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Brilho noturno excessivo (especialmente PS5 Pro com OLED + HDR)</li>
              <li>• Personalização mais detalhada de controle (prometida em breve)</li>
              <li>• Boss rematches (prometido em updates futuros)</li>
              <li>• Suporte completo e otimizado para Intel Arc GPU</li>
              <li>• Alguns crashes ocasionais reportados</li>
              <li>• Iluminação interna — comunidade ainda reporta problemas</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Situação: Intel Arc e Assets de IA
        </h2>
        <p>
          Sobre a <strong>Intel Arc</strong>: após a polêmica inicial de não suporte, a Pearl Abyss lançou um patch que permite rodar o jogo em GPUs Intel Arc em estado não-otimizado — com problemas gráficos e instabilidade. A empresa mudou o FAQ confirmando que está "trabalhando em compatibilidade e otimização" para Arc, sem data definida. A Intel declarou ter oferecido hardware e suporte à Pearl Abyss antes do lançamento.
        </p>
        <p>
          Sobre os <strong>assets de IA generativa</strong>: a Pearl Abyss confirmou o uso, atualizou a página do Steam com a divulgação exigida pela Valve e o Patch 1.01.00 (28/03) já substituiu os assets 2D identificados, conforme anunciado nas notas oficiais.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Planos Futuros</h2>
        <p>
          A Pearl Abyss confirmou que <strong>não há DLC planejado</strong> para Crimson Desert. O foco da empresa é em updates de qualidade de vida baseados no feedback da comunidade, incluindo boss rematches e mais customização de controles. Com <strong>5 milhões de cópias vendidas</strong> e suporte ativo, o jogo continuará recebendo patches. O próximo grande projeto da Pearl Abyss é o <strong>DokeV</strong>, que usará a mesma BlackSpace Engine.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual melhoria do patch mais te ajudou? 🔧</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-patches-atualizacoes-2026" />
      <CommentSection postId="crimson-desert-patches-atualizacoes-2026" postTitle="Crimson Desert: Todas as Atualizações e Patches Pós-Lançamento" />
    </article>
  );
};

export default CrimsonDesertPatches;
