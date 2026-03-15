import { Link } from "react-router-dom";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, Palette, Music, Video, Sparkles, AlertTriangle } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/ia-criatividade-2026.webp";

const IACriatividade2026 = () => {
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <Link to="/ia" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar para IA
      </Link>

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA e Criatividade em 2026: Como a Inteligência Artificial Está Revolucionando Arte, Música e Vídeo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />14 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="IA e Criatividade 2026 - Arte, Música e Vídeo gerados por inteligência artificial" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Em 2026, a fronteira entre criação humana e artificial nunca foi tão tênue. Ferramentas de IA generativa estão redefinindo o que significa ser artista, músico ou cineasta. Mas será que a IA é uma ameaça ou uma aliada da criatividade?
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Palette className="h-7 w-7 text-ia" />
          IA na Arte Visual: De Midjourney a Sora
        </h2>
        <p>
          As ferramentas de geração de imagem evoluíram de forma impressionante. Em 2026, <strong>Midjourney V7</strong>, <strong>DALL-E 4</strong> e <strong>Stable Diffusion 4</strong> produzem imagens praticamente indistinguíveis de fotografias reais. O <strong>Adobe Firefly 3</strong> já está integrado ao Photoshop e Illustrator, permitindo que designers usem IA como assistente — não como substituto.
        </p>
        <p>
          O mercado de NFTs artísticos baseados em IA movimentou US$ 2.3 bilhões em 2025. Artistas como <strong>Refik Anadol</strong> e <strong>Holly Herndon</strong> usam IA como ferramenta expressiva, criando obras que seriam impossíveis manualmente. A questão não é mais "IA pode criar arte?", mas "como artistas podem usar IA para ir além?".
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Music className="h-7 w-7 text-ia" />
          Música Gerada por IA: O Novo Paradigma
        </h2>
        <p>
          <strong>Suno AI</strong>, <strong>Udio</strong> e <strong>Google MusicLM</strong> permitem criar músicas completas com vocais a partir de prompts de texto. Em 2026, a qualidade é surpreendente — e controversa. Grandes gravadoras já processaram plataformas de IA musical por violação de direitos autorais.
        </p>
        <p>
          Por outro lado, produtores independentes usam IA para criar demos, experimentar com gêneros e produzir trilhas sonoras para jogos e vídeos. O <strong>Boomy</strong> reportou mais de 20 milhões de músicas criadas em sua plataforma. A democratização da produção musical é real, mas levanta questões sobre originalidade e valor artístico.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Video className="h-7 w-7 text-ia" />
          Vídeo e Cinema: A Era dos Geradores de Vídeo
        </h2>
        <p>
          <strong>OpenAI Sora</strong>, <strong>Google Veo 2</strong> e <strong>Runway Gen-4</strong> são os principais players na geração de vídeo por IA. Em 2026, já é possível criar curtas-metragens de 3 a 5 minutos com qualidade cinematográfica usando apenas prompts de texto. Diretores como <strong>Gareth Edwards</strong> já declararam usar IA em pré-produção.
        </p>
        <p>
          O impacto na indústria publicitária é enorme: agências estão cortando custos de produção em até 70% usando IA para criar storyboards, animatics e até comerciais finais. YouTubers e criadores de conteúdo usam ferramentas como <strong>HeyGen</strong> e <strong>Synthesia</strong> para criar avatares digitais que falam em dezenas de idiomas.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-ia" />
          Ferramentas Essenciais Para Criativos em 2026
        </h2>
        <ul>
          <li><strong>Midjourney V7</strong> — Geração de imagens com controle de estilo avançado</li>
          <li><strong>Adobe Firefly 3</strong> — IA integrada ao ecossistema Adobe</li>
          <li><strong>Suno AI Pro</strong> — Criação musical com vocais realistas</li>
          <li><strong>Runway Gen-4</strong> — Edição e geração de vídeo profissional</li>
          <li><strong>ElevenLabs</strong> — Clonagem de voz e narração por IA</li>
          <li><strong>Kaiber</strong> — Transformação de música em vídeos animados</li>
          <li><strong>Leonardo AI</strong> — Geração de assets para games e design</li>
          <li><strong>Pika Labs</strong> — Animação de imagens estáticas</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-ia" />
          O Debate Ético: Autoria, Copyright e o Futuro
        </h2>
        <p>
          O maior debate de 2026 no mundo criativo é sobre <strong>autoria</strong>. Se uma IA treinou em milhões de obras de artistas humanos, quem é o autor da obra gerada? O <strong>AI Act europeu</strong> agora exige que conteúdo gerado por IA seja rotulado. Nos EUA, o Copyright Office decidiu que obras puramente geradas por IA não são protegidas por direitos autorais.
        </p>
        <p>
          A solução parece estar na <strong>co-criação</strong>: artistas usam IA como ferramenta dentro de um processo criativo maior, adicionando intenção, curadoria e refinamento humano. O resultado é um novo tipo de arte — nem puramente humana, nem puramente artificial.
        </p>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você já usou IA para criar algo?</h3>
          <p className="text-muted-foreground">Compartilhe sua experiência nos comentários! 🎨</p>
        </div>
      </div>

      <RelatedPosts currentSlug="ia-criatividade-arte-musica-2026" />
      <CommentSection postId="ia-criatividade-arte-musica-2026" />
    </article>
  );
};

export default IACriatividade2026;
