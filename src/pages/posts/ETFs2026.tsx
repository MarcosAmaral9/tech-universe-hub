import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, TrendingUp, BarChart3, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/etfs-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const ETFs2026 = () => {

  useEffect(() => {
    trackArticleRead("etfs-2026-guia-completo-investir", "ETFs em 2026: Guia Completo Para Investir com Diversificação", "invest");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          ETFs em 2026: O Guia Completo Para Investir com Diversificação e Baixo Custo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="ETFs 2026 - Guia completo de fundos de índice para investidores" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          ETFs (Exchange Traded Funds) são a forma mais inteligente de diversificar seus investimentos com baixo custo. Em 2026, o mercado brasileiro de ETFs explodiu com mais de 120 opções disponíveis na B3. Este guia te mostra tudo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Que São ETFs e Por Que Investir Neles
        </h2>
        <p>
          Um <strong>ETF</strong> é um fundo de investimento negociado em bolsa que replica o desempenho de um índice, setor ou classe de ativos. Em vez de comprar 50 ações individualmente, você compra uma única cota de ETF e automaticamente investe em todas elas. As vantagens são claras:
        </p>
        <ul>
          <li><strong>Diversificação instantânea</strong> — Uma cota = dezenas ou centenas de ativos</li>
          <li><strong>Taxas baixíssimas</strong> — Taxa de administração entre 0,03% e 0,50% ao ano</li>
          <li><strong>Liquidez</strong> — Compra e venda durante o pregão como qualquer ação</li>
          <li><strong>Transparência</strong> — Composição do fundo é pública e atualizada diariamente</li>
          <li><strong>Acessibilidade</strong> — Cotas a partir de R$ 10 em alguns ETFs</li>
        </ul>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Os Melhores ETFs do Brasil em 2026
        </h2>
        <h3 className="text-xl font-bold mt-6">ETFs de Renda Variável Nacional</h3>
        <ul>
          <li><strong>BOVA11</strong> — Replica o Ibovespa. O ETF mais negociado do Brasil (taxa: 0,10%)</li>
          <li><strong>SMAL11</strong> — Small caps brasileiras. Maior potencial de valorização (taxa: 0,50%)</li>
          <li><strong>DIVO11</strong> — Empresas pagadoras de dividendos (taxa: 0,50%)</li>
          <li><strong>BOVV11</strong> — Ibovespa com taxa de 0,04%, a menor do mercado</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">ETFs Internacionais</h3>
        <ul>
          <li><strong>IVVB11</strong> — S&P 500, as 500 maiores empresas dos EUA (taxa: 0,23%)</li>
          <li><strong>NASD11</strong> — Nasdaq 100, foco em tecnologia (taxa: 0,30%)</li>
          <li><strong>EURP11</strong> — Ações europeias diversificadas</li>
          <li><strong>XINA11</strong> — Grandes empresas chinesas</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">ETFs de Renda Fixa</h3>
        <ul>
          <li><strong>IMAB11</strong> — Títulos públicos indexados à inflação (NTN-B)</li>
          <li><strong>IRFM11</strong> — Títulos prefixados do governo</li>
          <li><strong>B5P211</strong> — NTN-B com vencimento até 5 anos</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          Estratégias de Investimento com ETFs
        </h2>
        <p>
          A estratégia mais comprovada é o <strong>investimento passivo com aportes regulares</strong> (Dollar Cost Averaging). Estudos mostram que investidores passivos superam 90% dos gestores ativos em períodos de 15+ anos. Aqui estão 3 portfólios modelo:
        </p>
        <h3 className="text-xl font-bold mt-6">Conservador (Risco Baixo)</h3>
        <p>60% IMAB11 + 20% BOVA11 + 20% IVVB11</p>

        <h3 className="text-xl font-bold mt-6">Moderado (Risco Médio)</h3>
        <p>30% IMAB11 + 30% BOVA11 + 30% IVVB11 + 10% NASD11</p>

        <h3 className="text-xl font-bold mt-6">Arrojado (Risco Alto)</h3>
        <p>10% IMAB11 + 25% BOVA11 + 25% SMAL11 + 25% IVVB11 + 15% NASD11</p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Erros Comuns ao Investir em ETFs
        </h2>
        <ol>
          <li><strong>Ignorar a liquidez</strong> — Alguns ETFs têm volume baixo, dificultando a venda</li>
          <li><strong>Não considerar impostos</strong> — ETFs de renda variável pagam 15% sobre o lucro (sem isenção de R$ 20k)</li>
          <li><strong>Concentrar em um só ETF</strong> — Diversifique entre classes de ativos</li>
          <li><strong>Tentar fazer timing</strong> — Aportes regulares superam tentativas de acertar o fundo</li>
          <li><strong>Esquecer do câmbio</strong> — ETFs internacionais são afetados pela variação do dólar</li>
        </ol>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <CheckCircle className="h-7 w-7 text-invest" />
          Como Começar a Investir em ETFs Hoje
        </h2>
        <ol>
          <li>Abra conta em uma corretora (Nu Invest, XP, BTG, Inter)</li>
          <li>Defina seu perfil de risco e horizonte de tempo</li>
          <li>Escolha 2 a 4 ETFs para compor seu portfólio</li>
          <li>Configure aportes automáticos mensais</li>
          <li>Rebalanceie a cada 6 meses</li>
        </ol>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Já investe em ETFs?</h3>
          <p className="text-muted-foreground">Conta pra gente quais são seus favoritos nos comentários! 📈</p>
        </div>
      </div>

      <RelatedPosts currentSlug="etfs-2026-guia-completo-investir" />
      <CommentSection postId="etfs-2026-guia-completo-investir" postTitle="ETFs em 2026: Guia Completo Para Investir com Diversificação" />
    </article>
  );
};

export default ETFs2026;
