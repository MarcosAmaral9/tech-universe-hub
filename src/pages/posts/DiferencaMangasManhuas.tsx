import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, BookOpen, Target, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import mangaManhwaManhuaImg from "@/assets/manga-manhwa-manhua.webp";

const DiferencaMangasManhuas = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link
        to="/otaku"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Otaku
      </Link>

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Manga vs Manhwa vs Manhua: Guia Completo das Diferenças e Melhores Obras de Cada Tipo
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            02 de Fevereiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            8 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          src={mangaManhwaManhuaImg}
          alt="Diferença entre Manga Manhwa e Manhua - Guia completo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Se você é fã de histórias em quadrinhos asiáticas, provavelmente já se deparou com os termos 
          <strong> Manga</strong>, <strong>Manhua</strong> e <strong>Manhwa</strong>. Apesar de todos 
          serem quadrinhos, cada formato possui características únicas que refletem a cultura e 
          tradições de seu país de origem.
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-otaku/10 to-background rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-otaku" />
            Resumo Rápido
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-primary">Manga 🇯🇵</strong>
              <p className="text-muted-foreground mb-0">Japão • Preto e branco • Direita → Esquerda</p>
            </div>
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-accent">Manhwa 🇰🇷</strong>
              <p className="text-muted-foreground mb-0">Coreia • Colorido • Esquerda → Direita</p>
            </div>
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-ia">Manhua 🇨🇳</strong>
              <p className="text-muted-foreground mb-0">China • Colorido • Esquerda → Direita</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-primary" />
          Manga: A Origem Japonesa
        </h2>

        <p>
          <strong>Manga</strong> é o termo japonês para histórias em quadrinhos. São caracterizados pelo 
          estilo de arte distintivo, leitura da direita para esquerda, e tradicionalmente publicados 
          em preto e branco. A indústria de manga é a mais estabelecida e influente do mundo.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-primary/30">
          <h3 className="text-xl font-bold text-primary mb-4">Exemplo: One Piece</h3>
          <p className="text-muted-foreground mb-4">
            Monkey D. Luffy sonha em se tornar o Rei dos Piratas. Com sua tripulação, os Chapéus 
            de Palha, ele embarca em uma jornada épica pelo Grand Line em busca do lendário 
            tesouro One Piece.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Por que ler:</span>
              <span className="font-medium">Worldbuilding épico, humor, emoção</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status:</span>
              <span className="font-medium text-invest">Em lançamento (fase final)</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Capítulos:</span>
              <span className="font-medium">+1100 capítulos</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Onde ler:</span>
              <span className="font-medium">MangaPlus, Shonen Jump</span>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-accent" />
          Manhwa: O Estilo Coreano
        </h2>

        <p>
          <strong>Manhwa</strong> são quadrinhos sul-coreanos. Diferente dos mangás, são lidos da 
          esquerda para direita e geralmente são publicados coloridos em formato digital (webtoon). 
          A Coreia do Sul revolucionou a indústria com o formato de rolagem vertical.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-accent/30">
          <h3 className="text-xl font-bold text-accent mb-4">Exemplo: Solo Leveling</h3>
          <p className="text-muted-foreground mb-4">
            Sung Jin-Woo é conhecido como o caçador mais fraco da humanidade. Após quase morrer 
            em uma dungeon, ele recebe um sistema misterioso que lhe permite subir de nível 
            indefinidamente, transformando-o no caçador mais poderoso do mundo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Por que ler:</span>
              <span className="font-medium">Arte incrível, ação intensa</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status:</span>
              <span className="font-medium text-primary">Finalizado</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Capítulos:</span>
              <span className="font-medium">179 capítulos</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Onde ler:</span>
              <span className="font-medium">Webtoon, Tapas</span>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          Manhua: A Tradição Chinesa
        </h2>

        <p>
          <strong>Manhua</strong> são quadrinhos chineses. Combinam elementos de arte tradicional 
          chinesa com estilos modernos. Frequentemente apresentam temas de cultivo marcial (Xianxia) 
          e fantasia, refletindo a rica mitologia e filosofia chinesa.
        </p>

        <div className="my-8 p-6 bg-card rounded-xl border border-ia/30">
          <h3 className="text-xl font-bold text-ia mb-4">Exemplo: Tales of Demons and Gods</h3>
          <p className="text-muted-foreground mb-4">
            Nie Li, o mais forte Espiritualista Demoníaco, volta no tempo para sua juventude 
            após morrer em batalha. Com todo o conhecimento do futuro, ele planeja proteger 
            sua cidade e salvar seus entes queridos de um destino trágico.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Por que ler:</span>
              <span className="font-medium">Protagonista inteligente, sistema único</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status:</span>
              <span className="font-medium text-invest">Em lançamento</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Capítulos:</span>
              <span className="font-medium">+450 capítulos</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Onde ler:</span>
              <span className="font-medium">Webnovel, Tapas</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Comparação Detalhada</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Característica</th>
                <th className="text-left py-3 px-4 font-bold">Manga 🇯🇵</th>
                <th className="text-left py-3 px-4 font-bold">Manhwa 🇰🇷</th>
                <th className="text-left py-3 px-4 font-bold">Manhua 🇨🇳</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Direção de Leitura</td>
                <td className="py-3 px-4 text-muted-foreground">Direita → Esquerda</td>
                <td className="py-3 px-4 text-muted-foreground">Esquerda → Direita</td>
                <td className="py-3 px-4 text-muted-foreground">Esquerda → Direita</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Cores</td>
                <td className="py-3 px-4 text-muted-foreground">Geralmente P&B</td>
                <td className="py-3 px-4 text-muted-foreground">Full color</td>
                <td className="py-3 px-4 text-muted-foreground">Full color</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Formato Comum</td>
                <td className="py-3 px-4 text-muted-foreground">Páginas (revista)</td>
                <td className="py-3 px-4 text-muted-foreground">Vertical (webtoon)</td>
                <td className="py-3 px-4 text-muted-foreground">Vertical (webtoon)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Temas Populares</td>
                <td className="py-3 px-4 text-muted-foreground">Shonen, Isekai, Slice of Life</td>
                <td className="py-3 px-4 text-muted-foreground">Sistema, Reencarnação, Romance</td>
                <td className="py-3 px-4 text-muted-foreground">Cultivo Marcial, Xianxia</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Plataformas</td>
                <td className="py-3 px-4 text-muted-foreground">MangaPlus, Shonen Jump</td>
                <td className="py-3 px-4 text-muted-foreground">Webtoon, Tapas</td>
                <td className="py-3 px-4 text-muted-foreground">Bilibili, Webnovel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Qual Escolher Para Começar?</h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-primary/30">
            <h4 className="font-bold mb-2 text-primary">Para Histórias Clássicas</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Comece com <strong>Manga</strong>. Décadas de obras-primas como One Piece, 
              Naruto, Dragon Ball e Death Note.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-accent/30">
            <h4 className="font-bold mb-2 text-accent">Para Arte Colorida</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Experimente <strong>Manhwa</strong>. Solo Leveling, Tower of God e Omniscient 
              Reader's Viewpoint são excelentes.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-ia/30">
            <h4 className="font-bold mb-2 text-ia">Para Fantasia Épica</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Explore <strong>Manhua</strong>. Tales of Demons and Gods e Martial Peak 
              oferecem milhares de capítulos.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual formato é o seu favorito?
          </h3>
          <p className="text-muted-foreground">
            Você prefere os Mangas japoneses, os Manhwas coreanos ou os Manhuas chineses? 
            Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <RelatedPosts currentSlug="diferenca-mangas-manhuas-manhwas" />
      <CommentSection postId="diferenca-mangas-manhuas-manhwas" />
    </article>
  );
};

export default DiferencaMangasManhuas;
