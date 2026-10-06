import { useEffect } from "react";
import {
  Calendar,
  Clock,
  Coins,
  Gamepad2,
  Hammer,
  Heart,
  Home,
  Leaf,
  Map,
  Shield,
  Sprout,
  User,
  Users,
  Wheat,
} from "lucide-react";
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
import heroImg from "@/assets/medieval-dynasty-guia-completo-2026.webp";

const SLUG = "medieval-dynasty-guia-completo-2026";
const TITLE = "Medieval Dynasty em 2026: Guia Completo para Criar uma Dinastia";

const LOOP_DA_VILA = [
  { icon: Leaf, title: "Sobreviver", text: "Encontrar água, comida, abrigo e roupas adequadas antes que clima, fome ou animais interrompam seus planos." },
  { icon: Hammer, title: "Construir", text: "Escolher um terreno, erguer casas e oficinas e organizar caminhos, depósitos, campos e áreas de produção." },
  { icon: Users, title: "Administrar", text: "Recrutar moradores, atribuir profissões, fornecer ferramentas e equilibrar necessidades com a capacidade da vila." },
  { icon: Heart, title: "Deixar um legado", text: "Formar uma família, educar um herdeiro e transformar um acampamento precário em uma comunidade duradoura." },
];

const PROFISSOES = [
  { area: "Extração", exemplos: "Lenhador, mineiro e trabalhador de escavação", entrega: "Troncos, pedra, minério, argila e outros materiais básicos" },
  { area: "Agricultura", exemplos: "Agricultor, tratador e apicultor", entrega: "Grãos, vegetais, palha, animais, fertilizante e mel" },
  { area: "Caça", exemplos: "Caçador e pescador", entrega: "Carne, couro, pele, penas e peixe" },
  { area: "Produção", exemplos: "Ferreiro, costureiro, cozinheiro e artesão", entrega: "Ferramentas, roupas, refeições e mercadorias" },
  { area: "Serviços", exemplos: "Vendedor e curandeiro", entrega: "Comércio da vila e apoio às necessidades da população" },
];

const FICHA = [
  ["Desenvolvedora", "Render Cube"],
  ["Publicadora", "Toplitz Productions"],
  ["Versão 1.0", "23 de setembro de 2021"],
  ["Gêneros", "Sobrevivência, RPG, simulação de vida e construção de vila"],
  ["Mapas", "The Valley e The Oxbow"],
  ["Modos", "Solo; cooperativo para até quatro participantes em The Oxbow"],
  ["Plataformas principais", "PC, PlayStation 5 e Xbox Series X|S"],
  ["Idioma", "Interface e legendas em português do Brasil no PC"],
];

const MedievalDynastyGuia2026 = () => {
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
            <Wheat className="h-4 w-4" /> Sobrevivência · Construção · RPG
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />6 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />20 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="geek" publishedAt="6 de Outubro, 2026" />
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-geek/20 mb-8">
        <img
          fetchPriority="high"
          loading="eager"
          decoding="async"
          src={heroImg}
          width={1536}
          height={864}
          alt="Colono observa uma vila medieval com moradores trabalhando nos campos e construindo casas"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-p:my-5 prose-p:leading-8">
        <p className="lead text-xl text-muted-foreground">
          <strong>Medieval Dynasty</strong> começa com pouco: algumas roupas, ferramentas improvisadas e um vale onde cada refeição precisa ser conquistada. Horas depois, aquele sobrevivente pode comandar uma aldeia com agricultores, ferreiros, caçadores e famílias inteiras. O diferencial está nessa mudança de escala. O jogo da Render Cube mistura sobrevivência em primeira pessoa, RPG, simulação de vida e administração, sem abandonar o trabalho manual que deu origem ao assentamento. Este guia explica como os sistemas se conectam, compara os mapas The Valley e The Oxbow, detalha o cooperativo e mostra o que mudou até 2026, sem estragar as principais descobertas da história.
        </p>

        <div className="not-prose my-8 rounded-xl border border-geek/30 bg-gradient-to-br from-geek/15 via-card/80 to-secondary/50 p-6 md:p-7">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-geek/15 p-3 text-geek"><Home className="h-7 w-7" /></div>
            <div>
              <p className="font-display text-xl font-bold">A fantasia central</p>
              <p className="mt-2 leading-relaxed text-foreground/85">Você não recebe um reino pronto. Corta a primeira árvore, ergue a primeira casa, conquista a confiança dos primeiros moradores e cria uma estrutura que poderá sobreviver ao próprio personagem.</p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-3"><Gamepad2 className="h-7 w-7 text-geek" />O que é Medieval Dynasty?</h2>
        <p>
          Desenvolvido pelo estúdio polonês Render Cube e publicado pela Toplitz Productions, <em>Medieval Dynasty</em> entrou em acesso antecipado para PC em 17 de setembro de 2020 e chegou à versão 1.0 em 23 de setembro de 2021. A proposta oficial combina sobrevivência, simulação, RPG e estratégia de construção. Em vez de controlar uma cidade a partir de uma câmera distante, você vive dentro dela: derruba árvores, levanta paredes, planta sementes, conversa com viajantes e precisa caminhar até cada lugar durante a fase inicial.
        </p>
        <p>
          Essa perspectiva muda o significado de crescer. Uma oficina não é apenas um número em um menu; antes de contratar um artesão, você escolhe o local, reúne materiais, monta a estrutura e fabrica as ferramentas que o trabalhador consumirá. A vila automatizada continua dependente de decisões do jogador. Moradores precisam de casas, comida, água e lenha. Profissões precisam de equipamentos e insumos. Produzir muito de um item inútil ocupa armazenamento, enquanto ignorar uma cadeia essencial pode paralisar vários edifícios.
        </p>
        <p>
          O cenário é uma representação fictícia da Europa medieval, não a reconstrução de um país ou ano específico. A ambientação procura plausibilidade em arquitetura rural, ferramentas, cultivo e organização social, mas adapta tudo para criar um sandbox acessível. Não há magia comandando o progresso nem monstros fantásticos dominando o mapa. Os perigos são animais, frio, fome, acidentes, bandidos e escolhas ruins de planejamento.
        </p>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3"><Map className="h-7 w-7 text-geek" />The Valley e The Oxbow: duas formas de começar</h2>
        <p>
          <strong>The Valley</strong> é o mapa original e acompanha Racimir, jovem que foge da guerra e procura um tio na região de Gostovia. O encontro que esperava não acontece, mas a reputação deixada pelo parente abre uma oportunidade: instalar-se no vale e construir uma nova vida. A campanha apresenta personagens, missões e uma linha narrativa própria enquanto ensina os sistemas gradualmente. É uma experiência exclusivamente solo e continua sendo a melhor entrada para quem deseja uma jornada pessoal com começo mais dirigido.
        </p>
        <p>
          <strong>The Oxbow</strong> chegou ao Steam em dezembro de 2023 e às plataformas atuais de console e demais lojas de PC em junho de 2024. A região começa em Piastovia, tem missões e moradores próprios e permite criar um personagem masculino ou feminino. O mapa pode ser jogado sozinho, mas foi concebido também para o cooperativo de até quatro participantes no total. O grupo compartilha o mundo e pode caçar, construir, cultivar e administrar a comunidade em conjunto.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-xl border border-geek/25 bg-card/70">
          <div className="grid md:grid-cols-2">
            <section className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-border">
              <p className="text-xs font-bold uppercase text-geek">The Valley</p>
              <h3 className="mt-2 font-display text-xl font-bold">A história de Racimir</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
                <li>• Campanha original e exclusivamente solo</li>
                <li>• Protagonista e ponto de partida definidos</li>
                <li>• Introdução gradual aos sistemas e ao vale</li>
                <li>• Ideal para quem prioriza uma jornada narrativa</li>
              </ul>
            </section>
            <section className="p-6 md:p-7">
              <p className="text-xs font-bold uppercase text-geek">The Oxbow</p>
              <h3 className="mt-2 font-display text-xl font-bold">Liberdade e cooperação</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
                <li>• Solo ou cooperativo para até quatro participantes</li>
                <li>• Criador de personagem masculino e feminino</li>
                <li>• Piastovia, novas missões e personagens próprios</li>
                <li>• Ideal para construir uma comunidade com amigos</li>
              </ul>
            </section>
          </div>
        </div>

        <p>
          Os mapas não são apenas duas entradas para a mesma campanha. Missões, personagens e estrutura inicial mudam. Também é importante não prometer cooperativo em The Valley: oficialmente, a experiência compartilhada pertence a The Oxbow. Em 2026, o jogo oferece multiplayer entre plataformas compatíveis nesse mapa. Como toda pessoa conectada pode participar da construção, o grupo ganha velocidade, mas precisa combinar prioridades para não consumir materiais destinados a casas, ferramentas ou impostos.
        </p>

        <h2 className="flex items-center gap-3"><Sprout className="h-7 w-7 text-geek" />Da sobrevivência à primeira casa</h2>
        <p>
          Os primeiros dias lembram um jogo tradicional de sobrevivência. Galhos e pedras viram ferramentas básicas; árvores fornecem troncos; plantas e caça oferecem comida; água precisa estar acessível. Temperatura e estações influenciam a rotina, e roupas inadequadas tornam inverno ou calor mais perigosos. Saúde, fome, sede e vigor não desaparecem quando a vila cresce, mas deixam de ocupar todo o seu tempo quando moradores passam a produzir recursos essenciais.
        </p>
        <p>
          Escolher onde construir é uma decisão de longo prazo. Um terreno plano perto de água simplifica casas e agricultura. Floresta próxima reduz caminhadas durante a expansão, enquanto minas e povoados afetam comércio e extração. O jogo permite erguer assentamentos bonitos em locais desafiadores, mas distância cobra um preço real antes de montarias, depósitos e trabalhadores diminuírem a carga manual.
        </p>
        <p>
          As construções começam com estruturas simples de madeira e taipa. Paredes podem receber materiais melhores e isolamento, reduzindo consumo de lenha e aumentando conforto. Casas limitam a quantidade de moradores e a formação de famílias; oficinas liberam cadeias produtivas; armazéns conectam recursos e alimentos entre os edifícios. A localização dos depósitos importa menos para o acesso abstrato dos trabalhadores do que para o deslocamento do próprio jogador, mas uma vila legível continua mais agradável de administrar.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {LOOP_DA_VILA.map(({ icon: Icon, title, text }) => (
            <section key={title} className="rounded-lg border border-geek/20 bg-gradient-to-br from-geek/10 to-card/70 p-5">
              <Icon className="h-6 w-6 text-geek" />
              <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{text}</p>
            </section>
          ))}
        </div>

        <h2 className="flex items-center gap-3"><Users className="h-7 w-7 text-geek" />Moradores, profissões e cadeias de produção</h2>
        <p>
          A grande virada acontece quando viajantes aceitam morar no assentamento. Recrutar não é apenas aumentar uma população. Cada pessoa possui aptidões em áreas como extração, caça, agricultura, sobrevivência, diplomacia e produção. Alocar alguém numa atividade compatível aumenta eficiência, mas a satisfação também depende de moradia e abastecimento. A interface de gestão permite acompanhar trabalho, necessidades e estoques sem visitar cada edifício a todo momento.
        </p>
        <p>
          Trabalhadores não criam recursos do nada. Um lenhador precisa de machados; um caçador consome facas; agricultores exigem ferramentas, sementes e fertilizante. O ferreiro pode repor equipamentos usando metal e madeira, desde que outra cadeia já entregue esses materiais. Esse encadeamento é o verdadeiro quebra-cabeça de <em>Medieval Dynasty</em>. Uma vila autossuficiente é aquela em que produção, consumo e reposição alcançam equilíbrio, não necessariamente a que possui mais edifícios.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table>
            <thead><tr><th>Área</th><th>Trabalhos</th><th>Função na vila</th></tr></thead>
            <tbody>
              {PROFISSOES.map((item) => (
                <tr key={item.area}><td className="font-bold text-geek">{item.area}</td><td>{item.exemplos}</td><td>{item.entrega}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3"><Wheat className="h-7 w-7 text-geek" />Agricultura, estações e planejamento anual</h2>
        <p>
          O calendário transforma agricultura em planejamento, pois cada cultura possui janelas de plantio e colheita. Preparar o solo envolve arar, fertilizar, semear e colher, e os campos podem demandar muito trabalho quando dimensionados cedo demais. Centeio, aveia, trigo, linho e vegetais alimentam cadeias diferentes. Algumas safras viram comida; outras fornecem palha, tecido, ração ou sementes para o próximo ciclo.
        </p>
        <p>
          A passagem das estações reorganiza prioridades. Primavera favorece plantio, verão abre novas colheitas e coleta, outono prepara reservas, e inverno aumenta a importância de roupas e lenha. A duração de cada estação pode ser ajustada nas configurações da partida. O padrão mantém ritmo rápido suficiente para acompanhar anos e gerações, enquanto temporadas maiores atendem quem prefere construir e explorar com calma.
        </p>
        <p>
          Animais ampliam a economia: galinhas, gansos, porcos, ovelhas, cabras, vacas e equinos cumprem funções distintas. Esterco alimenta a produção de fertilizante; lã e leite abastecem oficinas e cozinha; montarias reduzem deslocamentos. Comprar animais cedo demais, contudo, imobiliza moedas e exige instalações. A expansão mais segura acompanha uma necessidade concreta da cadeia produtiva.
        </p>

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 text-geek" />Comércio, impostos, reputação e progressão</h2>
        <p>
          Moedas entram principalmente pela venda de mercadorias, contratos e missões. Ferramentas, roupas, alimentos preparados e excedentes agrícolas podem sustentar a expansão, mas peso, tempo de produção e preço impedem uma resposta universal sobre o “melhor item”. Automatizar uma cadeia lucrativa costuma valer mais que fabricar manualmente centenas de peças apenas para explorar uma fórmula.
        </p>
        <p>
          Impostos são cobrados conforme propriedades e atividades da comunidade. Expandir sem reservar dinheiro pode transformar o fim do ano em corrida desesperada ao mercado. Já a reputação da dinastia cresce com missões e relações e determina quanto o assentamento pode avançar. Ela funciona como freio narrativo e administrativo: ter materiais para dez casas não significa que dez famílias aceitarão morar imediatamente sob sua liderança.
        </p>
        <p>
          As habilidades evoluem ao praticar suas áreas. Cortar, construir, cultivar, caçar, produzir e negociar oferecem experiência, que libera vantagens específicas. A progressão reduz atritos e favorece especializações, mas não substitui organização. Tecnologias de edifícios e receitas também avançam conforme as atividades correspondentes, fazendo a própria rotina da vila abrir novas possibilidades.
        </p>

        <h2 className="flex items-center gap-3"><Heart className="h-7 w-7 text-geek" />Família, herdeiro e o sentido da dinastia</h2>
        <p>
          O título não é apenas uma metáfora. O protagonista pode desenvolver uma relação, casar e ter um filho. O herdeiro cresce ao longo dos anos e pode assumir a continuidade quando chega à idade apropriada. Essa mecânica dá propósito ao calendário acelerado: as estações não servem somente às plantações, mas marcam o envelhecimento das pessoas e a formação de novas famílias dentro da aldeia.
        </p>
        <p>
          Moradores solteiros que dividem uma casa podem formar casais, e filhos passam a integrar a população. Durante um período após o nascimento, a mãe se dedica ao bebê e deixa seu posto, algo que precisa entrar no planejamento de mão de obra. A vila envelhece de modo orgânico. Jovens substituem trabalhadores mais velhos, e o assentamento que parecia uma coleção de oficinas passa a representar gerações.
        </p>
        <p>
          Não é necessário esperar décadas para aproveitar o jogo. Construção e administração já oferecem um ciclo completo, e configurações permitem ajustar dificuldade, necessidades e ritmo. A camada dinástica recompensa campanhas longas, especialmente jogadores interessados em observar consequências, aperfeiçoar o traçado da vila e deixar uma economia estável para a próxima geração.
        </p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3"><Shield className="h-7 w-7 text-geek" />Caça, exploração e combate</h2>
        <p>
          Florestas abrigam presas e predadores. Coelhos e aves atendem necessidades iniciais, enquanto javalis, lobos, linces, ursos e outros animais exigem preparo. Arcos e lanças tornam a caça mais segura, mas posicionamento, vigor, dano e qualidade do equipamento continuam relevantes. Rastrear, retirar carne e pele e transportar o resultado faz parte da atividade; não é um sistema de combate separado da economia.
        </p>
        <p>
          Bandidos e acampamentos adicionam confrontos humanos, porém <em>Medieval Dynasty</em> não é um RPG de guerra em larga escala. A construção e a vida comunitária permanecem no centro. Quem espera cercos, exércitos e batalhas constantes encontrará um jogo diferente; quem prefere tensão ocasional entre longos períodos de planejamento provavelmente aceitará melhor o ritmo.
        </p>
        <p>
          Explorar também significa descobrir povoados, comerciantes, recursos, missões e lugares adequados para expansão. O mapa não entrega toda conveniência de imediato, e as primeiras viagens podem ser demoradas. Com o tempo, montarias, conhecimento das rotas e uma produção organizada diminuem esse peso. Essa transformação é deliberada: conforto é algo construído pelo jogador.
        </p>

        <h2 className="flex items-center gap-3"><Hammer className="h-7 w-7 text-geek" />O que mudou até 2026?</h2>
        <p>
          A evolução mais importante após o lançamento foi The Oxbow e seu modo cooperativo, acompanhados por criador de personagem e novas missões. Em junho de 2026, a atualização gratuita <strong>Full Stock</strong> aprofundou a apresentação das aldeias com estações decorativas animadas, novos objetos e o sistema de preenchimento visual dos depósitos. Moradores podem ser vistos realizando tarefas cotidianas, enquanto prateleiras e espaços de armazenamento passam a refletir os bens produzidos.
        </p>
        <p>
          Render Cube e Toplitz também divulgaram um roteiro de suporte que se estende até o segundo trimestre de 2027, incluindo novas entregas e a indicação de outro mapa. Roteiro não é conteúdo lançado: futuras datas, nomes e recursos podem mudar. Por isso, este guia trata Full Stock como disponível e as demais promessas apenas como planos anunciados, sem apresentá-las como parte atual do produto.
        </p>
        <p>
          Em 2026, a versão principal está disponível para PC, PlayStation 5 e Xbox Series X|S. Existe ainda <em>Medieval Dynasty: New Settlement</em> para realidade virtual, mas ele é um jogo independente criado para Meta Quest, não uma simples versão VR da mesma campanha. Também não há lançamento oficial de <em>Medieval Dynasty</em> para Nintendo Switch confirmado pelas fontes consultadas.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
          <table>
            <tbody>
              {FICHA.map(([label, value]) => (
                <tr key={label}><td className="font-bold text-geek">{label}</td><td>{value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="flex items-center gap-3"><Gamepad2 className="h-7 w-7 text-geek" />Requisitos de PC e desempenho</h2>
        <p>
          A página oficial do Steam informa Windows 10 ou 11 de 64 bits, 8 GB de memória e placas com 6 GB de VRAM, como GeForce GTX 1060 ou Radeon RX 580, na configuração mínima. Nos requisitos recomendados, aparecem 16 GB de RAM, processador na faixa de 4 GHz e GPU com 8 GB de VRAM, como GTX 1660 ou RX 590. O armazenamento indicado é de 20 GB, com SSD recomendado.
        </p>
        <p>
          Esses números descrevem a base oficial, não uma garantia de taxa de quadros em qualquer vila. Assentamentos grandes aumentam a quantidade de moradores, edifícios, animais e objetos simulados. Resolução, densidade de vegetação e escala da comunidade afetam o desempenho. Em hardware próximo do mínimo, reduzir opções visuais e evitar crescimento descontrolado ajuda mais do que perseguir apenas a aparência de uma captura promocional.
        </p>

        <h2 className="flex items-center gap-3"><Home className="h-7 w-7 text-geek" />Para quem vale a pena?</h2>
        <p>
          <em>Medieval Dynasty</em> é especialmente indicado a quem gosta de observar um sistema crescer devagar. Fãs de sobrevivência encontram coleta e risco, jogadores de construção desenham uma vila habitável, e quem prefere gestão pode aperfeiçoar profissões e estoques. O jogo respeita rotinas: plantar, reparar, transportar e conferir recursos são partes do prazer, não obstáculos descartáveis antes da “ação verdadeira”.
        </p>
        <p>
          Essa mesma qualidade define sua principal limitação. O começo exige deslocamento e repetição manual, menus de produção pedem atenção e a narrativa não tem o ritmo de um RPG cinematográfico. O combate é funcional, mas não possui a profundidade de títulos dedicados à ação medieval. Jogar com amigos acelera tarefas e cria histórias espontâneas, embora coordenação seja necessária para que liberdade compartilhada não vire desperdício de materiais.
        </p>
        <p>
          Para iniciantes, The Valley oferece orientação mais clara e uma relação forte com Racimir. The Oxbow é melhor para grupos, personalização e campanhas menos presas a um protagonista. Em ambos, vale começar pequeno: uma casa, uma fonte segura de alimento, um depósito e poucos moradores bem equipados criam base melhor que uma cidade vazia construída rápido demais.
        </p>

        <h2>Perguntas frequentes</h2>
        <div className="not-prose my-6 space-y-4">
          {[
            ["Medieval Dynasty tem cooperativo?", "Sim. The Oxbow pode ser jogado sozinho ou em cooperativo para até quatro participantes no total. The Valley permanece uma campanha solo."],
            ["É possível jogar como mulher?", "Sim em The Oxbow, que oferece criador de personagem masculino e feminino. A campanha original de The Valley acompanha Racimir."],
            ["O jogo tem português?", "A página do Steam lista interface e legendas em português do Brasil. A disponibilidade de idiomas deve ser conferida na loja da plataforma usada."],
            ["Medieval Dynasty é historicamente exato?", "Ele usa uma ambientação medieval europeia plausível, mas seu vale, personagens e cronologia formam uma ficção criada para o jogo."],
            ["Existe versão para Nintendo Switch?", "Não há versão oficial para Nintendo Switch confirmada nas páginas da desenvolvedora, publicadora ou lojas consultadas até 6 de outubro de 2026."],
            ["Preciso formar uma família?", "É a forma de experimentar a continuidade da dinastia e o herdeiro, mas construção, exploração e gestão oferecem muitas horas mesmo antes dessa etapa."],
          ].map(([question, answer]) => (
            <section key={question} className="rounded-lg border border-geek/20 bg-card/70 p-5">
              <h3 className="font-display font-bold text-geek">{question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </section>
          ))}
        </div>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: a melhor parte é lembrar onde tudo começou">
        <p>
          O momento mais forte de <em>Medieval Dynasty</em> não é construir o maior edifício, mas atravessar uma vila movimentada e lembrar que ali existia apenas mato. Cada telhado representa madeira que você cortou, uma família que convenceu a ficar e uma cadeia que aprendeu a equilibrar. Poucos jogos transformam organização em memória com tanta eficiência.
        </p>
        <p>
          A repetição inicial e o combate simples impedem uma recomendação universal. Mas, para quem gosta de progresso paciente, cidades funcionais e campanhas que contam histórias por meio de sistemas, a combinação continua singular em 2026. The Oxbow tornou a experiência social sem apagar a campanha de Racimir, e o suporte prolongado mostra que essa aldeia ainda não terminou de crescer.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "Medieval Dynasty — página oficial e recursos do jogo", url: "https://www.toplitz-productions.com/medieval-dynasty.html", publisher: "Toplitz Productions", accessedAt: "Outubro 2026" },
          { title: "Medieval Dynasty no Steam — lançamento, idiomas e requisitos", url: "https://store.steampowered.com/app/1129580/Medieval_Dynasty/", publisher: "Steam", accessedAt: "Outubro 2026" },
          { title: "Co-op e The Oxbow chegam aos consoles", url: "https://www.toplitz-productions.com/news-2388/medieval-dynasty-new-co-op-mode-and-map-now-available-for-console.html", publisher: "Toplitz Productions", accessedAt: "Outubro 2026" },
          { title: "Apresentação oficial de The Oxbow", url: "https://store.steampowered.com/news/app/1129580/view/3659784467931694333", publisher: "Render Cube / Steam", accessedAt: "Outubro 2026" },
          { title: "Full Stock Update e roteiro de suporte até 2027", url: "https://www.toplitz-productions.com/news-2388/new-full-stock-update-for-medieval-dynasty-adds-more-life-to-settlements.html", publisher: "Toplitz Productions", accessedAt: "Outubro 2026" },
          { title: "Medieval Dynasty para PlayStation 5", url: "https://store.playstation.com/concept/10005231", publisher: "PlayStation Store", accessedAt: "Outubro 2026" },
          { title: "Medieval Dynasty para Xbox Series X|S", url: "https://www.xbox.com/games/store/medieval-dynasty/9PDDP6ML6XHF", publisher: "Xbox", accessedAt: "Outubro 2026" },
          { title: "Medieval Dynasty: New Settlement — experiência VR independente", url: "https://www.toplitz-productions.com/news-2388/medieval-dynasty-goes-virtual-out-now-all-new-standalone-vr-experience.html", publisher: "Toplitz Productions", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default MedievalDynastyGuia2026;