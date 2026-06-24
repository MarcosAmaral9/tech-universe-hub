import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import { Clock, User, Calendar, Heart, AlertTriangle, Phone, Smile, BarChart3, BookOpen, Shield } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/saude-mental-otaku-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SaudeMentalOtaku2026 = () => {
  useEffect(() => {
    trackArticleRead(
      "saude-mental-cultura-otaku-2026",
      "Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola",
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
            Saúde Mental · Cultura Otaku · Anime · Bem-estar
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Ele Isola
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />13 de Março, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="otaku" publishedAt="13 de Março, 2026" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="Saúde mental e cultura otaku — quando o anime ajuda e quando isola, recursos e análise"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          A <strong>saúde mental e a cultura otaku</strong> têm uma relação mais complexa do que os extremos sugerem. Anime salvou vidas — não é exagero. Obras como A Silent Voice, March Comes in Like a Lion e Violet Evergarden ajudaram pessoas a nomearem e processarem traumas que não sabiam como expressar. Ao mesmo tempo, para alguns, o mergulho intenso na ficção se tornou uma forma de evitar o mundo real de maneiras que custaram caro. Este artigo explora os dois lados com empatia e baseado em evidências — sem julgamentos, sem romantizações.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Heart className="h-7 w-7 text-otaku" />
          Como o Anime Pode Contribuir Positivamente para a Saúde Mental
        </h2>
        <p>
          Pesquisas publicadas em revistas como <strong>Frontiers in Psychology</strong> e <strong>Journal of Mental Health Counseling</strong> exploram o uso terapêutico de narrativas de anime — em particular obras que abordam temas de saúde mental com profundidade. Terapeutas em programas voltados a adolescentes e jovens adultos frequentemente citam A Silent Voice (Koe no Katachi) e March Comes in Like a Lion como pontos de entrada para discussões sobre depressão e isolamento.
        </p>
        <p>
          Os mecanismos pelos quais o anime pode ajudar incluem:
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            { mecan: "❤️ Identificação e validação emocional", desc: "A sensação de 'esse personagem sente o que eu sinto' tem valor terapêutico real. Para adolescentes que se sentem incompreendidos, ver representação emocional genuína — a ansiedade de Naho em Orange, a depressão de Rei em March Comes in Like a Lion — pode ser o primeiro passo para nomear e aceitar os próprios sentimentos." },
            { mecan: "🤝 Comunidade e pertencimento", desc: "Os laços formados em torno de interesses compartilhados são socialmente genuínos. Amizades feitas em convenções, grupos de Discord ou fóruns de anime são reais — e para pessoas com dificuldades de socialização, podem ser a principal fonte de conexão humana significativa." },
            { mecan: "🎨 Sublimação criativa", desc: "O anime inspira cosplay, fanfic, fanart, análises, doujinshi. Canais criativos que emergem da paixão por anime oferecem saídas saudáveis para energia emocional que, sem esses meios, poderia não ter onde ir." },
            { mecan: "🧘 Escape saudável e regulação emocional", desc: "Assistir anime como forma de descanso e descompressão é funcionalmente equivalente a ler ficção ou ver filmes. O problema não é o escapismo em si — é quando ele se torna a única estratégia de regulação emocional disponível." },
          ].map(({ mecan, desc }) => (
            <div key={mecan} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-1 text-otaku">{mecan}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="not-prose my-6 bg-card rounded-xl border border-otaku/30 p-5">
          <h3 className="font-bold text-otaku mb-3">📺 Animes que abordam saúde mental com profundidade</h3>
          <div className="space-y-2">
            {[
              { titulo: "A Silent Voice (Koe no Katachi)", tema: "Bullying, surdez, culpa, depressão, ideação suicida", abordagem: "Uma das representações mais honestas e não glamorizadas de depressão no anime" },
              { titulo: "March Comes in Like a Lion", tema: "Depressão severa, isolamento, família, propósito", abordagem: "Rei Kiriyama é uma das representações mais realistas de depressão em mídia popular" },
              { titulo: "Violet Evergarden", tema: "TEPT, reintegração pós-guerra, emoções, luto", abordagem: "Explora trauma de guerra e reconstrução emocional com delicadeza rara" },
              { titulo: "Welcome to the NHK", tema: "Hikikomori, paranoia social, automedicação, isolamento", abordagem: "Retrato honesto e desconfortável do isolamento social — não romantizado" },
              { titulo: "Your Lie in April", tema: "Luto, trauma, música como cura, relacionamentos", abordagem: "Catártico mas com aviso: pode intensificar emoções pesadas para quem está em vulnerabilidade" },
            ].map(({ titulo, tema, abordagem }) => (
              <div key={titulo} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="font-bold text-xs text-otaku">{titulo}</p>
                <p className="text-xs text-muted-foreground"><span className="font-bold">Temas:</span> {tema}</p>
                <p className="text-xs text-muted-foreground italic">{abordagem}</p>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-yellow-500" />
          Sinais de Alerta: Quando o Escape Saudável Vira Fuga Disfuncional
        </h2>
        <p>
          Existe uma diferença importante — e às vezes sutil — entre <strong>escapismo saudável</strong> (usar a ficção para descansar e recarregar) e <strong>fuga disfuncional</strong> (usar a ficção para evitar problemas reais que precisam ser enfrentados). O primeiro é adaptativo; o segundo pode agravar situações que pediam ação.
        </p>
        <p>
          O fenômeno <strong>hikikomori</strong> (reclusão social extrema, documentado clinicamente no Japão pelo National Counseling Center) tem paralelos em outras culturas. Não é causado pelo anime — mas o consumo excessivo pode ser tanto sintoma quanto fator que facilita a manutenção do isolamento, porque reduz o desconforto de curto prazo sem resolver as causas.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
          {[
            {
              label: "✅ Consumo Saudável",
              items: [
                "Assiste anime como lazer com horários delimitados",
                "Mantém relacionamentos reais além da comunidade online",
                "Usa anime como complemento — não substituto — de vida social",
                "Consegue pausar o consumo quando há responsabilidades",
                "Discute e critica obras com perspectiva crítica",
                "A ficção inspira mas não substitui metas reais",
              ]
            },
            {
              label: "⚠️ Sinais de Atenção",
              items: [
                "Privação de sono recorrente para maratonar conteúdo",
                "Abandono de hobbies ou amizades não relacionados a anime",
                "Relacionamentos fictícios (waifus/husbandos) substituem completamente busca por conexão real",
                "Recusa de saída de casa por mais de 2 semanas consecutivas",
                "Consumo como única forma de lidar com ansiedade ou tristeza",
                "Dificuldade de funcionar quando sem acesso ao conteúdo",
              ]
            }
          ].map(({ label, items }) => (
            <div key={label} className="bg-card rounded-xl border border-otaku/20 p-4">
              <h3 className="font-bold text-sm mb-2">{label}</h3>
              <ul className="space-y-1">
                {items.map((item) => <li key={item} className="text-xs text-muted-foreground">• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Phone className="h-7 w-7 text-otaku" />
          Recursos de Apoio à Saúde Mental no Brasil
        </h2>
        <p>
          Se você ou alguém que você conhece está passando por um momento difícil, os recursos abaixo oferecem apoio gratuito e acessível:
        </p>

        <div className="not-prose my-6 bg-card rounded-xl border-2 border-otaku/40 p-5">
          <h3 className="font-bold text-lg mb-3 text-otaku">🆘 Onde buscar ajuda</h3>
          <div className="space-y-3">
            {[
              { recurso: "📞 CVV — Centro de Valorização da Vida", contato: "188 (ligação gratuita, 24h) ou cvv.org.br (chat)", desc: "Atendimento gratuito por voluntários treinados. Sigiloso. Disponível 24 horas por dia, 7 dias por semana." },
              { recurso: "🏥 CAPS — Centro de Atenção Psicossocial", contato: "Busque pelo CAPS mais próximo em cnes.datasus.gov.br", desc: "Atendimento psicológico e psiquiátrico gratuito pelo SUS. Para casos que precisam de acompanhamento clínico continuado." },
              { recurso: "💻 Psicoterapia Online", contato: "Plataformas como Zenklub, Vittude e Terapia Para Todos", desc: "Plataformas de terapia online tornaram o acesso mais democrático com preços por escala social e terapeutas especializados em saúde mental de jovens." },
            ].map(({ recurso, contato, desc }) => (
              <div key={recurso} className="border-b border-border pb-2 last:border-0 last:pb-0">
                <p className="font-bold text-xs text-otaku">{recurso}</p>
                <p className="text-xs font-bold">{contato}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Buscar ajuda é um ato de coragem, não fraqueza. Alguns dos personagens de anime mais amados são justamente os que reconhecem que não podem carregar tudo sozinhos — e pedem ajuda.
          </p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Shield className="h-7 w-7 text-otaku" />
          A Questão do Tempo de Tela: O Que a Ciência Diz
        </h2>
        <p>
          A <strong>Organização Mundial da Saúde (OMS)</strong> classificou o "transtorno por uso de jogos" (gaming disorder) no CID-11 desde 2019. Embora o transtorno de uso de streaming não tenha classificação equivalente, os critérios de disfuncionalidade são similares: o consumo compulsivo que prejudica funcionamento social, profissional ou acadêmico e que a pessoa não consegue controlar mesmo querendo.
        </p>
        <p>
          A <strong>American Academy of Pediatrics (AAP)</strong> recomenda para adolescentes acima de 13 anos: consistência em horário de dormir, manutenção de atividade física e pelo menos 1 hora de atividade offline por dia além das obrigações escolares. Não há limite rígido de horas de tela para adultos — o critério é se o consumo está interferindo em áreas importantes da vida.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Smile className="h-7 w-7 text-otaku" />
          Cultivando uma Relação Saudável com a Cultura Otaku
        </h2>
        <p>
          A cultura otaku em seu melhor é sobre paixão compartilhada, criatividade e comunidade. Não há nada inerentemente problemático em amar anime profundamente. As práticas que ajudam a manter essa relação saudável:
        </p>
        <ul>
          <li><strong>Mantenha pelo menos um hobby com contato físico</strong> com pessoas — convenção, clube de mangá, grupo de cosplay.</li>
          <li><strong>Reserve horários específicos para anime</strong> — isso aumenta o prazer e reduz o consumo ansioso/compulsivo.</li>
          <li><strong>Permita-se criticar obras que ama</strong> — é sinal de maturidade cultural, não de deslealdade a uma franquia.</li>
          <li><strong>Se um personagem ou arco te afeta intensamente</strong>, use isso como informação — às vezes o que ressoa tanto está dizendo algo sobre sua própria vida que merece atenção.</li>
          <li><strong>Monitore o padrão de sono</strong> — maratonar até as 3h da manhã ocasionalmente é diferente de estruturalmente privar-se de sono por conteúdo.</li>
        </ul>

        
        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#128149;</span>
          Identidade Otaku e Pertencimento: O Aspecto Social Positivo
        </h2>
        <p>
          Um dos aspectos mais subestimados da cultura otaku é sua função de <strong>comunidade de pertencimento</strong>. Para adolescentes e jovens adultos que se sentem fora de lugar em grupos sociais convencionais, encontrar pessoas que compartilham a mesma paixão por um anime ou mangá específico pode ser a primeira experiência de pertencimento genuíno. Esse fenômeno é documentado em pesquisas de psicologia social: interesses compartilhados criam conexões que transcendem diferenças de classe, geografia e background.
        </p>
        <p>
          No Brasil, grupos de Discord específicos por franquia, comunidades no Reddit e grupos de convenção funcionam como espaços onde identidades que seriam marginalizadas em ambientes escolares ou de trabalho são celebradas. O cosplayer que gasta meses confeccionando uma fantasia complexa e recebe reconhecimento genuíno na Anime Friends está vivenciando uma forma de validação social que raramente encontra em outros contextos. Esse reconhecimento tem valor psicológico real — não é trivial descartá-lo como "fuga da realidade".
        </p>
        <p>
          A pesquisa de <strong>Itō Gō</strong> (Tezuka Is Dead, 2005) e estudos subsequentes sobre fandom japonês apontam que engajamento profundo com ficção — incluindo anime — pode desenvolver capacidade de empatia ao expor o leitor/espectador a perspectivas de vida radicalmente diferentes. A série <em>A Silent Voice</em>, ao representar surdez, bullying e ideação suicida com nuances raramente vistas em animação mainstream, criou um ponto de entrada para conversas que muitos jovens não conseguiriam iniciar de outra forma.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#9888;</span>
          O Fenômeno Hikikomori: Contexto e Diferenciação
        </h2>
        <p>
          O termo <strong>hikikomori</strong> (引きこもり — literalmente "recolhimento") foi cunhado pelo psiquiatra japonês <strong>Tamaki Saitō</strong> em seu livro de 1998 para descrever um fenômeno clínico: reclusão social severa onde o indivíduo se isola completamente de interações fora de casa por meses ou anos. O <strong>Ministério da Saúde, Trabalho e Bem-Estar do Japão</strong> estima mais de 1,4 milhão de hikikomori no Japão em 2023 — um número que cresceu durante a pandemia de COVID-19.
        </p>
        <p>
          É crucial distinguir <strong>preferência por introversão</strong> (que é normal e saudável) de <strong>isolamento disfuncional</strong> (que é um problema clínico). Alguém que prefere passar fins de semana em casa assistindo anime em vez de sair para festas não é hikikomori — é introvertido com preferências claras. O hikikomori clínico envolve sofrimento, incapacidade de funcionar nas atividades necessárias da vida, e duração prolongada (meses a anos). A associação automática entre "gosta de anime" e "hikikomori" é um preconceito que a comunidade otaku enfrenta injustamente.
        </p>
        <p>
          O anime <em>Welcome to the NHK</em> (2006, baseado no romance de Tatsuhiko Takimoto) é uma das representações mais honestas e não-romantizadas do hikikomori na ficção japonesa. Satou, o protagonista, não é tratado com condescendência nem com glamorização — a série mostra a realidade do isolamento com desconforto deliberado, incluindo as consequências financeiras, relacionais e de saúde. Para quem tem interesse em entender o fenômeno sem experiência direta, é um ponto de partida mais honesto do que a maioria dos artigos jornalísticos sobre o assunto.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <span className="h-7 w-7 text-otaku text-2xl">&#127774;</span>
          Bem-Estar Digital: Como Manter uma Relação Saudável com o Consumo de Anime
        </h2>
        <p>
          Em 2026, o debate sobre bem-estar digital amadureceu além das generalizações "tela é ruim" — pesquisadores como <strong>Amy Orben</strong> e <strong>Andrew Przybylski</strong> (Oxford Internet Institute) publicaram estudos demonstrando que o impacto do tempo de tela em saúde mental é pequeno e altamente dependente do contexto. O que importa não é quanto tempo você passa em tela, mas <em>como</em> você passa esse tempo e com quais consequências para outras áreas da vida.
        </p>
        <p>
          Para anime especificamente, a distinção prática é entre <strong>consumo intencional</strong> (escolher títulos que você genuinamente quer assistir, no ritmo que funciona para sua vida) e <strong>consumo ansioso</strong> (fazer binge por compulsão ou por medo de ficar "para trás" nas discussões da comunidade). O primeiro é enriquecedor; o segundo é a forma de consumo que mais frequentemente contribui para problemas de sono e procrastinação. Desligar notificações de spoilers, criar listas de "assistir depois" e aceitar que você nunca vai ver tudo são estratégias que a comunidade mais experiente usa para manter o prazer no consumo de anime a longo prazo.
        </p>

      <EditorialTake category="otaku" title="Análise do Marcos: a relação entre cultura otaku e saúde mental é dupla — e isso é normal">
        <p>
          Estudos publicados em <em>Frontiers in Psychology</em> e <em>Journal of Mental Health Counseling</em> exploram o uso terapêutico do anime — e a OMS classifica gaming disorder no CID-11 desde 2019. Esses dados coexistem sem se contradizer porque a relação entre cultura otaku e saúde mental é genuinamente dupla: pode ser refúgio terapêutico (comunidade, identificação, sublimação criativa) ou catalisador de isolamento quando substitui completamente relações sociais e atividades no mundo físico.
        </p>
        <p>
          Sinais de alerta que merecem atenção profissional: privação de sono recorrente, abandono de amigos e hobbies não relacionados, recusa de saída de casa por mais de duas semanas. O <strong>CVV</strong> (188, gratuito, 24h) e os <strong>CAPS do SUS</strong> são os recursos mais acessíveis no Brasil. Procure ajuda antes de virar quadro grave — não porque gostar de anime seja o problema, mas porque você merece apoio quando está difícil, independente de qual seja a causa.
        </p>
      </EditorialTake>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center not-prose">
          <h3 className="text-xl font-bold mb-2">Como o anime impactou sua vida? 💜</h3>
          <p className="text-muted-foreground">Conta nos comentários — com respeito e empatia. Cada história importa. 👇</p>
        </div>
      </div>

      <ArticleSources category="otaku"
        sources={[
          {
            title: "CVV — Centro de Valorização da Vida (188)",
            url: "https://www.cvv.org.br/",
            publisher: "CVV",
            accessedAt: "Março 2026"
          },
          {
            title: "OMS — CID-11: Gaming Disorder",
            url: "https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder",
            publisher: "Organização Mundial da Saúde",
            accessedAt: "Março 2026"
          },
          {
            title: "Ministério da Saúde — CAPS (Centros de Atenção Psicossocial)",
            url: "https://www.gov.br/saude/pt-br",
            publisher: "Ministério da Saúde do Brasil",
            accessedAt: "Março 2026"
          },
          {
            title: "Frontiers in Psychology — pesquisas sobre anime e saúde mental",
            url: "https://www.frontiersin.org/journals/psychology",
            publisher: "Frontiers in Psychology",
            accessedAt: "Março 2026"
          },
          {
            title: "American Academy of Pediatrics — Media Use e saúde de adolescentes",
            url: "https://www.aap.org/en/patient-care/media-and-children/",
            publisher: "American Academy of Pediatrics",
            accessedAt: "Março 2026"
          },
          {
            title: "National Counseling Center Japan — dados sobre hikikomori",
            url: "https://www.hikikomori.ne.jp/",
            publisher: "National Counseling Center (Japão)",
            accessedAt: "Março 2026"
          },
        ]}
      />

      <RelatedPosts currentSlug="saude-mental-cultura-otaku-2026" />
      <CommentSection postId="saude-mental-cultura-otaku-2026" postTitle="Saúde Mental e Cultura Otaku: Quando o Anime Ajuda e Quando Isola"  category="otaku" />
    </article>
  );
};

export default SaudeMentalOtaku2026;
