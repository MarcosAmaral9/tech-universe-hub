import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, TrendingUp, BarChart3, Shield, Lightbulb, DollarSign } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/tesouro-direto-guia-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const TesouroPrefixadoVsIPCA2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "tesouro-prefixado-vs-ipca-2026",
      "Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026",
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
            Renda Fixa · Tesouro Direto · Selic
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Tesouro Direto Prefixado IPCA+ 2026 qual escolher" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com a Selic iniciando seu ciclo de queda — saindo de 15% e projetada em 12,25% até o fim de 2026 — a pergunta que todo investidor de renda fixa está fazendo é: devo travar uma taxa prefixada agora ou continuar protegido com IPCA+? A resposta não é óbvia e depende do seu cenário. Este guia resolve de uma vez por todas essa dúvida com exemplos numéricos reais.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          Entendendo os Três Tipos de Tesouro Direto
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Título</th>
              <th className="text-left py-3 px-4">Como Funciona</th>
              <th className="text-left py-3 px-4">Taxa Atual (abr/26)</th>
              <th className="text-left py-3 px-4">Ganha se...</th>
            </tr></thead>
            <tbody>
              {[
                ["Tesouro Selic (LFT)", "Rende a taxa Selic do dia, sem volatilidade", "~Selic (14,75% a.a.)", "Selic subir ou ficar alta"],
                ["Tesouro Prefixado", "Taxa travada na compra. Você sabe exatamente o que vai receber", "~13,5% a.a. (2029)", "Selic cair abaixo da taxa travada"],
                ["Tesouro IPCA+ (NTN-B)", "IPCA + uma taxa real. Protege contra inflação com retorno real garantido", "IPCA + ~6,5% a.a. (2035)", "Inflação subir ou se manter elevada"],
              ].map(([titulo, como, taxa, ganha]) => (
                <tr key={titulo} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{titulo}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{como}</td>
                  <td className="py-3 px-4 font-bold">{taxa}</td>
                  <td className="py-3 px-4 text-xs">{ganha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-invest" />
          O Caso do Prefixado em 2026: A Janela de Oportunidade
        </h2>
        <p>
          O Tesouro Prefixado é o grande beneficiário de um ciclo de queda de juros. O raciocínio é simples: <strong>se você trava 13,5% hoje e a Selic cair para 12%</strong>, você está ganhando 1,5 ponto percentual a mais do que o mercado oferece — todo ano, até o vencimento. Além disso, o título se valoriza no mercado secundário, podendo ser vendido antes do vencimento com lucro.
        </p>
        <p>
          O estrategista-chefe do BTG Pactual recomenda prefixados com vencimento de <strong>2 a 4 anos</strong>, especificamente para não se expor demais ao risco inflacionário da guerra no Oriente Médio, que pode pressionar preços no médio prazo.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-invest/20 p-6">
          <h3 className="font-bold mb-4 text-sm">📊 Simulação: R$ 10.000 investidos no Tesouro Prefixado 2029</h3>
          <div className="space-y-3">
            {[
              { cenario: "Selic cai para 9,50% (mercado projeta para 2029)", resultado: "R$ 16.850 bruto (IR 15% = R$ 15.322)", cor: "text-green-400", label: "🟢 Cenário base" },
              { cenario: "Selic para em 12% e não cai mais", resultado: "R$ 15.920 bruto (IR 15% = R$ 14.532)", cor: "text-yellow-400", label: "🟡 Cenário conservador" },
              { cenario: "Selic sobe para 16% (inflação volta)", resultado: "Título desvaloriza no mercado. Se segurar até venc., recebe os 13,5% acordados", cor: "text-red-400", label: "🔴 Cenário adverso" },
            ].map(({ cenario, resultado, cor, label }) => (
              <div key={cenario} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="text-xs font-bold">{label}</span>
                <p className="text-sm text-muted-foreground mt-0.5">{cenario}</p>
                <p className={`text-sm font-bold mt-0.5 ${cor}`}>{resultado}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">*Simulações aproximadas. IR regressivo: alíquota cai para 15% após 720 dias.</p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-invest" />
          O Caso do IPCA+: O Escudo Contra a Inflação
        </h2>
        <p>
          O Tesouro IPCA+ garante retorno real — ou seja, você sempre ganha acima da inflação. Com o IPCA projetado em 4,31% em 2026 e taxas reais de IPCA+6,5%, isso significa <strong>retorno nominal de cerca de 10,8% ao ano</strong> no cenário atual — ainda muito atrativo.
        </p>
        <p>
          O IPCA+ se torna especialmente valioso no cenário de guerra no Oriente Médio, que pode pressionar preços de combustíveis e fertilizantes, elevando a inflação brasileira acima do previsto. Se o IPCA subir para 6%, seu retorno nominal com IPCA+6,5% vai para 12,5% — protegendo automaticamente.
        </p>
        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-green-500/20 p-5">
            <h3 className="font-bold text-green-400 mb-3">✅ Escolha o IPCA+ se...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Você tem medo de inflação surpresa (guerra, câmbio)</li>
      <AdInArticle />
              <li>• Quer preservar poder de compra no longo prazo</li>
              <li>• Poupando para aposentadoria (10+ anos)</li>
              <li>• Preferir certeza de retorno real a especular com juros</li>
              <li>• Horizonte maior que 5 anos</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-amber-500/20 p-5">
            <h3 className="font-bold text-amber-400 mb-3">✅ Escolha o Prefixado se...</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Você acredita que a Selic vai cair de verdade</li>
              <li>• Quer maximizar retorno em 2–4 anos</li>
              <li>• Confia na política monetária do BC</li>
              <li>• Tem tolerância a marcação a mercado (volatilidade)</li>
              <li>• Pode segurar o título até o vencimento se necessário</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-invest" />
          Comparação Direta: R$ 10.000 nos Três Títulos por 3 Anos
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Título</th>
              <th className="text-left py-3 px-4">Taxa Bruta</th>
              <th className="text-left py-3 px-4">Rendimento 3 anos</th>
              <th className="text-left py-3 px-4">Líquido (IR 15%)</th>
              <th className="text-left py-3 px-4">Proteção Inflação</th>
            </tr></thead>
            <tbody>
              {[
                ["Tesouro Selic", "14,75% a.a. → caindo", "~R$ 3.200", "~R$ 14.720", "Parcial (nominal)"],
                ["Prefixado 2029", "13,5% a.a. fixo", "~R$ 4.350", "~R$ 13.697", "Nenhuma (risco real)"],
                ["IPCA+ 2035", "IPCA + 6,5%", "~R$ 3.800 real", "~R$ 13.230 real", "Total (retorno real)"],
              ].map(([titulo, taxa, rend, liq, prot]) => (
                <tr key={titulo} className="border-t border-border">
                  <td className="py-3 px-4 font-bold text-invest">{titulo}</td>
                  <td className="py-3 px-4">{taxa}</td>
                  <td className="py-3 px-4 font-bold">{rend}</td>
                  <td className="py-3 px-4 text-green-400 font-bold">{liq}</td>
                  <td className="py-3 px-4 text-xs">{prot}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">*Simulações com IPCA 4,3% a.a. e Selic caindo de 14,75% para 12,25% em 2026 e continuando em 2027–2028. Meramente ilustrativas.</p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          A Estratégia que Ninguém Conta: Não Escolha Apenas Um
        </h2>
        <p>
          Analistas da XP e do BTG recomendam <strong>dividir a renda fixa entre os três tipos</strong> — não por indecisão, mas por estratégia. O Tesouro Selic garante liquidez imediata. O Prefixado captura o ciclo de queda de juros. O IPCA+ protege contra surpresas inflacionárias. A proporção ideal depende do seu perfil, mas uma divisão como <strong>30% Selic / 40% Prefixado / 30% IPCA+</strong> captura o melhor dos três mundos para um perfil moderado.
        </p>
        <p>
          O principal erro que o investidor brasileiro comete ao ver a Selic cair é <strong>migrar tudo para a bolsa</strong> ou <strong>ficar 100% no Tesouro Selic por medo de volatilidade</strong>. A renda fixa inteligente, com diversificação entre os tipos de título, ainda entrega retornos muito superiores à poupança com risco controlado.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Você já investe no Tesouro Direto? 📈</h3>
          <p className="text-muted-foreground">Conta qual título prefere e por quê! 👇</p>
        </div>

        <p className="text-xs text-muted-foreground mt-8 p-4 bg-secondary rounded-xl">
          ⚠️ <strong>Aviso Legal:</strong> Este artigo é educacional e não constitui recomendação de investimento. Consulte um assessor certificado. Rentabilidade passada não garante resultados futuros.
        </p>
      </div>

      <RelatedPosts currentSlug="tesouro-prefixado-vs-ipca-2026" />
      <CommentSection postId="tesouro-prefixado-vs-ipca-2026" postTitle="Tesouro Prefixado ou IPCA+? Qual Escolher com a Selic Caindo em 2026" />
    </article>
  );
};

export default TesouroPrefixadoVsIPCA2026;