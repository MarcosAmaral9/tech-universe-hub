import { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Crosshair, ListChecks, HelpCircle, Backpack, Users, Lightbulb, Swords } from "lucide-react";
import heroImg from "@/assets/hell-let-loose-vietnam-armas.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "hell-let-loose-vietnam-armas-classes-gameplay";
const TITLE = "Hell Let Loose: Vietnam — Guia de Armas, Classes, Sistema de Peso e Dicas de Gameplay";

const ARMAS_US = [
  {
    arma: "M16A1",
    tipo: "Fuzil de assalto",
    origem:
      "Derivado do AR-15 de Eugene Stoner, adotado em massa no fim dos anos 1960. A versão A1 corrigiu os problemas de emperramento da primeira geração com cromagem da câmara e o famoso êmbolo de assistência ao ferrolho.",
    jogo: "Cadência alta, recuo controlável e carregador de 20 tiros. É a arma padrão do lado americano e recompensa rajadas curtas.",
  },
  {
    arma: "M16A1 com baioneta",
    tipo: "Fuzil de assalto",
    origem: "A baioneta M7 acompanhava o fuzil desde a adoção, herança direta do combate de trincheira.",
    jogo: "Troca um pouco de manejo por capacidade de finalizar no corpo a corpo — útil em mapa urbano e em túnel.",
  },
  {
    arma: "M16A1-M203",
    tipo: "Fuzil com lança-granadas",
    origem:
      "O M203 substituiu o M79 justamente para não obrigar o granadeiro a abrir mão do fuzil. Entrou em serviço no início dos anos 1970.",
    jogo: "Permite limpar guarnições e trincheiras sem perder poder de fogo direto. Consome muito peso no loadout.",
  },
  {
    arma: "M79",
    tipo: "Lança-granadas dedicado",
    origem:
      "Apelidado de 'Thumper' pelo som do disparo, foi o primeiro lança-granadas de cano único de 40 mm de uso individual em larga escala.",
    jogo: "Precisão de arco muito superior ao M203, mas quem o carrega depende dos companheiros para segurar linha.",
  },
  {
    arma: "M60",
    tipo: "Metralhadora de uso geral",
    origem:
      "Chamada de 'The Pig', combinava soluções da MG42 alemã e da FG42. Pesada, quente e adorada por quem precisava de volume de fogo.",
    jogo: "Melhor ferramenta de supressão do time. Só funciona bipé apoiado e com um companheiro cobrindo os flancos.",
  },
  {
    arma: "M40",
    tipo: "Fuzil de precisão",
    origem:
      "Adotado pelo Corpo de Fuzileiros em 1966 a partir do Remington 700, foi a base do programa de atiradores de elite dos EUA no conflito.",
    jogo: "Ferrolho, cadência baixa e altíssima letalidade. Sozinho não vence ponto; combinado com observador, quebra ataques.",
  },
  {
    arma: "M1911A1",
    tipo: "Pistola",
    origem: "Projeto de John Browning de 1911, atualizado em 1924. Serviu em todos os conflitos americanos do século XX.",
    jogo: "Arma de recurso. Calibre .45 resolve encontros muito próximos, mas exige mira firme.",
  },
  {
    arma: "M72 LAW",
    tipo: "Lança-foguetes descartável",
    origem: "Introduzido em 1963 como substituto leve da bazuca, com tubo telescópico e uso único.",
    jogo: "Antiveículo e antiblindagem leve. Tiro único: errar significa voltar ao ponto de suprimento.",
  },
];

const ARMAS_NVA = [
  {
    arma: "Type 56",
    tipo: "Fuzil de assalto",
    origem:
      "Versão chinesa do AK-47 produzida a partir de 1956, reconhecível pela baioneta dobrável tipo espeto. Chegou ao Norte em enorme quantidade via China.",
    jogo: "Recuo maior que o do M16, dano por tiro mais alto e baioneta disponível desde o início. Perdoa distâncias curtas e mato fechado.",
  },
  {
    arma: "Type 53",
    tipo: "Carabina / fuzil de ferrolho",
    origem:
      "Cópia chinesa do Mosin-Nagant M44, com baioneta rebatível. Equipava unidades de segunda linha e milícias.",
    jogo: "Poder de parada altíssimo por tiro, cadência lenta. Recompensa emboscada e posição preparada.",
  },
  {
    arma: "K50M",
    tipo: "Submetralhadora",
    origem:
      "Adaptação norte-vietnamita da PPSh-41 soviética, com coronha retrátil de inspiração francesa e cano encurtado — feita para selva e túnel.",
    jogo: "Devastadora abaixo de 30 metros e quase inútil acima disso. É a arma que define o combate dentro de estrutura.",
  },
  {
    arma: "K50M com tambor",
    tipo: "Submetralhadora",
    origem: "O tambor herdado da PPSh original elevava a autonomia da rajada, ao custo de peso e perfil maior.",
    jogo: "Mais munição por recarga, mais peso no loadout e mira mais lenta. Escolha típica de assalto a ponto fechado.",
  },
  {
    arma: "RPD",
    tipo: "Metralhadora leve",
    origem:
      "Projeto soviético de Degtyaryov em 7,62×39 mm, alimentada por cinta em tambor. Leve o bastante para acompanhar infantaria em movimento.",
    jogo: "Contraparte do M60. Menos dano por tiro, muito mais mobilidade — combina com a doutrina de ataque rápido do NVA.",
  },
  {
    arma: "RPG-2",
    tipo: "Lança-foguetes antiblindagem",
    origem:
      "Antecessor direto do RPG-7, de origem soviética e produzido também na China (Type 56) e no Vietnã (B-40). Simples, barato e onipresente na guerrilha.",
    jogo: "Alcance efetivo curto e trajetória sensível ao vento, mas recarregável. Serve tanto contra veículos quanto contra fortificação.",
  },
  {
    arma: "LPO-50",
    tipo: "Lança-chamas",
    origem: "Lança-chamas soviético de três cartuchos, projetado para limpar fortificações e posições entrincheiradas.",
    jogo: "Arma de negação de área. Peso altíssimo, alcance curto e efeito psicológico enorme em corredor e bunker.",
  },
];

const UNIDADES = [
  { tipo: "Command", papel: "Comandante e liderança de esquadrão: marcam objetivos, chamam apoio e definem onde nascem as guarnições.", nota: "Sem comunicação, nada funciona nesta série." },
  { tipo: "Infantry", papel: "Fuzileiro, assalto, metralhador, granadeiro, engenheiro, médico, antiblindagem e suporte.", nota: "É o núcleo da partida e onde todo iniciante deve começar." },
  { tipo: "Recon", papel: "Atirador de elite e observador, operando à frente da linha para caçar guarnições e artilharia.", nota: "Dupla obrigatória: sozinho, o sniper rende pouco." },
  { tipo: "Armor", papel: "Tripulações de veículos blindados e de transporte, com funções separadas de piloto, artilheiro e comandante.", nota: "Exige microfone e coordenação, não é papel para jogar calado." },
  { tipo: "Helicopter", papel: "Exclusiva das forças dos EUA: pilotos e tripulação de helicóptero para transporte e apoio.", nota: "É a resposta americana à mobilidade oculta do NVA." },
  { tipo: "Mortar", papel: "Equipe de morteiro, batendo pontos marcados pela liderança e pelo reconhecimento.", nota: "Rende muito quando alguém corrige o tiro por rádio." },
];

const PESO = [
  { item: "Munição extra e carregadores", efeito: "Aumenta autonomia, reduz a distância que você corre antes de perder fôlego." },
  { item: "Explosivos (satchel, minas, foguete)", efeito: "Peso alto concentrado. Ideal para quem vai atacar posição fixa e não precisa de mobilidade." },
  { item: "Kits médicos e bandagens", efeito: "Baratos em peso e o melhor custo-benefício para qualquer função de infantaria." },
  { item: "Ferramentas e material de construção", efeito: "Essenciais para engenheiro e suporte; comprometem quase todo o orçamento de carga." },
  { item: "Equipamento de utilidade (binóculo, fumígenos)", efeito: "Peso baixo e alto retorno tático, principalmente para liderança e reconhecimento." },
];

const DICAS = [
  {
    titulo: "Ande com o esquadrão, não com o mapa",
    texto:
      "A morte mais comum de iniciante acontece a caminho do objetivo, sozinho. Em Hell Let Loose, quatro jogadores juntos valem mais que doze espalhados: um suprime, um flanqueia, um constrói, um reanima.",
  },
  {
    titulo: "Supressão é dano, mesmo sem matar",
    texto:
      "Fogo contínuo de M60 ou RPD embaça a visão e trava o adversário na cobertura. Enquanto a metralhadora prende a posição, o assalto entra pelo lado. É assim que ponto se toma.",
  },
  {
    titulo: "Vegetação é cobertura visual, não blindagem",
    texto:
      "Mato alto esconde, mas não para projétil. Use a folhagem para quebrar a linha de visão enquanto se desloca e procure terreno duro quando o tiroteio começar.",
  },
  {
    titulo: "Guarnição bem posicionada vale mais que dez abates",
    texto:
      "Ponto de renascimento próximo ao objetivo decide a partida. Coloque em cobertura, longe da linha de visão do inimigo e nunca no lugar óbvio — guarnição destruída significa dois minutos de caminhada para o time inteiro.",
  },
  {
    titulo: "Monte o loadout para a função, não para o gosto",
    texto:
      "Com orçamento de peso limitado, carregar tudo é carregar mal. Engenheiro leva ferramenta, assalto leva explosivo, fuzileiro leva munição para abastecer o esquadrão. Ninguém precisa ser autossuficiente.",
  },
  {
    titulo: "Use rio e ar como rota, não como enfeite",
    texto:
      "Todos os mapas têm rede fluvial navegável e o lado americano tem helicóptero. Rotação por água e por ar chega onde a infantaria a pé leva minutos — e pega defesa mal distribuída de surpresa.",
  },
  {
    titulo: "Fale, mesmo mal",
    texto:
      "Um 'inimigo na casa à esquerda' vale mais que qualquer estatística de mira. Comunicação simples e em português já resolve; o jogo separa canais de esquadrão e de comando exatamente para isso.",
  },
];

const HellLetLooseVietnamArmas2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "geek");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="geek" size="lg" />
          <span className="px-3 py-1 bg-geek/20 text-geek rounded-full text-sm font-medium">
            Games · FPS · Guia
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Hell Let Loose: Vietnam — Guia de Armas, Classes, Sistema de Peso e Dicas de Gameplay
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O arsenal de <strong>Hell Let Loose: Vietnam</strong> não é um reskin: cada facção joga de um jeito. Este guia
          reúne a origem histórica das armas dos EUA e do NVA, o papel de cada classe, como funciona o novo sistema de
          peso do loadout e as dicas que fazem diferença nas primeiras partidas.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />28 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />15 min de leitura</span>
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
          alt="Equipamento militar da era da Guerra do Vietnã disposto sobre madeira: fuzil, fuzil de ferrolho, munição, capacete e mochila"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-geek/10 to-background rounded-xl border border-geek/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-geek" />
            O essencial em 30 segundos
          </h2>
          <div className="space-y-2">
            {[
              { k: "Facções", v: "EUA x Exército do Vietnã do Norte" },
              { k: "Armas no lançamento", v: "22, divididas entre os dois lados" },
              { k: "Funções jogáveis", v: "17, em 6 tipos de unidade" },
              { k: "Novidade principal", v: "Loadout por slots de peso" },
              { k: "Exclusivo dos EUA", v: "Helicópteros" },
              { k: "Exclusivo do NVA", v: "Rede de túneis" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-geek font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="assimetria" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-geek" />
          Duas Facções, Duas Filosofias de Combate
        </h2>
        <p>
          A decisão de design mais importante do jogo é a assimetria. No Hell Let Loose clássico, Aliados e Eixo tinham
          arsenais diferentes, mas jogavam de forma parecida. Aqui não: as forças americanas se apoiam em poder de fogo,
          mobilidade aérea e apoio pesado, enquanto o NVA aposta em deslocamento oculto, emboscada e desgaste. Isso vem
          direto da guerra real, em que um lado tinha helicóptero e o outro tinha túnel.
        </p>
        <p>
          Na prática, isso muda o que significa ganhar uma troca de tiros. Jogando pelos EUA, o padrão é fixar o
          adversário com fogo automático e resolver com apoio — granada de 40 mm, morteiro, veículo. Jogando pelo NVA,
          o padrão é o oposto: evitar o confronto frontal, aparecer onde ninguém espera e sair antes que a resposta
          chegue. Quem tenta jogar de NVA como se fosse americano costuma passar a partida inteira renascendo.
        </p>
        <p>
          Isso também vale para o arsenal. O fuzil americano é mais controlável e permite manter pressão a média
          distância; o Type 56 e a K50M brilham no curto alcance, onde a vegetação e as estruturas anulam a vantagem de
          alcance do outro lado. O terreno, portanto, não é cenário: é parte do balanceamento.
        </p>

        <h2 id="armas-eua" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-geek" />
          Arsenal dos Estados Unidos: História e Uso no Jogo
        </h2>
        <p>
          O equipamento americano da era do Vietnã representa a transição do fuzil pesado de calibre cheio para o
          fuzil leve de alta cadência. É uma mudança de doutrina: em vez de precisão a longa distância, volume de fogo
          para dominar o contato inicial em mato fechado.
        </p>

        <div className="not-prose my-8 space-y-4">
          {ARMAS_US.map((a) => (
            <div key={a.arma} className="rounded-xl border border-geek/30 bg-geek/5 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-display text-lg font-bold text-geek">{a.arma}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{a.tipo}</span>
              </div>
              <p className="text-sm mb-2"><strong>Origem:</strong> {a.origem}</p>
              <p className="text-sm text-muted-foreground"><strong>No jogo:</strong> {a.jogo}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 id="armas-nva" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Crosshair className="h-7 w-7 text-geek" />
          Arsenal do Exército do Vietnã do Norte
        </h2>
        <p>
          Do outro lado, o arsenal conta outra história: quase tudo veio de fora, doado ou produzido sob licença na
          China e na União Soviética, e foi escolhido por confiabilidade e simplicidade de manutenção. Armas que
          funcionam com lama, umidade e pouca limpeza valiam mais que armas sofisticadas.
        </p>

        <div className="not-prose my-8 space-y-4">
          {ARMAS_NVA.map((a) => (
            <div key={a.arma} className="rounded-xl border border-geek/30 bg-geek/5 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-display text-lg font-bold text-geek">{a.arma}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{a.tipo}</span>
              </div>
              <p className="text-sm mb-2"><strong>Origem:</strong> {a.origem}</p>
              <p className="text-sm text-muted-foreground"><strong>No jogo:</strong> {a.jogo}</p>
            </div>
          ))}
        </div>

        <p>
          Vale registrar que o jogo estreou com 22 armas no total e que a lista continua crescendo pelo roadmap de
          conteúdo pós-lançamento. Sempre que alguma variante nova entra, o equilíbrio de curto e médio alcance é
          reajustado — então trate qualquer guia de "melhor arma" como retrato de um patch específico, não como
          verdade permanente.
        </p>

        <h2 id="classes" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Users className="h-7 w-7 text-geek" />
          Classes e Tipos de Unidade
        </h2>
        <p>
          São 17 funções jogáveis distribuídas em seis tipos de unidade. Cada esquadrão tem limite de vagas por função,
          o que impede o cenário clássico de doze snipers no mesmo time. Se você está começando, o caminho é fuzileiro:
          loadout simples, munição para distribuir e liberdade para aprender o mapa sem responsabilidade de comando.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Unidade</th>
                <th className="text-left p-3">Funções e papel</th>
                <th className="text-left p-3">Observação</th>
              </tr>
            </thead>
            <tbody>
              {UNIDADES.map((u) => (
                <tr key={u.tipo} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek whitespace-nowrap align-top">{u.tipo}</td>
                  <td className="p-3 align-top">{u.papel}</td>
                  <td className="p-3 text-muted-foreground">{u.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Duas funções merecem atenção especial. O médico é o multiplicador silencioso: reanimar mantém a pressão sobre
          o ponto e evita que o esquadrão inteiro precise refazer o trajeto. E o engenheiro decide partidas defensivas,
          porque é quem levanta nós de defesa, repara veículos e transforma uma posição improvisada em algo que
          aguenta um assalto organizado.
        </p>
        <p>
          Já as unidades de helicóptero e blindados pedem outro tipo de compromisso. São funções em que o erro
          individual custa caro para o time inteiro — perder um transporte cheio significa devolver dez jogadores ao
          ponto de partida. Só entre nelas com microfone ligado e disposição para combinar rotas antes de decolar.
        </p>

        <h2 id="peso" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Backpack className="h-7 w-7 text-geek" />
          O Novo Sistema de Peso: Como Montar o Loadout
        </h2>
        <p>
          Essa é a maior mudança mecânica em relação ao Hell Let Loose original. Lá, cada função tinha um kit fixo.
          Aqui, você monta o equipamento dentro de um orçamento de slots de carga, e cada item ocupa espaço e peso
          conforme o volume. Munição extra, explosivos, ferramentas, itens médicos e utilidades competem pelo mesmo
          orçamento.
        </p>
        <p>
          A consequência é direta no corpo do personagem: quanto mais pesado o conjunto, mais rápido a resistência
          acaba, mais lento é o deslocamento sustentado e mais demorada fica a recuperação depois de correr. Em um jogo
          com mapas enormes, isso significa que loadout pesado é uma decisão tática, não uma vantagem gratuita.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Tipo de item</th>
                <th className="text-left p-3">Impacto prático</th>
              </tr>
            </thead>
            <tbody>
              {PESO.map((p) => (
                <tr key={p.item} className="border-t border-border/50">
                  <td className="p-3 font-bold text-geek align-top">{p.item}</td>
                  <td className="p-3 text-muted-foreground">{p.efeito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Três regras simples resolvem a maior parte dos casos. Primeira: se a sua função é chegar rápido e flanquear,
          fique leve — assalto lento é assalto morto. Segunda: se a sua função é segurar posição, carregue pesado, você
          vai andar pouco e precisar de recurso. Terceira: nunca preencha o orçamento inteiro; deixar uma folga de
          carga é o que permite pegar munição ou explosivo de um companheiro caído no meio da partida.
        </p>
        <p>
          A capacidade de carga também acompanha a progressão de nível, então as primeiras horas são naturalmente mais
          restritas. Não é bug nem desvantagem injusta: é o jogo obrigando o iniciante a aprender prioridade antes de
          liberar flexibilidade.
        </p>

        <AdInArticle />

        <h2 id="dicas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lightbulb className="h-7 w-7 text-geek" />
          Dicas de Jogabilidade que Valem Partidas
        </h2>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {DICAS.map((d) => (
            <div key={d.titulo} className="rounded-xl border border-border bg-muted/20 p-5">
              <h3 className="font-bold text-geek mb-2">{d.titulo}</h3>
              <p className="text-sm text-muted-foreground">{d.texto}</p>
            </div>
          ))}
        </div>

        <p>
          Um erro que merece parágrafo próprio: tratar a morte como fracasso pessoal. Neste jogo, morrer avançando com
          o esquadrão contribui mais do que sobreviver escondido no fundo do mapa. A pontuação premia captura,
          construção, suprimento e reanimação. Se o seu placar está com poucos abates e o time venceu com você
          abastecendo e construindo, você jogou bem.
        </p>
        <p>
          Outro ponto: o áudio é informação de primeira classe. Direção de tiro, motor de veículo, hélice ao longe e
          passos em piso duro entregam mais dados do que o minimapa. Jogar de fone não é preciosismo, é vantagem
          concreta — especialmente do lado do NVA, cujo estilo depende de perceber o adversário antes de ser percebido.
        </p>

        <h2 id="veteranos" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Swords className="h-7 w-7 text-geek" />
          Para Quem Vem do Hell Let Loose Clássico
        </h2>
        <p>
          Se você já tem horas no jogo de Segunda Guerra, três coisas vão exigir readaptação. A primeira é o loadout por
          peso, que substitui a memorização de kits fixos por decisão consciente antes de cada renascimento. A segunda é
          a verticalidade e a densidade do terreno: a vegetação encurta distâncias de engajamento e reduz o valor de
          posições de longo alcance que funcionavam nos mapas europeus.
        </p>
        <p>
          A terceira é a assimetria entre facções, que quebra o hábito de aplicar a mesma estratégia dos dois lados.
          Jogar de NVA exige paciência e disciplina de rota; jogar de EUA exige coordenar apoio pesado sem depender só
          dele. E, como todos os mapas têm rio, incorporar barco de patrulha à rotina de rotação é uma habilidade nova,
          não um detalhe cosmético.
        </p>
        <p>
          Para entender por que cada mapa se comporta de um jeito, vale ler o guia irmão deste texto:{" "}
          <Link to="/post/hell-let-loose-vietnam-mapas-contexto-historico" className="text-geek font-semibold">
            todos os mapas de Hell Let Loose: Vietnam e o contexto histórico real por trás de cada um
          </Link>
          .
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-geek" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Quantas armas tem Hell Let Loose: Vietnam?</strong> São 22 armas no lançamento, divididas entre as
          forças dos EUA e o Exército do Vietnã do Norte, com arsenais distintos para cada lado e novas adições
          previstas no roadmap de conteúdo.
        </p>
        <p>
          <strong>Qual a melhor classe para começar?</strong> Fuzileiro. O loadout é simples, você carrega munição para
          o esquadrão e pode focar em aprender mapa, comunicação e posicionamento sem responsabilidades de comando.
        </p>
        <p>
          <strong>Como funciona o sistema de peso?</strong> Você monta o equipamento dentro de um orçamento de slots de
          carga. Itens mais volumosos consomem mais espaço, e quanto mais pesado o conjunto, maior o impacto na
          resistência e na velocidade de deslocamento. A capacidade aumenta com a progressão de nível.
        </p>
        <p>
          <strong>As facções são equilibradas?</strong> Elas são assimétricas por design: os EUA têm helicópteros e
          poder de fogo; o NVA tem rede de túneis e armamento voltado a curto alcance. O equilíbrio vem do confronto
          entre estilos, não de arsenais espelhados.
        </p>
        <p>
          <strong>Dá para jogar sem microfone?</strong> Dá, mas você rende bem menos. O jogo é construído em torno da
          coordenação de esquadrão; se não puder falar, use os comandos rápidos e marcações no mapa e evite funções de
          liderança, blindados e helicóptero.
        </p>
      </div>

      <EditorialTake category="geek">
        <p>
          O sistema de peso é a melhor ideia que essa série teve desde o lançamento original. Ele resolve, com uma
          mecânica só, o problema de todo shooter tático moderno: a tentação de montar um personagem que faz tudo. Aqui
          você escolhe, e a escolha dói. Isso força interdependência — e interdependência é o motivo pelo qual esse
          jogo é diferente de qualquer arena de tiro.
        </p>
        <p>
          Sobre o arsenal, minha impressão é que o NVA está mais divertido de jogar, ainda que menos confortável. O
          Type 56 e a K50M pedem outra postura: aproximar, usar cobertura visual, aceitar que você vai perder a maioria
          das trocas em campo aberto. Quem topa esse contrato encontra o jogo mais interessante dos dois lados.
        </p>
        <p>
          O que eu ainda observo com cautela é a curva de entrada. Um jogo de 50 contra 50 vive da qualidade dos times
          públicos, e o modelo de progressão que limita carga nos primeiros níveis pode afastar quem chega sem
          paciência. Se a comunidade brasileira segurar os servidores com esquadrões organizados, esse é fácil o
          shooter tático mais completo do ano. Se não segurar, vira um jogo excelente jogado sozinho — que é
          exatamente o que ele não deveria ser.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          {
            title: "Hell Let Loose: Vietnam — página oficial do jogo",
            url: "https://www.hellletloose.com/game/hll-vietnam",
            publisher: "Team17 / Expression Games",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Dev Comms Thread & Launch Updates | Hell Let Loose: Vietnam",
            url: "https://www.hellletloose.com/blog/hllv-launch-thread",
            publisher: "Team17",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Hell Let Loose: Vietnam na Steam — ficha do jogo",
            url: "https://store.steampowered.com/app/3079210/Hell_Let_Loose_Vietnam/",
            publisher: "Steam",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Hell Let Loose: Vietnam — lista de armas",
            url: "https://www.dexerto.com/wikis/hell-let-loose-vietnam/weapons/",
            publisher: "Dexerto",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Hell Let Loose: Vietnam — guia de classes",
            url: "https://gamingpromax.com/hell-let-loose-vietnam-all-classes-guide/",
            publisher: "Gaming ProMax",
            accessedAt: "Agosto 2026",
          },
          {
            title: "M16 Rifle e M60 Machine Gun — fichas históricas",
            url: "https://www.nationalmuseum.af.mil/",
            publisher: "National Museum of the U.S. Air Force",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Small arms of the Vietnam War — acervo e catalogação",
            url: "https://royalarmouries.org/",
            publisher: "Royal Armouries",
            accessedAt: "Agosto 2026",
          },
        ]}
      />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default HellLetLooseVietnamArmas2026;
