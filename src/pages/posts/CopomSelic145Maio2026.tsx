import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, BarChart3, DollarSign, TrendingUp, Lightbulb, AlertTriangle, Globe } from "lucide-react";
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

        <p>
          O timing dessa decisão chama atenção: o Copom optou por cortar juros no mesmo dia em que o petróleo Brent rompia a barreira de US$ 100 pela primeira vez em anos, e na véspera do salto para acima de US$ 125 que ocorreria no dia seguinte. A decisão de seguir cortando — ainda que com passo modesto de 0,25 pp — sinaliza que o Banco Central está priorizando o horizonte de médio prazo (a meta de 2027) sobre o ruído inflacionário de curto prazo provocado pelo conflito geopolítico. É uma aposta de que o choque do petróleo será temporário; se não for, o espaço para cortes futuros encolhe rapidamente.
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
          A reunião ocorreu sem a participação do Diretor de Administração, Rodrigo Alves Teixeira. Em 2025, os diretores indicados pelo presidente Lula passaram a formar maioria no colegiado — eles são os responsáveis diretos pela decisão, o que tem sido acompanhado de perto por analistas atentos a sinais de eventual menor independência operacional do Banco Central em ano eleitoral.
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
          O Banco Central trabalha com horizonte ampliado: como a Selic leva de <strong>6 a 18 meses</strong> para impactar a economia, o foco já é a meta de 2027. Para 2026, o mercado projetava IPCA de <strong>4,86%</strong> no Focus do dia 27/04 — acima do teto da meta (4,5%). A escolha da palavra "serenidade" no comunicado é significativa: em comunicados anteriores, o Copom costumava usar termos como "vigilância" ou "firmeza". A mudança de tom sugere que o Comitê está deliberadamente evitando criar expectativa de reversão do ciclo de cortes, mesmo reconhecendo os riscos — uma tentativa de equilibrar credibilidade com flexibilidade.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Por Que o Corte Foi de Apenas 0,25 pp
        </h2>
        <p>
          A disparada do petróleo Brent (acima de US$ 125/barril em 30/04) já está pressionando os preços dos combustíveis no Brasil. Diversos analistas defendem inclusive uma <strong>parada no ciclo</strong> de cortes para evitar o repasse inflacionário. Entre os fatores monitorados pelo BC:
        </p>
        <ul>
          <li><strong>Petróleo elevado</strong> — pressiona combustíveis, transportes e alimentos via toda a cadeia logística do país, que depende fortemente do transporte rodoviário</li>
          <li><strong>Câmbio</strong> — dólar a R$ 4,95 no dia da decisão (mais baixo em 2 anos), mas com volatilidade alta e potencial reversão se o conflito escalar</li>
          <li><strong>Mercado de trabalho apertado</strong> — desemprego em 6,1% e renda em recorde sustentam demanda agregada, dificultando a desinflação de serviços</li>
          <li><strong>Fed mantendo taxas</strong> — diferencial de juros segue elevado, ajuda a ancorar o real e reduz pressão por fuga de capital</li>
          <li><strong>Expectativa de inflação desancorada</strong> — Focus em 4,86% para 2026 e 4% para 2027, ambos acima da meta de 3%</li>
        </ul>
        <p>
          A combinação desses cinco fatores explica por que o Copom optou pelo meio-termo: um corte de 0,50 pp sinalizaria excesso de confiança num cenário ainda incerto, enquanto manter a Selic inalterada poderia ser interpretado como pânico desproporcional a um choque que pode ser temporário. O corte de 0,25 pp é, na prática, uma forma de "comprar tempo" — manter a trajetória de afrouxamento sem se comprometer com seu ritmo.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          Impacto em Cada Classe de Ativos
        </h2>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "Tesouro Selic / CDBs pós-fixados", sinal: "🟢 Manter", txt: "Com Selic ainda em 14,50% e cortes lentos, o pós-fixado segue rendendo muito. Reserva de emergência continua no porto seguro, com retorno real (acima da inflação) de quase 10% ao ano." },
            { tipo: "Tesouro IPCA+ (NTN-B)", sinal: "🟢 Priorize", txt: "Com IPCA esperado em 4,86% (acima do teto), proteção real é fundamental. IPCA+6,5% entrega aproximadamente 11,4% nominal — um dos melhores retornos reais entre títulos soberanos do mundo." },
            { tipo: "Tesouro Prefixado", sinal: "🟡 Cautela", txt: "O choque do petróleo aumenta o risco da curva longa. Prefira vencimentos curtos e médios. Eleições 2026 trazem volatilidade adicional aos títulos de prazo mais longo." },
            { tipo: "Ações — Petróleo", sinal: "🟢 Favorável", txt: "PETR4 e PRIO3 se beneficiam diretamente do Brent acima de US$ 100. Margens fortes no curto prazo, com potencial de dividendos extraordinários se o preço se mantiver elevado por mais alguns trimestres." },
            { tipo: "Ações — Bancos e utilities", sinal: "🟢 Favorável", txt: "Spread bancário alto e bond-proxies (EQTL3, SBSP3) atrativos com Selic ainda elevada. Bancos se beneficiam de margem de intermediação financeira robusta em ambiente de juros altos." },
            { tipo: "Ações — Construção e varejo", sinal: "🟡 Aguardar", txt: "Ciclo de queda mais lento atrasa recuperação de MRVE3, CURY3 e do varejo de bens duráveis, que dependem de crédito mais barato para reativar a demanda reprimida." },
            { tipo: "FIIs de tijolo (contratos IPCA+)", sinal: "🟢 Seletivo", txt: "Logísticos e galpões com contratos atrelados ao IPCA aceleram a renda mensal conforme a inflação sobe. XPLG11, BRCO11, HGLG11 são exemplos de fundos com essa característica contratual." },
            { tipo: "Dólar e ETFs internacionais", sinal: "🟡 Diversifique", txt: "Dólar a R$ 4,95 é entrada interessante para IVVB11 e BDRs de big techs (NVDC34, MSFT34) — diversificação cambial aproveitando um real momentaneamente mais forte." },
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
          Com a inflação rodando acima da meta e o petróleo pressionado pela guerra Irã-EUA, o consenso do mercado, refletido no Boletim Focus, projeta o seguinte calendário de decisões para o restante de 2026:
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
        <p>
          O cenário-base do mercado é de uma Selic terminal entre 14,00% e 14,25% ao final de 2026 — bem acima da projeção de 12,25% que estava nas mesas dos analistas antes da escalada do conflito no Oriente Médio. Essa revisão de quase 2 pontos percentuais no patamar terminal tem implicações práticas relevantes: estratégias de renda fixa que assumiam Selic abaixo de 12% precisam ser reavaliadas, e o "prêmio" de carregar pós-fixado por mais tempo voltou a ser atrativo.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          O Que Monitorar Até a Próxima Reunião
        </h2>
        <p>
          Entre 29 de abril e a reunião de 17–18 de junho, três variáveis vão definir se o Copom mantém, acelera ou pausa o ciclo de cortes. Acompanhar esses indicadores semanalmente ajuda o investidor a se posicionar com antecedência em vez de reagir depois do fato:
        </p>
        <div className="not-prose space-y-3 my-4">
          {[
            { titulo: "Evolução da guerra Irã-EUA e o Estreito de Ormuz", desc: "Se o bloqueio do estreito se resolver ou se atenuar, o Brent pode recuar rapidamente de US$ 125 para a faixa de US$ 80–95, aliviando a pressão inflacionária e abrindo espaço para o Copom retomar cortes de 0,50 pp em junho." },
            { titulo: "IPCA de abril e maio (divulgação 09/05 e 09/06)", desc: "Se o índice confirmar repasse rápido do petróleo para os preços de combustíveis e transportes, o Copom pode optar por pausar o ciclo na reunião de junho — cenário que o mercado atualmente atribui probabilidade de cerca de 30%." },
            { titulo: "Reação do real ao cenário externo", desc: "Um real que se mantenha forte (abaixo de R$ 5,10) na ausência de fluxo especulativo contra o Brasil dá ao Copom margem adicional para cortar, já que câmbio apreciado ajuda a compensar parte da pressão inflacionária externa." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="bg-card border border-border rounded-xl p-4 mb-2">
              <h4 className="font-bold text-sm mb-1">{titulo}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Como o Copom Toma Decisões: Entendendo o Processo
        </h2>
        <p>
          Para entender melhor por que o Copom optou por um corte moderado em vez de um
          movimento mais agressivo, vale conhecer o processo decisório do comitê. As
          reuniões ocorrem a cada 45 dias, com oito encontros programados por ano. Cada
          decisão é tomada por votação entre os nove membros do colegiado, presidido pelo
          presidente do Banco Central, com base em um conjunto extenso de modelos
          econométricos que projetam a trajetória da inflação sob diferentes cenários de
          taxa de juros.
        </p>
        <p>
          O comitê trabalha oficialmente com horizonte de 18 a 24 meses à frente — ou
          seja, a decisão de hoje sobre a Selic é calibrada para atingir a meta de
          inflação não no mês seguinte, mas no que o Banco Central projeta para o final do
          próximo ano. Esse horizonte mais longo explica por que o Copom às vezes parece
          "ignorar" dados de curto prazo (como um choque pontual de petróleo) na decisão
          imediata: o que importa é se esse choque vai se traduzir em inflação persistente
          no horizonte relevante de política monetária, não apenas em uma alta temporária
          de preços que se reverte sozinha.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Histórico Recente de Decisões do Copom
        </h2>
        <p>
          Olhar para o histórico recente de decisões ajuda a contextualizar o momento
          atual do ciclo monetário brasileiro. Depois de elevar a Selic de forma
          consistente ao longo de 2024 e início de 2025 para conter a inflação que
          ameaçava romper o teto da meta, o Banco Central manteve a taxa estável no pico
          de 15% por diversas reuniões consecutivas, aguardando sinais claros de
          desinflação antes de iniciar o processo de corte. Esse padrão de "esperar para
          confirmar" antes de mudar de direção é uma característica recorrente da
          política monetária brasileira, refletindo a cautela do Banco Central diante de
          um histórico de inflação mais volátil que economias desenvolvidas.
        </p>
        <p>
          Esse contexto histórico ajuda a entender por que, mesmo com o choque do
          petróleo pressionando a inflação no curto prazo, o Copom optou por manter o
          ciclo de cortes em vez de simplesmente pausar ou reverter. A avaliação do
          comitê parece ser de que o choque geopolítico, embora relevante, tende a ser
          temporário, e que interromper completamente o processo de normalização da
          Selic poderia gerar custos desnecessários para a atividade econômica sem
          benefício proporcional em termos de controle inflacionário no horizonte
          relevante de política monetária.
        </p>
        <p>
          Para o investidor que acompanha essas decisões de perto, vale lembrar que o
          Copom historicamente prefere movimentos graduais e previsíveis a mudanças
          abruptas de direção, exceto em situações de stress extremo de mercado. Essa
          previsibilidade relativa, embora às vezes frustrante para quem espera reações
          mais rápidas a eventos do noticiário, tende a reduzir a volatilidade nos
          mercados de juros futuros e facilita o planejamento de médio prazo para quem
          investe em renda fixa atrelada à Selic ou ao CDI.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> Comunicado do Copom (29/04/2026), Banco Central do Brasil, Boletim Focus (27/04/2026), reportagem g1 — Mariana Assis e Thiago Resende. Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o que fazer com a renda fixa agora">
        <p>
          Cortar a Selic com inflação ainda acima do teto da meta e com o Brent acima de US$ 100 é <strong>uma aposta arriscada</strong> do Banco Central — uma aposta de que o choque geopolítico será passageiro. Para o investidor pessoa física, a leitura prática é dupla: travar prefixados longos agora pode parecer atrativo dado o nível elevado das taxas, mas o IPCA+ continua sendo o porto seguro até o cenário fiscal e geopolítico ficar mais claro. CDBs com liquidez diária ainda pagam acima de 100% do CDI em bancos médios — vale travar agora, antes que o eventual avanço do ciclo de cortes comece a erodir esse prêmio.
        </p>
        <p className="mt-3">
          Minha visão para os próximos 60 dias: mantenha 40–50% da carteira de renda fixa em Tesouro IPCA+ de médio prazo (2030–2035), 30% em pós-fixado de alta liquidez para capturar o CDI elevado enquanto durar, e apenas 10–20% em prefixado, priorizando vencimentos abaixo de 4 anos para reduzir exposição ao risco eleitoral de 2026. A "serenidade" pedida pelo Copom também deveria valer para o investidor: não há urgência em reposicionar tudo de uma vez diante de um cenário geopolítico que pode se resolver — ou se agravar — em questão de semanas.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          { title: "Banco Central — Atas e decisões do Copom", url: "https://www.bcb.gov.br/controleinflacao/atascopom", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Expectativas de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Calculadora do Cidadão — Tesouro Direto", url: "https://www.tesourodireto.com.br/", publisher: "Tesouro Nacional", accessedAt: "Maio 2026" },
          { title: "Histórico de Selic", url: "https://www.bcb.gov.br/controleinflacao/historicotaxasjuros", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
          { title: "Brent Crude Oil — Spot Prices", url: "https://www.eia.gov/dnav/pet/pet_pri_spt_s1_d.htm", publisher: "U.S. Energy Information Administration", accessedAt: "Maio 2026" },
          { title: "Relatório Trimestral de Inflação", url: "https://www.bcb.gov.br/publicacoes/ri", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default CopomSelic145Maio2026;
