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
  Clock, User, Calendar, Bot, Cpu, Factory, AlertTriangle,
  Wrench, Briefcase, TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/avanco-robotica-2026-humanoides.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "avanco-robotica-2026-robos-humanoides";
const TITLE = "O Avanço da Robótica em 2026: Dos Braços Industriais aos Robôs Humanoides";

const HUMANOIDES = [
  {
    nome: "Tesla Optimus",
    pais: "Estados Unidos",
    ficha: "≈ 1,73 m · ≈ 57 kg",
    status: "Uso interno em fábricas da Tesla; produção em escala anunciada, sem venda aberta ao público",
    preco: "Meta declarada de US$ 20 mil a US$ 30 mil por unidade no longo prazo",
  },
  {
    nome: "Figure 02 / Figure 03",
    pais: "Estados Unidos",
    ficha: "≈ 1,68 m · ≈ 70 kg",
    status: "Pilotos comerciais em logística e manufatura, com parceiros industriais",
    preco: "Não divulgado; modelo de contrato corporativo",
  },
  {
    nome: "Boston Dynamics Atlas (elétrico)",
    pais: "Estados Unidos",
    ficha: "Plataforma elétrica anunciada em 2024",
    status: "Testes com a Hyundai em linha de montagem; plataforma de pesquisa e piloto",
    preco: "Não comercializado como produto de prateleira",
  },
  {
    nome: "Agility Digit",
    pais: "Estados Unidos",
    ficha: "≈ 1,75 m · foco em movimentação de caixas",
    status: "O caso mais maduro de operação real em armazéns, em regime de locação",
    preco: "Modelo RaaS (robô como serviço), com mensalidade",
  },
  {
    nome: "Unitree G1 / H1",
    pais: "China",
    ficha: "G1 ≈ 1,32 m · H1 ≈ 1,80 m",
    status: "Venda direta, principalmente para pesquisa, educação e demonstração",
    preco: "G1 a partir de cerca de US$ 16 mil; H1 na faixa de US$ 90 mil",
  },
];

const TIMELINE = [
  { ano: "1961", txt: "O Unimate entra em operação na General Motors e inaugura o braço robótico industrial." },
  { ano: "2013", txt: "O DARPA Robotics Challenge expõe o limite da época: robôs humanoides caindo em tarefas simples." },
  { ano: "2016-2020", txt: "Aprendizado por reforço e simulação em GPU tornam o controle de locomoção muito mais robusto." },
  { ano: "2023", txt: "Modelos de linguagem começam a ser usados como camada de planejamento para tarefas físicas." },
  { ano: "2024", txt: "Surgem os primeiros modelos visão-linguagem-ação treinados com demonstrações humanas em larga escala." },
  { ano: "2025-2026", txt: "Pilotos industriais com humanoides saem do vídeo promocional e entram em turnos reais, ainda limitados." },
];

const APLICACOES = [
  { icone: "📦", area: "Logística e armazéns", txt: "Separação, paletização e movimentação de caixas — a aplicação com maior número de robôs móveis em operação real." },
  { icone: "🏭", area: "Manufatura", txt: "Solda, pintura, montagem e inspeção visual assistida por IA, hoje dominadas por braços fixos, não por humanoides." },
  { icone: "🌾", area: "Agro", txt: "Pulverização seletiva, colheita de frutas delicadas e monitoramento de lavoura com visão computacional." },
  { icone: "🏥", area: "Saúde", txt: "Cirurgia assistida por robô, logística hospitalar e reabilitação com exoesqueletos." },
  { icone: "🔍", area: "Inspeção", txt: "Robôs com pernas percorrendo subestações, plataformas de petróleo e minas em rondas repetitivas." },
];

const AvancoRobotica2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Robótica · IA física · Automação
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          O Avanço da Robótica em 2026: Dos Braços Industriais aos Robôs Humanoides
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A robótica deixou de ser um assunto de chão de fábrica e virou a fronteira mais visível da inteligência artificial.
          Em 2026, empresas colocam <strong>robôs humanoides</strong> em turnos reais de trabalho, modelos de IA aprendem a
          controlar corpos físicos e o custo por unidade despenca. Este guia separa o que já funciona de verdade do que ainda
          é vídeo de marketing — com dados, limites técnicos e o recorte brasileiro.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Agosto, 2026</span>
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
          alt="Robô humanoide em pé dentro de fábrica automatizada com braços robóticos ao fundo, representando o avanço da robótica em 2026"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ia" />
            O estado da robótica em números
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Base: relatórios World Robotics da International Federation of Robotics (IFR) e comunicados públicos dos fabricantes.
          </p>
          <div className="space-y-2">
            {[
              { k: "Robôs industriais em operação no mundo", v: "mais de 4 milhões de unidades" },
              { k: "Instalações anuais de robôs industriais", v: "acima de 500 mil por ano" },
              { k: "Participação da Ásia nas instalações", v: "cerca de 70% do total global" },
              { k: "Densidade robótica média mundial", v: "≈ 162 robôs por 10 mil trabalhadores" },
              { k: "Densidade robótica no Brasil", v: "abaixo de 20 robôs por 10 mil trabalhadores" },
              { k: "Humanoides em operação comercial real", v: "ordem de milhares, não de milhões" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-mudou" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          O Que Realmente Mudou na Robótica
        </h2>
        <p>
          Braços robóticos existem em linhas de montagem desde 1961, quando o Unimate entrou em operação na General Motors.
          Durante seis décadas, porém, esses robôs foram máquinas de repetição: executavam trajetórias programadas com
          precisão milimétrica e paravam de funcionar assim que uma peça saía do lugar previsto. A mudança recente não está no
          corpo mecânico — está no <strong>software que decide o que fazer com ele</strong>.
        </p>
        <p>
          Três avanços se combinaram. O primeiro é a simulação em larga escala: plataformas como o Isaac Sim, da Nvidia,
          permitem treinar políticas de controle em milhares de ambientes virtuais paralelos, comprimindo anos de tentativa e
          erro em dias de computação. O segundo é o <strong>aprendizado por imitação</strong>: em vez de programar cada
          movimento, operadores humanos teleoperam o robô, e o modelo aprende a reproduzir a tarefa a partir das demonstrações.
        </p>
        <p>
          O terceiro, e mais decisivo, são os modelos <strong>visão-linguagem-ação</strong> (VLA). Eles herdam a capacidade de
          generalização dos grandes modelos de linguagem e a acoplam a câmeras e atuadores: o robô recebe uma instrução em
          texto, observa a cena e produz diretamente comandos de movimento. Projetos como o RT-2 e o Gemini Robotics, do
          Google DeepMind, mostraram que um robô treinado assim consegue lidar com objetos que nunca viu antes — algo
          impossível para a robótica clássica.
        </p>

        <AdInArticle />

        <h2 id="humanoides" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Bot className="h-7 w-7 text-ia" />
          Quem É Quem na Corrida dos Humanoides
        </h2>
        <p>
          A aposta por trás do formato humanoide é econômica, não estética: fábricas, armazéns e lojas já foram projetados para
          o corpo humano. Um robô com pernas, torso e duas mãos poderia, em tese, ocupar qualquer posto sem reformar o prédio.
          A tabela abaixo resume os principais projetos e, mais importante, o estágio real de cada um.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Robô</th>
                <th className="p-3 text-left font-bold">País</th>
                <th className="p-3 text-left font-bold">Ficha</th>
                <th className="p-3 text-left font-bold">Status real</th>
                <th className="p-3 text-left font-bold">Preço</th>
              </tr>
            </thead>
            <tbody>
              {HUMANOIDES.map((h) => (
                <tr key={h.nome} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{h.nome}</td>
                  <td className="p-3 text-muted-foreground break-words">{h.pais}</td>
                  <td className="p-3 break-words">{h.ficha}</td>
                  <td className="p-3 text-muted-foreground break-words">{h.status}</td>
                  <td className="p-3 break-words">{h.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="not-prose my-8 p-5 rounded-xl border border-destructive/40 bg-destructive/10">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Como ler um vídeo de robô sem se enganar
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Corte de câmera no meio da tarefa costuma esconder falhas e reinícios.</li>
            <li>• Vídeo acelerado (o próprio fabricante indica "2x", "4x") esconde lentidão real de execução.</li>
            <li>• Ausência de informação sobre teleoperação normalmente significa que havia um humano no controle.</li>
            <li>• Demonstração em ambiente branco e vazio não prova nada sobre uma fábrica com poeira, ruído e gente.</li>
          </ul>
        </div>

        <AdRectangle />

        <h2 id="onde-funciona" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-ia" />
          Onde a Robótica Já Dá Retorno Hoje
        </h2>
        <p>
          O paradoxo do momento é que os robôs que mais geram valor não se parecem com gente. Os dados da IFR mostram que a
          esmagadora maioria das unidades instaladas são braços fixos em eletrônicos, automotivo, metalurgia e plásticos, além
          de robôs móveis autônomos em armazéns. O humanoide é a manchete; o braço articulado é o faturamento.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          {APLICACOES.map((a) => (
            <div key={a.area} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1">{a.icone} {a.area}</h4>
              <p className="text-sm text-muted-foreground mb-0">{a.txt}</p>
            </div>
          ))}
        </div>

        <h2 id="linha-do-tempo" className="text-2xl font-bold mt-10 mb-6">
          Linha do Tempo: Como Chegamos Até Aqui
        </h2>
        <div className="not-prose my-8 space-y-3">
          {TIMELINE.map((t) => (
            <div key={t.ano} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
              <span className="font-bold text-ia whitespace-nowrap">{t.ano}</span>
              <span className="text-sm text-muted-foreground">{t.txt}</span>
            </div>
          ))}
        </div>

        <h2 id="limites" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Wrench className="h-7 w-7 text-ia" />
          Os Limites Técnicos Que Ninguém Coloca no Trailer
        </h2>
        <p>
          <strong>Autonomia de bateria.</strong> Um humanoide de porte adulto consome muita energia só para ficar em pé e
          manter equilíbrio. Os modelos atuais operam tipicamente de duas a quatro horas por carga, o que obriga a trocar
          baterias ou a montar estações de recarga no meio do turno — um custo logístico que raramente aparece nas apresentações.
        </p>
        <p>
          <strong>Destreza das mãos.</strong> Pegar uma caixa rígida é problema resolvido. Manipular um cabo flexível, uma peça
          escorregadia ou um tecido continua sendo uma das tarefas mais difíceis da robótica, porque exige percepção tátil fina
          e reação em milissegundos. É por isso que quase todos os pilotos comerciais bem-sucedidos envolvem objetos padronizados.
        </p>
        <p>
          <strong>Confiabilidade fora do laboratório.</strong> Uma taxa de sucesso de 90% parece excelente até ser multiplicada
          por mil repetições diárias: significa cem falhas por dia. Ambientes industriais trabalham com padrões de disponibilidade
          muito mais altos, e é essa diferença — não a habilidade em si — que ainda separa a demonstração da adoção em massa.
        </p>
        <p>
          <strong>Custo total.</strong> O preço da máquina é a menor parte. Integração, sensores adicionais, adaptação de layout,
          manutenção, peças de reposição e treinamento de equipe costumam somar mais do que o robô. Em projetos industriais
          brasileiros, é comum que a integração custe entre uma e duas vezes o valor do equipamento.
        </p>

        <AdInArticle />

        <h2 id="trabalho" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Briefcase className="h-7 w-7 text-ia" />
          Impacto no Trabalho e o Recorte Brasileiro
        </h2>
        <p>
          O Brasil tem densidade robótica muito abaixo da média mundial: enquanto o mundo gira em torno de 162 robôs por
          10 mil trabalhadores industriais, e líderes como Coreia do Sul e Cingapura passam de 900, o país segue na casa de
          poucas dezenas. A causa não é falta de interesse — é o custo de capital: importação, câmbio, tributos e financiamento
          caro tornam o retorno do investimento longo demais para boa parte da indústria nacional.
        </p>
        <p>
          Na prática, isso significa que a automação avança primeiro onde o volume justifica: automotivo, alimentos e bebidas,
          eletrônicos e grandes centros de distribuição do varejo. Para o profissional brasileiro, a leitura mais útil não é
          "o robô vai tomar meu emprego amanhã", e sim que os postos ligados a <strong>integração, manutenção, programação de
          células robóticas e visão computacional</strong> estão entre os que mais crescem — e continuam com escassez de mão de
          obra qualificada.
        </p>
        <p>
          O padrão histórico da automação também vale aqui: ela substitui tarefas antes de substituir ocupações. Uma linha
          robotizada elimina o carregamento manual repetitivo, mas cria demanda por quem configura, supervisiona e conserta a
          célula. O risco real está concentrado em funções cujo conteúdo é quase inteiramente repetitivo e fisicamente
          padronizado — e é exatamente onde a requalificação precisa ser planejada com antecedência.
        </p>

        <h2 id="faq" className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre o Avanço da Robótica</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Já é possível comprar um robô humanoide?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sim, mas com ressalvas. Modelos de pesquisa como o Unitree G1 são vendidos a partir de cerca de US$ 16 mil e
              chegam ao Brasil bem mais caros por conta de importação e tributos. Eles servem para estudo, demonstração e
              desenvolvimento — não são assistentes domésticos prontos para uso.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Robôs humanoides já trabalham em fábricas de verdade?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Em pilotos, sim. Tesla, Figure, Agility e Boston Dynamics mantêm unidades em operação com parceiros industriais,
              em tarefas delimitadas e sob supervisão. O volume global está na ordem de milhares de unidades, muito longe da
              escala dos braços robóticos tradicionais.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Qual a diferença entre robótica tradicional e IA física?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A robótica tradicional executa trajetórias programadas e falha quando o ambiente muda. A chamada IA física usa
              modelos treinados em dados de visão, linguagem e movimento para decidir a ação em tempo real, o que permite lidar
              com objetos e situações não previstos no código.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Por que o Brasil tem poucos robôs industriais?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Principalmente por custo de capital: equipamentos importados, câmbio, carga tributária e crédito caro alongam o
              retorno do investimento. Some-se a isso a escassez de integradores qualificados, que encarece a implantação.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Robôs vão eliminar empregos no Brasil?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              O efeito mais provável no curto prazo é a substituição de tarefas repetitivas dentro de funções, e não a extinção
              imediata de ocupações inteiras. Com densidade robótica baixa, a adoção brasileira tende a ser gradual e
              concentrada em setores de alto volume.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: a robótica de 2026 é impressionante e ainda é cara demais">
        <p>
          Depois de acompanhar demonstração por demonstração ao longo do último ano, minha leitura é que o salto real aconteceu
          no <strong>software</strong>, não no hardware. Os corpos mecânicos evoluíram de forma incremental; o que mudou de
          patamar foi a capacidade de um modelo interpretar uma cena e escolher a ação. Isso é genuinamente novo e vai continuar
          melhorando rápido, porque se beneficia da mesma curva dos modelos de linguagem.
        </p>
        <p>
          O que me faz segurar o entusiasmo é a economia da coisa. Um humanoide que trabalha três horas por carga, precisa de
          supervisão e custa mais em integração do que em compra não substitui um turno humano — complementa uma estação
          específica. Para empresas brasileiras, o conselho prático é chato e correto: antes de olhar para humanoides, esgote o
          ganho fácil com braços colaborativos, robôs móveis de armazém e visão computacional, que têm retorno comprovado e
          fornecedor local. Humanoide, hoje, é investimento em aprendizado — e deve ser tratado como tal no orçamento.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "World Robotics Report — dados globais de instalação e densidade robótica",
            url: "https://ifr.org/worldrobotics",
            publisher: "International Federation of Robotics (IFR)",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Nvidia Isaac — plataforma de simulação e treinamento para robótica",
            url: "https://developer.nvidia.com/isaac",
            publisher: "Nvidia",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Gemini Robotics — modelos de visão, linguagem e ação para robôs",
            url: "https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/",
            publisher: "Google DeepMind",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Boston Dynamics — plataforma Atlas totalmente elétrica",
            url: "https://bostondynamics.com/atlas/",
            publisher: "Boston Dynamics",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Agility Robotics — Digit em operação em armazéns",
            url: "https://www.agilityrobotics.com/",
            publisher: "Agility Robotics",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Cobertura de robótica, humanoides e IA física",
            url: "https://www.technologyreview.com/topic/artificial-intelligence/",
            publisher: "MIT Technology Review",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default AvancoRobotica2026;
