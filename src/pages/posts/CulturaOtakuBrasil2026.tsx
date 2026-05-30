import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Globe, TrendingUp, Users, Mic, BarChart3, BookOpen, Zap } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/cultura-otaku-brasil-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const CulturaOtakuBrasil2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "cultura-otaku-brasil-2026",
      "Cultura Otaku no Brasil 2026: Como Virou uma das Maiores Comunidades do Mundo",
      "otaku"
    );
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="otaku" />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="otaku" size="lg" />
          <span className="px-3 py-1 bg-otaku/20 text-otaku rounded-full text-sm font-medium">
            Cultura Otaku · Brasil · Mercado · Convenções
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Cultura Otaku no Brasil 2026: Como o País Virou uma das Maiores Comunidades do Mundo
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />07 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="07 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Cultura otaku no Brasil 2026 — história, mercado, convenções e comunidade brasileira de anime e mangá"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A <strong>cultura otaku no Brasil</strong> atingiu em 2026 um patamar que poucos imaginavam possível nos anos 1990: o país é hoje o <strong>segundo maior mercado de mangá fora do Japão</strong>, tem mais de 1.500 lojas especializadas em funcionamento e reúne mais de 120 mil pessoas na maior convenção de anime da América Latina. De Cavaleiros do Zodíaco no SBT para simulcast no mesmo dia do Japão — esta é a história de como a cultura otaku brasileira cresceu, se profissionalizou e se tornou referência global.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-otaku" />
          Os Anos 90: O Começo de Tudo no Brasil
        </h2>
        <p>
          Tudo começa em 1994. O <strong>Cavaleiros do Zodíaco</strong> (Saint Seiya) estreia no SBT em horário nobre e provoca algo que a televisão brasileira raramente vê: crianças correndo para casa para não perder o episódio. A série foi o grande divisor de águas — o primeiro anime a cruzar de nicho para cultura popular no Brasil, com audiência que superava muitos programas locais.
        </p>
        <p>
          Na sequência, <strong>Dragon Ball Z</strong> no Cartoon Network e <strong>Sailor Moon</strong> na Rede Manchete completaram a tríade inicial. A TV a cabo, ainda cara na época, tornou-se item de desejo entre fãs específicos que queriam acesso a mais títulos. Nas bancas de jornal, a <strong>Editora Conrad</strong> e depois a <strong>JBC</strong> começaram a publicar mangás traduzidos, criando um mercado editorial onde antes havia apenas importações japonesas a preços inacessíveis.
        </p>
        <p>
          O fã brasileiro desse período construiu sua paixão com recursos escassos — revistas importadas, VHS gravados, e uma rede de amizades onde compartilhar material era praticamente moeda social. Essa escassez criou um tipo de fã diferente: comprometido, aprofundado e extremamente leal às franquias que descobria.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/20 p-5">
          <h3 className="font-bold text-otaku mb-3">📺 Os primeiros animes que moldaram a cultura otaku brasileira</h3>
          <div className="space-y-2">
            {[
              { ano: "1994", titulo: "Cavaleiros do Zodíaco (Saint Seiya)", canal: "SBT", impacto: "Primeiro anime mainstream — gerou a primeira geração de otakus brasileiros" },
              { ano: "1996", titulo: "Dragon Ball Z", canal: "Cartoon Network", impacto: "Consolidou o gênero shonen no Brasil — Goku virou ícone cultural nacional" },
              { ano: "1997", titulo: "Sailor Moon", canal: "Rede Manchete", impacto: "Introduziu as meninas ao anime e diversificou o público fã" },
              { ano: "1999", titulo: "Pokémon", canal: "SBT/Record", impacto: "Conectou anime ao merchandising em escala nunca vista no Brasil" },
              { ano: "2001", titulo: "Yu-Gi-Oh! e Naruto (início)", canal: "SBT/Cartoon", impacto: "Segunda geração — internet já presente, primeiras comunidades online" },
            ].map(({ ano, titulo, canal, impacto }) => (
              <div key={titulo} className="grid grid-cols-[60px_1fr] gap-3 border-b border-border pb-2 last:border-0 last:pb-0">
                <span className="font-bold text-otaku text-xs pt-0.5">{ano}</span>
                <div>
                  <p className="font-bold text-xs">{titulo} <span className="text-muted-foreground font-normal">· {canal}</span></p>
                  <p className="text-xs text-muted-foreground">{impacto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-otaku" />
          A Virada dos Anos 2000: Internet, Fansubs e Comunidade
        </h2>
        <p>
          A virada do milênio trouxe a internet discada — e com ela, uma revolução silenciosa na cultura otaku brasileira. Os <strong>fansubs</strong> (traduções amadoras feitas por grupos de fãs voluntários) quebraram a barreira geográfica: títulos que nunca chegariam ao mercado oficial brasileiro estavam disponíveis em semanas após o lançamento no Japão.
        </p>
        <p>
          Grupos como o <strong>Dattebayo</strong> internacionalmente e vários grupos brasileiros especializados criaram um pipeline informal de localização que, ironicamente, formou os profissionais de tradução que trabalham hoje nas grandes plataformas de streaming. Muitos tradutores da Crunchyroll, Netflix e Funimation Brasil têm histórico em fansubs nos anos 2000.
        </p>
        <p>
          Em 2003, surge a <strong>Anime Friends</strong> em São Paulo — o que começou como um encontro modesto de fãs se tornaria, duas décadas depois, a maior convenção de anime da América Latina. A CCXP (Comic-Con Experience), fundada em 2012, incorporou o universo otaku em sua programação e passou a atrair delegações japonesas de produtoras e editoras que reconheceram o potencial do mercado brasileiro.
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <TrendingUp className="h-7 w-7 text-otaku" />
          O Mercado Brasileiro em 2026: Números que Impressionam
        </h2>
        <p>
          A cultura otaku no Brasil em 2026 deixou de ser nicho para se tornar indústria consolidada. Os números falam por si:
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { valor: "1.500+", desc: "Lojas especializadas em anime, mangá e merchandise em todo o Brasil" },
            { valor: "120 mil", desc: "Pessoas na Anime Friends 2025 — maior convenção de anime da América Latina" },
            { valor: "2º lugar", desc: "Brasil é o 2º maior mercado de mangá fora do Japão em volume de vendas" },
            { valor: "Top 5", desc: "Brasil entre os maiores mercados de anime por streaming per capita" },
          ].map(({ valor, desc }) => (
            <div key={valor} className="bg-card rounded-xl border border-otaku/30 p-4 text-center">
              <p className="text-2xl font-bold text-otaku mb-1">{valor}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p>
          As editoras <strong>Panini Comics</strong>, <strong>JBC</strong>, <strong>Newpop</strong> e <strong>Pipoca & Nanquim</strong> publicam centenas de títulos com o modelo de <strong>simulpublication</strong> — lançamento simultâneo com o Japão — que chegou ao mangá brasileiro e reduziu drasticamente a pirataria de volumes físicos. O leitor brasileiro não precisa mais esperar anos para ter o volume em português na prateleira.
        </p>
        <p>
          O mercado de <strong>merchandise</strong> — figuras, funko pops, roupas, acessórios — cresceu exponencialmente. A quantidade de lojas especializadas em São Paulo, Rio de Janeiro e nas capitais regionais reflete uma demanda que não existia em escala há uma década. A Shopee e o Mercado Livre têm categorias dedicadas inteiramente a produto otaku com milhões de listagens.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BarChart3 className="h-7 w-7 text-otaku" />
          Convenções: O Coração da Comunidade Presencial
        </h2>
        <p>
          As convenções são o termômetro mais fiel da saúde da cultura otaku no Brasil. O calendário de eventos em 2026 é robusto — com eventos de porte em praticamente todos os estados, não apenas nos grandes centros:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { evento: "🏆 Anime Friends (São Paulo — julho)", desc: "A maior. 120+ mil pessoas, guests internacionais, arena de competições de cosplay, área de jogos, estandes de editoras e estúdios. Funciona como a Comic-Con do universo otaku brasileiro." },
            { evento: "🎪 CCXP (São Paulo — novembro/dezembro)", desc: "Não é exclusivamente otaku, mas tem uma das maiores alas de anime e mangá do mundo. Presença de delegações japonesas de estúdios como Mappa, Ufotable e Toei. Atrai 270+ mil visitantes." },
            { evento: "🎌 AnimeON (múltiplas cidades)", desc: "Formato itinerante que leva eventos menores para cidades do interior e regiões Norte e Nordeste — democratizando o acesso à comunidade presencial fora dos grandes centros." },
            { evento: "🎮 Brasil Game Show + Anime (São Paulo — outubro)", desc: "A integração games + anime reflete a sobreposição crescente das duas culturas. Muitos dos jogos mais populares são baseados em franquias de anime." },
          ].map(({ evento, desc }) => (
            <div key={evento} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-otaku">{evento}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic className="h-7 w-7 text-otaku" />
          O Otaku Brasileiro como Criador de Conteúdo
        </h2>
        <p>
          O Brasil é o país com mais criadores de conteúdo sobre anime e mangá em português no YouTube — e o volume de produção no TikTok e Instagram ultrapassa o de países como França e Espanha. Isso não é coincidência: o brasileiro tem alta propensão a criar e compartilhar conteúdo, e o universo otaku oferece material inesgotável para análise, humor, edits e teoria.
        </p>
        <p>
          Canais como <strong>Jovem Nerd</strong> (que tem o anime como uma de suas principais verticais), dezenas de canais de análise de mangá e os criadores de cosplay com seguidores internacionais colocam o Brasil no mapa como produtor de cultura otaku — não apenas consumidor. Essa inversão é relativamente recente e se acelerou com o TikTok a partir de 2020.
        </p>
        <p>
          O <strong>cosplay brasileiro</strong> tem reputação internacional: competidores nacionais ganham prêmios nos maiores torneios japoneses há anos, com um nível técnico de confecção de fantasias que rivaliza com qualquer país. Isso reflete tanto o talento artístico local quanto a profissionalização progressiva da atividade — que hoje é carreira para centenas de pessoas no Brasil.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-otaku" />
          Streaming e a Nova Era do Fã Brasileiro
        </h2>
        <p>
          O acesso ao anime no Brasil passou por três fases distintas: TV aberta/a cabo nos anos 90–2000, fansubs e download nos anos 2000–2015, e streaming legal desde 2016. A Crunchyroll se estabeleceu como principal plataforma com simulcast legendado em português no mesmo dia do Japão — eliminando o principal argumento da pirataria: a espera.
        </p>
        <p>
          Em 2026, o debate no Brasil não é mais sobre "baixar ou assistir legal" — é sobre qual plataforma assinar. Crunchyroll para o volume principal, Netflix para exclusividades como Oshi no Ko, e Prime Video para alguns títulos pontuais. A competição entre plataformas beneficia diretamente o fã com qualidade de legendas crescente e preços razoáveis no contexto nacional.
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/20 p-5">
          <h3 className="font-bold text-otaku mb-3">🎌 O Futuro da Cultura Otaku no Brasil</h3>
          <div className="space-y-2 text-sm">
            {[
              { tendencia: "Animes originais brasileiros", desc: "Produtoras nacionais já têm projetos em desenvolvimento com estúdios japoneses. O primeiro anime original co-produzido Brasil-Japão pode sair até 2028." },
              { tendencia: "Integração mainstream", desc: "A geração que cresceu com anime nos anos 2000 está hoje em posições de criação de conteúdo, mídia e publicidade — acelerando a integração da estética otaku no mainstream brasileiro." },
              { tendencia: "Mercado de luxo otaku", desc: "Figuras de colecionador de alta qualidade, roupas de grife com colaborações de franquias e experiências exclusivas de fãs estão criando um segmento premium dentro da comunidade." },
              { tendencia: "Educação pelo anime", desc: "Cursos de japonês baseados em anime, análise literária de mangás em universidades e uso de animes como ferramenta pedagógica estão crescendo significativamente." },
            ].map(({ tendencia, desc }) => (
              <div key={tendencia} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="font-bold text-xs text-otaku">{tendencia}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <EditorialTake category="otaku" title="Análise do Marcos: o Brasil otaku que o Japão não esperava">
          <p>
            Cresci assistindo Cavaleiros do Zodíaco escondido porque minha família achava que anime "era coisa de criança". Hoje minha sobrinha de 8 anos tem uma estante cheia de mangás e meu cunhado de 45 anos assiste One Piece com ela. <strong>Essa travessia geracional é o dado mais importante da cultura otaku brasileira</strong> — ela deixou de ser identidade de nicho para ser parte da cultura pop geral.
          </p>
          <p>
            O que o Japão não esperava era a força criativa do fã brasileiro. Os cosplayers, os YouTubers, os dubladores amadores que depois viraram profissionais — o Brasil não apenas consumiu a cultura otaku, mas a reprocessou com identidade própria. Quando um fansub brasileiro dos anos 2000 traduzia Naruto com gírias cariocas, estava criando algo novo. <strong>Em 2026, esse espírito criativo é a razão do Brasil ser reconhecido globalmente como uma potência otaku.</strong>
          </p>
        </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Qual foi seu primeiro contato com a cultura otaku? 🎌</h3>
          <p className="text-muted-foreground">Conta nos comentários — Cavaleiros do Zodíaco? Dragon Ball? Naruto? Cada história é diferente! 👇</p>
        </div>
      </div>

      <ArticleSources
        sources={[
          {
            title: "Anime Industry Report 2024 — Association of Japanese Animations",
            url: "https://aja.gr.jp/english/japan-anime-data",
            publisher: "AJA — Association of Japanese Animations",
            accessedAt: "Março 2026"
          },
          {
            title: "Anime Friends — história e dados oficiais do evento",
            url: "https://www.animefriends.com.br/",
            publisher: "Anime Friends",
            accessedAt: "Março 2026"
          },
          {
            title: "Panini Brasil — catálogo de mangás e editorial",
            url: "https://panini.com.br/",
            publisher: "Panini Comics Brasil",
            accessedAt: "Março 2026"
          },
          {
            title: "JBC — Editora de mangás e light novels no Brasil",
            url: "https://www.jbc.com.br/",
            publisher: "JBC Editora",
            accessedAt: "Março 2026"
          },
          {
            title: "CCXP — Brasil Comic-Con Experience: dados de audiência",
            url: "https://www.ccxp.com.br/",
            publisher: "CCXP",
            accessedAt: "Março 2026"
          },
          {
            title: "Crunchyroll Brasil — catálogo e simulcast em português",
            url: "https://www.crunchyroll.com/pt-br/",
            publisher: "Crunchyroll",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="cultura-otaku-brasil-2026" />
      <CommentSection postId="cultura-otaku-brasil-2026" postTitle="Cultura Otaku no Brasil 2026: Como Virou uma das Maiores Comunidades do Mundo" />
    </article>
  );
};

export default CulturaOtakuBrasil2026;
