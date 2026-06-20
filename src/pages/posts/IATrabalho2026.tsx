/*
 * PAGE_META — adicionar em DynamicSEO.tsx dentro do objeto PAGE_META:
 *
 * "/post/ia-no-trabalho-2026-profissoes": {
 *   title: "IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?",
 *   description: "Como a IA está impactando profissões em 2026: quais cargos estão em risco, quais evoluem, dados do WEF Future of Jobs 2025, Gupy e o que o PL 2338/2023 muda para empresas brasileiras.",
 *   keywords: "IA no trabalho 2026, profissões em risco IA, Future of Jobs WEF 2025, impacto IA empregos Brasil, PL 2338 IA trabalho, automação empregos, reskilling IA, profissões do futuro IA, Gupy relatório IA, LGPD triagem currículo, marco legal IA Brasil",
 * },
 */

import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, AlertTriangle, TrendingUp, Shield, Users, BookOpen, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-trabalho-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const IATrabalho2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-no-trabalho-2026-profissoes", "IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Inteligência Artificial no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async"
          src={heroImg}
          alt="IA no trabalho em 2026 — quais profissões estão em risco, quais crescem e como proteger sua carreira"
          className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Algumas profissões realmente encolheram. Outras explodiram em demanda. E a maioria está no meio — transformando-se rapidamente. Neste artigo, analisamos <strong>dados reais do WEF, Gupy e OIT</strong> para dizer claramente: risco alto, médio ou oportunidade — e o que fazer em cada caso.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-ia" />
          O Que o Future of Jobs 2025 Diz: Os Números Reais
        </h2>
        <p>
          O <strong>Future of Jobs Report 2025</strong>, publicado em janeiro de 2025 pelo Fórum Econômico Mundial, é o estudo mais abrangente disponível sobre o tema: ouviu mais de <strong>1.000 empregadores</strong> que juntos representam <strong>14,1 milhões de trabalhadores</strong> em 22 clusters industriais de 55 economias. Os dados são de pesquisa direta com decisores de RH e estratégia — não projeções teóricas.
        </p>
        <p>
          A conclusão central: até 2030, serão criados <strong>170 milhões de novos empregos</strong> puxados por tecnologia, transição energética e cuidados humanos. Ao mesmo tempo, <strong>92 milhões de postos serão deslocados</strong> — principalmente em funções repetitivas de escritório e processos manuais padronizados. O saldo líquido é positivo em <strong>78 milhões de empregos</strong>, mas a distribuição não é uniforme: quem não se requalificar está nos 92 milhões negativos, não nos 170 milhões positivos.
        </p>
        <p>
          Outro dado fundamental do relatório: <strong>22% das ocupações atuais passarão por mudanças substanciais nos próximos cinco anos</strong>, e <strong>86% das empresas globais</strong> planejam adotar IA e automação nas suas operações até 2030. No Brasil, a Gupy publicou em 2025 um Relatório de Empregabilidade que revelou um aumento de <strong>306% na busca por profissionais com conhecimento em IA</strong> por parte das empresas. Os cargos onde essa habilidade é mais exigida são técnico de automação, desenvolvedor e operador de sistemas de IA.
        </p>
        <p>
          Vale calibrar a leitura: a Organização Internacional do Trabalho (OIT) estimou que apenas <strong>2% a 5% dos empregos correm risco de substituição total</strong> pela IA no curto prazo. O que está sendo automatizado são <strong>tarefas dentro de profissões</strong>, não profissões inteiras — o que significa que a adaptação é mais acessível do que os títulos de manchete sugerem.
        </p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "170M", label: "novos empregos criados até 2030", cor: "text-invest" },
            { num: "92M", label: "postos deslocados pela automação", cor: "text-destructive" },
            { num: "22%", label: "das ocupações com mudança substancial", cor: "text-ia" },
            { num: "306%", label: "mais empresas buscando profissionais com IA (Gupy)", cor: "text-ia" },
          ].map(({ num, label, cor }) => (
            <div key={num} className="bg-card rounded-xl border border-border p-4 text-center">
              <p className={`text-2xl font-bold ${cor} mb-1`}>{num}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          Profissões com Maior Risco de Automação no Brasil
        </h2>
        <p>
          O WEF lista as funções com maior probabilidade de declínio até 2030. No contexto brasileiro, o IPEA publicou em 2024 análise que mapeia essas categorias na CLT e no CAGED. As funções com maior exposição são aquelas que combinam três características: alto volume de tarefas repetitivas, baixa variabilidade de contexto e necessidade limitada de julgamento situacional.
        </p>
        <ul className="space-y-2 my-6">
          <li><strong>Operadores de entrada de dados:</strong> Automatizados por OCR, modelos de extração e integrações de API. O WEF coloca essa categoria no topo da lista de declínio até 2030.</li>
          <li><strong>Atendentes de telemarketing (nível 1):</strong> Chatbots com LLM resolvem entre 60% e 70% das demandas de SAC padrão sem intervenção humana. O remanescente — reclamações complexas, casos de exceção — ainda requer humano.</li>
          <li><strong>Caixas bancários e de varejo:</strong> Os terminais de autoatendimento avançaram, mas a eliminação total ainda é contida por questões de acessibilidade e regulação do Banco Central para populações sem acesso digital.</li>
          <li><strong>Tradutores de textos padronizados:</strong> Ferramentas como DeepL Pro e os modelos Claude e GPT-4o entregam tradução de qualidade profissional para textos técnicos e jurídicos padrão. Tradução literária, técnica especializada e localização cultural ainda requerem humano.</li>
          <li><strong>Revisores de contratos simples e repetitivos:</strong> Plataformas de LegalTech com IA conseguem identificar cláusulas de risco e ausências de proteção padrão em contratos de formato conhecido. Contratos complexos e negociações ainda demandam advogado.</li>
          <li><strong>Assistentes administrativos com função de agenda e triagem:</strong> Agentes de IA como o Google Agentspace e o Claude Cowork automatizam boa parte do que era feito por assistentes administrativos em grandes empresas.</li>
        </ul>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-ia" />
          Profissões que Estão Crescendo por Causa da IA
        </h2>
        <p>
          O mesmo relatório do WEF lista as funções de crescimento mais acelerado. O padrão é claro: crescem os cargos que <strong>operam com IA</strong>, que cuidam de pessoas, e que resolvem problemas onde o contexto local e o julgamento humano são insubstituíveis.
        </p>
        <ul className="space-y-2 my-6">
          <li><strong>Especialistas em IA e Machine Learning:</strong> Primeiro lugar no ranking de crescimento do WEF. No Brasil, a Gupy reporta que esse é o perfil com maior gap entre oferta e demanda no mercado formal.</li>
          <li><strong>Engenheiros de dados e analistas:</strong> O volume de dados gerados por sistemas de IA aumentou exponencialmente a demanda por profissionais que sabem estruturar, limpar e interpretar dados.</li>
          <li><strong>Especialistas em segurança da informação e cibersegurança:</strong> A IA criou novos vetores de ataque (phishing com LLM, vishing com voz clonada, malware gerado por IA) que aumentaram a demanda por defesa especializada.</li>
          <li><strong>Psicólogos e terapeutas:</strong> A demanda cresceu 34% no período 2023-2025 segundo dados do CFP (Conselho Federal de Psicologia). A empatia, o vínculo terapêutico e a capacidade de leitura emocional em contexto são irreplicáveis por IA hoje.</li>
          <li><strong>Professores e educadores:</strong> Especialmente os que ensinam tecnologia e os que trabalham com ensino personalizado — a IA é ferramenta, não substituta do educador.</li>
          <li><strong>Técnicos de manutenção de equipamentos físicos:</strong> Robótica e automação industrial criam mais demanda por técnicos especializados em manutenção preventiva e corretiva de sistemas físicos.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          A Regra dos 3 E's: Como Proteger Sua Carreira
        </h2>
        <p>
          O framework dos 3 E's surgiu da análise cruzada do Future of Jobs com dados de requalificação da McKinsey: os profissionais que melhor navegaram a última onda de automação fizeram exatamente isso — especializaram, experimentaram e evoluíram continuamente.
        </p>
        <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🎯 Especialização</h4>
            <p className="text-sm text-muted-foreground mb-0">Aprofunde em um domínio onde o conhecimento humano contextual ainda supera a IA — jurisprudência local, medicina clínica, gestão de pessoas, negociação complexa.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🧪 Experimentação</h4>
            <p className="text-sm text-muted-foreground mb-0">Use IA no seu trabalho atual para aumentar produtividade. Quem aumenta output com IA se torna mais valioso — quem ignora a IA se torna mais substituível.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">📈 Evolução</h4>
            <p className="text-sm text-muted-foreground mb-0">Adicione habilidades adjacentes à IA. Cursos curtos gratuitos do DeepLearning.AI (Coursera) e da Google cobrem fundamentos em 6-8 semanas.</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          O Que o PL 2338/2023 Muda para Empresas que Usam IA em RH
        </h2>
        <p>
          O PL 2338/2023 — chamado de Marco Legal da IA — foi aprovado pelo <strong>Senado Federal em 10 de dezembro de 2024</strong> e remetido à Câmara dos Deputados em março de 2025. Em maio de 2026, o projeto <strong>ainda tramita na Câmara</strong>, aguardando parecer do relator, deputado Aguinaldo Ribeiro (PP-PB), na Comissão Especial. Ainda não é lei, mas suas diretrizes já orientam boas práticas de compliance de IA.
        </p>
        <p>
          A proposta adota classificação de risco inspirada no EU AI Act. Para o mercado de trabalho, os sistemas de IA considerados de <strong>alto risco</strong> incluem ferramentas usadas para <strong>triagem de currículos, avaliação de desempenho, decisões de promoção e monitoramento de funcionários</strong>. Esses sistemas, quando aprovado o PL, precisarão de:
        </p>
        <ul className="space-y-2 my-6">
          <li><strong>Transparência ativa:</strong> o trabalhador deve ser informado de que uma IA está sendo usada em processos que afetam sua carreira.</li>
          <li><strong>Revisão humana garantida:</strong> toda decisão automatizada que cause efeito negativo ao trabalhador (reprovação em seleção, avaliação negativa) deve poder ser contestada e revisada por pessoa humana.</li>
          <li><strong>Registro de decisões:</strong> as empresas devem manter logs auditáveis das decisões automatizadas de RH pelo prazo mínimo de 5 anos.</li>
          <li><strong>Avaliação de impacto algorítmico:</strong> empresas que usem sistemas de IA de alto risco precisarão conduzir e documentar uma avaliação de impacto antes da implantação.</li>
        </ul>
        <p>
          Enquanto o PL não é aprovado, o <strong>artigo 20 da LGPD</strong> (Lei 13.709/2018) já garante ao titular de dados pessoais o <strong>direito de solicitar revisão humana de decisões automatizadas</strong> que afetem seus interesses — o que inclui processos seletivos feitos por ATS com IA. Empresas que usam IA em RH sem transparência ou sem mecanismo de revisão já estão em risco regulatório hoje.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-ia" />
          O Futuro Não é IA vs. Humanos — É IA + Humanos
        </h2>
        <p>
          As empresas mais bem-sucedidas não escolheram entre equipes humanas ou IA — elas criaram <strong>processos híbridos</strong> onde cada lado faz o que faz melhor. Humanos trazem julgamento ético, empatia, criatividade disruptiva e responsabilidade legal. A IA traz velocidade, escala, consistência e capacidade de processar volumes impossíveis para humanos.
        </p>
        <p>
          O dado mais importante do relatório da McKinsey "The state of AI in 2024" é que profissionais que usam IA generativa em suas tarefas principais reportam ganho médio de <strong>25% a 40% de produtividade</strong> — e esses profissionais não são substituídos, são promovidos. O profissional que domina IA se torna o multiplicador de valor da equipe, não o dispensado por ela.
        </p>
        <p>
          Para o trabalhador brasileiro em 2026, o caminho prático é claro: comece pelos recursos gratuitos (ChatGPT gratuito, Claude gratuito, Gemini gratuito), aplique no seu trabalho atual por 30 dias, documente os ganhos de tempo, e use isso como argumento de remuneração ou promoção. A IA não vai tirar o seu emprego — mas um profissional que sabe usar IA pode vir a ocupar o espaço de quem não sabe.
        </p>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o profissional que ganha em 2026 delega o repetitivo à IA e investe em julgamento">
        <p>
          Os relatórios mais recentes — Future of Jobs 2025 do WEF, AI Index 2024 do Stanford HAI e o estudo da McKinsey "The state of AI in 2024" — convergem: a IA generativa automatiza <strong>tarefas</strong>, não profissões inteiras. Funções com alta carga de redação, sumarização e atendimento (jurídico júnior, marketing operacional, SAC nível 1) são as mais expostas; trabalho técnico-manual e funções de relacionamento seguem com baixa exposição.
        </p>
        <p>
          No Brasil, o PL 2338/2023 ainda tramita na Câmara dos Deputados (aprovado pelo Senado em dezembro de 2024), mas já orienta boas práticas: empresas que usam IA para triagem de currículo ou avaliação de funcionário devem informar o trabalhador e garantir revisão humana — isso já é exigência do art. 20 da LGPD. Cursos curtos de prompt engineering (Coursera/DeepLearning.AI, gratuitos com auditoria) e ferramentas como Notion AI ou Claude no fluxo diário entregam ROI em semanas.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "WEF — Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/", publisher: "World Economic Forum", accessedAt: "Maio 2026" },
        { title: "Gupy — Relatório de Empregabilidade 2025", url: "https://www.gupy.io/blog/ia-mercado-trabalho", publisher: "Gupy", accessedAt: "Maio 2026" },
        { title: "McKinsey — The state of AI 2024", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai", publisher: "McKinsey & Company", accessedAt: "Maio 2026" },
        { title: "Senado Federal — PL 2338/2023 (Marco Legal da IA)", url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233", publisher: "Senado Federal", accessedAt: "Maio 2026" },
        { title: "Planalto — LGPD Art. 20 (Lei 13.709/2018)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Planalto", accessedAt: "Maio 2026" },
        { title: "OIT — Artificial Intelligence and the Future of Work", url: "https://www.ilo.org/publications/artificial-intelligence-and-jobs", publisher: "Organização Internacional do Trabalho", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-no-trabalho-2026-profissoes" />
      <CommentSection category="ia" postId="ia-no-trabalho-2026-profissoes" postTitle="IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?" />
    </article>
  );
};

export default IATrabalho2026;
