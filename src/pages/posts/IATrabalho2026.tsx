import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, AlertTriangle, TrendingUp, Shield, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-trabalho-2026.webp";

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
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA no Trabalho 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Algumas profissões realmente encolheram. Outras explodiram em demanda. E a maioria está no meio — transformando-se rapidamente. Neste artigo, analisamos <strong>30 profissões</strong> e dizemos claramente: risco alto, médio ou oportunidade.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-destructive" />
          Profissões em Risco Alto
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Operadores de entrada de dados:</strong> 78% das tarefas já são automatizadas.</li>
          <li><strong>Tradutores de textos simples:</strong> IA supera humanos em velocidade e custo.</li>
          <li><strong>Revisores de contratos padrão:</strong> LegalTech + IA já realizam 90% dessa tarefa.</li>
          <li><strong>Agentes de call center de 1º nível:</strong> Chatbots resolvem 70% das demandas.</li>
          <li><strong>Editores de foto básicos:</strong> Adobe Firefly automatizou edições simples.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-ia" />
          Profissões que Estão Explodindo em Demanda
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Engenheiro de Prompts e IA:</strong> salários de R$ 8.000 a R$ 30.000/mês.</li>
          <li><strong>Especialista em Ética de IA:</strong> regulamentações criaram demanda enorme.</li>
          <li><strong>Gestor de Automação (RevOps + IA)</strong></li>
          <li><strong>Terapeuta e Psicólogo:</strong> empatia humana é insubstituível — demanda cresceu 34%.</li>
          <li><strong>Profissional de Cibersegurança:</strong> IA cria novos vetores de ataque.</li>
          <li><strong>Professor de IA e Tecnologia</strong></li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-ia" />
          A Regra dos 3 E's: Como Proteger Sua Carreira
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">Especialização</h4>
            <p className="text-sm text-muted-foreground mb-0">Escolha um nicho onde o conhecimento humano profundo ainda supera a IA.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">Experimentação</h4>
            <p className="text-sm text-muted-foreground mb-0">Use IA no seu trabalho atual para aumentar sua produtividade.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">Evolução</h4>
            <p className="text-sm text-muted-foreground mb-0">Adicione habilidades adjacentes à IA à sua formação.</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-ia" />
          O Futuro Não é IA vs. Humanos — É IA + Humanos
        </h2>
        <p>
          As empresas mais bem-sucedidas não escolheram entre equipes humanas ou IA — elas criaram <strong>processos híbridos</strong> onde cada lado faz o que faz melhor. Humanos trazem julgamento ético, empatia e criatividade disruptiva. A IA traz velocidade, escala e consistência.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Sua profissão está em risco ou em oportunidade?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="ia-no-trabalho-2026-profissoes" />
      <CommentSection postId="ia-no-trabalho-2026-profissoes" postTitle="IA no Trabalho em 2026: Sua Profissão Vai Acabar ou Evoluir?" />
    </article>
  );
};

export default IATrabalho2026;
