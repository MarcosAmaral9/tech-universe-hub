import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Heart, Stethoscope, Brain, Pill } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-saude-2026.webp";

const IASaude2026 = () => {

  useEffect(() => {
    trackArticleRead("ia-saude-2026-diagnosticos-futuro", "IA para Saúde 2026: Diagnósticos, Monitoramento e o Futuro da Medicina", "ia");
  }, []);
  const goBack = useSmartBack("/ia");
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para IA
      </button>

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA para Saúde em 2026: Diagnósticos, Monitoramento e o Futuro da Medicina
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />02 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA para Saúde 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em outubro de 2025, um sistema de IA identificou um câncer de pâncreas em estágio inicial em um paciente assintomático — o mesmo exame que <strong>quatro radiologistas humanos</strong> haviam analisado sem encontrar nada.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Stethoscope className="h-7 w-7 text-ia" />
          O Que a IA Já Faz na Medicina Hoje
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Diagnóstico por imagem:</strong> supera médicos na detecção de melanoma, retinopatia diabética e certos cânceres de mama.</li>
          <li><strong>Descoberta de medicamentos:</strong> 10-15 anos de pesquisa comprimidos para 2-3 anos (AlphaFold e sucessores).</li>
          <li><strong>Análise genômica:</strong> sequenciamento e análise de DNA em horas, não meses.</li>
          <li><strong>Predição de sepse:</strong> IA detecta sepse 6 horas antes dos protocolos tradicionais.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-ia" />
          Ferramentas de IA para o Paciente Comum
        </h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📱 Apps de Orientação</h4>
            <p className="text-sm text-muted-foreground mb-0">Ada Health e K Health oferecem triagem com precisão comparável à enfermagem.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">⌚ Wearables com IA</h4>
            <p className="text-sm text-muted-foreground mb-0">Apple Watch Series 10 e Galaxy Watch 7 detectam fibrilação atrial, apneia do sono e variações de SPO2.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">📊 Plataformas de Acompanhamento</h4>
            <p className="text-sm text-muted-foreground mb-0">Acompanhe exames e receba análises contextualizadas. Essas ferramentas orientam — não substituem a consulta médica.</p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          IA na Saúde Mental
        </h2>
        <p>
          Plataformas como Woebot e Wysa atendem milhões de pessoas sem acesso à terapia tradicional. Estudos mostram reduções significativas em sintomas de <strong>ansiedade e depressão leve a moderada</strong>. No Brasil, onde o acesso à saúde mental é limitado, o potencial é enorme.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Pill className="h-7 w-7 text-ia" />
          O Futuro Próximo (até 2028)
        </h2>
        <ul className="space-y-2 my-6">
          <li>Médicos de IA pessoal que conhecem seu histórico completo</li>
          <li>Cirurgias robóticas assistidas com precisão milimétrica</li>
          <li>Medicamentos personalizados baseados no perfil genético</li>
          <li>Predição de doenças crônicas com 5-10 anos de antecedência</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você usaria uma IA para monitorar sua saúde?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="ia-saude-2026-diagnosticos-futuro" />
      <CommentSection postId="ia-saude-2026-diagnosticos-futuro" />
    </article>
  );
};

export default IASaude2026;
