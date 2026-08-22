import { useEffect } from "react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import AuthorBio from "@/components/AuthorBio";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { Clock, User, Calendar, Sparkles, Search, Cpu, ListChecks, HelpCircle, Gauge, Globe, FileText } from "lucide-react";
import heroImg from "@/assets/gemini-3-7-flash-busca-google-2026.webp";
import { AdLeaderboard, AdInArticle } from "@/components/AdSense";

const SLUG = "gemini-3-7-flash-busca-google-2026";
const TITLE = "Gemini 3.7 Flash na Busca do Google: O Que Muda e Como Ele Se Compara aos Rivais de Agosto de 2026";

const TIMELINE = [
  { data: "12 de agosto de 2026", fato: "A xAI lança o Grok 4.6, versão otimizada para agentes de longa duração, com 61 pontos no Artificial Analysis Intelligence Index e US$ 2 por milhão de tokens de entrada." },
  { data: "13 de agosto de 2026", fato: "O Google anuncia o Gemini 3.7 Flash, modelo voltado a programação e agentes, destacando benchmarks próximos de concorrentes de topo." },
  { data: "19 de agosto de 2026", fato: "O Gemini 3.7 Flash começa a ser distribuído no Modo IA da Pesquisa Google, poucos dias após o lançamento geral." },
  { data: "19 de agosto de 2026", fato: "A Zhipu coloca no ar a API do GLM-5.3 (US$ 1,4 de entrada e US$ 4,4 de saída por milhão de tokens) e a DeepSeek anuncia o V4 Pro." },
];

const MODELOS = [
  { nome: "Gemini 3.7 Flash (Google)", foco: "Programação, agentes e custo baixo", nota: "Já roda no Modo IA da Busca" },
  { nome: "Grok 4.6 (xAI)", foco: "Agentes de longa duração", nota: "61 no Intelligence Index" },
  { nome: "GLM-5.3 (Zhipu)", foco: "Modelo aberto competitivo", nota: "60 no Intelligence Index, 8º entre 182" },
  { nome: "DeepSeek V4 Pro", foco: "Desempenho geral aprimorado", nota: "Anunciado em agosto de 2026" },
];

const Gemini37FlashBusca2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Google · Modelos · Busca
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Gemini 3.7 Flash na Busca do Google: O Que Muda e Como Ele Se Compara aos Rivais de Agosto de 2026
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          O <strong>Gemini 3.7 Flash</strong> saiu do laboratório e entrou no Modo IA da Pesquisa Google em menos de uma
          semana. No mesmo mês, Grok 4.6, GLM-5.3 e DeepSeek V4 Pro apertaram o cerco. Veja o que está confirmado, o que
          muda para quem usa a busca todo dia e como comparar os modelos sem cair em marketing.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />20 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />11 min de leitura</span>
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
          alt="Celular exibindo interface de busca com IA e feixes de dados azuis e verdes ao fundo"
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
              { k: "Modelo", v: "Gemini 3.7 Flash" },
              { k: "Anúncio", v: "13 de agosto de 2026" },
              { k: "Chegada ao Modo IA da Busca", v: "19 de agosto de 2026" },
              { k: "Foco declarado", v: "programação e agentes de IA" },
              { k: "Concorrentes do mesmo mês", v: "Grok 4.6, GLM-5.3, DeepSeek V4 Pro" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-e-modo-ia" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-ia" />
          O Que é o Modo IA da Pesquisa
        </h2>
        <p>
          Antes de entender a troca de modelo, vale separar as três experiências que hoje convivem dentro do Google. A
          primeira é a busca tradicional, com a lista de links de sempre. A segunda são as respostas geradas no topo de
          algumas páginas de resultado, que resumem o assunto e citam fontes. A terceira é o Modo IA: uma aba separada,
          pensada para conversas com várias etapas, em que o usuário faz perguntas de acompanhamento e o sistema mantém
          o contexto da conversa inteira.
        </p>
        <p>
          É nessa terceira camada que o Gemini 3.7 Flash passou a operar. A escolha não é trivial: o Modo IA é o
          produto em que o Google concentra as perguntas mais difíceis — planejamento de viagem, comparação de produtos,
          explicações técnicas com vários passos. Colocar ali um modelo da linha Flash, historicamente associada a
          velocidade e baixo custo, é um sinal de que a empresa passou a confiar na qualidade dos seus modelos
          econômicos para tarefas que antes exigiam as versões maiores e mais caras.
        </p>
        <p>
          Para o usuário final, nenhuma configuração é necessária. Não há seletor de modelo, botão de atualização ou
          aviso de versão: a troca acontece no servidor, de forma gradual, e a única forma de perceber é a própria
          qualidade e o ritmo das respostas ao longo dos dias.
        </p>

        <h2 id="o-que-mudou" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Search className="h-7 w-7 text-ia" />
          O Que Muda na Pesquisa Google
        </h2>
        <p>
          O Modo IA é a aba da Pesquisa em que o Google responde com um texto sintetizado em vez de uma lista de links.
          Trocar o modelo por trás dessa aba tem efeito direto em três coisas: velocidade de resposta, qualidade em
          perguntas com várias etapas e custo de operação — e é justamente por custo que a linha "Flash" existe.
        </p>
        <p>
          O <strong>Gemini 3.7 Flash</strong> foi apresentado como um modelo mais econômico e melhor em programação. Na
          prática, o usuário comum não escolhe modelo: ele digita a pergunta e recebe a resposta do que estiver ativo
          naquele momento. Por isso a implantação gradual importa — durante alguns dias, duas pessoas podem receber
          respostas de qualidade diferente para a mesma pergunta.
        </p>
        <p>
          Há ainda um efeito indireto que quase ninguém comenta: quando o Google troca o modelo da busca, ele redefine o
          padrão de qualidade que bilhões de pessoas consideram "normal" para uma IA. Quem nunca abriu um aplicativo
          dedicado de chatbot passa a julgar toda a categoria pelo que vê na pesquisa. É um poder de definição de
          expectativa que nenhum concorrente possui, porque nenhum concorrente tem a mesma distribuição.
        </p>

        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Data</th>
                <th className="text-left p-3">O que aconteceu</th>
              </tr>
            </thead>
            <tbody>
              {TIMELINE.map((t) => (
                <tr key={t.data} className="border-t border-border/50">
                  <td className="p-3 font-bold text-ia whitespace-nowrap align-top">{t.data}</td>
                  <td className="p-3 text-muted-foreground">{t.fato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="benchmarks" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Gauge className="h-7 w-7 text-ia" />
          Benchmarks: O Que os Números Dizem — e o Que Não Dizem
        </h2>
        <p>
          Todo lançamento de modelo em 2026 vem acompanhado de uma tabela de pontuações, e agosto não foi exceção. O
          Grok 4.6 chegou com 61 pontos no Artificial Analysis Intelligence Index, o GLM-5.3 com 60, figurando entre os
          dez primeiros de um ranking com 182 modelos avaliados. São números úteis para uma primeira triagem, mas é
          preciso entender o que eles medem de fato: um índice agregado mistura matemática, código, raciocínio e
          conhecimento geral em uma nota única, e a composição dessa média pode esconder diferenças enormes em recortes
          específicos.
        </p>
        <p>
          Três cuidados práticos antes de comparar qualquer tabela de lançamento. Primeiro: verifique quem produziu o
          teste — benchmark publicado pelo próprio fabricante tende a escolher os recortes em que ele vence. Segundo:
          procure a data do teste, porque modelos são atualizados por baixo dos panos e uma comparação de meses atrás
          pode estar desatualizada. Terceiro: desconfie de diferenças de um ou dois pontos, que estão dentro da margem
          de variação entre execuções e raramente se traduzem em diferença perceptível no uso diário.
        </p>
        <p>
          O que os benchmarks definitivamente não capturam é a experiência completa: velocidade de resposta, capacidade
          de seguir instruções longas, qualidade das citações e integração com ferramentas externas. Um modelo pode
          pontuar mal em um índice agregado e ainda assim ser a melhor escolha para um fluxo de trabalho específico — e
          é por isso que a recomendação séria continua sendo testar com as suas próprias tarefas.
        </p>

        <h2 id="comparativo" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          Como Ele Se Compara aos Rivais
        </h2>
        <p>
          Agosto de 2026 foi um mês raro: quatro lançamentos relevantes em menos de dez dias. O ponto importante para o
          leitor é entender que "melhor modelo" virou uma pergunta sem resposta única — cada um lidera em um recorte
          diferente de benchmark, e benchmark não é uso real.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {MODELOS.map((m) => (
            <div key={m.nome} className="p-5 rounded-xl border border-ia/30 bg-ia/5">
              <h3 className="font-bold mb-1 text-ia">{m.nome}</h3>
              <p className="text-sm text-muted-foreground mb-2">{m.foco}</p>
              <p className="text-xs font-medium">{m.nota}</p>
            </div>
          ))}
        </div>

        <p>
          Repare no padrão: os modelos chineses de peso aberto (GLM-5.3, DeepSeek V4 Pro, Kimi K3) estão colando nos
          proprietários em índices agregados, e o diferencial competitivo migrou do "quanto ele sabe" para "quanto custa
          por milhão de tokens" e "quanto tempo ele aguenta executando uma tarefa sozinho".
        </p>
        <p>
          A precificação de agosto ilustra bem essa migração. O Grok 4.6 foi lançado a US$ 2 por milhão de tokens de
          entrada; a API do GLM-5.3 estreou a US$ 1,4 de entrada e US$ 4,4 de saída. Para quem opera agentes que
          processam milhões de tokens por dia, a diferença de preço entre modelos de pontuação parecida paga
          infraestrutura inteira no fim do mês. Qualidade semelhante a preço menor é um argumento que nenhum marketing
          supera.
        </p>
        <p>
          O outro eixo de disputa é a duração de tarefa: o Grok 4.6 foi apresentado explicitamente como modelo para
          agentes de longa duração — sistemas que executam sequências de dezenas de ações sem intervenção humana. Esse é
          o novo front da competição, porque é onde o dinheiro corporativo está: não em responder perguntas, mas em
          executar trabalho.
        </p>

        <h2 id="impacto-web" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <FileText className="h-7 w-7 text-ia" />
          O Impacto Para Quem Produz Conteúdo na Web
        </h2>
        <p>
          Cada melhoria no Modo IA da busca tem um lado que afeta diretamente sites, blogs e veículos de imprensa:
          quanto melhor a resposta sintetizada, menor a necessidade de clicar em um link. Esse movimento não é novo —
          as respostas geradas no topo dos resultados já tinham iniciado esse processo —, mas a chegada de um modelo
          mais capaz à aba conversacional acelera a tendência, porque o Modo IA é justamente o formato em que o usuário
          resolve a dúvida inteira sem sair da página.
        </p>
        <p>
          A conclusão prática para criadores não é "o Google acabou com os cliques", e sim uma mudança de critério:
          conteúdo genérico, que apenas repete o que já está em dezenas de páginas, é exatamente o que um modelo de
          linguagem sintetiza melhor. O que continua gerando visita é o que o modelo não consegue produzir sozinho —
          dado próprio, teste com produto, tabela original, experiência documentada e opinião editorial com nome e
          responsabilidade. É o mesmo critério que os sistemas de qualidade de busca já usam para classificar páginas, e
          a IA só tornou a régua mais visível.
        </p>

        <h2 id="o-que-fazer" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Sparkles className="h-7 w-7 text-ia" />
          O Que Fazer Com Essa Informação
        </h2>
        <ul>
          <li><strong>Usuário comum:</strong> nada a configurar. A troca de modelo no Modo IA é automática e gradual. Se quiser comparar, repita nos próximos dias uma pergunta complexa que você já tenha feito antes e observe a diferença de estrutura da resposta.</li>
          <li><strong>Quem programa:</strong> vale reavaliar o modelo padrão da sua ferramenta — a diferença de preço entre as opções de agosto é grande e a de qualidade, pequena. Rode a mesma bateria de tarefas reais em dois ou três modelos antes de decidir.</li>
          <li><strong>Quem publica conteúdo:</strong> respostas sintetizadas reduzem cliques. Conteúdo que sobrevive é o que traz dado próprio, tabela e experiência real.</li>
          <li><strong>Empresas:</strong> teste com as suas próprias tarefas antes de migrar; índice público não reproduz o seu caso de uso. E negocie contrato olhando o preço por token, não a pontuação de marketing.</li>
        </ul>

        <h2 id="faq" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <HelpCircle className="h-7 w-7 text-ia" />
          Perguntas Frequentes
        </h2>
        <p>
          <strong>O Gemini 3.7 Flash é pago?</strong> O uso dentro da Pesquisa Google não exige assinatura. O acesso via
          API é cobrado por tokens.
        </p>
        <p>
          <strong>Ele substitui o modelo anterior em tudo?</strong> Não necessariamente. A linha Flash é otimizada para
          custo e velocidade; modelos maiores continuam existindo para tarefas mais pesadas.
        </p>
        <p>
          <strong>Já está disponível no Brasil?</strong> A distribuição foi anunciada como gradual, então a
          disponibilidade varia por conta e por região.
        </p>
        <p>
          <strong>Como sei se a minha busca já está usando o modelo novo?</strong> Não há indicador visível de versão no
          Modo IA. A única pista prática é a mudança no padrão das respostas ao longo da janela de implantação.
        </p>
        <p>
          <strong>O Grok 4.6 é melhor que o Gemini 3.7 Flash?</strong> Depende do recorte. O Grok 4.6 foi otimizado para
          agentes de longa duração; o Gemini 3.7 Flash, para programação e custo. Índices agregados mostram os modelos
          de agosto em faixas próximas, e a melhor escolha varia conforme a tarefa.
        </p>
        <p>
          <strong>Modelos chineses como GLM-5.3 e DeepSeek V4 Pro podem ser usados no Brasil?</strong> Sim, via API,
          seguindo os termos de cada provedor. Empresas devem avaliar também requisitos de compliance e residência de
          dados antes de adotar qualquer modelo estrangeiro em produção.
        </p>
      </div>

      <EditorialTake category="ia">
        <p>
          O que mais me chama atenção aqui não é o modelo em si — é a velocidade. Seis dias entre anunciar um modelo e
          colocá-lo no produto de busca mais usado do planeta era impensável há dois anos. Isso significa que o ciclo de
          avaliação pública praticamente sumiu: a gente testa em produção, junto.
        </p>
        <p>
          E há um segundo recado, menos comentado: com GLM-5.3 e DeepSeek V4 Pro entregando pontuação de elite a preço de
          varejo, a vantagem competitiva dos modelos fechados encolheu para distribuição. O Google não está vencendo por
          ter o melhor modelo; está vencendo por já estar dentro da barra de pesquisa de bilhões de pessoas.
        </p>
        <p>
          Minha sugestão para quem acompanha o setor é simples: pare de olhar o lançamento do dia e passe a olhar o
          preço por token e a autonomia dos agentes. Esses dois números contam melhor a história de 2026 do que qualquer
          pontuação de benchmark — e são eles que vão decidir quais dessas empresas ainda existem, com o mesmo modelo de
          negócio, daqui a dois anos.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "Google lança Gemini 3.7 Flash, melhor em programação e mais econômico",
            url: "https://www.tecmundo.com.br/software/415265-google-lanca-gemini-37-flash-melhor-em-programacao-e-mais-economico.htm",
            publisher: "TecMundo",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Google Gemini 3.7 Flash entra no Modo IA do Google Search",
            url: "https://conectado.pt/google-gemini-3-7-flash-entra-no-modo-ia-do-google-search/",
            publisher: "Conectado.pt",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Grok 4.6 é lançado oficialmente: US$ 2 por milhão de tokens de entrada",
            url: "https://www.gate.com/pt-br/news/detail/grok-46-officially-released-2-per-million-input-tokens-achieving-699-on-23412001",
            publisher: "Gate News",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Zhipu lança API do GLM-5.3, a US$ 4,4 por milhão de tokens de saída",
            url: "https://news.cocoloop.cn/pt/2026/08/glm-53-api-live-aa-index/",
            publisher: "Cocoloop News",
            accessedAt: "Agosto 2026",
          },
          {
            title: "A API do GLM-5.3 da Zhipu é lançada, lado a lado com o Kimi K3",
            url: "https://www.gate.com/pt/news/detail/zhipus-glm-53-api-goes-live-tying-kimi-k3-for-the-top-spot-among-open-23548151",
            publisher: "Gate News",
            accessedAt: "Agosto 2026",
          },
          {
            title: "DeepSeek lança V4 Pro, nova IA chega com desempenho aprimorado",
            url: "https://fastcompanybrasil.com/ia/deepseek-lanca-v4-pro-nova-ia-desempenho-aprimorado/",
            publisher: "Fast Company Brasil",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default Gemini37FlashBusca2026;
