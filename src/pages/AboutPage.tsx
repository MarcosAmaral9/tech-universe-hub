import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Code, GraduationCap, Calendar, MapPin, Mail } from "lucide-react";
import DynamicSEO from "@/components/DynamicSEO";

const AboutPage = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcos Vinícius Cavalcante Amaral",
    alternateName: "Marcos Amaral",
    birthDate: "2000-09-14",
    nationality: "Brazilian",
    jobTitle: "Analista de Sistemas e Criador de Conteúdo",
    description:
      "Formado em Sistemas de Informação, entusiasta da tecnologia e de como ela afeta a vida humana. Criador do portal VICIO<CODE>.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bacharelado em Sistemas de Informação",
    },
    knowsAbout: [
      "Inteligência Artificial",
      "Investimentos",
      "Finanças Pessoais",
      "Cultura Geek",
      "Mundo Otaku",
      "Desenvolvimento Web",
    ],
    url: "https://viciocode.com/sobre",
    sameAs: [
      "https://instagram.com/viciocode",
      "https://tiktok.com/@viciocode",
    ],
    worksFor: {
      "@type": "Organization",
      name: "VICIO<CODE>",
      url: "https://viciocode.com",
    },
  };

  return (
    <>
      <DynamicSEO />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-display font-bold text-3xl text-background">
            MA
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Marcos Amaral</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Criador do VICIO&lt;CODE&gt;, entusiasta da tecnologia e das pessoas por trás dela.
          </p>
        </div>

        {/* Bio principal */}
        <Card className="border-primary/30 max-w-3xl mx-auto mb-12">
          <CardContent className="p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Quem sou eu</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Me chamo <strong className="text-foreground">Marcos Vinícius Cavalcante Amaral</strong>,
                nasci em <strong className="text-foreground">14 de setembro de 2000</strong> e sou formado em{" "}
                <strong className="text-foreground">Sistemas de Informação</strong>.
              </p>
              <p>
                Sou um entusiasta da tecnologia — não pelo gadget em si, mas por como ela transforma a vida humana.
                Da forma como aprendemos com a IA, passando por como decidimos onde investir, até como nos divertimos
                com games e animes: cada decisão tecnológica molda um pouco do nosso cotidiano. É sobre essa
                interseção que escrevo no <strong className="text-foreground">VICIO&lt;CODE&gt;</strong>.
              </p>
              <p>
                O site é, ao mesmo tempo, um <strong className="text-foreground">portfólio profissional</strong> —
                que demonstra minhas habilidades em desenvolvimento web, SEO e produção de conteúdo — e uma{" "}
                <strong className="text-foreground">fonte de renda extra</strong> através de anúncios e parcerias.
                Tudo aqui é construído por mim, do código ao texto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Nascido em 14/09/2000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Sistemas de Informação</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Brasil</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Compartilhar Conhecimento</h2>
              </div>
              <p className="text-muted-foreground">
                Conteúdos sobre Inteligência Artificial, Finanças, Cultura Geek e Mundo Otaku, sempre
                com abordagem acessível, factual e com fontes verificáveis listadas em cada artigo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Opinião Pessoal Original</h2>
              </div>
              <p className="text-muted-foreground">
                Cada artigo traz uma "Análise do Marcos" — minha leitura editorial sobre o tema, com
                comparações para o mercado brasileiro e perspectiva pessoal sobre as escolhas tecnológicas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Renda Extra com Transparência</h2>
              </div>
              <p className="text-muted-foreground">
                O VICIO&lt;CODE&gt; gera renda extra através de anúncios (Google AdSense) e parcerias
                divulgadas. Isso permite manter o conteúdo gratuito e em produção contínua para você.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Portfólio Profissional</h2>
              </div>
              <p className="text-muted-foreground">
                O site é também minha vitrine de habilidades em React, TypeScript, SEO técnico,
                arquitetura PWA e Core Web Vitals. Disponível para freelas e projetos sob demanda.
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
            O nome representa a fusão entre paixão ("vício") por tecnologia, games, animes e cultura pop com o mundo
            da programação ("code"). É um projeto pessoal que une minhas maiores paixões: criar conteúdo, aprender
            sobre novas tecnologias e compartilhar conhecimento com pessoas que têm os mesmos interesses.
          </p>

          <div className="not-prose mt-10 grid sm:grid-cols-2 gap-4">
            <Link
              to="/contato"
              className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 hover:bg-primary/5 transition"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Fale comigo</p>
                <p className="text-xs text-muted-foreground">contato, parcerias, freelas</p>
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 hover:bg-primary/5 transition"
            >
              <Code className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Ler os artigos</p>
                <p className="text-xs text-muted-foreground">IA, finanças, geek, otaku</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
