import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, TrendingUp, DollarSign, Shield, BookOpen } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/previdencia-privada-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const PrevidenciaPrivada2026 = () => {
  useEffect(() => {
    trackArticleRead("previdencia-privada-pgbl-vgbl-2026", "Previdência Privada em 2026: PGBL ou VGBL? Guia para Decidir Sem Erro", "invest");
  }, []);
  return (
  <article className="container py-8 max-w-4xl mx-auto">
    <BackNavigation category="invest" />
    <header className="mb-8">
      <CategoryBadge category="invest" size="lg" />
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        Previdência Privada em 2026: PGBL ou VGBL? Guia para Decidir Sem Erro
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>
    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Previdência Privada PGBL VGBL 2026" className="w-full h-full object-cover" />
    </div>
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        Previdência privada é o assunto que mais gera dúvidas entre iniciantes em investimentos. A escolha errada entre <strong>PGBL e VGBL</strong> pode custar milhares de reais em IR desnecessário ao longo de décadas. Este guia explica a diferença de forma definitiva.
      </p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <BookOpen className="h-7 w-7 text-emerald-400" />A Diferença Fundamental: PGBL vs VGBL
      </h2>
      <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
        <div className="bg-card rounded-xl border border-emerald-500/30 p-5">
          <h3 className="font-bold text-xl text-emerald-400 mb-3">PGBL</h3>
          <p className="text-sm text-muted-foreground mb-3">Plano Gerador de Benefício Livre</p>
          <ul className="text-sm space-y-2">
            <li className="flex gap-2"><span className="text-emerald-400 shrink-0">✓</span>Deduz até 12% da renda bruta no IR (modelo completo)</li>
            <li className="flex gap-2"><span className="text-emerald-400 shrink-0">✓</span>IR incide sobre <strong>todo o valor resgatado</strong> (principal + rendimento)</li>
            <li className="flex gap-2"><span className="text-emerald-400 shrink-0">✓</span>Ideal para quem declara no modelo completo</li>
            <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Inútil para quem usa modelo simplificado</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-blue-500/30 p-5">
          <h3 className="font-bold text-xl text-blue-400 mb-3">VGBL</h3>
          <p className="text-sm text-muted-foreground mb-3">Vida Gerador de Benefício Livre</p>
          <ul className="text-sm space-y-2">
            <li className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>Não deduz no IR anual</li>
            <li className="flex gap-2"><span className="text-blue-400 shrink-0">✓</span>IR incide <strong>só sobre os rendimentos</strong></li>
            <li className="flex gap-2"><span className="text-blue-400 shrink-0">✓</span>Indicado para quem usa modelo simplificado</li>
            <li className="flex gap-2"><span className="text-blue-400 shrink-0">✓</span>Melhor para quem já atingiu o limite de 12% de dedução</li>
          </ul>
        </div>
      </div>

      <AdLeaderboard className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <DollarSign className="h-7 w-7 text-emerald-400" />A Regra dos 12%: Quando o PGBL Compensa
      </h2>
      <p>O benefício do PGBL é a dedução de <strong>até 12% da renda bruta tributável</strong> na declaração anual de IR — mas <strong>somente no modelo completo</strong>. Exemplo prático:</p>
      <div className="not-prose my-6 bg-card rounded-xl border border-border p-5 text-sm">
        <p className="font-bold mb-3">Exemplo: renda bruta R$ 10.000/mês = R$ 120.000/ano</p>
        <div className="space-y-2 text-muted-foreground">
          <div className="flex justify-between"><span>Limite de dedução PGBL (12%)</span><span className="font-bold text-foreground">R$ 14.400/ano</span></div>
          <div className="flex justify-between"><span>Alíquota IR na faixa (27,5%)</span><span className="font-bold text-foreground">27,5%</span></div>
          <div className="flex justify-between border-t border-border pt-2"><span className="text-emerald-400 font-bold">Economia no IR no ano</span><span className="font-bold text-emerald-400">R$ 3.960/ano</span></div>
        </div>
        <p className="text-xs mt-3">⚠️ Atenção: no resgate, você paga IR sobre o total — então o benefício é um diferimento, não isenção. Mas o dinheiro que seria do fisco rende por mais anos dentro do plano.</p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6">Tributação no Resgate: Progressiva vs Regressiva</h2>
      <p>Independente de ser PGBL ou VGBL, você escolhe o <strong>regime de tributação</strong> na contratação. Esta é uma decisão irreversível:</p>
      <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-bold mb-3">📈 Tabela Progressiva</h3>
          <p className="text-sm text-muted-foreground mb-3">Mesmas faixas do IR normal (0% a 27,5%)</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>• Melhor se planejamento de renda baixa na aposentadoria</li>
            <li>• Resgate pode ser isento se renda ficar abaixo do mínimo</li>
            <li>• Menos previsível — depende da legislação futura</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
          <h3 className="font-bold mb-3">📉 Tabela Regressiva</h3>
          <p className="text-sm text-muted-foreground mb-3">Alíquota cai com o tempo de permanência</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>• 35% até 2 anos → 10% após 10 anos</li>
            <li>• <strong className="text-emerald-400">Melhor para maioria</strong> que investe por 10+ anos</li>
            <li>• Previsível — regra já estabelecida em contrato</li>
          </ul>
        </div>
      </div>

      <AdRectangle className="my-8" />

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Shield className="h-7 w-7 text-emerald-400" />Taxa de Administração: O Vilão Silencioso
      </h2>
      <p>A taxa de administração é o custo anual do plano e tem impacto enorme no longo prazo. Compare:</p>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
          <thead><tr className="bg-secondary">
            <th className="text-left py-3 px-4">Taxa Admin.</th>
            <th className="text-left py-3 px-4">R$100k em 20 anos (8% a.a. bruto)</th>
            <th className="text-left py-3 px-4">Impacto</th>
          </tr></thead>
          <tbody>
            {[
              ["0,50% a.a.", "R$ 380.000", "Excelente — bancos digitais"],
              ["1,00% a.a.", "R$ 320.000", "Bom — fintechs e corretoras"],
              ["2,00% a.a.", "R$ 230.000", "Cuidado — grandes bancos"],
              ["3,00% a.a.", "R$ 170.000", "Evite — prejudica fortemente"],
            ].map(([taxa, val, imp]) => (
              <tr key={taxa} className="border-t border-border">
                <td className="py-3 px-4 font-bold">{taxa}</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">{val}</td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{imp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-muted-foreground mt-2">Simulação simplificada — não considera IR no resgate.</p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Guia Rápido de Decisão</h2>
      <ul>
        <li>✅ <strong>Declara IR modelo completo + renda alta?</strong> → PGBL, tabela regressiva, taxa {'<'} 1%</li>
        <li>✅ <strong>Declara modelo simplificado?</strong> → VGBL, tabela regressiva, taxa {'<'} 1%</li>
        <li>✅ <strong>Já atingiu 12% de renda em PGBL?</strong> → Complemento em VGBL</li>
        <li>❌ <strong>Taxa de administração {'>'} 2%?</strong> → Busque outra opção — quase qualquer alternativa é melhor</li>
      </ul>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Você já tem previdência privada?</h3>
        <p className="text-muted-foreground">Compartilhe sua experiência nos comentários! 👇</p>
      </div>
    </div>

    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "CDB em 2026", href: "/post/cdb-2026-guia-completo", desc: "Para complementar com liquidez diária" },
          { label: "Planejamento Financeiro 2026", href: "/post/planejamento-financeiro-2026-metas", desc: "Como encaixar a previdência na sua estratégia" },
          { label: "IRPF 2026", href: "/post/irpf-2026-guia-declarar-pagar-menos", desc: "Como declarar PGBL e VGBL no imposto de renda" },
        ]}
      />
      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="previdencia-privada-2026" />
    <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="previdencia-privada-2026" postTitle="Previdência Privada 2026: PGBL ou VGBL?" />
  </article>
);
};

export default PrevidenciaPrivada2026;
