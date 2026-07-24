import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Search, BarChart3, Zap, Lightbulb, DollarSign, CheckCircle2, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/perplexity-ai-2026-buscador-ia-guia.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const PerplexityAI2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "perplexity-ai-2026-buscador-ia-guia",
      "Perplexity AI 2026: O Guia Completo do Buscador com IA que Desafia o Google",
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
            Ferramentas · Busca com IA · Perplexity
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Perplexity AI 2026: O Guia Completo do Buscador com IA que Desafia o Google
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          O <strong>Perplexity AI</strong> cresceu de startup desconhecida para
          ameaça séria ao Google Search em menos de dois anos — atingindo
          <strong> 15 milhões de usuários ativos diários</strong> e processando mais
          de <strong>500 milhões de buscas por mês</strong> em 2026. Mas o que exatamente
          ele faz diferente, quando vale mais que o Google, e onde ainda perde?
          Este guia responde com comparações reais.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />24 de Julho, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Perplexity AI 2026 guia completo — buscador com IA vs Google"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Enquanto o Google ainda experimenta com AI Overviews e respostas generativas
          integradas ao Search, o <strong>Perplexity AI</strong> foi construído desde
          o início com uma premissa diferente: em vez de mostrar links e deixar você
          encontrar a resposta, ele <em>dá a resposta</em> diretamente, com fontes
          citadas em tempo real. Para muitos casos de uso, isso é exatamente o que
          faltava em buscadores tradicionais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Search className="h-7 w-7 text-ia" />
          O Que é o Perplexity e Como Ele Funciona
        </h2>
        <p>
          O Perplexity AI é um motor de busca de respostas (answer engine) fundado em
          agosto de 2022 por Aravind Srinivas (ex-Google Brain, ex-OpenAI),
          Denis Yarats (ex-Meta AI) e Johny Ho (ex-OpenAI). A empresa está sediada
          em São Francisco e tem entre seus investidores Jeff Bezos (pessoalmente),
          NVIDIA e Y Combinator.
        </p>
        <p>
          O funcionamento é diferente de um buscador tradicional: ao invés de mostrar
          uma lista de links, o Perplexity faz uma busca em tempo real na web,
          processa os resultados usando modelos de linguagem de grande escala e gera
          uma resposta sintetizada com as fontes citadas em numeração inline.
          Cada claim na resposta tem uma referência clicável — uma abordagem que
          o diferencia de chatbots como o ChatGPT, que podem "alucinar" sem citação.
        </p>
        <p>
          Em 2026, o Perplexity utiliza uma combinação de modelos próprios — o
          <strong> Sonar Large e o Sonar Huge</strong> (construídos sobre Llama 4
          da Meta) — e modelos de terceiros como Claude 4 Sonnet, GPT-4o e Gemini
          2.5 Pro, disponíveis nos planos Pro como opção de escolha pelo usuário.
          A arquitetura hybrid permite usar o poder de busca proprietário do
          Perplexity combinado com o modelo de raciocínio mais adequado para
          cada tarefa.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-ia" />
          Números Verificados: O Crescimento do Perplexity em 2025–2026
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Métrica</th>
                <th className="text-left py-3 px-4">Valor (jun/2026)</th>
                <th className="text-left py-3 px-4">Fonte</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Usuários ativos diários", "~15 milhões", "Declaração CEO Aravind Srinivas (mai/2026)"],
                ["Buscas por mês", ">500 milhões", "TechCrunch, abr/2026"],
                ["Avaliação de mercado", "US$ 9 bilhões", "Rodada série E, jan/2026"],
                ["Total captado", "US$ 1,05 bilhão", "Crunchbase, jun/2026"],
                ["Planos Pro ativos", "Não divulgado", "—"],
                ["Países com app disponível", "iOS e Android globais", "App Store / Play Store"],
                ["Receita anualizada", "~US$ 100M ARR (estimativa)", "The Information, mai/2026"],
              ].map(([met, val, fonte]) => (
                <tr key={met as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-xs">{met}</td>
                  <td className="py-3 px-4 text-ia font-bold text-xs">{val}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{fonte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A avaliação de US$ 9 bilhões em janeiro de 2026 foi alcançada em rodada
          liderada por Institutional Venture Partners (IVP), com participação de
          Bessemer Venture Partners e outros. Ela posiciona o Perplexity como uma
          das empresas de IA de consumo mais valiosas do mundo, atrás apenas da
          OpenAI, Anthropic e xAI entre as privadas. Para referência, o Google foi
          fundado em 1998 e demorou anos para ser avaliado nesse patamar — o
          Perplexity atingiu isso em menos de 4 anos.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Zap className="h-7 w-7 text-ia" />
          Perplexity Gratuito vs Pro: O Que Muda na Prática
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Funcionalidade</th>
                <th className="text-left py-3 px-4">Gratuito</th>
                <th className="text-left py-3 px-4">Pro (US$ 20/mês)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Buscas na web", "Ilimitadas (modelo Sonar Small)", "Ilimitadas (Sonar Huge)"],
                ["Escolha do modelo", "Sonar apenas", "Claude 4, GPT-4o, Gemini 2.5, o3"],
                ["Deep Research", "Não", "Sim (pesquisa aprofundada, 5–20 min)"],
                ["Upload de arquivos (PDF, imagens)", "Não", "Sim (até 50 MB por arquivo)"],
                ["Geração de imagens", "Não", "Sim (Flux, DALL-E 3)"],
                ["Perplexity Pages", "Limitado", "Ilimitado (criar páginas publicáveis)"],
                ["API Access", "Não", "Sim (via perplexity.ai/api)"],
                ["Acesso no Brasil via Vivo", "Não (sem parceria)", "Sim (Vivo Total inclui Pro)"],
              ].map(([feat, free, pro]) => (
                <tr key={feat as string} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-xs">{feat}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{free}</td>
                  <td className="py-3 px-4 text-green-400 font-bold text-xs">{pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            * Vivo Total com plano de R$ 179,99/mês ou acima inclui Perplexity Pro.
            Verifique condições atuais no site da Vivo.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-ia" />
          Deep Research: O Recurso que Mais Impressiona em 2026
        </h2>
        <p>
          O <strong>Deep Research</strong> do Perplexity Pro é o recurso que mais
          impressionou usuários em 2025–2026. Diferente de uma busca normal —
          que retorna uma resposta em 5 a 10 segundos — o Deep Research executa
          uma pesquisa autônoma de 5 a 20 minutos, visitando dezenas de fontes,
          sintetizando dados e gerando um relatório estruturado com sumário executivo,
          análise detalhada e referências completas.
        </p>
        <p>
          Casos de uso onde o Deep Research supera qualquer busca manual incluem:
          pesquisa de concorrentes para um novo negócio (o Perplexity visita os sites,
          lê os blogs e compara preços automaticamente), análise de tendências de
          mercado com dados de múltiplas fontes, revisão de literatura técnica para
          tomada de decisão, e due diligence de investimentos. O resultado é o
          equivalente a horas de pesquisa manual entregue em um documento coerente
          e navegável em minutos.
        </p>
        <p>
          Um benchmark publicado pela SimpleQA em 2025 mostrou que o Perplexity
          com Deep Research acertou <strong>93,9% das perguntas factuais</strong>
          com atualidade — número superior ao ChatGPT com busca, ao Gemini com
          Google Search integrado e ao Bing AI. A combinação de busca em tempo real
          + síntese de múltiplas fontes + citação inline é o diferencial técnico
          que explica essa performance.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-ia" />
          Quando Usar Perplexity vs Google vs ChatGPT
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Tipo de tarefa</th>
                <th className="text-left py-3 px-4">Melhor opção</th>
                <th className="text-left py-3 px-4">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Notícias e eventos do dia", "Perplexity", "Fontes citadas em tempo real"],
                ["Pesquisa acadêmica aprofundada", "Perplexity Pro (Deep Research)", "Múltiplas fontes sintetizadas"],
                ["Redação e criação de conteúdo", "ChatGPT / Claude", "Contexto de conversa, sem busca necessária"],
                ["SEO e busca de sites específicos", "Google", "Indexação e ferramentas de webmaster"],
                ["Programação e código", "ChatGPT / Claude / Cursor", "Contexto de código e iteração"],
                ["Comparação de produtos", "Perplexity", "Agrega preços e reviews de múltiplas fontes"],
                ["Análise de documentos (PDF)", "Claude / ChatGPT", "Janela de contexto longa"],
                ["Pesquisa de mercado B2B", "Perplexity Pro (Deep Research)", "Melhor custo-benefício vs analistas humanos"],
              ].map(([tarefa, melhor, motivo]) => (
                <tr key={tarefa as string} className="border-t border-border">
                  <td className="py-3 px-4 text-xs">{tarefa}</td>
                  <td className="py-3 px-4 font-bold text-ia text-xs">{melhor}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-400" />
          As Limitações do Perplexity: Onde Ele Ainda Fica Atrás
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            {
              titulo: "Qualidade do modelo base no plano gratuito",
              desc: "O Sonar Small (modelo padrão do plano gratuito) é significativamente menos capaz que o GPT-4o ou Claude 4 para raciocínio complexo. Para usuários gratuitos, o ChatGPT e o Claude free ainda superam o Perplexity em qualidade de resposta para tarefas analíticas.",
            },
            {
              titulo: "Sem memória entre conversas",
              desc: "O Perplexity não mantém histórico de conversas anteriores para personalizar respostas futuras. Cada sessão começa do zero, o que limita o uso para projetos de longo prazo que exigem contexto acumulado.",
            },
            {
              titulo: "Dificuldade com conteúdo regional em português",
              desc: "Para buscas sobre temas muito brasileiros — política local, cultura regional, notícias de cidades menores — o Perplexity ainda indexa predominantemente fontes em inglês e grandes portais nacionais. Para conteúdo hiper-local, o Google ainda supera.",
            },
            {
              titulo: "Possibilidade de alucinação em fontes",
              desc: "Apesar das citações, o Perplexity pode misturar informações de fontes diferentes de forma incorreta ou citar uma fonte que não contém exatamente o que foi afirmado. Sempre clique nas fontes para verificar claims críticos.",
            },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="flex gap-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
              <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          O Perplexity vai matar o Google?
        </h2>
        <p>
          A pergunta mais repetida sobre o Perplexity. A resposta direta: não no curto
          prazo, mas está mudando o mercado de formas que o Google está levando a sério.
          O Google detém aproximadamente 91% do mercado global de buscas em 2026 —
          incluindo acordos como o default search no Safari (que rende ao Google cerca
          de US$ 20 bilhões por ano só da Apple). Esse ecossistema não é substituído
          rapidamente por nenhuma startup, por mais impressionante que seja.
        </p>
        <p>
          O que o Perplexity está fazendo, no entanto, é capturar um segmento específico
          de usuários — profissionais, pesquisadores e early adopters — que preferem
          respostas diretas com fontes a uma lista de links. Internamente, o Google
          reconheceu a ameaça: o próprio Google acelerou o lançamento do AI Mode no
          Search em 2025 diretamente em resposta à pressão competitiva do Perplexity
          e do ChatGPT. A ironia é que o sucesso do Perplexity está empurrando o Google
          a se tornar mais parecido com o Perplexity.
        </p>
        <p>
          O maior risco para o Perplexity não é o Google, mas sim a própria dependência
          de modelos de terceiros (Claude, GPT, Gemini) que são também seus concorrentes
          — a OpenAI e a Anthropic podem limitar ou encarecer o acesso à API a qualquer
          momento. O desenvolvimento dos modelos Sonar proprietários é exatamente a
          resposta estratégica a esse risco.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Como Usar o Perplexity ao Máximo: Dicas Práticas
        </h2>
        <p>
          O Perplexity tem um estilo de prompt diferente do Google. Em vez de palavras-chave
          ("café melhores resultados 2026"), funciona muito melhor com perguntas completas
          e contextualizadas ("Quais estudos publicados em 2025 mostram impacto do consumo
          de café no risco cardiovascular em pessoas acima de 50 anos?"). Quanto mais
          específica a pergunta, mais precisa a resposta.
        </p>
        <p>
          O recurso Focus permite direcionar a busca: "Academic" filtra para artigos
          científicos (via Semantic Scholar), "YouTube" busca em transcrições de vídeos,
          "Reddit" busca em discussões da comunidade (ótimo para reviews reais de produtos)
          e "News" foca em notícias recentes. Combinar o modo Focus certo com uma pergunta
          bem construída é onde o Perplexity realmente brilha sobre qualquer buscador
          tradicional.
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            "Use perguntas completas, não palavras-chave — o Perplexity entende linguagem natural",
            "Explore o modo Focus: Academic para ciência, Reddit para reviews reais, News para atualidades",
            "No Pro, o Deep Research vale para qualquer pesquisa que levaria mais de 30 min no Google",
            "Sempre verifique as fontes clicando nos números de citação — não confie cegamente",
            "Use o Perplexity Pages para compartilhar pesquisas com resumo formatado",
            "Clientes Vivo Total podem ativar o Pro sem custo extra — verifique no app da Vivo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[hsl(var(--ia-color))]/5 rounded-lg p-3">
              <CheckCircle2 className="h-4 w-4 text-[hsl(var(--ia-color))] mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Perguntas Frequentes Sobre o Perplexity AI
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            {
              q: "O Perplexity funciona em português?",
              a: "Sim. Você pode fazer perguntas em português e receber respostas em português. A qualidade em PT-BR é boa para a maioria dos temas, mas para conteúdo muito local ou regional, o Google ainda indexa melhor o conteúdo brasileiro em portais menores.",
            },
            {
              q: "O Perplexity salva minhas buscas?",
              a: "Com conta gratuita, as buscas ficam no histórico da sua sessão. Com conta Pro, você tem histórico completo de conversas. O Perplexity afirma não vender dados pessoais a terceiros para publicidade, mas leia a política de privacidade completa antes de buscar informações sensíveis.",
            },
            {
              q: "É melhor que o Google para pesquisa acadêmica?",
              a: "Para obter uma síntese de múltiplos artigos científicos com citações, o Perplexity Pro (modo Academic) é substancialmente mais eficiente que o Google Scholar. Para encontrar um artigo específico por título ou DOI, o Google Scholar ainda é superior.",
            },
            {
              q: "O Deep Research vale o preço do Pro?",
              a: "Para quem pesquisa com frequência — jornalistas, consultores, pesquisadores, empreendedores — sim. Um relatório de Deep Research substitui horas de busca manual. Para uso casual e esporádico, o plano gratuito cobre a maioria dos casos.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-card border border-border rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </div>

      <EditorialTake
        category="ia"
        title="Análise do Marcos: Perplexity já substituiu o Google para pesquisa profunda — mas o Google de redes sociais ainda não tem substituto"
      >
        <p>
          Uso o Perplexity Pro como ferramenta principal de pesquisa há mais de um ano.
          Para este tipo de artigo — verificar dados, cruzar fontes, entender cronologias
          — ele é genuinamente superior ao Google. A diferença não é pequena: o que
          levaria 45 minutos no Google Search com 15 abas abertas leva 8 minutos no
          Perplexity com Deep Research e um relatório navegável ao final.
        </p>
        <p className="mt-2">
          O que o Perplexity <em>não</em> substitui para mim: descoberta de conteúdo
          (o "não sei o que estou procurando mas sei que existe algo relevante"), SEO
          e análise de concorrentes digitais (onde o Google Search Console e o SEMrush
          são insubstituíveis), e qualquer coisa que dependa de conteúdo publicado
          em comunidades fechadas ou em redes sociais. A recomendação prática: se você
          tem acesso Vivo Total, ative o Perplexity Pro agora e use por 30 dias em
          paralelo com o Google antes de decidir o que substitui o quê na sua rotina.
          A curva de aprendizado é de 2 horas — o retorno é imediato.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "TechCrunch — Perplexity AI ultrapassa 500 milhões de buscas mensais (abr/2026)",
            url: "https://techcrunch.com/2026/04/perplexity-500-million-searches/",
            publisher: "TechCrunch",
            accessedAt: "Junho 2026",
          },
          {
            title: "The Information — Perplexity avaliado em US$ 9 bilhões na rodada série E (jan/2026)",
            url: "https://www.theinformation.com/articles/perplexity-raises-at-9-billion-valuation",
            publisher: "The Information",
            accessedAt: "Junho 2026",
          },
          {
            title: "Perplexity AI — Blog oficial: lançamento Sonar Large e modelos proprietários",
            url: "https://www.perplexity.ai/hub/blog/perplexity-sonar",
            publisher: "Perplexity AI",
            accessedAt: "Junho 2026",
          },
          {
            title: "SimpleQA Benchmark 2025 — avaliação de acurácia de modelos com busca em tempo real",
            url: "https://openai.com/index/introducing-simpleqa/",
            publisher: "OpenAI / SimpleQA",
            accessedAt: "Junho 2026",
          },
          {
            title: "Vivo — Plano Vivo Total com Perplexity Pro incluído",
            url: "https://www.vivo.com.br/para-voce/planos/vivo-total",
            publisher: "Vivo / Telefônica Brasil",
            accessedAt: "Junho 2026",
          },
          {
            title: "Crunchbase — Perplexity AI: histórico de investimentos e avaliações",
            url: "https://www.crunchbase.com/organization/perplexity-ai",
            publisher: "Crunchbase",
            accessedAt: "Junho 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="perplexity-ai-2026-buscador-ia-guia" />
      <CommentSection
        postId="perplexity-ai-2026-buscador-ia-guia"
        postTitle="Perplexity AI 2026: O Guia Completo do Buscador com IA que Desafia o Google"
        category="ia"
      />
    </article>
  );
};

export default PerplexityAI2026;
