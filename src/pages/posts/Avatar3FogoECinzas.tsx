import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import { Clock, User, Calendar, Flame, Skull, Mountain, Swords, Target, Film, Users, Globe, Star } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import ArticleSources from "@/components/ArticleSources";
import EditorialTake from "@/components/EditorialTake";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterSignup from "@/components/NewsletterSignup";
import avatarFireImg from "@/assets/avatar-fire.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const Avatar3FogoECinzas = () => {

  useEffect(() => {
    trackArticleRead("avatar-3-fogo-cinzas-lado-sombrio-pandora", "Avatar 3: Fire and Ash — Ash People, Enredo e Tudo que Sabemos", "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" portalPath="/geek/avatar" portalLabel="Painel Avatar" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Avatar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Avatar 3: Fire and Ash — Ash People, Enredo, Elenco e Tudo que Sabemos Sobre o Terceiro Filme
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            VICIO&lt;CODE&gt;
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            24 de Janeiro, 2026
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            10 min de leitura
          </span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="24 de Janeiro, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={avatarFireImg}
          alt="Avatar 3: Fire and Ash — Ash People de Pandora em regiões vulcânicas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Lançado em <strong>19 de dezembro de 2025</strong>, <strong>Avatar: Fire and Ash</strong>
          é o terceiro filme da franquia dirigida por <strong>James Cameron</strong> e o capítulo
          que finalmente apresenta o lado sombrio de Pandora. A estreia confirmou o que Cameron
          havia prometido nas entrevistas: os <strong>Ash People</strong> (Povo das Cinzas) são
          a tribo Na'vi mais moralmente complexa da série, habitam regiões vulcânicas e não são
          aliados automáticos da família Sully. Fire and Ash é o filme mais ousado da trilogia.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-orange-500/10 to-background rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-400" />
            Informações Confirmadas sobre Avatar: Fire and Ash
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div><strong>Título:</strong> Avatar: Fire and Ash</div>
            <div><strong>Lançamento:</strong> 19 de dezembro de 2025</div>
            <div><strong>Diretor:</strong> James Cameron</div>
            <div><strong>Nova tribo:</strong> Ash People (Povo das Cinzas)</div>
            <div><strong>Ambiente:</strong> Regiões vulcânicas de Pandora</div>
            <div><strong>Distribuidora:</strong> 20th Century Studios / Disney</div>
            <div><strong>Elenco principal:</strong> Sam Worthington, Zoe Saldana</div>
            <div><strong>Retornos:</strong> Sigourney Weaver, Kate Winslet</div>
            <div><strong>Novidades:</strong> Michelle Yeoh, Oona Chaplin</div>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Flame className="h-7 w-7 text-orange-400" />
          A Estratégia de Filmagem Simultânea de Cameron
        </h2>

        <p>
          Uma das decisões mais incomuns da produção de Avatar foi filmar os três primeiros filmes
          em blocos simultâneos. Cameron confirmou publicamente que Avatar 2 e Avatar 3 foram
          gravados ao mesmo tempo, entre 2017 e 2020, com uma segunda fase de filmagens em 2021
          e 2022. Isso foi feito por duas razões práticas: garantir que os atores jovens —
          especialmente os filhos de Jake Sully, vividos por crianças reais — envelheceriam de
          forma coerente entre os filmes, e maximizar a eficiência logística de uma produção
          que envolve sets enormes, captura de performance e equipes globais.
        </p>

        <p>
          Essa abordagem significa que, quando Avatar: O Caminho da Água estreou em dezembro de
          2022, grande parte de Fire and Ash já estava filmada. O trabalho de pós-produção —
          efeitos visuais, renderização CGI e montagem final — é o que exigiu mais tempo entre
          os dois lançamentos.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Skull className="h-7 w-7 text-orange-400" />
          Os Ash People: A Tribo Mais Complexa de Pandora
        </h2>

        <p>
          James Cameron descreveu os <strong>Ash People</strong> como uma tribo Na'vi que
          evoluiu em um ambiente completamente diferente das tribos apresentadas anteriormente.
          Enquanto os <strong>Omaticaya</strong> vivem nas florestas densas e os{" "}
          <strong>Metkayina</strong> habitam os recifes e oceanos de Pandora, os Ash People
          desenvolveram sua cultura em torno de vulcões ativos, terrenos de lava solidificada
          e atmosferas de cinzas. Isso moldou uma filosofia de vida radicalmente diferente:
          para eles, a destruição e a renovação são ciclos naturais a serem aceitos, não combatidos.
        </p>

        <p>
          A importância narrativa dos Ash People é que eles questionam a visão romantizada de
          Pandora que os dois primeiros filmes estabeleceram. <strong>Nem todo Na'vi venera
          Eywa da mesma forma</strong>, nem todo habitante de Pandora é aliado instintivo da
          família Sully. Cameron antecipou em entrevistas que os Ash People representam um
          dos conflitos morais mais desafiadores da franquia — porque suas razões para agir
          são compreensíveis dentro da lógica do mundo que habitam.
        </p>

        <div className="my-8 p-6 bg-gradient-to-br from-red-500/10 to-background rounded-xl border border-red-500/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔥 O Que Diferencia os Ash People das Tribos Anteriores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-bold">Tribo</th>
                  <th className="text-left py-2 px-3 font-bold">Habitat</th>
                  <th className="text-left py-2 px-3 font-bold">Filosofia</th>
                  <th className="text-left py-2 px-3 font-bold">Relação com Sully</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium">Omaticaya</td>
                  <td className="py-2 px-3 text-muted-foreground">Floresta bioluminescente</td>
                  <td className="py-2 px-3 text-muted-foreground">Harmonia com Eywa</td>
                  <td className="py-2 px-3 text-muted-foreground">Clã de Jake — aliados</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 px-3 font-medium">Metkayina</td>
                  <td className="py-2 px-3 text-muted-foreground">Recifes e oceanos</td>
                  <td className="py-2 px-3 text-muted-foreground">Fluxo da água e das marés</td>
                  <td className="py-2 px-3 text-muted-foreground">Acolheram a família em Avatar 2</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Ash People</td>
                  <td className="py-2 px-3 text-muted-foreground">Regiões vulcânicas e cinzas</td>
                  <td className="py-2 px-3 text-muted-foreground">Destruição como renovação</td>
                  <td className="py-2 px-3 text-muted-foreground">Antagonistas complexos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-orange-400" />
          Elenco: Retornos e Novas Adições
        </h2>

        <AdInArticle />

        <p>
          O elenco principal de Fire and Ash mantém os pilares da franquia e adiciona nomes
          relevantes que expandem o universo narrativo.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">Elenco Principal Confirmado</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Sam Worthington — Jake Sully</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Ex-fuzileiro naval que se tornou líder dos Omaticaya. Em Fire and Ash enfrenta
              a complexidade de defender Pandora contra ameaças que vêm de dentro do próprio
              planeta, não apenas dos humanos.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Zoe Saldana — Neytiri</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Caçadora dos Omaticaya e parceira de Jake. Seus valores profundamente enraizados
              na tradição Na'vi são postos à prova quando confrontada com tribos que têm
              visões opostas sobre o papel de Eywa.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Sigourney Weaver — Kiri</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Filha adotiva de Jake e Neytiri, com uma conexão inexplicável com Eywa.
              Sua origem misteriosa continua sendo um dos fios narrativos centrais
              da trilogia.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Stephen Lang — Coronel Quaritch</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O principal antagonista humano retorna em avatar Na'vi reconstruído,
              com memórias do Quaritch original e um papel ainda central na ameaça
              que os humanos representam para Pandora.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Kate Winslet — Ronal</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Líder espiritual dos Metkayina, cujo papel se expande em Fire and Ash
              conforme as alianças entre tribos se tornam necessárias para enfrentar
              as novas ameaças.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-2">Michelle Yeoh — Nova personagem</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Vencedora do Oscar por Tudo em Todo Lugar ao Mesmo Tempo, Michelle Yeoh
              entra na franquia em Fire and Ash em papel ainda não detalhado pela produção.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mountain className="h-7 w-7 text-orange-400" />
          Regiões Vulcânicas: O Novo Desafio Visual da Weta FX
        </h2>

        <p>
          Cada filme de Avatar introduziu um novo desafio computacional para a Weta FX
          (antiga Weta Digital). No original de 2009, o desafio foi criar vegetação
          bioluminescente e personagens digitais com captura de performance facial.
          Em O Caminho da Água (2022), foi a <strong>simulação de fluidos</strong> em escala
          sem precedentes — atores de captura de performance subaquática, ondas com física
          real e cenas que levavam dias para renderizar.
        </p>

        <p>
          Em <strong>Fire and Ash</strong>, o desafio é fogo, lava, cinzas e partículas em
          ambientes hostis. Simular fogo fotorealista em CGI continua sendo um dos problemas
          mais difíceis da computação gráfica — ao contrário da água, que tem propriedades
          físicas bem modeladas matematicamente, o fogo é um fenômeno de combustão que
          envolve variáveis de temperatura, oxigênio, material em chamas e convecção de ar
          que tornam a simulação computacionalmente cara e visualmente complexa.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-border">
            <Flame className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Simulação de Fogo e Lava</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Representação fotorrealista de magma, lava solidificando em tempo real e
              partículas de cinza com física de fluido quente — desafio técnico que a
              Weta FX começou a desenvolver durante a produção de Avatar 2.
            </p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <Swords className="h-8 w-8 text-orange-400 mb-3" />
            <h4 className="font-bold mb-2">Combate Na'vi vs Na'vi</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Pela primeira vez na franquia, combates diretos entre tribos Na'vi diferentes
              com armas, animais montados e técnicas de luta distintas por origem cultural —
              um novo conjunto de animações e sistemas de captura de performance.
            </p>
          </div>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-orange-400" />
          O Arco de Quaritch: A Maior Aposta Narrativa
        </h2>

        <p>
          Uma das decisões mais arriscadas de Cameron foi ressuscitar o Coronel Miles Quaritch
          — o antagonista humano do primeiro Avatar, morto por Neytiri no clímax do filme —
          como um avatar Na'vi em O Caminho da Água. Essa versão de Quaritch tem o corpo
          genético de um Na'vi com as memórias do Quaritch humano original gravadas em sua
          mente, criando um personagem que é simultaneamente humano em psicologia e Na'vi
          em biologia.
        </p>

        <p>
          Em O Caminho da Água, Quaritch passou parte do filme desenvolvendo uma relação
          involuntária com Spider, o filho humano de Jake Sully criado em Pandora —
          revelando camadas de humanidade que o vilão unidimensional do primeiro filme
          não tinha. Fire and Ash continua esse arco com Quaritch em posição ambígua:
          nem herói, nem simplesmente vilão, mas um personagem em conflito entre o
          que foi programado para fazer e o que está gradualmente se tornando.
        </p>

        <div className="my-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Linha do Tempo da Franquia Avatar</h3>
          <ul className="space-y-3 text-muted-foreground mb-0">
            <li>
              <strong>Avatar (2009)</strong> — Jake Sully chega a Pandora, aprende com os
              Omaticaya, une-se a Neytiri e lidera a resistência contra a mineração humana.
              Quaritch é morto por Neytiri.
            </li>
            <li>
              <strong>Avatar: O Caminho da Água (2022)</strong> — Família Sully foge para os
              Metkayina após Quaritch retornar como avatar Na'vi. Lo'ak desenvolve vínculo
              com um tulkun. Spider descobre que Quaritch é seu pai biológico.
            </li>
            <li>
              <strong>Avatar: Fire and Ash (2025)</strong> — Encontro com os Ash People,
              conflitos internos entre tribos Na'vi, Quaritch em arco de redenção ambíguo.
            </li>
            <li>
              <strong>Avatar 4 e Avatar 5</strong> — Produção confirmada, datas a anunciar.
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-orange-400" />
          Bilheteria e Recepção de Fire and Ash
        </h2>

        <p>
          Avatar: Fire and Ash estreou em 19 de dezembro de 2025 com expectativas elevadas.
          O Caminho da Água havia arrecadado <strong>US$ 2,32 bilhões</strong> mundialmente
          apesar de revisões mistas, confirmando que a franquia Avatar mantém poder de
          atração de público independentemente da recepção crítica. Fire and Ash entrou nas
          salas com a franquia estabelecida, o personagem dos Ash People amplamente antecipado
          e a promessa de uma narrativa mais escura e moralmente complexa que os dois
          filmes anteriores.
        </p>

        <p>
          Para o público brasileiro, Avatar: Fire and Ash está disponível nas principais
          redes de cinema em versões 2D, 3D e IMAX 3D. A experiência em IMAX com 3D nativo
          continua sendo a forma recomendada de assistir — Cameron filma especificamente
          para esse formato, com enquadramentos e profundidade de campo que só fazem sentido
          completo em telas gigantes.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Star className="h-7 w-7 text-orange-400" />
          Como Assistir à Franquia Avatar em 2026
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-card rounded-xl border border-green-500/30">
            <h4 className="font-bold mb-2 text-green-400">Para Novos Espectadores</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• Comece pelo{" "}
                <Link to="/post/avatar-2009-filme-revolucionou-tecnologia" className="text-primary hover:underline">
                  Avatar original de 2009
                </Link>
              </li>
              <li>• Em seguida,{" "}
                <Link to="/post/avatar-caminho-da-agua-fisica-fluidos" className="text-primary hover:underline">
                  O Caminho da Água (2022)
                </Link>
              </li>
              <li>• Fire and Ash (2025) — este filme</li>
              <li>• Experiência ideal: Disney+ para os dois primeiros</li>
            </ul>
          </div>
          <div className="p-5 bg-card rounded-xl border border-orange-500/30">
            <h4 className="font-bold mb-2 text-orange-400">Onde Assistir</h4>
            <ul className="text-sm text-muted-foreground space-y-1 mb-0">
              <li>• <strong>Cinemas:</strong> Fire and Ash em cartaz (2D, 3D, IMAX)</li>
              <li>• <strong>Disney+:</strong> Avatar 1 e Avatar 2 em 4K HDR</li>
              <li>• <strong>Blu-ray 4K:</strong> Avatar 1 e 2 com áudio Dolby Atmos</li>
              <li>• Fire and Ash chegará ao streaming após janela de exibição</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Conclusão: Fire and Ash É o Mais Corajoso da Franquia?
        </h2>

        <p>
          Avatar: Fire and Ash representa a maior aposta narrativa de James Cameron desde o
          original de 2009. Ao introduzir antagonistas Na'vi com motivações compreensíveis,
          continuar o arco de redenção de Quaritch e explorar visualmente um Pandora que vai
          além da natureza idílica, Cameron demonstra que a franquia tem mais a dizer do que
          simplesmente escalar os efeitos visuais a cada filme.
        </p>

        <p>
          Se Fire and Ash confirmar as promessas feitas nas entrevistas pré-lançamento, será
          o Avatar que a crítica especializada estava esperando — um filme de ficção científica
          que usa a tecnologia não como substituto para a narrativa, mas como amplificador dela.
          Os próximos dois filmes da franquia já estão em desenvolvimento, e o caminho narrativo
          que Fire and Ash abre determinará se Pandora continua sendo o maior universo do cinema
          mundial ou se a franquia começa a perder tração.
        </p>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: Fire and Ash aposta no lado sombrio — uma escolha corajosa">
        <p>
          Depois de <strong>O Caminho da Água</strong> focar nos Metkayina aquáticos com uma
          narrativa que muitos críticos acharam longa demais, James Cameron está introduzindo
          em <strong>Fire and Ash</strong> o elemento que faltava nos dois primeiros filmes:
          <strong> conflito moral interno</strong>. Os Ash People não são vilões no sentido
          tradicional — são uma tribo que desenvolveu valores radicalmente diferentes por
          viver em um ambiente radicalmente diferente. Isso é worldbuilding real, não apenas
          criação de inimigos para justificar batalhas.
        </p>
        <p>
          O desafio de Cameron é manter o impacto emocional com uma audiência que conhece o
          universo há 15+ anos. A aposta no arco de redenção de Quaritch parece certa —
          ele foi o único personagem de Avatar 2 que cresceu narrativamente de forma
          genuína. Se Fire and Ash conseguir equilibrar a escala visual com a profundidade
          emocional que os Ash People prometem, pode ser o melhor filme da franquia. Mas
          se cair na armadilha de usar a nova tribo apenas como ameaça superficial para
          justificar efeitos visuais, perderá a oportunidade de fazer algo realmente
          único no cinema de blockbuster.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "Avatar: Fire and Ash — IMDb",
            url: "https://www.imdb.com/title/tt1630029/",
            publisher: "IMDb",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Avatar: The Way of Water — Box Office Mojo (bilheteria de referência)",
            url: "https://www.boxofficemojo.com/title/tt1630029/",
            publisher: "Box Office Mojo / IMDb Pro",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "James Cameron on Avatar 3 — entrevista à Variety",
            url: "https://variety.com/2022/film/news/avatar-way-of-water-james-cameron-avatar-3-fire-ash-1235451882/",
            publisher: "Variety",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Avatar franchise — Box Office Mojo",
            url: "https://www.boxofficemojo.com/franchise/fr3189534761/",
            publisher: "Box Office Mojo / IMDb Pro",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Avatar 3 cast confirmed — Deadline Hollywood",
            url: "https://deadline.com/",
            publisher: "Deadline Hollywood",
            accessedAt: "Janeiro 2026",
          },
          {
            title: "Weta FX — Avatar productions overview",
            url: "https://www.wetafx.co.nz/",
            publisher: "Weta FX",
            accessedAt: "Janeiro 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug="avatar-3-fogo-cinzas-lado-sombrio-pandora" />
      <NewsletterSignup variant="modal" categories={["geek"]} showAfterMs={60000} />
      <CommentSection
        postId="avatar-3-fogo-cinzas-lado-sombrio-pandora"
        postTitle="Avatar 3: Fire and Ash — Ash People, Enredo, Elenco e Tudo que Sabemos"
        category="geek"
      />
    </article>
  );
};

export default Avatar3FogoECinzas;
