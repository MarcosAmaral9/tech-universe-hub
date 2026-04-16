import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Smartphone, Star, Lightbulb } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/apps-ia-produtividade-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const AppsIAProdutividade2026 = () => {
  const apps = [
    { name: "Notion AI", desc: "Segundo cérebro com IA integrada", cost: "US$ 8/mês adicional", nota: "9.4/10" },
    { name: "Otter.ai", desc: "Transcrição e resumo de reuniões em tempo real", cost: "Gratuito até 300 min/mês", nota: "9.1/10" },
    { name: "Perplexity AI", desc: "Pesquisa e fact-checking em modo turbo", cost: "Gratuito / US$ 20 Pro", nota: "9.3/10" },
    { name: "Gamma.app", desc: "Apresentações com IA em 10 minutos", cost: "Freemium", nota: "8.9/10" },
    { name: "Runway ML", desc: "Edição de vídeo e geração de cenas", cost: "A partir de US$ 12/mês", nota: "9.0/10" },
    { name: "ElevenLabs", desc: "Clonagem de voz e narração realista", cost: "Freemium", nota: "9.2/10" },
    { name: "Midjourney v7", desc: "Geração de imagens profissionais", cost: "A partir de US$ 10/mês", nota: "9.5/10" },
    { name: "Zapier AI", desc: "Automação de fluxos sem código", cost: "Freemium", nota: "8.8/10" },
    { name: "Reclaim.ai", desc: "Agenda inteligente que protege seu foco", cost: "Freemium", nota: "9.0/10" },
    { name: "Claude.ai", desc: "Análise de documentos longos e escrita avançada", cost: "Gratuito / US$ 20 Pro", nota: "9.2/10" },
  ];


  useEffect(() => {
    trackArticleRead("melhores-apps-ia-produtividade-2026", "Os 10 Melhores Apps de IA para Produtividade em 2026", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os 10 Melhores Aplicativos de IA para Produtividade em 2026 (Testados e Aprovados)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />14 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Apps IA Produtividade 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Passei 3 meses testando mais de <strong>80 ferramentas</strong> e separei as 10 que sobreviveram ao teste do uso real — aquelas que, depois de semanas, ainda estavam abertas na minha área de trabalho.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Smartphone className="h-7 w-7 text-ia" />
          Os 10 Apps Vencedores
        </h2>

        <div className="space-y-3 my-6">
          {apps.map((app, i) => (
            <div key={i} className="p-4 bg-card rounded-xl border border-border flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ia/20 text-ia flex items-center justify-center font-bold text-sm">{i + 1}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold">{app.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground flex items-center gap-1"><Star className="h-3 w-3" />{app.nota}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{app.desc}</p>
                <p className="text-xs text-muted-foreground mb-0">💰 {app.cost}</p>
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-ia" />
          Stack Econômico para Começar
        </h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="mb-0">
            Comece com <strong>Perplexity gratuito + ChatGPT gratuito + Canva Magic</strong> (gratuito). Isso já resolve 70% das necessidades de produtividade sem custo. Só escale para planos pagos quando sentir o limite do gratuito — geralmente após 2-3 semanas de uso consistente.
          </p>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual app de IA é indispensável na sua rotina?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="melhores-apps-ia-produtividade-2026" />
      <CommentSection postId="melhores-apps-ia-produtividade-2026" postTitle="Os 10 Melhores Apps de IA para Produtividade em 2026" />
    </article>
  );
};

export default AppsIAProdutividade2026;
