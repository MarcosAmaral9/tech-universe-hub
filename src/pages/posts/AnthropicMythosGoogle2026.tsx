import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Brain, TrendingUp, Shield, BarChart3, Zap, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/anthropic-mythos-google-investimento-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const AnthropicMythosGoogle2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "anthropic-mythos-modelo-ia-google-investimento-2026",
      "Google Investe US$ 40 Bilhões na Anthropic e o Modelo Mythos Chega: A Resposta ao Domínio da OpenAI",
      "ia"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Anthropic · Google · Mythos · Investimento
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Google Investe US$ 40 Bilhões na Anthropic e o Modelo Mythos Chega: A Resposta ao Domínio da OpenAI
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />30 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Google investe 40 bilhões Anthropic modelo Mythos IA 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Na mesma semana em que a OpenAI concluiu sua rodada histórica de US$ 40 bilhões, o Google anunciou que também comprometeu <strong>até US$ 40 bilhões</strong> na Anthropic — US$ 10 bilhões imediatos a uma avaliação de <strong>US$ 350 bilhões</strong>, com mais US$ 30 bilhões condicionados a metas de desempenho. O anúncio coincidiu com o lançamento do <strong>Mythos</strong>, o modelo mais poderoso já criado pela Anthropic — tão capaz em cibersegurança que a empresa restringiu o acesso a parceiros selecionados enquanto avalia riscos potenciais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          O Que Foi Confirmado: Detalhes do Investimento
        </h2>
        <div className="not-prose my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "US$ 40B", desc: "Valor total comprometido pelo Google na Anthropic", icon: "💰" },
            { num: "US$ 350B", desc: "Valuation da Anthropic nesta rodada", icon: "📈" },
            { num: "US$ 19B", desc: "Receita anualizada estimada da Anthropic em 2026", icon: "💳" },
            { num: "US$ 10B", desc: "Investimento imediato — restante condicional a metas", icon: "⚡" },
          ].map(({ num, desc, icon }) => (
            <div key={num} className="bg-card rounded-xl border border-ia/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-ia text-xl mb-1">{num}</div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          Segundo o Bloomberg, o Google planeja investir US$ 10 bilhões imediatamente, com mais US$ 30 bilhões condicionados à Anthropic atingir determinadas metas de desempenho — provavelmente relacionadas a adoção empresarial do Claude e crescimento do Google Cloud como infraestrutura preferida da Anthropic. O investimento posiciona o Google como o maior apoiador financeiro da Anthropic, superando a rodada anterior que tinha a Amazon como principal investidora.
        </p>
        <p>
          A Anthropic está se aproximando de <strong>US$ 19 bilhões em receita anualizada</strong> em 2026 — crescimento explosivo considerando que a empresa mal existia como entidade comercial há dois anos. Para contexto: a OpenAI reporta US$ 25 bilhões em receita anualizada, mas a diferença está diminuindo rapidamente.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-violet-400" />
          O Modelo Mythos: O Mais Poderoso da Anthropic — e o Mais Perigoso
        </h2>
        <p>
          Simultaneamente ao anúncio do investimento, a Anthropic lançou o <strong>Mythos</strong> — descrito internamente como o modelo mais capaz já desenvolvido pela empresa. O detalhe que chamou atenção de toda a indústria: <strong>o acesso foi deliberadamente restringido</strong>.
        </p>
        <p>
          Diferente do lançamento público de Claude Sonnet ou Opus, o Mythos está disponível apenas para um grupo seleto de parceiros corporativos enquanto a Anthropic conduz avaliações de segurança. A razão declarada pela empresa: o modelo tem <strong>capacidades excepcionais em cibersegurança</strong> — tanto ofensivas quanto defensivas — que exigem avaliação cuidadosa antes de liberação ampla para evitar potencial uso malicioso.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3 text-sm">✅ O que Mythos pode fazer (confirmado)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Análise avançada de vulnerabilidades em sistemas</li>
              <li>• Detecção e resposta a incidentes de segurança em tempo real</li>
              <li>• Auditoria automatizada de código em escala enterprise</li>
              <li>• Raciocínio de longo horizonte superior a qualquer modelo anterior</li>
              <li>• Capacidades multimodais expandidas vs Claude Sonnet 4</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3 text-sm">⚠️ Por que o acesso foi restrito</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Capacidades ofensivas em cibersegurança representam risco dual-use</li>
              <li>• A Anthropic está avaliando guardrails específicos para o domínio</li>
              <li>• Modelos com capacidades excepcionais em segurança já vazaram antes</li>
              <li>• Parcerias com agências governamentais e empresas de defesa em andamento</li>
              <li>• Lançamento público esperado após avaliações de segurança completas</li>
            </ul>
          </div>
        </div>
        <p>
          A Anthropic ressaltou que o modelo "caiu em mãos não sancionadas" — um eufemismo para vazamento — mesmo antes do anúncio público. Esse detalhe gerou debate intenso na comunidade de segurança de IA sobre se modelos tão poderosos deveriam ser desenvolvidos na velocidade atual.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-violet-400" />
          A Corrida de US$ 40 Bilhões: OpenAI vs Anthropic — As Diferenças Importantes
        </h2>
        <p>
          Em menos de uma semana, as duas principais empresas de IA do mundo receberam rodadas de US$ 40 bilhões cada. Mas há diferenças fundamentais entre os dois investimentos que moldam o futuro da corrida:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Aspecto</th>
              <th className="text-left py-3 px-4">OpenAI (SoftBank)</th>
              <th className="text-left py-3 px-4">Anthropic (Google)</th>
            </tr></thead>
            <tbody>
              {[
                ["Investidor principal", "SoftBank (Masayoshi Son)", "Google (Alphabet)"],
                ["Valor total comprometido", "US$ 40B (concluído)", "US$ 40B (US$ 10B imediato + US$ 30B condicional)"],
                ["Valuation resultante", "US$ 300B", "US$ 350B"],
                ["Relação estratégica", "OpenAI usa Azure/Microsoft como cloud primária", "Anthropic usa Google Cloud como cloud primária"],
                ["Estrutura corporativa", "Public Benefit Corporation (em transição)", "Empresa privada com investidores estratégicos"],
                ["Receita anualizada", "~US$ 25B", "~US$ 19B"],
                ["Foco diferencial", "Produtos consumer (ChatGPT) + enterprise", "Enterprise + segurança + APIs para desenvolvedores"],
                ["Modelo mais recente", "o3 (raciocínio avançado)", "Mythos (cibersegurança + raciocínio avançado)"],
              ].map(([asp, oai, ant]) => (
                <tr key={asp} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{asp}</td>
                  <td className="py-3 px-4 text-green-400 text-xs">{oai}</td>
                  <td className="py-3 px-4 text-orange-400 text-xs">{ant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-violet-400" />
          O Que Muda para Usuários do Claude
        </h2>
        <p>
          Para quem usa Claude no dia a dia, o investimento do Google traz implicações concretas — além do óbvio "mais dinheiro = mais recursos para desenvolvimento":
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { tema: "🔗 Integração mais profunda com Google Workspace", desc: "Com o Google como principal investidor e parceiro de cloud, a integração do Claude com Gmail, Docs, Drive e Meet deve se aprofundar. Já existem integrações via Google Agentspace — mas um investimento desta magnitude sugere parcerias muito mais amplas chegando." },
            { tema: "💰 Preço de API potencialmente mais competitivo", desc: "Com US$ 10B disponíveis imediatamente, a Anthropic pode subsidiar custos de infraestrutura e reduzir preços de API para ganhar market share. Historicamente, empresas em rodadas de crescimento agressivo usam capital para competir em preço." },
            { tema: "🔒 Segurança como diferencial de produto", desc: "O Mythos sinaliza que a Anthropic quer ser o provedor de IA preferido de empresas do setor de defesa, financeiro e saúde — onde segurança é não-negociável. Para usuários corporativos, isso pode significar certificações e garantias contratuais mais sólidas que a OpenAI." },
            { tema: "🚀 IPO da Anthropic no horizonte?", desc: "Com US$ 350 bilhões de valuation, a Anthropic está próxima do tamanho mínimo para um IPO de referência. A OpenAI sinalizou IPO para late 2026 ou 2027. Se a Anthropic seguir o mesmo caminho, seria a maior oferta de ações da história da tecnologia." },
          ].map(({ tema, desc }) => (
            <div key={tema} className="bg-card rounded-xl border border-ia/20 p-4">
              <h3 className="font-bold text-sm mb-1">{tema}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-violet-400" />
          A Questão do Mythos: Responsabilidade no Desenvolvimento de IA
        </h2>
        <p>
          O caso do Mythos levanta uma questão que vai além da Anthropic. A empresa fundada por ex-pesquisadores da OpenAI com o objetivo explícito de <em>desenvolver IA de forma mais segura</em> agora tem em suas mãos um modelo com capacidades que ela própria considera perigosas demais para liberar amplamente. O paradoxo é real: a corrida por mais capital exige modelos mais poderosos; modelos mais poderosos geram mais riscos.
        </p>
        <p>
          A decisão de restringir o Mythos a parceiros selecionados enquanto conduz avaliações é o caminho mais responsável disponível — e ainda assim o modelo "caiu em mãos não sancionadas". A comunidade de segurança de IA está usando o caso para argumentar que protocolos internacionais de avaliação de modelos de alto risco precisam ser estabelecidos antes, não depois, que os modelos sejam treinados.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você prefere usar Claude ou ChatGPT no trabalho? 🤖</h3>
          <p className="text-muted-foreground">Com esses investimentos, qual IA você acredita que ganha a corrida? Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="anthropic-mythos-modelo-ia-google-investimento-2026" />
      <CommentSection postId="anthropic-mythos-modelo-ia-google-investimento-2026" postTitle="Google Investe US$ 40 Bilhões na Anthropic e o Modelo Mythos Chega" />
    </article>
  );
};

export default AnthropicMythosGoogle2026;
