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
  Clock, User, Calendar, Car, MapPin, ShieldCheck, AlertTriangle, TrendingUp, Cpu,
} from "lucide-react";
import heroImg from "@/assets/zoox-robotaxi-amazon-2026.webp";
import { AdLeaderboard, AdRectangle, AdInArticle } from "@/components/AdSense";

const SLUG = "zoox-carros-sem-motorista-amazon-2026";
const TITLE = "Os Carros Sem Motorista da Amazon: Como a Zoox Saiu do Teste e Começou a Cobrar pela Corrida";

const CIDADES = [
  {
    cidade: "Las Vegas (Nevada)",
    status: "Serviço pago",
    detalhe: "Primeiro mercado comercial: cobrança de tarifas a partir de 10 de agosto de 2026, depois de quase um ano de corridas gratuitas ao público.",
  },
  {
    cidade: "São Francisco (Califórnia)",
    status: "Corridas abertas ao público",
    detalhe: "Área de operação quadruplicada em março de 2026, com foco na metade leste da cidade, dentro do programa early rider.",
  },
  {
    cidade: "Austin (Texas)",
    status: "Anunciado para 2026",
    detalhe: "Depois de cerca de dois anos de testes com veículos de desenvolvimento, a empresa anunciou início de corridas ainda em 2026.",
  },
  {
    cidade: "Miami (Flórida)",
    status: "Anunciado para 2026",
    detalhe: "Mesmo caminho de Austin: testes prévios e entrada no programa de primeiros passageiros ao longo do ano.",
  },
  {
    cidade: "Foster City (Califórnia)",
    status: "Base de engenharia",
    detalhe: "Sede da empresa e campo de testes original da frota, onde a validação dos veículos começou.",
  },
];

const COMPARATIVO = [
  {
    empresa: "Zoox (Amazon)",
    veiculo: "Veículo próprio, bidirecional, sem volante nem pedais, com quatro assentos voltados para o centro",
    onde: "Las Vegas (pago) e São Francisco; Austin e Miami anunciados",
    marco: "Isenção temporária da NHTSA em julho de 2026 permitindo uso comercial sem controles manuais",
  },
  {
    empresa: "Waymo (Alphabet)",
    veiculo: "Carros de produção adaptados (Jaguar I-Pace e sucessores) com kit autônomo",
    onde: "Operação comercial em várias cidades dos EUA, a mais antiga do setor",
    marco: "Referência de escala em corridas pagas sem motorista de segurança",
  },
  {
    empresa: "Tesla",
    veiculo: "Modelos de linha com software de direção autônoma supervisionada",
    onde: "Serviço em área limitada, com acompanhante a bordo em parte da operação",
    marco: "Aposta em câmeras e frota já vendida, sem veículo dedicado sem volante em operação ampla",
  },
];

const ZooxCarrosSemMotoristaAmazon2026 = () => {
  useEffect(() => {
    trackArticleRead(SLUG, TITLE, "ia");
  }, []);

  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category="ia" size="lg" />
          <span className="px-3 py-1 bg-ia/20 text-ia rounded-full text-sm font-medium">
            Robótica · Mobilidade · Amazon
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Os Carros Sem Motorista da Amazon: Como a Zoox Saiu do Teste e Começou a Cobrar pela Corrida
        </h1>
        <p className="lead text-xl text-muted-foreground mb-4">
          A <strong>Zoox</strong>, subsidiária da Amazon, colocou na rua um veículo que nasceu sem volante e sem pedais — e
          desde 10 de agosto de 2026 cobra pelas corridas em Las Vegas. Entenda a decisão regulatória que destravou a
          operação, onde os <strong>carros sem motorista da Amazon</strong> já circulam, como a tecnologia funciona e o que
          ainda separa esse serviço de virar rotina, inclusive no Brasil.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />16 de Agosto, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
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
          alt="Robotáxi sem volante da Zoox, subsidiária da Amazon, circulando em uma avenida iluminada de Las Vegas ao anoitecer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="not-prose my-8 p-6 bg-gradient-to-br from-ia/10 to-background rounded-xl border border-ia/30">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ia" />
            A Zoox em números
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Base: comunicados da Zoox, decisão da NHTSA publicada no Federal Register e cobertura de Reuters, AP, CNBC,
            The Verge e TechCrunch.
          </p>
          <div className="space-y-2">
            {[
              { k: "Dona da empresa", v: "Amazon (aquisição concluída em 2020)" },
              { k: "Início das corridas pagas", v: "10 de agosto de 2026, em Las Vegas" },
              { k: "Cidades com público a bordo", v: "Las Vegas e São Francisco" },
              { k: "Cidades anunciadas para 2026", v: "Austin e Miami" },
              { k: "Isenção concedida pela NHTSA", v: "Julho de 2026, para trechos de oito normas federais (FMVSS)" },
              { k: "Teto de veículos na isenção", v: "Até 5.000 unidades em dois anos" },
            ].map(({ k, v }) => (
              <div key={k} className="grid grid-cols-2 gap-2 py-2 border-b border-border/30 text-xs md:text-sm">
                <span className="text-muted-foreground break-words">{k}</span>
                <span className="text-right text-ia font-bold break-words">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <AdLeaderboard />

        <h2 id="o-que-e" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Car className="h-7 w-7 text-ia" />
          O Que a Zoox Construiu (e Por Que Ela é Diferente)
        </h2>
        <p>
          Quase todo mundo que trabalha com direção autônoma começou pelo mesmo caminho: pegar um carro de produção,
          instalar sensores no teto e trocar o motorista por software. A Zoox escolheu o caminho mais caro. Em vez de
          adaptar um veículo existente, projetou uma cabine simétrica, que anda igualmente bem nos dois sentidos, com
          quatro assentos voltados para o centro, portas amplas e — o detalhe que virou o símbolo do projeto —
          <strong> nenhum volante e nenhum pedal</strong>.
        </p>
        <p>
          Essa decisão explica boa parte da lentidão da empresa em relação a concorrentes. Um carro convencional
          adaptado já nasce em conformidade com as normas federais de segurança dos Estados Unidos, as FMVSS, porque
          continua tendo os controles que a lei descreve. Um veículo sem volante, não. Ele precisa de uma autorização
          específica para existir comercialmente, e foi exatamente essa autorização que a Zoox passou anos perseguindo.
        </p>

        <AdInArticle />

        <h2 id="regulacao" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldCheck className="h-7 w-7 text-ia" />
          A Decisão da NHTSA Que Destravou Tudo
        </h2>
        <p>
          Em julho de 2026, a NHTSA — a agência federal de segurança rodoviária dos EUA — concedeu à Zoox uma
          <strong> isenção temporária</strong> de trechos de oito padrões federais de segurança veicular. Na prática, a
          agência reconheceu que exigir volante, pedal e espelho retrovisor de um veículo que não tem motorista humano é
          um requisito escrito para outra época. Com a isenção, a empresa pode fabricar e operar comercialmente o
          veículo, limitada a até 5.000 unidades ao longo de dois anos.
        </p>
        <p>
          A autorização federal não basta sozinha: a operação ainda depende de licença estadual e municipal em cada
          cidade. Nevada abriu primeiro. No dia 5 de agosto de 2026, a Zoox anunciou que começaria a cobrar tarifas em
          Las Vegas em 10 de agosto, com preços que a empresa descreveu como competitivos com a faixa "comfort" dos
          aplicativos tradicionais. Foi o primeiro mercado comercial da companhia depois de quase um ano oferecendo
          viagens gratuitas ao público.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-ia/40 bg-ia/5">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-ia" />
            Isenção não é aprovação definitiva
          </h3>
          <p className="text-sm text-muted-foreground mb-0">
            A isenção da NHTSA é temporária, tem teto de unidades e vem acompanhada de obrigações de relatório de
            incidentes. Ela permite que o veículo circule enquanto as normas não são reescritas — não substitui uma
            regulamentação permanente para carros sem controles manuais, que ainda está em discussão nos EUA.
          </p>
        </div>

        <AdRectangle />

        <h2 id="onde-roda" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <MapPin className="h-7 w-7 text-ia" />
          Onde os Carros da Zoox Já Circulam
        </h2>
        <p>
          Em março de 2026 a empresa anunciou sua maior expansão até então: ampliar a área de serviço em São Francisco e
          Las Vegas e levar os robotáxis para Austin e Miami, cidades onde já rodava com veículos de teste havia cerca de
          dois anos. A tabela abaixo resume o estágio de cada praça.
        </p>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Cidade</th>
                <th className="p-3 text-left font-bold">Status</th>
                <th className="p-3 text-left font-bold">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {CIDADES.map((c) => (
                <tr key={c.cidade} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{c.cidade}</td>
                  <td className="p-3 break-words">{c.status}</td>
                  <td className="p-3 text-muted-foreground break-words">{c.detalhe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="como-funciona" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Cpu className="h-7 w-7 text-ia" />
          Como Funciona um Carro Que Não Tem Motorista
        </h2>
        <p>
          O veículo da Zoox combina câmeras, radares e sensores lidar posicionados nos quatro cantos, o que elimina os
          pontos cegos típicos de um carro que só "olha" para frente. Como a cabine é simétrica, o robotáxi não precisa
          fazer manobra de retorno: ele simplesmente muda o sentido de marcha. A frota opera em áreas mapeadas com alto
          nível de detalhe, e há uma central de suporte remoto que pode orientar o veículo diante de situações
          incomuns — uma obra na via, um bloqueio, um agente de trânsito fazendo sinal.
        </p>
        <p>
          É importante entender o que essa supervisão remota é e o que ela não é. Ela não corresponde a alguém dirigindo o
          carro à distância em tempo real; funciona como um apoio de decisão quando o sistema pede ajuda. Esse desenho é
          comum a praticamente todos os serviços autônomos em operação hoje, incluindo os concorrentes.
        </p>

        <h2 id="comparativo" className="text-2xl font-bold mt-10 mb-6">Zoox, Waymo e Tesla: Estágios Diferentes da Mesma Corrida</h2>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-ia/30">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-ia/10">
              <tr>
                <th className="p-3 text-left font-bold">Empresa</th>
                <th className="p-3 text-left font-bold">Veículo</th>
                <th className="p-3 text-left font-bold">Onde opera</th>
                <th className="p-3 text-left font-bold">Marco atual</th>
              </tr>
            </thead>
            <tbody>
              {COMPARATIVO.map((c) => (
                <tr key={c.empresa} className="border-t border-border/30 align-top">
                  <td className="p-3 font-semibold text-ia break-words">{c.empresa}</td>
                  <td className="p-3 break-words">{c.veiculo}</td>
                  <td className="p-3 break-words">{c.onde}</td>
                  <td className="p-3 text-muted-foreground break-words">{c.marco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdInArticle />

        <h2 id="riscos" className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <AlertTriangle className="h-7 w-7 text-ia" />
          O Que Ainda Trava a Operação
        </h2>
        <p>
          <strong>Escala.</strong> Cobrar por corrida em uma cidade não é o mesmo que operar milhares de veículos em
          dezenas de praças. A própria empresa já disse publicamente que a etapa de operação paga traz um tipo novo de
          dificuldade — a expectativa do cliente que pagou pela viagem. Depósito, manutenção, limpeza e recarga da frota
          viram problema logístico tão importante quanto o software.
        </p>
        <p>
          <strong>Segurança e escrutínio.</strong> Serviços autônomos nos EUA já passaram por recalls de software e
          investigações após incidentes de trânsito, e a Zoox não é exceção nesse histórico do setor. Cada ocorrência
          relevante é reportada à NHTSA e pode virar exigência adicional.
        </p>
        <p>
          <strong>Custo por unidade.</strong> Um veículo desenvolvido do zero, com conjunto redundante de sensores, é caro.
          O retorno depende de cada carro rodar muitas horas por dia, com alta taxa de ocupação — o que só acontece em
          áreas densas e bem mapeadas.
        </p>
        <p>
          <strong>Aceitação pública.</strong> Pesquisas de opinião nos EUA seguem mostrando desconfiança relevante em
          relação a carros sem motorista. A adoção tende a crescer onde o serviço já existe e as pessoas conseguem
          experimentá-lo, mas não é automática.
        </p>

        <h2 id="brasil" className="text-2xl font-bold mt-10 mb-6">E o Brasil Nessa História?</h2>
        <p>
          Não há qualquer anúncio de operação da Zoox no Brasil, e é improvável que exista tão cedo. Três motivos
          concretos: o país não tem regulamentação federal que autorize veículos sem controles manuais circulando em via
          pública com passageiros pagantes; o mapeamento de altíssima precisão exigido por esse tipo de serviço custa caro
          e precisa ser mantido atualizado; e o custo do veículo, somado a tributos de importação, inviabiliza a conta
          diante do preço de uma corrida por aplicativo aqui.
        </p>
        <p>
          O que chega antes é a camada de assistência: frenagem automática de emergência, manutenção de faixa, piloto
          adaptativo e estacionamento assistido, já presentes em vários modelos vendidos no país. São sistemas de nível 2,
          em que o motorista continua responsável o tempo todo — categoria bem distante do que a Zoox opera em Las Vegas.
        </p>

        <div className="not-prose my-8 p-5 rounded-xl border border-destructive/40 bg-destructive/10">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Cuidado com a confusão de nomes
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1 mb-0">
            <li>• "Piloto automático" vendido em carros de linha no Brasil é assistência de nível 2, não direção autônoma.</li>
            <li>• Robotáxi sem volante só opera em áreas específicas e mapeadas, sob autorização caso a caso.</li>
            <li>• Vídeo de demonstração não é serviço comercial: verifique sempre se há corrida paga aberta ao público.</li>
          </ul>
        </div>

        <h2 id="faq" className="text-2xl font-bold mt-10 mb-6">FAQ — Perguntas Frequentes Sobre os Carros Sem Motorista da Amazon</h2>
        <div className="space-y-3 my-6">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">A Amazon é dona da Zoox?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sim. A Amazon comprou a Zoox em 2020, e a empresa opera como subsidiária, com marca, frota e equipe próprias.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">O carro da Zoox realmente não tem volante?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não tem volante nem pedais. É um veículo bidirecional com quatro assentos voltados para o centro, e foi
              justamente por isso que precisou de uma isenção da NHTSA para poder ser usado comercialmente.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Já é possível pagar por uma corrida?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Sim, em Las Vegas, desde 10 de agosto de 2026. Em São Francisco o serviço segue no formato de programa de
              primeiros passageiros, e Austin e Miami foram anunciadas para 2026.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Quantos veículos a Zoox pode colocar na rua?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Pela isenção concedida em julho de 2026, até 5.000 unidades ao longo de dois anos. É um teto regulatório,
              não uma previsão de produção da empresa.
            </p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h4 className="font-bold mb-1">Os robotáxis da Zoox vão chegar ao Brasil?</h4>
            <p className="text-sm text-muted-foreground mb-0">
              Não há anúncio nesse sentido. Faltam regulamentação para veículos sem controles manuais, mapeamento de alta
              precisão e viabilidade de custo frente ao preço das corridas no mercado brasileiro.
            </p>
          </div>
        </div>
      </div>

      <EditorialTake category="ia" title="Análise do Marcos: o difícil não era o carro, era a permissão">
        <p>
          A parte que impressiona no caso da Zoox não é a engenharia do veículo — por mais bonita que seja a ideia de uma
          cabine simétrica sem volante. É a paciência regulatória. A empresa apostou em um produto que simplesmente não
          cabia na lei existente e passou anos esperando o texto legal alcançar o hardware. Quando a isenção saiu, a
          operação comercial veio em poucas semanas. Isso diz muito sobre onde está o gargalo real da IA aplicada ao mundo
          físico: quase nunca no modelo, quase sempre na permissão para usá-lo.
        </p>
        <p>
          Do lado de cá, a lição é a de sempre: não confunda o que está em operação comercial com o que aparece em vídeo.
          Uma cidade com corrida paga vale mais como evidência do que dez demonstrações. E, para quem trabalha com
          tecnologia no Brasil, o ponto prático é que a fronteira dos próximos anos aqui não é o robotáxi — é a
          instrumentação de frotas, telemetria e sistemas de assistência, que geram dado, emprego e retorno agora.
        </p>
      </EditorialTake>

      <ArticleSources
        category="ia"
        sources={[
          {
            title: "Zoox to widen US robotaxi footprint with San Francisco, Vegas expansion",
            url: "https://www.reuters.com/technology/zoox-widen-us-robotaxi-footprint-with-san-francisco-vegas-expansion-2026-03-24/",
            publisher: "Reuters",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Amazon's Zoox robotaxis approved to operate without steering wheels",
            url: "https://apnews.com/article/zoox-nhtsa-robotaxi-steering-wheel-1bdb3bb8ecc80a23721504315cfa50ce",
            publisher: "Associated Press",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Amazon's Zoox to launch paid robotaxi rides in Las Vegas on Aug. 10",
            url: "https://www.cnbc.com/2026/08/05/amazon-zoox-paid-robotaxi-rides-las-vegas.html",
            publisher: "CNBC",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Grant of Temporary Exemption From Portions of Various FMVSS Requirements — Zoox",
            url: "https://www.federalregister.gov/agencies/national-highway-traffic-safety-administration",
            publisher: "NHTSA / Federal Register",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Zoox can now charge for rides in its steering-wheel-free robotaxis",
            url: "https://www.theverge.com/transportation/973099/zoox-amazon-nhtsa-robotaxi-approval",
            publisher: "The Verge",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Zoox brings its robotaxis to Austin and Miami",
            url: "https://techcrunch.com/2026/03/24/zoox-brings-its-robotaxis-to-austin-and-miami/",
            publisher: "TechCrunch",
            accessedAt: "Agosto 2026",
          },
          {
            title: "Zoox — atualizações de serviço e áreas de operação",
            url: "https://zoox.com/journal/zoox-service-updates-and-expansions",
            publisher: "Zoox (comunicado oficial)",
            accessedAt: "Agosto 2026",
          },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="ia" />
    </article>
  );
};

export default ZooxCarrosSemMotoristaAmazon2026;
