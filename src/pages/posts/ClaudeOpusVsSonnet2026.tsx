/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/claude-opus-vs-sonnet-2026": {
 *   title: "Claude 4 Opus vs Claude 4 Sonnet: Qual Modelo Usar em 2026?",
 *   description: "Comparativo completo Claude 4 Opus vs Sonnet: benchmarks reais (MMLU, HumanEval, SWE-bench), preços em dólar, estratégia híbrida e qual modelo escolher por perfil de uso.",
 *   keywords: "Claude 4 Opus vs Sonnet, Claude 4 comparativo, Claude Opus benchmarks, Claude Sonnet preço, qual modelo Claude usar, Anthropic Claude 4, HumanEval Claude, SWE-bench Claude, estratégia híbrida LLM, Claude API custo",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Brain, Zap, BarChart3, Shield, Lightbulb, DollarSign } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/claude-opus-vs-sonnet-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ClaudeOpusVsSonnet2026 = () => {
  useEffect(() => {
    trackArticleRead("claude-opus-vs-sonnet-2026", "Claude 4 Opus vs Claude 4 Sonnet: Qual Usar em 2026?", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">Tutorial · Comparativo · Claude 4</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Claude 4 Opus vs Claude 4 Sonnet: Qual Modelo Usar em 2026?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Claude 4 Opus vs Claude 4 Sonnet 2026 — comparativo de benchmarks, preços e quando usar cada modelo" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A Anthropic lançou a família Claude 4 em 2026 com dois modelos principais: o <strong>Claude 4 Opus</strong>, topo de linha para tarefas complexas, e o <strong>Claude 4 Sonnet</strong>, equilibrado entre performance e custo. A dúvida de desenvolvedores, empresas e usuários é a mesma: qual usar? Este guia responde com benchmarks, preços, casos de uso reais e uma recomendação clara por perfil.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-violet-400" />
          O que é a Família Claude 4?
        </h2>
        <p>
          A família Claude 4 é a geração mais recente da Anthropic, lançada em 2026. Ela representa um salto significativo em capacidade de raciocínio, geração de código e seguimento de instruções complexas. A linha atual consiste em três modelos:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { modelo: "Claude 4 Haiku", perfil: "Velocidade máxima", uso: "Tarefas simples, chatbots, respostas rápidas", cor: "border-sky-500/30 bg-sky-500/5", emoji: "⚡" },
            { modelo: "Claude 4 Sonnet", perfil: "Equilíbrio ideal", uso: "Uso diário, desenvolvimento, escrita, análise", cor: "border-violet-500/30 bg-violet-500/5", emoji: "🎯" },
            { modelo: "Claude 4 Opus", perfil: "Poder máximo", uso: "Raciocínio avançado, pesquisa, código complexo", cor: "border-amber-500/30 bg-amber-500/5", emoji: "🧠" },
          ].map(({ modelo, perfil, uso, cor, emoji }) => (
            <div key={modelo} className={`rounded-xl border p-5 ${cor}`}>
              <div className="text-2xl mb-2">{emoji}</div>
              <h3 className="font-bold text-sm mb-1">{modelo}</h3>
              <p className="text-xs font-medium text-violet-400 mb-2">{perfil}</p>
              <p className="text-xs text-muted-foreground">{uso}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          Comparação Direta: Benchmarks Reais
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Benchmark</th>
              <th className="text-left py-3 px-4">Claude 4 Opus</th>
              <th className="text-left py-3 px-4">Claude 4 Sonnet</th>
              <th className="text-left py-3 px-4">Diferença</th>
            </tr></thead>
            <tbody>
              {[
                ["SWE-bench Verified (eng. de software)", "80,8%", "79,6%", "1,2 pp — negligível"],
                ["GPQA Diamond (ciência PhD-level)", "91,3%", "74,1%", "17,2 pp — Opus muito superior"],
                ["OSWorld (uso de computador/GUI)", ">72%", ">72%", "Praticamente igual"],
                ["HumanEval (código Python)", "90%+", "90%+", "Saturado — ambos no topo"],
                ["SWE-bench Pro (multi-linguagem)", "45,9%", "43,6%", "2,3 pp"],
                ["Velocidade (tokens/seg)", "~40", "~95", "Sonnet 2,4× mais rápido"],
                ["Janela de contexto", "200K tokens", "200K tokens", "Igual"],
              ].map(([bench, opus, sonnet, diff]) => (
                <tr key={bench} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{bench}</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">{opus}</td>
                  <td className="py-3 px-4 text-violet-400 font-bold">{sonnet}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Fontes: Anthropic, Morph LLM Claude Benchmarks, NxCode — fevereiro/março 2026 (Claude 4.6)</p>
        </div>

        <p>
          Em termos práticos, o <strong>Opus é 8–9% superior em tarefas complexas</strong>, mas o <strong>Sonnet entrega 95% da qualidade</strong> do Opus para a esmagadora maioria dos casos de uso do dia a dia. A diferença real aparece em tarefas de alta complexidade: debugging de sistemas legados, análise de documentos jurídicos extensos, pesquisa científica avançada e geração de código para sistemas críticos.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-violet-400" />
          Preços: A Diferença que Decide Para a Maioria
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">🧠 Claude 4 Opus — Preços API</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Input: <strong className="text-foreground">US$ 15,00</strong> por 1M tokens</li>
              <li>• Output: <strong className="text-foreground">US$ 75,00</strong> por 1M tokens</li>
              <li>• Uso típico (1.000 req/dia): ~US$ 45–90/mês</li>
              <li>• Disponível via API e Claude.ai Pro/Teams</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-violet-500/20 p-5">
            <h3 className="font-bold text-violet-400 mb-3">🎯 Claude 4 Sonnet — Preços API</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Input: <strong className="text-foreground">US$ 3,00</strong> por 1M tokens</li>
              <li>• Output: <strong className="text-foreground">US$ 15,00</strong> por 1M tokens</li>
              <li>• Uso típico (1.000 req/dia): ~US$ 9–18/mês</li>
              <li>• Padrão no Claude.ai para usuários Pro</li>
            </ul>
          </div>
        </div>

        <p>
          A diferença de custo é drástica: o <strong>Opus custa 5× mais que o Sonnet</strong> tanto na entrada quanto na saída. Para uma startup processando 100.000 requisições por mês com contextos médios de 2.000 tokens, a diferença mensal pode ser de <strong>US$ 3.000 a US$ 15.000</strong>. Essa matemática torna o Sonnet a escolha padrão para qualquer aplicação em produção.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-violet-400" />
          Quando Usar Cada Modelo: Guia Definitivo
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-violet-500/20 p-5">
            <h3 className="font-bold text-violet-400 mb-3">🎯 Use Claude 4 Sonnet para...</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Chatbots e assistentes em produção</li>
              <li>• Geração e revisão de código padrão</li>
              <li>• Escrita criativa, blogs e copywriting</li>
              <li>• Análise de dados e relatórios</li>
              <li>• Resumos e tradução de documentos</li>
              <li>• Automações e agentes de baixa criticidade</li>
              <li>• Tutoria e suporte ao cliente</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">🧠 Use Claude 4 Opus para...</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Debugging de código crítico ou sistemas complexos</li>
              <li>• Análise de documentos jurídicos e contratos extensos</li>
              <li>• Pesquisa científica e síntese de literatura</li>
              <li>• Engenharia de sistemas de IA (meta-prompts, fine-tuning)</li>
              <li>• Tarefas que exigem raciocínio de múltiplos passos</li>
              <li>• Avaliação de código de segurança (pentest, auditoria)</li>
              <li>• Quando a qualidade é mais importante que o custo</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-violet-400" />
          Estratégia Híbrida: O Melhor dos Dois Mundos
        </h2>
        <p>
          A estratégia mais inteligente — adotada por equipes de engenharia avançadas — é usar os dois modelos de forma complementar. A ideia é simples: <strong>Sonnet para o volume, Opus para os gargalos</strong>.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-violet-500/20 p-5">
          <h3 className="font-bold mb-4 text-sm">🔄 Fluxo Híbrido Recomendado</h3>
          <div className="space-y-3">
            {[
              { passo: "1", desc: "Sonnet processa 100% das requisições iniciais (triagem, formatação, perguntas simples)" },
              { passo: "2", desc: "Classificador detecta tarefas de alta complexidade (score de dificuldade > threshold)" },
              { passo: "3", desc: "Apenas ~10–15% das requisições são escaladas para o Opus" },
              { passo: "4", desc: "Resultado: qualidade próxima de 100% Opus com custo de ~20% Opus" },
            ].map(({ passo, desc }) => (
              <div key={passo} className="flex gap-3 items-start text-sm">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 font-bold flex items-center justify-center shrink-0 text-xs">{passo}</span>
                <span className="text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-violet-400" />
          O Que os Benchmarks Realmente Dizem: A Análise Que a Anthropic Não Faz
        </h2>
        <p>
          O lançamento do Claude 4.6 em fevereiro de 2026 foi marcado por um dado histórico: <strong>pela primeira vez na história da Anthropic, a diferença entre o modelo mid-tier e o flagship ficou tão pequena que a escolha ficou genuinamente difícil</strong>. O Sonnet 4.6 (lançado em 17 de fevereiro) marca 79,6% no SWE-bench Verified — apenas 1,2 pontos percentuais abaixo do Opus 4.6 (80,8%, lançado em 5 de fevereiro).
        </p>
        <p>
          Isso tem uma implicação prática importante: o Sonnet 4.6 superou o <strong>Opus 4.5</strong> (geração anterior do flagship) em SWE-bench. Ou seja, quem estava usando Opus 4.5 para resolver issues de código e migrar para Sonnet 4.6 vai notar <em>melhoria</em>, não degradação. A geração 4.6 claramente evoluiu mais o Sonnet do que o Opus — algo que a Rootly confirmou em testes internos: o Sonnet 4.6 ganhou mais de 4 pontos sobre o Sonnet 4.5, enquanto o Opus mal se moveu entre gerações.
        </p>
        <p>
          O único benchmark onde o Opus ainda domina de forma inequívoca é o <strong>GPQA Diamond</strong>, que mede questões de nível PhD em física, química e biologia. Com 91,3% (Opus) contra 74,1% (Sonnet), a diferença de 17,2 pontos percentuais é real e significativa. Se o seu trabalho envolve pesquisa científica avançada, síntese de literatura médica ou engenharia de materiais, o Opus justifica seu preço 5× maior. Para o restante, a matemática fala sozinha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-violet-400" />
          Terminal-Bench: O Benchmark que Claude Perde para GPT e Gemini
        </h2>
        <p>
          Há um benchmark importante onde os modelos Claude 4.6 ficam atrás dos concorrentes: o <strong>Terminal-Bench</strong>, que avalia a capacidade de operar um computador via linha de comando — administração de sistemas, gerenciamento de ambientes, debugging e operações multi-etapa em terminal ao vivo. Enquanto o GPT-5.3-Codex e o Gemini 3.1 Pro pontuam 77,3%, o Opus 4.6 fica cerca de 12 pontos abaixo. Isso acontece porque o Terminal-Bench recompensa <em>iteração rápida e comandos curtos e precisos</em> — um padrão de trabalho diferente do planejamento de sequências longas que o Claude faz melhor.
        </p>
        <p>
          A implicação prática: para tarefas de <strong>agente que opera um computador via terminal</strong> (DevOps, SRE, automação de infraestrutura), o GPT-5.4 ou o Gemini 3.1 Pro são escolhas mais defensáveis. Para análise de código, refatoração e entendimento de base de código grande, o Claude continua na frente. Avaliar o modelo pelo <em>tipo de tarefa</em> é sempre mais preciso do que escolher por reputação geral.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-violet-400" />
          Custo em Reais: O Que Você Paga na Prática em Produção
        </h2>
        <p>
          Os preços da API são em dólar, e o câmbio mais IOF muda a conta para quem paga de conta pessoa física brasileira. Com câmbio de R$ 5,60 e IOF de 3,38% no cartão internacional:
        </p>
        <ul className="space-y-2 my-6">
          <li><strong>Sonnet 4.6:</strong> US$ 3,00/M tokens de input = R$ 17,34 | US$ 15,00/M de output = R$ 86,72</li>
          <li><strong>Opus 4.6:</strong> US$ 15,00/M tokens de input = R$ 86,72 | US$ 75,00/M de output = R$ 433,60</li>
          <li><strong>Exemplo real:</strong> Um chatbot de atendimento processando 500 conversas/dia com 2.000 tokens de output médio gera 30M tokens de output/mês. Sonnet: ~R$ 2.600/mês. Opus: ~R$ 13.008/mês. Diferença: R$ 10.408/mês.</li>
        </ul>
        <p>
          Para uso pessoal via claude.ai, o <strong>Claude Pro (US$ 20/mês ≈ R$ 115)</strong> dá acesso a ambos os modelos. O Opus tem limite de mensagens mais restritivo por sessão. Para a maioria dos usuários individuais, o Sonnet entrega tudo que precisam com mais mensagens disponíveis.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { perfil: "👨‍💻 Desenvolvedor / Indie Hacker", rec: "Sonnet 4 como padrão. Opus só para revisão de arquitetura ou debugging de bugs críticos que o Sonnet não resolve em 2–3 tentativas.", cor: "border-violet-500/20" },
            { perfil: "🏢 Empresa / Startup SaaS", rec: "Sonnet em produção para todos os usuários finais. Opus em pipelines internos de QA, geração de documentação técnica e análise de contratos.", cor: "border-blue-500/20" },
            { perfil: "🎓 Pesquisador / Acadêmico", rec: "Opus para síntese de literatura, análise de papers e geração de hipóteses. Sonnet para tarefas repetitivas como formatação e resumos.", cor: "border-amber-500/20" },
            { perfil: "✍️ Criador de Conteúdo / Escritor", rec: "Sonnet é mais que suficiente. A diferença de qualidade criativa entre Opus e Sonnet é marginal para a maioria dos formatos.", cor: "border-green-500/20" },
            { perfil: "🔷 Usuário Casual / Claude.ai", rec: "Use o Sonnet (padrão do Pro). O Opus no Claude.ai tem limite de mensagens mais restrito — reserve para suas perguntas mais difíceis do mês.", cor: "border-sky-500/20" },
          ].map(({ perfil, rec, cor }) => (
            <div key={perfil} className={`bg-card rounded-xl border ${cor} p-4`}>
              <h3 className="font-bold text-sm mb-1">{perfil}</h3>
              <p className="text-sm text-muted-foreground">{rec}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual modelo você mais usa? 🤖</h3>
          <p className="text-muted-foreground">Conta nos comentários sua experiência! 👇</p>
        </div>
      </div>
      <EditorialTake category="ia" title="Análise do Marcos: Opus por hora, Sonnet por padrão">
        <p>Depois de meses rodando os dois em produção, minha regra prática para quem opera com orçamento em real é simples: <strong>Sonnet como modelo padrão</strong> da maioria dos prompts (resposta, edição, classificação) e <strong>Opus reservado para raciocínio multi-etapa</strong> — análise de contrato, refatoração de código grande, planejamento. A diferença de custo por milhão de tokens não compensa Opus em chamadas curtas, mas paga sozinha quando o problema exige cadeia de pensamento longa. Quem está testando agora deveria instrumentar o roteamento de modelo (router próprio) antes de assinar plano caro: 80% do tráfego cabe em Sonnet sem perda perceptível.</p>
      </EditorialTake>
      <ArticleSources
        sources={[
          { title: "Anthropic — Claude models overview e pricing", url: "https://www.anthropic.com/pricing", publisher: "Anthropic", accessedAt: "Maio 2026" },
          { title: "Morph LLM — Claude Benchmarks 2026 (Opus 4.6, Sonnet 4.6, Haiku 4.5)", url: "https://www.morphllm.com/claude-benchmarks", publisher: "Morph LLM", accessedAt: "Maio 2026" },
          { title: "NxCode — Sonnet vs Opus: Which Claude Model to Pick (fev/2026)", url: "https://www.nxcode.io/resources/news/claude-sonnet-4-6-vs-opus-4-6-which-model-to-choose-2026", publisher: "NxCode", accessedAt: "Maio 2026" },
          { title: "Rootly — Claude Sonnet 4.6 Benchmark Results (fev/2026)", url: "https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre", publisher: "Rootly", accessedAt: "Maio 2026" },
          { title: "Morph LLM — Best AI for Coding 2026 (SWE-bench Pro ranking)", url: "https://www.morphllm.com/best-ai-model-for-coding", publisher: "Morph LLM", accessedAt: "Maio 2026" }
        ]}
      />



      <RelatedPosts currentSlug="claude-opus-vs-sonnet-2026" />
      <CommentSection category="ia" postId="claude-opus-vs-sonnet-2026" postTitle="Claude 4 Opus vs Claude 4 Sonnet: Qual Usar em 2026?" />
    </article>
  );
};

export default ClaudeOpusVsSonnet2026;