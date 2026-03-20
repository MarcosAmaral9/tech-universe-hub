import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Home, ShoppingCart, Lightbulb, Calculator, Sparkles } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/economia-domestica-2026.webp";

const EconomiaDomestica2026 = () => {

  useEffect(() => {
    trackArticleRead("economia-domestica-2026-cortar-gastos", "Economia Doméstica 2026: 30 Dicas Para Cortar Gastos Sem Perder Qualidade", "invest");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="invest" />

      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Economia Doméstica em 2026: 30 Dicas Práticas Para Cortar Gastos Sem Perder Qualidade de Vida
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />17 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Economia Doméstica 2026 - Dicas para cortar gastos e economizar" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Com inflação acumulada, energia cara e supermercado pesando no bolso, economizar em casa se tornou uma habilidade essencial em 2026. A boa notícia: dá para cortar gastos significativos sem abrir mão do conforto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-invest" />
          Energia e Água: Onde Mais se Desperdiça
        </h2>
        <p>
          A conta de luz é o maior vilão do orçamento doméstico brasileiro. Em 2026, com as bandeiras tarifárias oscilando, cada kWh conta. Aqui estão as ações com maior impacto:
        </p>
        <ol>
          <li><strong>Troque todas as lâmpadas por LED</strong> — Economia de até 80% na iluminação</li>
          <li><strong>Use a máquina de lavar cheia</strong> — Cada ciclo a menos economiza R$ 2-4</li>
          <li><strong>Desligue aparelhos em standby</strong> — Representam até 12% da conta de luz</li>
          <li><strong>Instale um timer no chuveiro</strong> — Reduza banhos para 5 minutos (economia de R$ 50-80/mês)</li>
          <li><strong>Use ventilador antes do ar-condicionado</strong> — Consome 90% menos energia</li>
          <li><strong>Considere energia solar</strong> — Em 2026, painéis solares se pagam em 3-4 anos</li>
        </ol>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShoppingCart className="h-7 w-7 text-invest" />
          Supermercado: Como Gastar 30% Menos
        </h2>
        <p>
          O supermercado é onde famílias brasileiras mais desperdiçam. Segundo o IBGE, 30% dos alimentos comprados vão para o lixo. Estratégias comprovadas:
        </p>
        <ol>
          <li><strong>Faça lista antes de sair</strong> — Compras por impulso representam 40% do gasto</li>
          <li><strong>Compare preço por kg/litro</strong>, não por embalagem</li>
          <li><strong>Compre frutas e verduras da estação</strong> — Até 60% mais baratas</li>
          <li><strong>Use apps de cashback</strong> — Méliuz, Ame, PicPay (economia de 5-15%)</li>
          <li><strong>Faça compras semanais</strong>, não diárias — Reduz compras por impulso</li>
          <li><strong>Congele porções</strong> — Cozinhar em lote economiza gás e tempo</li>
          <li><strong>Substitua marcas</strong> — Marcas próprias de supermercado são 20-40% mais baratas</li>
          <li><strong>Feiras livres no fim</strong> — Preços caem até 50% na última hora</li>
        </ol>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Home className="h-7 w-7 text-invest" />
          Assinaturas e Serviços: O Vazamento Silencioso
        </h2>
        <p>
          O brasileiro médio gasta R$ 350/mês em assinaturas (streaming, apps, academia). A maioria nem usa tudo. Faça o exercício:
        </p>
        <ul>
          <li><strong>Audite suas assinaturas</strong> — Cancele o que não usa há 30 dias</li>
          <li><strong>Compartilhe planos família</strong> — Netflix, Spotify, YouTube Premium (economia de 50-70%)</li>
          <li><strong>Alterne streamings</strong> — Assine 1 por mês, assista tudo e troque</li>
          <li><strong>Negocie internet e celular</strong> — Ligue para cancelar e receba ofertas melhores</li>
          <li><strong>Use apps gratuitos</strong> — Muitos apps pagos têm alternativas grátis equivalentes</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Calculator className="h-7 w-7 text-invest" />
          Transporte: De R$ 800 Para R$ 300/Mês
        </h2>
        <p>
          O transporte é o segundo maior gasto das famílias brasileiras. Alternativas para 2026:
        </p>
        <ul>
          <li><strong>Trabalho híbrido/remoto</strong> — Cada dia em casa economiza R$ 20-50</li>
          <li><strong>Caronas compartilhadas</strong> — Apps como BlaBlaCar e 99Pool</li>
          <li><strong>Bicicleta elétrica</strong> — Custo de R$ 0,05/km vs R$ 0,80/km do carro</li>
          <li><strong>Manutenção preventiva</strong> — Evita gastos de emergência 3x maiores</li>
          <li><strong>Compare combustíveis</strong> — Etanol vale a pena quando custa até 70% da gasolina</li>
              <li><strong>Cancele assinaturas esquecidas:</strong> Revise seu extrato bancário e cancele qualquer assinatura que você não usou nos últimos 3 meses — média de economia: R$ 80–150/mês.</li>
              <li><strong>Compare preços antes de comprar:</strong> Use Buscapé, Zoom ou Google Shopping em qualquer compra acima de R$ 100. A diferença pode chegar a 40% pelo mesmo produto.</li>
              <li><strong>Técnica do carrinho abandonado:</strong> Espere 48 horas antes de finalizar compras online. Além de evitar compras por impulso, muitas lojas enviam cupom de desconto para reconquistar o cliente.</li>
              <li><strong>Manutenção preventiva em casa:</strong> Limpe filtros de ar-condicionado mensalmente, desentupa ralos antes de entupir e revise o encanamento a cada 6 meses. Prevenir custa 10x menos do que corrigir.</li>
              <li><strong>Marmita pelo menos 3 vezes por semana:</strong> Uma refeição fora de casa em São Paulo custa em média R$ 35–50. Três marmitas semanais economizam cerca de R$ 280–400 por mês.</li>
              <li><strong>Renegocie seu plano de celular todo ano:</strong> As operadoras sempre têm ofertas melhores para clientes que ameaçam cancelar. Ligue, diga que vai trocar de operadora e peça desconto — funciona em mais de 70% dos casos.</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-invest" />
          O Impacto Real: Quanto Você Pode Economizar
        </h2>
        <p>
          Aplicando todas as estratégias deste guia, uma família com renda de R$ 5.000/mês pode economizar entre <strong>R$ 800 e R$ 1.500 por mês</strong>. Em um ano, isso representa R$ 9.600 a R$ 18.000 — dinheiro suficiente para montar uma reserva de emergência ou começar a investir.
        </p>
        <p>
          A chave é começar pelas mudanças de maior impacto: energia, supermercado e assinaturas. Pequenas mudanças diárias, quando somadas, transformam completamente sua saúde financeira.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual sua melhor dica de economia?</h3>
          <p className="text-muted-foreground">Compartilhe nos comentários e ajude outros leitores! 💰</p>
        </div>
      </div>

      <RelatedPosts currentSlug="economia-domestica-2026-cortar-gastos" />
      <CommentSection postId="economia-domestica-2026-cortar-gastos" postTitle="Economia Doméstica 2026: 30 Dicas Para Cortar Gastos Sem Perder Qualidade" />
    </article>
  );
};

export default EconomiaDomestica2026;
