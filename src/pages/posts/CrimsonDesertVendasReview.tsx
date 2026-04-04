import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, Star, BarChart3, MessageSquare, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/crimson-desert-vendas-review.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CrimsonDesertVendasReview = () => {
  useEffect(() => {
    trackArticleRead("crimson-desert-vendas-review-completo-2026", "Crimson Desert: 3 Milhões de Cópias, Metacritic 78 e Review Completo", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">Review · Análise · Vendas</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: 3 Milhões de Cópias, Metacritic 78 e Tudo que a Crítica Disse
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />04 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Crimson Desert review vendas Metacritic 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Crimson Desert foi lançado em 19 de março de 2026 e se tornou um dos maiores lançamentos do ano: <strong>2 milhões de cópias nas primeiras 24 horas</strong> e <strong>3 milhões na primeira semana</strong>. Mas as notas da crítica ficaram abaixo da hype — <strong>Metacritic 78</strong> (93 críticos) e <strong>OpenCritic 80</strong>. O que a crítica realmente disse?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-geek" />
          Os Números do Lançamento
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "78", desc: "Metacritic (93 críticos)" },
            { valor: "80", desc: "OpenCritic" },
            { valor: "85%", desc: "Steam Very Positive (+38.870 análises)" },
            { valor: "3M", desc: "Cópias vendidas na 1ª semana" },
          ].map((item) => (
            <div key={item.desc} className="bg-card rounded-xl border border-geek/20 p-4 text-center">
              <div className="text-3xl font-bold text-geek">{item.valor}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-amber-400" />
          O Que a Crítica Elogiou
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { aspecto: "Combate", desc: "Praticamente unânime: o sistema de combate de Kliff é o ponto mais forte. GameSpot escreveu que 'Kliff golpeia com uma ferocidade visceral imediatamente satisfatória'. A variedade de combos, agarrões, combate a cavalo e o sistema de aprendizado contextual receberam elogios.", nota: "🏆 Ponto forte" },
            { aspecto: "Mundo Aberto e Gráficos", desc: "Pywel foi descrito por múltiplos críticos como tecnicamente deslumbrante. 'Marvel visual e técnico em cada curva', escreveu o Game Informer. O mundo é renderizado como uma única localização sem telas de carregamento entre regiões.", nota: "🏆 Ponto forte" },
            { aspecto: "Exploração", desc: "Vice deu 5/5 chamando o jogo de 'o negócio de verdade', elogiando o 'sandbox de tirar o fôlego'. O DualShockers (9.5/10) chamou de 'um dos melhores jogos de mundo aberto do mercado'.", nota: "🏆 Ponto forte" },
            { aspecto: "Conteúdo", desc: "O volume de atividades — bandit camps, caça, pesca, culinária, puzzles, Abyss, stealth, lore via Knowledge Helm — impressionou. Críticos reportaram 80-110 horas sem zerar.", nota: "👍 Positivo" },
          ].map((item) => (
            <div key={item.aspecto} className="bg-card rounded-xl border border-emerald-500/20 p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-emerald-400">{item.aspecto}</h4>
                <span className="text-xs">{item.nota}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-amber-400" />
          O Que a Crítica Criticou
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { aspecto: "Narrativa", desc: "A história de Kliff e os Greymanes foi o ponto mais polarizador. Game Informer disse que 'falta uma narrativa significativa'. GameSpot escreveu que a história 'não é ruim, mas também não é particularmente cativante'. Eventos e personagens são mencionados sem contexto adequado.", nota: "⚠️ Crítica comum" },
            { aspecto: "Controles", desc: "Os controles foram o maior problema de lançamento — tanto no gamepad quanto no teclado/mouse. Múltiplos patches foram necessários para endereçar o problema. O NotebookCheck escreveu que 'os controles clunky podem ser a perdição do jogo se não forem corrigidos'.", nota: "⚠️ Melhorado por patches" },
            { aspecto: "Gestão de Inventário", desc: "A falta de baús de armazenamento inicialmente (corrigida no Patch 1.00.03) causou frustração generalizada. O sistema de culinária e coleta de recursos foi descrito como excessivamente demorado.", nota: "⚠️ Parcialmente resolvido" },
            { aspecto: "Dificuldade de Bosses", desc: "O Game Informer classificou as batalhas de boss como 'algumas das mais nauseantemente frustrantes que já encontrei'. Janelas de dano pequenas, arenas estreitas e dependência de suprimentos de culinária foram os pontos mais criticados.", nota: "⚠️ Design intencional" },
          ].map((item) => (
            <div key={item.aspecto} className="bg-card rounded-xl border border-amber-500/20 p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-amber-400">{item.aspecto}</h4>
                <span className="text-xs">{item.nota}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MessageSquare className="h-7 w-7 text-geek" />
          O Que os Jogadores Disseram (Steam e Metacritic)
        </h2>
        <p>
          A recepção dos jogadores foi mais positiva que a da crítica — <strong>85% de aprovação no Steam</strong> com mais de 38 mil análises. No Metacritic, usuários definiram o jogo como "um diamante bruto" e "uma experiência de jogo transcendente". Em português, análises destacam a profundidade das side quests e a narrativa construída organicamente através da exploração.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-geek/20 p-5">
          <h3 className="font-bold text-geek mb-3">📊 Comparativo: Crítica vs Jogadores</h3>
          <div className="space-y-3">
            {[
              { label: "Metacritic (críticos)", valor: 78, max: 100 },
              { label: "OpenCritic", valor: 80, max: 100 },
              { label: "Steam (usuários)", valor: 85, max: 100 },
              { label: "Metacritic User Score", valor: 82, max: 100 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-bold text-geek">{item.valor}/100</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-2 bg-geek rounded-full" style={{ width: `${item.valor}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-geek" />
          Crimson Desert Vale a Pena em Abril de 2026?
        </h2>
        <p>
          Com os patches pós-lançamento (especialmente o 1.00.03 e 1.01.00), muitas das principais queixas técnicas foram endereçadas. Se você é fã de RPGs de ação com mundo aberto e prioriza <strong>combate, exploração e conteúdo extenso</strong>, Crimson Desert oferece uma experiência sólida. Se você busca primariamente uma <strong>narrativa bem contada</strong>, as críticas da mídia se aplicam.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold text-emerald-400 mb-3">✅ Compre se você...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Aprecia combates viscerais e satisfatórios</li>
              <li>• Quer um mundo aberto enorme para explorar</li>
              <li>• Não se importa com história mais simples</li>
              <li>• Tem paciência para a curva de aprendizado</li>
              <li>• Gosta de grindar e melhorar personagem</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">⚠️ Espere se você...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Prioriza narrativa rica e personagens profundos</li>
              <li>• Se frustra facilmente com controles não intuitivos</li>
              <li>• Tem baixa tolerância a bugs ocasionais</li>
              <li>• Espera algo comparável ao Elden Ring em dificuldade refinada</li>
              <li>• Quer esperar por mais patches e possível redução de preço</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão</h2>
        <p>
          Crimson Desert não é o "próximo Zelda" que a hype prometia, mas é um RPG de ação ambicioso com <strong>combate excelente, mundo visualmente impressionante e quantidade generosa de conteúdo</strong>. A Pearl Abyss demonstrou com os patches rápidos que está ouvindo a comunidade. Com 3 milhões de cópias vendidas e suporte ativo, o jogo tem futuro promissor.
        </p>
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você comprou Crimson Desert? O que achou? ⚔️</h3>
          <p className="text-muted-foreground">Deixa sua review nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="crimson-desert-vendas-review-completo-2026" />
      <CommentSection postId="crimson-desert-vendas-review-completo-2026" postTitle="Crimson Desert: 3 Milhões de Cópias, Metacritic 78 e Review Completo" />
    </article>
  );
};

export default CrimsonDesertVendasReview;
