import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, ShieldAlert, Eye, Mic, Lock } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/deepfakes-ia-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const DeepfakesIA2026 = () => {
  useEffect(() => {
    trackArticleRead("deepfakes-ia-2026-como-identificar", "Deepfakes e IA 2026: Como Identificar Conteúdo Falso e Proteger sua Imagem", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Deepfakes e IA em 2026: Como Identificar Conteúdo Falso e Proteger Sua Imagem
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />27 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
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
          alt="Deepfakes e IA em 2026 — como identificar conteúdo falso e proteger sua imagem e voz"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma chamada de vídeo do seu banco pedindo confirmação de dados. Um áudio do seu chefe solicitando transferência urgente. Uma foto sua em um lugar onde você nunca esteve. Em 2026, esses cenários são <strong>ameaças reais causadas por deepfakes</strong> — e saber identificá-los pode evitar prejuízos graves.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldAlert className="h-7 w-7 text-destructive" />
          A Escala do Problema com Deepfakes no Brasil e no Mundo
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">550%</p>
            <p className="text-sm text-muted-foreground mb-0">Crescimento de deepfakes de áudio (2023–2024)</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">US$ 200 mi</p>
            <p className="text-sm text-muted-foreground mb-0">Prejuízo só nos EUA com voz clonada em 2024 (FBI)</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">+40%</p>
            <p className="text-sm text-muted-foreground mb-0">Fraudes com áudio sintético contra bancos no Brasil em 2025 (Febraban)</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Eye className="h-7 w-7 text-ia" />
          Como Identificar um Deepfake de Vídeo
        </h2>
        <ul className="space-y-2 my-6">
          <li>Piscadas de olho irregulares ou ausentes</li>
          <li>Bordas do rosto levemente borradas ao mover a cabeça</li>
          <li>Inconsistências na iluminação entre rosto e ambiente</li>
          <li>Dentes e cabelo com texturas artificiais</li>
          <li>Lábios dessincronizados com o áudio</li>
        </ul>
        <p><strong>Dica prática:</strong> Peça para a pessoa fazer algo imprevisível em tempo real — tocar o nariz, mostrar as mãos, virar de lado. Modelos de IA têm dificuldade com movimentos não ensaiados e ângulos laterais.</p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic className="h-7 w-7 text-ia" />
          Como Identificar Voz Clonada por IA
        </h2>
        <ul className="space-y-2 my-6">
          <li>Resposta emocional levemente atrasada</li>
          <li>Tom de voz que não varia naturalmente durante a conversa</li>
          <li>Ruídos de fundo artificialmente consistentes ou completamente ausentes</li>
          <li>Pausas e hesitações pouco naturais nos momentos errados</li>
        </ul>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="mb-0">💡 <strong>Defesa comportamental:</strong> Crie com sua família uma "palavra-código de segurança" que deve ser dita em qualquer pedido urgente de dinheiro ou informação sensível por telefone ou vídeo. A IA já clona vozes com apenas 3 segundos de áudio público.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">Ferramentas para Detectar Deepfakes e Conteúdo Falso</h2>
        <ul className="space-y-2 my-6">
          <li><strong>Intel FakeCatcher:</strong> detecção em tempo real com 96% de precisão em vídeo.</li>
          <li><strong>Microsoft Video Authenticator:</strong> analisa vídeos frame a frame e identifica manipulações.</li>
          <li><strong>Sensity AI:</strong> plataforma corporativa para detecção de deepfakes em escala.</li>
          <li><strong>Hive Moderation:</strong> API para verificar imagens geradas por IA — usada por grandes plataformas.</li>
          <li><strong>Google SynthID:</strong> marca d'água invisível em conteúdo gerado pelo Gemini, detectável digitalmente.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lock className="h-7 w-7 text-ia" />
          Como Proteger Sua Imagem e Voz dos Deepfakes
        </h2>
        <ul className="space-y-2 my-6">
          <li>Reduza a exposição pública de voz em redes sociais abertas — cada áudio publicado alimenta possíveis clonagens.</li>
          <li>Ative autenticação de dois fatores em todas as contas relevantes.</li>
          <li>Eduque familiares mais velhos: são os alvos mais frequentes de golpes com voz clonada.</li>
          <li><strong>Desconfie de urgência:</strong> golpes com deepfake quase sempre criam pressão artificial de tempo para impedir que você verifique.</li>
          <li>Em caso de dúvida, desligue e ligue de volta para o número oficial — nunca para o número que te ligou.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Regulamentação: O que a Lei Diz sobre Deepfakes</h2>
        <p>
          O <strong>EU AI Act</strong> (Reg. UE 2024/1689), em vigor desde agosto de 2024, exige marcação obrigatória de conteúdo gerado por IA a partir de agosto de 2026 para todos que operam no mercado europeu. O <strong>PL 2338/2023</strong> brasileiro — o Marco Legal da IA — segue linha similar, exigindo identificação de deepfakes em campanhas políticas e conteúdo jornalístico. Conteúdo não marcado poderá resultar em multas de até 3% do faturamento no Brasil, ou até €35 milhões na União Europeia.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Já viu ou foi vítima de um deepfake?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: a defesa real contra deepfakes é comportamental, não técnica">
        <p>
          O relatório <em>State of Deepfakes 2024</em> da Sensity AI documentou crescimento de 550% em deepfakes de áudio entre 2023 e 2024. O FBI emitiu alerta público (PSA I-052024-PSA) sobre golpes de clonagem de voz com IA — só nos EUA, o prejuízo passou de US$ 200 milhões em 2024. No Brasil, a Febraban registrou aumento de 40% em tentativas de fraude com áudio sintético contra clientes bancários em 2025.
        </p>
        <p>
          Ferramentas de detecção ajudam em contexto corporativo, mas para o cidadão comum a proteção mais eficaz é <strong>comportamental</strong>: combine palavras-código com familiares, desconfie de urgência artificial e nunca autorize transferências por áudio ou vídeo sem verificar por canal independente. A IA já clona vozes com 3 segundos de áudio — a tecnologia está acessível demais para esperar que a regulamentação resolva antes de você agir.
        </p>
      </EditorialTake>

      <ArticleSources category="ia" sources={[
        { title: "Sensity AI — State of Deepfakes Report 2024", url: "https://sensity.ai/reports/", publisher: "Sensity AI", accessedAt: "Maio 2026" },
        { title: "FBI — Public Service Announcement I-052024-PSA (Voice Cloning Scams)", url: "https://www.ic3.gov/Media/Y2024/PSA240502", publisher: "FBI / IC3", accessedAt: "Maio 2026" },
        { title: "Febraban — Estatísticas de Fraude Digital 2025", url: "https://portal.febraban.org.br/", publisher: "Febraban", accessedAt: "Maio 2026" },
        { title: "EU AI Act — Texto Oficial (Reg. UE 2024/1689)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", publisher: "EUR-Lex", accessedAt: "Maio 2026" },
        { title: "Intel — FakeCatcher Real-Time Deepfake Detection", url: "https://www.intel.com/content/www/us/en/newsroom/news/intel-introduces-real-time-deepfake-detector.html", publisher: "Intel Newsroom", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="deepfakes-ia-2026-como-identificar" />
      <CommentSection postId="deepfakes-ia-2026-como-identificar" postTitle="Deepfakes e IA 2026: Como Identificar Conteúdo Falso e Proteger sua Imagem" />
    </article>
  );
};

export default DeepfakesIA2026;
