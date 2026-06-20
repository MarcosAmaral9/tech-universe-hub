import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Scale, Globe, Building, Users, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/regulamentacao-ia-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const RegulamentacaoIA2026 = () => {
  useEffect(() => {
    trackArticleRead("regulamentacao-ia-brasil-mundo-2026", "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda Para Você e Sua Empresa
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async"
          src={heroImg}
          alt="Regulamentação de IA no Brasil e no mundo em 2026 — EU AI Act, PL 2338, ANPD e o que muda para empresas brasileiras"
          className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>EU AI Act europeu</strong> já tem obrigações ativas desde fevereiro de 2025. O Brasil avança com o PL 2338/2023, aprovado pelo Senado em dezembro de 2024 e ainda na Câmara. Os EUA regrediram na regulação após a revogação do Executive Order de IA por Trump em janeiro de 2025. O que isso muda na prática — para você, para as empresas e para o desenvolvimento da tecnologia?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-ia" />
          EU AI Act: A Primeira Lei Vinculativa de IA do Mundo — Prazos e Obrigações
        </h2>
        <p>
          O <strong>Regulamento (UE) 2024/1689</strong>, mais conhecido como EU AI Act, foi publicado no Jornal Oficial da União Europeia em 12 de julho de 2024 e é a primeira legislação vinculativa sobre IA no mundo. Seu cronograma de aplicação é escalonado em fases:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { data: "Ago/2024", cor: "border-muted", status: "✅ Vigente", desc: "Regulamento em vigor. Período de adaptação começa." },
            { data: "Fev/2025", cor: "border-destructive/30", status: "✅ Ativo", desc: "Proibições absolutas (Art. 5) e obrigação de literacia em IA para colaboradores (Art. 4) entram em vigor." },
            { data: "Ago/2025", cor: "border-yellow-500/30", status: "✅ Ativo", desc: "Obrigações para modelos de IA de propósito geral (GPAI), como ChatGPT e Copilot. Autoridades nacionais designadas." },
            { data: "Ago/2026", cor: "border-ia/30", status: "⚠️ Próximo", desc: "Obrigações completas para sistemas de alto risco (Anexo III): documentação técnica, conformity assessment, registro na base de dados europeia." },
            { data: "Ago/2027", cor: "border-muted", status: "🔜 Futuro", desc: "Sistemas de alto risco do Anexo I (componentes de segurança em produtos regulados)." },
            { data: "2030", cor: "border-muted", status: "🔜 Futuro", desc: "Prazo final para adaptação de sistemas legados do setor público." },
          ].map(({ data, cor, status, desc }) => (
            <div key={data} className={`flex gap-4 bg-card rounded-xl border ${cor} p-4`}>
              <div className="shrink-0 text-center min-w-[70px]">
                <p className="font-bold text-sm">{data}</p>
                <p className="text-xs text-muted-foreground">{status}</p>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          As 4 Categorias de Risco do EU AI Act — O Que Cada Uma Exige
        </h2>
        <p>
          O AI Act classifica todos os sistemas de IA em quatro categorias, com obrigações proporcionais ao risco. Saber onde seu produto ou serviço se enquadra é o primeiro passo obrigatório de compliance.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            {
              cat: "🚫 Risco Inaceitável — Proibido (Art. 5)",
              cor: "border-destructive/40 bg-destructive/5",
              desc: "Sistemas banidos independentemente de qualquer justificativa de negócio.",
              exemplos: "Manipulação subliminar do comportamento humano; exploração de vulnerabilidades (crianças, idosos, pessoas com deficiência); pontuação social governamental; identificação biométrica em tempo real em espaços públicos (salvo exceções judiciais); inferência de emoções no trabalho e na escola; policiamento preditivo baseado em perfil; scraping não direcionado de dados biométricos.",
              multa: "Até €35M ou 7% do faturamento global anual.",
            },
            {
              cat: "⚠️ Alto Risco — Obrigações Extensas (Art. 6, Anexo III)",
              cor: "border-yellow-500/40 bg-yellow-500/5",
              desc: "Permitido, mas com exigências rígidas de documentação, auditoria e supervisão humana.",
              exemplos: "Triagem de currículos e decisões de RH; scoring de crédito; infraestrutura crítica; sistemas educacionais e de avaliação; saúde (dispositivos médicos com IA); aplicação da lei; controle de fronteiras; administração da justiça.",
              multa: "Até €15M ou 3% do faturamento por violações de conformidade.",
            },
            {
              cat: "ℹ️ Risco Limitado — Transparência Obrigatória (Art. 50)",
              cor: "border-ia/40 bg-ia/5",
              desc: "Permitido com obrigações mínimas de transparência.",
              exemplos: "Chatbots e assistentes virtuais (usuário deve ser informado que está falando com IA); conteúdo gerado por IA (deepfakes, textos, imagens sintéticas) — obrigatório rotular ou revelar a origem artificial.",
              multa: "Até €7,5M ou 1,5% por falha de transparência.",
            },
            {
              cat: "✅ Risco Mínimo — Sem Obrigações Específicas",
              cor: "border-invest/40 bg-invest/5",
              desc: "A maioria dos sistemas de IA — spam filters, videogames com IA, recomendações de conteúdo — não tem obrigações específicas além das leis gerais.",
              exemplos: "Filtros de spam, recomendações de conteúdo em plataformas, chatbots de entretenimento, sistemas de IA em jogos, tradução automática sem impacto em decisões.",
              multa: "Sem multas específicas do AI Act.",
            },
          ].map(({ cat, cor, desc, exemplos, multa }) => (
            <div key={cat} className={`bg-card rounded-xl border ${cor} p-5`}>
              <h3 className="font-bold text-sm mb-1">{cat}</h3>
              <p className="text-sm text-muted-foreground mb-2">{desc}</p>
              <p className="text-xs text-muted-foreground mb-1"><strong>Exemplos:</strong> {exemplos}</p>
              <p className="text-xs font-medium text-destructive">💰 {multa}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scale className="h-7 w-7 text-ia" />
          PL 2338/2023: O Marco Regulatório de IA Brasileiro — Estado Atual
        </h2>
        <p>
          O <strong>PL 2338/2023</strong>, proposto pelo senador Rodrigo Pacheco, foi aprovado pelo Senado Federal em <strong>10 de dezembro de 2024</strong> e remetido à Câmara dos Deputados em março de 2025. Em 2026, o projeto <strong>ainda tramita na Câmara</strong>, aguardando parecer do relator, deputado Aguinaldo Ribeiro (PP-PB), na Comissão Especial criada especificamente para analisar o texto. A votação foi adiada de 2025 para 2026 por impasses políticos e técnicos, incluindo a necessidade de apensamento de projeto do Executivo para corrigir vício de inconstitucionalidade.
        </p>
        <p>
          O projeto adota classificação de risco inspirada no EU AI Act, com sistemas de <strong>alto risco</strong> sujeitos a obrigações rigorosas: avaliação de impacto algorítmico (AIIA) antes da implantação, transparência obrigatória ao usuário afetado, revisão humana garantida em decisões com efeito negativo, e registros auditáveis por 5 anos. A <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados) seria a principal autoridade supervisora, com capacidade de aplicar multas de até 3% do faturamento anual da empresa infratora.
        </p>
        <p>
          Sistemas classificados como alto risco no texto aprovado pelo Senado incluem: ferramentas de <strong>triagem e avaliação em RH</strong>, sistemas de <strong>scoring de crédito</strong>, IA em saúde com influência em diagnóstico ou tratamento, sistemas de <strong>vigilância e segurança pública</strong>, e IA em educação que afete acesso a oportunidades. Enquanto o PL não é aprovado na Câmara, o <strong>Art. 20 da LGPD</strong> já garante ao cidadão brasileiro o direito de solicitar revisão humana de qualquer decisão automatizada que afete seus interesses.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building className="h-7 w-7 text-ia" />
          O Que Empresas Brasileiras Precisam Fazer Agora
        </h2>
        <p>
          Mesmo sem o PL 2338 aprovado, empresas brasileiras já têm obrigações legais e de risco. O EU AI Act afeta qualquer empresa que coloque sistemas de IA no mercado europeu ou que os use para processar dados de cidadãos da UE — o critério é territorial, não a sede da empresa. E a LGPD (Art. 20) já é lei e aplicada pela ANPD.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { passo: "1", titulo: "Inventário de IA", desc: "Mapeie todos os sistemas de IA em uso na empresa — incluindo SaaS de terceiros com componentes de IA. A maioria das empresas descobre que usa muito mais IA do que sabia." },
            { passo: "2", titulo: "Classificação de risco", desc: "Para cada sistema identificado, determine se é alto risco (afeta pessoas em decisões de emprego, crédito, saúde, segurança). Use o Anexo III do EU AI Act como referência — é mais detalhado que o PL 2338." },
            { passo: "3", titulo: "Mecanismo de revisão humana", desc: "Para sistemas de alto risco, implante processo documentado de revisão humana. Isso já é obrigação LGPD (Art. 20) para dados pessoais. Sem esse processo, a empresa está em descumprimento hoje." },
            { passo: "4", titulo: "Transparência com o usuário", desc: "Qualquer interação com IA que afete o usuário deve ser identificada como tal. Chatbots, triagem de currículo, scoring de crédito — o usuário tem direito de saber." },
            { passo: "5", titulo: "Nomeie um responsável", desc: "Designe um responsável de compliance de IA — pode ser o próprio DPO da LGPD ou alguém específico. A função é acompanhar regulação, atualizar a empresa e ser o ponto de contato com autoridades." },
          ].map(({ passo, titulo, desc }) => (
            <div key={passo} className="flex gap-3 bg-card rounded-xl border border-border p-4">
              <span className="w-7 h-7 rounded-full bg-ia/20 text-ia font-bold flex items-center justify-center shrink-0 text-xs">{passo}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-ia" />
          O Que Muda Para o Consumidor Brasileiro
        </h2>
        <p>
          Mesmo sem o PL 2338 aprovado, o cidadão brasileiro já tem direitos concretos em relação ao uso de IA pelas empresas, principalmente quando dados pessoais estão envolvidos.
        </p>
        <div className="not-prose my-6 p-5 bg-secondary/50 rounded-xl border border-border">
          <ul className="space-y-3">
            {[
              "Direito de saber quando uma IA influenciou uma decisão que te afetou — como aprovação de crédito, triagem em processo seletivo ou avaliação de seguro (LGPD, Art. 20).",
              "Direito de solicitar revisão humana de qualquer decisão automatizada com efeito negativo sobre você. A empresa tem obrigação de fornecer essa revisão.",
              "Quando o PL 2338 for aprovado: proibição de sistemas que manipulem comportamento de forma subliminar, inferência de emoções sem consentimento, e deepfakes sem identificação.",
              "Direito à explicação dos critérios e lógica usados em decisões automatizadas que afetem seus interesses.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-invest shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          O Cenário nos EUA: Menos Regulação, Mais Risco
        </h2>
        <p>
          Em contraste com a Europa e o Brasil, os EUA regrediram na regulação de IA. Em janeiro de 2025, o presidente Trump revogou o Executive Order 14110 de outubro de 2023 — o principal instrumento de governança federal de IA da gestão Biden — por considerar que prejudicava a competitividade americana. O novo enfoque é de <strong>desregulação pró-inovação</strong>: guias voluntários, auto-regulação setorial e foco em competição com a China.
        </p>
        <p>
          Para empresas brasileiras que operam nos EUA, isso significa que não há lei federal de IA para seguir — mas há leis estaduais (Colorado, Illinois, Texas já têm legislações específicas sobre IA em decisões de emprego e crédito). A divergência regulatória entre os três blocos — UE (obrigações rígidas), Brasil (em construção) e EUA (auto-regulação) — cria o maior desafio de compliance para multinacionais que operam nos três mercados simultaneamente.
        </p>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o desafio de 2026 não é a regulação — é mapear quais sistemas já usam IA">
        <p>
          O EU AI Act já tem obrigações ativas. O PL 2338/2023 ainda tramita na Câmara, mas o Art. 20 da LGPD já garante revisão humana. A divergência entre blocos (UE rígida, Brasil em construção, EUA desregulado) é o maior desafio para multinacionais. Para a empresa brasileira média, o caminho prático começa pelo inventário: identifique cada ferramenta SaaS com IA que processa dados de clientes ou funcionários, classifique por risco, e implante mecanismo de revisão humana nos sistemas de alto risco. Quem fizer isso proativamente estará pronto tanto para o PL 2338 quanto para o EU AI Act — e terá diferencial competitivo quando a fiscalização começar.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "EUR-Lex — Regulamento (UE) 2024/1689 (EU AI Act)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", publisher: "EUR-Lex", accessedAt: "Maio 2026" },
        { title: "Senado Federal — PL 2338/2023 (Marco Legal da IA)", url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233", publisher: "Senado Federal", accessedAt: "Maio 2026" },
        { title: "Barbieri Advogados — Regulamentação da IA no Brasil: Estado Atual", url: "https://www.barbieriadvogados.com/regulamentacao-inteligencia-artificial-brasil/", publisher: "Barbieri Advogados", accessedAt: "Maio 2026" },
        { title: "ANPD — Autoridade Nacional de Proteção de Dados", url: "https://www.gov.br/anpd/pt-br", publisher: "ANPD", accessedAt: "Maio 2026" },
        { title: "Planalto — LGPD Art. 20 (Lei 13.709/2018)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Planalto", accessedAt: "Maio 2026" },
        { title: "Mind Group — EU AI Act e PL 2338: O Que Muda na Sua Operação em 2026", url: "https://mindconsulting.com.br/2026/04/eu-ai-act-pl-2338-regulacao-ia-empresas-brasileiras-2026/", publisher: "Mind Group", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="regulamentacao-ia-brasil-mundo-2026" />
      <CommentSection category="ia" postId="regulamentacao-ia-brasil-mundo-2026" postTitle="Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda" />
    </article>
  );
};

export default RegulamentacaoIA2026;
