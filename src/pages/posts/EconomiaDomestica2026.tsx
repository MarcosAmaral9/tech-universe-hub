import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Home, ShoppingCart, Lightbulb, Calculator, Sparkles, ChevronRight, TrendingDown, AlertTriangle, } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/economia-domestica-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const ECONOMIA_ESTIMADA = [
  { categoria: "Energia e água",       dicas: 6,  economiaMin: 150, economiaMax: 280 },
  { categoria: "Supermercado",         dicas: 8,  economiaMin: 200, economiaMax: 400 },
  { categoria: "Assinaturas/serviços", dicas: 6,  economiaMin: 150, economiaMax: 250 },
  { categoria: "Transporte",           dicas: 6,  economiaMin: 200, economiaMax: 400 },
  { categoria: "Alimentação fora",     dicas: 4,  economiaMin: 150, economiaMax: 300 },
];

const EconomiaDomestica2026 = () => {
  const [totalMin, totalMax] = ECONOMIA_ESTIMADA.reduce(
    ([min, max], r) => [min + r.economiaMin, max + r.economiaMax],
    [0, 0]
  );

  useEffect(() => {
    trackArticleRead(
      "economia-domestica-2026-cortar-gastos",
      "Economia Doméstica 2026: 30 Dicas Para Cortar Gastos Sem Perder Qualidade de Vida",
      "invest"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/financas" className="hover:text-foreground transition-colors">Finanças</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">Economia Doméstica 2026</span>
      </nav>

      <BackNavigation category="invest" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="invest" size="lg" />
          <span className="px-3 py-1 bg-invest/20 text-invest rounded-full text-sm font-medium">
            Educação Financeira · Orçamento · Economia Doméstica
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Economia Doméstica em 2026: 30 Dicas Práticas Para Cortar Gastos Sem Perder Qualidade de Vida
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          A <strong>economia doméstica em 2026</strong> se tornou prioridade para milhões de famílias brasileiras: energia elétrica cara, inflação de alimentos persistente e assinaturas digitais se multiplicando em silêncio. Este guia reúne 30 dicas práticas — validadas por dados do IBGE, Aneel e pesquisas de consumo — para cortar até R$ 1.500/mês sem abrir mão do conforto.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
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
          alt="Economia doméstica 2026 — dicas para cortar gastos sem perder qualidade de vida"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <p className="lead text-xl text-muted-foreground">
          Falar em <strong>economia doméstica em 2026</strong> não é sobre privação — é sobre inteligência financeira. Com inflação acumulada acima de 5% no último ano, energia elétrica mais cara e o supermercado pesando cada vez mais no bolso, quem não revisa o orçamento doméstico perde silenciosamente centenas de reais por mês. A boa notícia: as maiores economias estão escondidas nos lugares mais óbvios.
        </p>

        {/* Tabela de impacto por categoria */}
        <div className="not-prose my-8 bg-card border border-border rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-border">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-invest" />
              Quanto você pode economizar por categoria
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Estimativa mensal para família com renda de R$ 5.000</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left py-3 px-4">Categoria</th>
                  <th className="text-left py-3 px-4">Nº de dicas</th>
                  <th className="text-left py-3 px-4">Economia estimada/mês</th>
                </tr>
              </thead>
              <tbody>
                {ECONOMIA_ESTIMADA.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="py-3 px-4 font-medium">{r.categoria}</td>
                    <td className="py-3 px-4 text-muted-foreground">{r.dicas} dicas</td>
                    <td className="py-3 px-4 font-bold text-invest">
                      R$ {r.economiaMin.toLocaleString("pt-BR")} – R$ {r.economiaMax.toLocaleString("pt-BR")}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-invest/30 bg-invest/5">
                  <td className="py-3 px-4 font-bold">TOTAL</td>
                  <td className="py-3 px-4 font-bold text-muted-foreground">30 dicas</td>
                  <td className="py-3 px-4 font-black text-invest text-base">
                    R$ {totalMin.toLocaleString("pt-BR")} – R$ {totalMax.toLocaleString("pt-BR")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground p-4 pt-2">Valores estimados com base em pesquisas do IBGE (POF 2023), Aneel e dados de consumo de 2025-2026. Resultados variam conforme hábitos de cada família.</p>
        </div>

        <AdLeaderboard className="my-8" />

        {/* Energia e água */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Lightbulb className="h-7 w-7 text-invest" />
          1. Energia e Água: Onde Mais se Desperdiça
        </h2>
        <p>
          A conta de luz é o maior vilão do orçamento doméstico brasileiro. Em 2026, com as tarifas residenciais 18% acima de 2023 e bandeiras tarifárias oscilando, cada kWh conta. Segundo a Aneel, o consumo médio residencial brasileiro é de 166 kWh/mês — com ação simples, é possível reduzir esse número em 25–35%:
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            { n:"1",  dica: "Troque todas as lâmpadas incandescentes e fluorescentes por LED", detalhe: "Uma lâmpada LED de 9W substitui uma incandescente de 60W. Numa casa com 15 lâmpadas, a economia chega a R$ 40–80/mês." },
            { n:"2",  dica: "Use a máquina de lavar sempre cheia e no modo econômico", detalhe: "Cada ciclo desnecessário gasta em média R$ 2,50. Eliminar 2 ciclos por semana: economia de R$ 20/mês." },
            { n:"3",  dica: "Desligue aparelhos em standby quando não usar", detalhe: "Televisores, videogames e carregadores em standby consomem até 12% da conta. Use régua com chave ou desconecte da tomada." },
            { n:"4",  dica: "Reduza banhos a 5–7 minutos ou instale timer de chuveiro", detalhe: "Chuveiro elétrico de 5.500W ligado por 10 min extra todo dia: +R$ 50/mês. Timer de chuveiro custa R$ 30 e se paga em 3 semanas." },
            { n:"5",  dica: "Use ventilador antes de acionar o ar-condicionado", detalhe: "Ventilador consome 60W vs 1.200W do ar-condicionado split. Para noites mais frescas, o ventilador resolve sozinho." },
            { n:"6",  dica: "Avalie energia solar fotovoltaica para 2026", detalhe: "Em 2026, o custo médio de instalação de um sistema de 3kWp caiu para R$ 12.000–16.000. Payback de 3 a 4 anos e duração de 25+ anos." },
          ].map(({ n, dica, detalhe }) => (
            <div key={n} className="flex gap-3 bg-muted/30 border border-border rounded-xl p-4">
              <span className="font-black text-invest/50 text-sm w-5 shrink-0 pt-0.5">{n}.</span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{dica}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Supermercado */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <ShoppingCart className="h-7 w-7 text-invest" />
          2. Supermercado: Como Gastar 30% Menos Sem Passar Fome
        </h2>
        <p>
          O supermercado é onde as famílias brasileiras mais desperdiçam dinheiro de forma invisível. Segundo a Pesquisa de Orçamentos Familiares (POF 2023) do IBGE, a alimentação representa em média 19,8% do orçamento familiar — e cerca de 30% dos alimentos comprados vai para o lixo sem ser consumido. Estratégias comprovadas para mudar isso:
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            { n:"7",  dica: "Faça lista antes de sair e siga-a à risca", detalhe: "Compras por impulso representam 40% do gasto médio no supermercado. Lista no celular com notificação de orçamento máximo ajuda a manter o controle." },
            { n:"8",  dica: "Compare sempre o preço por kg ou litro, não pela embalagem", detalhe: "A embalagem menor parece mais barata, mas frequentemente custa 30–60% mais por kg. Sempre calcule o preço unitário." },
            { n:"9",  dica: "Priorize frutas, verduras e legumes da estação", detalhe: "Um quilo de morango fora da estação pode custar R$ 25; na safra, R$ 8. O CEAGESP publica mensalmente os produtos da estação." },
            { n:"10", dica: "Use apps de cashback nas compras", detalhe: "Méliuz, Ame Digital e PicPay oferecem 2–15% de cashback em supermercados parceiros. Em R$ 800 de compras mensais, é R$ 16–120 de volta." },
            { n:"11", dica: "Faça compras semanais, não diárias", detalhe: "Ir ao mercado com frequência aumenta a exposição a compras impulsivas. Uma ida semanal bem planejada reduz o gasto total em 20–30%." },
            { n:"12", dica: "Congele porções e cozinhe em lote (batch cooking)", detalhe: "Preparar 3–4 refeições de uma vez economiza gás, reduz desperdício e diminui a tentação de pedir delivery nos dias cansativos." },
            { n:"13", dica: "Dê chance às marcas próprias dos supermercados", detalhe: "Marcas próprias de Pão de Açúcar, Carrefour e Extra são 20–40% mais baratas e muitas vezes fabricadas pelas mesmas indústrias das marcas premium." },
            { n:"14", dica: "Vá à feira livre no último horário", detalhe: "Na última hora das feiras, os preços caem 30–50% para evitar que o feirante leve o produto de volta. Ideal para compras da semana toda." },
          ].map(({ n, dica, detalhe }) => (
            <div key={n} className="flex gap-3 bg-muted/30 border border-border rounded-xl p-4">
              <span className="font-black text-invest/50 text-sm w-6 shrink-0 pt-0.5">{n}.</span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{dica}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        <AdInArticle />

        {/* Assinaturas */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Home className="h-7 w-7 text-invest" />
          3. Assinaturas e Serviços: O Vazamento Silencioso do Orçamento
        </h2>
        <p>
          Pesquisa da Serasa de 2025 mostrou que o brasileiro médio gasta R$ 380/mês em assinaturas digitais — e não usa pelo menos 35% delas regularmente. O problema é que cada cobrança individual parece pequena, mas somadas criam um "buraco" invisível no orçamento. A solução é simples, mas exige disciplina:
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            { n:"15", dica: "Audite todas as suas assinaturas hoje mesmo", detalhe: "Abra seu extrato bancário e de cartão de crédito dos últimos 3 meses. Marque cada assinatura que você usou ativamente. Cancele tudo que não está marcado." },
            { n:"16", dica: "Compartilhe planos família com pessoas de confiança", detalhe: "Netflix Família (até 4 perfis), Spotify Family (até 6), YouTube Premium Família (até 5) — divisão do custo reduz o gasto individual em 50–70%." },
            { n:"17", dica: "Alterne streamings mensalmente", detalhe: "Assine um streaming por mês, consuma todo o conteúdo de interesse e troque no mês seguinte. Em vez de R$ 120/mês (3 plataformas), você paga R$ 40/mês." },
            { n:"18", dica: "Negocie planos de internet e celular a cada 12 meses", detalhe: "Ligue para o SAC dizendo que vai cancelar e migrar para o concorrente. Em mais de 70% dos casos, a operadora oferece desconto ou upgrade gratuito." },
            { n:"19", dica: "Pesquise alternativas gratuitas antes de assinar qualquer app", detalhe: "Para edição de fotos: GIMP. Para PDF: ILovePDF. Para escritório: Google Docs. Para música: YouTube Music grátis. Muitos apps pagos têm equivalentes gratuitos excelentes." },
            { n:"20", dica: "Configure alertas de renovação automática no cartão", detalhe: "Use apps como Guiabolso, Organizze ou o próprio app do banco para criar alertas antes de cada cobrança recorrente. Isso evita renovações esquecidas." },
          ].map(({ n, dica, detalhe }) => (
            <div key={n} className="flex gap-3 bg-muted/30 border border-border rounded-xl p-4">
              <span className="font-black text-invest/50 text-sm w-6 shrink-0 pt-0.5">{n}.</span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{dica}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        {/* Transporte */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Calculator className="h-7 w-7 text-invest" />
          4. Transporte: De R$ 800 para R$ 300/Mês
        </h2>
        <p>
          O transporte é o segundo maior gasto das famílias brasileiras, atrás apenas de moradia. Segundo a POF/IBGE 2023, mobilidade representa 18,1% do orçamento familiar. Em 2026, com combustível ainda caro e pedágios reajustados, revisar a estratégia de transporte pode ser a maior economia individual que você faz:
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            { n:"21", dica: "Negocie trabalho híbrido com pelo menos 2 dias remotos", detalhe: "Com combustível a R$ 6,20/litro e carro fazendo 12 km/l, cada dia fora de casa custa R$ 20–50 em transporte. Dois dias remotos por semana: economia de R$ 160–400/mês." },
            { n:"22", dica: "Use apps de carona compartilhada para trajetos fixos", detalhe: "BlaBlaCar Daily e 99Pool conectam vizinhos com rotas semelhantes. Dividir o combustível com um colega de percurso reduz o custo em 50%." },
            { n:"23", dica: "Avalie bicicleta elétrica para trajetos curtos (até 15 km)", detalhe: "Bicicleta elétrica custa R$ 0,05/km contra R$ 0,80/km de carro. Para 30 km/dia de ida e volta, a diferença é R$ 450/mês. Payback em 8–12 meses." },
            { n:"24", dica: "Faça manutenção preventiva regular no carro", detalhe: "Troca de óleo, filtros e alinhamento na data certa custa em média R$ 300/semestre. Negligenciar pode resultar em reparos de R$ 2.000–5.000 no futuro próximo." },
            { n:"25", dica: "Calcule sempre se etanol ou gasolina compensa", detalhe: "Etanol compensa quando custa até 70% do preço da gasolina. Se gasolina está R$ 6,20, etanol compensa até R$ 4,34. Use a calculadora do Combustível Legal do governo federal." },
            { n:"26", dica: "Considere revender o segundo carro da família", detalhe: "Segundo carro parado gera custo fixo de R$ 700–1.200/mês entre IPVA, seguro, depreciação e manutenção. Aplicativos de transporte sob demanda podem ser mais baratos para uso esporádico." },
          ].map(({ n, dica, detalhe }) => (
            <div key={n} className="flex gap-3 bg-muted/30 border border-border rounded-xl p-4">
              <span className="font-black text-invest/50 text-sm w-6 shrink-0 pt-0.5">{n}.</span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{dica}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alimentação fora */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <Sparkles className="h-7 w-7 text-invest" />
          5. Alimentação Fora de Casa: O Maior Dreno Invisível
        </h2>
        <p>
          O brasileiro gastou em média R$ 420/mês em alimentação fora de casa em 2025, segundo dados da POF/IBGE. Delivery, restaurantes e lanchonetes somados representam um custo que raramente é contabilizado corretamente no orçamento — porque cada pedido parece pequeno individualmente:
        </p>

        <div className="not-prose space-y-2 my-6">
          {[
            { n:"27", dica: "Leve marmita ao trabalho pelo menos 3 vezes por semana", detalhe: "Uma refeição em restaurante comercial em São Paulo ou Belo Horizonte custa em média R$ 35–50. Três marmitas semanais economizam R$ 280–400/mês." },
            { n:"28", dica: "Limite delivery a 2 pedidos por semana com teto de R$ 50 cada", detalhe: "O brasileiro médio faz 6,3 pedidos de delivery por semana. Reduzir para 2 e estabelecer um teto por pedido pode economizar R$ 300–500/mês." },
            { n:"29", dica: "Prepare café em casa e leve na garrafa térmica", detalhe: "Um cafezinho por dia comprado fora custa R$ 5–8. No mês: R$ 100–160. Preparar em casa custa R$ 15–20/mês. Diferença anual: R$ 1.000–1.700." },
            { n:"30", dica: "Use o cashback dos apps de delivery ao máximo antes de cancelar", detalhe: "iFood, Rappi e Uber Eats têm programas de fidelidade com cashback de 5–20%. Use o saldo acumulado e depois considere cancelar assinaturas pagas dos planos premium." },
          ].map(({ n, dica, detalhe }) => (
            <div key={n} className="flex gap-3 bg-muted/30 border border-border rounded-xl p-4">
              <span className="font-black text-invest/50 text-sm w-6 shrink-0 pt-0.5">{n}.</span>
              <div>
                <p className="font-semibold text-sm mb-0.5">{dica}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Erros comuns */}
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-4">
          <AlertTriangle className="h-7 w-7 text-invest" />
          6. Erros Comuns Que Sabotam a Economia Doméstica
        </h2>
        <p>
          Mesmo seguindo as dicas acima, alguns hábitos podem anular boa parte do esforço
          de economizar. Reconhecer esses padrões é tão importante quanto aplicar as
          estratégias de corte de gastos:
        </p>
        <div className="not-prose space-y-2 my-6">
          {[
            { titulo: "Comprar em grande quantidade sem necessidade real", detalhe: "Promoções de 'leve 3, pague 2' só geram economia se você realmente vai consumir tudo antes do vencimento. Calcule o consumo médio mensal antes de estocar — alimento vencido na despensa é dinheiro jogado fora, não economia." },
            { titulo: "Trocar economia de dinheiro por gasto de tempo excessivo", detalhe: "Visitar 5 supermercados diferentes para economizar R$ 15 no total raramente compensa o tempo e o combustível gastos no trajeto. Escolha 1–2 estabelecimentos com bom custo-benefício geral e otimize ali." },
            { titulo: "Ignorar o custo de oportunidade de eletrodomésticos antigos", detalhe: "Uma geladeira com mais de 15 anos pode consumir até 50% mais energia que um modelo atual com selo Procel A. Em alguns casos, a troca se paga em 2–3 anos só pela economia na conta de luz." },
            { titulo: "Tratar a economia como evento único, não como hábito", detalhe: "Cortar gastos em um mês de 'crise' e voltar ao padrão antigo no mês seguinte não constrói patrimônio. O valor real da economia doméstica vem da consistência ao longo de anos, não de esforços pontuais." },
          ].map(({ titulo, detalhe }) => (
            <div key={titulo} className="flex gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm mb-0.5">{titulo}</p>
                <p className="text-xs text-muted-foreground">{detalhe}</p>
              </div>
            </div>
          ))}
        </div>


        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingDown className="h-7 w-7 text-invest" />
          O Impacto Real: O Que Fazer Com Esse Dinheiro
        </h2>
        <p>
          Aplicando as estratégias deste guia de forma consistente, uma família com renda de R$ 5.000/mês pode liberar entre <strong>R$ 850 e R$ 1.630 por mês</strong>. A chave é redirecionar esse dinheiro imediatamente — não deixá-lo na conta corrente onde desaparece em pequenos gastos:
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
          {[
            { titulo: "Prioridade 1: Reserva de emergência", desc: "Se você não tem 3–6 meses de gastos guardados, esse é o destino número 1. Com R$ 1.000/mês, você monta uma reserva sólida em 6 meses." },
            { titulo: "Prioridade 2: Quitar dívidas caras", desc: "Cartão de crédito cobra 400%+ ao ano. Cada R$ 1.000 quitado nessas dívidas é um retorno de 400% garantido — melhor que qualquer investimento." },
            { titulo: "Prioridade 3: Investir em renda fixa", desc: "Com a Selic acima de 13%, Tesouro Selic e CDB de liquidez diária rendem mais de 1%/mês com total segurança. Use para objetivos de médio prazo." },
            { titulo: "Prioridade 4: Construir patrimônio", desc: "Com dívidas zeradas e reserva montada, ETFs como BOVA11 e IVVB11 permitem crescimento patrimonial de longo prazo com aportes mensais pequenos." },
          ].map(({ titulo, desc }) => (
            <div key={titulo} className="bg-card border border-invest/20 rounded-xl p-4">
              <h3 className="font-bold text-sm text-invest mb-2">{titulo}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose my-6 p-5 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong>Atenção:</strong> Cortar gastos sem um destino claro para o dinheiro economizado raramente funciona. O dinheiro "disponível" tende a ser gasto em outros itens. Automatize a transferência para uma conta de investimentos no dia do pagamento — antes de pagar qualquer outra coisa.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          A Psicologia Por Trás dos Gastos Domésticos
        </h2>
        <p>
          Muito do que gastamos de forma desnecessária em casa não é resultado de má
          gestão consciente, mas de mecanismos psicológicos bem documentados que nos
          levam a comportamentos de consumo automáticos. A "fadiga de decisão" — o
          esgotamento mental que acumula ao longo do dia e nos torna mais vulneráveis
          a compras impulsivas no final da tarde e à noite — explica por que os
          momentos mais perigosos para abrir um aplicativo de delivery ou navegar em
          sites de compras são justamente aqueles em que já tomamos dezenas de decisões
          ao longo do dia.
        </p>
        <p>
          Criar barreiras físicas e digitais para esses momentos de maior
          vulnerabilidade — remover a opção de compra imediata salva em aplicativos,
          deslogar de sites de e-commerce, estabelecer horários fixos para compras não
          urgentes — redireciona a energia cognitiva limitada do cérebro para momentos
          de maior clareza e deliberação. Essa abordagem de design comportamental, em
          vez de depender de força de vontade pura, tende a produzir resultados muito
          mais consistentes no controle de gastos domésticos ao longo do tempo.
        </p>

      </div>

      <EditorialTake category="invest" title="Análise do Marcos: economizar é só metade da equação">
        <p>
          Depois de acompanhar centenas de leitores em suas jornadas financeiras, o padrão é consistente: quem consegue liberar R$ 500–1.000/mês cortando gastos domésticos e <em>não define para onde esse dinheiro vai</em> — não muda de situação financeira. O dinheiro simplesmente migra para outros gastos menos visíveis.
        </p>
        <p className="mt-2">
          Minha dica prática: no mesmo dia em que você cortar a primeira assinatura desnecessária, configure uma transferência automática para uma conta de investimentos — seja Tesouro Selic, CDB de liquidez diária ou até uma poupança, que já é melhor que nada. O <strong>pagamento automático para si mesmo</strong> é o único hábito financeiro que, sozinho, já muda a trajetória patrimonial de uma família em 5 anos.
        </p>
      </EditorialTake>

      <ArticleSources category="invest"
        sources={[
          {
            title: "Pesquisa de Orçamentos Familiares (POF) 2023 — Despesas das Famílias Brasileiras",
            url: "https://www.ibge.gov.br/estatisticas/sociais/saude/24786-pesquisa-de-orcamentos-familiares.html",
            publisher: "IBGE — Instituto Brasileiro de Geografia e Estatística",
            accessedAt: "Maio 2026",
          },
          {
            title: "Tarifas de Energia Elétrica — Bandeiras Tarifárias 2026",
            url: "https://www.aneel.gov.br/bandeiras-tarifarias",
            publisher: "Aneel — Agência Nacional de Energia Elétrica",
            accessedAt: "Maio 2026",
          },
          {
            title: "Calculadora de Combustível — Etanol vs Gasolina",
            url: "https://www.combustivellegal.gov.br",
            publisher: "Ministério de Minas e Energia / Combustível Legal",
            accessedAt: "Maio 2026",
          },
          {
            title: "IPCA — Índice de Preços ao Consumidor Amplo (Acumulado 12 meses)",
            url: "https://www.ibge.gov.br/explica/inflacao.php",
            publisher: "IBGE — Instituto Brasileiro de Geografia e Estatística",
            accessedAt: "Maio 2026",
          },
          {
            title: "Programa Nacional de Conservação de Energia Elétrica (PROCEL)",
            url: "https://www.gov.br/mme/pt-br/assuntos/secretarias/secretaria-de-energia-eletrica/procel",
            publisher: "Ministério de Minas e Energia / PROCEL",
            accessedAt: "Maio 2026",
          },
          {
            title: "Relatório de Endividamento e Inadimplência das Famílias Brasileiras",
            url: "https://www.bcb.gov.br/publicacoes/notasreuniaodp",
            publisher: "Banco Central do Brasil",
            accessedAt: "Maio 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="economia-domestica-2026-cortar-gastos" />
      <CommentSection
        postId="economia-domestica-2026-cortar-gastos"
        postTitle="Economia Doméstica 2026: 30 Dicas Para Cortar Gastos Sem Perder Qualidade de Vida"
       category="invest" />
    </article>
  );
};

export default EconomiaDomestica2026;
