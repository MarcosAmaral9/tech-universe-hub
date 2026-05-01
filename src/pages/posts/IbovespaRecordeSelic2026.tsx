import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import carteiraInvestimentosImg from "@/assets/carteira-iniciantes-guia-2026.webp";



const IbovespaRecordeSelic2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "ibovespa-recorde-selic-caindo-2026",
      "Ibovespa em Recordes e Selic Caindo: Onde Investir Agora em Abril de 2026",
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
            Bolsa · Selic · Onde Investir · Abril 2026
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Ibovespa em Recordes e Selic Caindo: Onde Investir Agora em Abril de 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={carteiraInvestimentosImg} alt="Ibovespa recordes Selic 2026 onde investir" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O Ibovespa renovou recordes históricos pelo 3º dia seguido na semana passada, fechando acima dos 195 mil pontos. O dólar caiu para a menor cotação em dois anos. E o Banco Central já iniciou o ciclo de queda da Selic, com projeções de chegar a 12,25% até o fim de 2026. Este é o cenário mais favorável ao investidor brasileiro dos últimos anos — e também o mais delicado para tomar a decisão certa.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Cenário em Abril de 2026: Os Números que Importam
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Indicador</th>
              <th className="text-left py-3 px-4">Valor Atual (abr/26)</th>
              <th className="text-left py-3 px-4">Projeção Fim 2026</th>
              <th className="text-left py-3 px-4">Impacto</th>
            </tr></thead>
            <tbody>
              {[
                ["Selic", "~14,75% a.a.", "12,25% a.a. (Focus)", "↓ Renda fixa pós-fixada rende menos"],
                ["IPCA (inflação)", "~4,31% a.a.", "4,20% a.a.", "↑ IPCA+ ainda protege o patrimônio"],
                ["Ibovespa", "~195.000 pontos", "190–200 mil (XP)", "↑ Bolsa ainda tem espaço para subir"],
                ["Dólar (USD/BRL)", "~R$ 5,01", "R$ 5,41 (Focus)", "↕ Câmbio favorece ETFs internacionais"],
                ["PIB Brasil", "+1,82% (est.)", "+1,80% em 2026", "↕ Crescimento moderado"],
                ["Petróleo Brent", "~US$ 94–100", "Volátil (guerra Irã)", "↑ Beneficia Petrobras e setor de energia"],
              ].map(([ind, atual, proj, imp]) => (
                <tr key={ind} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{ind}</td>
                  <td className="py-3 px-4 text-invest font-bold">{atual}</td>
                  <td className="py-3 px-4 text-muted-foreground">{proj}</td>
                  <td className="py-3 px-4 text-xs">{imp}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Fontes: Focus/BCB, XP Investimentos, BTG Pactual — abril de 2026</p>
        </div>
        <p>
          A grande narrativa de 2026 é a transição: <strong>de um ambiente de juros proibitivos (Selic a 15%) para um ciclo de afrouxamento</strong>. O Ibovespa sobe na antecipação desta mudança. Segundo um estudo da Rico Investimentos analisando os 5 últimos ciclos de queda de juros, a bolsa sobe em média antes E depois do primeiro corte. O maior erro do investidor é esperar o corte acontecer para entrar.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          As Melhores Oportunidades de Investimento Agora
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-3">🏛️ Tesouro Direto Prefixado e IPCA+</h3>
        <p>
          Com a Selic em queda, títulos com taxa travada (prefixados) se valorizam — porque a taxa que você trava hoje (14–15% a.a.) ficará acima da Selic futura. O BTG Pactual recomenda prefixados com vencimento de 2–3 anos como os maiores beneficiários do ciclo de queda. Já o IPCA+ garante retorno real acima da inflação independente de qualquer cenário.
        </p>
        <div className="not-prose my-4 grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-invest/20 p-4">
            <h4 className="font-bold text-sm mb-2">🔒 Tesouro Prefixado 2029</h4>
            <p className="text-xs text-muted-foreground mb-2">Taxa atual: ~13,5% a.a. | Liquidez diária | IR regressivo</p>
            <p className="text-xs">Ideal para: quem acredita que a Selic vai cair para 12% ou menos. Se a Selic chegar a 12%, este título se valoriza mesmo antes do vencimento.</p>
          </div>
          <div className="bg-card rounded-xl border border-invest/20 p-4">
            <h4 className="font-bold text-sm mb-2">📈 Tesouro IPCA+ 2035</h4>
            <p className="text-xs text-muted-foreground mb-2">Taxa atual: IPCA + ~6,5% a.a. | Liquidez diária | IR regressivo</p>
            <p className="text-xs">Ideal para: proteção contra inflação com retorno real garantido. Com guerra no Oriente Médio e pressão inflacionária, este é o porto seguro da carteira.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">📊 Ações: Os Setores que Mais Ganham com a Queda de Juros</h3>
        <p>A queda da Selic beneficia diretamente empresas que dependem de crédito para crescer ou que concorrem com a renda fixa pelo dinheiro do investidor:</p>
        <div className="not-prose my-4 space-y-3">
          {[
            { setor: "Bancos e Financeiras", empresas: "B3 (B3SA3), BTG Pactual (BPAC11), Nubank (ROXO34)", motivo: "Mais pessoas saem da renda fixa e vão para o mercado de capitais. Volumes de negociação sobem, custódia cresce.", alta: "Alta esperada" },
            { setor: "Energia e Utilities", empresas: "Equatorial (EQTL3), Sabesp (SBSP3), Eletrobras (ELET3)", motivo: "Empresas com receita previsível que pagam dividendos altos. Funcionam como 'títulos de renda fixa com upside de renda variável'.", alta: "Defensivo + dividendos" },
            { setor: "Consumo e Varejo", empresas: "Renner (LREN3), Arezzo (ARZZ3), Vivara (VIVA3)", motivo: "Crédito mais barato → consumidor endividado respira → consumo cresce. Setores reprimidos por anos de Selic alta.", alta: "Alto potencial" },
            { setor: "Construção Civil", empresas: "MRV (MRVE3), Direcional (DIRR3), Cury (CURY3)", motivo: "Financiamento imobiliário mais barato impulsiona vendas de imóveis. Caixa projeta recorde de crédito imobiliário em 2026.", alta: "Alto potencial" },
            { setor: "Petróleo (bônus da guerra)", empresas: "Petrobras (PETR4), PRIO (PRIO3), 3R Petroleum (RRRP3)", motivo: "Com petróleo acima de US$ 90 por causa da guerra no Oriente Médio, margens e dividendos estão excepcionais.", alta: "Conjuntural + forte" },
          ].map(({ setor, empresas, motivo, alta }) => (
            <div key={setor} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                <h4 className="font-bold text-sm">{setor}</h4>
                <span className="text-xs bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full">{alta}</span>
              </div>
              <p className="text-xs text-ia mb-1">{empresas}</p>
              <p className="text-xs text-muted-foreground">{motivo}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Carteiras Recomendadas por Perfil para Abril 2026
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            {
              perfil: "🛡️ Conservador — Preserve e Proteja",
              alocacao: [
                { ativo: "Tesouro IPCA+ 2035", pct: "40%", obs: "Proteção real contra inflação" },
                { ativo: "Tesouro Prefixado 2029", pct: "30%", obs: "Captura a queda da Selic" },
                { ativo: "CDB pós-fixado FGC", pct: "20%", obs: "Liquidez e segurança" },
                { ativo: "BOVA11 (ETF Ibovespa)", pct: "10%", obs: "Pequena exposição à bolsa" },
              ]
            },
            {
              perfil: "⚖️ Moderado — Equilíbrio Risco/Retorno",
              alocacao: [
                { ativo: "Tesouro IPCA+ 2035", pct: "25%", obs: "Âncora de proteção real" },
                { ativo: "Tesouro Prefixado 2029", pct: "20%", obs: "Aproveita queda de juros" },
                { ativo: "Ações setoriais (bancos, utilities, energia)", pct: "30%", obs: "Captura ciclo de queda de juros" },
                { ativo: "IVVB11 (S&P 500)", pct: "15%", obs: "Diversificação internacional" },
                { ativo: "FIIs diversificados", pct: "10%", obs: "Renda passiva mensal" },
              ]
            },
            {
              perfil: "🚀 Arrojado — Máximo Potencial",
              alocacao: [
                { ativo: "Ações brasileiras (seleção)", pct: "40%", obs: "Foco em setores sensíveis a juros" },
                { ativo: "Petrobras/PRIO (commodities)", pct: "15%", obs: "Bônus da guerra no Oriente Médio" },
                { ativo: "IVVB11 + NASD11", pct: "20%", obs: "Big techs americanas + S&P" },
                { ativo: "Tesouro IPCA+ longo", pct: "15%", obs: "Hedge inflacionário" },
                { ativo: "Cripto (BTC/ETH)", pct: "10%", obs: "Alta volatilidade, alto potencial" },
              ]
            },
          ].map(({ perfil, alocacao }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-3">{perfil}</h3>
              <div className="space-y-2">
                {alocacao.map(({ ativo, pct, obs }) => (
                  <div key={ativo} className="flex items-center gap-3">
                    <div className="w-10 text-right text-xs font-bold text-invest shrink-0">{pct}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2">
                      <div className="bg-invest h-2 rounded-full" style={{ width: pct }} />
                    </div>
                    <div className="text-xs min-w-[140px] font-medium">{ativo}</div>
                    <div className="text-xs text-muted-foreground hidden md:block">{obs}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          O Que Pode Dar Errado: Riscos de 2026
        </h2>
        <ul>
          <li><strong>Risco fiscal e eleições:</strong> 2026 é ano eleitoral. Incerteza sobre o próximo governo pode gerar volatilidade no segundo semestre, especialmente na curva longa de juros.</li>
          <li><strong>Guerra no Oriente Médio:</strong> Cessar-fogo frágil com Irã. Se o conflito reescalar, petróleo dispara novamente, inflação pressiona e o BC pode pausar os cortes.</li>
          <li><strong>Ibovespa já subiu muito:</strong> Com o índice perto de recordes, parte do movimento já está precificada. A margem de segurança é menor do que há 6 meses.</li>
          <li><strong>Risco China:</strong> Desaceleração chinesa afeta commodities (Vale, mineração), que têm peso relevante no Ibovespa.</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Em qual classe de ativo você está investindo em 2026? 📊</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Consulte um assessor certificado antes de tomar decisões financeiras. Rentabilidade passada não garante resultados futuros.
        </p>
      </div>

      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="ibovespa-recorde-selic-caindo-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="ibovespa-recorde-selic-caindo-2026" postTitle="Ibovespa em Recordes e Selic Caindo: Onde Investir Agora em Abril de 2026" />
    </article>
  );
};

export default IbovespaRecordeSelic2026;