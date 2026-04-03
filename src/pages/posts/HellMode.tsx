import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { Clock, User, Calendar, BookOpen, Star, Tv, Gamepad2 } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/hell-mode.webp";

const HellMode = () => {
  useEffect(() => {
    trackArticleRead("hell-mode-gamer-isekai-guia-completo", "Hell Mode: O Gamer no Isekai com Dificuldade Máxima — Guia Completo", "otaku");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">Isekai · Gamer · Invocador</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Hell Mode: O Gamer Viciado em Desafios Domina o Isekai — Guia Completo do Anime 2026
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />22 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>
      <AdLeaderboard className="my-8" />

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Hell Mode anime 2026 — Allen o Invocador no mundo de dificuldade máxima" loading="eager" decoding="async" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          <strong>Hell Mode: Yarikomizuki no Gamer wa Hai Settei no Isekai de Musou Suru</strong> — em inglês <strong>Hell Mode: The Hardcore Gamer Dominates in Another World with Garbage Balancing</strong> — é o isekai para fãs de MMORPGs que sempre quiseram ver um jogador completamente viciado em dificuldade máxima enfrentar um mundo sem guias online. O anime, produzido pela <strong>Yokohama Animation Laboratory</strong>, estreou em <strong>janeiro de 2026</strong> na temporada de inverno.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Origem: Light Novel e Mangá
        </h2>
        <p>
          A história foi criada por <strong>Hamuo</strong>, com ilustrações de <strong>Mo</strong>, e começou a ser serializada em novembro de 2019 na plataforma <em>Shōsetsuka ni Narō</em>. A <strong>Earth Star Entertainment</strong> adquiriu os direitos e publica a light novel desde julho de 2020 pelo selo <em>Earth Star Novel</em> — treze volumes lançados até janeiro de 2026. O mangá, com arte de <strong>Enji Tetta</strong>, é serializado no site <em>Comic Earth Star</em> desde outubro de 2020, com treze volumes coletados. A <strong>J-Novel Club</strong> (e a <strong>Yen Press</strong> para versões físicas) licenciou a série em inglês.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-otaku" />
          Premissa: Um Gamer de 35 Anos Escolhe o Inferno
        </h2>
        <p>
          <strong>Kenichi Yamada</strong> é um trabalhador de escritório de 35 anos que passou a vida inteira jogando MMORPGs exigentes — o tipo de jogo punitivo que a maioria das pessoas abandona, mas que ele ama exatamente por isso. Quando o seu jogo favorito fecha os servidores, ele encontra um jogo misterioso sem nome que promete um desafio incomparável. Sem hesitar, seleciona a dificuldade <strong>"Hell Mode"</strong> e escolhe a classe <strong>Invocador</strong> — ainda em beta e considerada incompleta.
        </p>
        <p>
          O que acontece a seguir: ele é reencarnado no mundo do jogo como um <strong>bebê chamado Allen</strong>, filho primogênito de uma família de <strong>servos (serfs)</strong>. Allen nasce com todas as memórias de Kenichi, mas sem guias, walkthroughs ou fóruns para consultar. Precisa descobrir sozinho como a classe Invocador funciona — e fazer isso <strong>grindando centenas de horas de experiência</strong>, como qualquer bom gamer de carteirinha faria.
        </p>
        <p>
          A particularidade cruel do Hell Mode: Allen precisa de <strong>100 vezes mais experiência</strong> que um personagem normal para subir de nível. Uma pessoa normal no Nível 10 equivale a Allen no Nível 1000 em termos de experiência acumulada. Mas as recompensas também são proporcionalmente maiores.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Tv className="h-7 w-7 text-otaku" />
          O Anime (2026)
        </h2>
        <p>
          A adaptação foi produzida pela <strong>Yokohama Animation Laboratory</strong> e dirigida por <strong>Masato Tamagawa</strong>, com design de personagens de <strong>Kei Tsushima</strong> e música de <strong>Shuuichirou Fukuhiro</strong>. A série estreou em <strong>janeiro de 2026</strong>. Está disponível na plataforma <strong>HIDIVE</strong> (Sentai Filmworks) e na <strong>Amazon Prime Video</strong>.
        </p>
        <p>
          O elenco de vozes inclui <strong>Mutsumi Tamura</strong> como Allen, com <strong>Takaaki Torashima, Takaaki Uchino e Mayu Iizuka</strong> em papéis de suporte.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-otaku" />
          Personagens Principais
        </h2>
        <div className="not-prose space-y-4 my-4">
          {[
            {name:"Allen (Yamada Kenichi)", va:"Mutsumi Tamura", desc:"Protagonista. Gamer veterano de 35 anos reencarnado como servo. Aborda o novo mundo como um MMORPG — anota tudo em seu grimório, calcula eficiências de XP e trata cada batalha como um puzzle de otimização. Apesar da frieza analítica, é profundamente compassivo: seu sacrifício inicial para melhorar a vida de sua família demonstra que 'gamer logic' é muitas vezes uma máscara para altruísmo genuíno. Líder do grupo 'No-life Gamers'."},
            {name:"Kurena", va:"—", desc:"Amiga de infância de Allen na vila de Kurena. Possui talentos extraordinários de combate físico. Reencontrada por Allen na Academia, torna-se membro central do grupo No-life Gamers."},
            {name:"Cecil Granvelle", va:"—", desc:"Filha do Barão Granvelle — a família nobre para quem Allen trabalha como servo. Mágica talentosa, une-se ao grupo quando Allen entra na Academia."},
            {name:"Dogora", va:"—", desc:"Companheiro de Allen na Academia — guerreiro de força bruta que complementa a estratégia de Allen."},
          ].map(p => (
            <div key={p.name} className="p-4 bg-card border border-border rounded-xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-bold">{p.name}</h4>
                {p.va !== "—" && <span className="text-xs bg-muted px-2 py-0.5 rounded-full">VA: {p.va}</span>}
              </div>
      <AdRectangle className="my-8" />
              <p className="text-sm text-muted-foreground mb-0">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gamepad2 className="h-7 w-7 text-otaku" />
          O Sistema de Invocação e a Progressão do Allen
        </h2>
        <p>
          A classe Invocador de Allen permite invocar criaturas de diferentes tipos (pássaros, bestas, insetos, plantas, etc.), cada uma com habilidades específicas. Inicialmente Allen nomeia suas invocações simplesmente por letras (Pássaro A, Besta B), mas conforme evolui ganha invocações de rank mais alto com poderes mais expressivos. Diferente de personagens convencionais que lutam diretamente, Allen é um <strong>general estratégico</strong> — usa suas invocações para maximizar a eficiência em dungeons e batalhas, enquanto ele próprio fica coletando experiência e otimizando o sistema.
        </p>
        <p>
          A narrativa acompanha Allen desde bebê, passando pela infância na vila como servo, sua ascensão a criado da Família Granvelle, entrada na Academia da cidade, e eventualmente o combate contra o exército do Lorde Demônio que ameaça o reino élfico de Rohzenheim.
        </p>

        <div className="not-prose mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Você escolheria Hell Mode? 🎮</h3>
          <p className="text-muted-foreground">Conta nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="hell-mode-gamer-isekai-guia-completo" />
      <CommentSection postId="hell-mode-gamer-isekai-guia-completo" postTitle="Hell Mode: O Gamer no Isekai com Dificuldade Máxima" />
          <AdLeaderboard className="my-8" />
    </article>
  );
};

export default HellMode;
