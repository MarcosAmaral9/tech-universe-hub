import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, DollarSign, TrendingDown, Shield, Lightbulb, Zap, BarChart3 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/economia-domestica-dicas-2026.webp";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";

const CortarGastos2026 = () => {
  useEffect(() => {
    trackArticleRead("cortar-gastos-2026", "Cortar Gastos em 2026: 20 Estratégias Práticas para Economizar no Brasil", "invest");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">Economia Doméstica · Planejamento</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Cortar Gastos em 2026: 20 Estratégias Práticas para Economizar no Brasil
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Abril, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Cortar gastos economizar dinheiro 2026 Brasil" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com o IPCA projetado em 4,31% em 2026, combustíveis em alta e a Selic ainda acima de 13%, o brasileiro precisa ser mais estratégico com o dinheiro do que nunca. A boa notícia: é possível <strong>economizar R$ 500 a R$ 2.000 por mês</strong> sem abrir mão de qualidade de vida.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-invest" />
          O Diagnóstico: Para Onde Vai o Seu Dinheiro
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden text-sm">
            <thead><tr className="bg-secondary">
              <th className="text-left py-3 px-4">Categoria</th>
              <th className="text-left py-3 px-4">% da Renda</th>
              <th className="text-left py-3 px-4">Potencial de Corte</th>
            </tr></thead>
            <tbody>
              {[
                ["Moradia (aluguel, IPTU, condomínio)", "30–35%", "Baixo"],
                ["Alimentação (supermercado + restaurantes)", "18–22%", "Alto"],
                ["Transporte (carro, combustível, apps)", "10–15%", "Alto"],
                ["Lazer e assinaturas (streaming, academia)", "8–12%", "Muito alto"],
                ["Vestuário e beleza", "5–8%", "Médio"],
                ["Saúde (plano, medicamentos)", "8–10%", "Baixo"],
                ["Educação e capacitação", "3–5%", "Baixo"],
                ["Outros (pequenos gastos)", "10–15%", "Muito alto"],
              ].map(([cat, pct, pot]) => (
                <tr key={cat} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{cat}</td>
                  <td className="py-3 px-4">{pct}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{pot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingDown className="h-7 w-7 text-invest" />
          As 20 Estratégias (Organizadas por Impacto)
        </h2>

        <h3 className="text-xl font-bold mt-8 mb-4">🔥 Alto Impacto — Economize R$ 200–R$ 600/mês</h3>
        <div className="not-prose space-y-3 my-4">
          {[
            { n: "01", titulo: "Audite e cancele assinaturas esquecidas", economia: "R$ 80–R$ 250/mês", desc: "Levantamento típico revela 6–10 assinaturas ativas que o usuário não usa. Use o extrato do cartão dos últimos 3 meses." },
            { n: "02", titulo: "Troque plano de celular por portabilidade", economia: "R$ 50–R$ 120/mês", desc: "Clientes novos recebem planos com 50–80GB por R$ 40–R$ 60, enquanto clientes antigos pagam R$ 110–R$ 150." },
            { n: "03", titulo: "Reduza refeições fora de casa em 50%", economia: "R$ 200–R$ 500/mês", desc: "Uma refeição em restaurante médio custa R$ 35–R$ 60. Preparar a mesma em casa custa R$ 8–R$ 15." },
            { n: "04", titulo: "Refinancie dívidas de cartão de crédito", economia: "R$ 200–R$ 800/mês", desc: "O rotativo do cartão cobra 300–450% ao ano. Negocie direto com o banco ou use o Desenrola Brasil." },
            { n: "05", titulo: "Compare preços de combustível com apps", economia: "R$ 60–R$ 150/mês", desc: "Apps como Waze e TanqueCheio mostram postos mais baratos. Diferença pode ser R$ 0,30–R$ 0,60/litro." },
          ].map(({ n, titulo, economia, desc }) => (
            <div key={n} className="bg-card rounded-xl border border-invest/20 p-5">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h4 className="font-bold text-sm flex items-center gap-2">
                  <span className="text-invest font-mono text-xs bg-invest/10 px-1.5 py-0.5 rounded">{n}</span>
                  {titulo}
                </h4>
                <span className="text-xs bg-green-500/15 text-green-400 px-2 py-1 rounded-full font-medium">💰 {economia}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">⚡ Médio Impacto — Economize R$ 50–R$ 200/mês</h3>
        <div className="not-prose space-y-3 my-4">
          {[
            { n: "06", titulo: "Compre no atacado para itens não perecíveis", economia: "R$ 80–R$ 200/mês", desc: "Papel higiênico, detergente, arroz, feijão e café custam 20–40% menos no atacado." },
            { n: "07", titulo: "Use o cashback do cartão de forma estratégica", economia: "R$ 50–R$ 150/mês", desc: "Cartões com cashback de 1–2% devolvem R$ 50–R$ 150/mês para quem gasta R$ 5.000/mês." },
            { n: "08", titulo: "Renegocie plano de internet e TV a cabo", economia: "R$ 50–R$ 150/mês", desc: "Ligue para a operadora ameaçando cancelar. Em 90% dos casos, oferecem desconto de 20–40%." },
            { n: "09", titulo: "Troque academia por alternativas gratuitas", economia: "R$ 80–R$ 200/mês", desc: "Parques com academia ao ar livre, apps gratuitos e grupos de corrida eliminam academias caras." },
            { n: "10", titulo: "Compre roupas e eletrônicos usados", economia: "R$ 100–R$ 400/mês", desc: "Plataformas como Enjoei, OLX e Mercado Livre têm eletrônicos com desconto de 30–60%." },
          ].map(({ n, titulo, economia, desc }) => (
            <div key={n} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h4 className="font-bold text-sm flex items-center gap-2">
                  <span className="text-invest font-mono text-xs bg-invest/10 px-1.5 py-0.5 rounded">{n}</span>
                  {titulo}
                </h4>
                <span className="text-xs bg-green-500/15 text-green-400 px-2 py-1 rounded-full font-medium">💰 {economia}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h3 className="text-xl font-bold mt-8 mb-4">🌱 Longo Prazo — Mudanças que Geram Economia Crescente</h3>
        <div className="not-prose space-y-3 my-4">
          {[
            { n: "11", titulo: "Instale painéis solares (financiado)", economia: "R$ 150–R$ 400/mês", desc: "Com financiamento em 60–72 meses, a parcela pode ser menor que a conta de luz atual." },
            { n: "12", titulo: "Troque carro por transporte combinado", economia: "R$ 500–R$ 1.500/mês", desc: "O custo total de um carro médio pode ultrapassar R$ 2.500/mês. Combinar VLT/metrô + Uber pode custar R$ 600–R$ 1.200." },
            { n: "13", titulo: "Cozinhe em lote (meal prep)", economia: "R$ 200–R$ 400/mês", desc: "Dedicar 3–4h no domingo para preparar refeições da semana reduz delivery e desperdício alimentar." },
            { n: "14", titulo: "Revise seu plano de saúde", economia: "R$ 100–R$ 400/mês", desc: "Planos individuais aumentaram 8–12% em 2026. Compare com planos regionais que podem ser 30–40% mais baratos." },
            { n: "15", titulo: "Automatize investimentos no dia do salário", economia: "Previne gastos desnecessários", desc: "Transferir 10–20% do salário para investimentos imediatamente elimina a tentação de gastar." },
          ].map(({ n, titulo, economia, desc }) => (
            <div key={n} className="bg-card rounded-xl border border-invest/20 p-4">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h4 className="font-bold text-sm flex items-center gap-2">
                  <span className="text-invest font-mono text-xs bg-invest/10 px-1.5 py-0.5 rounded">{n}</span>
                  {titulo}
                </h4>
                <span className="text-xs bg-green-500/15 text-green-400 px-2 py-1 rounded-full font-medium">💰 {economia}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">🧠 Comportamentais — Mudanças de Mentalidade</h3>
        <div className="not-prose space-y-3 my-4">
          {[
            { n: "16", titulo: "Regra das 72 horas para compras não essenciais", desc: "Antes de comprar qualquer item não essencial acima de R$ 100, espere 72 horas. 60–70% das compras por impulso são abandonadas." },
            { n: "17", titulo: "Desative notificações de apps de compra", desc: "Shopee, Shein, Amazon e iFood enviam dezenas de notificações/semana. Desativar reduz gastos impulsivos em 15–25%." },
            { n: "18", titulo: "Faça lista de compras e vá ao mercado satisfeito", desc: "Compras sem lista geram 20–30% mais gastos. Ir com fome aumenta para 40–50%." },
            { n: "19", titulo: "Compare custo por uso, não preço absoluto", desc: "Um tênis de R$ 400 que dura 2 anos (R$ 0,55/uso) é mais econômico que um de R$ 150 que dura 6 meses (R$ 0,82/uso)." },
            { n: "20", titulo: "Celebre as economias, não só os investimentos", desc: "Economizar R$ 500/mês investidos na Selic (13,25%) gera R$ 62.000 em 7 anos." },
          ].map(({ n, titulo, desc }) => (
            <div key={n} className="bg-card rounded-xl border border-invest/20 p-4">
              <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                <span className="text-invest font-mono text-xs bg-invest/10 px-1.5 py-0.5 rounded">{n}</span>
                {titulo}
              </h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual dica vai implementar essa semana? 💸</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["invest"]} />
      <RelatedPosts currentSlug="cortar-gastos-2026" />
      <NewsletterSignup variant="modal" categories={["invest"]} showAfterMs={60000} />
      <CommentSection postId="cortar-gastos-2026" postTitle="Cortar Gastos em 2026: 20 Estratégias Práticas para Economizar no Brasil" />
    </article>
  );
};

export default CortarGastos2026;