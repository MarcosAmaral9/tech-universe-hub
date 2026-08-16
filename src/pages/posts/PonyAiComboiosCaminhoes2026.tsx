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
  Clock, User, Calendar, Truck, Route, Battery, AlertTriangle, TrendingUp, Factory,
} from "lucide-react";
import heroImg from "@/assets/pony-ai-comboios-caminhoes-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "pony-ai-comboios-caminhoes-autonomos-2026";
const TITLE = "Comboios de Caminhões Autônomos: Como a Pony.ai Colocou o Modelo 1+N nas Estradas da China";

const MARCOS = [
  {
    quando: "Janeiro de 2025",
    o_que: "Primeira aprovação da China para testes de comboio de caminhões autônomos em rodovias interprovinciais ligando Pequim, Tianjin e Hebei, no formato 1+N.",
  },
  {
    quando: "Novembro de 2025",
    o_que: "Frota de cerca de 200 caminhões em operação, com mais de 1 bilhão de tonelada-quilômetro de carga transportada acumulada.",
  },
  {
    quando: "Dezembro de 2025",
    o_que: "SANY e Pony.ai anunciam que o caminhão pesado autônomo de 4ª geração está próximo da produção em massa, com primeiro lote em operação comercial em 2026.",
  },
  {
    quando: "Abril de 2026",
    o_que: "Lançamento do primeiro caminhão leve L4 totalmente redundante e de grau automotivo, desenvolvido com a CATL para logística urbana.",
  },
  {
    quando: "1º trimestre de 2026",
    o_que: "Receita do negócio de robotrucks em US$ 10,2 milhões, alta de 31% em relação ao mesmo período do ano anterior.",
  },
  {
    quando: "Agosto de 2026",
    o_que: "Em briefing à imprensa, a empresa detalha a meta de 500 a 1.000 caminhões pesados de 4ª geração em dois a três anos e 100 mil caminhões leves L4 até 2030.",
  },
];

const ESPECS = [
  { item: "Modelo", valor: "Caminhão pesado autônomo de 4ª geração, co-desenvolvido por SANY Heavy Truck e Pony.ai" },
  { item: "Nível de autonomia", valor: "L4 — condução autônoma em domínio operacional definido" },
  { item: "Bateria", valor: "Pacote elétrico acima de 400 kWh" },
  { item: "Emissões evitadas", valor: "Cerca de 60 toneladas de CO₂ por veículo por ano, segundo a SANY" },
  { item: "Redundância", valor: "Sistema de direção totalmente redundante, exigência para operação sem motorista" },
  { item: "Custo do hardware", valor: "Redução de cerca de 70% em relação à geração anterior" },
];

const CENARIOS = [
  { nome: "Frete de longa distância", txt: "Rodovias interprovinciais com trechos longos e previsíveis, onde o comboio 1+N faz mais sentido econômico." },
  { nome: "Transporte de commodities a granel", txt: "Rotas fixas entre minas, siderúrgicas e centros de distribuição, com percursos repetitivos." },
  { nome: "Logística portuária", txt: "Pátios e acessos de porto, ambiente fechado e altamente mapeado, historicamente o primeiro a automatizar." },
  { nome: "Entrega urbana leve", txt: "Caminhões leves L4 com CATL, voltados a distribuição em cidade — o segmento que a empresa espera escalar mais rápido." },
];

const PonyAiComboiosCaminhoes2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Robótica · Logística · China
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Comboios de Caminhões Autônomos: Como a Pony.ai Colocou o Modelo 1+N nas Estradas da China
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          Um caminhão com operador de segurança na frente e vários caminhões autônomos atrás. É assim que funciona o
          sistema de <strong>comboios de caminhões</strong> da <strong>Pony.ai</strong> (Nasdaq: PONY), a primeira empresa
          autorizada a testar platooning em rodovias interprovinciais chinesas. Entenda a tecnologia, os números reais de
          frota e receita, as metas até 2030 e o que isso muda para o frete — inclusive no Brasil.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Agosto, 2026</span>
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
          alt="Comboio de três caminhões elétricos autônomos rodando em formação em uma rodovia ao anoitecer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ia" />
            Os números do robotruck da Pony.ai
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Base: comunicados de relações com investidores da Pony.ai, blog oficial da empresa, releases da SANY Group e
            cobertura de Automotive World e KrASIA.
          </p>
          <div className="space-y-2">
            {[
              { k: "Frota de caminhões em operação (nov/2025)", v: "cerca de 200 unidades" },
              { k: "Carga acumulada transportada", v: "mais de 1 bilhão de tonelada-quilômetro" },
              { k: "Receita de robotruck (1º tri/2026)", v: "US$ 10,2 milhões (+31% ao ano)" },
              { k: "Meta de caminhões pesados Gen-4", v: "500 a 1.000 unidades em 2 a 3 anos" },
              { k: "Meta de caminhões leves L4 até 2030", v: "100 mil unidades" },
              { k: "Queda no custo do hardware autônomo", v: "cerca de 70% frente à geração anterior" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="platooning" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Route className="h-7 w-7 text-ia" />
          O Que é Platooning e Como Funciona o Formato 1+N
        </h2>
        <p>
          Platooning é rodar com vários caminhões em formação cerrada, coordenados entre si por comunicação direta. Quando
          o líder acelera, freia ou muda de faixa, os demais reagem quase instantaneamente — muito mais rápido do que o
          tempo de reação humano. O ganho imediato é aerodinâmico: os veículos de trás sofrem menos resistência do ar e
          consomem menos energia.
        </p>
        <p>
          O modelo que a Pony.ai leva às estradas chinesas é chamado de <strong>1+N</strong>. Apenas o caminhão da frente
          leva um operador de segurança a bordo; todos os que vêm atrás operam de forma autônoma. Em janeiro de 2025, a
          empresa se tornou a primeira da China a receber autorização para testes desse formato em rodovias
          interprovinciais que ligam Pequim, Tianjin e a província de Hebei — um corredor de carga pesada.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-ia/40 bg-ia/5">
          <h3 className="font-bold mb-3 text-ia">Como o comboio 1+N se organiza</h3>
          <pre className="text-xs md:text-sm overflow-x-auto bg-background/60 rounded-lg p-4 mb-3">{`[ 1 ] LÍDER            [ N ] SEGUIDORES
 operador de       →   autônomos, sem operador
 segurança a bordo     a bordo
 ┌──────────┐   ┌──────────┐   ┌──────────┐
 │  ▣▣▣▣▣▣  │←→ │  ▣▣▣▣▣▣  │←→ │  ▣▣▣▣▣▣  │
 └──────────┘   └──────────┘   └──────────┘
   comunicação direta + percepção própria em cada veículo`}</pre>
          <p className="text-xs text-muted-foreground mb-0">
            Cada caminhão mantém seu próprio conjunto de sensores e capacidade de decisão: a formação melhora eficiência,
            mas os seguidores não dependem exclusivamente do líder para enxergar a via.
          </p>
        </div>

        <AdInArticle />

        <h2 id="sany" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Factory className="h-7 w-7 text-ia" />
          A Parceria com a SANY e o Caminhão de 4ª Geração
        </h2>
        <p>
          A Pony.ai não fabrica caminhões: ela desenvolve o "motorista virtual" e se associa a montadoras. A principal
          parceira no segmento pesado é a SANY Heavy Truck. Em dezembro de 2025, as duas anunciaram que o caminhão pesado
          autônomo de quarta geração estava perto da prontidão para produção em massa, com o primeiro lote destinado a
          operação comercial em 2026.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Item</th>
                <th className="p-3 text-left font-bold">Especificação</th>
              </tr>
            </thead>
            <tbody>
              {ESPECS.map((e) => (
                <tr key={e.item} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{e.item}</td>
                  <td className="p-3 break-words">{e.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Em abril de 2026, a empresa foi para o outro extremo do mercado e apresentou, junto com a CATL, um caminhão leve
          L4 apresentado como o primeiro totalmente de grau automotivo e com redundância completa, voltado à logística
          urbana. A lógica é clara: o pesado dá margem por viagem, o leve dá volume — e é no leve que está a meta mais
          ambiciosa, de 100 mil unidades até 2030.
        </p>

        <AdRectangle />

        <h2 id="linha-do-tempo" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Truck className="h-7 w-7 text-ia" />
          Linha do Tempo: de Teste Autorizado a Negócio com Receita
        </h2>

        <div className="not-prose my-8 space-y-3">
          {MARCOS.map((m) => (
            <div key={m.quando} className="p-4 bg-card rounded-xl border border-border border-l-4 border-l-ia">
              <h4 className="font-bold mb-1 text-ia">{m.quando}</h4>
              <p className="text-sm text-muted-foreground mb-0">{m.o_que}</p>
            </div>
          ))}
        </div>

        <h2 id="cenarios" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Battery className="h-7 w-7 text-ia" />
          Onde Esses Caminhões Trabalham
        </h2>
        <p>
          A empresa organiza a operação em cenários bem delimitados, e essa delimitação é parte da tecnologia: um sistema
          L4 só é confiável dentro do domínio para o qual foi validado.
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          {CENARIOS.map((c) => (
            <div key={c.nome} className="p-4 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-1 text-ia">{c.nome}</h4>
              <p className="text-sm text-muted-foreground mb-0">{c.txt}</p>
            </div>
          ))}
        </div>

        <h2 id="economia" className="text-2xl font-bold mt-10 mb-6">A Conta do Frete: Por Que Vale a Pena Tentar</h2>
        <p>
          Executivos da Pony.ai descrevem o frete rodoviário chinês como um mercado de pelo menos 1 trilhão de yuans — algo
          próximo de US$ 148 bilhões pelo câmbio citado pela empresa. Em um setor desse tamanho, capturar uma fatia pequena
          já significa receita relevante. Os problemas que motivam a automação são os mesmos em quase todo lugar: índice
          alto de acidentes com caminhão, custo operacional crescente e escassez de motoristas, especialmente para viagens
          longas.
        </p>
        <p>
          Há ainda a sinergia com a eletrificação. Um caminhão elétrico com bateria acima de 400 kWh é caro e precisa rodar
          muito para se pagar; a autonomia permite operar em janelas maiores do dia. E a redução de cerca de 70% no custo do
          hardware autônomo entre gerações é o que transforma piloto em plano de escala — foi essa queda que a empresa citou
          como destravadora do salto de volume.
        </p>

        <AdInArticle />

        <h2 id="limites" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-ia" />
          O Que Ainda Trava o Comboio Autônomo
        </h2>
        <p>
          <strong>Regulação fora da China.</strong> A autorização de 2025 é chinesa, para corredores específicos. Cada país
          tem regra própria sobre distância mínima entre veículos, presença de condutor e responsabilidade em caso de
          acidente — e boa parte dessas regras nem sequer prevê veículo sem motorista na cabine.
        </p>
        <p>
          <strong>Condições reais de via.</strong> Chuva forte, neblina, pista mal sinalizada, obras e o comportamento de
          outros motoristas continuam sendo o teste mais duro. Rodar em corredor mapeado é bem diferente de rodar em
          qualquer estrada.
        </p>
        <p>
          <strong>Responsabilidade civil e seguro.</strong> Quando o caminhão seguidor não tem ninguém a bordo, definir
          quem responde por um sinistro envolve transportadora, montadora, desenvolvedor do software e seguradora. Esse
          arranjo contratual costuma demorar mais que a tecnologia.
        </p>
        <p>
          <strong>Escala x números atuais.</strong> Uma frota na casa das centenas de unidades e uma receita trimestral de
          dois dígitos em milhões de dólares mostram um negócio real, mas ainda pequeno diante das metas anunciadas para
          2030. Meta divulgada não é entrega confirmada.
        </p>

        <h2 id="brasil" className="text-2xl font-bold mt-10 mb-6">O Que Isso Significa para o Brasil</h2>
        <p>
          O Brasil é um país de caminhão: a maior parte da carga anda por rodovia, e o setor convive com os mesmos
          problemas que motivam a automação chinesa — custo, sinistralidade e dificuldade de encontrar motoristas para
          rotas longas. Ainda assim, não existe hoje autorização para comboio autônomo sem condutor em rodovia federal
          aberta, e o marco regulatório de veículos autônomos segue em discussão.
        </p>
        <p>
          O caminho mais provável por aqui repete o que aconteceu na China: começar por <strong>ambientes fechados</strong>.
          Mineração e agronegócio já operam equipamentos autônomos em áreas privadas, onde a empresa controla a via, a
          sinalização e o acesso. Portos e pátios logísticos são o passo natural seguinte. Rodovia pública com caminhão sem
          motorista, no cenário atual, é conversa para depois da regulamentação.
        </p>
        <p>
          Para quem trabalha com tecnologia e logística, a oportunidade concreta não é importar caminhão autônomo — é a
          camada intermediária: telemetria, roteirização, manutenção preditiva, sistemas de assistência ao motorista e
          gestão de frota elétrica. É o que gera economia mensurável agora e prepara a operação para quando a autonomia
          plena for permitida.
        </p>

        <h2 id="faq" className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre os Comboios da Pony.ai</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">O que significa o comboio "1+N" da Pony.ai?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              É uma formação em que apenas o caminhão líder leva um operador de segurança a bordo, enquanto os demais
              veículos da fila operam de forma autônoma, coordenados com o líder.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Esses caminhões já rodam sem ninguém dentro?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Nos testes autorizados no formato 1+N, os caminhões seguidores operam sem operador a bordo. O líder mantém
              um profissional de segurança, e a operação acontece em corredores rodoviários específicos aprovados.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quantos caminhões a Pony.ai tem em operação?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Cerca de 200 unidades em novembro de 2025, com mais de 1 bilhão de tonelada-quilômetro de carga acumulada. A
              meta divulgada é chegar a 500 a 1.000 caminhões pesados de 4ª geração em dois a três anos.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quem fabrica os caminhões autônomos da Pony.ai?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              A Pony.ai desenvolve o sistema de condução e trabalha com montadoras. O caminhão pesado de 4ª geração é
              co-desenvolvido com a SANY Heavy Truck, e o caminhão leve L4 lançado em abril de 2026 foi feito com a CATL.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Comboios autônomos podem operar no Brasil?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não em rodovia pública com caminhão sem condutor: falta regulamentação específica. A automação viável hoje
              no país acontece em áreas privadas, como mineração, agronegócio e pátios logísticos.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o comboio é menos sobre tecnologia e mais sobre onde ela é permitida">
        <p>
          O que a Pony.ai fez de mais inteligente não foi o algoritmo do comboio — foi escolher um cenário onde a
          autonomia é fácil de defender: rota longa, previsível, repetitiva e, principalmente, com um regulador disposto a
          liberar o teste. A queda de 70% no custo do hardware entre gerações é o número que realmente importa nessa
          história, porque é ele que separa um piloto bonito de uma operação que fecha a conta. Sem essa curva de custo,
          nenhuma meta de 100 mil veículos até 2030 teria sentido.
        </p>
        <p>
          Ao mesmo tempo, é preciso ler os números com cuidado: uma frota de centenas de caminhões e US$ 10,2 milhões de
          receita trimestral são um começo, não uma revolução consumada. No Brasil, a discussão útil não é quando o
          caminhão sem motorista vai pegar a BR-116, e sim quanto dinheiro está sendo deixado na mesa por frotas que ainda
          não usam bem telemetria, roteirização e manutenção preditiva. Essa parte não depende de nova lei nenhuma.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "Pony AI Inc. Becomes the First Company in China Approved for Autonomous Truck Platooning Tests",
            url: "https://ir.pony.ai/news-releases/news-release-details/pony-ai-inc-becomes-first-company-china-approved-autonomous",
            publisher: "Pony.ai (Relações com Investidores)",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Scaling Autonomous Freight: Inside Pony.ai's Robotruck Business",
            url: "https://blog.pony.ai/scaling-autonomous-freight-inside-pony-ais-robotruck-business/",
            publisher: "Pony.ai (blog oficial)",
            accessedAt: "Agosto 2026",
          },
          {
            title: "SANY and Pony.ai Announce Mass-Production Readiness of Fourth-Generation Autonomous Heavy-Duty Truck",
            url: "https://www.sanyglobal.com/press_releases/4826/",
            publisher: "SANY Group",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Pony.ai targets 100,000 autonomous trucks by 2030",
            url: "https://www.automotiveworld.com/news/pony-ai-targets-100000-autonomous-trucks-by-2030/",
            publisher: "Automotive World",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Pony.ai outlines deployment plans for heavy- and light-duty robotrucks",
            url: "https://kr-asia.com/pony-ai-outlines-deployment-plans-for-heavy-and-light-duty-robotrucks",
            publisher: "KrASIA",
            accessedAt: "Agosto 2026",
          },
          {
            title: "PONY AI Inc. Reports First Quarter 2026 Financial Results",
            url: "https://ir.pony.ai/news-releases/news-release-details/pony-ai-inc-reports-first-quarter-2026-financial-results",
            publisher: "Pony.ai (Relações com Investidores)",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default PonyAiComboiosCaminhoes2026;
