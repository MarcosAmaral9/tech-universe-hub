import { useEffect } from "react";
import { Calendar, Clock, Coins, Map, Shield, Swords, User, Users, Skull, Castle, Lightbulb, ScrollText, CloudLightning } from "lucide-react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdInArticle, AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/mandate-order-guia-completo-2026.webp";
import cercoImg from "@/assets/mandate-order-cerco-muralhas.webp";

const SLUG = "mandate-order-guia-completo-2026";
const TITLE = "Mandate Order em 2026: Guia Completo — Lançamento, Preço, Cercos e Dicas";

const FICHA = [
  ["Título original", "烽沙 (Fēng Shā)"],
  ["Desenvolvedora e publicadora", "Digital Sky (Chengdu, China)"],
  ["Acesso Antecipado", "12 de agosto de 2026, 02h UTC (11 de agosto no horário de Brasília)"],
  ["Versão 1.0", "Sem data; a equipe fala em cerca de 12 meses de Acesso Antecipado"],
  ["Preço no Steam (Brasil)", "R$ 59,99 cheio; R$ 47,99 em promoção de 20% registrada em outubro de 2026"],
  ["Plataformas", "PC (Windows) — Steam e Epic Games Store"],
  ["Modo", "Somente um jogador"],
  ["Idiomas", "12 idiomas; áudio completo apenas em chinês simplificado"],
  ["Motor gráfico", "Unreal Engine 5"],
];

const ESCOLAS = [
  { nome: "Confucionistas", desc: "Associados à ordem social, aos ritos e à harmonia entre governante e povo." },
  { nome: "Legalistas", desc: "Ligados a leis rígidas, disciplina e fortalecimento do Estado e do exército." },
  { nome: "Moístas", desc: "Conhecidos historicamente pela defesa de cidades e pela engenharia de fortificações." },
  { nome: "Outras escolas", desc: "O jogo inclui mais tradições das Cem Escolas; o guia oficial no Steam compara oito." },
];

const DICAS = [
  { t: "Barracas antes de tudo", d: "Novas equipes só chegam se houver barracas livres. Sem moradia vaga, a população para de crescer." },
  { t: "Poço e celeiro perto", d: "Água e comida acessíveis mantêm a satisfação. Equipes insatisfeitas atraem menos gente e podem ir embora." },
  { t: "Recursos acabam", d: "Jazidas e pontos de coleta são finitos. Planeje a expansão para novos lotes antes de esgotar o atual." },
  { t: "Respeite as estações", d: "Arar na primavera, cultivar no verão, colher no outono e estocar para o inverno. O ciclo também afeta marchas." },
  { t: "Convocar custa produção", d: "Soldados saem das equipes de trabalho. Cada convocação desacelera oficinas, campos e transporte." },
  { t: "Muralha é logística", d: "Defesa depende de madeira, pedra e armas estocadas. Monte a cadeia de produção antes do primeiro cerco." },
];

const FAQ: [string, string][] = [
  ["Quando Mandate Order foi lançado?", "O jogo entrou em Acesso Antecipado em 12 de agosto de 2026, às 02h UTC (11 de agosto à noite no Brasil), no Steam e na Epic Games Store. A versão 1.0 ainda não tem data."],
  ["Quanto custa Mandate Order no Brasil?", "O preço cheio no Steam brasileiro é R$ 59,99. Em outubro de 2026 foi registrada promoção de 20%, por R$ 47,99. Confira a loja antes de comprar, porque descontos são temporários."],
  ["Mandate Order tem português?", "A página do Steam lista 12 idiomas. Confirme na própria loja se o português do Brasil está entre eles antes da compra; o áudio completo existe apenas em chinês simplificado."],
  ["Mandate Order é parecido com Manor Lords?", "Sim, muitos jogadores e a imprensa comparam os dois: construção sem grade, trabalhadores visíveis e batalhas táticas. A diferença está no cenário chinês, nos conselheiros, nos rituais e no foco em cercos."],
  ["Tem multiplayer?", "Não. Mandate Order é um jogo para um jogador."],
  ["Os personagens morrem permanentemente?", "Soldados saem das próprias equipes de trabalho, e o jogo tem pragas e combates com baixas. A Digital Sky não publicou uma regra detalhada sobre morte permanente; trate perdas como definitivas para a sua força de trabalho."],
  ["Quais são os requisitos mínimos?", "Windows 10, Intel Core i7-9700 ou Ryzen 5 3600, 16 GB de RAM, GTX 1660 de 6 GB, RX 5600 XT ou Arc A750, DirectX 12 e 20 GB de espaço. É recomendado instalar em um SSD."],
];

const MandateOrderGuia2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="geek" />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-geek/30 bg-geek/10 px-3 py-1 text-sm font-semibold text-geek">
            <Castle className="h-4 w-4" /> Construção · Cercos · Estratégia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />15 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="15 de Outubro, 2026" />
      </header>

      <figure className="mb-8">
        <img src={heroImg} alt="Cidade murada da China antiga ao pôr do sol, com torres de vigia, campos, rio e trabalhadores carregando mercadorias" width={1600} height={912} className="w-full rounded-xl object-cover" fetchPriority="high" />
        <figcaption className="mt-2 text-xs text-muted-foreground">Ilustração editorial inspirada no cenário do jogo; não é captura de tela oficial.</figcaption>
      </figure>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:mb-6">
        <p>
          <em>Mandate Order</em> é o construtor de cidades com guerra que mais chamou atenção na estratégia de 2026. Criado pela Digital Sky, estúdio independente de Chengdu, na China, o jogo leva para o período dos Reinos Combatentes uma fórmula que lembra muito <em>Manor Lords</em>: construção livre, trabalhadores que você vê carregando cada tora de madeira e batalhas em tempo real com milhares de soldados. Mas ele acrescenta ideias próprias, como conselheiros das Cem Escolas de Pensamento, rituais que mexem com desastres naturais e um foco forte em muralhas e cercos.
        </p>
        <p>
          O jogo chegou com quase 100 mil pessoas na lista de desejos do Steam, segundo o comunicado oficial, e mantém avaliações "Muito positivas" na loja, com cerca de 80% de aprovação. Este guia reúne o que está confirmado até 15 de outubro de 2026: datas, preço em reais, contexto histórico, como funcionam mapas, moradores, conselheiros, guerras de cerco e perdas de personagens, além de dicas para começar. As fontes estão listadas no fim do artigo.
        </p>

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 text-geek" />Ficha técnica</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-geek/30 bg-gradient-to-br from-geek/10 to-card/60">
          <table className="w-full text-sm">
            <tbody>
              {FICHA.map(([k, v]) => (
                <tr key={k} className="border-b border-geek/15 last:border-0">
                  <th className="p-3 text-left font-semibold text-geek whitespace-nowrap">{k}</th>
                  <td className="p-3 text-foreground/90">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Data de lançamento e Acesso Antecipado</h2>
        <p>
          A Digital Sky anunciou em 16 de julho de 2026 que <em>Mandate Order</em> entraria em Acesso Antecipado no Steam e na Epic Games Store em 12 de agosto de 2026, às 10h no horário de Pequim (02h UTC). Por causa do fuso, o Steam brasileiro e o americano mostram a data como 11 de agosto. Antes disso, o jogo teve demonstrações públicas e testes abertos, com a comunidade chinesa acompanhando o projeto há bastante tempo.
        </p>
        <p>
          A equipe deixa claro que Acesso Antecipado não significa jogo pronto. No comunicado, os desenvolvedores disseram que a estrutura principal já é jogável e conectada, e que querem testá-la com estratégias, cidades e computadores muito diferentes. A previsão divulgada é de cerca de 12 meses de desenvolvimento público antes da versão final, sem data oficial para a 1.0.
        </p>

        <AdLeaderboard className="my-8" />

        <h2>Preço em reais</h2>
        <p>
          No Steam brasileiro, o preço cheio de <em>Mandate Order</em> é <strong>R$ 59,99</strong>. Nas duas primeiras semanas houve desconto de lançamento de 15%, e em outubro de 2026 os rastreadores de preço registraram uma promoção de 20%, por <strong>R$ 47,99</strong>, o menor valor oficial até agora. Nos Estados Unidos, o preço é US$ 19,99. Compras no Steam e na Epic são licenças separadas, então escolha a loja onde prefere manter o jogo. Como promoções mudam rápido, confira o valor na loja no dia da compra.
        </p>

        <h2 className="flex items-center gap-3"><ScrollText className="h-7 w-7 text-geek" />História e contexto: os Reinos Combatentes</h2>
        <p>
          O jogo se passa na China antiga, entre o período das Primaveras e Outonos e o dos Reinos Combatentes, aproximadamente entre os séculos VIII e III antes de Cristo. Foi uma era de Estados rivais disputando território, de reformas militares profundas e de enorme efervescência intelectual. É dessa época que vêm Confúcio, os legalistas e os moístas, e também obras de estratégia que ainda hoje são estudadas.
        </p>
        <p>
          Você não segue uma campanha com cenas e personagens famosos. Assume o papel de governante de um povoado de fronteira vulnerável e precisa transformá-lo em fortaleza capaz de produzir, defender-se e fazer guerra. A "história" nasce das suas decisões: onde erguer muralhas, quais conselheiros chamar, com quem fazer alianças e quando atacar. O título original, 烽沙, une as ideias de sinal de fogo de alerta e areia, imagem que resume bem a vida numa fronteira em guerra.
        </p>
        <p>
          A ambientação é um dos pontos mais elogiados. Até críticas negativas no Steam reconhecem que a pesquisa histórica sobre o período é sólida e que o cenário é apresentado melhor do que se esperava. Em uma atualização de desenvolvimento, a equipe citou o clássico <em>Zuo Zhuan</em>, que afirma que os grandes assuntos de um Estado são os sacrifícios e a guerra, para explicar por que rituais e combate têm o mesmo peso no jogo.
        </p>

        <h2 className="flex items-center gap-3"><Swords className="h-7 w-7 text-geek" />Modos de jogo e configurações</h2>
        <p>
          <em>Mandate Order</em> é exclusivamente para um jogador. O modo principal é uma partida aberta de construção e conquista, no estilo sandbox: você começa em terras áridas e cresce sob a ameaça constante de invasões. Não há campanha narrativa fechada na versão de Acesso Antecipado. As atualizações também ajustaram a frequência e a força das invasões, o que mostra que o ritmo de ameaças é um dos pontos que a equipe vem calibrando com a comunidade.
        </p>
        <p>
          Até a data deste guia, a Digital Sky não publicou uma lista oficial de níveis de dificuldade ou de modos separados, como acontece em outros construtores. Por isso, preferimos não inventar nomes de modos. Se isso mudar com uma grande atualização, este artigo será revisado.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3"><Map className="h-7 w-7 text-geek" />Mapas e tamanhos</h2>
        <p>
          A partida acontece em um único mapa dividido em lotes de terra. Os recursos aparecem como pontos finitos espalhados pelo terreno: madeira, argila, pedra, cobre, ferro, estanho, jade, prata e sal. As construções de coleta precisam ficar perto desses pontos, e quando um deles se esgota é preciso buscar o material em outro lote, pelo comércio ou expandindo o território. Assim, o tamanho prático do seu mapa cresce conforme você conquista e ocupa novas áreas.
        </p>
        <p>
          A Digital Sky ainda não divulgou números oficiais de quilômetros, quantidade de lotes ou opções de tamanho de mapa. O que está confirmado é que relevo e recursos importam muito: passagens estreitas, rios e colinas mudam a forma de defender a cidade, e a escolha do local da fortaleza é uma das decisões mais importantes da partida.
        </p>

        <h2 className="flex items-center gap-3"><Users className="h-7 w-7 text-geek" />Moradores vivos e cadeia de trabalho</h2>
        <p>
          Em vez de contar indivíduos soltos, o jogo organiza a população em <strong>equipes de trabalho</strong>. O comunicado oficial usa a unidade histórica <em>wu</em>, de cerca de cinco trabalhadores; guias de jogadores descrevem equipes de nove ou dez pessoas na versão atual. Você atribui essas equipes a construções, e são elas que constroem, transportam e fazem manutenção de tudo. Não há construção instantânea: cada estrada e cada muro precisam de gente carregando material.
        </p>
        <p>
          As equipes precisam de barracas para morar, água de poço e comida do celeiro. A cada mês, novas equipes chegam ao povoado, mas só se houver moradia livre. Quando as necessidades não são atendidas, a satisfação cai, menos gente chega e, abaixo de certo nível, os moradores começam a ir embora. Rebeliões também podem acontecer e precisam ser contidas.
        </p>
        <p>
          A atualização de 24 de setembro de 2026 trouxe a melhoria de construções, como barracas, poços, armazéns, celeiros, serrarias e oficinas de armas, além de um frete dedicado com carros de boi que leva os itens coletados direto ao armazém escolhido. Essa atualização mudou o tamanho de algumas construções e tornou os saves antigos incompatíveis, algo comum em Acesso Antecipado.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3"><Lightbulb className="h-7 w-7 text-geek" />Conselheiros e as Cem Escolas</h2>
        <p>
          O sistema de conselheiros é o que mais diferencia <em>Mandate Order</em>. Você recruta estudiosos de escolas de pensamento e os coloca em construções, exércitos, diplomacia ou políticas de Estado. Cada escola oferece efeitos próprios e muda o perfil do seu reino. Há ainda um quadro de políticas nacionais em nove casas e debates na corte.
        </p>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {ESCOLAS.map((e) => (
            <div key={e.nome} className="rounded-xl border border-geek/25 bg-gradient-to-br from-geek/10 to-card/70 p-5">
              <h3 className="font-display text-lg font-bold text-geek">{e.nome}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>

        <figure className="not-prose my-8">
          <img src={cercoImg} alt="Catapultas de madeira, escadas e carros de guerra atacam as muralhas de terra de uma cidade chinesa antiga" width={1600} height={912} loading="lazy" className="w-full rounded-xl object-cover" />
          <figcaption className="mt-2 text-xs text-muted-foreground">Ilustração editorial de um cerco na China antiga; não é captura de tela oficial.</figcaption>
        </figure>

        <h2 className="flex items-center gap-3"><Castle className="h-7 w-7 text-geek" />Guerras de cerco</h2>
        <p>
          Os cercos são o coração militar do jogo. A Digital Sky descreve uma "arquitetura de guerra" baseada em muralhas e defesas: você planeja onde erguer muros, torres e portões, e o inimigo precisa rompê-los. Nas batalhas, o jogador desenha linhas para formar as tropas, posiciona máquinas de cerco e aproveita o terreno. Há física de impacto, com soldados sendo arremessados por golpes e projéteis.
        </p>
        <p>
          O exército inclui unidades como carros de guerra, infantaria de elite, arqueiros e catapultas móveis. Uma atualização de agosto de 2026 fez os arqueiros calcularem a antecipação do alvo para não errar inimigos em movimento, e a equipe prometeu ajuste parecido para as catapultas. Até a sujeira acumulada no cerco aparece como recurso a ser administrado, ao lado de resíduos e adubo líquido.
        </p>
        <p>
          O mais interessante é que a guerra começa na economia. Armas e armaduras saem de oficinas que dependem de minérios e madeira, e cada soldado convocado é um trabalhador a menos no campo. Um site oficial resume bem a ideia com um comentário de jogador: só depois de jogar ele entendeu por que os imperadores construíram a Grande Muralha.
        </p>

        <h2 className="flex items-center gap-3"><Skull className="h-7 w-7 text-geek" />Morte permanente dos personagens</h2>
        <p>
          Aqui é preciso cuidado. Em <em>Mandate Order</em>, os soldados são convocados das próprias equipes de trabalho e voltam a elas depois do combate. O jogo também tem pragas, que exigem tratamento, e batalhas com baixas. Na prática, perder gente reduz a sua força de trabalho, e a reposição depende da chegada mensal de novas equipes e de moradia livre.
        </p>
        <p>
          No entanto, a Digital Sky não publicou uma regra oficial e detalhada sobre morte permanente, envelhecimento ou nascimento de moradores, e os conselheiros também não têm esse comportamento descrito oficialmente. Por isso, não afirmamos mais do que isso. Se você vem de <em>Manor Lords</em>, a lógica é parecida: trate cada perda como definitiva para a economia e evite batalhas desnecessárias.
        </p>

        <h2 className="flex items-center gap-3"><CloudLightning className="h-7 w-7 text-geek" />Rituais, desastres e diplomacia</h2>
        <p>
          O sistema de sacrifícios ao céu e à terra influencia desastres naturais, eventos e a moral do povo. Tempestades que derrubam muros e presságios celestes fazem parte do mundo, e o jogo propõe que, depois de uma catástrofe, também surja uma chance de recomeço. Na diplomacia, é possível firmar alianças, cessar-fogo, comércio e ataques conjuntos contra inimigos mais fortes. As reformas e a tecnologia melhoram construções e logística ao longo da partida.
        </p>

        <AdInArticle className="my-8" />

        <h2>Dicas para iniciantes</h2>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {DICAS.map((d) => (
            <div key={d.t} className="rounded-xl border-l-4 border-geek bg-geek/10 p-5">
              <h3 className="font-display font-bold text-geek">{d.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{d.d}</p>
            </div>
          ))}
        </div>
        <p>
          Um começo seguro é montar barracas, poço, celeiro, acampamento de lenhadores e coleta de comida, e só depois partir para oficinas e muralhas. Mantenha um estoque de madeira e comida para o inverno e não convoque tropas sem necessidade nos primeiros anos. Quando a cidade estiver estável, chame conselheiros e use as políticas de Estado para dar uma identidade ao seu reino.
        </p>

        <h2 className="flex items-center gap-3"><Shield className="h-7 w-7 text-geek" />Requisitos de PC</h2>
        <p>
          Os requisitos mínimos informados são Windows 10, processador Intel Core i7-9700 ou AMD Ryzen 5 3600, 16 GB de RAM, placa de vídeo GeForce GTX 1660 (6 GB), Radeon RX 5600 XT (6 GB) ou Intel Arc A750, DirectX 12, conexão de banda larga e 20 GB de espaço livre em armazenamento. É recomendado instalar em um SSD para reduzir o tempo de carregamento. Para a configuração recomendada, a lista sobe para Core i7-12700K ou Ryzen 7 5800X com RTX 3070 (8 GB) ou RX 6800 (16 GB). Por usar Unreal Engine 5 e simular milhares de soldados, é um jogo mais pesado que a média do gênero.
        </p>

        <h2>Atualizações e o futuro do jogo</h2>
        <p>
          Desde o lançamento, a Digital Sky publica correções com frequência. As primeiras notas, de 14 de agosto, trouxeram uma nova receita no matadouro, melhorias na mira dos arqueiros, correções de travamentos em combate e ajustes de interface. A grande atualização de setembro adicionou melhoria de construções e transporte dedicado. A recepção é boa, mas não unânime: parte das avaliações negativas critica a semelhança com <em>Manor Lords</em>, pequenos bugs e lentidão na câmera. Vale a pena para quem gosta de logística e cercos e aceita um jogo ainda em construção.
        </p>

        <h2>Perguntas frequentes</h2>
        <div className="not-prose my-6 space-y-4">
          {FAQ.map(([q, a]) => (
            <section key={q} className="rounded-lg border border-geek/20 bg-card/70 p-5">
              <h3 className="font-display font-bold text-geek">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </section>
          ))}
        </div>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: a muralha começa no celeiro">
        <p>
          O que mais me agrada em <em>Mandate Order</em> é perceber que cada cerco é decidido meses antes, na madeira estocada e nas equipes bem alimentadas. A ambientação dos Reinos Combatentes é rara nos jogos ocidentais e aqui ganha cuidado de verdade.
        </p>
        <p>
          A semelhança com <em>Manor Lords</em> é evidente, mas os conselheiros, os rituais e a ênfase em fortificações dão personalidade própria. Por R$ 59,99, é uma aposta justa para quem curte estratégia e paciência — desde que aceite os tropeços do Acesso Antecipado.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "Mandate Order no Steam — datas, idiomas e Acesso Antecipado", url: "https://store.steampowered.com/app/1733690/Mandate_Order/", publisher: "Steam", accessedAt: "Outubro 2026" },
          { title: "Mandate Order — site oficial", url: "https://mandateorder.digisky.com/", publisher: "Digital Sky", accessedAt: "Outubro 2026" },
          { title: "Ancient War City-Builder Mandate Order Launches in Steam Early Access on August 12", url: "https://www.gamespress.com/en-US/Ancient-Chinese-War-City-Builder-Mandate-Order-Launches-in-Steam-Early", publisher: "Games Press / Digital Sky", accessedAt: "Outubro 2026" },
          { title: "Mandate Order — comunidade e notas de atualização", url: "https://steamcommunity.com/app/1733690/", publisher: "Steam Community", accessedAt: "Outubro 2026" },
          { title: "Histórico de preços de Mandate Order no Brasil", url: "https://xd.deals/br/game/mandate-order/price-history", publisher: "XD.deals", accessedAt: "Outubro 2026" },
          { title: "Mandate Order – Complete Guide For Beginners", url: "https://intoindiegames.com/walkthrough-hub/mandate-order-complete-guide-for-beginners/", publisher: "Into Indie Games", accessedAt: "Outubro 2026" },
          { title: "Mandate Order Guide — requisitos e informações", url: "https://gamehowto.com/game/mandate-order/", publisher: "Game How To", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default MandateOrderGuia2026;
