import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import crimsonGuiaImg from "@/assets/crimson-desert-guia.webp";

const CrimsonDesertGuiaCompleto = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/geek/crimson-desert"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Crimson Desert
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
            Crimson Desert
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Crimson Desert: Guia Completo do RPG Mais Esperado de 2026
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Tudo sobre história, gameplay, mundo aberto e sistema de combate do novo épico da Pearl Abyss
        </p>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            16 de Março, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            12 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
      </header>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchpriority="high"
          src={crimsonGuiaImg}
          alt="Crimson Desert - Guia Completo RPG 2026 Pearl Abyss"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-red-600 pl-4">
          A Pearl Abyss está prestes a redefinir o que entendemos por RPG de mundo aberto. Crimson Desert — lançado em 19 de março de 2026 para PC, PS5 e Xbox Series X/S — é o resultado de anos de desenvolvimento ambicioso, refinamento técnico e uma visão clara de narrativa cinematográfica combinada com liberdade de exploração. Se você ainda não sabe por que esse jogo está em todas as listas de desejos do planeta, este guia vai te mostrar tudo.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Que é Crimson Desert?</h2>
        <p>
          Crimson Desert é um RPG de ação em mundo aberto desenvolvido pela Pearl Abyss, o estúdio sul-coreano conhecido pelo MMORPG Black Desert Online. Inicialmente concebido como um prequel dentro do universo de Black Desert, o projeto evoluiu durante o desenvolvimento e se tornou uma experiência completamente independente — uma IP própria e separada, com lore e universo únicos.
        </p>
        <p>
          O jogo é totalmente single-player, sem nenhuma integração multiplayer planejada. A Pearl Abyss decidiu focar 100% na narrativa e na experiência solo, algo que diferencia Crimson Desert de praticamente todo o restante do portfólio do estúdio. A história acontece no continente fictício de Pywel, um território vasto marcado por conflitos políticos, guerras entre facções e criaturas sobrenaturais que desafiam a ordem do mundo conhecido.
        </p>

        <blockquote className="border-l-4 border-red-600 bg-red-500/10 rounded-r-lg px-5 py-4 italic text-muted-foreground">
          "A batalha por Pywel começa em 19 de março de 2026." — Pearl Abyss
        </blockquote>

        <h2 className="text-2xl font-bold mt-10 mb-4">A História: Kliff e os Greymanes</h2>
        <p>
          O jogador controla Kliff, líder do grupo mercenário conhecido como Greymanes. No início da jornada, Kliff busca libertar sua terra natal de opressores e forças que ameaçam seu povo — uma missão pessoal que rapidamente evolui para algo muito maior, envolvendo o destino de todo o continente de Pywel e as vidas de seus habitantes.
        </p>
        <p>
          O ponto de virada narrativo acontece quando os Greymanes sofrem uma emboscada devastadora pelos inimigos juramentados, os Black Bears. Essa tragédia nocturna força Kliff a reconstruir o grupo e enfrentar não apenas rivais mortais, mas também as forças sobrenaturais que começam a emergir do misterioso reino conhecido como o Abismo — uma dimensão etérea onde um desequilíbrio místico ameaça o mundo inteiro.
        </p>
        <p>
          A narrativa de Crimson Desert é descrita pelos criadores como cinematográfica, com personagens memoráveis e reviravoltas que vão além do esperado para o gênero. As facções rivais de Pailune mantinham um equilíbrio tenso antes dos eventos do jogo, e entender essa política medieval-fantástica é parte fundamental da experiência.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">O Mundo: O Continente de Pywel</h2>
        <p>
          Pywel é um continente aberto com um mapa de 82 quilômetros quadrados — número que coloca o jogo entre os maiores do gênero. O mundo é dividido em cinco regiões distintas, cada uma com sua própria geografia, cultura, fauna e desafios únicos:
        </p>
        <ul className="space-y-2">
          <li>Planícies e florestas verdes repletas de segredos naturais e acampamentos inimigos</li>
          <li>Desertos áridos com ruínas de civilizações extintas e criaturas ancestrais</li>
          <li>Cidades movimentadas com NPCs com rotinas próprias e mercados dinâmicos</li>
          <li>Montanhas escarpadas com fortalezas e áreas de escalada vertical</li>
          <li>O Abismo — um reino etéreo e misterioso no céu, onde leis físicas se curvam</li>
        </ul>
        <p>
          A interação com o ambiente é um ponto forte de Pywel. Kliff pode escalar paredes e penhascos, nadar em rios e lagos (embora sem mergulho submarino, confirmado pelos desenvolvedores), planar de alturas elevadas, montar cavalos e até dragões mecanizados em determinados momentos. O mapa é repleto de marcos históricos, ruínas antigas, tesouros escondidos e pontos de interesse que recompensam a exploração.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Sistema de Combate: Brutal, Fluido e Estratégico</h2>
        <p>
          O sistema de combate de Crimson Desert foi desenvolvido com a BlackSpace Engine, uma tecnologia proprietária criada pela Pearl Abyss projetada especificamente para mundos abertos complexos com simulações físicas realistas. O combate combina:
        </p>
        <ul className="space-y-2">
          <li>Sequências de melee com combos executáveis e janelas de timing precisas</li>
          <li>Ataques elementais que potencializam armas com efeitos de fogo, gelo e elétrico</li>
          <li>Combate a cavalo com mecânicas específicas de mobilidade e ataque</li>
          <li>Batalhas contra chefes em larga escala, incluindo dragões mecânicos monumentais</li>
          <li>Sistema de progressão profundo com personalização de habilidades e equipamentos</li>
          <li>Construção e gerenciamento de fortalezas — recrutamento de tropas e expansão territorial</li>
        </ul>
        <p>
          Análises técnicas de canais como Digital Foundry destacaram especialmente o nível de realismo das simulações físicas e dos efeitos de iluminação. A engine suporta ainda tecnologias modernas de upscaling e renderização que garantem performance tanto em PCs high-end quanto nos consoles de nova geração.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Plataformas e Data de Lançamento</h2>
        <p>
          Crimson Desert está disponível em 19 de março de 2026 para Windows PC (via Steam), macOS, PlayStation 5 e Xbox Series X/S. O pré-download esteve disponível a partir de 17 de março para quem já havia adquirido o jogo. Compradores antecipados receberam o exclusivo Khaled Shield como bônus de pré-venda.
        </p>
        <p>
          Antes do lançamento, o jogo havia ultrapassado a marca de 3 milhões de listas de desejo somando todas as plataformas globais, posicionando-o como um dos lançamentos mais aguardados de 2026. A recepção da comunidade brasileira foi especialmente intensa, com discussões calorosas sobre customização de personagem e impacto narrativo.
        </p>

        {/* Conclusion */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold mb-3">Conclusão</h3>
          <p className="text-muted-foreground">
            Crimson Desert representa a aposta mais ambiciosa da Pearl Abyss até hoje. Com um mundo vivo de 82km², uma narrativa cinematográfica protagonizada por Kliff e os Greymanes, um sistema de combate visceral e uma engine tecnicamente impressionante, o jogo tem tudo para se tornar um marco do RPG na geração atual. Já está com o HD preparado para explorar Pywel?
          </p>
        </div>
      </div>

      {/* Related Posts & Comments */}
      <RelatedPosts currentSlug="crimson-desert-guia-completo" />
      <CommentSection postId="crimson-desert-guia-completo" />
    </article>
  );
};

export default CrimsonDesertGuiaCompleto;
