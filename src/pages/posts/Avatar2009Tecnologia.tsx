import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Camera, Cpu, Monitor, Sparkles, Film, Award, Target } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import avatarPandoraImg from "@/assets/avatar-pandora.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const Avatar2009Tecnologia = () => {

  useEffect(() => {
    trackArticleRead("avatar-2009-filme-revolucionou-tecnologia", "Avatar (2009): O Filme que Revolucionou o Cinema 3D e a Tecnologia CGI", "geek");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/avatar" portalLabel="Painel Avatar" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 2009: O Filme que Revolucionou o Cinema 3D e a Tecnologia de CGI
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            29 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async"
          src={avatarPandoraImg}
          alt="Avatar 2009 Pandora - Revolução tecnológica no cinema"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 2009, <strong>James Cameron</strong> não lançou apenas um filme – ele <strong>redefiniu 
          os limites da tecnologia cinematográfica</strong>. Avatar foi o resultado de mais de uma 
          década de desenvolvimento tecnológico, criando ferramentas que hoje são padrão na indústria 
          de efeitos visuais e <strong>cinema 3D</strong>.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-blue-500/10 to-background rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-400" />
            Informações Rápidas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Diretor:</strong> James Cameron</div>
            <div><strong>Bilheteria:</strong> US$ 2,9 bilhões</div>
            <div><strong>Tecnologia:</strong> Cinema 3D, CGI avançado</div>
            <div><strong>Impacto:</strong> Revolucionou efeitos visuais</div>
            <div><strong>Onde assistir:</strong> Disney+, Blu-ray 4K</div>
            <div><strong>Duração:</strong> 162 minutos</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Award className="h-7 w-7 text-blue-400" />
          Por Que Avatar 2009 Foi Revolucionário?
        </h2>

        <p>
          Avatar não foi apenas um sucesso de bilheteria – ele <strong>criou um novo paradigma</strong> 
          para produções cinematográficas. O filme demonstrou que investir em tecnologia de ponta 
          poderia resultar em retorno financeiro massivo, incentivando estúdios a desenvolverem 
          projetos mais ambiciosos tecnicamente.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-yellow-500/10 to-background rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏆 Recordes de Bilheteria
          </h3>
          <p className="text-muted-foreground mb-0">
            Avatar se tornou o <strong>filme de maior bilheteria da história</strong>, arrecadando 
            mais de <strong>US$ 2,9 bilhões</strong> mundialmente. O filme conquistou 3 Oscars 
            técnicos e provou que o investimento em inovação compensa.
          </p>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Camera className="h-7 w-7 text-blue-400" />
          A Câmera Virtual: Inovação Que Mudou a Indústria
        </h2>

        <p>
          O grande diferencial técnico foi o conceito de <strong>"Câmera Virtual"</strong>, desenvolvida 
          especificamente para Avatar. Essa tecnologia permitiu ao diretor visualizar os atores como 
          personagens Na'vi em tempo real enquanto filmava, revolucionando a forma como diretores 
          trabalham com <strong>CGI e motion capture</strong>.
        </p>

        <blockquote className="border-l-4 border-blue-400 pl-6 my-8 italic text-muted-foreground">
          "Eu esperei 15 anos para fazer este filme porque a tecnologia não existia. 
          Nós tivemos que inventá-la."
          <footer className="mt-2 not-italic font-semibold">— James Cameron</footer>
        </blockquote>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-blue-400" />
          Poder Computacional: Data Centers para Renderização
        </h2>

        <p>
          A Weta Digital, responsável pelos efeitos visuais, construiu um dos maiores 
          <strong> data centers</strong> já utilizados para produção cinematográfica. O processamento 
          de cada frame da floresta bioluminescente exigia poder computacional equivalente a 
          supercomputadores de centros de pesquisa.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Monitor className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Renderização Extrema</h4>
            <p className="text-sm text-muted-foreground">
              Cada frame podia levar até <strong>47 horas</strong> para ser renderizado. 
              O filme possui aproximadamente 166.000 frames de CGI.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Sparkles className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-bold mb-2">Volume de Dados</h4>
            <p className="text-sm text-muted-foreground">
              Mais de <strong>1 petabyte</strong> de dados foram gerados durante a produção, 
              incluindo texturas, animações e simulações de ambiente.
            </p>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-blue-400" />
          Captura de Performance vs Motion Capture Tradicional
        </h2>

        <p>
          Avatar não usou apenas captura de movimento convencional – utilizou <strong>captura de 
          performance</strong>. A diferença fundamental está na precisão: cada expressão facial, 
          movimento sutil dos olhos e emoção dos atores era capturada e transferida para os 
          personagens digitais com fidelidade inédita.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Tecnologia</th>
                <th className="text-left py-3 px-4 font-bold">Inovação</th>
                <th className="text-left py-3 px-4 font-bold">Impacto na Indústria</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Câmera Virtual</td>
                <td className="py-3 px-4 text-muted-foreground">Visualização em tempo real do cenário digital</td>
                <td className="py-3 px-4 text-muted-foreground">Padrão em produções CGI modernas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Head-Mounted Camera</td>
                <td className="py-3 px-4 text-muted-foreground">Captura facial ultra-detalhada</td>
                <td className="py-3 px-4 text-muted-foreground">Usado em Planeta dos Macacos, Marvel</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Fusion 3D Camera</td>
                <td className="py-3 px-4 text-muted-foreground">Sistema de câmeras 3D proprietário</td>
                <td className="py-3 px-4 text-muted-foreground">Popularizou o cinema 3D moderno</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Simulight</td>
                <td className="py-3 px-4 text-muted-foreground">Iluminação virtual em tempo real</td>
                <td className="py-3 px-4 text-muted-foreground">Referência para iluminação de CGI</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Legado Técnico: O Antes e Depois de Avatar</h2>

        <p>
          As tecnologias desenvolvidas para Avatar se tornaram padrão na indústria de efeitos visuais. 
          Produções como <strong>Planeta dos Macacos</strong>, <strong>O Hobbit</strong>, filmes da 
          <strong> Marvel</strong> e praticamente toda produção moderna de CGI se beneficia diretamente 
          das inovações pioneiras de James Cameron.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Filmes Que Usaram Tecnologia de Avatar</h3>
          <ul className="space-y-2 text-muted-foreground mb-0">
            <li>✓ <strong>Planeta dos Macacos:</strong> Captura de performance para primatas digitais</li>
            <li>✓ <strong>O Hobbit:</strong> Câmera virtual para cenários digitais</li>
            <li>✓ <strong>Vingadores:</strong> Motion capture avançado para Thanos e Hulk</li>
            <li>✓ <strong>The Mandalorian:</strong> Evolução do conceito de cenários virtuais</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Avatar Vale a Pena Assistir em 2026?</h2>

        <p>
          <strong>Absolutamente sim.</strong> Mesmo 17 anos após o lançamento, Avatar continua sendo 
          uma experiência visual impressionante. A versão remasterizada em 4K HDR disponível no 
          Disney+ oferece qualidade de imagem superior à exibição original nos cinemas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Pontos Positivos</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Efeitos visuais que ainda impressionam</li>
              <li>• Worldbuilding detalhado de Pandora</li>
              <li>• Disponível em 4K HDR</li>
              <li>• Essencial para entender as sequências</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Considerações</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• História segue estrutura clássica</li>
              <li>• Duração longa (2h42min)</li>
              <li>• Melhor experiência em tela grande</li>
              <li>• 3D requer equipamento compatível</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Conclusão: Marco Zero do Cinema Digital</h2>

        <p>
          Avatar 2009 não é apenas um filme sobre natureza versus tecnologia – é o <strong>marco zero 
          do cinema digital moderno</strong>. Cameron provou que visão artística combinada com 
          investimento em tecnologia pode transformar uma indústria inteira.
        </p>

        <p>
          Para quem está interessado em <strong>tecnologia de cinema</strong>, <strong>efeitos 
          visuais</strong> ou simplesmente quer entender como produções modernas como as 
          sequências de Avatar funcionam, assistir ao original é essencial.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Você assistiu Avatar no cinema em 2009?
          </h3>
          <p className="text-muted-foreground">
            Como foi a experiência de ver essa revolução tecnológica na tela grande? 
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="avatar-2009-filme-revolucionou-tecnologia" />
      <CommentSection postId="avatar-2009-filme-revolucionou-tecnologia" postTitle="Avatar (2009): O Filme que Revolucionou o Cinema 3D e a Tecnologia CGI" />
    </article>
  );
};

export default Avatar2009Tecnologia;
