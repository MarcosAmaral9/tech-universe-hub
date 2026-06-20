import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Palette, Music, Video, Sparkles, AlertTriangle, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-criatividade-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const IACriatividade2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-criatividade-arte-musica-2026", "IA e Criatividade 2026: Como a IA Está Revolucionando Arte e Música", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA e Criatividade em 2026: Como a Inteligência Artificial Está Revolucionando Arte, Música e Vídeo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />14 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager" decoding="async"
          src={heroImg}
          alt="IA e criatividade em 2026 — arte, música e vídeo gerados por inteligência artificial e o debate sobre direitos autorais"
          className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 2026, a fronteira entre criação humana e artificial nunca foi tão tênue — e tão contestada. Ferramentas de IA generativa estão redefinindo o que significa ser artista, músico ou cineasta. Mas o setor também enfrenta sua maior crise jurídica: batalhas de direitos autorais, o encerramento do Sora e acordos que vão moldar o mercado criativo por décadas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Palette className="h-7 w-7 text-ia" />
          IA na Arte Visual: Midjourney, Adobe Firefly e Stable Diffusion em 2026
        </h2>
        <p>
          As ferramentas de geração de imagem evoluíram de forma impressionante. Em 2026, o <strong>Midjourney V7</strong> produz imagens fotorealistas com controle de câmera, iluminação e estilo que concorrem com fotografia profissional. O <strong>Adobe Firefly 3</strong>, integrado ao Photoshop e Illustrator, é treinado exclusivamente em imagens licenciadas do Adobe Stock e obras em domínio público — o que o torna a escolha mais segura para uso comercial, reduzindo drasticamente o risco de infração de direitos autorais.
        </p>
        <p>
          O <strong>Stable Diffusion 3.5</strong> (Stability AI) segue como a principal opção open-source, rodando localmente em hardware próprio. Para estúdios com dados sensíveis ou que precisam de controle total sobre o modelo, é a alternativa mais robusta. O <strong>Leonardo AI</strong> se consolidou como ferramenta preferida de estúdios de games para geração de assets — personagens, texturas e concept art — com consistência de estilo mantida entre gerações.
        </p>
        <p>
          Artistas como <strong>Refik Anadol</strong> e <strong>Holly Herndon</strong> usam IA como ferramenta expressiva genuína, criando instalações e composições impossíveis de realizar manualmente. O mercado de arte generativa atingiu US$ 2,3 bilhões em valor transacionado em 2025, segundo dados da plataforma SuperRare. A questão central evoluiu: não é mais "IA pode criar arte?", mas "quem é o autor — e quem detém o direito?".
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-ia" />
          Música Gerada por IA: Suno, Udio e os Acordos com as Majors
        </h2>
        <p>
          O <strong>Suno AI v5.5</strong> e o <strong>Udio</strong> permitem criar músicas completas com vocais realistas, mixagem e masterização a partir de prompts de texto. Em 2026, ambas chegaram a acordos com grandes gravadoras: a <strong>Warner Music fechou acordo com o Suno</strong> em novembro de 2025 e a <strong>Universal Music Group fechou acordo com o Udio</strong> em outubro do mesmo ano. A Sony Music, no entanto, ainda não aceitou acordo com nenhuma das duas e mantém processo aberto no Tribunal Federal de Massachusetts, com audiência marcada para julho de 2026.
        </p>
        <p>
          Para produtores independentes, a IA virou ferramenta de prototipagem rápida — criar demos, experimentar gêneros e produzir trilhas sonoras para jogos e vídeos com custo de poucos dólares por projeto. O <strong>Google MusicLM</strong> e o <strong>Meta MusicGen</strong> (open-source) completam o ecossistema para quem quer rodar modelos localmente sem custos de assinatura.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Video className="h-7 w-7 text-ia" />
          O Fim do Sora e o Novo Mapa de Geração de Vídeo com IA
        </h2>
        <p>
          Em <strong>24 de março de 2026</strong> — dez dias depois da publicação original deste artigo — a OpenAI anunciou o encerramento do Sora como plataforma independente. O app web foi desligado em <strong>26 de abril de 2026</strong> e a API terá encerramento em <strong>24 de setembro de 2026</strong>. Simultaneamente, a Disney cancelou o investimento planejado de US$ 1 bilhão que estava vinculado à ferramenta. O modelo Sora 2 continua acessível dentro do <strong>ChatGPT Plus e Pro</strong>, mas sem plataforma dedicada ou API independente. Um produto que prometia redefinir o cinema durou menos de seis meses como ferramenta pública de geração de vídeo.
        </p>
        <p>
          O vácuo foi rapidamente ocupado. As principais alternativas em maio de 2026:
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            { nome: "Runway Gen-4.5", desc: "Principal escolha profissional para cinematografia. Física realista, consistência de personagens entre cenas, resolução 4K. Plano Standard a partir de US$ 12/mês.", destaque: "Melhor para cinema e publicidade" },
            { nome: "Kling 3.0 / Kling O3", desc: "Líder em movimento humano realista e clipes de até 2 minutos. Muito usado por criadores brasileiros. Boa relação custo-benefício.", destaque: "Melhor para conteúdo social" },
            { nome: "Google Veo 3.1", desc: "Escala corporativa, integrado ao Google Workspace. Gera áudio nativo junto com vídeo. Disponível via Google One AI Premium e Vertex AI.", destaque: "Melhor para corporativo" },
            { nome: "Seedance 2.0 (ByteDance)", desc: "Resolução 2K, áudio nativo sincronizado, disponível gratuitamente via Dreamina e CapCut no Brasil desde março de 2026.", destaque: "Melhor custo-benefício BR" },
            { nome: "Pika 3.0", desc: "Especializado em animação estilizada e precisão de sincronia labial. Útil para conteúdo de personagens animados e motion design.", destaque: "Melhor para animação" },
          ].map(({ nome, desc, destaque }) => (
            <div key={nome} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-sm">{nome}</h3>
                <span className="text-xs px-2 py-0.5 bg-ia/10 text-ia rounded-full whitespace-nowrap">{destaque}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-ia" />
          Ferramentas Essenciais para Criativos em 2026
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Midjourney V7</strong> — Geração de imagens fotorealistas com controle de estilo avançado</li>
          <li><strong>Adobe Firefly 3</strong> — IA integrada ao ecossistema Adobe, treinada em conteúdo licenciado</li>
          <li><strong>Suno AI v5.5</strong> — Criação musical completa com vocais, clonagem de voz, até 8 minutos</li>
          <li><strong>Runway Gen-4.5</strong> — Geração e edição de vídeo profissional com física cinematográfica</li>
          <li><strong>ElevenLabs</strong> — Clonagem de voz e narração por IA em mais de 30 idiomas com 30 seg de áudio</li>
          <li><strong>Seedance 2.0</strong> — Vídeo 2K com áudio nativo, gratuito via CapCut no Brasil</li>
          <li><strong>Leonardo AI</strong> — Geração de assets para games e design com consistência de estilo entre gerações</li>
          <li><strong>HeyGen / Synthesia</strong> — Avatares digitais que falam em dezenas de idiomas para vídeos corporativos</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          Direitos Autorais de Arte Gerada por IA: O Que Já Foi Decidido
        </h2>
        <p>
          O panorama jurídico sobre criatividade com IA cristalizou em três posições em 2025-2026:
        </p>
        <p>
          <strong>EUA:</strong> O Copyright Office americano mantém a posição estabelecida em 2023 — obras <em>puramente geradas por IA</em> não são protegidas por direitos autorais. Para uma obra ser protegida, precisa de contribuição criativa humana documentada. O conceito de fair use para treinamento de modelos ainda não tem decisão definitiva em tribunal federal. Mais de 400 artistas assinaram carta aberta ao Congresso condenando o modelo de opt-out (onde criadores precisam pedir para sair) em vez de opt-in (consentimento prévio para treinamento). A OpenAI reverteu a política problemática do Sora após essa pressão organizada.
        </p>
        <p>
          <strong>União Europeia:</strong> O EU AI Act (vigente desde agosto de 2024) exige que conteúdo gerado por IA seja rotulado como tal — o que já está sendo implementado por plataformas como YouTube, Instagram e TikTok via metadados C2PA.
        </p>
        <p>
          <strong>Brasil:</strong> Não há jurisprudência consolidada. O PL 2338/2023 (ainda na Câmara em 2026) trata IA generativa mas não especifica a questão de autoria de obras geradas. O ECAD e a Biblioteca Nacional ainda não publicaram diretrizes específicas para obras com IA. A recomendação prática para artistas e produtores brasileiros: registrar obras com contribuição humana documentada antes de publicar.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          Como Artistas Brasileiros Podem Proteger Suas Obras da IA
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Registro na Biblioteca Nacional ou em cartório:</strong> O registro com data certa documenta a anterioridade da obra. Custo: R$ 30–R$ 80. Para músicas, o registro no ECAD (gratuito para associados) protege direitos de execução pública.</li>
          <li><strong>C2PA (Content Credentials):</strong> A Adobe implementou C2PA nativamente no Photoshop, Lightroom e Firefly. Ao salvar um arquivo com C2PA ativo, os metadados registram quem criou, quando e com quais ferramentas — resistente a remoção em edições subsequentes.</li>
          <li><strong>Nightshade e Glaze:</strong> Ferramentas desenvolvidas pela Universidade de Chicago que perturbam o treinamento de modelos de IA em suas imagens. O Nightshade altera pixels de forma imperceptível ao humano mas que "envenena" o aprendizado do modelo. Sem garantia de 100% de eficácia com todos os modelos.</li>
          <li><strong>Opt-out em plataformas:</strong> Stability AI, Adobe, Getty Images e a maioria das plataformas sérias têm mecanismos de opt-out do treinamento. Não garante exclusão retroativa, mas impede uso futuro dos seus uploads.</li>
        </ul>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: quem vai pagar pelo treinamento com obras brasileiras sem licença?">
        <p>
          O encerramento do Sora em março de 2026 foi sintomático: um produto lançado com política de opt-out que enfrentou resistência tão organizada da indústria criativa que acabou inviabilizado comercialmente. A lição é que IA criativa sem licenciamento claro das obras de treinamento tem vida curta. A discussão real no Brasil não é "substitui o artista?" — é quem vai pagar pelo treinamento dos modelos com obras de artistas brasileiros sem licença. Enquanto os EUA debatem fair use e a UE avança com opt-out obrigatório via AI Act, nós ainda não temos jurisprudência clara. Recomendo a todo criador registrar obras (Biblioteca Nacional ou cartório) antes de publicar e ativar C2PA quando possível. O Adobe Firefly é hoje a escolha mais segura para uso comercial justamente por ser treinado exclusivamente em conteúdo licenciado.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "Estado de Minas — Sora da OpenAI será encerrado em 2026", url: "https://www.em.com.br/trends/2026/04/7400071-sora-da-openai-sera-encerrado-entenda-a-ia-que-criava-videos.html", publisher: "Estado de Minas", accessedAt: "Maio 2026" },
        { title: "Casa do Dev — OpenAI reverte política de direitos autorais do Sora", url: "https://casado.dev/openai-reverte-politica-direitos-autorais-sora", publisher: "Casa do Dev", accessedAt: "Maio 2026" },
        { title: "Adobe — Firefly e Content Credentials (C2PA)", url: "https://www.adobe.com/products/firefly.html", publisher: "Adobe", accessedAt: "Maio 2026" },
        { title: "C2PA — Content Provenance and Authenticity", url: "https://c2pa.org/", publisher: "C2PA", accessedAt: "Maio 2026" },
        { title: "Biblioteca Nacional — Registro de Obras e Direitos Autorais", url: "https://www.gov.br/bn/pt-br/servicos/direitos-autorais", publisher: "Fundação Biblioteca Nacional", accessedAt: "Maio 2026" },
        { title: "EU AI Act — Obrigações de Transparência em Conteúdo de IA (Art. 50)", url: "https://artificialintelligenceact.eu/", publisher: "European Commission", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-criatividade-arte-musica-2026" />
      <CommentSection category="ia" postId="ia-criatividade-arte-musica-2026" postTitle="IA e Criatividade 2026: Como a IA Está Revolucionando Arte e Música" />
    </article>
  );
};

export default IACriatividade2026;
