import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Camera, Cpu, Monitor, Sparkles } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarPandoraImg from "@/assets/avatar-pandora.jpg";

const Avatar2009Tecnologia = () => {
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
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar (2009): O Filme que Revolucionou a Tecnologia no Cinema
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            16 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            6 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          src={avatarPandoraImg}
          alt="Avatar Pandora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 2009, <strong>James Cameron</strong> não lançou apenas um filme – ele redefiniu o que era 
          possível no cinema. <strong>Avatar</strong> foi o resultado de mais de uma década de espera 
          por uma tecnologia que pudesse dar vida à sua visão de Pandora.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏆 Recordes de Bilheteria
          </h3>
          <p className="text-muted-foreground mb-0">
            Avatar se tornou o filme de maior bilheteria da história, arrecadando mais de 
            <strong> US$ 2,9 bilhões</strong> mundialmente. O título foi recuperado após 
            relançamentos e só foi brevemente superado por Vingadores: Ultimato.
          </p>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Camera className="h-7 w-7 text-blue-400" />
          A Câmera Virtual
        </h2>

        <p>
          O grande diferencial técnico foi o conceito de <strong>"Câmera Virtual"</strong>, que 
          permitiu ao diretor ver os atores como Na'vi em tempo real enquanto filmava. Cameron 
          podia literalmente "andar" pelo cenário digital de Pandora durante as gravações.
        </p>

        <blockquote className="border-l-4 border-blue-400 pl-6 my-8 italic text-muted-foreground">
          "Eu esperei 15 anos para fazer este filme porque a tecnologia não existia. 
          Nós tivemos que inventá-la."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-blue-400" />
          O Poder de Processamento
        </h2>

        <p>
          A Weta Digital, responsável pelos efeitos visuais, utilizou um dos maiores 
          <strong> data centers</strong> já construídos para um filme. O processamento de cada 
          frame da floresta bioluminescente exigia uma quantidade absurda de poder computacional.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Monitor className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Renderização</h4>
            <p className="text-sm text-muted-foreground">
              Cada frame podia levar até <strong>47 horas</strong> para ser renderizado. 
              O filme tem aproximadamente 166.000 frames.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sparkles className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Detalhes</h4>
            <p className="text-sm text-muted-foreground">
              Mais de <strong>1 petabyte</strong> de dados foram gerados durante a produção, 
              incluindo texturas, animações e simulações.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Captura de Performance</h2>

        <p>
          Avatar não usou apenas captura de movimento – usou <strong>captura de performance</strong>. 
          A diferença? Cada expressão facial, cada movimento sutil dos olhos e cada emoção dos atores 
          era capturada e transferida para os personagens digitais.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold">Tecnologia</th>
                <th className="text-left py-3 px-4 font-bold">Inovação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Câmera Virtual</td>
                <td className="py-3 px-4 text-muted-foreground">Visualização em tempo real do cenário digital</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Head-Mounted Camera</td>
                <td className="py-3 px-4 text-muted-foreground">Captura facial ultra-detalhada</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Fusion 3D</td>
                <td className="py-3 px-4 text-muted-foreground">Sistema de câmeras 3D desenvolvido por Cameron</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Simulight</td>
                <td className="py-3 px-4 text-muted-foreground">Iluminação virtual em tempo real</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">O Legado Técnico</h2>

        <p>
          Muitas das tecnologias desenvolvidas para Avatar se tornaram padrão na indústria. Filmes como 
          <strong> Planeta dos Macacos</strong>, <strong>O Hobbit</strong> e praticamente toda produção 
          moderna de CGI se beneficia das inovações pioneiras de Cameron.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão</h2>

        <p>
          Avatar não é apenas uma história sobre natureza versus tecnologia – é o <strong>marco zero 
          do cinema digital moderno</strong>. Cameron provou que paciência e visão podem literalmente 
          mudar uma indústria inteira.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você assistiu Avatar no cinema em 2009?
          </h3>
          <p className="text-muted-foreground">
            Conta pra gente sua experiência nos comentários! 👇
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug="avatar-2009-filme-revolucionou-tecnologia" />

      {/* Comments */}
      <CommentSection postId="avatar-2009-filme-revolucionou-tecnologia" />
    </article>
  );
};

export default Avatar2009Tecnologia;
