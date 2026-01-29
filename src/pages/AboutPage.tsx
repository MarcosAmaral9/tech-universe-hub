import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Code } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Sobre o <span className="text-gradient">VICIO&lt;CODE&gt;</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Conheça a história por trás deste projeto e sua missão
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">Compartilhar Conhecimento</h2>
            </div>
            <p className="text-muted-foreground">
              O VICIO&lt;CODE&gt; nasceu com o propósito de agregar conhecimento aos leitores. 
              Aqui você encontra conteúdos sobre Inteligência Artificial, Investimentos, 
              Cultura Geek e Mundo Otaku, sempre com uma abordagem acessível e informativa.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">Opinião Pessoal</h2>
            </div>
            <p className="text-muted-foreground">
              Este site é um espaço onde compartilho minha própria opinião sobre diversos assuntos. 
              Cada artigo reflete minha perspectiva pessoal, baseada em pesquisas, experiências 
              e paixão pelos temas abordados.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">Renda Extra</h2>
            </div>
            <p className="text-muted-foreground">
              Além de informar, o VICIO&lt;CODE&gt; também serve como uma forma de gerar 
              uma renda extra através de anúncios e parcerias. Isso me permite continuar 
              produzindo conteúdo de qualidade para você.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">Desenvolvimento Profissional</h2>
            </div>
            <p className="text-muted-foreground">
              Este projeto também é uma forma de me treinar e aprimorar minhas habilidades 
              em criação de sites. Meu objetivo é usar essa experiência para criar sites 
              profissionais para terceiros, gerando uma fonte de renda sustentável.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* About Text */}
      <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-center mb-6">
          Por que <span className="text-gradient">VICIO&lt;CODE&gt;</span>?
        </h2>
        <p className="text-muted-foreground text-center">
          O nome representa a fusão entre paixão ("vício") por tecnologia, games, animes 
          e cultura pop com o mundo da programação ("code"). É um projeto pessoal que 
          une minhas maiores paixões: criar conteúdo, aprender sobre novas tecnologias 
          e compartilhar conhecimento com pessoas que têm os mesmos interesses.
        </p>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Obrigado por visitar o VICIO&lt;CODE&gt;! Espero que encontre conteúdos úteis e interessantes.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
