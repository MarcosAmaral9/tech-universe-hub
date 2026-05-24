import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { ArrowLeft, Clock, User, Calendar, Heart, AlertTriangle, Phone, Smile } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/saude-mental-otaku-2026.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
const SaudeMentalOtaku2026 = () => {

  useEffect(() => {
    trackArticleRead("saude-mental-cultura-otaku-2026", "Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Ele Isola
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" loading="eager"
          decoding="async"
          src={heroImg} alt="Saúde Mental e Cultura Otaku" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Anime salvou vidas. Também é verdade que, para alguns, o mergulho na cultura otaku se tornou uma forma de evitar o mundo real. Estas duas afirmações não se contradizem — e é por isso que este artigo existe. Sem julgamentos, com empatia.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-otaku" />
          Como o Anime Pode Ajudar
        </h2>
        <p>
          Animes como <strong>A Silent Voice</strong>, <strong>Your Lie in April</strong>, <strong>March Comes in Like a Lion</strong> e <strong>Violet Evergarden</strong> abordam depressão, luto, isolamento e trauma com uma profundidade que muitos descrevem como transformadora.
        </p>
        <p>
          A sensação de "esse personagem entende o que estou passando" é poderosa. Para adolescentes e jovens adultos que se sentem incompreendidos, encontrar representação emocional pode ser o primeiro passo para reconhecer e nomear sentimentos.
        </p>
        <p>
          Os laços formados em torno de interesses compartilhados são socialmente genuínos. Amizades feitas em convenções e comunidades online são reais — e para pessoas com dificuldades de socialização, podem ser a principal fonte de conexão humana.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-500" />
          Sinais de Alerta: Quando o Escape Vira Fuga
        </h2>
        <p>
          Existe uma diferença importante entre <strong>escapismo saudável</strong> (usar a ficção para descansar) e <strong>fuga disfuncional</strong> (usar a ficção para evitar problemas reais). Se relacionamentos fictícios substituem completamente a busca por conexões humanas, isso merece atenção cuidadosa.
        </p>
        <p>
          O fenômeno <strong>hikikomori</strong> (reclusão social extrema) é documentado no Japão e tem paralelos em outras culturas. Não é causado pelo anime — mas o consumo excessivo pode ser tanto sintoma quanto fator facilitador do isolamento.
        </p>
        <p>
          A solução não é censura — é <strong>educação para o consumo crítico</strong>. Discutir esses temas dentro da comunidade é saudável e necessário.
        </p>
      <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Phone className="h-7 w-7 text-otaku" />
          Recursos e Apoio
        </h2>
        <div className="p-6 bg-card rounded-xl border-2 border-otaku/40 my-6">
          <h4 className="font-bold text-lg mb-3">Se você precisa de ajuda:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>📞 <strong>CVV</strong> (Centro de Valorização da Vida): <strong>188</strong> (24h) ou <strong>cvv.org.br</strong></li>
            <li>🏥 <strong>CAPS</strong> (Centro de Atenção Psicossocial): atendimento gratuito pelo SUS</li>
            <li>💻 Plataformas de terapia online tornaram o acesso mais democrático</li>
          </ul>
          <p className="mt-3 text-sm italic">Buscar ajuda é um ato de coragem, não fraqueza. Alguns dos personagens de anime mais amados são justamente os que reconhecem que não podem carregar tudo sozinhos.</p>
        </div>

        <AdRectangle className="my-8" />

        
<h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Smile className="h-7 w-7 text-otaku" />
          Cultivando uma Relação Saudável
        </h2>
        <p>
          Mantenha pelo menos um hobby com contato físico com pessoas. Reserve horários para o conteúdo otaku como forma de apreciar mais conscientemente. Permita-se criticar obras que você ama quando elas fazem algo problemático.
        </p>
        <p>
          A cultura otaku em seu melhor é sobre paixão compartilhada, criatividade e comunidade. Quando cultivada de forma saudável, ela enriquece a vida de formas que dificilmente encontramos em outros lugares. <strong>Cuide de você para poder desfrutar dela por muitos anos.</strong>
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Como o anime impactou sua vida?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários — com respeito e empatia. 💜👇</p>
        </div>
      </div>
      <section className="my-10">
        <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-6">
          <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> Análise do Marcos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Estudos publicados em revistas como Frontiers in Psychology e Journal of Mental Health Counseling exploram o uso terapêutico do anime e mangá — em particular obras como 'A Silent Voice' (Koe no Katachi), 'Welcome to the NHK' e 'March Comes In Like a Lion', frequentemente citadas por terapeutas em programas de saúde mental para adolescentes e jovens adultos.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Pesquisa do American Academy of Pediatrics (AAP) sobre tempo de tela recomenda limites equilibrados; OMS classifica 'transtorno por uso de jogos' (gaming disorder) no CID-11 desde 2019. No Brasil, o CVV (Centro de Valorização da Vida — 188) oferece atendimento gratuito 24h e a CAPS atende casos com necessidade clínica.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Minha análise: a relação cultura otaku × saúde mental é dupla — pode ser refúgio terapêutico (comunidade, identificação, sublimação) ou catalisador de isolamento quando substitui completamente relações sociais e atividades físicas. Sinais de alerta: privação de sono recorrente, abandono de hobbies/amigos não relacionados, recusa de saída de casa por mais de 2 semanas. Procure ajuda profissional (CVV 188 ou CAPS) antes de virar quadro grave.</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold mb-4">Fontes consultadas</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.cvv.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">CVV — Centro de Valorização da Vida ↗</a></li>
            <li><a href="https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">OMS — CID-11 Gaming Disorder ↗</a></li>
            <li><a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Ministério da Saúde — CAPS ↗</a></li>
            <li><a href="https://www.frontiersin.org/journals/psychology" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">Frontiers in Psychology — Anime studies ↗</a></li>
            <li><a href="https://www.aap.org/en/patient-care/media-and-children/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-words">American Academy of Pediatrics — Media Use ↗</a></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Última verificação dos links: maio de 2026.
          </p>
        </div>
      </section>


      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="saude-mental-cultura-otaku-2026" />
      <NewsletterSignup variant="modal" categories={["otaku"]} showAfterMs={60000} />
      <CommentSection postId="saude-mental-cultura-otaku-2026" postTitle="Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola" />
    </article>
  );
};

export default SaudeMentalOtaku2026;