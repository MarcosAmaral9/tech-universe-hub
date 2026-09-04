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
  Clock, User, Calendar, Clapperboard, Sparkles, Scale, ListChecks, HelpCircle, Film, Tv,
  History as HistoryIcon, Wrench, Mic,
} from "lucide-react";
import heroImg from "@/assets/ia-filmes-series-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "ia-filmes-series-producoes-reais-2026";
const TITLE = "IA em Filmes e Séries: Como Hollywood Já Usa Inteligência Artificial em Produções Reais";

const PRODUCOES = [
  {
    producao: "O Brutalista (2024)",
    uso: "A ferramenta húngara Respeecher ajustou a pronúncia do húngaro nos diálogos de Adrien Brody e Felicity Jones, misturando a voz dos atores com a do editor de som Dávid Jancsó. A revelação, feita pelo próprio Jancsó, gerou debate na temporada do Oscar 2025.",
    tipo: "Voz / pós-produção",
  },
  {
    producao: "Here (2024)",
    uso: "Robert Zemeckis usou o Metaphysic Live para rejuvenescer Tom Hanks e Robin Wright em tempo real, sem capacetes de captura: os atores viam a versão jovem de si mesmos em monitores no set durante as gravações.",
    tipo: "Rejuvenescimento digital",
  },
  {
    producao: "Invasão Secreta (2023, Disney+)",
    uso: "A abertura da série da Marvel foi gerada com IA pela produtora Method Studios, escolha artística ligada ao tema dos metamorfos Skrull. A decisão causou forte reação negativa de artistas de VFX.",
    tipo: "Abertura gerada por IA",
  },
  {
    producao: "Late Night with the Devil (2023)",
    uso: "O terror australiano usou três imagens estáticas geradas por IA como vinhetas de intervalo. Os diretores confirmaram o uso após pedidos de boicote e disseram que as imagens foram editadas pela equipe.",
    tipo: "Vinhetas / arte promocional",
  },
  {
    producao: "O Eternauta (2025, Netflix)",
    uso: "Ted Sarandos, co-CEO da Netflix, confirmou que uma cena de desabamento de prédio na série argentina usou ferramentas de IA generativa e ficou pronta dez vezes mais rápido do que com VFX tradicional.",
    tipo: "Efeitos visuais",
  },
  {
    producao: "Indiana Jones e a Relíquia do Destino (2023)",
    uso: "A ILM rejuvenesceu Harrison Ford em cenas de flashback usando aprendizado de máquina treinado com o acervo de imagens do ator. É o exemplo de que nem todo uso é IA generativa — a diferença importa no debate.",
    tipo: "De-aging assistido",
  },
];

const ETAPAS = [
  { etapa: "Pré-produção", exemplos: "Análise de roteiros, storyboards gerados, pré-visualização (previs), orçamento e agendamento assistidos." },
  { etapa: "Produção", exemplos: "Cenários virtuais (LED walls), dublês digitais, rejuvenescimento em tempo real, tradução de diálogos no set." },
  { etapa: "Pós-produção", exemplos: "VFX generativos, limpeza de imagem, clonagem e ajuste de voz, upscaling de restauração, legendagem automática." },
  { etapa: "Distribuição", exemplos: "Miniaturas e trailers personalizados, dublagem sintética com sincronia labial, recomendação e marketing segmentado." },
];

const FERRAMENTAS = [
  { nome: "Respeecher", oque: "Conversão de voz: pega a fala de um locutor e a transforma na voz-alvo, preservando a interpretação original.", onde: "O Brutalista (pronúncia do húngaro); recriação da voz de Darth Vader em Obi-Wan Kenobi, com autorização de James Earl Jones." },
  { nome: "Metaphysic Live", oque: "Troca de rosto e rejuvenescimento em tempo real, sem capacete de captura, exibindo o resultado no monitor do set.", onde: "Here (2024), com Tom Hanks e Robin Wright." },
  { nome: "ILM Flux / de-aging", oque: "Rejuvenescimento por aprendizado de máquina treinado no acervo do próprio ator, com supervisão artística quadro a quadro.", onde: "O Irlandês (2019) e Indiana Jones e a Relíquia do Destino (2023)." },
  { nome: "Flawless TrueSync", oque: "Reanima os lábios do ator para casar com o diálogo de outro idioma ou com falas regravadas.", onde: "Usada para versões alternativas de diálogo e localização; virou referência em 'dublagem visual'." },
  { nome: "Sonantic", oque: "Síntese de voz a partir de gravações de arquivo do próprio ator, com controle de emoção.", onde: "Top Gun: Maverick (2022), reconstruindo a voz de Val Kilmer. Empresa adquirida pelo Spotify." },
  { nome: "Runway / Sora / Veo", oque: "Geração de vídeo a partir de texto ou imagem — o grupo mais polêmico, por causa dos dados de treinamento.", onde: "Parceria Lionsgate–Runway (2024) para um modelo treinado no catálogo licenciado do estúdio." },
];

const IAFilmesSeries2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Cinema · Streaming · VFX
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          IA em Filmes e Séries: Como Hollywood Já Usa Inteligência Artificial em Produções Reais
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Não é mais futuro: <strong>IA em filmes e séries</strong> já aparece em produções indicadas ao Oscar, em
          séries da Marvel e da Netflix e em blockbusters rejuvenescendo astros em tempo real. Reunimos os casos
          confirmados, o que cada ferramenta faz, onde fica a linha entre ajuda e substituição — e o que as greves
          de 2023 mudaram para sempre.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />3 de Setembro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={1280}
          height={720}
          src={heroImg}
          alt="Câmera de cinema em tripé com esfera holográfica de rede neural flutuando acima, letreiro de cinema apagado e rolos de filme no chão"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            Resumo rápido
          </h2>
          <div className="space-y-2">
            {[
              { k: "Onde a IA já atua", v: "voz, rejuvenescimento, VFX, aberturas, dublagem e marketing" },
              { k: "Caso mais famoso", v: "O Brutalista e o uso do Respeecher nos diálogos em húngaro" },
              { k: "Caso confirmado de streaming", v: "O Eternauta (Netflix) usou IA generativa numa cena de VFX" },
              { k: "Regra sindical", v: "acordos SAG-AFTRA e WGA de 2023 exigem consentimento e compensação" },
              { k: "O que ainda não existe", v: "um longa-metragem comercial gerado 100% por IA" },
            ].map((item) => (
              <div key={item.k} className="flex gap-2 text-sm md:text-base">
                <span className="font-semibold text-geek min-w-40">{item.k}:</span>
                <span>{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-geek" />
          Antes de tudo: nem toda IA é igual
        </h2>
        <p>
          Quando uma manchete diz que "um filme usou IA", ela pode estar falando de coisas muito diferentes. Vale
          separar três grupos. O primeiro é a <strong>IA de apoio</strong>, presente há anos: algoritmos que removem
          ruído de imagem, fazem rastreamento de movimento ou organizam milhares de takes na montagem. O segundo é o
          <strong> aprendizado de máquina aplicado a efeitos</strong>, como o rejuvenescimento de Indiana Jones, em
          que um modelo treinado com imagens de arquivo do próprio ator reconstrói seu rosto jovem frame a frame —
          tecnologia cara, supervisionada por artistas e feita sob medida. O terceiro grupo, e o mais polêmico, é a
          <strong> IA generativa</strong>: modelos como Sora, Veo e Runway que criam imagens e vídeos novos a partir
          de texto, muitas vezes treinados com obras de terceiros sem autorização clara.
        </p>
        <p>
          Essa distinção explica por que parte do público aplaude o rejuvenescimento de Tom Hanks em "Here" e parte
          reage com fúria a três imagens estáticas em "Late Night with the Devil". O problema raramente é a
          ferramenta em si: é quem foi pago, quem consentiu e de onde saíram os dados de treinamento.
        </p>

        <h2 className="flex items-center gap-2">
          <Film className="h-6 w-6 text-geek" />
          Os casos confirmados: quem usou, como usou e o que deu
        </h2>
        <p>
          A tabela abaixo reúne produções reais com uso de IA confirmado pelos próprios estúdios, diretores ou
          executivos — nada de rumor de bastidor. Repare como a maioria dos usos é pontual: uma abertura, três
          vinhetas, uma cena de desabamento. A IA entrou pela porta dos serviços pequenos, não pelo protagonismo.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-geek/30 text-left">
                <th className="py-2 pr-3 text-geek">Produção</th>
                <th className="py-2 pr-3 text-geek">Como a IA foi usada</th>
                <th className="py-2 text-geek">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCOES.map((p) => (
                <tr key={p.producao} className="border-b border-border/50 align-top">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">{p.producao}</td>
                  <td className="py-2 pr-3">{p.uso}</td>
                  <td className="py-2 whitespace-nowrap text-muted-foreground">{p.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          O caso de "O Brutalista" merece um parágrafo à parte porque virou o divisor de águas da discussão em
          premiações. Quando o editor de som Dávid Jancsó contou à imprensa que o Respeecher havia sido usado para
          aperfeiçoar vogais do húngaro — idioma notoriamente difícil —, parte da indústria passou a questionar se a
          atuação premiada de Adrien Brody era "100% dele". O diretor Brady Corbet defendeu o trabalho dizendo que a
          performance era integralmente dos atores e que a tecnologia apenas refinou a pronúncia, como uma forma
          avançada de ADR (a regravação de diálogo em estúdio que existe há décadas). A polêmica acelerou um debate
          real: a Academia passou a discutir regras de transparência sobre uso de IA em filmes concorrentes.
        </p>

        <AdLeaderboard />

        <h2 className="flex items-center gap-2">
          <Tv className="h-6 w-6 text-geek" />
          Streaming: a porta de entrada silenciosa
        </h2>
        <p>
          Foi na TV e no streaming que a IA generativa conseguiu seu primeiro caso assumido em produção de grande
          alcance. Em julho de 2025, Ted Sarandos revelou que "O Eternauta", superprodução argentina da Netflix,
          usou IA generativa para criar a cena de um prédio desabando em Buenos Aires — e que a cena ficou pronta
          dez vezes mais rápido do que levaria no fluxo tradicional de VFX, a um custo compatível com o orçamento
          da série. O argumento da Netflix é econômico: sem a ferramenta, a cena simplesmente não existiria, porque
          o orçamento não pagaria o efeito convencional.
        </p>
        <p>
          Esse é o ponto que os estúdios repetem em cada anúncio: a IA como <em>expansão</em> do que é possível
          filmar com pouco dinheiro, não como corte de pessoal. Os sindicatos enxergam diferente. A greve dupla de
          2023 — roteiristas (WGA) e atores (SAG-AFTRA) — colocou a IA no centro das negociações e saiu de lá com
          conquistas concretas: roteiros gerados por IA não podem ser tratados como material de origem (ou seja, um
          estúdio não pode usar um texto de IA para pagar menos a um roteirista que o reescreva), e atores têm
          direito a consentimento informado e compensação quando seus rostos, corpos ou vozes são digitalizados.
          O caso Scarlett Johansson em 2024 — quando a OpenAI lançou uma voz assistente que soava notavelmente
          parecida com a dela após ela recusar a proposta — mostrou que a briga pela imagem e pela voz dos artistas
          ia muito além do set.
        </p>

        <h2 className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-geek" />
          Onde a IA atua em cada etapa de uma produção
        </h2>
        <p>
          O público só enxerga a ponta (um rosto rejuvenescido, uma abertura estranha), mas a automação já percorre
          a cadeia inteira. A visão geral:
        </p>

        <div className="not-prose grid gap-3 my-6">
          {ETAPAS.map((e) => (
            <div key={e.etapa} className="p-4 rounded-xl bg-card/60 border border-geek/20">
              <h3 className="font-bold text-geek mb-1">{e.etapa}</h3>
              <p className="text-sm text-foreground/90">{e.exemplos}</p>
            </div>
          ))}
        </div>

        <AdRectangle />

        <h2 className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-geek" />
          O impasse real: dados de treinamento e a "enxurrada de conteúdo"
        </h2>
        <p>
          O calcanhar de aquiles jurídico da IA generativa em Hollywood é o treinamento dos modelos. Estúdios e
          sindicatos sustentam que gerar vídeo a partir de obras protegidas sem licença viola direitos autorais —
          e processos de grandes empresas de mídia contra laboratórios de IA seguem tramitando nos Estados Unidos.
          Ao mesmo tempo, acordos de licenciamento começaram a aparecer: a Lionsgate, por exemplo, firmou parceria
          com a Runway em 2024 para criar um modelo treinado no próprio catálogo do estúdio, um caminho que evita
          a zona cinzenta ao usar material licenciado.
        </p>
        <p>
          O segundo risco é cultural: a tal "enxurrada de conteúdo" (ou <em>AI slop</em>). Com o custo de gerar
          vídeo caindo, plataformas de curta duração já vivem uma avalanche de clipes sintéticos de baixa qualidade,
          e o medo dos artistas é que a mesma lógica chegue às telonas — trailers genéricos, pôsteres gerados,
          dublagens sem dubladores. A resposta do público, até agora, tem sido um fator de equilíbrio: cada uso
          revelado sem transparência vira crise de imagem, o que empurra os estúdios a informar cada vez mais.
        </p>

        <h2 className="flex items-center gap-2">
          <HistoryIcon className="h-6 w-6 text-geek" />
          A história longa: do rosto digital ao clone de voz
        </h2>
        <p>
          A ideia de recriar um ator com computador não nasceu com a IA generativa. Em "Rogue One" (2016), a ILM
          reconstruiu o Grand Moff Tarkin (Peter Cushing, morto em 1994) e uma jovem princesa Leia com CGI
          tradicional sobre atuações de dublês — trabalho artesanal, quadro a quadro, sem aprendizado de máquina.
          Em "O Irlandês" (2019), a ILM desenvolveu o sistema Flux, com três câmeras capturando cada cena para
          rejuvenescer De Niro, Pacino e Pesci sem marcadores no rosto. Foi um dos projetos de VFX mais caros da
          Netflix até então, e serviu de argumento posterior: se um estúdio pode gastar dezenas de milhões nisso,
          o que acontece quando o mesmo efeito custa uma fração?
        </p>
        <p>
          A resposta veio pelos deepfakes amadores. Poucos meses depois de "O Irlandês", vídeos no YouTube feitos
          por entusiastas com ferramentas gratuitas produziram rejuvenescimentos que muita gente considerou
          comparáveis. A indústria absorveu o recado e passou a contratar quem dominava a técnica — o caso mais
          conhecido é o do canal Shamook, que refez a cena do jovem Luke Skywalker de "O Livro de Boba Fett" e
          acabou contratado pela própria ILM em 2021. Foi o momento em que o deepfake deixou de ser gozação de
          internet e virou item de pipeline.
        </p>
        <p>
          Na frente do áudio, dois casos delimitam o certo e o errado. Em "Roadrunner" (2021), o documentário sobre
          Anthony Bourdain, o diretor Morgan Neville usou voz sintética para fazer o chef "ler" três frases que ele
          havia escrito, mas nunca dito em voz alta — sem avisar o espectador. A revelação virou escândalo ético e
          é citada até hoje como exemplo do que não fazer. No ano seguinte, em "Top Gun: Maverick" (2022), a
          empresa Sonantic (depois adquirida pelo Spotify) reconstruiu a voz de Val Kilmer, que havia perdido a
          fala após um câncer de garganta, a partir de gravações antigas e com participação direta do ator e da
          família. Mesma tecnologia, recepções opostas: a diferença foi consentimento e transparência.
        </p>

        <h2 className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-geek" />
          As ferramentas por trás dos casos
        </h2>
        <p>
          Quando uma reportagem diz "usaram IA", quase sempre há um nome comercial específico por trás, com escopo
          bem definido. Conhecer esses nomes ajuda a separar marketing de técnica:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-geek/30 text-left">
                <th className="py-2 pr-3 text-geek">Ferramenta</th>
                <th className="py-2 pr-3 text-geek">O que faz</th>
                <th className="py-2 text-geek">Onde apareceu</th>
              </tr>
            </thead>
            <tbody>
              {FERRAMENTAS.map((f) => (
                <tr key={f.nome} className="border-b border-border/50 align-top">
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">{f.nome}</td>
                  <td className="py-2 pr-3">{f.oque}</td>
                  <td className="py-2 text-muted-foreground">{f.onde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-geek" />
          O ângulo brasileiro: dublagem, um mercado sob pressão
        </h2>
        <p>
          O Brasil tem uma das maiores e mais respeitadas indústrias de dublagem do mundo, e é justamente por isso
          que a clonagem de voz virou pauta política aqui. Em 2023, dubladores e artistas lançaram o movimento
          <strong> Dublagem Viva</strong>, com abaixo-assinado e campanha pública pedindo regras contra o uso de
          vozes sintéticas sem autorização e sem remuneração. A discussão desaguou no debate legislativo sobre
          regulação de IA no país, onde a proteção da voz e da imagem de profissionais aparece ao lado de direitos
          autorais e transparência.
        </p>
        <p>
          O argumento técnico dos dubladores é forte: a dublagem brasileira não traduz apenas palavras, ela adapta
          piada, sotaque e ritmo — trabalho de interpretação, não de conversão de texto em fala. O argumento
          econômico dos estúdios também é real: legendar e dublar catálogos inteiros para dezenas de idiomas é
          caro, e a dublagem sintética promete alcançar mercados que hoje ficam sem versão localizada. O ponto de
          equilíbrio que aparece nos acordos internacionais é sempre o mesmo trio: consentimento explícito,
          remuneração por uso e prazo de validade da autorização.
        </p>

        <h2 className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-geek" />
          Como identificar IA numa produção (sem cair em caça às bruxas)
        </h2>
        <ul>
          <li><strong>Leia os créditos até o fim.</strong> Empresas como Respeecher, Metaphysic e Flawless costumam aparecer creditadas quando o uso foi contratado formalmente.</li>
          <li><strong>Desconfie de "prova" por captura de tela.</strong> Mãos estranhas e texto borrado também acontecem em arte humana apressada e em compressão de streaming.</li>
          <li><strong>Separe de-aging de geração.</strong> Rejuvenescimento supervisionado por artistas com material de arquivo do próprio ator é juridicamente diferente de vídeo criado do zero por um modelo.</li>
          <li><strong>Procure a declaração oficial.</strong> Desde a polêmica de "O Brutalista", diretores e estúdios têm respondido publicamente quando questionados — a ausência de resposta também é informação.</li>
          <li><strong>Pergunte quem foi pago.</strong> É o critério que os próprios sindicatos usam: consentimento informado e compensação valem mais do que o nome da ferramenta.</li>
        </ul>

        <h2>O que esperar daqui para frente</h2>

        <p>
          A tendência mais provável não é o "filme feito 100% por IA" — que continua tecnicamente distante para
          longas-metragens com coerência narrativa —, e sim a IA invisível: mais produções de médio orçamento
          usando VFX generativos para cenas que antes seriam cortadas, mais dublagens sintéticas com consentimento
          e repasse de receita, e mais transparência forçada por regras de premiações e acordos sindicais. A pergunta
          que fica para o espectador é simples: se a cena te emocionou, importa como ela foi feita? Para uma parte
          crescente da indústria, a resposta é "importa, sim — e por isso precisa constar nos créditos".
        </p>

        <AdInArticle />

        <h2 className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-geek" />
          Perguntas frequentes
        </h2>

        <h3>Algum filme já foi feito inteiramente por IA?</h3>
        <p>
          Não. Existem curtas experimentais gerados por IA e cenas pontuais em produções comerciais, mas nenhum
          longa-metragem lançado comercialmente até agora foi gerado por IA do início ao fim. Os usos confirmados
          envolvem etapas específicas, como voz, VFX ou arte promocional.
        </p>

        <h3>O Brutalista perdeu elegibilidade ao Oscar por usar IA?</h3>
        <p>
          Não. O filme competiu normalmente na temporada 2025 e venceu prêmios, incluindo o Oscar de Melhor Ator
          para Adrien Brody. A polêmica, porém, fez a Academia discutir regras de transparência sobre uso de IA
          nas inscrições.
        </p>

        <h3>Atores podem proibir o uso digital de sua imagem?</h3>
        <p>
          Pelos acordos firmados pela SAG-AFTRA após a greve de 2023, estúdios precisam de consentimento informado
          para criar réplicas digitais de atores e devem compensá-los por esse uso. Fora do âmbito sindical, leis
          estaduais americanas — como as da Califórnia aprovadas em 2024 — restringem réplicas digitais de artistas
          vivos e falecidos sem autorização.
        </p>

        <h3>A IA vai acabar com os empregos de dublagem e VFX?</h3>
        <p>
          A tendência mais visível é a transformação, não o fim imediato: equipes de VFX passam a operar ferramentas
          de IA em vez de executar tarefas repetitivas, e mercados como o da dublagem brasileira pressionam por
          regras de consentimento para clonagem de voz. O formato dos postos de trabalho está mudando mais rápido
          do que a quantidade total deles — ao menos por enquanto.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          A história do cinema é a história de pânicos tecnológicos que viraram gramática: o som "mataria" a
          arte muda, o computador "mataria" os efeitos práticos. A diferença desta vez é a velocidade — e o fato
          de a ferramenta ter sido treinada, em muitos casos, com o trabalho de quem hoje compete com ela.
        </p>
        <p>
          Minha leitura: os usos que sobrevivem ao tribunal da internet são os transparentes e pontuais (o
          Respeecher afinando o húngaro, o prédio de "O Eternauta"), e os que explodem são os escondidos. O
          público não rejeita a tecnologia; rejeita ser enganado. Crédito e consentimento viraram a nova régua
          — e isso é ótimo para todo mundo, inclusive para a IA.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Ted Sarandos diz que Netflix usou IA generativa em cena de 'O Eternauta'",
            url: "https://www.theverge.com/netflix/709200/netflix-ai-vfx-eternaut-ted-sarandos",
            publisher: "The Verge",
            accessedAt: "Setembro 2026",
          },
          {
            title: "The Brutalist's AI controversy, explained",
            url: "https://www.vanityfair.com/hollywood/story/the-brutalist-ai-controversy-explained",
            publisher: "Vanity Fair",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Metaphysic Live: real-time face swap and de-aging",
            url: "https://metaphysic.ai/",
            publisher: "Metaphysic (site oficial)",
            accessedAt: "Setembro 2026",
          },
          {
            title: "SAG-AFTRA 2023 TV/Theatrical Contracts — AI provisions",
            url: "https://www.sagaftra.org/contracts-industry-resources/2023-tvtheatrical-contracts",
            publisher: "SAG-AFTRA",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Lionsgate and Runway partner on AI video model",
            url: "https://www.runwayml.com/news/lionsgate-partnership",
            publisher: "Runway",
            accessedAt: "Setembro 2026",
          },
          {
            title: "Secret Invasion's AI-generated opening credits spark backlash",
            url: "https://www.polygon.com/23767640/secret-invasion-ai-art-intro-marvel",
            publisher: "Polygon",
            accessedAt: "Setembro 2026",
          },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default IAFilmesSeries2026;
