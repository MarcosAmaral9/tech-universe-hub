import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { ArrowLeft, Clock, Calendar, User, BookOpen, Target, Sword, Sparkles } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import manhwaVsManuaImg from "@/assets/manhwa-vs-manhua.webp";

import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";
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
        <AuthorBio category="otaku" />
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
      </div>

      
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127472;&#127479;</span>
          Manhwa Coreano: O Formato Webtoon que Dominou o Mobile
        </h2>
        <p>
          <strong>Manhwa</strong> são os quadrinhos sul-coreanos, e sua principal inovação — o formato <strong>webtoon</strong> em scroll vertical, full color, otimizado para leitura em smartphones — transformou os quadrinhos asiáticos globalmente. Enquanto o mangá japonês nasceu como publicação em revista impressa (lida da direita para a esquerda), o manhwa moderno foi desenhado desde o início para o consumo digital em telas verticais. Plataformas como <strong>Webtoon</strong> (Naver), <strong>Kakao Page</strong> e <strong>Tapas</strong> são os principais veículos — todas com aplicativos gratuitos e conteúdo acessível internacionalmente.
        </p>
        <p>
          Os gêneros dominantes no manhwa são o <strong>"sistema"</strong> (protagonista que recebe uma interface de jogo visível) e o <strong>"regressor"</strong> (protagonista que retorna ao passado com conhecimento do futuro) — subgêneros que o manhwa popularizou globalmente e que influenciaram diretamente o mercado de light novels japonesas a partir de 2019. <strong>Solo Leveling</strong> de Chugong, com arte de DUBU, é o título que levou o manhwa para audiências mainstream globais — seu anime pela A-1 Pictures em 2024 e o filme ReAwakening (novembro de 2024) consolidaram a franquia como uma das maiores fora do Japão.
        </p>
        <p>
          Outros títulos fundamentais para entender o manhwa: <strong>Tower of God</strong> (SIU, Webtoon — em andamento, 600+ capítulos gratuitos) é um dos manhwas mais longos e complexos em worldbuilding, com anime pela Crunchyroll em duas temporadas. <strong>Omniscient Reader's Viewpoint</strong> (Sing N Song — finalizado, 551 capítulos) é considerado por muitos leitores o melhor manhwa já escrito em termos de construção narrativa. <strong>The Beginning After the End</strong> (TurtleMe — em andamento) tem uma das maiores bases de leitores do Tapas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127464;&#127475;</span>
          Manhua Chinês: Xianxia, Cultivo e a Tradição de Dois Mil Anos
        </h2>
        <p>
          <strong>Manhua</strong> são os quadrinhos chineses, e têm identidade cultural muito distinta dos outros dois formatos. O gênero dominante é o <strong>Xianxia</strong> (仙侠 — "herói imortal") e o <strong>Wuxia</strong> (武俠 — "herói marcial"), que combinam artes marciais, filosofia taoísta e sistemas de progressão baseados em "cultivo" — a ideia de que praticantes marciais podem transcender a mortalidade através de décadas ou séculos de treinamento espiritual e físico. Esses gêneros têm raízes em literatura chinesa clássica que remonta a séculos — o manhua moderno os adapta para o formato visual com sistemas de progressão que influenciaram diretamente o isekai japonês de "sistema".
        </p>
        <p>
          O acesso ao manhua fora da China é mais limitado do que ao manhwa ou mangá. As principais plataformas com conteúdo em inglês são <strong>Bilibili Comics</strong>, <strong>Webnovel</strong> e <strong>Tapas</strong>. No Brasil, o acesso é quase exclusivamente via scanlations em inglês ou, em menor volume, em português. Títulos de referência: <strong>Tales of Demons and Gods</strong> (Mad Snail — Webnovel) é um dos manhuas mais lidos globalmente, com o protagonista Nie Li regressando ao passado com conhecimento de vidas futuras. <strong>Battle Through the Heavens</strong> (Tiantang Tu Dou — adaptação anime em múltiplas temporadas disponível no Bilibili) é o clássico do subgênero de cultivo marcial.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128269;</span>
          Como Diferenciar na Prática: Três Perguntas Rápidas
        </h2>
        <p>
          Se você está olhando para uma obra e não sabe se é manhwa ou manhua, três perguntas resolvem em segundos. <strong>1) É full color em scroll vertical?</strong> — Se sim, é quase certamente manhwa coreano ou manhua chinês (mangá japonês é preto e branco e lido em páginas). <strong>2) Os personagens têm nomes coreanos ou chineses?</strong> — Kim, Park, Lee, Yoon são coreanos; Wang, Li, Chen, Zhang são chineses. <strong>3) O sistema de poder envolve "cultivo" e imortalidade taoísta?</strong> — Se sim, é manhua. Se envolve "rankings de dungeon" ou "portais para outro mundo", provavelmente manhwa.
        </p>
        <p>
          A confusão entre os dois formatos é compreensível porque ambos são full color, lidos da esquerda para a direita e predominantemente digitais. O que os distingue é cultural antes de visual: manhwa reflete a cultura pop coreana (estética, dinâmicas de grupo, referências ao cotidiano coreano), enquanto manhua reflete a filosofia e estética chinesa (hierarquias confucionistas, misticismo taoísta, escalas de poder cósmico). Depois de ler alguns capítulos de cada, a diferença de atmosfera se torna instintiva.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128218;</span>
          Onde Ler Manhwa e Manhua Legalmente no Brasil
        </h2>
        <p>
          Para <strong>manhwa</strong>: o <strong>Webtoon</strong> (webtoons.com) é gratuito com mais de mil títulos em inglês — Tower of God, True Beauty, Unordinary e muitos outros. O <strong>Tapas</strong> tem manhwa em inglês com sistema freemium. O <strong>Kakao Webtoon</strong> tem mais títulos em coreano mas com seleção em inglês crescente. Para manhwa com licença em português, a <strong>Panini</strong> e a <strong>NewPop</strong> publicaram alguns títulos fisicamente, mas a maioria ainda está sem edição brasileira oficial.
        </p>
        <p>
          Para <strong>manhua</strong>: o <strong>Bilibili Comics</strong> (app gratuito) tem grande catálogo em inglês, incluindo adaptações de donghua (animação chinesa) populares. O <strong>Webnovel</strong> tem manhuas baseados em webnovels populares. Para títulos sem licença oficial, o <strong>MangaDex</strong> centraliza scanlations de manhwa e manhua em múltiplos idiomas — incluindo algumas traduções em português feitas por grupos de fãs brasileiros.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: manhwa e manhua são formatos distintos com culturas próprias — confundi-los é perder metade da experiência">
        <p>
          A confusão entre manhwa coreano e manhua chinês é compreensível porque ambos são full color e digitais — mas são culturalmente tão distintos quanto o mangá japonês é de ambos. O manhwa sul-coreano nasceu no formato webtoon para smartphones e popularizou globalmente o subgênero de 'sistema' com obras como <strong>Solo Leveling</strong>. O manhua chinês tem raízes em literatura de Xianxia e Wuxia com séculos de história, e seu sistema de 'cultivo' influenciou diretamente o isekai japonês moderno.
        </p>
        <p>
          Para o leitor brasileiro em 2026, o acesso ao manhwa nunca foi tão fácil — o Webtoon tem centenas de títulos gratuitos em inglês, e alguns chegam ao português via scanlation. O manhua ainda depende mais de plataformas como Bilibili Comics e Webnovel em inglês. Identificar qual dos dois você prefere antes de mergulhar no catálogo disponível economiza frustração e garante que você encontre exatamente o que busca.
        </p>
      </EditorialTake>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "Webtoon — plataforma oficial de manhwa",
            url: "https://www.webtoons.com/",
            publisher: "WEBTOON Entertainment",
            accessedAt: "Maio 2026"
          },
          {
            title: "Tapas — webtoon e manhua em inglês",
            url: "https://tapas.io/",
            publisher: "Tapas Media",
            accessedAt: "Maio 2026"
          },
          {
            title: "Webnovel — plataforma de manhua chinês",
            url: "https://www.webnovel.com/",
            publisher: "Webnovel / Qidian",
            accessedAt: "Maio 2026"
          },
          {
            title: "MyAnimeList — Top Manga Rankings",
            url: "https://myanimelist.net/topmanga.php",
            publisher: "MyAnimeList",
            accessedAt: "Maio 2026"
          },
          {
            title: "Anime News Network — Solo Leveling adaptation",
            url: "https://www.animenewsnetwork.com/",
            publisher: "Anime News Network",
            accessedAt: "Maio 2026"
          }
        ]}
      />
      <RelatedPosts currentSlug="como-diferenciar-manhuas-manhwas" />
      <CommentSection postId="como-diferenciar-manhuas-manhwas" postTitle="Saiba como diferenciar Manhuas e Manhwas"  category="otaku" />
    </article>
  );
};

export default DiferenciarManhuasManhwas;