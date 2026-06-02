import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, GraduationCap, Brain, BookOpen, Heart } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-educacao-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const IAEducacao2026 = () => {
  useEffect(() => {
    trackArticleRead("ia-educacao-2026-estudar-inteligente", "IA na Educação 2026: Como Estudar de Forma Inteligente", "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA na Educação em 2026: Como Estudar de Forma mais Inteligente (Sem Fazer Batota)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
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
          alt="IA na educação em 2026 — como usar inteligência artificial para estudar de forma inteligente"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          As mesmas ferramentas que podem tornar o aprendizado mais eficaz também podem torná-lo completamente inútil. Neste artigo, exploramos o <strong>lado produtivo da IA na educação</strong> — como usar IA para aprender mais rápido sem terceirizar o pensamento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-ia" />
          O Método Correto: IA como Professor, não como Fantasma
        </h2>
        <p>
          Ao invés de pedir "Escreva sobre X", peça <strong>"Explique X de forma que eu possa escrever sobre o assunto com minhas próprias palavras"</strong>. Essa abordagem usa a IA para construir seu mapa mental — o conteúdo permanece sendo elaborado por você. A UNESCO recomenda exatamente esse enquadramento: IA como suporte ao aprendizado, nunca como substituta do esforço cognitivo do estudante.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          Técnicas de Estudo Potencializadas por IA
        </h2>
        <div className="space-y-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">🧠 Método Feynman com IA</h4>
            <p className="text-sm text-muted-foreground mb-0">Explique um conceito para o Claude "como se você tivesse 10 anos" e peça que ele identifique o que você entendeu errado. O modelo aponta gaps sem entregar a resposta pronta.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📇 Flashcards Automáticos</h4>
            <p className="text-sm text-muted-foreground mb-0">Cole qualquer material no Claude e peça "Crie 20 flashcards no formato pergunta/resposta". Use no Anki para revisão espaçada.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📝 Simulado Personalizado</h4>
            <p className="text-sm text-muted-foreground mb-0">"Crie 10 questões de múltipla escolha no estilo do ENEM sobre este tema, com gabarito comentado." Pode especificar a banca: CESPE, FCC, FGV.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">🎙️ Podcast do seu material (Google NotebookLM)</h4>
            <p className="text-sm text-muted-foreground mb-0">Faça upload dos seus PDFs e peça ao NotebookLM que gere um podcast de debate entre dois especialistas sobre o conteúdo. Ótimo para revisar enquanto se exercita.</p>
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          IA na Educação para Diferentes Perfis de Estudante
        </h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">📚 Concurseiros</h4>
            <p className="text-sm text-muted-foreground mb-0">Cronogramas adaptados ao edital, simulação de bancas específicas e explicação de legislações em linguagem simples com exemplos práticos.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🎓 Universitários</h4>
            <p className="text-sm text-muted-foreground mb-0">Peça à IA que critique seus argumentos antes de entregar trabalhos. "Aponte os 3 pontos mais fracos do meu argumento neste parágrafo."</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">💼 Profissionais</h4>
            <p className="text-sm text-muted-foreground mb-0">Mapeie gaps de conhecimento para uma certificação e crie trilhas de aprendizado personalizadas com cronograma realista.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏫 Ensino Médio</h4>
            <p className="text-sm text-muted-foreground mb-0">Resolva exercícios de matemática passo a passo e entenda por que cada passo existe — não apenas o resultado, mas o raciocínio.</p>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-ia" />
          Habilidades que IA não Substitui na Educação
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Pensamento crítico original:</strong> criar o genuinamente novo ainda requer o humano.</li>
          <li><strong>Empatia e inteligência emocional:</strong> nenhum algoritmo substitui ler uma sala ou inspirar pessoas.</li>
          <li><strong>Julgamento ético em contexto:</strong> aplicar princípios morais em situações complexas de forma coerente.</li>
          <li><strong>Habilidades práticas e físicas:</strong> medicina cirúrgica, artes performáticas, esportes — a IA pode ensinar a teoria, não a prática.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Atenção: Detecção de IA em Trabalhos Acadêmicos</h2>
        <p>
          Professores brasileiros já adotam triangulação entre GPTZero, Turnitin (que lançou detector de IA em 2023) e análise estilística manual. O problema é que detectores ainda têm alta taxa de falso positivo — estudantes com escrita formal são frequentemente sinalizados. A recomendação prática: use IA para aprender e rascunhar, mas reescreva com suas próprias palavras antes de entregar. Se a instituição tiver política clara de uso de IA, siga-a.
        </p>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: IA acelera quem já estuda bem — e atrapalha quem não estuda">
        <p>
          O relatório UNESCO <em>Guidance for generative AI in education and research</em> (2023) é claro: IA deve ser suporte ao aprendizado, não substituta do esforço cognitivo. No Brasil, o MEC publicou em 2024 a primeira nota técnica sobre uso de IA em redes públicas, alinhada à LGPD e à BNCC. O Khanmigo (Khan Academy, GPT-4 com salvaguardas pedagógicas) e o Google NotebookLM são os dois melhores exemplos de IA projetada para aprender junto, não no lugar do aluno.
        </p>
        <p>
          Minha leitura prática: a IA não substitui estudo profundo — ela acelera o que já é bom estudo. Quem usava técnicas sólidas (Feynman, revisão espaçada, prática deliberada) vai ficou 3× mais eficiente com IA. Quem já copiava trabalho vai só copiar mais rápido — e vai ser pego mais rápido também. A diferença de resultados entre os dois grupos vai aumentar.
        </p>
      </EditorialTake>

      <ArticleSources category="ia" sources={[
        { title: "UNESCO — Guidance for generative AI in education and research", url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research", publisher: "UNESCO", accessedAt: "Maio 2026" },
        { title: "Khan Academy — Khanmigo (AI tutor)", url: "https://www.khanmigo.ai/", publisher: "Khan Academy", accessedAt: "Maio 2026" },
        { title: "OpenAI — Introducing ChatGPT Edu", url: "https://openai.com/index/introducing-chatgpt-edu/", publisher: "OpenAI", accessedAt: "Maio 2026" },
        { title: "Google — NotebookLM", url: "https://notebooklm.google/", publisher: "Google", accessedAt: "Maio 2026" },
        { title: "MEC / MCTI — Estratégia Brasileira de Inteligência Artificial", url: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial", publisher: "Governo Federal", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="ia-educacao-2026-estudar-inteligente" />
      <CommentSection postId="ia-educacao-2026-estudar-inteligente" postTitle="IA na Educação 2026: Como Estudar de Forma Inteligente"  category="ia" />
    </article>
  );
};

export default IAEducacao2026;
