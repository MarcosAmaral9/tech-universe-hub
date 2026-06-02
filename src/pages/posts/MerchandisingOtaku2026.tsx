import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, ShoppingBag, Shield, TrendingUp, Gem, BarChart3, BookOpen, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/merchandising-otaku-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const MerchandisingOtaku2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "merchandising-otaku-colecionar-2026",
      "Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Merchandising · Colecionáveis · Figuras · Mangás
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento em 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="11 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Merchandising otaku 2026 — guia de colecionáveis, figuras, mangás e onde comprar no Brasil"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O <strong>merchandising otaku</strong> é um mercado global de US$ 12 bilhões que mistura paixão, estética e — para quem não tomar cuidado — uma conta bancária no limite. Uma estante com action figures iluminadas, prateleiras de mangás organizados por série, Nendoroids de personagens favoritos: colecionar é uma das partes mais prazerosas da cultura otaku. Mas o mercado tem armadilhas — falsificações, impostos de importação, modelos que desvalorizam e vendedores desonestos. Este guia ensina como montar uma coleção invejável com estratégia, conhecimento e sem arrependimentos.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gem className="h-7 w-7 text-otaku" />
          Entendendo o Mercado de Collectibles Otaku
        </h2>
        <p>
          O mercado global de colecionáveis de anime e mangá movimentou <strong>US$ 12 bilhões em 2025</strong>, segundo dados da Good Smile Company e relatórios do setor. Esse número inclui figuras, mangás, vestuário licenciado, acessórios, quadros e uma categoria crescente de arte digital colecionável. No Brasil, o mercado secundário no Mercado Livre e Shopee movimenta dezenas de milhões de reais por mês em produto otaku.
        </p>
        <p>
          Antes de comprar qualquer coisa, é essencial entender os tipos de produtos e suas características de preço e valorização:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { tipo: "🟡 Nendoroids (Good Smile Company)", preco: "R$ 350–700 (importado)", desc: "Figuras chibi articuladas com faces intercambiáveis. Coleção mais popular do mundo no segmento — mais de 2.000 personagens diferentes. Mantêm valor bem: Nendoroids lacradas de personagens populares raramente desvalorizam.", valoriza: "Alta" },
            { tipo: "🔵 Figmas (Max Factory / GSC)", preco: "R$ 400–900 (importado)", desc: "Figuras articuladas em escala real com alto nível de detalhamento e múltiplas partes intercambiáveis. Ideais para poses dinâmicas e fotografia. Personagens de ação funcionam melhor como Figma.", valoriza: "Alta" },
            { tipo: "🟠 PVC Scale Figures", preco: "R$ 600–3.000+", desc: "Estátuas em escala (1/7 ou 1/8) sem articulação. Mais detalhamento possível — cada fio de cabelo é esculpido. São o topo estético da categoria. Edições limitadas de personagens icônicos valorizam significativamente.", valoriza: "Muito alta (ed. limitadas)" },
            { tipo: "🟢 Prize Figures", preco: "R$ 80–250", desc: "Figuras de qualidade inferior sem articulação, originalmente distribuídas como prêmios de arcades no Japão (UFO Catcher). Ponto de entrada para iniciantes. Fabricantes como Taito e FuRyu. Desvalorizam com facilidade.", valoriza: "Baixa" },
            { tipo: "🔴 Resin Statues (artesanais/garage kits)", preco: "R$ 1.000–15.000+", desc: "Produção limitadíssima, frequentemente feitas à mão por artistas independentes. Alta variação de qualidade. Podem ser investimento significativo ou desperdício — depende do fabricante e do personagem.", valoriza: "Variável / Alta para consagrados" },
          ].map(({ tipo, preco, desc, valoriza }) => (
            <div key={tipo} className="bg-card rounded-xl border border-otaku/20 p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-otaku">{tipo}</h3>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full shrink-0 ml-2">{preco}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{desc}</p>
              <p className="text-xs"><span className="font-bold">Valorização: </span><span className="text-otaku">{valoriza}</span></p>
            </div>
          ))}
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShoppingBag className="h-7 w-7 text-otaku" />
          Onde Comprar: Brasil vs. Importação Direta
        </h2>
        <p>
          A grande decisão para colecionadores brasileiros é: comprar no Brasil (mais caro, sem risco de taxação) ou importar diretamente do Japão (mais barato, com risco de imposto). Entender os dois cenários é essencial para tomar a decisão certa para cada compra.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-otaku">🇧🇷 Comprar no Brasil</h3>
        <p>
          Lojas como <strong>Collectors.com.br</strong>, <strong>Otakuboard</strong>, <strong>JBC Manga Store</strong> e dezenas de lojas no Shopee com CNPJ verificado oferecem itens com garantia sem risco de taxação. O markup em relação ao preço japonês é de 40–80%, mas você recebe o produto em dias, sem estresse alfandegário.
        </p>
        <p>
          Para mangás, as editoras brasileiras <strong>Panini</strong>, <strong>JBC</strong>, <strong>Newpop</strong> e <strong>Pipoca & Nanquim</strong> têm distribuição nacional em livrarias, lojas especializadas e Amazon Brasil. O preço do mangá nacional (R$ 30–60 por volume) é acessível e a qualidade de impressão é excelente.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-otaku">🇯🇵 Importação Direta do Japão</h3>
        <p>
          Para figuras, <strong>AmiAmi</strong>, <strong>Hobby Search</strong> e <strong>Solaris Japan</strong> são os mais confiáveis e com melhor reputação internacional. Preços em iene frequentemente 30–50% menores que o Brasil — mas há custos adicionais:
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <h3 className="font-bold text-otaku mb-3">📦 Impostos de Importação no Brasil (2026)</h3>
          <div className="space-y-2">
            {[
              { regra: "Programa Remessa Conforme (Shopee/AliExpress/Amazon International)", desc: "Itens até US$ 50: 20% de II + ICMS estadual (18% em SP). Itens acima de US$ 50: 20% de II + ICMS. Parceiros do Programa (Shopee, AliExpress) calculam e cobram na compra, sem susto na alfândega." },
              { regra: "Importação direta (AmiAmi, Solaris Japan)", desc: "Itens declarados até US$ 50: isento de II pelo Programa Remessa Conforme se enviado via parceiro habilitado. Acima: 60% II + ICMS estadual sobre valor declarado + taxa da Receita Federal. Use Shipito ou FromJapan como intermediários." },
              { regra: "Dica prática", desc: "Para figuras acima de R$ 500 (US$ 100+), o custo de importação frequentemente torna a compra no Brasil mais vantajosa. A matemática muda para itens raros ou esgotados no Brasil, onde não há alternativa." },
            ].map(({ regra, desc }) => (
              <div key={regra} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="font-bold text-xs text-otaku">{regra}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Como Identificar Falsificações (Bootlegs)
        </h2>
        <p>
          O mercado de falsificações de colecionáveis otaku é massivo — especialmente no AliExpress e alguns vendedores do Mercado Livre. Um bootleg não apenas desperdiça dinheiro: destrói a experiência colecionável e pode ter plásticos com substâncias nocivas (especialmente em itens voltados a crianças).
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              label: "🚨 Sinais de Alerta — Pode Ser Bootleg",
              items: [
                "Preço muito abaixo do mercado (Nendoroid legítima raramente custa menos de R$ 200)",
                "Ausência do holograma de autenticidade da Good Smile / Bandai",
                "Embalagem com impressão desbotada ou fontes inconsistentes",
                "Encaixe frouxo das articulações — partes que caem sozinhas",
                "Plástico com cheiro forte (químico ou de borracha barata)",
                "Acabamento irregular — linhas de molde visíveis, tinta mal aplicada",
                "Vendedor sem histórico ou com reviews suspeitos",
              ]
            },
            {
              label: "✅ Sinais de Produto Original",
              items: [
                "Holograma de autenticidade da fabricante na caixa",
                "Impressão nítida com cores consistentes na embalagem",
                "Instruções em japonês/inglês incluídas",
                "Partes se encaixam com resistência adequada",
                "Cheiro neutro ou ausência de odor",
                "Comprado de revendedor autorizado (lista no site da GSC)",
                "Número de série único registrável no site da fabricante",
              ]
            }
          ].map(({ label, items }) => (
            <div key={label} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-2">{label}</h3>
              <ul className="space-y-1">
                {items.map((item) => <li key={item} className="text-xs text-muted-foreground">• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          O Que Valoriza e O Que Desvaloriza
        </h2>
        <p>
          Colecionar com inteligência significa entender que nem todo produto mantém — muito menos aumenta — seu valor. Para quem pensa em coleção como investimento (ou simplesmente quer preservar o valor do que compra para revender no futuro):
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { categoria: "📈 O que tende a VALORIZAR", items: ["Edições limitadas com numeração específica", "Primeiras impressões (1st Edition) de personagens icônicos", "Itens descontinuados de franquias ativas (Rem de Re:Zero triplicou)", "Figuras lacradas na caixa original — abertas perdem 30–50%", "Colaborações exclusivas (ex: GSC x Supreme, Nendoroids de edições especiais)", "Itens de animes que viraram clássicos após o lançamento"], cor: "text-green-400" },
            { categoria: "📉 O que tende a DESVALORIZAR", items: ["Figuras abertas sem caixa (-30 a -50% do valor imediatamente)", "Prize figures de personagens com baixa demanda", "Figuras de franquias que caíram em desgraça com a fandom", "Exposição à luz solar (amarelamento do plástico — irreversível)", "Mangás com volumes faltando na coleção (compradores querem séries completas)", "Bootlegs — perdem valor imediatamente e danificam sua reputação na comunidade"], cor: "text-red-400" },
          ].map(({ categoria, items, cor }) => (
            <div key={categoria} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className={`font-bold text-sm mb-2 ${cor}`}>{categoria}</h3>
              <ul className="space-y-1">
                {items.map((item) => <li key={item} className="text-xs text-muted-foreground">• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Conservação: Como Proteger Sua Coleção
        </h2>
        <p>
          Uma coleção bem conservada é a diferença entre um ativo que mantém valor e objetos que viram sucata em poucos anos. As principais práticas:
        </p>

        <div className="not-prose my-6 space-y-2">
          {[
            { dica: "💡 Iluminação LED indireta", desc: "Vitrines com LED branco frio (não diretamente sobre as figuras) valorizam esteticamente sem causar dano. Evite luz solar direta — raios UV causam amarelamento irreversível no PVC em 6–12 meses." },
            { dica: "🌡️ Controle de temperatura e umidade", desc: "PVC se deforma com calor excessivo (>35°C). Em cidades quentes, armazenar longe de janelas e com ventilação adequada é essencial. Umidade alta favorece o crescimento de fungos em caixas de papelão." },
            { dica: "🧹 Limpeza regular com pincel de maquiagem", desc: "Pincéis macios removem pó sem arriscar arranhar acabamentos. Nunca use pano úmido em figuras pintadas — dissolve tintas de detalhe finas." },
            { dica: "📦 Guardar as caixas originais", desc: "A caixa original pode representar 30–50% do valor de revenda. Guarde as caixas desmontadas em local seco — mesmo que não as exponha, o colecionador que comprar de você vai valorizar." },
            { dica: "📸 Fotografia de inventário", desc: "Mantenha um inventário fotográfico da coleção. Facilita seguro (se você tiver coleção de alto valor), revenda e rastreamento de itens emprestados." },
          ].map(({ dica, desc }) => (
            <div key={dica} className="flex gap-3 items-start bg-card rounded-xl border border-otaku/20 p-3">
              <span className="font-bold text-otaku text-xs shrink-0 w-40">{dica}</span>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Começando a Coleção: Guia por Orçamento Mensal
        </h2>

        <div className="not-prose my-6 grid md:grid-cols-3 gap-4">
          {[
            { orcamento: "💚 R$ 100–200/mês", perfil: "Iniciante com cuidado financeiro", estrategia: ["2–3 volumes de mangá por mês (série que você ama)", "1 Prize Figure por trimestre", "Foco em colecionar o que usa, não em investimento", "Comunidades no Discord para trocar ou comprar usado"] },
            { orcamento: "💛 R$ 300–600/mês", perfil: "Colecionador intermediário", estrategia: ["1 Nendoroid ou Figma por mês (pré-encomenda 6 meses antes)", "Mangá completo de 1–2 séries por ano", "Importação direta via AmiAmi para itens exclusivos", "MyFigureCollection para tracking e benchmark de preços"] },
            { orcamento: "🔴 R$ 1.000+/mês", perfil: "Colecionador avançado / investidor", estrategia: ["PVC Scale Figures de personagens icônicos", "Edições limitadas com foco em valorização", "Pré-venda de novidades 6–12 meses antes do lançamento", "Resin Statues de artistas reconhecidos (mercado secundário japonês)"] },
          ].map(({ orcamento, perfil, estrategia }) => (
            <div key={orcamento} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm text-otaku mb-1">{orcamento}</h3>
              <p className="text-xs text-muted-foreground mb-2 italic">{perfil}</p>
              <ul className="space-y-1">
                {estrategia.map((s) => <li key={s} className="text-xs text-muted-foreground">• {s}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: colecionar produto oficial é diferente de acumular bootleg">
          <p>
            Tenho figuras desde 2015 e aprendi na marra que <strong>colecionar produto oficial deixou de ser hobby de nicho para virar mercado sério</strong>. A Good Smile Company opera pré-venda global e o mercado secundário no Mercari/Yahoo Auctions movimenta centenas de milhões de ienes por mês — isso segundo os próprios relatórios públicos da GSC.
          </p>
          <p>
            No Brasil, a importação legal exige atenção a três pontos: imposto de importação (60% + ICMS estadual sobre valor declarado, conforme Receita Federal), a taxa do Programa Remessa Conforme da Shopee/AliExpress (20% até US$ 50) e fretamento via empresas intermediárias como Shipito para itens exclusivos do Japão. Minha recomendação prática: <strong>priorize peças com numeração limitada e caixa original</strong>. Figmas e Nendoroids da GSC mantêm 70–90% do valor após cinco anos quando guardadas lacradas. Bootlegs perdem valor imediatamente e ainda enfraquecem o suporte oficial às licenças no Brasil.
          </p>
        </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">O que você coleciona? 🗂️</h3>
          <p className="text-muted-foreground">Mangás, Nendoroids, Figmas? Conta a sua coleção nos comentários! 👇</p>
        </div>
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Good Smile Company — site oficial e revendedores autorizados",
            url: "https://www.goodsmile.com/",
            publisher: "Good Smile Company",
            accessedAt: "Março 2026"
          },
          {
            title: "Bandai Spirits — Hobby Site oficial",
            url: "https://bandai-hobby.net/",
            publisher: "Bandai Spirits",
            accessedAt: "Março 2026"
          },
          {
            title: "Receita Federal — Programa Remessa Conforme",
            url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/importacao-e-exportacao/remessas-internacionais/programa-remessa-conforme",
            publisher: "Receita Federal do Brasil",
            accessedAt: "Março 2026"
          },
          {
            title: "MyFigureCollection — banco de dados de colecionáveis",
            url: "https://myfigurecollection.net/",
            publisher: "MyFigureCollection",
            accessedAt: "Março 2026"
          },
          {
            title: "Kotobukiya — site oficial",
            url: "https://en.kotobukiya.co.jp/",
            publisher: "Kotobukiya",
            accessedAt: "Março 2026"
          },
          {
            title: "AmiAmi — loja japonesa de colecionáveis",
            url: "https://www.amiami.com/",
            publisher: "AmiAmi",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="merchandising-otaku-colecionar-2026" />
      <CommentSection postId="merchandising-otaku-colecionar-2026" postTitle="Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento"  category="otaku" />
    </article>
  );
};

export default MerchandisingOtaku2026;
