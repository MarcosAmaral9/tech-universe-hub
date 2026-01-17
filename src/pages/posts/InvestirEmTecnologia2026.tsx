import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";

import techInvesting2026Img from "@/assets/tech-investing-2026.jpg";

const InvestirEmTecnologia2026 = () => {
  return (
    <article className="container max-w-4xl py-8">
      {/* Back button */}
      <Link to="/investimentos">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Investimentos
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <CategoryBadge category="invest" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Investir em Tecnologia em 2026: Como montar uma carteira focada no Futuro
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
            8 min de leitura
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={techInvesting2026Img}
          alt="Investir em tecnologia em 2026"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introdução */}
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Se você acompanha a evolução das Inteligências Artificiais e a revolução dos semicondutores, 
            já percebeu que o mundo mudou. Mas você sabia que é possível <strong>transformar esse 
            conhecimento em lucro</strong>?
          </p>
          
          <div className="bg-invest/10 rounded-xl p-6 my-6 border-l-4 border-invest">
            <p className="text-lg font-medium text-foreground m-0">
              💡 Investir em tecnologia não é mais apenas sobre comprar ações de empresas famosas; 
              é sobre entender quais <strong>infraestruturas sustentam o futuro</strong>.
            </p>
          </div>
        </section>

        {/* Setor 1: Semicondutores */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-invest"></span>
            1. O Boom dos Semicondutores (O "Novo Petróleo")
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-foreground mb-4">
              Toda IA, console de videogame ou servidor de nuvem precisa de chips potentes. 
              Empresas que fabricam semicondutores tornaram-se a <strong>base da economia global</strong>.
            </p>

            <div className="bg-invest/10 rounded-lg p-4">
              <h4 className="font-display font-bold text-invest mb-2">Por que investir:</h4>
              <p className="text-foreground m-0">
                A demanda por processamento gráfico (GPUs) para treinar modelos de IA continua 
                crescendo em níveis sem precedentes. Empresas como NVIDIA, AMD e TSMC estão 
                no centro dessa revolução.
              </p>
            </div>
          </div>
        </section>

        {/* Setor 2: Data Centers */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-ia"></span>
            2. Infraestrutura de IA e Data Centers
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-foreground mb-4">
              A Inteligência Artificial consome uma <strong>quantidade absurda de energia e espaço 
              de armazenamento</strong>. Investir em empresas que gerenciam Data Centers ou que 
              fornecem energia limpa para essas estruturas é uma das jogadas mais inteligentes para 2026.
            </p>

            <ul className="space-y-2 text-foreground">
              <li>🏢 Empresas de REITs de data centers</li>
              <li>⚡ Fornecedores de energia renovável para tech</li>
              <li>❄️ Sistemas de refrigeração para servidores</li>
            </ul>
          </div>
        </section>

        {/* Setor 3: Cibersegurança */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent"></span>
            3. Segurança da Informação e Cibersegurança
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-foreground mb-4">
              Quanto mais digital o mundo se torna, mais vulnerável ele fica. O setor de 
              cibersegurança é <strong>resiliente</strong>: as empresas nunca param de investir 
              em proteção, mesmo em tempos de crise.
            </p>

            <div className="bg-accent/10 rounded-lg p-4">
              <h4 className="font-display font-bold text-accent mb-2">💡 Dica:</h4>
              <p className="text-foreground m-0">
                Procure por <strong>ETFs</strong> (fundos de índice) que reúnem as maiores 
                empresas de segurança digital do mundo. Isso diversifica seu risco automaticamente!
              </p>
            </div>
          </div>
        </section>

        {/* Setor 4: Entretenimento */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-otaku"></span>
            4. O Mercado de Entretenimento e Streaming
          </h2>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <p className="text-foreground mb-4">
              Como fã de animes e tecnologia, você sabe o poder das plataformas de streaming! 
              Gigantes que dominam a distribuição de conteúdo e utilizam IA para recomendar o 
              que você assiste são <strong>ativos valiosos</strong>.
            </p>

            <p className="text-foreground">
              O mercado de <strong>IPs (Propriedades Intelectuais)</strong>, como estúdios de 
              animação e jogos, está em constante valorização. Pense em Sony, Nintendo e estúdios 
              de anime que estão expandindo globalmente.
            </p>
          </div>
        </section>

        {/* Dicas para Iniciantes */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
            📚 Dicas para o Investidor Iniciante
          </h2>
          
          <div className="grid gap-4">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                🎯 Diversificação é a regra
              </h3>
              <p className="text-foreground m-0">
                Nunca coloque todo o seu dinheiro em uma única empresa ou setor. 
                Distribua entre diferentes tipos de ativos tecnológicos.
              </p>
            </div>
            
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                ⏰ Pense a longo prazo
              </h3>
              <p className="text-foreground m-0">
                A tecnologia oscila muito no curto prazo, mas tende a crescer 
                exponencialmente em janelas de 5 a 10 anos.
              </p>
            </div>
            
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                🏦 Use Corretoras Confiáveis
              </h3>
              <p className="text-foreground m-0">
                Certifique-se de usar plataformas regulamentadas para evitar golpes 
                e garantir a segurança do seu patrimônio.
              </p>
            </div>
          </div>
        </section>

        {/* Aviso Legal */}
        <section className="mb-10">
          <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-destructive mb-2">
                  Aviso Legal
                </h3>
                <p className="text-foreground m-0">
                  Este artigo tem fins <strong>educativos e informativos</strong>. 
                  Investimentos envolvem riscos. Sempre consulte um especialista 
                  financeiro antes de tomar decisões com seu dinheiro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-8 bg-gradient-to-r from-invest/20 via-ia/20 to-accent/20 rounded-xl text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            💬 O que você achou?
          </h3>
          <p className="text-lg text-muted-foreground">
            Você já investe em tecnologia? Qual setor te interessa mais? 
            Comenta aqui embaixo suas dúvidas e experiências!
          </p>
        </section>
      </div>

      {/* Comments */}
      <CommentSection postId="investir-em-tecnologia-2026" />
    </article>
  );
};

export default InvestirEmTecnologia2026;