import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { ArrowLeft, Clock, User, Calendar, Bot, Cpu, Briefcase, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/agentes-ia-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const AgentesIA2026 = () => {

  useEffect(() => {
    trackArticleRead("agentes-ia-2026-como-funcionam", "Agentes de IA 2026: O Que São, Como Funcionam e Por Que Mudam Tudo", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Agentes de IA em 2026: O Que São, Como Funcionam e Por Que Mudam Tudo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />01 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Agentes de IA 2026 — como funcionam, benchmarks e uso seguro no Brasil" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se em 2024 a grande revolução foi o chatbot, em 2026 estamos vivendo a era dos <strong>agentes de IA</strong>: sistemas que não apenas respondem, mas <strong>agem de forma autônoma</strong> para completar tarefas complexas — pesquisar, decidir, executar e revisar sem intervenção humana a cada passo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-ia" />
          Chatbot vs. Agente de IA: A Diferença Fundamental
        </h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">💬 Chatbot</h4>
            <p className="text-sm text-muted-foreground mb-0">Responde "Como reservar um hotel?" com informações e links.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-ia/50">
            <h4 className="font-bold mb-2">🤖 Agente de IA</h4>
            <p className="text-sm text-muted-foreground mb-0">Recebe "Reserve o melhor hotel em SP, orçamento R$ 800", pesquisa, compara, reserva, envia comprovante e adiciona no calendário — tudo sozinho.</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          Como os Agentes de IA Funcionam
        </h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Percepção", "Raciocínio", "Ação", "Memória", "Revisão"].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">{step}</span>
                {i < 4 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
      <AdInArticle />
          </div>
          <p className="text-sm text-muted-foreground mt-4 mb-0 text-center">Esse ciclo se repete até a tarefa ser concluída.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-ia" />
          Exemplos Reais de Agentes de IA em Uso
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Vendas:</strong> identificam leads, personalizam e-mails, agendam reuniões e atualizam o CRM.</li>
          <li><strong>Jurídico:</strong> análise de contratos e identificação de cláusulas problemáticas em minutos.</li>
          <li><strong>Financeiro:</strong> monitoramento de portfólio e execução de ordens dentro de parâmetros.</li>
          <li><strong>RH:</strong> triagem de currículos, agendamento e entrevistas iniciais padronizadas.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">Principais Agentes de IA Disponíveis em 2026</h2>
        <ul className="space-y-2 my-6">
          <li><strong>OpenAI Operator:</strong> navega na web e executa tarefas como um humano.</li>
          <li><strong>Claude Computer Use:</strong> controla computador completo via linguagem natural.</li>
          <li><strong>Google Project Mariner:</strong> integrado ao Chrome, executa tarefas nos sites abertos.</li>
          <li><strong>Devin (Cognition AI):</strong> engenheiro de software IA que escreve, testa e faz deploy de código.</li>
          <li><strong>AutoGPT e CrewAI:</strong> frameworks open-source para construir agentes personalizados.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          Riscos e Limitações dos Agentes de IA
        </h2>
        <p>
          Agentes de IA ainda erram — e quando erram de forma autônoma, o erro pode se propagar. Riscos: ações irreversíveis, viés nos critérios, vulnerabilidade a prompt injection e questões de privacidade. <strong>Regra atual:</strong> agentes são mais seguros em ambientes com ações reversíveis e supervisão humana.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Estado Real dos Agentes em 2026: Benchmarks e Métricas</h2>
        <p>
          O hype vendido como "agentes resolvem qualquer tarefa" não bate com os números públicos. O <strong>SWE-bench Verified</strong>,
          benchmark de engenharia de software mantido pela Princeton e mais usado para medir agentes de código, mostrava em janeiro de 2026
          a Claude 3.7 Sonnet em <strong>~70% de acerto</strong> e o GPT-5 com agentes em torno de <strong>74%</strong> — em tarefas reais
          do GitHub que humanos resolvem em mais de 1 hora. Avanço impressionante, mas longe da automação completa.
        </p>
        <p>
          No benchmark <strong>OSWorld</strong> (Carnegie Mellon, 2024), que testa agentes operando computadores reais com mouse e teclado,
          os melhores modelos chegaram a apenas <strong>38% de sucesso</strong> em tarefas que humanos completam em 95% das vezes.
          A conclusão técnica: agentes funcionam para tarefas bem delimitadas, repetitivas e com reversibilidade — não para "faça
          minha vida por mim". Quem promete o contrário está vendendo, não medindo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">MCP, A2A e o Padrão que Está Unificando Tudo</h2>
        <p>
          Em novembro de 2024 a Anthropic abriu o <strong>Model Context Protocol (MCP)</strong>, um padrão aberto que permite a qualquer agente
          (Claude, Cursor, Zed, Windsurf) conectar-se a ferramentas e fontes de dados externas via um protocolo único. Em 2025 a OpenAI,
          Google e Microsoft adotaram o MCP — efetivamente é o "USB-C dos agentes". O ecossistema cresceu para mais de 1.000 servidores
          MCP públicos cobrindo GitHub, Notion, Slack, Postgres e até CNPJ/SERASA no Brasil.
        </p>
        <p>
          Paralelamente, o Google lançou o <strong>Agent2Agent (A2A) Protocol</strong> em abril de 2025, focado em comunicação entre agentes
          de fornecedores diferentes. A combinação MCP (acesso a ferramentas) + A2A (orquestração entre agentes) é o que vai destravar
          aplicações sérias em 2026-2027. Para desenvolvedores brasileiros, o tutorial oficial do MCP é o melhor ponto de partida.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Como Usar Agentes de IA com Segurança no Brasil</h2>
        <p>
          Três regras práticas para evitar dor de cabeça regulatória ou financeira: <strong>(1) sandbox primeiro</strong> — todo agente que
          executa código ou navega deve rodar em ambiente isolado (Docker, browser headless, conta-teste); <strong>(2) limite financeiro
          duro</strong> — se o agente pode gastar (APIs, compras, ads), defina teto diário no provedor, não no prompt;
          <strong> (3) human-in-the-loop em ações irreversíveis</strong> — envio de email externo, transação financeira, deleção de dados
          devem exigir confirmação humana até que o agente prove confiabilidade em ambiente real.
        </p>
        <p>
          Do ponto de vista LGPD, agentes que acessam dados pessoais de terceiros (clientes, leads) precisam de base legal documentada
          e devem estar no Registro de Operações de Tratamento (ROT) da empresa. A ANPD ainda não publicou guia específico para
          agentes autônomos, mas o Parecer 24/2024 já sinaliza que decisões automatizadas com efeito sobre titulares exigem
          <strong> revisão humana garantida</strong> (art. 20 LGPD). Quem implanta agente em atendimento ao cliente sem botão "falar com humano"
          está infringindo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre Agentes de IA</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Agente de IA é a mesma coisa que automação RPA?</h4>
            <p className="text-sm text-muted-foreground mb-0">Não. RPA (UiPath, Automation Anywhere) segue scripts fixos. Agente decide o próximo passo com base no contexto — pode adaptar-se a mudanças na interface, mas também pode errar de formas imprevisíveis.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quanto custa rodar um agente de IA?</h4>
            <p className="text-sm text-muted-foreground mb-0">Varia muito. Um agente simples com Claude/GPT-4o gasta US$ 0,01 a US$ 0,50 por execução. Agentes com loops longos podem facilmente passar de US$ 5 por tarefa — sempre coloque limite de tokens.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Devin substitui programador?</h4>
            <p className="text-sm text-muted-foreground mb-0">Não. Testes independentes mostram Devin abaixo de 14% no SWE-bench original. É útil para tickets pequenos e repetitivos com supervisão — não para projetos críticos.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você já usou um agente de IA?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: agente assistido é o único caminho sério em 2026">
        <p>
          A pressa em chamar tudo de "agente autônomo" está atrasando o uso sério dessa tecnologia. O que funciona hoje no Brasil é
          o <strong>agente assistido</strong>: humano define a tarefa, agente executa em sandbox, humano aprova ações irreversíveis.
          Esse desenho elimina 90% dos riscos de prompt injection e atende ao art. 20 da LGPD. Se sua empresa quer adotar agentes de IA em 2026,
          o caminho não é "demitir e substituir" — é mapear processos repetitivos com ações reversíveis (triagem de email, qualificação
          de lead, atualização de planilha) e começar por aí. Quem ignorar a parte regulatória vai descobrir o custo de uma multa
          ANPD da forma cara.
        </p>
      </EditorialTake>

      <ArticleSources category="ia" sources={[
        { title: "Anthropic — Introducing the Model Context Protocol", url: "https://www.anthropic.com/news/model-context-protocol", publisher: "Anthropic", accessedAt: "Maio 2026" },
        { title: "Princeton NLP — SWE-bench Verified Leaderboard", url: "https://www.swebench.com/", publisher: "Princeton NLP", accessedAt: "Maio 2026" },
        { title: "OSWorld: Benchmarking Multimodal Agents (CMU)", url: "https://os-world.github.io/", publisher: "Carnegie Mellon University", accessedAt: "Maio 2026" },
        { title: "Google Cloud — Agent2Agent (A2A) Protocol", url: "https://cloud.google.com/blog/products/ai-machine-learning/a2a-a-new-era-of-agent-interoperability", publisher: "Google Cloud", accessedAt: "Maio 2026" },
        { title: "LGPD — Art. 20 (Revisão de decisões automatizadas)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Planalto", accessedAt: "Maio 2026" }
      ]} />

      <RelatedPosts currentSlug="agentes-ia-2026-como-funcionam" />
      <CommentSection postId="agentes-ia-2026-como-funcionam" postTitle="Agentes de IA 2026: O Que São, Como Funcionam e Por Que Mudam Tudo" />
    </article>
  );
};

export default AgentesIA2026;
