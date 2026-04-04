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
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert atualizações e patches 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Desde seu lançamento em 19 de março de 2026, Crimson Desert recebeu múltiplas atualizações em ritmo acelerado. A Pearl Abyss demonstrou comprometimento com o feedback da comunidade — dois patches principais e dois hotfixes foram lançados na primeira quinzena pós-lançamento, corrigindo controles, bugs, desempenho e adicionando novos conteúdos.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-geek" />
          Linha do Tempo de Patches
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            { versao: "Patch 1.00.02 (Day One)", data: "19 de março de 2026", tipo: "Lançamento", cor: "border-blue-500/30 bg-blue-500/5", descricao: "Patch do Dia 1 disponibilizado no Steam antes do unlock global. Corrigiu problemas identificados durante o período de review, adicionou novas opções de combate para os 3 personagens jogáveis, melhorou a navegação em cutscenes e ajustou mecânicas de boss criticadas pelos primeiros reviewers." },
            { versao: "Patch 1.00.03", data: "23–25 de março de 2026", tipo: "Melhoria", cor: "border-green-500/30 bg-green-500/5", descricao: "Primeiro grande patch pós-lançamento. Ajustou controles de gamepad e teclado/mouse, aumentou a saúde restaurada por alimentos, adicionou o Armazenamento Privado no Howling Hill Camp, acrescentou mais pontos de fast travel via Abyss Nexuses, reduziu o tempo de aprendizado de habilidades e simplificou o sistema de observação de skills." },
            { versao: "Patch 1.01.00", data: "28 de março de 2026", tipo: "Grande Update", cor: "border-amber-500/30 bg-amber-500/5", descricao: "Maior atualização pós-lançamento. Adicionou 5 novas montarias permanentes (White Bear, Silver Fang, Snowwhite Deer, Rock Tusk Warthog, Icicle Edge Alpine Ibex), introduziu Refinement Coins para temperar equipamentos até o Estágio 4 sem materiais extras, overhaul do sistema de voo, redução do consumo de stamina, tempos de carregamento reduzidos e saída 4K Fixa no PS5." },
            { versao: "Patches 1.01.01 a 1.01.03", data: "29–31 de março de 2026", tipo: "Hotfixes", cor: "border-violet-500/30 bg-violet-500/5", descricao: "Série de hotfixes corrigindo bugs introduzidos pelo Patch 1.01.00: interações de montaria incorretas, boss Blackstar permanecendo no ar após morte, problemas com a mecânica de destruição do A.T.A.G., interface de temperamento, e travamento de bosses durante o combate." },
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
          Destaque: As 5 Novas Montarias (Patch 1.01.00)
        </h2>
        <p>
          Uma das adições mais pedidas pela comunidade, as novas montarias foram introduzidas no Patch 1.01.00. Ao contrário do cavalo padrão, essas montarias são desbloqueadas completando condições específicas no jogo:
        </p>
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
          O Que Foi Resolvido
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3">✅ Corrigido</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Controles de sprint — velocidade consistente sem segurar o botão</li>
              <li>• Sistema de voo (Crow Wings) — stamina reduzida e ativação mais confiável</li>
              <li>• Tempos de carregamento no fast travel e após morte</li>
              <li>• Saúde restaurada por alimentos (aumentada)</li>
              <li>• Pontos de fast travel adicionais (Abyss Nexuses)</li>
              <li>• Queda de FPS no boss Crowcaller</li>
              <li>• Travamento de bosses durante combate</li>
              <li>• Assets 2D suspeitos de IA generativa (substituídos)</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">⚠️ Ainda Pendente</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Brilho noturno excessivo (especialmente PS5 Pro com OLED + HDR)</li>
              <li>• Sem opção para ocultar capacete/escudo</li>
              <li>• Escala de texto da UI para TV não implementada</li>
              <li>• Configurações gráficas que resetam ao fechar o jogo</li>
              <li>• Alguns crashes ocasionais reportados por usuários</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-geek" />
          Controvérsia: Assets de IA Generativa
        </h2>
        <p>
          Uma polêmica surgiu durante a semana de lançamento quando jogadores identificaram algumas <strong>pinturas e imagens 2D no mundo de Pywel</strong> que apresentavam artefatos típicos de IA generativa. A Pearl Abyss confirmou o uso desses assets em 22 de março e adicionou a divulgação na página do Steam, conforme exigido pelas novas políticas da plataforma. O Patch 1.01.00 (28 de março) já incluiu a substituição de "determinados assets 2D visuais para melhor alinhamento com a direção artística do jogo".
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Planos Futuros</h2>
        <p>
          A Pearl Abyss confirmou durante reunião de acionistas que planeja <strong>conteúdo pós-lançamento gratuito</strong>, expansões de história e possível DLC, dependendo do desempenho de vendas. Com <strong>3 milhões de cópias vendidas na primeira semana</strong> e avaliações "Very Positive" no Steam (85%), o jogo está bem posicionado para receber suporte de longo prazo. Nenhum modo multiplayer foi confirmado — o foco continua na experiência single-player.
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
