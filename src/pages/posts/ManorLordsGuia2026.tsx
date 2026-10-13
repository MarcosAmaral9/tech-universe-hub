import { useEffect } from "react";
import { Calendar, Clock, Coins, Map, Shield, Swords, User, Users, Wheat, Skull, Hammer, Lightbulb } from "lucide-react";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import EditorialTake from "@/components/EditorialTake";
import ArticleSources from "@/components/ArticleSources";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import { AdInArticle, AdLeaderboard, AdRectangle } from "@/components/AdSense";
import heroImg from "@/assets/manor-lords-guia-completo-2026.webp";
import batalhaImg from "@/assets/manor-lords-batalha-milicia.webp";

const SLUG = "manor-lords-guia-completo-2026";
const TITLE = "Manor Lords em 2026: Guia Completo — Lançamento, Preço, Mapas e Dicas";

const FICHA = [
  ["Desenvolvedora", "Slavic Magic (projeto criado por Greg Styczeń)"],
  ["Publicadora", "Hooded Horse"],
  ["Acesso Antecipado", "26 de abril de 2024, no PC"],
  ["Versão 1.0", "Sem data oficial até 12 de outubro de 2026"],
  ["Preço no Steam (Brasil)", "R$ 79,99 (preço cheio consultado em 12/10/2026)"],
  ["Gêneros", "Construção de cidades, gestão econômica e batalhas táticas em tempo real"],
  ["Plataforma", "PC (Windows), via Steam e outras lojas de PC"],
  ["Idioma", "Interface e legendas em português do Brasil"],
];

const MAPAS = [
  { nome: "Germanic Valley", desc: "Vale amplo de colinas suaves, com oito regiões. É o mapa mais indicado para a primeira partida." },
  { nome: "High Peaks", desc: "Mapa menor, cercado por montanhas, com colinas altas e penhascos que favorecem a defesa." },
  { nome: "Winding River", desc: "Mapa cortado por um rio sinuoso, que molda estradas, pontes e o posicionamento das vilas." },
  { nome: "Twin Lakes", desc: "Adicionado na Major Update #6 (março de 2026), organizado ao redor de dois lagos." },
  { nome: "Wide Valley", desc: "Adicionado na Major Update #8 (agosto de 2026), o mapa mais recente até a data deste guia." },
];

const DICAS = [
  { t: "Comida antes de beleza", d: "Garanta caça, coleta e frutos silvestres no primeiro ano. Família sem comida derruba a aprovação rapidamente." },
  { t: "Lenha para o inverno", d: "Construa lenhador e cortador de lenha cedo. O frio cobra combustível, e a falta dele pesa na satisfação." },
  { t: "Deixe famílias livres", d: "Famílias sem emprego fazem as obras. Se todas estiverem ocupadas, a construção para." },
  { t: "Respeite a fertilidade", d: "Cada terreno tem fertilidade diferente por cultura. Plante trigo, cevada ou aveia onde o solo favorece." },
  { t: "Lotes com quintal", d: "Lotes residenciais (burgage plots) com espaço nos fundos permitem hortas, galinheiros e oficinas extras." },
  { t: "Milícia custa produção", d: "Ao convocar a milícia, maridos e filhos param de trabalhar. Use-a com moderação e invista em uma comitiva." },
];

const FAQ: [string, string][] = [
  ["Quando Manor Lords foi lançado?", "O jogo entrou em Acesso Antecipado no PC em 26 de abril de 2024. Até 12 de outubro de 2026 não havia data oficial para a versão 1.0."],
  ["Quanto custa Manor Lords no Brasil?", "O preço cheio no Steam brasileiro era R$ 79,99 na consulta de 12/10/2026. Promoções mudam o valor temporariamente; confira a loja antes de comprar."],
  ["Manor Lords tem português?", "Sim. A página do Steam lista interface e legendas em português do Brasil; o áudio completo é em inglês."],
  ["Os moradores morrem permanentemente?", "Sim. Moradores podem morrer em batalhas e por doenças, e não voltam. Novas famílias chegam por imigração, conforme a aprovação e o espaço disponível."],
  ["Quantos mapas o jogo tem?", "Até outubro de 2026: Germanic Valley, High Peaks, Winding River, Twin Lakes (Update #6) e Wide Valley (Update #8)."],
  ["Manor Lords tem multiplayer?", "Não. O jogo é exclusivamente para um jogador até a data deste guia."],
  ["Roda em PC fraco?", "Os requisitos mínimos pedem Windows 10 64 bits, 8 GB de RAM, GTX 1050 de 2 GB ou RX 460 e 15 GB livres. Um SSD é recomendado para carregamentos mais rápidos."],
];

const ManorLordsGuia2026 = () => {
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
            <Wheat className="h-4 w-4" /> Construção · Gestão · Batalhas
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">{TITLE}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />12 de Outubro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />16 min de leitura</span>
        </div>
      </header>

      <figure className="mb-8">
        <img src={heroImg} alt="Vila medieval da Francônia com casas de enxaimel, igreja, campos, bois e milícia na estrada" width={1536} height={864} className="w-full rounded-xl object-cover" fetchPriority="high" />
        <figcaption className="mt-2 text-xs text-muted-foreground">Ilustração editorial inspirada no cenário do jogo; não é captura de tela oficial.</figcaption>
      </figure>

      <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:mb-6">
        <p>
          <em>Manor Lords</em> é um dos fenômenos mais curiosos dos jogos de estratégia recentes. Criado praticamente sozinho pelo polonês Greg Styczeń, sob o estúdio Slavic Magic, o jogo passou anos como um dos títulos mais desejados do Steam antes de chegar ao Acesso Antecipado, em 26 de abril de 2024. Em menos de um mês, ultrapassou a marca de dois milhões de cópias vendidas, segundo o balanço divulgado na época. Mais de dois anos depois, ele continua em desenvolvimento ativo, recebendo grandes atualizações que adicionaram mapas, castelos de pedra, cidades controladas por IA e novas camadas de economia.
        </p>
        <p>
          Este guia reúne tudo o que é confirmado até 12 de outubro de 2026: datas, preço em reais, cenário histórico, modos de jogo, mapas, como funcionam os moradores e suas famílias, o que acontece quando eles morrem e dicas práticas para sobreviver ao primeiro inverno. Sempre que uma informação depende de fonte oficial, ela está listada ao final do artigo.
        </p>

        <h2 className="flex items-center gap-3"><Coins className="h-7 w-7 text-geek" />Ficha técnica</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-geek/30 bg-gradient-to-br from-geek/10 to-card/60">
          <table className="w-full text-sm">
            <tbody>
              {FICHA.map(([k, v]) => (
                <tr key={k} className="border-b border-geek/15 last:border-0">
                  <th className="p-3 text-left font-semibold text-geek whitespace-nowrap">{k}</th>
                  <td className="p-3 text-foreground/90">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Lançamento, Acesso Antecipado e versão 1.0</h2>
        <p>
          O lançamento em Acesso Antecipado significa que você compra o jogo agora e acompanha o desenvolvimento até a versão final. A publicadora Hooded Horse, conhecida por apoiar estúdios independentes de estratégia, cuida da distribuição. A página oficial deixa claro que o conteúdo ainda está incompleto, e o próprio estúdio vem reforçando que a versão 1.0 não tem data marcada: em 2026 a equipe explicou que as atualizações ficaram mais espaçadas porque transformar um projeto funcional em um produto acabado exige muito mais trabalho.
        </p>
        <p>
          Mesmo assim, o ritmo de conteúdo é consistente. A Major Update #5, de dezembro de 2025, trouxe castelos de pedra, vilas rivais controladas pela IA, um sistema de manutenção de construções e a revisão das mecânicas de produção e aprovação. A Update #6, de março de 2026, criou um novo nível de lote residencial, passou a medir o progresso pelo nível das famílias e adicionou o mapa Twin Lakes. A Update #8, de agosto de 2026, adicionou o mapa Wide Valley, uma interface reformulada, vacas, aveia, sidra, hidromel, queijo e um pátio de construção com carrinhos de mão.
        </p>

        <AdLeaderboard className="my-8" />

        <h2>Preço em reais</h2>
        <p>
          Na consulta feita ao Steam brasileiro em 12 de outubro de 2026, <em>Manor Lords</em> custava <strong>R$ 79,99</strong> no preço cheio. No mesmo dia ele estava em promoção de 35%, por R$ 51,99. Descontos assim são temporários, então vale adicionar o jogo à lista de desejos e aguardar as grandes promoções sazonais. O preço em dólar no Steam americano é de US$ 39,99.
        </p>

        <h2 className="flex items-center gap-3"><Shield className="h-7 w-7 text-geek" />História e cenário</h2>
        <p>
          O jogo se passa em uma versão inspirada na Francônia, região da atual Alemanha, no fim do século XIV. Você é um senhor enviado pelo rei para administrar terras perigosas e promissoras. Não há uma campanha cinematográfica com personagens falando o tempo todo: a "história" nasce da sua vila. Um povoado de cinco famílias vira aldeia, a aldeia vira cidade, e as disputas com um barão rival e com bandidos definem o rumo de cada partida.
        </p>
        <p>
          A grande marca de <em>Manor Lords</em> é o cuidado histórico. As casas seguem o modelo dos lotes medievais alemães, com a construção principal voltada para a rua e um quintal nos fundos. Pátios de mercado, igrejas de madeira que evoluem para pedra e milícias de camponeses refletem pesquisas do criador sobre a vida medieval. O jogo não pretende ser uma aula exata — regiões e personagens são fictícios —, mas a sensação de época é rara no gênero.
        </p>

        <h2 className="flex items-center gap-3"><Swords className="h-7 w-7 text-geek" />Modos de jogo e cenários</h2>
        <p>
          <em>Manor Lords</em> é um jogo para um jogador, sem multiplayer. Ao iniciar uma partida, você escolhe um cenário e personaliza as regras. Os cenários oficiais incluem <strong>Rise to Prosperity</strong>, focado em construção pacífica e crescimento econômico; <strong>Restoring the Peace</strong>, em que o objetivo é eliminar ameaças e conter o barão rival; e <strong>On the Edge</strong>, um desafio de sobrevivência com condições mais duras. Também existe um modo de batalhas rápidas, para quem quer apenas testar táticas militares.
        </p>
        <p>
          As opções personalizadas permitem ajustar ataques de bandidos, a agressividade do barão, a frequência de saqueadores e a dificuldade geral. Isso torna o jogo acessível tanto para quem quer apenas desenhar uma cidade bonita quanto para quem procura uma campanha de conquista tensa.
        </p>

        <AdInArticle className="my-8" />

        <h2 className="flex items-center gap-3"><Map className="h-7 w-7 text-geek" />Mapas e tamanhos</h2>
        <p>
          Cada mapa é dividido em regiões. Você começa em uma e pode expandir para as vizinhas usando a influência, comprando terras ou tomando-as em batalha. O Germanic Valley, o mapa original, tem oito regiões; o High Peaks é menor, com quatro regiões e relevo extremo. O tamanho total é pensado para que uma única partida dure dezenas de horas, já que cada região funciona quase como uma cidade própria, com recursos, fertilidade e jazidas diferentes.
        </p>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {MAPAS.map((m) => (
            <div key={m.nome} className="rounded-xl border border-geek/25 bg-gradient-to-br from-geek/10 to-card/70 p-5">
              <h3 className="font-display text-lg font-bold text-geek">{m.nome}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <p>
          O relevo importa de verdade. Encostas mudam o formato dos lotes, rios limitam estradas e colinas dão vantagem a quem defende. É por isso que tantos jogadores consideram as cidades de <em>Manor Lords</em> mais orgânicas que as de outros construtores: não há grade fixa, e as ruas acompanham o terreno.
        </p>

        <h2 className="flex items-center gap-3"><Users className="h-7 w-7 text-geek" />Moradores vivos e famílias</h2>
        <p>
          A população é organizada em famílias, e não em indivíduos soltos. Pela wiki oficial, uma família típica tem marido, esposa e filho; as cinco famílias iniciais começam só com o casal, e o filho aparece quando elas se mudam para um lote. Todos os membros trabalham no mesmo lugar e vivem na mesma casa. Você vê cada pessoa andando pela vila, carregando madeira, levando bois, indo à taverna ou à igreja, e pode até renomear os moradores.
        </p>
        <p>
          Cada família consome comida todo mês, cerveja periodicamente na taverna, roupas e sapatos. A <strong>aprovação</strong> resume a satisfação geral: com ela alta, novas famílias imigram mais rápido (desde que exista espaço de moradia); com ela baixa, o crescimento para e a moral da milícia cai. Desde a Update #6, o nível da vila depende do nível das famílias que moram na região, o que torna melhorar casas e atender necessidades ainda mais importante.
        </p>
        <p>
          Vale um esclarecimento honesto: apesar de as pessoas serem visíveis e nomeadas, o jogo não simula biografias, casamentos ou envelhecimento como um RPG de dinastia. A família é uma unidade de trabalho e consumo. É uma simulação viva no sentido de rotina e movimento, não de enredo pessoal.
        </p>

        <AdRectangle className="my-8" />

        <figure className="not-prose my-8">
          <img src={batalhaImg} alt="Milícia de camponeses com lanças e escudos enfrenta soldados com armadura em uma colina perto da vila" width={1536} height={864} loading="lazy" className="w-full rounded-xl object-cover" />
          <figcaption className="mt-2 text-xs text-muted-foreground">Ilustração editorial: camponeses convocados para a milícia arriscam a vida — e a produção da vila.</figcaption>
        </figure>

        <h2 className="flex items-center gap-3"><Skull className="h-7 w-7 text-geek" />Morte permanente dos personagens</h2>
        <p>
          Sim, as mortes em <em>Manor Lords</em> são permanentes. Quando você convoca a milícia, maridos e filhos das famílias largam o trabalho e vão para o campo de batalha. Se morrerem, não voltam. Membros da família também podem adoecer: ficam impedidos de trabalhar, e ervas (obtidas com a cabana de coleta melhorada) ajudam na recuperação. Doença e combate são as principais formas de perder moradores.
        </p>
        <p>
          O impacto é econômico e emocional ao mesmo tempo. Uma batalha mal planejada pode esvaziar fazendas e oficinas exatamente antes da colheita. Com o tempo, a imigração repõe a população, mas isso depende de aprovação e de casas disponíveis. Por isso, muitos jogadores preferem investir na comitiva do senhor (soldados profissionais) e em mercenários, preservando os camponeses para o trabalho. O próprio senhor também participa das batalhas, então expô-lo sem cuidado é arriscado.
        </p>

        <h2 className="flex items-center gap-3"><Hammer className="h-7 w-7 text-geek" />Economia, construção e combate</h2>
        <p>
          O ciclo central é: coletar, produzir, armazenar e distribuir. Madeira chega puxada por bois, pedra vem de pedreiras, grãos passam do campo ao celeiro, depois ao moinho e à padaria. Os mercados funcionam com barracas mantidas pelas próprias famílias, que distribuem comida, roupas e combustível. Sem armazéns e caminhos bem planejados, até uma vila rica passa fome.
        </p>
        <p>
          O combate é tático e em tempo real, com formações, flanqueamento, moral e cansaço. Lanceiros, arqueiros, besteiros e soldados de armas pesadas exigem equipamento produzido na sua própria economia. As batalhas são boas, mas a maior parte do tempo de jogo está na gestão, então não espere a escala de um <em>Total War</em>.
        </p>

        <h2 className="flex items-center gap-3"><Lightbulb className="h-7 w-7 text-geek" />Dicas para iniciantes</h2>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {DICAS.map((d) => (
            <div key={d.t} className="rounded-xl border-l-4 border-geek bg-geek/10 p-5">
              <h3 className="font-display font-bold text-geek">{d.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{d.d}</p>
            </div>
          ))}
        </div>
        <p>
          Um bom plano para o primeiro ano é simples: acampamento de lenhadores, armazém, cabana de coleta, caçador, poço e os primeiros lotes residenciais. Antes do inverno, garanta lenha e um estoque de comida variado, já que variedade também melhora a aprovação. Só depois pense em igreja, taverna e expansão para outras regiões.
        </p>

        <h2>Requisitos de PC</h2>
        <p>
          Os requisitos mínimos listados no Steam são Windows 10 de 64 bits, processador Intel Core i5-4670 ou AMD FX-4350, 8 GB de RAM, placa de vídeo GeForce GTX 1050 (2 GB), Radeon RX 460 (4 GB) ou Intel Arc A380, DirectX 12 e 15 GB de espaço livre em armazenamento. É recomendado instalar em um SSD para reduzir o tempo de carregamento. Cidades grandes pesam bastante no processador, então máquinas no limite mínimo devem reduzir a escala da vila ou os gráficos.
        </p>

        <h2>Vale a pena em 2026?</h2>
        <p>
          Para quem gosta de construção orgânica, ambientação histórica e uma economia que exige atenção, sim. A ressalva é a de sempre com Acesso Antecipado: há sistemas ainda incompletos, balanceamento em mudança e um fim de jogo que muitos consideram curto. Se você prefere produtos finalizados, pode esperar a versão 1.0. Se gosta de acompanhar a evolução de um jogo e já se diverte com dezenas de horas por mapa, o preço cheio em reais é justo.
        </p>

        <h2>Perguntas frequentes</h2>
        <div className="not-prose my-6 space-y-4">
          {FAQ.map(([q, a]) => (
            <section key={q} className="rounded-lg border border-geek/20 bg-card/70 p-5">
              <h3 className="font-display font-bold text-geek">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </section>
          ))}
        </div>
      </div>

      <EditorialTake category="geek" title="Análise do Marcos: a cidade é a verdadeira protagonista">
        <p>
          O que me prende em <em>Manor Lords</em> é ver uma rua nascer torta porque o terreno pediu. Cada lote encaixado na colina conta uma decisão, e cada inverno superado parece conquista. Poucos construtores de cidades fazem a vila parecer tão habitada.
        </p>
        <p>
          A espera pela versão 1.0 é real e o fim de jogo ainda precisa de fôlego. Mas, com mapas novos, castelos de pedra e uma economia cada vez mais rica, o projeto segue avançando. Quem perder milicianos numa batalha mal pensada vai entender rápido por que este jogo pune a pressa.
        </p>
      </EditorialTake>

      <ArticleSources
        category="geek"
        sources={[
          { title: "Manor Lords no Steam — preço, idiomas e requisitos", url: "https://store.steampowered.com/app/1363080/Manor_Lords/", publisher: "Steam", accessedAt: "Outubro 2026" },
          { title: "Version history — Manor Lords Official Wiki", url: "https://wiki.hoodedhorse.com/Manor_Lords/Version_history", publisher: "Hooded Horse", accessedAt: "Outubro 2026" },
          { title: "Family — Manor Lords Official Wiki", url: "https://wiki.hoodedhorse.com/Manor_Lords/Family/en", publisher: "Hooded Horse", accessedAt: "Outubro 2026" },
          { title: "Regions — Manor Lords Official Wiki", url: "https://wiki.hoodedhorse.com/Manor_Lords/Regions", publisher: "Hooded Horse", accessedAt: "Outubro 2026" },
          { title: "Major Update #6: Battlefield Changes, New Map and Family Based Progression", url: "https://store.steampowered.com/news/app/1363080/view/506230784633340011", publisher: "Slavic Magic / Steam", accessedAt: "Outubro 2026" },
          { title: "Major Update #8: Wide Valley, Cows, Cider, Advanced Construction", url: "https://steamdb.info/patchnotes/24905706/", publisher: "SteamDB", accessedAt: "Outubro 2026" },
          { title: "Manor Lords Update 8 adds new map, livestock and construction", url: "https://simulationdaily.com/news/manor-lords-update-8-revealed/", publisher: "Simulation Daily", accessedAt: "Outubro 2026" },
          { title: "Manor Lords update 6 patch notes", url: "https://www.pcgamesn.com/manor-lords/update-6-patch-notes", publisher: "PCGamesN", accessedAt: "Outubro 2026" },
        ]}
      />

      <RelatedPosts currentSlug={SLUG} />
      <CommentSection postId={SLUG} postTitle={TITLE} category="geek" />
    </article>
  );
};

export default ManorLordsGuia2026;
