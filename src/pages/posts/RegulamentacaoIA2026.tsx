import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, Scale, Globe, Building, Users } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/regulamentacao-ia-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const RegulamentacaoIA2026 = () => {

  useEffect(() => {
    trackArticleRead("regulamentacao-ia-brasil-mundo-2026", "Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda Para Você
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />03 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Regulamentação de IA 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O AI Act europeu entrou em vigor, o Brasil avança com seu marco regulatório de IA, e os EUA têm suas próprias diretrizes. O que isso muda na prática — para <strong>você, para as empresas e para o desenvolvimento da tecnologia</strong>?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-ia" />
          O AI Act Europeu
        </h2>
        <p>
          O AI Act classifica sistemas de IA por nível de risco:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-destructive/30">
            <h4 className="font-bold text-destructive mb-1">🚫 Inaceitável (Proibido)</h4>
            <p className="text-sm text-muted-foreground mb-0">Reconhecimento facial em massa, sistemas de "pontuação social".</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-yellow-500/30">
            <h4 className="font-bold text-yellow-500 mb-1">⚠️ Alto Risco</h4>
            <p className="text-sm text-muted-foreground mb-0">IA em contratações, crédito, justiça criminal — precisam de auditoria obrigatória.</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Scale className="h-7 w-7 text-ia" />
          O Marco Regulatório de IA no Brasil
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>Transparência obrigatória</strong> quando o usuário interage com IA</li>
          <li><strong>Direito à explicação</strong> de decisões automatizadas</li>
          <li><strong>Responsabilidade dos desenvolvedores</strong> por danos causados</li>
          <li>Criação de uma <strong>autoridade reguladora</strong> específica para IA</li>
        </ul>
      <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Building className="h-7 w-7 text-ia" />
          O Que Muda Para Empresas
        </h2>
        <ul className="space-y-2 my-6">
          <li><strong>PMEs:</strong> obrigação de mapear quais sistemas de IA usam</li>
          <li><strong>RH:</strong> IA para triagem de currículos precisa de auditoria de viés</li>
          <li><strong>Fintechs:</strong> decisões de crédito automatizadas precisam ser explicáveis</li>
          <li><strong>Tech:</strong> avaliações de impacto obrigatórias para desenvolvimento de IA</li>
        </ul>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-ia" />
          O Que Muda Para Consumidores
        </h2>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <ul className="space-y-3 mb-0">
            <li>✅ Direito de saber quando está interagindo com IA</li>
            <li>✅ Proibição de perfis psicológicos para manipulação</li>
            <li>✅ Decisões sobre crédito/emprego/seguro precisam ser justificadas</li>
            <li>✅ Deepfakes de pessoas reais sem consentimento são explicitamente ilegais</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Que Fazer Agora</h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">👤 Indivíduos</h4>
            <p className="text-sm text-muted-foreground mb-0">Conheça seus direitos, incluindo o direito de solicitar explicação de decisões automatizadas.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">🏢 Empresas</h4>
            <p className="text-sm text-muted-foreground mb-0">Mapeie todos os sistemas de IA em uso e consulte um especialista em compliance.</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <h4 className="font-bold mb-2">👨‍💻 Devs</h4>
            <p className="text-sm text-muted-foreground mb-0">Documente seus sistemas e implemente mecanismos de explicabilidade.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Regulação demais ou de menos?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <section className="my-10">
        <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Análise do Marcos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">O cenário regulatório global de IA em 2026 tem três pilares definidos: o EU AI Act (Regulamento UE 2024/1689, em vigor desde agosto/2024 e com fases até agosto/2026), o PL 2338/2023 brasileiro aprovado pelo Senado em dezembro/2024 e em tramitação na Câmara, e o Executive Order 14110 dos EUA (revogado por Trump em janeiro/2025 e substituído por uma política mais flexível). A divergência entre blocos cria desafio para multinacionais.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">No Brasil, o PL 2338 cria categorias de risco semelhantes ao AI Act europeu, exige avaliação de impacto algorítmico (AIIA) para sistemas de alto risco e dá à ANPD (Autoridade Nacional de Proteção de Dados) papel central na fiscalização. Combinado com a LGPD (Lei 13.709/2018, art. 20 — direito à revisão de decisões automatizadas), o arcabouço brasileiro já permite ao cidadão exigir explicação sobre uma decisão de crédito ou triagem de currículo por IA.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Minha análise: o desafio para 2026 não é se haverá regulação — é como adaptar empresas que ainda nem mapearam quais sistemas usam IA. A recomendação é começar pelo inventário (todas as ferramentas SaaS com 'IA' no nome) e, em paralelo, definir um responsável interno de compliance algorítmico.</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold mb-4">Fontes consultadas</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">EU AI Act — Texto Oficial (Regulamento 2024/1689) ↗</a></li>
            <li><a href="https://www25.senado.leg.br/web/atividade/materias/-/materia/157233" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Senado Federal — PL 2338/2023 ↗</a></li>
            <li><a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">ANPD — Autoridade Nacional de Proteção de Dados ↗</a></li>
            <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Planalto — LGPD (Lei 13.709/2018) ↗</a></li>
            <li><a href="https://www.whitehouse.gov/ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">White House — AI Executive Orders Tracker ↗</a></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Última verificação dos links: maio de 2026.
          </p>
        </div>
      </section>
      <RelatedPosts currentSlug="regulamentacao-ia-brasil-mundo-2026" />
      <CommentSection postId="regulamentacao-ia-brasil-mundo-2026" postTitle="Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda" />
    </article>
  );
};

export default RegulamentacaoIA2026;