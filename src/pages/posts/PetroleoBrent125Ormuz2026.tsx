import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Flame, Globe, BarChart3, AlertTriangle, Lightbulb, TrendingUp, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/petroleo-brent-125-ormuz-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "petroleo-brent-125-bloqueio-ormuz-2026";
const TITLE = "Brent Ultrapassa US$ 125: Bloqueio em Ormuz, Combustível Mais Caro e o Que Fazer com Petrobras (PETR4)";

const PetroleoBrent125Ormuz2026 = () => {
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
            Petróleo · Brent · Ormuz · Geopolítica · PETR4
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Brent Ultrapassa US$ 125: Bloqueio em Ormuz, Combustível Mais Caro e o Que Fazer com Petrobras (PETR4)
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />4 de Maio, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Petróleo Brent US$ 125 bloqueio Estreito de Ormuz Trump 2026" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O preço do petróleo bruto Brent <strong>ultrapassou os US$ 125 por barril</strong> (cerca de R$ 624,73) na manhã desta quinta-feira (30/04), após o presidente dos EUA, Donald Trump, sinalizar a empresários da indústria petrolífera que pretende <strong>manter o bloqueio naval aos portos iranianos</strong> na entrada do Estreito de Ormuz. O salto de mais de <strong>6%</strong> no contrato de junho leva o Brent a níveis não vistos desde a crise financeira de 2008. Veja o impacto na inflação, nos combustíveis no Brasil e na sua carteira.
        </p>

        <p>
          O movimento de hoje não é um pico isolado — é a continuação de uma escalada que já dura mais de dois meses. Desde o início da guerra entre EUA e Irã, em fevereiro de 2026, o Brent saiu de uma faixa estável de US$ 65–75 para o atual patamar de US$ 125, uma valorização superior a 70% em pouco mais de nove semanas. Para colocar em perspectiva: a última vez que o petróleo esteve nesse nível foi em julho de 2008, semanas antes do colapso do Lehman Brothers — um período que entrou na história como um dos mais turbulentos para os mercados globais.
        </p>

        <p>
          O que diferencia esse choque dos anteriores é a combinação de causas. Não é apenas um corte de produção da OPEP nem uma crise de demanda — é um bloqueio físico de rota de transporte em uma das vias mais estratégicas do planeta. O Estreito de Ormuz, entre o Irã e Omã, tem apenas 33 km de largura no ponto mais estreito e é a única passagem marítima que conecta o Golfo Pérsico ao Oceano Índico. Cerca de <strong>1 em cada 5 barris de petróleo consumidos no mundo</strong> passa por esse corredor, segundo a U.S. Energy Information Administration. Quando essa rota é interrompida, não existe substituto rápido — os navios precisariam contornar toda a Península Arábica, adicionando semanas e custos logísticos enormes a cada carga.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Que Aconteceu — Os Números do Salto
        </h2>
        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ind: "Brent jun/2026", val: "US$ 125,36", note: "+6,2% no dia (30/04)", icon: "🛢️" },
            { ind: "Brent jul/2026", val: "US$ 113,85", note: "+3,1% — backwardation", icon: "📈" },
            { ind: "WTI (EUA)", val: "US$ 109,38", note: "+2,3% no dia", icon: "🇺🇸" },
            { ind: "Brent pré-guerra", val: "~US$ 70", note: "Antes de fevereiro/2026", icon: "📉" },
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
          A guerra no Irã está em sua <strong>nona semana</strong>. Os EUA mantêm o bloqueio aos portos iranianos enquanto o Estreito de Ormuz — passagem obrigatória de cerca de 20% do petróleo mundial — permanece fechado. O colapso das negociações entre EUA e Irã e a rejeição de Trump à proposta iraniana de reabertura tiraram do mercado a esperança de retomada rápida dos fluxos.
        </p>
        <blockquote>
          "O colapso das conversas entre EUA e Irã, juntamente com o relato de que o presidente Trump rejeitou a proposta do Irã para a reabertura do Estreito de Ormuz, faz com que o mercado perca a esperança de qualquer retomada rápida nos fluxos de petróleo." — Warren Patterson e Ewa Manthey, estrategistas do ING Bank
        </blockquote>

        <p>
          A curva de preços futuros do petróleo também conta uma história relevante. O contrato de junho (US$ 125,36) está mais caro que o de julho (US$ 113,85) — uma configuração chamada <strong>backwardation</strong>, que indica escassez física imediata. Em mercados normais, contratos futuros mais distantes costumam ser ligeiramente mais caros (contango), refletindo custos de armazenagem. Quando a curva inverte assim, o mercado está sinalizando que precisa de petróleo <em>agora</em>, não no futuro — um padrão típico de crises de oferta de curto prazo, como guerras e embargos, e não de mudanças estruturais de demanda.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-invest" />
          O Reflexo Global
        </h2>
        <p>
          Os mercados globais reagiram em cadeia ao novo patamar do petróleo. Ativos considerados "porto seguro" — iene japonês, ouro e títulos do Tesouro americano — registraram movimentos típicos de aversão a risco, enquanto bolsas de países importadores líquidos de petróleo sofreram quedas mais pronunciadas que as de exportadores:
        </p>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Mercado</th>
              <th className="text-left py-3 px-4">Movimento</th>
              <th className="text-left py-3 px-4">Observação</th>
            </tr></thead>
            <tbody>
              {[
                ["Dólar/Iene", "160,51 ¥", "Maior nível em quase 2 anos — porto seguro"],
                ["Euro/Dólar", "US$ 1,1663", "Recuo frente ao dólar"],
                ["Treasury 10y", "4,42%", "Alta após Fed adiar cortes"],
                ["S&P 500", "-0,1% (24.673)", "Mistos — Visa +8,3%, Starbucks +8,4%"],
                ["Dow Jones", "-0,6% (48.861)", "Pressionado por industriais"],
                ["Nikkei 225", "-1,6% (58.967)", "Maior choque na Ásia"],
                ["Hang Seng", "-1,3% (25.772)", "Sensibilidade ao petróleo"],
                ["Sensex (Índia)", "-1,2%", "Importadora líquida — pressão pesada"],
              ].map(([m, mv, obs]) => (
                <tr key={m} className="border-t border-border">
                  <td className="py-3 px-4 font-medium text-xs">{m}</td>
                  <td className="py-3 px-4 text-invest font-bold text-xs">{mv}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          O padrão é claro: a Índia, maior importadora líquida de petróleo da Ásia, sofreu a segunda maior queda da tabela. O Japão, que importa praticamente todo o petróleo que consome, viu o Nikkei cair 1,6% — a maior queda entre os índices listados. Já o S&P 500 ficou praticamente estável, com forte dispersão interna: enquanto setores sensíveis a energia caíram, ações de empresas com poder de repasse de preços ao consumidor — como Visa e Starbucks — subiram mais de 8% no dia, mostrando que o mercado diferencia empresas resilientes de empresas vulneráveis ao choque.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-invest" />
          O Impacto no Brasil
        </h2>
        <p>
          O Brasil ocupa uma posição peculiar nesse cenário: é simultaneamente exportador líquido de petróleo cru (principalmente via pré-sal) e importador de derivados refinados, especialmente diesel. Essa dualidade faz com que o choque tenha efeitos mistos — positivos para a balança comercial agregada, mas negativos para a inflação ao consumidor e para setores que dependem de combustível:
        </p>
        <ul>
          <li><strong>Combustíveis</strong> — A disparada já está se refletindo nos preços de gasolina, diesel e GLP nas refinarias. O custo do diesel afeta diretamente o frete de toda a cadeia logística, encarecendo desde alimentos até produtos industriais que dependem de transporte rodoviário — o modal predominante no Brasil.</li>
          <li><strong>Construção civil</strong> — Insumos derivados do petróleo (asfalto, plásticos, tintas, impermeabilizantes) e o frete encarecido elevam os custos do setor. Construtoras com contratos firmados antes do choque sofrem compressão de margem nos projetos em andamento.</li>
          <li><strong>Inflação (IPCA)</strong> — Combustíveis pesam tanto no índice cheio quanto nos núcleos de inflação, por afetarem o custo de transporte de praticamente toda a cesta de consumo. O Focus já projeta IPCA de 4,86% para 2026, acima do teto da meta de 4,5% definida pelo Conselho Monetário Nacional.</li>
          <li><strong>Política monetária</strong> — Pressão adicional sobre o Copom, que cortou a Selic para 14,50% no dia anterior (29/04), mas pediu "serenidade e cautela" no comunicado — um sinal de que o ritmo de cortes pode desacelerar ainda mais se o choque do petróleo persistir.</li>
          <li><strong>Câmbio</strong> — Dólar a R$ 4,977 (+0,5% em 30/04). Petróleo caro em dólar tende a fortalecer o USD globalmente como moeda de denominação das commodities, mas como o Brasil é exportador líquido de petróleo, o efeito sobre o real é misto e pode até se inverter no médio prazo se o saldo comercial petrolífero crescer.</li>
          <li><strong>Balança comercial</strong> — O Brasil exporta petróleo cru (principalmente do pré-sal, com baixo custo de extração) e importa derivados refinados como diesel e gasolina. No curto prazo, o saldo da balança de petróleo tende a melhorar com preços mais altos do cru exportado, mas a conta de importação de derivados também sobe — o efeito líquido depende do mix de produção das refinarias nacionais.</li>
        </ul>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          O Que Fazer com a Carteira
        </h2>
        <p>
          Cada classe de ativo reage de forma distinta a um choque dessa magnitude. Antes de fazer qualquer movimento na carteira, é importante entender que setores são beneficiados, prejudicados ou apenas atravessam o período com volatilidade elevada:
        </p>
        <div className="not-prose my-4 space-y-2">
          {[
            { tipo: "PETR4 / PETR3", sinal: "🟢 Beneficiada", txt: "Brent acima de US$ 100 amplia margens da Petrobras de forma direta — receita em dólar e custo de extração em real, especialmente no pré-sal onde o custo é abaixo de US$ 7/barril. Atenção ao risco político de tabelamento de preços e à política de dividendos, que historicamente sofre interferência em períodos de inflação alta. Cenário do petróleo a US$ 125 sustenta dividend yield acima de 13–15% projetado se não houver intervenção." },
            { tipo: "PRIO3 (PetroRio)", sinal: "🟢 Alavancada", txt: "Empresa pure-play de exploração e produção — sem refino, sem distribuição de combustíveis, sem exposição política a preços na bomba. É alavancada operacionalmente ao Brent: cada US$ 10 de variação no barril tem impacto proporcionalmente maior no fluxo de caixa da empresa do que na Petrobras. Maior potencial de upside em choques de alta, mas também maior potencial de queda em correções de preço." },
            { tipo: "RECV3 / RRRP3", sinal: "🟢 Setor favorecido", txt: "Pequenas independentes (juniors) do setor de petróleo ganham com preços altos de forma semelhante à PRIO3, mas com volume de produção menor e maior volatilidade de resultado. São opções para quem busca exposição alavancada ao tema mas aceita oscilações mais bruscas no preço da ação." },
            { tipo: "Aéreas (AZUL4, GOLL4)", sinal: "🔴 Prejudicadas", txt: "Combustível de aviação (QAV) representa aproximadamente 30% do custo operacional de uma companhia aérea. O setor é altamente exposto a choques no petróleo e tem capacidade limitada de repasse rápido aos preços das passagens devido à concorrência. Prefira evitar exposição enquanto Ormuz permanecer fechado e o Brent estiver acima de US$ 100." },
            { tipo: "Logística e transportes", sinal: "🟡 Cautela", txt: "RAIL3, JSLG3 e CCR3 sofrem com diesel caro no curto prazo, mas costumam ter contratos com cláusulas de reajuste por índice de combustível que repassam parte do custo ao cliente final com defasagem de um a três meses. Atenção às margens no trimestre em que o choque ocorre — o efeito negativo é concentrado nesse período de transição." },
            { tipo: "Tesouro IPCA+ longo", sinal: "🟢 Hedge", txt: "Um choque de petróleo eleva a inflação esperada de forma persistente, já que afeta toda a cadeia de custos via transporte. Títulos NTN-B com vencimento em 2035 ou 2045 protegem o poder de compra do investidor justamente nos cenários em que a inflação surpreende para cima — o que está acontecendo agora." },
            { tipo: "Ouro e dólar", sinal: "🟢 Diversificação", txt: "Em momentos de tensão geopolítica aguda, ouro e dólar historicamente atuam como porto seguro, absorvendo fluxo de capital que sai de ativos de risco. Para o investidor brasileiro, considere ETFs como GOLD11 (replica o preço do ouro em reais) e BDRs de mineradoras de ouro para diversificação adicional fora da bolsa local." },
            { tipo: "Varejo e construção civil", sinal: "🔴 Pressionadas", txt: "Custos de insumos derivados de petróleo (plásticos, tintas, asfalto) e frete sobem simultaneamente. LREN3, MGLU3, MRVE3 e CURY3 sofrem com margens comprimidas no trimestre do choque — especialmente empresas com contratos de venda já fixados e custos de insumo flutuantes." },
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

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Cenários para os Próximos Meses
        </h2>
        <p>
          A trajetória do Brent nos próximos meses depende quase inteiramente da evolução do conflito Irã-EUA e do status do Estreito de Ormuz. Mapeamos três cenários com suas implicações práticas para o portfólio:
        </p>
        <div className="not-prose my-4 space-y-3">
          {[
            { n: "1", titulo: "🟢 Cenário Otimista — Cessar-fogo e reabertura de Ormuz", desc: "Brent recua para US$ 80–90 em questão de semanas após um acordo de cessar-fogo verificável. A Selic acelera o ritmo de cortes, voltando à trajetória de queda para 12% projetada antes do choque. PETR4 corrige do pico mas mantém dividendos elevados em razão dos resultados acumulados durante o período de preços altos. Bolsa em alta generalizada, com destaque para setores que estavam pressionados (varejo, construção, aéreas) recuperando terreno perdido." },
            { n: "2", titulo: "🟡 Cenário Base — Conflito prolongado e Brent em US$ 100–125", desc: "O conflito não escala para confronto direto entre potências, mas também não se resolve rapidamente — Ormuz permanece com fluxo restrito por meses. Inflação fica acima do teto da meta por todo o ano. Copom interrompe o ciclo de cortes e pode até considerar pausa prolongada na Selic. Petroleiras seguem favorecidas com margens elevadas. Mercado fica lateralizado, com seletividade setorial alta — vencedores e perdedores claramente definidos pelo grau de exposição ao petróleo." },
            { n: "3", titulo: "🔴 Cenário de Estresse — Escalada militar direta EUA-Irã", desc: "Confronto militar direto entre as potências eleva o Brent acima de US$ 150, território inédito desde 2008. Recessão global se torna cenário-base para a maioria dos analistas. A Selic, paradoxalmente, pode até subir novamente para conter a inflação importada, mesmo com a economia desacelerando — um cenário de estagflação. Fly-to-quality intenso: dólar, ouro e Tesouro IPCA+ disparam enquanto bolsas globais sofrem correções de dois dígitos." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="flex gap-3 bg-card rounded-xl border border-invest/30 p-4">
              <span className="w-7 h-7 rounded-full bg-invest/15 text-invest font-bold flex items-center justify-center shrink-0 text-xs">{n}</span>
              <div>
                <h3 className="font-bold text-sm mb-0.5">{titulo}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          Como Construir Proteção na Carteira Sem Apostar Tudo no Petróleo
        </h2>
        <p>
          Para investidores que não querem concentrar posição em ações de petróleo mas desejam algum nível de proteção contra a continuidade do choque, existem alternativas mais defensivas. A combinação de <strong>Tesouro IPCA+ de longo prazo</strong> com uma pequena posição em <strong>ouro via ETF (GOLD11)</strong> oferece proteção dupla: contra a inflação que o choque de petróleo está alimentando e contra o risco geopolítico que pode se intensificar. Para quem já tem exposição a Petrobras na carteira via fundos de índice (BOVA11 tem peso relevante em PETR4), a exposição adicional direta pode ser dispensável — o BOVA11 já captura parte do movimento de alta sem concentração de risco específico.
        </p>
        <p>
          Um ponto frequentemente esquecido: choques de petróleo de origem geopolítica tendem a ser mais persistentes do que choques de demanda. Crises de demanda (como a de 2020, com a pandemia) se revertem quando a atividade econômica normaliza. Crises de oferta por bloqueio físico de rotas, como Ormuz, dependem de decisões políticas e militares que podem se arrastar por meses ou até anos — vide o efeito duradouro da guerra Rússia-Ucrânia nos preços de gás natural europeu desde 2022. Isso significa que o horizonte de planejamento para esse tipo de choque deve ser mais longo do que o investidor normalmente considera.
        </p>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          📚 <strong>Fontes:</strong> Reportagem g1/Associated Press (30/04/2026), ING Bank Research, dados de mercado da quinta-feira (30/04). Artigo educacional, não constitui recomendação de investimento.
        </p>
      </div>

      <EditorialTake category="invest" title="Análise do Marcos: o que o Brent diz para sua carteira">
        <p>O Estreito de Ormuz é o gargalo geopolítico mais perigoso do planeta: cerca de <strong>20% do petróleo mundial</strong> passa por ali todo dia (US Energy Information Administration). Quando o Brent salta para US$ 125, o investidor brasileiro precisa pensar em <strong>três camadas</strong>: (1) Petrobras (PETR4) tende a se valorizar, mas o governo pode segurar preços na bomba e comer o lucro — risco político clássico do papel; (2) inflação importada pressiona o IPCA e atrasa cortes da Selic, ruim para small caps e setores dependentes de crédito; (3) o real tende a se valorizar quando o Brasil é exportador líquido de petróleo, mas o efeito é gradual e pode demorar trimestres para se refletir totalmente no câmbio.</p>
        <p className="mt-3">Não é trivial — quem comprou PETR4 "porque o petróleo subiu" em 2022 aprendeu na pele que a equação envolve política tarifária, não só preço internacional. Minha recomendação para quem já está exposto: não aumente posição em PETR4 só por causa do choque atual — se você já tem exposição via BOVA11 ou ações diretas, o ganho marginal de concentrar mais raramente compensa o risco adicional. Prefira usar o momento para reforçar Tesouro IPCA+ longo, que protege contra o efeito colateral mais certo deste evento: a inflação mais alta e persistente em 2026.</p>
      </EditorialTake>
      <ArticleSources category="invest"
        sources={[
          { title: "Brent Crude Oil — Spot Prices", url: "https://www.eia.gov/dnav/pet/pet_pri_spt_s1_d.htm", publisher: "U.S. Energy Information Administration", accessedAt: "Maio 2026" },
          { title: "World Oil Transit Chokepoints — Strait of Hormuz", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints", publisher: "U.S. EIA", accessedAt: "Maio 2026" },
          { title: "Relação com Investidores — Petrobras", url: "https://www.investidorpetrobras.com.br/", publisher: "Petrobras", accessedAt: "Maio 2026" },
          { title: "OPEC Monthly Oil Market Report", url: "https://www.opec.org/opec_web/en/publications/202.htm", publisher: "OPEC", accessedAt: "Maio 2026" },
          { title: "Reuters — Energy", url: "https://www.reuters.com/business/energy/", publisher: "Reuters", accessedAt: "Maio 2026" },
          { title: "Boletim Focus — Expectativas de Mercado", url: "https://www.bcb.gov.br/publicacoes/focus", publisher: "Banco Central do Brasil", accessedAt: "Maio 2026" },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="invest" />
    </article>
  );
};

export default PetroleoBrent125Ormuz2026;
