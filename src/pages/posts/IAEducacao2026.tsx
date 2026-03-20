import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, GraduationCap, Brain, BookOpen, Heart } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-educacao-2026.webp";

const IAEducacao2026 = () => {

  useEffect(() => {
    trackArticleRead("ia-educacao-2026-estudar-inteligente", "IA na Educação 2026: Como Estudar de Forma Inteligente", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation categoryPath="/ia" categoryLabel="Inteligência Artificial" />

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
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA na Educação 2026" className="w-full h-full object-cover" />
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

      <RelatedPosts currentSlug="ia-educacao-2026-estudar-inteligente" />
      <CommentSection postId="ia-educacao-2026-estudar-inteligente" postTitle="IA na Educação 2026: Como Estudar de Forma Inteligente" />
    </article>
  );
};

export default IAEducacao2026;
