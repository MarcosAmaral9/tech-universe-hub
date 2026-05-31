import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
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
          src={heroImg} alt="Regulamentação de IA no Brasil e no mundo em 2026 — EU AI Act, PL 2338, ANPD e o que muda para empresas brasileiras" className="w-full h-full object-cover" />
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


      <EditorialTake category="ia" title="Análise do Marcos: o desafio de 2026 não é a regulação — é mapear quais sistemas já usam IA">
        <p>
          O cenário regulatório global tem três pilares em 2026: o <strong>EU AI Act</strong> (Reg. UE 2024/1689, em vigor desde agosto/2024 com fases até agosto/2026), o <strong>PL 2338/2023</strong> brasileiro aprovado pelo Senado em dezembro/2024 e o espaço regulatório mais flexível deixado pelos EUA após a revogação do Executive Order 14110 por Trump em janeiro/2025. A divergência entre blocos cria desafio sério para multinacionais.
        </p>
        <p>
          No Brasil, o PL 2338 cria categorias de risco semelhantes ao AI Act, exige avaliação de impacto algorítmico (AIIA) para sistemas de alto risco e dá à ANPD papel central na fiscalização. Combinado com o art. 20 da LGPD (direito à revisão de decisões automatizadas), o arcabouço já permite ao cidadão exigir explicação sobre decisões de crédito ou triagem por IA. A recomendação prática: começar pelo <strong>inventário de IA</strong> (todas as ferramentas SaaS com "IA" no nome que processam dados de clientes) e nomear um responsável de compliance algorítmico antes que a fiscalização comece.
        </p>
      </EditorialTake>

      <ArticleSources sources={[
        { title: "EU AI Act — Texto Oficial (Regulamento UE 2024/1689)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", publisher: "EUR-Lex", accessedAt: "Maio 2026" },
        { title: "Senado Federal — PL 2338/2023 (Marco Legal da IA)", url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233", publisher: "Senado Federal", accessedAt: "Maio 2026" },
        { title: "ANPD — Autoridade Nacional de Proteção de Dados", url: "https://www.gov.br/anpd/pt-br", publisher: "ANPD", accessedAt: "Maio 2026" },
        { title: "Planalto — LGPD Art. 20 (Lei 13.709/2018)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Planalto", accessedAt: "Maio 2026" },
        { title: "White House — AI Executive Orders Tracker", url: "https://www.whitehouse.gov/ai/", publisher: "White House", accessedAt: "Maio 2026" },
      ]} />

      <RelatedPosts currentSlug="regulamentacao-ia-brasil-mundo-2026" />
      <CommentSection postId="regulamentacao-ia-brasil-mundo-2026" postTitle="Regulamentação de IA no Brasil e no Mundo em 2026: O Que Muda" />
    </article>
  );
};

export default RegulamentacaoIA2026;
