import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, Brain, Zap, Shield, BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/mcp-model-context-protocol-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
 
const McpProtocol2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "mcp-model-context-protocol-2026",
      "MCP: O Protocolo com 97 Milhões de Instalações que Conecta Todos os Agentes de IA",
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
            MCP · Agentes · Protocolo
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          MCP: O Protocolo com 97 Milhões de Instalações que Conecta Todos os Agentes de IA
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
 
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="MCP Model Context Protocol agentes de IA 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>
 
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em março de 2026, o <strong>Model Context Protocol (MCP) atingiu 97 milhões de instalações</strong> — um marco que ninguém antecipou quando a Anthropic lançou o padrão aberto em novembro de 2024. Hoje, todo grande provedor de IA (OpenAI, Google, Microsoft, Meta) adotou o MCP como padrão nativo. Ele se tornou a "linguagem universal" que permite agentes de IA conectarem-se a qualquer ferramenta, API ou banco de dados. Entender o MCP é entender como os agentes do futuro funcionarão — e como você pode usá-los agora.
        </p>
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          O Problema que o MCP Resolve: O Caos das Integrações
        </h2>
        <p>
          Antes do MCP, integrar um agente de IA a uma ferramenta externa era uma bagunça. Cada integração exigia código customizado, autenticação específica, tratamento de erros próprio. Um agente que precisasse acessar GitHub, Slack, Google Drive, banco de dados e API interna da empresa precisava de 5 integrações diferentes — cada uma desenvolvida do zero.
        </p>
        <p>
          O MCP resolve isso criando um <strong>protocolo padronizado</strong>: cada ferramenta publica um "servidor MCP", e qualquer agente compatível conecta-se automaticamente. É como o USB para dispositivos físicos — você não precisa de drivers diferentes para cada fabricante.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-muted p-5">
            <h3 className="font-bold mb-3 text-sm">❌ Sem MCP (antes)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Integração customizada por ferramenta</li>
              <li>• Semanas de desenvolvimento por conexão</li>
              <li>• Cada agente reinventa a roda</li>
              <li>• Impossível escalar para dezenas de ferramentas</li>
              <li>• Sem padrão de segurança unificado</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-ia/30 p-5">
            <h3 className="font-bold mb-3 text-sm text-ia">✅ Com MCP (agora)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Protocolo único para todas as ferramentas</li>
              <li>• Conecta em minutos via servidor MCP público</li>
              <li>• Um agente acessa centenas de ferramentas</li>
              <li>• Ecossistema de 97M+ instalações</li>
              <li>• Segurança e permissões padronizadas</li>
            </ul>
          </div>
        </div>
 
        <AdLeaderboard className="my-8" />
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-ia" />
          Como o MCP Funciona: Arquitetura em 3 Camadas
        </h2>
        <p>O MCP opera com três componentes principais que se comunicam num protocolo baseado em JSON-RPC:</p>
        <div className="not-prose my-6 space-y-3">
          {[
            { num: "1", nome: "MCP Host (o agente)", desc: "É o agente de IA (Claude, GPT, Gemini) que quer usar ferramentas externas. Ele se conecta a servidores MCP e chama as ferramentas disponíveis conforme a necessidade da tarefa.", cor: "border-ia/30" },
            { num: "2", nome: "MCP Server (a ferramenta)", desc: "Cada serviço externo expõe um servidor MCP — uma interface padronizada que lista as ferramentas disponíveis, seus parâmetros e como chamá-las. Exemplos: GitHub MCP Server, Google Drive MCP Server, Slack MCP Server.", cor: "border-ia/30" },
            { num: "3", nome: "MCP Client (o conector)", desc: "Gerencia a comunicação entre host e servers, traduz chamadas, autentica, verifica permissões e retorna resultados. Pode rodar localmente (no computador do usuário) ou na nuvem.", cor: "border-invest/30" },
          ].map(({ num, nome, desc, cor }) => (
            <div key={num} className={`flex gap-4 bg-card rounded-xl border ${cor} p-4`}>
              <span className="w-8 h-8 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-sm">{num}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{nome}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Na prática, quando você diz ao Claude "analise os commits do nosso repositório do GitHub e crie um resumo para o time no Slack", o agente automaticamente chama o GitHub MCP Server para buscar os commits, processa os dados, depois chama o Slack MCP Server para enviar a mensagem — tudo sem você escrever uma linha de código.
        </p>
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-ia" />
          Os 97 Milhões de Instalações: O que Esse Número Significa
        </h2>
        <p>
          Quando a Anthropic lançou o MCP em novembro de 2024, era um projeto experimental. Em 4 meses, chegou a 10 milhões de instalações. Em 16 meses, 97 milhões — crescimento de 870%. O que explica isso?
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Marco</th>
              <th className="text-left py-3 px-4">Data</th>
              <th className="text-left py-3 px-4">Evento catalisador</th>
            </tr></thead>
            <tbody>
              {[
                ["Lançamento", "Nov 2024", "Anthropic open-source o protocolo no GitHub"],
                ["1M instalações", "Jan 2025", "OpenAI anuncia compatibilidade nativa com MCP"],
                ["10M instalações", "Mar 2025", "Google e Microsoft adotam o padrão"],
                ["30M instalações", "Jul 2025", "Claude Code lançado com MCP integrado nativamente"],
                ["97M instalações", "Mar 2026", "Todo grande AI provider e 500+ empresas publicam servidores MCP"],
              ].map(([marco, data, evento]) => (
                <tr key={marco} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-ia">{marco}</td>
                  <td className="py-3 px-4">{data}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{evento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          O ponto de inflexão real foi quando o <strong>Claude Code</strong> — a ferramenta de programação autônoma da Anthropic — adotou MCP como mecanismo padrão para conectar agentes ao ambiente do desenvolvedor. Com isso, qualquer IDE, terminal, banco de dados e serviço de CI/CD podia ser conectado via MCP Server em minutos.
        </p>
 
        <AdRectangle className="my-8" />
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-ia" />
          Os MCP Servers Mais Populares em 2026
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { cat: "💻 Desenvolvimento", servers: "GitHub, GitLab, VS Code, Terminal/Shell, Docker, PostgreSQL, Redis, Kubernetes" },
            { cat: "📁 Produtividade", servers: "Google Drive, OneDrive, Notion, Obsidian, Confluence, Jira, Linear, Asana" },
            { cat: "💬 Comunicação", servers: "Slack, Microsoft Teams, Discord, Gmail, Outlook, WhatsApp Business API" },
            { cat: "📊 Dados e Analytics", servers: "BigQuery, Snowflake, Tableau, Power BI, Google Analytics, Mixpanel" },
            { cat: "🛒 CRM e Vendas", servers: "Salesforce, HubSpot, Pipedrive, RD Station, Totvs CRM" },
            { cat: "💰 Financeiro BR", servers: "B3 (cotações), Brapi.dev, Banco Central APIs, NFe, TOTVS ERP" },
          ].map(({ cat, servers }) => (
            <div key={cat} className="bg-card rounded-xl border border-ia/20 p-4">
              <h3 className="font-bold text-sm mb-1">{cat}</h3>
              <p className="text-xs text-muted-foreground">{servers}</p>
            </div>
          ))}
        </div>
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-ia" />
          Como Começar com MCP Hoje: Guia Prático
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { passo: "1", titulo: "Instale o Claude Desktop ou VS Code com Cline", desc: "Ambos têm suporte nativo a MCP. No Claude Desktop (desktop.claude.ai), acesse Configurações → MCP. No VS Code, instale a extensão Cline ou Continue e habilite MCP." },
            { passo: "2", titulo: "Adicione um servidor MCP público", desc: 'Edite o arquivo de configuração MCP (claude_desktop_config.json) e adicione o servidor desejado. Exemplo: adicionar o GitHub MCP Server requer apenas inserir: { "mcpServers": { "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"] } } }' },
            { passo: "3", titulo: "Defina as permissões", desc: "Cada MCP Server tem escopos de permissão. Configure apenas o acesso mínimo necessário: read-only para repositórios públicos, por exemplo. Nunca conceda permissões de escrita sem entender o escopo completo." },
            { passo: "4", titulo: "Teste com um prompt simples", desc: 'Após configurar o GitHub MCP, peça: "Liste os últimos 5 pull requests abertos no repositório meu-projeto". O agente chamará o servidor MCP automaticamente e retornará os dados reais.' },
            { passo: "5", titulo: "Combine múltiplos servers", desc: "O poder real está em combinar. Com GitHub + Jira + Slack MCP conectados, você pode pedir: 'Para cada PR mergeado hoje, feche a issue do Jira correspondente e notifique o canal #releases no Slack'." },
          ].map(({ passo, titulo, desc }) => (
            <div key={passo} className="flex gap-3 bg-card rounded-xl border border-ia/20 p-4">
              <span className="w-7 h-7 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-xs">{passo}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
 
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          Riscos e Cuidados com MCP
        </h2>
        <ul>
          <li><strong>MCP Injection:</strong> Servidores MCP maliciosos podem instruir o agente a executar ações não autorizadas. Use apenas servidores de fontes confiáveis (repositórios oficiais, empresas conhecidas).</li>
          <li><strong>Escalada de permissões:</strong> Um agente com MCP configurado erroneamente pode ter acesso a mais dados do que deveria. Audite os escopos regularmente.</li>
          <li><strong>Servidores MCP de terceiros:</strong> Qualquer pessoa pode publicar um MCP Server. Antes de instalar, verifique o código-fonte (são projetos open-source) e a reputação do mantenedor.</li>
          <li><strong>Logs de auditoria:</strong> Configure seu ambiente MCP para logar todas as chamadas do agente. Isso é essencial em ambientes corporativos para rastrear o que foi executado.</li>
        </ul>
 
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já usa MCP no seu fluxo de trabalho? 🔌</h3>
          <p className="text-muted-foreground">Conta nos comentários qual servidor MCP está mudando sua vida! 👇</p>
        </div>
      </div>
 
      <NewsletterSignup variant="inline" categories={["ia"]} />
      <RelatedPosts currentSlug="mcp-model-context-protocol-2026" />
      <NewsletterSignup variant="modal" categories={["ia"]} showAfterMs={60000} />
      <CommentSection postId="mcp-model-context-protocol-2026" postTitle="MCP: O Protocolo com 97 Milhões de Instalações que Conecta Todos os Agentes de IA" />
    </article>
  );
};
 
export default McpProtocol2026;