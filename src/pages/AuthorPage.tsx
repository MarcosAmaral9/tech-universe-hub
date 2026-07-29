import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, BookOpen, GraduationCap, Instagram, Mail, ShieldCheck } from "lucide-react";
import { blogPosts } from "@/data/posts";
import PostCard from "@/components/PostCard";

const BASE_URL = "https://viciocode.com";
const CANONICAL = `${BASE_URL}/autor/marcos-amaral`;

const EXPERTISE = [
  {
    icon: BookOpen,
    title: "Inteligência Artificial",
    text: "Testo modelos da OpenAI, Anthropic, Google e xAI no uso diário e comparo preços, limites e resultados reais — sempre conferindo a documentação oficial antes de publicar.",
    href: "/ia",
  },
  {
    icon: ShieldCheck,
    title: "Finanças e Investimentos",
    text: "Escrevo sobre Tesouro Direto, renda fixa, FIIs, B3, impostos e planejamento com base em fontes primárias (Banco Central, Receita Federal, CVM, B3). Conteúdo educativo — nunca recomendação.",
    href: "/financas",
  },
  {
    icon: Award,
    title: "Games e Cultura Geek",
    text: "Análises escritas depois de jogar, com dados de vendas, notas agregadas e requisitos verificados junto às publishers.",
    href: "/geek",
  },
  {
    icon: GraduationCap,
    title: "Anime, Mangá e Cultura Otaku",
    text: "Acompanho temporadas em simulcast, cronogramas de exibição e publicações de mangá diretamente nas fontes japonesas e nos serviços de streaming licenciados.",
    href: "/otaku",
  },
];

/**
 * /autor/marcos-amaral — página de autor dedicada (E-E-A-T).
 * Reúne biografia longa, áreas de expertise, princípios editoriais, contato,
 * links sociais e os artigos assinados, com JSON-LD `Person` + `sameAs`.
 */
const AuthorPage = () => {
  const posts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) =>
          new Date(b.date + "T12:00:00").getTime() - new Date(a.date + "T12:00:00").getTime()
      ),
    []
  );

  const latest = posts.slice(0, 12);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: CANONICAL,
    mainEntity: {
      "@type": "Person",
      name: "Marcos Vinícius Cavalcante Amaral",
      alternateName: "Marcos Amaral",
      url: CANONICAL,
      jobTitle: "Editor e autor",
      description:
        "Editor do VICIO<CODE>, formado em Sistemas de Informação. Escreve sobre inteligência artificial, investimentos, games e cultura otaku com apuração em fontes oficiais.",
      knowsAbout: [
        "Inteligência Artificial",
        "Investimentos",
        "Finanças pessoais",
        "Games",
        "Anime e mangá",
      ],
      worksFor: {
        "@type": "Organization",
        name: "VICIO<CODE>",
        url: BASE_URL,
      },
      sameAs: ["https://instagram.com/viciocode", "https://tiktok.com/@viciocode"],
    },
  };

  return (
    <>
      <Helmet>
        <title>Marcos Amaral — autor e editor do VICIO&lt;CODE&gt;</title>
        <meta
          name="description"
          content="Quem escreve no VICIO<CODE>: biografia, formação, áreas de expertise, princípios editoriais e todos os artigos assinados por Marcos Amaral."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Marcos Amaral — autor e editor do VICIO<CODE>" />
        <meta
          property="og:description"
          content="Biografia, formação, áreas de expertise e artigos assinados por Marcos Amaral no VICIO<CODE>."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="container py-8 max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start gap-5 mb-10">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-2xl shrink-0">
            MA
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">Marcos Amaral</h1>
            <p className="text-muted-foreground mt-1">
              Editor e autor do VICIO&lt;CODE&gt; · {posts.length} artigos publicados
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://instagram.com/viciocode"
                target="_blank"
                rel="me noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Instagram className="h-4 w-4" /> @viciocode
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" /> Falar com o autor
              </Link>
            </div>
          </div>
        </header>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2>Quem sou</h2>
          <p>
            Sou <strong>Marcos Vinícius Cavalcante Amaral</strong>, formado em Sistemas de Informação
            e responsável pela linha editorial do VICIO&lt;CODE&gt;. Comecei o site para resolver um
            incômodo simples: quase tudo que se lê em português sobre inteligência artificial,
            investimentos e games é ou raso demais, ou uma tradução automática de material gringo que
            ignora a realidade brasileira — o câmbio, a Selic, o imposto, o preço regional do jogo.
          </p>
          <p>
            Todo artigo publicado aqui é escrito por mim, revisado por mim e assinado com data de
            apuração. Quando um texto é atualizado, a data de atualização aparece no topo. Quando eu
            testo uma ferramenta, digo em qual plano e por quanto tempo. Quando não testei, digo que
            não testei.
          </p>

          <h2>Princípios editoriais</h2>
          <ul>
            <li>
              <strong>Fonte primária sempre.</strong> Preço, imposto, data de lançamento e limite de
              uso vêm de documentação oficial, órgão regulador ou comunicado da empresa — nunca de
              outro blog.
            </li>
            <li>
              <strong>Nada de recomendação de investimento.</strong> Conteúdo financeiro aqui é
              educativo. Não indico ativo, corretora ou operação.
            </li>
            <li>
              <strong>Zero spoiler.</strong> Análises de jogos, filmes, séries e animes não revelam
              reviravoltas nem finais.
            </li>
            <li>
              <strong>Publicidade separada do editorial.</strong> Anunciante não influencia pauta nem
              nota. Detalhes na{" "}
              <Link to="/publicidade">Política de Publicidade</Link>.
            </li>
            <li>
              <strong>Erro se corrige à vista.</strong> Encontrou uma informação errada?{" "}
              <Link to="/contato">Me avise</Link> e a correção entra com registro de data.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-4">Áreas de expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EXPERTISE.map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                to={href}
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-bold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h2 className="font-display text-2xl font-bold">Últimos artigos assinados</h2>
            <Link to="/arquivo" className="text-sm text-primary hover:underline">
              Ver todos os {posts.length} artigos
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AuthorPage;
