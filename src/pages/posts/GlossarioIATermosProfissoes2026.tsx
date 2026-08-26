import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Brain, BookOpen, Briefcase, ListChecks, HelpCircle, Layers, Bot, GraduationCap } from "lucide-react";
import heroImg from "@/assets/glossario-ia-termos-profissoes-2026.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "glossario-ia-termos-e-profissoes-2026";
const TITLE = "Glossário de IA: O Que São Machine Learning, Deep Learning, LLMs e as Profissões Criadas pela Inteligência Artificial";

const TERMOS = [
  { termo: "Inteligência artificial (IA)", def: "Campo amplo que estuda sistemas capazes de executar tarefas que associamos à cognição humana: reconhecer padrões, planejar, traduzir, decidir. É o guarda-chuva que contém todos os outros termos desta lista." },
  { termo: "Aprendizado de máquina (machine learning)", def: "Subárea da IA em que o sistema aprende regras a partir de exemplos, em vez de recebê-las escritas por um programador. Se você mostra milhares de e-mails marcados como spam, o modelo deduz sozinho o que caracteriza spam." },
  { termo: "Aprendizado profundo (deep learning)", def: "Subconjunto do aprendizado de máquina que usa redes neurais com muitas camadas. Cada camada aprende representações mais abstratas: da borda ao contorno, do contorno ao rosto." },
  { termo: "Rede neural artificial", def: "Estrutura de unidades matemáticas conectadas por pesos ajustáveis, inspirada de forma muito frouxa no cérebro. Treinar a rede é ajustar esses pesos para reduzir o erro." },
  { termo: "LLM (modelo de linguagem grande)", def: "Rede neural treinada em enormes volumes de texto para prever o próximo trecho de uma sequência. É o que existe por trás de ChatGPT, Gemini, Claude e similares." },
  { termo: "Transformer", def: "Arquitetura publicada em 2017 que usa o mecanismo de atenção para pesar a relevância de cada parte do texto em relação às demais. É a base técnica de praticamente todos os LLMs atuais." },
  { termo: "Token", def: "Unidade em que o modelo divide o texto — geralmente pedaços de palavras. Preço de API, limite de contexto e velocidade são todos medidos em tokens, não em palavras." },
  { termo: "Parâmetros", def: "Os números ajustados durante o treinamento. Modelos grandes têm bilhões deles. Mais parâmetros costumam significar mais capacidade e mais custo, mas a relação não é linear." },
  { termo: "Janela de contexto", def: "Quanto texto o modelo consegue considerar de uma vez, somando o que você enviou e o que ele respondeu. Estourar a janela faz o início da conversa ser esquecido." },
  { termo: "Embedding", def: "Representação numérica de um texto, imagem ou áudio em forma de vetor. Itens com significado parecido ficam próximos nesse espaço, o que permite busca semântica." },
  { termo: "Treinamento x inferência", def: "Treinamento é a fase cara em que o modelo aprende. Inferência é cada uso posterior. A conta de energia e de GPU se divide entre essas duas fases." },
  { termo: "Fine-tuning (ajuste fino)", def: "Continuar o treino de um modelo pronto com dados específicos de um domínio ou estilo, para especializá-lo sem treinar do zero." },
  { termo: "RAG (geração aumentada por recuperação)", def: "Técnica que busca trechos em uma base de documentos e os injeta no prompt antes de o modelo responder. Reduz alucinação e permite usar informação privada e atualizada." },
  { termo: "Alucinação", def: "Quando o modelo produz uma afirmação fluente e falsa. Não é bug pontual: é consequência de um sistema que otimiza plausibilidade estatística, não verdade." },
  { termo: "Prompt e prompt engineering", def: "Prompt é a instrução dada ao modelo; prompt engineering é a prática de estruturar contexto, exemplos e formato de saída para obter resultados consistentes." },
  { termo: "Multimodal", def: "Modelo que processa mais de um tipo de dado — texto, imagem, áudio e vídeo — dentro do mesmo sistema." },
  { termo: "Agente de IA", def: "Sistema que usa um modelo de linguagem para planejar e executar tarefas em várias etapas, chamando ferramentas externas como navegador, código ou APIs." },
  { termo: "Pesos abertos (open weights)", def: "Modelos cujos parâmetros podem ser baixados e executados localmente. Não é o mesmo que código aberto: a licença e os dados de treino podem continuar restritos." },
  { termo: "GPU e TPU", def: "Processadores especializados em multiplicações de matrizes em paralelo. São o gargalo físico e econômico de toda a indústria de IA." },
  { termo: "Modelo de raciocínio", def: "Modelo treinado para gastar mais computação antes de responder, produzindo etapas intermediárias de análise. Custa mais por resposta e ajuda em problemas de várias etapas." },
];

const PROFISSOES = [
  { cargo: "Engenheiro de machine learning", faz: "Treina, avalia e coloca modelos em produção.", perfil: "Programação, estatística, engenharia de dados." },
  { cargo: "Engenheiro de IA / de agentes", faz: "Constrói aplicações sobre modelos prontos: agentes, integrações, orquestração de ferramentas.", perfil: "Desenvolvimento de software, APIs, arquitetura." },
  { cargo: "Engenheiro de prompt", faz: "Projeta instruções, exemplos e formatos de saída confiáveis para produtos que usam LLM.", perfil: "Escrita técnica, lógica, teste sistemático." },
  { cargo: "Arquiteto de RAG / engenheiro de contexto", faz: "Estrutura bases de conhecimento, embeddings e pipelines de recuperação.", perfil: "Bancos de dados vetoriais, busca, curadoria de conteúdo." },
  { cargo: "Especialista em MLOps / LLMOps", faz: "Cuida de versionamento, monitoramento, custo por token e latência em produção.", perfil: "DevOps, observabilidade, infraestrutura." },
  { cargo: "Anotador e avaliador de dados (AI trainer)", faz: "Rotula dados e compara respostas de modelos para alinhá-los ao comportamento desejado.", perfil: "Domínio de área específica, atenção a critérios." },
  { cargo: "Red teamer de IA", faz: "Ataca o sistema de propósito para encontrar falhas de segurança, vazamento e conteúdo nocivo.", perfil: "Segurança da informação, criatividade adversarial." },
  { cargo: "Especialista em governança e ética de IA", faz: "Traduz regulação e política interna em regras aplicáveis ao produto.", perfil: "Direito, compliance, política pública." },
  { cargo: "Gerente de produto de IA", faz: "Decide o que automatizar, define métricas de qualidade e mede risco de erro.", perfil: "Produto, dados, comunicação." },
  { cargo: "Auditor de conteúdo gerado por IA", faz: "Revisa e valida saídas antes da publicação ou do uso em decisões.", perfil: "Editorial, jurídico ou técnico, conforme o setor." },
];

const GlossarioIATermosProfissoes2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Glossário · Carreiras · Fundamentos
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Glossário de IA: O Que São Machine Learning, Deep Learning, LLMs e as Profissões Criadas pela Inteligência Artificial
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          <strong>Inteligência artificial</strong>, aprendizado de máquina, aprendizado profundo e LLM não são sinônimos:
          são caixas dentro de caixas. Este guia explica cada termo em português claro e mostra as profissões que estão
          nascendo em volta deles — com o que cada função realmente faz no dia a dia.
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
          alt="Camadas concêntricas representando inteligência artificial, aprendizado de máquina e aprendizado profundo, com profissionais trabalhando em computadores"
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
              { k: "Hierarquia", v: "IA ⊃ machine learning ⊃ deep learning ⊃ LLMs" },
              { k: "Base técnica dos LLMs", v: "arquitetura Transformer (2017)" },
              { k: "Unidade de custo", v: "token" },
              { k: "Maior limitação prática", v: "alucinação" },
              { k: "Termos explicados aqui", v: "20" },
              { k: "Profissões mapeadas", v: "10" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="hierarquia" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Layers className="h-7 w-7 text-ia" />
          A Hierarquia Que Resolve Metade da Confusão
        </h2>
        <p>
          A maior parte da confusão sobre o assunto some quando se entende que os quatro termos mais repetidos formam
          uma sequência de caixas encaixadas. A inteligência artificial é a caixa maior: qualquer sistema que execute
          tarefas associadas à cognição humana entra nela, inclusive programas antigos baseados em regras escritas à
          mão, sem nenhum aprendizado.
        </p>
        <p>
          Dentro dela está o aprendizado de máquina, que muda a lógica da programação. Em vez de escrever as regras,
          você fornece exemplos e deixa o algoritmo inferir os padrões. Um sistema de detecção de fraude não recebe uma
          lista do que é fraude: ele recebe milhões de transações rotuladas e descobre sozinho quais combinações de
          valor, horário e local levantam suspeita.
        </p>
        <p>
          Dentro do aprendizado de máquina está o aprendizado profundo, que usa redes neurais com muitas camadas. A
          profundidade é o ponto: cada camada transforma a representação da anterior em algo mais abstrato. Em uma
          imagem, as primeiras camadas detectam bordas, as intermediárias detectam formas e as finais reconhecem
          objetos. Ninguém programou "isto é um olho" — a hierarquia de conceitos emerge do treinamento.
        </p>
        <p>
          E, na caixa mais interna, estão os modelos de linguagem grandes, os LLMs: redes profundas treinadas em texto
          para prever a continuação de uma sequência. Todo o comportamento que parece raciocínio nasce dessa tarefa
          aparentemente simples, executada em escala absurda. É por isso que o modelo pode escrever um contrato
          convincente e, na mesma resposta, inventar um artigo de lei que não existe: ele está otimizando plausibilidade,
          não veracidade.
        </p>

        <h2 id="glossario" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <BookOpen className="h-7 w-7 text-ia" />
          Glossário: 20 Termos Explicados sem Jargão
        </h2>
        <p>
          A lista a seguir cobre o vocabulário que aparece em notícias, vagas de emprego e documentação de produtos.
          Guardar esses vinte termos é suficiente para acompanhar praticamente qualquer discussão sobre o assunto.
        </p>

        <div className="not-prose my-8 grid gap-3">
          {TERMOS.map((t) => (
            <div key={t.termo} className="p-4 rounded-xl border border-ia/25 bg-ia/5">
              <h3 className="font-display font-bold text-ia mb-1">{t.termo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.def}</p>
            </div>
          ))}
        </div>

        <AdInArticle />

        <h2 id="como-usar" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-ia" />
          Como Esses Conceitos Aparecem na Prática
        </h2>
        <p>
          Imagine uma empresa que quer um assistente interno capaz de responder dúvidas sobre suas próprias políticas.
          A tentação inicial é treinar um modelo do zero — caminho caro, lento e quase sempre desnecessário. O que se
          faz na prática é escolher um modelo pronto e conectar a base de documentos por meio de RAG: os textos são
          transformados em embeddings, guardados em um banco vetorial e recuperados no momento da pergunta, entrando no
          prompt como contexto.
        </p>
        <p>
          Se o problema não for conhecimento, e sim comportamento — tom de voz, formato de saída, terminologia do setor
          —, o caminho é o ajuste fino. E se a tarefa exigir várias etapas encadeadas, como consultar um sistema,
          calcular e preencher um formulário, entra o conceito de agente, com o modelo decidindo quais ferramentas
          chamar e em que ordem.
        </p>
        <p>
          Em todos esses cenários, três variáveis mandam no projeto: janela de contexto (quanto o modelo consegue ler de
          uma vez), custo por token (quanto cada resposta pesa na fatura) e latência. Times que ignoram essas três
          variáveis costumam entregar protótipos impressionantes que se tornam economicamente inviáveis assim que
          milhares de pessoas passam a usar.
        </p>

        <h2 id="profissoes" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-ia" />
          As Profissões Que Estão Nascendo com a IA
        </h2>
        <p>
          O relatório <em>Future of Jobs</em>, do Fórum Econômico Mundial, publicado em janeiro de 2025, projeta uma
          transformação de dois lados até 2030: cerca de 170 milhões de novos empregos criados e cerca de 92 milhões
          deslocados, com saldo positivo de aproximadamente 78 milhões. No mesmo levantamento, IA e big data aparecem
          como as habilidades de crescimento mais rápido entre os empregadores consultados. O detalhe importante é que
          o saldo positivo não protege ninguém individualmente: as vagas criadas raramente são as mesmas que
          desaparecem, nem exigem as mesmas competências.
        </p>
        <p>
          A tabela abaixo reúne as funções que passaram a existir ou ganharam escala com a difusão da IA generativa.
          Nem todas exigem formação técnica pesada — algumas das mais disputadas dependem mais de domínio de um assunto
          específico e de rigor metodológico do que de programação.
        </p>

        <div className="not-prose my-8 rounded-xl border border-ia/30 overflow-hidden">
          <div className="p-4 bg-ia/10 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-ia" />
            <h3 className="font-bold">Dez funções em alta e o que cada uma faz</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background/60">
                <tr>
                  <th className="text-left p-3">Função</th>
                  <th className="text-left p-3">O que faz</th>
                  <th className="text-left p-3">Perfil típico</th>
                </tr>
              </thead>
              <tbody>
                {PROFISSOES.map((p) => (
                  <tr key={p.cargo} className="border-t border-border/30 align-top">
                    <td className="p-3 font-semibold text-ia">{p.cargo}</td>
                    <td className="p-3 text-muted-foreground">{p.faz}</td>
                    <td className="p-3 text-muted-foreground">{p.perfil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Duas dessas funções merecem comentário à parte. A primeira é a engenharia de prompt, que virou piada em
          alguns círculos por ter sido vendida como emprego de seis dígitos sem qualquer preparo. O que sobreviveu da
          onda é bem mais sóbrio: a habilidade de estruturar instruções, montar conjuntos de teste e medir a
          consistência das respostas virou parte do trabalho de quem constrói produtos, e não uma carreira isolada.
        </p>
        <p>
          A segunda é a governança de IA, impulsionada por regulação concreta. Na União Europeia, o AI Act entrou em
          vigor em agosto de 2024, com obrigações escalonadas ao longo dos anos seguintes conforme o nível de risco do
          sistema. No Brasil, o PL 2338/2023, que cria o marco legal da inteligência artificial, foi aprovado pelo
          Senado em dezembro de 2024 e seguiu para a Câmara dos Deputados. Empresas que operam nos dois mercados já
          precisam de alguém capaz de ler texto legal e transformá-lo em requisito de produto.
        </p>

        <h2 id="como-se-preparar" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Brain className="h-7 w-7 text-ia" />
          Por Onde Começar Sem Se Perder
        </h2>
        <p>
          Para quem vem da área técnica, o caminho mais curto hoje não é treinar modelos, e sim construir sobre eles:
          dominar chamadas de API, RAG, avaliação de saídas e controle de custo resolve a maior parte das demandas reais
          de empresas. Treinar modelos de fundação continua sendo trabalho de um punhado de laboratórios com
          infraestrutura bilionária.
        </p>
        <p>
          Para quem vem de fora da tecnologia, a vantagem competitiva é o domínio de um assunto. Um advogado que entende
          alucinação e sabe montar um fluxo de revisão vale mais em um projeto jurídico com IA do que um programador
          sem contexto da área. O mesmo vale para saúde, contabilidade, educação e jornalismo — justamente os setores em
          que o custo de um erro fluente e convincente é mais alto.
        </p>
        <p>
          E há uma competência transversal, válida para todos: saber quando <em>não</em> usar IA. Tarefas com resposta
          única e verificável, alto custo de erro e baixa tolerância a variação continuam melhor servidas por software
          determinístico. Reconhecer essa fronteira é, hoje, um diferencial profissional mais raro do que saber escrever
          prompts.
        </p>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-ia" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>Qual é a diferença entre IA, machine learning e deep learning?</strong> São caixas encaixadas: a IA é
          o campo inteiro, o aprendizado de máquina é a parte em que o sistema aprende com exemplos e o aprendizado
          profundo é a parte do aprendizado de máquina que usa redes neurais com muitas camadas.
        </p>
        <p>
          <strong>O que é um LLM?</strong> Um modelo de linguagem grande: uma rede neural profunda treinada em enormes
          volumes de texto para prever o próximo trecho de uma sequência. É a tecnologia por trás dos assistentes de
          conversa mais usados hoje.
        </p>
        <p>
          <strong>Por que a IA inventa informações?</strong> Porque ela otimiza a plausibilidade estatística do texto,
          não a verdade. Sem uma fonte externa conectada, o modelo completa lacunas com o que soa provável — daí o uso
          de RAG e de revisão humana em contextos sensíveis.
        </p>
        <p>
          <strong>Engenheiro de prompt ainda é uma profissão?</strong> Menos como cargo isolado e mais como competência
          incorporada a outras funções. A parte que permaneceu valiosa é a avaliação sistemática de respostas, não a
          escrita de frases mágicas.
        </p>
        <p>
          <strong>Preciso saber programar para trabalhar com IA?</strong> Não necessariamente. Funções de avaliação,
          curadoria de dados, governança, auditoria de conteúdo e produto dependem mais de domínio de área e método do
          que de código, embora entender os conceitos técnicos deste glossário seja indispensável.
        </p>
      </div>

      <EditorialTake category="ia">
        <p>
          Depois de acompanhar dezenas de projetos, minha convicção é que o vocabulário técnico virou uma barreira
          artificial. Quem entende que LLM é um previsor de sequências, e não um oráculo, toma decisões muito melhores
          do que quem só decorou siglas.
        </p>
        <p>
          Sobre as profissões, sou cético com listas de cargos futuristas. O que vejo na prática é mais simples: as
          funções que crescem são aquelas que ficam entre o modelo e a consequência — avaliar, auditar, integrar,
          responsabilizar. Onde há risco, há emprego humano.
        </p>
        <p>
          Se você quer um único conselho prático, é este: escolha um assunto que você domina de verdade e aprenda a
          medir a qualidade da IA dentro dele. Essa combinação, hoje, é mais escassa e mais bem paga do que qualquer
          curso genérico de prompt.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "Future of Jobs Report 2025 — habilidades em alta e criação de empregos até 2030",
            url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
            publisher: "Fórum Econômico Mundial",
            accessedAt: "Agosto 2026",
          },
          {
            title: "AI Index Report — desempenho, custo e adoção de modelos",
            url: "https://hai.stanford.edu/ai-index",
            publisher: "Stanford HAI",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Attention Is All You Need — artigo que introduziu a arquitetura Transformer",
            url: "https://arxiv.org/abs/1706.03762",
            publisher: "arXiv",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Regulamento (UE) 2024/1689 — AI Act, em vigor desde agosto de 2024",
            url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
            publisher: "EUR-Lex / União Europeia",
            accessedAt: "Agosto 2026",
          },
          {
            title: "PL 2338/2023 — marco legal da inteligência artificial aprovado pelo Senado",
            url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/157233",
            publisher: "Senado Federal",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
            url: "https://arxiv.org/abs/2005.11401",
            publisher: "arXiv",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default GlossarioIATermosProfissoes2026;
