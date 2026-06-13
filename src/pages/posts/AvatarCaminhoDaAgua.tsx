import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Waves, Clapperboard, Wind, Timer, Film, Target, Award, Cpu, Globe } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import avatarWaterImg from "@/assets/avatar-water-swimming.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const AvatarCaminhoDaAgua = () => {

  useEffect(() => {
    trackArticleRead("avatar-caminho-da-agua-fisica-fluidos", "Avatar 2: O Caminho da Água — A Revolução em CGI e Simulação de Fluidos", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/avatar" portalLabel="Painel Avatar" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 2: O Caminho da Água — A Revolução em CGI e Simulação de Fluidos que Redefiniu o Cinema
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />26 de Janeiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="26 de Janeiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={avatarWaterImg}
          alt="Avatar O Caminho da Água - Simulação de fluidos e captura subaquática"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Treze anos após revolucionar o cinema com o{" "}
          <Link to="/post/avatar-2009-filme-revolucionou-tecnologia" className="text-primary hover:underline">
            Avatar original de 2009
          </Link>
          , James Cameron voltou com <strong>Avatar: O Caminho da Água</strong> para provar que a
          inovação tecnológica cinematográfica ainda tinha fronteiras a cruzar. O desafio desta vez
          era radicalmente diferente: criar <strong>água fotorrealista em CGI</strong> em escala e
          complexidade nunca tentadas, incluindo a captura de performance de atores submersos em
          água real. O resultado arrecadou <strong>US$ 2,32 bilhões</strong> mundialmente e ganhou
          o <strong>Oscar de Melhores Efeitos Visuais de 2023</strong>.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-cyan-500/10 to-background rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-cyan-400" />
            Informações sobre Avatar: O Caminho da Água
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div><strong>Diretor:</strong> James Cameron</div>
            <div><strong>Bilheteria:</strong> US$ 2,32 bilhões</div>
            <div><strong>Orçamento:</strong> US$ 350–460 milhões</div>
            <div><strong>Estreia:</strong> 16 de dezembro de 2022</div>
            <div><strong>Duração:</strong> 192 minutos</div>
            <div><strong>Prêmios:</strong> Oscar — Melhores Efeitos Visuais (2023)</div>
            <div><strong>Estúdio VFX:</strong> Weta FX</div>
            <div><strong>Formato:</strong> 3D / HFR 48fps / IMAX</div>
            <div><strong>Onde assistir:</strong> Disney+, Blu-ray 4K</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Award className="h-7 w-7 text-cyan-400" />
          Por Que Avatar 2 É um Marco Técnico Distinto do Original
        </h2>

        <p>
          O primeiro Avatar (2009) revolucionou com a <strong>Câmera Virtual</strong> e a captura
          de performance facial. O Caminho da Água enfrentou um problema completamente diferente:
          a simulação de água fotorrealista em interação com personagens digitais. Isso parece
          uma distinção técnica, mas na prática representou anos de pesquisa e desenvolvimento
          em física computacional aplicada ao cinema.
        </p>

        <p>
          A Weta FX (que passou por rebranding a partir da Weta Digital em 2021) desenvolveu
          novos sistemas de simulação baseados em métodos de elementos finitos para modelar a
          dinâmica de fluidos — a mesma matemática usada em engenharia aeronáutica e naval,
          adaptada para renderização cinematográfica em tempo gerenciável. O resultado foi que
          cada cena aquática do filme passou por simulação física real, não aproximações visuais.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Waves className="h-7 w-7 text-cyan-400" />
          Simulação de Fluidos: O Problema Mais Difícil do CGI
        </h2>

        <p>
          Renderizar água convincente é considerado um dos <strong>maiores desafios da computação
          gráfica</strong> por uma razão fundamental: o olho humano evoluiu cercado por água e
          é extraordinariamente sensível a qualquer detalhe falso — a forma como a luz refrata
          abaixo da superfície, como bolhas sobem com velocidade diferente dependendo do tamanho,
          como espuma se fragmenta em gotículas, como cabelo molhado se comporta.
        </p>

        <p>
          Para Avatar 2, a Weta FX construiu um sistema chamado <strong>Splash</strong> —
          específico para simular interações de personagens com água. Cada Na'vi, cada criatura
          e cada objeto que entrava em contato com a superfície gerava ondas computadas
          individualmente com base no peso, velocidade e ângulo de entrada. Isso significava que
          uma cena de Lo'ak mergulhando no oceano de Pandora gerava uma simulação de fluido
          única, impossível de ser reutilizada em outro plano.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Waves className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Sistema Splash</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Pipeline interno da Weta FX para simular interações de personagens com água.
              Cada contato gera uma simulação de fluido baseada em física real de dinâmica
              de fluidos computacional (CFD).
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Wind className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Bolhas e Espuma</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sistema dedicado para simular bolhas de ar, espuma de onda e a forma como a
              luz interage com cada camada de água e ar. Bolhas de tamanhos diferentes sobem
              em velocidades diferentes, com física correta de flutuabilidade.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Globe className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Bioluminescência Subaquática</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Os recifes de Pandora emitem luz bioluminescente que muda de cor e intensidade.
              Renderizar esse efeito abaixo da superfície, com a difração correta da luz
              através da água, exigiu um sistema de iluminação volumétrica dedicado.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Cpu className="h-8 w-8 text-cyan-400 mb-3" />
            <h4 className="font-bold mb-2">Escala Computacional</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Avatar 2 gerou volumes de dados ainda maiores que o original. Certas cenas com
              Tulkun e oceano aberto levavam dias para renderizar completamente no farm de
              servidores da Weta FX em Wellington, Nova Zelândia.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Clapperboard className="h-7 w-7 text-cyan-400" />
          Captura de Performance Subaquática: Inovação Sem Precedente
        </h2>

        <p>
          O maior diferencial técnico de O Caminho da Água em relação a qualquer produção
          anterior foi a <strong>captura de performance subaquática</strong>. Nos filmes com
          motion capture em água — como aquilo feito para partes de Poseidon ou filmes de
          piratas — os atores geralmente atuam em frente a telas verdes em sets secos, e a
          água é adicionada em pós-produção. Cameron recusou esse método.
        </p>

        <p>
          Para Avatar 2, os atores mergulharam em uma <strong>piscina de performance de
          900.000 litros</strong> construída especificamente para a produção. O sistema de
          captura de performance foi adaptado para funcionar sob a água — câmeras à prova
          d'água, sensores modificados e um processo de reconstrução 3D que compensava a
          refração da luz na interface água-ar. Os atores precisaram aprender apneia
          profissional para que bolhas de respiração não interferissem nos sensores.
        </p>

        <blockquote className="border-l-4 border-cyan-400 pl-6 my-8 italic text-muted-foreground">
          "Kate Winslet conseguiu ficar mais de 7 minutos debaixo d'água em uma única tomada,
          o que quebrou o recorde que Tom Cruise havia estabelecido em Missão: Impossível —
          Nação Secreta."
          <footer className="mt-2 not-italic font-semibold">— James Cameron, entrevista à Entertainment Weekly, 2022</footer>
        </blockquote>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Timer className="h-7 w-7 text-cyan-400" />
          High Frame Rate (HFR): 48fps e a Controvérsia
        </h2>

        <p>
          Avatar 2 foi filmado em <strong>48 frames por segundo</strong> (High Frame Rate), o dobro
          do padrão cinematográfico de 24fps. Essa escolha técnica já havia sido usada por Peter
          Jackson em <em>O Hobbit</em> (2012), onde gerou reações mistas — muitos espectadores
          acharam que o HFR dava ao filme uma aparência de "novela de TV", um efeito chamado
          de <em>soap opera effect</em>.
        </p>

        <p>
          Cameron abordou essa questão de forma diferente: o HFR em Avatar 2 é usado
          <strong> seletivamente</strong>. Cenas em terra e cenas de diálogo foram exibidas
          em 24fps para preservar a "gramática cinematográfica" tradicional. Apenas as cenas
          aquáticas e de ação de alta velocidade utilizaram 48fps completos, onde a diferença
          é mais benéfica — movimentos de natação, interações com ondas e combates subaquáticos
          se beneficiam diretamente da maior taxa de quadros para preservar nitidez sem
          motion blur excessivo.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">HFR 48fps: Quando Ajuda e Quando Não Ajuda</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-400 mb-2">✅ Benefícios em Cenas Aquáticas</p>
              <ul className="text-muted-foreground space-y-1 mb-0">
                <li>• Cada gota de água permanece nítida em movimento</li>
                <li>• Movimentos de natação fluidos e naturais</li>
                <li>• Efeito 3D estereoscópico mais convincente</li>
                <li>• Reflexos e refrações capturados com mais detalhe</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-orange-400 mb-2">⚠ Desvantagens em Cenas Comuns</p>
              <ul className="text-muted-foreground space-y-1 mb-0">
                <li>• Pode parecer "hiperrealista" demais para drama</li>
                <li>• Quebra a "magia" do cinema tradicional a 24fps</li>
                <li>• Nem todos os cinemas suportam projeção HFR</li>
                <li>• Cameron o usou seletivamente por essa razão</li>
              </ul>
            </div>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-cyan-400" />
          Os Tulkun: Animando Emoção em Criaturas Gigantes
        </h2>

        <p>
          Os <strong>Tulkun</strong> são criaturas marinhas de Pandora que lembram baleias em
          escala e comportamento, mas com anatomia e inteligência próprias do universo de Cameron.
          Cada Tulkun foi criado com expressões emocionais complexas e uma personalidade
          individual — eles são personagens com nomes próprios dentro da narrativa,
          não apenas criaturas de fundo.
        </p>

        <p>
          O desafio técnico dos Tulkun era duplo: a <strong>escala absurda</strong> (algumas
          criaturas são maiores que navios) e a necessidade de transmitir emoção através de
          uma face que não tem olhos ou expressões faciais humanoides. Os animadores da Weta FX
          desenvolveram um sistema de expressão emocional baseado em movimentos de barbatanas,
          mudanças de bioluminescência corporal e postura geral — criando uma linguagem visual
          de emoção completamente nova para a espécie.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left py-3 px-4 font-bold">Criatura</th>
                <th className="text-left py-3 px-4 font-bold">Inspiração Biológica</th>
                <th className="text-left py-3 px-4 font-bold">Desafio Técnico</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Tulkun</td>
                <td className="py-3 px-4 text-muted-foreground">Baleias-jubarte e cachalotes</td>
                <td className="py-3 px-4 text-muted-foreground">Expressão emocional sem rosto humanoide, escala massiva, pele molhada</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Ilu</td>
                <td className="py-3 px-4 text-muted-foreground">Plesiossauros e golfinhos</td>
                <td className="py-3 px-4 text-muted-foreground">Movimentos ágeis, interação física com montadores Na'vi</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Skimwing</td>
                <td className="py-3 px-4 text-muted-foreground">Peixes voadores e raias</td>
                <td className="py-3 px-4 text-muted-foreground">Transição realista entre água e ar com física correta</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Recifes de Pandora</td>
                <td className="py-3 px-4 text-muted-foreground">Recifes de coral do Indo-Pacífico</td>
                <td className="py-3 px-4 text-muted-foreground">Bioluminescência subaquática com iluminação volumétrica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          Os Metkayina: Worldbuilding Biológico Expandido
        </h2>

        <p>
          A nova tribo apresentada em O Caminho da Água — os <strong>Metkayina</strong> — foram
          construídos com o mesmo rigor científico que caracterizou os Omaticaya no original.
          Cameron e sua equipe trabalharam com especialistas em biologia marinha para criar
          adaptações anatomicamente plausíveis para Na'vi que evoluíram em ambiente aquático:
          caudas mais largas para propulsão, braços com músculos diferentes para natação,
          membrana interdigital e uma fisiologia pulmonar que permite mergulhos mais longos.
        </p>

        <p>
          Cada detalhe anatômico foi justificado pela equipe de consultores científicos do
          filme. A líderes dos Metkayina, Ronal (Kate Winslet), foi animada com um padrão
          de nado específico para seu estágio de gravidez — a Weta FX estudou como o centro
          de gravidade de uma mulher grávida altera a biomecânica da natação para garantir
          que a animação fosse fisiologicamente correta.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Comparativo das Tribos Na'vi em Adaptação ao Ambiente</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-bold">Tribo</th>
                  <th className="text-left py-2 px-3 font-bold">Habitat</th>
                  <th className="text-left py-2 px-3 font-bold">Adaptações Físicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium">Omaticaya</td>
                  <td className="py-2 px-3 text-muted-foreground">Floresta densa</td>
                  <td className="py-2 px-3 text-muted-foreground">Pernas longas para escalar, pés preênseis, cauda de equilíbrio</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Metkayina</td>
                  <td className="py-2 px-3 text-muted-foreground">Oceano e recifes</td>
                  <td className="py-2 px-3 text-muted-foreground">Cauda mais larga, braços musculosos, membrana interdigital, pulmões de maior capacidade</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Bilheteria e Impacto: US$ 2,32 Bilhões com Revisões Mistas
        </h2>

        <p>
          Avatar: O Caminho da Água arrecadou <strong>US$ 2,32 bilhões</strong> mundialmente,
          tornando-se o quarto filme de maior bilheteria da história no lançamento (superado
          depois por outros títulos). O número é notável considerando que o filme recebeu
          revisões críticas mais mistas que o original — muitos críticos elogiaram os
          visuais mas questionaram o ritmo da narrativa e a duração de 3h12min.
        </p>

        <p>
          O padrão de bilheteria confirmou o que Cameron havia apostado: o público vai ao
          cinema para ver Avatar independentemente da recepção crítica, porque a experiência
          visual no IMAX 3D é inreplicável em casa. A versão doméstica em Disney+ é
          tecnicamente impressionante em 4K HDR, mas perde a dimensão tátil que o 3D
          nativo em tela de 26 metros oferece.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">✓ Pontos Positivos</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• CGI de água mais realista já produzido para cinema</li>
              <li>• Captura de performance subaquática inédita</li>
              <li>• Oscar de Melhores Efeitos Visuais (2023)</li>
              <li>• Worldbuilding dos Metkayina com rigor científico</li>
              <li>• Tulkun como personagens com emoção genuína</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">⚠ Considerações</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• Duração extensa de 3h12min</li>
              <li>• Ritmo mais contemplativo que o original</li>
              <li>• Melhor experiência em IMAX 3D — o streaming não replica</li>
              <li>• Requer ter assistido o primeiro Avatar</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Conclusão: Nova Referência Para Simulação de Fluidos no Cinema
        </h2>

        <p>
          Avatar: O Caminho da Água estabeleceu um novo padrão para efeitos visuais aquáticos
          que dificilmente será superado a curto prazo. As técnicas desenvolvidas pela Weta FX —
          especialmente o sistema Splash de simulação de fluidos e a captura de performance
          subaquática — já estão sendo adotadas e adaptadas pela indústria. Para quem se
          interessa por tecnologia de cinema, CGI ou simplesmente pela evolução dos efeitos
          visuais, O Caminho da Água é um estudo obrigatório. Para quem quer se preparar para{" "}
          <Link to="/post/avatar-3-fogo-cinzas-lado-sombrio-pandora" className="text-primary hover:underline">
            Avatar: Fire and Ash
          </Link>
          , é a peça que falta para entender a família Sully e os Metkayina.
        </p>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: Avatar 2 é obra de engenharia — e de amor obsessivo ao detalhe">
        <p>
          Assisti <strong>O Caminho da Água</strong> três vezes no cinema — uma delas em IMAX 3D
          HFR. A tecnologia de fluidos é impressionante de uma forma que vai além do "legal de ver":
          você começa a notar que nunca havia visto água assim num filme antes. Cada onda tem
          comportamento físico real. As cenas subaquáticas com os Metkayina têm a mesma qualidade
          visual de documentários de natureza em 4K filmados no Mar Vermelho.
        </p>
        <p>
          Narrativamente, o filme é mais lento que o primeiro — o segundo ato em Awa'atlu se
          estende além do necessário. Mas a sequência final com o navio naufragando é uma das
          melhores cenas de ação dos últimos 20 anos: física real, tensão real, personagens que
          você se importa em risco real. Cameron não faz filmes; ele constrói universos. O Caminho
          da Água prova que obsessão técnica, quando aliada a uma visão artística clara, pode criar
          algo genuinamente único. O Oscar de Efeitos Visuais foi merecidíssimo.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Avatar: The Way of Water — Box Office Mojo",
            url: "https://www.boxofficemojo.com/title/tt1630029/",
            publisher: "Box Office Mojo / IMDb Pro",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "95th Academy Awards — Oscar de Melhores Efeitos Visuais",
            url: "https://www.oscars.org/oscars/ceremonies/95",
            publisher: "Academy of Motion Picture Arts and Sciences",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Avatar: The Way of Water — IMDb",
            url: "https://www.imdb.com/title/tt1630029/",
            publisher: "IMDb",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "The Visual Effects of Avatar: The Way of Water — VFX Voice",
            url: "https://vfxvoice.com/the-visual-effects-of-avatar-the-way-of-water/",
            publisher: "VFX Voice",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Weta FX — Avatar: The Way of Water breakdown",
            url: "https://www.wetafx.co.nz/",
            publisher: "Weta FX",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "James Cameron on underwater performance capture — American Cinematographer",
            url: "https://ascmag.com/",
            publisher: "American Society of Cinematographers",
            accessedAt: "Janeiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="avatar-caminho-da-agua-fisica-fluidos" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection
        postId="avatar-caminho-da-agua-fisica-fluidos"
        postTitle="Avatar 2: O Caminho da Água — A Revolução em CGI e Simulação de Fluidos"
        category="geek"
      />
    </article>
  );
};

export default AvatarCaminhoDaAgua;
