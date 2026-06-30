import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import {
  Clock, User, Calendar, ChevronRight,
  TrendingUp, DollarSign, Shield, BookOpen, AlertTriangle,
} from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/previdencia-privada-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const PrevidenciaPrivada2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "previdencia-privada-pgbl-vgbl-2026",
      "Previdência Privada em 2026: PGBL ou VGBL? Guia Completo Para Decidir Sem Erro",
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
            Previdência · PGBL · VGBL · Aposentadoria
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Previdência Privada em 2026: PGBL ou VGBL? Guia Completo Para Decidir Sem Erro
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          A <strong>previdência privada em 2026</strong> continua sendo uma das ferramentas
          mais poderosas para planejamento de aposentadoria — mas a escolha errada entre{" "}
          <strong>PGBL e VGBL</strong>, ou o regime de tributação inadequado, pode custar
          dezenas de milhares de reais em IR desnecessário ao longo de décadas. Este guia
          explica a diferença de forma definitiva, com exemplos numéricos reais.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="invest" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          alt="Previdência Privada PGBL VGBL 2026 — guia completo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Previdência privada</strong> é o assunto que mais gera confusão entre
          investidores brasileiros. A escolha errada entre <strong>PGBL e VGBL</strong>{" "}
          pode custar milhares de reais em IR desnecessário ao longo de décadas — e a
          decisão sobre tributação progressiva ou regressiva é <strong>irreversível</strong>.
          Este guia explica tudo de forma definitiva, com números reais.
        </p>

        <p>
          Em 2026, o mercado de previdência privada aberta movimenta mais de R$ 1,3 trilhão
          em ativos, segundo a FenaPrevi. Com a reforma previdenciária de 2019 tornando a
          aposentadoria pública cada vez mais tardia e menos generosa, a previdência privada
          voltou ao centro das estratégias financeiras de longo prazo — especialmente para
          quem tem renda tributável alta e pode usar o PGBL como ferramenta de dedução fiscal.
        </p>

        {/* PGBL vs VGBL */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-emerald-400" />
          A Diferença Fundamental: PGBL vs VGBL
        </h2>
        <p>
          A confusão entre os dois produtos vem do nome parecido. A distinção é simples
          e prática: <strong>PGBL deduz no IR de hoje, mas você paga IR sobre tudo no
          resgate. VGBL não deduz hoje, mas você paga IR apenas sobre os rendimentos no
          resgate.</strong>
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-emerald-500/30 p-5">
            <h3 className="font-bold text-xl text-emerald-400 mb-1">PGBL</h3>
            <p className="text-xs text-muted-foreground mb-3">Plano Gerador de Benefício Livre</p>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span className="text-emerald-400 shrink-0">✓</span>
                Deduz até 12% da renda bruta tributável no IR (modelo completo)
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 shrink-0">✓</span>
                Ideal para quem tem renda alta e declara no modelo completo
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 shrink-0">✓</span>
                Diferimento fiscal: o dinheiro do fisco rende dentro do plano por mais anos
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                IR incide sobre <strong>todo o valor resgatado</strong> (principal + rendimento)
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                Inútil para quem usa modelo simplificado — sem benefício fiscal
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-blue-500/30 p-5">
            <h3 className="font-bold text-xl text-blue-400 mb-1">VGBL</h3>
            <p className="text-xs text-muted-foreground mb-3">Vida Gerador de Benefício Livre</p>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span className="text-red-400 shrink-0">✗</span>
                Não deduz na declaração anual do IR
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">✓</span>
                IR incide <strong>somente sobre os rendimentos</strong> no resgate
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">✓</span>
                Indicado para quem usa modelo simplificado do IR
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">✓</span>
                Melhor para quem já atingiu o limite de 12% de dedução do PGBL
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400 shrink-0">✓</span>
                Vantagem sucessória: não entra em inventário em vários estados
              </li>
            </ul>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        {/* Regra dos 12% */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-emerald-400" />
          A Regra dos 12%: Quando o PGBL Realmente Compensa
        </h2>
        <p>
          O benefício do PGBL é a dedução de <strong>até 12% da renda bruta tributável</strong>{" "}
          na declaração anual de IR — mas <strong>somente no modelo completo</strong>.
          Quem usa o modelo simplificado (desconto padrão de 20% limitado a R$ 16.754,34)
          não tem nenhum benefício fiscal com o PGBL.
        </p>
        <div className="not-prose my-6 bg-card rounded-xl border border-border p-5 text-sm">
          <p className="font-bold mb-3 text-base">
            Exemplo concreto: renda bruta R$ 10.000/mês = R$ 120.000/ano
          </p>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between py-1">
              <span>Limite de dedução PGBL (12% de R$ 120.000)</span>
              <span className="font-bold text-foreground">R$ 14.400/ano</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Alíquota marginal de IR nessa faixa</span>
              <span className="font-bold text-foreground">27,5%</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2">
              <span className="text-emerald-400 font-bold">Economia no IR no ano</span>
              <span className="font-bold text-emerald-400 text-base">R$ 3.960/ano</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Economia acumulada em 20 anos (sem considerar rendimento)</span>
              <span className="font-bold text-foreground">R$ 79.200</span>
            </div>
          </div>
          <p className="text-xs mt-3 text-muted-foreground">
            ⚠️ Atenção: no resgate, você paga IR sobre o total investido via PGBL — então
            o benefício é um <strong>diferimento fiscal</strong>, não isenção. O dinheiro
            que seria do fisco rende dentro do plano por mais anos, gerando acumulação extra.
          </p>
        </div>

        {/* Quem deve usar qual */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Quem Deve Usar PGBL e Quem Deve Usar VGBL?
        </h2>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              titulo: "Use PGBL se:",
              cor: "border-emerald-500/30 bg-emerald-500/5",
              icone: "✅",
              itens: [
                "Declara IR no modelo completo (deduções legais)",
                "Tem renda tributável acima de R$ 6.000/mês",
                "Já contribui ao INSS ou regime próprio (condição para deduzir PGBL)",
                "Tem horizonte de investimento de 10+ anos",
              ],
            },
            {
              titulo: "Use VGBL se:",
              cor: "border-blue-500/30 bg-blue-500/5",
              icone: "✅",
              itens: [
                "Declara IR no modelo simplificado",
                "Já atingiu o limite de 12% de dedução com o PGBL",
                "Quer fazer planejamento sucessório (transmissão sem inventário)",
                "É isento de IR ou tem renda abaixo do teto da tabela",
              ],
            },
          ].map(({ titulo, cor, icone, itens }) => (
            <div key={titulo} className={`rounded-xl border p-5 ${cor}`}>
              <h3 className="font-bold mb-3">{icone} {titulo}</h3>
              <ul className="space-y-1.5">
                {itens.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tributação: progressiva vs regressiva */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Tributação no Resgate: Progressiva vs Regressiva — Decisão Irreversível
        </h2>
        <p>
          Independente de ser PGBL ou VGBL, você escolhe o{" "}
          <strong>regime de tributação</strong> na contratação. Esta é uma{" "}
          <strong>decisão irreversível</strong> — não é possível mudar depois (só na
          portabilidade para outro plano):
        </p>

        <AdInArticle />

        <div className="not-prose my-6 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-bold mb-3">📈 Tabela Progressiva</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Mesmas faixas do IR normal (isenção até R$ 2.824/mês → 27,5% acima de R$ 4.664/mês)
            </p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Melhor se planeja ter renda baixa na aposentadoria</li>
              <li>• Resgate pode ser parcialmente isento se renda ficar na faixa de isenção</li>
              <li>• Mais flexível para quem não sabe quanto vai resgatar por mês</li>
              <li>• Risco: legislação tributária pode mudar ao longo de 20–30 anos</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-emerald-500/20 p-5">
            <h3 className="font-bold mb-3">📉 Tabela Regressiva</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Alíquota cai com o tempo de permanência no plano
            </p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• 35% (até 2 anos) → 30% → 25% → 20% → 15% → <strong className="text-emerald-400">10% após 10 anos</strong></li>
              <li>• <strong className="text-emerald-400">Melhor para a maioria</strong> que investe por 10+ anos</li>
              <li>• Previsível — regra já estabelecida em contrato, independe de mudanças futuras</li>
              <li>• 10% é a menor alíquota de IR disponível em qualquer investimento financeiro</li>
            </ul>
          </div>
        </div>

        <AdRectangle className="my-8" />

        {/* Taxa de administração */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-emerald-400" />
          Taxa de Administração: O Vilão Silencioso da Previdência
        </h2>
        <p>
          A taxa de administração é o custo anual do plano cobrado sobre o patrimônio
          total. Parece pequena, mas tem impacto devastador no longo prazo. Em planos
          antigos de grandes bancos, ainda é comum encontrar taxas de 2% a 3% ao ano.
          Na tabela abaixo, veja o quanto isso custa em 20 anos:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Taxa Admin. a.a.</th>
                <th className="text-left py-3 px-4 font-bold">R$ 100k em 20 anos (8% bruto)</th>
                <th className="text-left py-3 px-4 font-bold">Perda vs 0,5%</th>
                <th className="text-left py-3 px-4 font-bold">Onde encontrar</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0,50% a.a.", "R$ 380.000", "—",         "✅ Bancos digitais, fintechs",    "text-emerald-400"],
                ["1,00% a.a.", "R$ 320.000", "-R$ 60.000","✅ Corretoras independentes",      "text-blue-400"],
                ["2,00% a.a.", "R$ 230.000", "-R$ 150.000","⚠️ Grandes bancos tradicionais",  "text-yellow-400"],
                ["3,00% a.a.", "R$ 170.000", "-R$ 210.000","❌ Planos antigos — porte imediato","text-red-400"],
              ].map(([taxa, val, perda, onde, cor]) => (
                <tr key={taxa as string} className="border-t border-border">
                  <td className={`py-3 px-4 font-bold ${cor}`}>{taxa}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{val}</td>
                  <td className="py-3 px-4 text-destructive text-xs font-medium">{perda}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{onde}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Simulação simplificada com aporte único de R$ 100.000 e retorno bruto de 8% a.a. por 20 anos.
            Não considera IR no resgate. Valores ilustrativos.
          </p>
        </div>

        <div className="not-prose my-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Taxa de carregamento:</strong> Além da taxa
            de administração, alguns planos cobram taxa de carregamento — um percentual
            descontado de cada aporte. Em 2026, as principais plataformas (XP, BTG, Nu Invest,
            Icatu) oferecem taxa de carregamento <strong>zero</strong>. Nunca contrate plano
            com carregamento positivo — é dinheiro jogado fora.
          </p>
        </div>

        {/* Portabilidade */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <TrendingUp className="h-7 w-7 text-emerald-400" />
          Portabilidade: Como Sair de Planos Ruins Sem Pagar IR
        </h2>
        <p>
          Se você tem um plano com taxa alta em banco tradicional, a portabilidade é o
          caminho. É um direito garantido por lei: você pode transferir o saldo acumulado
          para outro plano, em outra seguradora, sem pagar IR ou IOF — desde que:
        </p>
        <div className="not-prose space-y-2 my-4">
          {[
            "O plano destino seja do mesmo tipo (PGBL para PGBL, ou VGBL para VGBL)",
            "Você mantenha o mesmo regime de tributação (progressivo ou regressivo)",
            "O plano de origem não tenha prazo de carência para portabilidade (verifique o regulamento)",
            "A portabilidade seja feita diretamente entre as seguradoras — sem resgatar o dinheiro",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-3">
              <span className="text-emerald-400 font-bold shrink-0">✓</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p>
          O processo leva entre 5 e 10 dias úteis e é 100% digital nas principais
          plataformas. A nova seguradora geralmente auxilia em todo o processo.
        </p>

        {/* Sucessão patrimonial */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Previdência Privada Como Ferramenta de Planejamento Sucessório
        </h2>
        <p>
          Um dos benefícios menos conhecidos da previdência privada — tanto PGBL quanto
          VGBL — é sua eficiência como instrumento de planejamento sucessório. Diferente
          de outros investimentos, que entram no inventário e podem ficar bloqueados por
          meses ou anos até a partilha de bens ser concluída judicialmente, os valores
          aplicados em planos de previdência são transferidos diretamente aos beneficiários
          indicados, sem passar pelo processo de inventário.
        </p>
        <p>
          Essa característica reduz significativamente o tempo até que a família tenha
          acesso aos recursos em caso de falecimento do titular — frequentemente em
          questão de semanas, em vez dos meses ou anos típicos de um inventário judicial
          complexo. Além disso, em muitos estados brasileiros, a transferência por
          previdência privada não está sujeita ao ITCMD (Imposto de Transmissão Causa
          Mortis e Doação) da mesma forma que outros bens, embora esse tratamento varie
          conforme a legislação estadual e seja objeto de debate jurídico em alguns casos
          — vale consultar um advogado especializado em planejamento sucessório para
          confirmar a aplicação específica no seu estado.
        </p>
        <p>
          Para famílias com patrimônio relevante ou estrutura familiar mais complexa
          (segundo casamento, filhos de relacionamentos diferentes, sócios em empresas
          familiares), a previdência privada pode ser usada estrategicamente para garantir
          que determinados beneficiários recebam recursos de forma mais rápida e
          previsível, complementando — não substituindo — um planejamento sucessório mais
          amplo que pode incluir testamento, holding familiar e outros instrumentos
          jurídicos especializados.
        </p>

        {/* Erros comuns */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Erros Mais Comuns ao Contratar Previdência Privada
        </h2>
        <div className="not-prose space-y-3 my-6">
          {[
            { erro: "Contratar PGBL sem declarar IR no modelo completo", desc: "O benefício fiscal do PGBL (dedução de até 12% da renda bruta) só se aplica a quem declara pelo modelo completo. Contratar PGBL declarando pelo simplificado é um erro comum que elimina a principal vantagem do produto — nesse caso, o VGBL é sempre a escolha correta." },
            { erro: "Não comparar taxa de administração entre plataformas", desc: "A mesma seguradora pode oferecer o mesmo fundo de previdência com taxas de administração drasticamente diferentes dependendo do canal de venda. Bancos tradicionais no balcão costumam cobrar 2 a 3 vezes mais que plataformas digitais especializadas para o produto equivalente." },
            { erro: "Escolher tabela progressiva sem planejar o resgate", desc: "A tabela progressiva pode parecer mais simples, mas se você resgatar valores grandes de uma vez no futuro, pode cair nas faixas mais altas do IR (até 27,5%). A tabela regressiva, com planejamento de longo prazo, quase sempre resulta em menos imposto pago no total." },
            { erro: "Ignorar a portabilidade quando a taxa está alta", desc: "Muitos investidores mantêm planos antigos com taxas de administração elevadas por desconhecimento ou inércia. A portabilidade é gratuita, não gera tributação e pode ser feita a qualquer momento — não há motivo para permanecer em um plano caro quando existem alternativas mais baratas no mercado." },
          ].map(({ erro, desc }) => (
            <div key={erro} className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
              <h4 className="font-bold text-sm mb-1">{erro}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          PGBL/VGBL vs. Outros Investimentos de Longo Prazo
        </h2>
        <p>
          Vale comparar a previdência privada com alternativas de longo prazo como Tesouro
          IPCA+ e fundos de investimento tradicionais. A grande vantagem da previdência
          está na ausência de come-cotas semestral — o imposto que incide automaticamente
          duas vezes por ano sobre fundos de renda fixa tradicionais, reduzindo o efeito
          dos juros compostos ao longo do tempo. Na previdência, o IR só é cobrado no
          resgate, permitindo que 100% do capital permaneça investido e gerando retorno
          composto sobre o valor total, não apenas sobre o líquido de impostos intermediários.
        </p>
        <p>
          Por outro lado, o Tesouro IPCA+ direto tem a vantagem de não cobrar taxa de
          administração de terceiros (apenas a taxa de custódia da B3, de 0,20% ao ano,
          isenta para valores até R$ 10.000) e permite resgate parcial flexível a qualquer
          momento sem as regras específicas de portabilidade e carência que alguns planos
          de previdência podem impor. Para investidores com bom nível de educação
          financeira que não dependem do benefício fiscal do PGBL, montar uma carteira
          própria de Tesouro IPCA+ pode, em alguns casos, superar a previdência privada em
          custo total — mas perde a vantagem sucessória e a praticidade de não precisar
          gerenciar ativamente os investimentos.
        </p>

        <p>
          Independentemente da escolha entre previdência e Tesouro Direto, o ponto mais
          importante é simplesmente começar a poupar de forma consistente para a
          aposentadoria o quanto antes — o custo de adiar essa decisão em alguns anos
          costuma superar, em termos de patrimônio final, qualquer diferença marginal
          entre os produtos disputados nessa comparação. Use a tabela abaixo como ponto de
          partida rápido para identificar qual caminho costuma fazer mais sentido para o
          seu perfil específico:
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Guia Rápido de Decisão — Previdência Privada em 2026
        </h2>
        <div className="not-prose space-y-2">
          {[
            { check: true,  item: "Declara IR modelo completo + renda alta (acima de R$ 6k/mês)? → PGBL, tabela regressiva, taxa de admin abaixo de 1%" },
            { check: true,  item: "Declara modelo simplificado ou isento? → VGBL, tabela regressiva, taxa de admin abaixo de 1%" },
            { check: true,  item: "Já atingiu 12% de renda em PGBL? → Complemento em VGBL com foco em planejamento sucessório" },
            { check: true,  item: "Tem horizonte de 10+ anos? → Tabela regressiva é quase sempre melhor (10% de IR no resgate)" },
            { check: false, item: "Taxa de administração acima de 2%? → Porte o plano imediatamente para uma plataforma com taxa abaixo de 1%" },
            { check: false, item: "Plano com taxa de carregamento? → Nunca contrate — exija taxa de carregamento zero" },
          ].map(({ check, item }, i) => (
            <div key={i} className={`flex items-start gap-3 rounded-lg p-3 ${check ? "bg-emerald-500/5 border border-emerald-500/20" : "bg-red-500/5 border border-red-500/20"}`}>
              <span className="shrink-0 text-base">{check ? "✅" : "❌"}</span>
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

      </div>

      <EditorialTake
        category="invest"
        title="Análise do Marcos: PGBL é ferramenta fiscal, não apenas investimento"
      >
        <p>
          PGBL e VGBL são regulados pela SUSEP (Superintendência de Seguros Privados) e
          tributados conforme escolha do investidor no momento da contratação: tabela
          progressiva (0% a 27,5%) ou regressiva (de 35% em até 2 anos a 10% após 10
          anos). PGBL permite deduzir até 12% da renda bruta tributável no IR; VGBL não
          permite, mas IR incide apenas sobre rendimentos no resgate.
        </p>
        <p className="mt-2">
          Taxas de carregamento caíram de patamares de 5% para 0% nas principais
          plataformas (XP Seguros, Brasilprev, Icatu, Bradesco Vida). Taxa de administração
          varia entre 0,3% (fundos passivos em seguradora digital) e 3% (planos antigos em
          bancos). Portabilidade entre seguradoras é direito do cliente, isenta de IR/IOF e
          recomendo para qualquer plano acima de 1,5% de taxa. Minha análise:{" "}
          <strong>PGBL faz sentido para quem usa declaração completa do IR e tem renda
          tributável alta</strong> — a dedução equivale a um retorno garantido de até 27,5%
          no mesmo ano. VGBL serve para quem usa declaração simplificada e/ou quer
          planejamento sucessório (não entra em inventário em 13 estados). Sempre exija
          carregamento zero e administração abaixo de 1%.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "SUSEP — Previdência Complementar Aberta: PGBL e VGBL",
            url: "https://www.gov.br/susep/pt-br/assuntos/previdencia-complementar-aberta",
            publisher: "SUSEP — Superintendência de Seguros Privados",
            accessedAt: "Maio 2026",
          },
          {
            title: "Receita Federal — Dedução com PGBL na Declaração de IR",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf/dedutibilidade-das-contribuicoes",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Maio 2026",
          },
          {
            title: "ANBIMA — Previdência Complementar: Relatórios e Estatísticas",
            url: "https://www.anbima.com.br/pt_br/informar/relatorios/fundos-de-investimento/previdencia/",
            publisher: "ANBIMA — Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais",
            accessedAt: "Maio 2026",
          },
          {
            title: "FenaPrevi — Estatísticas do Setor de Previdência Complementar Aberta",
            url: "https://fenaprevi.org.br/estatisticas",
            publisher: "FenaPrevi — Federação Nacional de Previdência Privada e Vida",
            accessedAt: "Maio 2026",
          },
          {
            title: "LC nº 109/2001 — Lei Complementar de Previdência Complementar",
            url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp109.htm",
            publisher: "Presidência da República",
            accessedAt: "Maio 2026",
          },
          {
            title: "Banco Central — Portabilidade de Recursos de Previdência",
            url: "https://www.bcb.gov.br/estabilidadefinanceira/portabilidade",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="previdencia-privada-pgbl-vgbl-2026" />
      <CommentSection
        postId="previdencia-privada-pgbl-vgbl-2026"
        postTitle="Previdência Privada 2026: PGBL ou VGBL? Guia Completo"
       category="invest" />
    </article>
  );
};

export default PrevidenciaPrivada2026;
