import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import {
  Clock, User, Calendar, Film, Smartphone, DollarSign, AlertTriangle, TrendingUp, Eye,
} from "lucide-react";
import heroImg from "@/assets/minidramas-ia-redes-sociais-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "minidramas-ia-redes-sociais-2026";
const TITLE = "O Tsunami de Minidramas Feitos por IA: Como os Vídeos Verticais Tomaram Conta das Redes";

const PLATAFORMAS = [
  {
    nome: "ReelShort",
    tipo: "App dedicado de microdrama",
    monetizacao: "Moedas por episódio, anúncios recompensados e assinatura",
    dado: "Cerca de US$ 1,2 bilhão em gasto bruto de consumidores em 2025, alta de 119% sobre 2024, segundo a Appfigures",
  },
  {
    nome: "DramaBox",
    tipo: "App dedicado de microdrama",
    monetizacao: "Mesmo modelo de moedas, anúncio e passe VIP",
    dado: "Cerca de US$ 276 milhões em gasto de consumidores no mesmo levantamento",
  },
  {
    nome: "Douyin (TikTok chinês)",
    tipo: "Rede social com catálogo de séries curtas",
    monetizacao: "Anúncio, episódios pagos e patrocínio de marca",
    dado: "Ritmo de um novo minidrama gerado por IA a cada 36 segundos, segundo levantamento citado pelo 36Kr",
  },
  {
    nome: "YouTube Shorts",
    tipo: "Vídeo curto vertical",
    monetizacao: "Divisão de receita de anúncio do programa de parceiros",
    dado: "O CEO Neal Mohan tratou publicamente do combate ao \"AI slop\" na carta anual de janeiro de 2026",
  },
  {
    nome: "TikTok",
    tipo: "Vídeo curto vertical",
    monetizacao: "Fundos, live, afiliados e publicidade direta",
    dado: "Desde novembro de 2025 oferece um controle para o usuário reduzir a quantidade de conteúdo de IA no feed",
  },
  {
    nome: "Instagram Reels",
    tipo: "Vídeo curto vertical",
    monetizacao: "Bônus pontuais, publicidade e venda direta do criador",
    dado: "Exige rotulagem de conteúdo gerado por IA nas políticas da Meta",
  },
];

const SINAIS = [
  "Mãos, dedos e orelhas que mudam de formato entre um corte e outro.",
  "Objetos de fundo que aparecem, somem ou trocam de posição sem motivo.",
  "Rostos que perdem consistência quando a personagem vira de perfil.",
  "Textura \"escorregadia\", entre filme e cutscene de videogame, com iluminação sempre perfeita.",
  "Vozes com respiração ausente e entonação uniforme demais para a cena.",
  "Cenários grandiosos incompatíveis com uma produção de orçamento baixo.",
  "Créditos ausentes: nenhum nome de elenco, direção ou produtora.",
];

const MinidramasIARedesSociais2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            IA Generativa · Vídeo · Redes Sociais
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          O Tsunami de Minidramas Feitos por IA: Como os Vídeos Verticais Tomaram Conta das Redes
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Episódios de um minuto, reviravolta a cada quinze segundos e nenhum ator no set. Os
          <strong> minidramas feitos por IA</strong> viraram uma indústria bilionária de vídeo vertical — e também um
          problema de qualidade, direitos de imagem e saturação. Veja os números reais do setor, como funciona a
          monetização, o que as plataformas estão fazendo e como identificar um episódio gerado por inteligência
          artificial.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Parede de telas verticais de celular exibindo cenas dramáticas geradas por inteligência artificial"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ia" />
            O tamanho da onda em números
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Base: reportagens do MIT Technology Review, TechCrunch, WIRED, CNA e 36Kr, além de dados de mercado da
            Appfigures citados nessas publicações.
          </p>
          <div className="space-y-2">
            {[
              { k: "Duração típica de um episódio", v: "1 a 2 minutos" },
              { k: "Gasto de consumidores no ReelShort em 2025", v: "cerca de US$ 1,2 bilhão (+119%)" },
              { k: "Gasto de consumidores no DramaBox em 2025", v: "cerca de US$ 276 milhões" },
              { k: "Novos títulos de minidrama com IA em 6 meses", v: "cerca de 220 mil, segundo o 36Kr" },
              { k: "Ritmo de lançamento no Douyin", v: "um novo título de IA a cada 36 segundos" },
              { k: "Parcela desses títulos operando no prejuízo", v: "cerca de 90%, segundo o mesmo levantamento" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-e" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Film className="h-7 w-7 text-ia" />
          O Que São os Minidramas (e Por Que Eles Funcionam)
        </h2>
        <p>
          O formato nasceu na China por volta de 2018 e tem uma receita rígida: episódios de um a dois minutos, filmados na
          vertical, com um gancho narrativo a cada poucos segundos. As histórias são propositalmente exageradas — herança
          negada, casamento por contrato, chefe arrogante, filho perdido que reaparece no tribunal. A série inteira pode
          ter oitenta episódios e ser consumida em uma tarde.
        </p>
        <p>
          O que sustenta o negócio não é a qualidade, é a estrutura de cobrança. Os primeiros episódios são gratuitos; a
          partir do ponto em que o espectador já está preso na história, cada episódio custa moedas compradas dentro do
          app, um anúncio assistido até o fim ou uma assinatura semanal. A TechCrunch descreveu bem o modelo em janeiro de
          2026: são produções "meio ruins" que faturam bilhões justamente porque o gancho vale mais que a atuação.
        </p>

        <AdInArticle />

        <h2 id="ia-entrou" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Smartphone className="h-7 w-7 text-ia" />
          Onde a IA Entrou — e Por Que Tudo Explodiu
        </h2>
        <p>
          Até 2025, um minidrama ainda exigia elenco, set, câmera e equipe, mesmo que em escala mínima. A partir do momento
          em que os modelos de geração de vídeo passaram a entregar cenas com áudio, continuidade razoável de personagem e
          resolução aceitável para tela de celular, esse custo desabou. O MIT Technology Review documentou, em maio de
          2026, séries inteiras produzidas <strong>sem ator, sem operador de câmera e sem equipe de efeitos</strong>,
          publicadas em apps como DramaWave e ReelShort.
        </p>
        <p>
          O efeito na oferta foi brutal. Um levantamento publicado pelo 36Kr em agosto de 2026 aponta cerca de 220 mil
          novos títulos gerados por IA em seis meses e um ritmo de um lançamento a cada 36 segundos no Douyin, com o número
          de estreias mensais saltando de centenas para dezenas de milhares em um ano. O mesmo levantamento traz o outro
          lado da conta: em torno de 90% desses títulos operam no prejuízo.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-ia/40 bg-ia/5">
          <h3 className="font-bold mb-2 text-ia">Por que 90% perde dinheiro se produzir ficou barato?</h3>
          <p className="text-sm text-muted-foreground mb-0">
            Porque o custo que despencou foi o de produção, não o de distribuição. Em um catálogo com centenas de milhares
            de títulos, o gasto decisivo passou a ser tráfego pago para o episódio 1. Quem não compra audiência não é
            descoberto — e quem compra precisa de uma taxa de conversão para episódio pago alta o bastante para cobrir o
            anúncio. É o mesmo funil de qualquer app, só que com concorrência multiplicada por mil.
          </p>
        </div>

        <AdRectangle />

        <h2 id="plataformas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <DollarSign className="h-7 w-7 text-ia" />
          Onde os Minidramas Circulam e Como Cada Um Ganha Dinheiro
        </h2>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Plataforma</th>
                <th className="p-3 text-left font-bold">Tipo</th>
                <th className="p-3 text-left font-bold">Monetização</th>
                <th className="p-3 text-left font-bold">Dado público</th>
              </tr>
            </thead>
            <tbody>
              {PLATAFORMAS.map((p) => (
                <tr key={p.nome} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{p.nome}</td>
                  <td className="p-3 break-words">{p.tipo}</td>
                  <td className="p-3 break-words">{p.monetizacao}</td>
                  <td className="p-3 text-muted-foreground break-words">{p.dado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Fora dos apps dedicados, o fenômeno migrou para as redes abertas. A WIRED documentou, em 2026, o crescimento de
          melodramas gerados por IA no X, com criadores monetizando engajamento em cima de histórias fabricadas para
          provocar indignação. É o mesmo mecanismo, sem a camada de pagamento por episódio: aqui, quem paga é o anunciante.
        </p>

        <h2 id="problemas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-ia" />
          O Lado Ruim da Enxurrada
        </h2>
        <p>
          <strong>Saturação e "AI slop".</strong> O termo, usado pelo próprio CEO do YouTube em sua carta anual de janeiro
          de 2026, descreve a inundação de vídeo gerado de baixa qualidade. Quando qualquer pessoa consegue publicar
          dezenas de episódios por dia, a moeda escassa deixa de ser o vídeo e passa a ser a atenção.
        </p>
        <p>
          <strong>Direitos autorais e de imagem.</strong> Reportagem da CNA em abril de 2026 registrou a preocupação, na
          própria China, de que os microdramas de IA estejam corroendo direitos autorais e ameaçando o sustento de
          roteiristas, atores e equipes técnicas. Modelos treinados com material protegido e personagens visualmente
          parecidos com pessoas reais estão no centro da disputa.
        </p>
        <p>
          <strong>Rotulagem e desinformação.</strong> Plataformas passaram a exigir identificação de conteúdo sintético, e
          o TikTok chegou a oferecer, desde novembro de 2025, um controle para o usuário reduzir a presença de conteúdo de
          IA no feed. O problema é que histórias apresentadas como relatos reais, em formato de depoimento, borram a
          fronteira entre ficção e fato.
        </p>
        <p>
          <strong>Trabalho.</strong> Em um setor que empregava elenco de baixo custo, figurinistas, técnicos de som e
          editores, a substituição por pipeline automatizado atinge exatamente a base da cadeia — a mesma que servia de
          porta de entrada para quem começava na área.
        </p>

        <AdInArticle />

        <h2 id="identificar" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Eye className="h-7 w-7 text-ia" />
          Como Reconhecer um Minidrama Feito por IA
        </h2>
        <p>
          Nenhum sinal isolado é prova definitiva, mas a combinação de dois ou três costuma resolver a dúvida:
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-border bg-card">
          <ul className="space-y-2 mb-0">
            {SINAIS.map((s) => (
              <li key={s} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-ia font-bold">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>
          Vale acrescentar o teste mais simples de todos: procure a etiqueta. Plataformas maiores exibem um aviso de
          conteúdo gerado por IA quando o criador declara a origem — e a ausência dessa declaração, em um vídeo com os
          sinais acima, já diz bastante sobre quem está publicando.
        </p>

        <h2 id="brasil" className="text-2xl font-bold mt-10 mb-6">O Que Muda para Quem Cria Conteúdo no Brasil</h2>
        <p>
          A primeira consequência prática é a queda da barreira de entrada. Produzir uma série vertical deixou de exigir
          equipe e passou a exigir roteiro, ritmo e capacidade de comprar tráfego. A segunda é menos animadora: a mesma
          queda vale para todo mundo, e o feed brasileiro já compete com catálogos internacionais dublados e legendados
          automaticamente.
        </p>
        <p>
          Para quem quer monetizar, o caminho que continua funcionando é o oposto do volume. Conteúdo com rosto, contexto
          local e autoria verificável se diferencia justamente porque o resto virou commodity. Vale também lembrar das
          regras: publicidade precisa ser identificada conforme o Código de Defesa do Consumidor e as normas do Conar, e
          uso de imagem de pessoa real sem autorização é problema jurídico, não detalhe criativo.
        </p>
        <p>
          Por fim, uma nota sobre monetização de plataforma: programas de parceria de YouTube e afins exigem conteúdo
          original e com valor agregado. Republicar séries geradas em massa, sem trabalho editorial próprio, é justamente o
          tipo de material que as políticas de conteúdo repetitivo tendem a desmonetizar.
        </p>

        <h2 id="faq" className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre Minidramas de IA</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">O que é um minidrama (microdrama)?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              É uma série vertical com episódios de um a dois minutos, feita para celular, com ganchos constantes e
              cobrança por episódio, anúncio ou assinatura. O formato surgiu na China e se espalhou por apps como
              ReelShort e DramaBox.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Minidramas feitos por IA dão dinheiro?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O setor movimenta bilhões — só o ReelShort registrou cerca de US$ 1,2 bilhão em gasto de consumidores em
              2025 —, mas a distribuição é desigual: levantamento do 36Kr aponta que cerca de 90% dos títulos gerados por
              IA operam no prejuízo, porque o custo decisivo migrou da produção para a compra de audiência.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Como saber se um vídeo foi gerado por inteligência artificial?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Observe mãos e orelhas deformadas entre cortes, objetos de fundo inconsistentes, textura entre filme e
              videogame, vozes sem respiração e ausência total de créditos de elenco. A etiqueta de conteúdo sintético da
              plataforma, quando existe, é a confirmação mais rápida.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">As plataformas estão combatendo esse conteúdo?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Parcialmente. O YouTube tratou publicamente do combate ao "AI slop" na carta anual de janeiro de 2026, o
              TikTok oferece desde novembro de 2025 um controle para reduzir conteúdo de IA no feed e a Meta exige
              rotulagem. Nenhuma dessas medidas proíbe o formato — elas regulam rotulagem e alcance.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Usar IA para criar minidramas é legal?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Gerar ficção com IA não é proibido, mas há limites concretos: uso de imagem ou voz de pessoa real sem
              autorização, reprodução de obra protegida e publicidade não identificada geram responsabilidade. A discussão
              sobre direitos autorais no treinamento dos modelos segue aberta em vários países.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o gargalo nunca foi produzir, era ser visto">
        <p>
          O dado que resume esse fenômeno não é o bilhão de dólares do ReelShort nem os 220 mil títulos em seis meses. É a
          combinação dos dois com os 90% de títulos no prejuízo. A IA resolveu com folga o problema mais caro do vídeo —
          filmar — e, ao resolver, empurrou todo o custo para o único lugar que ela não automatiza: a atenção de quem
          assiste. Quando qualquer pessoa consegue lançar uma série por dia, distribuição vira o ativo, não produção.
        </p>
        <p>
          Para o criador brasileiro, isso deveria ser um alívio disfarçado de ameaça. Competir em volume contra pipeline
          automatizado é perda de tempo. O que sobra de valor é justamente o que a máquina não fabrica: contexto local,
          rosto conhecido, apuração e uma voz que o público reconhece em três segundos de scroll. E, como leitor, guarde o
          hábito de checar créditos e etiqueta antes de compartilhar um "relato real" que apareceu no feed — boa parte
          desse tsunami depende exatamente de você não checar.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "How Chinese short dramas became AI content machines",
            url: "https://www.technologyreview.com/2026/05/15/1137326/chinese-short-dramas-ai/",
            publisher: "MIT Technology Review",
            accessedAt: "Agosto 2026",
          },
          {
            title: "TikTok-like microdramas are going to make billions this year, even though they kind of suck",
            url: "https://techcrunch.com/2026/01/23/tiktok-like-microdramas-are-going-to-make-billions-this-year-even-though-they-kind-of-suck/",
            publisher: "TechCrunch",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Rampant AI-Generated Short Dramas: 220,000 New Titles Launched in Half a Year, 90% Operating at a Loss",
            url: "https://eu.36kr.com/en/p/3938564540759430",
            publisher: "36Kr",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Lights, camera, algorithm: China's AI microdramas go viral - but spark copyright fears",
            url: "https://www.channelnewsasia.com/east-asia/china-generative-ai-microdramas-copyright-creative-concerns-6043656",
            publisher: "CNA — Channel NewsAsia",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AI Slop Melodramas Are Taking Over X — and Their Creators Are Cashing In",
            url: "https://www.wired.com/story/ai-slop-melodramas-are-taking-over-x-and-their-creators-are-cashing-in/",
            publisher: "WIRED",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AI Is Rewriting the Vertical Short Drama Industry",
            url: "https://www.real-reel.com/ai-is-rewriting-vertical-drama-microdrama-industry/",
            publisher: "Real Reel — análise de mercado de vertical drama",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default MinidramasIARedesSociais2026;
