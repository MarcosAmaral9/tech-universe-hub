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
  Clock, User, Calendar, Factory, Landmark, Cpu, AlertTriangle,
  Globe, Boxes, TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/robos-humanoides-china-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "robos-humanoides-china-2026-corrida-robotica";
const TITLE = "A China e a Corrida dos Robôs: Por Que o País Virou a Fábrica dos Humanoides";

const FABRICANTES = [
  {
    empresa: "Unitree",
    base: "Hangzhou",
    modelos: "G1, H1, R1 e a linha de robôs quadrúpedes Go/B",
    preco: "R1 anunciado a partir de cerca de US$ 5,9 mil; G1 na faixa de US$ 16 mil",
    status: "Venda direta internacional; líder em volume de humanoides de pesquisa",
  },
  {
    empresa: "UBTech",
    base: "Shenzhen",
    modelos: "Walker S, voltado a linhas de montagem",
    preco: "Contratos corporativos, sem preço de tabela",
    status: "Pilotos em fábricas de automóveis e eletrônicos, com pedidos anunciados em lote",
  },
  {
    empresa: "AgiBot / Zhiyuan Robotics",
    base: "Xangai",
    modelos: "Família Yuanzheng / Lingxi",
    preco: "Não divulgado publicamente",
    status: "Produção anunciada na casa de milhares de unidades por ano",
  },
  {
    empresa: "Fourier Intelligence",
    base: "Xangai",
    modelos: "GR-1 e GR-2, com foco em reabilitação e pesquisa",
    preco: "Sob consulta, mercado majoritariamente institucional",
    status: "Entregas para universidades, hospitais e laboratórios",
  },
  {
    empresa: "Galbot",
    base: "Pequim",
    modelos: "Robôs de manipulação para varejo e lojas autônomas",
    preco: "Modelo de operação e serviço",
    status: "Operação em lojas piloto em cidades chinesas",
  },
  {
    empresa: "Xpeng Robotics",
    base: "Cantão",
    modelos: "IRON, derivado da engenharia automotiva da montadora",
    preco: "Não comercializado ao público",
    status: "Uso em fábricas do grupo e demonstrações públicas",
  },
];

const CADEIA = [
  { peca: "Atuadores e motores sem escova", txt: "Produzidos em escala pela mesma indústria que abastece drones e veículos elétricos." },
  { peca: "Redutores harmônicos e planetários", txt: "Historicamente dominados pelo Japão; fornecedores chineses ganharam espaço e derrubaram preços." },
  { peca: "Baterias de lítio", txt: "A China concentra a maior parte da capacidade global de células, o que barateia o pacote energético." },
  { peca: "Ímãs de terras raras", txt: "Insumo crítico dos motores; o país domina o refino mundial e controla exportações." },
  { peca: "Sensores e câmeras", txt: "Cadeia de eletrônicos de consumo de Shenzhen reaproveitada para percepção robótica." },
  { peca: "Chips de IA", txt: "Elo mais frágil: modelos de ponta ainda dependem de GPUs sujeitas a restrições de exportação." },
];

const RobosChina2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Robótica · China · Indústria
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          A China e a Corrida dos Robôs: Por Que o País Virou a Fábrica dos Humanoides
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A China instala mais robôs industriais do que todo o resto do mundo somado e transformou a criação de
          <strong> robôs humanoides</strong> em política de Estado. Empresas como Unitree, UBTech e AgiBot já vendem máquinas
          por uma fração do preço ocidental. Entenda como a combinação de subsídio, cadeia de suprimentos e escala está
          redefinindo a robótica — e o que ainda falta para o país liderar de fato.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />11 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />14 min de leitura</span>
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
          alt="Linha de montagem chinesa produzindo fileiras de robôs humanoides com técnico supervisionando a produção"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ia" />
            A China em números na robótica
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Base: relatórios World Robotics da IFR, comunicados do Ministério da Indústria e Tecnologia da Informação (MIIT)
            e anúncios públicos dos fabricantes.
          </p>
          <div className="space-y-2">
            {[
              { k: "Participação nas instalações mundiais de robôs industriais", v: "cerca de metade do total global" },
              { k: "Instalações anuais no país", v: "acima de 275 mil unidades" },
              { k: "Densidade robótica na indústria chinesa", v: "mais de 470 robôs por 10 mil trabalhadores" },
              { k: "Posição no ranking mundial de densidade", v: "entre os cinco primeiros, à frente da Alemanha e do Japão" },
              { k: "Meta oficial do MIIT para humanoides", v: "produção em massa e cadeia própria até 2027" },
              { k: "Humanoide mais barato anunciado", v: "Unitree R1, a partir de cerca de US$ 5,9 mil" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="peso-global" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Globe className="h-7 w-7 text-ia" />
          O Peso da China na Robótica Mundial
        </h2>
        <p>
          Antes de falar em humanoides, é preciso entender a base. Segundo os relatórios World Robotics da International
          Federation of Robotics, a China responde sozinha por cerca de <strong>metade de todas as instalações anuais de robôs
          industriais do planeta</strong>, com mais de 275 mil unidades por ano. Em pouco mais de uma década, o país saiu de
          uma densidade robótica irrelevante para ultrapassar Alemanha e Japão, chegando à casa dos 470 robôs por 10 mil
          trabalhadores industriais.
        </p>
        <p>
          Igualmente importante é quem fabrica essas máquinas. Historicamente, o mercado era dominado pelas "quatro grandes" —
          Fanuc, Yaskawa, ABB e KUKA (esta última comprada pelo grupo chinês Midea em 2016). Nos últimos anos, fornecedores
          domésticos como Estun, Siasun e Inovance passaram a abocanhar uma fatia crescente das vendas internas. Essa
          substituição de importados é o alicerce da aposta seguinte: se o país já sabe montar braços robóticos em massa e a
          preço competitivo, montar humanoides é uma extensão natural da mesma indústria.
        </p>

        <AdInArticle />

        <h2 id="politica" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Landmark className="h-7 w-7 text-ia" />
          Política de Estado: Robô Como Prioridade Nacional
        </h2>
        <p>
          Em 2023, o Ministério da Indústria e Tecnologia da Informação publicou diretrizes específicas para robôs humanoides,
          tratando-os como uma tecnologia disruptiva comparável a computadores e smartphones. As metas são explícitas: dominar
          componentes críticos, estabelecer padrões nacionais e alcançar <strong>produção em massa com cadeia de suprimentos
          própria</strong> em poucos anos, com um segundo horizonte de liderança global no fim da década.
        </p>
        <p>
          A execução acontece em várias camadas. Governos locais de Pequim, Xangai, Shenzhen e Hangzhou criaram fundos setoriais
          bilionários em yuans, centros de inovação em robótica humanoide e "vales de dados" onde empresas compartilham
          conjuntos de treinamento para manipulação. Há ainda subsídio direto a compradores, incentivo fiscal para
          integradores e compras públicas que garantem demanda inicial — o mesmo manual usado antes em painéis solares,
          baterias e veículos elétricos.
        </p>
        <p>
          O efeito colateral desse manual é conhecido: ele produz avanço tecnológico real e, ao mesmo tempo, excesso de
          capacidade. Analistas do setor apontam dezenas de fabricantes chineses de humanoides disputando um mercado final
          ainda pequeno, com uma consolidação provável nos próximos anos. Para o comprador, isso significa preços
          agressivamente baixos agora e risco de descontinuidade de fornecedor depois.
        </p>

        <AdRectangle />

        <h2 id="empresas" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-ia" />
          As Empresas Que Estão Criando os Robôs
        </h2>
        <p>
          O ecossistema chinês combina startups nascidas em universidades, montadoras de veículos elétricos aproveitando sua
          engenharia de atuadores e fabricantes de eletrônicos migrando para robótica. A tabela abaixo reúne os nomes mais
          relevantes e o que cada um efetivamente entrega hoje.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Empresa</th>
                <th className="p-3 text-left font-bold">Base</th>
                <th className="p-3 text-left font-bold">Modelos</th>
                <th className="p-3 text-left font-bold">Preço</th>
                <th className="p-3 text-left font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {FABRICANTES.map((f) => (
                <tr key={f.empresa} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{f.empresa}</td>
                  <td className="p-3 text-muted-foreground break-words">{f.base}</td>
                  <td className="p-3 break-words">{f.modelos}</td>
                  <td className="p-3 break-words">{f.preco}</td>
                  <td className="p-3 text-muted-foreground break-words">{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="cadeia" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Boxes className="h-7 w-7 text-ia" />
          A Vantagem Real: a Cadeia de Suprimentos
        </h2>
        <p>
          A pergunta que mais aparece é como um humanoide chinês custa uma fração do equivalente americano. A resposta não é
          apenas mão de obra barata — é <strong>proximidade de componentes</strong>. Um fabricante em Shenzhen ou Hangzhou
          encontra motores, redutores, sensores, baterias e usinagem de precisão dentro de um raio de poucas horas, com
          múltiplos fornecedores concorrendo entre si e ciclos de prototipagem de dias em vez de meses.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          {CADEIA.map((c) => (
            <div key={c.peca} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1 text-ia">{c.peca}</h4>
              <p className="text-sm text-muted-foreground mb-0">{c.txt}</p>
            </div>
          ))}
        </div>

        <p>
          Some-se a isso o transbordamento do setor de veículos elétricos. Montadoras como Xpeng e BYD já dominam produção em
          massa de motores elétricos, gestão de baterias, sensores e software de percepção — exatamente o conjunto necessário
          para um humanoide. Não é coincidência que várias das apostas mais sérias em robótica na China venham de dentro da
          indústria automotiva.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-destructive/40 bg-destructive/10">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            O que os preços baixos não incluem
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• Valores anunciados costumam ser da configuração básica, sem mãos hábeis nem sensores extras.</li>
            <li>• Importação para o Brasil adiciona frete, seguro, imposto de importação, ICMS e despacho.</li>
            <li>• Suporte técnico, peças de reposição e atualização de software raramente estão no preço de lançamento.</li>
            <li>• Robôs de pesquisa não têm certificação de segurança para trabalhar ao lado de pessoas em produção.</li>
          </ul>
        </div>

        <AdInArticle />

        <h2 id="o-que-falta" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          O Que Ainda Falta para a China Liderar de Fato
        </h2>
        <p>
          <strong>Software e autonomia.</strong> Construir o corpo é o problema que a China resolveu melhor do que ninguém.
          Fazer esse corpo executar tarefas úteis sem teleoperação continua sendo o gargalo — e é justamente onde laboratórios
          americanos mantêm vantagem em modelos de visão-linguagem-ação. Boa parte das demonstrações mais vistosas de qualquer
          país ainda envolve operador humano no controle.
        </p>
        <p>
          <strong>Chips.</strong> Restrições de exportação limitam o acesso a GPUs de ponta para treinamento. As alternativas
          domésticas evoluíram, mas treinar modelos de robótica em larga escala exige computação que ainda é o elo mais
          frágil da cadeia local.
        </p>
        <p>
          <strong>Demanda real.</strong> Produção subsidiada não é o mesmo que mercado. Uma parcela relevante das unidades
          vendidas vai para universidades, centros de pesquisa, empresas de entretenimento e demonstrações — não para postos
          produtivos. Enquanto o retorno sobre investimento em fábrica não estiver comprovado, os números de produção dizem
          mais sobre política industrial do que sobre adoção.
        </p>

        <h2 id="brasil" className="text-2xl font-bold mt-10 mb-6">O Que Isso Significa para o Brasil</h2>
        <p>
          O efeito mais imediato é o preço. Assim como aconteceu com painéis solares e veículos elétricos, a entrada de
          fabricantes chineses tende a derrubar o custo de braços colaborativos, robôs móveis de armazém e quadrúpedes de
          inspeção no mercado brasileiro — equipamentos que hoje travam projetos por causa do investimento inicial. Para uma
          indústria com densidade robótica baixíssima, isso é uma janela concreta de modernização.
        </p>
        <p>
          O contrapeso é a dependência. Comprar barato de um fornecedor único, em outro fuso e outra língua, cria risco de
          suporte, de peça de reposição e de atualização de software — sem falar em questões de dados quando o robô envia
          telemetria para servidores no exterior. A recomendação prática para empresas é exigir contrato de suporte local,
          disponibilidade de peças e clareza sobre onde os dados operacionais são armazenados antes de fechar compra.
        </p>
        <p>
          Para profissionais, a oportunidade está na camada que a China ainda não exporta pronta: <strong>integração,
          programação, manutenção e software de aplicação</strong>. Hardware barato aumenta a quantidade de projetos e, com
          isso, a demanda por quem sabe colocar o robô para funcionar dentro de um processo real.
        </p>

        <h2 id="faq" className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre os Robôs da China</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Por que os robôs chineses são tão mais baratos?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Pela combinação de cadeia de suprimentos local completa (motores, redutores, baterias, sensores), escala de
              produção, concorrência interna entre dezenas de fabricantes e forte apoio estatal em forma de subsídios,
              fundos setoriais e compras públicas.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quais são as principais empresas chinesas de robôs humanoides?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              As mais citadas são Unitree, UBTech, AgiBot (Zhiyuan Robotics), Fourier Intelligence, Galbot e a divisão de
              robótica da Xpeng. Cada uma foca em um nicho: pesquisa, linha de montagem, reabilitação ou varejo.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">A China já lidera a robótica mundial?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Em volume de instalação, produção e custo, sim. Em software de autonomia e em chips de treinamento de ponta,
              ainda não — essas duas camadas seguem sendo a vantagem competitiva de empresas americanas.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">É possível comprar um robô chinês no Brasil?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sim, por importação direta ou por representantes. O valor final é bem superior ao anunciado por conta de frete,
              imposto de importação, ICMS e despacho aduaneiro, e é essencial verificar suporte técnico e disponibilidade de
              peças antes da compra.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Os humanoides chineses já trabalham em fábricas?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Em projetos piloto, sim — a UBTech mantém unidades do Walker S em montadoras e fábricas de eletrônicos, e a
              Xpeng usa robôs próprios em suas linhas. São tarefas delimitadas e supervisionadas, não substituição integral
              de postos de trabalho.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: a China não está ganhando a corrida do robô mais inteligente, e sim a do robô mais barato">
        <p>
          O erro mais comum ao olhar para a robótica chinesa é medi-la pela régua errada. Quando comparamos autonomia real e
          qualidade dos modelos de controle, os laboratórios americanos ainda estão à frente. Só que a disputa que vai definir
          a próxima década não é essa: é quem consegue colocar um corpo robótico funcional no mercado por um preço que
          fábricas médias consigam pagar. Nesse jogo, a China já venceu por vantagem larga, e o histórico de painéis solares,
          baterias e veículos elétricos sugere que a distância tende a aumentar.
        </p>
        <p>
          Para quem está no Brasil, tratar isso como notícia geopolítica distante é desperdiçar a oportunidade. A queda de
          preço vai chegar aqui, como chegou nos outros setores, e a consequência prática é que projetos de automação que não
          fechavam a conta em 2023 vão fechar em 2027. Quem se preparar agora — capacitando equipe em integração, visão
          computacional e manutenção — vai captar esse ciclo. Quem esperar o robô ficar "inteligente o bastante" vai comprar
          tarde, caro e sem gente treinada para operar.
        </p>
      </EditorialTake>

      <ArticleSources
        sources={[
          {
            title: "World Robotics Report — instalações e densidade robótica na China",
            url: "https://ifr.org/worldrobotics",
            publisher: "International Federation of Robotics (IFR)",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Diretrizes para o desenvolvimento inovador de robôs humanoides",
            url: "https://www.miit.gov.cn/",
            publisher: "MIIT — Ministério da Indústria e Tecnologia da Informação da China",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Unitree Robotics — linha de robôs humanoides e quadrúpedes",
            url: "https://www.unitree.com/",
            publisher: "Unitree Robotics",
            accessedAt: "Agosto 2026",
          },
          {
            title: "UBTech — Walker S em ambientes industriais",
            url: "https://www.ubtrobot.com/",
            publisher: "UBTech Robotics",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Cobertura sobre a indústria chinesa de robôs humanoides",
            url: "https://www.reuters.com/technology/",
            publisher: "Reuters",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Análises sobre robótica, IA física e cadeias de suprimentos",
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

export default RobosChina2026;
