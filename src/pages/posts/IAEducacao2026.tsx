import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, GraduationCap, Brain, BookOpen, Heart } from "lucide-react";
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
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="IA na Educação 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          As mesmas ferramentas que podem tornar o aprendizado mais eficaz também podem torná-lo completamente inútil. Neste artigo, exploramos o <strong>lado produtivo</strong> — como usar IA para aprender mais rápido sem terceirizar o pensamento.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <GraduationCap className="h-7 w-7 text-ia" />
          O Método Correto: IA como Professor, não como Fantasma
        </h2>
        <p>
          Ao invés de pedir "Escreva sobre X", peça <strong>"Explique X de forma que eu possa escrever sobre o assunto com minhas próprias palavras"</strong>. Essa abordagem usa a IA para construir seu mapa mental — o conteúdo permanece sendo elaborado por você.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          Técnicas de Estudo Potencializadas por IA
        </h2>
        <div className="space-y-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">🧠 Método Feynman com IA</h4>
            <p className="text-sm text-muted-foreground mb-0">Explique um conceito para o ChatGPT "como se você tivesse 10 anos" e peça que ele identifique o que você entendeu errado.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📇 Flashcards Automáticos</h4>
            <p className="text-sm text-muted-foreground mb-0">Cole qualquer material no Claude e peça "Crie 20 flashcards no formato pergunta/resposta". Use no Anki para revisão espaçada.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📝 Simulado Personalizado</h4>
            <p className="text-sm text-muted-foreground mb-0">"Crie 10 questões de múltipla escolha no estilo do ENEM sobre este tema, com gabarito comentado."</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
      <AdInArticle />
          <BookOpen className="h-7 w-7 text-ia" />
          IA para Diferentes Perfis de Estudante
        </h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">📚 Concurseiros</h4>
            <p className="text-sm text-muted-foreground mb-0">Cronogramas adaptados, simular bancas específicas e explicar legislações em linguagem simples.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🎓 Universitários</h4>
            <p className="text-sm text-muted-foreground mb-0">Peça à IA que critique seus argumentos antes de entregar trabalhos.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">💼 Profissionais</h4>
            <p className="text-sm text-muted-foreground mb-0">Mapeie gaps de conhecimento e crie trilhas de aprendizado personalizadas.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">🏫 Ensino Médio</h4>
            <p className="text-sm text-muted-foreground mb-0">Resolva exercícios de matemática passo a passo e entenda por que cada passo existe.</p>
          </div>
        </div>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-ia" />
          Habilidades Exclusivamente Humanas
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Pensamento crítico original:</strong> criar o genuinamente novo ainda requer o humano.</li>
          <li><strong>Empatia e inteligência emocional:</strong> nenhum algoritmo substitui ler uma sala ou inspirar pessoas.</li>
          <li><strong>Julgamento ético em contexto:</strong> aplicar princípios morais em situações complexas.</li>
          <li><strong>Habilidades práticas e físicas:</strong> medicina cirúrgica, artes, esportes.</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Como você usa IA para estudar?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      
      <section className="my-10">
        <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Análise do Marcos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">O uso de IA generativa em educação está em explosão. O relatório UNESCO 'Guidance for generative AI in education and research' (2023) é o documento de referência global e recomenda idade mínima de 13 anos, transparência de uso e auditoria pedagógica. No Brasil, o MEC publicou em 2024 a primeira nota técnica sobre uso de IA em redes públicas, com diretrizes alinhadas à LGPD e à BNCC.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">Ferramentas com tração comprovada incluem Khanmigo (Khan Academy, baseado em GPT-4 com salvaguardas pedagógicas), Google NotebookLM (geração de podcast e mapas mentais a partir de PDFs), Anthropic Claude (resumo de textos longos com baixa taxa de alucinação) e ChatGPT Edu — versão institucional lançada pela OpenAI em maio de 2024 para universidades.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">A análise do Marcos: a IA não substitui estudo profundo; ela acelera o que já é bom estudo. Use a técnica de Feynman com Claude (explique o conceito, peça que aponte falhas), faça flashcards no Anki com perguntas geradas pela IA e jamais entregue trabalho sem revisão — detectores como GPTZero ainda erram bastante, mas professores brasileiros já adotam triangulação com Turnitin.</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold mb-4">Fontes consultadas</h3>
          <ul className="space-y-2 text-sm">
            {[
              { title: "UNESCO — Guidance for generative AI in education and research", url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" },
          { title: "Khan Academy — Khanmigo", url: "https://www.khanmigo.ai/" },
          { title: "OpenAI — ChatGPT Edu", url: "https://openai.com/index/introducing-chatgpt-edu/" },
          { title: "Google — NotebookLM", url: "https://notebooklm.google/" },
          { title: "MEC — Estratégia Brasileira de Inteligência Artificial", url: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial" },
            ].map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline break-words">
                  {s.title} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Última verificação dos links: maio de 2026.
          </p>
        </div>
      </section>
      <RelatedPosts currentSlug="ia-educacao-2026-estudar-inteligente" />
      <CommentSection postId="ia-educacao-2026-estudar-inteligente" postTitle="IA na Educação 2026: Como Estudar de Forma Inteligente" />
    </article>
  );
};

export default IAEducacao2026;