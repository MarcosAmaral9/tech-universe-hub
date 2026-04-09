import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, AlertTriangle, BarChart3, Shield, Lightbulb, Flame } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/guerra-ira-petrobras-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
 
const GuerraIraPetrobras2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "guerra-ira-petroleo-petrobras-2026",
      "Guerra EUA-Irã e Estreito de Ormuz: Vale a Pena Investir em Petrobras (PETR4) Agora?",
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
            Geopolítica · Petróleo · Ações
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Guerra EUA-Irã e Estreito de Ormuz: Vale a Pena Investir em Petrobras (PETR4) Agora?
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />09 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
 
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={heroImg}
          alt="Guerra EUA Irã petróleo Petrobras PETR4 2026"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
 
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Desde 28 de fevereiro de 2026, quando EUA e Israel iniciaram ataques conjuntos contra o Irã, o mundo vive o que analistas do Goldman Sachs já chamam de <strong>o terceiro choque do petróleo da história</strong> — depois de 1973 e 1979. O fechamento do Estreito de Ormuz, por onde passa 20% do petróleo global, disparou o barril Brent de US$ 73 para mais de US$ 116 em questão de semanas. No meio disso tudo, as ações da <strong>Petrobras (PETR4)</strong> acumulam alta de 60% em 2026. Mas o cessar-fogo frágil anunciado em 8 de abril mudou o jogo. Vale entrar agora ou já passou a hora?
        </p>
 
        {/* ── LINHA DO TEMPO ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-invest" />
          A Guerra em Números: Linha do Tempo do Conflito
        </h2>
        <p>
          Para entender o impacto no seu bolso, é preciso entender o que aconteceu. O conflito escalou rapidamente e cada evento teve reflexo imediato nos mercados:
        </p>
        <div className="not-prose my-6 space-y-0">
          {[
            { data: "28 Fev", evento: "EUA e Israel atacam o Irã", impacto: "Brent salta de US$ 73 para US$ 80 em um dia (+9,6%)" },
            { data: "02 Mar", evento: "Irã fecha o Estreito de Ormuz", impacto: "Brent ultrapassa US$ 90 — 150 navios petroleiros retidos" },
            { data: "09 Mar", evento: "Irmã usa Ormuz como arma de guerra declarada", impacto: "Brent atinge pico de US$ 116,25 — máxima histórica recente" },
            { data: "01 Abr", evento: "Pressão máxima: Trump ameaça destruir o Irã", impacto: "Brent oscila entre US$ 100–108; PETR4 atinge R$ 47,29" },
            { data: "07 Abr", evento: "Ultimato de Trump: prazo até terça-feira à noite", impacto: "Pânico nos mercados; Brent em US$ 111+" },
            { data: "08 Abr", evento: "Cessar-fogo de 2 semanas mediado pelo Paquistão", impacto: "Brent cai 13–16% no dia; PETR4 perde R$ 27,9 bi em valor de mercado" },
            { data: "08 Abr", evento: "Israel ataca o Líbano; Irã fecha Ormuz novamente", impacto: "Petróleo volta a subir; PETR4 recupera perdas no mesmo dia" },
            { data: "09 Abr", evento: "Irã exige pedágio por barril para liberar Ormuz", impacto: "Incerteza total — negociações em Islamabad marcadas para 11/04" },
          ].map(({ data, evento, impacto }) => (
            <div key={data} className="flex gap-0 not-prose">
              <div className="flex flex-col items-center mr-4">
                <div className="w-3 h-3 rounded-full bg-invest mt-1.5 shrink-0" />
                <div className="w-0.5 bg-border flex-1 mt-1" />
              </div>
              <div className="pb-6">
                <span className="text-xs font-bold text-invest uppercase tracking-wide">{data}</span>
                <p className="font-semibold text-sm mt-0.5 mb-1">{evento}</p>
                <p className="text-sm text-muted-foreground">{impacto}</p>
              </div>
            </div>
          ))}
        </div>
 
        {/* ── ESTREITO DE ORMUZ ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-invest" />
          Por Que o Estreito de Ormuz Importa Para Seu Investimento
        </h2>
        <p>
          O Estreito de Ormuz é uma faixa de água de apenas 33 km de largura no ponto mais estreito, entre o Irã e a Península Arábica. Mas sua importância estratégica é descomunal: por ali passam aproximadamente <strong>20 milhões de barris de petróleo por dia</strong> — o equivalente a 20% de toda a oferta global. Países como Arábia Saudita, Emirados Árabes, Kuwait, Iraque e Qatar dependem do estreito para exportar seu petróleo.
        </p>
        <p>
          Quando o Irã fechou o estreito em março de 2026, <strong>150 navios petroleiros ficaram retidos</strong>. O impacto foi imediato e global: o gás natural liquefeito (GNL) disparou 40% na Europa, e o Goldman Sachs projetou que os preços europeus de gás poderiam quase dobrar se o bloqueio durasse um mês inteiro.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { titulo: "20% do petróleo global", desc: "passa pelo estreito todos os dias", icon: "🛢️" },
            { titulo: "US$ 116/barril", desc: "pico atingido em março de 2026", icon: "📈" },
            { titulo: "150 navios retidos", desc: "bloqueados quando Irã fechou o acesso", icon: "🚢" },
          ].map(({ titulo, desc, icon }) => (
            <div key={titulo} className="bg-card rounded-xl border border-invest/20 p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-bold text-invest text-lg mb-1">{titulo}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p>
          Em 9 de abril, com o cessar-fogo ameaçado pelos ataques israelenses ao Líbano, o Irã passou a exigir um <strong>pedágio por barril transportado</strong> pelo estreito — uma medida que viola tratados internacionais de navegação e que torna a situação ainda mais imprevisível antes das negociações marcadas para 11 de abril em Islamabad.
        </p>
 
        <AdLeaderboard className="my-8" />
 
        {/* ── PETROBRAS ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          PETR4: +60% em 2026 — Entendendo a Alta
        </h2>
        <p>
          A correlação entre o preço do petróleo e as ações da Petrobras é direta e historicamente comprovada. Em 27 de fevereiro, o Brent fechou em US$ 73,25 e a PETR4 era negociada a R$ 39. Em 1º de abril, com o Brent em US$ 107, a ação fechou a R$ 47,29 — uma valorização de 20% apenas em março. No acumulado do ano, PETR4 sobe aproximadamente <strong>60%</strong>, enquanto o Brent acumula alta superior a 80%.
        </p>
        <p>
          Mas a guerra explica tudo? Não exatamente. Analistas da Empiricus Research apontam que a Petrobras também se beneficia de fatores estruturais: <strong>crescimento orgânico de produção no pré-sal</strong>, modernização das refinarias e a perspectiva de <strong>autossuficiência em diesel</strong> — anunciada pela presidente Magda Chambriard em abril. A produção brasileira de petróleo bateu recorde em fevereiro, com 5,304 milhões de barris de óleo equivalente por dia, segundo a ANP.
        </p>
 
        <h3 className="text-xl font-bold mt-8 mb-3">O Que os Grandes Bancos Estão Dizendo</h3>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4">Banco / Corretora</th>
                <th className="text-left py-3 px-4">Recomendação</th>
                <th className="text-left py-3 px-4">Preço-Alvo PETR4</th>
                <th className="text-left py-3 px-4">Brent Projetado 2026</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BTG Pactual", "Compra ✅", "R$ 56", "US$ 85–100"],
                ["JP Morgan", "Compra ✅", "R$ ~58 (US$ 24 ADR)", "US$ 85"],
                ["Citi", "Neutro ⚖️", "R$ 49 (US$ 19,5 ADR)", "US$ 77–85"],
                ["Bank of America", "Neutro ⚖️", "R$ 49", "US$ 77,50"],
                ["Daycoval", "Compra ✅", "N/D", "Acima de US$ 80"],
              ].map(([banco, rec, alvo, brent]) => (
                <tr key={banco} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{banco}</td>
                  <td className="py-3 px-4">{rec}</td>
                  <td className="py-3 px-4 text-invest font-bold">{alvo}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{brent}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Fontes: BTG Pactual, JP Morgan, Citi, Bank of America — atualizações de março/abril 2026
          </p>
        </div>
        <p>
          De 11 casas de análise que cobrem o papel PETR4, <strong>8 possuem recomendação de compra</strong> e 3 são neutras. Nenhuma recomenda venda. O BTG Pactual, que havia saído da ação no início do ano, voltou a incluí-la na carteira recomendada de abril — trocando a PRIO (PRIO3) pela Petrobras, sob o argumento de que a estatal oferece <strong>melhor relação risco-retorno</strong> em um cenário de possível normalização.
 
        </p>
 
        <AdRectangle className="my-8" />
 
        {/* ── VALE A PENA? ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Vale a Pena Investir em PETR4 Agora? Os 3 Cenários
        </h2>
        <p>
          A resposta depende do cenário que se materializar para o conflito. Veja os três principais:
        </p>
 
        <div className="not-prose my-6 space-y-4">
          <div className="bg-card rounded-xl border border-green-500/30 p-5">
            <h3 className="font-bold text-green-400 mb-2">🟢 Cenário 1: Guerra Continua / Estreito Fechado</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Cessar-fogo fracassa, negociações de Islamabad (11/04) são suspensas, Ormuz permanece bloqueado ou com restrições.
            </p>
            <p className="text-sm"><strong>Petróleo:</strong> Brent volta para US$ 105–120. <strong>PETR4:</strong> pressão de alta — pode testar novos recordes acima de R$ 50. <strong>Dividendo yield estimado:</strong> acima de 12% em 2026.</p>
          </div>
 
          <div className="bg-card rounded-xl border border-yellow-500/30 p-5">
            <h3 className="font-bold text-yellow-400 mb-2">🟡 Cenário 2: Cessar-Fogo se Sustenta (Base)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Negociações avançam, Ormuz abre gradualmente, prêmio de risco geopolítico diminui mas não zera.
            </p>
            <p className="text-sm"><strong>Petróleo:</strong> Brent se acomoda entre US$ 80–95. <strong>PETR4:</strong> pode recuar para R$ 40–45 no curto prazo, mas mantém fundamentos sólidos. <strong>Dividend yield estimado:</strong> 8–9% em 2026 — ainda atrativo.</p>
          </div>
 
          <div className="bg-card rounded-xl border border-red-500/30 p-5">
            <h3 className="font-bold text-red-400 mb-2">🔴 Cenário 3: Paz Total e Normalização</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Acordo permanente, Ormuz plenamente reaberto, produção iraniana volta ao mercado global.
            </p>
            <p className="text-sm"><strong>Petróleo:</strong> Brent recua para US$ 65–75. <strong>PETR4:</strong> correção significativa, possível volta à faixa de R$ 35–38. <strong>Porém:</strong> BTG calcula que mesmo com Brent a US$ 80, a estatal entregaria 9% de dividend yield e 9% de FCF yield — colchão relevante.</p>
          </div>
        </div>
 
        <h3 className="text-xl font-bold mt-8 mb-3">O Argumento a Favor: Por Que Petrobras Pode Continuar Subindo</h3>
        <ul>
          <li><strong>Petróleo estruturalmente caro:</strong> Analistas da Daycoval apontam que, mesmo com o fim da guerra, o Irã levará meses para reconstruir sua cadeia produtiva — o petróleo deve permanecer elevado acima de US$ 80.</li>
          <li><strong>Valuation ainda atrativo:</strong> PETR4 negocia a cerca de 9 vezes o lucro estimado para 2026 — desconto relevante frente a pares globais como Exxon e Chevron.</li>
          <li><strong>Dividendos bilionários:</strong> Com o Brent acima de US$ 80, a Petrobras tem capacidade de distribuir dividendos próximos a dois dígitos — raro no setor em mercados emergentes.</li>
          <li><strong>Pré-sal e produção recorde:</strong> O crescimento orgânico da produção independe da guerra — a Petrobras produz petróleo mais barato que a maioria dos concorrentes globais.</li>
        </ul>
 
        <h3 className="text-xl font-bold mt-8 mb-3">Os Riscos: Por Que Ter Cautela</h3>
        <ul>
          <li><strong>Volatilidade extrema:</strong> Em 8 de abril, só no anúncio do cessar-fogo, a PETR4 chegou a perder R$ 27,9 bilhões em valor de mercado em uma única sessão — a maior queda intradia em 4 anos.</li>
          <li><strong>Risco político interno:</strong> O ano de 2026 é eleitoral no Brasil. Mudanças na governança da Petrobras em função de eleições podem impactar a política de dividendos e preços de combustíveis.</li>
          <li><strong>Intervenção nos preços dos combustíveis:</strong> O governo pode pressionar a estatal a não repassar toda a alta do petróleo aos consumidores, reduzindo a margem.</li>
          <li><strong>Cessar-fogo frágil:</strong> O acordo atual tem prazo de apenas duas semanas e já está sendo questionado pelas partes — a incerteza permanece altíssima.</li>
        </ul>
 
        {/* ── COMO INVESTIR ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Como Posicionar Sua Carteira — Estratégias por Perfil
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            {
              perfil: "Conservador",
              emoji: "🛡️",
              estrategia: "Evite exposição direta a PETR4 por enquanto. Se quiser petróleo na carteira, prefira ETFs de commodities diversificados (como GOLD11 ou fundos multimercado com exposição a energia). O risco de queda rápida no caso de paz é elevado para quem tem baixa tolerância.",
            },
            {
              perfil: "Moderado",
              emoji: "⚖️",
              estrategia: "Pode ter até 5% da carteira em PETR4, mas com stop loss definido. Uma entrada parcial agora, com complemento caso haja nova correção (tipo a de 8 de abril), é uma abordagem racional. Priorize o recebimento de dividendos como retorno, não a especulação no preço.",
            },
            {
              perfil: "Arrojado",
              emoji: "🚀",
              estrategia: "Com petróleo estruturalmente acima de US$ 80 no horizonte de 12 meses, PETR4 ainda tem espaço até o preço-alvo do BTG (R$ 56). Posição entre 8–12% da carteira pode fazer sentido. Fique atento ao noticiário geopolítico — cada tweet de Trump sobre Ormuz move o papel.",
            },
          ].map(({ perfil, emoji, estrategia }) => (
            <div key={perfil} className="bg-card rounded-xl border border-invest/20 p-5">
              <h3 className="font-bold mb-2 text-base">{emoji} Investidor {perfil}</h3>
              <p className="text-sm text-muted-foreground">{estrategia}</p>
            </div>
          ))}
        </div>
 
        {/* ── EFEITO NO BRASIL ── */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          O Efeito Para o Brasil Além das Ações
        </h2>
        <p>
          O Brasil ocupa uma posição única nesta crise: é ao mesmo tempo <strong>produtor e exportador relevante de petróleo</strong>, o que beneficia a Petrobras e as contas públicas, mas também <strong>importador de fertilizantes da região</strong> — cerca de 40% dos fertilizantes agrícolas usados no agronegócio brasileiro vêm do Oriente Médio. Isso significa que a alta do petróleo tem dois lados:
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Pontos Positivos para o Brasil</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Receita da Petrobras e dividendos ao Tesouro Nacional disparam</li>
              <li>• Exportações de petróleo bruto geram superávit comercial</li>
              <li>• PETR4 impulsiona o Ibovespa — positivo para fundos de ações</li>
              <li>• Produção recorde no pré-sal consolida o Brasil como potência energética</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-red-500/20 p-5">
            <h3 className="font-bold text-red-400 mb-3">⚠️ Pontos de Atenção</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Alta dos combustíveis pressiona inflação (IPCA já projetado em 4,31%)</li>
              <li>• Fertilizantes mais caros encarecem a produção do agronegócio</li>
              <li>• Risco de intervenção política nos preços da Petrobras em ano eleitoral</li>
              <li>• Impacto sobre frete e logística — custos sobem em toda a cadeia</li>
            </ul>
          </div>
        </div>
 
        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusão: Momento de Oportunidade com Risco Elevado</h2>
        <p>
          A guerra EUA-Irã criou uma janela de oportunidade real para investidores em Petrobras. Com o barril estruturalmente acima de US$ 80 no horizonte de 12 meses — mesmo no cenário de normalização — a estatal consegue entregar dividend yield próximo de 9%, valuation descontado e crescimento de produção. Mas o caminho não é linear: a volatilidade é extrema, o cessar-fogo é frágil, e cada notícia de Ormuz move o papel violentamente em questão de horas.
        </p>
        <p>
          A pergunta não é "Petrobras é boa?". É <strong>"você aguenta ver a ação cair 8% no dia de um cessar-fogo e não apertar o botão de venda?"</strong>. Se a resposta for sim, os fundamentos estão do seu lado. Se não, a renda fixa indexada à inflação (IPCA+) segue sendo a alternativa mais segura em um Brasil onde o IPCA projeta 4,31% em 2026.
        </p>
 
        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você tem PETR4 na carteira? 💰</h3>
          <p className="text-muted-foreground">Conta nos comentários sua estratégia! 👇</p>
        </div>
 
        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este artigo tem caráter exclusivamente informativo e educacional. Não constitui recomendação de investimento. Antes de tomar qualquer decisão financeira, consulte um assessor de investimentos certificado. Investimentos em ações envolvem riscos, incluindo perda do capital investido.
        </p>
      </div>
 
      <RelatedPosts currentSlug="guerra-ira-petroleo-petrobras-2026" />
      <CommentSection
        postId="guerra-ira-petroleo-petrobras-2026"
        postTitle="Guerra EUA-Irã e Estreito de Ormuz: Vale a Pena Investir em Petrobras (PETR4) Agora?"
      />
    </article>
  );
};
 
export default GuerraIraPetrobras2026;
