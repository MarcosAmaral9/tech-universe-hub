import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, ShoppingBag, Shield, TrendingUp, Gem } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/merchandising-otaku-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const MerchandisingOtaku2026 = () => {

  useEffect(() => {
    trackArticleRead("merchandising-otaku-colecionar-2026", "Merchandising Otaku: Como Colecionar com Inteligência", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Merchandising Otaku: Como Colecionar com Inteligência e Sem Quebrar o Orçamento
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Merchandising Otaku 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma estante impecável com action figures iluminadas. Uma prateleira de mangás organizados por série. Colecionar é uma das partes mais prazerosas — e financeiramente perigosas — da cultura otaku. Este guia ensina como montar uma coleção invejável sem cair nas armadilhas do mercado.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gem className="h-7 w-7 text-otaku" />
          Entendendo o Mercado de Collectibles
        </h2>
        <p>
          O mercado global movimentou <strong>US$ 12 bilhões</strong> em 2025. Os principais tipos: <strong>Figmas</strong> (articuladas, Max Factory), <strong>Nendoroids</strong> (chibi articuladas, Good Smile Company), <strong>Prize Figures</strong> (não articuladas, mais baratas), <strong>PVC Scale Figures</strong> (estátuas de escala) e itens premium como <strong>Resin Statues</strong>.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShoppingBag className="h-7 w-7 text-otaku" />
          Onde Comprar: Brasil vs. Importação
        </h2>
        <p>
          No Brasil, lojas como <strong>Collectors.com.br</strong> e <strong>Otakuboard</strong> oferecem itens com garantia sem risco de taxação alfandegária. O preço é mais alto (markup de 40-80%), mas a segurança compensa para iniciantes.
        </p>
        <p>
          Para importação direta, <strong>Amiami</strong>, <strong>Hobby Search</strong> e <strong>Solaris Japan</strong> são os mais confiáveis. Atenção: itens acima de US$ 50 podem ser taxados em até 60%.
        </p>
      <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          Como Identificar Falsificações
        </h2>
        <p>
          Sinais de alerta: preço muito abaixo do mercado (uma Nendoroid legítima raramente custa menos de R$ 200), ausência do holograma de autenticidade, encaixe frouxo das articulações, plástico com cheiro forte e acabamento irregular.
        </p>
        <p className="font-bold italic">
          Se parece bom demais para ser verdade, provavelmente é falso. Compre sempre de vendedores com histórico verificável.
        </p>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          O Que Valoriza e O Que Desvaloriza
        </h2>
        <p>
          <strong>Valorizam:</strong> edições limitadas, primeiras impressões de títulos clássicos, itens descontinuados de personagens populares. A figura de Rem (Re:Zero) já triplicou seu preço original.
        </p>
        <p>
          <strong>Desvalorizam:</strong> figuras sem caixa perdem 30-50% do valor. Exposição à luz solar causa amarelamento do plástico. Vitrines com iluminação LED protegem as figuras do pó e fazem a diferença estética.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">O que você coleciona?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      
      <section className="my-10">
        <div className="bg-card border border-otaku/30 rounded-2xl p-6 mb-6">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-otaku">●</span> Análise do Marcos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Colecionar produto otaku oficial deixou de ser hobby de nicho. Grandes fabricantes como Good Smile Company (linhas Nendoroid e figma), Bandai Spirits (Ichiban Kuji, S.H. Figuarts) e Kotobukiya operam pré-venda global e o mercado secundário no Mercari/Yahoo Auctions movimenta centenas de milhões de ienes por mês segundo relatórios públicos da própria Good Smile Company.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">No Brasil, a importação legal exige atenção a três pontos: imposto de importação (60% + ICMS estadual sobre valor declarado, conforme Receita Federal), taxa Remessa Conforme da Shopee/AliExpress (17% até US$ 50, isenção do II) e fretamento via empresas como Shipito ou JapanBuyandShip para itens exclusivos do Japão.</p>
              <p className="text-muted-foreground leading-relaxed mb-3">A análise do Marcos: priorize peças com numeração limitada e box oficial. Figmas e Nendoroids da GSC mantêm 70-90% do valor após cinco anos quando guardadas lacradas; bootlegs perdem valor imediatamente e ainda enfraquecem o suporte oficial às licenças no Brasil.</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold mb-4">Fontes consultadas</h3>
          <ul className="space-y-2 text-sm">
            {[
              { title: "Good Smile Company — site oficial", url: "https://www.goodsmile.com/" },
          { title: "Bandai Spirits Hobby Site", url: "https://bandai-hobby.net/" },
          { title: "Receita Federal — Remessa Conforme", url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/importacao-e-exportacao/remessas-internacionais/programa-remessa-conforme" },
          { title: "MyFigureCollection — banco de dados", url: "https://myfigurecollection.net/" },
          { title: "Kotobukiya — site oficial", url: "https://en.kotobukiya.co.jp/" },
            ].map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-otaku hover:underline break-words">
                  {s.title} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Última verificação dos links: maio de 2026.
          </p>
        </div>
      </section>
      <RelatedPosts currentSlug="merchandising-otaku-colecionar-2026" />
      <CommentSection postId="merchandising-otaku-colecionar-2026" postTitle="Merchandising Otaku: Como Colecionar com Inteligência" />
    </article>
  );
};

export default MerchandisingOtaku2026;