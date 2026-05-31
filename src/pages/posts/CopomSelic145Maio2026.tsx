import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BarChart3, DollarSign, TrendingUp, Lightbulb, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import heroImg from "@/assets/copom-selic-145-abril-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "copom-selic-1450-corte-abril-2026";
const TITLE = "Copom Corta Selic para 14,50% — Segundo Corte Consecutivo em Meio à Guerra do Oriente Médio";

const CopomSelic145Maio2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Copom · Selic · Renda Fixa · Política Monetária
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Copom Corta Selic para 14,50% — Segundo Corte Consecutivo em Meio à Guerra do Oriente Médio
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" publishedAt="4 de Maio, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Copom Selic 14,50% corte abril 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O Comitê de Política Monetária (Copom) do Banco Central decidiu, na quarta-feira (29/04), reduzir a taxa básica de juros em <strong>0,25 ponto percentual</strong>, levando a Selic de 14,75% para <strong>14,50% ao ano</strong>. É a <strong>segunda redução consecutiva</strong> do ciclo, em meio ao choque inflacionário causado pela guerra no Oriente Médio. O comunicado pediu "serenidade e cautela" e deixou em aberto a profundidade do afrouxamento. Veja o que isso significa para renda fixa, ações, câmbio e sua carteira.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          A Decisão em Números
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Selic anterior", val: "14,75% a.a.", note: "Pico do ciclo recente", icon: "📊" },
            { ind: "Selic atual", val: "14,50% a.a.", note: "2º corte consecutivo (-0,25 pp)", icon: "✂️" },
            { ind: "Meta de inflação", val: "3% (1,5–4,5%)", note: "Sistema de meta contínua desde 2025", icon: "🎯" },
            { ind: "IPCA esperado 2026", val: "4,86%", note: "Acima do teto da meta (Focus 27/04)", icon: "📈" },
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
          A reunião ocorreu sem a participação do Diretor de Administração, Rodrigo Alves Teixeira. Em 2025, os diretores indicados pelo presidente Lula passaram a formar maioria no colegiado — eles são os responsáveis diretos pela decisão.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          O Comunicado: "Serenidade e Cautela" Frente à Guerra
        </h2>
        <blockquote>
          "No cenário atual, caracterizado por forte aumento da incerteza, o Comitê reafirma serenidade e cautela na condução da política monetária, de forma que os passos futuros do processo de calibração da taxa básica de juros possam incorporar novas informações que aumentem a clareza sobre a profundidade e a extensão dos conflitos no Oriente Médio, assim como seus efeitos diretos e indiretos sobre o nível de preços ao longo do tempo." — Comunicado do Copom (29/04/2026)
        </blockquote>
        <p>
          O Banco Central trabalha com horizonte ampliado: como a Selic leva de <strong>6 a 18 meses</strong> para impactar a economia, o foco já é a meta de 2027. Para 2026, o mercado projetava IPCA de <strong>4,86%</strong> no Focus do dia 27/04 — acima do teto da meta (4,5%).
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
      <AdInArticle />
          <DollarSign className="h-7 w-7 text-invest" />
          Por Que o Corte Foi de Apenas 0,25 pp
        </h2>
        <p>
          A disparada do petróleo Brent (acima de US$ 125/barril em 30/04) já está pressionando os preços dos combustíveis no Brasil. Diversos analistas defendem inclusive uma <strong>parada no ciclo</strong> de cortes para evitar o repasse inflacionário. Entre os fatores monitorados pelo BC:
        </p>
        <ul>
          <li><strong>Petróleo elevado</strong> — pressiona combustíveis, transportes e alimentos</li>
          <li><strong>Câmbio</strong> — dólar a R$ 4,95 no dia da decisão (mais baixo em 2 anos), mas com volatilidade alta</li>
          <li><strong>Mercado de trabalho apertado</strong> — desemprego em 6,1% e renda em recorde sustentam demanda</li>
          <li><strong>Fed mantendo taxas</strong> — diferencial de juros segue elevado, ajuda a ancorar o real</li>
          <li><strong>Expectativa de inflação desancorada</strong> — Focus em 4,86% para 2026 e 4% para 2027</li>
        </ul>

        <AdRectangle className="my-8" />

        
        <EditorialTake category="invest" title="Análise do Marcos: o que fazer com a renda fixa agora">
          <p>
            Cortar Selic com inflação ainda acima do teto da meta e com o Brent acima de US$ 100 é
            <strong> uma aposta arriscada</strong>. Para o investidor pessoa física, a leitura prática é:
            travar prefixados longos agora pode parecer atrativo, mas o IPCA+ continua sendo o porto seguro
            até o cenário fiscal ficar mais claro. CDBs com liquidez diária ainda pagam acima de 100% do CDI
            em bancos médios — vale travar antes que o ciclo de cortes erode o prêmio.
          </p>
        </EditorialTake>

<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Impacto em Cada Classe de Ativos
        </h2>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "Tesouro Selic / CDBs pós-fixados", sinal: "🟢 Manter", txt: "Com Selic ainda em 14,50% e cortes lentos, o pós-fixado segue rendendo muito. Reserva de emergência continua no porto seguro." },
            { tipo: "Tesouro IPCA+ (NTN-B)", sinal: "🟢 Priorize", txt: "Com IPCA esperado em 4,86% (acima do teto), proteção real é fundamental. IPCA+6,5% entrega ~11,4% nominal." },
            { tipo: "Tesouro Prefixado", sinal: "🟡 Cautela", txt: "O choque do petróleo aumenta o risco da curva longa. Prefira vencimentos curtos e médios. Eleições 2026 trazem volatilidade adicional." },
            { tipo: "Ações — Petróleo", sinal: "🟢 Favorável", txt: "PETR4 e PRIO3 se beneficiam diretamente do Brent acima de US$ 100. Margens fortes no curto prazo." },
            { tipo: "Ações — Bancos e utilities", sinal: "🟢 Favorável", txt: "Spread bancário alto e bond-proxies (EQTL3, SBSP3) atrativos com Selic ainda elevada." },
            { tipo: "Ações — Construção e varejo", sinal: "🟡 Aguardar", txt: "Ciclo de queda mais lento atrasa recuperação de MRVE3, CURY3 e do varejo de bens duráveis." },
            { tipo: "FIIs de tijolo (contratos IPCA+)", sinal: "🟢 Seletivo", txt: "Logísticos e galpões com contratos atrelados ao IPCA aceleram a renda mensal. XPLG11, BRCO11, HGLG11." },
            { tipo: "Dólar e ETFs internacionais", sinal: "🟡 Diversifique", txt: "Dólar a R$ 4,95 é entrada interessante para IVVB11 e BDRs de big techs (NVDC34, MSFT34) — diversificação cambial." },
          ].map(({ tipo, sinal, txt }) => (
            <div key={tipo} className="bg-card rounded-xl border border-invest/20 p-4 flex items-start gap-3">
              <span className="text-sm shrink-0 whitespace-nowrap">{sinal}</span>
              <div>
                <h4 className="font-bold text-sm">{tipo}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{txt}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Esperar das Próximas Reuniões
        </h2>
        <p>
          Com a inflação rodando acima da meta e o petróleo pressionado pela guerra Irã-EUA, o consenso do mercado, refletido no Boletim Focus, projeta:
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Reunião</th>
              <th className="text-left py-3 px-4">Data</th>
              <th className="text-left py-3 px-4">Cenário base</th>
            </tr></thead>
            <tbody>
              {[
                ["Junho/2026", "17–18/06", "Manutenção em 14,50% ou corte de 0,25 pp se Brent recuar"],
                ["Agosto/2026", "29–30/07", "Corte de 0,25 pp condicionado a alívio da guerra"],
                ["Setembro/2026", "16–17/09", "Selic em 14,00–14,25% no fim do ano em cenário base"],
                ["Outubro/Dezembro", "—", "Volatilidade eleitoral pode interromper afrouxamento"],
              ].map(([r, d, c]) => (
                <tr key={r} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{r}</td>
                  <td className="py-3 px-4 text-invest text-xs">{d}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você está reposicionando a carteira após o corte? 📊</h3>
          <p className="text-muted-foreground">Conta nos comentários sua estratégia! 👇</p>
        </div>
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> Comunicado do Copom (29/04/2026), Banco Central do Brasil, Boletim Focus (27/04/2026), reportagem g1 — Mariana Assis e Thiago Resende. Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <ArticleSources category="invest"
        sources={[
          { title: "Banco Central — Atas e decisões do Copom", url: "https://www.bcb.gov.br/controleinflacao/atascopom", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Expectativas de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Calculadora do Cidadão — Tesouro Direto", url: "https://www.tesourodireto.com.br/", publisher: "Tesouro Nacional", accessedAt: "Maio 2026" },
          { title: "Histórico de Selic", url: "https://www.bcb.gov.br/controleinflacao/historicotaxasjuros", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} />
    </article>
  );
};

export default CopomSelic145Maio2026;