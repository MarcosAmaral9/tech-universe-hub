import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";

import aiAnimeDubbingImg from "@/assets/ai-anime-dubbing.jpg";

const IATransformandoDublagem = () => {
  return (
    <article className="container max-w-4xl py-8">
      {/* Back button */}
      <Link to="/ia">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para IA
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Como as IAs estão transformando a dublagem de animes: O fim das barreiras de idioma?
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            18 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            7 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={aiAnimeDubbingImg}
          alt="IA transformando dublagem de animes"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introdução */}
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Por décadas, os fãs de anime enfrentaram uma realidade frustrante: a tradução e dublagem 
            de suas obras favoritas sempre foi um processo <strong>lento e custoso</strong>. Muitas vezes, 
            séries demoravam meses ou até anos para chegar ao Brasil com dublagem de qualidade.
          </p>
          
          <div className="bg-ia/10 rounded-xl p-6 my-6 border-l-4 border-ia">
            <p className="text-lg font-medium text-foreground m-0">
              🎤 Mas e se eu te dissesse que a <strong>Inteligência Artificial</strong> está prestes 
              a mudar isso completamente? IAs que traduzem e dublam mantendo a emoção da voz original 
              já são uma realidade!
            </p>
          </div>
        </section>

        {/* Tópico 1: A Tecnologia */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-ia"></span>
            A Tecnologia por Trás: Voice Cloning e Tradução em Tempo Real
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl font-bold text-ia mb-3">O que é Voice Cloning (Clonagem de Voz)?</h3>
            
            <p className="text-foreground mb-4">
              <strong>Voice Cloning</strong> é uma tecnologia de IA que consegue capturar as características 
              únicas de uma voz humana — tom, ritmo, entonação, sotaque — e replicá-las em qualquer idioma. 
              Imagine ouvir a voz do dublador japonês original "falando" português com a mesma emoção!
            </p>

            <h3 className="font-display text-xl font-bold text-ia mb-3 mt-6">Tradução em Tempo Real</h3>
            
            <p className="text-foreground mb-4">
              Combinada com sistemas de tradução neural, a IA consegue processar o áudio original, 
              traduzir o texto e sintetizar a nova fala quase instantaneamente. Empresas já estão 
              testando isso para <strong>lançamentos simultâneos globais</strong> de animes!
            </p>
          </div>
        </section>

        {/* Tópico 2: Benefícios */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-invest"></span>
            Os Benefícios para os Fãs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-invest/10 rounded-xl p-6 border border-invest/30">
              <h3 className="font-display text-lg font-bold text-invest mb-3">⚡ Rapidez nos Lançamentos</h3>
              <p className="text-foreground">
                Séries que antes levavam meses para serem dubladas poderão ser lançadas em 
                questão de dias ou até horas após o lançamento original no Japão.
              </p>
            </div>
            
            <div className="bg-invest/10 rounded-xl p-6 border border-invest/30">
              <h3 className="font-display text-lg font-bold text-invest mb-3">🎭 Mesma Entonação Original</h3>
              <p className="text-foreground">
                A IA preserva a performance emocional do dublador original. Você vai sentir 
                a mesma intensidade das cenas, só que no seu idioma!
              </p>
            </div>
          </div>
        </section>

        {/* Tópico 3: Lado Ético */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-destructive"></span>
            O Lado Ético e Profissional
          </h2>
          
          <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/30">
            <p className="text-foreground mb-4">
              Mas nem tudo são flores. Essa tecnologia levanta questões importantes:
            </p>

            <ul className="space-y-3 text-foreground">
              <li>
                <strong>🎤 Impacto nos Dubladores:</strong> Como fica o trabalho dos dubladores 
                profissionais? A indústria precisa encontrar um equilíbrio entre eficiência e 
                preservação de empregos.
              </li>
              <li>
                <strong>🔒 Proteção de Dados:</strong> A clonagem de voz exige amostras de áudio 
                reais. Quem controla esses dados? Como garantir que as vozes não sejam usadas 
                sem autorização?
              </li>
              <li>
                <strong>📜 Regulamentação:</strong> Ainda não existem leis claras sobre o uso 
                de vozes clonadas comercialmente. Isso precisa mudar antes da tecnologia se 
                tornar mainstream.
              </li>
            </ul>
          </div>
        </section>

        {/* Tópico 4: Ferramentas */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            Ferramentas Atuais de Voice Cloning
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-bold text-accent mb-3">ElevenLabs</h3>
              <p className="text-foreground mb-3">
                Uma das líderes em síntese de voz com IA. Oferece clonagem de voz com alta 
                fidelidade e suporte a múltiplos idiomas, incluindo português.
              </p>
              <span className="text-muted-foreground text-sm">Usado por criadores de conteúdo e estúdios</span>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-bold text-accent mb-3">Rask AI</h3>
              <p className="text-foreground mb-3">
                Focada em tradução e dublagem de vídeos. Consegue transcrever, traduzir e 
                dublar vídeos mantendo sincronização labial.
              </p>
              <span className="text-muted-foreground text-sm">Ideal para vídeos e conteúdo multimídia</span>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="mt-12 p-8 bg-gradient-to-r from-ia/20 via-accent/20 to-primary/20 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            🤔 Qual será o futuro?
          </h3>
          <p className="text-lg text-foreground mb-4">
            O futuro será <strong>híbrido</strong> (IA ajudando humanos) ou 
            <strong> puramente tecnológico</strong>?
          </p>
          <p className="text-muted-foreground">
            O que você acha? Seria bom ter dublagens instantâneas ou você prefere 
            o trabalho artesanal dos dubladores? Comenta aqui embaixo!
          </p>
        </section>
      </div>

      {/* Comments */}
      <CommentSection postId="ia-transformando-dublagem-animes" />
    </article>
  );
};

export default IATransformandoDublagem;