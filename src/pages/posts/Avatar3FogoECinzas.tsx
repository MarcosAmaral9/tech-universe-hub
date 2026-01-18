import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Flame, Skull, Mountain, Swords } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarFireImg from "@/assets/avatar-fire.jpg";

const Avatar3FogoECinzas = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek/avatar"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Portal Avatar
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 3: Fogo e Cinzas – O Lado Sombrio de Pandora
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            14 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            5 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={avatarFireImg}
          alt="Avatar Fire and Ash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Prepare-se para o próximo capítulo da saga de Pandora. <strong>Avatar 3: Fire and Ash</strong> 
          (Fogo e Cinzas) promete mostrar um lado de Pandora que nunca vimos antes: uma tribo Na'vi 
          que não é tão "bonzinha" quanto os Omaticaya ou Metkayina.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-orange-500/10 to-background rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔥 O Povo das Cinzas
          </h3>
          <p className="text-muted-foreground mb-0">
            James Cameron confirmou que veremos os <strong>"Ash People"</strong> (Povo das Cinzas), 
            uma tribo Na'vi mais agressiva ligada ao fogo e vulcões. Diferente das tribos anteriores, 
            eles representam um <strong>lado mais sombrio</strong> de Pandora.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-orange-400" />
          Nem Todo Na'vi é "Bonzinho"
        </h2>

        <p>
          Esta é a grande virada narrativa do terceiro filme. Até agora, os Na'vi foram retratados 
          como <strong>guardiões da natureza</strong>, em harmonia com Eywa. Mas o que acontece quando 
          uma tribo vive perto de vulcões ativos, onde a destruição faz parte do ciclo natural?
        </p>

        <blockquote className="border-l-4 border-orange-400 pl-6 my-8 italic text-muted-foreground">
          "Eu quero mostrar que Pandora não é um paraíso perfeito. Há conflitos internos, 
          há tribos que pensam diferente. É um estudo sobre a natureza – e a natureza inclui fogo."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mountain className="h-7 w-7 text-orange-400" />
          O Ambiente Vulcânico
        </h2>

        <p>
          Após a floresta bioluminescente e os oceanos cristalinos, agora exploraremos 
          <strong> regiões vulcânicas</strong> de Pandora. Paisagens de lava, cinzas e terrenos 
          áridos que contrastam drasticamente com tudo que vimos antes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Flame className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Desafio Visual</h4>
            <p className="text-sm text-muted-foreground">
              Renderizar fogo, lava e partículas de cinza de forma fotorrealista é o novo 
              desafio técnico da Weta.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Swords className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Conflito Interno</h4>
            <p className="text-sm text-muted-foreground">
              Pela primeira vez, veremos Na'vi lutando contra Na'vi – não apenas contra humanos.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Que Sabemos Até Agora</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold">Informação</th>
                <th className="text-left py-3 px-4 font-bold">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Título</td>
                <td className="py-3 px-4 text-muted-foreground">Avatar: Fire and Ash (Fogo e Cinzas)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Lançamento</td>
                <td className="py-3 px-4 text-muted-foreground">Dezembro de 2025</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Nova Tribo</td>
                <td className="py-3 px-4 text-muted-foreground">Ash People (Povo das Cinzas)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ambiente</td>
                <td className="py-3 px-4 text-muted-foreground">Regiões vulcânicas de Pandora</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Elenco</td>
                <td className="py-3 px-4 text-muted-foreground">Retorno de Sam Worthington, Zoe Saldana, Sigourney Weaver</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Curiosidade: Filmagem Simultânea</h2>

        <p>
          Avatar 3 foi <strong>gravado simultaneamente</strong> com O Caminho da Água para garantir 
          a consistência visual e o envelhecimento correto dos atores jovens. Isso significa que 
          grande parte do filme já estava pronto antes mesmo do lançamento do segundo.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">O Que Esperar</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ <strong>Visuais ainda mais impressionantes</strong> – fogo e lava fotorrealistas.</li>
            <li>✓ <strong>Narrativa mais complexa</strong> – nem todo Na'vi será aliado.</li>
            <li>✓ <strong>Continuação da saga Sully</strong> – os filhos de Jake em destaque.</li>
            <li>✓ <strong>Mais sobre Eywa</strong> – o lado destrutivo da natureza.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Teste Final</h2>

        <p>
          Avatar 3 será o <strong>teste final</strong> para ver se a franquia consegue manter o 
          trono de maior bilheteria da história. Com duas sequências confirmadas após este 
          (Avatar 4 e 5), Cameron aposta que Pandora ainda tem muito a oferecer.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            O que você acha da ideia de Na'vi vilões?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="avatar-3-fogo-cinzas-lado-sombrio-pandora" />

      {/* Comments */}
      <CommentSection postId="avatar-3-fogo-cinzas-lado-sombrio-pandora" />
    </article>
  );
};

export default Avatar3FogoECinzas;
