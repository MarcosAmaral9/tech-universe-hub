import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Bot, Wrench, Coins, Workflow, Lightbulb, ShieldAlert, HelpCircle, GraduationCap, Rocket } from "lucide-react";
import heroImg from "@/assets/criar-agentes-ia-guia-2026.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "como-criar-agentes-ia-guia-completo-2026";
const TITLE = "Como Criar Agentes de IA em 2026: Guia Completo do Zero (Grátis e Pago)";

const CriarAgentesIaGuia2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Agentes · Tutorial · Ferramentas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          {TITLE}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />1 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Como criar agentes de IA em 2026 — guia completo com ferramentas gratuitas e pagas, do zero ao avançado" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Criar um <strong>agente de IA</strong> em 2026 deixou de ser privilégio de programador. Hoje existem caminhos gratuitos que exigem apenas uma conta no Google e dez minutos — e caminhos pagos capazes de colocar um "funcionário digital" inteiro no ar. Este guia foi escrito para dois públicos ao mesmo tempo: quem nunca ouviu falar do assunto vai entender do zero, e quem já acompanha IA vai encontrar os conceitos novos que mudaram o jogo nos últimos meses, como o protocolo MCP, os agentes de computador e a orquestração multiagente.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-violet-400" />
          O Que é um Agente de IA, Explicado de Verdade
        </h2>
        <p>
          Esqueça a definição acadêmica por um momento. Um agente de IA é um sistema ao qual você entrega um <strong>objetivo</strong>, não uma pergunta. Você diz "organize minha semana e responda os e-mails pendentes", e ele sozinho decide quais passos tomar, usa as ferramentas necessárias (calendário, caixa de entrada, planilhas) e entrega o resultado. A palavra-chave é <strong>agência</strong>: a capacidade de agir, não apenas responder.
        </p>
        <p>
          Tecnicamente, um agente combina quatro peças: um <strong>modelo de linguagem</strong> (o cérebro, como GPT, Claude ou Gemini), <strong>ferramentas</strong> (as mãos: busca na web, APIs, arquivos, bancos de dados), <strong>memória</strong> (o que ele lembra entre execuções) e um <strong>loop de decisão</strong> (o ciclo de planejar, agir, observar o resultado e corrigir). Quando essas quatro peças se encaixam, a IA deixa de ser um papagaio sofisticado e vira um executor.
        </p>
        <p>
          O que mudou em 2026 e pouca gente percebeu: os agentes ganharam <strong>olhos e mãos no computador</strong>. Recursos como o uso de computador do Claude e os agentes do ChatGPT permitem que o modelo literalmente veja a tela, mova o mouse e digite — o que significa que qualquer software com interface gráfica virou "ferramenta" de agente, mesmo sem API. É por isso que o assunto explodiu: a barreira técnica desabou.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-violet-400" />
          Exemplos Concretos: O Que um Agente Faz na Prática
        </h2>
        <p>Antes de construir, vale ver o que já funciona no dia a dia de pessoas e empresas:</p>
        <ul>
          <li><strong>Agente de pesquisa:</strong> recebe um tema, vasculha dezenas de fontes, cruza dados e devolve um relatório com citações. É o que o Deep Research do Gemini e do ChatGPT fazem — relatórios que levariam horas saem em minutos.</li>
          <li><strong>Agente de atendimento:</strong> responde clientes no WhatsApp ou site, consulta pedidos no sistema da loja e só escala para humano quando o caso foge do roteiro. Empresas como a Klarna divulgaram publicamente resultados dessa abordagem.</li>
          <li><strong>Agente programador:</strong> ferramentas como Claude Code e Cursor recebem "corrija esse bug e abra o pull request" e executam o ciclo inteiro: leem o código, alteram, rodam os testes e documentam.</li>
          <li><strong>Agente pessoal:</strong> monitora preços de passagens, resume suas reuniões gravadas, organiza o Notion e agenda posts em redes sociais — tudo em fluxos automáticos disparados por horário ou evento.</li>
          <li><strong>Agente financeiro:</strong> concilia extratos, categoriza gastos e gera o fechamento do mês sem você tocar na planilha.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-violet-400" />
          O Mapa Mental: Os 3 Níveis de Criação de Agentes
        </h2>
        <p>
          Toda forma de criar um agente cabe em um destes três níveis. Entender isso evita o erro mais comum do iniciante: tentar programar do zero algo que já existe pronto.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-2 text-sm text-ia">Nível 1 — Sem código</h3>
            <p className="text-sm text-muted-foreground">GPTs personalizados, Gems do Gemini, projetos no Claude, Zapier com IA. Você escreve instruções em português e conecta ferramentas clicando. Custo: de graça até ~R$ 100/mês.</p>
          </div>
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-2 text-sm text-ia">Nível 2 — Low-code / visual</h3>
            <p className="text-sm text-muted-foreground">n8n, Make, Flowise, Dify. Você monta fluxos arrastando blocos: gatilho → IA → ferramenta → ação. Dá para self-hospedar de graça. Ideal para automações de negócio.</p>
          </div>
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-2 text-sm text-ia">Nível 3 — Código</h3>
            <p className="text-sm text-muted-foreground">LangChain/LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK. Controle total: multiagentes, memória própria, ferramentas customizadas. Custo: o da API que você consumir.</p>
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-violet-400" />
          Passo a Passo Gratuito: Seu Primeiro Agente em 15 Minutos
        </h2>
        <p>
          O caminho mais rápido e gratuito é criar um <strong>GPT personalizado</strong> ou um <strong>Gem</strong>. Vamos ao roteiro genérico que vale para ambos:
        </p>
        <div className="not-prose my-6 space-y-0">
          {[
            { n: "1", titulo: "Defina uma tarefa, não um tema", desc: "\"Agente de produtividade\" é vago. \"Lê meus e-mails não respondidos, classifica por urgência e redige rascunhos de resposta\" é um agente. Especificidade é 80% do resultado." },
            { n: "2", titulo: "Escreva as instruções (o system prompt)", desc: "Descreva quem o agente é, o que ele deve fazer, o que NUNCA deve fazer e o formato da resposta. Trate como o manual de treinamento de um estagiário novo." },
            { n: "3", titulo: "Adicione conhecimento", desc: "Suba PDFs, planilhas e documentos de referência. É aqui que o agente deixa de ser genérico e passa a falar a língua do seu negócio." },
            { n: "4", titulo: "Conecte ferramentas/ações", desc: "Nos GPTs, ative ações (APIs); nos Gems, a integração com Drive e Workspace. Sem ferramentas, você tem um chatbot com personalidade — não um agente." },
            { n: "5", titulo: "Teste com casos reais e ruins", desc: "Peça a tarefa certa, depois tente quebrar: dados faltando, pedido ambíguo, formato errado. Ajuste as instruções a cada falha. Iteração é o trabalho." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-4 border border-muted rounded-xl p-4 mb-2 bg-card">
              <span className="w-8 h-8 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-sm">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Para ir além sem pagar nada, o <strong>n8n self-hosted</strong> é a joia escondida: é open source, roda no seu computador ou num servidor barato, e permite fluxos do tipo "quando chegar e-mail com anexo → extrair dados com IA → lançar na planilha → me avisar no Telegram". Modelos open weight (Llama, Qwen, DeepSeek) podem rodar localmente via Ollama, zerando o custo de API para tarefas leves.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Coins className="h-7 w-7 text-violet-400" />
          O Caminho Pago: Quando Vale Abrir a Carteira
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Caminho</th>
              <th className="text-left py-3 px-4">Custo típico</th>
              <th className="text-left py-3 px-4">Quando vale a pena</th>
            </tr></thead>
            <tbody>
              {[
                ["Assinatura ChatGPT Plus / Claude Pro / Gemini Advanced", "~US$ 20/mês cada", "Uso pessoal diário, agentes de pesquisa e GPTs com ações"],
                ["n8n Cloud / Make pago", "US$ 20–50/mês", "Automações de negócio sem manter servidor próprio"],
                ["APIs de modelos (OpenAI, Anthropic, Google)", "Pay-per-use, centavos por tarefa", "Agentes próprios em produção, custo escala com volume"],
                ["Plataformas corporativas (Copilot Studio, Vertex AI Agent Builder)", "Dezenas a centenas de dólares/mês", "Empresas com compliance, auditoria e suporte"],
              ].map(([caminho, custo, quando]) => (
                <tr key={caminho} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-ia">{caminho}</td>
                  <td className="py-3 px-4">{custo}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{quando}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A regra prática: <strong>pague quando o agente gera mais valor do que custa</strong>. Um agente de R$ 100/mês que economiza 10 horas de trabalho mensal custa R$ 10 por hora devolvida — menos que qualquer freelancer. O erro é assinar tudo antes de validar o caso de uso no plano gratuito.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Workflow className="h-7 w-7 text-violet-400" />
          Para Quem Já Sabe: As Novidades Que Mudam o Jogo
        </h2>
        <p>
          Se você já constrói agentes, três mudanças recentes merecem atenção. A primeira é a consolidação do <strong>MCP (Model Context Protocol)</strong>, doado à Linux Foundation: em vez de escrever uma integração por ferramenta, você expõe um servidor MCP e qualquer agente compatível passa a usá-la. A segunda é a <strong>orquestração multiagente</strong>: em vez de um agente faz tudo, frameworks como CrewAI e LangGraph coordenam times especializados (um pesquisa, outro escreve, outro revisa) — padrão que já supera agentes únicos em benchmarks de tarefas longas. A terceira são os <strong>agentes de computador</strong>: com uso de tela e cliques, o browser inteiro virou ferramenta, dispensando APIs inexistentes.
        </p>
        <p>
          Junto com isso, amadureceu a discussão de <strong>engenharia de contexto</strong>: o desempenho de um agente depende menos do modelo e mais do que você coloca na janela de contexto a cada passo — instruções enxutas, memória resumida, ferramentas bem descritas. É a nova "engenharia de prompt", só que em nível de sistema.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldAlert className="h-7 w-7 text-violet-400" />
          Os Erros Que Todo Mundo Comete (e Como Evitar)
        </h2>
        <ul>
          <li><strong>Dar acesso demais:</strong> um agente com permissão de escrita em e-mail e planilhas pode deletar, enviar ou vazar dados. Comece sempre com permissões de leitura e aprovação humana nas ações críticas.</li>
          <li><strong>Confiar na alucinação em produção:</strong> agentes erram. Para tarefas irreversíveis (pagamentos, exclusões), exija confirmação humana no fluxo.</li>
          <li><strong>Ignorar custo de API em loops:</strong> um agente que se replaneja 30 vezes por tarefa pode queimar dólares em minutos. Defina limites de passos e de gasto.</li>
          <li><strong>Automatizar processo ruim:</strong> agente em cima de processo bagunçado produz bagunça em escala. Arrume o processo no papel antes de automatizar.</li>
          <li><strong>Esquecer a LGPD:</strong> dados pessoais de clientes trafegando por APIs internacionais exigem base legal e, idealmente, anonimização. Não é detalhe burocrático — é obrigação.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Rocket className="h-7 w-7 text-violet-400" />
          Por Onde Começar Amanhã de Manhã
        </h2>
        <p>
          O roteiro que recomendo: escolha <strong>uma tarefa repetitiva</strong> da sua semana — algo que você faz igual toda vez e que envolve texto, planilha ou e-mail. Monte um GPT ou Gem gratuito com instruções detalhadas para essa tarefa e use por uma semana. Depois, se o fluxo exigir mais de um sistema, leve o processo para o n8n. Só pague assinatura quando sentir o limite do gratuito — e só programe do zero quando nenhuma ferramenta visual resolver. Agente bom não é o mais sofisticado: é o que roda toda semana sem você lembrar que ele existe.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-violet-400" />
          Perguntas Frequentes
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { q: "Preciso saber programar para criar um agente de IA?", a: "Não. Ferramentas como GPTs personalizados, Gems do Gemini, Zapier e n8n permitem criar agentes úteis sem escrever uma linha de código. Programação só é necessária para agentes customizados de nível profissional." },
            { q: "Dá para criar um agente de IA totalmente de graça?", a: "Sim. Gems do Gemini e n8n self-hosted com modelos locais via Ollama (Llama, Qwen, DeepSeek) têm custo zero, limitados apenas pelo seu hardware e pelos limites de uso das plataformas." },
            { q: "Qual a diferença entre agente de IA e automação comum?", a: "Automação comum segue regras fixas: se X, faça Y. Um agente decide o caminho sozinho: recebe um objetivo, planeja as etapas, escolhe as ferramentas e corrige a rota quando algo falha." },
            { q: "Quanto custa manter um agente em produção?", a: "Depende do volume. Agentes via API cobram por tokens consumidos — tarefas leves custam centavos. Fluxos simples cabem nos planos de ~US$ 20/mês; operações empresariais passam facilmente de centenas de dólares mensais." },
            { q: "Agentes de IA são seguros para dados da minha empresa?", a: "Com cuidados, sim: use permissões mínimas, exija aprovação humana em ações irreversíveis, anonimize dados pessoais (LGPD) e monitore logs. Ferramentas corporativas oferecem camadas extras de auditoria e compliance." },
          ].map((item, i) => (
            <details key={i} className="bg-card border border-muted rounded-xl p-5 group">
              <summary className="font-bold cursor-pointer list-none flex items-center justify-between">
                {item.q}
                <span className="text-ia group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <EditorialTake category="ia">
        <p>
          O melhor agente que você pode criar não é o mais complexo — é o que resolve uma tarefa chata sua toda semana sem falhar. Comece pequeno, no gratuito, e só escale quando o retorno estiver óbvio. A corrida dos agentes não será vencida por quem tem o melhor modelo, mas por quem desenha os melhores fluxos: instruções claras, permissões enxutas e contexto bem servido. Em 2026, "saber usar IA" virou commodity; saber <em>orquestrar</em> agentes é o novo diferencial de carreira.
        </p>
      </EditorialTake>
      <ArticleSources category="ia" sources={[
        { name: "Anthropic — Building Effective Agents", url: "https://www.anthropic.com/research/building-effective-agents" },
        { name: "OpenAI — A Practical Guide to Building Agents", url: "https://openai.com/business/guides/" },
        { name: "Model Context Protocol — especificação oficial", url: "https://modelcontextprotocol.io" },
        { name: "n8n — plataforma open source de automação com IA", url: "https://n8n.io" },
        { name: "LangChain — documentação LangGraph (orquestração multiagente)", url: "https://langchain-ai.github.io/langgraph/" },
        { name: "Deloitte — previsões para o mercado de agentes de IA", url: "https://www.deloitte.com" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default CriarAgentesIaGuia2026;
