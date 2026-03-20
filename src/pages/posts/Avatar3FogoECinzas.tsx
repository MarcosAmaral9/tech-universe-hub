import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Flame, Skull, Mountain, Swords, Target, Film } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarFireImg from "@/assets/avatar-fire.webp";

const Avatar3FogoECinzas = () => {

  useEffect(() => {
    trackArticleRead("avatar-3-fogo-cinzas-lado-sombrio-pandora", "Avatar 3: Fire and Ash — Tudo Sobre o Filme, Data e O Que Esperar", "geek");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/avatar" portalLabel="Painel Avatar" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 3: Fire and Ash – Tudo Sobre o Filme, Data de Lançamento e O Que Esperar
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            24 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            10 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          src={avatarFireImg}
          alt="Avatar 3 Fire and Ash - Povo das Cinzas de Pandora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Prepare-se para o próximo capítulo da saga de Pandora. <strong>Avatar 3: Fire and Ash</strong> 
          (Fogo e Cinzas) promete revolucionar novamente o cinema com a introdução de uma tribo Na'vi 
          completamente diferente: os <strong>Ash People</strong>, que desafiam tudo que conhecemos 
          sobre os habitantes de Pandora.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-orange-500/10 to-background rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-400" />
            Informações Confirmadas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Título:</strong> Avatar: Fire and Ash</div>
            <div><strong>Lançamento:</strong> 19 de Dezembro, 2025</div>
            <div><strong>Diretor:</strong> James Cameron</div>
            <div><strong>Nova Tribo:</strong> Ash People (Povo das Cinzas)</div>
            <div><strong>Ambiente:</strong> Regiões vulcânicas de Pandora</div>
            <div><strong>Elenco:</strong> Sam Worthington, Zoe Saldana, Sigourney Weaver</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-orange-400" />
          O Povo das Cinzas: Na'vi Que Desafiam Expectativas
        </h2>

        <p>
          James Cameron confirmou que Avatar 3 introduzirá os <strong>"Ash People"</strong> (Povo das Cinzas), 
          uma tribo Na'vi radicalmente diferente das anteriores. Enquanto os Omaticaya representam 
          a floresta e os Metkayina representam o oceano, os Ash People habitam <strong>regiões 
          vulcânicas</strong> e possuem uma filosofia de vida completamente distinta.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔥 Virada Narrativa
          </h3>
          <p className="text-muted-foreground mb-0">
            Pela primeira vez na franquia, veremos <strong>Na'vi que não são aliados automáticos</strong>. 
            Os Ash People representam um lado mais agressivo e pragmático de Pandora, mostrando que 
            o planeta não é um paraíso idealizado, mas um ecossistema complexo com conflitos internos.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-orange-400" />
          Nem Todo Na'vi é "Bonzinho": A Grande Virada
        </h2>

        <p>
          Esta é a mudança narrativa mais significativa do terceiro filme. Até agora, os Na'vi 
          foram retratados como <strong>guardiões pacíficos da natureza</strong>, em harmonia 
          com Eywa. Mas o que acontece quando uma tribo evolui em ambiente hostil, onde 
          vulcões e destruição fazem parte do ciclo natural?
        </p>

        <blockquote className="border-l-4 border-orange-400 pl-6 my-8 italic text-muted-foreground">
          "Eu quero mostrar que Pandora não é um paraíso perfeito. Há conflitos internos, 
          há tribos que pensam diferente. É um estudo sobre a natureza – e a natureza inclui 
          destruição e renovação."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mountain className="h-7 w-7 text-orange-400" />
          Ambiente Vulcânico: Novo Desafio Visual
        </h2>

        <p>
          Após a floresta bioluminescente do primeiro filme e os oceanos cristalinos do segundo, 
          Avatar 3 explorará <strong>regiões vulcânicas</strong> de Pandora. Paisagens de lava, 
          cinzas e terrenos áridos que contrastam drasticamente com tudo que foi apresentado 
          anteriormente na franquia.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Flame className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Desafio Visual Inédito</h4>
            <p className="text-sm text-muted-foreground">
              Renderizar fogo, lava e partículas de cinza de forma fotorrealista representa 
              o novo desafio técnico da Weta Digital, potencialmente superando a complexidade 
              da água em Avatar 2.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Swords className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Conflito Inédito</h4>
            <p className="text-sm text-muted-foreground">
              Pela primeira vez, veremos <strong>Na'vi lutando contra Na'vi</strong> – não 
              apenas contra humanos. Isso adiciona camadas de complexidade moral à narrativa.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-orange-400" />
          Filmagem Simultânea: Estratégia de Produção
        </h2>

        <p>
          Avatar 3 foi <strong>gravado simultaneamente</strong> com O Caminho da Água para garantir 
          consistência visual e o envelhecimento correto dos atores jovens. Isso significa que 
          grande parte do filme já estava filmado antes mesmo do lançamento de Avatar 2, 
          garantindo qualidade e coerência narrativa.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Aspecto</th>
                <th className="text-left py-3 px-4 font-bold">Detalhes Confirmados</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Título Original</td>
                <td className="py-3 px-4 text-muted-foreground">Avatar: Fire and Ash</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Data de Lançamento</td>
                <td className="py-3 px-4 text-muted-foreground">19 de Dezembro, 2025</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Nova Tribo</td>
                <td className="py-3 px-4 text-muted-foreground">Ash People (Povo das Cinzas)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ambiente Principal</td>
                <td className="py-3 px-4 text-muted-foreground">Regiões vulcânicas de Pandora</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Elenco Principal</td>
                <td className="py-3 px-4 text-muted-foreground">Sam Worthington, Zoe Saldana, Sigourney Weaver, Kate Winslet</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Novos Personagens</td>
                <td className="py-3 px-4 text-muted-foreground">Michelle Yeoh, Oona Chaplin confirmadas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Que Esperar de Avatar 3?</h2>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Expectativas Confirmadas</h3>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>✓ <strong>Visuais ainda mais impressionantes:</strong> Fogo e lava fotorrealistas em CGI</li>
            <li>✓ <strong>Narrativa mais complexa:</strong> Nem todo Na'vi será aliado da família Sully</li>
            <li>✓ <strong>Continuação da saga familiar:</strong> Os filhos de Jake ganham mais destaque</li>
            <li>✓ <strong>Exploração de Eywa:</strong> O lado destrutivo e renovador da natureza</li>
            <li>✓ <strong>Conflitos morais:</strong> Questionamentos sobre o que significa "proteger" Pandora</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Avatar 3 Será o Teste Final da Franquia</h2>

        <p>
          Avatar 3 será o <strong>teste definitivo</strong> para determinar se a franquia 
          consegue manter o trono de maior bilheteria da história. Com duas sequências 
          confirmadas após este (Avatar 4 e 5), Cameron aposta que Pandora ainda tem 
          muito a oferecer para o público global.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Por Que Assistir</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Continuação de uma das maiores franquias do cinema</li>
              <li>• Tecnologia de CGI ainda mais avançada</li>
              <li>• Nova região de Pandora para explorar</li>
              <li>• Complexidade narrativa expandida</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Recomendações</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Assistir Avatar 1 e 2 antes</li>
              <li>• Experiência ideal em IMAX 3D</li>
              <li>• Preparar-se para filme longo</li>
              <li>• Expectativa de tons mais sombrios</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão: O Lado Sombrio de Pandora</h2>

        <p>
          Avatar 3: Fire and Ash representa uma <strong>evolução narrativa ousada</strong> para 
          a franquia. Ao introduzir antagonistas Na'vi e explorar temas de conflito interno, 
          James Cameron demonstra que Pandora é um mundo tão complexo quanto o nosso – com 
          beleza e brutalidade coexistindo.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O que você acha da ideia de Na'vi antagonistas?
          </h3>
          <p className="text-muted-foreground">
            Você está animado para ver o lado mais sombrio de Pandora? 
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="avatar-3-fogo-cinzas-lado-sombrio-pandora" />
      <CommentSection postId="avatar-3-fogo-cinzas-lado-sombrio-pandora" postTitle="Avatar 3: Fire and Ash — Tudo Sobre o Filme, Data e O Que Esperar" />
    </article>
  );
};

export default Avatar3FogoECinzas;
