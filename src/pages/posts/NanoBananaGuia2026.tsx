import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdLeaderboard, AdInArticle, AdRectangle } from "@/components/AdSense";
import { Building2, Calendar, CheckCircle2, Clock, CreditCard, HelpCircle, History, Layers, ShieldCheck, Sparkles, User } from "lucide-react";
import heroImg from "@/assets/nano-banana-google-guia-2026.webp";

const SLUG = "nano-banana-google-guia-completo-2026";
const TITLE = "Nano Banana: A História Completa da IA de Imagens do Google — Versões, Criadores, Planos e Quem Usa";

const VERSOES = [
  { data: "Ago 2025", nome: "Nano Banana", tecnico: "Gemini 2.5 Flash Image", destaque: "Edição por texto, consistência de personagens e mistura de várias fotos. Virou febre e trouxe mais de 10 milhões de novos usuários ao Gemini." },
  { data: "Nov 2025", nome: "Nano Banana Pro", tecnico: "Gemini 3 Pro Image", destaque: "Baseado no Gemini 3 Pro: texto legível dentro da imagem, infográficos, resolução até 4K e mais controle de luz e câmera." },
  { data: "Fev 2026", nome: "Nano Banana 2", tecnico: "Gemini 3.1 Flash Image", destaque: "Qualidade próxima do Pro com velocidade Flash e uso de resultados da busca do Google para imagens mais fiéis." },
  { data: "Out 2026", nome: "Nano Banana 2.1", tecnico: "gemini-nano-banana-2.1", destaque: "Melhor design visual, edição por máscara, consistência de pessoas e objetos e imagens mais naturais." },
];

const PLANOS = [
  { plano: "Sem custo", preco: "R$ 0", obs: "Acesso ao Nano Banana no app Gemini com limite diário menor." },
  { plano: "Google AI Plus", preco: "R$ 24,99/mês", obs: "Mais gerações por dia e 200 GB de armazenamento." },
  { plano: "Google AI Pro", preco: "R$ 96,99/mês", obs: "Acesso ampliado aos modelos mais avançados, incluindo o Nano Banana Pro." },
  { plano: "Google AI Ultra 5x", preco: "R$ 779,90/mês", obs: "Limites 5 vezes maiores que o Pro." },
  { plano: "Google AI Ultra 20x", preco: "R$ 999,90/mês", obs: "Limites 20 vezes maiores que o Pro." },
];

const FAQ = [
  { q: "O que é o Nano Banana?", a: "É o nome popular dos modelos de geração e edição de imagens do Gemini, criados pelo Google DeepMind. O primeiro, de agosto de 2025, tem o nome técnico Gemini 2.5 Flash Image." },
  { q: "Quem criou o nome Nano Banana?", a: "Segundo o Google, a gerente de produto Naina Raisinghani sugeriu o nome por volta das 2h30 da manhã, quando a equipe precisava de um codinome para testar o modelo de forma anônima no LMArena." },
  { q: "Quem é o dono do Nano Banana?", a: "O Google, que pertence à Alphabet. O desenvolvimento é do Google DeepMind, laboratório de IA da empresa." },
  { q: "O Nano Banana é gratuito?", a: "Sim, dá para usar sem pagar no app Gemini, com limite diário. Os planos Google AI Plus (R$ 24,99), Pro (R$ 96,99) e Ultra (a partir de R$ 779,90) aumentam os limites." },
  { q: "Quanto custa usar o Nano Banana pela API?", a: "O primeiro modelo custava US$ 0,039 por imagem. O Nano Banana Pro custa cerca de US$ 0,134 por imagem em 1K/2K e US$ 0,24 em 4K. Os preços podem mudar; confira a página oficial." },
  { q: "Quais outras ferramentas usam o Nano Banana?", a: "Além dos produtos do Google, a Adobe integrou os modelos ao Firefly, ao Adobe Express e ao Preenchimento Generativo do Photoshop. Desenvolvedores também o usam pela API do Gemini e pelo Vertex AI." },
  { q: "Como saber se uma imagem foi feita pelo Nano Banana?", a: "As imagens recebem a marca d'água invisível SynthID, do Google. O próprio app Gemini permite verificar se uma imagem tem essa marca." },
];

const NanoBananaGuia2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">Imagens · Google · Gemini</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          De um codinome inventado de madrugada a uma das IAs de imagem mais usadas do mundo: a evolução do Nano Banana, quem criou, quem é o dono, quanto custa no Brasil e quais ferramentas já trabalham com ele.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />27 de outubro de 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <AuthorBio />
        <ShareWhatsApp title={TITLE} />
      </header>

      <figure className="mb-8">
        <img src={heroImg} alt="Banana estilizada feita de luz flutuando sobre uma mesa de designer cercada por fotos editadas" className="w-full rounded-xl" width={1600} height={900} fetchPriority="high" />
        <figcaption className="text-xs text-muted-foreground mt-2">Ilustração criada para este artigo. Não é imagem oficial do Google.</figcaption>
      </figure>

      <div className="prose prose-invert prose-lg max-w-none [&_p]:mb-6">
        <p>Em agosto de 2025, a internet foi tomada por bonecos colecionáveis em caixinhas, fotos antigas restauradas e selfies trocando de cenário com uma naturalidade que poucas ferramentas conseguiam. Por trás dessa onda estava um modelo com nome técnico pouco chamativo, Gemini 2.5 Flash Image, mas que todo mundo passou a chamar por um apelido bem mais fácil de lembrar: Nano Banana.</p>
        <p>Pouco mais de um ano depois, o Nano Banana virou uma família inteira de modelos, ganhou versões Pro, 2 e 2.1, entrou no Photoshop e se tornou uma das portas de entrada mais importantes para o app Gemini. Neste guia, reunimos o que está confirmado em fontes oficiais sobre a história, as versões, os donos, os preços em reais e quem já usa a tecnologia. Onde não há número oficial, dizemos isso com clareza.</p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-3"><Sparkles className="h-7 w-7 text-ia" />O que é o Nano Banana</h2>
        <p>Nano Banana é o nome que o Google usa para os recursos nativos de geração e edição de imagens do Gemini. Na documentação para desenvolvedores, a empresa define o termo exatamente assim: o nome dado à capacidade do Gemini de criar e processar imagens de forma conversacional, a partir de texto, fotos ou vídeos. Na prática, você descreve o que quer, envia uma foto se quiser, e vai pedindo ajustes como se conversasse com um designer.</p>
        <p>O que diferenciou o modelo desde o início foram três coisas. A primeira é a consistência: o rosto de uma pessoa ou o visual de um personagem continua o mesmo em várias imagens, algo que outras ferramentas erravam muito. A segunda é a edição local por texto: dá para pedir "troque o fundo", "mude a cor da camisa" ou "tire a pessoa do canto" sem refazer a imagem inteira. A terceira é a mistura de várias fotos numa só cena, com luz e perspectiva coerentes.</p>

        <h2 className="flex items-center gap-3"><History className="h-7 w-7 text-ia" />Como surgiu o nome</h2>
        <p>A história do nome foi contada pelo próprio Google em janeiro de 2026. No fim de julho de 2025, a equipe preparava o lançamento do modelo e já tinha o nome técnico definido. Faltava um codinome público para o LMArena, plataforma em que pessoas comparam, às cegas, imagens de dois modelos diferentes e votam na melhor. Esses codinomes servem justamente para esconder qual empresa está por trás de cada modelo durante os testes.</p>
        <p>Por volta das 2h30 da manhã, a gerente de produto Naina Raisinghani recebeu um pedido urgente para sugerir um nome. Ela propôs "Nano Banana", em tom de brincadeira, e a ideia foi aprovada na hora. No LMArena, o modelo misterioso começou a vencer as comparações, os usuários ficaram curiosos e o apelido se espalhou nas redes antes mesmo do anúncio oficial. Quando o Google revelou que era o Gemini 2.5 Flash Image, o nome já tinha pegado, e a empresa decidiu abraçá-lo, inclusive com o emoji de banana nas páginas oficiais.</p>

        <h2 className="flex items-center gap-3"><Layers className="h-7 w-7 text-ia" />A evolução, versão por versão</h2>
        <p>A tabela abaixo resume as versões lançadas até outubro de 2026, com base nos anúncios do Google, do Google DeepMind e da documentação da API do Gemini.</p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-xl">
            <thead className="bg-ia/10"><tr><th className="p-3 text-left">Data</th><th className="p-3 text-left">Versão</th><th className="p-3 text-left">Nome técnico</th><th className="p-3 text-left">O que trouxe</th></tr></thead>
            <tbody>
              {VERSOES.map((v) => (
                <tr key={v.nome} className="border-t border-border"><td className="p-3 whitespace-nowrap">{v.data}</td><td className="p-3 font-bold text-ia">{v.nome}</td><td className="p-3">{v.tecnico}</td><td className="p-3">{v.destaque}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-ia">Nano Banana (agosto de 2025)</h3>
        <p>O primeiro modelo foi lançado em 26 de agosto de 2025 no app Gemini, na API do Gemini, no Google AI Studio e no Vertex AI. Em poucos dias, Josh Woodward, vice-presidente responsável pelo app Gemini, informou que mais de 200 milhões de imagens tinham sido editadas e que mais de 10 milhões de pessoas usando o Nano Banana eram novas no Gemini. Foi um dos maiores sucessos de adoção da história recente do Google em IA.</p>
        <p>Esse primeiro modelo, porém, já foi aposentado para desenvolvedores: a documentação da API informa que o Gemini 2.5 Flash Image foi descontinuado e teve desligamento marcado para 2 de outubro de 2026, com orientação para migrar para as versões 3.1.</p>

        <h3 className="text-ia">Nano Banana Pro (novembro de 2025)</h3>
        <p>Em 20 de novembro de 2025 chegou o Nano Banana Pro, com nome técnico Gemini 3 Pro Image. Ele usa o raciocínio e o conhecimento de mundo do Gemini 3 Pro para criar imagens que exigem precisão: infográficos, diagramas, cartazes com texto legível em vários idiomas e cenas com controle de ângulo de câmera, foco e iluminação. Foi o modelo que tornou o texto dentro da imagem confiável, um ponto fraco histórico das IAs de imagem.</p>

        <AdInArticle />

        <h3 className="text-ia">Nano Banana 2 (fevereiro de 2026)</h3>
        <p>Em 26 de fevereiro de 2026 o Google lançou o Nano Banana 2, ou Gemini 3.1 Flash Image. A proposta foi entregar qualidade próxima do Pro com a velocidade da linha Flash. Uma novidade importante é o uso de informações e imagens da busca do Google em tempo real, o que ajuda em materiais educativos, marketing local e apps de viagem. O Google passou a recomendar o Pro para tarefas de máxima fidelidade e o 2 para geração rápida.</p>

        <h3 className="text-ia">Nano Banana 2.1 (outubro de 2026)</h3>
        <p>A versão mais recente foi anunciada em 6 de outubro de 2026. Segundo o Google DeepMind, o Nano Banana 2.1 supera os modelos anteriores em design visual, traz edição por máscara (você marca a área exata que quer alterar), melhora a consistência de pessoas e objetos e gera imagens com aparência mais natural. Na página do Gemini, ele aparece como o modelo de imagem mais avançado dos planos pagos, enquanto o uso gratuito continua disponível com limites.</p>

        <h2 className="flex items-center gap-3"><Building2 className="h-7 w-7 text-ia" />Quem criou e quem é o dono</h2>
        <p>O Nano Banana foi desenvolvido pelo Google DeepMind, o laboratório de inteligência artificial do Google, liderado por Demis Hassabis, ganhador do Nobel de Química de 2024. O Google, por sua vez, pertence à Alphabet, empresa de capital aberto listada na Nasdaq. Ou seja: o Nano Banana não é uma startup separada nem tem donos próprios; é um produto do Google, e qualquer pessoa que compra ações da Alphabet passa a ter uma fração minúscula da empresa que o controla.</p>
        <p>Além de Naina Raisinghani, ligada à origem do nome, o Google cita publicamente executivos como Josh Woodward, do app Gemini, na divulgação dos números de uso. A empresa não divulga uma lista completa dos pesquisadores responsáveis por cada versão, por isso não atribuímos créditos individuais além desses.</p>

        <h2 className="flex items-center gap-3"><CreditCard className="h-7 w-7 text-ia" />Quanto custa no Brasil</h2>
        <p>Para o usuário comum, o Nano Banana fica dentro do app Gemini e dos planos de IA do Google. Os preços abaixo são os da página oficial do Google para o Brasil em outubro de 2026; os limites exatos de imagens por dia podem mudar e variam por modelo.</p>
        <div className="not-prose grid gap-4 md:grid-cols-2 my-6">
          {PLANOS.map((p) => (
            <div key={p.plano} className="p-5 rounded-xl border border-ia/30 bg-gradient-to-br from-ia/10 to-background">
              <p className="font-display font-bold text-ia">{p.plano}</p>
              <p className="text-2xl font-bold my-1">{p.preco}</p>
              <p className="text-sm text-foreground/90">{p.obs}</p>
            </div>
          ))}
        </div>
        <p>Para desenvolvedores e empresas, a cobrança é por uso, em dólar. No lançamento, o Gemini 2.5 Flash Image custava US$ 30 por milhão de tokens de saída, com cada imagem equivalendo a 1.290 tokens, ou seja, US$ 0,039 por imagem. O Nano Banana Pro custa cerca de US$ 0,134 por imagem em 1K ou 2K e US$ 0,24 em 4K. Com o dólar perto de R$ 5,50, isso dá aproximadamente R$ 0,21, R$ 0,74 e R$ 1,32 por imagem; o valor real depende do câmbio do dia, dos impostos e da tabela vigente, que o Google pode alterar.</p>

        <h2 className="flex items-center gap-3"><Building2 className="h-7 w-7 text-ia" />Quanto vale a marca Nano Banana</h2>
        <p>Não existe valor oficial de marca para o Nano Banana. O Google não separa a receita do modelo nos resultados da Alphabet, e as consultorias que fazem rankings de marcas avaliam o Google como um todo, não produtos individuais. Qualquer número que circule por aí atribuindo bilhões ao Nano Banana sozinho é estimativa sem base pública.</p>
        <p>O que dá para medir é o impacto. Os números divulgados pelo Google mostram que o primeiro modelo trouxe mais de 10 milhões de novos usuários ao Gemini em poucos dias e gerou centenas de milhões de edições. O nome também se tornou tão forte que a empresa o manteve em todas as versões seguintes, em vez de usar só os nomes técnicos, algo raro no Google. Na prática, o valor do Nano Banana está em atrair pessoas para o ecossistema Gemini e para os planos pagos.</p>

        <AdRectangle />

        <h2 className="flex items-center gap-3"><Layers className="h-7 w-7 text-ia" />Quais outras IAs e ferramentas usam o Nano Banana</h2>
        <p>Dentro do Google, o Nano Banana aparece no app Gemini e na plataforma de desenvolvimento, com acesso pela API do Gemini, pelo Google AI Studio e pelo Vertex AI, além da plataforma corporativa Gemini Enterprise. Isso permite que qualquer empresa integre a geração de imagens no próprio produto.</p>
        <p>Fora do Google, o parceiro mais visível é a Adobe. No mesmo dia do lançamento, em agosto de 2025, a Adobe anunciou o modelo no Firefly e no Adobe Express. Em setembro, ele entrou no Preenchimento Generativo do Photoshop beta, ao lado dos modelos da própria Adobe e do FLUX.1 Kontext. Em novembro, o Nano Banana Pro chegou ao Firefly e ao Photoshop no dia do lançamento, e depois o Nano Banana 2 também foi incluído. Outras plataformas e aplicativos usam o modelo pela API, mas listamos aqui apenas as integrações que conferimos em anúncios oficiais.</p>

        <h2 className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-ia" />Segurança, direitos autorais e LGPD</h2>
        <p>Todas as imagens criadas ou editadas pelos modelos Nano Banana recebem o SynthID, uma marca d'água digital invisível desenvolvida pelo Google DeepMind. O app Gemini permite enviar uma imagem e perguntar se ela foi gerada com IA do Google. Isso ajuda, mas não resolve tudo: a marca só identifica conteúdo do Google, e prints ou edições pesadas podem dificultar a detecção.</p>
        <p>No Brasil, editar a foto de outra pessoa sem autorização pode violar o direito de imagem previsto no Código Civil, e a foto de rosto é dado pessoal protegido pela LGPD. Montagens que enganam ou expõem alguém podem gerar responsabilidade civil e até criminal. Para uso comercial, confira os termos do Google e não use marcas, personagens ou obras de terceiros sem licença.</p>

        <h2 className="flex items-center gap-3"><CheckCircle2 className="h-7 w-7 text-ia" />Dicas para pedir imagens melhores</h2>
        <div className="not-prose my-8 p-6 rounded-xl border border-ia/30 bg-gradient-to-br from-ia/10 to-background">
          <ul className="space-y-2 text-sm">
            {[
              "Descreva a cena como um fotógrafo: assunto, ambiente, luz, ângulo e lente.",
              "Peça uma alteração por vez nas edições e diga o que deve continuar igual.",
              "Para texto na imagem, escreva a frase exata entre aspas e indique a fonte e a posição.",
              "Envie fotos de referência para manter o mesmo rosto ou produto em várias imagens.",
              "Use o Pro ou o 2.1 para infográficos e cartazes; o 2 para rascunhos rápidos.",
              "Nunca envie fotos de terceiros sem autorização.",
            ].map((i) => <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-ia shrink-0 mt-0.5" />{i}</li>)}
          </ul>
        </div>

        <h2 className="flex items-center gap-3"><HelpCircle className="h-7 w-7 text-ia" />Perguntas frequentes</h2>
        <div className="not-prose grid gap-4 my-6">
          {FAQ.map((f) => (
            <div key={f.q} className="p-5 rounded-xl border border-border bg-card/50">
              <p className="font-bold text-ia mb-2">{f.q}</p>
              <p className="text-sm text-foreground/90">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: a banana que mudou o jogo do Google">
        <p>O Nano Banana é a prova de que nome bom e produto bom juntos fazem milagre. Um apelido inventado de madrugada conseguiu o que anos de marketing não conseguiram: fazer gente comum abrir o Gemini por vontade própria. E o mérito não é só do nome: a consistência de rosto e a edição por texto resolveram dores reais de quem cria conteúdo.</p>
        <p className="mt-2">Meu conselho: comece pelo gratuito, e só pague o AI Pro se você produz imagens toda semana. E respeite a imagem dos outros. A ferramenta é poderosa demais para virar arma de montagem.</p>
      </EditorialTake>
      <ArticleSources category="ia" sources={[
        { title: "How Nano Banana got its name", url: "https://blog.google/products-and-platforms/products/gemini/how-nano-banana-got-its-name/", publisher: "Google", accessedAt: "Outubro 2026" },
        { title: "Introducing Gemini 2.5 Flash Image", url: "https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/", publisher: "Google Developers Blog", accessedAt: "Outubro 2026" },
        { title: "Nano Banana Pro: Gemini 3 Pro Image", url: "https://blog.google/innovation-and-ai/products/nano-banana-pro/", publisher: "Google", accessedAt: "Outubro 2026" },
        { title: "Nano Banana 2: Google's latest AI image generation model", url: "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/", publisher: "Google", accessedAt: "Outubro 2026" },
        { title: "Nano Banana 2.1", url: "https://deepmind.google/models/gemini-image/flash/", publisher: "Google DeepMind", accessedAt: "Outubro 2026" },
        { title: "Gemini Developer API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing", publisher: "Google AI for Developers", accessedAt: "Outubro 2026" },
        { title: "Planos de IA do Google", url: "https://one.google.com/intl/pt-BR_br/about/google-ai-plans/", publisher: "Google One", accessedAt: "Outubro 2026" },
        { title: "Nano Banana responsible for 10+ million first-time Gemini users", url: "https://9to5google.com/2025/09/04/gemini-app-nano-banana/", publisher: "9to5Google", accessedAt: "Outubro 2026" },
        { title: "Adobe Firefly and Adobe Express Now Feature Google's Gemini 2.5 Flash Image Model", url: "https://blog.adobe.com/en/publish/2025/08/26/adobe-firefly-adobe-express-now-feature-googles-gemini-flash-image-model", publisher: "Adobe", accessedAt: "Outubro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default NanoBananaGuia2026;
