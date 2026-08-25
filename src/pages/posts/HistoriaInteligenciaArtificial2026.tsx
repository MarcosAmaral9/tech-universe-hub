import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Brain, History, Cpu, ListChecks, HelpCircle, Snowflake, Rocket, BookOpen } from "lucide-react";
import heroImg from "@/assets/historia-inteligencia-artificial-modelos.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "historia-inteligencia-artificial-principais-modelos";
const TITLE = "História da Inteligência Artificial: Do Teste de Turing aos Principais Modelos de Hoje";

const ERAS = [
  { periodo: "1943-1956", nome: "Fundação", marco: "Neurônio artificial de McCulloch e Pitts, artigo de Turing (1950) e a Conferência de Dartmouth (1956), que cunhou o termo \"inteligência artificial\"." },
  { periodo: "1957-1973", nome: "Otimismo inicial", marco: "Perceptron de Rosenblatt (1958), ELIZA (1966) e promessas de máquinas pensantes em poucos anos." },
  { periodo: "1974-1980", nome: "Primeiro inverno da IA", marco: "Corte de financiamento após relatórios críticos e resultados abaixo do prometido." },
  { periodo: "1980-1987", nome: "Sistemas especialistas", marco: "MYCIN, XCON e a indústria de máquinas LISP; a IA vira produto corporativo." },
  { periodo: "1987-1993", nome: "Segundo inverno", marco: "Colapso do mercado de hardware dedicado e frustração com sistemas baseados em regras." },
  { periodo: "1997-2011", nome: "Força bruta e estatística", marco: "Deep Blue vence Kasparov (1997) e o Watson vence o Jeopardy! (2011)." },
  { periodo: "2012-2016", nome: "Revolução do deep learning", marco: "AlexNet no ImageNet (2012) e o AlphaGo derrotando Lee Sedol (2016)." },
  { periodo: "2017-2022", nome: "Era dos transformers", marco: "\"Attention Is All You Need\" (2017), BERT, a família GPT e o lançamento do ChatGPT (2022)." },
  { periodo: "2023-2026", nome: "Corrida dos modelos de fronteira", marco: "GPT-4, Claude, Gemini, Llama, DeepSeek e uma cadência de lançamentos medida em semanas." },
];

const MODELOS = [
  { ano: "2017", modelo: "Transformer", org: "Google Brain / Google Research", relevancia: "Arquitetura que substituiu redes recorrentes e viabilizou todos os LLMs modernos." },
  { ano: "2018", modelo: "BERT e GPT-1", org: "Google / OpenAI", relevancia: "Pré-treinamento em larga escala vira o padrão do processamento de linguagem natural." },
  { ano: "2020", modelo: "GPT-3", org: "OpenAI", relevancia: "175 bilhões de parâmetros; mostra que escala melhora capacidades sem mudar a arquitetura." },
  { ano: "2022", modelo: "ChatGPT", org: "OpenAI", relevancia: "Lançado em 30 de novembro; leva o LLM ao público geral em formato de conversa." },
  { ano: "2023", modelo: "GPT-4, Claude e Llama 2", org: "OpenAI / Anthropic / Meta", relevancia: "Modelos multimodais e a consolidação da via de pesos abertos." },
  { ano: "2023-2024", modelo: "Gemini", org: "Google DeepMind", relevancia: "Multimodalidade nativa e integração direta nos produtos do Google." },
  { ano: "2024", modelo: "GPT-4o e modelos de raciocínio", org: "OpenAI", relevancia: "Voz, imagem e texto no mesmo modelo; e a ideia de \"pensar mais\" antes de responder." },
  { ano: "2025", modelo: "DeepSeek R1", org: "DeepSeek", relevancia: "Modelo de raciocínio com pesos abertos que reacende o debate sobre custo de treino." },
  { ano: "2026", modelo: "Gemini 3.7 Flash, Grok 4.6, GLM-5.3, DeepSeek V4 Pro", org: "Google, xAI, Zhipu, DeepSeek", relevancia: "Lançamentos concentrados em agosto de 2026, com foco em agentes, custo por token e código." },
];

const HistoriaInteligenciaArtificial2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            História · Modelos · Fundamentos
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          História da Inteligência Artificial: Do Teste de Turing aos Principais Modelos de Hoje
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A <strong>história da inteligência artificial</strong> não começou com o ChatGPT. Ela tem setenta anos, dois
          invernos de financiamento, várias promessas quebradas e uma virada técnica em 2017 que explica quase tudo o
          que você usa hoje. Este é o percurso completo, marco a marco, sem mitologia.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />25 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />13 min de leitura</span>
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
          alt="Linha do tempo visual da inteligência artificial, de computadores antigos a servidores modernos com redes neurais luminosas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-ia" />
            Resumo rápido
          </h2>
          <div className="space-y-2">
            {[
              { k: "Nascimento do termo", v: "Conferência de Dartmouth, 1956" },
              { k: "Artigo fundador", v: "Turing, 1950" },
              { k: "Invernos da IA", v: "1974-1980 e 1987-1993" },
              { k: "Virada do deep learning", v: "AlexNet, 2012" },
              { k: "Arquitetura dos LLMs", v: "Transformer, 2017" },
              { k: "Popularização", v: "ChatGPT, novembro de 2022" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="antes-do-nome" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <History className="h-7 w-7 text-ia" />
          Antes do Nome: a Pergunta de Turing
        </h2>
        <p>
          A ideia de máquinas que raciocinam é mais velha que os computadores. Mas o ponto de partida útil para quem
          quer entender a inteligência artificial de hoje é 1943, quando Warren McCulloch e Walter Pitts propuseram um
          modelo matemático simplificado do neurônio: uma unidade que soma entradas e dispara quando ultrapassa um
          limiar. Aquele desenho, feito antes de existir hardware capaz de executá-lo em escala, é o tijolo lógico de
          toda rede neural moderna.
        </p>
        <p>
          Em 1950, Alan Turing publicou <em>Computing Machinery and Intelligence</em> e deslocou a discussão. Em vez de
          perguntar "máquinas podem pensar?" — pergunta que trava em definições —, ele propôs um teste comportamental:
          se um interrogador humano, conversando por texto, não conseguir distinguir a máquina de uma pessoa, a
          distinção deixa de ter uso prático. O chamado Teste de Turing envelheceu de forma curiosa. Ele foi tratado
          por décadas como um objetivo distante e, quando finalmente ficou trivial de contornar com modelos de
          linguagem, a comunidade percebeu que o teste media persuasão, não compreensão.
        </p>
        <p>
          O nome do campo, porém, só apareceu em 1956, na Conferência de Dartmouth, organizada por John McCarthy,
          Marvin Minsky, Nathaniel Rochester e Claude Shannon. A proposta submetida ao evento é um documento notável
          pelo excesso de confiança: ela afirmava que um grupo de pesquisadores poderia avançar de forma significativa
          em problemas de linguagem, abstração e autoaperfeiçoamento em um verão de trabalho. Levaria mais de meio
          século.
        </p>

        <h2 id="perceptron-eliza" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          Perceptron, ELIZA e o Custo do Otimismo
        </h2>
        <p>
          Em 1958, Frank Rosenblatt apresentou o Perceptron, um classificador que aprendia ajustando pesos a partir de
          exemplos. A imprensa da época tratou o aparelho como o embrião de uma máquina consciente. A realidade era
          mais modesta: o Perceptron de camada única só resolve problemas linearmente separáveis, limitação analisada
          em detalhe por Minsky e Papert no livro <em>Perceptrons</em>, de 1969. O efeito colateral daquela crítica foi
          desproporcional — a pesquisa em redes neurais ficou marginalizada por mais de uma década, mesmo com a
          solução (redes de múltiplas camadas) já sendo conhecida em teoria.
        </p>
        <p>
          No mesmo período, Joseph Weizenbaum criou o ELIZA (1966), um programa de poucas centenas de linhas que
          simulava um psicoterapeuta rogeriano devolvendo perguntas ao usuário. Weizenbaum ficou perturbado com o
          resultado: pessoas que sabiam estar falando com um programa atribuíam a ele compreensão e empatia. O
          fenômeno recebeu o nome de "efeito ELIZA" e continua sendo a chave psicológica mais importante para entender
          por que chatbots atuais soam tão convincentes.
        </p>
        <p>
          A conta chegou nos anos 1970. Relatórios de avaliação em ambos os lados do Atlântico apontaram que os
          resultados estavam muito aquém do prometido, especialmente em tradução automática e visão computacional, e o
          financiamento secou. É o período que ficou conhecido como o primeiro inverno da IA.
        </p>

        <div className="not-prose my-8 rounded-xl border border-ia/30 overflow-hidden">
          <div className="p-4 bg-ia/10 flex items-center gap-2">
            <Snowflake className="h-5 w-5 text-ia" />
            <h3 className="font-bold">As nove eras da inteligência artificial</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background/60">
                <tr>
                  <th className="text-left p-3">Período</th>
                  <th className="text-left p-3">Era</th>
                  <th className="text-left p-3">Marco principal</th>
                </tr>
              </thead>
              <tbody>
                {ERAS.map((e) => (
                  <tr key={e.periodo} className="border-t border-border/30 align-top">
                    <td className="p-3 font-mono text-ia whitespace-nowrap">{e.periodo}</td>
                    <td className="p-3 font-semibold">{e.nome}</td>
                    <td className="p-3 text-muted-foreground">{e.marco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="sistemas-especialistas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          Sistemas Especialistas: Quando a IA Virou Produto
        </h2>
        <p>
          Os anos 1980 trouxeram a primeira onda comercial. Sistemas especialistas codificavam o conhecimento de
          profissionais humanos em milhares de regras do tipo "se... então". O MYCIN, desenvolvido em Stanford,
          sugeria antibióticos para infecções bacterianas; o XCON, usado pela Digital Equipment Corporation,
          configurava pedidos de computadores e economizou somas relevantes para a empresa. Surgiu uma indústria
          inteira de máquinas dedicadas à linguagem LISP.
        </p>
        <p>
          O problema era estrutural: manter uma base de milhares de regras escritas à mão é caro, frágil e não
          generaliza. Quando o mundo muda, alguém precisa reescrever as regras. Com a chegada de estações de trabalho
          genéricas mais baratas, o mercado de hardware especializado colapsou entre 1987 e 1993 — o segundo inverno.
        </p>
        <p>
          O que sobreviveu daquela era não foi a técnica, e sim a lição: sistemas que dependem de conhecimento
          explicitamente escrito por humanos batem em um teto. A saída seria deixar a máquina extrair as regras
          sozinha, a partir de dados. Essa mudança de filosofia é o que hoje chamamos de aprendizado de máquina.
        </p>

        <AdInArticle />

        <h2 id="forca-bruta" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Rocket className="h-7 w-7 text-ia" />
          Deep Blue, Watson e a Década Estatística
        </h2>
        <p>
          Em 1997, o Deep Blue da IBM venceu o campeão mundial de xadrez Garry Kasparov em uma partida de seis jogos.
          A vitória foi histórica, mas é importante entender o que ela provou: o Deep Blue não aprendia. Ele avaliava
          milhões de posições por segundo com funções de avaliação ajustadas por especialistas humanos. Era força
          bruta somada a conhecimento de domínio — a última grande vitória do paradigma simbólico.
        </p>
        <p>
          Entre 1997 e 2011, o campo avançou de forma discreta e produtiva: filtros de spam, sistemas de recomendação,
          reconhecimento de voz e busca ficaram bons por meio de métodos estatísticos. O Watson, da IBM, venceu o
          programa de perguntas Jeopardy! em 2011 combinando recuperação de documentos com centenas de heurísticas de
          pontuação. Nada disso era chamado de "inteligência artificial" no marketing da época — quando funciona, a
          tecnologia costuma perder o rótulo.
        </p>

        <h2 id="deep-learning" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          2012: o Ano em Que o Deep Learning Venceu
        </h2>
        <p>
          A virada aconteceu em uma competição de classificação de imagens. Em 2012, a rede convolucional AlexNet,
          treinada em placas gráficas de consumo, reduziu drasticamente o erro no desafio ImageNet em relação aos
          métodos tradicionais. Três ingredientes se encontraram naquele momento: bases de dados grandes e rotuladas,
          GPUs capazes de fazer multiplicações de matrizes em paralelo e o algoritmo de retropropagação, que já existia
          desde os anos 1980.
        </p>
        <p>
          A partir dali, o deep learning dominou visão computacional, reconhecimento de fala e tradução em poucos anos.
          O ponto simbólico veio em 2016, quando o AlphaGo, da DeepMind, derrotou Lee Sedol no Go — um jogo com espaço
          de busca grande demais para força bruta, o que exigia algo próximo de intuição estatística aprendida por
          autojogo.
        </p>

        <h2 id="transformers" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          2017: a Arquitetura Que Explica Tudo Depois
        </h2>
        <p>
          O artigo <em>Attention Is All You Need</em>, publicado por pesquisadores do Google em 2017, apresentou o
          Transformer. A inovação central é o mecanismo de atenção: em vez de processar o texto palavra por palavra em
          sequência, o modelo pesa a relevância de cada trecho em relação a todos os outros ao mesmo tempo. Isso tornou
          o treinamento paralelizável em milhares de placas — e, com isso, escalável.
        </p>
        <p>
          A partir daí a história vira uma escada de escala. Em 2018 vieram o BERT, do Google, e o GPT-1, da OpenAI,
          consolidando a receita de pré-treinar em grandes volumes de texto e depois ajustar para tarefas específicas.
          Em 2020, o GPT-3, com 175 bilhões de parâmetros, mostrou que aumentar dados, parâmetros e computação melhora
          capacidades sem mudanças arquiteturais profundas. Foi um resultado desconfortável para a academia: parte do
          progresso passou a depender de orçamento de infraestrutura, não de ideias novas.
        </p>
        <p>
          Em 30 de novembro de 2022, a OpenAI lançou o ChatGPT, que embrulhou um modelo já existente em uma interface
          de conversa gratuita. O produto se tornou um dos serviços de crescimento mais rápido já registrados e mudou a
          percepção pública da tecnologia da noite para o dia. Vale reforçar: o salto de novembro de 2022 foi de
          <strong> interface e acesso</strong>, não de arquitetura.
        </p>

        <div className="not-prose my-8 rounded-xl border border-ia/30 overflow-hidden">
          <div className="p-4 bg-ia/10 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-ia" />
            <h3 className="font-bold">Principais modelos e por que importam</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background/60">
                <tr>
                  <th className="text-left p-3">Ano</th>
                  <th className="text-left p-3">Modelo</th>
                  <th className="text-left p-3">Origem</th>
                  <th className="text-left p-3">Relevância</th>
                </tr>
              </thead>
              <tbody>
                {MODELOS.map((m) => (
                  <tr key={m.modelo} className="border-t border-border/30 align-top">
                    <td className="p-3 font-mono text-ia whitespace-nowrap">{m.ano}</td>
                    <td className="p-3 font-semibold">{m.modelo}</td>
                    <td className="p-3 text-muted-foreground">{m.org}</td>
                    <td className="p-3 text-muted-foreground">{m.relevancia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="corrida-atual" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Rocket className="h-7 w-7 text-ia" />
          2023-2026: a Corrida dos Modelos de Fronteira
        </h2>
        <p>
          Depois do ChatGPT, o campo entrou em um ritmo industrial. Em 2023 chegaram o GPT-4, o Claude, da Anthropic, e
          o Llama, da Meta, que consolidou a via dos pesos abertos: modelos cujos parâmetros podem ser baixados e
          executados por qualquer pessoa com hardware suficiente. O Google respondeu com o Gemini, construído desde o
          início para lidar com texto, imagem, áudio e vídeo.
        </p>
        <p>
          Em 2024, dois movimentos definiram o ano. O primeiro foi a multimodalidade em tempo real, com modelos capazes
          de conversar por voz e enxergar imagens na mesma sessão. O segundo foi a linha de modelos de raciocínio, que
          gastam mais computação no momento da resposta para resolver problemas em várias etapas — uma mudança de
          filosofia importante, porque desloca parte do custo do treino para o uso.
        </p>
        <p>
          Em 2025, o DeepSeek R1 mostrou que um laboratório fora do eixo tradicional podia entregar raciocínio
          competitivo com pesos abertos, o que pressionou preços em todo o mercado. E, em agosto de 2026, o setor viveu
          uma das semanas mais concentradas da sua história: Grok 4.6, Gemini 3.7 Flash, GLM-5.3 e DeepSeek V4 Pro
          foram anunciados em poucos dias, com o modelo do Google indo parar no Modo IA da Pesquisa apenas seis dias
          depois do anúncio.
        </p>
        <p>
          O padrão que emerge de setenta anos é claro e vale mais do que qualquer previsão: a IA avança em saltos
          separados por platôs, cada salto vem de uma combinação nova entre algoritmo, dados e hardware disponível, e
          toda geração acredita estar a poucos anos da inteligência geral. As duas primeiras partes dessa frase têm
          evidência histórica. A terceira, até hoje, não teve.
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-ia" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Quem criou a inteligência artificial?</strong> Não há um criador único. O termo foi cunhado em 1956,
          na Conferência de Dartmouth, proposta por John McCarthy, Marvin Minsky, Nathaniel Rochester e Claude Shannon,
          mas as bases teóricas vêm de Turing, McCulloch e Pitts, entre outros.
        </p>
        <p>
          <strong>O que foi o inverno da IA?</strong> São dois períodos de forte retração de financiamento e interesse,
          entre 1974 e 1980 e entre 1987 e 1993, causados pela distância entre o que era prometido e o que os sistemas
          efetivamente entregavam.
        </p>
        <p>
          <strong>Por que 2012 é considerado um marco?</strong> Porque a AlexNet venceu o desafio ImageNet com uma
          margem grande sobre os métodos anteriores, provando na prática que redes neurais profundas treinadas em GPUs
          superavam técnicas manuais de extração de características.
        </p>
        <p>
          <strong>O que o ChatGPT mudou de fato?</strong> O acesso. A tecnologia por trás dele já existia; o que mudou
          foi transformá-la em uma interface de conversa gratuita e simples, o que levou a IA generativa a centenas de
          milhões de pessoas em poucos meses.
        </p>
        <p>
          <strong>Qual é o modelo mais avançado hoje?</strong> Não existe uma resposta estável: a liderança em índices
          agregados muda a cada poucas semanas e varia conforme a tarefa (código, raciocínio, custo, multimodalidade).
          Comparar por caso de uso é mais útil do que buscar um campeão absoluto.
        </p>
      </div>

      <EditorialTake category="ia">
        <p>
          Estudar a linha do tempo da IA cura duas doenças ao mesmo tempo: o deslumbramento e o desprezo. Quem acha que
          tudo começou em 2022 superestima o presente; quem chama tudo de bolha esquece que os dois invernos vieram de
          promessas quebradas, não de tecnologia inútil.
        </p>
        <p>
          O detalhe que mais me marca é que o Transformer, base de tudo o que usamos hoje, nasceu de um artigo
          acadêmico público de 2017. A vantagem competitiva atual não está no segredo da ideia — está em quem consegue
          pagar a conta de computação e chegar ao usuário final.
        </p>
        <p>
          Se você acompanha o setor, sugiro trocar a pergunta "qual é o melhor modelo?" por "qual capacidade nova
          apareceu neste ciclo?". A primeira muda toda semana. A segunda muda a cada dois ou três anos, e é ela que
          realmente mexe com trabalho, educação e mercado.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "Computing Machinery and Intelligence (Alan Turing, 1950)",
            url: "https://academic.oup.com/mind/article/LIX/236/433/986238",
            publisher: "Mind / Oxford Academic",
            accessedAt: "Agosto 2026",
          },
          {
            title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence (1955)",
            url: "https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/1904",
            publisher: "AI Magazine (AAAI)",
            accessedAt: "Agosto 2026",
          },
          {
            title: "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet, 2012)",
            url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
            publisher: "NeurIPS Proceedings",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Attention Is All You Need (2017)",
            url: "https://arxiv.org/abs/1706.03762",
            publisher: "arXiv",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Introducing ChatGPT (30 de novembro de 2022)",
            url: "https://openai.com/index/chatgpt/",
            publisher: "OpenAI",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AlphaGo: mastering the game of Go",
            url: "https://deepmind.google/research/breakthroughs/alphago/",
            publisher: "Google DeepMind",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AI Index Report — panorama anual de modelos, custos e desempenho",
            url: "https://hai.stanford.edu/ai-index",
            publisher: "Stanford HAI",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default HistoriaInteligenciaArtificial2026;
