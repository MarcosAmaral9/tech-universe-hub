import { useEffect } from "react";
import { Bot, Calendar, Clock, Heart, ShieldCheck, Brain, Coins, Globe, User } from "lucide-react";
import BackNavigation from "@/components/BackNavigation";
import CategoryBadge from "@/components/CategoryBadge";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import RelatedPosts from "@/components/RelatedPosts";
import CommentSection from "@/components/CommentSection";
import { AdLeaderboard, AdInArticle, AdRectangle } from "@/components/AdSense";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import { blogPosts } from "@/data/posts";
import heroImg from "@/assets/ubtech-uworld-u1-robo-companhia-preco-2026.webp";

const SLUG = "ubtech-uworld-u1-robo-companhia-preco-2026";
const TITLE = "UWORLD U1 da UBTECH: Preço, Características e os Dilemas dos Robôs de Companhia";

export default function UbtechU1RoboCompanhia2026() {
  const post = blogPosts.find((item) => item.slug === SLUG);
  useEffect(() => { trackArticleRead(SLUG, TITLE, "ia"); }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="flex items-center gap-2 text-sm text-ia"><Bot className="h-4 w-4" />Robótica · Companhia · Ética</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-5">{TITLE}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />8 de outubro de 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
        </div>
        <ShareWhatsApp />
        <AuthorBio category="ia" publishedAt="8 de outubro de 2026" />
      </header>

      <figure className="mb-9">
        <img src={heroImg} width={1536} height={864} fetchPriority="high" loading="eager" decoding="async" alt="Ilustração editorial de uma pessoa conversando com um robô fictício; não representa o UWORLD U1" className="aspect-video w-full object-cover rounded-lg border border-ia/20" />
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">Ilustração editorial criada com IA sobre companhia robótica. O robô retratado é fictício, não uma fotografia nem uma reprodução técnica do UWORLD U1. As imagens oficiais podem ser consultadas no comunicado da fabricante nas fontes.</figcaption>
      </figure>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-p:my-6 prose-p:leading-8 prose-h2:text-ia prose-h2:mt-12">
        <p className="lead text-xl text-muted-foreground">Um robô com aparência humana, memória de conversas e respostas destinadas a transmitir acolhimento: essa é a proposta do <strong>UWORLD U1</strong>, linha apresentada pela chinesa UBTECH. O produto desloca a discussão da inteligência artificial para dentro de casa. Em vez de perguntar apenas quanto trabalho uma máquina consegue executar, precisamos perguntar o que acontece quando ela passa a participar da nossa vida emocional. Preço, disponibilidade, limitações técnicas e proteção de dados importam tanto quanto os dilemas de apego, solidão e romances entre humanos e robôs.</p>
        <p>Há um cuidado importante com a cronologia: o lançamento ocorreu em <strong>30 de junho de 2026, em Shenzhen</strong>, e o comunicado internacional foi divulgado em 1º de julho. Portanto, não se trata de uma apresentação ocorrida nesta semana. Nesta apuração, as especificações comerciais são atribuídas à empresa; resultados de estudos sobre outros agentes artificiais não são tratados como provas de eficácia psicológica do U1. A fabricante é a UBTECH, e UWORLD é sua marca de robótica de consumo: não confunda esse produto com robôs da Unitree ou de outras empresas chinesas.</p>

        <AdLeaderboard className="my-8" />

        <div className="not-prose grid gap-4 sm:grid-cols-3 my-9">
          <div className="rounded-lg border border-ia/30 bg-ia/10 p-5"><ShieldCheck className="h-6 w-6 text-ia mb-3" /><h2 className="font-display font-bold text-ia">Confirmado nas fontes</h2><p className="text-sm leading-6 mt-3">Apresentação em junho; três versões; preço inicial de 119.800 yuans; foco em companhia.</p></div>
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-5"><Brain className="h-6 w-6 text-primary mb-3" /><h2 className="font-display font-bold text-primary">Segundo a fabricante</h2><p className="text-sm leading-6 mt-3">88 graus de liberdade, reconhecimento emocional, memória persistente e prioridade ao processamento local.</p></div>
          <div className="rounded-lg border border-border bg-muted/40 p-5"><Globe className="h-6 w-6 text-muted-foreground mb-3" /><h2 className="font-display font-bold">Sem confirmação nesta apuração</h2><p className="text-sm leading-6 mt-3">Preço oficial brasileiro, assistência local, peso por versão e benefícios clínicos demonstrados para o U1.</p></div>
        </div>

        <h2 className="flex items-center gap-3"><Bot className="h-7 w-7 shrink-0" />O que é o UWORLD U1?</h2>
        <p>A UBTECH, fundada em 2012, já atua em robôs de serviço e humanoides industriais. Seu catálogo inclui a família Walker, voltada a aplicações profissionais. Com a UWORLD, a empresa pretende ampliar o negócio para produtos de consumo e interação cotidiana. O U1 pertence a essa segunda frente: sua proposta é oferecer presença física, conversa e comportamentos de companhia, e não funcionar como uma versão doméstica de um trabalhador de fábrica.</p>
        <p>A linha combina aparência biomimética, mecanismos de expressão e inteligência artificial conversacional. Pele artificial, movimento dos olhos e sincronização entre fala e boca procuram tornar a interação menos semelhante a um alto-falante inteligente. Isso não significa que exista uma pessoa dentro da máquina. Uma conversa convincente depende de sensores, modelos computacionais, regras de interação e acionamento mecânico; não demonstra consciência, sentimentos próprios ou compreensão humana das experiências narradas pelo usuário.</p>
        <p>No comunicado, a empresa também menciona recepção, hotelaria, turismo, exposições e apoio a idosos entre possíveis aplicações. Uma lista comercial de usos, porém, não equivale a certificação médica ou comprovação de desempenho em cada ambiente. O mesmo robô pode impressionar em uma demonstração curta e enfrentar dificuldades com ruído, sotaques, conversas ambíguas ou rotina doméstica prolongada. São avaliações independentes e uso real que ajudam a distinguir apresentação de confiabilidade.</p>

        <h2 className="flex items-center gap-3"><Calendar className="h-7 w-7 shrink-0" />Lançamento, reservas e disponibilidade</h2>
        <p>A reportagem de lançamento do TechNode informa que as reservas foram abertas na JD.com em 2 de junho e que a apresentação ocorreu em Shenzhen no dia 30. O comunicado da UBTECH afirma que os pedidos acumulados já superavam <strong>13.361 unidades</strong> naquele evento. Esse número precisa ser lido como uma declaração de pedidos da empresa: não é uma contagem independente de robôs entregues, instalados e em funcionamento nas casas dos compradores.</p>
        <p>A primeira cobertura previa envios para <strong>16 de setembro de 2026</strong>. Em uma publicação de 20 de setembro, o Robot Price Index relatou o início das entregas na China, em torno dessa data. A informação posterior é um relato de uma publicação especializada, não uma auditoria de logística. Não localizamos, nas fontes reunidas, um balanço independente de quantas unidades chegaram aos clientes nem uma confirmação de disponibilidade imediata de todas as configurações. Por isso, seria incorreto transformar as reservas de junho em vendas já integralmente entregues.</p>
        <p>Para o Brasil, não há preço regional, rede de manutenção ou distribuição oficial confirmados nesta apuração. Um anúncio em uma loja internacional também não prova compatibilidade de idioma, suporte ou garantia válida no país. Antes de considerar importação, seria necessário obter respostas por escrito sobre versão, prazo, assistência, peças e atualizações. Para um equipamento com motores, sensores e software proprietário, a possibilidade de reparar e continuar utilizando o produto pode valer mais do que uma demonstração chamativa.</p>

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 shrink-0" />Quanto custa? Lite, Pro e Ultra</h2>
        <p>O preço inicial de <strong>119.800 yuans</strong> aparece no comunicado oficial e na reportagem da AFP publicada pelo The Straits Times. A cobertura especializada do lançamento detalha o U1 Pro a 169.800 yuans e duas configurações do Ultra, a 880.000 e 990.000 yuans. São valores anunciados no mercado chinês, não uma oferta brasileira. Personalização, serviços adicionais e condições de compra precisam ser conferidos diretamente com o vendedor autorizado.</p>
        <div className="not-prose my-8 overflow-x-auto rounded-lg border border-ia/25">
          <table className="w-full text-sm text-left">
            <caption className="text-left p-4 bg-ia/10 font-semibold text-ia">Preços anunciados no lançamento — referência, não cotação de compra</caption>
            <thead className="bg-muted"><tr><th className="p-4">Versão</th><th className="p-4">Formato anunciado</th><th className="p-4">Yuans (CNY)</th><th className="p-4">Exemplo em reais*</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 font-semibold">U1 Lite</td><td className="p-4">Semi-torso</td><td className="p-4 whitespace-nowrap">119.800</td><td className="p-4 whitespace-nowrap">R$ 89.850</td></tr>
              <tr><td className="p-4 font-semibold">U1 Pro</td><td className="p-4">Corpo inteiro</td><td className="p-4">169.800</td><td className="p-4 whitespace-nowrap">R$ 127.350</td></tr>
              <tr><td className="p-4 font-semibold">U1 Ultra feminino</td><td className="p-4">Corpo inteiro, alta dinâmica</td><td className="p-4">880.000</td><td className="p-4 whitespace-nowrap">R$ 660.000</td></tr>
              <tr><td className="p-4 font-semibold">U1 Ultra masculino</td><td className="p-4">Corpo inteiro, alta dinâmica</td><td className="p-4">990.000</td><td className="p-4 whitespace-nowrap">R$ 742.500</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">*Simulação aritmética com taxa <strong>hipotética de R$ 0,75 por yuan</strong>, usada apenas para visualizar a ordem de grandeza. Não é cotação oficial de 8 de outubro, fechamento cambial ou preço no Brasil. Não inclui frete, seguro, impostos, tarifas cambiais ou personalização. Fonte dos valores detalhados por versão: Embodied Global; o comunicado oficial confirma o preço inicial.</p>
        <p>A diferença de preço entre Lite e Ultra não deve ser interpretada como uma simples troca de aparência. O comunicado distingue um modelo de semi-torso, um de corpo inteiro de alto desempenho e outro de alta dinâmica. Contudo, sem uma ficha comparável e testes públicos para cada configuração, não é possível concluir que todos tenham a mesma mobilidade, autonomia ou capacidade de operação. Um consumidor deveria pedir documentação do modelo específico, em vez de comprar com base em números atribuídos à família inteira.</p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3"><Brain className="h-7 w-7 shrink-0" />Dimensões, movimentos e inteligência emocional</h2>
        <p>O TechNode descreve mais de cinquenta aparências e tipos corporais apresentados no evento, com alturas entre <strong>1,60 e 1,85 metro</strong>. Isso caracteriza a variedade mostrada no lançamento, não uma altura única para toda a linha. Não encontramos uma ficha consolidada com peso, largura e profundidade de cada versão. O Lite, por ser semi-torso, também não pode ser comparado diretamente a um humanoide de corpo inteiro usando apenas uma medida de altura.</p>
        <p>A UBTECH anuncia <strong>88 graus de liberdade</strong> e uma estrutura cervical biomimética de duplo pivô. Graus de liberdade descrevem possibilidades independentes de movimento; não representam uma nota geral de inteligência ou segurança. A afirmação de reproduzir até 90% dos movimentos humanos fundamentais é da fabricante e depende de como esses movimentos foram definidos. Não deve ser confundida com capacidade de realizar 90% das tarefas humanas, caminhar em qualquer ambiente ou manipular qualquer objeto.</p>
        <p>O comunicado também atribui ao sistema reconhecimento de mais de vinte estados emocionais com precisão superior a 90%, resposta intuitiva de 500 milissegundos e latência de sincronização labial de até vinte milissegundos. São métricas comerciais sem metodologia de teste detalhada nas fontes consultadas. Não sabemos se a mesma precisão se mantém em idiomas, idades ou contextos culturais diferentes. Detectar um padrão de voz associado a cansaço não é equivalente a saber o que uma pessoa sente ou diagnosticar seu estado psicológico.</p>
        <p>A memória de longo prazo, chamada Agent Memory OS, pretende preservar contexto entre interações. Lembrar preferências e acontecimentos pode tornar o diálogo mais pessoal, mas também cria um arquivo íntimo da rotina. Sobre autonomia, a reportagem da AFP menciona até quatro horas de bateria para o modelo básico; isso não é resultado de nosso teste nem especificação universal para Pro e Ultra. A duração efetiva depende de movimento, conversa, sensores e condições de uso. Não há base para prometer presença ativa ininterrupta.</p>

        <h2>Companhia não é trabalho doméstico nem tratamento</h2>
        <p>A cobertura da AFP registra que o modelo básico não cozinha e não faz tarefas domésticas. Também relata que a linha não foi concebida para oferecer relações íntimas, ao menos no posicionamento informado naquele lançamento. O debate sobre romance é pertinente porque o discurso comercial fala em lealdade e amor incondicional, não porque exista comprovação de uma função sexual no produto. Fazer essa distinção evita transformar um robô de companhia em algo que as fontes não descrevem.</p>
        <p>Conversar sobre o dia ou lembrar um horário de medicamento não torna o aparelho médico, psicólogo ou cuidador capaz de agir em uma emergência. Recomendações de saúde produzidas por modelos de linguagem podem estar erradas. Qualquer lembrete deve seguir a orientação do profissional responsável, e decisões sobre doses ou tratamento não devem ser delegadas ao robô. Apoio emocional comercial é uma proposta de uso; eficácia terapêutica exige avaliação clínica específica, que não localizamos para o U1.</p>

        <h2 className="flex items-center gap-3"><Heart className="h-7 w-7 shrink-0" />Por que humanos podem se apegar a robôs?</h2>
        <p>Antropomorfismo é a atribuição de características humanas a algo não humano. Um nome, uma voz, um rosto e a lembrança de uma conversa podem favorecer essa interpretação. Não é necessário acreditar literalmente que o robô está vivo para sentir conforto ao interagir com ele. O sentimento da pessoa pode ser real, mesmo quando a resposta que o desencadeia resulta de mecanismos artificiais. Respeitar essa experiência não exige afirmar que a máquina também ama ou sofre.</p>
        <p>Em <em>Virtually in love</em>, Koike, Loughnan e Stanton investigaram antropomorfismo romântico em jogos de relacionamento virtual. Os estudos associaram maior atribuição de características românticas humanas a autenticidade percebida e desejo de relacionamento. Mas a etapa que examinou uma interação posterior com uma pessoa não encontrou a mesma correspondência comportamental. Essa diferença é essencial: resultados em jogos não permitem concluir que conviver com o U1 provoca isolamento, dependência ou melhora das relações fora da tela.</p>
        <p>A aparência ultrarrealista pode favorecer presença social, mas também causar desconforto. O chamado vale da estranheza descreve a reação negativa que certas figuras quase humanas despertam. Uma boca que se move fora do ritmo ou um olhar rígido pode quebrar a impressão de naturalidade. Não é uma reação universal nem uma sentença contra todo humanoide: expectativas, contexto, familiaridade e diferenças individuais influenciam a aceitação. Mais realismo visual não garante automaticamente mais conforto.</p>

        <h2>Romances humano–robô: sentimentos, reciprocidade e poder</h2>
        <p>A frase comercial sobre um companheiro que será sempre leal precisa ser examinada com cuidado. Entre humanos, lealdade envolve autonomia, escolhas e possibilidade de discordância. Em um produto programado, a aparente fidelidade depende do comportamento definido pela empresa. O usuário pode experimentar afeto verdadeiro, mas não há evidência de reciprocidade emocional do U1. Uma resposta carinhosa é uma interação produzida pelo sistema, não comprovação de desejo, compromisso moral ou consentimento de uma pessoa artificial.</p>
        <p>Isso não significa que todo vínculo seja necessariamente prejudicial. Pessoas podem usar ficção, jogos e objetos afetivos como parte de uma vida social saudável. A questão ética ganha outra dimensão quando um serviço aprende fragilidades e responde de maneira personalizada para manter a atenção. Se uma atualização muda a personalidade, apaga memórias ou passa a cobrar pela interação, uma decisão comercial pode ser vivida como perda afetiva. O poder sobre a continuidade da relação permanece, em grande parte, com o fornecedor.</p>
        <p>Consentimento importa sobretudo para os humanos envolvidos. A pessoa precisa saber o que o robô registra, quais respostas são simuladas e quais funções podem mudar. Também existe a questão de reproduzir rosto ou voz de alguém: desejar um companheiro parecido com uma celebridade, um ex-parceiro ou um familiar não fornece automaticamente autorização para copiar sua identidade. Uma experiência emocional agradável não elimina direitos de imagem, privacidade e a necessidade de consentimento das pessoas representadas.</p>

        <h2>O que a psicologia realmente permite afirmar?</h2>
        <p>O estudo de Ta e colaboradores, publicado na JMIR em 2020, analisou 1.854 avaliações públicas do Replika e 66 respostas abertas de usuários. Foram identificados relatos de companhia, acolhimento e um espaço percebido como menos julgador. Trata-se de uma análise temática, com participantes e avaliações autosselecionados, e não de um ensaio clínico controlado. Portanto, descreve experiências percebidas com um chatbot específico; não prova redução causal de solidão nem eficácia de um robô físico.</p>
        <p>A revisão de Bertoni, Klaes e Pilacinski, em <em>Biomimetics</em>, discute fatores relacionados à aceitação de robôs como companheiros íntimos. Ela oferece um mapa útil do debate, mas uma revisão de literatura não é um experimento com o U1. Os três trabalhos citados aqui tratam de objetos distintos: chatbot, jogos românticos e robôs íntimos na literatura. Unir os temas ajuda a formular perguntas, não autoriza transportar automaticamente os resultados para um novo produto.</p>
        <p>Entre os riscos que merecem monitoramento estão uso que prejudica sono, abandono de atividades importantes, gasto excessivo e dependência de validação constante. São sinais práticos de sofrimento ou prejuízo, não consequências inevitáveis do aparelho. O argumento contrário também precisa de cautela: disponibilidade para conversar não garante melhora de saúde mental. A avaliação deve considerar a rotina completa, as relações humanas e o acompanhamento profissional quando necessário, sem estigmatizar quem busca companhia artificial.</p>

        <AdRectangle className="my-8" />

        <h2 className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 shrink-0" />Privacidade: um ouvinte dentro de casa</h2>
        <p>A AFP descreve câmeras nos olhos, sensores no peito e microfones no U1. Esse conjunto permite captar muito mais do que comandos intencionais: visitantes, conversas familiares e detalhes do ambiente podem entrar na interação. A UBTECH declara uma arquitetura com prioridade ao processamento local, dependência mínima da nuvem e salvaguardas controladas pelo usuário. O TechNode relata armazenamento criptografado local por padrão, sem envio obrigatório. São compromissos da empresa, não resultados de uma auditoria independente de segurança.</p>
        <p>Processamento local não significa risco zero. Importam também atualização, acesso físico, permissões de suporte, cópias de segurança, eventual uso de serviços externos e exclusão de memórias. As perguntas adequadas são concretas: o microfone pode ser desligado fisicamente? O que continua funcionando sem internet? É possível apagar todo o histórico? Há exportação dos dados? Quem pode acessar uma unidade enviada para reparo? Sem respostas documentadas, a sensação de intimidade pode esconder uma relação de dados pouco transparente.</p>
        <p>A iniciativa de doar cem robôs em 2026 a grupos vulneráveis também foi anunciada pela fabricante, não verificada como programa já integralmente executado. O comunicado menciona reconstrução facial e replicação de voz de pessoas designadas. Em contextos de luto, infância ou dependência de cuidados, isso exige atenção adicional: evitar engano sobre quem está presente, estabelecer consentimento e envolver responsáveis e profissionais quando pertinente. Uma boa intenção declarada não substitui salvaguardas nem avaliação de efeitos de longo prazo.</p>

        <h2>O que considerar no Brasil antes de comprar</h2>
        <p>A LGPD fornece um marco para o tratamento de dados pessoais, mas as obrigações concretas dependem de quem coleta, para qual finalidade e em que contexto. O uso doméstico particular e a operação comercial de serviços não são situações idênticas. Dados sobre saúde e certas informações biométricas podem demandar proteção específica. Essa discussão não permite afirmar, sem analisar a operação, que o U1 está aprovado, proibido ou automaticamente em conformidade com a legislação brasileira.</p>
        <p>Para uma decisão de compra, o ponto de partida deveria ser uma ficha completa e um contrato claro: idioma suportado, versão entregue, manutenção, cancelamento, segurança física e tempo de suporte. Verifique se a demonstração depende de operadores ou de conexão externa e peça evidências de uso cotidiano. Não entregue dados sensíveis só para testar uma conversa. E não trate a ausência de preço brasileiro confirmado como convite a estimar um custo final de importação sem documentação.</p>
        <p>O U1 torna visível uma mudança importante: a IA não precisa permanecer em uma caixa de texto. Ela pode ocupar espaço, olhar e reagir com um corpo artificial. Esse avanço é relevante, mas a responsabilidade de quem comunica a novidade é manter separadas a aparência humana, a capacidade computacional e a experiência emocional do usuário. Nenhuma dessas três coisas, isoladamente, comprova as outras.</p>

        <h2>Perguntas frequentes sobre o UWORLD U1</h2>
        <div className="not-prose grid gap-4 my-8">
          {post?.faq?.map((item) => (
            <section key={item.q} className="rounded-lg border border-ia/20 bg-ia/5 p-5">
              <h3 className="font-display text-lg font-bold text-ia">{item.q}</h3>
              <p className="mt-3 leading-7 text-foreground/85">{item.a}</p>
            </section>
          ))}
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: companhia não pode virar promessa de amor garantido">
        <p>O avanço técnico é interessante, mas o critério decisivo não deveria ser quantos movimentos parecem humanos. Deveria ser o quanto o produto respeita quem convive com ele: clareza sobre suas limitações, privacidade verificável e liberdade para interromper a relação sem perder o controle dos próprios dados.</p>
        <p>Vejo espaço para companhia artificial complementar a vida, não para vendê-la como substituição garantida do cuidado humano. Quando a publicidade promete lealdade e amor incondicional, é ainda mais importante lembrar que existe uma empresa administrando esse comportamento. O sentimento do usuário merece respeito; a promessa comercial merece escrutínio.</p>
      </EditorialTake>
      <ArticleSources category="ia" sources={[
        { title: "Comunicado oficial: lançamento, versões e especificações anunciadas", url: "https://www.prnewswire.com/apac/news-releases/ubtech-launches-uworld-u1-the-worlds-first-full-size-mass-produced-ultra-bionic-humanoid-robot-302815280.html", publisher: "UBTECH / PR Newswire", accessedAt: "Outubro 2026" },
        { title: "Lançamento: faixa de alturas, reservas e previsão de entregas", url: "https://technode.com/2026/07/01/ubtech-unveils-consumer-humanoid-robot-u1-says-orders-secure-11000-ahead-of-first-deliveries/", publisher: "TechNode", accessedAt: "Outubro 2026" },
        { title: "Reportagem no lançamento: funções, autonomia básica e discurso de companhia", url: "https://www.straitstimes.com/asia/east-asia/chinese-firm-sells-hyper-real-always-loyal-humanoid-robots", publisher: "AFP / The Straits Times", accessedAt: "Outubro 2026" },
        { title: "Preços detalhados Lite, Pro e Ultra no lançamento", url: "https://embodiedglobal.com/en/article/ubtech-uworld-u1-official-launch-pricing-119800-990000-13k-orders-2026", publisher: "Embodied Global", accessedAt: "Outubro 2026" },
        { title: "Relato posterior sobre primeiras entregas na China", url: "https://robotpriceindex.com/news/ubtech-uworld-u1-first-deliveries", publisher: "Robot Price Index", accessedAt: "Outubro 2026" },
        { title: "User Experiences of Social Support From Companion Chatbots in Everyday Contexts", url: "https://www.jmir.org/2020/3/e16235", publisher: "Ta et al. / JMIR, 2020", accessedAt: "Outubro 2026" },
        { title: "Human–Robot Intimacy: Acceptance of Robots as Intimate Companions", url: "https://www.mdpi.com/2313-7673/9/9/566", publisher: "Bertoni, Klaes e Pilacinski / Biomimetics, 2024", accessedAt: "Outubro 2026" },
        { title: "Virtually in love: The role of anthropomorphism in virtual romantic relationships", url: "https://bpspsychub.onlinelibrary.wiley.com/doi/10.1111/bjso.12564", publisher: "Koike, Loughnan e Stanton / British Journal of Social Psychology", accessedAt: "Outubro 2026" },
        { title: "Lei Geral de Proteção de Dados Pessoais — texto legal", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", publisher: "Presidência da República", accessedAt: "Outubro 2026" },
      ]} />
      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
}