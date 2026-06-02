import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, Calendar, User, ChevronRight, Zap, Brain, Smartphone, CheckCircle2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Slider } from "@/components/ui/slider";
import metodo3BaldesImg from "@/assets/metodo-3-baldes.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

// Calculadora dos 3 Baldes
const BucketCalculator = ({ salary, setSalary }: { salary: number; setSalary: (v: number) => void }) => {
  const necessidades = salary * 0.55;
  const investimentos = salary * 0.25;
  const qualidade = salary * 0.20;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Calculadora dos 3 Baldes
      </h3>
      <label className="text-sm text-muted-foreground mb-2 block">
        Seu salário mensal: <strong className="text-foreground">R$ {salary.toLocaleString("pt-BR")}</strong>
      </label>
      <Slider
        min={1000}
        max={30000}
        step={100}
        value={[salary]}
        onValueChange={v => setSalary(v[0])}
        className="mb-6"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Necessidades (55%)", value: necessidades, color: "hsl(var(--invest-color))", emoji: "🏠" },
          { label: "Investimentos (25%)", value: investimentos, color: "hsl(45,100%,50%)", emoji: "📈" },
          { label: "Qualidade de Vida (20%)", value: qualidade, color: "hsl(280,100%,65%)", emoji: "🎉" },
        ].map((b, i) => (
          <div key={i} className="text-center p-4 rounded-xl border border-border bg-background">
            <div className="text-3xl mb-2">{b.emoji}</div>
            <div className="text-xs text-muted-foreground mb-1">{b.label}</div>
            <div className="text-2xl font-bold" style={{ color: b.color }}>
              R$ {b.value.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Se Necessidades estiver acima de 60% do salário, você tem um problema estrutural que precisa ser resolvido antes — reveja moradia, transporte e planos.
      </p>
    </div>
  );
};

// Quiz de Comportamento Financeiro
const BehaviorQuiz = () => {
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    { q: "Quando recebe o salário, você:", a: ["Paga as contas e gasta o resto", "Guarda um pouco e gasta o resto", "Investe primeiro e vive com o que sobra"] },
    { q: "Compra não planejada de R$ 300:", a: ["Compro na hora", "Penso um pouco mas compro", "Espero 24h antes de decidir"] },
    { q: "Fim do mês:", a: ["Sempre no vermelho", "Empata", "Sempre sobra algo"] },
    { q: "Investimentos:", a: ["Não invisto nada", "Só poupança", "Tenho carteira diversificada"] },
    { q: "Controle financeiro:", a: ["Não faço nenhum", "Anoto às vezes", "Uso app ou planilha todo mês"] },
  ];

  const result = useMemo(() => {
    if (answers.length < 5) return null;
    const score = answers.reduce((a, b) => a + b, 0);
    if (score <= 5) return { title: "Gastador Impulsivo 🔴", desc: "Você precisa urgentemente do Método dos 3 Baldes. A boa notícia: é o perfil que mais se beneficia dele!" };
    if (score <= 10) return { title: "Em Transição 🟡", desc: "Você tem noções mas falta sistema. Os 3 Baldes vão organizar o que já está quase funcionando." };
    return { title: "Disciplinado 🟢", desc: "Você já tem bons hábitos! Os 3 Baldes podem otimizar ainda mais sua distribuição." };
  }, [answers]);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Brain className="h-5 w-5 text-[hsl(var(--invest-color))]" />
        Teste de Comportamento Financeiro
      </h3>
      {questions.map((q, qi) => (
        <div key={qi} className="mb-4">
          <p className="text-sm font-medium mb-2">{qi + 1}. {q.q}</p>
          <div className="grid gap-2">
            {q.a.map((a, ai) => (
              <button
                key={ai}
                onClick={() => { const n = [...answers]; n[qi] = ai; setAnswers(n); }}
                className={`text-left text-sm px-4 py-2 rounded-lg border transition-all ${
                  answers[qi] === ai
                    ? "border-[hsl(var(--invest-color))] bg-[hsl(var(--invest-color))]/10"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      ))}
      {result && (
        <div className="mt-4 p-4 rounded-xl bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30">
          <h4 className="font-bold text-lg">{result.title}</h4>
          <p className="text-sm text-muted-foreground">{result.desc}</p>
        </div>
      )}
    </div>
  );
};

const EducacaoFinanceira3Baldes = () => {
  const [salary, setSalary] = useState(3000);

  useEffect(() => {
    trackArticleRead(
      "educacao-financeira-metodo-3-baldes",
      "Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo",
      "invest"
    );
  }, []);

  const timelineSteps = [
    { period: "Mês 1–3",  title: "Mapeamento",  desc: "Ajuste inicial e categorização dos gastos. Vai ser desconfortável descobrir para onde vai o dinheiro — é assim mesmo." },
    { period: "Mês 3–6",  title: "Automático",  desc: "O sistema roda sozinho. Você para de pensar em dinheiro todo dia. A ansiedade financeira reduz visivelmente." },
    { period: "Mês 6–12", title: "Reserva",     desc: "Reserva de emergência de 3–6 meses formada. Primeiro grande marco de segurança financeira real." },
    { period: "Ano 2–3",  title: "Crescimento", desc: "Juros compostos começam a fazer diferença visível no extrato. O patrimônio cresce por si mesmo." },
    { period: "Ano 5",    title: "Liberdade",   desc: "Posição financeira top 20% da população brasileira. Você tem escolhas que a maioria não tem." },
  ];

  return (
    <>
      <article className="container py-8 max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Método dos 3 Baldes</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category="invest" size="lg" />
            <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
              Educação Financeira · Finanças Pessoais · Iniciantes
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 mt-4">
            Educação Financeira Para Quem Sempre Gastou Tudo: O Método dos 3 Baldes
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            A <strong>educação financeira</strong> não começa com produtos de investimento — começa com comportamento. Se você chega no fim do mês sem dinheiro independente de quanto ganha, este artigo é para você. O <strong>Método dos 3 Baldes</strong> é simples, funciona para qualquer salário e, segundo dados da ANBIMA, ataca diretamente o problema de 64% dos brasileiros que não conseguem poupar mensalmente.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> VICIO&lt;CODE&gt;</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 21 Fev 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 11 min de leitura</span>
          </div>
          <ShareWhatsApp />
          <AuthorBio category="invest" />
        </header>

        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            fetchpriority="high"
            src={metodo3BaldesImg}
            alt="Método dos 3 Baldes — educação financeira para quem sempre gastou tudo"
            className="w-full aspect-video object-cover"
            loading="eager"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Existe uma mentira que o sistema financeiro te vende: que você precisa ganhar mais para economizar. <strong>Não é verdade.</strong> O relatório Raio-X do Investidor Brasileiro da ANBIMA mostra que 64% dos brasileiros não conseguem poupar mensalmente — e a maioria desses não é de baixa renda. A maioria dos problemas financeiros não é de renda — é de <strong>comportamento</strong>. E comportamento pode ser mudado com o sistema certo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O <strong>Método dos 3 Baldes</strong> é inspirado nas pesquisas de finanças comportamentais — em especial nos trabalhos de Daniel Kahneman sobre vieses cognitivos e tomada de decisão — e foi adaptado para a realidade brasileira de 2026. O princípio é radical na simplicidade: <em>divida o dinheiro em três destinos fixos antes de gastar um centavo</em>.
          </p>
        </div>

        {/* Por que você gasta tudo */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            A Ciência Por Trás de Gastar Tudo Que Ganha
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Antes de aplicar qualquer método, é importante entender por que seu cérebro sabota seus planos financeiros. Não é fraqueza — é neurologia:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Adaptação Hedônica", desc: "Seu cérebro se adapta ao conforto rapidamente. Salário sobe? Padrão de gastos sobe junto em semanas. Por isso aumentar a renda sem mudar o sistema não resolve.", emoji: "🧠" },
              { title: "Mental Accounting", desc: "Tratamos dinheiro de formas diferentes dependendo de como ele chegou. Salário é 'sagrado', bônus é 'para gastar'. O método dos 3 baldes elimina essa distinção.", emoji: "💰" },
              { title: "Viés do Presente", desc: "Prazer imediato vale mais que recompensa futura no cérebro humano. É por isso que largar o café caro de manhã é difícil mesmo sabendo que economizaria R$ 150/mês.", emoji: "⏰" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold mb-2 text-[hsl(45,100%,50%)] text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O Método */}
        <section className="mb-10">
          <AdLeaderboard className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            O Método dos 3 Baldes: Como Funciona
          </h2>
          <p className="text-muted-foreground text-sm mb-5">
            A lógica é simples: no dia em que o salário cai na conta, você divide automaticamente em três "baldes" — três contas ou categorias com percentuais fixos. A ordem de preenchimento importa: <strong>Investimentos primeiro, depois Necessidades, Qualidade de Vida por último</strong>.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                balde: "🏠 Balde 1: NECESSIDADES",
                pct: "50–60%",
                desc: "Moradia, alimentação básica, transporte, contas obrigatórias, plano de saúde. Se esse balde está acima de 60% do salário, você tem um problema estrutural — antes de investir, precisa reduzir custos fixos.",
                color: "hsl(var(--invest-color))",
              },
              {
                balde: "📈 Balde 2: INVESTIMENTOS",
                pct: "20–30%",
                desc: "Sagrado. É o primeiro a ser preenchido — configure transferência automática para uma conta de investimentos no dia do pagamento. Tesouro Selic para reserva, CDB ou ETFs para objetivos. Nunca toque nesse balde.",
                color: "hsl(45,100%,50%)",
              },
              {
                balde: "🎉 Balde 3: QUALIDADE DE VIDA",
                pct: "10–20%",
                desc: "Lazer, restaurantes, streaming, roupas, hobbies. Gaste TUDO sem culpa — esse é o propósito desse balde. Quando acabou, acabou. Sem empréstimo de outros baldes.",
                color: "hsl(280,100%,65%)",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border-2 rounded-xl p-5" style={{ borderColor: item.color + "40" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm" style={{ color: item.color }}>{item.balde}</h3>
                  <span className="text-2xl font-bold" style={{ color: item.color }}>{item.pct}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Calculadora */}
        <BucketCalculator salary={salary} setSalary={setSalary} />

        {/* Implementação */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Como Implementar em 3 Passos Práticos
          </h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Mapeie — a verdade sobre seus gastos", desc: "Abra o extrato bancário e do cartão de crédito dos últimos 2 meses. Anote TODOS os gastos. Use o extrato, não a memória — ela mente sistematicamente, subestimando gastos em até 30%." },
              { step: "2", title: "Categorize — classifique cada gasto nos 3 baldes", desc: "Necessidade: conta de luz, aluguel, mercado básico. Qualidade de vida: Uber Eats, Netflix, academia, restaurante. Investimento: qualquer aplicação financeira. Surpreso com os números? Era para isso." },
              { step: "3", title: "Automatize — tire o esforço da equação", desc: "No dia do salário: transfira automaticamente o percentual do Balde 2 para uma conta de investimentos separada. O que não está na conta corrente, não é gasto. Automação bate força de vontade sempre." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[hsl(var(--invest-color))]/5 rounded-lg p-4">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--invest-color))]/20 border-2 border-[hsl(var(--invest-color))] flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(45,100%,50%)] text-sm">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regra 24h */}
        <section className="mb-10">
          <div className="bg-[hsl(var(--invest-color))]/10 border border-[hsl(var(--invest-color))]/30 rounded-xl p-5">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Zap className="h-5 w-5 text-[hsl(var(--invest-color))]" />
              A Regra dos 24 Horas — Seu Maior Aliado Contra Impulso
            </h3>
            <p className="text-sm text-muted-foreground">
              Antes de qualquer compra acima de <strong>R$ 200</strong> fora do planejamento: espere 24 horas. Pesquisas de comportamento do consumidor mostram que <strong>70% das vontades de compra passam sozinhas</strong> nesse intervalo. As que persistem geralmente têm justificativa real — e aí você compra sem culpa, sabendo que não foi impulso.
            </p>
          </div>
        </section>

        <AdInArticle />

        {/* Ferramentas */}
        <section className="mb-10">
          <AdRectangle className="my-8" />

          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Ferramentas de Controle Financeiro para 2026
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            O método funciona melhor com um sistema de registro consistente. Escolha a ferramenta que você realmente vai usar — a melhor é a que você abre todo dia:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Mobills", desc: "Melhor app brasileiro de controle financeiro. Conecta ao banco via Open Finance e categoriza automaticamente.", icon: "📱" },
              { name: "Organizze", desc: "Ótimo para famílias com orçamento compartilhado. Interface simples e relatórios mensais visuais.", icon: "👨‍👩‍👧‍👦" },
              { name: "Planilha do Google", desc: "Para quem prefere controle manual e total. Crie sua própria planilha dos 3 baldes — ou use um template gratuito.", icon: "📊" },
              { name: "Notion", desc: "Para perfis mais analíticos que querem customizar tudo e integrar finanças com outras áreas da vida.", icon: "🔧" },
            ].map((app, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                <span className="text-3xl">{app.icon}</span>
                <div>
                  <h4 className="font-bold text-sm">{app.name}</h4>
                  <p className="text-sm text-muted-foreground">{app.desc}</p>
                </div>
                <Smartphone className="h-4 w-4 text-muted-foreground ml-auto shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Quiz comportamental */}
        <BehaviorQuiz />

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[hsl(var(--invest-color))] pl-4">
            Linha do Tempo Realista: O Que Esperar
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Educação financeira é maratona, não sprint. Veja o que acontece quando você implementa o método com consistência:
          </p>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[hsl(var(--invest-color))]/30" />
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative pl-12 pb-6">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[hsl(var(--invest-color))] border-4 border-background" />
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-[hsl(var(--invest-color))] font-mono">{step.period}</span>
                  <h4 className="font-bold text-[hsl(45,100%,50%)] text-sm">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resumo */}
        <section className="mb-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">📋 Resumo: O Que Você Precisa Fazer Hoje</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Problemas financeiros são 80% comportamento, 20% falta de conhecimento — mude o sistema, não só o esforço",
                "Método dos 3 Baldes: Necessidades (55%), Investimentos (25%), Qualidade de Vida (20%)",
                "Automatize tudo — transferência automática no dia do salário elimina a decisão e a tentação",
                "A Regra das 24h elimina ~70% das compras impulsivas sem precisar de força de vontade",
                "Em 5 anos de método consistente, você estará numa posição financeira que 80% dos brasileiros nunca alcançam",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--invest-color))] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["educação financeira", "método 3 baldes", "organizar finanças", "guardar dinheiro", "finanças pessoais", "controle financeiro", "investir com pouco"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">#{tag}</span>
          ))}
        </div>

        <BackNavigation category="invest" />

        <EditorialTake category="invest" title="Análise do Marcos: o método dos 3 baldes funciona porque elimina a decisão diária">
          <p>
            O "método dos 3 baldes" é uma simplificação didática de princípios estabelecidos por autores como Daniel Kahneman (<em>Thinking, Fast and Slow</em>) e adaptado por educadores financeiros brasileiros como Gustavo Cerbasi e Nathalia Arcuri. A lógica converge com o que o relatório Raio-X do Investidor Brasileiro 2024 da ANBIMA mostra: 64% dos brasileiros não conseguem poupar mensalmente — e o problema quase nunca é falta de renda.
          </p>
          <p className="mt-2">
            Para 2026, a recomendação para o <strong>Balde 2 (Investimentos)</strong> está alinhada com a Selic projetada pelo Boletim Focus: alocar a reserva de emergência em Tesouro Selic ou CDB de liquidez diária a 100%+ CDI — rentabilidade líquida de ~9-10% ao ano após IR. Para objetivos de 1–5 anos, LCI e LCA isentas de IR oferecem 90–95% do CDI sem desconto tributário. Minha análise: o método funciona porque <strong>elimina a decisão diária sobre dinheiro</strong>. Quem tem o sistema rodando há 6 meses reporta, quase unanimemente, sensação de controle financeiro inédita.
          </p>
        </EditorialTake>

        <ArticleSources category="invest"
          sources={[
            {
              title: "Raio-X do Investidor Brasileiro 2024 — Perfil e Comportamento",
              url: "https://www.anbima.com.br/pt_br/especial/raio-x-do-investidor.htm",
              publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
              accessedAt: "Maio 2026",
            },
            {
              title: "Boletim Focus — Expectativas de Mercado para Taxa Selic",
              url: "https://www.bcb.gov.br/publicacoes/focus",
              publisher: "Banco Central do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Tesouro Selic — Características e Rentabilidade",
              url: "https://www.tesourodireto.com.br/titulos/tipos-de-tesouro/tesouro-selic.htm",
              publisher: "Tesouro Nacional / Tesouro Direto",
              accessedAt: "Maio 2026",
            },
            {
              title: "Tributação de Aplicações Financeiras de Renda Fixa",
              url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/imposto-de-renda-sobre-aplicacoes-financeiras",
              publisher: "Receita Federal do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "B3 Educação — Finanças Pessoais e Comportamento do Investidor",
              url: "https://www.b3.com.br/pt_br/b3/educacao/",
              publisher: "B3 — Bolsa do Brasil",
              accessedAt: "Maio 2026",
            },
            {
              title: "Pesquisa de Endividamento e Inadimplência do Consumidor (PEIC)",
              url: "https://www.fecomercio.com.br/pesquisas/indicador/peic",
              publisher: "FecomercioSP / CNC",
              accessedAt: "Maio 2026",
            },
          ]}
        />

        <RelatedPosts currentSlug="educacao-financeira-metodo-3-baldes" />
        <CommentSection
          postId="educacao-financeira-metodo-3-baldes"
          postTitle="Método dos 3 Baldes: Educação Financeira Para Quem Sempre Gastou Tudo"
         category="invest" />
      </article>
    </>
  );
};

export default EducacaoFinanceira3Baldes;
