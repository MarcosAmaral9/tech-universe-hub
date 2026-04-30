import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/copom-abril-2026-selic-investimentos.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CopomAbril2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "copom-abril-2026-selic-investimentos",
      "Copom Abril 2026: Selic a 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Copom · Selic · Renda Fixa · Estratégia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Copom Abril 2026: Selic Cortada para 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Copom abril 2026 Selic corte investimentos" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Na reunião dos dias 28–29 de abril, o Copom deve cortar a Selic em <strong>0,25 ponto percentual</strong>, levando a taxa de 14,75% para <strong>14,50%</strong> ao ano — conforme unanimidade nas projeções do Boletim Focus de hoje, 20 de abril. É o primeiro corte do ciclo atual de afrouxamento monetário, aguardado desde o pico histórico de 15% em 2025. O contexto é delicado: inflação subindo (IPCA projetado em 4,80% para 2026, acima do teto da meta), guerra no Oriente Médio pressionando custos, e eleições presidenciais no horizonte. Guia completo do que fazer com seus investimentos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Contexto: Por Que o Corte É Menor do Que Esperado
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Selic atual", val: "14,75% a.a.", note: "Maior em quase 20 anos", icon: "📉" },
            { ind: "Selic pós-Copom", val: "14,50% a.a.", note: "Corte de 0,25 pp esperado", icon: "✂️" },
            { ind: "IPCA projetado", val: "4,80% (2026)", note: "Acima do teto da meta (4,5%)", icon: "📈" },
            { ind: "Dólar", val: "R$ 5,01", note: "Menor nível em 2 anos", icon: "💵" },
          ].map(({ ind, val, note, icon }) => (
            <div key={ind} className="bg-card rounded-xl border border-invest/20 p-4 text-center">
              <div className="text-xl mb-1">{icon}</div>
              <div className="font-bold text-invest text-lg mb-0.5">{val}</div>
              <div className="text-xs font-medium mb-0.5">{ind}</div>
              <div className="text-xs text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>
        <p>
          O mercado que projetava corte de 0,50 pp em março recuou para 0,25 pp em abril por dois motivos: o <strong>IPCA de março veio em 0,88%</strong> no mês (acima do esperado), e a guerra Irã-EUA mantém pressão sobre o petróleo e custos de importação. O foco do Focus desta segunda-feira (20) aponta que o mercado agora projeta apenas mais um corte de 0,25 pp em junho, levando a Selic a 14,25% — bem abaixo do cenário anterior de 12,25% ao fim do ano.
        </p>
        <p>
          Esse ritmo mais lento de queda tem impacto direto em como você deve posicionar sua carteira. As receitas calculadas para um cenário de Selic a 12% precisam ser revisadas.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Impacto em Cada Classe de Ativos
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">🏛️ Renda Fixa: Ajuste de Expectativas</h3>
        <p>
          Com a Selic desacelerando menos do que esperado, a renda fixa pós-fixada (CDI) continua muito atrativa por mais tempo. O Tesouro Selic ainda rende próximo de 14,75% ao ano — retorno real de ~10% acima da inflação.
        </p>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "Tesouro Selic", cenario: "Ainda é o porto seguro. Com Selic caindo devagar, o CDI permanece alto por mais tempo. Ideal para reserva de emergência e liquidez.", sinal: "🟢 Manter" },
            { tipo: "Tesouro Prefixado", cenario: "Reduz o apelo com inflação acima do esperado. A taxa travada de 13,5% é atrativa se a Selic chegar a 12%, mas com nova projeção de 13,25% ao fim do ano, a margem encolheu.", sinal: "🟡 Cautela" },
            { tipo: "Tesouro IPCA+", cenario: "Voltou ao protagonismo. Com IPCA projetado em 4,80%, o IPCA+6,5% entrega retorno nominal de ~11,3% — proteção total contra a inflação mais alta que o previsto.", sinal: "🟢 Priorize" },
            { tipo: "CDB de banco médio (120%+ CDI)", cenario: "Com garantia FGC até R$ 250k por CPF por instituição, CDBs a 120% do CDI com liquidez mensal são excelentes para capital que não precisa de liquidez diária.", sinal: "🟢 Boa opção" },
          ].map(({ tipo, cenario, sinal }) => (
            <div key={tipo} className="bg-card rounded-xl border border-invest/20 p-4 flex items-start gap-3">
              <span className="text-sm shrink-0">{sinal}</span>
              <div>
                <h4 className="font-bold text-sm">{tipo}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{cenario}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">📊 Ações: Otimismo Moderado, Seletividade Alta</h3>
        <p>
      <AdInArticle />
          O Ibovespa reagiu positivamente ao início do ciclo de cortes, mas com inflação mais alta o ritmo de alta tende a ser mais lento do que o projetado no início de 2026. Os setores sensíveis a juros continuam favorecidos, mas com menor margem de segurança.
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Setor</th>
              <th className="text-left py-3 px-4">Tese</th>
              <th className="text-left py-3 px-4">Exemplos</th>
              <th className="text-left py-3 px-4">Cenário</th>
            </tr></thead>
            <tbody>
              {[
                ["Petróleo e commodities", "Guerra Irã mantém petróleo elevado. Margens fortes.", "PETR4, PRIO3", "🟢 Favorável"],
                ["Utilities (energia, saneamento)", "Bond-proxies pagam dividendos estáveis acima da inflação", "EQTL3, SBSP3", "🟢 Favorável"],
                ["Bancos", "Spread alto com Selic elevada. Inadimplência controlada.", "ITUB4, BBAS3, BBDC4", "🟢 Favorável"],
                ["Varejo e consumo", "Crédito ainda caro freia recuperação. Melhora gradual.", "LREN3, MGLU3", "🟡 Neutro"],
                ["Construção civil", "Juro alto encarece financiamento. Espera redução maior da Selic.", "MRVE3, CURY3", "🟡 Aguardar"],
                ["Real estate (FIIs)", "Com IPCA alto, FIIs de tijolos com contratos IPCA+ se beneficiam", "XPLG11, BRCO11", "🟢 Seletivo"],
              ].map(([setor, tese, ex, cen]) => (
                <tr key={setor} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{setor}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{tese}</td>
                  <td className="py-3 px-4 text-invest text-xs">{ex}</td>
                  <td className="py-3 px-4 text-xs font-bold">{cen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Carteira Recomendada para o Ciclo Atual (Abr–Jun 2026)
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            {
              perfil: "🛡️ Conservador",
              alocacao: [
                { classe: "Tesouro IPCA+ 2035", pct: 50, desc: "Proteção real contra inflação alta" },
                { classe: "Tesouro Selic / CDB pós-fixado", pct: 35, desc: "Liquidez e CDI alto por mais tempo" },
                { classe: "BOVA11 (ETF Ibovespa)", pct: 15, desc: "Exposição mínima à bolsa" },
              ]
            },
            {
              perfil: "⚖️ Moderado",
              alocacao: [
                { classe: "Tesouro IPCA+ 2035", pct: 30, desc: "Âncora inflacionária" },
                { classe: "CDB/LCI/LCA pós-fixado", pct: 25, desc: "CDI + spread, liquidez razoável" },
                { classe: "Ações setoriais (petróleo, utilities, bancos)", pct: 30, desc: "Setores favorecidos no ciclo" },
                { classe: "IVVB11 (S&P 500)", pct: 15, desc: "Diversificação internacional" },
              ]
            },
            {
              perfil: "🚀 Arrojado",
              alocacao: [
                { classe: "Ações BR (seleção setorial)", pct: 45, desc: "Petróleo, utilities, bancos em foco" },
                { classe: "Tesouro IPCA+ longo", pct: 20, desc: "Hedge inflacionário" },
                { classe: "ETFs internacionais (IVVB11/NASD11)", pct: 20, desc: "Big techs americanas" },
                { classe: "FIIs logísticos (contratos IPCA+)", pct: 15, desc: "Renda mensal com proteção real" },
              ]
            },
          ].map(({ perfil, alocacao }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-3">{perfil}</h3>
              <div className="space-y-2">
                {alocacao.map(({ classe, pct, desc }) => (
                  <div key={classe} className="flex items-center gap-3">
                    <div className="w-10 text-right text-xs font-bold text-invest shrink-0">{pct}%</div>
                    <div className="flex-1 bg-secondary rounded-full h-2">
                      <div className="bg-invest h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="min-w-[160px] text-xs font-medium">{classe}</div>
                    <div className="text-xs text-muted-foreground hidden md:block">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Os 3 Erros que o Investidor Não Pode Cometer Agora
        </h2>
        <div className="not-prose my-6 space-y-3">
          {[
            { n: "1", erro: "Sair do CDI antes do tempo", desc: "Com Selic desacelerando mais devagar, o CDI ainda rende muito. Migrar tudo para renda variável agora, com IPCA em 4,8%, é precipitado. Faça a transição gradualmente." },
            { n: "2", erro: "Ignorar o risco eleitoral de 2026", desc: "Ano eleitoral costuma trazer volatilidade na curva longa de juros. Títulos prefixados longos (acima de 5 anos) ficam mais arriscados com incerteza política. Prefira vencimentos curtos e médios." },
            { n: "3", erro: "Concentrar em renda variável apostando em queda rápida da Selic", desc: "O mercado revisou a queda da Selic de -3pp para -1,5pp ao longo de 2026. Quem entrou pesado em ações esperando esse catalisador terá que ter paciência mais longa do que planejado." },
          ].map(({ n, erro, desc }) => (
            <div key={n} className="flex gap-3 bg-card rounded-xl border border-destructive/30 p-4">
              <span className="w-7 h-7 rounded-full bg-destructive/15 text-destructive font-bold flex items-center justify-center shrink-0 text-xs">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5 text-destructive">❌ {erro}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está reposicionando sua carteira para o ciclo de queda da Selic? 📊</h3>
          <p className="text-muted-foreground">Conta nos comentários sua estratégia! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso:</strong> Artigo educacional. Não constitui recomendação de investimento. Consulte um assessor certificado. Rentabilidade passada não garante resultados futuros.
        </p>
      </div>

      <RelatedPosts currentSlug="copom-abril-2026-selic-investimentos" />
      <CommentSection postId="copom-abril-2026-selic-investimentos" postTitle="Copom Abril 2026: Selic a 14,50% — O Que Muda para Renda Fixa, Ações e Câmbio" />
    </article>
  );
};

export default CopomAbril2026;