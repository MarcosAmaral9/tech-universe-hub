import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Bot, Cpu, Briefcase, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/agentes-ia-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const AgentesIA2026 = () => {

  useEffect(() => {
    trackArticleRead("agentes-ia-2026-como-funcionam", "Agentes de IA 2026: O Que São, Como Funcionam e Por Que Mudam Tudo", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Agentes de IA em 2026: O Que São, Como Funcionam e Por Que Mudam Tudo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />01 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Agentes de IA 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se em 2024 a grande revolução foi o chatbot, em 2026 estamos vivendo a era dos <strong>Agentes de IA</strong>: sistemas que não apenas respondem, mas <strong>agem de forma autônoma</strong> para completar tarefas complexas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-ia" />
          Chatbot vs. Agente: A Diferença Fundamental
        </h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">💬 Chatbot</h4>
            <p className="text-sm text-muted-foreground mb-0">Responde "Como reservar um hotel?" com informações e links.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-ia/50">
            <h4 className="font-bold mb-2">🤖 Agente</h4>
            <p className="text-sm text-muted-foreground mb-0">Recebe "Reserve o melhor hotel em SP, orçamento R$ 800", pesquisa, compara, reserva, envia comprovante e adiciona no calendário — tudo sozinho.</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          Como os Agentes Funcionam
        </h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Percepção", "Raciocínio", "Ação", "Memória", "Revisão"].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">{step}</span>
                {i < 4 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 mb-0 text-center">Esse ciclo se repete até a tarefa ser concluída.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-ia" />
          Exemplos Reais em Uso
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Vendas:</strong> identificam leads, personalizam e-mails, agendam reuniões e atualizam o CRM.</li>
          <li><strong>Jurídico:</strong> análise de contratos e identificação de cláusulas problemáticas em minutos.</li>
          <li><strong>Financeiro:</strong> monitoramento de portfólio e execução de ordens dentro de parâmetros.</li>
          <li><strong>RH:</strong> triagem de currículos, agendamento e entrevistas iniciais padronizadas.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">Principais Agentes Disponíveis</h2>
        <ul className="space-y-2 my-6">
          <li><strong>OpenAI Operator:</strong> navega na web e executa tarefas como um humano.</li>
          <li><strong>Claude Computer Use:</strong> controla computador completo via linguagem natural.</li>
          <li><strong>Google Project Mariner:</strong> integrado ao Chrome, executa tarefas nos sites abertos.</li>
          <li><strong>Devin (Cognition AI):</strong> engenheiro de software IA que escreve, testa e faz deploy de código.</li>
          <li><strong>AutoGPT e CrewAI:</strong> frameworks open-source para construir agentes personalizados.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          Riscos e Limitações
        </h2>
        <p>
          Agentes de IA ainda erram — e quando erram de forma autônoma, o erro pode se propagar. Riscos: ações irreversíveis, viés nos critérios, vulnerabilidade a prompt injection e questões de privacidade. <strong>Regra atual:</strong> agentes são mais seguros em ambientes com ações reversíveis e supervisão humana.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você já usou um agente de IA?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="agentes-ia-2026-como-funcionam" />
      <CommentSection postId="agentes-ia-2026-como-funcionam" postTitle="Agentes de IA 2026: O Que São, Como Funcionam e Por Que Mudam Tudo" />
    </article>
  );
};

export default AgentesIA2026;
