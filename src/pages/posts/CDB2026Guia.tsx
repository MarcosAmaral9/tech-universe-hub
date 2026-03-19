import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { useSmartBack } from "@/hooks/useSmartBack";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, TrendingUp, DollarSign, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import RelatedTopics from "@/components/RelatedTopics";
import heroImg from "@/assets/cdb-2026-guia.webp";

const CDB2026Guia = () => (
  <article className="container py-8 max-w-4xl mx-auto">
    <button onClick={goBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Voltar para Finanças
      </button>
    <header className="mb-8">
      <CategoryBadge category="invest" size="lg" />
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
        CDB em 2026: Ainda Vale a Pena? Guia Completo com Taxas Reais
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
        <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
      </div>
      <ShareWhatsApp />
    </header>

    <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
      <img fetchpriority="high" src={heroImg} alt="CDB 2026 — guia completo de investimento" className="w-full h-full object-cover" />
    </div>

    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="lead text-xl text-muted-foreground">
        O <strong>CDB (Certificado de Depósito Bancário)</strong> é um dos investimentos de renda fixa mais populares do Brasil. Com a Selic em patamar elevado em 2026, o CDB voltou a oferecer retornos atrativos — mas escolher mal pode custar caro em impostos ou liquidez. Este guia explica tudo com números reais.
      </p>

      <div className="not-prose my-8 p-6 bg-gradient-to-br from-emerald-500/10 to-background rounded-xl border border-emerald-500/30">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><DollarSign className="h-5 w-5 text-emerald-400" />O que é um CDB?</h2>
        <p className="text-muted-foreground text-sm">
          Um CDB é essencialmente um empréstimo que você faz ao banco. Em troca, o banco paga juros sobre o valor investido. Diferente da poupança, o CDB tem rentabilidade atrelada geralmente ao <strong>CDI (Certificado de Depósito Interbancário)</strong>, que acompanha de perto a taxa Selic. É protegido pelo <strong>FGC (Fundo Garantidor de Créditos)</strong> até R$ 250.000 por CPF por instituição.
        </p>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <TrendingUp className="h-7 w-7 text-emerald-400" />Como Funciona a Rentabilidade
      </h2>
      <p>A maioria dos CDBs remunera como <strong>percentual do CDI</strong>. Com o CDI próximo a 13,65% ao ano em março de 2026, vejamos o impacto do percentual:</p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
          <thead><tr className="bg-secondary">
            <th className="text-left py-3 px-4 font-bold">% do CDI</th>
            <th className="text-left py-3 px-4 font-bold">Rentabilidade bruta/ano</th>
            <th className="text-left py-3 px-4 font-bold">Após IR 15% ({'>'} 2 anos)</th>
            <th className="text-left py-3 px-4 font-bold">Onde encontrar</th>
          </tr></thead>
          <tbody>
            {[
              ["80% CDI",  "10,92%", "9,28%",  "Grandes bancos (Bradesco, Itaú)"],
              ["100% CDI", "13,65%", "11,60%", "Bancos médios e corretoras"],
              ["110% CDI", "15,02%", "12,77%", "Fintechs e bancos digitais"],
              ["120% CDI", "16,38%", "13,92%", "Bancos menores (risco maior)"],
            ].map(([pct, bruto, liq, onde]) => (
              <tr key={pct} className="border-t border-border">
                <td className="py-3 px-4 font-bold text-emerald-400">{pct}</td>
                <td className="py-3 px-4">{bruto}</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">{liq}</td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{onde}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-muted-foreground mt-2">⚠️ Baseado no CDI de 13,65% a.a. (março/2026). Consulte a taxa atual antes de investir.</p>
      </div>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <Shield className="h-7 w-7 text-emerald-400" />Imposto de Renda no CDB
      </h2>
      <p>O CDB tem incidência de <strong>Imposto de Renda regressivo</strong> sobre os rendimentos. Quanto mais tempo você mantiver o investimento, menor o imposto:</p>
      <div className="not-prose my-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ["Até 180 dias", "22,5%", "bg-red-500/10 border-red-500/30 text-red-400"],
          ["181 a 360 dias", "20%", "bg-orange-500/10 border-orange-500/30 text-orange-400"],
          ["361 a 720 dias", "17,5%", "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"],
          ["Acima de 720 dias", "15%", "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"],
        ].map(([prazo, ir, cls]) => (
          <div key={prazo} className={`rounded-xl border p-4 ${cls}`}>
            <div className="text-xs text-muted-foreground mb-1">{prazo}</div>
            <div className="text-2xl font-black">{ir}</div>
          </div>
        ))}
      </div>
      <p>Isso significa que <strong>nunca vale resgatar um CDB com menos de 6 meses</strong> — você paga a maior alíquota e ainda perde tempo de juros compostos.</p>

      <h2 className="text-2xl font-bold mt-10 mb-6">CDB vs Outras Rendas Fixas</h2>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
          <thead><tr className="bg-secondary">
            <th className="text-left py-3 px-4 font-bold">Investimento</th>
            <th className="text-left py-3 px-4 font-bold">Rentabilidade ref.</th>
            <th className="text-left py-3 px-4 font-bold">IR</th>
            <th className="text-left py-3 px-4 font-bold">FGC</th>
            <th className="text-left py-3 px-4 font-bold">Liquidez</th>
          </tr></thead>
          <tbody>
            {[
              ["CDB 110% CDI", "15,02% a.a.", "15–22,5%", "Sim (até R$250k)", "Depende do prazo"],
              ["Tesouro Selic", "~Selic 14,25%", "15–22,5%", "Governo Federal", "Diária"],
              ["LCI/LCA", "95–100% CDI", "Isento", "Sim (até R$250k)", "Carência mínima"],
              ["Poupança", "~0,5%/mês", "Isento", "Sim (até R$250k)", "Mensal"],
            ].map(([inv, rent, ir, fgc, liq]) => (
              <tr key={inv} className="border-t border-border">
                <td className="py-3 px-4 font-medium">{inv}</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">{rent}</td>
                <td className="py-3 px-4 text-muted-foreground">{ir}</td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{fgc}</td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{liq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Nota importante: a <strong>LCI e LCA são isentas de IR</strong>, o que as torna mais rentáveis do que parece na comparação bruta — um CDB precisa pagar mais que 100% do CDI para superar uma LCI a 95% do CDI para prazos acima de 2 anos.</p>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <AlertTriangle className="h-7 w-7 text-yellow-400" />Riscos do CDB
      </h2>
      <ul>
        <li><strong>Risco de crédito:</strong> se o banco falir, o FGC cobre até R$250.000 por CPF por instituição — acima disso, você pode perder o excedente.</li>
        <li><strong>Risco de liquidez:</strong> CDBs com carência não permitem resgate antecipado sem penalidades. Confira sempre as condições.</li>
        <li><strong>Inflação:</strong> em cenários de inflação alta, o retorno real pode ser menor do que parece. IPCA+ pode ser mais indicado nesses casos.</li>
      </ul>

      <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
        <CheckCircle className="h-7 w-7 text-emerald-400" />Quando o CDB Vale a Pena em 2026
      </h2>
      <ul>
        <li>✅ Você tem <strong>reserva de emergência</strong> e quer rentabilizar o restante</li>
        <li>✅ Busca <strong>liquidez diária</strong> com rendimento acima da poupança (CDB 100% CDI com liquidez diária)</li>
        <li>✅ Tem <strong>horizonte de 2+ anos</strong> e quer pagar a menor alíquota de IR</li>
        <li>✅ Quer <strong>diversificar entre bancos</strong> respeitando o limite do FGC</li>
        <li>❌ Precisará do dinheiro em menos de 6 meses (prefira Tesouro Selic)</li>
        <li>❌ Quer isento de IR (prefira LCI, LCA ou Tesouro IPCA+ para longo prazo)</li>
      </ul>

      <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
        <h3 className="text-xl font-bold mb-2">Qual o seu perfil de investidor?</h3>
        <p className="text-muted-foreground">Conta pra gente nos comentários e tire suas dúvidas! 👇</p>
      </div>
    </div>

    
      <RelatedTopics
        title="Leia também"
        links={[
          { label: "Previdência Privada: PGBL ou VGBL?", href: "/post/previdencia-privada-pgbl-vgbl-2026", desc: "Para investimentos de longo prazo com vantagem fiscal" },
          { label: "Tesouro Direto 2026", href: "/post/tesouro-direto-2026-guia-completo", desc: "Compare o CDB com o Tesouro Selic" },
          { label: "ETFs em 2026", href: "/post/etfs-2026-guia-completo-investir", desc: "Para quem quer diversificar além da renda fixa" },
          { label: "Cotações ao Vivo", href: "/cotacoes", desc: "Acompanhe CDI e Selic em tempo real" },
        ]}
      />
      <RelatedPosts currentSlug="cdb-2026-guia-completo" category="invest" />
    <CommentSection postId="cdb-2026-guia-completo" postTitle="CDB em 2026: Guia Completo" />
  </article>
);
export default CDB2026Guia;
