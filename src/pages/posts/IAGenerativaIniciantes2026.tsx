import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, BookOpen, Target, Wrench, AlertCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-generativa-iniciantes-2026.webp";

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
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA Generativa para Iniciantes" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Sem jargão técnico desnecessário, sem promessas irrealistas. Apenas um <strong>caminho claro do zero ao uso avançado</strong>, com etapas práticas e resultados reais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          O Que é IA Generativa (de Verdade)
        </h2>
        <p>
          IA generativa é qualquer sistema capaz de <strong>criar conteúdo novo</strong>: textos, imagens, músicas, vídeos, códigos. Ao contrário das IAs antigas que apenas classificavam, as IAs generativas <em>produzem</em> — criam algo que não existia antes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Target className="h-7 w-7 text-ia" />
          Etapa 1 — Experimentação sem Medo
        </h2>
        <p>
          Abra o ChatGPT, Claude ou Gemini e faça pelo menos <strong>30 perguntas em 7 dias</strong> sobre temas que você já conhece bem. Você vai descobrir onde a IA acerta, onde erra e onde surpreende.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Etapa 2 — Engenharia de Prompts Básica</h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <ul className="space-y-3 mb-0">
            <li><strong>Seja específico:</strong> "Escreva um e-mail de 150 palavras para um cliente que atrasou o pagamento, tom profissional mas cordial."</li>
            <li><strong>Dê contexto:</strong> Quem você é, para quem é o texto, qual o objetivo.</li>
            <li><strong>Peça formato:</strong> Lista, tabela, parágrafo, tópicos.</li>
            <li><strong>Itere:</strong> A primeira resposta raramente é a final.</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-ia" />
          Etapa 3 — Escolha Suas Ferramentas
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">✍️ Escrita</h4>
            <p className="text-sm text-muted-foreground mb-0">Claude Pro ou ChatGPT Plus</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🎨 Imagens</h4>
            <p className="text-sm text-muted-foreground mb-0">Midjourney ou Adobe Firefly</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🎬 Vídeos</h4>
            <p className="text-sm text-muted-foreground mb-0">Runway ML ou CapCut AI</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Etapa 4 — Nível Avançado: Automações</h2>
        <p>
          O salto de iniciante para avançado acontece quando você para de usar a IA isoladamente e começa a <strong>conectar ferramentas</strong>. Exemplo: Otter.ai transcreve reunião → ChatGPT resume e extrai tarefas → Zapier cria cards no Trello → você recebe notificação no WhatsApp.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertCircle className="h-7 w-7 text-destructive" />
          Erros Mais Comuns
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Confiar cegamente:</strong> IAs ainda alucinam — sempre verifique fatos.</li>
          <li><strong>Prompts vagos:</strong> Lixo entra, lixo sai.</li>
          <li><strong>Abandonar cedo:</strong> A curva é íngreme na primeira semana e suave depois.</li>
          <li><strong>Ignorar privacidade:</strong> Não insira dados confidenciais sem verificar a política.</li>
          <li><strong>Querer tudo de uma vez:</strong> Foco é mais valioso que variedade.</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual foi sua primeira experiência com IA generativa?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="ia-generativa-iniciantes-2026-guia" />
      <CommentSection postId="ia-generativa-iniciantes-2026-guia" postTitle="IA Generativa para Iniciantes 2026: Do Zero ao Avançado" />
    </article>
  );
};

export default IAGenerativaIniciantes2026;
