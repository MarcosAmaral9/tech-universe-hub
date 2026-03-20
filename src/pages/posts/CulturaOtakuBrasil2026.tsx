import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Globe, TrendingUp, Users, Mic } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/cultura-otaku-brasil-2026.webp";

const CulturaOtakuBrasil2026 = () => {

  useEffect(() => {
    trackArticleRead("cultura-otaku-brasil-2026", "Cultura Otaku no Brasil 2026: Uma das Maiores Comunidades do Mundo", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Cultura Otaku no Brasil 2026: Como Virou uma das Maiores Comunidades do Mundo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />07 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Cultura Otaku no Brasil 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          O Brasil é hoje o segundo maior mercado consumidor de mangá fora do Japão. Com mais de 1.500 lojas especializadas e convenções que lotam ginásios, a cultura otaku brasileira é um fenômeno que merece análise séria.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Os Anos 90: O Começo de Tudo
        </h2>
        <p>
          Tudo começa com o <strong>Cavaleiros do Zodíaco</strong> (Saint Seiya) no SBT, em 1994. A série foi o grande divisor de águas — o primeiro anime a alcançar audiência mainstream no Brasil. <strong>Dragon Ball Z</strong> no Cartoon Network, <strong>Sailor Moon</strong> na Manchete: a TV aberta foi a porta de entrada para milhões de brasileiros.
        </p>
        <p>
          Nas bancas de jornal, a Editora Conrad e depois a JBC começaram a publicar mangás traduzidos, criando um mercado onde antes havia apenas importações caríssimas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          A Virada dos Anos 2000: Comunidade e Internet
        </h2>
        <p>
          A <strong>Anime Friends</strong>, fundada em 2003 em São Paulo, se tornaria a maior convenção de anime da América Latina. A Anime Friends 2025 reuniu mais de <strong>120.000 pessoas</strong>, números comparáveis a grandes festivais de música.
        </p>
        <p>
          A internet democratizou o acesso. <strong>Fansubs</strong> (traduções amadoras feitas por fãs) permitiram que o público brasileiro assistisse títulos que jamais chegariam ao mercado oficial. Muitos tradutores de fansubs de hoje são os profissionais de localização das plataformas de streaming.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          O Mercado Brasileiro Hoje: Números que Impressionam
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">1.500+</p>
            <p className="text-sm text-muted-foreground mt-1">Lojas especializadas</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">120K</p>
            <p className="text-sm text-muted-foreground mt-1">Pessoas na Anime Friends 2025</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-otaku/30 text-center">
            <p className="text-3xl font-bold text-otaku">2º</p>
            <p className="text-sm text-muted-foreground mt-1">Maior mercado de mangá fora do Japão</p>
          </div>
        </div>
        <p>
          A <strong>Panini Comics</strong>, JBC, Newpop e outras editoras publicam centenas de títulos simultâneos com o Japão. O modelo de simulpublication chegou ao mangá brasileiro, reduzindo drasticamente a pirataria.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic className="h-7 w-7 text-otaku" />
          O Otaku Brasileiro como Criador de Conteúdo
        </h2>
        <p>
          O Brasil é o país com mais criadores de conteúdo sobre anime e mangá em português no YouTube. No TikTok e Instagram, os edits, memes e análises otaku dominam o algoritmo. Essa produção de conteúdo não é só entretenimento — é um mercado.
        </p>
        <p>
          O futuro aponta para maior integração: animes brasileiros (alguns em produção), colaborações entre artistas nacionais e estúdios japoneses, e uma geração nova que cresceu sem a divisão entre "nerd" e "popular". Para essa geração, gostar de anime é simplesmente normal — e isso muda tudo.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Qual foi seu primeiro contato com anime?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="cultura-otaku-brasil-2026" />
      <CommentSection postId="cultura-otaku-brasil-2026" postTitle="Cultura Otaku no Brasil 2026: Uma das Maiores Comunidades do Mundo" />
    </article>
  );
};

export default CulturaOtakuBrasil2026;
