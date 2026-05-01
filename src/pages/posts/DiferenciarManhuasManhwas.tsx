import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, Calendar, User, BookOpen, Target, Sword, Sparkles } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const DiferenciarManhuasManhwas = () => {

  useEffect(() => {
    trackArticleRead("como-diferenciar-manhuas-manhwas", "Saiba como diferenciar Manhuas e Manhwas", "otaku");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <CategoryBadge category="otaku" size="lg" />
        
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Manhwa vs Manhua: Como Diferenciar Quadrinhos Coreanos e Chineses + Recomendações
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            30 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            7 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high"
          loading="eager"
          decoding="async"
          src={manhwaVsManuaImg}
          alt="Manhwa vs Manhua - Diferenças entre quadrinhos coreanos e chineses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Muitos leitores confundem <strong>Manhwa</strong> (quadrinhos coreanos) com 
          <strong> Manhua</strong> (quadrinhos chineses). Apesar dos nomes parecidos, são obras 
          de países diferentes com características, temas e estilos artísticos bem distintos!
        </p>

        {/* Quick Info Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-otaku/10 to-background rounded-xl border border-otaku/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-otaku" />
            Diferenças Fundamentais
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-primary">Manhwa 🇰🇷 (Coreia do Sul)</strong>
              <p className="text-muted-foreground mb-0">Sistema, Reencarnação, Tower, Gates</p>
            </div>
            <div className="p-3 bg-card rounded-lg">
              <strong className="text-accent">Manhua 🇨🇳 (China)</strong>
              <p className="text-muted-foreground mb-0">Cultivo Marcial, Xianxia, Wuxia</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Principais Diferenças Entre Manhwa e Manhua
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-primary/10 rounded-xl border border-primary/30">
            <h3 className="text-xl font-bold text-primary mb-4">Manhwa 🇰🇷 (Coreia)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📖 Leitura da esquerda para direita</li>
              <li>🎨 Arte extremamente detalhada e colorida</li>
              <li>🎮 Foco em sistemas de jogo e reencarnação</li>
              <li>📱 Pioneiro do formato webtoon vertical</li>
              <li>🌟 Influência forte da cultura pop coreana (K-pop, dramas)</li>
              <li>⚔️ Temas: Hunters, Torres, Gates, Dungeons</li>
            </ul>
          </div>
          
          <div className="p-6 bg-accent/10 rounded-xl border border-accent/30">
            <h3 className="text-xl font-bold text-accent mb-4">Manhua 🇨🇳 (China)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📖 Leitura da esquerda para direita</li>
              <li>🎨 Cores vibrantes com arte digital fluida</li>
              <li>⚔️ Foco em cultivo marcial e artes marciais</li>
              <li>📱 Formato vertical (webtoon)</li>
              <li>🏛️ Forte influência da cultura e mitologia chinesa</li>
              <li>🧘 Temas: Xianxia, Wuxia, Reinos Imortais</li>
            </ul>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-primary" />
          Recomendação de Manhwa: The Beginning After The End
        </h2>

        <div className="my-8 p-6 bg-card rounded-xl border border-primary/30">
          <h3 className="text-xl font-bold text-primary mb-4">The Beginning After The End</h3>
          <p className="text-muted-foreground mb-4">
            O Rei Grey possui força, riqueza e prestígio imensos em um mundo governado pela 
            força marcial. Porém, a solidão persegue aqueles com grande poder. Após sua morte 
            em batalha, ele reencarna em um mundo de magia como Arthur Leywin, ganhando uma 
            segunda chance para viver de forma diferente.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Por que ler:</span>
              <span className="font-medium">Arte espetacular, worldbuilding rico</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status:</span>
              <span className="font-medium text-invest">Em lançamento</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Capítulos:</span>
              <span className="font-medium">+200 capítulos</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Onde ler:</span>
              <span className="font-medium">Tapas</span>
            </div>
          </div>
        </div>
      <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sword className="h-7 w-7 text-accent" />
          Recomendação de Manhua: Martial Peak
        </h2>

        <div className="my-8 p-6 bg-card rounded-xl border border-accent/30">
          <h3 className="text-xl font-bold text-accent mb-4">Martial Peak</h3>
          <p className="text-muted-foreground mb-4">
            Yang Kai, um simples servo de uma seita marcial, descobre um misterioso cristal 
            negro que transforma completamente seu destino. Ele começa sua jornada para 
            alcançar o pico do mundo marcial, enfrentando inimigos cada vez mais poderosos 
            e descobrindo os segredos do universo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Por que ler:</span>
              <span className="font-medium">Sistema de cultivo épico, +3000 caps</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Status:</span>
              <span className="font-medium text-primary">Finalizado</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Capítulos:</span>
              <span className="font-medium">+3000 capítulos</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Onde ler:</span>
              <span className="font-medium">Bilibili Comics, Webnovel</span>
            </div>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">Tabela Comparativa Completa</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Aspecto</th>
                <th className="text-left py-3 px-4 font-bold">Manhwa 🇰🇷</th>
                <th className="text-left py-3 px-4 font-bold">Manhua 🇨🇳</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">País de Origem</td>
                <td className="py-3 px-4 text-muted-foreground">Coreia do Sul</td>
                <td className="py-3 px-4 text-muted-foreground">China</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Gênero Predominante</td>
                <td className="py-3 px-4 text-muted-foreground">Sistema, Hunter, Reencarnação</td>
                <td className="py-3 px-4 text-muted-foreground">Cultivo Marcial, Xianxia</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Estilo de Arte</td>
                <td className="py-3 px-4 text-muted-foreground">Detalhado, linhas limpas</td>
                <td className="py-3 px-4 text-muted-foreground">Fluido, cores vibrantes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Duração Típica</td>
                <td className="py-3 px-4 text-muted-foreground">100-300 capítulos</td>
                <td className="py-3 px-4 text-muted-foreground">500-3000+ capítulos</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Protagonista Típico</td>
                <td className="py-3 px-4 text-muted-foreground">Hunter/Jogador em sistema</td>
                <td className="py-3 px-4 text-muted-foreground">Cultivador marcial</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Plataformas Principais</td>
                <td className="py-3 px-4 text-muted-foreground">Webtoon, Tapas</td>
                <td className="py-3 px-4 text-muted-foreground">Bilibili, Webnovel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Como Identificar Rapidamente?</h2>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Dicas Para Identificação</h3>
          <ul className="space-y-3 text-muted-foreground mb-0">
            <li>
              <strong>🎮 Se tem "Sistema", "Níveis", "Status":</strong> Provavelmente é Manhwa coreano
            </li>
            <li>
              <strong>🧘 Se menciona "Qi", "Cultivo", "Reinos":</strong> Provavelmente é Manhua chinês
            </li>
            <li>
              <strong>🗼 Se tem "Torre", "Hunter", "Gates":</strong> Manhwa coreano
            </li>
            <li>
              <strong>⚔️ Se tem "Seita", "Artes Marciais", "Imortal":</strong> Manhua chinês
            </li>
            <li>
              <strong>👀 Olhe para os nomes:</strong> Nomes coreanos vs nomes chineses são distintos
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Qual Escolher Para Começar?</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-primary/30">
            <h4 className="font-bold mb-2 text-primary">Se Você Gosta de RPGs e Games</h4>
            <p className="text-sm text-muted-foreground">
              Comece com <strong>Manhwa coreano</strong>. A mecânica de "sistema" e progressão 
              por níveis será familiar e satisfatória.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-accent/30">
            <h4 className="font-bold mb-2 text-accent">Se Você Gosta de Artes Marciais</h4>
            <p className="text-sm text-muted-foreground">
              Experimente <strong>Manhua chinês</strong>. O sistema de cultivo e as batalhas 
              épicas são incrivelmente satisfatórios.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">
            Qual você prefere?
          </h3>
          <p className="text-muted-foreground">
            Você curte mais as histórias de sistema dos Manhwas coreanos ou o cultivo 
            marcial dos Manhuas chineses? Conta pra gente nos comentários! 👇
          </p>
        </div>
      </div>

      <NewsletterSignup variant="inline" categories={["otaku"]} />
      <RelatedPosts currentSlug="como-diferenciar-manhuas-manhwas" />
      <NewsletterSignup variant="modal" categories={["otaku"]} showAfterMs={60000} />
      <CommentSection postId="como-diferenciar-manhuas-manhwas" postTitle="Saiba como diferenciar Manhuas e Manhwas" />
    </article>
  );
};

export default DiferenciarManhuasManhwas;