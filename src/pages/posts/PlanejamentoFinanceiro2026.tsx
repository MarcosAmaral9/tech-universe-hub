import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, Calendar, User, ChevronRight,
  Target, CheckCircle2, CalendarDays,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import planejamentoImg from "@/assets/planejamento-financeiro-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

/* ── SMART Goal Builder ─────────────────────────────────────── */
const SmartGoalBuilder = () => {
  const [specific, setSpecific] = useState("");
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");

  const monthsLeft = useMemo(() => {
    if (!deadline) return 0;
    const target = new Date(deadline + "T12:00:00");
    const now = new Date();
    const diff =
      (target.getFullYear() - now.getFullYear()) * 12 +
      (target.getMonth() - now.getMonth());
    return Math.max(diff, 1);
  }, [deadline]);

  const monthlyAmount =
    value && monthsLeft ? Number(value) / monthsLeft : 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Criador de Meta SMART
      </h3>
      <div className="space-y-3 mb-4">
        <div>
          <label className="text-sm text-muted-foreground">
            O que você quer alcançar? (Específico)
          </label>
          <input
            value={specific}
            onChange={e => setSpecific(e.target.value)}
            placeholder="Ex: Reserva de emergência"
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground">
              Valor em R$ (Mensurável)
            </label>
            <input
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="15000"
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">
              Prazo (Temporal)
            </label>
            <input
              type="date"
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm mt-1"
            />
          </div>
        </div>
      </div>
      {specific && value && deadline && (
        <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-4">
          <p className="text-sm font-bold mb-2 text-[hsl(var(--invest-color))]">
            Sua Meta SMART:
          </p>
          <p className="text-sm text-muted-foreground">
            "Quero ter{" "}
            <strong>
              R$ {Number(value).toLocaleString("pt-BR")}
            </strong>{" "}
            para <strong>{specific}</strong> até{" "}
            <strong>
              {new Date(deadline + "T12:00:00").toLocaleDateString("pt-BR")}
            </strong>
            , guardando{" "}
            <strong>
              R${" "}
              {monthlyAmount.toLocaleString("pt-BR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              /mês
            </strong>
            ."
          </p>
        </div>
      )}
    </div>
  );
};

/* ── Day Counter ─────────────────────────────────────────────── */
const DayCounter = () => {
  const now = new Date();
  const endOfYear = new Date(2026, 11, 31);
  const startOfYear = new Date(2026, 0, 1);
  const totalDays = Math.ceil(
    (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysPassed = Math.ceil(
    (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.max(totalDays - daysPassed, 0);
  const progress = Math.min((daysPassed / totalDays) * 100, 100);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-center">
      <CalendarDays className="h-8 w-8 text-[hsl(var(--invest-color))] mx-auto mb-2" />
      <p className="text-sm text-muted-foreground mb-1">
        Dias restantes em 2026:
      </p>
      <p className="text-4xl font-bold text-[hsl(var(--invest-color))]">
        {daysLeft}
      </p>
      <div className="w-full h-3 bg-muted rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        {progress.toFixed(0)}% do ano já passou
      </p>
    </div>
  );
};

/* ── Goal Checklist ──────────────────────────────────────────── */
const GoalChecklist = () => {
  const categories = [
    {
      name: "Proteção",
      items: [
        "Reserva de emergência completa",
        "Seguro de vida (se tiver dependentes)",
        "Plano de saúde adequado",
      ],
    },
    {
      name: "Eliminar Dívidas",
      items: [
        "Quitar cartão de crédito",
        "Limpar nome no Serasa",
        "Renegociar parcelas",
      ],
    },
    {
      name: "Médio Prazo (1–5 anos)",
      items: [
        "Viagem dos sonhos",
        "Troca de carro",
        "Curso de especialização",
      ],
    },
    {
      name: "Longo Prazo (5+ anos)",
      items: [
        "Aposentadoria",
        "Imóvel próprio",
        "Independência financeira",
      ],
    },
    {
      name: "Legado",
      items: [
        "Herança para filhos",
        "Impacto social",
        "Empresa familiar",
      ],
    },
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("goal-checklist-2026") || "{}"
      );
    } catch {
      return {};
    }
  });

  const toggle = (key: string) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    localStorage.setItem("goal-checklist-2026", JSON.stringify(next));
  };

  const totalItems = categories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-2">✅ Checklist de Metas 2026</h3>
      <p className="text-xs text-muted-foreground mb-4">
        {checkedCount}/{totalItems} concluídas — progresso salvo automaticamente
      </p>
      <div className="w-full h-2 bg-muted rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-[hsl(var(--invest-color))] rounded-full transition-all"
          style={{ width: `${(checkedCount / totalItems) * 100}%` }}
        />
      </div>
      {categories.map(cat => (
        <div key={cat.name} className="mb-4">
          <h4 className="text-sm font-bold text-[hsl(45,100%,50%)] mb-2">
            {cat.name}
          </h4>
          {cat.items.map(item => {
            const key = `${cat.name}-${item}`;
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="flex items-center gap-2 w-full text-left py-1.5 text-sm"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    checked[key]
                      ? "bg-[hsl(var(--invest-color))] border-[hsl(var(--invest-color))]"
                      : "border-muted-foreground"
                  }`}
                >
                  {checked[key] && (
                    <CheckCircle2 className="h-3 w-3 text-background" />
                  )}
                </div>
                <span
                  className={
                    checked[key]
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }
                >
                  {item}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────── */
const PlanejamentoFinanceiro2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "planejamento-financeiro-2026-metas",
      "Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las",
      "invest"
    );
  }, []);

  const yearlyRoadmap = [
    { month: "Jan",     action: "Levantamento completo: quanto ganho, gasto e devo. Nenhuma meta sem diagnóstico.", icon: "📊" },
    { month: "Fev",     action: "Corte de gastos, renegociação de contratos e configuração do sistema automático de aportes.", icon: "✂️" },
    { month: "Mar",     action: "Sistema automático funcionando: transferência automática para investimentos no dia do salário.", icon: "⚙️" },
    { month: "Abr–Set", action: "Execução e acompanhamento mensal. Relatório rápido de 15 min no fim de cada mês.", icon: "📈" },
    { month: "Out",     action: "Revisão semestral obrigatória. O que funcionou? O que precisa ajustar para o trimestre final?", icon: "🔍" },
    { month: "Nov–Dez", action: "Preparação para 2027: IRPF, 13º salário, planejamento tributário e definição de metas do próximo ano.", icon: "🎯" },
  ];

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            to="/financas"
            className="hover:text-foreground transition-colors"
          >
            Finanças
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Planejamento Financeiro 2026</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              Educação Financeira · Metas · Organização
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            O <strong>planejamento financeiro em 2026</strong> não começa com
            planilhas — começa com método. Pesquisas da Dominican University
            mostram que quem escreve metas e revisa trimestralmente tem{" "}
            <strong>73% de taxa de sucesso</strong> contra 23% de quem só define
            objetivos mentalmente. Este guia ensina o método SMART, o roadmap
            mensal e a mentalidade que separa os 8% que realmente alcançam suas
            metas dos 92% que desistem até fevereiro.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" /> VICIO&lt;CODE&gt;
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> 24 Fev 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> 11 min de leitura
            </span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            fetchpriority="high"
            src={planejamentoImg}
            alt="Planejamento Financeiro 2026 — metas SMART e método científico"
            className="w-full aspect-video object-cover"
            loading="eager"
          />
        </div>

        {/* Contador de dias */}
        <DayCounter />

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Pesquisas mostram que{" "}
            <strong>
              92% das pessoas abandonam suas resoluções de ano novo até fevereiro
            </strong>
            . O problema quase nunca é falta de vontade — é falta de método. O{" "}
            <strong>planejamento financeiro para 2026</strong> precisa ser tratado
            como um projeto: com diagnóstico inicial, sistema automático, revisão
            periódica e celebração de marcos. Não como uma promessa genérica de
            "economizar mais".
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O contexto macro de 2026 torna o planejamento ainda mais urgente: o
            Boletim Focus do Banco Central projeta IPCA na faixa de 3,5–4,5% e
            Selic em queda gradual ao longo do ano. Isso significa que qualquer
            meta financeira precisa considerar reajuste pela inflação — e que as
            condições de investimento estão mudando, tornando a escolha dos
            produtos certos tão importante quanto a disciplina de guardar dinheiro.
          </p>
        </div>

        {/* Por que as metas falham */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Por Que 92% das Metas Financeiras Falham
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Antes de criar novas metas, é fundamental entender por que as
            anteriores não funcionaram. Os quatro sabotadores mais comuns:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: "Metas vagas e sem número",
                desc: "'Economizar mais' não é meta. É desejo. 'Guardar R$ 800/mês até dezembro' é meta — tem valor, prazo e é mensurável.",
              },
              {
                title: "Sem sistema automático",
                desc: "Metas dependem de sistema, não de força de vontade. Quem transfere manualmente economiza menos do que quem automatiza.",
              },
              {
                title: "Metas inalcançáveis logo de início",
                desc: "Metas impossíveis geram abandono rápido. Começar com 5% do salário e aumentar gradualmente é mais eficaz que 30% desde o início.",
              },
              {
                title: "Sem revisão periódica",
                desc: "O que não é medido não é gerenciado. Quem revisa metas trimestralmente tem 3× mais chances de atingi-las (Dominican University, Dr. Gail Matthews).",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-destructive/5 border border-destructive/20 rounded-xl p-4"
              >
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SMART Goal Builder */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Crie Sua Meta SMART para 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            O método SMART (Specific, Measurable, Achievable, Relevant,
            Time-bound) foi formalizado por George T. Doran em 1981 e é o padrão
            recomendado por planejadores financeiros certificados (CFP) no Brasil e
            no mundo. Use o criador abaixo para transformar seu desejo em meta:
          </p>
          <SmartGoalBuilder />
        </section>

        {/* Roadmap anual */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Roadmap do Ano: O Que Fazer em Cada Mês de 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Um plano financeiro anual sem calendário é só uma lista de desejos.
            Veja o que fazer em cada fase do ano:
          </p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[hsl(var(--invest-color))]/30" />
            {yearlyRoadmap.map((step, i) => (
              <div key={i} className="relative pl-12 pb-6">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[hsl(var(--invest-color))] border-4 border-background" />
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.icon}</span>
                    <span className="text-xs text-[hsl(var(--invest-color))] font-mono font-bold">
                      {step.month}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdInArticle />

        {/* Goal Checklist */}
        <GoalChecklist />

        {/* Mentalidade */}
        <section className="mb-10">
          <AdRectangle className="my-8" />
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            A Mentalidade Que Funciona em 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Finanças pessoais são 80% comportamento e 20% conhecimento técnico.
            Cinco hábitos mentais que diferenciam quem alcança metas financeiras:
          </p>
          <div className="space-y-3">
            {[
              "Automatizar tudo o que for possível — tire o esforço e a decisão diária da equação",
              "Criar fricção para gastos ruins (delete apps de delivery, remova cartão salvo no site)",
              "Criar facilidade para comportamentos bons (aportes automáticos, lembretes de revisão)",
              "Celebrar pequenas vitórias — meta atingida merece comemoração planejada e proporcional",
              "Encontrar uma comunidade — fóruns, grupos de finanças, parceiro de accountability",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4"
              >
                <span className="text-[hsl(var(--invest-color))] font-bold shrink-0">
                  {i + 1}.
                </span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contexto macro 2026 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Planejamento Financeiro no Contexto Macro de 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            O cenário econômico de 2026 tem impacto direto na escolha dos produtos
            financeiros para cada objetivo:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                titulo: "Selic em queda gradual",
                desc: "A Selic começa 2026 em 14,25% e deve encerrar o ano entre 10–12%. Isso favorece CDB e Tesouro Prefixado para quem trava a taxa agora, e FIIs de tijolo conforme os juros recuam.",
              },
              {
                titulo: "IPCA projetado em 3,5–4,5%",
                desc: "Toda meta financeira deve ser corrigida pela inflação. R$ 50.000 hoje equivalem a ~R$ 52.000–52.250 daqui a 12 meses. Tesouro IPCA+ protege o poder de compra no longo prazo.",
              },
              {
                titulo: "13º salário como catalisador",
                desc: "Novembro e dezembro concentram 13º, PLR e bônus. Destine pelo menos 50% desses recursos extras para acelerar metas — quitar dívidas, completar reserva ou fazer aporte extra.",
              },
              {
                titulo: "IR 2026: entrega até abril/2027",
                desc: "Organize ao longo do ano os comprovantes de investimento, doações e despesas dedutíveis. Quem planeja o IR o ano todo paga menos do que quem corre no prazo.",
              },
            ].map(({ titulo, desc }) => (
              <div
                key={titulo}
                className="bg-card border border-border rounded-xl p-4"
              >
                <h3 className="font-bold text-sm text-[hsl(var(--invest-color))] mb-2">
                  {titulo}
                </h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusão */}
        <section className="mb-10">
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold mb-3">
              O melhor momento para começar era ontem.
            </h2>
            <p className="text-lg text-muted-foreground">
              O segundo melhor momento é{" "}
              <strong className="text-[hsl(var(--invest-color))]">agora</strong>.
            </p>
          </div>
        </section>

        {/* Resumo */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo do Artigo</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "92% das resoluções falham por falta de método, não de vontade",
                "Use metas SMART: Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais",
                "Siga o roadmap mensal para manter consistência o ano todo — cada mês tem uma prioridade",
                "Automatize comportamentos bons e crie fricção para os gastos ruins",
                "Revise trimestralmente: quem revisa 4× por ano alcança a meta em 73% dos casos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[hsl(var(--invest-color))]">✓</span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "planejamento financeiro",
            "metas 2026",
            "educação financeira",
            "SMART",
            "economizar dinheiro",
            "organização financeira",
          ].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        <BackNavigation category="invest" />

        <EditorialTake
          category="invest"
          title="Análise do Marcos: planejamento financeiro é projeto, não resolução de ano novo"
        >
          <p>
            O método SMART foi formalizado por George T. Doran em 1981 (Management
            Review) e segue sendo o padrão recomendado por planejadores financeiros
            certificados (CFP). No Brasil, a ANBIMA exige conhecimento da técnica
            nas certificações CPA-10 e CPA-20. Para 2026, o Boletim Focus do Banco
            Central projeta IPCA na faixa de 3,5–4,5% e Selic entre 10–12% no fim
            do ano — o que significa que qualquer meta financeira precisa considerar
            reajuste pela inflação.
          </p>
          <p className="mt-2">
            Minha análise: o erro mais comum não é definir metas erradas — é não
            revisá-las. Recomendo revisão trimestral obrigatória com planilhas
            simples (Google Sheets) ou apps como Mobills, Organizze e Guiabolso
            (todos com versão gratuita funcional). Segundo pesquisa da Dominican
            University da Dra. Gail Matthews,{" "}
            <strong>
              quem escreve as metas, compartilha com alguém e envia relatórios de
              progresso semanais atinge os objetivos em 76% dos casos
            </strong>{" "}
            — versus 43% de quem apenas pensa nas metas sem registrar. Finanças
            pessoais são 80% comportamento e 20% conhecimento técnico. Mude o
            sistema, não apenas o esforço.
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "ANBIMA — Educação e Certificações Financeiras (CPA-10, CPA-20, CFP)",
              url: "https://www.anbima.com.br/pt_br/educar/certificacoes/",
              publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
              accessedAt: "Maio 2026",
            },
            {
              title: "Boletim Focus — Expectativas de Mercado (IPCA e Selic)",
              url: "https://www.bcb.gov.br/publicacoes/focus",
              publisher: "Banco Central do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "IBGE — IPCA: Índice de Preços ao Consumidor Amplo",
              url: "https://www.ibge.gov.br/explica/inflacao.php",
              publisher: "IBGE — Instituto Brasileiro de Geografia e Estatística",
              accessedAt: "Maio 2026",
            },
            {
              title: "Goals Research Summary — Dr. Gail Matthews",
              url: "https://www.dominican.edu/sites/default/files/2020-02/gailmatthews-harvard-goals-researchsummary.pdf",
              publisher: "Dominican University of California",
              accessedAt: "Maio 2026",
            },
            {
              title: "CVM — Portal do Investidor: Planejamento Financeiro",
              url: "https://www.investidor.gov.br/menu/Menu_Investidor/planejamento_financeiro/planejamento_financeiro_introducao.html",
              publisher: "Comissão de Valores Mobiliários (CVM)",
              accessedAt: "Maio 2026",
            },
            {
              title: "Receita Federal — Declaração IRPF: Calendário e Obrigações",
              url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/declaracao",
              publisher: "Receita Federal do Brasil",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="planejamento-financeiro-2026-metas" />
        <CommentSection
          postId="planejamento-financeiro-2026-metas"
          postTitle="Planejamento Financeiro Para 2026: Como Definir Metas e Realmente Alcançá-las"
         category="invest" />
      </article>
    </>
  );
};

export default PlanejamentoFinanceiro2026;
