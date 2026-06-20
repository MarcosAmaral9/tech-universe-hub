import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, BookOpen, Target, Wrench, AlertCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-generativa-iniciantes-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const IAGenerativaIniciantes2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-generativa-iniciantes-2026-guia", "IA Generativa para Iniciantes 2026: Do Zero ao Avançado", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA Generativa para Iniciantes em 2026: O Guia Completo do Zero ao Avançado
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />26 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="IA generativa para iniciantes em 2026 — guia completo do zero ao avançado"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Sem jargão técnico desnecessário e sem promessas irrealistas. Este é o guia de <strong>IA generativa para iniciantes</strong> que você vai querer ter tido no começo: um <strong>caminho claro do zero ao uso avançado</strong>, com etapas práticas e resultados reais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          O Que é IA Generativa (de Verdade, Sem Enrolação)
        </h2>
        <p>
          IA generativa é qualquer sistema capaz de <strong>criar conteúdo novo</strong>: textos, imagens, músicas, vídeos, códigos. Ao contrário das IAs antigas que apenas classificavam dados (spam/não-spam, gato/cachorro), as IAs generativas <em>produzem</em> — criam algo que não existia antes. Segundo o Stanford AI Index 2024, o custo de inferência desses modelos caiu <strong>280×</strong> entre 2022 e 2024, o que viabilizou o acesso gratuito ou de baixo custo que existe hoje.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-ia" />
          Etapa 1 — Experimentação sem Medo (Dias 1–7)
        </h2>
        <p>
          Abra o ChatGPT, Claude ou Gemini (todos gratuitos) e faça pelo menos <strong>30 perguntas em 7 dias</strong> sobre temas que você já conhece bem. Você vai descobrir onde a IA acerta, onde erra e onde surpreende. Não tente aprender tudo — explore um domínio de cada vez.
        </p>
        <div className="my-6 p-5 bg-ia/10 rounded-xl border border-ia/20 not-prose">
          <p className="text-sm font-medium text-ia mb-2">🎯 Exercício prático do dia 1</p>
          <p className="text-sm text-muted-foreground mb-0">Peça à IA que explique algo da sua área profissional "como se eu tivesse 10 anos". Depois peça que explique "para um especialista sênior". A diferença de resposta vai mostrar o que o modelo é capaz.</p>
        </div>

        <AdInArticle />

        <h2 className="text-2xl font-bold mt-10 mb-6">Etapa 2 — Engenharia de Prompts Básica (Dias 8–14)</h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <ul className="space-y-3 mb-0">
            <li><strong>Seja específico:</strong> "Escreva um e-mail de 150 palavras para um cliente que atrasou o pagamento, tom profissional mas cordial."</li>
            <li><strong>Dê contexto:</strong> Quem você é, para quem é o texto, qual o objetivo final.</li>
            <li><strong>Peça formato:</strong> Lista, tabela, parágrafo, tópicos com marcadores.</li>
            <li><strong>Itere:</strong> "Agora reescreva em tom mais direto." "Reduza para 3 parágrafos." A primeira resposta raramente é a final.</li>
          </ul>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-ia" />
          Etapa 3 — Escolha Suas Ferramentas (Dias 15–21)
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">✍️ Escrita e Análise</h4>
            <p className="text-sm text-muted-foreground mb-0">Claude (200k gratuito) ou ChatGPT — para documentos longos, e-mails e código</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🎨 Imagens</h4>
            <p className="text-sm text-muted-foreground mb-0">Midjourney v7, Adobe Firefly ou DALL-E 3 — escolha baseado no estilo visual</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🔍 Pesquisa</h4>
            <p className="text-sm text-muted-foreground mb-0">Perplexity AI (cita fontes) ou Google Gemini com buscas integradas</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Etapa 4 — Nível Avançado: Automações (Dias 22–30)</h2>
        <p>
          O salto de iniciante para avançado acontece quando você para de usar a IA isoladamente e começa a <strong>conectar ferramentas</strong>. Exemplo real: Otter.ai transcreve reunião → Claude resume e extrai tarefas → Zapier cria cards no Trello → você recebe notificação no WhatsApp. Segundo pesquisa da Harvard Business School (2023), usuários que chegam a esse nível de integração relatam ganho médio de <strong>25–40%</strong> de produtividade em tarefas de escrita, programação e análise.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertCircle className="h-7 w-7 text-destructive" />
          Erros Mais Comuns no Início com IA Generativa
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Confiar cegamente:</strong> IAs ainda alucinam — sempre verifique fatos, especialmente datas, números e referências.</li>
          <li><strong>Prompts vagos:</strong> Lixo entra, lixo sai. Quanto mais específico o prompt, melhor a resposta.</li>
          <li><strong>Abandonar cedo:</strong> A curva é íngreme na primeira semana (tudo parece difícil) e suave depois (tudo parece óbvio).</li>
          <li><strong>Ignorar privacidade:</strong> Não insira dados de clientes, CPF ou informações confidenciais sem verificar a política da plataforma.</li>
          <li><strong>Querer tudo de uma vez:</strong> Foco em uma ferramenta por mês é mais valioso que testar 20 superficialmente.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Estado Atual da IA Generativa: Modelos e Números Reais</h2>
        <p>
          Segundo o <strong>Stanford AI Index 2024</strong>, o custo de treinar um modelo do tamanho do GPT-3 caiu <strong>280 vezes</strong> entre 2022 e 2024 — o que explica por que hoje temos acesso gratuito a modelos que dois anos atrás custariam milhões de dólares para usar. Esse mesmo relatório documentou que o número de modelos de linguagem lançados publicamente cresceu de 3 em 2019 para mais de 150 em 2024, com qualidade crescente.
        </p>
        <p>
          Os principais modelos em 2026 e seus pontos fortes documentados: <strong>Claude Sonnet 4.6</strong> (Anthropic) — melhor para escrita em português e análise de documentos longos (contexto 200k tokens); <strong>GPT-5.4</strong> (OpenAI) — melhor para raciocínio estruturado e geração de imagem via DALL-E; <strong>Gemini 2.5 Pro</strong> (Google) — melhor para documentos muito longos (1M tokens) e integração com Google Workspace; <strong>Llama 4</strong> (Meta, open-source) — melhor para quem precisa rodar localmente sem enviar dados para nuvem; <strong>DeepSeek V4</strong> (China) — melhor custo-benefício via API (US$ 0,14/M tokens de input).
        </p>
        <p>
          Um dado importante do <strong>Microsoft Work Trend Index 2025</strong>: <strong>78% dos profissionais</strong> que usam IA no trabalho trouxeram a ferramenta por conta própria, sem que o RH ou TI da empresa soubesse — fenômeno chamado de "Bring Your Own AI" (BYOAI). Isso cria um risco regulatório real: dados de clientes sendo enviados a plataformas sem DPA assinado. Para uso profissional, sempre verifique a política de privacidade da ferramenta antes de inserir qualquer dado sensível.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Recursos Gratuitos para Começar: Cursos, Comunidades e Canais</h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { rec: "DeepLearning.AI (Coursera)", tipo: "Curso", desc: "\"ChatGPT Prompt Engineering for Developers\" — co-criado pela OpenAI e DeepLearning.AI. Gratuito para auditar. 1h30 de conteúdo prático com código Python." },
            { rec: "Google AI Essentials", tipo: "Curso", desc: "Curso gratuito do Google sobre IA generativa para não-técnicos. Certificado reconhecido. Disponível em português." },
            { rec: "Anthropic Prompt Engineering Guide", tipo: "Documentação", desc: "Guia oficial da Anthropic sobre como escrever prompts eficazes para o Claude. Gratuito, com exemplos práticos em PT-BR." },
            { rec: "Reddit r/ChatGPT e r/ClaudeAI", tipo: "Comunidade", desc: "Comunidades internacionais com casos de uso reais, bugs relatados e prompt sharing. Bom para ver o que outros estão construindo." },
            { rec: "Comunidade IA Descomplicada (Discord BR)", tipo: "Comunidade", desc: "Comunidade brasileira de IA com mais de 50.000 membros. Canais por ferramenta, compartilhamento de prompts e suporte em português." },
          ].map(({ rec, tipo, desc }) => (
            <div key={rec} className="bg-card rounded-xl border border-border p-4">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-bold text-sm">{rec}</h3>
                <span className="text-xs px-2 py-0.5 bg-ia/10 text-ia rounded-full">{tipo}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>


      </div>

      <EditorialTake category="ia" title="Análise do Marcos: 15 minutos por dia de prática vale mais do que qualquer curso de IA">
        <p>
          Os modelos generativos mais relevantes em 2026 são Claude Opus 4 (Anthropic), GPT-4o e o3 (OpenAI), Gemini 2.5 Pro (Google) e Llama 4 (Meta, open source). O segredo não é decorar prompts complicados — é praticar diálogo iterativo. Faça uma pergunta, refine com "agora aplique X", "agora resuma em 3 bullets". Em 30 dias de uso diário de 15 minutos, o ganho de produtividade médio reportado por estudos da Harvard Business School e Microsoft é de <strong>25–40%</strong> em tarefas de escrita, programação e análise.
        </p>
        <p>
          Para o usuário brasileiro iniciante: comece com <strong>ChatGPT gratuito + Perplexity gratuito</strong>. Custo zero, cobre 80% das necessidades. Só assine plano pago quando bater no limite do gratuito consistentemente por 2 semanas. E nunca cole dado de cliente sem verificar a política da plataforma — o risco LGPD é real.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "Stanford HAI — AI Index Report 2024", url: "https://hai.stanford.edu/research/ai-index-2024", publisher: "Stanford HAI", accessedAt: "Maio 2026" },
        { title: "Harvard Business School — Navigating the Jagged Technological Frontier", url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700", publisher: "HBS", accessedAt: "Maio 2026" },
        { title: "OpenAI — Modelos e API (GPT-4o, o3)", url: "https://platform.openai.com/docs/models", publisher: "OpenAI", accessedAt: "Maio 2026" },
        { title: "Anthropic — Claude Models Overview", url: "https://www.anthropic.com/claude", publisher: "Anthropic", accessedAt: "Maio 2026" },
        { title: "Google DeepMind — Gemini 2.5 Pro", url: "https://deepmind.google/technologies/gemini/", publisher: "Google DeepMind", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-generativa-iniciantes-2026-guia" />
      <CommentSection category="ia" postId="ia-generativa-iniciantes-2026-guia" postTitle="IA Generativa para Iniciantes 2026: Do Zero ao Avançado" />
    </article>
  );
};

export default IAGenerativaIniciantes2026;
